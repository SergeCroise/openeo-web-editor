(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b6271ee"],{"168c":function(n,e,l){"use strict";l("cb75")},"1a41":function(n,e,l){"use strict";l.r(e);var a=function(){var n=this,e=n.$createElement,l=n._self._c||e;return l("section",{staticClass:"vue-component billing-plans"},[n.heading?l(n.headingTag,{tag:"component"},[n._v(n._s(n.heading))]):n._e(),l("strong",[n._v("Plans")]),null!==n.currency&&n.plans.length?l("ul",n._l(n.plans,(function(e){return l("li",{key:e.name},[l("div",{staticClass:"plan-header"},[l("strong",{staticClass:"plan-name"},[e.url?l("a",{attrs:{href:e.url,target:"_blank"}},[n._v(n._s(e.name))]):[n._v(n._s(e.name))]],2),l("ul",{staticClass:"badges small inline"},[n.defaultPlan==e.name?l("li",{staticClass:"badge default"},[n._v("default")]):n._e(),!0===e.paid?l("li",{staticClass:"badge red"},[n._v("paid")]):!1===e.paid?l("li",{staticClass:"badge green"},[n._v("free")]):n._e()])]),e.description?l("Description",{attrs:{description:e.description,compact:!0}}):n._e()],1)})),0):l("p",[n._v("No plans available.")]),l("div",{staticClass:"billing-currency"},[null!==n.currency?[l("strong",[n._v("Currency:")]),n._v(" "+n._s(n.currency)+" ")]:[n._v("No billing information provided.")]],2)],1)},t=[],i=l("60a2"),s={name:"BillingPlans",components:{Description:()=>l.e("chunk-e60f5ab4").then(l.bind(null,"8088"))},props:{billing:{type:Object,default:()=>({})},heading:{type:String,default:"Billing"},headingTag:{type:String,default:"h2"}},computed:{currency(){return"string"===typeof this.billing.currency?this.billing.currency:null},defaultPlan(){return"string"===typeof this.billing.default_plan?this.billing.default_plan:null},plans(){return Array.isArray(this.billing.plans)?this.billing.plans:[]}},beforeCreate(){i["a"].enableHtmlProps(this)}},r=s,c=(l("168c"),l("2877")),u=Object(c["a"])(r,a,t,!1,null,null,null);e["default"]=u.exports},cb75:function(n,e,l){}}]);
//# sourceMappingURL=chunk-5b6271ee.f33e3eeb.js.map