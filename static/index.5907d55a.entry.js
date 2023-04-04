import{_ as w}from"./lib-webapp-vuekit.c8a22a32.chunk.js";import{z as g,b as D,H as te,I as be,g as b,J as xe,n as x,F as oe,K as ye,m as re,j as F,o as ie,q as ae,w as _e,r as se,c as ve,d as Se,e as Ce,s as R,f as we,h as M,i as H,a as ke,k as le,l as N,L as Re,M as ze,N as K,u as A,R as Q,O as $e,P as Ie,Q as Ee,S as Te,U as Ve}from"./lib-nodepkg-vuekit.e4620464.chunk.js";import{s as V,v as h,a as f,C as Fe,b as k,T as B,S as Z,c as Pe,r as Ae,d as Be,e as je,i as Le,B as C,f as He,G as Oe}from"./lib-nodepkg-vueuikit.259bbead.chunk.js";const We=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`,_n=V("button",{hover:g.boolean().optional(),focus:g.boolean().optional(),active:g.boolean().optional(),disabled:g.boolean().optional()})({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",outline:"none",overflow:"hidden",border:0,margin:0,cursor:"pointer",userSelect:"none",gap:8,h:40,px:24,rounded:20,pos:"relative",elevation:"1",zIndex:1,containerStyle:"sys.primary",_disabled:{cursor:"not-allowed",shadow:"0",_hover:{shadow:"0"},color:h("sys.on-surface",f(.38)),bgColor:h("sys.on-surface",f(.12))},_before:{content:'""',pos:"absolute",top:0,right:0,left:0,bottom:0,bgColor:"rgba(0,0,0,0)",transitionDuration:"md4",transitionTimingFunction:"standard"},_hover:{shadow:"2",_before:{bgColor:h("white",f(.08))}},_active:{shadow:"2",_before:{bgColor:h("white",f(.12))}},_focus:{shadow:"2",_before:{bgColor:h("white",f(.12))}}}),vn=V("button",{hover:g.boolean().optional(),focus:g.boolean().optional(),active:g.boolean().optional(),disabled:g.boolean().optional()})({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",outline:"none",overflow:"hidden",border:0,margin:0,cursor:"pointer",userSelect:"none",gap:8,h:40,px:24,rounded:20,pos:"relative",elevation:"1",color:"sys.primary",zIndex:1,_disabled:{cursor:"not-allowed",shadow:"0",_hover:{shadow:"0"},color:h("sys.on-surface",f(.38)),bgColor:h("sys.on-surface",f(.12))},bgColor:"sys.surface-container-low",_active:{shadow:"2",bgColor:h("sys.primary",f(.12))},_focus:{shadow:"2",bgColor:h("sys.primary",f(.12))},_hover:{shadow:"2",bgColor:h("sys.primary",f(.08))}}),j=V("button",{hover:g.boolean().optional(),focus:g.boolean().optional(),active:g.boolean().optional(),disabled:g.boolean().optional()})({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",outline:"none",overflow:"hidden",border:0,margin:0,cursor:"pointer",userSelect:"none",gap:8,h:40,px:16,rounded:20,pos:"relative",zIndex:1,color:"sys.primary",_disabled:{cursor:"not-allowed",color:h("sys.on-surface",f(.38))},_before:{content:'""',pos:"absolute",top:0,right:0,left:0,bottom:0,bgColor:"rgba(0,0,0,0)",transitionDuration:"md4",transitionTimingFunction:"standard"},_hover:{_before:{bgColor:h("sys.primary",f(.08))}},_active:{_before:{bgColor:h("sys.primary",f(.12))}},_focus:{_before:{bgColor:h("sys.primary",f(.12))}}}),Sn=V("button",{hover:g.boolean().optional(),focus:g.boolean().optional(),active:g.boolean().optional(),disabled:g.boolean().optional()})({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",outline:"none",overflow:"hidden",border:0,margin:0,cursor:"pointer",userSelect:"none",gap:8,h:40,px:24,rounded:20,pos:"relative",zIndex:1,bgColor:"sys.secondary-container",_disabled:{cursor:"not-allowed",shadow:"0",_hover:{shadow:"0"},color:h("sys.on-surface",f(.38)),bgColor:h("sys.on-surface",f(.12))},_before:{content:'""',pos:"absolute",top:0,right:0,left:0,bottom:0,bgColor:"rgba(0,0,0,0)",transitionDuration:"md4",transitionTimingFunction:"standard"},elevation:"0",_hover:{elevation:"1",_before:{bgColor:h("sys.on-secondary-container",f(.08))}},_active:{_before:{bgColor:h("sys.on-secondary-container",f(.12))}},_focus:{_before:{bgColor:h("sys.on-secondary-container",f(.12))}}}),Cn=V("button",{hover:g.boolean().optional(),focus:g.boolean().optional(),active:g.boolean().optional(),disabled:g.boolean().optional()})({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",overflow:"hidden",outline:0,margin:0,cursor:"pointer",userSelect:"none",gap:8,h:40,px:16,rounded:20,pos:"relative",zIndex:1,border:"1px solid",borderColor:"sys.outline",color:"sys.primary",_disabled:{cursor:"not-allowed",color:h("sys.on-surface",f(.38))},_before:{content:'""',pos:"absolute",top:0,right:0,left:0,bottom:0,bgColor:"rgba(0,0,0,0)",transitionDuration:"md4",transitionTimingFunction:"standard"},_hover:{_before:{bgColor:h("sys.primary",f(.08))}},_active:{_before:{bgColor:h("sys.primary",f(.12))}},_focus:{_before:{bgColor:h("sys.primary",f(.12))}}}),De=(t,n)=>new Proxy(t,{get(o,e){return n[e]??o[e]}});function U(t,n){const e=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{})??n,r=n??t,l=D(t)?{}:t,[d,i]=te(Object.keys(l),m=>/^on[A-Z]/.test(m));return be({...e,...{props:i.reduce((m,y)=>{const z=l[y];return{...m,[y]:{default:()=>z.parse(void 0),validator:$=>z.safeParse($).success}}},{}),emits:d.map(m=>b(m.slice(2)))},setup:(m,y)=>r(m,y)})}function ce(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=Symbol(n.name??"");let e;const r=()=>e??(e=D(t)?t():t),l=U({value:g.custom().optional()},(d,i)=>{let{value:u}=d,{slots:m}=i;return xe(o,u??r()),()=>{var y;return x(oe,{children:(y=m.default)==null?void 0:y.call(m)})}},{...n,name:`Provider(${n.name??""})`});return De(l,{use:()=>ye(o,r,!0)})}function G(){return new Proxy({},{get(t,n){return n}})}const p=G(),ee={paddingX:[p.paddingLeft,p.paddingRight],paddingY:[p.paddingTop,p.paddingBottom],marginX:[p.marginInlineStart,p.marginInlineEnd],marginY:[p.marginTop,p.marginBottom],borderX:[p.borderLeft,p.borderRight],borderY:[p.borderTop,p.borderBottom],borderTopRadius:[p.borderTopLeftRadius,p.borderTopRightRadius],borderBottomRadius:[p.borderBottomLeftRadius,p.borderBottomRightRadius],borderRightRadius:[p.borderTopRightRadius,p.borderBottomRightRadius],borderLeftRadius:[p.borderTopLeftRadius,p.borderBottomLeftRadius],backgroundGradient:[p.backgroundImage],boxSize:[p.width,p.height]},c=G(),O={font:c.fontFamily,shadow:c.boxShadow,rounded:c.borderRadius,roundedTop:c.borderTopRadius,roundedBottom:c.borderBottomRadius,roundedLeft:c.borderLeftRadius,roundedRight:c.borderRightRadius,bg:c.background,bgImage:c.backgroundImage,bgSize:c.backgroundSize,bgPosition:c.backgroundPosition,bgRepeat:c.backgroundRepeat,bgAttachment:c.backgroundAttachment,bgColor:c.backgroundColor,bgGradient:c.backgroundGradient,bgClip:c.backgroundClip,pos:c.position,p:c.padding,pt:c.paddingTop,pr:c.paddingRight,pl:c.paddingLeft,pb:c.paddingBottom,ps:c.paddingInlineStart,pe:c.paddingInlineEnd,px:c.paddingX,py:c.paddingY,m:c.margin,mt:c.marginTop,mr:c.marginRight,ml:c.marginLeft,mb:c.marginBottom,ms:c.marginInlineStart,me:c.marginInlineEnd,mx:c.marginX,my:c.marginY,w:c.width,minW:c.minWidth,maxW:c.maxWidth,h:c.height,minH:c.minHeight,maxH:c.maxHeight},s=G(),_=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];const e=[...n];for(const r of n)O[r]&&e.push(O[r]);return e},Me={_:"&",_before:"&::before",_after:"&::after",_empty:"&:empty",_hover:"&:hover, &[data-hover], &.hover",_active:"&:active, &[data-active], &.active",_focus:"&:focus, &[data-focus], &.focus",_disabled:"&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled], &.disabled",_highlighted:"&[data-highlighted]",_focusWithin:"&:focus-within",_focusVisible:"&:focus-visible, &[data-focus-visible]",_readOnly:"&[aria-readonly=true], &[readonly], &[data-readonly], &.readonly",_expanded:"&[aria-expanded=true], &[data-expanded], &.expanded",_checked:"&[aria-checked=true], &[data-checked], &.checked",_grabbed:"&[aria-grabbed=true], &[data-grabbed], &.grabbed",_pressed:"&[aria-pressed=true], &[data-pressed], &.pressed",_invalid:"&[aria-invalid=true], &[data-invalid], &.invalid",_valid:"&[data-valid], &[data-state=valid], &.valid",_loading:"&[data-loading], &[aria-busy=true], &.loading",_selected:"&[aria-selected=true], &[data-selected], &.selected",_hidden:"&[hidden], &[data-hidden], &.hidden",_autofill:"&:-webkit-autofill",_even:"&:nth-of-type(even)",_odd:"&:nth-of-type(odd)",_first:"&:first-of-type",_firstLetter:"&::first-letter",_last:"&:last-of-type",_notFirst:"&:not(:first-of-type)",_notLast:"&:not(:last-of-type)",_visited:"&:visited",_activeLink:"&[aria-current=page]",_activeStep:"&[aria-current=step]",_indeterminate:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",_placeholder:"&::placeholder",_placeholderShown:"&:placeholder-shown",_fullScreen:"&:fullscreen",_selection:"&::selection",_rtl:"[dir=rtl] &, &[dir=rtl]",_ltr:"[dir=ltr] &, &[dir=ltr]",_dark:"&[data-theme=dark]",_light:"&[data-theme=light]"};var W=(t=>(t[t.var=0]="var",t[t.mixin=1]="mixin",t))(W||{});class a{static create(n,o){let{values:e,on:r,transform:l}=o;return{type:n,values:e,on:r,transform:l,__Tokens:void 0,__ValueType:void 0,__CSSTokens:void 0}}static color(n){return a.create(0,{values:n,on:_(s.color,s.bgColor,s.outlineColor,s.borderColor,s.accentColor,s.fill,s.stroke),transform:o=>({default:`rgb(${o[0]}, ${o[1]}, ${o[2]})`,rgb:`${o[0]} ${o[1]} ${o[2]}`}),fallback:""})}static space(n){return a.create(0,{values:n,on:_(s.gap,s.rowGap,s.columnGap,s.top,s.right,s.bottom,s.left,s.m,s.ms,s.me,s.mt,s.mr,s.mb,s.ml,s.mx,s.my,s.p,s.ps,s.pe,s.pt,s.pr,s.pb,s.pl,s.px,s.py)})}static boxSize(n){return a.create(0,{values:n,on:_(s.w,s.minW,s.maxW,s.h,s.minH,s.maxH,s.boxSize),fallback:0})}static fontSize(n){return a.create(0,{values:n,on:_(s.fontSize),fallback:0})}static lineHeight(n){return a.create(0,{values:n,on:_(s.lineHeight),fallback:0})}static rounded(n){return a.create(0,{values:n,fallback:0,on:_(s.rounded,s.roundedTop,s.roundedBottom,s.roundedLeft,s.roundedRight,p.borderTopLeftRadius,p.borderTopRightRadius,p.borderBottomLeftRadius,p.borderBottomRightRadius,p.borderTopRightRadius,p.borderBottomRightRadius,p.borderTopLeftRadius,p.borderBottomLeftRadius)})}static transitionTimingFunction(n){return a.create(0,{values:n,on:_(s.transitionTimingFunction)})}static transitionDuration(n){return a.create(0,{values:n,on:_(s.transitionDuration),transform:o=>`${o}ms`})}static font(n){return a.create(0,{values:n,on:_(s.fontFamily)})}static fontWeight(n){return a.create(0,{values:n,on:_(s.fontWeight)})}static letterSpacing(n){return a.create(0,{values:n,on:_(s.letterSpacing)})}static shadow(n){return a.create(0,{values:n,on:_(s.shadow)})}static customMixin(n,o){return a.create(1,{values:o,on:[n]})}static mixin(n){return{...n,__mixin:!0}}}const Y=t=>H(t)&&!ke(t),T=class{get tokens(){return le(this._values)}get(t,n,o){const e=this._values[t];return H(e)?o?e[n]:e[n]??e[T.defaultMode]:o?n===T.defaultMode?e:void 0:e}use(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(this._cssVarRefs[t])return n?`${this._cssVarRefs[t]}`:`var(${this._cssVarRefs[t]})`}constructor(t,{cssVar:n,transformFallback:o}){this.__Tokens=void 0,this._values={},this._cssVarRefs={},T.walkValues(t.values,(e,r)=>{const l=r.join("."),d=(i,u)=>{const m=t.transform?t.transform(i):o(i);if(H(m))for(const y in m)u(m[y],y==="default"?"":y);else u(m,"")};if(R(this._cssVarRefs,[l],n(l)),Y(e))for(const i in e)d(e[i],(u,m)=>{R(this._values,[`${l}${m?`/${m}`:""}`,i],u)});else d(e,(i,u)=>{R(this._values,[`${l}${u?`/${u}`:""}`],i)})})}};let X=T;X.defaultMode="_default";X.walkValues=function(t,n){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];for(const e in t){const r=t[e];if(Y(r)){if(M(r,"_default")){n(r,[...o,e]);continue}T.walkValues(r,n,[...o,e]);continue}n(r,[...o,e])}};const q=class{get tokens(){return le(this._values)}get(t){return this._values[t]}constructor(t){this._values={},q.walkValues(t.values,(n,o)=>{const e=o.join(".");R(this._values,[e],ie(n,"__mixin"))})}};let de=q;de.walkValues=function(t,n){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];for(const e in t){const r=t[e];if(Y(r)){if(M(r,"__mixin")){n(r,[...o,e]);continue}q.walkValues(r,n,[...o,e]);continue}n(r,[...o,e])}};const I=t=>n=>`rgba(var(${n}-rgb) / ${t})`,Ne=t=>D(t)&&M(t,"token");function E(t,n){return Object.assign(o=>n(o),{toString:()=>t,token:t})}const ue=t=>t.reduce((n,o)=>({...n,[o]:!0}),{}),P=class{static create(t,n){return new P(t,n)}cssVar(t,n){return`--${this.varPrefix}-${b(`${t}.${n}`)}`}get rootCSSVars(){return this.unstable_sx(this.cssVars)}unstable_sx(t){const n={};for(const o in t)this.defaultProcessor.process(n,o,t[o]);return n}unstable_css(t,n){let{isStringTag:o=!0,withoutScoping:e=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=n??{},l=r.__emotion_styles??je([this.unstable_sx(n)],t==null?void 0:t.registered,{});return e?t.insert("",l,t.sheet,!0):Le(t,l,o),r.__emotion_styles=l,`${t.key}-${l.name}`}constructor(t,n={}){this.cssVars={},this.tokens={},this.propValues={},this.mixins={},this.dp=o=>o===0?0:`calc(${o} * var(${this.cssVar("space","dp")}))`,this.transformFallback=(o,e)=>P.propsCanBaseDp[o]&&ve(e)?P.propsCanPercent[o]&&Math.abs(e)<1?`${e*100}%`:this.dp(e):e,this.processValue=(o,e)=>{var r,l;if(Ne(e)){const d=(r=this.propValues[o])==null?void 0:r.use(e.token,!0);return d?e(d):void 0}return((l=this.propValues[o])==null?void 0:l.use(e))??this.transformFallback(o,e)},this.token=new Proxy({},{get:(o,e)=>{var r,l;if(this.tokens[e])return Object.assign(d=>{var i;return(i=this.tokens[e])==null?void 0:i.get(d,`_${this.mode}`)},{tokens:(r=this.tokens[e])==null?void 0:r.tokens});if(this.mixins[e])return Object.assign(d=>{var i;return(i=this.mixins[e])==null?void 0:i.get(d)},{tokens:(l=this.mixins[e])==null?void 0:l.tokens})}}),this.defaultProcessor={process:(o,e,r)=>{var l;if(this.mixins[e]){const d=(l=this.mixins[e])==null?void 0:l.get(r);if(d)for(const i in d)this.defaultProcessor.process(o,i,d[i]);return}if(Se(r)){e=Me[e]??e,o[e]=Ce(o[e]??{},this.unstable_sx(r));return}if(e=O[e]??e,ee[e]){for(const d of ee[e])o[d]=this.processValue(d,r);return}o[e]=this.processValue(e,r)}},this.varPrefix=n.varPrefix??"vk",this.mode=n.mode??"light",R(this.cssVars,[this.cssVar("space","dp")],"0.1rem");for(let o in t){const e=t[o];if(e.type==W.var){const r=new X(e,{cssVar:l=>this.cssVar(o,l),transformFallback:l=>this.transformFallback(e.on[0],l)});this.tokens[o]=r;for(const l of e.on)this.propValues[l]=r;for(const l of r.tokens)for(const d of["light","dark"]){const i=d===this.mode?"_default":`_${d}`,u=r.get(l,i,!0);we(u)||(i==="_default"?R(this.cssVars,[this.cssVar(o,l)],u):R(this.cssVars,[i,this.cssVar(o,l)],u))}continue}if(e.type==W.mixin){const r=new de(e);for(const l of e.on)this.mixins[l]=r}}}};let J=P;J.propsCanPercent=ue([...a.boxSize({}).on]);J.propsCanBaseDp=ue([...a.boxSize({}).on,...a.space({}).on,...a.fontSize({}).on,...a.letterSpacing({}).on,...a.lineHeight({}).on,...a.rounded({}).on]);const Ue={shadow:a.shadow({0:{_default:"0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)",_dark:"0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)"},1:{_default:"0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",_dark:"0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)"},2:{_default:"0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",_dark:"0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)"},3:{_default:"0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",_dark:"0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"},4:{_default:"0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",_dark:"0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"},5:{_default:"0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",_dark:"0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)"}}),elevation:a.customMixin("elevation",{0:a.mixin({transitionDuration:"md4",transitionTimingFunction:"standard",shadow:"0",_hover:{shadow:"1"}}),1:a.mixin({transitionDuration:"md4",transitionTimingFunction:"standard",shadow:"1",_hover:{shadow:"2"}}),2:a.mixin({transitionDuration:"md4",transitionTimingFunction:"standard",shadow:"2",_hover:{shadow:"3"}}),3:a.mixin({transitionDuration:"md4",transitionTimingFunction:"standard",shadow:"3",_hover:{shadow:"4"}}),4:a.mixin({transitionDuration:"md4",transitionTimingFunction:"standard",shadow:"4",_hover:{shadow:"5"}})})},Ge={font:a.font({brand:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),plain:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),code:["'Lucida Console'","Consolas","Monaco","'Andale Mono'","'Ubuntu Mono'","monospace"].join(",")}),fontWeight:a.fontWeight({regular:400,medium:500,bold:700}),textStyle:a.customMixin("textStyle",{sys:{"display-large":a.mixin({lineHeight:64,fontSize:57,letterSpacing:-.25,fontWeight:"regular",font:"brand"}),"display-medium":a.mixin({lineHeight:52,fontSize:45,letterSpacing:0,fontWeight:"regular",font:"brand"}),"display-small":a.mixin({lineHeight:44,fontSize:36,letterSpacing:0,fontWeight:"regular",font:"brand"}),"headline-large":a.mixin({lineHeight:40,fontSize:32,letterSpacing:0,fontWeight:"regular",font:"brand"}),"headline-medium":a.mixin({lineHeight:36,fontSize:28,letterSpacing:0,fontWeight:"regular",font:"brand"}),"headline-small":a.mixin({lineHeight:32,fontSize:24,letterSpacing:0,fontWeight:"regular",font:"plain"}),"title-large":a.mixin({lineHeight:28,fontSize:22,letterSpacing:0,fontWeight:"regular",font:"brand"}),"title-medium":a.mixin({lineHeight:24,fontSize:16,letterSpacing:.15,fontWeight:"medium",font:"plain"}),"title-small":a.mixin({lineHeight:20,fontSize:14,letterSpacing:.1,fontWeight:"medium",font:"plain"}),"label-large":a.mixin({lineHeight:20,fontSize:14,letterSpacing:.1,fontWeight:"medium",font:"plain"}),"label-medium":a.mixin({lineHeight:16,fontSize:12,letterSpacing:.5,fontWeight:"medium",font:"plain"}),"label-small":a.mixin({lineHeight:16,fontSize:11,letterSpacing:.5,fontWeight:"medium",font:"plain"}),"body-large":a.mixin({lineHeight:24,fontSize:16,letterSpacing:.5,fontWeight:"regular",font:"plain"}),"body-medium":a.mixin({lineHeight:20,fontSize:14,letterSpacing:.25,fontWeight:"regular",font:"plain"}),"body-small":a.mixin({lineHeight:16,fontSize:12,letterSpacing:.4,fontWeight:"regular",font:"plain"})}})},Ye={0:!0,10:!0,20:!0,30:!0,40:!0,50:!0,60:!0,70:!0,80:!0,90:!0,95:!0,100:!0},L=t=>{const n=Ae(t);return[n.r,n.g,n.b]},Xe=function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const o={};for(const e in t){const r=t[e];o[F(e)]=r.tone(n?80:40),o[F(`on-${e}`)]=r.tone(n?20:100),o[F(`${e}-container`)]=r.tone(n?30:90),o[F(`on-${e}-container`)]=r.tone(n?90:10)}return o},qe=t=>({primary:!0,secondary:!0,tertiary:!0,error:!0})[t],pe=class{getThemeColors(t){return{...ie((t?Z.darkFromCorePalette:Z.lightFromCorePalette)(this).toJSON(),["background","onBackground"]),...Xe(this.ext,t),surfaceDim:this.n1.tone(t?6:87),surfaceBright:this.n1.tone(t?24:98),surfaceContainerLowest:this.n1.tone(t?4:100),surfaceContainerLow:this.n1.tone(t?10:96),surfaceContainer:this.n1.tone(t?12:94),surfaceContainerHigh:this.n1.tone(t?17:92),surfaceContainerHighest:this.n1.tone(t?22:90)}}toDesignTokens(){const t={},n={},o=this.getThemeColors(!1),e=this.getThemeColors(!0);for(let i in o)if(t[`${b(i)}`]={_default:L(o[i]),_dark:L(e[i])},qe(i)&&(n[`${b(i)}`]=a.mixin({bgColor:`sys.${b(i)}`,color:`sys.on-${b(i)}`,fill:`sys.on-${b(i)}`}),n[`${b(i)}-container`]=a.mixin({bgColor:`sys.${b(i)}-container`,color:`sys.on-${b(i)}-container`,fill:`sys.on-${b(i)}-container`})),i.startsWith("surface")){if(i.includes("container")){n[`${b(i)}`]=a.mixin({bgColor:`sys.${b(i)}`,color:"sys.on-surface",fill:"sys.on-surface"});continue}n[`${b(i)}`]=a.mixin({bgColor:`sys.${b(i)}`,color:"sys.on-surface",fill:"sys.on-surface"}),n[`on-${b(i)}`]=a.mixin({bgColor:`sys.on-${b(i)}`,color:"sys.inverse-on-surface",fill:"sys.inverse-on-surface"})}const r=i=>Object.keys(Ye).reduce((u,m)=>({...u,[m]:L(i.tone(parseInt(m)))}),{});return{color:a.color({...re(this.ext,i=>r(i)),primary:r(this.a1),secondary:r(this.a2),tertiary:r(this.a3),neutral:r(this.n1),neutralVariant:r(this.n2),error:r(this.error),white:[255,255,255],black:[0,0,0],sys:t}),containerStyle:a.customMixin("containerStyle",{sys:n})}}constructor(t,n,o,e,r,l,d){this.a1=t,this.a2=n,this.a3=o,this.n1=e,this.n2=r,this.error=l,this.ext=d}};let me=pe;me.fromColors=t=>{const{primary:n,secondary:o,tertiary:e,neutral:r,neutralVariant:l,error:d,...i}=t,u=Fe.contentFromColors({primary:k(n),secondary:o?k(o):void 0,tertiary:e?k(e):void 0,error:d?k(d):void 0});return r&&(u.n1=B.fromHueAndChroma(k(r),4)),l&&(u.n2=B.fromHueAndChroma(k(l),8)),new pe(u.a1,u.a2,u.a3,u.n1,u.n2,u.error,re(i,m=>B.fromInt(k(m))))};const S=(t,n,o,e)=>Object.assign(Pe(t,n,o,e),{toString(){return`cubic-bezier(${t}, ${n}, ${o}, ${e})`}}),v={duration:{sm1:50,sm2:100,sm3:150,sm4:200,md1:250,md2:300,md3:350,md4:400,lg1:450,lg2:500,lg3:550,lg4:600,xl1:700,xl2:800,xl3:900,xl4:1e3},easing:{linear:S(0,0,1,1),standard:Object.assign(S(.2,0,0,1),{accelerate:S(.3,0,1,1),decelerate:S(0,0,0,1)}),emphasized:Object.assign(S(.2,0,0,1),{accelerate:S(.3,0,.8,.15),decelerate:S(.05,.7,.1,1)}),legacy:Object.assign(S(.4,0,.2,1),{decelerate:S(0,0,.2,1),accelerate:S(.4,0,1,1)})}},Je={transitionDuration:a.transitionDuration(v.duration),transitionTimingFunction:a.transitionTimingFunction({linear:v.easing.linear.toString(),standard:v.easing.standard.toString(),"standard-accelerate":v.easing.standard.accelerate.toString(),"standard-decelerate":v.easing.standard.decelerate.toString(),emphasized:v.easing.emphasized.toString(),"emphasized-decelerate":v.easing.emphasized.decelerate.toString(),"emphasized-accelerate":v.easing.emphasized.accelerate.toString(),legacy:v.easing.legacy.toString(),"legacy-decelerate":v.easing.legacy.decelerate.toString(),"legacy-accelerate":v.easing.legacy.accelerate.toString()})},Ke=a.rounded({xs:4,sm:8,md:12,lg:16,xl:28}),Qe={...me.fromColors({primary:"#6750A4",secondary:"#625B71",tertiary:"#7D5260",error:"#B3261E",pink:"#ff00ff",green:"#4caf50",yellow:"#ffcd38",orange:"#ff9800",blue:"#03a9f4"}).toDesignTokens(),...Ge,...Je,...Ue,rounded:Ke},Ze=J.create(Qe,{varPrefix:"vk"}),ge=ce(Ze,{name:"Theme"}),he=ce(Be({key:"css"}),{name:"Cache"}),en=U({component:g.custom(),sx:g.custom()},(t,n)=>{let{component:o,sx:e,...r}=t,{slots:l}=n;const d=o??"div",i=ge.use(),u=he.use(),m=se(),y=()=>{e&&(m.value=i.unstable_css(u,e,{isStringTag:ae(d)}))};return _e(()=>e,y),y(),()=>x(d,{...r,class:m.value,children:l})});function nn(t,n){return o=>U({...n,sx:g.custom().optional(),component:g.custom().default(t).optional()},(e,r)=>{let{slots:l}=r;const d=ge.use(),i=he.use(),u=d.unstable_css(i,o,{isStringTag:ae(e.component)});return()=>{const{component:m,sx:y}=e,z={};for(const $ in n)e[$]&&(z[`data-${$}`]=e[$]);return x(en,{...z,component:m,sx:y,class:u,children:l})}})}const tn=nn("button",{hover:g.boolean().optional(),focus:g.boolean().optional(),active:g.boolean().optional(),disabled:g.boolean().optional()})({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",outline:"none",overflow:"hidden",border:0,margin:0,cursor:"pointer",userSelect:"none",gap:8,h:40,px:24,rounded:20,pos:"relative",zIndex:1,bgColor:"sys.secondary-container",_disabled:{cursor:"not-allowed",shadow:"0",_hover:{shadow:"0"},color:E("sys.on-surface",I(.38)),bgColor:E("sys.on-surface",I(.12))},_before:{content:'""',pos:"absolute",top:0,right:0,left:0,bottom:0,bgColor:"rgba(0,0,0,0)",transitionDuration:"md4",transitionTimingFunction:"standard"},elevation:"0",_hover:{elevation:"1",_before:{bgColor:E("sys.on-secondary-container",I(.08))}},_active:{_before:{bgColor:E("sys.on-secondary-container",I(.12))}},_focus:{_before:{bgColor:E("sys.on-secondary-container",I(.12))}}}),on=N(()=>{const n=ze(Re().options.routes,o=>o.path.split("/")[1]);return()=>x(C,{sx:{py:16,px:0,textTransform:"capitalize"},children:K(n,(o,e)=>{var d;const[r,l]=te(o,i=>i.path===`/${e}`);return A(C,{sx:{px:8},children:[r[0]?x(j,{component:Q,sx:{width:"100%",justifyContent:"flex-start"},activeClass:"active",to:(d=r[0])==null?void 0:d.path,children:e}):x(j,{sx:{width:"100%",justifyContent:"flex-start"},children:e}),x(C,{sx:{pl:16},children:K(l,i=>{var u;return x(j,{component:Q,activeClass:"active",to:i.path,sx:{width:"100%",justifyContent:"flex-start"},children:(u=$e(i.path.split("/")))==null?void 0:u.replaceAll("-"," ")},i.name)})})]},e)})})}),rn=N((t,n)=>{let{slots:o}=n;const e=se("light");return()=>A(C,{"data-theme":e.value,sx:{display:"flex",height:"100vh",width:"100vw",containerStyle:"sys.surface"},children:[A(C,{sx:{display:"flex",flexDirection:"column",width:"280px",height:"100vh",borderRightRadius:"lg",overflowY:"auto",containerStyle:"sys.surface-container-low",elevation:"0",_hover:{elevation:"2"}},children:[x(C,{sx:{flex:1},children:x(on,{})}),x(C,{sx:{p:16},children:x(tn,{sx:{width:"100%"},onClick:()=>{e.value=e.value=="light"?"dark":"light"},children:e.value=="light"?"深色主题":"浅色主题"})})]}),x(C,{sx:{flex:1,overflow:"auto"},children:o})]})}),an=N(()=>()=>A(oe,{children:[x(He,{}),x(Oe,{styles:We}),x(rn,{children:x(Ie,{})})]})),sn=()=>w(()=>import("./nodepkg-vuematerial-example.f7b1fc79.chunk.js"),["static/nodepkg-vuematerial-example.f7b1fc79.chunk.js","static/lib-nodepkg-vuekit.e4620464.chunk.js","static/lib-webapp-vuekit.c8a22a32.chunk.js","static/lib-nodepkg-vueuikit.259bbead.chunk.js"]),ln=()=>w(()=>import("./nodepkg-vueuikit-example.677eb78f.chunk.js"),["static/nodepkg-vueuikit-example.677eb78f.chunk.js","static/lib-nodepkg-vuekit.e4620464.chunk.js","static/lib-nodepkg-vueuikit.259bbead.chunk.js","static/lib-webapp-vuekit.c8a22a32.chunk.js"]),cn=()=>w(()=>import("./nodepkg-vueuikit-example-__fixtures__-popper.175f94b1.chunk.js"),["static/nodepkg-vueuikit-example-__fixtures__-popper.175f94b1.chunk.js","static/lib-nodepkg-vuekit.e4620464.chunk.js","static/lib-webapp-vuekit.c8a22a32.chunk.js","static/lib-nodepkg-vueuikit.259bbead.chunk.js"]),dn=()=>w(()=>import("./nodepkg-vueuikit-example.ccd49554.chunk.js"),["static/nodepkg-vueuikit-example.ccd49554.chunk.js","static/lib-nodepkg-vuekit.e4620464.chunk.js"]),un=()=>w(()=>import("./nodepkg-vueuikit-example.319aed46.chunk.js"),["static/nodepkg-vueuikit-example.319aed46.chunk.js","static/lib-nodepkg-vuekit.e4620464.chunk.js","static/lib-nodepkg-vueuikit.259bbead.chunk.js","static/lib-webapp-vuekit.c8a22a32.chunk.js"]),pn=()=>w(()=>import("./nodepkg-vueuikit-example.14ea0645.chunk.js"),["static/nodepkg-vueuikit-example.14ea0645.chunk.js","static/lib-nodepkg-vuekit.e4620464.chunk.js","static/lib-nodepkg-vueuikit.259bbead.chunk.js","static/lib-webapp-vuekit.c8a22a32.chunk.js"]),mn=()=>w(()=>import("./nodepkg-vuekit-example-__fixtures__-usage.00796638.chunk.js"),["static/nodepkg-vuekit-example-__fixtures__-usage.00796638.chunk.js","static/lib-nodepkg-vuekit.e4620464.chunk.js","static/lib-webapp-vuekit.c8a22a32.chunk.js","static/lib-nodepkg-vueuikit.259bbead.chunk.js"]),gn=()=>w(()=>import("./nodepkg-vuekit-example-__fixtures__-usage.40990725.chunk.js"),["static/nodepkg-vuekit-example-__fixtures__-usage.40990725.chunk.js","static/lib-nodepkg-vuekit.e4620464.chunk.js","static/lib-webapp-vuekit.c8a22a32.chunk.js","static/lib-nodepkg-vueuikit.259bbead.chunk.js"]),fe=[{name:"vuematerial-buttons",path:"/vuematerial/buttons",component:sn,props:!0},{name:"vueuikit-typography",path:"/vueuikit/typography",component:ln,props:!0},{name:"vueuikit-popper",path:"/vueuikit/popper",component:cn,props:!0},{name:"vueuikit",path:"/vueuikit",component:dn,props:!0},{name:"vueuikit-elevation",path:"/vueuikit/elevation",component:un,props:!0},{name:"vueuikit-color-scheme",path:"/vueuikit/color-scheme",component:pn,props:!0},{name:"vuekit-rx-in-vue",path:"/vuekit/rx-in-vue",component:mn,props:!0},{name:"vuekit",path:"/vuekit",component:gn,props:!0}];console.log(fe);var ne;const hn=new URL(((ne=document.querySelector("base"))==null?void 0:ne.href)??"/"),fn=Ee({history:Te(hn.pathname),routes:fe});Ve(an).use(fn).mount("#root");export{vn as E,_n as F,Cn as O,j as T,Sn as a};
