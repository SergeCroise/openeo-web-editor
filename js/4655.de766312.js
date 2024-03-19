"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[4655],{31660:(e,t,a)=>{a.d(t,{A:()=>u});var i=a(66684),s=a.n(i);class r{constructor(e,t=!1){this.url=e,this.geojson=t}getParameters(e){return{url:this.url,params:{q:e.query,format:"json",limit:10,"accept-language":"en",polygon_geojson:this.geojson?1:0,polygon_threshold:.001}}}handleResponse(e){return 0===e.length?[]:e.filter((e=>["boundary","geological","leisure","natural","place","water","waterway"].includes(e.class))).map((e=>({lon:e.lon,lat:e.lat,bbox:e.boundingbox,address:{name:e.display_name},original:{formatted:e.display_name,details:e.address,geojson:e.geojson}})))}}const n={methods:{addGeocoder(e,t=!1){if(!this.$config.geocoder)return;const a={provider:new r(this.$config.geocoder,t),placeholder:"Search for ...",keepOpen:!0,preventDefault:!0},i=new(s())("nominatim",a);i.on("addresschosen",(a=>{if(t)e(a.place?.original?.geojson,a);else if(a.place.bbox){let t=a.place.bbox.map((e=>parseFloat(e))),i={west:t[2],east:t[3],north:t[1],south:t[0]};e(i,a)}else e(null,a)})),this.map.addControl(i)}}},l=n;var o,h,c=a(81656),d=(0,c.A)(l,o,h,!1,null,null,null);const u=d.exports},29129:(e,t,a)=>{a.d(t,{A:()=>c});var i=function(){var e=this,t=e._self._c;return e.texts.length>0?t("div",{staticClass:"ol-unselectable ol-control value",class:{pointer:e.texts.length>1},on:{click:e.toggle}},[e._v(" "+e._s(e.current)+" ")]):e._e()},s=[],r=a(51029);const n={name:"TextControl",mixins:[r.A],data(){return{i:0}},computed:{texts(){return Array.isArray(this.text)?this.text:"string"===typeof this.text&&this.text.length>0?[this.text]:[]},current(){return 0===this.texts.length?"":this.texts[this.i%this.text.length]}},props:{text:{text:[String,Array],default:""}},methods:{toggle(){this.i++}}},l=n;var o=a(81656),h=(0,o.A)(l,i,s,!1,null,"6d7a0f06",null);const c=h.exports},4655:(e,t,a)=>{a.r(t),a.d(t,{default:()=>te});var i=function(){var e=this,t=e._self._c;return t("Splitpanes",{staticClass:"default-theme",attrs:{horizontal:""}},[t("Pane",{attrs:{id:"map"}},[t("div",{staticClass:"map-viewer",attrs:{id:e.id}},[t("ProgressControl",{ref:"progress",attrs:{map:e.map}}),t("UserLocationControl",{attrs:{map:e.map}}),e.isGeoTiff?t("TextControl",{attrs:{text:e.textControlText}}):e._e(),e.isGeoTiff&&!e.colorMap?t("ChannelControl",{attrs:{bands:e.bands,defaultChannels:e.defaultChannels},on:{update:e.updateGeoTiffStyle}}):e._e(),e.loading?t("div",{staticClass:"map-loading"},[t("i",{staticClass:"fas fa-spinner fa-spin"}),t("span",[e._v("Loading map...")])]):e._e()],1)]),e.chart?t("Pane",{attrs:{id:"chart",size:33}},[t("ScatterChart",e._b({attrs:{height:220}},"ScatterChart",e.chart,!1))],1):e._e()],1)},s=[],r=(a(44114),a(16573),a(78100),a(77936),a(88022)),n=a(2566),l=a(76130),o=a(75024),h=a(44304),c=a(66451),d=a(31660),u=a(29129),p=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.channels.length>0,expression:"channels.length > 0"}],staticClass:"ol-unselectable ol-control channels"},[t("table",[t("thead",[t("tr",[e.isGray?e._e():t("th",[e._v("Channel")]),e.multiBand?t("th",[e._v("Band")]):e._e(),t("th",[e._v("Min")]),t("th",[e._v("Max")])])]),t("tbody",e._l(e.channels,(function(a,i){return t("tr",{key:i},[e.isGray?e._e():t("th",[e._v(e._s(e.labels[i]))]),e.multiBand?t("td",[t("select",{directives:[{name:"model",rawName:"v-model.number",value:a.id,expression:"channel.id",modifiers:{number:!0}}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(t){var a="_value"in t?t._value:t.value;return e._n(a)}));e.$set(a,"id",t.target.multiple?i:i[0])}}},e._l(e.bands,(function(a){return t("option",{key:a.id,domProps:{value:a.id}},[e._v(e._s(a.name||a.id))])})),0)]):e._e(),t("td",[t("input",{directives:[{name:"model",rawName:"v-model.number",value:a.min,expression:"channel.min",modifiers:{number:!0}}],attrs:{type:"number",required:""},domProps:{value:a.min},on:{input:function(t){t.target.composing||e.$set(a,"min",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),t("td",[t("input",{directives:[{name:"model",rawName:"v-model.number",value:a.max,expression:"channel.max",modifiers:{number:!0}}],attrs:{type:"number",required:""},domProps:{value:a.max},on:{input:function(t){t.target.composing||e.$set(a,"max",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])})),0),e.multiBand?t("tfoot",[t("tr",[t("td",{attrs:{colspan:e.cols}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isGray,expression:"isGray"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isGray)?e._i(e.isGray,null)>-1:e.isGray},on:{change:function(t){var a=e.isGray,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);i.checked?n<0&&(e.isGray=a.concat([r])):n>-1&&(e.isGray=a.slice(0,n).concat(a.slice(n+1)))}else e.isGray=s}}}),e._v(" Grayscale ")])])]):e._e()])])},m=[],f=a(51029);const g={name:"ChannelControl",mixins:[f.A],props:{bands:{type:Array,default:()=>[]},defaultChannels:{type:Array,default:()=>[]}},computed:{multiBand(){return this.bands.length>1},cols(){return this.isGray?this.multiBand?3:2:4},labels(){return this.isGray?["Grayscale"]:["Red","Green","Blue"]}},data(){return{channels:this.defaultChannels,isGray:1===this.defaultChannels.length||1===this.bands.length}},watch:{bands:{immediate:!0,handler(){1===this.bands.length&&(this.isGray=!0),this.updateChannels()}},isGray(){this.updateChannels(),this.emit()},channels:{deep:!0,handler(){this.emit()}}},methods:{isValid(e){return"number"===typeof e},updateChannels(){this.defaultChannels.length>0?(this.channels=this.defaultChannels,1===this.defaultChannels.length&&(this.isGray=!0)):this.channels=this.bands.slice(0,this.isGray?1:3).map((e=>Object.assign({},e))),2===this.channels.length&&this.channels.push(Object.assign({},this.channels[1]))},emit(){this.channels.filter((e=>this.isValid(e.min)&&this.isValid(e.max))).length>0&&this.$emit("update","channels",this.channels)}}},y=g;var b=a(81656),v=(0,b.A)(y,p,m,!1,null,null,null);const w=v.exports;var S=a(14979),x=a(19431);const A={components:{ChannelControl:w,TextControl:u.A},data(){return{textControlText:"Pixel Value: -",layer:null,source:null,colorMap:null,noData:[],defaultChannels:[],channels:[],bands:[]}},computed:{...n.A.mapState("editor",["appMode"])},methods:{getBandVar(e){return["band",["var",`${e}band`]]},getFormula(e){let t=["var",`${e}min`],a=["var",`${e}max`],i=this.getBandVar(e),s=["*",["/",["-",i,t],["-",a,t]],255];return["clamp",s,0,255]},getNoDataFormula(){let e=this.getBandVar("alpha");return["case",["==",e,0],0,1]},async addGeoTiff(e,t="GeoTiff"){this.bands=e.getBands(),this.appMode&&this.appMode.channels&&(this.defaultChannels=this.appMode.channels),this.colorMap=e.getColorMap(),this.noData=e.getNoData();let a={nodata:this.noData[0]};e.getBlob()?a.blob=e.getBlob():a.url=e.getUrl(),this.source=new x.A({interpolate:!1,normalize:!1,convertToRGB:e.convertToRGB,sources:[a]}),this.layer=new S.A({id:e.getUrl(),title:t,source:this.source,cacheSize:2048}),this.layer.set("events",{pointermove:e=>{let t=this.layer.getData(e.pixel),a=n.A.displayRGBA(t,this.noData,this.noData.length>0),i=`Pixel Value: ${a}`,s=this.formatCoords(e.coordinate);this.textControlText=[i,`${i} @ ${s}`]},click:e=>{let t=this.layer.getData(e.pixel);if(!t)return void(this.chart=null);if(t=Array.from(t).slice(0,this.bands.length),t.length<2||t.every((e=>!isFinite(e))))return void(this.chart=null);let a=this.formatCoords(e.coordinate),i=`Coordinate: ${a}`,s=[{label:i,data:t}];this.chart={labels:this.bands.map((e=>String(e.name||e.id))),datasets:s}}}),this.addLayerToMap(this.layer);let i=e.getExtent();return i&&this.map.getView().fit(i,this.getFitOptions(10)),await new Promise((e=>setTimeout(e,1250))),this.setStyle(),this.source},formatCoords(e){return e.map((e=>String(parseFloat(e.toFixed(6))))).join(", ")},updateGeoTiffStyle(e,t){switch(e){case"channels":this.channels=t,this.setOptions("channels",t);break}this.setStyle()},setStyle(){if(!this.layer)return;let e={};for(let a in this.channels){let t=this.channels[a];e[`${a}band`]=t.id,e[`${a}min`]=t.min,e[`${a}max`]=t.max}e.alphaband=this.bands.length+1;let t=[];if(this.colorMap)t.push("palette"),t.push(["band",1]),t.push(this.colorMap);else{if(0===this.channels.length)return null;if(1===this.channels.length){t.push("color");let e=this.getFormula(0);t.push(e),t.push(e),t.push(e),this.noData.length>0&&t.push(this.getNoDataFormula())}else t.push("color"),t.push(this.getFormula(0)),t.push(this.getFormula(1)),t.push(this.getFormula(2)),this.noData.length>0&&t.push(this.getNoDataFormula())}this.layer.setStyle({variables:e,color:t})}}},C=A;var _,D,T=(0,b.A)(C,_,D,!1,null,null,null);const G=T.exports;var P=a(74559),M=a(80494),B=(a(14603),a(47566),a(50071)),F=a(35598),L=a(30945),V=a(10702),$=a(29297),k=a(35316),j=a(53672),E=a(96763);const W={mixins:[c.A],data(){return{WMTSCapabilities:{},timeline:null}},methods:{async addWebService(e){switch(e.type.toLowerCase()){case"xyz":return this.updateXYZLayer(e);case"wmts":return await this.updateWMTSLayer(e);default:return n.A.error(this,"Sorry, this web service type is not supported."),null}},getWMTSTimes(e,t){const a=e.Contents.Layer||[];let i=a.find((e=>e.Identifier==t));if(!i||!i.Dimension)return[];let s=i.Dimension.find((e=>"TIME"===e.Identifier));return s?s.Value.sort():[]},async initWMTSLayer(e){if(!this.WMTSCapabilities[e.url])try{let a=new URL(e.url);a.searchParams.set("service","wmts"),a.searchParams.set("request","GetCapabilities");let i=await axios.get(a.toString(),{responseType:"text"});var t=new $.A;this.WMTSCapabilities[e.url]=t.read(i.data)}catch(error){n.A.exception(this,error,"WMTS Discovery failed")}return this.WMTSCapabilities[e.url]},async updateWMTSLayer(e,t="Service"){let a=e.attributes||{},i=await this.initWMTSLayer(e);i||n.A.exception(this,error,"WMTS Discovery failed");let s,r=null,l=null,o=null,h=null,c=n.A.getResourceTitle(e,t),d=new B.A;Array.isArray(a.layers)?s=a.layers:Array.isArray(i.Contents.Layer)&&(s=layers.map((e=>e.Identifier)));for(let m of s){if(!m)continue;let t=(0,k.t)(i,{layer:m,matrixSet:"EPSG:3857"});o||(o=new Date(t.dimensions.TIME));let s=this.getWMTSTimes(i,m);if(s.length){let e=new Date(s[0]),t=new Date(s[s.length-1]);(!r||e<r)&&(r=e),(!l||t>l)&&(l=t)}n.A.isObject(a.dimensions)&&Object.assign(t.dimensions,e.attributes.dimensions),h=new k.A(t);var u=new L.A({title:c,source:this.trackTileProgress(h),noSwitcherDelete:!0});d.push(u)}if(r&&l){let e;this.timeline=new j.A({className:"ol-pointer",graduation:"day",minDate:r,maxDate:l}),this.timeline.on("scroll",(function(t){!t.date||t.date>l||t.date<r||(e&&window.clearTimeout(e),e=window.setTimeout((()=>{try{let e=t.date.toISOString().substr(0,10);h.updateDimensions({TIME:e});let a=document.getElementsByClassName("timeline-date-label");a[0].innerText=e,a[0].disabled=!0}catch(error){E.log(error)}e=null}),500))})),this.map.addControl(this.timeline),this.timeline.addButton({className:"timeline-date-label",title:`The date that is shown on the map for the collection '${c}'`,html:"No date"}),this.timeline.setDate(o)}let p=new F.A({id:e.id,title:c,layers:d});return p.on("change:visible",(()=>{this.timeline&&this.timeline.element&&(this.timeline.element.style.display=p.getVisible()?"block":"none")})),this.addLayerToMap(p),this.timeline&&this.map.getLayers().on("remove",(e=>{e.element===p&&(this.map.removeControl(this.timeline),this.timeline=null)})),p},updateXYZLayer(e,t="Service"){let a=n.A.replaceParam(e.url,"__editorSessionId",(new Date).getTime()).replace(/%7B/g,"{").replace(/%7D/g,"}"),i=n.A.getResourceTitle(e,t),s=new L.A({title:i,source:this.trackTileProgress(new V.A({url:a})),noSwitcherDelete:!0}),r=new F.A({id:e.id,title:i,layers:[s]});if(this.addLayerToMap(r),n.A.isObject(e.process)&&n.A.isObject(e.process.process_graph)){const t="urn:ogc:def:crs:OGC:1.3:CRS84",a="EPSG:4326";Object.values(e.process.process_graph).filter((e=>"load_collection"===e.process_id&&n.A.isObject(e.arguments)&&e.arguments.spatial_extent)).forEach((e=>{let i=e.arguments.spatial_extent,s=(i.west||i.east||i.south||i.north)&&(!i.crs||4326===i.crs||i.crs===a),r=i.type&&(!i.crs||n.A.isObject(i.crs)&&"name"===i.crs.type&&(i.crs.properties?.name===a||i.properties?.name===t));(s||r)&&this.addExtent(i,!1)}))}return r}}},O=W;var N,I,R=(0,b.A)(O,N,I,!1,null,null,null);const U=R.exports;var z=a(73902),q=a(86717),J=a(34142),X=a(89718),Y=a(82986),Z=a(54602),H=a(96763);r.A.prototype.getSampleByteSize=function(e){if(this.fileDirectory.BitsPerSample&&0!==this.fileDirectory.BitsPerSample.length)return e>=this.fileDirectory.BitsPerSample.length&&(e=0),Math.ceil(this.fileDirectory.BitsPerSample[e]/8)},r.A.prototype.getReaderForSample=function(e){const t=this.getSampleFormat(e),a=this.getBitsPerSample(e);switch(t){case 1:if(a<=8)return DataView.prototype.getUint8;if(a<=16)return DataView.prototype.getUint16;if(a<=32)return DataView.prototype.getUint32;break;case 2:if(a<=8)return DataView.prototype.getInt8;if(a<=16)return DataView.prototype.getInt16;if(a<=32)return DataView.prototype.getInt32;break;case 3:switch(a){case 16:return function(e,t){return getFloat16(this,e,t)};case 32:return DataView.prototype.getFloat32;case 64:return DataView.prototype.getFloat64;default:break}break;default:break}throw Error("Unsupported data format/bitsPerSample")},r.A.prototype.getSampleFormat=function(e=0){return this.fileDirectory.SampleFormat&&0!==this.fileDirectory.SampleFormat.length?"undefined"!==typeof this.fileDirectory.SampleFormat[e]?this.fileDirectory.SampleFormat[e]:this.fileDirectory.SampleFormat[0]:1},r.A.prototype.getBitsPerSample=function(e=0){if(this.fileDirectory.BitsPerSample&&0!==this.fileDirectory.BitsPerSample.length)return"undefined"!==typeof this.fileDirectory.BitsPerSample[e]?this.fileDirectory.BitsPerSample[e]:this.fileDirectory.BitsPerSample[0]};const K={name:"MapViewer",mixins:[c.A,d.A,G,P.A,U],components:{Pane:h.Z,ScatterChart:M.A,Splitpanes:h.S},props:{data:{}},data(){return{loading:!0,chart:null}},computed:{...n.A.mapState(["connection"]),isWebService(){return this.data instanceof z.Service&&"string"===typeof this.data.type},isGeoTiff(){return this.data instanceof l.A},isGeoJson(){return this.data instanceof o.A&&this.data.isGeoJson}},mounted(){this.$emit("mounted",this)},methods:{async renderMap(){try{let e,t;if(this.isGeoJson)t=await this.data.loadData(this.connection);else if(this.isGeoTiff){t=await this.data.loadData(this.connection);let a=t.getProjection();a&&(e=a)}else{if(!this.isWebService||!n.A.isMapServiceSupported(this.data.type))throw new Error("Sorry, the given data can't be shown on a web map.");if("wmts"===this.data.type.toLowerCase()){await this.initWMTSLayer(this.data)}}if(await this.createMap(e),this.addLayerSwitcher(),this.addGeocoder((e=>{if(!e)return;let t=this.toExtent(e);t=(0,X.transformExtent)(t,"EPSG:4326",this.map.getView().getProjection()),this.map.getView().fit(t,this.getFitOptions())})),this.isGeoJson)this.addBasemaps(),this.addGeoJson(t,!0);else if(this.isGeoTiff){let e=this.map.getView().getProjection();(e.basemap||["EPSG:3857","EPSG:4326"].includes(e.getCode()))&&this.addBasemaps(),this.addGeoTiff(t);let a=this.data.getContext();a&&this.addExtent(a,!1)}else this.isWebService&&n.A.isMapServiceSupported(this.data.type)&&(this.addBasemaps(),this.addWebService(this.data));this.$listeners&&this.$listeners.drop&&(this.map.getViewport().addEventListener("dragover",(e=>e.preventDefault())),this.map.getViewport().addEventListener("drop",this.$listeners.drop))}catch(error){n.A.exception(this,error)}this.loading=!1},async addCollection(){let e=this.showWebService(this.data);try{let t=service.attributes.bbox,a=[...this.fromLonLat([t.west,t.south]),...this.fromLonLat([t.east,t.north])],i=new Y["default"]({title:"Extent",noSwitcherDelete:!0,source:new Z["default"]({features:[new q["default"]((0,J.VY)(a))],projection:"EPSG:4326",wrapX:!1})});this.removeLayerFill(i),e.getLayers().push(i),this.map.getView().fit(a,this.getFitOptions(10))}catch(error){H.log(error)}}}},Q=K;var ee=(0,b.A)(Q,i,s,!1,null,null,null);const te=ee.exports}}]);
//# sourceMappingURL=4655.de766312.js.map