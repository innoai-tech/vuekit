import { alpha, Overlay, styled, variant } from "@innoai-tech/vueuikit";
import {
  component,
  ext,
  ImmerBehaviorSubject,
  ref,
  render,
  rx,
  type VNodeChild,
  watch,
} from "@innoai-tech/vuekit";
import { FadeInOutTransition, SlideInOutTransitions } from "./transitions.tsx";

export const SheetDialogContainer = styled("div")({
  maxH: "96vh",
  maxW: "96vw",
  h: "96vh",
  w: "96vw",

  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

export const SheetDialogHeading = styled("div")({
  px: 24,
  py: 24,
  display: "flex",
  alignItems: "center",
  gap: 14,
});

export const SheetDialogFooter = styled("div")({
  px: 24,
  py: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 8,
});

export const SheetDialogHeadingTitle = styled("div")({
  flex: 1,
  textStyle: "sys.headline-small",
});

export const SheetDialogListView = styled("div")({
  py: 12,
});

export const SheetDialogListItem = styled("div")({
  py: 12,
  px: 24,
  display: "flex",
  alignItems: "center",

  _hover: {
    bgColor: "sys.surface-container-high",
  },
});

export const SheetDialogContent = styled("div")({
  flex: 1,
  overflow: "auto",
  pt: 24,
  px: 24,
});

export const DialogContainerListView = styled("div")({
  flex: 1,
  px: 0,
  overflow: "auto",
  pb: "10vh",
});

const SheetDialogWrapper = styled("div")({
  pos: "absolute",
  top: 0,
  left: 0,
  h: "100vh",
  w: "100vw",
  zIndex: 100,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  $data_dialog_backdrop: {
    cursor: "pointer",
    pos: "absolute",
    top: 0,
    left: 0,
    h: "100vh",
    w: "100vw",
    zIndex: -1,
    bgColor: variant("sys.scrim", alpha(0.38)),
  },

  $data_dialog_content: {
    pos: "absolute",
    shadow: "3",
    overflow: "auto",
    containerStyle: "sys.surface",
    display: "flex",
    flexDirection: "column",
  },

  $data_dialog_content__bottom: {
    roundedTop: "sm",
    bottom: 0,
  },

  $data_dialog_content__right: {
    roundedLeft: "sm",
    right: 0,
  },

  $data_dialog_content__left: {
    roundedRight: "sm",
    left: 0,
  },

  $data_dialog_content__top: {
    roundedBottom: "sm",
    top: 0,
  },
});

export class DialogStatus extends ImmerBehaviorSubject<boolean> {
  show = () => this.next(true);
  hide = () => this.next(false);
}

const SheetDialog = component<{
  position: "top" | "bottom" | "left" | "right";
  isOpen?: boolean;
  onClose?: () => void;
  $default?: VNodeChild;
}>((props, { slots, emit }) => {
  const animateToEnterOrLeave = ref(false);
  const mounted = ref(props.isOpen ?? false);

  watch(
    () => props.isOpen,
    (open) => {
      if (open === true) {
        // mount first，then animate enter
        mounted.value = true;
      } else if (open === false) {
        // animate leave first，then unmount
        animateToEnterOrLeave.value = false;
      }
    },
  );

  const SlideInOutTransition = SlideInOutTransitions[props.position];

  return () => {
    return (
      <Overlay
        isOpen={mounted.value}
        onContentBeforeMount={() => (animateToEnterOrLeave.value = true)}
        onEscKeydown={() => (animateToEnterOrLeave.value = false)}
      >
        <SheetDialogWrapper>
          <FadeInOutTransition
            onComplete={(t) => {
              if (t == "leave") {
                mounted.value = false;
                emit("close");
              }
            }}
          >
            {animateToEnterOrLeave.value ? (
              <div data-dialog-backdrop onClick={() => (animateToEnterOrLeave.value = false)} />
            ) : null}
          </FadeInOutTransition>
          <SlideInOutTransition>
            {animateToEnterOrLeave.value ? (
              <div data-dialog-content={props.position}>{slots.default?.()}</div>
            ) : null}
          </SlideInOutTransition>
        </SheetDialogWrapper>
      </Overlay>
    );
  };
});

const Defer = component<{
  setup: () => () => JSX.Element;
}>((props) => {
  return props.setup();
});

const useSheetDialog = (
  setup: (dialog$: DialogStatus) => () => JSX.Element,
  opt: {
    position: "top" | "bottom" | "left" | "right";
  },
) => {
  const open$ = new DialogStatus(false);

  const $elem = rx(
    open$,
    render((isOpen) => {
      return (
        <SheetDialog isOpen={isOpen} position={opt.position} onClose={() => open$.hide()}>
          <Defer setup={() => setup(open$)} />
        </SheetDialog>
      );
    }),
  );

  return ext(open$, {
    $elem: $elem,
  });
};

export const useRightSheetDialog = (setup: (dialog$: DialogStatus) => () => JSX.Element) => {
  return useSheetDialog(setup, { position: "right" });
};

export const useBottomSheetDialog = (setup: (dialog$: DialogStatus) => () => JSX.Element) => {
  return useSheetDialog(setup, { position: "bottom" });
};

export const useTopSheetDialog = (setup: (dialog$: DialogStatus) => () => JSX.Element) => {
  return useSheetDialog(setup, { position: "top" });
};

export const useLeftSheetDialog = (setup: (dialog$: DialogStatus) => () => JSX.Element) => {
  return useSheetDialog(setup, { position: "left" });
};
