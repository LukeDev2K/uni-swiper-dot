(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"014a":function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return o}));var o={uniSwiperDot:s("db2c").default,uniSection:s("d09e").default},n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[s("uni-swiper-dot",{staticClass:t._$s(1,"sc","uni-swiper-dot-box"),attrs:{info:t.info,current:t.current,mode:t.mode,"dots-styles":t.dotsStyles,field:"content",_i:1},on:{clickItem:t.clickItem}},[s("swiper",{staticClass:t._$s(2,"sc","swiper-box"),attrs:{current:t._$s(2,"a-current",t.swiperDotIndex),_i:2},on:{change:t.change}},t._l(t._$s(3,"f",{forItems:t.info}),(function(e,o,n,r){return s("swiper-item",{key:t._$s(3,"f",{forIndex:n,key:o})},[s("view",{staticClass:t._$s("4-"+r,"sc","swiper-item"),class:t._$s("4-"+r,"c",e.colorClass),attrs:{_i:"4-"+r}},[s("image",{staticClass:t._$s("5-"+r,"sc","image"),attrs:{src:t._$s("5-"+r,"a-src",e.url),_i:"5-"+r},on:{click:function(e){return t.onBanner(o)}}})])])})),0)]),s("uni-section",{attrs:{title:"\u6a21\u5f0f\u9009\u62e9",type:"line",_i:6}}),s("view",{staticClass:t._$s(7,"sc","example-body"),attrs:{_i:7}},[s("view",{staticClass:t._$s(8,"sc","example-body-item"),class:t._$s(8,"c",{active:0===t.modeIndex}),attrs:{_i:8},on:{click:function(e){return t.selectMode("default",0)}}},[s("text",{staticClass:t._$s(9,"sc","example-body-item-text"),attrs:{_i:9}})]),s("view",{staticClass:t._$s(10,"sc","example-body-item"),class:t._$s(10,"c",{active:1===t.modeIndex}),attrs:{_i:10},on:{click:function(e){return t.selectMode("dot",1)}}},[s("text",{staticClass:t._$s(11,"sc","example-body-item-text"),attrs:{_i:11}})]),s("view",{staticClass:t._$s(12,"sc","example-body-item"),class:t._$s(12,"c",{active:2===t.modeIndex}),attrs:{_i:12},on:{click:function(e){return t.selectMode("round",2)}}},[s("text",{staticClass:t._$s(13,"sc","example-body-item-text"),attrs:{_i:13}})]),s("view",{staticClass:t._$s(14,"sc","example-body-item"),class:t._$s(14,"c",{active:3===t.modeIndex}),attrs:{_i:14},on:{click:function(e){return t.selectMode("nav",3)}}},[s("text",{staticClass:t._$s(15,"sc","example-body-item-text"),attrs:{_i:15}})]),s("view",{staticClass:t._$s(16,"sc","example-body-item"),class:t._$s(16,"c",{active:4===t.modeIndex}),attrs:{_i:16},on:{click:function(e){return t.selectMode("indexes",4)}}},[s("text",{staticClass:t._$s(17,"sc","example-body-item-text"),attrs:{_i:17}})])]),s("uni-section",{attrs:{title:"\u989c\u8272\u6837\u5f0f\u9009\u62e9",type:"line",_i:18}}),s("view",{staticClass:t._$s(19,"sc","example-body"),attrs:{_i:19}},[t._$s(20,"i","nav"!==t.mode)?t._l(t._$s(21,"f",{forItems:t.dotStyle}),(function(e,o,n,r){return s("view",{key:t._$s(21,"f",{forIndex:n,key:o}),staticClass:t._$s("21-"+r,"sc","example-body-item"),class:t._$s("21-"+r,"c",{active:t.styleIndex===o}),attrs:{_i:"21-"+r},on:{click:function(e){return t.selectStyle(o)}}},[s("view",{staticClass:t._$s("22-"+r,"sc","example-body-dots"),style:t._$s("22-"+r,"s",{"background-color":e.selectedBackgroundColor,border:e.selectedBorder}),attrs:{_i:"22-"+r}}),s("view",{staticClass:t._$s("23-"+r,"sc","example-body-dots"),style:t._$s("23-"+r,"s",{"background-color":e.backgroundColor,border:e.border}),attrs:{_i:"23-"+r}}),s("view",{staticClass:t._$s("24-"+r,"sc","example-body-dots"),style:t._$s("24-"+r,"s",{"background-color":e.backgroundColor,border:e.border}),attrs:{_i:"24-"+r}})])})):t._e(),t._$s(25,"i","nav"===t.mode)?t._l(t._$s(26,"f",{forItems:t.dotStyle}),(function(e,o,n,r){return s("view",{key:t._$s(26,"f",{forIndex:n,key:o}),staticClass:t._$s("26-"+r,"sc","example-body-item"),class:t._$s("26-"+r,"c",{active:t.styleIndex===o}),style:t._$s("26-"+r,"s",{"background-color":e.selectedBackgroundColor}),attrs:{_i:"26-"+r},on:{click:function(e){return t.selectStyle(o)}}},[s("text",{staticClass:t._$s("27-"+r,"sc","example-body-item-text"),style:t._$s("27-"+r,"s",{color:e.color}),attrs:{_i:"27-"+r}})])})):t._e()],2)],1)},r=[]},"0de9":function(t,e,s){"use strict";function o(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function n(){return"string"===typeof __channelId__&&__channelId__}function r(t,e){switch(o(e)){case"Function":return"function() { [native code] }";default:return e}}function i(t){for(var e=arguments.length,s=new Array(e>1?e-1:0),o=1;o<e;o++)s[o-1]=arguments[o];console[t].apply(console,s)}function c(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];var i=e.shift();if(n())return e.push(e.pop().replace("at ","uni-app:///")),console[i].apply(console,e);var c=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,r)+"---END:JSON---"}catch(n){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var s=o(t).toUpperCase();t="NUMBER"===s||"BOOLEAN"===s?"---BEGIN:"+s+"---"+t+"---END:"+s+"---":String(t)}return t})),a="";if(c.length>1){var d=c.pop();a=c.join("---COMMA---"),0===d.indexOf(" at ")?a+=d:a+="---COMMA---"+d}else a=c[0];console[i](a)}s.r(e),s.d(e,"log",(function(){return i})),s.d(e,"default",(function(){return c}))},"14f1":function(t,e,s){"use strict";s.r(e);var o=s("5a61"),n=s.n(o);for(var r in o)"default"!==r&&function(t){s.d(e,t,(function(){return o[t]}))}(r);e["default"]=n.a},"39ec":function(t,e,s){"use strict";s.r(e);var o=s("b211");for(var n in o)"default"!==n&&function(t){s.d(e,t,(function(){return o[t]}))}(n);var r,i,c,a,d=s("f0c5"),u=Object(d["a"])(o["default"],r,i,!1,null,null,null,!1,c,a);e["default"]=u.exports},"40ff":function(t,e,s){"use strict";s.r(e);var o=s("9f48"),n=s.n(o);for(var r in o)"default"!==r&&function(t){s.d(e,t,(function(){return o[t]}))}(r);e["default"]=n.a},"5a61":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={components:{},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",content:"\u5185\u5bb9 A"},{colorClass:"uni-bg-green",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",content:"\u5185\u5bb9 B"},{colorClass:"uni-bg-blue",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",content:"\u5185\u5bb9 C"}],dotStyle:[{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"},{backgroundColor:"rgba(255, 90, 95,0.3)",border:"1px rgba(255, 90, 95,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(255, 90, 95,0.9)",selectedBorder:"1px rgba(255, 90, 95,0.9) solid"},{backgroundColor:"rgba(83, 200, 249,0.3)",border:"1px rgba(83, 200, 249,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(83, 200, 249,0.9)",selectedBorder:"1px rgba(83, 200, 249,0.9) solid"}],modeIndex:-1,styleIndex:-1,current:0,mode:"default",dotsStyles:{},swiperDotIndex:0}},onLoad:function(){},methods:{change:function(t){this.current=t.detail.current},selectStyle:function(t){this.dotsStyles=this.dotStyle[t],this.styleIndex=t},selectMode:function(t,e){this.mode=t,this.modeIndex=e,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]},clickItem:function(t){this.swiperDotIndex=t},onBanner:function(e){t("log",22222,e," at pages/swiper-dot/swiper-dot.vue:110")}}};e.default=s}).call(this,s("0de9")["default"])},"82d0":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniSection",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},"8bbf":function(t,e){t.exports=Vue},"8eb1":function(t,e,s){"use strict";var o;s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:t._$s(0,"sc","uni-swiper__warp"),attrs:{_i:0}},[t._t("default",null,{_i:1}),t._$s(2,"i","default"===t.mode)?s("view",{key:"default",staticClass:t._$s(2,"sc","uni-swiper__dots-box"),style:t._$s(2,"s",{bottom:t.dots.bottom+"px"}),attrs:{_i:2}},t._l(t._$s(3,"f",{forItems:t.info}),(function(e,o,n,r){return s("view",{key:t._$s(3,"f",{forIndex:n,key:o}),staticClass:t._$s("3-"+r,"sc","uni-swiper__dots-item uni-swiper__dots-bar"),style:t._$s("3-"+r,"s",{width:(o===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/3+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"}),attrs:{_i:"3-"+r},on:{click:function(e){return t.clickItem(o)}}})})),0):t._e(),t._$s(4,"i","dot"===t.mode)?s("view",{key:"dot",staticClass:t._$s(4,"sc","uni-swiper__dots-box"),style:t._$s(4,"s",{bottom:t.dots.bottom+"px"}),attrs:{_i:4}},t._l(t._$s(5,"f",{forItems:t.info}),(function(e,o,n,r){return s("view",{key:t._$s(5,"f",{forIndex:n,key:o}),staticClass:t._$s("5-"+r,"sc","uni-swiper__dots-item"),style:t._$s("5-"+r,"s",{width:t.dots.width+"px",height:t.dots.height+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder}),attrs:{_i:"5-"+r},on:{click:function(e){return t.clickItem(o)}}})})),0):t._e(),t._$s(6,"i","round"===t.mode)?s("view",{key:"round",staticClass:t._$s(6,"sc","uni-swiper__dots-box"),style:t._$s(6,"s",{bottom:t.dots.bottom+"px"}),attrs:{_i:6}},t._l(t._$s(7,"f",{forItems:t.info}),(function(e,o,n,r){return s("view",{key:t._$s(7,"f",{forIndex:n,key:o}),staticClass:t._$s("7-"+r,"sc","uni-swiper__dots-item "),class:t._$s("7-"+r,"c",[o===t.current&&"uni-swiper__dots-long"]),style:t._$s("7-"+r,"s",{width:(o===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder}),attrs:{_i:"7-"+r},on:{click:function(e){return t.clickItem(o)}}})})),0):t._e(),t._$s(8,"i","nav"===t.mode)?s("view",{key:"nav",staticClass:t._$s(8,"sc","uni-swiper__dots-box uni-swiper__dots-nav"),style:t._$s(8,"s",{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}),attrs:{_i:8}},[s("text",{staticClass:t._$s(9,"sc","uni-swiper__dots-nav-item"),style:t._$s(9,"s",{color:t.dotsStyles.color}),attrs:{_i:9}},[t._v(t._$s(9,"t0-0",t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field])))])]):t._e(),t._$s(10,"i","indexes"===t.mode)?s("view",{key:"indexes",staticClass:t._$s(10,"sc","uni-swiper__dots-box"),style:t._$s(10,"s",{bottom:t.dots.bottom+"px"}),attrs:{_i:10}},t._l(t._$s(11,"f",{forItems:t.info}),(function(e,o,n,r){return s("view",{key:t._$s(11,"f",{forIndex:n,key:o}),staticClass:t._$s("11-"+r,"sc","uni-swiper__dots-item uni-swiper__dots-indexes"),style:t._$s("11-"+r,"s",{width:t.dots.width+"px",height:t.dots.height+"px",color:o===t.current?t.dots.selectedColor:t.dots.color,"background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder}),attrs:{_i:"11-"+r},on:{click:function(e){return t.clickItem(o)}}},[s("text",{staticClass:t._$s("12-"+r,"sc","uni-swiper__dots-indexes-text"),attrs:{_i:"12-"+r}},[t._v(t._$s("12-"+r,"t0-0",t._s(o+1)))])])})),0):t._e()],2)},r=[]},"8fdf":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={onLaunch:function(){t("warn","\u5f53\u524d\u7ec4\u4ef6\u4ec5\u652f\u6301 uni_modules \u76ee\u5f55\u7ed3\u6784 \uff0c\u8bf7\u5347\u7ea7 HBuilderX \u5230 3.1.0 \u7248\u672c\u4ee5\u4e0a\uff01"," at App.vue:4"),t("log","App Launch"," at App.vue:5")},onShow:function(){t("log","App Show"," at App.vue:8")},onHide:function(){t("log","App Hide"," at App.vue:11")}};e.default=s}).call(this,s("0de9")["default"])},"92c8":function(t,e,s){"use strict";s("a9a2");var o=r(s("8bbf")),n=r(s("39ec"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,o)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){a(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}o.default.config.productionTip=!1,n.default.mpType="app";var d=new o.default(c({},n.default));d.$mount()},"9e1d":function(t,e,s){"use strict";s.r(e);var o=s("014a"),n=s("14f1");for(var r in n)"default"!==r&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var i,c=s("f0c5"),a=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=a.exports},"9f48":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)},methods:{clickItem:function(t){this.$emit("clickItem",t)}}};e.default=o},a9a2:function(t,e,s){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(s){return e.resolve(t()).then((function(){return s}))}),(function(s){return e.resolve(t()).then((function(){throw s}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/swiper-dot/swiper-dot",(function(){return Vue.extend(s("9e1d").default)}))},b211:function(t,e,s){"use strict";s.r(e);var o=s("8fdf"),n=s.n(o);for(var r in o)"default"!==r&&function(t){s.d(e,t,(function(){return o[t]}))}(r);e["default"]=n.a},d09e:function(t,e,s){"use strict";s.r(e);var o=s("f851"),n=s("f049");for(var r in n)"default"!==r&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var i,c=s("f0c5"),a=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"b94796e8",null,!1,o["a"],i);e["default"]=a.exports},db2c:function(t,e,s){"use strict";s.r(e);var o=s("8eb1"),n=s("40ff");for(var r in n)"default"!==r&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var i,c=s("f0c5"),a=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"12d547cf",null,!1,o["a"],i);e["default"]=a.exports},f049:function(t,e,s){"use strict";s.r(e);var o=s("82d0"),n=s.n(o);for(var r in o)"default"!==r&&function(t){s.d(e,t,(function(){return o[t]}))}(r);e["default"]=n.a},f0c5:function(t,e,s){"use strict";function o(t,e,s,o,n,r,i,c,a,d){var u,l="function"===typeof t?t.options:t;if(a){l.components||(l.components={});var f=Object.prototype.hasOwnProperty;for(var _ in a)f.call(a,_)&&!f.call(l.components,_)&&(l.components[_]=a[_])}if(d&&((d.beforeCreate||(d.beforeCreate=[])).unshift((function(){this[d.__module]=this})),(l.mixins||(l.mixins=[])).push(d)),e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),i?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=u):n&&(u=c?function(){n.call(this,this.$root.$options.shadowRoot)}:n),u)if(l.functional){l._injectStyles=u;var p=l.render;l.render=function(t,e){return u.call(e),p(t,e)}}else{var b=l.beforeCreate;l.beforeCreate=b?[].concat(b,u):[u]}return{exports:t,options:l}}s.d(e,"a",(function(){return o}))},f851:function(t,e,s){"use strict";var o;s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:t._$s(0,"sc","uni-section"),attrs:{_i:0}},[t._$s(1,"i",t.type)?s("view",{staticClass:t._$s(1,"sc","uni-section__head"),attrs:{_i:1}},[s("view",{staticClass:t._$s(2,"sc","uni-section__head-tag"),class:t._$s(2,"c",t.type),attrs:{_i:2}})]):t._e(),s("view",{staticClass:t._$s(3,"sc","uni-section__content"),attrs:{_i:3}},[s("text",{staticClass:t._$s(4,"sc","uni-section__content-title"),class:t._$s(4,"c",{distraction:!t.subTitle}),attrs:{_i:4}},[t._v(t._$s(4,"t0-0",t._s(t.title)))]),t._$s(5,"i",t.subTitle)?s("text",{staticClass:t._$s(5,"sc","uni-section__content-sub"),attrs:{_i:5}},[t._v(t._$s(5,"t0-0",t._s(t.subTitle)))]):t._e()]),t._t("default",null,{_i:6})],2)},r=[]}},[["92c8","app-config"]]]);