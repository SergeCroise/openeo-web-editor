(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-320f6bf9"],{"0a4b":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Modal",{attrs:{width:"60%",title:t.title},on:{closed:function(e){return t.$emit("closed")}}},[s("ul",{staticClass:"list"},t._l(t.result.assets,(function(e,o){return s("StacAsset",{key:o,attrs:{asset:e,id:o,context:t.data}})})),1)])},i=[],n=s("2930"),a={name:"DownloadAssetsModal",components:{StacAsset:()=>s.e("chunk-117bcf66").then(s.bind(null,"bd8a")),Modal:n["a"]},props:{job:{type:Object},result:{type:Object}},computed:{title(){return"Download Results for: "+(this.job.title||"#"+this.job.id)}}},l=a,r=s("2877"),d=Object(r["a"])(l,o,i,!1,null,null,null);e["default"]=d.exports},2930:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[s("div",{ref:"container",staticClass:"modal-container",style:t.style},[s("header",{staticClass:"modal-header",on:{mousedown:t.startMove}},[t._t("header",(function(){return[s("h2",[t._v(t._s(t.title))]),s("span",{staticClass:"close",on:{click:t.close}},[s("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),s("main",{staticClass:"modal-content"},[t._t("default")],2),s("footer",{staticClass:"modal-footer"},[t._t("footer")],2)])])},i=[],n=s("3115"),a=s("025e"),l={name:"Modal",mixins:[n["a"]],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...a["a"].mapState("editor",["hightestModalZIndex"]),style(){let t={width:this.width};return this.minWidth&&(t["min-width"]=this.minWidth),Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}}},methods:{...a["a"].mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){"H2"!==t.target.tagName&&(this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),t.preventDefault(),t.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},r=l,d=(s("8781"),s("2877")),c=Object(d["a"])(r,o,i,!1,null,null,null);e["a"]=c.exports},"6b1e":function(t,e,s){},8781:function(t,e,s){"use strict";s("6b1e")}}]);
//# sourceMappingURL=chunk-320f6bf9.5e9eca3a.js.map