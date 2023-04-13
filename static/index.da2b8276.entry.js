import{c as f,B as I,C as S,j as t,D as y,r as z,b as m,E as A,R as v,l as O,G as L,F as P,H as T,I as D,J as F}from"./lib-nodepkg-vuekit.a57e5331.chunk.js";import{s as V,v as b,a as x,B as c,C as j,G as B}from"./lib-nodepkg-vueuikit.4ff927b9.chunk.js";import{I as w,a as E,m as N,b as G,T as $,c as W,d as g}from"./lib-nodepkg-vuematerial.9f41b4ff.chunk.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const q=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`,M=V("div",{})({padding:24,"& [data-example]":{display:"flex",flexDirection:"row-reverse",gap:8,"& > *":{flex:1},"& [data-example-container]":{display:"flex",alignItems:"center",justifyContent:"center"}},"& :not(pre) > code":{font:"code",rounded:"xs",px:4,bgColor:"sys.surface-container-low"},"& pre":{overflow:"auto",textStyle:"sys.body-small",containerStyle:"sys.surface-container-low",m:0,rounded:"sm",p:16,font:"code","& .comment":{color:b("sys.on-surface",x(.38))},"& .string":{color:"sys.green"},"& .tag .attr-name":{color:"sys.green"},"& .function":{color:"sys.blue"},"& .punctuation":{color:b("sys.on-surface",x(.38))},"& .keyword":{color:"sys.error"}},"& p,li":{my:"1em"},overflowY:"auto"}),U=f(()=>{const l=S(I().options.routes.filter(i=>i.path!="/"),i=>i.path.split("/")[1]);return()=>t(c,{sx:{py:16,px:0,textTransform:"capitalize"},children:y(l,(i,r)=>{var a;const[e,n]=A(i,d=>d.path===`/${r}`);return m(c,{sx:{px:8},children:[e[0]?t(g,{component:v,sx:{width:"100%",justifyContent:"flex-start"},activeClass:"active",to:(a=e[0])==null?void 0:a.path,children:r}):t(g,{sx:{width:"100%",justifyContent:"flex-start"},children:r}),t(c,{sx:{pl:16},children:y(n,d=>{var _;return t(g,{component:v,activeClass:"active",to:d.path,sx:{width:"100%",justifyContent:"flex-start"},children:(_=O(d.path.split("/")))==null?void 0:_.replaceAll("-"," ")},d.name)})})]},r)})})}),H=f((o,l)=>{let{slots:i}=l;const r=z("light");return()=>m(c,{"data-theme":r.value,sx:{display:"flex",height:"100vh",width:"100vw",containerStyle:"sys.surface"},children:[m(c,{sx:{display:"flex",flexDirection:"column",width:"280px",height:"100vh",borderRightRadius:"lg",overflowY:"auto",containerStyle:"sys.surface-container-low",elevation:"0",_hover:{elevation:"2"}},children:[t(c,{sx:{flex:1},children:t(U,{})}),m(c,{sx:{p:16,display:"flex",justifyContent:"flex-end"},children:[t(w,{component:"a",target:"_blank",href:"//github.com/innoai-tech/vuekit",children:t(E,{path:W})}),t($,{title:`切换到${r.value=="light"?"深色模式":"浅色模式"}`,children:t(w,{onClick:()=>{r.value=r.value=="light"?"dark":"light"},children:t(E,{path:r.value=="light"?N:G})})})]})]}),t(c,{sx:{flex:1,overflow:"auto"},children:t(M,{children:i})})]})}),Y=f(()=>()=>m(P,{children:[t(j,{}),t(B,{styles:q}),t(H,{children:t(L,{})})]})),J="modulepreload",K=function(o){return"/vuekit/"+o},C={},s=function(l,i,r){if(!i||i.length===0)return l();const e=document.getElementsByTagName("link");return Promise.all(i.map(n=>{if(n=K(n),n in C)return;C[n]=!0;const a=n.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(!!r)for(let u=e.length-1;u>=0;u--){const h=e[u];if(h.href===n&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${d}`))return;const p=document.createElement("link");if(p.rel=a?"stylesheet":J,a||(p.as="script",p.crossOrigin=""),p.href=n,document.head.appendChild(p),a)return new Promise((u,h)=>{p.addEventListener("load",u),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>l())},Q=f(()=>()=>t(c,{sx:{display:"flex",alignItems:"center",justifyContent:"center",textStyle:"sys.display-large"},children:"Vuekit"})),X=(()=>()=>s(()=>import("./nodepkg-vuematerial-example.5000904b.chunk.js"),["static/nodepkg-vuematerial-example.5000904b.chunk.js","static/lib-nodepkg-vuekit.a57e5331.chunk.js","static/lib-nodepkg-vueuikit.4ff927b9.chunk.js","static/lib-nodepkg-vuematerial.9f41b4ff.chunk.js"]))(),Z=(()=>()=>s(()=>import("./nodepkg-vuematerial-example.d790888c.chunk.js"),["static/nodepkg-vuematerial-example.d790888c.chunk.js","static/lib-nodepkg-vuekit.a57e5331.chunk.js"]))(),nn=(()=>()=>s(()=>import("./nodepkg-vuematerial.29812924.chunk.js"),["static/nodepkg-vuematerial.29812924.chunk.js","static/lib-nodepkg-vuekit.a57e5331.chunk.js","static/nodepkg-vuekit.34bafb50.chunk.js","static/lib-nodepkg-vuematerial.9f41b4ff.chunk.js","static/lib-nodepkg-vueuikit.4ff927b9.chunk.js","static/nodepkg-vueuikit.2b0fc80c.chunk.js"]))(),en=(()=>()=>s(()=>import("./nodepkg-vuematerial-example.ee013006.chunk.js"),["static/nodepkg-vuematerial-example.ee013006.chunk.js","static/lib-nodepkg-vuekit.a57e5331.chunk.js","static/lib-nodepkg-vuematerial.9f41b4ff.chunk.js","static/lib-nodepkg-vueuikit.4ff927b9.chunk.js"]))(),tn=(()=>()=>s(()=>import("./nodepkg-vueuikit-example.0be51ea9.chunk.js"),["static/nodepkg-vueuikit-example.0be51ea9.chunk.js","static/lib-nodepkg-vuekit.a57e5331.chunk.js","static/lib-nodepkg-vueuikit.4ff927b9.chunk.js"]))(),on=(()=>()=>s(()=>import("./virtual:cache:.2a8c3307.chunk.js"),["static/virtual:cache:.2a8c3307.chunk.js","static/lib-nodepkg-vuekit.a57e5331.chunk.js","static/nodepkg-vuekit.34bafb50.chunk.js","static/nodepkg-vueuikit.2b0fc80c.chunk.js","static/lib-nodepkg-vueuikit.4ff927b9.chunk.js"]))(),rn=(()=>()=>s(()=>import("./virtual:cache:.0be9809d.chunk.js"),["static/virtual:cache:.0be9809d.chunk.js","static/lib-nodepkg-vuekit.a57e5331.chunk.js","static/nodepkg-vueuikit.2b0fc80c.chunk.js","static/nodepkg-vuekit.34bafb50.chunk.js","static/lib-nodepkg-vueuikit.4ff927b9.chunk.js"]))(),an=(()=>()=>s(()=>import("./nodepkg-vueuikit-example.f414eb92.chunk.js"),["static/nodepkg-vueuikit-example.f414eb92.chunk.js","static/lib-nodepkg-vuekit.a57e5331.chunk.js","static/lib-nodepkg-vueuikit.4ff927b9.chunk.js"]))(),sn=(()=>()=>s(()=>import("./nodepkg-vueuikit-example.a893bbbf.chunk.js"),["static/nodepkg-vueuikit-example.a893bbbf.chunk.js","static/lib-nodepkg-vuekit.a57e5331.chunk.js","static/lib-nodepkg-vueuikit.4ff927b9.chunk.js"]))(),ln=(()=>()=>s(()=>import("./virtual:cache:.bf2885ba.chunk.js"),["static/virtual:cache:.bf2885ba.chunk.js","static/lib-nodepkg-vuekit.a57e5331.chunk.js","static/nodepkg-vuekit.34bafb50.chunk.js"]))(),cn=(()=>()=>s(()=>import("./virtual:cache:.a5a8534b.chunk.js"),["static/virtual:cache:.a5a8534b.chunk.js","static/lib-nodepkg-vuekit.a57e5331.chunk.js","static/nodepkg-vuekit.34bafb50.chunk.js"]))(),R=[{name:"vuematerial-overlays",path:"/vuematerial/overlays",component:X,props:!0},{name:"vuematerial",path:"/vuematerial",component:Z,props:!0},{name:"vuematerial-icons",path:"/vuematerial/icons",component:nn,props:!0},{name:"vuematerial-buttons",path:"/vuematerial/buttons",component:en,props:!0},{name:"vueuikit-typography",path:"/vueuikit/typography",component:tn,props:!0},{name:"vueuikit-popper",path:"/vueuikit/popper",component:on,props:!0},{name:"vueuikit",path:"/vueuikit",component:rn,props:!0},{name:"vueuikit-elevation",path:"/vueuikit/elevation",component:an,props:!0},{name:"vueuikit-color-scheme",path:"/vueuikit/color-scheme",component:sn,props:!0},{name:"vuekit-rx-in-vue",path:"/vuekit/rx-in-vue",component:ln,props:!0},{name:"vuekit",path:"/vuekit",component:cn,props:!0},{name:"index",path:"/",component:Q,props:!0}];console.log(R);var k;const dn=new URL(((k=document.querySelector("base"))==null?void 0:k.href)??"/"),pn=T({history:D(dn.pathname),routes:R});F(Y).use(pn).mount("#root");export{M as C};
