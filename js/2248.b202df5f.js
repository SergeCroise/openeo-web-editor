"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[2248],{41772:(t,e,o)=>{o.d(e,{c:()=>c});var s=o(96307);const a={props:{map:{type:Object}},data(){return{control:null}},mounted(){this.control=new s["default"]({element:this.$el})},watch:{map(t){t&&this.map.addControl(this.control)}},methods:{getControl(){return this.control}}},i=a;var r,n,l=o(82528),d=(0,l.c)(i,r,n,!1,null,null,null);const c=d.exports},20436:(t,e,o)=>{o.d(e,{c:()=>F});var s=o(40848),a=o(36368),i=o(20176),r=o(17592),n=o(27110),l=o(35347),d=o(91868),c=o(19120);const h={mixins:[a.c],methods:{addGeoJson(t,e=!1,o="GeoJSON",a=!0){let n;n=t instanceof c["default"]?t:this.createGeoJsonSource(t,this.map.getView().getProjection());let h=new d["default"]({title:o,source:n});s.c.isObject(a)?h.setStyle(a):!a&&this.removeLayerFill&&this.removeLayerFill(h),this.map.addLayer(h);let p=n.getExtent();if((0,i.t7)(p)||this.map.getView().fit(p,this.getFitOptions()),e){var u=new l.c({hitTolerance:5,multi:!1,condition:r.S,layers:[h]});u.on("select",this.onSelect),this.map.addInteraction(u)}return h},onSelect(t){if(t.selected.length>0){let e=t.selected[0],o=s.c.omitFromObject(e.getProperties(),["geometry"]),a=e.getId()||"Feature Properties";this.broadcast("showDataModal",o,a)}},createGeoJsonSource(t,e){let o=[];return s.c.detectGeoJson(t)&&(o=(new n.c).readFeatures(t,{featureProjection:e})),new c["default"]({features:o,wrapX:!1})}}},p=h;var u,m,g=o(82528),w=(0,g.c)(p,u,m,!1,null,null,null);const f=w.exports;var y=o(24344),v=o(44608);const L={mixins:[f],methods:{addExtent(t,e=!0){let o=null;return o=s.c.isObject(t)?"undefined"!==typeof t.west&&"undefined"!==typeof t.east&&"undefined"!==typeof t.south&&"undefined"!==typeof t.north?[t]:"Collection"===t.type?t.extent.spatial.bbox.map((t=>s.c.extentToBBox(t))):"Feature"!==t.type||t.geometry||t.bbox?t:null:t,Array.isArray(o)&&o.length>0?this.addRectangles(o,e):o?this.addGeoJson(o,!1,"Footprint",e):null},addRectangles(t,e=!0){let o=this.map.getView().getProjection(),s=t.map((t=>{let e=(0,v.ER)([t.west,t.south,t.east,t.north]).transform("EPSG:4326",o);return new y["default"](e)})),a=new c["default"]({features:s,projection:o,wrapX:!1}),i=new d["default"]({title:"Bounding Boxes",displayInLayerSwitcher:!1,source:a});return e||this.removeLayerFill(i),this.map.addLayer(i),this.map.getView().fit(a.getExtent(),this.getFitOptions()),i},removeLayerFill(t){let e=t.getStyle();"function"===typeof e&&(e=e()[0]),e.setFill(null)}}},b=L;var x,C,S=(0,g.c)(b,x,C,!1,null,null,null);const F=S.exports},74208:(t,e,o)=>{o.d(e,{c:()=>B});o(83248);var s=o(36368),a=o(40848),i=(o(66048),o(77952)),r=o(68076),n=o(50992),l=o(84304),d=o(35386),c=o(26440),h=o(29568),p=o(94096),u=o(93336),m=o(3424),g=o(58504),w=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"ol-unselectable ol-progress-control"},[e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress-bar-inner",style:{width:t.percent}})]),e("div",{staticClass:"progress-label"},[t._v(t._s(t.label))])])},f=[],y=o(41772);const v={name:"ProgressControl",mixins:[y.c],data(){return{loading:0,loaded:0}},computed:{show(){return this.loading>0&&this.loaded<=this.loading},percent(){return(this.loaded/this.loading*100).toFixed(1)+"%"},label(){return"Loading Tiles ("+this.percent+")"}},methods:{addLoading(){this.loading++,this.update()},addLoaded(){this.loaded++,this.update()},update(){this.loading===this.loaded&&(this.loading=0,this.loaded=0),this.loading===this.loaded&&(this.loading=0,this.loaded=0)}}},L=v;var b=o(82528),x=(0,b.c)(L,w,f,!1,null,"1da4d958",null);const C=x.exports;var S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ol-location ol-unselectable ol-control",staticStyle:{"pointer-events":"auto"}},[e("button",{attrs:{type:"button",title:"Go to your location"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.request.apply(null,arguments)}}},[e("i",{staticClass:"fas fa-location-arrow"})])])},F=[];const j={name:"UserLocationControl",mixins:[y.c],methods:{request(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((t=>{let e=this.map.getView(),o=[t.coords.longitude,t.coords.latitude];e.setCenter((0,c.fromLonLat)(o,e.getProjection()))}),(t=>Utils.error(this,t,"Location Error")),{maximumAge:1/0})}}},P=j;var M=(0,b.c)(P,S,F,!1,null,"71051cba",null);const $=M.exports;let _=1;const O={components:{ProgressControl:C,UserLocationControl:$},mixins:[s.c],props:{show:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},removableLayers:{type:Boolean,default:!1}},data(){return{map:null,id:"map_"+_++,options:{}}},watch:{async show(){await this.showMap()}},async mounted(){await this.showMap()},methods:{async showMap(){this.show&&(await this.$nextTick(),await this.renderMap(),this.$emit("options",this.options))},async createMap(t="EPSG:3857"){let e,o={showFullExtent:!0};if("string"===typeof t?o.projection=await p.c.get(t):t instanceof h.c?o.projection=t:t instanceof d.cp?e=t:a.c.isObject(t)&&(o=t),!e){if(e=new d.cp(o),!e.getCenter()){let t=this.$config.mapLocation;Array.isArray(t)&&2==t.length||(t=[0,0]),e.setCenter((0,c.fromLonLat)([t[1],t[0]],e.getProjection()))}e.getZoom()||e.setZoom(this.$config.mapZoom||0)}if(null!==this.map)return this.map.updateSize(),void this.map.render();var s=[new i.c,new r.c],u={target:this.id,view:e};this.editable?u.controls=(0,n.Q)().extend(s):(u.interactions=[],u.controls=s),this.map=new l.c(u),this.listen("windowResized",this.updateMapSize);let m=this.map.getLayers();m.on("add",(t=>{let e=t.element,o=e.get("events");for(let s in o)this.map.on(s,o[s])})),m.on("remove",(t=>{let e=t.element,o=e.get("events");for(let s in o)this.map.un(s,o[s])}))},addLayerSwitcher(){this.map.addControl(new g.c({trash:this.removableLayers}))},addBasemaps(){let t={opaque:!0,attributionsCollapsible:!1,wrapX:!1},e=[];if(Array.isArray(this.$config.basemaps)){let o=!1;for(let s of this.$config.basemaps){let a=new m.c(Object.assign({},t,s)),i=new u.c({source:this.trackTileProgress(a),baseLayer:!0,title:s.title,noSwitcherDelete:!0,visible:!o});e.push(i),this.map.addLayer(i),o=!0}}return e},setOptions(t,e){this.options[t]=e,this.$emit("options",this.options)},onShow(){this.listen("windowResized",this.updateMapSize)},onHide(){this.unlisten("windowResized")},async renderMap(){await this.createMap(),this.addBasemaps()},async updateMapSize(){this.map&&(await this.$nextTick(),this.map.updateSize())},addLayerToMap(t){t.set("userLayer",!0),this.map.addLayer(t)},removeLayerFromMap(t){let e=this.getLayerFromMap(t);e&&this.map.removeLayer(e)},getLayerFromMap(t){let e=this.map.getLayers().getArray();for(let o of e)if(o.get("id")===t)return o;return null},getVisibleLayers(){let t=[],e=this.map.getLayers().getArray();for(let o of e)o.get("userLayer")&&o.getVisible()&&t.push(o);return t},getFitOptions(t=25){let e={};var o=this.map.getSize();return e.padding=o&&t>0?[o[0]*t/100,o[1]*t/100,o[0]*t/100,o[1]*t/100]:[30,30,30,30],e},trackTileProgress(t){if(this.$refs.progress){t.on("tileloadstart",(()=>this.$refs.progress&&this.$refs.progress.addLoading()));let e=()=>this.$refs.progress&&this.$refs.progress.addLoaded();t.on("tileloadend",e),t.on("tileloaderror",e)}return t},fromLonLat(t){return(0,c.fromLonLat)(t,this.map.getView().getProjection())},toExtent(t){let e=null;return a.c.isObject(t)&&"west"in t&&"south"in t&&"east"in t&&"north"in t?e=[t.west,t.south,t.east,t.north]:Array.isArray(t)&&t.length>=4&&(e=t),e}}},A=O;var T,k,z=(0,b.c)(A,T,k,!1,null,null,null);const B=z.exports}}]);
//# sourceMappingURL=2248.b202df5f.js.map