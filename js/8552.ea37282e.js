"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[8552],{18552:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step choose-processing-mode"},[e.isAuthenticated&&(e.supportsJobs||e.supportsSync)?[t("p",[e._v("Please select how you'd like to execute this workflow?")]),t("ul",{staticClass:"mode"},[e.supportsJobs?t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",id:"job",value:"job"},domProps:{checked:e._q(e.mode,"job")},on:{change:function(t){e.mode="job"}}}),t("label",{attrs:{for:"job"}},[t("strong",[e._v("Batch Jobs")]),t("br"),e._v(" Slower processing mode for large amounts of data. Creates and queues a batch job."),t("br"),e._v(" It is recommended to provide a title for the batch job: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.titleInput,expression:"titleInput"}],ref:"title",attrs:{type:"text"},domProps:{value:e.titleInput},on:{input:function(t){t.target.composing||(e.titleInput=t.target.value)}}})])]):e._e(),e.supportsSync?t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",id:"sync",value:"sync"},domProps:{checked:e._q(e.mode,"sync")},on:{change:function(t){e.mode="sync"}}}),e._m(0)]):e._e(),e.supportsSync?t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",id:"model",value:""},domProps:{checked:e._q(e.mode,"")},on:{change:function(t){e.mode=""}}}),e._m(1)]):e._e()])]:t("p",[e._v(" The wizard has all information to create the workflow for you."),t("br"),e.isAuthenticated?[e._v("Unforntunately, this back-end can't process data,")]:[e._v("You are not logged in and thus you can't process data directly,")],e._v(" but you can insert the process into the visual model builder now. ")],2)],2)},r=[function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"sync"}},[t("strong",[e._v("Synchronous Processing")]),t("br"),e._v(" Fast processing mode for small amounts of data. ")])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"model"}},[t("strong",[e._v("Don't execute")]),t("br"),e._v(" Only show the generated workflow in the visual model builder. You can then export it or you can run it later. ")])}],a=o(79879);const i={name:"ChooseProcessingMode",props:{value:{type:String,default:null},title:{type:String,default:""}},data(){return{mode:this.value}},computed:{...a.Z.mapState(["isAuthenticated"]),...a.Z.mapGetters(["supports"]),titleInput:{get(){return this.title},set(e){this.$emit("update:title",e)}},supportsJobs(){return this.supports("createJob")&&this.supports("startJob")},supportsSync(){return this.supports("computeResult")}},watch:{value(){this.mode=this.value},mode(){this.$emit("input",this.mode),"job"===this.mode&&this.$refs.title.select()},title(){this.$emit("update:title",this.title)}}},n=i;var l=o(1001),u=(0,l.Z)(n,s,r,!1,null,"449febe3",null);const d=u.exports}}]);
//# sourceMappingURL=8552.ea37282e.js.map