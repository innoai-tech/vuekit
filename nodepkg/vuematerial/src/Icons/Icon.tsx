import { styled } from "@innoai-tech/vueuikit";

export const Icon = styled<
  {
    path: string;
    size?: number;
    placement?: "start" | "end";
  },
  "span"
>("span", (props, _) => {
  return (Wrapper) => {
    const size = props.size ?? 24;

    return (
      <Wrapper
        data-icon={true}
        data-placement={props.placement}
        data-has-size={!!props.size}
      >
        <svg viewBox="0 0 24 24" width={size} height={size}>
          <path d={props.path} />
        </svg>
      </Wrapper>
    );
  };
})({
  display: "inline-block",

  _data_has_size__false: {
    boxSize: "1.2em",

    "& svg": {
      w: "100%",
      h: "100%"
    }
  }
});
