(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[2053],{22053:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var o=function(){var e=this,t=e._self._c;return t("Modal",{attrs:{width:"70%",title:"Export / Share"},on:{closed:function(t){return e.$emit("closed")}}},[t("ul",{staticClass:"share-list"},e._l(e.components,(function(r){return t("li",{key:r},[t(r,e._b({tag:"component"},"component",e.componentProps,!1))],1)})),0)])},n=[],s=r(94679),c=r(73902),i=r(19306);const a=(i.A.supportedBatchJobSharingServices||[]).concat(i.A.supportedWebServiceSharingServices||[]);let p={Modal:s.A};for(let v of a)p[v]=()=>r(59539)(`./${v}.vue`);const u={name:"ShareModal",components:p,props:{url:{type:String,required:!0},title:{type:String,default:""},extra:{type:Object,default:()=>({})},context:{type:Object,required:!0}},computed:{components(){return this.context instanceof c.Job&&Array.isArray(i.A.supportedBatchJobSharingServices)?i.A.supportedBatchJobSharingServices:this.context instanceof c.Service&&Array.isArray(i.A.supportedWebServiceSharingServices)?i.A.supportedWebServiceSharingServices:[]},componentProps(){return{...this.$props,type:this.context.constructor.name.toLowerCase()}}}},l=u;var h=r(81656),d=(0,h.A)(l,o,n,!1,null,"0aa6cf11",null);const S=d.exports},59539:(e,t,r)=>{var o={"./CopyUrl.vue":[16192,6192],"./ShareEditor.vue":[20816,816],"./ShareInterface.vue":[45865,5865],"./TwitterShare.vue":[30925,925]};function n(e){if(!r.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return r.e(t[1]).then((()=>r(n)))}n.keys=()=>Object.keys(o),n.id=59539,e.exports=n}}]);
//# sourceMappingURL=2053.c16ed434.js.map