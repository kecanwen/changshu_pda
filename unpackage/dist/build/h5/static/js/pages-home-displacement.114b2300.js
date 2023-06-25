(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-displacement"],{"36ed":function(t,n,i){"use strict";var e=i("4ea4");i("d81d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(i("d1d8")),a=e(i("20b5")),s=i("4247"),d={components:{"van-select":o.default},data:function(){return{palletNo:"",startPosition:"",endPosition:"",endPositionCode:"",endPositions:[],endPositionList:[],loading:!1}},computed:{i18n:function(){return this.$t("displacement")}},mounted:function(){var t=this;uni.setNavigationBarTitle({title:this.$t("displacement").title}),this.$nextTick((function(){t.$refs.startPosition.focus()}))},onLoad:function(){this.getLocations()},methods:{endPositionOnChange:function(t){this.endPositionCode=this.endPositionList[t].xCode},getLocations:function(){var t=this;a.default.post(this.apiUrl.apiUrl+"/api/app/queryManager/location",{condition:{loctype:{"=":"PROCESS"},xstatus:{"=":"ENABLED"}},pageNumber:1,pageSize:100,queryType:2,sort:{XCode:!1}}).then((function(n){t.endPositionList=n.data.data,n.data.data.map((function(n){var i=n.xName;t.endPositions.push(i)})),t.endPositionList.length>0&&(t.endPositionCode=t.endPositionList[0].xCode,t.endPosition=t.endPositionList[0].xName)})).catch((function(n){(0,s.Toast)({message:t.$t("displacement").locationErrorMsg})}))},onSubmit:function(){var t=this;this.loading=!0,a.default.get(this.apiUrl.middleapiUrl+"/WCSService/GoPointToPoint",{params:{Pallet:this.palletNo,fromLocCode:this.startPosition,toLocCode:this.endPositionCode}}).then((function(n){t.loading=!1,1==n.data&&((0,s.Toast)({message:t.$t("displacement").displacementSuccessMsg}),t.palletNo="",t.startPosition="",t.inventoryStatu=t.endPositionCode)})).catch((function(n){t.loading=!1,(0,s.Toast)({message:t.$t("displacement").displacementErrorMsg})}))}}};n.default=d},"489d":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("van-form",{staticStyle:{margin:"3rem"},on:{submit:function(n){arguments[0]=n=t.$handleEvent(n),t.onSubmit.apply(void 0,arguments)}}},[i("van-cell-group",{directives:[{name:"show",rawName:"v-show",value:1==t.i18n.startPosition[1],expression:"i18n.startPosition[1]==1"}]},[i("van-field",{ref:"startPosition",attrs:{label:t.i18n.startPosition[0],rules:[{required:!0,message:t.i18n.startPositionMsg}],required:!0},model:{value:t.startPosition,callback:function(n){t.startPosition=n},expression:"startPosition"}})],1),i("van-cell-group",{directives:[{name:"show",rawName:"v-show",value:1==t.i18n.palletNo[1],expression:"i18n.palletNo[1]==1"}]},[i("van-field",{ref:"palletNo",attrs:{label:t.i18n.palletNo[0]},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.onChange.apply(void 0,arguments)}},model:{value:t.palletNo,callback:function(n){t.palletNo=n},expression:"palletNo"}})],1),i("van-cell-group",{directives:[{name:"show",rawName:"v-show",value:1==t.i18n.endPosition[1],expression:"i18n.endPosition[1]==1"}]},[i("van-select",{attrs:{label:t.i18n.endPosition[0],placeholder:t.i18n.dropdownMsg,rules:[{required:!0,message:t.i18n.endPositionMsg}],required:!0,columns:t.endPositions},on:{defclick:function(n){arguments[0]=n=t.$handleEvent(n),t.endPositionOnChange.apply(void 0,arguments)}},model:{value:t.endPosition,callback:function(n){t.endPosition=n},expression:"endPosition"}})],1),i("div",{staticStyle:{margin:"50px"}},[i("van-button",{attrs:{loading:t.loading,round:!0,block:!0,type:"info","native-type":"submit"}},[t._v(t._s(t.i18n.submit))])],1)],1)},a=[]},a75f:function(t,n,i){"use strict";i.r(n);var e=i("36ed"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},ad65:function(t,n,i){"use strict";i.r(n);var e=i("489d"),o=i("a75f");for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);var s,d=i("f0c5"),r=Object(d["a"])(o["default"],e["b"],e["c"],!1,null,"267a22e0",null,!1,e["a"],s);n["default"]=r.exports}}]);