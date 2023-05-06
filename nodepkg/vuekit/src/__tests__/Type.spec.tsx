import { test, describe, expect } from "vitest";
import { component } from "../index";
import { t } from "@innoai-tech/typedef";
import { mount } from "@vue/test-utils";
import type { VNodeChild } from "vue";

/**
 *  @vitest-environment jsdom
 **/
describe("Type", () => {
  test("render with optional props", () => {
    const propTypes = {
      input: t.number().optional(),
      inputWithDefault: t.number().optional().default(1),

      onDidSetup: t.custom<() => void>(),
      onDidSetupWith: t.custom<(v: string) => void>()
    };

    const C = component(propTypes, (props, { emit }) => {

      emit("did-setup");
      emit("did-setup-with", "1");

      return () => (
        <div>
          optional: {props.input ?? 1}
          optional: {props.inputWithDefault * 2}
        </div>
      );
    });

    const wrapper = mount(C, {});

    expect(wrapper.text()).toContain("2");

    wrapper.unmount();
  });

  test("render with slots", () => {
    const propTypes = {
      $default: t.custom<(v: number) => VNodeChild>(),
      $optional: t.custom<VNodeChild>().optional()
    };

    const C = component(propTypes, ({}, {
      slots
    }) => {
      return () => (
        <div>
          {slots.optional?.()}
          {slots.default(1)}
        </div>
      );
    });

    const wrapper = mount(C, {
      slots: {
        default: () => "1"
      }
    });

    expect(wrapper.text()).toContain("1");

    wrapper.unmount();
  });
});
