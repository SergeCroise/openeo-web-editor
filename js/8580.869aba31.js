"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[8580],{58580:(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});var o=function(){var t=this,e=t._self._c;return e("Modal",{attrs:{show:t.show,title:"Import process from external source",submitFunction:t.submit},on:{closed:function(e){return t.$emit("closed")}},scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"content"},[t._v(" You can load an external process from multiple different sources: "),e("h3",[t._v("Upload JSON file from your computer")]),e("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.uploadFile.apply(null,arguments)}}},[e("input",{attrs:{type:"file",name:"file",accept:"application/json"},on:{change:t.setFile}}),t._v(" "),e("button",{attrs:{disabled:!t.hasFile}},[t._v("Upload")])]),e("h3",[t._v("Download JSON file from the internet")]),e("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.loadUrl.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"url",name:"url"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),t._v(" "),e("button",{attrs:{disabled:!t.hasUrl}},[t._v("Load")])]),t.gh.length>0?[e("h3",[t._v("Examples from openEO processes repository")]),e("ul",t._l(t.gh,(function(s){return e("li",{key:s.name},[e("a",{on:{click:function(e){return t.request(s.url)}}},[t._v(t._s(s.name))])])})),0)]:t._e(),e("h3",[t._v("Import from client libraries (Python and R)")]),e("p",[t._v(" You can also import processes generated by the Python and R client."),e("br"),t._v(' Please read the chapter "'),e("a",{attrs:{href:"https://openeo.org/documentation/1.0/cookbook/#output-process-as-json",target:"_blank"}},[t._v("Output: Process as JSON")]),t._v('" in the openEO cookbook.'),e("br"),t._v(" After storing the JSON file to your computer, you can upload the JSON file above. ")])],2)]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"footer"},[e("button",{attrs:{type:"submit",disabled:!t.process}},[t._v(" Import "),null===t.processId?[t._v("unnamed process")]:t.processId?e("code",[t._v(t._s(t.processId))]):t._e()],2)])]},proxy:!0}])})},i=[],n=(s(98992),s(54520),s(72577),s(81454),s(2566)),r=s(94679);const a={name:"ImportProcessModal",components:{Modal:r.A},data(){return{gh:[],process:null,url:null,file:null,show:!0}},async created(){if(this.$config.importCommunityExamples)try{let t=await n.A.axios().get("https://api.github.com/repos/Open-EO/openeo-community-examples/git/trees/main"),e=t.data.tree.find((t=>"processes"===t.path));if(e){let t=await n.A.axios.get(e.url);this.gh=t.data.tree.filter((t=>t.path.endsWith(".json"))).map((t=>({name:t.path.substring(0,t.path.length-5),url:`https://raw.githubusercontent.com/Open-EO/openeo-community-examples/main/processes/${t.path}`})))}}catch(t){console.warn(t)}},computed:{processId(){return n.A.isObject(this.process)?this.process.id?this.process.id:null:""},hasUrl(){return n.A.isUrl(this.url)},hasFile(){return!!this.file}},methods:{checkProcess(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){throw new Error("Process is not valid JSON")}if(!n.A.isObject(t))throw new Error("Process does not contain any data");if(!n.A.isObject(t.process_graph))throw new Error("Process does not contain a process graph");return t},setFile(t){t.dataTransfer&&t.dataTransfer.files&&t.dataTransfer.files.length>0?this.file=t.dataTransfer.files[0]:t.target&&t.target.files&&t.target.files.length>0?this.file=t.target.files[0]:this.file=null},uploadFile(){var t=new FileReader;t.onload=async t=>{try{this.process=this.checkProcess(t.target.result)}catch(e){n.A.exception(this,e,"Upload failed")}},t.onerror=t=>n.A.exception(this,t,"Reading JSON file failed"),t.readAsText(this.file,"UTF-8")},loadUrl(){this.request(this.url)},async request(t){try{if(!n.A.isUrl(t))throw new Error("Please provide a valid URL");let e=await n.A.axios().get(t);this.process=this.checkProcess(e.data)}catch(e){n.A.exception(this,e,"Download failed")}},submit(){this.process&&(this.$emit("save",this.process),this.show=!1)}}},l=a;var u=s(81656),c=(0,u.A)(l,o,i,!1,null,"7655c950",null);const h=c.exports},94679:(t,e,s)=>{s.d(e,{A:()=>h});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[e(t.containerTag,{ref:"container",tag:"component",staticClass:"modal-container",class:{smooth:t.smooth},style:t.style,on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.submitFunction.apply(null,arguments)}}},[e("header",{staticClass:"modal-header",on:{mousedown:t.startMove}},[t._t("header",(function(){return[e("h2",[t._v(t._s(t.title))]),e("span",{staticClass:"close",on:{click:t.close}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),e("main",{staticClass:"modal-content"},[t._t("default")],2),e("footer",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t.submitFunction?e("button",{attrs:{type:"submit"}},[t._v(t._s(t.submitButtonText))]):t._e()]}))],2)])],1)},i=[],n=s(61663),r=s(2566);const a={name:"Modal",mixins:[n.A],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0},submitFunction:{type:Function,default:null},submitButtonText:{type:String,default:"Submit"}},data(){return{zIndex:1e3,position:null,dragPosition:null,smooth:!1}},computed:{...r.A.mapState("editor",["hightestModalZIndex"]),style(){let t={width:this.width};return this.minWidth&&(t["min-width"]=this.minWidth),Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t},containerTag(){return this.submitFunction?"form":"div"}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}},width(){this.smoothResize()},minWidth(){this.smoothResize()}},methods:{...r.A.mapMutations("editor",["openModal","closeModal"]),smoothResize(){this.smooth=!0,setTimeout((()=>this.smooth=!1),600)},submit(t){this.submitFunction(t)},open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){"H2"!==t.target.tagName&&(this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),t.preventDefault(),t.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},l=a;var u=s(81656),c=(0,u.A)(l,o,i,!1,null,null,null);const h=c.exports}}]);
//# sourceMappingURL=8580.869aba31.js.map