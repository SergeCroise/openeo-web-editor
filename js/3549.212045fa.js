"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[3549],{3549:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=function(){var t=this,e=t._self._c;return e("BButton",{directives:[{name:"show",rawName:"v-show",value:t.fn,expression:"fn"}],staticClass:"async-button",class:{awesome:t.fa},attrs:{type:"button",title:t.title,disabled:t.disabled},on:{click:t.update}},[e("span",{staticClass:"button-content"},[t.loading?e("span",{staticClass:"icon loading"},[t.fa?e("i",{class:t.loadingClasses}):e("LoadingIcon",{attrs:{rotate:""}})],1):!0===t.asyncState?e("span",{staticClass:"icon success"},[t.fa?e("i",{staticClass:"fas fa-check"}):e("span",[t._v("✔️")])]):!1===t.asyncState?e("span",{staticClass:"icon error"},[t.fa?e("i",{staticClass:"fas fa-times"}):e("span",[t._v("❌")])]):e("span",{staticClass:"icon default"},[t.fa?e("i",{class:t.icon}):t.icon?e("span",[t._v(t._s(t.icon))]):e("LoadingIcon")],1),e("span",{staticClass:"text"},[t._t("default")],2)])])},o=[],n=i(42918),a=i(91144);const l={components:{BButton:a.A,LoadingIcon:n.A},name:"AsyncButton",props:{fn:{type:Function,required:!0},fa:{type:Boolean,default:!1},confirm:{type:Boolean,default:!1},icon:{type:String,default:""},title:{type:String,default:null},disabled:{type:Boolean,default:!1},consistent:{type:Boolean,default:!1},nativeTooltip:{type:Boolean,default:!1}},data(){return{loading:!1,asyncState:null}},computed:{loadingClasses(){let t=this.consistent?this.icon.split(" "):["fas","fa-spinner"];return t.push("fa-spin"),t}},methods:{async update(t){if(null===this.asyncState&&!this.disabled)try{this.$emit("before",t),this.loading=!0,this.asyncState=await this.fn(t),this.confirm?"boolean"!==typeof this.asyncState&&(this.asyncState=!0):this.asyncState=null}catch(e){this.asyncState=!1}finally{this.loading=!1,this.$emit("after",this.asyncState),this.confirm&&setTimeout((()=>this.asyncState=null),3e3)}}}},u=l;var c=i(81656),h=(0,c.A)(u,s,o,!1,null,"ec4b291e",null);const r=h.exports},91144:(t,e,i)=>{i.d(e,{A:()=>c});var s=function(){var t=this,e=t._self._c;return e("button",{ref:"button",attrs:{type:"button",title:t.nativeTitle,disabled:t.disabled,name:t.name,value:t.value},on:{click:t.click,mouseover:t.mouseover,mouseleave:t.mouseleave,focus:t.focus,blur:t.blur}},[t._t("default",(function(){return[t._v(t._s(t.text))]}))],2)},o=[];const n={name:"BButton",props:{type:{type:String,default:"button"},text:{type:String,default:""},title:{type:String,default:null},disabled:{type:Boolean,default:!1},name:{type:String,default:null},value:{type:String,default:null},nativeTooltip:{type:Boolean,default:!1}},data(){return{showTooltip:!1,nativeTooltip_:this.nativeTooltip,element:null,container:null}},mounted(){this.container=document.getElementsByTagName("body")[0],this.container||(this.container=this.$refs.button.parentNode,this.container||(this.nativeTooltip_=!0))},beforeDestroy(){this.removeTooltip()},computed:{nativeTitle(){return this.nativeTooltip_?this.title:null}},watch:{nativeTooltip(t){this.nativeTooltip_=t},showTooltip(t){this.nativeTooltip_||(t?this.createTooltip():this.removeTooltip())},title(){this.title?this.updateTooltip():this.showTooltip=!1}},methods:{createTooltip(){this.container&&this.title&&(this.element&&this.removeTooltip(),this.element=document.createElement("div"),this.element.className="openeo-vue-tooltip",this.element.addEventListener("mouseover",(()=>this.showTooltip=!1)),this.container.appendChild(this.element),this.updateTooltip())},updateTooltip(){if(!this.element)return;this.element.innerText=this.title;const t=this.$refs.button,e=t.getBoundingClientRect();this.element.style.top=Math.max(0,e.top+t.offsetHeight)+1+"px",this.element.style.left=Math.max(0,e.left+t.offsetWidth/2-this.element.offsetWidth/2)+1+"px"},removeTooltip(){this.container&&this.element&&(this.container.contains(this.element)&&this.container.removeChild(this.element),this.element=null)},click(t){this.$emit("click",t)},mousemove(t){this.updateTooltip(),this.$emit("mousemove",t)},mouseover(t){this.showTooltip=!0,this.$emit("mouseover",t)},mouseleave(t){this.showTooltip=!1,this.$emit("mouseleave",t)},focus(t){this.showTooltip=!0,this.$emit("focus",t)},blur(t){this.showTooltip=!1,this.$emit("blur",t)}}},a=n;var l=i(81656),u=(0,l.A)(a,s,o,!1,null,null,null);const c=u.exports}}]);
//# sourceMappingURL=3549.212045fa.js.map