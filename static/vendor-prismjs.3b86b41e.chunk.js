(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const c of u)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function i(u){const c={};return u.integrity&&(c.integrity=u.integrity),u.referrerPolicy&&(c.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?c.credentials="include":u.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function d(u){if(u.ep)return;u.ep=!0;const c=i(u);fetch(u.href,c)}})();var N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};const V="modulepreload",ee=function(m){return"/vuekit/"+m},J={},te=function(w,i,d){if(!i||i.length===0)return w();const u=document.getElementsByTagName("link");return Promise.all(i.map(c=>{if(c=ee(c),c in J)return;J[c]=!0;const h=c.endsWith(".css"),s=h?'[rel="stylesheet"]':"";if(!!d)for(let $=u.length-1;$>=0;$--){const S=u[$];if(S.href===c&&(!h||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${s}`))return;const x=document.createElement("link");if(x.rel=h?"stylesheet":V,h||(x.as="script",x.crossOrigin=""),x.href=c,document.head.appendChild(x),h)return new Promise(($,S)=>{x.addEventListener("load",$),x.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>w())},ae=`/**
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 * @author Rose Pritchard
 */

code[class*="language-"],
pre[class*="language-"] {
	color: #ccc;
	background: none;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;

}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #2d2d2d;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #999;
}

.token.punctuation {
	color: #ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
	color: #e2777a;
}

.token.function-name {
	color: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
	color: #f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
	color: #f8c555;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
	color: #cc99cd;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
	color: #7ec699;
}

.token.operator,
.token.entity,
.token.url {
	color: #67cdcc;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

.token.inserted {
	color: green;
}
`;var q={},ne={get exports(){return q},set exports(m){q=m}};(function(m){var w=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
* Prism: Lightweight, robust, elegant syntax highlighting
*
* @license MIT <https://opensource.org/licenses/MIT>
* @author Lea Verou <https://lea.verou.me>
* @namespace
* @public
*/var i=function(d){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,h={},s={manual:d.Prism&&d.Prism.manual,disableWorkerMessageHandler:d.Prism&&d.Prism.disableWorkerMessageHandler,util:{encode:function n(e){return e instanceof k?new k(e.type,n(e.content),e.alias):Array.isArray(e)?e.map(n):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(n){return Object.prototype.toString.call(n).slice(8,-1)},objId:function(n){return n.__id||Object.defineProperty(n,"__id",{value:++c}),n.__id},clone:function n(e,t){t=t||{};var a,r;switch(s.util.type(e)){case"Object":if(r=s.util.objId(e),t[r])return t[r];a={},t[r]=a;for(var l in e)e.hasOwnProperty(l)&&(a[l]=n(e[l],t));return a;case"Array":return r=s.util.objId(e),t[r]?t[r]:(a=[],t[r]=a,e.forEach(function(g,o){a[o]=n(g,t)}),a);default:return e}},getLanguage:function(n){for(;n;){var e=u.exec(n.className);if(e)return e[1].toLowerCase();n=n.parentElement}return"none"},setLanguage:function(n,e){n.className=n.className.replace(RegExp(u,"gi"),""),n.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(a){var n=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(n){var e=document.getElementsByTagName("script");for(var t in e)if(e[t].src==n)return e[t]}return null}},isActive:function(n,e,t){for(var a="no-"+e;n;){var r=n.classList;if(r.contains(e))return!0;if(r.contains(a))return!1;n=n.parentElement}return!!t}},languages:{plain:h,plaintext:h,text:h,txt:h,extend:function(n,e){var t=s.util.clone(s.languages[n]);for(var a in e)t[a]=e[a];return t},insertBefore:function(n,e,t,a){a=a||s.languages;var r=a[n],l={};for(var g in r)if(r.hasOwnProperty(g)){if(g==e)for(var o in t)t.hasOwnProperty(o)&&(l[o]=t[o]);t.hasOwnProperty(g)||(l[g]=r[g])}var f=a[n];return a[n]=l,s.languages.DFS(s.languages,function(b,_){_===f&&b!=n&&(this[b]=l)}),l},DFS:function n(e,t,a,r){r=r||{};var l=s.util.objId;for(var g in e)if(e.hasOwnProperty(g)){t.call(e,g,e[g],a||g);var o=e[g],f=s.util.type(o);f==="Object"&&!r[l(o)]?(r[l(o)]=!0,n(o,t,null,r)):f==="Array"&&!r[l(o)]&&(r[l(o)]=!0,n(o,t,g,r))}}},plugins:{},highlightAll:function(n,e){s.highlightAllUnder(document,n,e)},highlightAllUnder:function(n,e,t){var a={callback:t,container:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),s.hooks.run("before-all-elements-highlight",a);for(var r=0,l;l=a.elements[r++];)s.highlightElement(l,e===!0,a.callback)},highlightElement:function(n,e,t){var a=s.util.getLanguage(n),r=s.languages[a];s.util.setLanguage(n,a);var l=n.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(l,a);var g=n.textContent,o={element:n,language:a,grammar:r,code:g};function f(_){o.highlightedCode=_,s.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,s.hooks.run("after-highlight",o),s.hooks.run("complete",o),t&&t.call(o.element)}if(s.hooks.run("before-sanity-check",o),l=o.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!o.code){s.hooks.run("complete",o),t&&t.call(o.element);return}if(s.hooks.run("before-highlight",o),!o.grammar){f(s.util.encode(o.code));return}if(e&&d.Worker){var b=new Worker(s.filename);b.onmessage=function(_){f(_.data)},b.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else f(s.highlight(o.code,o.grammar,o.language))},highlight:function(n,e,t){var a={code:n,grammar:e,language:t};if(s.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=s.tokenize(a.code,a.grammar),s.hooks.run("after-tokenize",a),k.stringify(s.util.encode(a.tokens),a.language)},tokenize:function(n,e){var t=e.rest;if(t){for(var a in t)e[a]=t[a];delete e.rest}var r=new S;return C(r,r.head,n),$(n,r,e,r.head,0),I(r)},hooks:{all:{},add:function(n,e){var t=s.hooks.all;t[n]=t[n]||[],t[n].push(e)},run:function(n,e){var t=s.hooks.all[n];if(!(!t||!t.length))for(var a=0,r;r=t[a++];)r(e)}},Token:k};d.Prism=s;function k(n,e,t,a){this.type=n,this.content=e,this.alias=t,this.length=(a||"").length|0}k.stringify=function n(e,t){if(typeof e=="string")return e;if(Array.isArray(e)){var a="";return e.forEach(function(f){a+=n(f,t)}),a}var r={type:e.type,content:n(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(r.classes,l):r.classes.push(l)),s.hooks.run("wrap",r);var g="";for(var o in r.attributes)g+=" "+o+'="'+(r.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+g+">"+r.content+"</"+r.tag+">"};function x(n,e,t,a){n.lastIndex=e;var r=n.exec(t);if(r&&a&&r[1]){var l=r[1].length;r.index+=l,r[0]=r[0].slice(l)}return r}function $(n,e,t,a,r,l){for(var g in t)if(!(!t.hasOwnProperty(g)||!t[g])){var o=t[g];o=Array.isArray(o)?o:[o];for(var f=0;f<o.length;++f){if(l&&l.cause==g+","+f)return;var b=o[f],_=b.inside,H=!!b.lookbehind,U=!!b.greedy,X=b.alias;if(U&&!b.pattern.global){var Y=b.pattern.toString().match(/[imsuy]*$/)[0];b.pattern=RegExp(b.pattern.source,Y+"g")}for(var G=b.pattern||b,F=a.next,E=r;F!==e.tail&&!(l&&E>=l.reach);E+=F.value.length,F=F.next){var L=F.value;if(e.length>n.length)return;if(!(L instanceof k)){var M=1,A;if(U){if(A=x(G,E,n,H),!A||A.index>=n.length)break;var O=A.index,K=A.index+A[0].length,T=E;for(T+=F.value.length;O>=T;)F=F.next,T+=F.value.length;if(T-=F.value.length,E=T,F.value instanceof k)continue;for(var z=F;z!==e.tail&&(T<K||typeof z.value=="string");z=z.next)M++,T+=z.value.length;M--,L=n.slice(E,T),A.index-=E}else if(A=x(G,0,L,H),!A)continue;var O=A.index,P=A[0],j=L.slice(0,O),W=L.slice(O+P.length),B=E+L.length;l&&B>l.reach&&(l.reach=B);var R=F.prev;j&&(R=C(e,R,j),E+=j.length),D(e,R,M);var Q=new k(g,_?s.tokenize(P,_):P,X,P);if(F=C(e,R,Q),W&&C(e,F,W),M>1){var Z={cause:g+","+f,reach:B};$(n,e,t,F.prev,E,Z),l&&Z.reach>l.reach&&(l.reach=Z.reach)}}}}}}function S(){var n={value:null,prev:null,next:null},e={value:null,prev:n,next:null};n.next=e,this.head=n,this.tail=e,this.length=0}function C(n,e,t){var a=e.next,r={value:t,prev:e,next:a};return e.next=r,a.prev=r,n.length++,r}function D(n,e,t){for(var a=e.next,r=0;r<t&&a!==n.tail;r++)a=a.next;e.next=a,a.prev=e,n.length-=r}function I(n){for(var e=[],t=n.head.next;t!==n.tail;)e.push(t.value),t=t.next;return e}if(!d.document)return d.addEventListener&&(s.disableWorkerMessageHandler||d.addEventListener("message",function(n){var e=JSON.parse(n.data),t=e.language,a=e.code,r=e.immediateClose;d.postMessage(s.highlight(a,s.languages[t],t)),r&&d.close()},!1)),s;var v=s.util.currentScript();v&&(s.filename=v.src,v.hasAttribute("data-manual")&&(s.manual=!0));function p(){s.manual||s.highlightAll()}if(!s.manual){var y=document.readyState;y==="loading"||y==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return s}(w);m.exports&&(m.exports=i),typeof N<"u"&&(N.Prism=i),i.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(d){d.type==="entity"&&(d.attributes.title=d.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(u,c){var h={};h["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[c]},h.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:h}};s["language-"+c]={pattern:/[\s\S]+/,inside:i.languages[c]};var k={};k[u]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return u}),"i"),lookbehind:!0,greedy:!0,inside:s},i.languages.insertBefore("markup","cdata",k)}}),Object.defineProperty(i.languages.markup.tag,"addAttribute",{value:function(d,u){i.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+d+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:i.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,function(d){var u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;d.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+u.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},d.languages.css.atrule.inside.rest=d.languages.css;var c=d.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),i.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),i.languages.markup&&(i.languages.markup.tag.addInlined("script","javascript"),i.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),i.languages.js=i.languages.javascript,function(){if(typeof i>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var d="Loading…",u=function(v,p){return"✖ Error "+v+" while fetching file: "+p},c="✖ Error: File does not exist or is empty",h={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",k="loading",x="loaded",$="failed",S="pre[data-src]:not(["+s+'="'+x+'"]):not(['+s+'="'+k+'"])';function C(v,p,y){var n=new XMLHttpRequest;n.open("GET",v,!0),n.onreadystatechange=function(){n.readyState==4&&(n.status<400&&n.responseText?p(n.responseText):n.status>=400?y(u(n.status,n.statusText)):y(c))},n.send(null)}function D(v){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(p){var y=Number(p[1]),n=p[2],e=p[3];return n?e?[y,Number(e)]:[y,void 0]:[y,y]}}i.hooks.add("before-highlightall",function(v){v.selector+=", "+S}),i.hooks.add("before-sanity-check",function(v){var p=v.element;if(p.matches(S)){v.code="",p.setAttribute(s,k);var y=p.appendChild(document.createElement("CODE"));y.textContent=d;var n=p.getAttribute("data-src"),e=v.language;if(e==="none"){var t=(/\.(\w+)$/.exec(n)||[,"none"])[1];e=h[t]||t}i.util.setLanguage(y,e),i.util.setLanguage(p,e);var a=i.plugins.autoloader;a&&a.loadLanguages(e),C(n,function(r){p.setAttribute(s,x);var l=D(p.getAttribute("data-range"));if(l){var g=r.split(/\r\n?|\n/g),o=l[0],f=l[1]==null?g.length:l[1];o<0&&(o+=g.length),o=Math.max(0,Math.min(o-1,g.length)),f<0&&(f+=g.length),f=Math.max(0,Math.min(f,g.length)),r=g.slice(o,f).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(o+1))}y.textContent=r,i.highlightElement(y)},function(r){p.setAttribute(s,$),y.textContent=r})}}),i.plugins.fileHighlight={highlight:function(p){for(var y=(p||document).querySelectorAll(S),n=0,e;e=y[n++];)i.highlightElement(e)}};var I=!1;i.fileHighlight=function(){I||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),I=!0),i.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ne);const re=q;(function(m){m.languages.typescript=m.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),m.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete m.languages.typescript.parameter,delete m.languages.typescript["literal-property"];var w=m.languages.extend("typescript",{});delete w["class-name"],m.languages.typescript["class-name"].inside=w,m.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:w}}}}),m.languages.ts=m.languages.typescript})(Prism);export{re as P,te as _,N as a,ae as c};
