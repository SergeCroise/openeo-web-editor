(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dc2e4e7"],{"0265":function(e,t,a){},1416:function(e,t,a){},"1e9c":function(e,t,a){"use strict";a("0265")},"2d6d":function(e,t,a){"use strict";a("4ed6")},"2e68":function(e,t,a){"use strict";a("ffc9")},"330e":function(e,t,a){"use strict";var i,s,n=a("025e"),r=a("3115"),o=a("0af5"),l=a("06f8"),d=a("a2e1"),h=a("2ce2"),c=a("3e6b"),u=a("5831"),p={mixins:[r["a"]],methods:{addGeoJson(e,t=!1,a="GeoJSON"){let i;i=e instanceof u["a"]?e:this.createGeoJsonSource(e,this.map.getView().getProjection());let s=new c["a"]({title:a,source:i});this.map.addLayer(s);let n=i.getExtent();if(Object(o["G"])(n)||this.map.getView().fit(n,this.getFitOptions()),t){var r=new h["a"]({hitTolerance:5,multi:!1,condition:l["m"],layers:[s]});r.on("select",this.onSelect),this.map.addInteraction(r)}return s},onSelect(e){if(e.selected.length>0){let t=e.selected[0],a=n["a"].omitFromObject(t.getProperties(),["geometry"]),i=t.getId()||"Feature Properties";this.emit("showDataModal",a,i)}},createGeoJsonSource(e,t){let a=[];return n["a"].detectGeoJson(e)&&(a=(new d["a"]).readFeatures(e,{featureProjection:t})),new u["a"]({features:a,wrapX:!1})}}},m=p,g=a("2877"),f=Object(g["a"])(m,i,s,!1,null,null,null);t["a"]=f.exports},4749:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.texts.length>0?a("div",{staticClass:"ol-unselectable ol-control value",class:{pointer:e.texts.length>1},on:{click:e.toggle}},[e._v(" "+e._s(e.current)+" ")]):e._e()},s=[],n=a("96a2"),r={name:"TextControl",mixins:[n["a"]],data(){return{i:0}},computed:{texts(){return Array.isArray(this.text)?this.text:"string"===typeof this.text&&this.text.length>0?[this.text]:[]},current(){return 0===this.texts.length?"":this.texts[this.i%this.text.length]}},props:{text:{text:[String,Array],default:""}},methods:{toggle(){this.i++}}},o=r,l=(a("2d6d"),a("2877")),d=Object(l["a"])(o,i,s,!1,null,"fe2bcd86",null);t["a"]=d.exports},"4bc5":function(e,t,a){"use strict";var i=a("3115"),s=a("025e"),n=(a("5bc0"),a("c320")),r=a("9d47"),o=a("21bc"),l=a("5eee"),d=a("a2c7"),h=a("256f"),c=a("f5dd"),u=a("601e"),p=a("480c"),m=a("2ef1"),g=(a("1399"),a("0417")),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"ol-unselectable ol-progress-control"},[a("div",{staticClass:"progress-bar"},[a("div",{staticClass:"progress-bar-inner",style:{width:e.percent}})]),a("div",{staticClass:"progress-label"},[e._v(e._s(e.label))])])},y=[],w=a("96a2"),b={name:"ProgressControl",mixins:[w["a"]],data(){return{loading:0,loaded:0}},computed:{show(){return this.loading>0&&this.loaded<=this.loading},percent(){return(this.loaded/this.loading*100).toFixed(1)+"%"},label(){return"Loading Tiles ("+this.percent+")"}},methods:{addLoading(){this.loading++,this.update()},addLoaded(){this.loaded++,this.update()},update(){this.loading===this.loaded&&(this.loading=0,this.loaded=0),this.loading===this.loaded&&(this.loading=0,this.loaded=0)}}},v=b,x=(a("2e68"),a("2877")),S=Object(x["a"])(v,f,y,!1,null,"1da4d958",null),L=S.exports;let T=1;var C,M,_={components:{ProgressControl:L},mixins:[i["a"]],props:{show:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},removableLayers:{type:Boolean,default:!1}},data(){return{map:null,id:"map_"+T++}},watch:{async show(){await this.showMap()}},computed:{...s["a"].mapState(["userLocation","locationZoom"])},async mounted(){await this.showMap()},methods:{async showMap(){this.show&&(await this.$nextTick(),await this.renderMap())},async createMap(e="EPSG:3857"){let t,a={showFullExtent:!0};if("string"===typeof e?a.projection=await u["a"].get(e):e instanceof c["a"]?a.projection=e:e instanceof d["a"]?t=e:s["a"].isObject(e)&&(a=e),t||(t=new d["a"](a),t.getCenter()||t.setCenter(Object(h["j"])([this.userLocation[1],this.userLocation[0]],t.getProjection())),t.getZoom()||t.setZoom(this.locationZoom)),null!==this.map)return this.map.updateSize(),void this.map.render();var i=[new n["a"],new r["a"]],p={target:this.id,view:t};this.editable?p.controls=Object(o["a"])().extend(i):(p.interactions=[],p.controls=i),this.map=new l["a"](p),this.listen("windowResized",this.updateMapSize);let m=this.map.getLayers();m.on("add",e=>{let t=e.element,a=t.get("events");for(let i in a)this.map.on(i,a[i])}),m.on("remove",e=>{let t=e.element,a=t.get("events");for(let i in a)this.map.un(i,a[i])})},addLayerSwitcher(){this.map.addControl(new g["a"]({trash:this.removableLayers}))},addBasemaps(){let e={opaque:!0,attributionsCollapsible:!1,wrapX:!1},t=[];if(Array.isArray(this.$config.basemaps)){let a=!1;for(let i of this.$config.basemaps){let s=new m["a"](Object.assign({},e,i)),n=new p["a"]({source:this.trackTileProgress(s),baseLayer:!0,title:i.title,noSwitcherDelete:!0,visible:!a});t.push(n),this.map.addLayer(n),a=!0}}return t},onShow(){this.listen("windowResized",this.updateMapSize)},onHide(){this.unlisten("windowResized")},async renderMap(){await this.createMap(),this.addBasemaps()},async updateMapSize(){this.map&&(await this.$nextTick(),this.map.updateSize())},addLayerToMap(e){e.set("userLayer",!0),this.map.addLayer(e)},removeLayerFromMap(e){let t=this.getLayerFromMap(e);t&&this.map.removeLayer(t)},getLayerFromMap(e){let t=this.map.getLayers().getArray();for(let a of t)if(a.get("id")===e)return a;return null},getVisibleLayers(){let e=[],t=this.map.getLayers().getArray();for(let a of t)a.get("userLayer")&&a.getVisible()&&e.push(a);return e},getFitOptions(e=25){let t={};var a=this.map.getSize();return t.padding=a&&e>0?[a[0]*e/100,a[1]*e/100,a[0]*e/100,a[1]*e/100]:[30,30,30,30],t},trackTileProgress(e){return this.$refs.progress&&(e.on("tileloadstart",()=>{this.$refs.progress.addLoading()}),e.on("tileloadend",()=>{this.$refs.progress.addLoaded()}),e.on("tileloaderror",()=>{this.$refs.progress.addLoaded()})),e},fromLonLat(e){return Object(h["j"])(e,this.map.getView().getProjection())}}},j=_,G=Object(x["a"])(j,C,M,!1,null,null,null);t["a"]=G.exports},"4ed6":function(e,t,a){},"5ee8":function(e,t,a){},6253:function(e,t,a){"use strict";a("5ee8")},"63a9":function(e,t,a){"use strict";a("1416")},9115:function(e,t,a){"use strict";a.r(t);var i,s,n,r,o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"map-viewer",attrs:{id:e.id}},[a("ProgressControl",{ref:"progress",attrs:{map:e.map}}),e.textControlText?a("TextControl",{attrs:{text:e.textControlText}}):e._e(),e.isGeoTiff?a("ChannelControl",{attrs:{bands:e.bands},on:{update:e.updateGeoTiffStyle}}):e._e(),e.loading?a("div",{staticClass:"map-loading"},[a("i",{staticClass:"fas fa-spinner fa-spin"}),a("span",[e._v("Loading map...")])]):e._e()],1)},l=[],d=(a("d9e2"),a("025e")),h=a("57f6"),c=a("e979"),u=a("f032"),p=a("4749"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.channels.length>0,expression:"channels.length > 0"}],staticClass:"ol-unselectable ol-control channels"},[a("table",[a("thead",[a("tr",[e.isGray?e._e():a("th",[e._v("Channel")]),e.isGray?e._e():a("th",[e._v("Band")]),a("th",[e._v("Min")]),a("th",[e._v("Max")])])]),a("tbody",e._l(e.channels,(function(t,i){return a("tr",{key:i},[e.isGray?e._e():a("th",[e._v(e._s(e.labels[i]))]),e.isGray?e._e():a("td",[a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.id,expression:"channel.id",modifiers:{number:!0}}],on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(t){var a="_value"in t?t._value:t.value;return e._n(a)}));e.$set(t,"id",a.target.multiple?i:i[0])}}},e._l(e.bands,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name||t.id))])})),0)]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.min,expression:"channel.min",modifiers:{number:!0}}],attrs:{type:"number",required:""},domProps:{value:t.min},on:{input:function(a){a.target.composing||e.$set(t,"min",e._n(a.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.max,expression:"channel.max",modifiers:{number:!0}}],attrs:{type:"number",required:""},domProps:{value:t.max},on:{input:function(a){a.target.composing||e.$set(t,"max",e._n(a.target.value))},blur:function(t){return e.$forceUpdate()}}})])])})),0)])])},g=[],f=a("96a2"),y={name:"ChannelControl",mixins:[f["a"]],props:{bands:{type:Array,default:()=>[]}},computed:{isGray(){return 1===this.bands.length},labels(){return this.isGray?["Grayscale"]:["Red","Green","Blue"]}},data(){return{channels:[]}},watch:{bands:{immediate:!0,handler(){this.channels=this.bands.slice(0,3).map(e=>Object.assign({},e)),2===this.channels.length&&this.channels.push(Object.assign({},this.channels[1]))}},channels:{deep:!0,handler(){this.channels.filter(e=>this.isValid(e.min)&&this.isValid(e.max)).length>0&&this.$emit("update","channels",this.channels)}}},methods:{isValid(e){return"number"===typeof e}}},w=y,b=(a("6253"),a("2877")),v=Object(b["a"])(w,m,g,!1,null,null,null),x=v.exports,S=a("3dcb"),L=a("d89f"),T={components:{ChannelControl:x,TextControl:p["a"]},data(){return{textControlText:"Pixel Value: -",hasStyle:!1,layer:null,source:null,channels:[],bands:[]}},computed:{glStyleVars(){if(0===this.channels.length)return null;let e={};for(let t in this.channels){let a=this.channels[t];e[t+"band"]=a.id,e[t+"min"]=a.min,e[t+"max"]=a.max}return e},glStyle(){let e=["color"];if(0===this.channels.length)return null;if(1===this.channels.length){let t=this.getFormula(0);e.push(t),e.push(t),e.push(t),this.source&&this.source.addAlpha_&&e.push(["band",this.bands.length+1])}else e.push(this.getFormula(0)),e.push(this.getFormula(1)),e.push(this.getFormula(2)),this.source&&this.source.addAlpha_&&e.push(["band",this.bands.length+1]);return{variables:this.glStyleVars,color:e}}},methods:{getBandVar(e){return["band",["var",e+"band"]]},getFormula(e){let t=["var",e+"min"],a=["var",e+"max"],i=this.getBandVar(e);return["*",["/",["-",i,t],["-",a,t]],255]},async addGeoTiff(e,t="GeoTiff"){this.bands=e.getBands(),this.source=new L["a"]({interpolate:!1,normalize:!1,sources:[{url:e.getUrl(),nodata:e.getNoData()}]}),this.layer=new S["a"]({id:e.getUrl(),title:t,source:this.source}),this.layer.set("events",{pointermove:e=>{let t=this.layer.getData(e.pixel),a=d["a"].displayRGBA(t),i="Pixel Value: "+a;this.textControlText=[i,`${i} @ ${e.coordinate.map(e=>String(e.toFixed(6)).replace(/0+$/,"")).join(", ")}`]}}),this.addLayerToMap(this.layer);let a=e.getExtent();return a&&this.map.getView().fit(a,this.getFitOptions(10)),this.source},updateGeoTiffStyle(e,t){switch(e){case"channels":this.channels=t;break}this.layer&&(this.hasStyle?this.layer.updateStyleVariables(this.glStyleVars):(this.layer.setStyle(this.glStyle),this.hasStyle=!0))}}},C=T,M=Object(b["a"])(C,i,s,!1,null,null,null),_=M.exports,j=a("4bc5"),G=a("e300"),O=a("9c78"),P=a("480c"),V=a("2ef1"),$=a("2278"),E=a("d510"),D=(a("6601"),a("457f")),B={data(){return{WMTSCapabilities:{},timeline:null}},methods:{async addWebService(e){switch(e.type.toLowerCase()){case"xyz":return this.updateXYZLayer(e);case"wmts":return await this.updateWMTSLayer(e);default:return d["a"].error(this,"Sorry, this web service type is not supported."),null}},getWMTSTimes(e,t){const a=e.Contents.Layer||[];let i=a.find(e=>e.Identifier==t);if(!i||!i.Dimension)return[];let s=i.Dimension.find(e=>"TIME"===e.Identifier);return s?s.Value.sort():[]},async initWMTSLayer(e){if(!this.WMTSCapabilities[e.url])try{let a=new URL(e.url);a.searchParams.set("service","wmts"),a.searchParams.set("request","GetCapabilities");let i=await axios.get(a.toString(),{responseType:"text"});var t=new $["a"];this.WMTSCapabilities[e.url]=t.read(i.data)}catch(error){d["a"].exception(this,error,"WMTS Discovery failed")}return this.WMTSCapabilities[e.url]},async updateWMTSLayer(e,t="Service"){let a=e.attributes||{},i=await this.initWMTSLayer(e);i||d["a"].exception(this,error,"WMTS Discovery failed");let s,n=null,r=null,o=null,l=null,h=d["a"].getResourceTitle(e,t),c=new G["a"];Array.isArray(a.layers)?s=a.layers:Array.isArray(i.Contents.Layer)&&(s=layers.map(e=>e.Identifier));for(let m of s){if(!m)continue;let t=Object(E["b"])(i,{layer:m,matrixSet:"EPSG:3857"});o||(o=new Date(t.dimensions.TIME));let s=this.getWMTSTimes(i,m);if(s.length){let e=new Date(s[0]),t=new Date(s[s.length-1]);(!n||e<n)&&(n=e),(!r||t>r)&&(r=t)}d["a"].isObject(a.dimensions)&&Object.assign(t.dimensions,e.attributes.dimensions),l=new E["a"](t);var u=new P["a"]({title:h,source:this.trackTileProgress(l),noSwitcherDelete:!0});c.push(u)}if(n&&r){let e;this.timeline=new D["a"]({className:"ol-pointer",graduation:"day",minDate:n,maxDate:r}),this.timeline.on("scroll",(function(t){!t.date||t.date>r||t.date<n||(e&&window.clearTimeout(e),e=window.setTimeout(()=>{try{let e=t.date.toISOString().substr(0,10);l.updateDimensions({TIME:e});let a=document.getElementsByClassName("timeline-date-label");a[0].innerText=e,a[0].disabled=!0}catch(error){console.log(error)}e=null},500))})),this.map.addControl(this.timeline),this.timeline.addButton({className:"timeline-date-label",title:`The date that is shown on the map for the collection '${h}'`,html:"No date"}),this.timeline.setDate(o)}let p=new O["b"]({id:e.id,title:h,layers:c});return p.on("change:visible",()=>{this.timeline&&this.timeline.element&&(this.timeline.element.style.display=p.getVisible()?"block":"none")}),this.addLayerToMap(p),this.timeline&&this.map.getLayers().on("remove",e=>{e.element===p&&(this.map.removeControl(this.timeline),this.timeline=null)}),p},updateXYZLayer(e,t="Service"){let a=d["a"].replaceParam(e.url,"__editorSessionId",(new Date).getTime()).replace(/%7B/g,"{").replace(/%7D/g,"}"),i=d["a"].getResourceTitle(e,t),s=new P["a"]({title:i,source:this.trackTileProgress(new V["a"]({url:a})),noSwitcherDelete:!0}),n=new O["b"]({id:e.id,title:i,layers:[s]});return this.addLayerToMap(n),n}}},F=B,W=Object(b["a"])(F,n,r,!1,null,null,null),A=W.exports,k=a("2b70"),J=a("4cdf"),z=a("5bc3"),I=a("3e6b"),N=a("5831"),R={name:"MapViewer",mixins:[u["a"],_,j["a"],A],props:{data:{}},data(){return{loading:!0}},computed:{...d["a"].mapState(["connection"]),isWebService(){return this.data instanceof k["Service"]&&"string"===typeof this.data.type},isGeoTiff(){return this.data instanceof h["a"]},isGeoJson(){return this.data instanceof c["a"]&&this.data.isGeoJson}},methods:{async renderMap(){try{let e,t;if(this.isGeoJson)t=await this.data.getData(this.connection);else if(this.isGeoTiff){t=await this.data.getData(this.connection);let a=t.getProjection();a&&(e=a)}else{if(!this.isWebService||!d["a"].isMapServiceSupported(this.data.type))throw new Error("Sorry, the given data can't be shown on a web map.");if("wmts"===this.data.type.toLowerCase()){await this.initWMTSLayer(this.data)}}if(await this.createMap(e),this.addLayerSwitcher(),this.isGeoJson)this.addBasemaps(),this.addGeoJson(t,!0);else if(this.isGeoTiff){["EPSG:3857","EPSG:4326"].includes(this.map.getView().getProjection().getCode())&&this.addBasemaps(),this.addGeoTiff(t);let e=this.data.getContext();e&&this.addExtent(e)}else this.isWebService&&d["a"].isMapServiceSupported(this.data.type)&&(this.addBasemaps(),this.addWebService(this.data));this.$listeners&&this.$listeners.drop&&(this.map.getViewport().addEventListener("dragover",e=>e.preventDefault()),this.map.getViewport().addEventListener("drop",this.$listeners.drop))}catch(error){d["a"].exception(this,error)}this.loading=!1},async addCollection(){let e=this.showWebService(this.data);try{let t=service.attributes.bbox,a=[...this.fromLonLat([t.west,t.south]),...this.fromLonLat([t.east,t.north])],i=new I["a"]({title:"Extent",noSwitcherDelete:!0,source:new N["a"]({features:[new J["a"](Object(z["c"])(a))],projection:"EPSG:4326",wrapX:!1})}),s=i.getStyle();"function"===typeof s&&(s=s()[0]),s.setFill(null),e.getLayers().push(i),this.map.getView().fit(a,this.getFitOptions(10))}catch(error){console.log(error)}}}},X=R,Z=(a("63a9"),a("1e9c"),Object(b["a"])(X,o,l,!1,null,null,null));t["default"]=Z.exports},"96a2":function(e,t,a){"use strict";var i,s,n=a("3900"),r={props:{map:{type:Object}},data(){return{control:null}},mounted(){this.control=new n["a"]({element:this.$el})},watch:{map(e){e&&this.map.addControl(this.control)}},methods:{getControl(){return this.control}}},o=r,l=a("2877"),d=Object(l["a"])(o,i,s,!1,null,null,null);t["a"]=d.exports},f032:function(e,t,a){"use strict";var i,s,n=a("330e"),r=a("025e"),o=a("4cdf"),l=a("5bc3"),d=a("3e6b"),h=a("5831"),c={mixins:[n["a"]],methods:{async addExtent(e){let t;t=r["a"].isObject(e)&&"Collection"===e.type?e.extent.spatial.bbox.map(e=>r["a"].extentToBBox(e)):e,Array.isArray(t)&&t.length>0?this.addRectangles(t):this.addGeoJson(t,!1,"Footprint")},addRectangles(e){let t=this.map.getView().getProjection(),a=e.map(e=>{let a=Object(l["c"])([e.west,e.south,e.east,e.north]).transform("EPSG:4326",t);return new o["a"](a)}),i=new h["a"]({features:a,projection:t,wrapX:!1}),s=new d["a"]({title:"Bounding Boxes",displayInLayerSwitcher:!1,source:i});this.map.addLayer(s),this.map.getView().fit(i.getExtent(),this.getFitOptions())}}},u=c,p=a("2877"),m=Object(p["a"])(u,i,s,!1,null,null,null);t["a"]=m.exports},ffc9:function(e,t,a){}}]);
//# sourceMappingURL=chunk-2dc2e4e7.d8b8b71f.js.map