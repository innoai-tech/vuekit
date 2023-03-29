import{_ as r}from"./vendor-prismjs.3b86b41e.chunk.js";import{F as y,j as v}from"./vendor-vue.f7127a54.chunk.js";import{b as l,u as _,j as n,d as c,R as m,g as x,h as w,i as E}from"./lib-vuekit-src.66187d46.chunk.js";import{B as t,C as k,G as z}from"./lib-vueuikit-src.10bf015b.chunk.js";import{g as R,d as u,p as C,l as S}from"./vendor-innoai-tech-lodash.11204ff6.chunk.js";const I=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`,A=l(()=>{const a=R(_().options.routes,o=>o.path.split("/")[1]);return()=>n(t,{sx:{padding:4},children:u(a,(o,s)=>{var p;const[d,g]=C(o,i=>i.path===`/${s}`);return c("div",{children:[n(t,{sx:{"&[aria-current=page]":{}},component:d[0]?m:void 0,to:(p=d[0])==null?void 0:p.path,children:s}),n(t,{sx:{pl:4},children:u(g,i=>{var h;return n(t,{component:m,to:i.path,sx:{display:"block",borderRadius:24,textDecoration:"none","&[aria-current=page]":{layerStyle:"sys-secondary-container"}},children:n(t,{sx:{borderRadius:24,lineHeight:"sys-md"},children:(h=S(i.path.split("/")))==null?void 0:h.replaceAll("-"," ")})},i.name)})})]},s)})})}),F=l((e,a)=>{let{slots:o}=a;return()=>c(t,{sx:{display:"flex",height:"100vh",width:"100vw",layerStyle:"sys-surface"},children:[n(t,{sx:{layerStyle:"sys-surface-container-low",width:"280px",height:"100vh",overflowY:"auto",borderRightRadius:"lg","&:hover":{boxShadow:"2"}},children:n(A,{})}),n(t,{sx:{flex:1,p:4,overflow:"auto"},children:o})]})}),O=l(()=>()=>c(y,{children:[n(k,{}),n(z,{styles:I}),n(F,{children:n(x,{})})]})),L=()=>r(()=>import("./lib-vueuikit-example.3d14f41d.chunk.js").then(e=>e.t),["static/lib-vueuikit-example.3d14f41d.chunk.js","static/lib-vuekit-src.66187d46.chunk.js","static/lib-vueuikit-src.10bf015b.chunk.js","static/vendor-innoai-tech-lodash.11204ff6.chunk.js","static/vendor-vue.f7127a54.chunk.js","static/vendor-prismjs.3b86b41e.chunk.js","static/lib-vuemarkdown-src.13586890.chunk.js"]),P=()=>r(()=>import("./lib-vueuikit-example.3d14f41d.chunk.js").then(e=>e.p),["static/lib-vueuikit-example.3d14f41d.chunk.js","static/lib-vuekit-src.66187d46.chunk.js","static/lib-vueuikit-src.10bf015b.chunk.js","static/vendor-innoai-tech-lodash.11204ff6.chunk.js","static/vendor-vue.f7127a54.chunk.js","static/vendor-prismjs.3b86b41e.chunk.js","static/lib-vuemarkdown-src.13586890.chunk.js"]),T=()=>r(()=>import("./lib-vueuikit-example.3d14f41d.chunk.js").then(e=>e.i),["static/lib-vueuikit-example.3d14f41d.chunk.js","static/lib-vuekit-src.66187d46.chunk.js","static/lib-vueuikit-src.10bf015b.chunk.js","static/vendor-innoai-tech-lodash.11204ff6.chunk.js","static/vendor-vue.f7127a54.chunk.js","static/vendor-prismjs.3b86b41e.chunk.js","static/lib-vuemarkdown-src.13586890.chunk.js"]),D=()=>r(()=>import("./lib-vueuikit-example.3d14f41d.chunk.js").then(e=>e.e),["static/lib-vueuikit-example.3d14f41d.chunk.js","static/lib-vuekit-src.66187d46.chunk.js","static/lib-vueuikit-src.10bf015b.chunk.js","static/vendor-innoai-tech-lodash.11204ff6.chunk.js","static/vendor-vue.f7127a54.chunk.js","static/vendor-prismjs.3b86b41e.chunk.js","static/lib-vuemarkdown-src.13586890.chunk.js"]),j=()=>r(()=>import("./lib-vueuikit-example.3d14f41d.chunk.js").then(e=>e.c),["static/lib-vueuikit-example.3d14f41d.chunk.js","static/lib-vuekit-src.66187d46.chunk.js","static/lib-vueuikit-src.10bf015b.chunk.js","static/vendor-innoai-tech-lodash.11204ff6.chunk.js","static/vendor-vue.f7127a54.chunk.js","static/vendor-prismjs.3b86b41e.chunk.js","static/lib-vuemarkdown-src.13586890.chunk.js"]),f=[{name:"vueuikit-typography",path:"/vueuikit/typography",component:L,props:!0},{name:"vueuikit-popper",path:"/vueuikit/popper",component:P,props:!0},{name:"vueuikit",path:"/vueuikit",component:T,props:!0},{name:"vueuikit-elevation",path:"/vueuikit/elevation",component:D,props:!0},{name:"vueuikit-color-scheme",path:"/vueuikit/color-scheme",component:j,props:!0}];console.log(f);var b;const V=new URL(((b=document.querySelector("base"))==null?void 0:b.href)??"/"),B=w({history:E(V.pathname),routes:f});v(O).use(B).mount("#root");
