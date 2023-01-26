"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[4717],{44717:(t,e,i)=>{i.d(e,{Z:()=>O});var s=i(79879),r=i(43334),n=i(28641),o=i(98683),a=i(43086),l=i(7517),h=i(92371),d=i(22556);const u={mixins:[r.Z],methods:{addGeoJson(t,e=!1,i="GeoJSON",s=!0){let r;r=t instanceof d["default"]?t:this.createGeoJsonSource(t,this.map.getView().getProjection());let a=new h["default"]({title:i,source:r});!s&&this.removeLayerFill&&this.removeLayerFill(a),this.map.addLayer(a);let u=r.getExtent();if((0,n.xb)(u)||this.map.getView().fit(u,this.getFitOptions()),e){var c=new l.Z({hitTolerance:5,multi:!1,condition:o.Kf,layers:[a]});c.on("select",this.onSelect),this.map.addInteraction(c)}return a},onSelect(t){if(t.selected.length>0){let e=t.selected[0],i=s.Z.omitFromObject(e.getProperties(),["geometry"]),r=e.getId()||"Feature Properties";this.broadcast("showDataModal",i,r)}},createGeoJsonSource(t,e){let i=[];return s.Z.detectGeoJson(t)&&(i=(new a.Z).readFeatures(t,{featureProjection:e})),new d["default"]({features:i,wrapX:!1})}}},c=u;var g,f,y=i(1001),p=(0,y.Z)(c,g,f,!1,null,null,null);const m=p.exports;var _=i(81090),C=i(2033);const F={mixins:[m],methods:{addExtent(t,e=!0){let i=null;return i=s.Z.isObject(t)?"undefined"!==typeof t.west&&"undefined"!==typeof t.east&&"undefined"!==typeof t.south&&"undefined"!==typeof t.north?[t]:"Collection"===t.type?t.extent.spatial.bbox.map((t=>s.Z.extentToBBox(t))):"Feature"!==t.type||t.geometry||t.bbox?t:null:t,Array.isArray(i)&&i.length>0?this.addRectangles(i,e):i?this.addGeoJson(i,!1,"Footprint",e):null},addRectangles(t,e=!0){let i=this.map.getView().getProjection(),s=t.map((t=>{let e=(0,C.oJ)([t.west,t.south,t.east,t.north]).transform("EPSG:4326",i);return new _["default"](e)})),r=new d["default"]({features:s,projection:i,wrapX:!1}),n=new h["default"]({title:"Bounding Boxes",displayInLayerSwitcher:!1,source:r});return e||this.removeLayerFill(n),this.map.addLayer(n),this.map.getView().fit(r.getExtent(),this.getFitOptions()),n},removeLayerFill(t){let e=t.getStyle();"function"===typeof e&&(e=e()[0]),e.setFill(null)}}},v=F;var P,x,w=(0,y.Z)(v,P,x,!1,null,null,null);const O=w.exports},43086:(t,e,i)=>{i.d(e,{Z:()=>I});var s=i(81090),r=i(13958),n=i(74187),o=i(63432);class a{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.supportedMediaTypes=null}getReadOptions(t,e){if(e){let i=e.dataProjection?(0,o.get)(e.dataProjection):this.readProjection(t);e.extent&&i&&"tile-pixels"===i.getUnits()&&(i=(0,o.get)(i),i.setWorldExtent(e.extent)),e={dataProjection:i,featureProjection:e.featureProjection}}return this.adaptOptions(e)}adaptOptions(t){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection},t)}getType(){return(0,n.O3)()}readFeature(t,e){return(0,n.O3)()}readFeatures(t,e){return(0,n.O3)()}readGeometry(t,e){return(0,n.O3)()}readProjection(t){return(0,n.O3)()}writeFeature(t,e){return(0,n.O3)()}writeFeatures(t,e){return(0,n.O3)()}writeGeometry(t,e){return(0,n.O3)()}}const l=a;function h(t,e,i){const s=i?(0,o.get)(i.featureProjection):null,r=i?(0,o.get)(i.dataProjection):null;let n;if(n=s&&r&&!(0,o.equivalent)(s,r)?(e?t.clone():t).transform(e?s:r,e?r:s):t,e&&i&&void 0!==i.decimals){const e=Math.pow(10,i.decimals),s=function(t){for(let i=0,s=t.length;i<s;++i)t[i]=Math.round(t[i]*e)/e;return t};n===t&&(n=t.clone()),n.applyTransform(s)}return n}class d extends l{constructor(){super()}getType(){return"json"}readFeature(t,e){return this.readFeatureFromObject(u(t),this.getReadOptions(t,e))}readFeatures(t,e){return this.readFeaturesFromObject(u(t),this.getReadOptions(t,e))}readFeatureFromObject(t,e){return(0,n.O3)()}readFeaturesFromObject(t,e){return(0,n.O3)()}readGeometry(t,e){return this.readGeometryFromObject(u(t),this.getReadOptions(t,e))}readGeometryFromObject(t,e){return(0,n.O3)()}readProjection(t){return this.readProjectionFromObject(u(t))}readProjectionFromObject(t){return(0,n.O3)()}writeFeature(t,e){return JSON.stringify(this.writeFeatureObject(t,e))}writeFeatureObject(t,e){return(0,n.O3)()}writeFeatures(t,e){return JSON.stringify(this.writeFeaturesObject(t,e))}writeFeaturesObject(t,e){return(0,n.O3)()}writeGeometry(t,e){return JSON.stringify(this.writeGeometryObject(t,e))}writeGeometryObject(t,e){return(0,n.O3)()}}function u(t){if("string"===typeof t){const e=JSON.parse(t);return e||null}return null!==t?t:null}const c=d;var g=i(92083),f=i(7403),y=i(36259),p=i(32562),m=i(60188),_=i(2033),C=i(99515),F=i(69374);class v extends c{constructor(t){t=t||{},super(),this.dataProjection=(0,o.get)(t.dataProjection?t.dataProjection:"EPSG:4326"),t.featureProjection&&(this.defaultFeatureProjection=(0,o.get)(t.featureProjection)),this.geometryName_=t.geometryName,this.extractGeometryName_=t.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(t,e){let i=null;i="Feature"===t["type"]?t:{type:"Feature",geometry:t,properties:null};const r=P(i["geometry"],e),n=new s["default"];return this.geometryName_?n.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in i!==void 0&&n.setGeometryName(i["geometry_name"]),n.setGeometry(r),"id"in i&&n.setId(i["id"]),i["properties"]&&n.setProperties(i["properties"],!0),n}readFeaturesFromObject(t,e){const i=t;let s=null;if("FeatureCollection"===i["type"]){const i=t;s=[];const r=i["features"];for(let t=0,n=r.length;t<n;++t)s.push(this.readFeatureFromObject(r[t],e))}else s=[this.readFeatureFromObject(t,e)];return s}readGeometryFromObject(t,e){return P(t,e)}readProjectionFromObject(t){const e=t["crs"];let i;return e?"name"==e["type"]?i=(0,o.get)(e["properties"]["name"]):"EPSG"===e["type"]?i=(0,o.get)("EPSG:"+e["properties"]["code"]):(0,C.h)(!1,36):i=this.dataProjection,i}writeFeatureObject(t,e){e=this.adaptOptions(e);const i={type:"Feature",geometry:null,properties:null},s=t.getId();if(void 0!==s&&(i.id=s),!t.hasProperties())return i;const r=t.getProperties(),n=t.getGeometry();return n&&(i.geometry=E(n,e),delete r[t.getGeometryName()]),(0,F.x)(r)||(i.properties=r),i}writeFeaturesObject(t,e){e=this.adaptOptions(e);const i=[];for(let s=0,r=t.length;s<r;++s)i.push(this.writeFeatureObject(t[s],e));return{type:"FeatureCollection",features:i}}writeGeometryObject(t,e){return E(t,this.adaptOptions(e))}}function P(t,e){if(!t)return null;let i;switch(t["type"]){case"Point":i=w(t);break;case"LineString":i=O(t);break;case"Polygon":i=S(t);break;case"MultiPoint":i=b(t);break;case"MultiLineString":i=G(t);break;case"MultiPolygon":i=j(t);break;case"GeometryCollection":i=x(t);break;default:throw new Error("Unsupported GeoJSON type: "+t["type"])}return h(i,!1,e)}function x(t,e){const i=t["geometries"].map((function(t){return P(t,e)}));return new r.Z(i)}function w(t){return new m["default"](t["coordinates"])}function O(t){return new g.Z(t["coordinates"])}function G(t){return new f.Z(t["coordinates"])}function b(t){return new y.Z(t["coordinates"])}function j(t){return new p.Z(t["coordinates"])}function S(t){return new _.ZP(t["coordinates"])}function E(t,e){t=h(t,!0,e);const i=t.getType();let s;switch(i){case"Point":s=T(t,e);break;case"LineString":s=L(t,e);break;case"Polygon":s=D(t,e);break;case"MultiPoint":s=R(t,e);break;case"MultiLineString":s=A(t,e);break;case"MultiPolygon":s=Z(t,e);break;case"GeometryCollection":s=M(t,e);break;case"Circle":s={type:"GeometryCollection",geometries:[]};break;default:throw new Error("Unsupported geometry type: "+i)}return s}function M(t,e){e=Object.assign({},e),delete e.featureProjection;const i=t.getGeometriesArray().map((function(t){return E(t,e)}));return{type:"GeometryCollection",geometries:i}}function L(t,e){return{type:"LineString",coordinates:t.getCoordinates()}}function A(t,e){return{type:"MultiLineString",coordinates:t.getCoordinates()}}function R(t,e){return{type:"MultiPoint",coordinates:t.getCoordinates()}}function Z(t,e){let i;return e&&(i=e.rightHanded),{type:"MultiPolygon",coordinates:t.getCoordinates(i)}}function T(t,e){return{type:"Point",coordinates:t.getCoordinates()}}function D(t,e){let i;return e&&(i=e.rightHanded),{type:"Polygon",coordinates:t.getCoordinates(i)}}const I=v},13958:(t,e,i)=>{i.d(e,{Z:()=>h});var s=i(85487),r=i(71694),n=i(28641),o=i(65818);class a extends r.Z{constructor(t){super(),this.geometries_=t||null,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(o.bN),this.changeEventsKeys_.length=0}listenGeometriesChange_(){if(this.geometries_)for(let t=0,e=this.geometries_.length;t<e;++t)this.changeEventsKeys_.push((0,o.oL)(this.geometries_[t],s.Z.CHANGE,this.changed,this))}clone(){const t=new a(null);return t.setGeometries(this.geometries_),t.applyProperties(this),t}closestPointXY(t,e,i,s){if(s<(0,n.qf)(this.getExtent(),t,e))return s;const r=this.geometries_;for(let n=0,o=r.length;n<o;++n)s=r[n].closestPointXY(t,e,i,s);return s}containsXY(t,e){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)if(i[s].containsXY(t,e))return!0;return!1}computeExtent(t){(0,n.YN)(t);const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)(0,n.l7)(t,e[i].getExtent());return t}getGeometries(){return l(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let t=[];const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)e[i].getType()===this.getType()?t=t.concat(e[i].getGeometriesArrayRecursive()):t.push(e[i]);return t}getSimplifiedGeometry(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&t<this.simplifiedGeometryMaxMinSquaredTolerance)return this;const e=[],i=this.geometries_;let s=!1;for(let r=0,n=i.length;r<n;++r){const n=i[r],o=n.getSimplifiedGeometry(t);e.push(o),o!==n&&(s=!0)}if(s){const t=new a(null);return t.setGeometriesArray(e),t}return this.simplifiedGeometryMaxMinSquaredTolerance=t,this}getType(){return"GeometryCollection"}intersectsExtent(t){const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)if(e[i].intersectsExtent(t))return!0;return!1}isEmpty(){return 0===this.geometries_.length}rotate(t,e){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)i[s].rotate(t,e);this.changed()}scale(t,e,i){i||(i=(0,n.qg)(this.getExtent()));const s=this.geometries_;for(let r=0,n=s.length;r<n;++r)s[r].scale(t,e,i);this.changed()}setGeometries(t){this.setGeometriesArray(l(t))}setGeometriesArray(t){this.unlistenGeometriesChange_(),this.geometries_=t,this.listenGeometriesChange_(),this.changed()}applyTransform(t){const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)e[i].applyTransform(t);this.changed()}translate(t,e){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)i[s].translate(t,e);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}}function l(t){const e=[];for(let i=0,s=t.length;i<s;++i)e.push(t[i].clone());return e}const h=a},92083:(t,e,i)=>{i.d(e,{Z:()=>y});var s=i(72967),r=i(53042),n=i(28641),o=i(41931),a=i(80226),l=i(65537),h=i(93032),d=i(89241),u=i(49405),c=i(63746),g=i(27374);class f extends s.ZP{constructor(t,e){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,void 0===e||Array.isArray(t[0])?this.setCoordinates(t,e):this.setFlatCoordinates(e,t)}appendCoordinate(t){this.flatCoordinates?(0,l.l7)(this.flatCoordinates,t):this.flatCoordinates=t.slice(),this.changed()}clone(){const t=new f(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,s){return s<(0,n.qf)(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,r.Bv)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,r.H$)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,e,i,s))}forEachSegment(t){return(0,h.E)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinateAtM(t,e){return"XYM"!=this.layout&&"XYZM"!=this.layout?null:(e=void 0!==e&&e,(0,u.iJ)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e))}getCoordinates(){return(0,d.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(t,e){return(0,u.WW)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,this.stride)}getLength(){return(0,g.W)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(t){const e=[];return e.length=(0,a.dt)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,0),new f(e,"XY")}getType(){return"LineString"}intersectsExtent(t){return(0,c.Kz)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,o.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()}}const y=f},7403:(t,e,i)=>{i.d(e,{Z:()=>f});var s=i(92083),r=i(72967),n=i(53042),o=i(28641),a=i(41931),l=i(80226),h=i(65537),d=i(89241),u=i(49405),c=i(63746);class g extends r.ZP{constructor(t,e,i){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(t[0]))this.setCoordinates(t,e);else if(void 0!==e&&i)this.setFlatCoordinates(e,t),this.ends_=i;else{let e=this.getLayout();const i=t,s=[],r=[];for(let t=0,n=i.length;t<n;++t){const n=i[t];0===t&&(e=n.getLayout()),(0,h.l7)(s,n.getFlatCoordinates()),r.push(s.length)}this.setFlatCoordinates(e,s),this.ends_=r}}appendLineString(t){this.flatCoordinates?(0,h.l7)(this.flatCoordinates,t.getFlatCoordinates().slice()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const t=new g(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,e,i,s){return s<(0,o.qf)(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,n.Af)(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,n.Xl)(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,e,i,s))}getCoordinateAtM(t,e,i){return"XYM"!=this.layout&&"XYZM"!=this.layout||0===this.flatCoordinates.length?null:(e=void 0!==e&&e,i=void 0!==i&&i,(0,u.dG)(this.flatCoordinates,0,this.ends_,this.stride,t,e,i))}getCoordinates(){return(0,d.o1)(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(t){return t<0||this.ends_.length<=t?null:new s.Z(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLineStrings(){const t=this.flatCoordinates,e=this.ends_,i=this.layout,r=[];let n=0;for(let o=0,a=e.length;o<a;++o){const a=e[o],l=new s.Z(t.slice(n,a),i);r.push(l),n=a}return r}getFlatMidpoints(){const t=[],e=this.flatCoordinates;let i=0;const s=this.ends_,r=this.stride;for(let n=0,o=s.length;n<o;++n){const o=s[n],a=(0,u.WW)(e,i,o,r,.5);(0,h.l7)(t,a),i=o}return t}getSimplifiedGeometryInternal(t){const e=[],i=[];return e.length=(0,l.UJ)(this.flatCoordinates,0,this.ends_,this.stride,t,e,0,i),new g(e,"XY",i)}getType(){return"MultiLineString"}intersectsExtent(t){return(0,c.AW)(this.flatCoordinates,0,this.ends_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);const i=(0,a._5)(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===i.length?0:i[i.length-1],this.changed()}}const f=g},36259:(t,e,i)=>{i.d(e,{Z:()=>u});var s=i(60188),r=i(72967),n=i(28641),o=i(41931),a=i(65537),l=i(89241),h=i(33983);class d extends r.ZP{constructor(t,e){super(),e&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}appendPoint(t){this.flatCoordinates?(0,a.l7)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.changed()}clone(){const t=new d(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,s){if(s<(0,n.qf)(this.getExtent(),t,e))return s;const r=this.flatCoordinates,o=this.stride;for(let n=0,a=r.length;n<a;n+=o){const a=(0,h.bI)(t,e,r[n],r[n+1]);if(a<s){s=a;for(let t=0;t<o;++t)i[t]=r[n+t];i.length=o}}return s}getCoordinates(){return(0,l.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(t){const e=this.flatCoordinates?this.flatCoordinates.length/this.stride:0;return t<0||e<=t?null:new s["default"](this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)}getPoints(){const t=this.flatCoordinates,e=this.layout,i=this.stride,r=[];for(let n=0,o=t.length;n<o;n+=i){const o=new s["default"](t.slice(n,n+i),e);r.push(o)}return r}getType(){return"MultiPoint"}intersectsExtent(t){const e=this.flatCoordinates,i=this.stride;for(let s=0,r=e.length;s<r;s+=i){const i=e[s],r=e[s+1];if((0,n.jE)(t,i,r))return!0}return!1}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,o.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()}}const u=d},32562:(t,e,i)=>{i.d(e,{Z:()=>C});var s=i(36259),r=i(2033),n=i(72967),o=i(53042),a=i(28641),l=i(41931),h=i(65537),d=i(73448),u=i(89241),c=i(63746),g=i(74772),f=i(14078);function y(t,e,i,s){const r=[];let n=(0,a.lJ)();for(let o=0,l=i.length;o<l;++o){const l=i[o];n=(0,a.GN)(t,e,l[0],s),r.push((n[0]+n[2])/2,(n[1]+n[3])/2),e=l[l.length-1]}return r}var p=i(79679),m=i(80226);class _ extends n.ZP{constructor(t,e,i){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!i&&!Array.isArray(t[0])){let s=this.getLayout();const r=t,n=[],o=[];for(let t=0,e=r.length;t<e;++t){const e=r[t];0===t&&(s=e.getLayout());const i=n.length,a=e.getEnds();for(let t=0,s=a.length;t<s;++t)a[t]+=i;(0,h.l7)(n,e.getFlatCoordinates()),o.push(a)}e=s,t=n,i=o}void 0!==e&&i?(this.setFlatCoordinates(e,t),this.endss_=i):this.setCoordinates(t,e)}appendPolygon(t){let e;if(this.flatCoordinates){const i=this.flatCoordinates.length;(0,h.l7)(this.flatCoordinates,t.getFlatCoordinates()),e=t.getEnds().slice();for(let t=0,s=e.length;t<s;++t)e[t]+=i}else this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();this.endss_.push(e),this.changed()}clone(){const t=this.endss_.length,e=new Array(t);for(let s=0;s<t;++s)e[s]=this.endss_[s].slice();const i=new _(this.flatCoordinates.slice(),this.layout,e);return i.applyProperties(this),i}closestPointXY(t,e,i,s){return s<(0,a.qf)(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,o.sD)(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,o.gI)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,i,s))}containsXY(t,e){return(0,p.Zl)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)}getArea(){return(0,f.Eu)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(t){let e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),(0,g.dL)(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,(0,u.ug)(e,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){const t=y(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=(0,d.U)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new s.Z(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const t=this.flatCoordinates;(0,g.Oj)(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=(0,g.dL)(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){const e=[],i=[];return e.length=(0,m.Pp)(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),e,0,i),new _(e,"XY",i)}getPolygon(t){if(t<0||this.endss_.length<=t)return null;let e;if(0===t)e=0;else{const i=this.endss_[t-1];e=i[i.length-1]}const i=this.endss_[t].slice(),s=i[i.length-1];if(0!==e)for(let r=0,n=i.length;r<n;++r)i[r]-=e;return new r.ZP(this.flatCoordinates.slice(e,s),this.layout,i)}getPolygons(){const t=this.layout,e=this.flatCoordinates,i=this.endss_,s=[];let n=0;for(let o=0,a=i.length;o<a;++o){const a=i[o].slice(),l=a[a.length-1];if(0!==n)for(let t=0,e=a.length;t<e;++t)a[t]-=n;const h=new r.ZP(e.slice(n,l),t,a);s.push(h),n=l}return s}getType(){return"MultiPolygon"}intersectsExtent(t){return(0,c.oW)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);const i=(0,l.QT)(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===i.length)this.flatCoordinates.length=0;else{const t=i[i.length-1];this.flatCoordinates.length=0===t.length?0:t[t.length-1]}this.changed()}}const C=_},49405:(t,e,i)=>{i.d(e,{WW:()=>n,dG:()=>a,iJ:()=>o});var s=i(65537),r=i(33983);function n(t,e,i,n,o,a,l){let h,d;const u=(i-e)/n;if(1===u)h=e;else if(2===u)h=e,d=o;else if(0!==u){let r=t[e],a=t[e+1],l=0;const u=[0];for(let s=e+n;s<i;s+=n){const e=t[s],i=t[s+1];l+=Math.sqrt((e-r)*(e-r)+(i-a)*(i-a)),u.push(l),r=e,a=i}const c=o*l,g=(0,s.ry)(u,c);g<0?(d=(c-u[-g-2])/(u[-g-1]-u[-g-2]),h=e+(-g-2)*n):h=e+g*n}l=l>1?l:2,a=a||new Array(l);for(let s=0;s<l;++s)a[s]=void 0===h?NaN:void 0===d?t[h+s]:(0,r.t7)(t[h+s],t[h+n+s],d);return a}function o(t,e,i,s,n,o){if(i==e)return null;let a;if(n<t[e+s-1])return o?(a=t.slice(e,e+s),a[s-1]=n,a):null;if(t[i-1]<n)return o?(a=t.slice(i-s,i),a[s-1]=n,a):null;if(n==t[e+s-1])return t.slice(e,e+s);let l=e/s,h=i/s;while(l<h){const e=l+h>>1;n<t[(e+1)*s-1]?h=e:l=e+1}const d=t[l*s-1];if(n==d)return t.slice((l-1)*s,(l-1)*s+s);const u=t[(l+1)*s-1],c=(n-d)/(u-d);a=[];for(let g=0;g<s-1;++g)a.push((0,r.t7)(t[(l-1)*s+g],t[l*s+g],c));return a.push(n),a}function a(t,e,i,s,r,n,a){if(a)return o(t,e,i[i.length-1],s,r,n);let l;if(r<t[s-1])return n?(l=t.slice(0,s),l[s-1]=r,l):null;if(t[t.length-1]<r)return n?(l=t.slice(t.length-s),l[s-1]=r,l):null;for(let h=0,d=i.length;h<d;++h){const n=i[h];if(e!=n){if(r<t[e+s-1])return null;if(r<=t[n-1])return o(t,e,n,s,r,!1);e=n}}return null}},7517:(t,e,i)=>{i.d(e,{Z:()=>F});var s=i(78714),r=i(42071),n=i(291),o=i(81090),a=i(47182),l=i(92371),h=i(36885),d=i(69374),u=i(47539),c=i(65537),g=i(74187),f=i(98683);const y={SELECT:"select"};class p extends n.ZP{constructor(t,e,i,s){super(t),this.selected=e,this.deselected=i,this.mapBrowserEvent=s}}const m={};class _ extends a.ZP{constructor(t){let e;if(super(),this.on,this.once,this.un,t=t||{},this.boundAddFeature_=this.addFeature_.bind(this),this.boundRemoveFeature_=this.removeFeature_.bind(this),this.condition_=t.condition?t.condition:f.Kf,this.addCondition_=t.addCondition?t.addCondition:f.Fi,this.removeCondition_=t.removeCondition?t.removeCondition:f.Fi,this.toggleCondition_=t.toggleCondition?t.toggleCondition:f.vY,this.multi_=!!t.multi&&t.multi,this.filter_=t.filter?t.filter:h.uX,this.hitTolerance_=t.hitTolerance?t.hitTolerance:0,this.style_=void 0!==t.style?t.style:C(),this.features_=t.features||new s.Z,t.layers)if("function"===typeof t.layers)e=t.layers;else{const i=t.layers;e=function(t){return i.includes(t)}}else e=h.uX;this.layerFilter_=e,this.featureLayerAssociation_={}}addFeatureLayerAssociation_(t,e){this.featureLayerAssociation_[(0,g.sq)(t)]=e}getFeatures(){return this.features_}getHitTolerance(){return this.hitTolerance_}getLayer(t){return this.featureLayerAssociation_[(0,g.sq)(t)]}setHitTolerance(t){this.hitTolerance_=t}setMap(t){const e=this.getMap();e&&this.style_&&this.features_.forEach(this.restorePreviousStyle_.bind(this)),super.setMap(t),t?(this.features_.addEventListener(r.Z.ADD,this.boundAddFeature_),this.features_.addEventListener(r.Z.REMOVE,this.boundRemoveFeature_),this.style_&&this.features_.forEach(this.applySelectedStyle_.bind(this))):(this.features_.removeEventListener(r.Z.ADD,this.boundAddFeature_),this.features_.removeEventListener(r.Z.REMOVE,this.boundRemoveFeature_))}addFeature_(t){const e=t.element;if(this.style_&&this.applySelectedStyle_(e),!this.getLayer(e)){const t=this.getMap().getAllLayers().find((function(t){if(t instanceof l["default"]&&t.getSource()&&t.getSource().hasFeature(e))return t}));t&&this.addFeatureLayerAssociation_(e,t)}}removeFeature_(t){this.style_&&this.restorePreviousStyle_(t.element)}getStyle(){return this.style_}applySelectedStyle_(t){const e=(0,g.sq)(t);e in m||(m[e]=t.getStyle()),t.setStyle(this.style_)}restorePreviousStyle_(t){const e=this.getMap().getInteractions().getArray();for(let s=e.length-1;s>=0;--s){const i=e[s];if(i!==this&&i instanceof _&&i.getStyle()&&-1!==i.getFeatures().getArray().lastIndexOf(t))return void t.setStyle(i.getStyle())}const i=(0,g.sq)(t);t.setStyle(m[i]),delete m[i]}removeFeatureLayerAssociation_(t){delete this.featureLayerAssociation_[(0,g.sq)(t)]}handleEvent(t){if(!this.condition_(t))return!0;const e=this.addCondition_(t),i=this.removeCondition_(t),s=this.toggleCondition_(t),r=!e&&!i&&!s,n=t.map,a=this.getFeatures(),l=[],h=[];if(r){(0,d.Z)(this.featureLayerAssociation_),n.forEachFeatureAtPixel(t.pixel,((t,e)=>{if(t instanceof o["default"]&&this.filter_(t,e))return this.addFeatureLayerAssociation_(t,e),h.push(t),!this.multi_}),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(let t=a.getLength()-1;t>=0;--t){const e=a.item(t),i=h.indexOf(e);i>-1?h.splice(i,1):(a.remove(e),l.push(e))}0!==h.length&&a.extend(h)}else{n.forEachFeatureAtPixel(t.pixel,((t,r)=>{if(t instanceof o["default"]&&this.filter_(t,r))return!e&&!s||a.getArray().includes(t)?(i||s)&&a.getArray().includes(t)&&(l.push(t),this.removeFeatureLayerAssociation_(t)):(this.addFeatureLayerAssociation_(t,r),h.push(t)),!this.multi_}),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(let t=l.length-1;t>=0;--t)a.remove(l[t]);a.extend(h)}return(h.length>0||l.length>0)&&this.dispatchEvent(new p(y.SELECT,h,l,t)),!0}}function C(){const t=(0,u.createEditingStyle)();return(0,c.l7)(t["Polygon"],t["LineString"]),(0,c.l7)(t["GeometryCollection"],t["LineString"]),function(e){return e.getGeometry()?t[e.getGeometry().getType()]:null}}const F=_}}]);
//# sourceMappingURL=4717.edbb0b22.js.map