(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-479daea2"],{"0265":function(e,t,a){},1416:function(e,t,a){},"1e9c":function(e,t,a){"use strict";a("0265")},2773:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chart"},[e.error?[e._v(e._s(e.error))]:a("Scatter",{attrs:{"chart-data":e.chartData,"chart-options":e.chartOptions,height:e.height}})],2)},s=[],r=a("7b97"),n=a("9b4a"),o=(a("cadc"),a("1315"));n["d"].register(n["p"],n["q"],n["f"],n["h"],n["i"],n["c"],n["o"],n["k"]);const l=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"];var h={name:"ScatterChart",components:{Scatter:r["a"]},props:{labels:{type:Array,default:()=>[]},datasets:{type:Array,default:()=>[]},options:{type:Object,default:()=>({responsive:!0,maintainAspectRatio:!1})},error:{type:String,default:""},height:{type:Number,default:350}},computed:{chartData(){let e=0,t=this.datasets.map((t,a)=>{let i={};if("undefined"===typeof t.backgroundColor&&"undefined"===typeof t.borderColor){let t=l[e++%l.length];i.backgroundColor=t,i.color=t}return"undefined"===typeof t.borderWidth&&(i.borderWidth=1),"undefined"===typeof t.label&&(i.label=a+1),Object.assign(i,t)});return{labels:this.labels,datasets:t}},chartOptions(){let e=Object.assign({},this.options);return void 0===this.labels.find(e=>!o["DateTime"].fromISO(e).isValid)&&(e.scales={x:{type:"timeseries",adapters:{date:{zone:"UTC"}}}}),this.labels.every(e=>"string"===typeof e)&&(e.scales={x:{type:"category"}}),e}}},d=h,c=(a("b406"),a("2877")),u=Object(c["a"])(d,i,s,!1,null,null,null);t["a"]=u.exports},"2d6d":function(e,t,a){"use strict";a("4ed6")},"2e68":function(e,t,a){"use strict";a("ffc9")},"330e":function(e,t,a){"use strict";var i,s,r=a("025e"),n=a("3115"),o=a("0af5"),l=a("06f8"),h=a("a2e1"),d=a("2ce2"),c=a("3e6b"),u=a("5831"),p={mixins:[n["a"]],methods:{addGeoJson(e,t=!1,a="GeoJSON",i=!0){let s;s=e instanceof u["a"]?e:this.createGeoJsonSource(e,this.map.getView().getProjection());let r=new c["a"]({title:a,source:s});!i&&this.removeLayerFill&&this.removeLayerFill(r),this.map.addLayer(r);let n=s.getExtent();if(Object(o["G"])(n)||this.map.getView().fit(n,this.getFitOptions()),t){var h=new d["a"]({hitTolerance:5,multi:!1,condition:l["m"],layers:[r]});h.on("select",this.onSelect),this.map.addInteraction(h)}return r},onSelect(e){if(e.selected.length>0){let t=e.selected[0],a=r["a"].omitFromObject(t.getProperties(),["geometry"]),i=t.getId()||"Feature Properties";this.emit("showDataModal",a,i)}},createGeoJsonSource(e,t){let a=[];return r["a"].detectGeoJson(e)&&(a=(new h["a"]).readFeatures(e,{featureProjection:t})),new u["a"]({features:a,wrapX:!1})}}},m=p,f=a("2877"),g=Object(f["a"])(m,i,s,!1,null,null,null);t["a"]=g.exports},"45ee":function(e,t,a){},4749:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.texts.length>0?a("div",{staticClass:"ol-unselectable ol-control value",class:{pointer:e.texts.length>1},on:{click:e.toggle}},[e._v(" "+e._s(e.current)+" ")]):e._e()},s=[],r=a("96a2"),n={name:"TextControl",mixins:[r["a"]],data(){return{i:0}},computed:{texts(){return Array.isArray(this.text)?this.text:"string"===typeof this.text&&this.text.length>0?[this.text]:[]},current(){return 0===this.texts.length?"":this.texts[this.i%this.text.length]}},props:{text:{text:[String,Array],default:""}},methods:{toggle(){this.i++}}},o=n,l=(a("2d6d"),a("2877")),h=Object(l["a"])(o,i,s,!1,null,"fe2bcd86",null);t["a"]=h.exports},"4bc5":function(e,t,a){"use strict";var i=a("3115"),s=a("025e"),r=(a("5bc0"),a("c320")),n=a("9d47"),o=a("21bc"),l=a("5eee"),h=a("a2c7"),d=a("256f"),c=a("f5dd"),u=a("601e"),p=a("480c"),m=a("2ef1"),f=(a("1399"),a("0417")),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"ol-unselectable ol-progress-control"},[a("div",{staticClass:"progress-bar"},[a("div",{staticClass:"progress-bar-inner",style:{width:e.percent}})]),a("div",{staticClass:"progress-label"},[e._v(e._s(e.label))])])},y=[],b=a("96a2"),w={name:"ProgressControl",mixins:[b["a"]],data(){return{loading:0,loaded:0}},computed:{show(){return this.loading>0&&this.loaded<=this.loading},percent(){return(this.loaded/this.loading*100).toFixed(1)+"%"},label(){return"Loading Tiles ("+this.percent+")"}},methods:{addLoading(){this.loading++,this.update()},addLoaded(){this.loaded++,this.update()},update(){this.loading===this.loaded&&(this.loading=0,this.loaded=0),this.loading===this.loaded&&(this.loading=0,this.loaded=0)}}},v=w,S=(a("2e68"),a("2877")),x=Object(S["a"])(v,g,y,!1,null,"1da4d958",null),C=x.exports;let D=1;var L,T,G={components:{ProgressControl:C},mixins:[i["a"]],props:{show:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},removableLayers:{type:Boolean,default:!1}},data(){return{map:null,id:"map_"+D++}},watch:{async show(){await this.showMap()}},computed:{...s["a"].mapState(["userLocation","locationZoom"])},async mounted(){await this.showMap()},methods:{async showMap(){this.show&&(await this.$nextTick(),await this.renderMap())},async createMap(e="EPSG:3857"){let t,a={showFullExtent:!0};if("string"===typeof e?a.projection=await u["a"].get(e):e instanceof c["a"]?a.projection=e:e instanceof h["a"]?t=e:s["a"].isObject(e)&&(a=e),t||(t=new h["a"](a),t.getCenter()||t.setCenter(Object(d["j"])([this.userLocation[1],this.userLocation[0]],t.getProjection())),t.getZoom()||t.setZoom(this.locationZoom)),null!==this.map)return this.map.updateSize(),void this.map.render();var i=[new r["a"],new n["a"]],p={target:this.id,view:t};this.editable?p.controls=Object(o["a"])().extend(i):(p.interactions=[],p.controls=i),this.map=new l["a"](p),this.listen("windowResized",this.updateMapSize);let m=this.map.getLayers();m.on("add",e=>{let t=e.element,a=t.get("events");for(let i in a)this.map.on(i,a[i])}),m.on("remove",e=>{let t=e.element,a=t.get("events");for(let i in a)this.map.un(i,a[i])})},addLayerSwitcher(){this.map.addControl(new f["a"]({trash:this.removableLayers}))},addBasemaps(){let e={opaque:!0,attributionsCollapsible:!1,wrapX:!1},t=[];if(Array.isArray(this.$config.basemaps)){let a=!1;for(let i of this.$config.basemaps){let s=new m["a"](Object.assign({},e,i)),r=new p["a"]({source:this.trackTileProgress(s),baseLayer:!0,title:i.title,noSwitcherDelete:!0,visible:!a});t.push(r),this.map.addLayer(r),a=!0}}return t},onShow(){this.listen("windowResized",this.updateMapSize)},onHide(){this.unlisten("windowResized")},async renderMap(){await this.createMap(),this.addBasemaps()},async updateMapSize(){this.map&&(await this.$nextTick(),this.map.updateSize())},addLayerToMap(e){e.set("userLayer",!0),this.map.addLayer(e)},removeLayerFromMap(e){let t=this.getLayerFromMap(e);t&&this.map.removeLayer(t)},getLayerFromMap(e){let t=this.map.getLayers().getArray();for(let a of t)if(a.get("id")===e)return a;return null},getVisibleLayers(){let e=[],t=this.map.getLayers().getArray();for(let a of t)a.get("userLayer")&&a.getVisible()&&e.push(a);return e},getFitOptions(e=25){let t={};var a=this.map.getSize();return t.padding=a&&e>0?[a[0]*e/100,a[1]*e/100,a[0]*e/100,a[1]*e/100]:[30,30,30,30],t},trackTileProgress(e){return this.$refs.progress&&(e.on("tileloadstart",()=>{this.$refs.progress.addLoading()}),e.on("tileloadend",()=>{this.$refs.progress.addLoaded()}),e.on("tileloaderror",()=>{this.$refs.progress.addLoaded()})),e},fromLonLat(e){return Object(d["j"])(e,this.map.getView().getProjection())}}},_=G,M=Object(S["a"])(_,L,T,!1,null,null,null);t["a"]=M.exports},"4ed6":function(e,t,a){},"5ee8":function(e,t,a){},6253:function(e,t,a){"use strict";a("5ee8")},"63a9":function(e,t,a){"use strict";a("1416")},9115:function(e,t,a){"use strict";a.r(t);var i,s,r,n,o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Splitpanes",{staticClass:"default-theme",attrs:{horizontal:""}},[a("Pane",{attrs:{id:"map"}},[a("div",{staticClass:"map-viewer",attrs:{id:e.id}},[a("ProgressControl",{ref:"progress",attrs:{map:e.map}}),e.isGeoTiff?a("TextControl",{attrs:{text:e.textControlText}}):e._e(),e.isGeoTiff&&!e.colorMap?a("ChannelControl",{attrs:{bands:e.bands},on:{update:e.updateGeoTiffStyle}}):e._e(),e.loading?a("div",{staticClass:"map-loading"},[a("i",{staticClass:"fas fa-spinner fa-spin"}),a("span",[e._v("Loading map...")])]):e._e()],1)]),e.chart?a("Pane",{attrs:{id:"chart",size:33}},[a("ScatterChart",e._b({attrs:{height:220}},"ScatterChart",e.chart,!1))],1):e._e()],1)},l=[],h=a("458b"),d=a("025e"),c=a("57f6"),u=a("e979"),p=a("9def"),m=a("f032"),f=a("4749"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.channels.length>0,expression:"channels.length > 0"}],staticClass:"ol-unselectable ol-control channels"},[a("table",[a("thead",[a("tr",[e.isGray?e._e():a("th",[e._v("Channel")]),e.multiBand?a("th",[e._v("Band")]):e._e(),a("th",[e._v("Min")]),a("th",[e._v("Max")])])]),a("tbody",e._l(e.channels,(function(t,i){return a("tr",{key:i},[e.isGray?e._e():a("th",[e._v(e._s(e.labels[i]))]),e.multiBand?a("td",[a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.id,expression:"channel.id",modifiers:{number:!0}}],on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(t){var a="_value"in t?t._value:t.value;return e._n(a)}));e.$set(t,"id",a.target.multiple?i:i[0])}}},e._l(e.bands,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name||t.id))])})),0)]):e._e(),a("td",[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.min,expression:"channel.min",modifiers:{number:!0}}],attrs:{type:"number",required:""},domProps:{value:t.min},on:{input:function(a){a.target.composing||e.$set(t,"min",e._n(a.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.max,expression:"channel.max",modifiers:{number:!0}}],attrs:{type:"number",required:""},domProps:{value:t.max},on:{input:function(a){a.target.composing||e.$set(t,"max",e._n(a.target.value))},blur:function(t){return e.$forceUpdate()}}})])])})),0),e.multiBand?a("tfoot",[a("tr",[a("td",{attrs:{colspan:e.cols}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.isGray,expression:"isGray"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isGray)?e._i(e.isGray,null)>-1:e.isGray},on:{change:function(t){var a=e.isGray,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);i.checked?n<0&&(e.isGray=a.concat([r])):n>-1&&(e.isGray=a.slice(0,n).concat(a.slice(n+1)))}else e.isGray=s}}}),e._v(" Grayscale ")])])]):e._e()])])},y=[],b=a("96a2"),w={name:"ChannelControl",mixins:[b["a"]],props:{bands:{type:Array,default:()=>[]}},computed:{multiBand(){return this.bands.length>1},cols(){return this.isGray?this.multiBand?3:2:4},labels(){return this.isGray?["Grayscale"]:["Red","Green","Blue"]}},data(){return{channels:[],isGray:1===this.bands.length}},watch:{bands:{immediate:!0,handler(){1===this.bands.length&&(this.isGray=!0),this.updateChannels()}},isGray(){this.updateChannels(),this.emit()},channels:{deep:!0,handler(){this.emit()}}},methods:{isValid(e){return"number"===typeof e},updateChannels(){this.channels=this.bands.slice(0,this.isGray?1:3).map(e=>Object.assign({},e)),2===this.channels.length&&this.channels.push(Object.assign({},this.channels[1]))},emit(){this.channels.filter(e=>this.isValid(e.min)&&this.isValid(e.max)).length>0&&this.$emit("update","channels",this.channels)}}},v=w,S=(a("6253"),a("2877")),x=Object(S["a"])(v,g,y,!1,null,null,null),C=x.exports,D=a("3dcb"),L=a("d89f"),T={components:{ChannelControl:C,TextControl:f["a"]},data(){return{textControlText:"Pixel Value: -",layer:null,source:null,colorMap:null,noData:[],channels:[],bands:[]}},methods:{getBandVar(e){return["band",["var",e+"band"]]},getFormula(e){let t=["var",e+"min"],a=["var",e+"max"],i=this.getBandVar(e),s=["*",["/",["-",i,t],["-",a,t]],255];return["clamp",s,0,255]},getNoDataFormula(){let e=this.getBandVar("alpha");return["case",["==",e,0],0,1]},async addGeoTiff(e,t="GeoTiff"){this.bands=e.getBands(),this.colorMap=e.getColorMap(),this.noData=e.getNoData(),this.source=new L["a"]({interpolate:!1,normalize:!1,convertToRGB:e.convertToRGB,sources:[{url:e.getUrl(),nodata:this.noData[0]}]}),this.layer=new D["a"]({id:e.getUrl(),title:t,source:this.source,cacheSize:2048}),this.layer.set("events",{pointermove:e=>{let t=this.layer.getData(e.pixel),a=d["a"].displayRGBA(t,this.noData,this.noData.length>0),i="Pixel Value: "+a,s=this.formatCoords(e.coordinate);this.textControlText=[i,`${i} @ ${s}`]},click:e=>{let t=this.layer.getData(e.pixel);if(!t)return void(this.chart=null);if(t=Array.from(t).slice(0,this.bands.length),t.length<2||t.every(e=>!isFinite(e)))return void(this.chart=null);let a=this.formatCoords(e.coordinate),i="Coordinate: "+a,s=[{label:i,data:t}];this.chart={labels:this.bands.map(e=>String(e.name||e.id)),datasets:s}}}),this.addLayerToMap(this.layer);let a=e.getExtent();return a&&this.map.getView().fit(a,this.getFitOptions(10)),await new Promise(e=>setTimeout(e,1250)),this.setStyle(),this.source},formatCoords(e){return e.map(e=>String(parseFloat(e.toFixed(6)))).join(", ")},updateGeoTiffStyle(e,t){switch(e){case"channels":this.channels=t;break}this.setStyle()},setStyle(){if(!this.layer)return;let e={};for(let a in this.channels){let t=this.channels[a];e[a+"band"]=t.id,e[a+"min"]=t.min,e[a+"max"]=t.max}e.alphaband=this.bands.length+1;let t=[];if(this.colorMap)t.push("palette"),t.push(["band",1]),t.push(this.colorMap);else{if(0===this.channels.length)return null;if(1===this.channels.length){t.push("color");let e=this.getFormula(0);t.push(e),t.push(e),t.push(e),this.noData.length>0&&t.push(this.getNoDataFormula())}else t.push("color"),t.push(this.getFormula(0)),t.push(this.getFormula(1)),t.push(this.getFormula(2)),this.noData.length>0&&t.push(this.getNoDataFormula())}this.layer.setStyle({variables:e,color:t})}}},G=T,_=Object(S["a"])(G,i,s,!1,null,null,null),M=_.exports,P=a("4bc5"),B=a("2773"),F=a("e300"),j=a("9c78"),O=a("480c"),A=a("2ef1"),V=a("2278"),E=a("d510"),k=(a("6601"),a("457f")),$={data(){return{WMTSCapabilities:{},timeline:null}},methods:{async addWebService(e){switch(e.type.toLowerCase()){case"xyz":return this.updateXYZLayer(e);case"wmts":return await this.updateWMTSLayer(e);default:return d["a"].error(this,"Sorry, this web service type is not supported."),null}},getWMTSTimes(e,t){const a=e.Contents.Layer||[];let i=a.find(e=>e.Identifier==t);if(!i||!i.Dimension)return[];let s=i.Dimension.find(e=>"TIME"===e.Identifier);return s?s.Value.sort():[]},async initWMTSLayer(e){if(!this.WMTSCapabilities[e.url])try{let a=new URL(e.url);a.searchParams.set("service","wmts"),a.searchParams.set("request","GetCapabilities");let i=await axios.get(a.toString(),{responseType:"text"});var t=new V["a"];this.WMTSCapabilities[e.url]=t.read(i.data)}catch(error){d["a"].exception(this,error,"WMTS Discovery failed")}return this.WMTSCapabilities[e.url]},async updateWMTSLayer(e,t="Service"){let a=e.attributes||{},i=await this.initWMTSLayer(e);i||d["a"].exception(this,error,"WMTS Discovery failed");let s,r=null,n=null,o=null,l=null,h=d["a"].getResourceTitle(e,t),c=new F["a"];Array.isArray(a.layers)?s=a.layers:Array.isArray(i.Contents.Layer)&&(s=layers.map(e=>e.Identifier));for(let m of s){if(!m)continue;let t=Object(E["b"])(i,{layer:m,matrixSet:"EPSG:3857"});o||(o=new Date(t.dimensions.TIME));let s=this.getWMTSTimes(i,m);if(s.length){let e=new Date(s[0]),t=new Date(s[s.length-1]);(!r||e<r)&&(r=e),(!n||t>n)&&(n=t)}d["a"].isObject(a.dimensions)&&Object.assign(t.dimensions,e.attributes.dimensions),l=new E["a"](t);var u=new O["a"]({title:h,source:this.trackTileProgress(l),noSwitcherDelete:!0});c.push(u)}if(r&&n){let e;this.timeline=new k["a"]({className:"ol-pointer",graduation:"day",minDate:r,maxDate:n}),this.timeline.on("scroll",(function(t){!t.date||t.date>n||t.date<r||(e&&window.clearTimeout(e),e=window.setTimeout(()=>{try{let e=t.date.toISOString().substr(0,10);l.updateDimensions({TIME:e});let a=document.getElementsByClassName("timeline-date-label");a[0].innerText=e,a[0].disabled=!0}catch(error){console.log(error)}e=null},500))})),this.map.addControl(this.timeline),this.timeline.addButton({className:"timeline-date-label",title:`The date that is shown on the map for the collection '${h}'`,html:"No date"}),this.timeline.setDate(o)}let p=new j["b"]({id:e.id,title:h,layers:c});return p.on("change:visible",()=>{this.timeline&&this.timeline.element&&(this.timeline.element.style.display=p.getVisible()?"block":"none")}),this.addLayerToMap(p),this.timeline&&this.map.getLayers().on("remove",e=>{e.element===p&&(this.map.removeControl(this.timeline),this.timeline=null)}),p},updateXYZLayer(e,t="Service"){let a=d["a"].replaceParam(e.url,"__editorSessionId",(new Date).getTime()).replace(/%7B/g,"{").replace(/%7D/g,"}"),i=d["a"].getResourceTitle(e,t),s=new O["a"]({title:i,source:this.trackTileProgress(new A["a"]({url:a})),noSwitcherDelete:!0}),r=new j["b"]({id:e.id,title:i,layers:[s]});return this.addLayerToMap(r),r}}},W=$,z=Object(S["a"])(W,r,n,!1,null,null,null),N=z.exports,I=a("2b70"),R=a("4cdf"),J=a("5bc3"),U=a("3e6b"),X=a("5831");h["a"].prototype.getSampleByteSize=function(e){if(this.fileDirectory.BitsPerSample&&0!==this.fileDirectory.BitsPerSample.length)return e>=this.fileDirectory.BitsPerSample.length&&(e=0),Math.ceil(this.fileDirectory.BitsPerSample[e]/8)},h["a"].prototype.getReaderForSample=function(e){const t=this.getSampleFormat(e),a=this.getBitsPerSample(e);switch(t){case 1:if(a<=8)return DataView.prototype.getUint8;if(a<=16)return DataView.prototype.getUint16;if(a<=32)return DataView.prototype.getUint32;break;case 2:if(a<=8)return DataView.prototype.getInt8;if(a<=16)return DataView.prototype.getInt16;if(a<=32)return DataView.prototype.getInt32;break;case 3:switch(a){case 16:return function(e,t){return getFloat16(this,e,t)};case 32:return DataView.prototype.getFloat32;case 64:return DataView.prototype.getFloat64;default:break}break;default:break}throw Error("Unsupported data format/bitsPerSample")},h["a"].prototype.getSampleFormat=function(e=0){return this.fileDirectory.SampleFormat&&0!==this.fileDirectory.SampleFormat.length?"undefined"!==typeof this.fileDirectory.SampleFormat[e]?this.fileDirectory.SampleFormat[e]:this.fileDirectory.SampleFormat[0]:1},h["a"].prototype.getBitsPerSample=function(e=0){if(this.fileDirectory.BitsPerSample&&0!==this.fileDirectory.BitsPerSample.length)return"undefined"!==typeof this.fileDirectory.BitsPerSample[e]?this.fileDirectory.BitsPerSample[e]:this.fileDirectory.BitsPerSample[0]};var Z={name:"MapViewer",mixins:[m["a"],M,P["a"],N],components:{Pane:p["a"],ScatterChart:B["a"],Splitpanes:p["b"]},props:{data:{}},data(){return{loading:!0,chart:null}},computed:{...d["a"].mapState(["connection"]),isWebService(){return this.data instanceof I["Service"]&&"string"===typeof this.data.type},isGeoTiff(){return this.data instanceof c["a"]},isGeoJson(){return this.data instanceof u["a"]&&this.data.isGeoJson}},mounted(){this.$emit("mounted",this)},methods:{async renderMap(){try{let e,t;if(this.isGeoJson)t=await this.data.loadData(this.connection);else if(this.isGeoTiff){t=await this.data.loadData(this.connection);let a=t.getProjection();a&&(e=a)}else{if(!this.isWebService||!d["a"].isMapServiceSupported(this.data.type))throw new Error("Sorry, the given data can't be shown on a web map.");if("wmts"===this.data.type.toLowerCase()){await this.initWMTSLayer(this.data)}}if(await this.createMap(e),this.addLayerSwitcher(),this.isGeoJson)this.addBasemaps(),this.addGeoJson(t,!0);else if(this.isGeoTiff){let e=this.map.getView().getProjection();(e.basemap||["EPSG:3857","EPSG:4326"].includes(e.getCode()))&&this.addBasemaps();let a=this.data.getContext();a&&this.addExtent(a,!1),this.addGeoTiff(t)}else this.isWebService&&d["a"].isMapServiceSupported(this.data.type)&&(this.addBasemaps(),this.addWebService(this.data));this.$listeners&&this.$listeners.drop&&(this.map.getViewport().addEventListener("dragover",e=>e.preventDefault()),this.map.getViewport().addEventListener("drop",this.$listeners.drop))}catch(error){d["a"].exception(this,error)}this.loading=!1},async addCollection(){let e=this.showWebService(this.data);try{let t=service.attributes.bbox,a=[...this.fromLonLat([t.west,t.south]),...this.fromLonLat([t.east,t.north])],i=new U["a"]({title:"Extent",noSwitcherDelete:!0,source:new X["a"]({features:[new R["a"](Object(J["c"])(a))],projection:"EPSG:4326",wrapX:!1})});this.removeLayerFill(i),e.getLayers().push(i),this.map.getView().fit(a,this.getFitOptions(10))}catch(error){console.log(error)}}}},q=Z,Y=(a("63a9"),a("1e9c"),Object(S["a"])(q,o,l,!1,null,null,null));t["default"]=Y.exports},"96a2":function(e,t,a){"use strict";var i,s,r=a("3900"),n={props:{map:{type:Object}},data(){return{control:null}},mounted(){this.control=new r["a"]({element:this.$el})},watch:{map(e){e&&this.map.addControl(this.control)}},methods:{getControl(){return this.control}}},o=n,l=a("2877"),h=Object(l["a"])(o,i,s,!1,null,null,null);t["a"]=h.exports},b406:function(e,t,a){"use strict";a("45ee")},f032:function(e,t,a){"use strict";var i,s,r=a("330e"),n=a("025e"),o=a("4cdf"),l=a("5bc3"),h=a("3e6b"),d=a("5831"),c={mixins:[r["a"]],methods:{async addExtent(e,t=!0){let a=null;a=n["a"].isObject(e)?"Collection"===e.type?e.extent.spatial.bbox.map(e=>n["a"].extentToBBox(e)):"Feature"!==e.type||e.geometry||e.bbox?e:null:e,Array.isArray(a)&&a.length>0?this.addRectangles(a,t):a&&this.addGeoJson(a,!1,"Footprint",t)},addRectangles(e,t=!0){let a=this.map.getView().getProjection(),i=e.map(e=>{let t=Object(l["c"])([e.west,e.south,e.east,e.north]).transform("EPSG:4326",a);return new o["a"](t)}),s=new d["a"]({features:i,projection:a,wrapX:!1}),r=new h["a"]({title:"Bounding Boxes",displayInLayerSwitcher:!1,source:s});return t||this.removeLayerFill(r),this.map.addLayer(r),this.map.getView().fit(s.getExtent(),this.getFitOptions()),r},removeLayerFill(e){let t=e.getStyle();"function"===typeof t&&(t=t()[0]),t.setFill(null)}}},u=c,p=a("2877"),m=Object(p["a"])(u,i,s,!1,null,null,null);t["a"]=m.exports},ffc9:function(e,t,a){}}]);
//# sourceMappingURL=chunk-479daea2.9c908737.js.map