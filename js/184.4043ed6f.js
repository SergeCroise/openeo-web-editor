(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[184],{33522:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[e(t.containerTag,{ref:"container",tag:"component",staticClass:"modal-container",class:{smooth:t.smooth},style:t.style,on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.submitFunction.apply(null,arguments)}}},[e("header",{staticClass:"modal-header",on:{mousedown:t.startMove}},[t._t("header",(function(){return[e("h2",[t._v(t._s(t.title))]),e("span",{staticClass:"close",on:{click:t.close}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),e("main",{staticClass:"modal-content"},[t._t("default")],2),e("footer",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t.submitFunction?e("button",{attrs:{type:"submit"}},[t._v(t._s(t.submitButtonText))]):t._e()]}))],2)])],1)},a=[],n=s(43334),o=s(79879);const r={name:"Modal",mixins:[n.Z],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0},submitFunction:{type:Function,default:null},submitButtonText:{type:String,default:"Submit"}},data(){return{zIndex:1e3,position:null,dragPosition:null,smooth:!1}},computed:{...o.Z.mapState("editor",["hightestModalZIndex"]),style(){let t={width:this.width};return this.minWidth&&(t["min-width"]=this.minWidth),Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t},containerTag(){return this.submitFunction?"form":"div"}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}},width(){this.smoothResize()},minWidth(){this.smoothResize()}},methods:{...o.Z.mapMutations("editor",["openModal","closeModal"]),smoothResize(){this.smooth=!0,setTimeout((()=>this.smooth=!1),600)},submit(t){this.submitFunction(t)},open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){"H2"!==t.target.tagName&&(this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),t.preventDefault(),t.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},c=r;var l=s(1001),d=(0,l.Z)(c,i,a,!1,null,null,null);const h=d.exports},90184:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>f});var i=function(){var t=this,e=t._self._c;return e("Modal",{attrs:{id:"WizardModal",show:t.show,width:t.width,title:t.title},on:{closed:function(e){return t.$emit("closed")}},scopedSlots:t._u([{key:"default",fn:function(){return[t.selected?e("div",{staticClass:"wizard"},[e("div",{staticClass:"wizard-navigation"},[e("div",{staticClass:"wizard-progress-with-circle"},[e("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),e("ul",{staticClass:"wizard-nav wizard-nav-pills",attrs:{role:"tablist"}},t._l(t.tabs,(function(s,i){return e("wizard-step",{key:i,attrs:{tab:s,index:i},nativeOn:{click:function(e){return t.navigateToTab(i)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.navigateToTab(i)}}})})),1)]),e(t.selected.component,{ref:"component",tag:"component",attrs:{parent:t.self,options:t.options},on:{input:t.execute,close:t.close}})],1):e("div",{staticClass:"start"},[e("div",{staticClass:"message warning"},[e("i",{staticClass:"fas fa-bullhorn"}),e("span",[t._v("Please note that this feature is "),e("strong",[t._v("experimental")]),t._v(" and there are chances that the generated models won't work.")])]),e("p",[t._v("This wizard helps you to create openEO processes in a simple way for some common use cases.")]),e("p",[t._v("Which use case do you want to work on today?")]),e("ul",[t._l(t.usecases,(function(s){return[s.hide?t._e():e("li",{key:s.component,staticClass:"element",on:{click:function(e){return t.start(s)}}},[e("div",{staticClass:"summary"},[e("strong",[t._v(t._s(t.getUsecaseTitle(s)))]),e("small",[t._v(t._s(s.description))])])])]}))],2)])]},proxy:!0},{key:"footer",fn:function(){return[t.selected?[e("div",{staticClass:"wizard-back"},[t.activeTabIndex>0?e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.prevTab.apply(null,arguments)}}},[e("button",{attrs:{tabindex:"-1",type:"button"}},[t._v("Back")])]):t.selected.hide?t._e():e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.reset,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.reset.apply(null,arguments)}}},[e("button",{attrs:{tabindex:"-1",type:"button"}},[t._v("Start over")])])]),e("div",{staticClass:"wizard-next"},[t.isLastStep?e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.nextTab.apply(null,arguments)}}},[e("button",{attrs:{tabindex:"-1",type:"button"}},[t._v("Create")])]):e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.nextTab.apply(null,arguments)}}},[e("button",{attrs:{tabindex:"-1",type:"button"}},[t._v("Next")])])])]:t._e()]},proxy:!0}])})},a=[],n=s(33522),o=s(1961),r=s(79879),c=s(4216),l=s(43334),d=s(25108);const h=c.Z.supportedWizards||[];let u={Download:()=>Promise.all([s.e(7017),s.e(871),s.e(5833),s.e(3135),s.e(9163),s.e(5918),s.e(5137),s.e(6889),s.e(7483),s.e(8653),s.e(4681),s.e(6933),s.e(7907),s.e(2719),s.e(3691)]).then(s.bind(s,58889)),UDP:()=>Promise.all([s.e(2232),s.e(4631),s.e(7017),s.e(871),s.e(5833),s.e(3135),s.e(9163),s.e(5918),s.e(5137),s.e(6889),s.e(7483),s.e(8653),s.e(4681),s.e(6933),s.e(8522),s.e(6778),s.e(4238),s.e(7355),s.e(6447),s.e(2840)]).then(s.bind(s,22840)),Modal:n.Z,WizardStep:o["default"]};for(let x of h)u[x.component]=()=>s(71400)(`./${x.component}.vue`);const p={name:"WizardModal",mixins:[l.Z],components:u,data(){return{show:!0,selected:null,usecases:[{component:"Download",title:"Download Data",description:"Just download a small portion of data."},{component:"UDP",title:()=>"string"===typeof this.options.process?this.options.process.replace(/@.+/,""):"Run UDP",description:"Executes a user-defined process"},...c.Z.supportedWizards||[]],activeTabIndex:0,currentPercentage:0,maxStep:0,tabs:[],process:null}},props:{preselectUsecase:{type:String,default:null},options:{type:Object,default:()=>({})}},created(){this.preselectUsecase&&(this.selected=this.usecases.find((t=>t.component===this.preselectUsecase))||null)},computed:{...r.Z.mapGetters(["supports"]),supportsJobs(){return this.supports("createJob")&&this.supports("startJob")},supportsSync(){return this.supports("computeResult")},self(){return this},width(){return this.selected?"90%":"50%"},title(){let t="Process Wizard";return this.selected&&(t+=": "+this.getUsecaseTitle(this.selected)),t},isLastStep(){return this.activeTabIndex===this.tabs.length-1},progressBarStyle(){return{backgroundColor:this.color,width:`${this.progress}%`,color:this.color}},progress(){let t=1/(2*this.tabs.length)*100;return this.activeTabIndex>0&&(t*=2*this.activeTabIndex+1),t}},methods:{...r.Z.mapMutations("editor",["setProcess"]),start(t){this.selected=t},reset(){this.selected=null,this.activeTabIndex=0,this.currentPercentage=0,this.maxStep=0,this.tabs=[]},close(t=null){this.show=!1,t&&r.Z.error(this,t,"Wizard Error")},async execute({process:t,mode:e,modeOptions:s}){this.setProcess(t),"sync"==e&&this.supportsSync?this.broadcast("executeProcess"):"job"==e&&this.supportsJobs&&this.broadcast("startAndQueueProcess",s)},getUsecaseTitle(t){return"function"==typeof t.title?t.title():t.title},addTab(t,e){this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab(t){const e=this.tabs.indexOf(t);e>-1&&(e===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),e<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1),this.tabs.splice(e,1))},navigateToTab(t){let e=t>this.activeTabIndex;if(t<=this.maxStep){let s=()=>{e&&t-this.activeTabIndex>1?(this.changeTab(this.activeTabIndex,this.activeTabIndex+1),this.beforeTabChange(this.activeTabIndex,s)):(this.changeTab(this.activeTabIndex,t),this.afterTabChange(this.activeTabIndex))};e?this.beforeTabChange(this.activeTabIndex,s):(this.setValidationError(null),s())}return t<=this.maxStep},nextTab(){let t=()=>{this.activeTabIndex<this.tabs.length-1?(this.changeTab(this.activeTabIndex,this.activeTabIndex+1),this.afterTabChange(this.activeTabIndex)):this.isLastStep&&this.$refs.component.finish().then(this.close).catch((t=>r.Z.exception(this,t)))};this.beforeTabChange(this.activeTabIndex,t)},prevTab(){let t=()=>{this.activeTabIndex>0&&(this.setValidationError(null),this.changeTab(this.activeTabIndex,this.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,t):t()},setValidationError(t){t&&r.Z.error(this,t),this.tabs[this.activeTabIndex].validationError=t},beforeTabChange(t,e){const s="Please fill the form";this.setValidationError(null);let i=this.tabs[t];if(i&&void 0!==i.beforeChange)try{let t=i.beforeChange();t instanceof Promise?t.then((t=>t?e():this.setValidationError(s))).catch((t=>this.setValidationError(t.message))):t?e():this.setValidationError(s)}catch(a){this.setValidationError(a.message)}else e()},afterTabChange(t){let e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()},changeTab(t,e){let s=this.tabs[t],i=this.tabs[e];return s&&(s.active=!1),i&&(i.active=!0),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},deactivateTabs(){this.tabs.forEach((t=>t.active=!1))},activateTab(t){this.deactivateTabs();let e=this.tabs[t];e&&(e.active=!0,e.checked=!0)},activateTabAndCheckStep(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):d.warn(`Prop startIndex set to ${this.startIndex} is greater than the number of tabs - ${this.tabs.length}. Make sure that the starting index is less than the number of tabs registered`)}}},b=p;var v=s(1001),m=(0,v.Z)(b,i,a,!1,null,null,null);const f=m.exports},1961:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=function(){var t=this,e=t._self._c;return e("li",{class:{active:t.tab.active,error:t.tab.validationError,checked:t.tab.checked}},[e("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"wizard-icon-circle",attrs:{tabindex:t.tab.checked?0:""}},[e("transition",{attrs:{mode:"out-in"}},[t.tab.active?e("div",{staticClass:"wizard-icon-container"},[e("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])]):e("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],1),e("span",{staticClass:"stepTitle"},[t._v(t._s(t.tab.title))])])])},a=[];const n={name:"wizard-step",props:{tab:{type:Object,required:!0},index:{type:Number,required:!0}}},o=n;var r=s(1001),c=(0,r.Z)(o,i,a,!1,null,null,null);const l=c.exports},71400:(t,e,s)=>{var i={"./Download.vue":[58889,7017,871,5833,3135,9163,5918,5137,6889,7483,8653,4681,6933,7907,2719,3691],"./SpectralIndices.vue":[55173,7017,871,5833,3135,9163,5918,5137,6889,7483,8653,4681,6933,7907,2719,6697],"./UDP.vue":[22840,2232,4631,7017,871,5833,3135,9163,5918,5137,6889,7483,8653,4681,6933,8522,6778,4238,7355,6447,2840],"./components/WizardStep.vue":[1961],"./components/WizardTab.vue":[39354,9354],"./tabs/ChooseBoundingBox.vue":[60178,7017,871,5833,3135,9163,5918,5137,6889,7483,8653,4681,6933,9474],"./tabs/ChooseCollection.vue":[23405,3405],"./tabs/ChooseFormat.vue":[31075,7907,1075],"./tabs/ChooseProcessParameters.vue":[88505,2232,4631,7017,871,5833,3135,9163,5918,5137,6889,7483,8653,4681,6933,8522,6778,4238,7355,6447,8505],"./tabs/ChooseProcessingMode.vue":[37518,7518],"./tabs/ChooseReducer.vue":[46636,7907,6636],"./tabs/ChooseSpectralIndices.vue":[89055,9055],"./tabs/ChooseTime.vue":[40507,2719,3488],"./tabs/ChooseUserDefinedProcess.vue":[49714,9714]};function a(t){if(!s.o(i,t))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],a=e[0];return Promise.all(e.slice(1).map(s.e)).then((()=>s(a)))}a.keys=()=>Object.keys(i),a.id=71400,t.exports=a}}]);
//# sourceMappingURL=184.4043ed6f.js.map