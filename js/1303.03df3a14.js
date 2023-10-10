"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[1303,7133],{27133:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"select-container"},[e.loaded?[t("MultiSelect",{key:e.type,ref:"htmlElement",attrs:{label:"label","track-by":"id",multiple:e.multiple,options:e.selectOptions,allowEmpty:!1,preselectFirst:e.preselect,disabled:!e.editable,deselectLabel:e.deselectLabel,taggable:e.taggable,tagPlaceholder:e.tagPlaceholder},on:{tag:e.addValue},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e.showDetails?t("button",{attrs:{type:"button",title:"Details"},on:{click:function(t){return e.$emit("onDetails")}}},[t("i",{staticClass:"fas fa-info"})]):e._e()]:t("div",{staticClass:"loading"},[t("i",{staticClass:"fas fa-spinner fa-spin"}),e._v(" Loading options...")])],2)},i=[],l=(s(57658),s(47907)),r=s.n(l),o=s(79879);const n={name:"SelectBox",components:{MultiSelect:r()},props:{value:{},type:{type:String,default:""},editable:{type:Boolean,default:!0},options:{type:[Array,Object]},schema:{type:Object},context:{},optionFilter:{type:Function,default:null}},computed:{selectOptions(){let e=[];switch(this.type){case"band-name":let t=this.$store.state.collections.find((e=>e.id==this.context));if(o.Z.isObject(t)){try{e=t.summaries["eo:bands"].map((e=>e.name))}catch(i){}if(0===e.length&&o.Z.isObject(t["cube:dimensions"]))try{let s=Object.values(t["cube:dimensions"]).find((e=>"bands"===e.type));s&&Array.isArray(s.values)&&(e=s.values)}catch(i){}}break;case"collection-id":e=this.$store.state.collections;break;case"job-id":e=this.$store.state.jobs.jobs;break;case"file-path":case"file-paths":e=this.$store.state.files.files;break;case"epsg-code":e=this.$store.state.editor.epsgCodes;break;case"input-format":e=this.$store.state.fileFormats.getInputTypes();break;case"openeo-datatype":let a=s(9510),l={};for(let e of a.NATIVE_TYPES)l[e]={type:e};e=Object.assign(l,a.API_TYPES);break;case"output-format":e=this.$store.state.fileFormats.getOutputTypes();break;case"service-type":e=this.$store.state.serviceTypes;break;case"billing-plan":e=this.$store.state.connection.capabilities().listPlans();break;case"udf-runtime":e=Object.keys(this.$store.state.udfRuntimes);break;case"udf-runtime-version":e=this.context in this.$store.state.udfRuntimes?Object.keys(this.$store.state.udfRuntimes[this.context].versions):[];break}"function"===typeof this.optionFilter&&e&&"object"===typeof e&&(e=o.Z.isObject(e)?Object.fromEntries(Object.entries(e).filter((([e,t])=>this.optionFilter(t,e)))):e.filter(((e,t)=>this.optionFilter(e,t))));let t=[];switch(this.type){case"collection-id":return e.map((e=>this.e(e.id))).sort(this.sortByLabel);case"job-id":return e.map((e=>({id:e.id,label:o.Z.getResourceTitle(e)}))).sort(this.sortByLabel);case"openeo-datatype":for(let a in e){let s=e[a];t.push({id:a,label:s.title||o.Z.prettifyString(a),value:s})}return t;case"file-path":case"file-paths":return e.map((e=>this.e(e.path))).sort(((e,t)=>o.Z.sortByPath(e.id,t.id)));case"epsg-code":for(let a in e)t.push({id:Number.parseInt(a,10),label:a+": "+e[a]});return t;case"input-format":case"output-format":case"service-type":for(let a in e){let s=a.toUpperCase(),i=e[a].title;i?s!==i.toUpperCase()&&(i=`${i} - ${s}`):i=s,t.push({id:s,label:i})}return t.sort(this.sortByLabel);case"billing-plan":return e.map((e=>({id:e.name,label:e.name+(e.paid?" (paid)":" (free)")})));case"year":let s=(new Date).getFullYear(),i=Array.from({length:100},((e,t)=>this.e(String(s-t))));if("string"===typeof this.value&&this.value.length>0&&-1===i.findIndex((e=>e.id===this.value))){var a=this.e(this.value);this.value>s?i.unshift(a):i.push(this.e(this.value))}return i;case"band-name":case"udf-runtime":case"udf-runtime-version":return e.map((e=>this.e(e)));default:return o.Z.isObject(this.schema)&&this.schema.isEnum()?this.schema.getEnumChoices().map((e=>this.e(e))):Array.isArray(this.options)?this.options.map((e=>o.Z.isObject(e)?e:this.e(e))):[]}},showDetails(){return"collection-id"===this.type},deselectLabel(){return this.multiple?"Press enter to remove":""},tagPlaceholder(){return"year"===this.type?"Press enter to select":"Press enter to create a tag"},multiple(){return"file-paths"===this.type},taggable(){return"year"===this.type},preselect(){return this.multiple?!Array.isArray(this.selected)||0===this.selected.length:null===this.selected}},data(){return{selected:null,loaded:!1}},created(){this.loadData()},watch:{type(){this.loadData()},selected(e){let t;if(null===e)t=null;else if(this.multiple)Array.isArray(e)||(e=[e]),t=e.map((e=>e.id));else switch(this.type){case"epsg-code":var s=Number.parseInt(e.id);t=Number.isNaN(s)?null:s;break;case"openeo-datatype":t=e.value;break;case"year":t=String(e.id);break;default:t=e.id}this.$emit("input",t)},context(){switch(this.type){case"udf-runtime":case"udf-runtime-version":this.selected=null,this.preselectFirst();break;case"band-name":this.selected=null,this.loadData();break}}},methods:{...o.Z.mapActions(["describeCollection"]),...o.Z.mapActions("editor",["loadEpsgCodes"]),e(e){return{id:e,label:e}},async loadData(){this.loaded=!1,"epsg-code"===this.type?await this.loadEpsgCodes():"band-name"===this.type&&await this.describeCollection(this.context),this.initSelection(),this.loaded=!0},async preselectFirst(){await this.$nextTick();let e=this.$refs.htmlElement;e.preselectFirst&&Array.isArray(e.filteredOptions)&&e.filteredOptions.length&&e.select(e.filteredOptions[0])},initSelection(){let e=this.value;if(this.multiple&&Array.isArray(e))this.selected=this.selectOptions.filter((t=>e.includes(t.id)));else{switch(this.type){case"input-format":case"output-format":case"service-type":"string"===typeof e&&(e=e.toUpperCase());break}let t=this.selectOptions.find((t=>t.id===e));void 0!==t&&(this.selected=t)}},sortByLabel(e,t){return o.Z.compareStringCaseInsensitive(e.label,t.label)},addValue(e){this.selected=this.e(e)}}},c=n;var p=s(1001),u=(0,p.Z)(c,a,i,!1,null,null,null);const d=u.exports},71303:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step choose-format"},[t("p",[e._v("Please select the file format you want to download data in.")]),t("SelectBox",{attrs:{type:"output-format",value:e.value,optionFilter:e.filterFormats},on:{input:e.setFormat}}),null!==e.scale?t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.scaleBox,expression:"scaleBox"}],attrs:{type:"checkbox",id:"scale"},domProps:{checked:Array.isArray(e.scaleBox)?e._i(e.scaleBox,null)>-1:e.scaleBox},on:{change:function(t){var s=e.scaleBox,a=t.target,i=!!a.checked;if(Array.isArray(s)){var l=null,r=e._i(s,l);a.checked?r<0&&(e.scaleBox=s.concat([l])):r>-1&&(e.scaleBox=s.slice(0,r).concat(s.slice(r+1)))}else e.scaleBox=i}}}),e._v("  "),t("label",{attrs:{for:"scale"}},[e._v("Scale the values from [-1, 1] to [0, 255] (often required for PNG, GIF or JPEG).")])]):e._e()],1)},i=[],l=s(27133);const r={name:"ChooseFormat",components:{SelectBox:l["default"]},props:{value:{type:String,default:null},scale:{type:Boolean,default:null},gisDataType:{type:String,default:null}},computed:{scaleBox:{get(){return this.scale},set(e){this.$emit("update:scale",e)}},filterFormats(){return this.gisDataType?e=>!Array.isArray(e.gis_data_types)||0===e.gis_data_types.length||e.gis_data_types.includes(this.gisDataType):null}},methods:{setFormat(e){this.scaleBox=["bmp","gif","jpeg","jpg","png","webp"].includes(e.toLowerCase()),this.$emit("input",e)}}},o=r;var n=s(1001),c=(0,n.Z)(o,a,i,!1,null,null,null);const p=c.exports},9510:(e,t,s)=>{s.r(t),s.d(t,{API_TYPES:()=>i,NATIVE_TYPES:()=>l});var a=s(79879);const i=a.Z.resolveJsonRefs(s(66027)).definitions,l=["string","integer","number","boolean","array","object"]}}]);
//# sourceMappingURL=1303.03df3a14.js.map