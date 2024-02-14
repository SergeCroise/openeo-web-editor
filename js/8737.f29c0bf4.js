"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[8737,3640],{53640:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component searchable-list",class:{expandable:null!==e.collapsed,expanded:e.showList,noResults:0===e.filteredCount}},[e._t("heading",(function(){return[e.heading?t("h2",{staticClass:"heading",on:{click:function(t){return e.toggleHeading(null)}}},[e._v(" "+e._s(e.heading)+" "),null!==e.filteredCount?[e._v("("+e._s(e.filteredCount)+"/"+e._s(e.totalCount)+")")]:[e._v("("+e._s(e.totalCount)+")")]],2):e._e()]}),{filteredCount:e.filteredCount,totalCount:e.totalCount}),null!==e.showList?t("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.showList,expression:"showList === true"}],staticClass:"body"},[e._t("content-start"),0===e.totalCount?[t("p",[e._v("No data available.")])]:[null===e.externalSearchTerm?t("SearchBox",{attrs:{placeholder:e.searchPlaceholder,minLength:e.searchMinLength},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}):e._e(),e._t("after-search-box",null,{filteredCount:e.filteredCount,summaries:e.summaries}),0===e.filteredCount?t("p",[e._v("No search results found.")]):t("ul",{staticClass:"list",class:{expandable:e.offerDetails}},e._l(e.summaries,(function(s,a){return t("li",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"summary.show"}],key:s.identifier,class:{expanded:e.showDetails[a]}},[t("summary",{staticClass:"summary",class:{experimental:s.experimental,deprecated:s.deprecated},on:{click:function(t){return e.toggleDetails(a)}}},[e._t("summary",(function(){return[t("strong",[e._v(" "+e._s(s.identifier)+" "),e.allowCopy&&e.canCopy?t("span",{staticClass:"copy",attrs:{title:"Copy identifier"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.copyIdentifier(t,s)}}},[e._v("📋")]):e._e()]),s.summary?t("small",{class:{hideOnExpand:!e.showSummaryOnExpand}},[e._v(e._s(s.summary))]):e._e(),e.showKeywords&&s.keywords.length>0?t("ul",{staticClass:"badges small block hideOnExpand"},e._l(s.keywords,(function(s){return t("li",{key:s,staticClass:"badge"},[e._v(e._s(s))])})),0):e._e()]}),{summary:s,item:s.data})],2),"boolean"===typeof e.showDetails[a]?t("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.showDetails[a],expression:"showDetails[i] === true"}],staticClass:"details"},[s.loaded?e._t("details",(function(){return[e._v(" No details available! ")]}),{summary:s,item:s.data}):t("Loading")],2):e._e()])})),0)]],2):e._e()],2)},i=[],n=s(49692),o=s(21216),r=s(7768),l=s(10320);const d={name:"SearchableList",components:{Loading:o.c,SearchBox:()=>s.e(168).then(s.bind(s,10168))},props:{data:{type:[Array,Object],default:()=>[]},identifierKey:{type:String,default:"id"},summaryKey:{type:String,default:"summary"},keywordsKey:{type:String,default:null},showKeywords:{type:Boolean,default:!1},externalSearchTerm:{type:String,default:null},searchPlaceholder:{type:String,default:"Search"},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},showSummaryOnExpand:{type:Boolean,default:!0},heading:{type:String,default:null},collapsed:{type:Boolean,default:null},searchMinLength:{type:Number,default:2},loadAdditionalData:{type:Function,default:null},allowCopy:{type:Boolean,default:!1}},data(){return{searchTerm:"",showDetails:{},showList:!this.collapsed||null,summaries:[],canCopy:!1}},watch:{loadAdditionalData:{handler(){this.generateSummaries(this.summaries)}},data:{immediate:!0,handler(e,t){e!==t&&this.generateSummaries(e)}},externalSearchTerm:{immediate:!0,handler(e){this.searchTerm="string"===typeof e?e:""}},summaries:{immediate:!0,handler(){this.$emit("summaries",this.summaries)}},searchTerm:{immediate:!0,handler(e){e.length>=this.searchMinLength?this.summaries.forEach((e=>{this.$set(e,"show",n.c.search(this.searchTerm,[e.identifier,e.summary].concat(e.keywords)))})):this.summaries.forEach((e=>this.$set(e,"show",!0))),this.$emit("summaries",this.summaries)}},collapsed(e){!1===e?this.showList=!0:null!==this.showList&&(this.showList=!1)}},computed:{totalCount(){return n.c.size(this.data)},filteredCount(){return this.searchTerm.length>=this.searchMinLength?this.summaries.filter((e=>!0===e.show)).length:null}},mounted(){this.canCopy=navigator&&navigator.clipboard&&"function"===typeof navigator.clipboard.writeText},methods:{copyIdentifier(e,t){if(this.allowCopy&&this.canCopy){let s=e.composedPath()[0];navigator.clipboard.writeText(t.identifier).then((()=>this.toggleIcon(s,"✅"))).catch((()=>this.toggleIcon(s,"❌")))}},toggleIcon(e,t){if(e){let s=e.innerText;e.innerText=t,setTimeout((()=>e.innerText=s),2e3)}},generateSummaries(){let e="function"===typeof this.loadAdditionalData,t=[];for(let s in this.data){let a=this.data[s],i={identifier:s,summary:"",show:!0,loaded:!e,index:s,experimental:a.experimental,deprecated:a.deprecated,data:null};"string"===typeof this.identifierKey&&"string"===typeof a[this.identifierKey]&&(i.identifier=a[this.identifierKey]),"string"===typeof this.summaryKey&&"string"===typeof a[this.summaryKey]&&(i.summary=a[this.summaryKey]),"string"===typeof this.keywordsKey&&Array.isArray(a[this.keywordsKey])?i.keywords=a[this.keywordsKey]:i.keywords=[];let n=r.cp.observable(i);n.data=a,t.push(n)}this.sort&&t.sort(((e,t)=>n.c.compareStringCaseInsensitive(e.identifier,t.identifier))),this.summaries=t},toggleHeading(e=null){null!==this.collapsed&&(this.showList=null===e?!this.showList:e,this.$emit("headingToggled",this.showList),this.$parent&&this.$parent.$emit("headingToggled",this.showList))},async toggleDetails(e,t){if(!this.offerDetails)return;if("undefined"===typeof t&&(t=!this.showDetails[e]),"undefined"===typeof this.showDetails[e]&&!1===t)return;this.$set(this.showDetails,e,t);let s=this.summaries[e];if(t&&"function"===typeof this.loadAdditionalData&&!s.loaded)try{s.data=await this.loadAdditionalData(s.index,s.identifier,s.data),s.loaded=!0}catch(a){l.error(a)}this.$emit("detailsToggled",t,s.index,s.identifier,s.data)}}},h=d;var u=s(82528),c=(0,u.c)(h,a,i,!1,null,null,null);const m=c.exports},98737:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step choose-index"},[t("p",[e._v("Please select the spectral index you want to compute.")]),e.indices.length>0?t("SearchableList",{attrs:{heading:"",data:e.indices,offerDetails:!1,showKeywords:""},scopedSlots:e._u([{key:"summary",fn:function({item:s}){return[t("div",{class:{element:!0,selected:s.id==e.value.id}},[t("div",{staticClass:"summary",on:{click:function(t){return e.update(s)}}},[t("div",{staticClass:"title"},[t("strong",{attrs:{title:s.id}},[e._v(e._s(s.summary))]),t("ul",{staticClass:"badges small inline"},e._l(s.keywords,(function(a,i){return t("li",{key:a,class:{badge:!0,domain:i+1==s.keywords.length,[a]:i+1==s.keywords.length}},[e._v(e._s(a))])})),0)]),t("code",[e._v(e._s(s.formula))])]),t("button",{staticClass:"button",attrs:{type:"button",title:"Open website with additional details"},on:{click:function(t){return e.showDetails(s)}}},[t("i",{staticClass:"fas fa-info"})])])]}}],null,!1,970652951)}):e._e()],1)},i=[],n=(s(83248),s(53640)),o=s(36368);const r={g:"Gain factor (e.g. Used for EVI)",L:"Canopy background adjustment (e.g. Used for SAVI and EVI)",C1:"Coefficient 1 for the aerosol resistance term (e.g. Used for EVI)",C2:"Coefficient 2 for the aerosol resistance term (e.g. Used for EVI)",cexp:"Exponent used for OCVI",nexp:"Exponent used for GDVI",alpha:"Weighting coefficient used for WDRVI, BWDRVI and NDPI",beta:"Calibration parameter used for NDSIns",gamma:"Weighting coefficient used for ARVI",omega:"Weighting coefficient used for MBWI",sla:"Soil line slope",slb:"Soil line intercept",PAR:"Photosynthetically Active Radiation",k:"Slope parameter by soil used for NIRvH2",lambdaN:"NIR wavelength used for NIRvH2 and NDGI",lambdaR:"Red wavelength used for NIRvH2 and NDGI",lambdaG:"Green wavelength used for NDGI"},l={name:"ChooseSpectralIndices",mixins:[o.c],components:{SearchableList:n["default"]},props:{value:{type:Object,default:()=>({})},availableBands:{type:Object,required:!0}},data(){return{indices:[]}},async created(){const{domains:e,indices:t}=await s.e(816).then(s.t.bind(s,40816,19)),a=Object.keys(this.availableBands),i=Object.keys(r).join("|"),n=new RegExp(`(${i})`,"g");for(let s of t){const t=s[3],i=t.filter((e=>a.includes(e)));if(i.length!=t.length)continue;const o=s[4],r=Array.from(o.matchAll(n));if(r.length>0)continue;let l=s[5];l.length>0&&!l.includes("://")&&(l="https://doi.org/"+l),this.indices.push({id:s[0],summary:s[1],keywords:[...s[3],e[s[2]]],bands:t,formula:o,uri:l})}},methods:{showDetails(e){window.open(e.uri)},async update(e){this.$emit("input",e)}}},d=l;var h=s(82528),u=(0,h.c)(d,a,i,!1,null,null,null);const c=u.exports}}]);
//# sourceMappingURL=8737.f29c0bf4.js.map