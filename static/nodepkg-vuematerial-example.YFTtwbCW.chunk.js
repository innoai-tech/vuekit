import { c as jsx, lt as defineComponent, ut as h } from "./vendor-innoai-tech-vuekit.CmmKMl5x.chunk.js";
function _createMdxContent(props) {
	return jsx({
		p: "p",
		...props.components
	}.p, { children: "这不是一个完整的组件库，只是一个示例，作为 vueuikit 的参考" });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? jsx(MDXLayout, {
		...props,
		children: /* @__PURE__ */ jsx(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
var example_default = /* @__PURE__ */ defineComponent(() => {
	return () => h(MDXContent, { components: {} });
});
export { example_default as default };
