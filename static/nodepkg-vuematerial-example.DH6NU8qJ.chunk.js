import { L as component, c as jsx, it as Fragment, l as jsxs } from "./vendor-innoai-tech-vuekit.CmmKMl5x.chunk.js";
import { N as Box, _ as mdiClose, u as Container } from "./vendor-innoai-tech-vueuikit.C4g2OQui.chunk.js";
import { _ as Icon, c as SheetDialogFooter, d as useLeftSheetDialog, f as useTopSheetDialog, g as IconButton, h as Tooltip, l as SheetDialogHeading, m as MenuItem, o as SheetDialogContainer, p as Menu, s as SheetDialogContent, u as SheetDialogHeadingTitle, y as TextButton } from "./vendor-innoai-tech-jsoneditor.CqEMAEzi.chunk.js";
var overlays_default = /* @__PURE__ */ component(() => {
	const dialogInDialog$ = useTopSheetDialog(() => {
		return () => {
			return /* @__PURE__ */ jsx(SheetDialogContainer, {
				sx: {
					h: "auto",
					minH: 40
				},
				children: /* @__PURE__ */ jsxs(SheetDialogHeading, { children: [/* @__PURE__ */ jsx(SheetDialogHeadingTitle, { children: "我是对话框" }), /* @__PURE__ */ jsx(IconButton, {
					onClick: () => {
						dialogInDialog$.hide();
					},
					children: /* @__PURE__ */ jsx(Icon, { path: mdiClose })
				})] })
			});
		};
	});
	const dialog$ = useTopSheetDialog(() => {
		return () => {
			return /* @__PURE__ */ jsxs(SheetDialogContainer, {
				sx: {
					h: "auto",
					minH: 40
				},
				children: [
					/* @__PURE__ */ jsxs(SheetDialogHeading, { children: [/* @__PURE__ */ jsx(SheetDialogHeadingTitle, { children: "我是对话框" }), /* @__PURE__ */ jsx(IconButton, {
						onClick: () => {
							dialog$.hide();
						},
						children: /* @__PURE__ */ jsx(Icon, { path: mdiClose })
					})] }),
					/* @__PURE__ */ jsx(SheetDialogContent, { children: "xxx" }),
					/* @__PURE__ */ jsxs(SheetDialogFooter, { children: [/* @__PURE__ */ jsx(TextButton, {
						onClick: () => {
							dialogInDialog$.show();
						},
						children: "Open Dialog"
					}), dialogInDialog$.$elem] })
				]
			});
		};
	});
	const dialog1$ = /* @__PURE__ */ useLeftSheetDialog(() => {
		return () => {
			return /* @__PURE__ */ jsx(SheetDialogContainer, {
				sx: {
					h: "100vh",
					w: 300,
					maxH: "100vh"
				},
				children: /* @__PURE__ */ jsxs(SheetDialogHeading, { children: [/* @__PURE__ */ jsx(SheetDialogHeadingTitle, { children: "我是对话框" }), /* @__PURE__ */ jsx(IconButton, {
					onClick: () => {
						dialog$.hide();
					},
					children: /* @__PURE__ */ jsx(Icon, { path: mdiClose })
				})] })
			});
		};
	});
	return () => /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Box, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 8
		},
		children: [
			/* @__PURE__ */ jsx(TextButton, {
				onClick: () => {
					dialog$.show();
				},
				children: "Open Dialog"
			}),
			dialog$.$elem,
			/* @__PURE__ */ jsx(Tooltip, {
				title: "Tooltip",
				children: /* @__PURE__ */ jsx(TextButton, { children: "Hover me" })
			}),
			/* @__PURE__ */ jsx(Tooltip, {
				title: "Menu",
				children: /* @__PURE__ */ jsx(Menu, {
					$menu: /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx(MenuItem, { children: "选项一" }),
						/* @__PURE__ */ jsx(MenuItem, {
							onClick: () => {
								dialog1$.show();
							},
							children: "选项二"
						}),
						dialog1$.$elem,
						/* @__PURE__ */ jsx(Menu, {
							placement: "right-start",
							$menu: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(MenuItem, { children: "选项三.1" }), /* @__PURE__ */ jsx(MenuItem, { children: "选项三.2" })] }),
							children: /* @__PURE__ */ jsx(MenuItem, { children: "选项三" })
						})
					] }),
					children: /* @__PURE__ */ jsx(TextButton, { children: "Menu" })
				})
			})
		]
	}) });
});
export { overlays_default as default };
