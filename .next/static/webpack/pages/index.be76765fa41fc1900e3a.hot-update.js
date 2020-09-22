webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-flexbox-grid */ \"./node_modules/react-flexbox-grid/lib/index.js\");\n/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/dateUtils */ \"./utils/dateUtils.js\");\n/* harmony import */ var _BlackLivesMatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BlackLivesMatter */ \"./components/BlackLivesMatter.js\");\n\n\n\nvar _jsxFileName = \"/home/jonathan/Projects/mwebaze/components/Layout.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar menu = [{\n  path: \"/projects\",\n  name: \"Projects\"\n}, {\n  path: \"/library\",\n  name: \"Library\"\n}, {\n  path: \"/writings\",\n  name: \"Writings\"\n}];\nvar SHORTCUTS = [\"Digit0\", \"Digit1\", \"Digit2\"];\nvar avatar = \"https://instagram.fnbo1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119135052_355960015438592_1138365578079527408_n.jpg?_nc_ht=instagram.fnbo1-1.fna.fbcdn.net&_nc_ohc=-VnYDWvWsVkAX_Y9vQa&oh=5b12507ed18245afdc7e13a8f5d41bcd&oe=5F93CBC2\";\nvar SALUTS = [\"Hi, I'm Jonathan\"];\n\nfunction Layout(_ref) {\n  _s();\n\n  var _this = this;\n\n  var children = _ref.children,\n      isHomepage = _ref.isHomepage,\n      secondaryPage = _ref.secondaryPage;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var onLoadTheme = typeof localStorage !== \"undefined\" && localStorage.getItem(\"BLOG_THEME\");\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(onLoadTheme),\n      theme = _useState[0],\n      setTheme = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      mounted = _useState2[0],\n      setMounted = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(SALUTS[Math.floor(Math.random() * SALUTS.length)]),\n      salut = _useState3[0];\n\n  var switchTheme = function switchTheme() {\n    var setTo = theme === \"dark\" ? \"light\" : \"dark\";\n    setTheme(setTo);\n  };\n\n  function triggerShortcut(e) {\n    if (SHORTCUTS.includes(e.code)) {\n      // Split code to get only the number\n      var code = e.code.split(\"t\")[1]; // Get route from menu\n\n      var path = menu[code].path;\n      router.push(path);\n    }\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    document.addEventListener(\"keypress\", triggerShortcut);\n    if (onLoadTheme) return;\n\n    if (window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n      setTheme(\"dark\");\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    document.documentElement.setAttribute(\"data-theme\", theme);\n    localStorage.setItem(\"BLOG_THEME\", theme);\n    setMounted(true);\n  }, [theme]);\n\n  var containerProps = _objectSpread(_objectSpread({}, isHomepage && {\n    md: 12\n  }), !isHomepage && {\n    md: 8,\n    mdOffset: 2\n  });\n\n  if (!mounted) return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 24\n    }\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_BlackLivesMatter__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"top-menu\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xsOffset: 6,\n    xs: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    className: \"logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\",\n    as: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    src: avatar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 21\n    }\n  })))), menu.map(function (_ref2) {\n    var path = _ref2.path,\n        name = _ref2.name;\n    return __jsx(\"li\", {\n      key: name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      href: path,\n      as: path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 19\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 21\n      }\n    }, name)));\n  }))), __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: 2,\n    style: {\n      textAlign: \"right\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: \"theme-switch-button\",\n    onClick: function onClick() {\n      return switchTheme();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, theme === \"dark\" ? __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__[\"Sun\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 35\n    }\n  }) : __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__[\"Moon\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 45\n    }\n  }))))), __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }\n  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, containerProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }), !secondaryPage && __jsx(\"div\", {\n    style: {\n      textAlign: \"center\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 15\n    }\n  }, __jsx(\"h1\", {\n    className: \"blog-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 17\n    }\n  }, salut), __jsx(\"p\", {\n    className: \"entry-description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 17\n    }\n  }, \"Just another code & designer.\")), children))), __jsx(\"footer\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 9\n    }\n  }, \"Good\", __jsx(\"em\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 15\n    }\n  }, \"Vibes\"), \". \\uD83E\\uDD18\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  }, \"\\xA9 \", new Date().getFullYear())));\n}\n\n_s(Layout, \"rLcjC0FttT01+Ri66r01MbIe0go=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/ZTU4YSJdLCJuYW1lcyI6WyJtZW51IiwicGF0aCIsIm5hbWUiLCJTSE9SVENVVFMiLCJhdmF0YXIiLCJTQUxVVFMiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImlzSG9tZXBhZ2UiLCJzZWNvbmRhcnlQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwib25Mb2FkVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlU3RhdGUiLCJ0aGVtZSIsInNldFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzYWx1dCIsInN3aXRjaFRoZW1lIiwic2V0VG8iLCJ0cmlnZ2VyU2hvcnRjdXQiLCJlIiwiaW5jbHVkZXMiLCJjb2RlIiwic3BsaXQiLCJwdXNoIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwiY29udGFpbmVyUHJvcHMiLCJtZCIsIm1kT2Zmc2V0IiwibWFwIiwidGV4dEFsaWduIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsTUFBSSxFQUFFLFdBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEVyxFQUtYO0FBQ0VELE1BQUksRUFBRSxVQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTFcsRUFTWDtBQUNFRCxNQUFJLEVBQUUsV0FEUjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQVRXLENBQWI7QUFjQSxJQUFNQyxTQUFTLEdBQUcsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFx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SixHQUFXQyxXQUFYLEVBQWIsQ0FKRixDQXRERixDQURGO0FBK0REOztHQWpIUTFDLE07VUFDUUsscUQ7OztLQURSTCxNO0FBbUhNQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyaWQsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWZsZXhib3gtZ3JpZFwiO1xuaW1wb3J0IHsgU3VuLCBNb29uIH0gZnJvbSBcInJlYWN0LWZlYXRoZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgeyBjdXJyZW50RGF5TmFtZSB9IGZyb20gXCIuLi91dGlscy9kYXRlVXRpbHNcIjtcblxuaW1wb3J0IEJsYWNrTGl2ZXNNYXR0ZXIgZnJvbSBcIi4vQmxhY2tMaXZlc01hdHRlclwiO1xuXG5jb25zdCBtZW51ID0gW1xuICB7XG4gICAgcGF0aDogXCIvcHJvamVjdHNcIixcbiAgICBuYW1lOiBcIlByb2plY3RzXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9saWJyYXJ5XCIsXG4gICAgbmFtZTogXCJMaWJyYXJ5XCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi93cml0aW5nc1wiLFxuICAgIG5hbWU6IFwiV3JpdGluZ3NcIixcbiAgfSxcbl07XG5jb25zdCBTSE9SVENVVFMgPSBbXCJEaWdpdDBcIiwgXCJEaWdpdDFcIiwgXCJEaWdpdDJcIl07XG5jb25zdCBhdmF0YXIgPSBgaHR0cHM6Ly9pbnN0YWdyYW0uZm5ibzEtMS5mbmEuZmJjZG4ubmV0L3YvdDUxLjI4ODUtMTkvczE1MHgxNTAvMTE5MTM1MDUyXzM1NTk2MDAxNTQzODU5Ml8xMTM4MzY1NTc4MDc5NTI3NDA4X24uanBnP19uY19odD1pbnN0YWdyYW0uZm5ibzEtMS5mbmEuZmJjZG4ubmV0Jl9uY19vaGM9LVZuWURXdldzVmtBWF9ZOXZRYSZvaD01YjEyNTA3ZWQxODI0NWFmZGM3ZTEzYThmNWQ0MWJjZCZvZT01RjkzQ0JDMmA7XG5jb25zdCBTQUxVVFMgPSBbXCJIaSwgSSdtIEpvbmF0aGFuXCJdO1xuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaXNIb21lcGFnZSwgc2Vjb25kYXJ5UGFnZSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBvbkxvYWRUaGVtZSA9XG4gICAgdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkJMT0dfVEhFTUVcIik7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUob25Mb2FkVGhlbWUpO1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzYWx1dF0gPSB1c2VTdGF0ZShTQUxVVFNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogU0FMVVRTLmxlbmd0aCldKTtcbiAgY29uc3Qgc3dpdGNoVGhlbWUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2V0VG8gPSB0aGVtZSA9PT0gXCJkYXJrXCIgPyBcImxpZ2h0XCIgOiBcImRhcmtcIjtcblxuICAgIHNldFRoZW1lKHNldFRvKTtcbiAgfTtcblxuICBmdW5jdGlvbiB0cmlnZ2VyU2hvcnRjdXQoZSkge1xuICAgIGlmIChTSE9SVENVVFMuaW5jbHVkZXMoZS5jb2RlKSkge1xuICAgICAgLy8gU3BsaXQgY29kZSB0byBnZXQgb25seSB0aGUgbnVtYmVyXG4gICAgICBjb25zdCBjb2RlID0gZS5jb2RlLnNwbGl0KFwidFwiKVsxXTtcblxuICAgICAgLy8gR2V0IHJvdXRlIGZyb20gbWVudVxuICAgICAgY29uc3QgeyBwYXRoIH0gPSBtZW51W2NvZGVdO1xuXG4gICAgICByb3V0ZXIucHVzaChwYXRoKTtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCB0cmlnZ2VyU2hvcnRjdXQpO1xuXG4gICAgaWYgKG9uTG9hZFRoZW1lKSByZXR1cm47XG5cbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMpIHtcbiAgICAgIHNldFRoZW1lKFwiZGFya1wiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIHRoZW1lKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQkxPR19USEVNRVwiLCB0aGVtZSk7XG5cbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbdGhlbWVdKTtcblxuICBjb25zdCBjb250YWluZXJQcm9wcyA9IHtcbiAgICAuLi4oaXNIb21lcGFnZSAmJiB7IG1kOiAxMiB9KSxcbiAgICAuLi4oIWlzSG9tZXBhZ2UgJiYgeyBtZDogOCwgbWRPZmZzZXQ6IDIgfSksXG4gIH07XG5cbiAgaWYgKCFtb3VudGVkKSByZXR1cm4gPGRpdiAvPjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QmxhY2tMaXZlc01hdHRlciAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1tZW51XCI+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4c09mZnNldD17Nn0geHM9ezZ9PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhcn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAge21lbnUubWFwKCh7IHBhdGgsIG5hbWUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e25hbWV9PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cGF0aH0gYXM9e3BhdGh9PlxuICAgICAgICAgICAgICAgICAgICA8YT57bmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgPENvbCB4cz17Mn0gc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRoZW1lLXN3aXRjaC1idXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hUaGVtZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGhlbWUgPT09IFwiZGFya1wiID8gPFN1biAvPiA6IDxNb29uIC8+fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxHcmlkPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgey4uLmNvbnRhaW5lclByb3BzfT5cbiAgICAgICAgICAgIHshc2Vjb25kYXJ5UGFnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJibG9nLXRpdGxlXCI+e3NhbHV0fTwvaDE+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbnRyeS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgSnVzdCBhbm90aGVyIGNvZGUgJiBkZXNpZ25lci5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvR3JpZD5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBHb29kPGVtPlZpYmVzPC9lbT4uIPCfpJhcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+JmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})