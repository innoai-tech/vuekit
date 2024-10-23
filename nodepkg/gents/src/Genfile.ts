import { isFunction, isObject, isString, map } from "@innoai-tech/lodash";
import { writeFile } from "fs/promises";

export class ID {
  constructor(private id: string) {
  }

  toString(): string {
    return this.id;
  }
}

export const dumpValue = (value: any) => {
  if (!value) {
    return null;
  }

  const v = isFunction(value) ? value() : value;
  if (v instanceof ID) {
    return `${v}`;
  }
  if (isObject(v)) {
    return `${dumpObj(v)}`;
  }
  if (isString(v)) {
    return `"${v}"`;
  }
  return `${v}`;
};

export const dumpObj = (obj: { [k: string]: any }): string => {
  return `{
${map(obj, (v, k) => {
    if (!v) {
      return null;
    }

    let key = `"${k}"`;

    switch (k[0]) {
      case "?": {
        key = `"${k.slice(1)}"?`;
        break;
      }
      case "+":
        key = `[${k.slice(1)}]`;
    }

    return `${key}: ${dumpValue(v)},`;
  })
    .filter((v) => !!v)
    .join("\n")}
}`;
};

export class Genfile {
  static id(i: string): ID {
    return new ID(i);
  }

  private imports = new Map<string, Record<string, string>>();
  private decls: string[] = [];

  import(path: string, expose: string, alias = "") {
    const exposes = this.imports.get(path) ?? {};
    this.imports.set(path, {
      ...exposes,
      [expose]: alias
    });
  }

  decl(d: string) {
    this.decls.push(d);
  }

  async sync(file: string) {
    await writeFile(
      file,
      Buffer.from(
        [
          ...map([...this.imports.entries()], ([path, nameAndAlias]) => {
            return `import { ${map(nameAndAlias, (alias, name) =>
              alias ? `${name} as ${alias}` : name
            ).join(", ")} } from "${path}";`;
          }),
          ...this.decls
        ].join("\n\n")
      ).toString()
    );

    return;
  }
}
