"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[9201,4152],{84542:(e,t,i)=>{i.d(t,{A:()=>a});const a={data(){return{canCopy:!1}},mounted(){this.canCopy=navigator&&navigator.clipboard&&"function"===typeof navigator.clipboard.writeText},methods:{copyText(e,t=null,i=null){if(this.canCopy){const a=navigator.clipboard.writeText(e);t&&a.then(t),i&&a.catch(i)}},toggleIcon(e,t){if(e){let i=e.innerText;e.innerText=t,setTimeout((()=>e.innerText=i),2e3)}}}}},34152:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component searchable-list",class:{expandable:null!==e.collapsed,expanded:e.showList,noResults:0===e.filteredCount}},[e._t("heading",(function(){return[e.heading?t("h2",{staticClass:"heading",on:{click:function(t){return e.toggleHeading(null)}}},[e._v(" "+e._s(e.heading)+" "),null!==e.filteredCount&&e.filteredCount!==e.totalCount?[e._v("("+e._s(e.filteredCount)+"/"+e._s(e.totalCount)+")")]:[e._v("("+e._s(e.totalCount)+")")]],2):e._e()]}),{filteredCount:e.filteredCount,totalCount:e.totalCount}),null!==e.showList?t("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.showList,expression:"showList === true"}],staticClass:"body"},[e._t("content-start"),0===e.totalCount?[t("p",[e._v("No data available.")])]:[t("section",{staticClass:"action-bar"},[null===e.externalSearchTerm?t("SearchBox",{attrs:{placeholder:e.searchPlaceholder,minLength:e.searchMinLength},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}):e._e(),e.deprecatedFilter?t("label",{staticClass:"deprecated",attrs:{title:"Show deprecated elements?"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.hideDeprecated,expression:"hideDeprecated"}],attrs:{type:"checkbox","true-value":!1,"false-value":!0},domProps:{checked:Array.isArray(e.hideDeprecated)?e._i(e.hideDeprecated,null)>-1:e._q(e.hideDeprecated,!1)},on:{change:function(t){var i=e.hideDeprecated,a=t.target,s=!a.checked;if(Array.isArray(i)){var r=null,n=e._i(i,r);a.checked?n<0&&(e.hideDeprecated=i.concat([r])):n>-1&&(e.hideDeprecated=i.slice(0,n).concat(i.slice(n+1)))}else e.hideDeprecated=s}}}),e._v(" Show deprecated ")]):e._e(),e.experimentalFilter?t("label",{staticClass:"experimental",attrs:{title:"Show experimental elements?"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.hideExperimental,expression:"hideExperimental"}],attrs:{type:"checkbox","true-value":!1,"false-value":!0},domProps:{checked:Array.isArray(e.hideExperimental)?e._i(e.hideExperimental,null)>-1:e._q(e.hideExperimental,!1)},on:{change:function(t){var i=e.hideExperimental,a=t.target,s=!a.checked;if(Array.isArray(i)){var r=null,n=e._i(i,r);a.checked?n<0&&(e.hideExperimental=i.concat([r])):n>-1&&(e.hideExperimental=i.slice(0,n).concat(i.slice(n+1)))}else e.hideExperimental=s}}}),e._v(" Show experimental ")]):e._e()],1),e._t("after-search-box",null,{filteredCount:e.filteredCount,summaries:e.summaries}),0===e.filteredCount?t("p",[e._v("No search results found.")]):t("ul",{staticClass:"list",class:{expandable:e.offerDetails}},e._l(e.summaries,(function(i,a){return t("li",{directives:[{name:"show",rawName:"v-show",value:i.show,expression:"summary.show"}],key:i.identifier,class:{expanded:e.showDetails[a]}},[t("summary",{staticClass:"summary",class:{experimental:i.experimental,deprecated:i.deprecated},on:{click:function(t){return e.toggleDetails(a)}}},[e._t("summary",(function(){return[t("strong",[e._v(" "+e._s(i.identifier)+" "),e.allowCopy&&e.canCopy?t("span",{staticClass:"copy",attrs:{title:"Copy identifier"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.copyIdentifier(t,i)}}},[e._v("📋")]):e._e()]),i.summary?t("small",{class:{hideOnExpand:!e.showSummaryOnExpand}},[e._v(e._s(i.summary))]):e._e(),e.showKeywords&&i.keywords.length>0?t("ul",{staticClass:"badges small block hideOnExpand"},e._l(i.keywords,(function(i){return t("li",{key:i,staticClass:"badge"},[e._v(e._s(i))])})),0):e._e()]}),{summary:i,item:i.data})],2),"boolean"===typeof e.showDetails[a]?t("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.showDetails[a],expression:"showDetails[i] === true"}],staticClass:"details"},[i.loaded?e._t("details",(function(){return[e._v(" No details available! ")]}),{summary:i,item:i.data}):t("Loading")],2):e._e()])})),0)]],2):e._e()],2)},s=[],r=i(86975),n=i(12018),l=i(84542),o=i(85471),d=i(96763);const h={name:"SearchableList",components:{Loading:n.A,SearchBox:()=>i.e(9409).then(i.bind(i,9409))},mixins:[l.A],props:{data:{type:[Array,Object],default:()=>[]},identifierKey:{type:String,default:"id"},summaryKey:{type:String,default:"summary"},keywordsKey:{type:String,default:null},showKeywords:{type:Boolean,default:!1},externalSearchTerm:{type:String,default:null},searchPlaceholder:{type:String,default:"Search"},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},showSummaryOnExpand:{type:Boolean,default:!0},heading:{type:String,default:null},collapsed:{type:Boolean,default:null},searchMinLength:{type:Number,default:2},loadAdditionalData:{type:Function,default:null},allowCopy:{type:Boolean,default:!1},externalHideDeprecated:{type:Boolean,default:!1},deprecatedFilter:{type:Boolean,default:!1},externalHideExperimental:{type:Boolean,default:!1},experimentalFilter:{type:Boolean,default:!1}},data(){return{searchTerm:"",showDetails:{},showList:!this.collapsed||null,hideDeprecated:this.externalHideDeprecated,hideExperimental:this.externalHideExperimental,summaries:[]}},watch:{loadAdditionalData:{handler(){this.generateSummaries(this.summaries)}},data:{immediate:!0,handler(e,t){e!==t&&this.generateSummaries(e)}},externalSearchTerm:{immediate:!0,handler(e){this.searchTerm="string"===typeof e?e:""}},externalHideDeprecated:{immediate:!0,handler(e){this.hideDeprecated=e}},externalHideExperimental:{immediate:!0,handler(e){this.hideExperimental=e}},summaries:{immediate:!0,handler(){this.$emit("summaries",this.summaries)}},searchTerm(){this.filter()},hideDeprecated(){null!==this.hideDeprecatedByDefault&&this.filter()},hideExperimental(){null!==this.hideExperimentalByDefault&&this.filter()},collapsed(e){!1===e?this.showList=!0:null!==this.showList&&(this.showList=!1)}},computed:{totalCount(){return r.A.size(this.data)},filteredCount(){return this.hasActiveFilter()?this.summaries.filter((e=>!0===e.show)).length:null}},created(){this.filter()},methods:{hasActiveFilter(){return this.searchTerm.length>=this.searchMinLength||null!==this.hideDeprecatedByDefault&&this.hideDeprecated||null!==this.hideExperimentalByDefault&&this.hideExperimental},filter(){const e=this.searchTerm.length>=this.searchMinLength;this.summaries.forEach((t=>{let i=!0;null!==this.hideDeprecatedByDefault&&this.hideDeprecated&&t.deprecated||null!==this.hideExperimentalByDefault&&this.hideExperimental&&t.experimental?i=!1:e&&(i=r.A.search(this.searchTerm,[t.identifier,t.summary].concat(t.keywords))),this.$set(t,"show",i)})),this.$emit("summaries",this.summaries)},copyIdentifier(e,t){if(this.allowCopy){const i=e.composedPath()[0];this.copyText(t.identifier,(()=>this.toggleIcon(i,"✅")),(()=>this.toggleIcon(i,"❌")))}},generateSummaries(){let e="function"===typeof this.loadAdditionalData,t=[];for(let i in this.data){let a=this.data[i],s={identifier:i,summary:"",show:!0,loaded:!e,index:i,experimental:a.experimental,deprecated:a.deprecated,data:null};"string"===typeof this.identifierKey&&"string"===typeof a[this.identifierKey]&&(s.identifier=a[this.identifierKey]),"string"===typeof this.summaryKey&&"string"===typeof a[this.summaryKey]&&(s.summary=a[this.summaryKey]),"string"===typeof this.keywordsKey&&Array.isArray(a[this.keywordsKey])?s.keywords=a[this.keywordsKey]:s.keywords=[];let r=o.Ay.observable(s);r.data=a,t.push(r)}this.sort&&t.sort(((e,t)=>r.A.compareStringCaseInsensitive(e.identifier,t.identifier))),this.summaries=t},toggleHeading(e=null){null!==this.collapsed&&(this.showList=null===e?!this.showList:e,this.$emit("headingToggled",this.showList),this.$parent&&this.$parent.$emit("headingToggled",this.showList))},async toggleDetails(e,t){if(!this.offerDetails)return;if("undefined"===typeof t&&(t=!this.showDetails[e]),"undefined"===typeof this.showDetails[e]&&!1===t)return;this.$set(this.showDetails,e,t);let i=this.summaries[e];if(t&&"function"===typeof this.loadAdditionalData&&!i.loaded)try{i.data=await this.loadAdditionalData(i.index,i.identifier,i.data),i.loaded=!0}catch(a){d.error(a)}this.$emit("detailsToggled",t,i.index,i.identifier,i.data)}}},c=h;var u=i(81656),m=(0,u.A)(c,a,s,!1,null,null,null);const p=m.exports},39201:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step choose-index"},[t("p",[e._v("Please select the spectral index you want to compute.")]),e.indices.length>0?t("SearchableList",{attrs:{heading:"",data:e.indices,offerDetails:!1,showKeywords:""},scopedSlots:e._u([{key:"summary",fn:function({item:i}){return[t("div",{class:{element:!0,selected:i.id==e.value.id}},[t("div",{staticClass:"summary",on:{click:function(t){return e.update(i)}}},[t("div",{staticClass:"title"},[t("strong",{attrs:{title:i.id}},[e._v(e._s(i.summary))]),t("ul",{staticClass:"badges small inline"},e._l(i.keywords,(function(a,s){return t("li",{key:a,class:{badge:!0,domain:s+1==i.keywords.length,[a]:s+1==i.keywords.length}},[e._v(e._s(a))])})),0)]),t("code",[e._v(e._s(i.formula))])]),t("button",{staticClass:"button",attrs:{type:"button",title:"Open website with additional details"},on:{click:function(t){return e.showDetails(i)}}},[t("i",{staticClass:"fas fa-info"})])])]}}],null,!1,970652951)}):e._e()],1)},s=[],r=i(34152),n=i(61663);const l={g:"Gain factor (e.g. Used for EVI)",L:"Canopy background adjustment (e.g. Used for SAVI and EVI)",C1:"Coefficient 1 for the aerosol resistance term (e.g. Used for EVI)",C2:"Coefficient 2 for the aerosol resistance term (e.g. Used for EVI)",cexp:"Exponent used for OCVI",nexp:"Exponent used for GDVI",alpha:"Weighting coefficient used for WDRVI, BWDRVI and NDPI",beta:"Calibration parameter used for NDSIns",gamma:"Weighting coefficient used for ARVI",omega:"Weighting coefficient used for MBWI",sla:"Soil line slope",slb:"Soil line intercept",PAR:"Photosynthetically Active Radiation",k:"Slope parameter by soil used for NIRvH2",lambdaN:"NIR wavelength used for NIRvH2 and NDGI",lambdaR:"Red wavelength used for NIRvH2 and NDGI",lambdaG:"Green wavelength used for NDGI"},o={name:"ChooseSpectralIndices",mixins:[n.A],components:{SearchableList:r["default"]},props:{value:{type:Object,default:()=>({})},availableBands:{type:Object,required:!0}},data(){return{indices:[]}},async created(){const{domains:e,indices:t}=await i.e(9546).then(i.t.bind(i,49546,19)),a=Object.keys(this.availableBands),s=Object.keys(l).join("|"),r=new RegExp(`(${s})`,"g");for(let i of t){const t=i[3],s=t.filter((e=>a.includes(e)));if(s.length!=t.length)continue;const n=i[4],l=Array.from(n.matchAll(r));if(l.length>0)continue;let o=i[5];o.length>0&&!o.includes("://")&&(o="https://doi.org/"+o),this.indices.push({id:i[0],summary:i[1],keywords:[...i[3],e[i[2]]],bands:t,formula:n,uri:o})}},methods:{showDetails(e){window.open(e.uri)},async update(e){this.$emit("input",e)}}},d=o;var h=i(81656),c=(0,h.A)(d,a,s,!1,null,null,null);const u=c.exports}}]);
//# sourceMappingURL=9201.6192cc83.js.map