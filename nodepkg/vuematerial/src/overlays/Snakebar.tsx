import {
  component$,
  observableRef,
  render,
  rx,
  subscribeOnMountedUntilUnmount,
  type VNodeChild,
} from "@innoai-tech/vuekit";
import { defineTransition, Overlay, styled, transition } from "@innoai-tech/vueuikit";
import { timer } from "rxjs";
import { onMounted } from "vue";

export const Snakebar = component$<{
  autoCloseAfter?: number;
  onDidClose: () => void;
  $action?: VNodeChild;
  $default?: VNodeChild;
}>((props, { slots, emit }) => {
  const mounted$ = observableRef(false);
  const animated$ = observableRef(false);

  onMounted(() => {
    mounted$.value = true;
  });

  if (props.autoCloseAfter) {
    rx(
      timer(props.autoCloseAfter),
      subscribeOnMountedUntilUnmount(() => {
        animated$.value = false;
      }),
    );
  }

  return rx(
    mounted$,
    render((isOpen) => {
      return (
        <Overlay
          isOpen={isOpen}
          onEscKeydown={() => (animated$.value = false)}
          onContentBeforeMount={() => (animated$.value = true)}
        >
          <SlideInOutTransition
            onComplete={(to) => {
              if (to === "leave") {
                emit("did-close");
                mounted$.value = false;
              }
            }}
          >
            {animated$.value ? (
              <SnakebarContainer>
                <>{slots.default?.()}</>
              </SnakebarContainer>
            ) : null}
          </SlideInOutTransition>
        </Overlay>
      );
    }),
  );
});

const SnakebarContainer = styled("div")({
  pos: "absolute",
  bottom: 15,
  left: 16,
  color: "sys.inverse-on-surface",
  bgColor: "sys.inverse-surface",
  rounded: "xs",
  shadow: "3",
  minH: 48,
  minW: 280,
  maxW: 320,
  overflow: "hidden",
  py: 8,
  px: 16,
  display: "flex",
  alignItems: "center",
  gap: 12,
  zIndex: 2000,
});

const SlideInOutTransition = defineTransition(
  {
    from: {
      transform: "translate3d(0px,100%,0px)",
    },
    to: {
      transform: "translate3d(0px,0%,0px)",
    },
    duration: transition.duration.sm4,
    easing: transition.easing.standard.accelerate,
  },
  {
    from: {
      transform: "translate3d(0px,0%,0px)",
    },
    to: {
      transform: "translate3d(0px,100%,0px)",
    },
    duration: transition.duration.sm1,
    easing: transition.easing.standard.accelerate,
  },
);
