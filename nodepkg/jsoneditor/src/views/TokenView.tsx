import { alpha, styled, variant } from "@innoai-tech/vueuikit";
import {
  component,
  component$,
  createProvider,
  JSONPointer,
  ref,
  rx,
  Teleport,
  type VNodeChild,
} from "@innoai-tech/vuekit";
import { JSONEditorProvider } from "../models";
import { Actions, ActionToolbar } from "./Actions.tsx";

export const Token = styled("span")({
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: 12,
  lineHeight: 24,
  wordBreak: "keep-all",
  whiteSpace: "nowrap",
  font: "code",
  opacity: 0.3,
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
        {slots.leading && (
          <PropLeading data-visible-on-hover>{slots.leading()}</PropLeading>
        )}
        {slots.default?.()}
      </PropNameView>
    );
  };
});

const PropLeading = styled(ActionToolbar)({
  position: "absolute",
  ml: -28,
});

const PropNameView = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  wordBreak: "keep-all",
  whiteSpace: "nowrap",

  border: "1px solid",
  borderColor: "rgba(0,0,0,0)",
  fontSize: 12,
  lineHeight: 24,

  _deprecated: {
    textDecoration: "line-through",
  },

  _optional: {
    "&:after": { content: `"?"`, color: "sys.secondary", opacity: 0.58 },
  },
});

export const LineTitle = styled("div")({
  position: "absolute",
  left: 0,
  display: "block",
  opacity: 0.58,
  fontSize: 10,
  lineHeight: 10,
  top: 0,

  "&::before": {
    content: `"// "`,
    font: "code",
  },
});

export const LineError = styled("div")({
  display: "block",
  fontSize: 10,
  lineHeight: 14,
  color: "sys.error",
});

export const LineContainer = styled("div")({
  position: "relative",
  py: 4,

  _hover: {
    containerStyle: "sys.surface-container",

    "& [data-visible-on-hover]": {
      visibility: "visible",
    },
  },

  "&:focus-within": {
    containerStyle: "sys.surface-container",
  },

  _dirty: {
    bgColor: variant("sys.warning-container", alpha(0.38)),
  },

  _error: {
    bgColor: "sys.error-container",
  },

  [`&:has(${Actions})`]: {
    [`& > ${LineError}`]: {
      display: "none",
    },

    _error: {
      bgColor: "inherit",
    },
  },
});

export const LayoutContextProvider = createProvider(
  () => {
    return {
      indent: 0,
      $container: ref<HTMLDivElement | null>(null),
    };
  },
  {
    name: "IntentContext",
  },
);

export const Block = component<{
  openToken: string;
  closeToken: string;
  $leading?: VNodeChild;
  $trailing?: VNodeChild;
  $default?: VNodeChild;
}>((props, { slots }) => {
  const ctx = LayoutContextProvider.use();

  const $container = ref<HTMLDivElement | null>(null);
  const $trailing = ref<HTMLDivElement | null>(null);

  return () => (
    <>
      <Token>{props.openToken}</Token>
      {slots.leading?.()}
      <Teleport to={ctx.$container.value}>
        <LineSection data-indent={ctx.indent}>
          <Lines ref={$container} />
          <LinesTrailing ref={$trailing} />
          {$trailing.value && (
            <LayoutContextProvider
              value={{
                $container: $trailing,
                indent: 1 + (ctx.indent ?? 0),
              }}
            >
              {slots.trailing?.()}
            </LayoutContextProvider>
          )}
        </LineSection>
        <LineRow
          style={{
            paddingLeft: `${ctx.indent * 32}px`,
            display: "flex",
          }}
        >
          <Token>{props.closeToken}</Token>
        </LineRow>
      </Teleport>
      {$container.value && (
        <LayoutContextProvider
          value={{
            $container: $container,
            indent: 1 + (ctx.indent ?? 0),
          }}
        >
          {slots.default?.()}
        </LayoutContextProvider>
      )}
    </>
  );
});

export const Line = component$<{
  path: any[];
  dirty?: boolean;
  viewOnly?: boolean;
  title?: string;
  description?: string;
  $default?: VNodeChild;
}>((props, { slots, render }) => {
  const ctx = LayoutContextProvider.use();
  const editor$ = JSONEditorProvider.use();

  const $line = rx(
    editor$.error$,
    render((errors) => {
      const pointer = JSONPointer.create(props.path);
      const hasError = !props.viewOnly && !!errors[pointer];

      return (
        <LineContainer
          data-error={hasError}
          data-dirty={props.dirty}
          style={{
            paddingLeft: `${ctx.indent * 32}px`,
          }}
        >
          {props.title && (
            <LineTitle
              style={{
                paddingLeft: `${ctx.indent * 32}px`,
              }}
            >
              {props.title}
            </LineTitle>
          )}
          <LineRow>{slots.default?.()}</LineRow>
          {hasError && <LineError>{`${errors[pointer]}`}</LineError>}
        </LineContainer>
      );
    }),
  );

  return () => <Teleport to={ctx.$container.value}>{$line}</Teleport>;
});

const Lines = styled("div")({});

const LineSection = styled("section")({});

const LinesTrailing = styled("div")({});

export const LineRow = styled("div")({
  display: "flex",
  alignItems: "start",
  pr: 10,
});

export const Description = styled("span")({
  display: "block",
});
