import { styled } from "@innoai-tech/vueuikit";

export const Icon = styled<
  {
    path: string;
    placement?: "start" | "end";
  },
  "span"
>("span", (props, _) => {
  return (Wrapper) => (
    <Wrapper data-icon={true} data-placement={props.placement}>
      <svg viewBox="0 0 24 24">
        <path d={props.path} />
      </svg>
    </Wrapper>
  );
})({
  boxSize: "1.2em",
});
