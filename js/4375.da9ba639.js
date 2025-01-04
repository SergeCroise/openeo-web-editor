"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[2327,4375],{2327:(t,e,s)=>{s.r(e),s.d(e,{default:()=>u});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-component object-tree",class:{inline:0===t.size}},[0===t.size?e("em",[t._v(t._s(t.format(t.data)))]):Array.isArray(t.data)?[e("ol",t._l(t.indicesShown,(function(s){return e("li",{key:s},[t.isStructured(t.data[s])?e("openeo-object-tree",{attrs:{data:t.data[s]}}):t.isUrl(t.data[s])?e("a",{attrs:{href:t.data[s],target:"_blank"}},[t._v(t._s(t.data[s]))]):t.format(t.data[s])?e("em",[t._v(t._s(t.format(t.data[s])))]):[t._v(t._s(t.data[s]))]],2)})),0),t.size!==t.indicesShown.length?e("button",{attrs:{type:"button"},on:{click:t.show}},[t._v("Show all "+t._s(t.data.length)+" entries")]):t._e()]:"object"===typeof t.data?e("ul",t._l(t.data,(function(s,o){return e("li",{key:o},[e("strong",[t._v(t._s(t.prettifyKey(o)))]),t._v(": "),t.isStructured(s)?e("openeo-object-tree",{attrs:{data:s}}):t.isUrl(s)?e("a",{attrs:{href:s,target:"_blank"}},[t._v(t._s(s))]):t.format(s)?e("em",[t._v(t._s(t.format(s)))]):[t._v(t._s(s))]],2)})),0):[t._v(t._s(t.data))]],2)},i=[],n=s(86975);const a={name:"ObjectTree",components:{"openeo-object-tree":()=>Promise.resolve().then(s.bind(s,2327))},props:{data:{default:null},collapseAfter:{type:Number,default:10}},data(){return{expand:!1}},computed:{isSingleValue(){return Array.isArray(this.data)&&1===this.data.length&&0===n.A.size(this.data[0])},size(){return"object"===typeof this.data?n.A.size(this.data):1},indicesShown(){if(!Array.isArray(this.data))return[];let t=this.data;return!this.expand&&null!==this.collapseAfter&&this.size>this.collapseAfter&&(t=Array(this.collapseAfter)),[...t.keys()]}},beforeCreate(){n.A.enableHtmlProps(this)},methods:{prettifyKey(t){return n.A.prettifyString(t)},show(){this.expand=!0},isStructured(t){return n.A.size(t)>0},format(t){return null===t?"N/A":!0===t?"✔️":!1===t?"❌":"object"===typeof t&&0===n.A.size(t)?"Empty":"function"===typeof t?"JavaScript Function":"symbol"===typeof t?"JavaScript Symbol":null},isUrl(t){return n.A.isUrl(t,!1)}}},r=a;var l=s(81656),d=(0,l.A)(r,o,i,!1,null,null,null);const u=d.exports},64375:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});var o=function(){var t=this,e=t._self._c;return e("Modal",{attrs:{width:"60%",title:t.title},on:{closed:function(e){return t.$emit("closed")}}},[e("ObjectTree",{attrs:{data:t.data}})],1)},i=[],n=s(94679),a=s(2327);const r={name:"DataModal",components:{Modal:n.A,ObjectTree:a["default"]},props:{title:{type:String,default:"Details"},data:{default:null}}},l=r;var d=s(81656),u=(0,d.A)(l,o,i,!1,null,null,null);const c=u.exports},94679:(t,e,s)=>{s.d(e,{A:()=>c});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[e(t.containerTag,{ref:"container",tag:"component",staticClass:"modal-container",class:{smooth:t.smooth},style:t.style,on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.submitFunction.apply(null,arguments)}}},[e("header",{staticClass:"modal-header",on:{mousedown:t.startMove}},[t._t("header",(function(){return[e("h2",[t._v(t._s(t.title))]),e("span",{staticClass:"close",on:{click:t.close}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),e("main",{staticClass:"modal-content"},[t._t("default")],2),e("footer",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t.submitFunction?e("button",{attrs:{type:"submit"}},[t._v(t._s(t.submitButtonText))]):t._e()]}))],2)])],1)},i=[],n=s(61663),a=s(2566);const r={name:"Modal",mixins:[n.A],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0},submitFunction:{type:Function,default:null},submitButtonText:{type:String,default:"Submit"}},data(){return{zIndex:1e3,position:null,dragPosition:null,smooth:!1}},computed:{...a.A.mapState("editor",["hightestModalZIndex"]),style(){let t={width:this.width};return this.minWidth&&(t["min-width"]=this.minWidth),Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t},containerTag(){return this.submitFunction?"form":"div"}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}},width(){this.smoothResize()},minWidth(){this.smoothResize()}},methods:{...a.A.mapMutations("editor",["openModal","closeModal"]),smoothResize(){this.smooth=!0,setTimeout((()=>this.smooth=!1),600)},submit(t){this.submitFunction(t)},open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){"H2"!==t.target.tagName&&(this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),t.preventDefault(),t.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},l=r;var d=s(81656),u=(0,d.A)(l,o,i,!1,null,null,null);const c=u.exports}}]);
//# sourceMappingURL=4375.da9ba639.js.map