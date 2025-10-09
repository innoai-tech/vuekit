import { animate, styled } from "@innoai-tech/vueuikit";
import {
  observableRef,
  rx,
  subscribeOnMountedUntilUnmount,
  tapEffect,
  toObservable,
} from "@innoai-tech/vuekit";
import { combineLatest, distinctUntilChanged, map } from "rxjs";

export const Progress = styled<
  {
    progress: number;
  },
  "span"
>("span", (props, {}) => {
  const el$ = observableRef<HTMLSpanElement | null>(null);
  const progress$ = toObservable(props, "progress");

  const done$ = rx(
    progress$,
    map((progress) => progress >= 1),
    distinctUntilChanged(),
  );

  rx(
    combineLatest([el$, done$]),
    tapEffect(([el, done]) => {
      if (!el || done) {
        return;
      }

      const animated = animate({
        from: -30,
        to: 170,
        repeat: Infinity,

        duration: 1000,
        velocity: 800,

        onUpdate: (style) => {
          el.style.transform = `translate3d(${style}%,0,0)`;
          el.style.opacity = "0.38";
        },
      });

      return () => {
        animated.stop();
        el.style.transform = `translate3d(0,0,0)`;
        el.style.opacity = "0";
      };
    }),
    subscribeOnMountedUntilUnmount(),
  );

  return (Wrap) => {
    return (
      <Wrap>
        <span data-track />
        <span data-indicator style={{ width: `${props.progress * 100}%` }}>
          <span data-indicator-active ref={el$} />
        </span>
      </Wrap>
    );
  };
})({
  height: 4,

  pos: "relative",

  display: "flex",
  overflow: "hidden",

  $data_track: {
    pos: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    containerStyle: "sys.surface-variant",
    rounded: 4,
  },

  $data_stop_indicator: {
    pos: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 4,
    rounded: 4,
    containerStyle: "sys.primary",
  },

  $data_indicator: {
    pos: "absolute",
    top: 0,
    bottom: 0,
    width: 4,
    containerStyle: "sys.primary",
    overflow: "hidden",
    rounded: 4,
  },

  $data_indicator_active: {
    containerStyle: "sys.surface-bright",
    width: "70%",
    rounded: 4,
    display: "block",
    height: 4,
    opacity: 0.38,
  },
});
