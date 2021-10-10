(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.d(t,{invoker:()=>Vt});var r={};e.r(r),e.d(r,{abs:()=>N,ceil:()=>V,concat:()=>h,cos:()=>O,ends:()=>y,flat:()=>x,floor:()=>L,getTimeMs:()=>H,has:()=>m,isArray:()=>u,isNum:()=>c,len:()=>o,log10:()=>U,log2:()=>z,logn:()=>K,lowerCase:()=>C,max:()=>q,min:()=>S,objKeys:()=>M,padEnd:()=>I,pi:()=>_,push:()=>b,randInt:()=>E,randNum:()=>j,range:()=>P,reverse:()=>A,round:()=>R,sign:()=>W,sin:()=>D,slen:()=>i,slice:()=>s,sortBy:()=>g,splice:()=>a,sqrt:()=>F,starts:()=>f,strIdx:()=>v,sub:()=>p,subIdx:()=>d,substr:()=>l,tan:()=>T,toNum:()=>n,trim:()=>w,trimEnd:()=>B,trimStart:()=>$,upperCase:()=>k});const n=e=>Number(e),s=(e,t,r)=>e.slice(t,r),a=(e,t,r)=>e.splice(t,r),o=e=>e.length,i=e=>e.length,c=e=>!Number.isNaN(Number(e)),u=e=>Array.isArray(e),l=(e,t,r)=>e.substring(t,t+(r??e.length)),v=(e,t)=>e[t],p=(e,t)=>e.includes(t),d=(e,t)=>e.indexOf(t),m=(e,t)=>e.includes(t),f=(e,t)=>e.startsWith(t),y=(e,t)=>e.endsWith(t),x=e=>e.flat(),h=(e,t)=>e.concat(t),b=(e,t)=>e.push(...t),g=(e,t)=>e.sort(t),A=e=>e.reverse(),C=e=>e.toLowerCase(),k=e=>e.toUpperCase(),w=e=>e.trim(),$=e=>e.trimStart(),B=e=>e.trimEnd(),I=(e,t)=>e.padEnd(t),j=(e,t)=>e+Math.random()*(t-e),E=(e,t)=>Math.floor(j(e,t)),P=e=>[...Array(e).keys()],M=e=>Object.keys(e),H=()=>(new Date).getTime(),N=Math.abs,S=Math.min,q=Math.max,D=Math.sin,O=Math.cos,T=Math.tan,F=Math.sqrt,R=Math.round,L=Math.floor,V=Math.ceil,W=Math.sign,_=Math.PI,K=Math.log,z=Math.log2,U=Math.log10,G={print:{returns:["null"]},"print-str":{returns:["null"]},"!":{exactArity:1,returns:["bool"]},"=":{minArity:2},"!=":{minArity:2},"+":{minArity:2,numeric:!0},"-":{minArity:1,numeric:!0},"*":{minArity:2,numeric:!0},"/":{minArity:2,numeric:!0},"//":{minArity:2,numeric:!0},"**":{minArity:1,numeric:!0},"<":{minArity:2,numeric:!0},">":{minArity:2,numeric:!0},"<=":{minArity:2,numeric:!0},">=":{minArity:2,numeric:!0},"fast=":{exactArity:2},"fast!=":{exactArity:2},"fast+":{exactArity:2,numeric:!0},"fast-":{exactArity:2,numeric:!0},"fast*":{exactArity:2,numeric:!0},"fast/":{exactArity:2,numeric:!0},"fast//":{exactArity:2,numeric:!0},"fast<":{exactArity:2,numeric:!0},"fast>":{exactArity:2,numeric:!0},"fast<=":{exactArity:2,numeric:!0},"fast>=":{exactArity:2,numeric:!0},inc:{exactArity:1,numeric:!0},dec:{exactArity:1,numeric:!0},min:{minArity:2,numeric:!0},max:{minArity:2,numeric:!0},abs:{exactArity:1,numeric:!0},pi:{exactArity:0,numeric:!0},sqrt:{exactArity:1,numeric:!0},round:{exactArity:1,numeric:!0},floor:{exactArity:1,numeric:!0},ceil:{exactArity:1,numeric:!0},logn:{exactArity:1,numeric:!0},log2:{exactArity:1,numeric:!0},log10:{exactArity:1,numeric:!0},and:{minArity:1},or:{minArity:1},"odd?":{exactArity:1,numeric:"in only",returns:["bool"]},"even?":{exactArity:1,numeric:"in only",returns:["bool"]},"pos?":{exactArity:1,numeric:"in only",returns:["bool"]},"neg?":{exactArity:1,numeric:"in only",returns:["bool"]},"zero?":{exactArity:1,numeric:"in only",returns:["bool"]},"null?":{exactArity:1,returns:["bool"]},"num?":{exactArity:1,returns:["bool"]},"bool?":{exactArity:1,returns:["bool"]},"str?":{exactArity:1,returns:["bool"]},"vec?":{exactArity:1,returns:["bool"]},"dict?":{exactArity:1,returns:["bool"]},"key?":{exactArity:1,returns:["bool"]},"func?":{exactArity:1,returns:["bool"]},rem:{minArity:2,numeric:!0},sin:{exactArity:1,numeric:!0},cos:{exactArity:1,numeric:!0},tan:{exactArity:1,numeric:!0},vec:{returns:["vec"]},dict:{returns:["dict"]},len:{exactArity:1,types:[["str","vec","dict"]],returns:["num"]},"to-num":{exactArity:1,types:[["str","num"]],returns:["num","null"]},"to-key":{exactArity:1,types:[["str","num"]],returns:["key"]},"has?":{exactArity:2,types:["str","str"],returns:["bool"]},idx:{minArity:2,maxArity:3,types:[["str","vec"]],returns:["num"]},map:{minArity:2,returns:["vec"]},for:{minArity:2,returns:["vec"]},reduce:{minArity:2,maxArity:3},filter:{minArity:2,returns:["vec"]},remove:{minArity:2,returns:["vec"]},find:{minArity:2},count:{minArity:2,returns:["num"]},str:{returns:["str"]},rand:{maxArity:2,numeric:!0,returns:["num"]},"rand-int":{maxArity:2,numeric:!0,returns:["num"]},while:{},"..":{minArity:2},"...":{minArity:2},into:{exactArity:2,types:[["vec","dict"],["vec","dict"]],returns:["vec","dict"]},push:{minArity:2,maxArity:3,types:[["vec","dict"]],returns:["vec","dict"]},sect:{minArity:1,maxArity:3,types:[["vec","str"],"num","num"],returns:["vec","str"]},reverse:{exactArity:1,types:[["vec","str"]],returns:["vec","str"]},sort:{minArity:1,maxArity:2,types:["vec"],returns:["vec"]},keys:{exactArity:1,types:["dict"]},vals:{exactArity:1,types:["dict"]},do:{minArity:1},val:{minArity:1},range:{minArity:1,maxArity:3,numeric:!0},"empty?":{exactArity:1,types:[["str","vec","dict"]],returns:["bool"]},split:{minArity:1,maxArity:2,types:["str","str"],returns:["vec"]},join:{minArity:1,maxArity:2,types:["vec","str"],returns:["str"]},"starts-with?":{exactArity:2,types:["str","str"],returns:["bool"]},"ends-with?":{exactArity:2,types:["str","str"],returns:["bool"]},"lower-case":{exactArity:1,types:["str"],returns:["str"]},"upper-case":{exactArity:1,types:["str"],returns:["str"]},trim:{exactArity:1,types:["str"],returns:["str"]},"trim-start":{exactArity:1,types:["str"],returns:["str"]},"trim-end":{exactArity:1,types:["str"],returns:["str"]},"str*":{exactArity:2,types:["str","num"],returns:["str"]},time:{exactArity:0,returns:["num"]},version:{exactArity:0,returns:["num"]},tests:{minArity:0,maxArity:1,types:["bool"],returns:["str"]},symbols:{exactArity:0,returns:["vec"]},eval:{exactArity:1,types:["str"]},reset:{exactArity:0}},J={null:"null",str:"string",num:"number",bool:"boolean",key:"keyword",ref:"reference",vec:"vector",dict:"dictionary",func:"function",clo:"closure"},Q=(e,t)=>({e:"Type",m:e,errCtx:t});function X(e,t){const r=t.map((e=>J[e])).join(", ");return[Q(`number as operation argument must be string, vector, or dictionary, not ${r}`,e)]}function Y(e,t){const r=t.map((e=>J[e])).join(", ");return[Q(`keyword as operation argument must be dictionary or vector, not ${r}`,e)]}const{concat:Z,has:ee,flat:te,push:re,slice:ne,splice:se}=r,{slen:ae,starts:oe,sub:ie,substr:ce,strIdx:ue}=r,{isNum:le,len:ve,toNum:pe,isArray:de}=r,me={t:"null",v:void 0};function fe(e,t){const r=[];for(;;){const n=he(e,t);if(!ve(n))break;re(r,n)}return r}function ye(e,t,r){const{exactArity:n,maxArity:s,minArity:a}=G[e],o=(n,s)=>[{e:"Arity",m:`${e} needs ${n} argument${1!==s?"s":""}, not ${t}`,errCtx:r}];if(void 0!==n){if(t!==n)return o(`exactly ${n}`,n)}else{if(a&&!s&&t<a)return o(`at least ${a}`,a);if(!a&&s&&t>s)return o(`at most ${s}`,s);if(a&&s&&(t<a||t>s))return o(`between ${a} and ${s}`,s)}}function xe(e,t,r,n=!1){const{types:s,numeric:a}=G[e],o=ve(t);if(a){const s=t.findIndex((e=>!!ve(e)&&(n?!e.find((e=>"num"===e)):"num"!==e[0])));if(-1===s)return;const a=t[s].map((e=>J[e])).join(", ");return[Q(`${e} takes numeric arguments only, not ${a}`,r)]}if(!s)return;const i=s.map(((e,r)=>{if(r>=o||!t[r])return!1;const s=t[r];if(de(e)){if(n?!ve(s)||s.some((t=>ee(e,t))):1===ve(s)&&ee(e,s[0]))return!1;const t=s.map((e=>J[e]));return`argument ${r+1} must be either: ${e.map((e=>J[e])).join(", ")}, not ${t}`}{if(n?!ve(s)||ee(s,e):1===ve(s)&&e===s[0])return!1;const t=s.map((e=>J[e]));return`argument ${r+1} must be ${J[e]}, not ${t}`}})).filter((e=>!!e));return ve(i)?i.map((e=>Q(e,r))):void 0}function he(e,t,r=!0){if(!ve(e))return[];const{typ:n,text:s,errCtx:a}=e.shift();if("sym"===n&&ie("#@",s)&&ve(e)&&"("===e[0].typ){const r=e.map((e=>e.text)),n=he(e,t,"@"!==s),o=n.find((e=>"err"===e.typ));return o?[o]:[{typ:"#"===s?"clo":"par",value:[ne(r,0,ve(r)-ve(e)).join(" "),n],errCtx:a}]}switch(n){case"str":return[{typ:"val",value:{t:"str",v:s},errCtx:a}];case"num":return[{typ:"val",value:{t:"num",v:pe(s)},errCtx:a}];case"sym":if("true"===s||"false"===s)return[{typ:"val",value:{t:"bool",v:"true"===s},errCtx:a}];if("null"===s)return[{typ:"val",value:me,errCtx:a}];if(oe(s,":"))return[{typ:"val",value:{t:"key",v:s},errCtx:a}];if(oe(s,"%")&&le(ce(s,1))){const e=pe(ce(s,1));return e<0?[{typ:"val",value:me,errCtx:a}]:[{typ:"upa",value:e,errCtx:a}]}return ee(t,s)?[{typ:"npa",value:t.indexOf(s),errCtx:a}]:"args"===s?[{typ:"upa",value:-1,errCtx:a}]:G[s]?[{typ:"val",value:{t:"func",v:s},errCtx:a}]:[{typ:"ref",value:s,errCtx:a}];case"(":return function(e,t,r=!0){const n=e.shift();if(!n)return[];const{typ:s,text:a,errCtx:o}=n;let i=a;const c=e=>[{typ:"err",value:e,errCtx:o}];if("catch"===i){if("("!==e[0].typ)return c("argument 1 must be expression");const r=he(e,t),n=fe(e,t);return ve(r)&&ve(n)?[...r,{typ:"cat",value:ve(n),errCtx:o},...n]:c("must provide at least 2 arguments")}if("var"===i||"let"===i){const r=[];for(;;){const n=he(e,t);if(ve(r)&&!ve(n))return r;const s=he(e,t);if(!(ve(r)||ve(n)&&ve(s)))return c("must provide at least one declaration name and value");if(!ve(s))return c("must provide a value after each declaration name");const a=n[0];if("ref"!==a.typ)return c("declaration name must be symbol");re(r,s),r.push({typ:i,value:a.value,errCtx:o})}}else{if("if"===i||"when"===i){const r=he(e,t);if(!ve(r))return c("must provide condition");const n=r;if("if"===i){const r=he(e,t);if(!ve(r))return c("must provide a branch");n.push({typ:"if",value:ve(r)+1,errCtx:o}),re(n,r);const s=he(e,t);if(ve(s)){if(n.push({typ:"jmp",value:ve(s),errCtx:o}),re(n,s),ve(he(e,t)))return c("too many branches")}else n.push({typ:"jmp",value:1,errCtx:o}),n.push({typ:"val",value:me,errCtx:o})}else{const r=fe(e,t);n.push({typ:"if",value:ve(r)+1,errCtx:o}),re(n,r),n.push({typ:"jmp",value:1,errCtx:o}),n.push({typ:"val",value:me,errCtx:o})}return n}if("and"===i||"or"===i||"while"===i||"recur"===i){const r=[];let n=0;for(;;){const s=he(e,t);if(!ve(s))break;r.push(s),n+=ve(s)}if("recur"===i)return[...te(r),{typ:"rec",value:ve(r),errCtx:o}];if(ve(r)<2)return c("requires at least two arguments");const s=[];if("while"===i){s.push({typ:"val",value:me,errCtx:o}),n+=2;const e=r.shift();return re(s,e),s.push({typ:"if",value:n-ve(e),errCtx:o}),s.push({typ:"pop",value:ve(r),errCtx:o}),r.forEach((e=>re(s,e))),s.push({typ:"loo",value:-(n+1),errCtx:o}),s}n+=ve(r),n+=pe("and"===i);const a="and"===i?"if":"or";for(let e=0;e<ve(r);++e)re(s,r[e]),n-=ve(r[e]),s.push({typ:a,value:n,errCtx:o}),--n;return"and"===i?re(s,[{typ:"val",value:{t:"bool",v:!0},errCtx:o},{typ:"jmp",value:1,errCtx:o},{typ:"val",value:{t:"bool",v:!1},errCtx:o}]):s.push({typ:"val",value:{t:"bool",v:!1},errCtx:o}),s}}const u=[];let l=0;if("("===s||ee(t,a)||ie("%#@",ue(a,0))){e.unshift(n);const r=he(e,t);re(u,r)}const v=[];for(;ve(e);){const r=he(e,t);if(!ve(r))break;++l,re(v,r)}if("return"===i)return[...v,{typ:"ret",value:!!ve(v),errCtx:o}];if(G[i]&&r){const e=ye(i,l,o);re(u,e?.map((e=>c(e.m)[0]))??[]),e||2===l&&G[`fast${i}`]&&(i=`fast${i}`)}if(ve(u))u.push({typ:"exe",value:l,errCtx:o});else{const e="num"===s?{t:"num",v:pe(i)}:oe(i,":")?{t:"key",v:i}:G[i]?{t:"func",v:i}:"true"===i||"false"===i?{t:"bool",v:"true"===i}:{t:"str",v:i};u.push({typ:"val",value:e,errCtx:o}),u.push({typ:"exe",value:l,errCtx:o})}return[...v,...u]}(e,t,r);case")":case"rem":return[];default:return 0}}function be(e){const t=[];for(let r=0,n=ve(e);r<n;++r){const n=e[r];switch(n.typ){case"val":t.push({types:[n.value.t],val:n.value});break;case"exe":{const e=t.pop(),r=se(t,ve(t)-n.value,n.value),s=e=>r.findIndex((({types:t})=>t&&!e.find((e=>ee(t,e))))),a=t=>e.val?e.val.t===t:e.types&&1===ve(e.types)&&e.types[0]===t;if(e.val&&"func"===e.val.t){const s=xe(e.val.v,r.map((e=>e.types??[])),n.errCtx,!0);if(s)return s;const{returns:a,numeric:o}=G[e.val.v];t.push(o&&"in only"!==o?{types:["num"]}:{types:a})}else if(a("num")){const e=s(["str","dict","vec"]);if(-1!==e)return X(n.errCtx,r[e].types);t.push({})}else if(a("key")){const e=s(["dict","vec"]);if(-1!==e)return Y(n.errCtx,r[e].types);t.push({})}break}case"cat":case"or":case"var":case"let":case"loo":case"jmp":break;case"clo":case"par":{const e=be(n.value[1]);if(e)return e}case"ref":case"npa":case"upa":t.push({});break;case"if":{t.pop(),t.push({});const s=be(ne(e,r+1,n.value+1));if(s)return s;r+=n.value-1;break}case"pop":case"rec":se(t,ve(t)-n.value,n.value);break;case"ret":n.value&&t.pop()}}}function ge(e,t){const{tokens:r,stringError:n}=function(e,t,r=!0,n=!1){const s=[];let a=!1,o=!1,i=[0,0],c=!1,u=!1,l=!1,v=1,p=0;for(let d=0,m=ae(e);d<m;++d){const f=ue(e,d),y=d+1!==m?ue(e,d+1):"";if(++p,l){"\n"===f?(l=!1,++v,p=0):n&&(s[ve(s)-1].text+=f);continue}if(o){o=!1,a&&(s[ve(s)-1].text+={n:"\n",t:"\t",'"':'"'}[f]||`\\${f}`);continue}if("\\"===f){o=!0;continue}if('"'===f){(a=!a)&&(i=[v,p],s.push({typ:"str",text:"",errCtx:{invocationId:t,line:v,col:p}})),u=c=!1;continue}const x=ie(" \t\n\r,",f);if(!a&&x){u=c=!1,"\n"===f&&(++v,p=0);continue}if(!a&&";"===f){l=!0,n&&s.push({typ:"rem",text:"",errCtx:{invocationId:t,line:v,col:p}});continue}const h={invocationId:t,line:v,col:p},b=e=>ie("0123456789",e),g=ie("()[]{}",f);if(u&&!b(f)&&(u="."===f&&!ie(s[ve(s)-1].text,"."),u||g||x||(c=!0,s[ve(s)-1].typ="sym")),c&&g&&(c=!1),!a&&!c&&!u){if(g){const e={"[":"(","{":"(","(":"(",")":")","}":")","]":")"}[f];s.push({typ:e,text:r?e:f,errCtx:h}),r&&("["===f?s.push({typ:"sym",text:"vec",errCtx:h}):"{"===f&&s.push({typ:"sym",text:"dict",errCtx:h}));continue}u=b(f)||"."===f&&b(y)||"-"===f&&(b(y)||"."===y),c=!u;const e=c?"sym":"num";s.push({typ:e,text:"",errCtx:h})}s[ve(s)-1].text+=f}return{tokens:s,stringError:a?i:void 0}}(e,t),s=function(e,t){const r=ve(t)?t[0].errCtx.invocationId:"",n=[],s=(e,t)=>n.push({e:"Parse",m:e,errCtx:t}),a=e=>ve(t.filter((({typ:t})=>t===e))),[o,i]=[a("("),a(")")];{const[e,n]=function(e,t,r){const n=r>=t,[s,a]=[n?"(":")",n?")":"("],o=n?1:-1;for(let t=ve(e),r=n?0:t-1,i=0;n?r<t:r>=0;r+=o){const{typ:t,errCtx:{line:n,col:o}}=e[r];if(i+=pe(t===s)-pe(t===a),i<0)return[n,o]}return[0,0]}(t,o,i);e+n&&s("unmatched parenthesis",{invocationId:r,line:e,col:n})}if(e){const[t,n]=e;s("unmatched double quotation marks",{invocationId:r,line:t,col:n})}let c;for(let e=0,r=!1;e<ve(t);++e){if(r&&")"===t[e].typ){c=t[e];break}r="("===t[e].typ}return c&&s("empty expression forbidden",c.errCtx),n}(n,r);if(ve(s))return{errors:s,funcs:{}};const a=function(e){const t=e=>ve(e)>1&&"sym"===e[1].typ&&"function"===e[1].text,r=e.filter((e=>t(e))),n=te(e.filter((e=>!t(e)))),s=r.map((e=>({name:e[2].text,tokens:ne(e,3),errCtx:e[2].errCtx})));return ve(n)?Z(s,[{name:"entry",tokens:n,errCtx:n[0].errCtx}]):s}(function(e){const t=[[]];let r=0;return e.forEach((e=>{t[ve(t)-1].push(e),r+=pe("("===e.typ)-pe(")"===e.typ),0===r&&t.push([])})),t}(r)).map((e=>function({name:e,tokens:t},r){const n=(e,t=r)=>["err",{e:"Parse",m:e,errCtx:t}],s=t.findIndex((e=>"sym"!==e.typ||ie("%#@",e.text))),a=ne(t,0,s),o=ne(t,s);if("("===e)return n("nameless function");if(!ve(a)&&!ve(o))return n("empty function body");if(ve(o)&&")"===o[0].typ){if(!ve(a))return n("empty function body");o.unshift(a.pop())}ve(a)&&!ve(o)&&o.push(a.pop());const i=[];for(;ve(o);)re(i,he(o,a.map((e=>e.text))));const c=i.find((e=>"err"===e.typ));return c?n(c.value,c.errCtx):["func",{name:e,ins:i}]}(e,{invocationId:t,line:e.errCtx.line,col:e.errCtx.col}))),o=[],i=[];a.forEach((e=>{"err"===e[0]?i.push(e[1]):o.push(e[1])})),re(i,te(o.map((e=>be(e.ins)??[]))));const c={};return o.forEach((e=>c[e.name]=e)),{errors:i,funcs:c}}async function Ae(e,t){return e.dict.has(t)?{value:e.dict.get(t),err:void 0}:{value:{t:"null",v:void 0},err:`"${t} not found.`}}async function Ce(e,t,r){e.dict.set(t,r)}async function ke(e,t,r){const n={t:"null",v:void 0};switch(t){case"print-str":e.output+=r[0].v;break;case"print":case"test.function":e.output+=r[0].v+"\n";break;default:return{value:n,err:`operation ${t} does not exist`}}return{value:n,err:void 0}}const we=[{name:"Hello, world!",code:'"Hello, world!"',out:"Hello, world!"},{name:"Say Hello, world!",code:'(print "Hello, world!")',out:"Hello, world!\nnull"},{name:"1 + 1 = 2",code:"(+ 1 1)",out:"2"},{name:"Negate 1 = -1",code:"(- 1)",out:"-1"},{name:"(1+1)+1+(1+1) = 5",code:"(+ (+ 1 1) 1 (+ 1 1))",out:"5"},{name:"Conditional head",code:"((if true + -) 12 9 1)",out:"22"},{name:"Whens",code:'[(when 123 (print "hi") 234) (when false (print "bye"))]',out:"hi\n[234 null]"},{name:"Cond number head",code:"((if false 1 2) [:a :b :c])",out:":c"},{name:"and & short-circuit",code:"[(and true (if true null 1) true) (and 1 2 3)]",out:"[false true]"},{name:"or & short-circuit",code:'[(or true (print "hello") 1) (or false (print-str "-> ") 1)]',out:"-> [true 1]"},{name:"String retrieve",code:'(2 "Hello")',out:"l"},{name:"Vector retrieve",code:"(2 [:a :b :c :d])",out:":c"},{name:"Key as operation",code:'[(:age {:name "Patrick" :age 24}) (:abc [:a :abc :c])]',out:"[24 :abc]"},{name:"Dictionary as op 1",code:'({"name" "Patrick" "age" 24} "age")',out:"24"},{name:"Dictionary as op 2",code:'({"name" "Patrick"} "age" 24)',out:'{"name" "Patrick", "age" 24}'},{name:"Equalities",code:'[(= 1 2 1)\n            (!= 1 2 1)\n            (= "Hello" "hello")\n            (!= "world" "world")\n            (= [0 [1]] [0 [1]])]',out:"[false 1 false false [0 [1]]]"},{name:"Define and retrieve",code:"(var a 1) a",out:"1"},{name:"Define and add",code:"(var a 1) (inc a)",out:"2"},{name:"Define op and call",code:"(var f +) (f 2 2)",out:"4"},{name:"Define vec and call",code:"(var f [1]) (f 1)",out:"1"},{name:"Define num and call",code:"(var f 1) (f [:a :b :c])",out:":b"},{name:"Print simple vector",code:"[1 2 3]",out:"[1 2 3]"},{name:"Boolean select",code:"[(true 1 2) (false 1)]",out:"[1 null]"},{name:"Sum vector of numbers",code:"[(reduce + [1 2 3]) (reduce + [1 2 3] 3)]",out:"[6 9]"},{name:"Sum vectors of numbers",code:"(map + [1 2 3] [1 2 3 4])",out:"[2 4 6]"},{name:"Filter by integer",code:'(filter 2 [[1] [:a :b :c] "hello" "hi"])',out:'[[:a :b :c] "hello"]'},{name:"Comments, short decimal",code:';((print "Hello")\n           .456',out:"0.456"},{name:"Dictionary into vector",code:"(into [1 2] {3 4 5 6})",out:"[1 2 [3 4] [5 6]]"},{name:"Vector into dictionary",code:"(into {[0] 1 [2] 3} [[0] 2])",out:"{[0] 2, [2] 3}"},{name:"While loop",code:"(var n 5)\n           (while (< 0 n)\n             (print-str n)\n             (var n (dec n)))",out:"543210"},{name:"Catch error",code:'(catch\n             (:e (catch (do (let a :a) (+ 1 a)) (0 errors)))\n             (print "hi"))',out:"Type"},{name:"Define with no call",code:'(function func (print "Nothing."))'},{name:"Call greet func",code:'(function greeting (print "Hello!")) (greeting)',out:"Hello!\nnull"},{name:"Call const value func",code:"(function const 123) (const)",out:"123"},{name:"Call identity funcs",code:"(function id1 %)\n           (function id2 x x)\n           [(id1 123) (id2 456)]",out:"[123 456]"},{name:"Call greet with name",code:'(function greeting name (print "Hello, " name "!"))\n           (greeting "Patrick")',out:"Hello, Patrick!\nnull"},{name:"Call with too few args",code:"(function func a b c [a b c]) (func 1 2)",out:"[1 2 null]"},{name:"Define func and call",code:"(function func a b (+ a b)) (var f func) (f 2 2)",out:"4"},{name:"Anonymous parameters",code:"(function avg<n? (< (/ (.. + %) (len %)) %1))\n           (avg<n? [0 10 20 30 40] 5)",out:"false"},{name:"Call parameter",code:'(function f x (x "hello")) (f print)',out:"hello\nnull"},{name:"Let and retrieve",code:"(function f (let a 1) a) (f)",out:"1"},{name:"Let num op and call",code:"(function f (let n 0) (n [1])) (f)",out:"1"},{name:"Explicit return",code:"(function f (return 123) (print 456)) (f)",out:"123"},{name:"Closure 1",code:"(let x 10)\n           (let closure #(+ x x))\n           (let x 11)\n           (closure)",out:"20"},{name:"Closure 2",code:"(filter #(or (.. = args) (even? %)) (range 10) 5)",out:"[0 2 4 5 6 8]"},{name:"Closure 3",code:"(function f #(+ x x))\n           (var x 10) (let c20 (f))\n           (var x 20) (let c40 (f))\n           [(c20) (c40)]",out:"[20 40]"},{name:"Func returns closure",code:"(function f x #(x 2 2))\n           (let closure (f +))\n           (closure)",out:"4"},{name:"Dictionary closure",code:"(function f x #{x 2})\n           (let closure (f :a))\n           (closure)",out:"{:a 2}"},{name:"Vector closure",code:"(function f x #[1 x %])\n           (let closure (f 2))\n           (closure 3)",out:"[1 2 3]"},{name:"Closure as head",code:"(#[% %1 %2] 1 2 3)",out:"[1 2 3]"},{name:"Partial closure 1",code:"(@[] 1 2 3)",out:"[1 2 3]"},{name:"String instead of number",code:'(function sum (.. + args))\n           (print (sum 2 2))\n           (sum 2 "hi")',out:"4",err:["Type"]},{name:"Reference non-existing",code:"x",err:["Reference"]},{name:"Expired let retrieve",code:"(function f (let a 1) a) (f) a",err:["Reference"]},{name:"Call non-existing",code:"(x)",err:["External"]},{name:"Call budget",code:"(function f (f)) (f)",err:["Budget"]},{name:"Loop budget",code:"(var n 10000)\n           (while (< 0 n)\n             (var n (dec n)))",err:["Budget"]},{name:"Range budget",code:"(range 10000)",err:["Budget"]},{name:"Fibonacci 13",code:"(function fib n\n             (if (< n 2) n\n               (+ (fib (dec n))\n                  (fib (- n 2)))))\n           (fib 13)",out:"233"},{name:"dedupe (recur)",code:"(function dedupe list -out\n             (let out (or -out []))\n             (let next (if (out (0 list)) [] [(0 list)]))\n             (if (empty? list) out\n                 (recur (sect list) (into out next))))\n           (dedupe [1 1 2 3 3 3])",out:"[1 2 3]"},{name:"set get",code:"[($globals.time_offset 5.5) $globals.time_offset]",out:"[5.5 5.5]"},{name:"exe",code:"(test.function 123)",out:"123\nnull"},{name:"Empty parens",code:"()",err:["Parse"]},{name:"Imbalanced parens 1",code:'(print ("hello!")',err:["Parse"]},{name:"Imbalanced parens 2",code:'print "hello!")',err:["Parse"]},{name:"Imbalanced quotes 1",code:'(print "Hello)',err:["Parse","Parse"]},{name:"Imbalanced quotes 2",code:'print "Hello")',err:["Parse"]},{name:"Function as op",code:"(function)",err:["Parse"]},{name:"Function without name",code:"(function (+))",err:["Parse"]},{name:"Function without body",code:"(function func)",err:["Parse"]},{name:"Variable not symbol",code:"(var 1 2)",err:["Parse"]},{name:"Parser type error 1",code:"(function f (+ 1 :a))",err:["Type"]},{name:"Parser type error 2",code:"(function f (+ 1 (into {} {})))",err:["Type"]},{name:"Parser type error 3",code:"(function f (if true (into 2 {}) (+ 2 2)))",err:["Type"]}],{abs:$e,cos:Be,sin:Ie,tan:je,pi:Ee,sign:Pe,sqrt:Me,floor:He,ceil:Ne,round:Se,max:qe,min:De}=r,{logn:Oe,log2:Te,log10:Fe}=r,{concat:Re,has:Le,flat:Ve,push:We,reverse:_e,slice:Ke,splice:ze,sortBy:Ue}=r,{ends:Ge,slen:Je,starts:Qe,sub:Xe,subIdx:Ye,substr:Ze,upperCase:et,lowerCase:tt}=r,{trim:rt,trimStart:nt,trimEnd:st}=r,{getTimeMs:at,randInt:ot,randNum:it}=r,{isNum:ct,len:ut,objKeys:lt,range:vt,toNum:pt}=r,dt=e=>{const t=e=>"str"===e.t?`"${e.v}"`:dt(e);if("clo"===e.t)return`#${e.v.name}`;if("vec"===e.t)return`[${e.v.map(t).join(" ")}]`;if("dict"===e.t){const{keys:r,vals:n}=e.v,[s,a]=[r.map(t),n.map(t)];return`{${s.map(((e,t)=>`${e} ${a[t]}`)).join(", ")}}`}return"null"===e.t?"null":`${e.v}`};let mt=[],ft=[];const yt=e=>mt.push({t:"bool",v:e}),xt=e=>mt.push({t:"num",v:e}),ht=(e="")=>mt.push({t:"str",v:e}),bt=(e=[])=>mt.push({t:"vec",v:e}),gt=e=>mt.push({t:"dict",v:e}),At=()=>mt.push({t:"null",v:void 0}),Ct=e=>mt.push({t:"func",v:e}),kt=({v:e})=>e,wt=({v:e})=>e,$t=({v:e})=>e,Bt=({v:e})=>e,It=e=>"bool"===e.t?e.v:"null"!==e.t,jt=e=>"vec"===e.t?Ke(e.v):"str"===e.t?[...e.v].map((e=>({t:"str",v:e}))):"dict"===e.t?e.v.keys.map(((t,r)=>({t:"vec",v:[t,e.v.vals[r]]}))):[],Et=e=>e.reduce(((e,t)=>e+dt(t)),""),Pt=e=>{ut(e)%2==1&&e.pop();const t=e.filter(((e,t)=>t%2==0)),r=e.filter(((e,t)=>t%2==1)),n=[],s=[];return t.forEach(((e,t)=>{const a=n.findIndex((t=>Ht(t,e)));-1===a?(n.push(e),s.push(r[t])):s[a]=r[t]})),{t:"dict",v:{keys:n,vals:s}}},Mt=(e,t)=>ut(e)===ut(t)&&!e.some(((e,r)=>!Ht(e,t[r]))),Ht=(e,t)=>{if(e.t!==t.t)return!1;switch(e.t){case"null":return!0;case"bool":case"num":return e.v===t.v;case"vec":return Mt(e.v,$t(t));case"dict":{const r=Bt(t);return ut(e.v.keys)===ut(r.keys)&&Mt(e.v.keys,r.keys)}case"str":case"ref":case"key":case"func":return wt(e)===wt(t);case"clo":return e.v.name===t.v.name}return 0},Nt=({keys:e,vals:t},r)=>{const n=e.findIndex((e=>Ht(e,r)));return-1===n?{t:"null",v:void 0}:t[n]},St=({keys:e,vals:t},r,n)=>{const[s,a]=[Ke(e),Ke(t)],o=e.findIndex((e=>Ht(e,r)));return-1!==o?a[o]=n:(s.push(r),a.push(n)),{keys:s,vals:a}};function qt(e,t,r,n=!0){const s=[{e:"Arity",m:"one argument required",errCtx:r}];if("str"===t.t||"func"===t.t){const a=t.v;return G[a]?t=>async function(e,t,r,n,s){const a=e=>[Q(e,n)];if(s){const r=ye(e,ut(t),n);if(r)return r}{const r=xe(e,t.map((e=>[e.t])),n);if(r)return r}switch(e){case"str":return void mt.push({t:"str",v:Et(t)});case"print":case"print-str":return r.exe(e,[{t:"str",v:Et(t)}]),void At();case"vec":return void bt(t);case"dict":return void mt.push(Pt(t));case"len":return void xt("str"===t[0].t?Je(t[0].v):"vec"===t[0].t?ut(t[0].v):ut(Bt(t[0]).keys));case"to-num":return void(ct(t[0].v)?xt(pt(t[0].v)):At());case"to-key":return void mt.push({t:"key",v:`:${dt(t[0])}`});case"!":return void yt(!It(t[0]));case"=":case"!=":for(let r=1,n=ut(t);r<n;++r)if(Ht(t[r-1],t[r])!==("="===e))return void yt(!1);return void mt.push(t[0]);case"-":return void xt(1===ut(t)?-kt(t[0]):t.map(kt).reduce(((e,t)=>e-t)));case"**":return void xt(kt(t[0])**(1===ut(t)?2:kt(t[1])));case"+":return void xt(t.map(kt).reduce(((e,t)=>e+t)));case"*":return void xt(t.map(kt).reduce(((e,t)=>e*t)));case"/":return void xt(t.map(kt).reduce(((e,t)=>e/t)));case"//":return void xt(t.map(kt).reduce(((e,t)=>He(e/t))));case"fast=":case"fast!=":return Ht(t[0],t[1])!==("fast="===e)?void yt(!1):void mt.push(t[0]);case"fast-":return void xt(t[0].v-t[1].v);case"fast+":return void xt(t[0].v+t[1].v);case"fast*":return void xt(t[0].v*t[1].v);case"fast/":return void xt(t[0].v/t[1].v);case"fast//":return void xt(He(t[0].v/t[1].v));case"fast<":return void yt(t[0].v<t[1].v);case"fast>":return void yt(t[0].v>t[1].v);case"fast<=":return void yt(t[0].v<=t[1].v);case"fast>=":return void yt(t[0].v>=t[1].v);case"rem":return void xt(t.map(kt).reduce(((e,t)=>e%t)));case"min":return void xt(t.map(kt).reduce(((e,t)=>De(e,t))));case"max":return void xt(t.map(kt).reduce(((e,t)=>qe(e,t))));case"<":case">":case"<=":case">=":for(let r=1,n=ut(t);r<n;++r){const[n,s]=[t[r-1].v,t[r].v];if("<"===e&&n>=s||">"===e&&n<=s||"<="===e&&n>s||">="===e&&n<s)return void yt(!1)}return void yt(!0);case"inc":return void xt(t[0].v+1);case"dec":return void xt(t[0].v-1);case"abs":return void xt($e(t[0].v));case"pi":return void xt(Ee);case"sin":case"cos":case"tan":case"sqrt":case"round":case"floor":case"ceil":case"logn":case"log2":case"log10":return void xt({sin:Ie,cos:Be,tan:je,sqrt:Me,round:Se,floor:He,ceil:Ne,logn:Oe,log2:Te,log10:Fe}[e](kt(t[0])));case"and":return void yt(t.every(It));case"or":return void yt(t.some(It));case"odd?":case"even?":return void yt(kt(t[0])%2==("odd?"===e?1:0));case"pos?":case"neg?":case"zero?":{const r=kt(t[0]);return void yt("pos?"===e?r>0:"neg?"===e?r<0:!r)}case"null?":case"num?":case"bool?":case"str?":case"dict?":case"vec?":case"key?":case"func?":return void yt("null?"===e&&"null"===t[0].t||"num?"===e&&"num"===t[0].t||"bool?"===e&&"bool"===t[0].t||"str?"===e&&"str"===t[0].t||"dict?"===e&&"dict"===t[0].t||"vec?"===e&&"vec"===t[0].t||"key?"===e&&"key"===t[0].t||"func?"===e&&("func"===t[0].t||"clo"===t[0].t));case"has?":return void yt(Xe(wt(t[0]),wt(t[1])));case"idx":{let e=-1;if("str"===t[0].t){if("str"!==t[1].t)return a("strings can only contain strings");if(!(ut(t)<3)){const e=t[0].v.split("");return e[kt(t[2])]=t[1].v,void ht(e.join(""))}e=Ye(t[0].v,t[1].v)}else if("vec"===t[0].t){if(!(ut(t)<3)){const e=Ke(t[0].v);return e[kt(t[2])]=t[1],void bt(e)}e=t[0].v.findIndex((e=>Ht(e,t[1])))}return void(-1===e?At():xt(e))}case"map":case"for":case"reduce":case"filter":case"remove":case"find":case"count":{const s=qt(r,t.shift(),n),o=e=>"vec"===e||"str"===e||"dict"===e,i="map"===e||"for"===e?t.findIndex((({t:e})=>!o(e))):o(t[0].t)?-1:0;if(-1!==i)return a(`argument 2 must be either: string, vector, dictionary, not ${J[t[i].t]}`);if("for"===e){const e=t.map(jt),a=e.map(ut),o=a.map(((e,t)=>Ke(a,0,t+1).reduce(((e,t)=>e*t))));o.unshift(1);const i=o.pop();if(i>r.loopBudget)return[{e:"Budget",m:"would exceed loop budget",errCtx:n}];const c=[];for(let t=0;t<i;++t){const r=o.map(((e,r)=>He(t/e%a[r]))),n=await s(e.map(((e,t)=>e[r[t]])));if(n)return n;c.push(mt.pop())}return void bt(c)}if("map"===e){const e=t.map(jt),r=De(...e.map(ut)),n=[];for(let t=0;t<r;++t){const r=await s(e.map((e=>e[t])));if(r)return r;n.push(mt.pop())}return void bt(n)}const c=jt(t.shift());if("reduce"!==e){const r="remove"===e,n="find"===e,a="count"===e,o=[];let i=0;for(let e=0,u=ut(c);e<u;++e){const u=await s([c[e],...t]);if(u)return u;const l=It(mt.pop());if(a)i+=l?1:0;else{if(n&&l)return void mt.push(c[e]);n||l===r||o.push(c[e])}}switch(e){case"count":return void xt(i);case"find":return void At();default:return void bt(o)}}if(!ut(c))return void(ut(t)?mt.push(t[0]):bt());if(ut(c)<2&&!ut(t))return void We(mt,c);let u=(ut(t)?t:c).shift();for(let e=0,t=ut(c);e<t;++e){const t=await s([u,c[e]]);if(t)return t;u=mt.pop()}mt.push(u)}return;case"rand-int":case"rand":{const r=ut(t),[n,s]=[r<2?0:kt(t[0]),0===r?1+pt("rand-int"===e):kt(1===r?t[0]:t[1])];xt("rand-int"===e?ot(n,s):it(n,s))}return;case"do":case"val":return void mt.push("do"===e?t.pop():t.shift());case"..":case"...":{const s=qt(r,t.shift(),n);let a=t;if(".."===e)a=Ve(t.map((e=>"vec"===e.t?e.v:[e])));else{const e=a.pop();We(a,Ve(["vec"===e.t?e.v:[e]]))}return await s(a)}case"into":if("vec"===t[0].t)bt(Re(t[0].v,jt(t[1])));else if("vec"===t[1].t)mt.push(Pt(Re(Ve(jt(t[0]).map($t)),t[1].v)));else{const{keys:e,vals:r}=Bt(t[0]),n=Bt(t[1]);gt({keys:Re(e,n.keys),vals:Re(r,n.vals)})}return;case"push":if("vec"===t[0].t){const e=t[0].v;if(ut(t)<3)bt(Re(e,[t[1]]));else{const r=kt(t[2]);bt(Re(Re(Ke(e,0,r),[t[1]]),Ke(e,r)))}}else ut(t)<3?mt.push((({keys:e,vals:t},r)=>{const[n,s]=[Ke(e),Ke(t)],a=e.findIndex((e=>Ht(e,r)));return-1!==a&&(ze(n,a,1),ze(s,a,1)),{t:"dict",v:{keys:n,vals:s}}})(Bt(t[0]),t[1])):gt(St(Bt(t[0]),t[1],t[2]));return;case"sect":{const e=t[0],r="vec"===e.t?ut(e.v):Je(wt(e));let n=0,s=r;switch(ut(t)){case 1:n=1;break;case 2:{const e=kt(t[1]);e<0?s+=e:n+=e;break}case 3:{const e=kt(t[1]),a=kt(t[2]);n=e<0?r+e+(a<0?a:0):n+e,s=(a<0?s:n)+a;break}}return n=qe(n,0),s=De(s,r),n>s?void("vec"===e.t?bt:ht)():void("vec"===e.t?bt(Ke(e.v,n,s)):ht(Ze(wt(t[0]),n,s-n)))}case"reverse":return void("str"===t[0].t?ht(Et(_e(jt(t[0])))):bt(_e(jt(t[0]))));case"sort":{if(!ut($t(t[0])))return void bt();const e=jt(t[0]),s=[];if(1===ut(t))We(s,e.map((e=>[e,e])));else{const a=qt(r,t.pop(),n);for(let t=0,r=ut(e);t<r;++t){const r=await a([e[t]]);if(r)return r;s.push([e[t],mt.pop()])}}const o=s[0][1].t;return s.some((([e,{t}])=>t!==o||!Le(["num","str"],t)))?a("can only sort by all number or all string"):("num"===s[0][1].t?Ue(s,(([e,t],[r,n])=>kt(t)>kt(n)?1:-1)):Ue(s,(([e,t],[r,n])=>wt(t)>wt(n)?1:-1)),void bt(s.map((([e])=>e))))}case"range":{const[e,s,a]=t.map(kt),o=a&&a<0&&e<s,[i,c]=ut(t)>1?o?[s-1,e-1]:[e,s]:[0,e],u=Pe((c-i)*(a||1))*(a||1),l=Ne($e((c-i)/u));if(!l)return void bt([]);if(l>r.rangeBudget)return[{e:"Budget",m:"range budget depleted",errCtx:n}];r.rangeBudget-=l;const v=vt(l).map((e=>e*u+i));return void bt(v.map((e=>({t:"num",v:e}))))}case"empty?":return void yt(!ut(jt(t[0])));case"keys":case"vals":return void bt(Bt(t[0])["keys"===e?"keys":"vals"]);case"split":return void bt(wt(t[0]).split(ut(t)>1?wt(t[1]):" ").map((e=>({t:"str",v:e}))));case"join":return void ht($t(t[0]).map(dt).join(ut(t)>1?wt(t[1]):" "));case"starts-with?":case"ends-with?":return void yt(("starts-with?"===e?Qe:Ge)(wt(t[0]),wt(t[1])));case"upper-case":case"lower-case":case"trim":case"trim-start":case"trim-end":return void ht(("upper-case"===e?et:"lower-case"===e?tt:"trim"===e?rt:"trim-start"===e?nt:st)(wt(t[0])));case"str*":{const e=wt(t[0]);return void ht(vt(qe(kt(t[1]),0)).map((t=>e)).join(""))}case"time":return void xt(at());case"version":return void xt(20211010);case"tests":return void ht((await async function(e,t=!0){const r=[];for(let t=0;t<o(we);++t){const{name:n,code:s,err:a,out:o}=we[t],i={dict:new Map,output:""},c={funcs:{},vars:{}},u=H(),l=await e({get:e=>Ae(i,e),set:(e,t)=>Ce(i,e,t),exe:(e,t)=>ke(i,e,t),env:c,loopBudget:1e4,rangeBudget:1e3,callBudget:1e3,recurBudget:1e4},s,"testing",!0),v=(a||[]).join()===l.map((({e})=>e)).join(),p=!o||w(i.output)===o,d=H()-u,[m,f,y,x,h]=[I(`${t+1}`,3),I(n,24),I(`${d}ms`,6),p||o+"\t=/=\t"+w(i.output),v||l.map((({e,m:t,errCtx:{line:r,col:n}})=>`${e} ${r}:${n}: ${t}`))];r.push({okErr:v,okOut:p,elapsedMs:d,display:`${m} ${f} ${y} ${x} ${h}`})}const n=r.reduce(((e,{elapsedMs:t})=>e+t),0),s=o(r.filter((({okOut:e,okErr:t})=>e&&t)));return h(r.filter((e=>!t||!e.okOut||!e.okErr)).map((e=>e.display)),[`---- ${s}/${o(r)} tests passed in ${n}ms.`])}(Ft,!(ut(t)&&It(t[0])))).join("\n"));case"symbols":return void bt(function(e,t=!0){let r=t?["function"]:[];r=Re(r,lt(G)),r=Re(r,lt(e.env.funcs)),r=Re(r,lt(e.env.vars));const n=["entry"];return r.filter((e=>!Le(n,e)))}(r,!1).map((e=>({t:"str",v:e}))));case"eval":{delete r.env.funcs.entry;const e=ut(mt),s=await Tt(r,wt(t[0]),n.invocationId);return s?(s.forEach((e=>{e.errCtx.invocationId="evaluated"})),[{e:"Eval",m:"error within evaluated code",errCtx:n},...s]):void(e===ut(mt)&&At())}case"reset":return r.env.vars={},r.env.funcs={},ft=[],void At()}return[{e:"Unexpected",m:"operation doesn't exist",errCtx:n}]}(a,t,e,r,n):a in e.env.funcs?t=>Ot(e,e.env.funcs[a],t):a in e.env.vars?qt(e,e.env.vars[a],r):a in ft[ut(ft)-1]?qt(e,ft[ut(ft)-1][a],r):Qe(a,"$")?async t=>{if(!ut(t))return s;const n=await e.set(Ze(a,1),t[0]);return mt.push(t[0]),n?[{e:"External",m:n,errCtx:r}]:void 0}:async t=>{const{err:n,value:s}=await e.exe(a,t);return n||mt.push(s),n?[{e:"External",m:n,errCtx:r}]:void 0}}if("clo"===t.t)return r=>Ot(e,t.v,r);if("key"===t.t)return async e=>{if(!ut(e))return s;if("dict"===e[0].t)mt.push(Nt(Bt(e[0]),t));else{if("vec"!==e[0].t)return Y(r,[e[0].t]);{const r=$t(e[0]).find((e=>Ht(e,t)));mt.push(r??{t:"null",v:void 0})}}};if("num"===t.t){const e=He(t.v);return async t=>{if(!ut(t))return s;const n=t[0];if("str"!==n.t&&"vec"!==n.t&&"dict"!==n.t)return X(r,[n.t]);const a=jt(n);$e(e)>=ut(a)?At():e<0?mt.push(a[ut(a)+e]):mt.push(a[e])}}if("vec"===t.t){const{v:e}=t;return async t=>{if(!ut(t))return s;const r=e.find((e=>Ht(e,t[0])));r?mt.push(r):At()}}if("dict"===t.t){const e=t.v;return async t=>{if(1===ut(t))mt.push(Nt(e,t[0]));else{if(2!==ut(t))return[{e:"Arity",m:"dictionary as operation takes one or two arguments only",errCtx:r}];gt(St(e,t[0],t[1]))}}}if("bool"===t.t){const e=t.v;return async t=>{if(!ut(t)||ut(t)>2)return[{e:"Arity",m:"boolean as operation takes one or two arguments only",errCtx:r}];mt.push(e?t[0]:ut(t)>1?t[1]:{t:"null",v:void 0})}}return async e=>[{e:"Operation",m:`${dt(t)} is an invalid operation`,errCtx:r}]}function Dt(e){const t=(e,t,r)=>St(e,{t:"key",v:t},r);return e.map((({e,m:r,errCtx:n})=>{let s=t({keys:[],vals:[]},":e",{t:"str",v:e});return s=t(s,":m",{t:"str",v:r}),s=t(s,":line",{t:"num",v:n.line}),s=t(s,":col",{t:"num",v:n.col}),{t:"dict",v:s}}))}async function Ot(e,t,r,n=!1){--e.callBudget,n||ft.push({});const s=ut(mt);for(let n=0,s=ut(t.ins);n<s;++n){const a=t.ins[n],{errCtx:o}=t.ins[n],i=e.loopBudget<1;if(i||e.callBudget<1)return[{e:"Budget",m:(i?"looped":"called")+" too many times",errCtx:o}];switch(a.typ){case"val":mt.push(a.value);break;case"var":e.env.vars[a.value]=mt[ut(mt)-1];break;case"let":ft[ut(ft)-1][a.value]=mt[ut(mt)-1];break;case"npa":case"upa":{const e=a.value;-1===e?bt(r):ut(r)<=e?At():mt.push(r[e])}break;case"ref":{const t=a.value;if(G[t])Ct(t);else if(Qe(t,"$")){const{value:r,err:n}=await e.get(Ze(t,1));if(n)return[{e:"External",m:n,errCtx:o}];mt.push(r)}else if(t in e.env.vars)mt.push(e.env.vars[t]);else if(t in ft[ut(ft)-1])mt.push(ft[ut(ft)-1][t]);else{if(!(t in e.env.funcs))return[{e:"Reference",m:`"${t}" did not exist`,errCtx:o}];Ct(t)}}break;case"exe":{const r=qt(e,mt.pop(),o,!1),s=a.value,i=ze(mt,ut(mt)-s,s),c=await r(i);if(c){const e=Ke(t.ins,n).findIndex((e=>"cat"===e.typ));if(-1!==e){n+=e,ft[ut(ft)-1].errors={t:"vec",v:Dt(c)};break}return c}}break;case"or":It(mt[ut(mt)-1])?n+=a.value:mt.pop();break;case"if":It(mt.pop())||(n+=a.value);break;case"jmp":case"cat":n+=a.value;break;case"loo":n+=a.value,--e.loopBudget;break;case"pop":ze(mt,ut(mt)-a.value,a.value);break;case"ret":a.value?ze(mt,0,ut(mt)-1):At(),n=s;break;case"rec":{ft[ut(ft)-1]={},n=-1;const t=a.value;if(r=ze(mt,ut(mt)-t,t),--e.recurBudget,!e.recurBudget)return[{e:"Budget",m:"recurred too many times",errCtx:o}]}continue;case"clo":case"par":{let[t,n]=a.value;const s=({typ:e,value:t})=>"ref"===e&&!n.find((e=>"let"===e.typ&&e.value===t))||"npa"===e,i={name:"",ins:n.filter(s)},c=await Ot(e,i,r,!0);if(c)return c;const u=ut(i.ins),l=ze(mt,ut(mt)-u,u);if(n=n.map((e=>s(e)?{typ:"val",value:l.shift(),errCtx:o}:e)),"par"===a.typ){const{value:e,errCtx:t}=n.pop();n.unshift(n.pop()),n.push({typ:"upa",value:-1,errCtx:t}),n.push({typ:"val",value:{t:"str",v:"..."},errCtx:t}),n.push({typ:"exe",value:e+2,errCtx:t})}mt.push({t:"clo",v:{name:t,ins:n}})}}}n||(ft.pop(),ze(mt,s,ut(mt)-(s+1)))}async function Tt(e,t,r){const n=ge(t,r);return ut(n.errors)?n.errors:(e.env.funcs={...e.env.funcs,...n.funcs},"entry"in e.env.funcs?await Ot(e,e.env.funcs.entry,[]):void 0)}async function Ft(e,t,r,n=!1){const{callBudget:s,loopBudget:a,recurBudget:o,rangeBudget:i}=e,c=await Tt(e,t,r);return e.callBudget=s,e.recurBudget=o,e.loopBudget=a,e.rangeBudget=i,delete e.env.funcs.entry,!c&&n&&ut(mt)&&await e.exe("print",[{t:"str",v:dt(mt[ut(mt)-1])}]),mt=[],ft=[],c??[]}const Rt=new Map,Lt=/[\[\]\(\) ,]/;async function Vt(e,t){const r=H().toString();Rt.set(r,t);const n=await Ft(e,t,r,!0);let s=[];return n.forEach((({e,m:t,errCtx:{line:r,col:n,invocationId:a}})=>{const o=Rt.get(a);if(!o)return void s.push({type:"message",text:`${e} Error: line ${r} col ${n}: ${t}\n`});const c=o.split("\n")[r-1],u=l(c,n-1).split(Lt)[0],v=$(l(c,0,n-1));if(s.push({type:"message",text:I(`${r}`,4)+v}),u){const e=l(c,n-1+i(u));s.push({type:"error",text:u}),s.push({type:"message",text:`${e}\n`})}else{const e=l(c,n);s.push({type:"error",text:c[n-1]}),s.push({type:"message",text:`${e}\n`})}s.push({type:"message",text:`${e} Error: ${t}.\n`})})),s}window.insitux=t.invoker})();
//# sourceMappingURL=insitux.js.map