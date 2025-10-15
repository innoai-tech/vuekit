import { L as component, c as jsx, l as jsxs } from "./vendor-innoai-tech-vuekit.CmmKMl5x.chunk.js";
import { N as Box, u as Container } from "./vendor-innoai-tech-vueuikit.C4g2OQui.chunk.js";
import { a as Progress } from "./vendor-innoai-tech-jsoneditor.CqEMAEzi.chunk.js";
var progresses_default = /* @__PURE__ */ component(() => {
	return () => /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Box, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 16
		},
		children: [/* @__PURE__ */ jsx(Progress, { progress: .2 }), /* @__PURE__ */ jsx(Progress, { progress: 1 })]
	}) });
});
export { progresses_default as default };
