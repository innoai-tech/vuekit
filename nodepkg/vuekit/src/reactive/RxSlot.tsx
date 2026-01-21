import { t } from "@innoai-tech/typedef";
import { map, Observable, tap } from "rxjs";
import { component } from "../component";
import { type RenderFunction, type VNodeChild } from "../vue.ts";
import { rx } from "./rx";
import {
  subscribeOnMountedUntilUnmount,
  subscribeUntilUnmount,
} from "./subscribe";
import { observableRef } from "./observableRef.ts";

export function render<T>(renderFunc: (value: T) => VNodeChild) {
  return (input$: Observable<T>): JSX.Element => {
    return (
      <RxSlot
        renderFn$={input$.pipe(
          map<T, RenderFunction>((v) => () => renderFunc(v)),
        )}
      >
        {{}}
      </RxSlot>
    );
  };
}

// slots with {} to make sure trigger render
const RxSlot = component(
  {
    renderFn$: t.custom<Observable<RenderFunction>>(),
  },
  (props, _) => {
    let renderFunc: RenderFunction | null = null;

    rx(
      props.renderFn$,
      tap((renderFn) => {
        renderFunc = renderFn;
      }),
      subscribeUntilUnmount(),
    );

    const tick = observableRef(1);

    rx(
      props.renderFn$,
      tap(() => {
        tick.value += 1;
      }),
      subscribeOnMountedUntilUnmount(),
    );

    return () => {
      return tick.value ? renderFunc?.() : null;
    };
  },
  {
    name: "RxSlot",
  },
);
