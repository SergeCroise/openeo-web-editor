"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[4832],{24832:(t,e,r)=>{r.d(e,{Z:()=>_});var o=r(79879),n=r(43334),i=r(28641),s=r(98683),a=r(99857),u=r(7517),l=r(92371),h=r(22556);const c={mixins:[n.Z],methods:{addGeoJson(t,e=!1,r="GeoJSON",o=!0){let n;n=t instanceof h.Z?t:this.createGeoJsonSource(t,this.map.getView().getProjection());let a=new l.Z({title:r,source:n});!o&&this.removeLayerFill&&this.removeLayerFill(a),this.map.addLayer(a);let c=n.getExtent();if((0,i.xb)(c)||this.map.getView().fit(c,this.getFitOptions()),e){var p=new u.Z({hitTolerance:5,multi:!1,condition:s.Kf,layers:[a]});p.on("select",this.onSelect),this.map.addInteraction(p)}return a},onSelect(t){if(t.selected.length>0){let e=t.selected[0],r=o.Z.omitFromObject(e.getProperties(),["geometry"]),n=e.getId()||"Feature Properties";this.broadcast("showDataModal",r,n)}},createGeoJsonSource(t,e){let r=[];return o.Z.detectGeoJson(t)&&(r=(new a.Z).readFeatures(t,{featureProjection:e})),new h.Z({features:r,wrapX:!1})}}},p=c;var f,d,y=r(1001),g=(0,y.Z)(p,f,d,!1,null,null,null);const _=g.exports},99857:(t,e,r)=>{r.d(e,{Z:()=>K});var o=r(81090),n=r(85487),i=r(71694),s=r(28641),a=r(65818),u=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),l=function(t){function e(e){var r=t.call(this)||this;return r.geometries_=e||null,r.changeEventsKeys_=[],r.listenGeometriesChange_(),r}return u(e,t),e.prototype.unlistenGeometriesChange_=function(){this.changeEventsKeys_.forEach(a.bN),this.changeEventsKeys_.length=0},e.prototype.listenGeometriesChange_=function(){if(this.geometries_)for(var t=0,e=this.geometries_.length;t<e;++t)this.changeEventsKeys_.push((0,a.oL)(this.geometries_[t],n.Z.CHANGE,this.changed,this))},e.prototype.clone=function(){var t=new e(null);return t.setGeometries(this.geometries_),t.applyProperties(this),t},e.prototype.closestPointXY=function(t,e,r,o){if(o<(0,s.qf)(this.getExtent(),t,e))return o;for(var n=this.geometries_,i=0,a=n.length;i<a;++i)o=n[i].closestPointXY(t,e,r,o);return o},e.prototype.containsXY=function(t,e){for(var r=this.geometries_,o=0,n=r.length;o<n;++o)if(r[o].containsXY(t,e))return!0;return!1},e.prototype.computeExtent=function(t){(0,s.YN)(t);for(var e=this.geometries_,r=0,o=e.length;r<o;++r)(0,s.l7)(t,e[r].getExtent());return t},e.prototype.getGeometries=function(){return h(this.geometries_)},e.prototype.getGeometriesArray=function(){return this.geometries_},e.prototype.getGeometriesArrayRecursive=function(){for(var t=[],e=this.geometries_,r=0,o=e.length;r<o;++r)e[r].getType()===this.getType()?t=t.concat(e[r].getGeometriesArrayRecursive()):t.push(e[r]);return t},e.prototype.getSimplifiedGeometry=function(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&t<this.simplifiedGeometryMaxMinSquaredTolerance)return this;for(var r=[],o=this.geometries_,n=!1,i=0,s=o.length;i<s;++i){var a=o[i],u=a.getSimplifiedGeometry(t);r.push(u),u!==a&&(n=!0)}if(n){var l=new e(null);return l.setGeometriesArray(r),l}return this.simplifiedGeometryMaxMinSquaredTolerance=t,this},e.prototype.getType=function(){return"GeometryCollection"},e.prototype.intersectsExtent=function(t){for(var e=this.geometries_,r=0,o=e.length;r<o;++r)if(e[r].intersectsExtent(t))return!0;return!1},e.prototype.isEmpty=function(){return 0===this.geometries_.length},e.prototype.rotate=function(t,e){for(var r=this.geometries_,o=0,n=r.length;o<n;++o)r[o].rotate(t,e);this.changed()},e.prototype.scale=function(t,e,r){var o=r;o||(o=(0,s.qg)(this.getExtent()));for(var n=this.geometries_,i=0,a=n.length;i<a;++i)n[i].scale(t,e,o);this.changed()},e.prototype.setGeometries=function(t){this.setGeometriesArray(h(t))},e.prototype.setGeometriesArray=function(t){this.unlistenGeometriesChange_(),this.geometries_=t,this.listenGeometriesChange_(),this.changed()},e.prototype.applyTransform=function(t){for(var e=this.geometries_,r=0,o=e.length;r<o;++r)e[r].applyTransform(t);this.changed()},e.prototype.translate=function(t,e){for(var r=this.geometries_,o=0,n=r.length;o<n;++o)r[o].translate(t,e);this.changed()},e.prototype.disposeInternal=function(){this.unlistenGeometriesChange_(),t.prototype.disposeInternal.call(this)},e}(i.Z);function h(t){for(var e=[],r=0,o=t.length;r<o;++r)e.push(t[r].clone());return e}const c=l;var p=r(58375),f=r(74187),d=r(69374),y=r(63432),g=function(){function t(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.supportedMediaTypes=null}return t.prototype.getReadOptions=function(t,e){var r;if(e){var o=e.dataProjection?(0,y.U2)(e.dataProjection):this.readProjection(t);e.extent&&o&&o.getUnits()===p.ZP.TILE_PIXELS&&(o=(0,y.U2)(o),o.setWorldExtent(e.extent)),r={dataProjection:o,featureProjection:e.featureProjection}}return this.adaptOptions(r)},t.prototype.adaptOptions=function(t){return(0,d.f0)({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection},t)},t.prototype.getType=function(){return(0,f.O3)()},t.prototype.readFeature=function(t,e){return(0,f.O3)()},t.prototype.readFeatures=function(t,e){return(0,f.O3)()},t.prototype.readGeometry=function(t,e){return(0,f.O3)()},t.prototype.readProjection=function(t){return(0,f.O3)()},t.prototype.writeFeature=function(t,e){return(0,f.O3)()},t.prototype.writeFeatures=function(t,e){return(0,f.O3)()},t.prototype.writeGeometry=function(t,e){return(0,f.O3)()},t}();const _=g;function v(t,e,r){var o,n=r?(0,y.U2)(r.featureProjection):null,i=r?(0,y.U2)(r.dataProjection):null;if(o=n&&i&&!(0,y.OP)(n,i)?(e?t.clone():t).transform(e?n:i,e?i:n):t,e&&r&&void 0!==r.decimals){var s=Math.pow(10,r.decimals),a=function(t){for(var e=0,r=t.length;e<r;++e)t[e]=Math.round(t[e]*s)/s;return t};o===t&&(o=t.clone()),o.applyTransform(a)}return o}var m=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),C=function(t){function e(){return t.call(this)||this}return m(e,t),e.prototype.getType=function(){return"json"},e.prototype.readFeature=function(t,e){return this.readFeatureFromObject(P(t),this.getReadOptions(t,e))},e.prototype.readFeatures=function(t,e){return this.readFeaturesFromObject(P(t),this.getReadOptions(t,e))},e.prototype.readFeatureFromObject=function(t,e){return(0,f.O3)()},e.prototype.readFeaturesFromObject=function(t,e){return(0,f.O3)()},e.prototype.readGeometry=function(t,e){return this.readGeometryFromObject(P(t),this.getReadOptions(t,e))},e.prototype.readGeometryFromObject=function(t,e){return(0,f.O3)()},e.prototype.readProjection=function(t){return this.readProjectionFromObject(P(t))},e.prototype.readProjectionFromObject=function(t){return(0,f.O3)()},e.prototype.writeFeature=function(t,e){return JSON.stringify(this.writeFeatureObject(t,e))},e.prototype.writeFeatureObject=function(t,e){return(0,f.O3)()},e.prototype.writeFeatures=function(t,e){return JSON.stringify(this.writeFeaturesObject(t,e))},e.prototype.writeFeaturesObject=function(t,e){return(0,f.O3)()},e.prototype.writeGeometry=function(t,e){return JSON.stringify(this.writeGeometryObject(t,e))},e.prototype.writeGeometryObject=function(t,e){return(0,f.O3)()},e}(_);function P(t){if("string"===typeof t){var e=JSON.parse(t);return e||null}return null!==t?t:null}const F=C;var O=r(92083),w=r(7403),b=r(36259),j=r(32562),S=r(60188),E=r(2033),G=r(99515),x=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),Z=function(t){function e(e){var r=this,o=e||{};return r=t.call(this)||this,r.dataProjection=(0,y.U2)(o.dataProjection?o.dataProjection:"EPSG:4326"),o.featureProjection&&(r.defaultFeatureProjection=(0,y.U2)(o.featureProjection)),r.geometryName_=o.geometryName,r.extractGeometryName_=o.extractGeometryName,r.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"],r}return x(e,t),e.prototype.readFeatureFromObject=function(t,e){var r=null;r="Feature"===t["type"]?t:{type:"Feature",geometry:t,properties:null};var n=A(r["geometry"],e),i=new o.Z;return this.geometryName_?i.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in r!==void 0&&i.setGeometryName(r["geometry_name"]),i.setGeometry(n),"id"in r&&i.setId(r["id"]),r["properties"]&&i.setProperties(r["properties"],!0),i},e.prototype.readFeaturesFromObject=function(t,e){var r=t,o=null;if("FeatureCollection"===r["type"]){var n=t;o=[];for(var i=n["features"],s=0,a=i.length;s<a;++s)o.push(this.readFeatureFromObject(i[s],e))}else o=[this.readFeatureFromObject(t,e)];return o},e.prototype.readGeometryFromObject=function(t,e){return A(t,e)},e.prototype.readProjectionFromObject=function(t){var e,r=t["crs"];return r?"name"==r["type"]?e=(0,y.U2)(r["properties"]["name"]):"EPSG"===r["type"]?e=(0,y.U2)("EPSG:"+r["properties"]["code"]):(0,G.h)(!1,36):e=this.dataProjection,e},e.prototype.writeFeatureObject=function(t,e){e=this.adaptOptions(e);var r={type:"Feature",geometry:null,properties:null},o=t.getId();if(void 0!==o&&(r.id=o),!t.hasProperties())return r;var n=t.getProperties(),i=t.getGeometry();return i&&(r.geometry=N(i,e),delete n[t.getGeometryName()]),(0,d.xb)(n)||(r.properties=n),r},e.prototype.writeFeaturesObject=function(t,e){e=this.adaptOptions(e);for(var r=[],o=0,n=t.length;o<n;++o)r.push(this.writeFeatureObject(t[o],e));return{type:"FeatureCollection",features:r}},e.prototype.writeGeometryObject=function(t,e){return N(t,this.adaptOptions(e))},e}(F);function A(t,e){if(!t)return null;var r;switch(t["type"]){case"Point":r=L(t);break;case"LineString":r=T(t);break;case"Polygon":r=q(t);break;case"MultiPoint":r=D(t);break;case"MultiLineString":r=R(t);break;case"MultiPolygon":r=I(t);break;case"GeometryCollection":r=M(t);break;default:throw new Error("Unsupported GeoJSON type: "+t["type"])}return v(r,!1,e)}function M(t,e){var r=t["geometries"].map((function(t){return A(t,e)}));return new c(r)}function L(t){return new S.Z(t["coordinates"])}function T(t){return new O.Z(t["coordinates"])}function R(t){return new w.Z(t["coordinates"])}function D(t){return new b.Z(t["coordinates"])}function I(t){return new j.Z(t["coordinates"])}function q(t){return new E.ZP(t["coordinates"])}function N(t,e){t=v(t,!0,e);var r,o=t.getType();switch(o){case"Point":r=W(t,e);break;case"LineString":r=k(t,e);break;case"Polygon":r=H(t,e);break;case"MultiPoint":r=J(t,e);break;case"MultiLineString":r=Y(t,e);break;case"MultiPolygon":r=U(t,e);break;case"GeometryCollection":r=X(t,e);break;case"Circle":r={type:"GeometryCollection",geometries:[]};break;default:throw new Error("Unsupported geometry type: "+o)}return r}function X(t,e){var r=t.getGeometriesArray().map((function(t){var r=(0,d.f0)({},e);return delete r.featureProjection,N(t,r)}));return{type:"GeometryCollection",geometries:r}}function k(t,e){return{type:"LineString",coordinates:t.getCoordinates()}}function Y(t,e){return{type:"MultiLineString",coordinates:t.getCoordinates()}}function J(t,e){return{type:"MultiPoint",coordinates:t.getCoordinates()}}function U(t,e){var r;return e&&(r=e.rightHanded),{type:"MultiPolygon",coordinates:t.getCoordinates(r)}}function W(t,e){return{type:"Point",coordinates:t.getCoordinates()}}function H(t,e){var r;return e&&(r=e.rightHanded),{type:"Polygon",coordinates:t.getCoordinates(r)}}const K=Z},92083:(t,e,r)=>{r.d(e,{Z:()=>_});var o=r(2450),n=r(72967),i=r(53042),s=r(28641),a=r(41931),u=r(80226),l=r(65537),h=r(93032),c=r(89241),p=r(49405),f=r(63746),d=r(27374),y=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),g=function(t){function e(e,r){var o=t.call(this)||this;return o.flatMidpoint_=null,o.flatMidpointRevision_=-1,o.maxDelta_=-1,o.maxDeltaRevision_=-1,void 0===r||Array.isArray(e[0])?o.setCoordinates(e,r):o.setFlatCoordinates(r,e),o}return y(e,t),e.prototype.appendCoordinate=function(t){this.flatCoordinates?(0,l.l7)(this.flatCoordinates,t):this.flatCoordinates=t.slice(),this.changed()},e.prototype.clone=function(){var t=new e(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t},e.prototype.closestPointXY=function(t,e,r,o){return o<(0,s.qf)(this.getExtent(),t,e)?o:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,i.Bv)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,i.H$)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,e,r,o))},e.prototype.forEachSegment=function(t){return(0,h.E)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.getCoordinateAtM=function(t,e){if(this.layout!=o.Z.XYM&&this.layout!=o.Z.XYZM)return null;var r=void 0!==e&&e;return(0,p.iJ)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,r)},e.prototype.getCoordinates=function(){return(0,c.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getCoordinateAt=function(t,e){return(0,p.WW)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,this.stride)},e.prototype.getLength=function(){return(0,d.W)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getFlatMidpoint=function(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_},e.prototype.getSimplifiedGeometryInternal=function(t){var r=[];return r.length=(0,u.dt)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,r,0),new e(r,o.Z.XY)},e.prototype.getType=function(){return"LineString"},e.prototype.intersectsExtent=function(t){return(0,f.Kz)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,a.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(n.ZP);const _=g},7403:(t,e,r)=>{r.d(e,{Z:()=>g});var o=r(2450),n=r(92083),i=r(72967),s=r(53042),a=r(28641),u=r(41931),l=r(80226),h=r(65537),c=r(89241),p=r(49405),f=r(63746),d=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),y=function(t){function e(e,r,o){var n=t.call(this)||this;if(n.ends_=[],n.maxDelta_=-1,n.maxDeltaRevision_=-1,Array.isArray(e[0]))n.setCoordinates(e,r);else if(void 0!==r&&o)n.setFlatCoordinates(r,e),n.ends_=o;else{for(var i=n.getLayout(),s=e,a=[],u=[],l=0,c=s.length;l<c;++l){var p=s[l];0===l&&(i=p.getLayout()),(0,h.l7)(a,p.getFlatCoordinates()),u.push(a.length)}n.setFlatCoordinates(i,a),n.ends_=u}return n}return d(e,t),e.prototype.appendLineString=function(t){this.flatCoordinates?(0,h.l7)(this.flatCoordinates,t.getFlatCoordinates().slice()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},e.prototype.clone=function(){var t=new e(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t},e.prototype.closestPointXY=function(t,e,r,o){return o<(0,a.qf)(this.getExtent(),t,e)?o:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,s.Af)(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,s.Xl)(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,e,r,o))},e.prototype.getCoordinateAtM=function(t,e,r){if(this.layout!=o.Z.XYM&&this.layout!=o.Z.XYZM||0===this.flatCoordinates.length)return null;var n=void 0!==e&&e,i=void 0!==r&&r;return(0,p.dG)(this.flatCoordinates,0,this.ends_,this.stride,t,n,i)},e.prototype.getCoordinates=function(){return(0,c.o1)(this.flatCoordinates,0,this.ends_,this.stride)},e.prototype.getEnds=function(){return this.ends_},e.prototype.getLineString=function(t){return t<0||this.ends_.length<=t?null:new n.Z(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)},e.prototype.getLineStrings=function(){for(var t=this.flatCoordinates,e=this.ends_,r=this.layout,o=[],i=0,s=0,a=e.length;s<a;++s){var u=e[s],l=new n.Z(t.slice(i,u),r);o.push(l),i=u}return o},e.prototype.getFlatMidpoints=function(){for(var t=[],e=this.flatCoordinates,r=0,o=this.ends_,n=this.stride,i=0,s=o.length;i<s;++i){var a=o[i],u=(0,p.WW)(e,r,a,n,.5);(0,h.l7)(t,u),r=a}return t},e.prototype.getSimplifiedGeometryInternal=function(t){var r=[],n=[];return r.length=(0,l.UJ)(this.flatCoordinates,0,this.ends_,this.stride,t,r,0,n),new e(r,o.Z.XY,n)},e.prototype.getType=function(){return"MultiLineString"},e.prototype.intersectsExtent=function(t){return(0,f.AW)(this.flatCoordinates,0,this.ends_,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);var r=(0,u._5)(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===r.length?0:r[r.length-1],this.changed()},e}(i.ZP);const g=y},36259:(t,e,r)=>{r.d(e,{Z:()=>p});var o=r(60188),n=r(72967),i=r(28641),s=r(41931),a=r(65537),u=r(89241),l=r(33983),h=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),c=function(t){function e(e,r){var o=t.call(this)||this;return r&&!Array.isArray(e[0])?o.setFlatCoordinates(r,e):o.setCoordinates(e,r),o}return h(e,t),e.prototype.appendPoint=function(t){this.flatCoordinates?(0,a.l7)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.changed()},e.prototype.clone=function(){var t=new e(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t},e.prototype.closestPointXY=function(t,e,r,o){if(o<(0,i.qf)(this.getExtent(),t,e))return o;for(var n=this.flatCoordinates,s=this.stride,a=0,u=n.length;a<u;a+=s){var h=(0,l.bI)(t,e,n[a],n[a+1]);if(h<o){o=h;for(var c=0;c<s;++c)r[c]=n[a+c];r.length=s}}return o},e.prototype.getCoordinates=function(){return(0,u.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getPoint=function(t){var e=this.flatCoordinates?this.flatCoordinates.length/this.stride:0;return t<0||e<=t?null:new o.Z(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)},e.prototype.getPoints=function(){for(var t=this.flatCoordinates,e=this.layout,r=this.stride,n=[],i=0,s=t.length;i<s;i+=r){var a=new o.Z(t.slice(i,i+r),e);n.push(a)}return n},e.prototype.getType=function(){return"MultiPoint"},e.prototype.intersectsExtent=function(t){for(var e=this.flatCoordinates,r=this.stride,o=0,n=e.length;o<n;o+=r){var s=e[o],a=e[o+1];if((0,i.jE)(t,s,a))return!0}return!1},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,s.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(n.ZP);const p=c},32562:(t,e,r)=>{r.d(e,{Z:()=>P});var o=r(2450),n=r(36259),i=r(2033),s=r(72967),a=r(53042),u=r(28641),l=r(41931),h=r(65537),c=r(73448),p=r(89241),f=r(63746),d=r(74772),y=r(14078);function g(t,e,r,o){for(var n=[],i=(0,u.lJ)(),s=0,a=r.length;s<a;++s){var l=r[s];i=(0,u.GN)(t,e,l[0],o),n.push((i[0]+i[2])/2,(i[1]+i[3])/2),e=l[l.length-1]}return n}var _=r(79679),v=r(80226),m=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),C=function(t){function e(e,r,o){var n=t.call(this)||this;if(n.endss_=[],n.flatInteriorPointsRevision_=-1,n.flatInteriorPoints_=null,n.maxDelta_=-1,n.maxDeltaRevision_=-1,n.orientedRevision_=-1,n.orientedFlatCoordinates_=null,!o&&!Array.isArray(e[0])){for(var i=n.getLayout(),s=e,a=[],u=[],l=0,c=s.length;l<c;++l){var p=s[l];0===l&&(i=p.getLayout());for(var f=a.length,d=p.getEnds(),y=0,g=d.length;y<g;++y)d[y]+=f;(0,h.l7)(a,p.getFlatCoordinates()),u.push(d)}r=i,e=a,o=u}return void 0!==r&&o?(n.setFlatCoordinates(r,e),n.endss_=o):n.setCoordinates(e,r),n}return m(e,t),e.prototype.appendPolygon=function(t){var e;if(this.flatCoordinates){var r=this.flatCoordinates.length;(0,h.l7)(this.flatCoordinates,t.getFlatCoordinates()),e=t.getEnds().slice();for(var o=0,n=e.length;o<n;++o)e[o]+=r}else this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();this.endss_.push(e),this.changed()},e.prototype.clone=function(){for(var t=this.endss_.length,r=new Array(t),o=0;o<t;++o)r[o]=this.endss_[o].slice();var n=new e(this.flatCoordinates.slice(),this.layout,r);return n.applyProperties(this),n},e.prototype.closestPointXY=function(t,e,r,o){return o<(0,u.qf)(this.getExtent(),t,e)?o:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,a.sD)(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,a.gI)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,r,o))},e.prototype.containsXY=function(t,e){return(0,_.Zl)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)},e.prototype.getArea=function(){return(0,y.Eu)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)},e.prototype.getCoordinates=function(t){var e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),(0,d.dL)(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,(0,p.ug)(e,0,this.endss_,this.stride)},e.prototype.getEndss=function(){return this.endss_},e.prototype.getFlatInteriorPoints=function(){if(this.flatInteriorPointsRevision_!=this.getRevision()){var t=g(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=(0,c.U)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_},e.prototype.getInteriorPoints=function(){return new n.Z(this.getFlatInteriorPoints().slice(),o.Z.XYM)},e.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var t=this.flatCoordinates;(0,d.Oj)(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=(0,d.dL)(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},e.prototype.getSimplifiedGeometryInternal=function(t){var r=[],n=[];return r.length=(0,v.Pp)(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),r,0,n),new e(r,o.Z.XY,n)},e.prototype.getPolygon=function(t){if(t<0||this.endss_.length<=t)return null;var e;if(0===t)e=0;else{var r=this.endss_[t-1];e=r[r.length-1]}var o=this.endss_[t].slice(),n=o[o.length-1];if(0!==e)for(var s=0,a=o.length;s<a;++s)o[s]-=e;return new i.ZP(this.flatCoordinates.slice(e,n),this.layout,o)},e.prototype.getPolygons=function(){for(var t=this.layout,e=this.flatCoordinates,r=this.endss_,o=[],n=0,s=0,a=r.length;s<a;++s){var u=r[s].slice(),l=u[u.length-1];if(0!==n)for(var h=0,c=u.length;h<c;++h)u[h]-=n;var p=new i.ZP(e.slice(n,l),t,u);o.push(p),n=l}return o},e.prototype.getType=function(){return"MultiPolygon"},e.prototype.intersectsExtent=function(t){return(0,f.oW)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);var r=(0,l.QT)(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===r.length)this.flatCoordinates.length=0;else{var o=r[r.length-1];this.flatCoordinates.length=0===o.length?0:o[o.length-1]}this.changed()},e}(s.ZP);const P=C},49405:(t,e,r)=>{r.d(e,{WW:()=>i,dG:()=>a,iJ:()=>s});var o=r(65537),n=r(33983);function i(t,e,r,i,s,a,u){var l,h,c=(r-e)/i;if(1===c)l=e;else if(2===c)l=e,h=s;else if(0!==c){for(var p=t[e],f=t[e+1],d=0,y=[0],g=e+i;g<r;g+=i){var _=t[g],v=t[g+1];d+=Math.sqrt((_-p)*(_-p)+(v-f)*(v-f)),y.push(d),p=_,f=v}var m=s*d,C=(0,o.ry)(y,m);C<0?(h=(m-y[-C-2])/(y[-C-1]-y[-C-2]),l=e+(-C-2)*i):l=e+C*i}var P=u>1?u:2,F=a||new Array(P);for(g=0;g<P;++g)F[g]=void 0===l?NaN:void 0===h?t[l+g]:(0,n.t7)(t[l+g],t[l+i+g],h);return F}function s(t,e,r,o,i,s){if(r==e)return null;var a;if(i<t[e+o-1])return s?(a=t.slice(e,e+o),a[o-1]=i,a):null;if(t[r-1]<i)return s?(a=t.slice(r-o,r),a[o-1]=i,a):null;if(i==t[e+o-1])return t.slice(e,e+o);var u=e/o,l=r/o;while(u<l){var h=u+l>>1;i<t[(h+1)*o-1]?l=h:u=h+1}var c=t[u*o-1];if(i==c)return t.slice((u-1)*o,(u-1)*o+o);var p=t[(u+1)*o-1],f=(i-c)/(p-c);a=[];for(var d=0;d<o-1;++d)a.push((0,n.t7)(t[(u-1)*o+d],t[u*o+d],f));return a.push(i),a}function a(t,e,r,o,n,i,a){if(a)return s(t,e,r[r.length-1],o,n,i);var u;if(n<t[o-1])return i?(u=t.slice(0,o),u[o-1]=n,u):null;if(t[t.length-1]<n)return i?(u=t.slice(t.length-o),u[o-1]=n,u):null;for(var l=0,h=r.length;l<h;++l){var c=r[l];if(e!=c){if(n<t[e+o-1])return null;if(n<=t[c-1])return s(t,e,c,o,n,!1);e=c}}return null}},7517:(t,e,r)=>{r.d(e,{Z:()=>C});var o=r(78714),n=r(42071),i=r(291),s=r(47182),a=r(92371),u=r(36885),l=r(69374),h=r(47539),c=r(65537),p=r(74187),f=r(98683),d=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),y={SELECT:"select"},g=function(t){function e(e,r,o,n){var i=t.call(this,e)||this;return i.selected=r,i.deselected=o,i.mapBrowserEvent=n,i}return d(e,t),e}(i.ZP),_={},v=function(t){function e(e){var r=t.call(this)||this;r.on,r.once,r.un;var n,i=e||{};if(r.boundAddFeature_=r.addFeature_.bind(r),r.boundRemoveFeature_=r.removeFeature_.bind(r),r.condition_=i.condition?i.condition:f.Kf,r.addCondition_=i.addCondition?i.addCondition:f.Fi,r.removeCondition_=i.removeCondition?i.removeCondition:f.Fi,r.toggleCondition_=i.toggleCondition?i.toggleCondition:f.vY,r.multi_=!!i.multi&&i.multi,r.filter_=i.filter?i.filter:u.uX,r.hitTolerance_=i.hitTolerance?i.hitTolerance:0,r.style_=void 0!==i.style?i.style:m(),r.features_=i.features||new o.Z,i.layers)if("function"===typeof i.layers)n=i.layers;else{var s=i.layers;n=function(t){return(0,c.q9)(s,t)}}else n=u.uX;return r.layerFilter_=n,r.featureLayerAssociation_={},r}return d(e,t),e.prototype.addFeatureLayerAssociation_=function(t,e){this.featureLayerAssociation_[(0,p.sq)(t)]=e},e.prototype.getFeatures=function(){return this.features_},e.prototype.getHitTolerance=function(){return this.hitTolerance_},e.prototype.getLayer=function(t){return this.featureLayerAssociation_[(0,p.sq)(t)]},e.prototype.setHitTolerance=function(t){this.hitTolerance_=t},e.prototype.setMap=function(e){var r=this.getMap();r&&this.style_&&this.features_.forEach(this.restorePreviousStyle_.bind(this)),t.prototype.setMap.call(this,e),e?(this.features_.addEventListener(n.Z.ADD,this.boundAddFeature_),this.features_.addEventListener(n.Z.REMOVE,this.boundRemoveFeature_),this.style_&&this.features_.forEach(this.applySelectedStyle_.bind(this))):(this.features_.removeEventListener(n.Z.ADD,this.boundAddFeature_),this.features_.removeEventListener(n.Z.REMOVE,this.boundRemoveFeature_))},e.prototype.addFeature_=function(t){var e=t.element;if(this.style_&&this.applySelectedStyle_(e),!this.getLayer(e)){var r=this.getMap().getAllLayers().find((function(t){if(t instanceof a.Z&&t.getSource()&&t.getSource().hasFeature(e))return t}));r&&this.addFeatureLayerAssociation_(e,r)}},e.prototype.removeFeature_=function(t){var e=t.element;this.style_&&this.restorePreviousStyle_(e)},e.prototype.getStyle=function(){return this.style_},e.prototype.applySelectedStyle_=function(t){var e=(0,p.sq)(t);e in _||(_[e]=t.getStyle()),t.setStyle(this.style_)},e.prototype.restorePreviousStyle_=function(t){for(var r=this.getMap().getInteractions().getArray(),o=r.length-1;o>=0;--o){var n=r[o];if(n!==this&&n instanceof e&&n.getStyle()&&-1!==n.getFeatures().getArray().lastIndexOf(t))return void t.setStyle(n.getStyle())}var i=(0,p.sq)(t);t.setStyle(_[i]),delete _[i]},e.prototype.removeFeatureLayerAssociation_=function(t){delete this.featureLayerAssociation_[(0,p.sq)(t)]},e.prototype.handleEvent=function(t){if(!this.condition_(t))return!0;var e=this.addCondition_(t),r=this.removeCondition_(t),o=this.toggleCondition_(t),n=!e&&!r&&!o,i=t.map,s=this.getFeatures(),a=[],u=[];if(n){(0,l.ZH)(this.featureLayerAssociation_),i.forEachFeatureAtPixel(t.pixel,function(t,e){if(this.filter_(t,e))return this.addFeatureLayerAssociation_(t,e),u.push(t),!this.multi_}.bind(this),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(var h=s.getLength()-1;h>=0;--h){var p=s.item(h),f=u.indexOf(p);f>-1?u.splice(f,1):(s.remove(p),a.push(p))}0!==u.length&&s.extend(u)}else{i.forEachFeatureAtPixel(t.pixel,function(t,n){if(this.filter_(t,n))return!e&&!o||(0,c.q9)(s.getArray(),t)?(r||o)&&(0,c.q9)(s.getArray(),t)&&(a.push(t),this.removeFeatureLayerAssociation_(t)):(this.addFeatureLayerAssociation_(t,n),u.push(t)),!this.multi_}.bind(this),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(var d=a.length-1;d>=0;--d)s.remove(a[d]);s.extend(u)}return(u.length>0||a.length>0)&&this.dispatchEvent(new g(y.SELECT,u,a,t)),!0},e}(s.ZP);function m(){var t=(0,h.Ly)();return(0,c.l7)(t["Polygon"],t["LineString"]),(0,c.l7)(t["GeometryCollection"],t["LineString"]),function(e){return e.getGeometry()?t[e.getGeometry().getType()]:null}}const C=v}}]);
//# sourceMappingURL=4832.d4c76b6d.js.map