import{_ as e}from"./lib-webapp-vuekit.182d8d2e.chunk.js";import{p as c,I as x,J as w,j as n,K as h,r as E,t as a,L as k,R as u,l as C,M as z,F as R,N as I,O as S,P as A}from"./lib-nodepkg-vuekit.0d376dfb.chunk.js";import{B as o,C as O,G as T}from"./lib-nodepkg-vueuikit.015d3db7.chunk.js";import{I as _,m as L,a as P,b as f,T as l,c as D}from"./lib-nodepkg-vuematerial.d6c20d07.chunk.js";const F=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`,V=c(()=>{const s=w(x().options.routes,i=>i.path.split("/")[1]);return()=>n(o,{sx:{py:16,px:0,textTransform:"capitalize"},children:h(s,(i,t)=>{var d;const[p,y]=k(i,r=>r.path===`/${t}`);return a(o,{sx:{px:8},children:[p[0]?n(l,{component:u,sx:{width:"100%",justifyContent:"flex-start"},activeClass:"active",to:(d=p[0])==null?void 0:d.path,children:t}):n(l,{sx:{width:"100%",justifyContent:"flex-start"},children:t}),n(o,{sx:{pl:16},children:h(y,r=>{var m;return n(l,{component:u,activeClass:"active",to:r.path,sx:{width:"100%",justifyContent:"flex-start"},children:(m=C(r.path.split("/")))==null?void 0:m.replaceAll("-"," ")},r.name)})})]},t)})})}),j=c((v,s)=>{let{slots:i}=s;const t=E("light");return()=>a(o,{"data-theme":t.value,sx:{display:"flex",height:"100vh",width:"100vw",containerStyle:"sys.surface"},children:[a(o,{sx:{display:"flex",flexDirection:"column",width:"280px",height:"100vh",borderRightRadius:"lg",overflowY:"auto",containerStyle:"sys.surface-container-low",elevation:"0",_hover:{elevation:"2"}},children:[n(o,{sx:{flex:1},children:n(V,{})}),a(o,{sx:{p:16,display:"flex",justifyContent:"flex-end"},children:[n(f,{component:"a",target:"_blank",href:"//github.com/innoai-tech/vuekit",children:n(_,{path:D})}),n(f,{onClick:()=>{t.value=t.value=="light"?"dark":"light"},children:n(_,{path:t.value=="light"?L:P})})]})]}),n(o,{sx:{flex:1,overflow:"auto"},children:i})]})}),B=c(()=>()=>a(R,{children:[n(O,{}),n(T,{styles:F}),n(j,{children:n(z,{})})]})),G=()=>e(()=>import("./nodepkg-vuematerial-example.14b5d42d.chunk.js"),["static/nodepkg-vuematerial-example.14b5d42d.chunk.js","static/lib-nodepkg-vuekit.0d376dfb.chunk.js"]),M=()=>e(()=>import("./nodepkg-vuematerial-example-__fixtures__-icon.44d7c745.chunk.js"),["static/nodepkg-vuematerial-example-__fixtures__-icon.44d7c745.chunk.js","static/lib-nodepkg-vuekit.0d376dfb.chunk.js","static/lib-webapp-vuekit.182d8d2e.chunk.js","static/lib-nodepkg-vueuikit.015d3db7.chunk.js","static/lib-nodepkg-vuematerial.d6c20d07.chunk.js"]),N=()=>e(()=>import("./nodepkg-vuematerial-example.4fb8d1bd.chunk.js"),["static/nodepkg-vuematerial-example.4fb8d1bd.chunk.js","static/lib-nodepkg-vuekit.0d376dfb.chunk.js","static/lib-nodepkg-vuematerial.d6c20d07.chunk.js","static/lib-nodepkg-vueuikit.015d3db7.chunk.js","static/lib-webapp-vuekit.182d8d2e.chunk.js"]),W=()=>e(()=>import("./nodepkg-vueuikit-example.91ac1480.chunk.js"),["static/nodepkg-vueuikit-example.91ac1480.chunk.js","static/lib-nodepkg-vuekit.0d376dfb.chunk.js","static/lib-nodepkg-vueuikit.015d3db7.chunk.js","static/lib-webapp-vuekit.182d8d2e.chunk.js"]),q=()=>e(()=>import("./nodepkg-vueuikit-example-__fixtures__-popper.3cda8f4c.chunk.js"),["static/nodepkg-vueuikit-example-__fixtures__-popper.3cda8f4c.chunk.js","static/lib-nodepkg-vuekit.0d376dfb.chunk.js","static/lib-webapp-vuekit.182d8d2e.chunk.js","static/lib-nodepkg-vueuikit.015d3db7.chunk.js"]),H=()=>e(()=>import("./nodepkg-vueuikit-example-__fixtures__.6086d6a1.chunk.js"),["static/nodepkg-vueuikit-example-__fixtures__.6086d6a1.chunk.js","static/lib-nodepkg-vuekit.0d376dfb.chunk.js","static/lib-webapp-vuekit.182d8d2e.chunk.js","static/lib-nodepkg-vueuikit.015d3db7.chunk.js"]),J=()=>e(()=>import("./nodepkg-vueuikit-example.e1414d5d.chunk.js"),["static/nodepkg-vueuikit-example.e1414d5d.chunk.js","static/lib-nodepkg-vuekit.0d376dfb.chunk.js","static/lib-nodepkg-vueuikit.015d3db7.chunk.js","static/lib-webapp-vuekit.182d8d2e.chunk.js"]),K=()=>e(()=>import("./nodepkg-vueuikit-example.0092f96f.chunk.js"),["static/nodepkg-vueuikit-example.0092f96f.chunk.js","static/lib-nodepkg-vuekit.0d376dfb.chunk.js","static/lib-nodepkg-vueuikit.015d3db7.chunk.js","static/lib-webapp-vuekit.182d8d2e.chunk.js"]),U=()=>e(()=>import("./nodepkg-vuekit-example-__fixtures__-usage.ba1980ac.chunk.js"),["static/nodepkg-vuekit-example-__fixtures__-usage.ba1980ac.chunk.js","static/lib-nodepkg-vuekit.0d376dfb.chunk.js","static/lib-webapp-vuekit.182d8d2e.chunk.js","static/lib-nodepkg-vueuikit.015d3db7.chunk.js"]),Y=()=>e(()=>import("./nodepkg-vuekit-example-__fixtures__-usage.c54724f7.chunk.js"),["static/nodepkg-vuekit-example-__fixtures__-usage.c54724f7.chunk.js","static/lib-nodepkg-vuekit.0d376dfb.chunk.js","static/lib-webapp-vuekit.182d8d2e.chunk.js","static/lib-nodepkg-vueuikit.015d3db7.chunk.js"]),g=[{name:"vuematerial",path:"/vuematerial",component:G,props:!0},{name:"vuematerial-icons",path:"/vuematerial/icons",component:M,props:!0},{name:"vuematerial-buttons",path:"/vuematerial/buttons",component:N,props:!0},{name:"vueuikit-typography",path:"/vueuikit/typography",component:W,props:!0},{name:"vueuikit-popper",path:"/vueuikit/popper",component:q,props:!0},{name:"vueuikit",path:"/vueuikit",component:H,props:!0},{name:"vueuikit-elevation",path:"/vueuikit/elevation",component:J,props:!0},{name:"vueuikit-color-scheme",path:"/vueuikit/color-scheme",component:K,props:!0},{name:"vuekit-rx-in-vue",path:"/vuekit/rx-in-vue",component:U,props:!0},{name:"vuekit",path:"/vuekit",component:Y,props:!0}];console.log(g);var b;const $=new URL(((b=document.querySelector("base"))==null?void 0:b.href)??"/"),Q=I({history:S($.pathname),routes:g});A(B).use(Q).mount("#root");
