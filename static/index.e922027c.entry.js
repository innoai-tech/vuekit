import{_ as R}from"./lib-webapp-vuekit.94351f5a.chunk.js";import{z as m,b as D,E as oe,G as fe,g as y,H as be,l as _,F as re,I as xe,o as M,n as ie,w as ye,r as ae,c as _e,d as ve,e as Se,s as $,f as we,h as N,i as H,a as Ce,k as se,j as G,J as ke,K as Re,L as Z,q as j,R as ee,M as ze,N as $e,O as Ee,P as Ie,Q as Fe}from"./lib-nodepkg-vuekit.2b3424f6.chunk.js";import{s as P,v as b,a as x,C as Ve,b as I,r as Te,c as Pe,S as le,d as Be,e as je,i as Ae,B as k,f as Le,G as He}from"./lib-nodepkg-vueuikit.f42f2ba8.chunk.js";const Oe=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`,Sn=P("button",{hover:m.boolean().optional(),focus:m.boolean().optional(),active:m.boolean().optional(),disabled:m.boolean().optional()})({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",outline:"none",overflow:"hidden",border:0,margin:0,cursor:"pointer",userSelect:"none",gap:8,h:40,px:24,rounded:20,pos:"relative",elevation:"1",zIndex:1,containerStyle:"sys.primary",_disabled:{cursor:"not-allowed",shadow:"0",_hover:{shadow:"0"},color:b("sys.on-surface",x(.38)),bgColor:b("sys.on-surface",x(.12))},_before:{content:'""',pos:"absolute",top:0,right:0,left:0,bottom:0,bgColor:"rgba(0,0,0,0)",transitionDuration:"md4",transitionTimingFunction:"standard"},_hover:{shadow:"2",_before:{bgColor:b("white",x(.08))}},_active:{shadow:"2",_before:{bgColor:b("white",x(.12))}},_focus:{shadow:"2",_before:{bgColor:b("white",x(.12))}}}),wn=P("button",{hover:m.boolean().optional(),focus:m.boolean().optional(),active:m.boolean().optional(),disabled:m.boolean().optional()})({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",outline:"none",overflow:"hidden",border:0,margin:0,cursor:"pointer",userSelect:"none",gap:8,h:40,px:24,rounded:20,pos:"relative",elevation:"1",color:"sys.primary",zIndex:1,_disabled:{cursor:"not-allowed",shadow:"0",_hover:{shadow:"0"},color:b("sys.on-surface",x(.38)),bgColor:b("sys.on-surface",x(.12))},bgColor:"sys.surface-container-low",_active:{shadow:"2",bgColor:b("sys.primary",x(.12))},_focus:{shadow:"2",bgColor:b("sys.primary",x(.12))},_hover:{shadow:"2",bgColor:b("sys.primary",x(.08))}}),A=P("button",{hover:m.boolean().optional(),focus:m.boolean().optional(),active:m.boolean().optional(),disabled:m.boolean().optional()})({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",outline:"none",overflow:"hidden",border:0,margin:0,cursor:"pointer",userSelect:"none",gap:8,h:40,px:16,rounded:20,pos:"relative",zIndex:1,color:"sys.primary",_disabled:{cursor:"not-allowed",color:b("sys.on-surface",x(.38))},_before:{content:'""',pos:"absolute",top:0,right:0,left:0,bottom:0,bgColor:"rgba(0,0,0,0)",transitionDuration:"md4",transitionTimingFunction:"standard"},_hover:{_before:{bgColor:b("sys.primary",x(.08))}},_active:{_before:{bgColor:b("sys.primary",x(.12))}},_focus:{_before:{bgColor:b("sys.primary",x(.12))}}}),Cn=P("button",{hover:m.boolean().optional(),focus:m.boolean().optional(),active:m.boolean().optional(),disabled:m.boolean().optional()})({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",outline:"none",overflow:"hidden",border:0,margin:0,cursor:"pointer",userSelect:"none",gap:8,h:40,px:24,rounded:20,pos:"relative",zIndex:1,bgColor:"sys.secondary-container",_disabled:{cursor:"not-allowed",shadow:"0",_hover:{shadow:"0"},color:b("sys.on-surface",x(.38)),bgColor:b("sys.on-surface",x(.12))},_before:{content:'""',pos:"absolute",top:0,right:0,left:0,bottom:0,bgColor:"rgba(0,0,0,0)",transitionDuration:"md4",transitionTimingFunction:"standard"},elevation:"0",_hover:{elevation:"1",_before:{bgColor:b("sys.on-secondary-container",x(.08))}},_active:{_before:{bgColor:b("sys.on-secondary-container",x(.12))}},_focus:{_before:{bgColor:b("sys.on-secondary-container",x(.12))}}}),kn=P("button",{hover:m.boolean().optional(),focus:m.boolean().optional(),active:m.boolean().optional(),disabled:m.boolean().optional()})({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",overflow:"hidden",outline:0,margin:0,cursor:"pointer",userSelect:"none",gap:8,h:40,px:16,rounded:20,pos:"relative",zIndex:1,border:"1px solid",borderColor:"sys.outline",color:"sys.primary",_disabled:{cursor:"not-allowed",color:b("sys.on-surface",x(.38))},_before:{content:'""',pos:"absolute",top:0,right:0,left:0,bottom:0,bgColor:"rgba(0,0,0,0)",transitionDuration:"md4",transitionTimingFunction:"standard"},_hover:{_before:{bgColor:b("sys.primary",x(.08))}},_active:{_before:{bgColor:b("sys.primary",x(.12))}},_focus:{_before:{bgColor:b("sys.primary",x(.12))}}}),We=(n,t)=>new Proxy(n,{get(o,e){return t[e]??o[e]}});function U(n,t){const e=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{})??t,i=t??n,s=D(n)?{}:n,[c,d]=oe(Object.keys(s),g=>/^on[A-Z]/.test(g));return fe({...e,...{props:d.reduce((g,f)=>{const C=s[f];return{...g,[f]:{default:()=>C.parse(void 0),validator:z=>C.safeParse(z).success}}},{}),emits:c.map(g=>y(g.slice(2)))},setup:(g,f)=>i(g,f)})}function de(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=Symbol(t.name??"");let e;const i=()=>e??(e=D(n)?n():n),s=U({value:m.custom().optional()},(c,d)=>{let{value:p}=c,{slots:g}=d;return be(o,p??i()),()=>{var f;return _(re,{children:(f=g.default)==null?void 0:f.call(g)})}},{...t,name:`Provider(${t.name??""})`});return We(s,{use:()=>xe(o,i,!0)})}function Y(){return new Proxy({},{get(n,t){return t}})}const u=Y(),ne={paddingX:[u.paddingLeft,u.paddingRight],paddingY:[u.paddingTop,u.paddingBottom],marginX:[u.marginInlineStart,u.marginInlineEnd],marginY:[u.marginTop,u.marginBottom],borderX:[u.borderLeft,u.borderRight],borderY:[u.borderTop,u.borderBottom],borderTopRadius:[u.borderTopLeftRadius,u.borderTopRightRadius],borderBottomRadius:[u.borderBottomLeftRadius,u.borderBottomRightRadius],borderRightRadius:[u.borderTopRightRadius,u.borderBottomRightRadius],borderLeftRadius:[u.borderTopLeftRadius,u.borderBottomLeftRadius],backgroundGradient:[u.backgroundImage],boxSize:[u.width,u.height]},l=Y(),O={font:l.fontFamily,shadow:l.boxShadow,rounded:l.borderRadius,roundedTop:l.borderTopRadius,roundedBottom:l.borderBottomRadius,roundedLeft:l.borderLeftRadius,roundedRight:l.borderRightRadius,bg:l.background,bgImage:l.backgroundImage,bgSize:l.backgroundSize,bgPosition:l.backgroundPosition,bgRepeat:l.backgroundRepeat,bgAttachment:l.backgroundAttachment,bgColor:l.backgroundColor,bgGradient:l.backgroundGradient,bgClip:l.backgroundClip,pos:l.position,p:l.padding,pt:l.paddingTop,pr:l.paddingRight,pl:l.paddingLeft,pb:l.paddingBottom,ps:l.paddingInlineStart,pe:l.paddingInlineEnd,px:l.paddingX,py:l.paddingY,m:l.margin,mt:l.marginTop,mr:l.marginRight,ml:l.marginLeft,mb:l.marginBottom,ms:l.marginInlineStart,me:l.marginInlineEnd,mx:l.marginX,my:l.marginY,w:l.width,minW:l.minWidth,maxW:l.maxWidth,h:l.height,minH:l.minHeight,maxH:l.maxHeight},a=Y(),v=function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];const e=[...t];for(const i of t)O[i]&&e.push(O[i]);return e},De={_:"&",_before:"&::before",_after:"&::after",_empty:"&:empty",_hover:"&:hover, &[data-hover], &.hover",_active:"&:active, &[data-active], &.active",_focus:"&:focus, &[data-focus], &.focus",_disabled:"&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled], &.disabled",_highlighted:"&[data-highlighted]",_focusWithin:"&:focus-within",_focusVisible:"&:focus-visible, &[data-focus-visible]",_readOnly:"&[aria-readonly=true], &[readonly], &[data-readonly], &.readonly",_expanded:"&[aria-expanded=true], &[data-expanded], &.expanded",_checked:"&[aria-checked=true], &[data-checked], &.checked",_grabbed:"&[aria-grabbed=true], &[data-grabbed], &.grabbed",_pressed:"&[aria-pressed=true], &[data-pressed], &.pressed",_invalid:"&[aria-invalid=true], &[data-invalid], &.invalid",_valid:"&[data-valid], &[data-state=valid], &.valid",_loading:"&[data-loading], &[aria-busy=true], &.loading",_selected:"&[aria-selected=true], &[data-selected], &.selected",_hidden:"&[hidden], &[data-hidden], &.hidden",_autofill:"&:-webkit-autofill",_even:"&:nth-of-type(even)",_odd:"&:nth-of-type(odd)",_first:"&:first-of-type",_firstLetter:"&::first-letter",_last:"&:last-of-type",_notFirst:"&:not(:first-of-type)",_notLast:"&:not(:last-of-type)",_visited:"&:visited",_activeLink:"&[aria-current=page]",_activeStep:"&[aria-current=step]",_indeterminate:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",_placeholder:"&::placeholder",_placeholderShown:"&:placeholder-shown",_fullScreen:"&:fullscreen",_selection:"&::selection",_rtl:"[dir=rtl] &, &[dir=rtl]",_ltr:"[dir=ltr] &, &[dir=ltr]",_dark:"&[data-theme=dark]",_light:"&[data-theme=light]"};var W=(n=>(n[n.var=0]="var",n[n.mixin=1]="mixin",n))(W||{});class r{static create(t,o){let{values:e,on:i,transform:s}=o;return{type:t,values:e,on:i,transform:s,__Tokens:void 0,__ValueType:void 0,__CSSTokens:void 0}}static color(t){return r.create(0,{values:t,on:v(a.color,a.bgColor,a.outlineColor,a.borderColor,a.accentColor,a.fill,a.stroke),transform:o=>({default:`rgb(${o[0]}, ${o[1]}, ${o[2]})`,rgb:`${o[0]} ${o[1]} ${o[2]}`}),fallback:""})}static space(t){return r.create(0,{values:t,on:v(a.gap,a.rowGap,a.columnGap,a.top,a.right,a.bottom,a.left,a.m,a.ms,a.me,a.mt,a.mr,a.mb,a.ml,a.mx,a.my,a.p,a.ps,a.pe,a.pt,a.pr,a.pb,a.pl,a.px,a.py)})}static boxSize(t){return r.create(0,{values:t,on:v(a.w,a.minW,a.maxW,a.h,a.minH,a.maxH,a.boxSize),fallback:0})}static fontSize(t){return r.create(0,{values:t,on:v(a.fontSize),fallback:0})}static lineHeight(t){return r.create(0,{values:t,on:v(a.lineHeight),fallback:0})}static rounded(t){return r.create(0,{values:t,fallback:0,on:v(a.rounded,a.roundedTop,a.roundedBottom,a.roundedLeft,a.roundedRight,u.borderTopLeftRadius,u.borderTopRightRadius,u.borderBottomLeftRadius,u.borderBottomRightRadius,u.borderTopRightRadius,u.borderBottomRightRadius,u.borderTopLeftRadius,u.borderBottomLeftRadius)})}static transitionTimingFunction(t){return r.create(0,{values:t,on:v(a.transitionTimingFunction)})}static transitionDuration(t){return r.create(0,{values:t,on:v(a.transitionDuration),transform:o=>`${o}ms`})}static font(t){return r.create(0,{values:t,on:v(a.fontFamily)})}static fontWeight(t){return r.create(0,{values:t,on:v(a.fontWeight)})}static letterSpacing(t){return r.create(0,{values:t,on:v(a.letterSpacing)})}static shadow(t){return r.create(0,{values:t,on:v(a.shadow)})}static customMixin(t,o){return r.create(1,{values:o,on:[t]})}static mixin(t){return{...t,__mixin:!0}}}const J=n=>H(n)&&!Ce(n),T=class{get tokens(){return se(this._values)}get(n,t,o){const e=this._values[n];return H(e)?o?e[t]:e[t]??e[T.defaultMode]:o?t===T.defaultMode?e:void 0:e}use(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(this._cssVarRefs[n])return t?`${this._cssVarRefs[n]}`:`var(${this._cssVarRefs[n]})`}constructor(n,{cssVar:t,transformFallback:o}){this.__Tokens=void 0,this._values={},this._cssVarRefs={},T.walkValues(n.values,(e,i)=>{const s=i.join("."),c=(d,p)=>{const g=n.transform?n.transform(d):o(d);if(H(g))for(const f in g)p(g[f],f==="default"?"":f);else p(g,"")};if($(this._cssVarRefs,[s],t(s)),J(e))for(const d in e)c(e[d],(p,g)=>{$(this._values,[`${s}${g?`/${g}`:""}`,d],p)});else c(e,(d,p)=>{$(this._values,[`${s}${p?`/${p}`:""}`],d)})})}};let K=T;K.defaultMode="_default";K.walkValues=function(n,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];for(const e in n){const i=n[e];if(J(i)){if(N(i,"_default")){t(i,[...o,e]);continue}T.walkValues(i,t,[...o,e]);continue}t(i,[...o,e])}};const X=class{get tokens(){return se(this._values)}get(n){return this._values[n]}constructor(n){this._values={},X.walkValues(n.values,(t,o)=>{const e=o.join(".");$(this._values,[e],M(t,"__mixin"))})}};let ce=X;ce.walkValues=function(n,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];for(const e in n){const i=n[e];if(J(i)){if(N(i,"__mixin")){t(i,[...o,e]);continue}X.walkValues(i,t,[...o,e]);continue}t(i,[...o,e])}};const F=n=>t=>`rgba(var(${t}-rgb) / ${n})`,Me=n=>D(n)&&N(n,"token");function V(n,t){return Object.assign(o=>t(o),{toString:()=>n,token:n})}const ue=n=>n.reduce((t,o)=>({...t,[o]:!0}),{}),B=class{static create(n,t){return new B(n,t)}cssVar(n,t){return`--${this.varPrefix}-${y(`${n}.${t}`)}`}get rootCSSVars(){return this.unstable_sx(this.cssVars)}unstable_sx(n){const t={};for(const o in n)this.defaultProcessor.process(t,o,n[o]);return t}unstable_css(n,t){let{isStringTag:o=!0,withoutScoping:e=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=t??{},s=i.__emotion_styles??je([this.unstable_sx(t)],n==null?void 0:n.registered,{});return e?n.insert("",s,n.sheet,!0):Ae(n,s,o),i.__emotion_styles=s,`${n.key}-${s.name}`}constructor(n,t={}){this.cssVars={},this.tokens={},this.propValues={},this.mixins={},this.dp=o=>o===0?0:`calc(${o} * var(${this.cssVar("space","dp")}))`,this.transformFallback=(o,e)=>B.propsCanBaseDp[o]&&_e(e)?B.propsCanPercent[o]&&Math.abs(e)<1?`${e*100}%`:this.dp(e):e,this.processValue=(o,e)=>{var i,s;if(Me(e)){const c=(i=this.propValues[o])==null?void 0:i.use(e.token,!0);return c?e(c):void 0}return((s=this.propValues[o])==null?void 0:s.use(e))??this.transformFallback(o,e)},this.token=new Proxy({},{get:(o,e)=>{var i,s;if(this.tokens[e])return Object.assign(c=>{var d;return(d=this.tokens[e])==null?void 0:d.get(c,`_${this.mode}`)},{tokens:(i=this.tokens[e])==null?void 0:i.tokens});if(this.mixins[e])return Object.assign(c=>{var d;return(d=this.mixins[e])==null?void 0:d.get(c)},{tokens:(s=this.mixins[e])==null?void 0:s.tokens})}}),this.defaultProcessor={process:(o,e,i)=>{var s;if(this.mixins[e]){const c=(s=this.mixins[e])==null?void 0:s.get(i);if(c)for(const d in c)this.defaultProcessor.process(o,d,c[d]);return}if(ve(i)){e=De[e]??e,o[e]=Se(o[e]??{},this.unstable_sx(i));return}if(e=O[e]??e,ne[e]){for(const c of ne[e])o[c]=this.processValue(c,i);return}o[e]=this.processValue(e,i)}},this.varPrefix=t.varPrefix??"vk",this.mode=t.mode??"light",$(this.cssVars,[this.cssVar("space","dp")],"0.1rem");for(let o in n){const e=n[o];if(e.type==W.var){const i=new K(e,{cssVar:s=>this.cssVar(o,s),transformFallback:s=>this.transformFallback(e.on[0],s)});this.tokens[o]=i;for(const s of e.on)this.propValues[s]=i;for(const s of i.tokens)for(const c of["light","dark"]){const d=c===this.mode?"_default":`_${c}`,p=i.get(s,d,!0);we(p)||(d==="_default"?$(this.cssVars,[this.cssVar(o,s)],p):$(this.cssVars,[d,this.cssVar(o,s)],p))}continue}if(e.type==W.mixin){const i=new ce(e);for(const s of e.on)this.mixins[s]=i}}}};let q=B;q.propsCanPercent=ue([...r.boxSize({}).on]);q.propsCanBaseDp=ue([...r.boxSize({}).on,...r.space({}).on,...r.fontSize({}).on,...r.letterSpacing({}).on,...r.lineHeight({}).on,...r.rounded({}).on]);const Ne={shadow:r.shadow({0:{_default:"0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)",_dark:"0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)"},1:{_default:"0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",_dark:"0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)"},2:{_default:"0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",_dark:"0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)"},3:{_default:"0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",_dark:"0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"},4:{_default:"0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",_dark:"0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"},5:{_default:"0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",_dark:"0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)"}}),elevation:r.customMixin("elevation",{0:r.mixin({transitionDuration:"md4",transitionTimingFunction:"standard",shadow:"0",_hover:{shadow:"1"}}),1:r.mixin({transitionDuration:"md4",transitionTimingFunction:"standard",shadow:"1",_hover:{shadow:"2"}}),2:r.mixin({transitionDuration:"md4",transitionTimingFunction:"standard",shadow:"2",_hover:{shadow:"3"}}),3:r.mixin({transitionDuration:"md4",transitionTimingFunction:"standard",shadow:"3",_hover:{shadow:"4"}}),4:r.mixin({transitionDuration:"md4",transitionTimingFunction:"standard",shadow:"4",_hover:{shadow:"5"}})})},Ge={font:r.font({brand:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),plain:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),code:["'Lucida Console'","Consolas","Monaco","'Andale Mono'","'Ubuntu Mono'","monospace"].join(",")}),fontWeight:r.fontWeight({regular:400,medium:500,bold:700}),textStyle:r.customMixin("textStyle",{sys:{"display-large":r.mixin({lineHeight:64,fontSize:57,letterSpacing:-.25,fontWeight:"regular",font:"brand"}),"display-medium":r.mixin({lineHeight:52,fontSize:45,letterSpacing:0,fontWeight:"regular",font:"brand"}),"display-small":r.mixin({lineHeight:44,fontSize:36,letterSpacing:0,fontWeight:"regular",font:"brand"}),"headline-large":r.mixin({lineHeight:40,fontSize:32,letterSpacing:0,fontWeight:"regular",font:"brand"}),"headline-medium":r.mixin({lineHeight:36,fontSize:28,letterSpacing:0,fontWeight:"regular",font:"brand"}),"headline-small":r.mixin({lineHeight:32,fontSize:24,letterSpacing:0,fontWeight:"regular",font:"plain"}),"title-large":r.mixin({lineHeight:28,fontSize:22,letterSpacing:0,fontWeight:"regular",font:"brand"}),"title-medium":r.mixin({lineHeight:24,fontSize:16,letterSpacing:.15,fontWeight:"medium",font:"plain"}),"title-small":r.mixin({lineHeight:20,fontSize:14,letterSpacing:.1,fontWeight:"medium",font:"plain"}),"label-large":r.mixin({lineHeight:20,fontSize:14,letterSpacing:.1,fontWeight:"medium",font:"plain"}),"label-medium":r.mixin({lineHeight:16,fontSize:12,letterSpacing:.5,fontWeight:"medium",font:"plain"}),"label-small":r.mixin({lineHeight:16,fontSize:11,letterSpacing:.5,fontWeight:"medium",font:"plain"}),"body-large":r.mixin({lineHeight:24,fontSize:16,letterSpacing:.5,fontWeight:"regular",font:"plain"}),"body-medium":r.mixin({lineHeight:20,fontSize:14,letterSpacing:.25,fontWeight:"regular",font:"plain"}),"body-small":r.mixin({lineHeight:16,fontSize:12,letterSpacing:.4,fontWeight:"regular",font:"plain"})}})},Ue={0:!0,10:!0,20:!0,30:!0,40:!0,50:!0,60:!0,70:!0,80:!0,90:!0,95:!0,100:!0},L=n=>{const t=Te(n);return[t.r,t.g,t.b]},Ye=n=>Object.assign(M(le.lightFromCorePalette(n).toJSON(),["background","onBackground"]),{surfaceDim:n.n1.tone(87),surfaceBright:n.n1.tone(98),surfaceContainerLowest:n.n1.tone(100),surfaceContainerLow:n.n1.tone(96),surfaceContainer:n.n1.tone(94),surfaceContainerHigh:n.n1.tone(92),surfaceContainerHighest:n.n1.tone(90)}),Je=n=>Object.assign(M(le.darkFromCorePalette(n).toJSON(),["background","onBackground"]),{surfaceDim:n.n1.tone(6),surfaceBright:n.n1.tone(24),surfaceContainerLowest:n.n1.tone(4),surfaceContainerLow:n.n1.tone(10),surfaceContainer:n.n1.tone(12),surfaceContainerHigh:n.n1.tone(17),surfaceContainerHighest:n.n1.tone(22)});function Ke(n){const{primary:t,secondary:o,tertiary:e,neutral:i,neutralVariant:s,error:c}=n,d=h=>({primary:!0,secondary:!0,tertiary:!0,error:!0})[h],p=Ve.contentFromColors({primary:I(t),secondary:o?I(o):void 0,tertiary:e?I(e):void 0,neutral:i?I(i):void 0,neutralVariant:s?I(s):void 0,error:c?I(c):void 0}),g={},f={},C=Ye(p),z=Je(p);for(let h in C)if(g[`${y(h)}`]={_default:L(C[h]),_dark:L(z[h])},d(h)&&(f[`${y(h)}`]=r.mixin({bgColor:`sys.${y(h)}`,color:`sys.on-${y(h)}`,fill:`sys.on-${y(h)}`}),f[`${y(h)}-container`]=r.mixin({bgColor:`sys.${y(h)}-container`,color:`sys.on-${y(h)}-container`,fill:`sys.on-${y(h)}-container`})),h.startsWith("surface")){if(h.includes("container")){f[`${y(h)}`]=r.mixin({bgColor:`sys.${y(h)}`,color:"sys.on-surface",fill:"sys.on-surface"});continue}f[`${y(h)}`]=r.mixin({bgColor:`sys.${y(h)}`,color:"sys.on-surface",fill:"sys.on-surface"}),f[`on-${y(h)}`]=r.mixin({bgColor:`sys.on-${y(h)}`,color:"sys.inverse-on-surface",fill:"sys.inverse-on-surface"})}const E=h=>Object.keys(Ue).reduce((he,Q)=>({...he,[Q]:L(h.tone(parseInt(Q)))}),{});return{color:r.color({primary:E(p.a1),secondary:E(p.a2),tertiary:E(p.a3),neutral:E(p.n1),neutralVariant:E(p.n2),error:E(p.error),white:[255,255,255],black:[0,0,0],sys:g}),containerStyle:r.customMixin("containerStyle",{sys:f})}}const w=(n,t,o,e)=>Object.assign(Pe(n,t,o,e),{toString(){return`cubic-bezier(${n}, ${t}, ${o}, ${e})`}}),S={duration:{sm1:50,sm2:100,sm3:150,sm4:200,md1:250,md2:300,md3:350,md4:400,lg1:450,lg2:500,lg3:550,lg4:600,xl1:700,xl2:800,xl3:900,xl4:1e3},easing:{linear:w(0,0,1,1),standard:Object.assign(w(.2,0,0,1),{accelerate:w(.3,0,1,1),decelerate:w(0,0,0,1)}),emphasized:Object.assign(w(.2,0,0,1),{accelerate:w(.3,0,.8,.15),decelerate:w(.05,.7,.1,1)}),legacy:Object.assign(w(.4,0,.2,1),{decelerate:w(0,0,.2,1),accelerate:w(.4,0,1,1)})}},Xe={transitionDuration:r.transitionDuration(S.duration),transitionTimingFunction:r.transitionTimingFunction({linear:S.easing.linear.toString(),standard:S.easing.standard.toString(),"standard-accelerate":S.easing.standard.accelerate.toString(),"standard-decelerate":S.easing.standard.decelerate.toString(),emphasized:S.easing.emphasized.toString(),"emphasized-decelerate":S.easing.emphasized.decelerate.toString(),"emphasized-accelerate":S.easing.emphasized.accelerate.toString(),legacy:S.easing.legacy.toString(),"legacy-decelerate":S.easing.legacy.decelerate.toString(),"legacy-accelerate":S.easing.legacy.accelerate.toString()})},qe=r.rounded({xs:4,sm:8,md:12,lg:16,xl:28}),Qe={...Ke({primary:"#6750A4",secondary:"#625B71",tertiary:"#7D5260",error:"#B3261E"}),...Ge,...Xe,...Ne,rounded:qe},Ze=q.create(Qe,{varPrefix:"vk"}),pe=de(Ze,{name:"Theme"}),me=de(Be({key:"css"}),{name:"Cache"}),en=U({component:m.custom(),sx:m.custom()},(n,t)=>{let{component:o,sx:e,...i}=n,{slots:s}=t;const c=o??"div",d=pe.use(),p=me.use(),g=ae(),f=()=>{e&&(g.value=d.unstable_css(p,e,{isStringTag:ie(c)}))};return ye(()=>e,f),f(),()=>_(c,{...i,class:g.value,children:s})});function nn(n,t){return o=>U({...t,sx:m.custom().optional(),component:m.custom().default(n).optional()},(e,i)=>{let{slots:s}=i;const c=pe.use(),d=me.use(),p=c.unstable_css(d,o,{isStringTag:ie(e.component)});return()=>{const{component:g,sx:f}=e,C={};for(const z in t)e[z]&&(C[`data-${z}`]=e[z]);return _(en,{...C,component:g,sx:f,class:p,children:s})}})}const tn=nn("button",{hover:m.boolean().optional(),focus:m.boolean().optional(),active:m.boolean().optional(),disabled:m.boolean().optional()})({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",outline:"none",overflow:"hidden",border:0,margin:0,cursor:"pointer",userSelect:"none",gap:8,h:40,px:24,rounded:20,pos:"relative",zIndex:1,bgColor:"sys.secondary-container",_disabled:{cursor:"not-allowed",shadow:"0",_hover:{shadow:"0"},color:V("sys.on-surface",F(.38)),bgColor:V("sys.on-surface",F(.12))},_before:{content:'""',pos:"absolute",top:0,right:0,left:0,bottom:0,bgColor:"rgba(0,0,0,0)",transitionDuration:"md4",transitionTimingFunction:"standard"},elevation:"0",_hover:{elevation:"1",_before:{bgColor:V("sys.on-secondary-container",F(.08))}},_active:{_before:{bgColor:V("sys.on-secondary-container",F(.12))}},_focus:{_before:{bgColor:V("sys.on-secondary-container",F(.12))}}}),on=G(()=>{const t=Re(ke().options.routes,o=>o.path.split("/")[1]);return()=>_(k,{sx:{py:16,px:0,textTransform:"capitalize"},children:Z(t,(o,e)=>{var c;const[i,s]=oe(o,d=>d.path===`/${e}`);return j(k,{sx:{px:8},children:[i[0]?_(A,{component:ee,sx:{width:"100%",justifyContent:"flex-start"},activeClass:"active",to:(c=i[0])==null?void 0:c.path,children:e}):_(A,{sx:{width:"100%",justifyContent:"flex-start"},children:e}),_(k,{sx:{pl:16},children:Z(s,d=>{var p;return _(A,{component:ee,activeClass:"active",to:d.path,sx:{width:"100%",justifyContent:"flex-start"},children:(p=ze(d.path.split("/")))==null?void 0:p.replaceAll("-"," ")},d.name)})})]},e)})})}),rn=G((n,t)=>{let{slots:o}=t;const e=ae("light");return()=>j(k,{"data-theme":e.value,sx:{display:"flex",height:"100vh",width:"100vw",containerStyle:"sys.surface"},children:[j(k,{sx:{display:"flex",flexDirection:"column",width:"280px",height:"100vh",borderRightRadius:"lg",overflowY:"auto",containerStyle:"sys.surface-container-low",elevation:"0",_hover:{elevation:"2"}},children:[_(k,{sx:{flex:1},children:_(on,{})}),_(k,{sx:{p:16},children:_(tn,{sx:{width:"100%"},onClick:()=>{e.value=e.value=="light"?"dark":"light"},children:e.value=="light"?"浅色主题":"深色主题"})})]}),_(k,{sx:{flex:1,overflow:"auto"},children:o})]})}),an=G(()=>()=>j(re,{children:[_(Le,{}),_(He,{styles:Oe}),_(rn,{children:_($e,{})})]})),sn=()=>R(()=>import("./nodepkg-vuematerial-example.a0a8573d.chunk.js"),["static/nodepkg-vuematerial-example.a0a8573d.chunk.js","static/lib-nodepkg-vuekit.2b3424f6.chunk.js","static/lib-webapp-vuekit.94351f5a.chunk.js","static/lib-nodepkg-vueuikit.f42f2ba8.chunk.js"]),ln=()=>R(()=>import("./nodepkg-vueuikit-example.dff0a0eb.chunk.js"),["static/nodepkg-vueuikit-example.dff0a0eb.chunk.js","static/lib-nodepkg-vuekit.2b3424f6.chunk.js","static/lib-nodepkg-vueuikit.f42f2ba8.chunk.js","static/lib-webapp-vuekit.94351f5a.chunk.js"]),dn=()=>R(()=>import("./nodepkg-vueuikit-example-__fixtures__-popper.6156a5ef.chunk.js"),["static/nodepkg-vueuikit-example-__fixtures__-popper.6156a5ef.chunk.js","static/lib-nodepkg-vuekit.2b3424f6.chunk.js","static/lib-webapp-vuekit.94351f5a.chunk.js","static/lib-nodepkg-vueuikit.f42f2ba8.chunk.js"]),cn=()=>R(()=>import("./nodepkg-vueuikit-example.d9033feb.chunk.js"),["static/nodepkg-vueuikit-example.d9033feb.chunk.js","static/lib-nodepkg-vuekit.2b3424f6.chunk.js"]),un=()=>R(()=>import("./nodepkg-vueuikit-example.b6fd6ece.chunk.js"),["static/nodepkg-vueuikit-example.b6fd6ece.chunk.js","static/lib-nodepkg-vuekit.2b3424f6.chunk.js","static/lib-nodepkg-vueuikit.f42f2ba8.chunk.js","static/lib-webapp-vuekit.94351f5a.chunk.js"]),pn=()=>R(()=>import("./nodepkg-vueuikit-example.e185b5e1.chunk.js"),["static/nodepkg-vueuikit-example.e185b5e1.chunk.js","static/lib-nodepkg-vuekit.2b3424f6.chunk.js","static/lib-nodepkg-vueuikit.f42f2ba8.chunk.js","static/lib-webapp-vuekit.94351f5a.chunk.js"]),mn=()=>R(()=>import("./nodepkg-vuekit-example-__fixtures__-usage.69e74a30.chunk.js"),["static/nodepkg-vuekit-example-__fixtures__-usage.69e74a30.chunk.js","static/lib-nodepkg-vuekit.2b3424f6.chunk.js","static/lib-webapp-vuekit.94351f5a.chunk.js","static/lib-nodepkg-vueuikit.f42f2ba8.chunk.js"]),gn=()=>R(()=>import("./nodepkg-vuekit-example-__fixtures__-usage.ecfabcf6.chunk.js"),["static/nodepkg-vuekit-example-__fixtures__-usage.ecfabcf6.chunk.js","static/lib-nodepkg-vuekit.2b3424f6.chunk.js","static/lib-webapp-vuekit.94351f5a.chunk.js","static/lib-nodepkg-vueuikit.f42f2ba8.chunk.js"]),ge=[{name:"vuematerial-buttons",path:"/vuematerial/buttons",component:sn,props:!0},{name:"vueuikit-typography",path:"/vueuikit/typography",component:ln,props:!0},{name:"vueuikit-popper",path:"/vueuikit/popper",component:dn,props:!0},{name:"vueuikit",path:"/vueuikit",component:cn,props:!0},{name:"vueuikit-elevation",path:"/vueuikit/elevation",component:un,props:!0},{name:"vueuikit-color-scheme",path:"/vueuikit/color-scheme",component:pn,props:!0},{name:"vuekit-rx-in-vue",path:"/vuekit/rx-in-vue",component:mn,props:!0},{name:"vuekit",path:"/vuekit",component:gn,props:!0}];console.log(ge);var te;const hn=new URL(((te=document.querySelector("base"))==null?void 0:te.href)??"/"),fn=Ee({history:Ie(hn.pathname),routes:ge});Fe(an).use(fn).mount("#root");export{wn as E,Sn as F,kn as O,A as T,Cn as a};
