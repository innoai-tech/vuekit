import { I as Fragment, L as component, Xt as map, c as jsx } from "./vendor-innoai-tech-vuekit.CmmKMl5x.chunk.js";
import { C as mdiPlus, N as Box, d as mdiAccount, u as Container } from "./vendor-innoai-tech-vueuikit.C4g2OQui.chunk.js";
import { _ as Icon, i as TextField } from "./vendor-innoai-tech-jsoneditor.CqEMAEzi.chunk.js";
var textfields_default = /* @__PURE__ */ component(() => {
	const stateProps = {
		Enabled: {},
		Focused: { focus: true },
		Invalid: { invalid: true },
		Disabled: { disabled: true }
	};
	const buttons = { TextField };
	return () => /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(Box, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 48
		},
		children: /* @__PURE__ */ map(buttons, (TextField$1, name) => /* @__PURE__ */ jsx(Box, {
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 16
			},
			children: /* @__PURE__ */ [
				(props) => /* @__PURE__ */ jsx(TextField$1, {
					...props,
					children: /* @__PURE__ */ jsx("input", {
						"data-input": "",
						type: "text",
						placeholder: "Type"
					})
				}),
				(props) => /* @__PURE__ */ jsx(TextField$1, {
					...props,
					valued: true,
					children: /* @__PURE__ */ jsx("input", {
						"data-input": "",
						type: "text",
						value: "Username"
					})
				}),
				(props) => /* @__PURE__ */ jsx(TextField$1, {
					...props,
					$leading: /* @__PURE__ */ jsx(Icon, { path: mdiAccount }),
					children: /* @__PURE__ */ jsx("input", {
						"data-input": "",
						type: "text"
					})
				}),
				(props) => /* @__PURE__ */ jsx(TextField$1, {
					...props,
					$trailing: /* @__PURE__ */ jsx(Icon, { path: mdiPlus }),
					children: /* @__PURE__ */ jsx("input", {
						"data-input": "",
						type: "text"
					})
				})
			].map((render, i) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Box, {
				sx: {
					display: "flex",
					gap: 16
				},
				children: /* @__PURE__ */ map(stateProps, (props) => render({
					...props,
					$label: "Name",
					$supporting: "Desc"
				}))
			}) }, `${i}`))
		}, name))
	}) });
});
export { textfields_default as default };
