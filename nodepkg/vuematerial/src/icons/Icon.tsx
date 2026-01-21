import { styled } from "@innoai-tech/vueuikit";

export const Icon = styled<
  {
    path: string;
    placement?: string;
    animate?: boolean;
    size?: number;
  },
  "span"
>("span", (props, _) => (Wrapper) => {
  const size = props.size ?? 24;
  return (
    <Wrapper
      data-icon
      data-placement={props.placement}
      data-has-size={!!props.size}
    >
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <path d={props.path}>
          {props.animate && (
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              from={`0 ${size / 2} ${size / 2}`}
              to={`360 ${size / 2} ${size / 2}`}
            />
          )}
        </path>
      </svg>
    </Wrapper>
  );
})({
  display: "inline-block",

  _data_has_size__false: {
    boxSize: "1.2em",

    "& svg": {
      w: "100%",
      h: "100%",
    },
  },
});
