"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[3166,3271],{35254:(t,e,i)=>{i.d(e,{A:()=>s});const s={components:{FederationNotice:()=>i.e(2604).then(i.bind(i,52604)),FederationMissingNotice:()=>i.e(2869).then(i.bind(i,62869))},props:{federation:{type:Object,default:()=>({})}}}},33271:(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var s=function(){var t=this,e=t._self._c;return e("article",{staticClass:"vue-component udf-runtime"},[t._t("title",(function(){return[e("a",{staticClass:"anchor",attrs:{name:t.id}}),e("h2",[t.runtime.title?[t._v(" "+t._s(t.runtime.title)+" ("),e("code",{staticClass:"id"},[t._v(t._s(t.id))]),t._v(") ")]:e("code",{staticClass:"id"},[t._v(t._s(t.id))])],2)]}),null,t.$props),t._t("badges",(function(){return[e("ul",{staticClass:"badges"},[t.isDocker?e("li",{staticClass:"badge docker"},[t._v("Docker: "+t._s(t.runtime.docker))]):e("li",{staticClass:"badge"},[t._v("Programming Language")])])]}),null,t.$props),t._t("before-description",null,null,t.$props),t.runtime.description?e("section",{staticClass:"description"},[e("Description",{attrs:{description:t.runtime.description}}),t.runtime.deprecated?e("DeprecationNotice",{attrs:{entity:"UDF runtime"}}):t._e(),t.runtime.experimental?e("ExperimentalNotice",{attrs:{entity:"UDF runtime"}}):t._e(),t.runtime["federation:backends"]?e("FederationNotice",{attrs:{backends:t.runtime["federation:backends"],federation:t.federation,entity:"UDF runtime"}}):t._e()],1):t._e(),e("section",{staticClass:"links"},[e("LinkList",{attrs:{links:t.runtime.links,heading:"See Also",headingTag:"h3"}})],1),t.isDocker?[e("h3",[t._v("Tags")]),e("ul",t._l(t.runtime.tags,(function(i){return e("li",{key:i},[t._v(" "+t._s(i)+" "),i===t.runtime.default?e("ul",{staticClass:"badges small"},[e("li",{staticClass:"badge default"},[t._v("default")])]):t._e()])})),0)]:[e("h3",[t._v("Versions")]),e("Tabs",{ref:"tabs",attrs:{id:"userContent"}},t._l(t.runtime.versions,(function(i,s){return e("Tab",{key:s,attrs:{id:`${t.id}-${s}`,name:s,selected:s===t.selectVersion}},[s===t.runtime.default?e("ul",{staticClass:"badges"},[e("li",{staticClass:"badge default"},[t._v("default")])]):t._e(),i.deprecated?e("DeprecationNotice",{attrs:{entity:"UDF runtime version"}}):t._e(),i.experimental?e("ExperimentalNotice",{attrs:{entity:"UDF runtime version"}}):t._e(),e("p",[t._v("This runtime includes support for:")]),e("ul",t._l(i.libraries,(function(i,s){return e("li",{key:s,staticClass:"library"},[t._v(" "+t._s(s)+" "),e("ul",{staticClass:"badges small"},[e("span",{staticClass:"badge"},[t._v(t._s(i.version))]),i.experimental?e("span",{staticClass:"badge experimental"},[t._v("experimental")]):t._e(),i.deprecated?e("span",{staticClass:"badge deprecated"},[t._v("deprecated")]):t._e()]),e("LinkList",{attrs:{links:i.links}})],1)})),0)],1)})),1)]],2)},n=[],o=i(86975),a=i(35254);const r={name:"UdfRuntime",components:{DeprecationNotice:()=>i.e(6238).then(i.bind(i,36238)),Description:()=>Promise.all([i.e(7261),i.e(1194)]).then(i.bind(i,27261)),ExperimentalNotice:()=>i.e(4387).then(i.bind(i,84387)),LinkList:()=>i.e(2810).then(i.bind(i,52810)),Tabs:()=>Promise.resolve().then(i.bind(i,4615)),Tab:()=>Promise.resolve().then(i.bind(i,58379))},mixins:[a.A],props:{id:{type:String,default:""},runtime:{type:Object,default:()=>({})},version:{type:String,default:null},...a.A.props},computed:{title(){return this.runtime.title||this.id},isDocker(){return Boolean("docker"===this.runtime.type||this.runtime.docker&&this.runtime.tags)},selectVersion(){return o.A.isObject(this.runtime.versions)&&this.runtime.versions[this.version]||Array.isArray(this.runtime.tags)&&this.runtime.tags[this.version]?this.version:this.runtime.default}},beforeCreate(){o.A.enableHtmlProps(this)}},l=r;var d=i(81656),u=(0,d.A)(l,s,n,!1,null,null,null);const c=u.exports},94679:(t,e,i)=>{i.d(e,{A:()=>c});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[e(t.containerTag,{ref:"container",tag:"component",staticClass:"modal-container",class:{smooth:t.smooth},style:t.style,on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.submitFunction.apply(null,arguments)}}},[e("header",{staticClass:"modal-header",on:{mousedown:t.startMove}},[t._t("header",(function(){return[e("h2",[t._v(t._s(t.title))]),e("span",{staticClass:"close",on:{click:t.close}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),e("main",{staticClass:"modal-content"},[t._t("default")],2),e("footer",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t.submitFunction?e("button",{attrs:{type:"submit"}},[t._v(t._s(t.submitButtonText))]):t._e()]}))],2)])],1)},n=[],o=i(61663),a=i(2566);const r={name:"Modal",mixins:[o.A],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0},submitFunction:{type:Function,default:null},submitButtonText:{type:String,default:"Submit"}},data(){return{zIndex:1e3,position:null,dragPosition:null,smooth:!1}},computed:{...a.A.mapState("editor",["hightestModalZIndex"]),style(){let t={width:this.width};return this.minWidth&&(t["min-width"]=this.minWidth),Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t},containerTag(){return this.submitFunction?"form":"div"}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}},width(){this.smoothResize()},minWidth(){this.smoothResize()}},methods:{...a.A.mapMutations("editor",["openModal","closeModal"]),smoothResize(){this.smooth=!0,setTimeout((()=>this.smooth=!1),600)},submit(t){this.submitFunction(t)},open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){"H2"!==t.target.tagName&&(this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),t.preventDefault(),t.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},l=r;var d=i(81656),u=(0,d.A)(l,s,n,!1,null,null,null);const c=u.exports},43166:(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var s=function(){var t=this,e=t._self._c;return e("Modal",{attrs:{width:"80%",title:t.title},on:{closed:function(e){return t.$emit("closed")}}},[e("UdfRuntime",{attrs:{id:t.id,runtime:t.data,version:t.version}})],1)},n=[],o=i(94679),a=i(33271);const r={name:"UdfRuntimeModal",components:{Modal:o.A,UdfRuntime:a["default"]},props:{id:{type:String},data:{type:Object},version:{type:String}},computed:{title(){return this.data.title||this.id}}},l=r;var d=i(81656),u=(0,d.A)(l,s,n,!1,null,null,null);const c=u.exports}}]);
//# sourceMappingURL=3166.0d671b05.js.map