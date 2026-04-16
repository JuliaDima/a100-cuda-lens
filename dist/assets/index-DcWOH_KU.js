(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ha={exports:{}},nl={},Qa={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),lc=Symbol.for("react.portal"),oc=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),sc=Symbol.for("react.provider"),uc=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),pc=Symbol.for("react.lazy"),Ii=Symbol.iterator;function mc(e){return e===null||typeof e!="object"?null:(e=Ii&&e[Ii]||e["@@iterator"],typeof e=="function"?e:null)}var Ga={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ka=Object.assign,Ya={};function un(e,t,n){this.props=e,this.context=t,this.refs=Ya,this.updater=n||Ga}un.prototype.isReactComponent={};un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xa(){}Xa.prototype=un.prototype;function Uo(e,t,n){this.props=e,this.context=t,this.refs=Ya,this.updater=n||Ga}var Bo=Uo.prototype=new Xa;Bo.constructor=Uo;Ka(Bo,un.prototype);Bo.isPureReactComponent=!0;var bi=Array.isArray,Za=Object.prototype.hasOwnProperty,Wo={current:null},Ja={key:!0,ref:!0,__self:!0,__source:!0};function qa(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Za.call(t,r)&&!Ja.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Xn,type:e,key:o,ref:i,props:l,_owner:Wo.current}}function hc(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $o(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function vc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fi=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vc(""+e.key):t.toString(36)}function wr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Xn:case lc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+wl(i,0):r,bi(l)?(n="",e!=null&&(n=e.replace(Fi,"$&/")+"/"),wr(l,t,n,"",function(f){return f})):l!=null&&($o(l)&&(l=hc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Fi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",bi(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+wl(o,s);i+=wr(o,t,n,u,l)}else if(u=mc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+wl(o,s++),i+=wr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function rr(e,t,n){if(e==null)return e;var r=[],l=0;return wr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function gc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},kr={transition:null},yc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Wo};function es(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!$o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=un;M.Fragment=oc;M.Profiler=ac;M.PureComponent=Uo;M.StrictMode=ic;M.Suspense=dc;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yc;M.act=es;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ka({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Wo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Za.call(t,u)&&!Ja.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Xn,type:e.type,key:l,ref:o,props:r,_owner:i}};M.createContext=function(e){return e={$$typeof:uc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sc,_context:e},e.Consumer=e};M.createElement=qa;M.createFactory=function(e){var t=qa.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:cc,render:e}};M.isValidElement=$o;M.lazy=function(e){return{$$typeof:pc,_payload:{_status:-1,_result:e},_init:gc}};M.memo=function(e,t){return{$$typeof:fc,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=kr.transition;kr.transition={};try{e()}finally{kr.transition=t}};M.unstable_act=es;M.useCallback=function(e,t){return se.current.useCallback(e,t)};M.useContext=function(e){return se.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return se.current.useDeferredValue(e)};M.useEffect=function(e,t){return se.current.useEffect(e,t)};M.useId=function(){return se.current.useId()};M.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return se.current.useMemo(e,t)};M.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};M.useRef=function(e){return se.current.useRef(e)};M.useState=function(e){return se.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return se.current.useTransition()};M.version="18.3.1";Qa.exports=M;var de=Qa.exports;const xc=rc(de);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wc=de,kc=Symbol.for("react.element"),Sc=Symbol.for("react.fragment"),jc=Object.prototype.hasOwnProperty,Nc=wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ec={key:!0,ref:!0,__self:!0,__source:!0};function ts(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)jc.call(t,r)&&!Ec.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:kc,type:e,key:o,ref:i,props:l,_owner:Nc.current}}nl.Fragment=Sc;nl.jsx=ts;nl.jsxs=ts;Ha.exports=nl;var a=Ha.exports,Ql={},ns={exports:{}},Se={},rs={exports:{}},ls={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,T){var L=z.length;z.push(T);e:for(;0<L;){var H=L-1>>>1,X=z[H];if(0<l(X,T))z[H]=T,z[L]=X,L=H;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var T=z[0],L=z.pop();if(L!==T){z[0]=L;e:for(var H=0,X=z.length,tr=X>>>1;H<tr;){var xt=2*(H+1)-1,xl=z[xt],wt=xt+1,nr=z[wt];if(0>l(xl,L))wt<X&&0>l(nr,xl)?(z[H]=nr,z[wt]=L,H=wt):(z[H]=xl,z[xt]=L,H=xt);else if(wt<X&&0>l(nr,L))z[H]=nr,z[wt]=L,H=wt;else break e}}return T}function l(z,T){var L=z.sortIndex-T.sortIndex;return L!==0?L:z.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],f=[],g=1,v=null,m=3,S=!1,k=!1,j=!1,I=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var T=n(f);T!==null;){if(T.callback===null)r(f);else if(T.startTime<=z)r(f),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(f)}}function x(z){if(j=!1,p(z),!k)if(n(u)!==null)k=!0,yt(N);else{var T=n(f);T!==null&&yl(x,T.startTime-z)}}function N(z,T){k=!1,j&&(j=!1,d(h),h=-1),S=!0;var L=m;try{for(p(T),v=n(u);v!==null&&(!(v.expirationTime>T)||z&&!D());){var H=v.callback;if(typeof H=="function"){v.callback=null,m=v.priorityLevel;var X=H(v.expirationTime<=T);T=e.unstable_now(),typeof X=="function"?v.callback=X:v===n(u)&&r(u),p(T)}else r(u);v=n(u)}if(v!==null)var tr=!0;else{var xt=n(f);xt!==null&&yl(x,xt.startTime-T),tr=!1}return tr}finally{v=null,m=L,S=!1}}var _=!1,E=null,h=-1,y=5,P=-1;function D(){return!(e.unstable_now()-P<y)}function ge(){if(E!==null){var z=e.unstable_now();P=z;var T=!0;try{T=E(!0,z)}finally{T?ce():(_=!1,E=null)}}else _=!1}var ce;if(typeof c=="function")ce=function(){c(ge)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,Di=It.port2;It.port1.onmessage=ge,ce=function(){Di.postMessage(null)}}else ce=function(){I(ge,0)};function yt(z){E=z,_||(_=!0,ce())}function yl(z,T){h=I(function(){z(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){k||S||(k=!0,yt(N))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var L=m;m=T;try{return z()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,T){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var L=m;m=z;try{return T()}finally{m=L}},e.unstable_scheduleCallback=function(z,T,L){var H=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?H+L:H):L=H,z){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=L+X,z={id:g++,callback:T,priorityLevel:z,startTime:L,expirationTime:X,sortIndex:-1},L>H?(z.sortIndex=L,t(f,z),n(u)===null&&z===n(f)&&(j?(d(h),h=-1):j=!0,yl(x,L-H))):(z.sortIndex=X,t(u,z),k||S||(k=!0,yt(N))),z},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(z){var T=m;return function(){var L=m;m=T;try{return z.apply(this,arguments)}finally{m=L}}}})(ls);rs.exports=ls;var Cc=rs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=de,ke=Cc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var os=new Set,Rn={};function Rt(e,t){tn(e,t),tn(e+"Capture",t)}function tn(e,t){for(Rn[e]=t,e=0;e<t.length;e++)os.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,_c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oi={},Ai={};function Pc(e){return Gl.call(Ai,e)?!0:Gl.call(Oi,e)?!1:_c.test(e)?Ai[e]=!0:(Oi[e]=!0,!1)}function Tc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lc(e,t,n,r){if(t===null||typeof t>"u"||Tc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vo=/[\-:]([a-z])/g;function Ho(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vo,Ho);te[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vo,Ho);te[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vo,Ho);te[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qo(e,t,n,r){var l=te.hasOwnProperty(t)?te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lc(t,n,l,r)&&(n=null),r||l===null?Pc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),Ft=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Go=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),is=Symbol.for("react.provider"),as=Symbol.for("react.context"),Ko=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ss=Symbol.for("react.offscreen"),Ui=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=Ui&&e[Ui]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,kl;function wn(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var Sl=!1;function jl(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Mc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=jl(e.type,!1),e;case 11:return e=jl(e.type.render,!1),e;case 1:return e=jl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Ft:return"Portal";case Kl:return"Profiler";case Go:return"StrictMode";case Yl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case as:return(e.displayName||"Context")+".Consumer";case is:return(e._context.displayName||"Context")+".Provider";case Ko:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yo:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function Rc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function us(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dc(e){var t=us(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){e._valueTracker||(e._valueTracker=Dc(e))}function cs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=us(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ds(e,t){t=t.checked,t!=null&&Qo(e,"checked",t,!1)}function ql(e,t){ds(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eo(e,t.type,n):t.hasOwnProperty("defaultValue")&&eo(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eo(e,t,n){(t!=="number"||Mr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function to(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $i(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(kn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function fs(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ps(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function no(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ps(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,ms=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ic=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){Ic.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function hs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function vs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=hs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var bc=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ro(e,t){if(t){if(bc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function lo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function Xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,Xt=null,Zt=null;function Hi(e){if(e=qn(e)){if(typeof io!="function")throw Error(w(280));var t=e.stateNode;t&&(t=al(t),io(e.stateNode,e.type,t))}}function gs(e){Xt?Zt?Zt.push(e):Zt=[e]:Xt=e}function ys(){if(Xt){var e=Xt,t=Zt;if(Zt=Xt=null,Hi(e),t)for(e=0;e<t.length;e++)Hi(t[e])}}function xs(e,t){return e(t)}function ws(){}var Nl=!1;function ks(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return xs(e,t,n)}finally{Nl=!1,(Xt!==null||Zt!==null)&&(ws(),ys())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var ao=!1;if(Ge)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){ao=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{ao=!1}function Fc(e,t,n,r,l,o,i,s,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(g){this.onError(g)}}var En=!1,Rr=null,Dr=!1,so=null,Oc={onError:function(e){En=!0,Rr=e}};function Ac(e,t,n,r,l,o,i,s,u){En=!1,Rr=null,Fc.apply(Oc,arguments)}function Uc(e,t,n,r,l,o,i,s,u){if(Ac.apply(this,arguments),En){if(En){var f=Rr;En=!1,Rr=null}else throw Error(w(198));Dr||(Dr=!0,so=f)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ss(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qi(e){if(Dt(e)!==e)throw Error(w(188))}function Bc(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Qi(l),e;if(o===r)return Qi(l),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function js(e){return e=Bc(e),e!==null?Ns(e):null}function Ns(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ns(e);if(t!==null)return t;e=e.sibling}return null}var Es=ke.unstable_scheduleCallback,Gi=ke.unstable_cancelCallback,Wc=ke.unstable_shouldYield,$c=ke.unstable_requestPaint,Q=ke.unstable_now,Vc=ke.unstable_getCurrentPriorityLevel,Zo=ke.unstable_ImmediatePriority,Cs=ke.unstable_UserBlockingPriority,Ir=ke.unstable_NormalPriority,Hc=ke.unstable_LowPriority,zs=ke.unstable_IdlePriority,rl=null,Ue=null;function Qc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Yc,Gc=Math.log,Kc=Math.LN2;function Yc(e){return e>>>=0,e===0?32:31-(Gc(e)/Kc|0)|0}var ar=64,sr=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function br(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Sn(s):(o&=i,o!==0&&(r=Sn(o)))}else i=n&~l,i!==0?r=Sn(i):o!==0&&(r=Sn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),l=1<<n,r|=e[n],t&=~l;return r}function Xc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-De(o),s=1<<i,u=l[i];u===-1?(!(s&n)||s&r)&&(l[i]=Xc(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _s(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function Jc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-De(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Jo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var b=0;function Ps(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ts,qo,Ls,Ms,Rs,co=!1,ur=[],ot=null,it=null,at=null,bn=new Map,Fn=new Map,tt=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ki(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function mn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=qn(t),t!==null&&qo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ed(e,t,n,r,l){switch(t){case"focusin":return ot=mn(ot,e,t,n,r,l),!0;case"dragenter":return it=mn(it,e,t,n,r,l),!0;case"mouseover":return at=mn(at,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return bn.set(o,mn(bn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Fn.set(o,mn(Fn.get(o)||null,e,t,n,r,l)),!0}return!1}function Ds(e){var t=jt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ss(n),t!==null){e.blockedOn=t,Rs(e.priority,function(){Ls(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oo=r,n.target.dispatchEvent(r),oo=null}else return t=qn(n),t!==null&&qo(t),e.blockedOn=n,!1;t.shift()}return!0}function Yi(e,t,n){Sr(e)&&n.delete(t)}function td(){co=!1,ot!==null&&Sr(ot)&&(ot=null),it!==null&&Sr(it)&&(it=null),at!==null&&Sr(at)&&(at=null),bn.forEach(Yi),Fn.forEach(Yi)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,co||(co=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,td)))}function On(e){function t(l){return hn(l,e)}if(0<ur.length){hn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&hn(ot,e),it!==null&&hn(it,e),at!==null&&hn(at,e),bn.forEach(t),Fn.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Ds(n),n.blockedOn===null&&tt.shift()}var Jt=Ze.ReactCurrentBatchConfig,Fr=!0;function nd(e,t,n,r){var l=b,o=Jt.transition;Jt.transition=null;try{b=1,ei(e,t,n,r)}finally{b=l,Jt.transition=o}}function rd(e,t,n,r){var l=b,o=Jt.transition;Jt.transition=null;try{b=4,ei(e,t,n,r)}finally{b=l,Jt.transition=o}}function ei(e,t,n,r){if(Fr){var l=fo(e,t,n,r);if(l===null)Il(e,t,r,Or,n),Ki(e,r);else if(ed(l,e,t,n,r))r.stopPropagation();else if(Ki(e,r),t&4&&-1<qc.indexOf(e)){for(;l!==null;){var o=qn(l);if(o!==null&&Ts(o),o=fo(e,t,n,r),o===null&&Il(e,t,r,Or,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Il(e,t,r,null,n)}}var Or=null;function fo(e,t,n,r){if(Or=null,e=Xo(r),e=jt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ss(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Or=e,null}function Is(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vc()){case Zo:return 1;case Cs:return 4;case Ir:case Hc:return 16;case zs:return 536870912;default:return 16}default:return 16}}var rt=null,ti=null,jr=null;function bs(){if(jr)return jr;var e,t=ti,n=t.length,r,l="value"in rt?rt.value:rt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return jr=l.slice(e,1<r?1-r:void 0)}function Nr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function Xi(){return!1}function je(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cr:Xi,this.isPropagationStopped=Xi,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=je(cn),Jn=$({},cn,{view:0,detail:0}),ld=je(Jn),Cl,zl,vn,ll=$({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Cl=e.screenX-vn.screenX,zl=e.screenY-vn.screenY):zl=Cl=0,vn=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Zi=je(ll),od=$({},ll,{dataTransfer:0}),id=je(od),ad=$({},Jn,{relatedTarget:0}),_l=je(ad),sd=$({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),ud=je(sd),cd=$({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dd=je(cd),fd=$({},cn,{data:0}),Ji=je(fd),pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hd[e])?!!t[e]:!1}function ri(){return vd}var gd=$({},Jn,{key:function(e){if(e.key){var t=pd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=je(gd),xd=$({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qi=je(xd),wd=$({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),kd=je(wd),Sd=$({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jd=je(Sd),Nd=$({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ed=je(Nd),Cd=[9,13,27,32],li=Ge&&"CompositionEvent"in window,Cn=null;Ge&&"documentMode"in document&&(Cn=document.documentMode);var zd=Ge&&"TextEvent"in window&&!Cn,Fs=Ge&&(!li||Cn&&8<Cn&&11>=Cn),ea=" ",ta=!1;function Os(e,t){switch(e){case"keyup":return Cd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function As(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function _d(e,t){switch(e){case"compositionend":return As(t);case"keypress":return t.which!==32?null:(ta=!0,ea);case"textInput":return e=t.data,e===ea&&ta?null:e;default:return null}}function Pd(e,t){if(At)return e==="compositionend"||!li&&Os(e,t)?(e=bs(),jr=ti=rt=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fs&&t.locale!=="ko"?null:t.data;default:return null}}var Td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Td[e.type]:t==="textarea"}function Us(e,t,n,r){gs(r),t=Ar(t,"onChange"),0<t.length&&(n=new ni("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zn=null,An=null;function Ld(e){Zs(e,0)}function ol(e){var t=Wt(e);if(cs(t))return e}function Md(e,t){if(e==="change")return t}var Bs=!1;if(Ge){var Pl;if(Ge){var Tl="oninput"in document;if(!Tl){var ra=document.createElement("div");ra.setAttribute("oninput","return;"),Tl=typeof ra.oninput=="function"}Pl=Tl}else Pl=!1;Bs=Pl&&(!document.documentMode||9<document.documentMode)}function la(){zn&&(zn.detachEvent("onpropertychange",Ws),An=zn=null)}function Ws(e){if(e.propertyName==="value"&&ol(An)){var t=[];Us(t,An,e,Xo(e)),ks(Ld,t)}}function Rd(e,t,n){e==="focusin"?(la(),zn=t,An=n,zn.attachEvent("onpropertychange",Ws)):e==="focusout"&&la()}function Dd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(An)}function Id(e,t){if(e==="click")return ol(t)}function bd(e,t){if(e==="input"||e==="change")return ol(t)}function Fd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:Fd;function Un(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Gl.call(t,l)||!be(e[l],t[l]))return!1}return!0}function oa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ia(e,t){var n=oa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oa(n)}}function $s(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$s(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vs(){for(var e=window,t=Mr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Od(e){var t=Vs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$s(n.ownerDocument.documentElement,n)){if(r!==null&&oi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ia(n,o);var i=ia(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ad=Ge&&"documentMode"in document&&11>=document.documentMode,Ut=null,po=null,_n=null,mo=!1;function aa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mo||Ut==null||Ut!==Mr(r)||(r=Ut,"selectionStart"in r&&oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_n&&Un(_n,r)||(_n=r,r=Ar(po,"onSelect"),0<r.length&&(t=new ni("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ut)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bt={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Ll={},Hs={};Ge&&(Hs=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function il(e){if(Ll[e])return Ll[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hs)return Ll[e]=t[n];return e}var Qs=il("animationend"),Gs=il("animationiteration"),Ks=il("animationstart"),Ys=il("transitionend"),Xs=new Map,sa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){Xs.set(e,t),Rt(t,[e])}for(var Ml=0;Ml<sa.length;Ml++){var Rl=sa[Ml],Ud=Rl.toLowerCase(),Bd=Rl[0].toUpperCase()+Rl.slice(1);ht(Ud,"on"+Bd)}ht(Qs,"onAnimationEnd");ht(Gs,"onAnimationIteration");ht(Ks,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(Ys,"onTransitionEnd");tn("onMouseEnter",["mouseout","mouseover"]);tn("onMouseLeave",["mouseout","mouseover"]);tn("onPointerEnter",["pointerout","pointerover"]);tn("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wd=new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));function ua(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uc(r,t,void 0,e),e.currentTarget=null}function Zs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,f=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;ua(l,s,f),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,f=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;ua(l,s,f),o=u}}}if(Dr)throw e=so,Dr=!1,so=null,e}function O(e,t){var n=t[xo];n===void 0&&(n=t[xo]=new Set);var r=e+"__bubble";n.has(r)||(Js(t,e,2,!1),n.add(r))}function Dl(e,t,n){var r=0;t&&(r|=4),Js(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[fr]){e[fr]=!0,os.forEach(function(n){n!=="selectionchange"&&(Wd.has(n)||Dl(n,!1,e),Dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Dl("selectionchange",!1,t))}}function Js(e,t,n,r){switch(Is(t)){case 1:var l=nd;break;case 4:l=rd;break;default:l=ei}n=l.bind(null,t,n,e),l=void 0,!ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Il(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=jt(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}ks(function(){var f=o,g=Xo(n),v=[];e:{var m=Xs.get(e);if(m!==void 0){var S=ni,k=e;switch(e){case"keypress":if(Nr(n)===0)break e;case"keydown":case"keyup":S=yd;break;case"focusin":k="focus",S=_l;break;case"focusout":k="blur",S=_l;break;case"beforeblur":case"afterblur":S=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Zi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=kd;break;case Qs:case Gs:case Ks:S=ud;break;case Ys:S=jd;break;case"scroll":S=ld;break;case"wheel":S=Ed;break;case"copy":case"cut":case"paste":S=dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=qi}var j=(t&4)!==0,I=!j&&e==="scroll",d=j?m!==null?m+"Capture":null:m;j=[];for(var c=f,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,d!==null&&(x=In(c,d),x!=null&&j.push(Wn(c,x,p)))),I)break;c=c.return}0<j.length&&(m=new S(m,k,null,n,g),v.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&n!==oo&&(k=n.relatedTarget||n.fromElement)&&(jt(k)||k[Ke]))break e;if((S||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,S?(k=n.relatedTarget||n.toElement,S=f,k=k?jt(k):null,k!==null&&(I=Dt(k),k!==I||k.tag!==5&&k.tag!==6)&&(k=null)):(S=null,k=f),S!==k)){if(j=Zi,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(j=qi,x="onPointerLeave",d="onPointerEnter",c="pointer"),I=S==null?m:Wt(S),p=k==null?m:Wt(k),m=new j(x,c+"leave",S,n,g),m.target=I,m.relatedTarget=p,x=null,jt(g)===f&&(j=new j(d,c+"enter",k,n,g),j.target=p,j.relatedTarget=I,x=j),I=x,S&&k)t:{for(j=S,d=k,c=0,p=j;p;p=bt(p))c++;for(p=0,x=d;x;x=bt(x))p++;for(;0<c-p;)j=bt(j),c--;for(;0<p-c;)d=bt(d),p--;for(;c--;){if(j===d||d!==null&&j===d.alternate)break t;j=bt(j),d=bt(d)}j=null}else j=null;S!==null&&ca(v,m,S,j,!1),k!==null&&I!==null&&ca(v,I,k,j,!0)}}e:{if(m=f?Wt(f):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var N=Md;else if(na(m))if(Bs)N=bd;else{N=Dd;var _=Rd}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Id);if(N&&(N=N(e,f))){Us(v,N,n,g);break e}_&&_(e,m,f),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&eo(m,"number",m.value)}switch(_=f?Wt(f):window,e){case"focusin":(na(_)||_.contentEditable==="true")&&(Ut=_,po=f,_n=null);break;case"focusout":_n=po=Ut=null;break;case"mousedown":mo=!0;break;case"contextmenu":case"mouseup":case"dragend":mo=!1,aa(v,n,g);break;case"selectionchange":if(Ad)break;case"keydown":case"keyup":aa(v,n,g)}var E;if(li)e:{switch(e){case"compositionstart":var h="onCompositionStart";break e;case"compositionend":h="onCompositionEnd";break e;case"compositionupdate":h="onCompositionUpdate";break e}h=void 0}else At?Os(e,n)&&(h="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(h="onCompositionStart");h&&(Fs&&n.locale!=="ko"&&(At||h!=="onCompositionStart"?h==="onCompositionEnd"&&At&&(E=bs()):(rt=g,ti="value"in rt?rt.value:rt.textContent,At=!0)),_=Ar(f,h),0<_.length&&(h=new Ji(h,e,null,n,g),v.push({event:h,listeners:_}),E?h.data=E:(E=As(n),E!==null&&(h.data=E)))),(E=zd?_d(e,n):Pd(e,n))&&(f=Ar(f,"onBeforeInput"),0<f.length&&(g=new Ji("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:f}),g.data=E))}Zs(v,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ar(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=In(e,n),o!=null&&r.unshift(Wn(e,o,l)),o=In(e,t),o!=null&&r.push(Wn(e,o,l))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ca(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,f=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&f!==null&&(s=f,l?(u=In(n,o),u!=null&&i.unshift(Wn(n,u,s))):l||(u=In(n,o),u!=null&&i.push(Wn(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var $d=/\r\n?/g,Vd=/\u0000|\uFFFD/g;function da(e){return(typeof e=="string"?e:""+e).replace($d,`
`).replace(Vd,"")}function pr(e,t,n){if(t=da(t),da(e)!==t&&n)throw Error(w(425))}function Ur(){}var ho=null,vo=null;function go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,Hd=typeof clearTimeout=="function"?clearTimeout:void 0,fa=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof fa<"u"?function(e){return fa.resolve(null).then(e).catch(Gd)}:yo;function Gd(e){setTimeout(function(){throw e})}function bl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),On(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);On(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+dn,$n="__reactProps$"+dn,Ke="__reactContainer$"+dn,xo="__reactEvents$"+dn,Kd="__reactListeners$"+dn,Yd="__reactHandles$"+dn;function jt(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pa(e);e!==null;){if(n=e[Ae])return n;e=pa(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Ae]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function al(e){return e[$n]||null}var wo=[],$t=-1;function vt(e){return{current:e}}function A(e){0>$t||(e.current=wo[$t],wo[$t]=null,$t--)}function F(e,t){$t++,wo[$t]=e.current,e.current=t}var mt={},oe=vt(mt),me=vt(!1),_t=mt;function nn(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Br(){A(me),A(oe)}function ma(e,t,n){if(oe.current!==mt)throw Error(w(168));F(oe,t),F(me,n)}function qs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,Rc(e)||"Unknown",l));return $({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,_t=oe.current,F(oe,e),F(me,me.current),!0}function ha(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=qs(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,A(me),A(oe),F(oe,e)):A(me),F(me,n)}var $e=null,sl=!1,Fl=!1;function eu(e){$e===null?$e=[e]:$e.push(e)}function Xd(e){sl=!0,eu(e)}function gt(){if(!Fl&&$e!==null){Fl=!0;var e=0,t=b;try{var n=$e;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,sl=!1}catch(l){throw $e!==null&&($e=$e.slice(e+1)),Es(Zo,gt),l}finally{b=t,Fl=!1}}return null}var Vt=[],Ht=0,$r=null,Vr=0,Ne=[],Ee=0,Pt=null,Ve=1,He="";function kt(e,t){Vt[Ht++]=Vr,Vt[Ht++]=$r,$r=e,Vr=t}function tu(e,t,n){Ne[Ee++]=Ve,Ne[Ee++]=He,Ne[Ee++]=Pt,Pt=e;var r=Ve;e=He;var l=32-De(r)-1;r&=~(1<<l),n+=1;var o=32-De(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ve=1<<32-De(t)+l|n<<l|r,He=o+e}else Ve=1<<o|n<<l|r,He=e}function ii(e){e.return!==null&&(kt(e,1),tu(e,1,0))}function ai(e){for(;e===$r;)$r=Vt[--Ht],Vt[Ht]=null,Vr=Vt[--Ht],Vt[Ht]=null;for(;e===Pt;)Pt=Ne[--Ee],Ne[Ee]=null,He=Ne[--Ee],Ne[Ee]=null,Ve=Ne[--Ee],Ne[Ee]=null}var we=null,xe=null,U=!1,Re=null;function nu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function va(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,xe=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:Ve,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,xe=null,!0):!1;default:return!1}}function ko(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(U){var t=xe;if(t){var n=t;if(!va(e,t)){if(ko(e))throw Error(w(418));t=st(n.nextSibling);var r=we;t&&va(e,t)?nu(r,n):(e.flags=e.flags&-4097|2,U=!1,we=e)}}else{if(ko(e))throw Error(w(418));e.flags=e.flags&-4097|2,U=!1,we=e}}}function ga(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function mr(e){if(e!==we)return!1;if(!U)return ga(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!go(e.type,e.memoizedProps)),t&&(t=xe)){if(ko(e))throw ru(),Error(w(418));for(;t;)nu(e,t),t=st(t.nextSibling)}if(ga(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=we?st(e.stateNode.nextSibling):null;return!0}function ru(){for(var e=xe;e;)e=st(e.nextSibling)}function rn(){xe=we=null,U=!1}function si(e){Re===null?Re=[e]:Re.push(e)}var Zd=Ze.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ya(e){var t=e._init;return t(e._payload)}function lu(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function l(d,c){return d=ft(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,p,x){return c===null||c.tag!==6?(c=Vl(p,d.mode,x),c.return=d,c):(c=l(c,p),c.return=d,c)}function u(d,c,p,x){var N=p.type;return N===Ot?g(d,c,p.props.children,x,p.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qe&&ya(N)===c.type)?(x=l(c,p.props),x.ref=gn(d,c,p),x.return=d,x):(x=Lr(p.type,p.key,p.props,null,d.mode,x),x.ref=gn(d,c,p),x.return=d,x)}function f(d,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Hl(p,d.mode,x),c.return=d,c):(c=l(c,p.children||[]),c.return=d,c)}function g(d,c,p,x,N){return c===null||c.tag!==7?(c=zt(p,d.mode,x,N),c.return=d,c):(c=l(c,p),c.return=d,c)}function v(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Vl(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lr:return p=Lr(c.type,c.key,c.props,null,d.mode,p),p.ref=gn(d,null,c),p.return=d,p;case Ft:return c=Hl(c,d.mode,p),c.return=d,c;case qe:var x=c._init;return v(d,x(c._payload),p)}if(kn(c)||fn(c))return c=zt(c,d.mode,p,null),c.return=d,c;hr(d,c)}return null}function m(d,c,p,x){var N=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:s(d,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:return p.key===N?u(d,c,p,x):null;case Ft:return p.key===N?f(d,c,p,x):null;case qe:return N=p._init,m(d,c,N(p._payload),x)}if(kn(p)||fn(p))return N!==null?null:g(d,c,p,x,null);hr(d,p)}return null}function S(d,c,p,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(p)||null,s(c,d,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case lr:return d=d.get(x.key===null?p:x.key)||null,u(c,d,x,N);case Ft:return d=d.get(x.key===null?p:x.key)||null,f(c,d,x,N);case qe:var _=x._init;return S(d,c,p,_(x._payload),N)}if(kn(x)||fn(x))return d=d.get(p)||null,g(c,d,x,N,null);hr(c,x)}return null}function k(d,c,p,x){for(var N=null,_=null,E=c,h=c=0,y=null;E!==null&&h<p.length;h++){E.index>h?(y=E,E=null):y=E.sibling;var P=m(d,E,p[h],x);if(P===null){E===null&&(E=y);break}e&&E&&P.alternate===null&&t(d,E),c=o(P,c,h),_===null?N=P:_.sibling=P,_=P,E=y}if(h===p.length)return n(d,E),U&&kt(d,h),N;if(E===null){for(;h<p.length;h++)E=v(d,p[h],x),E!==null&&(c=o(E,c,h),_===null?N=E:_.sibling=E,_=E);return U&&kt(d,h),N}for(E=r(d,E);h<p.length;h++)y=S(E,d,h,p[h],x),y!==null&&(e&&y.alternate!==null&&E.delete(y.key===null?h:y.key),c=o(y,c,h),_===null?N=y:_.sibling=y,_=y);return e&&E.forEach(function(D){return t(d,D)}),U&&kt(d,h),N}function j(d,c,p,x){var N=fn(p);if(typeof N!="function")throw Error(w(150));if(p=N.call(p),p==null)throw Error(w(151));for(var _=N=null,E=c,h=c=0,y=null,P=p.next();E!==null&&!P.done;h++,P=p.next()){E.index>h?(y=E,E=null):y=E.sibling;var D=m(d,E,P.value,x);if(D===null){E===null&&(E=y);break}e&&E&&D.alternate===null&&t(d,E),c=o(D,c,h),_===null?N=D:_.sibling=D,_=D,E=y}if(P.done)return n(d,E),U&&kt(d,h),N;if(E===null){for(;!P.done;h++,P=p.next())P=v(d,P.value,x),P!==null&&(c=o(P,c,h),_===null?N=P:_.sibling=P,_=P);return U&&kt(d,h),N}for(E=r(d,E);!P.done;h++,P=p.next())P=S(E,d,h,P.value,x),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?h:P.key),c=o(P,c,h),_===null?N=P:_.sibling=P,_=P);return e&&E.forEach(function(ge){return t(d,ge)}),U&&kt(d,h),N}function I(d,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Ot&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:e:{for(var N=p.key,_=c;_!==null;){if(_.key===N){if(N=p.type,N===Ot){if(_.tag===7){n(d,_.sibling),c=l(_,p.props.children),c.return=d,d=c;break e}}else if(_.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qe&&ya(N)===_.type){n(d,_.sibling),c=l(_,p.props),c.ref=gn(d,_,p),c.return=d,d=c;break e}n(d,_);break}else t(d,_);_=_.sibling}p.type===Ot?(c=zt(p.props.children,d.mode,x,p.key),c.return=d,d=c):(x=Lr(p.type,p.key,p.props,null,d.mode,x),x.ref=gn(d,c,p),x.return=d,d=x)}return i(d);case Ft:e:{for(_=p.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=l(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Hl(p,d.mode,x),c.return=d,d=c}return i(d);case qe:return _=p._init,I(d,c,_(p._payload),x)}if(kn(p))return k(d,c,p,x);if(fn(p))return j(d,c,p,x);hr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=l(c,p),c.return=d,d=c):(n(d,c),c=Vl(p,d.mode,x),c.return=d,d=c),i(d)):n(d,c)}return I}var ln=lu(!0),ou=lu(!1),Hr=vt(null),Qr=null,Qt=null,ui=null;function ci(){ui=Qt=Qr=null}function di(e){var t=Hr.current;A(Hr),e._currentValue=t}function jo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qt(e,t){Qr=e,ui=Qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(ui!==e)if(e={context:e,memoizedValue:t,next:null},Qt===null){if(Qr===null)throw Error(w(308));Qt=e,Qr.dependencies={lanes:0,firstContext:e}}else Qt=Qt.next=e;return t}var Nt=null;function fi(e){Nt===null?Nt=[e]:Nt.push(e)}function iu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,fi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function pi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function au(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,fi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jo(e,n)}}function xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gr(e,t,n,r){var l=e.updateQueue;et=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,f=u.next;u.next=null,i===null?o=f:i.next=f,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==i&&(s===null?g.firstBaseUpdate=f:s.next=f,g.lastBaseUpdate=u))}if(o!==null){var v=l.baseState;i=0,g=f=u=null,s=o;do{var m=s.lane,S=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,j=s;switch(m=t,S=n,j.tag){case 1:if(k=j.payload,typeof k=="function"){v=k.call(S,v,m);break e}v=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=j.payload,m=typeof k=="function"?k.call(S,v,m):k,m==null)break e;v=$({},v,m);break e;case 2:et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else S={eventTime:S,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(f=g=S,u=v):g=g.next=S,i|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(u=v),l.baseState=u,l.firstBaseUpdate=f,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Lt|=i,e.lanes=i,e.memoizedState=v}}function wa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var er={},Be=vt(er),Vn=vt(er),Hn=vt(er);function Et(e){if(e===er)throw Error(w(174));return e}function mi(e,t){switch(F(Hn,t),F(Vn,e),F(Be,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:no(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=no(t,e)}A(Be),F(Be,t)}function on(){A(Be),A(Vn),A(Hn)}function su(e){Et(Hn.current);var t=Et(Be.current),n=no(t,e.type);t!==n&&(F(Vn,e),F(Be,n))}function hi(e){Vn.current===e&&(A(Be),A(Vn))}var B=vt(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ol=[];function vi(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var Cr=Ze.ReactCurrentDispatcher,Al=Ze.ReactCurrentBatchConfig,Tt=0,W=null,K=null,Z=null,Yr=!1,Pn=!1,Qn=0,Jd=0;function ne(){throw Error(w(321))}function gi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function yi(e,t,n,r,l,o){if(Tt=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cr.current=e===null||e.memoizedState===null?nf:rf,e=n(r,l),Pn){o=0;do{if(Pn=!1,Qn=0,25<=o)throw Error(w(301));o+=1,Z=K=null,t.updateQueue=null,Cr.current=lf,e=n(r,l)}while(Pn)}if(Cr.current=Xr,t=K!==null&&K.next!==null,Tt=0,Z=K=W=null,Yr=!1,t)throw Error(w(300));return e}function xi(){var e=Qn!==0;return Qn=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?W.memoizedState=Z=e:Z=Z.next=e,Z}function Pe(){if(K===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?W.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(w(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?W.memoizedState=Z=e:Z=Z.next=e}return Z}function Gn(e,t){return typeof t=="function"?t(e):t}function Ul(e){var t=Pe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,f=o;do{var g=f.lane;if((Tt&g)===g)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var v={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(s=u=v,i=r):u=u.next=v,W.lanes|=g,Lt|=g}f=f.next}while(f!==null&&f!==o);u===null?i=r:u.next=s,be(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,W.lanes|=o,Lt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=Pe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);be(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function uu(){}function cu(e,t){var n=W,r=Pe(),l=t(),o=!be(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,wi(pu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Kn(9,fu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(w(349));Tt&30||du(n,t,l)}return l}function du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fu(e,t,n,r){t.value=n,t.getSnapshot=r,mu(t)&&hu(e)}function pu(e,t,n){return n(function(){mu(t)&&hu(e)})}function mu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function hu(e){var t=Ye(e,1);t!==null&&Ie(t,e,1,-1)}function ka(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},t.queue=e,e=e.dispatch=tf.bind(null,W,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vu(){return Pe().memoizedState}function zr(e,t,n,r){var l=Oe();W.flags|=e,l.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var l=Pe();r=r===void 0?null:r;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,r!==null&&gi(r,i.deps)){l.memoizedState=Kn(t,n,o,r);return}}W.flags|=e,l.memoizedState=Kn(1|t,n,o,r)}function Sa(e,t){return zr(8390656,8,e,t)}function wi(e,t){return ul(2048,8,e,t)}function gu(e,t){return ul(4,2,e,t)}function yu(e,t){return ul(4,4,e,t)}function xu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wu(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,xu.bind(null,t,e),n)}function ki(){}function ku(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Su(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ju(e,t,n){return Tt&21?(be(n,t)||(n=_s(),W.lanes|=n,Lt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function qd(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{b=n,Al.transition=r}}function Nu(){return Pe().memoizedState}function ef(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Eu(e))Cu(t,n);else if(n=iu(e,t,n,r),n!==null){var l=ae();Ie(n,e,r,l),zu(n,t,r)}}function tf(e,t,n){var r=dt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Cu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,be(s,i)){var u=t.interleaved;u===null?(l.next=l,fi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=iu(e,t,l,r),n!==null&&(l=ae(),Ie(n,e,r,l),zu(n,t,r))}}function Eu(e){var t=e.alternate;return e===W||t!==null&&t===W}function Cu(e,t){Pn=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jo(e,n)}}var Xr={readContext:_e,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},nf={readContext:_e,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Sa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zr(4194308,4,xu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return zr(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ef.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:ka,useDebugValue:ki,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=ka(!1),t=e[0];return e=qd.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=Oe();if(U){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),J===null)throw Error(w(349));Tt&30||du(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Sa(pu.bind(null,r,o,e),[e]),r.flags|=2048,Kn(9,fu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Oe(),t=J.identifierPrefix;if(U){var n=He,r=Ve;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rf={readContext:_e,useCallback:ku,useContext:_e,useEffect:wi,useImperativeHandle:wu,useInsertionEffect:gu,useLayoutEffect:yu,useMemo:Su,useReducer:Ul,useRef:vu,useState:function(){return Ul(Gn)},useDebugValue:ki,useDeferredValue:function(e){var t=Pe();return ju(t,K.memoizedState,e)},useTransition:function(){var e=Ul(Gn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:uu,useSyncExternalStore:cu,useId:Nu,unstable_isNewReconciler:!1},lf={readContext:_e,useCallback:ku,useContext:_e,useEffect:wi,useImperativeHandle:wu,useInsertionEffect:gu,useLayoutEffect:yu,useMemo:Su,useReducer:Bl,useRef:vu,useState:function(){return Bl(Gn)},useDebugValue:ki,useDeferredValue:function(e){var t=Pe();return K===null?t.memoizedState=e:ju(t,K.memoizedState,e)},useTransition:function(){var e=Bl(Gn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:uu,useSyncExternalStore:cu,useId:Nu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function No(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=dt(e),o=Qe(r,l);o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,l),t!==null&&(Ie(t,e,l,r),Er(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=dt(e),o=Qe(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,l),t!==null&&(Ie(t,e,l,r),Er(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=dt(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(Ie(t,e,r,n),Er(t,e,r))}};function ja(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,o):!0}function _u(e,t,n){var r=!1,l=mt,o=t.contextType;return typeof o=="object"&&o!==null?o=_e(o):(l=he(t)?_t:oe.current,r=t.contextTypes,o=(r=r!=null)?nn(e,l):mt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Na(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function Eo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},pi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=_e(o):(o=he(t)?_t:oe.current,l.context=nn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(No(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&cl.enqueueReplaceState(l,l.state,null),Gr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",r=t;do n+=Mc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Co(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var of=typeof WeakMap=="function"?WeakMap:Map;function Pu(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,bo=r),Co(e,t)},n}function Tu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Co(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Co(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ea(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new of;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=wf.bind(null,e,t,n),t.then(e,e))}function Ca(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function za(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var af=Ze.ReactCurrentOwner,pe=!1;function ie(e,t,n,r){t.child=e===null?ou(t,null,n,r):ln(t,e.child,n,r)}function _a(e,t,n,r,l){n=n.render;var o=t.ref;return qt(t,l),r=yi(e,t,n,r,o,l),n=xi(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(U&&n&&ii(t),t.flags|=1,ie(e,t,r,l),t.child)}function Pa(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Pi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Lu(e,t,o,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(i,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=ft(o,r),e.ref=t.ref,e.return=t,t.child=e}function Lu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Un(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return zo(e,t,n,r,l)}function Mu(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Kt,ye),ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Kt,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,F(Kt,ye),ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,F(Kt,ye),ye|=r;return ie(e,t,l,n),t.child}function Ru(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zo(e,t,n,r,l){var o=he(n)?_t:oe.current;return o=nn(t,o),qt(t,l),n=yi(e,t,n,r,o,l),r=xi(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(U&&r&&ii(t),t.flags|=1,ie(e,t,n,l),t.child)}function Ta(e,t,n,r,l){if(he(n)){var o=!0;Wr(t)}else o=!1;if(qt(t,l),t.stateNode===null)_r(e,t),_u(t,n,r),Eo(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,f=n.contextType;typeof f=="object"&&f!==null?f=_e(f):(f=he(n)?_t:oe.current,f=nn(t,f));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==f)&&Na(t,i,r,f),et=!1;var m=t.memoizedState;i.state=m,Gr(t,r,i,l),u=t.memoizedState,s!==r||m!==u||me.current||et?(typeof g=="function"&&(No(t,n,g,r),u=t.memoizedState),(s=et||ja(t,n,s,r,m,u,f))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=f,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,au(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:Le(t.type,s),i.props=f,v=t.pendingProps,m=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=he(n)?_t:oe.current,u=nn(t,u));var S=n.getDerivedStateFromProps;(g=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==v||m!==u)&&Na(t,i,r,u),et=!1,m=t.memoizedState,i.state=m,Gr(t,r,i,l);var k=t.memoizedState;s!==v||m!==k||me.current||et?(typeof S=="function"&&(No(t,n,S,r),k=t.memoizedState),(f=et||ja(t,n,f,r,m,k,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=u,r=f):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return _o(e,t,n,r,o,l)}function _o(e,t,n,r,l,o){Ru(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&ha(t,n,!1),Xe(e,t,o);r=t.stateNode,af.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=ln(t,e.child,null,o),t.child=ln(t,null,s,o)):ie(e,t,s,o),t.memoizedState=r.state,l&&ha(t,n,!0),t.child}function Du(e){var t=e.stateNode;t.pendingContext?ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ma(e,t.context,!1),mi(e,t.containerInfo)}function La(e,t,n,r,l){return rn(),si(l),t.flags|=256,ie(e,t,n,r),t.child}var Po={dehydrated:null,treeContext:null,retryLane:0};function To(e){return{baseLanes:e,cachePool:null,transitions:null}}function Iu(e,t,n){var r=t.pendingProps,l=B.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F(B,l&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=pl(i,r,0,null),e=zt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=To(n),t.memoizedState=Po,e):Si(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return sf(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ft(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=ft(s,o):(o=zt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?To(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Po,r}return o=e.child,e=o.sibling,r=ft(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Si(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vr(e,t,n,r){return r!==null&&si(r),ln(t,e.child,null,n),e=Si(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Wl(Error(w(422))),vr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=pl({mode:"visible",children:r.children},l,0,null),o=zt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ln(t,e.child,null,i),t.child.memoizedState=To(i),t.memoizedState=Po,o);if(!(t.mode&1))return vr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(w(419)),r=Wl(o,r,void 0),vr(e,t,i,r)}if(s=(i&e.childLanes)!==0,pe||s){if(r=J,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ye(e,l),Ie(r,e,l,-1))}return _i(),r=Wl(Error(w(421))),vr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=kf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,xe=st(l.nextSibling),we=t,U=!0,Re=null,e!==null&&(Ne[Ee++]=Ve,Ne[Ee++]=He,Ne[Ee++]=Pt,Ve=e.id,He=e.overflow,Pt=t),t=Si(t,r.children),t.flags|=4096,t)}function Ma(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jo(e.return,t,n)}function $l(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function bu(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ie(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ma(e,n,t);else if(e.tag===19)Ma(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),$l(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}$l(t,!0,n,null,o);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uf(e,t,n){switch(t.tag){case 3:Du(t),rn();break;case 5:su(t);break;case 1:he(t.type)&&Wr(t);break;case 4:mi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;F(Hr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Iu(e,t,n):(F(B,B.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);F(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return bu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Mu(e,t,n)}return Xe(e,t,n)}var Fu,Lo,Ou,Au;Fu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lo=function(){};Ou=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Et(Be.current);var o=null;switch(n){case"input":l=Jl(e,l),r=Jl(e,r),o=[];break;case"select":l=$({},l,{value:void 0}),r=$({},r,{value:void 0}),o=[];break;case"textarea":l=to(e,l),r=to(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ro(n,r);var i;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var s=l[f];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Rn.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var u=r[f];if(s=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&u!==s&&(u!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&O("scroll",e),o||s===u||(o=[])):(o=o||[]).push(f,u))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};Au=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cf(e,t,n){var r=t.pendingProps;switch(ai(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return he(t.type)&&Br(),re(t),null;case 3:return r=t.stateNode,on(),A(me),A(oe),vi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(Ao(Re),Re=null))),Lo(e,t),re(t),null;case 5:hi(t);var l=Et(Hn.current);if(n=t.type,e!==null&&t.stateNode!=null)Ou(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return re(t),null}if(e=Et(Be.current),mr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ae]=t,r[$n]=o,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<jn.length;l++)O(jn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Bi(r,o),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},O("invalid",r);break;case"textarea":$i(r,o),O("invalid",r)}ro(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),l=["children",""+s]):Rn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&O("scroll",r)}switch(n){case"input":or(r),Wi(r,o,!0);break;case"textarea":or(r),Vi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ps(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ae]=t,e[$n]=r,Fu(e,t,!1,!1),t.stateNode=e;e:{switch(i=lo(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<jn.length;l++)O(jn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Bi(e,r),l=Jl(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=$({},r,{value:void 0}),O("invalid",e);break;case"textarea":$i(e,r),l=to(e,r),O("invalid",e);break;default:l=r}ro(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?vs(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ms(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dn(e,u):typeof u=="number"&&Dn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&O("scroll",e):u!=null&&Qo(e,o,u,i))}switch(n){case"input":or(e),Wi(e,r,!1);break;case"textarea":or(e),Vi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Yt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Au(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Et(Hn.current),Et(Be.current),mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(o=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return re(t),null;case 13:if(A(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&xe!==null&&t.mode&1&&!(t.flags&128))ru(),rn(),t.flags|=98560,o=!1;else if(o=mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[Ae]=t}else rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),o=!1}else Re!==null&&(Ao(Re),Re=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Y===0&&(Y=3):_i())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return on(),Lo(e,t),e===null&&Bn(t.stateNode.containerInfo),re(t),null;case 10:return di(t.type._context),re(t),null;case 17:return he(t.type)&&Br(),re(t),null;case 19:if(A(B),o=t.memoizedState,o===null)return re(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)yn(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Kr(e),i!==null){for(t.flags|=128,yn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(B,B.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>sn&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!U)return re(t),null}else 2*Q()-o.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=B.current,F(B,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return zi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function df(e,t){switch(ai(t),t.tag){case 1:return he(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),A(me),A(oe),vi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hi(t),null;case 13:if(A(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(B),null;case 4:return on(),null;case 10:return di(t.type._context),null;case 22:case 23:return zi(),null;case 24:return null;default:return null}}var gr=!1,le=!1,ff=typeof WeakSet=="function"?WeakSet:Set,C=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Mo(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ra=!1;function pf(e,t){if(ho=Fr,e=Vs(),oi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,f=0,g=0,v=e,m=null;t:for(;;){for(var S;v!==n||l!==0&&v.nodeType!==3||(s=i+l),v!==o||r!==0&&v.nodeType!==3||(u=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(S=v.firstChild)!==null;)m=v,v=S;for(;;){if(v===e)break t;if(m===n&&++f===l&&(s=i),m===o&&++g===r&&(u=i),(S=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vo={focusedElem:e,selectionRange:n},Fr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var j=k.memoizedProps,I=k.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?j:Le(t.type,j),I);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){V(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return k=Ra,Ra=!1,k}function Tn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Mo(t,n,o)}l=l.next}while(l!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ro(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uu(e){var t=e.alternate;t!==null&&(e.alternate=null,Uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[$n],delete t[xo],delete t[Kd],delete t[Yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function Da(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Do(e,t,n),e=e.sibling;e!==null;)Do(e,t,n),e=e.sibling}function Io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Io(e,t,n),e=e.sibling;e!==null;)Io(e,t,n),e=e.sibling}var q=null,Me=!1;function Je(e,t,n){for(n=n.child;n!==null;)Wu(e,t,n),n=n.sibling}function Wu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:le||Gt(n,t);case 6:var r=q,l=Me;q=null,Je(e,t,n),q=r,Me=l,q!==null&&(Me?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Me?(e=q,n=n.stateNode,e.nodeType===8?bl(e.parentNode,n):e.nodeType===1&&bl(e,n),On(e)):bl(q,n.stateNode));break;case 4:r=q,l=Me,q=n.stateNode.containerInfo,Me=!0,Je(e,t,n),q=r,Me=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Mo(n,t,i),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!le&&(Gt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Je(e,t,n),le=r):Je(e,t,n);break;default:Je(e,t,n)}}function Ia(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ff),t.forEach(function(r){var l=Sf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:q=s.stateNode,Me=!1;break e;case 3:q=s.stateNode.containerInfo,Me=!0;break e;case 4:q=s.stateNode.containerInfo,Me=!0;break e}s=s.return}if(q===null)throw Error(w(160));Wu(o,i,l),q=null,Me=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(f){V(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$u(t,e),t=t.sibling}function $u(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Fe(e),r&4){try{Tn(3,e,e.return),dl(3,e)}catch(j){V(e,e.return,j)}try{Tn(5,e,e.return)}catch(j){V(e,e.return,j)}}break;case 1:Te(t,e),Fe(e),r&512&&n!==null&&Gt(n,n.return);break;case 5:if(Te(t,e),Fe(e),r&512&&n!==null&&Gt(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(j){V(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ds(l,o),lo(s,i);var f=lo(s,o);for(i=0;i<u.length;i+=2){var g=u[i],v=u[i+1];g==="style"?vs(l,v):g==="dangerouslySetInnerHTML"?ms(l,v):g==="children"?Dn(l,v):Qo(l,g,v,f)}switch(s){case"input":ql(l,o);break;case"textarea":fs(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Yt(l,!!o.multiple,S,!1):m!==!!o.multiple&&(o.defaultValue!=null?Yt(l,!!o.multiple,o.defaultValue,!0):Yt(l,!!o.multiple,o.multiple?[]:"",!1))}l[$n]=o}catch(j){V(e,e.return,j)}}break;case 6:if(Te(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(j){V(e,e.return,j)}}break;case 3:if(Te(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{On(t.containerInfo)}catch(j){V(e,e.return,j)}break;case 4:Te(t,e),Fe(e);break;case 13:Te(t,e),Fe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ei=Q())),r&4&&Ia(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(le=(f=le)||g,Te(t,e),le=f):Te(t,e),Fe(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&e.mode&1)for(C=e,g=e.child;g!==null;){for(v=C=g;C!==null;){switch(m=C,S=m.child,m.tag){case 0:case 11:case 14:case 15:Tn(4,m,m.return);break;case 1:Gt(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(j){V(r,n,j)}}break;case 5:Gt(m,m.return);break;case 22:if(m.memoizedState!==null){Fa(v);continue}}S!==null?(S.return=m,C=S):Fa(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{l=v.stateNode,f?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=v.stateNode,u=v.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=hs("display",i))}catch(j){V(e,e.return,j)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=f?"":v.memoizedProps}catch(j){V(e,e.return,j)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Te(t,e),Fe(e),r&4&&Ia(e);break;case 21:break;default:Te(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bu(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var o=Da(e);Io(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Da(e);Do(e,s,i);break;default:throw Error(w(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mf(e,t,n){C=e,Vu(e)}function Vu(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||gr;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||le;s=gr;var f=le;if(gr=i,(le=u)&&!f)for(C=l;C!==null;)i=C,u=i.child,i.tag===22&&i.memoizedState!==null?Oa(l):u!==null?(u.return=i,C=u):Oa(l);for(;o!==null;)C=o,Vu(o),o=o.sibling;C=l,gr=s,le=f}ba(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,C=o):ba(e)}}function ba(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wa(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wa(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&On(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&Ro(t)}catch(m){V(t,t.return,m)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Fa(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Oa(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){V(t,l,u)}}var o=t.return;try{Ro(t)}catch(u){V(t,o,u)}break;case 5:var i=t.return;try{Ro(t)}catch(u){V(t,i,u)}}}catch(u){V(t,t.return,u)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var hf=Math.ceil,Zr=Ze.ReactCurrentDispatcher,ji=Ze.ReactCurrentOwner,ze=Ze.ReactCurrentBatchConfig,R=0,J=null,G=null,ee=0,ye=0,Kt=vt(0),Y=0,Yn=null,Lt=0,fl=0,Ni=0,Ln=null,fe=null,Ei=0,sn=1/0,We=null,Jr=!1,bo=null,ct=null,yr=!1,lt=null,qr=0,Mn=0,Fo=null,Pr=-1,Tr=0;function ae(){return R&6?Q():Pr!==-1?Pr:Pr=Q()}function dt(e){return e.mode&1?R&2&&ee!==0?ee&-ee:Zd.transition!==null?(Tr===0&&(Tr=_s()),Tr):(e=b,e!==0||(e=window.event,e=e===void 0?16:Is(e.type)),e):1}function Ie(e,t,n,r){if(50<Mn)throw Mn=0,Fo=null,Error(w(185));Zn(e,n,r),(!(R&2)||e!==J)&&(e===J&&(!(R&2)&&(fl|=n),Y===4&&nt(e,ee)),ve(e,r),n===1&&R===0&&!(t.mode&1)&&(sn=Q()+500,sl&&gt()))}function ve(e,t){var n=e.callbackNode;Zc(e,t);var r=br(e,e===J?ee:0);if(r===0)n!==null&&Gi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gi(n),t===1)e.tag===0?Xd(Aa.bind(null,e)):eu(Aa.bind(null,e)),Qd(function(){!(R&6)&&gt()}),n=null;else{switch(Ps(r)){case 1:n=Zo;break;case 4:n=Cs;break;case 16:n=Ir;break;case 536870912:n=zs;break;default:n=Ir}n=Ju(n,Hu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hu(e,t){if(Pr=-1,Tr=0,R&6)throw Error(w(327));var n=e.callbackNode;if(en()&&e.callbackNode!==n)return null;var r=br(e,e===J?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var l=R;R|=2;var o=Gu();(J!==e||ee!==t)&&(We=null,sn=Q()+500,Ct(e,t));do try{yf();break}catch(s){Qu(e,s)}while(!0);ci(),Zr.current=o,R=l,G!==null?t=0:(J=null,ee=0,t=Y)}if(t!==0){if(t===2&&(l=uo(e),l!==0&&(r=l,t=Oo(e,l))),t===1)throw n=Yn,Ct(e,0),nt(e,r),ve(e,Q()),n;if(t===6)nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!vf(l)&&(t=el(e,r),t===2&&(o=uo(e),o!==0&&(r=o,t=Oo(e,o))),t===1))throw n=Yn,Ct(e,0),nt(e,r),ve(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:St(e,fe,We);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Ei+500-Q(),10<t)){if(br(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yo(St.bind(null,e,fe,We),t);break}St(e,fe,We);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-De(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hf(r/1960))-r,10<r){e.timeoutHandle=yo(St.bind(null,e,fe,We),r);break}St(e,fe,We);break;case 5:St(e,fe,We);break;default:throw Error(w(329))}}}return ve(e,Q()),e.callbackNode===n?Hu.bind(null,e):null}function Oo(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=el(e,t),e!==2&&(t=fe,fe=n,t!==null&&Ao(t)),e}function Ao(e){fe===null?fe=e:fe.push.apply(fe,e)}function vf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!be(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Ni,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Aa(e){if(R&6)throw Error(w(327));en();var t=br(e,0);if(!(t&1))return ve(e,Q()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=uo(e);r!==0&&(t=r,n=Oo(e,r))}if(n===1)throw n=Yn,Ct(e,0),nt(e,t),ve(e,Q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,fe,We),ve(e,Q()),null}function Ci(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(sn=Q()+500,sl&&gt())}}function Mt(e){lt!==null&&lt.tag===0&&!(R&6)&&en();var t=R;R|=1;var n=ze.transition,r=b;try{if(ze.transition=null,b=1,e)return e()}finally{b=r,ze.transition=n,R=t,!(R&6)&&gt()}}function zi(){ye=Kt.current,A(Kt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hd(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(ai(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:on(),A(me),A(oe),vi();break;case 5:hi(r);break;case 4:on();break;case 13:A(B);break;case 19:A(B);break;case 10:di(r.type._context);break;case 22:case 23:zi()}n=n.return}if(J=e,G=e=ft(e.current,null),ee=ye=t,Y=0,Yn=null,Ni=fl=Lt=0,fe=Ln=null,Nt!==null){for(t=0;t<Nt.length;t++)if(n=Nt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Nt=null}return e}function Qu(e,t){do{var n=G;try{if(ci(),Cr.current=Xr,Yr){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Yr=!1}if(Tt=0,Z=K=W=null,Pn=!1,Qn=0,ji.current=null,n===null||n.return===null){Y=1,Yn=t,G=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=ee,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,g=s,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var S=Ca(i);if(S!==null){S.flags&=-257,za(S,i,s,o,t),S.mode&1&&Ea(o,f,t),t=S,u=f;var k=t.updateQueue;if(k===null){var j=new Set;j.add(u),t.updateQueue=j}else k.add(u);break e}else{if(!(t&1)){Ea(o,f,t),_i();break e}u=Error(w(426))}}else if(U&&s.mode&1){var I=Ca(i);if(I!==null){!(I.flags&65536)&&(I.flags|=256),za(I,i,s,o,t),si(an(u,s));break e}}o=u=an(u,s),Y!==4&&(Y=2),Ln===null?Ln=[o]:Ln.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Pu(o,u,t);xa(o,d);break e;case 1:s=u;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ct===null||!ct.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Tu(o,s,t);xa(o,x);break e}}o=o.return}while(o!==null)}Yu(n)}catch(N){t=N,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Gu(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function _i(){(Y===0||Y===3||Y===2)&&(Y=4),J===null||!(Lt&268435455)&&!(fl&268435455)||nt(J,ee)}function el(e,t){var n=R;R|=2;var r=Gu();(J!==e||ee!==t)&&(We=null,Ct(e,t));do try{gf();break}catch(l){Qu(e,l)}while(!0);if(ci(),R=n,Zr.current=r,G!==null)throw Error(w(261));return J=null,ee=0,Y}function gf(){for(;G!==null;)Ku(G)}function yf(){for(;G!==null&&!Wc();)Ku(G)}function Ku(e){var t=Zu(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Yu(e):G=t,ji.current=null}function Yu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=df(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,G=null;return}}else if(n=cf(n,t,ye),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);Y===0&&(Y=5)}function St(e,t,n){var r=b,l=ze.transition;try{ze.transition=null,b=1,xf(e,t,n,r)}finally{ze.transition=l,b=r}return null}function xf(e,t,n,r){do en();while(lt!==null);if(R&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jc(e,o),e===J&&(G=J=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,Ju(Ir,function(){return en(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ze.transition,ze.transition=null;var i=b;b=1;var s=R;R|=4,ji.current=null,pf(e,n),$u(n,e),Od(vo),Fr=!!ho,vo=ho=null,e.current=n,mf(n),$c(),R=s,b=i,ze.transition=o}else e.current=n;if(yr&&(yr=!1,lt=e,qr=l),o=e.pendingLanes,o===0&&(ct=null),Qc(n.stateNode),ve(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Jr)throw Jr=!1,e=bo,bo=null,e;return qr&1&&e.tag!==0&&en(),o=e.pendingLanes,o&1?e===Fo?Mn++:(Mn=0,Fo=e):Mn=0,gt(),null}function en(){if(lt!==null){var e=Ps(qr),t=ze.transition,n=b;try{if(ze.transition=null,b=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,qr=0,R&6)throw Error(w(331));var l=R;for(R|=4,C=e.current;C!==null;){var o=C,i=o.child;if(C.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var f=s[u];for(C=f;C!==null;){var g=C;switch(g.tag){case 0:case 11:case 15:Tn(8,g,o)}var v=g.child;if(v!==null)v.return=g,C=v;else for(;C!==null;){g=C;var m=g.sibling,S=g.return;if(Uu(g),g===f){C=null;break}if(m!==null){m.return=S,C=m;break}C=S}}}var k=o.alternate;if(k!==null){var j=k.child;if(j!==null){k.child=null;do{var I=j.sibling;j.sibling=null,j=I}while(j!==null)}}C=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,C=i;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,C=d;break e}C=o.return}}var c=e.current;for(C=c;C!==null;){i=C;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,C=p;else e:for(i=c;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:dl(9,s)}}catch(N){V(s,s.return,N)}if(s===i){C=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,C=x;break e}C=s.return}}if(R=l,gt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{b=n,ze.transition=t}}return!1}function Ua(e,t,n){t=an(n,t),t=Pu(e,t,1),e=ut(e,t,1),t=ae(),e!==null&&(Zn(e,1,t),ve(e,t))}function V(e,t,n){if(e.tag===3)Ua(e,e,n);else for(;t!==null;){if(t.tag===3){Ua(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=an(n,e),e=Tu(t,e,1),t=ut(t,e,1),e=ae(),t!==null&&(Zn(t,1,e),ve(t,e));break}}t=t.return}}function wf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(ee&n)===n&&(Y===4||Y===3&&(ee&130023424)===ee&&500>Q()-Ei?Ct(e,0):Ni|=n),ve(e,t)}function Xu(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=ae();e=Ye(e,t),e!==null&&(Zn(e,t,n),ve(e,n))}function kf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Sf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Xu(e,n)}var Zu;Zu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,uf(e,t,n);pe=!!(e.flags&131072)}else pe=!1,U&&t.flags&1048576&&tu(t,Vr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_r(e,t),e=t.pendingProps;var l=nn(t,oe.current);qt(t,n),l=yi(null,t,r,e,l,n);var o=xi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(o=!0,Wr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,pi(t),l.updater=cl,t.stateNode=l,l._reactInternals=t,Eo(t,r,e,n),t=_o(null,t,r,!0,o,n)):(t.tag=0,U&&o&&ii(t),ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_r(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Nf(r),e=Le(r,e),l){case 0:t=zo(null,t,r,e,n);break e;case 1:t=Ta(null,t,r,e,n);break e;case 11:t=_a(null,t,r,e,n);break e;case 14:t=Pa(null,t,r,Le(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),zo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ta(e,t,r,l,n);case 3:e:{if(Du(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,l=o.element,au(e,t),Gr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=an(Error(w(423)),t),t=La(e,t,r,n,l);break e}else if(r!==l){l=an(Error(w(424)),t),t=La(e,t,r,n,l);break e}else for(xe=st(t.stateNode.containerInfo.firstChild),we=t,U=!0,Re=null,n=ou(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rn(),r===l){t=Xe(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return su(t),e===null&&So(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,go(r,l)?i=null:o!==null&&go(r,o)&&(t.flags|=32),Ru(e,t),ie(e,t,i,n),t.child;case 6:return e===null&&So(t),null;case 13:return Iu(e,t,n);case 4:return mi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ln(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),_a(e,t,r,l,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,F(Hr,r._currentValue),r._currentValue=i,o!==null)if(be(o.value,i)){if(o.children===l.children&&!me.current){t=Xe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Qe(-1,n&-n),u.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?u.next=u:(u.next=g.next,g.next=u),f.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),jo(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(w(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),jo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,qt(t,n),l=_e(l),r=r(l),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),Pa(e,t,r,l,n);case 15:return Lu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),_r(e,t),t.tag=1,he(r)?(e=!0,Wr(t)):e=!1,qt(t,n),_u(t,r,l),Eo(t,r,l,n),_o(null,t,r,!0,e,n);case 19:return bu(e,t,n);case 22:return Mu(e,t,n)}throw Error(w(156,t.tag))};function Ju(e,t){return Es(e,t)}function jf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new jf(e,t,n,r)}function Pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nf(e){if(typeof e=="function")return Pi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ko)return 11;if(e===Yo)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Pi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ot:return zt(n.children,l,o,t);case Go:i=8,l|=8;break;case Kl:return e=Ce(12,n,t,l|2),e.elementType=Kl,e.lanes=o,e;case Yl:return e=Ce(13,n,t,l),e.elementType=Yl,e.lanes=o,e;case Xl:return e=Ce(19,n,t,l),e.elementType=Xl,e.lanes=o,e;case ss:return pl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case is:i=10;break e;case as:i=9;break e;case Ko:i=11;break e;case Yo:i=14;break e;case qe:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ce(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function zt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=ss,e.lanes=n,e.stateNode={isHidden:!1},e}function Vl(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Hl(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ef(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ti(e,t,n,r,l,o,i,s,u){return e=new Ef(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ce(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pi(o),e}function Cf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ft,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qu(e){if(!e)return mt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(he(n))return qs(e,n,t)}return t}function ec(e,t,n,r,l,o,i,s,u){return e=Ti(n,r,!0,e,l,o,i,s,u),e.context=qu(null),n=e.current,r=ae(),l=dt(n),o=Qe(r,l),o.callback=t??null,ut(n,o,l),e.current.lanes=l,Zn(e,l,r),ve(e,r),e}function ml(e,t,n,r){var l=t.current,o=ae(),i=dt(l);return n=qu(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,i),e!==null&&(Ie(e,l,i,o),Er(e,l,i)),i}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ba(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Li(e,t){Ba(e,t),(e=e.alternate)&&Ba(e,t)}function zf(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mi(e){this._internalRoot=e}hl.prototype.render=Mi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));ml(e,t,null,null)};hl.prototype.unmount=Mi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){ml(null,e,null,null)}),t[Ke]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ms();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&Ds(e)}};function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wa(){}function _f(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var f=tl(i);o.call(f)}}var i=ec(t,r,e,0,null,!1,!1,"",Wa);return e._reactRootContainer=i,e[Ke]=i.current,Bn(e.nodeType===8?e.parentNode:e),Mt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var f=tl(u);s.call(f)}}var u=Ti(e,0,!1,null,null,!1,!1,"",Wa);return e._reactRootContainer=u,e[Ke]=u.current,Bn(e.nodeType===8?e.parentNode:e),Mt(function(){ml(t,u,n,r)}),u}function gl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=tl(i);s.call(u)}}ml(t,i,e,l)}else i=_f(n,t,e,l,r);return tl(i)}Ts=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(Jo(t,n|1),ve(t,Q()),!(R&6)&&(sn=Q()+500,gt()))}break;case 13:Mt(function(){var r=Ye(e,1);if(r!==null){var l=ae();Ie(r,e,1,l)}}),Li(e,1)}};qo=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ae();Ie(t,e,134217728,n)}Li(e,134217728)}};Ls=function(e){if(e.tag===13){var t=dt(e),n=Ye(e,t);if(n!==null){var r=ae();Ie(n,e,t,r)}Li(e,t)}};Ms=function(){return b};Rs=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};io=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=al(r);if(!l)throw Error(w(90));cs(r),ql(r,l)}}}break;case"textarea":fs(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};xs=Ci;ws=Mt;var Pf={usingClientEntryPoint:!1,Events:[qn,Wt,al,gs,ys,Ci]},xn={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tf={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=js(e),e===null?null:e.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{rl=xr.inject(Tf),Ue=xr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ri(t))throw Error(w(200));return Cf(e,t,null,n)};Se.createRoot=function(e,t){if(!Ri(e))throw Error(w(299));var n=!1,r="",l=tc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ti(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Bn(e.nodeType===8?e.parentNode:e),new Mi(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=js(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Mt(e)};Se.hydrate=function(e,t,n){if(!vl(t))throw Error(w(200));return gl(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!Ri(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=tc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=ec(t,null,e,1,n??null,l,!1,o,i),e[Ke]=t.current,Bn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hl(t)};Se.render=function(e,t,n){if(!vl(t))throw Error(w(200));return gl(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!vl(e))throw Error(w(40));return e._reactRootContainer?(Mt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};Se.unstable_batchedUpdates=Ci;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vl(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return gl(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(e){console.error(e)}}nc(),ns.exports=Se;var Lf=ns.exports,$a=Lf;Ql.createRoot=$a.createRoot,Ql.hydrateRoot=$a.hydrateRoot;const Mf=`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Syne:wght@400;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #f8fafc;
    --surface: #ffffff;
    --surface2: #f1f5f9;
    --border: #cbd5e1;
    --green: #009959;
    --cyan: #0077aa;
    --orange: #c95c10;
    --pink: #c4245e;
    --yellow: #9c7400;
    --text: #1e293b;
    --muted: #64748b;
    --mono: 'JetBrains Mono', monospace;
    --sans: 'Syne', sans-serif;
  }

  body { background: var(--bg); color: var(--text); font-family: var(--sans); }

  .app {
    min-height: 100vh;
    padding: 32px 24px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .header {
    margin-bottom: 40px;
    border-bottom: 1px solid var(--border);
    padding-bottom: 24px;
  }

  .header h1 {
    font-size: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--cyan);
    font-family: var(--mono);
    margin-bottom: 8px;
  }

  .header h2 {
    font-size: 28px;
    font-weight: 800;
    color: var(--text);
    line-height: 1.1;
  }

  .tabs {
    display: flex;
    gap: 4px;
    margin-bottom: 32px;
    background: var(--surface);
    padding: 4px;
    border-radius: 8px;
    border: 1px solid var(--border);
    flex-wrap: wrap;
  }

  .tab {
    padding: 8px 16px;
    border-radius: 5px;
    border: none;
    background: transparent;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.15s;
  }

  .tab:hover { color: var(--text); background: var(--surface2); }
  .tab.active { background: var(--surface2); color: var(--cyan); border: 1px solid var(--border); }

  .diagram { animation: fadeIn 0.2s ease; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

  /* ---- DIAGRAM 1: GPU Overview ---- */
  .gpu-schematic {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
  }

  .gpu-schematic h3 {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 20px;
  }

  .gpu-body {
    border: 2px solid var(--cyan);
    border-radius: 10px;
    padding: 20px;
    position: relative;
  }

  .gpu-label {
    position: absolute;
    top: -11px;
    left: 20px;
    background: var(--surface);
    padding: 0 8px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--cyan);
    letter-spacing: 0.1em;
  }

  .gpu-row {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
    align-items: flex-start;
  }

  .memory-block {
    background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
    border: 1px solid var(--orange);
    border-radius: 8px;
    padding: 12px 16px;
    text-align: center;
    flex-shrink: 0;
  }

  .memory-block .label {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--orange);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 4px;
  }

  .memory-block .value {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--text);
    font-weight: 600;
  }

  .sm-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
    flex: 1;
  }

  .sm-chip {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 4px;
    text-align: center;
    cursor: pointer;
    transition: all 0.15s;
    position: relative;
  }

  .sm-chip:hover, .sm-chip.active {
    border-color: var(--green);
    background: #e8f5ee;
  }

  .sm-chip .sm-label {
    font-family: var(--mono);
    font-size: 8px;
    color: var(--muted);
    display: block;
    margin-bottom: 3px;
  }

  .sm-chip .sm-num {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--green);
    font-weight: 600;
  }

  .sm-detail {
    margin-top: 16px;
    background: #e8f5ee;
    border: 1px solid var(--green);
    border-radius: 8px;
    padding: 16px;
    display: none;
  }

  .sm-detail.visible { display: block; }

  .sm-detail h4 {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--green);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
  }

  .sm-internals {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .sm-component {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 10px;
    text-align: center;
  }

  .sm-component .c-label {
    font-family: var(--mono);
    font-size: 9px;
    color: var(--muted);
    text-transform: uppercase;
    display: block;
    margin-bottom: 3px;
  }

  .sm-component .c-value {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 600;
  }

  .interface-bar {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 16px;
    text-align: center;
    margin-bottom: 12px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.08em;
  }

  /* ---- DIAGRAM 2: Execution Hierarchy ---- */
  .hierarchy {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .h-level {
    display: flex;
    align-items: stretch;
    gap: 0;
  }

  .h-label {
    width: 100px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 16px;
  }

  .h-label span {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-align: right;
  }

  .h-connector {
    width: 2px;
    background: var(--border);
    flex-shrink: 0;
    align-self: stretch;
  }

  .h-content {
    flex: 1;
    padding: 12px 0 12px 16px;
  }

  .grid-box {
    background: var(--surface);
    border: 2px solid var(--cyan);
    border-radius: 10px;
    padding: 16px;
    position: relative;
  }

  .grid-box .box-label {
    position: absolute;
    top: -10px;
    left: 12px;
    background: var(--surface);
    padding: 0 6px;
    font-family: var(--mono);
    font-size: 10px;
    color: var(--cyan);
    font-weight: 600;
    letter-spacing: 0.1em;
  }

  .blocks-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .block-box {
    background: var(--surface2);
    border: 1px solid var(--pink);
    border-radius: 8px;
    padding: 10px;
    min-width: 120px;
    cursor: pointer;
    transition: all 0.15s;
  }

  .block-box:hover, .block-box.sel {
    border-color: var(--pink);
    background: #fce8f0;
    box-shadow: 0 0 12px #c4245e22;
  }

  .block-box .bb-label {
    font-family: var(--mono);
    font-size: 9px;
    color: var(--pink);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
    display: block;
  }

  .threads-mini {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 2px;
  }

  .thread-dot {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: var(--surface);
    border: 1px solid var(--border);
    transition: all 0.1s;
  }

  .thread-dot.warp-0 { background: #bbf7d0; border-color: var(--green); }
  .thread-dot.warp-1 { background: #bae6fd; border-color: var(--cyan); }
  .thread-dot.warp-2 { background: #fed7aa; border-color: var(--orange); }
  .thread-dot.warp-3 { background: #fbcfe8; border-color: var(--pink); }

  .warp-legend {
    display: flex;
    gap: 12px;
    margin-top: 8px;
    flex-wrap: wrap;
  }

  .warp-pill {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: var(--mono);
    font-size: 9px;
    color: var(--muted);
  }

  .warp-dot {
    width: 10px;
    height: 10px;
    border-radius: 2px;
  }

  /* ---- DIAGRAM 3: Warp execution on SM ---- */
  .warp-diagram {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .sm-box {
    background: var(--surface);
    border: 2px solid var(--green);
    border-radius: 10px;
    padding: 16px;
    position: relative;
  }

  .sm-box .box-label {
    position: absolute;
    top: -10px;
    left: 12px;
    background: var(--surface);
    padding: 0 6px;
    font-family: var(--mono);
    font-size: 10px;
    color: var(--green);
    font-weight: 600;
    letter-spacing: 0.1em;
  }

  .scheduler-row {
    display: flex;
    gap: 6px;
    margin-bottom: 12px;
  }

  .scheduler {
    flex: 1;
    background: #e8f5ee;
    border: 1px solid var(--green);
    border-radius: 6px;
    padding: 6px;
    text-align: center;
    font-family: var(--mono);
    font-size: 9px;
    color: var(--green);
  }

  .warp-pool {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4px;
  }

  .warp-card {
    border-radius: 5px;
    padding: 6px 4px;
    text-align: center;
    font-family: var(--mono);
    font-size: 9px;
    border: 1px solid;
    cursor: pointer;
    transition: all 0.15s;
  }

  .warp-card.ready { background: #d1fae5; border-color: var(--green); color: var(--green); }
  .warp-card.stalled { background: #ffedd5; border-color: var(--orange); color: var(--orange); }
  .warp-card.executing { background: #fef9c3; border-color: var(--yellow); color: var(--yellow); animation: pulse 0.8s infinite alternate; }
  .warp-card.idle { background: #f1f5f9; border-color: var(--muted); color: var(--muted); }
  .warp-card.selected {
    outline: 1px solid var(--cyan);
    box-shadow: 0 0 0 2px #0077aa26;
    transform: translateY(-1px);
  }
  @keyframes pulse { from { opacity: 0.7; } to { opacity: 1; } }

  .warp-dropdown {
    margin-top: 10px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface2);
    padding: 10px;
  }

  .warp-dropdown-title {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--cyan);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
  }

  .warp-dropdown-line {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--text);
    line-height: 1.5;
  }

  .warp-legend-box {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
  }

  .warp-legend-box h4 {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 4px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .legend-badge {
    padding: 3px 8px;
    border-radius: 4px;
    font-family: var(--mono);
    font-size: 10px;
    font-weight: 600;
    border: 1px solid;
    min-width: 70px;
    text-align: center;
  }

  .legend-badge.ready { background: #d1fae5; border-color: var(--green); color: var(--green); }
  .legend-badge.stalled { background: #ffedd5; border-color: var(--orange); color: var(--orange); }
  .legend-badge.executing { background: #fef9c3; border-color: var(--yellow); color: var(--yellow); }

  .legend-desc {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--muted);
    line-height: 1.5;
  }

  .stat-row {
    display: flex;
    gap: 8px;
    margin-top: 16px;
    flex-wrap: wrap;
  }

  .stat-chip {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 12px;
    font-family: var(--mono);
  }

  .stat-chip .s-label {
    font-size: 9px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    display: block;
    margin-bottom: 2px;
  }

  .stat-chip .s-value {
    font-size: 14px;
    font-weight: 700;
    color: var(--cyan);
  }

  /* ---- DIAGRAM 4: Lanes within a warp ---- */
  .lane-panel {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 16px;
  }

  .lane-box {
    background: var(--surface);
    border: 2px solid var(--cyan);
    border-radius: 10px;
    padding: 16px;
    position: relative;
  }

  .lane-box .box-label {
    position: absolute;
    top: -10px;
    left: 12px;
    background: var(--surface);
    padding: 0 6px;
    font-family: var(--mono);
    font-size: 10px;
    color: var(--cyan);
    font-weight: 600;
    letter-spacing: 0.1em;
  }

  .lane-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 6px;
    margin-bottom: 12px;
  }

  .lane-cell {
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 4px;
    text-align: center;
    font-family: var(--mono);
    font-size: 10px;
    color: var(--muted);
    background: var(--surface2);
    transition: all 0.15s;
  }

  .lane-cell.active {
    border-color: var(--green);
    color: var(--green);
    background: #d1fae5;
  }

  .lane-cell.helper {
    border-color: var(--yellow);
    color: var(--yellow);
    background: #fef9c3;
  }

  .lane-cell.path-a {
    border-color: var(--cyan);
    color: var(--cyan);
    background: #dbeafe;
  }

  .lane-cell.path-b {
    border-color: var(--pink);
    color: var(--pink);
    background: #fce8f0;
  }

  .lane-cell.idle {
    opacity: 0.45;
  }

  .lane-controls {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
  }

  .lane-btn {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 8px 6px;
    cursor: pointer;
    transition: all 0.15s;
  }

  .lane-btn:hover {
    color: var(--text);
    border-color: var(--cyan);
  }

  .lane-btn.active {
    color: var(--cyan);
    border-color: var(--cyan);
    background: #dbeafe;
  }

  .lane-info {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .lane-info h4 {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--cyan);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .lane-note {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text);
    line-height: 1.5;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 7px;
    padding: 10px;
  }

  /* ---- DIAGRAM 5: Memory hierarchy ---- */
  .mem-hierarchy {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .mem-level {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid var(--border);
    cursor: default;
    transition: all 0.15s;
  }

  .mem-level:hover { border-color: var(--cyan); transform: translateX(4px); }

  .mem-bar-wrap {
    flex: 1;
    height: 8px;
    background: var(--surface2);
    border-radius: 4px;
    overflow: hidden;
  }

  .mem-bar {
    height: 100%;
    border-radius: 4px;
    transition: width 0.5s ease;
  }

  .mem-info {
    display: flex;
    flex-direction: column;
    min-width: 140px;
  }

  .mem-name {
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  .mem-scope {
    font-family: var(--mono);
    font-size: 9px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .mem-stats {
    display: flex;
    gap: 16px;
    min-width: 200px;
  }

  .mem-stat {
    text-align: right;
  }

  .mem-stat .ms-label {
    font-family: var(--mono);
    font-size: 8px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    display: block;
  }

  .mem-stat .ms-value {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 600;
  }

  /* Annotations */
  .annotation {
    background: var(--surface2);
    border-left: 3px solid var(--yellow);
    padding: 10px 14px;
    border-radius: 0 6px 6px 0;
    margin-top: 16px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text);
    line-height: 1.6;
  }

  .annotation strong {
    color: var(--yellow);
  }

  .section-title {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 16px;
  }

  /* ---- Launch Syntax & dim3 ---- */
  .syntax-display {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 14px 18px;
    font-family: var(--mono);
    font-size: 12px;
    color: var(--text);
    line-height: 1.9;
    margin-bottom: 12px;
  }
  .syntax-display .kw { color: var(--cyan); }
  .syntax-display .cm { color: var(--muted); font-style: italic; }
  .syntax-display .fn { color: var(--orange); }
  .syntax-display .num { color: var(--green); }

  .example-tabs { display: flex; gap: 6px; margin-bottom: 12px; }
  .example-tab {
    padding: 6px 16px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--surface2);
    color: var(--muted);
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.15s;
  }
  .example-tab.active { color: var(--cyan); border-color: var(--cyan); background: #dbeafe; }
  .example-tab:hover { color: var(--text); }

  .grid-vis-wrap {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 12px;
  }
  .mini-grid-container { flex-shrink: 0; }
  .mini-grid-label {
    font-family: var(--mono);
    font-size: 9px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
    display: block;
  }
  .mini-grid { display: inline-grid; gap: 3px; }
  .mini-block {
    width: 54px; height: 42px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--surface2);
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 2px;
    cursor: pointer; transition: all 0.15s; font-family: var(--mono);
  }
  .mini-block:hover, .mini-block.selb { border-color: var(--cyan); background: #dbeafe; }
  .mini-block .mb-label { font-size: 7px; color: var(--muted); text-transform: uppercase; }
  .mini-block .mb-coords { font-size: 9px; color: var(--cyan); }

  .thread-detail-panel {
    flex: 1; min-width: 240px;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 10px; padding: 14px;
  }
  .thread-detail-panel h4 {
    font-family: var(--mono); font-size: 10px; color: var(--cyan);
    text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;
  }
  .thread-grid-vis { display: inline-grid; gap: 3px; margin-bottom: 10px; max-width: 100%; }
  .tcell {
    width: 30px; height: 26px;
    border: 1px solid var(--border); border-radius: 3px;
    background: var(--surface2);
    display: flex; align-items: center; justify-content: center;
    font-family: var(--mono); font-size: 7px; color: var(--muted);
    flex-direction: column; gap: 1px;
  }
  .tcell.warp-even { background: #bbf7d0; border-color: var(--green); color: var(--green); }
  .tcell.warp-odd  { background: #bae6fd; border-color: var(--cyan);  color: var(--cyan);  }

  .layer-strip { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 12px; }
  .layer-card {
    border: 1px solid var(--border); border-radius: 8px;
    padding: 10px 12px; background: var(--surface2);
  }
  .layer-card .lc-z {
    font-family: var(--mono); font-size: 9px; color: var(--pink);
    text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; display: block;
  }

  /* ---- Bank Conflicts ---- */
  .bank-section { margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border); }
  .bank-mode-row { display: flex; gap: 8px; margin-bottom: 14px; align-items: center; flex-wrap: wrap; }
  .bank-btn {
    padding: 7px 14px; border-radius: 6px;
    border: 1px solid var(--border); background: var(--surface2); color: var(--muted);
    font-family: var(--mono); font-size: 10px; text-transform: uppercase;
    letter-spacing: 0.08em; cursor: pointer; transition: all 0.15s;
  }
  .bank-btn.b-conflict { border-color: var(--pink); color: var(--pink); background: #fce8f0; }
  .bank-btn.b-ok { border-color: var(--green); color: var(--green); background: #d1fae5; }
  .bank-vis { overflow-x: auto; padding-bottom: 8px; }
  .bank-col-heads { display: flex; gap: 2px; margin-bottom: 3px; margin-left: 52px; }
  .bank-ch {
    width: 24px; text-align: center;
    font-family: var(--mono); font-size: 7px; color: var(--muted); flex-shrink: 0;
  }
  .bank-row-wrap { display: flex; gap: 2px; margin-bottom: 2px; align-items: center; }
  .bank-row-lbl {
    width: 48px; font-family: var(--mono); font-size: 8px; color: var(--muted);
    text-align: right; padding-right: 4px; flex-shrink: 0;
  }
  .bcell {
    width: 24px; height: 24px; border-radius: 3px;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--mono); font-size: 7px; font-weight: 600;
    flex-shrink: 0; border: 1px solid;
    transition: background 0.25s, border-color 0.25s;
  }

  /* ---- SM Sub-Partition View ---- */
  .sm-shared-bar { display: flex; gap: 6px; margin-bottom: 12px; flex-wrap: wrap; }
  .sm-shared-chip {
    background: var(--surface); border: 1px solid var(--orange); border-radius: 6px;
    padding: 6px 10px; font-family: var(--mono); font-size: 9px; color: var(--orange);
    flex: 1; min-width: 120px; text-align: center;
  }
  .sm-subparts {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 10px;
  }
  .subpart {
    border: 1px solid var(--border); border-radius: 8px; padding: 8px;
    background: var(--surface); cursor: pointer; transition: all 0.15s;
  }
  .subpart:hover { border-color: var(--cyan); }
  .subpart.sp-active { border: 2px solid var(--cyan); background: #f0f7ff; }
  .sp-header {
    font-family: var(--mono); font-size: 8px; color: var(--cyan);
    text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; font-weight: 600;
  }
  .sp-core-grid {
    display: grid; grid-template-columns: repeat(8, 1fr); gap: 2px; margin-bottom: 5px;
  }
  .core-dot { width: 9px; height: 9px; border-radius: 2px; background: #bbf7d0; border: 1px solid var(--green); }
  .sp-badges { display: flex; flex-direction: column; gap: 2px; margin-bottom: 6px; }
  .sp-badge { font-family: var(--mono); font-size: 8px; color: var(--muted); display: flex; align-items: center; gap: 3px; }
  .sp-badge-dot { width: 7px; height: 7px; border-radius: 2px; flex-shrink: 0; }
  .sp-warp-slots { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
  .sp-warp-slot {
    border: 1px solid var(--border); border-radius: 2px; padding: 1px 0;
    text-align: center; font-family: var(--mono); font-size: 6px;
    color: var(--muted); background: var(--surface2);
  }
  .sp-detail-box {
    border: 2px solid var(--cyan); border-radius: 8px; padding: 12px;
    background: #f0f7ff; margin-top: 4px;
  }
  .sp-detail-box h5 {
    font-family: var(--mono); font-size: 10px; color: var(--cyan);
    text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;
  }
  .sp-thread-map { display: grid; grid-template-columns: repeat(32, 1fr); gap: 1px; margin-bottom: 4px; }
  .sp-thread-lane {
    height: 18px; background: #bbf7d0; border: 1px solid var(--green); border-radius: 2px;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--mono); font-size: 5px; color: var(--green);
  }
  .sp-core-row { display: grid; grid-template-columns: repeat(32, 1fr); gap: 1px; margin-bottom: 8px; }
  .sp-core-cell { height: 14px; background: #d1fae5; border: 1px solid var(--green); border-radius: 2px; }

  @media (max-width: 900px) {
    .lane-panel,
    .warp-diagram,
    .sm-subparts {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,Rf=[{name:"Registers",scope:"Per Thread",latency:"~1 cycle",size:"255 regs/thread",color:"#009959",barWidth:"100%",managed:"Compiler"},{name:"Shared Memory",scope:"Per Block (SM)",latency:"~1–5 cycles",size:"48–100 KB/SM",color:"#0077aa",barWidth:"85%",managed:"Programmer"},{name:"L1 Cache",scope:"Per SM",latency:"~20 cycles",size:"Shared w/ SMEM",color:"#9c7400",barWidth:"65%",managed:"Hardware"},{name:"L2 Cache",scope:"Device-wide",latency:"~100 cycles",size:"~40 MB (A100)",color:"#c95c10",barWidth:"40%",managed:"Hardware"},{name:"Global Memory (DRAM)",scope:"Device-wide",latency:"~200+ cycles",size:"Tens of GB",color:"#c4245e",barWidth:"10%",managed:"Programmer"}],Df=[{id:0,state:"executing",label:"W0"},{id:1,state:"ready",label:"W1"},{id:2,state:"stalled",label:"W2"},{id:3,state:"ready",label:"W3"},{id:4,state:"stalled",label:"W4"},{id:5,state:"ready",label:"W5"},{id:6,state:"executing",label:"W6"},{id:7,state:"stalled",label:"W7"},{id:8,state:"ready",label:"W8"},{id:9,state:"stalled",label:"W9"},{id:10,state:"ready",label:"W10"},{id:11,state:"stalled",label:"W11"},{id:12,state:"ready",label:"W12"},{id:13,state:"executing",label:"W13"},{id:14,state:"stalled",label:"W14"},{id:15,state:"ready",label:"W15"}],Va=[{label:"Full Warp",title:"All 32 lanes do useful work",detail:"Classic SIMT map: each lane handles one contiguous element, maximizing memory coalescing and throughput.",stats:[{label:"Active lanes",value:"32 / 32"},{label:"Issue efficiency",value:"~100%"},{label:"Typical pattern",value:"map / stencil"}],laneClass:()=>"active"},{label:"Reduction",title:"Warp reduction, lane 0 commits result",detail:"Every lane contributes a partial value via shuffle operations; lane 0 performs the single global write or atomic.",stats:[{label:"Contributing lanes",value:"32 / 32"},{label:"Global writes",value:"1 per warp"},{label:"Benefit",value:"fewer atomics"}],laneClass:e=>e===0?"helper":"active"},{label:"Divergence",title:"Branch divergence serializes execution",detail:"Half the lanes take one path and half take another. The warp runs both paths serially with masking.",stats:[{label:"Path A lanes",value:"16"},{label:"Path B lanes",value:"16"},{label:"Effective throughput",value:"~50%"}],laneClass:e=>e<16?"path-a":"path-b"},{label:"Broadcast/Vote",title:"One lane serves the warp",detail:"Lane 0 can load once and broadcast via shuffle, or aggregate a warp vote result before one control decision.",stats:[{label:"Loader lane",value:"lane 0"},{label:"Consumers",value:"31 peers"},{label:"Redundant loads",value:"reduced"}],laneClass:e=>e===0?"helper":"active"}];function If(){const[e,t]=de.useState(0),[n,r]=de.useState(null),[l,o]=de.useState(0),[i,s]=de.useState(0),[u,f]=de.useState(null),[g,v]=de.useState(0),[m,S]=de.useState(null),[k,j]=de.useState(0),[I,d]=de.useState(null),c=de.useRef(null),p=["GPU Overview","Execution Hierarchy","Warps and Lanes","Memory Hierarchy"];Array.from({length:128},(h,y)=>({id:y,warp:Math.floor(y/32)}));const x=Array.from({length:32},(h,y)=>y),N=Va[i],_=[...Df,...Array.from({length:16},(h,y)=>({id:y+16,state:"idle",label:`W${y+16}`}))],E=_.find(h=>h.id===u)||null;return de.useEffect(()=>{var h;e!==0||n===null||(h=c.current)==null||h.scrollIntoView({behavior:"smooth",block:"start"})},[n,e]),a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Mf}),a.jsxs("div",{className:"app",children:[a.jsxs("div",{className:"header",children:[a.jsx("h1",{children:"CUDA Architecture Reference (NVIDIA A100)"}),a.jsx("h2",{children:"GPU Execution Model — Visual Diagrams"})]}),a.jsx("div",{className:"tabs",children:p.map((h,y)=>a.jsx("button",{className:`tab ${e===y?"active":""}`,onClick:()=>t(y),children:h},y))}),e===0&&a.jsx("div",{className:"diagram",children:a.jsxs("div",{className:"gpu-schematic",children:[a.jsx("h3",{children:"NVIDIA GPU — Schematic Architecture (Ampere A100 scale)"}),a.jsx("div",{className:"interface-bar",children:"↕ PCIe / NVLink Interface to CPU Host"}),a.jsxs("div",{className:"gpu-body",children:[a.jsx("span",{className:"gpu-label",children:"GPU DEVICE"}),a.jsxs("div",{className:"gpu-row",children:[a.jsxs("div",{className:"memory-block",children:[a.jsx("span",{className:"label",children:"Global Mem"}),a.jsx("span",{className:"value",children:"80 GB HBM2e"})]}),a.jsxs("div",{style:{flex:1},children:[a.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:10,color:"var(--muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:"0.08em"},children:"Streaming Multiprocessors — click any SM to inspect"}),a.jsx("div",{className:"sm-grid",children:Array.from({length:108},(h,y)=>a.jsxs("div",{className:`sm-chip ${n===y?"active":""}`,onClick:()=>{r(n===y?null:y),d(null)},children:[a.jsx("span",{className:"sm-label",children:"SM"}),a.jsx("span",{className:"sm-num",children:y})]},y))})]})]}),a.jsxs("div",{ref:c,className:`sm-detail ${n!==null?"visible":""}`,children:[a.jsxs("h4",{children:["SM ",n," — Ampere Sub-Partition Architecture"]}),a.jsxs("div",{className:"sm-shared-bar",children:[a.jsxs("div",{className:"sm-shared-chip",children:[a.jsx("div",{style:{color:"var(--muted)",fontSize:8,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2},children:"On-chip (SMEM + L1)"}),"192 KB total — up to 164 KB as shared mem"]}),a.jsxs("div",{className:"sm-shared-chip",children:[a.jsx("div",{style:{color:"var(--muted)",fontSize:8,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2},children:"Register File"}),"256 KB = 65,536 × 32-bit regs"]}),a.jsxs("div",{className:"sm-shared-chip",children:[a.jsx("div",{style:{color:"var(--muted)",fontSize:8,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2},children:"Capacity limits"}),"64 warps · 2048 threads · 32 blocks"]})]}),a.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:9,color:"var(--muted)",marginBottom:8,textTransform:"uppercase",letterSpacing:"0.08em"},children:"4 sub-partitions — click one to see warp→core mapping"}),a.jsx("div",{className:"sm-subparts",children:[0,1,2,3].map(h=>a.jsxs("div",{className:`subpart ${I===h?"sp-active":""}`,onClick:()=>d(I===h?null:h),children:[a.jsxs("div",{className:"sp-header",children:["Sub-Part ",h," · Sched ",h]}),a.jsx("div",{className:"sp-core-grid",children:Array.from({length:32},(y,P)=>a.jsx("div",{className:"core-dot"},P))}),a.jsxs("div",{className:"sp-badges",children:[a.jsxs("div",{className:"sp-badge",children:[a.jsx("div",{className:"sp-badge-dot",style:{background:"#bae6fd",border:"1px solid #0077aa"}}),"16 FP64 units"]}),a.jsxs("div",{className:"sp-badge",children:[a.jsx("div",{className:"sp-badge-dot",style:{background:"#fbcfe8",border:"1px solid #c4245e"}}),"1 Tensor Core (3rd gen)"]})]}),a.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:7,color:"var(--muted)",marginBottom:3},children:"16 resident warp slots:"}),a.jsx("div",{className:"sp-warp-slots",children:Array.from({length:16},(y,P)=>a.jsxs("div",{className:"sp-warp-slot",children:["W",h*16+P]},P))})]},h))}),I!==null&&a.jsxs("div",{className:"sp-detail-box",children:[a.jsxs("h5",{children:["Sub-Partition ",I," — how one warp executes"]}),a.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:9,color:"var(--muted)",marginBottom:6},children:"32 threads of one warp dispatch to 32 CUDA cores simultaneously (SIMT):"}),a.jsx("div",{className:"sp-thread-map",children:Array.from({length:32},(h,y)=>a.jsx("div",{className:"sp-thread-lane",title:`Thread ${y}`,children:y},y))}),a.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:8,color:"var(--muted)",marginBottom:4,textAlign:"center"},children:"↓ 1-to-1: each thread lane → one CUDA core"}),a.jsx("div",{className:"sp-core-row",children:Array.from({length:32},(h,y)=>a.jsx("div",{className:"sp-core-cell",title:`Core ${y}`},y))}),a.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:10,color:"var(--text)",lineHeight:1.6},children:[a.jsxs("strong",{style:{color:"var(--cyan)"},children:["Scheduler ",I]})," selects one ready warp per clock and issues its instruction to all 32 cores at once. If the chosen warp stalls (e.g. on a memory load), the scheduler instantly switches to another of its 16 resident warps — zero idle cycles provided there are enough warps to cover latency. The 3 other sub-partitions do the same independently and in parallel."]})]})]})]}),a.jsxs("div",{className:"annotation",children:[a.jsx("strong",{children:"Key insight:"})," 108 SMs × 2048 threads/SM = ",a.jsx("strong",{style:{color:"var(--cyan)"},children:"221,184 concurrent threads"})," on an A100. Each SM has 4 independent sub-partitions, each with its own warp scheduler, 32 CUDA cores, and 16 warp slots. The GPU hides memory latency by rotating between resident warps rather than making individual threads fast. ",a.jsx("strong",{style:{color:"var(--orange)"},children:"→ See the Execution Hierarchy tab"})," for how grids and blocks decompose into warps that land on these SMs."]})]})}),e===1&&a.jsx("div",{className:"diagram",children:a.jsxs("div",{className:"gpu-schematic",children:[a.jsx("h3",{children:"CUDA Execution Hierarchy — Grid → Block → Thread → Warp"}),a.jsxs("div",{className:"grid-box",style:{marginBottom:16},children:[a.jsx("span",{className:"box-label",children:"GRID (kernel launch)"}),a.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:9,color:"var(--muted)",marginBottom:12,textTransform:"uppercase",letterSpacing:"0.08em"},children:"gridDim.x up to 2³¹−1  |  gridDim.y, .z up to 2¹⁶−1"}),a.jsxs("div",{className:"blocks-row",children:[Array.from({length:6},(h,y)=>a.jsxs("div",{className:`block-box ${l===y?"sel":""}`,onClick:()=>o(y),children:[a.jsxs("span",{className:"bb-label",children:["Block (",y,", 0, 0)"]}),a.jsx("div",{className:"threads-mini",children:Array.from({length:128},(P,D)=>a.jsx("div",{className:`thread-dot ${l===y?`warp-${Math.floor(D/32)}`:""}`},D))}),l===y&&a.jsx("div",{className:"warp-legend",children:["W0 (0–31)","W1 (32–63)","W2 (64–95)","W3 (96–127)"].map((P,D)=>a.jsxs("div",{className:"warp-pill",children:[a.jsx("div",{className:`warp-dot warp-${D}`,style:{background:["#bbf7d0","#bae6fd","#fed7aa","#fbcfe8"][D],border:`1px solid ${["var(--green)","var(--cyan)","var(--orange)","var(--pink)"][D]}`}}),P]},D))})]},y)),a.jsx("div",{className:"block-box",style:{border:"1px dashed var(--border)",opacity:.4},children:a.jsx("span",{className:"bb-label",style:{color:"var(--muted)"},children:"…more blocks"})})]})]}),a.jsxs("div",{className:"annotation",children:[a.jsxs("strong",{children:["Selected block ",l,":"]})," 128 threads → 4 warps of 32. All threads in this block are scheduled on the ",a.jsx("strong",{style:{color:"var(--green)"},children:"same SM"}),", distributed across its 4 sub-partitions (up to 16 warps each). They share that SM's shared memory and can call ",a.jsx("code",{style:{color:"var(--cyan)"},children:"__syncthreads()"}),". Blocks in ",a.jsx("em",{children:"different"})," grid positions run independently with no guaranteed execution order. ",a.jsx("strong",{style:{color:"var(--orange)"},children:"→ See the GPU Overview tab"})," to explore the SM sub-partition and warp scheduler structure."]}),a.jsx("div",{className:"stat-row",children:[{label:"blockDim.x,y ≤",value:"1024"},{label:"blockDim.z ≤",value:"64"},{label:"threads/block ≤",value:"1024"},{label:"warp size",value:"32"}].map((h,y)=>a.jsxs("div",{className:"stat-chip",children:[a.jsx("span",{className:"s-label",children:h.label}),a.jsx("span",{className:"s-value",children:h.value})]},y))}),a.jsxs("div",{style:{marginTop:28,borderTop:"1px solid var(--border)",paddingTop:20},children:[a.jsx("div",{className:"section-title",children:"Kernel Launch Syntax — <<< grid, block >>>"}),a.jsxs("div",{className:"syntax-display",children:[a.jsx("span",{className:"kw",children:"dim3"})," grid(",a.jsx("span",{className:"num",children:"Gx"}),", ",a.jsx("span",{className:"num",children:"Gy"}),", ",a.jsx("span",{className:"num",children:"Gz"}),");  ",a.jsx("span",{className:"cm",children:"// number of blocks per dimension"}),a.jsx("br",{}),a.jsx("span",{className:"kw",children:"dim3"})," block(",a.jsx("span",{className:"num",children:"Bx"}),", ",a.jsx("span",{className:"num",children:"By"}),", ",a.jsx("span",{className:"num",children:"Bz"}),");  ",a.jsx("span",{className:"cm",children:"// threads per block per dimension"}),a.jsx("br",{}),a.jsx("span",{className:"fn",children:"myKernel"}),"<<<grid, block>>>(args);  ",a.jsx("span",{className:"cm",children:"// launch kernel on GPU"})]}),a.jsx("div",{className:"example-tabs",children:["1D — array","2D — image","3D — volume"].map((h,y)=>a.jsx("button",{className:`example-tab ${g===y?"active":""}`,onClick:()=>{v(y),S(null)},children:h},y))}),g===0&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"syntax-display",children:[a.jsx("span",{className:"cm",children:"// Process 128 elements: 4 blocks × 32 threads each"}),a.jsx("br",{}),a.jsx("span",{className:"kw",children:"dim3"})," grid(",a.jsx("span",{className:"num",children:"4"}),");           ",a.jsx("span",{className:"cm",children:"// gridDim.x = 4"}),a.jsx("br",{}),a.jsx("span",{className:"kw",children:"dim3"})," block(",a.jsx("span",{className:"num",children:"32"}),");          ",a.jsx("span",{className:"cm",children:"// blockDim.x = 32"}),a.jsx("br",{}),a.jsx("span",{className:"cm",children:"// int i = blockIdx.x * 32 + threadIdx.x;"})]}),a.jsxs("div",{className:"grid-vis-wrap",children:[a.jsxs("div",{className:"mini-grid-container",children:[a.jsx("span",{className:"mini-grid-label",children:"Grid — 4 blocks along x"}),a.jsx("div",{className:"mini-grid",style:{gridTemplateColumns:"repeat(4, 1fr)"},children:Array.from({length:4},(h,y)=>a.jsxs("div",{className:`mini-block ${m===y?"selb":""}`,onClick:()=>S(m===y?null:y),children:[a.jsx("span",{className:"mb-label",children:"block"}),a.jsxs("span",{className:"mb-coords",children:["(",y,")"]})]},y))}),a.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:9,color:"var(--muted)",marginTop:6},children:"Click a block to inspect its threads"})]}),m!==null&&a.jsxs("div",{className:"thread-detail-panel",children:[a.jsxs("h4",{children:["Block ",m," — 32 threads (1 warp)"]}),a.jsx("div",{className:"thread-grid-vis",style:{gridTemplateColumns:"repeat(8, 1fr)"},children:Array.from({length:32},(h,y)=>a.jsxs("div",{className:"tcell warp-even",children:[a.jsxs("div",{children:["T",y]}),a.jsx("div",{style:{fontSize:5,opacity:.8},children:m*32+y})]},y))}),a.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:10,color:"var(--muted)",lineHeight:1.7},children:[a.jsx("span",{style:{color:"var(--green)"},children:"threadIdx.x"}),": 0 → 31",a.jsx("br",{}),a.jsx("span",{style:{color:"var(--cyan)"},children:"blockIdx.x"}),": ",m,a.jsx("br",{}),"Global id = ",m," × 32 + [0…31] = ",a.jsxs("strong",{style:{color:"var(--text)"},children:[m*32,"…",m*32+31]})]})]})]})]}),g===1&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"syntax-display",children:[a.jsx("span",{className:"cm",children:"// Process a 1024×1024 image: 64×64 grid of 16×16-thread blocks"}),a.jsx("br",{}),a.jsx("span",{className:"kw",children:"dim3"})," grid(",a.jsx("span",{className:"num",children:"64"}),", ",a.jsx("span",{className:"num",children:"64"}),");    ",a.jsx("span",{className:"cm",children:"// 4096 blocks total"}),a.jsx("br",{}),a.jsx("span",{className:"kw",children:"dim3"})," block(",a.jsx("span",{className:"num",children:"16"}),", ",a.jsx("span",{className:"num",children:"16"}),");    ",a.jsx("span",{className:"cm",children:"// 256 threads/block, 8 warps"}),a.jsx("br",{}),a.jsx("span",{className:"cm",children:"// col = blockIdx.x*16 + threadIdx.x;  row = blockIdx.y*16 + threadIdx.y;"})]}),a.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:9,color:"var(--muted)",marginBottom:8},children:"Showing a 4×4 corner of the full 64×64 grid — click a block"}),a.jsxs("div",{className:"grid-vis-wrap",children:[a.jsxs("div",{className:"mini-grid-container",children:[a.jsx("span",{className:"mini-grid-label",children:"Grid corner (4 × 4 of 64 × 64 blocks)"}),a.jsx("div",{className:"mini-grid",style:{gridTemplateColumns:"repeat(4, 1fr)"},children:Array.from({length:16},(h,y)=>{const P=y%4,D=Math.floor(y/4);return a.jsxs("div",{className:`mini-block ${m===y?"selb":""}`,onClick:()=>S(m===y?null:y),children:[a.jsx("span",{className:"mb-label",children:"block"}),a.jsxs("span",{className:"mb-coords",children:["(",P,",",D,")"]})]},y)})})]}),m!==null&&(()=>{const h=m%4,y=Math.floor(m/4);return a.jsxs("div",{className:"thread-detail-panel",children:[a.jsxs("h4",{children:["Block (",h,",",y,") — 16×16 = 256 threads, 8 warps"]}),a.jsx("div",{className:"thread-grid-vis",style:{gridTemplateColumns:"repeat(16, 1fr)"},children:Array.from({length:256},(P,D)=>{const ge=D%16,ce=Math.floor(D/16),It=Math.floor(D/32);return a.jsx("div",{className:`tcell ${It%2===0?"warp-even":"warp-odd"}`,title:`threadIdx=(${ge},${ce})`,children:a.jsxs("div",{style:{fontSize:5},children:[ge,",",ce]})},D)})}),a.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:10,color:"var(--muted)",lineHeight:1.7},children:["col = ",h,"×16 + threadIdx.x = ",a.jsxs("strong",{style:{color:"var(--text)"},children:[h*16,"…",h*16+15]}),a.jsx("br",{}),"row = ",y,"×16 + threadIdx.y = ",a.jsxs("strong",{style:{color:"var(--text)"},children:[y*16,"…",y*16+15]}),a.jsx("br",{}),a.jsx("span",{style:{color:"var(--green)"},children:"■"})," even warps  ",a.jsx("span",{style:{color:"var(--cyan)"},children:"■"})," odd warps (threads 0–31 laid out left→right, then next row)"]})]})})()]})]}),g===2&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"syntax-display",children:[a.jsx("span",{className:"cm",children:"// Process a 32×32×8 volume: 2×2×2 grid of 16×16×4-thread blocks"}),a.jsx("br",{}),a.jsx("span",{className:"kw",children:"dim3"})," grid(",a.jsx("span",{className:"num",children:"2"}),", ",a.jsx("span",{className:"num",children:"2"}),", ",a.jsx("span",{className:"num",children:"2"}),");        ",a.jsx("span",{className:"cm",children:"// 8 blocks total"}),a.jsx("br",{}),a.jsx("span",{className:"kw",children:"dim3"})," block(",a.jsx("span",{className:"num",children:"16"}),", ",a.jsx("span",{className:"num",children:"16"}),", ",a.jsx("span",{className:"num",children:"4"}),");      ",a.jsx("span",{className:"cm",children:"// 1024 threads/block"}),a.jsx("br",{}),a.jsx("span",{className:"cm",children:"// z = blockIdx.z*4 + threadIdx.z;  y = ...  x = ...;"})]}),a.jsxs("div",{className:"layer-strip",children:[Array.from({length:2},(h,y)=>a.jsxs("div",{className:"layer-card",children:[a.jsxs("span",{className:"lc-z",children:["z-layer ",y]}),a.jsx("div",{style:{display:"inline-grid",gridTemplateColumns:"repeat(2, 1fr)",gap:4},children:Array.from({length:4},(P,D)=>{const ge=D%2,ce=Math.floor(D/2);return a.jsxs("div",{style:{width:46,height:36,border:`1px solid ${y===0?"#0077aa":"#7c3aed"}`,borderRadius:5,background:y===0?"#bae6fd":"#e9d5ff",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:2,fontFamily:"var(--mono)"},children:[a.jsx("span",{style:{fontSize:7,color:"var(--muted)"},children:"block"}),a.jsxs("span",{style:{fontSize:9,color:y===0?"#0077aa":"#7c3aed"},children:["(",ge,",",ce,",",y,")"]})]},D)})})]},y)),a.jsx("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",gap:6,paddingLeft:8},children:a.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:10,color:"var(--muted)",lineHeight:1.8},children:["8 blocks total (2×2×2)",a.jsx("br",{}),"Each block: 16×16×",a.jsx("span",{style:{color:"var(--pink)"},children:"4"})," = 1024 threads",a.jsx("br",{}),"threadIdx has .x, .y, ",a.jsx("span",{style:{color:"var(--pink)"},children:".z"}),a.jsx("br",{}),"blockIdx has .x, .y, ",a.jsx("span",{style:{color:"var(--pink)"},children:".z"})]})})]}),a.jsxs("div",{className:"annotation",children:[a.jsx("strong",{children:"3D grids map naturally to volume data:"})," simulations, medical imaging (CT/MRI), fluid dynamics. Each spatial axis maps to one CUDA dimension. The global index formula extends to three axes: ",a.jsx("code",{style:{color:"var(--cyan)"},children:"gx = blockIdx.x * blockDim.x + threadIdx.x"}),", and independently for y and z. Warp layout is still along the x-axis first — threads with consecutive threadIdx.x are in the same warp."]})]})]})]})}),e===2&&a.jsx("div",{className:"diagram",children:a.jsxs("div",{className:"gpu-schematic",children:[a.jsx("h3",{children:"Warps and Lanes on a Single SM — Scheduling, Divergence, Cooperation"}),a.jsxs("div",{className:"warp-diagram",children:[a.jsxs("div",{className:"sm-box",children:[a.jsx("span",{className:"box-label",children:"SM — Warp Pool (up to 64 warps)"}),a.jsx("div",{className:"scheduler-row",children:["Sched 0","Sched 1","Sched 2","Sched 3"].map((h,y)=>a.jsx("div",{className:"scheduler",children:h},y))}),a.jsx("div",{className:"warp-pool",children:_.map(h=>a.jsxs("div",{className:`warp-card ${h.state} ${u===h.id?"selected":""}`,onClick:()=>f(h.id),children:[h.label,a.jsx("div",{style:{fontSize:8,marginTop:2},children:h.state})]},h.id))}),a.jsxs("div",{className:"warp-dropdown",children:[a.jsx("div",{className:"warp-dropdown-title",children:E?`${E.label} selected`:"Select a warp"}),a.jsx("div",{className:"warp-dropdown-line",children:E?a.jsxs(a.Fragment,{children:["State: ",a.jsx("strong",{style:{color:"var(--cyan)"},children:E.state}),". Click another warp in the pool to inspect it and sync the lane view below."]}):a.jsx(a.Fragment,{children:"Click any warp in the pool to unhide its lane-level visualization below."})})]})]}),a.jsxs("div",{className:"warp-legend-box",children:[a.jsx("h4",{children:"Warp States"}),a.jsxs("div",{className:"legend-item",children:[a.jsx("div",{className:"legend-badge executing",children:"Executing"}),a.jsx("div",{className:"legend-desc",children:"Actively issuing instructions this clock cycle. 4 warps max simultaneously (one per scheduler)."})]}),a.jsxs("div",{className:"legend-item",children:[a.jsx("div",{className:"legend-badge ready",children:"Ready"}),a.jsx("div",{className:"legend-desc",children:"All operands available. Eligible to be picked by a warp scheduler next cycle."})]}),a.jsxs("div",{className:"legend-item",children:[a.jsx("div",{className:"legend-badge stalled",children:"Stalled"}),a.jsx("div",{className:"legend-desc",children:"Waiting on global memory (~200 cycles), a dependency, or a sync barrier. Cannot execute."})]}),a.jsxs("div",{className:"annotation",style:{marginTop:8},children:[a.jsx("strong",{children:"Latency hiding (why occupancy matters!):"})," When W0 stalls on a memory fetch, the scheduler ",a.jsx("em",{children:"immediately"})," switches to W1. No cycles are wasted, provided the warp pool is large enough."]}),a.jsxs("div",{className:"annotation",style:{marginTop:8,borderLeftColor:"var(--pink)"},children:[a.jsx("strong",{children:"Warp divergence:"})," If threads within one warp take different branches of an ",a.jsx("code",{style:{color:"var(--cyan)"},children:"if"}),", both paths execute serially with masking. Throughput halves for two-way divergence. Divergence ",a.jsx("em",{children:"between"})," warps is free."]})]})]}),E&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"lane-panel",style:{marginTop:16},children:[a.jsxs("div",{className:"lane-box",children:[a.jsxs("span",{className:"box-label",children:[E.label," (LANES 0–31)"]}),a.jsx("div",{className:"lane-grid",children:x.map(h=>a.jsxs("div",{className:`lane-cell ${N.laneClass(h)}`,children:["L",h]},h))}),a.jsx("div",{className:"lane-controls",children:Va.map((h,y)=>a.jsx("button",{className:`lane-btn ${i===y?"active":""}`,onClick:()=>s(y),children:h.label},h.label))})]}),a.jsxs("div",{className:"lane-info",children:[a.jsx("h4",{children:N.title}),a.jsx("div",{className:"lane-note",children:N.detail}),a.jsxs("div",{className:"lane-note",children:["Active warp context: ",a.jsx("strong",{style:{color:"var(--cyan)"},children:E.label})," in state"," ",a.jsx("strong",{style:{color:"var(--cyan)"},children:E.state}),"."]}),a.jsx("div",{className:"stat-row",style:{marginTop:0},children:N.stats.map(h=>a.jsxs("div",{className:"stat-chip",style:{flex:1},children:[a.jsx("span",{className:"s-label",children:h.label}),a.jsx("span",{className:"s-value",style:{fontSize:12},children:h.value})]},h.label))})]})]}),a.jsxs("div",{className:"annotation",children:[a.jsx("strong",{children:"Practical rule:"})," Keep lanes active together whenever possible. Restrict work to lane 0 only when it removes expensive operations (atomics, global writes, or redundant loads)."]}),a.jsxs("div",{className:"annotation",style:{marginTop:8,borderLeftColor:"var(--pink)"},children:[a.jsx("strong",{children:"Lane-aware performance checks:"})," Watch branch efficiency and warp execution efficiency in Nsight Compute. If they drop, lanes are likely idle or diverged."]})]})]})}),e===3&&a.jsx("div",{className:"diagram",children:a.jsxs("div",{className:"gpu-schematic",children:[a.jsx("h3",{children:"GPU Memory Hierarchy — Speed vs Capacity"}),a.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:9,color:"var(--muted)",marginBottom:16,textTransform:"uppercase",letterSpacing:"0.08em"},children:"Bar width ∝ relative speed (inverse latency)"}),a.jsx("div",{className:"mem-hierarchy",children:Rf.map((h,y)=>a.jsxs("div",{className:"mem-level",style:{background:`${h.color}08`},children:[a.jsxs("div",{className:"mem-info",children:[a.jsx("span",{className:"mem-name",style:{color:h.color},children:h.name}),a.jsx("span",{className:"mem-scope",children:h.scope})]}),a.jsx("div",{className:"mem-bar-wrap",children:a.jsx("div",{className:"mem-bar",style:{width:h.barWidth,background:h.color}})}),a.jsxs("div",{className:"mem-stats",children:[a.jsxs("div",{className:"mem-stat",children:[a.jsx("span",{className:"ms-label",children:"Latency"}),a.jsx("span",{className:"ms-value",style:{color:h.color},children:h.latency})]}),a.jsxs("div",{className:"mem-stat",children:[a.jsx("span",{className:"ms-label",children:"Size"}),a.jsx("span",{className:"ms-value",style:{color:"var(--text)",fontSize:11},children:h.size})]}),a.jsxs("div",{className:"mem-stat",children:[a.jsx("span",{className:"ms-label",children:"Managed by"}),a.jsx("span",{className:"ms-value",style:{color:"var(--muted)",fontSize:10},children:h.managed})]})]})]},y))}),a.jsxs("div",{className:"annotation",style:{marginTop:16},children:[a.jsx("strong",{children:"Core optimisation pattern:"})," Load a tile of data from ",a.jsx("span",{style:{color:"#c4245e"},children:"global memory"})," into ",a.jsx("span",{style:{color:"#0077aa"},children:"shared memory"})," once. Reuse it many times from shared memory. This is the tile/cache pattern: trade one slow fetch for many fast reads. This is the basis of optimised matrix multiply, convolutions, etc."]}),a.jsxs("div",{className:"annotation",style:{marginTop:8,borderLeftColor:"var(--pink)"},children:[a.jsx("strong",{children:"Note:"})," ",a.jsx("code",{style:{color:"var(--cyan)"},children:"malloc()"})," on the host allocates in CPU RAM. ",a.jsx("code",{style:{color:"var(--cyan)"},children:"cudaMalloc()"})," allocates in GPU global memory. These are separate address spaces. Data must be explicitly transferred via ",a.jsx("code",{style:{color:"var(--cyan)"},children:"cudaMemcpy()"})," or through unified memory."]}),a.jsxs("div",{className:"bank-section",children:[a.jsx("div",{className:"section-title",children:"Shared Memory — Bank Conflicts"}),a.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:11,color:"var(--text)",lineHeight:1.7,marginBottom:14},children:["Shared memory is divided into ",a.jsx("strong",{style:{color:"var(--cyan)"},children:"32 banks"}),", each 4 bytes wide (one float). Within a single warp, accesses to ",a.jsx("strong",{style:{color:"var(--pink)"},children:"different banks happen in parallel"}),". Accesses to the ",a.jsx("strong",{style:{color:"var(--pink)"},children:"same bank are serialised"})," — a ",a.jsx("em",{children:"bank conflict"}),". The classic fix: pad the array's inner dimension by 1."]}),a.jsxs("div",{className:"bank-mode-row",children:[a.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:9,color:"var(--muted)",textTransform:"uppercase",letterSpacing:"0.08em"},children:"Array declared as:"}),a.jsx("button",{className:`bank-btn ${k===0?"b-conflict":""}`,onClick:()=>j(0),children:"float A[32][32] — conflict"}),a.jsx("button",{className:`bank-btn ${k===1?"b-ok":""}`,onClick:()=>j(1),children:"float A[32][33] — no conflict"})]}),a.jsxs("div",{className:"bank-vis",children:[a.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:9,color:"var(--muted)",marginBottom:6},children:["Cell = bank index. Formula: bank(row, col) = (row × ",k===0?32:33," + col) % 32. Colour = bank identity (8 colours for banks 0–7 of 32)."]}),a.jsxs("div",{className:"bank-col-heads",children:[Array.from({length:8},(h,y)=>a.jsxs("div",{className:"bank-ch",children:["col ",y]},y)),k===0&&a.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:7,color:"var(--pink)",marginLeft:8,alignSelf:"center"},children:"← one colour per column = one bank per column = conflict!"}),k===1&&a.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:7,color:"var(--green)",marginLeft:8,alignSelf:"center"},children:"← diagonal pattern = every thread hits a different bank"})]}),Array.from({length:8},(h,y)=>{const P=k===0?32:33;return a.jsxs("div",{className:"bank-row-wrap",children:[a.jsxs("div",{className:"bank-row-lbl",children:["T",y," / r",y]}),Array.from({length:8},(D,ge)=>{const ce=(y*P+ge)%32,It=ce%8,yt=[{bg:"#bbf7d0",bd:"#009959",tx:"#009959"},{bg:"#bae6fd",bd:"#0077aa",tx:"#0077aa"},{bg:"#fed7aa",bd:"#c95c10",tx:"#c95c10"},{bg:"#fbcfe8",bd:"#c4245e",tx:"#c4245e"},{bg:"#fef9c3",bd:"#9c7400",tx:"#9c7400"},{bg:"#e9d5ff",bd:"#7c3aed",tx:"#7c3aed"},{bg:"#ccfbf1",bd:"#0d9488",tx:"#0d9488"},{bg:"#fce7f3",bd:"#be185d",tx:"#be185d"}][It];return a.jsx("div",{className:"bcell",style:{background:yt.bg,borderColor:yt.bd,color:yt.tx},title:`bank ${ce}`,children:ce},ge)})]},y)}),a.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:10,marginTop:10,marginLeft:52,color:k===0?"var(--pink)":"var(--green)"},children:k===0?"↑ Width 32: every row in column j maps to bank j. All 8 (→ 32) threads hit the same bank — 32-way conflict, 32× slower.":"↑ Width 33: diagonal pattern (bank = (row+col) % 32). Each thread hits a different bank — zero conflicts, full bandwidth."})]}),a.jsxs("div",{className:"annotation",style:{marginTop:14},children:[a.jsx("strong",{children:"Why it works:"})," with width 33, the offset of element ",a.jsx("code",{style:{color:"var(--cyan)"},children:"A[row][col]"})," is ",a.jsx("code",{style:{color:"var(--cyan)"},children:"row×33 + col"}),". Since 33 ≡ 1 (mod 32), each successive row shifts the bank by 1 — producing 32 distinct banks for 32 threads. Cost: one wasted float per row, i.e. 128 bytes per 32-row block of shared memory."]}),a.jsxs("div",{className:"annotation",style:{marginTop:8,borderLeftColor:"var(--pink)"},children:[a.jsx("strong",{children:"Diagnose with Nsight Compute:"}),' "L1/TEX cache throughput" and "shared memory bank conflicts" counters. Conflicts appear most often in ',a.jsx("em",{children:"transpose kernels"}),", ",a.jsx("em",{children:"tiled matrix multiply"}),", and ",a.jsx("em",{children:"reduction/scan trees"})," that read columns of a row-major shared array."]})]})]})})]})]})}Ql.createRoot(document.getElementById("root")).render(a.jsx(xc.StrictMode,{children:a.jsx(If,{})}));
