(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39c40125"],{"5c17":function(e,t,i){},6919:function(e,t,i){"use strict";i("5c17")},c462:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("article",{staticClass:"vue-component udf-runtime"},[e._t("title",(function(){return[i("a",{staticClass:"anchor",attrs:{name:e.id}}),i("h2",[e.runtime.title?[e._v(" "+e._s(e.runtime.title)+" ("),i("code",{staticClass:"id"},[e._v(e._s(e.id))]),e._v(") ")]:i("code",{staticClass:"id"},[e._v(e._s(e.id))])],2)]}),null,e.$props),e._t("badges",(function(){return[i("ul",{staticClass:"badges"},[e.isDocker?i("li",{staticClass:"badge docker"},[e._v("Docker: "+e._s(e.runtime.docker))]):i("li",{staticClass:"badge"},[e._v("Programming Language")])])]}),null,e.$props),e._t("before-description",null,null,e.$props),e.runtime.description?i("section",{staticClass:"description"},[i("Description",{attrs:{description:e.runtime.description}}),e.runtime.deprecated?i("DeprecationNotice",{attrs:{entity:"UDF runtime"}}):e._e(),e.runtime.experimental?i("ExperimentalNotice",{attrs:{entity:"UDF runtime"}}):e._e()],1):e._e(),i("section",{staticClass:"links"},[i("LinkList",{attrs:{links:e.runtime.links,heading:"See Also",headingTag:"h3"}})],1),e.isDocker?[i("h3",[e._v("Tags")]),i("ul",e._l(e.runtime.tags,(function(t){return i("li",{key:t},[e._v(" "+e._s(t)+" "),t===e.runtime.default?i("ul",{staticClass:"badges small"},[i("li",{staticClass:"badge default"},[e._v("default")])]):e._e()])})),0)]:[i("h3",[e._v("Versions")]),i("Tabs",{ref:"tabs",attrs:{id:"userContent"}},e._l(e.runtime.versions,(function(t,s){return i("Tab",{key:s,attrs:{id:e.id+"-"+s,name:s,selected:s===e.selectVersion}},[s===e.runtime.default?i("ul",{staticClass:"badges"},[i("li",{staticClass:"badge default"},[e._v("default")])]):e._e(),t.deprecated?i("DeprecationNotice",{attrs:{entity:"UDF runtime version"}}):e._e(),t.experimental?i("ExperimentalNotice",{attrs:{entity:"UDF runtime version"}}):e._e(),i("p",[e._v("This runtime includes support for:")]),i("ul",e._l(t.libraries,(function(t,s){return i("li",{key:s,staticClass:"library"},[e._v(" "+e._s(s)+" "),i("ul",{staticClass:"badges small"},[i("span",{staticClass:"badge"},[e._v(e._s(t.version))]),t.experimental?i("span",{staticClass:"badge experimental"},[e._v("experimental")]):e._e(),t.deprecated?i("span",{staticClass:"badge deprecated"},[e._v("deprecated")]):e._e()]),i("LinkList",{attrs:{links:t.links}})],1)})),0)],1)})),1)]],2)},n=[],r=i("60a2"),a={name:"UdfRuntime",components:{DeprecationNotice:()=>i.e("chunk-aca32992").then(i.bind(null,"5dc7")),Description:()=>i.e("chunk-adfa0f9c").then(i.bind(null,"8088")),ExperimentalNotice:()=>i.e("chunk-eccca334").then(i.bind(null,"b581")),LinkList:()=>i.e("chunk-241547dc").then(i.bind(null,"4845")),Tabs:()=>Promise.resolve().then(i.bind(null,"e7ea")),Tab:()=>Promise.resolve().then(i.bind(null,"bdb2"))},props:{id:{type:String,default:""},runtime:{type:Object,default:()=>({})},version:{type:String,default:null}},computed:{title(){return this.runtime.title||this.id},isDocker(){return Boolean("docker"===this.runtime.type||this.runtime.docker&&this.runtime.tags)},selectVersion(){return r["a"].isObject(this.runtime.versions)&&this.runtime.versions[this.version]||Array.isArray(this.runtime.tags)&&this.runtime.tags[this.version]?this.version:this.runtime.default}},beforeCreate(){r["a"].enableHtmlProps(this)}},l=a,c=(i("6919"),i("2877")),u=Object(c["a"])(l,s,n,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-39c40125.987556f7.js.map