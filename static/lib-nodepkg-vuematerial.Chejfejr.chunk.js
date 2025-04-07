import { s as styled, v as variant, b as alpha, d as defineTransition, t as transition, P as Popper, O as Overlay } from "./lib-nodepkg-vueuikit.DVj8lKN8.chunk.js";
import { j as jsx, f as component, g as ref, b as cloneVNode, w as watch, d as jsxs } from "./lib-nodepkg-vuekit.BiY9xEjN.chunk.js";
import "./lib-nodepkg-typedef.fsPa1Imn.chunk.js";
import { g as get } from "./vendor-innoai-tech-lodash.D1Wq5XWs.chunk.js";
const ButtonBase = styled("button")({
  textStyle: "sys.label-large",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  outline: "none",
  overflow: "hidden",
  border: 0,
  margin: 0,
  userSelect: "none",
  cursor: "pointer",
  _disabled: {
    cursor: "not-allowed"
  },
  gap: 8,
  h: 40,
  px: 24,
  rounded: 20,
  transitionDuration: "md4",
  transitionTimingFunction: "standard-accelerate",
  bg: "none",
  pos: "relative",
  zIndex: 1,
  _$before: {
    content: `""`,
    pos: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
    transitionDuration: "md1",
    transitionTimingFunction: "standard-accelerate"
  },
  $data_icon: {
    boxSize: 18,
    _data_placement__start: {
      ml: -8
    },
    _data_placement__end: {
      mr: -8
    }
  }
});
const FilledButton = styled(ButtonBase)({
  containerStyle: "sys.primary",
  shadow: "1",
  _hover: {
    shadow: "2",
    _$before: {
      bgColor: variant("white", alpha(0.08))
    }
  },
  _focus: {
    shadow: "2",
    _$before: {
      bgColor: variant("white", alpha(0.12))
    }
  },
  _active: {
    shadow: "2",
    _$before: {
      bgColor: variant("white", alpha(0.12))
    }
  },
  _disabled: {
    shadow: "0",
    color: variant("sys.on-surface", alpha(0.38)),
    bgColor: "rgba(0,0,0,0)",
    _$before: {
      bgColor: variant("sys.on-surface", alpha(0.12))
    }
  }
});
const ElevatedButton = styled(ButtonBase)({
  color: "sys.primary",
  shadow: "1",
  _$before: {
    bgColor: "sys.surface-container-low"
  },
  _hover: {
    shadow: "2",
    _$before: {
      bgColor: variant("sys.primary", alpha(0.08))
    }
  },
  _focus: {
    shadow: "2",
    _$before: {
      bgColor: variant("sys.primary", alpha(0.12))
    }
  },
  _active: {
    shadow: "2",
    _$before: {
      bgColor: variant("sys.primary", alpha(0.12))
    }
  },
  _disabled: {
    shadow: "0",
    color: variant("sys.on-surface", alpha(0.38)),
    _$before: {
      bgColor: variant("sys.on-surface", alpha(0.12))
    }
  }
});
const TextButton = styled(ButtonBase)({
  extends: [
    {
      px: 16,
      $data_icon: {
        _data_placement__start: {
          ml: -4
        },
        _data_placement__end: {
          mr: -4
        }
      }
    }
  ],
  color: "sys.primary",
  _$before: {
    bgColor: "rgba(0,0,0,0)"
  },
  _hover: {
    _$before: {
      bgColor: variant("sys.primary", alpha(0.08))
    }
  },
  _focus: {
    _$before: {
      bgColor: variant("sys.primary", alpha(0.12))
    }
  },
  _active: {
    _$before: {
      bgColor: variant("sys.primary", alpha(0.12))
    }
  },
  _disabled: {
    color: variant("sys.on-surface", alpha(0.38)),
    bgColor: "rgba(0,0,0,0)",
    _$before: {
      bgColor: "rgba(0,0,0,0)"
    }
  }
});
const TonalButton = styled(ButtonBase)({
  containerStyle: "sys.secondary-container",
  color: "sys.primary",
  shadow: "0",
  _hover: {
    shadow: "1",
    _$before: {
      bgColor: variant("sys.on-secondary-container", alpha(0.08))
    }
  },
  _focus: {
    _$before: {
      bgColor: variant("sys.on-secondary-container", alpha(0.12))
    }
  },
  _active: {
    _$before: {
      bgColor: variant("sys.on-secondary-container", alpha(0.12))
    }
  },
  _disabled: {
    color: variant("sys.on-surface", alpha(0.38)),
    bgColor: "rgba(0,0,0,0)",
    shadow: "0",
    _$before: {
      bgColor: variant("sys.on-surface", alpha(0.12))
    }
  }
});
const OutlinedButton = styled(ButtonBase)({
  extends: [
    {
      // ensure the order to define border before all
      border: "1px solid"
    }
  ],
  color: "sys.primary",
  bgColor: "rgba(0,0,0,0)",
  borderColor: "sys.outline",
  _hover: {
    bgColor: variant("sys.primary", alpha(0.08))
  },
  _active: {
    bgColor: variant("sys.primary", alpha(0.12))
  },
  _focus: {
    bgColor: variant("sys.primary", alpha(0.12))
  },
  _disabled: {
    color: variant("sys.on-surface", alpha(0.38)),
    bgColor: "rgba(0,0,0,0)",
    borderColor: variant("sys.on-surface", alpha(0.12))
  }
});
const IconButton = styled(TextButton)({
  boxSize: 40,
  p: 0
});
const Icon = styled("span", (props, _) => {
  return (Wrapper) => {
    const size = props.size ?? 24;
    return /* @__PURE__ */ jsx(Wrapper, {
      "data-icon": true,
      "data-placement": props.placement,
      "data-has-size": !!props.size,
      children: /* @__PURE__ */ jsx("svg", {
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        children: /* @__PURE__ */ jsx("path", {
          d: props.path
        })
      })
    });
  };
})({
  display: "inline-block",
  _data_has_size__false: {
    boxSize: "1.2em",
    "& svg": {
      w: "100%",
      h: "100%"
    }
  }
});
const FadeInOutTransition$1 = defineTransition({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  },
  duration: transition.duration.md1,
  easing: transition.easing.standard.accelerate
}, {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  },
  duration: transition.duration.sm4,
  easing: transition.easing.standard.decelerate
});
const TooltipContainer = styled("div")({
  py: 4,
  px: 12,
  rounded: "sm",
  shadow: "3",
  containerStyle: "sys.on-surface",
  pos: "relative",
  zIndex: 100
});
const Tooltip = component((props, param) => {
  let { slots } = param;
  const isOpen = ref(false);
  return () => {
    const child = slots.default()[0];
    return /* @__PURE__ */ jsx(Popper, {
      isOpen: isOpen.value,
      $content: /* @__PURE__ */ jsx(TooltipContainer, {
        children: props.title
      }),
      $transition: (param2) => {
        let { content } = param2;
        return /* @__PURE__ */ jsx(FadeInOutTransition$1, {
          children: content
        });
      },
      children: child ? cloneVNode(child, {
        onMouseover: () => {
          isOpen.value = true;
        },
        onMouseout: () => {
          isOpen.value = false;
        }
      }) : null
    });
  };
});
const MenuContainer = styled("div")({
  py: 8,
  rounded: "sm",
  shadow: "2",
  minW: 120,
  containerStyle: "sys.surface-container",
  pos: "relative",
  zIndex: 100
});
const ListItem = styled("div")({
  "& + &": {
    borderTop: "1px solid",
    borderColor: "sys.outline-variant"
  },
  py: 8,
  px: 16,
  textStyle: "sys.label-large",
  containerStyle: "sys.surface-container",
  _hover: {
    cursor: "pointer",
    bgColor: variant("sys.on-surface", alpha(0.08))
  }
});
const Menu = component((props, param) => {
  let { slots } = param;
  const isOpen = ref(false);
  return () => {
    var _a;
    const trigger = slots.default ? slots.default()[0] : void 0;
    return /* @__PURE__ */ jsx(Popper, {
      isOpen: isOpen.value,
      placement: props.placement,
      onClickOutside: () => {
        isOpen.value = false;
      },
      $content: /* @__PURE__ */ jsx(MenuContainer, {
        children: (_a = slots.menu) == null ? void 0 : _a.call(slots)
      }),
      children: trigger ? cloneVNode(trigger, {
        onClick: () => {
          isOpen.value = true;
        }
      }) : null
    });
  };
});
const Container = styled("div")({
  pos: "absolute",
  top: 0,
  left: 0,
  h: "100vh",
  w: "100vw",
  zIndex: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
const DialogBackdrop = styled("div")({
  cursor: "pointer",
  pos: "absolute",
  top: 0,
  left: 0,
  h: "100vh",
  w: "100vw",
  zIndex: -1,
  bgColor: variant("sys.scrim", alpha(0.38))
});
const DialogContainer = styled("div")({
  py: 12,
  rounded: "sm",
  shadow: "3",
  minW: "50vw",
  containerStyle: "sys.surface-container-high"
});
const FadeInOutTransition = defineTransition({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  },
  duration: transition.duration.md1,
  easing: transition.easing.standard.accelerate
}, {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  },
  duration: transition.duration.sm4,
  easing: transition.easing.standard.accelerate
});
const Dialog = component((props, param) => {
  let { slots, emit } = param;
  const mount = ref(props.isOpen ?? false);
  const animateEnterOrLeave = ref(false);
  watch(() => props.isOpen, (open) => {
    if (open === true) {
      mount.value = true;
    } else if (open === false) {
      animateEnterOrLeave.value = false;
    }
  });
  return () => {
    var _a;
    return /* @__PURE__ */ jsx(Overlay, {
      isOpen: mount.value,
      onContentBeforeMount: () => {
        animateEnterOrLeave.value = true;
      },
      onEscKeydown: () => {
        animateEnterOrLeave.value = false;
      },
      children: /* @__PURE__ */ jsxs(Container, {
        children: [
          /* @__PURE__ */ jsx(FadeInOutTransition, {
            onComplete: (t) => {
              if (t === "leave") {
                mount.value = false;
                emit("close");
              }
            },
            children: animateEnterOrLeave.value ? /* @__PURE__ */ jsx(DialogBackdrop, {
              onClick: () => {
                animateEnterOrLeave.value = false;
              }
            }) : null
          }),
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        ]
      })
    });
  };
});
const TextField = styled("label", (props, param) => {
  let { slots } = param;
  return (Wrap) => {
    var _a, _b, _c;
    let valued = props.valued;
    const invalid = props.invalid;
    let disabled = props.disabled;
    const children = (((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? []).map((c) => {
      if (c.type === "input") {
        valued = !!get(c.props, [
          "value"
        ], get(c.props, [
          "placeholder"
        ], valued));
        disabled = get(c.props, [
          "disabled"
        ], disabled);
        return cloneVNode(c, {
          disabled
        });
      }
      return cloneVNode(c);
    });
    return /* @__PURE__ */ jsxs(Wrap, {
      "data-valued": valued,
      "data-invalid": invalid,
      "data-disabled": disabled,
      "data-focus-within": props.focus,
      "data-has-leading": !!slots.leading,
      "data-has-trailing": !!slots.trailing,
      children: [
        /* @__PURE__ */ jsxs("div", {
          "data-input-container": "",
          children: [
            slots.leading && /* @__PURE__ */ jsx(Maker, {
              role: "leading",
              children: slots.leading()
            }),
            /* @__PURE__ */ jsx("div", {
              "data-input-label": "",
              children: (_b = slots.label) == null ? void 0 : _b.call(slots)
            }),
            children,
            slots.trailing && /* @__PURE__ */ jsx(Maker, {
              role: "trailing",
              children: slots.trailing()
            })
          ]
        }),
        slots.supporting && /* @__PURE__ */ jsx("div", {
          "data-input-supporting": "",
          children: (_c = slots.supporting) == null ? void 0 : _c.call(slots)
        })
      ]
    });
  };
})({
  display: "block",
  pos: "relative",
  textStyle: "sys.body-large",
  $data_input_container: {
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
  $data_input_label: {
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
  $data_input_supporting: {
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
    $data_input_label: {
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
    $data_input_label: {
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
    $data_input_label: {
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
    $data_input_label: {
      color: "sys.error"
    },
    $data_input_supporting: {
      color: "sys.error"
    }
  },
  _disabled: {
    opacity: 0.38,
    cursor: "not-allowed"
  }
});
const Maker = styled("div")({
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
export {
  Dialog as D,
  ElevatedButton as E,
  FilledButton as F,
  IconButton as I,
  ListItem as L,
  Menu as M,
  OutlinedButton as O,
  Tooltip as T,
  Icon as a,
  TextButton as b,
  DialogContainer as c,
  TonalButton as d,
  TextField as e
};
