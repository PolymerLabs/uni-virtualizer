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

            /**
             * TODO @straversi: document and test this Layout.
             */
            class Layout1dGrid extends Layout1dBase {
                constructor(config) {
                    super(config);
                    this._rolumns = 1;
                }
                _viewDim2Changed() {
                    this._scheduleLayoutUpdate();
                }
                _itemDim2Changed() {
                    this._scheduleLayoutUpdate();
                }
                _getActiveItems() {
                    const min = Math.max(0, this._scrollPosition - this._overhang);
                    const max = Math.min(this._scrollSize, this._scrollPosition + this._viewDim1 + this._overhang);
                    const firstCow = Math.floor(min / this._delta);
                    const lastCow = Math.ceil(max / this._delta) - 1;
                    this._first = firstCow * this._rolumns;
                    this._last =
                        Math.min(((lastCow + 1) * this._rolumns) - 1, this._totalItems - 1);
                    this._physicalMin = this._delta * firstCow;
                    this._physicalMax = this._delta * (lastCow + 1);
                }
                _getItemPosition(idx) {
                    return {
                        [this._positionDim]: this._spacing + Math.floor(idx / this._rolumns) * this._delta,
                        [this._secondaryPositionDim]: this._spacing +
                            ((idx % this._rolumns) * (this._spacing + this._itemDim2))
                    };
                }
                _updateScrollSize() {
                    this._scrollSize =
                        Math.max(1, Math.ceil(this._totalItems / this._rolumns) * this._delta + this._spacing);
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
            /* global Reflect, Promise */

            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                return extendStatics(d, b);
            };

            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }

            var __assign = function() {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };

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

            class Layout1dSquareGrid extends Layout1dGrid {
                constructor(config) {
                    super(config);
                    if (config.idealSize === undefined) {
                        this._idealSize = 200;
                    }
                }
                set idealSize(px) {
                    if (px !== this._idealSize) {
                        this._idealSize = px;
                        this._scheduleLayoutUpdate();
                    }
                }
                _getItemPosition(idx) {
                    return Object.assign(super._getItemPosition(idx), this._itemSize);
                }
                _updateLayout() {
                    const frolumns = this._viewDim2 / this._idealSize;
                    this._rolumns = frolumns % 1 < 0.5 ? Math.floor(frolumns) : Math.ceil(frolumns);
                    const adjSize = (this._viewDim2 - ((this._rolumns + 1) * this._spacing)) / this._rolumns;
                    if (adjSize !== this._itemSize.width) {
                        this._itemSize = { width: adjSize, height: adjSize };
                        this._spacingChanged = true;
                    }
                }
            }

            /**
             * TODO @straversi: document and test this Layout.
             */
            class Layout1dFlex extends Layout1dBase {
                constructor() {
                    super(...arguments);
                    this._itemSizes = [];
                    this._chunks = [];
                    this._aspectRatios = {};
                    this._numberOfAspectRatiosMeasured = 0;
                    this._config = {};
                    this.listenForChildLoadEvents = true;
                    this.measureChildren = function (e, i) {
                        return {
                            width: i['o_width'] || e.naturalWidth || undefined,
                            height: i['o_height'] || e.naturalHeight || undefined
                        };
                    };
                }
                set idealSize(px) {
                    const _px = Number(px);
                    if (_px !== this._idealSize) {
                        this._idealSize = _px;
                        this._scheduleLayoutUpdate();
                    }
                }
                get idealSize() {
                    return this._idealSize;
                }
                updateItemSizes(sizes) {
                    let dirty;
                    Object.keys(sizes).forEach((key) => {
                        const chunk = this._getChunk(key);
                        const dims = sizes[key];
                        const prevDims = this._itemSizes[key];
                        if (dims.width && dims.height) {
                            if (!prevDims || prevDims.width !== dims.width || prevDims.height !== dims.height) {
                                chunk._dirty = true;
                                dirty = true;
                                this._itemSizes[Number(key)] = sizes[key];
                                this._recordAspectRatio(sizes[key]);
                            }
                        }
                    });
                    if (dirty) {
                        this._scheduleLayoutUpdate();
                    }
                }
                _newChunk() {
                    return {
                        ['_rolumns']: [],
                        _itemPositions: [],
                        _size: 0,
                        _dirty: false
                    };
                }
                _getChunk(idx) {
                    return this._chunks[Math.floor(Number(idx) / this._chunkSize)] || this._newChunk();
                }
                _recordAspectRatio(dims) {
                    if (dims.width && dims.height) {
                        const bucket = Math.round(dims.width / dims.height * 10) / 10;
                        if (this._aspectRatios[bucket]) {
                            this._aspectRatios[bucket]++;
                        }
                        else {
                            this._aspectRatios[bucket] = 1;
                        }
                        this._numberOfAspectRatiosMeasured++;
                    }
                }
                _getRandomAspectRatio() {
                    if (this._numberOfAspectRatiosMeasured === 0) {
                        return { width: 1, height: 1 };
                    }
                    const n = Math.random() * this._numberOfAspectRatiosMeasured;
                    const buckets = Object.keys(this._aspectRatios);
                    let i = -1, m = 0;
                    while (m < n && i < buckets.length) {
                        m += this._aspectRatios[buckets[++i]];
                    }
                    return { width: Number(buckets[i]), height: 1 };
                }
                _viewDim2Changed() {
                    this._scheduleLayoutUpdate();
                }
                _getActiveItems() {
                    const chunk = this._getChunk(0);
                    if (chunk._rolumns.length === 0)
                        return;
                    const scrollPos = Math.max(0, Math.min(this._scrollPosition, this._scrollSize - this._viewDim1));
                    const min = Math.max(0, scrollPos - this._overhang);
                    const max = Math.min(this._scrollSize, scrollPos + this._viewDim1 + this._overhang);
                    const mid = (min + max) / 2;
                    const estMidRolumn = Math.round((mid / this._scrollSize) * chunk._rolumns.length);
                    let idx = estMidRolumn;
                    while (chunk._rolumns[idx]._startPos < min) {
                        idx++;
                    }
                    while (chunk._rolumns[idx]._startPos > min) {
                        idx--;
                    }
                    this._first = chunk._rolumns[idx]._startIdx;
                    this._physicalMin = chunk._rolumns[idx]._startPos;
                    let rolumnMax;
                    while ((rolumnMax = chunk._rolumns[idx]._startPos + chunk._rolumns[idx]._size + (this._spacing * 2)) < max) {
                        idx++;
                    }
                    this._last = chunk._rolumns[idx]._endIdx;
                    this._physicalMax = rolumnMax;
                }
                _getItemPosition(idx) {
                    const chunk = this._getChunk(0);
                    return chunk._itemPositions[idx];
                }
                _getItemSize(idx) {
                    const chunk = this._getChunk(0);
                    const { width, height } = chunk._itemPositions[idx];
                    return { width, height };
                }
                _getNaturalItemDims(idx) {
                    let itemDims = this._itemSizes[idx];
                    if (itemDims === undefined || itemDims.width === undefined || itemDims.height === undefined) {
                        itemDims = this._getRandomAspectRatio();
                    }
                    return itemDims;
                }
                _layOutChunk(startIdx) {
                    const chunk = this._newChunk();
                    let startPos = this._spacing;
                    let idx = 0;
                    let rolumnSize2 = 0;
                    let lastRatio = Infinity;
                    const finishRolumn = (lastIdx) => {
                        const rolumn = {
                            _startIdx: startIdx,
                            _endIdx: lastIdx,
                            _startPos: startPos - this._spacing,
                            _size: 0
                        };
                        chunk._rolumns.push(rolumn);
                        let itemStartPos = this._spacing;
                        for (let i = startIdx; i <= lastIdx; i++) {
                            const pos = chunk._itemPositions[i];
                            pos.width = pos.width * lastRatio;
                            pos.height = pos.height * lastRatio;
                            pos.left = this._positionDim === 'left' ? startPos : itemStartPos;
                            pos.top = this._positionDim === 'top' ? startPos : itemStartPos;
                            itemStartPos += pos[this._secondarySizeDim] + this._spacing;
                        }
                        rolumn._size = chunk._itemPositions[lastIdx][this._sizeDim];
                    };
                    while (idx < this._chunkSize) {
                        const itemDims = this._getNaturalItemDims(idx);
                        const availableSpace = this._viewDim2 - (this._spacing * (idx - startIdx + 2));
                        const itemSize = itemDims[this._sizeDim];
                        const itemSize2 = itemDims[this._secondarySizeDim];
                        const idealScaleFactor = this._idealSize / itemSize;
                        const adjItemSize = idealScaleFactor * itemSize;
                        const adjItemSize2 = idealScaleFactor * itemSize2;
                        chunk._itemPositions[idx] = {
                            left: 0,
                            top: 0,
                            width: (this._sizeDim === 'width' ? adjItemSize : adjItemSize2),
                            height: (this._sizeDim === 'height' ? adjItemSize : adjItemSize2)
                        };
                        const ratio = availableSpace / (rolumnSize2 + adjItemSize2);
                        if (Math.abs(1 - ratio) > Math.abs(1 - lastRatio)) {
                            // rolumn is better without adding this item
                            finishRolumn(idx - 1);
                            startIdx = idx;
                            startPos += (this._idealSize * lastRatio) + this._spacing;
                            lastRatio = (this._viewDim2 - (2 * this._spacing)) / adjItemSize2;
                            rolumnSize2 = adjItemSize2;
                        }
                        else {
                            // add this item and continue
                            rolumnSize2 += adjItemSize2;
                            lastRatio = ratio;
                        }
                        if (idx === this._chunkSize - 1) {
                            finishRolumn(idx);
                        }
                        idx++;
                    }
                    const lastRolumn = chunk._rolumns[chunk._rolumns.length - 1];
                    chunk._size = lastRolumn._startPos + lastRolumn._size;
                    return chunk;
                }
                _updateLayout() {
                    if ( /*this._rolumnStartIdx === undefined ||*/this._viewDim2 === 0)
                        return;
                    this._chunkSize = Math.ceil(2 * (this._viewDim1 * this._viewDim2) / (this._idealSize * this._idealSize));
                    console.log('chunkSize', this._chunkSize);
                    // TODO: An odd place to do this, need to think through the logistics of getting size info to the layout
                    // in all cases
                    // this._itemSizes.length = 100;//this._totalItems;
                    this._chunks[0] = this._layOutChunk(0);
                    // TODO (graynorton): This is a hack to force reflow
                    this._spacingChanged = true;
                }
                _updateScrollSize() {
                    const chunk = this._chunks[0];
                    this._scrollSize = !chunk || chunk._rolumns.length === 0 ? 1 : chunk._size + (2 * this._spacing);
                    // chunk._rolumns[chunk._rolumns.length - 1]._startPos +
                    // chunk._itemPositions[chunk._rolumns.length - 1][this._sizeDim] +
                    // (this._spacing * 2);
                }
            }
            Layout1dFlex._defaultConfig = {
                direction: 'vertical',
                spacing: 0,
                idealSize: 200
            };

            /**
             * MIT license
             */

            // Callback index.
            var count = 0;

            /**
             * JSONP handler
             *
             * Options:
             * - prefix {String} callback prefix (defaults to `__jp`)
             * - param {String} qs parameter (defaults to `callback`)
             * - timeout {Number} how long after the request until a timeout error
             *   is emitted (defaults to `15000`)
             *
             * @param {String} url
             * @param {Object} options optional options
             * @return {Object} Returns a response promise and a cancel handler.
             */
            function jsonp(url, options) {
              options = options || {};

              var prefix = options.prefix || '__jp';
              var param = options.param || 'callback';
              var timeout = options.timeout ? options.timeout : 15000;
              var target = document.getElementsByTagName('script')[0] || document.head;
              var script;
              var timer;
              var cleanup;
              var cancel;
              var promise;
              var noop = function() {};

              // Generate a unique id for the request.
              var id = prefix + (count++);

              cleanup = function() {
                // Remove the script tag.
                if (script && script.parentNode) {
                  script.parentNode.removeChild(script);
                }

                window[id] = noop;

                if (timer) {
                  clearTimeout(timer);
                }
              };

              promise = new Promise(function(resolve, reject) {
                if (timeout) {
                  timer = setTimeout(function() {
                    cleanup();
                    reject(new Error('Timeout'));
                  }, timeout);
                }

                window[id] = function(data) {
                  cleanup();
                  resolve(data);
                };

                // Add querystring component
                url +=
                    (~url.indexOf('?') ? '&' : '?') + param + '=' + encodeURIComponent(id);
                url = url.replace('?&', '?');

                // Create script.
                script = document.createElement('script');
                script.src = url;
                target.parentNode.insertBefore(script, target);

                cancel = function() {
                  if (window[id]) {
                    cleanup();
                    reject(new Error('Canceled'));
                  }
                };
              });

              return {promise: promise, cancel: cancel};
            }

            const apiKey = '241fe87a3ad5e19014a2ed498f4afcb5';

            async function searchFlickr(query, pageSize = 100, pageNum = 1, mock = false) {
              if (mock) {
                const _query = ['fog', 'chocolate'].indexOf(query) !== -1 ? query : 'fog';
                return await(await fetch(`./flickr-mock-data-${_query}.json`)).json();
              }
              const ret =
                  await jsonp(
                      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
              apiKey}&text=${
              query}&per_page=${pageSize}&page=${pageNum}&sort=interestingness-desc&extras=o_dims%2C+url_o&format=json`,
                      {param: 'jsoncallback'})
                      .promise;
              return ret.photos;
            }

            function getUrl(photo) {
              const {farm, server, id, secret} = photo;
              const size = 'm';
              return  `https://farm${farm}.staticflickr.com/${server}/${id}_${
                    secret}_${size}.jpg` ;
            }

            function makeProxy(virtualArray) {
                return new Proxy(virtualArray.array, {
                    get: function(target, property, receiver) {
                        if (property === 'length') {
                            return virtualArray.length;
                        }
                        const n = Number(property);
                        if (!isNaN(n) && Math.round(n) === n) {
                            return target[n] || virtualArray.requestFetch(n);
                        }
                        return target[property];
                    }
                });
            }

            class VirtualArray {
                constructor(config) {
                    Object.assign(this, config);// {pageSize, fetchPage, placeholder, callback} = config;
                    this.length = 10;
                    this.array = new Array(this.length);
                    this.pages = new Object();
                    return makeProxy(this);
                }

                requestFetch(n) {
                    const {pageSize, pages, array, placeholder, fetchPage, callback} = this;
                    const pageNum = Math.ceil((n + 1) / this.pageSize);
                    if (!pages[pageNum]) {
                        pages[pageNum] = (async () => {
                            const res = await fetchPage(pageSize, pageNum);
                            if (res.totalItems !== undefined) {
                                this.length = Number(res.totalItems);
                            }
                            for (let i = 0; i < res.items.length; i++) {
                                this.array[pageSize * (pageNum - 1) + i] = res.items[i];
                            }
                            callback(makeProxy(this));
                        })();
                    }
                    return array[n] = placeholder(n);
                }

            }

            window.VirtualArray = VirtualArray;

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            /**
             * True if the custom elements polyfill is in use.
             */
            const isCEPolyfill = typeof window !== 'undefined' &&
                window.customElements != null &&
                window.customElements.polyfillWrapFlushCallback !==
                    undefined;
            /**
             * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
             * `container`.
             */
            const removeNodes = (container, start, end = null) => {
                while (start !== end) {
                    const n = start.nextSibling;
                    container.removeChild(start);
                    start = n;
                }
            };

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            /**
             * An expression marker with embedded unique key to avoid collision with
             * possible text in templates.
             */
            const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
            /**
             * An expression marker used text-positions, multi-binding attributes, and
             * attributes with markup-like text values.
             */
            const nodeMarker = `<!--${marker}-->`;
            const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
            /**
             * Suffix appended to all bound attribute names.
             */
            const boundAttributeSuffix = '$lit$';
            /**
             * An updatable Template that tracks the location of dynamic parts.
             */
            class Template {
                constructor(result, element) {
                    this.parts = [];
                    this.element = element;
                    const nodesToRemove = [];
                    const stack = [];
                    // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
                    const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
                    // Keeps track of the last index associated with a part. We try to delete
                    // unnecessary nodes, but we never want to associate two different parts
                    // to the same index. They must have a constant node between.
                    let lastPartIndex = 0;
                    let index = -1;
                    let partIndex = 0;
                    const { strings, values: { length } } = result;
                    while (partIndex < length) {
                        const node = walker.nextNode();
                        if (node === null) {
                            // We've exhausted the content inside a nested template element.
                            // Because we still have parts (the outer for-loop), we know:
                            // - There is a template in the stack
                            // - The walker will find a nextNode outside the template
                            walker.currentNode = stack.pop();
                            continue;
                        }
                        index++;
                        if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                            if (node.hasAttributes()) {
                                const attributes = node.attributes;
                                const { length } = attributes;
                                // Per
                                // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                                // attributes are not guaranteed to be returned in document order.
                                // In particular, Edge/IE can return them out of order, so we cannot
                                // assume a correspondence between part index and attribute index.
                                let count = 0;
                                for (let i = 0; i < length; i++) {
                                    if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                                        count++;
                                    }
                                }
                                while (count-- > 0) {
                                    // Get the template literal section leading up to the first
                                    // expression in this attribute
                                    const stringForPart = strings[partIndex];
                                    // Find the attribute name
                                    const name = lastAttributeNameRegex.exec(stringForPart)[2];
                                    // Find the corresponding attribute
                                    // All bound attributes have had a suffix added in
                                    // TemplateResult#getHTML to opt out of special attribute
                                    // handling. To look up the attribute value we also need to add
                                    // the suffix.
                                    const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                                    const attributeValue = node.getAttribute(attributeLookupName);
                                    node.removeAttribute(attributeLookupName);
                                    const statics = attributeValue.split(markerRegex);
                                    this.parts.push({ type: 'attribute', index, name, strings: statics });
                                    partIndex += statics.length - 1;
                                }
                            }
                            if (node.tagName === 'TEMPLATE') {
                                stack.push(node);
                                walker.currentNode = node.content;
                            }
                        }
                        else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                            const data = node.data;
                            if (data.indexOf(marker) >= 0) {
                                const parent = node.parentNode;
                                const strings = data.split(markerRegex);
                                const lastIndex = strings.length - 1;
                                // Generate a new text node for each literal section
                                // These nodes are also used as the markers for node parts
                                for (let i = 0; i < lastIndex; i++) {
                                    let insert;
                                    let s = strings[i];
                                    if (s === '') {
                                        insert = createMarker();
                                    }
                                    else {
                                        const match = lastAttributeNameRegex.exec(s);
                                        if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                            s = s.slice(0, match.index) + match[1] +
                                                match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                                        }
                                        insert = document.createTextNode(s);
                                    }
                                    parent.insertBefore(insert, node);
                                    this.parts.push({ type: 'node', index: ++index });
                                }
                                // If there's no text, we must insert a comment to mark our place.
                                // Else, we can trust it will stick around after cloning.
                                if (strings[lastIndex] === '') {
                                    parent.insertBefore(createMarker(), node);
                                    nodesToRemove.push(node);
                                }
                                else {
                                    node.data = strings[lastIndex];
                                }
                                // We have a part for each match found
                                partIndex += lastIndex;
                            }
                        }
                        else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                            if (node.data === marker) {
                                const parent = node.parentNode;
                                // Add a new marker node to be the startNode of the Part if any of
                                // the following are true:
                                //  * We don't have a previousSibling
                                //  * The previousSibling is already the start of a previous part
                                if (node.previousSibling === null || index === lastPartIndex) {
                                    index++;
                                    parent.insertBefore(createMarker(), node);
                                }
                                lastPartIndex = index;
                                this.parts.push({ type: 'node', index });
                                // If we don't have a nextSibling, keep this node so we have an end.
                                // Else, we can remove it to save future costs.
                                if (node.nextSibling === null) {
                                    node.data = '';
                                }
                                else {
                                    nodesToRemove.push(node);
                                    index--;
                                }
                                partIndex++;
                            }
                            else {
                                let i = -1;
                                while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                                    // Comment node has a binding marker inside, make an inactive part
                                    // The binding won't work, but subsequent bindings will
                                    // TODO (justinfagnani): consider whether it's even worth it to
                                    // make bindings in comments work
                                    this.parts.push({ type: 'node', index: -1 });
                                    partIndex++;
                                }
                            }
                        }
                    }
                    // Remove text binding nodes after the walk to not disturb the TreeWalker
                    for (const n of nodesToRemove) {
                        n.parentNode.removeChild(n);
                    }
                }
            }
            const endsWith = (str, suffix) => {
                const index = str.length - suffix.length;
                return index >= 0 && str.slice(index) === suffix;
            };
            const isTemplatePartActive = (part) => part.index !== -1;
            // Allows `document.createComment('')` to be renamed for a
            // small manual size-savings.
            const createMarker = () => document.createComment('');
            /**
             * This regex extracts the attribute name preceding an attribute-position
             * expression. It does this by matching the syntax allowed for attributes
             * against the string literal directly preceding the expression, assuming that
             * the expression is in an attribute-value position.
             *
             * See attributes in the HTML spec:
             * https://www.w3.org/TR/html5/syntax.html#elements-attributes
             *
             * " \x09\x0a\x0c\x0d" are HTML space characters:
             * https://www.w3.org/TR/html5/infrastructure.html#space-characters
             *
             * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
             * space character except " ".
             *
             * So an attribute is:
             *  * The name: any character except a control character, space character, ('),
             *    ("), ">", "=", or "/"
             *  * Followed by zero or more space characters
             *  * Followed by "="
             *  * Followed by zero or more space characters
             *  * Followed by:
             *    * Any character except space, ('), ("), "<", ">", "=", (`), or
             *    * (") then any non-("), or
             *    * (') then any non-(')
             */
            const lastAttributeNameRegex = 
            // eslint-disable-next-line no-control-regex
            /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
            /**
             * Removes the list of nodes from a Template safely. In addition to removing
             * nodes from the Template, the Template part indices are updated to match
             * the mutated Template DOM.
             *
             * As the template is walked the removal state is tracked and
             * part indices are adjusted as needed.
             *
             * div
             *   div#1 (remove) <-- start removing (removing node is div#1)
             *     div
             *       div#2 (remove)  <-- continue removing (removing node is still div#1)
             *         div
             * div <-- stop removing since previous sibling is the removing node (div#1,
             * removed 4 nodes)
             */
            function removeNodesFromTemplate(template, nodesToRemove) {
                const { element: { content }, parts } = template;
                const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
                let partIndex = nextActiveIndexInTemplateParts(parts);
                let part = parts[partIndex];
                let nodeIndex = -1;
                let removeCount = 0;
                const nodesToRemoveInTemplate = [];
                let currentRemovingNode = null;
                while (walker.nextNode()) {
                    nodeIndex++;
                    const node = walker.currentNode;
                    // End removal if stepped past the removing node
                    if (node.previousSibling === currentRemovingNode) {
                        currentRemovingNode = null;
                    }
                    // A node to remove was found in the template
                    if (nodesToRemove.has(node)) {
                        nodesToRemoveInTemplate.push(node);
                        // Track node we're removing
                        if (currentRemovingNode === null) {
                            currentRemovingNode = node;
                        }
                    }
                    // When removing, increment count by which to adjust subsequent part indices
                    if (currentRemovingNode !== null) {
                        removeCount++;
                    }
                    while (part !== undefined && part.index === nodeIndex) {
                        // If part is in a removed node deactivate it by setting index to -1 or
                        // adjust the index as needed.
                        part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
                        // go to the next active part.
                        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                        part = parts[partIndex];
                    }
                }
                nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
            }
            const countNodes = (node) => {
                let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
                const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
                while (walker.nextNode()) {
                    count++;
                }
                return count;
            };
            const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
                for (let i = startIndex + 1; i < parts.length; i++) {
                    const part = parts[i];
                    if (isTemplatePartActive(part)) {
                        return i;
                    }
                }
                return -1;
            };
            /**
             * Inserts the given node into the Template, optionally before the given
             * refNode. In addition to inserting the node into the Template, the Template
             * part indices are updated to match the mutated Template DOM.
             */
            function insertNodeIntoTemplate(template, node, refNode = null) {
                const { element: { content }, parts } = template;
                // If there's no refNode, then put node at end of template.
                // No part indices need to be shifted in this case.
                if (refNode === null || refNode === undefined) {
                    content.appendChild(node);
                    return;
                }
                const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
                let partIndex = nextActiveIndexInTemplateParts(parts);
                let insertCount = 0;
                let walkerIndex = -1;
                while (walker.nextNode()) {
                    walkerIndex++;
                    const walkerNode = walker.currentNode;
                    if (walkerNode === refNode) {
                        insertCount = countNodes(node);
                        refNode.parentNode.insertBefore(node, refNode);
                    }
                    while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
                        // If we've inserted the node, simply adjust all subsequent parts
                        if (insertCount > 0) {
                            while (partIndex !== -1) {
                                parts[partIndex].index += insertCount;
                                partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                            }
                            return;
                        }
                        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                    }
                }
            }

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const directives = new WeakMap();
            /**
             * Brands a function as a directive factory function so that lit-html will call
             * the function during template rendering, rather than passing as a value.
             *
             * A _directive_ is a function that takes a Part as an argument. It has the
             * signature: `(part: Part) => void`.
             *
             * A directive _factory_ is a function that takes arguments for data and
             * configuration and returns a directive. Users of directive usually refer to
             * the directive factory as the directive. For example, "The repeat directive".
             *
             * Usually a template author will invoke a directive factory in their template
             * with relevant arguments, which will then return a directive function.
             *
             * Here's an example of using the `repeat()` directive factory that takes an
             * array and a function to render an item:
             *
             * ```js
             * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
             * ```
             *
             * When `repeat` is invoked, it returns a directive function that closes over
             * `items` and the template function. When the outer template is rendered, the
             * return directive function is called with the Part for the expression.
             * `repeat` then performs it's custom logic to render multiple items.
             *
             * @param f The directive factory function. Must be a function that returns a
             * function of the signature `(part: Part) => void`. The returned function will
             * be called with the part object.
             *
             * @example
             *
             * import {directive, html} from 'lit-html';
             *
             * const immutable = directive((v) => (part) => {
             *   if (part.value !== v) {
             *     part.setValue(v)
             *   }
             * });
             */
            const directive = (f) => ((...args) => {
                const d = f(...args);
                directives.set(d, true);
                return d;
            });
            const isDirective = (o) => {
                return typeof o === 'function' && directives.has(o);
            };

            /**
             * @license
             * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            /**
             * A sentinel value that signals that a value was handled by a directive and
             * should not be written to the DOM.
             */
            const noChange = {};
            /**
             * A sentinel value that signals a NodePart to fully clear its content.
             */
            const nothing = {};

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            /**
             * An instance of a `Template` that can be attached to the DOM and updated
             * with new values.
             */
            class TemplateInstance {
                constructor(template, processor, options) {
                    this.__parts = [];
                    this.template = template;
                    this.processor = processor;
                    this.options = options;
                }
                update(values) {
                    let i = 0;
                    for (const part of this.__parts) {
                        if (part !== undefined) {
                            part.setValue(values[i]);
                        }
                        i++;
                    }
                    for (const part of this.__parts) {
                        if (part !== undefined) {
                            part.commit();
                        }
                    }
                }
                _clone() {
                    // There are a number of steps in the lifecycle of a template instance's
                    // DOM fragment:
                    //  1. Clone - create the instance fragment
                    //  2. Adopt - adopt into the main document
                    //  3. Process - find part markers and create parts
                    //  4. Upgrade - upgrade custom elements
                    //  5. Update - set node, attribute, property, etc., values
                    //  6. Connect - connect to the document. Optional and outside of this
                    //     method.
                    //
                    // We have a few constraints on the ordering of these steps:
                    //  * We need to upgrade before updating, so that property values will pass
                    //    through any property setters.
                    //  * We would like to process before upgrading so that we're sure that the
                    //    cloned fragment is inert and not disturbed by self-modifying DOM.
                    //  * We want custom elements to upgrade even in disconnected fragments.
                    //
                    // Given these constraints, with full custom elements support we would
                    // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
                    //
                    // But Safari does not implement CustomElementRegistry#upgrade, so we
                    // can not implement that order and still have upgrade-before-update and
                    // upgrade disconnected fragments. So we instead sacrifice the
                    // process-before-upgrade constraint, since in Custom Elements v1 elements
                    // must not modify their light DOM in the constructor. We still have issues
                    // when co-existing with CEv0 elements like Polymer 1, and with polyfills
                    // that don't strictly adhere to the no-modification rule because shadow
                    // DOM, which may be created in the constructor, is emulated by being placed
                    // in the light DOM.
                    //
                    // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
                    // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
                    // in one step.
                    //
                    // The Custom Elements v1 polyfill supports upgrade(), so the order when
                    // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
                    // Connect.
                    const fragment = isCEPolyfill ?
                        this.template.element.content.cloneNode(true) :
                        document.importNode(this.template.element.content, true);
                    const stack = [];
                    const parts = this.template.parts;
                    // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
                    const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
                    let partIndex = 0;
                    let nodeIndex = 0;
                    let part;
                    let node = walker.nextNode();
                    // Loop through all the nodes and parts of a template
                    while (partIndex < parts.length) {
                        part = parts[partIndex];
                        if (!isTemplatePartActive(part)) {
                            this.__parts.push(undefined);
                            partIndex++;
                            continue;
                        }
                        // Progress the tree walker until we find our next part's node.
                        // Note that multiple parts may share the same node (attribute parts
                        // on a single element), so this loop may not run at all.
                        while (nodeIndex < part.index) {
                            nodeIndex++;
                            if (node.nodeName === 'TEMPLATE') {
                                stack.push(node);
                                walker.currentNode = node.content;
                            }
                            if ((node = walker.nextNode()) === null) {
                                // We've exhausted the content inside a nested template element.
                                // Because we still have parts (the outer for-loop), we know:
                                // - There is a template in the stack
                                // - The walker will find a nextNode outside the template
                                walker.currentNode = stack.pop();
                                node = walker.nextNode();
                            }
                        }
                        // We've arrived at our part's node.
                        if (part.type === 'node') {
                            const part = this.processor.handleTextExpression(this.options);
                            part.insertAfterNode(node.previousSibling);
                            this.__parts.push(part);
                        }
                        else {
                            this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
                        }
                        partIndex++;
                    }
                    if (isCEPolyfill) {
                        document.adoptNode(fragment);
                        customElements.upgrade(fragment);
                    }
                    return fragment;
                }
            }

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            /**
             * Our TrustedTypePolicy for HTML which is declared using the html template
             * tag function.
             *
             * That HTML is a developer-authored constant, and is parsed with innerHTML
             * before any untrusted expressions have been mixed in. Therefor it is
             * considered safe by construction.
             */
            const policy = window.trustedTypes &&
                trustedTypes.createPolicy('lit-html', { createHTML: (s) => s });
            const commentMarker = ` ${marker} `;
            /**
             * The return type of `html`, which holds a Template and the values from
             * interpolated expressions.
             */
            class TemplateResult {
                constructor(strings, values, type, processor) {
                    this.strings = strings;
                    this.values = values;
                    this.type = type;
                    this.processor = processor;
                }
                /**
                 * Returns a string of HTML used to create a `<template>` element.
                 */
                getHTML() {
                    const l = this.strings.length - 1;
                    let html = '';
                    let isCommentBinding = false;
                    for (let i = 0; i < l; i++) {
                        const s = this.strings[i];
                        // For each binding we want to determine the kind of marker to insert
                        // into the template source before it's parsed by the browser's HTML
                        // parser. The marker type is based on whether the expression is in an
                        // attribute, text, or comment position.
                        //   * For node-position bindings we insert a comment with the marker
                        //     sentinel as its text content, like <!--{{lit-guid}}-->.
                        //   * For attribute bindings we insert just the marker sentinel for the
                        //     first binding, so that we support unquoted attribute bindings.
                        //     Subsequent bindings can use a comment marker because multi-binding
                        //     attributes must be quoted.
                        //   * For comment bindings we insert just the marker sentinel so we don't
                        //     close the comment.
                        //
                        // The following code scans the template source, but is *not* an HTML
                        // parser. We don't need to track the tree structure of the HTML, only
                        // whether a binding is inside a comment, and if not, if it appears to be
                        // the first binding in an attribute.
                        const commentOpen = s.lastIndexOf('<!--');
                        // We're in comment position if we have a comment open with no following
                        // comment close. Because <-- can appear in an attribute value there can
                        // be false positives.
                        isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                            s.indexOf('-->', commentOpen + 1) === -1;
                        // Check to see if we have an attribute-like sequence preceding the
                        // expression. This can match "name=value" like structures in text,
                        // comments, and attribute values, so there can be false-positives.
                        const attributeMatch = lastAttributeNameRegex.exec(s);
                        if (attributeMatch === null) {
                            // We're only in this branch if we don't have a attribute-like
                            // preceding sequence. For comments, this guards against unusual
                            // attribute values like <div foo="<!--${'bar'}">. Cases like
                            // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                            // below.
                            html += s + (isCommentBinding ? commentMarker : nodeMarker);
                        }
                        else {
                            // For attributes we use just a marker sentinel, and also append a
                            // $lit$ suffix to the name to opt-out of attribute-specific parsing
                            // that IE and Edge do for style and certain SVG attributes.
                            html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                                attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] +
                                marker;
                        }
                    }
                    html += this.strings[l];
                    return html;
                }
                getTemplateElement() {
                    const template = document.createElement('template');
                    let value = this.getHTML();
                    if (policy !== undefined) {
                        // this is secure because `this.strings` is a TemplateStringsArray.
                        // TODO: validate this when
                        // https://github.com/tc39/proposal-array-is-template-object is
                        // implemented.
                        value = policy.createHTML(value);
                    }
                    template.innerHTML = value;
                    return template;
                }
            }

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const isPrimitive = (value) => {
                return (value === null ||
                    !(typeof value === 'object' || typeof value === 'function'));
            };
            const isIterable = (value) => {
                return Array.isArray(value) ||
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    !!(value && value[Symbol.iterator]);
            };
            /**
             * Writes attribute values to the DOM for a group of AttributeParts bound to a
             * single attribute. The value is only set once even if there are multiple parts
             * for an attribute.
             */
            class AttributeCommitter {
                constructor(element, name, strings) {
                    this.dirty = true;
                    this.element = element;
                    this.name = name;
                    this.strings = strings;
                    this.parts = [];
                    for (let i = 0; i < strings.length - 1; i++) {
                        this.parts[i] = this._createPart();
                    }
                }
                /**
                 * Creates a single part. Override this to create a differnt type of part.
                 */
                _createPart() {
                    return new AttributePart(this);
                }
                _getValue() {
                    const strings = this.strings;
                    const l = strings.length - 1;
                    const parts = this.parts;
                    // If we're assigning an attribute via syntax like:
                    //    attr="${foo}"  or  attr=${foo}
                    // but not
                    //    attr="${foo} ${bar}" or attr="${foo} baz"
                    // then we don't want to coerce the attribute value into one long
                    // string. Instead we want to just return the value itself directly,
                    // so that sanitizeDOMValue can get the actual value rather than
                    // String(value)
                    // The exception is if v is an array, in which case we do want to smash
                    // it together into a string without calling String() on the array.
                    //
                    // This also allows trusted values (when using TrustedTypes) being
                    // assigned to DOM sinks without being stringified in the process.
                    if (l === 1 && strings[0] === '' && strings[1] === '') {
                        const v = parts[0].value;
                        if (typeof v === 'symbol') {
                            return String(v);
                        }
                        if (typeof v === 'string' || !isIterable(v)) {
                            return v;
                        }
                    }
                    let text = '';
                    for (let i = 0; i < l; i++) {
                        text += strings[i];
                        const part = parts[i];
                        if (part !== undefined) {
                            const v = part.value;
                            if (isPrimitive(v) || !isIterable(v)) {
                                text += typeof v === 'string' ? v : String(v);
                            }
                            else {
                                for (const t of v) {
                                    text += typeof t === 'string' ? t : String(t);
                                }
                            }
                        }
                    }
                    text += strings[l];
                    return text;
                }
                commit() {
                    if (this.dirty) {
                        this.dirty = false;
                        this.element.setAttribute(this.name, this._getValue());
                    }
                }
            }
            /**
             * A Part that controls all or part of an attribute value.
             */
            class AttributePart {
                constructor(committer) {
                    this.value = undefined;
                    this.committer = committer;
                }
                setValue(value) {
                    if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
                        this.value = value;
                        // If the value is a not a directive, dirty the committer so that it'll
                        // call setAttribute. If the value is a directive, it'll dirty the
                        // committer if it calls setValue().
                        if (!isDirective(value)) {
                            this.committer.dirty = true;
                        }
                    }
                }
                commit() {
                    while (isDirective(this.value)) {
                        const directive = this.value;
                        this.value = noChange;
                        directive(this);
                    }
                    if (this.value === noChange) {
                        return;
                    }
                    this.committer.commit();
                }
            }
            /**
             * A Part that controls a location within a Node tree. Like a Range, NodePart
             * has start and end locations and can set and update the Nodes between those
             * locations.
             *
             * NodeParts support several value types: primitives, Nodes, TemplateResults,
             * as well as arrays and iterables of those types.
             */
            class NodePart {
                constructor(options) {
                    this.value = undefined;
                    this.__pendingValue = undefined;
                    this.options = options;
                }
                /**
                 * Appends this part into a container.
                 *
                 * This part must be empty, as its contents are not automatically moved.
                 */
                appendInto(container) {
                    this.startNode = container.appendChild(createMarker());
                    this.endNode = container.appendChild(createMarker());
                }
                /**
                 * Inserts this part after the `ref` node (between `ref` and `ref`'s next
                 * sibling). Both `ref` and its next sibling must be static, unchanging nodes
                 * such as those that appear in a literal section of a template.
                 *
                 * This part must be empty, as its contents are not automatically moved.
                 */
                insertAfterNode(ref) {
                    this.startNode = ref;
                    this.endNode = ref.nextSibling;
                }
                /**
                 * Appends this part into a parent part.
                 *
                 * This part must be empty, as its contents are not automatically moved.
                 */
                appendIntoPart(part) {
                    part.__insert(this.startNode = createMarker());
                    part.__insert(this.endNode = createMarker());
                }
                /**
                 * Inserts this part after the `ref` part.
                 *
                 * This part must be empty, as its contents are not automatically moved.
                 */
                insertAfterPart(ref) {
                    ref.__insert(this.startNode = createMarker());
                    this.endNode = ref.endNode;
                    ref.endNode = this.startNode;
                }
                setValue(value) {
                    this.__pendingValue = value;
                }
                commit() {
                    if (this.startNode.parentNode === null) {
                        return;
                    }
                    while (isDirective(this.__pendingValue)) {
                        const directive = this.__pendingValue;
                        this.__pendingValue = noChange;
                        directive(this);
                    }
                    const value = this.__pendingValue;
                    if (value === noChange) {
                        return;
                    }
                    if (isPrimitive(value)) {
                        if (value !== this.value) {
                            this.__commitText(value);
                        }
                    }
                    else if (value instanceof TemplateResult) {
                        this.__commitTemplateResult(value);
                    }
                    else if (value instanceof Node) {
                        this.__commitNode(value);
                    }
                    else if (isIterable(value)) {
                        this.__commitIterable(value);
                    }
                    else if (value === nothing) {
                        this.value = nothing;
                        this.clear();
                    }
                    else {
                        // Fallback, will render the string representation
                        this.__commitText(value);
                    }
                }
                __insert(node) {
                    this.endNode.parentNode.insertBefore(node, this.endNode);
                }
                __commitNode(value) {
                    if (this.value === value) {
                        return;
                    }
                    this.clear();
                    this.__insert(value);
                    this.value = value;
                }
                __commitText(value) {
                    const node = this.startNode.nextSibling;
                    value = value == null ? '' : value;
                    // If `value` isn't already a string, we explicitly convert it here in case
                    // it can't be implicitly converted - i.e. it's a symbol.
                    const valueAsString = typeof value === 'string' ? value : String(value);
                    if (node === this.endNode.previousSibling &&
                        node.nodeType === 3 /* Node.TEXT_NODE */) {
                        // If we only have a single text node between the markers, we can just
                        // set its value, rather than replacing it.
                        // TODO(justinfagnani): Can we just check if this.value is primitive?
                        node.data = valueAsString;
                    }
                    else {
                        this.__commitNode(document.createTextNode(valueAsString));
                    }
                    this.value = value;
                }
                __commitTemplateResult(value) {
                    const template = this.options.templateFactory(value);
                    if (this.value instanceof TemplateInstance &&
                        this.value.template === template) {
                        this.value.update(value.values);
                    }
                    else {
                        // Make sure we propagate the template processor from the TemplateResult
                        // so that we use its syntax extension, etc. The template factory comes
                        // from the render function options so that it can control template
                        // caching and preprocessing.
                        const instance = new TemplateInstance(template, value.processor, this.options);
                        const fragment = instance._clone();
                        instance.update(value.values);
                        this.__commitNode(fragment);
                        this.value = instance;
                    }
                }
                __commitIterable(value) {
                    // For an Iterable, we create a new InstancePart per item, then set its
                    // value to the item. This is a little bit of overhead for every item in
                    // an Iterable, but it lets us recurse easily and efficiently update Arrays
                    // of TemplateResults that will be commonly returned from expressions like:
                    // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
                    // If _value is an array, then the previous render was of an
                    // iterable and _value will contain the NodeParts from the previous
                    // render. If _value is not an array, clear this part and make a new
                    // array for NodeParts.
                    if (!Array.isArray(this.value)) {
                        this.value = [];
                        this.clear();
                    }
                    // Lets us keep track of how many items we stamped so we can clear leftover
                    // items from a previous render
                    const itemParts = this.value;
                    let partIndex = 0;
                    let itemPart;
                    for (const item of value) {
                        // Try to reuse an existing part
                        itemPart = itemParts[partIndex];
                        // If no existing part, create a new one
                        if (itemPart === undefined) {
                            itemPart = new NodePart(this.options);
                            itemParts.push(itemPart);
                            if (partIndex === 0) {
                                itemPart.appendIntoPart(this);
                            }
                            else {
                                itemPart.insertAfterPart(itemParts[partIndex - 1]);
                            }
                        }
                        itemPart.setValue(item);
                        itemPart.commit();
                        partIndex++;
                    }
                    if (partIndex < itemParts.length) {
                        // Truncate the parts array so _value reflects the current state
                        itemParts.length = partIndex;
                        this.clear(itemPart && itemPart.endNode);
                    }
                }
                clear(startNode = this.startNode) {
                    removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
                }
            }
            /**
             * Implements a boolean attribute, roughly as defined in the HTML
             * specification.
             *
             * If the value is truthy, then the attribute is present with a value of
             * ''. If the value is falsey, the attribute is removed.
             */
            class BooleanAttributePart {
                constructor(element, name, strings) {
                    this.value = undefined;
                    this.__pendingValue = undefined;
                    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
                        throw new Error('Boolean attributes can only contain a single expression');
                    }
                    this.element = element;
                    this.name = name;
                    this.strings = strings;
                }
                setValue(value) {
                    this.__pendingValue = value;
                }
                commit() {
                    while (isDirective(this.__pendingValue)) {
                        const directive = this.__pendingValue;
                        this.__pendingValue = noChange;
                        directive(this);
                    }
                    if (this.__pendingValue === noChange) {
                        return;
                    }
                    const value = !!this.__pendingValue;
                    if (this.value !== value) {
                        if (value) {
                            this.element.setAttribute(this.name, '');
                        }
                        else {
                            this.element.removeAttribute(this.name);
                        }
                        this.value = value;
                    }
                    this.__pendingValue = noChange;
                }
            }
            /**
             * Sets attribute values for PropertyParts, so that the value is only set once
             * even if there are multiple parts for a property.
             *
             * If an expression controls the whole property value, then the value is simply
             * assigned to the property under control. If there are string literals or
             * multiple expressions, then the strings are expressions are interpolated into
             * a string first.
             */
            class PropertyCommitter extends AttributeCommitter {
                constructor(element, name, strings) {
                    super(element, name, strings);
                    this.single =
                        (strings.length === 2 && strings[0] === '' && strings[1] === '');
                }
                _createPart() {
                    return new PropertyPart(this);
                }
                _getValue() {
                    if (this.single) {
                        return this.parts[0].value;
                    }
                    return super._getValue();
                }
                commit() {
                    if (this.dirty) {
                        this.dirty = false;
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        this.element[this.name] = this._getValue();
                    }
                }
            }
            class PropertyPart extends AttributePart {
            }
            // Detect event listener options support. If the `capture` property is read
            // from the options object, then options are supported. If not, then the third
            // argument to add/removeEventListener is interpreted as the boolean capture
            // value so we should only pass the `capture` property.
            let eventOptionsSupported = false;
            // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
            // blocks right into the body of a module
            (() => {
                try {
                    const options = {
                        get capture() {
                            eventOptionsSupported = true;
                            return false;
                        }
                    };
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    window.addEventListener('test', options, options);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    window.removeEventListener('test', options, options);
                }
                catch (_e) {
                    // event options not supported
                }
            })();
            class EventPart {
                constructor(element, eventName, eventContext) {
                    this.value = undefined;
                    this.__pendingValue = undefined;
                    this.element = element;
                    this.eventName = eventName;
                    this.eventContext = eventContext;
                    this.__boundHandleEvent = (e) => this.handleEvent(e);
                }
                setValue(value) {
                    this.__pendingValue = value;
                }
                commit() {
                    while (isDirective(this.__pendingValue)) {
                        const directive = this.__pendingValue;
                        this.__pendingValue = noChange;
                        directive(this);
                    }
                    if (this.__pendingValue === noChange) {
                        return;
                    }
                    const newListener = this.__pendingValue;
                    const oldListener = this.value;
                    const shouldRemoveListener = newListener == null ||
                        oldListener != null &&
                            (newListener.capture !== oldListener.capture ||
                                newListener.once !== oldListener.once ||
                                newListener.passive !== oldListener.passive);
                    const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
                    if (shouldRemoveListener) {
                        this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
                    }
                    if (shouldAddListener) {
                        this.__options = getOptions(newListener);
                        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
                    }
                    this.value = newListener;
                    this.__pendingValue = noChange;
                }
                handleEvent(event) {
                    if (typeof this.value === 'function') {
                        this.value.call(this.eventContext || this.element, event);
                    }
                    else {
                        this.value.handleEvent(event);
                    }
                }
            }
            // We copy options because of the inconsistent behavior of browsers when reading
            // the third argument of add/removeEventListener. IE11 doesn't support options
            // at all. Chrome 41 only reads `capture` if the argument is an object.
            const getOptions = (o) => o &&
                (eventOptionsSupported ?
                    { capture: o.capture, passive: o.passive, once: o.once } :
                    o.capture);

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            /**
             * The default TemplateFactory which caches Templates keyed on
             * result.type and result.strings.
             */
            function templateFactory(result) {
                let templateCache = templateCaches.get(result.type);
                if (templateCache === undefined) {
                    templateCache = {
                        stringsArray: new WeakMap(),
                        keyString: new Map()
                    };
                    templateCaches.set(result.type, templateCache);
                }
                let template = templateCache.stringsArray.get(result.strings);
                if (template !== undefined) {
                    return template;
                }
                // If the TemplateStringsArray is new, generate a key from the strings
                // This key is shared between all templates with identical content
                const key = result.strings.join(marker);
                // Check if we already have a Template for this key
                template = templateCache.keyString.get(key);
                if (template === undefined) {
                    // If we have not seen this key before, create a new Template
                    template = new Template(result, result.getTemplateElement());
                    // Cache the Template for this key
                    templateCache.keyString.set(key, template);
                }
                // Cache all future queries for this TemplateStringsArray
                templateCache.stringsArray.set(result.strings, template);
                return template;
            }
            const templateCaches = new Map();

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const parts = new WeakMap();
            /**
             * Renders a template result or other value to a container.
             *
             * To update a container with new values, reevaluate the template literal and
             * call `render` with the new result.
             *
             * @param result Any value renderable by NodePart - typically a TemplateResult
             *     created by evaluating a template tag like `html` or `svg`.
             * @param container A DOM parent to render to. The entire contents are either
             *     replaced, or efficiently updated if the same result type was previous
             *     rendered there.
             * @param options RenderOptions for the entire render tree rendered to this
             *     container. Render options must *not* change between renders to the same
             *     container, as those changes will not effect previously rendered DOM.
             */
            const render = (result, container, options) => {
                let part = parts.get(container);
                if (part === undefined) {
                    removeNodes(container, container.firstChild);
                    parts.set(container, part = new NodePart(Object.assign({ templateFactory }, options)));
                    part.appendInto(container);
                }
                part.setValue(result);
                part.commit();
            };

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            /**
             * Creates Parts when a template is instantiated.
             */
            class DefaultTemplateProcessor {
                /**
                 * Create parts for an attribute-position binding, given the event, attribute
                 * name, and string literals.
                 *
                 * @param element The element containing the binding
                 * @param name  The attribute name
                 * @param strings The string literals. There are always at least two strings,
                 *   event for fully-controlled bindings with a single expression.
                 */
                handleAttributeExpressions(element, name, strings, options) {
                    const prefix = name[0];
                    if (prefix === '.') {
                        const committer = new PropertyCommitter(element, name.slice(1), strings);
                        return committer.parts;
                    }
                    if (prefix === '@') {
                        return [new EventPart(element, name.slice(1), options.eventContext)];
                    }
                    if (prefix === '?') {
                        return [new BooleanAttributePart(element, name.slice(1), strings)];
                    }
                    const committer = new AttributeCommitter(element, name, strings);
                    return committer.parts;
                }
                /**
                 * Create parts for a text-position binding.
                 * @param templateFactory
                 */
                handleTextExpression(options) {
                    return new NodePart(options);
                }
            }
            const defaultTemplateProcessor = new DefaultTemplateProcessor();

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            // IMPORTANT: do not change the property name or the assignment expression.
            // This line will be used in regexes to search for lit-html usage.
            // TODO(justinfagnani): inject version number at build time
            if (typeof window !== 'undefined') {
                (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
            }
            /**
             * Interprets a template literal as an HTML template that can efficiently
             * render to and update a container.
             */
            const html = (strings, ...values) => new TemplateResult(strings, values, 'html', defaultTemplateProcessor);

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            // Get a key to lookup in `templateCaches`.
            const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
            let compatibleShadyCSSVersion = true;
            if (typeof window.ShadyCSS === 'undefined') {
                compatibleShadyCSSVersion = false;
            }
            else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
                console.warn(`Incompatible ShadyCSS version detected. ` +
                    `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
                    `@webcomponents/shadycss@1.3.1.`);
                compatibleShadyCSSVersion = false;
            }
            /**
             * Template factory which scopes template DOM using ShadyCSS.
             * @param scopeName {string}
             */
            const shadyTemplateFactory = (scopeName) => (result) => {
                const cacheKey = getTemplateCacheKey(result.type, scopeName);
                let templateCache = templateCaches.get(cacheKey);
                if (templateCache === undefined) {
                    templateCache = {
                        stringsArray: new WeakMap(),
                        keyString: new Map()
                    };
                    templateCaches.set(cacheKey, templateCache);
                }
                let template = templateCache.stringsArray.get(result.strings);
                if (template !== undefined) {
                    return template;
                }
                const key = result.strings.join(marker);
                template = templateCache.keyString.get(key);
                if (template === undefined) {
                    const element = result.getTemplateElement();
                    if (compatibleShadyCSSVersion) {
                        window.ShadyCSS.prepareTemplateDom(element, scopeName);
                    }
                    template = new Template(result, element);
                    templateCache.keyString.set(key, template);
                }
                templateCache.stringsArray.set(result.strings, template);
                return template;
            };
            const TEMPLATE_TYPES = ['html', 'svg'];
            /**
             * Removes all style elements from Templates for the given scopeName.
             */
            const removeStylesFromLitTemplates = (scopeName) => {
                TEMPLATE_TYPES.forEach((type) => {
                    const templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
                    if (templates !== undefined) {
                        templates.keyString.forEach((template) => {
                            const { element: { content } } = template;
                            // IE 11 doesn't support the iterable param Set constructor
                            const styles = new Set();
                            Array.from(content.querySelectorAll('style')).forEach((s) => {
                                styles.add(s);
                            });
                            removeNodesFromTemplate(template, styles);
                        });
                    }
                });
            };
            const shadyRenderSet = new Set();
            /**
             * For the given scope name, ensures that ShadyCSS style scoping is performed.
             * This is done just once per scope name so the fragment and template cannot
             * be modified.
             * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
             * to be scoped and appended to the document
             * (2) removes style elements from all lit-html Templates for this scope name.
             *
             * Note, <style> elements can only be placed into templates for the
             * initial rendering of the scope. If <style> elements are included in templates
             * dynamically rendered to the scope (after the first scope render), they will
             * not be scoped and the <style> will be left in the template and rendered
             * output.
             */
            const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
                shadyRenderSet.add(scopeName);
                // If `renderedDOM` is stamped from a Template, then we need to edit that
                // Template's underlying template element. Otherwise, we create one here
                // to give to ShadyCSS, which still requires one while scoping.
                const templateElement = !!template ? template.element : document.createElement('template');
                // Move styles out of rendered DOM and store.
                const styles = renderedDOM.querySelectorAll('style');
                const { length } = styles;
                // If there are no styles, skip unnecessary work
                if (length === 0) {
                    // Ensure prepareTemplateStyles is called to support adding
                    // styles via `prepareAdoptedCssText` since that requires that
                    // `prepareTemplateStyles` is called.
                    //
                    // ShadyCSS will only update styles containing @apply in the template
                    // given to `prepareTemplateStyles`. If no lit Template was given,
                    // ShadyCSS will not be able to update uses of @apply in any relevant
                    // template. However, this is not a problem because we only create the
                    // template for the purpose of supporting `prepareAdoptedCssText`,
                    // which doesn't support @apply at all.
                    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
                    return;
                }
                const condensedStyle = document.createElement('style');
                // Collect styles into a single style. This helps us make sure ShadyCSS
                // manipulations will not prevent us from being able to fix up template
                // part indices.
                // NOTE: collecting styles is inefficient for browsers but ShadyCSS
                // currently does this anyway. When it does not, this should be changed.
                for (let i = 0; i < length; i++) {
                    const style = styles[i];
                    style.parentNode.removeChild(style);
                    condensedStyle.textContent += style.textContent;
                }
                // Remove styles from nested templates in this scope.
                removeStylesFromLitTemplates(scopeName);
                // And then put the condensed style into the "root" template passed in as
                // `template`.
                const content = templateElement.content;
                if (!!template) {
                    insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
                }
                else {
                    content.insertBefore(condensedStyle, content.firstChild);
                }
                // Note, it's important that ShadyCSS gets the template that `lit-html`
                // will actually render so that it can update the style inside when
                // needed (e.g. @apply native Shadow DOM case).
                window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
                const style = content.querySelector('style');
                if (window.ShadyCSS.nativeShadow && style !== null) {
                    // When in native Shadow DOM, ensure the style created by ShadyCSS is
                    // included in initially rendered output (`renderedDOM`).
                    renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
                }
                else if (!!template) {
                    // When no style is left in the template, parts will be broken as a
                    // result. To fix this, we put back the style node ShadyCSS removed
                    // and then tell lit to remove that node from the template.
                    // There can be no style in the template in 2 cases (1) when Shady DOM
                    // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
                    // is in use ShadyCSS removes the style if it contains no content.
                    // NOTE, ShadyCSS creates its own style so we can safely add/remove
                    // `condensedStyle` here.
                    content.insertBefore(condensedStyle, content.firstChild);
                    const removes = new Set();
                    removes.add(condensedStyle);
                    removeNodesFromTemplate(template, removes);
                }
            };
            /**
             * Extension to the standard `render` method which supports rendering
             * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
             * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
             * or when the webcomponentsjs
             * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
             *
             * Adds a `scopeName` option which is used to scope element DOM and stylesheets
             * when native ShadowDOM is unavailable. The `scopeName` will be added to
             * the class attribute of all rendered DOM. In addition, any style elements will
             * be automatically re-written with this `scopeName` selector and moved out
             * of the rendered DOM and into the document `<head>`.
             *
             * It is common to use this render method in conjunction with a custom element
             * which renders a shadowRoot. When this is done, typically the element's
             * `localName` should be used as the `scopeName`.
             *
             * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
             * custom properties (needed only on older browsers like IE11) and a shim for
             * a deprecated feature called `@apply` that supports applying a set of css
             * custom properties to a given location.
             *
             * Usage considerations:
             *
             * * Part values in `<style>` elements are only applied the first time a given
             * `scopeName` renders. Subsequent changes to parts in style elements will have
             * no effect. Because of this, parts in style elements should only be used for
             * values that will never change, for example parts that set scope-wide theme
             * values or parts which render shared style elements.
             *
             * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
             * custom element's `constructor` is not supported. Instead rendering should
             * either done asynchronously, for example at microtask timing (for example
             * `Promise.resolve()`), or be deferred until the first time the element's
             * `connectedCallback` runs.
             *
             * Usage considerations when using shimmed custom properties or `@apply`:
             *
             * * Whenever any dynamic changes are made which affect
             * css custom properties, `ShadyCSS.styleElement(element)` must be called
             * to update the element. There are two cases when this is needed:
             * (1) the element is connected to a new parent, (2) a class is added to the
             * element that causes it to match different custom properties.
             * To address the first case when rendering a custom element, `styleElement`
             * should be called in the element's `connectedCallback`.
             *
             * * Shimmed custom properties may only be defined either for an entire
             * shadowRoot (for example, in a `:host` rule) or via a rule that directly
             * matches an element with a shadowRoot. In other words, instead of flowing from
             * parent to child as do native css custom properties, shimmed custom properties
             * flow only from shadowRoots to nested shadowRoots.
             *
             * * When using `@apply` mixing css shorthand property names with
             * non-shorthand names (for example `border` and `border-width`) is not
             * supported.
             */
            const render$1 = (result, container, options) => {
                if (!options || typeof options !== 'object' || !options.scopeName) {
                    throw new Error('The `scopeName` option is required.');
                }
                const scopeName = options.scopeName;
                const hasRendered = parts.has(container);
                const needsScoping = compatibleShadyCSSVersion &&
                    container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
                    !!container.host;
                // Handle first render to a scope specially...
                const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
                // On first scope render, render into a fragment; this cannot be a single
                // fragment that is reused since nested renders can occur synchronously.
                const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
                render(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
                // When performing first scope render,
                // (1) We've rendered into a fragment so that there's a chance to
                // `prepareTemplateStyles` before sub-elements hit the DOM
                // (which might cause them to render based on a common pattern of
                // rendering in a custom element's `connectedCallback`);
                // (2) Scope the template with ShadyCSS one time only for this scope.
                // (3) Render the fragment into the container and make sure the
                // container knows its `part` is the one we just rendered. This ensures
                // DOM will be re-used on subsequent renders.
                if (firstScopeRender) {
                    const part = parts.get(renderContainer);
                    parts.delete(renderContainer);
                    // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
                    // that should apply to `renderContainer` even if the rendered value is
                    // not a TemplateInstance. However, it will only insert scoped styles
                    // into the document if `prepareTemplateStyles` has already been called
                    // for the given scope name.
                    const template = part.value instanceof TemplateInstance ?
                        part.value.template :
                        undefined;
                    prepareTemplateStyles(scopeName, renderContainer, template);
                    removeNodes(container, container.firstChild);
                    container.appendChild(renderContainer);
                    parts.set(container, part);
                }
                // After elements have hit the DOM, update styling if this is the
                // initial render to this container.
                // This is needed whenever dynamic changes are made so it would be
                // safest to do every render; however, this would regress performance
                // so we leave it up to the user to call `ShadyCSS.styleElement`
                // for dynamic changes.
                if (!hasRendered && needsScoping) {
                    window.ShadyCSS.styleElement(container.host);
                }
            };

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            var _a;
            /**
             * Use this module if you want to create your own base class extending
             * [[UpdatingElement]].
             * @packageDocumentation
             */
            /*
             * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
             * replaced at compile time by the munged name for object[property]. We cannot
             * alias this function, so we have to use a small shim that has the same
             * behavior when not compiling.
             */
            window.JSCompiler_renameProperty =
                (prop, _obj) => prop;
            const defaultConverter = {
                toAttribute(value, type) {
                    switch (type) {
                        case Boolean:
                            return value ? '' : null;
                        case Object:
                        case Array:
                            // if the value is `null` or `undefined` pass this through
                            // to allow removing/no change behavior.
                            return value == null ? value : JSON.stringify(value);
                    }
                    return value;
                },
                fromAttribute(value, type) {
                    switch (type) {
                        case Boolean:
                            return value !== null;
                        case Number:
                            return value === null ? null : Number(value);
                        case Object:
                        case Array:
                            // Type assert to adhere to Bazel's "must type assert JSON parse" rule.
                            return JSON.parse(value);
                    }
                    return value;
                }
            };
            /**
             * Change function that returns true if `value` is different from `oldValue`.
             * This method is used as the default for a property's `hasChanged` function.
             */
            const notEqual = (value, old) => {
                // This ensures (old==NaN, value==NaN) always returns false
                return old !== value && (old === old || value === value);
            };
            const defaultPropertyDeclaration = {
                attribute: true,
                type: String,
                converter: defaultConverter,
                reflect: false,
                hasChanged: notEqual
            };
            const STATE_HAS_UPDATED = 1;
            const STATE_UPDATE_REQUESTED = 1 << 2;
            const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
            const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
            /**
             * The Closure JS Compiler doesn't currently have good support for static
             * property semantics where "this" is dynamic (e.g.
             * https://github.com/google/closure-compiler/issues/3177 and others) so we use
             * this hack to bypass any rewriting by the compiler.
             */
            const finalized = 'finalized';
            /**
             * Base element class which manages element properties and attributes. When
             * properties change, the `update` method is asynchronously called. This method
             * should be supplied by subclassers to render updates as desired.
             * @noInheritDoc
             */
            class UpdatingElement extends HTMLElement {
                constructor() {
                    super();
                    this.initialize();
                }
                /**
                 * Returns a list of attributes corresponding to the registered properties.
                 * @nocollapse
                 */
                static get observedAttributes() {
                    // note: piggy backing on this to ensure we're finalized.
                    this.finalize();
                    const attributes = [];
                    // Use forEach so this works even if for/of loops are compiled to for loops
                    // expecting arrays
                    this._classProperties.forEach((v, p) => {
                        const attr = this._attributeNameForProperty(p, v);
                        if (attr !== undefined) {
                            this._attributeToPropertyMap.set(attr, p);
                            attributes.push(attr);
                        }
                    });
                    return attributes;
                }
                /**
                 * Ensures the private `_classProperties` property metadata is created.
                 * In addition to `finalize` this is also called in `createProperty` to
                 * ensure the `@property` decorator can add property metadata.
                 */
                /** @nocollapse */
                static _ensureClassProperties() {
                    // ensure private storage for property declarations.
                    if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
                        this._classProperties = new Map();
                        // NOTE: Workaround IE11 not supporting Map constructor argument.
                        const superProperties = Object.getPrototypeOf(this)._classProperties;
                        if (superProperties !== undefined) {
                            superProperties.forEach((v, k) => this._classProperties.set(k, v));
                        }
                    }
                }
                /**
                 * Creates a property accessor on the element prototype if one does not exist
                 * and stores a PropertyDeclaration for the property with the given options.
                 * The property setter calls the property's `hasChanged` property option
                 * or uses a strict identity check to determine whether or not to request
                 * an update.
                 *
                 * This method may be overridden to customize properties; however,
                 * when doing so, it's important to call `super.createProperty` to ensure
                 * the property is setup correctly. This method calls
                 * `getPropertyDescriptor` internally to get a descriptor to install.
                 * To customize what properties do when they are get or set, override
                 * `getPropertyDescriptor`. To customize the options for a property,
                 * implement `createProperty` like this:
                 *
                 * static createProperty(name, options) {
                 *   options = Object.assign(options, {myOption: true});
                 *   super.createProperty(name, options);
                 * }
                 *
                 * @nocollapse
                 */
                static createProperty(name, options = defaultPropertyDeclaration) {
                    // Note, since this can be called by the `@property` decorator which
                    // is called before `finalize`, we ensure storage exists for property
                    // metadata.
                    this._ensureClassProperties();
                    this._classProperties.set(name, options);
                    // Do not generate an accessor if the prototype already has one, since
                    // it would be lost otherwise and that would never be the user's intention;
                    // Instead, we expect users to call `requestUpdate` themselves from
                    // user-defined accessors. Note that if the super has an accessor we will
                    // still overwrite it
                    if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
                        return;
                    }
                    const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
                    const descriptor = this.getPropertyDescriptor(name, key, options);
                    if (descriptor !== undefined) {
                        Object.defineProperty(this.prototype, name, descriptor);
                    }
                }
                /**
                 * Returns a property descriptor to be defined on the given named property.
                 * If no descriptor is returned, the property will not become an accessor.
                 * For example,
                 *
                 *   class MyElement extends LitElement {
                 *     static getPropertyDescriptor(name, key, options) {
                 *       const defaultDescriptor =
                 *           super.getPropertyDescriptor(name, key, options);
                 *       const setter = defaultDescriptor.set;
                 *       return {
                 *         get: defaultDescriptor.get,
                 *         set(value) {
                 *           setter.call(this, value);
                 *           // custom action.
                 *         },
                 *         configurable: true,
                 *         enumerable: true
                 *       }
                 *     }
                 *   }
                 *
                 * @nocollapse
                 */
                static getPropertyDescriptor(name, key, options) {
                    return {
                        // tslint:disable-next-line:no-any no symbol in index
                        get() {
                            return this[key];
                        },
                        set(value) {
                            const oldValue = this[name];
                            this[key] = value;
                            this
                                .requestUpdateInternal(name, oldValue, options);
                        },
                        configurable: true,
                        enumerable: true
                    };
                }
                /**
                 * Returns the property options associated with the given property.
                 * These options are defined with a PropertyDeclaration via the `properties`
                 * object or the `@property` decorator and are registered in
                 * `createProperty(...)`.
                 *
                 * Note, this method should be considered "final" and not overridden. To
                 * customize the options for a given property, override `createProperty`.
                 *
                 * @nocollapse
                 * @final
                 */
                static getPropertyOptions(name) {
                    return this._classProperties && this._classProperties.get(name) ||
                        defaultPropertyDeclaration;
                }
                /**
                 * Creates property accessors for registered properties and ensures
                 * any superclasses are also finalized.
                 * @nocollapse
                 */
                static finalize() {
                    // finalize any superclasses
                    const superCtor = Object.getPrototypeOf(this);
                    if (!superCtor.hasOwnProperty(finalized)) {
                        superCtor.finalize();
                    }
                    this[finalized] = true;
                    this._ensureClassProperties();
                    // initialize Map populated in observedAttributes
                    this._attributeToPropertyMap = new Map();
                    // make any properties
                    // Note, only process "own" properties since this element will inherit
                    // any properties defined on the superClass, and finalization ensures
                    // the entire prototype chain is finalized.
                    if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
                        const props = this.properties;
                        // support symbols in properties (IE11 does not support this)
                        const propKeys = [
                            ...Object.getOwnPropertyNames(props),
                            ...(typeof Object.getOwnPropertySymbols === 'function') ?
                                Object.getOwnPropertySymbols(props) :
                                []
                        ];
                        // This for/of is ok because propKeys is an array
                        for (const p of propKeys) {
                            // note, use of `any` is due to TypeSript lack of support for symbol in
                            // index types
                            // tslint:disable-next-line:no-any no symbol in index
                            this.createProperty(p, props[p]);
                        }
                    }
                }
                /**
                 * Returns the property name for the given attribute `name`.
                 * @nocollapse
                 */
                static _attributeNameForProperty(name, options) {
                    const attribute = options.attribute;
                    return attribute === false ?
                        undefined :
                        (typeof attribute === 'string' ?
                            attribute :
                            (typeof name === 'string' ? name.toLowerCase() : undefined));
                }
                /**
                 * Returns true if a property should request an update.
                 * Called when a property value is set and uses the `hasChanged`
                 * option for the property if present or a strict identity check.
                 * @nocollapse
                 */
                static _valueHasChanged(value, old, hasChanged = notEqual) {
                    return hasChanged(value, old);
                }
                /**
                 * Returns the property value for the given attribute value.
                 * Called via the `attributeChangedCallback` and uses the property's
                 * `converter` or `converter.fromAttribute` property option.
                 * @nocollapse
                 */
                static _propertyValueFromAttribute(value, options) {
                    const type = options.type;
                    const converter = options.converter || defaultConverter;
                    const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
                    return fromAttribute ? fromAttribute(value, type) : value;
                }
                /**
                 * Returns the attribute value for the given property value. If this
                 * returns undefined, the property will *not* be reflected to an attribute.
                 * If this returns null, the attribute will be removed, otherwise the
                 * attribute will be set to the value.
                 * This uses the property's `reflect` and `type.toAttribute` property options.
                 * @nocollapse
                 */
                static _propertyValueToAttribute(value, options) {
                    if (options.reflect === undefined) {
                        return;
                    }
                    const type = options.type;
                    const converter = options.converter;
                    const toAttribute = converter && converter.toAttribute ||
                        defaultConverter.toAttribute;
                    return toAttribute(value, type);
                }
                /**
                 * Performs element initialization. By default captures any pre-set values for
                 * registered properties.
                 */
                initialize() {
                    this._updateState = 0;
                    this._updatePromise =
                        new Promise((res) => this._enableUpdatingResolver = res);
                    this._changedProperties = new Map();
                    this._saveInstanceProperties();
                    // ensures first update will be caught by an early access of
                    // `updateComplete`
                    this.requestUpdateInternal();
                }
                /**
                 * Fixes any properties set on the instance before upgrade time.
                 * Otherwise these would shadow the accessor and break these properties.
                 * The properties are stored in a Map which is played back after the
                 * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
                 * (<=41), properties created for native platform properties like (`id` or
                 * `name`) may not have default values set in the element constructor. On
                 * these browsers native properties appear on instances and therefore their
                 * default value will overwrite any element default (e.g. if the element sets
                 * this.id = 'id' in the constructor, the 'id' will become '' since this is
                 * the native platform default).
                 */
                _saveInstanceProperties() {
                    // Use forEach so this works even if for/of loops are compiled to for loops
                    // expecting arrays
                    this.constructor
                        ._classProperties.forEach((_v, p) => {
                        if (this.hasOwnProperty(p)) {
                            const value = this[p];
                            delete this[p];
                            if (!this._instanceProperties) {
                                this._instanceProperties = new Map();
                            }
                            this._instanceProperties.set(p, value);
                        }
                    });
                }
                /**
                 * Applies previously saved instance properties.
                 */
                _applyInstanceProperties() {
                    // Use forEach so this works even if for/of loops are compiled to for loops
                    // expecting arrays
                    // tslint:disable-next-line:no-any
                    this._instanceProperties.forEach((v, p) => this[p] = v);
                    this._instanceProperties = undefined;
                }
                connectedCallback() {
                    // Ensure first connection completes an update. Updates cannot complete
                    // before connection.
                    this.enableUpdating();
                }
                enableUpdating() {
                    if (this._enableUpdatingResolver !== undefined) {
                        this._enableUpdatingResolver();
                        this._enableUpdatingResolver = undefined;
                    }
                }
                /**
                 * Allows for `super.disconnectedCallback()` in extensions while
                 * reserving the possibility of making non-breaking feature additions
                 * when disconnecting at some point in the future.
                 */
                disconnectedCallback() {
                }
                /**
                 * Synchronizes property values when attributes change.
                 */
                attributeChangedCallback(name, old, value) {
                    if (old !== value) {
                        this._attributeToProperty(name, value);
                    }
                }
                _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
                    const ctor = this.constructor;
                    const attr = ctor._attributeNameForProperty(name, options);
                    if (attr !== undefined) {
                        const attrValue = ctor._propertyValueToAttribute(value, options);
                        // an undefined value does not change the attribute.
                        if (attrValue === undefined) {
                            return;
                        }
                        // Track if the property is being reflected to avoid
                        // setting the property again via `attributeChangedCallback`. Note:
                        // 1. this takes advantage of the fact that the callback is synchronous.
                        // 2. will behave incorrectly if multiple attributes are in the reaction
                        // stack at time of calling. However, since we process attributes
                        // in `update` this should not be possible (or an extreme corner case
                        // that we'd like to discover).
                        // mark state reflecting
                        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
                        if (attrValue == null) {
                            this.removeAttribute(attr);
                        }
                        else {
                            this.setAttribute(attr, attrValue);
                        }
                        // mark state not reflecting
                        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
                    }
                }
                _attributeToProperty(name, value) {
                    // Use tracking info to avoid deserializing attribute value if it was
                    // just set from a property setter.
                    if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
                        return;
                    }
                    const ctor = this.constructor;
                    // Note, hint this as an `AttributeMap` so closure clearly understands
                    // the type; it has issues with tracking types through statics
                    // tslint:disable-next-line:no-unnecessary-type-assertion
                    const propName = ctor._attributeToPropertyMap.get(name);
                    if (propName !== undefined) {
                        const options = ctor.getPropertyOptions(propName);
                        // mark state reflecting
                        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
                        this[propName] =
                            // tslint:disable-next-line:no-any
                            ctor._propertyValueFromAttribute(value, options);
                        // mark state not reflecting
                        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
                    }
                }
                /**
                 * This protected version of `requestUpdate` does not access or return the
                 * `updateComplete` promise. This promise can be overridden and is therefore
                 * not free to access.
                 */
                requestUpdateInternal(name, oldValue, options) {
                    let shouldRequestUpdate = true;
                    // If we have a property key, perform property update steps.
                    if (name !== undefined) {
                        const ctor = this.constructor;
                        options = options || ctor.getPropertyOptions(name);
                        if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                            if (!this._changedProperties.has(name)) {
                                this._changedProperties.set(name, oldValue);
                            }
                            // Add to reflecting properties set.
                            // Note, it's important that every change has a chance to add the
                            // property to `_reflectingProperties`. This ensures setting
                            // attribute + property reflects correctly.
                            if (options.reflect === true &&
                                !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                                if (this._reflectingProperties === undefined) {
                                    this._reflectingProperties = new Map();
                                }
                                this._reflectingProperties.set(name, options);
                            }
                        }
                        else {
                            // Abort the request if the property should not be considered changed.
                            shouldRequestUpdate = false;
                        }
                    }
                    if (!this._hasRequestedUpdate && shouldRequestUpdate) {
                        this._updatePromise = this._enqueueUpdate();
                    }
                }
                /**
                 * Requests an update which is processed asynchronously. This should
                 * be called when an element should update based on some state not triggered
                 * by setting a property. In this case, pass no arguments. It should also be
                 * called when manually implementing a property setter. In this case, pass the
                 * property `name` and `oldValue` to ensure that any configured property
                 * options are honored. Returns the `updateComplete` Promise which is resolved
                 * when the update completes.
                 *
                 * @param name {PropertyKey} (optional) name of requesting property
                 * @param oldValue {any} (optional) old value of requesting property
                 * @returns {Promise} A Promise that is resolved when the update completes.
                 */
                requestUpdate(name, oldValue) {
                    this.requestUpdateInternal(name, oldValue);
                    return this.updateComplete;
                }
                /**
                 * Sets up the element to asynchronously update.
                 */
                async _enqueueUpdate() {
                    this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                    try {
                        // Ensure any previous update has resolved before updating.
                        // This `await` also ensures that property changes are batched.
                        await this._updatePromise;
                    }
                    catch (e) {
                        // Ignore any previous errors. We only care that the previous cycle is
                        // done. Any error should have been handled in the previous update.
                    }
                    const result = this.performUpdate();
                    // If `performUpdate` returns a Promise, we await it. This is done to
                    // enable coordinating updates with a scheduler. Note, the result is
                    // checked to avoid delaying an additional microtask unless we need to.
                    if (result != null) {
                        await result;
                    }
                    return !this._hasRequestedUpdate;
                }
                get _hasRequestedUpdate() {
                    return (this._updateState & STATE_UPDATE_REQUESTED);
                }
                get hasUpdated() {
                    return (this._updateState & STATE_HAS_UPDATED);
                }
                /**
                 * Performs an element update. Note, if an exception is thrown during the
                 * update, `firstUpdated` and `updated` will not be called.
                 *
                 * You can override this method to change the timing of updates. If this
                 * method is overridden, `super.performUpdate()` must be called.
                 *
                 * For instance, to schedule updates to occur just before the next frame:
                 *
                 * ```
                 * protected async performUpdate(): Promise<unknown> {
                 *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
                 *   super.performUpdate();
                 * }
                 * ```
                 */
                performUpdate() {
                    // Abort any update if one is not pending when this is called.
                    // This can happen if `performUpdate` is called early to "flush"
                    // the update.
                    if (!this._hasRequestedUpdate) {
                        return;
                    }
                    // Mixin instance properties once, if they exist.
                    if (this._instanceProperties) {
                        this._applyInstanceProperties();
                    }
                    let shouldUpdate = false;
                    const changedProperties = this._changedProperties;
                    try {
                        shouldUpdate = this.shouldUpdate(changedProperties);
                        if (shouldUpdate) {
                            this.update(changedProperties);
                        }
                        else {
                            this._markUpdated();
                        }
                    }
                    catch (e) {
                        // Prevent `firstUpdated` and `updated` from running when there's an
                        // update exception.
                        shouldUpdate = false;
                        // Ensure element can accept additional updates after an exception.
                        this._markUpdated();
                        throw e;
                    }
                    if (shouldUpdate) {
                        if (!(this._updateState & STATE_HAS_UPDATED)) {
                            this._updateState = this._updateState | STATE_HAS_UPDATED;
                            this.firstUpdated(changedProperties);
                        }
                        this.updated(changedProperties);
                    }
                }
                _markUpdated() {
                    this._changedProperties = new Map();
                    this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
                }
                /**
                 * Returns a Promise that resolves when the element has completed updating.
                 * The Promise value is a boolean that is `true` if the element completed the
                 * update without triggering another update. The Promise result is `false` if
                 * a property was set inside `updated()`. If the Promise is rejected, an
                 * exception was thrown during the update.
                 *
                 * To await additional asynchronous work, override the `_getUpdateComplete`
                 * method. For example, it is sometimes useful to await a rendered element
                 * before fulfilling this Promise. To do this, first await
                 * `super._getUpdateComplete()`, then any subsequent state.
                 *
                 * @returns {Promise} The Promise returns a boolean that indicates if the
                 * update resolved without triggering another update.
                 */
                get updateComplete() {
                    return this._getUpdateComplete();
                }
                /**
                 * Override point for the `updateComplete` promise.
                 *
                 * It is not safe to override the `updateComplete` getter directly due to a
                 * limitation in TypeScript which means it is not possible to call a
                 * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
                 * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
                 * This method should be overridden instead. For example:
                 *
                 *   class MyElement extends LitElement {
                 *     async _getUpdateComplete() {
                 *       await super._getUpdateComplete();
                 *       await this._myChild.updateComplete;
                 *     }
                 *   }
                 * @deprecated Override `getUpdateComplete()` instead for forward
                 *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
                 */
                _getUpdateComplete() {
                    return this.getUpdateComplete();
                }
                /**
                 * Override point for the `updateComplete` promise.
                 *
                 * It is not safe to override the `updateComplete` getter directly due to a
                 * limitation in TypeScript which means it is not possible to call a
                 * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
                 * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
                 * This method should be overridden instead. For example:
                 *
                 *   class MyElement extends LitElement {
                 *     async getUpdateComplete() {
                 *       await super.getUpdateComplete();
                 *       await this._myChild.updateComplete;
                 *     }
                 *   }
                 */
                getUpdateComplete() {
                    return this._updatePromise;
                }
                /**
                 * Controls whether or not `update` should be called when the element requests
                 * an update. By default, this method always returns `true`, but this can be
                 * customized to control when to update.
                 *
                 * @param _changedProperties Map of changed properties with old values
                 */
                shouldUpdate(_changedProperties) {
                    return true;
                }
                /**
                 * Updates the element. This method reflects property values to attributes.
                 * It can be overridden to render and keep updated element DOM.
                 * Setting properties inside this method will *not* trigger
                 * another update.
                 *
                 * @param _changedProperties Map of changed properties with old values
                 */
                update(_changedProperties) {
                    if (this._reflectingProperties !== undefined &&
                        this._reflectingProperties.size > 0) {
                        // Use forEach so this works even if for/of loops are compiled to for
                        // loops expecting arrays
                        this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
                        this._reflectingProperties = undefined;
                    }
                    this._markUpdated();
                }
                /**
                 * Invoked whenever the element is updated. Implement to perform
                 * post-updating tasks via DOM APIs, for example, focusing an element.
                 *
                 * Setting properties inside this method will trigger the element to update
                 * again after this update cycle completes.
                 *
                 * @param _changedProperties Map of changed properties with old values
                 */
                updated(_changedProperties) {
                }
                /**
                 * Invoked when the element is first updated. Implement to perform one time
                 * work on the element after update.
                 *
                 * Setting properties inside this method will trigger the element to update
                 * again after this update cycle completes.
                 *
                 * @param _changedProperties Map of changed properties with old values
                 */
                firstUpdated(_changedProperties) {
                }
            }
            _a = finalized;
            /**
             * Marks class as having finished creating properties.
             */
            UpdatingElement[_a] = true;

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const legacyCustomElement = (tagName, clazz) => {
                window.customElements.define(tagName, clazz);
                // Cast as any because TS doesn't recognize the return type as being a
                // subtype of the decorated class when clazz is typed as
                // `Constructor<HTMLElement>` for some reason.
                // `Constructor<HTMLElement>` is helpful to make sure the decorator is
                // applied to elements however.
                // tslint:disable-next-line:no-any
                return clazz;
            };
            const standardCustomElement = (tagName, descriptor) => {
                const { kind, elements } = descriptor;
                return {
                    kind,
                    elements,
                    // This callback is called once the class is otherwise fully defined
                    finisher(clazz) {
                        window.customElements.define(tagName, clazz);
                    }
                };
            };
            /**
             * Class decorator factory that defines the decorated class as a custom element.
             *
             * ```
             * @customElement('my-element')
             * class MyElement {
             *   render() {
             *     return html``;
             *   }
             * }
             * ```
             * @category Decorator
             * @param tagName The name of the custom element to define.
             */
            const customElement = (tagName) => (classOrDescriptor) => (typeof classOrDescriptor === 'function') ?
                legacyCustomElement(tagName, classOrDescriptor) :
                standardCustomElement(tagName, classOrDescriptor);
            const standardProperty = (options, element) => {
                // When decorating an accessor, pass it through and add property metadata.
                // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
                // stomp over the user's accessor.
                if (element.kind === 'method' && element.descriptor &&
                    !('value' in element.descriptor)) {
                    return Object.assign(Object.assign({}, element), { finisher(clazz) {
                            clazz.createProperty(element.key, options);
                        } });
                }
                else {
                    // createProperty() takes care of defining the property, but we still
                    // must return some kind of descriptor, so return a descriptor for an
                    // unused prototype field. The finisher calls createProperty().
                    return {
                        kind: 'field',
                        key: Symbol(),
                        placement: 'own',
                        descriptor: {},
                        // When @babel/plugin-proposal-decorators implements initializers,
                        // do this instead of the initializer below. See:
                        // https://github.com/babel/babel/issues/9260 extras: [
                        //   {
                        //     kind: 'initializer',
                        //     placement: 'own',
                        //     initializer: descriptor.initializer,
                        //   }
                        // ],
                        initializer() {
                            if (typeof element.initializer === 'function') {
                                this[element.key] = element.initializer.call(this);
                            }
                        },
                        finisher(clazz) {
                            clazz.createProperty(element.key, options);
                        }
                    };
                }
            };
            const legacyProperty = (options, proto, name) => {
                proto.constructor
                    .createProperty(name, options);
            };
            /**
             * A property decorator which creates a LitElement property which reflects a
             * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
             * supplied to configure property features.
             *
             * This decorator should only be used for public fields. Private or protected
             * fields should use the [[`internalProperty`]] decorator.
             *
             * @example
             * ```ts
             * class MyElement {
             *   @property({ type: Boolean })
             *   clicked = false;
             * }
             * ```
             * @category Decorator
             * @ExportDecoratedItems
             */
            function property(options) {
                // tslint:disable-next-line:no-any decorator
                return (protoOrDescriptor, name) => (name !== undefined) ?
                    legacyProperty(options, protoOrDescriptor, name) :
                    standardProperty(options, protoOrDescriptor);
            }
            /**
             * A property decorator that converts a class property into a getter that
             * executes a querySelector on the element's renderRoot.
             *
             * @param selector A DOMString containing one or more selectors to match.
             * @param cache An optional boolean which when true performs the DOM query only
             * once and caches the result.
             *
             * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
             *
             * @example
             *
             * ```ts
             * class MyElement {
             *   @query('#first')
             *   first;
             *
             *   render() {
             *     return html`
             *       <div id="first"></div>
             *       <div id="second"></div>
             *     `;
             *   }
             * }
             * ```
             * @category Decorator
             */
            function query(selector, cache) {
                return (protoOrDescriptor, 
                // tslint:disable-next-line:no-any decorator
                name) => {
                    const descriptor = {
                        get() {
                            return this.renderRoot.querySelector(selector);
                        },
                        enumerable: true,
                        configurable: true,
                    };
                    if (cache) {
                        const prop = name !== undefined ? name : protoOrDescriptor.key;
                        const key = typeof prop === 'symbol' ? Symbol() : `__${prop}`;
                        descriptor.get = function () {
                            if (this[key] === undefined) {
                                (this[key] =
                                    this.renderRoot.querySelector(selector));
                            }
                            return this[key];
                        };
                    }
                    return (name !== undefined) ?
                        legacyQuery(descriptor, protoOrDescriptor, name) :
                        standardQuery(descriptor, protoOrDescriptor);
                };
            }
            const legacyQuery = (descriptor, proto, name) => {
                Object.defineProperty(proto, name, descriptor);
            };
            const standardQuery = (descriptor, element) => ({
                kind: 'method',
                placement: 'prototype',
                key: element.key,
                descriptor,
            });
            const standardEventOptions = (options, element) => {
                return Object.assign(Object.assign({}, element), { finisher(clazz) {
                        Object.assign(clazz.prototype[element.key], options);
                    } });
            };
            const legacyEventOptions = 
            // tslint:disable-next-line:no-any legacy decorator
            (options, proto, name) => {
                Object.assign(proto[name], options);
            };
            /**
             * Adds event listener options to a method used as an event listener in a
             * lit-html template.
             *
             * @param options An object that specifies event listener options as accepted by
             * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
             *
             * Current browsers support the `capture`, `passive`, and `once` options. See:
             * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
             *
             * @example
             * ```ts
             * class MyElement {
             *   clicked = false;
             *
             *   render() {
             *     return html`
             *       <div @click=${this._onClick}`>
             *         <button></button>
             *       </div>
             *     `;
             *   }
             *
             *   @eventOptions({capture: true})
             *   _onClick(e) {
             *     this.clicked = true;
             *   }
             * }
             * ```
             * @category Decorator
             */
            function eventOptions(options) {
                // Return value typed as any to prevent TypeScript from complaining that
                // standard decorator function signature does not match TypeScript decorator
                // signature
                // TODO(kschaaf): unclear why it was only failing on this decorator and not
                // the others
                return ((protoOrDescriptor, name) => (name !== undefined) ?
                    legacyEventOptions(options, protoOrDescriptor, name) :
                    standardEventOptions(options, protoOrDescriptor));
            }

            /**
            @license
            Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
            This code may only be used under the BSD style license found at
            http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
            http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
            found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
            part of the polymer project is also subject to an additional IP rights grant
            found at http://polymer.github.io/PATENTS.txt
            */
            /**
             * Whether the current browser supports `adoptedStyleSheets`.
             */
            const supportsAdoptingStyleSheets = (window.ShadowRoot) &&
                (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) &&
                ('adoptedStyleSheets' in Document.prototype) &&
                ('replace' in CSSStyleSheet.prototype);
            const constructionToken = Symbol();
            class CSSResult {
                constructor(cssText, safeToken) {
                    if (safeToken !== constructionToken) {
                        throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
                    }
                    this.cssText = cssText;
                }
                // Note, this is a getter so that it's lazy. In practice, this means
                // stylesheets are not created until the first element instance is made.
                get styleSheet() {
                    if (this._styleSheet === undefined) {
                        // Note, if `supportsAdoptingStyleSheets` is true then we assume
                        // CSSStyleSheet is constructable.
                        if (supportsAdoptingStyleSheets) {
                            this._styleSheet = new CSSStyleSheet();
                            this._styleSheet.replaceSync(this.cssText);
                        }
                        else {
                            this._styleSheet = null;
                        }
                    }
                    return this._styleSheet;
                }
                toString() {
                    return this.cssText;
                }
            }
            /**
             * Wrap a value for interpolation in a [[`css`]] tagged template literal.
             *
             * This is unsafe because untrusted CSS text can be used to phone home
             * or exfiltrate data to an attacker controlled site. Take care to only use
             * this with trusted input.
             */
            const unsafeCSS = (value) => {
                return new CSSResult(String(value), constructionToken);
            };
            const textFromCSSResult = (value) => {
                if (value instanceof CSSResult) {
                    return value.cssText;
                }
                else if (typeof value === 'number') {
                    return value;
                }
                else {
                    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
                }
            };
            /**
             * Template tag which which can be used with LitElement's [[LitElement.styles |
             * `styles`]] property to set element styles. For security reasons, only literal
             * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
             * may be used inside a template string part.
             */
            const css = (strings, ...values) => {
                const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
                return new CSSResult(cssText, constructionToken);
            };

            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            // IMPORTANT: do not change the property name or the assignment expression.
            // This line will be used in regexes to search for LitElement usage.
            // TODO(justinfagnani): inject version number at build time
            (window['litElementVersions'] || (window['litElementVersions'] = []))
                .push('2.5.1');
            /**
             * Sentinal value used to avoid calling lit-html's render function when
             * subclasses do not implement `render`
             */
            const renderNotImplemented = {};
            /**
             * Base element class that manages element properties and attributes, and
             * renders a lit-html template.
             *
             * To define a component, subclass `LitElement` and implement a
             * `render` method to provide the component's template. Define properties
             * using the [[`properties`]] property or the [[`property`]] decorator.
             */
            class LitElement extends UpdatingElement {
                /**
                 * Return the array of styles to apply to the element.
                 * Override this method to integrate into a style management system.
                 *
                 * @nocollapse
                 */
                static getStyles() {
                    return this.styles;
                }
                /** @nocollapse */
                static _getUniqueStyles() {
                    // Only gather styles once per class
                    if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
                        return;
                    }
                    // Take care not to call `this.getStyles()` multiple times since this
                    // generates new CSSResults each time.
                    // TODO(sorvell): Since we do not cache CSSResults by input, any
                    // shared styles will generate new stylesheet objects, which is wasteful.
                    // This should be addressed when a browser ships constructable
                    // stylesheets.
                    const userStyles = this.getStyles();
                    if (Array.isArray(userStyles)) {
                        // De-duplicate styles preserving the _last_ instance in the set.
                        // This is a performance optimization to avoid duplicated styles that can
                        // occur especially when composing via subclassing.
                        // The last item is kept to try to preserve the cascade order with the
                        // assumption that it's most important that last added styles override
                        // previous styles.
                        const addStyles = (styles, set) => styles.reduceRight((set, s) => 
                        // Note: On IE set.add() does not return the set
                        Array.isArray(s) ? addStyles(s, set) : (set.add(s), set), set);
                        // Array.from does not work on Set in IE, otherwise return
                        // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
                        const set = addStyles(userStyles, new Set());
                        const styles = [];
                        set.forEach((v) => styles.unshift(v));
                        this._styles = styles;
                    }
                    else {
                        this._styles = userStyles === undefined ? [] : [userStyles];
                    }
                    // Ensure that there are no invalid CSSStyleSheet instances here. They are
                    // invalid in two conditions.
                    // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
                    //     this is impossible to check except via .replaceSync or use
                    // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
                    //     false)
                    this._styles = this._styles.map((s) => {
                        if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
                            // Flatten the cssText from the passed constructible stylesheet (or
                            // undetectable non-constructible stylesheet). The user might have
                            // expected to update their stylesheets over time, but the alternative
                            // is a crash.
                            const cssText = Array.prototype.slice.call(s.cssRules)
                                .reduce((css, rule) => css + rule.cssText, '');
                            return unsafeCSS(cssText);
                        }
                        return s;
                    });
                }
                /**
                 * Performs element initialization. By default this calls
                 * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
                 * captures any pre-set values for registered properties.
                 */
                initialize() {
                    super.initialize();
                    this.constructor._getUniqueStyles();
                    this.renderRoot = this.createRenderRoot();
                    // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
                    // element's getRootNode(). While this could be done, we're choosing not to
                    // support this now since it would require different logic around de-duping.
                    if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
                        this.adoptStyles();
                    }
                }
                /**
                 * Returns the node into which the element should render and by default
                 * creates and returns an open shadowRoot. Implement to customize where the
                 * element's DOM is rendered. For example, to render into the element's
                 * childNodes, return `this`.
                 * @returns {Element|DocumentFragment} Returns a node into which to render.
                 */
                createRenderRoot() {
                    return this.attachShadow(this.constructor.shadowRootOptions);
                }
                /**
                 * Applies styling to the element shadowRoot using the [[`styles`]]
                 * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
                 * available and will fallback otherwise. When Shadow DOM is polyfilled,
                 * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
                 * is available but `adoptedStyleSheets` is not, styles are appended to the
                 * end of the `shadowRoot` to [mimic spec
                 * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
                 */
                adoptStyles() {
                    const styles = this.constructor._styles;
                    if (styles.length === 0) {
                        return;
                    }
                    // There are three separate cases here based on Shadow DOM support.
                    // (1) shadowRoot polyfilled: use ShadyCSS
                    // (2) shadowRoot.adoptedStyleSheets available: use it
                    // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
                    // rendering
                    if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
                        window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
                    }
                    else if (supportsAdoptingStyleSheets) {
                        this.renderRoot.adoptedStyleSheets =
                            styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
                    }
                    else {
                        // This must be done after rendering so the actual style insertion is done
                        // in `update`.
                        this._needsShimAdoptedStyleSheets = true;
                    }
                }
                connectedCallback() {
                    super.connectedCallback();
                    // Note, first update/render handles styleElement so we only call this if
                    // connected after first update.
                    if (this.hasUpdated && window.ShadyCSS !== undefined) {
                        window.ShadyCSS.styleElement(this);
                    }
                }
                /**
                 * Updates the element. This method reflects property values to attributes
                 * and calls `render` to render DOM via lit-html. Setting properties inside
                 * this method will *not* trigger another update.
                 * @param _changedProperties Map of changed properties with old values
                 */
                update(changedProperties) {
                    // Setting properties in `render` should not trigger an update. Since
                    // updates are allowed after super.update, it's important to call `render`
                    // before that.
                    const templateResult = this.render();
                    super.update(changedProperties);
                    // If render is not implemented by the component, don't call lit-html render
                    if (templateResult !== renderNotImplemented) {
                        this.constructor
                            .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
                    }
                    // When native Shadow DOM is used but adoptedStyles are not supported,
                    // insert styling after rendering to ensure adoptedStyles have highest
                    // priority.
                    if (this._needsShimAdoptedStyleSheets) {
                        this._needsShimAdoptedStyleSheets = false;
                        this.constructor._styles.forEach((s) => {
                            const style = document.createElement('style');
                            style.textContent = s.cssText;
                            this.renderRoot.appendChild(style);
                        });
                    }
                }
                /**
                 * Invoked on each update to perform rendering tasks. This method may return
                 * any value renderable by lit-html's `NodePart` - typically a
                 * `TemplateResult`. Setting properties inside this method will *not* trigger
                 * the element to update.
                 */
                render() {
                    return renderNotImplemented;
                }
            }
            /**
             * Ensure this class is marked as `finalized` as an optimization ensuring
             * it will not needlessly try to `finalize`.
             *
             * Note this property name is a string to prevent breaking Closure JS Compiler
             * optimizations. See updating-element.ts for more information.
             */
            LitElement['finalized'] = true;
            /**
             * Reference to the underlying library method used to render the element's
             * DOM. By default, points to the `render` method from lit-html's shady-render
             * module.
             *
             * **Most users will never need to touch this property.**
             *
             * This  property should not be confused with the `render` instance method,
             * which should be overridden to define a template for the element.
             *
             * Advanced users creating a new base class based on LitElement can override
             * this property to point to a custom render method with a signature that
             * matches [shady-render's `render`
             * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
             *
             * @nocollapse
             */
            LitElement.render = render$1;
            /** @nocollapse */
            LitElement.shadowRootOptions = { mode: 'open' };

            /**
             * @license
             * Copyright 2016 Google Inc. All rights reserved.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *     http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            (() => {
                var _a, _b, _c;
                /* Symbols for private properties */
                const _blockingElements = Symbol();
                const _alreadyInertElements = Symbol();
                const _topElParents = Symbol();
                const _siblingsToRestore = Symbol();
                const _parentMO = Symbol();
                /* Symbols for private static methods */
                const _topChanged = Symbol();
                const _swapInertedSibling = Symbol();
                const _inertSiblings = Symbol();
                const _restoreInertedSiblings = Symbol();
                const _getParents = Symbol();
                const _getDistributedChildren = Symbol();
                const _isInertable = Symbol();
                const _handleMutations = Symbol();
                class BlockingElementsImpl {
                    constructor() {
                        /**
                         * The blocking elements.
                         */
                        this[_a] = [];
                        /**
                         * Used to keep track of the parents of the top element, from the element
                         * itself up to body. When top changes, the old top might have been removed
                         * from the document, so we need to memoize the inerted parents' siblings
                         * in order to restore their inerteness when top changes.
                         */
                        this[_b] = [];
                        /**
                         * Elements that are already inert before the first blocking element is
                         * pushed.
                         */
                        this[_c] = new Set();
                    }
                    destructor() {
                        // Restore original inertness.
                        this[_restoreInertedSiblings](this[_topElParents]);
                        // Note we don't want to make these properties nullable on the class,
                        // since then we'd need non-null casts in many places. Calling a method on
                        // a BlockingElements instance after calling destructor will result in an
                        // exception.
                        const nullable = this;
                        nullable[_blockingElements] = null;
                        nullable[_topElParents] = null;
                        nullable[_alreadyInertElements] = null;
                    }
                    get top() {
                        const elems = this[_blockingElements];
                        return elems[elems.length - 1] || null;
                    }
                    push(element) {
                        if (!element || element === this.top) {
                            return;
                        }
                        // Remove it from the stack, we'll bring it to the top.
                        this.remove(element);
                        this[_topChanged](element);
                        this[_blockingElements].push(element);
                    }
                    remove(element) {
                        const i = this[_blockingElements].indexOf(element);
                        if (i === -1) {
                            return false;
                        }
                        this[_blockingElements].splice(i, 1);
                        // Top changed only if the removed element was the top element.
                        if (i === this[_blockingElements].length) {
                            this[_topChanged](this.top);
                        }
                        return true;
                    }
                    pop() {
                        const top = this.top;
                        top && this.remove(top);
                        return top;
                    }
                    has(element) {
                        return this[_blockingElements].indexOf(element) !== -1;
                    }
                    /**
                     * Sets `inert` to all document elements except the new top element, its
                     * parents, and its distributed content.
                     */
                    [(_a = _blockingElements, _b = _topElParents, _c = _alreadyInertElements, _topChanged)](newTop) {
                        const toKeepInert = this[_alreadyInertElements];
                        const oldParents = this[_topElParents];
                        // No new top, reset old top if any.
                        if (!newTop) {
                            this[_restoreInertedSiblings](oldParents);
                            toKeepInert.clear();
                            this[_topElParents] = [];
                            return;
                        }
                        const newParents = this[_getParents](newTop);
                        // New top is not contained in the main document!
                        if (newParents[newParents.length - 1].parentNode !== document.body) {
                            throw Error('Non-connected element cannot be a blocking element');
                        }
                        // Cast here because we know we'll call _inertSiblings on newParents
                        // below.
                        this[_topElParents] = newParents;
                        const toSkip = this[_getDistributedChildren](newTop);
                        // No previous top element.
                        if (!oldParents.length) {
                            this[_inertSiblings](newParents, toSkip, toKeepInert);
                            return;
                        }
                        let i = oldParents.length - 1;
                        let j = newParents.length - 1;
                        // Find common parent. Index 0 is the element itself (so stop before it).
                        while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
                            i--;
                            j--;
                        }
                        // If up the parents tree there are 2 elements that are siblings, swap
                        // the inerted sibling.
                        if (oldParents[i] !== newParents[j]) {
                            this[_swapInertedSibling](oldParents[i], newParents[j]);
                        }
                        // Restore old parents siblings inertness.
                        i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i));
                        // Make new parents siblings inert.
                        j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
                    }
                    /**
                     * Swaps inertness between two sibling elements.
                     * Sets the property `inert` over the attribute since the inert spec
                     * doesn't specify if it should be reflected.
                     * https://html.spec.whatwg.org/multipage/interaction.html#inert
                     */
                    [_swapInertedSibling](oldInert, newInert) {
                        const siblingsToRestore = oldInert[_siblingsToRestore];
                        // oldInert is not contained in siblings to restore, so we have to check
                        // if it's inertable and if already inert.
                        if (this[_isInertable](oldInert) && !oldInert.inert) {
                            oldInert.inert = true;
                            siblingsToRestore.add(oldInert);
                        }
                        // If newInert was already between the siblings to restore, it means it is
                        // inertable and must be restored.
                        if (siblingsToRestore.has(newInert)) {
                            newInert.inert = false;
                            siblingsToRestore.delete(newInert);
                        }
                        newInert[_parentMO] = oldInert[_parentMO];
                        newInert[_siblingsToRestore] = siblingsToRestore;
                        oldInert[_parentMO] = undefined;
                        oldInert[_siblingsToRestore] = undefined;
                    }
                    /**
                     * Restores original inertness to the siblings of the elements.
                     * Sets the property `inert` over the attribute since the inert spec
                     * doesn't specify if it should be reflected.
                     * https://html.spec.whatwg.org/multipage/interaction.html#inert
                     */
                    [_restoreInertedSiblings](elements) {
                        for (const element of elements) {
                            const mo = element[_parentMO];
                            mo.disconnect();
                            element[_parentMO] = undefined;
                            const siblings = element[_siblingsToRestore];
                            for (const sibling of siblings) {
                                sibling.inert = false;
                            }
                            element[_siblingsToRestore] = undefined;
                        }
                    }
                    /**
                     * Inerts the siblings of the elements except the elements to skip. Stores
                     * the inerted siblings into the element's symbol `_siblingsToRestore`.
                     * Pass `toKeepInert` to collect the already inert elements.
                     * Sets the property `inert` over the attribute since the inert spec
                     * doesn't specify if it should be reflected.
                     * https://html.spec.whatwg.org/multipage/interaction.html#inert
                     */
                    [_inertSiblings](elements, toSkip, toKeepInert) {
                        for (const element of elements) {
                            // Assume element is not a Document, so it must have a parentNode.
                            const parent = element.parentNode;
                            const children = parent.children;
                            const inertedSiblings = new Set();
                            for (let j = 0; j < children.length; j++) {
                                const sibling = children[j];
                                // Skip the input element, if not inertable or to be skipped.
                                if (sibling === element || !this[_isInertable](sibling) ||
                                    (toSkip && toSkip.has(sibling))) {
                                    continue;
                                }
                                // Should be collected since already inerted.
                                if (toKeepInert && sibling.inert) {
                                    toKeepInert.add(sibling);
                                }
                                else {
                                    sibling.inert = true;
                                    inertedSiblings.add(sibling);
                                }
                            }
                            // Store the siblings that were inerted.
                            element[_siblingsToRestore] = inertedSiblings;
                            // Observe only immediate children mutations on the parent.
                            const mo = new MutationObserver(this[_handleMutations].bind(this));
                            element[_parentMO] = mo;
                            let parentToObserve = parent;
                            // If we're using the ShadyDOM polyfill, then our parent could be a
                            // shady root, which is an object that acts like a ShadowRoot, but isn't
                            // actually a node in the real DOM. Observe the real DOM parent instead.
                            const maybeShadyRoot = parentToObserve;
                            if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
                                parentToObserve = maybeShadyRoot.host;
                            }
                            mo.observe(parentToObserve, {
                                childList: true,
                            });
                        }
                    }
                    /**
                     * Handles newly added/removed nodes by toggling their inertness.
                     * It also checks if the current top Blocking Element has been removed,
                     * notifying and removing it.
                     */
                    [_handleMutations](mutations) {
                        const parents = this[_topElParents];
                        const toKeepInert = this[_alreadyInertElements];
                        for (const mutation of mutations) {
                            // If the target is a shadowRoot, get its host as we skip shadowRoots when
                            // computing _topElParents.
                            const target = mutation.target.host || mutation.target;
                            const idx = target === document.body ?
                                parents.length :
                                parents.indexOf(target);
                            const inertedChild = parents[idx - 1];
                            const inertedSiblings = inertedChild[_siblingsToRestore];
                            // To restore.
                            for (let i = 0; i < mutation.removedNodes.length; i++) {
                                const sibling = mutation.removedNodes[i];
                                if (sibling === inertedChild) {
                                    console.info('Detected removal of the top Blocking Element.');
                                    this.pop();
                                    return;
                                }
                                if (inertedSiblings.has(sibling)) {
                                    sibling.inert = false;
                                    inertedSiblings.delete(sibling);
                                }
                            }
                            // To inert.
                            for (let i = 0; i < mutation.addedNodes.length; i++) {
                                const sibling = mutation.addedNodes[i];
                                if (!this[_isInertable](sibling)) {
                                    continue;
                                }
                                if (toKeepInert && sibling.inert) {
                                    toKeepInert.add(sibling);
                                }
                                else {
                                    sibling.inert = true;
                                    inertedSiblings.add(sibling);
                                }
                            }
                        }
                    }
                    /**
                     * Returns if the element is inertable.
                     */
                    [_isInertable](element) {
                        return false === /^(style|template|script)$/.test(element.localName);
                    }
                    /**
                     * Returns the list of newParents of an element, starting from element
                     * (included) up to `document.body` (excluded).
                     */
                    [_getParents](element) {
                        const parents = [];
                        let current = element;
                        // Stop to body.
                        while (current && current !== document.body) {
                            // Skip shadow roots.
                            if (current.nodeType === Node.ELEMENT_NODE) {
                                parents.push(current);
                            }
                            // ShadowDom v1
                            if (current.assignedSlot) {
                                // Collect slots from deepest slot to top.
                                while (current = current.assignedSlot) {
                                    parents.push(current);
                                }
                                // Continue the search on the top slot.
                                current = parents.pop();
                                continue;
                            }
                            current = current.parentNode ||
                                current.host;
                        }
                        return parents;
                    }
                    /**
                     * Returns the distributed children of the element's shadow root.
                     * Returns null if the element doesn't have a shadow root.
                     */
                    [_getDistributedChildren](element) {
                        const shadowRoot = element.shadowRoot;
                        if (!shadowRoot) {
                            return null;
                        }
                        const result = new Set();
                        let i;
                        let j;
                        let nodes;
                        const slots = shadowRoot.querySelectorAll('slot');
                        if (slots.length && slots[0].assignedNodes) {
                            for (i = 0; i < slots.length; i++) {
                                nodes = slots[i].assignedNodes({
                                    flatten: true,
                                });
                                for (j = 0; j < nodes.length; j++) {
                                    if (nodes[j].nodeType === Node.ELEMENT_NODE) {
                                        result.add(nodes[j]);
                                    }
                                }
                            }
                            // No need to search for <content>.
                        }
                        return result;
                    }
                }
                document.$blockingElements =
                    new BlockingElementsImpl();
            })();

            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            /**
             * This work is licensed under the W3C Software and Document License
             * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
             */

            (function () {
              // Return early if we're not running inside of the browser.
              if (typeof window === 'undefined') {
                return;
              }

              // Convenience function for converting NodeLists.
              /** @type {typeof Array.prototype.slice} */
              var slice = Array.prototype.slice;

              /**
               * IE has a non-standard name for "matches".
               * @type {typeof Element.prototype.matches}
               */
              var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;

              /** @type {string} */
              var _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'details', 'summary', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');

              /**
               * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
               * attribute.
               *
               * Its main functions are:
               *
               * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
               *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
               *   each focusable node in the subtree with the singleton `InertManager` which manages all known
               *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
               *   instance exists for each focusable node which has at least one inert root as an ancestor.
               *
               * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
               *   attribute is removed from the root node). This is handled in the destructor, which calls the
               *   `deregister` method on `InertManager` for each managed inert node.
               */

              var InertRoot = function () {
                /**
                 * @param {!Element} rootElement The Element at the root of the inert subtree.
                 * @param {!InertManager} inertManager The global singleton InertManager object.
                 */
                function InertRoot(rootElement, inertManager) {
                  _classCallCheck(this, InertRoot);

                  /** @type {!InertManager} */
                  this._inertManager = inertManager;

                  /** @type {!Element} */
                  this._rootElement = rootElement;

                  /**
                   * @type {!Set<!InertNode>}
                   * All managed focusable nodes in this InertRoot's subtree.
                   */
                  this._managedNodes = new Set();

                  // Make the subtree hidden from assistive technology
                  if (this._rootElement.hasAttribute('aria-hidden')) {
                    /** @type {?string} */
                    this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
                  } else {
                    this._savedAriaHidden = null;
                  }
                  this._rootElement.setAttribute('aria-hidden', 'true');

                  // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
                  this._makeSubtreeUnfocusable(this._rootElement);

                  // Watch for:
                  // - any additions in the subtree: make them unfocusable too
                  // - any removals from the subtree: remove them from this inert root's managed nodes
                  // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
                  //   element, make that node a managed node.
                  this._observer = new MutationObserver(this._onMutation.bind(this));
                  this._observer.observe(this._rootElement, { attributes: true, childList: true, subtree: true });
                }

                /**
                 * Call this whenever this object is about to become obsolete.  This unwinds all of the state
                 * stored in this object and updates the state of all of the managed nodes.
                 */


                _createClass(InertRoot, [{
                  key: 'destructor',
                  value: function destructor() {
                    this._observer.disconnect();

                    if (this._rootElement) {
                      if (this._savedAriaHidden !== null) {
                        this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
                      } else {
                        this._rootElement.removeAttribute('aria-hidden');
                      }
                    }

                    this._managedNodes.forEach(function (inertNode) {
                      this._unmanageNode(inertNode.node);
                    }, this);

                    // Note we cast the nulls to the ANY type here because:
                    // 1) We want the class properties to be declared as non-null, or else we
                    //    need even more casts throughout this code. All bets are off if an
                    //    instance has been destroyed and a method is called.
                    // 2) We don't want to cast "this", because we want type-aware optimizations
                    //    to know which properties we're setting.
                    this._observer = /** @type {?} */null;
                    this._rootElement = /** @type {?} */null;
                    this._managedNodes = /** @type {?} */null;
                    this._inertManager = /** @type {?} */null;
                  }

                  /**
                   * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
                   */

                }, {
                  key: '_makeSubtreeUnfocusable',


                  /**
                   * @param {!Node} startNode
                   */
                  value: function _makeSubtreeUnfocusable(startNode) {
                    var _this2 = this;

                    composedTreeWalk(startNode, function (node) {
                      return _this2._visitNode(node);
                    });

                    var activeElement = document.activeElement;

                    if (!document.body.contains(startNode)) {
                      // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
                      var node = startNode;
                      /** @type {!ShadowRoot|undefined} */
                      var root = undefined;
                      while (node) {
                        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                          root = /** @type {!ShadowRoot} */node;
                          break;
                        }
                        node = node.parentNode;
                      }
                      if (root) {
                        activeElement = root.activeElement;
                      }
                    }
                    if (startNode.contains(activeElement)) {
                      activeElement.blur();
                      // In IE11, if an element is already focused, and then set to tabindex=-1
                      // calling blur() will not actually move the focus.
                      // To work around this we call focus() on the body instead.
                      if (activeElement === document.activeElement) {
                        document.body.focus();
                      }
                    }
                  }

                  /**
                   * @param {!Node} node
                   */

                }, {
                  key: '_visitNode',
                  value: function _visitNode(node) {
                    if (node.nodeType !== Node.ELEMENT_NODE) {
                      return;
                    }
                    var element = /** @type {!Element} */node;

                    // If a descendant inert root becomes un-inert, its descendants will still be inert because of
                    // this inert root, so all of its managed nodes need to be adopted by this InertRoot.
                    if (element !== this._rootElement && element.hasAttribute('inert')) {
                      this._adoptInertRoot(element);
                    }

                    if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
                      this._manageNode(element);
                    }
                  }

                  /**
                   * Register the given node with this InertRoot and with InertManager.
                   * @param {!Node} node
                   */

                }, {
                  key: '_manageNode',
                  value: function _manageNode(node) {
                    var inertNode = this._inertManager.register(node, this);
                    this._managedNodes.add(inertNode);
                  }

                  /**
                   * Unregister the given node with this InertRoot and with InertManager.
                   * @param {!Node} node
                   */

                }, {
                  key: '_unmanageNode',
                  value: function _unmanageNode(node) {
                    var inertNode = this._inertManager.deregister(node, this);
                    if (inertNode) {
                      this._managedNodes['delete'](inertNode);
                    }
                  }

                  /**
                   * Unregister the entire subtree starting at `startNode`.
                   * @param {!Node} startNode
                   */

                }, {
                  key: '_unmanageSubtree',
                  value: function _unmanageSubtree(startNode) {
                    var _this3 = this;

                    composedTreeWalk(startNode, function (node) {
                      return _this3._unmanageNode(node);
                    });
                  }

                  /**
                   * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
                   * @param {!Element} node
                   */

                }, {
                  key: '_adoptInertRoot',
                  value: function _adoptInertRoot(node) {
                    var inertSubroot = this._inertManager.getInertRoot(node);

                    // During initialisation this inert root may not have been registered yet,
                    // so register it now if need be.
                    if (!inertSubroot) {
                      this._inertManager.setInert(node, true);
                      inertSubroot = this._inertManager.getInertRoot(node);
                    }

                    inertSubroot.managedNodes.forEach(function (savedInertNode) {
                      this._manageNode(savedInertNode.node);
                    }, this);
                  }

                  /**
                   * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
                   * @param {!Array<!MutationRecord>} records
                   * @param {!MutationObserver} self
                   */

                }, {
                  key: '_onMutation',
                  value: function _onMutation(records, self) {
                    records.forEach(function (record) {
                      var target = /** @type {!Element} */record.target;
                      if (record.type === 'childList') {
                        // Manage added nodes
                        slice.call(record.addedNodes).forEach(function (node) {
                          this._makeSubtreeUnfocusable(node);
                        }, this);

                        // Un-manage removed nodes
                        slice.call(record.removedNodes).forEach(function (node) {
                          this._unmanageSubtree(node);
                        }, this);
                      } else if (record.type === 'attributes') {
                        if (record.attributeName === 'tabindex') {
                          // Re-initialise inert node if tabindex changes
                          this._manageNode(target);
                        } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
                          // If a new inert root is added, adopt its managed nodes and make sure it knows about the
                          // already managed nodes from this inert subroot.
                          this._adoptInertRoot(target);
                          var inertSubroot = this._inertManager.getInertRoot(target);
                          this._managedNodes.forEach(function (managedNode) {
                            if (target.contains(managedNode.node)) {
                              inertSubroot._manageNode(managedNode.node);
                            }
                          });
                        }
                      }
                    }, this);
                  }
                }, {
                  key: 'managedNodes',
                  get: function get() {
                    return new Set(this._managedNodes);
                  }

                  /** @return {boolean} */

                }, {
                  key: 'hasSavedAriaHidden',
                  get: function get() {
                    return this._savedAriaHidden !== null;
                  }

                  /** @param {?string} ariaHidden */

                }, {
                  key: 'savedAriaHidden',
                  set: function set(ariaHidden) {
                    this._savedAriaHidden = ariaHidden;
                  }

                  /** @return {?string} */
                  ,
                  get: function get() {
                    return this._savedAriaHidden;
                  }
                }]);

                return InertRoot;
              }();

              /**
               * `InertNode` initialises and manages a single inert node.
               * A node is inert if it is a descendant of one or more inert root elements.
               *
               * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
               * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
               * is intrinsically focusable or not.
               *
               * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
               * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
               * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
               * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
               * or removes the `tabindex` attribute if the element is intrinsically focusable.
               */


              var InertNode = function () {
                /**
                 * @param {!Node} node A focusable element to be made inert.
                 * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
                 */
                function InertNode(node, inertRoot) {
                  _classCallCheck(this, InertNode);

                  /** @type {!Node} */
                  this._node = node;

                  /** @type {boolean} */
                  this._overrodeFocusMethod = false;

                  /**
                   * @type {!Set<!InertRoot>} The set of descendant inert roots.
                   *    If and only if this set becomes empty, this node is no longer inert.
                   */
                  this._inertRoots = new Set([inertRoot]);

                  /** @type {?number} */
                  this._savedTabIndex = null;

                  /** @type {boolean} */
                  this._destroyed = false;

                  // Save any prior tabindex info and make this node untabbable
                  this.ensureUntabbable();
                }

                /**
                 * Call this whenever this object is about to become obsolete.
                 * This makes the managed node focusable again and deletes all of the previously stored state.
                 */


                _createClass(InertNode, [{
                  key: 'destructor',
                  value: function destructor() {
                    this._throwIfDestroyed();

                    if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
                      var element = /** @type {!Element} */this._node;
                      if (this._savedTabIndex !== null) {
                        element.setAttribute('tabindex', this._savedTabIndex);
                      } else {
                        element.removeAttribute('tabindex');
                      }

                      // Use `delete` to restore native focus method.
                      if (this._overrodeFocusMethod) {
                        delete element.focus;
                      }
                    }

                    // See note in InertRoot.destructor for why we cast these nulls to ANY.
                    this._node = /** @type {?} */null;
                    this._inertRoots = /** @type {?} */null;
                    this._destroyed = true;
                  }

                  /**
                   * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
                   * If the object has been destroyed, any attempt to access it will cause an exception.
                   */

                }, {
                  key: '_throwIfDestroyed',


                  /**
                   * Throw if user tries to access destroyed InertNode.
                   */
                  value: function _throwIfDestroyed() {
                    if (this.destroyed) {
                      throw new Error('Trying to access destroyed InertNode');
                    }
                  }

                  /** @return {boolean} */

                }, {
                  key: 'ensureUntabbable',


                  /** Save the existing tabindex value and make the node untabbable and unfocusable */
                  value: function ensureUntabbable() {
                    if (this.node.nodeType !== Node.ELEMENT_NODE) {
                      return;
                    }
                    var element = /** @type {!Element} */this.node;
                    if (matches.call(element, _focusableElementsString)) {
                      if ( /** @type {!HTMLElement} */element.tabIndex === -1 && this.hasSavedTabIndex) {
                        return;
                      }

                      if (element.hasAttribute('tabindex')) {
                        this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
                      }
                      element.setAttribute('tabindex', '-1');
                      if (element.nodeType === Node.ELEMENT_NODE) {
                        element.focus = function () {};
                        this._overrodeFocusMethod = true;
                      }
                    } else if (element.hasAttribute('tabindex')) {
                      this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
                      element.removeAttribute('tabindex');
                    }
                  }

                  /**
                   * Add another inert root to this inert node's set of managing inert roots.
                   * @param {!InertRoot} inertRoot
                   */

                }, {
                  key: 'addInertRoot',
                  value: function addInertRoot(inertRoot) {
                    this._throwIfDestroyed();
                    this._inertRoots.add(inertRoot);
                  }

                  /**
                   * Remove the given inert root from this inert node's set of managing inert roots.
                   * If the set of managing inert roots becomes empty, this node is no longer inert,
                   * so the object should be destroyed.
                   * @param {!InertRoot} inertRoot
                   */

                }, {
                  key: 'removeInertRoot',
                  value: function removeInertRoot(inertRoot) {
                    this._throwIfDestroyed();
                    this._inertRoots['delete'](inertRoot);
                    if (this._inertRoots.size === 0) {
                      this.destructor();
                    }
                  }
                }, {
                  key: 'destroyed',
                  get: function get() {
                    return (/** @type {!InertNode} */this._destroyed
                    );
                  }
                }, {
                  key: 'hasSavedTabIndex',
                  get: function get() {
                    return this._savedTabIndex !== null;
                  }

                  /** @return {!Node} */

                }, {
                  key: 'node',
                  get: function get() {
                    this._throwIfDestroyed();
                    return this._node;
                  }

                  /** @param {?number} tabIndex */

                }, {
                  key: 'savedTabIndex',
                  set: function set(tabIndex) {
                    this._throwIfDestroyed();
                    this._savedTabIndex = tabIndex;
                  }

                  /** @return {?number} */
                  ,
                  get: function get() {
                    this._throwIfDestroyed();
                    return this._savedTabIndex;
                  }
                }]);

                return InertNode;
              }();

              /**
               * InertManager is a per-document singleton object which manages all inert roots and nodes.
               *
               * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
               * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
               * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
               * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
               * is created for each such node, via the `_managedNodes` map.
               */


              var InertManager = function () {
                /**
                 * @param {!Document} document
                 */
                function InertManager(document) {
                  _classCallCheck(this, InertManager);

                  if (!document) {
                    throw new Error('Missing required argument; InertManager needs to wrap a document.');
                  }

                  /** @type {!Document} */
                  this._document = document;

                  /**
                   * All managed nodes known to this InertManager. In a map to allow looking up by Node.
                   * @type {!Map<!Node, !InertNode>}
                   */
                  this._managedNodes = new Map();

                  /**
                   * All inert roots known to this InertManager. In a map to allow looking up by Node.
                   * @type {!Map<!Node, !InertRoot>}
                   */
                  this._inertRoots = new Map();

                  /**
                   * Observer for mutations on `document.body`.
                   * @type {!MutationObserver}
                   */
                  this._observer = new MutationObserver(this._watchForInert.bind(this));

                  // Add inert style.
                  addInertStyle(document.head || document.body || document.documentElement);

                  // Wait for document to be loaded.
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
                  } else {
                    this._onDocumentLoaded();
                  }
                }

                /**
                 * Set whether the given element should be an inert root or not.
                 * @param {!Element} root
                 * @param {boolean} inert
                 */


                _createClass(InertManager, [{
                  key: 'setInert',
                  value: function setInert(root, inert) {
                    if (inert) {
                      if (this._inertRoots.has(root)) {
                        // element is already inert
                        return;
                      }

                      var inertRoot = new InertRoot(root, this);
                      root.setAttribute('inert', '');
                      this._inertRoots.set(root, inertRoot);
                      // If not contained in the document, it must be in a shadowRoot.
                      // Ensure inert styles are added there.
                      if (!this._document.body.contains(root)) {
                        var parent = root.parentNode;
                        while (parent) {
                          if (parent.nodeType === 11) {
                            addInertStyle(parent);
                          }
                          parent = parent.parentNode;
                        }
                      }
                    } else {
                      if (!this._inertRoots.has(root)) {
                        // element is already non-inert
                        return;
                      }

                      var _inertRoot = this._inertRoots.get(root);
                      _inertRoot.destructor();
                      this._inertRoots['delete'](root);
                      root.removeAttribute('inert');
                    }
                  }

                  /**
                   * Get the InertRoot object corresponding to the given inert root element, if any.
                   * @param {!Node} element
                   * @return {!InertRoot|undefined}
                   */

                }, {
                  key: 'getInertRoot',
                  value: function getInertRoot(element) {
                    return this._inertRoots.get(element);
                  }

                  /**
                   * Register the given InertRoot as managing the given node.
                   * In the case where the node has a previously existing inert root, this inert root will
                   * be added to its set of inert roots.
                   * @param {!Node} node
                   * @param {!InertRoot} inertRoot
                   * @return {!InertNode} inertNode
                   */

                }, {
                  key: 'register',
                  value: function register(node, inertRoot) {
                    var inertNode = this._managedNodes.get(node);
                    if (inertNode !== undefined) {
                      // node was already in an inert subtree
                      inertNode.addInertRoot(inertRoot);
                    } else {
                      inertNode = new InertNode(node, inertRoot);
                    }

                    this._managedNodes.set(node, inertNode);

                    return inertNode;
                  }

                  /**
                   * De-register the given InertRoot as managing the given inert node.
                   * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
                   * node from the InertManager's set of managed nodes if it is destroyed.
                   * If the node is not currently managed, this is essentially a no-op.
                   * @param {!Node} node
                   * @param {!InertRoot} inertRoot
                   * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
                   */

                }, {
                  key: 'deregister',
                  value: function deregister(node, inertRoot) {
                    var inertNode = this._managedNodes.get(node);
                    if (!inertNode) {
                      return null;
                    }

                    inertNode.removeInertRoot(inertRoot);
                    if (inertNode.destroyed) {
                      this._managedNodes['delete'](node);
                    }

                    return inertNode;
                  }

                  /**
                   * Callback used when document has finished loading.
                   */

                }, {
                  key: '_onDocumentLoaded',
                  value: function _onDocumentLoaded() {
                    // Find all inert roots in document and make them actually inert.
                    var inertElements = slice.call(this._document.querySelectorAll('[inert]'));
                    inertElements.forEach(function (inertElement) {
                      this.setInert(inertElement, true);
                    }, this);

                    // Comment this out to use programmatic API only.
                    this._observer.observe(this._document.body || this._document.documentElement, { attributes: true, subtree: true, childList: true });
                  }

                  /**
                   * Callback used when mutation observer detects attribute changes.
                   * @param {!Array<!MutationRecord>} records
                   * @param {!MutationObserver} self
                   */

                }, {
                  key: '_watchForInert',
                  value: function _watchForInert(records, self) {
                    var _this = this;
                    records.forEach(function (record) {
                      switch (record.type) {
                        case 'childList':
                          slice.call(record.addedNodes).forEach(function (node) {
                            if (node.nodeType !== Node.ELEMENT_NODE) {
                              return;
                            }
                            var inertElements = slice.call(node.querySelectorAll('[inert]'));
                            if (matches.call(node, '[inert]')) {
                              inertElements.unshift(node);
                            }
                            inertElements.forEach(function (inertElement) {
                              this.setInert(inertElement, true);
                            }, _this);
                          }, _this);
                          break;
                        case 'attributes':
                          if (record.attributeName !== 'inert') {
                            return;
                          }
                          var target = /** @type {!Element} */record.target;
                          var inert = target.hasAttribute('inert');
                          _this.setInert(target, inert);
                          break;
                      }
                    }, this);
                  }
                }]);

                return InertManager;
              }();

              /**
               * Recursively walk the composed tree from |node|.
               * @param {!Node} node
               * @param {(function (!Element))=} callback Callback to be called for each element traversed,
               *     before descending into child nodes.
               * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
               */


              function composedTreeWalk(node, callback, shadowRootAncestor) {
                if (node.nodeType == Node.ELEMENT_NODE) {
                  var element = /** @type {!Element} */node;
                  if (callback) {
                    callback(element);
                  }

                  // Descend into node:
                  // If it has a ShadowRoot, ignore all child elements - these will be picked
                  // up by the <content> or <shadow> elements. Descend straight into the
                  // ShadowRoot.
                  var shadowRoot = /** @type {!HTMLElement} */element.shadowRoot;
                  if (shadowRoot) {
                    composedTreeWalk(shadowRoot, callback);
                    return;
                  }

                  // If it is a <content> element, descend into distributed elements - these
                  // are elements from outside the shadow root which are rendered inside the
                  // shadow DOM.
                  if (element.localName == 'content') {
                    var content = /** @type {!HTMLContentElement} */element;
                    // Verifies if ShadowDom v0 is supported.
                    var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
                    for (var i = 0; i < distributedNodes.length; i++) {
                      composedTreeWalk(distributedNodes[i], callback);
                    }
                    return;
                  }

                  // If it is a <slot> element, descend into assigned nodes - these
                  // are elements from outside the shadow root which are rendered inside the
                  // shadow DOM.
                  if (element.localName == 'slot') {
                    var slot = /** @type {!HTMLSlotElement} */element;
                    // Verify if ShadowDom v1 is supported.
                    var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({ flatten: true }) : [];
                    for (var _i = 0; _i < _distributedNodes.length; _i++) {
                      composedTreeWalk(_distributedNodes[_i], callback);
                    }
                    return;
                  }
                }

                // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
                // element, nor a <shadow> element recurse normally.
                var child = node.firstChild;
                while (child != null) {
                  composedTreeWalk(child, callback);
                  child = child.nextSibling;
                }
              }

              /**
               * Adds a style element to the node containing the inert specific styles
               * @param {!Node} node
               */
              function addInertStyle(node) {
                if (node.querySelector('style#inert-style, link#inert-style')) {
                  return;
                }
                var style = document.createElement('style');
                style.setAttribute('id', 'inert-style');
                style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '  user-select: none;\n' + '}\n';
                node.appendChild(style);
              }

              if (!Element.prototype.hasOwnProperty('inert')) {
                /** @type {!InertManager} */
                var inertManager = new InertManager(document);

                Object.defineProperty(Element.prototype, 'inert', {
                  enumerable: true,
                  /** @this {!Element} */
                  get: function get() {
                    return this.hasAttribute('inert');
                  },
                  /** @this {!Element} */
                  set: function set(inert) {
                    inertManager.setInert(this, inert);
                  }
                });
              }
            })();

            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses = {
                ANIMATE: 'mdc-drawer--animate',
                CLOSING: 'mdc-drawer--closing',
                DISMISSIBLE: 'mdc-drawer--dismissible',
                MODAL: 'mdc-drawer--modal',
                OPEN: 'mdc-drawer--open',
                OPENING: 'mdc-drawer--opening',
                ROOT: 'mdc-drawer',
            };
            var strings = {
                APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
                CLOSE_EVENT: 'MDCDrawer:closed',
                OPEN_EVENT: 'MDCDrawer:opened',
                SCRIM_SELECTOR: '.mdc-drawer-scrim',
            };

            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCFoundation = /** @class */ (function () {
                function MDCFoundation(adapter) {
                    if (adapter === void 0) { adapter = {}; }
                    this.adapter_ = adapter;
                }
                Object.defineProperty(MDCFoundation, "cssClasses", {
                    get: function () {
                        // Classes extending MDCFoundation should implement this method to return an object which exports every
                        // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "strings", {
                    get: function () {
                        // Classes extending MDCFoundation should implement this method to return an object which exports all
                        // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "numbers", {
                    get: function () {
                        // Classes extending MDCFoundation should implement this method to return an object which exports all
                        // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "defaultAdapter", {
                    get: function () {
                        // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
                        // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
                        // validation.
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCFoundation.prototype.init = function () {
                    // Subclasses should override this method to perform initialization routines (registering events, etc.)
                };
                MDCFoundation.prototype.destroy = function () {
                    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
                };
                return MDCFoundation;
            }());

            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCDismissibleDrawerFoundation = /** @class */ (function (_super) {
                __extends(MDCDismissibleDrawerFoundation, _super);
                function MDCDismissibleDrawerFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCDismissibleDrawerFoundation.defaultAdapter, adapter)) || this;
                    _this.animationFrame_ = 0;
                    _this.animationTimer_ = 0;
                    return _this;
                }
                Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
                    get: function () {
                        return strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            hasClass: function () { return false; },
                            elementHasClass: function () { return false; },
                            notifyClose: function () { return undefined; },
                            notifyOpen: function () { return undefined; },
                            saveFocus: function () { return undefined; },
                            restoreFocus: function () { return undefined; },
                            focusActiveNavigationItem: function () { return undefined; },
                            trapFocus: function () { return undefined; },
                            releaseFocus: function () { return undefined; },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCDismissibleDrawerFoundation.prototype.destroy = function () {
                    if (this.animationFrame_) {
                        cancelAnimationFrame(this.animationFrame_);
                    }
                    if (this.animationTimer_) {
                        clearTimeout(this.animationTimer_);
                    }
                };
                /**
                 * Opens the drawer from the closed state.
                 */
                MDCDismissibleDrawerFoundation.prototype.open = function () {
                    var _this = this;
                    if (this.isOpen() || this.isOpening() || this.isClosing()) {
                        return;
                    }
                    this.adapter_.addClass(cssClasses.OPEN);
                    this.adapter_.addClass(cssClasses.ANIMATE);
                    // Wait a frame once display is no longer "none", to establish basis for animation
                    this.runNextAnimationFrame_(function () {
                        _this.adapter_.addClass(cssClasses.OPENING);
                    });
                    this.adapter_.saveFocus();
                };
                /**
                 * Closes the drawer from the open state.
                 */
                MDCDismissibleDrawerFoundation.prototype.close = function () {
                    if (!this.isOpen() || this.isOpening() || this.isClosing()) {
                        return;
                    }
                    this.adapter_.addClass(cssClasses.CLOSING);
                };
                /**
                 * Returns true if the drawer is in the open position.
                 * @return true if drawer is in open state.
                 */
                MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
                    return this.adapter_.hasClass(cssClasses.OPEN);
                };
                /**
                 * Returns true if the drawer is animating open.
                 * @return true if drawer is animating open.
                 */
                MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
                    return this.adapter_.hasClass(cssClasses.OPENING) || this.adapter_.hasClass(cssClasses.ANIMATE);
                };
                /**
                 * Returns true if the drawer is animating closed.
                 * @return true if drawer is animating closed.
                 */
                MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
                    return this.adapter_.hasClass(cssClasses.CLOSING);
                };
                /**
                 * Keydown handler to close drawer when key is escape.
                 */
                MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
                    var keyCode = evt.keyCode, key = evt.key;
                    var isEscape = key === 'Escape' || keyCode === 27;
                    if (isEscape) {
                        this.close();
                    }
                };
                /**
                 * Handles the `transitionend` event when the drawer finishes opening/closing.
                 */
                MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
                    var OPENING = cssClasses.OPENING, CLOSING = cssClasses.CLOSING, OPEN = cssClasses.OPEN, ANIMATE = cssClasses.ANIMATE, ROOT = cssClasses.ROOT;
                    // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.
                    var isRootElement = this.isElement_(evt.target) && this.adapter_.elementHasClass(evt.target, ROOT);
                    if (!isRootElement) {
                        return;
                    }
                    if (this.isClosing()) {
                        this.adapter_.removeClass(OPEN);
                        this.closed_();
                        this.adapter_.restoreFocus();
                        this.adapter_.notifyClose();
                    }
                    else {
                        this.adapter_.focusActiveNavigationItem();
                        this.opened_();
                        this.adapter_.notifyOpen();
                    }
                    this.adapter_.removeClass(ANIMATE);
                    this.adapter_.removeClass(OPENING);
                    this.adapter_.removeClass(CLOSING);
                };
                /**
                 * Extension point for when drawer finishes open animation.
                 */
                MDCDismissibleDrawerFoundation.prototype.opened_ = function () { }; // tslint:disable-line:no-empty
                /**
                 * Extension point for when drawer finishes close animation.
                 */
                MDCDismissibleDrawerFoundation.prototype.closed_ = function () { }; // tslint:disable-line:no-empty
                /**
                 * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
                 */
                MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame_ = function (callback) {
                    var _this = this;
                    cancelAnimationFrame(this.animationFrame_);
                    this.animationFrame_ = requestAnimationFrame(function () {
                        _this.animationFrame_ = 0;
                        clearTimeout(_this.animationTimer_);
                        _this.animationTimer_ = setTimeout(callback, 0);
                    });
                };
                MDCDismissibleDrawerFoundation.prototype.isElement_ = function (element) {
                    // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
                    return Boolean(element.classList);
                };
                return MDCDismissibleDrawerFoundation;
            }(MDCFoundation));

            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            /* istanbul ignore next: subclass is not a branch statement */
            var MDCModalDrawerFoundation = /** @class */ (function (_super) {
                __extends(MDCModalDrawerFoundation, _super);
                function MDCModalDrawerFoundation() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Handles click event on scrim.
                 */
                MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
                    this.close();
                };
                /**
                 * Called when drawer finishes open animation.
                 */
                MDCModalDrawerFoundation.prototype.opened_ = function () {
                    this.adapter_.trapFocus();
                };
                /**
                 * Called when drawer finishes close animation.
                 */
                MDCModalDrawerFoundation.prototype.closed_ = function () {
                    this.adapter_.releaseFocus();
                };
                return MDCModalDrawerFoundation;
            }(MDCDismissibleDrawerFoundation));

            const observer = (observer) => 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (proto, propName) => {
                // if we haven't wrapped `updated` in this class, do so
                if (!proto.constructor._observers) {
                    proto.constructor._observers = new Map();
                    const userUpdated = proto.updated;
                    proto.updated = function (changedProperties) {
                        userUpdated.call(this, changedProperties);
                        changedProperties.forEach((v, k) => {
                            const observer = this.constructor._observers.get(k);
                            if (observer !== undefined) {
                                observer.call(this, this[k], v);
                            }
                        });
                    };
                    // clone any existing observers (superclasses)
                }
                else if (!proto.constructor.hasOwnProperty('_observers')) {
                    const observers = proto.constructor._observers;
                    proto.constructor._observers = new Map();
                    observers.forEach(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (v, k) => proto.constructor._observers.set(k, v));
                }
                // set this method
                proto.constructor._observers.set(propName, observer);
            };

            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            function matches(element, selector) {
                var nativeMatches = element.matches
                    || element.webkitMatchesSelector
                    || element.msMatchesSelector;
                return nativeMatches.call(element, selector);
            }

            /**
            @license
            Copyright 2018 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            function findAssignedElement(slot, selector) {
                for (const node of slot.assignedNodes({ flatten: true })) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const el = node;
                        if (matches(el, selector)) {
                            return el;
                        }
                    }
                }
                return null;
            }
            function addHasRemoveClass(element) {
                return {
                    addClass: (className) => {
                        element.classList.add(className);
                    },
                    removeClass: (className) => {
                        element.classList.remove(className);
                    },
                    hasClass: (className) => element.classList.contains(className),
                };
            }
            let supportsPassive = false;
            const fn = () => { };
            const optionsBlock = {
                get passive() {
                    supportsPassive = true;
                    return false;
                }
            };
            document.addEventListener('x', fn, optionsBlock);
            document.removeEventListener('x', fn);
            /**
             * Do event listeners suport the `passive` option?
             */
            const supportsPassiveEventListener = supportsPassive;

            /**
            @license
            Copyright 2018 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            class BaseElement extends LitElement {
                /**
                 * Create and attach the MDC Foundation to the instance
                 */
                createFoundation() {
                    if (this.mdcFoundation !== undefined) {
                        this.mdcFoundation.destroy();
                    }
                    this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
                    this.mdcFoundation.init();
                }
                firstUpdated() {
                    this.createFoundation();
                }
            }

            /**
             * @license
             * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            // IE11 doesn't support classList on SVG elements, so we emulate it with a Set
            class ClassList {
                constructor(element) {
                    this.classes = new Set();
                    this.changed = false;
                    this.element = element;
                    const classList = (element.getAttribute('class') || '').split(/\s+/);
                    for (const cls of classList) {
                        this.classes.add(cls);
                    }
                }
                add(cls) {
                    this.classes.add(cls);
                    this.changed = true;
                }
                remove(cls) {
                    this.classes.delete(cls);
                    this.changed = true;
                }
                commit() {
                    if (this.changed) {
                        let classString = '';
                        this.classes.forEach((cls) => classString += cls + ' ');
                        this.element.setAttribute('class', classString);
                    }
                }
            }
            /**
             * Stores the ClassInfo object applied to a given AttributePart.
             * Used to unset existing values when a new ClassInfo object is applied.
             */
            const previousClassesCache = new WeakMap();
            /**
             * A directive that applies CSS classes. This must be used in the `class`
             * attribute and must be the only part used in the attribute. It takes each
             * property in the `classInfo` argument and adds the property name to the
             * element's `class` if the property value is truthy; if the property value is
             * falsey, the property name is removed from the element's `class`. For example
             * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
             * @param classInfo {ClassInfo}
             */
            const classMap = directive((classInfo) => (part) => {
                if (!(part instanceof AttributePart) || (part instanceof PropertyPart) ||
                    part.committer.name !== 'class' || part.committer.parts.length > 1) {
                    throw new Error('The `classMap` directive must be used in the `class` attribute ' +
                        'and must be the only part in the attribute.');
                }
                const { committer } = part;
                const { element } = committer;
                let previousClasses = previousClassesCache.get(part);
                if (previousClasses === undefined) {
                    // Write static classes once
                    // Use setAttribute() because className isn't a string on SVG elements
                    element.setAttribute('class', committer.strings.join(' '));
                    previousClassesCache.set(part, previousClasses = new Set());
                }
                const classList = (element.classList || new ClassList(element));
                // Remove old classes that no longer apply
                // We use forEach() instead of for-of so that re don't require down-level
                // iteration.
                previousClasses.forEach((name) => {
                    if (!(name in classInfo)) {
                        classList.remove(name);
                        previousClasses.delete(name);
                    }
                });
                // Add or remove classes based on their classMap value
                for (const name in classInfo) {
                    const value = classInfo[name];
                    if (value != previousClasses.has(name)) {
                        // We explicitly want a loose truthy check of `value` because it seems
                        // more convenient that '' and 0 are skipped.
                        if (value) {
                            classList.add(name);
                            previousClasses.add(name);
                        }
                        else {
                            classList.remove(name);
                            previousClasses.delete(name);
                        }
                    }
                }
                if (typeof classList.commit === 'function') {
                    classList.commit();
                }
            });

            /**
            @license
            Copyright 2018 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            const blockingElements = document.$blockingElements;
            class DrawerBase extends BaseElement {
                constructor() {
                    super(...arguments);
                    this._previousFocus = null;
                    this.open = false;
                    this.hasHeader = false;
                    this.type = '';
                }
                get mdcFoundationClass() {
                    return this.type === 'modal' ? MDCModalDrawerFoundation :
                        MDCDismissibleDrawerFoundation;
                }
                createAdapter() {
                    return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { elementHasClass: (element, className) => element.classList.contains(className), saveFocus: () => {
                            // Note, casting to avoid cumbersome runtime check.
                            this._previousFocus =
                                this.getRootNode().activeElement;
                        }, restoreFocus: () => {
                            const previousFocus = this._previousFocus && this._previousFocus.focus;
                            if (previousFocus) {
                                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                this._previousFocus.focus();
                            }
                        }, notifyClose: () => {
                            this.open = false;
                            this.dispatchEvent(new Event(strings.CLOSE_EVENT, { bubbles: true, cancelable: true }));
                        }, notifyOpen: () => {
                            this.open = true;
                            this.dispatchEvent(new Event(strings.OPEN_EVENT, { bubbles: true, cancelable: true }));
                        }, 
                        // TODO(sorvell): Implement list focusing integration.
                        focusActiveNavigationItem: () => { }, trapFocus: () => {
                            blockingElements.push(this);
                            this.appContent.inert = true;
                        }, releaseFocus: () => {
                            blockingElements.remove(this);
                            this.appContent.inert = false;
                        } });
                }
                _handleScrimClick() {
                    if (this.mdcFoundation instanceof MDCModalDrawerFoundation) {
                        this.mdcFoundation.handleScrimClick();
                    }
                }
                render() {
                    const dismissible = this.type === 'dismissible' || this.type === 'modal';
                    const modal = this.type === 'modal';
                    const header = this.hasHeader ? html `<div class="mdc-drawer__header"><h3 class="mdc-drawer__title"><slot name="title"></slot></h3><h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6><slot name="header"></slot></div>` :
                        '';
                    return html `<aside class="mdc-drawer ${classMap({
            'mdc-drawer--dismissible': dismissible,
            'mdc-drawer--modal': modal
        })}">${header}<div class="mdc-drawer__content"><slot></slot></div></aside>${modal ? html `<div class="mdc-drawer-scrim" @click="${this._handleScrimClick}"></div>` :
            ''}<div class="mdc-drawer-app-content"><slot name="appContent"></slot></div>`;
                }
                // note, we avoid calling `super.firstUpdated()` to control when
                // `createFoundation()` is called.
                firstUpdated() {
                    this.mdcRoot.addEventListener('keydown', (e) => this.mdcFoundation.handleKeydown(e));
                    this.mdcRoot.addEventListener('transitionend', (e) => this.mdcFoundation.handleTransitionEnd(e));
                }
                updated(changedProperties) {
                    if (changedProperties.has('type')) {
                        this.createFoundation();
                    }
                }
            }
            __decorate([
                query('.mdc-drawer')
            ], DrawerBase.prototype, "mdcRoot", void 0);
            __decorate([
                query('.mdc-drawer-app-content')
            ], DrawerBase.prototype, "appContent", void 0);
            __decorate([
                observer(function (value) {
                    if (this.type === '') {
                        return;
                    }
                    if (value) {
                        this.mdcFoundation.open();
                    }
                    else {
                        this.mdcFoundation.close();
                    }
                }),
                property({ type: Boolean, reflect: true })
            ], DrawerBase.prototype, "open", void 0);
            __decorate([
                property({ type: Boolean })
            ], DrawerBase.prototype, "hasHeader", void 0);
            __decorate([
                property({ reflect: true })
            ], DrawerBase.prototype, "type", void 0);

            /**
            @license
            Copyright 2018 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            const style = css `.mdc-drawer{border-color:rgba(0,0,0,.12);background-color:#fff;border-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer .mdc-drawer__title{color:rgba(0,0,0,.87)}.mdc-drawer .mdc-list-group__subheader{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-list-item__graphic{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-list-item{color:rgba(0,0,0,.87)}.mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-list-item--activated{color:rgba(98,0,238,.87)}.mdc-drawer[dir=rtl],[dir=rtl] .mdc-drawer{border-radius:0}.mdc-drawer .mdc-list-item{border-radius:4px}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl],[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:0;margin-right:256px}.mdc-drawer[dir=rtl],[dir=rtl] .mdc-drawer{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-list-item{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.375rem;font-weight:500;letter-spacing:.0071428571em;text-decoration:inherit;text-transform:inherit;height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-list-group__subheader{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-list-divider{margin:3px 0 4px 0}.mdc-drawer .mdc-list-item__graphic,.mdc-drawer .mdc-list-item__text{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}.mdc-drawer--animate[dir=rtl],[dir=rtl] .mdc-drawer--animate{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}.mdc-drawer--opening[dir=rtl],[dir=rtl] .mdc-drawer--opening{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:.2s}.mdc-drawer--closing[dir=rtl],[dir=rtl] .mdc-drawer--closing{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}.mdc-drawer--dismissible[dir=rtl],[dir=rtl] .mdc-drawer--dismissible{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}.mdc-drawer-app-content[dir=rtl],[dir=rtl] .mdc-drawer-app-content{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0,0,0,.32)}.mdc-drawer--modal[dir=rtl],[dir=rtl] .mdc-drawer--modal{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:.2s;opacity:0}.mdc-drawer-app-content{overflow:auto}:host{display:flex;height:100%}`;

            let Drawer = class Drawer extends DrawerBase {
            };
            Drawer.styles = style;
            Drawer = __decorate([
                customElement('mwc-drawer')
            ], Drawer);

            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses$1 = {
                FIXED_CLASS: 'mdc-top-app-bar--fixed',
                FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
                SHORT_CLASS: 'mdc-top-app-bar--short',
                SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
                SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
            };
            var numbers = {
                DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
                MAX_TOP_APP_BAR_HEIGHT: 128,
            };
            var strings$1 = {
                ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
                NAVIGATION_EVENT: 'MDCTopAppBar:nav',
                NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
                ROOT_SELECTOR: '.mdc-top-app-bar',
                TITLE_SELECTOR: '.mdc-top-app-bar__title',
            };

            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCTopAppBarBaseFoundation = /** @class */ (function (_super) {
                __extends(MDCTopAppBarBaseFoundation, _super);
                /* istanbul ignore next: optional argument is not a branch statement */
                function MDCTopAppBarBaseFoundation(adapter) {
                    return _super.call(this, __assign({}, MDCTopAppBarBaseFoundation.defaultAdapter, adapter)) || this;
                }
                Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
                    get: function () {
                        return strings$1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses$1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
                    get: function () {
                        return numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            hasClass: function () { return false; },
                            setStyle: function () { return undefined; },
                            getTopAppBarHeight: function () { return 0; },
                            notifyNavigationIconClicked: function () { return undefined; },
                            getViewportScrollY: function () { return 0; },
                            getTotalActionItems: function () { return 0; },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                /** Other variants of TopAppBar foundation overrides this method */
                MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function () { }; // tslint:disable-line:no-empty
                /** Other variants of TopAppBar foundation overrides this method */
                MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function () { }; // tslint:disable-line:no-empty
                MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function () {
                    this.adapter_.notifyNavigationIconClicked();
                };
                return MDCTopAppBarBaseFoundation;
            }(MDCFoundation));

            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var INITIAL_VALUE = 0;
            var MDCTopAppBarFoundation = /** @class */ (function (_super) {
                __extends(MDCTopAppBarFoundation, _super);
                /* istanbul ignore next: optional argument is not a branch statement */
                function MDCTopAppBarFoundation(adapter) {
                    var _this = _super.call(this, adapter) || this;
                    /**
                     * Indicates if the top app bar was docked in the previous scroll handler iteration.
                     */
                    _this.wasDocked_ = true;
                    /**
                     * Indicates if the top app bar is docked in the fully shown position.
                     */
                    _this.isDockedShowing_ = true;
                    /**
                     * Variable for current scroll position of the top app bar
                     */
                    _this.currentAppBarOffsetTop_ = 0;
                    /**
                     * Used to prevent the top app bar from being scrolled out of view during resize events
                     */
                    _this.isCurrentlyBeingResized_ = false;
                    /**
                     * The timeout that's used to throttle the resize events
                     */
                    _this.resizeThrottleId_ = INITIAL_VALUE;
                    /**
                     * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
                     */
                    _this.resizeDebounceId_ = INITIAL_VALUE;
                    _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();
                    _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();
                    return _this;
                }
                MDCTopAppBarFoundation.prototype.destroy = function () {
                    _super.prototype.destroy.call(this);
                    this.adapter_.setStyle('top', '');
                };
                /**
                 * Scroll handler for the default scroll behavior of the top app bar.
                 * @override
                 */
                MDCTopAppBarFoundation.prototype.handleTargetScroll = function () {
                    var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
                    var diff = currentScrollPosition - this.lastScrollPosition_;
                    this.lastScrollPosition_ = currentScrollPosition;
                    // If the window is being resized the lastScrollPosition_ needs to be updated but the
                    // current scroll of the top app bar should stay in the same position.
                    if (!this.isCurrentlyBeingResized_) {
                        this.currentAppBarOffsetTop_ -= diff;
                        if (this.currentAppBarOffsetTop_ > 0) {
                            this.currentAppBarOffsetTop_ = 0;
                        }
                        else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
                            this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
                        }
                        this.moveTopAppBar_();
                    }
                };
                /**
                 * Top app bar resize handler that throttle/debounce functions that execute updates.
                 * @override
                 */
                MDCTopAppBarFoundation.prototype.handleWindowResize = function () {
                    var _this = this;
                    // Throttle resize events 10 p/s
                    if (!this.resizeThrottleId_) {
                        this.resizeThrottleId_ = setTimeout(function () {
                            _this.resizeThrottleId_ = INITIAL_VALUE;
                            _this.throttledResizeHandler_();
                        }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
                    }
                    this.isCurrentlyBeingResized_ = true;
                    if (this.resizeDebounceId_) {
                        clearTimeout(this.resizeDebounceId_);
                    }
                    this.resizeDebounceId_ = setTimeout(function () {
                        _this.handleTargetScroll();
                        _this.isCurrentlyBeingResized_ = false;
                        _this.resizeDebounceId_ = INITIAL_VALUE;
                    }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
                };
                /**
                 * Function to determine if the DOM needs to update.
                 */
                MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
                    var offscreenBoundaryTop = -this.topAppBarHeight_;
                    var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
                    var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
                    var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
                    // If it's partially showing, it can't be docked.
                    if (partiallyShowing) {
                        this.wasDocked_ = false;
                    }
                    else {
                        // Not previously docked and not partially showing, it's now docked.
                        if (!this.wasDocked_) {
                            this.wasDocked_ = true;
                            return true;
                        }
                        else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
                            this.isDockedShowing_ = hasAnyPixelsOnscreen;
                            return true;
                        }
                    }
                    return partiallyShowing;
                };
                /**
                 * Function to move the top app bar if needed.
                 */
                MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
                    if (this.checkForUpdate_()) {
                        // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
                        // so the top app bar doesn't show if the window resizes and the new height > the old height.
                        var offset = this.currentAppBarOffsetTop_;
                        if (Math.abs(offset) >= this.topAppBarHeight_) {
                            offset = -numbers.MAX_TOP_APP_BAR_HEIGHT;
                        }
                        this.adapter_.setStyle('top', offset + 'px');
                    }
                };
                /**
                 * Throttled function that updates the top app bar scrolled values if the
                 * top app bar height changes.
                 */
                MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
                    var currentHeight = this.adapter_.getTopAppBarHeight();
                    if (this.topAppBarHeight_ !== currentHeight) {
                        this.wasDocked_ = false;
                        // Since the top app bar has a different height depending on the screen width, this
                        // will ensure that the top app bar remains in the correct location if
                        // completely hidden and a resize makes the top app bar a different height.
                        this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
                        this.topAppBarHeight_ = currentHeight;
                    }
                    this.handleTargetScroll();
                };
                return MDCTopAppBarFoundation;
            }(MDCTopAppBarBaseFoundation));

            const passiveEventOptionsIfSupported = supportsPassiveEventListener ? { passive: true } : undefined;
            class TopAppBarBaseBase extends BaseElement {
                constructor() {
                    super(...arguments);
                    this.mdcFoundationClass = MDCTopAppBarBaseFoundation;
                    this.centerTitle = false;
                    this.handleTargetScroll = () => {
                        this.mdcFoundation.handleTargetScroll();
                    };
                    this.handleNavigationClick = () => {
                        this.mdcFoundation.handleNavigationClick();
                    };
                }
                get scrollTarget() {
                    return this._scrollTarget || window;
                }
                set scrollTarget(value) {
                    const old = this.scrollTarget;
                    this._scrollTarget = value;
                    this.updateRootPosition();
                    this.requestUpdate('scrollTarget', old);
                }
                updateRootPosition() {
                    if (this.mdcRoot) {
                        const windowScroller = this.scrollTarget === window;
                        // we add support for top-app-bar's tied to an element scroller.
                        this.mdcRoot.style.position = windowScroller ? '' : 'absolute';
                    }
                }
                render() {
                    // clang-format off
                    let title = html `<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;
                    if (this.centerTitle) {
                        title = html `<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${title}</section>`;
                    }
                    // clang-format on
                    return html `<header class="mdc-top-app-bar ${classMap(this.barClasses())}"><div class="mdc-top-app-bar__row"><section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation"><slot name="navigationIcon" @click="${this.handleNavigationClick}"></slot>${this.centerTitle ? null : title}</section>${this.centerTitle ? title : null}<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar"><slot name="actionItems"></slot></section></div></header><div class="${classMap(this.contentClasses())}"><slot></slot></div>`;
                }
                createAdapter() {
                    return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { setStyle: (property, value) => this.mdcRoot.style.setProperty(property, value), getTopAppBarHeight: () => this.mdcRoot.clientHeight, notifyNavigationIconClicked: () => {
                            this.dispatchEvent(new Event(strings$1.NAVIGATION_EVENT, { bubbles: true, cancelable: true }));
                        }, getViewportScrollY: () => this.scrollTarget instanceof Window ?
                            this.scrollTarget.pageYOffset :
                            this.scrollTarget.scrollTop, getTotalActionItems: () => this._actionItemsSlot
                            .assignedNodes({ flatten: true })
                            .length });
                }
                registerListeners() {
                    this.scrollTarget.addEventListener('scroll', this.handleTargetScroll, passiveEventOptionsIfSupported);
                }
                unregisterListeners() {
                    this.scrollTarget.removeEventListener('scroll', this.handleTargetScroll);
                }
                firstUpdated() {
                    super.firstUpdated();
                    this.updateRootPosition();
                    this.registerListeners();
                }
                disconnectedCallback() {
                    super.disconnectedCallback();
                    this.unregisterListeners();
                }
            }
            __decorate([
                query('.mdc-top-app-bar')
            ], TopAppBarBaseBase.prototype, "mdcRoot", void 0);
            __decorate([
                query('slot[name="actionItems"]')
            ], TopAppBarBaseBase.prototype, "_actionItemsSlot", void 0);
            __decorate([
                property({ type: Boolean })
            ], TopAppBarBaseBase.prototype, "centerTitle", void 0);
            __decorate([
                property()
            ], TopAppBarBaseBase.prototype, "scrollTarget", null);

            class TopAppBarBase extends TopAppBarBaseBase {
                constructor() {
                    super(...arguments);
                    this.mdcFoundationClass = MDCTopAppBarFoundation;
                    this.prominent = false;
                    this.dense = false;
                    this.handleResize = () => {
                        this.mdcFoundation.handleWindowResize();
                    };
                }
                barClasses() {
                    return {
                        'mdc-top-app-bar--dense': this.dense,
                        'mdc-top-app-bar--prominent': this.prominent,
                        'center-title': this.centerTitle,
                    };
                }
                contentClasses() {
                    return {
                        'mdc-top-app-bar--fixed-adjust': !this.dense && !this.prominent,
                        'mdc-top-app-bar--dense-fixed-adjust': this.dense && !this.prominent,
                        'mdc-top-app-bar--prominent-fixed-adjust': !this.dense && this.prominent,
                        'mdc-top-app-bar--dense-prominent-fixed-adjust': this.dense && this.prominent,
                    };
                }
                registerListeners() {
                    super.registerListeners();
                    window.addEventListener('resize', this.handleResize, passiveEventOptionsIfSupported);
                }
                unregisterListeners() {
                    super.unregisterListeners();
                    window.removeEventListener('resize', this.handleResize);
                }
            }
            __decorate([
                property({ type: Boolean, reflect: true })
            ], TopAppBarBase.prototype, "prominent", void 0);
            __decorate([
                property({ type: Boolean, reflect: true })
            ], TopAppBarBase.prototype, "dense", void 0);

            /**
            @license
            Copyright 2018 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            const style$1 = css `.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}.mdc-top-app-bar__title[dir=rtl],[dir=rtl] .mdc-top-app-bar__title{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}.mdc-top-app-bar--short-collapsed[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short[dir=rtl],[dir=rtl] .mdc-top-app-bar--short{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity .2s cubic-bezier(.4,0,.2,1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);width:56px;transition:width .3s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl],[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow .2s linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);transition:box-shadow .2s linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl],[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width:599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width .2s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar--prominent #actions ::slotted(*),.mdc-top-app-bar--prominent #navigation ::slotted(*){align-self:flex-start}#actions ::slotted(*),#navigation ::slotted(*){--mdc-icon-button-ripple-opacity:0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-end,.center-title .mdc-top-app-bar__section--align-start{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}`;

            let TopAppBar = class TopAppBar extends TopAppBarBase {
            };
            TopAppBar.styles = style$1;
            TopAppBar = __decorate([
                customElement('mwc-top-app-bar')
            ], TopAppBar);

            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            /**
             * Stores result from applyPassive to avoid redundant processing to detect
             * passive event listener support.
             */
            var supportsPassive_;
            /**
             * Determine whether the current browser supports passive event listeners, and
             * if so, use them.
             */
            function applyPassive(globalObj, forceRefresh) {
                if (globalObj === void 0) { globalObj = window; }
                if (forceRefresh === void 0) { forceRefresh = false; }
                if (supportsPassive_ === undefined || forceRefresh) {
                    var isSupported_1 = false;
                    try {
                        globalObj.document.addEventListener('test', function () { return undefined; }, {
                            get passive() {
                                isSupported_1 = true;
                                return isSupported_1;
                            },
                        });
                    }
                    catch (e) {
                    } // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
                    supportsPassive_ = isSupported_1;
                }
                return supportsPassive_ ? { passive: true } : false;
            }

            /**
            @license
            Copyright 2018 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            class FormElement extends BaseElement {
                createRenderRoot() {
                    return this.attachShadow({ mode: 'open', delegatesFocus: true });
                }
                click() {
                    if (this.formElement) {
                        this.formElement.focus();
                        this.formElement.click();
                    }
                }
                setAriaLabel(label) {
                    if (this.formElement) {
                        this.formElement.setAttribute('aria-label', label);
                    }
                }
                firstUpdated() {
                    super.firstUpdated();
                    this.mdcRoot.addEventListener('change', (e) => {
                        this.dispatchEvent(new Event('change', e));
                    });
                }
            }

            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssPropertyNameMap = {
                animation: {
                    prefixed: '-webkit-animation',
                    standard: 'animation',
                },
                transform: {
                    prefixed: '-webkit-transform',
                    standard: 'transform',
                },
                transition: {
                    prefixed: '-webkit-transition',
                    standard: 'transition',
                },
            };
            var jsEventTypeMap = {
                animationend: {
                    cssProperty: 'animation',
                    prefixed: 'webkitAnimationEnd',
                    standard: 'animationend',
                },
                animationiteration: {
                    cssProperty: 'animation',
                    prefixed: 'webkitAnimationIteration',
                    standard: 'animationiteration',
                },
                animationstart: {
                    cssProperty: 'animation',
                    prefixed: 'webkitAnimationStart',
                    standard: 'animationstart',
                },
                transitionend: {
                    cssProperty: 'transition',
                    prefixed: 'webkitTransitionEnd',
                    standard: 'transitionend',
                },
            };
            function isWindow(windowObj) {
                return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
            }
            function getCorrectPropertyName(windowObj, cssProperty) {
                if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
                    var el = windowObj.document.createElement('div');
                    var _a = cssPropertyNameMap[cssProperty], standard = _a.standard, prefixed = _a.prefixed;
                    var isStandard = standard in el.style;
                    return isStandard ? standard : prefixed;
                }
                return cssProperty;
            }
            function getCorrectEventName(windowObj, eventType) {
                if (isWindow(windowObj) && eventType in jsEventTypeMap) {
                    var el = windowObj.document.createElement('div');
                    var _a = jsEventTypeMap[eventType], standard = _a.standard, prefixed = _a.prefixed, cssProperty = _a.cssProperty;
                    var isStandard = cssProperty in el.style;
                    return isStandard ? standard : prefixed;
                }
                return eventType;
            }

            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses$2 = {
                ACTIVE: 'mdc-slider--active',
                DISABLED: 'mdc-slider--disabled',
                DISCRETE: 'mdc-slider--discrete',
                FOCUS: 'mdc-slider--focus',
                HAS_TRACK_MARKER: 'mdc-slider--display-markers',
                IN_TRANSIT: 'mdc-slider--in-transit',
                IS_DISCRETE: 'mdc-slider--discrete',
            };
            var strings$2 = {
                ARIA_DISABLED: 'aria-disabled',
                ARIA_VALUEMAX: 'aria-valuemax',
                ARIA_VALUEMIN: 'aria-valuemin',
                ARIA_VALUENOW: 'aria-valuenow',
                CHANGE_EVENT: 'MDCSlider:change',
                INPUT_EVENT: 'MDCSlider:input',
                PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
                STEP_DATA_ATTR: 'data-step',
                THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
                TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
                TRACK_SELECTOR: '.mdc-slider__track',
            };
            var numbers$1 = {
                PAGE_FACTOR: 4,
            };

            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
            var UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];
            var MOVE_EVENT_MAP = {
                mousedown: 'mousemove',
                pointerdown: 'pointermove',
                touchstart: 'touchmove',
            };
            var KEY_IDS = {
                ARROW_DOWN: 'ArrowDown',
                ARROW_LEFT: 'ArrowLeft',
                ARROW_RIGHT: 'ArrowRight',
                ARROW_UP: 'ArrowUp',
                END: 'End',
                HOME: 'Home',
                PAGE_DOWN: 'PageDown',
                PAGE_UP: 'PageUp',
            };
            var MDCSliderFoundation = /** @class */ (function (_super) {
                __extends(MDCSliderFoundation, _super);
                function MDCSliderFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCSliderFoundation.defaultAdapter, adapter)) || this;
                    /**
                     * We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
                     * because those could be valid tabindices set by the client code.
                     */
                    _this.savedTabIndex_ = NaN;
                    _this.active_ = false;
                    _this.inTransit_ = false;
                    _this.isDiscrete_ = false;
                    _this.hasTrackMarker_ = false;
                    _this.handlingThumbTargetEvt_ = false;
                    _this.min_ = 0;
                    _this.max_ = 100;
                    _this.step_ = 0;
                    _this.value_ = 0;
                    _this.disabled_ = false;
                    _this.preventFocusState_ = false;
                    _this.thumbContainerPointerHandler_ = function () { return _this.handlingThumbTargetEvt_ = true; };
                    _this.interactionStartHandler_ = function (evt) { return _this.handleDown_(evt); };
                    _this.keydownHandler_ = function (evt) { return _this.handleKeydown_(evt); };
                    _this.focusHandler_ = function () { return _this.handleFocus_(); };
                    _this.blurHandler_ = function () { return _this.handleBlur_(); };
                    _this.resizeHandler_ = function () { return _this.layout(); };
                    return _this;
                }
                Object.defineProperty(MDCSliderFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses$2;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSliderFoundation, "strings", {
                    get: function () {
                        return strings$2;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSliderFoundation, "numbers", {
                    get: function () {
                        return numbers$1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSliderFoundation, "defaultAdapter", {
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            hasClass: function () { return false; },
                            addClass: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            getAttribute: function () { return null; },
                            setAttribute: function () { return undefined; },
                            removeAttribute: function () { return undefined; },
                            computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                            getTabIndex: function () { return 0; },
                            registerInteractionHandler: function () { return undefined; },
                            deregisterInteractionHandler: function () { return undefined; },
                            registerThumbContainerInteractionHandler: function () { return undefined; },
                            deregisterThumbContainerInteractionHandler: function () { return undefined; },
                            registerBodyInteractionHandler: function () { return undefined; },
                            deregisterBodyInteractionHandler: function () { return undefined; },
                            registerResizeHandler: function () { return undefined; },
                            deregisterResizeHandler: function () { return undefined; },
                            notifyInput: function () { return undefined; },
                            notifyChange: function () { return undefined; },
                            setThumbContainerStyleProperty: function () { return undefined; },
                            setTrackStyleProperty: function () { return undefined; },
                            setMarkerValue: function () { return undefined; },
                            setTrackMarkers: function () { return undefined; },
                            isRTL: function () { return false; },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCSliderFoundation.prototype.init = function () {
                    var _this = this;
                    this.isDiscrete_ = this.adapter_.hasClass(cssClasses$2.IS_DISCRETE);
                    this.hasTrackMarker_ = this.adapter_.hasClass(cssClasses$2.HAS_TRACK_MARKER);
                    DOWN_EVENTS.forEach(function (evtName) {
                        _this.adapter_.registerInteractionHandler(evtName, _this.interactionStartHandler_);
                        _this.adapter_.registerThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
                    });
                    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
                    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
                    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
                    this.adapter_.registerResizeHandler(this.resizeHandler_);
                    this.layout();
                    // At last step, provide a reasonable default value to discrete slider
                    if (this.isDiscrete_ && this.getStep() === 0) {
                        this.step_ = 1;
                    }
                };
                MDCSliderFoundation.prototype.destroy = function () {
                    var _this = this;
                    DOWN_EVENTS.forEach(function (evtName) {
                        _this.adapter_.deregisterInteractionHandler(evtName, _this.interactionStartHandler_);
                        _this.adapter_.deregisterThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
                    });
                    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
                    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
                    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
                    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
                };
                MDCSliderFoundation.prototype.setupTrackMarker = function () {
                    if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() !== 0) {
                        this.adapter_.setTrackMarkers(this.getStep(), this.getMax(), this.getMin());
                    }
                };
                MDCSliderFoundation.prototype.layout = function () {
                    this.rect_ = this.adapter_.computeBoundingRect();
                    this.updateUIForCurrentValue_();
                };
                MDCSliderFoundation.prototype.getValue = function () {
                    return this.value_;
                };
                MDCSliderFoundation.prototype.setValue = function (value) {
                    this.setValue_(value, false);
                };
                MDCSliderFoundation.prototype.getMax = function () {
                    return this.max_;
                };
                MDCSliderFoundation.prototype.setMax = function (max) {
                    if (max < this.min_) {
                        throw new Error('Cannot set max to be less than the slider\'s minimum value');
                    }
                    this.max_ = max;
                    this.setValue_(this.value_, false, true);
                    this.adapter_.setAttribute(strings$2.ARIA_VALUEMAX, String(this.max_));
                    this.setupTrackMarker();
                };
                MDCSliderFoundation.prototype.getMin = function () {
                    return this.min_;
                };
                MDCSliderFoundation.prototype.setMin = function (min) {
                    if (min > this.max_) {
                        throw new Error('Cannot set min to be greater than the slider\'s maximum value');
                    }
                    this.min_ = min;
                    this.setValue_(this.value_, false, true);
                    this.adapter_.setAttribute(strings$2.ARIA_VALUEMIN, String(this.min_));
                    this.setupTrackMarker();
                };
                MDCSliderFoundation.prototype.getStep = function () {
                    return this.step_;
                };
                MDCSliderFoundation.prototype.setStep = function (step) {
                    if (step < 0) {
                        throw new Error('Step cannot be set to a negative number');
                    }
                    if (this.isDiscrete_ && (typeof (step) !== 'number' || step < 1)) {
                        step = 1;
                    }
                    this.step_ = step;
                    this.setValue_(this.value_, false, true);
                    this.setupTrackMarker();
                };
                MDCSliderFoundation.prototype.isDisabled = function () {
                    return this.disabled_;
                };
                MDCSliderFoundation.prototype.setDisabled = function (disabled) {
                    this.disabled_ = disabled;
                    this.toggleClass_(cssClasses$2.DISABLED, this.disabled_);
                    if (this.disabled_) {
                        this.savedTabIndex_ = this.adapter_.getTabIndex();
                        this.adapter_.setAttribute(strings$2.ARIA_DISABLED, 'true');
                        this.adapter_.removeAttribute('tabindex');
                    }
                    else {
                        this.adapter_.removeAttribute(strings$2.ARIA_DISABLED);
                        if (!isNaN(this.savedTabIndex_)) {
                            this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
                        }
                    }
                };
                /**
                 * Called when the user starts interacting with the slider
                 */
                MDCSliderFoundation.prototype.handleDown_ = function (downEvent) {
                    var _this = this;
                    if (this.disabled_) {
                        return;
                    }
                    this.preventFocusState_ = true;
                    this.setInTransit_(!this.handlingThumbTargetEvt_);
                    this.handlingThumbTargetEvt_ = false;
                    this.setActive_(true);
                    var moveHandler = function (moveEvent) {
                        _this.handleMove_(moveEvent);
                    };
                    var moveEventType = MOVE_EVENT_MAP[downEvent.type];
                    // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
                    // do not always fire these consistently in pairs.
                    // (See https://github.com/material-components/material-components-web/issues/1192)
                    var upHandler = function () {
                        _this.handleUp_();
                        _this.adapter_.deregisterBodyInteractionHandler(moveEventType, moveHandler);
                        UP_EVENTS.forEach(function (evtName) { return _this.adapter_.deregisterBodyInteractionHandler(evtName, upHandler); });
                    };
                    this.adapter_.registerBodyInteractionHandler(moveEventType, moveHandler);
                    UP_EVENTS.forEach(function (evtName) { return _this.adapter_.registerBodyInteractionHandler(evtName, upHandler); });
                    this.setValueFromEvt_(downEvent);
                };
                /**
                 * Called when the user moves the slider
                 */
                MDCSliderFoundation.prototype.handleMove_ = function (evt) {
                    evt.preventDefault();
                    this.setValueFromEvt_(evt);
                };
                /**
                 * Called when the user's interaction with the slider ends
                 */
                MDCSliderFoundation.prototype.handleUp_ = function () {
                    this.setActive_(false);
                    this.adapter_.notifyChange();
                };
                /**
                 * Returns the pageX of the event
                 */
                MDCSliderFoundation.prototype.getPageX_ = function (evt) {
                    if (evt.targetTouches && evt.targetTouches.length > 0) {
                        return evt.targetTouches[0].pageX;
                    }
                    return evt.pageX;
                };
                /**
                 * Sets the slider value from an event
                 */
                MDCSliderFoundation.prototype.setValueFromEvt_ = function (evt) {
                    var pageX = this.getPageX_(evt);
                    var value = this.computeValueFromPageX_(pageX);
                    this.setValue_(value, true);
                };
                /**
                 * Computes the new value from the pageX position
                 */
                MDCSliderFoundation.prototype.computeValueFromPageX_ = function (pageX) {
                    var _a = this, max = _a.max_, min = _a.min_;
                    var xPos = pageX - this.rect_.left;
                    var pctComplete = xPos / this.rect_.width;
                    if (this.adapter_.isRTL()) {
                        pctComplete = 1 - pctComplete;
                    }
                    // Fit the percentage complete between the range [min,max]
                    // by remapping from [0, 1] to [min, min+(max-min)].
                    return min + pctComplete * (max - min);
                };
                /**
                 * Handles keydown events
                 */
                MDCSliderFoundation.prototype.handleKeydown_ = function (evt) {
                    var keyId = this.getKeyId_(evt);
                    var value = this.getValueForKeyId_(keyId);
                    if (isNaN(value)) {
                        return;
                    }
                    // Prevent page from scrolling due to key presses that would normally scroll the page
                    evt.preventDefault();
                    this.adapter_.addClass(cssClasses$2.FOCUS);
                    this.setValue_(value, true);
                    this.adapter_.notifyChange();
                };
                /**
                 * Returns the computed name of the event
                 */
                MDCSliderFoundation.prototype.getKeyId_ = function (kbdEvt) {
                    if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
                        return KEY_IDS.ARROW_LEFT;
                    }
                    if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
                        return KEY_IDS.ARROW_RIGHT;
                    }
                    if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
                        return KEY_IDS.ARROW_UP;
                    }
                    if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
                        return KEY_IDS.ARROW_DOWN;
                    }
                    if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
                        return KEY_IDS.HOME;
                    }
                    if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
                        return KEY_IDS.END;
                    }
                    if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
                        return KEY_IDS.PAGE_UP;
                    }
                    if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
                        return KEY_IDS.PAGE_DOWN;
                    }
                    return '';
                };
                /**
                 * Computes the value given a keyboard key ID
                 */
                MDCSliderFoundation.prototype.getValueForKeyId_ = function (keyId) {
                    var _a = this, max = _a.max_, min = _a.min_, step = _a.step_;
                    var delta = step || (max - min) / 100;
                    var valueNeedsToBeFlipped = this.adapter_.isRTL() && (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);
                    if (valueNeedsToBeFlipped) {
                        delta = -delta;
                    }
                    switch (keyId) {
                        case KEY_IDS.ARROW_LEFT:
                        case KEY_IDS.ARROW_DOWN:
                            return this.value_ - delta;
                        case KEY_IDS.ARROW_RIGHT:
                        case KEY_IDS.ARROW_UP:
                            return this.value_ + delta;
                        case KEY_IDS.HOME:
                            return this.min_;
                        case KEY_IDS.END:
                            return this.max_;
                        case KEY_IDS.PAGE_UP:
                            return this.value_ + delta * numbers$1.PAGE_FACTOR;
                        case KEY_IDS.PAGE_DOWN:
                            return this.value_ - delta * numbers$1.PAGE_FACTOR;
                        default:
                            return NaN;
                    }
                };
                MDCSliderFoundation.prototype.handleFocus_ = function () {
                    if (this.preventFocusState_) {
                        return;
                    }
                    this.adapter_.addClass(cssClasses$2.FOCUS);
                };
                MDCSliderFoundation.prototype.handleBlur_ = function () {
                    this.preventFocusState_ = false;
                    this.adapter_.removeClass(cssClasses$2.FOCUS);
                };
                /**
                 * Sets the value of the slider
                 */
                MDCSliderFoundation.prototype.setValue_ = function (value, shouldFireInput, force) {
                    if (force === void 0) { force = false; }
                    if (value === this.value_ && !force) {
                        return;
                    }
                    var _a = this, min = _a.min_, max = _a.max_;
                    var valueSetToBoundary = value === min || value === max;
                    if (this.step_ && !valueSetToBoundary) {
                        value = this.quantize_(value);
                    }
                    if (value < min) {
                        value = min;
                    }
                    else if (value > max) {
                        value = max;
                    }
                    this.value_ = value;
                    this.adapter_.setAttribute(strings$2.ARIA_VALUENOW, String(this.value_));
                    this.updateUIForCurrentValue_();
                    if (shouldFireInput) {
                        this.adapter_.notifyInput();
                        if (this.isDiscrete_) {
                            this.adapter_.setMarkerValue(value);
                        }
                    }
                };
                /**
                 * Calculates the quantized value
                 */
                MDCSliderFoundation.prototype.quantize_ = function (value) {
                    var numSteps = Math.round(value / this.step_);
                    return numSteps * this.step_;
                };
                MDCSliderFoundation.prototype.updateUIForCurrentValue_ = function () {
                    var _this = this;
                    var _a = this, max = _a.max_, min = _a.min_, value = _a.value_;
                    var pctComplete = (value - min) / (max - min);
                    var translatePx = pctComplete * this.rect_.width;
                    if (this.adapter_.isRTL()) {
                        translatePx = this.rect_.width - translatePx;
                    }
                    var transformProp = getCorrectPropertyName(window, 'transform');
                    var transitionendEvtName = getCorrectEventName(window, 'transitionend');
                    if (this.inTransit_) {
                        var onTransitionEnd_1 = function () {
                            _this.setInTransit_(false);
                            _this.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
                        };
                        this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
                    }
                    requestAnimationFrame(function () {
                        // NOTE(traviskaufman): It would be nice to use calc() here,
                        // but IE cannot handle calcs in transforms correctly.
                        // See: https://goo.gl/NC2itk
                        // Also note that the -50% offset is used to center the slider thumb.
                        _this.adapter_.setThumbContainerStyleProperty(transformProp, "translateX(" + translatePx + "px) translateX(-50%)");
                        _this.adapter_.setTrackStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
                    });
                };
                /**
                 * Toggles the active state of the slider
                 */
                MDCSliderFoundation.prototype.setActive_ = function (active) {
                    this.active_ = active;
                    this.toggleClass_(cssClasses$2.ACTIVE, this.active_);
                };
                /**
                 * Toggles the inTransit state of the slider
                 */
                MDCSliderFoundation.prototype.setInTransit_ = function (inTransit) {
                    this.inTransit_ = inTransit;
                    this.toggleClass_(cssClasses$2.IN_TRANSIT, this.inTransit_);
                };
                /**
                 * Conditionally adds or removes a class based on shouldBePresent
                 */
                MDCSliderFoundation.prototype.toggleClass_ = function (className, shouldBePresent) {
                    if (shouldBePresent) {
                        this.adapter_.addClass(className);
                    }
                    else {
                        this.adapter_.removeClass(className);
                    }
                };
                return MDCSliderFoundation;
            }(MDCFoundation));

            /**
             * @license
             * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            /**
             * Stores the StyleInfo object applied to a given AttributePart.
             * Used to unset existing values when a new StyleInfo object is applied.
             */
            const previousStylePropertyCache = new WeakMap();
            /**
             * A directive that applies CSS properties to an element.
             *
             * `styleMap` can only be used in the `style` attribute and must be the only
             * expression in the attribute. It takes the property names in the `styleInfo`
             * object and adds the property values as CSS properties. Property names with
             * dashes (`-`) are assumed to be valid CSS property names and set on the
             * element's style object using `setProperty()`. Names without dashes are
             * assumed to be camelCased JavaScript property names and set on the element's
             * style object using property assignment, allowing the style object to
             * translate JavaScript-style names to CSS property names.
             *
             * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
             * '0'})` sets the `background-color`, `border-top` and `--size` properties.
             *
             * @param styleInfo {StyleInfo}
             */
            const styleMap = directive((styleInfo) => (part) => {
                if (!(part instanceof AttributePart) || (part instanceof PropertyPart) ||
                    part.committer.name !== 'style' || part.committer.parts.length > 1) {
                    throw new Error('The `styleMap` directive must be used in the style attribute ' +
                        'and must be the only part in the attribute.');
                }
                const { committer } = part;
                const { style } = committer.element;
                let previousStyleProperties = previousStylePropertyCache.get(part);
                if (previousStyleProperties === undefined) {
                    // Write static styles once
                    style.cssText = committer.strings.join(' ');
                    previousStylePropertyCache.set(part, previousStyleProperties = new Set());
                }
                // Remove old properties that no longer exist in styleInfo
                // We use forEach() instead of for-of so that re don't require down-level
                // iteration.
                previousStyleProperties.forEach((name) => {
                    if (!(name in styleInfo)) {
                        previousStyleProperties.delete(name);
                        if (name.indexOf('-') === -1) {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            style[name] = null;
                        }
                        else {
                            style.removeProperty(name);
                        }
                    }
                });
                // Add or update properties
                for (const name in styleInfo) {
                    previousStyleProperties.add(name);
                    if (name.indexOf('-') === -1) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        style[name] = styleInfo[name];
                    }
                    else {
                        style.setProperty(name, styleInfo[name]);
                    }
                }
            });

            const { INPUT_EVENT, CHANGE_EVENT } = MDCSliderFoundation.strings;
            class SliderBase extends FormElement {
                constructor() {
                    super(...arguments);
                    this.mdcFoundationClass = MDCSliderFoundation;
                    this.value = 0;
                    this.min = 0;
                    this.max = 100;
                    this.step = 0;
                    this.disabled = false;
                    this.discrete = false;
                    this.markers = false;
                    this.pinMarkerText = '';
                    this.trackMarkerContainerStyles = {};
                    this.thumbContainerStyles = {};
                    this.trackStyles = {};
                    this.isFoundationDestroyed = false;
                }
                // TODO(sorvell) #css: needs a default width
                render() {
                    const hostClassInfo = {
                        'mdc-slider--discrete': this.discrete,
                        'mdc-slider--display-markers': this.markers && this.discrete,
                    };
                    let markersTemplate = '';
                    if (this.discrete && this.markers) {
                        markersTemplate = html `<div class="mdc-slider__track-marker-container" style="${styleMap(this.trackMarkerContainerStyles)}"></div>`;
                    }
                    let pin = '';
                    if (this.discrete) {
                        pin = html `<div class="mdc-slider__pin"><span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span></div>`;
                    }
                    return html `<div class="mdc-slider ${classMap(hostClassInfo)}" tabindex="0" role="slider" aria-valuemin="${this.min}" aria-valuemax="${this.max}" aria-valuenow="${this.value}" aria-disabled="${this.disabled}" data-step="${this.step}"><div class="mdc-slider__track-container"><div class="mdc-slider__track" style="${styleMap(this.trackStyles)}"></div>${markersTemplate}</div><div class="mdc-slider__thumb-container" style="${styleMap(this.thumbContainerStyles)}">${pin} <svg class="mdc-slider__thumb" width="21" height="21"><circle cx="10.5" cy="10.5" r="7.875"></circle></svg><div class="mdc-slider__focus-ring"></div></div></div>`;
                }
                connectedCallback() {
                    super.connectedCallback();
                    if (this.mdcRoot && this.isFoundationDestroyed) {
                        this.isFoundationDestroyed = false;
                        this.mdcFoundation.init();
                    }
                }
                disconnectedCallback() {
                    super.disconnectedCallback();
                    this.isFoundationDestroyed = true;
                    this.mdcFoundation.destroy();
                }
                createAdapter() {
                    return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { getAttribute: (name) => this.mdcRoot.getAttribute(name), setAttribute: (name, value) => this.mdcRoot.setAttribute(name, value), removeAttribute: (name) => this.mdcRoot.removeAttribute(name), computeBoundingRect: () => this.mdcRoot.getBoundingClientRect(), getTabIndex: () => this.mdcRoot.tabIndex, registerInteractionHandler: (type, handler) => {
                            const init = type === 'touchstart' ? applyPassive() : undefined;
                            this.mdcRoot.addEventListener(type, handler, init);
                        }, deregisterInteractionHandler: (type, handler) => this.mdcRoot.removeEventListener(type, handler), registerThumbContainerInteractionHandler: (type, handler) => {
                            const init = type === 'touchstart' ? applyPassive() : undefined;
                            this.thumbContainer.addEventListener(type, handler, init);
                        }, deregisterThumbContainerInteractionHandler: (type, handler) => this.thumbContainer.removeEventListener(type, handler), registerBodyInteractionHandler: (type, handler) => document.body.addEventListener(type, handler), deregisterBodyInteractionHandler: (type, handler) => document.body.removeEventListener(type, handler), registerResizeHandler: (handler) => window.addEventListener('resize', handler, applyPassive()), deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler), notifyInput: () => {
                            const value = this.mdcFoundation.getValue();
                            if (value !== this.value) {
                                this.value = value;
                                this.dispatchEvent(new CustomEvent(INPUT_EVENT, { detail: this, bubbles: true, cancelable: true }));
                            }
                        }, notifyChange: () => {
                            this.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: this, bubbles: true, cancelable: true }));
                        }, setThumbContainerStyleProperty: (propertyName, value) => {
                            this.thumbContainerStyles[propertyName] = value;
                            this.requestUpdate();
                        }, setTrackStyleProperty: (propertyName, value) => {
                            this.trackStyles[propertyName] = value;
                            this.requestUpdate();
                        }, setMarkerValue: (value) => this.pinMarkerText = value.toString(), setTrackMarkers: (step, max, min) => {
                            // calculates the CSS for the notches on the slider. Taken from
                            // https://github.com/material-components/material-components-web/blob/8f851d9ed2f75dc8b8956d15b3bb2619e59fa8a9/packages/mdc-slider/component.ts#L122
                            const stepStr = step.toLocaleString();
                            const maxStr = max.toLocaleString();
                            const minStr = min.toLocaleString();
                            // keep calculation in css for better rounding/subpixel behavior
                            const markerAmount = `((${maxStr} - ${minStr}) / ${stepStr})`;
                            const markerWidth = '2px';
                            const markerBkgdImage = `linear-gradient(to right, currentColor ${markerWidth}, transparent 0)`;
                            const markerBkgdLayout = `0 center / calc((100% - ${markerWidth}) / ${markerAmount}) 100% repeat-x`;
                            const markerBkgdShorthand = `${markerBkgdImage} ${markerBkgdLayout}`;
                            this.trackMarkerContainerStyles['background'] = markerBkgdShorthand;
                            this.requestUpdate();
                        }, isRTL: () => getComputedStyle(this.mdcRoot).direction === 'rtl' });
                }
                layout() {
                    this.mdcFoundation.layout();
                }
            }
            __decorate([
                query('.mdc-slider')
            ], SliderBase.prototype, "mdcRoot", void 0);
            __decorate([
                query('.mdc-slider')
            ], SliderBase.prototype, "formElement", void 0);
            __decorate([
                query('.mdc-slider__thumb-container')
            ], SliderBase.prototype, "thumbContainer", void 0);
            __decorate([
                query('.mdc-slider__pin-value-marker')
            ], SliderBase.prototype, "pinMarker", void 0);
            __decorate([
                property({ type: Number }),
                observer(function (value) {
                    this.mdcFoundation.setValue(value);
                })
            ], SliderBase.prototype, "value", void 0);
            __decorate([
                property({ type: Number }),
                observer(function (value) {
                    this.mdcFoundation.setMin(value);
                })
            ], SliderBase.prototype, "min", void 0);
            __decorate([
                property({ type: Number }),
                observer(function (value) {
                    this.mdcFoundation.setMax(value);
                })
            ], SliderBase.prototype, "max", void 0);
            __decorate([
                property({ type: Number }),
                observer(function (value) {
                    this.mdcFoundation.setStep(value);
                })
            ], SliderBase.prototype, "step", void 0);
            __decorate([
                property({ type: Boolean, reflect: true }),
                observer(function (value) {
                    this.mdcFoundation.setDisabled(value);
                })
            ], SliderBase.prototype, "disabled", void 0);
            __decorate([
                property({ type: Boolean, reflect: true })
            ], SliderBase.prototype, "discrete", void 0);
            __decorate([
                property({ type: Boolean, reflect: true }),
                observer(function () {
                    this.mdcFoundation.setupTrackMarker();
                })
            ], SliderBase.prototype, "markers", void 0);
            __decorate([
                property({ type: String })
            ], SliderBase.prototype, "pinMarkerText", void 0);
            __decorate([
                property({ type: Object })
            ], SliderBase.prototype, "trackMarkerContainerStyles", void 0);
            __decorate([
                property({ type: Object })
            ], SliderBase.prototype, "thumbContainerStyles", void 0);
            __decorate([
                property({ type: Object })
            ], SliderBase.prototype, "trackStyles", void 0);

            /**
            @license
            Copyright 2018 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            const style$2 = css `@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(.85)}100%{transform:scale(.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:transparent}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container{background-color:rgba(1,135,134,.26)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary,#018786);stroke:#018786;stroke:var(--mdc-theme-secondary,#018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container{background-color:rgba(154,154,154,.26)}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component,#fff)}.mdc-slider:focus{outline:0}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(.571);stroke-width:3.5;transition:transform .1s ease-out,fill .1s ease-out,stroke .1s ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform .266s ease-out,opacity .266s ease-out,background-color .266s ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0,0);border-radius:50% 50% 50% 0;z-index:1;transition:transform .1s ease-out}.mdc-slider__pin-value-marker{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1,1,1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize .266s linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55,1.55,1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px,-20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:0}`;

            let Slider = class Slider extends SliderBase {
            };
            Slider.styles = style$2;
            Slider = __decorate([
                customElement('mwc-slider')
            ], Slider);

            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var strings$3 = {
                NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
            };
            var numbers$2 = {
                // This should stay in sync with $mdc-notched-outline-padding * 2.
                NOTCH_ELEMENT_PADDING: 8,
            };
            var cssClasses$3 = {
                NO_LABEL: 'mdc-notched-outline--no-label',
                OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
                OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
            };

            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
                __extends(MDCNotchedOutlineFoundation, _super);
                function MDCNotchedOutlineFoundation(adapter) {
                    return _super.call(this, __assign({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
                }
                Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
                    get: function () {
                        return strings$3;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses$3;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
                    get: function () {
                        return numbers$2;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            setNotchWidthProperty: function () { return undefined; },
                            removeNotchWidthProperty: function () { return undefined; },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
                 */
                MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
                    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
                    if (notchWidth > 0) {
                        notchWidth += numbers$2.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
                    }
                    this.adapter_.setNotchWidthProperty(notchWidth);
                    this.adapter_.addClass(OUTLINE_NOTCHED);
                };
                /**
                 * Removes notched outline selector to close the notch in the outline.
                 */
                MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
                    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
                    this.adapter_.removeClass(OUTLINE_NOTCHED);
                    this.adapter_.removeNotchWidthProperty();
                };
                return MDCNotchedOutlineFoundation;
            }(MDCFoundation));

            class NotchedOutlineBase extends BaseElement {
                constructor() {
                    super(...arguments);
                    this.mdcFoundationClass = MDCNotchedOutlineFoundation;
                    this.width = 0;
                    this.open = false;
                    this.lastOpen = this.open;
                }
                createAdapter() {
                    return {
                        addClass: (className) => this.mdcRoot.classList.add(className),
                        removeClass: (className) => this.mdcRoot.classList.remove(className),
                        setNotchWidthProperty: (width) => this.notchElement.style.setProperty('width', `${width}px`),
                        removeNotchWidthProperty: () => this.notchElement.style.removeProperty('width'),
                    };
                }
                openOrClose(shouldOpen, width) {
                    if (!this.mdcFoundation) {
                        return;
                    }
                    if (shouldOpen && width !== undefined) {
                        this.mdcFoundation.notch(width);
                    }
                    else {
                        this.mdcFoundation.closeNotch();
                    }
                }
                render() {
                    this.openOrClose(this.open, this.width);
                    return html `<div class="mdc-notched-outline"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><slot></slot></div><div class="mdc-notched-outline__trailing"></div></div>`;
                }
            }
            __decorate([
                query('.mdc-notched-outline')
            ], NotchedOutlineBase.prototype, "mdcRoot", void 0);
            __decorate([
                property({ type: Number })
            ], NotchedOutlineBase.prototype, "width", void 0);
            __decorate([
                property({ type: Boolean, reflect: true })
            ], NotchedOutlineBase.prototype, "open", void 0);
            __decorate([
                query('.mdc-notched-outline__notch')
            ], NotchedOutlineBase.prototype, "notchElement", void 0);

            /**
            @license
            Copyright 2018 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            const style$3 = css `.mdc-notched-outline{display:flex;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}.mdc-notched-outline[dir=rtl],[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}.mdc-notched-outline__leading[dir=rtl],[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}.mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / .75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl],[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}:host[dir=rtl],[dir=rtl] :host{text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / .75)}.mdc-notched-outline__leading{width:12px;width:var(--mdc-notched-outline-leading-width,12px);border-radius:4px 0 0 4px;border-radius:var(--mdc-notched-outline-leading-border-radius,4px 0 0 4px)}.mdc-notched-outline__trailing{border-radius:0 4px 4px 0;border-radius:var(--mdc-notched-outline-trailing-border-radius,0 4px 4px 0)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color,var(--mdc-theme-primary,#6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width,1px)}`;

            let NotchedOutline = class NotchedOutline extends NotchedOutlineBase {
            };
            NotchedOutline.styles = style$3;
            NotchedOutline = __decorate([
                customElement('mwc-notched-outline')
            ], NotchedOutline);

            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses$4 = {
                LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
                LABEL_SHAKE: 'mdc-floating-label--shake',
                ROOT: 'mdc-floating-label',
            };

            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
                __extends(MDCFloatingLabelFoundation, _super);
                function MDCFloatingLabelFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;
                    _this.shakeAnimationEndHandler_ = function () { return _this.handleShakeAnimationEnd_(); };
                    return _this;
                }
                Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses$4;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            getWidth: function () { return 0; },
                            registerInteractionHandler: function () { return undefined; },
                            deregisterInteractionHandler: function () { return undefined; },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCFloatingLabelFoundation.prototype.init = function () {
                    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
                };
                MDCFloatingLabelFoundation.prototype.destroy = function () {
                    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
                };
                /**
                 * Returns the width of the label element.
                 */
                MDCFloatingLabelFoundation.prototype.getWidth = function () {
                    return this.adapter_.getWidth();
                };
                /**
                 * Styles the label to produce a shake animation to indicate an error.
                 * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
                 */
                MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
                    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
                    if (shouldShake) {
                        this.adapter_.addClass(LABEL_SHAKE);
                    }
                    else {
                        this.adapter_.removeClass(LABEL_SHAKE);
                    }
                };
                /**
                 * Styles the label to float or dock.
                 * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
                 */
                MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
                    var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
                    if (shouldFloat) {
                        this.adapter_.addClass(LABEL_FLOAT_ABOVE);
                    }
                    else {
                        this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
                        this.adapter_.removeClass(LABEL_SHAKE);
                    }
                };
                MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
                    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
                    this.adapter_.removeClass(LABEL_SHAKE);
                };
                return MDCFloatingLabelFoundation;
            }(MDCFoundation));

            const createAdapter = (labelElement) => {
                return {
                    addClass: (className) => labelElement.classList.add(className),
                    removeClass: (className) => labelElement.classList.remove(className),
                    getWidth: () => labelElement.scrollWidth,
                    registerInteractionHandler: (evtType, handler) => {
                        labelElement.addEventListener(evtType, handler);
                    },
                    deregisterInteractionHandler: (evtType, handler) => {
                        labelElement.removeEventListener(evtType, handler);
                    },
                };
            };
            const partToFoundationMap = new WeakMap();
            const floatingLabel = directive((label) => (part) => {
                const lastFoundation = partToFoundationMap.get(part);
                if (!lastFoundation) {
                    const labelElement = part.committer.element;
                    labelElement.classList.add('mdc-floating-label');
                    const adapter = createAdapter(labelElement);
                    const foundation = new MDCFloatingLabelFoundation(adapter);
                    foundation.init();
                    part.setValue(foundation);
                    partToFoundationMap.set(part, { label, foundation });
                }
                else if (lastFoundation.label !== label) {
                    const labelElement = part.committer.element;
                    const labelChangeEvent = new Event('labelchange');
                    labelElement.dispatchEvent(labelChangeEvent);
                }
            });

            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses$5 = {
                LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
                LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
            };

            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCLineRippleFoundation = /** @class */ (function (_super) {
                __extends(MDCLineRippleFoundation, _super);
                function MDCLineRippleFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;
                    _this.transitionEndHandler_ = function (evt) { return _this.handleTransitionEnd(evt); };
                    return _this;
                }
                Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses$5;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            hasClass: function () { return false; },
                            setStyle: function () { return undefined; },
                            registerEventHandler: function () { return undefined; },
                            deregisterEventHandler: function () { return undefined; },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCLineRippleFoundation.prototype.init = function () {
                    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
                };
                MDCLineRippleFoundation.prototype.destroy = function () {
                    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
                };
                MDCLineRippleFoundation.prototype.activate = function () {
                    this.adapter_.removeClass(cssClasses$5.LINE_RIPPLE_DEACTIVATING);
                    this.adapter_.addClass(cssClasses$5.LINE_RIPPLE_ACTIVE);
                };
                MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
                    this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
                };
                MDCLineRippleFoundation.prototype.deactivate = function () {
                    this.adapter_.addClass(cssClasses$5.LINE_RIPPLE_DEACTIVATING);
                };
                MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
                    // Wait for the line ripple to be either transparent or opaque
                    // before emitting the animation end event
                    var isDeactivating = this.adapter_.hasClass(cssClasses$5.LINE_RIPPLE_DEACTIVATING);
                    if (evt.propertyName === 'opacity') {
                        if (isDeactivating) {
                            this.adapter_.removeClass(cssClasses$5.LINE_RIPPLE_ACTIVE);
                            this.adapter_.removeClass(cssClasses$5.LINE_RIPPLE_DEACTIVATING);
                        }
                    }
                };
                return MDCLineRippleFoundation;
            }(MDCFoundation));

            const createAdapter$1 = (lineElement) => {
                return {
                    addClass: (className) => lineElement.classList.add(className),
                    removeClass: (className) => lineElement.classList.remove(className),
                    hasClass: (className) => lineElement.classList.contains(className),
                    setStyle: (propertyName, value) => lineElement.style.setProperty(propertyName, value),
                    registerEventHandler: (evtType, handler) => {
                        lineElement.addEventListener(evtType, handler);
                    },
                    deregisterEventHandler: (evtType, handler) => {
                        lineElement.removeEventListener(evtType, handler);
                    },
                };
            };
            const partToFoundationMap$1 = new WeakMap();
            const lineRipple = directive(() => (part) => {
                const lastFoundation = partToFoundationMap$1.get(part);
                if (!lastFoundation) {
                    const lineElement = part.committer.element;
                    lineElement.classList.add('mdc-line-ripple');
                    const adapter = createAdapter$1(lineElement);
                    const foundation = new MDCLineRippleFoundation(adapter);
                    foundation.init();
                    part.setValue(foundation);
                    partToFoundationMap$1.set(part, foundation);
                }
            });

            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var strings$4 = {
                ARIA_CONTROLS: 'aria-controls',
                ICON_SELECTOR: '.mdc-text-field__icon',
                INPUT_SELECTOR: '.mdc-text-field__input',
                LABEL_SELECTOR: '.mdc-floating-label',
                LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
                OUTLINE_SELECTOR: '.mdc-notched-outline',
            };
            var cssClasses$6 = {
                DENSE: 'mdc-text-field--dense',
                DISABLED: 'mdc-text-field--disabled',
                FOCUSED: 'mdc-text-field--focused',
                FULLWIDTH: 'mdc-text-field--fullwidth',
                HELPER_LINE: 'mdc-text-field-helper-line',
                INVALID: 'mdc-text-field--invalid',
                NO_LABEL: 'mdc-text-field--no-label',
                OUTLINED: 'mdc-text-field--outlined',
                ROOT: 'mdc-text-field',
                TEXTAREA: 'mdc-text-field--textarea',
                WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
                WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
            };
            var numbers$3 = {
                DENSE_LABEL_SCALE: 0.923,
                LABEL_SCALE: 0.75,
            };
            /**
             * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
             * under the "Validation-related attributes" section.
             */
            var VALIDATION_ATTR_WHITELIST = [
                'pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength',
            ];
            /**
             * Label should always float for these types as they show some UI even if value is empty.
             */
            var ALWAYS_FLOAT_TYPES = [
                'color', 'date', 'datetime-local', 'month', 'range', 'time', 'week',
            ];

            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
            var INTERACTION_EVENTS = ['click', 'keydown'];
            var MDCTextFieldFoundation = /** @class */ (function (_super) {
                __extends(MDCTextFieldFoundation, _super);
                /**
                 * @param adapter
                 * @param foundationMap Map from subcomponent names to their subfoundations.
                 */
                function MDCTextFieldFoundation(adapter, foundationMap) {
                    if (foundationMap === void 0) { foundationMap = {}; }
                    var _this = _super.call(this, __assign({}, MDCTextFieldFoundation.defaultAdapter, adapter)) || this;
                    _this.isFocused_ = false;
                    _this.receivedUserInput_ = false;
                    _this.isValid_ = true;
                    _this.useNativeValidation_ = true;
                    _this.helperText_ = foundationMap.helperText;
                    _this.characterCounter_ = foundationMap.characterCounter;
                    _this.leadingIcon_ = foundationMap.leadingIcon;
                    _this.trailingIcon_ = foundationMap.trailingIcon;
                    _this.inputFocusHandler_ = function () { return _this.activateFocus(); };
                    _this.inputBlurHandler_ = function () { return _this.deactivateFocus(); };
                    _this.inputInputHandler_ = function () { return _this.handleInput(); };
                    _this.setPointerXOffset_ = function (evt) { return _this.setTransformOrigin(evt); };
                    _this.textFieldInteractionHandler_ = function () { return _this.handleTextFieldInteraction(); };
                    _this.validationAttributeChangeHandler_ = function (attributesList) { return _this.handleValidationAttributeChange(attributesList); };
                    return _this;
                }
                Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses$6;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation, "strings", {
                    get: function () {
                        return strings$4;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation, "numbers", {
                    get: function () {
                        return numbers$3;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
                    get: function () {
                        var type = this.getNativeInput_().type;
                        return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
                    get: function () {
                        return this.shouldAlwaysFloat_ || this.isFocused_ || Boolean(this.getValue()) || this.isBadInput_();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
                    get: function () {
                        return !this.isFocused_ && !this.isValid() && Boolean(this.getValue());
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCTextFieldAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            hasClass: function () { return true; },
                            registerTextFieldInteractionHandler: function () { return undefined; },
                            deregisterTextFieldInteractionHandler: function () { return undefined; },
                            registerInputInteractionHandler: function () { return undefined; },
                            deregisterInputInteractionHandler: function () { return undefined; },
                            registerValidationAttributeChangeHandler: function () { return new MutationObserver(function () { return undefined; }); },
                            deregisterValidationAttributeChangeHandler: function () { return undefined; },
                            getNativeInput: function () { return null; },
                            isFocused: function () { return false; },
                            activateLineRipple: function () { return undefined; },
                            deactivateLineRipple: function () { return undefined; },
                            setLineRippleTransformOrigin: function () { return undefined; },
                            shakeLabel: function () { return undefined; },
                            floatLabel: function () { return undefined; },
                            hasLabel: function () { return false; },
                            getLabelWidth: function () { return 0; },
                            hasOutline: function () { return false; },
                            notchOutline: function () { return undefined; },
                            closeOutline: function () { return undefined; },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldFoundation.prototype.init = function () {
                    var _this = this;
                    if (this.adapter_.isFocused()) {
                        this.inputFocusHandler_();
                    }
                    else if (this.adapter_.hasLabel() && this.shouldFloat) {
                        this.notchOutline(true);
                        this.adapter_.floatLabel(true);
                    }
                    this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
                    this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
                    this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
                    POINTERDOWN_EVENTS.forEach(function (evtType) {
                        _this.adapter_.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
                    });
                    INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.adapter_.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
                    });
                    this.validationObserver_ =
                        this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
                    this.setCharacterCounter_(this.getValue().length);
                };
                MDCTextFieldFoundation.prototype.destroy = function () {
                    var _this = this;
                    this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
                    this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
                    this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
                    POINTERDOWN_EVENTS.forEach(function (evtType) {
                        _this.adapter_.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
                    });
                    INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.adapter_.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
                    });
                    this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
                };
                /**
                 * Handles user interactions with the Text Field.
                 */
                MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
                    var nativeInput = this.adapter_.getNativeInput();
                    if (nativeInput && nativeInput.disabled) {
                        return;
                    }
                    this.receivedUserInput_ = true;
                };
                /**
                 * Handles validation attribute changes
                 */
                MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
                    var _this = this;
                    attributesList.some(function (attributeName) {
                        if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
                            _this.styleValidity_(true);
                            return true;
                        }
                        return false;
                    });
                    if (attributesList.indexOf('maxlength') > -1) {
                        this.setCharacterCounter_(this.getValue().length);
                    }
                };
                /**
                 * Opens/closes the notched outline.
                 */
                MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
                    if (!this.adapter_.hasOutline()) {
                        return;
                    }
                    if (openNotch) {
                        var isDense = this.adapter_.hasClass(cssClasses$6.DENSE);
                        var labelScale = isDense ? numbers$3.DENSE_LABEL_SCALE : numbers$3.LABEL_SCALE;
                        var labelWidth = this.adapter_.getLabelWidth() * labelScale;
                        this.adapter_.notchOutline(labelWidth);
                    }
                    else {
                        this.adapter_.closeOutline();
                    }
                };
                /**
                 * Activates the text field focus state.
                 */
                MDCTextFieldFoundation.prototype.activateFocus = function () {
                    this.isFocused_ = true;
                    this.styleFocused_(this.isFocused_);
                    this.adapter_.activateLineRipple();
                    if (this.adapter_.hasLabel()) {
                        this.notchOutline(this.shouldFloat);
                        this.adapter_.floatLabel(this.shouldFloat);
                        this.adapter_.shakeLabel(this.shouldShake);
                    }
                    if (this.helperText_) {
                        this.helperText_.showToScreenReader();
                    }
                };
                /**
                 * Sets the line ripple's transform origin, so that the line ripple activate
                 * animation will animate out from the user's click location.
                 */
                MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
                    var touches = evt.touches;
                    var targetEvent = touches ? touches[0] : evt;
                    var targetClientRect = targetEvent.target.getBoundingClientRect();
                    var normalizedX = targetEvent.clientX - targetClientRect.left;
                    this.adapter_.setLineRippleTransformOrigin(normalizedX);
                };
                /**
                 * Handles input change of text input and text area.
                 */
                MDCTextFieldFoundation.prototype.handleInput = function () {
                    this.autoCompleteFocus();
                    this.setCharacterCounter_(this.getValue().length);
                };
                /**
                 * Activates the Text Field's focus state in cases when the input value
                 * changes without user input (e.g. programmatically).
                 */
                MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
                    if (!this.receivedUserInput_) {
                        this.activateFocus();
                    }
                };
                /**
                 * Deactivates the Text Field's focus state.
                 */
                MDCTextFieldFoundation.prototype.deactivateFocus = function () {
                    this.isFocused_ = false;
                    this.adapter_.deactivateLineRipple();
                    var isValid = this.isValid();
                    this.styleValidity_(isValid);
                    this.styleFocused_(this.isFocused_);
                    if (this.adapter_.hasLabel()) {
                        this.notchOutline(this.shouldFloat);
                        this.adapter_.floatLabel(this.shouldFloat);
                        this.adapter_.shakeLabel(this.shouldShake);
                    }
                    if (!this.shouldFloat) {
                        this.receivedUserInput_ = false;
                    }
                };
                MDCTextFieldFoundation.prototype.getValue = function () {
                    return this.getNativeInput_().value;
                };
                /**
                 * @param value The value to set on the input Element.
                 */
                MDCTextFieldFoundation.prototype.setValue = function (value) {
                    // Prevent Safari from moving the caret to the end of the input when the value has not changed.
                    if (this.getValue() !== value) {
                        this.getNativeInput_().value = value;
                    }
                    this.setCharacterCounter_(value.length);
                    var isValid = this.isValid();
                    this.styleValidity_(isValid);
                    if (this.adapter_.hasLabel()) {
                        this.notchOutline(this.shouldFloat);
                        this.adapter_.floatLabel(this.shouldFloat);
                        this.adapter_.shakeLabel(this.shouldShake);
                    }
                };
                /**
                 * @return The custom validity state, if set; otherwise, the result of a native validity check.
                 */
                MDCTextFieldFoundation.prototype.isValid = function () {
                    return this.useNativeValidation_
                        ? this.isNativeInputValid_() : this.isValid_;
                };
                /**
                 * @param isValid Sets the custom validity state of the Text Field.
                 */
                MDCTextFieldFoundation.prototype.setValid = function (isValid) {
                    this.isValid_ = isValid;
                    this.styleValidity_(isValid);
                    var shouldShake = !isValid && !this.isFocused_;
                    if (this.adapter_.hasLabel()) {
                        this.adapter_.shakeLabel(shouldShake);
                    }
                };
                /**
                 * Enables or disables the use of native validation. Use this for custom validation.
                 * @param useNativeValidation Set this to false to ignore native input validation.
                 */
                MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
                    this.useNativeValidation_ = useNativeValidation;
                };
                MDCTextFieldFoundation.prototype.isDisabled = function () {
                    return this.getNativeInput_().disabled;
                };
                /**
                 * @param disabled Sets the text-field disabled or enabled.
                 */
                MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
                    this.getNativeInput_().disabled = disabled;
                    this.styleDisabled_(disabled);
                };
                /**
                 * @param content Sets the content of the helper text.
                 */
                MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
                    if (this.helperText_) {
                        this.helperText_.setContent(content);
                    }
                };
                /**
                 * Sets the aria label of the leading icon.
                 */
                MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
                    if (this.leadingIcon_) {
                        this.leadingIcon_.setAriaLabel(label);
                    }
                };
                /**
                 * Sets the text content of the leading icon.
                 */
                MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
                    if (this.leadingIcon_) {
                        this.leadingIcon_.setContent(content);
                    }
                };
                /**
                 * Sets the aria label of the trailing icon.
                 */
                MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
                    if (this.trailingIcon_) {
                        this.trailingIcon_.setAriaLabel(label);
                    }
                };
                /**
                 * Sets the text content of the trailing icon.
                 */
                MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
                    if (this.trailingIcon_) {
                        this.trailingIcon_.setContent(content);
                    }
                };
                /**
                 * Sets character counter values that shows characters used and the total character limit.
                 */
                MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
                    if (!this.characterCounter_) {
                        return;
                    }
                    var maxLength = this.getNativeInput_().maxLength;
                    if (maxLength === -1) {
                        throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
                    }
                    this.characterCounter_.setCounterValue(currentLength, maxLength);
                };
                /**
                 * @return True if the Text Field input fails in converting the user-supplied value.
                 */
                MDCTextFieldFoundation.prototype.isBadInput_ = function () {
                    // The badInput property is not supported in IE 11 💩.
                    return this.getNativeInput_().validity.badInput || false;
                };
                /**
                 * @return The result of native validity checking (ValidityState.valid).
                 */
                MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
                    return this.getNativeInput_().validity.valid;
                };
                /**
                 * Styles the component based on the validity state.
                 */
                MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
                    var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
                    if (isValid) {
                        this.adapter_.removeClass(INVALID);
                    }
                    else {
                        this.adapter_.addClass(INVALID);
                    }
                    if (this.helperText_) {
                        this.helperText_.setValidity(isValid);
                    }
                };
                /**
                 * Styles the component based on the focused state.
                 */
                MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
                    var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
                    if (isFocused) {
                        this.adapter_.addClass(FOCUSED);
                    }
                    else {
                        this.adapter_.removeClass(FOCUSED);
                    }
                };
                /**
                 * Styles the component based on the disabled state.
                 */
                MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
                    var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
                    if (isDisabled) {
                        this.adapter_.addClass(DISABLED);
                        this.adapter_.removeClass(INVALID);
                    }
                    else {
                        this.adapter_.removeClass(DISABLED);
                    }
                    if (this.leadingIcon_) {
                        this.leadingIcon_.setDisabled(isDisabled);
                    }
                    if (this.trailingIcon_) {
                        this.trailingIcon_.setDisabled(isDisabled);
                    }
                };
                /**
                 * @return The native text input element from the host environment, or an object with the same shape for unit tests.
                 */
                MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
                    // this.adapter_ may be undefined in foundation unit tests. This happens when testdouble is creating a mock object
                    // and invokes the shouldShake/shouldFloat getters (which in turn call getValue(), which calls this method) before
                    // init() has been called from the MDCTextField constructor. To work around that issue, we return a dummy object.
                    var nativeInput = this.adapter_ ? this.adapter_.getNativeInput() : null;
                    return nativeInput || {
                        disabled: false,
                        maxLength: -1,
                        type: 'input',
                        validity: {
                            badInput: false,
                            valid: true,
                        },
                        value: '',
                    };
                };
                return MDCTextFieldFoundation;
            }(MDCFoundation));

            /**
             * @license
             * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const previousValues = new WeakMap();
            /**
             * For AttributeParts, sets the attribute if the value is defined and removes
             * the attribute if the value is undefined.
             *
             * For other part types, this directive is a no-op.
             */
            const ifDefined = directive((value) => (part) => {
                const previousValue = previousValues.get(part);
                if (value === undefined && part instanceof AttributePart) {
                    // If the value is undefined, remove the attribute, but only if the value
                    // was previously defined.
                    if (previousValue !== undefined || !previousValues.has(part)) {
                        const name = part.committer.name;
                        part.committer.element.removeAttribute(name);
                    }
                }
                else if (value !== previousValue) {
                    part.setValue(value);
                }
                previousValues.set(part, value);
            });

            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses$7 = {
                ROOT: 'mdc-text-field-character-counter',
            };
            var strings$5 = {
                ROOT_SELECTOR: "." + cssClasses$7.ROOT,
            };

            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCTextFieldCharacterCounterFoundation = /** @class */ (function (_super) {
                __extends(MDCTextFieldCharacterCounterFoundation, _super);
                function MDCTextFieldCharacterCounterFoundation(adapter) {
                    return _super.call(this, __assign({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter, adapter)) || this;
                }
                Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses$7;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
                    get: function () {
                        return strings$5;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        return {
                            setContent: function () { return undefined; },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
                    currentLength = Math.min(currentLength, maxLength);
                    this.adapter_.setContent(currentLength + " / " + maxLength);
                };
                return MDCTextFieldCharacterCounterFoundation;
            }(MDCFoundation));

            const createAdapter$2 = (hostElement) => {
                return { setContent: (content) => hostElement.textContent = content };
            };
            const partToFoundationMap$2 = new WeakMap();
            const characterCounter = directive(() => (part) => {
                const lastFoundation = partToFoundationMap$2.get(part);
                if (!lastFoundation) {
                    const hostElement = part.committer.element;
                    hostElement.classList.add('mdc-text-field-character-counter');
                    const adapter = createAdapter$2(hostElement);
                    const foundation = new MDCTextFieldCharacterCounterFoundation(adapter);
                    foundation.init();
                    part.setValue(foundation);
                    partToFoundationMap$2.set(part, foundation);
                }
            });

            const passiveEvents = ['touchstart', 'touchmove', 'scroll', 'mousewheel'];
            const createValidityObj = (customValidity = {}) => {
                /*
                 * We need to make ValidityState an object because it is readonly and
                 * we cannot use the spread operator. Also, we don't export
                 * `CustomValidityState` because it is a leaky implementation and the user
                 * already has access to `ValidityState` in lib.dom.ts. Also an interface
                 * {a: Type} can be casted to {readonly a: Type} so passing any object
                 * should be fine.
                 */
                const objectifiedCustomValidity = {};
                // eslint-disable-next-line guard-for-in
                for (const propName in customValidity) {
                    /*
                     * Casting is needed because ValidityState's props are all readonly and
                     * thus cannot be set on `onjectifiedCustomValidity`. In the end, the
                     * interface is the same as ValidityState (but not readonly), but the
                     * function signature casts the output to ValidityState (thus readonly).
                     */
                    objectifiedCustomValidity[propName] =
                        customValidity[propName];
                }
                return Object.assign({ badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: true, valueMissing: false }, objectifiedCustomValidity);
            };
            class TextFieldBase extends FormElement {
                constructor() {
                    super(...arguments);
                    this.mdcFoundationClass = MDCTextFieldFoundation;
                    this.value = '';
                    this.type = 'text';
                    this.placeholder = '';
                    this.label = '';
                    this.icon = '';
                    this.iconTrailing = '';
                    this.disabled = false;
                    this.required = false;
                    this.maxLength = -1;
                    this.outlined = false;
                    this.fullWidth = false;
                    this.helper = '';
                    this.validateOnInitialRender = false;
                    this.validationMessage = '';
                    this.pattern = '';
                    this.min = '';
                    this.max = '';
                    this.step = null;
                    this.helperPersistent = false;
                    this.charCounter = false;
                    this.outlineOpen = false;
                    this.outlineWidth = 0;
                    this.isUiValid = true;
                    this._validity = createValidityObj();
                    this.validityTransform = null;
                }
                get validity() {
                    this._checkValidity(this.value);
                    return this._validity;
                }
                get willValidate() {
                    return this.formElement.willValidate;
                }
                get selectionStart() {
                    return this.formElement.selectionStart;
                }
                get selectionEnd() {
                    return this.formElement.selectionEnd;
                }
                get shouldRenderHelperText() {
                    return !!this.helper || !!this.validationMessage || this.charCounterVisible;
                }
                get charCounterVisible() {
                    return this.charCounter && this.maxLength !== -1;
                }
                focus() {
                    const focusEvt = new CustomEvent('focus');
                    this.formElement.dispatchEvent(focusEvt);
                    this.formElement.focus();
                }
                blur() {
                    const blurEvt = new CustomEvent('blur');
                    this.formElement.dispatchEvent(blurEvt);
                    this.formElement.blur();
                }
                select() {
                    this.formElement.select();
                }
                setSelectionRange(selectionStart, selectionEnd, selectionDirection) {
                    this.formElement.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
                }
                render() {
                    const classes = {
                        'mdc-text-field--disabled': this.disabled,
                        'mdc-text-field--no-label': !this.label,
                        'mdc-text-field--outlined': this.outlined,
                        'mdc-text-field--fullwidth': this.fullWidth,
                        'mdc-text-field--with-leading-icon': this.icon,
                        'mdc-text-field--with-trailing-icon': this.iconTrailing,
                    };
                    return html `<div class="mdc-text-field ${classMap(classes)}">${this.icon ? this.renderIcon(this.icon) : ''} ${this.renderInput()} ${this.iconTrailing ? this.renderIcon(this.iconTrailing) : ''} ${this.outlined ? this.renderOutlined() : this.renderLabelText()}</div>${this.renderHelperText(this.renderCharCounter())}`;
                }
                updated(changedProperties) {
                    const maxLength = changedProperties.get('maxLength');
                    const maxLengthBecameDefined = maxLength === -1 && this.maxLength !== -1;
                    const maxLengthBecameUndefined = maxLength !== undefined && maxLength !== -1 && this.maxLength === -1;
                    /* We want to recreate the foundation if maxLength changes to defined or
                     * undefined, because the textfield foundation needs to be instantiated with
                     * the char counter's foundation, and the char counter's foundation needs
                     * to have maxLength defined to be instantiated. Additionally, there is no
                     * exposed API on the MdcTextFieldFoundation to dynamically add a char
                     * counter foundation, so we must recreate it.
                     */
                    if (maxLengthBecameDefined || maxLengthBecameUndefined) {
                        this.createFoundation();
                    }
                    if (changedProperties.has('value') &&
                        changedProperties.get('value') !== undefined) {
                        this.mdcFoundation.setValue(this.value);
                    }
                }
                renderInput() {
                    const maxOrUndef = this.maxLength === -1 ? undefined : this.maxLength;
                    return html `<input id="text-field" class="mdc-text-field__input" type="${this.type}" .value="${this.value}" ?disabled="${this.disabled}" placeholder="${this.placeholder}" ?required="${this.required}" maxlength="${ifDefined(maxOrUndef)}" pattern="${ifDefined(this.pattern ? this.pattern : undefined)}" min="${ifDefined(this.min === '' ? undefined : this.min)}" max="${ifDefined(this.max === '' ? undefined : this.max)}" step="${ifDefined(this.step === null ? undefined : this.step)}" @input="${this.handleInputChange}" @blur="${this.onInputBlur}">`;
                }
                renderIcon(icon) {
                    return html `<i class="material-icons mdc-text-field__icon">${icon}</i>`;
                }
                renderOutlined() {
                    let labelTemplate = '';
                    if (this.label) {
                        labelTemplate = html `<label .floatingLabelFoundation="${floatingLabel(this.label)}" @labelchange="${this.onLabelChange}" for="text-field">${this.label}</label>`;
                    }
                    return html `<mwc-notched-outline .width="${this.outlineWidth}" .open="${this.outlineOpen}" class="mdc-notched-outline">${labelTemplate}</mwc-notched-outline>`;
                }
                renderLabelText() {
                    let labelTemplate = '';
                    if (this.label && !this.fullWidth) {
                        labelTemplate = html `<label .floatingLabelFoundation="${floatingLabel(this.label)}" for="text-field">${this.label}</label>`;
                    }
                    return html `${labelTemplate}<div .lineRippleFoundation="${lineRipple()}"></div>`;
                }
                renderHelperText(charCounterTemplate) {
                    const showValidationMessage = this.validationMessage && !this.isUiValid;
                    const classes = {
                        'mdc-text-field-helper-text--persistent': this.helperPersistent,
                        'mdc-text-field-helper-text--validation-msg': showValidationMessage,
                    };
                    const rootClasses = {
                        hidden: !this.shouldRenderHelperText,
                    };
                    return html `<div class="mdc-text-field-helper-line ${classMap(rootClasses)}"><div class="mdc-text-field-helper-text ${classMap(classes)}">${showValidationMessage ? this.validationMessage : this.helper}</div>${charCounterTemplate}</div>`;
                }
                renderCharCounter() {
                    const counterClasses = {
                        hidden: !this.charCounterVisible,
                    };
                    return html `<div class="${classMap(counterClasses)}" .charCounterFoundation="${characterCounter()}"></div>`;
                }
                onInputBlur() {
                    this.reportValidity();
                }
                checkValidity() {
                    const isValid = this._checkValidity(this.value);
                    if (!isValid) {
                        const invalidEvent = new Event('invalid', { bubbles: false, cancelable: true });
                        this.dispatchEvent(invalidEvent);
                    }
                    return isValid;
                }
                reportValidity() {
                    const isValid = this.checkValidity();
                    this.mdcFoundation.setValid(isValid);
                    this.isUiValid = isValid;
                    return isValid;
                }
                _checkValidity(value) {
                    const nativeValidity = this.formElement.validity;
                    let validity = createValidityObj(nativeValidity);
                    if (this.validityTransform) {
                        const customValidity = this.validityTransform(value, validity);
                        validity = Object.assign(Object.assign({}, validity), customValidity);
                        this.mdcFoundation.setUseNativeValidation(false);
                    }
                    else {
                        this.mdcFoundation.setUseNativeValidation(true);
                    }
                    this._validity = validity;
                    return this._validity.valid;
                }
                setCustomValidity(message) {
                    this.validationMessage = message;
                    this.formElement.setCustomValidity(message);
                }
                handleInputChange() {
                    this.value = this.formElement.value;
                }
                createFoundation() {
                    if (this.mdcFoundation !== undefined) {
                        this.mdcFoundation.destroy();
                    }
                    this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter(), {
                        characterCounter: this.maxLength !== -1 ?
                            this.charCounterElement.charCounterFoundation :
                            undefined
                    });
                    this.mdcFoundation.init();
                }
                createAdapter() {
                    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
                }
                getRootAdapterMethods() {
                    return Object.assign({ registerTextFieldInteractionHandler: (evtType, handler) => this.addEventListener(evtType, handler), deregisterTextFieldInteractionHandler: (evtType, handler) => this.removeEventListener(evtType, handler), registerValidationAttributeChangeHandler: () => {
                            const getAttributesList = (mutationsList) => {
                                return mutationsList.map((mutation) => mutation.attributeName)
                                    .filter((attributeName) => attributeName);
                            };
                            const observer = new MutationObserver((mutationsList) => {
                                const attributes = getAttributesList(mutationsList);
                                if (attributes.indexOf('maxlength') !== -1 && this.maxLength !== -1) {
                                    this.charCounterElement.charCounterFoundation.setCounterValue(this.value.length, this.maxLength);
                                }
                            });
                            const config = { attributes: true };
                            observer.observe(this.formElement, config);
                            return observer;
                        }, deregisterValidationAttributeChangeHandler: (observer) => observer.disconnect() }, addHasRemoveClass(this.mdcRoot));
                }
                getInputAdapterMethods() {
                    return {
                        getNativeInput: () => this.formElement,
                        isFocused: () => this.shadowRoot ?
                            this.shadowRoot.activeElement === this.formElement :
                            false,
                        registerInputInteractionHandler: (evtType, handler) => this.formElement.addEventListener(evtType, handler, { passive: evtType in passiveEvents }),
                        deregisterInputInteractionHandler: (evtType, handler) => this.formElement.removeEventListener(evtType, handler),
                    };
                }
                getLabelAdapterMethods() {
                    return {
                        floatLabel: (shouldFloat) => this.labelElement &&
                            this.labelElement.floatingLabelFoundation.float(shouldFloat),
                        getLabelWidth: () => {
                            return this.labelElement ?
                                this.labelElement.floatingLabelFoundation.getWidth() :
                                0;
                        },
                        hasLabel: () => Boolean(this.labelElement),
                        shakeLabel: (shouldShake) => this.labelElement &&
                            this.labelElement.floatingLabelFoundation.shake(shouldShake),
                    };
                }
                getLineRippleAdapterMethods() {
                    return {
                        activateLineRipple: () => {
                            if (this.lineRippleElement) {
                                this.lineRippleElement.lineRippleFoundation.activate();
                            }
                        },
                        deactivateLineRipple: () => {
                            if (this.lineRippleElement) {
                                this.lineRippleElement.lineRippleFoundation.deactivate();
                            }
                        },
                        setLineRippleTransformOrigin: (normalizedX) => {
                            if (this.lineRippleElement) {
                                this.lineRippleElement.lineRippleFoundation.setRippleCenter(normalizedX);
                            }
                        },
                    };
                }
                async firstUpdated() {
                    const outlineElement = this.outlineElement;
                    if (outlineElement) {
                        await outlineElement.updateComplete;
                    }
                    super.firstUpdated();
                    if (this.validateOnInitialRender) {
                        this.reportValidity();
                    }
                }
                getOutlineAdapterMethods() {
                    return {
                        closeOutline: () => this.outlineElement && (this.outlineOpen = false),
                        hasOutline: () => Boolean(this.outlineElement),
                        notchOutline: (labelWidth) => {
                            const outlineElement = this.outlineElement;
                            if (outlineElement && !this.outlineOpen) {
                                this.outlineWidth = labelWidth;
                                this.outlineOpen = true;
                            }
                        }
                    };
                }
                async onLabelChange() {
                    if (this.label) {
                        await this.layout();
                    }
                }
                async layout() {
                    await this.updateComplete;
                    if (this.labelElement && this.outlineElement) {
                        /* When the textfield automatically notches due to a value and label
                         * being defined, the textfield may be set to `display: none` by the user.
                         * this means that the notch is of size 0px. We provide this function so
                         * that the user may manually resize the notch to the floated label's
                         * width.
                         */
                        const labelWidth = this.labelElement.floatingLabelFoundation.getWidth();
                        if (this.outlineOpen) {
                            this.outlineWidth = labelWidth;
                        }
                    }
                }
            }
            __decorate([
                query('.mdc-text-field')
            ], TextFieldBase.prototype, "mdcRoot", void 0);
            __decorate([
                query('input')
            ], TextFieldBase.prototype, "formElement", void 0);
            __decorate([
                query('.mdc-floating-label')
            ], TextFieldBase.prototype, "labelElement", void 0);
            __decorate([
                query('.mdc-line-ripple')
            ], TextFieldBase.prototype, "lineRippleElement", void 0);
            __decorate([
                query('mwc-notched-outline')
            ], TextFieldBase.prototype, "outlineElement", void 0);
            __decorate([
                query('.mdc-notched-outline__notch')
            ], TextFieldBase.prototype, "notchElement", void 0);
            __decorate([
                query('.mdc-text-field-character-counter')
            ], TextFieldBase.prototype, "charCounterElement", void 0);
            __decorate([
                property({ type: String })
            ], TextFieldBase.prototype, "value", void 0);
            __decorate([
                property({ type: String })
            ], TextFieldBase.prototype, "type", void 0);
            __decorate([
                property({ type: String })
            ], TextFieldBase.prototype, "placeholder", void 0);
            __decorate([
                property({ type: String })
            ], TextFieldBase.prototype, "label", void 0);
            __decorate([
                property({ type: String })
            ], TextFieldBase.prototype, "icon", void 0);
            __decorate([
                property({ type: String })
            ], TextFieldBase.prototype, "iconTrailing", void 0);
            __decorate([
                property({ type: Boolean, reflect: true })
            ], TextFieldBase.prototype, "disabled", void 0);
            __decorate([
                property({ type: Boolean })
            ], TextFieldBase.prototype, "required", void 0);
            __decorate([
                property({ type: Number })
            ], TextFieldBase.prototype, "maxLength", void 0);
            __decorate([
                property({ type: Boolean, reflect: true })
            ], TextFieldBase.prototype, "outlined", void 0);
            __decorate([
                property({ type: Boolean, reflect: true })
            ], TextFieldBase.prototype, "fullWidth", void 0);
            __decorate([
                property({ type: String })
            ], TextFieldBase.prototype, "helper", void 0);
            __decorate([
                property({ type: Boolean })
            ], TextFieldBase.prototype, "validateOnInitialRender", void 0);
            __decorate([
                property({ type: String })
            ], TextFieldBase.prototype, "validationMessage", void 0);
            __decorate([
                property({ type: String })
            ], TextFieldBase.prototype, "pattern", void 0);
            __decorate([
                property({ type: Number })
            ], TextFieldBase.prototype, "min", void 0);
            __decorate([
                property({ type: Number })
            ], TextFieldBase.prototype, "max", void 0);
            __decorate([
                property({ type: Number })
            ], TextFieldBase.prototype, "step", void 0);
            __decorate([
                property({ type: Boolean })
            ], TextFieldBase.prototype, "helperPersistent", void 0);
            __decorate([
                property({ type: Boolean })
            ], TextFieldBase.prototype, "charCounter", void 0);
            __decorate([
                property({ type: Boolean })
            ], TextFieldBase.prototype, "outlineOpen", void 0);
            __decorate([
                property({ type: Number })
            ], TextFieldBase.prototype, "outlineWidth", void 0);
            __decorate([
                property({ type: Boolean })
            ], TextFieldBase.prototype, "isUiValid", void 0);
            __decorate([
                eventOptions({ passive: true })
            ], TextFieldBase.prototype, "handleInputChange", null);

            /**
            @license
            Copyright 2018 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            const style$4 = css `.mdc-floating-label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;position:absolute;left:0;transform-origin:left top;transition:transform 150ms cubic-bezier(.4,0,.2,1),color 150ms cubic-bezier(.4,0,.2,1);line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}.mdc-floating-label[dir=rtl],[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--float-above{transform:translateY(-106%) scale(.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0)) translateY(-106%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-106%) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-106%) scale(.75)}100%{transform:translateX(calc(0 - 0)) translateY(-106%) scale(.75)}}.mdc-line-ripple{position:absolute;bottom:0;left:0;width:100%;height:2px;transform:scaleX(0);transition:transform 180ms cubic-bezier(.4,0,.2,1),opacity 180ms cubic-bezier(.4,0,.2,1);opacity:0;z-index:2}.mdc-line-ripple--active{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating{opacity:0}.mdc-notched-outline{display:flex;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}.mdc-notched-outline[dir=rtl],[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}.mdc-notched-outline__leading[dir=rtl],[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}.mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / .75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl],[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-text-field-helper-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin:0;transition:opacity 150ms cubic-bezier(.4,0,.2,1);opacity:0;will-change:opacity}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-character-counter[dir=rtl],[dir=rtl] .mdc-text-field-character-counter{margin-left:0;margin-right:auto}.mdc-text-field-character-counter[dir=rtl],[dir=rtl] .mdc-text-field-character-counter{padding-left:0;padding-right:16px}.mdc-text-field--with-leading-icon .mdc-text-field__icon,.mdc-text-field--with-trailing-icon .mdc-text-field__icon{position:absolute;bottom:16px;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:transparent;height:56px;border-radius:4px 4px 0 0;display:inline-flex;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field::after,.mdc-text-field::before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-text-field.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-text-field.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-text-field.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-text-field::after,.mdc-text-field::before{background-color:rgba(0,0,0,.87)}.mdc-text-field:hover::before{opacity:.04}.mdc-text-field.mdc-ripple-upgraded--background-focused::before,.mdc-text-field:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-text-field::after,.mdc-text-field::before{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0,0,0,.87)}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary,#6200ee)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:rgba(0,0,0,.42)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:rgba(0,0,0,.87)}.mdc-text-field .mdc-line-ripple{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:rgba(0,0,0,.12)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:rgba(0,0,0,.54)}.mdc-text-field:not(.mdc-text-field--disabled){background-color:#f5f5f5}.mdc-text-field .mdc-floating-label{left:16px;right:initial;top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field .mdc-floating-label{left:initial;right:16px}.mdc-text-field .mdc-floating-label--float-above{transform:translateY(-106%) scale(.75)}.mdc-text-field--textarea .mdc-floating-label{left:4px;right:initial}.mdc-text-field--textarea .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--textarea .mdc-floating-label{left:initial;right:4px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}.mdc-text-field--outlined .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:initial;right:4px}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label{left:36px;right:initial}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label{left:initial;right:36px}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above{left:40px;right:initial}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above{left:initial;right:40px}.mdc-text-field__input{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;align-self:flex-end;box-sizing:border-box;width:100%;height:100%;padding:20px 16px 6px;transition:opacity 150ms cubic-bezier(.4,0,.2,1);border:none;border-bottom:1px solid;border-radius:0;background:0 0;appearance:none}.mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(.4,0,.2,1);opacity:0;color:rgba(0,0,0,.54)}.mdc-text-field__input:-ms-input-placeholder{color:rgba(0,0,0,.54)!important}.mdc-text-field--focused .mdc-text-field__input::placeholder,.mdc-text-field--fullwidth .mdc-text-field__input::placeholder,.mdc-text-field--no-label .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mdc-text-field__input:focus{outline:0}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input:-webkit-autofill{z-index:auto!important}.mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{padding-top:16px;padding-bottom:16px}.mdc-text-field__input:-webkit-autofill+.mdc-floating-label{transform:translateY(-50%) scale(.75);cursor:auto}.mdc-text-field--outlined{border:none;overflow:visible}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee)}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:0 4px 4px 0}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 4px 4px 0}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:4px 0 0 4px}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(.75)}.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--outlined::after,.mdc-text-field--outlined::before{content:none}.mdc-text-field--outlined:not(.mdc-text-field--disabled){background-color:transparent}.mdc-text-field--outlined .mdc-text-field__input{display:flex;padding:12px 16px 14px;border:none!important;background-color:transparent;z-index:1}.mdc-text-field--outlined .mdc-text-field__icon{z-index:2}.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--outlined.mdc-text-field--disabled{background-color:transparent}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.06)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{border-bottom:none}.mdc-text-field--outlined.mdc-text-field--dense{height:48px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-134%) scale(1)}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{font-size:.8rem}.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-120%) scale(.8)}.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-dense 250ms 1}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 7px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{top:14px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__icon{top:12px}.mdc-text-field--with-leading-icon .mdc-text-field__icon{left:16px;right:initial}.mdc-text-field--with-leading-icon .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__icon{left:initial;right:16px}.mdc-text-field--with-leading-icon .mdc-text-field__input{padding-left:48px;padding-right:16px}.mdc-text-field--with-leading-icon .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__input{padding-left:16px;padding-right:48px}.mdc-text-field--with-leading-icon .mdc-floating-label{left:48px;right:initial}.mdc-text-field--with-leading-icon .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon .mdc-floating-label{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon{left:16px;right:initial}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon{left:initial;right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:48px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:16px;padding-right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(32px) scale(.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl 250ms 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-134%) translateX(-21px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-134%) translateX(21px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{font-size:.8rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-120%) translateX(-21px) scale(.8)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-120%) translateX(21px) scale(.8)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense 250ms 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense[dir=rtl] .mdc-floating-label--shake,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl 250ms 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{left:32px;right:initial}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{left:initial;right:32px}.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:initial;right:12px}.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:12px;right:initial}.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:16px;padding-right:48px}.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:48px;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon{left:initial;right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon{left:16px;right:initial}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:16px;padding-right:48px}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:48px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:16px;right:auto}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:auto;right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon{right:12px;left:auto}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon{right:auto;left:12px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:48px;padding-right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:48px;padding-right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{bottom:16px;transform:scale(.8)}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:initial}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon{left:initial;right:12px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:44px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:16px;padding-right:44px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label{left:44px;right:initial}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label{left:initial;right:44px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:initial;right:12px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:initial}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:16px;padding-right:44px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:44px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:auto}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:auto;right:12px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon{right:12px;left:auto}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon{right:auto;left:12px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:44px;padding-right:44px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:44px;padding-right:44px}.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-70%) scale(.8)}.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-dense 250ms 1}.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 0}.mdc-text-field--dense .mdc-floating-label{font-size:.813rem}.mdc-text-field--dense .mdc-floating-label--float-above{font-size:.813rem}.mdc-text-field__input:required~.mdc-floating-label::after,.mdc-text-field__input:required~.mdc-notched-outline .mdc-floating-label::after{margin-left:1px;content:"*"}.mdc-text-field--textarea{display:inline-flex;width:auto;height:auto;transition:none;overflow:visible}.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.38)}.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee)}.mdc-text-field--textarea .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea 250ms 1}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl],[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading{border-radius:0 4px 4px 0}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 4px 4px 0}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:4px 0 0 4px}.mdc-text-field--textarea::after,.mdc-text-field--textarea::before{content:none}.mdc-text-field--textarea:not(.mdc-text-field--disabled){background-color:transparent}.mdc-text-field--textarea .mdc-floating-label--float-above{transform:translateY(-144%) scale(1)}.mdc-text-field--textarea .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) scale(.75)}.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea .mdc-text-field-character-counter{left:initial;right:16px;position:absolute;bottom:13px}.mdc-text-field--textarea .mdc-text-field-character-counter[dir=rtl],[dir=rtl] .mdc-text-field--textarea .mdc-text-field-character-counter{left:16px;right:initial}.mdc-text-field--textarea .mdc-text-field__input{align-self:auto;box-sizing:border-box;height:auto;margin:8px 1px 1px 0;padding:0 16px 16px;border:none;line-height:1.75rem}.mdc-text-field--textarea .mdc-text-field-character-counter+.mdc-text-field__input{margin-bottom:28px;padding-bottom:0}.mdc-text-field--textarea .mdc-floating-label{top:17px;width:auto;pointer-events:none}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--fullwidth{width:100%}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea){display:block}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::after,.mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::before{content:none}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--disabled){background-color:transparent}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input{padding:0}.mdc-text-field--fullwidth.mdc-text-field--textarea .mdc-text-field__input{resize:vertical}.mdc-text-field--fullwidth.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error,#b00020)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field--dense+.mdc-text-field-helper-line{margin-bottom:4px}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98,0,238,.87)}.mdc-text-field--focused .mdc-text-field__input:required~.mdc-floating-label::after,.mdc-text-field--focused .mdc-text-field__input:required~.mdc-notched-outline .mdc-floating-label::after{color:rgba(98,0,238,.87)}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple{background-color:#b00020;background-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input:required~.mdc-floating-label::after,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input:required~.mdc-notched-outline .mdc-floating-label::after{color:#b00020;color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid.mdc-text-field--with-trailing-icon:not(.mdc-text-field--with-leading-icon):not(.mdc-text-field--disabled) .mdc-text-field__icon{color:#b00020;color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid.mdc-text-field--with-trailing-icon.mdc-text-field--with-leading-icon:not(.mdc-text-field--disabled) .mdc-text-field__icon~.mdc-text-field__icon{color:#b00020;color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--disabled{background-color:#fafafa;border-bottom:none;pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{border-bottom-color:rgba(0,0,0,.06)}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0,0,0,.37)}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0,0,0,.37)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0,0,0,.37)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0,0,0,.37)}.mdc-text-field--disabled .mdc-text-field__icon{color:rgba(0,0,0,.3)}.mdc-text-field--disabled:not(.mdc-text-field--textarea){border-bottom-color:rgba(0,0,0,.12)}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--textarea.mdc-text-field--disabled{background-color:transparent;background-color:#f9f9f9}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.06)}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input{border-bottom:none}@keyframes mdc-floating-label-shake-float-above-text-field-dense{0%{transform:translateX(calc(0 - 0)) translateY(-70%) scale(.8)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-70%) scale(.8)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-70%) scale(.8)}100%{transform:translateX(calc(0 - 0)) translateY(-70%) scale(.8)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-34.75px) scale(.75)}100%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-dense{0%{transform:translateX(calc(0 - 0)) translateY(-120%) scale(.8)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-120%) scale(.8)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-120%) scale(.8)}100%{transform:translateX(calc(0 - 0)) translateY(-120%) scale(.8)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-34.75px) scale(.75)}100%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense{0%{transform:translateX(calc(0 - 21px)) translateY(-120%) scale(.8)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 21px)) translateY(-120%) scale(.8)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 21px)) translateY(-120%) scale(.8)}100%{transform:translateX(calc(0 - 21px)) translateY(-120%) scale(.8)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-34.75px) scale(.75)}100%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl{0%{transform:translateX(calc(0 - -21px)) translateY(-120%) scale(.8)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - -21px)) translateY(-120%) scale(.8)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - -21px)) translateY(-120%) scale(.8)}100%{transform:translateX(calc(0 - -21px)) translateY(-120%) scale(.8)}}@keyframes mdc-floating-label-shake-float-above-textarea{0%{transform:translateX(calc(0 - 0)) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-130%) scale(.75)}100%{transform:translateX(calc(0 - 0)) translateY(-130%) scale(.75)}}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size,24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.hidden,.hidden::after,.hidden::before{display:none}:host{display:inline-block;outline:0}:host([fullwidth]){display:block}.mdc-text-field{display:flex;width:100%;border-radius:4px 4px 0 0;border-radius:var(--mdc-text-field-filled-border-radius,4px 4px 0 0)}mwc-notched-outline{--mdc-notched-outline-border-color:var(--mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38))}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color:var(--mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color,#f5f5f5)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-error-color,var(--mdc-theme-error,#b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width:2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color:var(--mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-text-field__input:required~.mdc-floating-label::after,:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-text-field__input:required~.mdc-notched-outline .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color,rgba(0,0,0,.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color,#fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color:var(--mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color,rgba(0,0,0,.37))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color,rgba(0,0,0,.37))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text{color:var(--mdc-text-field-disabled-ink-color,rgba(0,0,0,.37))}`;

            /**
            @license
            Copyright 2019 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            let TextField = class TextField extends TextFieldBase {
            };
            TextField.styles = style$4;
            TextField = __decorate([
                customElement('mwc-textfield')
            ], TextField);

            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses$8 = {
                ROOT: 'mdc-form-field',
            };
            var strings$6 = {
                LABEL_SELECTOR: '.mdc-form-field > label',
            };

            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCFormFieldFoundation = /** @class */ (function (_super) {
                __extends(MDCFormFieldFoundation, _super);
                function MDCFormFieldFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCFormFieldFoundation.defaultAdapter, adapter)) || this;
                    _this.clickHandler_ = function () { return _this.handleClick_(); };
                    return _this;
                }
                Object.defineProperty(MDCFormFieldFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses$8;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFormFieldFoundation, "strings", {
                    get: function () {
                        return strings$6;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFormFieldFoundation, "defaultAdapter", {
                    get: function () {
                        return {
                            activateInputRipple: function () { return undefined; },
                            deactivateInputRipple: function () { return undefined; },
                            deregisterInteractionHandler: function () { return undefined; },
                            registerInteractionHandler: function () { return undefined; },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCFormFieldFoundation.prototype.init = function () {
                    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
                };
                MDCFormFieldFoundation.prototype.destroy = function () {
                    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
                };
                MDCFormFieldFoundation.prototype.handleClick_ = function () {
                    var _this = this;
                    this.adapter_.activateInputRipple();
                    requestAnimationFrame(function () { return _this.adapter_.deactivateInputRipple(); });
                };
                return MDCFormFieldFoundation;
            }(MDCFoundation));

            class FormfieldBase extends BaseElement {
                constructor() {
                    super(...arguments);
                    this.alignEnd = false;
                    this.label = '';
                    this.mdcFoundationClass = MDCFormFieldFoundation;
                }
                createAdapter() {
                    return {
                        registerInteractionHandler: (type, handler) => {
                            this.labelEl.addEventListener(type, handler);
                        },
                        deregisterInteractionHandler: (type, handler) => {
                            this.labelEl.removeEventListener(type, handler);
                        },
                        activateInputRipple: () => {
                            const input = this.input;
                            if (input instanceof FormElement && input.ripple) {
                                input.ripple.activate();
                            }
                        },
                        deactivateInputRipple: () => {
                            const input = this.input;
                            if (input instanceof FormElement && input.ripple) {
                                input.ripple.deactivate();
                            }
                        },
                    };
                }
                get input() {
                    return findAssignedElement(this.slotEl, '*');
                }
                render() {
                    return html `<div class="mdc-form-field ${classMap({
            'mdc-form-field--align-end': this.alignEnd
        })}"><slot></slot><label class="mdc-label" @click="${this._labelClick}">${this.label}</label></div>`;
                }
                _labelClick() {
                    const input = this.input;
                    if (input) {
                        input.focus();
                        input.click();
                    }
                }
            }
            __decorate([
                property({ type: Boolean })
            ], FormfieldBase.prototype, "alignEnd", void 0);
            __decorate([
                property({ type: String }),
                observer(async function (label) {
                    const input = this.input;
                    if (input) {
                        if (input.localName === 'input') {
                            input.setAttribute('aria-label', label);
                        }
                        else if (input instanceof FormElement) {
                            await input.updateComplete;
                            input.setAriaLabel(label);
                        }
                    }
                })
            ], FormfieldBase.prototype, "label", void 0);
            __decorate([
                query('.mdc-form-field')
            ], FormfieldBase.prototype, "mdcRoot", void 0);
            __decorate([
                query('slot')
            ], FormfieldBase.prototype, "slotEl", void 0);
            __decorate([
                query('label')
            ], FormfieldBase.prototype, "labelEl", void 0);

            /**
            @license
            Copyright 2018 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            const style$5 = css `.mdc-form-field{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{order:0;margin-right:auto;padding-left:4px}.mdc-form-field[dir=rtl]>label,[dir=rtl] .mdc-form-field>label{margin-left:auto;padding-right:4px}.mdc-form-field--align-end>label{order:-1;margin-left:auto;padding-right:4px}.mdc-form-field--align-end[dir=rtl]>label,[dir=rtl] .mdc-form-field--align-end>label{margin-right:auto;padding-left:4px}.mdc-form-field{align-items:center}::slotted(*){font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}::slotted(mwc-switch){margin-right:10px}::slotted(mwc-switch)[dir=rtl],[dir=rtl] ::slotted(mwc-switch){margin-left:10px}`;

            let Formfield = class Formfield extends FormfieldBase {
            };
            Formfield.styles = style$5;
            Formfield = __decorate([
                customElement('mwc-formfield')
            ], Formfield);

            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            /**
             * Stores result from applyPassive to avoid redundant processing to detect
             * passive event listener support.
             */
            var supportsPassive_$1;
            /**
             * Determine whether the current browser supports passive event listeners, and
             * if so, use them.
             */
            function applyPassive$1(globalObj, forceRefresh) {
                if (globalObj === void 0) { globalObj = window; }
                if (forceRefresh === void 0) { forceRefresh = false; }
                if (supportsPassive_$1 === undefined || forceRefresh) {
                    var isSupported_1 = false;
                    try {
                        globalObj.document.addEventListener('test', function () { return undefined; }, {
                            get passive() {
                                isSupported_1 = true;
                                return isSupported_1;
                            },
                        });
                    }
                    catch (e) {
                    } // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
                    supportsPassive_$1 = isSupported_1;
                }
                return supportsPassive_$1 ? { passive: true } : false;
            }

            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            function matches$1(element, selector) {
                var nativeMatches = element.matches
                    || element.webkitMatchesSelector
                    || element.msMatchesSelector;
                return nativeMatches.call(element, selector);
            }

            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses$9 = {
                // Ripple is a special case where the "root" component is really a "mixin" of sorts,
                // given that it's an 'upgrade' to an existing component. That being said it is the root
                // CSS class that all other CSS classes derive from.
                BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
                FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
                FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
                ROOT: 'mdc-ripple-upgraded',
                UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
            };
            var strings$7 = {
                VAR_FG_SCALE: '--mdc-ripple-fg-scale',
                VAR_FG_SIZE: '--mdc-ripple-fg-size',
                VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
                VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
                VAR_LEFT: '--mdc-ripple-left',
                VAR_TOP: '--mdc-ripple-top',
            };
            var numbers$4 = {
                DEACTIVATION_TIMEOUT_MS: 225,
                FG_DEACTIVATION_MS: 150,
                INITIAL_ORIGIN_SCALE: 0.6,
                PADDING: 10,
                TAP_DELAY_MS: 300,
            };

            /**
             * Stores result from supportsCssVariables to avoid redundant processing to
             * detect CSS custom variable support.
             */
            var supportsCssVariables_;
            function detectEdgePseudoVarBug(windowObj) {
                // Detect versions of Edge with buggy var() support
                // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
                var document = windowObj.document;
                var node = document.createElement('div');
                node.className = 'mdc-ripple-surface--test-edge-var-bug';
                // Append to head instead of body because this script might be invoked in the
                // head, in which case the body doesn't exist yet. The probe works either way.
                document.head.appendChild(node);
                // The bug exists if ::before style ends up propagating to the parent element.
                // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
                // but Firefox is known to support CSS custom properties correctly.
                // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
                var computedStyle = windowObj.getComputedStyle(node);
                var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                return hasPseudoVarBug;
            }
            function supportsCssVariables(windowObj, forceRefresh) {
                if (forceRefresh === void 0) { forceRefresh = false; }
                var CSS = windowObj.CSS;
                var supportsCssVars = supportsCssVariables_;
                if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
                    return supportsCssVariables_;
                }
                var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
                if (!supportsFunctionPresent) {
                    return false;
                }
                var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
                // See: https://bugs.webkit.org/show_bug.cgi?id=154669
                // See: README section on Safari
                var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
                    CSS.supports('color', '#00000000'));
                if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
                    supportsCssVars = !detectEdgePseudoVarBug(windowObj);
                }
                else {
                    supportsCssVars = false;
                }
                if (!forceRefresh) {
                    supportsCssVariables_ = supportsCssVars;
                }
                return supportsCssVars;
            }
            function getNormalizedEventCoords(evt, pageOffset, clientRect) {
                if (!evt) {
                    return { x: 0, y: 0 };
                }
                var x = pageOffset.x, y = pageOffset.y;
                var documentX = x + clientRect.left;
                var documentY = y + clientRect.top;
                var normalizedX;
                var normalizedY;
                // Determine touch point relative to the ripple container.
                if (evt.type === 'touchstart') {
                    var touchEvent = evt;
                    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
                    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
                }
                else {
                    var mouseEvent = evt;
                    normalizedX = mouseEvent.pageX - documentX;
                    normalizedY = mouseEvent.pageY - documentY;
                }
                return { x: normalizedX, y: normalizedY };
            }

            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            // Activation events registered on the root element of each instance for activation
            var ACTIVATION_EVENT_TYPES = [
                'touchstart', 'pointerdown', 'mousedown', 'keydown',
            ];
            // Deactivation events registered on documentElement when a pointer-related down event occurs
            var POINTER_DEACTIVATION_EVENT_TYPES = [
                'touchend', 'pointerup', 'mouseup', 'contextmenu',
            ];
            // simultaneous nested activations
            var activatedTargets = [];
            var MDCRippleFoundation = /** @class */ (function (_super) {
                __extends(MDCRippleFoundation, _super);
                function MDCRippleFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
                    _this.activationAnimationHasEnded_ = false;
                    _this.activationTimer_ = 0;
                    _this.fgDeactivationRemovalTimer_ = 0;
                    _this.fgScale_ = '0';
                    _this.frame_ = { width: 0, height: 0 };
                    _this.initialSize_ = 0;
                    _this.layoutFrame_ = 0;
                    _this.maxRadius_ = 0;
                    _this.unboundedCoords_ = { left: 0, top: 0 };
                    _this.activationState_ = _this.defaultActivationState_();
                    _this.activationTimerCallback_ = function () {
                        _this.activationAnimationHasEnded_ = true;
                        _this.runDeactivationUXLogicIfReady_();
                    };
                    _this.activateHandler_ = function (e) { return _this.activate_(e); };
                    _this.deactivateHandler_ = function () { return _this.deactivate_(); };
                    _this.focusHandler_ = function () { return _this.handleFocus(); };
                    _this.blurHandler_ = function () { return _this.handleBlur(); };
                    _this.resizeHandler_ = function () { return _this.layout(); };
                    return _this;
                }
                Object.defineProperty(MDCRippleFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses$9;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "strings", {
                    get: function () {
                        return strings$7;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "numbers", {
                    get: function () {
                        return numbers$4;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
                    get: function () {
                        return {
                            addClass: function () { return undefined; },
                            browserSupportsCssVars: function () { return true; },
                            computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                            containsEventTarget: function () { return true; },
                            deregisterDocumentInteractionHandler: function () { return undefined; },
                            deregisterInteractionHandler: function () { return undefined; },
                            deregisterResizeHandler: function () { return undefined; },
                            getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                            isSurfaceActive: function () { return true; },
                            isSurfaceDisabled: function () { return true; },
                            isUnbounded: function () { return true; },
                            registerDocumentInteractionHandler: function () { return undefined; },
                            registerInteractionHandler: function () { return undefined; },
                            registerResizeHandler: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            updateCssVariable: function () { return undefined; },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRippleFoundation.prototype.init = function () {
                    var _this = this;
                    var supportsPressRipple = this.supportsPressRipple_();
                    this.registerRootHandlers_(supportsPressRipple);
                    if (supportsPressRipple) {
                        var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
                        requestAnimationFrame(function () {
                            _this.adapter_.addClass(ROOT_1);
                            if (_this.adapter_.isUnbounded()) {
                                _this.adapter_.addClass(UNBOUNDED_1);
                                // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                                _this.layoutInternal_();
                            }
                        });
                    }
                };
                MDCRippleFoundation.prototype.destroy = function () {
                    var _this = this;
                    if (this.supportsPressRipple_()) {
                        if (this.activationTimer_) {
                            clearTimeout(this.activationTimer_);
                            this.activationTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                        }
                        if (this.fgDeactivationRemovalTimer_) {
                            clearTimeout(this.fgDeactivationRemovalTimer_);
                            this.fgDeactivationRemovalTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                        }
                        var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
                        requestAnimationFrame(function () {
                            _this.adapter_.removeClass(ROOT_2);
                            _this.adapter_.removeClass(UNBOUNDED_2);
                            _this.removeCssVars_();
                        });
                    }
                    this.deregisterRootHandlers_();
                    this.deregisterDeactivationHandlers_();
                };
                /**
                 * @param evt Optional event containing position information.
                 */
                MDCRippleFoundation.prototype.activate = function (evt) {
                    this.activate_(evt);
                };
                MDCRippleFoundation.prototype.deactivate = function () {
                    this.deactivate_();
                };
                MDCRippleFoundation.prototype.layout = function () {
                    var _this = this;
                    if (this.layoutFrame_) {
                        cancelAnimationFrame(this.layoutFrame_);
                    }
                    this.layoutFrame_ = requestAnimationFrame(function () {
                        _this.layoutInternal_();
                        _this.layoutFrame_ = 0;
                    });
                };
                MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
                    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
                    if (unbounded) {
                        this.adapter_.addClass(UNBOUNDED);
                    }
                    else {
                        this.adapter_.removeClass(UNBOUNDED);
                    }
                };
                MDCRippleFoundation.prototype.handleFocus = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                MDCRippleFoundation.prototype.handleBlur = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                /**
                 * We compute this property so that we are not querying information about the client
                 * until the point in time where the foundation requests it. This prevents scenarios where
                 * client-side feature-detection may happen too early, such as when components are rendered on the server
                 * and then initialized at mount time on the client.
                 */
                MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
                    return this.adapter_.browserSupportsCssVars();
                };
                MDCRippleFoundation.prototype.defaultActivationState_ = function () {
                    return {
                        activationEvent: undefined,
                        hasDeactivationUXRun: false,
                        isActivated: false,
                        isProgrammatic: false,
                        wasActivatedByPointer: false,
                        wasElementMadeActive: false,
                    };
                };
                /**
                 * supportsPressRipple Passed from init to save a redundant function call
                 */
                MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
                    var _this = this;
                    if (supportsPressRipple) {
                        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                            _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
                        });
                        if (this.adapter_.isUnbounded()) {
                            this.adapter_.registerResizeHandler(this.resizeHandler_);
                        }
                    }
                    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
                    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
                };
                MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
                    var _this = this;
                    if (evt.type === 'keydown') {
                        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
                    }
                    else {
                        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                            _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                        });
                    }
                };
                MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
                    var _this = this;
                    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                        _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
                    });
                    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
                    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
                    if (this.adapter_.isUnbounded()) {
                        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
                    }
                };
                MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
                    var _this = this;
                    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
                    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                        _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                    });
                };
                MDCRippleFoundation.prototype.removeCssVars_ = function () {
                    var _this = this;
                    var rippleStrings = MDCRippleFoundation.strings;
                    var keys = Object.keys(rippleStrings);
                    keys.forEach(function (key) {
                        if (key.indexOf('VAR_') === 0) {
                            _this.adapter_.updateCssVariable(rippleStrings[key], null);
                        }
                    });
                };
                MDCRippleFoundation.prototype.activate_ = function (evt) {
                    var _this = this;
                    if (this.adapter_.isSurfaceDisabled()) {
                        return;
                    }
                    var activationState = this.activationState_;
                    if (activationState.isActivated) {
                        return;
                    }
                    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
                    var previousActivationEvent = this.previousActivationEvent_;
                    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
                    if (isSameInteraction) {
                        return;
                    }
                    activationState.isActivated = true;
                    activationState.isProgrammatic = evt === undefined;
                    activationState.activationEvent = evt;
                    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
                    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) { return _this.adapter_.containsEventTarget(target); });
                    if (hasActivatedChild) {
                        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
                        this.resetActivationState_();
                        return;
                    }
                    if (evt !== undefined) {
                        activatedTargets.push(evt.target);
                        this.registerDeactivationHandlers_(evt);
                    }
                    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
                    if (activationState.wasElementMadeActive) {
                        this.animateActivation_();
                    }
                    requestAnimationFrame(function () {
                        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
                        activatedTargets = [];
                        if (!activationState.wasElementMadeActive
                            && evt !== undefined
                            && (evt.key === ' ' || evt.keyCode === 32)) {
                            // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                            // active states inconsistently when they're called within event handling code:
                            // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                            // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                            // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                            // variable is set within a rAF callback for a submit button interaction (#2241).
                            activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                            if (activationState.wasElementMadeActive) {
                                _this.animateActivation_();
                            }
                        }
                        if (!activationState.wasElementMadeActive) {
                            // Reset activation state immediately if element was not made active.
                            _this.activationState_ = _this.defaultActivationState_();
                        }
                    });
                };
                MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
                    return (evt !== undefined && evt.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
                };
                MDCRippleFoundation.prototype.animateActivation_ = function () {
                    var _this = this;
                    var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
                    var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
                    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
                    this.layoutInternal_();
                    var translateStart = '';
                    var translateEnd = '';
                    if (!this.adapter_.isUnbounded()) {
                        var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
                        translateStart = startPoint.x + "px, " + startPoint.y + "px";
                        translateEnd = endPoint.x + "px, " + endPoint.y + "px";
                    }
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
                    // Cancel any ongoing activation/deactivation animations
                    clearTimeout(this.activationTimer_);
                    clearTimeout(this.fgDeactivationRemovalTimer_);
                    this.rmBoundedActivationClasses_();
                    this.adapter_.removeClass(FG_DEACTIVATION);
                    // Force layout in order to re-trigger the animation.
                    this.adapter_.computeBoundingRect();
                    this.adapter_.addClass(FG_ACTIVATION);
                    this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
                };
                MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
                    var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
                    var startPoint;
                    if (wasActivatedByPointer) {
                        startPoint = getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
                    }
                    else {
                        startPoint = {
                            x: this.frame_.width / 2,
                            y: this.frame_.height / 2,
                        };
                    }
                    // Center the element around the start point.
                    startPoint = {
                        x: startPoint.x - (this.initialSize_ / 2),
                        y: startPoint.y - (this.initialSize_ / 2),
                    };
                    var endPoint = {
                        x: (this.frame_.width / 2) - (this.initialSize_ / 2),
                        y: (this.frame_.height / 2) - (this.initialSize_ / 2),
                    };
                    return { startPoint: startPoint, endPoint: endPoint };
                };
                MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
                    var _this = this;
                    // This method is called both when a pointing device is released, and when the activation animation ends.
                    // The deactivation animation should only run after both of those occur.
                    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
                    var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
                    var activationHasEnded = hasDeactivationUXRun || !isActivated;
                    if (activationHasEnded && this.activationAnimationHasEnded_) {
                        this.rmBoundedActivationClasses_();
                        this.adapter_.addClass(FG_DEACTIVATION);
                        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                            _this.adapter_.removeClass(FG_DEACTIVATION);
                        }, numbers$4.FG_DEACTIVATION_MS);
                    }
                };
                MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
                    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
                    this.adapter_.removeClass(FG_ACTIVATION);
                    this.activationAnimationHasEnded_ = false;
                    this.adapter_.computeBoundingRect();
                };
                MDCRippleFoundation.prototype.resetActivationState_ = function () {
                    var _this = this;
                    this.previousActivationEvent_ = this.activationState_.activationEvent;
                    this.activationState_ = this.defaultActivationState_();
                    // Touch devices may fire additional events for the same interaction within a short time.
                    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
                    setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
                };
                MDCRippleFoundation.prototype.deactivate_ = function () {
                    var _this = this;
                    var activationState = this.activationState_;
                    // This can happen in scenarios such as when you have a keyup event that blurs the element.
                    if (!activationState.isActivated) {
                        return;
                    }
                    var state = __assign({}, activationState);
                    if (activationState.isProgrammatic) {
                        requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
                        this.resetActivationState_();
                    }
                    else {
                        this.deregisterDeactivationHandlers_();
                        requestAnimationFrame(function () {
                            _this.activationState_.hasDeactivationUXRun = true;
                            _this.animateDeactivation_(state);
                            _this.resetActivationState_();
                        });
                    }
                };
                MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
                    var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
                    if (wasActivatedByPointer || wasElementMadeActive) {
                        this.runDeactivationUXLogicIfReady_();
                    }
                };
                MDCRippleFoundation.prototype.layoutInternal_ = function () {
                    var _this = this;
                    this.frame_ = this.adapter_.computeBoundingRect();
                    var maxDim = Math.max(this.frame_.height, this.frame_.width);
                    // Surface diameter is treated differently for unbounded vs. bounded ripples.
                    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
                    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
                    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
                    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
                    // `overflow: hidden`.
                    var getBoundedRadius = function () {
                        var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
                        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
                    };
                    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
                    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
                    this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
                    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
                    this.updateLayoutCssVars_();
                };
                MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
                    var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
                    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
                    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
                    if (this.adapter_.isUnbounded()) {
                        this.unboundedCoords_ = {
                            left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                            top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
                        };
                        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
                        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
                    }
                };
                return MDCRippleFoundation;
            }(MDCFoundation));

            /**
            @license
            Copyright 2018 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            const style$6 = css `@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}`;

            /**
            @license
            Copyright 2018 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            const supportsCssVariablesWin = supportsCssVariables(window);
            // NOTE: This is a workaround for
            // https://bugs.webkit.org/show_bug.cgi?id=173027. Since keyframes on
            // pseudo-elements (:after) are not supported in Shadow DOM, we put the keyframe
            // style into the <head> element.
            const isSafari = navigator.userAgent.match(/Safari/);
            let didApplyRippleStyle = false;
            const applyRippleStyle = () => {
                didApplyRippleStyle = true;
                const part = new NodePart({ templateFactory });
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                part.appendInto(document.head);
                part.setValue(style$6);
                part.commit();
            };
            /**
             * Applied a ripple to the node specified by {surfaceNode}.
             * @param options {RippleNodeOptions}
             */
            const rippleNode = (options) => {
                if (isSafari && !didApplyRippleStyle) {
                    applyRippleStyle();
                }
                // TODO(sorvell): This directive requires bringing css yourself. We probably
                // need to do this because of ShadyCSS, but on Safari, the keyframes styling
                // must be global. Perhaps this directive could fix that.
                const surfaceNode = options.surfaceNode;
                const interactionNode = options.interactionNode || surfaceNode;
                // only style interaction node if not in the same root
                if (interactionNode.getRootNode() !== surfaceNode.getRootNode()) {
                    if (interactionNode.style.position === '') {
                        interactionNode.style.position = 'relative';
                    }
                }
                const adapter = {
                    browserSupportsCssVars: () => supportsCssVariablesWin,
                    isUnbounded: () => options.unbounded === undefined ? true : options.unbounded,
                    isSurfaceActive: () => matches$1(interactionNode, ':active'),
                    isSurfaceDisabled: () => Boolean(options.disabled),
                    addClass: (className) => surfaceNode.classList.add(className),
                    removeClass: (className) => surfaceNode.classList.remove(className),
                    containsEventTarget: (target) => interactionNode.contains(target),
                    registerInteractionHandler: (type, handler) => interactionNode.addEventListener(type, handler, applyPassive$1()),
                    deregisterInteractionHandler: (type, handler) => interactionNode.removeEventListener(type, handler, applyPassive$1()),
                    registerDocumentInteractionHandler: (evtType, handler) => 
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    document.documentElement.addEventListener(evtType, handler, applyPassive$1()),
                    deregisterDocumentInteractionHandler: (evtType, handler) => 
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    document.documentElement.removeEventListener(evtType, handler, applyPassive$1()),
                    registerResizeHandler: (handler) => window.addEventListener('resize', handler),
                    deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
                    updateCssVariable: (varName, value) => surfaceNode.style.setProperty(varName, value),
                    computeBoundingRect: () => surfaceNode.getBoundingClientRect(),
                    getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
                };
                const rippleFoundation = new MDCRippleFoundation(adapter);
                rippleFoundation.init();
                return rippleFoundation;
            };
            const rippleInteractionNodes = new WeakMap();
            /**
             * A directive that applies a Material ripple to a part node. The directive
             * should be applied to a PropertyPart.
             * @param options {RippleOptions}
             */
            const ripple = directive((options = {}) => (part) => {
                const surfaceNode = part.committer.element;
                const interactionNode = options.interactionNode || surfaceNode;
                let rippleFoundation = part.value;
                // if the interaction node changes, destroy and invalidate the foundation.
                const existingInteractionNode = rippleInteractionNodes.get(rippleFoundation);
                if (existingInteractionNode !== undefined &&
                    existingInteractionNode !== interactionNode) {
                    rippleFoundation.destroy();
                    rippleFoundation = noChange;
                }
                // make the ripple, if needed
                if (rippleFoundation === noChange) {
                    rippleFoundation =
                        rippleNode(Object.assign({}, options, { surfaceNode }));
                    rippleInteractionNodes.set(rippleFoundation, interactionNode);
                    part.setValue(rippleFoundation);
                    // otherwise update settings as needed.
                }
                else {
                    if (options.unbounded !== undefined) {
                        rippleFoundation
                            .setUnbounded(options.unbounded);
                    }
                    if (options.disabled !== undefined) {
                        rippleFoundation
                            .setUnbounded(options.disabled);
                    }
                }
                if (options.active === true) {
                    rippleFoundation.activate();
                }
                else if (options.active === false) {
                    rippleFoundation.deactivate();
                }
            });

            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var strings$8 = {
                NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control',
            };
            var cssClasses$a = {
                DISABLED: 'mdc-radio--disabled',
                ROOT: 'mdc-radio',
            };

            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCRadioFoundation = /** @class */ (function (_super) {
                __extends(MDCRadioFoundation, _super);
                function MDCRadioFoundation(adapter) {
                    return _super.call(this, __assign({}, MDCRadioFoundation.defaultAdapter, adapter)) || this;
                }
                Object.defineProperty(MDCRadioFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses$a;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRadioFoundation, "strings", {
                    get: function () {
                        return strings$8;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRadioFoundation, "defaultAdapter", {
                    get: function () {
                        return {
                            addClass: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            setNativeControlDisabled: function () { return undefined; },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRadioFoundation.prototype.setDisabled = function (disabled) {
                    var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;
                    this.adapter_.setNativeControlDisabled(disabled);
                    if (disabled) {
                        this.adapter_.addClass(DISABLED);
                    }
                    else {
                        this.adapter_.removeClass(DISABLED);
                    }
                };
                return MDCRadioFoundation;
            }(MDCFoundation));

            class RadioBase extends FormElement {
                constructor() {
                    super(...arguments);
                    this._checked = false;
                    this.disabled = false;
                    this.value = '';
                    this.name = '';
                    this.mdcFoundationClass = MDCRadioFoundation;
                }
                get checked() {
                    return this._checked;
                }
                /**
                 * We define our own getter/setter for `checked` because we need to track
                 * changes to it synchronously.
                 *
                 * The order in which the `checked` property is set across radio buttons
                 * within the same group is very important. However, we can't rely on
                 * UpdatingElement's `updated` callback to observe these changes (which is
                 * also what the `@observer` decorator uses), because it batches changes to
                 * all properties.
                 *
                 * Consider:
                 *
                 *   radio1.disabled = true;
                 *   radio2.checked = true;
                 *   radio1.checked = true;
                 *
                 * In this case we'd first see all changes for radio1, and then for radio2,
                 * and we couldn't tell that radio1 was the most recently checked.
                 */
                set checked(checked) {
                    const oldValue = this._checked;
                    if (!!checked === !!oldValue) {
                        return;
                    }
                    this._checked = checked;
                    if (this.formElement) {
                        this.formElement.checked = checked;
                    }
                    if (this._selectionController !== undefined) {
                        this._selectionController.update(this);
                    }
                    this.requestUpdate('checked', oldValue);
                }
                connectedCallback() {
                    super.connectedCallback();
                    // Note that we must defer creating the selection controller until the
                    // element has connected, because selection controllers are keyed by the
                    // radio's shadow root. For example, if we're stamping in a lit-html map
                    // or repeat, then we'll be constructed before we're added to a root node.
                    //
                    // Also note if we aren't using native shadow DOM, then we don't technically
                    // need a SelectionController, because our inputs will share document-scoped
                    // native selection groups. However, it simplifies implementation and
                    // testing to use one in all cases. In particular, it means we correctly
                    // manage groups before the first update stamps the native input.
                    //
                    // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    this._selectionController = SelectionController.getController(this);
                    this._selectionController.register(this);
                    // With native <input type="radio">, when a checked radio is added to the
                    // root, then it wins. Immediately update to emulate this behavior.
                    this._selectionController.update(this);
                }
                disconnectedCallback() {
                    // The controller is initialized in connectedCallback, so if we are in
                    // disconnectedCallback then it must be initialized.
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    this._selectionController.unregister(this);
                    this._selectionController = undefined;
                }
                focusNative() {
                    this.formElement.focus();
                }
                get ripple() {
                    return this.rippleElement.ripple;
                }
                createAdapter() {
                    return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { setNativeControlDisabled: (disabled) => {
                            this.formElement.disabled = disabled;
                        } });
                }
                _changeHandler() {
                    this.checked = this.formElement.checked;
                }
                _focusHandler() {
                    if (this._selectionController !== undefined) {
                        this._selectionController.focus(this);
                    }
                }
                _clickHandler() {
                    // Firefox has weird behavior with radios if they are not focused
                    this.formElement.focus();
                }
                render() {
                    return html `<div class="mdc-radio" .ripple="${ripple()}"><input class="mdc-radio__native-control" type="radio" name="${this.name}" .checked="${this.checked}" .value="${this.value}" @change="${this._changeHandler}" @focus="${this._focusHandler}" @click="${this._clickHandler}"><div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div><div class="mdc-radio__inner-circle"></div></div><div class="mdc-radio__ripple"></div></div>`;
                }
                firstUpdated() {
                    super.firstUpdated();
                    // We might not have been able to synchronize this from the checked setter
                    // earlier, if checked was set before the input was stamped.
                    this.formElement.checked = this.checked;
                    if (this._selectionController !== undefined) {
                        this._selectionController.update(this);
                    }
                }
            }
            __decorate([
                query('.mdc-radio')
            ], RadioBase.prototype, "mdcRoot", void 0);
            __decorate([
                query('input')
            ], RadioBase.prototype, "formElement", void 0);
            __decorate([
                query('.mdc-radio__ripple')
            ], RadioBase.prototype, "rippleElement", void 0);
            __decorate([
                property({ type: Boolean, reflect: true })
            ], RadioBase.prototype, "checked", null);
            __decorate([
                property({ type: Boolean }),
                observer(function (disabled) {
                    this.mdcFoundation.setDisabled(disabled);
                })
            ], RadioBase.prototype, "disabled", void 0);
            __decorate([
                property({ type: String }),
                observer(function (value) {
                    this.formElement.value = value;
                })
            ], RadioBase.prototype, "value", void 0);
            __decorate([
                property({ type: String })
            ], RadioBase.prototype, "name", void 0);
            /**
             * Unique symbol for marking roots
             */
            const selectionController = Symbol('selection controller');
            class SelectionSet {
                constructor() {
                    this.selected = null;
                    this.ordered = null;
                    this.set = new Set();
                }
            }
            /**
             * Only one <input type="radio" name="group"> per group name can be checked at
             * once. However, the scope of "name" is the document/shadow root, so built-in
             * de-selection does not occur when two radio buttons are in different shadow
             * roots. This class bridges the checked state of radio buttons with the same
             * group name across different shadow roots.
             */
            class SelectionController {
                constructor(element) {
                    this.sets = {};
                    this.focusedSet = null;
                    this.mouseIsDown = false;
                    this.updating = false;
                    element.addEventListener('keydown', (e) => this.keyDownHandler(e));
                    element.addEventListener('mousedown', () => this.mousedownHandler());
                    element.addEventListener('mouseup', () => this.mouseupHandler());
                }
                static getController(element) {
                    const root = element.getRootNode();
                    let controller = root[selectionController];
                    if (controller === undefined) {
                        controller = new SelectionController(root);
                        root[selectionController] = controller;
                    }
                    return controller;
                }
                keyDownHandler(e) {
                    if (!(e.target instanceof RadioBase)) {
                        return;
                    }
                    const element = e.target;
                    if (!this.has(element)) {
                        return;
                    }
                    if (e.key == 'ArrowRight' || e.key == 'ArrowDown') {
                        this.next(element);
                    }
                    else if (e.key == 'ArrowLeft' || e.key == 'ArrowUp') {
                        this.previous(element);
                    }
                }
                mousedownHandler() {
                    this.mouseIsDown = true;
                }
                mouseupHandler() {
                    this.mouseIsDown = false;
                }
                has(element) {
                    const set = this.getSet(element.name);
                    return set.set.has(element);
                }
                previous(element) {
                    const order = this.getOrdered(element);
                    const i = order.indexOf(element);
                    this.select(order[i - 1] || order[order.length - 1]);
                }
                next(element) {
                    const order = this.getOrdered(element);
                    const i = order.indexOf(element);
                    this.select(order[i + 1] || order[0]);
                }
                select(element) {
                    element.click();
                }
                /**
                 * Helps to track the focused selection group and if it changes, focuses
                 * the selected item in the group. This matches native radio button behavior.
                 */
                focus(element) {
                    // Only manage focus state when using keyboard
                    if (this.mouseIsDown) {
                        return;
                    }
                    const set = this.getSet(element.name);
                    const currentFocusedSet = this.focusedSet;
                    this.focusedSet = set;
                    if (currentFocusedSet != set && set.selected && set.selected != element) {
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        set.selected.focusNative();
                    }
                }
                getOrdered(element) {
                    const set = this.getSet(element.name);
                    if (!set.ordered) {
                        set.ordered = Array.from(set.set);
                        set.ordered.sort((a, b) => a.compareDocumentPosition(b) == Node.DOCUMENT_POSITION_PRECEDING ?
                            1 :
                            0);
                    }
                    return set.ordered;
                }
                getSet(name) {
                    if (!this.sets[name]) {
                        this.sets[name] = new SelectionSet();
                    }
                    return this.sets[name];
                }
                register(element) {
                    const set = this.getSet(element.name);
                    set.set.add(element);
                    set.ordered = null;
                }
                unregister(element) {
                    const set = this.getSet(element.name);
                    set.set.delete(element);
                    set.ordered = null;
                    if (set.selected == element) {
                        set.selected = null;
                    }
                }
                update(element) {
                    if (this.updating) {
                        return;
                    }
                    this.updating = true;
                    if (element.checked) {
                        const set = this.getSet(element.name);
                        for (const e of set.set) {
                            e.checked = (e == element);
                        }
                        set.selected = element;
                    }
                    this.updating = false;
                }
            }

            /**
            @license
            Copyright 2018 Google Inc. All Rights Reserved.

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */
            const style$7 = css `.mdc-radio__native-control{top:0;right:0;left:0;width:40px;height:40px}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:border-box;width:40px;height:40px;padding:10px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary,#018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary,#018786)}.mdc-radio .mdc-radio__background::before{background-color:#018786}@supports not (-ms-ime-align:auto){.mdc-radio .mdc-radio__background::before{background-color:var(--mdc-theme-secondary,#018786)}}.mdc-radio__background{display:inline-block;position:absolute;left:10px;box-sizing:border-box;width:50%;height:50%}.mdc-radio__background::before{position:absolute;top:0;left:0;width:100%;height:100%;transform:scale(0,0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0s cubic-bezier(.4,0,.6,1),transform 120ms 0s cubic-bezier(.4,0,.6,1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0s cubic-bezier(.4,0,.6,1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0,0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0s cubic-bezier(.4,0,.6,1),border-color 120ms 0s cubic-bezier(.4,0,.6,1)}.mdc-radio__native-control{position:absolute;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:0;margin-bottom:0;margin-right:0;margin-left:0}.mdc-radio--touch .mdc-radio__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0s cubic-bezier(0,0,.2,1),transform 120ms 0s cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0s cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0s cubic-bezier(0,0,.2,1),border-color 120ms 0s cubic-bezier(0,0,.2,1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(.5);transition:transform 120ms 0s cubic-bezier(0,0,.2,1),border-color 120ms 0s cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.26)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0,0,0,.26)}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(2,2);opacity:.12;transition:opacity 120ms 0s cubic-bezier(0,0,.2,1),transform 120ms 0s cubic-bezier(0,0,.2,1)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-radio{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:transparent}.mdc-radio .mdc-radio__ripple::after,.mdc-radio .mdc-radio__ripple::before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-radio .mdc-radio__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-radio.mdc-ripple-upgraded--unbounded .mdc-radio__ripple::after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-radio.mdc-ripple-upgraded--foreground-activation .mdc-radio__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-radio.mdc-ripple-upgraded--foreground-deactivation .mdc-radio__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-radio .mdc-radio__ripple::after,.mdc-radio .mdc-radio__ripple::before{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after,.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before{top:var(--mdc-ripple-top,calc(50% - 50%));left:var(--mdc-ripple-left,calc(50% - 50%));width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-radio .mdc-radio__ripple::after,.mdc-radio .mdc-radio__ripple::before{background-color:#018786}@supports not (-ms-ime-align:auto){.mdc-radio .mdc-radio__ripple::after,.mdc-radio .mdc-radio__ripple::before{background-color:var(--mdc-theme-secondary,#018786)}}.mdc-radio:hover .mdc-radio__ripple::before{opacity:.04}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__ripple::before,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__ripple::before{transition-duration:75ms;opacity:.12}.mdc-radio:not(.mdc-ripple-upgraded) .mdc-radio__ripple::after{transition:opacity 150ms linear}.mdc-radio:not(.mdc-ripple-upgraded):active .mdc-radio__ripple::after{transition-duration:75ms;opacity:.12}.mdc-radio.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__background::before{content:none}.mdc-radio__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}:host{display:inline-block;outline:0}`;

            let Radio = class Radio extends RadioBase {
            };
            Radio.styles = style$7;
            Radio = __decorate([
                customElement('mwc-radio')
            ], Radio);

            ///

            const renderPhoto = photo => {
                if (photo) {
                    // const {width, height} = getDims(photo);
                    // return html`<div style="--ratio: ${width / height}"><img src=${getUrl(photo)} /></div>`;
                    // return html`<img src=${getUrl(photo)} />`;
                    const url = photo.id === 'TEMP' ? '' : getUrl(photo);
                    // if (photo.id === 'TEMP') {
                    //     return html`<div class="box"></div>`;
                    // }
                    return T`<img src="${url}" style="width:200px;height:200px">`;
                }
            };

            async function getPhotos(query, mock=false) {
                return new VirtualArray({
                    pageSize: 5,
                    fetchPage: async (pageSize, pageNum) => {
                        const resp = await searchFlickr(query, pageSize, pageNum, mock);
                        return {
                            // items: resp.photo.map(p => Object.assign({}, {width_o: 1920, height_o: 1080}, p)),
                            items: resp.photo,
                            totalItems: resp.total
                        };
                        // return resp.photo.filter(p => p.width_o);
                    },
                    placeholder: () => {
                        // return {"id":"TEMP","height_o":769,"width_o":1024};
                        return {id: "TEMP"};
                    },
                    callback: items => {
                        setState({ items });
                    }
                });
                // const resp = await searchFlickr(query, 500, 1, mock);
                // return resp.photo.filter(p => p.width_o);
            }

            ///

            const state = {
                open: false,
                showRange: false,
                items: [],
                direction: 'vertical',
                idealSize: 300,
                spacing: 8,
                query: 'sunset',
                Layout: Layout1dFlex,
                layout: null,
                first: 0,
                last: 0,
                firstVisible: 0,
                lastVisible: 0
            };

            function setState(changes) {
                let changed;
                for (let prop in changes) {
                    if (changes[prop] !== state[prop]) {
                        changed = true;
                        break;
                    }
                }
                if (changed) {
                    Object.assign(state, changes);
                    V(renderExample(), document.body);    
                }
                // especially hacky
                if (changes.Layout) {
                    updateItemSizes(state.items);
                }
                
            }

            function renderExample() {
                let {open, showRange, items, direction, idealSize, spacing, query, Layout, layout, first, last, firstVisible, lastVisible} = state;
                // if (!(layout instanceof Layout)) {
                //     layout = (state.layout = new Layout({idealSize, spacing, direction}));
                //     updateItemSizes(items);
                // }
                // else {
                //     Object.assign(layout, {idealSize, spacing, direction, totalItems: items.length});
                // }
                return T`<style>body{margin:0;height:100vh}.appLayout{height:100%;display:flex;flex-direction:column}.appBody{flex:1;display:flex}.sheet{width:0;border-right:1px solid #ddd;transition:width .25s ease-out}.controls{display:flex;flex-direction:column;width:256px;transform:translateX(-256px);transition:transform .25s ease-out}.controls>*{display:block;margin:8px}.scroller{height:unset;flex:1}.open .controls{transform:translateX(0)}.open .sheet{width:256px}.scroller>*{transition:all .25s}.box{background:#ddd}.sheet{font-family:Roboto,sans-serif;font-size:.75rem;font-weight:400;color:rgba(0,0,0,.6)}mwc-formfield{display:block}</style><div class="appLayout${open ? ' open' : ''}"><mwc-top-app-bar><mwc-icon-button slot="navigationIcon" @click="${() => setState({open: !open})}"><svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><use xlink:href="#settings"></use></svg></mwc-icon-button><div slot="title">lit-virtualizer grid layouts</div></mwc-top-app-bar><div class="appBody"><div class="sheet"><div class="controls"><mwc-textfield label="Ideal Size" type="number" min="50" max="500" step="5" .value="${idealSize}" @input="${(e) => setState({idealSize: e.target.value})}"></mwc-textfield><mwc-textfield label="Gap" type="number" min="0" max="100" step="1" .value="${spacing}" @input="${(e) => setState({spacing: e.target.value})}"></mwc-textfield><mwc-textfield label="Search Query" .value="${query}" @change="${(e) => search(e.target.value)}"></mwc-textfield><fieldset @change="${e => setState({direction: e.target.value})}"><legend>Direction</legend><mwc-formfield label="vertical"><mwc-radio name="direction" value="vertical" ?checked="${direction === 'vertical'}"></mwc-radio></mwc-formfield><mwc-formfield label="horizontal"><mwc-radio name="direction" value="horizontal" ?checked="${direction === 'horizontal'}"></mwc-radio></mwc-formfield></fieldset><fieldset @change="${e => setState({Layout: e.target.value})}"><legend>Layout</legend><mwc-formfield label="Square grid"><mwc-radio name="layout" .value="${Layout1dSquareGrid}" ?checked="${Layout === Layout1dSquareGrid}"></mwc-radio></mwc-formfield><mwc-formfield label="Flex wrap"><mwc-radio name="layout" .value="${Layout1dFlex}" ?checked="${Layout === Layout1dFlex}"></mwc-radio></mwc-formfield></fieldset><details ?open="${showRange}" @toggle="${e => setState({showRange: e.target.open})}"><summary>Range</summary>${showRange ? T`<p>Physical: ${first} to ${last}</p><p>Visible: ${firstVisible} to ${lastVisible}</p>` : ''
                    }</details></div></div><div class="scroller" @rangechange="${(e) => {
            if (showRange) {
                const {first, last, firstVisible, lastVisible} = e;
                setState({first, last, firstVisible, lastVisible});
            }
        }}">${scroll({items, renderItem, layout: {
                type: Layout,
                idealSize,
                spacing,
                direction
            }})}</div></div></div><svg width="0" height="0" class="screen-reader"><defs><path id="settings" d="M19.14 12.936c.036-.3.06-.612.06-.936s-.024-.636-.072-.936l2.028-1.584a.496.496 0 0 0 .12-.612l-1.92-3.324c-.12-.216-.372-.288-.588-.216l-2.388.96a7.03 7.03 0 0 0-1.62-.936l-.36-2.544a.48.48 0 0 0-.48-.408h-3.84a.467.467 0 0 0-.468.408l-.36 2.544a7.219 7.219 0 0 0-1.62.936l-2.388-.96a.475.475 0 0 0-.588.216l-1.92 3.324a.465.465 0 0 0 .12.612l2.028 1.584c-.048.3-.084.624-.084.936s.024.636.072.936L2.844 14.52a.496.496 0 0 0-.12.612l1.92 3.324c.12.216.372.288.588.216l2.388-.96a7.03 7.03 0 0 0 1.62.936l.36 2.544c.048.24.24.408.48.408h3.84c.24 0 .444-.168.468-.408l.36-2.544a7.219 7.219 0 0 0 1.62-.936l2.388.96c.216.084.468 0 .588-.216l1.92-3.324a.465.465 0 0 0-.12-.612l-2.004-1.584zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6z"/></defs></svg>`}

            ///

            const offline = false;
            const mock = offline;
            const renderItem =  renderPhoto;

            function itemSizes(items) {
                return items.reduce((obj, item, idx) => { obj[idx] = { width: item.width_o, height: item.height_o }; return obj; }, {});
            }

            function updateItemSizes(items) {
                const layout = document.querySelector('.scroller')[scrollerRef].layout;
                if (layout && typeof layout.updateItemSizes === 'function') {
                   layout.updateItemSizes(itemSizes(items));
                }
            }

            async function search(query) {
                const items = await getPhotos(query, mock);
                // for (let i = 0; i < items.length; i++) {
                //     console.log(items[i]);
                // }
                setState({items});
                // updateItemSizes(items);
            }

            V(renderExample(), document.body);
            search(state.query);

            // <!-- ${renderPhotos(items)} -->
            // <!-- ${renderBoxes(items)} -->
            // <!-- ${renderGridStyles()} -->
            // <!-- ${renderFlexWrapStyles()} -->

        }
    };
});
