System.register([], function (exports, module) {
    'use strict';
    return {
        execute: function () {

            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            var t,i,s,e;const o=globalThis.trustedTypes,l=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,n=`lit$${(Math.random()+"").slice(9)}$`,h="?"+n,r=`<${h}>`,u=document,c=(t="")=>u.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,a=t=>{var i;return v(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,$=/'/g,g=/"/g,y=/^(?:script|style|textarea)$/i,b=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),T=b(1),w=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),P=new WeakMap,V=(t,i,s)=>{var e,o;const l=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let n=l._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;l._$litPart$=n=new C(i.insertBefore(c(),t),t,void 0,s);}return n.I(t),n},E=u.createTreeWalker(u,129,null,!1),M=(t,i)=>{const s=t.length-1,e=[];let o,h=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let l,c,d=-1,v=0;for(;v<s.length&&(u.lastIndex=v,c=u.exec(s),null!==c);)v=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(o=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=o?o:f,d=-1):void 0===c[1]?d=-2:(d=u.lastIndex-c[2].length,l=c[1],u=void 0===c[3]?p:'"'===c[3]?g:$):u===g||u===$?u=p:u===_||u===m?u=f:(u=p,o=void 0);const a=u===p&&t[i+1].startsWith("/>")?" ":"";h+=u===f?s+r:d>=0?(e.push(l),s.slice(0,d)+"$lit$"+s.slice(d)+n+a):s+n+(-2===d?(e.push(void 0),i):a);}const c=h+(t[s]||"<?>")+(2===i?"</svg>":"");return [void 0!==l?l.createHTML(c):c,e]};class N{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let l=0,r=0;const u=t.length-1,d=this.parts,[v,a]=M(t,i);if(this.el=N.createElement(v,s),E.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(e=E.nextNode())&&d.length<u;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(n)){const s=a[r++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(n),i=/([.?@])?(.*)/.exec(s);d.push({type:1,index:l,name:i[2],strings:t,ctor:"."===i[1]?I:"?"===i[1]?L:"@"===i[1]?R:H});}else d.push({type:6,index:l});}for(const i of t)e.removeAttribute(i);}if(y.test(e.tagName)){const t=e.textContent.split(n),i=t.length-1;if(i>0){e.textContent=o?o.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],c()),E.nextNode(),d.push({type:2,index:++l});e.append(t[i],c());}}}else if(8===e.nodeType)if(e.data===h)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)d.push({type:7,index:l}),t+=n.length-1;}l++;}}static createElement(t,i){const s=u.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,l,n,h;if(i===w)return i;let r=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(l=null==r?void 0:r.O)||void 0===l||l.call(r,!1),void 0===u?r=void 0:(r=new u(t),r.T(t,s,e)),void 0!==e?(null!==(n=(h=s).Σi)&&void 0!==n?n:h.Σi=[])[e]=r:s.Σo=r),void 0!==r&&(i=S(t,r.S(t,i.values),r,e)),i}class k{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i;}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:u).importNode(s,!0);E.currentNode=o;let l=E.nextNode(),n=0,h=0,r=e[0];for(;void 0!==r;){if(n===r.index){let i;2===r.type?i=new C(l,l.nextSibling,this,t):1===r.type?i=new r.ctor(l,r.name,r.strings,this,t):6===r.type&&(i=new z(l,this,t)),this.l.push(i),r=e[++h];}n!==(null==r?void 0:r.index)&&(l=E.nextNode(),n++);}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++;}}class C{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e;}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t);}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this.H!==A&&this.R(),this.H=A):t!==this.H&&t!==w&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):a(t)?this.g(t):this.m(t);}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t));}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(u.createTextNode(t)),this.H=t;}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=N.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else {const t=new k(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t;}}C(t){let i=P.get(t.strings);return void 0===i&&P.set(t.strings,i=new N(t)),i}g(t){v(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new C(this.k(c()),this.k(c()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e);}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i;}}}class H{constructor(t,i,s,e,o){this.type=1,this.H=A,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(A),this.strings=s):this.H=A;}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let l=!1;if(void 0===o)t=S(this,t,i,0),l=!d(t)||t!==this.H&&t!==w,l&&(this.H=t);else {const e=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=S(this,e[s+n],i,n),h===w&&(h=this.H[n]),l||(l=!d(h)||h!==this.H[n]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[n+1]),this.H[n]=h;}l&&!e&&this.W(t);}W(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class I extends H{constructor(){super(...arguments),this.type=3;}W(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}W(t){t&&t!==A?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class R extends H{constructor(){super(...arguments),this.type=5;}I(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===w)return;const e=this.H,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,l=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),l&&this.element.addEventListener(this.name,this,t),this.H=t;}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s;}I(t){S(this,t);}}const Z={Z:"$lit$",U:n,Y:h,q:1,X:M,tt:k,it:a,st:S,et:C,ot:H,nt:L,rt:R,lt:I,ht:z};null===(i=(t=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(t,N,C),(null!==(s=(e=globalThis).litHtmlVersions)&&void 0!==s?s:e.litHtmlVersions=[]).push("2.0.0-rc.2");

            /**
             * @license
             * Copyright 2019 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            const t$1=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$1=Symbol();class n$1{constructor(t,n){if(n!==e$1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){return t$1&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const s$1=t=>new n$1(t+"",e$1),i$1=(e,n)=>{t$1?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style");n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return s$1(e)})(t):t;

            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */var s$2,e$2,h$1,r$1;const o$1={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$2=(t,i)=>i!==t&&(i==i||t==t),l$1={attribute:!0,type:String,converter:o$1,reflect:!1,hasChanged:n$2};class a$1 extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u();}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e));})),t}static createProperty(t,i=l$1){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const h=this[t];this[i]=e,this.requestUpdate(t,h,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$1}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static Πp(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1);}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0);}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t));}attributeChangedCallback(t,i,s){this.K(t,s);}Πj(t,i,s=l$1){var e,h;const r=this.constructor.Πp(t,s);if(void 0!==r&&!0===s.reflect){const n=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:o$1.toAttribute)(i,s.type);this.Πh=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this.Πh=null;}}K(t,i){var s,e,h;const r=this.constructor,n=r.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=r.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:o$1.fromAttribute;this.Πh=n,this[n]=a(i,t.type),this.Πh=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$2)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq());}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo;}catch(t){Promise.reject(t);}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$();}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s);}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}Π$(){this.L=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return !0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.shadowRootOptions={mode:"open"},null===(e$2=(s$2=globalThis).reactiveElementPlatformSupport)||void 0===e$2||e$2.call(s$2,{ReactiveElement:a$1}),(null!==(h$1=(r$1=globalThis).reactiveElementVersions)&&void 0!==h$1?h$1:r$1.reactiveElementVersions=[]).push("1.0.0-rc.1");

            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */var i$2,l$2,o$2,s$3,n$3,a$2;(null!==(i$2=(a$2=globalThis).litElementVersions)&&void 0!==i$2?i$2:a$2.litElementVersions=[]).push("3.0.0-rc.1");class h$2 extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0;}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const r=this.render();super.update(t),this.Φt=V(r,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1);}render(){return w}}h$2.finalized=!0,h$2._$litElement$=!0,null===(o$2=(l$2=globalThis).litElementHydrateSupport)||void 0===o$2||o$2.call(l$2,{LitElement:h$2}),null===(n$3=(s$3=globalThis).litElementPlatformSupport)||void 0===n$3||n$3.call(s$3,{LitElement:h$2});

            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            const t$2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i$3=t=>(...i)=>({_$litDirective$:t,values:i});class s$4{constructor(t){}T(t,i,s){this.Σdt=t,this.M=i,this.Σct=s;}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}

            /**
             * @license
             * Copyright 2020 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */const {et:t$3}=Z,d$1=o=>void 0===o.strings,e$3=()=>document.createComment(""),u$1=(o,i,n)=>{var v;const l=o.A.parentNode,r=void 0===i?o.B:i.A;if(void 0===n){const i=l.insertBefore(e$3(),r),v=l.insertBefore(e$3(),r);n=new t$3(i,v,o,o.options);}else {const t=n.B.nextSibling,i=n.M!==o;if(i&&(null===(v=n.Q)||void 0===v||v.call(n,o),n.M=o),t!==r||i){let o=n.A;for(;o!==t;){const t=o.nextSibling;l.insertBefore(o,r),o=t;}}}return n},c$1=(o,t,i=o)=>(o.I(t,i),o),s$5={},f$1=(o,t=s$5)=>o.H=t,a$3=o=>o.H,m$1=o=>{var t;null===(t=o.P)||void 0===t||t.call(o,!1,!0);let i=o.A;const n=o.B.nextSibling;for(;i!==n;){const o=i.nextSibling;i.remove(),i=o;}};

            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */const r$2=(i,t)=>{var s,e;const o=i.N;if(void 0===o)return !1;for(const i of o)null===(e=(s=i).O)||void 0===e||e.call(s,t,!1),r$2(i,t);return !0},o$3=i=>{let t,s;do{if(void 0===(t=i.M))break;s=t.N,s.delete(i),i=t;}while(0===(null==s?void 0:s.size))},h$3=i=>{for(let t;t=i.M;i=t){let s=t.N;if(void 0===s)t.N=s=new Set;else if(s.has(i))break;s.add(i),d$2(t);}};function n$4(i){void 0!==this.N?(o$3(this),this.M=i,h$3(this)):this.M=i;}function l$3(i,t=!1,s=0){const e=this.H,h=this.N;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(e))for(let i=s;i<e.length;i++)r$2(e[i],!1),o$3(e[i]);else null!=e&&(r$2(e,!1),o$3(e));else r$2(this,i);}const d$2=i=>{var t,e,r,o;i.type==t$2.CHILD&&(null!==(t=(r=i).P)&&void 0!==t||(r.P=l$3),null!==(e=(o=i).Q)&&void 0!==e||(o.Q=n$4));};class c$2 extends s$4{constructor(){super(...arguments),this.isConnected=!0,this.ut=w,this.N=void 0;}T(i,t,s){super.T(i,t,s),h$3(this);}O(i,t=!0){this.at(i),t&&(r$2(this,i),o$3(this));}at(t){var s,e;t!==this.isConnected&&(t?(this.isConnected=!0,this.ut!==w&&(this.setValue(this.ut),this.ut=w),null===(s=this.reconnected)||void 0===s||s.call(this)):(this.isConnected=!1,null===(e=this.disconnected)||void 0===e||e.call(this)));}S(i,t){if(!this.isConnected)throw Error(`AsyncDirective ${this.constructor.name} was rendered while its tree was disconnected.`);return super.S(i,t)}setValue(i){if(this.isConnected)if(d$1(this.Σdt))this.Σdt.I(i,this);else {const t=[...this.Σdt.H];t[this.Σct]=i,this.Σdt.I(t,this,0);}else this.ut=i;}disconnected(){}reconnected(){}}

            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            const u$2=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c$3=i$3(class extends s$4{constructor(e){if(super(e),e.type!==t$2.CHILD)throw Error("repeat() can only be used in text expressions")}Mt(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return {values:o,keys:l}}render(e,s,t){return this.Mt(e,s,t).values}update(s,[t,r,c]){var d;const p=a$3(s),{values:v,keys:a}=this.Mt(t,r,c);if(!p)return this.Pt=a,v;const h=null!==(d=this.Pt)&&void 0!==d?d:this.Pt=[],m=[];let x,y,j=0,k=p.length-1,w$1=0,b=v.length-1;for(;j<=k&&w$1<=b;)if(null===p[j])j++;else if(null===p[k])k--;else if(h[j]===a[w$1])m[w$1]=c$1(p[j],v[w$1]),j++,w$1++;else if(h[k]===a[b])m[b]=c$1(p[k],v[b]),k--,b--;else if(h[j]===a[b])m[b]=c$1(p[j],v[b]),u$1(s,m[b+1],p[j]),j++,b--;else if(h[k]===a[w$1])m[w$1]=c$1(p[k],v[w$1]),u$1(s,p[j],p[k]),k--,w$1++;else if(void 0===x&&(x=u$2(a,w$1,b),y=u$2(h,j,k)),x.has(h[j]))if(x.has(h[k])){const e=y.get(a[w$1]),t=void 0!==e?p[e]:null;if(null===t){const e=u$1(s,p[j]);c$1(e,v[w$1]),m[w$1]=e;}else m[w$1]=c$1(t,v[w$1]),u$1(s,p[j],t),p[e]=null;w$1++;}else m$1(p[k]),k--;else m$1(p[j]),j++;for(;w$1<=b;){const e=u$1(s,m[b+1]);c$1(e,v[w$1]),m[w$1++]=e;}for(;j<=k;){const e=p[j++];null!==e&&m$1(e);}return this.Pt=a,f$1(s,m),w}});

            let _RO, RO;
            async function ResizeObserver() {
                return RO || init();
            }
            async function init() {
                if (_RO) {
                    return (await _RO).default;
                }
                else {
                    _RO = window.ResizeObserver;
                    try {
                        new _RO(function () { });
                    }
                    catch (e) {
                        _RO = module.import('./ResizeObserver.es-cc5d8d3d.js');
                        _RO = (await _RO).default;
                    }
                    return (RO = _RO);
                }
            }

            const scrollerRef = Symbol('scrollerRef');
            let nativeShadowDOM = 'attachShadow' in Element.prototype && (!('ShadyDOM' in window) || !window['ShadyDOM'].inUse);
            const HOST_CLASSNAME = 'uni-virtualizer-host';
            let globalContainerStylesheet = null;
            function containerStyles(hostSel, childSel) {
                return `
    ${hostSel} {
      display: block;
      position: relative;
      contain: strict;
      height: 150px;
      overflow: auto;
    }
    ${childSel} {
      box-sizing: border-box;
    }`;
            }
            function attachGlobalContainerStylesheet() {
                if (!globalContainerStylesheet) {
                    globalContainerStylesheet = document.createElement('style');
                    globalContainerStylesheet.textContent = containerStyles(`.${HOST_CLASSNAME}`, `.${HOST_CLASSNAME} > *`);
                    document.head.appendChild(globalContainerStylesheet);
                }
            }
            /**
             * Provides virtual scrolling boilerplate.
             *
             * Extensions of this class must set container, layout, and scrollTarget.
             *
             * Extensions of this class must also override VirtualRepeater's DOM
             * manipulation methods.
             */
            class VirtualScroller {
                constructor(config) {
                    this._benchmarkStart = null;
                    /**
                     * Whether the layout should receive an updated viewport size on the next
                     * render.
                     */
                    // private _needsUpdateView: boolean = false;
                    this._layout = null;
                    /**
                     * The element that generates scroll events and defines the container
                     * viewport. Set by scrollTarget.
                     */
                    this._scrollTarget = null;
                    /**
                     * A sentinel element that sizes the container when it is a scrolling
                     * element. This ensures the scroll bar accurately reflects the total
                     * size of the list.
                     */
                    this._sizer = null;
                    /**
                     * Layout provides these values, we set them on _render().
                     * TODO @straversi: Can we find an XOR type, usable for the key here?
                     */
                    this._scrollSize = null;
                    /**
                     * Difference between scroll target's current and required scroll offsets.
                     * Provided by layout.
                     */
                    this._scrollErr = null;
                    /**
                     * A list of the positions (top, left) of the children in the current range.
                     */
                    this._childrenPos = null;
                    // TODO: (graynorton): type
                    this._childMeasurements = null;
                    this._toBeMeasured = new Map();
                    this._rangeChanged = true;
                    this._itemsChanged = true;
                    this._visibilityChanged = true;
                    /**
                     * Containing element. Set by container.
                     */
                    this._container = null;
                    /**
                     * The parent of all child nodes to be rendered. Set by container.
                     */
                    this._containerElement = null;
                    /**
                     * Keep track of original inline style of the container, so it can be
                     * restored when container is changed.
                     */
                    this._containerInlineStyle = null;
                    /**
                     * Keep track of original container stylesheet, so it can be restored
                     * when container is changed.
                     */
                    this._containerStylesheet = null;
                    /**
                     * Size of the container.
                     */
                    this._containerSize = null;
                    /**
                     * Resize observer attached to container.
                     */
                    this._containerRO = null;
                    /**
                     * Resize observer attached to children.
                     */
                    this._childrenRO = null;
                    this._mutationObserver = null;
                    this._mutationPromise = null;
                    this._mutationPromiseResolver = null;
                    this._mutationsObserved = false;
                    // TODO (graynorton): Rethink, per longer comment below
                    this._loadListener = this._childLoaded.bind(this);
                    /**
                     * Index and position of item to scroll to.
                     */
                    this._scrollToIndex = null;
                    /**
                     * Items to render. Set by items.
                     */
                    this._items = [];
                    /**
                     * Total number of items to render. Set by totalItems.
                     */
                    this._totalItems = null;
                    /**
                     * Index of the first child in the range, not necessarily the first visible child.
                     * TODO @straversi: Consider renaming these.
                     */
                    this._first = 0;
                    /**
                     * Index of the last child in the range.
                     */
                    this._last = 0;
                    this._scheduled = new WeakSet();
                    /**
                     * Invoked at the end of each render cycle: children in the range are
                     * measured, and their dimensions passed to this callback. Use it to layout
                     * children as needed.
                     */
                    this._measureCallback = null;
                    this._measureChildOverride = null;
                    this._first = -1;
                    this._last = -1;
                    if (config) {
                        Object.assign(this, config);
                    }
                }
                set items(items) {
                    if (items !== this._items) {
                        this._itemsChanged = true;
                        this._items = items;
                        this._schedule(this._updateLayout);
                    }
                }
                /**
                 * The total number of items, regardless of the range, that can be rendered
                 * as child nodes.
                 */
                get totalItems() {
                    return (this._totalItems === null ? this._items.length : this._totalItems);
                }
                set totalItems(num) {
                    if (typeof num !== 'number' && num !== null) {
                        throw new Error('New value must be a number.');
                    }
                    // TODO(valdrin) should we check if it is a finite number?
                    // Technically, Infinity would break Layout, not VirtualRepeater.
                    if (num !== this._totalItems) {
                        this._totalItems = num;
                        this._schedule(this._updateLayout);
                    }
                }
                /**
                 * The parent of all child nodes to be rendered.
                 */
                get container() {
                    return this._container;
                }
                set container(container) {
                    if (container === this._container) {
                        return;
                    }
                    if (this._container) {
                        // Remove children from old container.
                        // TODO (graynorton): Decide whether we'd rather fire an event to clear
                        // the range and let the renderer take care of removing the DOM children
                        this._children.forEach(child => child.parentNode.removeChild(child));
                    }
                    this._container = container;
                    this._schedule(this._updateLayout);
                    this._initResizeObservers().then(() => {
                        const oldEl = this._containerElement;
                        // Consider document fragments as shadowRoots.
                        const newEl = (container && container.nodeType === Node.DOCUMENT_FRAGMENT_NODE) ?
                            container.host :
                            container;
                        if (oldEl === newEl) {
                            return;
                        }
                        this._containerRO.disconnect();
                        this._containerSize = null;
                        if (oldEl) {
                            if (this._containerInlineStyle) {
                                oldEl.setAttribute('style', this._containerInlineStyle);
                            }
                            else {
                                oldEl.removeAttribute('style');
                            }
                            this._containerInlineStyle = null;
                            if (oldEl === this._scrollTarget) {
                                oldEl.removeEventListener('scroll', this, { passive: true });
                                this._sizer && this._sizer.remove();
                            }
                            oldEl.removeEventListener('load', this._loadListener, true);
                            this._mutationObserver.disconnect();
                        }
                        else {
                            // First time container was setup, add listeners only now.
                            addEventListener('scroll', this, { passive: true });
                        }
                        this._containerElement = newEl;
                        if (newEl) {
                            this._containerInlineStyle = newEl.getAttribute('style') || null;
                            this._applyContainerStyles();
                            if (newEl === this._scrollTarget) {
                                this._sizer = this._sizer || this._createContainerSizer();
                                this._container.insertBefore(this._sizer, this._container.firstChild);
                            }
                            this._schedule(this._updateLayout);
                            this._containerRO.observe(newEl);
                            this._mutationObserver.observe(newEl, { childList: true });
                            this._mutationPromise = new Promise(resolve => this._mutationPromiseResolver = resolve);
                            if (this._layout && this._layout.listenForChildLoadEvents) {
                                newEl.addEventListener('load', this._loadListener, true);
                            }
                        }
                    });
                }
                // This will always actually return a layout instance,
                // but TypeScript wants the getter and setter types to be the same
                get layout() {
                    return this._layout;
                }
                set layout(layout) {
                    if (this._layout === layout) {
                        return;
                    }
                    let _layout, _config;
                    if (typeof layout === 'object') {
                        if (layout.type !== undefined) {
                            _layout = layout.type;
                            delete layout.type;
                        }
                        _config = layout;
                    }
                    else {
                        _layout = layout;
                    }
                    if (typeof _layout === 'function') {
                        if (this._layout instanceof _layout) {
                            if (_config) {
                                this._layout.config = _config;
                            }
                            return;
                        }
                        else {
                            _layout = new _layout(_config);
                        }
                    }
                    if (this._layout) {
                        this._measureCallback = null;
                        this._measureChildOverride = null;
                        this._layout.removeEventListener('scrollsizechange', this);
                        this._layout.removeEventListener('scrollerrorchange', this);
                        this._layout.removeEventListener('itempositionchange', this);
                        this._layout.removeEventListener('rangechange', this);
                        delete this.container[scrollerRef];
                        this.container.removeEventListener('load', this._loadListener, true);
                        // Reset container size so layout can get correct viewport size.
                        if (this._containerElement) {
                            this._sizeContainer(undefined);
                        }
                    }
                    this._layout = _layout;
                    if (this._layout) {
                        if (this._layout.measureChildren && typeof this._layout.updateItemSizes === 'function') {
                            if (typeof this._layout.measureChildren === 'function') {
                                this._measureChildOverride = this._layout.measureChildren;
                            }
                            this._measureCallback = this._layout.updateItemSizes.bind(this._layout);
                        }
                        this._layout.addEventListener('scrollsizechange', this);
                        this._layout.addEventListener('scrollerrorchange', this);
                        this._layout.addEventListener('itempositionchange', this);
                        this._layout.addEventListener('rangechange', this);
                        this._container[scrollerRef] = this;
                        if (this._layout.listenForChildLoadEvents) {
                            this._container.addEventListener('load', this._loadListener, true);
                        }
                        this._schedule(this._updateLayout);
                    }
                }
                // TODO (graynorton): Rework benchmarking so that it has no API and
                // instead is always on except in production builds
                startBenchmarking() {
                    if (this._benchmarkStart === null) {
                        this._benchmarkStart = window.performance.now();
                    }
                }
                stopBenchmarking() {
                    if (this._benchmarkStart !== null) {
                        const now = window.performance.now();
                        const timeElapsed = now - this._benchmarkStart;
                        const entries = performance.getEntriesByName('uv-virtualizing', 'measure');
                        const virtualizationTime = entries
                            .filter(e => e.startTime >= this._benchmarkStart && e.startTime < now)
                            .reduce((t, m) => t + m.duration, 0);
                        this._benchmarkStart = null;
                        return { timeElapsed, virtualizationTime };
                    }
                    return null;
                }
                _measureChildren() {
                    const mm = {};
                    const children = this._children;
                    const fn = this._measureChildOverride || this._measureChild;
                    for (let i = 0; i < children.length; i++) {
                        const child = children[i];
                        const idx = this._first + i;
                        if (this._itemsChanged || this._toBeMeasured.has(child)) {
                            mm[idx] = fn.call(this, child, this._items[idx]);
                        }
                    }
                    this._childMeasurements = mm;
                    this._schedule(this._updateLayout);
                    this._toBeMeasured.clear();
                }
                /**
                 * Returns the width, height, and margins of the given child.
                 */
                _measureChild(element) {
                    // offsetWidth doesn't take transforms in consideration, so we use
                    // getBoundingClientRect which does.
                    const { width, height } = element.getBoundingClientRect();
                    return Object.assign({ width, height }, getMargins(element));
                }
                /**
                 * The element that generates scroll events and defines the container
                 * viewport. The value `null` (default) corresponds to `window` as scroll
                 * target.
                 */
                get scrollTarget() {
                    return this._scrollTarget;
                }
                set scrollTarget(target) {
                    // Consider window as null.
                    if (target === window) {
                        target = null;
                    }
                    if (this._scrollTarget === target) {
                        return;
                    }
                    this._sizeContainer(undefined);
                    if (this._scrollTarget) {
                        this._scrollTarget.removeEventListener('scroll', this, { passive: true });
                        if (this._sizer && this._scrollTarget === this._containerElement) {
                            this._sizer.remove();
                        }
                    }
                    this._scrollTarget = target;
                    if (target) {
                        target.addEventListener('scroll', this, { passive: true });
                        if (target === this._containerElement) {
                            this._sizer = this._sizer || this._createContainerSizer();
                            this._container.insertBefore(this._sizer, this._container.firstChild);
                        }
                    }
                }
                /**
                 * Index and position of item to scroll to. The scroller will fix to that point
                 * until the user scrolls.
                 */
                set scrollToIndex(newValue) {
                    this._scrollToIndex = newValue;
                    this._schedule(this._updateLayout);
                }
                async _schedule(method) {
                    if (!this._scheduled.has(method)) {
                        this._scheduled.add(method);
                        await Promise.resolve();
                        this._scheduled.delete(method);
                        method.call(this);
                    }
                }
                async _updateDOM() {
                    const { _rangeChanged, _itemsChanged } = this;
                    if (this._visibilityChanged) {
                        this._notifyVisibility();
                        this._visibilityChanged = false;
                    }
                    if (_rangeChanged || _itemsChanged) {
                        this._notifyRange();
                        this._rangeChanged = false;
                        this._itemsChanged = false;
                        await this._mutationPromise;
                    }
                    if (this._layout.measureChildren) {
                        this._children.forEach((child) => this._childrenRO.observe(child));
                    }
                    this._positionChildren(this._childrenPos);
                    this._sizeContainer(this._scrollSize);
                    if (this._scrollErr) {
                        this._correctScrollError(this._scrollErr);
                        this._scrollErr = null;
                    }
                    if (this._benchmarkStart && 'mark' in window.performance) {
                        window.performance.mark('uv-end');
                    }
                }
                _updateLayout() {
                    this._layout.totalItems = this._totalItems;
                    if (this._scrollToIndex !== null) {
                        this._layout.scrollToIndex(this._scrollToIndex.index, this._scrollToIndex.position);
                        this._scrollToIndex = null;
                    }
                    this._updateView();
                    if (this._childMeasurements !== null) {
                        // If the layout has been changed, we may have measurements but no callback
                        if (this._measureCallback) {
                            this._measureCallback(this._childMeasurements);
                        }
                        this._childMeasurements = null;
                    }
                    this._layout.reflowIfNeeded(this._itemsChanged);
                    if (this._benchmarkStart && 'mark' in window.performance) {
                        window.performance.mark('uv-end');
                    }
                }
                _handleScrollEvent() {
                    if (this._benchmarkStart && 'mark' in window.performance) {
                        try {
                            window.performance.measure('uv-virtualizing', 'uv-start', 'uv-end');
                        }
                        catch (e) { }
                        window.performance.mark('uv-start');
                    }
                    this._schedule(this._updateLayout);
                }
                handleEvent(event) {
                    switch (event.type) {
                        case 'scroll':
                            if (!this._scrollTarget || event.target === this._scrollTarget) {
                                this._handleScrollEvent();
                            }
                            break;
                        case 'scrollsizechange':
                            this._scrollSize = event.detail;
                            this._schedule(this._updateDOM);
                            break;
                        case 'scrollerrorchange':
                            this._scrollErr = event.detail;
                            this._schedule(this._updateDOM);
                            break;
                        case 'itempositionchange':
                            this._childrenPos = event.detail;
                            this._schedule(this._updateDOM);
                            break;
                        case 'rangechange':
                            this._adjustRange(event.detail);
                            this._schedule(this._updateDOM);
                            break;
                        default:
                            console.warn('event not handled', event);
                    }
                }
                async _initResizeObservers() {
                    if (this._containerRO === null) {
                        const ResizeObserver$1 = await ResizeObserver();
                        this._containerRO = new ResizeObserver$1((entries) => this._containerSizeChanged(entries[0].contentRect));
                        this._childrenRO =
                            new ResizeObserver$1(this._childrenSizeChanged.bind(this));
                        this._mutationObserver = new MutationObserver(this._observeMutations.bind(this));
                    }
                }
                _applyContainerStyles() {
                    if (nativeShadowDOM) {
                        if (this._containerStylesheet === null) {
                            const sheet = (this._containerStylesheet = document.createElement('style'));
                            sheet.textContent = containerStyles(':host', '::slotted(*)');
                        }
                        const root = this._containerElement.shadowRoot || this._containerElement.attachShadow({ mode: 'open' });
                        const slot = root.querySelector('slot:not([name])');
                        root.appendChild(this._containerStylesheet);
                        if (!slot) {
                            root.appendChild(document.createElement('slot'));
                        }
                    }
                    else {
                        attachGlobalContainerStylesheet();
                        if (this._containerElement) {
                            this._containerElement.classList.add(HOST_CLASSNAME);
                        }
                    }
                }
                _createContainerSizer() {
                    const sizer = document.createElement('div');
                    // When the scrollHeight is large, the height of this element might be
                    // ignored. Setting content and font-size ensures the element has a size.
                    Object.assign(sizer.style, {
                        position: 'absolute',
                        margin: '-2px 0 0 0',
                        padding: 0,
                        visibility: 'hidden',
                        fontSize: '2px',
                    });
                    sizer.innerHTML = '&nbsp;';
                    sizer.id = 'uni-virtualizer-spacer';
                    return sizer;
                }
                get _children() {
                    const arr = [];
                    let next = this.container.firstElementChild;
                    while (next) {
                        // Skip our spacer. TODO (graynorton): Feels a bit hacky. Anything better?
                        if (next.id !== 'uni-virtualizer-spacer') {
                            arr.push(next);
                        }
                        next = next.nextElementSibling;
                    }
                    return arr;
                }
                _updateView() {
                    if (!this.container || !this._containerElement || !this._layout) {
                        return;
                    }
                    let width, height, top, left;
                    if (this._scrollTarget === this._containerElement && this._containerSize !== null) {
                        width = this._containerSize.width;
                        height = this._containerSize.height;
                        left = this._containerElement.scrollLeft;
                        top = this._containerElement.scrollTop;
                    }
                    else {
                        const containerBounds = this._containerElement.getBoundingClientRect();
                        const scrollBounds = this._scrollTarget ?
                            this._scrollTarget.getBoundingClientRect() :
                            {
                                top: containerBounds.top + window.pageYOffset,
                                left: containerBounds.left + window.pageXOffset,
                                width: innerWidth,
                                height: innerHeight
                            };
                        const scrollerWidth = scrollBounds.width;
                        const scrollerHeight = scrollBounds.height;
                        const xMin = Math.max(0, Math.min(scrollerWidth, containerBounds.left - scrollBounds.left));
                        const yMin = Math.max(0, Math.min(scrollerHeight, containerBounds.top - scrollBounds.top));
                        // TODO (graynorton): Direction is intended to be a layout-level concept, not a scroller-level concept,
                        // so this feels like a factoring problem
                        const xMax = this._layout.direction === 'vertical' ?
                            Math.max(0, Math.min(scrollerWidth, containerBounds.right - scrollBounds.left)) :
                            scrollerWidth;
                        const yMax = this._layout.direction === 'vertical' ?
                            scrollerHeight :
                            Math.max(0, Math.min(scrollerHeight, containerBounds.bottom - scrollBounds.top));
                        width = xMax - xMin;
                        height = yMax - yMin;
                        left = Math.max(0, -(containerBounds.left - scrollBounds.left));
                        top = Math.max(0, -(containerBounds.top - scrollBounds.top));
                    }
                    this._layout.viewportSize = { width, height };
                    this._layout.viewportScroll = { top, left };
                }
                /**
                 * Styles the _sizer element or the container so that its size reflects the
                 * total size of all items.
                 */
                _sizeContainer(size) {
                    if (this._scrollTarget === this._containerElement) {
                        const left = size && size.width ? size.width - 1 : 0;
                        const top = size && size.height ? size.height - 1 : 0;
                        if (this._sizer) {
                            this._sizer.style.transform = `translate(${left}px, ${top}px)`;
                        }
                    }
                    else {
                        if (this._containerElement) {
                            const style = this._containerElement.style;
                            style.minWidth = size && size.width ? size.width + 'px' : null;
                            style.minHeight = size && size.height ? size.height + 'px' : null;
                        }
                    }
                }
                /**
                 * Sets the top and left transform style of the children from the values in
                 * pos.
                 */
                _positionChildren(pos) {
                    if (pos) {
                        const children = this._children;
                        Object.keys(pos).forEach((key) => {
                            const idx = key - this._first;
                            const child = children[idx];
                            if (child) {
                                const { top, left, width, height } = pos[key];
                                child.style.position = 'absolute';
                                child.style.transform = `translate(${left}px, ${top}px)`;
                                if (width !== undefined) {
                                    child.style.width = width + 'px';
                                }
                                if (height !== undefined) {
                                    child.style.height = height + 'px';
                                }
                            }
                        });
                    }
                }
                async _adjustRange(range) {
                    const { _first, _last, _firstVisible, _lastVisible } = this;
                    this._first = range.first;
                    this._last = range.last;
                    this._firstVisible = range.firstVisible;
                    this._lastVisible = range.lastVisible;
                    this._rangeChanged = (this._rangeChanged ||
                        this._first !== _first ||
                        this._last !== _last);
                    this._visibilityChanged = (this._visibilityChanged ||
                        this._firstVisible !== _firstVisible ||
                        this._lastVisible !== _lastVisible);
                }
                _correctScrollError(err) {
                    if (this._scrollTarget) {
                        this._scrollTarget.scrollTop -= err.top;
                        this._scrollTarget.scrollLeft -= err.left;
                    }
                    else {
                        window.scroll(window.pageXOffset - err.left, window.pageYOffset - err.top);
                    }
                }
                /**
                 * Emits a rangechange event with the current first, last, firstVisible, and
                 * lastVisible.
                 */
                _notifyRange() {
                    // TODO (graynorton): Including visibility here for backward compat, but 
                    // may decide to remove at some point. The rationale for separating is that
                    // range change events are mainly intended for "internal" consumption by the
                    // renderer, whereas visibility change events are mainly intended for "external"
                    // consumption by application code.
                    this._container.dispatchEvent(new CustomEvent('rangeChanged', { detail: {
                            first: this._first,
                            last: this._last,
                            firstVisible: this._firstVisible,
                            lastVisible: this._lastVisible,
                        } }));
                }
                _notifyVisibility() {
                    this._container.dispatchEvent(new CustomEvent('visibilityChanged', { detail: {
                            first: this._first,
                            last: this._last,
                            firstVisible: this._firstVisible,
                            lastVisible: this._lastVisible,
                        } }));
                }
                /**
                 * Render and update the view at the next opportunity with the given
                 * container size.
                 */
                _containerSizeChanged(size) {
                    const { width, height } = size;
                    this._containerSize = { width, height };
                    this._schedule(this._updateLayout);
                }
                async _observeMutations() {
                    if (!this._mutationsObserved) {
                        this._mutationsObserved = true;
                        this._mutationPromiseResolver();
                        this._mutationPromise = new Promise(resolve => this._mutationPromiseResolver = resolve);
                        this._mutationsObserved = false;
                    }
                }
                // TODO (graynorton): Rethink how this works. Probably child loading is too specific
                // to have dedicated support for; might want some more generic lifecycle hooks for
                // layouts to use. Possibly handle measurement this way, too, or maybe that remains
                // a first-class feature?
                _childLoaded() {
                    // this.requestRemeasure();
                }
                _childrenSizeChanged(changes) {
                    for (let change of changes) {
                        this._toBeMeasured.set(change.target, change.contentRect);
                    }
                    this._measureChildren();
                    this._schedule(this._updateLayout);
                }
            }
            function getMargins(el) {
                const style = window.getComputedStyle(el);
                return {
                    marginTop: getMarginValue(style.marginTop),
                    marginRight: getMarginValue(style.marginRight),
                    marginBottom: getMarginValue(style.marginBottom),
                    marginLeft: getMarginValue(style.marginLeft),
                };
            }
            function getMarginValue(value) {
                const float = value ? parseFloat(value) : NaN;
                return Number.isNaN(float) ? 0 : float;
            }

            const defaultKeyFunction = item => item;
            class ScrollDirective extends c$2 {
                constructor(part) {
                    super(part);
                    this.first = 0;
                    this.last = -1;
                    if (part.type !== t$2.CHILD) {
                        throw new Error('The scroll directive can only be used in child expressions');
                    }
                }
                render(config) {
                    if (config) {
                        this.renderItem = config.renderItem;
                        this.keyFunction = config.keyFunction;
                    }
                    const itemsToRender = [];
                    if (this.first >= 0 && this.last >= this.first) {
                        for (let i = this.first; i < this.last + 1; i++) {
                            itemsToRender.push(this.items[i]);
                        }
                    }
                    return c$3(itemsToRender, this.keyFunction || defaultKeyFunction, this.renderItem);
                }
                update(part, [config]) {
                    var _a;
                    if (this.scroller || this._initialize(part, config)) {
                        const { scroller } = this;
                        this.items = scroller.items = config.items;
                        scroller.totalItems = config.totalItems || ((_a = config.items) === null || _a === void 0 ? void 0 : _a.length) || 0;
                        scroller.layout = config.layout;
                        scroller.scrollTarget = config.scrollTarget || this.container;
                        if (config.scrollToIndex) {
                            scroller.scrollToIndex = config.scrollToIndex;
                        }
                        return this.render(config);
                    }
                    return A;
                }
                _initialize(part, config) {
                    const container = this.container = part.parentNode;
                    if (container && container.nodeType === 1) {
                        this.scroller = new VirtualScroller({ container });
                        container.addEventListener('rangeChanged', (e) => {
                            this.first = e.detail.first;
                            this.last = e.detail.last;
                            this.setValue(this.render());
                        });
                        return true;
                    }
                    // TODO (GN): This seems to be needed in the case where the `scroll`
                    // directive is used within the `LitVirtualizer` element. Figure out why
                    // and see if there's a cleaner solution.
                    Promise.resolve().then(() => this.update(part, [config]));
                    return false;
                }
            }
            const scroll = i$3(ScrollDirective);

            let _ET, ET;
            async function EventTarget() {
                return ET || init$1();
            }
            async function init$1() {
                _ET = window.EventTarget;
                try {
                    new _ET();
                }
                catch (_a) {
                    _ET = (await module.import('./event-target-shim-3a1cf81a.js')).EventTarget;
                }
                return (ET = _ET);
            }

            class Layout1dBase {
                constructor(config) {
                    /**
                     * The last set viewport scroll position.
                     */
                    this._latestCoords = { left: 0, top: 0 };
                    /**
                     * Scrolling direction.
                     */
                    this._direction = 'vertical';
                    /**
                     * Dimensions of the viewport.
                     */
                    this._viewportSize = { width: 0, height: 0 };
                    /**
                     * Flag for debouncing asynchnronous reflow requests.
                     */
                    this._pendingReflow = false;
                    this._pendingLayoutUpdate = false;
                    /**
                     * Index of the item that has been scrolled to via the public API. When the
                     * container is otherwise scrolled, this value is set back to -1.
                     */
                    this._scrollToIndex = -1;
                    /**
                     * When a child is scrolled to, the offset from the top of the child and the
                     * top of the viewport. Value is a proportion of the item size.
                     */
                    this._scrollToAnchor = 0;
                    this._eventTargetPromise = (EventTarget().then((Ctor) => {
                        this._eventTarget = new Ctor();
                    }));
                    /**
                     * Pixel offset in the scroll direction of the first child.
                     */
                    this._physicalMin = 0;
                    /**
                     * Pixel offset in the scroll direction of the last child.
                     */
                    this._physicalMax = 0;
                    /**
                     * Index of the first child.
                     */
                    this._first = -1;
                    /**
                     * Index of the last child.
                     */
                    this._last = -1;
                    /**
                     * The _estimated_ size of a child.
                     */
                    this._itemSize = { width: 100, height: 100 };
                    /**
                     * Space in pixels between children.
                     */
                    this._spacing = 0;
                    /**
                     * Length in the scrolling direction.
                     */
                    this._sizeDim = 'height';
                    /**
                     * Length in the non-scrolling direction.
                     */
                    this._secondarySizeDim = 'width';
                    /**
                     * Position in the scrolling direction.
                     */
                    this._positionDim = 'top';
                    /**
                     * Position in the non-scrolling direction.
                     */
                    this._secondaryPositionDim = 'left';
                    /**
                     * Current scroll offset in pixels.
                     */
                    this._scrollPosition = 0;
                    /**
                     * Difference between current scroll offset and scroll offset calculated due
                     * to a reflow.
                     */
                    this._scrollError = 0;
                    /**
                     * Total number of items that could possibly be displayed. Used to help
                     * calculate the scroll size.
                     */
                    this._totalItems = 0;
                    /**
                     * The total (estimated) length of all items in the scrolling direction.
                     */
                    this._scrollSize = 1;
                    /**
                     * Number of pixels beyond the visible size of the container to still include
                     * in the active range of items.
                     */
                    // TODO (graynorton): Probably want to make this something we calculate based
                    // on viewport size, item size, other factors, possibly still with a dial of some kind
                    this._overhang = 1000;
                    if (config) {
                        this.config = config;
                    }
                }
                set config(config) {
                    Object.assign(this, Object.assign({}, this.constructor._defaultConfig, config));
                }
                get config() {
                    const config = {};
                    for (let key in this.constructor._defaultConfig) {
                        config[key] = this[key];
                    }
                    return config;
                }
                /**
                 * Maximum index of children + 1, to help estimate total height of the scroll
                 * space.
                 */
                get totalItems() {
                    return this._totalItems;
                }
                set totalItems(num) {
                    const _num = Number(num);
                    if (_num !== this._totalItems) {
                        this._totalItems = _num;
                        this._scheduleReflow();
                    }
                }
                /**
                 * Primary scrolling direction.
                 */
                get direction() {
                    return this._direction;
                }
                set direction(dir) {
                    // Force it to be either horizontal or vertical.
                    dir = (dir === 'horizontal') ? dir : 'vertical';
                    if (dir !== this._direction) {
                        this._direction = dir;
                        this._sizeDim = (dir === 'horizontal') ? 'width' : 'height';
                        this._secondarySizeDim = (dir === 'horizontal') ? 'height' : 'width';
                        this._positionDim = (dir === 'horizontal') ? 'left' : 'top';
                        this._secondaryPositionDim = (dir === 'horizontal') ? 'top' : 'left';
                        this._scheduleLayoutUpdate();
                    }
                }
                /**
                 * Estimate of the dimensions of a single child.
                 */
                get itemSize() {
                    return this._itemSize;
                }
                set itemSize(dims) {
                    const { _itemDim1, _itemDim2 } = this;
                    Object.assign(this._itemSize, dims);
                    if (_itemDim1 !== this._itemDim1 || _itemDim2 !== this._itemDim2) {
                        if (_itemDim2 !== this._itemDim2) {
                            this._itemDim2Changed();
                        }
                        else {
                            this._scheduleLayoutUpdate();
                        }
                    }
                }
                /**
                 * Amount of space in between items.
                 */
                get spacing() {
                    return this._spacing;
                }
                set spacing(px) {
                    const _px = Number(px);
                    if (_px !== this._spacing) {
                        this._spacing = _px;
                        this._scheduleLayoutUpdate();
                    }
                }
                /**
                 * Height and width of the viewport.
                 */
                get viewportSize() {
                    return this._viewportSize;
                }
                set viewportSize(dims) {
                    const { _viewDim1, _viewDim2 } = this;
                    Object.assign(this._viewportSize, dims);
                    if (_viewDim2 !== this._viewDim2) {
                        this._viewDim2Changed();
                    }
                    else if (_viewDim1 !== this._viewDim1) {
                        this._checkThresholds();
                    }
                }
                /**
                 * Scroll offset of the viewport.
                 */
                get viewportScroll() {
                    return this._latestCoords;
                }
                set viewportScroll(coords) {
                    Object.assign(this._latestCoords, coords);
                    const oldPos = this._scrollPosition;
                    this._scrollPosition = this._latestCoords[this._positionDim];
                    if (oldPos !== this._scrollPosition) {
                        this._scrollPositionChanged(oldPos, this._scrollPosition);
                        this._updateVisibleIndices({ emit: true });
                    }
                    this._checkThresholds();
                }
                /**
                 * Perform a reflow if one has been scheduled.
                 */
                reflowIfNeeded(force) {
                    if (force || this._pendingReflow) {
                        this._pendingReflow = false;
                        this._reflow();
                    }
                }
                /**
                 * Scroll to the child at the given index, and the given position within that
                 * child.
                 */
                scrollToIndex(index, position = 'start') {
                    if (!Number.isFinite(index))
                        return;
                    index = Math.min(this.totalItems, Math.max(0, index));
                    this._scrollToIndex = index;
                    if (position === 'nearest') {
                        position = index > this._first + this._num / 2 ? 'end' : 'start';
                    }
                    switch (position) {
                        case 'start':
                            this._scrollToAnchor = 0;
                            break;
                        case 'center':
                            this._scrollToAnchor = 0.5;
                            break;
                        case 'end':
                            this._scrollToAnchor = 1;
                            break;
                        default:
                            throw new TypeError('position must be one of: start, center, end, nearest');
                    }
                    this._scheduleReflow();
                }
                async dispatchEvent(...args) {
                    await this._eventTargetPromise;
                    this._eventTarget.dispatchEvent(...args);
                }
                async addEventListener(...args) {
                    await this._eventTargetPromise;
                    this._eventTarget.addEventListener(...args);
                }
                async removeEventListener(...args) {
                    await this._eventTargetPromise;
                    this._eventTarget.removeEventListener(...args);
                }
                _itemDim2Changed() {
                    // Override
                }
                _viewDim2Changed() {
                    // Override
                }
                _updateLayout() {
                    // Override
                }
                _getItemSize(_idx) {
                    return {
                        [this._sizeDim]: this._itemDim1,
                        [this._secondarySizeDim]: this._itemDim2,
                    };
                }
                /**
                 * The size of an item in the scrolling direction + space between items.
                 */
                get _delta() {
                    return this._itemDim1 + this._spacing;
                }
                /**
                 * The height or width of an item, whichever corresponds to the scrolling direction.
                 */
                get _itemDim1() {
                    return this._itemSize[this._sizeDim];
                }
                /**
                 * The height or width of an item, whichever does NOT correspond to the scrolling direction.
                 */
                get _itemDim2() {
                    return this._itemSize[this._secondarySizeDim];
                }
                /**
                 * The height or width of the viewport, whichever corresponds to the scrolling direction.
                 */
                get _viewDim1() {
                    return this._viewportSize[this._sizeDim];
                }
                /**
                 * The height or width of the viewport, whichever does NOT correspond to the scrolling direction.
                 */
                get _viewDim2() {
                    return this._viewportSize[this._secondarySizeDim];
                }
                _scheduleReflow() {
                    this._pendingReflow = true;
                }
                _scheduleLayoutUpdate() {
                    this._pendingLayoutUpdate = true;
                    this._scheduleReflow();
                }
                _reflow() {
                    const { _first, _last, _scrollSize } = this;
                    if (this._pendingLayoutUpdate) {
                        this._updateLayout();
                        this._pendingLayoutUpdate = false;
                    }
                    this._updateScrollSize();
                    this._getActiveItems();
                    this._scrollIfNeeded();
                    this._updateVisibleIndices();
                    if (this._scrollSize !== _scrollSize) {
                        this._emitScrollSize();
                    }
                    if (this._first === -1 && this._last === -1) {
                        // TODO: have default empty object for emitRange instead
                        this._emitRange();
                    }
                    else if (this._first !== _first || this._last !== _last ||
                        this._spacingChanged) {
                        // TODO: have default empty object for emitRange instead
                        this._emitRange();
                        this._emitChildPositions();
                    }
                    this._emitScrollError();
                }
                /**
                 * Estimates the total length of all items in the scrolling direction, including spacing.
                 */
                _updateScrollSize() {
                    // Ensure we have at least 1px - this allows getting at least 1 item to be
                    // rendered.
                    this._scrollSize = Math.max(1, this._totalItems * this._delta);
                }
                _scrollIfNeeded() {
                    if (this._scrollToIndex === -1) {
                        return;
                    }
                    const index = this._scrollToIndex;
                    const anchor = this._scrollToAnchor;
                    const pos = this._getItemPosition(index)[this._positionDim];
                    const size = this._getItemSize(index)[this._sizeDim];
                    const curAnchorPos = this._scrollPosition + this._viewDim1 * anchor;
                    const newAnchorPos = pos + size * anchor;
                    // Ensure scroll position is an integer within scroll bounds.
                    const scrollPosition = Math.floor(Math.min(this._scrollSize - this._viewDim1, Math.max(0, this._scrollPosition - curAnchorPos + newAnchorPos)));
                    this._scrollError += this._scrollPosition - scrollPosition;
                    this._scrollPosition = scrollPosition;
                }
                _emitRange(inProps = undefined) {
                    const detail = Object.assign({
                        first: this._first,
                        last: this._last,
                        num: this._num,
                        stable: true,
                        firstVisible: this._firstVisible,
                        lastVisible: this._lastVisible,
                    }, inProps);
                    this.dispatchEvent(new CustomEvent('rangechange', { detail }));
                }
                _emitScrollSize() {
                    const detail = {
                        [this._sizeDim]: this._scrollSize,
                    };
                    this.dispatchEvent(new CustomEvent('scrollsizechange', { detail }));
                }
                _emitScrollError() {
                    if (this._scrollError) {
                        const detail = {
                            [this._positionDim]: this._scrollError,
                            [this._secondaryPositionDim]: 0,
                        };
                        this.dispatchEvent(new CustomEvent('scrollerrorchange', { detail }));
                        this._scrollError = 0;
                    }
                }
                /**
                 * Get or estimate the top and left positions of items in the current range.
                 * Emit an itempositionchange event with these positions.
                 */
                _emitChildPositions() {
                    const detail = {};
                    for (let idx = this._first; idx <= this._last; idx++) {
                        detail[idx] = this._getItemPosition(idx);
                    }
                    this.dispatchEvent(new CustomEvent('itempositionchange', { detail }));
                }
                /**
                 * Number of items to display.
                 */
                get _num() {
                    if (this._first === -1 || this._last === -1) {
                        return 0;
                    }
                    return this._last - this._first + 1;
                }
                _checkThresholds() {
                    if (this._viewDim1 === 0 && this._num > 0) {
                        this._scheduleReflow();
                    }
                    else {
                        const min = Math.max(0, this._scrollPosition - this._overhang);
                        const max = Math.min(this._scrollSize, this._scrollPosition + this._viewDim1 + this._overhang);
                        if (this._physicalMin > min || this._physicalMax < max) {
                            this._scheduleReflow();
                        }
                    }
                }
                /**
                 * Find the indices of the first and last items to intersect the viewport.
                 * Emit a visibleindiceschange event when either index changes.
                 */
                _updateVisibleIndices(options) {
                    if (this._first === -1 || this._last === -1)
                        return;
                    let firstVisible = this._first;
                    while (Math.round(this._getItemPosition(firstVisible)[this._positionDim] +
                        this._getItemSize(firstVisible)[this._sizeDim])
                        <=
                            Math.round(this._scrollPosition)) {
                        firstVisible++;
                    }
                    let lastVisible = this._last;
                    while (Math.round(this._getItemPosition(lastVisible)[this._positionDim])
                        >=
                            Math.round(this._scrollPosition + this._viewDim1)) {
                        lastVisible--;
                    }
                    if (firstVisible !== this._firstVisible || lastVisible !== this._lastVisible) {
                        this._firstVisible = firstVisible;
                        this._lastVisible = lastVisible;
                        if (options && options.emit) {
                            this._emitRange();
                        }
                    }
                }
                _scrollPositionChanged(oldPos, newPos) {
                    // When both values are bigger than the max scroll position, keep the
                    // current _scrollToIndex, otherwise invalidate it.
                    const maxPos = this._scrollSize - this._viewDim1;
                    if (oldPos < maxPos || newPos < maxPos) {
                        this._scrollToIndex = -1;
                    }
                }
            }
            Layout1dBase._defaultConfig = {};

            class Layout1d extends Layout1dBase {
                constructor(config) {
                    super(config);
                    /**
                     * Indices of children mapped to their (position and length) in the scrolling
                     * direction. Used to keep track of children that are in range.
                     */
                    this._physicalItems = new Map();
                    /**
                     * Used in tandem with _physicalItems to track children in range across
                     * reflows.
                     */
                    this._newPhysicalItems = new Map();
                    /**
                     * Width and height of children by their index.
                     */
                    this._metrics = new Map();
                    /**
                     * anchorIdx is the anchor around which we reflow. It is designed to allow
                     * jumping to any point of the scroll size. We choose it once and stick with
                     * it until stable. _first and _last are deduced around it.
                     */
                    this._anchorIdx = null;
                    /**
                     * Position in the scrolling direction of the anchor child.
                     */
                    this._anchorPos = null;
                    /**
                     * Whether all children in range were in range during the previous reflow.
                     */
                    this._stable = true;
                    /**
                     * Whether to remeasure children during the next reflow.
                     */
                    this._needsRemeasure = false;
                    /**
                     * Number of children to lay out.
                     */
                    this._nMeasured = 0;
                    /**
                     * Total length in the scrolling direction of the laid out children.
                     */
                    this._tMeasured = 0;
                    this._measureChildren = true;
                    this._estimate = true;
                }
                get measureChildren() {
                    return this._measureChildren;
                }
                /**
                 * Determine the average size of all children represented in the sizes
                 * argument.
                 */
                updateItemSizes(sizes) {
                    Object.keys(sizes).forEach((key) => {
                        const metrics = sizes[key], mi = this._getMetrics(Number(key)), prevSize = mi[this._sizeDim];
                        // TODO(valdrin) Handle margin collapsing.
                        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
                        mi.width = metrics.width + (metrics.marginLeft || 0) +
                            (metrics.marginRight || 0);
                        mi.height = metrics.height + (metrics.marginTop || 0) +
                            (metrics.marginBottom || 0);
                        const size = mi[this._sizeDim];
                        const item = this._getPhysicalItem(Number(key));
                        if (item) {
                            let delta;
                            if (size !== undefined) {
                                item.size = size;
                                if (prevSize === undefined) {
                                    delta = size;
                                    this._nMeasured++;
                                }
                                else {
                                    delta = size - prevSize;
                                }
                            }
                            this._tMeasured = this._tMeasured + delta;
                        }
                    });
                    if (this._nMeasured) {
                        this._updateItemSize();
                        this._scheduleReflow();
                    }
                }
                /**
                 * Set the average item size based on the total length and number of children
                 * in range.
                 */
                _updateItemSize() {
                    // Keep integer values.
                    this._itemSize[this._sizeDim] =
                        Math.round(this._tMeasured / this._nMeasured);
                }
                _getMetrics(idx) {
                    return (this._metrics[idx] = this._metrics[idx] || {});
                }
                _getPhysicalItem(idx) {
                    return this._newPhysicalItems.get(idx) || this._physicalItems.get(idx);
                }
                _getSize(idx) {
                    const item = this._getPhysicalItem(idx);
                    return item && item.size;
                }
                /**
                 * Returns the position in the scrolling direction of the item at idx.
                 * Estimates it if the item at idx is not in the DOM.
                 */
                _getPosition(idx) {
                    const item = this._getPhysicalItem(idx);
                    return item ? item.pos : (idx * (this._delta)) + this._spacing;
                }
                _calculateAnchor(lower, upper) {
                    if (lower === 0) {
                        return 0;
                    }
                    if (upper > this._scrollSize - this._viewDim1) {
                        return this._totalItems - 1;
                    }
                    return Math.max(0, Math.min(this._totalItems - 1, Math.floor(((lower + upper) / 2) / this._delta)));
                }
                _getAnchor(lower, upper) {
                    if (this._physicalItems.size === 0) {
                        return this._calculateAnchor(lower, upper);
                    }
                    if (this._first < 0) {
                        console.error('_getAnchor: negative _first');
                        return this._calculateAnchor(lower, upper);
                    }
                    if (this._last < 0) {
                        console.error('_getAnchor: negative _last');
                        return this._calculateAnchor(lower, upper);
                    }
                    const firstItem = this._getPhysicalItem(this._first), lastItem = this._getPhysicalItem(this._last), firstMin = firstItem.pos, firstMax = firstMin + firstItem.size, lastMin = lastItem.pos, lastMax = lastMin + lastItem.size;
                    if (lastMax < lower) {
                        // Window is entirely past physical items, calculate new anchor
                        return this._calculateAnchor(lower, upper);
                    }
                    if (firstMin > upper) {
                        // Window is entirely before physical items, calculate new anchor
                        return this._calculateAnchor(lower, upper);
                    }
                    if (firstMin >= lower || firstMax >= lower) {
                        // First physical item overlaps window, choose it
                        return this._first;
                    }
                    if (lastMax <= upper || lastMin <= upper) {
                        // Last physical overlaps window, choose it
                        return this._last;
                    }
                    // Window contains a physical item, but not the first or last
                    let maxIdx = this._last, minIdx = this._first;
                    while (true) {
                        const candidateIdx = Math.round((maxIdx + minIdx) / 2), candidate = this._physicalItems.get(candidateIdx), cMin = candidate.pos, cMax = cMin + candidate.size;
                        if ((cMin >= lower && cMin <= upper) ||
                            (cMax >= lower && cMax <= upper)) {
                            return candidateIdx;
                        }
                        else if (cMax < lower) {
                            minIdx = candidateIdx + 1;
                        }
                        else if (cMin > upper) {
                            maxIdx = candidateIdx - 1;
                        }
                    }
                }
                /**
                 * Updates _first and _last based on items that should be in the current
                 * viewed range.
                 */
                _getActiveItems() {
                    if (this._viewDim1 === 0 || this._totalItems === 0) {
                        this._clearItems();
                    }
                    else {
                        this._getItems();
                    }
                }
                /**
                 * Sets the range to empty.
                 */
                _clearItems() {
                    this._first = -1;
                    this._last = -1;
                    this._physicalMin = 0;
                    this._physicalMax = 0;
                    const items = this._newPhysicalItems;
                    this._newPhysicalItems = this._physicalItems;
                    this._newPhysicalItems.clear();
                    this._physicalItems = items;
                    this._stable = true;
                }
                /*
                 * Updates _first and _last based on items that should be in the given range.
                 */
                _getItems() {
                    const items = this._newPhysicalItems;
                    let lower, upper;
                    // The anchorIdx is the anchor around which we reflow. It is designed to
                    // allow jumping to any point of the scroll size. We choose it once and
                    // stick with it until stable. first and last are deduced around it.
                    if (this._scrollToIndex >= 0) {
                        // If we have a scrollToIndex, we anchor on the given
                        // index and set the scroll position accordingly
                        this._anchorIdx = this._scrollToIndex;
                        this._anchorPos = this._getPosition(this._anchorIdx);
                        this._scrollIfNeeded();
                        lower = Math.max(0, this._scrollPosition - this._overhang);
                        upper = Math.min(this._scrollSize, this._scrollPosition + this._viewDim1 + this._overhang);
                    }
                    else {
                        // Otherwise, we find an appropriate index to anchor on
                        // given the current scroll position
                        upper = Math.min(this._scrollSize, this._scrollPosition + this._viewDim1 + this._overhang);
                        lower = Math.max(0, upper - this._viewDim1 - (2 * this._overhang));
                        if (this._anchorIdx === null || this._anchorPos === null) {
                            this._anchorIdx = this._getAnchor(lower, upper);
                            this._anchorPos = this._getPosition(this._anchorIdx);
                        }
                    }
                    let anchorSize = this._getSize(this._anchorIdx);
                    if (anchorSize === undefined) {
                        anchorSize = this._itemDim1;
                    }
                    // Anchor might be outside bounds, so prefer correcting the error and keep
                    // that anchorIdx.
                    let anchorErr = 0;
                    if (this._anchorPos + anchorSize + this._spacing < lower) {
                        anchorErr = lower - (this._anchorPos + anchorSize + this._spacing);
                    }
                    if (this._anchorPos > upper) {
                        anchorErr = upper - this._anchorPos;
                    }
                    if (anchorErr) {
                        this._scrollPosition -= anchorErr;
                        lower -= anchorErr;
                        upper -= anchorErr;
                        this._scrollError += anchorErr;
                    }
                    // TODO @straversi: If size is always itemDim1, then why keep track of it?
                    items.set(this._anchorIdx, { pos: this._anchorPos, size: anchorSize });
                    this._first = (this._last = this._anchorIdx);
                    this._physicalMin = (this._physicalMax = this._anchorPos);
                    this._stable = true;
                    while (this._physicalMin > lower && this._first > 0) {
                        let size = this._getSize(--this._first);
                        if (size === undefined) {
                            this._stable = false;
                            size = this._itemDim1;
                        }
                        const pos = (this._physicalMin -= size + this._spacing);
                        items.set(this._first, { pos, size });
                        if (this._stable === false && this._estimate === false) {
                            break;
                        }
                    }
                    while (this._physicalMax < upper && this._last < this._totalItems) {
                        let size = this._getSize(this._last);
                        if (size === undefined) {
                            this._stable = false;
                            size = this._itemDim1;
                        }
                        items.set(this._last++, { pos: this._physicalMax, size });
                        if (this._stable === false && this._estimate === false) {
                            break;
                        }
                        else {
                            this._physicalMax += size + this._spacing;
                        }
                    }
                    this._last--;
                    // This handles the cases where we were relying on estimated sizes.
                    const extentErr = this._calculateError();
                    if (extentErr) {
                        this._physicalMin -= extentErr;
                        this._physicalMax -= extentErr;
                        this._anchorPos -= extentErr;
                        this._scrollPosition -= extentErr;
                        items.forEach((item) => item.pos -= extentErr);
                        this._scrollError += extentErr;
                    }
                    if (this._stable) {
                        this._newPhysicalItems = this._physicalItems;
                        this._newPhysicalItems.clear();
                        this._physicalItems = items;
                    }
                }
                _calculateError() {
                    if (this._first === 0) {
                        return this._physicalMin;
                    }
                    else if (this._physicalMin <= 0) {
                        return this._physicalMin - (this._first * this._delta);
                    }
                    else if (this._last === this._totalItems - 1) {
                        return this._physicalMax - this._scrollSize;
                    }
                    else if (this._physicalMax >= this._scrollSize) {
                        return ((this._physicalMax - this._scrollSize) +
                            ((this._totalItems - 1 - this._last) * this._delta));
                    }
                    return 0;
                }
                _updateScrollSize() {
                    // Reuse previously calculated physical max, as it might be higher than the
                    // estimated size.
                    super._updateScrollSize();
                    this._scrollSize = Math.max(this._physicalMax, this._scrollSize);
                }
                // TODO: Can this be made to inherit from base, with proper hooks?
                _reflow() {
                    const { _first, _last, _scrollSize } = this;
                    this._updateScrollSize();
                    this._getActiveItems();
                    if (this._scrollSize !== _scrollSize) {
                        this._emitScrollSize();
                    }
                    this._updateVisibleIndices();
                    this._emitRange();
                    if (this._first === -1 && this._last === -1) {
                        this._resetReflowState();
                    }
                    else if (this._first !== _first || this._last !== _last ||
                        this._needsRemeasure) {
                        this._emitChildPositions();
                        this._emitScrollError();
                    }
                    else {
                        this._emitChildPositions();
                        this._emitScrollError();
                        this._resetReflowState();
                    }
                }
                _resetReflowState() {
                    this._anchorIdx = null;
                    this._anchorPos = null;
                    this._stable = true;
                }
                /**
                 * Returns the top and left positioning of the item at idx.
                 */
                _getItemPosition(idx) {
                    return {
                        [this._positionDim]: this._getPosition(idx),
                        [this._secondaryPositionDim]: 0,
                    };
                }
                /**
                 * Returns the height and width of the item at idx.
                 */
                _getItemSize(idx) {
                    return {
                        [this._sizeDim]: this._getSize(idx) || this._itemDim1,
                        [this._secondarySizeDim]: this._itemDim2,
                    };
                }
                _viewDim2Changed() {
                    this._needsRemeasure = true;
                    this._scheduleReflow();
                }
                _emitRange() {
                    const remeasure = this._needsRemeasure;
                    const stable = this._stable;
                    this._needsRemeasure = false;
                    super._emitRange({ remeasure, stable });
                }
            }

            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */

            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }

            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            const n$5=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            const i$4=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$4(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$4(e,n)}

            /**
             * A LitElement wrapper of the scroll directive.
             *
             * Import this module to declare the lit-virtualizer custom element.
             * Pass an items array, renderItem method, and scroll target as properties
             * to the <lit-virtualizer> element.
             */
            let LitVirtualizer = class LitVirtualizer extends h$2 {
                constructor() {
                    super(...arguments);
                    this.scrollTarget = this;
                }
                createRenderRoot() {
                    return this;
                }
                // get items() {
                //     return this._items;
                // }
                // set items(items) {
                //     this._items = items;
                //     this._scroller.totalItems = items.length;
                // }
                /**
                 * The method used for rendering each item.
                 */
                // get renderItem() {
                //     return this._renderItem;
                // }
                // set renderItem(renderItem) {
                //     if (renderItem !== this.renderItem) {
                //         this._renderItem = renderItem;
                //         this.requestUpdate();
                //     }
                // }
                set layout(layout) {
                    // TODO (graynorton): Shouldn't have to set this here
                    this._layout = layout;
                    this.requestUpdate();
                }
                get layout() {
                    return this[scrollerRef].layout;
                }
                /**
                 * Scroll to the specified index, placing that item at the given position
                 * in the scroll view.
                 */
                async scrollToIndex(index, position = 'start') {
                    this._scrollToIndex = { index, position };
                    this.requestUpdate();
                    await this.updateComplete;
                    this._scrollToIndex = null;
                }
                render() {
                    const { items, renderItem, keyFunction, scrollTarget } = this;
                    const layout = this._layout;
                    return T `${scroll({ items, renderItem, layout, keyFunction, scrollTarget, scrollToIndex: this._scrollToIndex })}`;
                }
            };
            __decorate([
                e$4()
            ], LitVirtualizer.prototype, "renderItem", void 0);
            __decorate([
                e$4({ attribute: false })
            ], LitVirtualizer.prototype, "items", void 0);
            __decorate([
                e$4({ attribute: false })
            ], LitVirtualizer.prototype, "scrollTarget", void 0);
            __decorate([
                e$4()
            ], LitVirtualizer.prototype, "keyFunction", void 0);
            __decorate([
                e$4({ attribute: false })
            ], LitVirtualizer.prototype, "layout", null);
            LitVirtualizer = __decorate([
                n$5('lit-virtualizer')
            ], LitVirtualizer);

            const targetFPS = 60;
            const t$4 = 1000 / targetFPS;

            function runBenchmark(scrollerNodeOrQuery, distance=10000, duration=5000, delay=1000) {
                let scroller, target, scrolled, scrollTo, start;
                let frames = 0;

                function onFrame() {
                    frames++;
                    const stamp = window.performance.now();
                    if (start === undefined) {
                        start = stamp;
                    }
                    const elapsed = stamp - start;
                    if (scrolled() < distance || elapsed < duration) {
                        scrollTo(Math.min(distance, Math.ceil(elapsed / duration * distance)));
                        setTimeout(onFrame, t$4);
                    }
                    else {
                        const fps = Math.floor(1000 / ((stamp - start) / frames));
                        const { timeElapsed, virtualizationTime } = scroller.stopBenchmarking();
                        const normalized = virtualizationTime / timeElapsed * duration;
                        console.log(JSON.stringify({
                            fps,
                            timeElapsed,
                            virtualizationTime,
                            normalized
                        }, null, 2));
                        window.tachometerResult = normalized;
                    }
                }

                setTimeout(function() {
                    scroller = getScroller(scrollerNodeOrQuery);
                    // TODO (graynorton): support horizontal?
                    if (scroller.scrollTarget) {
                        target = scroller.scrollTarget;
                        scrolled = () => target.scrollTop;
                        scrollTo = y => target.scrollTop = y;
                    } else {
                        target = window;
                        scrolled = () => target.pageYOffset;
                        scrollTo = y => target.scrollTo(0, y);
                    }
                    scroller.startBenchmarking();
                    setTimeout(onFrame, t$4);
                }, delay);
            }

            function getSearchParams() {
                const params = {};
                if (window.location.search) {
                    const paramsArray = window.location.search.substr(1).split('&');
                    paramsArray.forEach(param => {
                        const parts = param.split('=');
                        params[parts[0]] = parts[1] || true;
                    });
                }
                return params;
            }

            function runBenchmarkIfRequested(scrollerNodeOrQuery) {
                setTimeout(() => {
                    const { benchmark, distance, duration, delay } = getSearchParams();
                    registerScroller(scrollerNodeOrQuery);
                    if (benchmark) {
                        runBenchmark(scrollerNodeOrQuery, distance, duration, delay);
                    }    
                }, 0);
            }

            function getScroller(nodeOrQuery) {
                const node = nodeOrQuery instanceof HTMLElement
                    ? nodeOrQuery
                    : document.querySelector(nodeOrQuery);
                if (!node) {
                    throw new Error(`Scroller not found: ${scrollerNodeOrQuery}`);
                }
                return node[scrollerRef];
            }

            function registerScroller(scrollerNodeOrQuery) {
                const scroller = getScroller(scrollerNodeOrQuery);
                if (scroller) {
                    const scrollers = window.scrollers || (window.scrollers = []);
                    if (!scrollers.find(s => s === scroller)) {
                        scrollers.push(scroller);
                    }
                }
            }

            const example = (contacts) => T`<section>${scroll({
            items: contacts,
            renderItem: ({ mediumText }) => T`<p>${mediumText}</p>`,
            layout: Layout1d,
            scrollTarget: window
        })}</section>`;

            (async function go() { 
                const contacts = await(await fetch('../shared/contacts.json')).json();
                V(example(contacts), document.body);
                runBenchmarkIfRequested('section');
            })();

        }
    };
});
