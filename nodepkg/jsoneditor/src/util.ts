import { type Context, Schema, t, type Type } from "@innoai-tech/typedef";
import { get, isArray, isObject, isUndefined } from "es-toolkit/compat";
import type { ValueContext } from "./models";

type ValueLine = {
  value: any;
  previous: any;
  typedef: Type;
  ctx: Context;
  close?: boolean;
};

export const normalizeArray = (value: any | any[]) => {
  return isArray(value) ? value : !isUndefined(value) ? [value] : [];
};

export function* flattenValue(
  value: any,
  previous: any,
  typedef: Type,
  ctx: ValueContext,
): Generator<ValueLine> {
  if (
    typedef.type == "object" ||
    typedef.type == "record" ||
    typedef.type == "intersection" ||
    (typedef.type == "union" && Schema.schemaProp(typedef, "discriminator"))
  ) {
    const objValueLine = {
      value: value ?? {},
      previous: previous,
      typedef: typedef,
      ctx: ctx,
    };

    yield objValueLine;

    for (const [propName, propValue, propType] of typedef.entries(objValueLine.value, ctx)) {
      if (!Object.hasOwn(objValueLine.value, propName)) {
        continue;
      }

      yield* flattenValue(propValue, get(previous, [propName]), propType, {
        ...ctx,
        path: [...ctx.path, propName],
        branch: [...ctx.branch, propValue],
      });
    }

    yield {
      ...objValueLine,
      close: true,
    };

    return;
  }

  if (typedef.type == "union" && isUndefined(Schema.schemaProp(typedef, "discriminator"))) {
    const oneOf = Schema.schemaProp(typedef, "oneOf");

    // for some type `string | string[]`
    if (oneOf?.length == 2) {
      const arrayType = oneOf.find((x: any) => x.type == "array");
      const singleType = oneOf.find((x: any) => x.type != "array");

      if (arrayType && singleType) {
        if (Schema.schemaProp(arrayType, "items").type == singleType.type) {
          const arr = normalizeArray(value);
          const previousArr = normalizeArray(previous);

          const arrValueLine = {
            value: arr,
            previous: previousArr,
            typedef: arrayType,
            ctx: ctx,
          };

          yield arrValueLine;

          for (const [idx, itemValue, itemType] of arrayType.entries(arr, ctx)) {
            yield* flattenValue(itemValue, get(previousArr, [idx]), itemType, {
              ...ctx,
              path: [...ctx.path, idx],
              branch: [...ctx.branch, itemValue],
            });
          }

          yield {
            ...arrValueLine,
            close: true,
          };

          return;
        }
      }
    }
  }

  if (typedef.type == "array") {
    const arrValueLine = {
      value: value,
      previous: previous,
      typedef: typedef,
      ctx: ctx,
    };

    yield arrValueLine;

    for (const [idx, itemValue, propSchema] of typedef.entries(value, ctx)) {
      yield* flattenValue(itemValue, get(previous, [idx]), propSchema, {
        ...ctx,
        path: [...ctx.path, idx],
        branch: [...ctx.branch, itemValue],
      });
    }

    yield {
      ...arrValueLine,
      close: true,
    };

    return;
  }

  if (typedef.type == "any" || typedef.type == "unknown") {
    if (isArray(value)) {
      yield* flattenValue(value, previous, t.array(t.any()), ctx);
      return;
    }

    if (isObject(value)) {
      yield* flattenValue(value, previous, t.record(t.string(), t.any()), ctx);
      return;
    }
  }

  yield { value: value, previous: previous, typedef: typedef, ctx: ctx };
}
