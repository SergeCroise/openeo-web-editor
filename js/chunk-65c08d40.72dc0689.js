(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65c08d40","chunk-ee14ce9e"],{2930:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal",style:{"z-index":e.zIndex},on:{mousedown:e.backgroundClose}},[a("div",{ref:"container",staticClass:"modal-container",style:e.style},[a("header",{staticClass:"modal-header",on:{mousedown:e.startMove}},[e._t("header",(function(){return[a("h2",[e._v(e._s(e.title))]),a("span",{staticClass:"close",on:{click:e.close}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),a("main",{staticClass:"modal-content"},[e._t("default")],2),a("footer",{staticClass:"modal-footer"},[e._t("footer")],2)])])},n=[],i=a("3115"),r=a("025e"),o={name:"Modal",mixins:[i["a"]],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...r["a"].mapState("editor",["hightestModalZIndex"]),style(){let e={width:this.width};return this.minWidth&&(e["min-width"]=this.minWidth),Array.isArray(this.position)&&(e.position="absolute",e.left=this.position[0]+"px",e.top=this.position[1]+"px"),e}},watch:{show:{immediate:!0,handler(e){e?this.open():this.close()}}},methods:{...r["a"].mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(e){"H2"!==e.target.tagName&&(this.dragPosition=[e.clientX,e.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),e.preventDefault(),e.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(e){e.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-e.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-e.clientY)],this.dragPosition=[e.clientX,e.clientY]},escCloseListener(e){if("Escape"==e.key)return this.close(),e.preventDefault(),e.stopPropagation(),!1},backgroundClose(e){e.target===this.$el&&this.close()}}},c=o,l=(a("8781"),a("2877")),d=Object(l["a"])(c,s,n,!1,null,null,null);t["a"]=d.exports},3212:function(e,t,a){},5112:function(e,t,a){"use strict";a("5f18")},"5f18":function(e,t,a){},"6b1e":function(e,t,a){},"81dd":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-component process-parameter"},[a("h4",[a("code",[e._v(e._s(e.parameter.name))]),e.parameter.optional?e._e():a("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]),e.hasDefault?a("code",{staticClass:"default"},[e._v(" = "+e._s(e.defaultValue))]):e._e()]),a("div",{staticClass:"details"},[e.parameter.description?a("Description",{attrs:{description:e.parameter.description,processUrl:e.processUrl}}):e._e(),!0===e.parameter.deprecated?a("DeprecationNotice",{attrs:{entity:"parameter"}}):e._e(),!0===e.parameter.experimental?a("ExperimentalNotice",{attrs:{entity:"parameter"}}):e._e(),e.parameter["federation:backends"]?a("FederationNotice",{attrs:{backends:e.parameter["federation:backends"],federation:e.federation,entity:"parameter"}}):e._e(),e.parameter.schema?a("div",{staticClass:"json-schema-container"},[a("JsonSchema",{attrs:{schema:e.parameter.schema,processUrl:e.processUrl}})],1):e._e()],1)])},n=[],i=a("e71d"),r={name:"ProcessParameter",components:{DeprecationNotice:()=>a.e("chunk-aca32992").then(a.bind(null,"5dc7")),Description:()=>a.e("chunk-e60f5ab4").then(a.bind(null,"8088")),ExperimentalNotice:()=>a.e("chunk-eccca334").then(a.bind(null,"b581")),JsonSchema:()=>a.e("chunk-516a959b").then(a.bind(null,"6e45"))},mixins:[i["a"]],props:{parameter:{type:Object},processUrl:{type:String}},computed:{hasDefault(){return"undefined"!==typeof this.parameter.default},defaultValue(){return JSON.stringify(this.parameter.default)}}},o=r,c=(a("e32c"),a("2877")),l=Object(c["a"])(o,s,n,!1,null,null,null);t["default"]=l.exports},8781:function(e,t,a){"use strict";a("6b1e")},"8de3":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{attrs:{width:"50%",title:e.title},on:{closed:function(t){return e.$emit("closed")}}},[a("div",{staticClass:"processParameterModal"},[e.udp?a("p",{staticClass:"message info"},[a("i",{staticClass:"fas fa-info-circle"}),a("span",[e._v(" This is a parameter for a user-defined process. It is a value made available by the parent entity (usually another process or a secondary web service) that is executing this processes for further use. See below for details about this parameter: ")])]):e._e(),a("ProcessParameter",{attrs:{parameter:e.parameter}})],1)])},n=[],i=a("2930"),r=a("81dd"),o={name:"ProcessParameterModal",components:{Modal:i["a"],ProcessParameter:r["default"]},props:{parameter:{type:Object},udp:{type:Boolean,default:!1}},computed:{title(){return this.parameter.name||"Unnamed Parameter"}}},c=o,l=(a("5112"),a("2877")),d=Object(l["a"])(c,s,n,!1,null,null,null);t["default"]=d.exports},e32c:function(e,t,a){"use strict";a("3212")},e71d:function(e,t,a){"use strict";t["a"]={components:{FederationNotice:()=>a.e("chunk-76884b3e").then(a.bind(null,"7482")),FederationMissingNotice:()=>a.e("chunk-9c0d14c8").then(a.bind(null,"c8b2"))},props:{federation:{type:Object,default:()=>({})}}}}}]);
//# sourceMappingURL=chunk-65c08d40.72dc0689.js.map