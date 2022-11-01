(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();function qo(e,n){const s=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)s[o[r]]=!0;return n?r=>!!s[r.toLowerCase()]:r=>!!s[r]}const _d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wd=qo(_d);function Ic(e){return!!e||e===""}function Ke(e){if(oe(e)){const n={};for(let s=0;s<e.length;s++){const o=e[s],r=Fe(o)?Bd(o):Ke(o);if(r)for(const l in r)n[l]=r[l]}return n}else{if(Fe(e))return e;if(Pe(e))return e}}const bd=/;(?![^(]*\))/g,kd=/:(.+)/;function Bd(e){const n={};return e.split(bd).forEach(s=>{if(s){const o=s.split(kd);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Re(e){let n="";if(Fe(e))n=e;else if(oe(e))for(let s=0;s<e.length;s++){const o=Re(e[s]);o&&(n+=o+" ")}else if(Pe(e))for(const s in e)e[s]&&(n+=s+" ");return n.trim()}function ee(e){if(!e)return null;let{class:n,style:s}=e;return n&&!Fe(n)&&(e.class=Re(n)),s&&(e.style=Ke(s)),e}const xd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Ad=qo(xd),Jt=e=>Fe(e)?e:e==null?"":oe(e)||Pe(e)&&(e.toString===Fc||!ie(e.toString))?JSON.stringify(e,Pc,2):String(e),Pc=(e,n)=>n&&n.__v_isRef?Pc(e,n.value):Xn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,r])=>(s[`${o} =>`]=r,s),{})}:Mc(n)?{[`Set(${n.size})`]:[...n.values()]}:Pe(n)&&!oe(n)&&!Lc(n)?String(n):n,Te={},Zn=[],St=()=>{},$d=()=>!1,Sd=/^on[^a-z]/,No=e=>Sd.test(e),Al=e=>e.startsWith("onUpdate:"),rt=Object.assign,$l=(e,n)=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)},Ed=Object.prototype.hasOwnProperty,ve=(e,n)=>Ed.call(e,n),oe=Array.isArray,Xn=e=>jo(e)==="[object Map]",Mc=e=>jo(e)==="[object Set]",ie=e=>typeof e=="function",Fe=e=>typeof e=="string",Sl=e=>typeof e=="symbol",Pe=e=>e!==null&&typeof e=="object",Rc=e=>Pe(e)&&ie(e.then)&&ie(e.catch),Fc=Object.prototype.toString,jo=e=>Fc.call(e),Td=e=>jo(e).slice(8,-1),Lc=e=>jo(e)==="[object Object]",El=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,go=qo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wo=e=>{const n=Object.create(null);return s=>n[s]||(n[s]=e(s))},Cd=/-(\w)/g,Ht=Wo(e=>e.replace(Cd,(n,s)=>s?s.toUpperCase():"")),Od=/\B([A-Z])/g,Rn=Wo(e=>e.replace(Od,"-$1").toLowerCase()),Vo=Wo(e=>e.charAt(0).toUpperCase()+e.slice(1)),ir=Wo(e=>e?`on${Vo(e)}`:""),qs=(e,n)=>!Object.is(e,n),Qn=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)},xo=(e,n,s)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:s})},Mr=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Ba;const Dd=()=>Ba||(Ba=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let pt;class Hc{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=pt,!n&&pt&&(this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}run(n){if(this.active){const s=pt;try{return pt=this,n()}finally{pt=s}}}on(){pt=this}off(){pt=this.parent}stop(n){if(this.active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Id(e){return new Hc(e)}function Pd(e,n=pt){n&&n.active&&n.effects.push(e)}function qc(){return pt}function Nc(e){pt&&pt.cleanups.push(e)}const Tl=e=>{const n=new Set(e);return n.w=0,n.n=0,n},jc=e=>(e.w&dn)>0,Wc=e=>(e.n&dn)>0,Md=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=dn},Rd=e=>{const{deps:n}=e;if(n.length){let s=0;for(let o=0;o<n.length;o++){const r=n[o];jc(r)&&!Wc(r)?r.delete(e):n[s++]=r,r.w&=~dn,r.n&=~dn}n.length=s}},Rr=new WeakMap;let As=0,dn=1;const Fr=30;let xt;const Tn=Symbol(""),Lr=Symbol("");class Cl{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Pd(this,o)}run(){if(!this.active)return this.fn();let n=xt,s=rn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=xt,xt=this,rn=!0,dn=1<<++As,As<=Fr?Md(this):xa(this),this.fn()}finally{As<=Fr&&Rd(this),dn=1<<--As,xt=this.parent,rn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xt===this?this.deferStop=!0:this.active&&(xa(this),this.onStop&&this.onStop(),this.active=!1)}}function xa(e){const{deps:n}=e;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(e);n.length=0}}let rn=!0;const Vc=[];function us(){Vc.push(rn),rn=!1}function ps(){const e=Vc.pop();rn=e===void 0?!0:e}function mt(e,n,s){if(rn&&xt){let o=Rr.get(e);o||Rr.set(e,o=new Map);let r=o.get(s);r||o.set(s,r=Tl()),Uc(r)}}function Uc(e,n){let s=!1;As<=Fr?Wc(e)||(e.n|=dn,s=!jc(e)):s=!e.has(xt),s&&(e.add(xt),xt.deps.push(e))}function Yt(e,n,s,o,r,l){const a=Rr.get(e);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(s==="length"&&oe(e))a.forEach((c,u)=>{(u==="length"||u>=o)&&i.push(c)});else switch(s!==void 0&&i.push(a.get(s)),n){case"add":oe(e)?El(s)&&i.push(a.get("length")):(i.push(a.get(Tn)),Xn(e)&&i.push(a.get(Lr)));break;case"delete":oe(e)||(i.push(a.get(Tn)),Xn(e)&&i.push(a.get(Lr)));break;case"set":Xn(e)&&i.push(a.get(Tn));break}if(i.length===1)i[0]&&Hr(i[0]);else{const c=[];for(const u of i)u&&c.push(...u);Hr(Tl(c))}}function Hr(e,n){const s=oe(e)?e:[...e];for(const o of s)o.computed&&Aa(o);for(const o of s)o.computed||Aa(o)}function Aa(e,n){(e!==xt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Fd=qo("__proto__,__v_isRef,__isVue"),Kc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Sl)),Ld=Ol(),Hd=Ol(!1,!0),qd=Ol(!0),$a=Nd();function Nd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...s){const o=Be(this);for(let l=0,a=this.length;l<a;l++)mt(o,"get",l+"");const r=o[n](...s);return r===-1||r===!1?o[n](...s.map(Be)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...s){us();const o=Be(this)[n].apply(this,s);return ps(),o}}),e}function Ol(e=!1,n=!1){return function(o,r,l){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&l===(e?n?sf:Zc:n?Gc:Yc).get(o))return o;const a=oe(o);if(!e&&a&&ve($a,r))return Reflect.get($a,r,l);const i=Reflect.get(o,r,l);return(Sl(r)?Kc.has(r):Fd(r))||(e||mt(o,"get",r),n)?i:xe(i)?a&&El(r)?i:i.value:Pe(i)?e?An(i):Ie(i):i}}const jd=zc(),Wd=zc(!0);function zc(e=!1){return function(s,o,r,l){let a=s[o];if(rs(a)&&xe(a)&&!xe(r))return!1;if(!e&&(!Ao(r)&&!rs(r)&&(a=Be(a),r=Be(r)),!oe(s)&&xe(a)&&!xe(r)))return a.value=r,!0;const i=oe(s)&&El(o)?Number(o)<s.length:ve(s,o),c=Reflect.set(s,o,r,l);return s===Be(l)&&(i?qs(r,a)&&Yt(s,"set",o,r):Yt(s,"add",o,r)),c}}function Vd(e,n){const s=ve(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&s&&Yt(e,"delete",n,void 0),o}function Ud(e,n){const s=Reflect.has(e,n);return(!Sl(n)||!Kc.has(n))&&mt(e,"has",n),s}function Kd(e){return mt(e,"iterate",oe(e)?"length":Tn),Reflect.ownKeys(e)}const Jc={get:Ld,set:jd,deleteProperty:Vd,has:Ud,ownKeys:Kd},zd={get:qd,set(e,n){return!0},deleteProperty(e,n){return!0}},Jd=rt({},Jc,{get:Hd,set:Wd}),Dl=e=>e,Uo=e=>Reflect.getPrototypeOf(e);function lo(e,n,s=!1,o=!1){e=e.__v_raw;const r=Be(e),l=Be(n);s||(n!==l&&mt(r,"get",n),mt(r,"get",l));const{has:a}=Uo(r),i=o?Dl:s?Ml:Ns;if(a.call(r,n))return i(e.get(n));if(a.call(r,l))return i(e.get(l));e!==r&&e.get(n)}function ao(e,n=!1){const s=this.__v_raw,o=Be(s),r=Be(e);return n||(e!==r&&mt(o,"has",e),mt(o,"has",r)),e===r?s.has(e):s.has(e)||s.has(r)}function io(e,n=!1){return e=e.__v_raw,!n&&mt(Be(e),"iterate",Tn),Reflect.get(e,"size",e)}function Sa(e){e=Be(e);const n=Be(this);return Uo(n).has.call(n,e)||(n.add(e),Yt(n,"add",e,e)),this}function Ea(e,n){n=Be(n);const s=Be(this),{has:o,get:r}=Uo(s);let l=o.call(s,e);l||(e=Be(e),l=o.call(s,e));const a=r.call(s,e);return s.set(e,n),l?qs(n,a)&&Yt(s,"set",e,n):Yt(s,"add",e,n),this}function Ta(e){const n=Be(this),{has:s,get:o}=Uo(n);let r=s.call(n,e);r||(e=Be(e),r=s.call(n,e)),o&&o.call(n,e);const l=n.delete(e);return r&&Yt(n,"delete",e,void 0),l}function Ca(){const e=Be(this),n=e.size!==0,s=e.clear();return n&&Yt(e,"clear",void 0,void 0),s}function co(e,n){return function(o,r){const l=this,a=l.__v_raw,i=Be(a),c=n?Dl:e?Ml:Ns;return!e&&mt(i,"iterate",Tn),a.forEach((u,d)=>o.call(r,c(u),c(d),l))}}function uo(e,n,s){return function(...o){const r=this.__v_raw,l=Be(r),a=Xn(l),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=r[e](...o),d=s?Dl:n?Ml:Ns;return!n&&mt(l,"iterate",c?Lr:Tn),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:i?[d(f[0]),d(f[1])]:d(f),done:h}},[Symbol.iterator](){return this}}}}function en(e){return function(...n){return e==="delete"?!1:this}}function Yd(){const e={get(l){return lo(this,l)},get size(){return io(this)},has:ao,add:Sa,set:Ea,delete:Ta,clear:Ca,forEach:co(!1,!1)},n={get(l){return lo(this,l,!1,!0)},get size(){return io(this)},has:ao,add:Sa,set:Ea,delete:Ta,clear:Ca,forEach:co(!1,!0)},s={get(l){return lo(this,l,!0)},get size(){return io(this,!0)},has(l){return ao.call(this,l,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:co(!0,!1)},o={get(l){return lo(this,l,!0,!0)},get size(){return io(this,!0)},has(l){return ao.call(this,l,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=uo(l,!1,!1),s[l]=uo(l,!0,!1),n[l]=uo(l,!1,!0),o[l]=uo(l,!0,!0)}),[e,s,n,o]}const[Gd,Zd,Xd,Qd]=Yd();function Il(e,n){const s=n?e?Qd:Xd:e?Zd:Gd;return(o,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(ve(s,r)&&r in o?s:o,r,l)}const ef={get:Il(!1,!1)},tf={get:Il(!1,!0)},nf={get:Il(!0,!1)},Yc=new WeakMap,Gc=new WeakMap,Zc=new WeakMap,sf=new WeakMap;function of(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rf(e){return e.__v_skip||!Object.isExtensible(e)?0:of(Td(e))}function Ie(e){return rs(e)?e:Pl(e,!1,Jc,ef,Yc)}function lf(e){return Pl(e,!1,Jd,tf,Gc)}function An(e){return Pl(e,!0,zd,nf,Zc)}function Pl(e,n,s,o,r){if(!Pe(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const l=r.get(e);if(l)return l;const a=rf(e);if(a===0)return e;const i=new Proxy(e,a===2?o:s);return r.set(e,i),i}function es(e){return rs(e)?es(e.__v_raw):!!(e&&e.__v_isReactive)}function rs(e){return!!(e&&e.__v_isReadonly)}function Ao(e){return!!(e&&e.__v_isShallow)}function Xc(e){return es(e)||rs(e)}function Be(e){const n=e&&e.__v_raw;return n?Be(n):e}function Ko(e){return xo(e,"__v_skip",!0),e}const Ns=e=>Pe(e)?Ie(e):e,Ml=e=>Pe(e)?An(e):e;function Rl(e){rn&&xt&&(e=Be(e),Uc(e.dep||(e.dep=Tl())))}function Fl(e,n){e=Be(e),e.dep&&Hr(e.dep)}function xe(e){return!!(e&&e.__v_isRef===!0)}function W(e){return Qc(e,!1)}function qt(e){return Qc(e,!0)}function Qc(e,n){return xe(e)?e:new af(e,n)}class af{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:Be(n),this._value=s?n:Ns(n)}get value(){return Rl(this),this._value}set value(n){const s=this.__v_isShallow||Ao(n)||rs(n);n=s?n:Be(n),qs(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:Ns(n),Fl(this))}}function B(e){return xe(e)?e.value:e}const cf={get:(e,n,s)=>B(Reflect.get(e,n,s)),set:(e,n,s,o)=>{const r=e[n];return xe(r)&&!xe(s)?(r.value=s,!0):Reflect.set(e,n,s,o)}};function eu(e){return es(e)?e:new Proxy(e,cf)}class uf{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>Rl(this),()=>Fl(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function tu(e){return new uf(e)}function pf(e){const n=oe(e)?new Array(e.length):{};for(const s in e)n[s]=ff(e,s);return n}class df{constructor(n,s,o){this._object=n,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function ff(e,n,s){const o=e[n];return xe(o)?o:new df(e,n,s)}var nu;class hf{constructor(n,s,o,r){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[nu]=!1,this._dirty=!0,this.effect=new Cl(n,()=>{this._dirty||(this._dirty=!0,Fl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const n=Be(this);return Rl(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}nu="__v_isReadonly";function yf(e,n,s=!1){let o,r;const l=ie(e);return l?(o=e,r=St):(o=e.get,r=e.set),new hf(o,r,l||!r,s)}function ln(e,n,s,o){let r;try{r=o?e(...o):e()}catch(l){zo(l,n,s)}return r}function Et(e,n,s,o){if(ie(e)){const l=ln(e,n,s,o);return l&&Rc(l)&&l.catch(a=>{zo(a,n,s)}),l}const r=[];for(let l=0;l<e.length;l++)r.push(Et(e[l],n,s,o));return r}function zo(e,n,s,o=!0){const r=n?n.vnode:null;if(n){let l=n.parent;const a=n.proxy,i=s;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,i)===!1)return}l=l.parent}const c=n.appContext.config.errorHandler;if(c){ln(c,null,10,[e,a,i]);return}}mf(e,s,r,o)}function mf(e,n,s,o=!0){console.error(e)}let js=!1,qr=!1;const Ye=[];let Mt=0;const ts=[];let Ut=null,bn=0;const su=Promise.resolve();let Ll=null;function Ge(e){const n=Ll||su;return e?n.then(this?e.bind(this):e):n}function gf(e){let n=Mt+1,s=Ye.length;for(;n<s;){const o=n+s>>>1;Ws(Ye[o])<e?n=o+1:s=o}return n}function Hl(e){(!Ye.length||!Ye.includes(e,js&&e.allowRecurse?Mt+1:Mt))&&(e.id==null?Ye.push(e):Ye.splice(gf(e.id),0,e),ou())}function ou(){!js&&!qr&&(qr=!0,Ll=su.then(lu))}function vf(e){const n=Ye.indexOf(e);n>Mt&&Ye.splice(n,1)}function _f(e){oe(e)?ts.push(...e):(!Ut||!Ut.includes(e,e.allowRecurse?bn+1:bn))&&ts.push(e),ou()}function Oa(e,n=js?Mt+1:0){for(;n<Ye.length;n++){const s=Ye[n];s&&s.pre&&(Ye.splice(n,1),n--,s())}}function ru(e){if(ts.length){const n=[...new Set(ts)];if(ts.length=0,Ut){Ut.push(...n);return}for(Ut=n,Ut.sort((s,o)=>Ws(s)-Ws(o)),bn=0;bn<Ut.length;bn++)Ut[bn]();Ut=null,bn=0}}const Ws=e=>e.id==null?1/0:e.id,wf=(e,n)=>{const s=Ws(e)-Ws(n);if(s===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return s};function lu(e){qr=!1,js=!0,Ye.sort(wf);const n=St;try{for(Mt=0;Mt<Ye.length;Mt++){const s=Ye[Mt];s&&s.active!==!1&&ln(s,null,14)}}finally{Mt=0,Ye.length=0,ru(),js=!1,Ll=null,(Ye.length||ts.length)&&lu()}}function bf(e,n,...s){if(e.isUnmounted)return;const o=e.vnode.props||Te;let r=s;const l=n.startsWith("update:"),a=l&&n.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=o[d]||Te;h&&(r=s.map(m=>m.trim())),f&&(r=s.map(Mr))}let i,c=o[i=ir(n)]||o[i=ir(Ht(n))];!c&&l&&(c=o[i=ir(Rn(n))]),c&&Et(c,e,6,r);const u=o[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Et(u,e,6,r)}}function au(e,n,s=!1){const o=n.emitsCache,r=o.get(e);if(r!==void 0)return r;const l=e.emits;let a={},i=!1;if(!ie(e)){const c=u=>{const d=au(u,n,!0);d&&(i=!0,rt(a,d))};!s&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!i?(Pe(e)&&o.set(e,null),null):(oe(l)?l.forEach(c=>a[c]=null):rt(a,l),Pe(e)&&o.set(e,a),a)}function Jo(e,n){return!e||!No(n)?!1:(n=n.slice(2).replace(/Once$/,""),ve(e,n[0].toLowerCase()+n.slice(1))||ve(e,Rn(n))||ve(e,n))}let Ze=null,Yo=null;function $o(e){const n=Ze;return Ze=e,Yo=e&&e.type.__scopeId||null,n}function Fn(e){Yo=e}function Ln(){Yo=null}function q(e,n=Ze,s){if(!n||e._n)return e;const o=(...r)=>{o._d&&Wa(-1);const l=$o(n);let a;try{a=e(...r)}finally{$o(l),o._d&&Wa(1)}return a};return o._n=!0,o._c=!0,o._d=!0,o}function cr(e){const{type:n,vnode:s,proxy:o,withProxy:r,props:l,propsOptions:[a],slots:i,attrs:c,emit:u,render:d,renderCache:f,data:h,setupState:m,ctx:y,inheritAttrs:_}=e;let w,b;const A=$o(e);try{if(s.shapeFlag&4){const S=r||o;w=Pt(d.call(S,S,f,l,m,h,y)),b=c}else{const S=n;w=Pt(S.length>1?S(l,{attrs:c,slots:i,emit:u}):S(l,null)),b=n.props?c:kf(c)}}catch(S){Ts.length=0,zo(S,e,1),w=V(fn)}let x=w;if(b&&_!==!1){const S=Object.keys(b),{shapeFlag:P}=x;S.length&&P&7&&(a&&S.some(Al)&&(b=Bf(b,a)),x=Pn(x,b))}return s.dirs&&(x=Pn(x),x.dirs=x.dirs?x.dirs.concat(s.dirs):s.dirs),s.transition&&(x.transition=s.transition),w=x,$o(A),w}const kf=e=>{let n;for(const s in e)(s==="class"||s==="style"||No(s))&&((n||(n={}))[s]=e[s]);return n},Bf=(e,n)=>{const s={};for(const o in e)(!Al(o)||!(o.slice(9)in n))&&(s[o]=e[o]);return s};function xf(e,n,s){const{props:o,children:r,component:l}=e,{props:a,children:i,patchFlag:c}=n,u=l.emitsOptions;if(n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?Da(o,a,u):!!a;if(c&8){const d=n.dynamicProps;for(let f=0;f<d.length;f++){const h=d[f];if(a[h]!==o[h]&&!Jo(u,h))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?Da(o,a,u):!0:!!a;return!1}function Da(e,n,s){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const l=o[r];if(n[l]!==e[l]&&!Jo(s,l))return!0}return!1}function Af({vnode:e,parent:n},s){for(;n&&n.subTree===e;)(e=n.vnode).el=s,n=n.parent}const iu=e=>e.__isSuspense;function $f(e,n){n&&n.pendingBranch?oe(e)?n.effects.push(...e):n.effects.push(e):_f(e)}function ft(e,n){if(Ue){let s=Ue.provides;const o=Ue.parent&&Ue.parent.provides;o===s&&(s=Ue.provides=Object.create(o)),s[e]=n}}function D(e,n,s=!1){const o=Ue||Ze;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return s&&ie(n)?n.call(o.proxy):n}}function ds(e,n){return ql(e,null,n)}const Ia={};function de(e,n,s){return ql(e,n,s)}function ql(e,n,{immediate:s,deep:o,flush:r,onTrack:l,onTrigger:a}=Te){const i=Ue;let c,u=!1,d=!1;if(xe(e)?(c=()=>e.value,u=Ao(e)):es(e)?(c=()=>e,o=!0):oe(e)?(d=!0,u=e.some(b=>es(b)||Ao(b)),c=()=>e.map(b=>{if(xe(b))return b.value;if(es(b))return $n(b);if(ie(b))return ln(b,i,2)})):ie(e)?n?c=()=>ln(e,i,2):c=()=>{if(!(i&&i.isUnmounted))return f&&f(),Et(e,i,3,[h])}:c=St,n&&o){const b=c;c=()=>$n(b())}let f,h=b=>{f=w.onStop=()=>{ln(b,i,4)}};if(Us)return h=St,n?s&&Et(n,i,3,[c(),d?[]:void 0,h]):c(),St;let m=d?[]:Ia;const y=()=>{if(!!w.active)if(n){const b=w.run();(o||u||(d?b.some((A,x)=>qs(A,m[x])):qs(b,m)))&&(f&&f(),Et(n,i,3,[b,m===Ia?void 0:m,h]),m=b)}else w.run()};y.allowRecurse=!!n;let _;r==="sync"?_=y:r==="post"?_=()=>ze(y,i&&i.suspense):(y.pre=!0,i&&(y.id=i.uid),_=()=>Hl(y));const w=new Cl(c,_);return n?s?y():m=w.run():r==="post"?ze(w.run.bind(w),i&&i.suspense):w.run(),()=>{w.stop(),i&&i.scope&&$l(i.scope.effects,w)}}function Sf(e,n,s){const o=this.proxy,r=Fe(e)?e.includes(".")?cu(o,e):()=>o[e]:e.bind(o,o);let l;ie(n)?l=n:(l=n.handler,s=n);const a=Ue;ls(this);const i=ql(r,l.bind(o),s);return a?ls(a):Cn(),i}function cu(e,n){const s=n.split(".");return()=>{let o=e;for(let r=0;r<s.length&&o;r++)o=o[s[r]];return o}}function $n(e,n){if(!Pe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),xe(e))$n(e.value,n);else if(oe(e))for(let s=0;s<e.length;s++)$n(e[s],n);else if(Mc(e)||Xn(e))e.forEach(s=>{$n(s,n)});else if(Lc(e))for(const s in e)$n(e[s],n);return e}function uu(e,n){e.shapeFlag&6&&e.component?uu(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function _e(e){return ie(e)?{setup:e,name:e.name}:e}const ns=e=>!!e.type.__asyncLoader,pu=e=>e.type.__isKeepAlive,Ef={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const s=Hn(),o=s.ctx;if(!o.renderer)return()=>{const A=n.default&&n.default();return A&&A.length===1?A[0]:A};const r=new Map,l=new Set;let a=null;const i=s.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:f}}}=o,h=f("div");o.activate=(A,x,S,P,R)=>{const N=A.component;u(A,x,S,0,i),c(N.vnode,A,x,S,N,i,P,A.slotScopeIds,R),ze(()=>{N.isDeactivated=!1,N.a&&Qn(N.a);const Q=A.props&&A.props.onVnodeMounted;Q&&vt(Q,N.parent,A)},i)},o.deactivate=A=>{const x=A.component;u(A,h,null,1,i),ze(()=>{x.da&&Qn(x.da);const S=A.props&&A.props.onVnodeUnmounted;S&&vt(S,x.parent,A),x.isDeactivated=!0},i)};function m(A){ur(A),d(A,s,i,!0)}function y(A){r.forEach((x,S)=>{const P=zr(x.type);P&&(!A||!A(P))&&_(S)})}function _(A){const x=r.get(A);!a||x.type!==a.type?m(x):a&&ur(a),r.delete(A),l.delete(A)}de(()=>[e.include,e.exclude],([A,x])=>{A&&y(S=>$s(A,S)),x&&y(S=>!$s(x,S))},{flush:"post",deep:!0});let w=null;const b=()=>{w!=null&&r.set(w,pr(s.subTree))};return fs(b),Nl(b),Zo(()=>{r.forEach(A=>{const{subTree:x,suspense:S}=s,P=pr(x);if(A.type===P.type){ur(P);const R=P.component.da;R&&ze(R,S);return}m(A)})}),()=>{if(w=null,!n.default)return null;const A=n.default(),x=A[0];if(A.length>1)return a=null,A;if(!In(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return a=null,x;let S=pr(x);const P=S.type,R=zr(ns(S)?S.type.__asyncResolved||{}:P),{include:N,exclude:Q,max:ue}=e;if(N&&(!R||!$s(N,R))||Q&&R&&$s(Q,R))return a=S,x;const he=S.key==null?P:S.key,we=r.get(he);return S.el&&(S=Pn(S),x.shapeFlag&128&&(x.ssContent=S)),w=he,we?(S.el=we.el,S.component=we.component,S.transition&&uu(S,S.transition),S.shapeFlag|=512,l.delete(he),l.add(he)):(l.add(he),ue&&l.size>parseInt(ue,10)&&_(l.values().next().value)),S.shapeFlag|=256,a=S,iu(x.type)?x:S}}},du=Ef;function $s(e,n){return oe(e)?e.some(s=>$s(s,n)):Fe(e)?e.split(",").includes(n):e.test?e.test(n):!1}function Tf(e,n){fu(e,"a",n)}function Cf(e,n){fu(e,"da",n)}function fu(e,n,s=Ue){const o=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Go(n,o,s),s){let r=s.parent;for(;r&&r.parent;)pu(r.parent.vnode)&&Of(o,n,s,r),r=r.parent}}function Of(e,n,s,o){const r=Go(n,e,o,!0);Xo(()=>{$l(o[n],r)},s)}function ur(e){let n=e.shapeFlag;n&256&&(n-=256),n&512&&(n-=512),e.shapeFlag=n}function pr(e){return e.shapeFlag&128?e.ssContent:e}function Go(e,n,s=Ue,o=!1){if(s){const r=s[e]||(s[e]=[]),l=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;us(),ls(s);const i=Et(n,s,e,a);return Cn(),ps(),i});return o?r.unshift(l):r.push(l),l}}const Gt=e=>(n,s=Ue)=>(!Us||e==="sp")&&Go(e,(...o)=>n(...o),s),Df=Gt("bm"),fs=Gt("m"),If=Gt("bu"),Nl=Gt("u"),Zo=Gt("bum"),Xo=Gt("um"),Pf=Gt("sp"),Mf=Gt("rtg"),Rf=Gt("rtc");function Ff(e,n=Ue){Go("ec",e,n)}function Qo(e,n){const s=Ze;if(s===null)return e;const o=tr(s)||s.proxy,r=e.dirs||(e.dirs=[]);for(let l=0;l<n.length;l++){let[a,i,c,u=Te]=n[l];ie(a)&&(a={mounted:a,updated:a}),a.deep&&$n(i),r.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:u})}return e}function yn(e,n,s,o){const r=e.dirs,l=n&&n.dirs;for(let a=0;a<r.length;a++){const i=r[a];l&&(i.oldValue=l[a].value);let c=i.dir[o];c&&(us(),Et(c,s,8,[e.el,i,e,n]),ps())}}const hu="components",Lf="directives";function So(e,n){return yu(hu,e,!0,n)||e}const Hf=Symbol();function Pa(e){return yu(Lf,e)}function yu(e,n,s=!0,o=!1){const r=Ze||Ue;if(r){const l=r.type;if(e===hu){const i=zr(l,!1);if(i&&(i===n||i===Ht(n)||i===Vo(Ht(n))))return l}const a=Ma(r[e]||l[e],n)||Ma(r.appContext[e],n);return!a&&o?l:a}}function Ma(e,n){return e&&(e[n]||e[Ht(n)]||e[Vo(Ht(n))])}function eo(e,n,s,o){let r;const l=s&&s[o];if(oe(e)||Fe(e)){r=new Array(e.length);for(let a=0,i=e.length;a<i;a++)r[a]=n(e[a],a,void 0,l&&l[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=n(a+1,a,void 0,l&&l[a])}else if(Pe(e))if(e[Symbol.iterator])r=Array.from(e,(a,i)=>n(a,i,void 0,l&&l[i]));else{const a=Object.keys(e);r=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];r[i]=n(e[u],u,i,l&&l[i])}}else r=[];return s&&(s[o]=r),r}function gt(e,n,s={},o,r){if(Ze.isCE||Ze.parent&&ns(Ze.parent)&&Ze.parent.isCE)return V("slot",n==="default"?null:{name:n},o&&o());let l=e[n];l&&l._c&&(l._d=!1),k();const a=l&&mu(l(s)),i=H(Se,{key:s.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),l&&l._c&&(l._d=!0),i}function mu(e){return e.some(n=>In(n)?!(n.type===fn||n.type===Se&&!mu(n.children)):!0)?e:null}const Nr=e=>e?$u(e)?tr(e)||e.proxy:Nr(e.parent):null,Eo=rt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Nr(e.parent),$root:e=>Nr(e.root),$emit:e=>e.emit,$options:e=>jl(e),$forceUpdate:e=>e.f||(e.f=()=>Hl(e.update)),$nextTick:e=>e.n||(e.n=Ge.bind(e.proxy)),$watch:e=>Sf.bind(e)}),qf={get({_:e},n){const{ctx:s,setupState:o,data:r,props:l,accessCache:a,type:i,appContext:c}=e;let u;if(n[0]!=="$"){const m=a[n];if(m!==void 0)switch(m){case 1:return o[n];case 2:return r[n];case 4:return s[n];case 3:return l[n]}else{if(o!==Te&&ve(o,n))return a[n]=1,o[n];if(r!==Te&&ve(r,n))return a[n]=2,r[n];if((u=e.propsOptions[0])&&ve(u,n))return a[n]=3,l[n];if(s!==Te&&ve(s,n))return a[n]=4,s[n];jr&&(a[n]=0)}}const d=Eo[n];let f,h;if(d)return n==="$attrs"&&mt(e,"get",n),d(e);if((f=i.__cssModules)&&(f=f[n]))return f;if(s!==Te&&ve(s,n))return a[n]=4,s[n];if(h=c.config.globalProperties,ve(h,n))return h[n]},set({_:e},n,s){const{data:o,setupState:r,ctx:l}=e;return r!==Te&&ve(r,n)?(r[n]=s,!0):o!==Te&&ve(o,n)?(o[n]=s,!0):ve(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(l[n]=s,!0)},has({_:{data:e,setupState:n,accessCache:s,ctx:o,appContext:r,propsOptions:l}},a){let i;return!!s[a]||e!==Te&&ve(e,a)||n!==Te&&ve(n,a)||(i=l[0])&&ve(i,a)||ve(o,a)||ve(Eo,a)||ve(r.config.globalProperties,a)},defineProperty(e,n,s){return s.get!=null?e._.accessCache[n]=0:ve(s,"value")&&this.set(e,n,s.value,null),Reflect.defineProperty(e,n,s)}};let jr=!0;function Nf(e){const n=jl(e),s=e.proxy,o=e.ctx;jr=!1,n.beforeCreate&&Ra(n.beforeCreate,e,"bc");const{data:r,computed:l,methods:a,watch:i,provide:c,inject:u,created:d,beforeMount:f,mounted:h,beforeUpdate:m,updated:y,activated:_,deactivated:w,beforeDestroy:b,beforeUnmount:A,destroyed:x,unmounted:S,render:P,renderTracked:R,renderTriggered:N,errorCaptured:Q,serverPrefetch:ue,expose:he,inheritAttrs:we,components:Ve,directives:Ne,filters:Me}=n;if(u&&jf(u,o,null,e.appContext.config.unwrapInjectedRef),a)for(const Y in a){const se=a[Y];ie(se)&&(o[Y]=se.bind(s))}if(r){const Y=r.call(s,s);Pe(Y)&&(e.data=Ie(Y))}if(jr=!0,l)for(const Y in l){const se=l[Y],ye=ie(se)?se.bind(s,s):ie(se.get)?se.get.bind(s,s):St,Ae=!ie(se)&&ie(se.set)?se.set.bind(s):St,tt=E({get:ye,set:Ae});Object.defineProperty(o,Y,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Le=>tt.value=Le})}if(i)for(const Y in i)gu(i[Y],o,s,Y);if(c){const Y=ie(c)?c.call(s):c;Reflect.ownKeys(Y).forEach(se=>{ft(se,Y[se])})}d&&Ra(d,e,"c");function De(Y,se){oe(se)?se.forEach(ye=>Y(ye.bind(s))):se&&Y(se.bind(s))}if(De(Df,f),De(fs,h),De(If,m),De(Nl,y),De(Tf,_),De(Cf,w),De(Ff,Q),De(Rf,R),De(Mf,N),De(Zo,A),De(Xo,S),De(Pf,ue),oe(he))if(he.length){const Y=e.exposed||(e.exposed={});he.forEach(se=>{Object.defineProperty(Y,se,{get:()=>s[se],set:ye=>s[se]=ye})})}else e.exposed||(e.exposed={});P&&e.render===St&&(e.render=P),we!=null&&(e.inheritAttrs=we),Ve&&(e.components=Ve),Ne&&(e.directives=Ne)}function jf(e,n,s=St,o=!1){oe(e)&&(e=Wr(e));for(const r in e){const l=e[r];let a;Pe(l)?"default"in l?a=D(l.from||r,l.default,!0):a=D(l.from||r):a=D(l),xe(a)&&o?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):n[r]=a}}function Ra(e,n,s){Et(oe(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,s)}function gu(e,n,s,o){const r=o.includes(".")?cu(s,o):()=>s[o];if(Fe(e)){const l=n[e];ie(l)&&de(r,l)}else if(ie(e))de(r,e.bind(s));else if(Pe(e))if(oe(e))e.forEach(l=>gu(l,n,s,o));else{const l=ie(e.handler)?e.handler.bind(s):n[e.handler];ie(l)&&de(r,l,e)}}function jl(e){const n=e.type,{mixins:s,extends:o}=n,{mixins:r,optionsCache:l,config:{optionMergeStrategies:a}}=e.appContext,i=l.get(n);let c;return i?c=i:!r.length&&!s&&!o?c=n:(c={},r.length&&r.forEach(u=>To(c,u,a,!0)),To(c,n,a)),Pe(n)&&l.set(n,c),c}function To(e,n,s,o=!1){const{mixins:r,extends:l}=n;l&&To(e,l,s,!0),r&&r.forEach(a=>To(e,a,s,!0));for(const a in n)if(!(o&&a==="expose")){const i=Wf[a]||s&&s[a];e[a]=i?i(e[a],n[a]):n[a]}return e}const Wf={data:Fa,props:_n,emits:_n,methods:_n,computed:_n,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:_n,directives:_n,watch:Uf,provide:Fa,inject:Vf};function Fa(e,n){return n?e?function(){return rt(ie(e)?e.call(this,this):e,ie(n)?n.call(this,this):n)}:n:e}function Vf(e,n){return _n(Wr(e),Wr(n))}function Wr(e){if(oe(e)){const n={};for(let s=0;s<e.length;s++)n[e[s]]=e[s];return n}return e}function nt(e,n){return e?[...new Set([].concat(e,n))]:n}function _n(e,n){return e?rt(rt(Object.create(null),e),n):n}function Uf(e,n){if(!e)return n;if(!n)return e;const s=rt(Object.create(null),e);for(const o in n)s[o]=nt(e[o],n[o]);return s}function Kf(e,n,s,o=!1){const r={},l={};xo(l,er,1),e.propsDefaults=Object.create(null),vu(e,n,r,l);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);s?e.props=o?r:lf(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function zf(e,n,s,o){const{props:r,attrs:l,vnode:{patchFlag:a}}=e,i=Be(r),[c]=e.propsOptions;let u=!1;if((o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let h=d[f];if(Jo(e.emitsOptions,h))continue;const m=n[h];if(c)if(ve(l,h))m!==l[h]&&(l[h]=m,u=!0);else{const y=Ht(h);r[y]=Vr(c,i,y,m,e,!1)}else m!==l[h]&&(l[h]=m,u=!0)}}}else{vu(e,n,r,l)&&(u=!0);let d;for(const f in i)(!n||!ve(n,f)&&((d=Rn(f))===f||!ve(n,d)))&&(c?s&&(s[f]!==void 0||s[d]!==void 0)&&(r[f]=Vr(c,i,f,void 0,e,!0)):delete r[f]);if(l!==i)for(const f in l)(!n||!ve(n,f)&&!0)&&(delete l[f],u=!0)}u&&Yt(e,"set","$attrs")}function vu(e,n,s,o){const[r,l]=e.propsOptions;let a=!1,i;if(n)for(let c in n){if(go(c))continue;const u=n[c];let d;r&&ve(r,d=Ht(c))?!l||!l.includes(d)?s[d]=u:(i||(i={}))[d]=u:Jo(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(l){const c=Be(s),u=i||Te;for(let d=0;d<l.length;d++){const f=l[d];s[f]=Vr(r,c,f,u[f],e,!ve(u,f))}}return a}function Vr(e,n,s,o,r,l){const a=e[s];if(a!=null){const i=ve(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&ie(c)){const{propsDefaults:u}=r;s in u?o=u[s]:(ls(r),o=u[s]=c.call(null,n),Cn())}else o=c}a[0]&&(l&&!i?o=!1:a[1]&&(o===""||o===Rn(s))&&(o=!0))}return o}function _u(e,n,s=!1){const o=n.propsCache,r=o.get(e);if(r)return r;const l=e.props,a={},i=[];let c=!1;if(!ie(e)){const d=f=>{c=!0;const[h,m]=_u(f,n,!0);rt(a,h),m&&i.push(...m)};!s&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!c)return Pe(e)&&o.set(e,Zn),Zn;if(oe(l))for(let d=0;d<l.length;d++){const f=Ht(l[d]);La(f)&&(a[f]=Te)}else if(l)for(const d in l){const f=Ht(d);if(La(f)){const h=l[d],m=a[f]=oe(h)||ie(h)?{type:h}:h;if(m){const y=Na(Boolean,m.type),_=Na(String,m.type);m[0]=y>-1,m[1]=_<0||y<_,(y>-1||ve(m,"default"))&&i.push(f)}}}const u=[a,i];return Pe(e)&&o.set(e,u),u}function La(e){return e[0]!=="$"}function Ha(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function qa(e,n){return Ha(e)===Ha(n)}function Na(e,n){return oe(n)?n.findIndex(s=>qa(s,e)):ie(n)&&qa(n,e)?0:-1}const wu=e=>e[0]==="_"||e==="$stable",Wl=e=>oe(e)?e.map(Pt):[Pt(e)],Jf=(e,n,s)=>{if(n._n)return n;const o=q((...r)=>Wl(n(...r)),s);return o._c=!1,o},bu=(e,n,s)=>{const o=e._ctx;for(const r in e){if(wu(r))continue;const l=e[r];if(ie(l))n[r]=Jf(r,l,o);else if(l!=null){const a=Wl(l);n[r]=()=>a}}},ku=(e,n)=>{const s=Wl(n);e.slots.default=()=>s},Yf=(e,n)=>{if(e.vnode.shapeFlag&32){const s=n._;s?(e.slots=Be(n),xo(n,"_",s)):bu(n,e.slots={})}else e.slots={},n&&ku(e,n);xo(e.slots,er,1)},Gf=(e,n,s)=>{const{vnode:o,slots:r}=e;let l=!0,a=Te;if(o.shapeFlag&32){const i=n._;i?s&&i===1?l=!1:(rt(r,n),!s&&i===1&&delete r._):(l=!n.$stable,bu(n,r)),a=n}else n&&(ku(e,n),a={default:1});if(l)for(const i in r)!wu(i)&&!(i in a)&&delete r[i]};function Bu(){return{app:null,config:{isNativeTag:$d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zf=0;function Xf(e,n){return function(o,r=null){ie(o)||(o=Object.assign({},o)),r!=null&&!Pe(r)&&(r=null);const l=Bu(),a=new Set;let i=!1;const c=l.app={_uid:Zf++,_component:o,_props:r,_container:null,_context:l,_instance:null,version:gh,get config(){return l.config},set config(u){},use(u,...d){return a.has(u)||(u&&ie(u.install)?(a.add(u),u.install(c,...d)):ie(u)&&(a.add(u),u(c,...d))),c},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),c},component(u,d){return d?(l.components[u]=d,c):l.components[u]},directive(u,d){return d?(l.directives[u]=d,c):l.directives[u]},mount(u,d,f){if(!i){const h=V(o,r);return h.appContext=l,d&&n?n(h,u):e(h,u,f),i=!0,c._container=u,u.__vue_app__=c,tr(h.component)||h.component.proxy}},unmount(){i&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return l.provides[u]=d,c}};return c}}function Ur(e,n,s,o,r=!1){if(oe(e)){e.forEach((h,m)=>Ur(h,n&&(oe(n)?n[m]:n),s,o,r));return}if(ns(o)&&!r)return;const l=o.shapeFlag&4?tr(o.component)||o.component.proxy:o.el,a=r?null:l,{i,r:c}=e,u=n&&n.r,d=i.refs===Te?i.refs={}:i.refs,f=i.setupState;if(u!=null&&u!==c&&(Fe(u)?(d[u]=null,ve(f,u)&&(f[u]=null)):xe(u)&&(u.value=null)),ie(c))ln(c,i,12,[a,d]);else{const h=Fe(c),m=xe(c);if(h||m){const y=()=>{if(e.f){const _=h?ve(f,c)?f[c]:d[c]:c.value;r?oe(_)&&$l(_,l):oe(_)?_.includes(l)||_.push(l):h?(d[c]=[l],ve(f,c)&&(f[c]=d[c])):(c.value=[l],e.k&&(d[e.k]=c.value))}else h?(d[c]=a,ve(f,c)&&(f[c]=a)):m&&(c.value=a,e.k&&(d[e.k]=a))};a?(y.id=-1,ze(y,s)):y()}}}const ze=$f;function Qf(e){return eh(e)}function eh(e,n){const s=Dd();s.__VUE__=!0;const{insert:o,remove:r,patchProp:l,createElement:a,createText:i,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:h,setScopeId:m=St,insertStaticContent:y}=e,_=(g,v,$,T=null,O=null,L=null,J=!1,F=null,j=!!v.dynamicChildren)=>{if(g===v)return;g&&!gs(g,v)&&(T=K(g),Le(g,O,L,!0),g=null),v.patchFlag===-2&&(j=!1,v.dynamicChildren=null);const{type:I,ref:te,shapeFlag:G}=v;switch(I){case Ul:w(g,v,$,T);break;case fn:b(g,v,$,T);break;case dr:g==null&&A(v,$,T,J);break;case Se:Ve(g,v,$,T,O,L,J,F,j);break;default:G&1?P(g,v,$,T,O,L,J,F,j):G&6?Ne(g,v,$,T,O,L,J,F,j):(G&64||G&128)&&I.process(g,v,$,T,O,L,J,F,j,me)}te!=null&&O&&Ur(te,g&&g.ref,L,v||g,!v)},w=(g,v,$,T)=>{if(g==null)o(v.el=i(v.children),$,T);else{const O=v.el=g.el;v.children!==g.children&&u(O,v.children)}},b=(g,v,$,T)=>{g==null?o(v.el=c(v.children||""),$,T):v.el=g.el},A=(g,v,$,T)=>{[g.el,g.anchor]=y(g.children,v,$,T,g.el,g.anchor)},x=({el:g,anchor:v},$,T)=>{let O;for(;g&&g!==v;)O=h(g),o(g,$,T),g=O;o(v,$,T)},S=({el:g,anchor:v})=>{let $;for(;g&&g!==v;)$=h(g),r(g),g=$;r(v)},P=(g,v,$,T,O,L,J,F,j)=>{J=J||v.type==="svg",g==null?R(v,$,T,O,L,J,F,j):ue(g,v,O,L,J,F,j)},R=(g,v,$,T,O,L,J,F)=>{let j,I;const{type:te,props:G,shapeFlag:ne,transition:re,dirs:ge}=g;if(j=g.el=a(g.type,L,G&&G.is,G),ne&8?d(j,g.children):ne&16&&Q(g.children,j,null,T,O,L&&te!=="foreignObject",J,F),ge&&yn(g,null,T,"created"),G){for(const Ee in G)Ee!=="value"&&!go(Ee)&&l(j,Ee,null,G[Ee],L,g.children,T,O,z);"value"in G&&l(j,"value",null,G.value),(I=G.onVnodeBeforeMount)&&vt(I,T,g)}N(j,g,g.scopeId,J,T),ge&&yn(g,null,T,"beforeMount");const Ce=(!O||O&&!O.pendingBranch)&&re&&!re.persisted;Ce&&re.beforeEnter(j),o(j,v,$),((I=G&&G.onVnodeMounted)||Ce||ge)&&ze(()=>{I&&vt(I,T,g),Ce&&re.enter(j),ge&&yn(g,null,T,"mounted")},O)},N=(g,v,$,T,O)=>{if($&&m(g,$),T)for(let L=0;L<T.length;L++)m(g,T[L]);if(O){let L=O.subTree;if(v===L){const J=O.vnode;N(g,J,J.scopeId,J.slotScopeIds,O.parent)}}},Q=(g,v,$,T,O,L,J,F,j=0)=>{for(let I=j;I<g.length;I++){const te=g[I]=F?nn(g[I]):Pt(g[I]);_(null,te,v,$,T,O,L,J,F)}},ue=(g,v,$,T,O,L,J)=>{const F=v.el=g.el;let{patchFlag:j,dynamicChildren:I,dirs:te}=v;j|=g.patchFlag&16;const G=g.props||Te,ne=v.props||Te;let re;$&&mn($,!1),(re=ne.onVnodeBeforeUpdate)&&vt(re,$,v,g),te&&yn(v,g,$,"beforeUpdate"),$&&mn($,!0);const ge=O&&v.type!=="foreignObject";if(I?he(g.dynamicChildren,I,F,$,T,ge,L):J||se(g,v,F,null,$,T,ge,L,!1),j>0){if(j&16)we(F,v,G,ne,$,T,O);else if(j&2&&G.class!==ne.class&&l(F,"class",null,ne.class,O),j&4&&l(F,"style",G.style,ne.style,O),j&8){const Ce=v.dynamicProps;for(let Ee=0;Ee<Ce.length;Ee++){const He=Ce[Ee],bt=G[He],Wn=ne[He];(Wn!==bt||He==="value")&&l(F,He,bt,Wn,O,g.children,$,T,z)}}j&1&&g.children!==v.children&&d(F,v.children)}else!J&&I==null&&we(F,v,G,ne,$,T,O);((re=ne.onVnodeUpdated)||te)&&ze(()=>{re&&vt(re,$,v,g),te&&yn(v,g,$,"updated")},T)},he=(g,v,$,T,O,L,J)=>{for(let F=0;F<v.length;F++){const j=g[F],I=v[F],te=j.el&&(j.type===Se||!gs(j,I)||j.shapeFlag&70)?f(j.el):$;_(j,I,te,null,T,O,L,J,!0)}},we=(g,v,$,T,O,L,J)=>{if($!==T){if($!==Te)for(const F in $)!go(F)&&!(F in T)&&l(g,F,$[F],null,J,v.children,O,L,z);for(const F in T){if(go(F))continue;const j=T[F],I=$[F];j!==I&&F!=="value"&&l(g,F,I,j,J,v.children,O,L,z)}"value"in T&&l(g,"value",$.value,T.value)}},Ve=(g,v,$,T,O,L,J,F,j)=>{const I=v.el=g?g.el:i(""),te=v.anchor=g?g.anchor:i("");let{patchFlag:G,dynamicChildren:ne,slotScopeIds:re}=v;re&&(F=F?F.concat(re):re),g==null?(o(I,$,T),o(te,$,T),Q(v.children,$,te,O,L,J,F,j)):G>0&&G&64&&ne&&g.dynamicChildren?(he(g.dynamicChildren,ne,$,O,L,J,F),(v.key!=null||O&&v===O.subTree)&&Vl(g,v,!0)):se(g,v,$,te,O,L,J,F,j)},Ne=(g,v,$,T,O,L,J,F,j)=>{v.slotScopeIds=F,g==null?v.shapeFlag&512?O.ctx.activate(v,$,T,J,j):Me(v,$,T,O,L,J,j):Oe(g,v,j)},Me=(g,v,$,T,O,L,J)=>{const F=g.component=uh(g,T,O);if(pu(g)&&(F.ctx.renderer=me),ph(F),F.asyncDep){if(O&&O.registerDep(F,De),!g.el){const j=F.subTree=V(fn);b(null,j,v,$)}return}De(F,g,v,$,O,L,J)},Oe=(g,v,$)=>{const T=v.component=g.component;if(xf(g,v,$))if(T.asyncDep&&!T.asyncResolved){Y(T,v,$);return}else T.next=v,vf(T.update),T.update();else v.el=g.el,T.vnode=v},De=(g,v,$,T,O,L,J)=>{const F=()=>{if(g.isMounted){let{next:te,bu:G,u:ne,parent:re,vnode:ge}=g,Ce=te,Ee;mn(g,!1),te?(te.el=ge.el,Y(g,te,J)):te=ge,G&&Qn(G),(Ee=te.props&&te.props.onVnodeBeforeUpdate)&&vt(Ee,re,te,ge),mn(g,!0);const He=cr(g),bt=g.subTree;g.subTree=He,_(bt,He,f(bt.el),K(bt),g,O,L),te.el=He.el,Ce===null&&Af(g,He.el),ne&&ze(ne,O),(Ee=te.props&&te.props.onVnodeUpdated)&&ze(()=>vt(Ee,re,te,ge),O)}else{let te;const{el:G,props:ne}=v,{bm:re,m:ge,parent:Ce}=g,Ee=ns(v);if(mn(g,!1),re&&Qn(re),!Ee&&(te=ne&&ne.onVnodeBeforeMount)&&vt(te,Ce,v),mn(g,!0),G&&le){const He=()=>{g.subTree=cr(g),le(G,g.subTree,g,O,null)};Ee?v.type.__asyncLoader().then(()=>!g.isUnmounted&&He()):He()}else{const He=g.subTree=cr(g);_(null,He,$,T,g,O,L),v.el=He.el}if(ge&&ze(ge,O),!Ee&&(te=ne&&ne.onVnodeMounted)){const He=v;ze(()=>vt(te,Ce,He),O)}(v.shapeFlag&256||Ce&&ns(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&g.a&&ze(g.a,O),g.isMounted=!0,v=$=T=null}},j=g.effect=new Cl(F,()=>Hl(I),g.scope),I=g.update=()=>j.run();I.id=g.uid,mn(g,!0),I()},Y=(g,v,$)=>{v.component=g;const T=g.vnode.props;g.vnode=v,g.next=null,zf(g,v.props,T,$),Gf(g,v.children,$),us(),Oa(),ps()},se=(g,v,$,T,O,L,J,F,j=!1)=>{const I=g&&g.children,te=g?g.shapeFlag:0,G=v.children,{patchFlag:ne,shapeFlag:re}=v;if(ne>0){if(ne&128){Ae(I,G,$,T,O,L,J,F,j);return}else if(ne&256){ye(I,G,$,T,O,L,J,F,j);return}}re&8?(te&16&&z(I,O,L),G!==I&&d($,G)):te&16?re&16?Ae(I,G,$,T,O,L,J,F,j):z(I,O,L,!0):(te&8&&d($,""),re&16&&Q(G,$,T,O,L,J,F,j))},ye=(g,v,$,T,O,L,J,F,j)=>{g=g||Zn,v=v||Zn;const I=g.length,te=v.length,G=Math.min(I,te);let ne;for(ne=0;ne<G;ne++){const re=v[ne]=j?nn(v[ne]):Pt(v[ne]);_(g[ne],re,$,null,O,L,J,F,j)}I>te?z(g,O,L,!0,!1,G):Q(v,$,T,O,L,J,F,j,G)},Ae=(g,v,$,T,O,L,J,F,j)=>{let I=0;const te=v.length;let G=g.length-1,ne=te-1;for(;I<=G&&I<=ne;){const re=g[I],ge=v[I]=j?nn(v[I]):Pt(v[I]);if(gs(re,ge))_(re,ge,$,null,O,L,J,F,j);else break;I++}for(;I<=G&&I<=ne;){const re=g[G],ge=v[ne]=j?nn(v[ne]):Pt(v[ne]);if(gs(re,ge))_(re,ge,$,null,O,L,J,F,j);else break;G--,ne--}if(I>G){if(I<=ne){const re=ne+1,ge=re<te?v[re].el:T;for(;I<=ne;)_(null,v[I]=j?nn(v[I]):Pt(v[I]),$,ge,O,L,J,F,j),I++}}else if(I>ne)for(;I<=G;)Le(g[I],O,L,!0),I++;else{const re=I,ge=I,Ce=new Map;for(I=ge;I<=ne;I++){const it=v[I]=j?nn(v[I]):Pt(v[I]);it.key!=null&&Ce.set(it.key,I)}let Ee,He=0;const bt=ne-ge+1;let Wn=!1,wa=0;const ms=new Array(bt);for(I=0;I<bt;I++)ms[I]=0;for(I=re;I<=G;I++){const it=g[I];if(He>=bt){Le(it,O,L,!0);continue}let It;if(it.key!=null)It=Ce.get(it.key);else for(Ee=ge;Ee<=ne;Ee++)if(ms[Ee-ge]===0&&gs(it,v[Ee])){It=Ee;break}It===void 0?Le(it,O,L,!0):(ms[It-ge]=I+1,It>=wa?wa=It:Wn=!0,_(it,v[It],$,null,O,L,J,F,j),He++)}const ba=Wn?th(ms):Zn;for(Ee=ba.length-1,I=bt-1;I>=0;I--){const it=ge+I,It=v[it],ka=it+1<te?v[it+1].el:T;ms[I]===0?_(null,It,$,ka,O,L,J,F,j):Wn&&(Ee<0||I!==ba[Ee]?tt(It,$,ka,2):Ee--)}}},tt=(g,v,$,T,O=null)=>{const{el:L,type:J,transition:F,children:j,shapeFlag:I}=g;if(I&6){tt(g.component.subTree,v,$,T);return}if(I&128){g.suspense.move(v,$,T);return}if(I&64){J.move(g,v,$,me);return}if(J===Se){o(L,v,$);for(let G=0;G<j.length;G++)tt(j[G],v,$,T);o(g.anchor,v,$);return}if(J===dr){x(g,v,$);return}if(T!==2&&I&1&&F)if(T===0)F.beforeEnter(L),o(L,v,$),ze(()=>F.enter(L),O);else{const{leave:G,delayLeave:ne,afterLeave:re}=F,ge=()=>o(L,v,$),Ce=()=>{G(L,()=>{ge(),re&&re()})};ne?ne(L,ge,Ce):Ce()}else o(L,v,$)},Le=(g,v,$,T=!1,O=!1)=>{const{type:L,props:J,ref:F,children:j,dynamicChildren:I,shapeFlag:te,patchFlag:G,dirs:ne}=g;if(F!=null&&Ur(F,null,$,g,!0),te&256){v.ctx.deactivate(g);return}const re=te&1&&ne,ge=!ns(g);let Ce;if(ge&&(Ce=J&&J.onVnodeBeforeUnmount)&&vt(Ce,v,g),te&6)C(g.component,$,T);else{if(te&128){g.suspense.unmount($,T);return}re&&yn(g,null,v,"beforeUnmount"),te&64?g.type.remove(g,v,$,O,me,T):I&&(L!==Se||G>0&&G&64)?z(I,v,$,!1,!0):(L===Se&&G&384||!O&&te&16)&&z(j,v,$),T&&Qt(g)}(ge&&(Ce=J&&J.onVnodeUnmounted)||re)&&ze(()=>{Ce&&vt(Ce,v,g),re&&yn(g,null,v,"unmounted")},$)},Qt=g=>{const{type:v,el:$,anchor:T,transition:O}=g;if(v===Se){jn($,T);return}if(v===dr){S(g);return}const L=()=>{r($),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(g.shapeFlag&1&&O&&!O.persisted){const{leave:J,delayLeave:F}=O,j=()=>J($,L);F?F(g.el,L,j):j()}else L()},jn=(g,v)=>{let $;for(;g!==v;)$=h(g),r(g),g=$;r(v)},C=(g,v,$)=>{const{bum:T,scope:O,update:L,subTree:J,um:F}=g;T&&Qn(T),O.stop(),L&&(L.active=!1,Le(J,g,v,$)),F&&ze(F,v),ze(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},z=(g,v,$,T=!1,O=!1,L=0)=>{for(let J=L;J<g.length;J++)Le(g[J],v,$,T,O)},K=g=>g.shapeFlag&6?K(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el),Z=(g,v,$)=>{g==null?v._vnode&&Le(v._vnode,null,null,!0):_(v._vnode||null,g,v,null,null,null,$),Oa(),ru(),v._vnode=g},me={p:_,um:Le,m:tt,r:Qt,mt:Me,mc:Q,pc:se,pbc:he,n:K,o:e};let be,le;return n&&([be,le]=n(me)),{render:Z,hydrate:be,createApp:Xf(Z,be)}}function mn({effect:e,update:n},s){e.allowRecurse=n.allowRecurse=s}function Vl(e,n,s=!1){const o=e.children,r=n.children;if(oe(o)&&oe(r))for(let l=0;l<o.length;l++){const a=o[l];let i=r[l];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[l]=nn(r[l]),i.el=a.el),s||Vl(a,i))}}function th(e){const n=e.slice(),s=[0];let o,r,l,a,i;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(r=s[s.length-1],e[r]<u){n[o]=r,s.push(o);continue}for(l=0,a=s.length-1;l<a;)i=l+a>>1,e[s[i]]<u?l=i+1:a=i;u<e[s[l]]&&(l>0&&(n[o]=s[l-1]),s[l]=o)}}for(l=s.length,a=s[l-1];l-- >0;)s[l]=a,a=n[a];return s}const nh=e=>e.__isTeleport,Es=e=>e&&(e.disabled||e.disabled===""),ja=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Kr=(e,n)=>{const s=e&&e.to;return Fe(s)?n?n(s):null:s},sh={__isTeleport:!0,process(e,n,s,o,r,l,a,i,c,u){const{mc:d,pc:f,pbc:h,o:{insert:m,querySelector:y,createText:_,createComment:w}}=u,b=Es(n.props);let{shapeFlag:A,children:x,dynamicChildren:S}=n;if(e==null){const P=n.el=_(""),R=n.anchor=_("");m(P,s,o),m(R,s,o);const N=n.target=Kr(n.props,y),Q=n.targetAnchor=_("");N&&(m(Q,N),a=a||ja(N));const ue=(he,we)=>{A&16&&d(x,he,we,r,l,a,i,c)};b?ue(s,R):N&&ue(N,Q)}else{n.el=e.el;const P=n.anchor=e.anchor,R=n.target=e.target,N=n.targetAnchor=e.targetAnchor,Q=Es(e.props),ue=Q?s:R,he=Q?P:N;if(a=a||ja(R),S?(h(e.dynamicChildren,S,ue,r,l,a,i),Vl(e,n,!0)):c||f(e,n,ue,he,r,l,a,i,!1),b)Q||po(n,s,P,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const we=n.target=Kr(n.props,y);we&&po(n,we,null,u,0)}else Q&&po(n,R,N,u,1)}},remove(e,n,s,o,{um:r,o:{remove:l}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:d,target:f,props:h}=e;if(f&&l(d),(a||!Es(h))&&(l(u),i&16))for(let m=0;m<c.length;m++){const y=c[m];r(y,n,s,!0,!!y.dynamicChildren)}},move:po,hydrate:oh};function po(e,n,s,{o:{insert:o},m:r},l=2){l===0&&o(e.targetAnchor,n,s);const{el:a,anchor:i,shapeFlag:c,children:u,props:d}=e,f=l===2;if(f&&o(a,n,s),(!f||Es(d))&&c&16)for(let h=0;h<u.length;h++)r(u[h],n,s,2);f&&o(i,n,s)}function oh(e,n,s,o,r,l,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const d=n.target=Kr(n.props,c);if(d){const f=d._lpa||d.firstChild;if(n.shapeFlag&16)if(Es(n.props))n.anchor=u(a(e),n,i(e),s,o,r,l),n.targetAnchor=f;else{n.anchor=a(e);let h=f;for(;h;)if(h=a(h),h&&h.nodeType===8&&h.data==="teleport anchor"){n.targetAnchor=h,d._lpa=n.targetAnchor&&a(n.targetAnchor);break}u(f,n,d,s,o,r,l)}}return n.anchor&&a(n.anchor)}const rh=sh,Se=Symbol(void 0),Ul=Symbol(void 0),fn=Symbol(void 0),dr=Symbol(void 0),Ts=[];let At=null;function k(e=!1){Ts.push(At=e?null:[])}function lh(){Ts.pop(),At=Ts[Ts.length-1]||null}let Vs=1;function Wa(e){Vs+=e}function xu(e){return e.dynamicChildren=Vs>0?At||Zn:null,lh(),Vs>0&&At&&At.push(e),e}function U(e,n,s,o,r,l){return xu(t(e,n,s,o,r,l,!0))}function H(e,n,s,o,r){return xu(V(e,n,s,o,r,!0))}function In(e){return e?e.__v_isVNode===!0:!1}function gs(e,n){return e.type===n.type&&e.key===n.key}const er="__vInternal",Au=({key:e})=>e!=null?e:null,vo=({ref:e,ref_key:n,ref_for:s})=>e!=null?Fe(e)||xe(e)||ie(e)?{i:Ze,r:e,k:n,f:!!s}:e:null;function t(e,n=null,s=null,o=0,r=null,l=e===Se?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Au(n),ref:n&&vo(n),scopeId:Yo,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null};return i?(Kl(c,s),l&128&&e.normalize(c)):s&&(c.shapeFlag|=Fe(s)?8:16),Vs>0&&!a&&At&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&At.push(c),c}const V=ah;function ah(e,n=null,s=null,o=0,r=null,l=!1){if((!e||e===Hf)&&(e=fn),In(e)){const i=Pn(e,n,!0);return s&&Kl(i,s),Vs>0&&!l&&At&&(i.shapeFlag&6?At[At.indexOf(e)]=i:At.push(i)),i.patchFlag|=-2,i}if(hh(e)&&(e=e.__vccOpts),n){n=X(n);let{class:i,style:c}=n;i&&!Fe(i)&&(n.class=Re(i)),Pe(c)&&(Xc(c)&&!oe(c)&&(c=rt({},c)),n.style=Ke(c))}const a=Fe(e)?1:iu(e)?128:nh(e)?64:Pe(e)?4:ie(e)?2:0;return t(e,n,s,o,r,a,l,!0)}function X(e){return e?Xc(e)||er in e?rt({},e):e:null}function Pn(e,n,s=!1){const{props:o,ref:r,patchFlag:l,children:a}=e,i=n?at(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Au(i),ref:n&&n.ref?s&&r?oe(r)?r.concat(vo(n)):[r,vo(n)]:vo(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Se?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pn(e.ssContent),ssFallback:e.ssFallback&&Pn(e.ssFallback),el:e.el,anchor:e.anchor}}function p(e=" ",n=0){return V(Ul,null,e,n)}function fe(e="",n=!1){return n?(k(),H(fn,null,e)):V(fn,null,e)}function Pt(e){return e==null||typeof e=="boolean"?V(fn):oe(e)?V(Se,null,e.slice()):typeof e=="object"?nn(e):V(Ul,null,String(e))}function nn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pn(e)}function Kl(e,n){let s=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(oe(n))s=16;else if(typeof n=="object")if(o&65){const r=n.default;r&&(r._c&&(r._d=!1),Kl(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=n._;!r&&!(er in n)?n._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ie(n)?(n={default:n,_ctx:Ze},s=32):(n=String(n),o&64?(s=16,n=[p(n)]):s=8);e.children=n,e.shapeFlag|=s}function at(...e){const n={};for(let s=0;s<e.length;s++){const o=e[s];for(const r in o)if(r==="class")n.class!==o.class&&(n.class=Re([n.class,o.class]));else if(r==="style")n.style=Ke([n.style,o.style]);else if(No(r)){const l=n[r],a=o[r];a&&l!==a&&!(oe(l)&&l.includes(a))&&(n[r]=l?[].concat(l,a):a)}else r!==""&&(n[r]=o[r])}return n}function vt(e,n,s,o=null){Et(e,n,7,[s,o])}const ih=Bu();let ch=0;function uh(e,n,s){const o=e.type,r=(n?n.appContext:e.appContext)||ih,l={uid:ch++,vnode:e,type:o,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_u(o,r),emitsOptions:au(o,r),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:o.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=n?n.root:l,l.emit=bf.bind(null,l),e.ce&&e.ce(l),l}let Ue=null;const Hn=()=>Ue||Ze,ls=e=>{Ue=e,e.scope.on()},Cn=()=>{Ue&&Ue.scope.off(),Ue=null};function $u(e){return e.vnode.shapeFlag&4}let Us=!1;function ph(e,n=!1){Us=n;const{props:s,children:o}=e.vnode,r=$u(e);Kf(e,s,r,n),Yf(e,o);const l=r?dh(e,n):void 0;return Us=!1,l}function dh(e,n){const s=e.type;e.accessCache=Object.create(null),e.proxy=Ko(new Proxy(e.ctx,qf));const{setup:o}=s;if(o){const r=e.setupContext=o.length>1?Eu(e):null;ls(e),us();const l=ln(o,e,0,[e.props,r]);if(ps(),Cn(),Rc(l)){if(l.then(Cn,Cn),n)return l.then(a=>{Va(e,a,n)}).catch(a=>{zo(a,e,0)});e.asyncDep=l}else Va(e,l,n)}else Su(e,n)}function Va(e,n,s){ie(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Pe(n)&&(e.setupState=eu(n)),Su(e,s)}let Ua;function Su(e,n,s){const o=e.type;if(!e.render){if(!n&&Ua&&!o.render){const r=o.template||jl(e).template;if(r){const{isCustomElement:l,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=o,u=rt(rt({isCustomElement:l,delimiters:i},a),c);o.render=Ua(r,u)}}e.render=o.render||St}ls(e),us(),Nf(e),ps(),Cn()}function fh(e){return new Proxy(e.attrs,{get(n,s){return mt(e,"get","$attrs"),n[s]}})}function Eu(e){const n=o=>{e.exposed=o||{}};let s;return{get attrs(){return s||(s=fh(e))},slots:e.slots,emit:e.emit,expose:n}}function tr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(eu(Ko(e.exposed)),{get(n,s){if(s in n)return n[s];if(s in Eo)return Eo[s](e)}}))}function zr(e,n=!0){return ie(e)?e.displayName||e.name:e.name||n&&e.__name}function hh(e){return ie(e)&&"__vccOpts"in e}const E=(e,n)=>yf(e,n,Us);function yh(){return mh().slots}function mh(){const e=Hn();return e.setupContext||(e.setupContext=Eu(e))}function Xe(e,n,s){const o=arguments.length;return o===2?Pe(n)&&!oe(n)?In(n)?V(e,null,[n]):V(e,n):V(e,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&In(s)&&(s=[s]),V(e,n,s))}const gh="3.2.41",vh="http://www.w3.org/2000/svg",kn=typeof document<"u"?document:null,Ka=kn&&kn.createElement("template"),_h={insert:(e,n,s)=>{n.insertBefore(e,s||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,s,o)=>{const r=n?kn.createElementNS(vh,e):kn.createElement(e,s?{is:s}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>kn.createTextNode(e),createComment:e=>kn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,s,o,r,l){const a=s?s.previousSibling:n.lastChild;if(r&&(r===l||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),s),!(r===l||!(r=r.nextSibling)););else{Ka.innerHTML=o?`<svg>${e}</svg>`:e;const i=Ka.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}n.insertBefore(i,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function wh(e,n,s){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):s?e.setAttribute("class",n):e.className=n}function bh(e,n,s){const o=e.style,r=Fe(s);if(s&&!r){for(const l in s)Jr(o,l,s[l]);if(n&&!Fe(n))for(const l in n)s[l]==null&&Jr(o,l,"")}else{const l=o.display;r?n!==s&&(o.cssText=s):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=l)}}const za=/\s*!important$/;function Jr(e,n,s){if(oe(s))s.forEach(o=>Jr(e,n,o));else if(s==null&&(s=""),n.startsWith("--"))e.setProperty(n,s);else{const o=kh(e,n);za.test(s)?e.setProperty(Rn(o),s.replace(za,""),"important"):e[o]=s}}const Ja=["Webkit","Moz","ms"],fr={};function kh(e,n){const s=fr[n];if(s)return s;let o=Ht(n);if(o!=="filter"&&o in e)return fr[n]=o;o=Vo(o);for(let r=0;r<Ja.length;r++){const l=Ja[r]+o;if(l in e)return fr[n]=l}return n}const Ya="http://www.w3.org/1999/xlink";function Bh(e,n,s,o,r){if(o&&n.startsWith("xlink:"))s==null?e.removeAttributeNS(Ya,n.slice(6,n.length)):e.setAttributeNS(Ya,n,s);else{const l=wd(n);s==null||l&&!Ic(s)?e.removeAttribute(n):e.setAttribute(n,l?"":s)}}function xh(e,n,s,o,r,l,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,r,l),e[n]=s==null?"":s;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const c=s==null?"":s;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),s==null&&e.removeAttribute(n);return}let i=!1;if(s===""||s==null){const c=typeof e[n];c==="boolean"?s=Ic(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{e[n]=s}catch{}i&&e.removeAttribute(n)}function zn(e,n,s,o){e.addEventListener(n,s,o)}function Ah(e,n,s,o){e.removeEventListener(n,s,o)}function $h(e,n,s,o,r=null){const l=e._vei||(e._vei={}),a=l[n];if(o&&a)a.value=o;else{const[i,c]=Sh(n);if(o){const u=l[n]=Ch(o,r);zn(e,i,u,c)}else a&&(Ah(e,i,a,c),l[n]=void 0)}}const Ga=/(?:Once|Passive|Capture)$/;function Sh(e){let n;if(Ga.test(e)){n={};let o;for(;o=e.match(Ga);)e=e.slice(0,e.length-o[0].length),n[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Rn(e.slice(2)),n]}let hr=0;const Eh=Promise.resolve(),Th=()=>hr||(Eh.then(()=>hr=0),hr=Date.now());function Ch(e,n){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;Et(Oh(o,s.value),n,5,[o])};return s.value=e,s.attached=Th(),s}function Oh(e,n){if(oe(n)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},n.map(o=>r=>!r._stopped&&o&&o(r))}else return n}const Za=/^on[a-z]/,Dh=(e,n,s,o,r=!1,l,a,i,c)=>{n==="class"?wh(e,o,r):n==="style"?bh(e,s,o):No(n)?Al(n)||$h(e,n,s,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Ih(e,n,o,r))?xh(e,n,o,l,a,i,c):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),Bh(e,n,o,r))};function Ih(e,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&Za.test(n)&&ie(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Za.test(n)&&Fe(s)?!1:n in e}const Xa=e=>{const n=e.props["onUpdate:modelValue"]||!1;return oe(n)?s=>Qn(n,s):n};function Ph(e){e.target.composing=!0}function Qa(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Mh={created(e,{modifiers:{lazy:n,trim:s,number:o}},r){e._assign=Xa(r);const l=o||r.props&&r.props.type==="number";zn(e,n?"change":"input",a=>{if(a.target.composing)return;let i=e.value;s&&(i=i.trim()),l&&(i=Mr(i)),e._assign(i)}),s&&zn(e,"change",()=>{e.value=e.value.trim()}),n||(zn(e,"compositionstart",Ph),zn(e,"compositionend",Qa),zn(e,"change",Qa))},mounted(e,{value:n}){e.value=n==null?"":n},beforeUpdate(e,{value:n,modifiers:{lazy:s,trim:o,number:r}},l){if(e._assign=Xa(l),e.composing||document.activeElement===e&&e.type!=="range"&&(s||o&&e.value.trim()===n||(r||e.type==="number")&&Mr(e.value)===n))return;const a=n==null?"":n;e.value!==a&&(e.value=a)}},Rh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ei=(e,n)=>s=>{if(!("key"in s))return;const o=Rn(s.key);if(n.some(r=>r===o||Rh[r]===o))return e(s)},Tu={beforeMount(e,{value:n},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&n?s.beforeEnter(e):vs(e,n)},mounted(e,{value:n},{transition:s}){s&&n&&s.enter(e)},updated(e,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(e),vs(e,!0),o.enter(e)):o.leave(e,()=>{vs(e,!1)}):vs(e,n))},beforeUnmount(e,{value:n}){vs(e,n)}};function vs(e,n){e.style.display=n?e._vod:"none"}const Fh=rt({patchProp:Dh},_h);let ti;function Lh(){return ti||(ti=Qf(Fh))}const Hh=(...e)=>{const n=Lh().createApp(...e),{mount:s}=n;return n.mount=o=>{const r=qh(o);if(!r)return;const l=n._component;!ie(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.innerHTML="";const a=s(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},n};function qh(e){return Fe(e)?document.querySelector(e):e}var ni;const Ct=typeof window<"u",Nh=e=>typeof e<"u",jh=Object.prototype.toString,Co=e=>typeof e=="function",Wh=e=>typeof e=="number",Cu=e=>typeof e=="string",Yr=e=>jh.call(e)==="[object Object]",Gr=()=>+Date.now(),On=()=>{};Ct&&((ni=window==null?void 0:window.navigator)==null?void 0:ni.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Je(e){return typeof e=="function"?e():B(e)}function Vh(e,n){function s(...o){e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})}return s}const Ou=e=>e();function Uh(e=Ou){const n=W(!0);function s(){n.value=!1}function o(){n.value=!0}return{isActive:n,pause:s,resume:o,eventFilter:(...l)=>{n.value&&e(...l)}}}function Kh(e){return e}function zh(e,n){var s;if(typeof e=="number")return e+n;const o=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",r=e.slice(o.length),l=parseFloat(o)+n;return Number.isNaN(l)?e:l+r}function Jh(e,n){let s,o,r;const l=W(!0),a=()=>{l.value=!0,r()};de(e,a,{flush:"sync"});const i=Co(n)?n:n.get,c=Co(n)?void 0:n.set,u=tu((d,f)=>(o=d,r=f,{get(){return l.value&&(s=i(),l.value=!1),o(),s},set(h){c==null||c(h)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function Nt(e){return qc()?(Nc(e),!0):!1}function Yh(e){if(!xe(e))return Ie(e);const n=new Proxy({},{get(s,o,r){return B(Reflect.get(e.value,o,r))},set(s,o,r){return xe(e.value[o])&&!xe(r)?e.value[o].value=r:e.value[o]=r,!0},deleteProperty(s,o){return Reflect.deleteProperty(e.value,o)},has(s,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ie(n)}function Du(e){return typeof e=="function"?E(e):W(e)}var Gh=Object.defineProperty,Zh=Object.defineProperties,Xh=Object.getOwnPropertyDescriptors,si=Object.getOwnPropertySymbols,Qh=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable,oi=(e,n,s)=>n in e?Gh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,ty=(e,n)=>{for(var s in n||(n={}))Qh.call(n,s)&&oi(e,s,n[s]);if(si)for(var s of si(n))ey.call(n,s)&&oi(e,s,n[s]);return e},ny=(e,n)=>Zh(e,Xh(n));function sy(e){if(!xe(e))return pf(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)n[s]=tu(()=>({get(){return e.value[s]},set(o){if(Array.isArray(e.value)){const r=[...e.value];r[s]=o,e.value=r}else{const r=ny(ty({},e.value),{[s]:o});Object.setPrototypeOf(r,e.value),e.value=r}}}));return n}function zl(e,n=!0){Hn()?fs(e):n?e():Ge(e)}function oy(e){Hn()&&Xo(e)}function ry(e,n=1e3,s={}){const{immediate:o=!0,immediateCallback:r=!1}=s;let l=null;const a=W(!1);function i(){l&&(clearInterval(l),l=null)}function c(){a.value=!1,i()}function u(){B(n)<=0||(a.value=!0,r&&e(),i(),l=setInterval(e,Je(n)))}if(o&&Ct&&u(),xe(n)){const d=de(n,()=>{a.value&&Ct&&u()});Nt(d)}return Nt(c),{isActive:a,pause:c,resume:u}}function ly(e,n,s={}){const{immediate:o=!0}=s,r=W(!1);let l=null;function a(){l&&(clearTimeout(l),l=null)}function i(){r.value=!1,a()}function c(...u){a(),r.value=!0,l=setTimeout(()=>{r.value=!1,l=null,e(...u)},Je(n))}return o&&(r.value=!0,Ct&&c()),Nt(i),{isPending:r,start:c,stop:i}}function Iu(e=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,r=xe(e),l=W(e);function a(i){if(arguments.length)return l.value=i,l.value;{const c=Je(s);return l.value=l.value===c?Je(o):c,l.value}}return r?a:[l,a]}var ri=Object.getOwnPropertySymbols,ay=Object.prototype.hasOwnProperty,iy=Object.prototype.propertyIsEnumerable,cy=(e,n)=>{var s={};for(var o in e)ay.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&ri)for(var o of ri(e))n.indexOf(o)<0&&iy.call(e,o)&&(s[o]=e[o]);return s};function uy(e,n,s={}){const o=s,{eventFilter:r=Ou}=o,l=cy(o,["eventFilter"]);return de(e,Vh(r,n),l)}var py=Object.defineProperty,dy=Object.defineProperties,fy=Object.getOwnPropertyDescriptors,Oo=Object.getOwnPropertySymbols,Pu=Object.prototype.hasOwnProperty,Mu=Object.prototype.propertyIsEnumerable,li=(e,n,s)=>n in e?py(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,hy=(e,n)=>{for(var s in n||(n={}))Pu.call(n,s)&&li(e,s,n[s]);if(Oo)for(var s of Oo(n))Mu.call(n,s)&&li(e,s,n[s]);return e},yy=(e,n)=>dy(e,fy(n)),my=(e,n)=>{var s={};for(var o in e)Pu.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Oo)for(var o of Oo(e))n.indexOf(o)<0&&Mu.call(e,o)&&(s[o]=e[o]);return s};function gy(e,n,s={}){const o=s,{eventFilter:r}=o,l=my(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=Uh(r);return{stop:uy(e,n,yy(hy({},l),{eventFilter:a})),pause:i,resume:c,isActive:u}}var Ru="usehead",ai="head:count",yr="data-head-attrs",Fu="data-meta-body",vy=(e,n)=>{const s=o=>{if(o.props.renderPriority)return o.props.renderPriority;switch(o.tag){case"base":return-1;case"meta":return o.props.charset?-2:o.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return s(e)-s(n)},_y=e=>{if(!["meta","base","script","link","title"].includes(e.tag))return!1;const{props:n,tag:s}=e;if(s==="base"||s==="title")return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const o=["key","id","name","property","http-equiv"];for(const r of o){let l;if(typeof n.getAttribute=="function"&&n.hasAttribute(r)?l=n.getAttribute(r):l=n[r],l!==void 0)return`${s}-${r}-${l}`}return!1};function Zr(e){const n=Je(e);return!e||!n?n:Array.isArray(n)?n.map(Zr):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,o])=>s==="titleTemplate"?[s,B(o)]:[s,Zr(o)])):n}function wy(e){return{...e,input:Zr(e.input)}}function ii(e,n){if(e instanceof HTMLElement&&n instanceof HTMLElement){const s=n.getAttribute("nonce");if(s&&!e.getAttribute("nonce")){const o=n.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=s,s===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(n)}var ci=(e,n)=>{const s=e.getAttribute(yr);if(s)for(const r of s.split(","))r in n||e.removeAttribute(r);const o=[];for(const r in n){const l=n[r];l!=null&&(l===!1?e.removeAttribute(r):e.setAttribute(r,l),o.push(r))}o.length?e.setAttribute(yr,o.join(",")):e.removeAttribute(yr)},by=(e,n,s)=>{const o=s.createElement(e);for(const r of Object.keys(n))if(r==="body"&&n.body===!0)o.setAttribute(Fu,"true");else{const l=n[r];if(r==="renderPriority"||r==="key"||l===!1)continue;r==="children"||r==="textContent"?o.textContent=l:r==="innerHTML"?o.innerHTML=l:o.setAttribute(r,l)}return o},ky=(e=window.document,n,s)=>{var o,r;const l=e.head,a=e.body;let i=l.querySelector(`meta[name="${ai}"]`);const c=a.querySelectorAll(`[${Fu}]`),u=i?Number(i.getAttribute("content")):0,d=[],f=[];if(c)for(let m=0;m<c.length;m++)c[m]&&((o=c[m].tagName)==null?void 0:o.toLowerCase())===n&&f.push(c[m]);if(i)for(let m=0,y=i.previousElementSibling;m<u;m++,y=(y==null?void 0:y.previousElementSibling)||null)((r=y==null?void 0:y.tagName)==null?void 0:r.toLowerCase())===n&&d.push(y);else i=e.createElement("meta"),i.setAttribute("name",ai),i.setAttribute("content","0"),l.append(i);let h=s.map(m=>{var y;return{element:by(m.tag,m.props,e),body:(y=m.props.body)!=null?y:!1}});h=h.filter(m=>{for(let y=0;y<d.length;y++){const _=d[y];if(ii(_,m.element))return d.splice(y,1),!1}for(let y=0;y<f.length;y++){const _=f[y];if(ii(_,m.element))return f.splice(y,1),!1}return!0}),f.forEach(m=>{var y;return(y=m.parentNode)==null?void 0:y.removeChild(m)}),d.forEach(m=>{var y;return(y=m.parentNode)==null?void 0:y.removeChild(m)}),h.forEach(m=>{m.body===!0?a.insertAdjacentElement("beforeend",m.element):l.insertBefore(m.element,i)}),i.setAttribute("content",`${u-d.length+h.filter(m=>!m.body).length}`)},By=({domCtx:e,document:n,previousTags:s})=>{n||(n=window.document),e.title!==void 0&&(n.title=e.title),ci(n.documentElement,e.htmlAttrs),ci(n.body,e.bodyAttrs);const o=new Set([...Object.keys(e.actualTags),...s]);for(const r of o)ky(n,r,e.actualTags[r]||[]);s.clear(),Object.keys(e.actualTags).forEach(r=>s.add(r))},xy=()=>{const e=D(Ru);if(!e)throw new Error("You may forget to apply app.use(head)");return e},Ay=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],$y=(e,n)=>e==null?"":typeof e=="function"?e(n):e.replace("%s",n!=null?n:""),Sy=e=>{const n=[],s=Object.keys(e),o=r=>(r.hid&&(r.key=r.hid,delete r.hid),r.vmid&&(r.key=r.vmid,delete r.vmid),r);for(const r of s)if(e[r]!=null)switch(r){case"title":n.push({tag:r,props:{textContent:e[r]}});break;case"titleTemplate":break;case"base":n.push({tag:r,props:{key:"default",...e[r]}});break;default:if(Ay.includes(r)){const l=e[r];Array.isArray(l)?l.forEach(a=>{const i=o(a);n.push({tag:r,props:i})}):l&&n.push({tag:r,props:o(l)})}break}return n},Ey=e=>{let n=[];const s=new Set;let o=0;const r=[],l=[];e&&n.push({input:e});let a=null,i;const c={install(u){u.config.globalProperties.$head=c,u.provide(Ru,c)},hookBeforeDomUpdate:r,hookTagsResolved:l,get headTags(){const u=[],d={},f=n.map(wy),h=f.map(y=>y.input.titleTemplate).reverse().find(y=>y!=null);f.forEach((y,_)=>{Sy(y.input).forEach((b,A)=>{var x;if(b._position=_*1e4+A,b._options&&delete b._options,y.options&&(b._options=y.options),h&&b.tag==="title"&&(b.props.textContent=$y(h,b.props.textContent)),!((x=b._options)!=null&&x.raw)){for(const P in b.props)P.startsWith("on")&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to set event listeners. See https://github.com/vueuse/head/pull/118",b),delete b.props[P]);b.props.innerHTML&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to use `innerHTML`",b),delete b.props.innerHTML)}const S=_y(b);S?d[S]=b:u.push(b)})}),u.push(...Object.values(d));const m=u.sort((y,_)=>y._position-_._position);return c.hookTagsResolved.forEach(y=>y(m)),m},addHeadObjs(u,d){const f={input:u,options:d,id:o++};return n.push(f),()=>{n=n.filter(h=>h.id!==f.id)}},removeHeadObjs(u){n=n.filter(d=>d.input!==u)},updateDOM:(u,d)=>{i={title:void 0,htmlAttrs:{},bodyAttrs:{},actualTags:{}};for(const h of c.headTags.sort(vy)){if(h.tag==="title"){i.title=h.props.textContent;continue}if(h.tag==="htmlAttrs"||h.tag==="bodyAttrs"){Object.assign(i[h.tag],h.props);continue}i.actualTags[h.tag]=i.actualTags[h.tag]||[],i.actualTags[h.tag].push(h)}const f=()=>{a=null;for(const h in c.hookBeforeDomUpdate)if(c.hookBeforeDomUpdate[h](i.actualTags)===!1)return;By({domCtx:i,document:u,previousTags:s})};if(d){f();return}a=a||Ge(()=>f())}};return c},Ty=typeof window<"u",Cy=(e,n={})=>{const s=xy(),o=s.addHeadObjs(e,n);Ty&&(ds(()=>{s.updateDOM()}),Zo(()=>{o(),s.updateDOM()}))},Oy=e=>{Cy(e)};const Cs=Symbol("v-click-clicks"),Bn=Symbol("v-click-clicks-elements"),Xr=Symbol("v-click-clicks-order-map"),Os=Symbol("v-click-clicks-disabled"),Lu=Symbol("slidev-slide-scale"),M=Symbol("slidev-slidev-context"),Dy=Symbol("slidev-route"),Iy=Symbol("slidev-slide-context"),wn="slidev-vclick-target",mr="slidev-vclick-hidden",Py="slidev-vclick-fade",gr="slidev-vclick-hidden-explicitly",_s="slidev-vclick-current",fo="slidev-vclick-prior";function My(e){return e=e||[],Array.isArray(e)?e:[e]}function Qr(e,n){if(!e)return!1;const s=e.indexOf(n);return s>=0?(e.splice(s,1),!0):!1}function Ry(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const r=[];let l=n;for(;l<s;)r.push(l),l+=o||1;return r}function Fy(e){return e!=null}function Ly(e,n){return Object.fromEntries(Object.entries(e).map(([s,o])=>n(s,o)).filter(Fy))}const Ss={theme:"apple-basic",title:"SymfonyCon Disneyland Paris 2022",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>SymfonyCon Disneyland Paris 2022</h2>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"SF Pro Display"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Josefin Sans"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["SF Pro Display","Josefin Sans"],provider:"none",local:["SF Pro Display","Josefin Sans"],italic:!1,weights:["200","400","600"]},favicon:"symfony.ico",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss"},ke=Ss;var Oc;const an=(Oc=ke.aspectRatio)!=null?Oc:16/9;var Dc;const cn=(Dc=ke.canvasWidth)!=null?Dc:980,Jl=Math.ceil(cn/an),Hu=E(()=>Ly(ke.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function wt(e,n,s){Object.defineProperty(e,n,{value:s,writable:!0,enumerable:!1})}const qn=Ie({page:0,clicks:0});let Hy=[],qy=[];wt(qn,"$syncUp",!0);wt(qn,"$syncDown",!0);wt(qn,"$paused",!1);wt(qn,"$onSet",e=>Hy.push(e));wt(qn,"$onPatch",e=>qy.push(e));wt(qn,"$patch",async()=>!1);function qu(e,n,s=!1){const o=[];let r=!1,l=!1,a,i;const c=Ie(n);function u(m){o.push(m)}function d(m,y){clearTimeout(a),r=!0,c[m]=y,a=setTimeout(()=>r=!1,0)}function f(m){r||(clearTimeout(i),l=!0,Object.entries(m).forEach(([y,_])=>{c[y]=_}),i=setTimeout(()=>l=!1,0))}function h(m){let y;s?s&&window.addEventListener("storage",w=>{w&&w.key===m&&w.newValue&&f(JSON.parse(w.newValue))}):(y=new BroadcastChannel(m),y.addEventListener("message",w=>f(w.data)));function _(){!s&&y&&!l?y.postMessage(Be(c)):s&&!l&&window.localStorage.setItem(m,JSON.stringify(c)),r||o.forEach(w=>w(c))}if(de(c,_,{deep:!0}),s){const w=window.localStorage.getItem(m);w&&f(JSON.parse(w))}}return{init:h,onPatch:u,patch:d,state:c}}const{init:Ny,onPatch:jy,patch:ui,state:vr}=qu(qn,{page:1,clicks:0}),Nn=Ie({});let Wy=[],Vy=[];wt(Nn,"$syncUp",!0);wt(Nn,"$syncDown",!0);wt(Nn,"$paused",!1);wt(Nn,"$onSet",e=>Wy.push(e));wt(Nn,"$onPatch",e=>Vy.push(e));wt(Nn,"$patch",async()=>!1);const{init:Uy,onPatch:Ky,patch:Nu,state:Do}=qu(Nn,{},!1),zy="modulepreload",Jy=function(e){return"/painless-authentication-with-access-token/"+e},pi={},Mn=function(n,s,o){if(!s||s.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(s.map(l=>{if(l=Jy(l),l in pi)return;pi[l]=!0;const a=l.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let d=r.length-1;d>=0;d--){const f=r[d];if(f.href===l&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":zy,a||(u.as="script",u.crossOrigin=""),u.href=l,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>n())};function $t(e){var n;const s=Je(e);return(n=s==null?void 0:s.$el)!=null?n:s}const et=Ct?window:void 0,ju=Ct?window.document:void 0,Yy=Ct?window.navigator:void 0;function ce(...e){let n,s,o,r;if(Cu(e[0])?([s,o,r]=e,n=et):[n,s,o,r]=e,!n)return On;let l=On;const a=de(()=>$t(n),c=>{l(),c&&(c.addEventListener(s,o,r),l=()=>{c.removeEventListener(s,o,r),l=On})},{immediate:!0,flush:"post"}),i=()=>{a(),l()};return Nt(i),i}function Gy(e,n,s={}){const{window:o=et,ignore:r,capture:l=!0,detectIframe:a=!1}=s;if(!o)return;const i=W(!0);let c;const u=m=>{o.clearTimeout(c);const y=$t(e);!y||y===m.target||m.composedPath().includes(y)||!i.value||n(m)},d=m=>r&&r.some(y=>{const _=$t(y);return _&&(m.target===_||m.composedPath().includes(_))}),f=[ce(o,"click",u,{passive:!0,capture:l}),ce(o,"pointerdown",m=>{const y=$t(e);i.value=!!y&&!m.composedPath().includes(y)&&!d(m)},{passive:!0}),ce(o,"pointerup",m=>{if(m.button===0){const y=m.composedPath();m.composedPath=()=>y,c=o.setTimeout(()=>u(m),50)}},{passive:!0}),a&&ce(o,"blur",m=>{var y;const _=$t(e);((y=document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(_!=null&&_.contains(document.activeElement))&&n(m)})].filter(Boolean);return()=>f.forEach(m=>m())}const Zy=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0;function Xy(...e){let n,s,o={};e.length===3?(n=e[0],s=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,s=e[0],o=e[1]):(n=e[0],s=e[1]):(n=!0,s=e[0]);const{target:r=et,eventName:l="keydown",passive:a=!1}=o,i=Zy(n);return ce(r,l,u=>{i(u)&&s(u)},a)}function Qy(e={}){const{window:n=et}=e,s=Jh(()=>null,()=>n==null?void 0:n.document.activeElement);return n&&(ce(n,"blur",s.trigger,!0),ce(n,"focus",s.trigger,!0)),s}function to(e,n=!1){const s=W(),o=()=>s.value=Boolean(e());return o(),zl(o,n),s}function Jn(e,n={}){const{window:s=et}=n,o=to(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let r;const l=W(!1),a=()=>{!r||("removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i))},i=()=>{!o.value||(a(),r=s.matchMedia(Du(e).value),l.value=r.matches,"addEventListener"in r?r.addEventListener("change",i):r.addListener(i))};return ds(i),Nt(()=>a()),l}const em={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var tm=Object.defineProperty,di=Object.getOwnPropertySymbols,nm=Object.prototype.hasOwnProperty,sm=Object.prototype.propertyIsEnumerable,fi=(e,n,s)=>n in e?tm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,om=(e,n)=>{for(var s in n||(n={}))nm.call(n,s)&&fi(e,s,n[s]);if(di)for(var s of di(n))sm.call(n,s)&&fi(e,s,n[s]);return e};function rm(e,n={}){function s(i,c){let u=e[i];return c!=null&&(u=zh(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=et}=n;function r(i){return o?o.matchMedia(i).matches:!1}const l=i=>Jn(`(min-width: ${s(i)})`,n),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>l(c),enumerable:!0,configurable:!0}),i),{});return om({greater(i){return Jn(`(min-width: ${s(i,.1)})`,n)},greaterOrEqual:l,smaller(i){return Jn(`(max-width: ${s(i,-.1)})`,n)},smallerOrEqual(i){return Jn(`(max-width: ${s(i)})`,n)},between(i,c){return Jn(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(i){return r(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return r(`(min-width: ${s(i)})`)},isSmaller(i){return r(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return r(`(max-width: ${s(i)})`)},isInBetween(i,c){return r(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},a)}function lm(e={}){const{navigator:n=Yy,read:s=!1,source:o,copiedDuring:r=1500,legacy:l=!1}=e,a=["copy","cut"],i=to(()=>n&&"clipboard"in n),c=E(()=>i.value||l),u=W(""),d=W(!1),f=ly(()=>d.value=!1,r);function h(){i.value?n.clipboard.readText().then(w=>{u.value=w}):u.value=_()}if(c.value&&s)for(const w of a)ce(w,h);async function m(w=Je(o)){c.value&&w!=null&&(i.value?await n.clipboard.writeText(w):y(w),u.value=w,d.value=!0,f.start())}function y(w){const b=document.createElement("textarea");b.value=w!=null?w:"",b.style.position="absolute",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),b.remove()}function _(){var w,b,A;return(A=(b=(w=document==null?void 0:document.getSelection)==null?void 0:w.call(document))==null?void 0:b.toString())!=null?A:""}return{isSupported:c,text:u,copied:d,copy:m}}function am(e){return JSON.parse(JSON.stringify(e))}const el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tl="__vueuse_ssr_handlers__";el[tl]=el[tl]||{};const im=el[tl];function cm(e,n){return im[e]||n}function um(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var pm=Object.defineProperty,hi=Object.getOwnPropertySymbols,dm=Object.prototype.hasOwnProperty,fm=Object.prototype.propertyIsEnumerable,yi=(e,n,s)=>n in e?pm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,mi=(e,n)=>{for(var s in n||(n={}))dm.call(n,s)&&yi(e,s,n[s]);if(hi)for(var s of hi(n))fm.call(n,s)&&yi(e,s,n[s]);return e};const hm={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Dt(e,n,s,o={}){var r;const{flush:l="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:f=et,eventFilter:h,onError:m=N=>{console.error(N)}}=o,y=(d?qt:W)(n);if(!s)try{s=cm("getDefaultStorage",()=>{var N;return(N=et)==null?void 0:N.localStorage})()}catch(N){m(N)}if(!s)return y;const _=Je(n),w=um(_),b=(r=o.serializer)!=null?r:hm[w],{pause:A,resume:x}=gy(y,()=>S(y.value),{flush:l,deep:a,eventFilter:h});return f&&i&&ce(f,"storage",R),R(),y;function S(N){try{N==null?s.removeItem(e):s.setItem(e,b.write(N))}catch(Q){m(Q)}}function P(N){A();try{const Q=N?N.newValue:s.getItem(e);if(Q==null)return c&&_!==null&&s.setItem(e,b.write(_)),_;if(!N&&u){const ue=b.read(Q);return Co(u)?u(ue,_):w==="object"&&!Array.isArray(ue)?mi(mi({},_),ue):ue}else return typeof Q!="string"?Q:b.read(Q)}catch(Q){m(Q)}finally{x()}}function R(N){if(!(N&&N.storageArea!==s)){if(N&&N.key===null){y.value=_;return}N&&N.key!==e||(y.value=P(N))}}}function ym(e){return Jn("(prefers-color-scheme: dark)",e)}var mm=Object.defineProperty,gm=Object.defineProperties,vm=Object.getOwnPropertyDescriptors,gi=Object.getOwnPropertySymbols,_m=Object.prototype.hasOwnProperty,wm=Object.prototype.propertyIsEnumerable,vi=(e,n,s)=>n in e?mm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,bm=(e,n)=>{for(var s in n||(n={}))_m.call(n,s)&&vi(e,s,n[s]);if(gi)for(var s of gi(n))wm.call(n,s)&&vi(e,s,n[s]);return e},km=(e,n)=>gm(e,vm(n));function y9(e,n={}){var s,o,r;const l=(s=n.draggingElement)!=null?s:et,a=(o=n.handle)!=null?o:e,i=W((r=Je(n.initialValue))!=null?r:{x:0,y:0}),c=W(),u=y=>n.pointerTypes?n.pointerTypes.includes(y.pointerType):!0,d=y=>{Je(n.preventDefault)&&y.preventDefault(),Je(n.stopPropagation)&&y.stopPropagation()},f=y=>{var _;if(!u(y)||Je(n.exact)&&y.target!==Je(e))return;const w=Je(e).getBoundingClientRect(),b={x:y.pageX-w.left,y:y.pageY-w.top};((_=n.onStart)==null?void 0:_.call(n,b,y))!==!1&&(c.value=b,d(y))},h=y=>{var _;!u(y)||!c.value||(i.value={x:y.pageX-c.value.x,y:y.pageY-c.value.y},(_=n.onMove)==null||_.call(n,i.value,y),d(y))},m=y=>{var _;!u(y)||!c.value||(c.value=void 0,(_=n.onEnd)==null||_.call(n,i.value,y),d(y))};return Ct&&(ce(a,"pointerdown",f,!0),ce(l,"pointermove",h,!0),ce(l,"pointerup",m,!0)),km(bm({},sy(i)),{position:i,isDragging:E(()=>!!c.value),style:E(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var _i=Object.getOwnPropertySymbols,Bm=Object.prototype.hasOwnProperty,xm=Object.prototype.propertyIsEnumerable,Am=(e,n)=>{var s={};for(var o in e)Bm.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&_i)for(var o of _i(e))n.indexOf(o)<0&&xm.call(e,o)&&(s[o]=e[o]);return s};function $m(e,n,s={}){const o=s,{window:r=et}=o,l=Am(o,["window"]);let a;const i=to(()=>r&&"ResizeObserver"in r),c=()=>{a&&(a.disconnect(),a=void 0)},u=de(()=>$t(e),f=>{c(),i.value&&r&&f&&(a=new ResizeObserver(n),a.observe(f,l))},{immediate:!0,flush:"post"}),d=()=>{c(),u()};return Nt(d),{isSupported:i,stop:d}}function Sm(e,n={}){const{immediate:s=!0,window:o=et}=n,r=W(!1);let l=null;function a(){!r.value||!o||(e(),l=o.requestAnimationFrame(a))}function i(){!r.value&&o&&(r.value=!0,a())}function c(){r.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return s&&i(),Nt(c),{isActive:r,pause:c,resume:i}}function Em(e,n={width:0,height:0},s={}){const{box:o="content-box"}=s,r=W(n.width),l=W(n.height);return $m(e,([a])=>{const i=o==="border-box"?a.borderBoxSize:o==="content-box"?a.contentBoxSize:a.devicePixelContentBoxSize;i?(r.value=i.reduce((c,{inlineSize:u})=>c+u,0),l.value=i.reduce((c,{blockSize:u})=>c+u,0)):(r.value=a.contentRect.width,l.value=a.contentRect.height)},s),de(()=>$t(e),a=>{r.value=a?n.width:0,l.value=a?n.height:0}),{width:r,height:l}}const wi=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Tm(e,n={}){const{document:s=ju,autoExit:o=!1}=n,r=e||(s==null?void 0:s.querySelector("html")),l=W(!1);let a=wi[0];const i=to(()=>{if(s){for(const _ of wi)if(_[1]in s)return a=_,!0}else return!1;return!1}),[c,u,d,,f]=a;async function h(){!i.value||(s!=null&&s[d]&&await s[u](),l.value=!1)}async function m(){if(!i.value)return;await h();const _=$t(r);_&&(await _[c](),l.value=!0)}async function y(){l.value?await h():await m()}return s&&ce(s,f,()=>{l.value=!!(s!=null&&s[d])},!1),o&&Nt(h),{isSupported:i,isFullscreen:l,enter:m,exit:h,toggle:y}}function Cm(e,n,s={}){const{root:o,rootMargin:r="0px",threshold:l=.1,window:a=et}=s,i=to(()=>a&&"IntersectionObserver"in a);let c=On;const u=i.value?de(()=>({el:$t(e),root:$t(o)}),({el:f,root:h})=>{if(c(),!f)return;const m=new IntersectionObserver(n,{root:h,rootMargin:r,threshold:l});m.observe(f),c=()=>{m.disconnect(),c=On}},{immediate:!0,flush:"post"}):On,d=()=>{c(),u()};return Nt(d),{isSupported:i,stop:d}}const Om={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Dm(e={}){const{reactive:n=!1,target:s=et,aliasMap:o=Om,passive:r=!0,onEventFired:l=On}=e,a=Ie(new Set),i={toJSON(){return{}},current:a},c=n?Ie(i):i,u=new Set,d=new Set;function f(_,w){_ in c&&(n?c[_]=w:c[_].value=w)}function h(){for(const _ of d)f(_,!1)}function m(_,w){var b,A;const x=(b=_.key)==null?void 0:b.toLowerCase(),P=[(A=_.code)==null?void 0:A.toLowerCase(),x].filter(Boolean);x&&(w?a.add(x):a.delete(x));for(const R of P)d.add(R),f(R,w);x==="meta"&&!w?(u.forEach(R=>{a.delete(R),f(R,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&w&&[...a,...P].forEach(R=>u.add(R))}ce(s,"keydown",_=>(m(_,!0),l(_)),{passive:r}),ce(s,"keyup",_=>(m(_,!1),l(_)),{passive:r}),ce("blur",h,{passive:!0}),ce("focus",h,{passive:!0});const y=new Proxy(c,{get(_,w,b){if(typeof w!="string")return Reflect.get(_,w,b);if(w=w.toLowerCase(),w in o&&(w=o[w]),!(w in c))if(/[+_-]/.test(w)){const x=w.split(/[+_-]/g).map(S=>S.trim());c[w]=E(()=>x.every(S=>B(y[S])))}else c[w]=W(!1);const A=Reflect.get(_,w,b);return n?B(A):A}});return y}function m9(e={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:r={x:0,y:0},window:l=et,eventFilter:a}=e,i=W(r.x),c=W(r.y),u=W(null),d=_=>{n==="page"?(i.value=_.pageX,c.value=_.pageY):n==="client"&&(i.value=_.clientX,c.value=_.clientY),u.value="mouse"},f=()=>{i.value=r.x,c.value=r.y},h=_=>{if(_.touches.length>0){const w=_.touches[0];n==="page"?(i.value=w.pageX,c.value=w.pageY):n==="client"&&(i.value=w.clientX,c.value=w.clientY),u.value="touch"}},m=_=>a===void 0?d(_):a(()=>d(_),{}),y=_=>a===void 0?h(_):a(()=>h(_),{});return l&&(ce(l,"mousemove",m,{passive:!0}),ce(l,"dragover",m,{passive:!0}),s&&(ce(l,"touchstart",y,{passive:!0}),ce(l,"touchmove",y,{passive:!0}),o&&ce(l,"touchend",f,{passive:!0}))),{x:i,y:c,sourceType:u}}var zt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(zt||(zt={}));function Im(e,n={}){const s=Du(e),{threshold:o=50,onSwipe:r,onSwipeEnd:l,onSwipeStart:a}=n,i=Ie({x:0,y:0}),c=(R,N)=>{i.x=R,i.y=N},u=Ie({x:0,y:0}),d=(R,N)=>{u.x=R,u.y=N},f=E(()=>i.x-u.x),h=E(()=>i.y-u.y),{max:m,abs:y}=Math,_=E(()=>m(y(f.value),y(h.value))>=o),w=W(!1),b=W(!1),A=E(()=>_.value?y(f.value)>y(h.value)?f.value>0?zt.LEFT:zt.RIGHT:h.value>0?zt.UP:zt.DOWN:zt.NONE),x=R=>n.pointerTypes?n.pointerTypes.includes(R.pointerType):!0,S=[ce(e,"pointerdown",R=>{var N,Q;if(!x(R))return;b.value=!0,(Q=(N=s.value)==null?void 0:N.style)==null||Q.setProperty("touch-action","none");const ue=R.target;ue==null||ue.setPointerCapture(R.pointerId);const{clientX:he,clientY:we}=R;c(he,we),d(he,we),a==null||a(R)}),ce(e,"pointermove",R=>{if(!x(R)||!b.value)return;const{clientX:N,clientY:Q}=R;d(N,Q),!w.value&&_.value&&(w.value=!0),w.value&&(r==null||r(R))}),ce(e,"pointerup",R=>{var N,Q;!x(R)||(w.value&&(l==null||l(R,A.value)),b.value=!1,w.value=!1,(Q=(N=s.value)==null?void 0:N.style)==null||Q.setProperty("touch-action","initial"))})],P=()=>S.forEach(R=>R());return{isSwiping:An(w),direction:An(A),posStart:An(i),posEnd:An(u),distanceX:f,distanceY:h,stop:P}}let Pm=0;function g9(e,n={}){const s=W(!1),{document:o=ju,immediate:r=!0,manual:l=!1,id:a=`vueuse_styletag_${++Pm}`}=n,i=W(e);let c=()=>{};const u=()=>{if(!o)return;const f=o.getElementById(a)||o.createElement("style");f.type="text/css",f.id=a,n.media&&(f.media=n.media),o.head.appendChild(f),!s.value&&(c=de(i,h=>{f.innerText=h},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(c(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return r&&!l&&zl(u),l||Nt(d),{id:a,css:i,unload:d,load:u,isLoaded:An(s)}}var Mm=Object.defineProperty,bi=Object.getOwnPropertySymbols,Rm=Object.prototype.hasOwnProperty,Fm=Object.prototype.propertyIsEnumerable,ki=(e,n,s)=>n in e?Mm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Lm=(e,n)=>{for(var s in n||(n={}))Rm.call(n,s)&&ki(e,s,n[s]);if(bi)for(var s of bi(n))Fm.call(n,s)&&ki(e,s,n[s]);return e};function v9(e={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:r="requestAnimationFrame",callback:l}=e,a=W(Gr()+s),i=()=>a.value=Gr()+s,c=l?()=>{i(),l(a.value)}:i,u=r==="requestAnimationFrame"?Sm(c,{immediate:o}):ry(c,r,{immediate:o});return n?Lm({timestamp:a},u):a}var Hm=Object.defineProperty,Bi=Object.getOwnPropertySymbols,qm=Object.prototype.hasOwnProperty,Nm=Object.prototype.propertyIsEnumerable,xi=(e,n,s)=>n in e?Hm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,jm=(e,n)=>{for(var s in n||(n={}))qm.call(n,s)&&xi(e,s,n[s]);if(Bi)for(var s of Bi(n))Nm.call(n,s)&&xi(e,s,n[s]);return e};const Wm={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};jm({linear:Kh},Wm);function Ft(e,n,s,o={}){var r,l,a;const{clone:i=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:f}=o,h=Hn(),m=s||(h==null?void 0:h.emit)||((r=h==null?void 0:h.$emit)==null?void 0:r.bind(h))||((a=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let y=u;n||(n="modelValue"),y=u||y||`update:${n.toString()}`;const _=b=>i?Co(i)?i(b):am(b):b,w=()=>Nh(e[n])?_(e[n]):f;if(c){const b=w(),A=W(b);return de(()=>e[n],x=>A.value=_(x)),de(A,x=>{(x!==e[n]||d)&&m(y,x)},{deep:d}),A}else return E({get(){return w()},set(b){m(y,b)}})}function _9({window:e=et}={}){if(!e)return W(!1);const n=W(e.document.hasFocus());return ce(e,"blur",()=>{n.value=!1}),ce(e,"focus",()=>{n.value=!0}),n}function Vm(e={}){const{window:n=et,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:r=!0,includeScrollbar:l=!0}=e,a=W(s),i=W(o),c=()=>{n&&(l?(a.value=n.innerWidth,i.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};return c(),zl(c),ce("resize",c,{passive:!0}),r&&ce("orientationchange",c,{passive:!0}),{width:a,height:i}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Yn=typeof window<"u";function Um(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const $e=Object.assign;function _r(e,n){const s={};for(const o in n){const r=n[o];s[o]=Ot(r)?r.map(e):e(r)}return s}const Ds=()=>{},Ot=Array.isArray,Km=/\/$/,zm=e=>e.replace(Km,"");function wr(e,n,s="/"){let o,r={},l="",a="";const i=n.indexOf("#");let c=n.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=n.slice(0,c),l=n.slice(c+1,i>-1?i:n.length),r=e(l)),i>-1&&(o=o||n.slice(0,i),a=n.slice(i,n.length)),o=Zm(o!=null?o:n,s),{fullPath:o+(l&&"?")+l+a,path:o,query:r,hash:a}}function Jm(e,n){const s=n.query?e(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function Ai(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Ym(e,n,s){const o=n.matched.length-1,r=s.matched.length-1;return o>-1&&o===r&&as(n.matched[o],s.matched[r])&&Wu(n.params,s.params)&&e(n.query)===e(s.query)&&n.hash===s.hash}function as(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Wu(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(!Gm(e[s],n[s]))return!1;return!0}function Gm(e,n){return Ot(e)?$i(e,n):Ot(n)?$i(n,e):e===n}function $i(e,n){return Ot(n)?e.length===n.length&&e.every((s,o)=>s===n[o]):e.length===1&&e[0]===n}function Zm(e,n){if(e.startsWith("/"))return e;if(!e)return n;const s=n.split("/"),o=e.split("/");let r=s.length-1,l,a;for(l=0;l<o.length;l++)if(a=o[l],a!==".")if(a==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+o.slice(l-(l===o.length?1:0)).join("/")}var Ks;(function(e){e.pop="pop",e.push="push"})(Ks||(Ks={}));var Is;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Is||(Is={}));function Xm(e){if(!e)if(Yn){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),zm(e)}const Qm=/^[^#]+#/;function e0(e,n){return e.replace(Qm,"#")+n}function t0(e,n){const s=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const nr=()=>({left:window.pageXOffset,top:window.pageYOffset});function n0(e){let n;if("el"in e){const s=e.el,o=typeof s=="string"&&s.startsWith("#"),r=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!r)return;n=t0(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Si(e,n){return(history.state?history.state.position-n:-1)+e}const nl=new Map;function s0(e,n){nl.set(e,n)}function o0(e){const n=nl.get(e);return nl.delete(e),n}let r0=()=>location.protocol+"//"+location.host;function Vu(e,n){const{pathname:s,search:o,hash:r}=n,l=e.indexOf("#");if(l>-1){let i=r.includes(e.slice(l))?e.slice(l).length:1,c=r.slice(i);return c[0]!=="/"&&(c="/"+c),Ai(c,"")}return Ai(s,e)+o+r}function l0(e,n,s,o){let r=[],l=[],a=null;const i=({state:h})=>{const m=Vu(e,location),y=s.value,_=n.value;let w=0;if(h){if(s.value=m,n.value=h,a&&a===y){a=null;return}w=_?h.position-_.position:0}else o(m);r.forEach(b=>{b(s.value,y,{delta:w,type:Ks.pop,direction:w?w>0?Is.forward:Is.back:Is.unknown})})};function c(){a=s.value}function u(h){r.push(h);const m=()=>{const y=r.indexOf(h);y>-1&&r.splice(y,1)};return l.push(m),m}function d(){const{history:h}=window;!h.state||h.replaceState($e({},h.state,{scroll:nr()}),"")}function f(){for(const h of l)h();l=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:f}}function Ei(e,n,s,o=!1,r=!1){return{back:e,current:n,forward:s,replaced:o,position:window.history.length,scroll:r?nr():null}}function a0(e){const{history:n,location:s}=window,o={value:Vu(e,s)},r={value:n.state};r.value||l(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(c,u,d){const f=e.indexOf("#"),h=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+c:r0()+e+c;try{n[d?"replaceState":"pushState"](u,"",h),r.value=u}catch(m){console.error(m),s[d?"replace":"assign"](h)}}function a(c,u){const d=$e({},n.state,Ei(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});l(c,d,!0),o.value=c}function i(c,u){const d=$e({},r.value,n.state,{forward:c,scroll:nr()});l(d.current,d,!0);const f=$e({},Ei(o.value,c,null),{position:d.position+1},u);l(c,f,!1),o.value=c}return{location:o,state:r,push:i,replace:a}}function i0(e){e=Xm(e);const n=a0(e),s=l0(e,n.state,n.location,n.replace);function o(l,a=!0){a||s.pauseListeners(),history.go(l)}const r=$e({location:"",base:e,go:o,createHref:e0.bind(null,e)},n,s);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}function c0(e){return typeof e=="string"||e&&typeof e=="object"}function Uu(e){return typeof e=="string"||typeof e=="symbol"}const tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ku=Symbol("");var Ti;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ti||(Ti={}));function is(e,n){return $e(new Error,{type:e,[Ku]:!0},n)}function Wt(e,n){return e instanceof Error&&Ku in e&&(n==null||!!(e.type&n))}const Ci="[^/]+?",u0={sensitive:!1,strict:!1,start:!0,end:!0},p0=/[.+*?^${}()[\]/\\]/g;function d0(e,n){const s=$e({},u0,n),o=[];let r=s.start?"^":"";const l=[];for(const u of e){const d=u.length?[]:[90];s.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const h=u[f];let m=40+(s.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(p0,"\\$&"),m+=40;else if(h.type===1){const{value:y,repeatable:_,optional:w,regexp:b}=h;l.push({name:y,repeatable:_,optional:w});const A=b||Ci;if(A!==Ci){m+=10;try{new RegExp(`(${A})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${y}" (${A}): `+S.message)}}let x=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(x=w&&u.length<2?`(?:/${x})`:"/"+x),w&&(x+="?"),r+=x,m+=20,w&&(m+=-8),_&&(m+=-20),A===".*"&&(m+=-50)}d.push(m)}o.push(d)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(r+="/?"),s.end?r+="$":s.strict&&(r+="(?:/|$)");const a=new RegExp(r,s.sensitive?"":"i");function i(u){const d=u.match(a),f={};if(!d)return null;for(let h=1;h<d.length;h++){const m=d[h]||"",y=l[h-1];f[y.name]=m&&y.repeatable?m.split("/"):m}return f}function c(u){let d="",f=!1;for(const h of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const m of h)if(m.type===0)d+=m.value;else if(m.type===1){const{value:y,repeatable:_,optional:w}=m,b=y in u?u[y]:"";if(Ot(b)&&!_)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const A=Ot(b)?b.join("/"):b;if(!A)if(w)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);d+=A}}return d||"/"}return{re:a,score:o,keys:l,parse:i,stringify:c}}function f0(e,n){let s=0;for(;s<e.length&&s<n.length;){const o=n[s]-e[s];if(o)return o;s++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function h0(e,n){let s=0;const o=e.score,r=n.score;for(;s<o.length&&s<r.length;){const l=f0(o[s],r[s]);if(l)return l;s++}if(Math.abs(r.length-o.length)===1){if(Oi(o))return 1;if(Oi(r))return-1}return r.length-o.length}function Oi(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const y0={type:0,value:""},m0=/[a-zA-Z0-9_]/;function g0(e){if(!e)return[[]];if(e==="/")return[[y0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(m){throw new Error(`ERR (${s})/"${u}": ${m}`)}let s=0,o=s;const r=[];let l;function a(){l&&r.push(l),l=[]}let i=0,c,u="",d="";function f(){!u||(s===0?l.push({type:0,value:u}):s===1||s===2||s===3?(l.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(u&&f(),a()):c===":"?(f(),s=1):h();break;case 4:h(),s=o;break;case 1:c==="("?s=2:m0.test(c)?h():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),f(),a(),r}function v0(e,n,s){const o=d0(g0(e.path),s),r=$e(o,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function _0(e,n){const s=[],o=new Map;n=Pi({strict:!1,end:!0,sensitive:!1},n);function r(d){return o.get(d)}function l(d,f,h){const m=!h,y=w0(d);y.aliasOf=h&&h.record;const _=Pi(n,d),w=[y];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const S of x)w.push($e({},y,{components:h?h.record.components:y.components,path:S,aliasOf:h?h.record:y}))}let b,A;for(const x of w){const{path:S}=x;if(f&&S[0]!=="/"){const P=f.record.path,R=P[P.length-1]==="/"?"":"/";x.path=f.record.path+(S&&R+S)}if(b=v0(x,f,_),h?h.alias.push(b):(A=A||b,A!==b&&A.alias.push(b),m&&d.name&&!Ii(b)&&a(d.name)),y.children){const P=y.children;for(let R=0;R<P.length;R++)l(P[R],b,h&&h.children[R])}h=h||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return A?()=>{a(A)}:Ds}function a(d){if(Uu(d)){const f=o.get(d);f&&(o.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return s}function c(d){let f=0;for(;f<s.length&&h0(d,s[f])>=0&&(d.record.path!==s[f].record.path||!zu(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!Ii(d)&&o.set(d.record.name,d)}function u(d,f){let h,m={},y,_;if("name"in d&&d.name){if(h=o.get(d.name),!h)throw is(1,{location:d});_=h.record.name,m=$e(Di(f.params,h.keys.filter(A=>!A.optional).map(A=>A.name)),d.params&&Di(d.params,h.keys.map(A=>A.name))),y=h.stringify(m)}else if("path"in d)y=d.path,h=s.find(A=>A.re.test(y)),h&&(m=h.parse(y),_=h.record.name);else{if(h=f.name?o.get(f.name):s.find(A=>A.re.test(f.path)),!h)throw is(1,{location:d,currentLocation:f});_=h.record.name,m=$e({},f.params,d.params),y=h.stringify(m)}const w=[];let b=h;for(;b;)w.unshift(b.record),b=b.parent;return{name:_,path:y,params:m,matched:w,meta:k0(w)}}return e.forEach(d=>l(d)),{addRoute:l,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:r}}function Di(e,n){const s={};for(const o of n)o in e&&(s[o]=e[o]);return s}function w0(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:b0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function b0(e){const n={},s=e.props||!1;if("component"in e)n.default=s;else for(const o in e.components)n[o]=typeof s=="boolean"?s:s[o];return n}function Ii(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function k0(e){return e.reduce((n,s)=>$e(n,s.meta),{})}function Pi(e,n){const s={};for(const o in e)s[o]=o in n?n[o]:e[o];return s}function zu(e,n){return n.children.some(s=>s===e||zu(e,s))}const Ju=/#/g,B0=/&/g,x0=/\//g,A0=/=/g,$0=/\?/g,Yu=/\+/g,S0=/%5B/g,E0=/%5D/g,Gu=/%5E/g,T0=/%60/g,Zu=/%7B/g,C0=/%7C/g,Xu=/%7D/g,O0=/%20/g;function Yl(e){return encodeURI(""+e).replace(C0,"|").replace(S0,"[").replace(E0,"]")}function D0(e){return Yl(e).replace(Zu,"{").replace(Xu,"}").replace(Gu,"^")}function sl(e){return Yl(e).replace(Yu,"%2B").replace(O0,"+").replace(Ju,"%23").replace(B0,"%26").replace(T0,"`").replace(Zu,"{").replace(Xu,"}").replace(Gu,"^")}function I0(e){return sl(e).replace(A0,"%3D")}function P0(e){return Yl(e).replace(Ju,"%23").replace($0,"%3F")}function M0(e){return e==null?"":P0(e).replace(x0,"%2F")}function Io(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function R0(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const l=o[r].replace(Yu," "),a=l.indexOf("="),i=Io(a<0?l:l.slice(0,a)),c=a<0?null:Io(l.slice(a+1));if(i in n){let u=n[i];Ot(u)||(u=n[i]=[u]),u.push(c)}else n[i]=c}return n}function Mi(e){let n="";for(let s in e){const o=e[s];if(s=I0(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(Ot(o)?o.map(l=>l&&sl(l)):[o&&sl(o)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+s,l!=null&&(n+="="+l))})}return n}function F0(e){const n={};for(const s in e){const o=e[s];o!==void 0&&(n[s]=Ot(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return n}const L0=Symbol(""),Ri=Symbol(""),Gl=Symbol(""),Qu=Symbol(""),ol=Symbol("");function ws(){let e=[];function n(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function s(){e=[]}return{add:n,list:()=>e,reset:s}}function sn(e,n,s,o,r){const l=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((a,i)=>{const c=f=>{f===!1?i(is(4,{from:s,to:n})):f instanceof Error?i(f):c0(f)?i(is(2,{from:n,to:f})):(l&&o.enterCallbacks[r]===l&&typeof f=="function"&&l.push(f),a())},u=e.call(o&&o.instances[r],n,s,c);let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(f=>i(f))})}function br(e,n,s,o){const r=[];for(const l of e)for(const a in l.components){let i=l.components[a];if(!(n!=="beforeRouteEnter"&&!l.instances[a]))if(H0(i)){const u=(i.__vccOpts||i)[n];u&&r.push(sn(u,s,o,l,a))}else{let c=i();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${l.path}"`));const d=Um(u)?u.default:u;l.components[a]=d;const h=(d.__vccOpts||d)[n];return h&&sn(h,s,o,l,a)()}))}}return r}function H0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Fi(e){const n=D(Gl),s=D(Qu),o=E(()=>n.resolve(B(e.to))),r=E(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],f=s.matched;if(!d||!f.length)return-1;const h=f.findIndex(as.bind(null,d));if(h>-1)return h;const m=Li(c[u-2]);return u>1&&Li(d)===m&&f[f.length-1].path!==m?f.findIndex(as.bind(null,c[u-2])):h}),l=E(()=>r.value>-1&&W0(s.params,o.value.params)),a=E(()=>r.value>-1&&r.value===s.matched.length-1&&Wu(s.params,o.value.params));function i(c={}){return j0(c)?n[B(e.replace)?"replace":"push"](B(e.to)).catch(Ds):Promise.resolve()}return{route:o,href:E(()=>o.value.href),isActive:l,isExactActive:a,navigate:i}}const q0=_e({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fi,setup(e,{slots:n}){const s=Ie(Fi(e)),{options:o}=D(Gl),r=E(()=>({[Hi(e.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Hi(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const l=n.default&&n.default(s);return e.custom?l:Xe("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:r.value},l)}}}),N0=q0;function j0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function W0(e,n){for(const s in n){const o=n[s],r=e[s];if(typeof o=="string"){if(o!==r)return!1}else if(!Ot(r)||r.length!==o.length||o.some((l,a)=>l!==r[a]))return!1}return!0}function Li(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Hi=(e,n,s)=>e!=null?e:n!=null?n:s,V0=_e({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:s}){const o=D(ol),r=E(()=>e.route||o.value),l=D(Ri,0),a=E(()=>{let u=B(l);const{matched:d}=r.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),i=E(()=>r.value.matched[a.value]);ft(Ri,E(()=>a.value+1)),ft(L0,i),ft(ol,r);const c=W();return de(()=>[c.value,i.value,e.name],([u,d,f],[h,m,y])=>{d&&(d.instances[f]=u,m&&m!==d&&u&&u===h&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!as(d,m)||!h)&&(d.enterCallbacks[f]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,f=i.value,h=f&&f.components[d];if(!h)return qi(s.default,{Component:h,route:u});const m=f.props[d],y=m?m===!0?u.params:typeof m=="function"?m(u):m:null,w=Xe(h,$e({},y,n,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[d]=null)},ref:c}));return qi(s.default,{Component:w,route:u})||w}}});function qi(e,n){if(!e)return null;const s=e(n);return s.length===1?s[0]:s}const U0=V0;function K0(e){const n=_0(e.routes,e),s=e.parseQuery||R0,o=e.stringifyQuery||Mi,r=e.history,l=ws(),a=ws(),i=ws(),c=qt(tn);let u=tn;Yn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=_r.bind(null,C=>""+C),f=_r.bind(null,M0),h=_r.bind(null,Io);function m(C,z){let K,Z;return Uu(C)?(K=n.getRecordMatcher(C),Z=z):Z=C,n.addRoute(Z,K)}function y(C){const z=n.getRecordMatcher(C);z&&n.removeRoute(z)}function _(){return n.getRoutes().map(C=>C.record)}function w(C){return!!n.getRecordMatcher(C)}function b(C,z){if(z=$e({},z||c.value),typeof C=="string"){const g=wr(s,C,z.path),v=n.resolve({path:g.path},z),$=r.createHref(g.fullPath);return $e(g,v,{params:h(v.params),hash:Io(g.hash),redirectedFrom:void 0,href:$})}let K;if("path"in C)K=$e({},C,{path:wr(s,C.path,z.path).path});else{const g=$e({},C.params);for(const v in g)g[v]==null&&delete g[v];K=$e({},C,{params:f(C.params)}),z.params=f(z.params)}const Z=n.resolve(K,z),me=C.hash||"";Z.params=d(h(Z.params));const be=Jm(o,$e({},C,{hash:D0(me),path:Z.path})),le=r.createHref(be);return $e({fullPath:be,hash:me,query:o===Mi?F0(C.query):C.query||{}},Z,{redirectedFrom:void 0,href:le})}function A(C){return typeof C=="string"?wr(s,C,c.value.path):$e({},C)}function x(C,z){if(u!==C)return is(8,{from:z,to:C})}function S(C){return N(C)}function P(C){return S($e(A(C),{replace:!0}))}function R(C){const z=C.matched[C.matched.length-1];if(z&&z.redirect){const{redirect:K}=z;let Z=typeof K=="function"?K(C):K;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=A(Z):{path:Z},Z.params={}),$e({query:C.query,hash:C.hash,params:"path"in Z?{}:C.params},Z)}}function N(C,z){const K=u=b(C),Z=c.value,me=C.state,be=C.force,le=C.replace===!0,g=R(K);if(g)return N($e(A(g),{state:typeof g=="object"?$e({},me,g.state):me,force:be,replace:le}),z||K);const v=K;v.redirectedFrom=z;let $;return!be&&Ym(o,Z,K)&&($=is(16,{to:v,from:Z}),Ae(Z,Z,!0,!1)),($?Promise.resolve($):ue(v,Z)).catch(T=>Wt(T)?Wt(T,2)?T:ye(T):Y(T,v,Z)).then(T=>{if(T){if(Wt(T,2))return N($e({replace:le},A(T.to),{state:typeof T.to=="object"?$e({},me,T.to.state):me,force:be}),z||v)}else T=we(v,Z,!0,le,me);return he(v,Z,T),T})}function Q(C,z){const K=x(C,z);return K?Promise.reject(K):Promise.resolve()}function ue(C,z){let K;const[Z,me,be]=z0(C,z);K=br(Z.reverse(),"beforeRouteLeave",C,z);for(const g of Z)g.leaveGuards.forEach(v=>{K.push(sn(v,C,z))});const le=Q.bind(null,C,z);return K.push(le),Vn(K).then(()=>{K=[];for(const g of l.list())K.push(sn(g,C,z));return K.push(le),Vn(K)}).then(()=>{K=br(me,"beforeRouteUpdate",C,z);for(const g of me)g.updateGuards.forEach(v=>{K.push(sn(v,C,z))});return K.push(le),Vn(K)}).then(()=>{K=[];for(const g of C.matched)if(g.beforeEnter&&!z.matched.includes(g))if(Ot(g.beforeEnter))for(const v of g.beforeEnter)K.push(sn(v,C,z));else K.push(sn(g.beforeEnter,C,z));return K.push(le),Vn(K)}).then(()=>(C.matched.forEach(g=>g.enterCallbacks={}),K=br(be,"beforeRouteEnter",C,z),K.push(le),Vn(K))).then(()=>{K=[];for(const g of a.list())K.push(sn(g,C,z));return K.push(le),Vn(K)}).catch(g=>Wt(g,8)?g:Promise.reject(g))}function he(C,z,K){for(const Z of i.list())Z(C,z,K)}function we(C,z,K,Z,me){const be=x(C,z);if(be)return be;const le=z===tn,g=Yn?history.state:{};K&&(Z||le?r.replace(C.fullPath,$e({scroll:le&&g&&g.scroll},me)):r.push(C.fullPath,me)),c.value=C,Ae(C,z,K,le),ye()}let Ve;function Ne(){Ve||(Ve=r.listen((C,z,K)=>{if(!jn.listening)return;const Z=b(C),me=R(Z);if(me){N($e(me,{replace:!0}),Z).catch(Ds);return}u=Z;const be=c.value;Yn&&s0(Si(be.fullPath,K.delta),nr()),ue(Z,be).catch(le=>Wt(le,12)?le:Wt(le,2)?(N(le.to,Z).then(g=>{Wt(g,20)&&!K.delta&&K.type===Ks.pop&&r.go(-1,!1)}).catch(Ds),Promise.reject()):(K.delta&&r.go(-K.delta,!1),Y(le,Z,be))).then(le=>{le=le||we(Z,be,!1),le&&(K.delta&&!Wt(le,8)?r.go(-K.delta,!1):K.type===Ks.pop&&Wt(le,20)&&r.go(-1,!1)),he(Z,be,le)}).catch(Ds)}))}let Me=ws(),Oe=ws(),De;function Y(C,z,K){ye(C);const Z=Oe.list();return Z.length?Z.forEach(me=>me(C,z,K)):console.error(C),Promise.reject(C)}function se(){return De&&c.value!==tn?Promise.resolve():new Promise((C,z)=>{Me.add([C,z])})}function ye(C){return De||(De=!C,Ne(),Me.list().forEach(([z,K])=>C?K(C):z()),Me.reset()),C}function Ae(C,z,K,Z){const{scrollBehavior:me}=e;if(!Yn||!me)return Promise.resolve();const be=!K&&o0(Si(C.fullPath,0))||(Z||!K)&&history.state&&history.state.scroll||null;return Ge().then(()=>me(C,z,be)).then(le=>le&&n0(le)).catch(le=>Y(le,C,z))}const tt=C=>r.go(C);let Le;const Qt=new Set,jn={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:w,getRoutes:_,resolve:b,options:e,push:S,replace:P,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:l.add,beforeResolve:a.add,afterEach:i.add,onError:Oe.add,isReady:se,install(C){const z=this;C.component("RouterLink",N0),C.component("RouterView",U0),C.config.globalProperties.$router=z,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>B(c)}),Yn&&!Le&&c.value===tn&&(Le=!0,S(r.location).catch(me=>{}));const K={};for(const me in tn)K[me]=E(()=>c.value[me]);C.provide(Gl,z),C.provide(Qu,Ie(K)),C.provide(ol,c);const Z=C.unmount;Qt.add(C),C.unmount=function(){Qt.delete(C),Qt.size<1&&(u=tn,Ve&&Ve(),Ve=null,c.value=tn,Le=!1,De=!1),Z()}}};return jn}function Vn(e){return e.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function z0(e,n){const s=[],o=[],r=[],l=Math.max(n.matched.length,e.matched.length);for(let a=0;a<l;a++){const i=n.matched[a];i&&(e.matched.find(u=>as(u,i))?o.push(i):s.push(i));const c=e.matched[a];c&&(n.matched.find(u=>as(u,c))||r.push(c))}return[s,o,r]}const kr=W(!1),Ps=W(!1),Gn=W(!1),J0=W(!0),rl=rm({xs:460,...em}),Dn=Vm(),ep=Dm(),Y0=E(()=>Dn.height.value-Dn.width.value/an>180),tp=Tm(Ct?document.body:null),ss=Qy(),G0=E(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=ss.value)==null?void 0:e.tagName)||"")||((n=ss.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),Z0=E(()=>{var e;return["BUTTON","A"].includes(((e=ss.value)==null?void 0:e.tagName)||"")});Dt("slidev-camera","default");Dt("slidev-mic","default");const _o=Dt("slidev-scale",0),st=Dt("slidev-show-overview",!1),Br=Dt("slidev-presenter-cursor",!0),Ni=Dt("slidev-show-editor",!1);Dt("slidev-editor-width",Ct?window.innerWidth*.4:100);const np=Iu(st);function ji(e,n,s,o=r=>r){return e*o(.5-n*(.5-s))}function X0(e){return[-e[0],-e[1]]}function Bt(e,n){return[e[0]+n[0],e[1]+n[1]]}function _t(e,n){return[e[0]-n[0],e[1]-n[1]]}function kt(e,n){return[e[0]*n,e[1]*n]}function Q0(e,n){return[e[0]/n,e[1]/n]}function bs(e){return[e[1],-e[0]]}function Wi(e,n){return e[0]*n[0]+e[1]*n[1]}function eg(e,n){return e[0]===n[0]&&e[1]===n[1]}function tg(e){return Math.hypot(e[0],e[1])}function ng(e){return e[0]*e[0]+e[1]*e[1]}function Vi(e,n){return ng(_t(e,n))}function sp(e){return Q0(e,tg(e))}function sg(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function ks(e,n,s){let o=Math.sin(s),r=Math.cos(s),l=e[0]-n[0],a=e[1]-n[1],i=l*r-a*o,c=l*o+a*r;return[i+n[0],c+n[1]]}function ll(e,n,s){return Bt(e,kt(_t(n,e),s))}function Ui(e,n,s){return Bt(e,kt(n,s))}var{min:Un,PI:og}=Math,Ki=.275,Bs=og+1e-4;function rg(e,n={}){let{size:s=16,smoothing:o=.5,thinning:r=.5,simulatePressure:l=!0,easing:a=Y=>Y,start:i={},end:c={},last:u=!1}=n,{cap:d=!0,easing:f=Y=>Y*(2-Y)}=i,{cap:h=!0,easing:m=Y=>--Y*Y*Y+1}=c;if(e.length===0||s<=0)return[];let y=e[e.length-1].runningLength,_=i.taper===!1?0:i.taper===!0?Math.max(s,y):i.taper,w=c.taper===!1?0:c.taper===!0?Math.max(s,y):c.taper,b=Math.pow(s*o,2),A=[],x=[],S=e.slice(0,10).reduce((Y,se)=>{let ye=se.pressure;if(l){let Ae=Un(1,se.distance/s),tt=Un(1,1-Ae);ye=Un(1,Y+(tt-Y)*(Ae*Ki))}return(Y+ye)/2},e[0].pressure),P=ji(s,r,e[e.length-1].pressure,a),R,N=e[0].vector,Q=e[0].point,ue=Q,he=Q,we=ue,Ve=!1;for(let Y=0;Y<e.length;Y++){let{pressure:se}=e[Y],{point:ye,vector:Ae,distance:tt,runningLength:Le}=e[Y];if(Y<e.length-1&&y-Le<3)continue;if(r){if(l){let be=Un(1,tt/s),le=Un(1,1-be);se=Un(1,S+(le-S)*(be*Ki))}P=ji(s,r,se,a)}else P=s/2;R===void 0&&(R=P);let Qt=Le<_?f(Le/_):1,jn=y-Le<w?m((y-Le)/w):1;P=Math.max(.01,P*Math.min(Qt,jn));let C=(Y<e.length-1?e[Y+1]:e[Y]).vector,z=Y<e.length-1?Wi(Ae,C):1,K=Wi(Ae,N)<0&&!Ve,Z=z!==null&&z<0;if(K||Z){let be=kt(bs(N),P);for(let le=1/13,g=0;g<=1;g+=le)he=ks(_t(ye,be),ye,Bs*g),A.push(he),we=ks(Bt(ye,be),ye,Bs*-g),x.push(we);Q=he,ue=we,Z&&(Ve=!0);continue}if(Ve=!1,Y===e.length-1){let be=kt(bs(Ae),P);A.push(_t(ye,be)),x.push(Bt(ye,be));continue}let me=kt(bs(ll(C,Ae,z)),P);he=_t(ye,me),(Y<=1||Vi(Q,he)>b)&&(A.push(he),Q=he),we=Bt(ye,me),(Y<=1||Vi(ue,we)>b)&&(x.push(we),ue=we),S=se,N=Ae}let Ne=e[0].point.slice(0,2),Me=e.length>1?e[e.length-1].point.slice(0,2):Bt(e[0].point,[1,1]),Oe=[],De=[];if(e.length===1){if(!(_||w)||u){let Y=Ui(Ne,sp(bs(_t(Ne,Me))),-(R||P)),se=[];for(let ye=1/13,Ae=ye;Ae<=1;Ae+=ye)se.push(ks(Y,Ne,Bs*2*Ae));return se}}else{if(!(_||w&&e.length===1))if(d)for(let se=1/13,ye=se;ye<=1;ye+=se){let Ae=ks(x[0],Ne,Bs*ye);Oe.push(Ae)}else{let se=_t(A[0],x[0]),ye=kt(se,.5),Ae=kt(se,.51);Oe.push(_t(Ne,ye),_t(Ne,Ae),Bt(Ne,Ae),Bt(Ne,ye))}let Y=bs(X0(e[e.length-1].vector));if(w||_&&e.length===1)De.push(Me);else if(h){let se=Ui(Me,Y,P);for(let ye=1/29,Ae=ye;Ae<1;Ae+=ye)De.push(ks(se,Me,Bs*3*Ae))}else De.push(Bt(Me,kt(Y,P)),Bt(Me,kt(Y,P*.99)),_t(Me,kt(Y,P*.99)),_t(Me,kt(Y,P)))}return A.concat(De,x.reverse(),Oe)}function lg(e,n={}){var s;let{streamline:o=.5,size:r=16,last:l=!1}=n;if(e.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:m,y,pressure:_=.5})=>[m,y,_]);if(i.length===2){let m=i[1];i=i.slice(0,-1);for(let y=1;y<5;y++)i.push(ll(i[0],m,y/4))}i.length===1&&(i=[...i,[...Bt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,f=c[0],h=i.length-1;for(let m=1;m<i.length;m++){let y=l&&m===h?i[m].slice(0,2):ll(f.point,i[m],a);if(eg(f.point,y))continue;let _=sg(y,f.point);if(d+=_,m<h&&!u){if(d<r)continue;u=!0}f={point:y,pressure:i[m][2]>=0?i[m][2]:.5,vector:sp(_t(f.point,y)),distance:_,runningLength:d},c.push(f)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function ag(e,n={}){return rg(lg(e,n),n)}var ig=()=>({events:{},emit(e,...n){let s=this.events[e]||[];for(let o=0,r=s.length;o<r;o++)s[o](...n)},on(e,n){var s;return(s=this.events[e])!=null&&s.push(n)||(this.events[e]=[n]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(r=>n!==r)}}});function Po(e,n){return e-n}function cg(e){return e<0?-1:1}function Mo(e){return[Math.abs(e),cg(e)]}function op(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var ug=2,Kt=ug,hs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var r;var n;const s=this.drauu.el,o=(r=this.drauu.options.coordinateScale)!=null?r:1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*o,y:(e.pageY-l.top)*o,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const a=l.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:a.x*o,y:a.y*o,pressure:e.pressure}}}createElement(e,n){var r;const s=document.createElementNS("http://www.w3.org/2000/svg",e),o=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",(r=o.fill)!=null?r:"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(Kt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},pg=class extends hs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=ag(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((o,[r,l],a,i)=>{const[c,u]=i[(a+1)%i.length];return o.push(r,l,(r+c)/2,(l+u)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},dg=class extends hs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Mo(e.x-this.start.x),[o,r]=Mo(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,o);n=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[l,a]=[this.start.x,this.start.x+n*s].sort(Po),[i,c]=[this.start.y,this.start.y+o*r].sort(Po);this.attr("cx",(l+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-l)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function rp(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",n),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(r),s.appendChild(o),s}var fg=class extends hs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=op(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(rp(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:s}=e;if(this.shiftPressed){const o=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let l=o/r;l=Math.round(l),Math.abs(l)<=1?(n=this.start.x+r*l,s=this.start.y+r):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},hg=class extends hs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Mo(e.x-this.start.x),[o,r]=Mo(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,o);n=l,o=l}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[l,a]=[this.start.x,this.start.x+n*s].sort(Po),[i,c]=[this.start.y,this.start.y+o*r].sort(Po);this.attr("x",l),this.attr("y",i),this.attr("width",a-l),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function yg(e,n){const s=e.x-n.x,o=e.y-n.y;return s*s+o*o}function mg(e,n,s){let o=n.x,r=n.y,l=s.x-o,a=s.y-r;if(l!==0||a!==0){const i=((e.x-o)*l+(e.y-r)*a)/(l*l+a*a);i>1?(o=s.x,r=s.y):i>0&&(o+=l*i,r+=a*i)}return l=e.x-o,a=e.y-r,l*l+a*a}function gg(e,n){let s=e[0];const o=[s];let r;for(let l=1,a=e.length;l<a;l++)r=e[l],yg(r,s)>n&&(o.push(r),s=r);return s!==r&&r&&o.push(r),o}function al(e,n,s,o,r){let l=o,a=0;for(let i=n+1;i<s;i++){const c=mg(e[i],e[n],e[s]);c>l&&(a=i,l=c)}l>o&&(a-n>1&&al(e,n,a,o,r),r.push(e[a]),s-a>1&&al(e,a,s,o,r))}function vg(e,n){const s=e.length-1,o=[e[0]];return al(e,0,s,n,o),o.push(e[s]),o}function zi(e,n,s=!1){if(e.length<=2)return e;const o=n!==void 0?n*n:1;return e=s?e:gg(e,o),e=vg(e,o),e}var _g=class extends hs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=op();const n=rp(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=zi(this.points,1,!0),this.count=0),this.attr("d",Yi(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Yi(zi(this.points,1,!0))),!e.getTotalLength()))}};function wg(e,n){const s=n.x-e.x,o=n.y-e.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Ji(e,n,s,o){const r=n||e,l=s||e,a=.2,i=wg(r,l),c=i.angle+(o?Math.PI:0),u=i.length*a,d=e.x+Math.cos(c)*u,f=e.y+Math.sin(c)*u;return{x:d,y:f}}function bg(e,n,s){const o=Ji(s[n-1],s[n-2],e),r=Ji(e,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(Kt)},${o.y.toFixed(Kt)} ${r.x.toFixed(Kt)},${r.y.toFixed(Kt)} ${e.x.toFixed(Kt)},${e.y.toFixed(Kt)}`}function Yi(e){return e.reduce((n,s,o,r)=>o===0?`M ${s.x.toFixed(Kt)},${s.y.toFixed(Kt)}`:`${n} ${bg(s,o,r)}`,"")}var kg=class extends hs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(s,o)=>{if(s&&s.length)for(let r=0;r<s.length;r++){const l=s[r];if(l.getTotalLength){const a=l.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=l.getPointAtLength(a*i/this.pathSubFactor),u=l.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:o||l})}}else l.children&&n(l.children,l)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,n){const s=e.x1,o=e.x2,r=n.x1,l=n.x2,a=e.y1,i=e.y2,c=n.y1,u=n.y2,d=(s-o)*(c-u)-(a-i)*(r-l),f=(s*i-a*o)*(r-l)-(s-o)*(r*u-c*l),h=(s*i-a*o)*(c-u)-(a-i)*(r*u-c*l),m=(y,_,w)=>y>=_&&y<=w?!0:y>=w&&y<=_;if(d===0)return!1;{const y={x:f/d,y:h/d};return m(y.x,s,o)&&m(y.y,a,i)&&m(y.x,r,l)&&m(y.y,c,u)}}};function Bg(e){return{draw:new _g(e),stylus:new pg(e),line:new fg(e),rectangle:new hg(e),ellipse:new dg(e),eraseLine:new kg(e)}}var xg=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=ig(),this._models=Bg(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),r=this.eventMove.bind(this),l=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Ag(e){return new xg(e)}const il=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Lt=Dt("slidev-drawing-enabled",!1),w9=Dt("slidev-drawing-pinned",!1),$g=W(!1),Sg=W(!1),Eg=W(!1),zs=W(!1),Sn=Yh(Dt("slidev-drawing-brush",{color:il[0],size:4,mode:"stylus"})),Gi=W("stylus"),lp=E(()=>ke.drawings.syncAll||Rt.value);let Js=!1;const xs=E({get(){return Gi.value},set(e){Gi.value=e,e==="arrow"?(Sn.mode="line",Sn.arrowEnd=!0):(Sn.mode=e,Sn.arrowEnd=!1)}}),Tg=Ie({brush:Sn,acceptsInputTypes:E(()=>Lt.value?void 0:["pen"]),coordinateTransform:!1}),ot=Ko(Ag(Tg));function Cg(){ot.clear(),lp.value&&Nu(qe.value,"")}function ap(){var e;Sg.value=ot.canRedo(),$g.value=ot.canUndo(),Eg.value=!!((e=ot.el)!=null&&e.children.length)}function Og(e){Js=!0;const n=Do[e||qe.value];n!=null?ot.load(n):ot.clear(),Js=!1}ot.on("changed",()=>{if(ap(),!Js){const e=ot.dump(),n=qe.value;(Do[n]||"")!==e&&lp.value&&Nu(n,ot.dump())}});Ky(e=>{Js=!0,e[qe.value]!=null&&ot.load(e[qe.value]||""),Js=!1,ap()});Ge(()=>{de(qe,()=>{!ot.mounted||Og()},{immediate:!0})});ot.on("start",()=>zs.value=!0);ot.on("end",()=>zs.value=!1);window.addEventListener("keydown",e=>{if(!Lt.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ot.redo():ot.undo():e.code==="Escape"?Lt.value=!1:e.code==="KeyL"&&n?xs.value="line":e.code==="KeyA"&&n?xs.value="arrow":e.code==="KeyS"&&n?xs.value="stylus":e.code==="KeyR"&&n?xs.value="rectangle":e.code==="KeyE"&&n?xs.value="ellipse":e.code==="KeyC"&&n?Cg():e.code.startsWith("Digit")&&n&&+e.code[5]<=il.length?Sn.color=il[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function je(...e){return E(()=>e.every(n=>Je(n)))}function ut(e){return E(()=>!Je(e))}const Zi=ym(),xr=Dt("slidev-color-schema","auto"),cl=E(()=>ke.colorSchema!=="auto"),Zl=E({get(){return cl.value?ke.colorSchema==="dark":xr.value==="auto"?Zi.value:xr.value==="dark"},set(e){cl.value||(xr.value=e===Zi.value?"auto":e?"dark":"light")}}),ip=Iu(Zl);Ct&&de(Zl,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const wo=W(1),bo=E(()=>We.length-1),ht=W(0),Xl=W(0);function Dg(){ht.value>wo.value&&(ht.value-=1)}function Ig(){ht.value<bo.value&&(ht.value+=1)}function Pg(){if(ht.value>wo.value){let e=ht.value-Xl.value;e<wo.value&&(e=wo.value),ht.value=e}}function Mg(){if(ht.value<bo.value){let e=ht.value+Xl.value;e>bo.value&&(e=bo.value),ht.value=e}}function Rg(){const{escape:e,space:n,shift:s,left:o,right:r,up:l,down:a,enter:i,d:c,g:u,o:d}=ep;let f=[{name:"next_space",key:je(n,ut(s)),fn:un,autoRepeat:!0},{name:"prev_space",key:je(n,s),fn:pn,autoRepeat:!0},{name:"next_right",key:je(r,ut(s),ut(st)),fn:un,autoRepeat:!0},{name:"prev_left",key:je(o,ut(s),ut(st)),fn:pn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:un,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:pn,autoRepeat:!0},{name:"next_down",key:je(a,ut(st)),fn:Gs,autoRepeat:!0},{name:"prev_up",key:je(l,ut(st)),fn:()=>Zs(!1),autoRepeat:!0},{name:"next_shift",key:je(r,s),fn:Gs,autoRepeat:!0},{name:"prev_shift",key:je(o,s),fn:()=>Zs(!1),autoRepeat:!0},{name:"toggle_dark",key:je(c,ut(Lt)),fn:ip},{name:"toggle_overview",key:je(d,ut(Lt)),fn:np},{name:"hide_overview",key:je(e,ut(Lt)),fn:()=>st.value=!1},{name:"goto",key:je(u,ut(Lt)),fn:()=>Gn.value=!Gn.value},{name:"next_overview",key:je(r,st),fn:Ig},{name:"prev_overview",key:je(o,st),fn:Dg},{name:"up_overview",key:je(l,st),fn:Pg},{name:"down_overview",key:je(a,st),fn:Mg},{name:"goto_from_overview",key:je(i,st),fn:()=>{cs(ht.value),st.value=!1}}];const h=new Set(f.map(y=>y.name));if(f.filter(y=>y.name&&h.has(y.name)).length===0){const y=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(y),console.warn(y)}return f}const cp=je(ut(G0),ut(Z0),J0);function Fg(e,n,s=!1){typeof e=="string"&&(e=ep[e]);const o=je(e,cp);let r=0,l;const a=()=>{if(clearTimeout(l),!o.value){r=0;return}s&&(l=setTimeout(a,Math.max(1e3-r*250,150)),r++),n()};return de(o,a,{flush:"sync"})}function Lg(e,n){return Xy(e,s=>{!cp.value||s.repeat||n()})}function Hg(){const e=Rg();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&Fg(s.key,s.fn,s.autoRepeat)}),Lg("f",()=>tp.toggle())}const qg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ng=t("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),jg=[Ng];function Wg(e,n){return k(),U("svg",qg,jg)}const Vg={name:"carbon-close",render:Wg};function Ql(e){var s,o;const n=(o=(s=e==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:o.no;return n!=null?`slidev-page-${n}`:""}const up=_e({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;D(M);const s=W(),o=Em(s),r=E(()=>n.width?n.width:o.width.value),l=E(()=>n.width?n.width/an:o.height.value);n.width&&ds(()=>{s.value&&(s.value.style.width=`${r.value}px`,s.value.style.height=`${l.value}px`)});const a=E(()=>r.value/l.value),i=E(()=>n.scale?n.scale:a.value<an?r.value/cn:l.value*an/cn),c=E(()=>({height:`${Jl}px`,width:`${cn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=E(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ft(Lu,i),(d,f)=>(k(),U("div",{id:"slide-container",ref_key:"root",ref:s,class:Re(B(u))},[t("div",{id:"slide-content",style:Ke(B(c))},[gt(d.$slots,"default")],4),gt(d.$slots,"controls")],2))}});const ea=_e({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const s=Ft(e,"clicks",n),o=Ft(e,"clicksElements",n),r=Ft(e,"clicksDisabled",n),l=Ft(e,"clicksOrderMap",n);o.value.length=0,ft(Dy,e.route),ft(Iy,e.context),ft(Cs,s),ft(Os,r),ft(Bn,o),ft(Xr,l)},render(){var e,n;return this.$props.is?Xe(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),Ug=["innerHTML"],Kg=_e({__name:"DrawingPreview",props:{page:null},setup(e){return D(M),(n,s)=>B(Do)[e.page]?(k(),U("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:B(Do)[e.page]},null,8,Ug)):fe("v-if",!0)}}),zg={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Jg=["onClick"],Yg=_e({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:n}){const s=e;D(M);const o=Ft(s,"modelValue",n);function r(){o.value=!1}function l(m){cs(m),r()}function a(m){return m===ht.value}const i=rl.smaller("xs"),c=rl.smaller("sm"),u=4*16*2,d=2*16,f=E(()=>i.value?Dn.width.value-u:c.value?(Dn.width.value-u-d)/2:300),h=E(()=>Math.floor((Dn.width.value-u)/(f.value+d)));return ds(()=>{ht.value=qe.value,Xl.value=h.value}),(m,y)=>{const _=Vg;return k(),U(Se,null,[Qo(t("div",zg,[t("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ke(`grid-template-columns: repeat(auto-fit,minmax(${B(f)}px,1fr))`)},[(k(!0),U(Se,null,eo(B(We).slice(0,-1),(w,b)=>(k(),U("div",{key:w.path,class:"relative"},[t("div",{class:Re(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(b+1)}]),onClick:A=>l(+w.path)},[(k(),H(up,{key:w.path,width:B(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:q(()=>[V(B(ea),{is:w==null?void 0:w.component,"clicks-disabled":!0,class:Re(B(Ql)(w)),route:w,context:"overview"},null,8,["is","class","route"]),V(Kg,{page:+w.path},null,8,["page"])]),_:2},1032,["width"]))],10,Jg),t("div",{class:"absolute top-0 opacity-50",style:Ke(`left: ${B(f)+5}px`)},Jt(b+1),5)]))),128))],4)],512),[[Tu,B(o)]]),B(o)?(k(),U("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[V(_)])):fe("v-if",!0)],64)}}});const Gg="/painless-authentication-with-access-token/assets/logo.b72bde5d.png",Zg={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Xg=_e({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const s=e;D(M);const o=Ft(s,"modelValue",n);function r(){o.value=!1}return(l,a)=>(k(),H(du,null,[B(o)?(k(),U("div",Zg,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>r())}),t("div",{class:Re(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[gt(l.$slots,"default")],2)])):fe("v-if",!0)],1024))}}),Qg={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ev=["innerHTML"],tv=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:Gg,alt:"Slidev"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),p("dev ")])])],-1),nv=_e({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const s=e;D(M);const o=Ft(s,"modelValue",n),r=E(()=>typeof ke.info=="string");return(l,a)=>(k(),H(Xg,{modelValue:B(o),"onUpdate:modelValue":a[0]||(a[0]=i=>xe(o)?o.value=i:null),class:"px-6 py-4"},{default:q(()=>[t("div",Qg,[B(r)?(k(),U("div",{key:0,class:"mb-4",innerHTML:B(ke).info},null,8,ev)):fe("v-if",!0),tv])]),_:1},8,["modelValue"]))}});const sv=["disabled","onKeydown"],ov=_e({__name:"Goto",setup(e){D(M);const n=W(),s=W(""),o=E(()=>{if(s.value.startsWith("/"))return!!We.find(a=>a.path===s.value.substring(1));{const a=+s.value;return!isNaN(a)&&a>0&&a<=Sp.value}});function r(){o.value&&(s.value.startsWith("/")?cs(s.value.substring(1)):cs(+s.value)),l()}function l(){Gn.value=!1}return de(Gn,async a=>{var i,c;a?(await Ge(),s.value="",(i=n.value)==null||i.focus()):(c=n.value)==null||c.blur()}),de(s,a=>{a.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(a,i)=>(k(),U("div",{id:"slidev-goto-dialog",class:Re(["fixed right-5 bg-main transform transition-all",B(Gn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Qo(t("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!B(Gn),class:Re(["outline-none bg-transparent",{"text-red-400":!B(o)&&s.value}]),placeholder:"Goto...",onKeydown:[ei(r,["enter"]),ei(l,["escape"])],onBlur:l},null,42,sv),[[Mh,s.value]])],2))}}),rv=_e({__name:"Controls",setup(e){D(M);const n=qt(),s=qt();return(o,r)=>(k(),U(Se,null,[V(Yg,{modelValue:B(st),"onUpdate:modelValue":r[0]||(r[0]=l=>xe(st)?st.value=l:null)},null,8,["modelValue"]),V(ov),B(n)?(k(),H(B(n),{key:0})):fe("v-if",!0),B(s)?(k(),H(B(s),{key:1,modelValue:B(kr),"onUpdate:modelValue":r[1]||(r[1]=l=>xe(kr)?kr.value=l:null)},null,8,["modelValue"])):fe("v-if",!0),B(ke).info?(k(),H(nv,{key:2,modelValue:B(Ps),"onUpdate:modelValue":r[2]||(r[2]=l=>xe(Ps)?Ps.value=l:null)},null,8,["modelValue"])):fe("v-if",!0)],64))}}),lv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},av=t("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),iv=[av];function cv(e,n){return k(),U("svg",lv,iv)}const uv={name:"carbon-settings-adjust",render:cv},pv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},dv=t("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),fv=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),hv=[dv,fv];function yv(e,n){return k(),U("svg",pv,hv)}const mv={name:"carbon-information",render:yv},gv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vv=t("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),_v=[vv];function wv(e,n){return k(),U("svg",gv,_v)}const bv={name:"carbon-download",render:wv},kv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bv=t("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),xv=t("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Av=[Bv,xv];function $v(e,n){return k(),U("svg",kv,Av)}const Sv={name:"carbon-user-speaker",render:$v},Ev={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tv=t("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Cv=t("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Ov=[Tv,Cv];function Dv(e,n){return k(),U("svg",Ev,Ov)}const Iv={name:"carbon-presentation-file",render:Dv},Pv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Mv=t("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Rv=[Mv];function Fv(e,n){return k(),U("svg",Pv,Rv)}const Lv={name:"carbon-pen",render:Fv},Hv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},qv=t("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Nv=t("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),jv=[qv,Nv];function Wv(e,n){return k(),U("svg",Hv,jv)}const Vv={name:"ph-cursor-duotone",render:Wv},Uv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Kv=t("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),zv=[Kv];function Jv(e,n){return k(),U("svg",Uv,zv)}const pp={name:"ph-cursor-fill",render:Jv},Yv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Gv=t("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Zv=[Gv];function Xv(e,n){return k(),U("svg",Yv,Zv)}const Qv={name:"carbon-sun",render:Xv},e_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t_=t("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),n_=[t_];function s_(e,n){return k(),U("svg",e_,n_)}const o_={name:"carbon-moon",render:s_},r_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l_=t("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),a_=[l_];function i_(e,n){return k(),U("svg",r_,a_)}const c_={name:"carbon-apps",render:i_},u_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},p_=t("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),d_=[p_];function f_(e,n){return k(),U("svg",u_,d_)}const h_={name:"carbon-arrow-right",render:f_},y_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m_=t("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),g_=[m_];function v_(e,n){return k(),U("svg",y_,g_)}const __={name:"carbon-arrow-left",render:v_},w_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},b_=t("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),k_=[b_];function B_(e,n){return k(),U("svg",w_,k_)}const x_={name:"carbon-maximize",render:B_},A_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$_=t("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),S_=[$_];function E_(e,n){return k(),U("svg",A_,S_)}const T_={name:"carbon-minimize",render:E_},C_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},O_=t("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),D_=[O_];function I_(e,n){return k(),U("svg",C_,D_)}const P_={name:"carbon-checkmark",render:I_},M_={class:"select-list"},R_={class:"title"},F_={class:"items"},L_=["onClick"],H_=_e({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const s=e;D(M);const o=Ft(s,"modelValue",n,{passive:!0});return(r,l)=>{const a=P_;return k(),U("div",M_,[t("div",R_,Jt(e.title),1),t("div",F_,[(k(!0),U(Se,null,eo(e.items,i=>(k(),U("div",{key:i.value,class:Re(["item",{active:B(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[V(a,{class:Re(["text-green-500",{"opacity-0":B(o)!==i.value}])},null,8,["class"]),p(" "+Jt(i.display||i.value),1)],10,L_))),128))])])}}});const Zt=(e,n)=>{const s=e.__vccOpts||e;for(const[o,r]of n)s[o]=r;return s},q_=Zt(H_,[["__scopeId","data-v-7dd0eaca"]]),N_={class:"text-sm"},j_=_e({__name:"Settings",setup(e){D(M);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(k(),U("div",N_,[V(q_,{modelValue:B(_o),"onUpdate:modelValue":o[0]||(o[0]=r=>xe(_o)?_o.value=r:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),W_={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},V_=_e({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const s=e;D(M);const o=Ft(s,"modelValue",n,{passive:!0}),r=W();return Gy(r,()=>{o.value=!1}),(l,a)=>(k(),U("div",{ref_key:"el",ref:r,class:"flex relative"},[t("button",{class:Re({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>o.value=!B(o))},[gt(l.$slots,"button",{class:Re({disabled:e.disabled})})],2),(k(),H(du,null,[B(o)?(k(),U("div",W_,[gt(l.$slots,"menu")])):fe("v-if",!0)],1024))],512))}}),U_={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ho={__name:"VerticalDivider",setup(e){return D(M),(n,s)=>(k(),U("div",U_))}},K_={render(){return[]}},z_={class:"icon-btn"},J_={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Y_={class:"my-auto"},G_={class:"opacity-50"},Z_=_e({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;D(M);const s=rl.smaller("md"),{isFullscreen:o,toggle:r}=tp,l=E(()=>pl.value?`?password=${pl.value}`:""),a=E(()=>`/presenter/${qe.value}${l.value}`),i=E(()=>`/${qe.value}${l.value}`),c=W(),u=()=>{c.value&&ss.value&&c.value.contains(ss.value)&&ss.value.blur()},d=E(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=qt(),h=qt();return Mn(()=>import("./DrawingControls.0bff9c69.js"),["assets/DrawingControls.0bff9c69.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.c383d634.js"]).then(m=>h.value=m.default),(m,y)=>{const _=T_,w=x_,b=__,A=h_,x=c_,S=o_,P=Qv,R=pp,N=Vv,Q=Lv,ue=Iv,he=So("RouterLink"),we=Sv,Ve=bv,Ne=mv,Me=uv;return k(),U("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[t("div",{class:Re(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",B(d)]),onMouseleave:u},[B(Vt)?fe("v-if",!0):(k(),U("button",{key:0,class:"icon-btn",onClick:y[0]||(y[0]=(...Oe)=>B(r)&&B(r)(...Oe))},[B(o)?(k(),H(_,{key:0})):(k(),H(w,{key:1}))])),t("button",{class:Re(["icon-btn",{disabled:!B(jb)}]),onClick:y[1]||(y[1]=(...Oe)=>B(pn)&&B(pn)(...Oe))},[V(b)],2),t("button",{class:Re(["icon-btn",{disabled:!B(Nb)}]),title:"Next",onClick:y[2]||(y[2]=(...Oe)=>B(un)&&B(un)(...Oe))},[V(A)],2),B(Vt)?fe("v-if",!0):(k(),U("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:y[3]||(y[3]=Oe=>B(np)())},[V(x)])),B(cl)?fe("v-if",!0):(k(),U("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:y[4]||(y[4]=Oe=>B(ip)())},[B(Zl)?(k(),H(S,{key:0})):(k(),H(P,{key:1}))])),V(ho),B(Vt)?fe("v-if",!0):(k(),U(Se,{key:3},[!B(Rt)&&!B(s)&&B(f)?(k(),U(Se,{key:0},[V(B(f)),V(ho)],64)):fe("v-if",!0),B(Rt)?(k(),U("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:y[5]||(y[5]=Oe=>Br.value=!B(Br))},[B(Br)?(k(),H(R,{key:0})):(k(),H(N,{key:1,class:"opacity-50"}))])):fe("v-if",!0)],64)),!B(ke).drawings.presenterOnly&&!B(Vt)?(k(),U(Se,{key:4},[t("button",{class:"icon-btn relative",title:"Drawing",onClick:y[6]||(y[6]=Oe=>Lt.value=!B(Lt))},[V(Q),B(Lt)?(k(),U("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ke({background:B(Sn).color})},null,4)):fe("v-if",!0)]),V(ho)],64)):fe("v-if",!0),B(Vt)?fe("v-if",!0):(k(),U(Se,{key:5},[B(Rt)?(k(),H(he,{key:0,to:B(i),class:"icon-btn",title:"Play Mode"},{default:q(()=>[V(ue)]),_:1},8,["to"])):fe("v-if",!0),B(Lb)?(k(),H(he,{key:1,to:B(a),class:"icon-btn",title:"Presenter Mode"},{default:q(()=>[V(we)]),_:1},8,["to"])):fe("v-if",!0),fe("v-if",!0)],64)),(k(),U(Se,{key:6},[B(ke).download?(k(),U("button",{key:0,class:"icon-btn",onClick:y[8]||(y[8]=(...Oe)=>B(dl)&&B(dl)(...Oe))},[V(Ve)])):fe("v-if",!0)],64)),!B(Rt)&&B(ke).info&&!B(Vt)?(k(),U("button",{key:7,class:"icon-btn",onClick:y[9]||(y[9]=Oe=>Ps.value=!B(Ps))},[V(Ne)])):fe("v-if",!0),!B(Rt)&&!B(Vt)?(k(),H(V_,{key:8},{button:q(()=>[t("button",z_,[V(Me)])]),menu:q(()=>[V(j_)]),_:1})):fe("v-if",!0),B(Vt)?fe("v-if",!0):(k(),H(ho,{key:9})),t("div",J_,[t("div",Y_,[p(Jt(B(qe))+" ",1),t("span",G_,"/ "+Jt(B(Sp)),1)])]),V(B(K_))],34)],512)}}}),dp={render(){return[]}},X_={__name:"Progress",setup(e){const n=D(M);return(s,o)=>(k(),U("div",{class:"absolute bottom-0 -left-2px h-1 progress",style:Ke(`width: ${Math.floor(100*(B(n).nav.currentPage/(B(n).nav.total-1)))}%;`)},null,4))}},Q_="/painless-authentication-with-access-token/images/symfonycon-logo-transparent.png",e1={key:0},t1={class:"absolute bottom-3 left-4 text-gray-500 font-300"},n1=t("img",{src:Q_,alt:"SymfonyCon Logo",class:"absolute bottom-1 right-2 w-32 conference-logo"},null,-1),s1={__name:"global-bottom",setup(e){const n=D(M);return(s,o)=>{const r=X_;return B(n).nav.currentPage>1?(k(),U("footer",e1,[t("span",t1,Jt(B(n).nav.currentPage),1),V(r),n1])):fe("v-if",!0)}}},fp={render(){return[Xe(s1)]}},o1={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},r1=_e({__name:"PresenterMouse",setup(e){return D(M),(n,s)=>{const o=pp;return B(vr).cursor?(k(),U("div",o1,[V(o,{class:"absolute",style:Ke({left:`${B(vr).cursor.x}%`,top:`${B(vr).cursor.y}%`})},null,8,["style"])])):fe("v-if",!0)}}}),l1=_e({__name:"SlidesShow",props:{context:null},setup(e){D(M),de(dt,()=>{var s,o;((s=dt.value)==null?void 0:s.meta)&&dt.value.meta.preload!==!1&&(dt.value.meta.__preloaded=!0),((o=Ar.value)==null?void 0:o.meta)&&Ar.value.meta.preload!==!1&&(Ar.value.meta.__preloaded=!0)},{immediate:!0});const n=qt();return Mn(()=>import("./DrawingLayer.850bbadb.js"),[]).then(s=>n.value=s.default),(s,o)=>(k(),U(Se,null,[fe(" Global Bottom "),V(B(fp)),fe(" Slides "),(k(!0),U(Se,null,eo(B(We),r=>{var l,a;return k(),U(Se,{key:r.path},[((l=r.meta)==null?void 0:l.__preloaded)||r===B(dt)?Qo((k(),H(B(ea),{key:0,is:r==null?void 0:r.component,clicks:r===B(dt)?B(Tt):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Re(B(Ql)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Tu,r===B(dt)]]):fe("v-if",!0)],64)}),128)),fe(" Global Top "),V(B(dp)),B(n)?(k(),H(B(n),{key:0})):fe("v-if",!0),B(Rt)?fe("v-if",!0):(k(),H(r1,{key:1}))],64))}}),a1=_e({__name:"Play",setup(e){D(M),Hg();const n=W();function s(l){var a;Ni.value||((a=l.target)==null?void 0:a.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?un():pn())}Ub(n);const o=E(()=>Y0.value||Ni.value);qt();const r=qt();return Mn(()=>import("./DrawingControls.0bff9c69.js"),["assets/DrawingControls.0bff9c69.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.c383d634.js"]).then(l=>r.value=l.default),(l,a)=>(k(),U(Se,null,[t("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:Ke(B(Hu))},[V(up,{class:"w-full h-full",style:Ke({background:"var(--slidev-slide-container-background, black)"}),width:B(oa)?B(Dn).width.value:void 0,scale:B(_o),onPointerdown:s},{default:q(()=>[V(l1,{context:"slide"})]),controls:q(()=>[t("div",{class:Re(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[B(o)?"opacity-100 right-0":"opacity-0 p-2",B(zs)?"pointer-events-none":""]])},[V(Z_,{class:"m-auto",persist:B(o)},null,8,["persist"])],2),!B(ke).drawings.presenterOnly&&!B(Vt)&&B(r)?(k(),H(B(r),{key:0,class:"ml-0"})):fe("v-if",!0)]),_:1},8,["style","width","scale"]),fe("v-if",!0)],4),V(rv)],64))}});function hp(e){const n=E(()=>e.value.path),s=E(()=>We.length-1),o=E(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),r=E(()=>rr(o.value)),l=E(()=>We.find(h=>h.path===`${o.value}`)),a=E(()=>{var h,m,y;return(y=(m=(h=l.value)==null?void 0:h.meta)==null?void 0:m.slide)==null?void 0:y.id}),i=E(()=>{var h,m;return((m=(h=l.value)==null?void 0:h.meta)==null?void 0:m.layout)||(o.value===1?"cover":"default")}),c=E(()=>We.find(h=>h.path===`${Math.min(We.length,o.value+1)}`)),u=E(()=>We.filter(h=>{var m,y;return(y=(m=h.meta)==null?void 0:m.slide)==null?void 0:y.title}).reduce((h,m)=>(ra(h,m),h),[])),d=E(()=>la(u.value,l.value)),f=E(()=>aa(d.value));return{route:e,path:n,total:s,currentPage:o,currentPath:r,currentRoute:l,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:f}}function yp(e,n,s){const o=W(0);Ge(()=>{yt.afterEach(async()=>{await Ge(),o.value+=1})});const r=E(()=>{var c,u;return o.value,((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),l=E(()=>{var c,u,d;return+((d=(u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?d:r.value.length)}),a=E(()=>s.value<We.length-1||e.value<l.value),i=E(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:l,hasNext:a,hasPrev:i}}const i1=["id"],Xi=_e({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:n}){const s=e,o=Ft(s,"clicksElements",n),r=E(()=>({height:`${Jl}px`,width:`${cn}px`})),l=qt();Mn(()=>import("./DrawingPreview.7c4d37c2.js"),[]).then(u=>l.value=u.default);const a=E(()=>s.clicks),i=yp(a,s.nav.currentRoute,s.nav.currentPage),c=E(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return ft(M,Ie({nav:{...s.nav,...i},configs:ke,themeConfigs:E(()=>ke.themeConfig)})),(u,d)=>{var f;return k(),U("div",{id:B(c),class:"slide-container",style:Ke(B(r))},[V(B(fp)),V(B(ea),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":B(o),"onUpdate:clicks-elements":d[0]||(d[0]=h=>xe(o)?o.value=h:null),clicks:B(a),"clicks-disabled":!1,class:Re(B(Ql)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),B(l)?(k(),H(B(l),{key:0,page:+e.route.path},null,8,["page"])):fe("v-if",!0),V(B(dp))],12,i1)}}}),c1=_e({__name:"PrintSlide",props:{route:null},setup(e){var l;const n=e;D(M);const s=Ie(((l=n.route.meta)==null?void 0:l.__clicksElements)||[]),o=E(()=>n.route),r=hp(o);return(a,i)=>(k(),U(Se,null,[V(Xi,{"clicks-elements":s,"onUpdate:clicks-elements":i[0]||(i[0]=c=>xe(s)?s.value=c:null),clicks:0,nav:B(r),route:B(o)},null,8,["clicks-elements","nav","route"]),B(Ms)?fe("v-if",!0):(k(!0),U(Se,{key:0},eo(s.length,c=>(k(),H(Xi,{key:c,clicks:c,nav:B(r),route:B(o)},null,8,["clicks","nav","route"]))),128))],64))}}),u1={id:"print-content"},p1=_e({__name:"PrintContainer",props:{width:null},setup(e){const n=e;D(M);const s=E(()=>n.width),o=E(()=>n.width/an),r=E(()=>s.value/o.value),l=E(()=>r.value<an?s.value/cn:o.value*an/cn),a=We.slice(0,-1),i=E(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ft(Lu,l),(c,u)=>(k(),U("div",{id:"print-container",class:Re(B(i))},[t("div",u1,[(k(!0),U(Se,null,eo(B(a),d=>(k(),H(c1,{key:d.path,route:d},null,8,["route"]))),128))]),gt(c.$slots,"controls")],2))}});const d1=_e({__name:"Print",setup(e){D(M);function n(s,{slots:o}){if(o.default)return Xe("style",o.default())}return ds(()=>{oa?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,o)=>(k(),U(Se,null,[V(n,null,{default:q(()=>[p(" @page { size: "+Jt(B(cn))+"px "+Jt(B(Jl))+"px; margin: 0px; } ",1)]),_:1}),t("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Ke(B(Hu))},[V(p1,{class:"w-full h-full",style:Ke({background:"var(--slidev-slide-container-background, black)"}),width:B(Dn).width.value},null,8,["style","width"])],4)],64))}});const f1={class:"slidev-layout end"},h1={__name:"end",setup(e){return D(M),(n,s)=>(k(),U("div",f1," END "))}},y1=Zt(h1,[["__scopeId","data-v-ab32435f"]]),m1={href:"{{ link }}"},g1=t("a",{href:"https://unsplash.com/"},"Unsplash",-1),v1=_e({__name:"Credits",props:{link:{default:""},name:{default:""},side:{default:"right"}},setup(e){const n=e;D(M),W(n.link);const s=W(n.name),o=W(n.side);return(r,l)=>(k(),U("small",{class:Re(["absolute bottom-0 p-1 bg-dark-800 bg-opacity-90 font-light text-xs text-slate-200 opacity-60",`${o.value}-0`])},[p(" Photo by "),t("a",m1,Jt(s.value),1),p(" on "),g1],2))}}),_1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},w1=t("path",{fill:"currentColor",d:"M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.436 15.436 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z"},null,-1),b1=[w1];function k1(e,n){return k(),U("svg",_1,b1)}const B1={name:"cib-github",render:k1},x1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A1=t("path",{fill:"currentColor",d:"M31.937 6.093a13.359 13.359 0 0 1-3.765 1.032a6.603 6.603 0 0 0 2.885-3.631a13.683 13.683 0 0 1-4.172 1.579a6.56 6.56 0 0 0-11.178 5.973c-5.453-.255-10.287-2.875-13.52-6.833a6.458 6.458 0 0 0-.891 3.303a6.555 6.555 0 0 0 2.916 5.457a6.518 6.518 0 0 1-2.968-.817v.079a6.567 6.567 0 0 0 5.26 6.437a6.758 6.758 0 0 1-1.724.229c-.421 0-.823-.041-1.224-.115a6.59 6.59 0 0 0 6.14 4.557a13.169 13.169 0 0 1-8.135 2.801a13.01 13.01 0 0 1-1.563-.088a18.656 18.656 0 0 0 10.079 2.948c12.067 0 18.661-9.995 18.661-18.651c0-.276 0-.557-.021-.839a13.132 13.132 0 0 0 3.281-3.396z"},null,-1),$1=[A1];function S1(e,n){return k(),U("svg",x1,$1)}const E1={name:"cib-twitter",render:S1},T1={class:"slidev-icon",viewBox:"0 0 512 512",width:"1.2em",height:"1.2em"},C1=t("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm133.74 143.54c-11.47.41-19.4-6.45-19.77-16.87c-.27-9.18 6.68-13.44 6.53-18.85c-.23-6.55-10.16-6.82-12.87-6.67c-39.78 1.29-48.59 57-58.89 113.85c21.43 3.15 36.65-.72 45.14-6.22c12-7.75-3.34-15.72-1.42-24.56c4-18.16 32.55-19 32 5.3c-.36 17.86-25.92 41.81-77.6 35.7c-10.76 59.52-18.35 115-58.2 161.72c-29 34.46-58.4 39.82-71.58 40.26c-24.65.85-41-12.31-41.58-29.84c-.56-17 14.45-26.26 24.31-26.59c21.89-.75 30.12 25.67 14.88 34c-12.09 9.71.11 12.61 2.05 12.55c10.42-.36 17.34-5.51 22.18-9c24-20 33.24-54.86 45.35-118.35c8.19-49.66 17-78 18.23-82c-16.93-12.75-27.08-28.55-49.85-34.72c-15.61-4.23-25.12-.63-31.81 7.83c-7.92 10-5.29 23 2.37 30.7l12.63 14c15.51 17.93 24 31.87 20.8 50.62c-5.06 29.93-40.72 52.9-82.88 39.94c-36-11.11-42.7-36.56-38.38-50.62c7.51-24.15 42.36-11.72 34.62 13.6c-2.79 8.6-4.92 8.68-6.28 13.07c-4.56 14.77 41.85 28.4 51-1.39c4.47-14.52-5.3-21.71-22.25-39.85c-28.47-31.75-16-65.49 2.95-79.67C204.23 140.13 251.94 197 262 205.29c37.17-109 100.53-105.46 102.43-105.53c25.16-.81 44.19 10.59 44.83 28.65c.25 7.69-4.17 22.59-19.52 23.13z"},null,-1),O1=[C1];function D1(e,n){return k(),U("svg",T1,O1)}const I1={name:"fa-brands-symfony",render:D1},P1="/painless-authentication-with-access-token/images/symfonycon-logo-darkmode-transparent.png",M1="/painless-authentication-with-access-token/images/me.jpg",R1="/painless-authentication-with-access-token/images/jolicode.svg";function Qi(e){return e.startsWith("/")?"/painless-authentication-with-access-token/"+e.slice(1):e}function F1(e,n=!1){const s=e&&e[0]==="#"&&e.startsWith("rgb"),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${Qi(e)})`:`url("${Qi(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const L1=_e({__name:"intro-image",props:{image:{type:String}},setup(e){const n=e;D(M);const s=E(()=>F1(n.image));return(o,r)=>(k(),U("div",{class:"slidev-layout w-full h-full intro-image",style:Ke(B(s))},[gt(o.$slots,"default")],4))}}),H1=t("div",{class:"absolute top-10 text-slate-200 font-serif"},[t("h1",null,"Painless Authentication"),t("h2",null,"with Access Tokens")],-1),q1=t("img",{src:P1,alt:"SymfonyCon Logo",class:"absolute bottom-1 right-2 w-32"},null,-1),N1={class:"absolute bottom-16 right-10 text-right text-slate-200 font-serif"},j1=t("img",{class:"filter drop-shadow-md ml-auto mr-0 mb-4 clothoid-corner",src:M1,alt:"Mathieu Santostefano",width:"150"},null,-1),W1=t("h2",null,"Mathieu Santostefano",-1),V1=t("p",null,[p("\u{1F9D1}\u200D\u{1F4BB} Web developer at\xA0"),t("img",{src:R1,width:"120",class:"inline"})],-1),U1=t("a",{href:"https://twitter.com/welcomattic"},"@welcomattic",-1),K1=t("a",{href:"https://github.com/welcomattic"},"@welcomattic",-1),z1={__name:"1",setup(e){const n={layout:"intro-image",image:"images/cover.jpg",theme:"apple-basic",highlighter:"shiki",lineNumbers:!0,favicon:"symfony.ico",info:`## SymfonyCon Disneyland Paris 2022
`,drawings:{persist:!1},colorSchema:"light",fonts:{provider:"none",local:"SF Pro Display,Josefin Sans",sans:"SF Pro Display",serif:"Josefin Sans"},srcSequence:"content/cover.md"};return D(M),(s,o)=>{const r=I1,l=E1,a=B1,i=v1;return k(),H(L1,ee(X(n)),{default:q(()=>[H1,q1,t("div",N1,[j1,W1,V1,t("p",null,[V(r),p(" Symfony Core Team Member")]),t("p",null,[V(l,{class:"text-sky-500"}),p(" Twitter "),U1]),t("p",null,[V(a),p(" GitHub "),K1])]),V(i,{link:"https://unsplash.com/@kellysikkema",name:"Kelly Sikkema",side:"left"})]),_:1},16)}}},J1="/painless-authentication-with-access-token/images/core-team-mail.png",Y1={class:"slidev-layout center h-full grid place-content-center statement"},G1={class:"my-auto"},ta={__name:"statement",setup(e){return D(M),(n,s)=>(k(),U("div",Y1,[t("div",G1,[gt(n.$slots,"default")])]))}},Z1=t("h1",null,"\u{1F389} On nov. 18 2021, I received an email to join the Core Team",-1),X1=t("img",{src:J1,class:"-mt-8 w-8/12 mx-auto"},null,-1),Q1={__name:"2",setup(e){const n={layout:"statement"};return D(M),(s,o)=>(k(),H(ta,ee(X(n)),{default:q(()=>[Z1,X1]),_:1},16))}},e8={class:"slidev-layout h-full grid section"},t8={class:"my-auto"},hn={__name:"section",setup(e){return D(M),(n,s)=>(k(),U("div",e8,[t("div",t8,[gt(n.$slots,"default")])]))}},n8=t("h1",null,"\u{1F510} Who has Access Token authentication in their app?",-1),s8={__name:"3",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),H(hn,ee(X(n)),{default:q(()=>[n8]),_:1},16))}},o8=_e({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var l,a;const e=Pa("click"),n=Pa("after"),s=(i,c,u)=>Qo(i,[[c,this.at!=null?+this.at+u:null,"",{hide:this.hide,fade:this.fade}]]);let o=(a=(l=this.$slots).default)==null?void 0:a.call(l);if(!o)return;o=My(o);const r=i=>i.map((c,u)=>In(c)?s(Xe(c),u%this.every===0?e:n,Math.floor(u/this.every)):c);return o.length===1&&["ul","ol"].includes(o[0].type)&&Array.isArray(o[0].children)?Xe(o[0],{},[r(o[0].children)]):r(o)}}),sr=_e({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return V(o8,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),r8=t("h1",null,"\u{1F512} Who is working with the new Symfony Security?",-1),l8=t("p",null,[p("Thank you for it, "),t("a",{href:"https://github.com/WouterJ",target:"_blank",rel:"noopener"},"Wouter"),p(" \u{1F64F}")],-1),a8={__name:"4",setup(e){const n={layout:"section"};return D(M),(s,o)=>{const r=sr;return k(),H(hn,ee(X(n)),{default:q(()=>[r8,V(r,null,{default:q(()=>[l8]),_:1})]),_:1},16)}}},i8={class:"slidev-layout default"},pe={__name:"default",setup(e){return D(M),(n,s)=>(k(),U("div",i8,[gt(n.$slots,"default")]))}},c8=t("h1",null,"\u2728 The New Security System",-1),u8=t("ul",null,[t("li",null,"Removed everything but Guards"),t("li",null,"Moved to an event-based system"),t("li",null,"Authenticator based: instantiate a Passport with Badges")],-1),p8=t("blockquote",null,[t("p",null,"Your job is to use Authenticator or implement your own")],-1),d8={__name:"5",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[c8,u8,p8]),_:1},16))}},f8=t("h1",null,"\u2728 The New Security System",-1),h8=t("h2",null,"Event-based system",-1),y8=t("ul",null,[t("li",null,[p("You can interact on different levels "),t("ul",null,[t("li",null,[t("code",null,"CheckPassportEvent")]),t("li",null,[t("code",null,"AuthenticationTokenCreatedEvent")]),t("li",null,[t("code",null,"AuthenticationSuccessEvent")]),t("li",null,[t("code",null,"LoginSuccessEvent")]),t("li",null,[t("code",null,"LoginFailureEvent")]),t("li",null,[t("code",null,"LogoutEvent")]),t("li",null,[t("code",null,"TokenDeauthenticatedEvent")]),t("li",null,[t("code",null,"SwitchUserEvent")])])])],-1),m8={__name:"6",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[f8,h8,y8]),_:1},16))}},g8=t("h1",null,"\u2728 The New Security System",-1),v8=t("h2",null,"As before, you can still handle what happens in case of authentication success or failure",-1),_8=t("blockquote",null,[t("p",null,[p("\u{1F929} Like many things since the last years in Symfony, it improves the "),t("strong",null,"DX")])],-1),w8={__name:"7",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[g8,v8,_8]),_:1},16))}},b8=t("h1",null,"\u{1FA99} What is an Access Token?",-1),k8=t("ul",null,[t("li",null,[t("code",null,"i-am-an-4cc3ss-t0k3n"),p(),t("strong",null,"could be an Access Token")])],-1),B8=t("ul",null,[t("li",null,[t("code",null,"mF_9.B5f-4.1JqM"),p(),t("strong",null,"could be an Access Token")])],-1),x8=t("ul",null,[t("li",null,[t("code",null,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4..."),p(),t("strong",null,"could be an Access Token")])],-1),A8=t("ul",null,[t("li",null,[p("\u{1F32E} "),t("strong",null,"could be an Access Token")])],-1),$8=t("blockquote",null,[t("p",null,[p("\u{1F521} "),t("strong",null,"An Access Token is represented by a string.")])],-1),S8={__name:"8",setup(e){const n={};return D(M),(s,o)=>{const r=sr;return k(),H(pe,ee(X(n)),{default:q(()=>[b8,V(r,null,{default:q(()=>[k8]),_:1}),V(r,null,{default:q(()=>[B8]),_:1}),V(r,null,{default:q(()=>[x8]),_:1}),V(r,null,{default:q(()=>[A8]),_:1}),V(r,null,{default:q(()=>[$8]),_:1})]),_:1},16)}}},E8=t("h1",null,"\u{1F4D1} Use cases",-1),T8=t("p",null,[p("Authentication with "),t("strong",null,"Access Token"),p(" is useful in some contexts, like")],-1),C8=t("ul",null,[t("li",null,"Stateless user login"),t("li",null,[t("strong",null,"API Gateway"),p(" in front of private APIs")]),t("li",null,"Application that access to personal data provided by a third party"),t("li",null,[t("strong",null,"Micro-services"),p(" between them")]),t("li",null,[p("Client applications of a "),t("strong",null,"SaaS API")]),t("li",null,"\u2026")],-1),O8={__name:"9",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[E8,T8,C8]),_:1},16))}},D8="/painless-authentication-with-access-token/images/auth-schema.png",I8=t("h1",null,"\u{1F928} Ok, so?",-1),P8=t("ul",null,[t("li",null,[p("Must be sent in a "),t("strong",null,"HTTP request"),p(" to fetch a protected resource")]),t("li",null,[p("The application expects to find a token, \u{1F449} "),t("strong",null,"validate"),p(" \u{1F448} it and decide to allow access or not")])],-1),M8=t("img",{src:D8,class:"mt-10 w-10/12 mx-auto"},null,-1),R8={__name:"10",setup(e){const n={};return D(M),(s,o)=>{const r=sr;return k(),H(pe,ee(X(n)),{default:q(()=>[I8,P8,V(r,null,{default:q(()=>[M8]),_:1})]),_:1},16)}}},F8=t("h1",null,"\u{1F6C2} Token issuer",-1),L8=t("h2",null,"Let\u2019s assume our tokens come from an external authentication server,",-1),H8=t("h2",null,"the user identity has been verified by this server",-1),q8={__name:"11",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),H(hn,ee(X(n)),{default:q(()=>[F8,L8,H8]),_:1},16))}},N8=t("h1",null,"\u2705 Validate the token?",-1),j8=t("h2",null,[p("The validation process is up to "),t("u",null,"you")],-1),W8=t("ul",null,[t("li",null,[p("Check if the string is "),t("strong",null,"present"),p(" in a database")]),t("li",null,[t("strong",null,"Compute a hash"),p(" and compare it to the expected one")]),t("li",null,[t("strong",null,"Decode the token"),p(" (base64, \u2026) and make "),t("strong",null,"assertions"),p(" on decoded values")]),t("li",null,[p("Ensure the "),t("strong",null,"expiration date"),p(" is not passed if needed")]),t("li",null,[p("Check if the token has been "),t("strong",null,"revoked"),p(" or not")]),t("li",null,[p("Call an "),t("strong",null,"OpenID Connect"),p(" server to validate the token")]),t("li",null,"\u2026")],-1),V8={__name:"12",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[N8,j8,W8]),_:1},16))}},U8=t("h1",null,"\u{1F914} How to set up an Access Token auth with Symfony?",-1),K8={__name:"13",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),H(hn,ee(X(n)),{default:q(()=>[U8]),_:1},16))}},z8=t("h1",null,"\u{1F3AC} Marvel Scenarios Manager, a web app for writers and reviewers",-1),J8=t("ul",null,[t("li",null,"Each user (Writers and Reviewers) has an API key"),t("li",null,[p("Admin for Writers "),t("ul",null,[t("li",null,"Form login authentication"),t("li",null,"Writers can create Scenarios")])]),t("li",null,[p("Web app for Reviewers "),t("ul",null,[t("li",null,"Call the private API using API Key obtained after Reviewer login")])]),t("li",null,"Admins can revoke API key at any time")],-1),Y8={__name:"14",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[z8,J8]),_:1},16))}},G8="/painless-authentication-with-access-token/images/demo-app-schema.png",Z8=t("img",{src:G8},null,-1),X8={__name:"15",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[Z8]),_:1},16))}},Q8="/painless-authentication-with-access-token/images/demo-app-schema-2.png",e5=t("img",{src:Q8},null,-1),t5={__name:"16",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[e5]),_:1},16))}},n5=t("h1",null,"\u{1F449} With Symfony <= 6.1",-1),s5=t("h2",null,"Create a custom Authenticator",-1),o5=t("br",null,null,-1),r5=t("ol",null,[t("li",null,[p("Extract "),t("strong",null,"token")]),t("li",null,[p("Decode "),t("strong",null,"token"),p(" if needed (JWT, SAML, \u2026)")]),t("li",null,[p("Check "),t("strong",null,"token"),p(" validity")]),t("li",null,[p("Retrieve user identifier from the "),t("strong",null,"token")]),t("li",null,"Then load User object"),t("li",null,"Handle authentication failure cases")],-1),l5={__name:"17",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[n5,s5,o5,r5]),_:1},16))}},a5=t("h1",null,[p("\u{1F442} Have you heard about "),t("a",{href:"https://datatracker.ietf.org/doc/html/rfc6750",target:"_blank",rel:"noopener"},"RFC 6750"),p("?")],-1),i5=t("ul",null,[t("li",null,[p("Token transportation "),t("ul",null,[t("li",null,[p("In "),t("strong",null,"request header"),p("? \u27A1 "),t("code",null,"Authorization"),p(" header")]),t("li",null,[p("In "),t("strong",null,"query string"),p("? \u27A1 parameter "),t("code",null,"access_token")]),t("li",null,[p("In "),t("strong",null,"request body"),p("? \u27A1 parameter "),t("code",null,"access_token")])])])],-1),c5=t("ul",null,[t("li",null,[t("code",null,"WWW-Authenticate"),p(),t("strong",null,"response header"),p(" in case of failure")])],-1),u5=t("ul",null,[t("li",null,[t("strong",null,"HTTPS"),p(" protocol mandatory")])],-1),p5={__name:"18",setup(e){const n={};return D(M),(s,o)=>{const r=sr;return k(),H(pe,ee(X(n)),{default:q(()=>[a5,i5,V(r,null,{default:q(()=>[c5]),_:1}),V(r,null,{default:q(()=>[u5]),_:1})]),_:1},16)}}},d5="/painless-authentication-with-access-token/images/auth-process-61.jpg";const f5=e=>(Fn("data-v-178f2f05"),e=e(),Ln(),e),h5=f5(()=>t("img",{src:d5,width:"900",class:"mx-auto"},null,-1)),y5={__name:"19",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[h5]),_:1},16))}},m5=Zt(y5,[["__scopeId","data-v-178f2f05"]]),g5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},v5=t("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),_5=[v5];function w5(e,n){return k(),U("svg",g5,_5)}const b5={name:"ph-clipboard",render:w5},k5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},B5=t("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),x5=[B5];function A5(e,n){return k(),U("svg",k5,x5)}const $5={name:"ph-check-circle",render:A5};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function mp(e){return typeof e>"u"||e===null}function S5(e){return typeof e=="object"&&e!==null}function E5(e){return Array.isArray(e)?e:mp(e)?[]:[e]}function T5(e,n){var s,o,r,l;if(n)for(l=Object.keys(n),s=0,o=l.length;s<o;s+=1)r=l[s],e[r]=n[r];return e}function C5(e,n){var s="",o;for(o=0;o<n;o+=1)s+=e;return s}function O5(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var D5=mp,I5=S5,P5=E5,M5=C5,R5=O5,F5=T5,na={isNothing:D5,isObject:I5,toArray:P5,repeat:M5,isNegativeZero:R5,extend:F5};function gp(e,n){var s="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(s+=`

`+e.mark.snippet),o+" "+s):o}function Ys(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=gp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ys.prototype=Object.create(Error.prototype);Ys.prototype.constructor=Ys;Ys.prototype.toString=function(n){return this.name+": "+gp(this,n)};var xn=Ys,L5=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],H5=["scalar","sequence","mapping"];function q5(e){var n={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(o){n[String(o)]=s})}),n}function N5(e,n){if(n=n||{},Object.keys(n).forEach(function(s){if(L5.indexOf(s)===-1)throw new xn('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=q5(n.styleAliases||null),H5.indexOf(this.kind)===-1)throw new xn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Qe=N5;function ec(e,n){var s=[];return e[n].forEach(function(o){var r=s.length;s.forEach(function(l,a){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(r=a)}),s[r]=o}),s}function j5(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return e}function ul(e){return this.extend(e)}ul.prototype.extend=function(n){var s=[],o=[];if(n instanceof Qe)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new xn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(l){if(!(l instanceof Qe))throw new xn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new xn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new xn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof Qe))throw new xn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(ul.prototype);return r.implicit=(this.implicit||[]).concat(s),r.explicit=(this.explicit||[]).concat(o),r.compiledImplicit=ec(r,"implicit"),r.compiledExplicit=ec(r,"explicit"),r.compiledTypeMap=j5(r.compiledImplicit,r.compiledExplicit),r};var W5=ul,V5=new Qe("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),U5=new Qe("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),K5=new Qe("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),z5=new W5({explicit:[V5,U5,K5]});function J5(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Y5(){return null}function G5(e){return e===null}var Z5=new Qe("tag:yaml.org,2002:null",{kind:"scalar",resolve:J5,construct:Y5,predicate:G5,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function X5(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Q5(e){return e==="true"||e==="True"||e==="TRUE"}function e6(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var t6=new Qe("tag:yaml.org,2002:bool",{kind:"scalar",resolve:X5,construct:Q5,predicate:e6,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function n6(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function s6(e){return 48<=e&&e<=55}function o6(e){return 48<=e&&e<=57}function r6(e){if(e===null)return!1;var n=e.length,s=0,o=!1,r;if(!n)return!1;if(r=e[s],(r==="-"||r==="+")&&(r=e[++s]),r==="0"){if(s+1===n)return!0;if(r=e[++s],r==="b"){for(s++;s<n;s++)if(r=e[s],r!=="_"){if(r!=="0"&&r!=="1")return!1;o=!0}return o&&r!=="_"}if(r==="x"){for(s++;s<n;s++)if(r=e[s],r!=="_"){if(!n6(e.charCodeAt(s)))return!1;o=!0}return o&&r!=="_"}if(r==="o"){for(s++;s<n;s++)if(r=e[s],r!=="_"){if(!s6(e.charCodeAt(s)))return!1;o=!0}return o&&r!=="_"}}if(r==="_")return!1;for(;s<n;s++)if(r=e[s],r!=="_"){if(!o6(e.charCodeAt(s)))return!1;o=!0}return!(!o||r==="_")}function l6(e){var n=e,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function a6(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!na.isNegativeZero(e)}var i6=new Qe("tag:yaml.org,2002:int",{kind:"scalar",resolve:r6,construct:l6,predicate:a6,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),c6=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function u6(e){return!(e===null||!c6.test(e)||e[e.length-1]==="_")}function p6(e){var n,s;return n=e.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var d6=/^[-+]?[0-9]+e/;function f6(e,n){var s;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(na.isNegativeZero(e))return"-0.0";return s=e.toString(10),d6.test(s)?s.replace("e",".e"):s}function h6(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||na.isNegativeZero(e))}var y6=new Qe("tag:yaml.org,2002:float",{kind:"scalar",resolve:u6,construct:p6,predicate:h6,represent:f6,defaultStyle:"lowercase"}),m6=z5.extend({implicit:[Z5,t6,i6,y6]}),g6=m6,vp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),_p=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function v6(e){return e===null?!1:vp.exec(e)!==null||_p.exec(e)!==null}function _6(e){var n,s,o,r,l,a,i,c=0,u=null,d,f,h;if(n=vp.exec(e),n===null&&(n=_p.exec(e)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,r=+n[3],!n[4])return new Date(Date.UTC(s,o,r));if(l=+n[4],a=+n[5],i=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(d=+n[10],f=+(n[11]||0),u=(d*60+f)*6e4,n[9]==="-"&&(u=-u)),h=new Date(Date.UTC(s,o,r,l,a,i,c)),u&&h.setTime(h.getTime()-u),h}function w6(e){return e.toISOString()}var b6=new Qe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:v6,construct:_6,instanceOf:Date,represent:w6});function k6(e){return e==="<<"||e===null}var B6=new Qe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:k6}),sa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function x6(e){if(e===null)return!1;var n,s,o=0,r=e.length,l=sa;for(s=0;s<r;s++)if(n=l.indexOf(e.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function A6(e){var n,s,o=e.replace(/[\r\n=]/g,""),r=o.length,l=sa,a=0,i=[];for(n=0;n<r;n++)n%4===0&&n&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|l.indexOf(o.charAt(n));return s=r%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function $6(e){var n="",s=0,o,r,l=e.length,a=sa;for(o=0;o<l;o++)o%3===0&&o&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+e[o];return r=l%3,r===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):r===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):r===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function S6(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var E6=new Qe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:x6,construct:A6,predicate:S6,represent:$6}),T6=Object.prototype.hasOwnProperty,C6=Object.prototype.toString;function O6(e){if(e===null)return!0;var n=[],s,o,r,l,a,i=e;for(s=0,o=i.length;s<o;s+=1){if(r=i[s],a=!1,C6.call(r)!=="[object Object]")return!1;for(l in r)if(T6.call(r,l))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(l)===-1)n.push(l);else return!1}return!0}function D6(e){return e!==null?e:[]}var I6=new Qe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:O6,construct:D6}),P6=Object.prototype.toString;function M6(e){if(e===null)return!0;var n,s,o,r,l,a=e;for(l=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(o=a[n],P6.call(o)!=="[object Object]"||(r=Object.keys(o),r.length!==1))return!1;l[n]=[r[0],o[r[0]]]}return!0}function R6(e){if(e===null)return[];var n,s,o,r,l,a=e;for(l=new Array(a.length),n=0,s=a.length;n<s;n+=1)o=a[n],r=Object.keys(o),l[n]=[r[0],o[r[0]]];return l}var F6=new Qe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:M6,construct:R6}),L6=Object.prototype.hasOwnProperty;function H6(e){if(e===null)return!0;var n,s=e;for(n in s)if(L6.call(s,n)&&s[n]!==null)return!1;return!0}function q6(e){return e!==null?e:{}}var N6=new Qe("tag:yaml.org,2002:set",{kind:"mapping",resolve:H6,construct:q6});g6.extend({implicit:[b6,B6],explicit:[E6,I6,F6,N6]});function tc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var j6=new Array(256),W6=new Array(256);for(var Kn=0;Kn<256;Kn++)j6[Kn]=tc(Kn)?1:0,W6[Kn]=tc(Kn);function V6(e){return Array.from(new Set(e))}function nc(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const r=[];let l=n;for(;l<s;)r.push(l),l+=o||1;return r}function U6(e,n){if(!n||n==="all"||n==="*")return nc(1,e+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[r,l]=o.split("-",2);s.push(...nc(+r,l?+l+1:e+1))}return V6(s).filter(o=>o<=e).sort((o,r)=>o-r)}const K6=["title"],jt=_e({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;D(M);const s=D(Cs),o=D(Bn),r=D(Os);function l(f=5){const h=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",y=m.length;for(let _=0;_<f;_++)h.push(m.charAt(Math.floor(Math.random()*y)));return h.join("")}const a=W(),i=Hn();fs(()=>{const f=n.at==null?o==null?void 0:o.value.length:n.at,h=E(()=>r!=null&&r.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),n.ranges.length-1)),m=E(()=>n.ranges[h.value]||"");if(n.ranges.length>=2&&!(r!=null&&r.value)){const y=l(),_=Ry(n.ranges.length-1).map(w=>y+w);o!=null&&o.value&&(o.value.push(..._),Xo(()=>_.forEach(w=>Qr(o.value,w)),i))}ds(()=>{if(!a.value)return;const _=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const w of _){const b=Array.from(w.querySelectorAll(".line")),A=U6(b.length,m.value);if(b.forEach((x,S)=>{const P=A.includes(S+1);x.classList.toggle(wn,!0),x.classList.toggle("highlighted",P),x.classList.toggle("dishonored",!P)}),n.maxHeight){const x=w.querySelector(".line.highlighted");x&&x.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=lm();function d(){var h,m;const f=(m=(h=a.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:m.textContent;f&&u(f)}return(f,h)=>{const m=$5,y=b5;return k(),U("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:Ke({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[gt(f.$slots,"default"),B(ke).codeCopy?(k(),U("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:B(c)?"Copied":"Copy",onClick:h[0]||(h[0]=_=>d())},[B(c)?(k(),H(m,{key:0,class:"p-2 w-8 h-8"})):(k(),H(y,{key:1,class:"p-2 w-8 h-8"}))],8,K6)):fe("v-if",!0)],4)}}}),z6=t("h1",null,"\u{1F9D1}\u200D\u{1F4BB} Some code",-1),J6=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#93A1A1"}},"/** Simplified version */")]),p(`
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
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1),Y6={__name:"20",setup(e){const n={};return D(M),(s,o)=>{const r=jt;return k(),H(pe,ee(X(n)),{default:q(()=>[z6,V(r,at({},{ranges:[""]}),{default:q(()=>[J6]),_:1},16)]),_:1},16)}}},G6=t("h1",null,"\u{1F9D1}\u200D\u{1F4BB} Some code",-1),Z6=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"public"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"function"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#268BD2"}},"authenticate"),t("span",{style:{color:"#657B83"}},"("),t("span",{style:{color:"#859900"}},"Request"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"$"),t("span",{style:{color:"#268BD2"}},"req"),t("span",{style:{color:"#657B83"}},")"),t("span",{style:{color:"#859900"}},":"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#859900"}},"Passport")]),p(`
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
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1),X6={__name:"21",setup(e){const n={};return D(M),(s,o)=>{const r=jt;return k(),H(pe,ee(X(n)),{default:q(()=>[G6,V(r,at({},{ranges:[""]}),{default:q(()=>[Z6]),_:1},16)]),_:1},16)}}},Q6=t("h1",null,"\u{1F971} Boring code",-1),ew=t("ul",null,[t("li",null,[p("We have to repeat this code in all our applications, "),t("strong",null,"boring")]),t("li",null,[p("Our responsibility to respect RFC6750, "),t("strong",null,"boring")]),t("li",null,"No body likes boring code"),t("li",null,"Boring code is code we rewrite in all projects, no business value"),t("li",null,[p("Poor "),t("strong",null,"D"),p("eveloper e"),t("strong",null,"X"),p("perience, Symfony tends to improve DX")])],-1),tw=t("h2",null,"This is definitely improvable",-1),nw={__name:"22",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[Q6,ew,tw]),_:1},16))}};function sc(e){return e.startsWith("/")?"/painless-authentication-with-access-token/"+e.slice(1):e}function sw(e,n=!1){const s=e&&e[0]==="#"&&e.startsWith("rgb"),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${sc(e)})`:`url("${sc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const wp=_e({__name:"image",props:{image:{type:String}},setup(e){const n=e;D(M);const s=E(()=>sw(n.image));return(o,r)=>(k(),U("div",{class:"slidev-layout w-full h-full",style:Ke(B(s))},[gt(o.$slots,"default")],4))}}),ow={__name:"23",setup(e){const n={layout:"image",image:"images/dr-strange.gif"};return D(M),(s,o)=>(k(),H(wp,ee(X(n)),null,16))}},rw="/painless-authentication-with-access-token/images/pr-30914.png",lw=t("h1",null,"\u231A Discussions started long time ago",-1),aw=t("ul",null,[t("li",null,[t("strong",null,"April 2019"),p(", at EU FOSSA Hackathon")])],-1),iw=t("img",{src:rw,class:"filter drop-shadow-2xl mx-auto mt-12",width:"600"},null,-1),cw=t("div",{class:"timeline"},[t("div",{class:"dot active"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"})],-1),uw={__name:"24",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[lw,aw,iw,cw]),_:1},16))}},pw="/painless-authentication-with-access-token/images/pr-31952.png",dw=t("h1",null,"\u231A Discussions started long time ago",-1),fw=t("ul",null,[t("li",null,[t("strong",null,"June 2019"),p(", first PR about OAuth2 Component. \u274C Aborted")])],-1),hw=t("img",{src:pw,class:"filter drop-shadow-2xl mx-auto mt-12",width:"600"},null,-1),yw=t("div",{class:"timeline"},[t("div",{class:"dot"}),t("div",{class:"dot active"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"})],-1),mw={__name:"25",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[dw,fw,hw,yw]),_:1},16))}},gw="/painless-authentication-with-access-token/images/pr-33558.png",vw=t("h1",null,"\u231A Discussions started long time ago",-1),_w=t("ul",null,[t("li",null,[t("strong",null,"September 2019"),p(", Wouter\u2019s 1st PR about redesign of Security")])],-1),ww=t("img",{src:gw,class:"filter drop-shadow-2xl mx-auto mt-12",width:"600"},null,-1),bw=t("div",{class:"timeline"},[t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot active"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"})],-1),kw={__name:"26",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[vw,_w,ww,bw]),_:1},16))}},Bw="/painless-authentication-with-access-token/images/pr-36570.png",xw="/painless-authentication-with-access-token/images/pr-36574.png",Aw=t("h1",null,"\u231A Discussions started long time ago",-1),$w=t("ul",null,[t("li",null,[t("strong",null,"April 2020"),p(", continuation of Wouter\u2019s work on new Security system")])],-1),Sw=t("div",{class:"grid grid-cols-2 gap-4 mt-12"},[t("img",{src:Bw,class:"filter drop-shadow-2xl",width:"400"}),t("img",{src:xw,class:"filter drop-shadow-2xl",width:"400"})],-1),Ew=t("div",{class:"timeline"},[t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot active"}),t("div",{class:"dot"}),t("div",{class:"dot"})],-1),Tw={__name:"27",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[Aw,$w,Sw,Ew]),_:1},16))}},Cw="/painless-authentication-with-access-token/images/issue-45844.png",Ow=t("h1",null,"\u231A Discussions started long time ago",-1),Dw=t("ul",null,[t("li",null,[t("strong",null,"March 2022"),p(', Vincent Chalamon opens an issue about "Bearer Authenticator"')])],-1),Iw=t("img",{src:Cw,class:"mx-auto mt-6 filter drop-shadow-2xl",width:"600"},null,-1),Pw=t("div",{class:"timeline"},[t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot active"}),t("div",{class:"dot"})],-1),Mw={__name:"28",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[Ow,Dw,Iw,Pw]),_:1},16))}},Rw="/painless-authentication-with-access-token/images/pr-46429.png",bp="/painless-authentication-with-access-token/images/pr-46428.png",Fw=t("h1",null,"\u231A Discussions started long time ago",-1),Lw=t("ul",null,[t("li",null,[p("Finally, on "),t("strong",null,"May 21st, 2022"),p(", Vincent Chalamon & Florent Morselli each open a pull request to implement the Authenticator")])],-1),Hw=t("div",{class:"grid grid-cols-2 gap-4 mt-12"},[t("img",{src:Rw,class:"filter drop-shadow-xl",width:"400"}),t("img",{src:bp,class:"filter drop-shadow-xl",width:"400"})],-1),qw=t("div",{class:"timeline"},[t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot"}),t("div",{class:"dot active"})],-1),Nw={__name:"29",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[Fw,Lw,Hw,qw]),_:1},16))}},jw="/painless-authentication-with-access-token/images/spomky.png",Ww=t("h1",null,[p("\u{1F929} Thanks a lot "),t("strong",null,[p("Florent Morselli "),t("img",{src:jw,width:"52",class:"rounded-full inline"}),p("\xA0"),t("a",{href:"https://github.com/Spomky",target:"_blank",rel:"noopener"},"@Spomky")])],-1),Vw=t("img",{class:"filter drop-shadow-2xl w-9/12 mx-auto mt-6",src:bp,alt:"Symfony Pull request #46428"},null,-1),Uw={__name:"30",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[Ww,Vw]),_:1},16))}},Kw=t("h1",null,"Adding a feature to Symfony could take years",-1),zw={__name:"31",setup(e){const n={layout:"statement"};return D(M),(s,o)=>(k(),H(ta,ee(X(n)),{default:q(()=>[Kw]),_:1},16))}},Jw=t("h1",null,"\u{1F680} Let\u2019s meet AccessTokenAuthenticator in Symfony 6.2",-1),Yw={__name:"32",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),H(hn,ee(X(n)),{default:q(()=>[Jw]),_:1},16))}},Gw=t("h1",null,"AccessTokenAuthenticator",-1),Zw=t("ul",null,[t("li",null,[p("Takes care of token extraction "),t("ul",null,[t("li",null,"Header"),t("li",null,"Query string"),t("li",null,"Request body"),t("li",null,[p("And/or your "),t("strong",null,"Custom extractors")])])]),t("li",null,[p("Calls "),t("strong",null,"your Token Handler"),p(" to check the token (revocation, expiration, signature, \u2026)")]),t("li",null,"Custom success / failure handlers if needed")],-1),Xw=t("blockquote",null,[t("p",null,"\u2728 All this via configuration!")],-1),Qw={__name:"33",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[Gw,Zw,Xw]),_:1},16))}},or="/painless-authentication-with-access-token/images/jwt.svg",e2="/painless-authentication-with-access-token/images/saml.svg",t2="/painless-authentication-with-access-token/images/biscuit.png",n2="/painless-authentication-with-access-token/images/macarons.png",s2=t("h1",null,"What kind of tokens could be used?",-1),o2=t("ul",null,[t("li",null,"JWT"),t("li",null,"SAML2"),t("li",null,[t("a",{href:"https://www.biscuitsec.org/",target:"_blank",rel:"noopener"},"Biscuit")]),t("li",null,[t("a",{href:"https://research.google/pubs/pub41892/",target:"_blank",rel:"noopener"},"Macaroons")]),t("li",null,"Homemade tokens (with chocolate chips and nuts \u{1F60B})"),t("li",null,"\u2026"),t("li",null,"Any kind of token, as it\u2019s up to you to handle them")],-1),r2=t("div",{class:"absolute right-40 top-36 grid grid-cols-2 gap-10"},[t("img",{src:or,width:"90"}),t("img",{src:e2,width:"90"}),t("img",{src:t2,width:"90"}),t("img",{src:n2,width:"90"})],-1),l2={__name:"34",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[s2,o2,r2]),_:1},16))}},a2=t("h1",null,"\u2699 Internally, in Symfony",-1),i2=t("ul",null,[t("li",null,[p("Extraction with "),t("code",null,"ChainTokenExtractor"),p(" (configurable order) "),t("ul",null,[t("li",null,"Default and custom extractors can be used at the same time")])]),t("li",null,[p("Handle the token with "),t("strong",null,"your"),p(),t("code",null,"TokenHandlerInterface"),p(" implementation")]),t("li",null,[t("code",null,"AccessTokenAuthenticator"),p(" will "),t("ul",null,[t("li",null,[p("create a "),t("code",null,"PostAuthenticationToken"),p(" object")]),t("li",null,[p("set "),t("code",null,"WWW-Authenticate"),p(" Response header content in case of failure")]),t("li",null,"use the configured User Provider in security.yaml")])])],-1),c2={__name:"35",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[a2,i2]),_:1},16))}},u2=t("h1",null,"\u{1FA84} How much easier is it with 6.2?",-1),p2={__name:"36",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),H(hn,ee(X(n)),{default:q(()=>[u2]),_:1},16))}},d2=t("h1",null,"6.1 security.yaml",-1),f2=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#268BD2"}},"security"),t("span",{style:{color:"#657B83"}},":")]),p(`
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
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"      "),t("span",{style:{color:"#268BD2"}},"custom_authenticator"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Security\\ApiKeyAuthenticator")])])])],-1),h2={__name:"37",setup(e){const n={};return D(M),(s,o)=>{const r=jt;return k(),H(pe,ee(X(n)),{default:q(()=>[d2,V(r,at({},{ranges:[""]}),{default:q(()=>[f2]),_:1},16)]),_:1},16)}}},y2={class:"slidev-layout code-full w-full h-full"},m2={__name:"code-full",setup(e){return D(M),(n,s)=>(k(),U("div",y2,[gt(n.$slots,"default")]))}};const kp=e=>(Fn("data-v-6a816db3"),e=e(),Ln(),e),g2=kp(()=>t("h1",null,"6.1 ApiKeyAuthenticator",-1)),v2=kp(()=>t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"class"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"ApiKeyAuthenticator"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"extends"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#6C71C4"}},"AbstractAuthenticator")]),p(`
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
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1)),_2={__name:"38",setup(e){const n={layout:"code-full"};return D(M),(s,o)=>{const r=jt;return k(),H(m2,ee(X(n)),{default:q(()=>[g2,V(r,at({},{ranges:["1,8-11","13-31","15"]}),{default:q(()=>[v2]),_:1},16)]),_:1},16)}}},w2=Zt(_2,[["__scopeId","data-v-6a816db3"]]),b2=t("h1",null,"6.1 ApiKeyAuthenticator",-1),k2=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#93A1A1"}},"/** Simplified version */")]),p(`
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
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1),B2={__name:"39",setup(e){const n={};return D(M),(s,o)=>{const r=jt;return k(),H(pe,ee(X(n)),{default:q(()=>[b2,V(r,at({},{ranges:[""]}),{default:q(()=>[k2]),_:1},16)]),_:1},16)}}},x2=t("h1",null,"6.2 security.yaml",-1),A2=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#268BD2"}},"security"),t("span",{style:{color:"#657B83"}},":")]),p(`
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
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"token_handler"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Security\\AccessTokenHandler")])])])],-1),$2={__name:"40",setup(e){const n={};return D(M),(s,o)=>{const r=jt;return k(),H(pe,ee(X(n)),{default:q(()=>[x2,V(r,at({},{ranges:[""]}),{default:q(()=>[A2]),_:1},16)]),_:1},16)}}};const Bp=e=>(Fn("data-v-11265c82"),e=e(),Ln(),e),S2=Bp(()=>t("h1",null,"6.2 AccessTokenHandler",-1)),E2=Bp(()=>t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"class"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"AccessTokenHandler"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"implements"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#6C71C4"}},"AccessTokenHandlerInterface")]),p(`
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
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1)),T2={__name:"41",setup(e){const n={};return D(M),(s,o)=>{const r=jt;return k(),H(pe,ee(X(n)),{default:q(()=>[S2,V(r,at({},{ranges:[""]}),{default:q(()=>[E2]),_:1},16)]),_:1},16)}}},C2=Zt(T2,[["__scopeId","data-v-11265c82"]]),O2=t("h1",null,[t("img",{src:or,width:"48",class:"inline -mt-2"}),p(" 6.2 With a JWT issued by an OIDC server")],-1),D2={__name:"42",setup(e){const n={layout:"statement"};return D(M),(s,o)=>(k(),H(ta,ee(X(n)),{default:q(()=>[O2]),_:1},16))}},I2={__name:"43",setup(e){const n={layout:"image",image:"images/jwt-flow.png"};return D(M),(s,o)=>(k(),H(wp,ee(X(n)),null,16))}};const xp=e=>(Fn("data-v-efcbd453"),e=e(),Ln(),e),P2=xp(()=>t("h1",null,[t("img",{src:or,width:"48",class:"inline -mt-2"}),p(" 6.2 With a JWT issued by an OIDC server")],-1)),M2=xp(()=>t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"class"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"JwtHandler"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"implements"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#6C71C4"}},"AccessTokenHandlerInterface")]),p(`
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
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1)),R2={__name:"44",setup(e){const n={};return D(M),(s,o)=>{const r=jt;return k(),H(pe,ee(X(n)),{default:q(()=>[P2,V(r,at({},{ranges:[""]}),{default:q(()=>[M2]),_:1},16)]),_:1},16)}}},F2=Zt(R2,[["__scopeId","data-v-efcbd453"]]),L2=t("h1",null,[t("img",{src:or,width:"64",class:"inline -mt-2"}),p(" 6.2 With a JWT issued by your Symfony app")],-1),H2=t("blockquote",null,[t("p",null,[p("with "),t("a",{href:"https://github.com/lcobucci/jwt",target:"_blank",rel:"noopener"},"lcobucci/jwt"),p(" library")])],-1),q2={__name:"45",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),H(hn,ee(X(n)),{default:q(()=>[L2,H2]),_:1},16))}},N2=t("h1",null,"\u{1F510} 6.2 security.yaml",-1),j2=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#268BD2"}},"security"),t("span",{style:{color:"#657B83"}},":")]),p(`
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
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"        "),t("span",{style:{color:"#268BD2"}},"token_handler"),t("span",{style:{color:"#657B83"}},": "),t("span",{style:{color:"#2AA198"}},"App\\Security\\JwtHandler")])])])],-1),W2={__name:"46",setup(e){const n={};return D(M),(s,o)=>{const r=jt;return k(),H(pe,ee(X(n)),{default:q(()=>[N2,V(r,at({},{ranges:[""]}),{default:q(()=>[j2]),_:1},16)]),_:1},16)}}};const Ap=e=>(Fn("data-v-59eb0dbd"),e=e(),Ln(),e),V2=Ap(()=>t("h1",null,"6.2 JwtHandler",-1)),U2=Ap(()=>t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#FDF6E3"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#586E75","font-style":"italic"}},"class"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#CB4B16"}},"JwtHandler"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#586E75","font-style":"italic"}},"implements"),t("span",{style:{color:"#657B83"}}," "),t("span",{style:{color:"#6C71C4"}},"AccessTokenHandlerInterface")]),p(`
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
`),t("span",{class:"line"},[t("span",{style:{color:"#657B83"}},"}")])])])],-1)),K2={__name:"47",setup(e){const n={};return D(M),(s,o)=>{const r=jt;return k(),H(pe,ee(X(n)),{default:q(()=>[V2,V(r,at({},{ranges:[""]}),{default:q(()=>[U2]),_:1},16)]),_:1},16)}}},z2=Zt(K2,[["__scopeId","data-v-59eb0dbd"]]),J2="/painless-authentication-with-access-token/images/api-platform.png",Y2="/painless-authentication-with-access-token/images/apip-pr-265.png",G2=t("h1",null,[p("API Platform plans to support "),t("br"),p(" OpenID Connect authentication "),t("img",{src:J2,class:"absolute inline right-20 top-15",width:"72"})],-1),Z2=t("p",null,[t("a",{href:"https://github.com/api-platform/demo/pull/265",target:"_blank",rel:"noopener"},"https://github.com/api-platform/demo/pull/265")],-1),X2=t("img",{src:Y2,width:"700",class:"mx-auto"},null,-1),Q2={__name:"48",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[G2,Z2,X2]),_:1},16))}},eb=t("h1",null,"\u{1F4AB} In the future?",-1),tb=t("ul",null,[t("li",null,"Add a native JwtHandler to Symfony?"),t("li",null,"Add a native SamlHandler to Symfony?"),t("li",null,"Add a native BiscuitHandler to Symfony?")],-1),nb=t("blockquote",null,[t("p",null,"\u{1F449} It\u2019s up to the community!")],-1),sb={__name:"49",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[eb,tb,nb]),_:1},16))}},ob="/painless-authentication-with-access-token/images/auth-process-62.jpg";const rb=e=>(Fn("data-v-915765bb"),e=e(),Ln(),e),lb=rb(()=>t("img",{src:ob,width:"900",class:"mx-auto"},null,-1)),ab={__name:"50",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[lb]),_:1},16))}},ib=Zt(ab,[["__scopeId","data-v-915765bb"]]),cb="/painless-authentication-with-access-token/images/auth-process-63.jpg";const ub=e=>(Fn("data-v-54aa3007"),e=e(),Ln(),e),pb=ub(()=>t("img",{src:cb,width:"900",class:"mx-auto"},null,-1)),db={__name:"51",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[pb]),_:1},16))}},fb=Zt(db,[["__scopeId","data-v-54aa3007"]]),hb=t("h1",null,"Less responsibility, less code",-1),yb=t("ul",null,[t("li",null,[t("strong",null,"Configure"),p(" the way the extraction should be done")]),t("li",null,[t("strong",null,"Focus"),p(" on the token processing "),t("ul",null,[t("li",null,"Decoding"),t("li",null,"Checking signature, expiration, revocation"),t("li",null,"Retrieve user identifier")])])],-1),mb=t("blockquote",null,[t("p",null,"\u{1F9B8} Leverage all Symfony power to fine tune configuration to your needs")],-1),gb={__name:"52",setup(e){const n={};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[hb,yb,mb]),_:1},16))}},vb=t("h1",null,"\u{1F44F} Thanks a lot",-1),_b=t("h1",null,"Wouter",-1),wb=t("h1",null,"Guillaume",-1),bb=t("h1",null,"Vincent",-1),kb=t("h1",null,"Florent",-1),Bb=t("div",{class:"mt-12"},null,-1),xb=t("h2",null,"And all reviewers, commenters \u{1F389}",-1),Ab={__name:"53",setup(e){const n={class:"text-center"};return D(M),(s,o)=>(k(),H(pe,ee(X(n)),{default:q(()=>[vb,_b,wb,bb,kb,Bb,xb]),_:1},16))}},$b=t("h1",null,"Thank you \u2615 \u{1F370}",-1),Sb=t("h2",null,"Any questions?",-1),Eb=t("br",null,null,-1),Tb=t("br",null,null,-1),Cb=t("p",null,[p("Slides and demo apps \u{1F449} "),t("a",{href:"https://welcomattic.github.io/painless-authentication-with-access-token/",target:"_blank",rel:"noopener"},"welcomattic.github.io/painless-authentication-with-access-token")],-1),Ob=t("p",null,"Sources",-1),Db=t("ul",null,[t("li",null,[t("a",{href:"https://www.rfc-editor.org/rfc/rfc7519",target:"_blank",rel:"noopener"},"JWT RFC")]),t("li",null,[t("a",{href:"https://datatracker.ietf.org/doc/html/rfc6750",target:"_blank",rel:"noopener"},"Bearer Token Usage RFC")]),t("li",null,[t("a",{href:"https://lafor.ge/biscuit-1",target:"_blank",rel:"noopener"},"In-depth article about token authentication")])],-1),Ib={__name:"54",setup(e){const n={layout:"section"};return D(M),(s,o)=>(k(),H(hn,ee(X(n)),{default:q(()=>[$b,Sb,Eb,Tb,Cb,Ob,Db]),_:1},16))}},Pb=[{path:"1",name:"page-1",component:z1,meta:{layout:"intro-image",image:"images/cover.jpg",title:"SymfonyCon Disneyland Paris 2022",theme:"apple-basic",highlighter:"shiki",lineNumbers:!0,favicon:"symfony.ico",info:`## SymfonyCon Disneyland Paris 2022
`,drawings:{persist:!1},colorSchema:"light",fonts:{provider:"none",local:"SF Pro Display,Josefin Sans",sans:"SF Pro Display",serif:"Josefin Sans"},srcSequence:"content/cover.md",slide:{raw:null,content:`<div class="absolute top-10 text-slate-200 font-serif">
  <h1>Painless Authentication</h1>
  <h2>with Access Tokens</h2>
</div>

<img src="/images/symfonycon-logo-darkmode-transparent.png" alt="SymfonyCon Logo" class="absolute bottom-1 right-2 w-32" />

<div class="absolute bottom-16 right-10 text-right text-slate-200 font-serif">
    <img class="filter drop-shadow-md ml-auto mr-0 mb-4 clothoid-corner" src="/images/me.jpg" alt="Mathieu Santostefano" width="150"/>
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

<div class="absolute top-10 text-slate-200 font-serif">
  <h1>Painless Authentication</h1>
  <h2>with Access Tokens</h2>
</div>

<img src="/images/symfonycon-logo-darkmode-transparent.png" alt="SymfonyCon Logo" class="absolute bottom-1 right-2 w-32" />

<div class="absolute bottom-16 right-10 text-right text-slate-200 font-serif">
    <img class="filter drop-shadow-md ml-auto mr-0 mb-4 clothoid-corner" src="/images/me.jpg" alt="Mathieu Santostefano" width="150"/>
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
`,content:`<div class="absolute top-10 text-slate-200 font-serif">
  <h1>Painless Authentication</h1>
  <h2>with Access Tokens</h2>
</div>

<img src="/images/symfonycon-logo-darkmode-transparent.png" alt="SymfonyCon Logo" class="absolute bottom-1 right-2 w-32" />

<div class="absolute bottom-16 right-10 text-right text-slate-200 font-serif">
    <img class="filter drop-shadow-md ml-auto mr-0 mb-4 clothoid-corner" src="/images/me.jpg" alt="Mathieu Santostefano" width="150"/>
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
`,id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Q1,meta:{layout:"statement",slide:{raw:`---
layout: statement
---

# \u{1F389} On nov. 18 2021, I received an email to join the Core Team

<img src="/images/core-team-mail.png" class="-mt-8 w-8/12 mx-auto" />

<!--
About Core Team, today is a bit special for me because last year, day for day on november eighteen, Fabien sent me an email to invite me joining the Core Team of Symfony. So today is something like my core team anniversary!
-->
`,title:"\u{1F389} On nov. 18 2021, I received an email to join the Core Team",level:1,content:`# \u{1F389} On nov. 18 2021, I received an email to join the Core Team

<img src="/images/core-team-mail.png" class="-mt-8 w-8/12 mx-auto" />`,frontmatter:{layout:"statement"},note:"About Core Team, today is a bit special for me because last year, day for day on november eighteen, Fabien sent me an email to invite me joining the Core Team of Symfony. So today is something like my core team anniversary!",index:1,start:19,end:31,notesHTML:`<p>About Core Team, today is a bit special for me because last year, day for day on november eighteen, Fabien sent me an email to invite me joining the Core Team of Symfony. So today is something like my core team anniversary!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:s8,meta:{layout:"section",slide:{raw:`---
layout: section
---

# \u{1F510} Who has Access Token authentication in their app?

<!--
Ok (thanks), well, let's dive into the topic. Who has already implemented an Access Token Authentication in their apps?
-->
`,title:"\u{1F510} Who has Access Token authentication in their app?",level:1,content:"# \u{1F510} Who has Access Token authentication in their app?",frontmatter:{layout:"section"},note:"Ok (thanks), well, let's dive into the topic. Who has already implemented an Access Token Authentication in their apps?",index:2,start:31,end:41,notesHTML:`<p>Ok (thanks), well, let's dive into the topic. Who has already implemented an Access Token Authentication in their apps?</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:a8,meta:{layout:"section",slide:{raw:`---
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

I don't know if Wouter is here, but I want to thank him for his amazing work \u{1F44F}`,index:3,start:41,end:61,notesHTML:`<p>Who is working with the new Symfony Security (released in 5.1)?</p>
<p>NEXT</p>
<p>I don't know if Wouter is here, but I want to thank him for his amazing work \u{1F44F}</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:d8,meta:{slide:{raw:`
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

Your job is to use or implement an Authenticator, in order to instantiate a Passport using data from the Request and a user provider.`,index:4,start:62,end:83,notesHTML:`<p>Just to ensure everyone is ok with it, I made a quick reminder about the new Security system</p>
<p>Everything has been removed but Guards</p>
<p>The process is now an event based system</p>
<p>It introduces Passports &amp; Badges</p>
<p>Your job is to use or implement an Authenticator, in order to instantiate a Passport using data from the Request and a user provider.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:m8,meta:{slide:{raw:`
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
`,title:"\u2728 The New Security System",level:1,content:"# \u2728 The New Security System\n\n## Event-based system\n\n* You can interact on different levels\n  * `CheckPassportEvent`\n  * `AuthenticationTokenCreatedEvent`\n  * `AuthenticationSuccessEvent`\n  * `LoginSuccessEvent`\n  * `LoginFailureEvent`\n  * `LogoutEvent`\n  * `TokenDeauthenticatedEvent`\n  * `SwitchUserEvent`",frontmatter:{},note:"The new system allows you to interact on different points of the authentication process like the success login or logout event.",index:5,start:84,end:103,notesHTML:`<p>The new system allows you to interact on different points of the authentication process like the success login or logout event.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:w8,meta:{slide:{raw:`
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
In other words, Symfony takes care of the boring code for you, while leaving you the possibility to modify the default behavior if needed, via events or extension points.`,index:6,start:104,end:116,notesHTML:`<p>Like many things contributed in Symfony since last years, it improves the DX.
In other words, Symfony takes care of the boring code for you, while leaving you the possibility to modify the default behavior if needed, via events or extension points.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:S8,meta:{slide:{raw:`
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

Once decoded, they gives you exploitable data like user identifier, expiration date etc`,index:7,start:117,end:171,notesHTML:`<p>Ok. Concretely, what is an access token?</p>
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
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:O8,meta:{slide:{raw:`
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

For instance, in a micro services architecture, each service could request others, with access tokens, to ensure that they are granted to access resources.`,index:8,start:172,end:190,notesHTML:`<p>When are they used? There are plenty of use cases. Access tokens are widely used in our industry, especially between applications.</p>
<p>For instance, in a micro services architecture, each service could request others, with access tokens, to ensure that they are granted to access resources.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:R8,meta:{slide:{raw:`
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

Here is a basic schema representing a client requesting a protected resource with an access token passed in query string. The application on the server will returns the resource only if the token is valid.`,index:9,start:191,end:210,notesHTML:`<p>To really be access tokens, those strings must be sent in HTTP request.
The application expects to find a token, then validate it, in order to let you access the resource.</p>
<p>NEXT</p>
<p>Here is a basic schema representing a client requesting a protected resource with an access token passed in query string. The application on the server will returns the resource only if the token is valid.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:q8,meta:{layout:"section",slide:{raw:`---
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
  
We don't need to verify the user identity, it has already be done by the authentication server before providing the token, we only have to focus on the validation of the token itself.`,index:10,start:210,end:224,notesHTML:`<p>To simplify the talk, we will assume that all tokens are issued by an authentication server.</p>
<p>We don't need to verify the user identity, it has already be done by the authentication server before providing the token, we only have to focus on the validation of the token itself.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:V8,meta:{slide:{raw:`
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

It could be comparing strings, computing signatures, checking revocation or expiration date, call an OpenID Connect server, etc\u2026`,index:11,start:225,end:245,notesHTML:`<p>About validation, depending on the kind of token you use, the process will be different.
It is up to you to define and code it.</p>
<p>It could be comparing strings, computing signatures, checking revocation or expiration date, call an OpenID Connect server, etc\u2026</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:K8,meta:{layout:"section",slide:{raw:`---
layout: section
---

# \u{1F914} How to set up an Access Token auth with Symfony?

<!--
So, How Symfony can helps you to implement access token authentication?
-->
`,title:"\u{1F914} How to set up an Access Token auth with Symfony?",level:1,content:"# \u{1F914} How to set up an Access Token auth with Symfony?",frontmatter:{layout:"section"},note:"So, How Symfony can helps you to implement access token authentication?",index:12,start:245,end:255,notesHTML:`<p>So, How Symfony can helps you to implement access token authentication?</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Y8,meta:{slide:{raw:`
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

  Admins can revoke api key at anytime.`,index:13,start:256,end:283,notesHTML:`<p>For the fun, let's imagine a basic and fake application for Marvel.</p>
<p>Dedicated to scenarios writing, with a private API.</p>
<p>Some basic features:</p>
<p>Admin panel, protected by form login</p>
<p>Writers can create scenarios</p>
<p>Reviewers web app can request private api using the api key of the Writer</p>
<p>Admins can revoke api key at anytime.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:X8,meta:{slide:{raw:`
<img src="/images/demo-app-schema.png" />

<!--
The reviewer authentication process starts with login to obtain an access token.
Then, the web app can request the API using the user access token.
-->
`,content:'<img src="/images/demo-app-schema.png" />',frontmatter:{},note:`The reviewer authentication process starts with login to obtain an access token.
Then, the web app can request the API using the user access token.`,index:14,start:284,end:292,notesHTML:`<p>The reviewer authentication process starts with login to obtain an access token.
Then, the web app can request the API using the user access token.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:t5,meta:{slide:{raw:`
<img src="/images/demo-app-schema-2.png" />

<!--
I will focus on the reviewer part for the rest of the talk. Let's see how to implement it with Symfony.
-->
`,content:'<img src="/images/demo-app-schema-2.png" />',frontmatter:{},note:"I will focus on the reviewer part for the rest of the talk. Let's see how to implement it with Symfony.",index:15,start:293,end:300,notesHTML:`<p>I will focus on the reviewer part for the rest of the talk. Let's see how to implement it with Symfony.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:l5,meta:{slide:{raw:`
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

All these steps are standardized in a RFC`,index:16,start:301,end:333,notesHTML:`<p>With Symfony 6.1 and before, thanks to the new Security system, we have to work in a single file : the Authenticator :</p>
<p>It's where we will extract the token</p>
<p>decode it</p>
<p>check the validity</p>
<p>retrieve the user identifier</p>
<p>load the user</p>
<p>handle failure cases</p>
<p>All these steps are standardized in a RFC</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:p5,meta:{slide:{raw:`
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

It's basically what we have to implement to properly handle authentication with access token.`,index:17,start:334,end:360,notesHTML:`<p>The RFC 6750 is about Bearer Token Usage. It defines many things from the token transportation, to the response headers in case of failure.</p>
<p>It's basically what we have to implement to properly handle authentication with access token.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:m5,meta:{slide:{raw:`
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
</style>`,frontmatter:{},note:"as a picture is sometimes better than a long speech, here is the authentication process. In red what you are responsible for. And in black, what Symfony does by default but that you can customize if needed.",index:18,start:361,end:374,notesHTML:`<p>as a picture is sometimes better than a long speech, here is the authentication process. In red what you are responsible for. And in black, what Symfony does by default but that you can customize if needed.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Y6,meta:{slide:{raw:`
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

Another limitation here is the order of extraction source is fixed. We cannot configure it differently depending on environment for instance.`,index:19,start:375,end:406,notesHTML:`<p>Here is some code, simplified, used to extract the token from the Request.
It supports extraction from header, query string, or request body.</p>
<p>I said simplified, because in real life we should check on types, HTTP methods, make some assertions on token length, etc.</p>
<p>Another limitation here is the order of extraction source is fixed. We cannot configure it differently depending on environment for instance.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:X6,meta:{slide:{raw:`
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

*soupire*, very interesting code, isn't it?`,index:20,start:407,end:436,notesHTML:`<p>Now, the token is extracted, we have to retrieve the user.
Here we assume the user identifier is the access token (variable $apiKey).</p>
<p><em>soupire</em>, very interesting code, isn't it?</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:nw,meta:{slide:{raw:`
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

Anyway, this is improvable!`,index:21,start:437,end:463,notesHTML:`<p>No.</p>
<p>The extraction code is boring code. No body wants to maintain such code, or replicate it on multiple applications.</p>
<p>Boring code is code we rewrite in all projects, no business value</p>
<p>As it must follow a RFC, this code must be rock solid, battle tested and it's not intended to be modified over time.</p>
<p>Since a few versions, Symfony tends to improve the DX, to make the framework more pleasant for developers, so they can focus on adding business value.</p>
<p>Anyway, this is improvable!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:ow,meta:{layout:"image",image:"images/dr-strange.gif",slide:{raw:`---
layout: image
image: 'images/dr-strange.gif'
---

<!--
GIF DR STRANGE

Ok, let's go back in time to understand how we managed to improve this!
-->
`,content:"",frontmatter:{layout:"image",image:"images/dr-strange.gif"},note:`GIF DR STRANGE

Ok, let's go back in time to understand how we managed to improve this!`,index:22,start:463,end:474,notesHTML:`<p>GIF DR STRANGE</p>
<p>Ok, let's go back in time to understand how we managed to improve this!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:uw,meta:{slide:{raw:`
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

It was the starting point of the new security system`,index:23,start:475,end:498,notesHTML:`<p>In 2019, European Union has organized a Hackathon in which Symfony has participated with contributors and Core Team members.
There was discussion about the whole Security component, and a point about Social Login with Oauth2 component.</p>
<p>It was the starting point of the new security system</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:mw,meta:{slide:{raw:`
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

Moreover, it was focused on OAuth2. It was a little too specific.`,index:24,start:499,end:523,notesHTML:`<p>A few weeks later, the first attempt about support access token natively in Symfony was made by Guillaume Loulier.</p>
<p>He opens a pull request to add an OAuth2 component into the Core. But due to bunch of OAuth implementations in the PHP community, it has been decided not to merge it.</p>
<p>Moreover, it was focused on OAuth2. It was a little too specific.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:kw,meta:{slide:{raw:`
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

What better time than this to consider the future of the component and the extension of its capabilities?`,index:25,start:524,end:546,notesHTML:`<p>Back to school in september 2019, Wouter starts working on rewriting Symfony's Security component.</p>
<p>What better time than this to consider the future of the component and the extension of its capabilities?</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Tw,meta:{slide:{raw:`
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
It was a huge work. Now, we have the new Authenticator feature!`,index:26,start:547,end:571,notesHTML:`<p>6 months later, Wouter is still working on the new Security component by removing anonymous authentication, and integrating Guards with the new system.
It was a huge work. Now, we have the new Authenticator feature!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Mw,meta:{slide:{raw:`
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
</div>`,frontmatter:{},note:"Spring 2022, this year. Vincent Chalamon from Les Tilleuls starts the discussion about a new Bearer Authenticator which allows developers to configure an authentication based on access tokens",index:27,start:572,end:592,notesHTML:`<p>Spring 2022, this year. Vincent Chalamon from Les Tilleuls starts the discussion about a new Bearer Authenticator which allows developers to configure an authentication based on access tokens</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Nw,meta:{slide:{raw:`
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
</div>`,frontmatter:{},note:"Later on the spring, on the very same day, may 21st, Vincent Chalamon and Florent Morselli opened 2 pull requests, one each to implement this authenticator.",index:28,start:593,end:617,notesHTML:`<p>Later on the spring, on the very same day, may 21st, Vincent Chalamon and Florent Morselli opened 2 pull requests, one each to implement this authenticator.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Uw,meta:{slide:{raw:`
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
It was decided to leave the choice to the developers about the token validation, for now.`,index:29,start:618,end:629,notesHTML:`<p>Finally, after some design debates, the pull request of Florent has been merged!
His pull request is lighter than Vincent one, as it does not provide an arbitrary JWT validation.
It was decided to leave the choice to the developers about the token validation, for now.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:zw,meta:{layout:"statement",slide:{raw:`---
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

And even if in the end, like here, the feature may seem small and uncomplicated, it took a lot of time before it was included in the core, because we had to find the right way to do it, a sustainable way.`,index:30,start:629,end:645,notesHTML:`<p>This feature is an example that adding a feature to Symfony could take years.</p>
<p>Years of discussion between contributors, years of trials, of closed Pull Requests.</p>
<p>This is normal, it's the way Symfony lives. Between the birth of an idea and the release of a feature, it can take days, weeks, months or years. It all depends on the discussions within the community, the complexity of the feature, its impact on the existing.</p>
<p>And even if in the end, like here, the feature may seem small and uncomplicated, it took a lot of time before it was included in the core, because we had to find the right way to do it, a sustainable way.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Yw,meta:{layout:"section",slide:{raw:`---
layout: section
---

# \u{1F680} Let's meet AccessTokenAuthenticator in Symfony 6.2
`,title:"\u{1F680} Let's meet AccessTokenAuthenticator in Symfony 6.2",level:1,content:"# \u{1F680} Let's meet AccessTokenAuthenticator in Symfony 6.2",frontmatter:{layout:"section"},index:31,start:645,end:651,notesHTML:"",filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Qw,meta:{slide:{raw:`
# AccessTokenAuthenticator

* Takes care of token extraction
  * Header
  * Query string
  * Request body
  * And/or your **Custom extractors**
* Calls **your Token Handler** to check the token (revocation, expiration, signature, \u2026)
* Custom success / failure handlers if needed

> \u2728 All this via configuration!

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

> \u2728 All this via configuration!`,frontmatter:{},note:`This brand new authenticator will take care of the token extraction for you. By default, it can extract a token from the header, the query string or the request body. If you need to extract the token from elsewhere, you can write your own token extractor. 

Side note about extraction: Be careful, extracting token from query string or request body is not recommended in production for security reasons, tokens could be readable on the network.
  
Then, the authenticator will look for your token handler, to find the user identifier from the token.

Finally, like in any authenticator, a Passport will be instantiate with the user identifier and the user provider.

Except the token handler or custom things, all of this could be done by configuration.`,index:32,start:652,end:677,notesHTML:`<p>This brand new authenticator will take care of the token extraction for you. By default, it can extract a token from the header, the query string or the request body. If you need to extract the token from elsewhere, you can write your own token extractor.</p>
<p>Side note about extraction: Be careful, extracting token from query string or request body is not recommended in production for security reasons, tokens could be readable on the network.</p>
<p>Then, the authenticator will look for your token handler, to find the user identifier from the token.</p>
<p>Finally, like in any authenticator, a Passport will be instantiate with the user identifier and the user provider.</p>
<p>Except the token handler or custom things, all of this could be done by configuration.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:l2,meta:{slide:{raw:`
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

Of course, you can use self-contained token like JWT, and even more powerful token like Macaroons or Biscuit, which embed permissions attenuation capabilities.`,index:33,start:678,end:702,notesHTML:`<p>As this Authenticator aims to follow the RFC6750, and it's up to you to process the token, any kind of token can be handled, even homemade ones.</p>
<p>Of course, you can use self-contained token like JWT, and even more powerful token like Macaroons or Biscuit, which embed permissions attenuation capabilities.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:c2,meta:{slide:{raw:`
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

You still control the User provider to retrieve the User object from the User identifier.`,index:34,start:703,end:722,notesHTML:`<p>Internally in Symfony, Token will be extracted using a series of Extractors. The chain stops right after one of the extractors manages to return a string. Default and custom extractors can be used alongside.</p>
<p>In case of failure, The WWW-Authenticate response header will be correctly filled up</p>
<p>You still control the User provider to retrieve the User object from the User identifier.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:p2,meta:{layout:"section",slide:{raw:`---
layout: section
---

# \u{1FA84} How much easier is it with 6.2?

<!--
In practice, why it's easier in 6.2? Let's compare the 2 versions 6.1 and 6.2
-->
`,title:"\u{1FA84} How much easier is it with 6.2?",level:1,content:"# \u{1FA84} How much easier is it with 6.2?",frontmatter:{layout:"section"},note:"In practice, why it's easier in 6.2? Let's compare the 2 versions 6.1 and 6.2",index:35,start:722,end:732,notesHTML:`<p>In practice, why it's easier in 6.2? Let's compare the 2 versions 6.1 and 6.2</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:h2,meta:{slide:{raw:`
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
We define a user provider and a firewall, specifying the Authenticator`,index:36,start:733,end:756,notesHTML:`<p>Here's the basic configuration for a custom authenticator in Symfony 6.1
We define a user provider and a firewall, specifying the Authenticator</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:w2,meta:{layout:"code-full",slide:{raw:`---
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

Let's see the extraction method`,index:37,start:756,end:816,notesHTML:`<p>The authenticator itself:</p>
<p>First, ensure our Authenticator can support the authentication with access token</p>
<p>NEXT</p>
<p>Then, extract the token, retrieve the matching User from database, while ensuring the token is not revoked.</p>
<p>NEXT</p>
<p>Let's see the extraction method</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:B2,meta:{slide:{raw:`
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
Here we have to support extraction from different source. The order is fixed.`,index:38,start:817,end:844,notesHTML:`<p>About the extraction, as I said, it is a simple version but it definitely have to be more robust in production.
Here we have to support extraction from different source. The order is fixed.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:$2,meta:{slide:{raw:`
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

Of course, there are some other configuration entries if you need to use your own token extractor, or success handler`,index:39,start:845,end:876,notesHTML:`<p>Here's the config in 6.2. Ok, you will have to write some more lines of YAML. Not so hard I guess</p>
<p>The list of extractors is customizable, the first of the list is called first.</p>
<p>Of course, there are some other configuration entries if you need to use your own token extractor, or success handler</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:C2,meta:{slide:{raw:`
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

We don't have to worry anymore about extraction from the request.`,index:40,start:877,end:917,notesHTML:`<p>This is an example of Token Handler.</p>
<p>Our job here, is to retrieve the User identifier from the token. nothing more, nothing less.</p>
<p>So, let's query the database, to retrieve our User and return the user identifier.</p>
<p>We don't have to worry anymore about extraction from the request.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:D2,meta:{layout:"statement",slide:{raw:`---
layout: statement
---

# <img src="/images/jwt.svg" width="48" class="inline -mt-2" /> 6.2 With a JWT issued by an OIDC server
`,title:'<img src="/images/jwt.svg" width="48" class="inline -mt-2" /> 6.2 With a JWT issued by an OIDC server',level:1,content:'# <img src="/images/jwt.svg" width="48" class="inline -mt-2" /> 6.2 With a JWT issued by an OIDC server',frontmatter:{layout:"statement"},index:41,start:917,end:923,notesHTML:"",filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:I2,meta:{layout:"image",image:"images/jwt-flow.png",slide:{raw:`---
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
To validate the token, the API calls the OIDC server, and if everything is ok, it returns the requested resource.`,index:42,start:923,end:935,notesHTML:`<p>Here's a diagram to resume how JWT authentication works.
First, the user login, then the OpenIDConnect server returns the JWT to the client app.
Second, the client app requests the API with the JWT in the request
To validate the token, the API calls the OIDC server, and if everything is ok, it returns the requested resource.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:F2,meta:{slide:{raw:`
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

It returns the user info, then we can return the user identifier, here the email.`,index:43,start:936,end:976,notesHTML:`<p>Here another example of Token Handle but with a JWT.</p>
<p>To validate it, we must call the OpenID Connect server which has produced the token.</p>
<p>It returns the user info, then we can return the user identifier, here the email.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:q2,meta:{layout:"section",slide:{raw:`---
layout: section
---

# <img src="/images/jwt.svg" width="64" class="inline -mt-2" /> 6.2 With a JWT issued by your Symfony app

> with [lcobucci/jwt](https://github.com/lcobucci/jwt) library
`,title:'<img src="/images/jwt.svg" width="64" class="inline -mt-2" /> 6.2 With a JWT issued by your Symfony app',level:1,content:`# <img src="/images/jwt.svg" width="64" class="inline -mt-2" /> 6.2 With a JWT issued by your Symfony app

> with [lcobucci/jwt](https://github.com/lcobucci/jwt) library`,frontmatter:{layout:"section"},index:44,start:976,end:984,notesHTML:"",filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:W2,meta:{slide:{raw:`
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

Then, we configure the token handler.`,index:45,start:985,end:1013,notesHTML:`<p>First step, we configure the firewall named api.</p>
<p>We assume to be in production, so we use the Header extractor only.</p>
<p>Then, we configure the token handler.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:z2,meta:{slide:{raw:`
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

A dozen lines of yaml and some twenty-five lines of PHP, it's enough to handle a basic JWT authentication with Symfony. Obviously, your code in real life applications could be a little more complex, but now you can focus on this complexity.`,index:46,start:1014,end:1064,notesHTML:`<p>Final step (yes, it's a 2 step implementation, very quick :D), we write the Token Handler.</p>
<p>Here we use the lcobucci jwt library to make some assertions on the token. We want to verify the expiration date and the signature.</p>
<p>At the end, we return the claim named &quot;sub&quot; which is our user identifier. End.</p>
<p>A dozen lines of yaml and some twenty-five lines of PHP, it's enough to handle a basic JWT authentication with Symfony. Obviously, your code in real life applications could be a little more complex, but now you can focus on this complexity.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:Q2,meta:{slide:{raw:`
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

Don't hesitate to browse the pull request and bring your help!`,index:47,start:1065,end:1079,notesHTML:`<p>Good news! Soon, API Platform plans to provide an OidcTokenHandler.
It gives you the possibility easily setup access token auth with OIDC server, only with configuration.</p>
<p>Don't hesitate to browse the pull request and bring your help!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:sb,meta:{slide:{raw:`
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
But, may be it needs time. The community could need time to adopt the TokenHandlerInterface. But who knows, in 6.3 or 7.0, we may see some natives Token Handlers in Symfony!`,index:48,start:1080,end:1096,notesHTML:`<p>What's next?</p>
<p>Well, as many tokens are specified in RFC, it could be interesting to implement natives Token Handler in Symfony.
But, may be it needs time. The community could need time to adopt the TokenHandlerInterface. But who knows, in 6.3 or 7.0, we may see some natives Token Handlers in Symfony!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:ib,meta:{slide:{raw:`
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

As always, the user loading is made with the configured UserProvider.`,index:49,start:1097,end:1119,notesHTML:`<p>Let's get back the schema from the beginning. Now, you have less responsibility across the authentication process.
The extraction is made by Symfony. Accordingly the order defined in your configuration.</p>
<p>The handling of the token is up to you as it depends on the kind of token.</p>
<p>Success or failure could be managed by Symfony with default behaviours, but you can make your owns.</p>
<p>In case of failure, Symfony will automatically set the content of the WWW-authenticate response header, to respect the RFC 6750.</p>
<p>As always, the user loading is made with the configured UserProvider.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:fb,meta:{slide:{raw:`
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

As always, the community will decide!`,index:50,start:1120,end:1138,notesHTML:`<p>Now, in 6.2 Symfony is responsible of the RFC 6750 implementation, we could imagine the future.
Why not providing in 6.3 default TokenHandler to support natively JWT or even better any OIDC server?</p>
<p>You may have attended Robin Chalas talk yesterday morning? Maybe GNAP will one day be natively supported by Symfony, thanks to this system!</p>
<p>As always, the community will decide!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:gb,meta:{slide:{raw:`
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

Enjoy the power of Symfony to configure your authentication finely depending on your environments! For instance,you can supporttoken extraction from query string and request body only on dev or test environment, but not on production.`,index:51,start:1139,end:1160,notesHTML:`<p>Now, to sum up, your job is to configure how the extraction will be done. It brings more flexibility.</p>
<p>You can focus on the Token itself, decoding it, checking signature, revocation, expiration.</p>
<p>Retrieving the user identifier, from the token itself, or from any other source, like a database, an API, an OpenID Connect server like Keycloak, etc</p>
<p>Enjoy the power of Symfony to configure your authentication finely depending on your environments! For instance,you can supporttoken extraction from query string and request body only on dev or test environment, but not on production.</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:Ab,meta:{class:"text-center",slide:{raw:`---
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

## And all reviewers, commenters \u{1F389}`,frontmatter:{class:"text-center"},note:"Before leaving the stage, I would like to thank Wouter, Guillaume, Vincent, Florent, and all reviewers and commenters for this feature!",index:52,start:1160,end:1179,notesHTML:`<p>Before leaving the stage, I would like to thank Wouter, Guillaume, Vincent, Florent, and all reviewers and commenters for this feature!</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:Ib,meta:{layout:"section",slide:{raw:`---
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
If you have any question, I will be happy to answer`,index:53,start:1179,end:1201,notesHTML:`<p>Thank you for your attention, I hope you've learned something during this talk.
If you have any question, I will be happy to answer</p>
`,filepath:"/home/welcomattic/workspace/talks/painless-auth-with-access-tokens/slides/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",component:y1,meta:{layout:"end"}}],We=Pb,Mb=[{name:"play",path:"/",component:a1,children:[...We]},{name:"print",path:"/print",component:d1},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>Mn(()=>import("./PresenterPrint.bb1ad0eb.js"),["assets/PresenterPrint.bb1ad0eb.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.8a5f4171.js"])},{name:"presenter",path:"/presenter/:no",component:()=>Mn(()=>import("./Presenter.5b40d40a.js"),["assets/Presenter.5b40d40a.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.8a5f4171.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.c383d634.js","assets/Presenter.ded7a296.css"]),beforeEnter:e=>{if(!Ss.remote||Ss.remote===e.query.password)return!0;if(Ss.remote&&e.query.password===void 0){const n=prompt("Enter password");if(Ss.remote===n)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],yt=K0({history:i0("/painless-authentication-with-access-token/"),routes:Mb});function Rb(e,n,{mode:s="replace"}={}){return E({get(){const o=yt.currentRoute.value.query[e];return o==null?n!=null?n:null:Array.isArray(o)?o.filter(Boolean):o},set(o){Ge(()=>{yt[B(s)]({query:{...yt.currentRoute.value.query,[e]:o}})})}})}const $p=W(0);Ge(()=>{yt.afterEach(async()=>{await Ge(),$p.value+=1})});const Xt=E(()=>yt.currentRoute.value),oa=E(()=>Xt.value.query.print!==void 0),Fb=E(()=>Xt.value.query.print==="clicks"),Vt=E(()=>Xt.value.query.embedded!==void 0),Rt=E(()=>Xt.value.path.startsWith("/presenter")),Ms=E(()=>oa.value&&!Fb.value),pl=E(()=>Xt.value.query.password),Lb=E(()=>!Rt.value&&(!ke.remote||pl.value===ke.remote)),oc=Rb("clicks","0"),Sp=E(()=>We.length-1),Hb=E(()=>Xt.value.path),qe=E(()=>parseInt(Hb.value.split(/\//g).slice(-1)[0])||1);E(()=>rr(qe.value));const dt=E(()=>We.find(e=>e.path===`${qe.value}`));E(()=>{var e,n,s;return(s=(n=(e=dt.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.id});E(()=>{var e,n;return((n=(e=dt.value)==null?void 0:e.meta)==null?void 0:n.layout)||(qe.value===1?"cover":"default")});const Ar=E(()=>We.find(e=>e.path===`${Math.min(We.length,qe.value+1)}`)),qb=E(()=>{var e,n;return $p.value,((n=(e=dt.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),Tt=E({get(){if(Ms.value)return 99999;let e=+(oc.value||0);return isNaN(e)&&(e=0),e},set(e){oc.value=e.toString()}}),Ro=E(()=>{var e,n,s;return+((s=(n=(e=dt.value)==null?void 0:e.meta)==null?void 0:n.clicks)!=null?s:qb.value.length)}),Nb=E(()=>qe.value<We.length-1||Tt.value<Ro.value),jb=E(()=>qe.value>1||Tt.value>0),Wb=E(()=>We.filter(e=>{var n,s;return(s=(n=e.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((e,n)=>(ra(e,n),e),[])),Vb=E(()=>la(Wb.value,dt.value));E(()=>aa(Vb.value));function un(){Ro.value<=Tt.value?Gs():Tt.value+=1}async function pn(){Tt.value<=0?await Zs():Tt.value-=1}function rr(e){return Rt.value?`/presenter/${e}`:`/${e}`}function Gs(){const e=Math.min(We.length,qe.value+1);return cs(e)}async function Zs(e=!0){const n=Math.max(1,qe.value-1);await cs(n),e&&Ro.value&&yt.replace({query:{...Xt.value.query,clicks:Ro.value}})}function cs(e,n){return yt.push({path:rr(e),query:{...Xt.value.query,clicks:n}})}function Ub(e){const n=W(0),{direction:s,distanceX:o,distanceY:r}=Im(e,{onSwipeStart(l){l.pointerType==="touch"&&(zs.value||(n.value=Gr()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!n.value||zs.value)return;const a=Math.abs(o.value),i=Math.abs(r.value);a/window.innerWidth>.3||a>100?s.value===zt.LEFT?un():pn():(i/window.innerHeight>.4||i>200)&&(s.value===zt.DOWN?Zs():Gs())}})}async function dl(){const{saveAs:e}=await Mn(()=>import("./FileSaver.min.7f56e709.js").then(n=>n.F),[]);e(Cu(ke.download)?ke.download:ke.exportFilename?`${ke.exportFilename}.pdf`:"/painless-authentication-with-access-token/slidev-exported.pdf",`${ke.title}.pdf`)}async function Kb(e){var n,s;if(e==null){const o=(s=(n=dt.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function ra(e,n,s=1){var r,l,a,i,c;const o=(l=(r=n.meta)==null?void 0:r.slide)==null?void 0:l.level;o&&o>s&&e.length>0?ra(e[e.length-1].children,n,s+1):e.push({children:[],level:s,path:n.path,hideInToc:Boolean((a=n.meta)==null?void 0:a.hideInToc),title:(c=(i=n.meta)==null?void 0:i.slide)==null?void 0:c.title})}function la(e,n,s=!1,o){return e.map(r=>{const l={...r,active:r.path===(n==null?void 0:n.path),hasActiveParent:s};return l.children.length>0&&(l.children=la(l.children,n,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function aa(e,n=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:aa(s.children,n+1)}))}function zb(){const e=ke.titleTemplate.replace("%s",ke.title||"Slidev");Oy({title:e}),Ny(`${e} - shared`),Uy(`${e} - drawings`);function n(){Rt.value&&(ui("page",+qe.value),ui("clicks",Tt.value))}yt.afterEach(n),de(Tt,n),jy(s=>{(+s.page!=+qe.value||Tt.value!==s.clicks)&&yt.replace({path:rr(s.page),query:{...yt.currentRoute.value.query,clicks:s.clicks||0}})})}const Jb=_e({__name:"App",setup(e){return D(M),zb(),(n,s)=>{const o=So("RouterView"),r=So("StarportCarrier");return k(),U(Se,null,[V(o),V(r)],64)}}});function $r(e){return e!==null&&typeof e=="object"}function fl(e,n,s=".",o){if(!$r(n))return fl(e,{},s,o);const r=Object.assign({},n);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const a=e[l];a!=null&&(o&&o(r,l,a,s)||(Array.isArray(a)&&Array.isArray(r[l])?r[l]=a.concat(r[l]):$r(a)&&$r(r[l])?r[l]=fl(a,r[l],(s?`${s}.`:"")+l.toString(),o):r[l]=a))}return r}function Yb(e){return(...n)=>n.reduce((s,o)=>fl(s,o,"",e),{})}const Gb=Yb(),Ep=1/60*1e3,Zb=typeof performance<"u"?()=>performance.now():()=>Date.now(),Tp=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Zb()),Ep);function Xb(e){let n=[],s=[],o=0,r=!1,l=!1;const a=new WeakSet,i={schedule:(c,u=!1,d=!1)=>{const f=d&&r,h=f?n:s;return u&&a.add(c),h.indexOf(c)===-1&&(h.push(c),f&&r&&(o=n.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),a.delete(c)},process:c=>{if(r){l=!0;return}if(r=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let u=0;u<o;u++){const d=n[u];d(c),a.has(d)&&(i.schedule(d),e())}r=!1,l&&(l=!1,i.process(c))}};return i}const Qb=40;let hl=!0,Xs=!1,yl=!1;const os={delta:0,timestamp:0},no=["read","update","preRender","render","postRender"],lr=no.reduce((e,n)=>(e[n]=Xb(()=>Xs=!0),e),{}),ml=no.reduce((e,n)=>{const s=lr[n];return e[n]=(o,r=!1,l=!1)=>(Xs||n3(),s.schedule(o,r,l)),e},{}),e3=no.reduce((e,n)=>(e[n]=lr[n].cancel,e),{});no.reduce((e,n)=>(e[n]=()=>lr[n].process(os),e),{});const t3=e=>lr[e].process(os),Cp=e=>{Xs=!1,os.delta=hl?Ep:Math.max(Math.min(e-os.timestamp,Qb),1),os.timestamp=e,yl=!0,no.forEach(t3),yl=!1,Xs&&(hl=!1,Tp(Cp))},n3=()=>{Xs=!0,hl=!0,yl||Tp(Cp)},Op=()=>os;function Dp(e,n){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(s[o[r]]=e[o[r]]);return s}var s3=function(){},rc=function(){};const gl=(e,n,s)=>Math.min(Math.max(s,e),n),Sr=.001,o3=.01,lc=10,r3=.05,l3=1;function a3({duration:e=800,bounce:n=.25,velocity:s=0,mass:o=1}){let r,l;s3(e<=lc*1e3);let a=1-n;a=gl(r3,l3,a),e=gl(o3,lc,e/1e3),a<1?(r=u=>{const d=u*a,f=d*e,h=d-s,m=vl(u,a),y=Math.exp(-f);return Sr-h/m*y},l=u=>{const f=u*a*e,h=f*s+s,m=Math.pow(a,2)*Math.pow(u,2)*e,y=Math.exp(-f),_=vl(Math.pow(u,2),a);return(-r(u)+Sr>0?-1:1)*((h-m)*y)/_}):(r=u=>{const d=Math.exp(-u*e),f=(u-s)*e+1;return-Sr+d*f},l=u=>{const d=Math.exp(-u*e),f=(s-u)*(e*e);return d*f});const i=5/e,c=c3(r,l,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:e}}}const i3=12;function c3(e,n,s){let o=s;for(let r=1;r<i3;r++)o=o-e(o)/n(o);return o}function vl(e,n){return e*Math.sqrt(1-n*n)}const u3=["duration","bounce"],p3=["stiffness","damping","mass"];function ac(e,n){return n.some(s=>e[s]!==void 0)}function d3(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!ac(e,p3)&&ac(e,u3)){const s=a3(e);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function ia(e){var{from:n=0,to:s=1,restSpeed:o=2,restDelta:r}=e,l=Dp(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:i,damping:c,mass:u,velocity:d,duration:f,isResolvedFromDuration:h}=d3(l),m=ic,y=ic;function _(){const w=d?-(d/1e3):0,b=s-n,A=c/(2*Math.sqrt(i*u)),x=Math.sqrt(i/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(s-n)/100,.4)),A<1){const S=vl(x,A);m=P=>{const R=Math.exp(-A*x*P);return s-R*((w+A*x*b)/S*Math.sin(S*P)+b*Math.cos(S*P))},y=P=>{const R=Math.exp(-A*x*P);return A*x*R*(Math.sin(S*P)*(w+A*x*b)/S+b*Math.cos(S*P))-R*(Math.cos(S*P)*(w+A*x*b)-S*b*Math.sin(S*P))}}else if(A===1)m=S=>s-Math.exp(-x*S)*(b+(w+x*b)*S);else{const S=x*Math.sqrt(A*A-1);m=P=>{const R=Math.exp(-A*x*P),N=Math.min(S*P,300);return s-R*((w+A*x*b)*Math.sinh(N)+S*b*Math.cosh(N))/S}}}return _(),{next:w=>{const b=m(w);if(h)a.done=w>=f;else{const A=y(w)*1e3,x=Math.abs(A)<=o,S=Math.abs(s-b)<=r;a.done=x&&S}return a.value=a.done?s:b,a},flipTarget:()=>{d=-d,[n,s]=[s,n],_()}}}ia.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const ic=e=>0,Ip=(e,n,s)=>{const o=n-e;return o===0?1:(s-e)/o},ca=(e,n,s)=>-s*e+s*n+e,Pp=(e,n)=>s=>Math.max(Math.min(s,n),e),Rs=e=>e%1?Number(e.toFixed(5)):e,Qs=/(-)?([\d]*\.?[\d])+/g,_l=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,f3=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function so(e){return typeof e=="string"}const oo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Fs=Object.assign(Object.assign({},oo),{transform:Pp(0,1)}),yo=Object.assign(Object.assign({},oo),{default:1}),ua=e=>({test:n=>so(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),gn=ua("deg"),Ls=ua("%"),ae=ua("px"),cc=Object.assign(Object.assign({},Ls),{parse:e=>Ls.parse(e)/100,transform:e=>Ls.transform(e*100)}),pa=(e,n)=>s=>Boolean(so(s)&&f3.test(s)&&s.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(s,n)),Mp=(e,n,s)=>o=>{if(!so(o))return o;const[r,l,a,i]=o.match(Qs);return{[e]:parseFloat(r),[n]:parseFloat(l),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},En={test:pa("hsl","hue"),parse:Mp("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(e)+", "+Ls.transform(Rs(n))+", "+Ls.transform(Rs(s))+", "+Rs(Fs.transform(o))+")"},h3=Pp(0,255),Er=Object.assign(Object.assign({},oo),{transform:e=>Math.round(h3(e))}),on={test:pa("rgb","red"),parse:Mp("red","green","blue"),transform:({red:e,green:n,blue:s,alpha:o=1})=>"rgba("+Er.transform(e)+", "+Er.transform(n)+", "+Er.transform(s)+", "+Rs(Fs.transform(o))+")"};function y3(e){let n="",s="",o="",r="";return e.length>5?(n=e.substr(1,2),s=e.substr(3,2),o=e.substr(5,2),r=e.substr(7,2)):(n=e.substr(1,1),s=e.substr(2,1),o=e.substr(3,1),r=e.substr(4,1),n+=n,s+=s,o+=o,r+=r),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const wl={test:pa("#"),parse:y3,transform:on.transform},lt={test:e=>on.test(e)||wl.test(e)||En.test(e),parse:e=>on.test(e)?on.parse(e):En.test(e)?En.parse(e):wl.parse(e),transform:e=>so(e)?e:e.hasOwnProperty("red")?on.transform(e):En.transform(e)},Rp="${c}",Fp="${n}";function m3(e){var n,s,o,r;return isNaN(e)&&so(e)&&((s=(n=e.match(Qs))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((r=(o=e.match(_l))===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0)>0}function Lp(e){typeof e=="number"&&(e=`${e}`);const n=[];let s=0;const o=e.match(_l);o&&(s=o.length,e=e.replace(_l,Rp),n.push(...o.map(lt.parse)));const r=e.match(Qs);return r&&(e=e.replace(Qs,Fp),n.push(...r.map(oo.parse))),{values:n,numColors:s,tokenised:e}}function Hp(e){return Lp(e).values}function qp(e){const{values:n,numColors:s,tokenised:o}=Lp(e),r=n.length;return l=>{let a=o;for(let i=0;i<r;i++)a=a.replace(i<s?Rp:Fp,i<s?lt.transform(l[i]):Rs(l[i]));return a}}const g3=e=>typeof e=="number"?0:e;function v3(e){const n=Hp(e);return qp(e)(n.map(g3))}const ro={test:m3,parse:Hp,createTransformer:qp,getAnimatableNone:v3},_3=new Set(["brightness","contrast","saturate","opacity"]);function w3(e){let[n,s]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[o]=s.match(Qs)||[];if(!o)return e;const r=s.replace(o,"");let l=_3.has(n)?1:0;return o!==s&&(l*=100),n+"("+l+r+")"}const b3=/([a-z-]*)\(.*?\)/g,bl=Object.assign(Object.assign({},ro),{getAnimatableNone:e=>{const n=e.match(b3);return n?n.map(w3).join(" "):e}});function Tr(e,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(n-e)*6*s:s<1/2?n:s<2/3?e+(n-e)*(2/3-s)*6:e}function uc({hue:e,saturation:n,lightness:s,alpha:o}){e/=360,n/=100,s/=100;let r=0,l=0,a=0;if(!n)r=l=a=s;else{const i=s<.5?s*(1+n):s+n-s*n,c=2*s-i;r=Tr(c,i,e+1/3),l=Tr(c,i,e),a=Tr(c,i,e-1/3)}return{red:Math.round(r*255),green:Math.round(l*255),blue:Math.round(a*255),alpha:o}}const k3=(e,n,s)=>{const o=e*e,r=n*n;return Math.sqrt(Math.max(0,s*(r-o)+o))},B3=[wl,on,En],pc=e=>B3.find(n=>n.test(e)),Np=(e,n)=>{let s=pc(e),o=pc(n),r=s.parse(e),l=o.parse(n);s===En&&(r=uc(r),s=on),o===En&&(l=uc(l),o=on);const a=Object.assign({},r);return i=>{for(const c in a)c!=="alpha"&&(a[c]=k3(r[c],l[c],i));return a.alpha=ca(r.alpha,l.alpha,i),s.transform(a)}},x3=e=>typeof e=="number",A3=(e,n)=>s=>n(e(s)),jp=(...e)=>e.reduce(A3);function Wp(e,n){return x3(e)?s=>ca(e,n,s):lt.test(e)?Np(e,n):Up(e,n)}const Vp=(e,n)=>{const s=[...e],o=s.length,r=e.map((l,a)=>Wp(l,n[a]));return l=>{for(let a=0;a<o;a++)s[a]=r[a](l);return s}},$3=(e,n)=>{const s=Object.assign(Object.assign({},e),n),o={};for(const r in s)e[r]!==void 0&&n[r]!==void 0&&(o[r]=Wp(e[r],n[r]));return r=>{for(const l in o)s[l]=o[l](r);return s}};function dc(e){const n=ro.parse(e),s=n.length;let o=0,r=0,l=0;for(let a=0;a<s;a++)o||typeof n[a]=="number"?o++:n[a].hue!==void 0?l++:r++;return{parsed:n,numNumbers:o,numRGB:r,numHSL:l}}const Up=(e,n)=>{const s=ro.createTransformer(n),o=dc(e),r=dc(n);return o.numHSL===r.numHSL&&o.numRGB===r.numRGB&&o.numNumbers>=r.numNumbers?jp(Vp(o.parsed,r.parsed),s):a=>`${a>0?n:e}`},S3=(e,n)=>s=>ca(e,n,s);function E3(e){if(typeof e=="number")return S3;if(typeof e=="string")return lt.test(e)?Np:Up;if(Array.isArray(e))return Vp;if(typeof e=="object")return $3}function T3(e,n,s){const o=[],r=s||E3(e[0]),l=e.length-1;for(let a=0;a<l;a++){let i=r(e[a],e[a+1]);if(n){const c=Array.isArray(n)?n[a]:n;i=jp(c,i)}o.push(i)}return o}function C3([e,n],[s]){return o=>s(Ip(e,n,o))}function O3(e,n){const s=e.length,o=s-1;return r=>{let l=0,a=!1;if(r<=e[0]?a=!0:r>=e[o]&&(l=o-1,a=!0),!a){let c=1;for(;c<s&&!(e[c]>r||c===o);c++);l=c-1}const i=Ip(e[l],e[l+1],r);return n[l](i)}}function Kp(e,n,{clamp:s=!0,ease:o,mixer:r}={}){const l=e.length;rc(l===n.length),rc(!o||!Array.isArray(o)||o.length===l-1),e[0]>e[l-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const a=T3(n,o,r),i=l===2?C3(e,a):O3(e,a);return s?c=>i(gl(e[0],e[l-1],c)):i}const ar=e=>n=>1-e(1-n),da=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,D3=e=>n=>Math.pow(n,e),zp=e=>n=>n*n*((e+1)*n-e),I3=e=>{const n=zp(e);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},Jp=1.525,P3=4/11,M3=8/11,R3=9/10,Yp=e=>e,fa=D3(2),F3=ar(fa),Gp=da(fa),Zp=e=>1-Math.sin(Math.acos(e)),Xp=ar(Zp),L3=da(Xp),ha=zp(Jp),H3=ar(ha),q3=da(ha),N3=I3(Jp),j3=4356/361,W3=35442/1805,V3=16061/1805,Fo=e=>{if(e===1||e===0)return e;const n=e*e;return e<P3?7.5625*n:e<M3?9.075*n-9.9*e+3.4:e<R3?j3*n-W3*e+V3:10.8*e*e-20.52*e+10.72},U3=ar(Fo),K3=e=>e<.5?.5*(1-Fo(1-e*2)):.5*Fo(e*2-1)+.5;function z3(e,n){return e.map(()=>n||Gp).splice(0,e.length-1)}function J3(e){const n=e.length;return e.map((s,o)=>o!==0?o/(n-1):0)}function Y3(e,n){return e.map(s=>s*n)}function ko({from:e=0,to:n=1,ease:s,offset:o,duration:r=300}){const l={done:!1,value:e},a=Array.isArray(n)?n:[e,n],i=Y3(o&&o.length===a.length?o:J3(a),r);function c(){return Kp(i,a,{ease:Array.isArray(s)?s:z3(a,s)})}let u=c();return{next:d=>(l.value=u(d),l.done=d>=r,l),flipTarget:()=>{a.reverse(),u=c()}}}function G3({velocity:e=0,from:n=0,power:s=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:l}){const a={done:!1,value:n};let i=s*e;const c=n+i,u=l===void 0?c:l(c);return u!==c&&(i=u-n),{next:d=>{const f=-i*Math.exp(-d/o);return a.done=!(f>r||f<-r),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const fc={keyframes:ko,spring:ia,decay:G3};function Z3(e){if(Array.isArray(e.to))return ko;if(fc[e.type])return fc[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?ko:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?ia:ko}function Qp(e,n,s=0){return e-n-s}function X3(e,n,s=0,o=!0){return o?Qp(n+-e,n,s):n-(e-n)+s}function Q3(e,n,s,o){return o?e>=n+s:e<=-s}const ek=e=>{const n=({delta:s})=>e(s);return{start:()=>ml.update(n,!0),stop:()=>e3.update(n)}};function ed(e){var n,s,{from:o,autoplay:r=!0,driver:l=ek,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:f,onComplete:h,onRepeat:m,onUpdate:y}=e,_=Dp(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:w}=_,b,A=0,x=_.duration,S,P=!1,R=!0,N;const Q=Z3(_);!((s=(n=Q).needsInterpolation)===null||s===void 0)&&s.call(n,o,w)&&(N=Kp([0,100],[o,w],{clamp:!1}),o=0,w=100);const ue=Q(Object.assign(Object.assign({},_),{from:o,to:w}));function he(){A++,c==="reverse"?(R=A%2===0,a=X3(a,x,u,R)):(a=Qp(a,x,u),c==="mirror"&&ue.flipTarget()),P=!1,m&&m()}function we(){b.stop(),h&&h()}function Ve(Me){if(R||(Me=-Me),a+=Me,!P){const Oe=ue.next(Math.max(0,a));S=Oe.value,N&&(S=N(S)),P=R?Oe.done:a<=0}y==null||y(S),P&&(A===0&&(x!=null||(x=a)),A<i?Q3(a,x,u,R)&&he():we())}function Ne(){d==null||d(),b=l(Ve),b.start()}return r&&Ne(),{stop:()=>{f==null||f(),b.stop()}}}function td(e,n){return n?e*(1e3/n):0}function tk({from:e=0,velocity:n=0,min:s,max:o,power:r=.8,timeConstant:l=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:f,onComplete:h,onStop:m}){let y;function _(x){return s!==void 0&&x<s||o!==void 0&&x>o}function w(x){return s===void 0?o:o===void 0||Math.abs(s-x)<Math.abs(o-x)?s:o}function b(x){y==null||y.stop(),y=ed(Object.assign(Object.assign({},x),{driver:d,onUpdate:S=>{var P;f==null||f(S),(P=x.onUpdate)===null||P===void 0||P.call(x,S)},onComplete:h,onStop:m}))}function A(x){b(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},x))}if(_(e))A({from:e,velocity:n,to:w(e)});else{let x=r*n+e;typeof u<"u"&&(x=u(x));const S=w(x),P=S===s?-1:1;let R,N;const Q=ue=>{R=N,N=ue,n=td(ue-R,Op().delta),(P===1&&ue>S||P===-1&&ue<S)&&A({from:ue,to:S,velocity:n})};b({type:"decay",from:e,velocity:n,timeConstant:l,power:r,restDelta:c,modifyTarget:u,onUpdate:_(x)?Q:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const nd=(e,n)=>1-3*n+3*e,sd=(e,n)=>3*n-6*e,od=e=>3*e,Lo=(e,n,s)=>((nd(n,s)*e+sd(n,s))*e+od(n))*e,rd=(e,n,s)=>3*nd(n,s)*e*e+2*sd(n,s)*e+od(n),nk=1e-7,sk=10;function ok(e,n,s,o,r){let l,a,i=0;do a=n+(s-n)/2,l=Lo(a,o,r)-e,l>0?s=a:n=a;while(Math.abs(l)>nk&&++i<sk);return a}const rk=8,lk=.001;function ak(e,n,s,o){for(let r=0;r<rk;++r){const l=rd(n,s,o);if(l===0)return n;const a=Lo(n,s,o)-e;n-=a/l}return n}const Bo=11,mo=1/(Bo-1);function ik(e,n,s,o){if(e===n&&s===o)return Yp;const r=new Float32Array(Bo);for(let a=0;a<Bo;++a)r[a]=Lo(a*mo,e,s);function l(a){let i=0,c=1;const u=Bo-1;for(;c!==u&&r[c]<=a;++c)i+=mo;--c;const d=(a-r[c])/(r[c+1]-r[c]),f=i+d*mo,h=rd(f,e,s);return h>=lk?ak(a,f,e,s):h===0?f:ok(a,i,i+mo,e,s)}return a=>a===0||a===1?a:Lo(l(a),n,o)}const Cr={};class ck{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,o){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(n,s,o)}clear(){this.subscriptions.clear()}}const hc=e=>!isNaN(parseFloat(e));class uk{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new ck,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:r}=Op();this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r),ml.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>ml.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=hc(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=hc(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?td(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:o}=n(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function pk(e){return new uk(e)}const{isArray:dk}=Array;function fk(){const e=W({}),n=o=>{const r=l=>{!e.value[l]||(e.value[l].stop(),e.value[l].destroy(),delete e.value[l])};o?dk(o)?o.forEach(r):r(o):Object.keys(e.value).forEach(r)},s=(o,r,l)=>{if(e.value[o])return e.value[o];const a=pk(r);return a.onChange(i=>l[o]=i),e.value[o]=a,a};return oy(n),{motionValues:e,get:s,stop:n}}const hk=e=>Array.isArray(e),vn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Or=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),yk=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Dr=()=>({type:"keyframes",ease:"linear",duration:300}),mk=e=>({type:"keyframes",duration:800,values:e}),yc={default:yk,x:vn,y:vn,z:vn,rotate:vn,rotateX:vn,rotateY:vn,rotateZ:vn,scaleX:Or,scaleY:Or,scale:Or,backgroundColor:Dr,color:Dr,opacity:Dr},ld=(e,n)=>{let s;return hk(n)?s=mk:s=yc[e]||yc.default,{to:n,...s(n)}},mc={...oo,transform:Math.round},ad={color:lt,backgroundColor:lt,outlineColor:lt,fill:lt,stroke:lt,borderColor:lt,borderTopColor:lt,borderRightColor:lt,borderBottomColor:lt,borderLeftColor:lt,borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,radius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,size:ae,top:ae,right:ae,bottom:ae,left:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,rotate:gn,rotateX:gn,rotateY:gn,rotateZ:gn,scale:yo,scaleX:yo,scaleY:yo,scaleZ:yo,skew:gn,skewX:gn,skewY:gn,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:Fs,originX:cc,originY:cc,originZ:ae,zIndex:mc,filter:bl,WebkitFilter:bl,fillOpacity:Fs,strokeOpacity:Fs,numOctaves:mc},ya=e=>ad[e],id=(e,n)=>n&&typeof e=="number"&&n.transform?n.transform(e):e;function gk(e,n){let s=ya(e);return s!==bl&&(s=ro),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const vk={linear:Yp,easeIn:fa,easeInOut:Gp,easeOut:F3,circIn:Zp,circInOut:L3,circOut:Xp,backIn:ha,backInOut:q3,backOut:H3,anticipate:N3,bounceIn:U3,bounceInOut:K3,bounceOut:Fo},gc=e=>{if(Array.isArray(e)){const[n,s,o,r]=e;return ik(n,s,o,r)}else if(typeof e=="string")return vk[e];return e},_k=e=>Array.isArray(e)&&typeof e[0]!="number",vc=(e,n)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&ro.test(n)&&!n.startsWith("url("));function wk(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function bk({ease:e,times:n,delay:s,...o}){const r={...o};return n&&(r.offset=n),e&&(r.ease=_k(e)?e.map(gc):gc(e)),s&&(r.elapsed=-s),r}function kk(e,n,s){return Array.isArray(n.to)&&(e.duration||(e.duration=800)),wk(n),Bk(e)||(e={...e,...ld(s,n.to)}),{...n,...bk(e)}}function Bk({delay:e,repeat:n,repeatType:s,repeatDelay:o,from:r,...l}){return!!Object.keys(l).length}function xk(e,n){return e[n]||e.default||e}function Ak(e,n,s,o,r){const l=xk(o,e);let a=l.from===null||l.from===void 0?n.get():l.from;const i=vc(e,s);a==="none"&&i&&typeof s=="string"&&(a=gk(e,s));const c=vc(e,a);function u(f){const h={from:a,to:s,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:m=>n.set(m)};return l.type==="inertia"||l.type==="decay"?tk({...h,...l}):ed({...kk(l,h,e),onUpdate:m=>{h.onUpdate(m),l.onUpdate&&l.onUpdate(m)},onComplete:()=>{o.onComplete&&o.onComplete(),r&&r(),f&&f()}})}function d(f){return n.set(s),o.onComplete&&o.onComplete(),r&&r(),f&&f(),{stop:()=>{}}}return!c||!i||l.type===!1?d:u}function $k(){const{motionValues:e,stop:n,get:s}=fk();return{motionValues:e,stop:n,push:(r,l,a,i={},c)=>{const u=a[r],d=s(r,u,a);if(i&&i.immediate){d.set(l);return}const f=Ak(r,d,l,i,c);d.start(f)}}}function Sk(e,n={},{motionValues:s,push:o,stop:r}=$k()){const l=B(n),a=W(!1);de(s,f=>{a.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const i=f=>{if(!l||!l[f])throw new Error(`The variant ${f} does not exist.`);return l[f]},c=f=>(typeof f=="string"&&(f=i(f)),Promise.all(Object.entries(f).map(([h,m])=>{if(h!=="transition")return new Promise(y=>o(h,m,e,f.transition||ld(h,f[h]),y))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const h=Yr(f)?f:i(f);Object.entries(h).forEach(([m,y])=>{m!=="transition"&&o(m,y,e,{immediate:!0})})},leave:async f=>{let h;if(l&&(l.leave&&(h=l.leave),!l.leave&&l.initial&&(h=l.initial)),!h){f();return}await c(h),f()},stop:r}}const ma=typeof window<"u",Ek=()=>ma&&window.onpointerdown===null,Tk=()=>ma&&window.ontouchstart===null,Ck=()=>ma&&window.onmousedown===null;function Ok({target:e,state:n,variants:s,apply:o}){const r=B(s),l=W(!1),a=W(!1),i=W(!1),c=E(()=>{let d=[];return r&&(r.hovered&&(d=[...d,...Object.keys(r.hovered)]),r.tapped&&(d=[...d,...Object.keys(r.tapped)]),r.focused&&(d=[...d,...Object.keys(r.focused)])),d}),u=E(()=>{const d={};Object.assign(d,n.value),l.value&&r.hovered&&Object.assign(d,r.hovered),a.value&&r.tapped&&Object.assign(d,r.tapped),i.value&&r.focused&&Object.assign(d,r.focused);for(const f in d)c.value.includes(f)||delete d[f];return d});r.hovered&&(ce(e,"mouseenter",()=>l.value=!0),ce(e,"mouseleave",()=>{l.value=!1,a.value=!1}),ce(e,"mouseout",()=>{l.value=!1,a.value=!1})),r.tapped&&(Ck()&&(ce(e,"mousedown",()=>a.value=!0),ce(e,"mouseup",()=>a.value=!1)),Ek()&&(ce(e,"pointerdown",()=>a.value=!0),ce(e,"pointerup",()=>a.value=!1)),Tk()&&(ce(e,"touchstart",()=>a.value=!0),ce(e,"touchend",()=>a.value=!1))),r.focused&&(ce(e,"focus",()=>i.value=!0),ce(e,"blur",()=>i.value=!1)),de(u,o)}function Dk({set:e,target:n,apply:s,variants:o,variant:r}){const l=B(o);de(()=>n,()=>{!l||(l.initial&&e("initial"),l.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function Ik({state:e,apply:n}){de(e,s=>{s&&n(s)},{immediate:!0})}function Pk({target:e,variants:n,variant:s}){const o=B(n);o&&(o.visible||o.visibleOnce)&&Cm(e,([{isIntersecting:r}])=>{o.visible?r?s.value="visible":s.value="initial":o.visibleOnce&&(r&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function Mk(e,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&Dk(e),n.syncVariants&&Ik(e),n.visibilityHooks&&Pk(e),n.eventListeners&&Ok(e)}function cd(e={}){const n=Ie({...e}),s=W({});return de(n,()=>{const o={};for(const[r,l]of Object.entries(n)){const a=ya(r),i=id(l,a);o[r]=i}s.value=o},{immediate:!0,deep:!0}),{state:n,style:s}}function ga(e,n){de(()=>$t(e),s=>{!s||n(s)},{immediate:!0})}const Rk={x:"translateX",y:"translateY",z:"translateZ"};function ud(e={},n=!0){const s=Ie({...e}),o=W("");return de(s,r=>{let l="",a=!1;if(n&&(r.x||r.y||r.z)){const i=[r.x||0,r.y||0,r.z||0].map(ae.transform).join(",");l+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(r)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const u=ya(i),d=id(c,u);l+=`${Rk[i]||i}(${d}) `}n&&!a&&(l+="translateZ(0px) "),o.value=l.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const Fk=["","X","Y","Z"],Lk=["perspective","translate","scale","rotate","skew"],pd=["transformPerspective","x","y","z"];Lk.forEach(e=>{Fk.forEach(n=>{const s=e+n;pd.push(s)})});const Hk=new Set(pd);function va(e){return Hk.has(e)}const qk=new Set(["originX","originY","originZ"]);function dd(e){return qk.has(e)}function Nk(e){const n={},s={};return Object.entries(e).forEach(([o,r])=>{va(o)||dd(o)?n[o]=r:s[o]=r}),{transform:n,style:s}}function fd(e){const{transform:n,style:s}=Nk(e),{transform:o}=ud(n),{style:r}=cd(s);return o.value&&(r.value.transform=o.value),r.value}function jk(e,n){let s,o;const{state:r,style:l}=cd();return ga(e,a=>{o=a;for(const i of Object.keys(ad))a.style[i]===null||a.style[i]===""||va(i)||dd(i)||(r[i]=a.style[i]);s&&Object.entries(s).forEach(([i,c])=>a.style[i]=c),n&&n(r)}),de(l,a=>{if(!o){s=a;return}for(const i in a)o.style[i]=a[i]},{immediate:!0}),{style:r}}function Wk(e){const n=e.trim().split(/\) |\)/);if(n.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,r)=>{if(!r)return o;const[l,a]=r.split("("),c=a.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...o,[l]:u}},{})}function Vk(e,n){Object.entries(Wk(n)).forEach(([s,o])=>{const r=["x","y","z"];if(s==="translate3d"){if(o===0){r.forEach(l=>e[l]=0);return}o.forEach((l,a)=>e[r[a]]=l);return}if(o=parseFloat(o),s==="translateX"){e.x=o;return}if(s==="translateY"){e.y=o;return}if(s==="translateZ"){e.z=o;return}e[s]=o})}function Uk(e,n){let s,o;const{state:r,transform:l}=ud();return ga(e,a=>{o=a,a.style.transform&&Vk(r,a.style.transform),s&&(a.style.transform=s),n&&n(r)}),de(l,a=>{if(!o){s=a;return}o.style.transform=a},{immediate:!0}),{transform:r}}function Kk(e,n){const s=Ie({}),o=a=>Object.entries(a).forEach(([i,c])=>s[i]=c),{style:r}=jk(e,o),{transform:l}=Uk(e,o);return de(s,a=>{Object.entries(a).forEach(([i,c])=>{const u=va(i)?l:r;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),ga(e,()=>n&&o(n)),{motionProperties:s,style:r,transform:l}}function zk(e={}){const n=B(e),s=W();return{state:E(()=>{if(!!s.value)return n[s.value]}),variant:s}}function hd(e,n={},s){const{motionProperties:o}=Kk(e),{variant:r,state:l}=zk(n),a=Sk(o,n),i={target:e,variant:r,variants:n,state:l,motionProperties:o,...a};return Mk(i,s),i}const Jk=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],Yk=(e,n)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&Yr(s.variants)&&(n.value={...n.value,...s.variants}),Jk.forEach(o=>{if(o==="delay"){if(s&&s[o]&&Wh(s[o])){const r=s[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:r,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:r,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:r,...n.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&Yr(s[o])&&(n.value[o]=s[o])}))},Ir=e=>({created:(s,o,r)=>{const l=o.value&&typeof o.value=="string"?o.value:r.key;l&&Cr[l]&&Cr[l].stop();const a=W(e||{});typeof o.value=="object"&&(a.value=o.value),Yk(r,a);const i=hd(s,a);s.motionInstance=i,l&&(Cr[l]=i)},getSSRProps(s,o){let{initial:r}=s.value||o&&(o==null?void 0:o.props)||{};r=B(r);const l=Gb((e==null?void 0:e.initial)||{},r||{});return!l||Object.keys(l).length===0?void 0:{style:fd(l)}}}),Gk={initial:{opacity:0},enter:{opacity:1}},Zk={initial:{opacity:0},visible:{opacity:1}},Xk={initial:{opacity:0},visibleOnce:{opacity:1}},Qk={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},eB={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},tB={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},nB={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},sB={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},oB={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},rB={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},lB={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},aB={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},iB={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},cB={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},uB={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},pB={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},dB={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},fB={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},hB={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},yB={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},mB={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},gB={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},vB={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},_B={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},wB={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},bB={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},kB={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},BB={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},xB={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},AB={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},kl={__proto__:null,fade:Gk,fadeVisible:Zk,fadeVisibleOnce:Xk,pop:Qk,popVisible:eB,popVisibleOnce:tB,rollBottom:pB,rollLeft:nB,rollRight:rB,rollTop:iB,rollVisibleBottom:dB,rollVisibleLeft:sB,rollVisibleRight:lB,rollVisibleTop:cB,rollVisibleOnceBottom:fB,rollVisibleOnceLeft:oB,rollVisibleOnceRight:aB,rollVisibleOnceTop:uB,slideBottom:BB,slideLeft:hB,slideRight:gB,slideTop:wB,slideVisibleBottom:xB,slideVisibleLeft:yB,slideVisibleRight:vB,slideVisibleTop:bB,slideVisibleOnceBottom:AB,slideVisibleOnceLeft:mB,slideVisibleOnceRight:_B,slideVisibleOnceTop:kB},$B=_e({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const n=yh(),s=Ie({});if(!e.is&&!n.default)return()=>Xe("div",{});const o=E(()=>{let c;return e.preset&&(c=kl[e.preset]),c}),r=E(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),l=E(()=>{const c={...r.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=E(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Ad(c)&&(c=So(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var f,h,m;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(h=u.variants)!=null&&h.visible&&u.apply("visible"),(m=u.variants)!=null&&m.visibleOnce&&u.apply("visibleOnce")},10)};Nl(()=>Object.entries(s).forEach(([u,d])=>c(d)))}return{slots:n,component:a,motionConfig:l,instances:s}},render({slots:e,motionConfig:n,instances:s,component:o}){var i;const r=fd(n.initial||{}),l=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:d})=>{const f=hd(d,n);s[u]=f},c);if(o){const c=Xe(o,void 0,e);return l(c,0),c}return(((i=e.default)==null?void 0:i.call(e))||[]).map((c,u)=>l(c,u))}});function SB(e){const n="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(o,r=>s.charAt(n.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const EB={install(e,n){if(e.directive("motion",Ir()),e.component("Motion",$B),!n||n&&!n.excludePresets)for(const s in kl){const o=kl[s];e.directive(`motion-${SB(s)}`,Ir(o))}if(n&&n.directives)for(const s in n.directives){const o=n.directives[s];o.initial,e.directive(`motion-${s}`,Ir(o))}}};var _c;const Hs=typeof window<"u",TB=Object.prototype.toString,CB=e=>TB.call(e)==="[object Object]";Hs&&((_c=window==null?void 0:window.navigator)==null?void 0:_c.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function OB(e){return qc()?(Nc(e),!0):!1}function DB(e){var n;const s=B(e);return(n=s==null?void 0:s.$el)!=null?n:s}const IB=Hs?window:void 0,Bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xl="__vueuse_ssr_handlers__";Bl[xl]=Bl[xl]||{};Bl[xl];function PB(e,n={}){const{immediate:s=!0,window:o=IB}=n,r=W(!1);let l=null;function a(){!r.value||!o||(e(),l=o.requestAnimationFrame(a))}function i(){!r.value&&o&&(r.value=!0,a())}function c(){r.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return s&&i(),OB(c),{isActive:r,pause:c,resume:i}}var wc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(wc||(wc={}));const _a="vue-starport-injection",yd="vue-starport-options",MB={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},md={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var RB=Object.defineProperty,Ho=Object.getOwnPropertySymbols,gd=Object.prototype.hasOwnProperty,vd=Object.prototype.propertyIsEnumerable,bc=(e,n,s)=>n in e?RB(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,FB=(e,n)=>{for(var s in n||(n={}))gd.call(n,s)&&bc(e,s,n[s]);if(Ho)for(var s of Ho(n))vd.call(n,s)&&bc(e,s,n[s]);return e},kc=(e,n)=>{var s={};for(var o in e)gd.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Ho)for(var o of Ho(e))n.indexOf(o)<0&&vd.call(e,o)&&(s[o]=e[o]);return s};const LB=_e({name:"StarportProxy",props:FB({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},md),setup(e,n){const s=D(_a),o=E(()=>s.getInstance(e.port,e.component)),r=W(),l=o.value.generateId(),a=W(!1);return o.value.isVisible||(o.value.land(),a.value=!0),fs(async()=>{o.value.el||(o.value.el=r.value,await Ge(),a.value=!0,o.value.rect.update())}),Zo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await Ge(),await Ge(),!o.value.el&&s.dispose(o.value.port))}),de(()=>e,async()=>{o.value.props&&await Ge();const i=e,{props:c}=i,u=kc(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:u}=i,d=kc(i,["initialProps","mountedProps"]),f=at(d,(a.value?u:c)||{});return Xe("div",at(f,{id:l,ref:r,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?Xe(n.slots.default):void 0)}}});var HB=Object.defineProperty,qB=Object.defineProperties,NB=Object.getOwnPropertyDescriptors,Bc=Object.getOwnPropertySymbols,jB=Object.prototype.hasOwnProperty,WB=Object.prototype.propertyIsEnumerable,xc=(e,n,s)=>n in e?HB(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,VB=(e,n)=>{for(var s in n||(n={}))jB.call(n,s)&&xc(e,s,n[s]);if(Bc)for(var s of Bc(n))WB.call(n,s)&&xc(e,s,n[s]);return e},UB=(e,n)=>qB(e,NB(n));const KB=_e({name:"Starport",inheritAttrs:!0,props:md,setup(e,n){const s=W(!1);return fs(()=>{s.value=!0}),()=>{var a,i;const o=(i=(a=n.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const r=o[0];let l=r.type;return(!CB(l)||In(l))&&(l={render(){return o}}),Xe(LB,UB(VB({},e),{key:e.port,component:Ko(l),props:r.props}))}}});function zB(e){const n=Ie({height:0,width:0,left:0,top:0,update:o,listen:l,pause:a,margin:"0px",padding:"0px"}),s=Hs?document.documentElement||document.body:void 0;function o(){if(!Hs)return;const i=DB(e);if(!i)return;const{height:c,width:u,left:d,top:f}=i.getBoundingClientRect(),h=window.getComputedStyle(i),m=h.margin,y=h.padding;Object.assign(n,{height:c,width:u,left:d,top:s.scrollTop+f,margin:m,padding:y})}const r=PB(o,{immediate:!1});function l(){!Hs||(o(),r.resume())}function a(){r.pause()}return n}let JB=(e,n=21)=>(s=n)=>{let o="",r=s;for(;r--;)o+=e[Math.random()*e.length|0];return o};const Ac=JB("abcdefghijklmnopqrstuvwxyz",5);function $c(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function YB(e){var n;return e.name||((n=e.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var GB=Object.defineProperty,Sc=Object.getOwnPropertySymbols,ZB=Object.prototype.hasOwnProperty,XB=Object.prototype.propertyIsEnumerable,Ec=(e,n,s)=>n in e?GB(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Pr=(e,n)=>{for(var s in n||(n={}))ZB.call(n,s)&&Ec(e,s,n[s]);if(Sc)for(var s of Sc(n))XB.call(n,s)&&Ec(e,s,n[s]);return e};function QB(e,n,s={}){const o=YB(n),r=$c(o)||Ac(),l=W(),a=W(null),i=W(!1),c=W(!1),u=Id(!0),d=W({}),f=E(()=>Pr(Pr(Pr({},MB),s),d.value)),h=W(0);let m;u.run(()=>{m=zB(l),de(l,async b=>{b&&(c.value=!0),await Ge(),l.value||(c.value=!1)})});const y=$c(e);function _(){return`starport-${r}-${y}-${Ac()}`}const w=_();return Ie({el:l,id:w,port:e,props:a,rect:m,scope:u,isLanded:i,isVisible:c,options:f,liftOffTime:h,component:n,componentName:o,componentId:r,generateId:_,setLocalOptions(b={}){d.value=JSON.parse(JSON.stringify(b))},elRef(){return l},liftOff(){!i.value||(i.value=!1,h.value=Date.now(),m.listen())},land(){i.value||(i.value=!0,m.pause())}})}function e9(e){const n=Ie(new Map);function s(r,l){let a=n.get(r);return a||(a=QB(r,l,e),n.set(r,a)),a.component=l,a}function o(r){var l;(l=n.get(r))==null||l.scope.stop(),n.delete(r)}return{portMap:n,dispose:o,getInstance:s}}var t9=Object.defineProperty,n9=Object.defineProperties,s9=Object.getOwnPropertyDescriptors,Tc=Object.getOwnPropertySymbols,o9=Object.prototype.hasOwnProperty,r9=Object.prototype.propertyIsEnumerable,Cc=(e,n,s)=>n in e?t9(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,l9=(e,n)=>{for(var s in n||(n={}))o9.call(n,s)&&Cc(e,s,n[s]);if(Tc)for(var s of Tc(n))r9.call(n,s)&&Cc(e,s,n[s]);return e},a9=(e,n)=>n9(e,s9(n));const i9=_e({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const n=D(_a);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=E(()=>n.getInstance(e.port,e.component)),o=E(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),r=E(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?a9(l9({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),u)}),l={};return()=>{const a=!!(s.value.isLanded&&s.value.el);return Xe("div",{style:r.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},Xe(rh,{to:a?`#${o.value}`:"body",disabled:!a},Xe(s.value.component,at(l,s.value.props))))}}}),c9=_e({name:"StarportCarrier",setup(e,{slots:n}){const s=e9(D(yd,{}));return Hn().appContext.app.provide(_a,s),()=>{var r;return[(r=n.default)==null?void 0:r.call(n),Array.from(s.portMap.entries()).map(([l,{component:a}])=>Xe(i9,{key:l,port:l,component:a}))]}}});function u9(e={}){return{install(n){n.provide(yd,e),n.component("Starport",KB),n.component("StarportCarrier",c9)}}}function p9(e){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),e.app.use(EB),e.app.use(u9({keepAlive:!0}))}function ct(e,n,s){var o,r;return(r=((o=e.instance)==null?void 0:o.$).provides[n])!=null?r:s}function d9(){return{install(e){e.directive("click",{name:"v-click",mounted(n,s){var d,f,h,m;if(Ms.value||((d=ct(s,Os))==null?void 0:d.value))return;const o=ct(s,Bn),r=ct(s,Cs),l=ct(s,Xr),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,u=i?Py:mr;if(o&&!((h=o==null?void 0:o.value)!=null&&h.includes(n))&&o.value.push(n),s.value==null&&(s.value=o==null?void 0:o.value.length),!(l!=null&&l.value.has(s.value)))l==null||l.value.set(s.value,[n]);else if(!((m=l==null?void 0:l.value.get(s.value))!=null&&m.includes(n))){const y=(l==null?void 0:l.value.get(s.value))||[];l==null||l.value.set(s.value,[n].concat(y))}n==null||n.classList.toggle(wn,!0),r&&de(r,()=>{var b;const y=(b=r==null?void 0:r.value)!=null?b:0,_=s.value!=null?y>=s.value:y>c;n.classList.contains(gr)||n.classList.toggle(u,!_),a!==!1&&a!==void 0&&n.classList.toggle(u,_),n.classList.toggle(_s,!1);const w=l==null?void 0:l.value.get(y);w==null||w.forEach((A,x)=>{A.classList.toggle(fo,!1),x===w.length-1?A.classList.toggle(_s,!0):A.classList.toggle(fo,!0)}),n.classList.contains(_s)||n.classList.toggle(fo,_)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(wn,!1);const o=ct(s,Bn);o!=null&&o.value&&Qr(o.value,n)}}),e.directive("after",{name:"v-after",mounted(n,s){var i,c;if(Ms.value||((i=ct(s,Os))==null?void 0:i.value))return;const o=ct(s,Bn),r=ct(s,Cs),l=ct(s,Xr),a=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),l!=null&&l.value.has(s.value)?(c=l==null?void 0:l.value.get(s.value))==null||c.push(n):l==null||l.value.set(s.value,[n]),n==null||n.classList.toggle(wn,!0),r&&de(r,()=>{var d,f,h;const u=((d=r.value)!=null?d:0)>=((h=(f=s.value)!=null?f:a)!=null?h:0);n.classList.contains(gr)||n.classList.toggle(mr,!u),n.classList.toggle(_s,!1),n.classList.contains(_s)||n.classList.toggle(fo,u)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(wn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(n,s){var a,i,c;if(Ms.value||((a=ct(s,Os))==null?void 0:a.value))return;const o=ct(s,Bn),r=ct(s,Cs),l=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(n))&&o.value.push(n),n==null||n.classList.toggle(wn,!0),r&&de(r,()=>{var f;const u=(f=r==null?void 0:r.value)!=null?f:0,d=s.value!=null?u>=s.value:u>l;n.classList.toggle(mr,d),n.classList.toggle(gr,d)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(wn,!1);const o=ct(s,Bn);o!=null&&o.value&&Qr(o.value,n)}})}}}function f9(e,n){const s=hp(e),o=yp(n,s.currentRoute,s.currentPage);return{nav:{...s,...o,downloadPDF:dl,next:un,nextSlide:Gs,openInEditor:Kb,prev:pn,prevSlide:Zs},configs:ke,themeConfigs:E(()=>ke.themeConfig)}}function h9(){return{install(e){const n=f9(Xt,Tt);e.provide(M,Ie(n))}}}const ys=Hh(Jb);ys.use(yt);ys.use(Ey());ys.use(d9());ys.use(h9());p9({app:ys,router:yt});ys.mount("#app");export{ov as $,Hg as A,Ub as B,fs as C,Ie as D,m9 as E,Se as F,_9 as G,de as H,q as I,xe as J,st as K,Yg as L,Fn as M,Ln as N,Tt as O,Ro as P,Nb as Q,Ar as R,vr as S,zs as T,Br as U,l1 as V,Ql as W,ea as X,Z_ as Y,qe as Z,up as _,M as a,Zt as a0,Dt as a1,y9 as a2,gt as a3,xs as a4,ho as a5,Sn as a6,Lt as a7,il as a8,$g as a9,Sg as aa,Eg as ab,Cg as ac,Qo as ad,Tu as ae,w9 as af,ot as ag,Lv as ah,Lu as ai,Og as aj,Zo as ak,Kg as al,Oy as b,ke as c,_e as d,yf as e,U as f,t as g,B as h,D as i,We as j,Sp as k,p as l,V as m,Ke as n,k as o,fe as p,Hu as q,eo as r,Re as s,Jt as t,g9 as u,W as v,v9 as w,E as x,dt as y,H as z};
