"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[2637,1454],{61454:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var s=function(){var t=this,e=t._self._c;return e("div",{class:t.classes,attrs:{id:t.id}},[e("div",{staticClass:"entry",on:{click:t.toggle}},[t.icon?e("span",{staticClass:"toggle"},[t.iconIsImage?e("img",{attrs:{src:t.icon}}):e("i",{class:["fas",t.icon]})]):t._e(),t._t("summary",(function(){return[e("div",{staticClass:"summary"},[e("strong",[t._v(t._s(t.title))]),t.description?e("small",[t._v(t._s(t.description))]):t._e()])]}),{expanded:t.expanded,state:t.state,icon:t.icon},t.$props)],2),t.expanded?e("div",{staticClass:"customize"},[t._t("customize",null,{expanded:t.expanded},t.$props)],2):t._e()])},n=[];a(26699);const i={name:"ShareInterface",props:{title:{type:String,default:null},description:{type:String,default:null},id:{type:String,default:null},data:{type:Object,default:()=>({})},action:{type:[Function,String],default:null},actionDefaultIcon:{type:String,default:"fa-share"},actionLoadingIcon:{type:String,default:"fa-spinner fa-spin"},actionSuccessIcon:{type:String,default:"fa-check"},actionErrorIcon:{type:String,default:"fa-times"}},data(){return{expanded:!1,state:"default"}},computed:{classes(){let t=["shareable"];return this.expanded&&t.push("expanded"),this.action?t.push(this.state):t.push("customizable"),t},iconIsImage(){return this.icon.includes("/")},icon(){if("function"===typeof this.action){let t=this.state[0].toUpperCase()+this.state.substr(1);return this[`action${t}Icon`]}return"string"===typeof this.action?"fa-external-link-alt":this.expanded?"fa-caret-down":"fa-caret-right"}},watch:{state(t){this.$emit("stateChanged",this.state),"success"!==t&&"error"!==t||setTimeout((()=>this.state="default"),3e3)}},methods:{toggle(){if("function"===typeof this.action)try{this.state="loading";let t=this.action(this.data);t instanceof Promise?t.then((()=>this.state="success")).catch((()=>this.state="error")):this.state=t?"success":"error"}catch(t){this.state="error"}else"string"===typeof this.action?window.open(this.action,"_blank").focus():this.expanded=!this.expanded}}},r=i;var o=a(1001),c=(0,o.Z)(r,s,n,!1,null,"69bc53cb",null);const l=c.exports},82637:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var s=function(){var t=this,e=t._self._c;return e("ShareInterface",{attrs:{id:"share-twitter",title:"Twitter",description:"Share your data as a tweet"},scopedSlots:t._u([{key:"customize",fn:function(){return[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),e("br"),e("button",{on:{click:t.tweet}},[t._v("Open Twitter")])]},proxy:!0}])})},n=[],i=a(9187),r=a(61454);const o={name:"TwitterShare",components:{ShareInterface:r["default"]},data(){return{text:""}},created(){this.text=`"${this.title}" is available at ${this.url}`},mixins:[i.Z],methods:{tweet(){let t=encodeURIComponent(this.text),e=`https://twitter.com/intent/tweet?text=${t}`;window.open(e,"_blank").focus()}}},c=o;var l=a(1001),d=(0,l.Z)(c,s,n,!1,null,null,null);const u=d.exports},9187:(t,e,a)=>{a.d(e,{Z:()=>s});const s={props:{show:{type:Boolean,default:!1},url:{type:String,required:!0},title:{type:String,default:""},extra:{type:Object,default:()=>({})},context:{type:Object,required:!0},type:{type:String,required:!0}}}}}]);
//# sourceMappingURL=2637.c4881e24.js.map