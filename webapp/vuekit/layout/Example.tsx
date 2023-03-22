import {
  z,
  component,
  type Component,
  type OverridableComponent
} from "@innoai-tech/vuekit";
import { alpha, Box, styled, variant } from "@innoai-tech/vueuikit";
// @ts-ignore
import Prism from "prismjs";
// @ts-ignore
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

import { ref, watch, renderSlot } from "vue";
import { get } from "@innoai-tech/lodash";


export const StyledPre = styled(
  "pre",
  {}
)({
  overflow: "hidden",
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
});

export const CodeBlock = component(({}, { slots }) => {
  const v = ref<HTMLElement | null>(null);
  const code = ref("");

  watch(
    () => v.value,
    (el) => {
      if (el && code.value) {
        setTimeout(() => {
          el.innerHTML = Prism.highlight(
            code.value,
            Prism.languages.tsx,
            "tsx"
          );
        });
      }
    }
  );

  return () => {
    const child = get(renderSlot(slots, "default"), ["children", 0], {});

    code.value = (child.type == "code" ? child.children[0] : child.children) ?? "";

    return (
      <StyledPre>
        <code ref={v} />
      </StyledPre>
    );
  };
});

export const Example: OverridableComponent<{
  defaultComponent: "div";
  props: {};
}> = component(
  {
    component: z.custom<Component<any, any>>()
  },
  (props, {}) => {
    const Component = props.component;

    const code = (Component as any).__raw
      ? decodeURIComponent(atob((Component as any).__raw))
      : "";

    return () => {
      return (
        <Box
          sx={{
            "& + &": {
              mt: 32
            },
            border: "1px dashed",
            borderColor: "sys.outline-variant",
            rounded: "md"
          }}
        >
          <Box
            sx={{
              padding: 32,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderBottom: "none"
            }}
          >
            <div>
              <Component />
            </div>
          </Box>
          <Box
            sx={{
              borderTop: "1px dashed",
              borderColor: "sys.outline-variant",
              roundedBottom: "md"
            }}
          >
            <CodeBlock>
              {code}
            </CodeBlock>
          </Box>
        </Box>
      );
    };
  }
) as any;
