import{_ as t}from"./lib-webapp-vuekit.9af7a98e.chunk.js";import{c as s,y as _,A as y,j as n,B as m,g as c,C as v,R as h,D as x,E as w,F as E,G as k,H as z,I as R}from"./lib-nodepkg-vuekit.936e1239.chunk.js";import{B as e,C,G as S}from"./lib-nodepkg-vueuikit.9964ca2d.chunk.js";const I=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`,A=s(()=>{const r=y(_().options.routes,o=>o.path.split("/")[1]);return()=>n(e,{sx:{padding:4,textTransform:"capitalize"},children:m(r,(o,a)=>{var d;const[l,g]=v(o,i=>i.path===`/${a}`);return c("div",{children:[n(e,{sx:{"&[aria-current=page]":{}},component:l[0]?h:void 0,to:(d=l[0])==null?void 0:d.path,children:a}),n(e,{sx:{pl:4},children:m(g,i=>{var p;return n(e,{component:h,to:i.path,sx:{display:"block",rounded:"lg",textDecoration:"none","&[aria-current=page]":{layerStyle:"sys-secondary-container"}},children:n(e,{sx:{borderRadius:24,lineHeight:"sys-md"},children:(p=x(i.path.split("/")))==null?void 0:p.replaceAll("-"," ")})},i.name)})})]},a)})})}),F=s((f,r)=>{let{slots:o}=r;return()=>c(e,{sx:{display:"flex",height:"100vh",width:"100vw",layerStyle:"sys-surface"},children:[n(e,{sx:{width:"280px",height:"100vh",overflowY:"auto",borderRightRadius:"lg",layerStyle:"sys-surface-container-low",transitionDuration:"md4",transitionTimingFunction:"standard","&:hover":{boxShadow:"2"}},children:n(A,{})}),n(e,{sx:{flex:1,overflow:"auto"},children:o})]})}),O=s(()=>()=>c(E,{children:[n(C,{}),n(S,{styles:I}),n(F,{children:n(w,{})})]})),T=()=>t(()=>import("./nodepkg-vueuikit-example.040b922a.chunk.js"),["static/nodepkg-vueuikit-example.040b922a.chunk.js","static/lib-nodepkg-vuekit.936e1239.chunk.js","static/lib-nodepkg-vueuikit.9964ca2d.chunk.js","static/lib-webapp-vuekit.9af7a98e.chunk.js"]),D=()=>t(()=>import("./nodepkg-vueuikit-example-__fixtures__-popper.fee71a1e.chunk.js"),["static/nodepkg-vueuikit-example-__fixtures__-popper.fee71a1e.chunk.js","static/lib-nodepkg-vuekit.936e1239.chunk.js","static/lib-webapp-vuekit.9af7a98e.chunk.js","static/lib-nodepkg-vueuikit.9964ca2d.chunk.js"]),L=()=>t(()=>import("./nodepkg-vueuikit-example.e646bd6b.chunk.js"),["static/nodepkg-vueuikit-example.e646bd6b.chunk.js","static/lib-nodepkg-vuekit.936e1239.chunk.js","static/lib-nodepkg-vueuikit.9964ca2d.chunk.js","static/lib-webapp-vuekit.9af7a98e.chunk.js"]),P=()=>t(()=>import("./nodepkg-vueuikit-example.7eca72f3.chunk.js"),["static/nodepkg-vueuikit-example.7eca72f3.chunk.js","static/lib-nodepkg-vuekit.936e1239.chunk.js","static/lib-nodepkg-vueuikit.9964ca2d.chunk.js","static/lib-webapp-vuekit.9af7a98e.chunk.js"]),V=()=>t(()=>import("./nodepkg-vueuikit-example.bfcd61dd.chunk.js"),["static/nodepkg-vueuikit-example.bfcd61dd.chunk.js","static/lib-nodepkg-vuekit.936e1239.chunk.js","static/lib-nodepkg-vueuikit.9964ca2d.chunk.js","static/lib-webapp-vuekit.9af7a98e.chunk.js"]),j=()=>t(()=>import("./nodepkg-vuekit-example-__fixtures__-usage.91876dfc.chunk.js"),["static/nodepkg-vuekit-example-__fixtures__-usage.91876dfc.chunk.js","static/lib-nodepkg-vuekit.936e1239.chunk.js","static/lib-webapp-vuekit.9af7a98e.chunk.js","static/lib-nodepkg-vueuikit.9964ca2d.chunk.js"]),B=()=>t(()=>import("./nodepkg-vuekit-example-__fixtures__-usage.7943500d.chunk.js"),["static/nodepkg-vuekit-example-__fixtures__-usage.7943500d.chunk.js","static/lib-nodepkg-vuekit.936e1239.chunk.js","static/lib-webapp-vuekit.9af7a98e.chunk.js","static/lib-nodepkg-vueuikit.9964ca2d.chunk.js"]),b=[{name:"vueuikit-typography",path:"/vueuikit/typography",component:T,props:!0},{name:"vueuikit-popper",path:"/vueuikit/popper",component:D,props:!0},{name:"vueuikit",path:"/vueuikit",component:L,props:!0},{name:"vueuikit-elevation",path:"/vueuikit/elevation",component:P,props:!0},{name:"vueuikit-color-scheme",path:"/vueuikit/color-scheme",component:V,props:!0},{name:"vuekit-rx-in-vue",path:"/vuekit/rx-in-vue",component:j,props:!0},{name:"vuekit",path:"/vuekit",component:B,props:!0}];console.log(b);var u;const G=new URL(((u=document.querySelector("base"))==null?void 0:u.href)??"/"),H=k({history:z(G.pathname),routes:b});R(O).use(H).mount("#root");
