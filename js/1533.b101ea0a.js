(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[1533],{94679:(t,e,s)=>{"use strict";s.d(e,{A:()=>h});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[e(t.containerTag,{ref:"container",tag:"component",staticClass:"modal-container",class:{smooth:t.smooth},style:t.style,on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.submitFunction.apply(null,arguments)}}},[e("header",{staticClass:"modal-header",on:{mousedown:t.startMove}},[t._t("header",(function(){return[e("h2",[t._v(t._s(t.title))]),e("span",{staticClass:"close",on:{click:t.close}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),e("main",{staticClass:"modal-content"},[t._t("default")],2),e("footer",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t.submitFunction?e("button",{attrs:{type:"submit"}},[t._v(t._s(t.submitButtonText))]):t._e()]}))],2)])],1)},a=[],n=s(61663),o=s(2566);const r={name:"Modal",mixins:[n.A],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0},submitFunction:{type:Function,default:null},submitButtonText:{type:String,default:"Submit"}},data(){return{zIndex:1e3,position:null,dragPosition:null,smooth:!1}},computed:{...o.A.mapState("editor",["hightestModalZIndex"]),style(){let t={width:this.width};return this.minWidth&&(t["min-width"]=this.minWidth),Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t},containerTag(){return this.submitFunction?"form":"div"}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}},width(){this.smoothResize()},minWidth(){this.smoothResize()}},methods:{...o.A.mapMutations("editor",["openModal","closeModal"]),smoothResize(){this.smooth=!0,setTimeout((()=>this.smooth=!1),600)},submit(t){this.submitFunction(t)},open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){"H2"!==t.target.tagName&&(this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),t.preventDefault(),t.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},c=r;var l=s(81656),d=(0,l.A)(c,i,a,!1,null,null,null);const h=d.exports},31533:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>x});var i=function(){var t=this,e=t._self._c;return e("Modal",{attrs:{id:"WizardModal",show:t.show,width:t.width,title:t.title,submitFunction:t.nextTab},on:{closed:function(e){return t.$emit("closed")}},scopedSlots:t._u([{key:"default",fn:function(){return[t.selected?e("div",{staticClass:"wizard"},[e("div",{staticClass:"wizard-navigation"},[e("div",{staticClass:"wizard-progress-with-circle"},[e("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),e("ul",{staticClass:"wizard-nav wizard-nav-pills",attrs:{role:"tablist"}},t._l(t.tabs,(function(s,i){return e("wizard-step",{key:i,attrs:{tab:s,index:i},nativeOn:{click:function(e){return t.navigateToTab(i)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.navigateToTab(i)}}})})),1)]),e(t.selected.component,{ref:"component",tag:"component",attrs:{parent:t.self,options:t.options},on:{input:t.execute,close:t.close}})],1):e("div",{staticClass:"start"},[e("div",{staticClass:"message warning"},[e("i",{staticClass:"fas fa-bullhorn"}),e("span",[t._v("Please note that this feature is "),e("strong",[t._v("experimental")]),t._v(" and there are chances that the generated models won't work.")])]),e("p",[t._v("This wizard helps you to create openEO processes in a simple way for some common use cases.")]),e("p",[t._v("Which use case do you want to work on today?")]),e("ul",[t._l(t.usecases,(function(s){return[s.hide?t._e():e("li",{key:s.component,staticClass:"element",on:{click:function(e){return t.start(s)}}},[e("div",{staticClass:"summary"},[e("strong",[t._v(t._s(t.getUsecaseTitle(s)))]),e("small",[t._v(t._s(s.description))])])])]}))],2)])]},proxy:!0},{key:"footer",fn:function(){return[t.selected?[e("div",{staticClass:"wizard-back"},[t.activeTabIndex>0?e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.prevTab.apply(null,arguments)}}},[e("button",{attrs:{tabindex:"-1",type:"button"}},[t._v("Back")])]):t.selected.hide?t._e():e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.reset,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.reset.apply(null,arguments)}}},[e("button",{attrs:{tabindex:"-1",type:"button"}},[t._v("Start over")])])]),e("div",{staticClass:"wizard-next"},[t.isLastStep?e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.nextTab.apply(null,arguments)}}},[e("button",{attrs:{tabindex:"-1",type:"button"}},[t._v("Create")])]):e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.nextTab.apply(null,arguments)}}},[e("button",{attrs:{tabindex:"-1",type:"button"}},[t._v("Next")])])])]:t._e()]},proxy:!0}])})},a=[],n=s(94679),o=s(15559),r=s(2566),c=s(19306),l=s(61663),d=s(99017),h=s(96763);const u=c.A.supportedWizards||[];let p={Download:()=>Promise.all([s.e(2279),s.e(2159),s.e(2395),s.e(1189),s.e(2997),s.e(9707),s.e(5767),s.e(7394),s.e(9049),s.e(3581),s.e(8828),s.e(4996),s.e(5262),s.e(7349),s.e(8085)]).then(s.bind(s,84385)),UDP:()=>Promise.all([s.e(7497),s.e(5237),s.e(2279),s.e(2159),s.e(2395),s.e(1189),s.e(2997),s.e(9707),s.e(5767),s.e(7394),s.e(9049),s.e(3581),s.e(8828),s.e(4996),s.e(7261),s.e(2603),s.e(4394),s.e(4625),s.e(510),s.e(4824)]).then(s.bind(s,4824)),Modal:n.A,WizardStep:o["default"]};for(let T of u)p[T.component]=()=>s(6524)(`./${T.component}.vue`);const b={name:"WizardModal",mixins:[l.A],components:p,data(){return{show:!0,selected:null,usecases:[{component:"Download",title:"Download Data",description:"Just download a small portion of data."},{component:"UDP",title:()=>"string"===typeof this.options.process?this.options.process.replace(/@.+/,""):"Run UDP",description:"Executes a user-defined process"},...c.A.supportedWizards||[]],activeTabIndex:0,currentPercentage:0,maxStep:0,tabs:[],process:null}},props:{preselectUsecase:{type:String,default:null},options:{type:Object,default:()=>({})}},created(){this.preselectUsecase&&(this.selected=this.usecases.find((t=>t.component===this.preselectUsecase))||null)},computed:{...r.A.mapGetters(["supports"]),supportsJobs(){return this.supports("createJob")&&this.supports("startJob")},supportsSync(){return this.supports("computeResult")},self(){return this},width(){return this.selected?"90%":"50%"},title(){let t="Process Wizard";return this.selected&&(t+=": "+this.getUsecaseTitle(this.selected)),t},isLastStep(){return this.activeTabIndex===this.tabs.length-1},progressBarStyle(){return{backgroundColor:this.color,width:`${this.progress}%`,color:this.color}},progress(){let t=1/(2*this.tabs.length)*100;return this.activeTabIndex>0&&(t*=2*this.activeTabIndex+1),t}},methods:{...r.A.mapMutations("editor",["setProcess"]),start(t){this.selected=t},reset(){this.selected=null,this.activeTabIndex=0,this.currentPercentage=0,this.maxStep=0,this.tabs=[]},close(t=null){this.show=!1,t&&r.A.error(this,t,"Wizard Error")},async execute({process:t,mode:e,modeOptions:s}){this.setProcess(t),"sync"==e&&this.supportsSync?this.broadcast("executeProcess"):"job"==e&&this.supportsJobs&&this.broadcast("startAndQueueProcess",s)},getUsecaseTitle(t){return"function"==typeof t.title?t.title():t.title},addTab(t,e){this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab(t){const e=this.tabs.indexOf(t);e>-1&&(e===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),e<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1),this.tabs.splice(e,1))},navigateToTab(t){let e=t>this.activeTabIndex;if(t<=this.maxStep){let s=()=>{e&&t-this.activeTabIndex>1?(this.changeTab(this.activeTabIndex,this.activeTabIndex+1),this.beforeTabChange(this.activeTabIndex,s)):(this.changeTab(this.activeTabIndex,t),this.afterTabChange(this.activeTabIndex))};e?this.beforeTabChange(this.activeTabIndex,s):(this.setValidationError(null),s())}return t<=this.maxStep},nextTab(){let t=()=>{this.activeTabIndex<this.tabs.length-1?(this.changeTab(this.activeTabIndex,this.activeTabIndex+1),this.afterTabChange(this.activeTabIndex)):this.isLastStep&&this.$refs.component.finish().then(this.close).catch((t=>{t instanceof d.QJ?(t.isError?r.A.exception(this,t,t.title):r.A.ok(this,t.message,t.title),t.close&&this.close()):r.A.exception(this,t)}))};this.beforeTabChange(this.activeTabIndex,t)},prevTab(){let t=()=>{this.activeTabIndex>0&&(this.setValidationError(null),this.changeTab(this.activeTabIndex,this.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,t):t()},setValidationError(t){t&&r.A.error(this,t),this.tabs[this.activeTabIndex].validationError=t},beforeTabChange(t,e){const s="Please fill the form";this.setValidationError(null);let i=this.tabs[t];if(i&&void 0!==i.beforeChange)try{let t=i.beforeChange();t instanceof Promise?t.then((t=>t?e():this.setValidationError(s))).catch((t=>this.setValidationError(t.message))):t?e():this.setValidationError(s)}catch(a){this.setValidationError(a.message)}else e()},afterTabChange(t){let e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()},changeTab(t,e){let s=this.tabs[t],i=this.tabs[e];return s&&(s.active=!1),i&&(i.active=!0),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},deactivateTabs(){this.tabs.forEach((t=>t.active=!1))},activateTab(t){this.deactivateTabs();let e=this.tabs[t];e&&(e.active=!0,e.checked=!0)},activateTabAndCheckStep(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):h.warn(`Prop startIndex set to ${this.startIndex} is greater than the number of tabs - ${this.tabs.length}. Make sure that the starting index is less than the number of tabs registered`)}}},v=b;var m=s(81656),f=(0,m.A)(v,i,a,!1,null,null,null);const x=f.exports},15559:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=function(){var t=this,e=t._self._c;return e("li",{class:{active:t.tab.active,error:t.tab.validationError,checked:t.tab.checked}},[e("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"wizard-icon-circle",attrs:{tabindex:t.tab.checked?0:""}},[e("transition",{attrs:{mode:"out-in"}},[t.tab.active?e("div",{staticClass:"wizard-icon-container"},[e("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])]):e("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],1),e("span",{staticClass:"stepTitle"},[t._v(t._s(t.tab.title))])])])},a=[];const n={name:"wizard-step",props:{tab:{type:Object,required:!0},index:{type:Number,required:!0}}},o=n;var r=s(81656),c=(0,r.A)(o,i,a,!1,null,null,null);const l=c.exports},99017:(t,e,s)=>{"use strict";s.d(e,{Kt:()=>c,QJ:()=>n,Vz:()=>o});var i=s(73902),a=s(2566);class n extends Error{constructor(t,e=null,s=null,i=!0,a=!0){super(t,{cause:s}),this.title=e,this.close=i,this.isError=a}}function o(t,e){e instanceof n&&(e.isError?a.A.error(t,e.message,e.title):a.A.ok(t,e.message,e.title))}let r={};async function c(t,e,s){r[s]?r[s]++:r[s]=1;const o=new i.AbortController,c=Object.assign({},t.$config.snotifyDefaults,{timeout:0,type:"async",buttons:[{text:"Cancel",action:()=>{o.abort()}}]});let l;const d=`${s} #${r[s]}`;try{const s="Processing in progress, please wait...",i=()=>new Promise((()=>{}));l=t.$snotify.async(s,d,i,c),await e(o)}catch(h){if(axios.isCancel(h))throw new n("Cancelled successfully",d,h,!1,!1);if("string"!==typeof h.message||!a.A.isObject(h.response)||![400,500].includes(h.response.status))throw new n(h.message,d,h,!1);t.broadcast("viewLogs",[{id:h.id,code:h.code,level:"error",message:h.message,links:h.links||[]}]),a.A.error(t,`${s} failed. Please see the logs for details.`,d)}finally{l&&t.$snotify.remove(l.id,!0)}}},6524:(t,e,s)=>{var i={"./Download.vue":[84385,2279,2159,2395,1189,2997,9707,5767,7394,9049,3581,8828,4996,5262,7349,8085],"./SpectralIndices.vue":[85654,2279,2159,2395,1189,2997,9707,5767,7394,9049,3581,8828,4996,5262,7349,7344],"./UDP.vue":[4824,7497,5237,2279,2159,2395,1189,2997,9707,5767,7394,9049,3581,8828,4996,7261,2603,4394,4625,510,4824],"./components/WizardStep.vue":[15559],"./components/WizardTab.vue":[4477,4477],"./tabs/ChooseBoundingBox.vue":[34862,2279,2159,2395,1189,2997,9707,5767,7394,9049,3581,8828,4996,7998],"./tabs/ChooseCollection.vue":[4475,4475],"./tabs/ChooseFormat.vue":[79066,5262,9066],"./tabs/ChooseProcessParameters.vue":[31237,7497,5237,2279,2159,2395,1189,2997,9707,5767,7394,9049,3581,8828,4996,7261,2603,4394,4625,510,1237],"./tabs/ChooseProcessingMode.vue":[37186,7186],"./tabs/ChooseReducer.vue":[46036,5262,6036],"./tabs/ChooseSpectralIndices.vue":[39201,9201],"./tabs/ChooseTime.vue":[62804,7349,8080],"./tabs/ChooseUserDefinedProcess.vue":[37336,7336]};function a(t){if(!s.o(i,t))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],a=e[0];return Promise.all(e.slice(1).map(s.e)).then((()=>s(a)))}a.keys=()=>Object.keys(i),a.id=6524,t.exports=a}}]);
//# sourceMappingURL=1533.b101ea0a.js.map