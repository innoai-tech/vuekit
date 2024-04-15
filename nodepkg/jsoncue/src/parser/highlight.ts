import { styleTags, tags as t } from "@lezer/highlight";

export const jsoncueHighlighting = styleTags({
  PropertyName: t.propertyName,
  String: t.string,
  Bytes: t.string,
  Number: t.number,
  "True False": t.bool,
  ",": t.separator,
  ":": t.separator,
  "[ ]": t.squareBracket,
  "{ }": t.brace,
});
