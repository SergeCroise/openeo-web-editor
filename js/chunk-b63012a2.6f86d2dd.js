(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b63012a2","chunk-b63012a2","chunk-b63012a2","chunk-b63012a2"],{"30d1":function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return l}));var i=r("3749"),n=r("f623"),a=r("869f"),s=r("1300"),o=.5,h={Point:T,LineString:v,Polygon:b,MultiPoint:E,MultiLineString:m,MultiPolygon:y,GeometryCollection:_,Circle:d};function u(e,t){return parseInt(Object(s["c"])(e),10)-parseInt(Object(s["c"])(t),10)}function c(e,t){var r=f(e,t);return r*r}function f(e,t){return o*e/t}function d(e,t,r,n,a){var s=r.getFill(),o=r.getStroke();if(s||o){var h=e.getBuilder(r.getZIndex(),i["a"].CIRCLE);h.setFillStrokeStyle(s,o),h.drawCircle(t,n)}var u=r.getText();if(u&&u.getText()){var c=(a||e).getBuilder(r.getZIndex(),i["a"].TEXT);c.setTextStyle(u),c.drawText(t,n)}}function l(e,t,r,i,n,s,o){var h=!1,u=r.getImage();if(u){var c=u.getImageState();c==a["a"].LOADED||c==a["a"].ERROR?u.unlistenImageChange(n):(c==a["a"].IDLE&&u.load(),c=u.getImageState(),u.listenImageChange(n),h=!0)}return p(e,t,r,i,s,o),h}function p(e,t,r,i,n,a){var s=r.getGeometryFunction()(t);if(s){var o=s.simplifyTransformed(i,n),u=r.getRenderer();if(u)g(e,o,r,t);else{var c=h[o.getType()];c(e,o,r,t,a)}}}function g(e,t,r,a){if(t.getType()!=n["a"].GEOMETRY_COLLECTION){var s=e.getBuilder(r.getZIndex(),i["a"].DEFAULT);s.drawCustom(t,a,r.getRenderer(),r.getHitDetectionRenderer())}else for(var o=t.getGeometries(),h=0,u=o.length;h<u;++h)g(e,o[h],r,a)}function _(e,t,r,i,n){var a,s,o=t.getGeometriesArray();for(a=0,s=o.length;a<s;++a){var u=h[o[a].getType()];u(e,o[a],r,i,n)}}function v(e,t,r,n,a){var s=r.getStroke();if(s){var o=e.getBuilder(r.getZIndex(),i["a"].LINE_STRING);o.setFillStrokeStyle(null,s),o.drawLineString(t,n)}var h=r.getText();if(h&&h.getText()){var u=(a||e).getBuilder(r.getZIndex(),i["a"].TEXT);u.setTextStyle(h),u.drawText(t,n)}}function m(e,t,r,n,a){var s=r.getStroke();if(s){var o=e.getBuilder(r.getZIndex(),i["a"].LINE_STRING);o.setFillStrokeStyle(null,s),o.drawMultiLineString(t,n)}var h=r.getText();if(h&&h.getText()){var u=(a||e).getBuilder(r.getZIndex(),i["a"].TEXT);u.setTextStyle(h),u.drawText(t,n)}}function y(e,t,r,n,a){var s=r.getFill(),o=r.getStroke();if(o||s){var h=e.getBuilder(r.getZIndex(),i["a"].POLYGON);h.setFillStrokeStyle(s,o),h.drawMultiPolygon(t,n)}var u=r.getText();if(u&&u.getText()){var c=(a||e).getBuilder(r.getZIndex(),i["a"].TEXT);c.setTextStyle(u),c.drawText(t,n)}}function T(e,t,r,n,s){var o,h=r.getImage(),u=r.getText();if(s&&(e=s,o=h&&u&&u.getText()?{}:void 0),h){if(h.getImageState()!=a["a"].LOADED)return;var c=e.getBuilder(r.getZIndex(),i["a"].IMAGE);c.setImageStyle(h,o),c.drawPoint(t,n)}if(u&&u.getText()){var f=e.getBuilder(r.getZIndex(),i["a"].TEXT);f.setTextStyle(u,o),f.drawText(t,n)}}function E(e,t,r,n,s){var o,h=r.getImage(),u=r.getText();if(s&&(e=s,o=h&&u&&u.getText()?{}:void 0),h){if(h.getImageState()!=a["a"].LOADED)return;var c=e.getBuilder(r.getZIndex(),i["a"].IMAGE);c.setImageStyle(h,o),c.drawMultiPoint(t,n)}if(u&&u.getText()){var f=(s||e).getBuilder(r.getZIndex(),i["a"].TEXT);f.setTextStyle(u,o),f.drawText(t,n)}}function b(e,t,r,n,a){var s=r.getFill(),o=r.getStroke();if(s||o){var h=e.getBuilder(r.getZIndex(),i["a"].POLYGON);h.setFillStrokeStyle(s,o),h.drawPolygon(t,n)}var u=r.getText();if(u&&u.getText()){var c=(a||e).getBuilder(r.getZIndex(),i["a"].TEXT);c.setTextStyle(u),c.drawText(t,n)}}},ac3a:function(e,t,r){"use strict";var i=r("ae50"),n=r("f623"),a=r("a43f"),s=r("496f"),o=r("aab2"),h=r("df4c"),u=r("faf4"),c=r("3333"),f=r("070d"),d=r("5e7e"),l=r("a896"),p=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),g={GENERATE_BUFFERS:"GENERATE_BUFFERS"},_=function(e){function t(t,r){var i=e.call(this,t)||this,n=r||{};return i.inversePixelTransform_=Object(l["c"])(),i.postProcesses_=n.postProcesses,i.uniforms_=n.uniforms,i.helper,t.addChangeListener(h["a"].MAP,i.removeHelper_.bind(i)),i.dispatchPreComposeEvent=i.dispatchPreComposeEvent.bind(i),i.dispatchPostComposeEvent=i.dispatchPostComposeEvent.bind(i),i}return p(t,e),t.prototype.dispatchPreComposeEvent=function(e,t){var r=this.getLayer();if(r.hasListener(f["a"].PRECOMPOSE)){var i=new c["a"](f["a"].PRECOMPOSE,void 0,t,e);r.dispatchEvent(i)}},t.prototype.dispatchPostComposeEvent=function(e,t){var r=this.getLayer();if(r.hasListener(f["a"].POSTCOMPOSE)){var i=new c["a"](f["a"].POSTCOMPOSE,void 0,t,e);r.dispatchEvent(i)}},t.prototype.reset=function(e){this.uniforms_=e.uniforms,this.helper&&this.helper.setUniforms(this.uniforms_)},t.prototype.removeHelper_=function(){this.helper&&(this.helper.dispose(),delete this.helper)},t.prototype.prepareFrame=function(e){if(this.getLayer().getSource()){for(var r=!0,i=-1,n=void 0,a=0,s=e.layerStatesArray.length;a<s;a++){var o=e.layerStatesArray[a].layer,h=o.getRenderer();if(h instanceof t){var u=o.getClassName();if((r||u!==n)&&(i+=1,r=!1),n=u,h===this)break}else r=!0}var c="map/"+e.mapId+"/group/"+i;this.helper&&this.helper.canvasCacheKeyMatches(c)||(this.helper&&this.helper.dispose(),this.helper=new d["c"]({postProcesses:this.postProcesses_,uniforms:this.uniforms_,canvasCacheKey:c}),n&&(this.helper.getCanvas().className=n),this.afterHelperCreated())}return this.prepareFrameInternal(e)},t.prototype.afterHelperCreated=function(){},t.prototype.prepareFrameInternal=function(e){return!0},t.prototype.disposeInternal=function(){this.removeHelper_(),e.prototype.disposeInternal.call(this)},t.prototype.dispatchRenderEvent_=function(e,t,r){var i=this.getLayer();if(i.hasListener(e)){Object(l["b"])(this.inversePixelTransform_,0,0,r.pixelRatio,-r.pixelRatio,0,0,-r.size[1]);var n=new c["a"](e,this.inversePixelTransform_,r,t);i.dispatchEvent(n)}},t.prototype.preRender=function(e,t){this.dispatchRenderEvent_(f["a"].PRERENDER,e,t)},t.prototype.postRender=function(e,t){this.dispatchRenderEvent_(f["a"].POSTRENDER,e,t)},t}(u["a"]);function v(e,t){var r=t||[],i=256,n=i-1;return r[0]=Math.floor(e/i/i/i)/n,r[1]=Math.floor(e/i/i)%i/n,r[2]=Math.floor(e/i)%i/n,r[3]=e%i/n,r}function m(e){var t=0,r=256,i=r-1;return t+=Math.round(e[0]*r*r*r*i),t+=Math.round(e[1]*r*r*i),t+=Math.round(e[2]*r*i),t+=Math.round(e[3]*i),t}var y=_,T=r("d706"),E=r("86e0"),b=r("92fa"),I=r("0af5"),S=r("7fd1"),R=r("1300"),x=r("1e8d"),O=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),C=function(e){function t(t,r){var i=this,n=r.uniforms||{},s=Object(l["c"])();n[d["b"].PROJECTION_MATRIX]=s,i=e.call(this,t,{uniforms:n,postProcesses:r.postProcesses})||this,i.sourceRevision_=-1,i.verticesBuffer_=new o["a"](E["a"],E["b"]),i.hitVerticesBuffer_=new o["a"](E["a"],E["b"]),i.indicesBuffer_=new o["a"](E["c"],E["b"]),i.vertexShader_=r.vertexShader,i.fragmentShader_=r.fragmentShader,i.program_,i.hitDetectionEnabled_=!(!r.hitFragmentShader||!r.hitVertexShader),i.hitVertexShader_=r.hitVertexShader,i.hitFragmentShader_=r.hitFragmentShader,i.hitProgram_;var h=r.attributes?r.attributes.map((function(e){return{name:"a_"+e.name,size:1,type:d["a"].FLOAT}})):[];i.attributes=[{name:"a_position",size:2,type:d["a"].FLOAT},{name:"a_index",size:1,type:d["a"].FLOAT}].concat(h),i.hitDetectionAttributes=[{name:"a_position",size:2,type:d["a"].FLOAT},{name:"a_index",size:1,type:d["a"].FLOAT},{name:"a_hitColor",size:4,type:d["a"].FLOAT},{name:"a_featureUid",size:1,type:d["a"].FLOAT}].concat(h),i.customAttributes=r.attributes?r.attributes:[],i.previousExtent_=Object(I["j"])(),i.currentTransform_=s,i.renderTransform_=Object(l["c"])(),i.invertRenderTransform_=Object(l["c"])(),i.renderInstructions_=new Float32Array(0),i.hitRenderInstructions_=new Float32Array(0),i.hitRenderTarget_,i.worker_=Object(S["a"])(),i.worker_.addEventListener("message",function(e){var t=e.data;if(t.type===g.GENERATE_BUFFERS){var r=t.projectionTransform;t.hitDetection?(this.hitVerticesBuffer_.fromArrayBuffer(t.vertexBuffer),this.helper.flushBufferData(this.hitVerticesBuffer_)):(this.verticesBuffer_.fromArrayBuffer(t.vertexBuffer),this.helper.flushBufferData(this.verticesBuffer_)),this.indicesBuffer_.fromArrayBuffer(t.indexBuffer),this.helper.flushBufferData(this.indicesBuffer_),this.renderTransform_=r,Object(l["d"])(this.invertRenderTransform_,this.renderTransform_),t.hitDetection?this.hitRenderInstructions_=new Float32Array(e.data.renderInstructions):this.renderInstructions_=new Float32Array(e.data.renderInstructions),this.getLayer().changed()}}.bind(i)),i.featureCache_={},i.featureCount_=0;var u=i.getLayer().getSource();return i.sourceListenKeys_=[Object(x["a"])(u,a["a"].ADDFEATURE,i.handleSourceFeatureAdded_,i),Object(x["a"])(u,a["a"].CHANGEFEATURE,i.handleSourceFeatureChanged_,i),Object(x["a"])(u,a["a"].REMOVEFEATURE,i.handleSourceFeatureDelete_,i),Object(x["a"])(u,a["a"].CLEAR,i.handleSourceFeatureClear_,i)],u.forEachFeature(function(e){this.featureCache_[Object(R["c"])(e)]={feature:e,properties:e.getProperties(),geometry:e.getGeometry()},this.featureCount_++}.bind(i)),i}return O(t,e),t.prototype.afterHelperCreated=function(){this.program_=this.helper.getProgram(this.fragmentShader_,this.vertexShader_),this.hitDetectionEnabled_&&(this.hitProgram_=this.helper.getProgram(this.hitFragmentShader_,this.hitVertexShader_),this.hitRenderTarget_=new T["a"](this.helper))},t.prototype.handleSourceFeatureAdded_=function(e){var t=e.feature;this.featureCache_[Object(R["c"])(t)]={feature:t,properties:t.getProperties(),geometry:t.getGeometry()},this.featureCount_++},t.prototype.handleSourceFeatureChanged_=function(e){var t=e.feature;this.featureCache_[Object(R["c"])(t)]={feature:t,properties:t.getProperties(),geometry:t.getGeometry()}},t.prototype.handleSourceFeatureDelete_=function(e){var t=e.feature;delete this.featureCache_[Object(R["c"])(t)],this.featureCount_--},t.prototype.handleSourceFeatureClear_=function(){this.featureCache_={},this.featureCount_=0},t.prototype.renderFrame=function(e){var t=this.helper.getGL();this.preRender(t,e);var r=this.indicesBuffer_.getSize();this.helper.drawElements(0,r),this.helper.finalizeDraw(e,this.dispatchPreComposeEvent,this.dispatchPostComposeEvent);var i=this.helper.getCanvas();return this.hitDetectionEnabled_&&(this.renderHitDetection(e),this.hitRenderTarget_.clearCachedData()),this.postRender(t,e),i},t.prototype.prepareFrameInternal=function(e){var t=this.getLayer(),r=t.getSource(),n=e.viewState,a=!e.viewHints[s["a"].ANIMATING]&&!e.viewHints[s["a"].INTERACTING],o=!Object(I["o"])(this.previousExtent_,e.extent),h=this.sourceRevision_<r.getRevision();if(h&&(this.sourceRevision_=r.getRevision()),a&&(o||h)){var u=n.projection,c=n.resolution,f=t instanceof i["a"]?t.getRenderBuffer():0,d=Object(I["c"])(e.extent,f*c);r.loadFeatures(d,c,u),this.rebuildBuffers_(e),this.previousExtent_=e.extent.slice()}return this.helper.makeProjectionTransform(e,this.currentTransform_),Object(l["f"])(this.currentTransform_,this.invertRenderTransform_),this.helper.useProgram(this.program_),this.helper.prepareDraw(e),this.helper.bindBuffer(this.verticesBuffer_),this.helper.bindBuffer(this.indicesBuffer_),this.helper.enableAttributes(this.attributes),!0},t.prototype.rebuildBuffers_=function(e){var t=Object(l["c"])();this.helper.makeProjectionTransform(e,t);var r,i,a=(2+this.customAttributes.length)*this.featureCount_;if(this.renderInstructions_&&this.renderInstructions_.length===a||(this.renderInstructions_=new Float32Array(a)),this.hitDetectionEnabled_){var s=(7+this.customAttributes.length)*this.featureCount_;this.hitRenderInstructions_&&this.hitRenderInstructions_.length===s||(this.hitRenderInstructions_=new Float32Array(s))}var o,h=[],u=[],c=0,f=0;for(var d in this.featureCache_)if(r=this.featureCache_[d],i=r.geometry,i&&i.getType()===n["a"].POINT){h[0]=i.getFlatCoordinates()[0],h[1]=i.getFlatCoordinates()[1],Object(l["a"])(t,h),o=v(f+6,u),this.renderInstructions_[c++]=h[0],this.renderInstructions_[c++]=h[1],this.hitDetectionEnabled_&&(this.hitRenderInstructions_[f++]=h[0],this.hitRenderInstructions_[f++]=h[1],this.hitRenderInstructions_[f++]=o[0],this.hitRenderInstructions_[f++]=o[1],this.hitRenderInstructions_[f++]=o[2],this.hitRenderInstructions_[f++]=o[3],this.hitRenderInstructions_[f++]=Number(d));for(var p=void 0,_=0;_<this.customAttributes.length;_++)p=this.customAttributes[_].callback(r.feature,r.properties),this.renderInstructions_[c++]=p,this.hitDetectionEnabled_&&(this.hitRenderInstructions_[f++]=p)}var m={type:g.GENERATE_BUFFERS,renderInstructions:this.renderInstructions_.buffer,customAttributesCount:this.customAttributes.length};if(m["projectionTransform"]=t,this.worker_.postMessage(m,[this.renderInstructions_.buffer]),this.renderInstructions_=null,this.hitDetectionEnabled_){var y={type:g.GENERATE_BUFFERS,renderInstructions:this.hitRenderInstructions_.buffer,customAttributesCount:5+this.customAttributes.length};y["projectionTransform"]=t,y["hitDetection"]=!0,this.worker_.postMessage(y,[this.hitRenderInstructions_.buffer]),this.hitRenderInstructions_=null}},t.prototype.forEachFeatureAtCoordinate=function(e,t,r,i,n){if(Object(b["a"])(this.hitDetectionEnabled_,66),this.hitRenderInstructions_){var a=Object(l["a"])(t.coordinateToPixelTransform,e.slice()),s=this.hitRenderTarget_.readPixel(a[0]/2,a[1]/2),o=[s[0]/255,s[1]/255,s[2]/255,s[3]/255],h=m(o),u=this.hitRenderInstructions_[h],c=Math.floor(u).toString(),f=this.getLayer().getSource(),d=f.getFeatureByUid(c);return d?i(d,this.getLayer(),null):void 0}},t.prototype.renderHitDetection=function(e){if(this.hitVerticesBuffer_.getSize()){this.hitRenderTarget_.setSize([Math.floor(e.size[0]/2),Math.floor(e.size[1]/2)]),this.helper.useProgram(this.hitProgram_),this.helper.prepareDrawToRenderTarget(e,this.hitRenderTarget_,!0),this.helper.bindBuffer(this.hitVerticesBuffer_),this.helper.bindBuffer(this.indicesBuffer_),this.helper.enableAttributes(this.hitDetectionAttributes);var t=this.indicesBuffer_.getSize();this.helper.drawElements(0,t)}},t.prototype.disposeInternal=function(){this.worker_.terminate(),this.layer_=null,this.sourceListenKeys_.forEach((function(e){Object(x["c"])(e)})),this.sourceListenKeys_=null,e.prototype.disposeInternal.call(this)},t}(y);t["a"]=C}}]);
//# sourceMappingURL=chunk-b63012a2.6f86d2dd.js.map