(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a5c26f6"],{2406:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Modal",{attrs:{width:"60%",title:e.title},on:{closed:function(t){return e.$emit("closed")}}},[i("div",{staticClass:"vue-component server-info"},[i("Capabilities",{attrs:{capabilities:e.capabilities,url:e.url}}),i("h3",[e._v("File formats")]),i("FileFormats",{attrs:{formats:e.fileFormats,searchTerm:"",heading:null}}),i("h3",[e._v("Secondary web services")]),i("ServiceTypes",{attrs:{services:e.serviceTypes,searchTerm:"",heading:null}}),i("h3",[e._v("Runtimes for user-defined functions (UDF)")]),i("UdfRuntimes",{attrs:{runtimes:e.udfRuntimes,searchTerm:"",heading:null}})],1)])},n=[],a=i("2930"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vue-component capabilities"},[i("h2",[e._v(e._s(e.title))]),i("section",{staticClass:"base-data"},[e.url2?i("div",{staticClass:"tabular"},[i("label",[e._v("URL:")]),i("span",{staticClass:"value"},[e._v(e._s(e.url2))])]):e._e(),e.capabilities.api_version?i("div",{staticClass:"tabular"},[i("label",[e._v("openEO-Version:")]),i("span",{staticClass:"value"},[e._v(e._s(e.capabilities.api_version))])]):e._e(),i("div",{staticClass:"tabular"},[i("label",[e._v("Production:")]),i("span",{staticClass:"value"},[e.capabilities.production?[e._v("✔️")]:[e._v("❌")]],2)])]),e.capabilities.description?i("Description",{attrs:{description:e.capabilities.description}}):e._e(),i("SupportedFeatures",{attrs:{endpoints:e.capabilities.endpoints,headingTag:"h3"}}),e.capabilities.billing?i("BillingPlans",{attrs:{billing:e.capabilities.billing,headingTag:"h3"}}):e._e(),e.federated?i("div",{staticClass:"federation"},[i("h3",[e._v("Federation")]),i("p",[e._v("This service is a federation of multiple services, which are all listed below:")]),i("ul",e._l(e.capabilities.federation,(function(t,s){return i("li",{key:s},[i("div",{staticClass:"fed-header"},[i("strong",{staticClass:"fed-title"},[e._v(e._s(t.title||s))]),i("ul",{staticClass:"badges small inline"},["offline"===t.status?i("li",{staticClass:"badge red",attrs:{title:e.offlineTitle(t)}},[e._v("offline")]):i("li",{staticClass:"badge green"},[e._v("online")])])]),i("small",[e._v("URL: "+e._s(t.url))]),t.description?i("Description",{attrs:{description0:t.description,compact:!0}}):e._e(),t.last_status_check?i("small",[e._v("Last check: "+e._s(e._f("timestamp")(t.last_status_check)))]):e._e()],1)})),0)]):e._e(),i("LinkList",{attrs:{links:e.capabilities.links,heading:"More information",headingTag:"h3"}})],1)},r=[],o=i("60a2"),u={name:"Capabilities",props:{capabilities:{type:Object,default:()=>({})},url:{type:String}},components:{BillingPlans:()=>i.e("chunk-5b6271ee").then(i.bind(null,"1a41")),Description:()=>i.e("chunk-e60f5ab4").then(i.bind(null,"8088")),LinkList:()=>i.e("chunk-241547dc").then(i.bind(null,"4845")),SupportedFeatures:()=>i.e("chunk-17004fc3").then(i.bind(null,"33af"))},computed:{title(){if("string"===typeof this.capabilities.title&&this.capabilities.title.length>0)return this.capabilities.title;try{var e=new URL(this.url);return e.hostname}catch(t){return""}},url2(){if("string"===typeof this.url)return this.url;if(Array.isArray(this.capabilities.links)){let e=this.capabilities.links.find(e=>"self"===e.rel);if(e)return e.href}return null},federated(){return o["a"].size(this.capabilities.federation)>0}},beforeCreate(){o["a"].enableHtmlProps(this)},filters:{timestamp(e){return o["a"].formatTimestamp(e)}},methods:{offlineTitle(e){return e.last_successful_check?"Last seen online: "+o["a"].formatTimestamp(e.last_successful_check):null}}},c=u,d=(i("3fe6"),i("2877")),f=Object(d["a"])(c,l,r,!1,null,null,null),p=f.exports,m=i("a0e2"),h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vue-component service-types"},[i("SearchableList",{attrs:{data:e.services,summaryKey:"title",externalSearchTerm:e.searchTerm,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(t){return[e._t("heading",null,null,t)]}},{key:"summary",fn:function(t){return[e._t("summary",null,null,t)]}},{key:"details",fn:function(t){return[i("ServiceType",{attrs:{id:t.summary.identifier,service:t.item,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[i("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(t){return[e._t("service-type-before-description",null,null,t)]}},{key:"end",fn:function(t){return[e._t("service-type-end",null,null,t)]}}],null,!0)})]}}],null,!0)})],1)},y=[],b=i("e71d"),g={name:"ServiceTypes",components:{SearchableList:()=>o["a"].loadAsyncComponent(i.e("chunk-4f7707c2").then(i.bind(null,"d79f"))),ServiceType:()=>o["a"].loadAsyncComponent(i.e("chunk-32bc037d").then(i.bind(null,"b64d")))},mixins:[b["a"]],props:{services:{type:Object,default:()=>({})},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"Secondary Web Services"},collapsed:{type:Boolean,default:null},...b["a"].props},beforeCreate(){o["a"].enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},v=g,_=(i("b0ba"),Object(d["a"])(v,h,y,!1,null,null,null)),k=_.exports,C=i("d235"),S=i("025e"),T={name:"ServerInfoModal",components:{Modal:a["a"],Capabilities:p,FileFormats:m["a"],ServiceTypes:k,UdfRuntimes:C["a"]},computed:{...S["a"].mapState(["connection","serviceTypes","udfRuntimes"]),...S["a"].mapGetters(["fileFormats"]),capabilities(){return this.connection.capabilities().toJSON()},url(){return this.connection.getUrl()},title(){return this.connection.capabilities().title()||"Server information"}}},w=T,x=(i("ac0a"),Object(d["a"])(w,s,n,!1,null,null,null));t["default"]=x.exports},2930:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"modal",style:{"z-index":e.zIndex},on:{mousedown:e.backgroundClose}},[i("div",{ref:"container",staticClass:"modal-container",style:e.style},[i("header",{staticClass:"modal-header",on:{mousedown:e.startMove}},[e._t("header",(function(){return[i("h2",[e._v(e._s(e.title))]),i("span",{staticClass:"close",on:{click:e.close}},[i("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),i("main",{staticClass:"modal-content"},[e._t("default")],2),i("footer",{staticClass:"modal-footer"},[e._t("footer")],2)])])},n=[],a=i("3115"),l=i("025e"),r={name:"Modal",mixins:[a["a"]],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...l["a"].mapState("editor",["hightestModalZIndex"]),style(){let e={width:this.width};return this.minWidth&&(e["min-width"]=this.minWidth),Array.isArray(this.position)&&(e.position="absolute",e.left=this.position[0]+"px",e.top=this.position[1]+"px"),e}},watch:{show:{immediate:!0,handler(e){e?this.open():this.close()}}},methods:{...l["a"].mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(e){"H2"!==e.target.tagName&&(this.dragPosition=[e.clientX,e.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),e.preventDefault(),e.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(e){e.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-e.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-e.clientY)],this.dragPosition=[e.clientX,e.clientY]},escCloseListener(e){if("Escape"==e.key)return this.close(),e.preventDefault(),e.stopPropagation(),!1},backgroundClose(e){e.target===this.$el&&this.close()}}},o=r,u=(i("8781"),i("2877")),c=Object(u["a"])(o,s,n,!1,null,null,null);t["a"]=c.exports},"3fe6":function(e,t,i){"use strict";i("ee2d")},"433e":function(e,t,i){},4719:function(e,t,i){"use strict";i("e794")},"6b1e":function(e,t,i){},8302:function(e,t,i){},8781:function(e,t,i){"use strict";i("6b1e")},"9fdd":function(e,t,i){},a0e2:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vue-component file-formats"},[i("SearchableList",{attrs:{data:e.fileFormats,summaryKey:"title",keywordsKey:"gis_data_types",showSummaryOnExpand:!1,externalSearchTerm:e.searchTerm,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(t){return[e._t("heading",null,null,t)]}},e.missing?{key:"content-start",fn:function(){return[i("FederationMissingNotice",{attrs:{missing:e.missing,federation:e.federation}})]},proxy:!0}:null,{key:"summary",fn:function(t){return[e._t("summary",(function(){return[i("strong",{staticClass:"inline"},[e._v(e._s(t.item.name))]),i("ul",{staticClass:"badges small inline"},[e.showAll&&"input"===t.item.type?i("li",{staticClass:"badge option1"},[e._v("Import")]):e._e(),e.showAll&&"output"===t.item.type?i("li",{staticClass:"badge option2"},[e._v("Export")]):e._e(),Array.isArray(t.item.gis_data_types)?e._l(t.item.gis_data_types,(function(t){return i("li",{key:t,staticClass:"badge gis"},[e._v(e._s(t))])})):e._e()],2),i("br"),i("small",[e._v(e._s(t.summary.summary))])]}),null,t)]}},{key:"details",fn:function(t){return[i("FileFormat",{attrs:{id:t.summary.identifier,format:t.item,type:t.item.type,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[i("span",{staticClass:"hidden"})]},proxy:!0},{key:"badges",fn:function(){return[i("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(t){return[e._t("file-format-before-description",null,null,t)]}},{key:"end",fn:function(t){return[e._t("file-format-end",null,null,t)]}}],null,!0)})]}}],null,!0)})],1)},n=[],a=i("60a2"),l=i("e71d"),r={name:"FileFormats",components:{SearchableList:()=>a["a"].loadAsyncComponent(i.e("chunk-4f7707c2").then(i.bind(null,"d79f"))),FileFormat:()=>a["a"].loadAsyncComponent(i.e("chunk-ef9b6c7c").then(i.bind(null,"b896")))},mixins:[l["a"]],props:{formats:{type:Object,default:()=>({})},showInput:{type:Boolean,default:!0},showOutput:{type:Boolean,default:!0},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"File Formats"},collapsed:{type:Boolean,default:null},missing:{type:Array,default:null},...l["a"].props},computed:{showAll(){return this.showInput&&this.showOutput},typesToShow(){let e=[];return this.showInput&&e.push("input"),this.showOutput&&e.push("output"),e},fileFormats(){let e=[];for(let i of this.typesToShow)for(var t in this.formats[i]){let s=Object.assign({id:`${t}-${i}`,name:t,type:i},this.formats[i][t]);e.push(s)}return e}},beforeCreate(){a["a"].enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},o=r,u=(i("4719"),i("2877")),c=Object(u["a"])(o,s,n,!1,null,null,null);t["a"]=c.exports},ac0a:function(e,t,i){"use strict";i("9fdd")},b0ba:function(e,t,i){"use strict";i("433e")},d235:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vue-component udf-runtimes"},[i("SearchableList",{attrs:{data:e.runtimes,summaryKey:"title",showSummaryOnExpand:!1,externalSearchTerm:e.searchTerm,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(t){return[e._t("heading",null,null,t)]}},{key:"summary",fn:function(t){return[e._t("summary",(function(){return[i("strong",{staticClass:"inline"},[e._v(e._s(t.summary.identifier))]),i("ul",{staticClass:"badges small inline"},["docker"===t.item.type||t.item.docker&&t.item.tags?[i("li",{staticClass:"badge docker"},[e._v("Docker")]),e._l(t.item.tags,(function(s){return i("li",{key:s,staticClass:"badge version",class:{default:s===t.item.default}},[e._v(e._s(s))])}))]:e._l(t.item.versions,(function(s,n){return i("li",{key:n,staticClass:"badge version",class:{default:n===t.item.default}},[e._v(e._s(n))])}))],2),i("br"),i("small",[e._v(e._s(t.summary.summary))])]}),null,t)]}},{key:"details",fn:function(t){return[i("UdfRuntime",{attrs:{id:t.summary.identifier,runtime:t.item,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[i("span",{staticClass:"hidden"})]},proxy:!0},{key:"badges",fn:function(t){return[e._t("udf-runtime-badges",null,null,t)]}},{key:"before-description",fn:function(t){return[e._t("udf-runtime-before-description",null,null,t)]}}],null,!0)})]}}],null,!0)})],1)},n=[],a=i("60a2"),l=i("e71d"),r={name:"UdfRuntimes",components:{SearchableList:()=>a["a"].loadAsyncComponent(i.e("chunk-4f7707c2").then(i.bind(null,"d79f"))),UdfRuntime:()=>a["a"].loadAsyncComponent(i.e("chunk-39c40125").then(i.bind(null,"c462")))},mixins:[l["a"]],props:{runtimes:{type:Object,default:()=>({})},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"UDF Runtimes"},collapsed:{type:Boolean,default:null},...l["a"].props},beforeCreate(){a["a"].enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},o=r,u=(i("db18"),i("2877")),c=Object(u["a"])(o,s,n,!1,null,null,null);t["a"]=c.exports},db18:function(e,t,i){"use strict";i("8302")},e71d:function(e,t,i){"use strict";t["a"]={components:{FederationNotice:()=>i.e("chunk-76884b3e").then(i.bind(null,"7482")),FederationMissingNotice:()=>i.e("chunk-9c0d14c8").then(i.bind(null,"c8b2"))},props:{federation:{type:Object,default:()=>({})}}}},e794:function(e,t,i){},ee2d:function(e,t,i){}}]);
//# sourceMappingURL=chunk-8a5c26f6.ffee9d7f.js.map