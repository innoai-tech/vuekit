import{c as l,r as A,g as C,j as g,z as e}from"./lib-nodepkg-vuekit.936e1239.chunk.js";import{E as o,S as i,C as c}from"./lib-webapp-vuekit.9af7a98e.chunk.js";const d=l(()=>{const I=A(1);return()=>C("div",{style:{display:"flex",gap:"1rem"},children:[C("div",{children:["Counts: ",I.value]}),g("button",{onClick:()=>I.value++,children:"Click To Count"})]})});d.__raw="aW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAiQGlubm9haS10ZWNoL3Z1ZWtpdCI7CmltcG9ydCB7IHJlZiB9IGZyb20gInZ1ZSI7CgpleHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKCkgPT4gewogIGNvbnN0IGNvdW50ID0gcmVmKDEpOwoKICByZXR1cm4gKCkgPT4gKAogICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAiZmxleCIsIGdhcDogIjFyZW0iIH19PgogICAgICA8ZGl2PkNvdW50czoge2NvdW50LnZhbHVlfTwvZGl2PgogICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvdW50LnZhbHVlKyt9PkNsaWNrIFRvIENvdW50PC9idXR0b24+CiAgICA8L2Rpdj4KICApOwp9KTsK";const s=l({value:e.string().optional().default("1"),type:e.enum(["text","number"]),onValueChange:e.function().args(e.string())},(I,n)=>{let{emit:a}=n;return()=>g("input",{value:I.value,onInput:u=>{a("value-change",u.target.value)}})}),t=l(()=>{const I=A("");return()=>g("div",{children:C("div",{style:{display:"flex",gap:"1rem"},children:[g(s,{type:"text",onValueChange:n=>{I.value=n}}),C("div",{children:["Inputted: ",I.value]})]})})});t.__raw="aW1wb3J0IHsgY29tcG9uZW50LCB6IH0gZnJvbSAiQGlubm9haS10ZWNoL3Z1ZWtpdCI7CmltcG9ydCB7IHJlZiB9IGZyb20gInZ1ZSI7CgpleHBvcnQgY29uc3QgVGV4dElucHV0ID0gY29tcG9uZW50KAogIHsKICAgIC8vIFZVRSDnmoTms6jlhozmnLrliLbvvIhQcm94eSDlrprkuYnln7rlh4bvvIzku6Xlj4rku44gYXR0cnMg5Lit5o+Q5Y+WIHByb3BzIOeahCBlbWl0cyDnmoTkvp3mja7vvIkKICAgIC8vIOW/hemhu+WjsOaYju+8jOWTquaAleWPquaYr+WxnuaAp+WQjeensAogICAgLy8KICAgIC8vIOWPiOeUseS6jiBUeXBlU3RyaW5nIOeahOiAgemXrumimCAgaHR0cHM6Ly93d3cudHlwZXNjcmlwdG5lZWRzdHlwZXMuY29tLyN0aGUtcHJvYmxlbQogICAgLy8g57G75Z6L5a6a5LmJ5peg5rOV6L2s5Li6IFJ1bnRpbWUg5a+56LGhCiAgICAvLyDlm6DmraTov5nph4zpgJrov4cgem9kIOWumuS5ieexu+Wei+WQjiDmnaXov5vooYzlj43lkJHmjqjlr7wKICAgIC8vIOazqOaEj++8jOWmguaciSBvcHRpb25hbCDlkowgZGVmYXVsdO+8jOivt+acgOWQjuWjsOaYjgogICAgdmFsdWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5kZWZhdWx0KCIxIiksCiAgICB0eXBlOiB6LmVudW0oWyJ0ZXh0IiwgIm51bWJlciJdKSwKCiAgICAvLyBvbltBLVpdIOWJjee8gOinhuS4uiBlbWl0cwogICAgb25WYWx1ZUNoYW5nZTogei5mdW5jdGlvbigpLmFyZ3Moei5zdHJpbmcoKSksCiAgfSwKICAocHJvcHMsIHsgZW1pdCB9KSA9PiB7CiAgICAvLyBzZXR1cAoKICAgIHJldHVybiAoKSA9PiAoCiAgICAgIDxpbnB1dAogICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX0KICAgICAgICBvbklucHV0PXsoZSkgPT4gewogICAgICAgICAgZW1pdCgidmFsdWUtY2hhbmdlIiwgKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTsKICAgICAgICB9fQogICAgICAvPgogICAgKTsKICB9Cik7CgpleHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKCkgPT4gewogIGNvbnN0IGlucHV0VmFsdWUgPSByZWYoIiIpOwoKICByZXR1cm4gKCkgPT4gKAogICAgPGRpdj4KICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAiZmxleCIsIGdhcDogIjFyZW0iIH19PgogICAgICAgIDxUZXh0SW5wdXQKICAgICAgICAgIHR5cGU9eyJ0ZXh0In0KICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZSkgPT4gewogICAgICAgICAgICBpbnB1dFZhbHVlLnZhbHVlID0gdmFsdWU7CiAgICAgICAgICB9fQogICAgICAgIC8+CiAgICAgICAgPGRpdj5JbnB1dHRlZDoge2lucHV0VmFsdWUudmFsdWV9PC9kaXY+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgKTsKfSk7Cg==";const m=l(()=>()=>C(c,{children:[g(i,{content:`
为了更好的 TypeScript 和 JSX 的支持，重新抽象了定义组件的方式   

一般组件：
      `,children:g(o,{component:d})}),g(i,{content:"\n可复用组件：\n\n* `props` 和 `emits` 合并声明，基于 [zod](https://zod.dev/)   \n      ",children:g(o,{component:t})})]}));export{m as default};
