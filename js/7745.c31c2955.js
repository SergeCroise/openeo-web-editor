"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[7745],{94679:(t,e,s)=>{s.d(e,{A:()=>h});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[e(t.containerTag,{ref:"container",tag:"component",staticClass:"modal-container",class:{smooth:t.smooth},style:t.style,on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.submitFunction.apply(null,arguments)}}},[e("header",{staticClass:"modal-header",on:{mousedown:t.startMove}},[t._t("header",(function(){return[e("h2",[t._v(t._s(t.title))]),e("span",{staticClass:"close",on:{click:t.close}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),e("main",{staticClass:"modal-content"},[t._t("default")],2),e("footer",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t.submitFunction?e("button",{attrs:{type:"submit"}},[t._v(t._s(t.submitButtonText))]):t._e()]}))],2)])],1)},i=[],n=s(61663),a=s(2566);const l={name:"Modal",mixins:[n.A],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0},submitFunction:{type:Function,default:null},submitButtonText:{type:String,default:"Submit"}},data(){return{zIndex:1e3,position:null,dragPosition:null,smooth:!1}},computed:{...a.A.mapState("editor",["hightestModalZIndex"]),style(){let t={width:this.width};return this.minWidth&&(t["min-width"]=this.minWidth),Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t},containerTag(){return this.submitFunction?"form":"div"}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}},width(){this.smoothResize()},minWidth(){this.smoothResize()}},methods:{...a.A.mapMutations("editor",["openModal","closeModal"]),smoothResize(){this.smooth=!0,setTimeout((()=>this.smooth=!1),600)},submit(t){this.submitFunction(t)},open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){"H2"!==t.target.tagName&&(this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),t.preventDefault(),t.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},r=l;var u=s(81656),d=(0,u.A)(r,o,i,!1,null,null,null);const h=d.exports},17745:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});var o=function(){var t=this,e=t._self._c;return e("Modal",{attrs:{show:t.show,minWidth:"60%",width:"90%",title:t.title,submitFunction:t.submitFunction},on:{closed:function(e){return t.$emit("closed")}},scopedSlots:t._u([{key:"default",fn:function(){return[0===t.parameters.length?e("p",[t._v("No editable parameters available.")]):e("Parameters",{attrs:{parameters:t.parameters,editable:t.editable,selectParameter:t.selectParameter,parent:t.parent},model:{value:t.values,callback:function(e){t.values=e},expression:"values"}})]},proxy:!0}])})},i=[],n=s(2566),a=s(94679),l=s(10510);const r={name:"ParameterModal",components:{Modal:a.A,Parameters:l.A},props:{title:{type:String},parameters:{type:Array},data:{type:Object},editable:{type:Boolean,default:!0},selectParameter:{type:String,default:null},parent:{type:Object,default:null}},data(){return{show:!0,values:n.A.deepClone(this.data)}},computed:{submitFunction(){return this.$listeners.save?this.save:null}},methods:{save(){try{this.$emit("save",this.values),this.show=!1}catch(t){n.A.exception(this,t)}}}},u=r;var d=s(81656),h=(0,d.A)(u,o,i,!1,null,null,null);const c=h.exports}}]);
//# sourceMappingURL=7745.c31c2955.js.map