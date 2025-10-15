import { I as Fragment, L as component, Xt as map, c as jsx, it as Fragment$1, l as jsxs } from "./vendor-innoai-tech-vuekit.CmmKMl5x.chunk.js";
import { C as mdiPlus, N as Box, u as Container, w as mdiSend } from "./vendor-innoai-tech-vueuikit.C4g2OQui.chunk.js";
import { _ as Icon, b as FilledButton, v as OutlinedButton, y as TextButton } from "./vendor-innoai-tech-jsoneditor.CqEMAEzi.chunk.js";
var buttons_default = /* @__PURE__ */ component(() => {
	const stateProps = {
		Enabled: {},
		Disabled: { disabled: true },
		Hovered: { hover: true },
		Focused: { focus: true },
		Pressed: { active: true }
	};
	const buttons = {
		FilledButton,
		OutlinedButton,
		TextButton
	};
	return () => /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(Box, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 48
		},
		children: /* @__PURE__ */ map(buttons, (Button, name) => /* @__PURE__ */ jsx(Box, {
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 16
			},
			children: /* @__PURE__ */ [
				(v) => v,
				(v) => /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Icon, {
					path: mdiPlus,
					placement: "start"
				}), v] }),
				(v) => /* @__PURE__ */ jsxs(Fragment$1, { children: [v, /* @__PURE__ */ jsx(Icon, {
					path: mdiSend,
					placement: "end"
				})] })
			].map((render, i) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Box, {
				sx: {
					display: "flex",
					gap: 16
				},
				children: /* @__PURE__ */ map(stateProps, (props, name$1) => /* @__PURE__ */ jsx(Button, {
					...props,
					children: /* @__PURE__ */ render(name$1)
				}))
			}) }, `${i}`))
		}, name))
	}) });
});
export { buttons_default as default };
