import { test, describe, expect } from "bun:test";
import { component } from "../index";
import { t } from "@innoai-tech/typedef";
import { mount } from "@vue/test-utils";
import type { VNodeChild } from "vue";

describe("Type", () => {
  test("render with optional props", () => {
    enum InputType {
      text = "text",
      select = "text",
    }

    const propTypes = {
      input: t.number().optional(),
      type: t.nativeEnum(InputType),
      inputWithDefault: t.number().optional().default(1),
      onDidSetup: t.custom<() => void>(),
      onDidSetupWith: t.custom<(v: string) => void>(),
    };

    const C = component(propTypes, (props, { emit }) => {
      emit("did-setup");
      emit("did-setup-with", "1");

      return () => (
        <div>
          input: {props.input ?? 1}
          type: {props.type == InputType.select}
          inputWithDefault: {props.inputWithDefault * 2}
        </div>
      );
    });

    const wrapper = mount(C, {
      props: {
        type: InputType.text,
      },
    });

    expect(wrapper.text()).toContain("2");

    wrapper.unmount();
  });

  test("render with slots", () => {
    const propTypes = {
      $default: t.custom<(v: number) => VNodeChild>(),
      $optional: t.custom<VNodeChild>().optional(),
    };

    const C = component(propTypes, ({}, { slots }) => {
      return () => (
        <div>
          {slots.optional?.()}
          {slots.default(1)}
        </div>
      );
    });

    const wrapper = mount(C, {
      slots: {
        default: () => "1",
      },
    });

    expect(wrapper.text()).toContain("1");

    wrapper.unmount();
  });
});
