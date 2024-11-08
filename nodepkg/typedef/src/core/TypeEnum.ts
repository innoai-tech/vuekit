import { type Context, defineType } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";

export type NativeEnumLike = {
  [k: string]: string | number;
  [n: number]: string;
};

export class TypeEnum<U, S extends any[]> extends TypeUnknown<U, { enum: S }> {
  static create = defineType(TypeEnum.createEnum);

  static createEnum<U extends number, T extends readonly U[]>(
    values: T,
  ): TypeEnum<T[number], U[]>;
  static createEnum<U extends string, T extends readonly U[]>(
    values: T,
  ): TypeEnum<T[number], U[]>;
  static createEnum<U extends string | number, T extends readonly U[]>(
    values: U[],
  ): TypeEnum<T[number], U[]> {
    return new TypeEnum<T[number], U[]>({ enum: values });
  }

  static literal = defineType(<T>(constant: T) => {
    return new TypeEnum<T, [T]>({ enum: [constant] });
  });

  static nativeEnum = defineType(<U extends NativeEnumLike>(nativeEnum: U) => {
    return new TypeEnum<U[keyof U], Array<keyof U>>({
      enum: Object.values(nativeEnum) as any[],
    });
  });

  override get type() {
    return "enums";
  }

  override validator(value: unknown, _: Context) {
    return this.schema.enum.includes(value as any);
  }
}
