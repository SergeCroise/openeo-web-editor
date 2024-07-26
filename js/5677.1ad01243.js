"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[5677],{35254:(e,t,i)=>{i.d(t,{A:()=>s});const s={components:{FederationNotice:()=>i.e(2604).then(i.bind(i,52604)),FederationMissingNotice:()=>i.e(5363).then(i.bind(i,35363))},props:{federation:{type:Object,default:()=>({})}}}},90334:(e,t,i)=>{i.d(t,{A:()=>c});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component file-formats"},[t("SearchableList",{attrs:{data:e.fileFormats,summaryKey:"title",keywordsKey:"gis_data_types",showSummaryOnExpand:!1,externalSearchTerm:e.searchTerm,externalHideDeprecated:e.hideDeprecated,deprecatedFilter:e.deprecatedFilter,externalHideExperimental:e.hideExperimental,experimentalFilter:e.experimentalFilter,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(t){return[e._t("heading",null,null,t)]}},e.missing?{key:"content-start",fn:function(){return[t("FederationMissingNotice",{attrs:{missing:e.missing,federation:e.federation}})]},proxy:!0}:null,{key:"summary",fn:function(i){return[e._t("summary",(function(){return[t("strong",{staticClass:"inline"},[e._v(e._s(i.item.name))]),t("ul",{staticClass:"badges small inline"},[e.showAll&&"input"===i.item.type?t("li",{staticClass:"badge option1"},[e._v("Import")]):e._e(),e.showAll&&"output"===i.item.type?t("li",{staticClass:"badge option2"},[e._v("Export")]):e._e(),Array.isArray(i.item.gis_data_types)?e._l(i.item.gis_data_types,(function(i){return t("li",{key:i,staticClass:"badge gis"},[e._v(e._s(i))])})):e._e()],2),t("br"),t("small",[e._v(e._s(i.summary.summary))])]}),null,i)]}},{key:"details",fn:function(i){return[t("FileFormat",{attrs:{id:i.summary.identifier,format:i.item,type:i.item.type,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{staticClass:"hidden"})]},proxy:!0},{key:"badges",fn:function(){return[t("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(t){return[e._t("file-format-before-description",null,null,t)]}},{key:"end",fn:function(t){return[e._t("file-format-end",null,null,t)]}}],null,!0)})]}}],null,!0)})],1)},n=[],a=i(86975),l=i(35254);const r={name:"FileFormats",components:{SearchableList:()=>a.A.loadAsyncComponent(i.e(4152).then(i.bind(i,34152))),FileFormat:()=>a.A.loadAsyncComponent(i.e(3504).then(i.bind(i,13504)))},mixins:[l.A],props:{formats:{type:Object,default:()=>({})},showInput:{type:Boolean,default:!0},showOutput:{type:Boolean,default:!0},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"File Formats"},collapsed:{type:Boolean,default:null},hideDeprecated:{type:Boolean,default:!1},deprecatedFilter:{type:Boolean,default:!1},hideExperimental:{type:Boolean,default:!1},experimentalFilter:{type:Boolean,default:!1},missing:{type:Array,default:null},...l.A.props},computed:{showAll(){return this.showInput&&this.showOutput},typesToShow(){let e=[];return this.showInput&&e.push("input"),this.showOutput&&e.push("output"),e},fileFormats(){let e=[];for(let i of this.typesToShow)for(var t in this.formats[i]){let s=Object.assign({id:`${t}-${i}`,name:t,type:i},this.formats[i][t]);e.push(s)}return e}},beforeCreate(){a.A.enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},o=r;var d=i(81656),u=(0,d.A)(o,s,n,!1,null,null,null);const c=u.exports},91065:(e,t,i)=>{i.d(t,{A:()=>c});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component udf-runtimes"},[t("SearchableList",{attrs:{data:e.runtimes,summaryKey:"title",showSummaryOnExpand:!1,externalSearchTerm:e.searchTerm,externalHideDeprecated:e.hideDeprecated,deprecatedFilter:e.deprecatedFilter,externalHideExperimental:e.hideExperimental,experimentalFilter:e.experimentalFilter,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(t){return[e._t("heading",null,null,t)]}},{key:"summary",fn:function(i){return[e._t("summary",(function(){return[t("strong",{staticClass:"inline"},[e._v(e._s(i.summary.identifier))]),t("ul",{staticClass:"badges small inline"},["docker"===i.item.type||i.item.docker&&i.item.tags?[t("li",{staticClass:"badge docker"},[e._v("Docker")]),e._l(i.item.tags,(function(s){return t("li",{key:s,staticClass:"badge version",class:{default:s===i.item.default}},[e._v(e._s(s))])}))]:e._l(i.item.versions,(function(s,n){return t("li",{key:n,staticClass:"badge version",class:{default:n===i.item.default}},[e._v(e._s(n))])}))],2),t("br"),t("small",[e._v(e._s(i.summary.summary))])]}),null,i)]}},{key:"details",fn:function(i){return[t("UdfRuntime",{attrs:{id:i.summary.identifier,runtime:i.item,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{staticClass:"hidden"})]},proxy:!0},{key:"badges",fn:function(t){return[e._t("udf-runtime-badges",null,null,t)]}},{key:"before-description",fn:function(t){return[e._t("udf-runtime-before-description",null,null,t)]}}],null,!0)})]}}],null,!0)})],1)},n=[],a=i(86975),l=i(35254);const r={name:"UdfRuntimes",components:{SearchableList:()=>a.A.loadAsyncComponent(i.e(4152).then(i.bind(i,34152))),UdfRuntime:()=>a.A.loadAsyncComponent(i.e(3271).then(i.bind(i,33271)))},mixins:[l.A],props:{runtimes:{type:Object,default:()=>({})},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"UDF Runtimes"},collapsed:{type:Boolean,default:null},hideDeprecated:{type:Boolean,default:!1},deprecatedFilter:{type:Boolean,default:!1},hideExperimental:{type:Boolean,default:!1},experimentalFilter:{type:Boolean,default:!1},...l.A.props},beforeCreate(){a.A.enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},o=r;var d=i(81656),u=(0,d.A)(o,s,n,!1,null,null,null);const c=u.exports},94679:(e,t,i)=>{i.d(t,{A:()=>c});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"modal",style:{"z-index":e.zIndex},on:{mousedown:e.backgroundClose}},[t(e.containerTag,{ref:"container",tag:"component",staticClass:"modal-container",class:{smooth:e.smooth},style:e.style,on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.submitFunction.apply(null,arguments)}}},[t("header",{staticClass:"modal-header",on:{mousedown:e.startMove}},[e._t("header",(function(){return[t("h2",[e._v(e._s(e.title))]),t("span",{staticClass:"close",on:{click:e.close}},[t("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),t("main",{staticClass:"modal-content"},[e._t("default")],2),t("footer",{staticClass:"modal-footer"},[e._t("footer",(function(){return[e.submitFunction?t("button",{attrs:{type:"submit"}},[e._v(e._s(e.submitButtonText))]):e._e()]}))],2)])],1)},n=[],a=i(61663),l=i(2566);const r={name:"Modal",mixins:[a.A],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0},submitFunction:{type:Function,default:null},submitButtonText:{type:String,default:"Submit"}},data(){return{zIndex:1e3,position:null,dragPosition:null,smooth:!1}},computed:{...l.A.mapState("editor",["hightestModalZIndex"]),style(){let e={width:this.width};return this.minWidth&&(e["min-width"]=this.minWidth),Array.isArray(this.position)&&(e.position="absolute",e.left=this.position[0]+"px",e.top=this.position[1]+"px"),e},containerTag(){return this.submitFunction?"form":"div"}},watch:{show:{immediate:!0,handler(e){e?this.open():this.close()}},width(){this.smoothResize()},minWidth(){this.smoothResize()}},methods:{...l.A.mapMutations("editor",["openModal","closeModal"]),smoothResize(){this.smooth=!0,setTimeout((()=>this.smooth=!1),600)},submit(e){this.submitFunction(e)},open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(e){"H2"!==e.target.tagName&&(this.dragPosition=[e.clientX,e.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),e.preventDefault(),e.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(e){e.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-e.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-e.clientY)],this.dragPosition=[e.clientX,e.clientY]},escCloseListener(e){if("Escape"==e.key)return this.close(),e.preventDefault(),e.stopPropagation(),!1},backgroundClose(e){e.target===this.$el&&this.close()}}},o=r;var d=i(81656),u=(0,d.A)(o,s,n,!1,null,null,null);const c=u.exports},65677:(e,t,i)=>{i.r(t),i.d(t,{default:()=>S});var s=function(){var e=this,t=e._self._c;return t("Modal",{attrs:{width:"60%",title:e.title},on:{closed:function(t){return e.$emit("closed")}}},[t("div",{staticClass:"vue-component server-info"},[t("Capabilities",{attrs:{capabilities:e.capabilities,url:e.url}}),t("h3",[e._v("File formats")]),t("FileFormats",{attrs:{formats:e.fileFormats,searchTerm:"",heading:null}}),t("h3",[e._v("Secondary web services")]),t("ServiceTypes",{attrs:{services:e.serviceTypes,searchTerm:"",heading:null}}),t("h3",[e._v("Runtimes for user-defined functions (UDF)")]),t("UdfRuntimes",{attrs:{runtimes:e.udfRuntimes,searchTerm:"",heading:null}})],1)])},n=[],a=i(94679),l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component capabilities"},[t("h2",[e._v(e._s(e.title))]),t("section",{staticClass:"base-data"},[e.url2?t("div",{staticClass:"tabular"},[t("label",[e._v("URL:")]),t("span",{staticClass:"value"},[e._v(e._s(e.url2))])]):e._e(),e.capabilities.api_version?t("div",{staticClass:"tabular"},[t("label",[e._v("openEO-Version:")]),t("span",{staticClass:"value"},[e._v(e._s(e.capabilities.api_version))])]):e._e(),t("div",{staticClass:"tabular"},[t("label",[e._v("Production:")]),t("span",{staticClass:"value"},[e.capabilities.production?[e._v("✔️")]:[e._v("❌")]],2)])]),e.capabilities.description?t("Description",{attrs:{description:e.capabilities.description}}):e._e(),t("SupportedFeatures",{attrs:{endpoints:e.capabilities.endpoints,headingTag:"h3"}}),e.capabilities.billing?t("BillingPlans",{attrs:{billing:e.capabilities.billing,headingTag:"h3"}}):e._e(),e.federated?t("div",{staticClass:"federation"},[t("h3",[e._v("Federation")]),t("p",[e._v("This service is a federation of multiple services, which are all listed below:")]),t("ul",e._l(e.capabilities.federation,(function(i,s){return t("li",{key:s},[t("div",{staticClass:"fed-header"},[t("strong",{staticClass:"fed-title"},[e._v(e._s(i.title||s))]),t("ul",{staticClass:"badges small inline"},["offline"===i.status?t("li",{staticClass:"badge red",attrs:{title:e.offlineTitle(i)}},[e._v("offline")]):t("li",{staticClass:"badge green"},[e._v("online")])])]),t("small",[e._v("URL: "+e._s(i.url))]),i.description?t("Description",{attrs:{description0:i.description,compact:!0}}):e._e(),i.last_status_check?t("small",[e._v("Last check: "+e._s(e._f("timestamp")(i.last_status_check)))]):e._e()],1)})),0)]):e._e(),t("LinkList",{attrs:{links:e.capabilities.links,heading:"More information",headingTag:"h3"}})],1)},r=[],o=i(86975);const d={name:"Capabilities",props:{capabilities:{type:Object,default:()=>({})},url:{type:String}},components:{BillingPlans:()=>i.e(7759).then(i.bind(i,27759)),Description:()=>Promise.all([i.e(7261),i.e(1194)]).then(i.bind(i,27261)),LinkList:()=>i.e(2810).then(i.bind(i,52810)),SupportedFeatures:()=>i.e(4120).then(i.bind(i,94120))},computed:{title(){if("string"===typeof this.capabilities.title&&this.capabilities.title.length>0)return this.capabilities.title;try{var e=new URL(this.url);return e.hostname}catch(t){return""}},url2(){if("string"===typeof this.url)return this.url;if(Array.isArray(this.capabilities.links)){let e=this.capabilities.links.find((e=>"self"===e.rel));if(e)return e.href}return null},federated(){return o.A.size(this.capabilities.federation)>0}},beforeCreate(){o.A.enableHtmlProps(this)},filters:{timestamp(e){return o.A.formatTimestamp(e)}},methods:{offlineTitle(e){return e.last_successful_check?`Last seen online: ${o.A.formatTimestamp(e.last_successful_check)}`:null}}},u=d;var c=i(81656),p=(0,c.A)(u,l,r,!1,null,null,null);const m=p.exports;var f=i(90334),h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component service-types"},[t("SearchableList",{attrs:{data:e.services,summaryKey:"title",externalSearchTerm:e.searchTerm,externalHideDeprecated:e.hideDeprecated,deprecatedFilter:e.deprecatedFilter,externalHideExperimental:e.hideExperimental,experimentalFilter:e.experimentalFilter,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(t){return[e._t("heading",null,null,t)]}},{key:"summary",fn:function(t){return[e._t("summary",null,null,t)]}},{key:"details",fn:function(i){return[t("ServiceType",{attrs:{id:i.summary.identifier,service:i.item,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(t){return[e._t("service-type-before-description",null,null,t)]}},{key:"end",fn:function(t){return[e._t("service-type-end",null,null,t)]}}],null,!0)})]}}],null,!0)})],1)},y=[],g=i(35254);const v={name:"ServiceTypes",components:{SearchableList:()=>o.A.loadAsyncComponent(i.e(4152).then(i.bind(i,34152))),ServiceType:()=>o.A.loadAsyncComponent(i.e(9873).then(i.bind(i,29873)))},mixins:[g.A],props:{services:{type:Object,default:()=>({})},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"Secondary Web Services"},collapsed:{type:Boolean,default:null},hideDeprecated:{type:Boolean,default:!1},deprecatedFilter:{type:Boolean,default:!1},hideExperimental:{type:Boolean,default:!1},experimentalFilter:{type:Boolean,default:!1},...g.A.props},beforeCreate(){o.A.enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},_=v;var b=(0,c.A)(_,h,y,!1,null,null,null);const C=b.exports;var x=i(91065),A=i(2566);const k={name:"ServerInfoModal",components:{Modal:a.A,Capabilities:m,FileFormats:f.A,ServiceTypes:C,UdfRuntimes:x.A},computed:{...A.A.mapState(["connection","serviceTypes","udfRuntimes"]),...A.A.mapGetters(["fileFormats"]),capabilities(){return this.connection.capabilities().toJSON()},url(){return this.connection.getUrl()},title(){return this.connection.capabilities().title()||"Server information"}}},F=k;var T=(0,c.A)(F,s,n,!1,null,null,null);const S=T.exports}}]);
//# sourceMappingURL=5677.1ad01243.js.map