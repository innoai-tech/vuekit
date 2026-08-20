import { t, type VNodeChild } from "@innoai-tech/vuekit";
import { styled } from "@innoai-tech/vueuikit";
import { cloneVNode } from "vue";

export const TextField = styled<
  {
    valued?: boolean;
    focus?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    $label?: VNodeChild;
    $hint?: VNodeChild;
    $supporting?: VNodeChild;
    $leading?: VNodeChild;
    $trailing?: VNodeChild;
    $default?: VNodeChild;
  },
  "div"
>("div", (props, { slots }) => {
  return (Wrap) => {
    let valued = props.valued;
    let invalid = props.invalid;
    let disabled = props.disabled;

    const children = (slots.default?.() ?? []).map((c) => {
      if (c.type === "input") {
        valued = !!(c.props?.["value"] ?? c.props?.["placeholder"] ?? valued);
        disabled = c.props?.["disabled"] ?? disabled;

        return cloneVNode(c, {
          disabled: disabled,
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
        <div data-input-container>
          <div data-input-decorator-container>
            <div data-input-decorator-leading />
            <div data-input-decorator-label>
              <div data-input-label>{slots.label?.()}</div>
            </div>
            <div data-input-decorator-trailing />
          </div>
          <div data-input-row>
            {slots.leading && <Maker role="leading">{slots.leading()}</Maker>}
            {children}
            {slots.trailing && <Maker role={"trailing"}>{slots.trailing()}</Maker>}
          </div>
        </div>
        {slots.supporting && <div data-input-supporting>{slots.supporting?.()}</div>}
      </Wrap>
    );
  };
})({
  display: "block",
  pos: "relative",
  textStyle: "sys.body-medium",

  $data_input_container: {
    pos: "relative",
    zIndex: 1,
  },

  $data_input_row: {
    pos: "relative",
    rounded: "xs",
    overflow: "hidden",

    minHeight: 40,

    display: "flex",
    alignItems: "stretch",
    zIndex: 1,
  },

  $data_input_decorator_container: {
    pos: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    zIndex: 1,
    rounded: "xs",
  },

  $data_input_decorator_leading: {
    roundedLeft: "xs",
    transitionDuration: "sm1",
    transitionTimingFunction: "standard",

    width: 16,

    borderLeft: "1px solid",
    borderTop: "1px solid",
    borderBottom: "1px solid",
    borderColor: "sys.outline",
    pointerEvents: "none",
  },

  $data_input_decorator_label: {
    transitionDuration: "sm1",
    transitionTimingFunction: "standard",
    borderBottom: "1px solid",
    borderColor: "sys.outline",
  },

  $data_input_decorator_trailing: {
    borderRight: "1px solid",
    borderTop: "1px solid",
    borderBottom: "1px solid",
    borderColor: "sys.outline",

    roundedRight: "xs",
    transitionDuration: "sm1",
    transitionTimingFunction: "standard",
    flex: 1,
    pointerEvents: "none",
  },

  $data_input_label: {
    position: "relative",
    top: -12,
    padding: 4,
    textStyle: "sys.body-small",
    color: "sys.on-surface-variant",
    display: "flex",
    alignItems: "center",
  },

  $data_input: {
    flex: 1,
    w: "100%",

    m: 0,
    px: 16,
    py: 4,

    cursor: "text",

    "&[readonly]": {
      cursor: "pointer",
    },

    bg: "inherit",
    color: "sys.on-surface",
    outline: "none",
    border: "none",

    textStyle: "sys.body-medium",

    _disabled: {
      cursor: "not-allowed",
    },
  },

  $data_input_supporting: {
    textStyle: "sys.body-small",
    px: 16,
    pt: 4,
    display: "flex",
    gap: 16,
    width: "100%",

    overflow: "auto",

    color: "sys.on-surface-variant",
  },

  $data_icon: {
    color: "sys.on-surface-variant",
  },

  _has_leading: {
    $data_input: {
      pl: 16 + 20,
    },
    $data_input_label: {
      left: 16 + 20,
    },
  },

  _has_trailing: {
    $data_input: {
      pr: 12 + 20,
    },
  },

  _valued: {
    $data_input: {},
  },

  _focusWithin: {
    $data_input_decorator_leading: {
      borderWidth: "2px",
      borderColor: "sys.primary",
    },

    $data_input_decorator_label: {
      borderWidth: "2px",
      borderColor: "sys.primary",
    },

    $data_input_decorator_trailing: {
      borderWidth: "2px",
      borderColor: "sys.primary",
    },

    $data_input_label: {
      color: "sys.primary",
    },
  },

  _invalid: {
    $data_input_decorator_leading: {
      borderWidth: "2px",
      borderColor: "sys.error",
    },

    $data_input_decorator_label: {
      borderWidth: "2px",
      borderColor: "sys.error",
    },

    $data_input_decorator_trailing: {
      borderWidth: "2px",
      borderColor: "sys.error",
    },

    $data_input_label: {
      color: "sys.error",
    },

    $data_input_supporting: {
      color: "sys.error",
    },

    $data_icon: {
      color: "sys.error",
    },
  },

  _disabled: {
    opacity: 0.38,
    cursor: "not-allowed",
  },
});

const Maker = styled("div", {
  role: t.enums(["leading", "trailing"]),
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
      ml: -4,
    },
  },

  _role__trailing: {
    right: 12,

    $data_icon: {
      mr: -4,
    },
  },
});
