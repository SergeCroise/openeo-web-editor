(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22009db5","chunk-22009db5","chunk-22009db5","chunk-22009db5"],{"496f":function(t,e,n){"use strict";e["a"]={ANIMATING:0,INTERACTING:1}},"57cc":function(t,e,n){"use strict";n.d(e,"b",(function(){return u}));var o=n("01d4"),i=n("dc10"),r=n("acc1"),s=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),a=function(t){function e(e,n){var o=t.call(this,(function(t){return e.apply(null,t)}),(function(t){return t[0].getKey()}))||this;return o.boundHandleTileChange_=o.handleTileChange.bind(o),o.tileChangeCallback_=n,o.tilesLoading_=0,o.tilesLoadingKeys_={},o}return s(e,t),e.prototype.enqueue=function(e){var n=t.prototype.enqueue.call(this,e);if(n){var i=e[0];i.addEventListener(o["a"].CHANGE,this.boundHandleTileChange_)}return n},e.prototype.getTilesLoading=function(){return this.tilesLoading_},e.prototype.handleTileChange=function(t){var e=t.target,n=e.getState();if(n===r["a"].LOADED||n===r["a"].ERROR||n===r["a"].EMPTY){e.removeEventListener(o["a"].CHANGE,this.boundHandleTileChange_);var i=e.getKey();i in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[i],--this.tilesLoading_),this.tileChangeCallback_()}},e.prototype.loadMoreTiles=function(t,e){var n,o,i,s=0;while(this.tilesLoading_<t&&s<e&&this.getCount()>0)o=this.dequeue()[0],i=o.getKey(),n=o.getState(),n!==r["a"].IDLE||i in this.tilesLoadingKeys_||(this.tilesLoadingKeys_[i]=!0,++this.tilesLoading_,++s,o.load())},e}(i["b"]);function u(t,e,n,o,r){if(!t||!(n in t.wantedTiles))return i["a"];if(!t.wantedTiles[n][e.getKey()])return i["a"];var s=t.viewState.center,a=o[0]-s[0],u=o[1]-s[1];return 65536*Math.log(r)+Math.sqrt(a*a+u*u)/r}e["a"]=a},"5e31":function(t,e,n){"use strict";var o=n("0ec0"),i=n("01d4"),r=n("acc1"),s=n("1300"),a=n("ca42"),u=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),h=function(t){function e(e,n,o){var i=t.call(this)||this,r=o||{};return i.tileCoord=e,i.state=n,i.interimTile=null,i.key="",i.transition_=void 0===r.transition?250:r.transition,i.transitionStarts_={},i.interpolate=!!r.interpolate,i}return u(e,t),e.prototype.changed=function(){this.dispatchEvent(i["a"].CHANGE)},e.prototype.release=function(){},e.prototype.getKey=function(){return this.key+"/"+this.tileCoord},e.prototype.getInterimTile=function(){if(!this.interimTile)return this;var t=this.interimTile;do{if(t.getState()==r["a"].LOADED)return this.transition_=0,t;t=t.interimTile}while(t);return this},e.prototype.refreshInterimChain=function(){if(this.interimTile){var t=this.interimTile,e=this;do{if(t.getState()==r["a"].LOADED){t.interimTile=null;break}t.getState()==r["a"].LOADING?e=t:t.getState()==r["a"].IDLE?e.interimTile=t.interimTile:e=t,t=e.interimTile}while(t)}},e.prototype.getTileCoord=function(){return this.tileCoord},e.prototype.getState=function(){return this.state},e.prototype.setState=function(t){if(this.state!==r["a"].ERROR&&this.state>t)throw new Error("Tile load sequence violation");this.state=t,this.changed()},e.prototype.load=function(){Object(s["b"])()},e.prototype.getAlpha=function(t,e){if(!this.transition_)return 1;var n=this.transitionStarts_[t];if(n){if(-1===n)return 1}else n=e,this.transitionStarts_[t]=n;var o=e-n+1e3/60;return o>=this.transition_?1:Object(a["a"])(o/this.transition_)},e.prototype.inTransition=function(t){return!!this.transition_&&-1!==this.transitionStarts_[t]},e.prototype.endTransition=function(t){this.transition_&&(this.transitionStarts_[t]=-1)},e}(o["a"]);e["a"]=h},"8d87":function(t,e,n){"use strict";var o=n("5116"),i=n("2c30"),r=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.expireCache=function(t){while(this.canExpireCache()){var e=this.peekLast();if(e.getKey()in t)break;this.pop().release()}},e.prototype.pruneExceptNewestZ=function(){if(0!==this.getCount()){var t=this.peekFirstKey(),e=Object(i["b"])(t),n=e[0];this.forEach(function(t){t.tileCoord[0]!==n&&(this.remove(Object(i["c"])(t.tileCoord)),t.release())}.bind(this))}},e}(o["a"]);e["a"]=s},a2c7:function(t,e,n){"use strict";var o=n("e269"),i=n("f623"),r=n("fced"),s=n("496f"),a={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"},u=n("0414"),h=n("256f"),c=n("57cb"),l=n("a568"),p=n("92fa"),g=n("38f3"),f=n("67f6"),_=n("7fc9"),m=n("aaa2"),d=n("8cc5"),v=n("ca42"),y=n("0af5"),R=n("9f5e"),C=n("5bc3"),b=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),O=0,j=function(t){function e(e){var n=t.call(this)||this;n.on,n.once,n.un;var o=Object(g["a"])({},e);return n.hints_=[0,0],n.animations_=[],n.updateAnimationKey_,n.projection_=Object(h["b"])(o.projection,"EPSG:3857"),n.viewportSize_=[100,100],n.targetCenter_=null,n.targetResolution_,n.targetRotation_,n.nextCenter_=null,n.nextResolution_,n.nextRotation_,n.cancelAnchor_=void 0,o.center&&(o.center=Object(h["f"])(o.center,n.projection_)),o.extent&&(o.extent=Object(h["g"])(o.extent,n.projection_)),o.projection&&Object(h["c"])(),n.applyOptions_(o),n}return b(e,t),e.prototype.applyOptions_=function(t){var e=Object(g["a"])({},t);for(var n in a)delete e[n];this.setProperties(e,!0);var o=T(t);this.maxResolution_=o.maxResolution,this.minResolution_=o.minResolution,this.zoomFactor_=o.zoomFactor,this.resolutions_=t.resolutions,this.padding_=t.padding,this.minZoom_=o.minZoom;var i=I(t),r=o.constraint,s=M(t);this.constraints_={center:i,resolution:r,rotation:s},this.setRotation(void 0!==t.rotation?t.rotation:0),this.setCenterInternal(void 0!==t.center?t.center:null),void 0!==t.resolution?this.setResolution(t.resolution):void 0!==t.zoom&&this.setZoom(t.zoom)},Object.defineProperty(e.prototype,"padding",{get:function(){return this.padding_},set:function(t){var e=this.padding_;this.padding_=t;var n=this.getCenter();if(n){var o=t||[0,0,0,0];e=e||[0,0,0,0];var i=this.getResolution(),r=i/2*(o[3]-e[3]+e[1]-o[1]),s=i/2*(o[0]-e[0]+e[2]-o[2]);this.setCenterInternal([n[0]+r,n[1]-s])}},enumerable:!1,configurable:!0}),e.prototype.getUpdatedOptions_=function(t){var e=this.getProperties();return void 0!==e.resolution?e.resolution=this.getResolution():e.zoom=this.getZoom(),e.center=this.getCenterInternal(),e.rotation=this.getRotation(),Object(g["a"])({},e,t)},e.prototype.animate=function(t){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);for(var e=new Array(arguments.length),n=0;n<e.length;++n){var o=arguments[n];o.center&&(o=Object(g["a"])({},o),o.center=Object(h["f"])(o.center,this.getProjection())),o.anchor&&(o=Object(g["a"])({},o),o.anchor=Object(h["f"])(o.anchor,this.getProjection())),e[n]=o}this.animateInternal.apply(this,e)},e.prototype.animateInternal=function(t){var e,n=arguments.length;n>1&&"function"===typeof arguments[n-1]&&(e=arguments[n-1],--n);for(var o=0;o<n&&!this.isDef();++o){var i=arguments[o];i.center&&this.setCenterInternal(i.center),void 0!==i.zoom?this.setZoom(i.zoom):i.resolution&&this.setResolution(i.resolution),void 0!==i.rotation&&this.setRotation(i.rotation)}if(o!==n){for(var r=Date.now(),a=this.targetCenter_.slice(),u=this.targetResolution_,h=this.targetRotation_,c=[];o<n;++o){var l=arguments[o],p={start:r,complete:!1,anchor:l.anchor,duration:void 0!==l.duration?l.duration:1e3,easing:l.easing||v["c"],callback:e};if(l.center&&(p.sourceCenter=a,p.targetCenter=l.center.slice(),a=p.targetCenter),void 0!==l.zoom?(p.sourceResolution=u,p.targetResolution=this.getResolutionForZoom(l.zoom),u=p.targetResolution):l.resolution&&(p.sourceResolution=u,p.targetResolution=l.resolution,u=p.targetResolution),void 0!==l.rotation){p.sourceRotation=h;var g=Object(_["g"])(l.rotation-h+Math.PI,2*Math.PI)-Math.PI;p.targetRotation=h+g,h=p.targetRotation}A(p)?p.complete=!0:r+=p.duration,c.push(p)}this.animations_.push(c),this.setHint(s["a"].ANIMATING,1),this.updateAnimations_()}else e&&x(e,!0)},e.prototype.getAnimating=function(){return this.hints_[s["a"].ANIMATING]>0},e.prototype.getInteracting=function(){return this.hints_[s["a"].INTERACTING]>0},e.prototype.cancelAnimations=function(){var t;this.setHint(s["a"].ANIMATING,-this.hints_[s["a"].ANIMATING]);for(var e=0,n=this.animations_.length;e<n;++e){var o=this.animations_[e];if(o[0].callback&&x(o[0].callback,!1),!t)for(var i=0,r=o.length;i<r;++i){var a=o[i];if(!a.complete){t=a.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=t,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN},e.prototype.updateAnimations_=function(){if(void 0!==this.updateAnimationKey_&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),this.getAnimating()){for(var t=Date.now(),e=!1,n=this.animations_.length-1;n>=0;--n){for(var o=this.animations_[n],i=!0,r=0,a=o.length;r<a;++r){var u=o[r];if(!u.complete){var h=t-u.start,c=u.duration>0?h/u.duration:1;c>=1?(u.complete=!0,c=1):i=!1;var l=u.easing(c);if(u.sourceCenter){var p=u.sourceCenter[0],g=u.sourceCenter[1],f=u.targetCenter[0],m=u.targetCenter[1];this.nextCenter_=u.targetCenter;var d=p+l*(f-p),v=g+l*(m-g);this.targetCenter_=[d,v]}if(u.sourceResolution&&u.targetResolution){var y=1===l?u.targetResolution:u.sourceResolution+l*(u.targetResolution-u.sourceResolution);if(u.anchor){var R=this.getViewportSize_(this.getRotation()),C=this.constraints_.resolution(y,0,R,!0);this.targetCenter_=this.calculateCenterZoom(C,u.anchor)}this.nextResolution_=u.targetResolution,this.targetResolution_=y,this.applyTargetState_(!0)}if(void 0!==u.sourceRotation&&void 0!==u.targetRotation){var b=1===l?Object(_["g"])(u.targetRotation+Math.PI,2*Math.PI)-Math.PI:u.sourceRotation+l*(u.targetRotation-u.sourceRotation);if(u.anchor){var O=this.constraints_.rotation(b,!0);this.targetCenter_=this.calculateCenterRotate(O,u.anchor)}this.nextRotation_=u.targetRotation,this.targetRotation_=b}if(this.applyTargetState_(!0),e=!0,!u.complete)break}}if(i){this.animations_[n]=null,this.setHint(s["a"].ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;var j=o[0].callback;j&&x(j,!0)}}this.animations_=this.animations_.filter(Boolean),e&&void 0===this.updateAnimationKey_&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}},e.prototype.calculateCenterRotate=function(t,e){var n,o=this.getCenterInternal();return void 0!==o&&(n=[o[0]-e[0],o[1]-e[1]],Object(l["g"])(n,t-this.getRotation()),Object(l["a"])(n,e)),n},e.prototype.calculateCenterZoom=function(t,e){var n,o=this.getCenterInternal(),i=this.getResolution();if(void 0!==o&&void 0!==i){var r=e[0]-t*(e[0]-o[0])/i,s=e[1]-t*(e[1]-o[1])/i;n=[r,s]}return n},e.prototype.getViewportSize_=function(t){var e=this.viewportSize_;if(t){var n=e[0],o=e[1];return[Math.abs(n*Math.cos(t))+Math.abs(o*Math.sin(t)),Math.abs(n*Math.sin(t))+Math.abs(o*Math.cos(t))]}return e},e.prototype.setViewportSize=function(t){this.viewportSize_=Array.isArray(t)?t.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)},e.prototype.getCenter=function(){var t=this.getCenterInternal();return t?Object(h["n"])(t,this.getProjection()):t},e.prototype.getCenterInternal=function(){return this.get(a.CENTER)},e.prototype.getConstraints=function(){return this.constraints_},e.prototype.getConstrainResolution=function(){return this.get("constrainResolution")},e.prototype.getHints=function(t){return void 0!==t?(t[0]=this.hints_[0],t[1]=this.hints_[1],t):this.hints_.slice()},e.prototype.calculateExtent=function(t){var e=this.calculateExtentInternal(t);return Object(h["o"])(e,this.getProjection())},e.prototype.calculateExtentInternal=function(t){var e=t||this.getViewportSizeMinusPadding_(),n=this.getCenterInternal();Object(p["a"])(n,1);var o=this.getResolution();Object(p["a"])(void 0!==o,2);var i=this.getRotation();return Object(p["a"])(void 0!==i,3),Object(y["y"])(n,o,i,e)},e.prototype.getMaxResolution=function(){return this.maxResolution_},e.prototype.getMinResolution=function(){return this.minResolution_},e.prototype.getMaxZoom=function(){return this.getZoomForResolution(this.minResolution_)},e.prototype.setMaxZoom=function(t){this.applyOptions_(this.getUpdatedOptions_({maxZoom:t}))},e.prototype.getMinZoom=function(){return this.getZoomForResolution(this.maxResolution_)},e.prototype.setMinZoom=function(t){this.applyOptions_(this.getUpdatedOptions_({minZoom:t}))},e.prototype.setConstrainResolution=function(t){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:t}))},e.prototype.getProjection=function(){return this.projection_},e.prototype.getResolution=function(){return this.get(a.RESOLUTION)},e.prototype.getResolutions=function(){return this.resolutions_},e.prototype.getResolutionForExtent=function(t,e){return this.getResolutionForExtentInternal(Object(h["g"])(t,this.getProjection()),e)},e.prototype.getResolutionForExtentInternal=function(t,e){var n=e||this.getViewportSizeMinusPadding_(),o=Object(y["D"])(t)/n[0],i=Object(y["z"])(t)/n[1];return Math.max(o,i)},e.prototype.getResolutionForValueFunction=function(t){var e=t||2,n=this.getConstrainedResolution(this.maxResolution_),o=this.minResolution_,i=Math.log(n/o)/Math.log(e);return function(t){var o=n/Math.pow(e,t*i);return o}},e.prototype.getRotation=function(){return this.get(a.ROTATION)},e.prototype.getValueForResolutionFunction=function(t){var e=Math.log(t||2),n=this.getConstrainedResolution(this.maxResolution_),o=this.minResolution_,i=Math.log(n/o)/e;return function(t){var o=Math.log(n/t)/e/i;return o}},e.prototype.getViewportSizeMinusPadding_=function(t){var e=this.getViewportSize_(t),n=this.padding_;return n&&(e=[e[0]-n[1]-n[3],e[1]-n[0]-n[2]]),e},e.prototype.getState=function(){var t=this.getProjection(),e=this.getResolution(),n=this.getRotation(),o=this.getCenterInternal(),i=this.padding_;if(i){var r=this.getViewportSizeMinusPadding_();o=w(o,this.getViewportSize_(),[r[0]/2+i[3],r[1]/2+i[0]],e,n)}return{center:o.slice(0),projection:void 0!==t?t:null,resolution:e,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:n,zoom:this.getZoom()}},e.prototype.getZoom=function(){var t,e=this.getResolution();return void 0!==e&&(t=this.getZoomForResolution(e)),t},e.prototype.getZoomForResolution=function(t){var e,n,o=this.minZoom_||0;if(this.resolutions_){var i=Object(R["h"])(this.resolutions_,t,1);o=i,e=this.resolutions_[i],n=i==this.resolutions_.length-1?2:e/this.resolutions_[i+1]}else e=this.maxResolution_,n=this.zoomFactor_;return o+Math.log(e/t)/Math.log(n)},e.prototype.getResolutionForZoom=function(t){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;var e=Object(_["b"])(Math.floor(t),0,this.resolutions_.length-2),n=this.resolutions_[e]/this.resolutions_[e+1];return this.resolutions_[e]/Math.pow(n,Object(_["b"])(t-e,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,t-this.minZoom_)},e.prototype.fit=function(t,e){var n;if(Object(p["a"])(Array.isArray(t)||"function"===typeof t.getSimplifiedGeometry,24),Array.isArray(t)){Object(p["a"])(!Object(y["G"])(t),25);var o=Object(h["g"])(t,this.getProjection());n=Object(C["c"])(o)}else if(t.getType()===i["a"].CIRCLE){o=Object(h["g"])(t.getExtent(),this.getProjection());n=Object(C["c"])(o),n.rotate(this.getRotation(),Object(y["w"])(o))}else{var r=Object(h["m"])();n=r?t.clone().transform(r,this.getProjection()):t}this.fitInternal(n,e)},e.prototype.rotatedExtentForGeometry=function(t){for(var e=this.getRotation(),n=Math.cos(e),o=Math.sin(-e),i=t.getFlatCoordinates(),r=t.getStride(),s=1/0,a=1/0,u=-1/0,h=-1/0,c=0,l=i.length;c<l;c+=r){var p=i[c]*n-i[c+1]*o,g=i[c]*o+i[c+1]*n;s=Math.min(s,p),a=Math.min(a,g),u=Math.max(u,p),h=Math.max(h,g)}return[s,a,u,h]},e.prototype.fitInternal=function(t,e){var n=e||{},o=n.size;o||(o=this.getViewportSizeMinusPadding_());var i,r=void 0!==n.padding?n.padding:[0,0,0,0],s=void 0!==n.nearest&&n.nearest;i=void 0!==n.minResolution?n.minResolution:void 0!==n.maxZoom?this.getResolutionForZoom(n.maxZoom):0;var a=this.rotatedExtentForGeometry(t),u=this.getResolutionForExtentInternal(a,[o[0]-r[1]-r[3],o[1]-r[0]-r[2]]);u=isNaN(u)?i:Math.max(u,i),u=this.getConstrainedResolution(u,s?0:1);var h=this.getRotation(),l=Math.sin(h),p=Math.cos(h),g=Object(y["w"])(a);g[0]+=(r[1]-r[3])/2*u,g[1]+=(r[0]-r[2])/2*u;var f=g[0]*p-g[1]*l,_=g[1]*p+g[0]*l,m=this.getConstrainedCenter([f,_],u),d=n.callback?n.callback:c["c"];void 0!==n.duration?this.animateInternal({resolution:u,center:m,duration:n.duration,easing:n.easing},d):(this.targetResolution_=u,this.targetCenter_=m,this.applyTargetState_(!1,!0),x(d,!0))},e.prototype.centerOn=function(t,e,n){this.centerOnInternal(Object(h["f"])(t,this.getProjection()),e,n)},e.prototype.centerOnInternal=function(t,e,n){this.setCenterInternal(w(t,e,n,this.getResolution(),this.getRotation()))},e.prototype.calculateCenterShift=function(t,e,n,o){var i,r=this.padding_;if(r&&t){var s=this.getViewportSizeMinusPadding_(-n),a=w(t,o,[s[0]/2+r[3],s[1]/2+r[0]],e,n);i=[t[0]-a[0],t[1]-a[1]]}return i},e.prototype.isDef=function(){return!!this.getCenterInternal()&&void 0!==this.getResolution()},e.prototype.adjustCenter=function(t){var e=Object(h["n"])(this.targetCenter_,this.getProjection());this.setCenter([e[0]+t[0],e[1]+t[1]])},e.prototype.adjustCenterInternal=function(t){var e=this.targetCenter_;this.setCenterInternal([e[0]+t[0],e[1]+t[1]])},e.prototype.adjustResolution=function(t,e){var n=e&&Object(h["f"])(e,this.getProjection());this.adjustResolutionInternal(t,n)},e.prototype.adjustResolutionInternal=function(t,e){var n=this.getAnimating()||this.getInteracting(),o=this.getViewportSize_(this.getRotation()),i=this.constraints_.resolution(this.targetResolution_*t,0,o,n);e&&(this.targetCenter_=this.calculateCenterZoom(i,e)),this.targetResolution_*=t,this.applyTargetState_()},e.prototype.adjustZoom=function(t,e){this.adjustResolution(Math.pow(this.zoomFactor_,-t),e)},e.prototype.adjustRotation=function(t,e){e&&(e=Object(h["f"])(e,this.getProjection())),this.adjustRotationInternal(t,e)},e.prototype.adjustRotationInternal=function(t,e){var n=this.getAnimating()||this.getInteracting(),o=this.constraints_.rotation(this.targetRotation_+t,n);e&&(this.targetCenter_=this.calculateCenterRotate(o,e)),this.targetRotation_+=t,this.applyTargetState_()},e.prototype.setCenter=function(t){this.setCenterInternal(t?Object(h["f"])(t,this.getProjection()):t)},e.prototype.setCenterInternal=function(t){this.targetCenter_=t,this.applyTargetState_()},e.prototype.setHint=function(t,e){return this.hints_[t]+=e,this.changed(),this.hints_[t]},e.prototype.setResolution=function(t){this.targetResolution_=t,this.applyTargetState_()},e.prototype.setRotation=function(t){this.targetRotation_=t,this.applyTargetState_()},e.prototype.setZoom=function(t){this.setResolution(this.getResolutionForZoom(t))},e.prototype.applyTargetState_=function(t,e){var n=this.getAnimating()||this.getInteracting()||e,o=this.constraints_.rotation(this.targetRotation_,n),i=this.getViewportSize_(o),r=this.constraints_.resolution(this.targetResolution_,0,i,n),s=this.constraints_.center(this.targetCenter_,r,i,n,this.calculateCenterShift(this.targetCenter_,r,o,i));this.get(a.ROTATION)!==o&&this.set(a.ROTATION,o),this.get(a.RESOLUTION)!==r&&(this.set(a.RESOLUTION,r),this.set("zoom",this.getZoom(),!0)),s&&this.get(a.CENTER)&&Object(l["e"])(this.get(a.CENTER),s)||this.set(a.CENTER,s),this.getAnimating()&&!t&&this.cancelAnimations(),this.cancelAnchor_=void 0},e.prototype.resolveConstraints=function(t,e,n){var o=void 0!==t?t:200,i=e||0,r=this.constraints_.rotation(this.targetRotation_),s=this.getViewportSize_(r),a=this.constraints_.resolution(this.targetResolution_,i,s),u=this.constraints_.center(this.targetCenter_,a,s,!1,this.calculateCenterShift(this.targetCenter_,a,r,s));if(0===o&&!this.cancelAnchor_)return this.targetResolution_=a,this.targetRotation_=r,this.targetCenter_=u,void this.applyTargetState_();var h=n||(0===o?this.cancelAnchor_:void 0);this.cancelAnchor_=void 0,this.getResolution()===a&&this.getRotation()===r&&this.getCenterInternal()&&Object(l["e"])(this.getCenterInternal(),u)||(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:r,center:u,resolution:a,duration:o,easing:v["b"],anchor:h}))},e.prototype.beginInteraction=function(){this.resolveConstraints(0),this.setHint(s["a"].INTERACTING,1)},e.prototype.endInteraction=function(t,e,n){var o=n&&Object(h["f"])(n,this.getProjection());this.endInteractionInternal(t,e,o)},e.prototype.endInteractionInternal=function(t,e,n){this.setHint(s["a"].INTERACTING,-1),this.resolveConstraints(t,e,n)},e.prototype.getConstrainedCenter=function(t,e){var n=this.getViewportSize_(this.getRotation());return this.constraints_.center(t,e||this.getResolution(),n)},e.prototype.getConstrainedZoom=function(t,e){var n=this.getResolutionForZoom(t);return this.getZoomForResolution(this.getConstrainedResolution(n,e))},e.prototype.getConstrainedResolution=function(t,e){var n=e||0,o=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(t,n,o)},e}(o["a"]);function x(t,e){setTimeout((function(){t(e)}),0)}function I(t){if(void 0!==t.extent){var e=void 0===t.smoothExtentConstraint||t.smoothExtentConstraint;return Object(f["a"])(t.extent,t.constrainOnlyCenter,e)}var n=Object(h["b"])(t.projection,"EPSG:3857");if(!0!==t.multiWorld&&n.isGlobal()){var o=n.getExtent().slice();return o[0]=-1/0,o[2]=1/0,Object(f["a"])(o,!1,!1)}return f["b"]}function T(t){var e,n,o,i=28,s=2,a=void 0!==t.minZoom?t.minZoom:O,c=void 0!==t.maxZoom?t.maxZoom:i,l=void 0!==t.zoomFactor?t.zoomFactor:s,p=void 0!==t.multiWorld&&t.multiWorld,g=void 0===t.smoothResolutionConstraint||t.smoothResolutionConstraint,f=void 0!==t.showFullExtent&&t.showFullExtent,_=Object(h["b"])(t.projection,"EPSG:3857"),d=_.getExtent(),v=t.constrainOnlyCenter,R=t.extent;if(p||R||!_.isGlobal()||(v=!1,R=d),void 0!==t.resolutions){var C=t.resolutions;n=C[a],o=void 0!==C[c]?C[c]:C[C.length-1],e=t.constrainResolution?Object(m["c"])(C,g,!v&&R,f):Object(m["a"])(n,o,g,!v&&R,f)}else{var b=d?Math.max(Object(y["D"])(d),Object(y["z"])(d)):360*h["a"][r["b"].DEGREES]/_.getMetersPerUnit(),j=b/u["b"]/Math.pow(s,O),x=j/Math.pow(s,i-O);n=t.maxResolution,void 0!==n?a=0:n=j/Math.pow(l,a),o=t.minResolution,void 0===o&&(o=void 0!==t.maxZoom?void 0!==t.maxResolution?n/Math.pow(l,c):j/Math.pow(l,c):x),c=a+Math.floor(Math.log(n/o)/Math.log(l)),o=n/Math.pow(l,c-a),e=t.constrainResolution?Object(m["b"])(l,n,o,g,!v&&R,f):Object(m["a"])(n,o,g,!v&&R,f)}return{constraint:e,maxResolution:n,minResolution:o,minZoom:a,zoomFactor:l}}function M(t){var e=void 0===t.enableRotation||t.enableRotation;if(e){var n=t.constrainRotation;return void 0===n||!0===n?Object(d["b"])():!1===n?d["d"]:"number"===typeof n?Object(d["a"])(n):d["d"]}return d["c"]}function A(t){return!(t.sourceCenter&&t.targetCenter&&!Object(l["e"])(t.sourceCenter,t.targetCenter))&&(t.sourceResolution===t.targetResolution&&t.sourceRotation===t.targetRotation)}function w(t,e,n,o,i){var r=Math.cos(-i),s=Math.sin(-i),a=t[0]*r-t[1]*s,u=t[1]*r+t[0]*s;a+=(e[0]/2-n[0])*o,u+=(n[1]-e[1]/2)*o,s=-s;var h=a*r-u*s,c=u*r+a*s;return[h,c]}e["a"]=j},acc1:function(t,e,n){"use strict";e["a"]={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}},dc07:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=function(){function t(t,e,n,o){this.minX=t,this.maxX=e,this.minY=n,this.maxY=o}return t.prototype.contains=function(t){return this.containsXY(t[1],t[2])},t.prototype.containsTileRange=function(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY},t.prototype.containsXY=function(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY},t.prototype.equals=function(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY},t.prototype.extend=function(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)},t.prototype.getHeight=function(){return this.maxY-this.minY+1},t.prototype.getSize=function(){return[this.getWidth(),this.getHeight()]},t.prototype.getWidth=function(){return this.maxX-this.minX+1},t.prototype.intersects=function(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY},t}();function i(t,e,n,i,r){return void 0!==r?(r.minX=t,r.maxX=e,r.minY=n,r.maxY=i,r):new o(t,e,n,i)}e["b"]=o}}]);
//# sourceMappingURL=chunk-22009db5.6bf4cc66.js.map