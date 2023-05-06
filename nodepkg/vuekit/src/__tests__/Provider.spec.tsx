import { test, describe, expect } from "vitest";
import { component, createProvider } from "../index";
import { mount } from "@vue/test-utils";
import { t } from "@innoai-tech/typedef";

/**
 *  @vitest-environment jsdom
 **/
describe("Provider", () => {
  describe("standard", () => {
    const P = createProvider(() => ({ context: "default" }));
    const C = component(({}, {}) => {
      const p = P.use();

      return () => <div>{p.context}</div>;
    });

    test("could use default value", () => {
      const wrapper = mount(C, {});
      expect(wrapper.text()).toContain("default");
      wrapper.unmount();
    });

    test("could inject custom value", () => {
      const With = component(({}, {}) => {
        return () => (
          <P value={{ context: "injected " }}>
            <C />
          </P>
        );
      });

      const wrapper2 = mount(With, {});
      expect(wrapper2.text()).toContain("injected");
      wrapper2.unmount();
    });
  });

  describe("factory", () => {
    const P = createProvider(
      {
        input: t.string().default("default")
      },
      (props) => ({ context: `${props.input}` })
    );

    const C = component(({}, {}) => {
      const p = P.use();
      return () => <div>{p.context}</div>;
    });

    test("could use default value", () => {
      const wrapper = mount(C, {});
      expect(wrapper.text()).toContain("default");
      wrapper.unmount();
    });

    test("could inject custom value", () => {
      const With = component(({}, {}) => {
        return () => (
          <P input={"injected"}>
            <C />
          </P>
        );
      });

      const wrapper2 = mount(With, {});
      expect(wrapper2.text()).toContain("injected");
      wrapper2.unmount();
    });
  });
});
