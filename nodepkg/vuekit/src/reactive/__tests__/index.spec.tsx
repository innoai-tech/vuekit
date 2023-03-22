import { test, describe, expect } from "vitest";
import { of, filter, map } from "rxjs";
import { computedObservable, observableRef, component$, Slot } from "..";
import { mount } from "@vue/test-utils";
import { component, z } from "../../component";

/**
 *  @vitest-environment jsdom
 **/
describe("vue reactive", () => {
  test("when first render, should use the first ", () => {
    const C = component(() => {
      const v = computedObservable(of(1));
      return () => <div>{v.value}</div>;
    });

    const wrapper = mount(C);

    expect(wrapper.text()).toContain("1");

    wrapper.unmount();
  });

  test("when state changed, should rerender", async () => {
    const C = component(() => {
      const input$ = observableRef(1);

      const ret = computedObservable(input$.pipe(map((v) => v * v)));

      return () => (
        <div
          role="button"
          onClick={() => {
            input$.value++;
          }}
        >
          {ret.value}
        </div>
      );
    });

    const wrapper = mount(C);

    expect(wrapper.text()).toContain("1");

    await wrapper.find("[role=button]").trigger("click");

    expect(wrapper.text()).toContain("4");

    wrapper.unmount();
  });

  test("when props changed, should rerender", async () => {
    const C = component$({ input: z.number() }, ({ input$ }) => {
      const inputElem$ = input$.pipe(
        map((v) => <div data-role="input">{v}</div>)
      );

      return input$.pipe(
        filter((v) => v % 2 !== 0),
        map((v) => v * v),
        map((v) => (
          <div>
            <div data-role="result">{v}</div>
            <Slot elem$={inputElem$} />
          </div>
        ))
      );
    });

    const wrapper = mount(C as any, {
      props: {
        input: 1,
      },
    });

    expect(wrapper.find("[data-role=input]").text()).toContain(1);
    expect(wrapper.find("[data-role=result]").text()).toContain(1);

    for (let i = 2; i <= 4; i++) {
      await wrapper.setProps({
        input: i,
      });

      expect(wrapper.find("[data-role=input]").text()).toContain(i);

      if (i % 2 !== 0) {
        expect(wrapper.find("[data-role=result]").text()).toContain(i * i);
      } else {
        expect(wrapper.find("[data-role=result]").text()).toContain(
          (i - 1) * (i - 1)
        );
      }
    }
  });
});
