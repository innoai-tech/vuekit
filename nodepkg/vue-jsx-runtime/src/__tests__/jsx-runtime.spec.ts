/// <reference lib="dom" />

import { describe, expect, it } from "bun:test";
import { jsx, Fragment } from "../jsx-runtime";
import { h, defineComponent, renderSlot } from "vue";
import { mount } from "@vue/test-utils";

const Layout = defineComponent((_, { slots }) => () => {
  return h("div", {}, [
    renderSlot(slots, "title"),
    renderSlot(slots, "default"),
  ]);
});

describe("jsx-runtime", () => {
  describe("Component", () => {
    it("with empty children", () => {
      expect(
        jsx(Layout, {
          id: "1",
        }),
      ).toEqual(
        h(Layout, {
          id: "1",
        }),
      );
    });

    it("with single children", () => {
      expect(
        jsx(Layout, {
          id: "1",
        }),
      ).toEqual(
        h(Layout, {
          id: "1",
        }),
      );
    });

    it("with single raw value child", () => {
      expect(mount(() => jsx(Layout, { children: "1" })).html()).toEqual(
        mount(() => h(Layout, {}, () => ["1"])).html(),
      );
    });

    it("with single child node", () => {
      expect(
        mount(() =>
          jsx(Layout, {
            children: jsx("div", {}),
          }),
        ).html(),
      ).toEqual(mount(() => h(Layout, {}, () => [jsx("div", {})])).html());
    });

    it("with children", () => {
      expect(
        mount(() =>
          jsx(Layout, {
            children: ["1", jsx("div", {})],
          }),
        ).html(),
      ).toEqual(mount(() => h(Layout, {}, () => [["1", h("div", {})]])).html());
    });

    it("with children and slots", () => {
      it("with children", () => {
        expect(
          mount(() =>
            jsx(Layout, {
              $title: jsx("h1", {}),
              children: ["1", jsx("div", {})],
            }),
          ).html(),
        ).toEqual(
          mount(() =>
            h(
              Layout,
              {},
              {
                title: () => h("h1", {}),
                default: () => [["1", h("div", {})]],
              },
            ),
          ).html(),
        );
      });
    });
  });

  describe("tag", () => {
    it("with empty children", () => {
      expect(
        jsx("div", {
          id: "1",
        }),
      ).toEqual(
        h("div", {
          id: "1",
        }),
      );
    });

    it("with single raw value child", () => {
      expect(jsx("div", { children: 0 })).toEqual(h("div", {}, "0"));
    });

    it("with single child node", () => {
      expect(
        jsx("div", {
          children: jsx("div", {}),
        }),
      ).toEqual(h("div", {}, [jsx("div", {})]));
    });

    it("with children", () => {
      expect(
        jsx("div", {
          children: ["1", jsx("div", {})],
        }),
      ).toEqual(h("div", {}, ["1", jsx("div", {})]));
    });
  });

  it("Fragment", () => {
    expect(
      jsx(Fragment, {
        children: null,
      }),
    ).toEqual(h(Fragment, {}, []));

    expect(
      jsx(Fragment, {
        children: undefined,
      }),
    ).toEqual(h(Fragment, {}, []));

    expect(
      jsx(Fragment, {
        children: jsx("div", {}),
      }),
    ).toEqual(h(Fragment, {}, [jsx("div", {})]));

    expect(
      jsx(Fragment, {
        children: [],
      }),
    ).toEqual(h(Fragment, {}, []));
  });
});
