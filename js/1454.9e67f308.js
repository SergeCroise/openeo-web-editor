"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[1454],{61454:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var a=function(){var t=this,e=t._self._c;return e("div",{class:t.classes,attrs:{id:t.id}},[e("div",{staticClass:"entry",on:{click:t.toggle}},[t.icon?e("span",{staticClass:"toggle"},[t.iconIsImage?e("img",{attrs:{src:t.icon}}):e("i",{class:["fas",t.icon]})]):t._e(),t._t("summary",(function(){return[e("div",{staticClass:"summary"},[e("strong",[t._v(t._s(t.title))]),t.description?e("small",[t._v(t._s(t.description))]):t._e()])]}),{expanded:t.expanded,state:t.state,icon:t.icon},t.$props)],2),t.expanded?e("div",{staticClass:"customize"},[t._t("customize",null,{expanded:t.expanded},t.$props)],2):t._e()])},i=[];s(26699);const n={name:"ShareInterface",props:{title:{type:String,default:null},description:{type:String,default:null},id:{type:String,default:null},data:{type:Object,default:()=>({})},action:{type:[Function,String],default:null},actionDefaultIcon:{type:String,default:"fa-share"},actionLoadingIcon:{type:String,default:"fa-spinner fa-spin"},actionSuccessIcon:{type:String,default:"fa-check"},actionErrorIcon:{type:String,default:"fa-times"}},data(){return{expanded:!1,state:"default"}},computed:{classes(){let t=["shareable"];return this.expanded&&t.push("expanded"),this.action?t.push(this.state):t.push("customizable"),t},iconIsImage(){return this.icon.includes("/")},icon(){if("function"===typeof this.action){let t=this.state[0].toUpperCase()+this.state.substr(1);return this[`action${t}Icon`]}return"string"===typeof this.action?"fa-external-link-alt":this.expanded?"fa-caret-down":"fa-caret-right"}},watch:{state(t){this.$emit("stateChanged",this.state),"success"!==t&&"error"!==t||setTimeout((()=>this.state="default"),3e3)}},methods:{toggle(){if("function"===typeof this.action)try{this.state="loading";let t=this.action(this.data);t instanceof Promise?t.then((()=>this.state="success")).catch((()=>this.state="error")):this.state=t?"success":"error"}catch(t){this.state="error"}else"string"===typeof this.action?window.open(this.action,"_blank").focus():this.expanded=!this.expanded}}},c=n;var o=s(1001),r=(0,o.Z)(c,a,i,!1,null,"69bc53cb",null);const l=r.exports}}]);
//# sourceMappingURL=1454.9e67f308.js.map