(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{model:{value:e.theme,callback:function(t){e.theme=t},expression:"theme"}},[n("v-app-bar",{attrs:{app:"",color:"primary"}},[n("div",{staticClass:"d-flex align-center"},[n("span",{staticStyle:{color:"white"}},[e._v("UEC school/department select helper")])]),n("v-spacer"),n("v-btn",{staticClass:"mx-2",attrs:{icon:"",small:"",color:"white"},on:{click:e.changeColor}},[n("v-icon",[e._v(" mdi-invert-colors ")])],1)],1),n("v-main",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("InputArea",{on:{changedList:e.makeResult}})],1),n("v-col",{attrs:{cols:"6"}},[n("OutputArea",{attrs:{result_datas:e.result,theme:e.theme}})],1)],1)],1)],1),n("v-footer",{attrs:{fixed:!0}},[e._v(" v1.1.2"),n("v-spacer"),e._v(" 2021 - kamiya cou")],1)],1)},s=[],i=(n("159b"),n("4de4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto pt-5",attrs:{"max-width":"800"}},[n("div",e._l(e.selectedFields,(function(t){return n("v-chip",{key:t,staticClass:"ma-1",attrs:{close:"",outlined:""},on:{"click:close":function(n){return e.removeFields(t)}}},[e._v(e._s(t))])})),1),e._l(e.list,(function(t){return n("v-checkbox",{key:t,staticClass:"mx-5 mb-0 c-box",attrs:{label:t,value:t},on:{change:e.submitList},model:{value:e.selectedFields,callback:function(t){e.selectedFields=t},expression:"selectedFields"}})}))],2)}),o=[],c=(n("d81d"),n("a434"),n("ac1f"),n("1276"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),"生体計測工学 バイオシステム・分子生物学 生命情報科学・神経科学 固体物理・低温物性 光情報工学 レーザー科学 光化学 電子・磁気・光材料 電子デバイス・光デバイス 半導体・超伝導体 物質科学・機能材料科学 量子工学 ナノテクノロジー 資源・環境・エネルギー 知的生産システム 熱・流体工学 材料・加工 知能機械 機械科学 ロボット工学 計算物理・計算科学 制御工学 光・電磁波工学 電子回路・集積回路 宇宙環境情報 衛星・移動通信 通信ネットワーク ゲーム情報学 ハイパフォーマンスコンピューティング コンピュータシミュレーション 数理科学・応用数理一 感性情報学 バーチャルリアリティ マルチメディア 画像工学 音響・音声工学 システム工学 コンピュータネットワーク 情報理論 知識工学・人工知能 ヒューマンインタフェース ソフトウェア工学 計算機科学 アルゴリズム コンピュータグラフィックス 情報セキュリティー オペレーションズ・リサーチ 経営情報・金融工学 経営工学・信頼性工学 メディアデザイン".split(" ").reverse()),l=new Map([["class1",{name:"I類",color:"pink"}],["class2",{name:"II類",color:"blue"}],["class3",{name:"III類",color:"light-green"}],["advancedEngineeringBasicCourse",{name:"先端工学基礎課程",color:"purple"}]]),u=[{key:"mediaInformationScience",name:"メディア情報学",school:l.get("class1"),bitList:[1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{key:"runningSocialInformationScience",name:"経営・社会情報学",school:l.get("class1"),bitList:[1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1]},{key:"informationMathematicalStudies",name:"情報数理工学",school:l.get("class1"),bitList:[0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0]},{key:"computerScience",name:"コンピュータサイエンス",school:l.get("class1"),bitList:[0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{key:"securityInformationScience",name:"セキュリティ情報学",school:l.get("class2"),bitList:[0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{key:"informationCommunicatingEngineering",name:"情報通信工学",school:l.get("class2"),bitList:[0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0]},{key:"electronicInformationScience",name:"電子情報学",school:l.get("class2"),bitList:[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]},{key:"instrumentationControlSystem",name:"計測・制御システム",school:l.get("class2"),bitList:[0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]},{key:"advancedRobotics",name:"先端ロボティクス",school:l.get("class2"),bitList:[0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]},{key:"machineSystem",name:"機械システム",school:l.get("class3"),bitList:[0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0]},{key:"electronicEngineering",name:"電子工学",school:l.get("class3"),bitList:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0]},{key:"opticalEngineering",name:"光工学",school:l.get("class3"),bitList:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1]},{key:"physicalEngineering",name:"物理工学",school:l.get("class3"),bitList:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0]},{key:"chemicalLifeEngineering",name:"化学生命工学",school:l.get("class3"),bitList:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1]},{key:"advancedEngineeringBasicCourse",name:"先端工学基礎課程（夜間主課程）",school:"1",bitList:[0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}],d={name:"InputArea",data:function(){return{list:c,selectedFields:[]}},methods:{submitList:function(){var e=this;this.$emit("changedList",this.selectedFields.map((function(t){return e.list.indexOf(t)})))},removeFields:function(e){this.selectedFields.splice(this.selectedFields.indexOf(e),1)}},watch:{selectedFields:function(){this.submitList()}}},m=d,h=n("2877"),p=n("6544"),f=n.n(p),v=n("b0af"),b=n("ac7c"),g=n("cc20"),_=Object(h["a"])(m,i,o,!1,null,null,null),y=_.exports;f()(_,{VCard:v["a"],VCheckbox:b["a"],VChip:g["a"]});var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-switch",{staticClass:"mx-auto",attrs:{"max-width":"800",elevation:"2",label:e.sortSwitch?"一致率順":"一致数順"},model:{value:e.sortSwitch,callback:function(t){e.sortSwitch=t},expression:"sortSwitch"}}),e._l(e.sortSwitch?e.rateOrderDatas:e.countOrderDatas,(function(t){return n("v-card",{key:t.departmentName,staticClass:"o-area mx-auto mb-1",class:(e.theme?"darken":"lighten")+"-4",attrs:{elevation:"2",color:e.DEPARTMENT_TABLE.filter((function(e){return e.key==t.departmentName}))[0].school.color,"max-width":"800"}},[n("v-card-title",{attrs:{"primary-title":""}},[e._v(" "+e._s(e.DEPARTMENT_TABLE.filter((function(e){return e.key==t.departmentName}))[0].name)+" ")]),n("v-card-text",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(a){var r=a.on,s=a.attrs;return[n("span",e._g(e._b({},"span",s,!1),r),[e._v("一致率: "+e._s(Math.round(100*t.result.rate))+"% ")])]}}],null,!0)},[n("span",[e._v(" 選択された学びたい分野、学びたくない分野と学科（コース）で学べること、学ばないことの一致率 ")])]),n("span",[e._v(",")]),n("span",[e._v("一致数: "+e._s(t.result.count)+"/"+e._s(t.result.all))])],1),e._l(t.result.matchedFieldIndexes,(function(t){return n("v-chip",{key:t,staticClass:"ma-2"},[e._v(e._s(e.ALL_FIELD_LIST[t]))])}))],2)}))],2)},L=[],x=(n("4e827"),n("fb6a"),{name:"OutputArea",props:{result_datas:[],theme:Boolean},data:function(){return{ALL_FIELD_LIST:c,DEPARTMENT_TABLE:u,sortSwitch:!0}},computed:{rateOrderDatas:function(){return console.log(this.result_datas.slice().sort((function(e,t){return t.result.rate-e.result.rate})).map((function(e){return e.result.rate}))),this.result_datas.slice().sort((function(e,t){return t.result.rate-e.result.rate}))},countOrderDatas:function(){return console.log(this.result_datas.slice().sort((function(e,t){return t.result.count-e.result.count})).map((function(e){return e.result.count}))),this.result_datas.slice().sort((function(e,t){return t.result.count-e.result.count}))}}}),w=x,S=n("99d9"),E=n("b73d"),C=n("3a2f"),O=Object(h["a"])(w,k,L,!1,null,null,null),I=O.exports;f()(O,{VCard:v["a"],VCardText:S["a"],VCardTitle:S["b"],VChip:g["a"],VSwitch:E["a"],VTooltip:C["a"]});var A={name:"App",components:{InputArea:y,OutputArea:I},data:function(){return{fieldList:c,result:[],theme:!0}},methods:{makeResult:function(e){var t=[];u[0].bitList.forEach((function(n,a){t.push(-1!=e.indexOf(a))}));var n=[];u.forEach((function(e,a){n.push({departmentName:e.key,result:{rate:0,count:0,all:e.bitList.filter((function(e){return e})).length,matchedFieldIndexes:[]}}),e.bitList.forEach((function(r,s){n[a].result.rate+=!(e.bitList[s]^t[s]),n[a].result.count+=e.bitList[s]&t[s],e.bitList[s]&t[s]&&n[a].result.matchedFieldIndexes.push(s)})),n[a].result.rate=n[a].result.rate/e.bitList.length})),this.result=n},changeColor:function(){this.theme=!this.theme,localStorage.setItem("uec_department_select_helper",this.theme)}},watch:{theme:function(){this.$vuetify.theme.dark=this.theme}},created:function(){var e=localStorage.getItem("uec_department_select_helper");console.log(e),e&&(this.theme="true"==e)}},V=A,F=n("7496"),T=n("40dc"),j=n("8336"),D=n("62ad"),M=n("a523"),P=n("553a"),B=n("132d"),N=n("f6c4"),R=n("0fd9"),$=n("2fa4"),J=Object(h["a"])(V,r,s,!1,null,null,null),U=J.exports;f()(J,{VApp:F["a"],VAppBar:T["a"],VBtn:j["a"],VCol:D["a"],VContainer:M["a"],VFooter:P["a"],VIcon:B["a"],VMain:N["a"],VRow:R["a"],VSpacer:$["a"]});var q=n("f309");n("5363");a["a"].use(q["a"]);var z=new q["a"]({icons:{iconfont:"mdi"},theme:{dark:!0,themes:{light:{primary:"#1A1AD4",accent:"#616161"},dark:{primary:"#1A1AD4",accent:"#616161"}}}});a["a"].config.productionTip=!1,new a["a"]({vuetify:z,render:function(e){return e(U)}}).$mount("#app")}});
//# sourceMappingURL=app.ca305fc2.js.map