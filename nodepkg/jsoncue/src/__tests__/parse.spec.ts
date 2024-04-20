import { describe, expect, it } from "bun:test";
import { Source, asBytes, toValue } from "../astutil";
import { testTree } from "@lezer/generator/dist/test";

describe("parse fail", () => {
  it("should handle parse error ", () => {
    const source = Source.parse(`[
  {
    1
  }
]`);

    testTree(source.tree, n.Document(
      n.Array(n.Object(
        n.Error
      ))
    ));
  });

  it("should handle parse error", () => {
    const source = Source.parse(`
a: "1"
"str
`);
    testTree(source.tree, n.Document(
      n.Property(n.PropertyName, n.String),
      n.Error,
      n.Property(n.PropertyName, n.Error)
    ));
  });
});

describe("happy parse", () => {
  it("should parse string", () => {
    const source = Source.parse(`"str"`);

    testTree(source.tree, n.Document(n.String));
    expect(toValue(source, source.topNode)).toBe("str");
  });

  it("should parse bytes", () => {
    const source = Source.parse(`'str'`);

    testTree(source.tree, n.Document(n.Bytes));
    expect(toValue(source, source.topNode)).toEqual(asBytes("str"));
  });

  it("should parse number", () => {
    const source = Source.parse(`1`);
    testTree(source.tree, n.Document(n.Number));
    expect(toValue(source, source.topNode)).toEqual(1);
  });

  it("should parse true", () => {
    const source = Source.parse(`true`);
    testTree(source.tree, n.Document(n.True));
    expect(toValue(source, source.topNode)).toEqual(true);
  });

  it("should parse false", () => {
    const source = Source.parse(`false`);
    testTree(source.tree, n.Document(n.False));
    expect(toValue(source, source.topNode)).toEqual(false);
  });

  it("should parse null", () => {
    const source = Source.parse(`null`);
    testTree(source.tree, n.Document(n.Null));
    expect(toValue(source, source.topNode)).toEqual(null);
  });

  it("should parse array", () => {
    const source = Source.parse("[1,2,4]");

    testTree(source.tree, n.Document(n.Array(n.Number, n.Number, n.Number)));

    expect(toValue(source, source.topNode)).toEqual([1, 2, 4]);
  });

  it("should parse object", () => {
    const source = Source.parse("{x:1}");

    testTree(
      source.tree,
      n.Document(n.Object(n.Property(n.PropertyName, n.Number)))
    );
    expect(toValue(source, source.topNode)).toEqual({
      x: 1
    });
  });

  it("should parse top properties", () => {
    const source = Source.parse(`
        a: 1
        b: true
    `);

    testTree(
      source.tree,
      n.Document(
        n.Property(n.PropertyName, n.Number),
        n.Property(n.PropertyName, n.True)
      )
    );

    expect(toValue(source, source.topNode)).toEqual({
      a: 1,
      b: true
    });
  });

  it("should parse property with multiple property names", () => {
    const source = Source.parse(`x: b: ""`);

    testTree(
      source.tree,
      n.Document(n.Property(n.PropertyName, n.PropertyName, n.String))
    );
  });
});

abstract class n {
  static StringValue = (x: string) => {
    return JSON.stringify(x);
  };

  static Document = (...props: string[]) => {
    return `Document(${props.join(",")})`;
  };

  static Object = (...props: string[]) => {
    return `Object(${[n.StringValue("{"), ...props, n.StringValue("}")].join(
      ","
    )})`;
  };

  static Array = (...items: n[]) => {
    return `Array(${[n.StringValue("["), ...items, n.StringValue("]")].join(
      ","
    )})`;
  };


  static Property(...propertyNamesAndValue: string[]) {
    return `Property(${[...propertyNamesAndValue].join(",")})`;
  }

  static PropertyName = "PropertyName";
  static Number = "Number";
  static String = "String";
  static Bytes = "Bytes";
  static True = "True";
  static False = "False";
  static Null = "Null";
  static Error = "⚠";
}
