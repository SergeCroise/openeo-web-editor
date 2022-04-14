(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3898a02","chunk-79c3f3f1"],{2518:function(e,s,t){},"2b37":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("article",{staticClass:"vue-component process"},[e.process.id?e._t("title",(function(){return[t("a",{staticClass:"anchor",attrs:{name:e.process.id}}),t("h2",[e._v(" "+e._s(e.process.id)+" "),e.displayableNamespace?t("span",{staticClass:"namespace"},[e._v(" — "+e._s(e.displayableNamespace))]):e._e()])]}),{vBind:e.$props}):e._e(),e.process.summary||e.process.deprecated||e.process.experimental?[t("summary",[e._v(" "+e._s(e.process.summary)+" "),e.process.deprecated||e.process.experimental?[e.process.summary?[e._v(" — ")]:e._e(),e.process.deprecated?t("strong",{staticClass:"deprecated"},[e._v("deprecated")]):e._e(),e.process.experimental?t("strong",{staticClass:"experimental"},[e._v("experimental")]):e._e()]:e._e()],2)]:e._e(),e.provideDownload||e.hasElements(e.process.categories)?[t("div",{staticClass:"process-bar"},[e.hasElements(e.process.categories)?t("ul",{staticClass:"badges categories"},e._l(e.process.categories,(function(s){return t("li",{key:s,staticClass:"badge category",domProps:{textContent:e._s(e.formatCategory(s))}})})),0):e._e(),e.provideDownload?t("ul",{staticClass:"badges actions"},[t("li",{staticClass:"badge action download"},[t("a",{staticClass:"badge-fill",on:{click:e.download}},[e._v("Download JSON")])])]):e._e()])]:e._e(),e._t("before-description",null,{vBind:e.$props}),e.process.description?t("section",{staticClass:"description"},[t("h3",[e._v("Description")]),t("code",{staticClass:"signature",domProps:{innerHTML:e._s(e.signature)}}),t("Description",{attrs:{description:e.process.description,processUrl:e.processUrl}}),e.process.deprecated?t("DeprecationNotice",{attrs:{entity:"process"}}):e._e(),e.process.experimental?t("ExperimentalNotice",{attrs:{entity:"process"}}):e._e(),e.process["federation:backends"]?t("FederationNotice",{attrs:{backends:e.process["federation:backends"],federation:e.federation,entity:"process"}}):e._e()],1):e._e(),t("section",{staticClass:"parameters"},[t("h3",[e._v("Parameters")]),e._l(e.parameters,(function(s){return t("ProcessParameter",{key:s.name,attrs:{parameter:s,processUrl:e.processUrl,federation:e.federation}})})),0===e.parameters.length?t("p",[e._v("This process has no parameters.")]):e._e()],2),t("section",{staticClass:"returns"},[t("h3",[e._v("Return Value")]),e.returns.description||e.returns.schema?[e.returns.description?t("Description",{attrs:{description:e.returns.description,processUrl:e.processUrl}}):e._e(),e.returns.schema?t("div",{staticClass:"json-schema-container"},[t("JsonSchema",{attrs:{schema:e.returns.schema}})],1):e._e()]:t("p",[e._v("The return value has not been defined.")])],2),e.hasElements(e.process.exceptions)?t("section",{staticClass:"exceptions"},[t("h3",[e._v("Errors/Exceptions")]),t("ul",e._l(e.process.exceptions,(function(s,r){return t("li",{key:r,staticClass:"exception"},[t("code",[e._v(e._s(r))]),s.http?t("span",{staticClass:"http-code"},[e._v(" — HTTP "+e._s(s.http))]):e._e(),s.code?t("span",{staticClass:"error-code"},[e._v(" — "+e._s(s.code))]):e._e(),s.description?t("Description",{attrs:{description:s.description,processUrl:e.processUrl,compact:!0}}):e._e(),s.message?t("div",{staticClass:"message"},[e._v("Message: "),t("em",[e._v(e._s(s.message))])]):e._e()],1)})),0)]):e._e(),e.hasElements(e.process.examples)?t("section",{staticClass:"examples"},[t("h3",[e._v("Examples")]),e._l(e.process.examples,(function(s,r){return t("ProcessExample",{key:r,attrs:{id:r,example:s,processId:e.id,processParameters:e.parameters,processUrl:e.processUrl}})})),t("LinkList",{attrs:{links:e.exampleLinks,heading:"Processes",headingTag:"h4"}})],2):e._e(),t("section",{staticClass:"links"},[t("LinkList",{attrs:{links:e.process.links,heading:"See Also",headingTag:"h3",ignoreRel:["self","example"]}})],1),e.showGraph&&e.process.process_graph?t("section",{staticClass:"process-graph"},[t("h3",[e._v("Processing Instructions")]),t("div",{staticClass:"graph"},[e._t("process-graph",(function(){return[t("ModelBuilder",{attrs:{id:e.id,value:e.process,explicitZoom:!0}})]}),{vBind:e.$props})],2)]):e._e(),e._t("end",null,{vBind:e.$props})],2)},a=[],n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"vue-component process-example"},[t("h4",[e._v(e._s(e.title))]),t("div",{staticClass:"content"},[e.example.description?t("Description",{attrs:{description:e.example.description,processUrl:e.processUrl,compact:!0}}):e._e(),e.example.arguments?t("div",{staticClass:"arguments"},[t("code",{domProps:{innerHTML:e._s(e.renderedArguments)}})]):e._e()],1)])},i=[],c=t("60a2"),o={name:"ProcessExample",props:{id:Number,example:Object,processId:String,processParameters:Array,processUrl:String},components:{Description:()=>t.e("chunk-e60f5ab4").then(t.bind(null,"8088"))},computed:{identifier(){return"#"+(this.id+1)},title(){return this.example.title?this.example.title+" ("+this.identifier+")":"Example "+this.identifier},renderedArguments(){var e=[];for(var s in this.processParameters){var t=this.processParameters[s];if("undefined"!==typeof this.example.arguments[t.name]){var r=this.example.arguments[t.name];let s;s=c["a"].isObject(r)&&r.from_parameter?'<em title="Variable">$'+c["a"].htmlentities(r.from_parameter)+"</em>":c["a"].isObject(r)&&r.from_node?'<em title="Result from other process">$'+c["a"].htmlentities(r.from_node)+"</em>":JSON.stringify(r),e.push('<span class="param-name">'+t.name+'</span> = <span class="argument">'+s+"</span>")}}var a="";return"undefined"!==typeof this.example.returns&&(a=' => <span class="return-value">'+JSON.stringify(this.example.returns)+"</span>"),'<span class="process-name">'+this.processId+"</span>("+e.join(", ")+")"+a}}},p=o,l=(t("3f24"),t("2877")),d=Object(l["a"])(p,n,i,!1,null,null,null),m=d.exports,u=t("e71d"),h={name:"Process",components:{JsonSchema:()=>t.e("chunk-ef2fba6e").then(t.bind(null,"6e45")),DeprecationNotice:()=>t.e("chunk-aca32992").then(t.bind(null,"5dc7")),Description:()=>t.e("chunk-e60f5ab4").then(t.bind(null,"8088")),ExperimentalNotice:()=>t.e("chunk-eccca334").then(t.bind(null,"b581")),ModelBuilder:()=>t.e("chunk-796e9818").then(t.bind(null,"1d9a")),ProcessExample:m,ProcessParameter:()=>t.e("chunk-ee14ce9e").then(t.bind(null,"81dd")),LinkList:()=>t.e("chunk-241547dc").then(t.bind(null,"4845"))},mixins:[u["a"]],props:{process:{type:Object,default:()=>({})},namespace:{type:String,default:null},provideDownload:{type:Boolean,default:!0},processUrl:String,showGraph:{type:Boolean,default:!1},...u["a"].props},computed:{displayableNamespace(){let e=this.process.namespace||this.namespace;return"backend"===e?"":"user"===e?"user-defined":e},id(){return this.process.id||"unnamed"},parameters(){return Array.isArray(this.process.parameters)?this.process.parameters:[]},returns(){return c["a"].isObject(this.process.returns)?this.process.returns:{}},signature(e=!0){return c["a"].formatProcessSignature(this,e)},exampleLinks(){return Array.isArray(this.process.links)?this.process.links.filter(e=>"example"===e.rel):[]}},beforeCreate(){c["a"].enableHtmlProps(this)},methods:{hasElements(e){return"object"===typeof e&&null!==e&&Object.keys(e).length>0},formatCategory(e){return e.replace("_"," ")},download(){let e="data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.process,null,2)),s=document.createElement("a");s.setAttribute("href",e),s.setAttribute("download",this.id+".json"),document.body.appendChild(s),s.click(),s.remove()}}},_=h,f=(t("6ff2"),Object(l["a"])(_,r,a,!1,null,null,null));s["default"]=f.exports},"3f24":function(e,s,t){"use strict";t("2518")},"6ff2":function(e,s,t){"use strict";t("b0e3")},b0e3:function(e,s,t){},e71d:function(e,s,t){"use strict";s["a"]={components:{FederationNotice:()=>t.e("chunk-76884b3e").then(t.bind(null,"7482")),FederationMissingNotice:()=>t.e("chunk-9c0d14c8").then(t.bind(null,"c8b2"))},props:{federation:{type:Object,default:()=>({})}}}}}]);
//# sourceMappingURL=chunk-e3898a02.f465b945.js.map