import {isUndefined, mapValues, omit} from "@innoai-tech/lodash";
import {
    type AnyType,
    type Context,
    type Infer,
    type InferTuple,
    type Simplify,
    run,
    EmptyContext,
    Type,
    TypeWrapper,
    validate
} from "./Type.ts";
import {TypeEnum} from "./TypeEnum.ts";
import {TypeObject} from "./TypeObject.ts";

type DiscriminatedUnionType<
    D extends string,
    Mapping extends Record<string, AnyType>,
> = ValueOf<{
    [K in keyof Mapping]: { [k in D]: K } & Infer<Mapping[K]>;
}>;

type ValueOf<T> = T[keyof T];

export class TypeUnion<T, S extends AnyType[]> extends Type<
    T,
    {
        oneOf: S;
        discriminator?: {
            propertyName: string;
        };
    }
> {
    static create<Types extends AnyType[]>(...types: Types) {
        return new TypeUnion<InferTuple<Types>[number], Types>({
            oneOf: types,
        });
    }

    static discriminatorMapping<
        D extends string,
        Mapping extends Record<string, AnyType>,
    >(discriminatorPropertyName: D, mapping: Mapping) {
        const normalizedMapping = mapValues(mapping, (def, discriminatorValue) => {
            const schema: Record<string, any> = {
                [discriminatorPropertyName]: TypeEnum.literal(discriminatorValue),
            };

            for (const [prop, _, t] of def.entries({}, EmptyContext)) {
                schema[String(prop)] = t;
            }

            return TypeObject.create(schema);
        });

        return new TypeUnion<
            Simplify<DiscriminatedUnionType<D, Mapping>>,
            AnyType[]
        >({
            oneOf: Object.values(normalizedMapping) as any,
            discriminator: {
                propertyName: discriminatorPropertyName,
            },
        });
    }

    _discriminatorPropName?: AnyType;

    discriminatorPropType(ctx: Context) {
        if (isUndefined(this._discriminatorPropName)) {
            this._discriminatorPropName = (() => {
                const discriminatorPropName =
                    this.schema.discriminator?.propertyName ?? "";

                const values = this.schema.oneOf.reduce((ret, s) => {
                    return [
                        // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
                        ...ret,
                        ...(s.unwrap.schema.properties[discriminatorPropName] as AnyType)
                            .unwrap.schema.enum,
                    ];
                }, [] as any[]);

                return TypeWrapper.of(TypeEnum.create(values), {
                    $meta: ctx.node?.meta ?? {},
                });
            })();
        }

        return this._discriminatorPropName;
    }

    _discriminatorMapping: { [K: string | number]: { [K: string]: AnyType } } =
        {};

    discriminatorMapping(discriminatorPropValue: any, ctx: Context) {
        const discriminatorPropName = this.schema.discriminator?.propertyName ?? "";

        if (this._discriminatorMapping[discriminatorPropValue]) {
            return this._discriminatorMapping[discriminatorPropValue];
        }

        const enumValues = this.discriminatorPropType(ctx).unwrap.schema.enum;

        if (enumValues.includes(discriminatorPropValue)) {
            const matched = this.schema.oneOf.find((s) => {
                const t = s.unwrap.schema.properties[discriminatorPropName] as AnyType;
                if (t.unwrap.schema.enum) {
                    const [err, _] = t.validate(discriminatorPropValue);
                    return !err;
                }
                return false;
            });

            if (matched) {
                if (
                    isUndefined(this._discriminatorMapping[`${discriminatorPropValue}`])
                ) {
                    this._discriminatorMapping[`${discriminatorPropValue}`] = omit(
                        matched.unwrap.schema.properties,
                        [discriminatorPropName],
                    );
                }
                return this._discriminatorMapping[`${discriminatorPropValue}`];
            }
        }

        return {};
    }

    override* entries(
        value: unknown,
        context: Context,
    ): Iterable<[string | number | symbol, unknown, AnyType | Type<never>]> {
        if (this.schema.discriminator) {
            const discriminatorPropName = this.schema.discriminator.propertyName;

            const discriminatorPropValue = (value as any)?.[discriminatorPropName];

            const base = TypeObject.create({
                [discriminatorPropName]: this.discriminatorPropType(context),
                ...this.discriminatorMapping(discriminatorPropValue, context),
            });

            yield* base.entries(value, context);
        }
    }

    override get type() {
        return "union";
    }

    override coercer(value: unknown) {
        for (const t of this.schema.oneOf) {
            const [error, coerced] = validate(value, t, {coerce: true});
            if (!error) {
                return coerced;
            }
        }
        return value;
    }

    override validator(value: unknown, context: Context) {
        if (this.schema.discriminator) {
            const discriminatorPropName = this.schema.discriminator.propertyName;
            const discriminatorPropValue = (value as any)?.[discriminatorPropName];

            const base = TypeObject.create({
                [discriminatorPropName]: this.discriminatorPropType(context),
                ...this.discriminatorMapping(discriminatorPropValue, context),
            });

            return base.validator(value, context);
        }

        const failures = [];

        for (const t of this.schema.oneOf) {
            const [...tuples] = run(value, t, context);
            const [first] = tuples;

            if (first && !first[0]) {
                return [];
            }

            for (const [failure] of tuples) {
                if (failure) {
                    failures.push(failure);
                }
            }
        }

        return [
            `Expected the value to satisfy a union of \`${this.schema.oneOf
                .map((t) => t.type)
                .join(" | ")}\`, but received: ${value}`,
            ...failures,
        ];
    }
}