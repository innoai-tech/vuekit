import { t } from "@innoai-tech/vuekit";
import { styled } from "@innoai-tech/vueuikit";

export const Icon = styled(
  "span",
  {
    placement: t.enums(["start", "end"]).optional(),
    path: t.string()
  },
  (props, {}) =>
    (Wrapper) =>
      (
        <Wrapper
          data-icon={true}
          data-placement={props.placement}
        >
          <svg viewBox="0 0 24 24">
            <path d={props.path} />
          </svg>
        </Wrapper>
      )
)({
  boxSize: "1.2em"
});
