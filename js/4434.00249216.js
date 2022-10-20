"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[4434,2483],{15554:(t,e,s)=>{s.d(e,{Z:()=>i});const i={components:{FederationNotice:()=>s.e(5518).then(s.bind(s,15518)),FederationMissingNotice:()=>s.e(233).then(s.bind(s,50233))},props:{federation:{type:Object,default:()=>({})}}}},80390:(t,e,s)=>{s.r(e),s.d(e,{default:()=>u});var i=function(){var t=this,e=t._self._c;return e("Modal",{attrs:{width:"80%",title:t.collection.id},on:{closed:function(e){return t.$emit("closed")}}},[e("div",{staticClass:"docgen"},[e("Collection",{attrs:{data:t.collection},scopedSlots:t._u([{key:"spatial-extents",fn:function(s){return[s.worldwide?e("span",{staticClass:"worldwide"},[e("i",{staticClass:"fas fa-globe"}),t._v(" Worldwide")]):e("MapExtentViewer",{staticClass:"map",attrs:{footprint:s.extents}})]}}])}),t.currentItems?e("section",[e("Items",{attrs:{items:t.currentItems},scopedSlots:t._u([{key:"item-location",fn:function(t){return[e("MapExtentViewer",{attrs:{footprint:t.geometry}})]}}],null,!1,635288746)}),e("div",{staticClass:"pagination"},[e("button",{attrs:{title:"Previous page",disabled:!t.hasPrevItems},on:{click:function(e){return t.paginate(-1)}}},[e("i",{staticClass:"fas fa-arrow-left"}),t._v(" Previous Page")]),e("button",{attrs:{title:"Next page",disabled:!t.hasNextItems},on:{click:function(e){return t.paginate(1)}}},[t._v("Next Page "),e("i",{staticClass:"fas fa-arrow-right"})])])],1):t._e()],1)])},o=[],n=(s(57658),s(41457)),a=s(24533),l=s(58661);const r={name:"CollectionModal",components:{MapExtentViewer:()=>Promise.all([s.e(4763),s.e(4243),s.e(3380),s.e(3564),s.e(9917),s.e(114),s.e(8022),s.e(5072),s.e(2235),s.e(7710),s.e(4681),s.e(5574),s.e(92)]).then(s.bind(s,41169)),Modal:n.Z,Collection:a["default"],Items:()=>s.e(6667).then(s.bind(s,86667))},data(){return{items:[],itemsPage:0,itemsIterator:null}},props:{collection:{type:Object}},computed:{...l.Z.mapState(["connection"]),...l.Z.mapGetters(["supports"]),bbox(){try{return this.collection.extent.spatial.bbox[0]}catch(t){return null}},currentItems(){return this.items.length>=this.itemsPage?this.items[this.itemsPage]:null},hasPrevItems(){return this.itemsPage>0},hasNextItems(){return this.itemsPage<this.items.length-1}},async mounted(){this.supports("listCollectionItems")&&(await this.nextItems(),this.nextItems())},methods:{async paginate(t){if(t>0)await this.nextItems();else if(0===this.itemsPage&&t<0)return;this.itemsPage+=t},async nextItems(){this.itemsIterator||(this.itemsIterator=await this.connection.listCollectionItems(this.collection.id));let t=await this.itemsIterator.next();t&&t.value&&!t.done&&this.items.push(t.value)}}},d=r;var c=s(1001),h=(0,c.Z)(d,i,o,!1,null,null,null);const u=h.exports},41457:(t,e,s)=>{s.d(e,{Z:()=>h});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[e("div",{ref:"container",staticClass:"modal-container",style:t.style},[e("header",{staticClass:"modal-header",on:{mousedown:t.startMove}},[t._t("header",(function(){return[e("h2",[t._v(t._s(t.title))]),e("span",{staticClass:"close",on:{click:t.close}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),e("main",{staticClass:"modal-content"},[t._t("default")],2),e("footer",{staticClass:"modal-footer"},[t._t("footer")],2)])])},o=[],n=s(1744),a=s(58661);const l={name:"Modal",mixins:[n.Z],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...a.Z.mapState("editor",["hightestModalZIndex"]),style(){let t={width:this.width};return this.minWidth&&(t["min-width"]=this.minWidth),Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}}},methods:{...a.Z.mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){"H2"!==t.target.tagName&&(this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),t.preventDefault(),t.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},r=l;var d=s(1001),c=(0,d.Z)(r,i,o,!1,null,null,null);const h=c.exports}}]);
//# sourceMappingURL=4434.00249216.js.map