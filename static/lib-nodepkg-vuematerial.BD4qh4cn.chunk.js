import{s as n,v as a,b as o,d as $,t as c,P as w,O as S}from"./lib-nodepkg-vueuikit.D4KNpCNM.chunk.js";import{j as i,f as m,g as y,b,w as I,d as f}from"./lib-nodepkg-vuekit.BNqaAJVf.chunk.js";import"./lib-nodepkg-typedef.CUo9Xxdg.chunk.js";import{g}from"./vendor-innoai-tech-lodash.Dlm2YQgM.chunk.js";const p=n("button")({textStyle:"sys.label-large",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",outline:"none",overflow:"hidden",border:0,margin:0,userSelect:"none",cursor:"pointer",_disabled:{cursor:"not-allowed"},gap:8,h:40,px:24,rounded:20,transitionDuration:"md4",transitionTimingFunction:"standard-accelerate",bg:"none",pos:"relative",zIndex:1,_$before:{content:'""',pos:"absolute",top:0,right:0,left:0,bottom:0,zIndex:-1,transitionDuration:"md1",transitionTimingFunction:"standard-accelerate"},$data_icon:{boxSize:18,_data_placement__start:{ml:-8},_data_placement__end:{mr:-8}}}),W=n(p)({containerStyle:"sys.primary",shadow:"1",_hover:{shadow:"2",_$before:{bgColor:a("white",o(.08))}},_focus:{shadow:"2",_$before:{bgColor:a("white",o(.12))}},_active:{shadow:"2",_$before:{bgColor:a("white",o(.12))}},_disabled:{shadow:"0",color:a("sys.on-surface",o(.38)),bgColor:"rgba(0,0,0,0)",_$before:{bgColor:a("sys.on-surface",o(.12))}}}),P=n(p)({color:"sys.primary",shadow:"1",_$before:{bgColor:"sys.surface-container-low"},_hover:{shadow:"2",_$before:{bgColor:a("sys.primary",o(.08))}},_focus:{shadow:"2",_$before:{bgColor:a("sys.primary",o(.12))}},_active:{shadow:"2",_$before:{bgColor:a("sys.primary",o(.12))}},_disabled:{shadow:"0",color:a("sys.on-surface",o(.38)),_$before:{bgColor:a("sys.on-surface",o(.12))}}}),O=n(p)({extends:[{px:16,$data_icon:{_data_placement__start:{ml:-4},_data_placement__end:{mr:-4}}}],color:"sys.primary",_$before:{bgColor:"rgba(0,0,0,0)"},_hover:{_$before:{bgColor:a("sys.primary",o(.08))}},_focus:{_$before:{bgColor:a("sys.primary",o(.12))}},_active:{_$before:{bgColor:a("sys.primary",o(.12))}},_disabled:{color:a("sys.on-surface",o(.38)),bgColor:"rgba(0,0,0,0)",_$before:{bgColor:"rgba(0,0,0,0)"}}}),H=n(p)({containerStyle:"sys.secondary-container",color:"sys.primary",shadow:"0",_hover:{shadow:"1",_$before:{bgColor:a("sys.on-secondary-container",o(.08))}},_focus:{_$before:{bgColor:a("sys.on-secondary-container",o(.12))}},_active:{_$before:{bgColor:a("sys.on-secondary-container",o(.12))}},_disabled:{color:a("sys.on-surface",o(.38)),bgColor:"rgba(0,0,0,0)",shadow:"0",_$before:{bgColor:a("sys.on-surface",o(.12))}}}),K=n(p)({extends:[{border:"1px solid"}],color:"sys.primary",bgColor:"rgba(0,0,0,0)",borderColor:"sys.outline",_hover:{bgColor:a("sys.primary",o(.08))},_active:{bgColor:a("sys.primary",o(.12))},_focus:{bgColor:a("sys.primary",o(.12))},_disabled:{color:a("sys.on-surface",o(.38)),bgColor:"rgba(0,0,0,0)",borderColor:a("sys.on-surface",o(.12))}}),N=n(O)({boxSize:40,p:0}),V=n("span",(r,e)=>s=>{const t=r.size??24;return i(s,{"data-icon":!0,"data-placement":r.placement,"data-has-size":!!r.size,children:i("svg",{viewBox:"0 0 24 24",width:t,height:t,children:i("path",{d:r.path})})})})({display:"inline-block",_data_has_size__false:{boxSize:"1.2em","& svg":{w:"100%",h:"100%"}}}),T=$({from:{opacity:0},to:{opacity:1},duration:c.duration.md1,easing:c.easing.standard.accelerate},{from:{opacity:1},to:{opacity:0},duration:c.duration.sm4,easing:c.easing.standard.decelerate}),z=n("div")({py:4,px:12,rounded:"sm",shadow:"3",containerStyle:"sys.on-surface",pos:"relative",zIndex:100}),q=m((r,{slots:e})=>{const s=y(!1);return()=>{const t=e.default()[0];return i(w,{isOpen:s.value,$content:i(z,{children:r.title}),$transition:({content:l})=>i(T,{children:l}),children:t?b(t,{onMouseover:()=>{s.value=!0},onMouseout:()=>{s.value=!1}}):null})}}),B=n("div")({py:8,rounded:"sm",shadow:"2",minW:120,containerStyle:"sys.surface-container",pos:"relative",zIndex:100}),A=n("div")({"& + &":{borderTop:"1px solid",borderColor:"sys.outline-variant"},py:8,px:16,textStyle:"sys.label-large",containerStyle:"sys.surface-container",_hover:{cursor:"pointer",bgColor:a("sys.on-surface",o(.08))}}),G=m((r,{slots:e})=>{const s=y(!1);return()=>{var l;const t=e.default?e.default()[0]:void 0;return i(w,{isOpen:s.value,placement:r.placement,onClickOutside:()=>{s.value=!1},$content:i(B,{children:(l=e.menu)==null?void 0:l.call(e)}),children:t?b(t,{onClick:()=>{s.value=!0}}):null})}}),D=n("div")({pos:"absolute",top:0,left:0,h:"100vh",w:"100vw",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center"}),F=n("div")({cursor:"pointer",pos:"absolute",top:0,left:0,h:"100vh",w:"100vw",zIndex:-1,bgColor:a("sys.scrim",o(.38))}),J=n("div")({py:12,rounded:"sm",shadow:"3",minW:"50vw",containerStyle:"sys.surface-container-high"}),k=$({from:{opacity:0},to:{opacity:1},duration:c.duration.md1,easing:c.easing.standard.accelerate},{from:{opacity:1},to:{opacity:0},duration:c.duration.sm4,easing:c.easing.standard.accelerate}),Q=m((r,{slots:e,emit:s})=>{const t=y(r.isOpen??!1),l=y(!1);return I(()=>r.isOpen,d=>{d===!0?t.value=!0:d===!1&&(l.value=!1)}),()=>{var d;return i(S,{isOpen:t.value,onContentBeforeMount:()=>{l.value=!0},onEscKeydown:()=>{l.value=!1},children:f(D,{children:[i(k,{onComplete:_=>{_==="leave"&&(t.value=!1,s("close"))},children:l.value?i(F,{onClick:()=>{l.value=!1}}):null}),(d=e.default)==null?void 0:d.call(e)]})})}}),R=n("label",(r,{slots:e})=>s=>{var h,v,C;let t=r.valued;const l=r.invalid;let d=r.disabled;const _=(((h=e.default)==null?void 0:h.call(e))??[]).map(u=>u.type==="input"?(t=!!g(u.props,["value"],g(u.props,["placeholder"],t)),d=g(u.props,["disabled"],d),b(u,{disabled:d})):b(u));return f(s,{"data-valued":t,"data-invalid":l,"data-disabled":d,"data-focus-within":r.focus,"data-has-leading":!!e.leading,"data-has-trailing":!!e.trailing,children:[f("div",{"data-input-container":"",children:[e.leading&&i(x,{role:"leading",children:e.leading()}),i("div",{"data-input-label":"",children:(v=e.label)==null?void 0:v.call(e)}),_,e.trailing&&i(x,{role:"trailing",children:e.trailing()})]}),e.supporting&&i("div",{"data-input-supporting":"",children:(C=e.supporting)==null?void 0:C.call(e)})]})})({display:"block",pos:"relative",textStyle:"sys.body-large",$data_input_container:{pos:"relative"},$data_input:{outline:"none",flex:1,w:"100%",m:0,px:16,py:4,minHeight:56,bg:"none",border:"none",cursor:"text","&[readonly]":{cursor:"pointer"},bgColor:"sys.surface-container-highest",color:"sys.on-surface",roundedTop:"xs",borderBottom:"1px solid",borderColor:"sys.outline-variant",textStyle:"sys.body-large",transitionDuration:"sm1",transitionTimingFunction:"standard"},$data_input_label:{pos:"absolute",top:4,bottom:4,left:16,color:"sys.on-surface-variant",display:"flex",alignItems:"center",transitionDuration:"sm2",transitionTimingFunction:"standard-accelerate"},$data_input_supporting:{textStyle:"sys.body-small",px:16,pt:4,display:"flex",gap:16,color:"sys.on-surface-variant"},_has_leading:{$data_input:{pl:36},$data_input_label:{left:36}},_has_trailing:{$data_input:{pr:32}},_valued:{$data_input:{pt:18},$data_input_label:{top:8,bottom:"auto",textStyle:"sys.body-small"}},_focusWithin:{$data_input:{pt:18,borderBottom:"2px solid",borderColor:"sys.primary"},$data_input_label:{top:8,bottom:"auto",textStyle:"sys.body-small",color:"sys.primary"}},_invalid:{$data_input:{borderBottom:"2px solid",borderColor:"sys.error"},$data_input_label:{color:"sys.error"},$data_input_supporting:{color:"sys.error"}},_disabled:{opacity:.38,cursor:"not-allowed"}}),x=n("div")({pos:"absolute",top:4,bottom:4,display:"flex",alignItems:"center",color:"sys.on-surface-variant",_role__leading:{left:12,$data_icon:{ml:-4}},_role__trailing:{right:12,$data_icon:{mr:-4}}});export{Q as D,P as E,W as F,N as I,A as L,G as M,K as O,q as T,V as a,O as b,J as c,H as d,R as e};
