import{c as f,z as C,H as R,I,j as t,J as b,b as u,r as S,K as z,R as v,l as O,F as A,L,M as P,N as T,O as D}from"./lib-nodepkg-vuekit.b05fd96f.chunk.js";import{B as l,C as j,G as V}from"./lib-nodepkg-vueuikit.ab884dc3.chunk.js";import{I as y,a as x,m as F,b as N,T as B,c as g,d as $,e as G}from"./lib-nodepkg-vuematerial.a1d599a3.chunk.js";import{C as M}from"./lib-webapp-vuekit.d9ba6e91.chunk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}})();const W=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`,q=f(()=>{const s=I(R().options.routes.filter(o=>o.path!="/"),o=>o.path.split("/")[1]);return()=>t(l,{sx:{py:16,px:0,textTransform:"capitalize"},children:b(s,(o,i)=>{var r;const[n,e]=z(o,c=>c.path===`/${i}`);return u(l,{sx:{px:8},children:[n[0]?t(g,{component:v,sx:{width:"100%",justifyContent:"flex-start"},activeClass:"active",to:(r=n[0])==null?void 0:r.path,children:i}):t(g,{sx:{width:"100%",justifyContent:"flex-start"},children:i}),t(l,{sx:{pl:16},children:b(e,c=>{var _;return t(g,{component:v,activeClass:"active",to:c.path,sx:{width:"100%",justifyContent:"flex-start"},children:(_=O(c.path.split("/")))==null?void 0:_.replaceAll("-"," ")},c.name)})})]},i)})})}),H=f({$default:C.custom().optional()},(d,s)=>{let{slots:o}=s;const i=S("light");return()=>{var n;return u(l,{"data-theme":i.value,sx:{display:"flex",height:"100vh",width:"100vw",containerStyle:"sys.surface"},children:[u(l,{sx:{display:"flex",flexDirection:"column",width:"280px",height:"100vh",borderRightRadius:"lg",overflowY:"auto",containerStyle:"sys.surface-container-low",elevation:"0",_hover:{elevation:"2"}},children:[t(l,{sx:{flex:1},children:t(K,{})}),u(l,{sx:{p:16,display:"flex",justifyContent:"flex-end"},children:[t(y,{component:"a",target:"_blank",href:"//github.com/innoai-tech/vuekit",children:t(x,{path:$})}),t(B,{title:`切换到${i.value=="light"?"深色模式":"浅色模式"}`,children:t(l,{component:y,"data-test":!0,sx:{color:"sys.on-surface-variant"},onClick:()=>{i.value=i.value=="light"?"dark":"light"},children:t(x,{path:i.value=="light"?F:N})})})]})]}),t(l,{sx:{flex:1,overflow:"auto"},children:t(M,{children:(n=o.default)==null?void 0:n.call(o)})})]})}}),U=f(()=>()=>u(A,{children:[t(j,{}),t(V,{styles:W}),t(J,{children:t(L,{})})]})),K=Object.assign(q,{displayName:"Nav"}),J=Object.assign(H,{displayName:"Scaffold"}),Y=Object.assign(U,{displayName:"App"}),Q="modulepreload",X=function(d){return"/vuekit/"+d},E={},a=function(s,o,i){if(!o||o.length===0)return s();const n=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=X(e),e in E)return;E[e]=!0;const r=e.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!i)for(let m=n.length-1;m>=0;m--){const h=n[m];if(h.href===e&&(!r||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":Q,r||(p.as="script",p.crossOrigin=""),p.href=e,document.head.appendChild(p),r)return new Promise((m,h)=>{p.addEventListener("load",m),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())},Z={meta:{name:"Home",icon:G}},nn=f(()=>()=>t(l,{sx:{display:"flex",alignItems:"center",justifyContent:"center",textStyle:"sys.display-large"},children:"Vuekit"})),en=Object.assign(nn,{displayName:"IndexDefault"}),tn=()=>a(()=>import("./nodepkg-vuematerial-example.a03084d1.chunk.js"),["static/nodepkg-vuematerial-example.a03084d1.chunk.js","static/lib-nodepkg-vuekit.b05fd96f.chunk.js","static/lib-webapp-vuekit.d9ba6e91.chunk.js","static/lib-nodepkg-vueuikit.ab884dc3.chunk.js","static/lib-nodepkg-vuematerial.a1d599a3.chunk.js"]),on=()=>a(()=>import("./nodepkg-vuematerial-example.9c0bbbc3.chunk.js"),["static/nodepkg-vuematerial-example.9c0bbbc3.chunk.js","static/lib-nodepkg-vuekit.b05fd96f.chunk.js","static/lib-nodepkg-vueuikit.ab884dc3.chunk.js","static/lib-nodepkg-vuematerial.a1d599a3.chunk.js","static/lib-webapp-vuekit.d9ba6e91.chunk.js"]),rn=()=>a(()=>import("./nodepkg-vuematerial-example.9bb8a2db.chunk.js"),["static/nodepkg-vuematerial-example.9bb8a2db.chunk.js","static/lib-nodepkg-vuekit.b05fd96f.chunk.js"]),an=()=>a(()=>import("./nodepkg-vuematerial-example.aa780e02.chunk.js"),["static/nodepkg-vuematerial-example.aa780e02.chunk.js","static/lib-nodepkg-vuekit.b05fd96f.chunk.js","static/lib-nodepkg-vuematerial.a1d599a3.chunk.js","static/lib-nodepkg-vueuikit.ab884dc3.chunk.js"]),sn=()=>a(()=>import("./nodepkg-vuematerial-example.600e652b.chunk.js"),["static/nodepkg-vuematerial-example.600e652b.chunk.js","static/lib-nodepkg-vuekit.b05fd96f.chunk.js","static/lib-nodepkg-vuematerial.a1d599a3.chunk.js","static/lib-nodepkg-vueuikit.ab884dc3.chunk.js","static/lib-webapp-vuekit.d9ba6e91.chunk.js"]),ln=()=>a(()=>import("./nodepkg-vueuikit-example.1d810002.chunk.js"),["static/nodepkg-vueuikit-example.1d810002.chunk.js","static/lib-nodepkg-vuekit.b05fd96f.chunk.js","static/lib-nodepkg-vueuikit.ab884dc3.chunk.js"]),cn=()=>a(()=>import("./nodepkg-vueuikit-example.90371c38.chunk.js"),["static/nodepkg-vueuikit-example.90371c38.chunk.js","static/lib-nodepkg-vuekit.b05fd96f.chunk.js","static/lib-nodepkg-vueuikit.ab884dc3.chunk.js"]),pn=()=>a(()=>import("./nodepkg-vueuikit-example.8da17683.chunk.js"),["static/nodepkg-vueuikit-example.8da17683.chunk.js","static/lib-nodepkg-vuekit.b05fd96f.chunk.js","static/lib-nodepkg-vueuikit.ab884dc3.chunk.js"]),dn=()=>a(()=>import("./nodepkg-vueuikit-example.977df5c6.chunk.js"),["static/nodepkg-vueuikit-example.977df5c6.chunk.js","static/lib-nodepkg-vuekit.b05fd96f.chunk.js","static/lib-nodepkg-vueuikit.ab884dc3.chunk.js"]),mn=()=>a(()=>import("./nodepkg-vueuikit-example.df277804.chunk.js"),["static/nodepkg-vueuikit-example.df277804.chunk.js","static/lib-nodepkg-vuekit.b05fd96f.chunk.js","static/lib-nodepkg-vueuikit.ab884dc3.chunk.js"]),un=()=>a(()=>import("./nodepkg-vuekit-example.4914762a.chunk.js"),["static/nodepkg-vuekit-example.4914762a.chunk.js","static/lib-nodepkg-vuekit.b05fd96f.chunk.js"]),hn=()=>a(()=>import("./nodepkg-vuekit-example.8bff4f07.chunk.js"),["static/nodepkg-vuekit-example.8bff4f07.chunk.js","static/lib-nodepkg-vuekit.b05fd96f.chunk.js"]),k=[{name:"vuematerial-textfields",path:"/vuematerial/textfields",component:tn,props:!0},{name:"vuematerial-overlays",path:"/vuematerial/overlays",component:on,props:!0},{name:"vuematerial",path:"/vuematerial",component:rn,props:!0},{name:"vuematerial-icons",path:"/vuematerial/icons",component:an,props:!0},{name:"vuematerial-buttons",path:"/vuematerial/buttons",component:sn,props:!0},{name:"vueuikit-typography",path:"/vueuikit/typography",component:ln,props:!0},{name:"vueuikit-popper",path:"/vueuikit/popper",component:cn,props:!0},{name:"vueuikit",path:"/vueuikit",component:pn,props:!0},{name:"vueuikit-elevation",path:"/vueuikit/elevation",component:dn,props:!0},{name:"vueuikit-color-scheme",path:"/vueuikit/color-scheme",component:mn,props:!0},{name:"vuekit-rx-in-vue",path:"/vuekit/rx-in-vue",component:un,props:!0},{name:"vuekit",path:"/vuekit",component:hn,props:!0},{name:"index",path:"/",component:Object.assign(en,Z),props:!0}];console.log(k);var w;const fn=new URL(((w=document.querySelector("base"))==null?void 0:w.href)??"/"),_n=P({history:T(fn.pathname),routes:k});D(Y).use(_n).mount("#root");
