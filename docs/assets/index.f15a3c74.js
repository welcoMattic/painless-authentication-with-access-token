(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();function No(e,n){const s=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)s[o[r]]=!0;return n?r=>!!s[r.toLowerCase()]:r=>!!s[r]}const kd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bd=No(kd);function Pc(e){return!!e||e===""}function Ve(e){if(oe(e)){const n={};for(let s=0;s<e.length;s++){const o=e[s],r=Fe(o)?$d(o):Ve(o);if(r)for(const l in r)n[l]=r[l]}return n}else{if(Fe(e))return e;if(Pe(e))return e}}const xd=/;(?![^(]*\))/g,Ad=/:(.+)/;function $d(e){const n={};return e.split(xd).forEach(s=>{if(s){const o=s.split(Ad);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Me(e){let n="";if(Fe(e))n=e;else if(oe(e))for(let s=0;s<e.length;s++){const o=Me(e[s]);o&&(n+=o+" ")}else if(Pe(e))for(const s in e)e[s]&&(n+=s+" ");return n.trim()}function Q(e){if(!e)return null;let{class:n,style:s}=e;return n&&!Fe(n)&&(e.class=Me(n)),s&&(e.style=Ve(s)),e}const Sd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Ed=No(Sd),Yt=e=>Fe(e)?e:e==null?"":oe(e)||Pe(e)&&(e.toString===Lc||!ie(e.toString))?JSON.stringify(e,Mc,2):String(e),Mc=(e,n)=>n&&n.__v_isRef?Mc(e,n.value):Xn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,r])=>(s[`${o} =>`]=r,s),{})}:Rc(n)?{[`Set(${n.size})`]:[...n.values()]}:Pe(n)&&!oe(n)&&!Hc(n)?String(n):n,Te={},Zn=[],St=()=>{},Td=()=>!1,Cd=/^on[^a-z]/,jo=e=>Cd.test(e),Al=e=>e.startsWith("onUpdate:"),rt=Object.assign,$l=(e,n)=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)},Od=Object.prototype.hasOwnProperty,ve=(e,n)=>Od.call(e,n),oe=Array.isArray,Xn=e=>Wo(e)==="[object Map]",Rc=e=>Wo(e)==="[object Set]",ie=e=>typeof e=="function",Fe=e=>typeof e=="string",Sl=e=>typeof e=="symbol",Pe=e=>e!==null&&typeof e=="object",Fc=e=>Pe(e)&&ie(e.then)&&ie(e.catch),Lc=Object.prototype.toString,Wo=e=>Lc.call(e),Dd=e=>Wo(e).slice(8,-1),Hc=e=>Wo(e)==="[object Object]",El=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,vo=No(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vo=e=>{const n=Object.create(null);return s=>n[s]||(n[s]=e(s))},Id=/-(\w)/g,Ht=Vo(e=>e.replace(Id,(n,s)=>s?s.toUpperCase():"")),Pd=/\B([A-Z])/g,Ln=Vo(e=>e.replace(Pd,"-$1").toLowerCase()),Uo=Vo(e=>e.charAt(0).toUpperCase()+e.slice(1)),ir=Vo(e=>e?`on${Uo(e)}`:""),qs=(e,n)=>!Object.is(e,n),Qn=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)},Ao=(e,n,s)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:s})},Mr=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let xa;const Md=()=>xa||(xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let dt;class qc{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=dt,!n&&dt&&(this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}run(n){if(this.active){const s=dt;try{return dt=this,n()}finally{dt=s}}}on(){dt=this}off(){dt=this.parent}stop(n){if(this.active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Rd(e){return new qc(e)}function Fd(e,n=dt){n&&n.active&&n.effects.push(e)}function Nc(){return dt}function jc(e){dt&&dt.cleanups.push(e)}const Tl=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Wc=e=>(e.w&dn)>0,Vc=e=>(e.n&dn)>0,Ld=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=dn},Hd=e=>{const{deps:n}=e;if(n.length){let s=0;for(let o=0;o<n.length;o++){const r=n[o];Wc(r)&&!Vc(r)?r.delete(e):n[s++]=r,r.w&=~dn,r.n&=~dn}n.length=s}},Rr=new WeakMap;let As=0,dn=1;const Fr=30;let xt;const On=Symbol(""),Lr=Symbol("");class Cl{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Fd(this,o)}run(){if(!this.active)return this.fn();let n=xt,s=rn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=xt,xt=this,rn=!0,dn=1<<++As,As<=Fr?Ld(this):Aa(this),this.fn()}finally{As<=Fr&&Hd(this),dn=1<<--As,xt=this.parent,rn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xt===this?this.deferStop=!0:this.active&&(Aa(this),this.onStop&&this.onStop(),this.active=!1)}}function Aa(e){const{deps:n}=e;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(e);n.length=0}}let rn=!0;const Uc=[];function us(){Uc.push(rn),rn=!1}function ps(){const e=Uc.pop();rn=e===void 0?!0:e}function gt(e,n,s){if(rn&&xt){let o=Rr.get(e);o||Rr.set(e,o=new Map);let r=o.get(s);r||o.set(s,r=Tl()),Kc(r)}}function Kc(e,n){let s=!1;As<=Fr?Vc(e)||(e.n|=dn,s=!Wc(e)):s=!e.has(xt),s&&(e.add(xt),xt.deps.push(e))}function Gt(e,n,s,o,r,l){const a=Rr.get(e);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(s==="length"&&oe(e))a.forEach((c,u)=>{(u==="length"||u>=o)&&i.push(c)});else switch(s!==void 0&&i.push(a.get(s)),n){case"add":oe(e)?El(s)&&i.push(a.get("length")):(i.push(a.get(On)),Xn(e)&&i.push(a.get(Lr)));break;case"delete":oe(e)||(i.push(a.get(On)),Xn(e)&&i.push(a.get(Lr)));break;case"set":Xn(e)&&i.push(a.get(On));break}if(i.length===1)i[0]&&Hr(i[0]);else{const c=[];for(const u of i)u&&c.push(...u);Hr(Tl(c))}}function Hr(e,n){const s=oe(e)?e:[...e];for(const o of s)o.computed&&$a(o);for(const o of s)o.computed||$a(o)}function $a(e,n){(e!==xt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const qd=No("__proto__,__v_isRef,__isVue"),zc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Sl)),Nd=Ol(),jd=Ol(!1,!0),Wd=Ol(!0),Sa=Vd();function Vd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...s){const o=Be(this);for(let l=0,a=this.length;l<a;l++)gt(o,"get",l+"");const r=o[n](...s);return r===-1||r===!1?o[n](...s.map(Be)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...s){us();const o=Be(this)[n].apply(this,s);return ps(),o}}),e}function Ol(e=!1,n=!1){return function(o,r,l){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&l===(e?n?lf:Xc:n?Zc:Gc).get(o))return o;const a=oe(o);if(!e&&a&&ve(Sa,r))return Reflect.get(Sa,r,l);const i=Reflect.get(o,r,l);return(Sl(r)?zc.has(r):qd(r))||(e||gt(o,"get",r),n)?i:xe(i)?a&&El(r)?i:i.value:Pe(i)?e?Sn(i):Ie(i):i}}const Ud=Jc(),Kd=Jc(!0);function Jc(e=!1){return function(s,o,r,l){let a=s[o];if(rs(a)&&xe(a)&&!xe(r))return!1;if(!e&&(!$o(r)&&!rs(r)&&(a=Be(a),r=Be(r)),!oe(s)&&xe(a)&&!xe(r)))return a.value=r,!0;const i=oe(s)&&El(o)?Number(o)<s.length:ve(s,o),c=Reflect.set(s,o,r,l);return s===Be(l)&&(i?qs(r,a)&&Gt(s,"set",o,r):Gt(s,"add",o,r)),c}}function zd(e,n){const s=ve(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&s&&Gt(e,"delete",n,void 0),o}function Jd(e,n){const s=Reflect.has(e,n);return(!Sl(n)||!zc.has(n))&&gt(e,"has",n),s}function Yd(e){return gt(e,"iterate",oe(e)?"length":On),Reflect.ownKeys(e)}const Yc={get:Nd,set:Ud,deleteProperty:zd,has:Jd,ownKeys:Yd},Gd={get:Wd,set(e,n){return!0},deleteProperty(e,n){return!0}},Zd=rt({},Yc,{get:jd,set:Kd}),Dl=e=>e,Ko=e=>Reflect.getPrototypeOf(e);function ao(e,n,s=!1,o=!1){e=e.__v_raw;const r=Be(e),l=Be(n);s||(n!==l&&gt(r,"get",n),gt(r,"get",l));const{has:a}=Ko(r),i=o?Dl:s?Ml:Ns;if(a.call(r,n))return i(e.get(n));if(a.call(r,l))return i(e.get(l));e!==r&&e.get(n)}function io(e,n=!1){const s=this.__v_raw,o=Be(s),r=Be(e);return n||(e!==r&&gt(o,"has",e),gt(o,"has",r)),e===r?s.has(e):s.has(e)||s.has(r)}function co(e,n=!1){return e=e.__v_raw,!n&&gt(Be(e),"iterate",On),Reflect.get(e,"size",e)}function Ea(e){e=Be(e);const n=Be(this);return Ko(n).has.call(n,e)||(n.add(e),Gt(n,"add",e,e)),this}function Ta(e,n){n=Be(n);const s=Be(this),{has:o,get:r}=Ko(s);let l=o.call(s,e);l||(e=Be(e),l=o.call(s,e));const a=r.call(s,e);return s.set(e,n),l?qs(n,a)&&Gt(s,"set",e,n):Gt(s,"add",e,n),this}function Ca(e){const n=Be(this),{has:s,get:o}=Ko(n);let r=s.call(n,e);r||(e=Be(e),r=s.call(n,e)),o&&o.call(n,e);const l=n.delete(e);return r&&Gt(n,"delete",e,void 0),l}function Oa(){const e=Be(this),n=e.size!==0,s=e.clear();return n&&Gt(e,"clear",void 0,void 0),s}function uo(e,n){return function(o,r){const l=this,a=l.__v_raw,i=Be(a),c=n?Dl:e?Ml:Ns;return!e&&gt(i,"iterate",On),a.forEach((u,d)=>o.call(r,c(u),c(d),l))}}function po(e,n,s){return function(...o){const r=this.__v_raw,l=Be(r),a=Xn(l),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=r[e](...o),d=s?Dl:n?Ml:Ns;return!n&&gt(l,"iterate",c?Lr:On),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:i?[d(f[0]),d(f[1])]:d(f),done:h}},[Symbol.iterator](){return this}}}}function en(e){return function(...n){return e==="delete"?!1:this}}function Xd(){const e={get(l){return ao(this,l)},get size(){return co(this)},has:io,add:Ea,set:Ta,delete:Ca,clear:Oa,forEach:uo(!1,!1)},n={get(l){return ao(this,l,!1,!0)},get size(){return co(this)},has:io,add:Ea,set:Ta,delete:Ca,clear:Oa,forEach:uo(!1,!0)},s={get(l){return ao(this,l,!0)},get size(){return co(this,!0)},has(l){return io.call(this,l,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:uo(!0,!1)},o={get(l){return ao(this,l,!0,!0)},get size(){return co(this,!0)},has(l){return io.call(this,l,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:uo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=po(l,!1,!1),s[l]=po(l,!0,!1),n[l]=po(l,!1,!0),o[l]=po(l,!0,!0)}),[e,s,n,o]}const[Qd,ef,tf,nf]=Xd();function Il(e,n){const s=n?e?nf:tf:e?ef:Qd;return(o,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(ve(s,r)&&r in o?s:o,r,l)}const sf={get:Il(!1,!1)},of={get:Il(!1,!0)},rf={get:Il(!0,!1)},Gc=new WeakMap,Zc=new WeakMap,Xc=new WeakMap,lf=new WeakMap;function af(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cf(e){return e.__v_skip||!Object.isExtensible(e)?0:af(Dd(e))}function Ie(e){return rs(e)?e:Pl(e,!1,Yc,sf,Gc)}function uf(e){return Pl(e,!1,Zd,of,Zc)}function Sn(e){return Pl(e,!0,Gd,rf,Xc)}function Pl(e,n,s,o,r){if(!Pe(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const l=r.get(e);if(l)return l;const a=cf(e);if(a===0)return e;const i=new Proxy(e,a===2?o:s);return r.set(e,i),i}function es(e){return rs(e)?es(e.__v_raw):!!(e&&e.__v_isReactive)}function rs(e){return!!(e&&e.__v_isReadonly)}function $o(e){return!!(e&&e.__v_isShallow)}function Qc(e){return es(e)||rs(e)}function Be(e){const n=e&&e.__v_raw;return n?Be(n):e}function zo(e){return Ao(e,"__v_skip",!0),e}const Ns=e=>Pe(e)?Ie(e):e,Ml=e=>Pe(e)?Sn(e):e;function Rl(e){rn&&xt&&(e=Be(e),Kc(e.dep||(e.dep=Tl())))}function Fl(e,n){e=Be(e),e.dep&&Hr(e.dep)}function xe(e){return!!(e&&e.__v_isRef===!0)}function U(e){return eu(e,!1)}function qt(e){return eu(e,!0)}function eu(e,n){return xe(e)?e:new pf(e,n)}class pf{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:Be(n),this._value=s?n:Ns(n)}get value(){return Rl(this),this._value}set value(n){const s=this.__v_isShallow||$o(n)||rs(n);n=s?n:Be(n),qs(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:Ns(n),Fl(this))}}function B(e){return xe(e)?e.value:e}const df={get:(e,n,s)=>B(Reflect.get(e,n,s)),set:(e,n,s,o)=>{const r=e[n];return xe(r)&&!xe(s)?(r.value=s,!0):Reflect.set(e,n,s,o)}};function tu(e){return es(e)?e:new Proxy(e,df)}class ff{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>Rl(this),()=>Fl(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function nu(e){return new ff(e)}function hf(e){const n=oe(e)?new Array(e.length):{};for(const s in e)n[s]=mf(e,s);return n}class yf{constructor(n,s,o){this._object=n,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function mf(e,n,s){const o=e[n];return xe(o)?o:new yf(e,n,s)}var su;class gf{constructor(n,s,o,r){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[su]=!1,this._dirty=!0,this.effect=new Cl(n,()=>{this._dirty||(this._dirty=!0,Fl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const n=Be(this);return Rl(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}su="__v_isReadonly";function vf(e,n,s=!1){let o,r;const l=ie(e);return l?(o=e,r=St):(o=e.get,r=e.set),new gf(o,r,l||!r,s)}function ln(e,n,s,o){let r;try{r=o?e(...o):e()}catch(l){Jo(l,n,s)}return r}function Et(e,n,s,o){if(ie(e)){const l=ln(e,n,s,o);return l&&Fc(l)&&l.catch(a=>{Jo(a,n,s)}),l}const r=[];for(let l=0;l<e.length;l++)r.push(Et(e[l],n,s,o));return r}function Jo(e,n,s,o=!0){const r=n?n.vnode:null;if(n){let l=n.parent;const a=n.proxy,i=s;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,i)===!1)return}l=l.parent}const c=n.appContext.config.errorHandler;if(c){ln(c,null,10,[e,a,i]);return}}_f(e,s,r,o)}function _f(e,n,s,o=!0){console.error(e)}let js=!1,qr=!1;const Ye=[];let Mt=0;const ts=[];let Kt=null,Bn=0;const ou=Promise.resolve();let Ll=null;function Ge(e){const n=Ll||ou;return e?n.then(this?e.bind(this):e):n}function wf(e){let n=Mt+1,s=Ye.length;for(;n<s;){const o=n+s>>>1;Ws(Ye[o])<e?n=o+1:s=o}return n}function Hl(e){(!Ye.length||!Ye.includes(e,js&&e.allowRecurse?Mt+1:Mt))&&(e.id==null?Ye.push(e):Ye.splice(wf(e.id),0,e),ru())}function ru(){!js&&!qr&&(qr=!0,Ll=ou.then(au))}function bf(e){const n=Ye.indexOf(e);n>Mt&&Ye.splice(n,1)}function kf(e){oe(e)?ts.push(...e):(!Kt||!Kt.includes(e,e.allowRecurse?Bn+1:Bn))&&ts.push(e),ru()}function Da(e,n=js?Mt+1:0){for(;n<Ye.length;n++){const s=Ye[n];s&&s.pre&&(Ye.splice(n,1),n--,s())}}function lu(e){if(ts.length){const n=[...new Set(ts)];if(ts.length=0,Kt){Kt.push(...n);return}for(Kt=n,Kt.sort((s,o)=>Ws(s)-Ws(o)),Bn=0;Bn<Kt.length;Bn++)Kt[Bn]();Kt=null,Bn=0}}const Ws=e=>e.id==null?1/0:e.id,Bf=(e,n)=>{const s=Ws(e)-Ws(n);if(s===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return s};function au(e){qr=!1,js=!0,Ye.sort(Bf);const n=St;try{for(Mt=0;Mt<Ye.length;Mt++){const s=Ye[Mt];s&&s.active!==!1&&ln(s,null,14)}}finally{Mt=0,Ye.length=0,lu(),js=!1,Ll=null,(Ye.length||ts.length)&&au()}}function xf(e,n,...s){if(e.isUnmounted)return;const o=e.vnode.props||Te;let r=s;const l=n.startsWith("update:"),a=l&&n.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=o[d]||Te;h&&(r=s.map(m=>m.trim())),f&&(r=s.map(Mr))}let i,c=o[i=ir(n)]||o[i=ir(Ht(n))];!c&&l&&(c=o[i=ir(Ln(n))]),c&&Et(c,e,6,r);const u=o[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Et(u,e,6,r)}}function iu(e,n,s=!1){const o=n.emitsCache,r=o.get(e);if(r!==void 0)return r;const l=e.emits;let a={},i=!1;if(!ie(e)){const c=u=>{const d=iu(u,n,!0);d&&(i=!0,rt(a,d))};!s&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!i?(Pe(e)&&o.set(e,null),null):(oe(l)?l.forEach(c=>a[c]=null):rt(a,l),Pe(e)&&o.set(e,a),a)}function Yo(e,n){return!e||!jo(n)?!1:(n=n.slice(2).replace(/Once$/,""),ve(e,n[0].toLowerCase()+n.slice(1))||ve(e,Ln(n))||ve(e,n))}let Ze=null,Go=null;function So(e){const n=Ze;return Ze=e,Go=e&&e.type.__scopeId||null,n}function hn(e){Go=e}function yn(){Go=null}function P(e,n=Ze,s){if(!n||e._n)return e;const o=(...r)=>{o._d&&Va(-1);const l=So(n);let a;try{a=e(...r)}finally{So(l),o._d&&Va(1)}return a};return o._n=!0,o._c=!0,o._d=!0,o}function cr(e){const{type:n,vnode:s,proxy:o,withProxy:r,props:l,propsOptions:[a],slots:i,attrs:c,emit:u,render:d,renderCache:f,data:h,setupState:m,ctx:y,inheritAttrs:_}=e;let w,b;const A=So(e);try{if(s.shapeFlag&4){const E=r||o;w=Pt(d.call(E,E,f,l,m,h,y)),b=c}else{const E=n;w=Pt(E.length>1?E(l,{attrs:c,slots:i,emit:u}):E(l,null)),b=n.props?c:Af(c)}}catch(E){Ts.length=0,Jo(E,e,1),w=H(fn)}let x=w;if(b&&_!==!1){const E=Object.keys(b),{shapeFlag:R}=x;E.length&&R&7&&(a&&E.some(Al)&&(b=$f(b,a)),x=Rn(x,b))}return s.dirs&&(x=Rn(x),x.dirs=x.dirs?x.dirs.concat(s.dirs):s.dirs),s.transition&&(x.transition=s.transition),w=x,So(A),w}const Af=e=>{let n;for(const s in e)(s==="class"||s==="style"||jo(s))&&((n||(n={}))[s]=e[s]);return n},$f=(e,n)=>{const s={};for(const o in e)(!Al(o)||!(o.slice(9)in n))&&(s[o]=e[o]);return s};function Sf(e,n,s){const{props:o,children:r,component:l}=e,{props:a,children:i,patchFlag:c}=n,u=l.emitsOptions;if(n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?Ia(o,a,u):!!a;if(c&8){const d=n.dynamicProps;for(let f=0;f<d.length;f++){const h=d[f];if(a[h]!==o[h]&&!Yo(u,h))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?Ia(o,a,u):!0:!!a;return!1}function Ia(e,n,s){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const l=o[r];if(n[l]!==e[l]&&!Yo(s,l))return!0}return!1}function Ef({vnode:e,parent:n},s){for(;n&&n.subTree===e;)(e=n.vnode).el=s,n=n.parent}const cu=e=>e.__isSuspense;function Tf(e,n){n&&n.pendingBranch?oe(e)?n.effects.push(...e):n.effects.push(e):kf(e)}function ht(e,n){if(Ke){let s=Ke.provides;const o=Ke.parent&&Ke.parent.provides;o===s&&(s=Ke.provides=Object.create(o)),s[e]=n}}function D(e,n,s=!1){const o=Ke||Ze;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return s&&ie(n)?n.call(o.proxy):n}}function ds(e,n){return ql(e,null,n)}const Pa={};function de(e,n,s){return ql(e,n,s)}function ql(e,n,{immediate:s,deep:o,flush:r,onTrack:l,onTrigger:a}=Te){const i=Ke;let c,u=!1,d=!1;if(xe(e)?(c=()=>e.value,u=$o(e)):es(e)?(c=()=>e,o=!0):oe(e)?(d=!0,u=e.some(b=>es(b)||$o(b)),c=()=>e.map(b=>{if(xe(b))return b.value;if(es(b))return En(b);if(ie(b))return ln(b,i,2)})):ie(e)?n?c=()=>ln(e,i,2):c=()=>{if(!(i&&i.isUnmounted))return f&&f(),Et(e,i,3,[h])}:c=St,n&&o){const b=c;c=()=>En(b())}let f,h=b=>{f=w.onStop=()=>{ln(b,i,4)}};if(Us)return h=St,n?s&&Et(n,i,3,[c(),d?[]:void 0,h]):c(),St;let m=d?[]:Pa;const y=()=>{if(!!w.active)if(n){const b=w.run();(o||u||(d?b.some((A,x)=>qs(A,m[x])):qs(b,m)))&&(f&&f(),Et(n,i,3,[b,m===Pa?void 0:m,h]),m=b)}else w.run()};y.allowRecurse=!!n;let _;r==="sync"?_=y:r==="post"?_=()=>ze(y,i&&i.suspense):(y.pre=!0,i&&(y.id=i.uid),_=()=>Hl(y));const w=new Cl(c,_);return n?s?y():m=w.run():r==="post"?ze(w.run.bind(w),i&&i.suspense):w.run(),()=>{w.stop(),i&&i.scope&&$l(i.scope.effects,w)}}function Cf(e,n,s){const o=this.proxy,r=Fe(e)?e.includes(".")?uu(o,e):()=>o[e]:e.bind(o,o);let l;ie(n)?l=n:(l=n.handler,s=n);const a=Ke;ls(this);const i=ql(r,l.bind(o),s);return a?ls(a):Dn(),i}function uu(e,n){const s=n.split(".");return()=>{let o=e;for(let r=0;r<s.length&&o;r++)o=o[s[r]];return o}}function En(e,n){if(!Pe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),xe(e))En(e.value,n);else if(oe(e))for(let s=0;s<e.length;s++)En(e[s],n);else if(Rc(e)||Xn(e))e.forEach(s=>{En(s,n)});else if(Hc(e))for(const s in e)En(e[s],n);return e}function pu(e,n){e.shapeFlag&6&&e.component?pu(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function _e(e){return ie(e)?{setup:e,name:e.name}:e}const ns=e=>!!e.type.__asyncLoader,du=e=>e.type.__isKeepAlive,Of={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const s=Hn(),o=s.ctx;if(!o.renderer)return()=>{const A=n.default&&n.default();return A&&A.length===1?A[0]:A};const r=new Map,l=new Set;let a=null;const i=s.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:f}}}=o,h=f("div");o.activate=(A,x,E,R,F)=>{const j=A.component;u(A,x,E,0,i),c(j.vnode,A,x,E,j,i,R,A.slotScopeIds,F),ze(()=>{j.isDeactivated=!1,j.a&&Qn(j.a);const ee=A.props&&A.props.onVnodeMounted;ee&&vt(ee,j.parent,A)},i)},o.deactivate=A=>{const x=A.component;u(A,h,null,1,i),ze(()=>{x.da&&Qn(x.da);const E=A.props&&A.props.onVnodeUnmounted;E&&vt(E,x.parent,A),x.isDeactivated=!0},i)};function m(A){ur(A),d(A,s,i,!0)}function y(A){r.forEach((x,E)=>{const R=zr(x.type);R&&(!A||!A(R))&&_(E)})}function _(A){const x=r.get(A);!a||x.type!==a.type?m(x):a&&ur(a),r.delete(A),l.delete(A)}de(()=>[e.include,e.exclude],([A,x])=>{A&&y(E=>$s(A,E)),x&&y(E=>!$s(x,E))},{flush:"post",deep:!0});let w=null;const b=()=>{w!=null&&r.set(w,pr(s.subTree))};return fs(b),Nl(b),Xo(()=>{r.forEach(A=>{const{subTree:x,suspense:E}=s,R=pr(x);if(A.type===R.type){ur(R);const F=R.component.da;F&&ze(F,E);return}m(A)})}),()=>{if(w=null,!n.default)return null;const A=n.default(),x=A[0];if(A.length>1)return a=null,A;if(!Mn(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return a=null,x;let E=pr(x);const R=E.type,F=zr(ns(E)?E.type.__asyncResolved||{}:R),{include:j,exclude:ee,max:ue}=e;if(j&&(!F||!$s(j,F))||ee&&F&&$s(ee,F))return a=E,x;const he=E.key==null?R:E.key,we=r.get(he);return E.el&&(E=Rn(E),x.shapeFlag&128&&(x.ssContent=E)),w=he,we?(E.el=we.el,E.component=we.component,E.transition&&pu(E,E.transition),E.shapeFlag|=512,l.delete(he),l.add(he)):(l.add(he),ue&&l.size>parseInt(ue,10)&&_(l.values().next().value)),E.shapeFlag|=256,a=E,cu(x.type)?x:E}}},fu=Of;function $s(e,n){return oe(e)?e.some(s=>$s(s,n)):Fe(e)?e.split(",").includes(n):e.test?e.test(n):!1}function Df(e,n){hu(e,"a",n)}function If(e,n){hu(e,"da",n)}function hu(e,n,s=Ke){const o=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Zo(n,o,s),s){let r=s.parent;for(;r&&r.parent;)du(r.parent.vnode)&&Pf(o,n,s,r),r=r.parent}}function Pf(e,n,s,o){const r=Zo(n,e,o,!0);Qo(()=>{$l(o[n],r)},s)}function ur(e){let n=e.shapeFlag;n&256&&(n-=256),n&512&&(n-=512),e.shapeFlag=n}function pr(e){return e.shapeFlag&128?e.ssContent:e}function Zo(e,n,s=Ke,o=!1){if(s){const r=s[e]||(s[e]=[]),l=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;us(),ls(s);const i=Et(n,s,e,a);return Dn(),ps(),i});return o?r.unshift(l):r.push(l),l}}const Zt=e=>(n,s=Ke)=>(!Us||e==="sp")&&Zo(e,(...o)=>n(...o),s),Mf=Zt("bm"),fs=Zt("m"),Rf=Zt("bu"),Nl=Zt("u"),Xo=Zt("bum"),Qo=Zt("um"),Ff=Zt("sp"),Lf=Zt("rtg"),Hf=Zt("rtc");function qf(e,n=Ke){Zo("ec",e,n)}function er(e,n){const s=Ze;if(s===null)return e;const o=nr(s)||s.proxy,r=e.dirs||(e.dirs=[]);for(let l=0;l<n.length;l++){let[a,i,c,u=Te]=n[l];ie(a)&&(a={mounted:a,updated:a}),a.deep&&En(i),r.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:u})}return e}function gn(e,n,s,o){const r=e.dirs,l=n&&n.dirs;for(let a=0;a<r.length;a++){const i=r[a];l&&(i.oldValue=l[a].value);let c=i.dir[o];c&&(us(),Et(c,s,8,[e.el,i,e,n]),ps())}}const yu="components",Nf="directives";function Eo(e,n){return mu(yu,e,!0,n)||e}const jf=Symbol();function Ma(e){return mu(Nf,e)}function mu(e,n,s=!0,o=!1){const r=Ze||Ke;if(r){const l=r.type;if(e===yu){const i=zr(l,!1);if(i&&(i===n||i===Ht(n)||i===Uo(Ht(n))))return l}const a=Ra(r[e]||l[e],n)||Ra(r.appContext[e],n);return!a&&o?l:a}}function Ra(e,n){return e&&(e[n]||e[Ht(n)]||e[Uo(Ht(n))])}function eo(e,n,s,o){let r;const l=s&&s[o];if(oe(e)||Fe(e)){r=new Array(e.length);for(let a=0,i=e.length;a<i;a++)r[a]=n(e[a],a,void 0,l&&l[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=n(a+1,a,void 0,l&&l[a])}else if(Pe(e))if(e[Symbol.iterator])r=Array.from(e,(a,i)=>n(a,i,void 0,l&&l[i]));else{const a=Object.keys(e);r=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];r[i]=n(e[u],u,i,l&&l[i])}}else r=[];return s&&(s[o]=r),r}function at(e,n,s={},o,r){if(Ze.isCE||Ze.parent&&ns(Ze.parent)&&Ze.parent.isCE)return H("slot",n==="default"?null:{name:n},o&&o());let l=e[n];l&&l._c&&(l._d=!1),k();const a=l&&gu(l(s)),i=q(Se,{key:s.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),l&&l._c&&(l._d=!0),i}function gu(e){return e.some(n=>Mn(n)?!(n.type===fn||n.type===Se&&!gu(n.children)):!0)?e:null}const Nr=e=>e?Su(e)?nr(e)||e.proxy:Nr(e.parent):null,To=rt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Nr(e.parent),$root:e=>Nr(e.root),$emit:e=>e.emit,$options:e=>jl(e),$forceUpdate:e=>e.f||(e.f=()=>Hl(e.update)),$nextTick:e=>e.n||(e.n=Ge.bind(e.proxy)),$watch:e=>Cf.bind(e)}),Wf={get({_:e},n){const{ctx:s,setupState:o,data:r,props:l,accessCache:a,type:i,appContext:c}=e;let u;if(n[0]!=="$"){const m=a[n];if(m!==void 0)switch(m){case 1:return o[n];case 2:return r[n];case 4:return s[n];case 3:return l[n]}else{if(o!==Te&&ve(o,n))return a[n]=1,o[n];if(r!==Te&&ve(r,n))return a[n]=2,r[n];if((u=e.propsOptions[0])&&ve(u,n))return a[n]=3,l[n];if(s!==Te&&ve(s,n))return a[n]=4,s[n];jr&&(a[n]=0)}}const d=To[n];let f,h;if(d)return n==="$attrs"&&gt(e,"get",n),d(e);if((f=i.__cssModules)&&(f=f[n]))return f;if(s!==Te&&ve(s,n))return a[n]=4,s[n];if(h=c.config.globalProperties,ve(h,n))return h[n]},set({_:e},n,s){const{data:o,setupState:r,ctx:l}=e;return r!==Te&&ve(r,n)?(r[n]=s,!0):o!==Te&&ve(o,n)?(o[n]=s,!0):ve(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(l[n]=s,!0)},has({_:{data:e,setupState:n,accessCache:s,ctx:o,appContext:r,propsOptions:l}},a){let i;return!!s[a]||e!==Te&&ve(e,a)||n!==Te&&ve(n,a)||(i=l[0])&&ve(i,a)||ve(o,a)||ve(To,a)||ve(r.config.globalProperties,a)},defineProperty(e,n,s){return s.get!=null?e._.accessCache[n]=0:ve(s,"value")&&this.set(e,n,s.value,null),Reflect.defineProperty(e,n,s)}};let jr=!0;function Vf(e){const n=jl(e),s=e.proxy,o=e.ctx;jr=!1,n.beforeCreate&&Fa(n.beforeCreate,e,"bc");const{data:r,computed:l,methods:a,watch:i,provide:c,inject:u,created:d,beforeMount:f,mounted:h,beforeUpdate:m,updated:y,activated:_,deactivated:w,beforeDestroy:b,beforeUnmount:A,destroyed:x,unmounted:E,render:R,renderTracked:F,renderTriggered:j,errorCaptured:ee,serverPrefetch:ue,expose:he,inheritAttrs:we,components:Ue,directives:Ne,filters:Re}=n;if(u&&Uf(u,o,null,e.appContext.config.unwrapInjectedRef),a)for(const Y in a){const se=a[Y];ie(se)&&(o[Y]=se.bind(s))}if(r){const Y=r.call(s,s);Pe(Y)&&(e.data=Ie(Y))}if(jr=!0,l)for(const Y in l){const se=l[Y],ye=ie(se)?se.bind(s,s):ie(se.get)?se.get.bind(s,s):St,Ae=!ie(se)&&ie(se.set)?se.set.bind(s):St,tt=S({get:ye,set:Ae});Object.defineProperty(o,Y,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Le=>tt.value=Le})}if(i)for(const Y in i)vu(i[Y],o,s,Y);if(c){const Y=ie(c)?c.call(s):c;Reflect.ownKeys(Y).forEach(se=>{ht(se,Y[se])})}d&&Fa(d,e,"c");function De(Y,se){oe(se)?se.forEach(ye=>Y(ye.bind(s))):se&&Y(se.bind(s))}if(De(Mf,f),De(fs,h),De(Rf,m),De(Nl,y),De(Df,_),De(If,w),De(qf,ee),De(Hf,F),De(Lf,j),De(Xo,A),De(Qo,E),De(Ff,ue),oe(he))if(he.length){const Y=e.exposed||(e.exposed={});he.forEach(se=>{Object.defineProperty(Y,se,{get:()=>s[se],set:ye=>s[se]=ye})})}else e.exposed||(e.exposed={});R&&e.render===St&&(e.render=R),we!=null&&(e.inheritAttrs=we),Ue&&(e.components=Ue),Ne&&(e.directives=Ne)}function Uf(e,n,s=St,o=!1){oe(e)&&(e=Wr(e));for(const r in e){const l=e[r];let a;Pe(l)?"default"in l?a=D(l.from||r,l.default,!0):a=D(l.from||r):a=D(l),xe(a)&&o?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):n[r]=a}}function Fa(e,n,s){Et(oe(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,s)}function vu(e,n,s,o){const r=o.includes(".")?uu(s,o):()=>s[o];if(Fe(e)){const l=n[e];ie(l)&&de(r,l)}else if(ie(e))de(r,e.bind(s));else if(Pe(e))if(oe(e))e.forEach(l=>vu(l,n,s,o));else{const l=ie(e.handler)?e.handler.bind(s):n[e.handler];ie(l)&&de(r,l,e)}}function jl(e){const n=e.type,{mixins:s,extends:o}=n,{mixins:r,optionsCache:l,config:{optionMergeStrategies:a}}=e.appContext,i=l.get(n);let c;return i?c=i:!r.length&&!s&&!o?c=n:(c={},r.length&&r.forEach(u=>Co(c,u,a,!0)),Co(c,n,a)),Pe(n)&&l.set(n,c),c}function Co(e,n,s,o=!1){const{mixins:r,extends:l}=n;l&&Co(e,l,s,!0),r&&r.forEach(a=>Co(e,a,s,!0));for(const a in n)if(!(o&&a==="expose")){const i=Kf[a]||s&&s[a];e[a]=i?i(e[a],n[a]):n[a]}return e}const Kf={data:La,props:bn,emits:bn,methods:bn,computed:bn,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:bn,directives:bn,watch:Jf,provide:La,inject:zf};function La(e,n){return n?e?function(){return rt(ie(e)?e.call(this,this):e,ie(n)?n.call(this,this):n)}:n:e}function zf(e,n){return bn(Wr(e),Wr(n))}function Wr(e){if(oe(e)){const n={};for(let s=0;s<e.length;s++)n[e[s]]=e[s];return n}return e}function nt(e,n){return e?[...new Set([].concat(e,n))]:n}function bn(e,n){return e?rt(rt(Object.create(null),e),n):n}function Jf(e,n){if(!e)return n;if(!n)return e;const s=rt(Object.create(null),e);for(const o in n)s[o]=nt(e[o],n[o]);return s}function Yf(e,n,s,o=!1){const r={},l={};Ao(l,tr,1),e.propsDefaults=Object.create(null),_u(e,n,r,l);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);s?e.props=o?r:uf(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function Gf(e,n,s,o){const{props:r,attrs:l,vnode:{patchFlag:a}}=e,i=Be(r),[c]=e.propsOptions;let u=!1;if((o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let h=d[f];if(Yo(e.emitsOptions,h))continue;const m=n[h];if(c)if(ve(l,h))m!==l[h]&&(l[h]=m,u=!0);else{const y=Ht(h);r[y]=Vr(c,i,y,m,e,!1)}else m!==l[h]&&(l[h]=m,u=!0)}}}else{_u(e,n,r,l)&&(u=!0);let d;for(const f in i)(!n||!ve(n,f)&&((d=Ln(f))===f||!ve(n,d)))&&(c?s&&(s[f]!==void 0||s[d]!==void 0)&&(r[f]=Vr(c,i,f,void 0,e,!0)):delete r[f]);if(l!==i)for(const f in l)(!n||!ve(n,f)&&!0)&&(delete l[f],u=!0)}u&&Gt(e,"set","$attrs")}function _u(e,n,s,o){const[r,l]=e.propsOptions;let a=!1,i;if(n)for(let c in n){if(vo(c))continue;const u=n[c];let d;r&&ve(r,d=Ht(c))?!l||!l.includes(d)?s[d]=u:(i||(i={}))[d]=u:Yo(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(l){const c=Be(s),u=i||Te;for(let d=0;d<l.length;d++){const f=l[d];s[f]=Vr(r,c,f,u[f],e,!ve(u,f))}}return a}function Vr(e,n,s,o,r,l){const a=e[s];if(a!=null){const i=ve(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&ie(c)){const{propsDefaults:u}=r;s in u?o=u[s]:(ls(r),o=u[s]=c.call(null,n),Dn())}else o=c}a[0]&&(l&&!i?o=!1:a[1]&&(o===""||o===Ln(s))&&(o=!0))}return o}function wu(e,n,s=!1){const o=n.propsCache,r=o.get(e);if(r)return r;const l=e.props,a={},i=[];let c=!1;if(!ie(e)){const d=f=>{c=!0;const[h,m]=wu(f,n,!0);rt(a,h),m&&i.push(...m)};!s&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!c)return Pe(e)&&o.set(e,Zn),Zn;if(oe(l))for(let d=0;d<l.length;d++){const f=Ht(l[d]);Ha(f)&&(a[f]=Te)}else if(l)for(const d in l){const f=Ht(d);if(Ha(f)){const h=l[d],m=a[f]=oe(h)||ie(h)?{type:h}:h;if(m){const y=ja(Boolean,m.type),_=ja(String,m.type);m[0]=y>-1,m[1]=_<0||y<_,(y>-1||ve(m,"default"))&&i.push(f)}}}const u=[a,i];return Pe(e)&&o.set(e,u),u}function Ha(e){return e[0]!=="$"}function qa(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function Na(e,n){return qa(e)===qa(n)}function ja(e,n){return oe(n)?n.findIndex(s=>Na(s,e)):ie(n)&&Na(n,e)?0:-1}const bu=e=>e[0]==="_"||e==="$stable",Wl=e=>oe(e)?e.map(Pt):[Pt(e)],Zf=(e,n,s)=>{if(n._n)return n;const o=P((...r)=>Wl(n(...r)),s);return o._c=!1,o},ku=(e,n,s)=>{const o=e._ctx;for(const r in e){if(bu(r))continue;const l=e[r];if(ie(l))n[r]=Zf(r,l,o);else if(l!=null){const a=Wl(l);n[r]=()=>a}}},Bu=(e,n)=>{const s=Wl(n);e.slots.default=()=>s},Xf=(e,n)=>{if(e.vnode.shapeFlag&32){const s=n._;s?(e.slots=Be(n),Ao(n,"_",s)):ku(n,e.slots={})}else e.slots={},n&&Bu(e,n);Ao(e.slots,tr,1)},Qf=(e,n,s)=>{const{vnode:o,slots:r}=e;let l=!0,a=Te;if(o.shapeFlag&32){const i=n._;i?s&&i===1?l=!1:(rt(r,n),!s&&i===1&&delete r._):(l=!n.$stable,ku(n,r)),a=n}else n&&(Bu(e,n),a={default:1});if(l)for(const i in r)!bu(i)&&!(i in a)&&delete r[i]};function xu(){return{app:null,config:{isNativeTag:Td,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eh=0;function th(e,n){return function(o,r=null){ie(o)||(o=Object.assign({},o)),r!=null&&!Pe(r)&&(r=null);const l=xu(),a=new Set;let i=!1;const c=l.app={_uid:eh++,_component:o,_props:r,_container:null,_context:l,_instance:null,version:wh,get config(){return l.config},set config(u){},use(u,...d){return a.has(u)||(u&&ie(u.install)?(a.add(u),u.install(c,...d)):ie(u)&&(a.add(u),u(c,...d))),c},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),c},component(u,d){return d?(l.components[u]=d,c):l.components[u]},directive(u,d){return d?(l.directives[u]=d,c):l.directives[u]},mount(u,d,f){if(!i){const h=H(o,r);return h.appContext=l,d&&n?n(h,u):e(h,u,f),i=!0,c._container=u,u.__vue_app__=c,nr(h.component)||h.component.proxy}},unmount(){i&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return l.provides[u]=d,c}};return c}}function Ur(e,n,s,o,r=!1){if(oe(e)){e.forEach((h,m)=>Ur(h,n&&(oe(n)?n[m]:n),s,o,r));return}if(ns(o)&&!r)return;const l=o.shapeFlag&4?nr(o.component)||o.component.proxy:o.el,a=r?null:l,{i,r:c}=e,u=n&&n.r,d=i.refs===Te?i.refs={}:i.refs,f=i.setupState;if(u!=null&&u!==c&&(Fe(u)?(d[u]=null,ve(f,u)&&(f[u]=null)):xe(u)&&(u.value=null)),ie(c))ln(c,i,12,[a,d]);else{const h=Fe(c),m=xe(c);if(h||m){const y=()=>{if(e.f){const _=h?ve(f,c)?f[c]:d[c]:c.value;r?oe(_)&&$l(_,l):oe(_)?_.includes(l)||_.push(l):h?(d[c]=[l],ve(f,c)&&(f[c]=d[c])):(c.value=[l],e.k&&(d[e.k]=c.value))}else h?(d[c]=a,ve(f,c)&&(f[c]=a)):m&&(c.value=a,e.k&&(d[e.k]=a))};a?(y.id=-1,ze(y,s)):y()}}}const ze=Tf;function nh(e){return sh(e)}function sh(e,n){const s=Md();s.__VUE__=!0;const{insert:o,remove:r,patchProp:l,createElement:a,createText:i,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:h,setScopeId:m=St,insertStaticContent:y}=e,_=(g,v,$,T=null,O=null,N=null,J=!1,L=null,W=!!v.dynamicChildren)=>{if(g===v)return;g&&!gs(g,v)&&(T=K(g),Le(g,O,N,!0),g=null),v.patchFlag===-2&&(W=!1,v.dynamicChildren=null);const{type:I,ref:te,shapeFlag:G}=v;switch(I){case Ul:w(g,v,$,T);break;case fn:b(g,v,$,T);break;case dr:g==null&&A(v,$,T,J);break;case Se:Ue(g,v,$,T,O,N,J,L,W);break;default:G&1?R(g,v,$,T,O,N,J,L,W):G&6?Ne(g,v,$,T,O,N,J,L,W):(G&64||G&128)&&I.process(g,v,$,T,O,N,J,L,W,me)}te!=null&&O&&Ur(te,g&&g.ref,N,v||g,!v)},w=(g,v,$,T)=>{if(g==null)o(v.el=i(v.children),$,T);else{const O=v.el=g.el;v.children!==g.children&&u(O,v.children)}},b=(g,v,$,T)=>{g==null?o(v.el=c(v.children||""),$,T):v.el=g.el},A=(g,v,$,T)=>{[g.el,g.anchor]=y(g.children,v,$,T,g.el,g.anchor)},x=({el:g,anchor:v},$,T)=>{let O;for(;g&&g!==v;)O=h(g),o(g,$,T),g=O;o(v,$,T)},E=({el:g,anchor:v})=>{let $;for(;g&&g!==v;)$=h(g),r(g),g=$;r(v)},R=(g,v,$,T,O,N,J,L,W)=>{J=J||v.type==="svg",g==null?F(v,$,T,O,N,J,L,W):ue(g,v,O,N,J,L,W)},F=(g,v,$,T,O,N,J,L)=>{let W,I;const{type:te,props:G,shapeFlag:ne,transition:re,dirs:ge}=g;if(W=g.el=a(g.type,N,G&&G.is,G),ne&8?d(W,g.children):ne&16&&ee(g.children,W,null,T,O,N&&te!=="foreignObject",J,L),ge&&gn(g,null,T,"created"),G){for(const Ee in G)Ee!=="value"&&!vo(Ee)&&l(W,Ee,null,G[Ee],N,g.children,T,O,z);"value"in G&&l(W,"value",null,G.value),(I=G.onVnodeBeforeMount)&&vt(I,T,g)}j(W,g,g.scopeId,J,T),ge&&gn(g,null,T,"beforeMount");const Ce=(!O||O&&!O.pendingBranch)&&re&&!re.persisted;Ce&&re.beforeEnter(W),o(W,v,$),((I=G&&G.onVnodeMounted)||Ce||ge)&&ze(()=>{I&&vt(I,T,g),Ce&&re.enter(W),ge&&gn(g,null,T,"mounted")},O)},j=(g,v,$,T,O)=>{if($&&m(g,$),T)for(let N=0;N<T.length;N++)m(g,T[N]);if(O){let N=O.subTree;if(v===N){const J=O.vnode;j(g,J,J.scopeId,J.slotScopeIds,O.parent)}}},ee=(g,v,$,T,O,N,J,L,W=0)=>{for(let I=W;I<g.length;I++){const te=g[I]=L?nn(g[I]):Pt(g[I]);_(null,te,v,$,T,O,N,J,L)}},ue=(g,v,$,T,O,N,J)=>{const L=v.el=g.el;let{patchFlag:W,dynamicChildren:I,dirs:te}=v;W|=g.patchFlag&16;const G=g.props||Te,ne=v.props||Te;let re;$&&vn($,!1),(re=ne.onVnodeBeforeUpdate)&&vt(re,$,v,g),te&&gn(v,g,$,"beforeUpdate"),$&&vn($,!0);const ge=O&&v.type!=="foreignObject";if(I?he(g.dynamicChildren,I,L,$,T,ge,N):J||se(g,v,L,null,$,T,ge,N,!1),W>0){if(W&16)we(L,v,G,ne,$,T,O);else if(W&2&&G.class!==ne.class&&l(L,"class",null,ne.class,O),W&4&&l(L,"style",G.style,ne.style,O),W&8){const Ce=v.dynamicProps;for(let Ee=0;Ee<Ce.length;Ee++){const He=Ce[Ee],bt=G[He],Wn=ne[He];(Wn!==bt||He==="value")&&l(L,He,bt,Wn,O,g.children,$,T,z)}}W&1&&g.children!==v.children&&d(L,v.children)}else!J&&I==null&&we(L,v,G,ne,$,T,O);((re=ne.onVnodeUpdated)||te)&&ze(()=>{re&&vt(re,$,v,g),te&&gn(v,g,$,"updated")},T)},he=(g,v,$,T,O,N,J)=>{for(let L=0;L<v.length;L++){const W=g[L],I=v[L],te=W.el&&(W.type===Se||!gs(W,I)||W.shapeFlag&70)?f(W.el):$;_(W,I,te,null,T,O,N,J,!0)}},we=(g,v,$,T,O,N,J)=>{if($!==T){if($!==Te)for(const L in $)!vo(L)&&!(L in T)&&l(g,L,$[L],null,J,v.children,O,N,z);for(const L in T){if(vo(L))continue;const W=T[L],I=$[L];W!==I&&L!=="value"&&l(g,L,I,W,J,v.children,O,N,z)}"value"in T&&l(g,"value",$.value,T.value)}},Ue=(g,v,$,T,O,N,J,L,W)=>{const I=v.el=g?g.el:i(""),te=v.anchor=g?g.anchor:i("");let{patchFlag:G,dynamicChildren:ne,slotScopeIds:re}=v;re&&(L=L?L.concat(re):re),g==null?(o(I,$,T),o(te,$,T),ee(v.children,$,te,O,N,J,L,W)):G>0&&G&64&&ne&&g.dynamicChildren?(he(g.dynamicChildren,ne,$,O,N,J,L),(v.key!=null||O&&v===O.subTree)&&Vl(g,v,!0)):se(g,v,$,te,O,N,J,L,W)},Ne=(g,v,$,T,O,N,J,L,W)=>{v.slotScopeIds=L,g==null?v.shapeFlag&512?O.ctx.activate(v,$,T,J,W):Re(v,$,T,O,N,J,W):Oe(g,v,W)},Re=(g,v,$,T,O,N,J)=>{const L=g.component=fh(g,T,O);if(du(g)&&(L.ctx.renderer=me),hh(L),L.asyncDep){if(O&&O.registerDep(L,De),!g.el){const W=L.subTree=H(fn);b(null,W,v,$)}return}De(L,g,v,$,O,N,J)},Oe=(g,v,$)=>{const T=v.component=g.component;if(Sf(g,v,$))if(T.asyncDep&&!T.asyncResolved){Y(T,v,$);return}else T.next=v,bf(T.update),T.update();else v.el=g.el,T.vnode=v},De=(g,v,$,T,O,N,J)=>{const L=()=>{if(g.isMounted){let{next:te,bu:G,u:ne,parent:re,vnode:ge}=g,Ce=te,Ee;vn(g,!1),te?(te.el=ge.el,Y(g,te,J)):te=ge,G&&Qn(G),(Ee=te.props&&te.props.onVnodeBeforeUpdate)&&vt(Ee,re,te,ge),vn(g,!0);const He=cr(g),bt=g.subTree;g.subTree=He,_(bt,He,f(bt.el),K(bt),g,O,N),te.el=He.el,Ce===null&&Ef(g,He.el),ne&&ze(ne,O),(Ee=te.props&&te.props.onVnodeUpdated)&&ze(()=>vt(Ee,re,te,ge),O)}else{let te;const{el:G,props:ne}=v,{bm:re,m:ge,parent:Ce}=g,Ee=ns(v);if(vn(g,!1),re&&Qn(re),!Ee&&(te=ne&&ne.onVnodeBeforeMount)&&vt(te,Ce,v),vn(g,!0),G&&le){const He=()=>{g.subTree=cr(g),le(G,g.subTree,g,O,null)};Ee?v.type.__asyncLoader().then(()=>!g.isUnmounted&&He()):He()}else{const He=g.subTree=cr(g);_(null,He,$,T,g,O,N),v.el=He.el}if(ge&&ze(ge,O),!Ee&&(te=ne&&ne.onVnodeMounted)){const He=v;ze(()=>vt(te,Ce,He),O)}(v.shapeFlag&256||Ce&&ns(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&g.a&&ze(g.a,O),g.isMounted=!0,v=$=T=null}},W=g.effect=new Cl(L,()=>Hl(I),g.scope),I=g.update=()=>W.run();I.id=g.uid,vn(g,!0),I()},Y=(g,v,$)=>{v.component=g;const T=g.vnode.props;g.vnode=v,g.next=null,Gf(g,v.props,T,$),Qf(g,v.children,$),us(),Da(),ps()},se=(g,v,$,T,O,N,J,L,W=!1)=>{const I=g&&g.children,te=g?g.shapeFlag:0,G=v.children,{patchFlag:ne,shapeFlag:re}=v;if(ne>0){if(ne&128){Ae(I,G,$,T,O,N,J,L,W);return}else if(ne&256){ye(I,G,$,T,O,N,J,L,W);return}}re&8?(te&16&&z(I,O,N),G!==I&&d($,G)):te&16?re&16?Ae(I,G,$,T,O,N,J,L,W):z(I,O,N,!0):(te&8&&d($,""),re&16&&ee(G,$,T,O,N,J,L,W))},ye=(g,v,$,T,O,N,J,L,W)=>{g=g||Zn,v=v||Zn;const I=g.length,te=v.length,G=Math.min(I,te);let ne;for(ne=0;ne<G;ne++){const re=v[ne]=W?nn(v[ne]):Pt(v[ne]);_(g[ne],re,$,null,O,N,J,L,W)}I>te?z(g,O,N,!0,!1,G):ee(v,$,T,O,N,J,L,W,G)},Ae=(g,v,$,T,O,N,J,L,W)=>{let I=0;const te=v.length;let G=g.length-1,ne=te-1;for(;I<=G&&I<=ne;){const re=g[I],ge=v[I]=W?nn(v[I]):Pt(v[I]);if(gs(re,ge))_(re,ge,$,null,O,N,J,L,W);else break;I++}for(;I<=G&&I<=ne;){const re=g[G],ge=v[ne]=W?nn(v[ne]):Pt(v[ne]);if(gs(re,ge))_(re,ge,$,null,O,N,J,L,W);else break;G--,ne--}if(I>G){if(I<=ne){const re=ne+1,ge=re<te?v[re].el:T;for(;I<=ne;)_(null,v[I]=W?nn(v[I]):Pt(v[I]),$,ge,O,N,J,L,W),I++}}else if(I>ne)for(;I<=G;)Le(g[I],O,N,!0),I++;else{const re=I,ge=I,Ce=new Map;for(I=ge;I<=ne;I++){const ct=v[I]=W?nn(v[I]):Pt(v[I]);ct.key!=null&&Ce.set(ct.key,I)}let Ee,He=0;const bt=ne-ge+1;let Wn=!1,ba=0;const ms=new Array(bt);for(I=0;I<bt;I++)ms[I]=0;for(I=re;I<=G;I++){const ct=g[I];if(He>=bt){Le(ct,O,N,!0);continue}let It;if(ct.key!=null)It=Ce.get(ct.key);else for(Ee=ge;Ee<=ne;Ee++)if(ms[Ee-ge]===0&&gs(ct,v[Ee])){It=Ee;break}It===void 0?Le(ct,O,N,!0):(ms[It-ge]=I+1,It>=ba?ba=It:Wn=!0,_(ct,v[It],$,null,O,N,J,L,W),He++)}const ka=Wn?oh(ms):Zn;for(Ee=ka.length-1,I=bt-1;I>=0;I--){const ct=ge+I,It=v[ct],Ba=ct+1<te?v[ct+1].el:T;ms[I]===0?_(null,It,$,Ba,O,N,J,L,W):Wn&&(Ee<0||I!==ka[Ee]?tt(It,$,Ba,2):Ee--)}}},tt=(g,v,$,T,O=null)=>{const{el:N,type:J,transition:L,children:W,shapeFlag:I}=g;if(I&6){tt(g.component.subTree,v,$,T);return}if(I&128){g.suspense.move(v,$,T);return}if(I&64){J.move(g,v,$,me);return}if(J===Se){o(N,v,$);for(let G=0;G<W.length;G++)tt(W[G],v,$,T);o(g.anchor,v,$);return}if(J===dr){x(g,v,$);return}if(T!==2&&I&1&&L)if(T===0)L.beforeEnter(N),o(N,v,$),ze(()=>L.enter(N),O);else{const{leave:G,delayLeave:ne,afterLeave:re}=L,ge=()=>o(N,v,$),Ce=()=>{G(N,()=>{ge(),re&&re()})};ne?ne(N,ge,Ce):Ce()}else o(N,v,$)},Le=(g,v,$,T=!1,O=!1)=>{const{type:N,props:J,ref:L,children:W,dynamicChildren:I,shapeFlag:te,patchFlag:G,dirs:ne}=g;if(L!=null&&Ur(L,null,$,g,!0),te&256){v.ctx.deactivate(g);return}const re=te&1&&ne,ge=!ns(g);let Ce;if(ge&&(Ce=J&&J.onVnodeBeforeUnmount)&&vt(Ce,v,g),te&6)C(g.component,$,T);else{if(te&128){g.suspense.unmount($,T);return}re&&gn(g,null,v,"beforeUnmount"),te&64?g.type.remove(g,v,$,O,me,T):I&&(N!==Se||G>0&&G&64)?z(I,v,$,!1,!0):(N===Se&&G&384||!O&&te&16)&&z(W,v,$),T&&Qt(g)}(ge&&(Ce=J&&J.onVnodeUnmounted)||re)&&ze(()=>{Ce&&vt(Ce,v,g),re&&gn(g,null,v,"unmounted")},$)},Qt=g=>{const{type:v,el:$,anchor:T,transition:O}=g;if(v===Se){jn($,T);return}if(v===dr){E(g);return}const N=()=>{r($),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(g.shapeFlag&1&&O&&!O.persisted){const{leave:J,delayLeave:L}=O,W=()=>J($,N);L?L(g.el,N,W):W()}else N()},jn=(g,v)=>{let $;for(;g!==v;)$=h(g),r(g),g=$;r(v)},C=(g,v,$)=>{const{bum:T,scope:O,update:N,subTree:J,um:L}=g;T&&Qn(T),O.stop(),N&&(N.active=!1,Le(J,g,v,$)),L&&ze(L,v),ze(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},z=(g,v,$,T=!1,O=!1,N=0)=>{for(let J=N;J<g.length;J++)Le(g[J],v,$,T,O)},K=g=>g.shapeFlag&6?K(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el),Z=(g,v,$)=>{g==null?v._vnode&&Le(v._vnode,null,null,!0):_(v._vnode||null,g,v,null,null,null,$),Da(),lu(),v._vnode=g},me={p:_,um:Le,m:tt,r:Qt,mt:Re,mc:ee,pc:se,pbc:he,n:K,o:e};let be,le;return n&&([be,le]=n(me)),{render:Z,hydrate:be,createApp:th(Z,be)}}function vn({effect:e,update:n},s){e.allowRecurse=n.allowRecurse=s}function Vl(e,n,s=!1){const o=e.children,r=n.children;if(oe(o)&&oe(r))for(let l=0;l<o.length;l++){const a=o[l];let i=r[l];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[l]=nn(r[l]),i.el=a.el),s||Vl(a,i))}}function oh(e){const n=e.slice(),s=[0];let o,r,l,a,i;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(r=s[s.length-1],e[r]<u){n[o]=r,s.push(o);continue}for(l=0,a=s.length-1;l<a;)i=l+a>>1,e[s[i]]<u?l=i+1:a=i;u<e[s[l]]&&(l>0&&(n[o]=s[l-1]),s[l]=o)}}for(l=s.length,a=s[l-1];l-- >0;)s[l]=a,a=n[a];return s}const rh=e=>e.__isTeleport,Es=e=>e&&(e.disabled||e.disabled===""),Wa=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Kr=(e,n)=>{const s=e&&e.to;return Fe(s)?n?n(s):null:s},lh={__isTeleport:!0,process(e,n,s,o,r,l,a,i,c,u){const{mc:d,pc:f,pbc:h,o:{insert:m,querySelector:y,createText:_,createComment:w}}=u,b=Es(n.props);let{shapeFlag:A,children:x,dynamicChildren:E}=n;if(e==null){const R=n.el=_(""),F=n.anchor=_("");m(R,s,o),m(F,s,o);const j=n.target=Kr(n.props,y),ee=n.targetAnchor=_("");j&&(m(ee,j),a=a||Wa(j));const ue=(he,we)=>{A&16&&d(x,he,we,r,l,a,i,c)};b?ue(s,F):j&&ue(j,ee)}else{n.el=e.el;const R=n.anchor=e.anchor,F=n.target=e.target,j=n.targetAnchor=e.targetAnchor,ee=Es(e.props),ue=ee?s:F,he=ee?R:j;if(a=a||Wa(F),E?(h(e.dynamicChildren,E,ue,r,l,a,i),Vl(e,n,!0)):c||f(e,n,ue,he,r,l,a,i,!1),b)ee||fo(n,s,R,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const we=n.target=Kr(n.props,y);we&&fo(n,we,null,u,0)}else ee&&fo(n,F,j,u,1)}},remove(e,n,s,o,{um:r,o:{remove:l}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:d,target:f,props:h}=e;if(f&&l(d),(a||!Es(h))&&(l(u),i&16))for(let m=0;m<c.length;m++){const y=c[m];r(y,n,s,!0,!!y.dynamicChildren)}},move:fo,hydrate:ah};function fo(e,n,s,{o:{insert:o},m:r},l=2){l===0&&o(e.targetAnchor,n,s);const{el:a,anchor:i,shapeFlag:c,children:u,props:d}=e,f=l===2;if(f&&o(a,n,s),(!f||Es(d))&&c&16)for(let h=0;h<u.length;h++)r(u[h],n,s,2);f&&o(i,n,s)}function ah(e,n,s,o,r,l,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const d=n.target=Kr(n.props,c);if(d){const f=d._lpa||d.firstChild;if(n.shapeFlag&16)if(Es(n.props))n.anchor=u(a(e),n,i(e),s,o,r,l),n.targetAnchor=f;else{n.anchor=a(e);let h=f;for(;h;)if(h=a(h),h&&h.nodeType===8&&h.data==="teleport anchor"){n.targetAnchor=h,d._lpa=n.targetAnchor&&a(n.targetAnchor);break}u(f,n,d,s,o,r,l)}}return n.anchor&&a(n.anchor)}const ih=lh,Se=Symbol(void 0),Ul=Symbol(void 0),fn=Symbol(void 0),dr=Symbol(void 0),Ts=[];let At=null;function k(e=!1){Ts.push(At=e?null:[])}function ch(){Ts.pop(),At=Ts[Ts.length-1]||null}let Vs=1;function Va(e){Vs+=e}function Au(e){return e.dynamicChildren=Vs>0?At||Zn:null,ch(),Vs>0&&At&&At.push(e),e}function V(e,n,s,o,r,l){return Au(t(e,n,s,o,r,l,!0))}function q(e,n,s,o,r){return Au(H(e,n,s,o,r,!0))}function Mn(e){return e?e.__v_isVNode===!0:!1}function gs(e,n){return e.type===n.type&&e.key===n.key}const tr="__vInternal",$u=({key:e})=>e!=null?e:null,_o=({ref:e,ref_key:n,ref_for:s})=>e!=null?Fe(e)||xe(e)||ie(e)?{i:Ze,r:e,k:n,f:!!s}:e:null;function t(e,n=null,s=null,o=0,r=null,l=e===Se?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&$u(n),ref:n&&_o(n),scopeId:Go,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null};return i?(Kl(c,s),l&128&&e.normalize(c)):s&&(c.shapeFlag|=Fe(s)?8:16),Vs>0&&!a&&At&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&At.push(c),c}const H=uh;function uh(e,n=null,s=null,o=0,r=null,l=!1){if((!e||e===jf)&&(e=fn),Mn(e)){const i=Rn(e,n,!0);return s&&Kl(i,s),Vs>0&&!l&&At&&(i.shapeFlag&6?At[At.indexOf(e)]=i:At.push(i)),i.patchFlag|=-2,i}if(gh(e)&&(e=e.__vccOpts),n){n=X(n);let{class:i,style:c}=n;i&&!Fe(i)&&(n.class=Me(i)),Pe(c)&&(Qc(c)&&!oe(c)&&(c=rt({},c)),n.style=Ve(c))}const a=Fe(e)?1:cu(e)?128:rh(e)?64:Pe(e)?4:ie(e)?2:0;return t(e,n,s,o,r,a,l,!0)}function X(e){return e?Qc(e)||tr in e?rt({},e):e:null}function Rn(e,n,s=!1){const{props:o,ref:r,patchFlag:l,children:a}=e,i=n?it(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&$u(i),ref:n&&n.ref?s&&r?oe(r)?r.concat(_o(n)):[r,_o(n)]:_o(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Se?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rn(e.ssContent),ssFallback:e.ssFallback&&Rn(e.ssFallback),el:e.el,anchor:e.anchor}}function p(e=" ",n=0){return H(Ul,null,e,n)}function fe(e="",n=!1){return n?(k(),q(fn,null,e)):H(fn,null,e)}function Pt(e){return e==null||typeof e=="boolean"?H(fn):oe(e)?H(Se,null,e.slice()):typeof e=="object"?nn(e):H(Ul,null,String(e))}function nn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rn(e)}function Kl(e,n){let s=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(oe(n))s=16;else if(typeof n=="object")if(o&65){const r=n.default;r&&(r._c&&(r._d=!1),Kl(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=n._;!r&&!(tr in n)?n._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ie(n)?(n={default:n,_ctx:Ze},s=32):(n=String(n),o&64?(s=16,n=[p(n)]):s=8);e.children=n,e.shapeFlag|=s}function it(...e){const n={};for(let s=0;s<e.length;s++){const o=e[s];for(const r in o)if(r==="class")n.class!==o.class&&(n.class=Me([n.class,o.class]));else if(r==="style")n.style=Ve([n.style,o.style]);else if(jo(r)){const l=n[r],a=o[r];a&&l!==a&&!(oe(l)&&l.includes(a))&&(n[r]=l?[].concat(l,a):a)}else r!==""&&(n[r]=o[r])}return n}function vt(e,n,s,o=null){Et(e,n,7,[s,o])}const ph=xu();let dh=0;function fh(e,n,s){const o=e.type,r=(n?n.appContext:e.appContext)||ph,l={uid:dh++,vnode:e,type:o,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wu(o,r),emitsOptions:iu(o,r),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:o.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=n?n.root:l,l.emit=xf.bind(null,l),e.ce&&e.ce(l),l}let Ke=null;const Hn=()=>Ke||Ze,ls=e=>{Ke=e,e.scope.on()},Dn=()=>{Ke&&Ke.scope.off(),Ke=null};function Su(e){return e.vnode.shapeFlag&4}let Us=!1;function hh(e,n=!1){Us=n;const{props:s,children:o}=e.vnode,r=Su(e);Yf(e,s,r,n),Xf(e,o);const l=r?yh(e,n):void 0;return Us=!1,l}function yh(e,n){const s=e.type;e.accessCache=Object.create(null),e.proxy=zo(new Proxy(e.ctx,Wf));const{setup:o}=s;if(o){const r=e.setupContext=o.length>1?Tu(e):null;ls(e),us();const l=ln(o,e,0,[e.props,r]);if(ps(),Dn(),Fc(l)){if(l.then(Dn,Dn),n)return l.then(a=>{Ua(e,a,n)}).catch(a=>{Jo(a,e,0)});e.asyncDep=l}else Ua(e,l,n)}else Eu(e,n)}function Ua(e,n,s){ie(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Pe(n)&&(e.setupState=tu(n)),Eu(e,s)}let Ka;function Eu(e,n,s){const o=e.type;if(!e.render){if(!n&&Ka&&!o.render){const r=o.template||jl(e).template;if(r){const{isCustomElement:l,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=o,u=rt(rt({isCustomElement:l,delimiters:i},a),c);o.render=Ka(r,u)}}e.render=o.render||St}ls(e),us(),Vf(e),ps(),Dn()}function mh(e){return new Proxy(e.attrs,{get(n,s){return gt(e,"get","$attrs"),n[s]}})}function Tu(e){const n=o=>{e.exposed=o||{}};let s;return{get attrs(){return s||(s=mh(e))},slots:e.slots,emit:e.emit,expose:n}}function nr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(tu(zo(e.exposed)),{get(n,s){if(s in n)return n[s];if(s in To)return To[s](e)}}))}function zr(e,n=!0){return ie(e)?e.displayName||e.name:e.name||n&&e.__name}function gh(e){return ie(e)&&"__vccOpts"in e}const S=(e,n)=>vf(e,n,Us);function vh(){return _h().slots}function _h(){const e=Hn();return e.setupContext||(e.setupContext=Tu(e))}function Xe(e,n,s){const o=arguments.length;return o===2?Pe(n)&&!oe(n)?Mn(n)?H(e,null,[n]):H(e,n):H(e,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&Mn(s)&&(s=[s]),H(e,n,s))}const wh="3.2.41",bh="http://www.w3.org/2000/svg",xn=typeof document<"u"?document:null,za=xn&&xn.createElement("template"),kh={insert:(e,n,s)=>{n.insertBefore(e,s||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,s,o)=>{const r=n?xn.createElementNS(bh,e):xn.createElement(e,s?{is:s}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>xn.createTextNode(e),createComment:e=>xn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>xn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,s,o,r,l){const a=s?s.previousSibling:n.lastChild;if(r&&(r===l||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),s),!(r===l||!(r=r.nextSibling)););else{za.innerHTML=o?`<svg>${e}</svg>`:e;const i=za.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}n.insertBefore(i,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function Bh(e,n,s){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):s?e.setAttribute("class",n):e.className=n}function xh(e,n,s){const o=e.style,r=Fe(s);if(s&&!r){for(const l in s)Jr(o,l,s[l]);if(n&&!Fe(n))for(const l in n)s[l]==null&&Jr(o,l,"")}else{const l=o.display;r?n!==s&&(o.cssText=s):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=l)}}const Ja=/\s*!important$/;function Jr(e,n,s){if(oe(s))s.forEach(o=>Jr(e,n,o));else if(s==null&&(s=""),n.startsWith("--"))e.setProperty(n,s);else{const o=Ah(e,n);Ja.test(s)?e.setProperty(Ln(o),s.replace(Ja,""),"important"):e[o]=s}}const Ya=["Webkit","Moz","ms"],fr={};function Ah(e,n){const s=fr[n];if(s)return s;let o=Ht(n);if(o!=="filter"&&o in e)return fr[n]=o;o=Uo(o);for(let r=0;r<Ya.length;r++){const l=Ya[r]+o;if(l in e)return fr[n]=l}return n}const Ga="http://www.w3.org/1999/xlink";function $h(e,n,s,o,r){if(o&&n.startsWith("xlink:"))s==null?e.removeAttributeNS(Ga,n.slice(6,n.length)):e.setAttributeNS(Ga,n,s);else{const l=Bd(n);s==null||l&&!Pc(s)?e.removeAttribute(n):e.setAttribute(n,l?"":s)}}function Sh(e,n,s,o,r,l,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,r,l),e[n]=s==null?"":s;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const c=s==null?"":s;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),s==null&&e.removeAttribute(n);return}let i=!1;if(s===""||s==null){const c=typeof e[n];c==="boolean"?s=Pc(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{e[n]=s}catch{}i&&e.removeAttribute(n)}function zn(e,n,s,o){e.addEventListener(n,s,o)}function Eh(e,n,s,o){e.removeEventListener(n,s,o)}function Th(e,n,s,o,r=null){const l=e._vei||(e._vei={}),a=l[n];if(o&&a)a.value=o;else{const[i,c]=Ch(n);if(o){const u=l[n]=Ih(o,r);zn(e,i,u,c)}else a&&(Eh(e,i,a,c),l[n]=void 0)}}const Za=/(?:Once|Passive|Capture)$/;function Ch(e){let n;if(Za.test(e)){n={};let o;for(;o=e.match(Za);)e=e.slice(0,e.length-o[0].length),n[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ln(e.slice(2)),n]}let hr=0;const Oh=Promise.resolve(),Dh=()=>hr||(Oh.then(()=>hr=0),hr=Date.now());function Ih(e,n){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;Et(Ph(o,s.value),n,5,[o])};return s.value=e,s.attached=Dh(),s}function Ph(e,n){if(oe(n)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},n.map(o=>r=>!r._stopped&&o&&o(r))}else return n}const Xa=/^on[a-z]/,Mh=(e,n,s,o,r=!1,l,a,i,c)=>{n==="class"?Bh(e,o,r):n==="style"?xh(e,s,o):jo(n)?Al(n)||Th(e,n,s,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Rh(e,n,o,r))?Sh(e,n,o,l,a,i,c):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),$h(e,n,o,r))};function Rh(e,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&Xa.test(n)&&ie(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Xa.test(n)&&Fe(s)?!1:n in e}const Qa=e=>{const n=e.props["onUpdate:modelValue"]||!1;return oe(n)?s=>Qn(n,s):n};function Fh(e){e.target.composing=!0}function ei(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Lh={created(e,{modifiers:{lazy:n,trim:s,number:o}},r){e._assign=Qa(r);const l=o||r.props&&r.props.type==="number";zn(e,n?"change":"input",a=>{if(a.target.composing)return;let i=e.value;s&&(i=i.trim()),l&&(i=Mr(i)),e._assign(i)}),s&&zn(e,"change",()=>{e.value=e.value.trim()}),n||(zn(e,"compositionstart",Fh),zn(e,"compositionend",ei),zn(e,"change",ei))},mounted(e,{value:n}){e.value=n==null?"":n},beforeUpdate(e,{value:n,modifiers:{lazy:s,trim:o,number:r}},l){if(e._assign=Qa(l),e.composing||document.activeElement===e&&e.type!=="range"&&(s||o&&e.value.trim()===n||(r||e.type==="number")&&Mr(e.value)===n))return;const a=n==null?"":n;e.value!==a&&(e.value=a)}},Hh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ti=(e,n)=>s=>{if(!("key"in s))return;const o=Ln(s.key);if(n.some(r=>r===o||Hh[r]===o))return e(s)},Cu={beforeMount(e,{value:n},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&n?s.beforeEnter(e):vs(e,n)},mounted(e,{value:n},{transition:s}){s&&n&&s.enter(e)},updated(e,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(e),vs(e,!0),o.enter(e)):o.leave(e,()=>{vs(e,!1)}):vs(e,n))},beforeUnmount(e,{value:n}){vs(e,n)}};function vs(e,n){e.style.display=n?e._vod:"none"}const qh=rt({patchProp:Mh},kh);let ni;function Nh(){return ni||(ni=nh(qh))}const jh=(...e)=>{const n=Nh().createApp(...e),{mount:s}=n;return n.mount=o=>{const r=Wh(o);if(!r)return;const l=n._component;!ie(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.innerHTML="";const a=s(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},n};function Wh(e){return Fe(e)?document.querySelector(e):e}var si;const Ct=typeof window<"u",Vh=e=>typeof e<"u",Uh=Object.prototype.toString,Oo=e=>typeof e=="function",Kh=e=>typeof e=="number",Ou=e=>typeof e=="string",Yr=e=>Uh.call(e)==="[object Object]",Gr=()=>+Date.now(),In=()=>{};Ct&&((si=window==null?void 0:window.navigator)==null?void 0:si.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Je(e){return typeof e=="function"?e():B(e)}function zh(e,n){function s(...o){e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})}return s}const Du=e=>e();function Jh(e=Du){const n=U(!0);function s(){n.value=!1}function o(){n.value=!0}return{isActive:n,pause:s,resume:o,eventFilter:(...l)=>{n.value&&e(...l)}}}function Yh(e){return e}function Gh(e,n){var s;if(typeof e=="number")return e+n;const o=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",r=e.slice(o.length),l=parseFloat(o)+n;return Number.isNaN(l)?e:l+r}function Zh(e,n){let s,o,r;const l=U(!0),a=()=>{l.value=!0,r()};de(e,a,{flush:"sync"});const i=Oo(n)?n:n.get,c=Oo(n)?void 0:n.set,u=nu((d,f)=>(o=d,r=f,{get(){return l.value&&(s=i(),l.value=!1),o(),s},set(h){c==null||c(h)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function Nt(e){return Nc()?(jc(e),!0):!1}function Xh(e){if(!xe(e))return Ie(e);const n=new Proxy({},{get(s,o,r){return B(Reflect.get(e.value,o,r))},set(s,o,r){return xe(e.value[o])&&!xe(r)?e.value[o].value=r:e.value[o]=r,!0},deleteProperty(s,o){return Reflect.deleteProperty(e.value,o)},has(s,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ie(n)}function Iu(e){return typeof e=="function"?S(e):U(e)}var Qh=Object.defineProperty,ey=Object.defineProperties,ty=Object.getOwnPropertyDescriptors,oi=Object.getOwnPropertySymbols,ny=Object.prototype.hasOwnProperty,sy=Object.prototype.propertyIsEnumerable,ri=(e,n,s)=>n in e?Qh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,oy=(e,n)=>{for(var s in n||(n={}))ny.call(n,s)&&ri(e,s,n[s]);if(oi)for(var s of oi(n))sy.call(n,s)&&ri(e,s,n[s]);return e},ry=(e,n)=>ey(e,ty(n));function ly(e){if(!xe(e))return hf(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)n[s]=nu(()=>({get(){return e.value[s]},set(o){if(Array.isArray(e.value)){const r=[...e.value];r[s]=o,e.value=r}else{const r=ry(oy({},e.value),{[s]:o});Object.setPrototypeOf(r,e.value),e.value=r}}}));return n}function zl(e,n=!0){Hn()?fs(e):n?e():Ge(e)}function ay(e){Hn()&&Qo(e)}function iy(e,n=1e3,s={}){const{immediate:o=!0,immediateCallback:r=!1}=s;let l=null;const a=U(!1);function i(){l&&(clearInterval(l),l=null)}function c(){a.value=!1,i()}function u(){B(n)<=0||(a.value=!0,r&&e(),i(),l=setInterval(e,Je(n)))}if(o&&Ct&&u(),xe(n)){const d=de(n,()=>{a.value&&Ct&&u()});Nt(d)}return Nt(c),{isActive:a,pause:c,resume:u}}function cy(e,n,s={}){const{immediate:o=!0}=s,r=U(!1);let l=null;function a(){l&&(clearTimeout(l),l=null)}function i(){r.value=!1,a()}function c(...u){a(),r.value=!0,l=setTimeout(()=>{r.value=!1,l=null,e(...u)},Je(n))}return o&&(r.value=!0,Ct&&c()),Nt(i),{isPending:r,start:c,stop:i}}function Pu(e=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,r=xe(e),l=U(e);function a(i){if(arguments.length)return l.value=i,l.value;{const c=Je(s);return l.value=l.value===c?Je(o):c,l.value}}return r?a:[l,a]}var li=Object.getOwnPropertySymbols,uy=Object.prototype.hasOwnProperty,py=Object.prototype.propertyIsEnumerable,dy=(e,n)=>{var s={};for(var o in e)uy.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&li)for(var o of li(e))n.indexOf(o)<0&&py.call(e,o)&&(s[o]=e[o]);return s};function fy(e,n,s={}){const o=s,{eventFilter:r=Du}=o,l=dy(o,["eventFilter"]);return de(e,zh(r,n),l)}var hy=Object.defineProperty,yy=Object.defineProperties,my=Object.getOwnPropertyDescriptors,Do=Object.getOwnPropertySymbols,Mu=Object.prototype.hasOwnProperty,Ru=Object.prototype.propertyIsEnumerable,ai=(e,n,s)=>n in e?hy(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,gy=(e,n)=>{for(var s in n||(n={}))Mu.call(n,s)&&ai(e,s,n[s]);if(Do)for(var s of Do(n))Ru.call(n,s)&&ai(e,s,n[s]);return e},vy=(e,n)=>yy(e,my(n)),_y=(e,n)=>{var s={};for(var o in e)Mu.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Do)for(var o of Do(e))n.indexOf(o)<0&&Ru.call(e,o)&&(s[o]=e[o]);return s};function wy(e,n,s={}){const o=s,{eventFilter:r}=o,l=_y(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=Jh(r);return{stop:fy(e,n,vy(gy({},l),{eventFilter:a})),pause:i,resume:c,isActive:u}}var Fu="usehead",ii="head:count",yr="data-head-attrs",Lu="data-meta-body",by=(e,n)=>{const s=o=>{if(o.props.renderPriority)return o.props.renderPriority;switch(o.tag){case"base":return-1;case"meta":return o.props.charset?-2:o.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return s(e)-s(n)},ky=e=>{if(!["meta","base","script","link","title"].includes(e.tag))return!1;const{props:n,tag:s}=e;if(s==="base"||s==="title")return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const o=["key","id","name","property","http-equiv"];for(const r of o){let l;if(typeof n.getAttribute=="function"&&n.hasAttribute(r)?l=n.getAttribute(r):l=n[r],l!==void 0)return`${s}-${r}-${l}`}return!1};function Zr(e){const n=Je(e);return!e||!n?n:Array.isArray(n)?n.map(Zr):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,o])=>s==="titleTemplate"?[s,B(o)]:[s,Zr(o)])):n}function By(e){return{...e,input:Zr(e.input)}}function ci(e,n){if(e instanceof HTMLElement&&n instanceof HTMLElement){const s=n.getAttribute("nonce");if(s&&!e.getAttribute("nonce")){const o=n.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=s,s===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(n)}var ui=(e,n)=>{const s=e.getAttribute(yr);if(s)for(const r of s.split(","))r in n||e.removeAttribute(r);const o=[];for(const r in n){const l=n[r];l!=null&&(l===!1?e.removeAttribute(r):e.setAttribute(r,l),o.push(r))}o.length?e.setAttribute(yr,o.join(",")):e.removeAttribute(yr)},xy=(e,n,s)=>{const o=s.createElement(e);for(const r of Object.keys(n))if(r==="body"&&n.body===!0)o.setAttribute(Lu,"true");else{const l=n[r];if(r==="renderPriority"||r==="key"||l===!1)continue;r==="children"||r==="textContent"?o.textContent=l:r==="innerHTML"?o.innerHTML=l:o.setAttribute(r,l)}return o},Ay=(e=window.document,n,s)=>{var o,r;const l=e.head,a=e.body;let i=l.querySelector(`meta[name="${ii}"]`);const c=a.querySelectorAll(`[${Lu}]`),u=i?Number(i.getAttribute("content")):0,d=[],f=[];if(c)for(let m=0;m<c.length;m++)c[m]&&((o=c[m].tagName)==null?void 0:o.toLowerCase())===n&&f.push(c[m]);if(i)for(let m=0,y=i.previousElementSibling;m<u;m++,y=(y==null?void 0:y.previousElementSibling)||null)((r=y==null?void 0:y.tagName)==null?void 0:r.toLowerCase())===n&&d.push(y);else i=e.createElement("meta"),i.setAttribute("name",ii),i.setAttribute("content","0"),l.append(i);let h=s.map(m=>{var y;return{element:xy(m.tag,m.props,e),body:(y=m.props.body)!=null?y:!1}});h=h.filter(m=>{for(let y=0;y<d.length;y++){const _=d[y];if(ci(_,m.element))return d.splice(y,1),!1}for(let y=0;y<f.length;y++){const _=f[y];if(ci(_,m.element))return f.splice(y,1),!1}return!0}),f.forEach(m=>{var y;return(y=m.parentNode)==null?void 0:y.removeChild(m)}),d.forEach(m=>{var y;return(y=m.parentNode)==null?void 0:y.removeChild(m)}),h.forEach(m=>{m.body===!0?a.insertAdjacentElement("beforeend",m.element):l.insertBefore(m.element,i)}),i.setAttribute("content",`${u-d.length+h.filter(m=>!m.body).length}`)},$y=({domCtx:e,document:n,previousTags:s})=>{n||(n=window.document),e.title!==void 0&&(n.title=e.title),ui(n.documentElement,e.htmlAttrs),ui(n.body,e.bodyAttrs);const o=new Set([...Object.keys(e.actualTags),...s]);for(const r of o)Ay(n,r,e.actualTags[r]||[]);s.clear(),Object.keys(e.actualTags).forEach(r=>s.add(r))},Sy=()=>{const e=D(Fu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},Ey=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Ty=(e,n)=>e==null?"":typeof e=="function"?e(n):e.replace("%s",n!=null?n:""),Cy=e=>{const n=[],s=Object.keys(e),o=r=>(r.hid&&(r.key=r.hid,delete r.hid),r.vmid&&(r.key=r.vmid,delete r.vmid),r);for(const r of s)if(e[r]!=null)switch(r){case"title":n.push({tag:r,props:{textContent:e[r]}});break;case"titleTemplate":break;case"base":n.push({tag:r,props:{key:"default",...e[r]}});break;default:if(Ey.includes(r)){const l=e[r];Array.isArray(l)?l.forEach(a=>{const i=o(a);n.push({tag:r,props:i})}):l&&n.push({tag:r,props:o(l)})}break}return n},Oy=e=>{let n=[];const s=new Set;let o=0;const r=[],l=[];e&&n.push({input:e});let a=null,i;const c={install(u){u.config.globalProperties.$head=c,u.provide(Fu,c)},hookBeforeDomUpdate:r,hookTagsResolved:l,get headTags(){const u=[],d={},f=n.map(By),h=f.map(y=>y.input.titleTemplate).reverse().find(y=>y!=null);f.forEach((y,_)=>{Cy(y.input).forEach((b,A)=>{var x;if(b._position=_*1e4+A,b._options&&delete b._options,y.options&&(b._options=y.options),h&&b.tag==="title"&&(b.props.textContent=Ty(h,b.props.textContent)),!((x=b._options)!=null&&x.raw)){for(const R in b.props)R.startsWith("on")&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to set event listeners. See https://github.com/vueuse/head/pull/118",b),delete b.props[R]);b.props.innerHTML&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to use `innerHTML`",b),delete b.props.innerHTML)}const E=ky(b);E?d[E]=b:u.push(b)})}),u.push(...Object.values(d));const m=u.sort((y,_)=>y._position-_._position);return c.hookTagsResolved.forEach(y=>y(m)),m},addHeadObjs(u,d){const f={input:u,options:d,id:o++};return n.push(f),()=>{n=n.filter(h=>h.id!==f.id)}},removeHeadObjs(u){n=n.filter(d=>d.input!==u)},updateDOM:(u,d)=>{i={title:void 0,htmlAttrs:{},bodyAttrs:{},actualTags:{}};for(const h of c.headTags.sort(by)){if(h.tag==="title"){i.title=h.props.textContent;continue}if(h.tag==="htmlAttrs"||h.tag==="bodyAttrs"){Object.assign(i[h.tag],h.props);continue}i.actualTags[h.tag]=i.actualTags[h.tag]||[],i.actualTags[h.tag].push(h)}const f=()=>{a=null;for(const h in c.hookBeforeDomUpdate)if(c.hookBeforeDomUpdate[h](i.actualTags)===!1)return;$y({domCtx:i,document:u,previousTags:s})};if(d){f();return}a=a||Ge(()=>f())}};return c},Dy=typeof window<"u",Iy=(e,n={})=>{const s=Sy(),o=s.addHeadObjs(e,n);Dy&&(ds(()=>{s.updateDOM()}),Xo(()=>{o(),s.updateDOM()}))},Py=e=>{Iy(e)};const Cs=Symbol("v-click-clicks"),An=Symbol("v-click-clicks-elements"),Xr=Symbol("v-click-clicks-order-map"),Os=Symbol("v-click-clicks-disabled"),Hu=Symbol("slidev-slide-scale"),M=Symbol("slidev-slidev-context"),My=Symbol("slidev-route"),Ry=Symbol("slidev-slide-context"),kn="slidev-vclick-target",mr="slidev-vclick-hidden",Fy="slidev-vclick-fade",gr="slidev-vclick-hidden-explicitly",_s="slidev-vclick-current",ho="slidev-vclick-prior";function Ly(e){return e=e||[],Array.isArray(e)?e:[e]}function Qr(e,n){if(!e)return!1;const s=e.indexOf(n);return s>=0?(e.splice(s,1),!0):!1}function Hy(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const r=[];let l=n;for(;l<s;)r.push(l),l+=o||1;return r}function qy(e){return e!=null}function Ny(e,n){return Object.fromEntries(Object.entries(e).map(([s,o])=>n(s,o)).filter(qy))}const Ss={theme:"apple-basic",title:"SymfonyCon Disneyland Paris 2022",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>SymfonyCon Disneyland Paris 2022</h2>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"SF Pro Display"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Josefin Sans"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["SF Pro Display","Josefin Sans"],provider:"none",local:["SF Pro Display","Josefin Sans"],italic:!1,weights:["200","400","600"]},favicon:"symfony.ico",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss"},ke=Ss;var Dc;const an=(Dc=ke.aspectRatio)!=null?Dc:16/9;var Ic;const cn=(Ic=ke.canvasWidth)!=null?Ic:980,Jl=Math.ceil(cn/an),qu=S(()=>Ny(ke.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function wt(e,n,s){Object.defineProperty(e,n,{value:s,writable:!0,enumerable:!1})}const qn=Ie({page:0,clicks:0});let jy=[],Wy=[];wt(qn,"$syncUp",!0);wt(qn,"$syncDown",!0);wt(qn,"$paused",!1);wt(qn,"$onSet",e=>jy.push(e));wt(qn,"$onPatch",e=>Wy.push(e));wt(qn,"$patch",async()=>!1);function Nu(e,n,s=!1){const o=[];let r=!1,l=!1,a,i;const c=Ie(n);function u(m){o.push(m)}function d(m,y){clearTimeout(a),r=!0,c[m]=y,a=setTimeout(()=>r=!1,0)}function f(m){r||(clearTimeout(i),l=!0,Object.entries(m).forEach(([y,_])=>{c[y]=_}),i=setTimeout(()=>l=!1,0))}function h(m){let y;s?s&&window.addEventListener("storage",w=>{w&&w.key===m&&w.newValue&&f(JSON.parse(w.newValue))}):(y=new BroadcastChannel(m),y.addEventListener("message",w=>f(w.data)));function _(){!s&&y&&!l?y.postMessage(Be(c)):s&&!l&&window.localStorage.setItem(m,JSON.stringify(c)),r||o.forEach(w=>w(c))}if(de(c,_,{deep:!0}),s){const w=window.localStorage.getItem(m);w&&f(JSON.parse(w))}}return{init:h,onPatch:u,patch:d,state:c}}const{init:Vy,onPatch:Uy,patch:pi,state:vr}=Nu(qn,{page:1,clicks:0}),Nn=Ie({});let Ky=[],zy=[];wt(Nn,"$syncUp",!0);wt(Nn,"$syncDown",!0);wt(Nn,"$paused",!1);wt(Nn,"$onSet",e=>Ky.push(e));wt(Nn,"$onPatch",e=>zy.push(e));wt(Nn,"$patch",async()=>!1);const{init:Jy,onPatch:Yy,patch:ju,state:Io}=Nu(Nn,{},!1),Gy="modulepreload",Zy=function(e){return"/painless-authentication-with-access-token/"+e},di={},Fn=function(n,s,o){if(!s||s.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(s.map(l=>{if(l=Zy(l),l in di)return;di[l]=!0;const a=l.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let d=r.length-1;d>=0;d--){const f=r[d];if(f.href===l&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Gy,a||(u.as="script",u.crossOrigin=""),u.href=l,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>n())};function $t(e){var n;const s=Je(e);return(n=s==null?void 0:s.$el)!=null?n:s}const et=Ct?window:void 0,Wu=Ct?window.document:void 0,Xy=Ct?window.navigator:void 0;function ce(...e){let n,s,o,r;if(Ou(e[0])?([s,o,r]=e,n=et):[n,s,o,r]=e,!n)return In;let l=In;const a=de(()=>$t(n),c=>{l(),c&&(c.addEventListener(s,o,r),l=()=>{c.removeEventListener(s,o,r),l=In})},{immediate:!0,flush:"post"}),i=()=>{a(),l()};return Nt(i),i}function Qy(e,n,s={}){const{window:o=et,ignore:r,capture:l=!0,detectIframe:a=!1}=s;if(!o)return;const i=U(!0);let c;const u=m=>{o.clearTimeout(c);const y=$t(e);!y||y===m.target||m.composedPath().includes(y)||!i.value||n(m)},d=m=>r&&r.some(y=>{const _=$t(y);return _&&(m.target===_||m.composedPath().includes(_))}),f=[ce(o,"click",u,{passive:!0,capture:l}),ce(o,"pointerdown",m=>{const y=$t(e);i.value=!!y&&!m.composedPath().includes(y)&&!d(m)},{passive:!0}),ce(o,"pointerup",m=>{if(m.button===0){const y=m.composedPath();m.composedPath=()=>y,c=o.setTimeout(()=>u(m),50)}},{passive:!0}),a&&ce(o,"blur",m=>{var y;const _=$t(e);((y=document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(_!=null&&_.contains(document.activeElement))&&n(m)})].filter(Boolean);return()=>f.forEach(m=>m())}const em=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0;function tm(...e){let n,s,o={};e.length===3?(n=e[0],s=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,s=e[0],o=e[1]):(n=e[0],s=e[1]):(n=!0,s=e[0]);const{target:r=et,eventName:l="keydown",passive:a=!1}=o,i=em(n);return ce(r,l,u=>{i(u)&&s(u)},a)}function nm(e={}){const{window:n=et}=e,s=Zh(()=>null,()=>n==null?void 0:n.document.activeElement);return n&&(ce(n,"blur",s.trigger,!0),ce(n,"focus",s.trigger,!0)),s}function to(e,n=!1){const s=U(),o=()=>s.value=Boolean(e());return o(),zl(o,n),s}function Jn(e,n={}){const{window:s=et}=n,o=to(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let r;const l=U(!1),a=()=>{!r||("removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i))},i=()=>{!o.value||(a(),r=s.matchMedia(Iu(e).value),l.value=r.matches,"addEventListener"in r?r.addEventListener("change",i):r.addListener(i))};return ds(i),Nt(()=>a()),l}const sm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var om=Object.defineProperty,fi=Object.getOwnPropertySymbols,rm=Object.prototype.hasOwnProperty,lm=Object.prototype.propertyIsEnumerable,hi=(e,n,s)=>n in e?om(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,am=(e,n)=>{for(var s in n||(n={}))rm.call(n,s)&&hi(e,s,n[s]);if(fi)for(var s of fi(n))lm.call(n,s)&&hi(e,s,n[s]);return e};function im(e,n={}){function s(i,c){let u=e[i];return c!=null&&(u=Gh(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=et}=n;function r(i){return o?o.matchMedia(i).matches:!1}const l=i=>Jn(`(min-width: ${s(i)})`,n),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>l(c),enumerable:!0,configurable:!0}),i),{});return am({greater(i){return Jn(`(min-width: ${s(i,.1)})`,n)},greaterOrEqual:l,smaller(i){return Jn(`(max-width: ${s(i,-.1)})`,n)},smallerOrEqual(i){return Jn(`(max-width: ${s(i)})`,n)},between(i,c){return Jn(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(i){return r(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return r(`(min-width: ${s(i)})`)},isSmaller(i){return r(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return r(`(max-width: ${s(i)})`)},isInBetween(i,c){return r(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},a)}function cm(e={}){const{navigator:n=Xy,read:s=!1,source:o,copiedDuring:r=1500,legacy:l=!1}=e,a=["copy","cut"],i=to(()=>n&&"clipboard"in n),c=S(()=>i.value||l),u=U(""),d=U(!1),f=cy(()=>d.value=!1,r);function h(){i.value?n.clipboard.readText().then(w=>{u.value=w}):u.value=_()}if(c.value&&s)for(const w of a)ce(w,h);async function m(w=Je(o)){c.value&&w!=null&&(i.value?await n.clipboard.writeText(w):y(w),u.value=w,d.value=!0,f.start())}function y(w){const b=document.createElement("textarea");b.value=w!=null?w:"",b.style.position="absolute",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),b.remove()}function _(){var w,b,A;return(A=(b=(w=document==null?void 0:document.getSelection)==null?void 0:w.call(document))==null?void 0:b.toString())!=null?A:""}return{isSupported:c,text:u,copied:d,copy:m}}function um(e){return JSON.parse(JSON.stringify(e))}const el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tl="__vueuse_ssr_handlers__";el[tl]=el[tl]||{};const pm=el[tl];function dm(e,n){return pm[e]||n}function fm(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var hm=Object.defineProperty,yi=Object.getOwnPropertySymbols,ym=Object.prototype.hasOwnProperty,mm=Object.prototype.propertyIsEnumerable,mi=(e,n,s)=>n in e?hm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,gi=(e,n)=>{for(var s in n||(n={}))ym.call(n,s)&&mi(e,s,n[s]);if(yi)for(var s of yi(n))mm.call(n,s)&&mi(e,s,n[s]);return e};const gm={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Dt(e,n,s,o={}){var r;const{flush:l="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:f=et,eventFilter:h,onError:m=j=>{console.error(j)}}=o,y=(d?qt:U)(n);if(!s)try{s=dm("getDefaultStorage",()=>{var j;return(j=et)==null?void 0:j.localStorage})()}catch(j){m(j)}if(!s)return y;const _=Je(n),w=fm(_),b=(r=o.serializer)!=null?r:gm[w],{pause:A,resume:x}=wy(y,()=>E(y.value),{flush:l,deep:a,eventFilter:h});return f&&i&&ce(f,"storage",F),F(),y;function E(j){try{j==null?s.removeItem(e):s.setItem(e,b.write(j))}catch(ee){m(ee)}}function R(j){A();try{const ee=j?j.newValue:s.getItem(e);if(ee==null)return c&&_!==null&&s.setItem(e,b.write(_)),_;if(!j&&u){const ue=b.read(ee);return Oo(u)?u(ue,_):w==="object"&&!Array.isArray(ue)?gi(gi({},_),ue):ue}else return typeof ee!="string"?ee:b.read(ee)}catch(ee){m(ee)}finally{x()}}function F(j){if(!(j&&j.storageArea!==s)){if(j&&j.key===null){y.value=_;return}j&&j.key!==e||(y.value=R(j))}}}function vm(e){return Jn("(prefers-color-scheme: dark)",e)}var _m=Object.defineProperty,wm=Object.defineProperties,bm=Object.getOwnPropertyDescriptors,vi=Object.getOwnPropertySymbols,km=Object.prototype.hasOwnProperty,Bm=Object.prototype.propertyIsEnumerable,_i=(e,n,s)=>n in e?_m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,xm=(e,n)=>{for(var s in n||(n={}))km.call(n,s)&&_i(e,s,n[s]);if(vi)for(var s of vi(n))Bm.call(n,s)&&_i(e,s,n[s]);return e},Am=(e,n)=>wm(e,bm(n));function S9(e,n={}){var s,o,r;const l=(s=n.draggingElement)!=null?s:et,a=(o=n.handle)!=null?o:e,i=U((r=Je(n.initialValue))!=null?r:{x:0,y:0}),c=U(),u=y=>n.pointerTypes?n.pointerTypes.includes(y.pointerType):!0,d=y=>{Je(n.preventDefault)&&y.preventDefault(),Je(n.stopPropagation)&&y.stopPropagation()},f=y=>{var _;if(!u(y)||Je(n.exact)&&y.target!==Je(e))return;const w=Je(e).getBoundingClientRect(),b={x:y.pageX-w.left,y:y.pageY-w.top};((_=n.onStart)==null?void 0:_.call(n,b,y))!==!1&&(c.value=b,d(y))},h=y=>{var _;!u(y)||!c.value||(i.value={x:y.pageX-c.value.x,y:y.pageY-c.value.y},(_=n.onMove)==null||_.call(n,i.value,y),d(y))},m=y=>{var _;!u(y)||!c.value||(c.value=void 0,(_=n.onEnd)==null||_.call(n,i.value,y),d(y))};return Ct&&(ce(a,"pointerdown",f,!0),ce(l,"pointermove",h,!0),ce(l,"pointerup",m,!0)),Am(xm({},ly(i)),{position:i,isDragging:S(()=>!!c.value),style:S(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var wi=Object.getOwnPropertySymbols,$m=Object.prototype.hasOwnProperty,Sm=Object.prototype.propertyIsEnumerable,Em=(e,n)=>{var s={};for(var o in e)$m.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&wi)for(var o of wi(e))n.indexOf(o)<0&&Sm.call(e,o)&&(s[o]=e[o]);return s};function Tm(e,n,s={}){const o=s,{window:r=et}=o,l=Em(o,["window"]);let a;const i=to(()=>r&&"ResizeObserver"in r),c=()=>{a&&(a.disconnect(),a=void 0)},u=de(()=>$t(e),f=>{c(),i.value&&r&&f&&(a=new ResizeObserver(n),a.observe(f,l))},{immediate:!0,flush:"post"}),d=()=>{c(),u()};return Nt(d),{isSupported:i,stop:d}}function Cm(e,n={}){const{immediate:s=!0,window:o=et}=n,r=U(!1);let l=null;function a(){!r.value||!o||(e(),l=o.requestAnimationFrame(a))}function i(){!r.value&&o&&(r.value=!0,a())}function c(){r.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return s&&i(),Nt(c),{isActive:r,pause:c,resume:i}}function Om(e,n={width:0,height:0},s={}){const{box:o="content-box"}=s,r=U(n.width),l=U(n.height);return Tm(e,([a])=>{const i=o==="border-box"?a.borderBoxSize:o==="content-box"?a.contentBoxSize:a.devicePixelContentBoxSize;i?(r.value=i.reduce((c,{inlineSize:u})=>c+u,0),l.value=i.reduce((c,{blockSize:u})=>c+u,0)):(r.value=a.contentRect.width,l.value=a.contentRect.height)},s),de(()=>$t(e),a=>{r.value=a?n.width:0,l.value=a?n.height:0}),{width:r,height:l}}const bi=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Dm(e,n={}){const{document:s=Wu,autoExit:o=!1}=n,r=e||(s==null?void 0:s.querySelector("html")),l=U(!1);let a=bi[0];const i=to(()=>{if(s){for(const _ of bi)if(_[1]in s)return a=_,!0}else return!1;return!1}),[c,u,d,,f]=a;async function h(){!i.value||(s!=null&&s[d]&&await s[u](),l.value=!1)}async function m(){if(!i.value)return;await h();const _=$t(r);_&&(await _[c](),l.value=!0)}async function y(){l.value?await h():await m()}return s&&ce(s,f,()=>{l.value=!!(s!=null&&s[d])},!1),o&&Nt(h),{isSupported:i,isFullscreen:l,enter:m,exit:h,toggle:y}}function Im(e,n,s={}){const{root:o,rootMargin:r="0px",threshold:l=.1,window:a=et}=s,i=to(()=>a&&"IntersectionObserver"in a);let c=In;const u=i.value?de(()=>({el:$t(e),root:$t(o)}),({el:f,root:h})=>{if(c(),!f)return;const m=new IntersectionObserver(n,{root:h,rootMargin:r,threshold:l});m.observe(f),c=()=>{m.disconnect(),c=In}},{immediate:!0,flush:"post"}):In,d=()=>{c(),u()};return Nt(d),{isSupported:i,stop:d}}const Pm={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Mm(e={}){const{reactive:n=!1,target:s=et,aliasMap:o=Pm,passive:r=!0,onEventFired:l=In}=e,a=Ie(new Set),i={toJSON(){return{}},current:a},c=n?Ie(i):i,u=new Set,d=new Set;function f(_,w){_ in c&&(n?c[_]=w:c[_].value=w)}function h(){for(const _ of d)f(_,!1)}function m(_,w){var b,A;const x=(b=_.key)==null?void 0:b.toLowerCase(),R=[(A=_.code)==null?void 0:A.toLowerCase(),x].filter(Boolean);x&&(w?a.add(x):a.delete(x));for(const F of R)d.add(F),f(F,w);x==="meta"&&!w?(u.forEach(F=>{a.delete(F),f(F,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&w&&[...a,...R].forEach(F=>u.add(F))}ce(s,"keydown",_=>(m(_,!0),l(_)),{passive:r}),ce(s,"keyup",_=>(m(_,!1),l(_)),{passive:r}),ce("blur",h,{passive:!0}),ce("focus",h,{passive:!0});const y=new Proxy(c,{get(_,w,b){if(typeof w!="string")return Reflect.get(_,w,b);if(w=w.toLowerCase(),w in o&&(w=o[w]),!(w in c))if(/[+_-]/.test(w)){const x=w.split(/[+_-]/g).map(E=>E.trim());c[w]=S(()=>x.every(E=>B(y[E])))}else c[w]=U(!1);const A=Reflect.get(_,w,b);return n?B(A):A}});return y}function E9(e={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:r={x:0,y:0},window:l=et,eventFilter:a}=e,i=U(r.x),c=U(r.y),u=U(null),d=_=>{n==="page"?(i.value=_.pageX,c.value=_.pageY):n==="client"&&(i.value=_.clientX,c.value=_.clientY),u.value="mouse"},f=()=>{i.value=r.x,c.value=r.y},h=_=>{if(_.touches.length>0){const w=_.touches[0];n==="page"?(i.value=w.pageX,c.value=w.pageY):n==="client"&&(i.value=w.clientX,c.value=w.clientY),u.value="touch"}},m=_=>a===void 0?d(_):a(()=>d(_),{}),y=_=>a===void 0?h(_):a(()=>h(_),{});return l&&(ce(l,"mousemove",m,{passive:!0}),ce(l,"dragover",m,{passive:!0}),s&&(ce(l,"touchstart",y,{passive:!0}),ce(l,"touchmove",y,{passive:!0}),o&&ce(l,"touchend",f,{passive:!0}))),{x:i,y:c,sourceType:u}}var Jt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Jt||(Jt={}));function Rm(e,n={}){const s=Iu(e),{threshold:o=50,onSwipe:r,onSwipeEnd:l,onSwipeStart:a}=n,i=Ie({x:0,y:0}),c=(F,j)=>{i.x=F,i.y=j},u=Ie({x:0,y:0}),d=(F,j)=>{u.x=F,u.y=j},f=S(()=>i.x-u.x),h=S(()=>i.y-u.y),{max:m,abs:y}=Math,_=S(()=>m(y(f.value),y(h.value))>=o),w=U(!1),b=U(!1),A=S(()=>_.value?y(f.value)>y(h.value)?f.value>0?Jt.LEFT:Jt.RIGHT:h.value>0?Jt.UP:Jt.DOWN:Jt.NONE),x=F=>n.pointerTypes?n.pointerTypes.includes(F.pointerType):!0,E=[ce(e,"pointerdown",F=>{var j,ee;if(!x(F))return;b.value=!0,(ee=(j=s.value)==null?void 0:j.style)==null||ee.setProperty("touch-action","none");const ue=F.target;ue==null||ue.setPointerCapture(F.pointerId);const{clientX:he,clientY:we}=F;c(he,we),d(he,we),a==null||a(F)}),ce(e,"pointermove",F=>{if(!x(F)||!b.value)return;const{clientX:j,clientY:ee}=F;d(j,ee),!w.value&&_.value&&(w.value=!0),w.value&&(r==null||r(F))}),ce(e,"pointerup",F=>{var j,ee;!x(F)||(w.value&&(l==null||l(F,A.value)),b.value=!1,w.value=!1,(ee=(j=s.value)==null?void 0:j.style)==null||ee.setProperty("touch-action","initial"))})],R=()=>E.forEach(F=>F());return{isSwiping:Sn(w),direction:Sn(A),posStart:Sn(i),posEnd:Sn(u),distanceX:f,distanceY:h,stop:R}}let Fm=0;function T9(e,n={}){const s=U(!1),{document:o=Wu,immediate:r=!0,manual:l=!1,id:a=`vueuse_styletag_${++Fm}`}=n,i=U(e);let c=()=>{};const u=()=>{if(!o)return;const f=o.getElementById(a)||o.createElement("style");f.type="text/css",f.id=a,n.media&&(f.media=n.media),o.head.appendChild(f),!s.value&&(c=de(i,h=>{f.innerText=h},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(c(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return r&&!l&&zl(u),l||Nt(d),{id:a,css:i,unload:d,load:u,isLoaded:Sn(s)}}var Lm=Object.defineProperty,ki=Object.getOwnPropertySymbols,Hm=Object.prototype.hasOwnProperty,qm=Object.prototype.propertyIsEnumerable,Bi=(e,n,s)=>n in e?Lm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Nm=(e,n)=>{for(var s in n||(n={}))Hm.call(n,s)&&Bi(e,s,n[s]);if(ki)for(var s of ki(n))qm.call(n,s)&&Bi(e,s,n[s]);return e};function C9(e={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:r="requestAnimationFrame",callback:l}=e,a=U(Gr()+s),i=()=>a.value=Gr()+s,c=l?()=>{i(),l(a.value)}:i,u=r==="requestAnimationFrame"?Cm(c,{immediate:o}):iy(c,r,{immediate:o});return n?Nm({timestamp:a},u):a}var jm=Object.defineProperty,xi=Object.getOwnPropertySymbols,Wm=Object.prototype.hasOwnProperty,Vm=Object.prototype.propertyIsEnumerable,Ai=(e,n,s)=>n in e?jm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Um=(e,n)=>{for(var s in n||(n={}))Wm.call(n,s)&&Ai(e,s,n[s]);if(xi)for(var s of xi(n))Vm.call(n,s)&&Ai(e,s,n[s]);return e};const Km={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Um({linear:Yh},Km);function Ft(e,n,s,o={}){var r,l,a;const{clone:i=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:f}=o,h=Hn(),m=s||(h==null?void 0:h.emit)||((r=h==null?void 0:h.$emit)==null?void 0:r.bind(h))||((a=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let y=u;n||(n="modelValue"),y=u||y||`update:${n.toString()}`;const _=b=>i?Oo(i)?i(b):um(b):b,w=()=>Vh(e[n])?_(e[n]):f;if(c){const b=w(),A=U(b);return de(()=>e[n],x=>A.value=_(x)),de(A,x=>{(x!==e[n]||d)&&m(y,x)},{deep:d}),A}else return S({get(){return w()},set(b){m(y,b)}})}function O9({window:e=et}={}){if(!e)return U(!1);const n=U(e.document.hasFocus());return ce(e,"blur",()=>{n.value=!1}),ce(e,"focus",()=>{n.value=!0}),n}function zm(e={}){const{window:n=et,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:r=!0,includeScrollbar:l=!0}=e,a=U(s),i=U(o),c=()=>{n&&(l?(a.value=n.innerWidth,i.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};return c(),zl(c),ce("resize",c,{passive:!0}),r&&ce("orientationchange",c,{passive:!0}),{width:a,height:i}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Yn=typeof window<"u";function Jm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const $e=Object.assign;function _r(e,n){const s={};for(const o in n){const r=n[o];s[o]=Ot(r)?r.map(e):e(r)}return s}const Ds=()=>{},Ot=Array.isArray,Ym=/\/$/,Gm=e=>e.replace(Ym,"");function wr(e,n,s="/"){let o,r={},l="",a="";const i=n.indexOf("#");let c=n.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=n.slice(0,c),l=n.slice(c+1,i>-1?i:n.length),r=e(l)),i>-1&&(o=o||n.slice(0,i),a=n.slice(i,n.length)),o=e0(o!=null?o:n,s),{fullPath:o+(l&&"?")+l+a,path:o,query:r,hash:a}}function Zm(e,n){const s=n.query?e(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function $i(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Xm(e,n,s){const o=n.matched.length-1,r=s.matched.length-1;return o>-1&&o===r&&as(n.matched[o],s.matched[r])&&Vu(n.params,s.params)&&e(n.query)===e(s.query)&&n.hash===s.hash}function as(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Vu(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(!Qm(e[s],n[s]))return!1;return!0}function Qm(e,n){return Ot(e)?Si(e,n):Ot(n)?Si(n,e):e===n}function Si(e,n){return Ot(n)?e.length===n.length&&e.every((s,o)=>s===n[o]):e.length===1&&e[0]===n}function e0(e,n){if(e.startsWith("/"))return e;if(!e)return n;const s=n.split("/"),o=e.split("/");let r=s.length-1,l,a;for(l=0;l<o.length;l++)if(a=o[l],a!==".")if(a==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+o.slice(l-(l===o.length?1:0)).join("/")}var Ks;(function(e){e.pop="pop",e.push="push"})(Ks||(Ks={}));var Is;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Is||(Is={}));function t0(e){if(!e)if(Yn){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gm(e)}const n0=/^[^#]+#/;function s0(e,n){return e.replace(n0,"#")+n}function o0(e,n){const s=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const sr=()=>({left:window.pageXOffset,top:window.pageYOffset});function r0(e){let n;if("el"in e){const s=e.el,o=typeof s=="string"&&s.startsWith("#"),r=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!r)return;n=o0(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Ei(e,n){return(history.state?history.state.position-n:-1)+e}const nl=new Map;function l0(e,n){nl.set(e,n)}function a0(e){const n=nl.get(e);return nl.delete(e),n}let i0=()=>location.protocol+"//"+location.host;function Uu(e,n){const{pathname:s,search:o,hash:r}=n,l=e.indexOf("#");if(l>-1){let i=r.includes(e.slice(l))?e.slice(l).length:1,c=r.slice(i);return c[0]!=="/"&&(c="/"+c),$i(c,"")}return $i(s,e)+o+r}function c0(e,n,s,o){let r=[],l=[],a=null;const i=({state:h})=>{const m=Uu(e,location),y=s.value,_=n.value;let w=0;if(h){if(s.value=m,n.value=h,a&&a===y){a=null;return}w=_?h.position-_.position:0}else o(m);r.forEach(b=>{b(s.value,y,{delta:w,type:Ks.pop,direction:w?w>0?Is.forward:Is.back:Is.unknown})})};function c(){a=s.value}function u(h){r.push(h);const m=()=>{const y=r.indexOf(h);y>-1&&r.splice(y,1)};return l.push(m),m}function d(){const{history:h}=window;!h.state||h.replaceState($e({},h.state,{scroll:sr()}),"")}function f(){for(const h of l)h();l=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:f}}function Ti(e,n,s,o=!1,r=!1){return{back:e,current:n,forward:s,replaced:o,position:window.history.length,scroll:r?sr():null}}function u0(e){const{history:n,location:s}=window,o={value:Uu(e,s)},r={value:n.state};r.value||l(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(c,u,d){const f=e.indexOf("#"),h=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+c:i0()+e+c;try{n[d?"replaceState":"pushState"](u,"",h),r.value=u}catch(m){console.error(m),s[d?"replace":"assign"](h)}}function a(c,u){const d=$e({},n.state,Ti(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});l(c,d,!0),o.value=c}function i(c,u){const d=$e({},r.value,n.state,{forward:c,scroll:sr()});l(d.current,d,!0);const f=$e({},Ti(o.value,c,null),{position:d.position+1},u);l(c,f,!1),o.value=c}return{location:o,state:r,push:i,replace:a}}function p0(e){e=t0(e);const n=u0(e),s=c0(e,n.state,n.location,n.replace);function o(l,a=!0){a||s.pauseListeners(),history.go(l)}const r=$e({location:"",base:e,go:o,createHref:s0.bind(null,e)},n,s);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}function d0(e){return typeof e=="string"||e&&typeof e=="object"}function Ku(e){return typeof e=="string"||typeof e=="symbol"}const tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zu=Symbol("");var Ci;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ci||(Ci={}));function is(e,n){return $e(new Error,{type:e,[zu]:!0},n)}function Vt(e,n){return e instanceof Error&&zu in e&&(n==null||!!(e.type&n))}const Oi="[^/]+?",f0={sensitive:!1,strict:!1,start:!0,end:!0},h0=/[.+*?^${}()[\]/\\]/g;function y0(e,n){const s=$e({},f0,n),o=[];let r=s.start?"^":"";const l=[];for(const u of e){const d=u.length?[]:[90];s.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const h=u[f];let m=40+(s.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(h0,"\\$&"),m+=40;else if(h.type===1){const{value:y,repeatable:_,optional:w,regexp:b}=h;l.push({name:y,repeatable:_,optional:w});const A=b||Oi;if(A!==Oi){m+=10;try{new RegExp(`(${A})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${y}" (${A}): `+E.message)}}let x=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(x=w&&u.length<2?`(?:/${x})`:"/"+x),w&&(x+="?"),r+=x,m+=20,w&&(m+=-8),_&&(m+=-20),A===".*"&&(m+=-50)}d.push(m)}o.push(d)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(r+="/?"),s.end?r+="$":s.strict&&(r+="(?:/|$)");const a=new RegExp(r,s.sensitive?"":"i");function i(u){const d=u.match(a),f={};if(!d)return null;for(let h=1;h<d.length;h++){const m=d[h]||"",y=l[h-1];f[y.name]=m&&y.repeatable?m.split("/"):m}return f}function c(u){let d="",f=!1;for(const h of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const m of h)if(m.type===0)d+=m.value;else if(m.type===1){const{value:y,repeatable:_,optional:w}=m,b=y in u?u[y]:"";if(Ot(b)&&!_)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const A=Ot(b)?b.join("/"):b;if(!A)if(w)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);d+=A}}return d||"/"}return{re:a,score:o,keys:l,parse:i,stringify:c}}function m0(e,n){let s=0;for(;s<e.length&&s<n.length;){const o=n[s]-e[s];if(o)return o;s++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function g0(e,n){let s=0;const o=e.score,r=n.score;for(;s<o.length&&s<r.length;){const l=m0(o[s],r[s]);if(l)return l;s++}if(Math.abs(r.length-o.length)===1){if(Di(o))return 1;if(Di(r))return-1}return r.length-o.length}function Di(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const v0={type:0,value:""},_0=/[a-zA-Z0-9_]/;function w0(e){if(!e)return[[]];if(e==="/")return[[v0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(m){throw new Error(`ERR (${s})/"${u}": ${m}`)}let s=0,o=s;const r=[];let l;function a(){l&&r.push(l),l=[]}let i=0,c,u="",d="";function f(){!u||(s===0?l.push({type:0,value:u}):s===1||s===2||s===3?(l.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(u&&f(),a()):c===":"?(f(),s=1):h();break;case 4:h(),s=o;break;case 1:c==="("?s=2:_0.test(c)?h():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),f(),a(),r}function b0(e,n,s){const o=y0(w0(e.path),s),r=$e(o,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function k0(e,n){const s=[],o=new Map;n=Mi({strict:!1,end:!0,sensitive:!1},n);function r(d){return o.get(d)}function l(d,f,h){const m=!h,y=B0(d);y.aliasOf=h&&h.record;const _=Mi(n,d),w=[y];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const E of x)w.push($e({},y,{components:h?h.record.components:y.components,path:E,aliasOf:h?h.record:y}))}let b,A;for(const x of w){const{path:E}=x;if(f&&E[0]!=="/"){const R=f.record.path,F=R[R.length-1]==="/"?"":"/";x.path=f.record.path+(E&&F+E)}if(b=b0(x,f,_),h?h.alias.push(b):(A=A||b,A!==b&&A.alias.push(b),m&&d.name&&!Pi(b)&&a(d.name)),y.children){const R=y.children;for(let F=0;F<R.length;F++)l(R[F],b,h&&h.children[F])}h=h||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return A?()=>{a(A)}:Ds}function a(d){if(Ku(d)){const f=o.get(d);f&&(o.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return s}function c(d){let f=0;for(;f<s.length&&g0(d,s[f])>=0&&(d.record.path!==s[f].record.path||!Ju(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!Pi(d)&&o.set(d.record.name,d)}function u(d,f){let h,m={},y,_;if("name"in d&&d.name){if(h=o.get(d.name),!h)throw is(1,{location:d});_=h.record.name,m=$e(Ii(f.params,h.keys.filter(A=>!A.optional).map(A=>A.name)),d.params&&Ii(d.params,h.keys.map(A=>A.name))),y=h.stringify(m)}else if("path"in d)y=d.path,h=s.find(A=>A.re.test(y)),h&&(m=h.parse(y),_=h.record.name);else{if(h=f.name?o.get(f.name):s.find(A=>A.re.test(f.path)),!h)throw is(1,{location:d,currentLocation:f});_=h.record.name,m=$e({},f.params,d.params),y=h.stringify(m)}const w=[];let b=h;for(;b;)w.unshift(b.record),b=b.parent;return{name:_,path:y,params:m,matched:w,meta:A0(w)}}return e.forEach(d=>l(d)),{addRoute:l,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:r}}function Ii(e,n){const s={};for(const o of n)o in e&&(s[o]=e[o]);return s}function B0(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:x0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function x0(e){const n={},s=e.props||!1;if("component"in e)n.default=s;else for(const o in e.components)n[o]=typeof s=="boolean"?s:s[o];return n}function Pi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function A0(e){return e.reduce((n,s)=>$e(n,s.meta),{})}function Mi(e,n){const s={};for(const o in e)s[o]=o in n?n[o]:e[o];return s}function Ju(e,n){return n.children.some(s=>s===e||Ju(e,s))}const Yu=/#/g,$0=/&/g,S0=/\//g,E0=/=/g,T0=/\?/g,Gu=/\+/g,C0=/%5B/g,O0=/%5D/g,Zu=/%5E/g,D0=/%60/g,Xu=/%7B/g,I0=/%7C/g,Qu=/%7D/g,P0=/%20/g;function Yl(e){return encodeURI(""+e).replace(I0,"|").replace(C0,"[").replace(O0,"]")}function M0(e){return Yl(e).replace(Xu,"{").replace(Qu,"}").replace(Zu,"^")}function sl(e){return Yl(e).replace(Gu,"%2B").replace(P0,"+").replace(Yu,"%23").replace($0,"%26").replace(D0,"`").replace(Xu,"{").replace(Qu,"}").replace(Zu,"^")}function R0(e){return sl(e).replace(E0,"%3D")}function F0(e){return Yl(e).replace(Yu,"%23").replace(T0,"%3F")}function L0(e){return e==null?"":F0(e).replace(S0,"%2F")}function Po(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function H0(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const l=o[r].replace(Gu," "),a=l.indexOf("="),i=Po(a<0?l:l.slice(0,a)),c=a<0?null:Po(l.slice(a+1));if(i in n){let u=n[i];Ot(u)||(u=n[i]=[u]),u.push(c)}else n[i]=c}return n}function Ri(e){let n="";for(let s in e){const o=e[s];if(s=R0(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(Ot(o)?o.map(l=>l&&sl(l)):[o&&sl(o)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+s,l!=null&&(n+="="+l))})}return n}function q0(e){const n={};for(const s in e){const o=e[s];o!==void 0&&(n[s]=Ot(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return n}const N0=Symbol(""),Fi=Symbol(""),Gl=Symbol(""),ep=Symbol(""),ol=Symbol("");function ws(){let e=[];function n(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function s(){e=[]}return{add:n,list:()=>e,reset:s}}function sn(e,n,s,o,r){const l=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((a,i)=>{const c=f=>{f===!1?i(is(4,{from:s,to:n})):f instanceof Error?i(f):d0(f)?i(is(2,{from:n,to:f})):(l&&o.enterCallbacks[r]===l&&typeof f=="function"&&l.push(f),a())},u=e.call(o&&o.instances[r],n,s,c);let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(f=>i(f))})}function br(e,n,s,o){const r=[];for(const l of e)for(const a in l.components){let i=l.components[a];if(!(n!=="beforeRouteEnter"&&!l.instances[a]))if(j0(i)){const u=(i.__vccOpts||i)[n];u&&r.push(sn(u,s,o,l,a))}else{let c=i();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${l.path}"`));const d=Jm(u)?u.default:u;l.components[a]=d;const h=(d.__vccOpts||d)[n];return h&&sn(h,s,o,l,a)()}))}}return r}function j0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Li(e){const n=D(Gl),s=D(ep),o=S(()=>n.resolve(B(e.to))),r=S(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],f=s.matched;if(!d||!f.length)return-1;const h=f.findIndex(as.bind(null,d));if(h>-1)return h;const m=Hi(c[u-2]);return u>1&&Hi(d)===m&&f[f.length-1].path!==m?f.findIndex(as.bind(null,c[u-2])):h}),l=S(()=>r.value>-1&&K0(s.params,o.value.params)),a=S(()=>r.value>-1&&r.value===s.matched.length-1&&Vu(s.params,o.value.params));function i(c={}){return U0(c)?n[B(e.replace)?"replace":"push"](B(e.to)).catch(Ds):Promise.resolve()}return{route:o,href:S(()=>o.value.href),isActive:l,isExactActive:a,navigate:i}}const W0=_e({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Li,setup(e,{slots:n}){const s=Ie(Li(e)),{options:o}=D(Gl),r=S(()=>({[qi(e.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[qi(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const l=n.default&&n.default(s);return e.custom?l:Xe("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:r.value},l)}}}),V0=W0;function U0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function K0(e,n){for(const s in n){const o=n[s],r=e[s];if(typeof o=="string"){if(o!==r)return!1}else if(!Ot(r)||r.length!==o.length||o.some((l,a)=>l!==r[a]))return!1}return!0}function Hi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qi=(e,n,s)=>e!=null?e:n!=null?n:s,z0=_e({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:s}){const o=D(ol),r=S(()=>e.route||o.value),l=D(Fi,0),a=S(()=>{let u=B(l);const{matched:d}=r.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),i=S(()=>r.value.matched[a.value]);ht(Fi,S(()=>a.value+1)),ht(N0,i),ht(ol,r);const c=U();return de(()=>[c.value,i.value,e.name],([u,d,f],[h,m,y])=>{d&&(d.instances[f]=u,m&&m!==d&&u&&u===h&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!as(d,m)||!h)&&(d.enterCallbacks[f]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,f=i.value,h=f&&f.components[d];if(!h)return Ni(s.default,{Component:h,route:u});const m=f.props[d],y=m?m===!0?u.params:typeof m=="function"?m(u):m:null,w=Xe(h,$e({},y,n,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[d]=null)},ref:c}));return Ni(s.default,{Component:w,route:u})||w}}});function Ni(e,n){if(!e)return null;const s=e(n);return s.length===1?s[0]:s}const J0=z0;function Y0(e){const n=k0(e.routes,e),s=e.parseQuery||H0,o=e.stringifyQuery||Ri,r=e.history,l=ws(),a=ws(),i=ws(),c=qt(tn);let u=tn;Yn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=_r.bind(null,C=>""+C),f=_r.bind(null,L0),h=_r.bind(null,Po);function m(C,z){let K,Z;return Ku(C)?(K=n.getRecordMatcher(C),Z=z):Z=C,n.addRoute(Z,K)}function y(C){const z=n.getRecordMatcher(C);z&&n.removeRoute(z)}function _(){return n.getRoutes().map(C=>C.record)}function w(C){return!!n.getRecordMatcher(C)}function b(C,z){if(z=$e({},z||c.value),typeof C=="string"){const g=wr(s,C,z.path),v=n.resolve({path:g.path},z),$=r.createHref(g.fullPath);return $e(g,v,{params:h(v.params),hash:Po(g.hash),redirectedFrom:void 0,href:$})}let K;if("path"in C)K=$e({},C,{path:wr(s,C.path,z.path).path});else{const g=$e({},C.params);for(const v in g)g[v]==null&&delete g[v];K=$e({},C,{params:f(C.params)}),z.params=f(z.params)}const Z=n.resolve(K,z),me=C.hash||"";Z.params=d(h(Z.params));const be=Zm(o,$e({},C,{hash:M0(me),path:Z.path})),le=r.createHref(be);return $e({fullPath:be,hash:me,query:o===Ri?q0(C.query):C.query||{}},Z,{redirectedFrom:void 0,href:le})}function A(C){return typeof C=="string"?wr(s,C,c.value.path):$e({},C)}function x(C,z){if(u!==C)return is(8,{from:z,to:C})}function E(C){return j(C)}function R(C){return E($e(A(C),{replace:!0}))}function F(C){const z=C.matched[C.matched.length-1];if(z&&z.redirect){const{redirect:K}=z;let Z=typeof K=="function"?K(C):K;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=A(Z):{path:Z},Z.params={}),$e({query:C.query,hash:C.hash,params:"path"in Z?{}:C.params},Z)}}function j(C,z){const K=u=b(C),Z=c.value,me=C.state,be=C.force,le=C.replace===!0,g=F(K);if(g)return j($e(A(g),{state:typeof g=="object"?$e({},me,g.state):me,force:be,replace:le}),z||K);const v=K;v.redirectedFrom=z;let $;return!be&&Xm(o,Z,K)&&($=is(16,{to:v,from:Z}),Ae(Z,Z,!0,!1)),($?Promise.resolve($):ue(v,Z)).catch(T=>Vt(T)?Vt(T,2)?T:ye(T):Y(T,v,Z)).then(T=>{if(T){if(Vt(T,2))return j($e({replace:le},A(T.to),{state:typeof T.to=="object"?$e({},me,T.to.state):me,force:be}),z||v)}else T=we(v,Z,!0,le,me);return he(v,Z,T),T})}function ee(C,z){const K=x(C,z);return K?Promise.reject(K):Promise.resolve()}function ue(C,z){let K;const[Z,me,be]=G0(C,z);K=br(Z.reverse(),"beforeRouteLeave",C,z);for(const g of Z)g.leaveGuards.forEach(v=>{K.push(sn(v,C,z))});const le=ee.bind(null,C,z);return K.push(le),Vn(K).then(()=>{K=[];for(const g of l.list())K.push(sn(g,C,z));return K.push(le),Vn(K)}).then(()=>{K=br(me,"beforeRouteUpdate",C,z);for(const g of me)g.updateGuards.forEach(v=>{K.push(sn(v,C,z))});return K.push(le),Vn(K)}).then(()=>{K=[];for(const g of C.matched)if(g.beforeEnter&&!z.matched.includes(g))if(Ot(g.beforeEnter))for(const v of g.beforeEnter)K.push(sn(v,C,z));else K.push(sn(g.beforeEnter,C,z));return K.push(le),Vn(K)}).then(()=>(C.matched.forEach(g=>g.enterCallbacks={}),K=br(be,"beforeRouteEnter",C,z),K.push(le),Vn(K))).then(()=>{K=[];for(const g of a.list())K.push(sn(g,C,z));return K.push(le),Vn(K)}).catch(g=>Vt(g,8)?g:Promise.reject(g))}function he(C,z,K){for(const Z of i.list())Z(C,z,K)}function we(C,z,K,Z,me){const be=x(C,z);if(be)return be;const le=z===tn,g=Yn?history.state:{};K&&(Z||le?r.replace(C.fullPath,$e({scroll:le&&g&&g.scroll},me)):r.push(C.fullPath,me)),c.value=C,Ae(C,z,K,le),ye()}let Ue;function Ne(){Ue||(Ue=r.listen((C,z,K)=>{if(!jn.listening)return;const Z=b(C),me=F(Z);if(me){j($e(me,{replace:!0}),Z).catch(Ds);return}u=Z;const be=c.value;Yn&&l0(Ei(be.fullPath,K.delta),sr()),ue(Z,be).catch(le=>Vt(le,12)?le:Vt(le,2)?(j(le.to,Z).then(g=>{Vt(g,20)&&!K.delta&&K.type===Ks.pop&&r.go(-1,!1)}).catch(Ds),Promise.reject()):(K.delta&&r.go(-K.delta,!1),Y(le,Z,be))).then(le=>{le=le||we(Z,be,!1),le&&(K.delta&&!Vt(le,8)?r.go(-K.delta,!1):K.type===Ks.pop&&Vt(le,20)&&r.go(-1,!1)),he(Z,be,le)}).catch(Ds)}))}let Re=ws(),Oe=ws(),De;function Y(C,z,K){ye(C);const Z=Oe.list();return Z.length?Z.forEach(me=>me(C,z,K)):console.error(C),Promise.reject(C)}function se(){return De&&c.value!==tn?Promise.resolve():new Promise((C,z)=>{Re.add([C,z])})}function ye(C){return De||(De=!C,Ne(),Re.list().forEach(([z,K])=>C?K(C):z()),Re.reset()),C}function Ae(C,z,K,Z){const{scrollBehavior:me}=e;if(!Yn||!me)return Promise.resolve();const be=!K&&a0(Ei(C.fullPath,0))||(Z||!K)&&history.state&&history.state.scroll||null;return Ge().then(()=>me(C,z,be)).then(le=>le&&r0(le)).catch(le=>Y(le,C,z))}const tt=C=>r.go(C);let Le;const Qt=new Set,jn={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:w,getRoutes:_,resolve:b,options:e,push:E,replace:R,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:l.add,beforeResolve:a.add,afterEach:i.add,onError:Oe.add,isReady:se,install(C){const z=this;C.component("RouterLink",V0),C.component("RouterView",J0),C.config.globalProperties.$router=z,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>B(c)}),Yn&&!Le&&c.value===tn&&(Le=!0,E(r.location).catch(me=>{}));const K={};for(const me in tn)K[me]=S(()=>c.value[me]);C.provide(Gl,z),C.provide(ep,Ie(K)),C.provide(ol,c);const Z=C.unmount;Qt.add(C),C.unmount=function(){Qt.delete(C),Qt.size<1&&(u=tn,Ue&&Ue(),Ue=null,c.value=tn,Le=!1,De=!1),Z()}}};return jn}function Vn(e){return e.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function G0(e,n){const s=[],o=[],r=[],l=Math.max(n.matched.length,e.matched.length);for(let a=0;a<l;a++){const i=n.matched[a];i&&(e.matched.find(u=>as(u,i))?o.push(i):s.push(i));const c=e.matched[a];c&&(n.matched.find(u=>as(u,c))||r.push(c))}return[s,o,r]}const kr=U(!1),Ps=U(!1),Gn=U(!1),Z0=U(!0),rl=im({xs:460,...sm}),Pn=zm(),tp=Mm(),X0=S(()=>Pn.height.value-Pn.width.value/an>180),np=Dm(Ct?document.body:null),ss=nm(),Q0=S(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=ss.value)==null?void 0:e.tagName)||"")||((n=ss.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),eg=S(()=>{var e;return["BUTTON","A"].includes(((e=ss.value)==null?void 0:e.tagName)||"")});Dt("slidev-camera","default");Dt("slidev-mic","default");const wo=Dt("slidev-scale",0),st=Dt("slidev-show-overview",!1),Br=Dt("slidev-presenter-cursor",!0),ji=Dt("slidev-show-editor",!1);Dt("slidev-editor-width",Ct?window.innerWidth*.4:100);const sp=Pu(st);function Wi(e,n,s,o=r=>r){return e*o(.5-n*(.5-s))}function tg(e){return[-e[0],-e[1]]}function Bt(e,n){return[e[0]+n[0],e[1]+n[1]]}function _t(e,n){return[e[0]-n[0],e[1]-n[1]]}function kt(e,n){return[e[0]*n,e[1]*n]}function ng(e,n){return[e[0]/n,e[1]/n]}function bs(e){return[e[1],-e[0]]}function Vi(e,n){return e[0]*n[0]+e[1]*n[1]}function sg(e,n){return e[0]===n[0]&&e[1]===n[1]}function og(e){return Math.hypot(e[0],e[1])}function rg(e){return e[0]*e[0]+e[1]*e[1]}function Ui(e,n){return rg(_t(e,n))}function op(e){return ng(e,og(e))}function lg(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function ks(e,n,s){let o=Math.sin(s),r=Math.cos(s),l=e[0]-n[0],a=e[1]-n[1],i=l*r-a*o,c=l*o+a*r;return[i+n[0],c+n[1]]}function ll(e,n,s){return Bt(e,kt(_t(n,e),s))}function Ki(e,n,s){return Bt(e,kt(n,s))}var{min:Un,PI:ag}=Math,zi=.275,Bs=ag+1e-4;function ig(e,n={}){let{size:s=16,smoothing:o=.5,thinning:r=.5,simulatePressure:l=!0,easing:a=Y=>Y,start:i={},end:c={},last:u=!1}=n,{cap:d=!0,easing:f=Y=>Y*(2-Y)}=i,{cap:h=!0,easing:m=Y=>--Y*Y*Y+1}=c;if(e.length===0||s<=0)return[];let y=e[e.length-1].runningLength,_=i.taper===!1?0:i.taper===!0?Math.max(s,y):i.taper,w=c.taper===!1?0:c.taper===!0?Math.max(s,y):c.taper,b=Math.pow(s*o,2),A=[],x=[],E=e.slice(0,10).reduce((Y,se)=>{let ye=se.pressure;if(l){let Ae=Un(1,se.distance/s),tt=Un(1,1-Ae);ye=Un(1,Y+(tt-Y)*(Ae*zi))}return(Y+ye)/2},e[0].pressure),R=Wi(s,r,e[e.length-1].pressure,a),F,j=e[0].vector,ee=e[0].point,ue=ee,he=ee,we=ue,Ue=!1;for(let Y=0;Y<e.length;Y++){let{pressure:se}=e[Y],{point:ye,vector:Ae,distance:tt,runningLength:Le}=e[Y];if(Y<e.length-1&&y-Le<3)continue;if(r){if(l){let be=Un(1,tt/s),le=Un(1,1-be);se=Un(1,E+(le-E)*(be*zi))}R=Wi(s,r,se,a)}else R=s/2;F===void 0&&(F=R);let Qt=Le<_?f(Le/_):1,jn=y-Le<w?m((y-Le)/w):1;R=Math.max(.01,R*Math.min(Qt,jn));let C=(Y<e.length-1?e[Y+1]:e[Y]).vector,z=Y<e.length-1?Vi(Ae,C):1,K=Vi(Ae,j)<0&&!Ue,Z=z!==null&&z<0;if(K||Z){let be=kt(bs(j),R);for(let le=1/13,g=0;g<=1;g+=le)he=ks(_t(ye,be),ye,Bs*g),A.push(he),we=ks(Bt(ye,be),ye,Bs*-g),x.push(we);ee=he,ue=we,Z&&(Ue=!0);continue}if(Ue=!1,Y===e.length-1){let be=kt(bs(Ae),R);A.push(_t(ye,be)),x.push(Bt(ye,be));continue}let me=kt(bs(ll(C,Ae,z)),R);he=_t(ye,me),(Y<=1||Ui(ee,he)>b)&&(A.push(he),ee=he),we=Bt(ye,me),(Y<=1||Ui(ue,we)>b)&&(x.push(we),ue=we),E=se,j=Ae}let Ne=e[0].point.slice(0,2),Re=e.length>1?e[e.length-1].point.slice(0,2):Bt(e[0].point,[1,1]),Oe=[],De=[];if(e.length===1){if(!(_||w)||u){let Y=Ki(Ne,op(bs(_t(Ne,Re))),-(F||R)),se=[];for(let ye=1/13,Ae=ye;Ae<=1;Ae+=ye)se.push(ks(Y,Ne,Bs*2*Ae));return se}}else{if(!(_||w&&e.length===1))if(d)for(let se=1/13,ye=se;ye<=1;ye+=se){let Ae=ks(x[0],Ne,Bs*ye);Oe.push(Ae)}else{let se=_t(A[0],x[0]),ye=kt(se,.5),Ae=kt(se,.51);Oe.push(_t(Ne,ye),_t(Ne,Ae),Bt(Ne,Ae),Bt(Ne,ye))}let Y=bs(tg(e[e.length-1].vector));if(w||_&&e.length===1)De.push(Re);else if(h){let se=Ki(Re,Y,R);for(let ye=1/29,Ae=ye;Ae<1;Ae+=ye)De.push(ks(se,Re,Bs*3*Ae))}else De.push(Bt(Re,kt(Y,R)),Bt(Re,kt(Y,R*.99)),_t(Re,kt(Y,R*.99)),_t(Re,kt(Y,R)))}return A.concat(De,x.reverse(),Oe)}function cg(e,n={}){var s;let{streamline:o=.5,size:r=16,last:l=!1}=n;if(e.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:m,y,pressure:_=.5})=>[m,y,_]);if(i.length===2){let m=i[1];i=i.slice(0,-1);for(let y=1;y<5;y++)i.push(ll(i[0],m,y/4))}i.length===1&&(i=[...i,[...Bt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,f=c[0],h=i.length-1;for(let m=1;m<i.length;m++){let y=l&&m===h?i[m].slice(0,2):ll(f.point,i[m],a);if(sg(f.point,y))continue;let _=lg(y,f.point);if(d+=_,m<h&&!u){if(d<r)continue;u=!0}f={point:y,pressure:i[m][2]>=0?i[m][2]:.5,vector:op(_t(f.point,y)),distance:_,runningLength:d},c.push(f)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function ug(e,n={}){return ig(cg(e,n),n)}var pg=()=>({events:{},emit(e,...n){let s=this.events[e]||[];for(let o=0,r=s.length;o<r;o++)s[o](...n)},on(e,n){var s;return(s=this.events[e])!=null&&s.push(n)||(this.events[e]=[n]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(r=>n!==r)}}});function Mo(e,n){return e-n}function dg(e){return e<0?-1:1}function Ro(e){return[Math.abs(e),dg(e)]}function rp(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var fg=2,zt=fg,hs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var r;var n;const s=this.drauu.el,o=(r=this.drauu.options.coordinateScale)!=null?r:1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*o,y:(e.pageY-l.top)*o,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const a=l.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:a.x*o,y:a.y*o,pressure:e.pressure}}}createElement(e,n){var r;const s=document.createElementNS("http://www.w3.org/2000/svg",e),o=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",(r=o.fill)!=null?r:"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(zt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},hg=class extends hs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=ug(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((o,[r,l],a,i)=>{const[c,u]=i[(a+1)%i.length];return o.push(r,l,(r+c)/2,(l+u)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},yg=class extends hs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Ro(e.x-this.start.x),[o,r]=Ro(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,o);n=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[l,a]=[this.start.x,this.start.x+n*s].sort(Mo),[i,c]=[this.start.y,this.start.y+o*r].sort(Mo);this.attr("cx",(l+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-l)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function lp(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",n),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(r),s.appendChild(o),s}var mg=class extends hs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=rp(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(lp(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:s}=e;if(this.shiftPressed){const o=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let l=o/r;l=Math.round(l),Math.abs(l)<=1?(n=this.start.x+r*l,s=this.start.y+r):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},gg=class extends hs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Ro(e.x-this.start.x),[o,r]=Ro(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,o);n=l,o=l}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[l,a]=[this.start.x,this.start.x+n*s].sort(Mo),[i,c]=[this.start.y,this.start.y+o*r].sort(Mo);this.attr("x",l),this.attr("y",i),this.attr("width",a-l),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function vg(e,n){const s=e.x-n.x,o=e.y-n.y;return s*s+o*o}function _g(e,n,s){let o=n.x,r=n.y,l=s.x-o,a=s.y-r;if(l!==0||a!==0){const i=((e.x-o)*l+(e.y-r)*a)/(l*l+a*a);i>1?(o=s.x,r=s.y):i>0&&(o+=l*i,r+=a*i)}return l=e.x-o,a=e.y-r,l*l+a*a}function wg(e,n){let s=e[0];const o=[s];let r;for(let l=1,a=e.length;l<a;l++)r=e[l],vg(r,s)>n&&(o.push(r),s=r);return s!==r&&r&&o.push(r),o}function al(e,n,s,o,r){let l=o,a=0;for(let i=n+1;i<s;i++){const c=_g(e[i],e[n],e[s]);c>l&&(a=i,l=c)}l>o&&(a-n>1&&al(e,n,a,o,r),r.push(e[a]),s-a>1&&al(e,a,s,o,r))}function bg(e,n){const s=e.length-1,o=[e[0]];return al(e,0,s,n,o),o.push(e[s]),o}function Ji(e,n,s=!1){if(e.length<=2)return e;const o=n!==void 0?n*n:1;return e=s?e:wg(e,o),e=bg(e,o),e}var kg=class extends hs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=rp();const n=lp(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Ji(this.points,1,!0),this.count=0),this.attr("d",Gi(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Gi(Ji(this.points,1,!0))),!e.getTotalLength()))}};function Bg(e,n){const s=n.x-e.x,o=n.y-e.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Yi(e,n,s,o){const r=n||e,l=s||e,a=.2,i=Bg(r,l),c=i.angle+(o?Math.PI:0),u=i.length*a,d=e.x+Math.cos(c)*u,f=e.y+Math.sin(c)*u;return{x:d,y:f}}function xg(e,n,s){const o=Yi(s[n-1],s[n-2],e),r=Yi(e,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(zt)},${o.y.toFixed(zt)} ${r.x.toFixed(zt)},${r.y.toFixed(zt)} ${e.x.toFixed(zt)},${e.y.toFixed(zt)}`}function Gi(e){return e.reduce((n,s,o,r)=>o===0?`M ${s.x.toFixed(zt)},${s.y.toFixed(zt)}`:`${n} ${xg(s,o,r)}`,"")}var Ag=class extends hs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(s,o)=>{if(s&&s.length)for(let r=0;r<s.length;r++){const l=s[r];if(l.getTotalLength){const a=l.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=l.getPointAtLength(a*i/this.pathSubFactor),u=l.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:o||l})}}else l.children&&n(l.children,l)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,n){const s=e.x1,o=e.x2,r=n.x1,l=n.x2,a=e.y1,i=e.y2,c=n.y1,u=n.y2,d=(s-o)*(c-u)-(a-i)*(r-l),f=(s*i-a*o)*(r-l)-(s-o)*(r*u-c*l),h=(s*i-a*o)*(c-u)-(a-i)*(r*u-c*l),m=(y,_,w)=>y>=_&&y<=w?!0:y>=w&&y<=_;if(d===0)return!1;{const y={x:f/d,y:h/d};return m(y.x,s,o)&&m(y.y,a,i)&&m(y.x,r,l)&&m(y.y,c,u)}}};function $g(e){return{draw:new kg(e),stylus:new hg(e),line:new mg(e),rectangle:new gg(e),ellipse:new yg(e),eraseLine:new Ag(e)}}var Sg=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=pg(),this._models=$g(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),r=this.eventMove.bind(this),l=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Eg(e){return new Sg(e)}const il=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Lt=Dt("slidev-drawing-enabled",!1),D9=Dt("slidev-drawing-pinned",!1),Tg=U(!1),Cg=U(!1),Og=U(!1),zs=U(!1),Tn=Xh(Dt("slidev-drawing-brush",{color:il[0],size:4,mode:"stylus"})),Zi=U("stylus"),ap=S(()=>ke.drawings.syncAll||Rt.value);let Js=!1;const xs=S({get(){return Zi.value},set(e){Zi.value=e,e==="arrow"?(Tn.mode="line",Tn.arrowEnd=!0):(Tn.mode=e,Tn.arrowEnd=!1)}}),Dg=Ie({brush:Tn,acceptsInputTypes:S(()=>Lt.value?void 0:["pen"]),coordinateTransform:!1}),ot=zo(Eg(Dg));function Ig(){ot.clear(),ap.value&&ju(qe.value,"")}function ip(){var e;Cg.value=ot.canRedo(),Tg.value=ot.canUndo(),Og.value=!!((e=ot.el)!=null&&e.children.length)}function Pg(e){Js=!0;const n=Io[e||qe.value];n!=null?ot.load(n):ot.clear(),Js=!1}ot.on("changed",()=>{if(ip(),!Js){const e=ot.dump(),n=qe.value;(Io[n]||"")!==e&&ap.value&&ju(n,ot.dump())}});Yy(e=>{Js=!0,e[qe.value]!=null&&ot.load(e[qe.value]||""),Js=!1,ip()});Ge(()=>{de(qe,()=>{!ot.mounted||Pg()},{immediate:!0})});ot.on("start",()=>zs.value=!0);ot.on("end",()=>zs.value=!1);window.addEventListener("keydown",e=>{if(!Lt.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ot.redo():ot.undo():e.code==="Escape"?Lt.value=!1:e.code==="KeyL"&&n?xs.value="line":e.code==="KeyA"&&n?xs.value="arrow":e.code==="KeyS"&&n?xs.value="stylus":e.code==="KeyR"&&n?xs.value="rectangle":e.code==="KeyE"&&n?xs.value="ellipse":e.code==="KeyC"&&n?Ig():e.code.startsWith("Digit")&&n&&+e.code[5]<=il.length?Tn.color=il[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function je(...e){return S(()=>e.every(n=>Je(n)))}function pt(e){return S(()=>!Je(e))}const Xi=vm(),xr=Dt("slidev-color-schema","auto"),cl=S(()=>ke.colorSchema!=="auto"),Zl=S({get(){return cl.value?ke.colorSchema==="dark":xr.value==="auto"?Xi.value:xr.value==="dark"},set(e){cl.value||(xr.value=e===Xi.value?"auto":e?"dark":"light")}}),cp=Pu(Zl);Ct&&de(Zl,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const bo=U(1),ko=S(()=>We.length-1),yt=U(0),Xl=U(0);function Mg(){yt.value>bo.value&&(yt.value-=1)}function Rg(){yt.value<ko.value&&(yt.value+=1)}function Fg(){if(yt.value>bo.value){let e=yt.value-Xl.value;e<bo.value&&(e=bo.value),yt.value=e}}function Lg(){if(yt.value<ko.value){let e=yt.value+Xl.value;e>ko.value&&(e=ko.value),yt.value=e}}function Hg(){const{escape:e,space:n,shift:s,left:o,right:r,up:l,down:a,enter:i,d:c,g:u,o:d}=tp;let f=[{name:"next_space",key:je(n,pt(s)),fn:un,autoRepeat:!0},{name:"prev_space",key:je(n,s),fn:pn,autoRepeat:!0},{name:"next_right",key:je(r,pt(s),pt(st)),fn:un,autoRepeat:!0},{name:"prev_left",key:je(o,pt(s),pt(st)),fn:pn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:un,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:pn,autoRepeat:!0},{name:"next_down",key:je(a,pt(st)),fn:Gs,autoRepeat:!0},{name:"prev_up",key:je(l,pt(st)),fn:()=>Zs(!1),autoRepeat:!0},{name:"next_shift",key:je(r,s),fn:Gs,autoRepeat:!0},{name:"prev_shift",key:je(o,s),fn:()=>Zs(!1),autoRepeat:!0},{name:"toggle_dark",key:je(c,pt(Lt)),fn:cp},{name:"toggle_overview",key:je(d,pt(Lt)),fn:sp},{name:"hide_overview",key:je(e,pt(Lt)),fn:()=>st.value=!1},{name:"goto",key:je(u,pt(Lt)),fn:()=>Gn.value=!Gn.value},{name:"next_overview",key:je(r,st),fn:Rg},{name:"prev_overview",key:je(o,st),fn:Mg},{name:"up_overview",key:je(l,st),fn:Fg},{name:"down_overview",key:je(a,st),fn:Lg},{name:"goto_from_overview",key:je(i,st),fn:()=>{cs(yt.value),st.value=!1}}];const h=new Set(f.map(y=>y.name));if(f.filter(y=>y.name&&h.has(y.name)).length===0){const y=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(y),console.warn(y)}return f}const up=je(pt(Q0),pt(eg),Z0);function qg(e,n,s=!1){typeof e=="string"&&(e=tp[e]);const o=je(e,up);let r=0,l;const a=()=>{if(clearTimeout(l),!o.value){r=0;return}s&&(l=setTimeout(a,Math.max(1e3-r*250,150)),r++),n()};return de(o,a,{flush:"sync"})}function Ng(e,n){return tm(e,s=>{!up.value||s.repeat||n()})}function jg(){const e=Hg();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&qg(s.key,s.fn,s.autoRepeat)}),Ng("f",()=>np.toggle())}const Wg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vg=t("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Ug=[Vg];function Kg(e,n){return k(),V("svg",Wg,Ug)}const zg={name:"carbon-close",render:Kg};function Ql(e){var s,o;const n=(o=(s=e==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:o.no;return n!=null?`slidev-page-${n}`:""}const pp=_e({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;D(M);const s=U(),o=Om(s),r=S(()=>n.width?n.width:o.width.value),l=S(()=>n.width?n.width/an:o.height.value);n.width&&ds(()=>{s.value&&(s.value.style.width=`${r.value}px`,s.value.style.height=`${l.value}px`)});const a=S(()=>r.value/l.value),i=S(()=>n.scale?n.scale:a.value<an?r.value/cn:l.value*an/cn),c=S(()=>({height:`${Jl}px`,width:`${cn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=S(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ht(Hu,i),(d,f)=>(k(),V("div",{id:"slide-container",ref_key:"root",ref:s,class:Me(B(u))},[t("div",{id:"slide-content",style:Ve(B(c))},[at(d.$slots,"default")],4),at(d.$slots,"controls")],2))}});const ea=_e({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const s=Ft(e,"clicks",n),o=Ft(e,"clicksElements",n),r=Ft(e,"clicksDisabled",n),l=Ft(e,"clicksOrderMap",n);o.value.length=0,ht(My,e.route),ht(Ry,e.context),ht(Cs,s),ht(Os,r),ht(An,o),ht(Xr,l)},render(){var e,n;return this.$props.is?Xe(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),Jg=["innerHTML"],Yg=_e({__name:"DrawingPreview",props:{page:null},setup(e){return D(M),(n,s)=>B(Io)[e.page]?(k(),V("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:B(Io)[e.page]},null,8,Jg)):fe("v-if",!0)}}),Gg={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Zg=["onClick"],Xg=_e({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:n}){const s=e;D(M);const o=Ft(s,"modelValue",n);function r(){o.value=!1}function l(m){cs(m),r()}function a(m){return m===yt.value}const i=rl.smaller("xs"),c=rl.smaller("sm"),u=4*16*2,d=2*16,f=S(()=>i.value?Pn.width.value-u:c.value?(Pn.width.value-u-d)/2:300),h=S(()=>Math.floor((Pn.width.value-u)/(f.value+d)));return ds(()=>{yt.value=qe.value,Xl.value=h.value}),(m,y)=>{const _=zg;return k(),V(Se,null,[er(t("div",Gg,[t("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ve(`grid-template-columns: repeat(auto-fit,minmax(${B(f)}px,1fr))`)},[(k(!0),V(Se,null,eo(B(We).slice(0,-1),(w,b)=>(k(),V("div",{key:w.path,class:"relative"},[t("div",{class:Me(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(b+1)}]),onClick:A=>l(+w.path)},[(k(),q(pp,{key:w.path,width:B(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:P(()=>[H(B(ea),{is:w==null?void 0:w.component,"clicks-disabled":!0,class:Me(B(Ql)(w)),route:w,context:"overview"},null,8,["is","class","route"]),H(Yg,{page:+w.path},null,8,["page"])]),_:2},1032,["width"]))],10,Zg),t("div",{class:"absolute top-0 opacity-50",style:Ve(`left: ${B(f)+5}px`)},Yt(b+1),5)]))),128))],4)],512),[[Cu,B(o)]]),B(o)?(k(),V("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[H(_)])):fe("v-if",!0)],64)}}});const Qg="/painless-authentication-with-access-token/assets/logo.b72bde5d.png",ev={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},tv=_e({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const s=e;D(M);const o=Ft(s,"modelValue",n);function r(){o.value=!1}return(l,a)=>(k(),q(fu,null,[B(o)?(k(),V("div",ev,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>r())}),t("div",{class:Me(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[at(l.$slots,"default")],2)])):fe("v-if",!0)],1024))}}),nv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},sv=["innerHTML"],ov=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:Qg,alt:"Slidev"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),p("dev ")])])],-1),rv=_e({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const s=e;D(M);const o=Ft(s,"modelValue",n),r=S(()=>typeof ke.info=="string");return(l,a)=>(k(),q(tv,{modelValue:B(o),"onUpdate:modelValue":a[0]||(a[0]=i=>xe(o)?o.value=i:null),class:"px-6 py-4"},{default:P(()=>[t("div",nv,[B(r)?(k(),V("div",{key:0,class:"mb-4",innerHTML:B(ke).info},null,8,sv)):fe("v-if",!0),ov])]),_:1},8,["modelValue"]))}});const lv=["disabled","onKeydown"],av=_e({__name:"Goto",setup(e){D(M);const n=U(),s=U(""),o=S(()=>{if(s.value.startsWith("/"))return!!We.find(a=>a.path===s.value.substring(1));{const a=+s.value;return!isNaN(a)&&a>0&&a<=Cp.value}});function r(){o.value&&(s.value.startsWith("/")?cs(s.value.substring(1)):cs(+s.value)),l()}function l(){Gn.value=!1}return de(Gn,async a=>{var i,c;a?(await Ge(),s.value="",(i=n.value)==null||i.focus()):(c=n.value)==null||c.blur()}),de(s,a=>{a.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(a,i)=>(k(),V("div",{id:"slidev-goto-dialog",class:Me(["fixed right-5 bg-main transform transition-all",B(Gn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[er(t("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!B(Gn),class:Me(["outline-none bg-transparent",{"text-red-400":!B(o)&&s.value}]),placeholder:"Goto...",onKeydown:[ti(r,["enter"]),ti(l,["escape"])],onBlur:l},null,42,lv),[[Lh,s.value]])],2))}}),iv=_e({__name:"Controls",setup(e){D(M);const n=qt(),s=qt();return(o,r)=>(k(),V(Se,null,[H(Xg,{modelValue:B(st),"onUpdate:modelValue":r[0]||(r[0]=l=>xe(st)?st.value=l:null)},null,8,["modelValue"]),H(av),B(n)?(k(),q(B(n),{key:0})):fe("v-if",!0),B(s)?(k(),q(B(s),{key:1,modelValue:B(kr),"onUpdate:modelValue":r[1]||(r[1]=l=>xe(kr)?kr.value=l:null)},null,8,["modelValue"])):fe("v-if",!0),B(ke).info?(k(),q(rv,{key:2,modelValue:B(Ps),"onUpdate:modelValue":r[2]||(r[2]=l=>xe(Ps)?Ps.value=l:null)},null,8,["modelValue"])):fe("v-if",!0)],64))}}),cv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},uv=t("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),pv=[uv];function dv(e,n){return k(),V("svg",cv,pv)}const fv={name:"carbon-settings-adjust",render:dv},hv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yv=t("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),mv=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),gv=[yv,mv];function vv(e,n){return k(),V("svg",hv,gv)}const _v={name:"carbon-information",render:vv},wv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bv=t("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),kv=[bv];function Bv(e,n){return k(),V("svg",wv,kv)}const xv={name:"carbon-download",render:Bv},Av={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$v=t("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Sv=t("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Ev=[$v,Sv];function Tv(e,n){return k(),V("svg",Av,Ev)}const Cv={name:"carbon-user-speaker",render:Tv},Ov={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Dv=t("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Iv=t("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Pv=[Dv,Iv];function Mv(e,n){return k(),V("svg",Ov,Pv)}const Rv={name:"carbon-presentation-file",render:Mv},Fv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lv=t("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Hv=[Lv];function qv(e,n){return k(),V("svg",Fv,Hv)}const Nv={name:"carbon-pen",render:qv},jv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Wv=t("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Vv=t("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Uv=[Wv,Vv];function Kv(e,n){return k(),V("svg",jv,Uv)}const zv={name:"ph-cursor-duotone",render:Kv},Jv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Yv=t("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Gv=[Yv];function Zv(e,n){return k(),V("svg",Jv,Gv)}const dp={name:"ph-cursor-fill",render:Zv},Xv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qv=t("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),e_=[Qv];function t_(e,n){return k(),V("svg",Xv,e_)}const n_={name:"carbon-sun",render:t_},s_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o_=t("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),r_=[o_];function l_(e,n){return k(),V("svg",s_,r_)}const a_={name:"carbon-moon",render:l_},i_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c_=t("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),u_=[c_];function p_(e,n){return k(),V("svg",i_,u_)}const d_={name:"carbon-apps",render:p_},f_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h_=t("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),y_=[h_];function m_(e,n){return k(),V("svg",f_,y_)}const g_={name:"carbon-arrow-right",render:m_},v_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},__=t("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),w_=[__];function b_(e,n){return k(),V("svg",v_,w_)}const k_={name:"carbon-arrow-left",render:b_},B_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x_=t("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),A_=[x_];function $_(e,n){return k(),V("svg",B_,A_)}const S_={name:"carbon-maximize",render:$_},E_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T_=t("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),C_=[T_];function O_(e,n){return k(),V("svg",E_,C_)}const D_={name:"carbon-minimize",render:O_},I_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},P_=t("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),M_=[P_];function R_(e,n){return k(),V("svg",I_,M_)}const F_={name:"carbon-checkmark",render:R_},L_={class:"select-list"},H_={class:"title"},q_={class:"items"},N_=["onClick"],j_=_e({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const s=e;D(M);const o=Ft(s,"modelValue",n,{passive:!0});return(r,l)=>{const a=F_;return k(),V("div",L_,[t("div",H_,Yt(e.title),1),t("div",q_,[(k(!0),V(Se,null,eo(e.items,i=>(k(),V("div",{key:i.value,class:Me(["item",{active:B(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[H(a,{class:Me(["text-green-500",{"opacity-0":B(o)!==i.value}])},null,8,["class"]),p(" "+Yt(i.display||i.value),1)],10,N_))),128))])])}}});const jt=(e,n)=>{const s=e.__vccOpts||e;for(const[o,r]of n)s[o]=r;return s},W_=jt(j_,[["__scopeId","data-v-7dd0eaca"]]),V_={class:"text-sm"},U_=_e({__name:"Settings",setup(e){D(M);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(k(),V("div",V_,[H(W_,{modelValue:B(wo),"onUpdate:modelValue":o[0]||(o[0]=r=>xe(wo)?wo.value=r:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),K_={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},z_=_e({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const s=e;D(M);const o=Ft(s,"modelValue",n,{passive:!0}),r=U();return Qy(r,()=>{o.value=!1}),(l,a)=>(k(),V("div",{ref_key:"el",ref:r,class:"flex relative"},[t("button",{class:Me({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>o.value=!B(o))},[at(l.$slots,"button",{class:Me({disabled:e.disabled})})],2),(k(),q(fu,null,[B(o)?(k(),V("div",K_,[at(l.$slots,"menu")])):fe("v-if",!0)],1024))],512))}}),J_={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},yo={__name:"VerticalDivider",setup(e){return D(M),(n,s)=>(k(),V("div",J_))}},Y_={render(){return[]}},G_={class:"icon-btn"},Z_={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},X_={class:"my-auto"},Q_={class:"opacity-50"},e1=_e({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;D(M);const s=rl.smaller("md"),{isFullscreen:o,toggle:r}=np,l=S(()=>pl.value?`?password=${pl.value}`:""),a=S(()=>`/presenter/${qe.value}${l.value}`),i=S(()=>`/${qe.value}${l.value}`),c=U(),u=()=>{c.value&&ss.value&&c.value.contains(ss.value)&&ss.value.blur()},d=S(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=qt(),h=qt();return Fn(()=>import("./DrawingControls.1eb3fab1.js"),["assets/DrawingControls.1eb3fab1.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.fac5f5e1.js"]).then(m=>h.value=m.default),(m,y)=>{const _=D_,w=S_,b=k_,A=g_,x=d_,E=a_,R=n_,F=dp,j=zv,ee=Nv,ue=Rv,he=Eo("RouterLink"),we=Cv,Ue=xv,Ne=_v,Re=fv;return k(),V("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[t("div",{class:Me(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",B(d)]),onMouseleave:u},[B(Ut)?fe("v-if",!0):(k(),V("button",{key:0,class:"icon-btn",onClick:y[0]||(y[0]=(...Oe)=>B(r)&&B(r)(...Oe))},[B(o)?(k(),q(_,{key:0})):(k(),q(w,{key:1}))])),t("button",{class:Me(["icon-btn",{disabled:!B(e3)}]),onClick:y[1]||(y[1]=(...Oe)=>B(pn)&&B(pn)(...Oe))},[H(b)],2),t("button",{class:Me(["icon-btn",{disabled:!B(Qb)}]),title:"Next",onClick:y[2]||(y[2]=(...Oe)=>B(un)&&B(un)(...Oe))},[H(A)],2),B(Ut)?fe("v-if",!0):(k(),V("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:y[3]||(y[3]=Oe=>B(sp)())},[H(x)])),B(cl)?fe("v-if",!0):(k(),V("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:y[4]||(y[4]=Oe=>B(cp)())},[B(Zl)?(k(),q(E,{key:0})):(k(),q(R,{key:1}))])),H(yo),B(Ut)?fe("v-if",!0):(k(),V(Se,{key:3},[!B(Rt)&&!B(s)&&B(f)?(k(),V(Se,{key:0},[H(B(f)),H(yo)],64)):fe("v-if",!0),B(Rt)?(k(),V("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:y[5]||(y[5]=Oe=>Br.value=!B(Br))},[B(Br)?(k(),q(F,{key:0})):(k(),q(j,{key:1,class:"opacity-50"}))])):fe("v-if",!0)],64)),!B(ke).drawings.presenterOnly&&!B(Ut)?(k(),V(Se,{key:4},[t("button",{class:"icon-btn relative",title:"Drawing",onClick:y[6]||(y[6]=Oe=>Lt.value=!B(Lt))},[H(ee),B(Lt)?(k(),V("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ve({background:B(Tn).color})},null,4)):fe("v-if",!0)]),H(yo)],64)):fe("v-if",!0),B(Ut)?fe("v-if",!0):(k(),V(Se,{key:5},[B(Rt)?(k(),q(he,{key:0,to:B(i),class:"icon-btn",title:"Play Mode"},{default:P(()=>[H(ue)]),_:1},8,["to"])):fe("v-if",!0),B(Gb)?(k(),q(he,{key:1,to:B(a),class:"icon-btn",title:"Presenter Mode"},{default:P(()=>[H(we)]),_:1},8,["to"])):fe("v-if",!0),fe("v-if",!0)],64)),(k(),V(Se,{key:6},[B(ke).download?(k(),V("button",{key:0,class:"icon-btn",onClick:y[8]||(y[8]=(...Oe)=>B(dl)&&B(dl)(...Oe))},[H(Ue)])):fe("v-if",!0)],64)),!B(Rt)&&B(ke).info&&!B(Ut)?(k(),V("button",{key:7,class:"icon-btn",onClick:y[9]||(y[9]=Oe=>Ps.value=!B(Ps))},[H(Ne)])):fe("v-if",!0),!B(Rt)&&!B(Ut)?(k(),q(z_,{key:8},{button:P(()=>[t("button",G_,[H(Re)])]),menu:P(()=>[H(U_)]),_:1})):fe("v-if",!0),B(Ut)?fe("v-if",!0):(k(),q(yo,{key:9})),t("div",Z_,[t("div",X_,[p(Yt(B(qe))+" ",1),t("span",Q_,"/ "+Yt(B(Cp)),1)])]),H(B(Y_))],34)],512)}}}),fp={render(){return[]}},t1={__name:"Progress",setup(e){const n=D(M);return(s,o)=>(k(),V("div",{class:"absolute bottom-0 -left-2px h-1 progress",style:Ve(`width: ${Math.floor(100*(B(n).nav.currentPage/(B(n).nav.total-1)))}%;`)},null,4))}},n1="/painless-authentication-with-access-token/images/symfonycon-logo-transparent.png",s1={key:0},o1={class:"absolute bottom-3 left-4 text-gray-500 font-300"},r1=t("img",{src:n1,alt:"SymfonyCon Logo",class:"absolute bottom-7 right-10 w-32 conference-logo"},null,-1),l1={__name:"global-bottom",setup(e){const n=D(M);return(s,o)=>{const r=t1;return B(n).nav.currentPage>1?(k(),V("footer",s1,[t("span",o1,Yt(B(n).nav.currentPage),1),H(r),r1])):fe("v-if",!0)}}},hp={render(){return[Xe(l1)]}},a1={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},i1=_e({__name:"PresenterMouse",setup(e){return D(M),(n,s)=>{const o=dp;return B(vr).cursor?(k(),V("div",a1,[H(o,{class:"absolute",style:Ve({left:`${B(vr).cursor.x}%`,top:`${B(vr).cursor.y}%`})},null,8,["style"])])):fe("v-if",!0)}}}),c1=_e({__name:"SlidesShow",props:{context:null},setup(e){D(M),de(ft,()=>{var s,o;((s=ft.value)==null?void 0:s.meta)&&ft.value.meta.preload!==!1&&(ft.value.meta.__preloaded=!0),((o=Ar.value)==null?void 0:o.meta)&&Ar.value.meta.preload!==!1&&(Ar.value.meta.__preloaded=!0)},{immediate:!0});const n=qt();return Fn(()=>import("./DrawingLayer.9c97ff03.js"),[]).then(s=>n.value=s.default),(s,o)=>(k(),V(Se,null,[fe(" Global Bottom "),H(B(hp)),fe(" Slides "),(k(!0),V(Se,null,eo(B(We),r=>{var l,a;return k(),V(Se,{key:r.path},[((l=r.meta)==null?void 0:l.__preloaded)||r===B(ft)?er((k(),q(B(ea),{key:0,is:r==null?void 0:r.component,clicks:r===B(ft)?B(Tt):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Me(B(Ql)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Cu,r===B(ft)]]):fe("v-if",!0)],64)}),128)),fe(" Global Top "),H(B(fp)),B(n)?(k(),q(B(n),{key:0})):fe("v-if",!0),B(Rt)?fe("v-if",!0):(k(),q(i1,{key:1}))],64))}}),u1=_e({__name:"Play",setup(e){D(M),jg();const n=U();function s(l){var a;ji.value||((a=l.target)==null?void 0:a.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?un():pn())}s3(n);const o=S(()=>X0.value||ji.value);qt();const r=qt();return Fn(()=>import("./DrawingControls.1eb3fab1.js"),["assets/DrawingControls.1eb3fab1.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.fac5f5e1.js"]).then(l=>r.value=l.default),(l,a)=>(k(),V(Se,null,[t("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:Ve(B(qu))},[H(pp,{class:"w-full h-full",style:Ve({background:"var(--slidev-slide-container-background, black)"}),width:B(ra)?B(Pn).width.value:void 0,scale:B(wo),onPointerdown:s},{default:P(()=>[H(c1,{context:"slide"})]),controls:P(()=>[t("div",{class:Me(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[B(o)?"opacity-100 right-0":"opacity-0 p-2",B(zs)?"pointer-events-none":""]])},[H(e1,{class:"m-auto",persist:B(o)},null,8,["persist"])],2),!B(ke).drawings.presenterOnly&&!B(Ut)&&B(r)?(k(),q(B(r),{key:0,class:"ml-0"})):fe("v-if",!0)]),_:1},8,["style","width","scale"]),fe("v-if",!0)],4),H(iv)],64))}});function yp(e){const n=S(()=>e.value.path),s=S(()=>We.length-1),o=S(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),r=S(()=>rr(o.value)),l=S(()=>We.find(h=>h.path===`${o.value}`)),a=S(()=>{var h,m,y;return(y=(m=(h=l.value)==null?void 0:h.meta)==null?void 0:m.slide)==null?void 0:y.id}),i=S(()=>{var h,m;return((m=(h=l.value)==null?void 0:h.meta)==null?void 0:m.layout)||(o.value===1?"cover":"default")}),c=S(()=>We.find(h=>h.path===`${Math.min(We.length,o.value+1)}`)),u=S(()=>We.filter(h=>{var m,y;return(y=(m=h.meta)==null?void 0:m.slide)==null?void 0:y.title}).reduce((h,m)=>(la(h,m),h),[])),d=S(()=>aa(u.value,l.value)),f=S(()=>ia(d.value));return{route:e,path:n,total:s,currentPage:o,currentPath:r,currentRoute:l,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:f}}function mp(e,n,s){const o=U(0);Ge(()=>{mt.afterEach(async()=>{await Ge(),o.value+=1})});const r=S(()=>{var c,u;return o.value,((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),l=S(()=>{var c,u,d;return+((d=(u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?d:r.value.length)}),a=S(()=>s.value<We.length-1||e.value<l.value),i=S(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:l,hasNext:a,hasPrev:i}}const p1=["id"],Qi=_e({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:n}){const s=e,o=Ft(s,"clicksElements",n),r=S(()=>({height:`${Jl}px`,width:`${cn}px`})),l=qt();Fn(()=>import("./DrawingPreview.6d347b31.js"),[]).then(u=>l.value=u.default);const a=S(()=>s.clicks),i=mp(a,s.nav.currentRoute,s.nav.currentPage),c=S(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return ht(M,Ie({nav:{...s.nav,...i},configs:ke,themeConfigs:S(()=>ke.themeConfig)})),(u,d)=>{var f;return k(),V("div",{id:B(c),class:"slide-container",style:Ve(B(r))},[H(B(hp)),H(B(ea),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":B(o),"onUpdate:clicks-elements":d[0]||(d[0]=h=>xe(o)?o.value=h:null),clicks:B(a),"clicks-disabled":!1,class:Me(B(Ql)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),B(l)?(k(),q(B(l),{key:0,page:+e.route.path},null,8,["page"])):fe("v-if",!0),H(B(fp))],12,p1)}}}),d1=_e({__name:"PrintSlide",props:{route:null},setup(e){var l;const n=e;D(M);const s=Ie(((l=n.route.meta)==null?void 0:l.__clicksElements)||[]),o=S(()=>n.route),r=yp(o);return(a,i)=>(k(),V(Se,null,[H(Qi,{"clicks-elements":s,"onUpdate:clicks-elements":i[0]||(i[0]=c=>xe(s)?s.value=c:null),clicks:0,nav:B(r),route:B(o)},null,8,["clicks-elements","nav","route"]),B(Ms)?fe("v-if",!0):(k(!0),V(Se,{key:0},eo(s.length,c=>(k(),q(Qi,{key:c,clicks:c,nav:B(r),route:B(o)},null,8,["clicks","nav","route"]))),128))],64))}}),f1={id:"print-content"},h1=_e({__name:"PrintContainer",props:{width:null},setup(e){const n=e;D(M);const s=S(()=>n.width),o=S(()=>n.width/an),r=S(()=>s.value/o.value),l=S(()=>r.value<an?s.value/cn:o.value*an/cn),a=We.slice(0,-1),i=S(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ht(Hu,l),(c,u)=>(k(),V("div",{id:"print-container",class:Me(B(i))},[t("div",f1,[(k(!0),V(Se,null,eo(B(a),d=>(k(),q(d1,{key:d.path,route:d},null,8,["route"]))),128))]),at(c.$slots,"controls")],2))}});const y1=_e({__name:"Print",setup(e){D(M);function n(s,{slots:o}){if(o.default)return Xe("style",o.default())}return ds(()=>{ra?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,o)=>(k(),V(Se,null,[H(n,null,{default:P(()=>[p(" @page { size: "+Yt(B(cn))+"px "+Yt(B(Jl))+"px; margin: 0px; } ",1)]),_:1}),t("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Ve(B(qu))},[H(h1,{class:"w-full h-full",style:Ve({background:"var(--slidev-slide-container-background, black)"}),width:B(Pn).width.value},null,8,["style","width"])],4)],64))}});const m1={class:"slidev-layout end"},g1={__name:"end",setup(e){return D(M),(n,s)=>(k(),V("div",m1," END "))}},v1=jt(g1,[["__scopeId","data-v-ab32435f"]]),_1={href:"{{ link }}"},w1=t("a",{href:"https://unsplash.com/"},"Unsplash",-1),gp=_e({__name:"Credits",props:{link:{default:""},name:{default:""},side:{default:"right"}},setup(e){const n=e;D(M),U(n.link);const s=U(n.name),o=U(n.side);return(r,l)=>(k(),V("small",{class:Me(["absolute bottom-0 p-1 bg-dark-800 bg-opacity-90 font-light text-xs text-slate-200 opacity-60",`${o.value}-0`])},[p(" Photo by "),t("a",_1,Yt(s.value),1),p(" on "),w1],2))}}),b1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k1=t("path",{fill:"currentColor",d:"M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.436 15.436 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z"},null,-1),B1=[k1];function x1(e,n){return k(),V("svg",b1,B1)}const A1={name:"cib-github",render:x1},$1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S1=t("path",{fill:"currentColor",d:"M31.937 6.093a13.359 13.359 0 0 1-3.765 1.032a6.603 6.603 0 0 0 2.885-3.631a13.683 13.683 0 0 1-4.172 1.579a6.56 6.56 0 0 0-11.178 5.973c-5.453-.255-10.287-2.875-13.52-6.833a6.458 6.458 0 0 0-.891 3.303a6.555 6.555 0 0 0 2.916 5.457a6.518 6.518 0 0 1-2.968-.817v.079a6.567 6.567 0 0 0 5.26 6.437a6.758 6.758 0 0 1-1.724.229c-.421 0-.823-.041-1.224-.115a6.59 6.59 0 0 0 6.14 4.557a13.169 13.169 0 0 1-8.135 2.801a13.01 13.01 0 0 1-1.563-.088a18.656 18.656 0 0 0 10.079 2.948c12.067 0 18.661-9.995 18.661-18.651c0-.276 0-.557-.021-.839a13.132 13.132 0 0 0 3.281-3.396z"},null,-1),E1=[S1];function T1(e,n){return k(),V("svg",$1,E1)}const C1={name:"cib-twitter",render:T1},O1={class:"slidev-icon",viewBox:"0 0 512 512",width:"1.2em",height:"1.2em"},D1=t("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm133.74 143.54c-11.47.41-19.4-6.45-19.77-16.87c-.27-9.18 6.68-13.44 6.53-18.85c-.23-6.55-10.16-6.82-12.87-6.67c-39.78 1.29-48.59 57-58.89 113.85c21.43 3.15 36.65-.72 45.14-6.22c12-7.75-3.34-15.72-1.42-24.56c4-18.16 32.55-19 32 5.3c-.36 17.86-25.92 41.81-77.6 35.7c-10.76 59.52-18.35 115-58.2 161.72c-29 34.46-58.4 39.82-71.58 40.26c-24.65.85-41-12.31-41.58-29.84c-.56-17 14.45-26.26 24.31-26.59c21.89-.75 30.12 25.67 14.88 34c-12.09 9.71.11 12.61 2.05 12.55c10.42-.36 17.34-5.51 22.18-9c24-20 33.24-54.86 45.35-118.35c8.19-49.66 17-78 18.23-82c-16.93-12.75-27.08-28.55-49.85-34.72c-15.61-4.23-25.12-.63-31.81 7.83c-7.92 10-5.29 23 2.37 30.7l12.63 14c15.51 17.93 24 31.87 20.8 50.62c-5.06 29.93-40.72 52.9-82.88 39.94c-36-11.11-42.7-36.56-38.38-50.62c7.51-24.15 42.36-11.72 34.62 13.6c-2.79 8.6-4.92 8.68-6.28 13.07c-4.56 14.77 41.85 28.4 51-1.39c4.47-14.52-5.3-21.71-22.25-39.85c-28.47-31.75-16-65.49 2.95-79.67C204.23 140.13 251.94 197 262 205.29c37.17-109 100.53-105.46 102.43-105.53c25.16-.81 44.19 10.59 44.83 28.65c.25 7.69-4.17 22.59-19.52 23.13z"},null,-1),I1=[D1];function P1(e,n){return k(),V("svg",O1,I1)}const M1={name:"fa-brands-symfony",render:P1},R1="/painless-authentication-with-access-token/images/symfonycon-logo-darkmode-transparent.png",F1="/painless-authentication-with-access-token/images/me.jpg",L1="/painless-authentication-with-access-token/images/jolicode.svg";function ec(e){return e.startsWith("/")?"/painless-authentication-with-access-token/"+e.slice(1):e}function vp(e,n=!1){const s=e&&e[0]==="#"&&e.startsWith("rgb"),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${ec(e)})`:`url("${ec(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const H1=_e({__name:"intro-image",props:{image:{type:String}},setup(e){const n=e;D(M);const s=S(()=>vp(n.image));return(o,r)=>(k(),V("div",{class:"slidev-layout w-full h-full intro-image",style:Ve(B(s))},[at(o.$slots,"default")],4))}}),q1=t("div",{class:"absolute top-10 right-10 text-slate-200 text-right font-serif"},[t("h1",null,"Painless Authentication"),t("h2",null,"with Access Tokens")],-1),N1=t("img",{src:R1,alt:"SymfonyCon Logo",class:"absolute bottom-7 right-10 w-32"},null,-1),j1={class:"absolute bottom-16 left-10 text-slate-200 font-serif"},W1=t("img",{class:"filter drop-shadow-md ml-auto ml-0 mb-4 clothoid-corner",src:F1,alt:"Mathieu Santostefano",width:"130"},null,-1),V1=t("h2",null,"Mathieu Santostefano",-1),U1=t("p",null,[p("\u{1F9D1}\u200D\u{1F4BB} Web developer at\xA0"),t("img",{src:L1,width:"120",class:"inline"})],-1),K1=t("a",{href:"https://twitter.com/welcomattic"},"@welcomattic",-1),z1=t("a",{href:"https://github.com/welcomattic"},"@welcomattic",-1),J1={__name:"1",setup(e){const n={layout:"intro-image",image:"images/cover.jpg",theme:"apple-basic",highlighter:"shiki",lineNumbers:!0,favicon:"symfony.ico",info:`## SymfonyCon Disneyland Paris 2022
`,drawings:{persist:!1},colorSchema:"light",fonts:{provider:"none",local:"SF Pro Display,Josefin Sans",sans:"SF Pro Display",serif:"Josefin Sans"},srcSequence:"content/cover.md"};return D(M),(s,o)=>{const r=M1,l=C1,a=A1,i=gp;return k(),q(H1,Q(X(n)),{default:P(()=>[q1,N1,t("div",j1,[W1,V1,U1,t("p",null,[H(r),p(" Symfony Core Team Member")]),t("p",null,[H(l,{class:"text-sky-500"}),p(" Twitter "),K1]),t("p",null,[H(a),p(" GitHub "),z1])]),H(i,{link:"https://unsplash.com/@kellysikkema",name:"Kelly Sikkema",side:"left"})]),_:1},16)}}},Y1="/painless-authentication-with-access-token/images/core-team-mail.png",G1={class:"slidev-layout center h-full grid place-content-center statement"},Z1={class:"my-auto"},ta={__name:"statement",setup(e){return D(M),(n,s)=>(k(),V("div",G1,[t("div",Z1,[at(n.$slots,"default")])]))}},X1=t("h1",null,"\u{1F389} On nov. 18 2021, I received an email to join the Core Team",-1),Q1=t("img",{src:Y1,class:"-mt-8 w-8/12 mx-auto"},null,-1),e8={__name:"2",setup(e){const n={layout:"statement"};return D(M),(s,o)=>(k(),q(ta,Q(X(n)),{default:P(()=>[X1,Q1]),_:1},16))}},t8=_e({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var l,a;const e=Ma("click"),n=Ma("after"),s=(i,c,u)=>er(i,[[c,this.at!=null?+this.at+u:null,"",{hide:this.hide,fade:this.fade}]]);let o=(a=(l=this.$slots).default)==null?void 0:a.call(l);if(!o)return;o=Ly(o);const r=i=>i.map((c,u)=>Mn(c)?s(Xe(c),u%this.every===0?e:n,Math.floor(u/this.every)):c);return o.length===1&&["ul","ol"].includes(o[0].type)&&Array.isArray(o[0].children)?Xe(o[0],{},[r(o[0].children)]):r(o)}}),no=_e({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return H(t8,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),n8={class:"grid grid-cols-2 w-full h-full"},s8=_e({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const n=e;D(M);const s=S(()=>vp(n.image));return(o,r)=>(k(),V("div",n8,[t("div",{class:Me(["slidev-layout default image-right",n.class])},[at(o.$slots,"default")],2),t("div",{class:"my-14 mr-14",style:Ve(B(s))},null,4)]))}}),o8=t("h1",null,"\u{1F37D} On the menu",-1),r8=t("ol",null,[t("li",null,[p("Access token, "),t("strong",null,"what is it?")])],-1),l8=t("ol",{start:"2"},[t("li",null,[p("Implementation with "),t("strong",null,"Symfony 6.1")])],-1),a8=t("ol",{start:"3"},[t("li",null,"Time travel")],-1),i8=t("ol",{start:"4"},[t("li",null,[p("Implementation with "),t("strong",null,"Symfony 6.2")])],-1),c8=t("ol",{start:"5"},[t("li",null,"Code examples")],-1),u8=t("ol",{start:"6"},[t("li",null,"In the future?")],-1),p8={__name:"3",setup(e){const n={layout:"image-right",image:"/images/menu.jpg"};return D(M),(s,o)=>{const r=no,l=gp;return k(),q(s8,Q(X(n)),{default:P(()=>[o8,H(r,null,{default:P(()=>[r8]),_:1}),H(r,null,{default:P(()=>[l8]),_:1}),H(r,null,{default:P(()=>[a8]),_:1}),H(r,null,{default:P(()=>[i8]),_:1}),H(r,null,{default:P(()=>[c8]),_:1}),H(r,null,{default:P(()=>[u8]),_:1}),H(l,{link:"https://unsplash.com/@nate_dumlao",name:"Nathan Dumlao",side:"right"})]),_:1},16)}}},d8={class:"slidev-layout h-full grid section"},f8={class:"my-auto"},mn={__name:"section",setup(e){return D(M),(n,s)=>(k(),V("div",d8,[t("div",f8,[at(n.$slots,"default")])]))}},h8=t("h1",null,"\u{1F510} Who has Access Token authentication in their app?",-1),y8={__name:"4",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),q(mn,Q(X(n)),{default:P(()=>[h8]),_:1},16))}},m8=t("h1",null,"\u{1F512} Who is working with the new Symfony Security?",-1),g8=t("p",null,[p("Thank you for it, "),t("a",{href:"https://github.com/WouterJ",target:"_blank",rel:"noopener"},"Wouter"),p(" \u{1F64F}")],-1),v8={__name:"5",setup(e){const n={layout:"section"};return D(M),(s,o)=>{const r=no;return k(),q(mn,Q(X(n)),{default:P(()=>[m8,H(r,null,{default:P(()=>[g8]),_:1})]),_:1},16)}}},_8={class:"slidev-layout default"},pe={__name:"default",setup(e){return D(M),(n,s)=>(k(),V("div",_8,[at(n.$slots,"default")]))}},w8=t("h1",null,"\u2728 The New Security System",-1),b8=t("ul",null,[t("li",null,"Removed everything but Guards"),t("li",null,"Moved to an event-based system"),t("li",null,"Authenticator based: instantiate a Passport with Badges")],-1),k8=t("blockquote",null,[t("p",null,"Your job is to use Authenticator or implement your own")],-1),B8={__name:"6",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[w8,b8,k8]),_:1},16))}},x8=t("h1",null,"\u2728 The New Security System",-1),A8=t("h2",null,"Event-based system",-1),$8=t("ul",null,[t("li",null,[p("You can interact on different levels "),t("ul",null,[t("li",null,[t("code",null,"CheckPassportEvent")]),t("li",null,[t("code",null,"AuthenticationTokenCreatedEvent")]),t("li",null,[t("code",null,"AuthenticationSuccessEvent")]),t("li",null,[t("code",null,"LoginSuccessEvent")]),t("li",null,[t("code",null,"LoginFailureEvent")]),t("li",null,[t("code",null,"LogoutEvent")]),t("li",null,[t("code",null,"TokenDeauthenticatedEvent")]),t("li",null,[t("code",null,"SwitchUserEvent")])])])],-1),S8={__name:"7",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[x8,A8,$8]),_:1},16))}},E8=t("h1",null,"\u2728 The New Security System",-1),T8=t("h2",null,"As before, you can still handle what happens in case of authentication success or failure",-1),C8=t("blockquote",null,[t("p",null,[p("\u{1F929} Like many things since the last years in Symfony, it improves the "),t("strong",null,"DX")])],-1),O8={__name:"8",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[E8,T8,C8]),_:1},16))}},D8=t("h1",null,"\u{1FA99} What is an Access Token?",-1),I8=t("ul",null,[t("li",null,[t("code",null,"i-am-an-4cc3ss-t0k3n"),p(),t("strong",null,"could be an Access Token")])],-1),P8=t("ul",null,[t("li",null,[t("code",null,"mF_9.B5f-4.1JqM"),p(),t("strong",null,"could be an Access Token")])],-1),M8=t("ul",null,[t("li",null,[t("code",null,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4..."),p(),t("strong",null,"could be an Access Token")])],-1),R8=t("ul",null,[t("li",null,[p("\u{1F32E} "),t("strong",null,"could be an Access Token")])],-1),F8=t("blockquote",null,[t("p",null,[p("\u{1F521} "),t("strong",null,"An Access Token is represented by a string.")])],-1),L8={__name:"9",setup(e){const n={};return D(M),(s,o)=>{const r=no;return k(),q(pe,Q(X(n)),{default:P(()=>[D8,H(r,null,{default:P(()=>[I8]),_:1}),H(r,null,{default:P(()=>[P8]),_:1}),H(r,null,{default:P(()=>[M8]),_:1}),H(r,null,{default:P(()=>[R8]),_:1}),H(r,null,{default:P(()=>[F8]),_:1})]),_:1},16)}}},H8=t("h1",null,"\u{1F4D1} Use cases",-1),q8=t("p",null,[p("Authentication with "),t("strong",null,"Access Token"),p(" is useful in some contexts, like")],-1),N8=t("ul",null,[t("li",null,"Stateless user login"),t("li",null,[t("strong",null,"API Gateway"),p(" in front of private APIs")]),t("li",null,"Application that access to personal data provided by a third party"),t("li",null,[t("strong",null,"Micro-services"),p(" between them")]),t("li",null,[p("Client applications of a "),t("strong",null,"SaaS API")]),t("li",null,"\u2026")],-1),j8={__name:"10",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[H8,q8,N8]),_:1},16))}},W8="/painless-authentication-with-access-token/images/auth-schema.png",V8=t("h1",null,"\u{1F928} Ok, so?",-1),U8=t("ul",null,[t("li",null,[p("Must be sent in a "),t("strong",null,"HTTP request"),p(" to fetch a protected resource")]),t("li",null,[p("The application expects to find a token, \u{1F449} "),t("strong",null,"validate"),p(" \u{1F448} it and decide to allow access or not")])],-1),K8=t("img",{src:W8,class:"mt-10 w-10/12 mx-auto"},null,-1),z8={__name:"11",setup(e){const n={};return D(M),(s,o)=>{const r=no;return k(),q(pe,Q(X(n)),{default:P(()=>[V8,U8,H(r,null,{default:P(()=>[K8]),_:1})]),_:1},16)}}},J8=t("h1",null,"\u{1F6C2} Token issuer",-1),Y8=t("h2",null,"Let\u2019s assume our tokens come from an external authentication server,",-1),G8=t("h2",null,"the user identity has been verified by this server",-1),Z8={__name:"12",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),q(mn,Q(X(n)),{default:P(()=>[J8,Y8,G8]),_:1},16))}},X8=t("h1",null,"\u2705 Validate the token?",-1),Q8=t("h2",null,[p("The validation process is up to "),t("u",null,"you")],-1),e5=t("ul",null,[t("li",null,[p("Check if the string is "),t("strong",null,"present"),p(" in a database")]),t("li",null,[t("strong",null,"Compute a hash"),p(" and compare it to the expected one")]),t("li",null,[t("strong",null,"Decode the token"),p(" (base64, \u2026) and make "),t("strong",null,"assertions"),p(" on decoded values")]),t("li",null,[p("Ensure the "),t("strong",null,"expiration date"),p(" is not passed if needed")]),t("li",null,[p("Check if the token has been "),t("strong",null,"revoked"),p(" or not")]),t("li",null,[p("Call an "),t("strong",null,"OpenID Connect"),p(" server to validate the token")]),t("li",null,"\u2026")],-1),t5={__name:"13",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[X8,Q8,e5]),_:1},16))}},n5=t("h1",null,"\u{1F914} How to set up an Access Token auth with Symfony?",-1),s5={__name:"14",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),q(mn,Q(X(n)),{default:P(()=>[n5]),_:1},16))}},o5=t("h1",null,"\u{1F3AC} Marvel Scenarios Manager, a web app for writers and reviewers",-1),r5=t("ul",null,[t("li",null,"Each user (Writers and Reviewers) has an API key"),t("li",null,[p("Admin for Writers "),t("ul",null,[t("li",null,"Form login authentication"),t("li",null,"Writers can create Scenarios")])]),t("li",null,[p("Web app for Reviewers "),t("ul",null,[t("li",null,"Call the private API using API Key obtained after Reviewer login")])]),t("li",null,"Admins can revoke API key at any time")],-1),l5={__name:"15",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[o5,r5]),_:1},16))}},a5="/painless-authentication-with-access-token/images/demo-app-schema.png",i5=t("img",{src:a5},null,-1),c5={__name:"16",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[i5]),_:1},16))}},u5="/painless-authentication-with-access-token/images/demo-app-schema-2.png",p5=t("img",{src:u5},null,-1),d5={__name:"17",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[p5]),_:1},16))}},f5=t("h1",null,"\u{1F449} With Symfony <= 6.1",-1),h5=t("h2",null,"Create a custom Authenticator",-1),y5=t("br",null,null,-1),m5=t("ol",null,[t("li",null,[p("Extract "),t("strong",null,"token")]),t("li",null,[p("Decode "),t("strong",null,"token"),p(" if needed (JWT, SAML, \u2026)")]),t("li",null,[p("Check "),t("strong",null,"token"),p(" validity")]),t("li",null,[p("Retrieve user identifier from the "),t("strong",null,"token")]),t("li",null,"Then load User object"),t("li",null,"Handle authentication failure cases")],-1),g5={__name:"18",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[f5,h5,y5,m5]),_:1},16))}},v5=t("h1",null,[p("\u{1F442} Have you heard about "),t("a",{href:"https://datatracker.ietf.org/doc/html/rfc6750",target:"_blank",rel:"noopener"},"RFC 6750"),p("?")],-1),_5=t("ul",null,[t("li",null,[p("Token transportation "),t("ul",null,[t("li",null,[p("In "),t("strong",null,"request header"),p("? \u27A1 "),t("code",null,"Authorization"),p(" header")]),t("li",null,[p("In "),t("strong",null,"query string"),p("? \u27A1 parameter "),t("code",null,"access_token")]),t("li",null,[p("In "),t("strong",null,"request body"),p("? \u27A1 parameter "),t("code",null,"access_token")])])])],-1),w5=t("ul",null,[t("li",null,[t("code",null,"WWW-Authenticate"),p(),t("strong",null,"response header"),p(" in case of failure")])],-1),b5=t("ul",null,[t("li",null,[t("strong",null,"HTTPS"),p(" protocol mandatory")])],-1),k5={__name:"19",setup(e){const n={};return D(M),(s,o)=>{const r=no;return k(),q(pe,Q(X(n)),{default:P(()=>[v5,_5,H(r,null,{default:P(()=>[w5]),_:1}),H(r,null,{default:P(()=>[b5]),_:1})]),_:1},16)}}},B5="/painless-authentication-with-access-token/images/auth-process-61.jpg";const x5=e=>(hn("data-v-84fc47bc"),e=e(),yn(),e),A5=x5(()=>t("img",{src:B5,width:"900",class:"mx-auto"},null,-1)),$5={__name:"20",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[A5]),_:1},16))}},S5=jt($5,[["__scopeId","data-v-84fc47bc"]]),E5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},T5=t("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),C5=[T5];function O5(e,n){return k(),V("svg",E5,C5)}const D5={name:"ph-clipboard",render:O5},I5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},P5=t("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),M5=[P5];function R5(e,n){return k(),V("svg",I5,M5)}const F5={name:"ph-check-circle",render:R5};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function _p(e){return typeof e>"u"||e===null}function L5(e){return typeof e=="object"&&e!==null}function H5(e){return Array.isArray(e)?e:_p(e)?[]:[e]}function q5(e,n){var s,o,r,l;if(n)for(l=Object.keys(n),s=0,o=l.length;s<o;s+=1)r=l[s],e[r]=n[r];return e}function N5(e,n){var s="",o;for(o=0;o<n;o+=1)s+=e;return s}function j5(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var W5=_p,V5=L5,U5=H5,K5=N5,z5=j5,J5=q5,na={isNothing:W5,isObject:V5,toArray:U5,repeat:K5,isNegativeZero:z5,extend:J5};function wp(e,n){var s="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(s+=`

`+e.mark.snippet),o+" "+s):o}function Ys(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=wp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ys.prototype=Object.create(Error.prototype);Ys.prototype.constructor=Ys;Ys.prototype.toString=function(n){return this.name+": "+wp(this,n)};var $n=Ys,Y5=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],G5=["scalar","sequence","mapping"];function Z5(e){var n={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(o){n[String(o)]=s})}),n}function X5(e,n){if(n=n||{},Object.keys(n).forEach(function(s){if(Y5.indexOf(s)===-1)throw new $n('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=Z5(n.styleAliases||null),G5.indexOf(this.kind)===-1)throw new $n('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Qe=X5;function tc(e,n){var s=[];return e[n].forEach(function(o){var r=s.length;s.forEach(function(l,a){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(r=a)}),s[r]=o}),s}function Q5(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return e}function ul(e){return this.extend(e)}ul.prototype.extend=function(n){var s=[],o=[];if(n instanceof Qe)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new $n("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(l){if(!(l instanceof Qe))throw new $n("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new $n("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new $n("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof Qe))throw new $n("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(ul.prototype);return r.implicit=(this.implicit||[]).concat(s),r.explicit=(this.explicit||[]).concat(o),r.compiledImplicit=tc(r,"implicit"),r.compiledExplicit=tc(r,"explicit"),r.compiledTypeMap=Q5(r.compiledImplicit,r.compiledExplicit),r};var e6=ul,t6=new Qe("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),n6=new Qe("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),s6=new Qe("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),o6=new e6({explicit:[t6,n6,s6]});function r6(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function l6(){return null}function a6(e){return e===null}var i6=new Qe("tag:yaml.org,2002:null",{kind:"scalar",resolve:r6,construct:l6,predicate:a6,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function c6(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function u6(e){return e==="true"||e==="True"||e==="TRUE"}function p6(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var d6=new Qe("tag:yaml.org,2002:bool",{kind:"scalar",resolve:c6,construct:u6,predicate:p6,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function f6(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function h6(e){return 48<=e&&e<=55}function y6(e){return 48<=e&&e<=57}function m6(e){if(e===null)return!1;var n=e.length,s=0,o=!1,r;if(!n)return!1;if(r=e[s],(r==="-"||r==="+")&&(r=e[++s]),r==="0"){if(s+1===n)return!0;if(r=e[++s],r==="b"){for(s++;s<n;s++)if(r=e[s],r!=="_"){if(r!=="0"&&r!=="1")return!1;o=!0}return o&&r!=="_"}if(r==="x"){for(s++;s<n;s++)if(r=e[s],r!=="_"){if(!f6(e.charCodeAt(s)))return!1;o=!0}return o&&r!=="_"}if(r==="o"){for(s++;s<n;s++)if(r=e[s],r!=="_"){if(!h6(e.charCodeAt(s)))return!1;o=!0}return o&&r!=="_"}}if(r==="_")return!1;for(;s<n;s++)if(r=e[s],r!=="_"){if(!y6(e.charCodeAt(s)))return!1;o=!0}return!(!o||r==="_")}function g6(e){var n=e,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function v6(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!na.isNegativeZero(e)}var _6=new Qe("tag:yaml.org,2002:int",{kind:"scalar",resolve:m6,construct:g6,predicate:v6,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),w6=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function b6(e){return!(e===null||!w6.test(e)||e[e.length-1]==="_")}function k6(e){var n,s;return n=e.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var B6=/^[-+]?[0-9]+e/;function x6(e,n){var s;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(na.isNegativeZero(e))return"-0.0";return s=e.toString(10),B6.test(s)?s.replace("e",".e"):s}function A6(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||na.isNegativeZero(e))}var $6=new Qe("tag:yaml.org,2002:float",{kind:"scalar",resolve:b6,construct:k6,predicate:A6,represent:x6,defaultStyle:"lowercase"}),S6=o6.extend({implicit:[i6,d6,_6,$6]}),E6=S6,bp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),kp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function T6(e){return e===null?!1:bp.exec(e)!==null||kp.exec(e)!==null}function C6(e){var n,s,o,r,l,a,i,c=0,u=null,d,f,h;if(n=bp.exec(e),n===null&&(n=kp.exec(e)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,r=+n[3],!n[4])return new Date(Date.UTC(s,o,r));if(l=+n[4],a=+n[5],i=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(d=+n[10],f=+(n[11]||0),u=(d*60+f)*6e4,n[9]==="-"&&(u=-u)),h=new Date(Date.UTC(s,o,r,l,a,i,c)),u&&h.setTime(h.getTime()-u),h}function O6(e){return e.toISOString()}var D6=new Qe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:T6,construct:C6,instanceOf:Date,represent:O6});function I6(e){return e==="<<"||e===null}var P6=new Qe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:I6}),sa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function M6(e){if(e===null)return!1;var n,s,o=0,r=e.length,l=sa;for(s=0;s<r;s++)if(n=l.indexOf(e.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function R6(e){var n,s,o=e.replace(/[\r\n=]/g,""),r=o.length,l=sa,a=0,i=[];for(n=0;n<r;n++)n%4===0&&n&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|l.indexOf(o.charAt(n));return s=r%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function F6(e){var n="",s=0,o,r,l=e.length,a=sa;for(o=0;o<l;o++)o%3===0&&o&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+e[o];return r=l%3,r===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):r===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):r===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function L6(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var H6=new Qe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:M6,construct:R6,predicate:L6,represent:F6}),q6=Object.prototype.hasOwnProperty,N6=Object.prototype.toString;function j6(e){if(e===null)return!0;var n=[],s,o,r,l,a,i=e;for(s=0,o=i.length;s<o;s+=1){if(r=i[s],a=!1,N6.call(r)!=="[object Object]")return!1;for(l in r)if(q6.call(r,l))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(l)===-1)n.push(l);else return!1}return!0}function W6(e){return e!==null?e:[]}var V6=new Qe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:j6,construct:W6}),U6=Object.prototype.toString;function K6(e){if(e===null)return!0;var n,s,o,r,l,a=e;for(l=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(o=a[n],U6.call(o)!=="[object Object]"||(r=Object.keys(o),r.length!==1))return!1;l[n]=[r[0],o[r[0]]]}return!0}function z6(e){if(e===null)return[];var n,s,o,r,l,a=e;for(l=new Array(a.length),n=0,s=a.length;n<s;n+=1)o=a[n],r=Object.keys(o),l[n]=[r[0],o[r[0]]];return l}var J6=new Qe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:K6,construct:z6}),Y6=Object.prototype.hasOwnProperty;function G6(e){if(e===null)return!0;var n,s=e;for(n in s)if(Y6.call(s,n)&&s[n]!==null)return!1;return!0}function Z6(e){return e!==null?e:{}}var X6=new Qe("tag:yaml.org,2002:set",{kind:"mapping",resolve:G6,construct:Z6});E6.extend({implicit:[D6,P6],explicit:[H6,V6,J6,X6]});function nc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var Q6=new Array(256),ew=new Array(256);for(var Kn=0;Kn<256;Kn++)Q6[Kn]=nc(Kn)?1:0,ew[Kn]=nc(Kn);function tw(e){return Array.from(new Set(e))}function sc(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const r=[];let l=n;for(;l<s;)r.push(l),l+=o||1;return r}function nw(e,n){if(!n||n==="all"||n==="*")return sc(1,e+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[r,l]=o.split("-",2);s.push(...sc(+r,l?+l+1:e+1))}return tw(s).filter(o=>o<=e).sort((o,r)=>o-r)}const sw=["title"],Wt=_e({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;D(M);const s=D(Cs),o=D(An),r=D(Os);function l(f=5){const h=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",y=m.length;for(let _=0;_<f;_++)h.push(m.charAt(Math.floor(Math.random()*y)));return h.join("")}const a=U(),i=Hn();fs(()=>{const f=n.at==null?o==null?void 0:o.value.length:n.at,h=S(()=>r!=null&&r.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),n.ranges.length-1)),m=S(()=>n.ranges[h.value]||"");if(n.ranges.length>=2&&!(r!=null&&r.value)){const y=l(),_=Hy(n.ranges.length-1).map(w=>y+w);o!=null&&o.value&&(o.value.push(..._),Qo(()=>_.forEach(w=>Qr(o.value,w)),i))}ds(()=>{if(!a.value)return;const _=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const w of _){const b=Array.from(w.querySelectorAll(".line")),A=nw(b.length,m.value);if(b.forEach((x,E)=>{const R=A.includes(E+1);x.classList.toggle(kn,!0),x.classList.toggle("highlighted",R),x.classList.toggle("dishonored",!R)}),n.maxHeight){const x=w.querySelector(".line.highlighted");x&&x.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=cm();function d(){var h,m;const f=(m=(h=a.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:m.textContent;f&&u(f)}return(f,h)=>{const m=F5,y=D5;return k(),V("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:Ve({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[at(f.$slots,"default"),B(ke).codeCopy?(k(),V("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:B(c)?"Copied":"Copy",onClick:h[0]||(h[0]=_=>d())},[B(c)?(k(),q(m,{key:0,class:"p-2 w-8 h-8"})):(k(),q(y,{key:1,class:"p-2 w-8 h-8"}))],8,sw)):fe("v-if",!0)],4)}}}),ow=t("h1",null,"\u{1F9D1}\u200D\u{1F4BB} Some code",-1),rw=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#93A1A1"}},"/** Simplified version */")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"extractToken"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"Request"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"?string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"match"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#B58900"}},"true"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Header")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"headers"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Authorization'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"str_replace"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Bearer '"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#2AA198"}},"''"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"headers"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Authorization'"),t("span",{style:{color:"#657B83"}},")),")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Query string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"query"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"query"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},"),")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Request body")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"request"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"request"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},"),")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"default"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#B58900"}},"null"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    };")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#93A1A1"}},"/** Simplified version */")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"extractToken"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"Request"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"?string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"match"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#B58900"}},"true"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Header")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"headers"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Authorization'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"str_replace"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Bearer '"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#2AA198"}},"''"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"headers"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Authorization'"),t("span",{style:{color:"#657B83"}},")),")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Query string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"query"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"query"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},"),")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Request body")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"request"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"request"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},"),")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"default"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#B58900"}},"null"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    };")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1),lw={__name:"21",setup(e){const n={};return D(M),(s,o)=>{const r=Wt;return k(),q(pe,Q(X(n)),{default:P(()=>[ow,H(r,it({},{ranges:[""]}),{default:P(()=>[rw]),_:1},16)]),_:1},16)}}},aw=t("h1",null,"\u{1F9D1}\u200D\u{1F4BB} Some code",-1),iw=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"authenticate"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"Request"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Passport")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#859900"}},"if"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#B58900"}},"null"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"==="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"extractToken"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")) {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"throw"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"AuthenticationException"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'No API Key provided'"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    ")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#93A1A1"}},"// Here, it could be some logic to validate the token")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"SelfValidatingPassport"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"UserBadge"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"userRepository"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"findOneByApiKey"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        )")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"authenticate"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"Request"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Passport")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#859900"}},"if"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#B58900"}},"null"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"==="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"extractToken"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")) {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"throw"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"AuthenticationException"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'No API Key provided'"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    ")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#93A1A1"}},"// Here, it could be some logic to validate the token")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"SelfValidatingPassport"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"UserBadge"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"userRepository"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"findOneByApiKey"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        )")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1),cw={__name:"22",setup(e){const n={};return D(M),(s,o)=>{const r=Wt;return k(),q(pe,Q(X(n)),{default:P(()=>[aw,H(r,it({},{ranges:[""]}),{default:P(()=>[iw]),_:1},16)]),_:1},16)}}},uw=t("h1",null,"\u{1F971} Boring code",-1),pw=t("ul",null,[t("li",null,[p("We have to repeat this code in all our applications, "),t("strong",null,"boring")]),t("li",null,[p("Our responsibility to respect RFC6750, "),t("strong",null,"boring")]),t("li",null,"No body likes boring code"),t("li",null,"Boring code is code we rewrite in all projects, no business value"),t("li",null,[p("Poor "),t("strong",null,"D"),p("eveloper e"),t("strong",null,"X"),p("perience, Symfony tends to improve DX")])],-1),dw=t("h2",null,"This is definitely improvable",-1),fw={__name:"23",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[uw,pw,dw]),_:1},16))}};function oc(e){return e.startsWith("/")?"/painless-authentication-with-access-token/"+e.slice(1):e}function hw(e,n=!1){const s=e&&e[0]==="#"&&e.startsWith("rgb"),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${oc(e)})`:`url("${oc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const Bp=_e({__name:"image",props:{image:{type:String}},setup(e){const n=e;D(M);const s=S(()=>hw(n.image));return(o,r)=>(k(),V("div",{class:"slidev-layout w-full h-full",style:Ve(B(s))},[at(o.$slots,"default")],4))}}),yw={__name:"24",setup(e){const n={layout:"image",image:"images/dr-strange.gif"};return D(M),(s,o)=>(k(),q(Bp,Q(X(n)),null,16))}},mw="/painless-authentication-with-access-token/images/pr-30914.png",gw=t("h1",null,"\u231A Discussions started long time ago",-1),vw=t("ul",null,[t("li",null,[t("strong",null,"April 2019"),p(", at EU FOSSA Hackathon")])],-1),_w=t("img",{src:mw,class:"filter drop-shadow-2xl mx-auto mt-12",width:"600"},null,-1),ww=t("div",{class:"timeline"},[t("div",{class:"dot active"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"})],-1),bw={__name:"25",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[gw,vw,_w,ww]),_:1},16))}},kw="/painless-authentication-with-access-token/images/pr-31952.png",Bw=t("h1",null,"\u231A Discussions started long time ago",-1),xw=t("ul",null,[t("li",null,[t("strong",null,"June 2019"),p(", first PR about OAuth2 Component. \u274C Aborted")])],-1),Aw=t("img",{src:kw,class:"filter drop-shadow-2xl mx-auto mt-12",width:"600"},null,-1),$w=t("div",{class:"timeline"},[t("div",{class:"dot"}),t("div",{class:"dot active"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"})],-1),Sw={__name:"26",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[Bw,xw,Aw,$w]),_:1},16))}},Ew="/painless-authentication-with-access-token/images/pr-33558.png",Tw=t("h1",null,"\u231A Discussions started long time ago",-1),Cw=t("ul",null,[t("li",null,[t("strong",null,"September 2019"),p(", Wouter\u2019s 1st PR about redesign of Security")])],-1),Ow=t("img",{src:Ew,class:"filter drop-shadow-2xl mx-auto mt-12",width:"600"},null,-1),Dw=t("div",{class:"timeline"},[t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot active"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"})],-1),Iw={__name:"27",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[Tw,Cw,Ow,Dw]),_:1},16))}},Pw="/painless-authentication-with-access-token/images/pr-36570.png",Mw="/painless-authentication-with-access-token/images/pr-36574.png",Rw=t("h1",null,"\u231A Discussions started long time ago",-1),Fw=t("ul",null,[t("li",null,[t("strong",null,"April 2020"),p(", continuation of Wouter\u2019s work on new Security system")])],-1),Lw=t("div",{class:"grid grid-cols-2 gap-4 mt-12"},[t("img",{src:Pw,class:"filter drop-shadow-2xl",width:"400"}),t("img",{src:Mw,class:"filter drop-shadow-2xl",width:"400"})],-1),Hw=t("div",{class:"timeline"},[t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot active"}),t("div",{class:"dot"}),t("div",{class:"dot"})],-1),qw={__name:"28",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[Rw,Fw,Lw,Hw]),_:1},16))}},Nw="/painless-authentication-with-access-token/images/issue-45844.png",jw=t("h1",null,"\u231A Discussions started long time ago",-1),Ww=t("ul",null,[t("li",null,[t("strong",null,"March 2022"),p(', Vincent Chalamon opens an issue about "Bearer Authenticator"')])],-1),Vw=t("img",{src:Nw,class:"mx-auto mt-6 filter drop-shadow-2xl",width:"600"},null,-1),Uw=t("div",{class:"timeline"},[t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot active"}),t("div",{class:"dot"})],-1),Kw={__name:"29",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[jw,Ww,Vw,Uw]),_:1},16))}},zw="/painless-authentication-with-access-token/images/pr-46429.png",xp="/painless-authentication-with-access-token/images/pr-46428.png",Jw=t("h1",null,"\u231A Discussions started long time ago",-1),Yw=t("ul",null,[t("li",null,[p("Finally, on "),t("strong",null,"May 21st, 2022"),p(", Vincent Chalamon & Florent Morselli each open a pull request to implement the Authenticator")])],-1),Gw=t("div",{class:"grid grid-cols-2 gap-4 mt-12"},[t("img",{src:zw,class:"filter drop-shadow-xl",width:"400"}),t("img",{src:xp,class:"filter drop-shadow-xl",width:"400"})],-1),Zw=t("div",{class:"timeline"},[t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot active"})],-1),Xw={__name:"30",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[Jw,Yw,Gw,Zw]),_:1},16))}},Qw="/painless-authentication-with-access-token/images/spomky.png",e2=t("h1",null,[p("\u{1F929} Thanks a lot "),t("strong",null,[p("Florent Morselli "),t("img",{src:Qw,width:"52",class:"rounded-full inline"}),p("\xA0"),t("a",{href:"https://github.com/Spomky",target:"_blank",rel:"noopener"},"@Spomky")])],-1),t2=t("img",{class:"filter drop-shadow-2xl w-9/12 mx-auto mt-6",src:xp,alt:"Symfony Pull request #46428"},null,-1),n2={__name:"31",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[e2,t2]),_:1},16))}},s2=t("h1",null,"Adding a feature to Symfony could take years",-1),o2={__name:"32",setup(e){const n={layout:"statement"};return D(M),(s,o)=>(k(),q(ta,Q(X(n)),{default:P(()=>[s2]),_:1},16))}},r2=t("h1",null,"\u{1F680} Let\u2019s meet AccessTokenAuthenticator in Symfony 6.2",-1),l2={__name:"33",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),q(mn,Q(X(n)),{default:P(()=>[r2]),_:1},16))}};const oa=e=>(hn("data-v-c25f0746"),e=e(),yn(),e),a2=oa(()=>t("h1",null,"AccessTokenAuthenticator",-1)),i2=oa(()=>t("ul",null,[t("li",null,[p("Takes care of token extraction "),t("ul",null,[t("li",null,"Header"),t("li",null,"Query string"),t("li",null,"Request body"),t("li",null,[p("And/or your "),t("strong",null,"Custom extractors")])])]),t("li",null,[p("Calls "),t("strong",null,"your Token Handler"),p(" to check the token (revocation, expiration, signature, \u2026)")]),t("li",null,"Custom success / failure handlers if needed")],-1)),c2=oa(()=>t("blockquote",null,[t("p",null,"\u2728 All this via configuration!")],-1)),u2={__name:"34",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[a2,i2,c2]),_:1},16))}},p2=jt(u2,[["__scopeId","data-v-c25f0746"]]),or="/painless-authentication-with-access-token/images/jwt.svg",d2="/painless-authentication-with-access-token/images/saml.svg",f2="/painless-authentication-with-access-token/images/biscuit.png",h2="/painless-authentication-with-access-token/images/macarons.png",y2=t("h1",null,"What kind of tokens could be used?",-1),m2=t("ul",null,[t("li",null,"JWT"),t("li",null,"SAML2"),t("li",null,[t("a",{href:"https://www.biscuitsec.org/",target:"_blank",rel:"noopener"},"Biscuit")]),t("li",null,[t("a",{href:"https://research.google/pubs/pub41892/",target:"_blank",rel:"noopener"},"Macaroons")]),t("li",null,"Homemade tokens (with chocolate chips and nuts \u{1F60B})"),t("li",null,"\u2026"),t("li",null,"Any kind of token, as it\u2019s up to you to handle them")],-1),g2=t("div",{class:"absolute right-40 top-36 grid grid-cols-2 gap-10"},[t("img",{src:or,width:"90"}),t("img",{src:d2,width:"90"}),t("img",{src:f2,width:"90"}),t("img",{src:h2,width:"90"})],-1),v2={__name:"35",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[y2,m2,g2]),_:1},16))}},_2=t("h1",null,"\u2699 Internally, in Symfony",-1),w2=t("ul",null,[t("li",null,[p("Extraction with "),t("code",null,"ChainTokenExtractor"),p(" (configurable order) "),t("ul",null,[t("li",null,"Default and custom extractors can be used at the same time")])]),t("li",null,[p("Handle the token with "),t("strong",null,"your"),p(),t("code",null,"TokenHandlerInterface"),p(" implementation")]),t("li",null,[t("code",null,"AccessTokenAuthenticator"),p(" will "),t("ul",null,[t("li",null,[p("create a "),t("code",null,"PostAuthenticationToken"),p(" object")]),t("li",null,[p("set "),t("code",null,"WWW-Authenticate"),p(" Response header content in case of failure")]),t("li",null,"use the configured User Provider in security.yaml")])])],-1),b2={__name:"36",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[_2,w2]),_:1},16))}},k2=t("h1",null,"\u{1FA84} How much easier is it with 6.2?",-1),B2={__name:"37",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),q(mn,Q(X(n)),{default:P(()=>[k2]),_:1},16))}},x2=t("h1",null,"6.1 security.yaml",-1),A2=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#268BD2"}},"security"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"  "),t("span",{style:{color:"#268BD2"}},"providers"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#268BD2"}},"user_provider"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"entity"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"class"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Entity\\User")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"property"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"apiKey")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"  "),t("span",{style:{color:"#268BD2"}},"firewalls"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#268BD2"}},"api"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"pattern"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"^/api")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"lazy"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#B58900"}},"true")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"provider"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"user_provider")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"custom_authenticator"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Security\\ApiKeyAuthenticator")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#268BD2"}},"security"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"  "),t("span",{style:{color:"#268BD2"}},"providers"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#268BD2"}},"user_provider"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"entity"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"class"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Entity\\User")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"property"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"apiKey")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"  "),t("span",{style:{color:"#268BD2"}},"firewalls"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#268BD2"}},"api"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"pattern"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"^/api")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"lazy"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#B58900"}},"true")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"provider"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"user_provider")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"custom_authenticator"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Security\\ApiKeyAuthenticator")])])])],-1),$2={__name:"38",setup(e){const n={};return D(M),(s,o)=>{const r=Wt;return k(),q(pe,Q(X(n)),{default:P(()=>[x2,H(r,it({},{ranges:[""]}),{default:P(()=>[A2]),_:1},16)]),_:1},16)}}},S2={class:"slidev-layout code-full w-full h-full"},E2={__name:"code-full",setup(e){return D(M),(n,s)=>(k(),V("div",S2,[at(n.$slots,"default")]))}};const Ap=e=>(hn("data-v-46c1cafe"),e=e(),yn(),e),T2=Ap(()=>t("h1",null,"6.1 ApiKeyAuthenticator",-1)),C2=Ap(()=>t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"class"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"ApiKeyAuthenticator"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"extends"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#6C71C4"}},"AbstractAuthenticator")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"__construct"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"UserRepository"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"userRepository"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"env"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    ) {}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"supports"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"Request"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"?bool")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"headers"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Authorization'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"||"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"query"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"||"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"request"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    }")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"authenticate"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"Request"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Passport")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"if"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#B58900"}},"null"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"==="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"extractToken"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")) {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"throw"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"AuthenticationException"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'No API Key provided'"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        ")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Here, it could be some logic to validate the token")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"SelfValidatingPassport"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"UserBadge"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                    "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"userRepository"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"findOneByApiKey"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            )")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"class"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"ApiKeyAuthenticator"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"extends"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#6C71C4"}},"AbstractAuthenticator")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"__construct"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"UserRepository"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"userRepository"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"env"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    ) {}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"supports"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"Request"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"?bool")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"headers"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Authorization'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"||"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"query"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"||"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"request"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    }")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"authenticate"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"Request"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Passport")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"if"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#B58900"}},"null"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"==="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"extractToken"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")) {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"throw"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"AuthenticationException"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'No API Key provided'"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        ")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Here, it could be some logic to validate the token")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"SelfValidatingPassport"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"UserBadge"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                    "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"userRepository"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"findOneByApiKey"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"apiKey"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            )")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1)),O2={__name:"39",setup(e){const n={layout:"code-full"};return D(M),(s,o)=>{const r=Wt;return k(),q(E2,Q(X(n)),{default:P(()=>[T2,H(r,it({},{ranges:["1,8-11","13-31","15"]}),{default:P(()=>[C2]),_:1},16)]),_:1},16)}}},D2=jt(O2,[["__scopeId","data-v-46c1cafe"]]),I2=t("h1",null,"6.1 ApiKeyAuthenticator",-1),P2=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#93A1A1"}},"/** Simplified version */")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"extractToken"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"Request"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"?string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"match"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#B58900"}},"true"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Header")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"headers"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Authorization'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"str_replace"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Bearer '"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#2AA198"}},"''"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"headers"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Authorization'"),t("span",{style:{color:"#657B83"}},")),")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Query string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"query"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"query"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},"),")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Request body")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"request"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"request"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},"),")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"default"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#B58900"}},"null"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    };")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#93A1A1"}},"/** Simplified version */")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"extractToken"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"Request"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"?string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"match"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#B58900"}},"true"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Header")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"headers"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Authorization'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"str_replace"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Bearer '"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#2AA198"}},"''"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"headers"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Authorization'"),t("span",{style:{color:"#657B83"}},")),")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Query string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"query"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"query"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},"),")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#93A1A1"}},"// Request body")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"request"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"has"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},") "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"request"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'access_token'"),t("span",{style:{color:"#657B83"}},"),")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"default"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#B58900"}},"null"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    };")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1),M2={__name:"40",setup(e){const n={};return D(M),(s,o)=>{const r=Wt;return k(),q(pe,Q(X(n)),{default:P(()=>[I2,H(r,it({},{ranges:[""]}),{default:P(()=>[P2]),_:1},16)]),_:1},16)}}},R2=t("h1",null,"6.2 security.yaml",-1),F2=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#268BD2"}},"security"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"  "),t("span",{style:{color:"#268BD2"}},"providers"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#268BD2"}},"user_provider"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"entity"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"class"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Entity\\User")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"property"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"apiKey")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"  "),t("span",{style:{color:"#268BD2"}},"firewalls"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#268BD2"}},"api"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"pattern"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"^/api")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"lazy"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#B58900"}},"true")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"provider"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"user_provider")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"access_token"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"token_extractors"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"          - "),t("span",{style:{color:"#2AA198"}},"header")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"          - "),t("span",{style:{color:"#2AA198"}},"query_string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"          - "),t("span",{style:{color:"#2AA198"}},"request_body")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"token_handler"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Security\\AccessTokenHandler")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#268BD2"}},"security"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"  "),t("span",{style:{color:"#268BD2"}},"providers"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#268BD2"}},"user_provider"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"entity"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"class"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Entity\\User")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"property"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"apiKey")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"  "),t("span",{style:{color:"#268BD2"}},"firewalls"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#268BD2"}},"api"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"pattern"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"^/api")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"lazy"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#B58900"}},"true")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"provider"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"user_provider")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"access_token"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"token_extractors"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"          - "),t("span",{style:{color:"#2AA198"}},"header")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"          - "),t("span",{style:{color:"#2AA198"}},"query_string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"          - "),t("span",{style:{color:"#2AA198"}},"request_body")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"token_handler"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Security\\AccessTokenHandler")])])])],-1),L2={__name:"41",setup(e){const n={};return D(M),(s,o)=>{const r=Wt;return k(),q(pe,Q(X(n)),{default:P(()=>[R2,H(r,it({},{ranges:[""]}),{default:P(()=>[F2]),_:1},16)]),_:1},16)}}};const $p=e=>(hn("data-v-9ac8d843"),e=e(),yn(),e),H2=$p(()=>t("h1",null,"6.2 AccessTokenHandler",-1)),q2=$p(()=>t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"class"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"AccessTokenHandler"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"implements"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#6C71C4"}},"AccessTokenHandlerInterface")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"__construct"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"UserRepository"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"userRepository"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"env"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    ) {}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"getUserIdentifierFrom"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"token"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"user"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"userRepository"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"findOneByApiKey"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"token"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"if"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"user"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"==="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#B58900"}},"null"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"throw"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"BadCredentialsException"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Invalid credentials.'"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        }")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"user"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"getUserIdentifier"),t("span",{style:{color:"#657B83"}},"();")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"class"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"AccessTokenHandler"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"implements"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#6C71C4"}},"AccessTokenHandlerInterface")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"__construct"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"UserRepository"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"userRepository"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"env"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    ) {}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"getUserIdentifierFrom"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"token"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"user"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"userRepository"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"findOneByApiKey"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"token"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"if"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"user"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"==="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#B58900"}},"null"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"throw"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"BadCredentialsException"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Invalid credentials.'"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        }")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"user"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"getUserIdentifier"),t("span",{style:{color:"#657B83"}},"();")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1)),N2={__name:"42",setup(e){const n={};return D(M),(s,o)=>{const r=Wt;return k(),q(pe,Q(X(n)),{default:P(()=>[H2,H(r,it({},{ranges:[""]}),{default:P(()=>[q2]),_:1},16)]),_:1},16)}}},j2=jt(N2,[["__scopeId","data-v-9ac8d843"]]),W2=t("h1",null,[t("img",{src:or,width:"48",class:"inline -mt-2"}),p(" 6.2 With a JWT issued by an OIDC server")],-1),V2={__name:"43",setup(e){const n={layout:"statement"};return D(M),(s,o)=>(k(),q(ta,Q(X(n)),{default:P(()=>[W2]),_:1},16))}},U2={__name:"44",setup(e){const n={layout:"image",image:"images/jwt-flow.png"};return D(M),(s,o)=>(k(),q(Bp,Q(X(n)),null,16))}};const Sp=e=>(hn("data-v-d32773ad"),e=e(),yn(),e),K2=Sp(()=>t("h1",null,[t("img",{src:or,width:"48",class:"inline -mt-2"}),p(" 6.2 With a JWT issued by an OIDC server")],-1)),z2=Sp(()=>t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"class"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"JwtHandler"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"implements"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#6C71C4"}},"AccessTokenHandlerInterface")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"__construct"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"HttpClientInterface"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"oidcHttpClient"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    ) {}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"getUserIdentifierFrom"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"accessToken"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"try"),t("span",{style:{color:"#657B83"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"userInfo"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"oidcHttpClient"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"request"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'GET'"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#2AA198"}},"'protocol/openid-connect/userinfo'"),t("span",{style:{color:"#657B83"}},", [")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                "),t("span",{style:{color:"#2AA198"}},"'auth_bearer'"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"accessToken"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            ])"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"toArray"),t("span",{style:{color:"#657B83"}},"();")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        } "),t("span",{style:{color:"#859900"}},"catch"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#859900"}},"HttpExceptionInterface"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"e"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"throw"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"BadCredentialsException"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"e"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"getMessage"),t("span",{style:{color:"#657B83"}},"());")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        }")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"userInfo"),t("span",{style:{color:"#657B83"}},"["),t("span",{style:{color:"#2AA198"}},"'email'"),t("span",{style:{color:"#657B83"}},"];")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"class"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"JwtHandler"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"implements"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#6C71C4"}},"AccessTokenHandlerInterface")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"__construct"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"HttpClientInterface"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"oidcHttpClient"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    ) {}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"getUserIdentifierFrom"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"accessToken"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"try"),t("span",{style:{color:"#657B83"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"userInfo"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"oidcHttpClient"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"request"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'GET'"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#2AA198"}},"'protocol/openid-connect/userinfo'"),t("span",{style:{color:"#657B83"}},", [")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                "),t("span",{style:{color:"#2AA198"}},"'auth_bearer'"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"=>"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"accessToken"),t("span",{style:{color:"#657B83"}},",")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            ])"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"toArray"),t("span",{style:{color:"#657B83"}},"();")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        } "),t("span",{style:{color:"#859900"}},"catch"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#859900"}},"HttpExceptionInterface"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"e"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"throw"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"BadCredentialsException"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"e"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"getMessage"),t("span",{style:{color:"#657B83"}},"());")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        }")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"userInfo"),t("span",{style:{color:"#657B83"}},"["),t("span",{style:{color:"#2AA198"}},"'email'"),t("span",{style:{color:"#657B83"}},"];")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1)),J2={__name:"45",setup(e){const n={};return D(M),(s,o)=>{const r=Wt;return k(),q(pe,Q(X(n)),{default:P(()=>[K2,H(r,it({},{ranges:[""]}),{default:P(()=>[z2]),_:1},16)]),_:1},16)}}},Y2=jt(J2,[["__scopeId","data-v-d32773ad"]]),G2=t("h1",null,[t("img",{src:or,width:"64",class:"inline -mt-2"}),p(" 6.2 With a JWT issued by your Symfony app")],-1),Z2=t("blockquote",null,[t("p",null,[p("with "),t("a",{href:"https://github.com/lcobucci/jwt",target:"_blank",rel:"noopener"},"lcobucci/jwt"),p(),t("br"),p(),t("small",null,[p("(or "),t("a",{href:"https://github.com/web-token/jwt-checker",target:"_blank",rel:"noopener"},"web-token/jwt-checker"),p(")")])])],-1),X2={__name:"46",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),q(mn,Q(X(n)),{default:P(()=>[G2,Z2]),_:1},16))}},Q2=t("h1",null,"\u{1F510} 6.2 security.yaml",-1),eb=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#268BD2"}},"security"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"  "),t("span",{style:{color:"#268BD2"}},"providers"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#268BD2"}},"user_provider"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"entity"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"class"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Entity\\User")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"property"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"email")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"  "),t("span",{style:{color:"#268BD2"}},"firewalls"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#268BD2"}},"api"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"pattern"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"^/api")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"lazy"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#B58900"}},"true")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"provider"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"user_provider")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"access_token"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"token_extractors"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"header")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"token_handler"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Security\\JwtHandler")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#268BD2"}},"security"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"  "),t("span",{style:{color:"#268BD2"}},"providers"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#268BD2"}},"user_provider"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"entity"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"class"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Entity\\User")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"property"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"email")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"  "),t("span",{style:{color:"#268BD2"}},"firewalls"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#268BD2"}},"api"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"pattern"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"^/api")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"lazy"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#B58900"}},"true")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"provider"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"user_provider")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"access_token"),t("span",{style:{color:"#657B83"}},":")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"token_extractors"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"header")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"token_handler"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Security\\JwtHandler")])])])],-1),tb={__name:"47",setup(e){const n={};return D(M),(s,o)=>{const r=Wt;return k(),q(pe,Q(X(n)),{default:P(()=>[Q2,H(r,it({},{ranges:[""]}),{default:P(()=>[eb]),_:1},16)]),_:1},16)}}};const Ep=e=>(hn("data-v-142f8a0e"),e=e(),yn(),e),nb=Ep(()=>t("h1",null,"6.2 JwtHandler",-1)),sb=Ep(()=>t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"class"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"JwtHandler"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"implements"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#6C71C4"}},"AccessTokenHandlerInterface")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"__construct"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Parser"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"jwtParser"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Parser"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"JoseEncoder"),t("span",{style:{color:"#657B83"}},"()),")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Validator"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"jwtValidator"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Validator"),t("span",{style:{color:"#657B83"}},"(),")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    ) {}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"getUserIdentifierFrom"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"accessToken"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"jwt"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"jwtParser"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"parse"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"accessToken"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"timezone"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"\\DateTimeZone"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Europe/Paris'"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"try"),t("span",{style:{color:"#657B83"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"jwtValidator"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"assert"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"jwt"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"ValidAt"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"SystemClock"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"timezone"),t("span",{style:{color:"#657B83"}},")));")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"jwtValidator"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"assert"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"jwt"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"SignedWith"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Sha256"),t("span",{style:{color:"#657B83"}},"(), ")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                "),t("span",{style:{color:"#859900"}},"InMemory::"),t("span",{style:{color:"#268BD2"}},"plainText"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'PRIVATE-KEY'"),t("span",{style:{color:"#657B83"}},")")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            ));")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        } "),t("span",{style:{color:"#859900"}},"catch"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#859900"}},"RequiredConstraintsViolated"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"e"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"throw"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"BadCredentialsException"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"e"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"getMessage"),t("span",{style:{color:"#657B83"}},"());")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        }")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"jwt"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"claims"),t("span",{style:{color:"#657B83"}},"()"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"RegisteredClaims::"),t("span",{style:{color:"#CB4B16"}},"SUBJECT"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"class"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"JwtHandler"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"implements"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#6C71C4"}},"AccessTokenHandlerInterface")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"{")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"__construct"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Parser"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"jwtParser"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Parser"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"JoseEncoder"),t("span",{style:{color:"#657B83"}},"()),")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#586E75","font-style":"italic"}},"private"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"readonly"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Validator"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"jwtValidator"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Validator"),t("span",{style:{color:"#657B83"}},"(),")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    ) {}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    "),t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"getUserIdentifierFrom"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"string"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"accessToken"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"jwt"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"jwtParser"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"parse"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"accessToken"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"timezone"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"="),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"\\DateTimeZone"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'Europe/Paris'"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"try"),t("span",{style:{color:"#657B83"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"jwtValidator"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"assert"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"jwt"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"ValidAt"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"SystemClock"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"timezone"),t("span",{style:{color:"#657B83"}},")));")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"this"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"jwtValidator"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"assert"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"jwt"),t("span",{style:{color:"#657B83"}},", "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"SignedWith"),t("span",{style:{color:"#657B83"}},"(")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Sha256"),t("span",{style:{color:"#657B83"}},"(), ")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"                "),t("span",{style:{color:"#859900"}},"InMemory::"),t("span",{style:{color:"#268BD2"}},"plainText"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#2AA198"}},"'PRIVATE-KEY'"),t("span",{style:{color:"#657B83"}},")")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            ));")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        } "),t("span",{style:{color:"#859900"}},"catch"),t("span",{style:{color:"#657B83"}}," ("),t("span",{style:{color:"#859900"}},"RequiredConstraintsViolated"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"e"),t("span",{style:{color:"#657B83"}},") {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"            "),t("span",{style:{color:"#859900"}},"throw"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"new"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"BadCredentialsException"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"e"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"getMessage"),t("span",{style:{color:"#657B83"}},"());")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        }")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#859900"}},"return"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"jwt"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"claims"),t("span",{style:{color:"#657B83"}},"()"),t("span",{style:{color:"#859900"}},"->"),t("span",{style:{color:"#268BD2"}},"get"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"RegisteredClaims::"),t("span",{style:{color:"#CB4B16"}},"SUBJECT"),t("span",{style:{color:"#657B83"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"    }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1)),ob={__name:"48",setup(e){const n={};return D(M),(s,o)=>{const r=Wt;return k(),q(pe,Q(X(n)),{default:P(()=>[nb,H(r,it({},{ranges:[""]}),{default:P(()=>[sb]),_:1},16)]),_:1},16)}}},rb=jt(ob,[["__scopeId","data-v-142f8a0e"]]),lb="/painless-authentication-with-access-token/images/api-platform.png",ab="/painless-authentication-with-access-token/images/apip-pr-265.png",ib=t("h1",null,[p("API Platform plans to support "),t("br"),p(" OpenID Connect authentication "),t("img",{src:lb,class:"absolute inline right-20 top-15",width:"72"})],-1),cb=t("p",null,[t("a",{href:"https://github.com/api-platform/demo/pull/265",target:"_blank",rel:"noopener"},"https://github.com/api-platform/demo/pull/265")],-1),ub=t("img",{src:ab,width:"700",class:"mx-auto"},null,-1),pb={__name:"49",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[ib,cb,ub]),_:1},16))}},db=t("h1",null,"\u{1F4AB} In the future?",-1),fb=t("ul",null,[t("li",null,"Add a native JwtHandler to Symfony?"),t("li",null,"Add a native SamlHandler to Symfony?"),t("li",null,"Add a native BiscuitHandler to Symfony?")],-1),hb=t("blockquote",null,[t("p",null,"\u{1F449} It\u2019s up to the community!")],-1),yb={__name:"50",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[db,fb,hb]),_:1},16))}},mb="/painless-authentication-with-access-token/images/auth-process-62.jpg";const gb=e=>(hn("data-v-3c1fd327"),e=e(),yn(),e),vb=gb(()=>t("img",{src:mb,width:"900",class:"mx-auto"},null,-1)),_b={__name:"51",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[vb]),_:1},16))}},wb=jt(_b,[["__scopeId","data-v-3c1fd327"]]),bb="/painless-authentication-with-access-token/images/auth-process-63.jpg";const kb=e=>(hn("data-v-d541baca"),e=e(),yn(),e),Bb=kb(()=>t("img",{src:bb,width:"900",class:"mx-auto"},null,-1)),xb={__name:"52",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[Bb]),_:1},16))}},Ab=jt(xb,[["__scopeId","data-v-d541baca"]]),$b=t("h1",null,"Less responsibility, less code",-1),Sb=t("ul",null,[t("li",null,[t("strong",null,"Configure"),p(" the way the extraction should be done")]),t("li",null,[t("strong",null,"Focus"),p(" on the token processing "),t("ul",null,[t("li",null,"Decoding"),t("li",null,"Checking signature, expiration, revocation"),t("li",null,"Retrieve user identifier")])])],-1),Eb=t("blockquote",null,[t("p",null,"\u{1F9B8} Leverage all Symfony power to fine tune configuration to your needs")],-1),Tb={__name:"53",setup(e){const n={};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[$b,Sb,Eb]),_:1},16))}},Cb=t("h1",null,"\u{1F44F} Thanks a lot",-1),Ob=t("h1",null,"Wouter",-1),Db=t("h1",null,"Guillaume",-1),Ib=t("h1",null,"Vincent",-1),Pb=t("h1",null,"Florent",-1),Mb=t("div",{class:"mt-12"},null,-1),Rb=t("h2",null,"And all reviewers, commenters \u{1F389}",-1),Fb={__name:"54",setup(e){const n={class:"text-center"};return D(M),(s,o)=>(k(),q(pe,Q(X(n)),{default:P(()=>[Cb,Ob,Db,Ib,Pb,Mb,Rb]),_:1},16))}},Lb=t("h1",null,"Thank you \u2615 \u{1F370}",-1),Hb=t("h2",null,"Any questions?",-1),qb=t("br",null,null,-1),Nb=t("br",null,null,-1),jb=t("p",null,[p("Slides and demo apps \u{1F449} "),t("a",{href:"https://welcomattic.github.io/painless-authentication-with-access-token/",target:"_blank",rel:"noopener"},"welcomattic.github.io/painless-authentication-with-access-token")],-1),Wb=t("p",null,"Sources",-1),Vb=t("ul",null,[t("li",null,[t("a",{href:"https://www.rfc-editor.org/rfc/rfc7519",target:"_blank",rel:"noopener"},"JWT RFC")]),t("li",null,[t("a",{href:"https://datatracker.ietf.org/doc/html/rfc6750",target:"_blank",rel:"noopener"},"Bearer Token Usage RFC")]),t("li",null,[t("a",{href:"https://lafor.ge/biscuit-1",target:"_blank",rel:"noopener"},"In-depth article about token authentication")])],-1),Ub={__name:"55",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),q(mn,Q(X(n)),{default:P(()=>[Lb,Hb,qb,Nb,jb,Wb,Vb]),_:1},16))}},Kb=[{path:"1",name:"page-1",component:J1,meta:{layout:"intro-image",image:"images/cover.jpg",title:"SymfonyCon Disneyland Paris 2022",theme:"apple-basic",highlighter:"shiki",lineNumbers:!0,favicon:"symfony.ico",info:`## SymfonyCon Disneyland Paris 2022
`,drawings:{persist:!1},colorSchema:"light",fonts:{provider:"none",local:"SF Pro Display,Josefin Sans",sans:"SF Pro Display",serif:"Josefin Sans"},srcSequence:"content/cover.md",slide:{raw:null,content:`<div class="absolute top-10 right-10 text-slate-200 text-right font-serif">
  <h1>Painless Authentication</h1>
  <h2>with Access Tokens</h2>
</div>

<img src="/images/symfonycon-logo-darkmode-transparent.png" alt="SymfonyCon Logo" class="absolute bottom-7 right-10 w-32" />

<div class="absolute bottom-16 left-10 text-slate-200 font-serif">
    <img class="filter drop-shadow-md ml-auto ml-0 mb-4 clothoid-corner" src="/images/me.jpg" alt="Mathieu Santostefano" width="130"/>
    <h2>Mathieu Santostefano</h2>
    <p>\u{1F9D1}\u200D\u{1F4BB} Web developer at&nbsp;<img src="/images/jolicode.svg" width="120" class="inline" /></p>
    <p><fa-brands-symfony /> Symfony Core Team Member</p>
    <p><cib-twitter class="text-sky-500" /> Twitter <a href="https://twitter.com/welcomattic">@welcomattic</a></p>
    <p><cib-github /> GitHub <a href="https://github.com/welcomattic">@welcomattic</a></p>
</div>

<Credits link="https://unsplash.com/@kellysikkema" name="Kelly Sikkema" side="left"></Credits>`,frontmatter:{layout:"intro-image",image:"images/cover.jpg",title:"SymfonyCon Disneyland Paris 2022",theme:"apple-basic",highlighter:"shiki",lineNumbers:!0,favicon:"symfony.ico",info:`## SymfonyCon Disneyland Paris 2022
`,drawings:{persist:!1},colorSchema:"light",fonts:{provider:"none",local:"SF Pro Display,Josefin Sans",sans:"SF Pro Display",serif:"Josefin Sans"},srcSequence:"content/cover.md"},note:`Hi Everyone! I hope you enjoyed the conference yesterday and today. It's a real pleasure to be here, in person with the Symfony community!
I'm here to talk about Access Token Authentication!

Before starting, I would like to briefly introduce myself, I'm Mathieu Santostefano. I'm working at JoliCode, a french web agency based in Paris.
I'm also Core Team member of Symfony.

If you want to discuss after the conference, you can reach me on Twitter.
I'll publish slides and a demo app on my GitHub.`,index:0,start:0,end:34,source:{filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/content/cover.md",raw:`---
layout: intro-image
image: images/cover.jpg
---

<div class="absolute top-10 right-10 text-slate-200 text-right font-serif">
  <h1>Painless Authentication</h1>
  <h2>with Access Tokens</h2>
</div>

<img src="/images/symfonycon-logo-darkmode-transparent.png" alt="SymfonyCon Logo" class="absolute bottom-7 right-10 w-32" />

<div class="absolute bottom-16 left-10 text-slate-200 font-serif">
    <img class="filter drop-shadow-md ml-auto ml-0 mb-4 clothoid-corner" src="/images/me.jpg" alt="Mathieu Santostefano" width="130"/>
    <h2>Mathieu Santostefano</h2>
    <p>\u{1F9D1}\u200D\u{1F4BB} Web developer at&nbsp;<img src="/images/jolicode.svg" width="120" class="inline" /></p>
    <p><fa-brands-symfony /> Symfony Core Team Member</p>
    <p><cib-twitter class="text-sky-500" /> Twitter <a href="https://twitter.com/welcomattic">@welcomattic</a></p>
    <p><cib-github /> GitHub <a href="https://github.com/welcomattic">@welcomattic</a></p>
</div>

<Credits link="https://unsplash.com/@kellysikkema" name="Kelly Sikkema" side="left"></Credits>

<!--
Hi Everyone! I hope you enjoyed the conference yesterday and today. It's a real pleasure to be here, in person with the Symfony community!
I'm here to talk about Access Token Authentication!

Before starting, I would like to briefly introduce myself, I'm Mathieu Santostefano. I'm working at JoliCode, a french web agency based in Paris.
I'm also Core Team member of Symfony.

If you want to discuss after the conference, you can reach me on Twitter.
I'll publish slides and a demo app on my GitHub.
-->
`,content:`<div class="absolute top-10 right-10 text-slate-200 text-right font-serif">
  <h1>Painless Authentication</h1>
  <h2>with Access Tokens</h2>
</div>

<img src="/images/symfonycon-logo-darkmode-transparent.png" alt="SymfonyCon Logo" class="absolute bottom-7 right-10 w-32" />

<div class="absolute bottom-16 left-10 text-slate-200 font-serif">
    <img class="filter drop-shadow-md ml-auto ml-0 mb-4 clothoid-corner" src="/images/me.jpg" alt="Mathieu Santostefano" width="130"/>
    <h2>Mathieu Santostefano</h2>
    <p>\u{1F9D1}\u200D\u{1F4BB} Web developer at&nbsp;<img src="/images/jolicode.svg" width="120" class="inline" /></p>
    <p><fa-brands-symfony /> Symfony Core Team Member</p>
    <p><cib-twitter class="text-sky-500" /> Twitter <a href="https://twitter.com/welcomattic">@welcomattic</a></p>
    <p><cib-github /> GitHub <a href="https://github.com/welcomattic">@welcomattic</a></p>
</div>

<Credits link="https://unsplash.com/@kellysikkema" name="Kelly Sikkema" side="left"></Credits>`,frontmatter:{layout:"intro-image",image:"images/cover.jpg"},note:`Hi Everyone! I hope you enjoyed the conference yesterday and today. It's a real pleasure to be here, in person with the Symfony community!
I'm here to talk about Access Token Authentication!

Before starting, I would like to briefly introduce myself, I'm Mathieu Santostefano. I'm working at JoliCode, a french web agency based in Paris.
I'm also Core Team member of Symfony.

If you want to discuss after the conference, you can reach me on Twitter.
I'll publish slides and a demo app on my GitHub.`,index:0,start:0,end:34},inline:{raw:`---
theme: apple-basic
highlighter: shiki
lineNumbers: true
title: SymfonyCon Disneyland Paris 2022
favicon: symfony.ico
info: |
  ## SymfonyCon Disneyland Paris 2022
drawings:
  persist: false
colorSchema: light
fonts:
  provider: 'none'
  local: 'SF Pro Display,Josefin Sans'
  sans: 'SF Pro Display'
  serif: 'Josefin Sans'
src: 'content/cover.md'
---
`,title:"SymfonyCon Disneyland Paris 2022",level:1,content:"",frontmatter:{theme:"apple-basic",highlighter:"shiki",lineNumbers:!0,title:"SymfonyCon Disneyland Paris 2022",favicon:"symfony.ico",info:`## SymfonyCon Disneyland Paris 2022
`,drawings:{persist:!1},colorSchema:"light",fonts:{provider:"none",local:"SF Pro Display,Josefin Sans",sans:"SF Pro Display",serif:"Josefin Sans"}},index:0,start:0,end:19},filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/content/cover.md",notesHTML:`<p>Hi Everyone! I hope you enjoyed the conference yesterday and today. It's a real pleasure to be here, in person with the Symfony community!
I'm here to talk about Access Token Authentication!</p>
<p>Before starting, I would like to briefly introduce myself, I'm Mathieu Santostefano. I'm working at JoliCode, a french web agency based in Paris.
I'm also Core Team member of Symfony.</p>
<p>If you want to discuss after the conference, you can reach me on Twitter.
I'll publish slides and a demo app on my GitHub.</p>
`,id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:e8,meta:{layout:"statement",slide:{raw:`---
layout: statement
---

# \u{1F389} On nov. 18 2021, I received an email to join the Core Team

<img src="/images/core-team-mail.png" class="-mt-8 w-8/12 mx-auto" />

<!--
About Core Team, today is a bit special for me because last year, day for day on november eighteen, Fabien sent me an email to invite me joining the Core Team of Symfony. So today is something like my core team anniversary!
-->
`,title:"\u{1F389} On nov. 18 2021, I received an email to join the Core Team",level:1,content:`# \u{1F389} On nov. 18 2021, I received an email to join the Core Team

<img src="/images/core-team-mail.png" class="-mt-8 w-8/12 mx-auto" />`,frontmatter:{layout:"statement"},note:"About Core Team, today is a bit special for me because last year, day for day on november eighteen, Fabien sent me an email to invite me joining the Core Team of Symfony. So today is something like my core team anniversary!",index:1,start:19,end:31,notesHTML:`<p>About Core Team, today is a bit special for me because last year, day for day on november eighteen, Fabien sent me an email to invite me joining the Core Team of Symfony. So today is something like my core team anniversary!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:p8,meta:{layout:"image-right",image:"/images/menu.jpg",slide:{raw:`---
layout: image-right
image: '/images/menu.jpg'
---

# \u{1F37D} On the menu

<v-click>

1. Access token, **what is it?**

</v-click>

<v-click>

2. Implementation with **Symfony 6.1**

</v-click>

<v-click>

3. Time travel

</v-click>

<v-click>

4. Implementation with **Symfony 6.2**

</v-click>

<v-click>

5. Code examples

</v-click>

<v-click>

6. In the future?

</v-click>


<Credits link="https://unsplash.com/@nate_dumlao" name="Nathan Dumlao" side="right"></Credits>
`,title:"\u{1F37D} On the menu",level:1,content:`# \u{1F37D} On the menu

<v-click>

1. Access token, **what is it?**

</v-click>

<v-click>

2. Implementation with **Symfony 6.1**

</v-click>

<v-click>

3. Time travel

</v-click>

<v-click>

4. Implementation with **Symfony 6.2**

</v-click>

<v-click>

5. Code examples

</v-click>

<v-click>

6. In the future?

</v-click>


<Credits link="https://unsplash.com/@nate_dumlao" name="Nathan Dumlao" side="right"></Credits>`,frontmatter:{layout:"image-right",image:"/images/menu.jpg"},index:2,start:31,end:77,notesHTML:"",filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:y8,meta:{layout:"section",slide:{raw:`---
layout: section
---

# \u{1F510} Who has Access Token authentication in their app?

<!--
Ok (thanks), well, let's dive into the topic. Who has already implemented an Access Token Authentication in their apps?
-->
`,title:"\u{1F510} Who has Access Token authentication in their app?",level:1,content:"# \u{1F510} Who has Access Token authentication in their app?",frontmatter:{layout:"section"},note:"Ok (thanks), well, let's dive into the topic. Who has already implemented an Access Token Authentication in their apps?",index:3,start:77,end:87,notesHTML:`<p>Ok (thanks), well, let's dive into the topic. Who has already implemented an Access Token Authentication in their apps?</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:v8,meta:{layout:"section",slide:{raw:`---
layout: section
---

# \u{1F512} Who is working with the new Symfony Security?

<v-click>

Thank you for it, [Wouter](https://github.com/WouterJ) \u{1F64F}

</v-click>

<!--
Who is working with the new Symfony Security (released in 5.1)?

NEXT

I don't know if Wouter is here, but I want to thank him for his amazing work \u{1F44F}
-->
`,title:"\u{1F512} Who is working with the new Symfony Security?",level:1,content:`# \u{1F512} Who is working with the new Symfony Security?

<v-click>

Thank you for it, [Wouter](https://github.com/WouterJ) \u{1F64F}

</v-click>`,frontmatter:{layout:"section"},note:`Who is working with the new Symfony Security (released in 5.1)?

NEXT

I don't know if Wouter is here, but I want to thank him for his amazing work \u{1F44F}`,index:4,start:87,end:107,notesHTML:`<p>Who is working with the new Symfony Security (released in 5.1)?</p>
<p>NEXT</p>
<p>I don't know if Wouter is here, but I want to thank him for his amazing work \u{1F44F}</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:B8,meta:{slide:{raw:`
# \u2728 The New Security System

* Removed everything but Guards
* Moved to an event-based system
* Authenticator based: instantiate a Passport with Badges

> Your job is to use Authenticator or implement your own

<!--
Just to ensure everyone is ok with it, I made a quick reminder about the new Security system 

Everything has been removed but Guards

The process is now an event based system

It introduces Passports & Badges

Your job is to use or implement an Authenticator, in order to instantiate a Passport using data from the Request and a user provider.
-->
`,title:"\u2728 The New Security System",level:1,content:`# \u2728 The New Security System

* Removed everything but Guards
* Moved to an event-based system
* Authenticator based: instantiate a Passport with Badges

> Your job is to use Authenticator or implement your own`,frontmatter:{},note:`Just to ensure everyone is ok with it, I made a quick reminder about the new Security system 

Everything has been removed but Guards

The process is now an event based system

It introduces Passports & Badges

Your job is to use or implement an Authenticator, in order to instantiate a Passport using data from the Request and a user provider.`,index:5,start:108,end:129,notesHTML:`<p>Just to ensure everyone is ok with it, I made a quick reminder about the new Security system</p>
<p>Everything has been removed but Guards</p>
<p>The process is now an event based system</p>
<p>It introduces Passports &amp; Badges</p>
<p>Your job is to use or implement an Authenticator, in order to instantiate a Passport using data from the Request and a user provider.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:S8,meta:{slide:{raw:`
# \u2728 The New Security System

## Event-based system

* You can interact on different levels
  * \`CheckPassportEvent\`
  * \`AuthenticationTokenCreatedEvent\`
  * \`AuthenticationSuccessEvent\`
  * \`LoginSuccessEvent\`
  * \`LoginFailureEvent\`
  * \`LogoutEvent\`
  * \`TokenDeauthenticatedEvent\`
  * \`SwitchUserEvent\`

<!--
The new system allows you to interact on different points of the authentication process like the success login or logout event.
-->
`,title:"\u2728 The New Security System",level:1,content:"# \u2728 The New Security System\n\n## Event-based system\n\n* You can interact on different levels\n  * `CheckPassportEvent`\n  * `AuthenticationTokenCreatedEvent`\n  * `AuthenticationSuccessEvent`\n  * `LoginSuccessEvent`\n  * `LoginFailureEvent`\n  * `LogoutEvent`\n  * `TokenDeauthenticatedEvent`\n  * `SwitchUserEvent`",frontmatter:{},note:"The new system allows you to interact on different points of the authentication process like the success login or logout event.",index:6,start:130,end:149,notesHTML:`<p>The new system allows you to interact on different points of the authentication process like the success login or logout event.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:O8,meta:{slide:{raw:`
# \u2728 The New Security System

## As before, you can still handle what happens in case of authentication success or failure

> \u{1F929} Like many things since the last years in Symfony, it improves the **DX**

<!--
Like many things contributed in Symfony since last years, it improves the DX.
In other words, Symfony takes care of the boring code for you, while leaving you the possibility to modify the default behavior if needed, via events or extension points.
-->
`,title:"\u2728 The New Security System",level:1,content:`# \u2728 The New Security System

## As before, you can still handle what happens in case of authentication success or failure

> \u{1F929} Like many things since the last years in Symfony, it improves the **DX**`,frontmatter:{},note:`Like many things contributed in Symfony since last years, it improves the DX.
In other words, Symfony takes care of the boring code for you, while leaving you the possibility to modify the default behavior if needed, via events or extension points.`,index:7,start:150,end:162,notesHTML:`<p>Like many things contributed in Symfony since last years, it improves the DX.
In other words, Symfony takes care of the boring code for you, while leaving you the possibility to modify the default behavior if needed, via events or extension points.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:L8,meta:{slide:{raw:`
# \u{1FA99} What is an Access Token?

<v-click>

* \`i-am-an-4cc3ss-t0k3n\` **could be an Access Token**

</v-click>

<v-click>

* \`mF_9.B5f-4.1JqM\` **could be an Access Token**

</v-click>

<v-click>

* \`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4...\` **could be an Access Token**

</v-click>

<v-click>

* \u{1F32E} **could be an Access Token**

</v-click>

<v-click>

> \u{1F521} **An Access Token is represented by a string.**

</v-click>

<!--
Ok. Concretely, what is an access token?

1.

2.

3.

4., yes a taco emoji could be an access token

All those strings could be access tokens.

NEXT

Basically, any string could be an access token. 
But some are self-contained, like JWT. 

Once decoded, they gives you exploitable data like user identifier, expiration date etc
-->
`,title:"\u{1FA99} What is an Access Token?",level:1,content:`# \u{1FA99} What is an Access Token?

<v-click>

* \`i-am-an-4cc3ss-t0k3n\` **could be an Access Token**

</v-click>

<v-click>

* \`mF_9.B5f-4.1JqM\` **could be an Access Token**

</v-click>

<v-click>

* \`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4...\` **could be an Access Token**

</v-click>

<v-click>

* \u{1F32E} **could be an Access Token**

</v-click>

<v-click>

> \u{1F521} **An Access Token is represented by a string.**

</v-click>`,frontmatter:{},note:`Ok. Concretely, what is an access token?

1.

2.

3.

4., yes a taco emoji could be an access token

All those strings could be access tokens.

NEXT

Basically, any string could be an access token. 
But some are self-contained, like JWT. 

Once decoded, they gives you exploitable data like user identifier, expiration date etc`,index:8,start:163,end:217,notesHTML:`<p>Ok. Concretely, what is an access token?</p>
<ol>
<li></li>
<li></li>
<li></li>
</ol>
<p>4., yes a taco emoji could be an access token</p>
<p>All those strings could be access tokens.</p>
<p>NEXT</p>
<p>Basically, any string could be an access token.
But some are self-contained, like JWT.</p>
<p>Once decoded, they gives you exploitable data like user identifier, expiration date etc</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:j8,meta:{slide:{raw:`
# \u{1F4D1} Use cases

Authentication with **Access Token** is useful in some contexts, like

* Stateless user login
* **API Gateway** in front of private APIs
* Application that access to personal data provided by a third party
* **Micro-services** between them
* Client applications of a **SaaS API**
* \u2026

<!--
When are they used? There are plenty of use cases. Access tokens are widely used in our industry, especially between applications.  

For instance, in a micro services architecture, each service could request others, with access tokens, to ensure that they are granted to access resources.
-->
`,title:"\u{1F4D1} Use cases",level:1,content:`# \u{1F4D1} Use cases

Authentication with **Access Token** is useful in some contexts, like

* Stateless user login
* **API Gateway** in front of private APIs
* Application that access to personal data provided by a third party
* **Micro-services** between them
* Client applications of a **SaaS API**
* \u2026`,frontmatter:{},note:`When are they used? There are plenty of use cases. Access tokens are widely used in our industry, especially between applications.  

For instance, in a micro services architecture, each service could request others, with access tokens, to ensure that they are granted to access resources.`,index:9,start:218,end:236,notesHTML:`<p>When are they used? There are plenty of use cases. Access tokens are widely used in our industry, especially between applications.</p>
<p>For instance, in a micro services architecture, each service could request others, with access tokens, to ensure that they are granted to access resources.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:z8,meta:{slide:{raw:`
# \u{1F928} Ok, so?

* Must be sent in a **HTTP request** to fetch a protected resource
* The application expects to find a token, \u{1F449} **validate** \u{1F448} it and decide to allow access or not

<v-click>
  <img src="/images/auth-schema.png" class="mt-10 w-10/12 mx-auto" />
</v-click>

<!--
To really be access tokens, those strings must be sent in HTTP request.
The application expects to find a token, then validate it, in order to let you access the resource.  

NEXT

Here is a basic schema representing a client requesting a protected resource with an access token passed in query string. The application on the server will returns the resource only if the token is valid.
-->
`,title:"\u{1F928} Ok, so?",level:1,content:`# \u{1F928} Ok, so?

* Must be sent in a **HTTP request** to fetch a protected resource
* The application expects to find a token, \u{1F449} **validate** \u{1F448} it and decide to allow access or not

<v-click>
  <img src="/images/auth-schema.png" class="mt-10 w-10/12 mx-auto" />
</v-click>`,frontmatter:{},note:`To really be access tokens, those strings must be sent in HTTP request.
The application expects to find a token, then validate it, in order to let you access the resource.  

NEXT

Here is a basic schema representing a client requesting a protected resource with an access token passed in query string. The application on the server will returns the resource only if the token is valid.`,index:10,start:237,end:256,notesHTML:`<p>To really be access tokens, those strings must be sent in HTTP request.
The application expects to find a token, then validate it, in order to let you access the resource.</p>
<p>NEXT</p>
<p>Here is a basic schema representing a client requesting a protected resource with an access token passed in query string. The application on the server will returns the resource only if the token is valid.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Z8,meta:{layout:"section",slide:{raw:`---
layout: section
---

# \u{1F6C2} Token issuer
## Let's assume our tokens come from an external authentication server,
## the user identity has been verified by this server

<!--
To simplify the talk, we will assume that all tokens are issued by an authentication server. 
  
We don't need to verify the user identity, it has already be done by the authentication server before providing the token, we only have to focus on the validation of the token itself.
-->
`,title:"\u{1F6C2} Token issuer",level:1,content:`# \u{1F6C2} Token issuer
## Let's assume our tokens come from an external authentication server,
## the user identity has been verified by this server`,frontmatter:{layout:"section"},note:`To simplify the talk, we will assume that all tokens are issued by an authentication server. 
  
We don't need to verify the user identity, it has already be done by the authentication server before providing the token, we only have to focus on the validation of the token itself.`,index:11,start:256,end:270,notesHTML:`<p>To simplify the talk, we will assume that all tokens are issued by an authentication server.</p>
<p>We don't need to verify the user identity, it has already be done by the authentication server before providing the token, we only have to focus on the validation of the token itself.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:t5,meta:{slide:{raw:`
# \u2705 Validate the token?

## The validation process is up to <u>you</u>

* Check if the string is **present** in a database
* **Compute a hash** and compare it to the expected one
* **Decode the token** (base64, \u2026) and make **assertions** on decoded values
* Ensure the **expiration date** is not passed if needed
* Check if the token has been **revoked** or not
* Call an **OpenID Connect** server to validate the token
* \u2026

<!--
About validation, depending on the kind of token you use, the process will be different. 
It is up to you to define and code it.

It could be comparing strings, computing signatures, checking revocation or expiration date, call an OpenID Connect server, etc\u2026
-->
`,title:"\u2705 Validate the token?",level:1,content:`# \u2705 Validate the token?

## The validation process is up to <u>you</u>

* Check if the string is **present** in a database
* **Compute a hash** and compare it to the expected one
* **Decode the token** (base64, \u2026) and make **assertions** on decoded values
* Ensure the **expiration date** is not passed if needed
* Check if the token has been **revoked** or not
* Call an **OpenID Connect** server to validate the token
* \u2026`,frontmatter:{},note:`About validation, depending on the kind of token you use, the process will be different. 
It is up to you to define and code it.

It could be comparing strings, computing signatures, checking revocation or expiration date, call an OpenID Connect server, etc\u2026`,index:12,start:271,end:291,notesHTML:`<p>About validation, depending on the kind of token you use, the process will be different.
It is up to you to define and code it.</p>
<p>It could be comparing strings, computing signatures, checking revocation or expiration date, call an OpenID Connect server, etc\u2026</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:s5,meta:{layout:"section",slide:{raw:`---
layout: section
---

# \u{1F914} How to set up an Access Token auth with Symfony?

<!--
So, How Symfony can helps you to implement access token authentication?
-->
`,title:"\u{1F914} How to set up an Access Token auth with Symfony?",level:1,content:"# \u{1F914} How to set up an Access Token auth with Symfony?",frontmatter:{layout:"section"},note:"So, How Symfony can helps you to implement access token authentication?",index:13,start:291,end:301,notesHTML:`<p>So, How Symfony can helps you to implement access token authentication?</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:l5,meta:{slide:{raw:`
# \u{1F3AC} Marvel Scenarios Manager, a web app for writers and reviewers

* Each user (Writers and Reviewers) has an API key
* Admin for Writers
  * Form login authentication
  * Writers can create Scenarios
* Web app for Reviewers
  * Call the private API using API Key obtained after Reviewer login
* Admins can revoke API key at any time

<!--
For the fun, let's imagine a basic and fake application for Marvel. 

Dedicated to scenarios writing, with a private API.

Some basic features:

  Admin panel, protected by form login

  Writers can create scenarios

  Reviewers web app can request private api using the api key of the Writer

  Admins can revoke api key at anytime.
-->
`,title:"\u{1F3AC} Marvel Scenarios Manager, a web app for writers and reviewers",level:1,content:`# \u{1F3AC} Marvel Scenarios Manager, a web app for writers and reviewers

* Each user (Writers and Reviewers) has an API key
* Admin for Writers
  * Form login authentication
  * Writers can create Scenarios
* Web app for Reviewers
  * Call the private API using API Key obtained after Reviewer login
* Admins can revoke API key at any time`,frontmatter:{},note:`For the fun, let's imagine a basic and fake application for Marvel. 

Dedicated to scenarios writing, with a private API.

Some basic features:

  Admin panel, protected by form login

  Writers can create scenarios

  Reviewers web app can request private api using the api key of the Writer

  Admins can revoke api key at anytime.`,index:14,start:302,end:329,notesHTML:`<p>For the fun, let's imagine a basic and fake application for Marvel.</p>
<p>Dedicated to scenarios writing, with a private API.</p>
<p>Some basic features:</p>
<p>Admin panel, protected by form login</p>
<p>Writers can create scenarios</p>
<p>Reviewers web app can request private api using the api key of the Writer</p>
<p>Admins can revoke api key at anytime.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:c5,meta:{slide:{raw:`
<img src="/images/demo-app-schema.png" />

<!--
The reviewer authentication process starts with login to obtain an access token.
Then, the web app can request the API using the user access token.
-->
`,content:'<img src="/images/demo-app-schema.png" />',frontmatter:{},note:`The reviewer authentication process starts with login to obtain an access token.
Then, the web app can request the API using the user access token.`,index:15,start:330,end:338,notesHTML:`<p>The reviewer authentication process starts with login to obtain an access token.
Then, the web app can request the API using the user access token.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:d5,meta:{slide:{raw:`
<img src="/images/demo-app-schema-2.png" />

<!--
I will focus on the reviewer part for the rest of the talk. Let's see how to implement it with Symfony.
-->
`,content:'<img src="/images/demo-app-schema-2.png" />',frontmatter:{},note:"I will focus on the reviewer part for the rest of the talk. Let's see how to implement it with Symfony.",index:16,start:339,end:346,notesHTML:`<p>I will focus on the reviewer part for the rest of the talk. Let's see how to implement it with Symfony.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:g5,meta:{slide:{raw:`
# \u{1F449} With Symfony <= 6.1

## Create a custom Authenticator

<br>

1. Extract **token** 
2. Decode **token** if needed (JWT, SAML, \u2026)
3. Check **token** validity
4. Retrieve user identifier from the **token**
5. Then load User object
6. Handle authentication failure cases

<!--
With Symfony 6.1 and before, thanks to the new Security system, we have to work in a single file : the Authenticator :

It's where we will extract the token

decode it

check the validity

retrieve the user identifier 

load the user

handle failure cases

All these steps are standardized in a RFC
-->
`,title:"\u{1F449} With Symfony <= 6.1",level:1,content:`# \u{1F449} With Symfony <= 6.1

## Create a custom Authenticator

<br>

1. Extract **token** 
2. Decode **token** if needed (JWT, SAML, \u2026)
3. Check **token** validity
4. Retrieve user identifier from the **token**
5. Then load User object
6. Handle authentication failure cases`,frontmatter:{},note:`With Symfony 6.1 and before, thanks to the new Security system, we have to work in a single file : the Authenticator :

It's where we will extract the token

decode it

check the validity

retrieve the user identifier 

load the user

handle failure cases

All these steps are standardized in a RFC`,index:17,start:347,end:379,notesHTML:`<p>With Symfony 6.1 and before, thanks to the new Security system, we have to work in a single file : the Authenticator :</p>
<p>It's where we will extract the token</p>
<p>decode it</p>
<p>check the validity</p>
<p>retrieve the user identifier</p>
<p>load the user</p>
<p>handle failure cases</p>
<p>All these steps are standardized in a RFC</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:k5,meta:{slide:{raw:`
# \u{1F442} Have you heard about [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750)?

* Token transportation
  * In **request header**? \u27A1 \`Authorization\` header
  * In **query string**? \u27A1 parameter \`access_token\`
  * In **request body**? \u27A1 parameter \`access_token\`

<v-click>

* \`WWW-Authenticate\` **response header** in case of failure

</v-click>

<v-click>

* **HTTPS** protocol mandatory

</v-click>

<!--
The RFC 6750 is about Bearer Token Usage. It defines many things from the token transportation, to the response headers in case of failure.

It's basically what we have to implement to properly handle authentication with access token.
-->
`,title:"\u{1F442} Have you heard about [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750)?",level:1,content:`# \u{1F442} Have you heard about [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750)?

* Token transportation
  * In **request header**? \u27A1 \`Authorization\` header
  * In **query string**? \u27A1 parameter \`access_token\`
  * In **request body**? \u27A1 parameter \`access_token\`

<v-click>

* \`WWW-Authenticate\` **response header** in case of failure

</v-click>

<v-click>

* **HTTPS** protocol mandatory

</v-click>`,frontmatter:{},note:`The RFC 6750 is about Bearer Token Usage. It defines many things from the token transportation, to the response headers in case of failure.

It's basically what we have to implement to properly handle authentication with access token.`,index:18,start:380,end:406,notesHTML:`<p>The RFC 6750 is about Bearer Token Usage. It defines many things from the token transportation, to the response headers in case of failure.</p>
<p>It's basically what we have to implement to properly handle authentication with access token.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:S5,meta:{slide:{raw:`
<img src="/images/auth-process-61.jpg" width="900" class="mx-auto" />

<style>
.slidev-layout {
  background-color: #f8f9fa;
}
</style>

<!--
as a picture is sometimes better than a long speech, here is the authentication process. In red what you are responsible for. And in black, what Symfony does by default but that you can customize if needed.
-->
`,content:`<img src="/images/auth-process-61.jpg" width="900" class="mx-auto" />

<style>
.slidev-layout {
  background-color: #f8f9fa;
}
</style>`,frontmatter:{},note:"as a picture is sometimes better than a long speech, here is the authentication process. In red what you are responsible for. And in black, what Symfony does by default but that you can customize if needed.",index:19,start:407,end:420,notesHTML:`<p>as a picture is sometimes better than a long speech, here is the authentication process. In red what you are responsible for. And in black, what Symfony does by default but that you can customize if needed.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:lw,meta:{slide:{raw:`
# \u{1F9D1}\u200D\u{1F4BB} Some code

\`\`\`php
/** Simplified version */
private function extractToken(Request $req): ?string
{
    return match (true) {
        // Header
        $req->headers->has('Authorization') => str_replace('Bearer ', '', $req->headers->get('Authorization')),

        // Query string
        $req->query->has('access_token') => $req->query->get('access_token'),

        // Request body
        $req->request->has('access_token') => $req->request->get('access_token'),

        default => null,
    };
}
\`\`\`

<!--
Here is some code, simplified, used to extract the token from the Request.
It supports extraction from header, query string, or request body.

I said simplified, because in real life we should check on types, HTTP methods, make some assertions on token length, etc.

Another limitation here is the order of extraction source is fixed. We cannot configure it differently depending on environment for instance.
-->
`,title:"\u{1F9D1}\u200D\u{1F4BB} Some code",level:1,content:`# \u{1F9D1}\u200D\u{1F4BB} Some code

\`\`\`php
/** Simplified version */
private function extractToken(Request $req): ?string
{
    return match (true) {
        // Header
        $req->headers->has('Authorization') => str_replace('Bearer ', '', $req->headers->get('Authorization')),

        // Query string
        $req->query->has('access_token') => $req->query->get('access_token'),

        // Request body
        $req->request->has('access_token') => $req->request->get('access_token'),

        default => null,
    };
}
\`\`\``,frontmatter:{},note:`Here is some code, simplified, used to extract the token from the Request.
It supports extraction from header, query string, or request body.

I said simplified, because in real life we should check on types, HTTP methods, make some assertions on token length, etc.

Another limitation here is the order of extraction source is fixed. We cannot configure it differently depending on environment for instance.`,index:20,start:421,end:452,notesHTML:`<p>Here is some code, simplified, used to extract the token from the Request.
It supports extraction from header, query string, or request body.</p>
<p>I said simplified, because in real life we should check on types, HTTP methods, make some assertions on token length, etc.</p>
<p>Another limitation here is the order of extraction source is fixed. We cannot configure it differently depending on environment for instance.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:cw,meta:{slide:{raw:`
# \u{1F9D1}\u200D\u{1F4BB} Some code

\`\`\`php
public function authenticate(Request $req): Passport
{
    if (null === $apiKey = $this->extractToken($req)) {
        throw new AuthenticationException('No API Key provided');
    }
    
    // Here, it could be some logic to validate the token

    return new SelfValidatingPassport(
        new UserBadge($apiKey,
            function (string $apiKey) {
                return $this->userRepository->findOneByApiKey($apiKey);
            }
        )
    );
}
\`\`\`

<!--
Now, the token is extracted, we have to retrieve the user. 
Here we assume the user identifier is the access token (variable $apiKey).

*soupire*, very interesting code, isn't it?
-->
`,title:"\u{1F9D1}\u200D\u{1F4BB} Some code",level:1,content:`# \u{1F9D1}\u200D\u{1F4BB} Some code

\`\`\`php
public function authenticate(Request $req): Passport
{
    if (null === $apiKey = $this->extractToken($req)) {
        throw new AuthenticationException('No API Key provided');
    }
    
    // Here, it could be some logic to validate the token

    return new SelfValidatingPassport(
        new UserBadge($apiKey,
            function (string $apiKey) {
                return $this->userRepository->findOneByApiKey($apiKey);
            }
        )
    );
}
\`\`\``,frontmatter:{},note:`Now, the token is extracted, we have to retrieve the user. 
Here we assume the user identifier is the access token (variable $apiKey).

*soupire*, very interesting code, isn't it?`,index:21,start:453,end:482,notesHTML:`<p>Now, the token is extracted, we have to retrieve the user.
Here we assume the user identifier is the access token (variable $apiKey).</p>
<p><em>soupire</em>, very interesting code, isn't it?</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:fw,meta:{slide:{raw:`
# \u{1F971} Boring code

* We have to repeat this code in all our applications, **boring**
* Our responsibility to respect RFC6750, **boring**
* No body likes boring code
* Boring code is code we rewrite in all projects, no business value
* Poor **D**eveloper e**X**perience, Symfony tends to improve DX


## This is definitely improvable

<!--
No.

The extraction code is boring code. No body wants to maintain such code, or replicate it on multiple applications. 

Boring code is code we rewrite in all projects, no business value

As it must follow a RFC, this code must be rock solid, battle tested and it's not intended to be modified over time.

Since a few versions, Symfony tends to improve the DX, to make the framework more pleasant for developers, so they can focus on adding business value.

Anyway, this is improvable!
-->
`,title:"\u{1F971} Boring code",level:1,content:`# \u{1F971} Boring code

* We have to repeat this code in all our applications, **boring**
* Our responsibility to respect RFC6750, **boring**
* No body likes boring code
* Boring code is code we rewrite in all projects, no business value
* Poor **D**eveloper e**X**perience, Symfony tends to improve DX


## This is definitely improvable`,frontmatter:{},note:`No.

The extraction code is boring code. No body wants to maintain such code, or replicate it on multiple applications. 

Boring code is code we rewrite in all projects, no business value

As it must follow a RFC, this code must be rock solid, battle tested and it's not intended to be modified over time.

Since a few versions, Symfony tends to improve the DX, to make the framework more pleasant for developers, so they can focus on adding business value.

Anyway, this is improvable!`,index:22,start:483,end:509,notesHTML:`<p>No.</p>
<p>The extraction code is boring code. No body wants to maintain such code, or replicate it on multiple applications.</p>
<p>Boring code is code we rewrite in all projects, no business value</p>
<p>As it must follow a RFC, this code must be rock solid, battle tested and it's not intended to be modified over time.</p>
<p>Since a few versions, Symfony tends to improve the DX, to make the framework more pleasant for developers, so they can focus on adding business value.</p>
<p>Anyway, this is improvable!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:yw,meta:{layout:"image",image:"images/dr-strange.gif",slide:{raw:`---
layout: image
image: 'images/dr-strange.gif'
---

<!--
GIF DR STRANGE

Ok, let's go back in time to understand how we managed to improve this!
-->
`,content:"",frontmatter:{layout:"image",image:"images/dr-strange.gif"},note:`GIF DR STRANGE

Ok, let's go back in time to understand how we managed to improve this!`,index:23,start:509,end:520,notesHTML:`<p>GIF DR STRANGE</p>
<p>Ok, let's go back in time to understand how we managed to improve this!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:bw,meta:{slide:{raw:`
# \u231A Discussions started long time ago

* **April 2019**, at EU FOSSA Hackathon

<img src="/images/pr-30914.png" class="filter drop-shadow-2xl mx-auto mt-12" width="600" />

<div class="timeline">
  <div class="dot active"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>

<!--
In 2019, European Union has organized a Hackathon in which Symfony has participated with contributors and Core Team members.
There was discussion about the whole Security component, and a point about Social Login with Oauth2 component.

It was the starting point of the new security system
-->
`,title:"\u231A Discussions started long time ago",level:1,content:`# \u231A Discussions started long time ago

* **April 2019**, at EU FOSSA Hackathon

<img src="/images/pr-30914.png" class="filter drop-shadow-2xl mx-auto mt-12" width="600" />

<div class="timeline">
  <div class="dot active"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`,frontmatter:{},note:`In 2019, European Union has organized a Hackathon in which Symfony has participated with contributors and Core Team members.
There was discussion about the whole Security component, and a point about Social Login with Oauth2 component.

It was the starting point of the new security system`,index:24,start:521,end:544,notesHTML:`<p>In 2019, European Union has organized a Hackathon in which Symfony has participated with contributors and Core Team members.
There was discussion about the whole Security component, and a point about Social Login with Oauth2 component.</p>
<p>It was the starting point of the new security system</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Sw,meta:{slide:{raw:`
# \u231A Discussions started long time ago

* **June 2019**, first PR about OAuth2 Component. \u274C Aborted

<img src="/images/pr-31952.png" class="filter drop-shadow-2xl mx-auto mt-12" width="600" />

<div class="timeline">
  <div class="dot"></div>
  <div class="dot active"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>

<!--
A few weeks later, the first attempt about support access token natively in Symfony was made by Guillaume Loulier. 

He opens a pull request to add an OAuth2 component into the Core. But due to bunch of OAuth implementations in the PHP community, it has been decided not to merge it.

Moreover, it was focused on OAuth2. It was a little too specific.
-->
`,title:"\u231A Discussions started long time ago",level:1,content:`# \u231A Discussions started long time ago

* **June 2019**, first PR about OAuth2 Component. \u274C Aborted

<img src="/images/pr-31952.png" class="filter drop-shadow-2xl mx-auto mt-12" width="600" />

<div class="timeline">
  <div class="dot"></div>
  <div class="dot active"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`,frontmatter:{},note:`A few weeks later, the first attempt about support access token natively in Symfony was made by Guillaume Loulier. 

He opens a pull request to add an OAuth2 component into the Core. But due to bunch of OAuth implementations in the PHP community, it has been decided not to merge it.

Moreover, it was focused on OAuth2. It was a little too specific.`,index:25,start:545,end:569,notesHTML:`<p>A few weeks later, the first attempt about support access token natively in Symfony was made by Guillaume Loulier.</p>
<p>He opens a pull request to add an OAuth2 component into the Core. But due to bunch of OAuth implementations in the PHP community, it has been decided not to merge it.</p>
<p>Moreover, it was focused on OAuth2. It was a little too specific.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Iw,meta:{slide:{raw:`
# \u231A Discussions started long time ago

* **September 2019**, Wouter's 1st PR about redesign of Security

<img src="/images/pr-33558.png" class="filter drop-shadow-2xl mx-auto mt-12" width="600" />

<div class="timeline">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot active"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>

<!--
Back to school in september 2019, Wouter starts working on rewriting Symfony's Security component. 

What better time than this to consider the future of the component and the extension of its capabilities?
-->
`,title:"\u231A Discussions started long time ago",level:1,content:`# \u231A Discussions started long time ago

* **September 2019**, Wouter's 1st PR about redesign of Security

<img src="/images/pr-33558.png" class="filter drop-shadow-2xl mx-auto mt-12" width="600" />

<div class="timeline">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot active"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`,frontmatter:{},note:`Back to school in september 2019, Wouter starts working on rewriting Symfony's Security component. 

What better time than this to consider the future of the component and the extension of its capabilities?`,index:26,start:570,end:592,notesHTML:`<p>Back to school in september 2019, Wouter starts working on rewriting Symfony's Security component.</p>
<p>What better time than this to consider the future of the component and the extension of its capabilities?</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:qw,meta:{slide:{raw:`
# \u231A Discussions started long time ago

* **April 2020**, continuation of Wouter's work on new Security system

<div class="grid grid-cols-2 gap-4 mt-12">
  <img src="/images/pr-36570.png" class="filter drop-shadow-2xl" width="400" />
  <img src="/images/pr-36574.png" class="filter drop-shadow-2xl" width="400" />
</div>

<div class="timeline">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot active"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>

<!--
6 months later, Wouter is still working on the new Security component by removing anonymous authentication, and integrating Guards with the new system. 
It was a huge work. Now, we have the new Authenticator feature!
-->
`,title:"\u231A Discussions started long time ago",level:1,content:`# \u231A Discussions started long time ago

* **April 2020**, continuation of Wouter's work on new Security system

<div class="grid grid-cols-2 gap-4 mt-12">
  <img src="/images/pr-36570.png" class="filter drop-shadow-2xl" width="400" />
  <img src="/images/pr-36574.png" class="filter drop-shadow-2xl" width="400" />
</div>

<div class="timeline">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot active"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`,frontmatter:{},note:`6 months later, Wouter is still working on the new Security component by removing anonymous authentication, and integrating Guards with the new system. 
It was a huge work. Now, we have the new Authenticator feature!`,index:27,start:593,end:617,notesHTML:`<p>6 months later, Wouter is still working on the new Security component by removing anonymous authentication, and integrating Guards with the new system.
It was a huge work. Now, we have the new Authenticator feature!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Kw,meta:{slide:{raw:`
# \u231A Discussions started long time ago

* **March 2022**, Vincent Chalamon opens an issue about "Bearer Authenticator"

<img src="/images/issue-45844.png" class="mx-auto mt-6 filter drop-shadow-2xl" width="600" />

<div class="timeline">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot active"></div>
  <div class="dot"></div>
</div>

<!--
Spring 2022, this year. Vincent Chalamon from Les Tilleuls starts the discussion about a new Bearer Authenticator which allows developers to configure an authentication based on access tokens
-->
`,title:"\u231A Discussions started long time ago",level:1,content:`# \u231A Discussions started long time ago

* **March 2022**, Vincent Chalamon opens an issue about "Bearer Authenticator"

<img src="/images/issue-45844.png" class="mx-auto mt-6 filter drop-shadow-2xl" width="600" />

<div class="timeline">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot active"></div>
  <div class="dot"></div>
</div>`,frontmatter:{},note:"Spring 2022, this year. Vincent Chalamon from Les Tilleuls starts the discussion about a new Bearer Authenticator which allows developers to configure an authentication based on access tokens",index:28,start:618,end:638,notesHTML:`<p>Spring 2022, this year. Vincent Chalamon from Les Tilleuls starts the discussion about a new Bearer Authenticator which allows developers to configure an authentication based on access tokens</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Xw,meta:{slide:{raw:`
# \u231A Discussions started long time ago

* Finally, on **May 21st, 2022**, Vincent Chalamon & Florent Morselli each open a pull request to implement the Authenticator


<div class="grid grid-cols-2 gap-4 mt-12">
  <img src="/images/pr-46429.png" class="filter drop-shadow-xl" width="400" />
  <img src="/images/pr-46428.png" class="filter drop-shadow-xl" width="400" />
</div>

<div class="timeline">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot active"></div>
</div>

<!--
Later on the spring, on the very same day, may 21st, Vincent Chalamon and Florent Morselli opened 2 pull requests, one each to implement this authenticator.
-->
`,title:"\u231A Discussions started long time ago",level:1,content:`# \u231A Discussions started long time ago

* Finally, on **May 21st, 2022**, Vincent Chalamon & Florent Morselli each open a pull request to implement the Authenticator


<div class="grid grid-cols-2 gap-4 mt-12">
  <img src="/images/pr-46429.png" class="filter drop-shadow-xl" width="400" />
  <img src="/images/pr-46428.png" class="filter drop-shadow-xl" width="400" />
</div>

<div class="timeline">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot active"></div>
</div>`,frontmatter:{},note:"Later on the spring, on the very same day, may 21st, Vincent Chalamon and Florent Morselli opened 2 pull requests, one each to implement this authenticator.",index:29,start:639,end:663,notesHTML:`<p>Later on the spring, on the very same day, may 21st, Vincent Chalamon and Florent Morselli opened 2 pull requests, one each to implement this authenticator.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:n2,meta:{slide:{raw:`
# \u{1F929} Thanks a lot **Florent Morselli <img src="/images/spomky.png" width=52 class="rounded-full inline" />&nbsp;[@Spomky](https://github.com/Spomky)**

<img class="filter drop-shadow-2xl w-9/12 mx-auto mt-6" src="/images/pr-46428.png" alt="Symfony Pull request #46428"/>

<!--
Finally, after some design debates, the pull request of Florent has been merged!
His pull request is lighter than Vincent one, as it does not provide an arbitrary JWT validation.
It was decided to leave the choice to the developers about the token validation, for now.
-->
`,title:'\u{1F929} Thanks a lot **Florent Morselli <img src="/images/spomky.png" width=52 class="rounded-full inline" />&nbsp;[@Spomky](https://github.com/Spomky)**',level:1,content:`# \u{1F929} Thanks a lot **Florent Morselli <img src="/images/spomky.png" width=52 class="rounded-full inline" />&nbsp;[@Spomky](https://github.com/Spomky)**

<img class="filter drop-shadow-2xl w-9/12 mx-auto mt-6" src="/images/pr-46428.png" alt="Symfony Pull request #46428"/>`,frontmatter:{},note:`Finally, after some design debates, the pull request of Florent has been merged!
His pull request is lighter than Vincent one, as it does not provide an arbitrary JWT validation.
It was decided to leave the choice to the developers about the token validation, for now.`,index:30,start:664,end:675,notesHTML:`<p>Finally, after some design debates, the pull request of Florent has been merged!
His pull request is lighter than Vincent one, as it does not provide an arbitrary JWT validation.
It was decided to leave the choice to the developers about the token validation, for now.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:o2,meta:{layout:"statement",slide:{raw:`---
layout: statement
---

# Adding a feature to Symfony could take years

<!--
This feature is an example that adding a feature to Symfony could take years. 

Years of discussion between contributors, years of trials, of closed Pull Requests.

This is normal, it's the way Symfony lives. Between the birth of an idea and the release of a feature, it can take days, weeks, months or years. It all depends on the discussions within the community, the complexity of the feature, its impact on the existing.

And even if in the end, like here, the feature may seem small and uncomplicated, it took a lot of time before it was included in the core, because we had to find the right way to do it, a sustainable way.
-->
`,title:"Adding a feature to Symfony could take years",level:1,content:"# Adding a feature to Symfony could take years",frontmatter:{layout:"statement"},note:`This feature is an example that adding a feature to Symfony could take years. 

Years of discussion between contributors, years of trials, of closed Pull Requests.

This is normal, it's the way Symfony lives. Between the birth of an idea and the release of a feature, it can take days, weeks, months or years. It all depends on the discussions within the community, the complexity of the feature, its impact on the existing.

And even if in the end, like here, the feature may seem small and uncomplicated, it took a lot of time before it was included in the core, because we had to find the right way to do it, a sustainable way.`,index:31,start:675,end:691,notesHTML:`<p>This feature is an example that adding a feature to Symfony could take years.</p>
<p>Years of discussion between contributors, years of trials, of closed Pull Requests.</p>
<p>This is normal, it's the way Symfony lives. Between the birth of an idea and the release of a feature, it can take days, weeks, months or years. It all depends on the discussions within the community, the complexity of the feature, its impact on the existing.</p>
<p>And even if in the end, like here, the feature may seem small and uncomplicated, it took a lot of time before it was included in the core, because we had to find the right way to do it, a sustainable way.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:l2,meta:{layout:"section",slide:{raw:`---
layout: section
---

# \u{1F680} Let's meet AccessTokenAuthenticator in Symfony 6.2
`,title:"\u{1F680} Let's meet AccessTokenAuthenticator in Symfony 6.2",level:1,content:"# \u{1F680} Let's meet AccessTokenAuthenticator in Symfony 6.2",frontmatter:{layout:"section"},index:32,start:691,end:697,notesHTML:"",filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:p2,meta:{slide:{raw:`
# AccessTokenAuthenticator

* Takes care of token extraction
  * Header
  * Query string
  * Request body
  * And/or your **Custom extractors**
* Calls **your Token Handler** to check the token (revocation, expiration, signature, \u2026)
* Custom success / failure handlers if needed

> \u2728 All this via configuration!

<style>
  blockquote {
    margin-top: 20px;
  }
</style>

<!--
This brand new authenticator will take care of the token extraction for you. By default, it can extract a token from the header, the query string or the request body. If you need to extract the token from elsewhere, you can write your own token extractor. 

Side note about extraction: Be careful, extracting token from query string or request body is not recommended in production for security reasons, tokens could be readable on the network.
  
Then, the authenticator will look for your token handler, to find the user identifier from the token.

Finally, like in any authenticator, a Passport will be instantiate with the user identifier and the user provider.

Except the token handler or custom things, all of this could be done by configuration.
-->
`,title:"AccessTokenAuthenticator",level:1,content:`# AccessTokenAuthenticator

* Takes care of token extraction
  * Header
  * Query string
  * Request body
  * And/or your **Custom extractors**
* Calls **your Token Handler** to check the token (revocation, expiration, signature, \u2026)
* Custom success / failure handlers if needed

> \u2728 All this via configuration!

<style>
  blockquote {
    margin-top: 20px;
  }
</style>`,frontmatter:{},note:`This brand new authenticator will take care of the token extraction for you. By default, it can extract a token from the header, the query string or the request body. If you need to extract the token from elsewhere, you can write your own token extractor. 

Side note about extraction: Be careful, extracting token from query string or request body is not recommended in production for security reasons, tokens could be readable on the network.
  
Then, the authenticator will look for your token handler, to find the user identifier from the token.

Finally, like in any authenticator, a Passport will be instantiate with the user identifier and the user provider.

Except the token handler or custom things, all of this could be done by configuration.`,index:33,start:698,end:729,notesHTML:`<p>This brand new authenticator will take care of the token extraction for you. By default, it can extract a token from the header, the query string or the request body. If you need to extract the token from elsewhere, you can write your own token extractor.</p>
<p>Side note about extraction: Be careful, extracting token from query string or request body is not recommended in production for security reasons, tokens could be readable on the network.</p>
<p>Then, the authenticator will look for your token handler, to find the user identifier from the token.</p>
<p>Finally, like in any authenticator, a Passport will be instantiate with the user identifier and the user provider.</p>
<p>Except the token handler or custom things, all of this could be done by configuration.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:v2,meta:{slide:{raw:`
# What kind of tokens could be used?

* JWT
* SAML2
* [Biscuit](https://www.biscuitsec.org/)
* [Macaroons](https://research.google/pubs/pub41892/)
* Homemade tokens (with chocolate chips and nuts \u{1F60B})
* \u2026
* Any kind of token, as it's up to you to handle them

<div class="absolute right-40 top-36 grid grid-cols-2 gap-10">
  <img src="/images/jwt.svg" width="90" />
  <img src="/images/saml.svg" width="90" />
  <img src="/images/biscuit.png" width="90" />
  <img src="/images/macarons.png" width="90" />
</div>

<!--
As this Authenticator aims to follow the RFC6750, and it's up to you to process the token, any kind of token can be handled, even homemade ones. 

Of course, you can use self-contained token like JWT, and even more powerful token like Macaroons or Biscuit, which embed permissions attenuation capabilities.
-->
`,title:"What kind of tokens could be used?",level:1,content:`# What kind of tokens could be used?

* JWT
* SAML2
* [Biscuit](https://www.biscuitsec.org/)
* [Macaroons](https://research.google/pubs/pub41892/)
* Homemade tokens (with chocolate chips and nuts \u{1F60B})
* \u2026
* Any kind of token, as it's up to you to handle them

<div class="absolute right-40 top-36 grid grid-cols-2 gap-10">
  <img src="/images/jwt.svg" width="90" />
  <img src="/images/saml.svg" width="90" />
  <img src="/images/biscuit.png" width="90" />
  <img src="/images/macarons.png" width="90" />
</div>`,frontmatter:{},note:`As this Authenticator aims to follow the RFC6750, and it's up to you to process the token, any kind of token can be handled, even homemade ones. 

Of course, you can use self-contained token like JWT, and even more powerful token like Macaroons or Biscuit, which embed permissions attenuation capabilities.`,index:34,start:730,end:754,notesHTML:`<p>As this Authenticator aims to follow the RFC6750, and it's up to you to process the token, any kind of token can be handled, even homemade ones.</p>
<p>Of course, you can use self-contained token like JWT, and even more powerful token like Macaroons or Biscuit, which embed permissions attenuation capabilities.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:b2,meta:{slide:{raw:`
# \u2699 Internally, in Symfony

* Extraction with \`ChainTokenExtractor\` (configurable order)
  * Default and custom extractors can be used at the same time
* Handle the token with **your** \`TokenHandlerInterface\` implementation
* \`AccessTokenAuthenticator\` will 
  * create a \`PostAuthenticationToken\` object
  * set \`WWW-Authenticate\` Response header content in case of failure
  * use the configured User Provider in security.yaml

<!--
Internally in Symfony, Token will be extracted using a series of Extractors. The chain stops right after one of the extractors manages to return a string. Default and custom extractors can be used alongside.

In case of failure, The WWW-Authenticate response header will be correctly filled up

You still control the User provider to retrieve the User object from the User identifier.
-->
`,title:"\u2699 Internally, in Symfony",level:1,content:"# \u2699 Internally, in Symfony\n\n* Extraction with `ChainTokenExtractor` (configurable order)\n  * Default and custom extractors can be used at the same time\n* Handle the token with **your** `TokenHandlerInterface` implementation\n* `AccessTokenAuthenticator` will \n  * create a `PostAuthenticationToken` object\n  * set `WWW-Authenticate` Response header content in case of failure\n  * use the configured User Provider in security.yaml",frontmatter:{},note:`Internally in Symfony, Token will be extracted using a series of Extractors. The chain stops right after one of the extractors manages to return a string. Default and custom extractors can be used alongside.

In case of failure, The WWW-Authenticate response header will be correctly filled up

You still control the User provider to retrieve the User object from the User identifier.`,index:35,start:755,end:774,notesHTML:`<p>Internally in Symfony, Token will be extracted using a series of Extractors. The chain stops right after one of the extractors manages to return a string. Default and custom extractors can be used alongside.</p>
<p>In case of failure, The WWW-Authenticate response header will be correctly filled up</p>
<p>You still control the User provider to retrieve the User object from the User identifier.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:B2,meta:{layout:"section",slide:{raw:`---
layout: section
---

# \u{1FA84} How much easier is it with 6.2?

<!--
In practice, why it's easier in 6.2? Let's compare the 2 versions 6.1 and 6.2
-->
`,title:"\u{1FA84} How much easier is it with 6.2?",level:1,content:"# \u{1FA84} How much easier is it with 6.2?",frontmatter:{layout:"section"},note:"In practice, why it's easier in 6.2? Let's compare the 2 versions 6.1 and 6.2",index:36,start:774,end:784,notesHTML:`<p>In practice, why it's easier in 6.2? Let's compare the 2 versions 6.1 and 6.2</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:$2,meta:{slide:{raw:`
# 6.1 security.yaml

\`\`\`yaml
security:
  providers:
    user_provider:
      entity:
        class: App\\Entity\\User
        property: apiKey
  firewalls:
    api:
      pattern: ^/api
      lazy: true
      provider: user_provider
      custom_authenticator: App\\Security\\ApiKeyAuthenticator
\`\`\`

<!--
Here's the basic configuration for a custom authenticator in Symfony 6.1
We define a user provider and a firewall, specifying the Authenticator
-->
`,title:"6.1 security.yaml",level:1,content:`# 6.1 security.yaml

\`\`\`yaml
security:
  providers:
    user_provider:
      entity:
        class: App\\Entity\\User
        property: apiKey
  firewalls:
    api:
      pattern: ^/api
      lazy: true
      provider: user_provider
      custom_authenticator: App\\Security\\ApiKeyAuthenticator
\`\`\``,frontmatter:{},note:`Here's the basic configuration for a custom authenticator in Symfony 6.1
We define a user provider and a firewall, specifying the Authenticator`,index:37,start:785,end:808,notesHTML:`<p>Here's the basic configuration for a custom authenticator in Symfony 6.1
We define a user provider and a firewall, specifying the Authenticator</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:D2,meta:{layout:"code-full",slide:{raw:`---
layout: code-full
---

# 6.1 ApiKeyAuthenticator

\`\`\`php {1,8-11|13-31|15}
class ApiKeyAuthenticator extends AbstractAuthenticator
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly string $env,
    ) {}

    public function supports(Request $req): ?bool
    {
        return $req->headers->has('Authorization') || $req->query->has('access_token') || $req->request->has('access_token');
    }

    public function authenticate(Request $req): Passport
    {
        if (null === $apiKey = $this->extractToken($req)) {
            throw new AuthenticationException('No API Key provided');
        }
        
        // Here, it could be some logic to validate the token

        return new SelfValidatingPassport(
            new UserBadge($apiKey,
                function (string $apiKey) {
                    return $this->userRepository->findOneByApiKey($apiKey);
                }
            )
        );
    }
}
\`\`\`

<style>
  h1 {
    position: absolute;
    z-index: 9998;
    right: 0;
  }
</style>

<!--
The authenticator itself:

First, ensure our Authenticator can support the authentication with access token

NEXT

Then, extract the token, retrieve the matching User from database, while ensuring the token is not revoked.

NEXT

Let's see the extraction method
-->
`,title:"6.1 ApiKeyAuthenticator",level:1,content:`# 6.1 ApiKeyAuthenticator

\`\`\`php {1,8-11|13-31|15}
class ApiKeyAuthenticator extends AbstractAuthenticator
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly string $env,
    ) {}

    public function supports(Request $req): ?bool
    {
        return $req->headers->has('Authorization') || $req->query->has('access_token') || $req->request->has('access_token');
    }

    public function authenticate(Request $req): Passport
    {
        if (null === $apiKey = $this->extractToken($req)) {
            throw new AuthenticationException('No API Key provided');
        }
        
        // Here, it could be some logic to validate the token

        return new SelfValidatingPassport(
            new UserBadge($apiKey,
                function (string $apiKey) {
                    return $this->userRepository->findOneByApiKey($apiKey);
                }
            )
        );
    }
}
\`\`\`

<style>
  h1 {
    position: absolute;
    z-index: 9998;
    right: 0;
  }
</style>`,frontmatter:{layout:"code-full"},note:`The authenticator itself:

First, ensure our Authenticator can support the authentication with access token

NEXT

Then, extract the token, retrieve the matching User from database, while ensuring the token is not revoked.

NEXT

Let's see the extraction method`,index:38,start:808,end:868,notesHTML:`<p>The authenticator itself:</p>
<p>First, ensure our Authenticator can support the authentication with access token</p>
<p>NEXT</p>
<p>Then, extract the token, retrieve the matching User from database, while ensuring the token is not revoked.</p>
<p>NEXT</p>
<p>Let's see the extraction method</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:M2,meta:{slide:{raw:`
# 6.1 ApiKeyAuthenticator

\`\`\`php
/** Simplified version */
private function extractToken(Request $req): ?string
{
    return match (true) {
        // Header
        $req->headers->has('Authorization') => str_replace('Bearer ', '', $req->headers->get('Authorization')),

        // Query string
        $req->query->has('access_token') => $req->query->get('access_token'),

        // Request body
        $req->request->has('access_token') => $req->request->get('access_token'),

        default => null,
    };
}
\`\`\`

<!--
About the extraction, as I said, it is a simple version but it definitely have to be more robust in production.
Here we have to support extraction from different source. The order is fixed.
-->
`,title:"6.1 ApiKeyAuthenticator",level:1,content:`# 6.1 ApiKeyAuthenticator

\`\`\`php
/** Simplified version */
private function extractToken(Request $req): ?string
{
    return match (true) {
        // Header
        $req->headers->has('Authorization') => str_replace('Bearer ', '', $req->headers->get('Authorization')),

        // Query string
        $req->query->has('access_token') => $req->query->get('access_token'),

        // Request body
        $req->request->has('access_token') => $req->request->get('access_token'),

        default => null,
    };
}
\`\`\``,frontmatter:{},note:`About the extraction, as I said, it is a simple version but it definitely have to be more robust in production.
Here we have to support extraction from different source. The order is fixed.`,index:39,start:869,end:896,notesHTML:`<p>About the extraction, as I said, it is a simple version but it definitely have to be more robust in production.
Here we have to support extraction from different source. The order is fixed.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:L2,meta:{slide:{raw:`
# 6.2 security.yaml

\`\`\`yaml
security:
  providers:
    user_provider:
      entity:
        class: App\\Entity\\User
        property: apiKey
  firewalls:
    api:
      pattern: ^/api
      lazy: true
      provider: user_provider
      access_token:
        token_extractors:
          - header
          - query_string
          - request_body
        token_handler: App\\Security\\AccessTokenHandler
\`\`\`

<!--
Here's the config in 6.2. Ok, you will have to write some more lines of YAML. Not so hard I guess

The list of extractors is customizable, the first of the list is called first. 

Of course, there are some other configuration entries if you need to use your own token extractor, or success handler
-->
`,title:"6.2 security.yaml",level:1,content:`# 6.2 security.yaml

\`\`\`yaml
security:
  providers:
    user_provider:
      entity:
        class: App\\Entity\\User
        property: apiKey
  firewalls:
    api:
      pattern: ^/api
      lazy: true
      provider: user_provider
      access_token:
        token_extractors:
          - header
          - query_string
          - request_body
        token_handler: App\\Security\\AccessTokenHandler
\`\`\``,frontmatter:{},note:`Here's the config in 6.2. Ok, you will have to write some more lines of YAML. Not so hard I guess

The list of extractors is customizable, the first of the list is called first. 

Of course, there are some other configuration entries if you need to use your own token extractor, or success handler`,index:40,start:897,end:928,notesHTML:`<p>Here's the config in 6.2. Ok, you will have to write some more lines of YAML. Not so hard I guess</p>
<p>The list of extractors is customizable, the first of the list is called first.</p>
<p>Of course, there are some other configuration entries if you need to use your own token extractor, or success handler</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:j2,meta:{slide:{raw:`
# 6.2 AccessTokenHandler

\`\`\`php
class AccessTokenHandler implements AccessTokenHandlerInterface
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly string $env,
    ) {}

    public function getUserIdentifierFrom(string $token): string
    {
        $user = $this->userRepository->findOneByApiKey($token);

        if ($user === null) {
            throw new BadCredentialsException('Invalid credentials.');
        }

        return $user->getUserIdentifier();
    }
}
\`\`\`

<style>
  .slidev-code-wrapper {
    margin-top: -30px !important;
  }
</style>

<!--
This is an example of Token Handler.

Our job here, is to retrieve the User identifier from the token. nothing more, nothing less.

So, let's query the database, to retrieve our User and return the user identifier.

We don't have to worry anymore about extraction from the request.
-->
`,title:"6.2 AccessTokenHandler",level:1,content:`# 6.2 AccessTokenHandler

\`\`\`php
class AccessTokenHandler implements AccessTokenHandlerInterface
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly string $env,
    ) {}

    public function getUserIdentifierFrom(string $token): string
    {
        $user = $this->userRepository->findOneByApiKey($token);

        if ($user === null) {
            throw new BadCredentialsException('Invalid credentials.');
        }

        return $user->getUserIdentifier();
    }
}
\`\`\`

<style>
  .slidev-code-wrapper {
    margin-top: -30px !important;
  }
</style>`,frontmatter:{},note:`This is an example of Token Handler.

Our job here, is to retrieve the User identifier from the token. nothing more, nothing less.

So, let's query the database, to retrieve our User and return the user identifier.

We don't have to worry anymore about extraction from the request.`,index:41,start:929,end:969,notesHTML:`<p>This is an example of Token Handler.</p>
<p>Our job here, is to retrieve the User identifier from the token. nothing more, nothing less.</p>
<p>So, let's query the database, to retrieve our User and return the user identifier.</p>
<p>We don't have to worry anymore about extraction from the request.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:V2,meta:{layout:"statement",slide:{raw:`---
layout: statement
---

# <img src="/images/jwt.svg" width="48" class="inline -mt-2" /> 6.2 With a JWT issued by an OIDC server
`,title:'<img src="/images/jwt.svg" width="48" class="inline -mt-2" /> 6.2 With a JWT issued by an OIDC server',level:1,content:'# <img src="/images/jwt.svg" width="48" class="inline -mt-2" /> 6.2 With a JWT issued by an OIDC server',frontmatter:{layout:"statement"},index:42,start:969,end:975,notesHTML:"",filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:U2,meta:{layout:"image",image:"images/jwt-flow.png",slide:{raw:`---
layout: image
image: 'images/jwt-flow.png'
---

<!--
Here's a diagram to resume how JWT authentication works. 
First, the user login, then the OpenIDConnect server returns the JWT to the client app.
Second, the client app requests the API with the JWT in the request
To validate the token, the API calls the OIDC server, and if everything is ok, it returns the requested resource.
-->
`,content:"",frontmatter:{layout:"image",image:"images/jwt-flow.png"},note:`Here's a diagram to resume how JWT authentication works. 
First, the user login, then the OpenIDConnect server returns the JWT to the client app.
Second, the client app requests the API with the JWT in the request
To validate the token, the API calls the OIDC server, and if everything is ok, it returns the requested resource.`,index:43,start:975,end:987,notesHTML:`<p>Here's a diagram to resume how JWT authentication works.
First, the user login, then the OpenIDConnect server returns the JWT to the client app.
Second, the client app requests the API with the JWT in the request
To validate the token, the API calls the OIDC server, and if everything is ok, it returns the requested resource.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:Y2,meta:{slide:{raw:`
# <img src="/images/jwt.svg" width="48" class="inline -mt-2" /> 6.2 With a JWT issued by an OIDC server


\`\`\`php
class JwtHandler implements AccessTokenHandlerInterface
{
    public function __construct(
        private readonly HttpClientInterface $oidcHttpClient,
    ) {}

    public function getUserIdentifierFrom(string $accessToken): string
    {
        try {
            $userInfo = $this->oidcHttpClient->request('GET', 'protocol/openid-connect/userinfo', [
                'auth_bearer' => $accessToken,
            ])->toArray();
        } catch (HttpExceptionInterface $e) {
            throw new BadCredentialsException($e->getMessage());
        }

        return $userInfo['email'];
    }
}
\`\`\`

<style>
  .slidev-code-wrapper {
    margin-top: -30px !important;
  }
</style>

<!--
Here another example of Token Handle but with a JWT. 

To validate it, we must call the OpenID Connect server which has produced the token. 

It returns the user info, then we can return the user identifier, here the email.
-->
`,title:'<img src="/images/jwt.svg" width="48" class="inline -mt-2" /> 6.2 With a JWT issued by an OIDC server',level:1,content:`# <img src="/images/jwt.svg" width="48" class="inline -mt-2" /> 6.2 With a JWT issued by an OIDC server


\`\`\`php
class JwtHandler implements AccessTokenHandlerInterface
{
    public function __construct(
        private readonly HttpClientInterface $oidcHttpClient,
    ) {}

    public function getUserIdentifierFrom(string $accessToken): string
    {
        try {
            $userInfo = $this->oidcHttpClient->request('GET', 'protocol/openid-connect/userinfo', [
                'auth_bearer' => $accessToken,
            ])->toArray();
        } catch (HttpExceptionInterface $e) {
            throw new BadCredentialsException($e->getMessage());
        }

        return $userInfo['email'];
    }
}
\`\`\`

<style>
  .slidev-code-wrapper {
    margin-top: -30px !important;
  }
</style>`,frontmatter:{},note:`Here another example of Token Handle but with a JWT. 

To validate it, we must call the OpenID Connect server which has produced the token. 

It returns the user info, then we can return the user identifier, here the email.`,index:44,start:988,end:1028,notesHTML:`<p>Here another example of Token Handle but with a JWT.</p>
<p>To validate it, we must call the OpenID Connect server which has produced the token.</p>
<p>It returns the user info, then we can return the user identifier, here the email.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:X2,meta:{layout:"section",slide:{raw:`---
layout: section
---

# <img src="/images/jwt.svg" width="64" class="inline -mt-2" /> 6.2 With a JWT issued by your Symfony app

> with [lcobucci/jwt](https://github.com/lcobucci/jwt) <br> <small>(or [web-token/jwt-checker](https://github.com/web-token/jwt-checker))</small>
`,title:'<img src="/images/jwt.svg" width="64" class="inline -mt-2" /> 6.2 With a JWT issued by your Symfony app',level:1,content:`# <img src="/images/jwt.svg" width="64" class="inline -mt-2" /> 6.2 With a JWT issued by your Symfony app

> with [lcobucci/jwt](https://github.com/lcobucci/jwt) <br> <small>(or [web-token/jwt-checker](https://github.com/web-token/jwt-checker))</small>`,frontmatter:{layout:"section"},index:45,start:1028,end:1036,notesHTML:"",filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:tb,meta:{slide:{raw:`
# \u{1F510} 6.2 security.yaml

\`\`\`yaml
security:
  providers:
    user_provider:
      entity:
        class: App\\Entity\\User
        property: email
  firewalls:
    api:
      pattern: ^/api
      lazy: true
      provider: user_provider
      access_token:
        token_extractors: header
        token_handler: App\\Security\\JwtHandler
\`\`\`

<!--
First step, we configure the firewall named api.

We assume to be in production, so we use the Header extractor only.

Then, we configure the token handler.
-->
`,title:"\u{1F510} 6.2 security.yaml",level:1,content:`# \u{1F510} 6.2 security.yaml

\`\`\`yaml
security:
  providers:
    user_provider:
      entity:
        class: App\\Entity\\User
        property: email
  firewalls:
    api:
      pattern: ^/api
      lazy: true
      provider: user_provider
      access_token:
        token_extractors: header
        token_handler: App\\Security\\JwtHandler
\`\`\``,frontmatter:{},note:`First step, we configure the firewall named api.

We assume to be in production, so we use the Header extractor only.

Then, we configure the token handler.`,index:46,start:1037,end:1065,notesHTML:`<p>First step, we configure the firewall named api.</p>
<p>We assume to be in production, so we use the Header extractor only.</p>
<p>Then, we configure the token handler.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:rb,meta:{slide:{raw:`
# 6.2 JwtHandler

\`\`\`php
class JwtHandler implements AccessTokenHandlerInterface
{
    public function __construct(
        private readonly Parser $jwtParser = new Parser(new JoseEncoder()),
        private readonly Validator $jwtValidator = new Validator(),
    ) {}

    public function getUserIdentifierFrom(string $accessToken): string
    {
        $jwt = $this->jwtParser->parse($accessToken);
        $timezone = new \\DateTimeZone('Europe/Paris');

        try {
            $this->jwtValidator->assert($jwt, new ValidAt(new SystemClock($timezone)));
            $this->jwtValidator->assert($jwt, new SignedWith(
                new Sha256(), 
                InMemory::plainText('PRIVATE-KEY')
            ));
        } catch (RequiredConstraintsViolated $e) {
            throw new BadCredentialsException($e->getMessage());
        }

        return $jwt->claims()->get(RegisteredClaims::SUBJECT);
    }
}
\`\`\`

<style>
  h1 {
    position: absolute;
    z-index: 9998;
    top: 0;
    right: 0;
  }
</style>

<!--
Final step (yes, it's a 2 step implementation, very quick :D), we write the Token Handler.

Here we use the lcobucci jwt library to make some assertions on the token. We want to verify the expiration date and the signature.

At the end, we return the claim named "sub" which is our user identifier. End.

A dozen lines of yaml and some twenty-five lines of PHP, it's enough to handle a basic JWT authentication with Symfony. Obviously, your code in real life applications could be a little more complex, but now you can focus on this complexity.
-->
`,title:"6.2 JwtHandler",level:1,content:`# 6.2 JwtHandler

\`\`\`php
class JwtHandler implements AccessTokenHandlerInterface
{
    public function __construct(
        private readonly Parser $jwtParser = new Parser(new JoseEncoder()),
        private readonly Validator $jwtValidator = new Validator(),
    ) {}

    public function getUserIdentifierFrom(string $accessToken): string
    {
        $jwt = $this->jwtParser->parse($accessToken);
        $timezone = new \\DateTimeZone('Europe/Paris');

        try {
            $this->jwtValidator->assert($jwt, new ValidAt(new SystemClock($timezone)));
            $this->jwtValidator->assert($jwt, new SignedWith(
                new Sha256(), 
                InMemory::plainText('PRIVATE-KEY')
            ));
        } catch (RequiredConstraintsViolated $e) {
            throw new BadCredentialsException($e->getMessage());
        }

        return $jwt->claims()->get(RegisteredClaims::SUBJECT);
    }
}
\`\`\`

<style>
  h1 {
    position: absolute;
    z-index: 9998;
    top: 0;
    right: 0;
  }
</style>`,frontmatter:{},note:`Final step (yes, it's a 2 step implementation, very quick :D), we write the Token Handler.

Here we use the lcobucci jwt library to make some assertions on the token. We want to verify the expiration date and the signature.

At the end, we return the claim named "sub" which is our user identifier. End.

A dozen lines of yaml and some twenty-five lines of PHP, it's enough to handle a basic JWT authentication with Symfony. Obviously, your code in real life applications could be a little more complex, but now you can focus on this complexity.`,index:47,start:1066,end:1116,notesHTML:`<p>Final step (yes, it's a 2 step implementation, very quick :D), we write the Token Handler.</p>
<p>Here we use the lcobucci jwt library to make some assertions on the token. We want to verify the expiration date and the signature.</p>
<p>At the end, we return the claim named &quot;sub&quot; which is our user identifier. End.</p>
<p>A dozen lines of yaml and some twenty-five lines of PHP, it's enough to handle a basic JWT authentication with Symfony. Obviously, your code in real life applications could be a little more complex, but now you can focus on this complexity.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:pb,meta:{slide:{raw:`
# API Platform plans to support <br> OpenID Connect authentication <img src="/images/api-platform.png" class="absolute inline right-20 top-15" width="72"/>

https://github.com/api-platform/demo/pull/265

<img src="/images/apip-pr-265.png" width="700" class="mx-auto"/>

<!--
Good news! Soon, API Platform plans to provide an OidcTokenHandler. 
It gives you the possibility easily setup access token auth with OIDC server, only with configuration.

Don't hesitate to browse the pull request and bring your help!
-->
`,title:'API Platform plans to support <br> OpenID Connect authentication <img src="/images/api-platform.png" class="absolute inline right-20 top-15" width="72"/>',level:1,content:`# API Platform plans to support <br> OpenID Connect authentication <img src="/images/api-platform.png" class="absolute inline right-20 top-15" width="72"/>

https://github.com/api-platform/demo/pull/265

<img src="/images/apip-pr-265.png" width="700" class="mx-auto"/>`,frontmatter:{},note:`Good news! Soon, API Platform plans to provide an OidcTokenHandler. 
It gives you the possibility easily setup access token auth with OIDC server, only with configuration.

Don't hesitate to browse the pull request and bring your help!`,index:48,start:1117,end:1131,notesHTML:`<p>Good news! Soon, API Platform plans to provide an OidcTokenHandler.
It gives you the possibility easily setup access token auth with OIDC server, only with configuration.</p>
<p>Don't hesitate to browse the pull request and bring your help!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:yb,meta:{slide:{raw:`
# \u{1F4AB} In the future?

* Add a native JwtHandler to Symfony?
* Add a native SamlHandler to Symfony?
* Add a native BiscuitHandler to Symfony?

> \u{1F449} It's up to the community!

<!--
What's next?

Well, as many tokens are specified in RFC, it could be interesting to implement natives Token Handler in Symfony.
But, may be it needs time. The community could need time to adopt the TokenHandlerInterface. But who knows, in 6.3 or 7.0, we may see some natives Token Handlers in Symfony!
-->
`,title:"\u{1F4AB} In the future?",level:1,content:`# \u{1F4AB} In the future?

* Add a native JwtHandler to Symfony?
* Add a native SamlHandler to Symfony?
* Add a native BiscuitHandler to Symfony?

> \u{1F449} It's up to the community!`,frontmatter:{},note:`What's next?

Well, as many tokens are specified in RFC, it could be interesting to implement natives Token Handler in Symfony.
But, may be it needs time. The community could need time to adopt the TokenHandlerInterface. But who knows, in 6.3 or 7.0, we may see some natives Token Handlers in Symfony!`,index:49,start:1132,end:1148,notesHTML:`<p>What's next?</p>
<p>Well, as many tokens are specified in RFC, it could be interesting to implement natives Token Handler in Symfony.
But, may be it needs time. The community could need time to adopt the TokenHandlerInterface. But who knows, in 6.3 or 7.0, we may see some natives Token Handlers in Symfony!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:wb,meta:{slide:{raw:`
<img src="/images/auth-process-62.jpg" width="900" class="mx-auto" />

<style>
.slidev-layout {
  background-color: #f8f9fa;
}
</style>

<!--
Let's get back the schema from the beginning. Now, you have less responsibility across the authentication process.
The extraction is made by Symfony. Accordingly the order defined in your configuration.

The handling of the token is up to you as it depends on the kind of token.

Success or failure could be managed by Symfony with default behaviours, but you can make your owns. 

In case of failure, Symfony will automatically set the content of the WWW-authenticate response header, to respect the RFC 6750.

As always, the user loading is made with the configured UserProvider.
-->
`,content:`<img src="/images/auth-process-62.jpg" width="900" class="mx-auto" />

<style>
.slidev-layout {
  background-color: #f8f9fa;
}
</style>`,frontmatter:{},note:`Let's get back the schema from the beginning. Now, you have less responsibility across the authentication process.
The extraction is made by Symfony. Accordingly the order defined in your configuration.

The handling of the token is up to you as it depends on the kind of token.

Success or failure could be managed by Symfony with default behaviours, but you can make your owns. 

In case of failure, Symfony will automatically set the content of the WWW-authenticate response header, to respect the RFC 6750.

As always, the user loading is made with the configured UserProvider.`,index:50,start:1149,end:1171,notesHTML:`<p>Let's get back the schema from the beginning. Now, you have less responsibility across the authentication process.
The extraction is made by Symfony. Accordingly the order defined in your configuration.</p>
<p>The handling of the token is up to you as it depends on the kind of token.</p>
<p>Success or failure could be managed by Symfony with default behaviours, but you can make your owns.</p>
<p>In case of failure, Symfony will automatically set the content of the WWW-authenticate response header, to respect the RFC 6750.</p>
<p>As always, the user loading is made with the configured UserProvider.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:Ab,meta:{slide:{raw:`
<img src="/images/auth-process-63.jpg" width="900" class="mx-auto" />

<style>
.slidev-layout {
  background-color: #f8f9fa;
}
</style>

<!--
Now, in 6.2 Symfony is responsible of the RFC 6750 implementation, we could imagine the future. 
Why not providing in 6.3 default TokenHandler to support natively JWT or even better any OIDC server?

You may have attended Robin Chalas talk yesterday morning? Maybe GNAP will one day be natively supported by Symfony, thanks to this system!

As always, the community will decide!
-->
`,content:`<img src="/images/auth-process-63.jpg" width="900" class="mx-auto" />

<style>
.slidev-layout {
  background-color: #f8f9fa;
}
</style>`,frontmatter:{},note:`Now, in 6.2 Symfony is responsible of the RFC 6750 implementation, we could imagine the future. 
Why not providing in 6.3 default TokenHandler to support natively JWT or even better any OIDC server?

You may have attended Robin Chalas talk yesterday morning? Maybe GNAP will one day be natively supported by Symfony, thanks to this system!

As always, the community will decide!`,index:51,start:1172,end:1190,notesHTML:`<p>Now, in 6.2 Symfony is responsible of the RFC 6750 implementation, we could imagine the future.
Why not providing in 6.3 default TokenHandler to support natively JWT or even better any OIDC server?</p>
<p>You may have attended Robin Chalas talk yesterday morning? Maybe GNAP will one day be natively supported by Symfony, thanks to this system!</p>
<p>As always, the community will decide!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:Tb,meta:{slide:{raw:`
# Less responsibility, less code

* **Configure** the way the extraction should be done
* **Focus** on the token processing
  * Decoding
  * Checking signature, expiration, revocation
  * Retrieve user identifier

> \u{1F9B8} Leverage all Symfony power to fine tune configuration to your needs

<!--
Now, to sum up, your job is to configure how the extraction will be done. It brings more flexibility.

You can focus on the Token itself, decoding it, checking signature, revocation, expiration. 

Retrieving the user identifier, from the token itself, or from any other source, like a database, an API, an OpenID Connect server like Keycloak, etc

Enjoy the power of Symfony to configure your authentication finely depending on your environments! For instance,you can supporttoken extraction from query string and request body only on dev or test environment, but not on production.
-->
`,title:"Less responsibility, less code",level:1,content:`# Less responsibility, less code

* **Configure** the way the extraction should be done
* **Focus** on the token processing
  * Decoding
  * Checking signature, expiration, revocation
  * Retrieve user identifier

> \u{1F9B8} Leverage all Symfony power to fine tune configuration to your needs`,frontmatter:{},note:`Now, to sum up, your job is to configure how the extraction will be done. It brings more flexibility.

You can focus on the Token itself, decoding it, checking signature, revocation, expiration. 

Retrieving the user identifier, from the token itself, or from any other source, like a database, an API, an OpenID Connect server like Keycloak, etc

Enjoy the power of Symfony to configure your authentication finely depending on your environments! For instance,you can supporttoken extraction from query string and request body only on dev or test environment, but not on production.`,index:52,start:1191,end:1212,notesHTML:`<p>Now, to sum up, your job is to configure how the extraction will be done. It brings more flexibility.</p>
<p>You can focus on the Token itself, decoding it, checking signature, revocation, expiration.</p>
<p>Retrieving the user identifier, from the token itself, or from any other source, like a database, an API, an OpenID Connect server like Keycloak, etc</p>
<p>Enjoy the power of Symfony to configure your authentication finely depending on your environments! For instance,you can supporttoken extraction from query string and request body only on dev or test environment, but not on production.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:Fb,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# \u{1F44F} Thanks a lot

# Wouter
# Guillaume
# Vincent
# Florent

<div class="mt-12"></div>

## And all reviewers, commenters \u{1F389}

<!--
Before leaving the stage, I would like to thank Wouter, Guillaume, Vincent, Florent, and all reviewers and commenters for this feature!
-->
`,title:"\u{1F44F} Thanks a lot",level:1,content:`# \u{1F44F} Thanks a lot

# Wouter
# Guillaume
# Vincent
# Florent

<div class="mt-12"></div>

## And all reviewers, commenters \u{1F389}`,frontmatter:{class:"text-center"},note:"Before leaving the stage, I would like to thank Wouter, Guillaume, Vincent, Florent, and all reviewers and commenters for this feature!",index:53,start:1212,end:1231,notesHTML:`<p>Before leaving the stage, I would like to thank Wouter, Guillaume, Vincent, Florent, and all reviewers and commenters for this feature!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:Ub,meta:{layout:"section",slide:{raw:`---
layout: section
---

# Thank you \u2615 \u{1F370}
## Any questions?

<br>
<br>

Slides and demo apps \u{1F449} [welcomattic.github.io/painless-authentication-with-access-token](https://welcomattic.github.io/painless-authentication-with-access-token/)

Sources
* [JWT RFC](https://www.rfc-editor.org/rfc/rfc7519)
* [Bearer Token Usage RFC](https://datatracker.ietf.org/doc/html/rfc6750)
* [In-depth article about token authentication](https://lafor.ge/biscuit-1)

<!--
Thank you for your attention, I hope you've learned something during this talk.
If you have any question, I will be happy to answer 
-->
`,title:"Thank you \u2615 \u{1F370}",level:1,content:`# Thank you \u2615 \u{1F370}
## Any questions?

<br>
<br>

Slides and demo apps \u{1F449} [welcomattic.github.io/painless-authentication-with-access-token](https://welcomattic.github.io/painless-authentication-with-access-token/)

Sources
* [JWT RFC](https://www.rfc-editor.org/rfc/rfc7519)
* [Bearer Token Usage RFC](https://datatracker.ietf.org/doc/html/rfc6750)
* [In-depth article about token authentication](https://lafor.ge/biscuit-1)`,frontmatter:{layout:"section"},note:`Thank you for your attention, I hope you've learned something during this talk.
If you have any question, I will be happy to answer`,index:54,start:1231,end:1253,notesHTML:`<p>Thank you for your attention, I hope you've learned something during this talk.
If you have any question, I will be happy to answer</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",component:v1,meta:{layout:"end"}}],We=Kb,zb=[{name:"play",path:"/",component:u1,children:[...We]},{name:"print",path:"/print",component:y1},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>Fn(()=>import("./PresenterPrint.733a0b54.js"),["assets/PresenterPrint.733a0b54.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.939d64e2.js"])},{name:"presenter",path:"/presenter/:no",component:()=>Fn(()=>import("./Presenter.7ca5a144.js"),["assets/Presenter.7ca5a144.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.939d64e2.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.fac5f5e1.js","assets/Presenter.ded7a296.css"]),beforeEnter:e=>{if(!Ss.remote||Ss.remote===e.query.password)return!0;if(Ss.remote&&e.query.password===void 0){const n=prompt("Enter password");if(Ss.remote===n)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],mt=Y0({history:p0("/painless-authentication-with-access-token/"),routes:zb});function Jb(e,n,{mode:s="replace"}={}){return S({get(){const o=mt.currentRoute.value.query[e];return o==null?n!=null?n:null:Array.isArray(o)?o.filter(Boolean):o},set(o){Ge(()=>{mt[B(s)]({query:{...mt.currentRoute.value.query,[e]:o}})})}})}const Tp=U(0);Ge(()=>{mt.afterEach(async()=>{await Ge(),Tp.value+=1})});const Xt=S(()=>mt.currentRoute.value),ra=S(()=>Xt.value.query.print!==void 0),Yb=S(()=>Xt.value.query.print==="clicks"),Ut=S(()=>Xt.value.query.embedded!==void 0),Rt=S(()=>Xt.value.path.startsWith("/presenter")),Ms=S(()=>ra.value&&!Yb.value),pl=S(()=>Xt.value.query.password),Gb=S(()=>!Rt.value&&(!ke.remote||pl.value===ke.remote)),rc=Jb("clicks","0"),Cp=S(()=>We.length-1),Zb=S(()=>Xt.value.path),qe=S(()=>parseInt(Zb.value.split(/\//g).slice(-1)[0])||1);S(()=>rr(qe.value));const ft=S(()=>We.find(e=>e.path===`${qe.value}`));S(()=>{var e,n,s;return(s=(n=(e=ft.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.id});S(()=>{var e,n;return((n=(e=ft.value)==null?void 0:e.meta)==null?void 0:n.layout)||(qe.value===1?"cover":"default")});const Ar=S(()=>We.find(e=>e.path===`${Math.min(We.length,qe.value+1)}`)),Xb=S(()=>{var e,n;return Tp.value,((n=(e=ft.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),Tt=S({get(){if(Ms.value)return 99999;let e=+(rc.value||0);return isNaN(e)&&(e=0),e},set(e){rc.value=e.toString()}}),Fo=S(()=>{var e,n,s;return+((s=(n=(e=ft.value)==null?void 0:e.meta)==null?void 0:n.clicks)!=null?s:Xb.value.length)}),Qb=S(()=>qe.value<We.length-1||Tt.value<Fo.value),e3=S(()=>qe.value>1||Tt.value>0),t3=S(()=>We.filter(e=>{var n,s;return(s=(n=e.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((e,n)=>(la(e,n),e),[])),n3=S(()=>aa(t3.value,ft.value));S(()=>ia(n3.value));function un(){Fo.value<=Tt.value?Gs():Tt.value+=1}async function pn(){Tt.value<=0?await Zs():Tt.value-=1}function rr(e){return Rt.value?`/presenter/${e}`:`/${e}`}function Gs(){const e=Math.min(We.length,qe.value+1);return cs(e)}async function Zs(e=!0){const n=Math.max(1,qe.value-1);await cs(n),e&&Fo.value&&mt.replace({query:{...Xt.value.query,clicks:Fo.value}})}function cs(e,n){return mt.push({path:rr(e),query:{...Xt.value.query,clicks:n}})}function s3(e){const n=U(0),{direction:s,distanceX:o,distanceY:r}=Rm(e,{onSwipeStart(l){l.pointerType==="touch"&&(zs.value||(n.value=Gr()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!n.value||zs.value)return;const a=Math.abs(o.value),i=Math.abs(r.value);a/window.innerWidth>.3||a>100?s.value===Jt.LEFT?un():pn():(i/window.innerHeight>.4||i>200)&&(s.value===Jt.DOWN?Zs():Gs())}})}async function dl(){const{saveAs:e}=await Fn(()=>import("./FileSaver.min.7f56e709.js").then(n=>n.F),[]);e(Ou(ke.download)?ke.download:ke.exportFilename?`${ke.exportFilename}.pdf`:"/painless-authentication-with-access-token/slidev-exported.pdf",`${ke.title}.pdf`)}async function o3(e){var n,s;if(e==null){const o=(s=(n=ft.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function la(e,n,s=1){var r,l,a,i,c;const o=(l=(r=n.meta)==null?void 0:r.slide)==null?void 0:l.level;o&&o>s&&e.length>0?la(e[e.length-1].children,n,s+1):e.push({children:[],level:s,path:n.path,hideInToc:Boolean((a=n.meta)==null?void 0:a.hideInToc),title:(c=(i=n.meta)==null?void 0:i.slide)==null?void 0:c.title})}function aa(e,n,s=!1,o){return e.map(r=>{const l={...r,active:r.path===(n==null?void 0:n.path),hasActiveParent:s};return l.children.length>0&&(l.children=aa(l.children,n,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function ia(e,n=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:ia(s.children,n+1)}))}function r3(){const e=ke.titleTemplate.replace("%s",ke.title||"Slidev");Py({title:e}),Vy(`${e} - shared`),Jy(`${e} - drawings`);function n(){Rt.value&&(pi("page",+qe.value),pi("clicks",Tt.value))}mt.afterEach(n),de(Tt,n),Uy(s=>{(+s.page!=+qe.value||Tt.value!==s.clicks)&&mt.replace({path:rr(s.page),query:{...mt.currentRoute.value.query,clicks:s.clicks||0}})})}const l3=_e({__name:"App",setup(e){return D(M),r3(),(n,s)=>{const o=Eo("RouterView"),r=Eo("StarportCarrier");return k(),V(Se,null,[H(o),H(r)],64)}}});function $r(e){return e!==null&&typeof e=="object"}function fl(e,n,s=".",o){if(!$r(n))return fl(e,{},s,o);const r=Object.assign({},n);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const a=e[l];a!=null&&(o&&o(r,l,a,s)||(Array.isArray(a)&&Array.isArray(r[l])?r[l]=a.concat(r[l]):$r(a)&&$r(r[l])?r[l]=fl(a,r[l],(s?`${s}.`:"")+l.toString(),o):r[l]=a))}return r}function a3(e){return(...n)=>n.reduce((s,o)=>fl(s,o,"",e),{})}const i3=a3(),Op=1/60*1e3,c3=typeof performance<"u"?()=>performance.now():()=>Date.now(),Dp=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(c3()),Op);function u3(e){let n=[],s=[],o=0,r=!1,l=!1;const a=new WeakSet,i={schedule:(c,u=!1,d=!1)=>{const f=d&&r,h=f?n:s;return u&&a.add(c),h.indexOf(c)===-1&&(h.push(c),f&&r&&(o=n.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),a.delete(c)},process:c=>{if(r){l=!0;return}if(r=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let u=0;u<o;u++){const d=n[u];d(c),a.has(d)&&(i.schedule(d),e())}r=!1,l&&(l=!1,i.process(c))}};return i}const p3=40;let hl=!0,Xs=!1,yl=!1;const os={delta:0,timestamp:0},so=["read","update","preRender","render","postRender"],lr=so.reduce((e,n)=>(e[n]=u3(()=>Xs=!0),e),{}),ml=so.reduce((e,n)=>{const s=lr[n];return e[n]=(o,r=!1,l=!1)=>(Xs||h3(),s.schedule(o,r,l)),e},{}),d3=so.reduce((e,n)=>(e[n]=lr[n].cancel,e),{});so.reduce((e,n)=>(e[n]=()=>lr[n].process(os),e),{});const f3=e=>lr[e].process(os),Ip=e=>{Xs=!1,os.delta=hl?Op:Math.max(Math.min(e-os.timestamp,p3),1),os.timestamp=e,yl=!0,so.forEach(f3),yl=!1,Xs&&(hl=!1,Dp(Ip))},h3=()=>{Xs=!0,hl=!0,yl||Dp(Ip)},Pp=()=>os;function Mp(e,n){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(s[o[r]]=e[o[r]]);return s}var y3=function(){},lc=function(){};const gl=(e,n,s)=>Math.min(Math.max(s,e),n),Sr=.001,m3=.01,ac=10,g3=.05,v3=1;function _3({duration:e=800,bounce:n=.25,velocity:s=0,mass:o=1}){let r,l;y3(e<=ac*1e3);let a=1-n;a=gl(g3,v3,a),e=gl(m3,ac,e/1e3),a<1?(r=u=>{const d=u*a,f=d*e,h=d-s,m=vl(u,a),y=Math.exp(-f);return Sr-h/m*y},l=u=>{const f=u*a*e,h=f*s+s,m=Math.pow(a,2)*Math.pow(u,2)*e,y=Math.exp(-f),_=vl(Math.pow(u,2),a);return(-r(u)+Sr>0?-1:1)*((h-m)*y)/_}):(r=u=>{const d=Math.exp(-u*e),f=(u-s)*e+1;return-Sr+d*f},l=u=>{const d=Math.exp(-u*e),f=(s-u)*(e*e);return d*f});const i=5/e,c=b3(r,l,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:e}}}const w3=12;function b3(e,n,s){let o=s;for(let r=1;r<w3;r++)o=o-e(o)/n(o);return o}function vl(e,n){return e*Math.sqrt(1-n*n)}const k3=["duration","bounce"],B3=["stiffness","damping","mass"];function ic(e,n){return n.some(s=>e[s]!==void 0)}function x3(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!ic(e,B3)&&ic(e,k3)){const s=_3(e);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function ca(e){var{from:n=0,to:s=1,restSpeed:o=2,restDelta:r}=e,l=Mp(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:i,damping:c,mass:u,velocity:d,duration:f,isResolvedFromDuration:h}=x3(l),m=cc,y=cc;function _(){const w=d?-(d/1e3):0,b=s-n,A=c/(2*Math.sqrt(i*u)),x=Math.sqrt(i/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(s-n)/100,.4)),A<1){const E=vl(x,A);m=R=>{const F=Math.exp(-A*x*R);return s-F*((w+A*x*b)/E*Math.sin(E*R)+b*Math.cos(E*R))},y=R=>{const F=Math.exp(-A*x*R);return A*x*F*(Math.sin(E*R)*(w+A*x*b)/E+b*Math.cos(E*R))-F*(Math.cos(E*R)*(w+A*x*b)-E*b*Math.sin(E*R))}}else if(A===1)m=E=>s-Math.exp(-x*E)*(b+(w+x*b)*E);else{const E=x*Math.sqrt(A*A-1);m=R=>{const F=Math.exp(-A*x*R),j=Math.min(E*R,300);return s-F*((w+A*x*b)*Math.sinh(j)+E*b*Math.cosh(j))/E}}}return _(),{next:w=>{const b=m(w);if(h)a.done=w>=f;else{const A=y(w)*1e3,x=Math.abs(A)<=o,E=Math.abs(s-b)<=r;a.done=x&&E}return a.value=a.done?s:b,a},flipTarget:()=>{d=-d,[n,s]=[s,n],_()}}}ca.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const cc=e=>0,Rp=(e,n,s)=>{const o=n-e;return o===0?1:(s-e)/o},ua=(e,n,s)=>-s*e+s*n+e,Fp=(e,n)=>s=>Math.max(Math.min(s,n),e),Rs=e=>e%1?Number(e.toFixed(5)):e,Qs=/(-)?([\d]*\.?[\d])+/g,_l=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,A3=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function oo(e){return typeof e=="string"}const ro={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Fs=Object.assign(Object.assign({},ro),{transform:Fp(0,1)}),mo=Object.assign(Object.assign({},ro),{default:1}),pa=e=>({test:n=>oo(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),_n=pa("deg"),Ls=pa("%"),ae=pa("px"),uc=Object.assign(Object.assign({},Ls),{parse:e=>Ls.parse(e)/100,transform:e=>Ls.transform(e*100)}),da=(e,n)=>s=>Boolean(oo(s)&&A3.test(s)&&s.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(s,n)),Lp=(e,n,s)=>o=>{if(!oo(o))return o;const[r,l,a,i]=o.match(Qs);return{[e]:parseFloat(r),[n]:parseFloat(l),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},Cn={test:da("hsl","hue"),parse:Lp("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(e)+", "+Ls.transform(Rs(n))+", "+Ls.transform(Rs(s))+", "+Rs(Fs.transform(o))+")"},$3=Fp(0,255),Er=Object.assign(Object.assign({},ro),{transform:e=>Math.round($3(e))}),on={test:da("rgb","red"),parse:Lp("red","green","blue"),transform:({red:e,green:n,blue:s,alpha:o=1})=>"rgba("+Er.transform(e)+", "+Er.transform(n)+", "+Er.transform(s)+", "+Rs(Fs.transform(o))+")"};function S3(e){let n="",s="",o="",r="";return e.length>5?(n=e.substr(1,2),s=e.substr(3,2),o=e.substr(5,2),r=e.substr(7,2)):(n=e.substr(1,1),s=e.substr(2,1),o=e.substr(3,1),r=e.substr(4,1),n+=n,s+=s,o+=o,r+=r),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const wl={test:da("#"),parse:S3,transform:on.transform},lt={test:e=>on.test(e)||wl.test(e)||Cn.test(e),parse:e=>on.test(e)?on.parse(e):Cn.test(e)?Cn.parse(e):wl.parse(e),transform:e=>oo(e)?e:e.hasOwnProperty("red")?on.transform(e):Cn.transform(e)},Hp="${c}",qp="${n}";function E3(e){var n,s,o,r;return isNaN(e)&&oo(e)&&((s=(n=e.match(Qs))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((r=(o=e.match(_l))===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0)>0}function Np(e){typeof e=="number"&&(e=`${e}`);const n=[];let s=0;const o=e.match(_l);o&&(s=o.length,e=e.replace(_l,Hp),n.push(...o.map(lt.parse)));const r=e.match(Qs);return r&&(e=e.replace(Qs,qp),n.push(...r.map(ro.parse))),{values:n,numColors:s,tokenised:e}}function jp(e){return Np(e).values}function Wp(e){const{values:n,numColors:s,tokenised:o}=Np(e),r=n.length;return l=>{let a=o;for(let i=0;i<r;i++)a=a.replace(i<s?Hp:qp,i<s?lt.transform(l[i]):Rs(l[i]));return a}}const T3=e=>typeof e=="number"?0:e;function C3(e){const n=jp(e);return Wp(e)(n.map(T3))}const lo={test:E3,parse:jp,createTransformer:Wp,getAnimatableNone:C3},O3=new Set(["brightness","contrast","saturate","opacity"]);function D3(e){let[n,s]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[o]=s.match(Qs)||[];if(!o)return e;const r=s.replace(o,"");let l=O3.has(n)?1:0;return o!==s&&(l*=100),n+"("+l+r+")"}const I3=/([a-z-]*)\(.*?\)/g,bl=Object.assign(Object.assign({},lo),{getAnimatableNone:e=>{const n=e.match(I3);return n?n.map(D3).join(" "):e}});function Tr(e,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(n-e)*6*s:s<1/2?n:s<2/3?e+(n-e)*(2/3-s)*6:e}function pc({hue:e,saturation:n,lightness:s,alpha:o}){e/=360,n/=100,s/=100;let r=0,l=0,a=0;if(!n)r=l=a=s;else{const i=s<.5?s*(1+n):s+n-s*n,c=2*s-i;r=Tr(c,i,e+1/3),l=Tr(c,i,e),a=Tr(c,i,e-1/3)}return{red:Math.round(r*255),green:Math.round(l*255),blue:Math.round(a*255),alpha:o}}const P3=(e,n,s)=>{const o=e*e,r=n*n;return Math.sqrt(Math.max(0,s*(r-o)+o))},M3=[wl,on,Cn],dc=e=>M3.find(n=>n.test(e)),Vp=(e,n)=>{let s=dc(e),o=dc(n),r=s.parse(e),l=o.parse(n);s===Cn&&(r=pc(r),s=on),o===Cn&&(l=pc(l),o=on);const a=Object.assign({},r);return i=>{for(const c in a)c!=="alpha"&&(a[c]=P3(r[c],l[c],i));return a.alpha=ua(r.alpha,l.alpha,i),s.transform(a)}},R3=e=>typeof e=="number",F3=(e,n)=>s=>n(e(s)),Up=(...e)=>e.reduce(F3);function Kp(e,n){return R3(e)?s=>ua(e,n,s):lt.test(e)?Vp(e,n):Jp(e,n)}const zp=(e,n)=>{const s=[...e],o=s.length,r=e.map((l,a)=>Kp(l,n[a]));return l=>{for(let a=0;a<o;a++)s[a]=r[a](l);return s}},L3=(e,n)=>{const s=Object.assign(Object.assign({},e),n),o={};for(const r in s)e[r]!==void 0&&n[r]!==void 0&&(o[r]=Kp(e[r],n[r]));return r=>{for(const l in o)s[l]=o[l](r);return s}};function fc(e){const n=lo.parse(e),s=n.length;let o=0,r=0,l=0;for(let a=0;a<s;a++)o||typeof n[a]=="number"?o++:n[a].hue!==void 0?l++:r++;return{parsed:n,numNumbers:o,numRGB:r,numHSL:l}}const Jp=(e,n)=>{const s=lo.createTransformer(n),o=fc(e),r=fc(n);return o.numHSL===r.numHSL&&o.numRGB===r.numRGB&&o.numNumbers>=r.numNumbers?Up(zp(o.parsed,r.parsed),s):a=>`${a>0?n:e}`},H3=(e,n)=>s=>ua(e,n,s);function q3(e){if(typeof e=="number")return H3;if(typeof e=="string")return lt.test(e)?Vp:Jp;if(Array.isArray(e))return zp;if(typeof e=="object")return L3}function N3(e,n,s){const o=[],r=s||q3(e[0]),l=e.length-1;for(let a=0;a<l;a++){let i=r(e[a],e[a+1]);if(n){const c=Array.isArray(n)?n[a]:n;i=Up(c,i)}o.push(i)}return o}function j3([e,n],[s]){return o=>s(Rp(e,n,o))}function W3(e,n){const s=e.length,o=s-1;return r=>{let l=0,a=!1;if(r<=e[0]?a=!0:r>=e[o]&&(l=o-1,a=!0),!a){let c=1;for(;c<s&&!(e[c]>r||c===o);c++);l=c-1}const i=Rp(e[l],e[l+1],r);return n[l](i)}}function Yp(e,n,{clamp:s=!0,ease:o,mixer:r}={}){const l=e.length;lc(l===n.length),lc(!o||!Array.isArray(o)||o.length===l-1),e[0]>e[l-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const a=N3(n,o,r),i=l===2?j3(e,a):W3(e,a);return s?c=>i(gl(e[0],e[l-1],c)):i}const ar=e=>n=>1-e(1-n),fa=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,V3=e=>n=>Math.pow(n,e),Gp=e=>n=>n*n*((e+1)*n-e),U3=e=>{const n=Gp(e);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},Zp=1.525,K3=4/11,z3=8/11,J3=9/10,Xp=e=>e,ha=V3(2),Y3=ar(ha),Qp=fa(ha),ed=e=>1-Math.sin(Math.acos(e)),td=ar(ed),G3=fa(td),ya=Gp(Zp),Z3=ar(ya),X3=fa(ya),Q3=U3(Zp),ek=4356/361,tk=35442/1805,nk=16061/1805,Lo=e=>{if(e===1||e===0)return e;const n=e*e;return e<K3?7.5625*n:e<z3?9.075*n-9.9*e+3.4:e<J3?ek*n-tk*e+nk:10.8*e*e-20.52*e+10.72},sk=ar(Lo),ok=e=>e<.5?.5*(1-Lo(1-e*2)):.5*Lo(e*2-1)+.5;function rk(e,n){return e.map(()=>n||Qp).splice(0,e.length-1)}function lk(e){const n=e.length;return e.map((s,o)=>o!==0?o/(n-1):0)}function ak(e,n){return e.map(s=>s*n)}function Bo({from:e=0,to:n=1,ease:s,offset:o,duration:r=300}){const l={done:!1,value:e},a=Array.isArray(n)?n:[e,n],i=ak(o&&o.length===a.length?o:lk(a),r);function c(){return Yp(i,a,{ease:Array.isArray(s)?s:rk(a,s)})}let u=c();return{next:d=>(l.value=u(d),l.done=d>=r,l),flipTarget:()=>{a.reverse(),u=c()}}}function ik({velocity:e=0,from:n=0,power:s=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:l}){const a={done:!1,value:n};let i=s*e;const c=n+i,u=l===void 0?c:l(c);return u!==c&&(i=u-n),{next:d=>{const f=-i*Math.exp(-d/o);return a.done=!(f>r||f<-r),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const hc={keyframes:Bo,spring:ca,decay:ik};function ck(e){if(Array.isArray(e.to))return Bo;if(hc[e.type])return hc[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?Bo:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?ca:Bo}function nd(e,n,s=0){return e-n-s}function uk(e,n,s=0,o=!0){return o?nd(n+-e,n,s):n-(e-n)+s}function pk(e,n,s,o){return o?e>=n+s:e<=-s}const dk=e=>{const n=({delta:s})=>e(s);return{start:()=>ml.update(n,!0),stop:()=>d3.update(n)}};function sd(e){var n,s,{from:o,autoplay:r=!0,driver:l=dk,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:f,onComplete:h,onRepeat:m,onUpdate:y}=e,_=Mp(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:w}=_,b,A=0,x=_.duration,E,R=!1,F=!0,j;const ee=ck(_);!((s=(n=ee).needsInterpolation)===null||s===void 0)&&s.call(n,o,w)&&(j=Yp([0,100],[o,w],{clamp:!1}),o=0,w=100);const ue=ee(Object.assign(Object.assign({},_),{from:o,to:w}));function he(){A++,c==="reverse"?(F=A%2===0,a=uk(a,x,u,F)):(a=nd(a,x,u),c==="mirror"&&ue.flipTarget()),R=!1,m&&m()}function we(){b.stop(),h&&h()}function Ue(Re){if(F||(Re=-Re),a+=Re,!R){const Oe=ue.next(Math.max(0,a));E=Oe.value,j&&(E=j(E)),R=F?Oe.done:a<=0}y==null||y(E),R&&(A===0&&(x!=null||(x=a)),A<i?pk(a,x,u,F)&&he():we())}function Ne(){d==null||d(),b=l(Ue),b.start()}return r&&Ne(),{stop:()=>{f==null||f(),b.stop()}}}function od(e,n){return n?e*(1e3/n):0}function fk({from:e=0,velocity:n=0,min:s,max:o,power:r=.8,timeConstant:l=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:f,onComplete:h,onStop:m}){let y;function _(x){return s!==void 0&&x<s||o!==void 0&&x>o}function w(x){return s===void 0?o:o===void 0||Math.abs(s-x)<Math.abs(o-x)?s:o}function b(x){y==null||y.stop(),y=sd(Object.assign(Object.assign({},x),{driver:d,onUpdate:E=>{var R;f==null||f(E),(R=x.onUpdate)===null||R===void 0||R.call(x,E)},onComplete:h,onStop:m}))}function A(x){b(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},x))}if(_(e))A({from:e,velocity:n,to:w(e)});else{let x=r*n+e;typeof u<"u"&&(x=u(x));const E=w(x),R=E===s?-1:1;let F,j;const ee=ue=>{F=j,j=ue,n=od(ue-F,Pp().delta),(R===1&&ue>E||R===-1&&ue<E)&&A({from:ue,to:E,velocity:n})};b({type:"decay",from:e,velocity:n,timeConstant:l,power:r,restDelta:c,modifyTarget:u,onUpdate:_(x)?ee:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const rd=(e,n)=>1-3*n+3*e,ld=(e,n)=>3*n-6*e,ad=e=>3*e,Ho=(e,n,s)=>((rd(n,s)*e+ld(n,s))*e+ad(n))*e,id=(e,n,s)=>3*rd(n,s)*e*e+2*ld(n,s)*e+ad(n),hk=1e-7,yk=10;function mk(e,n,s,o,r){let l,a,i=0;do a=n+(s-n)/2,l=Ho(a,o,r)-e,l>0?s=a:n=a;while(Math.abs(l)>hk&&++i<yk);return a}const gk=8,vk=.001;function _k(e,n,s,o){for(let r=0;r<gk;++r){const l=id(n,s,o);if(l===0)return n;const a=Ho(n,s,o)-e;n-=a/l}return n}const xo=11,go=1/(xo-1);function wk(e,n,s,o){if(e===n&&s===o)return Xp;const r=new Float32Array(xo);for(let a=0;a<xo;++a)r[a]=Ho(a*go,e,s);function l(a){let i=0,c=1;const u=xo-1;for(;c!==u&&r[c]<=a;++c)i+=go;--c;const d=(a-r[c])/(r[c+1]-r[c]),f=i+d*go,h=id(f,e,s);return h>=vk?_k(a,f,e,s):h===0?f:mk(a,i,i+go,e,s)}return a=>a===0||a===1?a:Ho(l(a),n,o)}const Cr={};class bk{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,o){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(n,s,o)}clear(){this.subscriptions.clear()}}const yc=e=>!isNaN(parseFloat(e));class kk{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new bk,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:r}=Pp();this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r),ml.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>ml.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=yc(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=yc(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?od(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:o}=n(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Bk(e){return new kk(e)}const{isArray:xk}=Array;function Ak(){const e=U({}),n=o=>{const r=l=>{!e.value[l]||(e.value[l].stop(),e.value[l].destroy(),delete e.value[l])};o?xk(o)?o.forEach(r):r(o):Object.keys(e.value).forEach(r)},s=(o,r,l)=>{if(e.value[o])return e.value[o];const a=Bk(r);return a.onChange(i=>l[o]=i),e.value[o]=a,a};return ay(n),{motionValues:e,get:s,stop:n}}const $k=e=>Array.isArray(e),wn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Or=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),Sk=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Dr=()=>({type:"keyframes",ease:"linear",duration:300}),Ek=e=>({type:"keyframes",duration:800,values:e}),mc={default:Sk,x:wn,y:wn,z:wn,rotate:wn,rotateX:wn,rotateY:wn,rotateZ:wn,scaleX:Or,scaleY:Or,scale:Or,backgroundColor:Dr,color:Dr,opacity:Dr},cd=(e,n)=>{let s;return $k(n)?s=Ek:s=mc[e]||mc.default,{to:n,...s(n)}},gc={...ro,transform:Math.round},ud={color:lt,backgroundColor:lt,outlineColor:lt,fill:lt,stroke:lt,borderColor:lt,borderTopColor:lt,borderRightColor:lt,borderBottomColor:lt,borderLeftColor:lt,borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,radius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,size:ae,top:ae,right:ae,bottom:ae,left:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,rotate:_n,rotateX:_n,rotateY:_n,rotateZ:_n,scale:mo,scaleX:mo,scaleY:mo,scaleZ:mo,skew:_n,skewX:_n,skewY:_n,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:Fs,originX:uc,originY:uc,originZ:ae,zIndex:gc,filter:bl,WebkitFilter:bl,fillOpacity:Fs,strokeOpacity:Fs,numOctaves:gc},ma=e=>ud[e],pd=(e,n)=>n&&typeof e=="number"&&n.transform?n.transform(e):e;function Tk(e,n){let s=ma(e);return s!==bl&&(s=lo),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const Ck={linear:Xp,easeIn:ha,easeInOut:Qp,easeOut:Y3,circIn:ed,circInOut:G3,circOut:td,backIn:ya,backInOut:X3,backOut:Z3,anticipate:Q3,bounceIn:sk,bounceInOut:ok,bounceOut:Lo},vc=e=>{if(Array.isArray(e)){const[n,s,o,r]=e;return wk(n,s,o,r)}else if(typeof e=="string")return Ck[e];return e},Ok=e=>Array.isArray(e)&&typeof e[0]!="number",_c=(e,n)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&lo.test(n)&&!n.startsWith("url("));function Dk(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function Ik({ease:e,times:n,delay:s,...o}){const r={...o};return n&&(r.offset=n),e&&(r.ease=Ok(e)?e.map(vc):vc(e)),s&&(r.elapsed=-s),r}function Pk(e,n,s){return Array.isArray(n.to)&&(e.duration||(e.duration=800)),Dk(n),Mk(e)||(e={...e,...cd(s,n.to)}),{...n,...Ik(e)}}function Mk({delay:e,repeat:n,repeatType:s,repeatDelay:o,from:r,...l}){return!!Object.keys(l).length}function Rk(e,n){return e[n]||e.default||e}function Fk(e,n,s,o,r){const l=Rk(o,e);let a=l.from===null||l.from===void 0?n.get():l.from;const i=_c(e,s);a==="none"&&i&&typeof s=="string"&&(a=Tk(e,s));const c=_c(e,a);function u(f){const h={from:a,to:s,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:m=>n.set(m)};return l.type==="inertia"||l.type==="decay"?fk({...h,...l}):sd({...Pk(l,h,e),onUpdate:m=>{h.onUpdate(m),l.onUpdate&&l.onUpdate(m)},onComplete:()=>{o.onComplete&&o.onComplete(),r&&r(),f&&f()}})}function d(f){return n.set(s),o.onComplete&&o.onComplete(),r&&r(),f&&f(),{stop:()=>{}}}return!c||!i||l.type===!1?d:u}function Lk(){const{motionValues:e,stop:n,get:s}=Ak();return{motionValues:e,stop:n,push:(r,l,a,i={},c)=>{const u=a[r],d=s(r,u,a);if(i&&i.immediate){d.set(l);return}const f=Fk(r,d,l,i,c);d.start(f)}}}function Hk(e,n={},{motionValues:s,push:o,stop:r}=Lk()){const l=B(n),a=U(!1);de(s,f=>{a.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const i=f=>{if(!l||!l[f])throw new Error(`The variant ${f} does not exist.`);return l[f]},c=f=>(typeof f=="string"&&(f=i(f)),Promise.all(Object.entries(f).map(([h,m])=>{if(h!=="transition")return new Promise(y=>o(h,m,e,f.transition||cd(h,f[h]),y))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const h=Yr(f)?f:i(f);Object.entries(h).forEach(([m,y])=>{m!=="transition"&&o(m,y,e,{immediate:!0})})},leave:async f=>{let h;if(l&&(l.leave&&(h=l.leave),!l.leave&&l.initial&&(h=l.initial)),!h){f();return}await c(h),f()},stop:r}}const ga=typeof window<"u",qk=()=>ga&&window.onpointerdown===null,Nk=()=>ga&&window.ontouchstart===null,jk=()=>ga&&window.onmousedown===null;function Wk({target:e,state:n,variants:s,apply:o}){const r=B(s),l=U(!1),a=U(!1),i=U(!1),c=S(()=>{let d=[];return r&&(r.hovered&&(d=[...d,...Object.keys(r.hovered)]),r.tapped&&(d=[...d,...Object.keys(r.tapped)]),r.focused&&(d=[...d,...Object.keys(r.focused)])),d}),u=S(()=>{const d={};Object.assign(d,n.value),l.value&&r.hovered&&Object.assign(d,r.hovered),a.value&&r.tapped&&Object.assign(d,r.tapped),i.value&&r.focused&&Object.assign(d,r.focused);for(const f in d)c.value.includes(f)||delete d[f];return d});r.hovered&&(ce(e,"mouseenter",()=>l.value=!0),ce(e,"mouseleave",()=>{l.value=!1,a.value=!1}),ce(e,"mouseout",()=>{l.value=!1,a.value=!1})),r.tapped&&(jk()&&(ce(e,"mousedown",()=>a.value=!0),ce(e,"mouseup",()=>a.value=!1)),qk()&&(ce(e,"pointerdown",()=>a.value=!0),ce(e,"pointerup",()=>a.value=!1)),Nk()&&(ce(e,"touchstart",()=>a.value=!0),ce(e,"touchend",()=>a.value=!1))),r.focused&&(ce(e,"focus",()=>i.value=!0),ce(e,"blur",()=>i.value=!1)),de(u,o)}function Vk({set:e,target:n,apply:s,variants:o,variant:r}){const l=B(o);de(()=>n,()=>{!l||(l.initial&&e("initial"),l.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function Uk({state:e,apply:n}){de(e,s=>{s&&n(s)},{immediate:!0})}function Kk({target:e,variants:n,variant:s}){const o=B(n);o&&(o.visible||o.visibleOnce)&&Im(e,([{isIntersecting:r}])=>{o.visible?r?s.value="visible":s.value="initial":o.visibleOnce&&(r&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function zk(e,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&Vk(e),n.syncVariants&&Uk(e),n.visibilityHooks&&Kk(e),n.eventListeners&&Wk(e)}function dd(e={}){const n=Ie({...e}),s=U({});return de(n,()=>{const o={};for(const[r,l]of Object.entries(n)){const a=ma(r),i=pd(l,a);o[r]=i}s.value=o},{immediate:!0,deep:!0}),{state:n,style:s}}function va(e,n){de(()=>$t(e),s=>{!s||n(s)},{immediate:!0})}const Jk={x:"translateX",y:"translateY",z:"translateZ"};function fd(e={},n=!0){const s=Ie({...e}),o=U("");return de(s,r=>{let l="",a=!1;if(n&&(r.x||r.y||r.z)){const i=[r.x||0,r.y||0,r.z||0].map(ae.transform).join(",");l+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(r)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const u=ma(i),d=pd(c,u);l+=`${Jk[i]||i}(${d}) `}n&&!a&&(l+="translateZ(0px) "),o.value=l.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const Yk=["","X","Y","Z"],Gk=["perspective","translate","scale","rotate","skew"],hd=["transformPerspective","x","y","z"];Gk.forEach(e=>{Yk.forEach(n=>{const s=e+n;hd.push(s)})});const Zk=new Set(hd);function _a(e){return Zk.has(e)}const Xk=new Set(["originX","originY","originZ"]);function yd(e){return Xk.has(e)}function Qk(e){const n={},s={};return Object.entries(e).forEach(([o,r])=>{_a(o)||yd(o)?n[o]=r:s[o]=r}),{transform:n,style:s}}function md(e){const{transform:n,style:s}=Qk(e),{transform:o}=fd(n),{style:r}=dd(s);return o.value&&(r.value.transform=o.value),r.value}function eB(e,n){let s,o;const{state:r,style:l}=dd();return va(e,a=>{o=a;for(const i of Object.keys(ud))a.style[i]===null||a.style[i]===""||_a(i)||yd(i)||(r[i]=a.style[i]);s&&Object.entries(s).forEach(([i,c])=>a.style[i]=c),n&&n(r)}),de(l,a=>{if(!o){s=a;return}for(const i in a)o.style[i]=a[i]},{immediate:!0}),{style:r}}function tB(e){const n=e.trim().split(/\) |\)/);if(n.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,r)=>{if(!r)return o;const[l,a]=r.split("("),c=a.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...o,[l]:u}},{})}function nB(e,n){Object.entries(tB(n)).forEach(([s,o])=>{const r=["x","y","z"];if(s==="translate3d"){if(o===0){r.forEach(l=>e[l]=0);return}o.forEach((l,a)=>e[r[a]]=l);return}if(o=parseFloat(o),s==="translateX"){e.x=o;return}if(s==="translateY"){e.y=o;return}if(s==="translateZ"){e.z=o;return}e[s]=o})}function sB(e,n){let s,o;const{state:r,transform:l}=fd();return va(e,a=>{o=a,a.style.transform&&nB(r,a.style.transform),s&&(a.style.transform=s),n&&n(r)}),de(l,a=>{if(!o){s=a;return}o.style.transform=a},{immediate:!0}),{transform:r}}function oB(e,n){const s=Ie({}),o=a=>Object.entries(a).forEach(([i,c])=>s[i]=c),{style:r}=eB(e,o),{transform:l}=sB(e,o);return de(s,a=>{Object.entries(a).forEach(([i,c])=>{const u=_a(i)?l:r;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),va(e,()=>n&&o(n)),{motionProperties:s,style:r,transform:l}}function rB(e={}){const n=B(e),s=U();return{state:S(()=>{if(!!s.value)return n[s.value]}),variant:s}}function gd(e,n={},s){const{motionProperties:o}=oB(e),{variant:r,state:l}=rB(n),a=Hk(o,n),i={target:e,variant:r,variants:n,state:l,motionProperties:o,...a};return zk(i,s),i}const lB=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],aB=(e,n)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&Yr(s.variants)&&(n.value={...n.value,...s.variants}),lB.forEach(o=>{if(o==="delay"){if(s&&s[o]&&Kh(s[o])){const r=s[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:r,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:r,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:r,...n.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&Yr(s[o])&&(n.value[o]=s[o])}))},Ir=e=>({created:(s,o,r)=>{const l=o.value&&typeof o.value=="string"?o.value:r.key;l&&Cr[l]&&Cr[l].stop();const a=U(e||{});typeof o.value=="object"&&(a.value=o.value),aB(r,a);const i=gd(s,a);s.motionInstance=i,l&&(Cr[l]=i)},getSSRProps(s,o){let{initial:r}=s.value||o&&(o==null?void 0:o.props)||{};r=B(r);const l=i3((e==null?void 0:e.initial)||{},r||{});return!l||Object.keys(l).length===0?void 0:{style:md(l)}}}),iB={initial:{opacity:0},enter:{opacity:1}},cB={initial:{opacity:0},visible:{opacity:1}},uB={initial:{opacity:0},visibleOnce:{opacity:1}},pB={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},dB={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},fB={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},hB={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},yB={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},mB={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},gB={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},vB={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},_B={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},wB={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},bB={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},kB={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},BB={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},xB={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},AB={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},$B={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},SB={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},EB={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},TB={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},CB={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},OB={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},DB={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},IB={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},PB={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},MB={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},RB={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},FB={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},kl={__proto__:null,fade:iB,fadeVisible:cB,fadeVisibleOnce:uB,pop:pB,popVisible:dB,popVisibleOnce:fB,rollBottom:BB,rollLeft:hB,rollRight:gB,rollTop:wB,rollVisibleBottom:xB,rollVisibleLeft:yB,rollVisibleRight:vB,rollVisibleTop:bB,rollVisibleOnceBottom:AB,rollVisibleOnceLeft:mB,rollVisibleOnceRight:_B,rollVisibleOnceTop:kB,slideBottom:MB,slideLeft:$B,slideRight:TB,slideTop:DB,slideVisibleBottom:RB,slideVisibleLeft:SB,slideVisibleRight:CB,slideVisibleTop:IB,slideVisibleOnceBottom:FB,slideVisibleOnceLeft:EB,slideVisibleOnceRight:OB,slideVisibleOnceTop:PB},LB=_e({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const n=vh(),s=Ie({});if(!e.is&&!n.default)return()=>Xe("div",{});const o=S(()=>{let c;return e.preset&&(c=kl[e.preset]),c}),r=S(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),l=S(()=>{const c={...r.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=S(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Ed(c)&&(c=Eo(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var f,h,m;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(h=u.variants)!=null&&h.visible&&u.apply("visible"),(m=u.variants)!=null&&m.visibleOnce&&u.apply("visibleOnce")},10)};Nl(()=>Object.entries(s).forEach(([u,d])=>c(d)))}return{slots:n,component:a,motionConfig:l,instances:s}},render({slots:e,motionConfig:n,instances:s,component:o}){var i;const r=md(n.initial||{}),l=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:d})=>{const f=gd(d,n);s[u]=f},c);if(o){const c=Xe(o,void 0,e);return l(c,0),c}return(((i=e.default)==null?void 0:i.call(e))||[]).map((c,u)=>l(c,u))}});function HB(e){const n="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(o,r=>s.charAt(n.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const qB={install(e,n){if(e.directive("motion",Ir()),e.component("Motion",LB),!n||n&&!n.excludePresets)for(const s in kl){const o=kl[s];e.directive(`motion-${HB(s)}`,Ir(o))}if(n&&n.directives)for(const s in n.directives){const o=n.directives[s];o.initial,e.directive(`motion-${s}`,Ir(o))}}};var wc;const Hs=typeof window<"u",NB=Object.prototype.toString,jB=e=>NB.call(e)==="[object Object]";Hs&&((wc=window==null?void 0:window.navigator)==null?void 0:wc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function WB(e){return Nc()?(jc(e),!0):!1}function VB(e){var n;const s=B(e);return(n=s==null?void 0:s.$el)!=null?n:s}const UB=Hs?window:void 0,Bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xl="__vueuse_ssr_handlers__";Bl[xl]=Bl[xl]||{};Bl[xl];function KB(e,n={}){const{immediate:s=!0,window:o=UB}=n,r=U(!1);let l=null;function a(){!r.value||!o||(e(),l=o.requestAnimationFrame(a))}function i(){!r.value&&o&&(r.value=!0,a())}function c(){r.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return s&&i(),WB(c),{isActive:r,pause:c,resume:i}}var bc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(bc||(bc={}));const wa="vue-starport-injection",vd="vue-starport-options",zB={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},_d={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var JB=Object.defineProperty,qo=Object.getOwnPropertySymbols,wd=Object.prototype.hasOwnProperty,bd=Object.prototype.propertyIsEnumerable,kc=(e,n,s)=>n in e?JB(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,YB=(e,n)=>{for(var s in n||(n={}))wd.call(n,s)&&kc(e,s,n[s]);if(qo)for(var s of qo(n))bd.call(n,s)&&kc(e,s,n[s]);return e},Bc=(e,n)=>{var s={};for(var o in e)wd.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&qo)for(var o of qo(e))n.indexOf(o)<0&&bd.call(e,o)&&(s[o]=e[o]);return s};const GB=_e({name:"StarportProxy",props:YB({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},_d),setup(e,n){const s=D(wa),o=S(()=>s.getInstance(e.port,e.component)),r=U(),l=o.value.generateId(),a=U(!1);return o.value.isVisible||(o.value.land(),a.value=!0),fs(async()=>{o.value.el||(o.value.el=r.value,await Ge(),a.value=!0,o.value.rect.update())}),Xo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await Ge(),await Ge(),!o.value.el&&s.dispose(o.value.port))}),de(()=>e,async()=>{o.value.props&&await Ge();const i=e,{props:c}=i,u=Bc(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:u}=i,d=Bc(i,["initialProps","mountedProps"]),f=it(d,(a.value?u:c)||{});return Xe("div",it(f,{id:l,ref:r,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?Xe(n.slots.default):void 0)}}});var ZB=Object.defineProperty,XB=Object.defineProperties,QB=Object.getOwnPropertyDescriptors,xc=Object.getOwnPropertySymbols,e9=Object.prototype.hasOwnProperty,t9=Object.prototype.propertyIsEnumerable,Ac=(e,n,s)=>n in e?ZB(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,n9=(e,n)=>{for(var s in n||(n={}))e9.call(n,s)&&Ac(e,s,n[s]);if(xc)for(var s of xc(n))t9.call(n,s)&&Ac(e,s,n[s]);return e},s9=(e,n)=>XB(e,QB(n));const o9=_e({name:"Starport",inheritAttrs:!0,props:_d,setup(e,n){const s=U(!1);return fs(()=>{s.value=!0}),()=>{var a,i;const o=(i=(a=n.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const r=o[0];let l=r.type;return(!jB(l)||Mn(l))&&(l={render(){return o}}),Xe(GB,s9(n9({},e),{key:e.port,component:zo(l),props:r.props}))}}});function r9(e){const n=Ie({height:0,width:0,left:0,top:0,update:o,listen:l,pause:a,margin:"0px",padding:"0px"}),s=Hs?document.documentElement||document.body:void 0;function o(){if(!Hs)return;const i=VB(e);if(!i)return;const{height:c,width:u,left:d,top:f}=i.getBoundingClientRect(),h=window.getComputedStyle(i),m=h.margin,y=h.padding;Object.assign(n,{height:c,width:u,left:d,top:s.scrollTop+f,margin:m,padding:y})}const r=KB(o,{immediate:!1});function l(){!Hs||(o(),r.resume())}function a(){r.pause()}return n}let l9=(e,n=21)=>(s=n)=>{let o="",r=s;for(;r--;)o+=e[Math.random()*e.length|0];return o};const $c=l9("abcdefghijklmnopqrstuvwxyz",5);function Sc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function a9(e){var n;return e.name||((n=e.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var i9=Object.defineProperty,Ec=Object.getOwnPropertySymbols,c9=Object.prototype.hasOwnProperty,u9=Object.prototype.propertyIsEnumerable,Tc=(e,n,s)=>n in e?i9(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Pr=(e,n)=>{for(var s in n||(n={}))c9.call(n,s)&&Tc(e,s,n[s]);if(Ec)for(var s of Ec(n))u9.call(n,s)&&Tc(e,s,n[s]);return e};function p9(e,n,s={}){const o=a9(n),r=Sc(o)||$c(),l=U(),a=U(null),i=U(!1),c=U(!1),u=Rd(!0),d=U({}),f=S(()=>Pr(Pr(Pr({},zB),s),d.value)),h=U(0);let m;u.run(()=>{m=r9(l),de(l,async b=>{b&&(c.value=!0),await Ge(),l.value||(c.value=!1)})});const y=Sc(e);function _(){return`starport-${r}-${y}-${$c()}`}const w=_();return Ie({el:l,id:w,port:e,props:a,rect:m,scope:u,isLanded:i,isVisible:c,options:f,liftOffTime:h,component:n,componentName:o,componentId:r,generateId:_,setLocalOptions(b={}){d.value=JSON.parse(JSON.stringify(b))},elRef(){return l},liftOff(){!i.value||(i.value=!1,h.value=Date.now(),m.listen())},land(){i.value||(i.value=!0,m.pause())}})}function d9(e){const n=Ie(new Map);function s(r,l){let a=n.get(r);return a||(a=p9(r,l,e),n.set(r,a)),a.component=l,a}function o(r){var l;(l=n.get(r))==null||l.scope.stop(),n.delete(r)}return{portMap:n,dispose:o,getInstance:s}}var f9=Object.defineProperty,h9=Object.defineProperties,y9=Object.getOwnPropertyDescriptors,Cc=Object.getOwnPropertySymbols,m9=Object.prototype.hasOwnProperty,g9=Object.prototype.propertyIsEnumerable,Oc=(e,n,s)=>n in e?f9(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,v9=(e,n)=>{for(var s in n||(n={}))m9.call(n,s)&&Oc(e,s,n[s]);if(Cc)for(var s of Cc(n))g9.call(n,s)&&Oc(e,s,n[s]);return e},_9=(e,n)=>h9(e,y9(n));const w9=_e({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const n=D(wa);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=S(()=>n.getInstance(e.port,e.component)),o=S(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),r=S(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?_9(v9({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),u)}),l={};return()=>{const a=!!(s.value.isLanded&&s.value.el);return Xe("div",{style:r.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},Xe(ih,{to:a?`#${o.value}`:"body",disabled:!a},Xe(s.value.component,it(l,s.value.props))))}}}),b9=_e({name:"StarportCarrier",setup(e,{slots:n}){const s=d9(D(vd,{}));return Hn().appContext.app.provide(wa,s),()=>{var r;return[(r=n.default)==null?void 0:r.call(n),Array.from(s.portMap.entries()).map(([l,{component:a}])=>Xe(w9,{key:l,port:l,component:a}))]}}});function k9(e={}){return{install(n){n.provide(vd,e),n.component("Starport",o9),n.component("StarportCarrier",b9)}}}function B9(e){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),e.app.use(qB),e.app.use(k9({keepAlive:!0}))}function ut(e,n,s){var o,r;return(r=((o=e.instance)==null?void 0:o.$).provides[n])!=null?r:s}function x9(){return{install(e){e.directive("click",{name:"v-click",mounted(n,s){var d,f,h,m;if(Ms.value||((d=ut(s,Os))==null?void 0:d.value))return;const o=ut(s,An),r=ut(s,Cs),l=ut(s,Xr),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,u=i?Fy:mr;if(o&&!((h=o==null?void 0:o.value)!=null&&h.includes(n))&&o.value.push(n),s.value==null&&(s.value=o==null?void 0:o.value.length),!(l!=null&&l.value.has(s.value)))l==null||l.value.set(s.value,[n]);else if(!((m=l==null?void 0:l.value.get(s.value))!=null&&m.includes(n))){const y=(l==null?void 0:l.value.get(s.value))||[];l==null||l.value.set(s.value,[n].concat(y))}n==null||n.classList.toggle(kn,!0),r&&de(r,()=>{var b;const y=(b=r==null?void 0:r.value)!=null?b:0,_=s.value!=null?y>=s.value:y>c;n.classList.contains(gr)||n.classList.toggle(u,!_),a!==!1&&a!==void 0&&n.classList.toggle(u,_),n.classList.toggle(_s,!1);const w=l==null?void 0:l.value.get(y);w==null||w.forEach((A,x)=>{A.classList.toggle(ho,!1),x===w.length-1?A.classList.toggle(_s,!0):A.classList.toggle(ho,!0)}),n.classList.contains(_s)||n.classList.toggle(ho,_)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(kn,!1);const o=ut(s,An);o!=null&&o.value&&Qr(o.value,n)}}),e.directive("after",{name:"v-after",mounted(n,s){var i,c;if(Ms.value||((i=ut(s,Os))==null?void 0:i.value))return;const o=ut(s,An),r=ut(s,Cs),l=ut(s,Xr),a=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),l!=null&&l.value.has(s.value)?(c=l==null?void 0:l.value.get(s.value))==null||c.push(n):l==null||l.value.set(s.value,[n]),n==null||n.classList.toggle(kn,!0),r&&de(r,()=>{var d,f,h;const u=((d=r.value)!=null?d:0)>=((h=(f=s.value)!=null?f:a)!=null?h:0);n.classList.contains(gr)||n.classList.toggle(mr,!u),n.classList.toggle(_s,!1),n.classList.contains(_s)||n.classList.toggle(ho,u)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(kn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(n,s){var a,i,c;if(Ms.value||((a=ut(s,Os))==null?void 0:a.value))return;const o=ut(s,An),r=ut(s,Cs),l=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(n))&&o.value.push(n),n==null||n.classList.toggle(kn,!0),r&&de(r,()=>{var f;const u=(f=r==null?void 0:r.value)!=null?f:0,d=s.value!=null?u>=s.value:u>l;n.classList.toggle(mr,d),n.classList.toggle(gr,d)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(kn,!1);const o=ut(s,An);o!=null&&o.value&&Qr(o.value,n)}})}}}function A9(e,n){const s=yp(e),o=mp(n,s.currentRoute,s.currentPage);return{nav:{...s,...o,downloadPDF:dl,next:un,nextSlide:Gs,openInEditor:o3,prev:pn,prevSlide:Zs},configs:ke,themeConfigs:S(()=>ke.themeConfig)}}function $9(){return{install(e){const n=A9(Xt,Tt);e.provide(M,Ie(n))}}}const ys=jh(l3);ys.use(mt);ys.use(Oy());ys.use(x9());ys.use($9());B9({app:ys,router:mt});ys.mount("#app");export{av as $,jg as A,s3 as B,fs as C,Ie as D,E9 as E,Se as F,O9 as G,de as H,P as I,xe as J,st as K,Xg as L,hn as M,yn as N,Tt as O,Fo as P,Qb as Q,Ar as R,vr as S,zs as T,Br as U,c1 as V,Ql as W,ea as X,e1 as Y,qe as Z,pp as _,M as a,jt as a0,Dt as a1,S9 as a2,at as a3,xs as a4,yo as a5,Tn as a6,Lt as a7,il as a8,Tg as a9,Cg as aa,Og as ab,Ig as ac,er as ad,Cu as ae,D9 as af,ot as ag,Nv as ah,Hu as ai,Pg as aj,Xo as ak,Yg as al,Py as b,ke as c,_e as d,vf as e,V as f,t as g,B as h,D as i,We as j,Cp as k,p as l,H as m,Ve as n,k as o,fe as p,qu as q,eo as r,Me as s,Yt as t,T9 as u,U as v,C9 as w,S as x,ft as y,q as z};
