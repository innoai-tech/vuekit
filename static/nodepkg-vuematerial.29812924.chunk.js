import{z as i,j as a,r as g,w as B,a as I,b as e,F as b,K as j,L as S}from"./lib-nodepkg-vuekit.a57e5331.chunk.js";import{c as N}from"./nodepkg-vuekit.34bafb50.chunk.js";import{g as h}from"./lib-nodepkg-vuematerial.9f41b4ff.chunk.js";import{d as v,t as l,O as y,s as r,p as t,v as c,a as o,B as _}from"./nodepkg-vueuikit.2b0fc80c.chunk.js";const w=r("button",{hover:i.boolean().optional(),focus:i.boolean().optional(),active:i.boolean().optional(),disabled:i.boolean().optional()})({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",outline:"none",overflow:"hidden",border:0,margin:0,userSelect:"none",cursor:"pointer",_disabled:{cursor:"not-allowed"},gap:8,h:40,px:24,rounded:20,transitionDuration:"md4",transitionTimingFunction:"standard-accelerate",bg:"none",pos:"relative",zIndex:1,_before:{content:'""',pos:"absolute",top:0,right:0,left:0,bottom:0,zIndex:-1,transitionDuration:"md1",transitionTimingFunction:"standard-accelerate"},"& [data-icon]":{boxSize:18,"&[data-placement=start]":{ml:-8},"&[data-placement=end]":{mr:-8}}}),O=r(w)({containerStyle:"sys.primary",state:{default:{shadow:"1",layer:{$:t._before}},hovered:{$:t._hover,shadow:"2",layer:{bgColor:c("white",o(.08))}},focused:{$:t._focus,shadow:"2",layer:{bgColor:c("white",o(.12))}},active:{$:t._active,shadow:"2",layer:{bgColor:c("white",o(.12))}},disabled:{$:t._disabled,shadow:"0",color:c("sys.on-surface",o(.38)),bgColor:"rgba(0,0,0,0)",layer:{bgColor:c("sys.on-surface",o(.12))}}}}),$=r(w)({extends:[{px:16,"& [data-icon]":{"&[data-placement=start]":{ml:-4},"&[data-placement=end]":{mr:-4}}}],state:{default:{color:"sys.primary",layer:{$:t._before,bgColor:"rgba(0,0,0,0)"}},hovered:{$:t._hover,layer:{bgColor:c("sys.primary",o(.08))}},focused:{$:t._focus,layer:{bgColor:c("sys.primary",o(.12))}},active:{$:t._active,layer:{bgColor:c("sys.primary",o(.12))}},disabled:{$:t._disabled,color:c("sys.on-surface",o(.38)),bgColor:"rgba(0,0,0,0)",layer:{bgColor:"rgba(0,0,0,0)"}}}}),F=r($,{})({boxSize:40,p:0}),k=r("svg",{placement:i.enum(["start","end"]).optional(),path:i.string()},(s,n)=>p=>a(p,{viewBox:"0 0 24 24","data-icon":!0,"data-placement":s.placement,children:a("path",{d:s.path})}))({boxSize:"1.2em"});l.duration.md1,l.easing.standard.accelerate,l.duration.sm4,l.easing.standard.decelerate;const z=r("div")({pos:"absolute",top:0,left:0,h:"100vh",w:"100vw",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center","& [data-dialog-backdrop]":{cursor:"pointer",pos:"absolute",top:0,left:0,h:"100vh",w:"100vw",zIndex:-1,bgColor:c("sys.scrim",o(.38))}}),T=v({from:{opacity:0},to:{opacity:1},duration:l.duration.md1,easing:l.easing.standard.accelerate},{from:{opacity:1},to:{opacity:0},duration:l.duration.sm4,easing:l.easing.standard.accelerate});y.propTypes.isOpen;const D=N(()=>()=>a(k,{path:h})),M=N(()=>()=>e(_,{sx:{display:"flex",gap:8},children:[a(F,{active:!0,onClick:()=>console.log(1),children:a(k,{path:h})}),e(O,{active:!1,children:["Send",a(k,{path:h,placement:"end"})]})]}));function f(s){const n=Object.assign({p:"p",a:"a",div:"div",codeblockd4735e3a:"codeblockd4735e3a",pre:"pre",code:"code",span:"span",h3:"h3",codeblocke7f6c011:"codeblocke7f6c011"},s.components);return e(b,{children:[e(n.p,{children:["直接使用沿用 ",a(n.a,{href:"https://pictogrammers.com/library/mdi/",children:"mid"})]}),`
`,e(n.div,{"data-example":"",children:[a(n.div,{"data-example-container":"",children:a(n.codeblockd4735e3a,{})}),a(n.pre,{className:"language-tsx",children:e(n.code,{className:"language-tsx",children:[a(n.span,{className:"token keyword module",children:"import"})," ",e(n.span,{className:"token imports",children:[a(n.span,{className:"token punctuation",children:"{"})," component ",a(n.span,{className:"token punctuation",children:"}"})]})," ",a(n.span,{className:"token keyword module",children:"from"})," ",a(n.span,{className:"token string",children:'"@innoai-tech/vuekit"'}),a(n.span,{className:"token punctuation",children:";"}),`
`,a(n.span,{className:"token keyword module",children:"import"})," ",e(n.span,{className:"token imports",children:[a(n.span,{className:"token punctuation",children:"{"})," mdiSend ",a(n.span,{className:"token punctuation",children:"}"})]})," ",a(n.span,{className:"token keyword module",children:"from"})," ",a(n.span,{className:"token string",children:'"@mdi/js"'}),a(n.span,{className:"token punctuation",children:";"}),`
`,a(n.span,{className:"token keyword module",children:"import"})," ",e(n.span,{className:"token imports",children:[a(n.span,{className:"token punctuation",children:"{"})," ",a(n.span,{className:"token maybe-class-name",children:"Icon"})," ",a(n.span,{className:"token punctuation",children:"}"})]})," ",a(n.span,{className:"token keyword module",children:"from"})," ",a(n.span,{className:"token string",children:'"@innoai-tech/vuematerial"'}),a(n.span,{className:"token punctuation",children:";"}),`

`,a(n.span,{className:"token keyword module",children:"export"})," ",a(n.span,{className:"token keyword module",children:"default"})," ",a(n.span,{className:"token function",children:"component"}),a(n.span,{className:"token punctuation",children:"("}),a(n.span,{className:"token punctuation",children:"("}),a(n.span,{className:"token punctuation",children:")"})," ",a(n.span,{className:"token arrow operator",children:"=>"})," ",a(n.span,{className:"token punctuation",children:"{"}),`
  `,a(n.span,{className:"token keyword control-flow",children:"return"})," ",a(n.span,{className:"token punctuation",children:"("}),a(n.span,{className:"token punctuation",children:")"})," ",a(n.span,{className:"token arrow operator",children:"=>"})," ",e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[a(n.span,{className:"token punctuation",children:"<"}),a(n.span,{className:"token class-name",children:"Icon"})]})," ",a(n.span,{className:"token attr-name",children:"path"}),e(n.span,{className:"token script language-javascript",children:[a(n.span,{className:"token script-punctuation punctuation",children:"="}),a(n.span,{className:"token punctuation",children:"{"}),"mdiSend",a(n.span,{className:"token punctuation",children:"}"})]})," ",a(n.span,{className:"token punctuation",children:"/>"})]}),a(n.span,{className:"token punctuation",children:";"}),`
`,a(n.span,{className:"token punctuation",children:"}"}),a(n.span,{className:"token punctuation",children:")"}),a(n.span,{className:"token punctuation",children:";"}),`
`]})})]}),`
`,a(n.h3,{children:"和 Button 一起使用"}),`
`,e(n.div,{"data-example":"",children:[a(n.div,{"data-example-container":"",children:a(n.codeblocke7f6c011,{})}),a(n.pre,{className:"language-tsx",children:e(n.code,{className:"language-tsx",children:[a(n.span,{className:"token keyword module",children:"import"})," ",e(n.span,{className:"token imports",children:[a(n.span,{className:"token punctuation",children:"{"})," component ",a(n.span,{className:"token punctuation",children:"}"})]})," ",a(n.span,{className:"token keyword module",children:"from"})," ",a(n.span,{className:"token string",children:'"@innoai-tech/vuekit"'}),a(n.span,{className:"token punctuation",children:";"}),`
`,a(n.span,{className:"token keyword module",children:"import"})," ",e(n.span,{className:"token imports",children:[a(n.span,{className:"token punctuation",children:"{"})," mdiSend ",a(n.span,{className:"token punctuation",children:"}"})]})," ",a(n.span,{className:"token keyword module",children:"from"})," ",a(n.span,{className:"token string",children:'"@mdi/js"'}),a(n.span,{className:"token punctuation",children:";"}),`
`,a(n.span,{className:"token keyword module",children:"import"})," ",e(n.span,{className:"token imports",children:[a(n.span,{className:"token punctuation",children:"{"})," ",a(n.span,{className:"token maybe-class-name",children:"Icon"})," ",a(n.span,{className:"token punctuation",children:"}"})]})," ",a(n.span,{className:"token keyword module",children:"from"})," ",a(n.span,{className:"token string",children:'"@innoai-tech/vuematerial"'}),a(n.span,{className:"token punctuation",children:";"}),`
`,a(n.span,{className:"token keyword module",children:"import"})," ",e(n.span,{className:"token imports",children:[a(n.span,{className:"token punctuation",children:"{"})," ",a(n.span,{className:"token maybe-class-name",children:"IconButton"}),a(n.span,{className:"token punctuation",children:","})," ",a(n.span,{className:"token maybe-class-name",children:"FilledButton"})," ",a(n.span,{className:"token punctuation",children:"}"})]})," ",a(n.span,{className:"token keyword module",children:"from"})," ",a(n.span,{className:"token string",children:'"@innoai-tech/vuematerial"'}),a(n.span,{className:"token punctuation",children:";"}),`
`,a(n.span,{className:"token keyword module",children:"import"})," ",e(n.span,{className:"token imports",children:[a(n.span,{className:"token punctuation",children:"{"})," ",a(n.span,{className:"token maybe-class-name",children:"Box"})," ",a(n.span,{className:"token punctuation",children:"}"})]})," ",a(n.span,{className:"token keyword module",children:"from"})," ",a(n.span,{className:"token string",children:'"@innoai-tech/vueuikit"'}),a(n.span,{className:"token punctuation",children:";"}),`

`,a(n.span,{className:"token keyword module",children:"export"})," ",a(n.span,{className:"token keyword module",children:"default"})," ",a(n.span,{className:"token function",children:"component"}),a(n.span,{className:"token punctuation",children:"("}),a(n.span,{className:"token punctuation",children:"("}),a(n.span,{className:"token punctuation",children:")"})," ",a(n.span,{className:"token arrow operator",children:"=>"})," ",a(n.span,{className:"token punctuation",children:"{"}),`
  `,a(n.span,{className:"token keyword control-flow",children:"return"})," ",a(n.span,{className:"token punctuation",children:"("}),a(n.span,{className:"token punctuation",children:")"})," ",a(n.span,{className:"token arrow operator",children:"=>"})," ",a(n.span,{className:"token punctuation",children:"("}),`
    `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[a(n.span,{className:"token punctuation",children:"<"}),a(n.span,{className:"token class-name",children:"Box"})]})," ",a(n.span,{className:"token attr-name",children:"sx"}),e(n.span,{className:"token script language-javascript",children:[a(n.span,{className:"token script-punctuation punctuation",children:"="}),a(n.span,{className:"token punctuation",children:"{"}),a(n.span,{className:"token punctuation",children:"{"})," display",a(n.span,{className:"token operator",children:":"})," ",a(n.span,{className:"token string",children:'"flex"'}),a(n.span,{className:"token punctuation",children:","})," gap",a(n.span,{className:"token operator",children:":"})," ",a(n.span,{className:"token number",children:"8"})," ",a(n.span,{className:"token punctuation",children:"}"}),a(n.span,{className:"token punctuation",children:"}"})]}),a(n.span,{className:"token punctuation",children:">"})]}),a(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[a(n.span,{className:"token punctuation",children:"<"}),a(n.span,{className:"token class-name",children:"IconButton"})]})," ",a(n.span,{className:"token attr-name",children:"active"})," ",a(n.span,{className:"token attr-name",children:"onClick"}),e(n.span,{className:"token script language-javascript",children:[a(n.span,{className:"token script-punctuation punctuation",children:"="}),a(n.span,{className:"token punctuation",children:"{"}),a(n.span,{className:"token punctuation",children:"("}),a(n.span,{className:"token punctuation",children:")"})," ",a(n.span,{className:"token arrow operator",children:"=>"})," ",a(n.span,{className:"token console class-name",children:"console"}),a(n.span,{className:"token punctuation",children:"."}),a(n.span,{className:"token method function property-access",children:"log"}),a(n.span,{className:"token punctuation",children:"("}),a(n.span,{className:"token number",children:"1"}),a(n.span,{className:"token punctuation",children:")"}),a(n.span,{className:"token punctuation",children:"}"})]}),a(n.span,{className:"token punctuation",children:">"})]}),a(n.span,{className:"token plain-text",children:`
        `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[a(n.span,{className:"token punctuation",children:"<"}),a(n.span,{className:"token class-name",children:"Icon"})]})," ",a(n.span,{className:"token attr-name",children:"path"}),e(n.span,{className:"token script language-javascript",children:[a(n.span,{className:"token script-punctuation punctuation",children:"="}),a(n.span,{className:"token punctuation",children:"{"}),"mdiSend",a(n.span,{className:"token punctuation",children:"}"})]})," ",a(n.span,{className:"token punctuation",children:"/>"})]}),a(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[a(n.span,{className:"token punctuation",children:"</"}),a(n.span,{className:"token class-name",children:"IconButton"})]}),a(n.span,{className:"token punctuation",children:">"})]}),a(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[a(n.span,{className:"token punctuation",children:"<"}),a(n.span,{className:"token class-name",children:"FilledButton"})]}),`
        `,a(n.span,{className:"token attr-name",children:"active"}),e(n.span,{className:"token script language-javascript",children:[a(n.span,{className:"token script-punctuation punctuation",children:"="}),a(n.span,{className:"token punctuation",children:"{"}),a(n.span,{className:"token boolean",children:"false"}),a(n.span,{className:"token punctuation",children:"}"})]}),`
      `,a(n.span,{className:"token punctuation",children:">"})]}),a(n.span,{className:"token plain-text",children:`
        Send
        `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[a(n.span,{className:"token punctuation",children:"<"}),a(n.span,{className:"token class-name",children:"Icon"})]})," ",a(n.span,{className:"token attr-name",children:"path"}),e(n.span,{className:"token script language-javascript",children:[a(n.span,{className:"token script-punctuation punctuation",children:"="}),a(n.span,{className:"token punctuation",children:"{"}),"mdiSend",a(n.span,{className:"token punctuation",children:"}"})]})," ",a(n.span,{className:"token attr-name",children:"placement"}),e(n.span,{className:"token attr-value",children:[a(n.span,{className:"token punctuation attr-equals",children:"="}),a(n.span,{className:"token punctuation",children:'"'}),"end",a(n.span,{className:"token punctuation",children:'"'})]})," ",a(n.span,{className:"token punctuation",children:"/>"})]}),a(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[a(n.span,{className:"token punctuation",children:"</"}),a(n.span,{className:"token class-name",children:"FilledButton"})]}),a(n.span,{className:"token punctuation",children:">"})]}),a(n.span,{className:"token plain-text",children:`
    `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[a(n.span,{className:"token punctuation",children:"</"}),a(n.span,{className:"token class-name",children:"Box"})]}),a(n.span,{className:"token punctuation",children:">"})]}),`
  `,a(n.span,{className:"token punctuation",children:")"}),a(n.span,{className:"token punctuation",children:";"}),`
`,a(n.span,{className:"token punctuation",children:"}"}),a(n.span,{className:"token punctuation",children:")"}),a(n.span,{className:"token punctuation",children:";"}),`
`]})})]})]})}function L(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{wrapper:n}=s.components||{};return n?a(n,Object.assign({},s,{children:a(f,s)})):f(s)}const A=j(()=>()=>S(L,{components:{codeblockd4735e3a:D,codeblocke7f6c011:M}}));export{A as default};