"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[4475],{35254:(e,t,l)=>{l.d(t,{A:()=>n});const n={components:{FederationNotice:()=>l.e(2604).then(l.bind(l,52604)),FederationMissingNotice:()=>l.e(5363).then(l.bind(l,35363))},props:{federation:{type:Object,default:()=>({})}}}},69748:(e,t,l)=>{l.d(t,{A:()=>u});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component collections"},[t("SearchableList",{attrs:{data:e.collections,identifierKey:"id",summaryKey:"title",keywordsKey:"keywords",showKeywords:e.showKeywords,showSummaryOnExpand:!1,externalSearchTerm:e.searchTerm,externalHideDeprecated:e.hideDeprecated,deprecatedFilter:e.deprecatedFilter,externalHideExperimental:e.hideExperimental,experimentalFilter:e.experimentalFilter,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed,loadAdditionalData:e.loadAdditionalData,allowCopy:""},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(t){return[e._t("heading",null,null,t)]}},e.missing?{key:"content-start",fn:function(){return[t("FederationMissingNotice",{attrs:{missing:e.missing,federation:e.federation}})]},proxy:!0}:null,{key:"summary",fn:function(t){return[e._t("summary",null,null,t)]}},{key:"details",fn:function(l){return[t("Collection",{attrs:{data:l.item,mapOptions:e.mapOptions,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(t){return[e._t("collection-before-description",null,null,t)]}},{key:"end",fn:function(t){return[e._t("collection-end",null,null,t)]}},{key:"spatial-extents",fn:function(t){return[e._t("collection-spatial-extents",null,null,t)]}},{key:"temporal-extents",fn:function(t){return[e._t("collection-temporal-extents",null,null,t)]}}],null,!0)})]}}],null,!0)})],1)},o=[],i=l(86975),a=l(35254);const s={name:"Collections",components:{Collection:()=>i.A.loadAsyncComponent(Promise.all([l.e(9710),l.e(4432),l.e(3627),l.e(4243),l.e(3215),l.e(7066)]).then(l.bind(l,3215))),SearchableList:()=>i.A.loadAsyncComponent(l.e(4152).then(l.bind(l,34152)))},mixins:[a.A],props:{collections:{type:Array,default:()=>[]},mapOptions:{type:Object,default:()=>({})},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"Collections"},collapsed:{type:Boolean,default:null},loadAdditionalData:{type:Function,default:null},showKeywords:{type:Boolean,default:!1},hideDeprecated:{type:Boolean,default:!1},deprecatedFilter:{type:Boolean,default:!1},hideExperimental:{type:Boolean,default:!1},experimentalFilter:{type:Boolean,default:!1},missing:{type:Array,default:null},...a.A.props},beforeCreate(){i.A.enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},r=s;var d=l(81656),c=(0,d.A)(r,n,o,!1,null,null,null);const u=c.exports},4475:(e,t,l)=>{l.r(t),l.d(t,{default:()=>p});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step choose-collection"},[t("p",[e._v("Please select the collection which you want to download data for.")]),t("Collections",{attrs:{heading:"",collections:e.filteredCollections,offerDetails:!1},scopedSlots:e._u([{key:"summary",fn:function({item:l}){return[t("div",{class:{element:!0,selected:l.id==e.value}},[t("div",{staticClass:"summary",on:{click:function(t){return e.update(l.id)}}},[t("strong",{attrs:{title:l.id}},[e._v(e._s(l.id))]),l.title?t("small",{attrs:{title:l.title}},[e._v(e._s(l.title))]):e._e()]),t("button",{staticClass:"button",attrs:{type:"button",title:"Show collection details"},on:{click:function(t){return e.showCollectionInfo(l.id)}}},[t("i",{staticClass:"fas fa-info"})])])]}}])})],1)},o=[],i=l(69748),a=l(2566),s=l(61663);const r={name:"ChooseCollection",mixins:[s.A],components:{Collections:i.A},props:{value:{type:String,default:null},filter:{type:Function,default:null}},computed:{...a.A.mapState(["collections"]),filteredCollections(){return"function"===typeof this.filter?this.collections.filter(this.filter):this.collections}},methods:{...a.A.mapActions(["describeCollection"]),async update(e){this.$emit("input",e)},showCollectionInfo(e){this.broadcast("showCollection",e)}}},d=r;var c=l(81656),u=(0,c.A)(d,n,o,!1,null,null,null);const p=u.exports}}]);
//# sourceMappingURL=4475.9ac5a5e7.js.map