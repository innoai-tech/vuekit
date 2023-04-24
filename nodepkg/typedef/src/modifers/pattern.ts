import { Type } from "../Type";

export function pattern(regexp: RegExp, msg?: string) {
  return <S extends Type<string, any>>(type: S) => {
    return Type.refine(type, "pattern", (value) => {
      return (
        regexp.test(value) ||
        (msg ??
          `Expected a ${type.type} matching \`/${regexp.source}/\` but received "${value}"`)
      );
    });
  };
}
