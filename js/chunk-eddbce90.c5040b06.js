(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eddbce90"],{"852f":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("b3f7");const o=9,i=256,c=257,l=12;function s(e,t,n){const r=t%8,o=Math.floor(t/8),i=8-r,l=t+n-8*(o+1);let s=8*(o+2)-(t+n);const f=8*(o+2)-t;if(s=Math.max(0,s),o>=e.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),c;let a=e[o]&2**(8-r)-1;a<<=n-i;let u=a;if(o+1<e.length){let t=e[o+1]>>>s;t<<=Math.max(0,n-f),u+=t}if(l>8&&o+2<e.length){const r=8*(o+3)-(t+n),i=e[o+2]>>>r;u+=i}return u}function f(e,t){for(let n=t.length-1;n>=0;n--)e.push(t[n]);return e}function a(e){const t=new Uint16Array(4093),n=new Uint8Array(4093);for(let o=0;o<=257;o++)t[o]=4096,n[o]=o;let r=258,a=o,u=0;function h(){r=258,a=o}function d(e){const t=s(e,u,a);return u+=a,t}function w(e,o){return n[r]=o,t[r]=e,r++,r-1}function p(e){const r=[];for(let o=e;4096!==o;o=t[o])r.push(n[o]);return r}const g=[];h();const b=new Uint8Array(e);let y,k=d(b);while(k!==c){if(k===i){h(),k=d(b);while(k===i)k=d(b);if(k===c)break;if(k>i)throw new Error("corrupted code at scanline "+k);{const e=p(k);f(g,e),y=k}}else if(k<r){const e=p(k);f(g,e),w(y,e[e.length-1]),y=k}else{const e=p(y);if(!e)throw new Error(`Bogus entry. Not in dictionary, ${y} / ${r}, position: ${u}`);f(g,e),g.push(e[e.length-1]),w(y,e[e.length-1]),y=k}r+1>=2**a&&(a===l?y=void 0:a++),k=d(b)}return new Uint8Array(g)}class u extends r["a"]{decodeBlock(e){return a(e,!1).buffer}}},b3f7:function(e,t,n){"use strict";function r(e,t){let n=e.length-t,r=0;do{for(let n=t;n>0;n--)e[r+t]+=e[r],r++;n-=t}while(n>0)}function o(e,t,n){let r=0,o=e.length;const i=o/n;while(o>t){for(let n=t;n>0;--n)e[r+t]+=e[r],++r;o-=t}const c=e.slice();for(let l=0;l<i;++l)for(let t=0;t<n;++t)e[n*l+t]=c[(n-t-1)*i+l]}function i(e,t,n,i,c,l){if(!t||1===t)return e;for(let r=0;r<c.length;++r){if(c[r]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(c[r]!==c[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const s=c[0]/8,f=2===l?1:c.length;for(let a=0;a<i;++a){if(a*f*n*s>=e.byteLength)break;let i;if(2===t){switch(c[0]){case 8:i=new Uint8Array(e,a*f*n*s,f*n*s);break;case 16:i=new Uint16Array(e,a*f*n*s,f*n*s/2);break;case 32:i=new Uint32Array(e,a*f*n*s,f*n*s/4);break;default:throw new Error(`Predictor 2 not allowed with ${c[0]} bits per sample.`)}r(i,f,s)}else 3===t&&(i=new Uint8Array(e,a*f*n*s,f*n*s),o(i,f,s))}return e}n.d(t,"a",(function(){return c}));class c{async decode(e,t){const n=await this.decodeBlock(t),r=e.Predictor||1;if(1!==r){const t=!e.StripOffsets,o=t?e.TileWidth:e.ImageWidth,c=t?e.TileLength:e.RowsPerStrip||e.ImageLength;return i(n,r,o,c,e.BitsPerSample,e.PlanarConfiguration)}return n}}}}]);
//# sourceMappingURL=chunk-eddbce90.c5040b06.js.map