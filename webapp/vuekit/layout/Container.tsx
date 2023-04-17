import { styled, variant, alpha } from "@innoai-tech/vueuikit";

export const Unused = styled("div")({
  bgColor: "sys.surface-container"
});

export const Container = styled("div")({
  padding: 24,

  "& [data-example]": {
    display: "flex",
    flexDirection: "row-reverse",
    gap: 8,
    "& > *": {
      flex: 1
    },
    "& [data-example-container]": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  },

  "& :not(pre) > code": {
    font: "code",
    rounded: "xs",
    px: 4,
    bgColor: "sys.surface-container-low"
  },

  "& pre": {
    overflow: "auto",
    textStyle: "sys.body-small",
    containerStyle: "sys.surface-container-low",
    m: 0,
    rounded: "sm",
    p: 16,
    font: "code",
    "& .comment": {
      color: variant("sys.on-surface", alpha(0.38))
    },
    "& .string": {
      color: "sys.green"
    },
    "& .tag .attr-name": {
      color: "sys.green"
    },
    "& .function": {
      color: "sys.blue"
    },
    "& .punctuation": {
      color: variant("sys.on-surface", alpha(0.38))
    },
    "& .keyword": {
      color: "sys.error"
    }
  },

  "& p,li": {
    my: "1em"
  },

  overflowY: "auto"
});