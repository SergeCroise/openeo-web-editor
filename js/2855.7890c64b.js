"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[2855],{52855:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component parameter-viewer"},[t("header",[t("h2",[e._v(e._s(e.title))]),t("button",{staticClass:"close",on:{click:function(t){return e.$emit("close")}}},[e._v("Close")])]),0===e.data.length?t("p",[e._v("No parameters available.")]):e._l(e.data,(function(a){return t("section",{key:a.name,class:a.classes},[t("h3",[e._v(e._s(a.name))]),a.isObject&&a.value.from_node?t("div",{staticClass:"externalData fromNode"},[t("em",[e._v("Output of "),t("tt",[e._v("#"+e._s(a.value.from_node))])],1)]):a.isObject&&a.value.from_parameter?t("div",{staticClass:"externalData fromArgument"},[t("em",[e._v("Value of process parameter "),t("tt",[e._v("#"+e._s(a.value.from_parameter))])],1)]):a.isObject&&a.value.process_graph?t("ModelBuilder",{attrs:{id:a.name,value:a.value,parent:e.parent,explicitZoom:!0}}):t("ObjectTree",{attrs:{data:a.value}}),a.description?t("div",{staticClass:"description"},[t("i",{staticClass:"fas fa-info-circle"}),t("Description",{attrs:{description:a.description,compact:!0}})],1):e._e()],1)}))],2)},o=[],r=a(86975);const s={name:"ParameterViewer",components:{Description:()=>Promise.all([a.e(7261),a.e(1194)]).then(a.bind(a,27261)),ObjectTree:()=>a.e(2327).then(a.bind(a,2327))},props:{title:{type:String,default:"Parameters"},parameters:{type:Array,default:()=>[]},values:{type:Object,default:()=>({})},selectParameterName:{type:String,default:null},parent:{type:Object,default:null}},computed:{data(){return this.parameters.map((e=>{let t=this.values[e.name];return{name:e.name,classes:{highlight:e.name===this.selectParameterName},description:e.description,value:t,isObject:r.A.isObject(t)}}))}},beforeCreate(){this.$options.components.ModelBuilder=a(4638)["default"]},mounted(){if(this.selectParameterName){let e=this.$el.querySelector("section.highlight");if(e){let t=Math.max(document.documentElement.scrollTop,document.body.scrollTop),a=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e.scrollIntoView(),document.documentElement.scrollTop=document.body.scrollTop=t,document.documentElement.scrollLeft=document.body.scrollLeft=a}}}},n=s;var c=a(81656),i=(0,c.A)(n,l,o,!1,null,null,null);const m=i.exports}}]);
//# sourceMappingURL=2855.7890c64b.js.map