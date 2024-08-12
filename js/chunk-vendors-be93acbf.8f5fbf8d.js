"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[1834],{57975:e=>{function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",o=0,i=-1,a=0,l=0;l<=e.length;++l){if(l<e.length)r=e.charCodeAt(l);else{if(47===r)break;r=47}if(47===r){if(i===l-1||1===a);else if(i!==l-1&&2===a){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var f=n.lastIndexOf("/");if(f!==n.length-1){-1===f?(n="",o=0):(n=n.slice(0,f),o=n.length-1-n.lastIndexOf("/")),i=l,a=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=l,a=0;continue}t&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),o=l-i-1;i=l,a=0}else 46===r&&-1!==a?++a:a=-1}return n}function n(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}var o={resolve:function(){for(var e,n="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a;i>=0?a=arguments[i]:(void 0===e&&(e=process.cwd()),a=e),t(a),0!==a.length&&(n=a+"/"+n,o=47===a.charCodeAt(0))}return n=r(n,!o),o?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return e=r(e,!n),0!==e.length||n||(e="."),e.length>0&&o&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];t(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":o.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if(e=o.resolve(e),r=o.resolve(r),e===r)return"";for(var n=1;n<e.length;++n)if(47!==e.charCodeAt(n))break;for(var i=e.length,a=i-n,l=1;l<r.length;++l)if(47!==r.charCodeAt(l))break;for(var f=r.length,s=f-l,c=a<s?a:s,h=-1,u=0;u<=c;++u){if(u===c){if(s>c){if(47===r.charCodeAt(l+u))return r.slice(l+u+1);if(0===u)return r.slice(l+u)}else a>c&&(47===e.charCodeAt(n+u)?h=u:0===u&&(h=0));break}var g=e.charCodeAt(n+u),p=r.charCodeAt(l+u);if(g!==p)break;47===g&&(h=u)}var d="";for(u=n+h+1;u<=i;++u)u!==i&&47!==e.charCodeAt(u)||(0===d.length?d+="..":d+="/..");return d.length>0?d+r.slice(l+h):(l+=h,47===r.charCodeAt(l)&&++l,r.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,o=-1,i=!0,a=e.length-1;a>=1;--a)if(r=e.charCodeAt(a),47===r){if(!i){o=a;break}}else i=!1;return-1===o?n?"/":".":n&&1===o?"//":e.slice(0,o)},basename:function(e,r){if(void 0!==r&&"string"!==typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,o=0,i=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var l=r.length-1,f=-1;for(n=e.length-1;n>=0;--n){var s=e.charCodeAt(n);if(47===s){if(!a){o=n+1;break}}else-1===f&&(a=!1,f=n+1),l>=0&&(s===r.charCodeAt(l)?-1===--l&&(i=n):(l=-1,i=f))}return o===i?i=f:-1===i&&(i=e.length),e.slice(o,i)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!a){o=n+1;break}}else-1===i&&(a=!1,i=n+1);return-1===i?"":e.slice(o,i)},extname:function(e){t(e);for(var r=-1,n=0,o=-1,i=!0,a=0,l=e.length-1;l>=0;--l){var f=e.charCodeAt(l);if(47!==f)-1===o&&(i=!1,o=l+1),46===f?-1===r?r=l:1!==a&&(a=1):-1!==r&&(a=-1);else if(!i){n=l+1;break}}return-1===r||-1===o||0===a||1===a&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return n("/",e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,o=e.charCodeAt(0),i=47===o;i?(r.root="/",n=1):n=0;for(var a=-1,l=0,f=-1,s=!0,c=e.length-1,h=0;c>=n;--c)if(o=e.charCodeAt(c),47!==o)-1===f&&(s=!1,f=c+1),46===o?-1===a?a=c:1!==h&&(h=1):-1!==a&&(h=-1);else if(!s){l=c+1;break}return-1===a||-1===f||0===h||1===h&&a===f-1&&a===l+1?-1!==f&&(r.base=r.name=0===l&&i?e.slice(1,f):e.slice(l,f)):(0===l&&i?(r.name=e.slice(1,a),r.base=e.slice(1,f)):(r.name=e.slice(l,a),r.base=e.slice(l,f)),r.ext=e.slice(a,f)),l>0?r.dir=e.slice(0,l-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o},85326:(e,t,r)=>{r.d(t,{O:()=>Ae});const n="Cannot convert undefined or null to object";function o(e){return(t,...r)=>a(e,t,r)}function i(e,t){return o(c(e,t).get)}const{apply:a,construct:l,defineProperty:f,get:s,getOwnPropertyDescriptor:c,getPrototypeOf:h,has:u,ownKeys:g,set:p,setPrototypeOf:d}=Reflect,{EPSILON:y,MAX_SAFE_INTEGER:b,isFinite:v,isNaN:A}=Number,{iterator:w,species:C,toStringTag:m,for:k}=Symbol,_=Object,{create:x,defineProperty:O,freeze:S,is:T}=_,E=_.prototype,P=(E.__lookupGetter__&&o(E.__lookupGetter__),_.hasOwn||o(E.hasOwnProperty)),j=Array,N=(j.isArray,j.prototype),U=(o(N.join),o(N.push),o(N.toLocaleString),N[w]),L=o(U),{abs:I,trunc:R}=Math,z=ArrayBuffer,B=(z.isView,z.prototype),F=(o(B.slice),i(B,"byteLength"),"undefined"!==typeof SharedArrayBuffer?SharedArrayBuffer:null),G=(F&&i(F.prototype,"byteLength"),h(Uint8Array)),M=(G.from,G.prototype),W=(M[w],o(M.keys),o(M.values),o(M.entries),o(M.set),o(M.reverse),o(M.fill),o(M.copyWithin),o(M.sort),o(M.slice),o(M.subarray),i(M,"buffer"),i(M,"byteOffset"),i(M,"length"),i(M,m),Uint8Array),D=Uint16Array,V=Uint32Array,J=Float32Array,K=h([][w]()),X=o(K.next),q=o(function*(){}().next),H=h(K),Q=DataView.prototype,Y=o(Q.getUint16),Z=(o(Q.setUint16),TypeError),$=WeakSet,ee=$.prototype,te=(o(ee.add),o(ee.has),WeakMap),re=te.prototype,ne=o(re.get),oe=(o(re.has),o(re.set)),ie=new te,ae=x(null,{next:{value:function(){const e=ne(ie,this);return X(e)}},[w]:{value:function(){return this}}});function le(e){if(e[w]===U&&K.next===X)return e;const t=x(ae);return oe(ie,t,L(e)),t}const fe=new te,se=x(H,{next:{value:function(){const e=ne(fe,this);return q(e)},writable:!0,configurable:!0}});for(const we of g(K))"next"!==we&&O(se,we,c(K,we));const ce=new z(4),he=new J(ce),ue=new V(ce),ge=new D(512),pe=new W(512);for(let we=0;we<256;++we){const e=we-127;e<-24?(ge[we]=0,ge[256|we]=32768,pe[we]=24,pe[256|we]=24):e<-14?(ge[we]=1024>>-e-14,ge[256|we]=1024>>-e-14|32768,pe[we]=-e-1,pe[256|we]=-e-1):e<=15?(ge[we]=e+15<<10,ge[256|we]=e+15<<10|32768,pe[we]=13,pe[256|we]=13):e<128?(ge[we]=31744,ge[256|we]=64512,pe[we]=24,pe[256|we]=24):(ge[we]=31744,ge[256|we]=64512,pe[we]=13,pe[256|we]=13)}const de=new V(2048);for(let we=1;we<1024;++we){let e=we<<13,t=0;while(0===(8388608&e))e<<=1,t-=8388608;e&=-8388609,t+=947912704,de[we]=e|t}for(let we=1024;we<2048;++we)de[we]=939524096+(we-1024<<13);const ye=new V(64);for(let we=1;we<31;++we)ye[we]=we<<23;ye[31]=1199570944,ye[32]=2147483648;for(let we=33;we<63;++we)ye[we]=2147483648+(we-32<<23);ye[63]=3347054592;const be=new D(64);for(let we=1;we<64;++we)32!==we&&(be[we]=1024);function ve(e){const t=e>>10;return ue[0]=de[be[t]+(1023&e)]+ye[t],he[0]}function Ae(e,t,...r){return ve(Y(e,t,...le(r)))}}}]);
//# sourceMappingURL=chunk-vendors-be93acbf.8f5fbf8d.js.map