import { rx, subscribeOnMountedUntilUnmount } from "@innoai-tech/vuekit";
import { styled, variant, alpha } from "@innoai-tech/vueuikit";
import { EditorContextProvider, useExtension } from "./EditorContextProvider";
import { syntaxHighlighting } from "@innoai-tech/codemirror";
import { classHighlighter } from "@lezer/highlight";

export const EditorContainer = styled("div", () => {
  const ctx = EditorContextProvider.use();

  useExtension(() => {
    return syntaxHighlighting(classHighlighter, { fallback: true });
  });

  rx(ctx.serve(), subscribeOnMountedUntilUnmount());

  return (Root) => <Root ref={ctx.dom$} />;
})({
  width: "100%",
  height: "100%",
  fontSize: 12,

  "& .cm-editor": {
    outline: "none",
    height: "100%",

    "& .cm-gutterElement": {
      color: "sys.secondary"
    },
    "& [aria-readonly=true]": {
      opacity: 0.7
    },
    "& .cm-activeLineGutter": {
      backgroundColor: variant("sys.primary", alpha(0.08))
    },
    "& .cm-activeLine": {
      backgroundColor: variant("sys.primary", alpha(0.08))
    },

    "& .diffLineGutter": {
      backgroundColor: variant("sys.error", alpha(0.08))
    },
    "& .diffLine": {
      backgroundColor: variant("sys.error", alpha(0.08))
    },

    "& .cm-tooltip-autocomplete ul li[aria-selected]": {
      containerStyle: "sys.primary"
    },
    "& .cm-gutters": {
      border: "none",
      containerStyle: "sys.surface-container-lowest"
    },
    "& .cm-tooltip": {
      border: "none",
      boxShadow: "2",
      borderRadius: "xs",
      containerStyle: "sys.surface-container-lowest",
      fontFamily: "code"
    },
    "& .cm-tooltip-lint": {
      overflow: "hidden"
    },
    "& .cm-tooltip-hover": {
      overflow: "hidden"
    }
  },
  "& .tok-propertyName": {
    color: "sys.primary"
  },
  "& .tok-number": {
    color: "sys.error"
  },
  "& .tok-keyword": {
    color: "sys.error"
  },
  "& .tok-string": {
    color: "sys.tertiary"
  },
  "& .cm-lint-marker": {
    width: "0.7em",
    height: "0.7em"
  },
  "& .tok-punctuation": {
    color: variant("sys.primary", alpha(0.38))
  }
});
