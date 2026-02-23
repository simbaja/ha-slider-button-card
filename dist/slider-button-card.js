var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};function e(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}var i=function(){return(i=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function r(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}function o(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],r=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var a,n;"function"==typeof SuppressedError&&SuppressedError;function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}).apply(this,arguments)}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(a||(a={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(n||(n={}));function d(t){return t.substr(0,t.indexOf("."))}function l(t){return d(t.entity_id)}var c=["closed","locked","off"],h=function(t,e,i,r){r=r||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return o.detail=i,t.dispatchEvent(o),o},u={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function p(t,e){if(t in u)return u[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var f=function(t){h(window,"haptic",t)},m=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var r,o=d(e),a="group"===o?"homeassistant":o;switch(o){case"lock":r=i?"unlock":"lock";break;case"cover":r=i?"open_cover":"close_cover";break;default:r=i?"turn_on":"turn_off"}return t.callService(a,r,{entity_id:e})}(t,e,c.includes(t.states[e].state))},g=function(t,e,i,r){if(r||(r={action:"more-info"}),!r.confirmation||r.confirmation.exemptions&&r.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(f("warning"),confirm(r.confirmation.text||"Are you sure you want to "+r.action+"?")))switch(r.action){case"more-info":(i.entity||i.camera_image)&&h(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":r.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),h(window,"location-changed",{replace:i})}(0,r.navigation_path);break;case"url":r.url_path&&window.open(r.url_path);break;case"toggle":i.entity&&(m(e,i.entity),f("success"));break;case"call-service":if(!r.service)return void f("failure");var o=r.service.split(".",2);e.callService(o[0],o[1],r.service_data,r.target),f("success");break;case"fire-dom-event":h(t,"ll-custom",r)}},b=function(t,e,i,r){var o;"double_tap"===r&&i.double_tap_action?o=i.double_tap_action:"hold"===r&&i.hold_action?o=i.hold_action:"tap"===r&&i.tap_action&&(o=i.tap_action),g(t,e,i,o)};var v={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},_={binary_sensor:function(t,e){var i="off"===t;switch(null==e?void 0:e.attributes.device_class){case"battery":return i?"mdi:battery":"mdi:battery-outline";case"battery_charging":return i?"mdi:battery":"mdi:battery-charging";case"cold":return i?"mdi:thermometer":"mdi:snowflake";case"connectivity":return i?"mdi:server-network-off":"mdi:server-network";case"door":return i?"mdi:door-closed":"mdi:door-open";case"garage_door":return i?"mdi:garage":"mdi:garage-open";case"power":return i?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return i?"mdi:check-circle":"mdi:alert-circle";case"smoke":return i?"mdi:check-circle":"mdi:smoke";case"heat":return i?"mdi:thermometer":"mdi:fire";case"light":return i?"mdi:brightness-5":"mdi:brightness-7";case"lock":return i?"mdi:lock":"mdi:lock-open";case"moisture":return i?"mdi:water-off":"mdi:water";case"motion":return i?"mdi:walk":"mdi:run";case"occupancy":return i?"mdi:home-outline":"mdi:home";case"opening":return i?"mdi:square":"mdi:square-outline";case"plug":return i?"mdi:power-plug-off":"mdi:power-plug";case"presence":return i?"mdi:home-outline":"mdi:home";case"running":return i?"mdi:stop":"mdi:play";case"sound":return i?"mdi:music-note-off":"mdi:music-note";case"update":return i?"mdi:package":"mdi:package-up";case"vibration":return i?"mdi:crop-portrait":"mdi:vibrate";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"mdi:garage-open":"mdi:garage";case"door":return e?"mdi:door-open":"mdi:door-closed";case"shutter":return e?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return e?"mdi:blinds-open":"mdi:blinds";case"window":return e?"mdi:window-open":"mdi:window-closed";default:return p("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in v)return v[e];if("battery"===e){var i=Number(t.state);if(isNaN(i))return"mdi:battery-unknown";var r=10*Math.round(i/10);return r>=100?"mdi:battery":r<=0?"mdi:battery-alert":"hass:battery-"+r}var o=t.attributes.unit_of_measurement;return"°C"===o||"°F"===o?"mdi:thermometer":p("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?p("input_datetime"):"mdi:calendar":"mdi:clock"}},x=Function.prototype.toString,y=Object.create,w=Object.defineProperty,k=Object.getOwnPropertyDescriptor,E=Object.getOwnPropertyNames,A=Object.getOwnPropertySymbols,O=Object.getPrototypeOf,S=Object.prototype,C=S.hasOwnProperty,T=S.propertyIsEnumerable,$="function"==typeof A,I="function"==typeof WeakMap,R=function(){if(I)return function(){return new WeakMap};var t=function(){function t(){this._keys=[],this._values=[]}return t.prototype.has=function(t){return!!~this._keys.indexOf(t)},t.prototype.get=function(t){return this._values[this._keys.indexOf(t)]},t.prototype.set=function(t,e){this._keys.push(t),this._values.push(e)},t}();return function(){return new t}}(),P=function(t,e){var i=t.__proto__||O(t);if(!i)return y(null);var r=i.constructor;if(r===e.Object)return i===e.Object.prototype?{}:y(i);if(~x.call(r).indexOf("[native code]"))try{return new r}catch(t){}return y(i)},L=function(t,e,i,r){var o=P(t,e);for(var a in r.set(t,o),t)C.call(t,a)&&(o[a]=i(t[a],r));if($)for(var n=A(t),s=0,d=n.length,l=void 0;s<d;++s)l=n[s],T.call(t,l)&&(o[l]=i(t[l],r));return o},z=function(t,e,i,r){var o=P(t,e);r.set(t,o);for(var a=$?E(t).concat(A(t)):E(t),n=0,s=a.length,d=void 0,l=void 0;n<s;++n)if("callee"!==(d=a[n])&&"caller"!==d)if(l=k(t,d)){l.get||l.set||(l.value=i(t[d],r));try{w(o,d,l)}catch(t){o[d]=l.value}}else o[d]=i(t[d],r);return o},H=Array.isArray,N=Object.getPrototypeOf,j=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:(console&&console.error&&console.error('Unable to locate global object, returning "this".'),this)}();function M(t,e){var i=!(!e||!e.isStrict),r=e&&e.realm||j,o=i?z:L,a=function(t,e){if(!t||"object"!=typeof t)return t;if(e.has(t))return e.get(t);var n,s,d,l=t.__proto__||N(t),c=l&&l.constructor;if(!c||c===r.Object)return o(t,r,a,e);if(H(t)){if(i)return z(t,r,a,e);n=new c,e.set(t,n);for(var h=0,u=t.length;h<u;++h)n[h]=a(t[h],e);return n}if(t instanceof r.Date)return new c(t.getTime());if(t instanceof r.RegExp)return(n=new c(t.source,t.flags||(d="",(s=t).global&&(d+="g"),s.ignoreCase&&(d+="i"),s.multiline&&(d+="m"),s.unicode&&(d+="u"),s.sticky&&(d+="y"),d))).lastIndex=t.lastIndex,n;if(r.Map&&t instanceof r.Map)return n=new c,e.set(t,n),t.forEach((function(t,i){n.set(i,a(t,e))})),n;if(r.Set&&t instanceof r.Set)return n=new c,e.set(t,n),t.forEach((function(t){n.add(a(t,e))})),n;if(r.Blob&&t instanceof r.Blob)return t.slice(0,t.size,t.type);if(r.Buffer&&r.Buffer.isBuffer(t))return n=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(t.length):new c(t.length),e.set(t,n),t.copy(n),n;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(t))return n=new c(t.buffer.slice(0)),e.set(t,n),n;if(t instanceof r.ArrayBuffer)return n=t.slice(0),e.set(t,n),n}return"function"==typeof t.then||t instanceof Error||r.WeakMap&&t instanceof r.WeakMap||r.WeakSet&&t instanceof r.WeakSet?t:o(t,r,a,e)};return a(t,R())}M.default=M,M.strict=function(t,e){return M(t,{isStrict:!0,realm:e?e.realm:void 0})};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F=window,U=F.ShadowRoot&&(void 0===F.ShadyCSS||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),V=new WeakMap;class B{constructor(t,e,i){if(this._$cssResult$=!0,i!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(U&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=V.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&V.set(e,t))}return t}toString(){return this.cssText}}const G=U?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new B("string"==typeof t?t:t+"",void 0,D))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var q;const W=window,X=W.trustedTypes,Y=X?X.emptyScript:"",K=W.reactiveElementPolyfillSupport,Z={toAttribute(t,e){switch(e){case Boolean:t=t?Y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},J=(t,e)=>e!==t&&(e==e||t==t),Q={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:J},tt="finalized";class et extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))}),t}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const o=this[t];this[e]=r,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Q}static finalize(){if(this.hasOwnProperty(tt))return!1;this[tt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(G(t))}else void 0!==t&&e.push(G(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{U?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),r=F.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Q){var r;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:Z).toAttribute(e,i.type);this._$El=t,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,o=r._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=r.getPropertyOptions(o),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:Z;this._$El=o,this[o]=a.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||J)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it;et[tt]=!0,et.elementProperties=new Map,et.elementStyles=[],et.shadowRootOptions={mode:"open"},null==K||K({ReactiveElement:et}),(null!==(q=W.reactiveElementVersions)&&void 0!==q?q:W.reactiveElementVersions=[]).push("1.6.3");const rt=window,ot=rt.trustedTypes,at=ot?ot.createPolicy("lit-html",{createHTML:t=>t}):void 0,nt=`lit$${(Math.random()+"").slice(9)}$`,st="?"+nt,dt=`<${st}>`,lt=document,ct=()=>lt.createComment(""),ht=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ut=Array.isArray,pt="[ \t\n\f\r]",ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mt=/-->/g,gt=/>/g,bt=RegExp(`>|${pt}(?:([^\\s"'>=/]+)(${pt}*=${pt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,_t=/"/g,xt=/^(?:script|style|textarea|title)$/i,yt=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),wt=Symbol.for("lit-noChange"),kt=Symbol.for("lit-nothing"),Et=new WeakMap,At=lt.createTreeWalker(lt,129,null,!1);function Ot(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==at?at.createHTML(e):e}const St=(t,e)=>{const i=t.length-1,r=[];let o,a=2===e?"<svg>":"",n=ft;for(let e=0;e<i;e++){const i=t[e];let s,d,l=-1,c=0;for(;c<i.length&&(n.lastIndex=c,d=n.exec(i),null!==d);)c=n.lastIndex,n===ft?"!--"===d[1]?n=mt:void 0!==d[1]?n=gt:void 0!==d[2]?(xt.test(d[2])&&(o=RegExp("</"+d[2],"g")),n=bt):void 0!==d[3]&&(n=bt):n===bt?">"===d[0]?(n=null!=o?o:ft,l=-1):void 0===d[1]?l=-2:(l=n.lastIndex-d[2].length,s=d[1],n=void 0===d[3]?bt:'"'===d[3]?_t:vt):n===_t||n===vt?n=bt:n===mt||n===gt?n=ft:(n=bt,o=void 0);const h=n===bt&&t[e+1].startsWith("/>")?" ":"";a+=n===ft?i+dt:l>=0?(r.push(s),i.slice(0,l)+"$lit$"+i.slice(l)+nt+h):i+nt+(-2===l?(r.push(void 0),e):h)}return[Ot(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),r]};class Ct{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,a=0;const n=t.length-1,s=this.parts,[d,l]=St(t,e);if(this.el=Ct.createElement(d,i),At.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=At.nextNode())&&s.length<n;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(nt)){const i=l[a++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(nt),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Pt:"?"===e[1]?zt:"@"===e[1]?Ht:Rt})}else s.push({type:6,index:o})}for(const e of t)r.removeAttribute(e)}if(xt.test(r.tagName)){const t=r.textContent.split(nt),e=t.length-1;if(e>0){r.textContent=ot?ot.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],ct()),At.nextNode(),s.push({type:2,index:++o});r.append(t[e],ct())}}}else if(8===r.nodeType)if(r.data===st)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(nt,t+1));)s.push({type:7,index:o}),t+=nt.length-1}o++}}static createElement(t,e){const i=lt.createElement("template");return i.innerHTML=t,i}}function Tt(t,e,i=t,r){var o,a,n,s;if(e===wt)return e;let d=void 0!==r?null===(o=i._$Co)||void 0===o?void 0:o[r]:i._$Cl;const l=ht(e)?void 0:e._$litDirective$;return(null==d?void 0:d.constructor)!==l&&(null===(a=null==d?void 0:d._$AO)||void 0===a||a.call(d,!1),void 0===l?d=void 0:(d=new l(t),d._$AT(t,i,r)),void 0!==r?(null!==(n=(s=i)._$Co)&&void 0!==n?n:s._$Co=[])[r]=d:i._$Cl=d),void 0!==d&&(e=Tt(t,d._$AS(t,e.values),d,r)),e}class $t{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:r}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:lt).importNode(i,!0);At.currentNode=o;let a=At.nextNode(),n=0,s=0,d=r[0];for(;void 0!==d;){if(n===d.index){let e;2===d.type?e=new It(a,a.nextSibling,this,t):1===d.type?e=new d.ctor(a,d.name,d.strings,this,t):6===d.type&&(e=new Nt(a,this,t)),this._$AV.push(e),d=r[++s]}n!==(null==d?void 0:d.index)&&(a=At.nextNode(),n++)}return At.currentNode=lt,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class It{constructor(t,e,i,r){var o;this.type=2,this._$AH=kt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cp=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Tt(this,t,e),ht(t)?t===kt||null==t||""===t?(this._$AH!==kt&&this._$AR(),this._$AH=kt):t!==this._$AH&&t!==wt&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>ut(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==kt&&ht(this._$AH)?this._$AA.nextSibling.data=t:this.$(lt.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Ct.createElement(Ot(r.h,r.h[0]),this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new $t(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=Et.get(t.strings);return void 0===e&&Et.set(t.strings,e=new Ct(t)),e}T(t){ut(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new It(this.k(ct()),this.k(ct()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Rt{constructor(t,e,i,r,o){this.type=1,this._$AH=kt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=kt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const o=this.strings;let a=!1;if(void 0===o)t=Tt(this,t,e,0),a=!ht(t)||t!==this._$AH&&t!==wt,a&&(this._$AH=t);else{const r=t;let n,s;for(t=o[0],n=0;n<o.length-1;n++)s=Tt(this,r[i+n],e,n),s===wt&&(s=this._$AH[n]),a||(a=!ht(s)||s!==this._$AH[n]),s===kt?t=kt:t!==kt&&(t+=(null!=s?s:"")+o[n+1]),this._$AH[n]=s}a&&!r&&this.j(t)}j(t){t===kt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Pt extends Rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===kt?void 0:t}}const Lt=ot?ot.emptyScript:"";class zt extends Rt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==kt?this.element.setAttribute(this.name,Lt):this.element.removeAttribute(this.name)}}class Ht extends Rt{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Tt(this,t,e,0))&&void 0!==i?i:kt)===wt)return;const r=this._$AH,o=t===kt&&r!==kt||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==kt&&(r===kt||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Tt(this,t)}}const jt=rt.litHtmlPolyfillSupport;null==jt||jt(Ct,It),(null!==(it=rt.litHtmlVersions)&&void 0!==it?it:rt.litHtmlVersions=[]).push("2.8.0");const Mt=window,Ft=Mt.ShadowRoot&&(void 0===Mt.ShadyCSS||Mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ut=Symbol(),Dt=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vt{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ft&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Dt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Dt.set(e,t))}return t}toString(){return this.cssText}}const Bt=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new Vt(i,t,Ut)},Gt=Ft?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new Vt("string"==typeof t?t:t+"",void 0,Ut))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var qt;const Wt=window,Xt=Wt.trustedTypes,Yt=Xt?Xt.emptyScript:"",Kt=Wt.reactiveElementPolyfillSupport,Zt={toAttribute(t,e){switch(e){case Boolean:t=t?Yt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},Jt=(t,e)=>e!==t&&(e==e||t==t),Qt={attribute:!0,type:String,converter:Zt,reflect:!1,hasChanged:Jt},te="finalized";class ee extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))}),t}static createProperty(t,e=Qt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const o=this[t];this[e]=r,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Qt}static finalize(){if(this.hasOwnProperty(te))return!1;this[te]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Gt(t))}else void 0!==t&&e.push(Gt(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{Ft?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),r=Mt.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Qt){var r;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:Zt).toAttribute(e,i.type);this._$El=t,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,o=r._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=r.getPropertyOptions(o),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:Zt;this._$El=o,this[o]=a.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Jt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ie,re;ee[te]=!0,ee.elementProperties=new Map,ee.elementStyles=[],ee.shadowRootOptions={mode:"open"},null==Kt||Kt({ReactiveElement:ee}),(null!==(qt=Wt.reactiveElementVersions)&&void 0!==qt?qt:Wt.reactiveElementVersions=[]).push("1.6.3");class oe extends ee{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var r,o;const a=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let n=a._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;a._$litPart$=n=new It(e.insertBefore(ct(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return wt}}oe.finalized=!0,oe._$litElement$=!0,null===(ie=globalThis.litElementHydrateSupport)||void 0===ie||ie.call(globalThis,{LitElement:oe});const ae=globalThis.litElementPolyfillSupport;null==ae||ae({LitElement:oe}),(null!==(re=globalThis.litElementVersions)&&void 0!==re?re:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,se=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function de(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):se(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function le(t){return de({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=({finisher:t,descriptor:e})=>(i,r)=>{var o;if(void 0===r){const r=null!==(o=i.originalKey)&&void 0!==o?o:i.key,a=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(a.finisher=function(e){t(e,r)}),a}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(o,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function he(t){return ce({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(t,e){return ce({descriptor:i=>{const r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var pe;const fe=null!=(null===(pe=window.HTMLSlotElement)||void 0===pe?void 0:pe.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const me=1,ge=3,be=4,ve=t=>(...e)=>({_$litDirective$:t,values:e});class _e{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=ve(class extends _e{constructor(t){var e;if(super(t),t.type!==me||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,r;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const o=t.element.classList;this.it.forEach(t=>{t in e||(o.remove(t),this.it.delete(t))});for(const t in e){const i=!!e[t];i===this.it.has(t)||(null===(r=this.nt)||void 0===r?void 0:r.has(t))||(i?(o.add(t),this.it.add(t)):(o.remove(t),this.it.delete(t)))}return wt}}),ye=t=>null!=t?t:kt
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,we=ve(class extends _e{constructor(t){var e;if(super(t),t.type!==me||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach(t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")});for(const t in e){const r=e[t];if(null!=r){this.ht.add(t);const e="string"==typeof r&&r.endsWith(" !important");t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?"important":""):i[t]=r}}return wt}}),ke="ontouchstart"in window||navigator.maxTouchPoints>0||(navigator.msMaxTouchPoints||0)>0;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ee extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:ke?"100px":"50px",height:ke?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,i),this.held=!0},this.holdTime)},r=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?h(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,h(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,h(t,"action",{action:"double_tap"})):h(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",r),t.addEventListener("touchcancel",r),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",r),t.addEventListener("keyup",t=>{13===t.keyCode&&r(t)})}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-slider-button",Ee);const Ae=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-slider-button"))return t.querySelector("action-handler-slider-button");const e=document.createElement("action-handler-slider-button");return t.appendChild(e),e})();i&&i.bind(t,e)};const Oe=ve(class extends _e{constructor(t){super(t)}render(t){return wt}update(t,[e]){return Ae(t.element,e||{}),this.render(e)}});var Se,Ce,Te,$e;!function(t){t.TOGGLE="toggle",t.CUSTOM="custom",t.DEFAULT="default"}(Se||(Se={})),function(t){t.LEFT_RIGHT="left-right",t.RIGHT_LEFT="right-left",t.TOP_BOTTOM="top-bottom",t.BOTTOM_TOP="bottom-top"}(Ce||(Ce={})),function(t){t.SOLID="solid",t.GRADIENT="gradient",t.TRIANGLE="triangle",t.STRIPED="striped",t.CUSTOM="custom"}(Te||(Te={})),function(t){t.LIGHT="light",t.SWITCH="switch",t.FAN="fan",t.COVER="cover",t.INPUT_BOOLEAN="input_boolean",t.INPUT_NUMBER="input_number",t.MEDIA_PLAYER="media_player",t.NUMBER="number",t.CLIMATE="climate",t.LOCK="lock",t.AUTOMATION="automation",t.TIMER="timer"}($e||($e={}));const Ie={mode:Se.DEFAULT,show:!0,show_spinner:!0},Re={show:!0,use_state_color:!0,tap_action:{action:"more-info"}},Pe={direction:Ce.LEFT_RIGHT,background:Te.SOLID,use_percentage_bg_opacity:!1,use_state_color:!1,show_track:!1,toggle_on_click:!1,force_square:!1,change_during_slide:!1,change_during_slide_rate:300},Le=new Map([[$e.LIGHT,{direction:Ce.LEFT_RIGHT,background:Te.GRADIENT,use_state_color:!0,use_percentage_bg_opacity:!1,show_track:!1,toggle_on_click:!1,force_square:!1,show_attribute:!1,change_during_slide:!1,change_during_slide_rate:300}],[$e.FAN,{direction:Ce.LEFT_RIGHT,background:Te.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,toggle_on_click:!1,force_square:!1,show_attribute:!1,change_during_slide:!1,change_during_slide_rate:300}],[$e.SWITCH,{direction:Ce.LEFT_RIGHT,background:Te.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,toggle_on_click:!0,force_square:!1,show_attribute:!1,change_during_slide:!1,change_during_slide_rate:300}],[$e.AUTOMATION,{direction:Ce.LEFT_RIGHT,background:Te.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,toggle_on_click:!0,force_square:!1,show_attribute:!1,change_during_slide:!1,change_during_slide_rate:300}],[$e.COVER,{direction:Ce.TOP_BOTTOM,background:Te.STRIPED,use_state_color:!1,use_percentage_bg_opacity:!1,toggle_on_click:!1,show_track:!1,force_square:!1,invert:!0,show_attribute:!1,change_during_slide:!1,change_during_slide_rate:300}],[$e.INPUT_BOOLEAN,{direction:Ce.LEFT_RIGHT,background:Te.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,toggle_on_click:!0,force_square:!1,show_attribute:!1,change_during_slide:!1,change_during_slide_rate:300}],[$e.INPUT_NUMBER,{direction:Ce.LEFT_RIGHT,background:Te.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,toggle_on_click:!1,force_square:!1,show_attribute:!1,change_during_slide:!1,change_during_slide_rate:300}],[$e.MEDIA_PLAYER,{direction:Ce.LEFT_RIGHT,background:Te.TRIANGLE,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!0,toggle_on_click:!1,force_square:!1,show_attribute:!0,attribute:"media_title",change_during_slide:!1,change_during_slide_rate:300}],[$e.LOCK,{direction:Ce.LEFT_RIGHT,background:Te.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,toggle_on_click:!0,force_square:!1,show_attribute:!1,change_during_slide:!1,change_during_slide_rate:300}],[$e.CLIMATE,{direction:Ce.LEFT_RIGHT,background:Te.TRIANGLE,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!0,toggle_on_click:!1,force_square:!1,show_attribute:!1,change_during_slide:!1,change_during_slide_rate:300}],[$e.TIMER,{direction:Ce.LEFT_RIGHT,background:Te.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!0,toggle_on_click:!1,force_square:!1,show_attribute:!1,change_during_slide:!1,change_during_slide_rate:300}]]);var ze,He,Ne;function je(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var i=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function Me(t){return Math.min(1,Math.max(0,t))}function Fe(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Ue(t){return t<=1?"".concat(100*Number(t),"%"):t}function De(t){return 1===t.length?"0"+t:String(t)}function Ve(t,e,i){t=je(t,255),e=je(e,255),i=je(i,255);var r=Math.max(t,e,i),o=Math.min(t,e,i),a=0,n=0,s=(r+o)/2;if(r===o)n=0,a=0;else{var d=r-o;switch(n=s>.5?d/(2-r-o):d/(r+o),r){case t:a=(e-i)/d+(e<i?6:0);break;case e:a=(i-t)/d+2;break;case i:a=(t-e)/d+4}a/=6}return{h:a,s:n,l:s}}function Be(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function Ge(t,e,i){t=je(t,255),e=je(e,255),i=je(i,255);var r=Math.max(t,e,i),o=Math.min(t,e,i),a=0,n=r,s=r-o,d=0===r?0:s/r;if(r===o)a=0;else{switch(r){case t:a=(e-i)/s+(e<i?6:0);break;case e:a=(i-t)/s+2;break;case i:a=(t-e)/s+4}a/=6}return{h:a,s:d,v:n}}function qe(t,e,i,r){var o=[De(Math.round(t).toString(16)),De(Math.round(e).toString(16)),De(Math.round(i).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function We(t){return Math.round(255*parseFloat(t)).toString(16)}function Xe(t){return Ye(t)/255}function Ye(t){return parseInt(t,16)}!function(t){t.COLOR_TEMP="color_temp",t.BRIGHTNESS="brightness",t.BRIGHTNESS_PCT="brightness_pct",t.HUE="hue",t.SATURATION="saturation",t.ON_OFF="onoff"}(ze||(ze={})),function(t){t.COLOR_TEMP="color_temp",t.BRIGHTNESS="brightness",t.HS="hs",t.ON_OFF="onoff"}(He||(He={})),function(t){t.POSITION="position",t.TILT="tilt"}(Ne||(Ne={}));var Ke={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ze(t){var e={r:0,g:0,b:0},i=1,r=null,o=null,a=null,n=!1,s=!1;return"string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;var e=!1;if(Ke[t])t=Ke[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};var i=ei.rgb.exec(t);if(i)return{r:i[1],g:i[2],b:i[3]};if(i=ei.rgba.exec(t))return{r:i[1],g:i[2],b:i[3],a:i[4]};if(i=ei.hsl.exec(t))return{h:i[1],s:i[2],l:i[3]};if(i=ei.hsla.exec(t))return{h:i[1],s:i[2],l:i[3],a:i[4]};if(i=ei.hsv.exec(t))return{h:i[1],s:i[2],v:i[3]};if(i=ei.hsva.exec(t))return{h:i[1],s:i[2],v:i[3],a:i[4]};if(i=ei.hex8.exec(t))return{r:Ye(i[1]),g:Ye(i[2]),b:Ye(i[3]),a:Xe(i[4]),format:e?"name":"hex8"};if(i=ei.hex6.exec(t))return{r:Ye(i[1]),g:Ye(i[2]),b:Ye(i[3]),format:e?"name":"hex"};if(i=ei.hex4.exec(t))return{r:Ye(i[1]+i[1]),g:Ye(i[2]+i[2]),b:Ye(i[3]+i[3]),a:Xe(i[4]+i[4]),format:e?"name":"hex8"};if(i=ei.hex3.exec(t))return{r:Ye(i[1]+i[1]),g:Ye(i[2]+i[2]),b:Ye(i[3]+i[3]),format:e?"name":"hex"};return!1}(t)),"object"==typeof t&&(ii(t.r)&&ii(t.g)&&ii(t.b)?(e=function(t,e,i){return{r:255*je(t,255),g:255*je(e,255),b:255*je(i,255)}}(t.r,t.g,t.b),n=!0,s="%"===String(t.r).substr(-1)?"prgb":"rgb"):ii(t.h)&&ii(t.s)&&ii(t.v)?(r=Ue(t.s),o=Ue(t.v),e=function(t,e,i){t=6*je(t,360),e=je(e,100),i=je(i,100);var r=Math.floor(t),o=t-r,a=i*(1-e),n=i*(1-o*e),s=i*(1-(1-o)*e),d=r%6;return{r:255*[i,n,a,a,s,i][d],g:255*[s,i,i,n,a,a][d],b:255*[a,a,s,i,i,n][d]}}(t.h,r,o),n=!0,s="hsv"):ii(t.h)&&ii(t.s)&&ii(t.l)&&(r=Ue(t.s),a=Ue(t.l),e=function(t,e,i){var r,o,a;if(t=je(t,360),e=je(e,100),i=je(i,100),0===e)o=i,a=i,r=i;else{var n=i<.5?i*(1+e):i+e-i*e,s=2*i-n;r=Be(s,n,t+1/3),o=Be(s,n,t),a=Be(s,n,t-1/3)}return{r:255*r,g:255*o,b:255*a}}(t.h,r,a),n=!0,s="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=Fe(i),{ok:n,format:t.format||s,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}var Je="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),Qe="[\\s|\\(]+(".concat(Je,")[,|\\s]+(").concat(Je,")[,|\\s]+(").concat(Je,")\\s*\\)?"),ti="[\\s|\\(]+(".concat(Je,")[,|\\s]+(").concat(Je,")[,|\\s]+(").concat(Je,")[,|\\s]+(").concat(Je,")\\s*\\)?"),ei={CSS_UNIT:new RegExp(Je),rgb:new RegExp("rgb"+Qe),rgba:new RegExp("rgba"+ti),hsl:new RegExp("hsl"+Qe),hsla:new RegExp("hsla"+ti),hsv:new RegExp("hsv"+Qe),hsva:new RegExp("hsva"+ti),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ii(t){return Boolean(ei.CSS_UNIT.exec(String(t)))}var ri=function(){function t(e,i){var r;if(void 0===e&&(e=""),void 0===i&&(i={}),e instanceof t)return e;"number"==typeof e&&(e=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(e)),this.originalInput=e;var o=Ze(e);this.originalInput=e,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(r=i.format)&&void 0!==r?r:o.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,i=t.g/255,r=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=Fe(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){return 0===this.toHsl().s},t.prototype.toHsv=function(){var t=Ge(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=Ge(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),r=Math.round(100*t.v);return 1===this.a?"hsv(".concat(e,", ").concat(i,"%, ").concat(r,"%)"):"hsva(".concat(e,", ").concat(i,"%, ").concat(r,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var t=Ve(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=Ve(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),r=Math.round(100*t.l);return 1===this.a?"hsl(".concat(e,", ").concat(i,"%, ").concat(r,"%)"):"hsla(".concat(e,", ").concat(i,"%, ").concat(r,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(t){return void 0===t&&(t=!1),qe(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),function(t,e,i,r,o){var a=[De(Math.round(t).toString(16)),De(Math.round(e).toString(16)),De(Math.round(i).toString(16)),De(We(r))];return o&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toHexShortString=function(t){return void 0===t&&(t=!1),1===this.a?this.toHexString(t):this.toHex8String(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(e,", ").concat(i,")"):"rgba(".concat(t,", ").concat(e,", ").concat(i,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*je(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*je(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+qe(this.r,this.g,this.b,!1),e=0,i=Object.entries(Ke);e<i.length;e++){var r=i[e],o=r[0];if(t===r[1])return o}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!=t?t:this.format;var i=!1,r=this.a<1&&this.a>=0;return e||!r||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),i||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.l+=e/100,i.l=Me(i.l),new t(i)},t.prototype.brighten=function(e){void 0===e&&(e=10);var i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-e/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-e/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-e/100*255))),new t(i)},t.prototype.darken=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.l-=e/100,i.l=Me(i.l),new t(i)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.s-=e/100,i.s=Me(i.s),new t(i)},t.prototype.saturate=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.s+=e/100,i.s=Me(i.s),new t(i)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var i=this.toHsl(),r=(i.h+e)%360;return i.h=r<0?360+r:r,new t(i)},t.prototype.mix=function(e,i){void 0===i&&(i=50);var r=this.toRgb(),o=new t(e).toRgb(),a=i/100;return new t({r:(o.r-r.r)*a+r.r,g:(o.g-r.g)*a+r.g,b:(o.b-r.b)*a+r.b,a:(o.a-r.a)*a+r.a})},t.prototype.analogous=function(e,i){void 0===e&&(e=6),void 0===i&&(i=30);var r=this.toHsl(),o=360/i,a=[this];for(r.h=(r.h-(o*e>>1)+720)%360;--e;)r.h=(r.h+o)%360,a.push(new t(r));return a},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var i=this.toHsv(),r=i.h,o=i.s,a=i.v,n=[],s=1/e;e--;)n.push(new t({h:r,s:o,v:a})),a=(a+s)%1;return n},t.prototype.splitcomplement=function(){var e=this.toHsl(),i=e.h;return[this,new t({h:(i+72)%360,s:e.s,l:e.l}),new t({h:(i+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var i=this.toRgb(),r=new t(e).toRgb(),o=i.a+r.a*(1-i.a);return new t({r:(i.r*i.a+r.r*r.a*(1-i.a))/o,g:(i.g*i.a+r.g*r.a*(1-i.a))/o,b:(i.b*i.a+r.b*r.a*(1-i.a))/o,a:o})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var i=this.toHsl(),r=i.h,o=[this],a=360/e,n=1;n<e;n++)o.push(new t({h:(r+n*a)%360,s:i.s,l:i.l}));return o},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();function oi(t,e){return void 0===t&&(t=""),void 0===e&&(e={}),new ri(t,e)}function ai(t){return Object.keys(t).map(e=>t[e]).filter(t=>"string"==typeof t)}const ni=(t,e,i)=>{if(1!==e.length)return t[e[0]]||(t[e[0]]={}),ni(t[e[0]],e.slice(1),i);t[e[0]]=i};function si(t){const e=d(t)||$e.LIGHT;return M(Le.get(e)||Pe)}function di(t,e,i){const r=new ri("rgb(255, 160, 0)"),o=new ri("rgb(166, 209, 255)"),a=new ri("white"),n=(t-e)/(i-e)*100;return n<50?oi(o).mix(a,2*n).toRgbString():oi(a).mix(r,2*(n-50)).toRgbString()}function li(t,e,i){return(t-e)/i*100}function ci(t,e,i){return Math.floor(t*(i-e)/100+e)}class hi{constructor(t=50){this._emittedContexts=new Set,this._cursor=0,this._tracker=new Array(t)}addContext(t){this._emittedContexts.add(t);const e=this._tracker[this._cursor];null!=e&&this.popContext(e),this._tracker[this._cursor]=t,this._cursor++,this._cursor>=this._tracker.length&&(this._cursor=0)}popContext(t){return this._emittedContexts.delete(t)}}class ui{constructor(t,e){this._sliderPrevColor="",this._emittedContexts=new hi,this._lastPromiseID=0,this._pendingPromises=new Set,this._isSliderDragging=!1,this._config=t,this._host=e,e.addController(this)}hostConnected(){}hostDisconnected(){}hostUpdated(){}requestUpdate(){this._host.requestUpdate()}set hass(t){this._hass=t}get stateObj(){return this._hass.states[this._config.entity]}get domain(){return l(this.stateObj)}get name(){var t,e;return this._config.name?this._config.name:(null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.friendly_name)?this.stateObj.attributes.friendly_name:""}get icon(){var t,e,i;return"string"==typeof(null===(t=this._config.icon)||void 0===t?void 0:t.icon)&&(null===(e=this._config.icon)||void 0===e?void 0:e.icon.length)?this._config.icon.icon:(null===(i=this.stateObj.attributes)||void 0===i?void 0:i.icon)?this.stateObj.attributes.icon:p(this.domain,this.stateObj.state)}get value(){return this._value?Math.round(this._value/this.step)*this.step:this.min}set value(t){t!==this.value&&(this._value=t,this.requestUpdate())}get targetValue(){return void 0!==this._targetValue?Math.round(this._targetValue/this.step)*this.step:this.value?this.value:0}resetTargetValue(){this._targetValue=void 0}set targetValue(t){t!==this.targetValue&&(this._targetValue=t,this.requestUpdate())}get label(){return""+this.targetValue}get attributeLabel(){return this._config.attribute?this.stateObj.attributes[this._config.attribute]:""}get hidden(){return!1}get hasSlider(){return!0}get hasToggle(){var t,e;return null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.toggle_on_click)&&void 0!==e&&e}get toggleValue(){return this.value===this.min?this.max:this.min}get state(){var t;return null===(t=this.stateObj)||void 0===t?void 0:t.state}get isOff(){return 0===this.percentage}get isUnavailable(){return!this.state||"unavailable"===this.state}get isSliderDisabled(){return this.isUnavailable?this.isUnavailable:this.hasToggle}get min(){var t,e,i;return null!==(i=null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.min)&&void 0!==e?e:this._min)&&void 0!==i?i:0}get max(){var t,e,i;return null!==(i=null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.max)&&void 0!==e?e:this._max)&&void 0!==i?i:100}get step(){var t,e,i;return null!==(i=null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.step)&&void 0!==e?e:this._step)&&void 0!==i?i:5}get invert(){var t,e,i;return null!==(i=null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.invert)&&void 0!==e?e:this._invert)&&void 0!==i&&i}get isValuePercentage(){return!0}get percentage(){const t=100*(this.targetValue-(this.invert?this.max:this.min))/(this.max-this.min)*(this.invert?-1:1);return Math.round(10*t)/10}get valueFromPercentage(){return ci(this.percentage,this.min,this.max)}get allowedAttributes(){return[]}get style(){return{icon:{filter:this.iconFilter,color:this.iconColor,rotateSpeed:this.iconRotateSpeed},slider:{filter:this.sliderFilter,color:this.sliderColor}}}get iconFilter(){var t;return(null===(t=this._config.icon)||void 0===t?void 0:t.use_state_color)&&0!==this.percentage?`brightness(${(this.percentage+100)/2}%)`:"brightness(100%)"}get iconColor(){var t;if(null===(t=this._config.icon)||void 0===t?void 0:t.use_state_color){if(!this.stateObj.attributes.hs_color)return(this.invert?this.percentage<100:this.percentage>0)?"var(--paper-item-icon-active-color, #fdd835)":"var(--paper-item-icon-color, #44739e)";{const[t,e]=this.stateObj.attributes.hs_color;if(e>10)return`hsl(${t}, 100%, ${100-e/2}%)`}}return""}get iconRotateSpeed(){return"0s"}get sliderFilter(){var t;return(null===(t=this._config.slider)||void 0===t?void 0:t.use_percentage_bg_opacity)&&0!==this.percentage&&this._config.slider.background!==Te.GRADIENT?`brightness(${(this.percentage+100)/2}%)`:"brightness(100%)"}get sliderColor(){var t;if(null===(t=this._config.slider)||void 0===t?void 0:t.use_state_color)if(this.stateObj.attributes.hs_color){const[t,e]=this.stateObj.attributes.hs_color;if(e>10){const i=`hsl(${t}, 100%, ${100-e/2}%)`;return this._sliderPrevColor=i,i}}else{if(this.stateObj.attributes.color_temp&&this.stateObj.attributes.min_mireds&&this.stateObj.attributes.max_mireds){const t=di(this.stateObj.attributes.color_temp,this.stateObj.attributes.min_mireds,this.stateObj.attributes.max_mireds);return this._sliderPrevColor=t,t}if(this._sliderPrevColor.startsWith("hsl")||this._sliderPrevColor.startsWith("rgb"))return this._sliderPrevColor}return"inherit"}get actionIcon(){return""}get defaultAction(){}get secondaryActionIcon(){return""}get defaultSecondaryAction(){}moveSlider(t,{left:e,top:i,width:r,height:o}){let a=this.calcMovementPercentage(t,{left:e,top:i,width:r,height:o});var n,s,d;return a=this.applyStep(a),n=a,s=0,d=100,a=isNaN(n)||isNaN(s)||isNaN(d)?0:n>d?d:n<s?s:n,this.isValuePercentage||(a=ci(a,this.min,this.max)),a}calcMovementPercentage(t,{left:e,top:i,width:r,height:o}){var a;let n;switch(null===(a=this._config.slider)||void 0===a?void 0:a.direction){case Ce.LEFT_RIGHT:n=li(t.clientX,e,r),this.invert&&(n=100-n);break;case Ce.RIGHT_LEFT:n=li(t.clientX,e,r),this.invert||(n=100-n);break;case Ce.TOP_BOTTOM:n=li(t.clientY,i,o),this.invert&&(n=100-n);break;case Ce.BOTTOM_TOP:n=li(t.clientY,i,o),this.invert||(n=100-n)}return n}hasPendingPromises(){return this._pendingPromises.size>0}checkSelfEmitted(){var t,e;return this._emittedContexts.popContext(null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.context)||void 0===e?void 0:e.id)}applyStep(t){return Math.round(t/this.step)*this.step}callService(t,e,i){const r=++this._lastPromiseID;this._pendingPromises.add(r),this._hass.callService(t,e,i).then(t=>{var e;this._emittedContexts.addContext(null===(e=null==t?void 0:t.context)||void 0===e?void 0:e.id),this._pendingPromises.delete(r)})}log(t="",e="",i=!1){(this._config.debug||i)&&console.log(`${this._config.entity}: ${t}`,e)}get isSliderDragging(){return this._isSliderDragging}set isSliderDragging(t){this._isSliderDragging=t}}class pi extends ui{constructor(){super(...arguments),this._min=0,this._max=1,this._invert=!1}get _value(){return c.includes(this.stateObj.state)?0:1}set _value(t){const e=t>0?"turn_on":"turn_off";this._hass.callService("automation",e,{entity_id:this.stateObj.entity_id})}get _step(){return 1}get label(){return this.percentage>0?this._hass.localize("component.automation.state._.on"):this._hass.localize("component.automation.state._.off")}}class fi extends ui{constructor(){super(...arguments),this._invert=!1}get _value(){return this.stateObj.attributes.temperature}set _value(t){this.callService("climate","set_temperature",{entity_id:this.stateObj.entity_id,temperature:t})}get isOff(){return c.includes(this.state)}get _step(){var t;return(null===(t=this.stateObj.attributes)||void 0===t?void 0:t.target_temp_step)||1}get _min(){var t;return(null===(t=this.stateObj.attributes)||void 0===t?void 0:t.min_temp)||7}get _max(){var t;return(null===(t=this.stateObj.attributes)||void 0===t?void 0:t.max_temp)||35}get isValuePercentage(){return!1}get label(){const t=this._hass.config.unit_system.temperature,e=(t=>t&&t[0].toUpperCase()+t.slice(1)||"")(this.state);return`${this.targetValue}${t} | ${e}`}}class mi extends ui{constructor(){super(...arguments),this._min=0,this._invert=!0}get attribute(){var t,e,i,r;return(null===(e=null===(t=this._config.slider)||void 0===t?void 0:t.attribute)||void 0===e?void 0:e.length)&&this.allowedAttributes.includes(null===(i=this._config.slider)||void 0===i?void 0:i.attribute)?null===(r=this._config.slider)||void 0===r?void 0:r.attribute:Ne.POSITION}get icon(){var t,e;return"string"==typeof(null===(t=this._config.icon)||void 0===t?void 0:t.icon)&&(null===(e=this._config.icon)||void 0===e?void 0:e.icon.length)?this._config.icon.icon:function(t){if(!t)return"mdi:bookmark";if(t.attributes.icon)return t.attributes.icon;var e=d(t.entity_id);return e in _?_[e](t):p(e,t.state)}(this.stateObj)}get allowedAttributes(){return ai(Ne)}get _value(){var t;switch(this.attribute){case Ne.POSITION:return"closed"===(null===(t=this.stateObj)||void 0===t?void 0:t.state)?0:this.stateObj.attributes.current_position;case Ne.TILT:return this.stateObj.attributes.current_tilt_position;default:return 0}}set _value(t){if(this.hasSlider)switch(this.attribute){case Ne.POSITION:this.callService("cover","set_cover_position",{entity_id:this.stateObj.entity_id,position:t});break;case Ne.TILT:this.callService("cover","set_cover_tilt_position",{entity_id:this.stateObj.entity_id,tilt_position:t})}else{const e=t>0?"open_cover":"close_cover";this.callService("cover",e,{entity_id:this.stateObj.entity_id})}}get _step(){return 1}get label(){const t=this._hass.localize("component.cover.entity_component._.state."+this.state),e=this._hass.localize("component.cover.entity_component._.state.closed"),i=this._hass.localize("component.cover.entity_component._.state.open");if(!this.hasSlider)return t;switch(this.attribute){case Ne.POSITION:return 0===this.percentage?this.invert?i:e:100===this.percentage?this.invert?e:i:this.percentage+"%";case Ne.TILT:return""+this.percentage}return t}get hasSlider(){switch(this.attribute){case Ne.POSITION:if("current_position"in this.stateObj.attributes)return!0;if("supported_features"in this.stateObj.attributes&&4&this.stateObj.attributes.supported_features)return!0;break;case Ne.TILT:if("current_tilt_position"in this.stateObj.attributes)return!0;if("supported_features"in this.stateObj.attributes&&128&this.stateObj.attributes.supported_features)return!0;break;default:return!1}return!1}get _max(){return this.hasSlider?100:1}}class gi extends ui{constructor(){super(...arguments),this._min=0,this._invert=!1}get _value(){return this.isUnavailable||c.includes(this.state)?0:this.hasSlider?this.stateObj.attributes.percentage:1}set _value(t){const e=t>0?"turn_on":"turn_off";t>0&&this.hasSlider?this.callService("fan","set_percentage",{entity_id:this.stateObj.entity_id,percentage:t}):this.callService("fan",e,{entity_id:this.stateObj.entity_id})}get _step(){return this.hasSlider?this.stateObj.attributes.percentage_step:1}get label(){return this.percentage>0?this.hasSlider?this.percentage+"%":this._hass.localize("component.fan.entity_component._.state.on"):this._hass.localize("component.fan.entity_component._.state.off")}get hasSlider(){return"percentage"in this.stateObj.attributes}get _max(){return this.hasSlider?100:1}get iconRotateSpeed(){let t=0;return this.hasSlider?this.percentage>0&&(t=3-this.percentage/100*2):t=this._value,t+"s"}}class bi extends ui{constructor(){super(...arguments),this._min=0,this._max=1,this._invert=!1}get _value(){return c.includes(this.stateObj.state)?0:1}set _value(t){const e=t>0?"turn_on":"turn_off";this.callService("input_boolean",e,{entity_id:this.stateObj.entity_id})}get _step(){return 1}get label(){return this.percentage>0?this._hass.localize("component.input_boolean.entity_component._.state.on"):this._hass.localize("component.input_boolean.entity_component._.state.off")}}class vi extends ui{constructor(){super(...arguments),this._invert=!1}get _value(){return this.stateObj.state}set _value(t){this._hass.callService("input_number","set_value",{entity_id:this.stateObj.entity_id,value:t})}get _min(){return this.stateObj.attributes.min}get _max(){return this.stateObj.attributes.max}get isValuePercentage(){return!1}get _step(){return this.stateObj.attributes.step}get label(){return this.stateObj.attributes.unit_of_measurement?`${this.targetValue} ${this.stateObj.attributes.unit_of_measurement}`:""+this.targetValue}}const _i={hue:0,saturation:1};class xi extends ui{constructor(){super(...arguments),this._step=1,this._invert=!1}get attribute(){var t,e,i,r,o;const a=null===(t=this._config.slider)||void 0===t?void 0:t.attribute;let n=ze.BRIGHTNESS_PCT,s=[];if(Array.isArray(null===(i=null===(e=this.stateObj)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.supported_color_modes)&&(s=null===(o=null===(r=this.stateObj)||void 0===r?void 0:r.attributes)||void 0===o?void 0:o.supported_color_modes),1===s.length&&s[0]===ze.ON_OFF&&(n=ze.ON_OFF),(null==a?void 0:a.length)&&this.allowedAttributes.includes(a))switch(n=a,a){case ze.COLOR_TEMP:s.includes("color_temp")||(n=ze.BRIGHTNESS_PCT);break;case ze.HUE:case ze.SATURATION:s.includes("hs")||(n=ze.BRIGHTNESS_PCT)}return n}get allowedAttributes(){return ai(ze)}get colorMode(){var t,e;return null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.color_mode}get _value(){if(!this.stateObj||c.includes(this.state))return this.isValuePercentage?0:this.min;const t=this.stateObj.attributes;switch(this.attribute){case ze.COLOR_TEMP:return t.color_temp?Math.round(t.color_temp):this.min;case ze.BRIGHTNESS:return Math.round(t.brightness);case ze.BRIGHTNESS_PCT:return Math.round(100*t.brightness/255);case ze.ON_OFF:return 1;case ze.HUE:case ze.SATURATION:return t.hs_color?Math.round(t.hs_color[_i[this.attribute]]):0;default:return 0}}set _value(t){var e;if(!this.stateObj)return;let i,r=this.attribute,o=t>0?"turn_on":"turn_off",a={entity_id:this.stateObj.entity_id};switch(r){case ze.BRIGHTNESS:case ze.BRIGHTNESS_PCT:(t=r===ze.BRIGHTNESS?Math.round(t):Math.round(t/100*255))?(r="brightness",a=Object.assign(Object.assign({},a),{[r]:t})):o="turn_off";break;case ze.HUE:case ze.SATURATION:i=this.stateObj.attributes.hs_color||[0,0],i[_i[r]]=t,t=i,r="hs_color",o="turn_on",a=Object.assign(Object.assign({},a),{[r]:t});break;case ze.COLOR_TEMP:r="color_temp",o="turn_on",a=Object.assign(Object.assign({},a),{[r]:t})}if(null===(e=this._config.slider)||void 0===e?void 0:e.change_during_slide){const t=300|this._config.slider.change_during_slide_rate;r="transition",a=Object.assign(Object.assign({},a),{[r]:t/1e3})}this.callService("light",o,Object.assign({},a))}get _min(){var t;switch(this.attribute){case ze.COLOR_TEMP:return this.stateObj&&(null===(t=this.stateObj.attributes)||void 0===t?void 0:t.min_mireds)?this.stateObj.attributes.min_mireds:153;default:return 0}}get _max(){var t;switch(this.attribute){case ze.COLOR_TEMP:return this.stateObj&&(null===(t=this.stateObj.attributes)||void 0===t?void 0:t.max_mireds)?this.stateObj.attributes.max_mireds:500;case ze.BRIGHTNESS:return 255;case ze.HUE:return 360;case ze.ON_OFF:return 1;default:return 100}}get isValuePercentage(){switch(this.attribute){case ze.COLOR_TEMP:case ze.HUE:case ze.BRIGHTNESS:return!1;default:return!0}}get isOff(){switch(this.attribute){case ze.COLOR_TEMP:case ze.HUE:case ze.SATURATION:case ze.BRIGHTNESS:case ze.ON_OFF:return c.includes(this.state);default:return this.colorMode===He.ON_OFF?c.includes(this.state):0===this.percentage}}get label(){if(this.isOff)return this._hass.localize("component.light.entity_component._.state.off");if(this.colorMode===He.ON_OFF)return this._hass.localize("component.light.entity_component._.state.on");switch(this.attribute){case ze.ON_OFF:return this._hass.localize("component.light.entity_component._.state.on");case ze.COLOR_TEMP:case ze.BRIGHTNESS:return""+this.targetValue;case ze.BRIGHTNESS_PCT:case ze.SATURATION:return this.targetValue+"%";case ze.HUE:return this.targetValue+"°";default:return""+this.targetValue}}get hasToggle(){var t,e,i,r,o,a;let n=[];return Array.isArray(null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.supported_color_modes)&&(n=null===(r=null===(i=this.stateObj)||void 0===i?void 0:i.attributes)||void 0===r?void 0:r.supported_color_modes),1===n.length&&n[0]===ze.ON_OFF||null!==(a=null===(o=this._config.slider)||void 0===o?void 0:o.toggle_on_click)&&void 0!==a&&a}get hasSlider(){var t,e;if(!this.stateObj)return!1;switch(this.attribute){case ze.ON_OFF:return!1;case ze.BRIGHTNESS:case ze.BRIGHTNESS_PCT:return"brightness"in this.stateObj.attributes||!!("supported_features"in this.stateObj.attributes&&1&(null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.supported_features));case ze.COLOR_TEMP:return"color_temp"in this.stateObj.attributes||!!("supported_features"in this.stateObj.attributes&&2&this.stateObj.attributes.supported_features);case ze.HUE:case ze.SATURATION:return"hs_color"in this.stateObj.attributes||!!("supported_features"in this.stateObj.attributes&&16&this.stateObj.attributes.supported_features);default:return!1}}get sliderColor(){var t;let e="inherit";if(null===(t=this._config.slider)||void 0===t?void 0:t.use_state_color)if(this.stateObj.attributes.hs_color&&this.attribute!==ze.COLOR_TEMP){const[t,i]=this.stateObj.attributes.hs_color;let r=t,o=i;switch(this.attribute){case ze.HUE:r=this.valueFromPercentage;break;case ze.SATURATION:o=this.percentage}o>10&&(e=`hsl(${r}, 100%, ${100-o/2}%)`,this._sliderPrevColor=e)}else if(this.attribute===ze.HUE||this.attribute===ze.SATURATION){let t=0,i=20;switch(this.attribute){case ze.HUE:t=this.valueFromPercentage;break;case ze.SATURATION:i=this.percentage}i>10&&(e=`hsl(${t}, 100%, ${100-i/2}%)`,this._sliderPrevColor=e)}else this.stateObj.attributes.color_temp&&this.stateObj.attributes.min_mireds&&this.stateObj.attributes.max_mireds?(e=di(this.attribute===ze.COLOR_TEMP?this.valueFromPercentage:this.stateObj.attributes.color_temp,this.stateObj.attributes.min_mireds,this.stateObj.attributes.max_mireds),this._sliderPrevColor=e):this.attribute===ze.COLOR_TEMP?(e=di(this.valueFromPercentage,153,500),this._sliderPrevColor=e):(this._sliderPrevColor.startsWith("hsl")||this._sliderPrevColor.startsWith("rgb"))&&(e=this._sliderPrevColor);return e}}class yi extends ui{constructor(){super(...arguments),this._min=0,this._max=1,this._invert=!1}get _value(){return c.includes(this.stateObj.state)?0:1}set _value(t){const e=t>0?"lock":"unlock";this.callService("lock",e,{entity_id:this.stateObj.entity_id})}get _step(){return 1}get label(){return this.percentage>0?this._hass.localize("component.lock.entity_component._.state.unlocked"):this._hass.localize("component.lock.entity_component._.state.locked")}}class wi extends ui{constructor(){super(...arguments),this._min=0,this._max=100,this._step=1,this._invert=!1}get _value(){var t,e;return this.isUnavailable||(null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.is_volume_muted)?0:Math.floor(100*parseFloat(Number.parseFloat(this.stateObj.attributes.volume_level).toPrecision(2)))}set _value(t){t/=100,this.callService("media_player","volume_set",{entity_id:this.stateObj.entity_id,volume_level:t}),t&&this.callService("media_player","volume_mute",{entity_id:this.stateObj.entity_id,is_volume_muted:!1})}get isOff(){return"off"===this.stateObj.state}get label(){return this.stateObj.attributes.is_volume_muted?"-":this.stateObj.attributes.volume_level?this.percentage+"%":this._hass.localize("component.media_player.state._."+this.state)}}class ki extends ui{constructor(){super(...arguments),this._min=0,this._max=1,this._invert=!1}get _value(){return c.includes(this.stateObj.state)?0:1}set _value(t){const e=t>0?"turn_on":"turn_off";this.callService("switch",e,{entity_id:this.stateObj.entity_id})}get _step(){return 1}get label(){return this.percentage>0?this._hass.localize("component.switch.entity_component._.state.on"):this._hass.localize("component.switch.entity_component._.state.off")}}class Ei extends ui{constructor(){super(...arguments),this._invert=!1}get _value(){return this.stateObj.state}set _value(t){this._hass.callService("number","set_value",{entity_id:this.stateObj.entity_id,value:t})}get _min(){return this.stateObj.attributes.min}get _max(){return this.stateObj.attributes.max}get isValuePercentage(){return!1}get _step(){return this.stateObj.attributes.step}get label(){return this.stateObj.attributes.unit_of_measurement?`${this.targetValue} ${this.stateObj.attributes.unit_of_measurement}`:""+this.targetValue}}class Ai extends ui{constructor(){super(...arguments),this._step=1,this._invert=!1}hostConnected(){this._updateInterval()}hostDisconnected(){this._clearInterval()}hostUpdated(){this._updateInterval()}_startInterval(){this._interval||(this._interval=window.setInterval(()=>{try{this.isSliderDragging||this._host.requestUpdate()}catch(t){this._clearInterval()}},250))}_clearInterval(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}get _value(){if(!this.stateObj)return 0;if("active"===this.state){const t=this._timeToMs(this.stateObj.attributes.duration),e=Date.parse(this.stateObj.attributes.finishes_at)-Date.now(),i=Math.max(0,t-e);return Math.round(i/t*this._max)}if("paused"===this.state){const t=this._timeToMs(this.stateObj.attributes.duration),e=this._timeToMs(this.stateObj.attributes.remaining),i=Math.max(0,t-e);return Math.round(i/t*this._max)}return 0}set _value(t){if(!this.stateObj)return;const e=100-t/this._max*100;if(0!==e||"active"!==this.state&&"paused"!==this.state)if("active"!==this.state){if("paused"===this.state){this._hass.callService("timer","start",{entity_id:this._config.entity});const t=e/100*this._timeToMs(this.stateObj.attributes.duration)-this._timeToMs(this.stateObj.attributes.remaining);return this._hass.callService("timer","change",{entity_id:this._config.entity,duration:this._msToTime(t)}),void this._hass.callService("timer","pause",{entity_id:this._config.entity})}if("idle"===this.state){this._hass.callService("timer","start",{entity_id:this._config.entity});const t=this._timeToMs(this.stateObj.attributes.duration),i=e/100*t-t;return this._hass.callService("timer","change",{entity_id:this._config.entity,duration:this._msToTime(i)}),void this._hass.callService("timer","pause",{entity_id:this._config.entity})}}else{const t=e/100*this._timeToMs(this.stateObj.attributes.duration)-(Date.parse(this.stateObj.attributes.finishes_at)-Date.now());this._hass.callService("timer","change",{entity_id:this._config.entity,duration:this._msToTime(t)})}else this._hass.callService("timer","finish",{entity_id:this._config.entity})}get _min(){return 0}get _max(){return 1e4}_timeToMs(t){if(!t)return 0;const[e,i,r]=t.split(":").map(Number);return 1e3*(60*(60*e+i)+r)}_msToTime(t){const e=Math.floor(t/1e3),i=t<0?"-":"",r=Math.floor(Math.abs(e)/3600),o=Math.floor(Math.abs(e)%3600/60),a=Math.abs(e)%60;return`${i}${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`}get isOff(){return"idle"===this.state}get label(){if(this.isSliderDragging){const t=(1-this.targetValue/this._max)*this._timeToMs(this.stateObj.attributes.duration);return this._msToTime(t)}if("active"===this.state){const t=Date.parse(this.stateObj.attributes.finishes_at)-Date.now();return this._msToTime(t)}if("paused"===this.state){const t=this._timeToMs(this.stateObj.attributes.remaining);return this._msToTime(t)}return"idle"===this.state?this._hass.localize("component.timer.entity_component._.state.idle")||"Idle":this.state}get hasToggle(){return!1}get invert(){return!0}get actionIcon(){return"active"===this.state?"mdi:pause":"mdi:play"}get defaultAction(){return"active"===this.state?{tap_action:{action:"call-service",service:"timer.pause",service_data:{entity_id:this._config.entity}}}:"idle"===this.state||"paused"===this.state?{tap_action:{action:"call-service",service:"timer.start",service_data:{entity_id:this._config.entity}}}:void 0}get secondaryActionIcon(){return"active"===this.state||"paused"===this.state?"mdi:refresh":""}get defaultSecondaryAction(){if("active"===this.state||"paused"===this.state)return{tap_action:{action:"call-service",service:"timer.cancel",service_data:{entity_id:this._config.entity}}}}_updateInterval(){var t;(null===(t=this._hass)||void 0===t?void 0:t.states)&&("active"===this.state?this._startInterval():this._clearInterval())}}
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
var Oi=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),Si={ROOT:"mdc-form-field"},Ci={LABEL_SELECTOR:".mdc-form-field > label"},Ti=function(t){function r(e){var o=t.call(this,i(i({},r.defaultAdapter),e))||this;return o.click=function(){o.handleClick()},o}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return Si},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return Ci},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),r.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},r.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},r.prototype.handleClick=function(){var t=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){t.adapter.deactivateInputRipple()}))},r}(Oi);
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
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function $i(t){return{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)}}const Ii=()=>{},Ri={get passive(){return!1}};document.addEventListener("x",Ii,Ri),document.removeEventListener("x",Ii);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Pi extends oe{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Li,zi;const Hi=null!==(zi=null===(Li=window.ShadyDOM)||void 0===Li?void 0:Li.inUse)&&void 0!==zi&&zi;class Ni extends Pi{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=t=>{this.disabled||this.setFormData(t.formData)}}findFormElement(){if(!this.shadowRoot||Hi)return null;const t=this.getRootNode().querySelectorAll("form");for(const e of Array.from(t))if(e.contains(this))return e;return null}connectedCallback(){var t;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(t=this.containingForm)||void 0===t||t.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.containingForm)||void 0===t||t.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",t=>{this.dispatchEvent(new Event("change",t))})}}Ni.shadowRootOptions={mode:"open",delegatesFocus:!0},r([de({type:Boolean})],Ni.prototype,"disabled",void 0);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ji=t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach((t,i)=>e.constructor._observers.set(i,t))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)})}}e.constructor._observers.set(i,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class Mi extends Pi{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=Ti}createAdapter(){return{registerInteractionHandler:(t,e)=>{this.labelEl.addEventListener(t,e)},deregisterInteractionHandler:(t,e)=>{this.labelEl.removeEventListener(t,e)},activateInputRipple:async()=>{const t=this.input;if(t instanceof Ni){const e=await t.ripple;e&&e.startPress()}},deactivateInputRipple:async()=>{const t=this.input;if(t instanceof Ni){const e=await t.ripple;e&&e.endPress()}}}}get input(){var t,e;return null!==(e=null===(t=this.slottedInputs)||void 0===t?void 0:t[0])&&void 0!==e?e:null}render(){const t={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return yt`
      <div class="mdc-form-field ${xe(t)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`}click(){this._labelClick()}_labelClick(){const t=this.input;t&&(t.focus(),t.click())}}r([de({type:Boolean})],Mi.prototype,"alignEnd",void 0),r([de({type:Boolean})],Mi.prototype,"spaceBetween",void 0),r([de({type:Boolean})],Mi.prototype,"nowrap",void 0),r([de({type:String}),ji((async function(t){var e;null===(e=this.input)||void 0===e||e.setAttribute("aria-label",t)}))],Mi.prototype,"label",void 0),r([ue(".mdc-form-field")],Mi.prototype,"mdcRoot",void 0),r([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,e,i){let r,o=t;return"object"==typeof t?(o=t.slot,r=t):r={flatten:e},i?function(t){const{slot:e,selector:i}=null!=t?t:{};return ce({descriptor:r=>({get(){var r;const o="slot"+(e?`[name=${e}]`:":not([name])"),a=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(o),n=null!=a?fe(a,t):[];return i?n.filter(t=>t.matches(i)):n},enumerable:!0,configurable:!0})})}({slot:o,flatten:e,selector:i}):ce({descriptor:t=>({get(){var t,e;const i="slot"+(o?`[name=${o}]`:":not([name])"),a=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(i);return null!==(e=null==a?void 0:a.assignedNodes(r))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}("",!0,"*")],Mi.prototype,"slottedInputs",void 0),r([ue("label")],Mi.prototype,"labelEl",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Fi=Bt`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`,Ui={"mwc-formfield":class extends Mi{static get styles(){return Fi}}};function Di(t,e,i){if(void 0!==e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
return function(t,e,i){const r=t.constructor;if(!i){const t="__"+e;if(!(i=r.getPropertyDescriptor(e,t)))throw new Error("@ariaProperty must be used after a @property decorator")}const o=i;let a="";if(!o.set)throw new Error("@ariaProperty requires a setter for "+e);if(t.dispatchWizEvent)return i;const n={configurable:!0,enumerable:!0,set(t){if(""===a){const t=r.getPropertyOptions(e);a="string"==typeof t.attribute?t.attribute:e}this.hasAttribute(a)&&this.removeAttribute(a),o.set.call(this,t)}};return o.get&&(n.get=function(){return o.get.call(this)}),n}(t,e,i);throw new Error("@ariaProperty only supports TypeScript Decorators")}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Vi{constructor(t){this.startPress=e=>{t().then(t=>{t&&t.startPress(e)})},this.endPress=()=>{t().then(t=>{t&&t.endPress()})},this.startFocus=()=>{t().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{t().then(t=>{t&&t.endFocus()})},this.startHover=()=>{t().then(t=>{t&&t.startHover()})},this.endHover=()=>{t().then(t=>{t&&t.endHover()})}}}
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
 */var Bi={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},Gi={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},qi=function(t){function r(e){return t.call(this,i(i({},r.defaultAdapter),e))||this}return e(r,t),Object.defineProperty(r,"strings",{get:function(){return Gi},enumerable:!1,configurable:!0}),Object.defineProperty(r,"cssClasses",{get:function(){return Bi},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!1,configurable:!0}),r.prototype.setChecked=function(t){this.adapter.setNativeControlChecked(t),this.updateAriaChecked(t),this.updateCheckedStyling(t)},r.prototype.setDisabled=function(t){this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(Bi.DISABLED):this.adapter.removeClass(Bi.DISABLED)},r.prototype.handleChange=function(t){var e=t.target;this.updateAriaChecked(e.checked),this.updateCheckedStyling(e.checked)},r.prototype.updateCheckedStyling=function(t){t?this.adapter.addClass(Bi.CHECKED):this.adapter.removeClass(Bi.CHECKED)},r.prototype.updateAriaChecked=function(t){this.adapter.setNativeControlAttr(Gi.ARIA_CHECKED_ATTR,""+!!t)},r}(Oi);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Wi extends Pi{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.shouldRenderRipple=!1,this.mdcFoundationClass=qi,this.rippleHandlers=new Vi(()=>(this.shouldRenderRipple=!0,this.ripple))}changeHandler(t){this.mdcFoundation.handleChange(t),this.checked=this.formElement.checked}createAdapter(){return Object.assign(Object.assign({},$i(this.mdcRoot)),{setNativeControlChecked:t=>{this.formElement.checked=t},setNativeControlDisabled:t=>{this.formElement.disabled=t},setNativeControlAttr:(t,e)=>{this.formElement.setAttribute(t,e)}})}renderRipple(){return this.shouldRenderRipple?yt`
        <mwc-ripple
          .accent="${this.checked}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>`:""}focus(){const t=this.formElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.formElement;t&&(this.rippleHandlers.endFocus(),t.blur())}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",t=>{this.dispatchEvent(new Event("change",t))})}render(){return yt`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          ${this.renderRipple()}
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              aria-label="${ye(this.ariaLabel)}"
              aria-labelledby="${ye(this.ariaLabelledBy)}"
              @change="${this.changeHandler}"
              @focus="${this.handleRippleFocus}"
              @blur="${this.handleRippleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
          </div>
        </div>
      </div>`}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}r([de({type:Boolean}),ji((function(t){this.mdcFoundation.setChecked(t)}))],Wi.prototype,"checked",void 0),r([de({type:Boolean}),ji((function(t){this.mdcFoundation.setDisabled(t)}))],Wi.prototype,"disabled",void 0),r([Di,de({attribute:"aria-label"})],Wi.prototype,"ariaLabel",void 0),r([Di,de({attribute:"aria-labelledby"})],Wi.prototype,"ariaLabelledBy",void 0),r([ue(".mdc-switch")],Wi.prototype,"mdcRoot",void 0),r([ue("input")],Wi.prototype,"formElement",void 0),r([function(t){return ce({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}("mwc-ripple")],Wi.prototype,"ripple",void 0),r([le()],Wi.prototype,"shouldRenderRipple",void 0),r([he({passive:!0})],Wi.prototype,"handleRippleMouseDown",null),r([he({passive:!0})],Wi.prototype,"handleRippleTouchStart",null);
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
var Xi={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Yi={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Ki={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
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
var Zi=["touchstart","pointerdown","mousedown","keydown"],Ji=["touchend","pointerup","mouseup","contextmenu"],Qi=[],tr=function(t){function r(e){var o=t.call(this,i(i({},r.defaultAdapter),e))||this;return o.activationAnimationHasEnded=!1,o.activationTimer=0,o.fgDeactivationRemovalTimer=0,o.fgScale="0",o.frame={width:0,height:0},o.initialSize=0,o.layoutFrame=0,o.maxRadius=0,o.unboundedCoords={left:0,top:0},o.activationState=o.defaultActivationState(),o.activationTimerCallback=function(){o.activationAnimationHasEnded=!0,o.runDeactivationUXLogicIfReady()},o.activateHandler=function(t){o.activateImpl(t)},o.deactivateHandler=function(){o.deactivateImpl()},o.focusHandler=function(){o.handleFocus()},o.blurHandler=function(){o.handleBlur()},o.resizeHandler=function(){o.layout()},o}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return Xi},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return Yi},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return Ki},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),r.prototype.init=function(){var t=this,e=this.supportsPressRipple();if(this.registerRootHandlers(e),e){var i=r.cssClasses,o=i.ROOT,a=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(o),t.adapter.isUnbounded()&&(t.adapter.addClass(a),t.layoutInternal())}))}},r.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(r.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(r.cssClasses.FG_DEACTIVATION));var e=r.cssClasses,i=e.ROOT,o=e.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(i),t.adapter.removeClass(o),t.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},r.prototype.activate=function(t){this.activateImpl(t)},r.prototype.deactivate=function(){this.deactivateImpl()},r.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){t.layoutInternal(),t.layoutFrame=0}))},r.prototype.setUnbounded=function(t){var e=r.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},r.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(r.cssClasses.BG_FOCUSED)}))},r.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(r.cssClasses.BG_FOCUSED)}))},r.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},r.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},r.prototype.registerRootHandlers=function(t){var e,i;if(t){try{for(var r=o(Zi),a=r.next();!a.done;a=r.next()){var n=a.value;this.adapter.registerInteractionHandler(n,this.activateHandler)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},r.prototype.registerDeactivationHandlers=function(t){var e,i;if("keydown"===t.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=o(Ji),a=r.next();!a.done;a=r.next()){var n=a.value;this.adapter.registerDocumentInteractionHandler(n,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}},r.prototype.deregisterRootHandlers=function(){var t,e;try{for(var i=o(Zi),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},r.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=o(Ji),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},r.prototype.removeCssVars=function(){var t=this,e=r.strings;Object.keys(e).forEach((function(i){0===i.indexOf("VAR_")&&t.adapter.updateCssVariable(e[i],null)}))},r.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var r=this.previousActivationEvent;if(!(r&&void 0!==t&&r.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&Qi.length>0&&Qi.some((function(t){return e.adapter.containsEventTarget(t)}))?this.resetActivationState():(void 0!==t&&(Qi.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){Qi=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive(t),i.wasElementMadeActive&&e.animateActivation()),i.wasElementMadeActive||(e.activationState=e.defaultActivationState())})))}}},r.prototype.checkElementMadeActive=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},r.prototype.animateActivation=function(){var t=this,e=r.strings,i=e.VAR_FG_TRANSLATE_START,o=e.VAR_FG_TRANSLATE_END,a=r.cssClasses,n=a.FG_DEACTIVATION,s=a.FG_ACTIVATION,d=r.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var l="",c="";if(!this.adapter.isUnbounded()){var h=this.getFgTranslationCoordinates(),u=h.startPoint,p=h.endPoint;l=u.x+"px, "+u.y+"px",c=p.x+"px, "+p.y+"px"}this.adapter.updateCssVariable(i,l),this.adapter.updateCssVariable(o,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(n),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer=setTimeout((function(){t.activationTimerCallback()}),d)},r.prototype.getFgTranslationCoordinates=function(){var t,e=this.activationState,i=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var r,o,a=e.x,n=e.y,s=a+i.left,d=n+i.top;if("touchstart"===t.type){var l=t;r=l.changedTouches[0].pageX-s,o=l.changedTouches[0].pageY-d}else{var c=t;r=c.pageX-s,o=c.pageY-d}return{x:r,y:o}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2}).x-this.initialSize/2,y:t.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},r.prototype.runDeactivationUXLogicIfReady=function(){var t=this,e=r.cssClasses.FG_DEACTIVATION,i=this.activationState,o=i.hasDeactivationUXRun,a=i.isActivated;(o||!a)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer=setTimeout((function(){t.adapter.removeClass(e)}),Ki.FG_DEACTIVATION_MS))},r.prototype.rmBoundedActivationClasses=function(){var t=r.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},r.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return t.previousActivationEvent=void 0}),r.numbers.TAP_DELAY_MS)},r.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var r=i({},e);e.isProgrammatic?(requestAnimationFrame((function(){t.animateDeactivation(r)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(r),t.resetActivationState()})))}},r.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady()},r.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var e=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?e:Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2))+r.numbers.PADDING;var i=Math.floor(e*r.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize=i-1:this.initialSize=i,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},r.prototype.updateLayoutCssVars=function(){var t=r.strings,e=t.VAR_FG_SIZE,i=t.VAR_LEFT,o=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter.updateCssVariable(e,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(o,this.unboundedCoords.top+"px"))},r}(Oi);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class er extends Pi{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=tr}get isActive(){return t=this.parentElement||this,e=":active",(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e);
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
var t,e}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(t,e)=>{switch(t){case"--mdc-ripple-fg-scale":this.fgScale=e;break;case"--mdc-ripple-fg-size":this.fgSize=e;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=e;break;case"--mdc-ripple-fg-translate-start":this.translateStart=e;break;case"--mdc-ripple-left":this.leftPos=e;break;case"--mdc-ripple-top":this.topPos=e}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(t){this.waitForFoundation(()=>{this.mdcFoundation.activate(t)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(t){this.mdcFoundation?t():this.updateComplete.then(t)}update(t){t.has("disabled")&&this.disabled&&this.endHover(),super.update(t)}render(){const t=this.activated&&(this.primary||!this.accent),e=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":t,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":e,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return yt`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${xe(i)}"
          style="${we({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}r([ue(".mdc-ripple-surface")],er.prototype,"mdcRoot",void 0),r([de({type:Boolean})],er.prototype,"primary",void 0),r([de({type:Boolean})],er.prototype,"accent",void 0),r([de({type:Boolean})],er.prototype,"unbounded",void 0),r([de({type:Boolean})],er.prototype,"disabled",void 0),r([de({type:Boolean})],er.prototype,"activated",void 0),r([de({type:Boolean})],er.prototype,"selected",void 0),r([de({type:Boolean})],er.prototype,"internalUseStateLayerCustomProperties",void 0),r([le()],er.prototype,"hovering",void 0),r([le()],er.prototype,"bgFocused",void 0),r([le()],er.prototype,"fgActivation",void 0),r([le()],er.prototype,"fgDeactivation",void 0),r([le()],er.prototype,"fgScale",void 0),r([le()],er.prototype,"fgSize",void 0),r([le()],er.prototype,"translateStart",void 0),r([le()],er.prototype,"translateEnd",void 0),r([le()],er.prototype,"leftPos",void 0),r([le()],er.prototype,"topPos",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ir=Bt`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */,rr=Bt`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`,or={"mwc-switch":class extends Wi{static get styles(){return ir}},"mwc-ripple":class extends er{static get styles(){return rr}}};
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
var ar={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},nr=function(t){function r(e){var o=t.call(this,i(i({},r.defaultAdapter),e))||this;return o.shakeAnimationEndHandler=function(){o.handleShakeAnimationEnd()},o}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return ar},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),r.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},r.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},r.prototype.getWidth=function(){return this.adapter.getWidth()},r.prototype.shake=function(t){var e=r.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(e):this.adapter.removeClass(e)},r.prototype.float=function(t){var e=r.cssClasses,i=e.LABEL_FLOAT_ABOVE,o=e.LABEL_SHAKE;t?this.adapter.addClass(i):(this.adapter.removeClass(i),this.adapter.removeClass(o))},r.prototype.setRequired=function(t){var e=r.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},r.prototype.handleShakeAnimationEnd=function(){var t=r.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},r}(Oi);
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
 */const sr=ve(class extends _e{constructor(t){switch(super(t),this.foundation=null,this.previousPart=null,t.type){case me:case ge:break;default:throw new Error("FloatingLabel directive only support attribute and property parts")}}update(t,[e]){if(t!==this.previousPart){this.foundation&&this.foundation.destroy(),this.previousPart=t;const e=t.element;e.classList.add("mdc-floating-label");const i=(t=>({addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),getWidth:()=>t.scrollWidth,registerInteractionHandler:(e,i)=>{t.addEventListener(e,i)},deregisterInteractionHandler:(e,i)=>{t.removeEventListener(e,i)}}))(e);this.foundation=new nr(i),this.foundation.init()}return this.render(e)}render(t){return this.foundation}});
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
 */var dr={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},lr=function(t){function r(e){var o=t.call(this,i(i({},r.defaultAdapter),e))||this;return o.transitionEndHandler=function(t){o.handleTransitionEnd(t)},o}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return dr},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),r.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},r.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},r.prototype.activate=function(){this.adapter.removeClass(dr.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(dr.LINE_RIPPLE_ACTIVE)},r.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},r.prototype.deactivate=function(){this.adapter.addClass(dr.LINE_RIPPLE_DEACTIVATING)},r.prototype.handleTransitionEnd=function(t){var e=this.adapter.hasClass(dr.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter.removeClass(dr.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(dr.LINE_RIPPLE_DEACTIVATING))},r}(Oi);
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
 */const cr=ve(class extends _e{constructor(t){switch(super(t),this.previousPart=null,this.foundation=null,t.type){case me:case ge:return;default:throw new Error("LineRipple only support attribute and property parts.")}}update(t,e){if(this.previousPart!==t){this.foundation&&this.foundation.destroy(),this.previousPart=t;const e=t.element;e.classList.add("mdc-line-ripple");const i=(t=>({addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),hasClass:e=>t.classList.contains(e),setStyle:(e,i)=>t.style.setProperty(e,i),registerEventHandler:(e,i)=>{t.addEventListener(e,i)},deregisterEventHandler:(e,i)=>{t.removeEventListener(e,i)}}))(e);this.foundation=new lr(i),this.foundation.init()}return this.render()}render(){return this.foundation}});
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
 */var hr={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},ur={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},pr={LABEL_SCALE:.75},fr=["pattern","min","max","required","step","minlength","maxlength"],mr=["color","date","datetime-local","month","range","time","week"],gr=["mousedown","touchstart"],br=["click","keydown"],vr=function(t){function r(e,o){void 0===o&&(o={});var a=t.call(this,i(i({},r.defaultAdapter),e))||this;return a.isFocused=!1,a.receivedUserInput=!1,a.valid=!0,a.useNativeValidation=!0,a.validateOnValueChange=!0,a.helperText=o.helperText,a.characterCounter=o.characterCounter,a.leadingIcon=o.leadingIcon,a.trailingIcon=o.trailingIcon,a.inputFocusHandler=function(){a.activateFocus()},a.inputBlurHandler=function(){a.deactivateFocus()},a.inputInputHandler=function(){a.handleInput()},a.setPointerXOffset=function(t){a.setTransformOrigin(t)},a.textFieldInteractionHandler=function(){a.handleTextFieldInteraction()},a.validationAttributeChangeHandler=function(t){a.handleValidationAttributeChange(t)},a}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return ur},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return hr},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return pr},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return mr.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),r.prototype.init=function(){var t,e,i,r;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var a=o(gr),n=a.next();!n.done;n=a.next()){var s=n.value;this.adapter.registerInputInteractionHandler(s,this.setPointerXOffset)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}try{for(var d=o(br),l=d.next();!l.done;l=d.next()){s=l.value;this.adapter.registerTextFieldInteractionHandler(s,this.textFieldInteractionHandler)}}catch(t){i={error:t}}finally{try{l&&!l.done&&(r=d.return)&&r.call(d)}finally{if(i)throw i.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},r.prototype.destroy=function(){var t,e,i,r;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var a=o(gr),n=a.next();!n.done;n=a.next()){var s=n.value;this.adapter.deregisterInputInteractionHandler(s,this.setPointerXOffset)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}try{for(var d=o(br),l=d.next();!l.done;l=d.next()){s=l.value;this.adapter.deregisterTextFieldInteractionHandler(s,this.textFieldInteractionHandler)}}catch(t){i={error:t}}finally{try{l&&!l.done&&(r=d.return)&&r.call(d)}finally{if(i)throw i.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},r.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},r.prototype.handleValidationAttributeChange=function(t){var e=this;t.some((function(t){return fr.indexOf(t)>-1&&(e.styleValidity(!0),e.adapter.setLabelRequired(e.getNativeInput().required),!0)})),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},r.prototype.notchOutline=function(t){if(this.adapter.hasOutline()&&this.adapter.hasLabel())if(t){var e=this.adapter.getLabelWidth()*pr.LABEL_SCALE;this.adapter.notchOutline(e)}else this.adapter.closeOutline()},r.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),!this.helperText||!this.helperText.isPersistent()&&this.helperText.isValidation()&&this.valid||this.helperText.showToScreenReader()},r.prototype.setTransformOrigin=function(t){if(!this.isDisabled()&&!this.adapter.hasOutline()){var e=t.touches,i=e?e[0]:t,r=i.target.getBoundingClientRect(),o=i.clientX-r.left;this.adapter.setLineRippleTransformOrigin(o)}},r.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},r.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},r.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},r.prototype.getValue=function(){return this.getNativeInput().value},r.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var e=this.isValid();this.styleValidity(e)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},r.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},r.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var e=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(e)},r.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},r.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},r.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},r.prototype.isDisabled=function(){return this.getNativeInput().disabled},r.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},r.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},r.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},r.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},r.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},r.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},r.prototype.setcharacterCounter=function(t){if(this.characterCounter){var e=this.getNativeInput().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,e)}},r.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},r.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},r.prototype.styleValidity=function(t){var e=r.cssClasses.INVALID;if(t?this.adapter.removeClass(e):this.adapter.addClass(e),this.helperText){if(this.helperText.setValidity(t),!this.helperText.isValidation())return;var i=this.helperText.isVisible(),o=this.helperText.getId();i&&o?this.adapter.setInputAttr(hr.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(hr.ARIA_DESCRIBEDBY)}},r.prototype.styleFocused=function(t){var e=r.cssClasses.FOCUSED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},r.prototype.styleDisabled=function(t){var e=r.cssClasses,i=e.DISABLED,o=e.INVALID;t?(this.adapter.addClass(i),this.adapter.removeClass(o)):this.adapter.removeClass(i),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},r.prototype.styleFloating=function(t){var e=r.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(e):this.adapter.removeClass(e)},r.prototype.getNativeInput=function(){return(this.adapter?this.adapter.getNativeInput():null)||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},r}(Oi);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _r={},xr=ve(class extends _e{constructor(t){if(super(t),t.type!==ge&&t.type!==me&&t.type!==be)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===wt||e===kt)return e;const i=t.element,r=t.name;if(t.type===ge){if(e===i[r])return wt}else if(t.type===be){if(!!e===i.hasAttribute(r))return wt}else if(t.type===me&&i.getAttribute(r)===e+"")return wt;return((t,e=_r)=>{t._$AH=e;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(t),e}}),yr=["touchstart","touchmove","scroll","mousewheel"],wr=(t={})=>{const e={};for(const i in t)e[i]=t[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},e)};class kr extends Ni{constructor(){super(...arguments),this.mdcFoundationClass=vr,this.value="",this.type="text",this.placeholder="",this.label="",this.icon="",this.iconTrailing="",this.disabled=!1,this.required=!1,this.minLength=-1,this.maxLength=-1,this.outlined=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.autoValidate=!1,this.pattern="",this.min="",this.max="",this.step=null,this.size=null,this.helperPersistent=!1,this.charCounter=!1,this.endAligned=!1,this.prefix="",this.suffix="",this.name="",this.readOnly=!1,this.autocapitalize="",this.outlineOpen=!1,this.outlineWidth=0,this.isUiValid=!0,this.focused=!1,this._validity=wr(),this.validityTransform=null}get validity(){return this._checkValidity(this.value),this._validity}get willValidate(){return this.formElement.willValidate}get selectionStart(){return this.formElement.selectionStart}get selectionEnd(){return this.formElement.selectionEnd}focus(){const t=new CustomEvent("focus");this.formElement.dispatchEvent(t),this.formElement.focus()}blur(){const t=new CustomEvent("blur");this.formElement.dispatchEvent(t),this.formElement.blur()}select(){this.formElement.select()}setSelectionRange(t,e,i){this.formElement.setSelectionRange(t,e,i)}update(t){t.has("autoValidate")&&this.mdcFoundation&&this.mdcFoundation.setValidateOnValueChange(this.autoValidate),t.has("value")&&"string"!=typeof this.value&&(this.value=""+this.value),super.update(t)}setFormData(t){this.name&&t.append(this.name,this.value)}render(){const t=this.charCounter&&-1!==this.maxLength,e=!!this.helper||!!this.validationMessage||t,i={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--with-leading-icon":this.icon,"mdc-text-field--with-trailing-icon":this.iconTrailing,"mdc-text-field--end-aligned":this.endAligned};return yt`
      <label class="mdc-text-field ${xe(i)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(e)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(e,t)}
    `}updated(t){t.has("value")&&void 0!==t.get("value")&&(this.mdcFoundation.setValue(this.value),this.autoValidate&&this.reportValidity())}renderRipple(){return this.outlined?"":yt`
      <span class="mdc-text-field__ripple"></span>
    `}renderOutline(){return this.outlined?yt`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`:""}renderLabel(){return this.label?yt`
      <span
          .floatingLabelFoundation=${sr(this.label)}
          id="label">${this.label}</span>
    `:""}renderLeadingIcon(){return this.icon?this.renderIcon(this.icon):""}renderTrailingIcon(){return this.iconTrailing?this.renderIcon(this.iconTrailing,!0):""}renderIcon(t,e=!1){return yt`<i class="material-icons mdc-text-field__icon ${xe({"mdc-text-field__icon--leading":!e,"mdc-text-field__icon--trailing":e})}">${t}</i>`}renderPrefix(){return this.prefix?this.renderAffix(this.prefix):""}renderSuffix(){return this.suffix?this.renderAffix(this.suffix,!0):""}renderAffix(t,e=!1){return yt`<span class="mdc-text-field__affix ${xe({"mdc-text-field__affix--prefix":!e,"mdc-text-field__affix--suffix":e})}">
        ${t}</span>`}renderInput(t){const e=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,r=this.autocapitalize?this.autocapitalize:void 0,o=this.validationMessage&&!this.isUiValid,a=this.label?"label":void 0,n=t?"helper-text":void 0,s=this.focused||this.helperPersistent||o?"helper-text":void 0;return yt`
      <input
          aria-labelledby=${ye(a)}
          aria-controls="${ye(n)}"
          aria-describedby="${ye(s)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${xr(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${ye(e)}"
          maxlength="${ye(i)}"
          pattern="${ye(this.pattern?this.pattern:void 0)}"
          min="${ye(""===this.min?void 0:this.min)}"
          max="${ye(""===this.max?void 0:this.max)}"
          step="${ye(null===this.step?void 0:this.step)}"
          size="${ye(null===this.size?void 0:this.size)}"
          name="${ye(""===this.name?void 0:this.name)}"
          inputmode="${ye(this.inputMode)}"
          autocapitalize="${ye(r)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`}renderLineRipple(){return this.outlined?"":yt`
      <span .lineRippleFoundation=${cr()}></span>
    `}renderHelperText(t,e){const i=this.validationMessage&&!this.isUiValid,r={"mdc-text-field-helper-text--persistent":this.helperPersistent,"mdc-text-field-helper-text--validation-msg":i},o=this.focused||this.helperPersistent||i?void 0:"true",a=i?this.validationMessage:this.helper;return t?yt`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${ye(o)}"
             class="mdc-text-field-helper-text ${xe(r)}"
             >${a}</div>
        ${this.renderCharCounter(e)}
      </div>`:""}renderCharCounter(t){const e=Math.min(this.value.length,this.maxLength);return t?yt`
      <span class="mdc-text-field-character-counter"
            >${e} / ${this.maxLength}</span>`:""}onInputFocus(){this.focused=!0}onInputBlur(){this.focused=!1,this.reportValidity()}checkValidity(){const t=this._checkValidity(this.value);if(!t){const t=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(t)}return t}reportValidity(){const t=this.checkValidity();return this.mdcFoundation.setValid(t),this.isUiValid=t,t}_checkValidity(t){const e=this.formElement.validity;let i=wr(e);if(this.validityTransform){const e=this.validityTransform(t,i);i=Object.assign(Object.assign({},i),e),this.mdcFoundation.setUseNativeValidation(!1)}else this.mdcFoundation.setUseNativeValidation(!0);return this._validity=i,this._validity.valid}setCustomValidity(t){this.validationMessage=t,this.formElement.setCustomValidity(t)}handleInputChange(){this.value=this.formElement.value}createAdapter(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods())}getRootAdapterMethods(){return Object.assign({registerTextFieldInteractionHandler:(t,e)=>this.addEventListener(t,e),deregisterTextFieldInteractionHandler:(t,e)=>this.removeEventListener(t,e),registerValidationAttributeChangeHandler:t=>{const e=new MutationObserver(e=>{t((t=>t.map(t=>t.attributeName).filter(t=>t))(e))});return e.observe(this.formElement,{attributes:!0}),e},deregisterValidationAttributeChangeHandler:t=>t.disconnect()},$i(this.mdcRoot))}getInputAdapterMethods(){return{getNativeInput:()=>this.formElement,setInputAttr:()=>{},removeInputAttr:()=>{},isFocused:()=>!!this.shadowRoot&&this.shadowRoot.activeElement===this.formElement,registerInputInteractionHandler:(t,e)=>this.formElement.addEventListener(t,e,{passive:t in yr}),deregisterInputInteractionHandler:(t,e)=>this.formElement.removeEventListener(t,e)}}getLabelAdapterMethods(){return{floatLabel:t=>this.labelElement&&this.labelElement.floatingLabelFoundation.float(t),getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,hasLabel:()=>Boolean(this.labelElement),shakeLabel:t=>this.labelElement&&this.labelElement.floatingLabelFoundation.shake(t),setLabelRequired:t=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(t)}}}getLineRippleAdapterMethods(){return{activateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},setLineRippleTransformOrigin:t=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.setRippleCenter(t)}}}async getUpdateComplete(){var t;const e=await super.getUpdateComplete();return await(null===(t=this.outlineElement)||void 0===t?void 0:t.updateComplete),e}firstUpdated(){var t;super.firstUpdated(),this.mdcFoundation.setValidateOnValueChange(this.autoValidate),this.validateOnInitialRender&&this.reportValidity(),null===(t=this.outlineElement)||void 0===t||t.updateComplete.then(()=>{var t;this.outlineWidth=(null===(t=this.labelElement)||void 0===t?void 0:t.floatingLabelFoundation.getWidth())||0})}getOutlineAdapterMethods(){return{closeOutline:()=>this.outlineElement&&(this.outlineOpen=!1),hasOutline:()=>Boolean(this.outlineElement),notchOutline:t=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=t,this.outlineOpen=!0)}}}async layout(){await this.updateComplete;const t=this.labelElement;if(!t)return void(this.outlineOpen=!1);const e=!!this.label&&!!this.value;if(t.floatingLabelFoundation.float(e),!this.outlined)return;this.outlineOpen=e,await this.updateComplete;const i=t.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=i,await this.updateComplete)}}r([ue(".mdc-text-field")],kr.prototype,"mdcRoot",void 0),r([ue("input")],kr.prototype,"formElement",void 0),r([ue(".mdc-floating-label")],kr.prototype,"labelElement",void 0),r([ue(".mdc-line-ripple")],kr.prototype,"lineRippleElement",void 0),r([ue("mwc-notched-outline")],kr.prototype,"outlineElement",void 0),r([ue(".mdc-notched-outline__notch")],kr.prototype,"notchElement",void 0),r([de({type:String})],kr.prototype,"value",void 0),r([de({type:String})],kr.prototype,"type",void 0),r([de({type:String})],kr.prototype,"placeholder",void 0),r([de({type:String}),ji((function(t,e){void 0!==e&&this.label!==e&&this.layout()}))],kr.prototype,"label",void 0),r([de({type:String})],kr.prototype,"icon",void 0),r([de({type:String})],kr.prototype,"iconTrailing",void 0),r([de({type:Boolean,reflect:!0})],kr.prototype,"disabled",void 0),r([de({type:Boolean})],kr.prototype,"required",void 0),r([de({type:Number})],kr.prototype,"minLength",void 0),r([de({type:Number})],kr.prototype,"maxLength",void 0),r([de({type:Boolean,reflect:!0}),ji((function(t,e){void 0!==e&&this.outlined!==e&&this.layout()}))],kr.prototype,"outlined",void 0),r([de({type:String})],kr.prototype,"helper",void 0),r([de({type:Boolean})],kr.prototype,"validateOnInitialRender",void 0),r([de({type:String})],kr.prototype,"validationMessage",void 0),r([de({type:Boolean})],kr.prototype,"autoValidate",void 0),r([de({type:String})],kr.prototype,"pattern",void 0),r([de({type:String})],kr.prototype,"min",void 0),r([de({type:String})],kr.prototype,"max",void 0),r([de({type:String})],kr.prototype,"step",void 0),r([de({type:Number})],kr.prototype,"size",void 0),r([de({type:Boolean})],kr.prototype,"helperPersistent",void 0),r([de({type:Boolean})],kr.prototype,"charCounter",void 0),r([de({type:Boolean})],kr.prototype,"endAligned",void 0),r([de({type:String})],kr.prototype,"prefix",void 0),r([de({type:String})],kr.prototype,"suffix",void 0),r([de({type:String})],kr.prototype,"name",void 0),r([de({type:String})],kr.prototype,"inputMode",void 0),r([de({type:Boolean})],kr.prototype,"readOnly",void 0),r([de({type:String})],kr.prototype,"autocapitalize",void 0),r([le()],kr.prototype,"outlineOpen",void 0),r([le()],kr.prototype,"outlineWidth",void 0),r([le()],kr.prototype,"isUiValid",void 0),r([le()],kr.prototype,"focused",void 0),r([he({passive:!0})],kr.prototype,"handleInputChange",null);
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
var Er={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Ar={NOTCH_ELEMENT_PADDING:8},Or={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},Sr=function(t){function r(e){return t.call(this,i(i({},r.defaultAdapter),e))||this}return e(r,t),Object.defineProperty(r,"strings",{get:function(){return Er},enumerable:!1,configurable:!0}),Object.defineProperty(r,"cssClasses",{get:function(){return Or},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return Ar},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),r.prototype.notch=function(t){var e=r.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=Ar.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(e)},r.prototype.closeNotch=function(){var t=r.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},r}(Oi);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Cr extends Pi{constructor(){super(...arguments),this.mdcFoundationClass=Sr,this.width=0,this.open=!1,this.lastOpen=this.open}createAdapter(){return{addClass:t=>this.mdcRoot.classList.add(t),removeClass:t=>this.mdcRoot.classList.remove(t),setNotchWidthProperty:t=>this.notchElement.style.setProperty("width",t+"px"),removeNotchWidthProperty:()=>this.notchElement.style.removeProperty("width")}}openOrClose(t,e){this.mdcFoundation&&(t&&void 0!==e?this.mdcFoundation.notch(e):this.mdcFoundation.closeNotch())}render(){this.openOrClose(this.open,this.width);const t=xe({"mdc-notched-outline--notched":this.open});return yt`
      <span class="mdc-notched-outline ${t}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`}}r([ue(".mdc-notched-outline")],Cr.prototype,"mdcRoot",void 0),r([de({type:Number})],Cr.prototype,"width",void 0),r([de({type:Boolean,reflect:!0})],Cr.prototype,"open",void 0),r([ue(".mdc-notched-outline__notch")],Cr.prototype,"notchElement",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Tr=Bt`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */,$r=Bt`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`,Ir={"mwc-textfield":class extends kr{static get styles(){return Tr}},"mwc-notched-outline":class extends Cr{static get styles(){return $r}}},Rr=globalThis,Pr=Rr.ShadowRoot&&(void 0===Rr.ShadyCSS||Rr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Lr(t){return class extends t{createRenderRoot(){const t=this.constructor,{registry:e,elementDefinitions:i,shadowRootOptions:r}=t;i&&!e&&(t.registry=new CustomElementRegistry,Object.entries(i).forEach(([e,i])=>t.registry.define(e,i)));const o=this.renderOptions.creationScope=this.attachShadow({...r,customElements:t.registry});return((t,e)=>{if(Pr)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),r=Rr.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(o,this.constructor.elementStyles),o}}}var zr={version:"v",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Hr={general:{title:"General",entity:"Entity (Required)",attribute:"Attribute (Optional)",name:"Name (Optional)",show_name:"Show name?",show_state:"Show state?",show_attribute:"Show attribute?",compact:"Compact?"},icon:{title:"Icon",icon:"Icon (Optional)",show_icon:"Show icon?",use_state_color:"Use state color?",tap_action:"Tap action"},slider:{title:"Slider",direction:"Direction",background:"Background",use_brightness:"Use brightness?",show_track:"Show track?",toggle_on_click:"Act as a toggle (disable sliding)",force_square:"Force square?",change_during_slide:"Change during slide?"},action_button:{title:"Action button",mode:"Mode",icon:"Icon",show_button:"Show button?",show_spinner:"Show spinner?",tap_action:"Tap action"}},Nr={off:"Off",on:"On"},jr={"left-right":"Left to right","right-left":"Right to left","top-bottom":"Top to bottom","bottom-top":"Bottom to top"},Mr={striped:"Striped",gradient:"Gradient",solid:"Solid",triangle:"Triangle",custom:"Custom"},Fr={toggle:"Toggle",custom:"Custom",default:"Default"},Ur={common:zr,tabs:Hr,state:Nr,direction:jr,background:Mr,mode:Fr},Dr={version:"v",invalid_configuration:"Ungültige Konfiguration",show_warning:"Zeige Warnung",show_error:"Zeige Fehler"},Vr={general:{title:"Allgemein",entity:"Entiät (vorgeschrieben)",name:"Name (optional)",show_name:"Namen zeigen?",show_state:"Zustand zeigen?",compact:"Kompakt?"},icon:{title:"Icon",icon:"Icon (optional)",show_icon:"Icon zeigen?",use_state_color:"Zustandsfarbe verwenden?",tap_action:"Tap action"},slider:{title:"Schieberegler",direction:"Richtung",background:"Hintergrund",use_brightness:"Helligkeit benutzen?",show_track:"Spur anzeigen?",toggle_on_click:"Als Schalter benutzen (schieben deaktivieren)",force_square:"Quadrat erzwingen?",change_during_slide:"Wechsel während des Rutschens?"},action_button:{title:"Action-Knopf",mode:"Modus",icon:"Icon",show_button:"Knopf zeigen?",show_spinner:"Spinner anzeigen?",tap_action:"Tap action"}},Br={off:"Aus",on:"An"},Gr={"left-right":"Links nach Rechts","top-bottom":"Oben nach Unten","bottom-top":"Unten nach Oben"},qr={striped:"gestreift",gradient:"Farbverlauf",solid:"Einfarbig",triangle:"Dreieck",custom:"benuzerdefiniert"},Wr={toggle:"Umschalter",custom:"benuzerdefiniert"},Xr={common:Dr,tabs:Vr,state:Br,direction:Gr,background:qr,mode:Wr},Yr={version:"v",invalid_configuration:"Configuration incorrecte",show_warning:"Afficher les avertissement",show_error:"Afficher les erreurs"},Kr={general:{title:"Général",entity:"Entité (Obligatoire)",name:"Nom (Optionnel)",show_name:"Afficher le nom ?",show_state:"Afficher l'état ?",compact:"Compact ?"},icon:{title:"Icône",icon:"Icône (Optionnel)",show_icon:"Afficher l'icône ?",use_state_color:"Afficher la couleur d'état?",tap_action:"Action"},slider:{title:"Curseur",direction:"Direction",background:"Fond",use_brightness:"Utiliser la luminosité ?",show_track:"Afficher le chemin ?",toggle_on_click:"Agir comme un bouton (désactive le curseur)",force_square:"Forcer carré ?",change_during_slide:"Changer pendant la diapositive ?"},action_button:{title:"Bouton d'action",mode:"Mode",icon:"Icône",show_button:"Afficher le bouton ?",show_spinner:"Afficher spinner ?",tap_action:"Action"}},Zr={off:"Inactif",on:"Actif"},Jr={"left-right":"gauche à droite","top-bottom":"haut à bas","bottom-top":"Bas à haut"},Qr={striped:"Rayures",gradient:"Dégradé",solid:"Uni",triangle:"Triangle",custom:"Personnalisé"},to={toggle:"Bascule",custom:"Personnalisé"},eo={common:Yr,tabs:Kr,state:Zr,direction:Jr,background:Qr,mode:to},io={version:"v",invalid_configuration:"תצורה לא חוקית",show_warning:"הצג אזהרה",show_error:"הצג שגיאה"},ro={general:{title:"כללי",entity:"ישיות (נדרש)",name:"שם (אופציונלי)",show_name:"להציג שם?",show_state:"להציג מצב?",compact:"קוֹמפָּקטִי?"},icon:{title:"סמליל",icon:"סמליל (אופציונלי)",show_icon:"להציג סמליל?",use_state_color:"להשתמש בצבע מצב?",tap_action:"פעולה בהקשה"},slider:{title:"גלילה",direction:"כיוון",background:"רקע",use_brightness:"להשתמש בבהירות?",show_track:"להציג מסלול?",toggle_on_click:"פעל כמתג (השבת החלקה)",force_square:"כוח מרובע?",change_during_slide:"לשנות במהלך ההחלקה?"},action_button:{title:"כפתור פעולה",mode:"מצב",icon:"סמליל",show_button:"להציג כפתור?",show_spinner:"להציג ספינר?",tap_action:"פעולה בהקשה"}},oo={off:"כבוי",on:"פועל"},ao={"left-right":"שמאל לימין","top-bottom":"מלמעלה למטה","bottom-top":"מלמטה למעלה"},no={striped:"מפוספס",gradient:"שיפוע",solid:"מוצק",triangle:"משולש",custom:"מותאם אישית"},so={toggle:"החלפה",custom:"מותאם אישית"},lo={common:io,tabs:ro,state:oo,direction:ao,background:no,mode:so},co={version:"v",invalid_configuration:"유효하지 않은 설정입니다",show_warning:"경고 표시",show_error:"에러 표시"},ho={general:{title:"일반",entity:"구성 요소 (필수)",name:"이름 (옵션)",show_name:"이름 표시",show_state:"상태 표시",compact:"슬림 모드"},icon:{title:"아이콘",icon:"아이콘 (옵션)",show_icon:"아이콘 표시",use_state_color:"상태 색상 사용",tap_action:"탭 액션"},slider:{title:"슬라이더",direction:"방향 지정",background:"배경",use_brightness:"밝기 사용",show_track:"범위 표시",toggle_on_click:"토글 버튼으로 동작(슬라이더 비활성화)",force_square:"정사각형 모양으로 고정",change_during_slide:"슬라이드 중 변경?"},action_button:{title:"액션 버튼",mode:"모드",icon:"아이콘",show_button:"버튼 표시",show_spinner:"로딩 스피너 표시",tap_action:"탭 액셥"}},uo={off:"꺼짐",on:"켜짐"},po={"left-right":"왼쪽에서 오른쪽","top-bottom":"위에서 아래","bottom-top":"아래에서 위"},fo={striped:"줄무늬",gradient:"그레디언트",solid:"단색",triangle:"삼각형",custom:"커스텀"},mo={toggle:"토글 모드",custom:"커스텀 모드"},go={common:co,tabs:ho,state:uo,direction:po,background:fo,mode:mo},bo={version:"v",invalid_configuration:"Ongeldige configuratie",show_warning:"Toon waarschuwing",show_error:"Toon fout"},vo={general:{title:"Algemeen",entity:"Entiteit (Verplicht)",name:"Naam (Optioneel)",show_name:"Toon naam?",show_state:"Toon status?",compact:"Compact?"},icon:{title:"Icoon",icon:"Icoon (Optioneel)",show_icon:"Toon icoon?",use_state_color:"Gebruik status kleur?",tap_action:"Tap actie"},slider:{title:"Schuifregelaar",direction:"Richting",background:"Actergrond",use_brightness:"Gebruik helderheid?",show_track:"Toon spoor?",toggle_on_click:"Fungeren als een schakelaar (schuiven uitschakelen)",force_square:"Forceer vierkant?",change_during_slide:"Wijzigen tijdens dia?"},action_button:{title:"Actie button",mode:"Modus",icon:"Icoon",show_button:"Toon button?",show_spinner:"Toon spinner?",tap_action:"Tap actie"}},_o={off:"Uit",on:"Aan"},xo={"left-right":"Links naar rechts","top-bottom":"Boven naar onder","bottom-top":"Onder naar boven"},yo={striped:"Gestreept",gradient:"Verloop",solid:"Vast",triangle:"Driehoek",custom:"Aangepast"},wo={toggle:"Schakelaar",custom:"Aangepast"},ko={common:bo,tabs:vo,state:_o,direction:xo,background:yo,mode:wo},Eo={version:"v",invalid_configuration:"Nieprawidłowa konfiguracja",show_warning:"Pokaż ostrzeżenia",show_error:"Pokaż błędy"},Ao={general:{title:"Ogólne",entity:"Encja (Wymagana)",name:"Nazwa (Opcjonalna)",show_name:"Pokazać nazwę?",show_state:"Pokazać stan?",compact:"Kompaktowy?"},icon:{title:"Ikona",icon:"Ikona (Opcjonalna)",show_icon:"Pokazać ikonę?",use_state_color:"Uzyć kolor stanu?",tap_action:"Akcja kliknięcia"},slider:{title:"Suwak",direction:"Kierunek",background:"Tło",use_brightness:"Użyć jasności?",show_track:"Pokazać ślad?",toggle_on_click:"Działaj jako przełącznik (wyłącz przesuwanie)",force_square:"Wymusić kwadrat?",change_during_slide:"Zmiana podczas slajdu?"},action_button:{title:"Przycisk akcji",mode:"Tryb",icon:"Ikona",show_button:"Pokazać przycisk?",show_spinner:"Pokazać spinner?",tap_action:"Akcja kliknięcia"}},Oo={off:"Wyłączony",on:"Włączony"},So={"left-right":"Z lewej do prawej","top-bottom":"Z góry na dół","bottom-top":"Z dołu do góry"},Co={striped:"W paski",gradient:"Gradient",solid:"Pełne tło",triangle:"Trójkąt",custom:"Ustawienia własne"},To={toggle:"Przełącznik",custom:"Ustawienia własne"},$o={common:Eo,tabs:Ao,state:Oo,direction:So,background:Co,mode:To},Io={version:"v",invalid_configuration:"Configuração Inválida",show_warning:"Mostrar Aviso",show_error:"Mostrar Erro"},Ro={general:{title:"Geral",entity:"Entidade (Obrigatório)",name:"Nome (Opcional)",show_name:"Mostrar Nome?",show_state:"Mostrar Estado?",compact:"Compactar?"},icon:{title:"Ícone",icon:"Ícone (Opcional)",show_icon:"Mostrar Ícone?",use_state_color:"Usar Cor de Estado?",tap_action:"Ação de Toque"},slider:{title:"Slider",direction:"Direção",background:"Fundo",use_brightness:"Usar Brilho?",show_track:"Mostrar Acompanhamento?",toggle_on_click:"Atua como um alternador (desative o deslizamento)",force_square:"Forçar Quadrado?",change_during_slide:"Mudança durante o slide?"},action_button:{title:"Botão de Ação",mode:"Modo",icon:"Ícone",show_button:"Mostrar Botão?",show_spinner:"Mostrar Spinner?",tap_action:"Ação de Toque"}},Po={off:"Desligar",on:"Ligar"},Lo={"left-right":"Esquerda para a Direita","top-bottom":"De Cima para Baixo","bottom-top":"De Baixo para Cima"},zo={striped:"Listrado",gradient:"Gradiente",solid:"Sólido",triangle:"Triângulo",custom:"Personalizado"},Ho={toggle:"Alternancia",custom:"Personalizado"},No={common:Io,tabs:Ro,state:Po,direction:Lo,background:zo,mode:Ho},jo={version:"v",invalid_configuration:"Неверная конфигурация",show_warning:"Показать предупреждения",show_error:"Показать ошибки"},Mo={general:{title:"Общие",entity:"Объект (обязательно)",name:"Имя (Опционально)",show_name:"Отображать имя?",show_state:"Отображать статус?",compact:"Компактный?"},icon:{title:"Иконка",icon:"Иконка (Опционально)",show_icon:"Показать иконку?",use_state_color:"Использовать цвет статуса?",tap_action:"Действие по нажатию"},slider:{title:"Слайдер",direction:"Направление",background:"Фон",use_brightness:"Использовать яркость?",show_track:"Показать трек?",toggle_on_click:"Действовать как переключатель (отключить скольжение)",force_square:"Отображать квадратным?",change_during_slide:"Изменить во время слайда?"},action_button:{title:"Кнопка действия",mode:"Режим",icon:"Иконка",show_button:"Отобразить кнопку?",show_spinner:"Отобразить спиннер?",tap_action:"Действие по нажатию"}},Fo={off:"Выкл",on:"Вкл"},Uo={"left-right":"Слева направо","top-bottom":"Сверху вниз","bottom-top":"Снизу вверх"},Do={striped:"Полосатый",gradient:"Градиент",solid:"Сплошной цвет",triangle:"Треугольник",custom:"Свои настройки"},Vo={toggle:"Переключатель",custom:"Свои настройки"},Bo={common:jo,tabs:Mo,state:Fo,direction:Uo,background:Do,mode:Vo},Go={version:"v",invalid_configuration:"Neplatná konfigurácia",show_warning:"Zobraziť warning",show_error:"Zobraziť error"},qo={general:{title:"Všeobecné",entity:"Entita (požadovaná)",attribute:"Atribút (Voliteľné)",name:"Názov (voliteľný)",show_name:"Zobraziť názov?",show_state:"Zobraziť stav?",show_attribute:"Zobraziť atribútt?",compact:"Kompaktné?"},icon:{title:"Ikona",icon:"Ikona (voliteľné)",show_icon:"Zobraziť ikonu?",use_state_color:"Use state color?",tap_action:"Klepnite na akciu"},slider:{title:"Posuvník",direction:"Smer",background:"Pozadie",use_brightness:"Použiť jas?",show_track:"Zobraziť skladbu?",toggle_on_click:"Pôsobiť ako prepínač (zakázať posúvanie)",force_square:"Silový štvorec?"},action_button:{title:"Akčné tlačidlo",mode:"Režim",icon:"Ikona",show_button:"Zobraziť tlačidlo?",show_spinner:"Zobraziť číselník?",tap_action:"Klepnite na akciu"}},Wo={off:"Vypnúť",on:"Zapnúť"},Xo={"left-right":"Zľava doprava","right-left":"Zprava do ľava","top-bottom":"Zhora nadol","bottom-top":"Zdola nahor"},Yo={striped:"Prúžkované",gradient:"Gradient",solid:"Pevné",triangle:"Trojuholník",custom:"Voliteľné"},Ko={toggle:"Prepnúť",custom:"Voliteľné"},Zo={common:Go,tabs:qo,state:Wo,direction:Xo,background:Yo,mode:Ko};const Jo={en:Object.freeze({__proto__:null,common:zr,tabs:Hr,state:Nr,direction:jr,background:Mr,mode:Fr,default:Ur}),de:Object.freeze({__proto__:null,common:Dr,tabs:Vr,state:Br,direction:Gr,background:qr,mode:Wr,default:Xr}),fr:Object.freeze({__proto__:null,common:Yr,tabs:Kr,state:Zr,direction:Jr,background:Qr,mode:to,default:eo}),he:Object.freeze({__proto__:null,common:io,tabs:ro,state:oo,direction:ao,background:no,mode:so,default:lo}),ko:Object.freeze({__proto__:null,common:co,tabs:ho,state:uo,direction:po,background:fo,mode:mo,default:go}),nl:Object.freeze({__proto__:null,common:bo,tabs:vo,state:_o,direction:xo,background:yo,mode:wo,default:ko}),pl:Object.freeze({__proto__:null,common:Eo,tabs:Ao,state:Oo,direction:So,background:Co,mode:To,default:$o}),pt:Object.freeze({__proto__:null,common:Io,tabs:Ro,state:Po,direction:Lo,background:zo,mode:Ho,default:No}),ru:Object.freeze({__proto__:null,common:jo,tabs:Mo,state:Fo,direction:Uo,background:Do,mode:Vo,default:Bo}),sk:Object.freeze({__proto__:null,common:Go,tabs:qo,state:Wo,direction:Xo,background:Yo,mode:Ko,default:Zo})};function Qo(t,e="",i=""){const r=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce((t,e)=>t[e],Jo[r])}catch(e){o=t.split(".").reduce((t,e)=>t[e],Jo.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],Jo.en)),""!==e&&""!==i&&(o=o.replace(e,i)),o}let ta=class extends(Lr(oe)){constructor(){super(...arguments),this._initialized=!1,this.directions=ai(Ce),this.backgrounds=ai(Te),this.actionModes=ai(Se)}firstUpdated(){this._loadHomeAssistantComponent("ha-entity-picker",{type:"entities",entities:[]}),this._loadHomeAssistantComponent("ha-icon-picker",{type:"entities",entities:[]}),this._loadHomeAssistantComponent("ha-selector",{type:"entities",entities:[]})}async _loadHomeAssistantComponent(t,e){var i;const r=null===(i=this.shadowRoot)||void 0===i?void 0:i.customElements;if(!r||r.get(t))return;const o=await window.loadCardHelpers(),a=await o.createCardElement(e);await a.constructor.getConfigElement(),r.define(t,window.customElements.get(t))}async setConfig(t){this._config=t}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _show_name(){var t,e;return void 0===(null===(t=this._config)||void 0===t?void 0:t.show_name)||(null===(e=this._config)||void 0===e?void 0:e.show_name)}get _show_state(){var t,e;return void 0===(null===(t=this._config)||void 0===t?void 0:t.show_state)||(null===(e=this._config)||void 0===e?void 0:e.show_state)}get _show_attribute(){var t,e;return void 0===(null===(t=this._config)||void 0===t?void 0:t.show_attribute)||(null===(e=this._config)||void 0===e?void 0:e.show_attribute)}get _compact(){var t,e;return"boolean"==typeof(null===(t=this._config)||void 0===t?void 0:t.compact)&&(null===(e=this._config)||void 0===e?void 0:e.compact)}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _attribute(){var t;return(null===(t=this._config)||void 0===t?void 0:t.attribute)||""}get _icon(){var t;return(null===(t=this._config)||void 0===t?void 0:t.icon)||Re}get _slider(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slider)||Pe}get _action_button(){var t;return(null===(t=this._config)||void 0===t?void 0:t.action_button)||Ie}get _entityAttributes(){return this.hass&&this._entity?Object.keys(this.hass.states[this._entity].attributes).sort():[]}_renderOptionSelector(t,e=[],i,r){if(this._config)return yt`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",options:e}}}
        .label="${i}"
        .value=${r}
        .required=${!1}
        .configValue=${t}
        @value-changed=${this._valueChangedSelect}
      >
      </ha-selector>
    `}render(){var t,e;return this.hass?yt`
      <div class="card-config">
        <div class="tabs">
          <div class="tab">
            <input type="checkbox" id="entity" class="tab-checkbox">
            <label class="tab-label" for="entity">${Qo("tabs.general.title")}</label>
            <div class="tab-content">
              <ha-entity-picker
                .hass=${this.hass}
                .includeDomains=${ai($e)}
                .value=${this._entity}
                .configValue=${"entity"}
                @change=${this._valueChangedEntity}
              ></ha-entity-picker>
              
              <mwc-textfield
                label="${Qo("tabs.general.name")}"
                .value=${this._name}
                .placeholder=${this._name||(null===(e=null===(t=this.hass.states[this._entity])||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.friendly_name)}
                .configValue=${"name"}
                @input=${this._valueChanged}
              ></mwc-textfield>
              ${this._renderOptionSelector("attribute",this._entityAttributes,Qo("tabs.general.attribute"),this._attribute)}
              <div class="side-by-side">
                <mwc-formfield .label=${Qo("tabs.general.show_name")}>
                  <mwc-switch
                    .checked=${this._show_name}
                    .configValue=${"show_name"}
                    @change=${this._valueChanged}
                  ></mwc-switch>
                </mwc-formfield>
                <mwc-formfield .label=${Qo("tabs.general.show_state")}>
                  <mwc-switch
                    .checked=${this._show_state}
                    .configValue=${"show_state"}
                    @change=${this._valueChanged}
                  ></mwc-switch>
                </mwc-formfield>
                <mwc-formfield .label=${Qo("tabs.general.show_attribute")}>
                  <mwc-switch
                    .checked=${this._show_attribute}
                    .configValue=${"show_attribute"}
                    @change=${this._valueChanged}
                  ></mwc-switch>
                </mwc-formfield>
                <mwc-formfield .label=${Qo("tabs.general.compact")}>
                  <mwc-switch
                    .checked=${this._compact}
                    .configValue=${"compact"}
                    @change=${this._valueChanged}
                  ></mwc-switch>
                </mwc-formfield>
              </div>
            </div>
          </div>

          <div class="tab">
            <input type="checkbox" id="icon" class="tab-checkbox">
            <label class="tab-label" for="icon">${Qo("tabs.icon.title")}</label>
            <div class="tab-content">
              <ha-icon-picker
                .hass=${this.hass}
                .value=${this._icon.icon}
                .configValue=${"icon.icon"}
                .label=${this.hass.localize("ui.dialogs.helper_settings.generic.icon")}
                @value-changed=${this._valueChanged}
              ></ha-icon-picker>
              <div class="side-by-side">
                <mwc-formfield label="${Qo("tabs.icon.show_icon")}">
                  <mwc-switch
                    .checked=${this._icon.show}
                    .configValue=${"icon.show"}
                    @change=${this._valueChanged}
                  ></mwc-switch>
                </mwc-formfield>
                ${this.renderStateColor("icon")}
              </div>
              <ha-selector
                .hass=${this.hass}
                .selector=${{ui_action:{}}}
                .label="${Qo("tabs.icon.tap_action")}"
                .value=${this._icon.tap_action}
                .required=${!1}
                .configValue=${"icon.tap_action"}
                @value-changed=${this._valueChangedSelect}
              ></ha-selector>
            </div>
          </div>
          
          <div class="tab">
            <input type="checkbox" id="slider" class="tab-checkbox">
            <label class="tab-label" for="slider">${Qo("tabs.slider.title")}</label>
            <div class="tab-content">
              <div class="side-by-side">
                ${this._renderOptionSelector("slider.direction",this.directions.map(t=>({value:t,label:Qo("direction."+t)})),Qo("tabs.slider.direction"),this._slider.direction||"")}
                ${this._renderOptionSelector("slider.background",this.backgrounds.map(t=>({value:t,label:Qo("background."+t)})),Qo("tabs.slider.background"),this._slider.background||"")}
              </div>
              <div class="side-by-side">
                ${this.renderBrightness("slider")}
                ${this.renderStateColor("slider")}
                <mwc-formfield .label=${Qo("tabs.slider.show_track")}>
                  <mwc-switch
                    .checked=${this._slider.show_track}
                    .configValue=${"slider.show_track"}
                    @change=${this._valueChanged}
                  ></mwc-switch>
                </mwc-formfield>
                <mwc-formfield .label=${Qo("tabs.slider.toggle_on_click")}>
                  <mwc-switch
                    .checked=${this._slider.toggle_on_click}
                    .configValue=${"slider.toggle_on_click"}
                    @change=${this._valueChanged}
                  ></mwc-switch>
                </mwc-formfield>
                <mwc-formfield .label=${Qo("tabs.slider.force_square")}>
                  <mwc-switch
                    .checked=${this._slider.force_square}
                    .configValue=${"slider.force_square"}
                    @change=${this._valueChanged}
                  ></mwc-switch>
                </mwc-formfield>
                <mwc-formfield .label=${Qo("tabs.slider.change_during_slide")}>
                  <mwc-switch
                    .checked=${this._slider.change_during_slide}
                    .configValue=${"slider.change_during_slide"}
                    @change=${this._valueChanged}
                  ></mwc-switch>
                </mwc-formfield>
              </div>
            </div>
          </div>
          
          <div class="tab">
            <input type="checkbox" id="action" class="tab-checkbox">
            <label class="tab-label" for="action">${Qo("tabs.action_button.title")}</label>
            <div class="tab-content">
              ${this._renderOptionSelector("action_button.mode",this.actionModes.map(t=>({value:t,label:Qo("mode."+t)})),Qo("tabs.action_button.mode"),this._action_button.mode||"")}
              ${this._action_button.mode===Se.CUSTOM?yt`
                <ha-icon-picker
                  .hass=${this.hass}
                  .value=${this._action_button.icon}
                  .placeholder=${this._action_button.icon||"mdi:power"}
                  .configValue=${"action_button.icon"}
                  .label=${Qo("tabs.action_button.icon")}
                  @value-changed=${this._valueChanged}
                >
                </ha-icon-picker>
                `:""}
              <div class="side-by-side">
                <mwc-formfield .label=${Qo("tabs.action_button.show_button")}>
                  <mwc-switch
                    .checked=${this._action_button.show}
                    .configValue=${"action_button.show"}
                    @change=${this._valueChanged}
                  ></mwc-switch>
                </mwc-formfield>
                ${this._action_button.mode===Se.CUSTOM?yt`
                    <mwc-formfield .label=${Qo("tabs.action_button.show_spinner")}>
                      <mwc-switch
                        .checked=${this._action_button.show_spinner}
                        .configValue=${"action_button.show_spinner"}
                        @change=${this._valueChanged}
                      ></mwc-switch>
                    </mwc-formfield>
                  `:""}
              </div>
              ${this._action_button.mode===Se.CUSTOM?yt`
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${{ui_action:{}}}
                    .label="${Qo("tabs.action_button.tap_action")}"
                    .value=${this._action_button.tap_action}
                    .required=${!1}
                    .configValue=${"action_button.tap_action"}
                    @value-changed=${this._valueChangedSelect}
                  ></ha-selector>
                `:""}
            </div>
          </div>
        </div>
      </div>
    `:yt``}renderBrightness(t){const e=this["_"+t];return yt`
      <mwc-formfield .label=${Qo("tabs.slider.use_brightness")}>
        <mwc-switch
          .checked=${e.use_percentage_bg_opacity}
          .configValue="${t}.use_percentage_bg_opacity"
          @change=${this._valueChanged}
        ></mwc-switch>
      </mwc-formfield>
    `}renderStateColor(t){const e=this["_"+t];return yt`
      <mwc-formfield .label=${Qo("tabs.icon.use_state_color")}>
        <mwc-switch
          .checked=${e.use_state_color}
          .configValue="${t}.use_state_color"
          @change=${this._valueChanged}
        ></mwc-switch>
      </mwc-formfield>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&(this._initialized=!0)}_valueChangedSelect(t){const e=t.target,i=t.detail.value;i&&this._changeValue(e.configValue,i)}_valueChangedEntity(t){var e,i;const r=t.target,o=null===(e=t.target)||void 0===e?void 0:e.value;if(!o)return;const a=d(o)!==d((null===(i=this._config)||void 0===i?void 0:i.entity)||"light.dummy");if(this._changeValue(r.configValue,o),this._changeValue("name",""),this._changeValue("attribute",""),this._changeValue("icon.icon",""),a){const t=M(this._config);ni(t,["slider"],si(o)),this._config=t,h(this,"config-changed",{config:this._config})}}_valueChanged(t){var e;const i=t.target,r=null===(e=t.target)||void 0===e?void 0:e.value;this._changeValue(i.configValue,void 0!==i.checked?i.checked:r)}_changeValue(t,e){if(this._config&&this.hass&&(void 0===this["_"+t]||this["_"+t]!==e)){if(t){const i=M(this._config);ni(i,[...t.split(".")],e),this._config=i,""===e&&delete this._config[t]}h(this,"config-changed",{config:this._config})}}static get styles(){return Bt`
      mwc-textfield {
        width: 100%;
      }
      mwc-switch {
        padding: 16px 6px;
      }
      .side-by-side {
        display: flex;
        flex-flow: row wrap;
      }
      .side-by-side > * {
        padding-right: 8px;
        width: 50%;
        flex-flow: column wrap;
        box-sizing: border-box;
      }
      .side-by-side > *:last-child {
        flex: 1;
        padding-right: 0;
      }
      .suffix {
        margin: 0 8px;
      }
      .group {
        padding: 15px;
        border: 1px solid var(--primary-text-color)
      }
      .tabs {
        overflow: hidden;        
      }
      .tab {
        width: 100%;
        color: var(--primary-text-color);
        overflow: hidden;
      }
      .tab-label {
        display: flex;
        justify-content: space-between;
        padding: 1em 1em 1em 0em;
        border-bottom: 1px solid var(--secondary-text-color);
        font-weight: bold;
        cursor: pointer;
      }
      .tab-label:hover {
        /*background: #1a252f;*/
      }
      .tab-label::after {
        content: "❯";
        width: 1em;
        height: 1em;
        text-align: center;
        transition: all 0.35s;
      }
      .tab-content {
        max-height: 0;
        padding: 0 1em;
        background: var(--secondary-background-color);
        transition: all 0.35s;
      }
      input.tab-checkbox {
        position: absolute;
        opacity: 0;
        z-index: -1;
      }      
      input.tab-checkbox:checked + .tab-label {
        border-color: var(--accent-color);
      }
      input.tab-checkbox:checked + .tab-label::after {
        transform: rotate(90deg);
      }
      input.tab-checkbox:checked ~ .tab-content {
        max-height: 100vh;
        padding: 1em;
      }      
    `}};ta.elementDefinitions=Object.assign(Object.assign(Object.assign({},Ui),or),Ir),r([de({attribute:!1})],ta.prototype,"hass",void 0),r([le()],ta.prototype,"_config",void 0),r([le()],ta.prototype,"_helpers",void 0),ta=r([ne("slider-button-card-editor")],ta),console.info(`%c  SLIDER-BUTTON-CARD %c ${Qo("common.version")}1.13.0 %c`,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border: 1px solid #555;border-radius: 3px 0 0 3px;font-family: Roboto,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: transparent;color: #555;padding: 3px 3px 3px 2px;border: 1px solid #555; border-radius: 0 3px 3px 0;font-family: Roboto,Verdana,Geneva,sans-serif","background-color: transparent"),window.customCards=window.customCards||[],window.customCards.push({type:"slider-button-card",name:"Slider button Card",description:"A button card with slider",preview:!0});let ea=class extends oe{constructor(){super(...arguments),this.changing=!1,this.changed=!1,this._updatePending=!1}static async getConfigElement(){return document.createElement("slider-button-card-editor")}static getStubConfig(t,e){const i=e.find(t=>t.startsWith("light"))||"";return{entity:i,slider:si(i),show_name:!0,show_state:!0,compact:!1,icon:M(Re),action_button:M(Ie)}}getCardSize(){return 0}setConfig(t){if(!t)throw new Error(Qo("common.invalid_configuration"));if(!t.entity)throw new Error(Qo("common.invalid_configuration"));this.config=Object.assign({slider:si(t.entity),icon:M(Re),show_name:!0,show_state:!0,compact:!1,action_button:M(Ie),debug:!1},t),this.ctrl=class{static getInstance(t,e){const i=d(t.entity),r={[$e.LIGHT]:xi,[$e.FAN]:gi,[$e.SWITCH]:ki,[$e.AUTOMATION]:pi,[$e.COVER]:mi,[$e.INPUT_BOOLEAN]:bi,[$e.INPUT_NUMBER]:vi,[$e.MEDIA_PLAYER]:wi,[$e.NUMBER]:Ei,[$e.CLIMATE]:fi,[$e.LOCK]:yi,[$e.TIMER]:Ai};if(void 0===r[i])throw new Error("Unsupported entity type: "+i);return new r[i](t,e)}}.getInstance(this.config,this)}shouldUpdate(t){if(this._updatePending)return!1;const e=this._evalShouldUpdateInternal(t);return!!e&&(this._updatePending=!0,setTimeout(()=>{this._updatePending=!1},100),e)}_evalShouldUpdateInternal(t){if(!this.config)return!1;const e=t.get("hass");return e&&e.themes===this.hass.themes&&e.language===this.hass.language?function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var r=e.get("hass");return!r||r.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1):(this.ctrl.log("shouldUpdate","forced true"),!0)}updated(t){if(this.changing)return;if(this.ctrl.hasPendingPromises())return;if(this.ctrl.checkSelfEmitted())return;this.updateValue(this.ctrl.value,!1),this.animateActionEnd();const e=t.get("hass"),i=t.get("config");(null==e?void 0:e.themes)===this.hass.themes&&(null==i?void 0:i.theme)===this.config.theme||(this.ctrl.log("Theme","updated"),function(t,e,i,r){void 0===r&&(r=!1),t._themes||(t._themes={});var o=e.default_theme;("default"===i||i&&e.themes[i])&&(o=i);var a=s({},t._themes);if("default"!==o){var n=e.themes[o];Object.keys(n).forEach((function(e){var i="--"+e;t._themes[i]="",a[i]=n[e]}))}if(t.updateStyles?t.updateStyles(a):window.ShadyCSS&&window.ShadyCSS.styleSubtree(t,a),r){var d=document.querySelector("meta[name=theme-color]");if(d){d.hasAttribute("default-content")||d.setAttribute("default-content",d.getAttribute("content"));var l=a["--primary-color"]||d.getAttribute("default-content");d.setAttribute("content",l)}}}(this,this.hass.themes,this.config.theme)),this.ctrl.log("Updated",this.ctrl.value)}firstUpdated(t){super.firstUpdated(t)}render(){var t,e,i,r,o,a,n;return this.ctrl.hass=this.hass,this.ctrl.stateObj?yt`
      <ha-card
        tabindex="0"
        .label=${"SliderButton: "+(this.config.entity||"No Entity Defined")}
        class="${xe({square:(null===(t=this.config.slider)||void 0===t?void 0:t.force_square)||!1,"hide-name":!this.config.show_name,"hide-state":!this.config.show_state,"hide-action":!(null===(e=this.config.action_button)||void 0===e?void 0:e.show),compact:!0===this.config.compact})}"
        data-mode="${null===(i=this.config.slider)||void 0===i?void 0:i.direction}"
      >
        <div class="button
              ${xe({off:this.ctrl.isOff,unavailable:this.ctrl.isUnavailable})}"
              data-mode="${null===(r=this.config.slider)||void 0===r?void 0:r.direction}"
              style=${we({"--slider-value":this.ctrl.percentage+"%","--slider-bg-filter":this.ctrl.style.slider.filter,"--slider-color":this.ctrl.style.slider.color,"--icon-filter":this.ctrl.style.icon.filter,"--icon-color":this.ctrl.style.icon.color})}
             >
          <div class="slider"
               data-show-track="${null===(o=this.config.slider)||void 0===o?void 0:o.show_track}"
               data-mode="${null===(a=this.config.slider)||void 0===a?void 0:a.direction}"
               data-background="${null===(n=this.config.slider)||void 0===n?void 0:n.background}"
               data-is-toggle="${this.ctrl.hasToggle}"
               @pointerdown=${this.onPointerDown}
               @pointermove=${this.onPointerMove}
               @pointerup=${this.onPointerUp}
               @pointercancel=${this.onPointerCancel}
          >
            ${this.ctrl.hasToggle?yt`
                <div class="toggle-overlay" @click=${this.handleClick}></div>
                `:""}
            <div class="slider-bg"></div>
            <div class="slider-thumb"></div>           
          </div>

          ${this.config.compact?this.renderCompactLayout():this.renderFullLayout()}
        </div>
      </ha-card>
    `:this._showError(Qo("common.show_error"))}renderFullLayout(){return yt`
      <div class="global-container">
        <div class="top-container">
          ${this.renderIcon()}
          <div class="action-container">
            ${this.renderAction()}
          </div>
        </div>
        ${this.renderText()}
      </div>
    `}renderCompactLayout(){return yt`
      <div class="global-container">
        <div class="top-container">
          <div>
           ${this.renderIcon()}
            ${this.renderText()}
          </div>
          <div class="action-container">
            ${this.renderAction()}
          </div>
        </div>
      </div>
    `}renderText(){if(!this.config.show_name&&!this.config.show_state&&!this.config.show_attribute)return yt``;const t=this.config.show_name?yt`<div class="name">${this.ctrl.name}</div>`:"",e=this.ctrl.isUnavailable?this.hass.localize("state.default.unavailable"):this.ctrl.label,i=this.config.show_state?yt`<span class="state">${e}</span>`:"",r=this.config.show_attribute?yt`<span class="attribute">${this.ctrl.attributeLabel}</span>`:"",o=this.config.show_state&&this.config.show_attribute?yt`<span class="separator">·<span>`:"";return yt`
      <div class="text-container ${xe({compact:!!this.config.compact})}">
        ${t}
        <div class="sub-text-container">
          ${i}${o}${r}
        </div>
      </div>
    `}renderIcon(){var t;if(!1===(null===(t=this.config.icon)||void 0===t?void 0:t.show))return yt``;let e=!1,i="";return this.ctrl.stateObj.attributes.entity_picture&&(i=`url(${this.ctrl.stateObj.attributes.entity_picture})`,e=!0),yt`
      <div class="icon ${xe({"has-picture":e})}"
           @action=${t=>this._handleAction(t,this.config.icon)}
           .actionHandler=${Oe({hasHold:!1,hasDoubleClick:!1})}
           style=${we({"background-image":""+i})}
           >
        <ha-icon
          tabindex="-1"
          data-domain=${l(this.ctrl.stateObj)}
          data-state=${ye(this.ctrl.stateObj?this.ctrl.state:void 0)}          
          .icon=${this.ctrl.icon}
        />
      </div>
    `}renderAction(){var t,e,i,r,o,a,n;return!1===(null===(t=this.config.action_button)||void 0===t?void 0:t.show)?yt``:(null===(e=this.config.action_button)||void 0===e?void 0:e.mode)===Se.TOGGLE?yt`
        <div class="action">
          <ha-switch
            .disabled=${this.ctrl.isUnavailable}
            .checked=${!c.includes(this.ctrl.state)}
            @change=${this._toggle}
          ></ha-switch>
        </div>
      `:yt`
      <div class="action"
          @action=${t=>this._handleAction(t,this.config.action_button)}
          .actionHandler=${Oe({hasHold:!1,hasDoubleClick:!1})}           
          >
        <ha-icon
          tabindex="-1"
          .icon=${(null===(i=this.config.action_button)||void 0===i?void 0:i.icon)||this.ctrl.actionIcon||"mdi:power"}
        />
        ${void 0===(null===(r=this.config.action_button)||void 0===r?void 0:r.show_spinner)||(null===(o=this.config.action_button)||void 0===o?void 0:o.show_spinner)?yt`
            <svg class="circular-loader" viewBox="25 25 50 50">
              <circle class="loader-path" cx="50" cy="50" r="20"></circle>
            </svg>
                `:""}
      </div>

      ${this.ctrl.secondaryActionIcon&&yt`
      <div class="action"
          @action=${t=>this._handleSecondaryAction(t)}
          .actionHandler=${Oe({hasHold:!1,hasDoubleClick:!1})}           
          >
        <ha-icon
          tabindex="-1"
          .icon=${this.ctrl.secondaryActionIcon||"mdi:power"}
        />
        ${void 0===(null===(a=this.config.action_button)||void 0===a?void 0:a.show_spinner)||(null===(n=this.config.action_button)||void 0===n?void 0:n.show_spinner)?yt`
            <svg class="circular-loader" viewBox="25 25 50 50">
              <circle class="loader-path" cx="50" cy="50" r="20"></circle>
            </svg>
                `:""}
        `}
      </div>
    `}_handleAction(t,e){var i;this.hass&&t.detail.action&&this.config&&!this.ctrl.isUnavailable&&("toggle"===(null===(i=e.tap_action)||void 0===i?void 0:i.action)&&this.animateActionStart(),e.mode===Se.DEFAULT&&this.ctrl.defaultAction?b(this,this.hass,this.ctrl.defaultAction,t.detail.action):b(this,this.hass,Object.assign(Object.assign({},e),{entity:this.config.entity}),t.detail.action))}_handleSecondaryAction(t){var e;console.log("handleSecondaryAction",t),(null===(e=this.config.action_button)||void 0===e?void 0:e.mode)===Se.DEFAULT&&this.ctrl.defaultSecondaryAction&&(console.log("defaultSecondaryAction",this.ctrl.defaultSecondaryAction),b(this,this.hass,this.ctrl.defaultSecondaryAction,t.detail.action))}async handleClick(t){this.ctrl.hasToggle&&!this.ctrl.isUnavailable&&(t.preventDefault(),this.animateActionStart(),this.ctrl.log("Toggle"),await m(this.hass,this.config.entity))}_toggle(){this.hass&&this.config&&b(this,this.hass,{tap_action:{action:"toggle"},entity:this.config.entity},"tap")}setStateValue(t,e=!1){this.ctrl.log("setStateValue",t),this.updateValue(t,e),this.ctrl.value=t,this.ctrl.resetTargetValue(),e||this.animateActionStart()}animateActionStart(){this.animateActionEnd(),this.action&&this.action.classList.add("loading")}animateActionEnd(){this.action&&!this.actionTimeout&&(window.clearTimeout(this.actionTimeout),this.actionTimeout=window.setTimeout(()=>{var t;null===(t=this.action)||void 0===t||t.classList.remove("loading"),this.actionTimeout=void 0},750))}updateValue(t,e=!0){this.ctrl.log("updateValue",t),this.button&&(this.button.classList.remove("off"),e?this.button.classList.add("changing"):(this.button.classList.remove("changing"),this.ctrl.isOff&&this.button.classList.add("off")),this.button.style.setProperty("--slider-value",this.ctrl.percentage+"%"),this.button.style.setProperty("--slider-bg-filter",this.ctrl.style.slider.filter),this.button.style.setProperty("--slider-color",this.ctrl.style.slider.color),this.button.style.setProperty("--icon-filter",this.ctrl.style.icon.filter),this.button.style.setProperty("--icon-color",this.ctrl.style.icon.color),this.button.style.setProperty("--icon-rotate-speed",this.ctrl.style.icon.rotateSpeed||"0s"))}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),yt`
      ${e}
    `}onPointerDown(t){var e,i,r;this.ctrl.isSliderDragging=!0,(null===(e=this.config.slider)||void 0===e?void 0:e.direction)!==Ce.TOP_BOTTOM&&(null===(i=this.config.slider)||void 0===i?void 0:i.direction)!==Ce.BOTTOM_TOP||t.preventDefault(),t.stopPropagation(),this.ctrl.isSliderDisabled||(this.lastPush=void 0,this.startPercentage=void 0,null===(r=this.slider)||void 0===r||r.setPointerCapture(t.pointerId))}onPointerUp(t){var e,i,r,o,a;this.ctrl.isSliderDragging=!1,this.ctrl.isSliderDisabled||((null===(e=this.config.slider)||void 0===e?void 0:e.direction)!==Ce.TOP_BOTTOM&&(null===(i=this.config.slider)||void 0===i?void 0:i.direction)!==Ce.BOTTOM_TOP||(this.clearPostUpdateTimer(),this.setStateValue(this.ctrl.targetValue),null===(r=this.slider)||void 0===r||r.releasePointerCapture(t.pointerId)),(null===(o=this.slider)||void 0===o?void 0:o.hasPointerCapture(t.pointerId))&&(this.clearPostUpdateTimer(),this.setStateValue(this.ctrl.targetValue),null===(a=this.slider)||void 0===a||a.releasePointerCapture(t.pointerId)))}onPointerCancel(t){var e,i,r;this.ctrl.isSliderDragging=!1,(null===(e=this.config.slider)||void 0===e?void 0:e.direction)!==Ce.TOP_BOTTOM&&(null===(i=this.config.slider)||void 0===i?void 0:i.direction)!==Ce.BOTTOM_TOP&&(this.ctrl.targetValue=this.ctrl.value,null===(r=this.slider)||void 0===r||r.releasePointerCapture(t.pointerId))}clearPostUpdateTimer(){null!=this.postUpdateTimer&&(clearTimeout(this.postUpdateTimer),this.postUpdateTimer=void 0)}onPointerMove(t){var e,i,r;if(this.ctrl.isSliderDisabled)return;if(!(null===(e=this.slider)||void 0===e?void 0:e.hasPointerCapture(t.pointerId)))return;const{left:o,top:a,width:n,height:s}=null===(i=this.slider)||void 0===i?void 0:i.getBoundingClientRect(),d=this.ctrl.moveSlider(t,{left:o,top:a,width:n,height:s});if(void 0===this.startPercentage&&(this.startPercentage=d),Math.abs(d-this.startPercentage)<.5)return;if(this.ctrl.log("onPointerMove",d),this.updateValue(d),this.ctrl.targetValue=d/100*this.ctrl.max,this.clearPostUpdateTimer(),!(null===(r=this.config.slider)||void 0===r?void 0:r.change_during_slide))return;const l=this.config.slider.change_during_slide_rate||300,c=()=>{this.lastPush=Date.now(),this.setStateValue(this.ctrl.targetValue,!0)};null==this.lastPush&&(this.lastPush=Date.now()),Date.now()-this.lastPush>l?c():this.postUpdateTimer=window.setTimeout(()=>{c()},l)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return Bt`
    ha-card {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      min-height: 7rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      touch-action: pan-y;
      overflow: hidden;      
      --mdc-icon-size: 2.2em;
    }
    ha-card[data-mode="top-bottom"],
    ha-card[data-mode="bottom-top"] {
      touch-action: none;
    }
    ha-card.square {
      aspect-ratio: 1 / 1;
    }
    ha-card.compact {
      min-height: 3rem !important;
    }    
    :host {
      --slider-bg-default-color: var(--primary-color, rgb(95, 124, 171));
      --slider-bg: var(--slider-color);
      --slider-bg-filter: brightness(100%);
      --slider-bg-direction: to right;
      --slider-track-color: #2b374e; 
      --slider-tracker-color: transparent;
      --slider-value: 0%;
      --slider-transition-duration: 0.2s;      
      /*--label-text-shadow: rgb(255 255 255 / 10%) -1px -1px 1px, rgb(0 0 0 / 50%) 1px 1px 1px;*/
      /*--label-color-on: var(--primary-text-color, white);*/
      /*--label-color-off: var(--primary-text-color, white);*/
      --icon-filter: brightness(100%);
      --icon-color: var(--paper-item-icon-color);
      --icon-rotate-speed: 0s;
      /*--state-color-on: #BAC0C6; */
      /*--state-color-off: var(--disabled-text-color);*/
      /*--state-text-shadow: rgb(255 255 255 / 10%) -1px -1px 1px, rgb(0 0 0 / 50%) 1px 1px 1px;*/
      --btn-bg-color-off: rgba(43,55,78,1);
      --btn-bg-color-on: #20293c;
      /*--action-icon-color-on: var(--paper-item-icon-color, black);*/
      /*--action-icon-color-off: var(--paper-item-icon-color, black);*/      
      /*--action-spinner-color: var(--label-badge-text-color, white);*/
    }

    /* --- BUTTON --- */
    
    .button {
      position: relative;
      padding: 0.8rem;
      box-sizing: border-box;
      height: 100%;
      min-height: 7rem;
      width: 100%;
      display: block;
      overflow: hidden;
      transition: all 0.2s ease-in-out;
      touch-action: pan-y;
    }
    .button[data-mode="top-bottom"],
    .button[data-mode="bottom-top"] {
      touch-action: none;
    }
    ha-card.compact .button {
      min-height: 3rem !important;
    }
    .button.off {
      background-color: var(--btn-bg-color-off);
    }

    /* --- CONTAINERS --- */

    .global-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      height: 100%;
      pointer-events: none;
    }

    .top-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
    }

    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: left;
      position: relative;
    }
    .text-container.compact {
      display: flex;
      flex-direction: row;
      justify-content: left;
      position: relative;
      gap: 0.4rem;
      align-items: center;
      height: 100%;
      padding-left: 0.1rem;
    }

    .sub-text-container {
      display: flex;
      flex-direction: row;
      justify-content: left;
      position: relative;
      gap: 0.2rem;
    }
    
    .action-container {
      display: flex;
      justify-content: right;
      align-items: right;
      position: relative;
      pointer-events: auto;
    }

    /* --- ICON --- */
    
    .icon {
      position: relative;
      cursor: pointer;
      width: var(--mdc-icon-size, 24px);
      height: var(--mdc-icon-size, 24px);
      box-sizing: border-box;
      outline: none;
      animation: var(--icon-rotate-speed, 0s) linear 0s infinite normal both running rotate;
      -webkit-tap-highlight-color: transparent;
      pointer-events: auto;
    }
    .icon ha-icon {
      filter: var(--icon-filter, brightness(100%));
      color: var(--icon-color);
      transition: color 0.4s ease-in-out 0s, filter 0.2s linear 0s;
    }
    .icon.has-picture {
      background-size: cover;
      border-radius: 50%;
    }
    .icon.has-picture ha-icon{
      display: none;
    }
    .unavailable .icon ha-icon {
      color: var(--disabled-text-color);
    }
    .compact .icon {
      float: left;
    }

    /* --- TEXT --- */
    
    .name{
      display: inline-block;
      pointer-events: none;
      user-select: none;
      font-size: 1.1rem;
      line-height: 1.3rem;
      padding-top: 0.8rem;
    }
    .compact .name{
      height: 1.3rem;
      width: 100%;
      overflow: hidden;
      padding-top: 0;
    }

    /* --- LABEL --- */
    
    .name {
      color: var(--label-color-on, var(--primary-text-color, white));
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-shadow: var(--label-text-shadow, none);
    }
    .off .name {
      color: var(--label-color-off, var(--primary-text-color, white));
    }
    .unavailable.off .name,
    .unavailable .name {
      color: var(--disabled-text-color);
    }
    .compact .name {
      display: inline-block;   
    }    
    
    /* --- STATE --- */
    
    .state {      
      color: var(--state-color-on, var(--label-badge-text-color, white));
      text-overflow: ellipsis;
      white-space: nowrap;
      text-shadow: var(--state-text-shadow);
      transition: font-size 0.1s ease-in-out;
    }
    .changing .state {
      font-size: 150%;
    }
    .off .state {
      color: var(--state-color-off, var(--disabled-text-color));
    }
    .unavailable .state {
      color: var(--disabled-text-color);
    }
    .compact .state {
      overflow: hidden;
    }
    
    /* --- ATTRIBUTE --- */

    .attribute {      
      /*
      color: var(--state-color-on, var(--label-badge-text-color, white));
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-shadow: var(--state-text-shadow);
      transition: font-size 0.1s ease-in-out;
      border: 1px solid red; 
      */
    }

    .compact .attribute {
      overflow: hidden;
    }

    .oneliner {      
      color: var(--state-color-on, var(--label-badge-text-color, white));
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 20px;
      text-shadow: var(--state-text-shadow);
      transition: font-size 0.1s ease-in-out;
      /*border: 1px solid blue;*/
    }
    /* --- SLIDER --- */    
    
    .slider {
      position: absolute;      
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      background-color: var( --ha-card-background, var(--card-background-color, var(--btn-bg-color-on, black)) );
      cursor: ew-resize;
      z-index: 0;
    }
    .slider[data-mode="bottom-top"] {
      cursor: ns-resize;     
    }
    .slider[data-mode="top-bottom"] {
      cursor: ns-resize;
    }
    .slider:active {
      cursor: grabbing;
    }
    
    /* --- SLIDER OVERLAY --- */      
      
    .slider .toggle-overlay {
      position: absolute;      
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      cursor: pointer;
      opacity: 0;
      z-index: 999;    
    }
    
    /* --- SLIDER BACKGROUND --- */   
     
    .slider-bg {       
      position: absolute;
      top: 0;
      left: 0px;
      height: 100%;
      width: 100%;
      background: var(--slider-bg);
      background-size: var(--slider-bg-size, 100% 100%);
      background-color: var(--slider-bg-color, transparent);
      background-position: var(--slider-bg-position, 0 0);
      filter: var(--slider-bg-filter, brightness(100%));
    }
    .off .slider .slider-bg {
      background-color: var( --ha-card-background, var(--card-background-color, var(--btn-bg-color-off, black)) );
    }
    .slider[data-background="solid"] .slider-bg {            
      --slider-bg-color: var(--slider-color);
    }
    .slider[data-background="triangle"] .slider-bg {      
      --slider-bg-direction: to bottom right;    
      --slider-bg: linear-gradient(var(--slider-bg-direction), transparent 0%, transparent 50%, var(--slider-color) 50%, var(--slider-color) 100%);
      border-right: 0px solid;
    }    
    .slider[data-background="triangle"][data-mode="right-left"] .slider-bg {
      --slider-bg-direction: to bottom left;
    }
    .slider[data-background="triangle"][data-mode="bottom-top"] .slider-bg {
      --slider-bg-direction: to top left;      
    }    
    .slider[data-background="triangle"][data-mode="top-bottom"] .slider-bg {
      --slider-bg-direction: to bottom left;      
    }
    .slider[data-background="custom"] .slider-bg {    
      --slider-bg: repeating-linear-gradient(-45deg, var(--slider-color) 0, var(--slider-color) 1px, var(--slider-color) 0, transparent 10%);
      --slider-bg-size: 30px 30px;
    }    
    .slider[data-background="gradient"] .slider-bg {
      --slider-bg: linear-gradient(var(--slider-bg-direction), rgba(0, 0, 0, 0) -10%, var(--slider-color) 100%);
    }    
    .slider[data-background="striped"] .slider-bg {
      --slider-bg: linear-gradient(var(--slider-bg-direction), var(--slider-color), var(--slider-color) 50%, transparent 50%, transparent);
      --slider-bg-size: 4px 100%;
    }
    .slider[data-background="striped"][data-mode="bottom-top"] .slider-bg,
    .slider[data-background="striped"][data-mode="top-bottom"] .slider-bg {      
      --slider-bg-size: 100% 4px;
    }    
    .slider[data-mode="right-left"] .slider-bg {
      --slider-bg-direction: to left;      
    }    
    .slider[data-mode="bottom-top"] .slider-bg {
      --slider-bg-direction: to top;      
    }    
    .slider[data-mode="top-bottom"] .slider-bg {
      --slider-bg-direction: to bottom;      
    }
    
    /* --- SLIDER THUMB --- */        
    
    .slider-thumb {
      position: relative;
      width: 100%;
      height: 100%;      
      transform: translateX(var(--slider-value));
      background: transparent;
      transition: transform var(--slider-transition-duration) ease-in;
    }
    .changing .slider .slider-thumb {
      transition: none;
    }    
    .slider[data-mode="right-left"] .slider-thumb {
      transform: translateX(calc(var(--slider-value) * -1))  !important;
    }
    .slider[data-mode="top-bottom"] .slider-thumb {
      transform: translateY(var(--slider-value)) !important;
    }
    .slider[data-mode="bottom-top"] .slider-thumb {
      transform: translateY(calc(var(--slider-value) * -1))  !important;
    }
    
    .slider-thumb:before {
      content: '';
      position: absolute;
      top: 0;
      left: -2px;
      height: 100%;
      width: 2px;          
      background: var(--slider-color);
      opacity: 0;       
      transition: opacity 0.2s ease-in-out 0s;   
      box-shadow: var(--slider-color) 0px 1px 5px 1px;
      z-index: 999;
    }
    .slider[data-mode="top-bottom"] .slider-thumb:before {
      top: -2px;
      left: 0px;
      height: 2px;
      width: 100%;              
    }    
    .changing .slider-thumb:before {
      opacity: 0.5;    
    }
    .off.changing .slider-thumb:before {
      opacity: 0;    
    }
    
    .slider-thumb:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0px;
      height: 100%;
      width: 100%;          
      background: var( --ha-card-background, var(--card-background-color, var(--btn-bg-color-on, black)) );
      opacity: 1;            
    }
    .slider[data-show-track="true"] .slider-thumb:after {
      opacity: 0.9;
    }
    .off .slider[data-show-track="true"] .slider-thumb:after {
      opacity: 1;
    }
                  
    /* --- ACTION BUTTON --- */      
              
    .action {
      position: relative;
      float: right;
      width: var(--mdc-icon-size, 24px);
      height: var(--mdc-icon-size, 24px);
      color: var(--action-icon-color-on, var(--paper-item-icon-color, black));
      cursor: pointer;
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }    
    .action ha-switch {
      position: absolute;
      right: 0;
      top: 5px;
    }    
    .off .action {
      color: var(--action-icon-color-off, var(--paper-item-icon-color, black));
    }
    .unavailable .action {
      color: var(--disabled-text-color);
    }
    

    .circular-loader {
      position: absolute;
      left: -8px;
      top: -8px;
      width: calc(var(--mdc-icon-size, 24px) + 16px);
      height: calc(var(--mdc-icon-size, 24px) + 16px);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      animation: rotate 2s linear infinite; 
    }   
    .action.loading .circular-loader {
      opacity: 1;      
    }    

    .loader-path {
      fill: none;
      stroke-width: 2px;
      stroke: var(--action-spinner-color, var(--label-badge-text-color, white));
      animation: animate-stroke 1.5s ease-in-out infinite both;        
      stroke-linecap: round;
    }
    
    /* --- MISC --- */    
    
    .unavailable .slider .toggle-overlay,
    .unavailable .action,
    .unavailable .action ha-switch,    
    .unavailable .slider {
      cursor: not-allowed !important;
    }
    
    
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes animate-stroke {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35;
      }
      100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124;
      }
    }     
    `}};r([de({attribute:!1})],ea.prototype,"hass",void 0),r([le()],ea.prototype,"config",void 0),r([ue(".button")],ea.prototype,"button",void 0),r([ue(".action")],ea.prototype,"action",void 0),r([ue(".slider")],ea.prototype,"slider",void 0),r([he({passive:!0})],ea.prototype,"onPointerDown",null),r([he({passive:!0})],ea.prototype,"onPointerUp",null),r([he({passive:!0})],ea.prototype,"onPointerMove",null),ea=r([ne("slider-button-card")],ea);export{ea as SliderButtonCard};
