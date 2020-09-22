webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-flexbox-grid */ \"./node_modules/react-flexbox-grid/lib/index.js\");\n/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/dateUtils */ \"./utils/dateUtils.js\");\n/* harmony import */ var _BlackLivesMatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BlackLivesMatter */ \"./components/BlackLivesMatter.js\");\n\n\n\nvar _jsxFileName = \"/home/jonathan/Projects/mwebaze/components/Layout.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar menu = [{\n  path: \"/projects\",\n  name: \"Projects\"\n}, {\n  path: \"/library\",\n  name: \"Library\"\n}, {\n  path: \"/writings\",\n  name: \"Writings\"\n}];\nvar SHORTCUTS = [\"Digit0\", \"Digit1\", \"Digit2\"];\nvar avatar = \"https://instagram.fnbo1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119135052_355960015438592_1138365578079527408_n.jpg?_nc_ht=instagram.fnbo1-1.fna.fbcdn.net&_nc_ohc=-VnYDWvWsVkAX_Y9vQa&oh=5b12507ed18245afdc7e13a8f5d41bcd&oe=5F93CBC2\";\nvar SALUTS = [\"Hi, I'm Jonathan\"];\n\nfunction Layout(_ref) {\n  _s();\n\n  var _this = this;\n\n  var children = _ref.children,\n      isHomepage = _ref.isHomepage,\n      secondaryPage = _ref.secondaryPage;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var onLoadTheme = typeof localStorage !== \"undefined\" && localStorage.getItem(\"BLOG_THEME\");\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(onLoadTheme),\n      theme = _useState[0],\n      setTheme = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      mounted = _useState2[0],\n      setMounted = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(SALUTS[Math.floor(Math.random() * SALUTS.length)]),\n      salut = _useState3[0];\n\n  var switchTheme = function switchTheme() {\n    var setTo = theme === \"dark\" ? \"light\" : \"dark\";\n    setTheme(setTo);\n  };\n\n  function triggerShortcut(e) {\n    if (SHORTCUTS.includes(e.code)) {\n      // Split code to get only the number\n      var code = e.code.split(\"t\")[1]; // Get route from menu\n\n      var path = menu[code].path;\n      router.push(path);\n    }\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    document.addEventListener(\"keypress\", triggerShortcut);\n    if (onLoadTheme) return;\n\n    if (window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n      setTheme(\"dark\");\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    document.documentElement.setAttribute(\"data-theme\", theme);\n    localStorage.setItem(\"BLOG_THEME\", theme);\n    setMounted(true);\n  }, [theme]);\n\n  var containerProps = _objectSpread(_objectSpread({}, isHomepage && {\n    md: 12\n  }), !isHomepage && {\n    md: 8,\n    mdOffset: 2\n  });\n\n  if (!mounted) return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 24\n    }\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_BlackLivesMatter__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"top-menu\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    className: \"logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\",\n    as: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    src: avatar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 21\n    }\n  })))), menu.map(function (_ref2) {\n    var path = _ref2.path,\n        name = _ref2.name;\n    return __jsx(\"li\", {\n      key: name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      href: path,\n      as: path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 19\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 21\n      }\n    }, name)));\n  }))), __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: 2,\n    style: {\n      textAlign: \"right\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: \"theme-switch-button\",\n    onClick: function onClick() {\n      return switchTheme();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, theme === \"dark\" ? __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__[\"Sun\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 35\n    }\n  }) : __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__[\"Moon\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 45\n    }\n  }))))), __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }\n  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, containerProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }), !secondaryPage && __jsx(\"div\", {\n    style: {\n      textAlign: \"center\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 15\n    }\n  }, __jsx(\"h1\", {\n    className: \"blog-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 17\n    }\n  }, salut), __jsx(\"p\", {\n    className: \"entry-description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 17\n    }\n  }, \"Just another code & designer.\")), children))), __jsx(\"footer\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 9\n    }\n  }, \"Good\", __jsx(\"em\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 15\n    }\n  }, \"Vibes\"), \". Happy \", Object(_utils_dateUtils__WEBPACK_IMPORTED_MODULE_7__[\"currentDayName\"])(), \"!\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  }, \"\\xA9 \", new Date().getFullYear())));\n}\n\n_s(Layout, \"rLcjC0FttT01+Ri66r01MbIe0go=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/ZTU4YSJdLCJuYW1lcyI6WyJtZW51IiwicGF0aCIsIm5hbWUiLCJTSE9SVENVVFMiLCJhdmF0YXIiLCJTQUxVVFMiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImlzSG9tZXBhZ2UiLCJzZWNvbmRhcnlQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwib25Mb2FkVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlU3RhdGUiLCJ0aGVtZSIsInNldFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzYWx1dCIsInN3aXRjaFRoZW1lIiwic2V0VG8iLCJ0cmlnZ2VyU2hvcnRjdXQiLCJlIiwiaW5jbHVkZXMiLCJjb2RlIiwic3BsaXQiLCJwdXNoIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwiY29udGFpbmVyUHJvcHMiLCJtZCIsIm1kT2Zmc2V0IiwibWFwIiwidGV4dEFsaWduIiwiY3VycmVudERheU5hbWUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxNQUFJLEVBQUUsV0FEUjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQURXLEVBS1g7QUFDRUQsTUFBSSxFQUFFLFVBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FMVyxFQVNYO0FBQ0VELE1BQUksRUFBRSxXQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBVFcsQ0FBYjtBQWNBLElBQU1DLFNBQVMsR0FBRyxDQUFDLFFB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QUFhLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFiLENBSkYsQ0F0REYsQ0FERjtBQStERDs7R0FqSFEzQyxNO1VBQ1FLLHFEOzs7S0FEUkwsTTtBQW1ITUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHcmlkLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1mbGV4Ym94LWdyaWRcIjtcbmltcG9ydCB7IFN1biwgTW9vbiB9IGZyb20gXCJyZWFjdC1mZWF0aGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgY3VycmVudERheU5hbWUgfSBmcm9tIFwiLi4vdXRpbHMvZGF0ZVV0aWxzXCI7XG5cbmltcG9ydCBCbGFja0xpdmVzTWF0dGVyIGZyb20gXCIuL0JsYWNrTGl2ZXNNYXR0ZXJcIjtcblxuY29uc3QgbWVudSA9IFtcbiAge1xuICAgIHBhdGg6IFwiL3Byb2plY3RzXCIsXG4gICAgbmFtZTogXCJQcm9qZWN0c1wiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvbGlicmFyeVwiLFxuICAgIG5hbWU6IFwiTGlicmFyeVwiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvd3JpdGluZ3NcIixcbiAgICBuYW1lOiBcIldyaXRpbmdzXCIsXG4gIH0sXG5dO1xuY29uc3QgU0hPUlRDVVRTID0gW1wiRGlnaXQwXCIsIFwiRGlnaXQxXCIsIFwiRGlnaXQyXCJdO1xuY29uc3QgYXZhdGFyID0gYGh0dHBzOi8vaW5zdGFncmFtLmZuYm8xLTEuZm5hLmZiY2RuLm5ldC92L3Q1MS4yODg1LTE5L3MxNTB4MTUwLzExOTEzNTA1Ml8zNTU5NjAwMTU0Mzg1OTJfMTEzODM2NTU3ODA3OTUyNzQwOF9uLmpwZz9fbmNfaHQ9aW5zdGFncmFtLmZuYm8xLTEuZm5hLmZiY2RuLm5ldCZfbmNfb2hjPS1WbllEV3ZXc1ZrQVhfWTl2UWEmb2g9NWIxMjUwN2VkMTgyNDVhZmRjN2UxM2E4ZjVkNDFiY2Qmb2U9NUY5M0NCQzJgO1xuY29uc3QgU0FMVVRTID0gW1wiSGksIEknbSBKb25hdGhhblwiXTtcblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIGlzSG9tZXBhZ2UsIHNlY29uZGFyeVBhZ2UgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb25Mb2FkVGhlbWUgPVxuICAgIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJCTE9HX1RIRU1FXCIpO1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKG9uTG9hZFRoZW1lKTtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2FsdXRdID0gdXNlU3RhdGUoU0FMVVRTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNBTFVUUy5sZW5ndGgpXSk7XG4gIGNvbnN0IHN3aXRjaFRoZW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHNldFRvID0gdGhlbWUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCI7XG5cbiAgICBzZXRUaGVtZShzZXRUbyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdHJpZ2dlclNob3J0Y3V0KGUpIHtcbiAgICBpZiAoU0hPUlRDVVRTLmluY2x1ZGVzKGUuY29kZSkpIHtcbiAgICAgIC8vIFNwbGl0IGNvZGUgdG8gZ2V0IG9ubHkgdGhlIG51bWJlclxuICAgICAgY29uc3QgY29kZSA9IGUuY29kZS5zcGxpdChcInRcIilbMV07XG5cbiAgICAgIC8vIEdldCByb3V0ZSBmcm9tIG1lbnVcbiAgICAgIGNvbnN0IHsgcGF0aCB9ID0gbWVudVtjb2RlXTtcblxuICAgICAgcm91dGVyLnB1c2gocGF0aCk7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgdHJpZ2dlclNob3J0Y3V0KTtcblxuICAgIGlmIChvbkxvYWRUaGVtZSkgcmV0dXJuO1xuXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzKSB7XG4gICAgICBzZXRUaGVtZShcImRhcmtcIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCB0aGVtZSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkJMT0dfVEhFTUVcIiwgdGhlbWUpO1xuXG4gICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgfSwgW3RoZW1lXSk7XG5cbiAgY29uc3QgY29udGFpbmVyUHJvcHMgPSB7XG4gICAgLi4uKGlzSG9tZXBhZ2UgJiYgeyBtZDogMTIgfSksXG4gICAgLi4uKCFpc0hvbWVwYWdlICYmIHsgbWQ6IDgsIG1kT2Zmc2V0OiAyIH0pLFxuICB9O1xuXG4gIGlmICghbW91bnRlZCkgcmV0dXJuIDxkaXYgLz47XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJsYWNrTGl2ZXNNYXR0ZXIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbWVudVwiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezEwfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJ9IC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIHttZW51Lm1hcCgoeyBwYXRoLCBuYW1lIH0pID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhdGh9IGFzPXtwYXRofT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e25hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgIDxDb2wgeHM9ezJ9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aGVtZS1zd2l0Y2gtYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3dpdGNoVGhlbWUoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoZW1lID09PSBcImRhcmtcIiA/IDxTdW4gLz4gOiA8TW9vbiAvPn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8R3JpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHsuLi5jb250YWluZXJQcm9wc30+XG4gICAgICAgICAgICB7IXNlY29uZGFyeVBhZ2UgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYmxvZy10aXRsZVwiPntzYWx1dH08L2gxPlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW50cnktZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIEp1c3QgYW5vdGhlciBjb2RlICYgZGVzaWduZXIuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0dyaWQ+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgR29vZDxlbT5WaWJlczwvZW0+LiBIYXBweSB7Y3VycmVudERheU5hbWUoKX0hXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PiZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})