import{c as f,z as S,H as z,I as O,j as t,J as y,b as m,r as A,K as L,R as v,l as P,F as T,L as j,M as D,N,O as V}from"./lib-nodepkg-vuekit.bb99452d.chunk.js";import{s as I,v as b,a as x,B as c,C as F,G as B}from"./lib-nodepkg-vueuikit.883441df.chunk.js";import{I as C,a as w,m as $,b as U,T as G,c as g,d as M}from"./lib-nodepkg-vuematerial.db04217c.chunk.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(n){if(n.ep)return;n.ep=!0;const e=r(n);fetch(n.href,e)}})();const W=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`,q=I("div")({bgColor:"sys.surface-container"}),H=I("div")({padding:24,"& [data-example]":{display:"flex",flexDirection:"row-reverse",gap:8,"& > *":{flex:1},"& [data-example-container]":{display:"flex",alignItems:"center",justifyContent:"center"}},"& :not(pre) > code":{font:"code",rounded:"xs",px:4,bgColor:"sys.surface-container-low"},"& pre":{overflow:"auto",textStyle:"sys.body-small",containerStyle:"sys.surface-container-low",m:0,rounded:"sm",p:16,font:"code","& .comment":{color:b("sys.on-surface",x(.38))},"& .string":{color:"sys.green"},"& .tag .attr-name":{color:"sys.green"},"& .function":{color:"sys.blue"},"& .punctuation":{color:b("sys.on-surface",x(.38))},"& .keyword":{color:"sys.error"}},"& p,li":{my:"1em"},overflowY:"auto"});Object.assign(q,{displayName:"Unused"});const K=Object.assign(H,{displayName:"Container"}),Y=f(()=>{const l=O(z().options.routes.filter(r=>r.path!="/"),r=>r.path.split("/")[1]);return()=>t(c,{sx:{py:16,px:0,textTransform:"capitalize"},children:y(l,(r,i)=>{var s;const[n,e]=L(r,p=>p.path===`/${i}`);return m(c,{sx:{px:8},children:[n[0]?t(g,{component:v,sx:{width:"100%",justifyContent:"flex-start"},activeClass:"active",to:(s=n[0])==null?void 0:s.path,children:i}):t(g,{sx:{width:"100%",justifyContent:"flex-start"},children:i}),t(c,{sx:{pl:16},children:y(e,p=>{var _;return t(g,{component:v,activeClass:"active",to:p.path,sx:{width:"100%",justifyContent:"flex-start"},children:(_=P(p.path.split("/")))==null?void 0:_.replaceAll("-"," ")},p.name)})})]},i)})})}),J=f({$default:S.custom().optional()},(o,l)=>{let{slots:r}=l;const i=A("light");return()=>{var n;return m(c,{"data-theme":i.value,sx:{display:"flex",height:"100vh",width:"100vw",containerStyle:"sys.surface"},children:[m(c,{sx:{display:"flex",flexDirection:"column",width:"280px",height:"100vh",borderRightRadius:"lg",overflowY:"auto",containerStyle:"sys.surface-container-low",elevation:"0",_hover:{elevation:"2"}},children:[t(c,{sx:{flex:1},children:t(X,{})}),m(c,{sx:{p:16,display:"flex",justifyContent:"flex-end"},children:[t(C,{component:"a",target:"_blank",href:"//github.com/innoai-tech/vuekit",children:t(w,{path:M})}),t(G,{title:`切换到${i.value=="light"?"深色模式":"浅色模式"}`,children:t(c,{component:C,"data-test":!0,sx:{color:"sys.on-surface-variant"},onClick:()=>{i.value=i.value=="light"?"dark":"light"},children:t(w,{path:i.value=="light"?$:U})})})]})]}),t(c,{sx:{flex:1,overflow:"auto"},children:t(K,{children:(n=r.default)==null?void 0:n.call(r)})})]})}}),Q=f(()=>()=>m(T,{children:[t(F,{}),t(B,{styles:W}),t(Z,{children:t(j,{})})]})),X=Object.assign(Y,{displayName:"Nav"}),Z=Object.assign(J,{displayName:"Scaffold"}),nn=Object.assign(Q,{displayName:"App"}),en="modulepreload",tn=function(o){return"/vuekit/"+o},E={},a=function(l,r,i){if(!r||r.length===0)return l();const n=document.getElementsByTagName("link");return Promise.all(r.map(e=>{if(e=tn(e),e in E)return;E[e]=!0;const s=e.endsWith(".css"),p=s?'[rel="stylesheet"]':"";if(!!i)for(let u=n.length-1;u>=0;u--){const h=n[u];if(h.href===e&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${p}`))return;const d=document.createElement("link");if(d.rel=s?"stylesheet":en,s||(d.as="script",d.crossOrigin=""),d.href=e,document.head.appendChild(d),s)return new Promise((u,h)=>{d.addEventListener("load",u),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>l())},on=f(()=>()=>t(c,{sx:{display:"flex",alignItems:"center",justifyContent:"center",textStyle:"sys.display-large"},children:"Vuekit"})),rn=Object.assign(on,{displayName:"IndexDefault"}),sn=(()=>()=>a(()=>import("./nodepkg-vuematerial-example.45a0cef5.chunk.js"),["static/nodepkg-vuematerial-example.45a0cef5.chunk.js","static/lib-nodepkg-vuekit.bb99452d.chunk.js","static/lib-nodepkg-vueuikit.883441df.chunk.js","static/lib-nodepkg-vuematerial.db04217c.chunk.js"]))(),an=(()=>()=>a(()=>import("./nodepkg-vuematerial-example.29835455.chunk.js"),["static/nodepkg-vuematerial-example.29835455.chunk.js","static/lib-nodepkg-vuekit.bb99452d.chunk.js","static/lib-nodepkg-vueuikit.883441df.chunk.js","static/lib-nodepkg-vuematerial.db04217c.chunk.js"]))(),ln=(()=>()=>a(()=>import("./nodepkg-vuematerial-example.50d2d078.chunk.js"),["static/nodepkg-vuematerial-example.50d2d078.chunk.js","static/lib-nodepkg-vuekit.bb99452d.chunk.js"]))(),cn=(()=>()=>a(()=>import("./nodepkg-vuematerial-example.2b0aae8b.chunk.js"),["static/nodepkg-vuematerial-example.2b0aae8b.chunk.js","static/lib-nodepkg-vuekit.bb99452d.chunk.js","static/lib-nodepkg-vuematerial.db04217c.chunk.js","static/lib-nodepkg-vueuikit.883441df.chunk.js"]))(),pn=(()=>()=>a(()=>import("./nodepkg-vuematerial-example.0653b957.chunk.js"),["static/nodepkg-vuematerial-example.0653b957.chunk.js","static/lib-nodepkg-vuekit.bb99452d.chunk.js","static/lib-nodepkg-vuematerial.db04217c.chunk.js","static/lib-nodepkg-vueuikit.883441df.chunk.js"]))(),dn=(()=>()=>a(()=>import("./nodepkg-vueuikit-example.4e603329.chunk.js"),["static/nodepkg-vueuikit-example.4e603329.chunk.js","static/lib-nodepkg-vuekit.bb99452d.chunk.js","static/lib-nodepkg-vueuikit.883441df.chunk.js"]))(),un=(()=>()=>a(()=>import("./nodepkg-vueuikit-example.6c49ef7e.chunk.js"),["static/nodepkg-vueuikit-example.6c49ef7e.chunk.js","static/lib-nodepkg-vuekit.bb99452d.chunk.js","static/lib-nodepkg-vueuikit.883441df.chunk.js"]))(),mn=(()=>()=>a(()=>import("./nodepkg-vueuikit-example.074a4009.chunk.js"),["static/nodepkg-vueuikit-example.074a4009.chunk.js","static/lib-nodepkg-vuekit.bb99452d.chunk.js","static/lib-nodepkg-vueuikit.883441df.chunk.js"]))(),hn=(()=>()=>a(()=>import("./nodepkg-vueuikit-example.5e17f0b5.chunk.js"),["static/nodepkg-vueuikit-example.5e17f0b5.chunk.js","static/lib-nodepkg-vuekit.bb99452d.chunk.js","static/lib-nodepkg-vueuikit.883441df.chunk.js"]))(),fn=(()=>()=>a(()=>import("./nodepkg-vueuikit-example.1f73d5ed.chunk.js"),["static/nodepkg-vueuikit-example.1f73d5ed.chunk.js","static/lib-nodepkg-vuekit.bb99452d.chunk.js","static/lib-nodepkg-vueuikit.883441df.chunk.js"]))(),_n=(()=>()=>a(()=>import("./nodepkg-vuekit-example.d1b3e30e.chunk.js"),["static/nodepkg-vuekit-example.d1b3e30e.chunk.js","static/lib-nodepkg-vuekit.bb99452d.chunk.js"]))(),gn=(()=>()=>a(()=>import("./nodepkg-vuekit-example.c4016913.chunk.js"),["static/nodepkg-vuekit-example.c4016913.chunk.js","static/lib-nodepkg-vuekit.bb99452d.chunk.js"]))(),R=[{name:"vuematerial-textfields",path:"/vuematerial/textfields",component:sn,props:!0},{name:"vuematerial-overlays",path:"/vuematerial/overlays",component:an,props:!0},{name:"vuematerial",path:"/vuematerial",component:ln,props:!0},{name:"vuematerial-icons",path:"/vuematerial/icons",component:cn,props:!0},{name:"vuematerial-buttons",path:"/vuematerial/buttons",component:pn,props:!0},{name:"vueuikit-typography",path:"/vueuikit/typography",component:dn,props:!0},{name:"vueuikit-popper",path:"/vueuikit/popper",component:un,props:!0},{name:"vueuikit",path:"/vueuikit",component:mn,props:!0},{name:"vueuikit-elevation",path:"/vueuikit/elevation",component:hn,props:!0},{name:"vueuikit-color-scheme",path:"/vueuikit/color-scheme",component:fn,props:!0},{name:"vuekit-rx-in-vue",path:"/vuekit/rx-in-vue",component:_n,props:!0},{name:"vuekit",path:"/vuekit",component:gn,props:!0},{name:"index",path:"/",component:rn,props:!0}];console.log(R);var k;const yn=new URL(((k=document.querySelector("base"))==null?void 0:k.href)??"/"),vn=D({history:N(yn.pathname),routes:R});V(nn).use(vn).mount("#root");export{K as C};
