(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!****************************************************!*\
  !*** F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/main.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 19));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/pages.json ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/swiper-dot/swiper-dot', function () {return Vue.extend(__webpack_require__(/*! pages/swiper-dot/swiper-dot.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!****************************************************************************************!*\
  !*** F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/pages/swiper-dot/swiper-dot.vue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swiper_dot_vue_vue_type_template_id_557099d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper-dot.vue?vue&type=template&id=557099d4&mpType=page */ 3);\n/* harmony import */ var _swiper_dot_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper-dot.vue?vue&type=script&lang=js&mpType=page */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _swiper_dot_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _swiper_dot_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _swiper_dot_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _swiper_dot_vue_vue_type_template_id_557099d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _swiper_dot_vue_vue_type_template_id_557099d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _swiper_dot_vue_vue_type_template_id_557099d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/swiper-dot/swiper-dot.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDeUU7QUFDTDs7O0FBR3BFO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc3dpcGVyLWRvdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU3MDk5ZDQmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3N3aXBlci1kb3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N3aXBlci1kb3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9zd2lwZXItZG90L3N3aXBlci1kb3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**********************************************************************************************************************!*\
  !*** F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/pages/swiper-dot/swiper-dot.vue?vue&type=template&id=557099d4&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_vue_vue_type_template_id_557099d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./swiper-dot.vue?vue&type=template&id=557099d4&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_vue_vue_type_template_id_557099d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_vue_vue_type_template_id_557099d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_vue_vue_type_template_id_557099d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_vue_vue_type_template_id_557099d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/pages/swiper-dot/swiper-dot.vue?vue&type=template&id=557099d4&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniSwiperDot: __webpack_require__(/*! @/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue */ 5)
      .default,
    uniSection: __webpack_require__(/*! @/uni_modules/uni-section/components/uni-section/uni-section.vue */ 11)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "uni-swiper-dot",
        {
          staticClass: _vm._$s(1, "sc", "uni-swiper-dot-box"),
          attrs: {
            info: _vm.info,
            current: _vm.current,
            mode: _vm.mode,
            "dots-styles": _vm.dotsStyles,
            field: "content",
            _i: 1
          },
          on: { clickItem: _vm.clickItem }
        },
        [
          _c(
            "swiper",
            {
              staticClass: _vm._$s(2, "sc", "swiper-box"),
              attrs: {
                current: _vm._$s(2, "a-current", _vm.swiperDotIndex),
                _i: 2
              },
              on: { change: _vm.change }
            },
            _vm._l(_vm._$s(3, "f", { forItems: _vm.info }), function(
              item,
              index,
              $20,
              $30
            ) {
              return _c(
                "swiper-item",
                { key: _vm._$s(3, "f", { forIndex: $20, key: index }) },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s("4-" + $30, "sc", "swiper-item"),
                      class: _vm._$s("4-" + $30, "c", item.colorClass),
                      attrs: { _i: "4-" + $30 }
                    },
                    [
                      _c("image", {
                        staticClass: _vm._$s("5-" + $30, "sc", "image"),
                        attrs: {
                          src: _vm._$s("5-" + $30, "a-src", item.url),
                          _i: "5-" + $30
                        },
                        on: {
                          click: function($event) {
                            return _vm.onBanner(index)
                          }
                        }
                      })
                    ]
                  )
                ]
              )
            }),
            0
          )
        ]
      ),
      _c("uni-section", { attrs: { title: "模式选择", type: "line", _i: 6 } }),
      _c(
        "view",
        { staticClass: _vm._$s(7, "sc", "example-body"), attrs: { _i: 7 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(8, "sc", "example-body-item"),
              class: _vm._$s(8, "c", { active: _vm.modeIndex === 0 }),
              attrs: { _i: 8 },
              on: {
                click: function($event) {
                  return _vm.selectMode("default", 0)
                }
              }
            },
            [
              _c("text", {
                staticClass: _vm._$s(9, "sc", "example-body-item-text"),
                attrs: { _i: 9 }
              })
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(10, "sc", "example-body-item"),
              class: _vm._$s(10, "c", { active: _vm.modeIndex === 1 }),
              attrs: { _i: 10 },
              on: {
                click: function($event) {
                  return _vm.selectMode("dot", 1)
                }
              }
            },
            [
              _c("text", {
                staticClass: _vm._$s(11, "sc", "example-body-item-text"),
                attrs: { _i: 11 }
              })
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(12, "sc", "example-body-item"),
              class: _vm._$s(12, "c", { active: _vm.modeIndex === 2 }),
              attrs: { _i: 12 },
              on: {
                click: function($event) {
                  return _vm.selectMode("round", 2)
                }
              }
            },
            [
              _c("text", {
                staticClass: _vm._$s(13, "sc", "example-body-item-text"),
                attrs: { _i: 13 }
              })
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(14, "sc", "example-body-item"),
              class: _vm._$s(14, "c", { active: _vm.modeIndex === 3 }),
              attrs: { _i: 14 },
              on: {
                click: function($event) {
                  return _vm.selectMode("nav", 3)
                }
              }
            },
            [
              _c("text", {
                staticClass: _vm._$s(15, "sc", "example-body-item-text"),
                attrs: { _i: 15 }
              })
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "example-body-item"),
              class: _vm._$s(16, "c", { active: _vm.modeIndex === 4 }),
              attrs: { _i: 16 },
              on: {
                click: function($event) {
                  return _vm.selectMode("indexes", 4)
                }
              }
            },
            [
              _c("text", {
                staticClass: _vm._$s(17, "sc", "example-body-item-text"),
                attrs: { _i: 17 }
              })
            ]
          )
        ]
      ),
      _c("uni-section", {
        attrs: { title: "颜色样式选择", type: "line", _i: 18 }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(19, "sc", "example-body"), attrs: { _i: 19 } },
        [
          _vm._$s(20, "i", _vm.mode !== "nav")
            ? _vm._l(_vm._$s(21, "f", { forItems: _vm.dotStyle }), function(
                item,
                index,
                $21,
                $31
              ) {
                return _c(
                  "view",
                  {
                    key: _vm._$s(21, "f", { forIndex: $21, key: index }),
                    staticClass: _vm._$s(
                      "21-" + $31,
                      "sc",
                      "example-body-item"
                    ),
                    class: _vm._$s("21-" + $31, "c", {
                      active: _vm.styleIndex === index
                    }),
                    attrs: { _i: "21-" + $31 },
                    on: {
                      click: function($event) {
                        return _vm.selectStyle(index)
                      }
                    }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(
                        "22-" + $31,
                        "sc",
                        "example-body-dots"
                      ),
                      style: _vm._$s("22-" + $31, "s", {
                        "background-color": item.selectedBackgroundColor,
                        border: item.selectedBorder
                      }),
                      attrs: { _i: "22-" + $31 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(
                        "23-" + $31,
                        "sc",
                        "example-body-dots"
                      ),
                      style: _vm._$s("23-" + $31, "s", {
                        "background-color": item.backgroundColor,
                        border: item.border
                      }),
                      attrs: { _i: "23-" + $31 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(
                        "24-" + $31,
                        "sc",
                        "example-body-dots"
                      ),
                      style: _vm._$s("24-" + $31, "s", {
                        "background-color": item.backgroundColor,
                        border: item.border
                      }),
                      attrs: { _i: "24-" + $31 }
                    })
                  ]
                )
              })
            : _vm._e(),
          _vm._$s(25, "i", _vm.mode === "nav")
            ? _vm._l(_vm._$s(26, "f", { forItems: _vm.dotStyle }), function(
                item,
                index,
                $22,
                $32
              ) {
                return _c(
                  "view",
                  {
                    key: _vm._$s(26, "f", { forIndex: $22, key: index }),
                    staticClass: _vm._$s(
                      "26-" + $32,
                      "sc",
                      "example-body-item"
                    ),
                    class: _vm._$s("26-" + $32, "c", {
                      active: _vm.styleIndex === index
                    }),
                    style: _vm._$s("26-" + $32, "s", {
                      "background-color": item.selectedBackgroundColor
                    }),
                    attrs: { _i: "26-" + $32 },
                    on: {
                      click: function($event) {
                        return _vm.selectStyle(index)
                      }
                    }
                  },
                  [
                    _c("text", {
                      staticClass: _vm._$s(
                        "27-" + $32,
                        "sc",
                        "example-body-item-text"
                      ),
                      style: _vm._$s("27-" + $32, "s", { color: item.color }),
                      attrs: { _i: "27-" + $32 }
                    })
                  ]
                )
              })
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!********************************************************************************************************************!*\
  !*** F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_swiper_dot_vue_vue_type_template_id_77b53eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-swiper-dot.vue?vue&type=template&id=77b53eff&scoped=true& */ 6);\n/* harmony import */ var _uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-swiper-dot.vue?vue&type=script&lang=js& */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_swiper_dot_vue_vue_type_template_id_77b53eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_swiper_dot_vue_vue_type_template_id_77b53eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"77b53eff\",\n  null,\n  false,\n  _uni_swiper_dot_vue_vue_type_template_id_77b53eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXN3aXBlci1kb3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3YjUzZWZmJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXN3aXBlci1kb3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktc3dpcGVyLWRvdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc3YjUzZWZmXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3VuaS1zd2lwZXItZG90L2NvbXBvbmVudHMvdW5pLXN3aXBlci1kb3QvdW5pLXN3aXBlci1kb3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************************************************************************************************************************************!*\
  !*** F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue?vue&type=template&id=77b53eff&scoped=true& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_template_id_77b53eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-swiper-dot.vue?vue&type=template&id=77b53eff&scoped=true& */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_template_id_77b53eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_template_id_77b53eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_template_id_77b53eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_template_id_77b53eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue?vue&type=template&id=77b53eff&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "uni-swiper__warp"), attrs: { _i: 0 } },
    [
      _vm._t("default", null, { _i: 1 }),
      _vm._$s(2, "i", _vm.mode === "default")
        ? _c(
            "view",
            {
              key: "default",
              staticClass: _vm._$s(2, "sc", "uni-swiper__dots-box"),
              style: _vm._$s(2, "s", { bottom: _vm.dots.bottom + "px" }),
              attrs: { _i: 2 }
            },
            _vm._l(_vm._$s(3, "f", { forItems: _vm.info }), function(
              item,
              index,
              $20,
              $30
            ) {
              return _c("view", {
                key: _vm._$s(3, "f", { forIndex: $20, key: index }),
                staticClass: _vm._$s(
                  "3-" + $30,
                  "sc",
                  "uni-swiper__dots-item uni-swiper__dots-bar"
                ),
                style: _vm._$s("3-" + $30, "s", {
                  width:
                    (index === _vm.current
                      ? _vm.dots.width * 2
                      : _vm.dots.width) + "px",
                  height: _vm.dots.width / 3 + "px",
                  "background-color":
                    index !== _vm.current
                      ? _vm.dots.backgroundColor
                      : _vm.dots.selectedBackgroundColor,
                  "border-radius": "0px"
                }),
                attrs: { _i: "3-" + $30 },
                on: {
                  click: function($event) {
                    return _vm.clickItem(index)
                  }
                }
              })
            }),
            0
          )
        : _vm._e(),
      _vm._$s(4, "i", _vm.mode === "dot")
        ? _c(
            "view",
            {
              key: "dot",
              staticClass: _vm._$s(4, "sc", "uni-swiper__dots-box"),
              style: _vm._$s(4, "s", { bottom: _vm.dots.bottom + "px" }),
              attrs: { _i: 4 }
            },
            _vm._l(_vm._$s(5, "f", { forItems: _vm.info }), function(
              item,
              index,
              $21,
              $31
            ) {
              return _c("view", {
                key: _vm._$s(5, "f", { forIndex: $21, key: index }),
                staticClass: _vm._$s("5-" + $31, "sc", "uni-swiper__dots-item"),
                style: _vm._$s("5-" + $31, "s", {
                  width: _vm.dots.width + "px",
                  height: _vm.dots.height + "px",
                  "background-color":
                    index !== _vm.current
                      ? _vm.dots.backgroundColor
                      : _vm.dots.selectedBackgroundColor,
                  border:
                    index !== _vm.current
                      ? _vm.dots.border
                      : _vm.dots.selectedBorder
                }),
                attrs: { _i: "5-" + $31 },
                on: {
                  click: function($event) {
                    return _vm.clickItem(index)
                  }
                }
              })
            }),
            0
          )
        : _vm._e(),
      _vm._$s(6, "i", _vm.mode === "round")
        ? _c(
            "view",
            {
              key: "round",
              staticClass: _vm._$s(6, "sc", "uni-swiper__dots-box"),
              style: _vm._$s(6, "s", { bottom: _vm.dots.bottom + "px" }),
              attrs: { _i: 6 }
            },
            _vm._l(_vm._$s(7, "f", { forItems: _vm.info }), function(
              item,
              index,
              $22,
              $32
            ) {
              return _c("view", {
                key: _vm._$s(7, "f", { forIndex: $22, key: index }),
                staticClass: _vm._$s(
                  "7-" + $32,
                  "sc",
                  "uni-swiper__dots-item "
                ),
                class: _vm._$s("7-" + $32, "c", [
                  index === _vm.current && "uni-swiper__dots-long"
                ]),
                style: _vm._$s("7-" + $32, "s", {
                  width:
                    (index === _vm.current
                      ? _vm.dots.width * 3
                      : _vm.dots.width) + "px",
                  height: _vm.dots.height + "px",
                  "background-color":
                    index !== _vm.current
                      ? _vm.dots.backgroundColor
                      : _vm.dots.selectedBackgroundColor,
                  border:
                    index !== _vm.current
                      ? _vm.dots.border
                      : _vm.dots.selectedBorder
                }),
                attrs: { _i: "7-" + $32 },
                on: {
                  click: function($event) {
                    return _vm.clickItem(index)
                  }
                }
              })
            }),
            0
          )
        : _vm._e(),
      _vm._$s(8, "i", _vm.mode === "nav")
        ? _c(
            "view",
            {
              key: "nav",
              staticClass: _vm._$s(
                8,
                "sc",
                "uni-swiper__dots-box uni-swiper__dots-nav"
              ),
              style: _vm._$s(8, "s", {
                "background-color": _vm.dotsStyles.backgroundColor,
                bottom: "0"
              }),
              attrs: { _i: 8 }
            },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(9, "sc", "uni-swiper__dots-nav-item"),
                  style: _vm._$s(9, "s", { color: _vm.dotsStyles.color }),
                  attrs: { _i: 9 }
                },
                [
                  _vm._v(
                    _vm._$s(
                      9,
                      "t0-0",
                      _vm._s(
                        _vm.current +
                          1 +
                          "/" +
                          _vm.info.length +
                          " " +
                          _vm.info[_vm.current][_vm.field]
                      )
                    )
                  )
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._$s(10, "i", _vm.mode === "indexes")
        ? _c(
            "view",
            {
              key: "indexes",
              staticClass: _vm._$s(10, "sc", "uni-swiper__dots-box"),
              style: _vm._$s(10, "s", { bottom: _vm.dots.bottom + "px" }),
              attrs: { _i: 10 }
            },
            _vm._l(_vm._$s(11, "f", { forItems: _vm.info }), function(
              item,
              index,
              $23,
              $33
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(11, "f", { forIndex: $23, key: index }),
                  staticClass: _vm._$s(
                    "11-" + $33,
                    "sc",
                    "uni-swiper__dots-item uni-swiper__dots-indexes"
                  ),
                  style: _vm._$s("11-" + $33, "s", {
                    width: _vm.dots.width + "px",
                    height: _vm.dots.height + "px",
                    color:
                      index === _vm.current
                        ? _vm.dots.selectedColor
                        : _vm.dots.color,
                    "background-color":
                      index !== _vm.current
                        ? _vm.dots.backgroundColor
                        : _vm.dots.selectedBackgroundColor,
                    border:
                      index !== _vm.current
                        ? _vm.dots.border
                        : _vm.dots.selectedBorder
                  }),
                  attrs: { _i: "11-" + $33 },
                  on: {
                    click: function($event) {
                      return _vm.clickItem(index)
                    }
                  }
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(
                        "12-" + $33,
                        "sc",
                        "uni-swiper__dots-indexes-text"
                      ),
                      attrs: { _i: "12-" + $33 }
                    },
                    [_vm._v(_vm._$s("12-" + $33, "t0-0", _vm._s(index + 1)))]
                  )
                ]
              )
            }),
            0
          )
        : _vm._e()
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!*********************************************************************************************************************************************!*\
  !*** F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-swiper-dot.vue?vue&type=script&lang=js& */ 9);\n/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFtQixDQUFnQixvb0JBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFHOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc3dpcGVyLWRvdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFHOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXN3aXBlci1kb3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/**\n * SwiperDod 轮播图指示点\n * @description 自定义轮播图指示点\n * @tutorial https://ext.dcloud.net.cn/plugin?id=284\n * @property {Number} current 当前指示点索引，必须是通过 `swiper` 的 `change` 事件获取到的 `e.detail.current`\n * @property {String} mode = [default|round|nav|indexes] 指示点的类型\n * \t@value defualt 默认指示点\n * \t@value round 圆形指示点\n * \t@value nav 条形指示点\n * \t@value indexes 索引指示点\n * @property {String} field mode 为 nav 时，显示的内容字段（mode = nav 时必填）\n * @property {String} info 轮播图的数据，通过数组长度决定指示点个数\n * @property {Object} dotsStyles 指示点样式\n * @event {Function} clickItem 组件触发点击事件时触发，e={currentIndex}\n */var _default2 =\n\n{\n  name: 'UniSwiperDot',\n  props: {\n    info: {\n      type: Array,\n      default: function _default() {\n        return [];\n      } },\n\n    current: {\n      type: Number,\n      default: 0 },\n\n    dotsStyles: {\n      type: Object,\n      default: function _default() {\n        return {};\n      } },\n\n    // 类型 ：default(默认) indexes long nav\n    mode: {\n      type: String,\n      default: 'default' },\n\n    // 只在 nav 模式下生效，变量名称\n    field: {\n      type: String,\n      default: '' } },\n\n\n  data: function data() {\n    return {\n      dots: {\n        width: 8,\n        height: 8,\n        bottom: 10,\n        color: '#fff',\n        backgroundColor: 'rgba(0, 0, 0, .3)',\n        border: '1px rgba(0, 0, 0, .3) solid',\n        selectedBackgroundColor: '#333',\n        selectedBorder: '1px rgba(0, 0, 0, .9) solid' } };\n\n\n  },\n  watch: {\n    dotsStyles: function dotsStyles(newVal) {\n      this.dots = Object.assign(this.dots, this.dotsStyles);\n    },\n    mode: function mode(newVal) {\n      if (newVal === 'indexes') {\n        this.dots.width = 20;\n        this.dots.height = 20;\n      } else {\n        this.dots.width = 8;\n        this.dots.height = 8;\n      }\n    } },\n\n\n  created: function created() {\n    if (this.mode === 'indexes') {\n      this.dots.width = 20;\n      this.dots.height = 20;\n    }\n    this.dots = Object.assign(this.dots, this.dotsStyles);\n  },\n  methods: {\n    clickItem: function clickItem(index) {\n      this.$emit('clickItem', index);\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXN3aXBlci1kb3QvY29tcG9uZW50cy91bmktc3dpcGVyLWRvdC91bmktc3dpcGVyLWRvdC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBLHNCQURBO0FBRUE7QUFDQTtBQUNBLGlCQURBO0FBRUEsYUFGQSxzQkFFQTtBQUNBO0FBQ0EsT0FKQSxFQURBOztBQU9BO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQVBBOztBQVdBO0FBQ0Esa0JBREE7QUFFQSxhQUZBLHNCQUVBO0FBQ0E7QUFDQSxPQUpBLEVBWEE7O0FBaUJBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBbEJBOztBQXNCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQXZCQSxFQUZBOzs7QUE4QkEsTUE5QkEsa0JBOEJBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsaUJBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0EsNENBTEE7QUFNQSw2Q0FOQTtBQU9BLHVDQVBBO0FBUUEscURBUkEsRUFEQTs7O0FBWUEsR0EzQ0E7QUE0Q0E7QUFDQSxjQURBLHNCQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFFBSkEsZ0JBSUEsTUFKQSxFQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FaQSxFQTVDQTs7O0FBMkRBLFNBM0RBLHFCQTJEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQWpFQTtBQWtFQTtBQUNBLGFBREEscUJBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBLEVBbEVBLEUiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVuaS1zd2lwZXJfX3dhcnBcIj5cclxuXHRcdDxzbG90IC8+XHJcblx0XHQ8dmlldyB2LWlmPVwibW9kZSA9PT0gJ2RlZmF1bHQnXCIgOnN0eWxlPVwieydib3R0b20nOmRvdHMuYm90dG9tICsgJ3B4J31cIiBjbGFzcz1cInVuaS1zd2lwZXJfX2RvdHMtYm94XCIga2V5PSdkZWZhdWx0Jz5cclxuXHRcdFx0PHZpZXcgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gaW5mb1wiIEBjbGljaz1cImNsaWNrSXRlbShpbmRleClcIiA6c3R5bGU9XCJ7XHJcbiAgICAgICAgJ3dpZHRoJzogKGluZGV4ID09PSBjdXJyZW50PyBkb3RzLndpZHRoKjI6ZG90cy53aWR0aCApICsgJ3B4JywnaGVpZ2h0Jzpkb3RzLndpZHRoLzMgKydweCcgLCdiYWNrZ3JvdW5kLWNvbG9yJzppbmRleCAhPT0gY3VycmVudD9kb3RzLmJhY2tncm91bmRDb2xvcjpkb3RzLnNlbGVjdGVkQmFja2dyb3VuZENvbG9yLCdib3JkZXItcmFkaXVzJzonMHB4J31cIlxyXG5cdFx0XHQgOmtleT1cImluZGV4XCIgY2xhc3M9XCJ1bmktc3dpcGVyX19kb3RzLWl0ZW0gdW5pLXN3aXBlcl9fZG90cy1iYXJcIiAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgdi1pZj1cIm1vZGUgPT09ICdkb3QnXCIgOnN0eWxlPVwieydib3R0b20nOmRvdHMuYm90dG9tICsgJ3B4J31cIiBjbGFzcz1cInVuaS1zd2lwZXJfX2RvdHMtYm94XCIga2V5PSdkb3QnPlxyXG5cdFx0XHQ8dmlldyB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBpbmZvXCIgQGNsaWNrPVwiY2xpY2tJdGVtKGluZGV4KVwiIDpzdHlsZT1cIntcclxuICAgICAgICAnd2lkdGgnOiBkb3RzLndpZHRoICsgJ3B4JywnaGVpZ2h0Jzpkb3RzLmhlaWdodCArJ3B4JyAsJ2JhY2tncm91bmQtY29sb3InOmluZGV4ICE9PSBjdXJyZW50P2RvdHMuYmFja2dyb3VuZENvbG9yOmRvdHMuc2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3IsJ2JvcmRlcic6aW5kZXggIT09Y3VycmVudCA/IGRvdHMuYm9yZGVyOmRvdHMuc2VsZWN0ZWRCb3JkZXJ9XCJcclxuXHRcdFx0IDprZXk9XCJpbmRleFwiIGNsYXNzPVwidW5pLXN3aXBlcl9fZG90cy1pdGVtXCIgLz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHYtaWY9XCJtb2RlID09PSAncm91bmQnXCIgOnN0eWxlPVwieydib3R0b20nOmRvdHMuYm90dG9tICsgJ3B4J31cIiBjbGFzcz1cInVuaS1zd2lwZXJfX2RvdHMtYm94XCIga2V5PSdyb3VuZCc+XHJcblx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGluZm9cIiBAY2xpY2s9XCJjbGlja0l0ZW0oaW5kZXgpXCIgOmNsYXNzPVwiW2luZGV4ID09PSBjdXJyZW50JiYndW5pLXN3aXBlcl9fZG90cy1sb25nJ11cIiA6c3R5bGU9XCJ7XHJcblx0XHQgICAgJ3dpZHRoJzooaW5kZXggPT09IGN1cnJlbnQ/IGRvdHMud2lkdGgqMzpkb3RzLndpZHRoICkgKyAncHgnLCdoZWlnaHQnOmRvdHMuaGVpZ2h0ICsncHgnICwnYmFja2dyb3VuZC1jb2xvcic6aW5kZXggIT09IGN1cnJlbnQ/ZG90cy5iYWNrZ3JvdW5kQ29sb3I6ZG90cy5zZWxlY3RlZEJhY2tncm91bmRDb2xvciwnYm9yZGVyJzppbmRleCAhPT1jdXJyZW50ID8gZG90cy5ib3JkZXI6ZG90cy5zZWxlY3RlZEJvcmRlcn1cIlxyXG5cdFx0XHQgOmtleT1cImluZGV4XCIgY2xhc3M9XCJ1bmktc3dpcGVyX19kb3RzLWl0ZW0gXCIgLz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHYtaWY9XCJtb2RlID09PSAnbmF2J1wiIGtleT0nbmF2JyA6c3R5bGU9XCJ7J2JhY2tncm91bmQtY29sb3InOmRvdHNTdHlsZXMuYmFja2dyb3VuZENvbG9yLCdib3R0b20nOicwJ31cIiBjbGFzcz1cInVuaS1zd2lwZXJfX2RvdHMtYm94IHVuaS1zd2lwZXJfX2RvdHMtbmF2XCI+XHJcblx0XHRcdDx0ZXh0IDpzdHlsZT1cInsnY29sb3InOmRvdHNTdHlsZXMuY29sb3J9XCIgY2xhc3M9XCJ1bmktc3dpcGVyX19kb3RzLW5hdi1pdGVtXCI+e3sgKGN1cnJlbnQrMSkrXCIvXCIraW5mby5sZW5ndGggKycgJyAraW5mb1tjdXJyZW50XVtmaWVsZF0gfX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyB2LWlmPVwibW9kZSA9PT0gJ2luZGV4ZXMnXCIga2V5PSdpbmRleGVzJyA6c3R5bGU9XCJ7J2JvdHRvbSc6ZG90cy5ib3R0b20gKyAncHgnfVwiIGNsYXNzPVwidW5pLXN3aXBlcl9fZG90cy1ib3hcIj5cclxuXHRcdFx0PHZpZXcgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gaW5mb1wiIEBjbGljaz1cImNsaWNrSXRlbShpbmRleClcIiA6c3R5bGU9XCJ7XHJcbiAgICAgICAgJ3dpZHRoJzpkb3RzLndpZHRoICsgJ3B4JywnaGVpZ2h0Jzpkb3RzLmhlaWdodCArJ3B4JyAsJ2NvbG9yJzppbmRleCA9PT0gY3VycmVudD9kb3RzLnNlbGVjdGVkQ29sb3I6ZG90cy5jb2xvciwnYmFja2dyb3VuZC1jb2xvcic6aW5kZXggIT09IGN1cnJlbnQ/ZG90cy5iYWNrZ3JvdW5kQ29sb3I6ZG90cy5zZWxlY3RlZEJhY2tncm91bmRDb2xvciwnYm9yZGVyJzppbmRleCAhPT1jdXJyZW50ID8gZG90cy5ib3JkZXI6ZG90cy5zZWxlY3RlZEJvcmRlcn1cIlxyXG5cdFx0XHQgOmtleT1cImluZGV4XCIgY2xhc3M9XCJ1bmktc3dpcGVyX19kb3RzLWl0ZW0gdW5pLXN3aXBlcl9fZG90cy1pbmRleGVzXCI+PHRleHQgY2xhc3M9XCJ1bmktc3dpcGVyX19kb3RzLWluZGV4ZXMtdGV4dFwiPnt7IGluZGV4KzEgfX08L3RleHQ+PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XG5cblx0LyoqXG5cdCAqIFN3aXBlckRvZCDova7mkq3lm77mjIfnpLrngrlcblx0ICogQGRlc2NyaXB0aW9uIOiHquWumuS5iei9ruaSreWbvuaMh+ekuueCuVxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9Mjg0XG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBjdXJyZW50IOW9k+WJjeaMh+ekuueCuee0ouW8le+8jOW/hemhu+aYr+mAmui/hyBgc3dpcGVyYCDnmoQgYGNoYW5nZWAg5LqL5Lu26I635Y+W5Yiw55qEIGBlLmRldGFpbC5jdXJyZW50YFxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gbW9kZSA9IFtkZWZhdWx0fHJvdW5kfG5hdnxpbmRleGVzXSDmjIfnpLrngrnnmoTnsbvlnotcblx0ICogXHRAdmFsdWUgZGVmdWFsdCDpu5jorqTmjIfnpLrngrlcblx0ICogXHRAdmFsdWUgcm91bmQg5ZyG5b2i5oyH56S654K5XG5cdCAqIFx0QHZhbHVlIG5hdiDmnaHlvaLmjIfnpLrngrlcblx0ICogXHRAdmFsdWUgaW5kZXhlcyDntKLlvJXmjIfnpLrngrlcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGZpZWxkIG1vZGUg5Li6IG5hdiDml7bvvIzmmL7npLrnmoTlhoXlrrnlrZfmrrXvvIhtb2RlID0gbmF2IOaXtuW/heWhq++8iVxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gaW5mbyDova7mkq3lm77nmoTmlbDmja7vvIzpgJrov4fmlbDnu4Tplb/luqblhrPlrprmjIfnpLrngrnkuKrmlbBcblx0ICogQHByb3BlcnR5IHtPYmplY3R9IGRvdHNTdHlsZXMg5oyH56S654K55qC35byPXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGNsaWNrSXRlbSDnu4Tku7bop6blj5Hngrnlh7vkuovku7bml7bop6blj5HvvIxlPXtjdXJyZW50SW5kZXh9XG5cdCAqL1xuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ1VuaVN3aXBlckRvdCcsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRpbmZvOiB7XHJcblx0XHRcdFx0dHlwZTogQXJyYXksXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gW11cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGN1cnJlbnQ6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb3RzU3R5bGVzOiB7XHJcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHt9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnsbvlnosg77yaZGVmYXVsdCjpu5jorqQpIGluZGV4ZXMgbG9uZyBuYXZcclxuXHRcdFx0bW9kZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnZGVmYXVsdCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Y+q5ZyoIG5hdiDmqKHlvI/kuIvnlJ/mlYjvvIzlj5jph4/lkI3np7BcclxuXHRcdFx0ZmllbGQ6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZG90czoge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDgsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IDgsXHJcblx0XHRcdFx0XHRib3R0b206IDEwLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjZmZmJyxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjMpJyxcclxuXHRcdFx0XHRcdGJvcmRlcjogJzFweCByZ2JhKDAsIDAsIDAsIC4zKSBzb2xpZCcsXHJcblx0XHRcdFx0XHRzZWxlY3RlZEJhY2tncm91bmRDb2xvcjogJyMzMzMnLFxyXG5cdFx0XHRcdFx0c2VsZWN0ZWRCb3JkZXI6ICcxcHggcmdiYSgwLCAwLCAwLCAuOSkgc29saWQnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0ZG90c1N0eWxlcyhuZXdWYWwpIHtcclxuXHRcdFx0XHR0aGlzLmRvdHMgPSBPYmplY3QuYXNzaWduKHRoaXMuZG90cywgdGhpcy5kb3RzU3R5bGVzKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb2RlKG5ld1ZhbCkge1xyXG5cdFx0XHRcdGlmIChuZXdWYWwgPT09ICdpbmRleGVzJykge1xyXG5cdFx0XHRcdFx0dGhpcy5kb3RzLndpZHRoID0gMjBcclxuXHRcdFx0XHRcdHRoaXMuZG90cy5oZWlnaHQgPSAyMFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmRvdHMud2lkdGggPSA4XHJcblx0XHRcdFx0XHR0aGlzLmRvdHMuaGVpZ2h0ID0gOFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHRpZiAodGhpcy5tb2RlID09PSAnaW5kZXhlcycpIHtcclxuXHRcdFx0XHR0aGlzLmRvdHMud2lkdGggPSAyMFxyXG5cdFx0XHRcdHRoaXMuZG90cy5oZWlnaHQgPSAyMFxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuZG90cyA9IE9iamVjdC5hc3NpZ24odGhpcy5kb3RzLCB0aGlzLmRvdHNTdHlsZXMpXHJcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGNsaWNrSXRlbShpbmRleCkge1xuXHRcdFx0XHR0aGlzLiRlbWl0KCdjbGlja0l0ZW0nLCBpbmRleClcblx0XHRcdH1cblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQudW5pLXN3aXBlcl9fd2FycCB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQudW5pLXN3aXBlcl9fZG90cy1ib3gge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAxMHB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudW5pLXN3aXBlcl9fZG90cy1pdGVtIHtcclxuXHRcdHdpZHRoOiA4cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiA2cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdW5pLWJnLWNvbG9yLW1hc2s7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHQvKiAjaWZkZWYgSDUgKi9cblx0XHQvLyBib3JkZXItd2lkdGg6IDVweCAwO1xuXHRcdC8vIGJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0Ly8gYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHQvLyBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0Ly8gdHJhbnNpdGlvbjogd2lkdGggMC4ycyBsaW5lYXI7ICDkuI3opoHlj5bmtojms6jph4rvvIzkuI3nhLbkvJrkuI3og73lj5joibJcclxuXHR9XHJcblxyXG5cdC51bmktc3dpcGVyX19kb3RzLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zd2lwZXJfX2RvdHMtZGVmYXVsdCB7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHR9XHJcblxyXG5cdC51bmktc3dpcGVyX19kb3RzLWxvbmcge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHR9XHJcblxyXG5cdC51bmktc3dpcGVyX19kb3RzLWJhciB7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1zd2lwZXJfX2RvdHMtbmF2IHtcclxuXHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zd2lwZXJfX2RvdHMtbmF2LWl0ZW0ge1xyXG5cdFx0Lyogb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cclxuXHRcdGZvbnQtc2l6ZTogJHVuaS1mb250LXNpemUtYmFzZTtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0bWFyZ2luOiAwIDE1cHg7XHJcblx0fVxyXG5cclxuXHQudW5pLXN3aXBlcl9fZG90cy1pbmRleGVzIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdC8vIGZsZXg6IDE7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudW5pLXN3aXBlcl9fZG90cy1pbmRleGVzLXRleHQge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRmb250LXNpemU6ICR1bmktZm9udC1zaXplLXNtO1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/*!***********************************************************************************************************!*\
  !*** F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/uni_modules/uni-section/components/uni-section/uni-section.vue ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_section_vue_vue_type_template_id_f7ca1098_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-section.vue?vue&type=template&id=f7ca1098&scoped=true& */ 12);\n/* harmony import */ var _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-section.vue?vue&type=script&lang=js& */ 14);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_section_vue_vue_type_template_id_f7ca1098_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_section_vue_vue_type_template_id_f7ca1098_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"f7ca1098\",\n  null,\n  false,\n  _uni_section_vue_vue_type_template_id_f7ca1098_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-section/components/uni-section/uni-section.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0k7QUFDcEk7QUFDK0Q7QUFDTDs7O0FBRzFEO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mN2NhMTA5OCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFHOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmN2NhMTA5OFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlfbW9kdWxlcy91bmktc2VjdGlvbi9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!******************************************************************************************************************************************************!*\
  !*** F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/uni_modules/uni-section/components/uni-section/uni-section.vue?vue&type=template&id=f7ca1098&scoped=true& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_f7ca1098_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=template&id=f7ca1098&scoped=true& */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_f7ca1098_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_f7ca1098_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_f7ca1098_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_f7ca1098_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/uni_modules/uni-section/components/uni-section/uni-section.vue?vue&type=template&id=f7ca1098&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "uni-section"), attrs: { _i: 0 } },
    [
      _vm._$s(1, "i", _vm.type)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(1, "sc", "uni-section__head"),
              attrs: { _i: 1 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(2, "sc", "uni-section__head-tag"),
                class: _vm._$s(2, "c", _vm.type),
                attrs: { _i: 2 }
              })
            ]
          )
        : _vm._e(),
      _c(
        "view",
        {
          staticClass: _vm._$s(3, "sc", "uni-section__content"),
          attrs: { _i: 3 }
        },
        [
          _c(
            "text",
            {
              staticClass: _vm._$s(4, "sc", "uni-section__content-title"),
              class: _vm._$s(4, "c", { distraction: !_vm.subTitle }),
              attrs: { _i: 4 }
            },
            [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.title)))]
          ),
          _vm._$s(5, "i", _vm.subTitle)
            ? _c(
                "text",
                {
                  staticClass: _vm._$s(5, "sc", "uni-section__content-sub"),
                  attrs: { _i: 5 }
                },
                [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.subTitle)))]
              )
            : _vm._e()
        ]
      ),
      _vm._t("default", null, { _i: 6 })
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!************************************************************************************************************************************!*\
  !*** F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/uni_modules/uni-section/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=script&lang=js& */ 15);\n/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWttQixDQUFnQixpb0JBQUcsRUFBQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFHOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFHOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFHOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/uni_modules/uni-section/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/**\n * Section 标题栏\n * @description 标题栏\n * @property {String} type = [line|circle] 标题装饰类型\n * \t@value line 竖线\n * \t@value circle 圆形\n * @property {String} title 主标题\n * @property {String} subTitle 副标题\n */var _default =\n\n{\n  name: 'UniSection',\n  props: {\n    type: {\n      type: String,\n      default: '' },\n\n    title: {\n      type: String,\n      default: '' },\n\n    subTitle: {\n      type: String,\n      default: '' } },\n\n\n  data: function data() {\n    return {};\n  },\n  watch: {\n    title: function title(newVal) {\n      if (uni.report && newVal !== '') {\n        uni.report('title', newVal);\n      }\n    } },\n\n  methods: {\n    onClick: function onClick() {\n      this.$emit('click');\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXNlY3Rpb24vY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFEQTs7QUFLQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFMQTs7QUFTQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFUQSxFQUZBOzs7QUFnQkEsTUFoQkEsa0JBZ0JBO0FBQ0E7QUFDQSxHQWxCQTtBQW1CQTtBQUNBLFNBREEsaUJBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQSxFQW5CQTs7QUEwQkE7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQSxLQUhBLEVBMUJBLEUiLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmktc2VjdGlvblwiIG52dWU+XHJcblx0XHQ8dmlldyB2LWlmPVwidHlwZVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2hlYWRcIj5cclxuXHRcdFx0PHZpZXcgOmNsYXNzPVwidHlwZVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2hlYWQtdGFnXCIgLz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLXNlY3Rpb25fX2NvbnRlbnRcIj5cclxuXHRcdFx0PHRleHQgOmNsYXNzPVwieydkaXN0cmFjdGlvbic6IXN1YlRpdGxlfVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2NvbnRlbnQtdGl0bGVcIj57eyB0aXRsZSB9fTwvdGV4dD5cclxuXHRcdFx0PHRleHQgdi1pZj1cInN1YlRpdGxlXCIgY2xhc3M9XCJ1bmktc2VjdGlvbl9fY29udGVudC1zdWJcIj57eyBzdWJUaXRsZSB9fTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDxzbG90IC8+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cblxuXHQvKipcblx0ICogU2VjdGlvbiDmoIfpopjmoI9cblx0ICogQGRlc2NyaXB0aW9uIOagh+mimOagj1xuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSA9IFtsaW5lfGNpcmNsZV0g5qCH6aKY6KOF6aWw57G75Z6LXG5cdCAqIFx0QHZhbHVlIGxpbmUg56uW57q/XG5cdCAqIFx0QHZhbHVlIGNpcmNsZSDlnIblvaJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHRpdGxlIOS4u+agh+mimFxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gc3ViVGl0bGUg5Ymv5qCH6aKYXG5cdCAqL1xuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ1VuaVNlY3Rpb24nLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aXRsZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJUaXRsZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0dGl0bGUobmV3VmFsKSB7XHJcblx0XHRcdFx0aWYgKHVuaS5yZXBvcnQgJiYgbmV3VmFsICE9PSAnJykge1xyXG5cdFx0XHRcdFx0dW5pLnJlcG9ydCgndGl0bGUnLCBuZXdWYWwpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRvbkNsaWNrKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQudW5pLXNlY3Rpb24ge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDAgMTBweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR1bmktYmctY29sb3ItZ3JleTtcblx0XHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cblx0XHQvLyBib3JkZXItYm90dG9tLWNvbG9yOiAkdW5pLWJvcmRlci1jb2xvcjtcblx0XHQvLyBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcblx0XHQvLyBib3JkZXItYm90dG9tLXdpZHRoOiAwLjVweDtcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0fVxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdC8vIC51bmktc2VjdGlvbjphZnRlciB7XG5cdC8vIFx0cG9zaXRpb246IGFic29sdXRlO1xuXHQvLyBcdGJvdHRvbTogMDtcblx0Ly8gXHRyaWdodDogMDtcblx0Ly8gXHRsZWZ0OiAwO1xuXHQvLyBcdGhlaWdodDogMXB4O1xuXHQvLyBcdGNvbnRlbnQ6ICcnO1xuXHQvLyBcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLjUpO1xuXHQvLyBcdHRyYW5zZm9ybTogc2NhbGVZKC41KTtcblx0Ly8gXHRiYWNrZ3JvdW5kLWNvbG9yOiAkdW5pLWJvcmRlci1jb2xvcjtcblx0Ly8gfVxuXHQvKiAjZW5kaWYgKi9cclxuXHJcblx0LnVuaS1zZWN0aW9uX19oZWFkIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQubGluZSB7XHJcblx0XHRoZWlnaHQ6IDE1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdW5pLXRleHQtY29sb3ItZGlzYWJsZTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdHdpZHRoOiAzcHg7XHJcblx0fVxyXG5cclxuXHQuY2lyY2xlIHtcclxuXHRcdHdpZHRoOiA4cHg7XHJcblx0XHRoZWlnaHQ6IDhweDtcclxuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuXHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XHJcblx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR1bmktdGV4dC1jb2xvci1kaXNhYmxlO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zZWN0aW9uX19jb250ZW50IHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGNvbG9yOiAkdW5pLXRleHQtY29sb3I7XHJcblx0fVxyXG5cclxuXHQudW5pLXNlY3Rpb25fX2NvbnRlbnQtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1iYXNlO1xyXG5cdFx0Y29sb3I6ICR1bmktdGV4dC1jb2xvcjtcclxuXHR9XHJcblxyXG5cdC5kaXN0cmFjdGlvbiB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC51bmktc2VjdGlvbl9fY29udGVudC1zdWIge1xyXG5cdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1zbTtcclxuXHRcdGNvbG9yOiAkdW5pLXRleHQtY29sb3ItZ3JleTtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!****************************************************************************************************************!*\
  !*** F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/pages/swiper-dot/swiper-dot.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./swiper-dot.vue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRtQixDQUFnQiwyb0JBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFHOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3dpcGVyLWRvdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFHOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zd2lwZXItZG90LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/pages/swiper-dot/swiper-dot.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  components: {},\n  data: function data() {\n    return {\n      info: [{\n        colorClass: 'uni-bg-red',\n        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',\n        content: '内容 A' },\n\n      {\n        colorClass: 'uni-bg-green',\n        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',\n        content: '内容 B' },\n\n      {\n        colorClass: 'uni-bg-blue',\n        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',\n        content: '内容 C' }],\n\n\n      dotStyle: [{\n        backgroundColor: 'rgba(0, 0, 0, .3)',\n        border: '1px rgba(0, 0, 0, .3) solid',\n        color: '#fff',\n        selectedBackgroundColor: 'rgba(0, 0, 0, .9)',\n        selectedBorder: '1px rgba(0, 0, 0, .9) solid' },\n\n      {\n        backgroundColor: 'rgba(255, 90, 95,0.3)',\n        border: '1px rgba(255, 90, 95,0.3) solid',\n        color: '#fff',\n        selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',\n        selectedBorder: '1px rgba(255, 90, 95,0.9) solid' },\n\n      {\n        backgroundColor: 'rgba(83, 200, 249,0.3)',\n        border: '1px rgba(83, 200, 249,0.3) solid',\n        color: '#fff',\n        selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',\n        selectedBorder: '1px rgba(83, 200, 249,0.9) solid' }],\n\n\n      modeIndex: -1,\n      styleIndex: -1,\n      current: 0,\n      mode: 'default',\n      dotsStyles: {},\n      swiperDotIndex: 0 };\n\n  },\n  onLoad: function onLoad() {},\n  methods: {\n    change: function change(e) {\n      this.current = e.detail.current;\n    },\n    selectStyle: function selectStyle(index) {\n      this.dotsStyles = this.dotStyle[index];\n      this.styleIndex = index;\n    },\n    selectMode: function selectMode(mode, index) {\n      this.mode = mode;\n      this.modeIndex = index;\n      this.styleIndex = -1;\n      this.dotsStyles = this.dotStyle[0];\n    },\n    clickItem: function clickItem(e) {\n      this.swiperDotIndex = e;\n    },\n    onBanner: function onBanner(index) {\n      __f__(\"log\", 22222, index, \" at pages/swiper-dot/swiper-dot.vue:110\");\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc3dpcGVyLWRvdC9zd2lwZXItZG90LnZ1ZSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiZGF0YSIsImluZm8iLCJjb2xvckNsYXNzIiwidXJsIiwiY29udGVudCIsImRvdFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJzZWxlY3RlZEJhY2tncm91bmRDb2xvciIsInNlbGVjdGVkQm9yZGVyIiwibW9kZUluZGV4Iiwic3R5bGVJbmRleCIsImN1cnJlbnQiLCJtb2RlIiwiZG90c1N0eWxlcyIsInN3aXBlckRvdEluZGV4Iiwib25Mb2FkIiwibWV0aG9kcyIsImNoYW5nZSIsImUiLCJkZXRhaWwiLCJzZWxlY3RTdHlsZSIsImluZGV4Iiwic2VsZWN0TW9kZSIsImNsaWNrSXRlbSIsIm9uQmFubmVyIl0sIm1hcHBpbmdzIjoicUlBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2RBLFlBQVUsRUFBRSxFQURFO0FBRWRDLE1BRmMsa0JBRVA7QUFDTixXQUFPO0FBQ05DLFVBQUksRUFBRSxDQUFDO0FBQ0xDLGtCQUFVLEVBQUUsWUFEUDtBQUVMQyxXQUFHLEVBQUUsMkZBRkE7QUFHTEMsZUFBTyxFQUFFLE1BSEosRUFBRDs7QUFLTDtBQUNDRixrQkFBVSxFQUFFLGNBRGI7QUFFQ0MsV0FBRyxFQUFFLDJGQUZOO0FBR0NDLGVBQU8sRUFBRSxNQUhWLEVBTEs7O0FBVUw7QUFDQ0Ysa0JBQVUsRUFBRSxhQURiO0FBRUNDLFdBQUcsRUFBRSwyRkFGTjtBQUdDQyxlQUFPLEVBQUUsTUFIVixFQVZLLENBREE7OztBQWlCTkMsY0FBUSxFQUFFLENBQUM7QUFDVEMsdUJBQWUsRUFBRSxtQkFEUjtBQUVUQyxjQUFNLEVBQUUsNkJBRkM7QUFHVEMsYUFBSyxFQUFFLE1BSEU7QUFJVEMsK0JBQXVCLEVBQUUsbUJBSmhCO0FBS1RDLHNCQUFjLEVBQUUsNkJBTFAsRUFBRDs7QUFPVDtBQUNDSix1QkFBZSxFQUFFLHVCQURsQjtBQUVDQyxjQUFNLEVBQUUsaUNBRlQ7QUFHQ0MsYUFBSyxFQUFFLE1BSFI7QUFJQ0MsK0JBQXVCLEVBQUUsdUJBSjFCO0FBS0NDLHNCQUFjLEVBQUUsaUNBTGpCLEVBUFM7O0FBY1Q7QUFDQ0osdUJBQWUsRUFBRSx3QkFEbEI7QUFFQ0MsY0FBTSxFQUFFLGtDQUZUO0FBR0NDLGFBQUssRUFBRSxNQUhSO0FBSUNDLCtCQUF1QixFQUFFLHdCQUoxQjtBQUtDQyxzQkFBYyxFQUFFLGtDQUxqQixFQWRTLENBakJKOzs7QUF1Q05DLGVBQVMsRUFBRSxDQUFDLENBdkNOO0FBd0NOQyxnQkFBVSxFQUFFLENBQUMsQ0F4Q1A7QUF5Q05DLGFBQU8sRUFBRSxDQXpDSDtBQTBDTkMsVUFBSSxFQUFFLFNBMUNBO0FBMkNOQyxnQkFBVSxFQUFFLEVBM0NOO0FBNENOQyxvQkFBYyxFQUFFLENBNUNWLEVBQVA7O0FBOENBLEdBakRhO0FBa0RkQyxRQWxEYyxvQkFrREwsQ0FBRSxDQWxERztBQW1EZEMsU0FBTyxFQUFFO0FBQ1JDLFVBRFEsa0JBQ0RDLENBREMsRUFDRTtBQUNULFdBQUtQLE9BQUwsR0FBZU8sQ0FBQyxDQUFDQyxNQUFGLENBQVNSLE9BQXhCO0FBQ0EsS0FITztBQUlSUyxlQUpRLHVCQUlJQyxLQUpKLEVBSVc7QUFDbEIsV0FBS1IsVUFBTCxHQUFrQixLQUFLVixRQUFMLENBQWNrQixLQUFkLENBQWxCO0FBQ0EsV0FBS1gsVUFBTCxHQUFrQlcsS0FBbEI7QUFDQSxLQVBPO0FBUVJDLGNBUlEsc0JBUUdWLElBUkgsRUFRU1MsS0FSVCxFQVFnQjtBQUN2QixXQUFLVCxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLSCxTQUFMLEdBQWlCWSxLQUFqQjtBQUNBLFdBQUtYLFVBQUwsR0FBa0IsQ0FBQyxDQUFuQjtBQUNBLFdBQUtHLFVBQUwsR0FBa0IsS0FBS1YsUUFBTCxDQUFjLENBQWQsQ0FBbEI7QUFDQSxLQWJPO0FBY1JvQixhQWRRLHFCQWNFTCxDQWRGLEVBY0s7QUFDWixXQUFLSixjQUFMLEdBQXNCSSxDQUF0QjtBQUNBLEtBaEJPO0FBaUJSTSxZQWpCUSxvQkFpQkNILEtBakJELEVBaUJRO0FBQ2YsbUJBQVksS0FBWixFQUFtQkEsS0FBbkI7QUFDQSxLQW5CTyxFQW5ESyxFIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNvbXBvbmVudHM6IHt9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpbmZvOiBbe1xuXHRcdFx0XHRcdGNvbG9yQ2xhc3M6ICd1bmktYmctcmVkJyxcblx0XHRcdFx0XHR1cmw6ICdodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLWRjLXNpdGUvMDk0YTlkYzAtNTBjMC0xMWViLWI2ODAtNzk4MGM4YTg3N2I4LmpwZycsXG5cdFx0XHRcdFx0Y29udGVudDogJ+WGheWuuSBBJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y29sb3JDbGFzczogJ3VuaS1iZy1ncmVlbicsXG5cdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS1kYy1zaXRlLzA5NGE5ZGMwLTUwYzAtMTFlYi1iNjgwLTc5ODBjOGE4NzdiOC5qcGcnLFxuXHRcdFx0XHRcdGNvbnRlbnQ6ICflhoXlrrkgQidcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNvbG9yQ2xhc3M6ICd1bmktYmctYmx1ZScsXG5cdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS1kYy1zaXRlLzA5NGE5ZGMwLTUwYzAtMTFlYi1iNjgwLTc5ODBjOGE4NzdiOC5qcGcnLFxuXHRcdFx0XHRcdGNvbnRlbnQ6ICflhoXlrrkgQydcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdGRvdFN0eWxlOiBbe1xuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjMpJyxcblx0XHRcdFx0XHRib3JkZXI6ICcxcHggcmdiYSgwLCAwLCAwLCAuMykgc29saWQnLFxuXHRcdFx0XHRcdGNvbG9yOiAnI2ZmZicsXG5cdFx0XHRcdFx0c2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIC45KScsXG5cdFx0XHRcdFx0c2VsZWN0ZWRCb3JkZXI6ICcxcHggcmdiYSgwLCAwLCAwLCAuOSkgc29saWQnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgOTAsIDk1LDAuMyknLFxuXHRcdFx0XHRcdGJvcmRlcjogJzFweCByZ2JhKDI1NSwgOTAsIDk1LDAuMykgc29saWQnLFxuXHRcdFx0XHRcdGNvbG9yOiAnI2ZmZicsXG5cdFx0XHRcdFx0c2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgOTAsIDk1LDAuOSknLFxuXHRcdFx0XHRcdHNlbGVjdGVkQm9yZGVyOiAnMXB4IHJnYmEoMjU1LCA5MCwgOTUsMC45KSBzb2xpZCdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoODMsIDIwMCwgMjQ5LDAuMyknLFxuXHRcdFx0XHRcdGJvcmRlcjogJzFweCByZ2JhKDgzLCAyMDAsIDI0OSwwLjMpIHNvbGlkJyxcblx0XHRcdFx0XHRjb2xvcjogJyNmZmYnLFxuXHRcdFx0XHRcdHNlbGVjdGVkQmFja2dyb3VuZENvbG9yOiAncmdiYSg4MywgMjAwLCAyNDksMC45KScsXG5cdFx0XHRcdFx0c2VsZWN0ZWRCb3JkZXI6ICcxcHggcmdiYSg4MywgMjAwLCAyNDksMC45KSBzb2xpZCdcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdG1vZGVJbmRleDogLTEsXG5cdFx0XHRzdHlsZUluZGV4OiAtMSxcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRtb2RlOiAnZGVmYXVsdCcsXG5cdFx0XHRkb3RzU3R5bGVzOiB7fSxcblx0XHRcdHN3aXBlckRvdEluZGV4OiAwXG5cdFx0fVxuXHR9LFxuXHRvbkxvYWQoKSB7fSxcblx0bWV0aG9kczoge1xuXHRcdGNoYW5nZShlKSB7XG5cdFx0XHR0aGlzLmN1cnJlbnQgPSBlLmRldGFpbC5jdXJyZW50XG5cdFx0fSxcblx0XHRzZWxlY3RTdHlsZShpbmRleCkge1xuXHRcdFx0dGhpcy5kb3RzU3R5bGVzID0gdGhpcy5kb3RTdHlsZVtpbmRleF1cblx0XHRcdHRoaXMuc3R5bGVJbmRleCA9IGluZGV4XG5cdFx0fSxcblx0XHRzZWxlY3RNb2RlKG1vZGUsIGluZGV4KSB7XG5cdFx0XHR0aGlzLm1vZGUgPSBtb2RlXG5cdFx0XHR0aGlzLm1vZGVJbmRleCA9IGluZGV4XG5cdFx0XHR0aGlzLnN0eWxlSW5kZXggPSAtMVxuXHRcdFx0dGhpcy5kb3RzU3R5bGVzID0gdGhpcy5kb3RTdHlsZVswXVxuXHRcdH0sXG5cdFx0Y2xpY2tJdGVtKGUpIHtcblx0XHRcdHRoaXMuc3dpcGVyRG90SW5kZXggPSBlXG5cdFx0fSxcblx0XHRvbkJhbm5lcihpbmRleCkge1xuXHRcdFx0Y29uc29sZS5sb2coMjIyMjIsIGluZGV4KTtcblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 19 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 20 */
/*!****************************************************!*\
  !*** F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/App.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 21);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDb0w7QUFDcEwsZ0JBQWdCLDZMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*****************************************************************************!*\
  !*** F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 22);\n/* harmony import */ var _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_G_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBsQixDQUFnQix5bkJBQUcsRUFBQyIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFHOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFHOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUc6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/TEST_PROJ/uni-swiper-dot 轮播图指示点示例/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"warn\", '当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！', \" at App.vue:4\");\n    __f__(\"log\", 'App Launch', \" at App.vue:5\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:8\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:11\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixrQkFBYSx1REFBYjtBQUNBLGlCQUFZLFlBQVo7QUFDQSxHQUphO0FBS2RDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixpQkFBWSxVQUFaO0FBQ0EsR0FQYTtBQVFkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBVmEsRSIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRvbkxhdW5jaDogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS53YXJuKCflvZPliY3nu4Tku7bku4XmlK/mjIEgdW5pX21vZHVsZXMg55uu5b2V57uT5p6EIO+8jOivt+WNh+e6pyBIQnVpbGRlclgg5YiwIDMuMS4wIOeJiOacrOS7peS4iu+8gScpXG5cdFx0Y29uc29sZS5sb2coJ0FwcCBMYXVuY2gnKVxuXHR9LFxuXHRvblNob3c6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXG5cdH0sXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ })
],[[0,"app-config"]]]);