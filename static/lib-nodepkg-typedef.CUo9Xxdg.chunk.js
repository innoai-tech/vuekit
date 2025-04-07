var sr=Object.defineProperty;var cr=(t,e,r)=>e in t?sr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var b=(t,e,r)=>cr(t,typeof e!="symbol"?e+"":e,r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();const ae=t=>typeof t>"u",fr=t=>Object.is(t,null),Z=t=>!!t&&typeof t=="object",ye=t=>!!t&&t.constructor==Object,Ie=t=>Array.isArray(t),vt=t=>typeof t=="number"&&!Number.isNaN(t)&&Number.isInteger(t),ur=t=>typeof t=="boolean",Ve=t=>typeof t=="string",dr=t=>typeof t=="object"&&typeof t[Symbol.iterator]=="function",At=t=>typeof t=="function"&&`${t}`.startsWith("class"),lr=t=>!!(t&&t.constructor&&t.call&&t.apply);var Ft=Symbol.for("immer-nothing"),gt=Symbol.for("immer-draftable"),z=Symbol.for("immer-state");function I(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var V=Object.getPrototypeOf;function K(t){return!!t&&!!t[z]}function H(t){var e;return t?Nt(t)||Array.isArray(t)||!!t[gt]||!!((e=t.constructor)!=null&&e[gt])||ke(t)||Ae(t):!1}var yr=Object.prototype.constructor.toString();function Nt(t){if(!t||typeof t!="object")return!1;const e=V(t);if(e===null)return!0;const r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===yr}function he(t,e){Re(t)===0?Reflect.ownKeys(t).forEach(r=>{e(r,t[r],t)}):t.forEach((r,n)=>e(n,r,t))}function Re(t){const e=t[z];return e?e.type_:Array.isArray(t)?1:ke(t)?2:Ae(t)?3:0}function xe(t,e){return Re(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function zt(t,e,r){const n=Re(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function hr(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function ke(t){return t instanceof Map}function Ae(t){return t instanceof Set}function L(t){return t.copy_||t.base_}function $e(t,e){if(ke(t))return new Map(t);if(Ae(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const r=Nt(t);if(e===!0||e==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(t);delete n[z];let i=Reflect.ownKeys(n);for(let a=0;a<i.length;a++){const f=i[a],u=n[f];u.writable===!1&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(n[f]={configurable:!0,writable:!0,enumerable:u.enumerable,value:t[f]})}return Object.create(V(t),n)}else{const n=V(t);if(n!==null&&r)return{...t};const i=Object.create(n);return Object.assign(i,t)}}function Ke(t,e=!1){return Fe(t)||K(t)||!H(t)||(Re(t)>1&&(t.set=t.add=t.clear=t.delete=pr),Object.freeze(t),e&&Object.entries(t).forEach(([r,n])=>Ke(n,!0))),t}function pr(){I(2)}function Fe(t){return Object.isFrozen(t)}var mr={};function B(t){const e=mr[t];return e||I(0,t),e}var se;function Ct(){return se}function wr(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function bt(t,e){e&&(B("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Ge(t){We(t),t.drafts_.forEach(vr),t.drafts_=null}function We(t){t===se&&(se=t.parent_)}function Ot(t){return se=wr(se,t)}function vr(t){const e=t[z];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Pt(t,e){e.unfinalizedDrafts_=e.drafts_.length;const r=e.drafts_[0];return t!==void 0&&t!==r?(r[z].modified_&&(Ge(e),I(4)),H(t)&&(t=pe(e,t),e.parent_||me(e,t)),e.patches_&&B("Patches").generateReplacementPatches_(r[z].base_,t,e.patches_,e.inversePatches_)):t=pe(e,r,[]),Ge(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==Ft?t:void 0}function pe(t,e,r){if(Fe(e))return e;const n=e[z];if(!n)return he(e,(i,a)=>_t(t,n,e,i,a,r)),e;if(n.scope_!==t)return e;if(!n.modified_)return me(t,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const i=n.copy_;let a=i,f=!1;n.type_===3&&(a=new Set(i),i.clear(),f=!0),he(a,(u,l)=>_t(t,n,i,u,l,r,f)),me(t,i,!1),r&&t.patches_&&B("Patches").generatePatches_(n,r,t.patches_,t.inversePatches_)}return n.copy_}function _t(t,e,r,n,i,a,f){if(K(i)){const u=a&&e&&e.type_!==3&&!xe(e.assigned_,n)?a.concat(n):void 0,l=pe(t,i,u);if(zt(r,n,l),K(l))t.canAutoFreeze_=!1;else return}else f&&r.add(i);if(H(i)&&!Fe(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;pe(t,i),(!e||!e.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&me(t,i)}}function me(t,e,r=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Ke(e,r)}function gr(t,e){const r=Array.isArray(t),n={type_:r?1:0,scope_:e?e.scope_:Ct(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,a=et;r&&(i=[n],a=ce);const{revoke:f,proxy:u}=Proxy.revocable(i,a);return n.draft_=u,n.revoke_=f,u}var et={get(t,e){if(e===z)return t;const r=L(t);if(!xe(r,e))return br(t,r,e);const n=r[e];return t.finalized_||!H(n)?n:n===De(t.base_,e)?(Te(t),t.copy_[e]=Le(n,t)):n},has(t,e){return e in L(t)},ownKeys(t){return Reflect.ownKeys(L(t))},set(t,e,r){const n=Dt(L(t),e);if(n!=null&&n.set)return n.set.call(t.draft_,r),!0;if(!t.modified_){const i=De(L(t),e),a=i==null?void 0:i[z];if(a&&a.base_===r)return t.copy_[e]=r,t.assigned_[e]=!1,!0;if(hr(r,i)&&(r!==void 0||xe(t.base_,e)))return!0;Te(t),qe(t)}return t.copy_[e]===r&&(r!==void 0||e in t.copy_)||Number.isNaN(r)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=r,t.assigned_[e]=!0),!0},deleteProperty(t,e){return De(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Te(t),qe(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const r=L(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty(){I(11)},getPrototypeOf(t){return V(t.base_)},setPrototypeOf(){I(12)}},ce={};he(et,(t,e)=>{ce[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ce.deleteProperty=function(t,e){return ce.set.call(this,t,e,void 0)};ce.set=function(t,e,r){return et.set.call(this,t[0],e,r,t[0])};function De(t,e){const r=t[z];return(r?L(r):t)[e]}function br(t,e,r){var i;const n=Dt(e,r);return n?"value"in n?n.value:(i=n.get)==null?void 0:i.call(t.draft_):void 0}function Dt(t,e){if(!(e in t))return;let r=V(t);for(;r;){const n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=V(r)}}function qe(t){t.modified_||(t.modified_=!0,t.parent_&&qe(t.parent_))}function Te(t){t.copy_||(t.copy_=$e(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var Or=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,r,n)=>{if(typeof e=="function"&&typeof r!="function"){const a=r;r=e;const f=this;return function(l=a,...y){return f.produce(l,g=>r.call(this,g,...y))}}typeof r!="function"&&I(6),n!==void 0&&typeof n!="function"&&I(7);let i;if(H(e)){const a=Ot(this),f=Le(e,void 0);let u=!0;try{i=r(f),u=!1}finally{u?Ge(a):We(a)}return bt(a,n),Pt(i,a)}else if(!e||typeof e!="object"){if(i=r(e),i===void 0&&(i=e),i===Ft&&(i=void 0),this.autoFreeze_&&Ke(i,!0),n){const a=[],f=[];B("Patches").generateReplacementPatches_(e,i,a,f),n(a,f)}return i}else I(1,e)},this.produceWithPatches=(e,r)=>{if(typeof e=="function")return(f,...u)=>this.produceWithPatches(f,l=>e(l,...u));let n,i;return[this.produce(e,r,(f,u)=>{n=f,i=u}),n,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){H(t)||I(8),K(t)&&(t=Pr(t));const e=Ot(this),r=Le(t,void 0);return r[z].isManual_=!0,We(e),r}finishDraft(t,e){const r=t&&t[z];(!r||!r.isManual_)&&I(9);const{scope_:n}=r;return bt(n,e),Pt(void 0,n)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let r;for(r=e.length-1;r>=0;r--){const i=e[r];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}r>-1&&(e=e.slice(r+1));const n=B("Patches").applyPatches_;return K(t)?n(t,e):this.produce(t,i=>n(i,e))}};function Le(t,e){const r=ke(t)?B("MapSet").proxyMap_(t,e):Ae(t)?B("MapSet").proxySet_(t,e):gr(t,e);return(e?e.scope_:Ct()).drafts_.push(r),r}function Pr(t){return K(t)||I(10,t),Tt(t)}function Tt(t){if(!H(t)||Fe(t))return t;const e=t[z];let r;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,r=$e(t,e.scope_.immer_.useStrictShallowCopy_)}else r=$e(t,!0);return he(r,(n,i)=>{zt(r,n,Tt(i))}),e&&(e.finalized_=!1),r}var C=new Or,_r=C.produce;C.produceWithPatches.bind(C);C.setAutoFreeze.bind(C);C.setUseStrictShallowCopy.bind(C);C.applyPatches.bind(C);C.createDraft.bind(C);C.finishDraft.bind(C);var Mt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var St={};/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Et;function Mr(){if(Et)return St;Et=1;var t;return function(e){(function(r){var n=typeof globalThis=="object"?globalThis:typeof Mt=="object"?Mt:typeof self=="object"?self:typeof this=="object"?this:f(),i=a(e);typeof n.Reflect<"u"&&(i=a(n.Reflect,i)),r(i,n),typeof n.Reflect>"u"&&(n.Reflect=e);function a(u,l){return function(y,g){Object.defineProperty(u,y,{configurable:!0,writable:!0,value:g}),l&&l(y,g)}}function f(){throw new ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.")}})(function(r,n){var i=typeof Symbol=="function",a=i&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:te("Symbol.toPrimitive not found."),f=i&&typeof Symbol.iterator<"u"?Symbol.iterator:te("Symbol.iterator not found."),u=Object.getPrototypeOf(Function),l=typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:te("A valid Map constructor could not be found."),y=typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:te("A valid Set constructor could not be found."),g=typeof WeakMap=="function"?WeakMap:te("A valid WeakMap constructor could not be found."),m=i?Symbol.for("@reflect-metadata:registry"):void 0,k=rr(),q=nr(k);function Ne(o,s,c,d){if(p(c)){if(!ut(o))throw new TypeError;if(!dt(s))throw new TypeError;return Xt(o,s)}else{if(!ut(o))throw new TypeError;if(!E(s))throw new TypeError;if(!E(d)&&!p(d)&&!Q(d))throw new TypeError;return Q(d)&&(d=void 0),c=x(c),Qt(o,s,c,d)}}r("decorate",Ne);function X(o,s){function c(d,w){if(!E(d))throw new TypeError;if(!p(w)&&!er(w))throw new TypeError;ot(o,s,d,w)}return c}r("metadata",X);function Gt(o,s,c,d){if(!E(c))throw new TypeError;return p(d)||(d=x(d)),ot(o,s,c,d)}r("defineMetadata",Gt);function Wt(o,s,c){if(!E(s))throw new TypeError;return p(c)||(c=x(c)),rt(o,s,c)}r("hasMetadata",Wt);function qt(o,s,c){if(!E(s))throw new TypeError;return p(c)||(c=x(c)),ze(o,s,c)}r("hasOwnMetadata",qt);function Lt(o,s,c){if(!E(s))throw new TypeError;return p(c)||(c=x(c)),nt(o,s,c)}r("getMetadata",Lt);function Ht(o,s,c){if(!E(s))throw new TypeError;return p(c)||(c=x(c)),it(o,s,c)}r("getOwnMetadata",Ht);function Bt(o,s){if(!E(o))throw new TypeError;return p(s)||(s=x(s)),at(o,s)}r("getMetadataKeys",Bt);function Ut(o,s){if(!E(o))throw new TypeError;return p(s)||(s=x(s)),st(o,s)}r("getOwnMetadataKeys",Ut);function Jt(o,s,c){if(!E(s))throw new TypeError;p(c)||(c=x(c));var d=re(s,c,!1);return p(d)?!1:d.OrdinaryDeleteMetadata(o,s,c)}r("deleteMetadata",Jt);function Xt(o,s){for(var c=o.length-1;c>=0;--c){var d=o[c],w=d(s);if(!p(w)&&!Q(w)){if(!dt(w))throw new TypeError;s=w}}return s}function Qt(o,s,c,d){for(var w=o.length-1;w>=0;--w){var j=o[w],A=j(s,c,d);if(!p(A)&&!Q(A)){if(!E(A))throw new TypeError;d=A}}return d}function rt(o,s,c){var d=ze(o,s,c);if(d)return!0;var w=Ce(s);return Q(w)?!1:rt(o,w,c)}function ze(o,s,c){var d=re(s,c,!1);return p(d)?!1:ft(d.OrdinaryHasOwnMetadata(o,s,c))}function nt(o,s,c){var d=ze(o,s,c);if(d)return it(o,s,c);var w=Ce(s);if(!Q(w))return nt(o,w,c)}function it(o,s,c){var d=re(s,c,!1);if(!p(d))return d.OrdinaryGetOwnMetadata(o,s,c)}function ot(o,s,c,d){var w=re(c,d,!0);w.OrdinaryDefineOwnMetadata(o,s,c,d)}function at(o,s){var c=st(o,s),d=Ce(o);if(d===null)return c;var w=at(d,s);if(w.length<=0)return c;if(c.length<=0)return w;for(var j=new y,A=[],$=0,D=c;$<D.length;$++){var P=D[$],_=j.has(P);_||(j.add(P),A.push(P))}for(var h=0,v=w;h<v.length;h++){var P=v[h],_=j.has(P);_||(j.add(P),A.push(P))}return A}function st(o,s){var c=re(o,s,!1);return c?c.OrdinaryOwnMetadataKeys(o,s):[]}function ct(o){if(o===null)return 1;switch(typeof o){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return o===null?1:6;default:return 6}}function p(o){return o===void 0}function Q(o){return o===null}function Yt(o){return typeof o=="symbol"}function E(o){return typeof o=="object"?o!==null:typeof o=="function"}function Zt(o,s){switch(ct(o)){case 0:return o;case 1:return o;case 2:return o;case 3:return o;case 4:return o;case 5:return o}var c="string",d=lt(o,a);if(d!==void 0){var w=d.call(o,c);if(E(w))throw new TypeError;return w}return Vt(o)}function Vt(o,s){var c,d,w;{var j=o.toString;if(ue(j)){var d=j.call(o);if(!E(d))return d}var c=o.valueOf;if(ue(c)){var d=c.call(o);if(!E(d))return d}}throw new TypeError}function ft(o){return!!o}function Kt(o){return""+o}function x(o){var s=Zt(o);return Yt(s)?s:Kt(s)}function ut(o){return Array.isArray?Array.isArray(o):o instanceof Object?o instanceof Array:Object.prototype.toString.call(o)==="[object Array]"}function ue(o){return typeof o=="function"}function dt(o){return typeof o=="function"}function er(o){switch(ct(o)){case 3:return!0;case 4:return!0;default:return!1}}function lt(o,s){var c=o[s];if(c!=null){if(!ue(c))throw new TypeError;return c}}function yt(o){var s=lt(o,f);if(!ue(s))throw new TypeError;var c=s.call(o);if(!E(c))throw new TypeError;return c}function ht(o){return o.value}function pt(o){var s=o.next();return s.done?!1:s}function mt(o){var s=o.return;s&&s.call(o)}function Ce(o){var s=Object.getPrototypeOf(o);if(typeof o!="function"||o===u||s!==u)return s;var c=o.prototype,d=c&&Object.getPrototypeOf(c);if(d==null||d===Object.prototype)return s;var w=d.constructor;return typeof w!="function"||w===o?s:w}function te(o){throw o}function tr(){var o;!p(m)&&typeof n.Reflect<"u"&&!(m in n.Reflect)&&typeof n.Reflect.defineMetadata=="function"&&(o=ir(n.Reflect));var s,c,d,w=new g,j={registerProvider:A,getProvider:D,setProvider:_};return j;function A(h){if(!Object.isExtensible(j))throw new Error("Cannot add provider to a frozen registry.");switch(!0){case o===h:break;case p(s):s=h;break;case s===h:break;case p(c):c=h;break;case c===h:break;default:d===void 0&&(d=new y),d.add(h);break}}function $(h,v){if(!p(s)){if(s.isProviderFor(h,v))return s;if(!p(c)){if(c.isProviderFor(h,v))return s;if(!p(d))for(var M=yt(d);;){var S=pt(M);if(!S)return;var T=ht(S);if(T.isProviderFor(h,v))return mt(M),T}}}if(!p(o)&&o.isProviderFor(h,v))return o}function D(h,v){var M=w.get(h),S;return p(M)||(S=M.get(v)),p(S)&&(S=$(h,v),p(S)||(p(M)&&(M=new l,w.set(h,M)),M.set(v,S))),S}function P(h){if(p(h))throw new TypeError;return s===h||c===h||!p(d)&&d.has(h)}function _(h,v,M){if(!P(M))throw new Error("Metadata provider not registered.");var S=D(h,v);if(S!==M){if(!p(S))return!1;var T=w.get(h);p(T)&&(T=new l,w.set(h,T)),T.set(v,M)}return!0}}function rr(){var o;return!p(m)&&E(n.Reflect)&&Object.isExtensible(n.Reflect)&&(o=n.Reflect[m]),p(o)&&(o=tr()),!p(m)&&E(n.Reflect)&&Object.isExtensible(n.Reflect)&&Object.defineProperty(n.Reflect,m,{enumerable:!1,configurable:!1,writable:!1,value:o}),o}function nr(o){var s=new g,c={isProviderFor:function(P,_){var h=s.get(P);return p(h)?!1:h.has(_)},OrdinaryDefineOwnMetadata:A,OrdinaryHasOwnMetadata:w,OrdinaryGetOwnMetadata:j,OrdinaryOwnMetadataKeys:$,OrdinaryDeleteMetadata:D};return k.registerProvider(c),c;function d(P,_,h){var v=s.get(P),M=!1;if(p(v)){if(!h)return;v=new l,s.set(P,v),M=!0}var S=v.get(_);if(p(S)){if(!h)return;if(S=new l,v.set(_,S),!o.setProvider(P,_,c))throw v.delete(_),M&&s.delete(P),new Error("Wrong provider for target.")}return S}function w(P,_,h){var v=d(_,h,!1);return p(v)?!1:ft(v.has(P))}function j(P,_,h){var v=d(_,h,!1);if(!p(v))return v.get(P)}function A(P,_,h,v){var M=d(h,v,!0);M.set(P,_)}function $(P,_){var h=[],v=d(P,_,!1);if(p(v))return h;for(var M=v.keys(),S=yt(M),T=0;;){var wt=pt(S);if(!wt)return h.length=T,h;var or=ht(wt);try{h[T]=or}catch(ar){try{mt(S)}finally{throw ar}}T++}}function D(P,_,h){var v=d(_,h,!1);if(p(v)||!v.delete(P))return!1;if(v.size===0){var M=s.get(_);p(M)||(M.delete(h),M.size===0&&s.delete(M))}return!0}}function ir(o){var s=o.defineMetadata,c=o.hasOwnMetadata,d=o.getOwnMetadata,w=o.getOwnMetadataKeys,j=o.deleteMetadata,A=new g,$={isProviderFor:function(D,P){var _=A.get(D);return!p(_)&&_.has(P)?!0:w(D,P).length?(p(_)&&(_=new y,A.set(D,_)),_.add(P),!0):!1},OrdinaryDefineOwnMetadata:s,OrdinaryHasOwnMetadata:c,OrdinaryGetOwnMetadata:d,OrdinaryOwnMetadataKeys:w,OrdinaryDeleteMetadata:j};return $}function re(o,s,c){var d=k.getProvider(o,s);if(!p(d))return d;if(c){if(k.setProvider(o,s,q))return q;throw new Error("Illegal state.")}}})}(t||(t={})),St}Mr();class fe{static getOwnPropertyNames(e){return Reflect.getMetadataKeys(e)}static get(e,r){return Reflect.getMetadata(r,e)}static define(e,r,n,i){if(e&&e.constructor&&e.constructor!=Object){if(lr(n)){Reflect.defineMetadata(r,_r(Reflect.getMetadata(r,e)??i??{},n),e);return}Reflect.defineMetadata(r,n,e)}}}const ee={path:[],branch:[]};class Sr extends TypeError{constructor(r,n){let i;const{message:a,explanation:f,...u}=r,{path:l}=r,y=l.length===0?a:`At path: ${l.join(".")} -- ${a}`;super(f??y);b(this,"value");b(this,"key");b(this,"type");b(this,"refinement");b(this,"path");b(this,"branch");b(this,"failures");f!=null&&(this.cause=y),Object.assign(this,u),this.name=this.constructor.name,this.failures=()=>i??(i=[r,...n()])}}const Nr=t=>!!t&&t[we]==we,we=Symbol("Type");function Er(t){const{done:e,value:r}=t.next();return e?void 0:r}function jr(t,e,r,n){if(t===!0)return;let i={};t===!1?i={}:Ve(t)?i={message:t}:i=t;const{path:a,branch:f,node:u}=e,{type:l}=r,{refinement:y,message:g=ae(n)?"Required":`Expected a value of type \`${l}\`${y?` with refinement \`${y}\``:""}, but received: \`${n}\``}=i;return{...i,value:n,type:l,refinement:y,key:a[a.length-1],path:a,branch:f,node:u,message:g}}function*ne(t,e,r,n){let i=t;dr(i)||(i=[i]);for(const a of i){const f=jr(a,e,r,n);f&&(yield f)}}function de(t,e,r={}){const n=tt(t,e,r),i=Er(n);return i[0]?[new Sr(i[0],function*(){for(const u of n)u[0]&&(yield u[0])}),void 0]:[void 0,i[1]]}function*tt(t,e,r={}){const{path:n=[],branch:i=[t],node:a={current:e},coerce:f=!1,mask:u=!1}=r,l={mask:u,path:n,branch:i,node:a};let y=t;if(f){const m=e.coercer(t,l);m!=null&&(y=m)}let g=0;for(const m of ne(e.validator(y,l),l,e,t))m.explanation=r.message,g=2,yield[m,void 0];for(let[m,k,q]of e.entries(y,l)){const Ne=tt(k,q,{path:m===void 0?n:[...n,m],branch:m===void 0?i:[...i,k],node:m===void 0?a:{current:q,parent:a},coerce:f,mask:u,message:r.message});for(const X of Ne)X[0]?(g=X[0].refinement!=null?1:2,yield[X[0],void 0]):f&&(k=X[1],m===void 0?y=k:y instanceof Map?y.set(m,k):y instanceof Set?y.add(k):Z(y)&&(y[m]=k))}if(g!==2)for(const m of ne(e.refiner(y,l),l,e,t))m.explanation=r.message,g=1,yield[m,void 0];g===0&&(yield[void 0,y])}const R=t=>(...e)=>{const r=t(...e),n=(i,a)=>{const f=fe.get(i,a)??{};fe.define(i,a,{...f,type:r})};return n.toString=()=>`@type:${r.type}`,new Proxy(n,{ownKeys(){return[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)]},get(i,a){return r[a]}})},It=t=>(...e)=>{const r=i=>t(i,...e),n=(i,a)=>{fe.define(i,a,f=>{(f.modifies??(f.modifies=[])).push({modify:r})},{})};return new Proxy(n,{get(i,a){if(a=="modify")return r}})},N=class N{static create(e,r,n){var f;const i=r??((f=e[N.underlying])==null?void 0:f.schema)??{};let a;return new Proxy({},{ownKeys(u){const l=new Map;if(n){if(e[n])for(const y of Object.getOwnPropertyNames(e[n]))l.set(y,y);if(i&&i[n])for(const y of Object.getOwnPropertyNames(i[n]))l.set(y,y)}else{for(const y of Object.getOwnPropertyNames(e))l.set(y,y);if(i)for(const y of Object.getOwnPropertyNames(i))l.set(y,y)}return[...l.keys()]},get(u,l){var y,g;if(l===N.meta)return a??(a=N.create(e,i,N.meta));if(n){if(ye(e)){const m=(y=e==null?void 0:e[n])==null?void 0:y[l];if(!ae(m))return m}return i?(g=i==null?void 0:i[n])==null?void 0:g[l]:void 0}if(ye(e)){const m=e==null?void 0:e[l];if(!ae(m))return m}return i?i[l]:void 0}})}static schemaProp(e,r){return xt(e.schema,r)}static metaProp(e,r){return $t(e.schema,r)}};b(N,"RecordKey",Symbol("RecordKey")),b(N,"meta",Symbol("meta")),b(N,"optional",Symbol("optional")),b(N,"underlying",Symbol("underlying")),b(N,"unwrap",Symbol("unwrap")),b(N,"extractSchema",e=>new jt().toValue(e)),b(N,"extractMeta",e=>new jt().toValue(e.meta??e[N.meta]));let O=N;const xt=(t,e)=>{if(ye(t))return t[e]??(t[O.unwrap]?xt(t[O.unwrap]().schema,e):void 0)},$t=(t,e)=>{var r;if(ye(t))return((r=t[O.meta])==null?void 0:r[e])??(t[O.unwrap]?$t(t[O.unwrap]().schema,e):void 0)};class jt{constructor(e=!1){this.deref=e}toValue(e){if(e){if(!ae(e.schema))return this.toValue(e.schema);if(this.deref&&e[O.unwrap])return this.toValue(e[O.unwrap]());if(Ie(e))return this.toArray(e);if(e.constructor===Object)return this.toObject(e)}return e}toObject(e){const r={};for(const n of Object.getOwnPropertyNames(e))r[n]=this.toValue(e[n]);return r}toArray(e){const r=[];for(const n of e)r.push(this.toValue(n));return r}}class le{static parse(e){if(e==="")return[];if(e==="/")return[""];if(e.charAt(0)!=="/")throw new Error("Invalid JSON pointer: "+e);const r=e.substring(1).split(/\//);return r.map((n,i)=>le.unescape(n,i===r.length-1))}static create(e=[]){return e.length===0?"":"/"+e.map(le.escape).join("/")}static unescape(e,r){return e==""&&r?O.RecordKey:e.replace(/~1/g,"/").replace(/~0/g,"~")}static escape(e){return e==O.RecordKey?"":e.toString().replace(/~/g,"~0").replace(/\//g,"~1")}static get(e,r){const n=Array.isArray(r)?r:le.parse(r);for(let i=0;i<n.length;i++){const a=n[i];if(i>0&&a==O.RecordKey)return n[i-1];if(!(typeof e=="object"&&a in e))throw new Error("Invalid reference token: "+a);e=e[a]}return e}}var kt;kt=we;const Y=class Y{constructor(e){b(this,kt,we);b(this,"schema");if(e){this.schema=O.create(e);return}this.schema=e??null}get meta(){return this.schema?this.schema[O.meta]:{}}get type(){var e;return((e=this.schema)==null?void 0:e.type)??"unknown"}refiner(e,r){return[]}validator(e,r){return[]}coercer(e,r){if(Ve(e)){const n=e.trim();if(n.length>=2){if(n.startsWith("{")&&n.endsWith("}"))try{return JSON.parse(n)}catch{}if(n.startsWith("[")&&n.endsWith("]"))try{return JSON.parse(n)}catch{}}}return e}*entries(e,r=ee){}validate(e,r={}){return de(e,this,r)}create(e){const r=de(e,this,{coerce:!0});if(r[0])throw r[0];return r[1]}mask(e){const r=de(e,this,{coerce:!0,mask:!0});if(r[0])throw r[0];return r[1]}use(...e){return e.reduce((r,n)=>n.modify(r),this)}optional(){return ve.create(this)}default(e){return He.create(this,e)}};b(Y,"define",R((e=()=>!0)=>{class r extends Y{validator(i,a){return e(i,a)}}return new r(null)})),b(Y,"fromTypeObject",(e,r)=>{const n=e.type??r??new Y({});return e.modifies?n.use(...e.modifies??[]):n});let F=Y;class U extends F{static of(e,r){return new U({...r,[O.underlying]:e})}static refine(e,r,n){class i extends U{*refiner(f,u){yield*this.unwrap.refiner(f,u);const l=r(f,u),y=ne(l,u,e,f);for(const g of y)yield{...g,refinement:Object.keys(n).join(",")}}}return new i({...n,[O.underlying]:e})}get unwrap(){const e=this.schema[O.unwrap];return e?e():this.schema[O.underlying]}get type(){return this.unwrap.type}*entries(e,r=ee){yield*this.unwrap.entries(e,{...r,node:{current:this,parent:r.node}})}validator(e,r){return ne(this.unwrap.validator(e,r),r,this,e)}refiner(e,r){return ne(this.unwrap.refiner(e,r),r,this,e)}coercer(e,r){return this.unwrap.coercer(e,r)}}const ge=class ge extends U{coercer(e,r){return typeof e>"u"?this.schema.default:super.unwrap.coercer(e,r)}};b(ge,"create",R((e,r)=>new ge({default:r,[O.underlying]:e})));let He=ge;const be=class be extends U{refiner(e,r){return e===void 0||super.unwrap.refiner(e,r)}validator(e,r){return e===void 0||super.unwrap.validator(e,r)}};b(be,"create",R(e=>new be({[O.underlying]:e,[O.optional]:e})));let ve=be;const Oe=class Oe extends F{constructor(){super({})}get type(){return"any"}validator(){return!0}};b(Oe,"create",R(()=>new Oe));let Be=Oe;const Pe=class Pe extends F{get type(){return this.schema.type}validator(e,r){return Ve(e)}coercer(e,r){return ae(e)||fr(e)?e:String(e)}};b(Pe,"create",R(()=>new Pe({type:"string"})));let Ue=Pe;const _e=class _e extends F{get type(){return this.schema.type}validator(e,r){return vt(e)}coercer(e,r){try{const n=e!=null?parseInt(String(e)):void 0;return vt(n)?n:void 0}catch{return}}};b(_e,"create",R(()=>new _e({type:"integer"})));let Je=_e;const Me=class Me extends F{get type(){return this.schema.type}validator(e,r){return ur(e)}coercer(e,r){try{return e!=null?String(e)==="true":void 0}catch{return}}};b(Me,"create",R(()=>new Me({type:"boolean"})));let Xe=Me;const G=class G extends F{static createEnum(e){return new G({enum:e})}get type(){return"enums"}validator(e,r){return this.schema.enum.includes(e)}coercer(e,r){return e}};b(G,"create",R(G.createEnum)),b(G,"literal",R(e=>new G({enum:[e]}))),b(G,"nativeEnum",R(e=>new G({enum:Object.values(e)})));let J=G;const Se=class Se extends F{get type(){return"never"}validator(e,r){return!1}coercer(e,r){return e}};b(Se,"create",R(()=>new Se(!1)));let ie=Se;class W extends F{static create(e){const r=(n={})=>{const i=[];for(const[a,f]of Object.entries(n))O.schemaProp(f,O.optional)||i.push(a);return i};return R(()=>{var n,i;if(e){if(At(e)){const a=new e,f={};for(const[u,l]of Object.entries(a))f[u]=J.literal(l);for(const u of fe.getOwnPropertyNames(a)){const l=fe.get(a,u);if(l){const y=F.fromTypeObject(l,f[u]);u in f?f[u]=y.default((i=(n=f[u].schema)==null?void 0:n.enum)==null?void 0:i[0]):f[u]=y}}return new W({type:"object",properties:f,required:r(f),additionalProperties:ie.create()})}return new W({type:"object",properties:e,required:r(e),additionalProperties:ie.create()})}return new W({type:"object",properties:{},required:[],additionalProperties:ie.create()})})()}get type(){return this.schema.type}*entries(e,r=ee){var n;if(Z(e)){const i=new Set(Object.keys(e));if(this.schema.properties)for(const a in this.schema.properties)i.delete(a),yield[a,e[a],this.schema.properties[a]];if(((n=r.node)==null?void 0:n.current.type)!=="intersection")for(const a of i)yield[a,e[a],this.schema.additionalProperties]}}validator(e,r){return Z(e)}coercer(e,r){if(Z(e)){const n={...e};if(r.mask){const i=this.schema.properties;if(i)for(const a in n)i[a]===void 0&&delete n[a]}return n}return super.coercer(e,r)}}const Ee=class Ee extends F{get type(){return"record"}*entries(e){if(Z(e))for(const[r,n]of Object.entries(e))yield[O.RecordKey,r,this.schema.propertyNames],yield[r,n,this.schema.additionalProperties]}validator(e){return Z(e)}};b(Ee,"create",R((e,r)=>new Ee({type:"object",propertyNames:e,additionalProperties:r})));let Qe=Ee;const je=class je extends F{get type(){return this.schema.type}*entries(e,r=ee){if(Array.isArray(e))for(const[n,i]of e.entries())yield[n,i,this.schema.items]}validator(e){return Ie(e)}coercer(e){return Ie(e)?e.slice():e}};b(je,"create",R(e=>new je({type:"array",items:e})));let Ye=je;const oe=class oe extends F{constructor(){super(...arguments);b(this,"_discriminatorPropName");b(this,"_discriminatorMappingProps",new Map)}static discriminatorMapping(r,...n){return R(()=>{const i=[];if(n.length==1&&n[0].constructor==Object)for(const[a,f]of Object.entries(n[0]))if(O.schemaProp(f,"$ref"))i.push(f);else{const u={[r]:J.literal(a)};for(const[l,y,g]of f.entries({},ee))u[String(l)]=g;i.push(W.create(u))}else for(const a of n)At(a)&&i.push(W.create(a));return new oe({oneOf:i,discriminator:{propertyName:r}})})()}discriminatorPropType(r){return this._discriminatorPropName??(this._discriminatorPropName=(()=>{var f,u;const n=((f=this.schema.discriminator)==null?void 0:f.propertyName)??"",i=[],a=[];for(const l of this.schema.oneOf){const y=O.schemaProp(l,"properties")[n];if(!y)continue;const g=y.schema.enum;g&&i.push(...g),a.push(y.meta)}return U.of(J.create(i),{[O.meta]:O.create(a[0],((u=r.node)==null?void 0:u.current.meta)??{})})})())}discriminatorMapping(r,n,i){var f,u;if(this._discriminatorMappingProps.get(n))return this._discriminatorMappingProps.get(n);if((((u=(f=this.discriminatorPropType(i))==null?void 0:f.schema)==null?void 0:u.enum)??[]).includes(n)){const l=this.schema.oneOf.find(y=>{const g=O.schemaProp(y,"properties")[r];if(g){const[m,k]=g.validate(n);return!m}return!1});if(l){if(!this._discriminatorMappingProps.has(n)){const y={};for(const[g,m]of Object.entries(O.schemaProp(l,"properties")))g!==r&&(y[g]=m);this._discriminatorMappingProps.set(n,y)}return this._discriminatorMappingProps.get(n)}}return{}}*entries(r,n=ee){if(this.schema.discriminator){const i=this.schema.discriminator.propertyName,a=r==null?void 0:r[i];yield*W.create({[i]:this.discriminatorPropType(n),...this.discriminatorMapping(i,a,n)}).entries(r,n)}}get type(){return"union"}coercer(r){for(const n of this.schema.oneOf){const[i,a]=de(r,n,{coerce:!0});if(!i)return a}return r}validator(r,n){if(this.schema.discriminator){const a=this.schema.discriminator.propertyName,f=r==null?void 0:r[a];return W.create({[a]:this.discriminatorPropType(n),...this.discriminatorMapping(a,f,n)}).validator(r,n)}const i=[];for(const a of this.schema.oneOf){const[...f]=tt(r,a,n),[u]=f;if(u&&!u[0])return[];for(const[l]of f)l&&i.push(l)}return[`Expected the value to satisfy a union of \`${this.schema.oneOf.map(a=>a.type).join(" | ")}\`, but received: ${r}`,...i]}};b(oe,"create",R((...r)=>new oe({oneOf:r})));let Ze=oe;const zr=Be.create,Cr=Ue.create,Dr=Je.create,Tr=Xe.create,Ir=J.create,xr=J.nativeEnum,$r=W.create,Gr=Qe.create,Wr=Ye.create,qr=Ze.create,Lr=F.define,Hr=It(t=>ve.create(t)),Br=It((t,e)=>U.of(t,{[O.meta]:e})),Rr="modulepreload",kr=function(t){return"/vuekit/"+t},Rt={},Ur=function(e,r,n){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),u=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));i=Promise.allSettled(r.map(l=>{if(l=kr(l),l in Rt)return;Rt[l]=!0;const y=l.endsWith(".css"),g=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${g}`))return;const m=document.createElement("link");if(m.rel=y?"stylesheet":Rr,y||(m.as="script"),m.crossOrigin="",m.href=l,u&&m.setAttribute("nonce",u),document.head.appendChild(m),y)return new Promise((k,q)=>{m.addEventListener("load",k),m.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(f){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=f,window.dispatchEvent(u),!u.defaultPrevented)throw f}return i.then(f=>{for(const u of f||[])u.status==="rejected"&&a(u.reason);return e().catch(a)})};export{ee as E,le as J,O as S,Ur as _,Wr as a,zr as b,Lr as c,Br as d,Dr as e,Hr as f,Fr as g,Tr as h,Nr as i,Ir as j,xr as n,$r as o,_r as p,Gr as r,Cr as s,qr as u};
