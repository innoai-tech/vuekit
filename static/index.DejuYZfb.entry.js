const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/vendor-innoai-tech-jsoneditor.DkzTo9s8.chunk.js","static/-runtime.hePW80VL.chunk.js","static/vendor-innoai-tech-vuekit.QBl6TNDm.chunk.js","static/vendor-rxjs.CcLKglPO.chunk.js","static/vendor-innoai-tech-vuemarkdown.Ig-jK4V2.chunk.js","static/vendor-innoai-tech-vuematerial.BDg1rcrM.chunk.js","static/vendor-innoai-tech-vueuikit.Bds8gfER.chunk.js"])))=>i.map(i=>d[i]);
import{C as e,Ft as t,H as n,I as r,L as i,Lt as a,Nt as o,Pt as s,R as c,S as l,a as u,c as d,nt as f,o as p,tt as m}from"./vendor-innoai-tech-vuekit.QBl6TNDm.chunk.js";import{a as h,b as g,c as _,d as v,i as y,o as b,p as x,r as S,u as C}from"./vendor-innoai-tech-vuemarkdown.Ig-jK4V2.chunk.js";import{c as w,l as T,s as E,u as D}from"./vendor-innoai-tech-vuematerial.BDg1rcrM.chunk.js";import{E as O,T as k,b as A,d as j,u as M}from"./vendor-innoai-tech-vueuikit.Bds8gfER.chunk.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var N=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`,P=d(()=>{let n=s(c().options.routes.filter(e=>e.path!==`/`),e=>e.path.split(`/`)[1]);return()=>l(S,{sx:{py:16,px:0,textTransform:`capitalize`},children:t(n,(n,r)=>{let[i,s]=o(n,e=>e.path===`/${r}`);return e(S,{sx:{px:8},children:[i[0]?l(T,{component:u,sx:{width:`100%`,justifyContent:`flex-start`},activeClass:`active`,to:i[0]?.path,children:r}):l(T,{sx:{width:`100%`,justifyContent:`flex-start`},children:r}),l(S,{sx:{pl:16},children:t(s,e=>l(T,{component:u,activeClass:`active`,to:e.path,sx:{width:`100%`,justifyContent:`flex-start`},children:a(e.path.split(`/`))?.replaceAll(`-`,` `)},e.name))})]},r)})})},{displayName:`Nav`}),F=d({$default:n.custom().optional()},(t,{slots:n})=>{let r=f(`light`);return()=>e(S,{"data-theme":r.value,sx:{display:`flex`,height:`100vh`,width:`100vw`,containerStyle:`sys.surface`},children:[e(S,{sx:{display:`flex`,flexDirection:`column`,width:`280px`,height:`100vh`,borderRightRadius:`lg`,overflowY:`auto`,containerStyle:`sys.surface-container-low`,elevation:`0`,_hover:{elevation:`2`}},children:[l(S,{sx:{flex:1},children:l(P,{})}),e(S,{sx:{p:16,display:`flex`,justifyContent:`flex-end`},children:[l(w,{component:`a`,target:`_blank`,sx:{color:`sys.on-surface-variant`},href:`//github.com/innoai-tech/vuekit`,children:l(E,{path:A})}),l(D,{title:`切换到${r.value===`light`?`深色模式`:`浅色模式`}`,children:l(S,{component:w,"data-test":!0,sx:{color:`sys.on-surface-variant`},onClick:()=>{r.value=r.value===`light`?`dark`:`light`},children:l(E,{path:r.value===`light`?k:O})})})]})]}),l(S,{sx:{flex:1,overflow:`auto`},children:l(j,{children:n.default?.()})})]})},{displayName:`Scaffold`}),I=d(()=>{let t=M.use(),n=h.use();return m([()=>t.value.seed,()=>t.value.rules],([e,n])=>{t.next(t=>{t.theming=v.create({...x,..._.fromColors(e).toDesignTokens(n)},{varPrefix:`vk`})})}),()=>{let r=t.value.theming,i=r.unstable_css(n,{":root":r.rootCSSVars});return l(M,{value:t,children:e(C,{value:r,children:[l(y,{}),l(b,{styles:N}),l(F,{children:l(p,{})})]},i.name)})}},{displayName:`App`}),L=`modulepreload`,R=function(e){return`/vuekit/`+e},z={},B=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=R(t,n),t=s(t),t in z)return;z[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:L,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},V=[{name:`jsoneditor-jsoneditor`,path:`/jsoneditor/jsoneditor`,component:()=>B(()=>import(`./vendor-innoai-tech-jsoneditor.DkzTo9s8.chunk.js`).then(e=>e.t),__vite__mapDeps([0,1,2,3,4,5,6])),props:!0},{name:`jsoneditor-jsoneditor-large`,path:`/jsoneditor/jsoneditor-large`,component:()=>B(()=>import(`./vendor-innoai-tech-jsoneditor.DkzTo9s8.chunk.js`).then(e=>e.n),__vite__mapDeps([0,1,2,3,4,5,6])),props:!0},{name:`vuemarkdown-markdown`,path:`/vuemarkdown/markdown`,component:()=>B(()=>import(`./vendor-innoai-tech-vuemarkdown.Ig-jK4V2.chunk.js`).then(e=>e.t),__vite__mapDeps([4,1,2,3])),props:!0},{name:`vuematerial-textfields`,path:`/vuematerial/textfields`,component:()=>B(()=>import(`./vendor-innoai-tech-vuematerial.BDg1rcrM.chunk.js`).then(e=>e.t),__vite__mapDeps([5,1,2,3,4,6])),props:!0},{name:`vuematerial-progresses`,path:`/vuematerial/progresses`,component:()=>B(()=>import(`./vendor-innoai-tech-vuematerial.BDg1rcrM.chunk.js`).then(e=>e.n),__vite__mapDeps([5,1,2,3,4,6])),props:!0},{name:`vuematerial-overlays`,path:`/vuematerial/overlays`,component:()=>B(()=>import(`./vendor-innoai-tech-vuematerial.BDg1rcrM.chunk.js`).then(e=>e.r),__vite__mapDeps([5,1,2,3,4,6])),props:!0},{name:`vuematerial`,path:`/vuematerial`,component:()=>B(()=>import(`./vendor-innoai-tech-vuematerial.BDg1rcrM.chunk.js`).then(e=>e.i),__vite__mapDeps([5,1,2,3,4,6])),props:!0},{name:`vuematerial-icons`,path:`/vuematerial/icons`,component:()=>B(()=>import(`./vendor-innoai-tech-vuematerial.BDg1rcrM.chunk.js`).then(e=>e.a),__vite__mapDeps([5,1,2,3,4,6])),props:!0},{name:`vuematerial-buttons`,path:`/vuematerial/buttons`,component:()=>B(()=>import(`./vendor-innoai-tech-vuematerial.BDg1rcrM.chunk.js`).then(e=>e.o),__vite__mapDeps([5,1,2,3,4,6])),props:!0},{name:`vueuikit-typography`,path:`/vueuikit/typography`,component:()=>B(()=>import(`./vendor-innoai-tech-vueuikit.Bds8gfER.chunk.js`).then(e=>e.t),__vite__mapDeps([6,1,2,3,4])),props:!0},{name:`vueuikit-popper`,path:`/vueuikit/popper`,component:()=>B(()=>import(`./vendor-innoai-tech-vueuikit.Bds8gfER.chunk.js`).then(e=>e.n),__vite__mapDeps([6,1,2,3,4])),props:!0},{name:`vueuikit`,path:`/vueuikit`,component:()=>B(()=>import(`./vendor-innoai-tech-vueuikit.Bds8gfER.chunk.js`).then(e=>e.r),__vite__mapDeps([6,1,2,3,4])),props:!0},{name:`vueuikit-figma-tokens`,path:`/vueuikit/figma-tokens`,component:()=>B(()=>import(`./vendor-innoai-tech-vueuikit.Bds8gfER.chunk.js`).then(e=>e.i),__vite__mapDeps([6,1,2,3,4])),props:!0},{name:`vueuikit-elevation`,path:`/vueuikit/elevation`,component:()=>B(()=>import(`./vendor-innoai-tech-vueuikit.Bds8gfER.chunk.js`).then(e=>e.a),__vite__mapDeps([6,1,2,3,4])),props:!0},{name:`vueuikit-color-scheme`,path:`/vueuikit/color-scheme`,component:()=>B(()=>import(`./vendor-innoai-tech-vueuikit.Bds8gfER.chunk.js`).then(e=>e.o),__vite__mapDeps([6,1,2,3,4])),props:!0},{name:`vueuikit-color-palette`,path:`/vueuikit/color-palette`,component:()=>B(()=>import(`./vendor-innoai-tech-vueuikit.Bds8gfER.chunk.js`).then(e=>e.s),__vite__mapDeps([6,1,2,3,4])),props:!0},{name:`vuekit-rx-in-vue`,path:`/vuekit/rx-in-vue`,component:()=>B(()=>import(`./vendor-innoai-tech-vuekit.QBl6TNDm.chunk.js`).then(e=>e.t),__vite__mapDeps([2,1,3])),props:!0},{name:`vuekit`,path:`/vuekit`,component:()=>B(()=>import(`./vendor-innoai-tech-vuekit.QBl6TNDm.chunk.js`).then(e=>e.n),__vite__mapDeps([2,1,3])),props:!0},{name:`index`,path:`/`,component:Object.assign(d(()=>()=>l(S,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,textStyle:`sys.display-large`},children:`Vuekit`})),{meta:{name:`Home`,icon:()=>B(async()=>{let{mdiGroup:e}=await import(`./vendor-innoai-tech-vueuikit.Bds8gfER.chunk.js`).then(e=>e.l);return{mdiGroup:e}},__vite__mapDeps([6,1,2,3,4])).then(({mdiGroup:e})=>({default:e}))}}),props:!0}];console.log(V);var H=new URL(document.querySelector(`base`)?.href??`/`),U=r({history:i(H.pathname),routes:V});g(I).use(U).mount(`#root`);