import { styled } from "@innoai-tech/vueuikit";
import { component$, type VNodeChild } from "@innoai-tech/vuekit";
import { ActionToolbar } from "./Action.tsx";

const TextBox = styled("span")({
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: 12,

  border: "1px solid",
  borderColor: "rgba(0,0,0,0)",
  py: 4,

  wordBreak: "keep-all",
  whiteSpace: "nowrap",
});

export const TokenView = styled(TextBox)({
  font: "code",
  opacity: 0.3,
});

const PropLeading = styled(ActionToolbar)({
  position: "absolute",
  ml: -28,
});

const PropNameView = styled(TextBox)({
  position: "relative",
  display: "flex",
  alignItems: "center",

  _deprecated: {
    textDecoration: "line-through",
  },

  _optional: {
    "&:after": { content: `"?"`, color: "sys.secondary", opacity: 0.58 },
  },
});

export const PropName = component$<{
  deprecated?: boolean;
  optional?: boolean;
  nullable?: boolean;
  $leading?: VNodeChild;
  $default?: VNodeChild;
}>((props, { slots }) => {
  return () => {
    return (
      <PropNameView
        data-deprecated={props.deprecated}
        data-optional={props.optional}
        data-nullable={props.nullable}
      >
        {slots.leading && <PropLeading data-visible-on-hover>{slots.leading()}</PropLeading>}
        {slots.default?.()}
      </PropNameView>
    );
  };
});
