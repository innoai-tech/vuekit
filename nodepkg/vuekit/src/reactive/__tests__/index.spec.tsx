import { test, describe, expect } from "vitest";
import { of, filter, map } from "rxjs";
import { toComputed, observableRef, component$, rx } from "..";
import { z, component, type VNode } from "../../index";
import { mount } from "@vue/test-utils";

/**
 *  @vitest-environment jsdom
 **/
describe("vue reactive", () => {
  test("when first render, should use the first ", () => {
    const C = component(() => {
      const v = rx(of(1), toComputed());
      return () => <div>{v.value}</div>;
    });

    const wrapper = mount(C);

    expect(wrapper.text()).toContain("1");

    wrapper.unmount();
  });

  test("when state changed, should rerender", async () => {
    const C = component(() => {
      const input$ = observableRef(1);

      const ret = rx(
        input$,
        map((v) => v * v),
        toComputed()
      );

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

  test("when slots changed, should rerender", async () => {
    const C = component$(
      {
        $input: z.custom<VNode>()
      },
      ({}, { slots, render }) => {
        const input$ = observableRef("");

        const inputEl = rx(
          input$,
          render(() => <div>{slots.input?.()}</div>)
        );

        return rx(
          input$,
          render((input) => (
            <div>
              <div>{input}</div>
              {inputEl}
            </div>
          ))
        );
      }
    );

    const Wrap = component(
      {
        input: z.custom<VNode>()
      },
      (props) => {
        return () => <C $input={props.input} />;
      }
    );

    const wrapper = mount(Wrap as any, {
      props: {
        input: 1
      }
    });

    expect(wrapper.text()).toContain(1);

    await wrapper.setProps({
      input: 2
    });

    expect(wrapper.text()).toContain(2);
  });

  test("when props changed, should rerender", async () => {
    const C = component$({ input: z.number() }, ({ input$ }, { render }) => {
      const inputEl = rx(
        input$,
        render((v) => <div data-role="input">{v}</div>)
      );

      return rx(
        input$,
        filter((v) => v % 2 !== 0),
        map((v) => v * v),
        render((v) => (
          <div>
            <div data-role="result">{v}</div>
            {inputEl}
          </div>
        ))
      );
    });

    const wrapper = mount(C, {
      props: {
        input: 1
      }
    });

    expect(wrapper.find("[data-role=input]").text()).toContain(1);
    expect(wrapper.find("[data-role=result]").text()).toContain(1);

    for (let i = 2; i <= 4; i++) {
      await wrapper.setProps({
        input: i
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
