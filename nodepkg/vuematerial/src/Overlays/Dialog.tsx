import {
  styled,
  Overlay,
  transition,
  variant,
  alpha,
  defineTransition
} from "@innoai-tech/vueuikit";
import { component, type VNodeChild, z } from "@innoai-tech/vuekit";
import { watch, cloneVNode, ref } from "vue";

const Container = styled("div")({
  pos: "absolute",
  top: 0,
  left: 0,
  h: "100vh",
  w: "100vw",
  zIndex: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  $_data_dialog_backdrop: {
    cursor: "pointer",
    pos: "absolute",
    top: 0,
    left: 0,
    h: "100vh",
    w: "100vw",
    zIndex: -1,
    bgColor: variant("sys.scrim", alpha(0.38))
  }
});

export const DialogContainer = styled("div")({
  py: 12,
  rounded: "sm",
  shadow: "3",
  minW: "50vw",
  containerStyle: "sys.surface-container-high"
});

const FadeInOutTransition = defineTransition(
  {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    duration: transition.duration.md1,
    easing: transition.easing.standard.accelerate
  },
  {
    from: {
      opacity: 1
    },
    to: {
      opacity: 0
    },
    duration: transition.duration.sm4,
    easing: transition.easing.standard.accelerate
  }
);


export const Dialog = component(
  {
    isOpen: Overlay.propTypes.isOpen,
    onClose: z.custom<() => void>(),
    $default: z.custom<VNodeChild>().optional()
  },
  (props, { slots, emit }) => {
    const mount = ref(props.isOpen ?? false);
    const animateEnterOrLeave = ref(false);

    watch(() => props.isOpen, (open) => {
      if (open === true) {
        // mount first，then animate enter
        mount.value = true;
      } else if (open === false) {
        // animate leave first，then unmount
        animateEnterOrLeave.value = false;
      }
    });

    return () => {
      return (
        <Overlay isOpen={mount.value} onEscKeydown={() => animateEnterOrLeave.value = false}>
          {cloneVNode(
            <Container>
              <FadeInOutTransition
                onComplete={(t) => {
                  if (t == "leave") {
                    mount.value = false;
                    emit("close");
                  }
                }}
              >
                {animateEnterOrLeave.value ? (
                  <div
                    data-dialog-backdrop={""}
                    onClick={() => (animateEnterOrLeave.value = false)}
                  />
                ) : null}
              </FadeInOutTransition>
              <>{slots.default?.()}</>
            </Container>,
            {
              onVnodeBeforeMount: () => {
                animateEnterOrLeave.value = true;
              }
            }
          )}
        </Overlay>
      );
    };
  }
);
