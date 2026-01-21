import { styled } from "@innoai-tech/vueuikit";
import type { VNodeChild } from "vue";
import {
  component$,
  observableRef,
  rx,
  subscribeOnMountedUntilUnmount,
} from "@innoai-tech/vuekit";
import { EMPTY, from, switchMap } from "rxjs";

export const PreWithMermaid = styled<
  {
    $default?: VNodeChild;
  },
  "pre"
>("pre", (_, { slots }) => {
  return (Root) => {
    const children = slots.default?.();
    const child = children?.[0];

    if (child && (child as any).props.className === "language-mermaid") {
      return <Mermaid code={(child as any).children} />;
    }

    return <Root>{children}</Root>;
  };
})({});

const Mermaid = component$<{
  code: string;
}>((props, _) => {
  const $el = observableRef(null);

  rx(
    $el,
    switchMap((el) => {
      if (el) {
        return from(
          (async () => {
            // @ts-ignore
            const { default: mermaid } =
              await import("mermaid/dist/mermaid.esm.min.mjs");

            await mermaid.run({ nodes: [el] });
          })(),
        );
      }
      return EMPTY;
    }),
    subscribeOnMountedUntilUnmount(),
  );

  return () => {
    return (
      <MermaidContainer ref={$el} class={"mermaid"}>
        {props.code}
      </MermaidContainer>
    );
  };
});

const MermaidContainer = styled("div")({
  "& > svg": {
    minWidth: "80%",
  },
});
