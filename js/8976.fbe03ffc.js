"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[8976,5865],{38976:(t,e,a)=>{a.r(e),a.d(e,{default:()=>p});var s=function(){var t=this,e=t._self._c;return t.canCopy?e("ShareInterface",{attrs:{id:"share-copy",icon:"fa-file-code",title:"STAC metadata",description:t.description,action:t.copy,actionDefaultIcon:"fa-clipboard",actionSuccessIcon:"fa-clipboard-check"},on:{stateChanged:t=>this.state=t}}):t._e()},n=[],i=a(27166),o=a(45865);const c={name:"CopyUrl",components:{ShareInterface:o["default"]},mixins:[i.A],data(){return{state:"default",canCopy:!1}},computed:{description(){return"error"===this.state?"Copying to clipboard failed":"success"===this.state?"Copied to clipboard":"Copy the public URL of the STAC metadata to your clipboard"}},methods:{copy(){return this.$clipboard(this.url)}},mounted(){this.canCopy=navigator&&navigator.clipboard&&"function"===typeof navigator.clipboard.writeText;let t=document.createElement("link");t.as="font",t.type="font/woff2",t.crossOrigin="",t.href="https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-brands-400.woff2";let e=document.getElementsByTagName("head")[0];e.appendChild(t)}},r=c;var l=a(81656),d=(0,l.A)(r,s,n,!1,null,null,null);const p=d.exports},45865:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var s=function(){var t=this,e=t._self._c;return e("div",{class:t.classes,attrs:{id:t.id}},[e("div",{staticClass:"entry",on:{click:t.toggle}},[t.actionIcon?e("span",{staticClass:"toggle"},[t.actionIconIsImage?e("img",{attrs:{src:t.actionIcon}}):e("i",{class:t.faActionIcon})]):t._e(),t._t("summary",(function(){return[e("div",{staticClass:"summary"},[e("strong",[t.icon?e("span",{staticClass:"icon"},[t.iconIsImage?e("img",{attrs:{src:t.icon}}):e("i",{class:t.faIcon})]):t._e(),t._v(" "+t._s(t.title)+" ")]),t.description?[e("small",{staticClass:"sep"},[t._v("—")]),t.description?e("small",{staticClass:"description"},[t._v(t._s(t.description))]):t._e()]:t._e()],2)]}),{expanded:t.expanded,state:t.state,icon:t.icon},t.$props)],2),t.expanded?e("div",{staticClass:"customize"},[t._t("customize",null,{expanded:t.expanded},t.$props)],2):t._e()])},n=[];a(44114);const i={name:"ShareInterface",props:{title:{type:String,default:null},description:{type:String,default:null},id:{type:String,default:null},data:{type:Object,default:()=>({})},action:{type:[Function,String],default:null},icon:{type:[String,Array],default:null},actionDefaultIcon:{type:[String,Array],default:"fa-share"},actionLoadingIcon:{type:[String,Array],default:"fa-spinner fa-spin"},actionSuccessIcon:{type:[String,Array],default:"fa-check"},actionErrorIcon:{type:[String,Array],default:"fa-times"}},data(){return{expanded:!1,state:"default"}},computed:{classes(){let t=["shareable"];return this.expanded&&t.push("expanded"),this.action?t.push(this.state):t.push("customizable"),t},iconIsImage(){return this.icon.includes("/")},faIcon(){return Array.isArray(this.icon)?this.icon:["fas",this.icon]},actionIconIsImage(){return this.actionIcon.includes("/")},actionIcon(){if("function"===typeof this.action){let t=this.state[0].toUpperCase()+this.state.substr(1);return this[`action${t}Icon`]}return"string"===typeof this.action?"fa-external-link-alt":this.expanded?"fa-caret-down":"fa-caret-right"},faActionIcon(){return Array.isArray(this.actionIcon)?this.actionIcon:["fas",this.actionIcon]}},watch:{state(t){this.$emit("stateChanged",this.state),"success"!==t&&"error"!==t||setTimeout((()=>this.state="default"),3e3)}},methods:{toggle(){if("function"===typeof this.action)try{this.state="loading";let t=this.action(this.data);t instanceof Promise?t.then((()=>this.state="success")).catch((()=>this.state="error")):this.state=t?"success":"error"}catch(t){this.state="error"}else"string"===typeof this.action?window.open(this.action,"_blank").focus():this.expanded=!this.expanded}}},o=i;var c=a(81656),r=(0,c.A)(o,s,n,!1,null,"6146c28c",null);const l=r.exports},27166:(t,e,a)=>{a.d(e,{A:()=>s});const s={props:{show:{type:Boolean,default:!1},url:{type:String,required:!0},title:{type:String,default:""},extra:{type:Object,default:()=>({})},context:{type:Object,required:!0},type:{type:String,required:!0}}}}}]);
//# sourceMappingURL=8976.fbe03ffc.js.map