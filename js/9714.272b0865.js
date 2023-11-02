"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[9714],{15554:(e,s,t)=>{t.d(s,{Z:()=>o});const o={components:{FederationNotice:()=>t.e(8407).then(t.bind(t,78407)),FederationMissingNotice:()=>t.e(3559).then(t.bind(t,73559))},props:{federation:{type:Object,default:()=>({})}}}},51659:(e,s,t)=>{t.d(s,{Z:()=>u});var o=function(){var e=this,s=e._self._c;return s("div",{staticClass:"vue-component processes"},[s("SearchableList",{attrs:{data:e.processes,keywordsKey:"categories",showKeywords:e.showCategories,showSummaryOnExpand:!1,externalSearchTerm:e.searchTerm,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed,loadAdditionalData:e.loadAdditionalData,allowCopy:""},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(s){return[e._t("heading",null,null,s)]}},e.missing?{key:"content-start",fn:function(){return[s("FederationMissingNotice",{attrs:{missing:e.missing,federation:e.federation}})]},proxy:!0}:null,{key:"summary",fn:function(s){return[e._t("summary",null,null,s)]}},{key:"details",fn:function(t){return[s("Process",{attrs:{process:t.item,provideDownload:e.provideDownload,processUrl:e.processUrl,showGraph:e.showGraph,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[s("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(s){return[e._t("process-before-description",null,null,s)]}},{key:"end",fn:function(s){return[e._t("process-end",null,null,s)]}}],null,!0)})]}}],null,!0)})],1)},n=[],r=t(40465),a=t(15554);const l={name:"Processes",components:{Process:()=>r.Z.loadAsyncComponent(t.e(3965).then(t.bind(t,16157))),SearchableList:()=>r.Z.loadAsyncComponent(t.e(3250).then(t.bind(t,33250)))},mixins:[a.Z],props:{processes:{type:Array,default:()=>[]},provideDownload:{type:Boolean,default:!0},processUrl:String,searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"Processes"},collapsed:{type:Boolean,default:null},showCategories:{type:Boolean,default:!1},showGraph:{type:Boolean,default:!1},loadAdditionalData:{type:Function,default:null},missing:{type:Array,default:null},...a.Z.props},beforeCreate(){r.Z.enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},i=l;var d=t(1001),c=(0,d.Z)(i,o,n,!1,null,null,null);const u=c.exports},49714:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var o=function(){var e=this,s=e._self._c;return s("div",{staticClass:"step choose-process"},[s("p",[e._v("Please select the user-defined process to execute.")]),s("Processes",{attrs:{heading:"",processes:e.filteredProcesses,offerDetails:!1},scopedSlots:e._u([{key:"summary",fn:function({item:t}){return[s("div",{class:{element:!0,selected:t.id==e.value}},[s("div",{staticClass:"summary",on:{click:function(s){return e.update(t)}}},[s("strong",{attrs:{title:t.id}},[e._v(e._s(t.id))]),t.title?s("small",{attrs:{title:t.title}},[e._v(e._s(t.title))]):e._e()]),s("button",{staticClass:"button",attrs:{type:"button",title:"Show process details"},on:{click:function(s){return e.showProcess(t)}}},[s("i",{staticClass:"fas fa-info"})])])]}}])})],1)},n=[],r=t(51659),a=t(79879),l=t(43334);const i={name:"ChooseUserDefinedProcess",mixins:[l.Z],components:{Processes:r.Z},props:{value:{type:String,default:null},namespace:{type:String,default:"user"}},computed:{...a.Z.mapGetters(["processes"]),filteredProcesses(){return this.processes.namespace(this.namespace)}},methods:{...a.Z.mapActions(["describeUserProcess"]),async update(e){this.$emit("input",e)},showProcess(e){this.broadcast("showProcess",e)}}},d=i;var c=t(1001),u=(0,c.Z)(d,o,n,!1,null,null,null);const p=u.exports}}]);
//# sourceMappingURL=9714.272b0865.js.map