import { L as component, c as jsx, it as Fragment, l as jsxs } from "./vendor-innoai-tech-vuekit.CmmKMl5x.chunk.js";
import { M as styled } from "./vendor-innoai-tech-vueuikit.C4g2OQui.chunk.js";
import { r as Markdown } from "./vendor-innoai-tech-jsoneditor.CqEMAEzi.chunk.js";
var StyledCode = /* @__PURE__ */ styled("code", { displayName: "StyledCode" })({
	containerStyle: "sys.surface-container",
	py: 4,
	rounded: "xs"
});
var markdown_default = /* @__PURE__ */ component(() => {
	return () => /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(StyledCode, {
			sx: { px: 2 },
			children: "123123"
		}),
		/* @__PURE__ */ jsx(Markdown, { text: "标题 1" }),
		/* @__PURE__ */ jsx(Markdown, {
			text: "`code`",
			components: { code: StyledCode }
		})
	] });
});
export { markdown_default as default };
