import { n as __export, r as __toESM, t as __commonJSMin } from "./rolldown-runtime.L2H4EfuM.chunk.js";
import { $ as JSONPointer, B as annotate, C as fromEvent, D as BehaviorSubject, E as EMPTY$1, F as ext, G as integer, Gt as isNumber, H as array, Ht as isPlainObject, J as object, K as minLength, L as component, Lt as isUndefined, O as Subject, Q as union, Qt as last, Rt as isFunction, S as timer, T as map, V as any, Wt as set, X as record, Y as optional, Z as string$2, Zt as isString, _ as tap, a as component$, b as delay, c as jsx, d as subscribeOnMountedUntilUnmount, en as isObject, et as Schema, f as subscribeUntilUnmount, g as rx, h as ImmerBehaviorSubject, ht as ref, i as tapEffect, it as Fragment, k as Observable, l as jsxs, m as ref$1, mt as watch, o as toObservable, pt as onMounted, q as nativeEnum, qt as isArray, r as createProvider, s as render, st as cloneVNode, tn as get, tt as EmptyContext, u as observableRef, v as switchMap, w as combineLatest, x as merge$1, y as distinctUntilChanged } from "./vendor-innoai-tech-vuekit.CmmKMl5x.chunk.js";
import { D as Popper, H as variant, M as styled, N as Box, O as size, R as defineTransition, S as mdiMinusBoxOutline, U as animate, V as alpha, c as require_copy_to_clipboard, f as mdiCancel, g as mdiChevronRight, h as mdiChevronDown, k as Overlay, m as mdiCheckBold, u as Container, v as mdiContentCopy, z as transition } from "./vendor-innoai-tech-vueuikit.C4g2OQui.chunk.js";
var ButtonBase = /* @__PURE__ */ styled("button", {
	displayName: "ButtonBase",
	props: [
		"hover",
		"focus",
		"active",
		"disabled"
	]
})({
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
	_disabled: { cursor: "not-allowed" },
	gap: 4,
	h: 36,
	px: 16,
	rounded: "xs",
	transitionDuration: "md4",
	transitionTimingFunction: "standard-accelerate",
	bg: "none",
	pos: "relative",
	zIndex: 0,
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
		_data_placement__start: { ml: -8 },
		_data_placement__end: { mr: -8 }
	}
});
var FilledButton = /* @__PURE__ */ styled(ButtonBase, { displayName: "FilledButton" })({
	containerStyle: "sys.primary",
	py: 6,
	px: 16,
	_hover: {
		shadow: "1",
		_$before: { bgColor: /* @__PURE__ */ variant("white", /* @__PURE__ */ alpha(.08)) }
	},
	_focus: {
		shadow: "1",
		_$before: { bgColor: /* @__PURE__ */ variant("white", /* @__PURE__ */ alpha(.12)) }
	},
	_active: {
		shadow: "1",
		_$before: { bgColor: /* @__PURE__ */ variant("white", /* @__PURE__ */ alpha(.12)) }
	},
	_disabled: {
		shadow: "0",
		color: /* @__PURE__ */ variant("sys.on-surface", /* @__PURE__ */ alpha(.38)),
		bgColor: "rgba(0,0,0,0)",
		_$before: { bgColor: /* @__PURE__ */ variant("sys.on-surface", /* @__PURE__ */ alpha(.12)) }
	}
});
var TextButton = /* @__PURE__ */ styled(ButtonBase, { displayName: "TextButton" })({
	extends: [{
		px: 16,
		$data_icon: {
			_data_placement__start: { ml: -4 },
			_data_placement__end: { mr: -4 }
		}
	}],
	color: "sys.primary",
	_$before: { bgColor: "rgba(0,0,0,0)" },
	_hover: { _$before: { bgColor: /* @__PURE__ */ variant("sys.primary", /* @__PURE__ */ alpha(.08)) } },
	_focus: { _$before: { bgColor: /* @__PURE__ */ variant("sys.primary", /* @__PURE__ */ alpha(.12)) } },
	_active: { _$before: { bgColor: /* @__PURE__ */ variant("sys.primary", /* @__PURE__ */ alpha(.12)) } },
	_disabled: {
		color: /* @__PURE__ */ variant("sys.on-surface", /* @__PURE__ */ alpha(.38)),
		bgColor: "rgba(0,0,0,0)",
		_$before: { bgColor: "rgba(0,0,0,0)" }
	}
});
var OutlinedButton = /* @__PURE__ */ styled(ButtonBase, { displayName: "OutlinedButton" })({
	extends: [{ border: "1px solid" }],
	containerStyle: "sys.surface",
	borderColor: "sys.outline",
	fontWeight: "bold",
	_hover: { bgColor: /* @__PURE__ */ variant("sys.primary", /* @__PURE__ */ alpha(.08)) },
	_active: { bgColor: /* @__PURE__ */ variant("sys.primary", /* @__PURE__ */ alpha(.12)) },
	_focus: { bgColor: /* @__PURE__ */ variant("sys.primary", /* @__PURE__ */ alpha(.12)) },
	_disabled: {
		color: /* @__PURE__ */ variant("sys.on-surface", /* @__PURE__ */ alpha(.38)),
		bgColor: "rgba(0,0,0,0)",
		borderColor: /* @__PURE__ */ variant("sys.on-surface", /* @__PURE__ */ alpha(.12))
	}
});
var Icon = /* @__PURE__ */ styled("span", (props, {}) => (Wrapper) => {
	const size$1 = props.size ?? 24;
	return /* @__PURE__ */ jsx(Wrapper, {
		"data-icon": true,
		"data-placement": props.placement,
		"data-has-size": !!props.size,
		children: /* @__PURE__ */ jsx("svg", {
			viewBox: `0 0 ${size$1} ${size$1}`,
			width: size$1,
			height: size$1,
			children: /* @__PURE__ */ jsx("path", {
				d: props.path,
				children: props.animate && /* @__PURE__ */ jsx("animateTransform", {
					attributeName: "transform",
					attributeType: "XML",
					type: "rotate",
					repeatCount: "indefinite",
					dur: "1s",
					from: `0 ${size$1 / 2} ${size$1 / 2}`,
					to: `360 ${size$1 / 2} ${size$1 / 2}`
				})
			})
		})
	});
}, {
	displayName: "Icon",
	props: [
		"path",
		"placement",
		"animate",
		"size"
	]
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
var IconButton = /* @__PURE__ */ styled(TextButton, { displayName: "IconButton" })({
	boxSize: 36,
	p: 0,
	color: "sys.on-surface-variant",
	[`${Icon}`]: { boxSize: 18 }
});
const FadeInOutTransition$1 = /* @__PURE__ */ defineTransition({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: transition.duration.md1,
	easing: transition.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: transition.duration.sm4,
	easing: transition.easing.standard.decelerate
});
const SlideInOutTransitions = {
	left: /* @__PURE__ */ defineTransition({
		from: { transform: "translateX(-100%)" },
		to: { transform: "translateX(0%)" },
		duration: transition.duration.sm4,
		easing: transition.easing.standard.decelerate
	}, {
		from: { transform: "translateX(0%)" },
		to: { transform: "translateX(-120%)" },
		duration: transition.duration.sm1,
		easing: transition.easing.standard.accelerate
	}),
	right: /* @__PURE__ */ defineTransition({
		from: { transform: "translateX(100%)" },
		to: { transform: "translateX(0%)" },
		duration: transition.duration.sm4,
		easing: transition.easing.standard.decelerate
	}, {
		from: { transform: "translateX(0%)" },
		to: { transform: "translateX(120%)" },
		duration: transition.duration.sm1,
		easing: transition.easing.standard.accelerate
	}),
	top: /* @__PURE__ */ defineTransition({
		from: { transform: "translateY(-100%)" },
		to: { transform: "translateY(0%)" },
		duration: transition.duration.sm4,
		easing: transition.easing.standard.decelerate
	}, {
		from: { transform: "translateY(0%)" },
		to: { transform: "translateY(-120%)" },
		duration: transition.duration.sm1,
		easing: transition.easing.standard.accelerate
	}),
	bottom: /* @__PURE__ */ defineTransition({
		from: { transform: "translateY(100%)" },
		to: { transform: "translateY(0%)" },
		duration: transition.duration.sm4,
		easing: transition.easing.standard.decelerate
	}, {
		from: { transform: "translateY(0%)" },
		to: { transform: "translateY(120%)" },
		duration: transition.duration.sm1,
		easing: transition.easing.standard.accelerate
	})
};
var TooltipContainer$1 = /* @__PURE__ */ styled("div", { displayName: "TooltipContainer" })({
	mt: 4,
	py: 2,
	px: 8,
	rounded: "xs",
	shadow: "3",
	containerStyle: "sys.on-surface",
	textStyle: "sys.body-small",
	pos: "relative",
	pointerEvents: "none",
	maxW: "24vw",
	zIndex: 100
});
var Tooltip$1 = /* @__PURE__ */ component((props, { slots }) => {
	const isOpen = /* @__PURE__ */ ref(false);
	const triggerRef = /* @__PURE__ */ ref(null);
	function resolveElement(el) {
		if (el) {
			if (el instanceof HTMLElement) return el;
			if (el instanceof Text) return resolveElement(el.nextElementSibling);
		}
		return null;
	}
	return () => {
		const $trigger = slots.default ? slots.default()[0] : null;
		const $title = slots.title ? slots.title() : props.title;
		if ($title) return /* @__PURE__ */ jsx(Popper, {
			isOpen: isOpen.value,
			onClickOutside: () => isOpen.value = false,
			$transition: ({ content: content$2 }) => /* @__PURE__ */ jsx(FadeInOutTransition$1, { children: content$2 }),
			$content: /* @__PURE__ */ jsx(TooltipContainer$1, { children: $title }),
			children: $trigger ? cloneVNode($trigger, {
				onVnodeMounted: (node$1) => {
					triggerRef.value = /* @__PURE__ */ resolveElement(node$1.el);
				},
				onMouseover: () => {
					isOpen.value = true;
				},
				onMouseleave: () => {
					isOpen.value = false;
				}
			}) : null
		});
		return $trigger;
	};
}, {
	displayName: "Tooltip",
	props: ["title"]
});
const sameWidth$1 = /* @__PURE__ */ size({ apply({ elements, rects }) {
	Object.assign(elements.floating.style, { width: `${rects.reference.width}px` });
} });
var MenuContainer = /* @__PURE__ */ styled("div", ({}, { slots }) => {
	return (Wrap) => {
		return /* @__PURE__ */ jsx(Wrap, { children: /* @__PURE__ */ jsx("div", {
			"data-menu-list": true,
			children: slots.default?.()
		}) });
	};
}, { displayName: "MenuContainer" })({
	py: 4,
	px: 4,
	rounded: "xs",
	shadow: "3",
	containerStyle: "sys.surface",
	pos: "relative",
	zIndex: 100,
	$data_menu_list: {
		maxH: "40vh",
		overflow: "auto"
	},
	textStyle: "sys.label-small",
	fontSize: 12
});
var MenuItem$1 = /* @__PURE__ */ styled("div", (props, { slots }) => {
	return (Wrap) => /* @__PURE__ */ jsxs(Wrap, {
		"data-active": props.active,
		children: [!isUndefined(props.active) && /* @__PURE__ */ jsx(Icon, {
			"data-check-icon": true,
			path: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
		}), slots.default?.()]
	});
}, {
	displayName: "MenuItem",
	props: ["active"]
})({
	py: 6,
	px: 12,
	rounded: "xs",
	overflow: "hidden",
	display: "flex",
	alignItems: "center",
	gap: 4,
	[`[data-check-icon]`]: { visibility: "hidden" },
	_hover: {
		cursor: "pointer",
		bgColor: /* @__PURE__ */ variant("sys.on-surface", /* @__PURE__ */ alpha(.08))
	},
	_focus: { bgColor: /* @__PURE__ */ variant("sys.on-surface", /* @__PURE__ */ alpha(.08)) },
	_active: {
		color: "sys.primary",
		[`[data-check-icon]`]: { visibility: "visible" }
	}
});
const handleMenuValueSelected = (onMenuValueSelected) => (e) => {
	const target = /* @__PURE__ */ [e.target, .../* @__PURE__ */ e.composedPath()].find((t) => {
		return t?.hasAttribute?.("data-value");
	});
	if (target) {
		const v = target?.getAttribute("data-value");
		if (v !== null) onMenuValueSelected(v);
	}
};
var Menu$1 = /* @__PURE__ */ component((props, { slots, emit }) => {
	const isOpen$ = /* @__PURE__ */ observableRef(false);
	watch(() => props.isOpen, (o) => {
		isOpen$.value = o ?? isOpen$.value;
	});
	watch(() => isOpen$.value, (o) => {
		if (o) emit("did-open");
		else emit("did-close");
	});
	const handleTriggerClick = () => {
		isOpen$.value = true;
	};
	const handleItemClick = /* @__PURE__ */ handleMenuValueSelected((dataValue) => {
		emit("selected", dataValue);
		isOpen$.value = false;
	});
	return () => {
		const trigger = slots.default?.()[0];
		return /* @__PURE__ */ jsx(Popper, {
			isOpen: !props.disabled && isOpen$.value,
			onClickOutside: () => {
				isOpen$.value = false;
			},
			placement: props.fullWidth ? "bottom-start" : props.placement,
			middleware: props.fullWidth ? [sameWidth$1] : void 0,
			$content: /* @__PURE__ */ jsx(MenuContainer, {
				onClick: handleItemClick,
				children: slots.menu?.() ?? []
			}),
			children: trigger ? !props.disabled ? cloneVNode(trigger, { onClick: handleTriggerClick }) : cloneVNode(trigger, { "data-disabled": props.disabled }) : null
		});
	};
}, {
	displayName: "Menu",
	props: [
		"isOpen",
		"disabled",
		"fullWidth",
		"placement"
	],
	emits: [
		"did-open",
		"did-close",
		"selected"
	]
});
var SheetDialogContainer = /* @__PURE__ */ styled("div", { displayName: "SheetDialogContainer" })({
	maxH: "96vh",
	maxW: "96vw",
	h: "96vh",
	w: "96vw",
	display: "flex",
	flexDirection: "column",
	overflow: "hidden"
});
var SheetDialogHeading = /* @__PURE__ */ styled("div", { displayName: "SheetDialogHeading" })({
	px: 24,
	py: 24,
	display: "flex",
	alignItems: "center",
	gap: 14
});
var SheetDialogFooter = /* @__PURE__ */ styled("div", { displayName: "SheetDialogFooter" })({
	px: 24,
	py: 24,
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	gap: 8
});
var SheetDialogHeadingTitle = /* @__PURE__ */ styled("div", { displayName: "SheetDialogHeadingTitle" })({
	flex: 1,
	textStyle: "sys.headline-small"
});
var SheetDialogContent = /* @__PURE__ */ styled("div", { displayName: "SheetDialogContent" })({
	flex: 1,
	overflow: "auto",
	pt: 24,
	px: 24
});
var SheetDialogWrapper = /* @__PURE__ */ styled("div", { displayName: "SheetDialogWrapper" })({
	pos: "absolute",
	top: 0,
	left: 0,
	h: "100vh",
	w: "100vw",
	zIndex: 100,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	$data_dialog_backdrop: {
		cursor: "pointer",
		pos: "absolute",
		top: 0,
		left: 0,
		h: "100vh",
		w: "100vw",
		zIndex: -1,
		bgColor: /* @__PURE__ */ variant("sys.scrim", /* @__PURE__ */ alpha(.38))
	},
	$data_dialog_content: {
		pos: "absolute",
		shadow: "3",
		overflow: "auto",
		containerStyle: "sys.surface",
		display: "flex",
		flexDirection: "column"
	},
	$data_dialog_content__bottom: {
		roundedTop: "sm",
		bottom: 0
	},
	$data_dialog_content__right: {
		roundedLeft: "sm",
		right: 0
	},
	$data_dialog_content__left: {
		roundedRight: "sm",
		left: 0
	},
	$data_dialog_content__top: {
		roundedBottom: "sm",
		top: 0
	}
});
var DialogStatus = class extends ImmerBehaviorSubject {
	show = () => this.next(true);
	hide = () => this.next(false);
};
var SheetDialog = /* @__PURE__ */ component((props, { slots, emit }) => {
	const animateToEnterOrLeave = /* @__PURE__ */ ref$1(false);
	const mounted = /* @__PURE__ */ ref$1(props.isOpen ?? false);
	watch(() => props.isOpen, (open) => {
		if (open === true) mounted.value = true;
		else if (open === false) animateToEnterOrLeave.value = false;
	});
	const SlideInOutTransition$1 = SlideInOutTransitions[props.position];
	return () => {
		return /* @__PURE__ */ jsx(Overlay, {
			isOpen: mounted.value,
			onContentBeforeMount: () => animateToEnterOrLeave.value = true,
			onEscKeydown: () => animateToEnterOrLeave.value = false,
			children: /* @__PURE__ */ jsxs(SheetDialogWrapper, { children: [/* @__PURE__ */ jsx(FadeInOutTransition$1, {
				onComplete: (t) => {
					if (t == "leave") {
						mounted.value = false;
						emit("close");
					}
				},
				children: animateToEnterOrLeave.value ? /* @__PURE__ */ jsx("div", {
					"data-dialog-backdrop": true,
					onClick: () => animateToEnterOrLeave.value = false
				}) : null
			}), /* @__PURE__ */ jsx(SlideInOutTransition$1, { children: animateToEnterOrLeave.value ? /* @__PURE__ */ jsx("div", {
				"data-dialog-content": props.position,
				children: slots.default?.()
			}) : null })] })
		});
	};
}, {
	displayName: "SheetDialog",
	props: ["position", "isOpen"],
	emits: ["close"]
});
var Defer = /* @__PURE__ */ component((props) => {
	return props.setup();
}, {
	displayName: "Defer",
	props: ["setup"]
});
var useSheetDialog = (setup, opt) => {
	const open$ = new DialogStatus(false);
	return ext(open$, { $elem: /* @__PURE__ */ rx(open$, /* @__PURE__ */ render((isOpen) => {
		return /* @__PURE__ */ jsx(SheetDialog, {
			isOpen,
			position: opt.position,
			onClose: () => open$.hide(),
			children: /* @__PURE__ */ jsx(Defer, { setup: () => setup(open$) })
		});
	})) });
};
const useTopSheetDialog = (setup) => {
	return useSheetDialog(setup, { position: "top" });
};
const useLeftSheetDialog = (setup) => {
	return useSheetDialog(setup, { position: "left" });
};
transition.duration.md1, transition.easing.standard.accelerate, transition.duration.sm4, transition.easing.standard.accelerate;
transition.duration.sm4, transition.easing.standard.accelerate, transition.duration.sm1, transition.easing.standard.accelerate;
var Progress = /* @__PURE__ */ styled("span", (props, {}) => {
	const el$ = /* @__PURE__ */ observableRef(null);
	rx(/* @__PURE__ */ combineLatest([el$, /* @__PURE__ */ rx(/* @__PURE__ */ toObservable(props, "progress"), /* @__PURE__ */ map((progress) => progress >= 1), /* @__PURE__ */ distinctUntilChanged())]), /* @__PURE__ */ tapEffect(([el, done]) => {
		if (!el || done) return;
		const animated = /* @__PURE__ */ animate({
			from: -30,
			to: 170,
			repeat: Infinity,
			duration: 1e3,
			velocity: 800,
			onUpdate: (style) => {
				el.style.transform = `translate3d(${style}%,0,0)`;
				el.style.opacity = "0.38";
			}
		});
		return () => {
			animated.stop();
			el.style.transform = `translate3d(0,0,0)`;
			el.style.opacity = "0";
		};
	}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	return (Wrap) => {
		return /* @__PURE__ */ jsxs(Wrap, { children: [/* @__PURE__ */ jsx("span", { "data-track": true }), /* @__PURE__ */ jsx("span", {
			"data-indicator": true,
			style: { width: `${props.progress * 100}%` },
			children: /* @__PURE__ */ jsx("span", {
				"data-indicator-active": true,
				ref: el$
			})
		})] });
	};
}, {
	displayName: "Progress",
	props: ["progress"]
})({
	height: 4,
	pos: "relative",
	display: "flex",
	overflow: "hidden",
	$data_track: {
		pos: "absolute",
		right: 0,
		top: 0,
		bottom: 0,
		left: 0,
		containerStyle: "sys.surface-variant",
		rounded: 4
	},
	$data_stop_indicator: {
		pos: "absolute",
		right: 0,
		top: 0,
		bottom: 0,
		width: 4,
		rounded: 4,
		containerStyle: "sys.primary"
	},
	$data_indicator: {
		pos: "absolute",
		top: 0,
		bottom: 0,
		width: 4,
		containerStyle: "sys.primary",
		overflow: "hidden",
		rounded: 4
	},
	$data_indicator_active: {
		containerStyle: "sys.surface-bright",
		width: "70%",
		rounded: 4,
		display: "block",
		height: 4,
		opacity: .38
	}
});
var TextField = /* @__PURE__ */ styled("div", (props, { slots }) => {
	return (Wrap) => {
		let valued = props.valued;
		let invalid = props.invalid;
		let disabled = props.disabled;
		const children = /* @__PURE__ */ (slots.default?.() ?? []).map((c) => {
			if (c.type === "input") {
				valued = !!get(c.props, ["value"], /* @__PURE__ */ get(c.props, ["placeholder"], valued));
				disabled = /* @__PURE__ */ get(c.props, ["disabled"], disabled);
				return cloneVNode(c, { disabled });
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
			children: [/* @__PURE__ */ jsxs("div", {
				"data-input-container": true,
				children: [/* @__PURE__ */ jsxs("div", {
					"data-input-decorator-container": true,
					children: [
						/* @__PURE__ */ jsx("div", { "data-input-decorator-leading": true }),
						/* @__PURE__ */ jsx("div", {
							"data-input-decorator-label": true,
							children: /* @__PURE__ */ jsx("div", {
								"data-input-label": true,
								children: slots.label?.()
							})
						}),
						/* @__PURE__ */ jsx("div", { "data-input-decorator-trailing": true })
					]
				}), /* @__PURE__ */ jsxs("div", {
					"data-input-row": true,
					children: [
						slots.leading && /* @__PURE__ */ jsx(Maker, {
							role: "leading",
							children: /* @__PURE__ */ slots.leading()
						}),
						children,
						slots.trailing && /* @__PURE__ */ jsx(Maker, {
							role: "trailing",
							children: /* @__PURE__ */ slots.trailing()
						})
					]
				})]
			}), slots.supporting && /* @__PURE__ */ jsx("div", {
				"data-input-supporting": true,
				children: slots.supporting?.()
			})]
		});
	};
}, {
	displayName: "TextField",
	props: [
		"focus",
		"invalid",
		"disabled",
		"valued"
	]
})({
	display: "block",
	pos: "relative",
	textStyle: "sys.body-small",
	containerStyle: "sys.surface",
	$data_input_container: {
		pos: "relative",
		zIndex: 1
	},
	$data_input_row: {
		pos: "relative",
		rounded: "xs",
		overflow: "hidden",
		minHeight: 40,
		display: "flex",
		alignItems: "stretch"
	},
	$data_input_decorator_container: {
		pos: "absolute",
		left: 0,
		top: 0,
		bottom: 0,
		right: 0,
		display: "flex",
		zIndex: 1,
		pointerEvents: "none",
		rounded: "xs"
	},
	$data_input_decorator_leading: {
		roundedLeft: "xs",
		transitionDuration: "sm1",
		transitionTimingFunction: "standard",
		width: 16,
		borderLeft: "1px solid",
		borderTop: "1px solid",
		borderBottom: "1px solid",
		borderColor: "sys.outline"
	},
	$data_input_decorator_label: {
		transitionDuration: "sm1",
		transitionTimingFunction: "standard",
		borderBottom: "1px solid",
		borderColor: "sys.outline"
	},
	$data_input_decorator_trailing: {
		borderRight: "1px solid",
		borderTop: "1px solid",
		borderBottom: "1px solid",
		borderColor: "sys.outline",
		roundedRight: "xs",
		transitionDuration: "sm1",
		transitionTimingFunction: "standard",
		flex: 1
	},
	$data_input_label: {
		position: "relative",
		top: -12,
		padding: 4,
		textStyle: "sys.label-small",
		color: "sys.on-surface-variant",
		opacity: .68,
		display: "flex",
		alignItems: "center"
	},
	$data_input: {
		flex: 1,
		w: "100%",
		m: 0,
		px: 16,
		py: 4,
		cursor: "text",
		"&[readonly]": { cursor: "pointer" },
		bg: "inherit",
		color: "sys.on-surface",
		outline: "none",
		border: "none",
		textStyle: "sys.body-small",
		_disabled: { cursor: "not-allowed" }
	},
	$data_input_supporting: {
		textStyle: "sys.body-small",
		px: 16,
		pt: 4,
		display: "flex",
		gap: 16,
		color: "sys.on-surface-variant"
	},
	$data_icon: { color: "sys.on-surface-variant" },
	_has_leading: { $data_input: { pl: 28 } },
	_has_trailing: { $data_input: { pr: 28 } },
	_valued: { $data_input: {} },
	_focusWithin: {
		$data_input_decorator_leading: {
			borderWidth: "2px",
			borderColor: "sys.primary"
		},
		$data_input_decorator_label: {
			borderWidth: "2px",
			borderColor: "sys.primary"
		},
		$data_input_decorator_trailing: {
			borderWidth: "2px",
			borderColor: "sys.primary"
		},
		$data_input_label: { color: "sys.primary" }
	},
	_invalid: {
		$data_input_decorator_leading: {
			borderWidth: "2px",
			borderColor: "sys.error"
		},
		$data_input_decorator_label: {
			borderWidth: "2px",
			borderColor: "sys.error"
		},
		$data_input_decorator_trailing: {
			borderWidth: "2px",
			borderColor: "sys.error"
		},
		$data_input_label: { color: "sys.error" },
		$data_input_supporting: { color: "sys.error" },
		$data_icon: { color: "sys.error" }
	},
	_disabled: {
		opacity: .38,
		cursor: "not-allowed"
	}
});
var Maker = /* @__PURE__ */ styled("div", {
	displayName: "Maker",
	props: ["role"]
})({
	pos: "absolute",
	top: 4,
	bottom: 4,
	display: "flex",
	alignItems: "center",
	color: "sys.on-surface-variant",
	_role__leading: {
		left: 12,
		$data_icon: { ml: -4 }
	},
	_role__trailing: {
		right: 12,
		$data_icon: { mr: -4 }
	}
});
const normalizeArray = (value) => {
	return isArray(value) ? value : !isUndefined(value) ? [value] : [];
};
function* flattenValue(value, previous$3, typedef, ctx) {
	if (typedef.type == "object" || typedef.type == "record" || typedef.type == "intersection" || typedef.type == "union" && Schema.schemaProp(typedef, "discriminator")) {
		const objValueLine = {
			value: value ?? {},
			previous: previous$3,
			typedef,
			ctx
		};
		yield objValueLine;
		for (const [propName, propValue, propType] of typedef.entries(objValueLine.value, ctx)) {
			if (!Object.hasOwn(objValueLine.value, propName)) continue;
			yield* flattenValue(propValue, /* @__PURE__ */ get(previous$3, [propName]), propType, {
				...ctx,
				path: [...ctx.path, propName],
				branch: [...ctx.branch, propValue]
			});
		}
		yield {
			...objValueLine,
			close: true
		};
		return;
	}
	if (typedef.type == "union" && isUndefined(/* @__PURE__ */ Schema.schemaProp(typedef, "discriminator"))) {
		const oneOf = /* @__PURE__ */ Schema.schemaProp(typedef, "oneOf");
		if (oneOf?.length == 2) {
			const arrayType = /* @__PURE__ */ oneOf.find((x) => x.type == "array");
			const singleType = /* @__PURE__ */ oneOf.find((x) => x.type != "array");
			if (arrayType && singleType) {
				if (Schema.schemaProp(arrayType, "items").type == singleType.type) {
					const arr = /* @__PURE__ */ normalizeArray(value);
					const previousArr = /* @__PURE__ */ normalizeArray(previous$3);
					const arrValueLine = {
						value: arr,
						previous: previousArr,
						typedef: arrayType,
						ctx
					};
					yield arrValueLine;
					for (const [idx, itemValue, itemType] of arrayType.entries(arr, ctx)) yield* flattenValue(itemValue, /* @__PURE__ */ get(previousArr, [idx]), itemType, {
						...ctx,
						path: [...ctx.path, idx],
						branch: [...ctx.branch, itemValue]
					});
					yield {
						...arrValueLine,
						close: true
					};
					return;
				}
			}
		}
	}
	if (typedef.type == "array") {
		const arrValueLine = {
			value,
			previous: previous$3,
			typedef,
			ctx
		};
		yield arrValueLine;
		for (const [idx, itemValue, propSchema] of typedef.entries(value, ctx)) yield* flattenValue(itemValue, /* @__PURE__ */ get(previous$3, [idx]), propSchema, {
			...ctx,
			path: [...ctx.path, idx],
			branch: [...ctx.branch, itemValue]
		});
		yield {
			...arrValueLine,
			close: true
		};
		return;
	}
	if (typedef.type == "any" || typedef.type == "unknown") {
		if (isArray(value)) {
			yield* flattenValue(value, previous$3, /* @__PURE__ */ array(/* @__PURE__ */ any()), ctx);
			return;
		}
		if (isObject(value)) {
			yield* flattenValue(value, previous$3, /* @__PURE__ */ record(/* @__PURE__ */ string$2(), /* @__PURE__ */ any()), ctx);
			return;
		}
	}
	yield {
		value,
		previous: previous$3,
		typedef,
		ctx
	};
}
let Folded = /* @__PURE__ */ function(Folded$1) {
	Folded$1[Folded$1["NONE"] = 0] = "NONE";
	Folded$1[Folded$1["EXACT"] = 1] = "EXACT";
	Folded$1[Folded$1["PREFIX"] = 2] = "PREFIX";
	return Folded$1;
}({});
let DirtyType = /* @__PURE__ */ function(DirtyType$1) {
	DirtyType$1["NONE"] = "NONE";
	DirtyType$1["ADD"] = "ADD";
	DirtyType$1["EDIT"] = "EDIT";
	DirtyType$1["DELETE"] = "DELETE";
	return DirtyType$1;
}({});
var JSONEditor = class JSONEditor extends Observable {
	static of(typedef, initials) {
		return new JSONEditor(typedef, initials ?? (typedef.type == "array" ? [] : {}));
	}
	#values$ = new ImmerBehaviorSubject({});
	constructor(typedef, initials) {
		super((subscriber) => {
			const sub = /* @__PURE__ */ this.#values$.subscribe(subscriber);
			return () => {
				sub.unsubscribe();
			};
		});
		this.typedef = typedef;
		this.initials = initials;
		this.#values$.next(initials);
	}
	initialsAt(path$1) {
		if (path$1.length == 0) return this.initials;
		return get(this.initials, path$1);
	}
	update(path$1, valueOrMut, defaultValue, valueType) {
		console.log("[json-editor]", "update", /* @__PURE__ */ JSON.stringify(path$1), this.typedef.type);
		this.#error$.next({});
		if (path$1.length == 0) {
			this.#values$.next(valueOrMut);
			return;
		}
		if (isFunction(valueOrMut)) this.#values$.next((values) => {
			let value = /* @__PURE__ */ get(values, path$1, defaultValue);
			if (valueType && valueType.type == "array") {
				if (!isArray(value)) value = /* @__PURE__ */ normalizeArray(value);
			}
			valueOrMut(value);
			set(values, path$1, value);
		});
		else this.#values$.next((values) => {
			set(values, path$1, valueOrMut);
		});
	}
	delete(path$1) {
		if (path$1.length == 0) return;
		console.log("[json-editor]", "delete", path$1);
		this.#values$.next((values) => {
			const propOrIdx = /* @__PURE__ */ last(path$1);
			if (isNumber(propOrIdx)) {
				const parent$1 = /* @__PURE__ */ path$1.slice(0, path$1.length - 1);
				const node$2 = parent$1.length > 0 ? get(values, parent$1) : values;
				if (isArray(node$2)) {
					node$2.splice(propOrIdx, 1);
					return;
				}
			}
			const parent = /* @__PURE__ */ path$1.slice(0, path$1.length - 1);
			const node$1 = parent.length > 0 ? get(values, parent) : values;
			delete node$1[propOrIdx];
		});
	}
	#error$ = new ImmerBehaviorSubject({});
	#foldedPointerPrefixes$ = new ImmerBehaviorSubject({});
	get error$() {
		return this.#error$;
	}
	get foldedPointerPrefixes$() {
		return this.#foldedPointerPrefixes$;
	}
	errorAt$(pointerOrPath) {
		const pointer = /* @__PURE__ */ this.#toPointer(pointerOrPath);
		return rx(this.error$, /* @__PURE__ */ map((errors) => errors[pointer]), /* @__PURE__ */ distinctUntilChanged());
	}
	foldedPrefix$(pointerOrPath) {
		const pointer = /* @__PURE__ */ this.#toPointer(pointerOrPath);
		return rx(this.foldedPointerPrefixes$, /* @__PURE__ */ map((foldedPointers) => {
			for (const [p] of Object.entries(foldedPointers)) {
				if (p === pointer) return Folded.EXACT;
				if (pointer.startsWith(p)) return Folded.PREFIX;
			}
			return Folded.NONE;
		}), /* @__PURE__ */ distinctUntilChanged());
	}
	#toPointer(pointerOrPath) {
		if (isString(pointerOrPath)) return pointerOrPath;
		return JSONPointer.create(pointerOrPath);
	}
	toggleFold(pointerOrPath) {
		const pointer = /* @__PURE__ */ this.#toPointer(pointerOrPath);
		this.#foldedPointerPrefixes$.next((foldedPointers) => {
			if (Object.hasOwn(foldedPointers, pointer)) delete foldedPointers[pointer];
			else foldedPointers[pointer] = true;
		});
	}
	setError(pointerOrPath, error) {
		const pointer = /* @__PURE__ */ this.#toPointer(pointerOrPath);
		this.#error$.next((errors) => {
			if (error === null) delete errors[pointer];
			else errors[pointer] = error;
		});
	}
};
const JSONEditorProvider = /* @__PURE__ */ createProvider(() => new JSONEditor(object(), {}));
const JSONEditorSlotsProvider = /* @__PURE__ */ createProvider(() => {
	return {};
});
var ActionToolbar = /* @__PURE__ */ styled("span", { displayName: "ActionToolbar" })({
	px: 2,
	pos: "relative",
	visibility: "hidden",
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	display: "flex",
	alignItems: "center"
});
var ActionBtn = /* @__PURE__ */ styled(IconButton, { displayName: "ActionBtn" })({
	transition: "none",
	width: 24,
	height: 24,
	rounded: "xs",
	[`& ${Icon}`]: { svg: {
		width: 16,
		height: 16
	} }
});
var TextBox = /* @__PURE__ */ styled("span", { displayName: "TextBox" })({
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 12,
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	py: 4,
	wordBreak: "keep-all",
	whiteSpace: "nowrap"
});
var TokenView = /* @__PURE__ */ styled(TextBox, { displayName: "TokenView" })({
	font: "code",
	opacity: .3
});
var PropLeading = /* @__PURE__ */ styled(ActionToolbar, { displayName: "PropLeading" })({
	position: "absolute",
	ml: -28
});
var PropNameView = /* @__PURE__ */ styled(TextBox, { displayName: "PropNameView" })({
	position: "relative",
	display: "flex",
	alignItems: "center",
	userSelect: "none",
	_deprecated: { textDecoration: "line-through" },
	_optional: { "&:after": {
		content: `"?"`,
		color: "sys.secondary",
		opacity: .58
	} }
});
var PropName = /* @__PURE__ */ component$((props, { slots }) => {
	return () => {
		return /* @__PURE__ */ jsxs(PropNameView, {
			"data-deprecated": props.deprecated,
			"data-optional": props.optional,
			"data-nullable": props.nullable,
			children: [slots.leading && /* @__PURE__ */ jsx(PropLeading, {
				"data-visible-on-hover": true,
				children: /* @__PURE__ */ slots.leading()
			}), slots.default?.()]
		});
	};
}, {
	displayName: "PropName",
	props: [
		"deprecated",
		"optional",
		"nullable"
	]
});
var PopupStatus = class PopupStatus extends ImmerBehaviorSubject {
	static from(el$) {
		const status$ = new PopupStatus(false);
		rx(el$, /* @__PURE__ */ switchMap((inputEl) => {
			if (inputEl) return merge$1(/* @__PURE__ */ rx(/* @__PURE__ */ fromEvent(inputEl, "focus"), /* @__PURE__ */ tap(() => {
				status$.show();
			})), /* @__PURE__ */ rx(/* @__PURE__ */ fromEvent(inputEl, "blur"), /* @__PURE__ */ delay(200), /* @__PURE__ */ tap(() => {
				if (status$.value) status$.hide();
			})));
			return EMPTY$1;
		}), /* @__PURE__ */ subscribeUntilUnmount());
		return status$;
	}
	show() {
		this.next(true);
	}
	hide() {
		this.next(false);
	}
};
var sameWidth = /* @__PURE__ */ size({ apply({ elements, rects }) {
	Object.assign(elements.floating.style, { width: `${rects.reference.width}px` });
} });
var Menu = /* @__PURE__ */ component$((props, { emit, slots, render: render$1 }) => {
	const open$ = props.open$ ?? new PopupStatus(false);
	const handleSelected = (e) => {
		const $el = /* @__PURE__ */ [e.target, .../* @__PURE__ */ e.composedPath()].find((t) => {
			return t?.hasAttribute?.("data-value");
		});
		if ($el) {
			const selected = /* @__PURE__ */ $el.getAttribute("data-value");
			if (!isUndefined(selected)) {
				emit("selected", selected);
				open$.hide();
			}
		}
	};
	return rx(open$, /* @__PURE__ */ render$1((isOpen) => {
		return /* @__PURE__ */ jsx(Popper, {
			isOpen,
			onClickOutside: () => open$.hide(),
			onEscKeydown: () => open$.hide(),
			placement: "bottom-start",
			middleware: [sameWidth],
			$content: /* @__PURE__ */ jsx(PopoverContainer, {
				onClick: handleSelected,
				children: slots.content?.()
			}),
			children: slots.default?.()?.[0] ?? null
		});
	}));
}, {
	displayName: "Menu",
	props: ["open$"],
	emits: ["selected"]
});
var PopoverContainer = /* @__PURE__ */ styled("div", { displayName: "PopoverContainer" })({
	textStyle: "sys.body-small",
	pos: "relative",
	containerStyle: "sys.surface-container-lowest",
	borderBottom: "1px solid",
	borderRight: "1px solid",
	borderLeft: "1px solid",
	borderColor: /* @__PURE__ */ variant("sys.outline-variant", /* @__PURE__ */ alpha(.38)),
	overflow: "hidden",
	"[data-placement*=bottom] &": { roundedBottom: "sm" },
	"[data-placement*=top] &": { roundedTop: "sm" }
});
var MenuItem = /* @__PURE__ */ styled("div", { displayName: "MenuItem" })({
	px: 8,
	py: 2,
	gap: 8,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	textAlign: "right",
	textStyle: "sys.body-small",
	cursor: "pointer",
	_hover: { containerStyle: "sys.surface-container" },
	_focus: {
		containerStyle: "sys.surface-container",
		outline: 0
	}
});
var PropDoc = /* @__PURE__ */ styled("div", { displayName: "PropDoc" })({
	position: "absolute",
	zIndex: 1,
	opacity: .58,
	fontSize: 10,
	lineHeight: 10,
	top: -3,
	left: 0,
	"& > *": {
		display: "flex",
		alignItems: "center",
		gap: 4,
		"&::before": {
			content: `"// "`,
			font: "code"
		}
	}
});
var PropDescription = /* @__PURE__ */ styled("span", { displayName: "PropDescription" })({
	display: "block",
	textStyle: "sys.body-small",
	"& p": {
		my: 1,
		wordBreak: "keep-all",
		whiteSpace: "nowrap",
		opacity: .7
	},
	"& code": {
		wordBreak: "keep-all",
		whiteSpace: "nowrap"
	}
});
var Tooltip = /* @__PURE__ */ component$((props, { slots, render: render$1 }) => {
	const open$ = new PopupStatus(false);
	return rx(open$, /* @__PURE__ */ render$1((isOpen) => {
		const child = slots.default?.()[0];
		return /* @__PURE__ */ jsx(Popper, {
			isOpen,
			placement: props.placement ?? "left",
			$content: /* @__PURE__ */ jsx(TooltipWrapper, { children: /* @__PURE__ */ jsx(TooltipContainer, { children: /* @__PURE__ */ slots.title() }) }),
			children: child ? cloneVNode(child, {
				onMouseover: () => {
					open$.show();
				},
				onMouseout: () => {
					open$.hide();
				}
			}) : null
		});
	}));
}, {
	displayName: "Tooltip",
	props: ["placement"]
});
var TooltipContainer = /* @__PURE__ */ styled("div", { displayName: "TooltipContainer" })({
	py: 4,
	px: 12,
	rounded: "xs",
	shadow: "3",
	textStyle: "sys.body-small",
	containerStyle: "sys.on-surface",
	pos: "relative",
	zIndex: 100
});
var TooltipWrapper = /* @__PURE__ */ styled("div", { displayName: "TooltipWrapper" })({ px: 8 });
var LineError = /* @__PURE__ */ styled("div", { displayName: "LineError" })({
	display: "block",
	fontSize: 10,
	lineHeight: 14,
	color: "sys.error",
	position: "absolute",
	px: 2,
	top: -2,
	right: 0
});
var LinePrefix = /* @__PURE__ */ styled("div", { displayName: "LinePrefix" })({
	position: "relative",
	display: "flex",
	alignItems: "start",
	justifyContent: "flex-end",
	minWidth: "2vw",
	px: 12,
	userSelect: "none"
});
var LineContent = /* @__PURE__ */ styled("div", { displayName: "LineContent" })({
	flex: 1,
	minW: 0
});
var LineContentMain = /* @__PURE__ */ styled("div", { displayName: "LineContentMain" })({
	position: "relative",
	display: "flex",
	alignItems: "start"
});
var LineNumber = /* @__PURE__ */ styled(TokenView, { displayName: "LineNumber" })({
	opacity: .28,
	font: "code"
});
var LineFoldable = /* @__PURE__ */ styled(TokenView, (props) => {
	return (Wrap) => /* @__PURE__ */ jsx(Wrap, { children: /* @__PURE__ */ jsx(Icon, { path: props.folded ? mdiChevronRight : mdiChevronDown }) });
}, {
	displayName: "LineFoldable",
	props: ["folded"]
})({
	position: "absolute",
	top: 0,
	left: 2,
	cursor: "pointer",
	font: "code",
	opacity: .58,
	[`& ${Icon}`]: { svg: {
		width: 16,
		height: 16
	} }
});
var LineContainer = /* @__PURE__ */ styled("div", (props, { slots }) => {
	return (Wrap) => {
		return /* @__PURE__ */ jsxs(Wrap, { children: [/* @__PURE__ */ jsx(LinePrefix, { children: slots.leading?.() }), /* @__PURE__ */ jsx(LineContent, {
			sx: { paddingLeft: props.indent * 14 * 2 },
			children: /* @__PURE__ */ jsxs(LineContentMain, { children: [slots.default?.(), slots.comment?.()] })
		})] });
	};
}, {
	displayName: "LineContainer",
	props: ["indent"]
})({
	position: "relative",
	display: "flex",
	py: 2,
	w: "100%",
	maxW: "100%",
	_hover: {
		containerStyle: "sys.surface-container",
		[`& ${ActionToolbar}`]: { visibility: "visible" }
	},
	"&:focus-within": { containerStyle: "sys.surface-container" },
	[`&[data-dirty=${DirtyType.EDIT}]`]: { bgColor: /* @__PURE__ */ variant("sys.warning-container", /* @__PURE__ */ alpha(.38)) },
	[`&[data-dirty=${DirtyType.ADD}]`]: { bgColor: /* @__PURE__ */ variant("sys.success-container", /* @__PURE__ */ alpha(.38)) },
	[`&[data-dirty=${DirtyType.DELETE}]`]: {
		bgColor: /* @__PURE__ */ variant("sys.error-container", /* @__PURE__ */ alpha(.38)),
		textDecoration: "line-through",
		opacity: .58
	},
	_error: { bgColor: /* @__PURE__ */ variant("sys.error-container", /* @__PURE__ */ alpha(.38)) }
});
var InputText = class InputText extends ImmerBehaviorSubject {
	static from(inputEl$) {
		const input$ = new InputText("");
		rx(inputEl$, /* @__PURE__ */ switchMap((inputEl) => {
			if (!inputEl) return EMPTY$1;
			return rx(/* @__PURE__ */ fromEvent(inputEl, "input"), /* @__PURE__ */ tap((e) => {
				input$.next(e.target.value?.trim());
			}));
		}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
		return input$;
	}
};
var InputActionSubject = class InputActionSubject extends Subject {
	static from(inputEl$) {
		const inputAction$ = new InputActionSubject();
		rx(inputEl$, /* @__PURE__ */ switchMap((inputEl) => {
			if (!inputEl) return EMPTY$1;
			return merge$1(/* @__PURE__ */ rx(/* @__PURE__ */ fromEvent(inputEl, "keypress"), /* @__PURE__ */ tap((e) => {
				if (e.key === "Enter" && !e.shiftKey) {
					e.preventDefault();
					inputAction$.next({ type: "COMMIT" });
				}
			})), /* @__PURE__ */ rx(/* @__PURE__ */ fromEvent(inputEl, "keydown"), /* @__PURE__ */ tap((e) => {
				switch (e.key) {
					case "Tab":
						if (e.target.getAttribute("data-options")) {
							e.preventDefault();
							inputAction$.next({
								type: "SELECT",
								direction: 1
							});
						}
						break;
					case "ArrowDown":
						if (e.target.getAttribute("data-options")) {
							e.preventDefault();
							inputAction$.next({
								type: "SELECT",
								direction: 1
							});
						}
						break;
					case "ArrowUp":
						if (e.target.getAttribute("data-options")) {
							e.preventDefault();
							inputAction$.next({
								type: "SELECT",
								direction: -1
							});
						}
						break;
				}
			})), /* @__PURE__ */ rx(/* @__PURE__ */ fromEvent(inputEl, "keyup"), /* @__PURE__ */ tap((e) => {
				if (e.key === "Escape") inputAction$.next({ type: "CANCEL" });
			})));
		}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
		return inputAction$;
	}
};
var OneEditing = class extends Observable {
	static sync(oneEditing$, opt) {
		return rx(/* @__PURE__ */ merge$1(/* @__PURE__ */ rx(oneEditing$, /* @__PURE__ */ tap((p) => {
			if (p && p == JSONPointer.create(/* @__PURE__ */ opt.path())) opt.editing$.show();
		})), /* @__PURE__ */ rx(opt.editing$, /* @__PURE__ */ delay(1), /* @__PURE__ */ tap((editing) => {
			if (!editing) oneEditing$.disable(/* @__PURE__ */ opt.path());
		})), /* @__PURE__ */ rx(/* @__PURE__ */ combineLatest([opt.value$, oneEditing$]), /* @__PURE__ */ delay(1), /* @__PURE__ */ tap(([value, anyEditing]) => {
			if (isUndefined(value) && !anyEditing) oneEditing$.enable(/* @__PURE__ */ opt.path());
		}))), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	}
	#editing = new BehaviorSubject(null);
	constructor() {
		super((subscriber) => {
			const sub = /* @__PURE__ */ this.#editing.subscribe(subscriber);
			return () => sub.unsubscribe();
		});
	}
	enable(path$1) {
		if (!this.#editing.value) this.#editing.next(/* @__PURE__ */ JSONPointer.create(path$1));
	}
	disable(path$1) {
		if (this.#editing.value === JSONPointer.create(path$1)) this.#editing.next(null);
	}
};
const OneEditingProvider = /* @__PURE__ */ createProvider(() => new OneEditing());
var ValueInput = /* @__PURE__ */ component$((props, { render: render$1 }) => {
	const actionsEl$ = /* @__PURE__ */ observableRef(null);
	const containerEl$ = /* @__PURE__ */ observableRef(null);
	const inputEl$ = /* @__PURE__ */ observableRef(null);
	const inputAction$ = /* @__PURE__ */ InputActionSubject.from(inputEl$);
	const inputText$ = /* @__PURE__ */ InputText.from(inputEl$);
	const oneEditing$ = /* @__PURE__ */ OneEditingProvider.use();
	const editing$ = /* @__PURE__ */ PopupStatus.from(inputEl$);
	const editor$ = /* @__PURE__ */ JSONEditorProvider.use();
	OneEditing.sync(oneEditing$, {
		editing$,
		value$: props.value$,
		path: () => props.ctx.path
	});
	const selectedIndex = () => {
		if (props.typedef.type === "enums") {
			const i = /* @__PURE__ */ (Schema.schemaProp(props.typedef, "enum") ?? []).indexOf(props.value);
			if (i > -1) return i;
		}
		return 0;
	};
	const selectFocus$ = new ImmerBehaviorSubject({ index: /* @__PURE__ */ selectedIndex() });
	const reset = () => {
		inputText$.next("");
		editing$.hide();
	};
	const cancel = () => {
		reset();
		selectFocus$.next({ index: /* @__PURE__ */ selectedIndex() });
		if (isUndefined(props.value)) editor$.delete(props.ctx.path);
	};
	const commit = (value) => {
		if (props.typedef.type === "enums") {
			const enumValues = Schema.schemaProp(props.typedef, "enum") ?? [];
			value ??= enumValues[selectFocus$.value.index % enumValues.length];
		} else value ??= inputEl$.value?.value ? inputEl$.value?.value : void 0;
		if (isUndefined(value)) {
			editor$.delete(props.ctx.path);
			return;
		}
		const [err, v] = props.typedef.validate(value, { coerce: true });
		if (!!err) {
			editor$.setError(props.ctx.path, err.message);
			return;
		}
		editor$.update(props.ctx.path, v);
		reset();
	};
	if (props.allowRawJSON) rx(inputText$, /* @__PURE__ */ tap((input) => {
		const raw = /* @__PURE__ */ input.trim();
		if (raw.startsWith("{") && raw.endsWith("}") || raw.startsWith("[") && raw.endsWith("]")) try {
			const v = /* @__PURE__ */ JSON.parse(raw);
			editor$.update(props.ctx.path, v);
			reset();
		} catch (err) {
			editor$.setError(props.ctx.path, "无效的 JSON 字符串");
		}
	}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	rx(inputAction$, /* @__PURE__ */ tap((action) => {
		switch (action.type) {
			case "SELECT":
				selectFocus$.next((value) => {
					value.index += action.direction;
				});
				break;
			case "COMMIT":
				commit();
				break;
			case "CANCEL":
				cancel();
				break;
		}
	}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	let containerHeight;
	rx(/* @__PURE__ */ merge$1(/* @__PURE__ */ rx(containerEl$, /* @__PURE__ */ tapEffect((containerEl) => {
		if (containerEl) {
			const resizeObserver = new ResizeObserver((entries) => {
				for (const entry of entries) if (entry.contentBoxSize) containerHeight = entry.contentBoxSize[0]?.blockSize;
			});
			resizeObserver.observe(containerEl);
			return () => {
				resizeObserver.disconnect();
			};
		}
		return () => {};
	})), /* @__PURE__ */ rx(inputEl$, /* @__PURE__ */ delay(1), /* @__PURE__ */ tap((inputEl) => {
		if (inputEl) {
			inputEl?.focus();
			if (inputEl.value) {
				inputEl.selectionStart = 0;
				inputEl.selectionEnd = inputEl.value.length;
			}
		}
	})), /* @__PURE__ */ rx(inputEl$, /* @__PURE__ */ switchMap((inputEl) => {
		if (inputEl) {
			const initialHeight = containerHeight ? containerHeight - 2 : inputEl.getBoundingClientRect().height;
			const updateHeight = (inputEl$1) => {
				inputEl$1.style.height = `${initialHeight ?? 0}px`;
				inputEl$1.style.height = `${inputEl$1.scrollHeight}px`;
			};
			setTimeout(() => updateHeight(inputEl));
			return merge$1(/* @__PURE__ */ rx(/* @__PURE__ */ fromEvent(inputEl, "blur"), /* @__PURE__ */ tap((e) => {
				if (e.relatedTarget) {
					if (containerEl$.value?.contains(e.relatedTarget) || actionsEl$.value?.contains(e.relatedTarget)) return;
				}
				e.preventDefault();
				commit(inputEl.value);
			})), /* @__PURE__ */ rx(/* @__PURE__ */ fromEvent(inputEl, "input"), /* @__PURE__ */ tap((e) => {
				updateHeight(e.target);
				inputText$.next(e.target.value);
			})));
		}
		return EMPTY$1;
	}))), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	if (props.typedef.type == "enums") return rx(/* @__PURE__ */ combineLatest([
		props.value$,
		editing$,
		selectFocus$
	]), /* @__PURE__ */ render$1(([value, editing, { index: index$1 }]) => {
		const enumValues = Schema.schemaProp(props.typedef, "enum") ?? [];
		const enumLabels = Schema.metaProp(props.typedef, "enumLabels") ?? [];
		return /* @__PURE__ */ jsx(ValueContainer, {
			ref: containerEl$,
			onClick: () => {
				editing$.show();
			},
			"data-type": typeof value,
			tabindex: 0,
			children: editing ? /* @__PURE__ */ jsx(Menu, {
				onSelected: (value$1) => {
					commit(value$1);
				},
				open$: editing$,
				$content: /* @__PURE__ */ jsx("div", {
					ref: actionsEl$,
					children: /* @__PURE__ */ enumValues.map((value$1, i) => {
						return /* @__PURE__ */ jsx(EnumMenuItem, {
							"data-focus": index$1 % enumValues.length === i,
							value: value$1,
							label: enumLabels[i]
						});
					})
				}),
				children: /* @__PURE__ */ jsx(InputWrapper, { children: /* @__PURE__ */ jsx("input", {
					value: value == void 0 ? "" : `${value}`,
					ref: inputEl$,
					"data-options": true
				}) })
			}) : /* @__PURE__ */ jsx(Value, { children: JSON.stringify(value) ?? "undefined" })
		});
	}));
	return rx(/* @__PURE__ */ combineLatest([props.value$, editing$]), /* @__PURE__ */ render$1(([value, editing]) => {
		return /* @__PURE__ */ jsx(ValueContainer, {
			ref: containerEl$,
			onClick: () => {
				if (!props.ctx.readOnly) editing$.show();
			},
			onFocus: () => {
				if (!props.ctx.readOnly) editing$.show();
			},
			"data-type": typeof value,
			tabindex: 0,
			children: editing ? /* @__PURE__ */ jsx(Popper, {
				isOpen: true,
				placement: "right-start",
				$content: /* @__PURE__ */ jsxs(ValueInputActions, {
					ref: actionsEl$,
					children: [/* @__PURE__ */ jsx(ActionBtn, {
						type: "button",
						onClick: () => inputAction$.next({ type: "CANCEL" }),
						children: /* @__PURE__ */ jsx(Icon, { path: mdiCancel })
					}), /* @__PURE__ */ jsx(ActionBtn, {
						type: "button",
						onClick: () => inputAction$.next({ type: "COMMIT" }),
						children: /* @__PURE__ */ jsx(Icon, { path: mdiCheckBold })
					})]
				}),
				children: /* @__PURE__ */ jsx(InputWrapper, { children: /* @__PURE__ */ jsx("textarea", {
					ref: inputEl$,
					rows: 1,
					value: value == void 0 ? "" : `${value}`
				}) })
			}) : /* @__PURE__ */ jsx(Value, { children: JSON.stringify(value) ?? "undefined" })
		});
	}));
}, {
	displayName: "ValueInput",
	props: [
		"typedef",
		"ctx",
		"value",
		"allowRawJSON"
	]
});
var ValueInputActions = /* @__PURE__ */ styled("div", { displayName: "ValueInputActions" })({
	borderRight: "1px solid",
	borderTop: "1px solid",
	borderBottom: "1px solid",
	borderColor: /* @__PURE__ */ variant("sys.outline-variant", /* @__PURE__ */ alpha(.38)),
	containerStyle: "sys.surface-container-lowest",
	roundedRight: "sm",
	display: "flex",
	px: 2,
	py: 0,
	ml: -4
});
var InputWrapper = /* @__PURE__ */ styled("div", { displayName: "InputWrapper" })({
	flex: 1,
	minWidth: 0,
	maxWidth: "80%",
	display: "flex",
	alignItems: "center",
	border: "1px solid",
	overflow: "hidden",
	borderColor: /* @__PURE__ */ variant("sys.outline-variant", /* @__PURE__ */ alpha(.38)),
	opacity: .38,
	"&:hover": { opacity: 1 },
	"&:focus-within": { opacity: 1 },
	"& > textarea,input": {
		flex: 1,
		rounded: "xs",
		containerStyle: "sys.surface-container-lowest",
		width: "100%",
		outline: "none",
		border: "none",
		px: 8,
		py: 0,
		m: 0,
		fontSize: "inherit",
		color: "inherit",
		lineHeight: "inherit",
		overflow: "hidden",
		resize: "none",
		"&[data-options]:focus": { roundedBottom: 0 }
	}
});
var Value = /* @__PURE__ */ styled("div", { displayName: "Value" })({
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	overflow: "hidden",
	textOverflow: "ellipsis",
	_hover: {
		textOverflow: "clip",
		whiteSpace: "normal",
		wordBreak: "break-all"
	}
});
var ValueContainer = /* @__PURE__ */ styled("div", { displayName: "ValueContainer" })({
	wordBreak: "keep-all",
	whiteSpace: "nowrap",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	font: "code",
	minWidth: 0,
	flex: 1,
	textStyle: "sys.label-small",
	fontSize: 12,
	lineHeight: 24,
	gap: 8,
	_type__string: { color: "sys.primary" },
	_type__number: { color: "sys.primary" },
	_type__boolean: { color: "sys.warning" },
	_type__undefined: { color: "sys.error" }
});
var EnumMenuItemContainer = /* @__PURE__ */ styled(MenuItem, { displayName: "EnumMenuItemContainer" })({ [`& ${PropName}`]: { textAlign: "left" } });
var EnumMenuItem = /* @__PURE__ */ component((props) => {
	return () => {
		return /* @__PURE__ */ jsxs(EnumMenuItemContainer, {
			"data-value": props.value,
			tabindex: 0,
			children: [/* @__PURE__ */ jsx(PropName, { children: props.value }), props.label && /* @__PURE__ */ jsx(PropDescription, { children: props.label })]
		});
	};
}, {
	displayName: "EnumMenuItem",
	props: ["value", "label"]
});
var import_copy_to_clipboard = /* @__PURE__ */ __toESM(/* @__PURE__ */ require_copy_to_clipboard());
var CopyAsJSONIconBtn = /* @__PURE__ */ component$((props, {}) => {
	return () => /* @__PURE__ */ jsx(Tooltip, {
		$title: "复制当前节点为 JSON 字符串",
		children: /* @__PURE__ */ jsx(ActionBtn, {
			type: "button",
			onClick: () => (0, import_copy_to_clipboard.default)(/* @__PURE__ */ JSON.stringify(props.value, null, 2)),
			children: /* @__PURE__ */ jsx(Icon, { path: mdiContentCopy })
		})
	});
}, {
	displayName: "CopyAsJSONIconBtn",
	props: ["value"]
});
var ItemRemoveIconBtn = /* @__PURE__ */ component$(({}, { emit }) => {
	return () => /* @__PURE__ */ jsx(Tooltip, {
		$title: "移除项",
		children: /* @__PURE__ */ jsx(ActionBtn, {
			type: "button",
			onClick: () => emit("remove"),
			children: /* @__PURE__ */ jsx(Icon, { path: mdiMinusBoxOutline })
		})
	});
}, {
	displayName: "ItemRemoveIconBtn",
	emits: ["remove"]
});
var ItemAddIconBtn = /* @__PURE__ */ component$((props, { emit, render: render$1 }) => {
	const inputEl$ = /* @__PURE__ */ observableRef(null);
	const inputText$ = /* @__PURE__ */ InputText.from(inputEl$);
	const inputAction$ = /* @__PURE__ */ InputActionSubject.from(inputEl$);
	const open$ = /* @__PURE__ */ PopupStatus.from(inputEl$);
	const editor$ = /* @__PURE__ */ JSONEditorProvider.use();
	const reset = () => {
		if (inputEl$.value) {
			inputEl$.value.value = "";
			inputEl$.value.blur();
		}
	};
	const commit = (inputValue) => {
		inputValue ??= inputText$.value;
		if (inputValue) {
			const [err, value] = Schema.schemaProp(props.typedef, "items").validate(inputValue, { coerce: true });
			if (!!err) {
				editor$.setError(props.ctx.path, err);
				return;
			}
			emit("add", value);
		} else emit("add", void 0);
		reset();
	};
	rx(inputText$, /* @__PURE__ */ tap((input) => {
		const raw = /* @__PURE__ */ input.trim();
		if (raw.startsWith("[") && raw.endsWith("]")) try {
			const v = /* @__PURE__ */ JSON.parse(raw);
			editor$.update(props.ctx.path, v);
			reset();
		} catch (err) {
			editor$.setError(props.ctx.path, "无效的 JSON 字符串");
		}
		if (raw.startsWith("{") && raw.endsWith("}")) try {
			commit(/* @__PURE__ */ JSON.parse(raw));
		} catch (err) {
			editor$.setError(props.ctx.path, "无效的 JSON 字符串");
		}
	}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	rx(inputAction$, /* @__PURE__ */ tap((action) => {
		switch (action.type) {
			case "COMMIT":
				commit();
				break;
			case "CANCEL":
				reset();
				break;
		}
	}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	const $input = /* @__PURE__ */ rx(open$, /* @__PURE__ */ render$1((open) => {
		return /* @__PURE__ */ jsx(Popper, {
			isOpen: open,
			placement: "right-start",
			$content: /* @__PURE__ */ jsxs(ValueInputActions, { children: [/* @__PURE__ */ jsx(ActionBtn, {
				type: "button",
				onClick: () => inputAction$.next({ type: "CANCEL" }),
				children: /* @__PURE__ */ jsx(Icon, { path: mdiCancel })
			}), /* @__PURE__ */ jsx(ActionBtn, {
				type: "button",
				onClick: () => inputAction$.next({ type: "COMMIT" }),
				children: /* @__PURE__ */ jsx(Icon, { path: mdiCheckBold })
			})] }),
			children: /* @__PURE__ */ jsx(InputWrapper, { children: /* @__PURE__ */ jsx("input", {
				ref: inputEl$,
				type: "text",
				placeholder: "添加数组项 (可粘贴 JSON 字符串)"
			}) })
		});
	}));
	return () => /* @__PURE__ */ jsx(ValueContainer, {
		sx: { mx: -4 },
		children: $input
	});
}, {
	displayName: "ItemAddIconBtn",
	props: ["ctx", "typedef"],
	emits: ["add"]
});
var emptyOptions$2 = {};
function toString$1(value, options) {
	const settings = options || emptyOptions$2;
	return one$1(value, typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true, typeof settings.includeHtml === "boolean" ? settings.includeHtml : true);
}
function one$1(value, includeImageAlt, includeHtml) {
	if (node(value)) {
		if ("value" in value) return value.type === "html" && !includeHtml ? "" : value.value;
		if (includeImageAlt && "alt" in value && value.alt) return value.alt;
		if ("children" in value) return all(value.children, includeImageAlt, includeHtml);
	}
	if (Array.isArray(value)) return all(value, includeImageAlt, includeHtml);
	return "";
}
function all(values, includeImageAlt, includeHtml) {
	const result = [];
	let index$1 = -1;
	while (++index$1 < values.length) result[index$1] = /* @__PURE__ */ one$1(values[index$1], includeImageAlt, includeHtml);
	return result.join("");
}
function node(value) {
	return Boolean(value && typeof value === "object");
}
var element$1 = /* @__PURE__ */ document.createElement("i");
function decodeNamedCharacterReference(value) {
	const characterReference$1 = "&" + value + ";";
	element$1.innerHTML = characterReference$1;
	const character = element$1.textContent;
	if (character.charCodeAt(character.length - 1) === 59 && value !== "semi") return false;
	return character === characterReference$1 ? false : character;
}
function splice(list$2, start, remove, items) {
	const end = list$2.length;
	let chunkStart = 0;
	let parameters;
	if (start < 0) start = -start > end ? 0 : end + start;
	else start = start > end ? end : start;
	remove = remove > 0 ? remove : 0;
	if (items.length < 1e4) {
		parameters = /* @__PURE__ */ Array.from(items);
		parameters.unshift(start, remove);
		list$2.splice(...parameters);
	} else {
		if (remove) list$2.splice(start, remove);
		while (chunkStart < items.length) {
			parameters = /* @__PURE__ */ items.slice(chunkStart, chunkStart + 1e4);
			parameters.unshift(start, 0);
			list$2.splice(...parameters);
			chunkStart += 1e4;
			start += 1e4;
		}
	}
}
function push(list$2, items) {
	if (list$2.length > 0) {
		splice(list$2, list$2.length, 0, items);
		return list$2;
	}
	return items;
}
var hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
	const all$1 = {};
	let index$1 = -1;
	while (++index$1 < extensions.length) syntaxExtension(all$1, extensions[index$1]);
	return all$1;
}
function syntaxExtension(all$1, extension$1) {
	let hook;
	for (hook in extension$1) {
		const left = (hasOwnProperty.call(all$1, hook) ? all$1[hook] : void 0) || (all$1[hook] = {});
		const right = extension$1[hook];
		let code$2;
		if (right) for (code$2 in right) {
			if (!hasOwnProperty.call(left, code$2)) left[code$2] = [];
			const value = right[code$2];
			constructs(left[code$2], Array.isArray(value) ? value : value ? [value] : []);
		}
	}
}
function constructs(existing, list$2) {
	let index$1 = -1;
	const before = [];
	while (++index$1 < list$2.length) (list$2[index$1].add === "after" ? existing : before).push(list$2[index$1]);
	splice(existing, 0, 0, before);
}
function decodeNumericCharacterReference(value, base) {
	const code$2 = /* @__PURE__ */ Number.parseInt(value, base);
	if (code$2 < 9 || code$2 === 11 || code$2 > 13 && code$2 < 32 || code$2 > 126 && code$2 < 160 || code$2 > 55295 && code$2 < 57344 || code$2 > 64975 && code$2 < 65008 || (code$2 & 65535) === 65535 || (code$2 & 65535) === 65534 || code$2 > 1114111) return "�";
	return String.fromCodePoint(code$2);
}
function normalizeIdentifier(value) {
	return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const asciiAlpha = /* @__PURE__ */ regexCheck(/[A-Za-z]/);
const asciiAlphanumeric = /* @__PURE__ */ regexCheck(/[\dA-Za-z]/);
const asciiAtext = /* @__PURE__ */ regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code$2) {
	return code$2 !== null && (code$2 < 32 || code$2 === 127);
}
const asciiDigit = /* @__PURE__ */ regexCheck(/\d/);
const asciiHexDigit = /* @__PURE__ */ regexCheck(/[\dA-Fa-f]/);
const asciiPunctuation = /* @__PURE__ */ regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(code$2) {
	return code$2 !== null && code$2 < -2;
}
function markdownLineEndingOrSpace(code$2) {
	return code$2 !== null && (code$2 < 0 || code$2 === 32);
}
function markdownSpace(code$2) {
	return code$2 === -2 || code$2 === -1 || code$2 === 32;
}
const unicodePunctuation = /* @__PURE__ */ regexCheck(/\p{P}|\p{S}/u);
const unicodeWhitespace = /* @__PURE__ */ regexCheck(/\s/);
function regexCheck(regex) {
	return check;
	function check(code$2) {
		return code$2 !== null && code$2 > -1 && regex.test(/* @__PURE__ */ String.fromCharCode(code$2));
	}
}
function normalizeUri(value) {
	const result = [];
	let index$1 = -1;
	let start = 0;
	let skip = 0;
	while (++index$1 < value.length) {
		const code$2 = /* @__PURE__ */ value.charCodeAt(index$1);
		let replace$1 = "";
		if (code$2 === 37 && asciiAlphanumeric(/* @__PURE__ */ value.charCodeAt(index$1 + 1)) && asciiAlphanumeric(/* @__PURE__ */ value.charCodeAt(index$1 + 2))) skip = 2;
		else if (code$2 < 128) {
			if (!/[!#$&-;=?-Z_a-z~]/.test(/* @__PURE__ */ String.fromCharCode(code$2))) replace$1 = /* @__PURE__ */ String.fromCharCode(code$2);
		} else if (code$2 > 55295 && code$2 < 57344) {
			const next = /* @__PURE__ */ value.charCodeAt(index$1 + 1);
			if (code$2 < 56320 && next > 56319 && next < 57344) {
				replace$1 = /* @__PURE__ */ String.fromCharCode(code$2, next);
				skip = 1;
			} else replace$1 = "�";
		} else replace$1 = /* @__PURE__ */ String.fromCharCode(code$2);
		if (replace$1) {
			result.push(/* @__PURE__ */ value.slice(start, index$1), /* @__PURE__ */ encodeURIComponent(replace$1));
			start = index$1 + skip + 1;
			replace$1 = "";
		}
		if (skip) {
			index$1 += skip;
			skip = 0;
		}
	}
	return result.join("") + value.slice(start);
}
function factorySpace(effects, ok$2, type, max) {
	const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
	let size$1 = 0;
	return start;
	function start(code$2) {
		if (markdownSpace(code$2)) {
			effects.enter(type);
			return prefix(code$2);
		}
		return ok$2(code$2);
	}
	function prefix(code$2) {
		if (markdownSpace(code$2) && size$1++ < limit) {
			effects.consume(code$2);
			return prefix;
		}
		effects.exit(type);
		return ok$2(code$2);
	}
}
const content = { tokenize: initializeContent };
function initializeContent(effects) {
	const contentStart = /* @__PURE__ */ effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
	let previous$3;
	return contentStart;
	function afterContentStartConstruct(code$2) {
		if (code$2 === null) {
			effects.consume(code$2);
			return;
		}
		effects.enter("lineEnding");
		effects.consume(code$2);
		effects.exit("lineEnding");
		return factorySpace(effects, contentStart, "linePrefix");
	}
	function paragraphInitial(code$2) {
		effects.enter("paragraph");
		return lineStart(code$2);
	}
	function lineStart(code$2) {
		const token = /* @__PURE__ */ effects.enter("chunkText", {
			contentType: "text",
			previous: previous$3
		});
		if (previous$3) previous$3.next = token;
		previous$3 = token;
		return data$1(code$2);
	}
	function data$1(code$2) {
		if (code$2 === null) {
			effects.exit("chunkText");
			effects.exit("paragraph");
			effects.consume(code$2);
			return;
		}
		if (markdownLineEnding(code$2)) {
			effects.consume(code$2);
			effects.exit("chunkText");
			return lineStart;
		}
		effects.consume(code$2);
		return data$1;
	}
}
const document$1 = { tokenize: initializeDocument };
var containerConstruct = { tokenize: tokenizeContainer };
function initializeDocument(effects) {
	const self$1 = this;
	const stack = [];
	let continued = 0;
	let childFlow;
	let childToken;
	let lineStartOffset;
	return start;
	function start(code$2) {
		if (continued < stack.length) {
			const item = stack[continued];
			self$1.containerState = item[1];
			return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code$2);
		}
		return checkNewContainers(code$2);
	}
	function documentContinue(code$2) {
		continued++;
		if (self$1.containerState._closeFlow) {
			self$1.containerState._closeFlow = void 0;
			if (childFlow) closeFlow();
			const indexBeforeExits = self$1.events.length;
			let indexBeforeFlow = indexBeforeExits;
			let point$3;
			while (indexBeforeFlow--) if (self$1.events[indexBeforeFlow][0] === "exit" && self$1.events[indexBeforeFlow][1].type === "chunkFlow") {
				point$3 = self$1.events[indexBeforeFlow][1].end;
				break;
			}
			exitContainers(continued);
			let index$1 = indexBeforeExits;
			while (index$1 < self$1.events.length) {
				self$1.events[index$1][1].end = { ...point$3 };
				index$1++;
			}
			splice(self$1.events, indexBeforeFlow + 1, 0, /* @__PURE__ */ self$1.events.slice(indexBeforeExits));
			self$1.events.length = index$1;
			return checkNewContainers(code$2);
		}
		return start(code$2);
	}
	function checkNewContainers(code$2) {
		if (continued === stack.length) {
			if (!childFlow) return documentContinued(code$2);
			if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) return flowStart(code$2);
			self$1.interrupt = /* @__PURE__ */ Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
		}
		self$1.containerState = {};
		return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code$2);
	}
	function thereIsANewContainer(code$2) {
		if (childFlow) closeFlow();
		exitContainers(continued);
		return documentContinued(code$2);
	}
	function thereIsNoNewContainer(code$2) {
		self$1.parser.lazy[self$1.now().line] = continued !== stack.length;
		lineStartOffset = self$1.now().offset;
		return flowStart(code$2);
	}
	function documentContinued(code$2) {
		self$1.containerState = {};
		return effects.attempt(containerConstruct, containerContinue, flowStart)(code$2);
	}
	function containerContinue(code$2) {
		continued++;
		stack.push([self$1.currentConstruct, self$1.containerState]);
		return documentContinued(code$2);
	}
	function flowStart(code$2) {
		if (code$2 === null) {
			if (childFlow) closeFlow();
			exitContainers(0);
			effects.consume(code$2);
			return;
		}
		childFlow = childFlow || self$1.parser.flow(/* @__PURE__ */ self$1.now());
		effects.enter("chunkFlow", {
			_tokenizer: childFlow,
			contentType: "flow",
			previous: childToken
		});
		return flowContinue(code$2);
	}
	function flowContinue(code$2) {
		if (code$2 === null) {
			writeToChild(/* @__PURE__ */ effects.exit("chunkFlow"), true);
			exitContainers(0);
			effects.consume(code$2);
			return;
		}
		if (markdownLineEnding(code$2)) {
			effects.consume(code$2);
			writeToChild(/* @__PURE__ */ effects.exit("chunkFlow"));
			continued = 0;
			self$1.interrupt = void 0;
			return start;
		}
		effects.consume(code$2);
		return flowContinue;
	}
	function writeToChild(token, endOfFile) {
		const stream = /* @__PURE__ */ self$1.sliceStream(token);
		if (endOfFile) stream.push(null);
		token.previous = childToken;
		if (childToken) childToken.next = token;
		childToken = token;
		childFlow.defineSkip(token.start);
		childFlow.write(stream);
		if (self$1.parser.lazy[token.start.line]) {
			let index$1 = childFlow.events.length;
			while (index$1--) if (childFlow.events[index$1][1].start.offset < lineStartOffset && (!childFlow.events[index$1][1].end || childFlow.events[index$1][1].end.offset > lineStartOffset)) return;
			const indexBeforeExits = self$1.events.length;
			let indexBeforeFlow = indexBeforeExits;
			let seen;
			let point$3;
			while (indexBeforeFlow--) if (self$1.events[indexBeforeFlow][0] === "exit" && self$1.events[indexBeforeFlow][1].type === "chunkFlow") {
				if (seen) {
					point$3 = self$1.events[indexBeforeFlow][1].end;
					break;
				}
				seen = true;
			}
			exitContainers(continued);
			index$1 = indexBeforeExits;
			while (index$1 < self$1.events.length) {
				self$1.events[index$1][1].end = { ...point$3 };
				index$1++;
			}
			splice(self$1.events, indexBeforeFlow + 1, 0, /* @__PURE__ */ self$1.events.slice(indexBeforeExits));
			self$1.events.length = index$1;
		}
	}
	function exitContainers(size$1) {
		let index$1 = stack.length;
		while (index$1-- > size$1) {
			const entry = stack[index$1];
			self$1.containerState = entry[1];
			entry[0].exit.call(self$1, effects);
		}
		stack.length = size$1;
	}
	function closeFlow() {
		childFlow.write([null]);
		childToken = void 0;
		childFlow = void 0;
		self$1.containerState._closeFlow = void 0;
	}
}
function tokenizeContainer(effects, ok$2, nok) {
	return factorySpace(effects, /* @__PURE__ */ effects.attempt(this.parser.constructs.document, ok$2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function classifyCharacter(code$2) {
	if (code$2 === null || markdownLineEndingOrSpace(code$2) || unicodeWhitespace(code$2)) return 1;
	if (unicodePunctuation(code$2)) return 2;
}
function resolveAll(constructs$1, events, context) {
	const called = [];
	let index$1 = -1;
	while (++index$1 < constructs$1.length) {
		const resolve = constructs$1[index$1].resolveAll;
		if (resolve && !called.includes(resolve)) {
			events = /* @__PURE__ */ resolve(events, context);
			called.push(resolve);
		}
	}
	return events;
}
const attention = {
	name: "attention",
	resolveAll: resolveAllAttention,
	tokenize: tokenizeAttention
};
function resolveAllAttention(events, context) {
	let index$1 = -1;
	let open;
	let group;
	let text$5;
	let openingSequence;
	let closingSequence;
	let use;
	let nextEvents;
	let offset;
	while (++index$1 < events.length) if (events[index$1][0] === "enter" && events[index$1][1].type === "attentionSequence" && events[index$1][1]._close) {
		open = index$1;
		while (open--) if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index$1][1]).charCodeAt(0)) {
			if ((events[open][1]._close || events[index$1][1]._open) && (events[index$1][1].end.offset - events[index$1][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index$1][1].end.offset - events[index$1][1].start.offset) % 3)) continue;
			use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index$1][1].end.offset - events[index$1][1].start.offset > 1 ? 2 : 1;
			const start = { ...events[open][1].end };
			const end = { ...events[index$1][1].start };
			movePoint(start, -use);
			movePoint(end, use);
			openingSequence = {
				type: use > 1 ? "strongSequence" : "emphasisSequence",
				start,
				end: { ...events[open][1].end }
			};
			closingSequence = {
				type: use > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...events[index$1][1].start },
				end
			};
			text$5 = {
				type: use > 1 ? "strongText" : "emphasisText",
				start: { ...events[open][1].end },
				end: { ...events[index$1][1].start }
			};
			group = {
				type: use > 1 ? "strong" : "emphasis",
				start: { ...openingSequence.start },
				end: { ...closingSequence.end }
			};
			events[open][1].end = { ...openingSequence.start };
			events[index$1][1].start = { ...closingSequence.end };
			nextEvents = [];
			if (events[open][1].end.offset - events[open][1].start.offset) nextEvents = /* @__PURE__ */ push(nextEvents, [[
				"enter",
				events[open][1],
				context
			], [
				"exit",
				events[open][1],
				context
			]]);
			nextEvents = /* @__PURE__ */ push(nextEvents, [
				[
					"enter",
					group,
					context
				],
				[
					"enter",
					openingSequence,
					context
				],
				[
					"exit",
					openingSequence,
					context
				],
				[
					"enter",
					text$5,
					context
				]
			]);
			nextEvents = /* @__PURE__ */ push(nextEvents, /* @__PURE__ */ resolveAll(context.parser.constructs.insideSpan.null, /* @__PURE__ */ events.slice(open + 1, index$1), context));
			nextEvents = /* @__PURE__ */ push(nextEvents, [
				[
					"exit",
					text$5,
					context
				],
				[
					"enter",
					closingSequence,
					context
				],
				[
					"exit",
					closingSequence,
					context
				],
				[
					"exit",
					group,
					context
				]
			]);
			if (events[index$1][1].end.offset - events[index$1][1].start.offset) {
				offset = 2;
				nextEvents = /* @__PURE__ */ push(nextEvents, [[
					"enter",
					events[index$1][1],
					context
				], [
					"exit",
					events[index$1][1],
					context
				]]);
			} else offset = 0;
			splice(events, open - 1, index$1 - open + 3, nextEvents);
			index$1 = open + nextEvents.length - offset - 2;
			break;
		}
	}
	index$1 = -1;
	while (++index$1 < events.length) if (events[index$1][1].type === "attentionSequence") events[index$1][1].type = "data";
	return events;
}
function tokenizeAttention(effects, ok$2) {
	const attentionMarkers$1 = this.parser.constructs.attentionMarkers.null;
	const previous$3 = this.previous;
	const before = /* @__PURE__ */ classifyCharacter(previous$3);
	let marker;
	return start;
	function start(code$2) {
		marker = code$2;
		effects.enter("attentionSequence");
		return inside(code$2);
	}
	function inside(code$2) {
		if (code$2 === marker) {
			effects.consume(code$2);
			return inside;
		}
		const token = /* @__PURE__ */ effects.exit("attentionSequence");
		const after = /* @__PURE__ */ classifyCharacter(code$2);
		const open = !after || after === 2 && before || attentionMarkers$1.includes(code$2);
		const close = !before || before === 2 && after || attentionMarkers$1.includes(previous$3);
		token._open = /* @__PURE__ */ Boolean(marker === 42 ? open : open && (before || !close));
		token._close = /* @__PURE__ */ Boolean(marker === 42 ? close : close && (after || !open));
		return ok$2(code$2);
	}
}
function movePoint(point$3, offset) {
	point$3.column += offset;
	point$3.offset += offset;
	point$3._bufferIndex += offset;
}
const autolink = {
	name: "autolink",
	tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok$2, nok) {
	let size$1 = 0;
	return start;
	function start(code$2) {
		effects.enter("autolink");
		effects.enter("autolinkMarker");
		effects.consume(code$2);
		effects.exit("autolinkMarker");
		effects.enter("autolinkProtocol");
		return open;
	}
	function open(code$2) {
		if (asciiAlpha(code$2)) {
			effects.consume(code$2);
			return schemeOrEmailAtext;
		}
		if (code$2 === 64) return nok(code$2);
		return emailAtext(code$2);
	}
	function schemeOrEmailAtext(code$2) {
		if (code$2 === 43 || code$2 === 45 || code$2 === 46 || asciiAlphanumeric(code$2)) {
			size$1 = 1;
			return schemeInsideOrEmailAtext(code$2);
		}
		return emailAtext(code$2);
	}
	function schemeInsideOrEmailAtext(code$2) {
		if (code$2 === 58) {
			effects.consume(code$2);
			size$1 = 0;
			return urlInside;
		}
		if ((code$2 === 43 || code$2 === 45 || code$2 === 46 || asciiAlphanumeric(code$2)) && size$1++ < 32) {
			effects.consume(code$2);
			return schemeInsideOrEmailAtext;
		}
		size$1 = 0;
		return emailAtext(code$2);
	}
	function urlInside(code$2) {
		if (code$2 === 62) {
			effects.exit("autolinkProtocol");
			effects.enter("autolinkMarker");
			effects.consume(code$2);
			effects.exit("autolinkMarker");
			effects.exit("autolink");
			return ok$2;
		}
		if (code$2 === null || code$2 === 32 || code$2 === 60 || asciiControl(code$2)) return nok(code$2);
		effects.consume(code$2);
		return urlInside;
	}
	function emailAtext(code$2) {
		if (code$2 === 64) {
			effects.consume(code$2);
			return emailAtSignOrDot;
		}
		if (asciiAtext(code$2)) {
			effects.consume(code$2);
			return emailAtext;
		}
		return nok(code$2);
	}
	function emailAtSignOrDot(code$2) {
		return asciiAlphanumeric(code$2) ? emailLabel(code$2) : nok(code$2);
	}
	function emailLabel(code$2) {
		if (code$2 === 46) {
			effects.consume(code$2);
			size$1 = 0;
			return emailAtSignOrDot;
		}
		if (code$2 === 62) {
			effects.exit("autolinkProtocol").type = "autolinkEmail";
			effects.enter("autolinkMarker");
			effects.consume(code$2);
			effects.exit("autolinkMarker");
			effects.exit("autolink");
			return ok$2;
		}
		return emailValue(code$2);
	}
	function emailValue(code$2) {
		if ((code$2 === 45 || asciiAlphanumeric(code$2)) && size$1++ < 63) {
			const next = code$2 === 45 ? emailValue : emailLabel;
			effects.consume(code$2);
			return next;
		}
		return nok(code$2);
	}
}
const blankLine = {
	partial: true,
	tokenize: tokenizeBlankLine
};
function tokenizeBlankLine(effects, ok$2, nok) {
	return start;
	function start(code$2) {
		return markdownSpace(code$2) ? factorySpace(effects, after, "linePrefix")(code$2) : after(code$2);
	}
	function after(code$2) {
		return code$2 === null || markdownLineEnding(code$2) ? ok$2(code$2) : nok(code$2);
	}
}
const blockQuote = {
	continuation: { tokenize: tokenizeBlockQuoteContinuation },
	exit: exit$2,
	name: "blockQuote",
	tokenize: tokenizeBlockQuoteStart
};
function tokenizeBlockQuoteStart(effects, ok$2, nok) {
	const self$1 = this;
	return start;
	function start(code$2) {
		if (code$2 === 62) {
			const state = self$1.containerState;
			if (!state.open) {
				effects.enter("blockQuote", { _container: true });
				state.open = true;
			}
			effects.enter("blockQuotePrefix");
			effects.enter("blockQuoteMarker");
			effects.consume(code$2);
			effects.exit("blockQuoteMarker");
			return after;
		}
		return nok(code$2);
	}
	function after(code$2) {
		if (markdownSpace(code$2)) {
			effects.enter("blockQuotePrefixWhitespace");
			effects.consume(code$2);
			effects.exit("blockQuotePrefixWhitespace");
			effects.exit("blockQuotePrefix");
			return ok$2;
		}
		effects.exit("blockQuotePrefix");
		return ok$2(code$2);
	}
}
function tokenizeBlockQuoteContinuation(effects, ok$2, nok) {
	const self$1 = this;
	return contStart;
	function contStart(code$2) {
		if (markdownSpace(code$2)) return factorySpace(effects, contBefore, "linePrefix", self$1.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code$2);
		return contBefore(code$2);
	}
	function contBefore(code$2) {
		return effects.attempt(blockQuote, ok$2, nok)(code$2);
	}
}
function exit$2(effects) {
	effects.exit("blockQuote");
}
const characterEscape = {
	name: "characterEscape",
	tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok$2, nok) {
	return start;
	function start(code$2) {
		effects.enter("characterEscape");
		effects.enter("escapeMarker");
		effects.consume(code$2);
		effects.exit("escapeMarker");
		return inside;
	}
	function inside(code$2) {
		if (asciiPunctuation(code$2)) {
			effects.enter("characterEscapeValue");
			effects.consume(code$2);
			effects.exit("characterEscapeValue");
			effects.exit("characterEscape");
			return ok$2;
		}
		return nok(code$2);
	}
}
const characterReference = {
	name: "characterReference",
	tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok$2, nok) {
	const self$1 = this;
	let size$1 = 0;
	let max;
	let test;
	return start;
	function start(code$2) {
		effects.enter("characterReference");
		effects.enter("characterReferenceMarker");
		effects.consume(code$2);
		effects.exit("characterReferenceMarker");
		return open;
	}
	function open(code$2) {
		if (code$2 === 35) {
			effects.enter("characterReferenceMarkerNumeric");
			effects.consume(code$2);
			effects.exit("characterReferenceMarkerNumeric");
			return numeric;
		}
		effects.enter("characterReferenceValue");
		max = 31;
		test = asciiAlphanumeric;
		return value(code$2);
	}
	function numeric(code$2) {
		if (code$2 === 88 || code$2 === 120) {
			effects.enter("characterReferenceMarkerHexadecimal");
			effects.consume(code$2);
			effects.exit("characterReferenceMarkerHexadecimal");
			effects.enter("characterReferenceValue");
			max = 6;
			test = asciiHexDigit;
			return value;
		}
		effects.enter("characterReferenceValue");
		max = 7;
		test = asciiDigit;
		return value(code$2);
	}
	function value(code$2) {
		if (code$2 === 59 && size$1) {
			const token = /* @__PURE__ */ effects.exit("characterReferenceValue");
			if (test === asciiAlphanumeric && !decodeNamedCharacterReference(/* @__PURE__ */ self$1.sliceSerialize(token))) return nok(code$2);
			effects.enter("characterReferenceMarker");
			effects.consume(code$2);
			effects.exit("characterReferenceMarker");
			effects.exit("characterReference");
			return ok$2;
		}
		if (test(code$2) && size$1++ < max) {
			effects.consume(code$2);
			return value;
		}
		return nok(code$2);
	}
}
var nonLazyContinuation = {
	partial: true,
	tokenize: tokenizeNonLazyContinuation
};
const codeFenced = {
	concrete: true,
	name: "codeFenced",
	tokenize: tokenizeCodeFenced
};
function tokenizeCodeFenced(effects, ok$2, nok) {
	const self$1 = this;
	const closeStart = {
		partial: true,
		tokenize: tokenizeCloseStart
	};
	let initialPrefix = 0;
	let sizeOpen = 0;
	let marker;
	return start;
	function start(code$2) {
		return beforeSequenceOpen(code$2);
	}
	function beforeSequenceOpen(code$2) {
		const tail = self$1.events[self$1.events.length - 1];
		initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
		marker = code$2;
		effects.enter("codeFenced");
		effects.enter("codeFencedFence");
		effects.enter("codeFencedFenceSequence");
		return sequenceOpen(code$2);
	}
	function sequenceOpen(code$2) {
		if (code$2 === marker) {
			sizeOpen++;
			effects.consume(code$2);
			return sequenceOpen;
		}
		if (sizeOpen < 3) return nok(code$2);
		effects.exit("codeFencedFenceSequence");
		return markdownSpace(code$2) ? factorySpace(effects, infoBefore, "whitespace")(code$2) : infoBefore(code$2);
	}
	function infoBefore(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("codeFencedFence");
			return self$1.interrupt ? ok$2(code$2) : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code$2);
		}
		effects.enter("codeFencedFenceInfo");
		effects.enter("chunkString", { contentType: "string" });
		return info(code$2);
	}
	function info(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("chunkString");
			effects.exit("codeFencedFenceInfo");
			return infoBefore(code$2);
		}
		if (markdownSpace(code$2)) {
			effects.exit("chunkString");
			effects.exit("codeFencedFenceInfo");
			return factorySpace(effects, metaBefore, "whitespace")(code$2);
		}
		if (code$2 === 96 && code$2 === marker) return nok(code$2);
		effects.consume(code$2);
		return info;
	}
	function metaBefore(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) return infoBefore(code$2);
		effects.enter("codeFencedFenceMeta");
		effects.enter("chunkString", { contentType: "string" });
		return meta(code$2);
	}
	function meta(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("chunkString");
			effects.exit("codeFencedFenceMeta");
			return infoBefore(code$2);
		}
		if (code$2 === 96 && code$2 === marker) return nok(code$2);
		effects.consume(code$2);
		return meta;
	}
	function atNonLazyBreak(code$2) {
		return effects.attempt(closeStart, after, contentBefore)(code$2);
	}
	function contentBefore(code$2) {
		effects.enter("lineEnding");
		effects.consume(code$2);
		effects.exit("lineEnding");
		return contentStart;
	}
	function contentStart(code$2) {
		return initialPrefix > 0 && markdownSpace(code$2) ? factorySpace(effects, beforeContentChunk, "linePrefix", initialPrefix + 1)(code$2) : beforeContentChunk(code$2);
	}
	function beforeContentChunk(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code$2);
		effects.enter("codeFlowValue");
		return contentChunk(code$2);
	}
	function contentChunk(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("codeFlowValue");
			return beforeContentChunk(code$2);
		}
		effects.consume(code$2);
		return contentChunk;
	}
	function after(code$2) {
		effects.exit("codeFenced");
		return ok$2(code$2);
	}
	function tokenizeCloseStart(effects$1, ok$3, nok$1) {
		let size$1 = 0;
		return startBefore;
		function startBefore(code$2) {
			effects$1.enter("lineEnding");
			effects$1.consume(code$2);
			effects$1.exit("lineEnding");
			return start$1;
		}
		function start$1(code$2) {
			effects$1.enter("codeFencedFence");
			return markdownSpace(code$2) ? factorySpace(effects$1, beforeSequenceClose, "linePrefix", self$1.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code$2) : beforeSequenceClose(code$2);
		}
		function beforeSequenceClose(code$2) {
			if (code$2 === marker) {
				effects$1.enter("codeFencedFenceSequence");
				return sequenceClose(code$2);
			}
			return nok$1(code$2);
		}
		function sequenceClose(code$2) {
			if (code$2 === marker) {
				size$1++;
				effects$1.consume(code$2);
				return sequenceClose;
			}
			if (size$1 >= sizeOpen) {
				effects$1.exit("codeFencedFenceSequence");
				return markdownSpace(code$2) ? factorySpace(effects$1, sequenceCloseAfter, "whitespace")(code$2) : sequenceCloseAfter(code$2);
			}
			return nok$1(code$2);
		}
		function sequenceCloseAfter(code$2) {
			if (code$2 === null || markdownLineEnding(code$2)) {
				effects$1.exit("codeFencedFence");
				return ok$3(code$2);
			}
			return nok$1(code$2);
		}
	}
}
function tokenizeNonLazyContinuation(effects, ok$2, nok) {
	const self$1 = this;
	return start;
	function start(code$2) {
		if (code$2 === null) return nok(code$2);
		effects.enter("lineEnding");
		effects.consume(code$2);
		effects.exit("lineEnding");
		return lineStart;
	}
	function lineStart(code$2) {
		return self$1.parser.lazy[self$1.now().line] ? nok(code$2) : ok$2(code$2);
	}
}
const codeIndented = {
	name: "codeIndented",
	tokenize: tokenizeCodeIndented
};
var furtherStart = {
	partial: true,
	tokenize: tokenizeFurtherStart
};
function tokenizeCodeIndented(effects, ok$2, nok) {
	const self$1 = this;
	return start;
	function start(code$2) {
		effects.enter("codeIndented");
		return factorySpace(effects, afterPrefix, "linePrefix", 5)(code$2);
	}
	function afterPrefix(code$2) {
		const tail = self$1.events[self$1.events.length - 1];
		return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? atBreak(code$2) : nok(code$2);
	}
	function atBreak(code$2) {
		if (code$2 === null) return after(code$2);
		if (markdownLineEnding(code$2)) return effects.attempt(furtherStart, atBreak, after)(code$2);
		effects.enter("codeFlowValue");
		return inside(code$2);
	}
	function inside(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("codeFlowValue");
			return atBreak(code$2);
		}
		effects.consume(code$2);
		return inside;
	}
	function after(code$2) {
		effects.exit("codeIndented");
		return ok$2(code$2);
	}
}
function tokenizeFurtherStart(effects, ok$2, nok) {
	const self$1 = this;
	return furtherStart$1;
	function furtherStart$1(code$2) {
		if (self$1.parser.lazy[self$1.now().line]) return nok(code$2);
		if (markdownLineEnding(code$2)) {
			effects.enter("lineEnding");
			effects.consume(code$2);
			effects.exit("lineEnding");
			return furtherStart$1;
		}
		return factorySpace(effects, afterPrefix, "linePrefix", 5)(code$2);
	}
	function afterPrefix(code$2) {
		const tail = self$1.events[self$1.events.length - 1];
		return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok$2(code$2) : markdownLineEnding(code$2) ? furtherStart$1(code$2) : nok(code$2);
	}
}
const codeText = {
	name: "codeText",
	previous: previous$2,
	resolve: resolveCodeText,
	tokenize: tokenizeCodeText
};
function resolveCodeText(events) {
	let tailExitIndex = events.length - 4;
	let headEnterIndex = 3;
	let index$1;
	let enter$1;
	if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
		index$1 = headEnterIndex;
		while (++index$1 < tailExitIndex) if (events[index$1][1].type === "codeTextData") {
			events[headEnterIndex][1].type = "codeTextPadding";
			events[tailExitIndex][1].type = "codeTextPadding";
			headEnterIndex += 2;
			tailExitIndex -= 2;
			break;
		}
	}
	index$1 = headEnterIndex - 1;
	tailExitIndex++;
	while (++index$1 <= tailExitIndex) if (enter$1 === void 0) {
		if (index$1 !== tailExitIndex && events[index$1][1].type !== "lineEnding") enter$1 = index$1;
	} else if (index$1 === tailExitIndex || events[index$1][1].type === "lineEnding") {
		events[enter$1][1].type = "codeTextData";
		if (index$1 !== enter$1 + 2) {
			events[enter$1][1].end = events[index$1 - 1][1].end;
			events.splice(enter$1 + 2, index$1 - enter$1 - 2);
			tailExitIndex -= index$1 - enter$1 - 2;
			index$1 = enter$1 + 2;
		}
		enter$1 = void 0;
	}
	return events;
}
function previous$2(code$2) {
	return code$2 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok$2, nok) {
	let sizeOpen = 0;
	let size$1;
	let token;
	return start;
	function start(code$2) {
		effects.enter("codeText");
		effects.enter("codeTextSequence");
		return sequenceOpen(code$2);
	}
	function sequenceOpen(code$2) {
		if (code$2 === 96) {
			effects.consume(code$2);
			sizeOpen++;
			return sequenceOpen;
		}
		effects.exit("codeTextSequence");
		return between(code$2);
	}
	function between(code$2) {
		if (code$2 === null) return nok(code$2);
		if (code$2 === 32) {
			effects.enter("space");
			effects.consume(code$2);
			effects.exit("space");
			return between;
		}
		if (code$2 === 96) {
			token = /* @__PURE__ */ effects.enter("codeTextSequence");
			size$1 = 0;
			return sequenceClose(code$2);
		}
		if (markdownLineEnding(code$2)) {
			effects.enter("lineEnding");
			effects.consume(code$2);
			effects.exit("lineEnding");
			return between;
		}
		effects.enter("codeTextData");
		return data$1(code$2);
	}
	function data$1(code$2) {
		if (code$2 === null || code$2 === 32 || code$2 === 96 || markdownLineEnding(code$2)) {
			effects.exit("codeTextData");
			return between(code$2);
		}
		effects.consume(code$2);
		return data$1;
	}
	function sequenceClose(code$2) {
		if (code$2 === 96) {
			effects.consume(code$2);
			size$1++;
			return sequenceClose;
		}
		if (size$1 === sizeOpen) {
			effects.exit("codeTextSequence");
			effects.exit("codeText");
			return ok$2(code$2);
		}
		token.type = "codeTextData";
		return data$1(code$2);
	}
}
var SpliceBuffer = class {
	constructor(initial) {
		this.left = initial ? [...initial] : [];
		this.right = [];
	}
	get(index$1) {
		if (index$1 < 0 || index$1 >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + index$1 + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		if (index$1 < this.left.length) return this.left[index$1];
		return this.right[this.right.length - index$1 + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		this.setCursor(0);
		return this.right.pop();
	}
	slice(start, end) {
		const stop = end === null || end === void 0 ? Number.POSITIVE_INFINITY : end;
		if (stop < this.left.length) return this.left.slice(start, stop);
		if (start > this.left.length) return this.right.slice(this.right.length - stop + this.left.length, this.right.length - start + this.left.length).reverse();
		return this.left.slice(start).concat(/* @__PURE__ */ this.right.slice(this.right.length - stop + this.left.length).reverse());
	}
	splice(start, deleteCount, items) {
		const count = deleteCount || 0;
		this.setCursor(/* @__PURE__ */ Math.trunc(start));
		const removed = /* @__PURE__ */ this.right.splice(this.right.length - count, Number.POSITIVE_INFINITY);
		if (items) chunkedPush(this.left, items);
		return removed.reverse();
	}
	pop() {
		this.setCursor(Number.POSITIVE_INFINITY);
		return this.left.pop();
	}
	push(item) {
		this.setCursor(Number.POSITIVE_INFINITY);
		this.left.push(item);
	}
	pushMany(items) {
		this.setCursor(Number.POSITIVE_INFINITY);
		chunkedPush(this.left, items);
	}
	unshift(item) {
		this.setCursor(0);
		this.right.push(item);
	}
	unshiftMany(items) {
		this.setCursor(0);
		chunkedPush(this.right, /* @__PURE__ */ items.reverse());
	}
	setCursor(n) {
		if (n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0) return;
		if (n < this.left.length) {
			const removed = /* @__PURE__ */ this.left.splice(n, Number.POSITIVE_INFINITY);
			chunkedPush(this.right, /* @__PURE__ */ removed.reverse());
		} else {
			const removed = /* @__PURE__ */ this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
			chunkedPush(this.left, /* @__PURE__ */ removed.reverse());
		}
	}
};
function chunkedPush(list$2, right) {
	let chunkStart = 0;
	if (right.length < 1e4) list$2.push(...right);
	else while (chunkStart < right.length) {
		list$2.push(.../* @__PURE__ */ right.slice(chunkStart, chunkStart + 1e4));
		chunkStart += 1e4;
	}
}
function subtokenize(eventsArray) {
	const jumps = {};
	let index$1 = -1;
	let event;
	let lineIndex;
	let otherIndex;
	let otherEvent;
	let parameters;
	let subevents;
	let more;
	const events = new SpliceBuffer(eventsArray);
	while (++index$1 < events.length) {
		while (index$1 in jumps) index$1 = jumps[index$1];
		event = /* @__PURE__ */ events.get(index$1);
		if (index$1 && event[1].type === "chunkFlow" && events.get(index$1 - 1)[1].type === "listItemPrefix") {
			subevents = event[1]._tokenizer.events;
			otherIndex = 0;
			if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") otherIndex += 2;
			if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") while (++otherIndex < subevents.length) {
				if (subevents[otherIndex][1].type === "content") break;
				if (subevents[otherIndex][1].type === "chunkText") {
					subevents[otherIndex][1]._isInFirstContentOfListItem = true;
					otherIndex++;
				}
			}
		}
		if (event[0] === "enter") {
			if (event[1].contentType) {
				Object.assign(jumps, /* @__PURE__ */ subcontent(events, index$1));
				index$1 = jumps[index$1];
				more = true;
			}
		} else if (event[1]._container) {
			otherIndex = index$1;
			lineIndex = void 0;
			while (otherIndex--) {
				otherEvent = /* @__PURE__ */ events.get(otherIndex);
				if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
					if (otherEvent[0] === "enter") {
						if (lineIndex) events.get(lineIndex)[1].type = "lineEndingBlank";
						otherEvent[1].type = "lineEnding";
						lineIndex = otherIndex;
					}
				} else if (otherEvent[1].type === "linePrefix" || otherEvent[1].type === "listItemIndent") {} else break;
			}
			if (lineIndex) {
				event[1].end = { ...events.get(lineIndex)[1].start };
				parameters = /* @__PURE__ */ events.slice(lineIndex, index$1);
				parameters.unshift(event);
				events.splice(lineIndex, index$1 - lineIndex + 1, parameters);
			}
		}
	}
	splice(eventsArray, 0, Number.POSITIVE_INFINITY, /* @__PURE__ */ events.slice(0));
	return !more;
}
function subcontent(events, eventIndex) {
	const token = events.get(eventIndex)[1];
	const context = events.get(eventIndex)[2];
	let startPosition = eventIndex - 1;
	const startPositions = [];
	let tokenizer = token._tokenizer;
	if (!tokenizer) {
		tokenizer = /* @__PURE__ */ context.parser[token.contentType](token.start);
		if (token._contentTypeTextTrailing) tokenizer._contentTypeTextTrailing = true;
	}
	const childEvents = tokenizer.events;
	const jumps = [];
	const gaps = {};
	let stream;
	let previous$3;
	let index$1 = -1;
	let current = token;
	let adjust = 0;
	let start = 0;
	const breaks = [start];
	while (current) {
		while (events.get(++startPosition)[1] !== current);
		startPositions.push(startPosition);
		if (!current._tokenizer) {
			stream = /* @__PURE__ */ context.sliceStream(current);
			if (!current.next) stream.push(null);
			if (previous$3) tokenizer.defineSkip(current.start);
			if (current._isInFirstContentOfListItem) tokenizer._gfmTasklistFirstContentOfListItem = true;
			tokenizer.write(stream);
			if (current._isInFirstContentOfListItem) tokenizer._gfmTasklistFirstContentOfListItem = void 0;
		}
		previous$3 = current;
		current = current.next;
	}
	current = token;
	while (++index$1 < childEvents.length) if (childEvents[index$1][0] === "exit" && childEvents[index$1 - 1][0] === "enter" && childEvents[index$1][1].type === childEvents[index$1 - 1][1].type && childEvents[index$1][1].start.line !== childEvents[index$1][1].end.line) {
		start = index$1 + 1;
		breaks.push(start);
		current._tokenizer = void 0;
		current.previous = void 0;
		current = current.next;
	}
	tokenizer.events = [];
	if (current) {
		current._tokenizer = void 0;
		current.previous = void 0;
	} else breaks.pop();
	index$1 = breaks.length;
	while (index$1--) {
		const slice = /* @__PURE__ */ childEvents.slice(breaks[index$1], breaks[index$1 + 1]);
		const start$1 = /* @__PURE__ */ startPositions.pop();
		jumps.push([start$1, start$1 + slice.length - 1]);
		events.splice(start$1, 2, slice);
	}
	jumps.reverse();
	index$1 = -1;
	while (++index$1 < jumps.length) {
		gaps[adjust + jumps[index$1][0]] = adjust + jumps[index$1][1];
		adjust += jumps[index$1][1] - jumps[index$1][0] - 1;
	}
	return gaps;
}
const content$1 = {
	resolve: resolveContent,
	tokenize: tokenizeContent
};
var continuationConstruct = {
	partial: true,
	tokenize: tokenizeContinuation
};
function resolveContent(events) {
	subtokenize(events);
	return events;
}
function tokenizeContent(effects, ok$2) {
	let previous$3;
	return chunkStart;
	function chunkStart(code$2) {
		effects.enter("content");
		previous$3 = /* @__PURE__ */ effects.enter("chunkContent", { contentType: "content" });
		return chunkInside(code$2);
	}
	function chunkInside(code$2) {
		if (code$2 === null) return contentEnd(code$2);
		if (markdownLineEnding(code$2)) return effects.check(continuationConstruct, contentContinue, contentEnd)(code$2);
		effects.consume(code$2);
		return chunkInside;
	}
	function contentEnd(code$2) {
		effects.exit("chunkContent");
		effects.exit("content");
		return ok$2(code$2);
	}
	function contentContinue(code$2) {
		effects.consume(code$2);
		effects.exit("chunkContent");
		previous$3.next = /* @__PURE__ */ effects.enter("chunkContent", {
			contentType: "content",
			previous: previous$3
		});
		previous$3 = previous$3.next;
		return chunkInside;
	}
}
function tokenizeContinuation(effects, ok$2, nok) {
	const self$1 = this;
	return startLookahead;
	function startLookahead(code$2) {
		effects.exit("chunkContent");
		effects.enter("lineEnding");
		effects.consume(code$2);
		effects.exit("lineEnding");
		return factorySpace(effects, prefixed, "linePrefix");
	}
	function prefixed(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) return nok(code$2);
		const tail = self$1.events[self$1.events.length - 1];
		if (!self$1.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) return ok$2(code$2);
		return effects.interrupt(self$1.parser.constructs.flow, nok, ok$2)(code$2);
	}
}
function factoryDestination(effects, ok$2, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
	const limit = max || Number.POSITIVE_INFINITY;
	let balance = 0;
	return start;
	function start(code$2) {
		if (code$2 === 60) {
			effects.enter(type);
			effects.enter(literalType);
			effects.enter(literalMarkerType);
			effects.consume(code$2);
			effects.exit(literalMarkerType);
			return enclosedBefore;
		}
		if (code$2 === null || code$2 === 32 || code$2 === 41 || asciiControl(code$2)) return nok(code$2);
		effects.enter(type);
		effects.enter(rawType);
		effects.enter(stringType);
		effects.enter("chunkString", { contentType: "string" });
		return raw(code$2);
	}
	function enclosedBefore(code$2) {
		if (code$2 === 62) {
			effects.enter(literalMarkerType);
			effects.consume(code$2);
			effects.exit(literalMarkerType);
			effects.exit(literalType);
			effects.exit(type);
			return ok$2;
		}
		effects.enter(stringType);
		effects.enter("chunkString", { contentType: "string" });
		return enclosed(code$2);
	}
	function enclosed(code$2) {
		if (code$2 === 62) {
			effects.exit("chunkString");
			effects.exit(stringType);
			return enclosedBefore(code$2);
		}
		if (code$2 === null || code$2 === 60 || markdownLineEnding(code$2)) return nok(code$2);
		effects.consume(code$2);
		return code$2 === 92 ? enclosedEscape : enclosed;
	}
	function enclosedEscape(code$2) {
		if (code$2 === 60 || code$2 === 62 || code$2 === 92) {
			effects.consume(code$2);
			return enclosed;
		}
		return enclosed(code$2);
	}
	function raw(code$2) {
		if (!balance && (code$2 === null || code$2 === 41 || markdownLineEndingOrSpace(code$2))) {
			effects.exit("chunkString");
			effects.exit(stringType);
			effects.exit(rawType);
			effects.exit(type);
			return ok$2(code$2);
		}
		if (balance < limit && code$2 === 40) {
			effects.consume(code$2);
			balance++;
			return raw;
		}
		if (code$2 === 41) {
			effects.consume(code$2);
			balance--;
			return raw;
		}
		if (code$2 === null || code$2 === 32 || code$2 === 40 || asciiControl(code$2)) return nok(code$2);
		effects.consume(code$2);
		return code$2 === 92 ? rawEscape : raw;
	}
	function rawEscape(code$2) {
		if (code$2 === 40 || code$2 === 41 || code$2 === 92) {
			effects.consume(code$2);
			return raw;
		}
		return raw(code$2);
	}
}
function factoryLabel$1(effects, ok$2, nok, type, markerType, stringType) {
	const self$1 = this;
	let size$1 = 0;
	let seen;
	return start;
	function start(code$2) {
		effects.enter(type);
		effects.enter(markerType);
		effects.consume(code$2);
		effects.exit(markerType);
		effects.enter(stringType);
		return atBreak;
	}
	function atBreak(code$2) {
		if (size$1 > 999 || code$2 === null || code$2 === 91 || code$2 === 93 && !seen || code$2 === 94 && !size$1 && "_hiddenFootnoteSupport" in self$1.parser.constructs) return nok(code$2);
		if (code$2 === 93) {
			effects.exit(stringType);
			effects.enter(markerType);
			effects.consume(code$2);
			effects.exit(markerType);
			effects.exit(type);
			return ok$2;
		}
		if (markdownLineEnding(code$2)) {
			effects.enter("lineEnding");
			effects.consume(code$2);
			effects.exit("lineEnding");
			return atBreak;
		}
		effects.enter("chunkString", { contentType: "string" });
		return labelInside(code$2);
	}
	function labelInside(code$2) {
		if (code$2 === null || code$2 === 91 || code$2 === 93 || markdownLineEnding(code$2) || size$1++ > 999) {
			effects.exit("chunkString");
			return atBreak(code$2);
		}
		effects.consume(code$2);
		if (!seen) seen = !markdownSpace(code$2);
		return code$2 === 92 ? labelEscape : labelInside;
	}
	function labelEscape(code$2) {
		if (code$2 === 91 || code$2 === 92 || code$2 === 93) {
			effects.consume(code$2);
			size$1++;
			return labelInside;
		}
		return labelInside(code$2);
	}
}
function factoryTitle(effects, ok$2, nok, type, markerType, stringType) {
	let marker;
	return start;
	function start(code$2) {
		if (code$2 === 34 || code$2 === 39 || code$2 === 40) {
			effects.enter(type);
			effects.enter(markerType);
			effects.consume(code$2);
			effects.exit(markerType);
			marker = code$2 === 40 ? 41 : code$2;
			return begin;
		}
		return nok(code$2);
	}
	function begin(code$2) {
		if (code$2 === marker) {
			effects.enter(markerType);
			effects.consume(code$2);
			effects.exit(markerType);
			effects.exit(type);
			return ok$2;
		}
		effects.enter(stringType);
		return atBreak(code$2);
	}
	function atBreak(code$2) {
		if (code$2 === marker) {
			effects.exit(stringType);
			return begin(marker);
		}
		if (code$2 === null) return nok(code$2);
		if (markdownLineEnding(code$2)) {
			effects.enter("lineEnding");
			effects.consume(code$2);
			effects.exit("lineEnding");
			return factorySpace(effects, atBreak, "linePrefix");
		}
		effects.enter("chunkString", { contentType: "string" });
		return inside(code$2);
	}
	function inside(code$2) {
		if (code$2 === marker || code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("chunkString");
			return atBreak(code$2);
		}
		effects.consume(code$2);
		return code$2 === 92 ? escape : inside;
	}
	function escape(code$2) {
		if (code$2 === marker || code$2 === 92) {
			effects.consume(code$2);
			return inside;
		}
		return inside(code$2);
	}
}
function factoryWhitespace(effects, ok$2) {
	let seen;
	return start;
	function start(code$2) {
		if (markdownLineEnding(code$2)) {
			effects.enter("lineEnding");
			effects.consume(code$2);
			effects.exit("lineEnding");
			seen = true;
			return start;
		}
		if (markdownSpace(code$2)) return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code$2);
		return ok$2(code$2);
	}
}
const definition = {
	name: "definition",
	tokenize: tokenizeDefinition
};
var titleBefore = {
	partial: true,
	tokenize: tokenizeTitleBefore
};
function tokenizeDefinition(effects, ok$2, nok) {
	const self$1 = this;
	let identifier;
	return start;
	function start(code$2) {
		effects.enter("definition");
		return before(code$2);
	}
	function before(code$2) {
		return factoryLabel$1.call(self$1, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code$2);
	}
	function labelAfter(code$2) {
		identifier = /* @__PURE__ */ normalizeIdentifier(/* @__PURE__ */ self$1.sliceSerialize(self$1.events[self$1.events.length - 1][1]).slice(1, -1));
		if (code$2 === 58) {
			effects.enter("definitionMarker");
			effects.consume(code$2);
			effects.exit("definitionMarker");
			return markerAfter;
		}
		return nok(code$2);
	}
	function markerAfter(code$2) {
		return markdownLineEndingOrSpace(code$2) ? factoryWhitespace(effects, destinationBefore)(code$2) : destinationBefore(code$2);
	}
	function destinationBefore(code$2) {
		return factoryDestination(effects, destinationAfter, nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(code$2);
	}
	function destinationAfter(code$2) {
		return effects.attempt(titleBefore, after, after)(code$2);
	}
	function after(code$2) {
		return markdownSpace(code$2) ? factorySpace(effects, afterWhitespace, "whitespace")(code$2) : afterWhitespace(code$2);
	}
	function afterWhitespace(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("definition");
			self$1.parser.defined.push(identifier);
			return ok$2(code$2);
		}
		return nok(code$2);
	}
}
function tokenizeTitleBefore(effects, ok$2, nok) {
	return titleBefore$1;
	function titleBefore$1(code$2) {
		return markdownLineEndingOrSpace(code$2) ? factoryWhitespace(effects, beforeMarker)(code$2) : nok(code$2);
	}
	function beforeMarker(code$2) {
		return factoryTitle(effects, titleAfter, nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code$2);
	}
	function titleAfter(code$2) {
		return markdownSpace(code$2) ? factorySpace(effects, titleAfterOptionalWhitespace, "whitespace")(code$2) : titleAfterOptionalWhitespace(code$2);
	}
	function titleAfterOptionalWhitespace(code$2) {
		return code$2 === null || markdownLineEnding(code$2) ? ok$2(code$2) : nok(code$2);
	}
}
const hardBreakEscape = {
	name: "hardBreakEscape",
	tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok$2, nok) {
	return start;
	function start(code$2) {
		effects.enter("hardBreakEscape");
		effects.consume(code$2);
		return after;
	}
	function after(code$2) {
		if (markdownLineEnding(code$2)) {
			effects.exit("hardBreakEscape");
			return ok$2(code$2);
		}
		return nok(code$2);
	}
}
const headingAtx = {
	name: "headingAtx",
	resolve: resolveHeadingAtx,
	tokenize: tokenizeHeadingAtx
};
function resolveHeadingAtx(events, context) {
	let contentEnd = events.length - 2;
	let contentStart = 3;
	let content$2;
	let text$5;
	if (events[contentStart][1].type === "whitespace") contentStart += 2;
	if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") contentEnd -= 2;
	if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
	if (contentEnd > contentStart) {
		content$2 = {
			type: "atxHeadingText",
			start: events[contentStart][1].start,
			end: events[contentEnd][1].end
		};
		text$5 = {
			type: "chunkText",
			start: events[contentStart][1].start,
			end: events[contentEnd][1].end,
			contentType: "text"
		};
		splice(events, contentStart, contentEnd - contentStart + 1, [
			[
				"enter",
				content$2,
				context
			],
			[
				"enter",
				text$5,
				context
			],
			[
				"exit",
				text$5,
				context
			],
			[
				"exit",
				content$2,
				context
			]
		]);
	}
	return events;
}
function tokenizeHeadingAtx(effects, ok$2, nok) {
	let size$1 = 0;
	return start;
	function start(code$2) {
		effects.enter("atxHeading");
		return before(code$2);
	}
	function before(code$2) {
		effects.enter("atxHeadingSequence");
		return sequenceOpen(code$2);
	}
	function sequenceOpen(code$2) {
		if (code$2 === 35 && size$1++ < 6) {
			effects.consume(code$2);
			return sequenceOpen;
		}
		if (code$2 === null || markdownLineEndingOrSpace(code$2)) {
			effects.exit("atxHeadingSequence");
			return atBreak(code$2);
		}
		return nok(code$2);
	}
	function atBreak(code$2) {
		if (code$2 === 35) {
			effects.enter("atxHeadingSequence");
			return sequenceFurther(code$2);
		}
		if (code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("atxHeading");
			return ok$2(code$2);
		}
		if (markdownSpace(code$2)) return factorySpace(effects, atBreak, "whitespace")(code$2);
		effects.enter("atxHeadingText");
		return data$1(code$2);
	}
	function sequenceFurther(code$2) {
		if (code$2 === 35) {
			effects.consume(code$2);
			return sequenceFurther;
		}
		effects.exit("atxHeadingSequence");
		return atBreak(code$2);
	}
	function data$1(code$2) {
		if (code$2 === null || code$2 === 35 || markdownLineEndingOrSpace(code$2)) {
			effects.exit("atxHeadingText");
			return atBreak(code$2);
		}
		effects.consume(code$2);
		return data$1;
	}
}
const htmlBlockNames = [
	"address",
	"article",
	"aside",
	"base",
	"basefont",
	"blockquote",
	"body",
	"caption",
	"center",
	"col",
	"colgroup",
	"dd",
	"details",
	"dialog",
	"dir",
	"div",
	"dl",
	"dt",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"frame",
	"frameset",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hr",
	"html",
	"iframe",
	"legend",
	"li",
	"link",
	"main",
	"menu",
	"menuitem",
	"nav",
	"noframes",
	"ol",
	"optgroup",
	"option",
	"p",
	"param",
	"search",
	"section",
	"summary",
	"table",
	"tbody",
	"td",
	"tfoot",
	"th",
	"thead",
	"title",
	"tr",
	"track",
	"ul"
];
const htmlRawNames = [
	"pre",
	"script",
	"style",
	"textarea"
];
const htmlFlow = {
	concrete: true,
	name: "htmlFlow",
	resolveTo: resolveToHtmlFlow,
	tokenize: tokenizeHtmlFlow
};
var blankLineBefore = {
	partial: true,
	tokenize: tokenizeBlankLineBefore
};
var nonLazyContinuationStart = {
	partial: true,
	tokenize: tokenizeNonLazyContinuationStart
};
function resolveToHtmlFlow(events) {
	let index$1 = events.length;
	while (index$1--) if (events[index$1][0] === "enter" && events[index$1][1].type === "htmlFlow") break;
	if (index$1 > 1 && events[index$1 - 2][1].type === "linePrefix") {
		events[index$1][1].start = events[index$1 - 2][1].start;
		events[index$1 + 1][1].start = events[index$1 - 2][1].start;
		events.splice(index$1 - 2, 2);
	}
	return events;
}
function tokenizeHtmlFlow(effects, ok$2, nok) {
	const self$1 = this;
	let marker;
	let closingTag;
	let buffer;
	let index$1;
	let markerB;
	return start;
	function start(code$2) {
		return before(code$2);
	}
	function before(code$2) {
		effects.enter("htmlFlow");
		effects.enter("htmlFlowData");
		effects.consume(code$2);
		return open;
	}
	function open(code$2) {
		if (code$2 === 33) {
			effects.consume(code$2);
			return declarationOpen;
		}
		if (code$2 === 47) {
			effects.consume(code$2);
			closingTag = true;
			return tagCloseStart;
		}
		if (code$2 === 63) {
			effects.consume(code$2);
			marker = 3;
			return self$1.interrupt ? ok$2 : continuationDeclarationInside;
		}
		if (asciiAlpha(code$2)) {
			effects.consume(code$2);
			buffer = /* @__PURE__ */ String.fromCharCode(code$2);
			return tagName;
		}
		return nok(code$2);
	}
	function declarationOpen(code$2) {
		if (code$2 === 45) {
			effects.consume(code$2);
			marker = 2;
			return commentOpenInside;
		}
		if (code$2 === 91) {
			effects.consume(code$2);
			marker = 5;
			index$1 = 0;
			return cdataOpenInside;
		}
		if (asciiAlpha(code$2)) {
			effects.consume(code$2);
			marker = 4;
			return self$1.interrupt ? ok$2 : continuationDeclarationInside;
		}
		return nok(code$2);
	}
	function commentOpenInside(code$2) {
		if (code$2 === 45) {
			effects.consume(code$2);
			return self$1.interrupt ? ok$2 : continuationDeclarationInside;
		}
		return nok(code$2);
	}
	function cdataOpenInside(code$2) {
		if (code$2 === "CDATA[".charCodeAt(index$1++)) {
			effects.consume(code$2);
			if (index$1 === 6) return self$1.interrupt ? ok$2 : continuation;
			return cdataOpenInside;
		}
		return nok(code$2);
	}
	function tagCloseStart(code$2) {
		if (asciiAlpha(code$2)) {
			effects.consume(code$2);
			buffer = /* @__PURE__ */ String.fromCharCode(code$2);
			return tagName;
		}
		return nok(code$2);
	}
	function tagName(code$2) {
		if (code$2 === null || code$2 === 47 || code$2 === 62 || markdownLineEndingOrSpace(code$2)) {
			const slash = code$2 === 47;
			const name$1 = /* @__PURE__ */ buffer.toLowerCase();
			if (!slash && !closingTag && htmlRawNames.includes(name$1)) {
				marker = 1;
				return self$1.interrupt ? ok$2(code$2) : continuation(code$2);
			}
			if (htmlBlockNames.includes(/* @__PURE__ */ buffer.toLowerCase())) {
				marker = 6;
				if (slash) {
					effects.consume(code$2);
					return basicSelfClosing;
				}
				return self$1.interrupt ? ok$2(code$2) : continuation(code$2);
			}
			marker = 7;
			return self$1.interrupt && !self$1.parser.lazy[self$1.now().line] ? nok(code$2) : closingTag ? completeClosingTagAfter(code$2) : completeAttributeNameBefore(code$2);
		}
		if (code$2 === 45 || asciiAlphanumeric(code$2)) {
			effects.consume(code$2);
			buffer += /* @__PURE__ */ String.fromCharCode(code$2);
			return tagName;
		}
		return nok(code$2);
	}
	function basicSelfClosing(code$2) {
		if (code$2 === 62) {
			effects.consume(code$2);
			return self$1.interrupt ? ok$2 : continuation;
		}
		return nok(code$2);
	}
	function completeClosingTagAfter(code$2) {
		if (markdownSpace(code$2)) {
			effects.consume(code$2);
			return completeClosingTagAfter;
		}
		return completeEnd(code$2);
	}
	function completeAttributeNameBefore(code$2) {
		if (code$2 === 47) {
			effects.consume(code$2);
			return completeEnd;
		}
		if (code$2 === 58 || code$2 === 95 || asciiAlpha(code$2)) {
			effects.consume(code$2);
			return completeAttributeName;
		}
		if (markdownSpace(code$2)) {
			effects.consume(code$2);
			return completeAttributeNameBefore;
		}
		return completeEnd(code$2);
	}
	function completeAttributeName(code$2) {
		if (code$2 === 45 || code$2 === 46 || code$2 === 58 || code$2 === 95 || asciiAlphanumeric(code$2)) {
			effects.consume(code$2);
			return completeAttributeName;
		}
		return completeAttributeNameAfter(code$2);
	}
	function completeAttributeNameAfter(code$2) {
		if (code$2 === 61) {
			effects.consume(code$2);
			return completeAttributeValueBefore;
		}
		if (markdownSpace(code$2)) {
			effects.consume(code$2);
			return completeAttributeNameAfter;
		}
		return completeAttributeNameBefore(code$2);
	}
	function completeAttributeValueBefore(code$2) {
		if (code$2 === null || code$2 === 60 || code$2 === 61 || code$2 === 62 || code$2 === 96) return nok(code$2);
		if (code$2 === 34 || code$2 === 39) {
			effects.consume(code$2);
			markerB = code$2;
			return completeAttributeValueQuoted;
		}
		if (markdownSpace(code$2)) {
			effects.consume(code$2);
			return completeAttributeValueBefore;
		}
		return completeAttributeValueUnquoted(code$2);
	}
	function completeAttributeValueQuoted(code$2) {
		if (code$2 === markerB) {
			effects.consume(code$2);
			markerB = null;
			return completeAttributeValueQuotedAfter;
		}
		if (code$2 === null || markdownLineEnding(code$2)) return nok(code$2);
		effects.consume(code$2);
		return completeAttributeValueQuoted;
	}
	function completeAttributeValueUnquoted(code$2) {
		if (code$2 === null || code$2 === 34 || code$2 === 39 || code$2 === 47 || code$2 === 60 || code$2 === 61 || code$2 === 62 || code$2 === 96 || markdownLineEndingOrSpace(code$2)) return completeAttributeNameAfter(code$2);
		effects.consume(code$2);
		return completeAttributeValueUnquoted;
	}
	function completeAttributeValueQuotedAfter(code$2) {
		if (code$2 === 47 || code$2 === 62 || markdownSpace(code$2)) return completeAttributeNameBefore(code$2);
		return nok(code$2);
	}
	function completeEnd(code$2) {
		if (code$2 === 62) {
			effects.consume(code$2);
			return completeAfter;
		}
		return nok(code$2);
	}
	function completeAfter(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) return continuation(code$2);
		if (markdownSpace(code$2)) {
			effects.consume(code$2);
			return completeAfter;
		}
		return nok(code$2);
	}
	function continuation(code$2) {
		if (code$2 === 45 && marker === 2) {
			effects.consume(code$2);
			return continuationCommentInside;
		}
		if (code$2 === 60 && marker === 1) {
			effects.consume(code$2);
			return continuationRawTagOpen;
		}
		if (code$2 === 62 && marker === 4) {
			effects.consume(code$2);
			return continuationClose;
		}
		if (code$2 === 63 && marker === 3) {
			effects.consume(code$2);
			return continuationDeclarationInside;
		}
		if (code$2 === 93 && marker === 5) {
			effects.consume(code$2);
			return continuationCdataInside;
		}
		if (markdownLineEnding(code$2) && (marker === 6 || marker === 7)) {
			effects.exit("htmlFlowData");
			return effects.check(blankLineBefore, continuationAfter, continuationStart)(code$2);
		}
		if (code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("htmlFlowData");
			return continuationStart(code$2);
		}
		effects.consume(code$2);
		return continuation;
	}
	function continuationStart(code$2) {
		return effects.check(nonLazyContinuationStart, continuationStartNonLazy, continuationAfter)(code$2);
	}
	function continuationStartNonLazy(code$2) {
		effects.enter("lineEnding");
		effects.consume(code$2);
		effects.exit("lineEnding");
		return continuationBefore;
	}
	function continuationBefore(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) return continuationStart(code$2);
		effects.enter("htmlFlowData");
		return continuation(code$2);
	}
	function continuationCommentInside(code$2) {
		if (code$2 === 45) {
			effects.consume(code$2);
			return continuationDeclarationInside;
		}
		return continuation(code$2);
	}
	function continuationRawTagOpen(code$2) {
		if (code$2 === 47) {
			effects.consume(code$2);
			buffer = "";
			return continuationRawEndTag;
		}
		return continuation(code$2);
	}
	function continuationRawEndTag(code$2) {
		if (code$2 === 62) {
			const name$1 = /* @__PURE__ */ buffer.toLowerCase();
			if (htmlRawNames.includes(name$1)) {
				effects.consume(code$2);
				return continuationClose;
			}
			return continuation(code$2);
		}
		if (asciiAlpha(code$2) && buffer.length < 8) {
			effects.consume(code$2);
			buffer += /* @__PURE__ */ String.fromCharCode(code$2);
			return continuationRawEndTag;
		}
		return continuation(code$2);
	}
	function continuationCdataInside(code$2) {
		if (code$2 === 93) {
			effects.consume(code$2);
			return continuationDeclarationInside;
		}
		return continuation(code$2);
	}
	function continuationDeclarationInside(code$2) {
		if (code$2 === 62) {
			effects.consume(code$2);
			return continuationClose;
		}
		if (code$2 === 45 && marker === 2) {
			effects.consume(code$2);
			return continuationDeclarationInside;
		}
		return continuation(code$2);
	}
	function continuationClose(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("htmlFlowData");
			return continuationAfter(code$2);
		}
		effects.consume(code$2);
		return continuationClose;
	}
	function continuationAfter(code$2) {
		effects.exit("htmlFlow");
		return ok$2(code$2);
	}
}
function tokenizeNonLazyContinuationStart(effects, ok$2, nok) {
	const self$1 = this;
	return start;
	function start(code$2) {
		if (markdownLineEnding(code$2)) {
			effects.enter("lineEnding");
			effects.consume(code$2);
			effects.exit("lineEnding");
			return after;
		}
		return nok(code$2);
	}
	function after(code$2) {
		return self$1.parser.lazy[self$1.now().line] ? nok(code$2) : ok$2(code$2);
	}
}
function tokenizeBlankLineBefore(effects, ok$2, nok) {
	return start;
	function start(code$2) {
		effects.enter("lineEnding");
		effects.consume(code$2);
		effects.exit("lineEnding");
		return effects.attempt(blankLine, ok$2, nok);
	}
}
const htmlText = {
	name: "htmlText",
	tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok$2, nok) {
	const self$1 = this;
	let marker;
	let index$1;
	let returnState;
	return start;
	function start(code$2) {
		effects.enter("htmlText");
		effects.enter("htmlTextData");
		effects.consume(code$2);
		return open;
	}
	function open(code$2) {
		if (code$2 === 33) {
			effects.consume(code$2);
			return declarationOpen;
		}
		if (code$2 === 47) {
			effects.consume(code$2);
			return tagCloseStart;
		}
		if (code$2 === 63) {
			effects.consume(code$2);
			return instruction;
		}
		if (asciiAlpha(code$2)) {
			effects.consume(code$2);
			return tagOpen;
		}
		return nok(code$2);
	}
	function declarationOpen(code$2) {
		if (code$2 === 45) {
			effects.consume(code$2);
			return commentOpenInside;
		}
		if (code$2 === 91) {
			effects.consume(code$2);
			index$1 = 0;
			return cdataOpenInside;
		}
		if (asciiAlpha(code$2)) {
			effects.consume(code$2);
			return declaration;
		}
		return nok(code$2);
	}
	function commentOpenInside(code$2) {
		if (code$2 === 45) {
			effects.consume(code$2);
			return commentEnd;
		}
		return nok(code$2);
	}
	function comment(code$2) {
		if (code$2 === null) return nok(code$2);
		if (code$2 === 45) {
			effects.consume(code$2);
			return commentClose;
		}
		if (markdownLineEnding(code$2)) {
			returnState = comment;
			return lineEndingBefore(code$2);
		}
		effects.consume(code$2);
		return comment;
	}
	function commentClose(code$2) {
		if (code$2 === 45) {
			effects.consume(code$2);
			return commentEnd;
		}
		return comment(code$2);
	}
	function commentEnd(code$2) {
		return code$2 === 62 ? end(code$2) : code$2 === 45 ? commentClose(code$2) : comment(code$2);
	}
	function cdataOpenInside(code$2) {
		if (code$2 === "CDATA[".charCodeAt(index$1++)) {
			effects.consume(code$2);
			return index$1 === 6 ? cdata : cdataOpenInside;
		}
		return nok(code$2);
	}
	function cdata(code$2) {
		if (code$2 === null) return nok(code$2);
		if (code$2 === 93) {
			effects.consume(code$2);
			return cdataClose;
		}
		if (markdownLineEnding(code$2)) {
			returnState = cdata;
			return lineEndingBefore(code$2);
		}
		effects.consume(code$2);
		return cdata;
	}
	function cdataClose(code$2) {
		if (code$2 === 93) {
			effects.consume(code$2);
			return cdataEnd;
		}
		return cdata(code$2);
	}
	function cdataEnd(code$2) {
		if (code$2 === 62) return end(code$2);
		if (code$2 === 93) {
			effects.consume(code$2);
			return cdataEnd;
		}
		return cdata(code$2);
	}
	function declaration(code$2) {
		if (code$2 === null || code$2 === 62) return end(code$2);
		if (markdownLineEnding(code$2)) {
			returnState = declaration;
			return lineEndingBefore(code$2);
		}
		effects.consume(code$2);
		return declaration;
	}
	function instruction(code$2) {
		if (code$2 === null) return nok(code$2);
		if (code$2 === 63) {
			effects.consume(code$2);
			return instructionClose;
		}
		if (markdownLineEnding(code$2)) {
			returnState = instruction;
			return lineEndingBefore(code$2);
		}
		effects.consume(code$2);
		return instruction;
	}
	function instructionClose(code$2) {
		return code$2 === 62 ? end(code$2) : instruction(code$2);
	}
	function tagCloseStart(code$2) {
		if (asciiAlpha(code$2)) {
			effects.consume(code$2);
			return tagClose;
		}
		return nok(code$2);
	}
	function tagClose(code$2) {
		if (code$2 === 45 || asciiAlphanumeric(code$2)) {
			effects.consume(code$2);
			return tagClose;
		}
		return tagCloseBetween(code$2);
	}
	function tagCloseBetween(code$2) {
		if (markdownLineEnding(code$2)) {
			returnState = tagCloseBetween;
			return lineEndingBefore(code$2);
		}
		if (markdownSpace(code$2)) {
			effects.consume(code$2);
			return tagCloseBetween;
		}
		return end(code$2);
	}
	function tagOpen(code$2) {
		if (code$2 === 45 || asciiAlphanumeric(code$2)) {
			effects.consume(code$2);
			return tagOpen;
		}
		if (code$2 === 47 || code$2 === 62 || markdownLineEndingOrSpace(code$2)) return tagOpenBetween(code$2);
		return nok(code$2);
	}
	function tagOpenBetween(code$2) {
		if (code$2 === 47) {
			effects.consume(code$2);
			return end;
		}
		if (code$2 === 58 || code$2 === 95 || asciiAlpha(code$2)) {
			effects.consume(code$2);
			return tagOpenAttributeName;
		}
		if (markdownLineEnding(code$2)) {
			returnState = tagOpenBetween;
			return lineEndingBefore(code$2);
		}
		if (markdownSpace(code$2)) {
			effects.consume(code$2);
			return tagOpenBetween;
		}
		return end(code$2);
	}
	function tagOpenAttributeName(code$2) {
		if (code$2 === 45 || code$2 === 46 || code$2 === 58 || code$2 === 95 || asciiAlphanumeric(code$2)) {
			effects.consume(code$2);
			return tagOpenAttributeName;
		}
		return tagOpenAttributeNameAfter(code$2);
	}
	function tagOpenAttributeNameAfter(code$2) {
		if (code$2 === 61) {
			effects.consume(code$2);
			return tagOpenAttributeValueBefore;
		}
		if (markdownLineEnding(code$2)) {
			returnState = tagOpenAttributeNameAfter;
			return lineEndingBefore(code$2);
		}
		if (markdownSpace(code$2)) {
			effects.consume(code$2);
			return tagOpenAttributeNameAfter;
		}
		return tagOpenBetween(code$2);
	}
	function tagOpenAttributeValueBefore(code$2) {
		if (code$2 === null || code$2 === 60 || code$2 === 61 || code$2 === 62 || code$2 === 96) return nok(code$2);
		if (code$2 === 34 || code$2 === 39) {
			effects.consume(code$2);
			marker = code$2;
			return tagOpenAttributeValueQuoted;
		}
		if (markdownLineEnding(code$2)) {
			returnState = tagOpenAttributeValueBefore;
			return lineEndingBefore(code$2);
		}
		if (markdownSpace(code$2)) {
			effects.consume(code$2);
			return tagOpenAttributeValueBefore;
		}
		effects.consume(code$2);
		return tagOpenAttributeValueUnquoted;
	}
	function tagOpenAttributeValueQuoted(code$2) {
		if (code$2 === marker) {
			effects.consume(code$2);
			marker = void 0;
			return tagOpenAttributeValueQuotedAfter;
		}
		if (code$2 === null) return nok(code$2);
		if (markdownLineEnding(code$2)) {
			returnState = tagOpenAttributeValueQuoted;
			return lineEndingBefore(code$2);
		}
		effects.consume(code$2);
		return tagOpenAttributeValueQuoted;
	}
	function tagOpenAttributeValueUnquoted(code$2) {
		if (code$2 === null || code$2 === 34 || code$2 === 39 || code$2 === 60 || code$2 === 61 || code$2 === 96) return nok(code$2);
		if (code$2 === 47 || code$2 === 62 || markdownLineEndingOrSpace(code$2)) return tagOpenBetween(code$2);
		effects.consume(code$2);
		return tagOpenAttributeValueUnquoted;
	}
	function tagOpenAttributeValueQuotedAfter(code$2) {
		if (code$2 === 47 || code$2 === 62 || markdownLineEndingOrSpace(code$2)) return tagOpenBetween(code$2);
		return nok(code$2);
	}
	function end(code$2) {
		if (code$2 === 62) {
			effects.consume(code$2);
			effects.exit("htmlTextData");
			effects.exit("htmlText");
			return ok$2;
		}
		return nok(code$2);
	}
	function lineEndingBefore(code$2) {
		effects.exit("htmlTextData");
		effects.enter("lineEnding");
		effects.consume(code$2);
		effects.exit("lineEnding");
		return lineEndingAfter;
	}
	function lineEndingAfter(code$2) {
		return markdownSpace(code$2) ? factorySpace(effects, lineEndingAfterPrefix, "linePrefix", self$1.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code$2) : lineEndingAfterPrefix(code$2);
	}
	function lineEndingAfterPrefix(code$2) {
		effects.enter("htmlTextData");
		return returnState(code$2);
	}
}
const labelEnd = {
	name: "labelEnd",
	resolveAll: resolveAllLabelEnd,
	resolveTo: resolveToLabelEnd,
	tokenize: tokenizeLabelEnd
};
var resourceConstruct = { tokenize: tokenizeResource };
var referenceFullConstruct = { tokenize: tokenizeReferenceFull };
var referenceCollapsedConstruct = { tokenize: tokenizeReferenceCollapsed };
function resolveAllLabelEnd(events) {
	let index$1 = -1;
	const newEvents = [];
	while (++index$1 < events.length) {
		const token = events[index$1][1];
		newEvents.push(events[index$1]);
		if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
			const offset = token.type === "labelImage" ? 4 : 2;
			token.type = "data";
			index$1 += offset;
		}
	}
	if (events.length !== newEvents.length) splice(events, 0, events.length, newEvents);
	return events;
}
function resolveToLabelEnd(events, context) {
	let index$1 = events.length;
	let offset = 0;
	let token;
	let open;
	let close;
	let media;
	while (index$1--) {
		token = events[index$1][1];
		if (open) {
			if (token.type === "link" || token.type === "labelLink" && token._inactive) break;
			if (events[index$1][0] === "enter" && token.type === "labelLink") token._inactive = true;
		} else if (close) {
			if (events[index$1][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
				open = index$1;
				if (token.type !== "labelLink") {
					offset = 2;
					break;
				}
			}
		} else if (token.type === "labelEnd") close = index$1;
	}
	const group = {
		type: events[open][1].type === "labelLink" ? "link" : "image",
		start: { ...events[open][1].start },
		end: { ...events[events.length - 1][1].end }
	};
	const label$3 = {
		type: "label",
		start: { ...events[open][1].start },
		end: { ...events[close][1].end }
	};
	const text$5 = {
		type: "labelText",
		start: { ...events[open + offset + 2][1].end },
		end: { ...events[close - 2][1].start }
	};
	media = [[
		"enter",
		group,
		context
	], [
		"enter",
		label$3,
		context
	]];
	media = /* @__PURE__ */ push(media, /* @__PURE__ */ events.slice(open + 1, open + offset + 3));
	media = /* @__PURE__ */ push(media, [[
		"enter",
		text$5,
		context
	]]);
	media = /* @__PURE__ */ push(media, /* @__PURE__ */ resolveAll(context.parser.constructs.insideSpan.null, /* @__PURE__ */ events.slice(open + offset + 4, close - 3), context));
	media = /* @__PURE__ */ push(media, [
		[
			"exit",
			text$5,
			context
		],
		events[close - 2],
		events[close - 1],
		[
			"exit",
			label$3,
			context
		]
	]);
	media = /* @__PURE__ */ push(media, /* @__PURE__ */ events.slice(close + 1));
	media = /* @__PURE__ */ push(media, [[
		"exit",
		group,
		context
	]]);
	splice(events, open, events.length, media);
	return events;
}
function tokenizeLabelEnd(effects, ok$2, nok) {
	const self$1 = this;
	let index$1 = self$1.events.length;
	let labelStart;
	let defined;
	while (index$1--) if ((self$1.events[index$1][1].type === "labelImage" || self$1.events[index$1][1].type === "labelLink") && !self$1.events[index$1][1]._balanced) {
		labelStart = self$1.events[index$1][1];
		break;
	}
	return start;
	function start(code$2) {
		if (!labelStart) return nok(code$2);
		if (labelStart._inactive) return labelEndNok(code$2);
		defined = /* @__PURE__ */ self$1.parser.defined.includes(/* @__PURE__ */ normalizeIdentifier(/* @__PURE__ */ self$1.sliceSerialize({
			start: labelStart.end,
			end: /* @__PURE__ */ self$1.now()
		})));
		effects.enter("labelEnd");
		effects.enter("labelMarker");
		effects.consume(code$2);
		effects.exit("labelMarker");
		effects.exit("labelEnd");
		return after;
	}
	function after(code$2) {
		if (code$2 === 40) return effects.attempt(resourceConstruct, labelEndOk, defined ? labelEndOk : labelEndNok)(code$2);
		if (code$2 === 91) return effects.attempt(referenceFullConstruct, labelEndOk, defined ? referenceNotFull : labelEndNok)(code$2);
		return defined ? labelEndOk(code$2) : labelEndNok(code$2);
	}
	function referenceNotFull(code$2) {
		return effects.attempt(referenceCollapsedConstruct, labelEndOk, labelEndNok)(code$2);
	}
	function labelEndOk(code$2) {
		return ok$2(code$2);
	}
	function labelEndNok(code$2) {
		labelStart._balanced = true;
		return nok(code$2);
	}
}
function tokenizeResource(effects, ok$2, nok) {
	return resourceStart;
	function resourceStart(code$2) {
		effects.enter("resource");
		effects.enter("resourceMarker");
		effects.consume(code$2);
		effects.exit("resourceMarker");
		return resourceBefore;
	}
	function resourceBefore(code$2) {
		return markdownLineEndingOrSpace(code$2) ? factoryWhitespace(effects, resourceOpen)(code$2) : resourceOpen(code$2);
	}
	function resourceOpen(code$2) {
		if (code$2 === 41) return resourceEnd(code$2);
		return factoryDestination(effects, resourceDestinationAfter, resourceDestinationMissing, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code$2);
	}
	function resourceDestinationAfter(code$2) {
		return markdownLineEndingOrSpace(code$2) ? factoryWhitespace(effects, resourceBetween)(code$2) : resourceEnd(code$2);
	}
	function resourceDestinationMissing(code$2) {
		return nok(code$2);
	}
	function resourceBetween(code$2) {
		if (code$2 === 34 || code$2 === 39 || code$2 === 40) return factoryTitle(effects, resourceTitleAfter, nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code$2);
		return resourceEnd(code$2);
	}
	function resourceTitleAfter(code$2) {
		return markdownLineEndingOrSpace(code$2) ? factoryWhitespace(effects, resourceEnd)(code$2) : resourceEnd(code$2);
	}
	function resourceEnd(code$2) {
		if (code$2 === 41) {
			effects.enter("resourceMarker");
			effects.consume(code$2);
			effects.exit("resourceMarker");
			effects.exit("resource");
			return ok$2;
		}
		return nok(code$2);
	}
}
function tokenizeReferenceFull(effects, ok$2, nok) {
	const self$1 = this;
	return referenceFull;
	function referenceFull(code$2) {
		return factoryLabel$1.call(self$1, effects, referenceFullAfter, referenceFullMissing, "reference", "referenceMarker", "referenceString")(code$2);
	}
	function referenceFullAfter(code$2) {
		return self$1.parser.defined.includes(/* @__PURE__ */ normalizeIdentifier(/* @__PURE__ */ self$1.sliceSerialize(self$1.events[self$1.events.length - 1][1]).slice(1, -1))) ? ok$2(code$2) : nok(code$2);
	}
	function referenceFullMissing(code$2) {
		return nok(code$2);
	}
}
function tokenizeReferenceCollapsed(effects, ok$2, nok) {
	return referenceCollapsedStart;
	function referenceCollapsedStart(code$2) {
		effects.enter("reference");
		effects.enter("referenceMarker");
		effects.consume(code$2);
		effects.exit("referenceMarker");
		return referenceCollapsedOpen;
	}
	function referenceCollapsedOpen(code$2) {
		if (code$2 === 93) {
			effects.enter("referenceMarker");
			effects.consume(code$2);
			effects.exit("referenceMarker");
			effects.exit("reference");
			return ok$2;
		}
		return nok(code$2);
	}
}
const labelStartImage = {
	name: "labelStartImage",
	resolveAll: labelEnd.resolveAll,
	tokenize: tokenizeLabelStartImage
};
function tokenizeLabelStartImage(effects, ok$2, nok) {
	const self$1 = this;
	return start;
	function start(code$2) {
		effects.enter("labelImage");
		effects.enter("labelImageMarker");
		effects.consume(code$2);
		effects.exit("labelImageMarker");
		return open;
	}
	function open(code$2) {
		if (code$2 === 91) {
			effects.enter("labelMarker");
			effects.consume(code$2);
			effects.exit("labelMarker");
			effects.exit("labelImage");
			return after;
		}
		return nok(code$2);
	}
	function after(code$2) {
		/* c8 ignore next 3 */ return code$2 === 94 && "_hiddenFootnoteSupport" in self$1.parser.constructs ? nok(code$2) : ok$2(code$2);
	}
}
const labelStartLink = {
	name: "labelStartLink",
	resolveAll: labelEnd.resolveAll,
	tokenize: tokenizeLabelStartLink
};
function tokenizeLabelStartLink(effects, ok$2, nok) {
	const self$1 = this;
	return start;
	function start(code$2) {
		effects.enter("labelLink");
		effects.enter("labelMarker");
		effects.consume(code$2);
		effects.exit("labelMarker");
		effects.exit("labelLink");
		return after;
	}
	function after(code$2) {
		/* c8 ignore next 3 */ return code$2 === 94 && "_hiddenFootnoteSupport" in self$1.parser.constructs ? nok(code$2) : ok$2(code$2);
	}
}
const lineEnding = {
	name: "lineEnding",
	tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok$2) {
	return start;
	function start(code$2) {
		effects.enter("lineEnding");
		effects.consume(code$2);
		effects.exit("lineEnding");
		return factorySpace(effects, ok$2, "linePrefix");
	}
}
const thematicBreak$1 = {
	name: "thematicBreak",
	tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok$2, nok) {
	let size$1 = 0;
	let marker;
	return start;
	function start(code$2) {
		effects.enter("thematicBreak");
		return before(code$2);
	}
	function before(code$2) {
		marker = code$2;
		return atBreak(code$2);
	}
	function atBreak(code$2) {
		if (code$2 === marker) {
			effects.enter("thematicBreakSequence");
			return sequence(code$2);
		}
		if (size$1 >= 3 && (code$2 === null || markdownLineEnding(code$2))) {
			effects.exit("thematicBreak");
			return ok$2(code$2);
		}
		return nok(code$2);
	}
	function sequence(code$2) {
		if (code$2 === marker) {
			effects.consume(code$2);
			size$1++;
			return sequence;
		}
		effects.exit("thematicBreakSequence");
		return markdownSpace(code$2) ? factorySpace(effects, atBreak, "whitespace")(code$2) : atBreak(code$2);
	}
}
const list$1 = {
	continuation: { tokenize: tokenizeListContinuation },
	exit: tokenizeListEnd,
	name: "list",
	tokenize: tokenizeListStart
};
var listItemPrefixWhitespaceConstruct = {
	partial: true,
	tokenize: tokenizeListItemPrefixWhitespace
};
var indentConstruct = {
	partial: true,
	tokenize: tokenizeIndent$1
};
function tokenizeListStart(effects, ok$2, nok) {
	const self$1 = this;
	const tail = self$1.events[self$1.events.length - 1];
	let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
	let size$1 = 0;
	return start;
	function start(code$2) {
		const kind = self$1.containerState.type || (code$2 === 42 || code$2 === 43 || code$2 === 45 ? "listUnordered" : "listOrdered");
		if (kind === "listUnordered" ? !self$1.containerState.marker || code$2 === self$1.containerState.marker : asciiDigit(code$2)) {
			if (!self$1.containerState.type) {
				self$1.containerState.type = kind;
				effects.enter(kind, { _container: true });
			}
			if (kind === "listUnordered") {
				effects.enter("listItemPrefix");
				return code$2 === 42 || code$2 === 45 ? effects.check(thematicBreak$1, nok, atMarker)(code$2) : atMarker(code$2);
			}
			if (!self$1.interrupt || code$2 === 49) {
				effects.enter("listItemPrefix");
				effects.enter("listItemValue");
				return inside(code$2);
			}
		}
		return nok(code$2);
	}
	function inside(code$2) {
		if (asciiDigit(code$2) && ++size$1 < 10) {
			effects.consume(code$2);
			return inside;
		}
		if ((!self$1.interrupt || size$1 < 2) && (self$1.containerState.marker ? code$2 === self$1.containerState.marker : code$2 === 41 || code$2 === 46)) {
			effects.exit("listItemValue");
			return atMarker(code$2);
		}
		return nok(code$2);
	}
	function atMarker(code$2) {
		effects.enter("listItemMarker");
		effects.consume(code$2);
		effects.exit("listItemMarker");
		self$1.containerState.marker = self$1.containerState.marker || code$2;
		return effects.check(blankLine, self$1.interrupt ? nok : onBlank, /* @__PURE__ */ effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
	}
	function onBlank(code$2) {
		self$1.containerState.initialBlankLine = true;
		initialSize++;
		return endOfPrefix(code$2);
	}
	function otherPrefix(code$2) {
		if (markdownSpace(code$2)) {
			effects.enter("listItemPrefixWhitespace");
			effects.consume(code$2);
			effects.exit("listItemPrefixWhitespace");
			return endOfPrefix;
		}
		return nok(code$2);
	}
	function endOfPrefix(code$2) {
		self$1.containerState.size = initialSize + self$1.sliceSerialize(/* @__PURE__ */ effects.exit("listItemPrefix"), true).length;
		return ok$2(code$2);
	}
}
function tokenizeListContinuation(effects, ok$2, nok) {
	const self$1 = this;
	self$1.containerState._closeFlow = void 0;
	return effects.check(blankLine, onBlank, notBlank);
	function onBlank(code$2) {
		self$1.containerState.furtherBlankLines = self$1.containerState.furtherBlankLines || self$1.containerState.initialBlankLine;
		return factorySpace(effects, ok$2, "listItemIndent", self$1.containerState.size + 1)(code$2);
	}
	function notBlank(code$2) {
		if (self$1.containerState.furtherBlankLines || !markdownSpace(code$2)) {
			self$1.containerState.furtherBlankLines = void 0;
			self$1.containerState.initialBlankLine = void 0;
			return notInCurrentItem(code$2);
		}
		self$1.containerState.furtherBlankLines = void 0;
		self$1.containerState.initialBlankLine = void 0;
		return effects.attempt(indentConstruct, ok$2, notInCurrentItem)(code$2);
	}
	function notInCurrentItem(code$2) {
		self$1.containerState._closeFlow = true;
		self$1.interrupt = void 0;
		return factorySpace(effects, /* @__PURE__ */ effects.attempt(list$1, ok$2, nok), "linePrefix", self$1.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code$2);
	}
}
function tokenizeIndent$1(effects, ok$2, nok) {
	const self$1 = this;
	return factorySpace(effects, afterPrefix, "listItemIndent", self$1.containerState.size + 1);
	function afterPrefix(code$2) {
		const tail = self$1.events[self$1.events.length - 1];
		return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self$1.containerState.size ? ok$2(code$2) : nok(code$2);
	}
}
function tokenizeListEnd(effects) {
	effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok$2, nok) {
	const self$1 = this;
	return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self$1.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function afterPrefix(code$2) {
		const tail = self$1.events[self$1.events.length - 1];
		return !markdownSpace(code$2) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok$2(code$2) : nok(code$2);
	}
}
const setextUnderline = {
	name: "setextUnderline",
	resolveTo: resolveToSetextUnderline,
	tokenize: tokenizeSetextUnderline
};
function resolveToSetextUnderline(events, context) {
	let index$1 = events.length;
	let content$2;
	let text$5;
	let definition$1;
	while (index$1--) if (events[index$1][0] === "enter") {
		if (events[index$1][1].type === "content") {
			content$2 = index$1;
			break;
		}
		if (events[index$1][1].type === "paragraph") text$5 = index$1;
	} else {
		if (events[index$1][1].type === "content") events.splice(index$1, 1);
		if (!definition$1 && events[index$1][1].type === "definition") definition$1 = index$1;
	}
	const heading$1 = {
		type: "setextHeading",
		start: { ...events[content$2][1].start },
		end: { ...events[events.length - 1][1].end }
	};
	events[text$5][1].type = "setextHeadingText";
	if (definition$1) {
		events.splice(text$5, 0, [
			"enter",
			heading$1,
			context
		]);
		events.splice(definition$1 + 1, 0, [
			"exit",
			events[content$2][1],
			context
		]);
		events[content$2][1].end = { ...events[definition$1][1].end };
	} else events[content$2][1] = heading$1;
	events.push([
		"exit",
		heading$1,
		context
	]);
	return events;
}
function tokenizeSetextUnderline(effects, ok$2, nok) {
	const self$1 = this;
	let marker;
	return start;
	function start(code$2) {
		let index$1 = self$1.events.length;
		let paragraph$1;
		while (index$1--) if (self$1.events[index$1][1].type !== "lineEnding" && self$1.events[index$1][1].type !== "linePrefix" && self$1.events[index$1][1].type !== "content") {
			paragraph$1 = self$1.events[index$1][1].type === "paragraph";
			break;
		}
		if (!self$1.parser.lazy[self$1.now().line] && (self$1.interrupt || paragraph$1)) {
			effects.enter("setextHeadingLine");
			marker = code$2;
			return before(code$2);
		}
		return nok(code$2);
	}
	function before(code$2) {
		effects.enter("setextHeadingLineSequence");
		return inside(code$2);
	}
	function inside(code$2) {
		if (code$2 === marker) {
			effects.consume(code$2);
			return inside;
		}
		effects.exit("setextHeadingLineSequence");
		return markdownSpace(code$2) ? factorySpace(effects, after, "lineSuffix")(code$2) : after(code$2);
	}
	function after(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("setextHeadingLine");
			return ok$2(code$2);
		}
		return nok(code$2);
	}
}
const flow = { tokenize: initializeFlow };
function initializeFlow(effects) {
	const self$1 = this;
	const initial = /* @__PURE__ */ effects.attempt(blankLine, atBlankEnding, /* @__PURE__ */ effects.attempt(this.parser.constructs.flowInitial, afterConstruct, /* @__PURE__ */ factorySpace(effects, /* @__PURE__ */ effects.attempt(this.parser.constructs.flow, afterConstruct, /* @__PURE__ */ effects.attempt(content$1, afterConstruct)), "linePrefix")));
	return initial;
	function atBlankEnding(code$2) {
		if (code$2 === null) {
			effects.consume(code$2);
			return;
		}
		effects.enter("lineEndingBlank");
		effects.consume(code$2);
		effects.exit("lineEndingBlank");
		self$1.currentConstruct = void 0;
		return initial;
	}
	function afterConstruct(code$2) {
		if (code$2 === null) {
			effects.consume(code$2);
			return;
		}
		effects.enter("lineEnding");
		effects.consume(code$2);
		effects.exit("lineEnding");
		self$1.currentConstruct = void 0;
		return initial;
	}
}
const resolver = { resolveAll: /* @__PURE__ */ createResolver() };
const string = /* @__PURE__ */ initializeFactory("string");
const text$3 = /* @__PURE__ */ initializeFactory("text");
function initializeFactory(field) {
	return {
		resolveAll: /* @__PURE__ */ createResolver(field === "text" ? resolveAllLineSuffixes : void 0),
		tokenize: initializeText
	};
	function initializeText(effects) {
		const self$1 = this;
		const constructs$1 = this.parser.constructs[field];
		const text$5 = /* @__PURE__ */ effects.attempt(constructs$1, start, notText);
		return start;
		function start(code$2) {
			return atBreak(code$2) ? text$5(code$2) : notText(code$2);
		}
		function notText(code$2) {
			if (code$2 === null) {
				effects.consume(code$2);
				return;
			}
			effects.enter("data");
			effects.consume(code$2);
			return data$1;
		}
		function data$1(code$2) {
			if (atBreak(code$2)) {
				effects.exit("data");
				return text$5(code$2);
			}
			effects.consume(code$2);
			return data$1;
		}
		function atBreak(code$2) {
			if (code$2 === null) return true;
			const list$2 = constructs$1[code$2];
			let index$1 = -1;
			if (list$2) while (++index$1 < list$2.length) {
				const item = list$2[index$1];
				if (!item.previous || item.previous.call(self$1, self$1.previous)) return true;
			}
			return false;
		}
	}
}
function createResolver(extraResolver) {
	return resolveAllText;
	function resolveAllText(events, context) {
		let index$1 = -1;
		let enter$1;
		while (++index$1 <= events.length) if (enter$1 === void 0) {
			if (events[index$1] && events[index$1][1].type === "data") {
				enter$1 = index$1;
				index$1++;
			}
		} else if (!events[index$1] || events[index$1][1].type !== "data") {
			if (index$1 !== enter$1 + 2) {
				events[enter$1][1].end = events[index$1 - 1][1].end;
				events.splice(enter$1 + 2, index$1 - enter$1 - 2);
				index$1 = enter$1 + 2;
			}
			enter$1 = void 0;
		}
		return extraResolver ? extraResolver(events, context) : events;
	}
}
function resolveAllLineSuffixes(events, context) {
	let eventIndex = 0;
	while (++eventIndex <= events.length) if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
		const data$1 = events[eventIndex - 1][1];
		const chunks = /* @__PURE__ */ context.sliceStream(data$1);
		let index$1 = chunks.length;
		let bufferIndex = -1;
		let size$1 = 0;
		let tabs;
		while (index$1--) {
			const chunk = chunks[index$1];
			if (typeof chunk === "string") {
				bufferIndex = chunk.length;
				while (chunk.charCodeAt(bufferIndex - 1) === 32) {
					size$1++;
					bufferIndex--;
				}
				if (bufferIndex) break;
				bufferIndex = -1;
			} else if (chunk === -2) {
				tabs = true;
				size$1++;
			} else if (chunk === -1) {} else {
				index$1++;
				break;
			}
		}
		if (context._contentTypeTextTrailing && eventIndex === events.length) size$1 = 0;
		if (size$1) {
			const token = {
				type: eventIndex === events.length || tabs || size$1 < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: index$1 ? bufferIndex : data$1.start._bufferIndex + bufferIndex,
					_index: data$1.start._index + index$1,
					line: data$1.end.line,
					column: data$1.end.column - size$1,
					offset: data$1.end.offset - size$1
				},
				end: { ...data$1.end }
			};
			data$1.end = { ...token.start };
			if (data$1.start.offset === data$1.end.offset) Object.assign(data$1, token);
			else {
				events.splice(eventIndex, 0, [
					"enter",
					token,
					context
				], [
					"exit",
					token,
					context
				]);
				eventIndex += 2;
			}
		}
		eventIndex++;
	}
	return events;
}
var constructs_exports = /* @__PURE__ */ __export({
	attentionMarkers: () => attentionMarkers,
	contentInitial: () => contentInitial,
	disable: () => disable,
	document: () => document$2,
	flow: () => flow$1,
	flowInitial: () => flowInitial,
	insideSpan: () => insideSpan,
	string: () => string$1,
	text: () => text$4
});
const document$2 = {
	[42]: list$1,
	[43]: list$1,
	[45]: list$1,
	[48]: list$1,
	[49]: list$1,
	[50]: list$1,
	[51]: list$1,
	[52]: list$1,
	[53]: list$1,
	[54]: list$1,
	[55]: list$1,
	[56]: list$1,
	[57]: list$1,
	[62]: blockQuote
};
const contentInitial = { [91]: definition };
const flowInitial = {
	[-2]: codeIndented,
	[-1]: codeIndented,
	[32]: codeIndented
};
const flow$1 = {
	[35]: headingAtx,
	[42]: thematicBreak$1,
	[45]: [setextUnderline, thematicBreak$1],
	[60]: htmlFlow,
	[61]: setextUnderline,
	[95]: thematicBreak$1,
	[96]: codeFenced,
	[126]: codeFenced
};
const string$1 = {
	[38]: characterReference,
	[92]: characterEscape
};
const text$4 = {
	[-5]: lineEnding,
	[-4]: lineEnding,
	[-3]: lineEnding,
	[33]: labelStartImage,
	[38]: characterReference,
	[42]: attention,
	[60]: [autolink, htmlText],
	[91]: labelStartLink,
	[92]: [hardBreakEscape, characterEscape],
	[93]: labelEnd,
	[95]: attention,
	[96]: codeText
};
const insideSpan = { null: [attention, resolver] };
const attentionMarkers = { null: [42, 95] };
const disable = { null: [] };
function createTokenizer(parser, initialize, from) {
	let point$3 = {
		_bufferIndex: -1,
		_index: 0,
		line: from && from.line || 1,
		column: from && from.column || 1,
		offset: from && from.offset || 0
	};
	const columnStart = {};
	const resolveAllConstructs = [];
	let chunks = [];
	let stack = [];
	const effects = {
		attempt: /* @__PURE__ */ constructFactory(onsuccessfulconstruct),
		check: /* @__PURE__ */ constructFactory(onsuccessfulcheck),
		consume,
		enter: enter$1,
		exit: exit$3,
		interrupt: /* @__PURE__ */ constructFactory(onsuccessfulcheck, { interrupt: true })
	};
	const context = {
		code: null,
		containerState: {},
		defineSkip,
		events: [],
		now,
		parser,
		previous: null,
		sliceSerialize,
		sliceStream,
		write
	};
	let state = /* @__PURE__ */ initialize.tokenize.call(context, effects);
	if (initialize.resolveAll) resolveAllConstructs.push(initialize);
	return context;
	function write(slice) {
		chunks = /* @__PURE__ */ push(chunks, slice);
		main();
		if (chunks[chunks.length - 1] !== null) return [];
		addResult(initialize, 0);
		context.events = /* @__PURE__ */ resolveAll(resolveAllConstructs, context.events, context);
		return context.events;
	}
	function sliceSerialize(token, expandTabs) {
		return serializeChunks(/* @__PURE__ */ sliceStream(token), expandTabs);
	}
	function sliceStream(token) {
		return sliceChunks(chunks, token);
	}
	function now() {
		const { _bufferIndex, _index, line, column, offset } = point$3;
		return {
			_bufferIndex,
			_index,
			line,
			column,
			offset
		};
	}
	function defineSkip(value) {
		columnStart[value.line] = value.column;
		accountForPotentialSkip();
	}
	function main() {
		let chunkIndex;
		while (point$3._index < chunks.length) {
			const chunk = chunks[point$3._index];
			if (typeof chunk === "string") {
				chunkIndex = point$3._index;
				if (point$3._bufferIndex < 0) point$3._bufferIndex = 0;
				while (point$3._index === chunkIndex && point$3._bufferIndex < chunk.length) go(/* @__PURE__ */ chunk.charCodeAt(point$3._bufferIndex));
			} else go(chunk);
		}
	}
	function go(code$2) {
		state = /* @__PURE__ */ state(code$2);
	}
	function consume(code$2) {
		if (markdownLineEnding(code$2)) {
			point$3.line++;
			point$3.column = 1;
			point$3.offset += code$2 === -3 ? 2 : 1;
			accountForPotentialSkip();
		} else if (code$2 !== -1) {
			point$3.column++;
			point$3.offset++;
		}
		if (point$3._bufferIndex < 0) point$3._index++;
		else {
			point$3._bufferIndex++;
			if (point$3._bufferIndex === chunks[point$3._index].length) {
				point$3._bufferIndex = -1;
				point$3._index++;
			}
		}
		context.previous = code$2;
	}
	function enter$1(type, fields) {
		const token = fields || {};
		token.type = type;
		token.start = /* @__PURE__ */ now();
		context.events.push([
			"enter",
			token,
			context
		]);
		stack.push(token);
		return token;
	}
	function exit$3(type) {
		const token = /* @__PURE__ */ stack.pop();
		token.end = /* @__PURE__ */ now();
		context.events.push([
			"exit",
			token,
			context
		]);
		return token;
	}
	function onsuccessfulconstruct(construct, info) {
		addResult(construct, info.from);
	}
	function onsuccessfulcheck(_, info) {
		info.restore();
	}
	function constructFactory(onreturn, fields) {
		return hook;
		function hook(constructs$1, returnState, bogusState) {
			let listOfConstructs;
			let constructIndex;
			let currentConstruct;
			let info;
			return Array.isArray(constructs$1) ? handleListOfConstructs(constructs$1) : "tokenize" in constructs$1 ? handleListOfConstructs([constructs$1]) : handleMapOfConstructs(constructs$1);
			function handleMapOfConstructs(map$1) {
				return start;
				function start(code$2) {
					const left = code$2 !== null && map$1[code$2];
					const all$1 = code$2 !== null && map$1.null;
					return handleListOfConstructs([...Array.isArray(left) ? left : left ? [left] : [], ...Array.isArray(all$1) ? all$1 : all$1 ? [all$1] : []])(code$2);
				}
			}
			function handleListOfConstructs(list$2) {
				listOfConstructs = list$2;
				constructIndex = 0;
				if (list$2.length === 0) return bogusState;
				return handleConstruct(list$2[constructIndex]);
			}
			function handleConstruct(construct) {
				return start;
				function start(code$2) {
					info = /* @__PURE__ */ store();
					currentConstruct = construct;
					if (!construct.partial) context.currentConstruct = construct;
					if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) return nok(code$2);
					return construct.tokenize.call(fields ? Object.assign(/* @__PURE__ */ Object.create(context), fields) : context, effects, ok$2, nok)(code$2);
				}
			}
			function ok$2(code$2) {
				onreturn(currentConstruct, info);
				return returnState;
			}
			function nok(code$2) {
				info.restore();
				if (++constructIndex < listOfConstructs.length) return handleConstruct(listOfConstructs[constructIndex]);
				return bogusState;
			}
		}
	}
	function addResult(construct, from$1) {
		if (construct.resolveAll && !resolveAllConstructs.includes(construct)) resolveAllConstructs.push(construct);
		if (construct.resolve) splice(context.events, from$1, context.events.length - from$1, /* @__PURE__ */ construct.resolve(/* @__PURE__ */ context.events.slice(from$1), context));
		if (construct.resolveTo) context.events = /* @__PURE__ */ construct.resolveTo(context.events, context);
	}
	function store() {
		const startPoint = /* @__PURE__ */ now();
		const startPrevious = context.previous;
		const startCurrentConstruct = context.currentConstruct;
		const startEventsIndex = context.events.length;
		const startStack = /* @__PURE__ */ Array.from(stack);
		return {
			from: startEventsIndex,
			restore
		};
		function restore() {
			point$3 = startPoint;
			context.previous = startPrevious;
			context.currentConstruct = startCurrentConstruct;
			context.events.length = startEventsIndex;
			stack = startStack;
			accountForPotentialSkip();
		}
	}
	function accountForPotentialSkip() {
		if (point$3.line in columnStart && point$3.column < 2) {
			point$3.column = columnStart[point$3.line];
			point$3.offset += columnStart[point$3.line] - 1;
		}
	}
}
function sliceChunks(chunks, token) {
	const startIndex = token.start._index;
	const startBufferIndex = token.start._bufferIndex;
	const endIndex = token.end._index;
	const endBufferIndex = token.end._bufferIndex;
	let view;
	if (startIndex === endIndex) view = [/* @__PURE__ */ chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
	else {
		view = /* @__PURE__ */ chunks.slice(startIndex, endIndex);
		if (startBufferIndex > -1) {
			const head = view[0];
			if (typeof head === "string") view[0] = /* @__PURE__ */ head.slice(startBufferIndex);
			else view.shift();
		}
		if (endBufferIndex > 0) view.push(/* @__PURE__ */ chunks[endIndex].slice(0, endBufferIndex));
	}
	return view;
}
function serializeChunks(chunks, expandTabs) {
	let index$1 = -1;
	const result = [];
	let atTab;
	while (++index$1 < chunks.length) {
		const chunk = chunks[index$1];
		let value;
		if (typeof chunk === "string") value = chunk;
		else switch (chunk) {
			case -5:
				value = "\r";
				break;
			case -4:
				value = "\n";
				break;
			case -3:
				value = "\r\n";
				break;
			case -2:
				value = expandTabs ? " " : "	";
				break;
			case -1:
				if (!expandTabs && atTab) continue;
				value = " ";
				break;
			default: value = /* @__PURE__ */ String.fromCharCode(chunk);
		}
		atTab = chunk === -2;
		result.push(value);
	}
	return result.join("");
}
function parse$1(options) {
	const parser = {
		constructs: /* @__PURE__ */ combineExtensions([constructs_exports, ...(options || {}).extensions || []]),
		content: /* @__PURE__ */ create$1(content),
		defined: [],
		document: /* @__PURE__ */ create$1(document$1),
		flow: /* @__PURE__ */ create$1(flow),
		lazy: {},
		string: /* @__PURE__ */ create$1(string),
		text: /* @__PURE__ */ create$1(text$3)
	};
	return parser;
	function create$1(initial) {
		return creator;
		function creator(from) {
			return createTokenizer(parser, initial, from);
		}
	}
}
function postprocess(events) {
	while (!subtokenize(events));
	return events;
}
var search = /[\0\t\n\r]/g;
function preprocess() {
	let column = 1;
	let buffer = "";
	let start = true;
	let atCarriageReturn;
	return preprocessor;
	function preprocessor(value, encoding, end) {
		const chunks = [];
		let match;
		let next;
		let startPosition;
		let endPosition;
		let code$2;
		value = buffer + (typeof value === "string" ? value.toString() : new TextDecoder(encoding || void 0).decode(value));
		startPosition = 0;
		buffer = "";
		if (start) {
			if (value.charCodeAt(0) === 65279) startPosition++;
			start = void 0;
		}
		while (startPosition < value.length) {
			search.lastIndex = startPosition;
			match = /* @__PURE__ */ search.exec(value);
			endPosition = match && match.index !== void 0 ? match.index : value.length;
			code$2 = /* @__PURE__ */ value.charCodeAt(endPosition);
			if (!match) {
				buffer = /* @__PURE__ */ value.slice(startPosition);
				break;
			}
			if (code$2 === 10 && startPosition === endPosition && atCarriageReturn) {
				chunks.push(-3);
				atCarriageReturn = void 0;
			} else {
				if (atCarriageReturn) {
					chunks.push(-5);
					atCarriageReturn = void 0;
				}
				if (startPosition < endPosition) {
					chunks.push(/* @__PURE__ */ value.slice(startPosition, endPosition));
					column += endPosition - startPosition;
				}
				switch (code$2) {
					case 0:
						chunks.push(65533);
						column++;
						break;
					case 9:
						next = Math.ceil(column / 4) * 4;
						chunks.push(-2);
						while (column++ < next) chunks.push(-1);
						break;
					case 10:
						chunks.push(-4);
						column = 1;
						break;
					default:
						atCarriageReturn = true;
						column = 1;
				}
			}
			startPosition = endPosition + 1;
		}
		if (end) {
			if (atCarriageReturn) chunks.push(-5);
			if (buffer) chunks.push(buffer);
			chunks.push(null);
		}
		return chunks;
	}
}
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
	return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
	if ($1) return $1;
	if ($2.charCodeAt(0) === 35) {
		const head = /* @__PURE__ */ $2.charCodeAt(1);
		const hex = head === 120 || head === 88;
		return decodeNumericCharacterReference(/* @__PURE__ */ $2.slice(hex ? 2 : 1), hex ? 16 : 10);
	}
	return decodeNamedCharacterReference($2) || $0;
}
function stringifyPosition(value) {
	if (!value || typeof value !== "object") return "";
	if ("position" in value || "type" in value) return position$1(value.position);
	if ("start" in value || "end" in value) return position$1(value);
	if ("line" in value || "column" in value) return point$2(value);
	return "";
}
function point$2(point$3) {
	return index(point$3 && point$3.line) + ":" + index(point$3 && point$3.column);
}
function position$1(pos) {
	return point$2(pos && pos.start) + "-" + point$2(pos && pos.end);
}
function index(value) {
	return value && typeof value === "number" ? value : 1;
}
var own$3 = {}.hasOwnProperty;
function fromMarkdown(value, encoding, options) {
	if (typeof encoding !== "string") {
		options = encoding;
		encoding = void 0;
	}
	return compiler(options)(/* @__PURE__ */ postprocess(/* @__PURE__ */ parse$1(options).document().write(/* @__PURE__ */ preprocess()(value, encoding, true))));
}
function compiler(options) {
	const config = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: /* @__PURE__ */ opener(link$1),
			autolinkProtocol: onenterdata,
			autolinkEmail: onenterdata,
			atxHeading: /* @__PURE__ */ opener(heading$1),
			blockQuote: /* @__PURE__ */ opener(blockQuote$1),
			characterEscape: onenterdata,
			characterReference: onenterdata,
			codeFenced: /* @__PURE__ */ opener(codeFlow),
			codeFencedFenceInfo: buffer,
			codeFencedFenceMeta: buffer,
			codeIndented: /* @__PURE__ */ opener(codeFlow, buffer),
			codeText: /* @__PURE__ */ opener(codeText$1, buffer),
			codeTextData: onenterdata,
			data: onenterdata,
			codeFlowValue: onenterdata,
			definition: /* @__PURE__ */ opener(definition$1),
			definitionDestinationString: buffer,
			definitionLabelString: buffer,
			definitionTitleString: buffer,
			emphasis: /* @__PURE__ */ opener(emphasis$1),
			hardBreakEscape: /* @__PURE__ */ opener(hardBreak$1),
			hardBreakTrailing: /* @__PURE__ */ opener(hardBreak$1),
			htmlFlow: /* @__PURE__ */ opener(html$3, buffer),
			htmlFlowData: onenterdata,
			htmlText: /* @__PURE__ */ opener(html$3, buffer),
			htmlTextData: onenterdata,
			image: /* @__PURE__ */ opener(image$1),
			label: buffer,
			link: /* @__PURE__ */ opener(link$1),
			listItem: /* @__PURE__ */ opener(listItem$1),
			listItemValue: onenterlistitemvalue,
			listOrdered: /* @__PURE__ */ opener(list$2, onenterlistordered),
			listUnordered: /* @__PURE__ */ opener(list$2),
			paragraph: /* @__PURE__ */ opener(paragraph$1),
			reference: onenterreference,
			referenceString: buffer,
			resourceDestinationString: buffer,
			resourceTitleString: buffer,
			setextHeading: /* @__PURE__ */ opener(heading$1),
			strong: /* @__PURE__ */ opener(strong$1),
			thematicBreak: /* @__PURE__ */ opener(thematicBreak$2)
		},
		exit: {
			atxHeading: /* @__PURE__ */ closer(),
			atxHeadingSequence: onexitatxheadingsequence,
			autolink: /* @__PURE__ */ closer(),
			autolinkEmail: onexitautolinkemail,
			autolinkProtocol: onexitautolinkprotocol,
			blockQuote: /* @__PURE__ */ closer(),
			characterEscapeValue: onexitdata,
			characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
			characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
			characterReferenceValue: onexitcharacterreferencevalue,
			characterReference: onexitcharacterreference,
			codeFenced: /* @__PURE__ */ closer(onexitcodefenced),
			codeFencedFence: onexitcodefencedfence,
			codeFencedFenceInfo: onexitcodefencedfenceinfo,
			codeFencedFenceMeta: onexitcodefencedfencemeta,
			codeFlowValue: onexitdata,
			codeIndented: /* @__PURE__ */ closer(onexitcodeindented),
			codeText: /* @__PURE__ */ closer(onexitcodetext),
			codeTextData: onexitdata,
			data: onexitdata,
			definition: /* @__PURE__ */ closer(),
			definitionDestinationString: onexitdefinitiondestinationstring,
			definitionLabelString: onexitdefinitionlabelstring,
			definitionTitleString: onexitdefinitiontitlestring,
			emphasis: /* @__PURE__ */ closer(),
			hardBreakEscape: /* @__PURE__ */ closer(onexithardbreak),
			hardBreakTrailing: /* @__PURE__ */ closer(onexithardbreak),
			htmlFlow: /* @__PURE__ */ closer(onexithtmlflow),
			htmlFlowData: onexitdata,
			htmlText: /* @__PURE__ */ closer(onexithtmltext),
			htmlTextData: onexitdata,
			image: /* @__PURE__ */ closer(onexitimage),
			label: onexitlabel,
			labelText: onexitlabeltext,
			lineEnding: onexitlineending,
			link: /* @__PURE__ */ closer(onexitlink),
			listItem: /* @__PURE__ */ closer(),
			listOrdered: /* @__PURE__ */ closer(),
			listUnordered: /* @__PURE__ */ closer(),
			paragraph: /* @__PURE__ */ closer(),
			referenceString: onexitreferencestring,
			resourceDestinationString: onexitresourcedestinationstring,
			resourceTitleString: onexitresourcetitlestring,
			resource: onexitresource,
			setextHeading: /* @__PURE__ */ closer(onexitsetextheading),
			setextHeadingLineSequence: onexitsetextheadinglinesequence,
			setextHeadingText: onexitsetextheadingtext,
			strong: /* @__PURE__ */ closer(),
			thematicBreak: /* @__PURE__ */ closer()
		}
	};
	configure(config, (options || {}).mdastExtensions || []);
	const data$1 = {};
	return compile;
	function compile(events) {
		let tree = {
			type: "root",
			children: []
		};
		const context = {
			stack: [tree],
			tokenStack: [],
			config,
			enter: enter$1,
			exit: exit$3,
			buffer,
			resume,
			data: data$1
		};
		const listStack = [];
		let index$1 = -1;
		while (++index$1 < events.length) if (events[index$1][1].type === "listOrdered" || events[index$1][1].type === "listUnordered") if (events[index$1][0] === "enter") listStack.push(index$1);
		else index$1 = /* @__PURE__ */ prepareList(events, /* @__PURE__ */ listStack.pop(), index$1);
		index$1 = -1;
		while (++index$1 < events.length) {
			const handler = config[events[index$1][0]];
			if (own$3.call(handler, events[index$1][1].type)) handler[events[index$1][1].type].call(/* @__PURE__ */ Object.assign({ sliceSerialize: events[index$1][2].sliceSerialize }, context), events[index$1][1]);
		}
		if (context.tokenStack.length > 0) {
			const tail = context.tokenStack[context.tokenStack.length - 1];
			(tail[1] || defaultOnError).call(context, void 0, tail[0]);
		}
		tree.position = {
			start: /* @__PURE__ */ point$1(events.length > 0 ? events[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: /* @__PURE__ */ point$1(events.length > 0 ? events[events.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		};
		index$1 = -1;
		while (++index$1 < config.transforms.length) tree = config.transforms[index$1](tree) || tree;
		return tree;
	}
	function prepareList(events, start, length) {
		let index$1 = start - 1;
		let containerBalance = -1;
		let listSpread = false;
		let listItem$2;
		let lineIndex;
		let firstBlankLineIndex;
		let atMarker;
		while (++index$1 <= length) {
			const event = events[index$1];
			switch (event[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					if (event[0] === "enter") containerBalance++;
					else containerBalance--;
					atMarker = void 0;
					break;
				case "lineEndingBlank":
					if (event[0] === "enter") {
						if (listItem$2 && !atMarker && !containerBalance && !firstBlankLineIndex) firstBlankLineIndex = index$1;
						atMarker = void 0;
					}
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: atMarker = void 0;
			}
			if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
				if (listItem$2) {
					let tailIndex = index$1;
					lineIndex = void 0;
					while (tailIndex--) {
						const tailEvent = events[tailIndex];
						if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
							if (tailEvent[0] === "exit") continue;
							if (lineIndex) {
								events[lineIndex][1].type = "lineEndingBlank";
								listSpread = true;
							}
							tailEvent[1].type = "lineEnding";
							lineIndex = tailIndex;
						} else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {} else break;
					}
					if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) listItem$2._spread = true;
					listItem$2.end = /* @__PURE__ */ Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
					events.splice(lineIndex || index$1, 0, [
						"exit",
						listItem$2,
						event[2]
					]);
					index$1++;
					length++;
				}
				if (event[1].type === "listItemPrefix") {
					const item = {
						type: "listItem",
						_spread: false,
						start: /* @__PURE__ */ Object.assign({}, event[1].start),
						end: void 0
					};
					listItem$2 = item;
					events.splice(index$1, 0, [
						"enter",
						item,
						event[2]
					]);
					index$1++;
					length++;
					firstBlankLineIndex = void 0;
					atMarker = true;
				}
			}
		}
		events[start][1]._spread = listSpread;
		return length;
	}
	function opener(create$1, and) {
		return open;
		function open(token) {
			enter$1.call(this, /* @__PURE__ */ create$1(token), token);
			if (and) and.call(this, token);
		}
	}
	function buffer() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function enter$1(node$1, token, errorHandler) {
		this.stack[this.stack.length - 1].children.push(node$1);
		this.stack.push(node$1);
		this.tokenStack.push([token, errorHandler || void 0]);
		node$1.position = {
			start: /* @__PURE__ */ point$1(token.start),
			end: void 0
		};
	}
	function closer(and) {
		return close;
		function close(token) {
			if (and) and.call(this, token);
			exit$3.call(this, token);
		}
	}
	function exit$3(token, onExitError) {
		const node$1 = /* @__PURE__ */ this.stack.pop();
		const open = /* @__PURE__ */ this.tokenStack.pop();
		if (!open) throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
			start: token.start,
			end: token.end
		}) + "): it’s not open");
		else if (open[0].type !== token.type) if (onExitError) onExitError.call(this, token, open[0]);
		else (open[1] || defaultOnError).call(this, token, open[0]);
		node$1.position.end = /* @__PURE__ */ point$1(token.end);
	}
	function resume() {
		return toString$1(/* @__PURE__ */ this.stack.pop());
	}
	function onenterlistordered() {
		this.data.expectingFirstListItemValue = true;
	}
	function onenterlistitemvalue(token) {
		if (this.data.expectingFirstListItemValue) {
			const ancestor = this.stack[this.stack.length - 2];
			ancestor.start = /* @__PURE__ */ Number.parseInt(/* @__PURE__ */ this.sliceSerialize(token), 10);
			this.data.expectingFirstListItemValue = void 0;
		}
	}
	function onexitcodefencedfenceinfo() {
		const data$2 = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		node$1.lang = data$2;
	}
	function onexitcodefencedfencemeta() {
		const data$2 = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		node$1.meta = data$2;
	}
	function onexitcodefencedfence() {
		if (this.data.flowCodeInside) return;
		this.buffer();
		this.data.flowCodeInside = true;
	}
	function onexitcodefenced() {
		const data$2 = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		node$1.value = /* @__PURE__ */ data$2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
		this.data.flowCodeInside = void 0;
	}
	function onexitcodeindented() {
		const data$2 = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		node$1.value = /* @__PURE__ */ data$2.replace(/(\r?\n|\r)$/g, "");
	}
	function onexitdefinitionlabelstring(token) {
		const label$3 = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		node$1.label = label$3;
		node$1.identifier = /* @__PURE__ */ normalizeIdentifier(/* @__PURE__ */ this.sliceSerialize(token)).toLowerCase();
	}
	function onexitdefinitiontitlestring() {
		const data$2 = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		node$1.title = data$2;
	}
	function onexitdefinitiondestinationstring() {
		const data$2 = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		node$1.url = data$2;
	}
	function onexitatxheadingsequence(token) {
		const node$1 = this.stack[this.stack.length - 1];
		if (!node$1.depth) node$1.depth = this.sliceSerialize(token).length;
	}
	function onexitsetextheadingtext() {
		this.data.setextHeadingSlurpLineEnding = true;
	}
	function onexitsetextheadinglinesequence(token) {
		const node$1 = this.stack[this.stack.length - 1];
		node$1.depth = this.sliceSerialize(token).codePointAt(0) === 61 ? 1 : 2;
	}
	function onexitsetextheading() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function onenterdata(token) {
		const siblings = this.stack[this.stack.length - 1].children;
		let tail = siblings[siblings.length - 1];
		if (!tail || tail.type !== "text") {
			tail = /* @__PURE__ */ text$5();
			tail.position = {
				start: /* @__PURE__ */ point$1(token.start),
				end: void 0
			};
			siblings.push(tail);
		}
		this.stack.push(tail);
	}
	function onexitdata(token) {
		const tail = /* @__PURE__ */ this.stack.pop();
		tail.value += /* @__PURE__ */ this.sliceSerialize(token);
		tail.position.end = /* @__PURE__ */ point$1(token.end);
	}
	function onexitlineending(token) {
		const context = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			const tail = context.children[context.children.length - 1];
			tail.position.end = /* @__PURE__ */ point$1(token.end);
			this.data.atHardBreak = void 0;
			return;
		}
		if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context.type)) {
			onenterdata.call(this, token);
			onexitdata.call(this, token);
		}
	}
	function onexithardbreak() {
		this.data.atHardBreak = true;
	}
	function onexithtmlflow() {
		const data$2 = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		node$1.value = data$2;
	}
	function onexithtmltext() {
		const data$2 = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		node$1.value = data$2;
	}
	function onexitcodetext() {
		const data$2 = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		node$1.value = data$2;
	}
	function onexitlink() {
		const node$1 = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			const referenceType = this.data.referenceType || "shortcut";
			node$1.type += "Reference";
			node$1.referenceType = referenceType;
			delete node$1.url;
			delete node$1.title;
		} else {
			delete node$1.identifier;
			delete node$1.label;
		}
		this.data.referenceType = void 0;
	}
	function onexitimage() {
		const node$1 = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			const referenceType = this.data.referenceType || "shortcut";
			node$1.type += "Reference";
			node$1.referenceType = referenceType;
			delete node$1.url;
			delete node$1.title;
		} else {
			delete node$1.identifier;
			delete node$1.label;
		}
		this.data.referenceType = void 0;
	}
	function onexitlabeltext(token) {
		const string$3 = /* @__PURE__ */ this.sliceSerialize(token);
		const ancestor = this.stack[this.stack.length - 2];
		ancestor.label = /* @__PURE__ */ decodeString(string$3);
		ancestor.identifier = /* @__PURE__ */ normalizeIdentifier(string$3).toLowerCase();
	}
	function onexitlabel() {
		const fragment = this.stack[this.stack.length - 1];
		const value = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		this.data.inReference = true;
		if (node$1.type === "link") node$1.children = fragment.children;
		else node$1.alt = value;
	}
	function onexitresourcedestinationstring() {
		const data$2 = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		node$1.url = data$2;
	}
	function onexitresourcetitlestring() {
		const data$2 = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		node$1.title = data$2;
	}
	function onexitresource() {
		this.data.inReference = void 0;
	}
	function onenterreference() {
		this.data.referenceType = "collapsed";
	}
	function onexitreferencestring(token) {
		const label$3 = /* @__PURE__ */ this.resume();
		const node$1 = this.stack[this.stack.length - 1];
		node$1.label = label$3;
		node$1.identifier = /* @__PURE__ */ normalizeIdentifier(/* @__PURE__ */ this.sliceSerialize(token)).toLowerCase();
		this.data.referenceType = "full";
	}
	function onexitcharacterreferencemarker(token) {
		this.data.characterReferenceType = token.type;
	}
	function onexitcharacterreferencevalue(token) {
		const data$2 = /* @__PURE__ */ this.sliceSerialize(token);
		const type = this.data.characterReferenceType;
		let value;
		if (type) {
			value = /* @__PURE__ */ decodeNumericCharacterReference(data$2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
			this.data.characterReferenceType = void 0;
		} else value = /* @__PURE__ */ decodeNamedCharacterReference(data$2);
		const tail = this.stack[this.stack.length - 1];
		tail.value += value;
	}
	function onexitcharacterreference(token) {
		const tail = /* @__PURE__ */ this.stack.pop();
		tail.position.end = /* @__PURE__ */ point$1(token.end);
	}
	function onexitautolinkprotocol(token) {
		onexitdata.call(this, token);
		const node$1 = this.stack[this.stack.length - 1];
		node$1.url = /* @__PURE__ */ this.sliceSerialize(token);
	}
	function onexitautolinkemail(token) {
		onexitdata.call(this, token);
		const node$1 = this.stack[this.stack.length - 1];
		node$1.url = "mailto:" + this.sliceSerialize(token);
	}
	function blockQuote$1() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function codeFlow() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function codeText$1() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function definition$1() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function emphasis$1() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function heading$1() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function hardBreak$1() {
		return { type: "break" };
	}
	function html$3() {
		return {
			type: "html",
			value: ""
		};
	}
	function image$1() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function link$1() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function list$2(token) {
		return {
			type: "list",
			ordered: token.type === "listOrdered",
			start: null,
			spread: token._spread,
			children: []
		};
	}
	function listItem$1(token) {
		return {
			type: "listItem",
			spread: token._spread,
			checked: null,
			children: []
		};
	}
	function paragraph$1() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function strong$1() {
		return {
			type: "strong",
			children: []
		};
	}
	function text$5() {
		return {
			type: "text",
			value: ""
		};
	}
	function thematicBreak$2() {
		return { type: "thematicBreak" };
	}
}
function point$1(d) {
	return {
		line: d.line,
		column: d.column,
		offset: d.offset
	};
}
function configure(combined, extensions) {
	let index$1 = -1;
	while (++index$1 < extensions.length) {
		const value = extensions[index$1];
		if (Array.isArray(value)) configure(combined, value);
		else extension(combined, value);
	}
}
function extension(combined, extension$1) {
	let key;
	for (key in extension$1) if (own$3.call(extension$1, key)) switch (key) {
		case "canContainEols": {
			const right = extension$1[key];
			if (right) combined[key].push(...right);
			break;
		}
		case "transforms": {
			const right = extension$1[key];
			if (right) combined[key].push(...right);
			break;
		}
		case "enter":
		case "exit": {
			const right = extension$1[key];
			if (right) Object.assign(combined[key], right);
			break;
		}
	}
}
function defaultOnError(left, right) {
	if (left) throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
		start: left.start,
		end: left.end
	}) + "): a different token (`" + right.type + "`, " + stringifyPosition({
		start: right.start,
		end: right.end
	}) + ") is open");
	else throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
		start: right.start,
		end: right.end
	}) + ") is still open");
}
function ccount(value, character) {
	const source = /* @__PURE__ */ String(value);
	if (typeof character !== "string") throw new TypeError("Expected character");
	let count = 0;
	let index$1 = /* @__PURE__ */ source.indexOf(character);
	while (index$1 !== -1) {
		count++;
		index$1 = /* @__PURE__ */ source.indexOf(character, index$1 + character.length);
	}
	return count;
}
function escapeStringRegexp(string$3) {
	if (typeof string$3 !== "string") throw new TypeError("Expected a string");
	return string$3.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const convert = function(test) {
	if (test === null || test === void 0) return ok$1;
	if (typeof test === "function") return castFactory(test);
	if (typeof test === "object") return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
	if (typeof test === "string") return typeFactory(test);
	throw new Error("Expected function, string, or object as test");
};
function anyFactory(tests) {
	const checks$1 = [];
	let index$1 = -1;
	while (++index$1 < tests.length) checks$1[index$1] = /* @__PURE__ */ convert(tests[index$1]);
	return castFactory(any$1);
	function any$1(...parameters) {
		let index$2 = -1;
		while (++index$2 < checks$1.length) if (checks$1[index$2].apply(this, parameters)) return true;
		return false;
	}
}
function propsFactory(check) {
	const checkAsRecord = check;
	return castFactory(all$1);
	function all$1(node$1) {
		const nodeAsRecord = node$1;
		let key;
		for (key in check) if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
		return true;
	}
}
function typeFactory(check) {
	return castFactory(type);
	function type(node$1) {
		return node$1 && node$1.type === check;
	}
}
function castFactory(testFunction) {
	return check;
	function check(value, index$1, parent) {
		return Boolean(looksLikeANode(value) && testFunction.call(this, value, typeof index$1 === "number" ? index$1 : void 0, parent || void 0));
	}
}
function ok$1() {
	return true;
}
function looksLikeANode(value) {
	return value !== null && typeof value === "object" && "type" in value;
}
function color(d) {
	return d;
}
var empty$1 = [];
function visitParents(tree, test, visitor, reverse) {
	let check;
	if (typeof test === "function" && typeof visitor !== "function") {
		reverse = visitor;
		visitor = test;
	} else check = test;
	const is = /* @__PURE__ */ convert(check);
	const step = reverse ? -1 : 1;
	factory(tree, void 0, [])();
	function factory(node$1, index$1, parents) {
		const value = node$1 && typeof node$1 === "object" ? node$1 : {};
		if (typeof value.type === "string") {
			const name$1 = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
			Object.defineProperty(visit$1, "name", { value: "node (" + color(node$1.type + (name$1 ? "<" + name$1 + ">" : "")) + ")" });
		}
		return visit$1;
		function visit$1() {
			let result = empty$1;
			let subresult;
			let offset;
			let grandparents;
			if (!test || is(node$1, index$1, parents[parents.length - 1] || void 0)) {
				result = /* @__PURE__ */ toResult(/* @__PURE__ */ visitor(node$1, parents));
				if (result[0] === false) return result;
			}
			if ("children" in node$1 && node$1.children) {
				const nodeAsParent = node$1;
				if (nodeAsParent.children && result[0] !== "skip") {
					offset = (reverse ? nodeAsParent.children.length : -1) + step;
					grandparents = /* @__PURE__ */ parents.concat(nodeAsParent);
					while (offset > -1 && offset < nodeAsParent.children.length) {
						const child = nodeAsParent.children[offset];
						subresult = /* @__PURE__ */ factory(child, offset, grandparents)();
						if (subresult[0] === false) return subresult;
						offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
					}
				}
			}
			return result;
		}
	}
}
function toResult(value) {
	if (Array.isArray(value)) return value;
	if (typeof value === "number") return [true, value];
	return value === null || value === void 0 ? empty$1 : [value];
}
function findAndReplace(tree, list$2, options) {
	const ignored = /* @__PURE__ */ convert((options || {}).ignore || []);
	const pairs = /* @__PURE__ */ toPairs(list$2);
	let pairIndex = -1;
	while (++pairIndex < pairs.length) visitParents(tree, "text", visitor);
	function visitor(node$1, parents) {
		let index$1 = -1;
		let grandparent;
		while (++index$1 < parents.length) {
			const parent = parents[index$1];
			const siblings = grandparent ? grandparent.children : void 0;
			if (ignored(parent, siblings ? siblings.indexOf(parent) : void 0, grandparent)) return;
			grandparent = parent;
		}
		if (grandparent) return handler(node$1, parents);
	}
	function handler(node$1, parents) {
		const parent = parents[parents.length - 1];
		const find$1 = pairs[pairIndex][0];
		const replace$1 = pairs[pairIndex][1];
		let start = 0;
		const index$1 = /* @__PURE__ */ parent.children.indexOf(node$1);
		let change = false;
		let nodes = [];
		find$1.lastIndex = 0;
		let match = /* @__PURE__ */ find$1.exec(node$1.value);
		while (match) {
			const position$2 = match.index;
			const matchObject = {
				index: match.index,
				input: match.input,
				stack: [...parents, node$1]
			};
			let value = /* @__PURE__ */ replace$1(...match, matchObject);
			if (typeof value === "string") value = value.length > 0 ? {
				type: "text",
				value
			} : void 0;
			if (value === false) find$1.lastIndex = position$2 + 1;
			else {
				if (start !== position$2) nodes.push({
					type: "text",
					value: /* @__PURE__ */ node$1.value.slice(start, position$2)
				});
				if (Array.isArray(value)) nodes.push(...value);
				else if (value) nodes.push(value);
				start = position$2 + match[0].length;
				change = true;
			}
			if (!find$1.global) break;
			match = /* @__PURE__ */ find$1.exec(node$1.value);
		}
		if (change) {
			if (start < node$1.value.length) nodes.push({
				type: "text",
				value: /* @__PURE__ */ node$1.value.slice(start)
			});
			parent.children.splice(index$1, 1, ...nodes);
		} else nodes = [node$1];
		return index$1 + nodes.length;
	}
}
function toPairs(tupleOrList) {
	const result = [];
	if (!Array.isArray(tupleOrList)) throw new TypeError("Expected find and replace tuple or list of tuples");
	const list$2 = !tupleOrList[0] || Array.isArray(tupleOrList[0]) ? tupleOrList : [tupleOrList];
	let index$1 = -1;
	while (++index$1 < list$2.length) {
		const tuple = list$2[index$1];
		result.push([/* @__PURE__ */ toExpression(tuple[0]), /* @__PURE__ */ toFunction(tuple[1])]);
	}
	return result;
}
function toExpression(find$1) {
	return typeof find$1 === "string" ? new RegExp(escapeStringRegexp(find$1), "g") : find$1;
}
function toFunction(replace$1) {
	return typeof replace$1 === "function" ? replace$1 : function() {
		return replace$1;
	};
}
function gfmAutolinkLiteralFromMarkdown() {
	return {
		transforms: [transformGfmAutolinkLiterals],
		enter: {
			literalAutolink: enterLiteralAutolink,
			literalAutolinkEmail: enterLiteralAutolinkValue,
			literalAutolinkHttp: enterLiteralAutolinkValue,
			literalAutolinkWww: enterLiteralAutolinkValue
		},
		exit: {
			literalAutolink: exitLiteralAutolink,
			literalAutolinkEmail: exitLiteralAutolinkEmail,
			literalAutolinkHttp: exitLiteralAutolinkHttp,
			literalAutolinkWww: exitLiteralAutolinkWww
		}
	};
}
function enterLiteralAutolink(token) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, token);
}
function enterLiteralAutolinkValue(token) {
	this.config.enter.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkHttp(token) {
	this.config.exit.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkWww(token) {
	this.config.exit.data.call(this, token);
	const node$1 = this.stack[this.stack.length - 1];
	node$1.type;
	node$1.url = "http://" + this.sliceSerialize(token);
}
function exitLiteralAutolinkEmail(token) {
	this.config.exit.autolinkEmail.call(this, token);
}
function exitLiteralAutolink(token) {
	this.exit(token);
}
function transformGfmAutolinkLiterals(tree) {
	findAndReplace(tree, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, findEmail]], { ignore: ["link", "linkReference"] });
}
function findUrl(_, protocol, domain$1, path$1, match) {
	let prefix = "";
	if (!previous$1(match)) return false;
	if (/^w/i.test(protocol)) {
		domain$1 = protocol + domain$1;
		protocol = "";
		prefix = "http://";
	}
	if (!isCorrectDomain(domain$1)) return false;
	const parts = /* @__PURE__ */ splitUrl(domain$1 + path$1);
	if (!parts[0]) return false;
	const result = {
		type: "link",
		title: null,
		url: prefix + protocol + parts[0],
		children: [{
			type: "text",
			value: protocol + parts[0]
		}]
	};
	if (parts[1]) return [result, {
		type: "text",
		value: parts[1]
	}];
	return result;
}
function findEmail(_, atext, label$3, match) {
	if (!previous$1(match, true) || /[-\d_]$/.test(label$3)) return false;
	return {
		type: "link",
		title: null,
		url: "mailto:" + atext + "@" + label$3,
		children: [{
			type: "text",
			value: atext + "@" + label$3
		}]
	};
}
function isCorrectDomain(domain$1) {
	const parts = /* @__PURE__ */ domain$1.split(".");
	if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) return false;
	return true;
}
function splitUrl(url) {
	const trailExec = /* @__PURE__ */ /[!"&'),.:;<>?\]}]+$/.exec(url);
	if (!trailExec) return [url, void 0];
	url = /* @__PURE__ */ url.slice(0, trailExec.index);
	let trail$1 = trailExec[0];
	let closingParenIndex = /* @__PURE__ */ trail$1.indexOf(")");
	const openingParens = /* @__PURE__ */ ccount(url, "(");
	let closingParens = /* @__PURE__ */ ccount(url, ")");
	while (closingParenIndex !== -1 && openingParens > closingParens) {
		url += /* @__PURE__ */ trail$1.slice(0, closingParenIndex + 1);
		trail$1 = /* @__PURE__ */ trail$1.slice(closingParenIndex + 1);
		closingParenIndex = /* @__PURE__ */ trail$1.indexOf(")");
		closingParens++;
	}
	return [url, trail$1];
}
function previous$1(match, email) {
	const code$2 = /* @__PURE__ */ match.input.charCodeAt(match.index - 1);
	return (match.index === 0 || unicodeWhitespace(code$2) || unicodePunctuation(code$2)) && (!email || code$2 !== 47);
}
footnoteReference$1.peek = footnoteReferencePeek;
function enterFootnoteCallString() {
	this.buffer();
}
function enterFootnoteCall(token) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, token);
}
function enterFootnoteDefinitionLabelString() {
	this.buffer();
}
function enterFootnoteDefinition(token) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, token);
}
function exitFootnoteCallString(token) {
	const label$3 = /* @__PURE__ */ this.resume();
	const node$1 = this.stack[this.stack.length - 1];
	node$1.type;
	node$1.identifier = /* @__PURE__ */ normalizeIdentifier(/* @__PURE__ */ this.sliceSerialize(token)).toLowerCase();
	node$1.label = label$3;
}
function exitFootnoteCall(token) {
	this.exit(token);
}
function exitFootnoteDefinitionLabelString(token) {
	const label$3 = /* @__PURE__ */ this.resume();
	const node$1 = this.stack[this.stack.length - 1];
	node$1.type;
	node$1.identifier = /* @__PURE__ */ normalizeIdentifier(/* @__PURE__ */ this.sliceSerialize(token)).toLowerCase();
	node$1.label = label$3;
}
function exitFootnoteDefinition(token) {
	this.exit(token);
}
function footnoteReferencePeek() {
	return "[";
}
function footnoteReference$1(node$1, _, state, info) {
	const tracker = /* @__PURE__ */ state.createTracker(info);
	let value = /* @__PURE__ */ tracker.move("[^");
	const exit$3 = /* @__PURE__ */ state.enter("footnoteReference");
	const subexit = /* @__PURE__ */ state.enter("reference");
	value += /* @__PURE__ */ tracker.move(/* @__PURE__ */ state.safe(/* @__PURE__ */ state.associationId(node$1), {
		after: "]",
		before: value
	}));
	subexit();
	exit$3();
	value += /* @__PURE__ */ tracker.move("]");
	return value;
}
function gfmFootnoteFromMarkdown() {
	return {
		enter: {
			gfmFootnoteCallString: enterFootnoteCallString,
			gfmFootnoteCall: enterFootnoteCall,
			gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
			gfmFootnoteDefinition: enterFootnoteDefinition
		},
		exit: {
			gfmFootnoteCallString: exitFootnoteCallString,
			gfmFootnoteCall: exitFootnoteCall,
			gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
			gfmFootnoteDefinition: exitFootnoteDefinition
		}
	};
}
handleDelete.peek = peekDelete;
function gfmStrikethroughFromMarkdown() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: enterStrikethrough },
		exit: { strikethrough: exitStrikethrough }
	};
}
function enterStrikethrough(token) {
	this.enter({
		type: "delete",
		children: []
	}, token);
}
function exitStrikethrough(token) {
	this.exit(token);
}
function handleDelete(node$1, _, state, info) {
	const tracker = /* @__PURE__ */ state.createTracker(info);
	const exit$3 = /* @__PURE__ */ state.enter("strikethrough");
	let value = /* @__PURE__ */ tracker.move("~~");
	value += /* @__PURE__ */ state.containerPhrasing(node$1, {
		...tracker.current(),
		before: value,
		after: "~"
	});
	value += /* @__PURE__ */ tracker.move("~~");
	exit$3();
	return value;
}
function peekDelete() {
	return "~";
}
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
	let reverse;
	let test;
	let visitor;
	if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
		test = void 0;
		visitor = testOrVisitor;
		reverse = visitorOrReverse;
	} else {
		test = testOrVisitor;
		visitor = visitorOrReverse;
		reverse = maybeReverse;
	}
	visitParents(tree, test, overload, reverse);
	function overload(node$1, parents) {
		const parent = parents[parents.length - 1];
		const index$1 = parent ? parent.children.indexOf(node$1) : void 0;
		return visitor(node$1, index$1, parent);
	}
}
function gfmTableFromMarkdown() {
	return {
		enter: {
			table: enterTable,
			tableData: enterCell,
			tableHeader: enterCell,
			tableRow: enterRow
		},
		exit: {
			codeText: exitCodeText,
			table: exitTable,
			tableData: exit$1,
			tableHeader: exit$1,
			tableRow: exit$1
		}
	};
}
function enterTable(token) {
	const align = token._align;
	this.enter({
		type: "table",
		align: /* @__PURE__ */ align.map(function(d) {
			return d === "none" ? null : d;
		}),
		children: []
	}, token);
	this.data.inTable = true;
}
function exitTable(token) {
	this.exit(token);
	this.data.inTable = void 0;
}
function enterRow(token) {
	this.enter({
		type: "tableRow",
		children: []
	}, token);
}
function exit$1(token) {
	this.exit(token);
}
function enterCell(token) {
	this.enter({
		type: "tableCell",
		children: []
	}, token);
}
function exitCodeText(token) {
	let value = /* @__PURE__ */ this.resume();
	if (this.data.inTable) value = /* @__PURE__ */ value.replace(/\\([\\|])/g, replace);
	const node$1 = this.stack[this.stack.length - 1];
	node$1.type;
	node$1.value = value;
	this.exit(token);
}
function replace($0, $1) {
	return $1 === "|" ? $1 : $0;
}
function gfmTaskListItemFromMarkdown() {
	return { exit: {
		taskListCheckValueChecked: exitCheck,
		taskListCheckValueUnchecked: exitCheck,
		paragraph: exitParagraphWithTaskListItem
	} };
}
function exitCheck(token) {
	const node$1 = this.stack[this.stack.length - 2];
	node$1.type;
	node$1.checked = token.type === "taskListCheckValueChecked";
}
function exitParagraphWithTaskListItem(token) {
	const parent = this.stack[this.stack.length - 2];
	if (parent && parent.type === "listItem" && typeof parent.checked === "boolean") {
		const node$1 = this.stack[this.stack.length - 1];
		node$1.type;
		const head = node$1.children[0];
		if (head && head.type === "text") {
			const siblings = parent.children;
			let index$1 = -1;
			let firstParaghraph;
			while (++index$1 < siblings.length) {
				const sibling = siblings[index$1];
				if (sibling.type === "paragraph") {
					firstParaghraph = sibling;
					break;
				}
			}
			if (firstParaghraph === node$1) {
				head.value = /* @__PURE__ */ head.value.slice(1);
				if (head.value.length === 0) node$1.children.shift();
				else if (node$1.position && head.position && typeof head.position.start.offset === "number") {
					head.position.start.column++;
					head.position.start.offset++;
					node$1.position.start = /* @__PURE__ */ Object.assign({}, head.position.start);
				}
			}
		}
	}
	this.exit(token);
}
function gfmFromMarkdown() {
	return [
		/* @__PURE__ */ gfmAutolinkLiteralFromMarkdown(),
		/* @__PURE__ */ gfmFootnoteFromMarkdown(),
		/* @__PURE__ */ gfmStrikethroughFromMarkdown(),
		/* @__PURE__ */ gfmTableFromMarkdown(),
		/* @__PURE__ */ gfmTaskListItemFromMarkdown()
	];
}
var wwwPrefix = {
	tokenize: tokenizeWwwPrefix,
	partial: true
};
var domain = {
	tokenize: tokenizeDomain,
	partial: true
};
var path = {
	tokenize: tokenizePath,
	partial: true
};
var trail = {
	tokenize: tokenizeTrail,
	partial: true
};
var emailDomainDotTrail = {
	tokenize: tokenizeEmailDomainDotTrail,
	partial: true
};
var wwwAutolink = {
	name: "wwwAutolink",
	tokenize: tokenizeWwwAutolink,
	previous: previousWww
};
var protocolAutolink = {
	name: "protocolAutolink",
	tokenize: tokenizeProtocolAutolink,
	previous: previousProtocol
};
var emailAutolink = {
	name: "emailAutolink",
	tokenize: tokenizeEmailAutolink,
	previous: previousEmail
};
var text$2 = {};
function gfmAutolinkLiteral() {
	return { text: text$2 };
}
var code$1 = 48;
while (code$1 < 123) {
	text$2[code$1] = emailAutolink;
	code$1++;
	if (code$1 === 58) code$1 = 65;
	else if (code$1 === 91) code$1 = 97;
}
text$2[43] = emailAutolink;
text$2[45] = emailAutolink;
text$2[46] = emailAutolink;
text$2[95] = emailAutolink;
text$2[72] = [emailAutolink, protocolAutolink];
text$2[104] = [emailAutolink, protocolAutolink];
text$2[87] = [emailAutolink, wwwAutolink];
text$2[119] = [emailAutolink, wwwAutolink];
function tokenizeEmailAutolink(effects, ok$2, nok) {
	const self$1 = this;
	let dot;
	let data$1;
	return start;
	function start(code$2) {
		if (!gfmAtext(code$2) || !previousEmail.call(self$1, self$1.previous) || previousUnbalanced(self$1.events)) return nok(code$2);
		effects.enter("literalAutolink");
		effects.enter("literalAutolinkEmail");
		return atext(code$2);
	}
	function atext(code$2) {
		if (gfmAtext(code$2)) {
			effects.consume(code$2);
			return atext;
		}
		if (code$2 === 64) {
			effects.consume(code$2);
			return emailDomain;
		}
		return nok(code$2);
	}
	function emailDomain(code$2) {
		if (code$2 === 46) return effects.check(emailDomainDotTrail, emailDomainAfter, emailDomainDot)(code$2);
		if (code$2 === 45 || code$2 === 95 || asciiAlphanumeric(code$2)) {
			data$1 = true;
			effects.consume(code$2);
			return emailDomain;
		}
		return emailDomainAfter(code$2);
	}
	function emailDomainDot(code$2) {
		effects.consume(code$2);
		dot = true;
		return emailDomain;
	}
	function emailDomainAfter(code$2) {
		if (data$1 && dot && asciiAlpha(self$1.previous)) {
			effects.exit("literalAutolinkEmail");
			effects.exit("literalAutolink");
			return ok$2(code$2);
		}
		return nok(code$2);
	}
}
function tokenizeWwwAutolink(effects, ok$2, nok) {
	const self$1 = this;
	return wwwStart;
	function wwwStart(code$2) {
		if (code$2 !== 87 && code$2 !== 119 || !previousWww.call(self$1, self$1.previous) || previousUnbalanced(self$1.events)) return nok(code$2);
		effects.enter("literalAutolink");
		effects.enter("literalAutolinkWww");
		return effects.check(wwwPrefix, /* @__PURE__ */ effects.attempt(domain, /* @__PURE__ */ effects.attempt(path, wwwAfter), nok), nok)(code$2);
	}
	function wwwAfter(code$2) {
		effects.exit("literalAutolinkWww");
		effects.exit("literalAutolink");
		return ok$2(code$2);
	}
}
function tokenizeProtocolAutolink(effects, ok$2, nok) {
	const self$1 = this;
	let buffer = "";
	let seen = false;
	return protocolStart;
	function protocolStart(code$2) {
		if ((code$2 === 72 || code$2 === 104) && previousProtocol.call(self$1, self$1.previous) && !previousUnbalanced(self$1.events)) {
			effects.enter("literalAutolink");
			effects.enter("literalAutolinkHttp");
			buffer += /* @__PURE__ */ String.fromCodePoint(code$2);
			effects.consume(code$2);
			return protocolPrefixInside;
		}
		return nok(code$2);
	}
	function protocolPrefixInside(code$2) {
		if (asciiAlpha(code$2) && buffer.length < 5) {
			buffer += /* @__PURE__ */ String.fromCodePoint(code$2);
			effects.consume(code$2);
			return protocolPrefixInside;
		}
		if (code$2 === 58) {
			const protocol = /* @__PURE__ */ buffer.toLowerCase();
			if (protocol === "http" || protocol === "https") {
				effects.consume(code$2);
				return protocolSlashesInside;
			}
		}
		return nok(code$2);
	}
	function protocolSlashesInside(code$2) {
		if (code$2 === 47) {
			effects.consume(code$2);
			if (seen) return afterProtocol;
			seen = true;
			return protocolSlashesInside;
		}
		return nok(code$2);
	}
	function afterProtocol(code$2) {
		return code$2 === null || asciiControl(code$2) || markdownLineEndingOrSpace(code$2) || unicodeWhitespace(code$2) || unicodePunctuation(code$2) ? nok(code$2) : effects.attempt(domain, /* @__PURE__ */ effects.attempt(path, protocolAfter), nok)(code$2);
	}
	function protocolAfter(code$2) {
		effects.exit("literalAutolinkHttp");
		effects.exit("literalAutolink");
		return ok$2(code$2);
	}
}
function tokenizeWwwPrefix(effects, ok$2, nok) {
	let size$1 = 0;
	return wwwPrefixInside;
	function wwwPrefixInside(code$2) {
		if ((code$2 === 87 || code$2 === 119) && size$1 < 3) {
			size$1++;
			effects.consume(code$2);
			return wwwPrefixInside;
		}
		if (code$2 === 46 && size$1 === 3) {
			effects.consume(code$2);
			return wwwPrefixAfter;
		}
		return nok(code$2);
	}
	function wwwPrefixAfter(code$2) {
		return code$2 === null ? nok(code$2) : ok$2(code$2);
	}
}
function tokenizeDomain(effects, ok$2, nok) {
	let underscoreInLastSegment;
	let underscoreInLastLastSegment;
	let seen;
	return domainInside;
	function domainInside(code$2) {
		if (code$2 === 46 || code$2 === 95) return effects.check(trail, domainAfter, domainAtPunctuation)(code$2);
		if (code$2 === null || markdownLineEndingOrSpace(code$2) || unicodeWhitespace(code$2) || code$2 !== 45 && unicodePunctuation(code$2)) return domainAfter(code$2);
		seen = true;
		effects.consume(code$2);
		return domainInside;
	}
	function domainAtPunctuation(code$2) {
		if (code$2 === 95) underscoreInLastSegment = true;
		else {
			underscoreInLastLastSegment = underscoreInLastSegment;
			underscoreInLastSegment = void 0;
		}
		effects.consume(code$2);
		return domainInside;
	}
	function domainAfter(code$2) {
		if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) return nok(code$2);
		return ok$2(code$2);
	}
}
function tokenizePath(effects, ok$2) {
	let sizeOpen = 0;
	let sizeClose = 0;
	return pathInside;
	function pathInside(code$2) {
		if (code$2 === 40) {
			sizeOpen++;
			effects.consume(code$2);
			return pathInside;
		}
		if (code$2 === 41 && sizeClose < sizeOpen) return pathAtPunctuation(code$2);
		if (code$2 === 33 || code$2 === 34 || code$2 === 38 || code$2 === 39 || code$2 === 41 || code$2 === 42 || code$2 === 44 || code$2 === 46 || code$2 === 58 || code$2 === 59 || code$2 === 60 || code$2 === 63 || code$2 === 93 || code$2 === 95 || code$2 === 126) return effects.check(trail, ok$2, pathAtPunctuation)(code$2);
		if (code$2 === null || markdownLineEndingOrSpace(code$2) || unicodeWhitespace(code$2)) return ok$2(code$2);
		effects.consume(code$2);
		return pathInside;
	}
	function pathAtPunctuation(code$2) {
		if (code$2 === 41) sizeClose++;
		effects.consume(code$2);
		return pathInside;
	}
}
function tokenizeTrail(effects, ok$2, nok) {
	return trail$1;
	function trail$1(code$2) {
		if (code$2 === 33 || code$2 === 34 || code$2 === 39 || code$2 === 41 || code$2 === 42 || code$2 === 44 || code$2 === 46 || code$2 === 58 || code$2 === 59 || code$2 === 63 || code$2 === 95 || code$2 === 126) {
			effects.consume(code$2);
			return trail$1;
		}
		if (code$2 === 38) {
			effects.consume(code$2);
			return trailCharacterReferenceStart;
		}
		if (code$2 === 93) {
			effects.consume(code$2);
			return trailBracketAfter;
		}
		if (code$2 === 60 || code$2 === null || markdownLineEndingOrSpace(code$2) || unicodeWhitespace(code$2)) return ok$2(code$2);
		return nok(code$2);
	}
	function trailBracketAfter(code$2) {
		if (code$2 === null || code$2 === 40 || code$2 === 91 || markdownLineEndingOrSpace(code$2) || unicodeWhitespace(code$2)) return ok$2(code$2);
		return trail$1(code$2);
	}
	function trailCharacterReferenceStart(code$2) {
		return asciiAlpha(code$2) ? trailCharacterReferenceInside(code$2) : nok(code$2);
	}
	function trailCharacterReferenceInside(code$2) {
		if (code$2 === 59) {
			effects.consume(code$2);
			return trail$1;
		}
		if (asciiAlpha(code$2)) {
			effects.consume(code$2);
			return trailCharacterReferenceInside;
		}
		return nok(code$2);
	}
}
function tokenizeEmailDomainDotTrail(effects, ok$2, nok) {
	return start;
	function start(code$2) {
		effects.consume(code$2);
		return after;
	}
	function after(code$2) {
		return asciiAlphanumeric(code$2) ? nok(code$2) : ok$2(code$2);
	}
}
function previousWww(code$2) {
	return code$2 === null || code$2 === 40 || code$2 === 42 || code$2 === 95 || code$2 === 91 || code$2 === 93 || code$2 === 126 || markdownLineEndingOrSpace(code$2);
}
function previousProtocol(code$2) {
	return !asciiAlpha(code$2);
}
function previousEmail(code$2) {
	return !(code$2 === 47 || gfmAtext(code$2));
}
function gfmAtext(code$2) {
	return code$2 === 43 || code$2 === 45 || code$2 === 46 || code$2 === 95 || asciiAlphanumeric(code$2);
}
function previousUnbalanced(events) {
	let index$1 = events.length;
	let result = false;
	while (index$1--) {
		const token = events[index$1][1];
		if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
			result = true;
			break;
		}
		if (token._gfmAutolinkLiteralWalkedInto) {
			result = false;
			break;
		}
	}
	if (events.length > 0 && !result) events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
	return result;
}
var indent = {
	tokenize: tokenizeIndent,
	partial: true
};
function gfmFootnote() {
	return {
		document: { [91]: {
			name: "gfmFootnoteDefinition",
			tokenize: tokenizeDefinitionStart,
			continuation: { tokenize: tokenizeDefinitionContinuation },
			exit: gfmFootnoteDefinitionEnd
		} },
		text: {
			[91]: {
				name: "gfmFootnoteCall",
				tokenize: tokenizeGfmFootnoteCall
			},
			[93]: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: tokenizePotentialGfmFootnoteCall,
				resolveTo: resolveToPotentialGfmFootnoteCall
			}
		}
	};
}
function tokenizePotentialGfmFootnoteCall(effects, ok$2, nok) {
	const self$1 = this;
	let index$1 = self$1.events.length;
	const defined = self$1.parser.gfmFootnotes || (self$1.parser.gfmFootnotes = []);
	let labelStart;
	while (index$1--) {
		const token = self$1.events[index$1][1];
		if (token.type === "labelImage") {
			labelStart = token;
			break;
		}
		if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") break;
	}
	return start;
	function start(code$2) {
		if (!labelStart || !labelStart._balanced) return nok(code$2);
		const id = /* @__PURE__ */ normalizeIdentifier(/* @__PURE__ */ self$1.sliceSerialize({
			start: labelStart.end,
			end: /* @__PURE__ */ self$1.now()
		}));
		if (id.codePointAt(0) !== 94 || !defined.includes(/* @__PURE__ */ id.slice(1))) return nok(code$2);
		effects.enter("gfmFootnoteCallLabelMarker");
		effects.consume(code$2);
		effects.exit("gfmFootnoteCallLabelMarker");
		return ok$2(code$2);
	}
}
function resolveToPotentialGfmFootnoteCall(events, context) {
	let index$1 = events.length;
	while (index$1--) if (events[index$1][1].type === "labelImage" && events[index$1][0] === "enter") {
		events[index$1][1];
		break;
	}
	events[index$1 + 1][1].type = "data";
	events[index$1 + 3][1].type = "gfmFootnoteCallLabelMarker";
	const call = {
		type: "gfmFootnoteCall",
		start: /* @__PURE__ */ Object.assign({}, events[index$1 + 3][1].start),
		end: /* @__PURE__ */ Object.assign({}, events[events.length - 1][1].end)
	};
	const marker = {
		type: "gfmFootnoteCallMarker",
		start: /* @__PURE__ */ Object.assign({}, events[index$1 + 3][1].end),
		end: /* @__PURE__ */ Object.assign({}, events[index$1 + 3][1].end)
	};
	marker.end.column++;
	marker.end.offset++;
	marker.end._bufferIndex++;
	const string$3 = {
		type: "gfmFootnoteCallString",
		start: /* @__PURE__ */ Object.assign({}, marker.end),
		end: /* @__PURE__ */ Object.assign({}, events[events.length - 1][1].start)
	};
	const chunk = {
		type: "chunkString",
		contentType: "string",
		start: /* @__PURE__ */ Object.assign({}, string$3.start),
		end: /* @__PURE__ */ Object.assign({}, string$3.end)
	};
	const replacement = [
		events[index$1 + 1],
		events[index$1 + 2],
		[
			"enter",
			call,
			context
		],
		events[index$1 + 3],
		events[index$1 + 4],
		[
			"enter",
			marker,
			context
		],
		[
			"exit",
			marker,
			context
		],
		[
			"enter",
			string$3,
			context
		],
		[
			"enter",
			chunk,
			context
		],
		[
			"exit",
			chunk,
			context
		],
		[
			"exit",
			string$3,
			context
		],
		events[events.length - 2],
		events[events.length - 1],
		[
			"exit",
			call,
			context
		]
	];
	events.splice(index$1, events.length - index$1 + 1, ...replacement);
	return events;
}
function tokenizeGfmFootnoteCall(effects, ok$2, nok) {
	const self$1 = this;
	const defined = self$1.parser.gfmFootnotes || (self$1.parser.gfmFootnotes = []);
	let size$1 = 0;
	let data$1;
	return start;
	function start(code$2) {
		effects.enter("gfmFootnoteCall");
		effects.enter("gfmFootnoteCallLabelMarker");
		effects.consume(code$2);
		effects.exit("gfmFootnoteCallLabelMarker");
		return callStart;
	}
	function callStart(code$2) {
		if (code$2 !== 94) return nok(code$2);
		effects.enter("gfmFootnoteCallMarker");
		effects.consume(code$2);
		effects.exit("gfmFootnoteCallMarker");
		effects.enter("gfmFootnoteCallString");
		effects.enter("chunkString").contentType = "string";
		return callData;
	}
	function callData(code$2) {
		if (size$1 > 999 || code$2 === 93 && !data$1 || code$2 === null || code$2 === 91 || markdownLineEndingOrSpace(code$2)) return nok(code$2);
		if (code$2 === 93) {
			effects.exit("chunkString");
			const token = /* @__PURE__ */ effects.exit("gfmFootnoteCallString");
			if (!defined.includes(/* @__PURE__ */ normalizeIdentifier(/* @__PURE__ */ self$1.sliceSerialize(token)))) return nok(code$2);
			effects.enter("gfmFootnoteCallLabelMarker");
			effects.consume(code$2);
			effects.exit("gfmFootnoteCallLabelMarker");
			effects.exit("gfmFootnoteCall");
			return ok$2;
		}
		if (!markdownLineEndingOrSpace(code$2)) data$1 = true;
		size$1++;
		effects.consume(code$2);
		return code$2 === 92 ? callEscape : callData;
	}
	function callEscape(code$2) {
		if (code$2 === 91 || code$2 === 92 || code$2 === 93) {
			effects.consume(code$2);
			size$1++;
			return callData;
		}
		return callData(code$2);
	}
}
function tokenizeDefinitionStart(effects, ok$2, nok) {
	const self$1 = this;
	const defined = self$1.parser.gfmFootnotes || (self$1.parser.gfmFootnotes = []);
	let identifier;
	let size$1 = 0;
	let data$1;
	return start;
	function start(code$2) {
		effects.enter("gfmFootnoteDefinition")._container = true;
		effects.enter("gfmFootnoteDefinitionLabel");
		effects.enter("gfmFootnoteDefinitionLabelMarker");
		effects.consume(code$2);
		effects.exit("gfmFootnoteDefinitionLabelMarker");
		return labelAtMarker;
	}
	function labelAtMarker(code$2) {
		if (code$2 === 94) {
			effects.enter("gfmFootnoteDefinitionMarker");
			effects.consume(code$2);
			effects.exit("gfmFootnoteDefinitionMarker");
			effects.enter("gfmFootnoteDefinitionLabelString");
			effects.enter("chunkString").contentType = "string";
			return labelInside;
		}
		return nok(code$2);
	}
	function labelInside(code$2) {
		if (size$1 > 999 || code$2 === 93 && !data$1 || code$2 === null || code$2 === 91 || markdownLineEndingOrSpace(code$2)) return nok(code$2);
		if (code$2 === 93) {
			effects.exit("chunkString");
			const token = /* @__PURE__ */ effects.exit("gfmFootnoteDefinitionLabelString");
			identifier = /* @__PURE__ */ normalizeIdentifier(/* @__PURE__ */ self$1.sliceSerialize(token));
			effects.enter("gfmFootnoteDefinitionLabelMarker");
			effects.consume(code$2);
			effects.exit("gfmFootnoteDefinitionLabelMarker");
			effects.exit("gfmFootnoteDefinitionLabel");
			return labelAfter;
		}
		if (!markdownLineEndingOrSpace(code$2)) data$1 = true;
		size$1++;
		effects.consume(code$2);
		return code$2 === 92 ? labelEscape : labelInside;
	}
	function labelEscape(code$2) {
		if (code$2 === 91 || code$2 === 92 || code$2 === 93) {
			effects.consume(code$2);
			size$1++;
			return labelInside;
		}
		return labelInside(code$2);
	}
	function labelAfter(code$2) {
		if (code$2 === 58) {
			effects.enter("definitionMarker");
			effects.consume(code$2);
			effects.exit("definitionMarker");
			if (!defined.includes(identifier)) defined.push(identifier);
			return factorySpace(effects, whitespaceAfter, "gfmFootnoteDefinitionWhitespace");
		}
		return nok(code$2);
	}
	function whitespaceAfter(code$2) {
		return ok$2(code$2);
	}
}
function tokenizeDefinitionContinuation(effects, ok$2, nok) {
	return effects.check(blankLine, ok$2, /* @__PURE__ */ effects.attempt(indent, ok$2, nok));
}
function gfmFootnoteDefinitionEnd(effects) {
	effects.exit("gfmFootnoteDefinition");
}
function tokenizeIndent(effects, ok$2, nok) {
	const self$1 = this;
	return factorySpace(effects, afterPrefix, "gfmFootnoteDefinitionIndent", 5);
	function afterPrefix(code$2) {
		const tail = self$1.events[self$1.events.length - 1];
		return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok$2(code$2) : nok(code$2);
	}
}
function gfmStrikethrough(options) {
	let single = (options || {}).singleTilde;
	const tokenizer = {
		name: "strikethrough",
		tokenize: tokenizeStrikethrough,
		resolveAll: resolveAllStrikethrough
	};
	if (single === null || single === void 0) single = true;
	return {
		text: { [126]: tokenizer },
		insideSpan: { null: [tokenizer] },
		attentionMarkers: { null: [126] }
	};
	function resolveAllStrikethrough(events, context) {
		let index$1 = -1;
		while (++index$1 < events.length) if (events[index$1][0] === "enter" && events[index$1][1].type === "strikethroughSequenceTemporary" && events[index$1][1]._close) {
			let open = index$1;
			while (open--) if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && events[index$1][1].end.offset - events[index$1][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
				events[index$1][1].type = "strikethroughSequence";
				events[open][1].type = "strikethroughSequence";
				const strikethrough$1 = {
					type: "strikethrough",
					start: /* @__PURE__ */ Object.assign({}, events[open][1].start),
					end: /* @__PURE__ */ Object.assign({}, events[index$1][1].end)
				};
				const text$5 = {
					type: "strikethroughText",
					start: /* @__PURE__ */ Object.assign({}, events[open][1].end),
					end: /* @__PURE__ */ Object.assign({}, events[index$1][1].start)
				};
				const nextEvents = [
					[
						"enter",
						strikethrough$1,
						context
					],
					[
						"enter",
						events[open][1],
						context
					],
					[
						"exit",
						events[open][1],
						context
					],
					[
						"enter",
						text$5,
						context
					]
				];
				const insideSpan$1 = context.parser.constructs.insideSpan.null;
				if (insideSpan$1) splice(nextEvents, nextEvents.length, 0, /* @__PURE__ */ resolveAll(insideSpan$1, /* @__PURE__ */ events.slice(open + 1, index$1), context));
				splice(nextEvents, nextEvents.length, 0, [
					[
						"exit",
						text$5,
						context
					],
					[
						"enter",
						events[index$1][1],
						context
					],
					[
						"exit",
						events[index$1][1],
						context
					],
					[
						"exit",
						strikethrough$1,
						context
					]
				]);
				splice(events, open - 1, index$1 - open + 3, nextEvents);
				index$1 = open + nextEvents.length - 2;
				break;
			}
		}
		index$1 = -1;
		while (++index$1 < events.length) if (events[index$1][1].type === "strikethroughSequenceTemporary") events[index$1][1].type = "data";
		return events;
	}
	function tokenizeStrikethrough(effects, ok$2, nok) {
		const previous$3 = this.previous;
		const events = this.events;
		let size$1 = 0;
		return start;
		function start(code$2) {
			if (previous$3 === 126 && events[events.length - 1][1].type !== "characterEscape") return nok(code$2);
			effects.enter("strikethroughSequenceTemporary");
			return more(code$2);
		}
		function more(code$2) {
			const before = /* @__PURE__ */ classifyCharacter(previous$3);
			if (code$2 === 126) {
				if (size$1 > 1) return nok(code$2);
				effects.consume(code$2);
				size$1++;
				return more;
			}
			if (size$1 < 2 && !single) return nok(code$2);
			const token = /* @__PURE__ */ effects.exit("strikethroughSequenceTemporary");
			const after = /* @__PURE__ */ classifyCharacter(code$2);
			token._open = !after || after === 2 && Boolean(before);
			token._close = !before || before === 2 && Boolean(after);
			return ok$2(code$2);
		}
	}
}
var EditMap = class {
	constructor() {
		this.map = [];
	}
	add(index$1, remove, add) {
		addImplementation(this, index$1, remove, add);
	}
	consume(events) {
		this.map.sort(function(a, b) {
			return a[0] - b[0];
		});
		/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */ if (this.map.length === 0) return;
		let index$1 = this.map.length;
		const vecs = [];
		while (index$1 > 0) {
			index$1 -= 1;
			vecs.push(/* @__PURE__ */ events.slice(this.map[index$1][0] + this.map[index$1][1]), this.map[index$1][2]);
			events.length = this.map[index$1][0];
		}
		vecs.push(/* @__PURE__ */ events.slice());
		events.length = 0;
		let slice = /* @__PURE__ */ vecs.pop();
		while (slice) {
			for (const element$2 of slice) events.push(element$2);
			slice = /* @__PURE__ */ vecs.pop();
		}
		this.map.length = 0;
	}
};
function addImplementation(editMap, at, remove, add) {
	let index$1 = 0;
	/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */ if (remove === 0 && add.length === 0) return;
	while (index$1 < editMap.map.length) {
		if (editMap.map[index$1][0] === at) {
			editMap.map[index$1][1] += remove;
			editMap.map[index$1][2].push(...add);
			return;
		}
		index$1 += 1;
	}
	editMap.map.push([
		at,
		remove,
		add
	]);
}
function gfmTableAlign(events, index$1) {
	let inDelimiterRow = false;
	const align = [];
	while (index$1 < events.length) {
		const event = events[index$1];
		if (inDelimiterRow) {
			if (event[0] === "enter") {
				if (event[1].type === "tableContent") align.push(events[index$1 + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			} else if (event[1].type === "tableContent") {
				if (events[index$1 - 1][1].type === "tableDelimiterMarker") {
					const alignIndex = align.length - 1;
					align[alignIndex] = align[alignIndex] === "left" ? "center" : "right";
				}
			} else if (event[1].type === "tableDelimiterRow") break;
		} else if (event[0] === "enter" && event[1].type === "tableDelimiterRow") inDelimiterRow = true;
		index$1 += 1;
	}
	return align;
}
function gfmTable() {
	return { flow: { null: {
		name: "table",
		tokenize: tokenizeTable,
		resolveAll: resolveTable
	} } };
}
function tokenizeTable(effects, ok$2, nok) {
	const self$1 = this;
	let size$1 = 0;
	let sizeB = 0;
	let seen;
	return start;
	function start(code$2) {
		let index$1 = self$1.events.length - 1;
		while (index$1 > -1) {
			const type = self$1.events[index$1][1].type;
			if (type === "lineEnding" || type === "linePrefix") index$1--;
			else break;
		}
		const tail = index$1 > -1 ? self$1.events[index$1][1].type : null;
		const next = tail === "tableHead" || tail === "tableRow" ? bodyRowStart : headRowBefore;
		if (next === bodyRowStart && self$1.parser.lazy[self$1.now().line]) return nok(code$2);
		return next(code$2);
	}
	function headRowBefore(code$2) {
		effects.enter("tableHead");
		effects.enter("tableRow");
		return headRowStart(code$2);
	}
	function headRowStart(code$2) {
		if (code$2 === 124) return headRowBreak(code$2);
		seen = true;
		sizeB += 1;
		return headRowBreak(code$2);
	}
	function headRowBreak(code$2) {
		if (code$2 === null) return nok(code$2);
		if (markdownLineEnding(code$2)) {
			if (sizeB > 1) {
				sizeB = 0;
				self$1.interrupt = true;
				effects.exit("tableRow");
				effects.enter("lineEnding");
				effects.consume(code$2);
				effects.exit("lineEnding");
				return headDelimiterStart;
			}
			return nok(code$2);
		}
		if (markdownSpace(code$2)) return factorySpace(effects, headRowBreak, "whitespace")(code$2);
		sizeB += 1;
		if (seen) {
			seen = false;
			size$1 += 1;
		}
		if (code$2 === 124) {
			effects.enter("tableCellDivider");
			effects.consume(code$2);
			effects.exit("tableCellDivider");
			seen = true;
			return headRowBreak;
		}
		effects.enter("data");
		return headRowData(code$2);
	}
	function headRowData(code$2) {
		if (code$2 === null || code$2 === 124 || markdownLineEndingOrSpace(code$2)) {
			effects.exit("data");
			return headRowBreak(code$2);
		}
		effects.consume(code$2);
		return code$2 === 92 ? headRowEscape : headRowData;
	}
	function headRowEscape(code$2) {
		if (code$2 === 92 || code$2 === 124) {
			effects.consume(code$2);
			return headRowData;
		}
		return headRowData(code$2);
	}
	function headDelimiterStart(code$2) {
		self$1.interrupt = false;
		if (self$1.parser.lazy[self$1.now().line]) return nok(code$2);
		effects.enter("tableDelimiterRow");
		seen = false;
		if (markdownSpace(code$2)) return factorySpace(effects, headDelimiterBefore, "linePrefix", self$1.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code$2);
		return headDelimiterBefore(code$2);
	}
	function headDelimiterBefore(code$2) {
		if (code$2 === 45 || code$2 === 58) return headDelimiterValueBefore(code$2);
		if (code$2 === 124) {
			seen = true;
			effects.enter("tableCellDivider");
			effects.consume(code$2);
			effects.exit("tableCellDivider");
			return headDelimiterCellBefore;
		}
		return headDelimiterNok(code$2);
	}
	function headDelimiterCellBefore(code$2) {
		if (markdownSpace(code$2)) return factorySpace(effects, headDelimiterValueBefore, "whitespace")(code$2);
		return headDelimiterValueBefore(code$2);
	}
	function headDelimiterValueBefore(code$2) {
		if (code$2 === 58) {
			sizeB += 1;
			seen = true;
			effects.enter("tableDelimiterMarker");
			effects.consume(code$2);
			effects.exit("tableDelimiterMarker");
			return headDelimiterLeftAlignmentAfter;
		}
		if (code$2 === 45) {
			sizeB += 1;
			return headDelimiterLeftAlignmentAfter(code$2);
		}
		if (code$2 === null || markdownLineEnding(code$2)) return headDelimiterCellAfter(code$2);
		return headDelimiterNok(code$2);
	}
	function headDelimiterLeftAlignmentAfter(code$2) {
		if (code$2 === 45) {
			effects.enter("tableDelimiterFiller");
			return headDelimiterFiller(code$2);
		}
		return headDelimiterNok(code$2);
	}
	function headDelimiterFiller(code$2) {
		if (code$2 === 45) {
			effects.consume(code$2);
			return headDelimiterFiller;
		}
		if (code$2 === 58) {
			seen = true;
			effects.exit("tableDelimiterFiller");
			effects.enter("tableDelimiterMarker");
			effects.consume(code$2);
			effects.exit("tableDelimiterMarker");
			return headDelimiterRightAlignmentAfter;
		}
		effects.exit("tableDelimiterFiller");
		return headDelimiterRightAlignmentAfter(code$2);
	}
	function headDelimiterRightAlignmentAfter(code$2) {
		if (markdownSpace(code$2)) return factorySpace(effects, headDelimiterCellAfter, "whitespace")(code$2);
		return headDelimiterCellAfter(code$2);
	}
	function headDelimiterCellAfter(code$2) {
		if (code$2 === 124) return headDelimiterBefore(code$2);
		if (code$2 === null || markdownLineEnding(code$2)) {
			if (!seen || size$1 !== sizeB) return headDelimiterNok(code$2);
			effects.exit("tableDelimiterRow");
			effects.exit("tableHead");
			return ok$2(code$2);
		}
		return headDelimiterNok(code$2);
	}
	function headDelimiterNok(code$2) {
		return nok(code$2);
	}
	function bodyRowStart(code$2) {
		effects.enter("tableRow");
		return bodyRowBreak(code$2);
	}
	function bodyRowBreak(code$2) {
		if (code$2 === 124) {
			effects.enter("tableCellDivider");
			effects.consume(code$2);
			effects.exit("tableCellDivider");
			return bodyRowBreak;
		}
		if (code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("tableRow");
			return ok$2(code$2);
		}
		if (markdownSpace(code$2)) return factorySpace(effects, bodyRowBreak, "whitespace")(code$2);
		effects.enter("data");
		return bodyRowData(code$2);
	}
	function bodyRowData(code$2) {
		if (code$2 === null || code$2 === 124 || markdownLineEndingOrSpace(code$2)) {
			effects.exit("data");
			return bodyRowBreak(code$2);
		}
		effects.consume(code$2);
		return code$2 === 92 ? bodyRowEscape : bodyRowData;
	}
	function bodyRowEscape(code$2) {
		if (code$2 === 92 || code$2 === 124) {
			effects.consume(code$2);
			return bodyRowData;
		}
		return bodyRowData(code$2);
	}
}
function resolveTable(events, context) {
	let index$1 = -1;
	let inFirstCellAwaitingPipe = true;
	let rowKind = 0;
	let lastCell = [
		0,
		0,
		0,
		0
	];
	let cell = [
		0,
		0,
		0,
		0
	];
	let afterHeadAwaitingFirstBodyRow = false;
	let lastTableEnd = 0;
	let currentTable;
	let currentBody;
	let currentCell;
	const map$1 = new EditMap();
	while (++index$1 < events.length) {
		const event = events[index$1];
		const token = event[1];
		if (event[0] === "enter") {
			if (token.type === "tableHead") {
				afterHeadAwaitingFirstBodyRow = false;
				if (lastTableEnd !== 0) {
					flushTableEnd(map$1, context, lastTableEnd, currentTable, currentBody);
					currentBody = void 0;
					lastTableEnd = 0;
				}
				currentTable = {
					type: "table",
					start: /* @__PURE__ */ Object.assign({}, token.start),
					end: /* @__PURE__ */ Object.assign({}, token.end)
				};
				map$1.add(index$1, 0, [[
					"enter",
					currentTable,
					context
				]]);
			} else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
				inFirstCellAwaitingPipe = true;
				currentCell = void 0;
				lastCell = [
					0,
					0,
					0,
					0
				];
				cell = [
					0,
					index$1 + 1,
					0,
					0
				];
				if (afterHeadAwaitingFirstBodyRow) {
					afterHeadAwaitingFirstBodyRow = false;
					currentBody = {
						type: "tableBody",
						start: /* @__PURE__ */ Object.assign({}, token.start),
						end: /* @__PURE__ */ Object.assign({}, token.end)
					};
					map$1.add(index$1, 0, [[
						"enter",
						currentBody,
						context
					]]);
				}
				rowKind = token.type === "tableDelimiterRow" ? 2 : currentBody ? 3 : 1;
			} else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
				inFirstCellAwaitingPipe = false;
				if (cell[2] === 0) {
					if (lastCell[1] !== 0) {
						cell[0] = cell[1];
						currentCell = /* @__PURE__ */ flushCell(map$1, context, lastCell, rowKind, void 0, currentCell);
						lastCell = [
							0,
							0,
							0,
							0
						];
					}
					cell[2] = index$1;
				}
			} else if (token.type === "tableCellDivider") if (inFirstCellAwaitingPipe) inFirstCellAwaitingPipe = false;
			else {
				if (lastCell[1] !== 0) {
					cell[0] = cell[1];
					currentCell = /* @__PURE__ */ flushCell(map$1, context, lastCell, rowKind, void 0, currentCell);
				}
				lastCell = cell;
				cell = [
					lastCell[1],
					index$1,
					0,
					0
				];
			}
		} else if (token.type === "tableHead") {
			afterHeadAwaitingFirstBodyRow = true;
			lastTableEnd = index$1;
		} else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
			lastTableEnd = index$1;
			if (lastCell[1] !== 0) {
				cell[0] = cell[1];
				currentCell = /* @__PURE__ */ flushCell(map$1, context, lastCell, rowKind, index$1, currentCell);
			} else if (cell[1] !== 0) currentCell = /* @__PURE__ */ flushCell(map$1, context, cell, rowKind, index$1, currentCell);
			rowKind = 0;
		} else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) cell[3] = index$1;
	}
	if (lastTableEnd !== 0) flushTableEnd(map$1, context, lastTableEnd, currentTable, currentBody);
	map$1.consume(context.events);
	index$1 = -1;
	while (++index$1 < context.events.length) {
		const event = context.events[index$1];
		if (event[0] === "enter" && event[1].type === "table") event[1]._align = /* @__PURE__ */ gfmTableAlign(context.events, index$1);
	}
	return events;
}
function flushCell(map$1, context, range, rowKind, rowEnd, previousCell) {
	const groupName = rowKind === 1 ? "tableHeader" : rowKind === 2 ? "tableDelimiter" : "tableData";
	const valueName = "tableContent";
	if (range[0] !== 0) {
		previousCell.end = /* @__PURE__ */ Object.assign({}, /* @__PURE__ */ getPoint(context.events, range[0]));
		map$1.add(range[0], 0, [[
			"exit",
			previousCell,
			context
		]]);
	}
	const now = /* @__PURE__ */ getPoint(context.events, range[1]);
	previousCell = {
		type: groupName,
		start: /* @__PURE__ */ Object.assign({}, now),
		end: /* @__PURE__ */ Object.assign({}, now)
	};
	map$1.add(range[1], 0, [[
		"enter",
		previousCell,
		context
	]]);
	if (range[2] !== 0) {
		const relatedStart = /* @__PURE__ */ getPoint(context.events, range[2]);
		const relatedEnd = /* @__PURE__ */ getPoint(context.events, range[3]);
		const valueToken = {
			type: valueName,
			start: /* @__PURE__ */ Object.assign({}, relatedStart),
			end: /* @__PURE__ */ Object.assign({}, relatedEnd)
		};
		map$1.add(range[2], 0, [[
			"enter",
			valueToken,
			context
		]]);
		if (rowKind !== 2) {
			const start = context.events[range[2]];
			const end = context.events[range[3]];
			start[1].end = /* @__PURE__ */ Object.assign({}, end[1].end);
			start[1].type = "chunkText";
			start[1].contentType = "text";
			if (range[3] > range[2] + 1) {
				const a = range[2] + 1;
				const b = range[3] - range[2] - 1;
				map$1.add(a, b, []);
			}
		}
		map$1.add(range[3] + 1, 0, [[
			"exit",
			valueToken,
			context
		]]);
	}
	if (rowEnd !== void 0) {
		previousCell.end = /* @__PURE__ */ Object.assign({}, /* @__PURE__ */ getPoint(context.events, rowEnd));
		map$1.add(rowEnd, 0, [[
			"exit",
			previousCell,
			context
		]]);
		previousCell = void 0;
	}
	return previousCell;
}
function flushTableEnd(map$1, context, index$1, table$1, tableBody) {
	const exits = [];
	const related = /* @__PURE__ */ getPoint(context.events, index$1);
	if (tableBody) {
		tableBody.end = /* @__PURE__ */ Object.assign({}, related);
		exits.push([
			"exit",
			tableBody,
			context
		]);
	}
	table$1.end = /* @__PURE__ */ Object.assign({}, related);
	exits.push([
		"exit",
		table$1,
		context
	]);
	map$1.add(index$1 + 1, 0, exits);
}
function getPoint(events, index$1) {
	const event = events[index$1];
	const side = event[0] === "enter" ? "start" : "end";
	return event[1][side];
}
var tasklistCheck = {
	name: "tasklistCheck",
	tokenize: tokenizeTasklistCheck
};
function gfmTaskListItem() {
	return { text: { [91]: tasklistCheck } };
}
function tokenizeTasklistCheck(effects, ok$2, nok) {
	const self$1 = this;
	return open;
	function open(code$2) {
		if (self$1.previous !== null || !self$1._gfmTasklistFirstContentOfListItem) return nok(code$2);
		effects.enter("taskListCheck");
		effects.enter("taskListCheckMarker");
		effects.consume(code$2);
		effects.exit("taskListCheckMarker");
		return inside;
	}
	function inside(code$2) {
		if (markdownLineEndingOrSpace(code$2)) {
			effects.enter("taskListCheckValueUnchecked");
			effects.consume(code$2);
			effects.exit("taskListCheckValueUnchecked");
			return close;
		}
		if (code$2 === 88 || code$2 === 120) {
			effects.enter("taskListCheckValueChecked");
			effects.consume(code$2);
			effects.exit("taskListCheckValueChecked");
			return close;
		}
		return nok(code$2);
	}
	function close(code$2) {
		if (code$2 === 93) {
			effects.enter("taskListCheckMarker");
			effects.consume(code$2);
			effects.exit("taskListCheckMarker");
			effects.exit("taskListCheck");
			return after;
		}
		return nok(code$2);
	}
	function after(code$2) {
		if (markdownLineEnding(code$2)) return ok$2(code$2);
		if (markdownSpace(code$2)) return effects.check({ tokenize: spaceThenNonSpace }, ok$2, nok)(code$2);
		return nok(code$2);
	}
}
function spaceThenNonSpace(effects, ok$2, nok) {
	return factorySpace(effects, after, "whitespace");
	function after(code$2) {
		return code$2 === null ? nok(code$2) : ok$2(code$2);
	}
}
function gfm(options) {
	return combineExtensions([
		/* @__PURE__ */ gfmAutolinkLiteral(),
		/* @__PURE__ */ gfmFootnote(),
		/* @__PURE__ */ gfmStrikethrough(options),
		/* @__PURE__ */ gfmTable(),
		/* @__PURE__ */ gfmTaskListItem()
	]);
}
function factoryAttributes(effects, ok$2, nok, attributesType, attributesMarkerType, attributeType, attributeIdType, attributeClassType, attributeNameType, attributeInitializerType, attributeValueLiteralType, attributeValueType, attributeValueMarker, attributeValueData, disallowEol) {
	let type;
	let marker;
	return start;
	function start(code$2) {
		effects.enter(attributesType);
		effects.enter(attributesMarkerType);
		effects.consume(code$2);
		effects.exit(attributesMarkerType);
		return between;
	}
	function between(code$2) {
		if (code$2 === 35) {
			type = attributeIdType;
			return shortcutStart(code$2);
		}
		if (code$2 === 46) {
			type = attributeClassType;
			return shortcutStart(code$2);
		}
		if (disallowEol && markdownSpace(code$2)) return factorySpace(effects, between, "whitespace")(code$2);
		if (!disallowEol && markdownLineEndingOrSpace(code$2)) return factoryWhitespace(effects, between)(code$2);
		if (code$2 === null || markdownLineEnding(code$2) || unicodeWhitespace(code$2) || unicodePunctuation(code$2) && code$2 !== 45 && code$2 !== 95) return end(code$2);
		effects.enter(attributeType);
		effects.enter(attributeNameType);
		effects.consume(code$2);
		return name$1;
	}
	function shortcutStart(code$2) {
		const markerType = type + "Marker";
		effects.enter(attributeType);
		effects.enter(type);
		effects.enter(markerType);
		effects.consume(code$2);
		effects.exit(markerType);
		return shortcutStartAfter;
	}
	function shortcutStartAfter(code$2) {
		if (code$2 === null || code$2 === 34 || code$2 === 35 || code$2 === 39 || code$2 === 46 || code$2 === 60 || code$2 === 61 || code$2 === 62 || code$2 === 96 || code$2 === 125 || markdownLineEndingOrSpace(code$2)) return nok(code$2);
		const valueType = type + "Value";
		effects.enter(valueType);
		effects.consume(code$2);
		return shortcut;
	}
	function shortcut(code$2) {
		if (code$2 === null || code$2 === 34 || code$2 === 39 || code$2 === 60 || code$2 === 61 || code$2 === 62 || code$2 === 96) return nok(code$2);
		if (code$2 === 35 || code$2 === 46 || code$2 === 125 || markdownLineEndingOrSpace(code$2)) {
			const valueType = type + "Value";
			effects.exit(valueType);
			effects.exit(type);
			effects.exit(attributeType);
			return between(code$2);
		}
		effects.consume(code$2);
		return shortcut;
	}
	function name$1(code$2) {
		if (code$2 === null || markdownLineEnding(code$2) || unicodeWhitespace(code$2) || unicodePunctuation(code$2) && code$2 !== 45 && code$2 !== 46 && code$2 !== 58 && code$2 !== 95) {
			effects.exit(attributeNameType);
			if (disallowEol && markdownSpace(code$2)) return factorySpace(effects, nameAfter, "whitespace")(code$2);
			if (!disallowEol && markdownLineEndingOrSpace(code$2)) return factoryWhitespace(effects, nameAfter)(code$2);
			return nameAfter(code$2);
		}
		effects.consume(code$2);
		return name$1;
	}
	function nameAfter(code$2) {
		if (code$2 === 61) {
			effects.enter(attributeInitializerType);
			effects.consume(code$2);
			effects.exit(attributeInitializerType);
			return valueBefore;
		}
		effects.exit(attributeType);
		return between(code$2);
	}
	function valueBefore(code$2) {
		if (code$2 === null || code$2 === 60 || code$2 === 61 || code$2 === 62 || code$2 === 96 || code$2 === 125 || disallowEol && markdownLineEnding(code$2)) return nok(code$2);
		if (code$2 === 34 || code$2 === 39) {
			effects.enter(attributeValueLiteralType);
			effects.enter(attributeValueMarker);
			effects.consume(code$2);
			effects.exit(attributeValueMarker);
			marker = code$2;
			return valueQuotedStart;
		}
		if (disallowEol && markdownSpace(code$2)) return factorySpace(effects, valueBefore, "whitespace")(code$2);
		if (!disallowEol && markdownLineEndingOrSpace(code$2)) return factoryWhitespace(effects, valueBefore)(code$2);
		effects.enter(attributeValueType);
		effects.enter(attributeValueData);
		effects.consume(code$2);
		marker = void 0;
		return valueUnquoted;
	}
	function valueUnquoted(code$2) {
		if (code$2 === null || code$2 === 34 || code$2 === 39 || code$2 === 60 || code$2 === 61 || code$2 === 62 || code$2 === 96) return nok(code$2);
		if (code$2 === 125 || markdownLineEndingOrSpace(code$2)) {
			effects.exit(attributeValueData);
			effects.exit(attributeValueType);
			effects.exit(attributeType);
			return between(code$2);
		}
		effects.consume(code$2);
		return valueUnquoted;
	}
	function valueQuotedStart(code$2) {
		if (code$2 === marker) {
			effects.enter(attributeValueMarker);
			effects.consume(code$2);
			effects.exit(attributeValueMarker);
			effects.exit(attributeValueLiteralType);
			effects.exit(attributeType);
			return valueQuotedAfter;
		}
		effects.enter(attributeValueType);
		return valueQuotedBetween(code$2);
	}
	function valueQuotedBetween(code$2) {
		if (code$2 === marker) {
			effects.exit(attributeValueType);
			return valueQuotedStart(code$2);
		}
		if (code$2 === null) return nok(code$2);
		if (markdownLineEnding(code$2)) return disallowEol ? nok(code$2) : factoryWhitespace(effects, valueQuotedBetween)(code$2);
		effects.enter(attributeValueData);
		effects.consume(code$2);
		return valueQuoted;
	}
	function valueQuoted(code$2) {
		if (code$2 === marker || code$2 === null || markdownLineEnding(code$2)) {
			effects.exit(attributeValueData);
			return valueQuotedBetween(code$2);
		}
		effects.consume(code$2);
		return valueQuoted;
	}
	function valueQuotedAfter(code$2) {
		return code$2 === 125 || markdownLineEndingOrSpace(code$2) ? between(code$2) : end(code$2);
	}
	function end(code$2) {
		if (code$2 === 125) {
			effects.enter(attributesMarkerType);
			effects.consume(code$2);
			effects.exit(attributesMarkerType);
			effects.exit(attributesType);
			return ok$2;
		}
		return nok(code$2);
	}
}
function factoryLabel(effects, ok$2, nok, type, markerType, stringType, disallowEol) {
	let size$1 = 0;
	let balance = 0;
	let previous$3;
	return start;
	function start(code$2) {
		effects.enter(type);
		effects.enter(markerType);
		effects.consume(code$2);
		effects.exit(markerType);
		return afterStart;
	}
	function afterStart(code$2) {
		if (code$2 === 93) {
			effects.enter(markerType);
			effects.consume(code$2);
			effects.exit(markerType);
			effects.exit(type);
			return ok$2;
		}
		effects.enter(stringType);
		return lineStart(code$2);
	}
	function lineStart(code$2) {
		if (code$2 === 93 && !balance) return atClosingBrace(code$2);
		const token = /* @__PURE__ */ effects.enter("chunkText", {
			_contentTypeTextTrailing: true,
			contentType: "text",
			previous: previous$3
		});
		if (previous$3) previous$3.next = token;
		previous$3 = token;
		return data$1(code$2);
	}
	function data$1(code$2) {
		if (code$2 === null || size$1 > 999) return nok(code$2);
		if (code$2 === 91 && ++balance > 32) return nok(code$2);
		if (code$2 === 93 && !balance--) {
			effects.exit("chunkText");
			return atClosingBrace(code$2);
		}
		if (markdownLineEnding(code$2)) {
			if (disallowEol) return nok(code$2);
			effects.consume(code$2);
			effects.exit("chunkText");
			return lineStart;
		}
		effects.consume(code$2);
		return code$2 === 92 ? dataEscape : data$1;
	}
	function dataEscape(code$2) {
		if (code$2 === 91 || code$2 === 92 || code$2 === 93) {
			effects.consume(code$2);
			size$1++;
			return data$1;
		}
		return data$1(code$2);
	}
	function atClosingBrace(code$2) {
		effects.exit(stringType);
		effects.enter(markerType);
		effects.consume(code$2);
		effects.exit(markerType);
		effects.exit(type);
		return ok$2;
	}
}
function factoryName(effects, ok$2, nok, type) {
	const self$1 = this;
	return start;
	function start(code$2) {
		if (code$2 === null || markdownLineEnding(code$2) || unicodePunctuation(code$2) || unicodeWhitespace(code$2)) return nok(code$2);
		effects.enter(type);
		effects.consume(code$2);
		return name$1;
	}
	function name$1(code$2) {
		if (code$2 === null || markdownLineEnding(code$2) || unicodeWhitespace(code$2) || unicodePunctuation(code$2) && code$2 !== 45 && code$2 !== 95) {
			effects.exit(type);
			return self$1.previous === 45 || self$1.previous === 95 ? nok(code$2) : ok$2(code$2);
		}
		effects.consume(code$2);
		return name$1;
	}
}
const directiveContainer = {
	tokenize: tokenizeDirectiveContainer,
	concrete: true
};
var label$2 = {
	tokenize: tokenizeLabel$2,
	partial: true
};
var attributes$2 = {
	tokenize: tokenizeAttributes$2,
	partial: true
};
var nonLazyLine = {
	tokenize: tokenizeNonLazyLine,
	partial: true
};
function tokenizeDirectiveContainer(effects, ok$2, nok) {
	const self$1 = this;
	const tail = self$1.events[self$1.events.length - 1];
	const initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
	let sizeOpen = 0;
	let previous$3;
	return start;
	function start(code$2) {
		effects.enter("directiveContainer");
		effects.enter("directiveContainerFence");
		effects.enter("directiveContainerSequence");
		return sequenceOpen(code$2);
	}
	function sequenceOpen(code$2) {
		if (code$2 === 58) {
			effects.consume(code$2);
			sizeOpen++;
			return sequenceOpen;
		}
		if (sizeOpen < 3) return nok(code$2);
		effects.exit("directiveContainerSequence");
		return factoryName.call(self$1, effects, afterName, nok, "directiveContainerName")(code$2);
	}
	function afterName(code$2) {
		return code$2 === 91 ? effects.attempt(label$2, afterLabel, afterLabel)(code$2) : afterLabel(code$2);
	}
	function afterLabel(code$2) {
		return code$2 === 123 ? effects.attempt(attributes$2, afterAttributes, afterAttributes)(code$2) : afterAttributes(code$2);
	}
	function afterAttributes(code$2) {
		return factorySpace(effects, openAfter, "whitespace")(code$2);
	}
	function openAfter(code$2) {
		effects.exit("directiveContainerFence");
		if (code$2 === null) return after(code$2);
		if (markdownLineEnding(code$2)) {
			if (self$1.interrupt) return ok$2(code$2);
			return effects.attempt(nonLazyLine, contentStart, after)(code$2);
		}
		return nok(code$2);
	}
	function contentStart(code$2) {
		if (code$2 === null) return after(code$2);
		if (markdownLineEnding(code$2)) return effects.check(nonLazyLine, emptyContentNonLazyLineAfter, after)(code$2);
		effects.enter("directiveContainerContent");
		return lineStart(code$2);
	}
	function lineStart(code$2) {
		return effects.attempt({
			tokenize: tokenizeClosingFence,
			partial: true
		}, afterContent, initialSize ? factorySpace(effects, chunkStart, "linePrefix", initialSize + 1) : chunkStart)(code$2);
	}
	function chunkStart(code$2) {
		if (code$2 === null) return afterContent(code$2);
		if (markdownLineEnding(code$2)) return effects.check(nonLazyLine, chunkNonLazyStart, afterContent)(code$2);
		return chunkNonLazyStart(code$2);
	}
	function contentContinue(code$2) {
		if (code$2 === null) {
			const t = /* @__PURE__ */ effects.exit("chunkDocument");
			self$1.parser.lazy[t.start.line] = false;
			return afterContent(code$2);
		}
		if (markdownLineEnding(code$2)) return effects.check(nonLazyLine, nonLazyLineAfter, lineAfter)(code$2);
		effects.consume(code$2);
		return contentContinue;
	}
	function chunkNonLazyStart(code$2) {
		const token = /* @__PURE__ */ effects.enter("chunkDocument", {
			contentType: "document",
			previous: previous$3
		});
		if (previous$3) previous$3.next = token;
		previous$3 = token;
		return contentContinue(code$2);
	}
	function emptyContentNonLazyLineAfter(code$2) {
		effects.enter("directiveContainerContent");
		return lineStart(code$2);
	}
	function nonLazyLineAfter(code$2) {
		effects.consume(code$2);
		const t = /* @__PURE__ */ effects.exit("chunkDocument");
		self$1.parser.lazy[t.start.line] = false;
		return lineStart;
	}
	function lineAfter(code$2) {
		const t = /* @__PURE__ */ effects.exit("chunkDocument");
		self$1.parser.lazy[t.start.line] = false;
		return afterContent(code$2);
	}
	function afterContent(code$2) {
		effects.exit("directiveContainerContent");
		return after(code$2);
	}
	function after(code$2) {
		effects.exit("directiveContainer");
		return ok$2(code$2);
	}
	function tokenizeClosingFence(effects$1, ok$3, nok$1) {
		let size$1 = 0;
		return factorySpace(effects$1, closingPrefixAfter, "linePrefix", self$1.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
		function closingPrefixAfter(code$2) {
			effects$1.enter("directiveContainerFence");
			effects$1.enter("directiveContainerSequence");
			return closingSequence(code$2);
		}
		function closingSequence(code$2) {
			if (code$2 === 58) {
				effects$1.consume(code$2);
				size$1++;
				return closingSequence;
			}
			if (size$1 < sizeOpen) return nok$1(code$2);
			effects$1.exit("directiveContainerSequence");
			return factorySpace(effects$1, closingSequenceEnd, "whitespace")(code$2);
		}
		function closingSequenceEnd(code$2) {
			if (code$2 === null || markdownLineEnding(code$2)) {
				effects$1.exit("directiveContainerFence");
				return ok$3(code$2);
			}
			return nok$1(code$2);
		}
	}
}
function tokenizeLabel$2(effects, ok$2, nok) {
	return factoryLabel(effects, ok$2, nok, "directiveContainerLabel", "directiveContainerLabelMarker", "directiveContainerLabelString", true);
}
function tokenizeAttributes$2(effects, ok$2, nok) {
	return factoryAttributes(effects, ok$2, nok, "directiveContainerAttributes", "directiveContainerAttributesMarker", "directiveContainerAttribute", "directiveContainerAttributeId", "directiveContainerAttributeClass", "directiveContainerAttributeName", "directiveContainerAttributeInitializerMarker", "directiveContainerAttributeValueLiteral", "directiveContainerAttributeValue", "directiveContainerAttributeValueMarker", "directiveContainerAttributeValueData", true);
}
function tokenizeNonLazyLine(effects, ok$2, nok) {
	const self$1 = this;
	return start;
	function start(code$2) {
		effects.enter("lineEnding");
		effects.consume(code$2);
		effects.exit("lineEnding");
		return lineStart;
	}
	function lineStart(code$2) {
		return self$1.parser.lazy[self$1.now().line] ? nok(code$2) : ok$2(code$2);
	}
}
const directiveLeaf = { tokenize: tokenizeDirectiveLeaf };
var label$1 = {
	tokenize: tokenizeLabel$1,
	partial: true
};
var attributes$1 = {
	tokenize: tokenizeAttributes$1,
	partial: true
};
function tokenizeDirectiveLeaf(effects, ok$2, nok) {
	const self$1 = this;
	return start;
	function start(code$2) {
		effects.enter("directiveLeaf");
		effects.enter("directiveLeafSequence");
		effects.consume(code$2);
		return inStart;
	}
	function inStart(code$2) {
		if (code$2 === 58) {
			effects.consume(code$2);
			effects.exit("directiveLeafSequence");
			return factoryName.call(self$1, effects, afterName, nok, "directiveLeafName");
		}
		return nok(code$2);
	}
	function afterName(code$2) {
		return code$2 === 91 ? effects.attempt(label$1, afterLabel, afterLabel)(code$2) : afterLabel(code$2);
	}
	function afterLabel(code$2) {
		return code$2 === 123 ? effects.attempt(attributes$1, afterAttributes, afterAttributes)(code$2) : afterAttributes(code$2);
	}
	function afterAttributes(code$2) {
		return factorySpace(effects, end, "whitespace")(code$2);
	}
	function end(code$2) {
		if (code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("directiveLeaf");
			return ok$2(code$2);
		}
		return nok(code$2);
	}
}
function tokenizeLabel$1(effects, ok$2, nok) {
	return factoryLabel(effects, ok$2, nok, "directiveLeafLabel", "directiveLeafLabelMarker", "directiveLeafLabelString", true);
}
function tokenizeAttributes$1(effects, ok$2, nok) {
	return factoryAttributes(effects, ok$2, nok, "directiveLeafAttributes", "directiveLeafAttributesMarker", "directiveLeafAttribute", "directiveLeafAttributeId", "directiveLeafAttributeClass", "directiveLeafAttributeName", "directiveLeafAttributeInitializerMarker", "directiveLeafAttributeValueLiteral", "directiveLeafAttributeValue", "directiveLeafAttributeValueMarker", "directiveLeafAttributeValueData", true);
}
const directiveText = {
	tokenize: tokenizeDirectiveText,
	previous
};
var label = {
	tokenize: tokenizeLabel,
	partial: true
};
var attributes = {
	tokenize: tokenizeAttributes,
	partial: true
};
function previous(code$2) {
	return code$2 !== 58 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeDirectiveText(effects, ok$2, nok) {
	const self$1 = this;
	return start;
	function start(code$2) {
		effects.enter("directiveText");
		effects.enter("directiveTextMarker");
		effects.consume(code$2);
		effects.exit("directiveTextMarker");
		return factoryName.call(self$1, effects, afterName, nok, "directiveTextName");
	}
	function afterName(code$2) {
		return code$2 === 58 ? nok(code$2) : code$2 === 91 ? effects.attempt(label, afterLabel, afterLabel)(code$2) : afterLabel(code$2);
	}
	function afterLabel(code$2) {
		return code$2 === 123 ? effects.attempt(attributes, afterAttributes, afterAttributes)(code$2) : afterAttributes(code$2);
	}
	function afterAttributes(code$2) {
		effects.exit("directiveText");
		return ok$2(code$2);
	}
}
function tokenizeLabel(effects, ok$2, nok) {
	return factoryLabel(effects, ok$2, nok, "directiveTextLabel", "directiveTextLabelMarker", "directiveTextLabelString");
}
function tokenizeAttributes(effects, ok$2, nok) {
	return factoryAttributes(effects, ok$2, nok, "directiveTextAttributes", "directiveTextAttributesMarker", "directiveTextAttribute", "directiveTextAttributeId", "directiveTextAttributeClass", "directiveTextAttributeName", "directiveTextAttributeInitializerMarker", "directiveTextAttributeValueLiteral", "directiveTextAttributeValue", "directiveTextAttributeValueMarker", "directiveTextAttributeValueData");
}
function directive() {
	return {
		text: { [58]: directiveText },
		flow: { [58]: [directiveContainer, directiveLeaf] }
	};
}
const characterEntitiesLegacy = [
	"AElig",
	"AMP",
	"Aacute",
	"Acirc",
	"Agrave",
	"Aring",
	"Atilde",
	"Auml",
	"COPY",
	"Ccedil",
	"ETH",
	"Eacute",
	"Ecirc",
	"Egrave",
	"Euml",
	"GT",
	"Iacute",
	"Icirc",
	"Igrave",
	"Iuml",
	"LT",
	"Ntilde",
	"Oacute",
	"Ocirc",
	"Ograve",
	"Oslash",
	"Otilde",
	"Ouml",
	"QUOT",
	"REG",
	"THORN",
	"Uacute",
	"Ucirc",
	"Ugrave",
	"Uuml",
	"Yacute",
	"aacute",
	"acirc",
	"acute",
	"aelig",
	"agrave",
	"amp",
	"aring",
	"atilde",
	"auml",
	"brvbar",
	"ccedil",
	"cedil",
	"cent",
	"copy",
	"curren",
	"deg",
	"divide",
	"eacute",
	"ecirc",
	"egrave",
	"eth",
	"euml",
	"frac12",
	"frac14",
	"frac34",
	"gt",
	"iacute",
	"icirc",
	"iexcl",
	"igrave",
	"iquest",
	"iuml",
	"laquo",
	"lt",
	"macr",
	"micro",
	"middot",
	"nbsp",
	"not",
	"ntilde",
	"oacute",
	"ocirc",
	"ograve",
	"ordf",
	"ordm",
	"oslash",
	"otilde",
	"ouml",
	"para",
	"plusmn",
	"pound",
	"quot",
	"raquo",
	"reg",
	"sect",
	"shy",
	"sup1",
	"sup2",
	"sup3",
	"szlig",
	"thorn",
	"times",
	"uacute",
	"ucirc",
	"ugrave",
	"uml",
	"uuml",
	"yacute",
	"yen",
	"yuml"
];
const characterReferenceInvalid = {
	0: "�",
	128: "€",
	130: "‚",
	131: "ƒ",
	132: "„",
	133: "…",
	134: "†",
	135: "‡",
	136: "ˆ",
	137: "‰",
	138: "Š",
	139: "‹",
	140: "Œ",
	142: "Ž",
	145: "‘",
	146: "’",
	147: "“",
	148: "”",
	149: "•",
	150: "–",
	151: "—",
	152: "˜",
	153: "™",
	154: "š",
	155: "›",
	156: "œ",
	158: "ž",
	159: "Ÿ"
};
function isDecimal(character) {
	const code$2 = typeof character === "string" ? character.charCodeAt(0) : character;
	return code$2 >= 48 && code$2 <= 57;
}
function isHexadecimal(character) {
	const code$2 = typeof character === "string" ? character.charCodeAt(0) : character;
	return code$2 >= 97 && code$2 <= 102 || code$2 >= 65 && code$2 <= 70 || code$2 >= 48 && code$2 <= 57;
}
function isAlphabetical(character) {
	const code$2 = typeof character === "string" ? character.charCodeAt(0) : character;
	return code$2 >= 97 && code$2 <= 122 || code$2 >= 65 && code$2 <= 90;
}
function isAlphanumerical(character) {
	return isAlphabetical(character) || isDecimal(character);
}
var messages = [
	"",
	"Named character references must be terminated by a semicolon",
	"Numeric character references must be terminated by a semicolon",
	"Named character references cannot be empty",
	"Numeric character references cannot be empty",
	"Named character references must be known",
	"Numeric character references cannot be disallowed",
	"Numeric character references cannot be outside the permissible Unicode range"
];
function parseEntities(value, options) {
	const settings = options || {};
	const additional = typeof settings.additional === "string" ? settings.additional.charCodeAt(0) : settings.additional;
	const result = [];
	let index$1 = 0;
	let lines = -1;
	let queue = "";
	let point$3;
	let indent$1;
	if (settings.position) if ("start" in settings.position || "indent" in settings.position) {
		indent$1 = settings.position.indent;
		point$3 = settings.position.start;
	} else point$3 = settings.position;
	let line = (point$3 ? point$3.line : 0) || 1;
	let column = (point$3 ? point$3.column : 0) || 1;
	let previous$3 = /* @__PURE__ */ now();
	let character;
	index$1--;
	while (++index$1 <= value.length) {
		if (character === 10) column = (indent$1 ? indent$1[lines] : 0) || 1;
		character = /* @__PURE__ */ value.charCodeAt(index$1);
		if (character === 38) {
			const following = /* @__PURE__ */ value.charCodeAt(index$1 + 1);
			if (following === 9 || following === 10 || following === 12 || following === 32 || following === 38 || following === 60 || Number.isNaN(following) || additional && following === additional) {
				queue += /* @__PURE__ */ String.fromCharCode(character);
				column++;
				continue;
			}
			const start = index$1 + 1;
			let begin = start;
			let end = start;
			let type;
			if (following === 35) {
				end = ++begin;
				const following$1 = /* @__PURE__ */ value.charCodeAt(end);
				if (following$1 === 88 || following$1 === 120) {
					type = "hexadecimal";
					end = ++begin;
				} else type = "decimal";
			} else type = "named";
			let characterReferenceCharacters = "";
			let characterReference$1 = "";
			let characters = "";
			const test = type === "named" ? isAlphanumerical : type === "decimal" ? isDecimal : isHexadecimal;
			end--;
			while (++end <= value.length) {
				const following$1 = /* @__PURE__ */ value.charCodeAt(end);
				if (!test(following$1)) break;
				characters += /* @__PURE__ */ String.fromCharCode(following$1);
				if (type === "named" && characterEntitiesLegacy.includes(characters)) {
					characterReferenceCharacters = characters;
					characterReference$1 = /* @__PURE__ */ decodeNamedCharacterReference(characters);
				}
			}
			let terminated = value.charCodeAt(end) === 59;
			if (terminated) {
				end++;
				const namedReference = type === "named" ? decodeNamedCharacterReference(characters) : false;
				if (namedReference) {
					characterReferenceCharacters = characters;
					characterReference$1 = namedReference;
				}
			}
			let diff = 1 + end - start;
			let reference = "";
			if (!terminated && settings.nonTerminated === false) {} else if (!characters) {
				if (type !== "named") warning(4, diff);
			} else if (type === "named") {
				if (terminated && !characterReference$1) warning(5, 1);
				else {
					if (characterReferenceCharacters !== characters) {
						end = begin + characterReferenceCharacters.length;
						diff = 1 + end - begin;
						terminated = false;
					}
					if (!terminated) {
						const reason = characterReferenceCharacters ? 1 : 3;
						if (settings.attribute) {
							const following$1 = /* @__PURE__ */ value.charCodeAt(end);
							if (following$1 === 61) {
								warning(reason, diff);
								characterReference$1 = "";
							} else if (isAlphanumerical(following$1)) characterReference$1 = "";
							else warning(reason, diff);
						} else warning(reason, diff);
					}
				}
				reference = characterReference$1;
			} else {
				if (!terminated) warning(2, diff);
				let referenceCode = /* @__PURE__ */ Number.parseInt(characters, type === "hexadecimal" ? 16 : 10);
				if (prohibited(referenceCode)) {
					warning(7, diff);
					reference = /* @__PURE__ */ String.fromCharCode(65533);
				} else if (referenceCode in characterReferenceInvalid) {
					warning(6, diff);
					reference = characterReferenceInvalid[referenceCode];
				} else {
					let output = "";
					if (disallowed(referenceCode)) warning(6, diff);
					if (referenceCode > 65535) {
						referenceCode -= 65536;
						output += /* @__PURE__ */ String.fromCharCode(referenceCode >>> 10 | 55296);
						referenceCode = 56320 | referenceCode & 1023;
					}
					reference = output + String.fromCharCode(referenceCode);
				}
			}
			if (reference) {
				flush();
				previous$3 = /* @__PURE__ */ now();
				index$1 = end - 1;
				column += end - start + 1;
				result.push(reference);
				const next = /* @__PURE__ */ now();
				next.offset++;
				if (settings.reference) settings.reference.call(settings.referenceContext || void 0, reference, {
					start: previous$3,
					end: next
				}, /* @__PURE__ */ value.slice(start - 1, end));
				previous$3 = next;
			} else {
				characters = /* @__PURE__ */ value.slice(start - 1, end);
				queue += characters;
				column += characters.length;
				index$1 = end - 1;
			}
		} else {
			if (character === 10) {
				line++;
				lines++;
				column = 0;
			}
			if (Number.isNaN(character)) flush();
			else {
				queue += /* @__PURE__ */ String.fromCharCode(character);
				column++;
			}
		}
	}
	return result.join("");
	function now() {
		return {
			line,
			column,
			offset: index$1 + ((point$3 ? point$3.offset : 0) || 0)
		};
	}
	function warning(code$2, offset) {
		let position$2;
		if (settings.warning) {
			position$2 = /* @__PURE__ */ now();
			position$2.column += offset;
			position$2.offset += offset;
			settings.warning.call(settings.warningContext || void 0, messages[code$2], position$2, code$2);
		}
	}
	function flush() {
		if (queue) {
			result.push(queue);
			if (settings.text) settings.text.call(settings.textContext || void 0, queue, {
				start: previous$3,
				end: /* @__PURE__ */ now()
			});
			queue = "";
		}
	}
}
function prohibited(code$2) {
	return code$2 >= 55296 && code$2 <= 57343 || code$2 > 1114111;
}
function disallowed(code$2) {
	return code$2 >= 1 && code$2 <= 8 || code$2 === 11 || code$2 >= 13 && code$2 <= 31 || code$2 >= 127 && code$2 <= 159 || code$2 >= 64976 && code$2 <= 65007 || (code$2 & 65535) === 65535 || (code$2 & 65535) === 65534;
}
({}).hasOwnProperty;
function directiveFromMarkdown() {
	return {
		canContainEols: ["textDirective"],
		enter: {
			directiveContainer: enterContainer,
			directiveContainerAttributes: enterAttributes,
			directiveContainerLabel: enterContainerLabel,
			directiveLeaf: enterLeaf,
			directiveLeafAttributes: enterAttributes,
			directiveText: enterText,
			directiveTextAttributes: enterAttributes
		},
		exit: {
			directiveContainer: exit,
			directiveContainerAttributeClassValue: exitAttributeClassValue,
			directiveContainerAttributeIdValue: exitAttributeIdValue,
			directiveContainerAttributeName: exitAttributeName,
			directiveContainerAttributeValue: exitAttributeValue,
			directiveContainerAttributes: exitAttributes,
			directiveContainerLabel: exitContainerLabel,
			directiveContainerName: exitName,
			directiveLeaf: exit,
			directiveLeafAttributeClassValue: exitAttributeClassValue,
			directiveLeafAttributeIdValue: exitAttributeIdValue,
			directiveLeafAttributeName: exitAttributeName,
			directiveLeafAttributeValue: exitAttributeValue,
			directiveLeafAttributes: exitAttributes,
			directiveLeafName: exitName,
			directiveText: exit,
			directiveTextAttributeClassValue: exitAttributeClassValue,
			directiveTextAttributeIdValue: exitAttributeIdValue,
			directiveTextAttributeName: exitAttributeName,
			directiveTextAttributeValue: exitAttributeValue,
			directiveTextAttributes: exitAttributes,
			directiveTextName: exitName
		}
	};
}
function enterContainer(token) {
	enter.call(this, "containerDirective", token);
}
function enterLeaf(token) {
	enter.call(this, "leafDirective", token);
}
function enterText(token) {
	enter.call(this, "textDirective", token);
}
function enter(type, token) {
	this.enter({
		type,
		name: "",
		attributes: {},
		children: []
	}, token);
}
function exitName(token) {
	const node$1 = this.stack[this.stack.length - 1];
	node$1.type === "containerDirective" || node$1.type === "leafDirective" || node$1.type;
	node$1.name = /* @__PURE__ */ this.sliceSerialize(token);
}
function enterContainerLabel(token) {
	this.enter({
		type: "paragraph",
		data: { directiveLabel: true },
		children: []
	}, token);
}
function exitContainerLabel(token) {
	this.exit(token);
}
function enterAttributes() {
	this.data.directiveAttributes = [];
	this.buffer();
}
function exitAttributeIdValue(token) {
	this.data.directiveAttributes.push(["id", /* @__PURE__ */ parseEntities(/* @__PURE__ */ this.sliceSerialize(token), { attribute: true })]);
}
function exitAttributeClassValue(token) {
	this.data.directiveAttributes.push(["class", /* @__PURE__ */ parseEntities(/* @__PURE__ */ this.sliceSerialize(token), { attribute: true })]);
}
function exitAttributeValue(token) {
	const list$2 = this.data.directiveAttributes;
	list$2[list$2.length - 1][1] = /* @__PURE__ */ parseEntities(/* @__PURE__ */ this.sliceSerialize(token), { attribute: true });
}
function exitAttributeName(token) {
	this.data.directiveAttributes.push([/* @__PURE__ */ this.sliceSerialize(token), ""]);
}
function exitAttributes() {
	const list$2 = this.data.directiveAttributes;
	const cleaned = {};
	let index$1 = -1;
	while (++index$1 < list$2.length) {
		const attribute = list$2[index$1];
		if (attribute[0] === "class" && cleaned.class) cleaned.class += " " + attribute[1];
		else cleaned[attribute[0]] = attribute[1];
	}
	this.data.directiveAttributes = void 0;
	this.resume();
	const node$1 = this.stack[this.stack.length - 1];
	node$1.type === "containerDirective" || node$1.type === "leafDirective" || node$1.type;
	node$1.attributes = cleaned;
}
function exit(token) {
	this.exit(token);
}
const parse = (raw) => {
	return fromMarkdown(raw, {
		extensions: [/* @__PURE__ */ gfm(), /* @__PURE__ */ directive()],
		mdastExtensions: [/* @__PURE__ */ gfmFromMarkdown(), /* @__PURE__ */ directiveFromMarkdown()]
	});
};
function stringify(values, options) {
	const settings = options || {};
	return (values[values.length - 1] === "" ? [...values, ""] : values).join((settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")).trim();
}
var nameRe = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
var nameReJsx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
var emptyOptions$1 = {};
function name(name$1, options) {
	return ((options || emptyOptions$1).jsx ? nameReJsx : nameRe).test(name$1);
}
var re = /[ \t\n\f\r]/g;
function whitespace(thing) {
	return typeof thing === "object" ? thing.type === "text" ? empty(thing.value) : false : empty(thing);
}
function empty(value) {
	return value.replace(re, "") === "";
}
var Schema$1 = class {
	constructor(property, normal, space$1) {
		this.normal = normal;
		this.property = property;
		if (space$1) this.space = space$1;
	}
};
Schema$1.prototype.normal = {};
Schema$1.prototype.property = {};
Schema$1.prototype.space = void 0;
function merge(definitions, space$1) {
	const property = {};
	const normal = {};
	for (const definition$1 of definitions) {
		Object.assign(property, definition$1.property);
		Object.assign(normal, definition$1.normal);
	}
	return new Schema$1(property, normal, space$1);
}
function normalize(value) {
	return value.toLowerCase();
}
var Info = class {
	constructor(property, attribute) {
		this.attribute = attribute;
		this.property = property;
	}
};
Info.prototype.attribute = "";
Info.prototype.booleanish = false;
Info.prototype.boolean = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.commaSeparated = false;
Info.prototype.defined = false;
Info.prototype.mustUseProperty = false;
Info.prototype.number = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.property = "";
Info.prototype.spaceSeparated = false;
Info.prototype.space = void 0;
var types_exports = /* @__PURE__ */ __export({
	boolean: () => boolean,
	booleanish: () => booleanish,
	commaOrSpaceSeparated: () => commaOrSpaceSeparated,
	commaSeparated: () => commaSeparated,
	number: () => number,
	overloadedBoolean: () => overloadedBoolean,
	spaceSeparated: () => spaceSeparated
});
var powers = 0;
const boolean = /* @__PURE__ */ increment();
const booleanish = /* @__PURE__ */ increment();
const overloadedBoolean = /* @__PURE__ */ increment();
const number = /* @__PURE__ */ increment();
const spaceSeparated = /* @__PURE__ */ increment();
const commaSeparated = /* @__PURE__ */ increment();
const commaOrSpaceSeparated = /* @__PURE__ */ increment();
function increment() {
	return 2 ** ++powers;
}
var checks = /* @__PURE__ */ Object.keys(types_exports);
var DefinedInfo = class extends Info {
	constructor(property, attribute, mask, space$1) {
		let index$1 = -1;
		super(property, attribute);
		mark(this, "space", space$1);
		if (typeof mask === "number") while (++index$1 < checks.length) {
			const check = checks[index$1];
			mark(this, checks[index$1], (mask & types_exports[check]) === types_exports[check]);
		}
	}
};
DefinedInfo.prototype.defined = true;
function mark(values, key, value) {
	if (value) values[key] = value;
}
function create(definition$1) {
	const properties = {};
	const normals = {};
	for (const [property, value] of Object.entries(definition$1.properties)) {
		const info = new DefinedInfo(property, definition$1.transform(definition$1.attributes || {}, property), value, definition$1.space);
		if (definition$1.mustUseProperty && definition$1.mustUseProperty.includes(property)) info.mustUseProperty = true;
		properties[property] = info;
		normals[normalize(property)] = property;
		normals[normalize(info.attribute)] = property;
	}
	return new Schema$1(properties, normals, definition$1.space);
}
const aria = /* @__PURE__ */ create({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: booleanish,
		ariaAutoComplete: null,
		ariaBusy: booleanish,
		ariaChecked: booleanish,
		ariaColCount: number,
		ariaColIndex: number,
		ariaColSpan: number,
		ariaControls: spaceSeparated,
		ariaCurrent: null,
		ariaDescribedBy: spaceSeparated,
		ariaDetails: null,
		ariaDisabled: booleanish,
		ariaDropEffect: spaceSeparated,
		ariaErrorMessage: null,
		ariaExpanded: booleanish,
		ariaFlowTo: spaceSeparated,
		ariaGrabbed: booleanish,
		ariaHasPopup: null,
		ariaHidden: booleanish,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: spaceSeparated,
		ariaLevel: number,
		ariaLive: null,
		ariaModal: booleanish,
		ariaMultiLine: booleanish,
		ariaMultiSelectable: booleanish,
		ariaOrientation: null,
		ariaOwns: spaceSeparated,
		ariaPlaceholder: null,
		ariaPosInSet: number,
		ariaPressed: booleanish,
		ariaReadOnly: booleanish,
		ariaRelevant: null,
		ariaRequired: booleanish,
		ariaRoleDescription: spaceSeparated,
		ariaRowCount: number,
		ariaRowIndex: number,
		ariaRowSpan: number,
		ariaSelected: booleanish,
		ariaSetSize: number,
		ariaSort: null,
		ariaValueMax: number,
		ariaValueMin: number,
		ariaValueNow: number,
		ariaValueText: null,
		role: null
	},
	transform(_, property) {
		return property === "role" ? property : "aria-" + property.slice(4).toLowerCase();
	}
});
function caseSensitiveTransform(attributes$3, attribute) {
	return attribute in attributes$3 ? attributes$3[attribute] : attribute;
}
function caseInsensitiveTransform(attributes$3, property) {
	return caseSensitiveTransform(attributes$3, /* @__PURE__ */ property.toLowerCase());
}
const html$2 = /* @__PURE__ */ create({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: commaSeparated,
		acceptCharset: spaceSeparated,
		accessKey: spaceSeparated,
		action: null,
		allow: null,
		allowFullScreen: boolean,
		allowPaymentRequest: boolean,
		allowUserMedia: boolean,
		alt: null,
		as: null,
		async: boolean,
		autoCapitalize: null,
		autoComplete: spaceSeparated,
		autoFocus: boolean,
		autoPlay: boolean,
		blocking: spaceSeparated,
		capture: null,
		charSet: null,
		checked: boolean,
		cite: null,
		className: spaceSeparated,
		cols: number,
		colSpan: null,
		content: null,
		contentEditable: booleanish,
		controls: boolean,
		controlsList: spaceSeparated,
		coords: number | commaSeparated,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: boolean,
		defer: boolean,
		dir: null,
		dirName: null,
		disabled: boolean,
		download: overloadedBoolean,
		draggable: booleanish,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: boolean,
		formTarget: null,
		headers: spaceSeparated,
		height: number,
		hidden: overloadedBoolean,
		high: number,
		href: null,
		hrefLang: null,
		htmlFor: spaceSeparated,
		httpEquiv: spaceSeparated,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: boolean,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: boolean,
		itemId: null,
		itemProp: spaceSeparated,
		itemRef: spaceSeparated,
		itemScope: boolean,
		itemType: spaceSeparated,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: boolean,
		low: number,
		manifest: null,
		max: null,
		maxLength: number,
		media: null,
		method: null,
		min: null,
		minLength: number,
		multiple: boolean,
		muted: boolean,
		name: null,
		nonce: null,
		noModule: boolean,
		noValidate: boolean,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: boolean,
		optimum: number,
		pattern: null,
		ping: spaceSeparated,
		placeholder: null,
		playsInline: boolean,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: boolean,
		referrerPolicy: null,
		rel: spaceSeparated,
		required: boolean,
		reversed: boolean,
		rows: number,
		rowSpan: number,
		sandbox: spaceSeparated,
		scope: null,
		scoped: boolean,
		seamless: boolean,
		selected: boolean,
		shadowRootClonable: boolean,
		shadowRootDelegatesFocus: boolean,
		shadowRootMode: null,
		shape: null,
		size: number,
		sizes: null,
		slot: null,
		span: number,
		spellCheck: booleanish,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: number,
		step: null,
		style: null,
		tabIndex: number,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: boolean,
		useMap: null,
		value: booleanish,
		width: number,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: spaceSeparated,
		axis: null,
		background: null,
		bgColor: null,
		border: number,
		borderColor: null,
		bottomMargin: number,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: boolean,
		declare: boolean,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: number,
		leftMargin: number,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: number,
		marginWidth: number,
		noResize: boolean,
		noHref: boolean,
		noShade: boolean,
		noWrap: boolean,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: number,
		rules: null,
		scheme: null,
		scrolling: booleanish,
		standby: null,
		summary: null,
		text: null,
		topMargin: number,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: number,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: boolean,
		disableRemotePlayback: boolean,
		prefix: null,
		property: null,
		results: number,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: caseInsensitiveTransform
});
const svg$1 = /* @__PURE__ */ create({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: commaOrSpaceSeparated,
		accentHeight: number,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: number,
		amplitude: number,
		arabicForm: null,
		ascent: number,
		attributeName: null,
		attributeType: null,
		azimuth: number,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: number,
		by: null,
		calcMode: null,
		capHeight: number,
		className: spaceSeparated,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: number,
		diffuseConstant: number,
		direction: null,
		display: null,
		dur: null,
		divisor: number,
		dominantBaseline: null,
		download: boolean,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: number,
		enableBackground: null,
		end: null,
		event: null,
		exponent: number,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: number,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: commaSeparated,
		g2: commaSeparated,
		glyphName: commaSeparated,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: number,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: number,
		horizOriginX: number,
		horizOriginY: number,
		id: null,
		ideographic: number,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: number,
		k: number,
		k1: number,
		k2: number,
		k3: number,
		k4: number,
		kernelMatrix: commaOrSpaceSeparated,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: number,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: number,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: number,
		overlineThickness: number,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: number,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: spaceSeparated,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: number,
		pointsAtY: number,
		pointsAtZ: number,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: commaOrSpaceSeparated,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: commaOrSpaceSeparated,
		rev: commaOrSpaceSeparated,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: commaOrSpaceSeparated,
		requiredFeatures: commaOrSpaceSeparated,
		requiredFonts: commaOrSpaceSeparated,
		requiredFormats: commaOrSpaceSeparated,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: number,
		specularExponent: number,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: number,
		strikethroughThickness: number,
		string: null,
		stroke: null,
		strokeDashArray: commaOrSpaceSeparated,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: number,
		strokeOpacity: number,
		strokeWidth: null,
		style: null,
		surfaceScale: number,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: commaOrSpaceSeparated,
		tabIndex: number,
		tableValues: null,
		target: null,
		targetX: number,
		targetY: number,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: commaOrSpaceSeparated,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: number,
		underlineThickness: number,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: number,
		values: null,
		vAlphabetic: number,
		vMathematical: number,
		vectorEffect: null,
		vHanging: number,
		vIdeographic: number,
		version: null,
		vertAdvY: number,
		vertOriginX: number,
		vertOriginY: number,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: number,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: caseSensitiveTransform
});
const xlink = /* @__PURE__ */ create({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(_, property) {
		return "xlink:" + property.slice(5).toLowerCase();
	}
});
const xmlns = /* @__PURE__ */ create({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: caseInsensitiveTransform
});
const xml = /* @__PURE__ */ create({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(_, property) {
		return "xml:" + property.slice(3).toLowerCase();
	}
});
const hastToReact = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
};
var cap$1 = /[A-Z]/g;
var dash = /-[a-z]/g;
var valid = /^data[-\w.:]+$/i;
function find(schema, value) {
	const normal = /* @__PURE__ */ normalize(value);
	let property = value;
	let Type = Info;
	if (normal in schema.normal) return schema.property[schema.normal[normal]];
	if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
		if (value.charAt(4) === "-") {
			const rest = /* @__PURE__ */ value.slice(5).replace(dash, camelcase);
			property = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
		} else {
			const rest = /* @__PURE__ */ value.slice(4);
			if (!dash.test(rest)) {
				let dashes = /* @__PURE__ */ rest.replace(cap$1, kebab);
				if (dashes.charAt(0) !== "-") dashes = "-" + dashes;
				value = "data" + dashes;
			}
		}
		Type = DefinedInfo;
	}
	return new Type(property, value);
}
function kebab($0) {
	return "-" + $0.toLowerCase();
}
function camelcase($0) {
	return $0.charAt(1).toUpperCase();
}
const html$1 = /* @__PURE__ */ merge([
	aria,
	html$2,
	xlink,
	xmlns,
	xml
], "html");
const svg = /* @__PURE__ */ merge([
	aria,
	svg$1,
	xlink,
	xmlns,
	xml
], "svg");
function stringify$1(values) {
	return values.join(" ").trim();
}
var require_inline_style_parser = /* @__PURE__ */ __commonJSMin((exports, module) => {
	var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
	var NEWLINE_REGEX = /\n/g;
	var WHITESPACE_REGEX = /^\s*/;
	var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
	var COLON_REGEX = /^:\s*/;
	var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
	var SEMICOLON_REGEX = /^[;\s]*/;
	var TRIM_REGEX = /^\s+|\s+$/g;
	var NEWLINE = "\n";
	var FORWARD_SLASH = "/";
	var ASTERISK = "*";
	var EMPTY_STRING = "";
	var TYPE_COMMENT = "comment";
	var TYPE_DECLARATION = "declaration";
	module.exports = function(style, options) {
		if (typeof style !== "string") throw new TypeError("First argument must be a string");
		if (!style) return [];
		options = options || {};
		var lineno = 1;
		var column = 1;
		function updatePosition(str) {
			var lines = /* @__PURE__ */ str.match(NEWLINE_REGEX);
			if (lines) lineno += lines.length;
			var i = /* @__PURE__ */ str.lastIndexOf(NEWLINE);
			column = ~i ? str.length - i : column + str.length;
		}
		function position$2() {
			var start = {
				line: lineno,
				column
			};
			return function(node$1) {
				node$1.position = new Position(start);
				whitespace$1();
				return node$1;
			};
		}
		function Position(start) {
			this.start = start;
			this.end = {
				line: lineno,
				column
			};
			this.source = options.source;
		}
		Position.prototype.content = style;
		var errorsList = [];
		function error(msg) {
			var err = /* @__PURE__ */ new Error(options.source + ":" + lineno + ":" + column + ": " + msg);
			err.reason = msg;
			err.filename = options.source;
			err.line = lineno;
			err.column = column;
			err.source = style;
			if (options.silent) errorsList.push(err);
			else throw err;
		}
		function match(re$1) {
			var m = /* @__PURE__ */ re$1.exec(style);
			if (!m) return;
			var str = m[0];
			updatePosition(str);
			style = /* @__PURE__ */ style.slice(str.length);
			return m;
		}
		function whitespace$1() {
			match(WHITESPACE_REGEX);
		}
		function comments(rules) {
			var c;
			rules = rules || [];
			while (c = /* @__PURE__ */ comment()) if (c !== false) rules.push(c);
			return rules;
		}
		function comment() {
			var pos = /* @__PURE__ */ position$2();
			if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
			var i = 2;
			while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) ++i;
			i += 2;
			if (EMPTY_STRING === style.charAt(i - 1)) return error("End of comment missing");
			var str = /* @__PURE__ */ style.slice(2, i - 2);
			column += 2;
			updatePosition(str);
			style = /* @__PURE__ */ style.slice(i);
			column += 2;
			return pos({
				type: TYPE_COMMENT,
				comment: str
			});
		}
		function declaration() {
			var pos = /* @__PURE__ */ position$2();
			var prop = /* @__PURE__ */ match(PROPERTY_REGEX);
			if (!prop) return;
			comment();
			if (!match(COLON_REGEX)) return error("property missing ':'");
			var val = /* @__PURE__ */ match(VALUE_REGEX);
			var ret = /* @__PURE__ */ pos({
				type: TYPE_DECLARATION,
				property: /* @__PURE__ */ trim(/* @__PURE__ */ prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
				value: val ? trim(/* @__PURE__ */ val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
			});
			match(SEMICOLON_REGEX);
			return ret;
		}
		function declarations() {
			var decls = [];
			comments(decls);
			var decl;
			while (decl = /* @__PURE__ */ declaration()) if (decl !== false) {
				decls.push(decl);
				comments(decls);
			}
			return decls;
		}
		whitespace$1();
		return declarations();
	};
	function trim(str) {
		return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
	}
});
var require_cjs$1 = /* @__PURE__ */ __commonJSMin((exports) => {
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = StyleToObject;
	var inline_style_parser_1 = /* @__PURE__ */ __importDefault(/* @__PURE__ */ require_inline_style_parser());
	function StyleToObject(style, iterator) {
		let styleObject = null;
		if (!style || typeof style !== "string") return styleObject;
		const declarations = /* @__PURE__ */ (0, inline_style_parser_1.default)(style);
		const hasIterator = typeof iterator === "function";
		declarations.forEach((declaration) => {
			if (declaration.type !== "declaration") return;
			const { property, value } = declaration;
			if (hasIterator) iterator(property, value, declaration);
			else if (value) {
				styleObject = styleObject || {};
				styleObject[property] = value;
			}
		});
		return styleObject;
	}
});
var require_utilities = /* @__PURE__ */ __commonJSMin((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9_-]+$/;
	var HYPHEN_REGEX = /-([a-z])/g;
	var NO_HYPHEN_REGEX = /^[^-]+$/;
	var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
	var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
	var skipCamelCase = function(property) {
		return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
	};
	var capitalize = function(match, character) {
		return character.toUpperCase();
	};
	var trimHyphen = function(match, prefix) {
		return "".concat(prefix, "-");
	};
	var camelCase = function(property, options) {
		if (options === void 0) options = {};
		if (skipCamelCase(property)) return property;
		property = /* @__PURE__ */ property.toLowerCase();
		if (options.reactCompat) property = /* @__PURE__ */ property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
		else property = /* @__PURE__ */ property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
		return property.replace(HYPHEN_REGEX, capitalize);
	};
	exports.camelCase = camelCase;
});
var require_cjs = /* @__PURE__ */ __commonJSMin((exports, module) => {
	var style_to_object_1 = /* @__PURE__ */ (exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	})(/* @__PURE__ */ require_cjs$1());
	var utilities_1 = /* @__PURE__ */ require_utilities();
	function StyleToJS(style, options) {
		var output = {};
		if (!style || typeof style !== "string") return output;
		(0, style_to_object_1.default)(style, function(property, value) {
			if (property && value) output[(0, utilities_1.camelCase)(property, options)] = value;
		});
		return output;
	}
	StyleToJS.default = StyleToJS;
	module.exports = StyleToJS;
});
const pointEnd = /* @__PURE__ */ point("end");
const pointStart = /* @__PURE__ */ point("start");
function point(type) {
	return point$3;
	function point$3(node$1) {
		const point$4 = node$1 && node$1.position && node$1.position[type] || {};
		if (typeof point$4.line === "number" && point$4.line > 0 && typeof point$4.column === "number" && point$4.column > 0) return {
			line: point$4.line,
			column: point$4.column,
			offset: typeof point$4.offset === "number" && point$4.offset > -1 ? point$4.offset : void 0
		};
	}
}
function position(node$1) {
	const start = /* @__PURE__ */ pointStart(node$1);
	const end = /* @__PURE__ */ pointEnd(node$1);
	if (start && end) return {
		start,
		end
	};
}
var VFileMessage = class extends Error {
	constructor(causeOrReason, optionsOrParentOrPlace, origin) {
		super();
		if (typeof optionsOrParentOrPlace === "string") {
			origin = optionsOrParentOrPlace;
			optionsOrParentOrPlace = void 0;
		}
		let reason = "";
		let options = {};
		let legacyCause = false;
		if (optionsOrParentOrPlace) if ("line" in optionsOrParentOrPlace && "column" in optionsOrParentOrPlace) options = { place: optionsOrParentOrPlace };
		else if ("start" in optionsOrParentOrPlace && "end" in optionsOrParentOrPlace) options = { place: optionsOrParentOrPlace };
		else if ("type" in optionsOrParentOrPlace) options = {
			ancestors: [optionsOrParentOrPlace],
			place: optionsOrParentOrPlace.position
		};
		else options = { ...optionsOrParentOrPlace };
		if (typeof causeOrReason === "string") reason = causeOrReason;
		else if (!options.cause && causeOrReason) {
			legacyCause = true;
			reason = causeOrReason.message;
			options.cause = causeOrReason;
		}
		if (!options.ruleId && !options.source && typeof origin === "string") {
			const index$1 = /* @__PURE__ */ origin.indexOf(":");
			if (index$1 === -1) options.ruleId = origin;
			else {
				options.source = /* @__PURE__ */ origin.slice(0, index$1);
				options.ruleId = /* @__PURE__ */ origin.slice(index$1 + 1);
			}
		}
		if (!options.place && options.ancestors && options.ancestors) {
			const parent = options.ancestors[options.ancestors.length - 1];
			if (parent) options.place = parent.position;
		}
		const start = options.place && "start" in options.place ? options.place.start : options.place;
		this.ancestors = options.ancestors || void 0;
		this.cause = options.cause || void 0;
		this.column = start ? start.column : void 0;
		this.fatal = void 0;
		this.file = "";
		this.message = reason;
		this.line = start ? start.line : void 0;
		this.name = stringifyPosition(options.place) || "1:1";
		this.place = options.place || void 0;
		this.reason = this.message;
		this.ruleId = options.ruleId || void 0;
		this.source = options.source || void 0;
		this.stack = legacyCause && options.cause && typeof options.cause.stack === "string" ? options.cause.stack : "";
		this.actual = void 0;
		this.expected = void 0;
		this.note = void 0;
		this.url = void 0;
	}
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.column = void 0;
VFileMessage.prototype.line = void 0;
VFileMessage.prototype.ancestors = void 0;
VFileMessage.prototype.cause = void 0;
VFileMessage.prototype.fatal = void 0;
VFileMessage.prototype.place = void 0;
VFileMessage.prototype.ruleId = void 0;
VFileMessage.prototype.source = void 0;
var import_cjs = /* @__PURE__ */ __toESM(/* @__PURE__ */ require_cjs());
var own$1 = {}.hasOwnProperty;
var emptyMap = /* @__PURE__ */ new Map();
var cap = /[A-Z]/g;
var tableElements = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]);
var tableCellElement = new Set(["td", "th"]);
var docs = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function toJsxRuntime(tree, options) {
	if (!options || options.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
	const filePath = options.filePath || void 0;
	let create$1;
	if (options.development) {
		if (typeof options.jsxDEV !== "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
		create$1 = /* @__PURE__ */ developmentCreate(filePath, options.jsxDEV);
	} else {
		if (typeof options.jsx !== "function") throw new TypeError("Expected `jsx` in production options");
		if (typeof options.jsxs !== "function") throw new TypeError("Expected `jsxs` in production options");
		create$1 = /* @__PURE__ */ productionCreate(filePath, options.jsx, options.jsxs);
	}
	const state = {
		Fragment: options.Fragment,
		ancestors: [],
		components: options.components || {},
		create: create$1,
		elementAttributeNameCase: options.elementAttributeNameCase || "react",
		evaluater: options.createEvaluater ? options.createEvaluater() : void 0,
		filePath,
		ignoreInvalidStyle: options.ignoreInvalidStyle || false,
		passKeys: options.passKeys !== false,
		passNode: options.passNode || false,
		schema: options.space === "svg" ? svg : html$1,
		stylePropertyNameCase: options.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: options.tableCellAlignToStyle !== false
	};
	const result = /* @__PURE__ */ one(state, tree, void 0);
	if (result && typeof result !== "string") return result;
	return state.create(tree, state.Fragment, { children: result || void 0 }, void 0);
}
function one(state, node$1, key) {
	if (node$1.type === "element") return element(state, node$1, key);
	if (node$1.type === "mdxFlowExpression" || node$1.type === "mdxTextExpression") return mdxExpression(state, node$1);
	if (node$1.type === "mdxJsxFlowElement" || node$1.type === "mdxJsxTextElement") return mdxJsxElement(state, node$1, key);
	if (node$1.type === "mdxjsEsm") return mdxEsm(state, node$1);
	if (node$1.type === "root") return root$1(state, node$1, key);
	if (node$1.type === "text") return text$1(state, node$1);
}
function element(state, node$1, key) {
	const parentSchema = state.schema;
	let schema = parentSchema;
	if (node$1.tagName.toLowerCase() === "svg" && parentSchema.space === "html") {
		schema = svg;
		state.schema = schema;
	}
	state.ancestors.push(node$1);
	const type = /* @__PURE__ */ findComponentFromName(state, node$1.tagName, false);
	const props = /* @__PURE__ */ createElementProps(state, node$1);
	let children = /* @__PURE__ */ createChildren(state, node$1);
	if (tableElements.has(node$1.tagName)) children = /* @__PURE__ */ children.filter(function(child) {
		return typeof child === "string" ? !whitespace(child) : true;
	});
	addNode(state, props, type, node$1);
	addChildren(props, children);
	state.ancestors.pop();
	state.schema = parentSchema;
	return state.create(node$1, type, props, key);
}
function mdxExpression(state, node$1) {
	if (node$1.data && node$1.data.estree && state.evaluater) {
		const expression = node$1.data.estree.body[0];
		expression.type;
		return state.evaluater.evaluateExpression(expression.expression);
	}
	crashEstree(state, node$1.position);
}
function mdxEsm(state, node$1) {
	if (node$1.data && node$1.data.estree && state.evaluater) return state.evaluater.evaluateProgram(node$1.data.estree);
	crashEstree(state, node$1.position);
}
function mdxJsxElement(state, node$1, key) {
	const parentSchema = state.schema;
	let schema = parentSchema;
	if (node$1.name === "svg" && parentSchema.space === "html") {
		schema = svg;
		state.schema = schema;
	}
	state.ancestors.push(node$1);
	const type = node$1.name === null ? state.Fragment : findComponentFromName(state, node$1.name, true);
	const props = /* @__PURE__ */ createJsxElementProps(state, node$1);
	const children = /* @__PURE__ */ createChildren(state, node$1);
	addNode(state, props, type, node$1);
	addChildren(props, children);
	state.ancestors.pop();
	state.schema = parentSchema;
	return state.create(node$1, type, props, key);
}
function root$1(state, node$1, key) {
	const props = {};
	addChildren(props, /* @__PURE__ */ createChildren(state, node$1));
	return state.create(node$1, state.Fragment, props, key);
}
function text$1(_, node$1) {
	return node$1.value;
}
function addNode(state, props, type, node$1) {
	if (typeof type !== "string" && type !== state.Fragment && state.passNode) props.node = node$1;
}
function addChildren(props, children) {
	if (children.length > 0) {
		const value = children.length > 1 ? children : children[0];
		if (value) props.children = value;
	}
}
function productionCreate(_, jsx$1, jsxs$1) {
	return create$1;
	function create$1(_$1, type, props, key) {
		const fn = Array.isArray(props.children) ? jsxs$1 : jsx$1;
		return key ? fn(type, props, key) : fn(type, props);
	}
}
function developmentCreate(filePath, jsxDEV) {
	return create$1;
	function create$1(node$1, type, props, key) {
		const isStaticChildren = /* @__PURE__ */ Array.isArray(props.children);
		const point$3 = /* @__PURE__ */ pointStart(node$1);
		return jsxDEV(type, props, key, isStaticChildren, {
			columnNumber: point$3 ? point$3.column - 1 : void 0,
			fileName: filePath,
			lineNumber: point$3 ? point$3.line : void 0
		}, void 0);
	}
}
function createElementProps(state, node$1) {
	const props = {};
	let alignValue;
	let prop;
	for (prop in node$1.properties) if (prop !== "children" && own$1.call(node$1.properties, prop)) {
		const result = /* @__PURE__ */ createProperty(state, prop, node$1.properties[prop]);
		if (result) {
			const [key, value] = result;
			if (state.tableCellAlignToStyle && key === "align" && typeof value === "string" && tableCellElement.has(node$1.tagName)) alignValue = value;
			else props[key] = value;
		}
	}
	if (alignValue) {
		const style = props.style || (props.style = {});
		style[state.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = alignValue;
	}
	return props;
}
function createJsxElementProps(state, node$1) {
	const props = {};
	for (const attribute of node$1.attributes) if (attribute.type === "mdxJsxExpressionAttribute") if (attribute.data && attribute.data.estree && state.evaluater) {
		const expression = attribute.data.estree.body[0];
		expression.type;
		const objectExpression = expression.expression;
		objectExpression.type;
		const property = objectExpression.properties[0];
		property.type;
		Object.assign(props, /* @__PURE__ */ state.evaluater.evaluateExpression(property.argument));
	} else crashEstree(state, node$1.position);
	else {
		const name$1 = attribute.name;
		let value;
		if (attribute.value && typeof attribute.value === "object") if (attribute.value.data && attribute.value.data.estree && state.evaluater) {
			const expression = attribute.value.data.estree.body[0];
			expression.type;
			value = /* @__PURE__ */ state.evaluater.evaluateExpression(expression.expression);
		} else crashEstree(state, node$1.position);
		else value = attribute.value === null ? true : attribute.value;
		props[name$1] = value;
	}
	return props;
}
function createChildren(state, node$1) {
	const children = [];
	let index$1 = -1;
	/* c8 ignore next */ const countsByName = state.passKeys ? /* @__PURE__ */ new Map() : emptyMap;
	while (++index$1 < node$1.children.length) {
		const child = node$1.children[index$1];
		let key;
		if (state.passKeys) {
			const name$1 = child.type === "element" ? child.tagName : child.type === "mdxJsxFlowElement" || child.type === "mdxJsxTextElement" ? child.name : void 0;
			if (name$1) {
				const count = countsByName.get(name$1) || 0;
				key = name$1 + "-" + count;
				countsByName.set(name$1, count + 1);
			}
		}
		const result = /* @__PURE__ */ one(state, child, key);
		if (result !== void 0) children.push(result);
	}
	return children;
}
function createProperty(state, prop, value) {
	const info = /* @__PURE__ */ find(state.schema, prop);
	if (value === null || value === void 0 || typeof value === "number" && Number.isNaN(value)) return;
	if (Array.isArray(value)) value = info.commaSeparated ? stringify(value) : stringify$1(value);
	if (info.property === "style") {
		let styleObject = typeof value === "object" ? value : parseStyle(state, /* @__PURE__ */ String(value));
		if (state.stylePropertyNameCase === "css") styleObject = /* @__PURE__ */ transformStylesToCssCasing(styleObject);
		return ["style", styleObject];
	}
	return [state.elementAttributeNameCase === "react" && info.space ? hastToReact[info.property] || info.property : info.attribute, value];
}
function parseStyle(state, value) {
	try {
		return (0, import_cjs.default)(value, { reactCompat: true });
	} catch (error) {
		if (state.ignoreInvalidStyle) return {};
		const cause = error;
		const message = new VFileMessage("Cannot parse `style` attribute", {
			ancestors: state.ancestors,
			cause,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		message.file = state.filePath || void 0;
		message.url = docs + "#cannot-parse-style-attribute";
		throw message;
	}
}
function findComponentFromName(state, name$1, allowExpression) {
	let result;
	if (!allowExpression) result = {
		type: "Literal",
		value: name$1
	};
	else if (name$1.includes(".")) {
		const identifiers = /* @__PURE__ */ name$1.split(".");
		let index$1 = -1;
		let node$1;
		while (++index$1 < identifiers.length) {
			const prop = name(identifiers[index$1]) ? {
				type: "Identifier",
				name: identifiers[index$1]
			} : {
				type: "Literal",
				value: identifiers[index$1]
			};
			node$1 = node$1 ? {
				type: "MemberExpression",
				object: node$1,
				property: prop,
				computed: /* @__PURE__ */ Boolean(index$1 && prop.type === "Literal"),
				optional: false
			} : prop;
		}
		result = node$1;
	} else result = name(name$1) && !/^[a-z]/.test(name$1) ? {
		type: "Identifier",
		name: name$1
	} : {
		type: "Literal",
		value: name$1
	};
	if (result.type === "Literal") {
		const name$2 = result.value;
		return own$1.call(state.components, name$2) ? state.components[name$2] : name$2;
	}
	if (state.evaluater) return state.evaluater.evaluateExpression(result);
	crashEstree(state);
}
function crashEstree(state, place) {
	const message = new VFileMessage("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: state.ancestors,
		place,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	message.file = state.filePath || void 0;
	message.url = docs + "#cannot-handle-mdx-estrees-without-createevaluater";
	throw message;
}
function transformStylesToCssCasing(domCasing) {
	const cssCasing = {};
	let from;
	for (from in domCasing) if (own$1.call(domCasing, from)) cssCasing[transformStyleToCssCasing(from)] = domCasing[from];
	return cssCasing;
}
function transformStyleToCssCasing(from) {
	let to = /* @__PURE__ */ from.replace(cap, toDash);
	if (to.slice(0, 3) === "ms-") to = "-" + to;
	return to;
}
function toDash($0) {
	return "-" + $0.toLowerCase();
}
function rehypeVue({ components }) {
	return function convert$1(node$1) {
		return toJsxRuntime(node$1, {
			Fragment,
			jsx,
			jsxs,
			components
		});
	};
}
function blockquote(state, node$1) {
	const result = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: /* @__PURE__ */ state.wrap(/* @__PURE__ */ state.all(node$1), true)
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function hardBreak(state, node$1) {
	const result = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	state.patch(node$1, result);
	return [/* @__PURE__ */ state.applyData(node$1, result), {
		type: "text",
		value: "\n"
	}];
}
function code(state, node$1) {
	const value = node$1.value ? node$1.value + "\n" : "";
	const properties = {};
	if (node$1.lang) properties.className = ["language-" + node$1.lang];
	let result = {
		type: "element",
		tagName: "code",
		properties,
		children: [{
			type: "text",
			value
		}]
	};
	if (node$1.meta) result.data = { meta: node$1.meta };
	state.patch(node$1, result);
	result = /* @__PURE__ */ state.applyData(node$1, result);
	result = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [result]
	};
	state.patch(node$1, result);
	return result;
}
function strikethrough(state, node$1) {
	const result = {
		type: "element",
		tagName: "del",
		properties: {},
		children: /* @__PURE__ */ state.all(node$1)
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function emphasis(state, node$1) {
	const result = {
		type: "element",
		tagName: "em",
		properties: {},
		children: /* @__PURE__ */ state.all(node$1)
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function footnoteReference(state, node$1) {
	const clobberPrefix = typeof state.options.clobberPrefix === "string" ? state.options.clobberPrefix : "user-content-";
	const id = /* @__PURE__ */ String(node$1.identifier).toUpperCase();
	const safeId = /* @__PURE__ */ normalizeUri(/* @__PURE__ */ id.toLowerCase());
	const index$1 = /* @__PURE__ */ state.footnoteOrder.indexOf(id);
	let counter;
	let reuseCounter = /* @__PURE__ */ state.footnoteCounts.get(id);
	if (reuseCounter === void 0) {
		reuseCounter = 0;
		state.footnoteOrder.push(id);
		counter = state.footnoteOrder.length;
	} else counter = index$1 + 1;
	reuseCounter += 1;
	state.footnoteCounts.set(id, reuseCounter);
	const link$1 = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + clobberPrefix + "fn-" + safeId,
			id: clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
			dataFootnoteRef: true,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: /* @__PURE__ */ String(counter)
		}]
	};
	state.patch(node$1, link$1);
	const sup = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [link$1]
	};
	state.patch(node$1, sup);
	return state.applyData(node$1, sup);
}
function heading(state, node$1) {
	const result = {
		type: "element",
		tagName: "h" + node$1.depth,
		properties: {},
		children: /* @__PURE__ */ state.all(node$1)
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function html(state, node$1) {
	if (state.options.allowDangerousHtml) {
		const result = {
			type: "raw",
			value: node$1.value
		};
		state.patch(node$1, result);
		return state.applyData(node$1, result);
	}
}
function revert(state, node$1) {
	const subtype = node$1.referenceType;
	let suffix = "]";
	if (subtype === "collapsed") suffix += "[]";
	else if (subtype === "full") suffix += "[" + (node$1.label || node$1.identifier) + "]";
	if (node$1.type === "imageReference") return [{
		type: "text",
		value: "![" + node$1.alt + suffix
	}];
	const contents = /* @__PURE__ */ state.all(node$1);
	const head = contents[0];
	if (head && head.type === "text") head.value = "[" + head.value;
	else contents.unshift({
		type: "text",
		value: "["
	});
	const tail = contents[contents.length - 1];
	if (tail && tail.type === "text") tail.value += suffix;
	else contents.push({
		type: "text",
		value: suffix
	});
	return contents;
}
function imageReference(state, node$1) {
	const id = /* @__PURE__ */ String(node$1.identifier).toUpperCase();
	const definition$1 = /* @__PURE__ */ state.definitionById.get(id);
	if (!definition$1) return revert(state, node$1);
	const properties = {
		src: /* @__PURE__ */ normalizeUri(definition$1.url || ""),
		alt: node$1.alt
	};
	if (definition$1.title !== null && definition$1.title !== void 0) properties.title = definition$1.title;
	const result = {
		type: "element",
		tagName: "img",
		properties,
		children: []
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function image(state, node$1) {
	const properties = { src: /* @__PURE__ */ normalizeUri(node$1.url) };
	if (node$1.alt !== null && node$1.alt !== void 0) properties.alt = node$1.alt;
	if (node$1.title !== null && node$1.title !== void 0) properties.title = node$1.title;
	const result = {
		type: "element",
		tagName: "img",
		properties,
		children: []
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function inlineCode(state, node$1) {
	const text$5 = {
		type: "text",
		value: /* @__PURE__ */ node$1.value.replace(/\r?\n|\r/g, " ")
	};
	state.patch(node$1, text$5);
	const result = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [text$5]
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function linkReference(state, node$1) {
	const id = /* @__PURE__ */ String(node$1.identifier).toUpperCase();
	const definition$1 = /* @__PURE__ */ state.definitionById.get(id);
	if (!definition$1) return revert(state, node$1);
	const properties = { href: /* @__PURE__ */ normalizeUri(definition$1.url || "") };
	if (definition$1.title !== null && definition$1.title !== void 0) properties.title = definition$1.title;
	const result = {
		type: "element",
		tagName: "a",
		properties,
		children: /* @__PURE__ */ state.all(node$1)
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function link(state, node$1) {
	const properties = { href: /* @__PURE__ */ normalizeUri(node$1.url) };
	if (node$1.title !== null && node$1.title !== void 0) properties.title = node$1.title;
	const result = {
		type: "element",
		tagName: "a",
		properties,
		children: /* @__PURE__ */ state.all(node$1)
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function listItem(state, node$1, parent) {
	const results = /* @__PURE__ */ state.all(node$1);
	const loose = parent ? listLoose(parent) : listItemLoose(node$1);
	const properties = {};
	const children = [];
	if (typeof node$1.checked === "boolean") {
		const head = results[0];
		let paragraph$1;
		if (head && head.type === "element" && head.tagName === "p") paragraph$1 = head;
		else {
			paragraph$1 = {
				type: "element",
				tagName: "p",
				properties: {},
				children: []
			};
			results.unshift(paragraph$1);
		}
		if (paragraph$1.children.length > 0) paragraph$1.children.unshift({
			type: "text",
			value: " "
		});
		paragraph$1.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: node$1.checked,
				disabled: true
			},
			children: []
		});
		properties.className = ["task-list-item"];
	}
	let index$1 = -1;
	while (++index$1 < results.length) {
		const child = results[index$1];
		if (loose || index$1 !== 0 || child.type !== "element" || child.tagName !== "p") children.push({
			type: "text",
			value: "\n"
		});
		if (child.type === "element" && child.tagName === "p" && !loose) children.push(...child.children);
		else children.push(child);
	}
	const tail = results[results.length - 1];
	if (tail && (loose || tail.type !== "element" || tail.tagName !== "p")) children.push({
		type: "text",
		value: "\n"
	});
	const result = {
		type: "element",
		tagName: "li",
		properties,
		children
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function listLoose(node$1) {
	let loose = false;
	if (node$1.type === "list") {
		loose = node$1.spread || false;
		const children = node$1.children;
		let index$1 = -1;
		while (!loose && ++index$1 < children.length) loose = /* @__PURE__ */ listItemLoose(children[index$1]);
	}
	return loose;
}
function listItemLoose(node$1) {
	const spread = node$1.spread;
	return spread === null || spread === void 0 ? node$1.children.length > 1 : spread;
}
function list(state, node$1) {
	const properties = {};
	const results = /* @__PURE__ */ state.all(node$1);
	let index$1 = -1;
	if (typeof node$1.start === "number" && node$1.start !== 1) properties.start = node$1.start;
	while (++index$1 < results.length) {
		const child = results[index$1];
		if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
			properties.className = ["contains-task-list"];
			break;
		}
	}
	const result = {
		type: "element",
		tagName: node$1.ordered ? "ol" : "ul",
		properties,
		children: /* @__PURE__ */ state.wrap(results, true)
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function paragraph(state, node$1) {
	const result = {
		type: "element",
		tagName: "p",
		properties: {},
		children: /* @__PURE__ */ state.all(node$1)
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function root(state, node$1) {
	const result = {
		type: "root",
		children: /* @__PURE__ */ state.wrap(/* @__PURE__ */ state.all(node$1))
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function strong(state, node$1) {
	const result = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: /* @__PURE__ */ state.all(node$1)
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function table(state, node$1) {
	const rows = /* @__PURE__ */ state.all(node$1);
	const firstRow = /* @__PURE__ */ rows.shift();
	const tableContent = [];
	if (firstRow) {
		const head = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: /* @__PURE__ */ state.wrap([firstRow], true)
		};
		state.patch(node$1.children[0], head);
		tableContent.push(head);
	}
	if (rows.length > 0) {
		const body = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: /* @__PURE__ */ state.wrap(rows, true)
		};
		const start = /* @__PURE__ */ pointStart(node$1.children[1]);
		const end = /* @__PURE__ */ pointEnd(node$1.children[node$1.children.length - 1]);
		if (start && end) body.position = {
			start,
			end
		};
		tableContent.push(body);
	}
	const result = {
		type: "element",
		tagName: "table",
		properties: {},
		children: /* @__PURE__ */ state.wrap(tableContent, true)
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function tableRow(state, node$1, parent) {
	const siblings = parent ? parent.children : void 0;
	const tagName = (siblings ? siblings.indexOf(node$1) : 1) === 0 ? "th" : "td";
	const align = parent && parent.type === "table" ? parent.align : void 0;
	const length = align ? align.length : node$1.children.length;
	let cellIndex = -1;
	const cells = [];
	while (++cellIndex < length) {
		const cell = node$1.children[cellIndex];
		const properties = {};
		const alignValue = align ? align[cellIndex] : void 0;
		if (alignValue) properties.align = alignValue;
		let result$1 = {
			type: "element",
			tagName,
			properties,
			children: []
		};
		if (cell) {
			result$1.children = /* @__PURE__ */ state.all(cell);
			state.patch(cell, result$1);
			result$1 = /* @__PURE__ */ state.applyData(cell, result$1);
		}
		cells.push(result$1);
	}
	const result = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: /* @__PURE__ */ state.wrap(cells, true)
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function tableCell(state, node$1) {
	const result = {
		type: "element",
		tagName: "td",
		properties: {},
		children: /* @__PURE__ */ state.all(node$1)
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
var tab = 9;
var space = 32;
function trimLines(value) {
	const source = /* @__PURE__ */ String(value);
	const search$1 = /\r?\n|\r/g;
	let match = /* @__PURE__ */ search$1.exec(source);
	let last$1 = 0;
	const lines = [];
	while (match) {
		lines.push(/* @__PURE__ */ trimLine(/* @__PURE__ */ source.slice(last$1, match.index), last$1 > 0, true), match[0]);
		last$1 = match.index + match[0].length;
		match = /* @__PURE__ */ search$1.exec(source);
	}
	lines.push(/* @__PURE__ */ trimLine(/* @__PURE__ */ source.slice(last$1), last$1 > 0, false));
	return lines.join("");
}
function trimLine(value, start, end) {
	let startIndex = 0;
	let endIndex = value.length;
	if (start) {
		let code$2 = /* @__PURE__ */ value.codePointAt(startIndex);
		while (code$2 === tab || code$2 === space) {
			startIndex++;
			code$2 = /* @__PURE__ */ value.codePointAt(startIndex);
		}
	}
	if (end) {
		let code$2 = /* @__PURE__ */ value.codePointAt(endIndex - 1);
		while (code$2 === tab || code$2 === space) {
			endIndex--;
			code$2 = /* @__PURE__ */ value.codePointAt(endIndex - 1);
		}
	}
	return endIndex > startIndex ? value.slice(startIndex, endIndex) : "";
}
function text(state, node$1) {
	const result = {
		type: "text",
		value: /* @__PURE__ */ trimLines(/* @__PURE__ */ String(node$1.value))
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function thematicBreak(state, node$1) {
	const result = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
const handlers = {
	blockquote,
	break: hardBreak,
	code,
	delete: strikethrough,
	emphasis,
	footnoteReference,
	heading,
	html,
	imageReference,
	image,
	inlineCode,
	linkReference,
	link,
	listItem,
	list,
	paragraph,
	root,
	strong,
	table,
	tableCell,
	tableRow,
	text,
	thematicBreak,
	toml: ignore,
	yaml: ignore,
	definition: ignore,
	footnoteDefinition: ignore
};
function ignore() {}
var env = typeof self === "object" ? self : globalThis;
var deserializer = ($, _) => {
	const as = (out, index$1) => {
		$.set(index$1, out);
		return out;
	};
	const unpair = (index$1) => {
		if ($.has(index$1)) return $.get(index$1);
		const [type, value] = _[index$1];
		switch (type) {
			case 0:
			case -1: return as(value, index$1);
			case 1: {
				const arr = /* @__PURE__ */ as([], index$1);
				for (const index$2 of value) arr.push(/* @__PURE__ */ unpair(index$2));
				return arr;
			}
			case 2: {
				const object$1 = /* @__PURE__ */ as({}, index$1);
				for (const [key, index$2] of value) object$1[unpair(key)] = /* @__PURE__ */ unpair(index$2);
				return object$1;
			}
			case 3: return as(new Date(value), index$1);
			case 4: {
				const { source, flags } = value;
				return as(new RegExp(source, flags), index$1);
			}
			case 5: {
				const map$1 = /* @__PURE__ */ as(/* @__PURE__ */ new Map(), index$1);
				for (const [key, index$2] of value) map$1.set(/* @__PURE__ */ unpair(key), /* @__PURE__ */ unpair(index$2));
				return map$1;
			}
			case 6: {
				const set$1 = /* @__PURE__ */ as(/* @__PURE__ */ new Set(), index$1);
				for (const index$2 of value) set$1.add(/* @__PURE__ */ unpair(index$2));
				return set$1;
			}
			case 7: {
				const { name: name$1, message } = value;
				return as(new env[name$1](message), index$1);
			}
			case 8: return as(/* @__PURE__ */ BigInt(value), index$1);
			case "BigInt": return as(/* @__PURE__ */ Object(/* @__PURE__ */ BigInt(value)), index$1);
			case "ArrayBuffer": return as(new Uint8Array(value).buffer, value);
			case "DataView": {
				const { buffer } = new Uint8Array(value);
				return as(new DataView(buffer), value);
			}
		}
		return as(new env[type](value), index$1);
	};
	return unpair;
};
const deserialize = (serialized) => deserializer(/* @__PURE__ */ new Map(), serialized)(0);
var EMPTY = "";
var { toString } = {};
var { keys } = Object;
var typeOf = (value) => {
	const type = typeof value;
	if (type !== "object" || !value) return [0, type];
	const asString = /* @__PURE__ */ toString.call(value).slice(8, -1);
	switch (asString) {
		case "Array": return [1, EMPTY];
		case "Object": return [2, EMPTY];
		case "Date": return [3, EMPTY];
		case "RegExp": return [4, EMPTY];
		case "Map": return [5, EMPTY];
		case "Set": return [6, EMPTY];
		case "DataView": return [1, asString];
	}
	if (asString.includes("Array")) return [1, asString];
	if (asString.includes("Error")) return [7, asString];
	return [2, asString];
};
var shouldSkip = ([TYPE, type]) => TYPE === 0 && (type === "function" || type === "symbol");
var serializer = (strict, json, $, _) => {
	const as = (out, value) => {
		const index$1 = _.push(out) - 1;
		$.set(value, index$1);
		return index$1;
	};
	const pair = (value) => {
		if ($.has(value)) return $.get(value);
		let [TYPE, type] = typeOf(value);
		switch (TYPE) {
			case 0: {
				let entry = value;
				switch (type) {
					case "bigint":
						TYPE = 8;
						entry = /* @__PURE__ */ value.toString();
						break;
					case "function":
					case "symbol":
						if (strict) throw new TypeError("unable to serialize " + type);
						entry = null;
						break;
					case "undefined": return as([-1], value);
				}
				return as([TYPE, entry], value);
			}
			case 1: {
				if (type) {
					let spread = value;
					if (type === "DataView") spread = new Uint8Array(value.buffer);
					else if (type === "ArrayBuffer") spread = new Uint8Array(value);
					return as([type, [...spread]], value);
				}
				const arr = [];
				const index$1 = /* @__PURE__ */ as([TYPE, arr], value);
				for (const entry of value) arr.push(/* @__PURE__ */ pair(entry));
				return index$1;
			}
			case 2: {
				if (type) switch (type) {
					case "BigInt": return as([type, /* @__PURE__ */ value.toString()], value);
					case "Boolean":
					case "Number":
					case "String": return as([type, /* @__PURE__ */ value.valueOf()], value);
				}
				if (json && "toJSON" in value) return pair(/* @__PURE__ */ value.toJSON());
				const entries = [];
				const index$1 = /* @__PURE__ */ as([TYPE, entries], value);
				for (const key of keys(value)) if (strict || !shouldSkip(/* @__PURE__ */ typeOf(value[key]))) entries.push([/* @__PURE__ */ pair(key), /* @__PURE__ */ pair(value[key])]);
				return index$1;
			}
			case 3: return as([TYPE, /* @__PURE__ */ value.toISOString()], value);
			case 4: {
				const { source, flags } = value;
				return as([TYPE, {
					source,
					flags
				}], value);
			}
			case 5: {
				const entries = [];
				const index$1 = /* @__PURE__ */ as([TYPE, entries], value);
				for (const [key, entry] of value) if (strict || !(shouldSkip(/* @__PURE__ */ typeOf(key)) || shouldSkip(/* @__PURE__ */ typeOf(entry)))) entries.push([/* @__PURE__ */ pair(key), /* @__PURE__ */ pair(entry)]);
				return index$1;
			}
			case 6: {
				const entries = [];
				const index$1 = /* @__PURE__ */ as([TYPE, entries], value);
				for (const entry of value) if (strict || !shouldSkip(/* @__PURE__ */ typeOf(entry))) entries.push(/* @__PURE__ */ pair(entry));
				return index$1;
			}
		}
		const { message } = value;
		return as([TYPE, {
			name: type,
			message
		}], value);
	};
	return pair;
};
const serialize = (value, { json, lossy } = {}) => {
	const _ = [];
	return serializer(!(json || lossy), !!json, /* @__PURE__ */ new Map(), _)(value), _;
};
var esm_default = typeof structuredClone === "function" ? (any$1, options) => options && ("json" in options || "lossy" in options) ? deserialize(/* @__PURE__ */ serialize(any$1, options)) : structuredClone(any$1) : (any$1, options) => deserialize(/* @__PURE__ */ serialize(any$1, options));
function defaultFootnoteBackContent(_, rereferenceIndex) {
	const result = [{
		type: "text",
		value: "↩"
	}];
	if (rereferenceIndex > 1) result.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: /* @__PURE__ */ String(rereferenceIndex)
		}]
	});
	return result;
}
function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
	return "Back to reference " + (referenceIndex + 1) + (rereferenceIndex > 1 ? "-" + rereferenceIndex : "");
}
function footer(state) {
	const clobberPrefix = typeof state.options.clobberPrefix === "string" ? state.options.clobberPrefix : "user-content-";
	const footnoteBackContent = state.options.footnoteBackContent || defaultFootnoteBackContent;
	const footnoteBackLabel = state.options.footnoteBackLabel || defaultFootnoteBackLabel;
	const footnoteLabel = state.options.footnoteLabel || "Footnotes";
	const footnoteLabelTagName = state.options.footnoteLabelTagName || "h2";
	const footnoteLabelProperties = state.options.footnoteLabelProperties || { className: ["sr-only"] };
	const listItems = [];
	let referenceIndex = -1;
	while (++referenceIndex < state.footnoteOrder.length) {
		const definition$1 = /* @__PURE__ */ state.footnoteById.get(state.footnoteOrder[referenceIndex]);
		if (!definition$1) continue;
		const content$2 = /* @__PURE__ */ state.all(definition$1);
		const id = /* @__PURE__ */ String(definition$1.identifier).toUpperCase();
		const safeId = /* @__PURE__ */ normalizeUri(/* @__PURE__ */ id.toLowerCase());
		let rereferenceIndex = 0;
		const backReferences = [];
		const counts = /* @__PURE__ */ state.footnoteCounts.get(id);
		while (counts !== void 0 && ++rereferenceIndex <= counts) {
			if (backReferences.length > 0) backReferences.push({
				type: "text",
				value: " "
			});
			let children = typeof footnoteBackContent === "string" ? footnoteBackContent : footnoteBackContent(referenceIndex, rereferenceIndex);
			if (typeof children === "string") children = {
				type: "text",
				value: children
			};
			backReferences.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + clobberPrefix + "fnref-" + safeId + (rereferenceIndex > 1 ? "-" + rereferenceIndex : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof footnoteBackLabel === "string" ? footnoteBackLabel : footnoteBackLabel(referenceIndex, rereferenceIndex),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(children) ? children : [children]
			});
		}
		const tail = content$2[content$2.length - 1];
		if (tail && tail.type === "element" && tail.tagName === "p") {
			const tailTail = tail.children[tail.children.length - 1];
			if (tailTail && tailTail.type === "text") tailTail.value += " ";
			else tail.children.push({
				type: "text",
				value: " "
			});
			tail.children.push(...backReferences);
		} else content$2.push(...backReferences);
		const listItem$1 = {
			type: "element",
			tagName: "li",
			properties: { id: clobberPrefix + "fn-" + safeId },
			children: /* @__PURE__ */ state.wrap(content$2, true)
		};
		state.patch(definition$1, listItem$1);
		listItems.push(listItem$1);
	}
	if (listItems.length === 0) return;
	return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: true,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: footnoteLabelTagName,
				properties: {
					...esm_default(footnoteLabelProperties),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: footnoteLabel
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: /* @__PURE__ */ state.wrap(listItems, true)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
var own = {}.hasOwnProperty;
var emptyOptions = {};
function createState(tree, options) {
	const settings = options || emptyOptions;
	const definitionById = /* @__PURE__ */ new Map();
	const footnoteById = /* @__PURE__ */ new Map();
	const state = {
		all: all$1,
		applyData,
		definitionById,
		footnoteById,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...handlers,
			...settings.handlers
		},
		one: one$2,
		options: settings,
		patch,
		wrap
	};
	visit(tree, function(node$1) {
		if (node$1.type === "definition" || node$1.type === "footnoteDefinition") {
			const map$1 = node$1.type === "definition" ? definitionById : footnoteById;
			const id = /* @__PURE__ */ String(node$1.identifier).toUpperCase();
			if (!map$1.has(id)) map$1.set(id, node$1);
		}
	});
	return state;
	function one$2(node$1, parent) {
		const type = node$1.type;
		const handle = state.handlers[type];
		if (own.call(state.handlers, type) && handle) return handle(state, node$1, parent);
		if (state.options.passThrough && state.options.passThrough.includes(type)) {
			if ("children" in node$1) {
				const { children,...shallow } = node$1;
				const result = /* @__PURE__ */ esm_default(shallow);
				result.children = /* @__PURE__ */ state.all(node$1);
				return result;
			}
			return esm_default(node$1);
		}
		return (state.options.unknownHandler || defaultUnknownHandler)(state, node$1, parent);
	}
	function all$1(parent) {
		const values = [];
		if ("children" in parent) {
			const nodes = parent.children;
			let index$1 = -1;
			while (++index$1 < nodes.length) {
				const result = /* @__PURE__ */ state.one(nodes[index$1], parent);
				if (result) {
					if (index$1 && nodes[index$1 - 1].type === "break") {
						if (!Array.isArray(result) && result.type === "text") result.value = /* @__PURE__ */ trimMarkdownSpaceStart(result.value);
						if (!Array.isArray(result) && result.type === "element") {
							const head = result.children[0];
							if (head && head.type === "text") head.value = /* @__PURE__ */ trimMarkdownSpaceStart(head.value);
						}
					}
					if (Array.isArray(result)) values.push(...result);
					else values.push(result);
				}
			}
		}
		return values;
	}
}
function patch(from, to) {
	if (from.position) to.position = /* @__PURE__ */ position(from);
}
function applyData(from, to) {
	let result = to;
	if (from && from.data) {
		const hName = from.data.hName;
		const hChildren = from.data.hChildren;
		const hProperties = from.data.hProperties;
		if (typeof hName === "string") if (result.type === "element") result.tagName = hName;
		else result = {
			type: "element",
			tagName: hName,
			properties: {},
			children: "children" in result ? result.children : [result]
		};
		if (result.type === "element" && hProperties) Object.assign(result.properties, /* @__PURE__ */ esm_default(hProperties));
		if ("children" in result && result.children && hChildren !== null && hChildren !== void 0) result.children = hChildren;
	}
	return result;
}
function defaultUnknownHandler(state, node$1) {
	const data$1 = node$1.data || {};
	const result = "value" in node$1 && !(own.call(data$1, "hProperties") || own.call(data$1, "hChildren")) ? {
		type: "text",
		value: node$1.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: /* @__PURE__ */ state.all(node$1)
	};
	state.patch(node$1, result);
	return state.applyData(node$1, result);
}
function wrap(nodes, loose) {
	const result = [];
	let index$1 = -1;
	if (loose) result.push({
		type: "text",
		value: "\n"
	});
	while (++index$1 < nodes.length) {
		if (index$1) result.push({
			type: "text",
			value: "\n"
		});
		result.push(nodes[index$1]);
	}
	if (loose && nodes.length > 0) result.push({
		type: "text",
		value: "\n"
	});
	return result;
}
function trimMarkdownSpaceStart(value) {
	let index$1 = 0;
	let code$2 = /* @__PURE__ */ value.charCodeAt(index$1);
	while (code$2 === 9 || code$2 === 32) {
		index$1++;
		code$2 = /* @__PURE__ */ value.charCodeAt(index$1);
	}
	return value.slice(index$1);
}
function toHast(tree, options) {
	const state = /* @__PURE__ */ createState(tree, options);
	const node$1 = /* @__PURE__ */ state.one(tree, void 0);
	const foot = /* @__PURE__ */ footer(state);
	const result = Array.isArray(node$1) ? {
		type: "root",
		children: node$1
	} : node$1 || {
		type: "root",
		children: []
	};
	if (foot) {
		"children" in result;
		result.children.push({
			type: "text",
			value: "\n"
		}, foot);
	}
	return result;
}
var Markdown = /* @__PURE__ */ component$((props, {}) => {
	return rx(props.text$, /* @__PURE__ */ distinctUntilChanged(), /* @__PURE__ */ render((text$5) => {
		const nodes = /* @__PURE__ */ toHast(/* @__PURE__ */ parse(text$5));
		return rehypeVue({ components: props.components ?? {} })(nodes);
	}));
}, {
	displayName: "Markdown",
	props: ["text", "components"]
});
var PropValueAddInput = /* @__PURE__ */ component$((props, { emit, render: render$1 }) => {
	const inputEl$ = /* @__PURE__ */ observableRef(null);
	const inputAction$ = /* @__PURE__ */ InputActionSubject.from(inputEl$);
	const inputText$ = /* @__PURE__ */ InputText.from(inputEl$);
	const open$ = /* @__PURE__ */ PopupStatus.from(inputEl$);
	const editor$ = /* @__PURE__ */ JSONEditorProvider.use();
	const selectFocus$ = /* @__PURE__ */ ImmerBehaviorSubject.seed({ index: 0 });
	const reset = () => {
		open$.hide();
		inputText$.next("");
		if (inputEl$.value) {
			inputEl$.value.value = "";
			inputEl$.value.blur();
		}
		selectFocus$.next({ index: 0 });
	};
	rx(inputText$, /* @__PURE__ */ tap((input) => {
		const raw = /* @__PURE__ */ input.trim();
		if (raw.startsWith("{") && raw.endsWith("}")) try {
			const v = /* @__PURE__ */ JSON.parse(raw);
			editor$.update(props.ctx.path, v);
			reset();
		} catch (err) {
			editor$.setError(props.ctx.path, "无效的 JSON 字符串");
		}
	}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	const commit = (prop) => {
		if (props.options) prop ??= props.options[selectFocus$.value.index % props.options.length]?.propName;
		else prop ??= inputText$.value;
		if (prop) {
			emit("add", prop);
			reset();
		} else editor$.setError([...props.ctx.path, Schema.RecordKey], "无效的属性值");
	};
	rx(inputAction$, /* @__PURE__ */ tap((action) => {
		switch (action.type) {
			case "SELECT":
				selectFocus$.next((value) => {
					value.index += action.direction;
				});
				break;
			case "COMMIT":
				commit();
				break;
			case "CANCEL":
				reset();
				break;
		}
	}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	const $inputForProp = /* @__PURE__ */ rx(open$, /* @__PURE__ */ render$1((isOpen) => {
		return /* @__PURE__ */ jsx(InputWrapper, { children: /* @__PURE__ */ jsx("input", {
			ref: inputEl$,
			type: "text",
			placeholder: "添加属性 (可粘贴 JSON 字符串)",
			"data-options": isOpen
		}) });
	}));
	return rx(/* @__PURE__ */ combineLatest([
		inputText$,
		open$,
		selectFocus$,
		props.options$
	]), /* @__PURE__ */ render$1(([input, open, focus, options]) => {
		if (options) return options.length > 0 ? /* @__PURE__ */ jsx(ValueContainer, {
			sx: { mx: -4 },
			children: /* @__PURE__ */ jsx(Menu, {
				onSelected: (prop) => {
					commit(prop);
				},
				open$,
				$content: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ options.map((opt, i) => {
					if (input) {
						if (!opt.propName.includes(input)) return null;
					}
					return /* @__PURE__ */ jsx(PropMenuItem, {
						"data-focus": i === focus.index % options.length,
						propName: opt.propName,
						typedef: opt.typedef
					});
				}) }),
				children: $inputForProp
			})
		}) : null;
		return /* @__PURE__ */ jsx(ValueContainer, {
			sx: { mx: -4 },
			children: /* @__PURE__ */ jsx(Popper, {
				isOpen: open,
				placement: "right-start",
				$content: /* @__PURE__ */ jsxs(ValueInputActions, { children: [/* @__PURE__ */ jsx(ActionBtn, {
					type: "button",
					onClick: () => inputAction$.next({ type: "CANCEL" }),
					children: /* @__PURE__ */ jsx(Icon, { path: mdiCancel })
				}), /* @__PURE__ */ jsx(ActionBtn, {
					type: "button",
					onClick: () => inputAction$.next({ type: "COMMIT" }),
					children: /* @__PURE__ */ jsx(Icon, { path: mdiCheckBold })
				})] }),
				children: /* @__PURE__ */ jsx(InputWrapper, { children: /* @__PURE__ */ jsx("input", {
					ref: inputEl$,
					type: "text",
					placeholder: "添加属性 (可粘贴 JSON 字符串)"
				}) })
			})
		});
	}));
}, {
	displayName: "PropValueAddInput",
	props: ["ctx", "options"],
	emits: ["add"]
});
var PropMenuItem = /* @__PURE__ */ component((props) => {
	return () => {
		return /* @__PURE__ */ jsxs(AddPropMenuItemContainer, {
			"data-value": props.propName,
			tabindex: 0,
			children: [/* @__PURE__ */ jsx(PropName, {
				optional: !!Schema.schemaProp(props.typedef, Schema.optional),
				children: props.propName
			}), /* @__PURE__ */ jsx(PropDescription, { children: /* @__PURE__ */ Schema.metaProp(props.typedef, "title") })]
		});
	};
}, {
	displayName: "PropMenuItem",
	props: ["propName", "typedef"]
});
var AddPropMenuItemContainer = /* @__PURE__ */ styled(MenuItem, { displayName: "AddPropMenuItemContainer" })({ [`& ${PropName}`]: { textAlign: "left" } });
var Line = /* @__PURE__ */ component$((props, { render: render$1 }) => {
	const editor$ = /* @__PURE__ */ JSONEditorProvider.use();
	const slots = /* @__PURE__ */ JSONEditorSlotsProvider.use();
	const $lineNumber = /* @__PURE__ */ rx(props.n$, /* @__PURE__ */ render$1((n) => {
		return /* @__PURE__ */ jsx(LineNumber, { children: n });
	}));
	const dirtyCompare = (value, prev) => {
		if (!(isArray(value) || isPlainObject(value))) {
			if (isUndefined(prev) && !isUndefined(value)) return DirtyType.ADD;
			if (!isUndefined(prev) && isUndefined(value)) return DirtyType.DELETE;
			if (!isUndefined(prev) && !isUndefined(value) && value !== prev) return DirtyType.EDIT;
		}
		return DirtyType.NONE;
	};
	const pointer = /* @__PURE__ */ JSONPointer.create(props.ctx.path);
	return rx(/* @__PURE__ */ combineLatest([
		props.close$,
		props.value$,
		/* @__PURE__ */ editor$.errorAt$(pointer),
		/* @__PURE__ */ editor$.foldedPrefix$(pointer)
	]), /* @__PURE__ */ render$1(([close, value, error, folded]) => {
		const hasError = !!error;
		const isJSONArray = isArray(value) || props.typedef.type == "array";
		const isJSONObject = !isJSONArray && isPlainObject(value);
		if (close) {
			if (folded) return null;
			return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(LineContainer, {
				"data-error": hasError,
				$leading: $lineNumber,
				indent: props.ctx.path.length,
				children: /* @__PURE__ */ (() => {
					if (isJSONArray) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(TokenView, { children: [`]`, "\xA0\xA0"] }), !props.ctx.readOnly && /* @__PURE__ */ jsx(ItemAddIconBtn, {
						ctx: props.ctx,
						typedef: props.typedef,
						onAdd: (value$1) => {
							editor$.update(props.ctx.path, (values) => {
								console.log(values);
								values.push(value$1);
							}, [], props.typedef);
						}
					})] });
					if (isJSONObject) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(TokenView, { children: [`}`, "\xA0\xA0"] }), !props.ctx.readOnly && /* @__PURE__ */ jsx(PropValueAddInput, {
						ctx: props.ctx,
						onAdd: (prop) => {
							editor$.update([...props.ctx.path, prop], void 0);
						},
						options: props.typedef.type != "record" ? [.../* @__PURE__ */ props.typedef.entries(value, props.ctx)].filter(([propName]) => {
							return !Object.hasOwn(value, propName);
						}).map(([propName, _propValue, propSchema]) => {
							return {
								propName: /* @__PURE__ */ String(propName),
								typedef: propSchema
							};
						}) : void 0
					})] });
					return null;
				})()
			}) });
		}
		if (folded == Folded.PREFIX) return null;
		const renderPropOrIndex = () => {
			const nameOrIndex = /* @__PURE__ */ last(props.ctx.path);
			return /* @__PURE__ */ jsxs(Fragment, { children: [!isUndefined(nameOrIndex) ? /* @__PURE__ */ jsx(PropName, {
				deprecated: /* @__PURE__ */ Schema.schemaProp(props.typedef, "deprecated"),
				$leading: props.ctx.readOnly ? null : /* @__PURE__ */ jsx(ItemRemoveIconBtn, { onRemove: () => {
					editor$.delete(props.ctx.path);
				} }),
				children: /* @__PURE__ */ jsx(Box, {
					sx: isString(nameOrIndex) ? { opacity: 1 } : {
						opacity: .3,
						font: "code"
					},
					children: `${nameOrIndex}`
				})
			}) : null, isString(nameOrIndex) ? /* @__PURE__ */ jsx(TokenView, { children: `: ` }) : props.ctx.path.length > 0 ? /* @__PURE__ */ jsx(TokenView, { children: "\xA0\xA0" }) : null] });
		};
		const renderComment = () => {
			const title = /* @__PURE__ */ Schema.metaProp(props.typedef, "title");
			const description = /* @__PURE__ */ Schema.metaProp(props.typedef, "description");
			return /* @__PURE__ */ jsxs(Fragment, { children: [(title || description) && /* @__PURE__ */ jsx(PropDoc, { children: description ? /* @__PURE__ */ jsx(Tooltip, {
				$title: /* @__PURE__ */ jsx(PropDescription, { children: /* @__PURE__ */ jsx(Markdown, { text: description }) }),
				placement: "top",
				children: /* @__PURE__ */ jsxs("div", { children: [
					title,
					" ",
					/* @__PURE__ */ jsx(Icon, { path: "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" })
				] })
			}) : /* @__PURE__ */ jsx("span", { children: title }) }), hasError && /* @__PURE__ */ jsx(LineError, { children: `${error}` })] });
		};
		const renderLine = () => {
			if (folded) {
				if (folded == Folded.EXACT) {
					if (isJSONArray) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ renderPropOrIndex(), /* @__PURE__ */ jsx(TokenView, { children: `[...]` })] });
					if (isJSONObject) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ renderPropOrIndex(), /* @__PURE__ */ jsx(TokenView, { children: `{...}` })] });
				}
				return null;
			}
			return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ renderPropOrIndex(), /* @__PURE__ */ (() => {
				if (isJSONArray) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(TokenView, { children: `[` }), /* @__PURE__ */ jsx(ActionToolbar, { children: /* @__PURE__ */ jsx(CopyAsJSONIconBtn, { value }) })] });
				if (isJSONObject) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(TokenView, { children: `{` }), /* @__PURE__ */ jsx(ActionToolbar, { children: /* @__PURE__ */ jsx(CopyAsJSONIconBtn, { value }) })] });
				return slots.$value?.(props.typedef, value, props.ctx);
			})()] });
		};
		return /* @__PURE__ */ jsx(LineContainer, {
			indent: props.ctx.path.length,
			"data-dirty": /* @__PURE__ */ dirtyCompare(value, props.previous),
			"data-error": hasError,
			$leading: /* @__PURE__ */ jsxs(Fragment, { children: [$lineNumber, isJSONArray || isJSONObject ? /* @__PURE__ */ jsx(LineFoldable, {
				folded: folded !== Folded.NONE,
				onClick: () => {
					editor$.toggleFold(pointer);
				}
			}) : null] }),
			$comment: /* @__PURE__ */ renderComment(),
			children: /* @__PURE__ */ renderLine()
		});
	}));
}, {
	displayName: "Line",
	props: [
		"n",
		"typedef",
		"ctx",
		"value",
		"previous",
		"close"
	]
});
const defaultValueRender = (typedef, value, ctx) => {
	return /* @__PURE__ */ jsx(ValueInput, {
		typedef,
		value,
		ctx
	});
};
var JSONEditorView = /* @__PURE__ */ component$((props, { render: render$1 }) => {
	const editor$ = /* @__PURE__ */ JSONEditorProvider.use();
	const slots = /* @__PURE__ */ JSONEditorSlotsProvider.use();
	return rx(editor$, /* @__PURE__ */ render$1((root$2) => {
		return /* @__PURE__ */ jsx(OneEditingProvider, { children: /* @__PURE__ */ jsx(JSONEditorSlotsProvider, {
			value: { $value: slots.$value ?? defaultValueRender },
			children: /* @__PURE__ */ jsx(JSONEditorContainer, { children: /* @__PURE__ */ jsx(Lines, { children: /* @__PURE__ */ [.../* @__PURE__ */ flattenValue(root$2, /* @__PURE__ */ editor$.initialsAt([]), editor$.typedef, {
				...EmptyContext,
				readOnly: props.readOnly
			})].map((x, i) => {
				const pointer = /* @__PURE__ */ JSONPointer.create(x.ctx.path);
				return /* @__PURE__ */ jsx(Line, {
					n: i + 1,
					ctx: x.ctx,
					typedef: x.typedef,
					value: x.value,
					previous: x.previous,
					close: x.close ?? false
				}, `${pointer}::${x.close ?? false}`);
			}) }) })
		}) });
	}));
}, {
	displayName: "JSONEditorView",
	props: ["readOnly"]
});
var JSONEditorContainer = /* @__PURE__ */ styled("div", { displayName: "JSONEditorContainer" })({
	w: "100%",
	h: "100%",
	overflow: "auto"
});
var Lines = /* @__PURE__ */ styled("div", ({}, { slots }) => {
	return (Wrap) => {
		return /* @__PURE__ */ jsx(Wrap, { children: /* @__PURE__ */ slots.default() });
	};
}, { displayName: "Lines" })({
	position: "relative",
	display: "flex",
	flexDirection: "column",
	w: "100%",
	maxW: "100%",
	py: 2
});
var data = { spec: {
	version: "v1.18.2",
	deploy: {
		kind: "Deployment",
		spec: {
			replicas: 1,
			template: { spec: {
				nodeSelector: { "kubernetes.io/os": "linux" },
				securityContext: {
					runAsNonRoot: false,
					seccompProfile: { type: "RuntimeDefault" }
				},
				enableServiceLinks: false
			} },
			strategy: {}
		}
	},
	config: { POD_NAMESPACE: "@field/metadata.namespace" },
	containers: {
		"cert-manager-controller": {
			image: {
				name: "docker.io/industai/cert-manager-controller",
				tag: "v1.18.2",
				pullPolicy: "IfNotPresent"
			},
			args: [
				"--v=2",
				"--cluster-resource-namespace=$(POD_NAMESPACE)",
				"--leader-election-namespace=kube-system",
				"--acme-http01-solver-image=industai/cert-manager-acmesolver:v1.18.2",
				"--max-concurrent-challenges=60"
			],
			ports: {
				"http-metrics": 9402,
				"http-healthz": 9403
			},
			livenessProbe: {
				httpGet: {
					path: "/livez",
					port: "http-healthz",
					scheme: "HTTP"
				},
				initialDelaySeconds: 10,
				timeoutSeconds: 15,
				periodSeconds: 10,
				successThreshold: 1,
				failureThreshold: 8
			},
			securityContext: {
				capabilities: { drop: ["ALL"] },
				readOnlyRootFilesystem: true,
				allowPrivilegeEscalation: false
			}
		},
		"init-crds": { image: {
			name: "docker.io/industai/cert-manager-crd-installer",
			tag: "v1.18.2"
		} }
	},
	services: { "#": { ports: { "http-metrics": 9402 } } },
	images: { "cert-manager-acmesolver": {
		name: "docker.io/industai/cert-manager-acmesolver",
		tag: "v1.18.2"
	} },
	serviceAccount: {
		scope: "Cluster",
		rules: [
			{
				verbs: ["update", "patch"],
				apiGroups: ["cert-manager.io"],
				resources: [
					"certificates",
					"certificates/status",
					"certificaterequests",
					"certificaterequests/status"
				]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: [
					"certificates",
					"certificaterequests",
					"clusterissuers",
					"issuers"
				]
			},
			{
				verbs: ["update"],
				apiGroups: ["cert-manager.io"],
				resources: ["certificates/finalizers", "certificaterequests/finalizers"]
			},
			{
				verbs: [
					"create",
					"delete",
					"get",
					"list",
					"watch"
				],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["orders"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"update",
					"delete",
					"patch"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["orders", "orders/status"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["orders", "challenges"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["clusterissuers", "issuers"]
			},
			{
				verbs: ["create", "delete"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["challenges"]
			},
			{
				verbs: ["update"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["orders/finalizers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["cert-manager.io"],
				resources: ["clusterissuers", "clusterissuers/status"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["clusterissuers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"update",
					"delete"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"update"
				],
				apiGroups: ["certificates.k8s.io"],
				resources: ["certificatesigningrequests"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["certificates.k8s.io"],
				resources: ["certificatesigningrequests/status"]
			},
			{
				verbs: ["sign"],
				apiGroups: ["certificates.k8s.io"],
				resources: ["signers"],
				resourceNames: ["issuers.cert-manager.io/*", "clusterissuers.cert-manager.io/*"]
			},
			{
				verbs: ["create"],
				apiGroups: ["authorization.k8s.io"],
				resources: ["subjectaccessreviews"]
			},
			{
				verbs: ["create"],
				apiGroups: [""],
				resources: ["serviceaccounts/token"],
				resourceNames: ["cert-manager"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["challenges", "challenges/status"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["challenges"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["issuers", "clusterissuers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"delete"
				],
				apiGroups: [""],
				resources: ["pods", "services"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"delete",
					"update"
				],
				apiGroups: ["networking.k8s.io"],
				resources: ["ingresses"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"delete",
					"update"
				],
				apiGroups: ["gateway.networking.k8s.io"],
				resources: ["httproutes"]
			},
			{
				verbs: ["create"],
				apiGroups: ["route.openshift.io"],
				resources: ["routes/custom-host"]
			},
			{
				verbs: ["update"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["challenges/finalizers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["cert-manager.io"],
				resources: ["issuers", "issuers/status"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["issuers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"update",
					"delete"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: [
					"create",
					"update",
					"delete"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["certificates", "certificaterequests"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: [
					"certificates",
					"certificaterequests",
					"issuers",
					"clusterissuers"
				]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["networking.k8s.io"],
				resources: ["ingresses"]
			},
			{
				verbs: ["update"],
				apiGroups: ["networking.k8s.io"],
				resources: ["ingresses/finalizers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["gateway.networking.k8s.io"],
				resources: ["gateways", "httproutes"]
			},
			{
				verbs: ["update"],
				apiGroups: ["gateway.networking.k8s.io"],
				resources: ["gateways/finalizers", "httproutes/finalizers"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: [
					"get",
					"update",
					"patch"
				],
				apiGroups: ["coordination.k8s.io"],
				resources: ["leases"],
				resourceNames: ["cert-manager-controller"]
			},
			{
				verbs: ["create"],
				apiGroups: ["coordination.k8s.io"],
				resources: ["leases"]
			},
			{
				verbs: ["approve"],
				apiGroups: ["cert-manager.io"],
				resources: ["signers"],
				resourceNames: ["issuers.cert-manager.io/*", "clusterissuers.cert-manager.io/*"]
			},
			{
				verbs: [
					"get",
					"patch",
					"list",
					"watch",
					"update",
					"create"
				],
				apiGroups: ["apiextensions.k8s.io"],
				resources: ["customresourcedefinitions"]
			}
		]
	}
} };
var jsoneditor_large_default = /* @__PURE__ */ component(() => {
	const x = /* @__PURE__ */ any();
	const editor$ = /* @__PURE__ */ JSONEditor.of(x, data);
	editor$.toggleFold("/spec/serviceAccount");
	rx(editor$, /* @__PURE__ */ tap((v) => {
		const [err] = x.validate(v);
		if (!!err) for (const x$1 of err.failures()) editor$.setError(x$1.path, x$1.message);
	}), /* @__PURE__ */ subscribeUntilUnmount());
	return () => /* @__PURE__ */ jsx(Container, {
		sx: {
			width: "100%",
			height: "100%",
			pr: "20%"
		},
		children: /* @__PURE__ */ jsx(JSONEditorProvider, {
			value: editor$,
			children: /* @__PURE__ */ jsx(JSONEditorView, { readOnly: true })
		})
	});
});
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = /* @__PURE__ */ Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = /* @__PURE__ */ Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}
var Kind = /* @__PURE__ */ function(Kind$1) {
	Kind$1["A"] = "A";
	Kind$1["B"] = "B";
	return Kind$1;
}(Kind || {});
var Port = class {
	name;
	port;
};
__decorate([/* @__PURE__ */ annotate({ title: "名称" }), /* @__PURE__ */ string$2()], Port.prototype, "name", void 0);
__decorate([/* @__PURE__ */ annotate({ title: "端口号" }), /* @__PURE__ */ union(/* @__PURE__ */ integer(), /* @__PURE__ */ string$2())], Port.prototype, "port", void 0);
var JSONSchema = class {
	kind;
	name;
	annotations;
	seconds;
	addresses;
	ports;
	paths;
	manifests;
	anyjson;
};
__decorate([/* @__PURE__ */ annotate({ title: "类型" }), /* @__PURE__ */ nativeEnum(Kind)], JSONSchema.prototype, "kind", void 0);
__decorate([
	/* @__PURE__ */ annotate({
		title: "名称",
		description: "详细描述"
	}),
	/* @__PURE__ */ string$2(),
	/* @__PURE__ */ minLength(2)
], JSONSchema.prototype, "name", void 0);
__decorate([/* @__PURE__ */ annotate({ title: "注解" }), /* @__PURE__ */ record(/* @__PURE__ */ string$2(), /* @__PURE__ */ string$2())], JSONSchema.prototype, "annotations", void 0);
__decorate([
	/* @__PURE__ */ annotate({ title: "秒数" }),
	/* @__PURE__ */ integer(),
	/* @__PURE__ */ optional()
], JSONSchema.prototype, "seconds", void 0);
__decorate([
	/* @__PURE__ */ annotate({ title: "地址" }),
	/* @__PURE__ */ array(/* @__PURE__ */ string$2()),
	/* @__PURE__ */ optional()
], JSONSchema.prototype, "addresses", void 0);
__decorate([/* @__PURE__ */ annotate({ title: "端口" }), /* @__PURE__ */ array(/* @__PURE__ */ object(Port))], JSONSchema.prototype, "ports", void 0);
__decorate([/* @__PURE__ */ annotate({ title: "路径" }), /* @__PURE__ */ union(/* @__PURE__ */ string$2(), /* @__PURE__ */ array(/* @__PURE__ */ string$2()))], JSONSchema.prototype, "paths", void 0);
__decorate([
	/* @__PURE__ */ annotate({ title: "其他配置" }),
	/* @__PURE__ */ record(/* @__PURE__ */ string$2(), /* @__PURE__ */ any()),
	/* @__PURE__ */ optional()
], JSONSchema.prototype, "manifests", void 0);
__decorate([
	/* @__PURE__ */ annotate({ title: "任意类型" }),
	/* @__PURE__ */ record(/* @__PURE__ */ string$2(), /* @__PURE__ */ any()),
	/* @__PURE__ */ optional()
], JSONSchema.prototype, "anyjson", void 0);
var jsoneditor_default = /* @__PURE__ */ component(() => {
	const x = /* @__PURE__ */ object(JSONSchema);
	const editor$ = /* @__PURE__ */ JSONEditor.of(x, {
		name: "name",
		annotations: { longtext: /* @__PURE__ */ new Array(100).fill("longtext").join("") },
		ports: [],
		paths: "/x",
		manifests: { x: {} },
		anyjson: {
			obj: { a: 1 },
			arr: [
				"1",
				"2",
				"3"
			],
			nested: [{ a: 1 }, { a: 2 }]
		}
	});
	rx(editor$, /* @__PURE__ */ tap((v) => {
		const [err] = x.validate(v);
		if (!!err) for (const x$1 of err.failures()) editor$.setError(x$1.path, x$1.message);
		console.log(v);
	}), /* @__PURE__ */ subscribeUntilUnmount());
	return () => /* @__PURE__ */ jsx(Container, {
		sx: {
			width: "100%",
			height: "100%",
			pr: "20%"
		},
		children: /* @__PURE__ */ jsx(JSONEditorProvider, {
			value: editor$,
			children: /* @__PURE__ */ jsx(JSONEditorView, {})
		})
	});
});
export { Icon as _, Progress as a, FilledButton as b, SheetDialogFooter as c, useLeftSheetDialog as d, useTopSheetDialog as f, IconButton as g, Tooltip$1 as h, TextField as i, SheetDialogHeading as l, MenuItem$1 as m, jsoneditor_large_default as n, SheetDialogContainer as o, Menu$1 as p, Markdown as r, SheetDialogContent as s, jsoneditor_default as t, SheetDialogHeadingTitle as u, OutlinedButton as v, TextButton as y };
