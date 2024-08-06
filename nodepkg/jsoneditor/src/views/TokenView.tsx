import { alpha, styled, variant } from "@innoai-tech/vueuikit";
import {
  component,
  createProvider,
  type VNodeChild
} from "@innoai-tech/vuekit";
import { isBoolean, isNull, isString, isUndefined } from "@innoai-tech/lodash";
import { ref, Teleport } from "vue";
import { Tooltip } from "./Tooltip.tsx";
import { Markdown } from "@innoai-tech/vuemarkdown";

export const Token = styled("span")({
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: 11,
  lineHeight: 18,
  wordBreak: "keep-all",
  whiteSpace: "nowrap",
  font: "code",
  opacity: 0.3
});

const PropLeading = styled("span")({
  display: "inline-table",
  lineHeight: 18,
  ml: -18
});

export const PropName = styled<
  {
    deprecated?: boolean;
    optional?: boolean;
    nullable?: boolean;
    description?: string;
    $leading?: VNodeChild;
    $default?: VNodeChild;
  },
  "span"
>("span", (props, { slots }) => {
  return (Root) => {
    const $el = (
      <Root
        data-deprecated={props.deprecated}
        data-optional={props.optional}
        data-nullable={props.nullable}
      >
        {slots.leading && <PropLeading>{slots.leading?.()}</PropLeading>}
        {slots.default?.()}
      </Root>
    );

    if (props.description) {
      return (
        <Tooltip
          placement={"right"}
          $title={(
            <Description sx={{ minWidth: 200 }}>
              <Markdown text={props.description} />
            </Description>
          )}
        >
          {$el}
        </Tooltip>
      );
    }

    return (
      $el
    );
  };
})({
  display: "inline-flex",
  alignItems: "center",
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: 11,
  lineHeight: 18,

  _deprecated: {
    textDecoration: "line-through"
  },

  _nullable: {
    "&:after": { content: `"??"`, color: "sys.error" }
  },

  _optional: {
    "&:after": { content: `"?"`, color: "sys.secondary" }
  },

  [`& ${PropLeading}`]: {
    visibility: "hidden"
  },

  _hover: {
    [`& ${PropLeading}`]: {
      visibility: "visible"
    }
  }
});

export const LayoutContextProvider = createProvider(
  () => {
    return {
      indent: 0,
      $container: ref<HTMLDivElement | null>(null)
    };
  },
  {
    name: "IntentContext"
  }
);

export const Block = component<{
  openToken: string;
  closeToken: string;
  $leading?: VNodeChild;
  $default?: VNodeChild;
}>((props, { slots }) => {
  const ctx = LayoutContextProvider.use();
  const $container = ref<HTMLDivElement | null>(null);

  return () => (
    <>
      <Token>{props.openToken}</Token>
      {slots.leading?.()}

      <Teleport to={ctx.$container.value}>
        <section ref={$container} />
        <LineRow
          style={{
            paddingLeft: `${ctx.indent * 18}px`
          }}
        >
          <Token>{props.closeToken}</Token>
        </LineRow>
      </Teleport>
      {$container.value && (
        <LayoutContextProvider
          value={{
            $container: $container,
            indent: 1 + (ctx.indent ?? 0)
          }}
        >
          {slots.default?.()}
        </LayoutContextProvider>
      )}
    </>
  );
});

export const Line = component<{
  dirty?: boolean;
  $default?: VNodeChild;
}>((props, { slots }) => {
  const ctx = LayoutContextProvider.use();

  return () => {
    return (
      <Teleport to={ctx.$container.value}>
        <LineRow
          data-dirty={props.dirty}
          style={{
            paddingLeft: `${ctx.indent * 18}px`
          }}
        >
          {slots.default?.()}
        </LineRow>
      </Teleport>
    );
  };
});

export const LineRow = styled("div")({
  display: "flex",
  alignItems: "end",

  _hover: {
    containerStyle: "sys.surface-container"
  },

  _dirty: {
    bgColor: variant("sys.warning-container", alpha(0.38))
  }
});

export const Description = styled("span")({
  display: "inline-block",
  maxWidth: "20vw",

  "& p": {
    my: "0.5em"
  }
});

export const ValueView = component<{
  value: any;
  onClick?: () => void;
}>((props, { emit }) => {
  return () => {
    if (isUndefined(props.value) || isNull(props.value)) {
      return (
        <UndefinedValue onClick={() => emit("click")}>
          {"undefined"}
        </UndefinedValue>
      );
    }

    if (isString(props.value)) {
      return (
        <StringValue onClick={() => emit("click")}>
          {JSON.stringify(props.value)}
        </StringValue>
      );
    }

    if (isBoolean(props.value)) {
      return (
        <BooleanValue onClick={() => emit("click")}>
          {String(props.value)}
        </BooleanValue>
      );
    }

    return (
      <NumberValue onClick={() => emit("click")}>
        {String(props.value)}
      </NumberValue>
    );
  };
});

const StringValue = styled(Token)({
  display: "inline-block",
  color: "sys.primary",
  font: "code",

  opacity: 1,
  cursor: "pointer"
});

const BooleanValue = styled(Token)({
  display: "inline-block",
  color: "sys.warning",
  font: "code",

  opacity: 1,
  cursor: "pointer"
});

const NumberValue = styled(Token)({
  display: "inline-block",
  color: "sys.success",
  font: "code",

  opacity: 1,
  cursor: "pointer"
});

const UndefinedValue = styled(Token)({
  display: "inline-block",
  color: "sys.error",
  font: "code",

  opacity: 1,
  cursor: "pointer"
});
