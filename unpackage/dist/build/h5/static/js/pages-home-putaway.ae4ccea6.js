(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-putaway"],{"0057":function(t,e,a){"use strict";a.r(e);var n=a("d87c"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},9542:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-form",{staticStyle:{margin:"3rem"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.onSubmit.apply(void 0,arguments)}}},[a("van-cell-group",{directives:[{name:"show",rawName:"v-show",value:1==t.i18n.palletNo[1],expression:"i18n.palletNo[1]==1"}]},[a("van-field",{ref:"pallet",attrs:{label:"收货标签",rules:[{required:!0,message:"请提供收货标签"}],required:!0},model:{value:t.pallet,callback:function(e){t.pallet=e},expression:"pallet"}})],1),a("van-cell-group",{directives:[{name:"show",rawName:"v-show",value:1==t.i18n.location[1],expression:"i18n.location[1]==1"}]},[a("van-field",{attrs:{label:"库位",rules:[{required:!0,message:"请提供库位"}],required:!0},model:{value:t.fromLocCode,callback:function(e){t.fromLocCode=e},expression:"fromLocCode"}})],1),a("div",{staticStyle:{margin:"2rem"}},[a("van-button",{attrs:{loading:t.loading,round:!0,block:!0,type:"info","native-type":"submit"}},[t._v("确定")])],1)],1)},i=[]},d87c:function(t,e,a){"use strict";(function(t){var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a("20b5")),i=a("4247"),r={data:function(){return{pallet:"",fromLocCode:"",loading:!1}},computed:{i18n:function(){return this.$t("putaway")}},mounted:function(){var t=this;uni.setNavigationBarTitle({title:this.$t("putaway").title}),this.$nextTick((function(){t.$refs.pallet.focus()}))},methods:{onSubmit:function(){var e=this;this.loading=!0,o.default.post(this.apiUrl.apiUrl+"/api/app/pdaManager/putawayBySerialNo",{pallet:this.pallet,toLocCode:this.fromLocCode}).then((function(a){t.log(a),e.loading=!1,1==a.data&&(0,i.Toast)({message:e.$t("putaway").putawaySuccessMsg})})).catch((function(a){t.log(a),e.loading=!1,(0,i.Toast)({message:e.$t("putaway").putawayErrorMsg})}))}}};e.default=r}).call(this,a("5a52")["default"])},dc4c:function(t,e,a){"use strict";a.r(e);var n=a("9542"),o=a("0057");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);var r,l=a("f0c5"),u=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"d865e440",null,!1,n["a"],r);e["default"]=u.exports}}]);