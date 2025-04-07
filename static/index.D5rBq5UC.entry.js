var gn=Object.defineProperty;var yn=(s,n,t)=>n in s?gn(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t;var m=(s,n,t)=>yn(s,typeof n!="symbol"?n+"":n,t);import{c as j,_ as p,o as on,d as y,s as v,u as fn,e as ln,n as vn,r as F,f as D,a as rn,b as pn,h as xn,j as bn}from"./lib-nodepkg-typedef.CUo9Xxdg.chunk.js";import{f as i,v as _n,j as e,g as N,d as a,w as wn,R as Cn,x as H,y as jn,z as Sn,A as On,r as V,s as dn,F as u,B as _,C as w,D as X,e as Pn,a as $n,o as In,h as Tn}from"./lib-nodepkg-vuekit.BNqaAJVf.chunk.js";import{a as h,I as S,T as A,b,D as B,c as M,M as J,L as C,F as un,O as Dn,d as En,E as Bn,e as Mn}from"./lib-nodepkg-vuematerial.BD4qh4cn.chunk.js";import{e as zn,f as Rn,g as Vn,C as O,D as L,h as G,i as T,j as mn,k as An}from"./webapp-vuekit-layout.BxNW0wFi.chunk.js";import{B as c,C as Ln,c as Fn,G as Xn,T as E,e as Un,f as I,g as Wn,s as hn,v as z,b as R,a as Hn,P as U,d as Jn,t as $}from"./lib-nodepkg-vueuikit.D4KNpCNM.chunk.js";import{v as Gn,w as g,p as qn,l as Yn,x as Zn}from"./vendor-innoai-tech-lodash.Dlm2YQgM.chunk.js";import{c as Qn,_ as Kn}from"./webapp-vuekit-page.DfcoC9JU.chunk.js";import{J as ne,a as ee,b as ae,c as se}from"./lib-nodepkg-jsoneditor.C5W3Md6d.chunk.js";import{t as te,g as ce}from"./vendor-rxjs.Bjk7X9ON.chunk.js";import{M as q}from"./lib-nodepkg-vuemarkdown.BGVWTXm3.chunk.js";const oe=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

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
`,le=i(()=>{const s=_n(),n=Gn(s.options.routes.filter(t=>t.path!=="/"),t=>t.path.split("/")[1]);return()=>e(c,{sx:{py:16,px:0,textTransform:"capitalize"},children:g(n,(t,l)=>{var d;const[o,r]=qn(t,k=>k.path===`/${l}`);return a(c,{sx:{px:8},children:[o[0]?e(b,{component:H,sx:{width:"100%",justifyContent:"flex-start"},activeClass:"active",to:(d=o[0])==null?void 0:d.path,children:l}):e(b,{sx:{width:"100%",justifyContent:"flex-start"},children:l}),e(c,{sx:{pl:16},children:g(r,k=>{var P;return e(b,{component:H,activeClass:"active",to:k.path,sx:{width:"100%",justifyContent:"flex-start"},children:(P=Yn(k.path.split("/")))==null?void 0:P.replaceAll("-"," ")},k.name)})})]},l)})})}),ie=i({$default:j().optional()},(s,{slots:n})=>{const t=N("light");return()=>{var l;return a(c,{"data-theme":t.value,sx:{display:"flex",height:"100vh",width:"100vw",containerStyle:"sys.surface"},children:[a(c,{sx:{display:"flex",flexDirection:"column",width:"280px",height:"100vh",borderRightRadius:"lg",overflowY:"auto",containerStyle:"sys.surface-container-low",elevation:"0",_hover:{elevation:"2"}},children:[e(c,{sx:{flex:1},children:e(le,{})}),a(c,{sx:{p:16,display:"flex",justifyContent:"flex-end"},children:[e(S,{component:"a",target:"_blank",sx:{color:"sys.on-surface-variant"},href:"//github.com/innoai-tech/vuekit",children:e(h,{path:zn})}),e(A,{title:`切换到${t.value==="light"?"深色模式":"浅色模式"}`,children:e(c,{component:S,"data-test":!0,sx:{color:"sys.on-surface-variant"},onClick:()=>{t.value=t.value==="light"?"dark":"light"},children:e(h,{path:t.value==="light"?Rn:Vn})})})]})]}),e(c,{sx:{flex:1,overflow:"auto"},children:e(O,{children:(l=n.default)==null?void 0:l.call(n)})})]})}}),re=i(()=>{const s=L.use(),n=Ln.use();return wn([()=>s.value.seed,()=>s.value.rules],([t,l])=>{s.next(o=>{o.theming=Un.create({...Wn,...I.fromColors(t).toDesignTokens(l)},{varPrefix:"vk"})})}),()=>{const t=s.value.theming,l=t.unstable_css(n,{":root":t.rootCSSVars});return e(L,{value:s,children:a(E,{value:t,children:[e(Fn,{}),e(Xn,{styles:oe}),e(ie,{children:e(Cn,{})})]},l.name)})}}),pe=()=>p(()=>Promise.resolve().then(()=>$e),void 0),de=()=>p(()=>Promise.resolve().then(()=>Te),void 0),ue=()=>p(()=>Promise.resolve().then(()=>Ee),void 0),me=()=>p(()=>Promise.resolve().then(()=>Ve),void 0),he=()=>p(()=>Promise.resolve().then(()=>Le),void 0),ke=()=>p(()=>Promise.resolve().then(()=>Xe),void 0),Ne=()=>p(()=>Promise.resolve().then(()=>He),void 0),ge=()=>p(()=>Promise.resolve().then(()=>Ge),void 0),ye=()=>p(()=>Promise.resolve().then(()=>Ye),void 0),fe=()=>p(()=>Promise.resolve().then(()=>Qe),void 0),ve=()=>p(()=>Promise.resolve().then(()=>ea),void 0),xe=()=>p(()=>Promise.resolve().then(()=>sa),void 0),be=()=>p(()=>Promise.resolve().then(()=>ia),void 0),_e=()=>p(()=>Promise.resolve().then(()=>ka),void 0),we=()=>p(()=>Promise.resolve().then(()=>va),void 0),Ce=()=>p(()=>Promise.resolve().then(()=>Sa),void 0),kn=[{name:"jsoneditor-jsoneditor",path:"/jsoneditor/jsoneditor",component:pe,props:!0},{name:"vuemarkdown-markdown",path:"/vuemarkdown/markdown",component:de,props:!0},{name:"vuematerial-overlays",path:"/vuematerial/overlays",component:ue,props:!0},{name:"vuematerial-icons",path:"/vuematerial/icons",component:me,props:!0},{name:"vuematerial-buttons",path:"/vuematerial/buttons",component:he,props:!0},{name:"vuematerial-textfields",path:"/vuematerial/textfields",component:ke,props:!0},{name:"vuematerial",path:"/vuematerial",component:Ne,props:!0},{name:"vueuikit-typography",path:"/vueuikit/typography",component:ge,props:!0},{name:"vueuikit-color-scheme",path:"/vueuikit/color-scheme",component:ye,props:!0},{name:"vueuikit-color-palette",path:"/vueuikit/color-palette",component:fe,props:!0},{name:"vueuikit-figma-tokens",path:"/vueuikit/figma-tokens",component:ve,props:!0},{name:"vueuikit-elevation",path:"/vueuikit/elevation",component:xe,props:!0},{name:"vueuikit",path:"/vueuikit",component:be,props:!0},{name:"vueuikit-popper",path:"/vueuikit/popper",component:_e,props:!0},{name:"vuekit-rx-in-vue",path:"/vuekit/rx-in-vue",component:we,props:!0},{name:"vuekit",path:"/vuekit",component:Ce,props:!0},{name:"index",path:"/",component:Object.assign(Qn,Kn),props:!0}];console.log(kn);var cn;const je=new URL(((cn=document.querySelector("base"))==null?void 0:cn.href)??"/"),Se=jn({history:Sn(je.pathname),routes:kn});On(re).use(Se).mount("#root");var Oe=Object.defineProperty,f=(s,n,t,l)=>{for(var o=void 0,r=s.length-1,d;r>=0;r--)(d=s[r])&&(o=d(n,t,o)||o);return o&&Oe(n,t,o),o},Nn=(s=>(s.A="A",s.B="B",s))(Nn||{});class W{constructor(){m(this,"name");m(this,"port")}}f([y({title:"名称"}),v()],W.prototype,"name");f([y({title:"端口号"}),fn(ln(),v())],W.prototype,"port");class x{constructor(){m(this,"kind");m(this,"name");m(this,"annotations");m(this,"seconds");m(this,"addresses");m(this,"ports");m(this,"manifests");m(this,"anyjson")}}f([y({title:"类型"}),vn(Nn)],x.prototype,"kind");f([y({title:"名称",description:"详细描述"}),v()],x.prototype,"name");f([y({title:"注解"}),F(v(),v())],x.prototype,"annotations");f([y({title:"秒数"}),ln(),D()],x.prototype,"seconds");f([y({title:"地址"}),rn(v()),D()],x.prototype,"addresses");f([y({title:"端口"}),rn(on(W))],x.prototype,"ports");f([y({title:"其他配置"}),F(v(),pn()),D()],x.prototype,"manifests");f([y({title:"任意类型"}),F(v(),pn()),D()],x.prototype,"anyjson");const Pe=i(()=>{const s=on(x),n=ne.of(s,{name:"name",annotations:{longtext:new Array(100).fill("longtext").join("")},ports:[],manifests:{x:{}},anyjson:{obj:{a:1},arr:["1","2","3"],nested:[{a:1},{a:2}]}});return V(n,te(t=>{const[l]=s.validate(t);if(l)for(const o of l.failures())n.setError(o.path,o.message);console.log(JSON.stringify(t,null,2))}),dn()),()=>e(O,{sx:{width:"100%",height:"100%"},children:e(ee,{value:n,children:e(ae,{})})})}),$e=Object.freeze(Object.defineProperty({__proto__:null,default:Pe},Symbol.toStringTag,{value:"Module"})),Y=hn("code")({containerStyle:"sys.surface-container",py:4,rounded:"xs"}),Ie=i(()=>()=>a(u,{children:[e(Y,{sx:{px:2},children:"123123"}),e(q,{text:"标题 1"}),e(q,{text:"`code`",components:{code:Y}})]})),Te=Object.freeze(Object.defineProperty({__proto__:null,default:Ie},Symbol.toStringTag,{value:"Module"})),De=i(()=>{const s=N(!1),n=N(!1),t=N(!1);return()=>e(O,{children:a(c,{sx:{display:"flex",flexDirection:"column",gap:8},children:[e(b,{onClick:()=>{n.value=!0},children:"Open Dialog"}),e(B,{isOpen:n.value,onClose:()=>{n.value=!1},children:a(M,{sx:{minH:"40vh"},children:[a(c,{sx:{display:"flex",alignItems:"center",px:16,textStyle:"sys.title-large"},children:[e(c,{sx:{flex:1},children:"我是对话框"}),e(S,{onClick:()=>{n.value=!1},children:e(h,{path:G})})]}),e(b,{onClick:()=>{t.value=!0},children:"Open Dialog In Dialog"}),e(B,{isOpen:t.value,onClose:()=>{t.value=!1},children:e(M,{sx:{minH:"40vh"},children:a(c,{sx:{display:"flex",alignItems:"center",px:16,textStyle:"sys.title-large"},children:[e(c,{sx:{flex:1},children:"我是对话框 2"}),e(S,{onClick:()=>{t.value=!1},children:e(h,{path:G})})]})})})]})}),e(A,{title:"Tooltip",children:e(b,{children:"Hover me"})}),e(A,{title:"Menu",children:e(J,{$menu:a(u,{children:[e(C,{children:"选项一"}),e(C,{onClick:()=>{s.value=!0},children:"选项二"}),e(B,{isOpen:s.value,onClose:()=>{s.value=!1},children:e(M,{sx:{minH:"40vh"},children:"我是对话框"})}),e(J,{placement:"right-start",$menu:a(u,{children:[e(C,{children:"选项三.1"}),e(C,{children:"选项三.2"})]}),children:e(C,{children:"选项三"})})]}),children:e(b,{children:"Menu"})})})]})})}),Ee=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"})),Be=i(()=>()=>e(h,{path:T})),Me=i(()=>()=>a(c,{sx:{display:"flex",gap:8},children:[e(S,{active:!0,onClick:()=>console.log(1),children:e(h,{path:T})}),a(un,{active:!1,children:["Send",e(h,{path:T,placement:"end"})]})]}));function Z(s){const n={a:"a",code:"code",codeblockd4735e3a:"codeblockd4735e3a",codeblocke7f6c011:"codeblocke7f6c011",div:"div",h3:"h3",p:"p",pre:"pre",span:"span",...s.components};return a(u,{children:[a(n.p,{children:["直接使用沿用 ",e(n.a,{href:"https://pictogrammers.com/library/mdi/",children:"mid"})]}),`
`,a(n.div,{"data-example":"",children:[e(n.div,{"data-example-container":"",children:e(n.codeblockd4735e3a,{})}),e(n.pre,{className:"language-tsx",children:a(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," component ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuekit"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," mdiSend ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@mdi/js"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ",e(n.span,{className:"token maybe-class-name",children:"Icon"})," ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuematerial"'}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword module",children:"default"})," ",e(n.span,{className:"token function",children:"component"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword control-flow",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Icon"})]})," ",e(n.span,{className:"token attr-name",children:"path"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),"mdiSend",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token punctuation",children:"/>"})]}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]}),`
`,e(n.h3,{children:"和 Button 一起使用"}),`
`,a(n.div,{"data-example":"",children:[e(n.div,{"data-example-container":"",children:e(n.codeblocke7f6c011,{})}),e(n.pre,{className:"language-tsx",children:a(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," component ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuekit"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," mdiSend ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@mdi/js"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ",e(n.span,{className:"token maybe-class-name",children:"Icon"})," ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuematerial"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ",e(n.span,{className:"token maybe-class-name",children:"IconButton"}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token maybe-class-name",children:"FilledButton"})," ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuematerial"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ",e(n.span,{className:"token maybe-class-name",children:"Box"})," ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vueuikit"'}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword module",children:"default"})," ",e(n.span,{className:"token function",children:"component"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword control-flow",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Box"})]})," ",e(n.span,{className:"token attr-name",children:"sx"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"})," display",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"flex"'}),e(n.span,{className:"token punctuation",children:","})," gap",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"8"})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"IconButton"})]})," ",e(n.span,{className:"token attr-name",children:"active"})," ",e(n.span,{className:"token attr-name",children:"onClick"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token console class-name",children:"console"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token method function property-access",children:"log"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token number",children:"1"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
        `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Icon"})]})," ",e(n.span,{className:"token attr-name",children:"path"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),"mdiSend",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token punctuation",children:"/>"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"IconButton"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"FilledButton"})]})," ",e(n.span,{className:"token attr-name",children:"active"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token boolean",children:"false"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
        Send
        `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Icon"})]})," ",e(n.span,{className:"token attr-name",children:"path"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),"mdiSend",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token attr-name",children:"placement"}),a(n.span,{className:"token attr-value",children:[e(n.span,{className:"token punctuation attr-equals",children:"="}),e(n.span,{className:"token punctuation",children:'"'}),"end",e(n.span,{className:"token punctuation",children:'"'})]})," ",e(n.span,{className:"token punctuation",children:"/>"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"FilledButton"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
    `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Box"})]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]})]})}function ze(s={}){const{wrapper:n}=s.components||{};return n?e(n,{...s,children:e(Z,{...s})}):Z(s)}const Re=_(()=>()=>w(ze,{components:{codeblockd4735e3a:Be,codeblocke7f6c011:Me}})),Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"})),Ae=i(()=>{const s={Enabled:{},Disabled:{disabled:!0},Hovered:{hover:!0},Focused:{focus:!0},Pressed:{active:!0}},n={ElevatedButton:Bn,FilledButton:un,TonalButton:En,OutlinedButton:Dn,TextButton:b};return()=>e(O,{children:e(c,{sx:{display:"flex",flexDirection:"column",gap:48},children:g(n,(t,l)=>e(c,{sx:{display:"flex",flexDirection:"column",gap:16},children:[o=>o,o=>a(u,{children:[e(h,{path:mn,placement:"start"}),o]}),o=>a(u,{children:[o,e(h,{path:T,placement:"end"})]})].map((o,r)=>e(X,{children:e(c,{sx:{display:"flex",gap:16},children:g(s,(d,k)=>e(t,{...d,children:o(k)}))})},`${r}`))},l))})})}),Le=Object.freeze(Object.defineProperty({__proto__:null,default:Ae},Symbol.toStringTag,{value:"Module"})),Fe=i(()=>{const s={Enabled:{},Focused:{focus:!0},Invalid:{invalid:!0},Disabled:{disabled:!0}},n={TextField:Mn};return()=>e(O,{children:e(c,{sx:{display:"flex",flexDirection:"column",gap:48},children:g(n,(t,l)=>e(c,{sx:{display:"flex",flexDirection:"column",gap:16},children:[o=>e(t,{...o,children:e("input",{"data-input":"",type:"text",placeholder:"Type"})}),o=>e(t,{...o,valued:!0,children:e("input",{"data-input":"",type:"text",value:"Username"})}),o=>e(t,{...o,$leading:e(h,{path:An}),children:e("input",{"data-input":"",type:"text"})}),o=>e(t,{...o,$trailing:e(h,{path:mn}),children:e("input",{"data-input":"",type:"text"})})].map((o,r)=>e(X,{children:e(c,{sx:{display:"flex",gap:16},children:g(s,d=>o({...d,$label:"Name",$supporting:"Desc"}))})},`${r}`))},l))})})}),Xe=Object.freeze(Object.defineProperty({__proto__:null,default:Fe},Symbol.toStringTag,{value:"Module"}));function Q(s){const n={p:"p",...s.components};return e(n.p,{children:"这不是一个完整的组件库，只是一个示例，作为 vueuikit 的参考"})}function Ue(s={}){const{wrapper:n}=s.components||{};return n?e(n,{...s,children:e(Q,{...s})}):Q(s)}const We=_(()=>()=>w(Ue,{components:{}})),He=Object.freeze(Object.defineProperty({__proto__:null,default:We},Symbol.toStringTag,{value:"Module"})),Je=i(()=>{const s=E.use();return()=>e(u,{children:e(c,{sx:{height:"40vh",display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"space-between",gap:8},children:s.token.textStyle.tokens.map(n=>a(c,{sx:{flex:1,rounded:"md",textStyle:n,p:16,border:"2px solid",borderColor:"sys.outline-variant",bgColor:"sys.surface-container",color:"sys.primary",minW:"10vw",whiteSpace:"nowrap",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e(c,{sx:{textStyle:"sys.label-small"},children:n}),e(c,{sx:{flex:1}}),e(c,{sx:{py:16},children:"中文测试"})]},n))})})}),Ge=Object.freeze(Object.defineProperty({__proto__:null,default:Je},Symbol.toStringTag,{value:"Module"})),K={0:!0,10:!0,20:!0,30:!0,40:!0,50:!0,60:!0,70:!0,80:!0,90:!0,95:!0,100:!0},qe=i(()=>()=>e(u,{children:["light","dark"].map(s=>a("div",{"data-theme":s,children:[a(c,{component:"h1",sx:{textStyle:"sys.headline-medium",pb:8,mt:16},children:[Zn(s)," Scheme"]}),a(c,{sx:{display:"flex",flexDirection:"column",gap:16},children:[e(c,{sx:{display:"flex",flexWrap:"wrap",gap:16},children:["primary","secondary","tertiary","error","warning","success"].map(n=>a(c,{sx:{flex:1,minW:1/4,display:"flex",alignItems:"stretch"},children:[e(c,{sx:{flex:1,display:"flex",flexDirection:"column"},children:["","-container"].map(t=>a(X,{children:[e(c,{sx:{bgColor:`sys.${n}${t}`,color:`sys.on-${n}${t}`,p:8,flex:3},children:`${n}${t}`}),e(c,{sx:{color:`sys.${n}${t}`,bgColor:`sys.on-${n}${t}`,p:8,flex:1},children:`on-${n}${t}`})]},t))}),e(c,{sx:{display:"flex",flexDirection:"column"},children:g(K,(t,l)=>a(c,{sx:{color:`${n}.${parseInt(l)>50?0:100}`,bgColor:`${n}.${l}`,w:60,p:8,textAlign:"right"},children:[".",l]}))})]},n))}),a("div",{children:[e(c,{sx:{display:"flex","& > *":{width:1/3}},children:["-dim","","-bright"].map(n=>e(c,{sx:{color:"sys.on-surface",bgColor:`sys.surface${n}`,height:80,p:8},children:`surface${n}`}))}),e(c,{sx:{display:"flex","& > *":{width:1/4}},children:["-lowest","-low","","-high","-highest"].map(n=>e(c,{sx:{color:"sys.on-surface",bgColor:`sys.surface-container${n}`,height:80,p:8},children:`surface-container${n}`}))}),e(c,{sx:{display:"flex","& > *":{width:1/4}},children:["on-surface","on-surface-variant","outline","outline-variant"].map(n=>e(c,{sx:{color:n.includes("outline-variant")?"sys.inverse-surface":"sys.inverse-on-surface",bgColor:`sys.${n}`,height:80,p:8},children:n}))}),e(c,{sx:{display:"flex"},children:g(K,(n,t)=>a(c,{sx:{color:`neutral.${parseInt(t)>50?0:100}`,bgColor:`neutral.${t}`,flex:1,p:8,textAlign:"right"},children:[".",t]}))})]})]})]},s))})),Ye=Object.freeze(Object.defineProperty({__proto__:null,default:qe},Symbol.toStringTag,{value:"Module"})),Ze=i(()=>{const s=L.use(),n=Pn(null);return()=>{const t=I.fromColors(s.value.seed);return a(c,{ref:n,sx:{display:"flex",flexDirection:"column",gap:24},children:[a(c,{sx:{display:"flex",gap:56},children:[e(c,{sx:{display:"flex",flexDirection:"column"},children:g(s.value.seed,(l,o)=>a(c,{sx:{flex:1,display:"flex",alignItems:"center",gap:16},children:[e(c,{sx:{flex:1},children:o}),e("input",{type:"color",value:l,onChange:r=>{s.next(d=>{d.seed[o]=r.target.value})}})]}))}),e(c,{sx:{display:"flex",flexWrap:"wrap",gap:16},children:g(s.value.rules,([l,o],r)=>a(c,{sx:{display:"flex",alignItems:"center",width:"30%"},children:[e(c,{sx:{flex:1},children:r}),e(c,{sx:{flex:1,display:"flex",gap:4,"& input":{width:"40%",border:"1px solid",borderColor:"sys.outline"}},children:e("input",{type:"number",value:o,max:100,min:0,style:{backgroundColor:I.toHEX(t.seeds[l].tone(o)),color:o>50?"black":"white"},"data-color":I.toHEX(t.seeds[l].tone(o)),"data-theme":"dark",onChange:d=>{try{const k=parseInt(d.target.value);s.next(P=>{P.rules[r]=[l,k,o]})}catch{}}})})]}))})]}),e(c,{sx:{display:"flex",gap:16,"& > *":{flex:1}},children:e("pre",{onClick:()=>se(JSON.stringify(s.value)),children:e("code",{children:JSON.stringify(s.value,null,2)})})})]})}}),Qe=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"})),Ke=i(()=>{const s=E.use();return()=>a(c,{sx:{display:"flex",gap:16,flexDirection:"column"},children:[e("div",{children:"点击下载，通过 Figma Tokens 全量导入文件"}),e("pre",{onClick:()=>{na(JSON.stringify(s.toFigmaTokens(),null,2),`tokens.${new Date().getTime()}.json`)},children:e("code",{children:JSON.stringify(s.toFigmaTokens(),null,2)})})]})});function na(s,n,t="application/json"){const l=document.createElement("a"),o=new Blob([s],{type:t}),r=URL.createObjectURL(o);l.href=r,l.download=n,document.body.appendChild(l),l.click(),setTimeout(()=>{document.body.removeChild(l),window.URL.revokeObjectURL(r)},0)}const ea=Object.freeze(Object.defineProperty({__proto__:null,default:Ke},Symbol.toStringTag,{value:"Module"})),aa=i(()=>{const s=E.use();return()=>e(u,{children:Object.keys(s.token.elevation.tokens).map(n=>e(c,{sx:{mt:16,p:16,rounded:"lg",transitionDuration:"md4",transitionTimingFunction:"standard",shadow:n,_hover:{shadow:`${1+parseInt(n)}`}},children:a("div",{children:["Elevation ",n]})},n))})}),sa=Object.freeze(Object.defineProperty({__proto__:null,default:aa},Symbol.toStringTag,{value:"Module"})),nn=hn("button",{disabled:xn().optional()})({bg:"none",outline:"none",border:"none",px:16,h:40,rounded:"md",color:"sys.primary",bgColor:z("sys.primary",R(.08)),_disabled:{color:z("sys.on-surface",R(.12)),bgColor:z("sys.on-surface",R(.08))}}),ta=()=>a(c,{sx:{display:"flex",gap:8},children:[e(nn,{children:"按钮"}),e(nn,{disabled:!0,children:"按钮"})]}),ca=i(()=>()=>e(c,{sx:{display:"flex",padding:10,containerStyle:"sys.primary"},children:e(c,{sx:{containerStyle:"sys.surface-container"},component:"button",children:"Hi 111"})}));function en(s){const n={a:"a",code:"code",codeblock4a44dc15:"codeblock4a44dc15",codeblock785f3ec7:"codeblock785f3ec7",div:"div",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return a(u,{children:[a(n.p,{children:["设计理念沿用 ",e(n.a,{href:"https://m3.material.io/",children:"Material 3"})]}),`
`,e(n.p,{children:"这里仅为适配该设计理念，抽象 Design System, 方便开发："}),`
`,a(n.p,{children:["所有的 Design Token 将声明为 ",e(n.code,{children:"css var"})," (",e(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*",children:"Custom properties"}),`),
可同时支持在 `,e(n.code,{children:"css-in-js"})," 和 ",e(n.code,{children:"raw css"})," 中使用。"]}),`
`,e(n.h2,{children:e(n.code,{children:"css-in-js"})}),`
`,e(n.p,{children:"TypeScript 的帮助下，还会提供准确的 Design Token 值. 如："}),`
`,a(n.div,{"data-example":"",children:[e(n.div,{"data-example-container":"",children:e(n.codeblock4a44dc15,{})}),e(n.pre,{className:"language-tsx",children:a(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ",e(n.span,{className:"token maybe-class-name",children:"Box"}),e(n.span,{className:"token punctuation",children:","})," alpha",e(n.span,{className:"token punctuation",children:","})," styled",e(n.span,{className:"token punctuation",children:","})," variant ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vueuikit"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," t ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuekit"'}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword",children:"const"})," ",e(n.span,{className:"token maybe-class-name",children:"Button"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"styled"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:'"button"'}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  disabled`,e(n.span,{className:"token operator",children:":"})," t",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token method function property-access",children:"boolean"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token method function property-access",children:"optional"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"}),`
  bg`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"none"'}),e(n.span,{className:"token punctuation",children:","}),`
  outline`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"none"'}),e(n.span,{className:"token punctuation",children:","}),`
  border`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"none"'}),e(n.span,{className:"token punctuation",children:","}),`
  px`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"16"}),e(n.span,{className:"token punctuation",children:","}),`
  h`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"40"}),e(n.span,{className:"token punctuation",children:","}),`
  rounded`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"md"'}),e(n.span,{className:"token punctuation",children:","}),`

  `,e(n.span,{className:"token comment",children:"// 利用 TypeScript 的推导而来，且非 color 属性无该值"}),`
  `,e(n.span,{className:"token comment",children:"// 实际将转换为 var(--vk-color-sys-primary)"}),`
  `,e(n.span,{className:"token comment",children:"// sys-* 的 color 还会随暗黑/普通主题进行切换"}),`
  color`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"sys.primary"'}),e(n.span,{className:"token punctuation",children:","}),`

  `,e(n.span,{className:"token comment",children:"// color 变种"}),`
  `,e(n.span,{className:"token comment",children:"// 实际将转换为 rbga(var(--vk-color-sys-primary-rgb) / 0.08)"}),`
  bgColor`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token function",children:"variant"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:'"sys.primary"'}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token function",children:"alpha"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token number",children:"0.08"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`

  `,e(n.span,{className:"token comment",children:"// 通常情况下，组件 props 将转换成 data-<prop> 作为 attr"}),`
  `,e(n.span,{className:"token comment",children:"// 即： <Button disabled/>  =>  <button data-disabled=true />"}),`
  `,e(n.span,{className:"token comment",children:"// 同理，在自定义转换规则中，也建议如下做类似的转换，避免动态创建 CSSObject"}),`
  _disabled`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
    color`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token function",children:"variant"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:'"sys.on-surface"'}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token function",children:"alpha"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token number",children:"0.12"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
    bgColor`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token function",children:"variant"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:'"sys.on-surface"'}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token function",children:"alpha"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token number",children:"0.08"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword module",children:"default"})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword control-flow",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Box"})]})," ",e(n.span,{className:"token attr-name",children:"sx"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"})," display",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"flex"'}),e(n.span,{className:"token punctuation",children:","})," gap",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"8"})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Button"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"按钮"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Button"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Button"})]})," ",e(n.span,{className:"token attr-name",children:"disabled"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token boolean",children:"true"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"按钮"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Button"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
    `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Box"})]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]}),`
`,a(n.p,{children:[`不同于其他框架中的 theme 定义，为了更准确的类型推导，需要由 DesignToken 进行创建
详细请`,e(n.a,{href:"https://github.com/innoai-tech/vuekit/blob/main/nodepkg/vueuikit/src/theming/m3",children:"参考源码"})]}),`
`,a(n.p,{children:["虽然底层使用的是 ",e(n.code,{children:"@emotion/*"}),"，但屏蔽掉了 ",e(n.code,{children:"array"}),` 等非 CSSObject 值的使用, 初衷是为了更稳定的类型推导。
另外样式扩展有两种方式`]}),`
`,e(n.pre,{className:"language-tsx",children:a(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," t ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuekit"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," styled",e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token maybe-class-name",children:"SystemStyleObject"})," ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vueuikit"'}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"const"})," shared",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token maybe-class-name",children:"SystemStyleObject"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  color`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"sys.primary"'}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token comment",children:"// ..."}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token comment",children:"// 直接通过 extends 复用样式"}),`
`,e(n.span,{className:"token comment",children:"//"}),`
`,e(n.span,{className:"token comment",children:"// 组件 props 定义需要重新声明"}),`
`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword",children:"const"})," ",e(n.span,{className:"token maybe-class-name",children:"ButtonBase"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"styled"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:'"button"'}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  disabled`,e(n.span,{className:"token operator",children:":"})," t",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token method function property-access",children:"boolean"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token method function property-access",children:"optional"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"extends"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"["}),"shared",e(n.span,{className:"token punctuation",children:"]"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token comment",children:"// ..."}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token comment",children:"// 通过 styled 覆写样式"}),`
`,e(n.span,{className:"token comment",children:"// 可以完全继承 BaseButton 的 props 定义"}),`
`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword",children:"const"})," ",e(n.span,{className:"token maybe-class-name",children:"Button"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"styled"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token maybe-class-name",children:"ButtonBase"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token comment",children:"// ..."}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,a(n.p,{children:["除 ",e(n.code,{children:"styled"})," 外，我们还可以使用 ",e(n.code,{children:"Box"})," 进行快速样式定义, 通过 ",e(n.code,{children:"sx"})," prop。 并且 ",e(n.code,{children:"component"}),` prop 支持我们随时切换 tag 或者
组件，并且其他 props 会随着不同的 component 切换对应 props 类型约束与提示。`]}),`
`,e(n.p,{children:"同样的，通过 styled 创建的组件也有一样的特性。"}),`
`,a(n.div,{"data-example":"",children:[e(n.div,{"data-example-container":"",children:e(n.codeblock785f3ec7,{})}),e(n.pre,{className:"language-tsx",children:a(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," component ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuekit"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ",e(n.span,{className:"token maybe-class-name",children:"Box"})," ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vueuikit"'}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword module",children:"default"})," ",e(n.span,{className:"token function",children:"component"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
  `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Box"})]})," ",e(n.span,{className:"token attr-name",children:"sx"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"})," display",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"flex"'}),e(n.span,{className:"token punctuation",children:","})," padding",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"10"}),e(n.span,{className:"token punctuation",children:","})," containerStyle",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"sys.primary"'})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
    `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Box"})]})," ",e(n.span,{className:"token attr-name",children:"sx"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"})," containerStyle",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"sys.surface-container"'})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token attr-name",children:"component"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token string",children:'"button"'}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      Hi 111
    `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Box"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
  `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Box"})]}),e(n.span,{className:"token punctuation",children:">"})]}),`
`,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]}),`
`,e(n.h3,{children:"CSS Selector 简写规则"}),`
`,a(n.p,{children:["另外，为了简化 ",e(n.code,{children:'"&:hover"'})," ",e(n.code,{children:"&[aria-current='page']"}),` 等选择器声明，
提供的如下的简化规则：`]}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["所有名称支持 ",e(n.em,{children:"下划线命名"})," 或者 ",e(n.em,{children:"驼峰命名"}),"，最终都将转换为 ",e(n.em,{children:"短横小写命名"}),", ",e(n.code,{children:"="})," 用 ",e(n.code,{children:"__"})," 替代"]}),`
`,a(n.li,{children:[e(n.code,{children:"_*"})," 一般表示",e(n.strong,{children:"状态"}),"，可用值",`
`,a(n.ul,{children:[`
`,a(n.li,{children:[e(n.code,{children:"data-*"})," 和 ",e(n.code,{children:"aria-*"}),", `",`
`,a(n.ul,{children:[`
`,a(n.li,{children:["如 ",e(n.code,{children:"_aria_current__page"}),"： 等效为 ",e(n.code,{children:"&[aria-current='page']"}),","]}),`
`]}),`
`]}),`
`,a(n.li,{children:[e(n.code,{children:"before"}),"，",e(n.code,{children:"after"})," 等",e(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements",children:"伪元素"}),', 需要声明 "$" 表示为元素',`
`,a(n.ul,{children:[`
`,a(n.li,{children:["如 ",e(n.code,{children:"_$before"}),"： 等效为 ",e(n.code,{children:"&::before"})]}),`
`]}),`
`]}),`
`,a(n.li,{children:[e(n.code,{children:"hover"}),", ",e(n.code,{children:"focus"}),", ",e(n.code,{children:"active"}),", ",e(n.code,{children:"disabled"})," 等",e(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes",children:"伪类"}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["如 ",e(n.code,{children:"_hover"}),"： 等效为 ",e(n.code,{children:"&:hover, &.hover, &[data-hover]:not([data-hover='false'])"}),","]}),`
`]}),`
`]}),`
`,a(n.li,{children:["以及其他自定义状态",`
`,a(n.ul,{children:[`
`,a(n.li,{children:["如 ",e(n.code,{children:"_has_icon"}),"： 等效为 ",e(n.code,{children:"&[data-has-icon]:not([data-has-icon='false'])"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,a(n.li,{children:[e(n.code,{children:"$*"})," 或 ",e(n.code,{children:"*$"}),"，一般指代",e(n.strong,{children:"元素节点"}),", 可用值为",`
`,a(n.ul,{children:[`
`,a(n.li,{children:[e(n.code,{children:"data-*"})," 和 ",e(n.code,{children:"aria-*"}),", `",`
`,a(n.ul,{children:[`
`,a(n.li,{children:["如 ",e(n.code,{children:"$data_icon"}),"： 等效为 ",e(n.code,{children:"&[data-icon]"})]}),`
`,a(n.li,{children:["如 ",e(n.code,{children:"$data_popper_arrow"}),"： 等效为 ",e(n.code,{children:"&[data-popper-arrow]"})]}),`
`,a(n.li,{children:["如 ",e(n.code,{children:"data_popper_placement__right$"}),"： 等效为 ",e(n.code,{children:"[data-popper-placement=right] &"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]})]})}function oa(s={}){const{wrapper:n}=s.components||{};return n?e(n,{...s,children:e(en,{...s})}):en(s)}const la=_(()=>()=>w(oa,{components:{codeblock4a44dc15:ta,codeblock785f3ec7:ca}})),ia=Object.freeze(Object.defineProperty({__proto__:null,default:la},Symbol.toStringTag,{value:"Module"})),ra=i(()=>{const s=N(!1),n=Hn({apply({elements:t,rects:l}){Object.assign(t.floating.style,{width:`${l.reference.width}px`})}});return()=>e(U,{isOpen:s.value,onClickOutside:()=>s.value=!1,placement:"bottom-start",modifiers:[n],$content:a(c,{sx:{containerStyle:"sys.on-surface"},children:["Popper ",`${s.value}`,"!"]}),children:e(c,{sx:{p:4},component:"button",onClick:()=>s.value=!s.value,children:"Click Trigger Popper"})})}),pa=i(()=>{const s=N(!1);return()=>e(U,{isOpen:s.value,$content:e(c,{sx:{containerStyle:"sys.on-surface"},children:"Popper Content!"}),children:e(c,{component:"button",sx:{p:4},onMouseover:()=>s.value=!0,onMouseout:()=>s.value=!1,children:"Popper Trigger"})})}),da=Jn({from:{opacity:0},to:{opacity:1},duration:$.duration.md1,easing:$.easing.standard.accelerate},{from:{opacity:1},to:{opacity:0},duration:$.duration.sm4,easing:$.easing.standard.decelerate}),ua=i(()=>{const s=N(!0);return()=>e(U,{isOpen:s.value,$transition:({content:n})=>e(da,{children:n}),$content:a(c,{sx:{containerStyle:"sys.on-surface",shadow:"2",py:2,px:4,rounded:"sm"},children:["Popper ",`${s.value}`,"!"]}),children:e(c,{sx:{p:4},component:"button",onMouseover:()=>s.value=!0,onMouseout:()=>s.value=!1,children:"Animated Popper"})})});function an(s){const n={code:"code",codeblock4a44dc15:"codeblock4a44dc15",codeblockd4735e3a:"codeblockd4735e3a",codeblocke7f6c011:"codeblocke7f6c011",div:"div",h2:"h2",pre:"pre",span:"span",...s.components};return a(u,{children:[e(n.h2,{children:"Normal Popper"}),`
`,a(n.div,{"data-example":"",children:[e(n.div,{"data-example-container":"",children:e(n.codeblockd4735e3a,{})}),e(n.pre,{className:"language-tsx",children:a(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," component ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuekit"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ",e(n.span,{className:"token maybe-class-name",children:"Box"}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token maybe-class-name",children:"Popper"})," ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vueuikit"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," size ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@floating-ui/dom"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ref ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"vue"'}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword module",children:"default"})," ",e(n.span,{className:"token function",children:"component"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," isOpen ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"ref"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token boolean",children:"false"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword",children:"const"})," sameWidth ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"size"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"}),`
    `,e(n.span,{className:"token function",children:"apply"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"})," elements",e(n.span,{className:"token punctuation",children:","})," rects ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
      `,e(n.span,{className:"token known-class-name class-name",children:"Object"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token method function property-access",children:"assign"}),e(n.span,{className:"token punctuation",children:"("}),"elements",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"floating"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"style"}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token punctuation",children:"{"}),`
        width`,e(n.span,{className:"token operator",children:":"})," ",a(n.span,{className:"token template-string",children:[e(n.span,{className:"token template-punctuation string",children:"`"}),a(n.span,{className:"token interpolation",children:[e(n.span,{className:"token interpolation-punctuation punctuation",children:"${"}),"rects",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"reference"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"width"}),e(n.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),e(n.span,{className:"token string",children:"px"}),e(n.span,{className:"token template-punctuation string",children:"`"})]}),e(n.span,{className:"token punctuation",children:","}),`
      `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
    `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword control-flow",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Popper"})]}),`
      `,e(n.span,{className:"token attr-name",children:"isOpen"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),"isOpen",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token attr-name",children:"onClickOutside"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),"isOpen",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token boolean",children:"false"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token attr-name",children:"placement"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token string",children:'"bottom-start"'}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token attr-name",children:"modifiers"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"["}),"sameWidth",e(n.span,{className:"token punctuation",children:"]"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token attr-name",children:"$content"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),`
        `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Box"})]})," ",e(n.span,{className:"token attr-name",children:"sx"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"})," containerStyle",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"sys.on-surface"'})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
          Popper `}),e(n.span,{className:"token punctuation",children:"{"}),a(n.span,{className:"token template-string",children:[e(n.span,{className:"token template-punctuation string",children:"`"}),a(n.span,{className:"token interpolation",children:[e(n.span,{className:"token interpolation-punctuation punctuation",children:"${"}),"isOpen",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),e(n.span,{className:"token template-punctuation string",children:"`"})]}),e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token plain-text",children:`!
        `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Box"})]}),e(n.span,{className:"token punctuation",children:">"})]}),`
      `,e(n.span,{className:"token punctuation",children:"}"})]}),`
    `,e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Box"})]}),`
        `,e(n.span,{className:"token attr-name",children:"sx"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"})," p",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"4"})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
        `,e(n.span,{className:"token attr-name",children:"component"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token string",children:'"button"'}),e(n.span,{className:"token punctuation",children:"}"})]}),`
        `,e(n.span,{className:"token attr-name",children:"onClick"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),"isOpen",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token operator",children:"!"}),"isOpen",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
        Click Trigger Popper
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Box"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
    `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Popper"})]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]}),`
`,e(n.h2,{children:"Hovered Popper"}),`
`,a(n.div,{"data-example":"",children:[e(n.div,{"data-example-container":"",children:e(n.codeblocke7f6c011,{})}),e(n.pre,{className:"language-tsx",children:a(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ref ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"vue"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," component ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuekit"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ",e(n.span,{className:"token maybe-class-name",children:"Box"}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token maybe-class-name",children:"Popper"})," ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vueuikit"'}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword module",children:"default"})," ",e(n.span,{className:"token function",children:"component"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," isOpen ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"ref"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token boolean",children:"false"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword control-flow",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Popper"})]}),`
      `,e(n.span,{className:"token attr-name",children:"isOpen"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),"isOpen",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token attr-name",children:"$content"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),`
        `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Box"})]})," ",e(n.span,{className:"token attr-name",children:"sx"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"})," containerStyle",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"sys.on-surface"'})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"Popper Content!"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Box"})]}),e(n.span,{className:"token punctuation",children:">"})]}),`
      `,e(n.span,{className:"token punctuation",children:"}"})]}),`
    `,e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Box"})]}),`
        `,e(n.span,{className:"token attr-name",children:"component"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token string",children:'"button"'}),e(n.span,{className:"token punctuation",children:"}"})]}),`
        `,e(n.span,{className:"token attr-name",children:"sx"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"})," p",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"4"})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
        `,e(n.span,{className:"token attr-name",children:"onMouseover"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),"isOpen",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token boolean",children:"true"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
        `,e(n.span,{className:"token attr-name",children:"onMouseout"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),"isOpen",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token boolean",children:"false"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
        Popper Trigger
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Box"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
    `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Popper"})]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]}),`
`,e(n.h2,{children:"Animated"}),`
`,a(n.div,{"data-example":"",children:[e(n.div,{"data-example-container":"",children:e(n.codeblock4a44dc15,{})}),e(n.pre,{className:"language-tsx",children:a(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ref ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"vue"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," component ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuekit"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token maybe-class-name",children:"Box"}),e(n.span,{className:"token punctuation",children:","}),`
  defineTransition`,e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token maybe-class-name",children:"Popper"}),e(n.span,{className:"token punctuation",children:","}),`
  transition`,e(n.span,{className:"token punctuation",children:","}),`
  triangle`,e(n.span,{className:"token punctuation",children:","}),`
`,e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vueuikit"'}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword",children:"const"})," ",e(n.span,{className:"token maybe-class-name",children:"FadeInOutTransition"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"defineTransition"}),e(n.span,{className:"token punctuation",children:"("}),`
  `,e(n.span,{className:"token punctuation",children:"{"}),`
    `,e(n.span,{className:"token keyword module",children:"from"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
      opacity`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"0"}),e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
    to`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
      opacity`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"1"}),e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
    duration`,e(n.span,{className:"token operator",children:":"})," transition",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"duration"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"md1"}),e(n.span,{className:"token punctuation",children:","}),`
    easing`,e(n.span,{className:"token operator",children:":"})," transition",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"easing"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"standard"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"accelerate"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:"{"}),`
    `,e(n.span,{className:"token keyword module",children:"from"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
      opacity`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"1"}),e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
    to`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
      opacity`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"0"}),e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
    duration`,e(n.span,{className:"token operator",children:":"})," transition",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"duration"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"sm4"}),e(n.span,{className:"token punctuation",children:","}),`
    easing`,e(n.span,{className:"token operator",children:":"})," transition",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"easing"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"standard"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"decelerate"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
`,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword module",children:"default"})," ",e(n.span,{className:"token function",children:"component"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," isOpen ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"ref"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token boolean",children:"true"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword control-flow",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Popper"})]}),`
      `,e(n.span,{className:"token attr-name",children:"isOpen"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),"isOpen",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token attr-name",children:"$transition"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"})," content ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
        `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"FadeInOutTransition"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token punctuation",children:"{"}),"content",e(n.span,{className:"token punctuation",children:"}"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"FadeInOutTransition"})]}),e(n.span,{className:"token punctuation",children:">"})]}),`
      `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token attr-name",children:"$content"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),`
        `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Box"})]}),`
          `,e(n.span,{className:"token attr-name",children:"sx"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"}),`
            containerStyle`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"sys.on-surface"'}),e(n.span,{className:"token punctuation",children:","}),`
            shadow`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"2"'}),e(n.span,{className:"token punctuation",children:","}),`
            py`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"2"}),e(n.span,{className:"token punctuation",children:","}),`
            px`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"4"}),e(n.span,{className:"token punctuation",children:","}),`
            rounded`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"sm"'}),e(n.span,{className:"token punctuation",children:","}),`
          `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
        `,e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
          Popper `}),e(n.span,{className:"token punctuation",children:"{"}),a(n.span,{className:"token template-string",children:[e(n.span,{className:"token template-punctuation string",children:"`"}),a(n.span,{className:"token interpolation",children:[e(n.span,{className:"token interpolation-punctuation punctuation",children:"${"}),"isOpen",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),e(n.span,{className:"token template-punctuation string",children:"`"})]}),e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token plain-text",children:`!
        `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Box"})]}),e(n.span,{className:"token punctuation",children:">"})]}),`
      `,e(n.span,{className:"token punctuation",children:"}"})]}),`
    `,e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Box"})]}),`
        `,e(n.span,{className:"token attr-name",children:"sx"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"})," p",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"4"})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
        `,e(n.span,{className:"token attr-name",children:"component"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token string",children:'"button"'}),e(n.span,{className:"token punctuation",children:"}"})]}),`
        `,e(n.span,{className:"token attr-name",children:"onMouseover"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),"isOpen",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token boolean",children:"true"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
        `,e(n.span,{className:"token attr-name",children:"onMouseout"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),"isOpen",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token boolean",children:"false"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
        Animated Popper
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Box"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
    `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"Popper"})]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]})]})}function ma(s={}){const{wrapper:n}=s.components||{};return n?e(n,{...s,children:e(an,{...s})}):an(s)}const ha=_(()=>()=>w(ma,{components:{codeblockd4735e3a:ra,codeblocke7f6c011:pa,codeblock4a44dc15:ua}})),ka=Object.freeze(Object.defineProperty({__proto__:null,default:ha},Symbol.toStringTag,{value:"Module"})),Na=$n((s,{emit:n})=>{const t=In(s.value??"1");return V(t,ce(300),dn(l=>n("value-change",l))),V(t,Tn(l=>e("input",{value:l,onInput:o=>{t.value=o.target.value}})))}),ga=i(()=>{const s=N("default");return()=>e("div",{children:a("div",{style:{display:"flex",gap:"1rem"},children:[e(Na,{value:s.value,onValueChange:n=>{s.value=n}}),a("div",{children:["Inputted: ",s.value]})]})})});function sn(s){const n={a:"a",code:"code",codeblockd4735e3a:"codeblockd4735e3a",div:"div",p:"p",pre:"pre",span:"span",...s.components};return a(u,{children:[a(n.p,{children:["和 ",e(n.a,{href:"https://rxjs.dev/",children:"rxjs"})," 集成"]}),`
`,a(n.div,{"data-example":"",children:[e(n.div,{"data-example-container":"",children:e(n.codeblockd4735e3a,{})}),e(n.pre,{className:"language-tsx",children:a(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"}),`
  component`,e(n.span,{className:"token punctuation",children:","}),`
  component$`,e(n.span,{className:"token punctuation",children:","}),`
  observableRef`,e(n.span,{className:"token punctuation",children:","}),`
  render`,e(n.span,{className:"token punctuation",children:","}),`
  rx`,e(n.span,{className:"token punctuation",children:","}),`
  subscribeUntilUnmount`,e(n.span,{className:"token punctuation",children:","}),`
`,e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuekit"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ref ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"vue"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," debounceTime ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"rxjs"'}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword",children:"const"})," ",e(n.span,{className:"token maybe-class-name",children:"TextDebounceInput"})," ",e(n.span,{className:"token operator",children:"="})," component$",e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token punctuation",children:"{"}),`
  value`,e(n.span,{className:"token operator",children:"?"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token builtin",children:"string"}),e(n.span,{className:"token punctuation",children:";"}),`
  onValueChange`,e(n.span,{className:"token operator",children:"?"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"("}),"v",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token builtin",children:"string"}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token keyword",children:"void"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),"props",e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token punctuation",children:"{"})," emit ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," value$ ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"observableRef"}),e(n.span,{className:"token punctuation",children:"("}),"props",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"})," ",e(n.span,{className:"token operator",children:"??"})," ",e(n.span,{className:"token string",children:'"1"'}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token function",children:"rx"}),e(n.span,{className:"token punctuation",children:"("}),`
    value$`,e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token function",children:"debounceTime"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token number",children:"300"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token function",children:"subscribeUntilUnmount"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),"v",e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token function",children:"emit"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:'"value-change"'}),e(n.span,{className:"token punctuation",children:","})," v",e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword control-flow",children:"return"})," ",e(n.span,{className:"token function",children:"rx"}),e(n.span,{className:"token punctuation",children:"("}),`
    value$`,e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token function",children:"render"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),"v",e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
      `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"input"]}),`
        `,e(n.span,{className:"token attr-name",children:"value"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),"v",e(n.span,{className:"token punctuation",children:"}"})]}),`
        `,e(n.span,{className:"token attr-name",children:"onInput"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),"e",e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
          value$`,e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token punctuation",children:"("}),"e",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"target"})," ",e(n.span,{className:"token keyword module",children:"as"})," ",e(n.span,{className:"token maybe-class-name",children:"HTMLInputElement"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token punctuation",children:";"}),`
        `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token punctuation",children:"/>"})]}),`
    `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword module",children:"default"})," ",e(n.span,{className:"token function",children:"component"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," inputValue ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"ref"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:'"default"'}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword control-flow",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",e(n.span,{className:"token attr-name",children:"style"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"})," display",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"flex"'}),e(n.span,{className:"token punctuation",children:","})," gap",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"1rem"'})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
        `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"TextDebounceInput"})]}),`
          `,e(n.span,{className:"token attr-name",children:"value"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),"inputValue",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
          `,e(n.span,{className:"token attr-name",children:"onValueChange"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),"value",e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
            inputValue`,e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"})," ",e(n.span,{className:"token operator",children:"="})," value",e(n.span,{className:"token punctuation",children:";"}),`
          `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
        `,e(n.span,{className:"token punctuation",children:"/>"})]}),e(n.span,{className:"token plain-text",children:`
        `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"Inputted: "}),e(n.span,{className:"token punctuation",children:"{"}),"inputValue",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token punctuation",children:"}"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
    `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]})]})}function ya(s={}){const{wrapper:n}=s.components||{};return n?e(n,{...s,children:e(sn,{...s})}):sn(s)}const fa=_(()=>()=>w(ya,{components:{codeblockd4735e3a:ga}})),va=Object.freeze(Object.defineProperty({__proto__:null,default:fa},Symbol.toStringTag,{value:"Module"})),xa=i(()=>{const s=N(1);return()=>a("div",{style:{display:"flex",gap:"1rem"},children:[a("div",{children:["Counts: ",s.value]}),e("button",{onClick:()=>s.value++,children:"Click To Count"})]})}),ba=i({value:v().optional().default("1"),type:bn(["text","number"]),onValueChange:j()},(s,{emit:n})=>()=>e("input",{value:s.value,onInput:t=>{n("value-change",t.target.value)}})),_a=i({$title:j().optional(),$item:j().optional(),$default:j().optional()},({},{slots:s})=>()=>{var t,l;const n=[{label:"1",value:"1"},{label:"2",value:"2"}];return a("dl",{children:[e("dt",{children:"default"}),e("dd",{children:(t=s.default)==null?void 0:t.call(s)}),e("dt",{children:"title"}),e("dd",{children:(l=s.title)==null?void 0:l.call(s)}),e("dt",{children:"item"}),e("dd",{children:n.map(o=>{var r;return(r=s.item)==null?void 0:r.call(s,o)})})]})}),wa=i(()=>{const s=N("");return()=>e(_a,{$title:a("div",{children:["Inputted: ",s.value]}),$item:n=>e("div",{children:n.label}),children:e(ba,{type:"text",onValueChange:n=>{s.value=n}})})});function tn(s){const n={code:"code",codeblock4a44dc15:"codeblock4a44dc15",codeblock4b227777:"codeblock4b227777",div:"div",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return a(u,{children:[e(n.p,{children:"为了更好的 TypeScript 和 JSX 的支持，重新抽象了定义组件的方式"}),`
`,e(n.p,{children:"一般组件："}),`
`,a(n.div,{"data-example":"",children:[e(n.div,{"data-example-container":"",children:e(n.codeblock4b227777,{})}),e(n.pre,{className:"language-tsx",children:a(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," component ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuekit"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ref ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"vue"'}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword module",children:"default"})," ",e(n.span,{className:"token function",children:"component"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," count ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"ref"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token number",children:"1"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword control-flow",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",e(n.span,{className:"token attr-name",children:"style"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"})," display",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"flex"'}),e(n.span,{className:"token punctuation",children:","})," gap",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"1rem"'})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"Counts: "}),e(n.span,{className:"token punctuation",children:"{"}),"count",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token punctuation",children:"}"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"button"]})," ",e(n.span,{className:"token attr-name",children:"onClick"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," count",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token operator",children:"++"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"Click To Count"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"button"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
    `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]}),`
`,e(n.p,{children:"可复用组件："}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:[e(n.code,{children:"props"})," 和 ",e(n.code,{children:"emits"})," 合并声明"]}),`
`]}),`
`,a(n.div,{"data-example":"",children:[e(n.div,{"data-example-container":"",children:e(n.codeblock4a44dc15,{})}),e(n.pre,{className:"language-tsx",children:a(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword module",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," component",e(n.span,{className:"token punctuation",children:","})," t",e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token keyword",children:"type"})," ",e(n.span,{className:"token class-name",children:e(n.span,{className:"token maybe-class-name",children:"VNode"})}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token keyword",children:"type"})," ",e(n.span,{className:"token class-name",children:e(n.span,{className:"token maybe-class-name",children:"VNodeChild"})})," ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"@innoai-tech/vuekit"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword module",children:"import"})," ",a(n.span,{className:"token imports",children:[e(n.span,{className:"token punctuation",children:"{"})," ref ",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token keyword module",children:"from"})," ",e(n.span,{className:"token string",children:'"vue"'}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword",children:"const"})," ",e(n.span,{className:"token maybe-class-name",children:"TextInput"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"component"}),e(n.span,{className:"token punctuation",children:"("}),`
  `,e(n.span,{className:"token punctuation",children:"{"}),`
    `,e(n.span,{className:"token comment",children:"// VUE 的注册机制（Proxy 定义基准，以及从 attrs 中提取 props 的 emits 的依据）"}),`
    `,e(n.span,{className:"token comment",children:"// 必须声明，哪怕只是属性名称"}),`
    `,e(n.span,{className:"token comment",children:"//"}),`
    `,e(n.span,{className:"token comment",children:"// 又由于 TypeString 的老问题  https://www.typescriptneedstypes.com/#the-problem"}),`
    `,e(n.span,{className:"token comment",children:"// 类型定义无法转为 Runtime 对象"}),`
    value`,e(n.span,{className:"token operator",children:":"})," t",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token method function property-access",children:"string"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token method function property-access",children:"optional"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token keyword module",children:"default"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:'"1"'}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
    type`,e(n.span,{className:"token operator",children:":"})," t",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token method function property-access",children:"enums"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"["}),e(n.span,{className:"token string",children:'"text"'}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token string",children:'"number"'}),e(n.span,{className:"token punctuation",children:"]"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`

    `,e(n.span,{className:"token comment",children:"// on[A-Z] 前缀视为 emits"}),`
    onValueChange`,e(n.span,{className:"token operator",children:":"})," t",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"custom"}),e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token punctuation",children:"("}),"v",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token builtin",children:"string"}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token keyword",children:"void"}),e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:"("}),"props",e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token punctuation",children:"{"})," emit ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
    `,e(n.span,{className:"token comment",children:"// setup"}),`

    `,e(n.span,{className:"token keyword control-flow",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
      `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"input"]}),`
        `,e(n.span,{className:"token attr-name",children:"value"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),"props",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
        `,e(n.span,{className:"token attr-name",children:"onInput"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),"e",e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
          `,e(n.span,{className:"token function",children:"emit"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:'"value-change"'}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token punctuation",children:"("}),"e",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"target"})," ",e(n.span,{className:"token keyword module",children:"as"})," ",e(n.span,{className:"token maybe-class-name",children:"HTMLInputElement"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
        `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token punctuation",children:"/>"})]}),`
    `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
  `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
`,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword",children:"interface"})," ",e(n.span,{className:"token class-name",children:e(n.span,{className:"token maybe-class-name",children:"Option"})})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  label`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token builtin",children:"string"}),e(n.span,{className:"token punctuation",children:";"}),`
  value`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token builtin",children:"string"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword",children:"const"})," ",e(n.span,{className:"token maybe-class-name",children:"List"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"component"}),e(n.span,{className:"token punctuation",children:"("}),`
  `,e(n.span,{className:"token punctuation",children:"{"}),`
    `,e(n.span,{className:"token comment",children:"// $ 前缀视为 slots"}),`
    $title`,e(n.span,{className:"token operator",children:":"})," t",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"custom"}),e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token maybe-class-name",children:"VNodeChild"}),e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token method function property-access",children:"optional"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token comment",children:"// renderProp"}),`
    $item`,e(n.span,{className:"token operator",children:":"})," t",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"custom"}),e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token punctuation",children:"("}),"option",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token maybe-class-name",children:"Option"}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token maybe-class-name",children:"VNode"}),e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token method function property-access",children:"optional"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`

    $`,e(n.span,{className:"token keyword module",children:"default"}),e(n.span,{className:"token operator",children:":"})," t",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"custom"}),e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token maybe-class-name",children:"VNodeChild"}),e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token method function property-access",children:"optional"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`

    `,e(n.span,{className:"token comment",children:"// 以此避免多插槽时 children slots object 的写法, 且无类型约束，"}),`
    `,e(n.span,{className:"token comment",children:"// {{ default: () => VNode, title: () => VNode, item: (option: Option) => VNode }}"}),`
  `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token punctuation",children:"{"})," slots ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"}),`
    `,e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
      `,e(n.span,{className:"token keyword",children:"const"})," options ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token punctuation",children:"["}),`
        `,e(n.span,{className:"token punctuation",children:"{"}),`
          label`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"1"'}),e(n.span,{className:"token punctuation",children:","}),`
          value`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"1"'}),e(n.span,{className:"token punctuation",children:","}),`
        `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
        `,e(n.span,{className:"token punctuation",children:"{"}),`
          label`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"2"'}),e(n.span,{className:"token punctuation",children:","}),`
          value`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"2"'}),e(n.span,{className:"token punctuation",children:","}),`
        `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
      `,e(n.span,{className:"token punctuation",children:"]"}),e(n.span,{className:"token punctuation",children:";"}),`

      `,e(n.span,{className:"token keyword control-flow",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
        `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"dl"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
          `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"dt"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"default"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"dt"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
          `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"dd"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token punctuation",children:"{"}),"slots",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token keyword module",children:"default"}),e(n.span,{className:"token operator",children:"?."}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"dd"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
          `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"dt"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"title"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"dt"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
          `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"dd"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token punctuation",children:"{"}),"slots",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"title"}),e(n.span,{className:"token operator",children:"?."}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"dd"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
          `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"dt"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"item"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"dt"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
          `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"dd"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token punctuation",children:"{"}),"options",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token method function property-access",children:"map"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),"option",e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," slots",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"item"}),e(n.span,{className:"token operator",children:"?."}),e(n.span,{className:"token punctuation",children:"("}),"option",e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"dd"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
        `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"dl"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
      `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
    `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
`,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword module",children:"export"})," ",e(n.span,{className:"token keyword module",children:"default"})," ",e(n.span,{className:"token function",children:"component"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," inputValue ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"ref"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:'""'}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword control-flow",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"List"})]}),`
      `,e(n.span,{className:"token attr-name",children:"$title"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"Inputted: "}),e(n.span,{className:"token punctuation",children:"{"}),"inputValue",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"}),e(n.span,{className:"token punctuation",children:"}"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token attr-name",children:"$item"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),"o",e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token punctuation",children:"{"}),"o",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"label"}),e(n.span,{className:"token punctuation",children:"}"}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token punctuation",children:"}"})]}),`
    `,e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"TextInput"})]}),`
        `,e(n.span,{className:"token attr-name",children:"type"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token string",children:'"text"'}),e(n.span,{className:"token punctuation",children:"}"})]}),`
        `,e(n.span,{className:"token attr-name",children:"onValueChange"}),a(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),"value",e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
          inputValue`,e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token property-access",children:"value"})," ",e(n.span,{className:"token operator",children:"="})," value",e(n.span,{className:"token punctuation",children:";"}),`
        `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token punctuation",children:"/>"})]}),e(n.span,{className:"token plain-text",children:`
    `}),a(n.span,{className:"token tag",children:[a(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),e(n.span,{className:"token class-name",children:"List"})]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]})]})}function Ca(s={}){const{wrapper:n}=s.components||{};return n?e(n,{...s,children:e(tn,{...s})}):tn(s)}const ja=_(()=>()=>w(Ca,{components:{codeblock4b227777:xa,codeblock4a44dc15:wa}})),Sa=Object.freeze(Object.defineProperty({__proto__:null,default:ja},Symbol.toStringTag,{value:"Module"}));
