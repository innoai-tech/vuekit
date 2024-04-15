import {
  continuedIndent,
  foldInside,
  foldNodeProp,
  indentNodeProp,
  LanguageSupport,
  LRLanguage,
} from "@codemirror/language";
import { parser } from "../parser";

const jsoncueLanguage = LRLanguage.define({
  name: "jsoncue",
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Object: continuedIndent({ except: /^\s*\}/ }),
        Array: continuedIndent({ except: /^\s*\]/ }),
      }),
      foldNodeProp.add({
        "Object Array": foldInside,
      }),
    ],
  }),
  languageData: {
    closeBrackets: { brackets: ["[", "{", '"""', "'''", '"', "'"] },
    indentOnInput: /^\s*[\}\]]$/,
  },
});

export function jsoncue() {
  return new LanguageSupport(jsoncueLanguage);
}
