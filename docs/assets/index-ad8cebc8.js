(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}})();var K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Dt={},jt={get exports(){return Dt},set exports(t){Dt=t}},et={},Ft={get exports(){return et},set exports(t){et=t}};/*!
  * Bootstrap index.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ct;function F(){return Ct||(Ct=1,function(t,f){(function(e,s){s(f)})(K,function(e){const i="transitionend",o=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),d=n=>{do n+=Math.floor(Math.random()*1e6);while(document.getElementById(n));return n},c=n=>{let u=n.getAttribute("data-bs-target");if(!u||u==="#"){let b=n.getAttribute("href");if(!b||!b.includes("#")&&!b.startsWith("."))return null;b.includes("#")&&!b.startsWith("#")&&(b=`#${b.split("#")[1]}`),u=b&&b!=="#"?b.trim():null}return u},E=n=>{const u=c(n);return u&&document.querySelector(u)?u:null},A=n=>{const u=c(n);return u?document.querySelector(u):null},p=n=>{if(!n)return 0;let{transitionDuration:u,transitionDelay:b}=window.getComputedStyle(n);const L=Number.parseFloat(u),x=Number.parseFloat(b);return!L&&!x?0:(u=u.split(",")[0],b=b.split(",")[0],(Number.parseFloat(u)+Number.parseFloat(b))*1e3)},N=n=>{n.dispatchEvent(new Event(i))},_=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),y=n=>_(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(n):null,v=n=>{if(!_(n)||n.getClientRects().length===0)return!1;const u=getComputedStyle(n).getPropertyValue("visibility")==="visible",b=n.closest("details:not([open])");if(!b)return u;if(b!==n){const L=n.closest("summary");if(L&&L.parentNode!==b||L===null)return!1}return u},g=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",M=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const u=n.getRootNode();return u instanceof ShadowRoot?u:null}return n instanceof ShadowRoot?n:n.parentNode?M(n.parentNode):null},H=()=>{},I=n=>{n.offsetHeight},R=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,D=[],l=n=>{document.readyState==="loading"?(D.length||document.addEventListener("DOMContentLoaded",()=>{for(const u of D)u()}),D.push(n)):n()},r=()=>document.documentElement.dir==="rtl",m=n=>{l(()=>{const u=R();if(u){const b=n.NAME,L=u.fn[b];u.fn[b]=n.jQueryInterface,u.fn[b].Constructor=n,u.fn[b].noConflict=()=>(u.fn[b]=L,n.jQueryInterface)}})},T=n=>{typeof n=="function"&&n()},w=(n,u,b=!0)=>{if(!b){T(n);return}const L=5,x=p(u)+L;let k=!1;const V=({target:Y})=>{Y===u&&(k=!0,u.removeEventListener(i,V),T(n))};u.addEventListener(i,V),setTimeout(()=>{k||N(u)},x)},S=(n,u,b,L)=>{const x=n.length;let k=n.indexOf(u);return k===-1?!b&&L?n[x-1]:n[0]:(k+=b?1:-1,L&&(k=(k+x)%x),n[Math.max(0,Math.min(k,x-1))])};e.defineJQueryPlugin=m,e.execute=T,e.executeAfterTransition=w,e.findShadowRoot=M,e.getElement=y,e.getElementFromSelector=A,e.getNextActiveElement=S,e.getSelectorFromElement=E,e.getTransitionDurationFromElement=p,e.getUID=d,e.getjQuery=R,e.isDisabled=g,e.isElement=_,e.isRTL=r,e.isVisible=v,e.noop=H,e.onDOMContentLoaded=l,e.reflow=I,e.toType=o,e.triggerTransitionEnd=N,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(Ft,et)),et}var ot={},Gt={get exports(){return ot},set exports(t){ot=t}};/*!
  * Bootstrap event-handler.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Nt;function J(){return Nt||(Nt=1,function(t,f){(function(e,s){t.exports=s(F())})(K,function(e){const s=/[^.]*(?=\..*)\.|.*/,a=/\..*/,i=/::\d+$/,o={};let d=1;const c={mouseenter:"mouseover",mouseleave:"mouseout"},E=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function A(l,r){return r&&`${r}::${d++}`||l.uidEvent||d++}function p(l){const r=A(l);return l.uidEvent=r,o[r]=o[r]||{},o[r]}function N(l,r){return function m(T){return D(T,{delegateTarget:l}),m.oneOff&&R.off(l,T.type,r),r.apply(l,[T])}}function _(l,r,m){return function T(w){const S=l.querySelectorAll(r);for(let{target:n}=w;n&&n!==this;n=n.parentNode)for(const u of S)if(u===n)return D(w,{delegateTarget:n}),T.oneOff&&R.off(l,w.type,r,m),m.apply(n,[w])}}function y(l,r,m=null){return Object.values(l).find(T=>T.callable===r&&T.delegationSelector===m)}function v(l,r,m){const T=typeof r=="string",w=T?m:r||m;let S=I(l);return E.has(S)||(S=l),[T,w,S]}function g(l,r,m,T,w){if(typeof r!="string"||!l)return;let[S,n,u]=v(r,m,T);r in c&&(n=(tt=>function(W){if(!W.relatedTarget||W.relatedTarget!==W.delegateTarget&&!W.delegateTarget.contains(W.relatedTarget))return tt.call(this,W)})(n));const b=p(l),L=b[u]||(b[u]={}),x=y(L,n,S?m:null);if(x){x.oneOff=x.oneOff&&w;return}const k=A(n,r.replace(s,"")),V=S?_(l,m,n):N(l,n);V.delegationSelector=S?m:null,V.callable=n,V.oneOff=w,V.uidEvent=k,L[k]=V,l.addEventListener(u,V,S)}function M(l,r,m,T,w){const S=y(r[m],T,w);S&&(l.removeEventListener(m,S,Boolean(w)),delete r[m][S.uidEvent])}function H(l,r,m,T){const w=r[m]||{};for(const S of Object.keys(w))if(S.includes(T)){const n=w[S];M(l,r,m,n.callable,n.delegationSelector)}}function I(l){return l=l.replace(a,""),c[l]||l}const R={on(l,r,m,T){g(l,r,m,T,!1)},one(l,r,m,T){g(l,r,m,T,!0)},off(l,r,m,T){if(typeof r!="string"||!l)return;const[w,S,n]=v(r,m,T),u=n!==r,b=p(l),L=b[n]||{},x=r.startsWith(".");if(typeof S<"u"){if(!Object.keys(L).length)return;M(l,b,n,S,w?m:null);return}if(x)for(const k of Object.keys(b))H(l,b,k,r.slice(1));for(const k of Object.keys(L)){const V=k.replace(i,"");if(!u||r.includes(V)){const Y=L[k];M(l,b,n,Y.callable,Y.delegationSelector)}}},trigger(l,r,m){if(typeof r!="string"||!l)return null;const T=e.getjQuery(),w=I(r),S=r!==w;let n=null,u=!0,b=!0,L=!1;S&&T&&(n=T.Event(r,m),T(l).trigger(n),u=!n.isPropagationStopped(),b=!n.isImmediatePropagationStopped(),L=n.isDefaultPrevented());let x=new Event(r,{bubbles:u,cancelable:!0});return x=D(x,m),L&&x.preventDefault(),b&&l.dispatchEvent(x),x.defaultPrevented&&n&&n.preventDefault(),x}};function D(l,r){for(const[m,T]of Object.entries(r||{}))try{l[m]=T}catch{Object.defineProperty(l,m,{configurable:!0,get(){return T}})}return l}return R})}(Gt)),ot}var at={},Ut={get exports(){return at},set exports(t){at=t}};/*!
  * Bootstrap manipulator.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var It;function yt(){return It||(It=1,function(t,f){(function(e,s){t.exports=s()})(K,function(){function e(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function s(i){return i.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}return{setDataAttribute(i,o,d){i.setAttribute(`data-bs-${s(o)}`,d)},removeDataAttribute(i,o){i.removeAttribute(`data-bs-${s(o)}`)},getDataAttributes(i){if(!i)return{};const o={},d=Object.keys(i.dataset).filter(c=>c.startsWith("bs")&&!c.startsWith("bsConfig"));for(const c of d){let E=c.replace(/^bs/,"");E=E.charAt(0).toLowerCase()+E.slice(1,E.length),o[E]=e(i.dataset[c])}return o},getDataAttribute(i,o){return e(i.getAttribute(`data-bs-${s(o)}`))}}})}(Ut)),at}var lt={},Xt={get exports(){return lt},set exports(t){lt=t}};/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var wt;function mt(){return wt||(wt=1,function(t,f){(function(e,s){t.exports=s(F())})(K,function(e){return{find(a,i=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(i,a))},findOne(a,i=document.documentElement){return Element.prototype.querySelector.call(i,a)},children(a,i){return[].concat(...a.children).filter(o=>o.matches(i))},parents(a,i){const o=[];let d=a.parentNode.closest(i);for(;d;)o.push(d),d=d.parentNode.closest(i);return o},prev(a,i){let o=a.previousElementSibling;for(;o;){if(o.matches(i))return[o];o=o.previousElementSibling}return[]},next(a,i){let o=a.nextElementSibling;for(;o;){if(o.matches(i))return[o];o=o.nextElementSibling}return[]},focusableChildren(a){const i=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(o=>`${o}:not([tabindex^="-"])`).join(",");return this.find(i,a).filter(o=>!e.isDisabled(o)&&e.isVisible(o))}}})}(Xt)),lt}var ct={},Qt={get exports(){return ct},set exports(t){ct=t}},ut={},zt={get exports(){return ut},set exports(t){ut=t}};/*!
  * Bootstrap config.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var St;function pt(){return St||(St=1,function(t,f){(function(e,s){t.exports=s(F(),yt())})(K,function(e,s){const i=(d=>d&&typeof d=="object"&&"default"in d?d:{default:d})(s);class o{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,E){const A=e.isElement(E)?i.default.getDataAttribute(E,"config"):{};return{...this.constructor.Default,...typeof A=="object"?A:{},...e.isElement(E)?i.default.getDataAttributes(E):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,E=this.constructor.DefaultType){for(const A of Object.keys(E)){const p=E[A],N=c[A],_=e.isElement(N)?"element":e.toType(N);if(!new RegExp(p).test(_))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${A}" provided type "${_}" but expected type "${p}".`)}}}return o})}(zt)),ut}/*!
  * Bootstrap swipe.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ot;function Jt(){return Ot||(Ot=1,function(t,f){(function(e,s){t.exports=s(pt(),J(),F())})(K,function(e,s,a){const i=l=>l&&typeof l=="object"&&"default"in l?l:{default:l},o=i(e),d=i(s),c="swipe",E=".bs.swipe",A=`touchstart${E}`,p=`touchmove${E}`,N=`touchend${E}`,_=`pointerdown${E}`,y=`pointerup${E}`,v="touch",g="pen",M="pointer-event",H=40,I={endCallback:null,leftCallback:null,rightCallback:null},R={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class D extends o.default{constructor(r,m){super(),this._element=r,!(!r||!D.isSupported())&&(this._config=this._getConfig(m),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return I}static get DefaultType(){return R}static get NAME(){return c}dispose(){d.default.off(this._element,E)}_start(r){if(!this._supportPointerEvents){this._deltaX=r.touches[0].clientX;return}this._eventIsPointerPenTouch(r)&&(this._deltaX=r.clientX)}_end(r){this._eventIsPointerPenTouch(r)&&(this._deltaX=r.clientX-this._deltaX),this._handleSwipe(),a.execute(this._config.endCallback)}_move(r){this._deltaX=r.touches&&r.touches.length>1?0:r.touches[0].clientX-this._deltaX}_handleSwipe(){const r=Math.abs(this._deltaX);if(r<=H)return;const m=r/this._deltaX;this._deltaX=0,m&&a.execute(m>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(d.default.on(this._element,_,r=>this._start(r)),d.default.on(this._element,y,r=>this._end(r)),this._element.classList.add(M)):(d.default.on(this._element,A,r=>this._start(r)),d.default.on(this._element,p,r=>this._move(r)),d.default.on(this._element,N,r=>this._end(r)))}_eventIsPointerPenTouch(r){return this._supportPointerEvents&&(r.pointerType===g||r.pointerType===v)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}return D})}(Qt)),ct}var dt={},$t={get exports(){return dt},set exports(t){dt=t}},ft={},Zt={get exports(){return ft},set exports(t){ft=t}};/*!
  * Bootstrap data.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Lt;function te(){return Lt||(Lt=1,function(t,f){(function(e,s){t.exports=s()})(K,function(){const e=new Map;return{set(a,i,o){e.has(a)||e.set(a,new Map);const d=e.get(a);if(!d.has(i)&&d.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(d.keys())[0]}.`);return}d.set(i,o)},get(a,i){return e.has(a)&&e.get(a).get(i)||null},remove(a,i){if(!e.has(a))return;const o=e.get(a);o.delete(i),o.size===0&&e.delete(a)}}})}(Zt)),ft}/*!
  * Bootstrap base-component.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var xt;function Bt(){return xt||(xt=1,function(t,f){(function(e,s){t.exports=s(te(),F(),J(),pt())})(K,function(e,s,a,i){const o=N=>N&&typeof N=="object"&&"default"in N?N:{default:N},d=o(e),c=o(a),E=o(i),A="5.2.3";class p extends E.default{constructor(_,y){super(),_=s.getElement(_),_&&(this._element=_,this._config=this._getConfig(y),d.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){d.default.remove(this._element,this.constructor.DATA_KEY),c.default.off(this._element,this.constructor.EVENT_KEY);for(const _ of Object.getOwnPropertyNames(this))this[_]=null}_queueCallback(_,y,v=!0){s.executeAfterTransition(_,y,v)}_getConfig(_){return _=this._mergeConfigObj(_,this._element),_=this._configAfterMerge(_),this._typeCheckConfig(_),_}static getInstance(_){return d.default.get(s.getElement(_),this.DATA_KEY)}static getOrCreateInstance(_,y={}){return this.getInstance(_)||new this(_,typeof y=="object"?y:null)}static get VERSION(){return A}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(_){return`${_}${this.EVENT_KEY}`}}return p})}($t)),dt}/*!
  * Bootstrap carousel.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,f){(function(e,s){t.exports=s(F(),J(),yt(),mt(),Jt(),Bt())})(K,function(e,s,a,i,o,d){const c=X=>X&&typeof X=="object"&&"default"in X?X:{default:X},E=c(s),A=c(a),p=c(i),N=c(o),_=c(d),y="carousel",g=".bs.carousel",M=".data-api",H="ArrowLeft",I="ArrowRight",R=500,D="next",l="prev",r="left",m="right",T=`slide${g}`,w=`slid${g}`,S=`keydown${g}`,n=`mouseenter${g}`,u=`mouseleave${g}`,b=`dragstart${g}`,L=`load${g}${M}`,x=`click${g}${M}`,k="carousel",V="active",Y="slide",tt="carousel-item-end",W="carousel-item-start",Et="carousel-item-next",bt="carousel-item-prev",it=".active",st=".carousel-item",G=it+st,U=".carousel-item img",C=".carousel-indicators",P="[data-bs-slide], [data-bs-slide-to]",q='[data-bs-ride="carousel"]',Q={[H]:m,[I]:r},Ht={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Kt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Z extends _.default{constructor(h,O){super(h,O),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=p.default.findOne(C,this._element),this._addEventListeners(),this._config.ride===k&&this.cycle()}static get Default(){return Ht}static get DefaultType(){return Kt}static get NAME(){return y}next(){this._slide(D)}nextWhenVisible(){!document.hidden&&e.isVisible(this._element)&&this.next()}prev(){this._slide(l)}pause(){this._isSliding&&e.triggerTransitionEnd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){E.default.one(this._element,w,()=>this.cycle());return}this.cycle()}}to(h){const O=this._getItems();if(h>O.length-1||h<0)return;if(this._isSliding){E.default.one(this._element,w,()=>this.to(h));return}const B=this._getItemIndex(this._getActive());if(B===h)return;const z=h>B?D:l;this._slide(z,O[h])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(h){return h.defaultInterval=h.interval,h}_addEventListeners(){this._config.keyboard&&E.default.on(this._element,S,h=>this._keydown(h)),this._config.pause==="hover"&&(E.default.on(this._element,n,()=>this.pause()),E.default.on(this._element,u,()=>this._maybeEnableCycle())),this._config.touch&&N.default.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const B of p.default.find(U,this._element))E.default.on(B,b,z=>z.preventDefault());const O={leftCallback:()=>this._slide(this._directionToOrder(r)),rightCallback:()=>this._slide(this._directionToOrder(m)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),R+this._config.interval))}};this._swipeHelper=new N.default(this._element,O)}_keydown(h){if(/input|textarea/i.test(h.target.tagName))return;const O=Q[h.key];O&&(h.preventDefault(),this._slide(this._directionToOrder(O)))}_getItemIndex(h){return this._getItems().indexOf(h)}_setActiveIndicatorElement(h){if(!this._indicatorsElement)return;const O=p.default.findOne(it,this._indicatorsElement);O.classList.remove(V),O.removeAttribute("aria-current");const B=p.default.findOne(`[data-bs-slide-to="${h}"]`,this._indicatorsElement);B&&(B.classList.add(V),B.setAttribute("aria-current","true"))}_updateInterval(){const h=this._activeElement||this._getActive();if(!h)return;const O=Number.parseInt(h.getAttribute("data-bs-interval"),10);this._config.interval=O||this._config.defaultInterval}_slide(h,O=null){if(this._isSliding)return;const B=this._getActive(),z=h===D,j=O||e.getNextActiveElement(this._getItems(),B,z,this._config.wrap);if(j===B)return;const Tt=this._getItemIndex(j),At=Wt=>E.default.trigger(this._element,Wt,{relatedTarget:j,direction:this._orderToDirection(h),from:this._getItemIndex(B),to:Tt});if(At(T).defaultPrevented||!B||!j)return;const qt=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(Tt),this._activeElement=j;const rt=z?W:tt,vt=z?Et:bt;j.classList.add(vt),e.reflow(j),B.classList.add(rt),j.classList.add(rt);const Yt=()=>{j.classList.remove(rt,vt),j.classList.add(V),B.classList.remove(V,vt,rt),this._isSliding=!1,At(w)};this._queueCallback(Yt,B,this._isAnimated()),qt&&this.cycle()}_isAnimated(){return this._element.classList.contains(Y)}_getActive(){return p.default.findOne(G,this._element)}_getItems(){return p.default.find(st,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(h){return e.isRTL()?h===r?l:D:h===r?D:l}_orderToDirection(h){return e.isRTL()?h===l?r:m:h===l?m:r}static jQueryInterface(h){return this.each(function(){const O=Z.getOrCreateInstance(this,h);if(typeof h=="number"){O.to(h);return}if(typeof h=="string"){if(O[h]===void 0||h.startsWith("_")||h==="constructor")throw new TypeError(`No method named "${h}"`);O[h]()}})}}return E.default.on(document,x,P,function(X){const h=e.getElementFromSelector(this);if(!h||!h.classList.contains(k))return;X.preventDefault();const O=Z.getOrCreateInstance(h),B=this.getAttribute("data-bs-slide-to");if(B){O.to(B),O._maybeEnableCycle();return}if(A.default.getDataAttribute(this,"slide")==="next"){O.next(),O._maybeEnableCycle();return}O.prev(),O._maybeEnableCycle()}),E.default.on(window,L,()=>{const X=p.default.find(q);for(const h of X)Z.getOrCreateInstance(h)}),e.defineJQueryPlugin(Z),Z})})(jt);var Mt={},ee={get exports(){return Mt},set exports(t){Mt=t}},ht={},ne={get exports(){return ht},set exports(t){ht=t}};/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Rt;function ie(){return Rt||(Rt=1,function(t,f){(function(e,s){t.exports=s(mt(),yt(),F())})(K,function(e,s,a){const i=_=>_&&typeof _=="object"&&"default"in _?_:{default:_},o=i(e),d=i(s),c=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",E=".sticky-top",A="padding-right",p="margin-right";class N{constructor(){this._element=document.body}getWidth(){const y=document.documentElement.clientWidth;return Math.abs(window.innerWidth-y)}hide(){const y=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,A,v=>v+y),this._setElementAttributes(c,A,v=>v+y),this._setElementAttributes(E,p,v=>v-y)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,A),this._resetElementAttributes(c,A),this._resetElementAttributes(E,p)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(y,v,g){const M=this.getWidth(),H=I=>{if(I!==this._element&&window.innerWidth>I.clientWidth+M)return;this._saveInitialAttribute(I,v);const R=window.getComputedStyle(I).getPropertyValue(v);I.style.setProperty(v,`${g(Number.parseFloat(R))}px`)};this._applyManipulationCallback(y,H)}_saveInitialAttribute(y,v){const g=y.style.getPropertyValue(v);g&&d.default.setDataAttribute(y,v,g)}_resetElementAttributes(y,v){const g=M=>{const H=d.default.getDataAttribute(M,v);if(H===null){M.style.removeProperty(v);return}d.default.removeDataAttribute(M,v),M.style.setProperty(v,H)};this._applyManipulationCallback(y,g)}_applyManipulationCallback(y,v){if(a.isElement(y)){v(y);return}for(const g of o.default.find(y,this._element))v(g)}}return N})}(ne)),ht}var _t={},se={get exports(){return _t},set exports(t){_t=t}};/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var kt;function re(){return kt||(kt=1,function(t,f){(function(e,s){t.exports=s(J(),F(),pt())})(K,function(e,s,a){const i=v=>v&&typeof v=="object"&&"default"in v?v:{default:v},o=i(e),d=i(a),c="backdrop",E="fade",A="show",p=`mousedown.bs.${c}`,N={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},_={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class y extends d.default{constructor(g){super(),this._config=this._getConfig(g),this._isAppended=!1,this._element=null}static get Default(){return N}static get DefaultType(){return _}static get NAME(){return c}show(g){if(!this._config.isVisible){s.execute(g);return}this._append();const M=this._getElement();this._config.isAnimated&&s.reflow(M),M.classList.add(A),this._emulateAnimation(()=>{s.execute(g)})}hide(g){if(!this._config.isVisible){s.execute(g);return}this._getElement().classList.remove(A),this._emulateAnimation(()=>{this.dispose(),s.execute(g)})}dispose(){this._isAppended&&(o.default.off(this._element,p),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const g=document.createElement("div");g.className=this._config.className,this._config.isAnimated&&g.classList.add(E),this._element=g}return this._element}_configAfterMerge(g){return g.rootElement=s.getElement(g.rootElement),g}_append(){if(this._isAppended)return;const g=this._getElement();this._config.rootElement.append(g),o.default.on(g,p,()=>{s.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(g){s.executeAfterTransition(g,this._getElement(),this._config.isAnimated)}}return y})}(se)),_t}var gt={},oe={get exports(){return gt},set exports(t){gt=t}};/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Pt;function ae(){return Pt||(Pt=1,function(t,f){(function(e,s){t.exports=s(J(),mt(),pt())})(K,function(e,s,a){const i=R=>R&&typeof R=="object"&&"default"in R?R:{default:R},o=i(e),d=i(s),c=i(a),E="focustrap",p=".bs.focustrap",N=`focusin${p}`,_=`keydown.tab${p}`,y="Tab",v="forward",g="backward",M={autofocus:!0,trapElement:null},H={autofocus:"boolean",trapElement:"element"};class I extends c.default{constructor(D){super(),this._config=this._getConfig(D),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return M}static get DefaultType(){return H}static get NAME(){return E}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),o.default.off(document,p),o.default.on(document,N,D=>this._handleFocusin(D)),o.default.on(document,_,D=>this._handleKeydown(D)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,o.default.off(document,p))}_handleFocusin(D){const{trapElement:l}=this._config;if(D.target===document||D.target===l||l.contains(D.target))return;const r=d.default.focusableChildren(l);r.length===0?l.focus():this._lastTabNavDirection===g?r[r.length-1].focus():r[0].focus()}_handleKeydown(D){D.key===y&&(this._lastTabNavDirection=D.shiftKey?g:v)}}return I})}(oe)),gt}var nt={},le={get exports(){return nt},set exports(t){nt=t}};/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Vt;function ce(){return Vt||(Vt=1,function(t,f){(function(e,s){s(f,J(),F())})(K,function(e,s,a){const o=(c=>c&&typeof c=="object"&&"default"in c?c:{default:c})(s),d=(c,E="hide")=>{const A=`click.dismiss${c.EVENT_KEY}`,p=c.NAME;o.default.on(document,A,`[data-bs-dismiss="${p}"]`,function(N){if(["A","AREA"].includes(this.tagName)&&N.preventDefault(),a.isDisabled(this))return;const _=a.getElementFromSelector(this)||this.closest(`.${p}`);c.getOrCreateInstance(_)[E]()})};e.enableDismissTrigger=d,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(le,nt)),nt}/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,f){(function(e,s){t.exports=s(F(),J(),mt(),ie(),Bt(),re(),ae(),ce())})(K,function(e,s,a,i,o,d,c,E){const A=U=>U&&typeof U=="object"&&"default"in U?U:{default:U},p=A(s),N=A(a),_=A(i),y=A(o),v=A(d),g=A(c),M="modal",I=".bs.modal",R=".data-api",D="Escape",l=`hide${I}`,r=`hidePrevented${I}`,m=`hidden${I}`,T=`show${I}`,w=`shown${I}`,S=`resize${I}`,n=`click.dismiss${I}`,u=`mousedown.dismiss${I}`,b=`keydown.dismiss${I}`,L=`click${I}${R}`,x="modal-open",k="fade",V="show",Y="modal-static",tt=".modal.show",W=".modal-dialog",Et=".modal-body",bt='[data-bs-toggle="modal"]',it={backdrop:!0,focus:!0,keyboard:!0},st={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class G extends y.default{constructor(C,P){super(C,P),this._dialog=N.default.findOne(W,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new _.default,this._addEventListeners()}static get Default(){return it}static get DefaultType(){return st}static get NAME(){return M}toggle(C){return this._isShown?this.hide():this.show(C)}show(C){this._isShown||this._isTransitioning||p.default.trigger(this._element,T,{relatedTarget:C}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(x),this._adjustDialog(),this._backdrop.show(()=>this._showElement(C)))}hide(){!this._isShown||this._isTransitioning||p.default.trigger(this._element,l).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(V),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const C of[window,this._dialog])p.default.off(C,I);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new v.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new g.default({trapElement:this._element})}_showElement(C){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const P=N.default.findOne(Et,this._dialog);P&&(P.scrollTop=0),e.reflow(this._element),this._element.classList.add(V);const q=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,p.default.trigger(this._element,w,{relatedTarget:C})};this._queueCallback(q,this._dialog,this._isAnimated())}_addEventListeners(){p.default.on(this._element,b,C=>{if(C.key===D){if(this._config.keyboard){C.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),p.default.on(window,S,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),p.default.on(this._element,u,C=>{p.default.one(this._element,n,P=>{if(!(this._element!==C.target||this._element!==P.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(x),this._resetAdjustments(),this._scrollBar.reset(),p.default.trigger(this._element,m)})}_isAnimated(){return this._element.classList.contains(k)}_triggerBackdropTransition(){if(p.default.trigger(this._element,r).defaultPrevented)return;const P=this._element.scrollHeight>document.documentElement.clientHeight,q=this._element.style.overflowY;q==="hidden"||this._element.classList.contains(Y)||(P||(this._element.style.overflowY="hidden"),this._element.classList.add(Y),this._queueCallback(()=>{this._element.classList.remove(Y),this._queueCallback(()=>{this._element.style.overflowY=q},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const C=this._element.scrollHeight>document.documentElement.clientHeight,P=this._scrollBar.getWidth(),q=P>0;if(q&&!C){const Q=e.isRTL()?"paddingLeft":"paddingRight";this._element.style[Q]=`${P}px`}if(!q&&C){const Q=e.isRTL()?"paddingRight":"paddingLeft";this._element.style[Q]=`${P}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(C,P){return this.each(function(){const q=G.getOrCreateInstance(this,C);if(typeof C=="string"){if(typeof q[C]>"u")throw new TypeError(`No method named "${C}"`);q[C](P)}})}}return p.default.on(document,L,bt,function(U){const C=e.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&U.preventDefault(),p.default.one(C,T,Q=>{Q.defaultPrevented||p.default.one(C,m,()=>{e.isVisible(this)&&this.focus()})});const P=N.default.findOne(tt);P&&G.getInstance(P).hide(),G.getOrCreateInstance(C).toggle(this)}),E.enableDismissTrigger(G),e.defineJQueryPlugin(G),G})})(ee);(function(t){t.fn.mauGallery=function(e){var e=t.extend(t.fn.mauGallery.defaults,e),s=[];return this.each(function(){t.fn.mauGallery.methods.createRowWrapper(t(this)),e.lightBox&&t.fn.mauGallery.methods.createLightBox(t(this),e.lightboxId,e.navigation),t.fn.mauGallery.listeners(e),t(this).children(".gallery-item").each(function(a){t.fn.mauGallery.methods.responsiveImageItem(t(this)),t.fn.mauGallery.methods.moveItemInRowWrapper(t(this)),t.fn.mauGallery.methods.wrapItemInColumn(t(this),e.columns);var i=t(this).data("gallery-tag");e.showTags&&i!==void 0&&s.indexOf(i)===-1&&s.push(i)}),e.showTags&&t.fn.mauGallery.methods.showItemTags(t(this),e.tagsPosition,s),t(this).fadeIn(500)})},t.fn.mauGallery.defaults={columns:3,lightBox:!0,lightboxId:null,showTags:!0,tagsPosition:"bottom",navigation:!0},t.fn.mauGallery.listeners=function(f){t(".gallery-item").on("click",function(){if(f.lightBox&&t(this).prop("tagName")==="IMG")t.fn.mauGallery.methods.openLightBox(t(this),f.lightboxId);else return}),t(".gallery").on("click",".nav-link",t.fn.mauGallery.methods.filterByTag),t(".gallery").on("click",".mg-prev",()=>t.fn.mauGallery.methods.prevImage(f.lightboxId)),t(".gallery").on("click",".mg-next",()=>t.fn.mauGallery.methods.nextImage(f.lightboxId))},t.fn.mauGallery.methods={createRowWrapper(f){f.children().first().hasClass("row")||f.append('<div class="gallery-items-row row"></div>')},wrapItemInColumn(f,e){if(e.constructor===Number)f.wrap(`<div class='item-column mb-4 col-${Math.ceil(12/e)}'></div>`);else if(e.constructor===Object){var s="";e.xs&&(s+=` col-${Math.ceil(12/e.xs)}`),e.sm&&(s+=` col-sm-${Math.ceil(12/e.sm)}`),e.md&&(s+=` col-md-${Math.ceil(12/e.md)}`),e.lg&&(s+=` col-lg-${Math.ceil(12/e.lg)}`),e.xl&&(s+=` col-xl-${Math.ceil(12/e.xl)}`),f.wrap(`<div class='item-column mb-4${s}'></div>`)}else console.error(`Columns should be defined as numbers or objects. ${typeof e} is not supported.`)},moveItemInRowWrapper(f){f.appendTo(".gallery-items-row")},responsiveImageItem(f){f.prop("tagName")==="IMG"&&f.addClass("img-fluid")},openLightBox(f,e){t(`#${e}`).find(".lightboxImage").attr("src",f.attr("src")),t(`#${e}`).modal("toggle")},prevImage(){let f=null;t("img.gallery-item").each(function(){t(this).attr("src")===t(".lightboxImage").attr("src")&&(f=t(this))});let e=t(".tags-bar span.active-tag").data("images-toggle"),s=[];e==="all"?t(".item-column").each(function(){t(this).children("img").length&&s.push(t(this).children("img"))}):t(".item-column").each(function(){t(this).children("img").data("gallery-tag")===e&&s.push(t(this).children("img"))});let a=0,i=null;t(s).each(function(o){t(f).attr("src")===t(this).attr("src")&&(a=o-1)}),i=s[a]||s[s.length-1],t(".lightboxImage").attr("src",t(i).attr("src"))},nextImage(){let f=null;t("img.gallery-item").each(function(){t(this).attr("src")===t(".lightboxImage").attr("src")&&(f=t(this))});let e=t(".tags-bar span.active-tag").data("images-toggle"),s=[];e==="all"?t(".item-column").each(function(){t(this).children("img").length&&s.push(t(this).children("img"))}):t(".item-column").each(function(){t(this).children("img").data("gallery-tag")===e&&s.push(t(this).children("img"))});let a=0,i=null;t(s).each(function(o){t(f).attr("src")===t(this).attr("src")&&(a=o+1)}),i=s[a]||s[0],t(".lightboxImage").attr("src",t(i).attr("src"))},createLightBox(f,e,s){f.append(`<div class="modal fade" id="${e||"galleryLightbox"}" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            ${s?'<div class="mg-prev" style="cursor:pointer;position:absolute;top:50%;left:-15px;background:white;"><</div>':'<span style="display:none;" />'}
                            <img class="lightboxImage img-fluid" alt="Contenu de l'image affichée dans la modale au clique"/>
                            ${s?'<div class="mg-next" style="cursor:pointer;position:absolute;top:50%;right:-15px;background:white;}">></div>':'<span style="display:none;" />'}
                        </div>
                    </div>
                </div>
            </div>`)},showItemTags(f,e,s){var a='<li class="nav-item"><span class="nav-link active active-tag"  data-images-toggle="all">Tous</span></li>';t.each(s,function(o,d){a+=`<li class="nav-item active">
                <span class="nav-link"  data-images-toggle="${d}">${d}</span></li>`});var i=`<ul class="my-4 tags-bar nav nav-pills">${a}</ul>`;e==="bottom"?f.append(i):e==="top"?f.prepend(i):console.error(`Unknown tags position: ${e}`)},filterByTag(){if(!t(this).hasClass("active-tag")){t(".active-tag").removeClass("active active-tag"),t(this).addClass("active-tag");var f=t(this).data("images-toggle");t(".gallery-item").each(function(){t(this).parents(".item-column").hide(),f==="all"?t(this).parents(".item-column").show(300):t(this).data("gallery-tag")===f&&t(this).parents(".item-column").show(300)})}}}})(jQuery);$(document).ready(function(){$(".gallery").mauGallery({columns:{xs:1,sm:2,md:3,lg:3,xl:3},lightBox:!0,lightboxId:"myAwesomeLightbox",showTags:!0,tagsPosition:"top"})});
