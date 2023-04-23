import{c as f,z as S,H as z,I as O,j as t,J as y,b as u,r as A,K as L,R as v,l as P,F as T,L as j,M as D,N,O as V}from"./lib-nodepkg-vuekit.3b033eed.chunk.js";import{s as I,v as b,a as x,B as l,C as F,G as B}from"./lib-nodepkg-vueuikit.59ac9ce5.chunk.js";import{I as w,a as E,m as $,b as G,T as U,c as g,d as M,e as W}from"./lib-nodepkg-vuematerial.ad96d741.chunk.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}})();const q=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`,H=I("div")({bgColor:"sys.surface-container"}),K=I("div")({padding:24,"& [data-example]":{display:"flex",flexDirection:"row-reverse",gap:8,"& > *":{flex:1},"& [data-example-container]":{display:"flex",alignItems:"center",justifyContent:"center"}},"& :not(pre) > code":{font:"code",rounded:"xs",px:4,bgColor:"sys.surface-container-low"},"& pre":{overflow:"auto",textStyle:"sys.body-small",containerStyle:"sys.surface-container-low",m:0,rounded:"sm",p:16,font:"code","& .comment":{color:b("sys.on-surface",x(.38))},"& .string":{color:"sys.green"},"& .tag .attr-name":{color:"sys.green"},"& .function":{color:"sys.blue"},"& .punctuation":{color:b("sys.on-surface",x(.38))},"& .keyword":{color:"sys.error"}},"& p,li":{my:"1em"},overflowY:"auto"});Object.assign(H,{displayName:"Unused"});const Y=Object.assign(K,{displayName:"Container"}),J=f(()=>{const a=O(z().options.routes.filter(o=>o.path!="/"),o=>o.path.split("/")[1]);return()=>t(l,{sx:{py:16,px:0,textTransform:"capitalize"},children:y(a,(o,r)=>{var i;const[n,e]=L(o,c=>c.path===`/${r}`);return u(l,{sx:{px:8},children:[n[0]?t(g,{component:v,sx:{width:"100%",justifyContent:"flex-start"},activeClass:"active",to:(i=n[0])==null?void 0:i.path,children:r}):t(g,{sx:{width:"100%",justifyContent:"flex-start"},children:r}),t(l,{sx:{pl:16},children:y(e,c=>{var _;return t(g,{component:v,activeClass:"active",to:c.path,sx:{width:"100%",justifyContent:"flex-start"},children:(_=P(c.path.split("/")))==null?void 0:_.replaceAll("-"," ")},c.name)})})]},r)})})}),Q=f({$default:S.custom().optional()},(d,a)=>{let{slots:o}=a;const r=A("light");return()=>{var n;return u(l,{"data-theme":r.value,sx:{display:"flex",height:"100vh",width:"100vw",containerStyle:"sys.surface"},children:[u(l,{sx:{display:"flex",flexDirection:"column",width:"280px",height:"100vh",borderRightRadius:"lg",overflowY:"auto",containerStyle:"sys.surface-container-low",elevation:"0",_hover:{elevation:"2"}},children:[t(l,{sx:{flex:1},children:t(Z,{})}),u(l,{sx:{p:16,display:"flex",justifyContent:"flex-end"},children:[t(w,{component:"a",target:"_blank",href:"//github.com/innoai-tech/vuekit",children:t(E,{path:M})}),t(U,{title:`切换到${r.value=="light"?"深色模式":"浅色模式"}`,children:t(l,{component:w,"data-test":!0,sx:{color:"sys.on-surface-variant"},onClick:()=>{r.value=r.value=="light"?"dark":"light"},children:t(E,{path:r.value=="light"?$:G})})})]})]}),t(l,{sx:{flex:1,overflow:"auto"},children:t(Y,{children:(n=o.default)==null?void 0:n.call(o)})})]})}}),X=f(()=>()=>u(T,{children:[t(F,{}),t(B,{styles:q}),t(nn,{children:t(j,{})})]})),Z=Object.assign(J,{displayName:"Nav"}),nn=Object.assign(Q,{displayName:"Scaffold"}),en=Object.assign(X,{displayName:"App"}),tn="modulepreload",on=function(d){return"/vuekit/"+d},C={},s=function(a,o,r){if(!o||o.length===0)return a();const n=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=on(e),e in C)return;C[e]=!0;const i=e.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!r)for(let m=n.length-1;m>=0;m--){const h=n[m];if(h.href===e&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${c}`))return;const p=document.createElement("link");if(p.rel=i?"stylesheet":tn,i||(p.as="script",p.crossOrigin=""),p.href=e,document.head.appendChild(p),i)return new Promise((m,h)=>{p.addEventListener("load",m),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>a())},rn={meta:{name:"Home",icon:W}},sn=f(()=>()=>t(l,{sx:{display:"flex",alignItems:"center",justifyContent:"center",textStyle:"sys.display-large"},children:"Vuekit"})),an=Object.assign(sn,{displayName:"IndexDefault"}),ln=()=>s(()=>import("./nodepkg-vuematerial-example.326e4f52.chunk.js"),["static/nodepkg-vuematerial-example.326e4f52.chunk.js","static/lib-nodepkg-vuekit.3b033eed.chunk.js","static/lib-nodepkg-vuematerial.ad96d741.chunk.js","static/lib-nodepkg-vueuikit.59ac9ce5.chunk.js"]),cn=()=>s(()=>import("./nodepkg-vuematerial-example.21bc1247.chunk.js"),["static/nodepkg-vuematerial-example.21bc1247.chunk.js","static/lib-nodepkg-vuekit.3b033eed.chunk.js","static/lib-nodepkg-vueuikit.59ac9ce5.chunk.js","static/lib-nodepkg-vuematerial.ad96d741.chunk.js"]),pn=()=>s(()=>import("./nodepkg-vuematerial-example.161efe41.chunk.js"),["static/nodepkg-vuematerial-example.161efe41.chunk.js","static/lib-nodepkg-vuekit.3b033eed.chunk.js"]),dn=()=>s(()=>import("./nodepkg-vuematerial-example.2a3c4fbd.chunk.js"),["static/nodepkg-vuematerial-example.2a3c4fbd.chunk.js","static/lib-nodepkg-vuekit.3b033eed.chunk.js","static/lib-nodepkg-vuematerial.ad96d741.chunk.js","static/lib-nodepkg-vueuikit.59ac9ce5.chunk.js"]),mn=()=>s(()=>import("./nodepkg-vuematerial-example.18cdee75.chunk.js"),["static/nodepkg-vuematerial-example.18cdee75.chunk.js","static/lib-nodepkg-vuekit.3b033eed.chunk.js","static/lib-nodepkg-vuematerial.ad96d741.chunk.js","static/lib-nodepkg-vueuikit.59ac9ce5.chunk.js"]),un=()=>s(()=>import("./nodepkg-vueuikit-example.1c33e024.chunk.js"),["static/nodepkg-vueuikit-example.1c33e024.chunk.js","static/lib-nodepkg-vuekit.3b033eed.chunk.js","static/lib-nodepkg-vueuikit.59ac9ce5.chunk.js"]),hn=()=>s(()=>import("./nodepkg-vueuikit-example.d0584611.chunk.js"),["static/nodepkg-vueuikit-example.d0584611.chunk.js","static/lib-nodepkg-vuekit.3b033eed.chunk.js","static/lib-nodepkg-vueuikit.59ac9ce5.chunk.js"]),fn=()=>s(()=>import("./nodepkg-vueuikit-example.d568872e.chunk.js"),["static/nodepkg-vueuikit-example.d568872e.chunk.js","static/lib-nodepkg-vuekit.3b033eed.chunk.js","static/lib-nodepkg-vueuikit.59ac9ce5.chunk.js"]),_n=()=>s(()=>import("./nodepkg-vueuikit-example.3368ade9.chunk.js"),["static/nodepkg-vueuikit-example.3368ade9.chunk.js","static/lib-nodepkg-vuekit.3b033eed.chunk.js","static/lib-nodepkg-vueuikit.59ac9ce5.chunk.js"]),gn=()=>s(()=>import("./nodepkg-vueuikit-example.6894b07e.chunk.js"),["static/nodepkg-vueuikit-example.6894b07e.chunk.js","static/lib-nodepkg-vuekit.3b033eed.chunk.js","static/lib-nodepkg-vueuikit.59ac9ce5.chunk.js"]),yn=()=>s(()=>import("./nodepkg-vuekit-example.c5a7f7fa.chunk.js"),["static/nodepkg-vuekit-example.c5a7f7fa.chunk.js","static/lib-nodepkg-vuekit.3b033eed.chunk.js"]),vn=()=>s(()=>import("./nodepkg-vuekit-example.ad4167fd.chunk.js"),["static/nodepkg-vuekit-example.ad4167fd.chunk.js","static/lib-nodepkg-vuekit.3b033eed.chunk.js"]),R=[{name:"vuematerial-textfields",path:"/vuematerial/textfields",component:ln,props:!0},{name:"vuematerial-overlays",path:"/vuematerial/overlays",component:cn,props:!0},{name:"vuematerial",path:"/vuematerial",component:pn,props:!0},{name:"vuematerial-icons",path:"/vuematerial/icons",component:dn,props:!0},{name:"vuematerial-buttons",path:"/vuematerial/buttons",component:mn,props:!0},{name:"vueuikit-typography",path:"/vueuikit/typography",component:un,props:!0},{name:"vueuikit-popper",path:"/vueuikit/popper",component:hn,props:!0},{name:"vueuikit",path:"/vueuikit",component:fn,props:!0},{name:"vueuikit-elevation",path:"/vueuikit/elevation",component:_n,props:!0},{name:"vueuikit-color-scheme",path:"/vueuikit/color-scheme",component:gn,props:!0},{name:"vuekit-rx-in-vue",path:"/vuekit/rx-in-vue",component:yn,props:!0},{name:"vuekit",path:"/vuekit",component:vn,props:!0},{name:"index",path:"/",component:Object.assign(an,rn),props:!0}];console.log(R);var k;const bn=new URL(((k=document.querySelector("base"))==null?void 0:k.href)??"/"),xn=D({history:N(bn.pathname),routes:R});V(en).use(xn).mount("#root");export{Y as C};
