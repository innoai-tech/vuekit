import {
  type Easing,
  animate,
  cubicBezier as cubicBezierFunc
} from "popmotion";
import { Transition } from "vue";
import { component, t } from "@innoai-tech/vuekit";

const cubicBezier = (mX1: number, mY1: number, mX2: number, mY2: number) => {
  return Object.assign(cubicBezierFunc(mX1, mY1, mX2, mY2), {
    toString() {
      return `cubic-bezier(${mX1}, ${mY1}, ${mX2}, ${mY2})`;
    }
  });
};

export const transition = {
  duration: {
    sm1: 50,
    sm2: 100,
    sm3: 150,
    sm4: 200,
    md1: 250,
    md2: 300,
    md3: 350,
    md4: 400,
    lg1: 450,
    lg2: 500,
    lg3: 550,
    lg4: 600,
    xl1: 700,
    xl2: 800,
    xl3: 900,
    xl4: 1000
  },
  easing: {
    linear: cubicBezier(0, 0, 1, 1),
    standard: Object.assign(cubicBezier(0.2, 0, 0, 1), {
      accelerate: cubicBezier(0.3, 0, 1, 1),
      decelerate: cubicBezier(0, 0, 0, 1)
    }),
    emphasized: Object.assign(cubicBezier(0.2, 0, 0, 1), {
      accelerate: cubicBezier(0.3, 0, 0.8, 0.15),
      decelerate: cubicBezier(0.05, 0.7, 0.1, 1)
    }),
    legacy: Object.assign(cubicBezier(0.4, 0, 0.2, 1), {
      decelerate: cubicBezier(0.0, 0, 0.2, 1),
      accelerate: cubicBezier(0.4, 0, 1.0, 1)
    })
  }
};

export const defineTransition = <T extends {}>(
  enter: {
    from: T;
    to: T;
    duration?: number;
    easing?: Easing;
  },
  leave?: {
    from: T;
    to: T;
    duration?: number;
    easing?: Easing;
  }
) => {
  leave = leave ?? {
    ...enter,
    from: {
      ...enter.to
    },
    to: {
      ...enter.from
    }
  };

  return component({
    onComplete: t.custom<(v: "enter" | "leave") => void>(),
    $default: t.custom<JSX.Element | null>()
  }, ({}, { slots, emit }) => {
    let animated: any;

    const onEnter = (e: Element, done: () => void) => {
      animated = animate({
        ...enter,
        autoplay: true,
        onComplete: () => {
          done();
          emit("complete", "enter");
        },
        onUpdate: (style) => {
          Object.assign((e as HTMLElement).style, style);
        }
      });
    };

    const onLeave = (e: Element, done: () => void) => {
      animated = animate({
        ...(leave as any),
        autoplay: true,
        onComplete: () => {
          done();
          emit("complete", "leave");
        },
        onUpdate: (style) => {
          Object.assign((e as HTMLElement).style, style);
        }
      });
    };

    const onCancelled = () => {
      animated?.stop();
    };

    return () => {
      return (
        <Transition
          css={false}
          onEnter={onEnter}
          onEnterCancelled={onCancelled}
          onLeave={onLeave}
          onLeaveCancelled={onCancelled}
        >
          {slots.default?.()}
        </Transition>
      );
    };
  }, {
    name: "Transition"
  });
};
