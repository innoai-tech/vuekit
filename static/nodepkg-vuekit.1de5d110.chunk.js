import{e as v,E as b,K as d,p as g,P as p,Q as P,S as j,j as x,F as h,z as y,U as k,V as A}from"./lib-nodepkg-vuekit.c3c75fe5.chunk.js";function F(t,e){const n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{})??e,o=e??t,a=v(t)?{}:t,[c,l]=b(Object.keys(a),s=>/^on[A-Z]/.test(s));return Object.assign(d({...n,...{emits:c.map(s=>g(s.slice(2))),props:l.filter(s=>!/^[$]/.test(s)).reduce((s,i)=>{const m=a[i];return{...s,[i]:{default:()=>m.parse(void 0),validator:f=>m.safeParse(f).success}}},{})},setup:(s,i)=>o(s,i)}),{propTypes:a})}const R=(t,e)=>new Proxy(t,{get(r,n){return e[n]??r[n]}});function S(t){const e=t.subscribe();p(()=>e.unsubscribe())}const $=(t,e)=>new Proxy(t,{get(r,n){return n==="value"?e.value:r[n]},set(r,n,o){return n==="value"?(e.value=o,!0):(r[n]=o,!0)}}),U=t=>{const e=new P(t);return $(e,k((n,o)=>({get(){return n(),e.value},set(a){Object.is(a,e.value)||(e.next(a),o())}})))};function w(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=Symbol(e.name??"");let n;const o=()=>n??(n=v(t)?t():t),a=F({value:y.custom().optional()},(c,l)=>{let{slots:u}=l;return j(r,c.value??o()),()=>{var s;return x(h,{children:(s=u.default)==null?void 0:s.call(u)})}},{...e,name:`Provider(${e.name??""})`});return R(a,{use:()=>A(r,o,!0)})}export{w as a,F as c,U as o,S as s};