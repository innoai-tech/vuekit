import { z, type VNodeChild } from "@innoai-tech/vuekit";
import { styled } from "@innoai-tech/vueuikit";
import { cloneVNode } from "vue";
import { get } from "@innoai-tech/lodash";

export const TextField = styled(
  "label",
  {
    focus: z.boolean().optional(),
    invalid: z.boolean().optional(),
    disabled: z.boolean().optional(),

    $label: z.custom<VNodeChild>().optional(),
    $supporting: z.custom<VNodeChild>().optional(),
    $leading: z.custom<VNodeChild>().optional(),
    $trailing: z.custom<VNodeChild>().optional(),
    $default: z.custom<VNodeChild>()
  },
  (props, { slots }) => {
    return (Wrap) => {
      let valued = false;
      let invalid = props.invalid;
      let disabled = props.disabled;

      const children = (slots.default?.() ?? []).map((c) => {
        if (c.type === "input") {
          valued = !!get(
            c.props,
            ["value"],
            get(c.props, ["placeholder"], valued)
          );

          disabled = get(c.props, ["disabled"], disabled);

          return cloneVNode(c, {
            disabled: disabled
          });
        }
        return cloneVNode(c);
      });

      return (
        <Wrap
          data-valued={valued}
          data-invalid={invalid}
          data-disabled={disabled}
          data-focus-within={props.focus}
          data-has-leading={!!slots.leading}
          data-has-trailing={!!slots.trailing}
        >
          <div data-role="container">
            {slots.leading && <Maker role="leading">{slots.leading()}</Maker>}
            <div data-role="label">{slots.label?.()}</div>
            {children}
            {slots.trailing && (
              <Maker role={"trailing"}>{slots.trailing()}</Maker>
            )}
          </div>
          {slots.supporting && (
            <div data-role="supporting">{slots.supporting?.()}</div>
          )}
        </Wrap>
      );
    };
  }
)({
  display: "block",
  pos: "relative",
  textStyle: "sys.body-large",

  $data_role__container: {
    pos: "relative"
  },

  $data_input: {
    outline: "none",
    flex: 1,
    w: "100%",

    m: 0,

    px: 16,
    py: 4,
    minHeight: 56,

    bg: "none",
    border: "none",

    cursor: "text",
    "&[readonly]": {
      cursor: "pointer"
    },

    bgColor: "sys.surface-container-highest",
    color: "sys.on-surface",

    roundedTop: "xs",

    borderBottom: "1px solid",
    borderColor: "sys.outline-variant",

    textStyle: "sys.body-large",

    transitionDuration: "sm1",
    transitionTimingFunction: "standard"
  },

  $data_role__label: {
    pos: "absolute",
    top: 4,
    bottom: 4,
    left: 16,

    color: "sys.on-surface-variant",

    display: "flex",
    alignItems: "center",
    transitionDuration: "sm2",
    transitionTimingFunction: "standard-accelerate"
  },

  $data_role__supporting: {
    textStyle: "sys.body-small",
    px: 16,
    pt: 4,
    display: "flex",
    gap: 16,

    color: "sys.on-surface-variant"
  },

  _has_leading: {
    $data_input: {
      pl: 16 + 20
    },
    $data_role__label: {
      left: 16 + 20
    }
  },

  _has_trailing: {
    $data_input: {
      pr: 12 + 20
    }
  },

  _valued: {
    $data_input: {
      pt: 18
    },

    $data_role__label: {
      top: 8,
      bottom: "auto",
      textStyle: "sys.body-small"
    }
  },

  _focusWithin: {
    $data_input: {
      pt: 18,
      borderBottom: "2px solid",
      borderColor: "sys.primary"
    },

    $data_role__label: {
      top: 8,
      bottom: "auto",
      textStyle: "sys.body-small",
      color: "sys.primary"
    }
  },

  _invalid: {
    $data_input: {
      borderBottom: "2px solid",
      borderColor: "sys.error"
    },

    $data_role__label: {
      color: "sys.error"
    },

    $data_role__supporting: {
      color: "sys.error"
    }
  },

  _disabled: {
    opacity: 0.38,
    cursor: "not-allowed"
  }
});

const Maker = styled("div", {
  role: z.enum(["leading", "trailing"])
})({
  pos: "absolute",
  top: 4,
  bottom: 4,
  display: "flex",
  alignItems: "center",
  color: "sys.on-surface-variant",

  _role__leading: {
    left: 12,

    $data_icon: {
      ml: -4
    }
  },

  _role__trailing: {
    right: 12,

    $data_icon: {
      mr: -4
    }
  }
});
