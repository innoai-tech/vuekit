import { c as custom, _ as __vitePreload, o as object, d as annotate, s as string, u as union, e as integer, n as nativeEnum, r as record, f as optional, a as array, b as any, h as boolean, j as enums } from './lib-nodepkg-typedef.CPsLm4bM.chunk.js';
import { f as component, v as useRouter, j as jsx, g as ref, d as jsxs, w as watch, R as RouterView, x as RouterLink, y as createRouter, z as createWebHistory, A as createApp, r as rx, s as subscribeUntilUnmount, F as Fragment, B as defineComponent, C as h, D as Fragment$1, e as ref$1, a as component$, o as observableRef, h as render } from './lib-nodepkg-vuekit.2hehQ1Uy.chunk.js';
import { a as Icon, I as IconButton, T as Tooltip, b as TextButton, D as Dialog, c as DialogContainer, M as Menu, L as ListItem, F as FilledButton, O as OutlinedButton, d as TonalButton, E as ElevatedButton, e as TextField } from './lib-nodepkg-vuematerial.1v9uU9ys.chunk.js';
import { e as mdiGithub, f as mdiWeatherNight, g as mdiWhiteBalanceSunny, C as Container, D as DynamicThemingProvider, h as mdiClose, i as mdiSend, j as mdiPlus, k as mdiAccount } from './webapp-vuekit-layout.CSS9QP55.chunk.js';
import { B as Box, C as CacheProvider, c as CSSReset, G as GlobalStyle, T as ThemeProvider, e as Theming, f as Palette, g as defaultTheme, s as styled, v as variant, b as alpha, a as size, P as Popper, d as defineTransition, t as transition } from './lib-nodepkg-vueuikit.QdVl-CQk.chunk.js';
import { v as groupBy, w as map, p as partition, l as last, x as upperFirst } from './vendor-innoai-tech-lodash.DAei4CjR.chunk.js';
import { c as cIndexDefault, _ as __pages_import_16__page_meta__ } from './webapp-vuekit-page.BodRS3nG.chunk.js';
import { J as JSONEditor, a as JSONEditorProvider, b as JSONEditorView, c as copyToClipboard } from './lib-nodepkg-jsoneditor.CGhLfTg_.chunk.js';
import { t as tap, g as debounceTime } from './vendor-rxjs.BtFJbEzF.chunk.js';
import { M as Markdown } from './lib-nodepkg-vuemarkdown.DMRCth31.chunk.js';

const normalizeCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n";

const Nav = component(() => {
  const r = useRouter();
  const groups = groupBy(r.options.routes.filter((p) => p.path !== "/"), (route) => route.path.split("/")[1]);
  return () => {
    return /* @__PURE__ */ jsx(Box, { sx: {
      py: 16,
      px: 0,
      textTransform: "capitalize"
    }, children: map(groups, (routes, group) => {
      const [index, subRoutes] = partition(routes, (r2) => r2.path === `/${group}`);
      return /* @__PURE__ */ jsxs(Box, { sx: {
        px: 8
      }, children: [
        index[0] ? /* @__PURE__ */ jsx(TextButton, { component: RouterLink, sx: {
          width: "100%",
          justifyContent: "flex-start"
        }, activeClass: "active", to: index[0]?.path, children: group }) : /* @__PURE__ */ jsx(TextButton, { sx: {
          width: "100%",
          justifyContent: "flex-start"
        }, children: group }),
        /* @__PURE__ */ jsx(Box, { sx: {
          pl: 16
        }, children: map(subRoutes, (subRoute) => /* @__PURE__ */ jsx(TextButton, { component: RouterLink, activeClass: "active", to: subRoute.path, sx: {
          width: "100%",
          justifyContent: "flex-start"
        }, children: last(subRoute.path.split("/"))?.replaceAll("-", " ") }, subRoute.name)) })
      ] }, group);
    }) });
  };
});
const Scaffold = component({
  $default: custom().optional()
}, (_, { slots }) => {
  const themeMode = ref("light");
  return () => /* @__PURE__ */ jsxs(Box, { "data-theme": themeMode.value, sx: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    containerStyle: "sys.surface"
  }, children: [
    /* @__PURE__ */ jsxs(Box, { sx: {
      display: "flex",
      flexDirection: "column",
      width: "280px",
      height: "100vh",
      borderRightRadius: "lg",
      overflowY: "auto",
      containerStyle: "sys.surface-container-low",
      elevation: "0",
      _hover: {
        elevation: "2"
      }
    }, children: [
      /* @__PURE__ */ jsx(Box, { sx: {
        flex: 1
      }, children: /* @__PURE__ */ jsx(Nav, {}) }),
      /* @__PURE__ */ jsxs(Box, { sx: {
        p: 16,
        display: "flex",
        justifyContent: "flex-end"
      }, children: [
        /* @__PURE__ */ jsx(IconButton, { component: "a", target: "_blank", sx: {
          color: "sys.on-surface-variant"
        }, href: "//github.com/innoai-tech/vuekit", children: /* @__PURE__ */ jsx(Icon, { path: mdiGithub }) }),
        /* @__PURE__ */ jsx(Tooltip, { title: `切换到${themeMode.value === "light" ? "深色模式" : "浅色模式"}`, children: /* @__PURE__ */ jsx(Box, { component: IconButton, "data-test": true, sx: {
          color: "sys.on-surface-variant"
        }, onClick: () => {
          themeMode.value = themeMode.value === "light" ? "dark" : "light";
        }, children: /* @__PURE__ */ jsx(Icon, { path: themeMode.value === "light" ? mdiWeatherNight : mdiWhiteBalanceSunny }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Box, { sx: {
      flex: 1,
      overflow: "auto"
    }, children: /* @__PURE__ */ jsx(Container, { children: slots.default?.() }) })
  ] });
});
const App = component(() => {
  const x = DynamicThemingProvider.use();
  const cache = CacheProvider.use();
  watch([
    () => x.value.seed,
    () => x.value.rules
  ], ([seed, rules]) => {
    x.next((x2) => {
      x2.theming = Theming.create({
        ...defaultTheme,
        ...Palette.fromColors(seed).toDesignTokens(rules)
      }, {
        varPrefix: "vk"
      });
    });
  });
  return () => {
    const theming = x.value.theming;
    const v = theming.unstable_css(cache, {
      ":root": theming.rootCSSVars
    });
    return /* @__PURE__ */ jsx(DynamicThemingProvider, { value: x, children: /* @__PURE__ */ jsxs(ThemeProvider, { value: theming, children: [
      /* @__PURE__ */ jsx(CSSReset, {}),
      /* @__PURE__ */ jsx(GlobalStyle, { styles: normalizeCss }),
      /* @__PURE__ */ jsx(Scaffold, { children: /* @__PURE__ */ jsx(RouterView, {}) })
    ] }, v.name) });
  };
});

const __pages_import_0__ = () => __vitePreload(() => Promise.resolve().then(() => jsoneditor),true?void 0:void 0);
const __pages_import_1__ = () => __vitePreload(() => Promise.resolve().then(() => markdown),true?void 0:void 0);
const __pages_import_2__ = () => __vitePreload(() => Promise.resolve().then(() => overlays),true?void 0:void 0);
const __pages_import_3__ = () => __vitePreload(() => Promise.resolve().then(() => icons$1),true?void 0:void 0);
const __pages_import_4__ = () => __vitePreload(() => Promise.resolve().then(() => buttons),true?void 0:void 0);
const __pages_import_5__ = () => __vitePreload(() => Promise.resolve().then(() => textfields),true?void 0:void 0);
const __pages_import_6__ = () => __vitePreload(() => Promise.resolve().then(() => index$5),true?void 0:void 0);
const __pages_import_7__ = () => __vitePreload(() => Promise.resolve().then(() => typography),true?void 0:void 0);
const __pages_import_8__ = () => __vitePreload(() => Promise.resolve().then(() => colorScheme),true?void 0:void 0);
const __pages_import_9__ = () => __vitePreload(() => Promise.resolve().then(() => colorPalette),true?void 0:void 0);
const __pages_import_10__ = () => __vitePreload(() => Promise.resolve().then(() => figmaTokens),true?void 0:void 0);
const __pages_import_11__ = () => __vitePreload(() => Promise.resolve().then(() => elevation),true?void 0:void 0);
const __pages_import_12__ = () => __vitePreload(() => Promise.resolve().then(() => index$3),true?void 0:void 0);
const __pages_import_13__ = () => __vitePreload(() => Promise.resolve().then(() => popper$1),true?void 0:void 0);
const __pages_import_14__ = () => __vitePreload(() => Promise.resolve().then(() => rxInVue$1),true?void 0:void 0);
const __pages_import_15__ = () => __vitePreload(() => Promise.resolve().then(() => index$1),true?void 0:void 0);

const routes = [{"name":"jsoneditor-jsoneditor","path":"/jsoneditor/jsoneditor","component":__pages_import_0__,"props":true},{"name":"vuemarkdown-markdown","path":"/vuemarkdown/markdown","component":__pages_import_1__,"props":true},{"name":"vuematerial-overlays","path":"/vuematerial/overlays","component":__pages_import_2__,"props":true},{"name":"vuematerial-icons","path":"/vuematerial/icons","component":__pages_import_3__,"props":true},{"name":"vuematerial-buttons","path":"/vuematerial/buttons","component":__pages_import_4__,"props":true},{"name":"vuematerial-textfields","path":"/vuematerial/textfields","component":__pages_import_5__,"props":true},{"name":"vuematerial","path":"/vuematerial","component":__pages_import_6__,"props":true},{"name":"vueuikit-typography","path":"/vueuikit/typography","component":__pages_import_7__,"props":true},{"name":"vueuikit-color-scheme","path":"/vueuikit/color-scheme","component":__pages_import_8__,"props":true},{"name":"vueuikit-color-palette","path":"/vueuikit/color-palette","component":__pages_import_9__,"props":true},{"name":"vueuikit-figma-tokens","path":"/vueuikit/figma-tokens","component":__pages_import_10__,"props":true},{"name":"vueuikit-elevation","path":"/vueuikit/elevation","component":__pages_import_11__,"props":true},{"name":"vueuikit","path":"/vueuikit","component":__pages_import_12__,"props":true},{"name":"vueuikit-popper","path":"/vueuikit/popper","component":__pages_import_13__,"props":true},{"name":"vuekit-rx-in-vue","path":"/vuekit/rx-in-vue","component":__pages_import_14__,"props":true},{"name":"vuekit","path":"/vuekit","component":__pages_import_15__,"props":true},{"name":"index","path":"/","component":Object.assign(cIndexDefault, __pages_import_16__page_meta__),"props":true}];

console.log(routes);
const base = new URL(document.querySelector("base")?.href ?? "/");
const router = createRouter({
  history: createWebHistory(base.pathname),
  routes
});
createApp(App).use(router).mount("#root");

var __defProp = Object.defineProperty;
var __decorateClass = (decorators, target, key, kind) => {
  var result = void 0 ;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(target, key, result) ) || result;
  if (result) __defProp(target, key, result);
  return result;
};
var Kind = /* @__PURE__ */ ((Kind2) => {
  Kind2["A"] = "A";
  Kind2["B"] = "B";
  return Kind2;
})(Kind || {});
class Port {
  name;
  port;
}
__decorateClass([
  annotate({
    title: "名称"
  }),
  string()
], Port.prototype, "name");
__decorateClass([
  annotate({
    title: "端口号"
  }),
  union(integer(), string())
], Port.prototype, "port");
class JSONSchema {
  kind;
  name;
  annotations;
  seconds;
  addresses;
  ports;
  manifests;
  anyjson;
}
__decorateClass([
  annotate({
    title: "类型"
  }),
  nativeEnum(Kind)
], JSONSchema.prototype, "kind");
__decorateClass([
  annotate({
    title: "名称",
    description: "详细描述"
  }),
  string()
], JSONSchema.prototype, "name");
__decorateClass([
  annotate({
    title: "注解"
  }),
  record(string(), string())
], JSONSchema.prototype, "annotations");
__decorateClass([
  annotate({
    title: "秒数"
  }),
  integer(),
  optional()
], JSONSchema.prototype, "seconds");
__decorateClass([
  annotate({
    title: "地址"
  }),
  array(string()),
  optional()
], JSONSchema.prototype, "addresses");
__decorateClass([
  annotate({
    title: "端口"
  }),
  array(object(Port))
], JSONSchema.prototype, "ports");
__decorateClass([
  annotate({
    title: "其他配置"
  }),
  record(string(), any()),
  optional()
], JSONSchema.prototype, "manifests");
__decorateClass([
  annotate({
    title: "任意类型"
  }),
  record(string(), any()),
  optional()
], JSONSchema.prototype, "anyjson");
const cJsoneditorDefault = component(() => {
  const x = object(JSONSchema);
  const editor$ = JSONEditor.of(x, {
    name: "name",
    annotations: {
      longtext: new Array(100).fill("longtext").join("")
    },
    ports: [],
    manifests: {
      x: {}
    },
    anyjson: {
      obj: {
        a: 1
      },
      arr: [
        "1",
        "2",
        "3"
      ],
      nested: [
        {
          a: 1
        },
        {
          a: 2
        }
      ]
    }
  });
  rx(editor$, tap((v) => {
    const [err] = x.validate(v);
    if (!!err) {
      for (const x2 of err.failures()) {
        editor$.setError(x2.path, x2.message);
      }
    }
    console.log(JSON.stringify(v, null, 2));
  }), subscribeUntilUnmount());
  return () => /* @__PURE__ */ jsx(Container, { sx: {
    width: "100%",
    height: "100%"
  }, children: /* @__PURE__ */ jsx(JSONEditorProvider, { value: editor$, children: /* @__PURE__ */ jsx(JSONEditorView, {}) }) });
});

const jsoneditor = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cJsoneditorDefault
}, Symbol.toStringTag, { value: 'Module' }));

const StyledCode = styled("code")({
  containerStyle: "sys.surface-container",
  py: 4,
  rounded: "xs"
});
const cMarkdownDefault = component(() => {
  return () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(StyledCode, { sx: {
      px: 2
    }, children: "123123" }),
    /* @__PURE__ */ jsx(Markdown, { text: "标题 1" }),
    /* @__PURE__ */ jsx(Markdown, { text: "`code`", components: {
      code: StyledCode
    } })
  ] });
});

const markdown = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cMarkdownDefault
}, Symbol.toStringTag, { value: 'Module' }));

const cOverlaysDefault = component(() => {
  const dialogIsOpen = ref(false);
  const dialogIsOpen1 = ref(false);
  const dialogIsOpen2 = ref(false);
  return () => /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Box, { sx: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ jsx(TextButton, { onClick: () => {
      dialogIsOpen1.value = true;
    }, children: "Open Dialog" }),
    /* @__PURE__ */ jsx(Dialog, { isOpen: dialogIsOpen1.value, onClose: () => {
      dialogIsOpen1.value = false;
    }, children: /* @__PURE__ */ jsxs(DialogContainer, { sx: {
      minH: "40vh"
    }, children: [
      /* @__PURE__ */ jsxs(Box, { sx: {
        display: "flex",
        alignItems: "center",
        px: 16,
        textStyle: "sys.title-large"
      }, children: [
        /* @__PURE__ */ jsx(Box, { sx: {
          flex: 1
        }, children: "我是对话框" }),
        /* @__PURE__ */ jsx(IconButton, { onClick: () => {
          dialogIsOpen1.value = false;
        }, children: /* @__PURE__ */ jsx(Icon, { path: mdiClose }) })
      ] }),
      /* @__PURE__ */ jsx(TextButton, { onClick: () => {
        dialogIsOpen2.value = true;
      }, children: "Open Dialog In Dialog" }),
      /* @__PURE__ */ jsx(Dialog, { isOpen: dialogIsOpen2.value, onClose: () => {
        dialogIsOpen2.value = false;
      }, children: /* @__PURE__ */ jsx(DialogContainer, { sx: {
        minH: "40vh"
      }, children: /* @__PURE__ */ jsxs(Box, { sx: {
        display: "flex",
        alignItems: "center",
        px: 16,
        textStyle: "sys.title-large"
      }, children: [
        /* @__PURE__ */ jsx(Box, { sx: {
          flex: 1
        }, children: "我是对话框 2" }),
        /* @__PURE__ */ jsx(IconButton, { onClick: () => {
          dialogIsOpen2.value = false;
        }, children: /* @__PURE__ */ jsx(Icon, { path: mdiClose }) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(Tooltip, { title: "Tooltip", children: /* @__PURE__ */ jsx(TextButton, { children: "Hover me" }) }),
    /* @__PURE__ */ jsx(Tooltip, { title: "Menu", children: /* @__PURE__ */ jsx(Menu, { $menu: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ListItem, { children: "选项一" }),
      /* @__PURE__ */ jsx(ListItem, { onClick: () => {
        dialogIsOpen.value = true;
      }, children: "选项二" }),
      /* @__PURE__ */ jsx(Dialog, { isOpen: dialogIsOpen.value, onClose: () => {
        dialogIsOpen.value = false;
      }, children: /* @__PURE__ */ jsx(DialogContainer, { sx: {
        minH: "40vh"
      }, children: "我是对话框" }) }),
      /* @__PURE__ */ jsx(Menu, { placement: "right-start", $menu: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(ListItem, { children: "选项三.1" }),
        /* @__PURE__ */ jsx(ListItem, { children: "选项三.2" })
      ] }), children: /* @__PURE__ */ jsx(ListItem, { children: "选项三" }) })
    ] }), children: /* @__PURE__ */ jsx(TextButton, { children: "Menu" }) }) })
  ] }) });
});

const overlays = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cOverlaysDefault
}, Symbol.toStringTag, { value: 'Module' }));

const cIconsMdCodeBlockd4735E3ADefault = component(() => {
  return () => /* @__PURE__ */ jsx(Icon, { path: mdiSend });
});

const cIconsMdCodeBlocke7F6C011Default = component(() => {
  return () => /* @__PURE__ */ jsxs(Box, { sx: {
    display: "flex",
    gap: 8
  }, children: [
    /* @__PURE__ */ jsx(IconButton, { active: true, onClick: () => console.log(1), children: /* @__PURE__ */ jsx(Icon, { path: mdiSend }) }),
    /* @__PURE__ */ jsxs(FilledButton, { active: false, children: [
      "Send",
      /* @__PURE__ */ jsx(Icon, { path: mdiSend, placement: "end" })
    ] })
  ] });
});

function _createMdxContent$5(props) {
    const _components = {
        a: "a",
        code: "code",
        codeblockd4735e3a: "codeblockd4735e3a",
        codeblocke7f6c011: "codeblocke7f6c011",
        div: "div",
        h3: "h3",
        p: "p",
        pre: "pre",
        span: "span",
        ...props.components
    };
    return jsxs(Fragment, {
        children: [
            jsxs(_components.p, {
                children: [
                    "直接使用沿用 ",
                    jsx(_components.a, {
                        href: "https://pictogrammers.com/library/mdi/",
                        children: "mid"
                    })
                ]
            }),
            "\n",
            jsxs(_components.div, {
                "data-example": "",
                children: [
                    jsx(_components.div, {
                        "data-example-container": "",
                        children: jsx(_components.codeblockd4735e3a, {})
                    }),
                    jsx(_components.pre, {
                        className: "language-tsx",
                        children: jsxs(_components.code, {
                            className: "language-tsx",
                            children: [
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " component ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vuekit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " mdiSend ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@mdi/js\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token maybe-class-name",
                                            children: "Icon"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vuematerial\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "default"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "component"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token keyword control-flow",
                                    children: "return"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Icon"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "path"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "mdiSend",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "/>"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n"
                            ]
                        })
                    })
                ]
            }),
            "\n",
            jsx(_components.h3, {
                children: "和 Button 一起使用"
            }),
            "\n",
            jsxs(_components.div, {
                "data-example": "",
                children: [
                    jsx(_components.div, {
                        "data-example-container": "",
                        children: jsx(_components.codeblocke7f6c011, {})
                    }),
                    jsx(_components.pre, {
                        className: "language-tsx",
                        children: jsxs(_components.code, {
                            className: "language-tsx",
                            children: [
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " component ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vuekit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " mdiSend ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@mdi/js\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token maybe-class-name",
                                            children: "Icon"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vuematerial\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token maybe-class-name",
                                            children: "IconButton"
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token maybe-class-name",
                                            children: "FilledButton"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vuematerial\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token maybe-class-name",
                                            children: "Box"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vueuikit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "default"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "component"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token keyword control-flow",
                                    children: "return"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n    ",
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "sx"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                " display",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"flex\""
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ","
                                                }),
                                                " gap",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token number",
                                                    children: "8"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "IconButton"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "active"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "onClick"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token console class-name",
                                                    children: "console"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token method function property-access",
                                                    children: "log"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                jsx(_components.span, {
                                                    className: "token number",
                                                    children: "1"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n        "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Icon"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "path"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "mdiSend",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "/>"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "IconButton"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "FilledButton"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "active"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token boolean",
                                                    children: "false"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n        Send\n        "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Icon"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "path"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "mdiSend",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "placement"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token attr-value",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation attr-equals",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "\""
                                                }),
                                                "end",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "\""
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "/>"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "FilledButton"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n    "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n"
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function MDXContent$5(props = {}) {
    const { wrapper: MDXLayout } = props.components || ({});
    return MDXLayout ? jsx(MDXLayout, {
        ...props,
        children: jsx(_createMdxContent$5, {
            ...props
        })
    }) : _createMdxContent$5(props);
}
const icons = defineComponent(()=>{
    return ()=>h(MDXContent$5, {
            components: {
                codeblockd4735e3a: cIconsMdCodeBlockd4735E3ADefault,
                codeblocke7f6c011: cIconsMdCodeBlocke7F6C011Default
            }
        });
});

const icons$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: icons
}, Symbol.toStringTag, { value: 'Module' }));

const cButtonsDefault = component(() => {
  const stateProps = {
    Enabled: {},
    Disabled: {
      disabled: true
    },
    Hovered: {
      hover: true
    },
    Focused: {
      focus: true
    },
    Pressed: {
      active: true
    }
  };
  const buttons = {
    ElevatedButton,
    FilledButton,
    TonalButton,
    OutlinedButton,
    TextButton
  };
  return () => /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(Box, { sx: {
    display: "flex",
    flexDirection: "column",
    gap: 48
  }, children: map(buttons, (Button, name) => /* @__PURE__ */ jsx(Box, { sx: {
    display: "flex",
    flexDirection: "column",
    gap: 16
  }, children: [
    (v) => v,
    (v) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Icon, { path: mdiPlus, placement: "start" }),
      v
    ] }),
    (v) => /* @__PURE__ */ jsxs(Fragment, { children: [
      v,
      /* @__PURE__ */ jsx(Icon, { path: mdiSend, placement: "end" })
    ] })
  ].map((render, i) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(Box, { sx: {
    display: "flex",
    gap: 16
  }, children: map(stateProps, (props, name2) => /* @__PURE__ */ jsx(Button, { ...props, children: render(name2) })) }) }, `${i}`)) }, name)) }) });
});

const buttons = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cButtonsDefault
}, Symbol.toStringTag, { value: 'Module' }));

const cTextfieldsDefault = component(() => {
  const stateProps = {
    Enabled: {},
    Focused: {
      focus: true
    },
    Invalid: {
      invalid: true
    },
    Disabled: {
      disabled: true
    }
  };
  const buttons = {
    TextField
  };
  return () => /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(Box, { sx: {
    display: "flex",
    flexDirection: "column",
    gap: 48
  }, children: map(buttons, (TextField2, name) => /* @__PURE__ */ jsx(Box, { sx: {
    display: "flex",
    flexDirection: "column",
    gap: 16
  }, children: [
    (props) => /* @__PURE__ */ jsx(TextField2, { ...props, children: /* @__PURE__ */ jsx("input", { "data-input": "", type: "text", placeholder: "Type" }) }),
    (props) => /* @__PURE__ */ jsx(TextField2, { ...props, valued: true, children: /* @__PURE__ */ jsx("input", { "data-input": "", type: "text", value: "Username" }) }),
    (props) => /* @__PURE__ */ jsx(TextField2, { ...props, $leading: /* @__PURE__ */ jsx(Icon, { path: mdiAccount }), children: /* @__PURE__ */ jsx("input", { "data-input": "", type: "text" }) }),
    (props) => /* @__PURE__ */ jsx(TextField2, { ...props, $trailing: /* @__PURE__ */ jsx(Icon, { path: mdiPlus }), children: /* @__PURE__ */ jsx("input", { "data-input": "", type: "text" }) })
  ].map((render, i) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(Box, { sx: {
    display: "flex",
    gap: 16
  }, children: map(stateProps, (props) => render({
    ...props,
    $label: "Name",
    $supporting: "Desc"
  })) }) }, `${i}`)) }, name)) }) });
});

const textfields = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cTextfieldsDefault
}, Symbol.toStringTag, { value: 'Module' }));

function _createMdxContent$4(props) {
    const _components = {
        p: "p",
        ...props.components
    };
    return jsx(_components.p, {
        children: "这不是一个完整的组件库，只是一个示例，作为 vueuikit 的参考"
    });
}
function MDXContent$4(props = {}) {
    const { wrapper: MDXLayout } = props.components || ({});
    return MDXLayout ? jsx(MDXLayout, {
        ...props,
        children: jsx(_createMdxContent$4, {
            ...props
        })
    }) : _createMdxContent$4(props);
}
const index$4 = defineComponent(()=>{
    return ()=>h(MDXContent$4, {
            components: {}
        });
});

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index$4
}, Symbol.toStringTag, { value: 'Module' }));

const cTypographyDefault = component(() => {
  const theme = ThemeProvider.use();
  return () => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Box, { sx: {
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 8
  }, children: theme.token.textStyle.tokens.map((textStyle) => /* @__PURE__ */ jsxs(Box, { sx: {
    flex: 1,
    rounded: "md",
    textStyle,
    p: 16,
    border: "2px solid",
    borderColor: "sys.outline-variant",
    bgColor: "sys.surface-container",
    color: "sys.primary",
    minW: "10vw",
    whiteSpace: "nowrap",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }, children: [
    /* @__PURE__ */ jsx(Box, { sx: {
      textStyle: "sys.label-small"
    }, children: textStyle }),
    /* @__PURE__ */ jsx(Box, { sx: {
      flex: 1
    } }),
    /* @__PURE__ */ jsx(Box, { sx: {
      py: 16
    }, children: "中文测试" })
  ] }, textStyle)) }) });
});

const typography = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cTypographyDefault
}, Symbol.toStringTag, { value: 'Module' }));

const tones = {
  "0": true,
  "10": true,
  "20": true,
  "30": true,
  "40": true,
  "50": true,
  "60": true,
  "70": true,
  "80": true,
  "90": true,
  "95": true,
  "100": true
};
const cColorSchemeDefault = component(() => {
  return () => /* @__PURE__ */ jsx(Fragment, { children: [
    "light",
    "dark"
  ].map((theme) => /* @__PURE__ */ jsxs("div", { "data-theme": theme, children: [
    /* @__PURE__ */ jsxs(Box, { component: "h1", sx: {
      textStyle: "sys.headline-medium",
      pb: 8,
      mt: 16
    }, children: [
      upperFirst(theme),
      " Scheme"
    ] }),
    /* @__PURE__ */ jsxs(Box, { sx: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }, children: [
      /* @__PURE__ */ jsx(Box, { sx: {
        display: "flex",
        flexWrap: "wrap",
        gap: 16
      }, children: [
        "primary",
        "secondary",
        "tertiary",
        "error",
        "warning",
        "success"
      ].map((keyColor) => {
        return /* @__PURE__ */ jsxs(Box, { sx: {
          flex: 1,
          minW: 1 / 4,
          display: "flex",
          alignItems: "stretch"
        }, children: [
          /* @__PURE__ */ jsx(Box, { sx: {
            flex: 1,
            display: "flex",
            flexDirection: "column"
          }, children: [
            "",
            "-container"
          ].map((suffix) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
            /* @__PURE__ */ jsx(Box, { sx: {
              bgColor: `sys.${keyColor}${suffix}`,
              color: `sys.on-${keyColor}${suffix}`,
              p: 8,
              flex: 3
            }, children: `${keyColor}${suffix}` }),
            /* @__PURE__ */ jsx(Box, { sx: {
              color: `sys.${keyColor}${suffix}`,
              bgColor: `sys.on-${keyColor}${suffix}`,
              p: 8,
              flex: 1
            }, children: `on-${keyColor}${suffix}` })
          ] }, suffix)) }),
          /* @__PURE__ */ jsx(Box, { sx: {
            display: "flex",
            flexDirection: "column"
          }, children: map(tones, (_, k) => /* @__PURE__ */ jsxs(Box, { sx: {
            color: `${keyColor}.${parseInt(k) > 50 ? 0 : 100}`,
            bgColor: `${keyColor}.${k}`,
            w: 60,
            p: 8,
            textAlign: "right"
          }, children: [
            ".",
            k
          ] })) })
        ] }, keyColor);
      }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Box, { sx: {
          display: "flex",
          "& > *": {
            width: 1 / 3
          }
        }, children: [
          "-dim",
          "",
          "-bright"
        ].map((suffix) => /* @__PURE__ */ jsx(Box, { sx: {
          color: "sys.on-surface",
          bgColor: `sys.surface${suffix}`,
          height: 80,
          p: 8
        }, children: `surface${suffix}` })) }),
        /* @__PURE__ */ jsx(Box, { sx: {
          display: "flex",
          "& > *": {
            width: 1 / 4
          }
        }, children: [
          "-lowest",
          "-low",
          "",
          "-high",
          "-highest"
        ].map((suffix) => /* @__PURE__ */ jsx(Box, { sx: {
          color: "sys.on-surface",
          bgColor: `sys.surface-container${suffix}`,
          height: 80,
          p: 8
        }, children: `surface-container${suffix}` })) }),
        /* @__PURE__ */ jsx(Box, { sx: {
          display: "flex",
          "& > *": {
            width: 1 / 4
          }
        }, children: [
          "on-surface",
          "on-surface-variant",
          "outline",
          "outline-variant"
        ].map((color) => /* @__PURE__ */ jsx(Box, { sx: {
          color: color.includes("outline-variant") ? "sys.inverse-surface" : "sys.inverse-on-surface",
          bgColor: `sys.${color}`,
          height: 80,
          p: 8
        }, children: color })) }),
        /* @__PURE__ */ jsx(Box, { sx: {
          display: "flex"
        }, children: map(tones, (_, k) => /* @__PURE__ */ jsxs(Box, { sx: {
          color: `neutral.${parseInt(k) > 50 ? 0 : 100}`,
          bgColor: `neutral.${k}`,
          flex: 1,
          p: 8,
          textAlign: "right"
        }, children: [
          ".",
          k
        ] })) })
      ] })
    ] })
  ] }, theme)) });
});

const colorScheme = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cColorSchemeDefault
}, Symbol.toStringTag, { value: 'Module' }));

const cColorPaletteDefault = component(() => {
  const p = DynamicThemingProvider.use();
  const el = ref$1(null);
  return () => {
    const pp = Palette.fromColors(p.value.seed);
    return /* @__PURE__ */ jsxs(Box, { ref: el, sx: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }, children: [
      /* @__PURE__ */ jsxs(Box, { sx: {
        display: "flex",
        gap: 56
      }, children: [
        /* @__PURE__ */ jsx(Box, { sx: {
          display: "flex",
          flexDirection: "column"
        }, children: map(p.value.seed, (color, name) => {
          return /* @__PURE__ */ jsxs(Box, { sx: {
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 16
          }, children: [
            /* @__PURE__ */ jsx(Box, { sx: {
              flex: 1
            }, children: name }),
            /* @__PURE__ */ jsx("input", { type: "color", value: color, onChange: (evt) => {
              p.next((x) => {
                x.seed[name] = evt.target.value;
              });
            } })
          ] });
        }) }),
        /* @__PURE__ */ jsx(Box, { sx: {
          display: "flex",
          flexWrap: "wrap",
          gap: 16
        }, children: map(p.value.rules, ([base, tone], role) => {
          return /* @__PURE__ */ jsxs(Box, { sx: {
            display: "flex",
            alignItems: "center",
            width: "30%"
          }, children: [
            /* @__PURE__ */ jsx(Box, { sx: {
              flex: 1
            }, children: role }),
            /* @__PURE__ */ jsx(Box, { sx: {
              flex: 1,
              display: "flex",
              gap: 4,
              "& input": {
                width: "40%",
                border: "1px solid",
                borderColor: "sys.outline"
              }
            }, children: /* @__PURE__ */ jsx("input", { type: "number", value: tone, max: 100, min: 0, style: {
              backgroundColor: Palette.toHEX(pp.seeds[base].tone(tone)),
              color: tone > 50 ? "black" : "white"
            }, "data-color": Palette.toHEX(pp.seeds[base].tone(tone)), "data-theme": "dark", onChange: (evt) => {
              try {
                const v = parseInt(evt.target.value);
                p.next((x) => {
                  x.rules[role] = [
                    base,
                    v,
                    tone
                  ];
                });
              } catch (_) {
              }
            } }) })
          ] });
        }) })
      ] }),
      /* @__PURE__ */ jsx(Box, { sx: {
        display: "flex",
        gap: 16,
        "& > *": {
          flex: 1
        }
      }, children: /* @__PURE__ */ jsx("pre", { onClick: () => copyToClipboard(JSON.stringify(p.value)), children: /* @__PURE__ */ jsx("code", { children: JSON.stringify(p.value, null, 2) }) }) })
    ] });
  };
});

const colorPalette = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cColorPaletteDefault
}, Symbol.toStringTag, { value: 'Module' }));

const cFigmaTokensDefault = component(() => {
  const t = ThemeProvider.use();
  return () => {
    return /* @__PURE__ */ jsxs(Box, { sx: {
      display: "flex",
      gap: 16,
      flexDirection: "column"
    }, children: [
      /* @__PURE__ */ jsx("div", { children: "点击下载，通过 Figma Tokens 全量导入文件" }),
      /* @__PURE__ */ jsx("pre", { onClick: () => {
        download(JSON.stringify(t.toFigmaTokens(), null, 2), `tokens.${(/* @__PURE__ */ new Date()).getTime()}.json`);
      }, children: /* @__PURE__ */ jsx("code", { children: JSON.stringify(t.toFigmaTokens(), null, 2) }) })
    ] });
  };
});
function download(data, filename, type = "application/json") {
  const a = document.createElement("a");
  const file = new Blob([
    data
  ], {
    type
  });
  const url = URL.createObjectURL(file);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}

const figmaTokens = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cFigmaTokensDefault
}, Symbol.toStringTag, { value: 'Module' }));

const cElevationDefault = component(() => {
  const theme = ThemeProvider.use();
  return () => /* @__PURE__ */ jsx(Fragment, { children: Object.keys(theme.token.elevation.tokens).map((elevation) => /* @__PURE__ */ jsx(Box, { sx: {
    mt: 16,
    p: 16,
    rounded: "lg",
    transitionDuration: "md4",
    transitionTimingFunction: "standard",
    shadow: elevation,
    _hover: {
      shadow: `${1 + parseInt(elevation)}`
    }
  }, children: /* @__PURE__ */ jsxs("div", { children: [
    "Elevation ",
    elevation
  ] }) }, elevation)) });
});

const elevation = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cElevationDefault
}, Symbol.toStringTag, { value: 'Module' }));

const Button = styled("button", {
  disabled: boolean().optional()
})({
  bg: "none",
  outline: "none",
  border: "none",
  px: 16,
  h: 40,
  rounded: "md",
  // 利用 TypeScript 的推导而来，且非 color 属性无该值
  // 实际将转换为 var(--vk-color-sys-primary)
  // sys-* 的 color 还会随暗黑/普通主题进行切换
  color: "sys.primary",
  // color 变种
  // 实际将转换为 rbga(var(--vk-color-sys-primary-rgb) / 0.08)
  bgColor: variant("sys.primary", alpha(0.08)),
  // 通常情况下，组件 props 将转换成 data-<prop> 作为 attr
  // 即： <Button disabled/>  =>  <button data-disabled=true />
  // 同理，在自定义转换规则中，也建议如下做类似的转换，避免动态创建 CSSObject
  _disabled: {
    color: variant("sys.on-surface", alpha(0.12)),
    bgColor: variant("sys.on-surface", alpha(0.08))
  }
});
const CodeBlock4a44dc15 = () => {
  return /* @__PURE__ */ jsxs(Box, { sx: {
    display: "flex",
    gap: 8
  }, children: [
    /* @__PURE__ */ jsx(Button, { children: "按钮" }),
    /* @__PURE__ */ jsx(Button, { disabled: true, children: "按钮" })
  ] });
};

const cIndexMdCodeBlock785F3Ec7Default = component(() => () => /* @__PURE__ */ jsx(Box, { sx: {
  display: "flex",
  padding: 10,
  containerStyle: "sys.primary"
}, children: /* @__PURE__ */ jsx(Box, { sx: {
  containerStyle: "sys.surface-container"
}, component: "button", children: "Hi 111" }) }));

function _createMdxContent$3(props) {
    const _components = {
        a: "a",
        code: "code",
        codeblock4a44dc15: "codeblock4a44dc15",
        codeblock785f3ec7: "codeblock785f3ec7",
        div: "div",
        em: "em",
        h2: "h2",
        h3: "h3",
        li: "li",
        p: "p",
        pre: "pre",
        span: "span",
        strong: "strong",
        ul: "ul",
        ...props.components
    };
    return jsxs(Fragment, {
        children: [
            jsxs(_components.p, {
                children: [
                    "设计理念沿用 ",
                    jsx(_components.a, {
                        href: "https://m3.material.io/",
                        children: "Material 3"
                    })
                ]
            }),
            "\n",
            jsx(_components.p, {
                children: "这里仅为适配该设计理念，抽象 Design System, 方便开发："
            }),
            "\n",
            jsxs(_components.p, {
                children: [
                    "所有的 Design Token 将声明为 ",
                    jsx(_components.code, {
                        children: "css var"
                    }),
                    " (",
                    jsx(_components.a, {
                        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
                        children: "Custom properties"
                    }),
                    "),\n可同时支持在 ",
                    jsx(_components.code, {
                        children: "css-in-js"
                    }),
                    " 和 ",
                    jsx(_components.code, {
                        children: "raw css"
                    }),
                    " 中使用。"
                ]
            }),
            "\n",
            jsx(_components.h2, {
                children: jsx(_components.code, {
                    children: "css-in-js"
                })
            }),
            "\n",
            jsx(_components.p, {
                children: "TypeScript 的帮助下，还会提供准确的 Design Token 值. 如："
            }),
            "\n",
            jsxs(_components.div, {
                "data-example": "",
                children: [
                    jsx(_components.div, {
                        "data-example-container": "",
                        children: jsx(_components.codeblock4a44dc15, {})
                    }),
                    jsx(_components.pre, {
                        className: "language-tsx",
                        children: jsxs(_components.code, {
                            className: "language-tsx",
                            children: [
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token maybe-class-name",
                                            children: "Box"
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        " alpha",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        " styled",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        " variant ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vueuikit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " t ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vuekit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token maybe-class-name",
                                    children: "Button"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "styled"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"button\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  disabled",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " t",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token method function property-access",
                                    children: "boolean"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token method function property-access",
                                    children: "optional"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  bg",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"none\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  outline",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"none\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  border",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"none\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  px",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token number",
                                    children: "16"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  h",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token number",
                                    children: "40"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  rounded",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"md\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n\n  ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// 利用 TypeScript 的推导而来，且非 color 属性无该值"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// 实际将转换为 var(--vk-color-sys-primary)"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// sys-* 的 color 还会随暗黑/普通主题进行切换"
                                }),
                                "\n  color",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"sys.primary\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n\n  ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// color 变种"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// 实际将转换为 rbga(var(--vk-color-sys-primary-rgb) / 0.08)"
                                }),
                                "\n  bgColor",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "variant"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"sys.primary\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "alpha"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token number",
                                    children: "0.08"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n\n  ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// 通常情况下，组件 props 将转换成 data-<prop> 作为 attr"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// 即： <Button disabled/>  =>  <button data-disabled=true />"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// 同理，在自定义转换规则中，也建议如下做类似的转换，避免动态创建 CSSObject"
                                }),
                                "\n  _disabled",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n    color",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "variant"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"sys.on-surface\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "alpha"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token number",
                                    children: "0.12"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    bgColor",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "variant"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"sys.on-surface\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "alpha"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token number",
                                    children: "0.08"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "default"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token keyword control-flow",
                                    children: "return"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n    ",
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "sx"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                " display",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"flex\""
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ","
                                                }),
                                                " gap",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token number",
                                                    children: "8"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Button"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "按钮"
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Button"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Button"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "disabled"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token boolean",
                                                    children: "true"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "按钮"
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Button"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n    "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n"
                            ]
                        })
                    })
                ]
            }),
            "\n",
            jsxs(_components.p, {
                children: [
                    "不同于其他框架中的 theme 定义，为了更准确的类型推导，需要由 DesignToken 进行创建\n详细请",
                    jsx(_components.a, {
                        href: "https://github.com/innoai-tech/vuekit/blob/main/nodepkg/vueuikit/src/theming/m3",
                        children: "参考源码"
                    })
                ]
            }),
            "\n",
            jsxs(_components.p, {
                children: [
                    "虽然底层使用的是 ",
                    jsx(_components.code, {
                        children: "@emotion/*"
                    }),
                    "，但屏蔽掉了 ",
                    jsx(_components.code, {
                        children: "array"
                    }),
                    " 等非 CSSObject 值的使用, 初衷是为了更稳定的类型推导。\n另外样式扩展有两种方式"
                ]
            }),
            "\n",
            jsx(_components.pre, {
                className: "language-tsx",
                children: jsxs(_components.code, {
                    className: "language-tsx",
                    children: [
                        jsx(_components.span, {
                            className: "token keyword module",
                            children: "import"
                        }),
                        " ",
                        jsxs(_components.span, {
                            className: "token imports",
                            children: [
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                " t ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                })
                            ]
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token keyword module",
                            children: "from"
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token string",
                            children: "\"@innoai-tech/vuekit\""
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n",
                        jsx(_components.span, {
                            className: "token keyword module",
                            children: "import"
                        }),
                        " ",
                        jsxs(_components.span, {
                            className: "token imports",
                            children: [
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                " styled",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token maybe-class-name",
                                    children: "SystemStyleObject"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                })
                            ]
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token keyword module",
                            children: "from"
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token string",
                            children: "\"@innoai-tech/vueuikit\""
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n",
                        jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " shared",
                        jsx(_components.span, {
                            className: "token operator",
                            children: ":"
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "SystemStyleObject"
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n  color",
                        jsx(_components.span, {
                            className: "token operator",
                            children: ":"
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token string",
                            children: "\"sys.primary\""
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        "\n  ",
                        jsx(_components.span, {
                            className: "token comment",
                            children: "// ..."
                        }),
                        "\n",
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n",
                        jsx(_components.span, {
                            className: "token comment",
                            children: "// 直接通过 extends 复用样式"
                        }),
                        "\n",
                        jsx(_components.span, {
                            className: "token comment",
                            children: "//"
                        }),
                        "\n",
                        jsx(_components.span, {
                            className: "token comment",
                            children: "// 组件 props 定义需要重新声明"
                        }),
                        "\n",
                        jsx(_components.span, {
                            className: "token keyword module",
                            children: "export"
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "ButtonBase"
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token function",
                            children: "styled"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        jsx(_components.span, {
                            className: "token string",
                            children: "\"button\""
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n  disabled",
                        jsx(_components.span, {
                            className: "token operator",
                            children: ":"
                        }),
                        " t",
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        jsx(_components.span, {
                            className: "token method function property-access",
                            children: "boolean"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        jsx(_components.span, {
                            className: "token method function property-access",
                            children: "optional"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        "\n",
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n  ",
                        jsx(_components.span, {
                            className: "token keyword",
                            children: "extends"
                        }),
                        jsx(_components.span, {
                            className: "token operator",
                            children: ":"
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "["
                        }),
                        "shared",
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "]"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        "\n  ",
                        jsx(_components.span, {
                            className: "token comment",
                            children: "// ..."
                        }),
                        "\n",
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n",
                        jsx(_components.span, {
                            className: "token comment",
                            children: "// 通过 styled 覆写样式"
                        }),
                        "\n",
                        jsx(_components.span, {
                            className: "token comment",
                            children: "// 可以完全继承 BaseButton 的 props 定义"
                        }),
                        "\n",
                        jsx(_components.span, {
                            className: "token keyword module",
                            children: "export"
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "Button"
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        jsx(_components.span, {
                            className: "token function",
                            children: "styled"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "ButtonBase"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n  ",
                        jsx(_components.span, {
                            className: "token comment",
                            children: "// ..."
                        }),
                        "\n",
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n"
                    ]
                })
            }),
            "\n",
            jsxs(_components.p, {
                children: [
                    "除 ",
                    jsx(_components.code, {
                        children: "styled"
                    }),
                    " 外，我们还可以使用 ",
                    jsx(_components.code, {
                        children: "Box"
                    }),
                    " 进行快速样式定义, 通过 ",
                    jsx(_components.code, {
                        children: "sx"
                    }),
                    " prop。 并且 ",
                    jsx(_components.code, {
                        children: "component"
                    }),
                    " prop 支持我们随时切换 tag 或者\n组件，并且其他 props 会随着不同的 component 切换对应 props 类型约束与提示。"
                ]
            }),
            "\n",
            jsx(_components.p, {
                children: "同样的，通过 styled 创建的组件也有一样的特性。"
            }),
            "\n",
            jsxs(_components.div, {
                "data-example": "",
                children: [
                    jsx(_components.div, {
                        "data-example-container": "",
                        children: jsx(_components.codeblock785f3ec7, {})
                    }),
                    jsx(_components.pre, {
                        className: "language-tsx",
                        children: jsxs(_components.code, {
                            className: "language-tsx",
                            children: [
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " component ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vuekit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token maybe-class-name",
                                            children: "Box"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vueuikit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "default"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "component"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n  ",
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "sx"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                " display",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"flex\""
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ","
                                                }),
                                                " padding",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token number",
                                                    children: "10"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ","
                                                }),
                                                " containerStyle",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"sys.primary\""
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n    "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "sx"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                " containerStyle",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"sys.surface-container\""
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "component"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"button\""
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      Hi 111\n    "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n  "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n"
                            ]
                        })
                    })
                ]
            }),
            "\n",
            jsx(_components.h3, {
                children: "CSS Selector 简写规则"
            }),
            "\n",
            jsxs(_components.p, {
                children: [
                    "另外，为了简化 ",
                    jsx(_components.code, {
                        children: "\"&:hover\""
                    }),
                    " ",
                    jsx(_components.code, {
                        children: "&[aria-current='page']"
                    }),
                    " 等选择器声明，\n提供的如下的简化规则："
                ]
            }),
            "\n",
            jsxs(_components.ul, {
                children: [
                    "\n",
                    jsxs(_components.li, {
                        children: [
                            "所有名称支持 ",
                            jsx(_components.em, {
                                children: "下划线命名"
                            }),
                            " 或者 ",
                            jsx(_components.em, {
                                children: "驼峰命名"
                            }),
                            "，最终都将转换为 ",
                            jsx(_components.em, {
                                children: "短横小写命名"
                            }),
                            ", ",
                            jsx(_components.code, {
                                children: "="
                            }),
                            " 用 ",
                            jsx(_components.code, {
                                children: "__"
                            }),
                            " 替代"
                        ]
                    }),
                    "\n",
                    jsxs(_components.li, {
                        children: [
                            jsx(_components.code, {
                                children: "_*"
                            }),
                            " 一般表示",
                            jsx(_components.strong, {
                                children: "状态"
                            }),
                            "，可用值",
                            "\n",
                            jsxs(_components.ul, {
                                children: [
                                    "\n",
                                    jsxs(_components.li, {
                                        children: [
                                            jsx(_components.code, {
                                                children: "data-*"
                                            }),
                                            " 和 ",
                                            jsx(_components.code, {
                                                children: "aria-*"
                                            }),
                                            ", `",
                                            "\n",
                                            jsxs(_components.ul, {
                                                children: [
                                                    "\n",
                                                    jsxs(_components.li, {
                                                        children: [
                                                            "如 ",
                                                            jsx(_components.code, {
                                                                children: "_aria_current__page"
                                                            }),
                                                            "： 等效为 ",
                                                            jsx(_components.code, {
                                                                children: "&[aria-current='page']"
                                                            }),
                                                            ","
                                                        ]
                                                    }),
                                                    "\n"
                                                ]
                                            }),
                                            "\n"
                                        ]
                                    }),
                                    "\n",
                                    jsxs(_components.li, {
                                        children: [
                                            jsx(_components.code, {
                                                children: "before"
                                            }),
                                            "，",
                                            jsx(_components.code, {
                                                children: "after"
                                            }),
                                            " 等",
                                            jsx(_components.a, {
                                                href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements",
                                                children: "伪元素"
                                            }),
                                            ", 需要声明 \"$\" 表示为元素",
                                            "\n",
                                            jsxs(_components.ul, {
                                                children: [
                                                    "\n",
                                                    jsxs(_components.li, {
                                                        children: [
                                                            "如 ",
                                                            jsx(_components.code, {
                                                                children: "_$before"
                                                            }),
                                                            "： 等效为 ",
                                                            jsx(_components.code, {
                                                                children: "&::before"
                                                            })
                                                        ]
                                                    }),
                                                    "\n"
                                                ]
                                            }),
                                            "\n"
                                        ]
                                    }),
                                    "\n",
                                    jsxs(_components.li, {
                                        children: [
                                            jsx(_components.code, {
                                                children: "hover"
                                            }),
                                            ", ",
                                            jsx(_components.code, {
                                                children: "focus"
                                            }),
                                            ", ",
                                            jsx(_components.code, {
                                                children: "active"
                                            }),
                                            ", ",
                                            jsx(_components.code, {
                                                children: "disabled"
                                            }),
                                            " 等",
                                            jsx(_components.a, {
                                                href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes",
                                                children: "伪类"
                                            }),
                                            "\n",
                                            jsxs(_components.ul, {
                                                children: [
                                                    "\n",
                                                    jsxs(_components.li, {
                                                        children: [
                                                            "如 ",
                                                            jsx(_components.code, {
                                                                children: "_hover"
                                                            }),
                                                            "： 等效为 ",
                                                            jsx(_components.code, {
                                                                children: "&:hover, &.hover, &[data-hover]:not([data-hover='false'])"
                                                            }),
                                                            ","
                                                        ]
                                                    }),
                                                    "\n"
                                                ]
                                            }),
                                            "\n"
                                        ]
                                    }),
                                    "\n",
                                    jsxs(_components.li, {
                                        children: [
                                            "以及其他自定义状态",
                                            "\n",
                                            jsxs(_components.ul, {
                                                children: [
                                                    "\n",
                                                    jsxs(_components.li, {
                                                        children: [
                                                            "如 ",
                                                            jsx(_components.code, {
                                                                children: "_has_icon"
                                                            }),
                                                            "： 等效为 ",
                                                            jsx(_components.code, {
                                                                children: "&[data-has-icon]:not([data-has-icon='false'])"
                                                            })
                                                        ]
                                                    }),
                                                    "\n"
                                                ]
                                            }),
                                            "\n"
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    jsxs(_components.li, {
                        children: [
                            jsx(_components.code, {
                                children: "$*"
                            }),
                            " 或 ",
                            jsx(_components.code, {
                                children: "*$"
                            }),
                            "，一般指代",
                            jsx(_components.strong, {
                                children: "元素节点"
                            }),
                            ", 可用值为",
                            "\n",
                            jsxs(_components.ul, {
                                children: [
                                    "\n",
                                    jsxs(_components.li, {
                                        children: [
                                            jsx(_components.code, {
                                                children: "data-*"
                                            }),
                                            " 和 ",
                                            jsx(_components.code, {
                                                children: "aria-*"
                                            }),
                                            ", `",
                                            "\n",
                                            jsxs(_components.ul, {
                                                children: [
                                                    "\n",
                                                    jsxs(_components.li, {
                                                        children: [
                                                            "如 ",
                                                            jsx(_components.code, {
                                                                children: "$data_icon"
                                                            }),
                                                            "： 等效为 ",
                                                            jsx(_components.code, {
                                                                children: "&[data-icon]"
                                                            })
                                                        ]
                                                    }),
                                                    "\n",
                                                    jsxs(_components.li, {
                                                        children: [
                                                            "如 ",
                                                            jsx(_components.code, {
                                                                children: "$data_popper_arrow"
                                                            }),
                                                            "： 等效为 ",
                                                            jsx(_components.code, {
                                                                children: "&[data-popper-arrow]"
                                                            })
                                                        ]
                                                    }),
                                                    "\n",
                                                    jsxs(_components.li, {
                                                        children: [
                                                            "如 ",
                                                            jsx(_components.code, {
                                                                children: "data_popper_placement__right$"
                                                            }),
                                                            "： 等效为 ",
                                                            jsx(_components.code, {
                                                                children: "[data-popper-placement=right] &"
                                                            })
                                                        ]
                                                    }),
                                                    "\n"
                                                ]
                                            }),
                                            "\n"
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            })
        ]
    });
}
function MDXContent$3(props = {}) {
    const { wrapper: MDXLayout } = props.components || ({});
    return MDXLayout ? jsx(MDXLayout, {
        ...props,
        children: jsx(_createMdxContent$3, {
            ...props
        })
    }) : _createMdxContent$3(props);
}
const index$2 = defineComponent(()=>{
    return ()=>h(MDXContent$3, {
            components: {
                codeblock4a44dc15: CodeBlock4a44dc15,
                codeblock785f3ec7: cIndexMdCodeBlock785F3Ec7Default
            }
        });
});

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index$2
}, Symbol.toStringTag, { value: 'Module' }));

const cPopperMdCodeBlockd4735E3ADefault = component(() => {
  const isOpen = ref(false);
  const sameWidth = size({
    apply({ elements, rects }) {
      Object.assign(elements.floating.style, {
        width: `${rects.reference.width}px`
      });
    }
  });
  return () => /* @__PURE__ */ jsx(Popper, { isOpen: isOpen.value, onClickOutside: () => isOpen.value = false, placement: "bottom-start", modifiers: [
    sameWidth
  ], $content: /* @__PURE__ */ jsxs(Box, { sx: {
    containerStyle: "sys.on-surface"
  }, children: [
    "Popper ",
    `${isOpen.value}`,
    "!"
  ] }), children: /* @__PURE__ */ jsx(Box, { sx: {
    p: 4
  }, component: "button", onClick: () => isOpen.value = !isOpen.value, children: "Click Trigger Popper" }) });
});

const cPopperMdCodeBlocke7F6C011Default = component(() => {
  const isOpen = ref(false);
  return () => /* @__PURE__ */ jsx(Popper, { isOpen: isOpen.value, $content: /* @__PURE__ */ jsx(Box, { sx: {
    containerStyle: "sys.on-surface"
  }, children: "Popper Content!" }), children: /* @__PURE__ */ jsx(Box, { component: "button", sx: {
    p: 4
  }, onMouseover: () => isOpen.value = true, onMouseout: () => isOpen.value = false, children: "Popper Trigger" }) });
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
  easing: transition.easing.standard.decelerate
});
const cPopperMdCodeBlock4A44Dc15Default = component(() => {
  const isOpen = ref(true);
  return () => /* @__PURE__ */ jsx(Popper, { isOpen: isOpen.value, $transition: ({ content }) => /* @__PURE__ */ jsx(FadeInOutTransition, { children: content }), $content: /* @__PURE__ */ jsxs(Box, { sx: {
    containerStyle: "sys.on-surface",
    shadow: "2",
    py: 2,
    px: 4,
    rounded: "sm"
  }, children: [
    "Popper ",
    `${isOpen.value}`,
    "!"
  ] }), children: /* @__PURE__ */ jsx(Box, { sx: {
    p: 4
  }, component: "button", onMouseover: () => isOpen.value = true, onMouseout: () => isOpen.value = false, children: "Animated Popper" }) });
});

function _createMdxContent$2(props) {
    const _components = {
        code: "code",
        codeblock4a44dc15: "codeblock4a44dc15",
        codeblockd4735e3a: "codeblockd4735e3a",
        codeblocke7f6c011: "codeblocke7f6c011",
        div: "div",
        h2: "h2",
        pre: "pre",
        span: "span",
        ...props.components
    };
    return jsxs(Fragment, {
        children: [
            jsx(_components.h2, {
                children: "Normal Popper"
            }),
            "\n",
            jsxs(_components.div, {
                "data-example": "",
                children: [
                    jsx(_components.div, {
                        "data-example-container": "",
                        children: jsx(_components.codeblockd4735e3a, {})
                    }),
                    jsx(_components.pre, {
                        className: "language-tsx",
                        children: jsxs(_components.code, {
                            className: "language-tsx",
                            children: [
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " component ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vuekit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token maybe-class-name",
                                            children: "Box"
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token maybe-class-name",
                                            children: "Popper"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vueuikit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " size ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@floating-ui/dom\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ref ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"vue\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "default"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "component"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " isOpen ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "ref"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token boolean",
                                    children: "false"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n  ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " sameWidth ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "size"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "apply"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                " elements",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " rects ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n      ",
                                jsx(_components.span, {
                                    className: "token known-class-name class-name",
                                    children: "Object"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token method function property-access",
                                    children: "assign"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "elements",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "floating"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "style"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n        width",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token template-string",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token template-punctuation string",
                                            children: "`"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token interpolation",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token interpolation-punctuation punctuation",
                                                    children: "${"
                                                }),
                                                "rects",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "reference"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "width"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token interpolation-punctuation punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token string",
                                            children: "px"
                                        }),
                                        jsx(_components.span, {
                                            className: "token template-punctuation string",
                                            children: "`"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n      ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n  ",
                                jsx(_components.span, {
                                    className: "token keyword control-flow",
                                    children: "return"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n    ",
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Popper"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "isOpen"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "isOpen",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "onClickOutside"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "isOpen",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: "="
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token boolean",
                                                    children: "false"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "placement"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"bottom-start\""
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "modifiers"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "["
                                                }),
                                                "sameWidth",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "]"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "$content"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "\n        ",
                                                jsxs(_components.span, {
                                                    className: "token tag",
                                                    children: [
                                                        jsxs(_components.span, {
                                                            className: "token tag",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "<"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token class-name",
                                                                    children: "Box"
                                                                })
                                                            ]
                                                        }),
                                                        " ",
                                                        jsx(_components.span, {
                                                            className: "token attr-name",
                                                            children: "sx"
                                                        }),
                                                        jsxs(_components.span, {
                                                            className: "token script language-javascript",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token script-punctuation punctuation",
                                                                    children: "="
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "{"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "{"
                                                                }),
                                                                " containerStyle",
                                                                jsx(_components.span, {
                                                                    className: "token operator",
                                                                    children: ":"
                                                                }),
                                                                " ",
                                                                jsx(_components.span, {
                                                                    className: "token string",
                                                                    children: "\"sys.on-surface\""
                                                                }),
                                                                " ",
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "}"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "}"
                                                                })
                                                            ]
                                                        }),
                                                        jsx(_components.span, {
                                                            className: "token punctuation",
                                                            children: ">"
                                                        })
                                                    ]
                                                }),
                                                jsx(_components.span, {
                                                    className: "token plain-text",
                                                    children: "\n          Popper "
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsxs(_components.span, {
                                                    className: "token template-string",
                                                    children: [
                                                        jsx(_components.span, {
                                                            className: "token template-punctuation string",
                                                            children: "`"
                                                        }),
                                                        jsxs(_components.span, {
                                                            className: "token interpolation",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token interpolation-punctuation punctuation",
                                                                    children: "${"
                                                                }),
                                                                "isOpen",
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "."
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token property-access",
                                                                    children: "value"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token interpolation-punctuation punctuation",
                                                                    children: "}"
                                                                })
                                                            ]
                                                        }),
                                                        jsx(_components.span, {
                                                            className: "token template-punctuation string",
                                                            children: "`"
                                                        })
                                                    ]
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token plain-text",
                                                    children: "!\n        "
                                                }),
                                                jsxs(_components.span, {
                                                    className: "token tag",
                                                    children: [
                                                        jsxs(_components.span, {
                                                            className: "token tag",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "</"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token class-name",
                                                                    children: "Box"
                                                                })
                                                            ]
                                                        }),
                                                        jsx(_components.span, {
                                                            className: "token punctuation",
                                                            children: ">"
                                                        })
                                                    ]
                                                }),
                                                "\n      ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n    ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "sx"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                " p",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token number",
                                                    children: "4"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "component"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"button\""
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "onClick"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "isOpen",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: "="
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: "!"
                                                }),
                                                "isOpen",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n        Click Trigger Popper\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n    "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Popper"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n"
                            ]
                        })
                    })
                ]
            }),
            "\n",
            jsx(_components.h2, {
                children: "Hovered Popper"
            }),
            "\n",
            jsxs(_components.div, {
                "data-example": "",
                children: [
                    jsx(_components.div, {
                        "data-example-container": "",
                        children: jsx(_components.codeblocke7f6c011, {})
                    }),
                    jsx(_components.pre, {
                        className: "language-tsx",
                        children: jsxs(_components.code, {
                            className: "language-tsx",
                            children: [
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ref ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"vue\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " component ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vuekit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token maybe-class-name",
                                            children: "Box"
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token maybe-class-name",
                                            children: "Popper"
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vueuikit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "default"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "component"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " isOpen ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "ref"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token boolean",
                                    children: "false"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n  ",
                                jsx(_components.span, {
                                    className: "token keyword control-flow",
                                    children: "return"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n    ",
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Popper"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "isOpen"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "isOpen",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "$content"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "\n        ",
                                                jsxs(_components.span, {
                                                    className: "token tag",
                                                    children: [
                                                        jsxs(_components.span, {
                                                            className: "token tag",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "<"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token class-name",
                                                                    children: "Box"
                                                                })
                                                            ]
                                                        }),
                                                        " ",
                                                        jsx(_components.span, {
                                                            className: "token attr-name",
                                                            children: "sx"
                                                        }),
                                                        jsxs(_components.span, {
                                                            className: "token script language-javascript",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token script-punctuation punctuation",
                                                                    children: "="
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "{"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "{"
                                                                }),
                                                                " containerStyle",
                                                                jsx(_components.span, {
                                                                    className: "token operator",
                                                                    children: ":"
                                                                }),
                                                                " ",
                                                                jsx(_components.span, {
                                                                    className: "token string",
                                                                    children: "\"sys.on-surface\""
                                                                }),
                                                                " ",
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "}"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "}"
                                                                })
                                                            ]
                                                        }),
                                                        jsx(_components.span, {
                                                            className: "token punctuation",
                                                            children: ">"
                                                        })
                                                    ]
                                                }),
                                                jsx(_components.span, {
                                                    className: "token plain-text",
                                                    children: "Popper Content!"
                                                }),
                                                jsxs(_components.span, {
                                                    className: "token tag",
                                                    children: [
                                                        jsxs(_components.span, {
                                                            className: "token tag",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "</"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token class-name",
                                                                    children: "Box"
                                                                })
                                                            ]
                                                        }),
                                                        jsx(_components.span, {
                                                            className: "token punctuation",
                                                            children: ">"
                                                        })
                                                    ]
                                                }),
                                                "\n      ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n    ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "component"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"button\""
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "sx"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                " p",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token number",
                                                    children: "4"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "onMouseover"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "isOpen",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: "="
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token boolean",
                                                    children: "true"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "onMouseout"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "isOpen",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: "="
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token boolean",
                                                    children: "false"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n        Popper Trigger\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n    "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Popper"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n"
                            ]
                        })
                    })
                ]
            }),
            "\n",
            jsx(_components.h2, {
                children: "Animated"
            }),
            "\n",
            jsxs(_components.div, {
                "data-example": "",
                children: [
                    jsx(_components.div, {
                        "data-example-container": "",
                        children: jsx(_components.codeblock4a44dc15, {})
                    }),
                    jsx(_components.pre, {
                        className: "language-tsx",
                        children: jsxs(_components.code, {
                            className: "language-tsx",
                            children: [
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ref ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"vue\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " component ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vuekit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        "\n  ",
                                        jsx(_components.span, {
                                            className: "token maybe-class-name",
                                            children: "Box"
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        "\n  defineTransition",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        "\n  ",
                                        jsx(_components.span, {
                                            className: "token maybe-class-name",
                                            children: "Popper"
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        "\n  transition",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        "\n  triangle",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        "\n",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vueuikit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token maybe-class-name",
                                    children: "FadeInOutTransition"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "defineTransition"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n      opacity",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token number",
                                    children: "0"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    to",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n      opacity",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token number",
                                    children: "1"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    duration",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " transition",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "duration"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "md1"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    easing",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " transition",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "easing"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "standard"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "accelerate"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n      opacity",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token number",
                                    children: "1"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    to",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n      opacity",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token number",
                                    children: "0"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    duration",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " transition",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "duration"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "sm4"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    easing",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " transition",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "easing"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "standard"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "decelerate"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "default"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "component"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " isOpen ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "ref"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token boolean",
                                    children: "true"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n  ",
                                jsx(_components.span, {
                                    className: "token keyword control-flow",
                                    children: "return"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n    ",
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Popper"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "isOpen"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "isOpen",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "$transition"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                " content ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "\n        ",
                                                jsxs(_components.span, {
                                                    className: "token tag",
                                                    children: [
                                                        jsxs(_components.span, {
                                                            className: "token tag",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "<"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token class-name",
                                                                    children: "FadeInOutTransition"
                                                                })
                                                            ]
                                                        }),
                                                        jsx(_components.span, {
                                                            className: "token punctuation",
                                                            children: ">"
                                                        })
                                                    ]
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "content",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsxs(_components.span, {
                                                    className: "token tag",
                                                    children: [
                                                        jsxs(_components.span, {
                                                            className: "token tag",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "</"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token class-name",
                                                                    children: "FadeInOutTransition"
                                                                })
                                                            ]
                                                        }),
                                                        jsx(_components.span, {
                                                            className: "token punctuation",
                                                            children: ">"
                                                        })
                                                    ]
                                                }),
                                                "\n      ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "$content"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "\n        ",
                                                jsxs(_components.span, {
                                                    className: "token tag",
                                                    children: [
                                                        jsxs(_components.span, {
                                                            className: "token tag",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "<"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token class-name",
                                                                    children: "Box"
                                                                })
                                                            ]
                                                        }),
                                                        "\n          ",
                                                        jsx(_components.span, {
                                                            className: "token attr-name",
                                                            children: "sx"
                                                        }),
                                                        jsxs(_components.span, {
                                                            className: "token script language-javascript",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token script-punctuation punctuation",
                                                                    children: "="
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "{"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "{"
                                                                }),
                                                                "\n            containerStyle",
                                                                jsx(_components.span, {
                                                                    className: "token operator",
                                                                    children: ":"
                                                                }),
                                                                " ",
                                                                jsx(_components.span, {
                                                                    className: "token string",
                                                                    children: "\"sys.on-surface\""
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: ","
                                                                }),
                                                                "\n            shadow",
                                                                jsx(_components.span, {
                                                                    className: "token operator",
                                                                    children: ":"
                                                                }),
                                                                " ",
                                                                jsx(_components.span, {
                                                                    className: "token string",
                                                                    children: "\"2\""
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: ","
                                                                }),
                                                                "\n            py",
                                                                jsx(_components.span, {
                                                                    className: "token operator",
                                                                    children: ":"
                                                                }),
                                                                " ",
                                                                jsx(_components.span, {
                                                                    className: "token number",
                                                                    children: "2"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: ","
                                                                }),
                                                                "\n            px",
                                                                jsx(_components.span, {
                                                                    className: "token operator",
                                                                    children: ":"
                                                                }),
                                                                " ",
                                                                jsx(_components.span, {
                                                                    className: "token number",
                                                                    children: "4"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: ","
                                                                }),
                                                                "\n            rounded",
                                                                jsx(_components.span, {
                                                                    className: "token operator",
                                                                    children: ":"
                                                                }),
                                                                " ",
                                                                jsx(_components.span, {
                                                                    className: "token string",
                                                                    children: "\"sm\""
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: ","
                                                                }),
                                                                "\n          ",
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "}"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "}"
                                                                })
                                                            ]
                                                        }),
                                                        "\n        ",
                                                        jsx(_components.span, {
                                                            className: "token punctuation",
                                                            children: ">"
                                                        })
                                                    ]
                                                }),
                                                jsx(_components.span, {
                                                    className: "token plain-text",
                                                    children: "\n          Popper "
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsxs(_components.span, {
                                                    className: "token template-string",
                                                    children: [
                                                        jsx(_components.span, {
                                                            className: "token template-punctuation string",
                                                            children: "`"
                                                        }),
                                                        jsxs(_components.span, {
                                                            className: "token interpolation",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token interpolation-punctuation punctuation",
                                                                    children: "${"
                                                                }),
                                                                "isOpen",
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "."
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token property-access",
                                                                    children: "value"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token interpolation-punctuation punctuation",
                                                                    children: "}"
                                                                })
                                                            ]
                                                        }),
                                                        jsx(_components.span, {
                                                            className: "token template-punctuation string",
                                                            children: "`"
                                                        })
                                                    ]
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token plain-text",
                                                    children: "!\n        "
                                                }),
                                                jsxs(_components.span, {
                                                    className: "token tag",
                                                    children: [
                                                        jsxs(_components.span, {
                                                            className: "token tag",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "</"
                                                                }),
                                                                jsx(_components.span, {
                                                                    className: "token class-name",
                                                                    children: "Box"
                                                                })
                                                            ]
                                                        }),
                                                        jsx(_components.span, {
                                                            className: "token punctuation",
                                                            children: ">"
                                                        })
                                                    ]
                                                }),
                                                "\n      ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n    ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "sx"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                " p",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token number",
                                                    children: "4"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "component"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"button\""
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "onMouseover"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "isOpen",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: "="
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token boolean",
                                                    children: "true"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "onMouseout"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "isOpen",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: "="
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token boolean",
                                                    children: "false"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n        Animated Popper\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Box"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n    "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "Popper"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n"
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function MDXContent$2(props = {}) {
    const { wrapper: MDXLayout } = props.components || ({});
    return MDXLayout ? jsx(MDXLayout, {
        ...props,
        children: jsx(_createMdxContent$2, {
            ...props
        })
    }) : _createMdxContent$2(props);
}
const popper = defineComponent(()=>{
    return ()=>h(MDXContent$2, {
            components: {
                codeblockd4735e3a: cPopperMdCodeBlockd4735E3ADefault,
                codeblocke7f6c011: cPopperMdCodeBlocke7F6C011Default,
                codeblock4a44dc15: cPopperMdCodeBlock4A44Dc15Default
            }
        });
});

const popper$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: popper
}, Symbol.toStringTag, { value: 'Module' }));

const TextDebounceInput = component$((props, { emit }) => {
  const value$ = observableRef(props.value ?? "1");
  rx(value$, debounceTime(300), subscribeUntilUnmount((v) => emit("value-change", v)));
  return rx(value$, render((v) => /* @__PURE__ */ jsx("input", { value: v, onInput: (e) => {
    value$.value = e.target.value;
  } })));
});
const cRxInVueMdCodeBlockd4735E3ADefault = component(() => {
  const inputValue = ref("default");
  return () => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { style: {
    display: "flex",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ jsx(TextDebounceInput, { value: inputValue.value, onValueChange: (value) => {
      inputValue.value = value;
    } }),
    /* @__PURE__ */ jsxs("div", { children: [
      "Inputted: ",
      inputValue.value
    ] })
  ] }) });
});

function _createMdxContent$1(props) {
    const _components = {
        a: "a",
        code: "code",
        codeblockd4735e3a: "codeblockd4735e3a",
        div: "div",
        p: "p",
        pre: "pre",
        span: "span",
        ...props.components
    };
    return jsxs(Fragment, {
        children: [
            jsxs(_components.p, {
                children: [
                    "和 ",
                    jsx(_components.a, {
                        href: "https://rxjs.dev/",
                        children: "rxjs"
                    }),
                    " 集成"
                ]
            }),
            "\n",
            jsxs(_components.div, {
                "data-example": "",
                children: [
                    jsx(_components.div, {
                        "data-example-container": "",
                        children: jsx(_components.codeblockd4735e3a, {})
                    }),
                    jsx(_components.pre, {
                        className: "language-tsx",
                        children: jsxs(_components.code, {
                            className: "language-tsx",
                            children: [
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        "\n  component",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        "\n  component$",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        "\n  observableRef",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        "\n  render",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        "\n  rx",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        "\n  subscribeUntilUnmount",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ","
                                        }),
                                        "\n",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vuekit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ref ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"vue\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " debounceTime ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"rxjs\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token maybe-class-name",
                                    children: "TextDebounceInput"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " component$",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "<"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  value",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "?"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token builtin",
                                    children: "string"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n  onValueChange",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "?"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "v",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token builtin",
                                    children: "string"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "void"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ">"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "props",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                " emit ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " value$ ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "observableRef"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "props",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "value"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "??"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"1\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n  ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "rx"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n    value$",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "debounceTime"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token number",
                                    children: "300"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "subscribeUntilUnmount"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "v",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "emit"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"value-change\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " v",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n  ",
                                jsx(_components.span, {
                                    className: "token keyword control-flow",
                                    children: "return"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "rx"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n    value$",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "render"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "v",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n      ",
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "input"
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "value"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "v",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "onInput"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "e",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "\n          value$",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: "="
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "e",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "target"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token keyword module",
                                                    children: "as"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token maybe-class-name",
                                                    children: "HTMLInputElement"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ";"
                                                }),
                                                "\n        ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "/>"
                                        })
                                    ]
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "default"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "component"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " inputValue ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "ref"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"default\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n  ",
                                jsx(_components.span, {
                                    className: "token keyword control-flow",
                                    children: "return"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n    ",
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "div"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "div"
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "style"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                " display",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"flex\""
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ","
                                                }),
                                                " gap",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"1rem\""
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n        "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "TextDebounceInput"
                                                })
                                            ]
                                        }),
                                        "\n          ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "value"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "inputValue",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n          ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "onValueChange"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "value",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "\n            inputValue",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: "="
                                                }),
                                                " value",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ";"
                                                }),
                                                "\n          ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "/>"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n        "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "div"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "Inputted: "
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "inputValue",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "value"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                "div"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                "div"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n    "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                "div"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n"
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function MDXContent$1(props = {}) {
    const { wrapper: MDXLayout } = props.components || ({});
    return MDXLayout ? jsx(MDXLayout, {
        ...props,
        children: jsx(_createMdxContent$1, {
            ...props
        })
    }) : _createMdxContent$1(props);
}
const rxInVue = defineComponent(()=>{
    return ()=>h(MDXContent$1, {
            components: {
                codeblockd4735e3a: cRxInVueMdCodeBlockd4735E3ADefault
            }
        });
});

const rxInVue$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: rxInVue
}, Symbol.toStringTag, { value: 'Module' }));

const cIndexMdCodeBlock4B227777Default = component(() => {
  const count = ref(1);
  return () => /* @__PURE__ */ jsxs("div", { style: {
    display: "flex",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      "Counts: ",
      count.value
    ] }),
    /* @__PURE__ */ jsx("button", { onClick: () => count.value++, children: "Click To Count" })
  ] });
});

const TextInput = component({
  // VUE 的注册机制（Proxy 定义基准，以及从 attrs 中提取 props 的 emits 的依据）
  // 必须声明，哪怕只是属性名称
  //
  // 又由于 TypeString 的老问题  https://www.typescriptneedstypes.com/#the-problem
  // 类型定义无法转为 Runtime 对象
  value: string().optional().default("1"),
  type: enums([
    "text",
    "number"
  ]),
  // on[A-Z] 前缀视为 emits
  onValueChange: custom()
}, (props, { emit }) => {
  return () => /* @__PURE__ */ jsx("input", { value: props.value, onInput: (e) => {
    emit("value-change", e.target.value);
  } });
});
const List = component({
  // $ 前缀视为 slots
  $title: custom().optional(),
  // renderProp
  $item: custom().optional(),
  $default: custom().optional()
}, ({}, { slots }) => () => {
  const options = [
    {
      label: "1",
      value: "1"
    },
    {
      label: "2",
      value: "2"
    }
  ];
  return /* @__PURE__ */ jsxs("dl", { children: [
    /* @__PURE__ */ jsx("dt", { children: "default" }),
    /* @__PURE__ */ jsx("dd", { children: slots.default?.() }),
    /* @__PURE__ */ jsx("dt", { children: "title" }),
    /* @__PURE__ */ jsx("dd", { children: slots.title?.() }),
    /* @__PURE__ */ jsx("dt", { children: "item" }),
    /* @__PURE__ */ jsx("dd", { children: options.map((option) => slots.item?.(option)) })
  ] });
});
const cIndexMdCodeBlock4A44Dc15Default = component(() => {
  const inputValue = ref("");
  return () => /* @__PURE__ */ jsx(List, { $title: /* @__PURE__ */ jsxs("div", { children: [
    "Inputted: ",
    inputValue.value
  ] }), $item: (o) => /* @__PURE__ */ jsx("div", { children: o.label }), children: /* @__PURE__ */ jsx(TextInput, { type: "text", onValueChange: (value) => {
    inputValue.value = value;
  } }) });
});

function _createMdxContent(props) {
    const _components = {
        code: "code",
        codeblock4a44dc15: "codeblock4a44dc15",
        codeblock4b227777: "codeblock4b227777",
        div: "div",
        li: "li",
        p: "p",
        pre: "pre",
        span: "span",
        ul: "ul",
        ...props.components
    };
    return jsxs(Fragment, {
        children: [
            jsx(_components.p, {
                children: "为了更好的 TypeScript 和 JSX 的支持，重新抽象了定义组件的方式"
            }),
            "\n",
            jsx(_components.p, {
                children: "一般组件："
            }),
            "\n",
            jsxs(_components.div, {
                "data-example": "",
                children: [
                    jsx(_components.div, {
                        "data-example-container": "",
                        children: jsx(_components.codeblock4b227777, {})
                    }),
                    jsx(_components.pre, {
                        className: "language-tsx",
                        children: jsxs(_components.code, {
                            className: "language-tsx",
                            children: [
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " component ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vuekit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ref ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"vue\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "default"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "component"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " count ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "ref"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token number",
                                    children: "1"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n  ",
                                jsx(_components.span, {
                                    className: "token keyword control-flow",
                                    children: "return"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n    ",
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "div"
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "style"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                " display",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"flex\""
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ","
                                                }),
                                                " gap",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: ":"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"1rem\""
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "div"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "Counts: "
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "count",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "value"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                "div"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "button"
                                            ]
                                        }),
                                        " ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "onClick"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " count",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: "++"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "Click To Count"
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                "button"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n    "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                "div"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n"
                            ]
                        })
                    })
                ]
            }),
            "\n",
            jsx(_components.p, {
                children: "可复用组件："
            }),
            "\n",
            jsxs(_components.ul, {
                children: [
                    "\n",
                    jsxs(_components.li, {
                        children: [
                            jsx(_components.code, {
                                children: "props"
                            }),
                            " 和 ",
                            jsx(_components.code, {
                                children: "emits"
                            }),
                            " 合并声明"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            jsxs(_components.div, {
                "data-example": "",
                children: [
                    jsx(_components.div, {
                        "data-example-container": "",
                        children: jsx(_components.codeblock4a44dc15, {})
                    }),
                    jsx(_components.pre, {
                        className: "language-tsx",
                        children: jsxs(_components.code, {
                            className: "language-tsx",
                            children: [
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                " component",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " t",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "type"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token class-name",
                                    children: jsx(_components.span, {
                                        className: "token maybe-class-name",
                                        children: "VNode"
                                    })
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "type"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token class-name",
                                    children: jsx(_components.span, {
                                        className: "token maybe-class-name",
                                        children: "VNodeChild"
                                    })
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"@innoai-tech/vuekit\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "import"
                                }),
                                " ",
                                jsxs(_components.span, {
                                    className: "token imports",
                                    children: [
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "{"
                                        }),
                                        " ref ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "from"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"vue\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token maybe-class-name",
                                    children: "TextInput"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "component"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// VUE 的注册机制（Proxy 定义基准，以及从 attrs 中提取 props 的 emits 的依据）"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// 必须声明，哪怕只是属性名称"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "//"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// 又由于 TypeString 的老问题  https://www.typescriptneedstypes.com/#the-problem"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// 类型定义无法转为 Runtime 对象"
                                }),
                                "\n    value",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " t",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token method function property-access",
                                    children: "string"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token method function property-access",
                                    children: "optional"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "default"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"1\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    type",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " t",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token method function property-access",
                                    children: "enums"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "["
                                }),
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"text\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"number\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "]"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n\n    ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// on[A-Z] 前缀视为 emits"
                                }),
                                "\n    onValueChange",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " t",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "custom"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "<"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "v",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token builtin",
                                    children: "string"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "void"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ">"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "props",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                " emit ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// setup"
                                }),
                                "\n\n    ",
                                jsx(_components.span, {
                                    className: "token keyword control-flow",
                                    children: "return"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n      ",
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "input"
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "value"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "props",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "onInput"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "e",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "\n          ",
                                                jsx(_components.span, {
                                                    className: "token function",
                                                    children: "emit"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"value-change\""
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ","
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "e",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "target"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token keyword module",
                                                    children: "as"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token maybe-class-name",
                                                    children: "HTMLInputElement"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ";"
                                                }),
                                                "\n        ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "/>"
                                        })
                                    ]
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "interface"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token class-name",
                                    children: jsx(_components.span, {
                                        className: "token maybe-class-name",
                                        children: "Option"
                                    })
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  label",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token builtin",
                                    children: "string"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n  value",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token builtin",
                                    children: "string"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token maybe-class-name",
                                    children: "List"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "component"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// $ 前缀视为 slots"
                                }),
                                "\n    $title",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " t",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "custom"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "<"
                                }),
                                jsx(_components.span, {
                                    className: "token maybe-class-name",
                                    children: "VNodeChild"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ">"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token method function property-access",
                                    children: "optional"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// renderProp"
                                }),
                                "\n    $item",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " t",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "custom"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "<"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "option",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token maybe-class-name",
                                    children: "Option"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token maybe-class-name",
                                    children: "VNode"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ">"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token method function property-access",
                                    children: "optional"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n\n    $",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "default"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " t",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "custom"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "<"
                                }),
                                jsx(_components.span, {
                                    className: "token maybe-class-name",
                                    children: "VNodeChild"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ">"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token method function property-access",
                                    children: "optional"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n\n    ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// 以此避免多插槽时 children slots object 的写法, 且无类型约束，"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token comment",
                                    children: "// {{ default: () => VNode, title: () => VNode, item: (option: Option) => VNode }}"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                " slots ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n      ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " options ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "["
                                }),
                                "\n        ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n          label",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"1\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n          value",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"1\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n        ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n        ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n          label",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"2\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n          value",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: ":"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"2\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n        ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n      ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "]"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n      ",
                                jsx(_components.span, {
                                    className: "token keyword control-flow",
                                    children: "return"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n        ",
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "dl"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n          "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "dt"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "default"
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                "dt"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n          "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "dd"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "slots",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "default"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "?."
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                "dd"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n          "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "dt"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "title"
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                "dt"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n          "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "dd"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "slots",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "title"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "?."
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                "dd"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n          "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "dt"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "item"
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                "dt"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n          "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                "dd"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "options",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token method function property-access",
                                    children: "map"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "option",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " slots",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "."
                                }),
                                jsx(_components.span, {
                                    className: "token property-access",
                                    children: "item"
                                }),
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "?."
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "option",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                "dd"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n        "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                "dl"
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                "\n      ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n    ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "export"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token keyword module",
                                    children: "default"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "component"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "{"
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token keyword",
                                    children: "const"
                                }),
                                " inputValue ",
                                jsx(_components.span, {
                                    className: "token operator",
                                    children: "="
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token function",
                                    children: "ref"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token string",
                                    children: "\"\""
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n\n  ",
                                jsx(_components.span, {
                                    className: "token keyword control-flow",
                                    children: "return"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token arrow operator",
                                    children: "=>"
                                }),
                                " ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "("
                                }),
                                "\n    ",
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "List"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "$title"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsxs(_components.span, {
                                                    className: "token tag",
                                                    children: [
                                                        jsxs(_components.span, {
                                                            className: "token tag",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "<"
                                                                }),
                                                                "div"
                                                            ]
                                                        }),
                                                        jsx(_components.span, {
                                                            className: "token punctuation",
                                                            children: ">"
                                                        })
                                                    ]
                                                }),
                                                jsx(_components.span, {
                                                    className: "token plain-text",
                                                    children: "Inputted: "
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "inputValue",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsxs(_components.span, {
                                                    className: "token tag",
                                                    children: [
                                                        jsxs(_components.span, {
                                                            className: "token tag",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "</"
                                                                }),
                                                                "div"
                                                            ]
                                                        }),
                                                        jsx(_components.span, {
                                                            className: "token punctuation",
                                                            children: ">"
                                                        })
                                                    ]
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "$item"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "o",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " ",
                                                jsxs(_components.span, {
                                                    className: "token tag",
                                                    children: [
                                                        jsxs(_components.span, {
                                                            className: "token tag",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "<"
                                                                }),
                                                                "div"
                                                            ]
                                                        }),
                                                        jsx(_components.span, {
                                                            className: "token punctuation",
                                                            children: ">"
                                                        })
                                                    ]
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "o",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "label"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsxs(_components.span, {
                                                    className: "token tag",
                                                    children: [
                                                        jsxs(_components.span, {
                                                            className: "token tag",
                                                            children: [
                                                                jsx(_components.span, {
                                                                    className: "token punctuation",
                                                                    children: "</"
                                                                }),
                                                                "div"
                                                            ]
                                                        }),
                                                        jsx(_components.span, {
                                                            className: "token punctuation",
                                                            children: ">"
                                                        })
                                                    ]
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n    ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n      "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "<"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "TextInput"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "type"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token string",
                                                    children: "\"text\""
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n        ",
                                        jsx(_components.span, {
                                            className: "token attr-name",
                                            children: "onValueChange"
                                        }),
                                        jsxs(_components.span, {
                                            className: "token script language-javascript",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token script-punctuation punctuation",
                                                    children: "="
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "("
                                                }),
                                                "value",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ")"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token arrow operator",
                                                    children: "=>"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "{"
                                                }),
                                                "\n          inputValue",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "."
                                                }),
                                                jsx(_components.span, {
                                                    className: "token property-access",
                                                    children: "value"
                                                }),
                                                " ",
                                                jsx(_components.span, {
                                                    className: "token operator",
                                                    children: "="
                                                }),
                                                " value",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: ";"
                                                }),
                                                "\n        ",
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n      ",
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "/>"
                                        })
                                    ]
                                }),
                                jsx(_components.span, {
                                    className: "token plain-text",
                                    children: "\n    "
                                }),
                                jsxs(_components.span, {
                                    className: "token tag",
                                    children: [
                                        jsxs(_components.span, {
                                            className: "token tag",
                                            children: [
                                                jsx(_components.span, {
                                                    className: "token punctuation",
                                                    children: "</"
                                                }),
                                                jsx(_components.span, {
                                                    className: "token class-name",
                                                    children: "List"
                                                })
                                            ]
                                        }),
                                        jsx(_components.span, {
                                            className: "token punctuation",
                                            children: ">"
                                        })
                                    ]
                                }),
                                "\n  ",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n",
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "}"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ")"
                                }),
                                jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ";"
                                }),
                                "\n"
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || ({});
    return MDXLayout ? jsx(MDXLayout, {
        ...props,
        children: jsx(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}
const index = defineComponent(()=>{
    return ()=>h(MDXContent, {
            components: {
                codeblock4b227777: cIndexMdCodeBlock4B227777Default,
                codeblock4a44dc15: cIndexMdCodeBlock4A44Dc15Default
            }
        });
});

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: 'Module' }));
