import {
  type TypeOf,
  ZodDefault,
  ZodObject,
  ZodOptional,
  type ZodTypeAny,
} from "zod";

export type PublicPropsOf<O extends Record<string, ZodTypeAny>> = TypeOfPublic<
  OmitEmitProps<O>
>;

export type InternalPropsOf<O extends Record<string, ZodTypeAny>> =
  TypeOfInternal<OmitEmitProps<O>>;

export type EmitsOf<O extends Record<string, ZodTypeAny>> = ToEmits<
  PickEmitProps<O>
>;

type TypeOfPublic<O extends Record<string, ZodTypeAny>> = TypeOf<
  ZodObject<{
    [K in keyof O]: O[K] extends ZodDefault<infer U> ? U : O[K];
  }>
>;

type TypeOfInternal<O extends Record<string, ZodTypeAny>> = TypeOf<
  ZodObject<{
    [K in keyof O]: O[K] extends ZodOptional<infer U>
      ? U extends ZodDefault<any>
        ? U
        : ZodOptional<U>
      : O[K];
  }>
>;

export type PickEmitProps<O extends Record<string, any>> = {
  [K in keyof O as K extends string ? EmitProp<K> : never]: O[K];
};

export type OmitEmitProps<O extends Record<string, any>> = Omit<
  O,
  keyof PickEmitProps<O>
>;

export type EmitProp<Prop extends string> = Prop extends `on${infer Name}`
  ? Name extends Capitalize<Name>
    ? `on${Name}`
    : never
  : never;

export type EmitName<Prop extends string> = Prop extends `on${infer Name}`
  ? ToKebabCase<Name>
  : never;

export type ToEmits<O extends Record<string, any>> = {
  [K in keyof O as K extends string ? EmitName<K> : never]: TypeOf<O[K]>;
};

export type ToKebabCase<S> = S extends `${infer C}${infer T}`
  ? ToKebabCase<T> extends infer U
    ? U extends string
      ? T extends Uncapitalize<T>
        ? `${Uncapitalize<C>}${U}`
        : `${Uncapitalize<C>}-${U}`
      : never
    : never
  : S;

export type ToCamelCase<S extends string> = S extends `${infer T}-${infer U}`
  ? `${T}${Capitalize<ToCamelCase<U>>}`
  : S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<ToCamelCase<U>>}`
  : S;
