import{e as g,E as f,p as b,P as d,Q as p,S as P,j as h,F as j,z as x,U as y,V as k}from"./lib-nodepkg-vuekit.a57e5331.chunk.js";function A(r,e){const t=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{})??e,o=e??r,a=g(r)?{}:r,[c,l]=f(Object.keys(a),n=>/^on[A-Z]/.test(n)),u={emits:c.map(n=>b(n.slice(2))),props:l.filter(n=>!/^[$]/.test(n)).reduce((n,i)=>{const m=a[i];return{...n,[i]:{default:()=>m.parse(void 0),validator:v=>m.safeParse(v).success}}},{})};return{get setup(){return(n,i)=>o(n,i)},get emits(){return u.emits},get props(){return u.props},get inheritAttrs(){return t.inheritAttrs},get name(){return this.displayName??t.name??"Unknown"},get propTypes(){return a}}}const F=(r,e)=>new Proxy(r,{get(s,t){return e[t]??s[t]}});function $(r){const e=r.subscribe();d(()=>e.unsubscribe())}const R=(r,e)=>new Proxy(r,{get(s,t){return t==="value"?e.value:s[t]},set(s,t,o){return t==="value"?(e.value=o,!0):(s[t]=o,!0)}}),w=r=>{const e=new p(r);return R(e,y((t,o)=>({get(){return t(),e.value},set(a){Object.is(a,e.value)||(e.next(a),o())}})))};function S(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=Symbol(e.name??"");let t;const o=()=>t??(t=g(r)?r():r),a=A({value:x.custom().optional()},(c,l)=>{let{slots:u}=l;return P(s,c.value??o()),()=>{var n;return h(j,{children:(n=u.default)==null?void 0:n.call(u)})}},{...e,name:`Provider(${e.name??""})`});return F(a,{use:()=>k(s,o,!0)})}export{S as a,A as c,w as o,$ as s};