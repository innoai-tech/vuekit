import{c as _,i as C,j as t,b as u,r as R,R as v,F as I,k as S,l as z,m as O,n as A}from"./lib-nodepkg-vuekit.92d93cab.chunk.js";import{B as l,C as L,G as P}from"./lib-nodepkg-vueuikit.481c49f1.chunk.js";import{c as T,x as D,y as b,p as j,q as V}from"./lib-nodepkg-typedef.6f2aa59a.chunk.js";import{I as y,a as x,b as F,c as N,T as B,d as g,e as $}from"./lib-nodepkg-vuematerial.068d606b.chunk.js";import{C as q}from"./webapp-vuekit-layout.b20f142e.chunk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}})();const G=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`,W=_(()=>{const s=D(C().options.routes.filter(o=>o.path!="/"),o=>o.path.split("/")[1]);return()=>t(l,{sx:{py:16,px:0,textTransform:"capitalize"},children:b(s,(o,i)=>{var a;const[n,e]=j(o,p=>p.path===`/${i}`);return u(l,{sx:{px:8},children:[n[0]?t(g,{component:v,sx:{width:"100%",justifyContent:"flex-start"},activeClass:"active",to:(a=n[0])==null?void 0:a.path,children:i}):t(g,{sx:{width:"100%",justifyContent:"flex-start"},children:i}),t(l,{sx:{pl:16},children:b(e,p=>{var f;return t(g,{component:v,activeClass:"active",to:p.path,sx:{width:"100%",justifyContent:"flex-start"},children:(f=V(p.path.split("/")))==null?void 0:f.replaceAll("-"," ")},p.name)})})]},i)})})}),M=_({$default:T().optional()},(c,s)=>{let{slots:o}=s;const i=R("light");return()=>{var n;return u(l,{"data-theme":i.value,sx:{display:"flex",height:"100vh",width:"100vw",containerStyle:"sys.surface"},children:[u(l,{sx:{display:"flex",flexDirection:"column",width:"280px",height:"100vh",borderRightRadius:"lg",overflowY:"auto",containerStyle:"sys.surface-container-low",elevation:"0",_hover:{elevation:"2"}},children:[t(l,{sx:{flex:1},children:t(H,{})}),u(l,{sx:{p:16,display:"flex",justifyContent:"flex-end"},children:[t(y,{component:"a",target:"_blank",href:"//github.com/innoai-tech/vuekit",children:t(x,{path:$})}),t(B,{title:`切换到${i.value=="light"?"深色模式":"浅色模式"}`,children:t(l,{component:y,"data-test":!0,sx:{color:"sys.on-surface-variant"},onClick:()=>{i.value=i.value=="light"?"dark":"light"},children:t(x,{path:i.value=="light"?F:N})})})]})]}),t(l,{sx:{flex:1,overflow:"auto"},children:t(q,{children:(n=o.default)==null?void 0:n.call(o)})})]})}}),U=_(()=>()=>u(I,{children:[t(L,{}),t(P,{styles:G}),t(K,{children:t(S,{})})]})),H=Object.assign(W,{displayName:"Nav"}),K=Object.assign(M,{displayName:"Scaffold"}),Y=Object.assign(U,{displayName:"App"}),J="modulepreload",Q=function(c){return"/vuekit/"+c},E={},r=function(s,o,i){if(!o||o.length===0)return s();const n=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=Q(e),e in E)return;E[e]=!0;const a=e.endsWith(".css"),p=a?'[rel="stylesheet"]':"";if(!!i)for(let d=n.length-1;d>=0;d--){const h=n[d];if(h.href===e&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${p}`))return;const m=document.createElement("link");if(m.rel=a?"stylesheet":J,a||(m.as="script",m.crossOrigin=""),m.href=e,document.head.appendChild(m),a)return new Promise((d,h)=>{m.addEventListener("load",d),m.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())},X={meta:{name:"Home",icon:()=>r(()=>import("./webapp-vuekit-layout.b20f142e.chunk.js").then(c=>c.i),["static/webapp-vuekit-layout.b20f142e.chunk.js","static/lib-nodepkg-vueuikit.481c49f1.chunk.js","static/lib-nodepkg-vuekit.92d93cab.chunk.js","static/lib-nodepkg-typedef.6f2aa59a.chunk.js","static/lib-nodepkg-vuematerial.068d606b.chunk.js"])}},Z=_(()=>()=>t(l,{sx:{display:"flex",alignItems:"center",justifyContent:"center",textStyle:"sys.display-large"},children:"Vuekit"})),nn=Object.assign(Z,{displayName:"IndexDefault"}),en=()=>r(()=>import("./nodepkg-vuematerial-example.ad37c750.chunk.js"),["static/nodepkg-vuematerial-example.ad37c750.chunk.js","static/lib-nodepkg-vuekit.92d93cab.chunk.js","static/lib-nodepkg-typedef.6f2aa59a.chunk.js","static/webapp-vuekit-layout.b20f142e.chunk.js","static/lib-nodepkg-vueuikit.481c49f1.chunk.js","static/lib-nodepkg-vuematerial.068d606b.chunk.js"]),tn=()=>r(()=>import("./nodepkg-vuematerial-example.6d1daf07.chunk.js"),["static/nodepkg-vuematerial-example.6d1daf07.chunk.js","static/lib-nodepkg-vuekit.92d93cab.chunk.js","static/lib-nodepkg-typedef.6f2aa59a.chunk.js","static/lib-nodepkg-vueuikit.481c49f1.chunk.js","static/lib-nodepkg-vuematerial.068d606b.chunk.js","static/webapp-vuekit-layout.b20f142e.chunk.js"]),on=()=>r(()=>import("./nodepkg-vuematerial-example.81b6f10d.chunk.js"),["static/nodepkg-vuematerial-example.81b6f10d.chunk.js","static/lib-nodepkg-vuekit.92d93cab.chunk.js","static/lib-nodepkg-typedef.6f2aa59a.chunk.js"]),rn=()=>r(()=>import("./nodepkg-vuematerial-example.4c146b98.chunk.js"),["static/nodepkg-vuematerial-example.4c146b98.chunk.js","static/lib-nodepkg-vuekit.92d93cab.chunk.js","static/lib-nodepkg-typedef.6f2aa59a.chunk.js","static/lib-nodepkg-vuematerial.068d606b.chunk.js","static/lib-nodepkg-vueuikit.481c49f1.chunk.js"]),an=()=>r(()=>import("./nodepkg-vuematerial-example.1ba2a141.chunk.js"),["static/nodepkg-vuematerial-example.1ba2a141.chunk.js","static/lib-nodepkg-vuekit.92d93cab.chunk.js","static/lib-nodepkg-typedef.6f2aa59a.chunk.js","static/lib-nodepkg-vuematerial.068d606b.chunk.js","static/lib-nodepkg-vueuikit.481c49f1.chunk.js","static/webapp-vuekit-layout.b20f142e.chunk.js"]),sn=()=>r(()=>import("./nodepkg-vueuikit-example.3ec1804d.chunk.js"),["static/nodepkg-vueuikit-example.3ec1804d.chunk.js","static/lib-nodepkg-vuekit.92d93cab.chunk.js","static/lib-nodepkg-typedef.6f2aa59a.chunk.js","static/lib-nodepkg-vueuikit.481c49f1.chunk.js"]),ln=()=>r(()=>import("./nodepkg-vueuikit-example.d933ed12.chunk.js"),["static/nodepkg-vueuikit-example.d933ed12.chunk.js","static/lib-nodepkg-vuekit.92d93cab.chunk.js","static/lib-nodepkg-typedef.6f2aa59a.chunk.js","static/lib-nodepkg-vueuikit.481c49f1.chunk.js"]),cn=()=>r(()=>import("./nodepkg-vueuikit-example.1cecdcf8.chunk.js"),["static/nodepkg-vueuikit-example.1cecdcf8.chunk.js","static/lib-nodepkg-vuekit.92d93cab.chunk.js","static/lib-nodepkg-typedef.6f2aa59a.chunk.js","static/lib-nodepkg-vueuikit.481c49f1.chunk.js"]),pn=()=>r(()=>import("./nodepkg-vueuikit-example.20f4e300.chunk.js"),["static/nodepkg-vueuikit-example.20f4e300.chunk.js","static/lib-nodepkg-vuekit.92d93cab.chunk.js","static/lib-nodepkg-typedef.6f2aa59a.chunk.js","static/lib-nodepkg-vueuikit.481c49f1.chunk.js"]),mn=()=>r(()=>import("./nodepkg-vueuikit-example.aa3c24a2.chunk.js"),["static/nodepkg-vueuikit-example.aa3c24a2.chunk.js","static/lib-nodepkg-vuekit.92d93cab.chunk.js","static/lib-nodepkg-typedef.6f2aa59a.chunk.js","static/lib-nodepkg-vueuikit.481c49f1.chunk.js"]),dn=()=>r(()=>import("./nodepkg-vuekit-example.9be25c35.chunk.js"),["static/nodepkg-vuekit-example.9be25c35.chunk.js","static/lib-nodepkg-vuekit.92d93cab.chunk.js","static/lib-nodepkg-typedef.6f2aa59a.chunk.js"]),un=()=>r(()=>import("./nodepkg-vuekit-example.2dc0c7c1.chunk.js"),["static/nodepkg-vuekit-example.2dc0c7c1.chunk.js","static/lib-nodepkg-vuekit.92d93cab.chunk.js","static/lib-nodepkg-typedef.6f2aa59a.chunk.js"]),k=[{name:"vuematerial-textfields",path:"/vuematerial/textfields",component:en,props:!0},{name:"vuematerial-overlays",path:"/vuematerial/overlays",component:tn,props:!0},{name:"vuematerial",path:"/vuematerial",component:on,props:!0},{name:"vuematerial-icons",path:"/vuematerial/icons",component:rn,props:!0},{name:"vuematerial-buttons",path:"/vuematerial/buttons",component:an,props:!0},{name:"vueuikit-typography",path:"/vueuikit/typography",component:sn,props:!0},{name:"vueuikit-popper",path:"/vueuikit/popper",component:ln,props:!0},{name:"vueuikit",path:"/vueuikit",component:cn,props:!0},{name:"vueuikit-elevation",path:"/vueuikit/elevation",component:pn,props:!0},{name:"vueuikit-color-scheme",path:"/vueuikit/color-scheme",component:mn,props:!0},{name:"vuekit-rx-in-vue",path:"/vuekit/rx-in-vue",component:dn,props:!0},{name:"vuekit",path:"/vuekit",component:un,props:!0},{name:"index",path:"/",component:Object.assign(nn,X),props:!0}];console.log(k);var w;const hn=new URL(((w=document.querySelector("base"))==null?void 0:w.href)??"/"),_n=z({history:O(hn.pathname),routes:k});A(Y).use(_n).mount("#root");
