import { z } from "@innoai-tech/vuekit";
import { styled } from "@innoai-tech/vueuikit";

export const Icon = styled(
  "svg",
  {
    placement: z.enum(["start", "end"]).optional(),
    path: z.string()
  },
  (props, {}) =>
    (Wrapper) =>
      (
        <Wrapper
          viewBox="0 0 24 24"
          data-icon={true}
          data-placement={props.placement}
        >
          <path d={props.path} />
        </Wrapper>
      )
)({
  boxSize: "1.2em"
});
