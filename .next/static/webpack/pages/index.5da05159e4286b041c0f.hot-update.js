webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/cashGift.jsx":
/*!****************************!*\
  !*** ./pages/cashGift.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\cashGift.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var CashGift = function CashGift() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }, "CashGift");
};
_c = CashGift;
/* harmony default export */ __webpack_exports__["default"] = (CashGift);
var _c;
$RefreshReg$(_c, "CashGift");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_add_to_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-add-to-calendar */ "./node_modules/react-add-to-calendar/dist/react-add-to-calendar.min.js");
/* harmony import */ var react_add_to_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Head */ "./src/components/Head.jsx");
/* harmony import */ var _src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/utils/resolvePath */ "./src/utils/resolvePath.js");
/* harmony import */ var _src_config_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/config/app */ "./src/config/app.js");
/* harmony import */ var _src_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/i18n */ "./src/i18n/index.js");
/* harmony import */ var _guest_list_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guest_list.json */ "./pages/guest_list.json");
var _guest_list_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./guest_list.json */ "./pages/guest_list.json", 1);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _stories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stories */ "./pages/stories.jsx");
/* harmony import */ var _pictureGrid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pictureGrid */ "./pages/pictureGrid.jsx");
/* harmony import */ var _collect_guest_attendance__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./collect-guest-attendance */ "./pages/collect-guest-attendance.jsx");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _cashGift__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cashGift */ "./pages/cashGift.jsx");


var _this = undefined,
  _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\index.jsx",
  _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }















var LoveTitleIcon = function LoveTitleIcon() {
  return __jsx("img", {
    src: "assets/images/wine.png",
    style: {
      width: '80px',
      height: '80px'
    },
    alt: "wine illustrator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  });
};
_c = LoveTitleIcon;
var EventDateIcon = function EventDateIcon() {
  return __jsx("svg", {
    width: "35",
    height: "78",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M20.355 12.083c-1.643-1.62-2.156-4.77.41-5.83 1.187-.49 2.68-.365 3.928-.227 1.286.143 2.552.417 3.77.856 2.173.785 5.184 2.164 6.027 4.51.993 2.762-1.968 4.107-4.155 4.474-2.775.465-5.706.417-8.513.338-2.694-.076-5.454-.375-7.98-1.366-2.27-.892-4.59-2.333-5.723-4.58-1.043-2.066-.836-4.541.475-6.444C10.4 1.193 13.422.69 16.381.337A49.462 49.462 0 0 1 27.307.27c1.2.123 1.212 2.017 0 1.893a49.877 49.877 0 0 0-7.412-.223c-2.265.105-4.671.24-6.85.902-1.807.549-3.232 1.882-3.627 3.77-.414 1.978.708 3.732 2.23 4.903 3.25 2.5 7.672 2.811 11.615 2.817 2.225.004 4.55.074 6.745-.32.804-.144 1.895-.32 2.484-.957.814-.88-.32-1.938-1.01-2.467-1.83-1.406-4.144-2.283-6.416-2.619-.979-.145-2.579-.413-3.52 0-1.294.57-.576 2.063.147 2.777.87.856-.47 2.194-1.338 1.338Z",
    fill: "#211D1D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M34.023 13.727c-1.494 5.45-3.158 10.933-7.099 15.157a22.39 22.39 0 0 1-6.03 4.581c-2.323 1.205-5.13 2.385-7.781 1.828-1.19-.25-.687-2.075.503-1.825 2.292.48 5.02-.888 6.97-1.986a20.808 20.808 0 0 0 5.396-4.373c3.446-3.904 4.869-8.97 6.216-13.884.32-1.174 2.147-.676 1.825.502Z",
    fill: "#211D1D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M9.028 7.923c-1.266 8.344-2.59 18.37 3.722 25.133.83.89-.505 2.231-1.338 1.339-6.84-7.331-5.587-17.893-4.21-26.974.183-1.2 2.006-.69 1.826.502Z",
    fill: "#211D1D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M14.877 34.343c-1.918 14.074-1.349 28.46 1.636 42.344.255 1.187-1.569 1.695-1.825.503a125.654 125.654 0 0 1-1.636-43.35c.164-1.202 1.988-.69 1.825.503Z",
    fill: "#211D1D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M10.34 60.891c-.416-4.656-3.845-8.86-8.29-10.26-1.158-.365-.664-2.193.502-1.825 5.301 1.67 9.186 6.562 9.68 12.085.108 1.212-1.785 1.205-1.893 0Z",
    fill: "#211D1D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M3.197 49.92c-.73 1.386-.92 2.937-.96 4.484-.037 1.476-.259 3.246.739 4.46.92 1.12 2.271 1.956 3.53 2.643a17.595 17.595 0 0 0 4.402 1.662c1.184.28.683 2.105-.503 1.825a19.37 19.37 0 0 1-5.07-1.974c-1.515-.855-3.106-1.922-4.12-3.362C.153 58.15.3 56.163.345 54.404c.049-1.89.327-3.75 1.217-5.44.569-1.077 2.202-.122 1.635.956Z",
    fill: "#211D1D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M7.919 58.026c1.36 1.72 2.723 3.44 4.084 5.16.306.388.406.965 0 1.339-.342.313-1.01.414-1.338 0L6.58 59.363c-.306-.387-.406-.965 0-1.337.342-.314 1.01-.415 1.339 0ZM12.629 51.884a28.08 28.08 0 0 1 17.418-6.628c1.219-.03 1.218 1.863 0 1.892-5.863.14-11.594 2.288-16.08 6.074-.926.782-2.27-.55-1.338-1.338Z",
    fill: "#211D1D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M32.267 46.673c-1.21 4.234-4.072 8.142-8.054 10.15-3.783 1.906-8.623 1.753-11.649-1.48-.831-.889.504-2.23 1.338-1.338 2.6 2.776 6.735 2.676 9.872.907 3.297-1.857 5.638-5.138 6.669-8.742.334-1.169 2.16-.672 1.824.503Z",
    fill: "#211D1D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M14.35 53.138a40.707 40.707 0 0 1 5.912-1.533c.485-.087 1.043.132 1.163.661.105.463-.14 1.07-.66 1.165a40.616 40.616 0 0 0-5.913 1.533c-.468.16-1.054-.184-1.163-.661-.12-.526.158-.993.66-1.165Z",
    fill: "#211D1D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }));
};
_c2 = EventDateIcon;
var HeaderLogo = function HeaderLogo() {
  return __jsx("span", {
    style: {
      display: 'inlineBlock',
      backfaceVisibility: 'hidden',
      transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx("svg", {
    width: "40",
    height: "40",
    fill: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "m34.613 27.737 1.437.088a6.111 6.111 0 0 1 1.925.2c.35.2.538.475.1.762-.437.288-1.1 0-1.5 0-.4 0-.925-.1-1.4-.125a3.296 3.296 0 0 0-1.05 0c-.35.113-.287.213-.487.613a7.577 7.577 0 0 1-1.763 2.15c-1.462 1.25-3.45 1.337-5.162 2.087.45-2.962 2.725-4.437 5.475-5-.975 0-2.675-.875-3.513-.462-1.487.637-3.75 1.5-4.212 3.25-.238 1.062-.188 2.637-1.538 2.962-1.35.325-1.725-.962-1.4-1.975-.875.45-2.05.088-1.862-1.05.187-1.137 1.525-1.25 2.387-1.362 2.213-.35 3.9-1.625 5.988-2.288a25.845 25.845 0 0 0-2.5-1.025 6.837 6.837 0 0 0-2.6.488c-.92.114-1.828.31-2.713.587-.64.34-1.19.828-1.6 1.425-.987 1.163-2.2 2.5-3.9 2.375-2.15-.2-1.912-2.65-.325-3.487-1.025 0-2.5-.638-2.4-1.875.088-1.55 1.963-1.738 3.125-1.425 1.097.419 2.166.907 3.2 1.462 1.938.788 3.75 0 5.763-.2a37.994 37.994 0 0 1-4.65-2.675 2.187 2.187 0 0 0-1.375-.55h-1.25a27.671 27.671 0 0 0-3.375.1c-.775 0-1.325.738-1.838 1.25a6.138 6.138 0 0 1-2.5 1.713 1.987 1.987 0 0 1-2.5-.625A2.075 2.075 0 0 1 7.713 22.4c-.975-.325-2.288-1.113-1.425-2.3 1.012-1.388 2.875-.65 3.937.15a5.875 5.875 0 0 0 2.938 1.6c1.482.087 2.968.087 4.45 0a23.74 23.74 0 0 1-2.038-2.013 5.787 5.787 0 0 0-.862-.962c-.852-.38-1.752-.641-2.675-.775a14.522 14.522 0 0 0-2.75-.775 5.611 5.611 0 0 0-2.688.625 6.251 6.251 0 0 1-3.137.525 1.95 1.95 0 0 1-1.675-2.063c.125-1.037.987-1.387 1.875-1.55-2.025-1.887.775-3.687 2.5-2.012 1.025 1.012 1.637 2.912 2.912 3.425 1.613.65 3.375.887 5 1.637-.937-1.25-1.85-2.5-2.725-3.75a6.875 6.875 0 0 0-2.775-2.975c-1.487-.675-3.45-1.487-3.75-3.35-.35-2.287 2.238-1.9 3.45-.95a2.163 2.163 0 0 1 1.4-2.5c1.25-.487 2.013.463 2.175 1.675.025 1.438-.6 2.825-.825 4.325-.262 2.213 2.15 4.875 3.363 6.6 0-1.85.7-4.062-.263-5.787-.625-1.425-2.612-3.825-1.25-5.425 1-1.138 2.238.125 2.575 1.15a1.462 1.462 0 0 1 2.5-.263c1.25 1.725-.75 3.238-1.662 4.513-1.1 1.512-.9 2.95-1.038 4.737a6.597 6.597 0 0 0-.162 2.025c.137.413.812.888 1.112 1.25a26.93 26.93 0 0 0 2.563 2.363c-.1-2.1.212-4.275-.513-6.25-.425-1.15-1.4-3.15-.5-4.288.9-1.137 1.9-.137 2.25.813a2.025 2.025 0 0 1 2.5-.65 1.95 1.95 0 0 1 .425 2.5c-.85 1.812-3.287 2.762-3.287 4.825-.125.95-.063 1.987-.1 2.95a2.023 2.023 0 0 0 0 .675c.137.275.862.612 1.112.775a35.377 35.377 0 0 0 5 2.637c-.287-1.25-.312-2.412-.512-3.75a5.338 5.338 0 0 0-1.388-2.812c-.737-.988-1.5-2.65-.387-3.688.875-.825 2.025-.062 2.35.888 1.05-1.6 3.662-1.438 3.75.737.087 1.65-1.35 2.725-2.5 3.625-.233.15-.419.363-.538.613a3.033 3.033 0 0 0-.187.725c-.057.836-.011 1.675.137 2.5 0 .512 0 1.25.413 1.512.522.28 1.082.482 1.662.6a20.13 20.13 0 0 0 4.188 1.038 6.075 6.075 0 0 1-2.188-4.2 9.1 9.1 0 0 1 .8-4.513c.825 1.25 2.013 2.35 2.763 3.675a5.763 5.763 0 0 1 .1 5.25c.166.013.333.013.5 0Z",
    fill: "#DFAE00",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M19.55 15.787s3.275-2.85 2.5-3.637c-.775-.788-2.112.912-2.112.912s-.638-1.85-1.463-1.25c-.825.6 1.075 3.975 1.075 3.975ZM15.188 10.788s2.975-2.913 1.962-3.475c-1.012-.563-1.75 1.25-1.75 1.25s-.975-2.5-1.787-1.788c-.813.713 1.575 4.013 1.575 4.013ZM9.662 10.437s1.963-4.587.488-4.837-1.4 2.6-1.4 2.6-2.913-1.95-3.113-.7c-.237 1.525 4.025 2.937 4.025 2.937ZM7.3 16.513s-1.8-3.625-2.9-3.2c-1.1.425.425 2.1.425 2.1s-2.088.275-1.963 1.512c.125 1.238 4.438-.412 4.438-.412ZM11.662 22.575S8.35 19.663 7.5 20.425c-.85.763 2.062 2.075 2.062 2.075s-3.1 1.475-2.062 2.2c1.25.888 4.162-2.125 4.162-2.125ZM18.588 27.375s-4.638-2.638-5.363-1.588c-.725 1.05 2.763 1.825 2.763 1.825s-2.825 1.938-1.513 2.638c1.313.7 4.113-2.875 4.113-2.875ZM25.85 20s3.75-2.5 2.287-3.512c-1.112-.763-2.5 1.087-2.5 1.087s-.812-2.1-1.712-1.4c-.9.7 1.925 3.825 1.925 3.825ZM23.963 30.175s-.438 2.85-1.25 3.15c-.813.3-.213-2.075-.213-2.075s-2.025.925-1.925 0c.1-.925 3.388-1.075 3.388-1.075Z",
    fill: "#F7D47D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M33.287 26.95a4.887 4.887 0 0 0 .125-3.35 6.362 6.362 0 0 0-1.887-3.05c-1.063 4.537 1.762 6.4 1.762 6.4ZM32.75 29.15c-.622.804-1.36 1.511-2.188 2.1-.874.555-1.826.976-2.825 1.25a6.713 6.713 0 0 1 2.113-2.137 11.588 11.588 0 0 1 2.9-1.213Z",
    fill: "#DCB3B4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  })));
};
_c3 = HeaderLogo;
var translateConfig = function translateConfig(appConfig, locale) {
  if (!locale || locale === _src_i18n__WEBPACK_IMPORTED_MODULE_10__["defaultLocale"]) {
    return appConfig;
  }
  // Replace config with lang
  var configLang = appConfig.lang[locale];
  if (configLang === undefined) {
    throw new Error('invalid locale: ', locale);
  }
  return _objectSpread(_objectSpread({}, appConfig), configLang);
};
var ShowInvite = function ShowInvite(_ref) {
  _s();
  var currentUrl = _ref.currentUrl,
    guestListLastUpdatedAt = _ref.guestListLastUpdatedAt,
    guest = _ref.guest;
  var t = Object(_src_i18n__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])(guest.locale);

  // Initiate config variables
  var _translateConfig = translateConfig(_src_config_app__WEBPACK_IMPORTED_MODULE_9__["default"], guest.locale),
    logo = _translateConfig.logo,
    ogTags = _translateConfig.ogTags,
    coupleInfo = _translateConfig.coupleInfo,
    venue = _translateConfig.venue,
    weddingDay = _translateConfig.weddingDay,
    weddingDate = _translateConfig.weddingDate,
    weddingTime = _translateConfig.weddingTime,
    calendarInfo = _translateConfig.calendarInfo;
  var brideName = coupleInfo.brideName,
    groomName = coupleInfo.groomName,
    hashtag = coupleInfo.hashtag,
    coupleNameFormat = coupleInfo.coupleNameFormat;
  var coupleNameStr = coupleNameFormat === 'GROOM_FIRST' ? "".concat(groomName, " & ").concat(brideName) : "".concat(brideName, " & ").concat(groomName);
  var coupleName = coupleNameFormat === 'GROOM_FIRST' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, brideName, " ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, "&"), " ", groomName) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, groomName, " ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, "&"), " ", brideName);

  // Venue info
  var venueBrief = "".concat(venue.name, ", ").concat(venue.city, ", ").concat(venue.country);
  var weddingDateBrief = "".concat(weddingDay, ", ").concat(weddingDate);

  // Event info
  var eventTitle = "".concat(coupleNameStr, "'s Wedding");
  var eventDescription = "".concat(weddingDateBrief, " at ").concat(venue.name, ", ").concat(venue.city);
  if (guest.name) {
    eventDescription = "Dear ".concat(guest.name, ", you are cordially invited to our wedding on ").concat(weddingDate, " at ").concat(venue.name, ". Looking forward to seeing you!");
  }

  // Calendar payload
  var calendarEvent = {
    title: eventTitle,
    description: eventDescription,
    location: "".concat(venue.city, ", ").concat(venue.country),
    startTime: calendarInfo.timeStartISO,
    endTime: calendarInfo.timeEndISO
  };
  var eventSchedule = [{
    icon: __jsx(EventDateIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }
    }),
    event: 'Church',
    date: 'Dec 16, 2023',
    time: '12pm'
  }, {
    icon: __jsx(EventDateIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }
    }),
    event: 'Reception',
    date: 'Dec 16, 2023',
    time: '2pm'
  }
  // {
  //   icon: <EventDateIcon />,
  //   event: 'Engagement',
  //   date: 'Dec 16, 2023',
  //   time: '2pm',
  // },
  ];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
    showModal = _useState[0],
    setShowModal = _useState[1];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var timer = setTimeout(function () {
      setShowModal(true);
    }, 10000);
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var handleScroll = function handleScroll() {
      var element = elementRef.current;
      if (element) {
        var elementPosition = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.9) {
          element.classList.add('animated-element'); // Add the CSS class when the element is 75% visible
        } else {
          element.classList.remove('animated-element'); // Remove the CSS class if not visible
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run this effect only once when the component is mounted

  return __jsx("div", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1703421768",
    __self: _this
  }, "a.react-add-to-calendar__button span{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxhZGV3YWxlLXdlZGRpbmctaW52aXRlXFxwYWdlc1xcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTROUyxBQUc0QixlQUNXLDREQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcYWRld2FsZS13ZWRkaW5nLWludml0ZVxccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IFN0b3JpZXMgZnJvbSAnLi9zdG9yaWVzJztcbmltcG9ydCBQaWN0dXJlc0dyaWQgZnJvbSAnLi9waWN0dXJlR3JpZCc7XG5pbXBvcnQgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSBmcm9tICcuL2NvbGxlY3QtZ3Vlc3QtYXR0ZW5kYW5jZSc7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XG5pbXBvcnQgQ2FzaEdpZnQgZnJvbSAnLi9jYXNoR2lmdCc7XG5cbmNvbnN0IExvdmVUaXRsZUljb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgc3JjPSdhc3NldHMvaW1hZ2VzL3dpbmUucG5nJ1xuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnODBweCcsXG4gICAgICB9fVxuICAgICAgYWx0PSd3aW5lIGlsbHVzdHJhdG9yJ1xuICAgIC8+XG4gICk7XG59O1xuY29uc3QgRXZlbnREYXRlSWNvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPSczNScgaGVpZ2h0PSc3OCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00yMC4zNTUgMTIuMDgzYy0xLjY0My0xLjYyLTIuMTU2LTQuNzcuNDEtNS44MyAxLjE4Ny0uNDkgMi42OC0uMzY1IDMuOTI4LS4yMjcgMS4yODYuMTQzIDIuNTUyLjQxNyAzLjc3Ljg1NiAyLjE3My43ODUgNS4xODQgMi4xNjQgNi4wMjcgNC41MS45OTMgMi43NjItMS45NjggNC4xMDctNC4xNTUgNC40NzQtMi43NzUuNDY1LTUuNzA2LjQxNy04LjUxMy4zMzgtMi42OTQtLjA3Ni01LjQ1NC0uMzc1LTcuOTgtMS4zNjYtMi4yNy0uODkyLTQuNTktMi4zMzMtNS43MjMtNC41OC0xLjA0My0yLjA2Ni0uODM2LTQuNTQxLjQ3NS02LjQ0NEMxMC40IDEuMTkzIDEzLjQyMi42OSAxNi4zODEuMzM3QTQ5LjQ2MiA0OS40NjIgMCAwIDEgMjcuMzA3LjI3YzEuMi4xMjMgMS4yMTIgMi4wMTcgMCAxLjg5M2E0OS44NzcgNDkuODc3IDAgMCAwLTcuNDEyLS4yMjNjLTIuMjY1LjEwNS00LjY3MS4yNC02Ljg1LjkwMi0xLjgwNy41NDktMy4yMzIgMS44ODItMy42MjcgMy43Ny0uNDE0IDEuOTc4LjcwOCAzLjczMiAyLjIzIDQuOTAzIDMuMjUgMi41IDcuNjcyIDIuODExIDExLjYxNSAyLjgxNyAyLjIyNS4wMDQgNC41NS4wNzQgNi43NDUtLjMyLjgwNC0uMTQ0IDEuODk1LS4zMiAyLjQ4NC0uOTU3LjgxNC0uODgtLjMyLTEuOTM4LTEuMDEtMi40NjctMS44My0xLjQwNi00LjE0NC0yLjI4My02LjQxNi0yLjYxOS0uOTc5LS4xNDUtMi41NzktLjQxMy0zLjUyIDAtMS4yOTQuNTctLjU3NiAyLjA2My4xNDcgMi43NzcuODcuODU2LS40NyAyLjE5NC0xLjMzOCAxLjMzOFonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTM0LjAyMyAxMy43MjdjLTEuNDk0IDUuNDUtMy4xNTggMTAuOTMzLTcuMDk5IDE1LjE1N2EyMi4zOSAyMi4zOSAwIDAgMS02LjAzIDQuNTgxYy0yLjMyMyAxLjIwNS01LjEzIDIuMzg1LTcuNzgxIDEuODI4LTEuMTktLjI1LS42ODctMi4wNzUuNTAzLTEuODI1IDIuMjkyLjQ4IDUuMDItLjg4OCA2Ljk3LTEuOTg2YTIwLjgwOCAyMC44MDggMCAwIDAgNS4zOTYtNC4zNzNjMy40NDYtMy45MDQgNC44NjktOC45NyA2LjIxNi0xMy44ODQuMzItMS4xNzQgMi4xNDctLjY3NiAxLjgyNS41MDJaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J005LjAyOCA3LjkyM2MtMS4yNjYgOC4zNDQtMi41OSAxOC4zNyAzLjcyMiAyNS4xMzMuODMuODktLjUwNSAyLjIzMS0xLjMzOCAxLjMzOS02Ljg0LTcuMzMxLTUuNTg3LTE3Ljg5My00LjIxLTI2Ljk3NC4xODMtMS4yIDIuMDA2LS42OSAxLjgyNi41MDJaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00xNC44NzcgMzQuMzQzYy0xLjkxOCAxNC4wNzQtMS4zNDkgMjguNDYgMS42MzYgNDIuMzQ0LjI1NSAxLjE4Ny0xLjU2OSAxLjY5NS0xLjgyNS41MDNhMTI1LjY1NCAxMjUuNjU0IDAgMCAxLTEuNjM2LTQzLjM1Yy4xNjQtMS4yMDIgMS45ODgtLjY5IDEuODI1LjUwM1onXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTEwLjM0IDYwLjg5MWMtLjQxNi00LjY1Ni0zLjg0NS04Ljg2LTguMjktMTAuMjYtMS4xNTgtLjM2NS0uNjY0LTIuMTkzLjUwMi0xLjgyNSA1LjMwMSAxLjY3IDkuMTg2IDYuNTYyIDkuNjggMTIuMDg1LjEwOCAxLjIxMi0xLjc4NSAxLjIwNS0xLjg5MyAwWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMy4xOTcgNDkuOTJjLS43MyAxLjM4Ni0uOTIgMi45MzctLjk2IDQuNDg0LS4wMzcgMS40NzYtLjI1OSAzLjI0Ni43MzkgNC40Ni45MiAxLjEyIDIuMjcxIDEuOTU2IDMuNTMgMi42NDNhMTcuNTk1IDE3LjU5NSAwIDAgMCA0LjQwMiAxLjY2MmMxLjE4NC4yOC42ODMgMi4xMDUtLjUwMyAxLjgyNWExOS4zNyAxOS4zNyAwIDAgMS01LjA3LTEuOTc0Yy0xLjUxNS0uODU1LTMuMTA2LTEuOTIyLTQuMTItMy4zNjJDLjE1MyA1OC4xNS4zIDU2LjE2My4zNDUgNTQuNDA0Yy4wNDktMS44OS4zMjctMy43NSAxLjIxNy01LjQ0LjU2OS0xLjA3NyAyLjIwMi0uMTIyIDEuNjM1Ljk1NlonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTcuOTE5IDU4LjAyNmMxLjM2IDEuNzIgMi43MjMgMy40NCA0LjA4NCA1LjE2LjMwNi4zODguNDA2Ljk2NSAwIDEuMzM5LS4zNDIuMzEzLTEuMDEuNDE0LTEuMzM4IDBMNi41OCA1OS4zNjNjLS4zMDYtLjM4Ny0uNDA2LS45NjUgMC0xLjMzNy4zNDItLjMxNCAxLjAxLS40MTUgMS4zMzkgMFpNMTIuNjI5IDUxLjg4NGEyOC4wOCAyOC4wOCAwIDAgMSAxNy40MTgtNi42MjhjMS4yMTktLjAzIDEuMjE4IDEuODYzIDAgMS44OTItNS44NjMuMTQtMTEuNTk0IDIuMjg4LTE2LjA4IDYuMDc0LS45MjYuNzgyLTIuMjctLjU1LTEuMzM4LTEuMzM4WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMzIuMjY3IDQ2LjY3M2MtMS4yMSA0LjIzNC00LjA3MiA4LjE0Mi04LjA1NCAxMC4xNS0zLjc4MyAxLjkwNi04LjYyMyAxLjc1My0xMS42NDktMS40OC0uODMxLS44ODkuNTA0LTIuMjMgMS4zMzgtMS4zMzggMi42IDIuNzc2IDYuNzM1IDIuNjc2IDkuODcyLjkwNyAzLjI5Ny0xLjg1NyA1LjYzOC01LjEzOCA2LjY2OS04Ljc0Mi4zMzQtMS4xNjkgMi4xNi0uNjcyIDEuODI0LjUwM1onXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTE0LjM1IDUzLjEzOGE0MC43MDcgNDAuNzA3IDAgMCAxIDUuOTEyLTEuNTMzYy40ODUtLjA4NyAxLjA0My4xMzIgMS4xNjMuNjYxLjEwNS40NjMtLjE0IDEuMDctLjY2IDEuMTY1YTQwLjYxNiA0MC42MTYgMCAwIDAtNS45MTMgMS41MzNjLS40NjguMTYtMS4wNTQtLjE4NC0xLjE2My0uNjYxLS4xMi0uNTI2LjE1OC0uOTkzLjY2LTEuMTY1WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5jb25zdCBIZWFkZXJMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lQmxvY2snLFxuICAgICAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAwcHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxKScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxzdmcgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyBmaWxsPSdub25lJz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdtMzQuNjEzIDI3LjczNyAxLjQzNy4wODhhNi4xMTEgNi4xMTEgMCAwIDEgMS45MjUuMmMuMzUuMi41MzguNDc1LjEuNzYyLS40MzcuMjg4LTEuMSAwLTEuNSAwLS40IDAtLjkyNS0uMS0xLjQtLjEyNWEzLjI5NiAzLjI5NiAwIDAgMC0xLjA1IDBjLS4zNS4xMTMtLjI4Ny4yMTMtLjQ4Ny42MTNhNy41NzcgNy41NzcgMCAwIDEtMS43NjMgMi4xNWMtMS40NjIgMS4yNS0zLjQ1IDEuMzM3LTUuMTYyIDIuMDg3LjQ1LTIuOTYyIDIuNzI1LTQuNDM3IDUuNDc1LTUtLjk3NSAwLTIuNjc1LS44NzUtMy41MTMtLjQ2Mi0xLjQ4Ny42MzctMy43NSAxLjUtNC4yMTIgMy4yNS0uMjM4IDEuMDYyLS4xODggMi42MzctMS41MzggMi45NjItMS4zNS4zMjUtMS43MjUtLjk2Mi0xLjQtMS45NzUtLjg3NS40NS0yLjA1LjA4OC0xLjg2Mi0xLjA1LjE4Ny0xLjEzNyAxLjUyNS0xLjI1IDIuMzg3LTEuMzYyIDIuMjEzLS4zNSAzLjktMS42MjUgNS45ODgtMi4yODhhMjUuODQ1IDI1Ljg0NSAwIDAgMC0yLjUtMS4wMjUgNi44MzcgNi44MzcgMCAwIDAtMi42LjQ4OGMtLjkyLjExNC0xLjgyOC4zMS0yLjcxMy41ODctLjY0LjM0LTEuMTkuODI4LTEuNiAxLjQyNS0uOTg3IDEuMTYzLTIuMiAyLjUtMy45IDIuMzc1LTIuMTUtLjItMS45MTItMi42NS0uMzI1LTMuNDg3LTEuMDI1IDAtMi41LS42MzgtMi40LTEuODc1LjA4OC0xLjU1IDEuOTYzLTEuNzM4IDMuMTI1LTEuNDI1IDEuMDk3LjQxOSAyLjE2Ni45MDcgMy4yIDEuNDYyIDEuOTM4Ljc4OCAzLjc1IDAgNS43NjMtLjJhMzcuOTk0IDM3Ljk5NCAwIDAgMS00LjY1LTIuNjc1IDIuMTg3IDIuMTg3IDAgMCAwLTEuMzc1LS41NWgtMS4yNWEyNy42NzEgMjcuNjcxIDAgMCAwLTMuMzc1LjFjLS43NzUgMC0xLjMyNS43MzgtMS44MzggMS4yNWE2LjEzOCA2LjEzOCAwIDAgMS0yLjUgMS43MTMgMS45ODcgMS45ODcgMCAwIDEtMi41LS42MjVBMi4wNzUgMi4wNzUgMCAwIDEgNy43MTMgMjIuNGMtLjk3NS0uMzI1LTIuMjg4LTEuMTEzLTEuNDI1LTIuMyAxLjAxMi0xLjM4OCAyLjg3NS0uNjUgMy45MzcuMTVhNS44NzUgNS44NzUgMCAwIDAgMi45MzggMS42YzEuNDgyLjA4NyAyLjk2OC4wODcgNC40NSAwYTIzLjc0IDIzLjc0IDAgMCAxLTIuMDM4LTIuMDEzIDUuNzg3IDUuNzg3IDAgMCAwLS44NjItLjk2MmMtLjg1Mi0uMzgtMS43NTItLjY0MS0yLjY3NS0uNzc1YTE0LjUyMiAxNC41MjIgMCAwIDAtMi43NS0uNzc1IDUuNjExIDUuNjExIDAgMCAwLTIuNjg4LjYyNSA2LjI1MSA2LjI1MSAwIDAgMS0zLjEzNy41MjUgMS45NSAxLjk1IDAgMCAxLTEuNjc1LTIuMDYzYy4xMjUtMS4wMzcuOTg3LTEuMzg3IDEuODc1LTEuNTUtMi4wMjUtMS44ODcuNzc1LTMuNjg3IDIuNS0yLjAxMiAxLjAyNSAxLjAxMiAxLjYzNyAyLjkxMiAyLjkxMiAzLjQyNSAxLjYxMy42NSAzLjM3NS44ODcgNSAxLjYzNy0uOTM3LTEuMjUtMS44NS0yLjUtMi43MjUtMy43NWE2Ljg3NSA2Ljg3NSAwIDAgMC0yLjc3NS0yLjk3NWMtMS40ODctLjY3NS0zLjQ1LTEuNDg3LTMuNzUtMy4zNS0uMzUtMi4yODcgMi4yMzgtMS45IDMuNDUtLjk1YTIuMTYzIDIuMTYzIDAgMCAxIDEuNC0yLjVjMS4yNS0uNDg3IDIuMDEzLjQ2MyAyLjE3NSAxLjY3NS4wMjUgMS40MzgtLjYgMi44MjUtLjgyNSA0LjMyNS0uMjYyIDIuMjEzIDIuMTUgNC44NzUgMy4zNjMgNi42IDAtMS44NS43LTQuMDYyLS4yNjMtNS43ODctLjYyNS0xLjQyNS0yLjYxMi0zLjgyNS0xLjI1LTUuNDI1IDEtMS4xMzggMi4yMzguMTI1IDIuNTc1IDEuMTVhMS40NjIgMS40NjIgMCAwIDEgMi41LS4yNjNjMS4yNSAxLjcyNS0uNzUgMy4yMzgtMS42NjIgNC41MTMtMS4xIDEuNTEyLS45IDIuOTUtMS4wMzggNC43MzdhNi41OTcgNi41OTcgMCAwIDAtLjE2MiAyLjAyNWMuMTM3LjQxMy44MTIuODg4IDEuMTEyIDEuMjVhMjYuOTMgMjYuOTMgMCAwIDAgMi41NjMgMi4zNjNjLS4xLTIuMS4yMTItNC4yNzUtLjUxMy02LjI1LS40MjUtMS4xNS0xLjQtMy4xNS0uNS00LjI4OC45LTEuMTM3IDEuOS0uMTM3IDIuMjUuODEzYTIuMDI1IDIuMDI1IDAgMCAxIDIuNS0uNjUgMS45NSAxLjk1IDAgMCAxIC40MjUgMi41Yy0uODUgMS44MTItMy4yODcgMi43NjItMy4yODcgNC44MjUtLjEyNS45NS0uMDYzIDEuOTg3LS4xIDIuOTVhMi4wMjMgMi4wMjMgMCAwIDAgMCAuNjc1Yy4xMzcuMjc1Ljg2Mi42MTIgMS4xMTIuNzc1YTM1LjM3NyAzNS4zNzcgMCAwIDAgNSAyLjYzN2MtLjI4Ny0xLjI1LS4zMTItMi40MTItLjUxMi0zLjc1YTUuMzM4IDUuMzM4IDAgMCAwLTEuMzg4LTIuODEyYy0uNzM3LS45ODgtMS41LTIuNjUtLjM4Ny0zLjY4OC44NzUtLjgyNSAyLjAyNS0uMDYyIDIuMzUuODg4IDEuMDUtMS42IDMuNjYyLTEuNDM4IDMuNzUuNzM3LjA4NyAxLjY1LTEuMzUgMi43MjUtMi41IDMuNjI1LS4yMzMuMTUtLjQxOS4zNjMtLjUzOC42MTNhMy4wMzMgMy4wMzMgMCAwIDAtLjE4Ny43MjVjLS4wNTcuODM2LS4wMTEgMS42NzUuMTM3IDIuNSAwIC41MTIgMCAxLjI1LjQxMyAxLjUxMi41MjIuMjggMS4wODIuNDgyIDEuNjYyLjZhMjAuMTMgMjAuMTMgMCAwIDAgNC4xODggMS4wMzggNi4wNzUgNi4wNzUgMCAwIDEtMi4xODgtNC4yIDkuMSA5LjEgMCAwIDEgLjgtNC41MTNjLjgyNSAxLjI1IDIuMDEzIDIuMzUgMi43NjMgMy42NzVhNS43NjMgNS43NjMgMCAwIDEgLjEgNS4yNWMuMTY2LjAxMy4zMzMuMDEzLjUgMFonXG4gICAgICAgICAgZmlsbD0nI0RGQUUwMCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdNMTkuNTUgMTUuNzg3czMuMjc1LTIuODUgMi41LTMuNjM3Yy0uNzc1LS43ODgtMi4xMTIuOTEyLTIuMTEyLjkxMnMtLjYzOC0xLjg1LTEuNDYzLTEuMjVjLS44MjUuNiAxLjA3NSAzLjk3NSAxLjA3NSAzLjk3NVpNMTUuMTg4IDEwLjc4OHMyLjk3NS0yLjkxMyAxLjk2Mi0zLjQ3NWMtMS4wMTItLjU2My0xLjc1IDEuMjUtMS43NSAxLjI1cy0uOTc1LTIuNS0xLjc4Ny0xLjc4OGMtLjgxMy43MTMgMS41NzUgNC4wMTMgMS41NzUgNC4wMTNaTTkuNjYyIDEwLjQzN3MxLjk2My00LjU4Ny40ODgtNC44MzctMS40IDIuNi0xLjQgMi42LTIuOTEzLTEuOTUtMy4xMTMtLjdjLS4yMzcgMS41MjUgNC4wMjUgMi45MzcgNC4wMjUgMi45MzdaTTcuMyAxNi41MTNzLTEuOC0zLjYyNS0yLjktMy4yYy0xLjEuNDI1LjQyNSAyLjEuNDI1IDIuMXMtMi4wODguMjc1LTEuOTYzIDEuNTEyYy4xMjUgMS4yMzggNC40MzgtLjQxMiA0LjQzOC0uNDEyWk0xMS42NjIgMjIuNTc1UzguMzUgMTkuNjYzIDcuNSAyMC40MjVjLS44NS43NjMgMi4wNjIgMi4wNzUgMi4wNjIgMi4wNzVzLTMuMSAxLjQ3NS0yLjA2MiAyLjJjMS4yNS44ODggNC4xNjItMi4xMjUgNC4xNjItMi4xMjVaTTE4LjU4OCAyNy4zNzVzLTQuNjM4LTIuNjM4LTUuMzYzLTEuNTg4Yy0uNzI1IDEuMDUgMi43NjMgMS44MjUgMi43NjMgMS44MjVzLTIuODI1IDEuOTM4LTEuNTEzIDIuNjM4YzEuMzEzLjcgNC4xMTMtMi44NzUgNC4xMTMtMi44NzVaTTI1Ljg1IDIwczMuNzUtMi41IDIuMjg3LTMuNTEyYy0xLjExMi0uNzYzLTIuNSAxLjA4Ny0yLjUgMS4wODdzLS44MTItMi4xLTEuNzEyLTEuNGMtLjkuNyAxLjkyNSAzLjgyNSAxLjkyNSAzLjgyNVpNMjMuOTYzIDMwLjE3NXMtLjQzOCAyLjg1LTEuMjUgMy4xNWMtLjgxMy4zLS4yMTMtMi4wNzUtLjIxMy0yLjA3NXMtMi4wMjUuOTI1LTEuOTI1IDBjLjEtLjkyNSAzLjM4OC0xLjA3NSAzLjM4OC0xLjA3NVonXG4gICAgICAgICAgZmlsbD0nI0Y3RDQ3RCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdNMzMuMjg3IDI2Ljk1YTQuODg3IDQuODg3IDAgMCAwIC4xMjUtMy4zNSA2LjM2MiA2LjM2MiAwIDAgMC0xLjg4Ny0zLjA1Yy0xLjA2MyA0LjUzNyAxLjc2MiA2LjQgMS43NjIgNi40Wk0zMi43NSAyOS4xNWMtLjYyMi44MDQtMS4zNiAxLjUxMS0yLjE4OCAyLjEtLjg3NC41NTUtMS44MjYuOTc2LTIuODI1IDEuMjVhNi43MTMgNi43MTMgMCAwIDEgMi4xMTMtMi4xMzcgMTEuNTg4IDExLjU4OCAwIDAgMSAyLjktMS4yMTNaJ1xuICAgICAgICAgIGZpbGw9JyNEQ0IzQjQnXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5jb25zdCB0cmFuc2xhdGVDb25maWcgPSAoYXBwQ29uZmlnLCBsb2NhbGUpID0+IHtcbiAgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSBkZWZhdWx0TG9jYWxlKSB7XG4gICAgcmV0dXJuIGFwcENvbmZpZztcbiAgfVxuICAvLyBSZXBsYWNlIGNvbmZpZyB3aXRoIGxhbmdcbiAgY29uc3QgY29uZmlnTGFuZyA9IGFwcENvbmZpZy5sYW5nW2xvY2FsZV07XG4gIGlmIChjb25maWdMYW5nID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbG9jYWxlOiAnLCBsb2NhbGUpO1xuICB9XG4gIHJldHVybiB7IC4uLmFwcENvbmZpZywgLi4uY29uZmlnTGFuZyB9O1xufTtcblxuY29uc3QgU2hvd0ludml0ZSA9ICh7IGN1cnJlbnRVcmwsIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsIGd1ZXN0IH0pID0+IHtcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9uKGd1ZXN0LmxvY2FsZSk7XG5cbiAgLy8gSW5pdGlhdGUgY29uZmlnIHZhcmlhYmxlc1xuICBjb25zdCB7XG4gICAgbG9nbyxcbiAgICBvZ1RhZ3MsXG4gICAgY291cGxlSW5mbyxcbiAgICB2ZW51ZSxcbiAgICB3ZWRkaW5nRGF5LFxuICAgIHdlZGRpbmdEYXRlLFxuICAgIHdlZGRpbmdUaW1lLFxuICAgIGNhbGVuZGFySW5mbyxcbiAgfSA9IHRyYW5zbGF0ZUNvbmZpZyhhcHBDb25maWcsIGd1ZXN0LmxvY2FsZSk7XG4gIGNvbnN0IHsgYnJpZGVOYW1lLCBncm9vbU5hbWUsIGhhc2h0YWcsIGNvdXBsZU5hbWVGb3JtYXQgfSA9IGNvdXBsZUluZm87XG5cbiAgY29uc3QgY291cGxlTmFtZVN0ciA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJ1xuICAgICAgPyBgJHtncm9vbU5hbWV9ICYgJHticmlkZU5hbWV9YFxuICAgICAgOiBgJHticmlkZU5hbWV9ICYgJHtncm9vbU5hbWV9YDtcbiAgY29uc3QgY291cGxlTmFtZSA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJyA/IChcbiAgICAgIDw+XG4gICAgICAgIHticmlkZU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7Z3Jvb21OYW1lfVxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIDw+XG4gICAgICAgIHtncm9vbU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7YnJpZGVOYW1lfVxuICAgICAgPC8+XG4gICAgKTtcblxuICAvLyBWZW51ZSBpbmZvXG4gIGNvbnN0IHZlbnVlQnJpZWYgPSBgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWA7XG4gIGNvbnN0IHdlZGRpbmdEYXRlQnJpZWYgPSBgJHt3ZWRkaW5nRGF5fSwgJHt3ZWRkaW5nRGF0ZX1gO1xuXG4gIC8vIEV2ZW50IGluZm9cbiAgY29uc3QgZXZlbnRUaXRsZSA9IGAke2NvdXBsZU5hbWVTdHJ9J3MgV2VkZGluZ2A7XG4gIGxldCBldmVudERlc2NyaXB0aW9uID0gYCR7d2VkZGluZ0RhdGVCcmllZn0gYXQgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fWA7XG4gIGlmIChndWVzdC5uYW1lKSB7XG4gICAgZXZlbnREZXNjcmlwdGlvbiA9IGBEZWFyICR7Z3Vlc3QubmFtZX0sIHlvdSBhcmUgY29yZGlhbGx5IGludml0ZWQgdG8gb3VyIHdlZGRpbmcgb24gJHt3ZWRkaW5nRGF0ZX0gYXQgJHt2ZW51ZS5uYW1lfS4gTG9va2luZyBmb3J3YXJkIHRvIHNlZWluZyB5b3UhYDtcbiAgfVxuXG4gIC8vIENhbGVuZGFyIHBheWxvYWRcbiAgY29uc3QgY2FsZW5kYXJFdmVudCA9IHtcbiAgICB0aXRsZTogZXZlbnRUaXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZXZlbnREZXNjcmlwdGlvbixcbiAgICBsb2NhdGlvbjogYCR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gLFxuICAgIHN0YXJ0VGltZTogY2FsZW5kYXJJbmZvLnRpbWVTdGFydElTTyxcbiAgICBlbmRUaW1lOiBjYWxlbmRhckluZm8udGltZUVuZElTTyxcbiAgfTtcblxuICBjb25zdCBldmVudFNjaGVkdWxlID0gW1xuICAgIHtcbiAgICAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgICAgZXZlbnQ6ICdDaHVyY2gnLFxuICAgICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgICB0aW1lOiAnMTJwbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAgIGV2ZW50OiAnUmVjZXB0aW9uJyxcbiAgICAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgICAgdGltZTogJzJwbScsXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAvLyAgIGV2ZW50OiAnRW5nYWdlbWVudCcsXG4gICAgLy8gICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAvLyAgIHRpbWU6ICcycG0nLFxuICAgIC8vIH0sXG4gIF07XG5cbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgfSwgMTAwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYuY3VycmVudDtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRQb3NpdGlvbiA8IHdpbmRvd0hlaWdodCAqIDAuOSkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtZWxlbWVudCcpOyAvLyBBZGQgdGhlIENTUyBjbGFzcyB3aGVuIHRoZSBlbGVtZW50IGlzIDc1JSB2aXNpYmxlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZC1lbGVtZW50Jyk7IC8vIFJlbW92ZSB0aGUgQ1NTIGNsYXNzIGlmIG5vdCB2aXNpYmxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBSdW4gdGhpcyBlZmZlY3Qgb25seSBvbmNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYS5yZWFjdC1hZGQtdG8tY2FsZW5kYXJfX2J1dHRvbiBzcGFuIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZFxuICAgICAgICB7Li4ub2dUYWdzfVxuICAgICAgICB0aXRsZT17ZXZlbnRUaXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2V2ZW50RGVzY3JpcHRpb259XG4gICAgICAgIGd1ZXN0TmFtZT17Z3Vlc3QubmFtZX1cbiAgICAgICAgdXJsPXtjdXJyZW50VXJsfVxuICAgICAgICBkYXRlPXt3ZWRkaW5nRGF0ZUJyaWVmfVxuICAgICAgICBtb2RpZmllZFRpbWU9e2d1ZXN0TGlzdExhc3RVcGRhdGVkQXR9XG4gICAgICAgIHZlbnVlPXt2ZW51ZUJyaWVmfVxuICAgICAgICBsb2dvPXtyZXNvbHZlUGF0aChvZ1RhZ3MubG9nbyl9XG4gICAgICAgIGF1dGhvcj17cmVzb2x2ZVBhdGgoJy8nKX1cbiAgICAgIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hlYWRlcl9hcmVhJz5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2hlYWRlci1jb250YWluZXInPlxuICAgICAgICAgIDxIZWFkZXJMb2dvIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoZWFkZXItbG9nby10ZXh0Jz5UaGUgQWtpbmxhZ3VuJ3MgUGFydHk8L3NwYW4+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPSdob21lJyBjbGFzc05hbWU9J2hlYWRlcl9zbGlkZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay1saXN0IGRyYWdnYWJsZSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stdHJhY2snIHN0eWxlPXt7IG9wYWNpdHk6IDEgfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZ19jb3ZlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvcGljICg4KS5qcGcnXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGFsdD0nYmFja2dyb3VuZCBpbWFnZSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgY29udGVudC1vdmVybGF5Jz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMjQnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX2NvbnRlbnQgdGV4dC1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDYwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfc3ViX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC4ycycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3NpdGVJbnRybycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuN3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC43cycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdXBsZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNodGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5uYW1lfSwge3ZlbnVlLmNpdHl9LCB7dmVudWUuY291bnRyeX0uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29taW5nX3Nvb24nIGNsYXNzTmFtZT0nY29taW5nX3Nvb25fYXJlYSBwdC0yMCBwYi03MCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8xJyBzdHlsZT17eyB6SW5kZXg6IDEgfX0+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy00Jz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSBwdC01MCB3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3QoJ2V2ZW50RGF0ZScpfTo8L2gzPlxuICAgICAgICAgICAgICAgIDxwPnt3ZWRkaW5nRGF0ZUJyaWVmfTwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEFkZFRvQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e2NhbGVuZGFyRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkxhYmVsPXt0KCdidG5BZGRUb015Q2FsZW5kYXInKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy9pbWFnZXMvc2VjdGlvbl9zaGFwZS5wbmcnIGFsdD0nU2hhcGUnIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTgnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjZzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjZzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fY291bnQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgcHQtMjAnPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzYwLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTM4LFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVfY291bnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMwJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb3VudF9jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMSwgcGFkZGluZ1RvcDogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZlbnVlLm1hcFVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvYmV2ZW50LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdiZXZlbnQgY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3ZlbnVlLm1hcFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNzV2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmV5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLmFkZHJlc3NMaW5lMX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMic+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTIucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9J2NvbnRhY3QnIGNsYXNzTmFtZT0nY29udGFjdF9hcmVhJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjb250YWN0X3dyYXBwZXIgd293IGZhZGVJblVwQmlnJ1xuICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDMwLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNHMnLFxuICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluVXAnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudFJlZn0gY2xhc3NOYW1lPSdjb250YWluZXItZXZlbnRMaW5ldXAnPlxuICAgICAgICAgICAgICB7ZXZlbnRTY2hlZHVsZS5tYXAoKGV2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGltZSwgZGF0ZSwgZXZlbnQsIGljb24gfSA9IGV2O1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnRMaW5ldXAnIGtleT17ZXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGZvcm0gKi99XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgdGV4dC1jZW50ZXIgcGItMzAnPlxuICAgICAgICAgICAgICAgICAge2d1ZXN0Lm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25HcmVldGluZycpfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJyB9fT57Z3Vlc3QubmFtZX0sPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhZGVJbic+XG4gICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbG9ycyBvZiB0aGUgZGF5XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgZ2FwOiAnNTBweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUZWFsIEdyZWVuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzgwcHgnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDgwODAnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEdvbGRcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Q1OWE1NycsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvblxuICAgICAgICByZWY9e2VsZW1lbnRSZWZ9XG4gICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgY2xhc3NOYW1lPSdsb3ZlLXRpdGxlLWNvbnRhaW5lciBmYWRlSW5VcEJpZyBmYWRlSW4nXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TG92ZVRpdGxlSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvdmUtdGl0bGUnPlxuICAgICAgICAgIE15IGhlYXJ0IGlzIHlvdXJzIHRvIGhvbGQgYW5kIGNoZXJpc2ggZm9yIHRoZSByZXN0IG9mIG91ciBkYXlzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxhcnRpY2xlXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J3N0b3JpZXMtY29udGFpbmVyIGZhZGVJblVwQmlnJ1xuICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICA+XG4gICAgICAgIDxTdG9yaWVzIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZC1jb250YWluZXInPlxuICAgICAgICA8UGljdHVyZXNHcmlkIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgJz5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDVcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6ICcjRDNEM0QzJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgI0RXZWRkaW5nXG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgIC8+XG4gICAgICA8Q2FzaEdpZnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNob3dJbnZpdGUuZ2V0SW5pdGlhbFByb3BzID0gKGN0eCkgPT4ge1xuICBjb25zdCBsb2NhbGVQYXJhbXMgPSBjdHgucXVlcnkubGFuZyB8fCBkZWZhdWx0TG9jYWxlO1xuICBjb25zdCBlbXB0eUd1ZXN0UGFyYW1zID0ge1xuICAgIGd1ZXN0OiB7XG4gICAgICBndWVzdElkOiAnJyxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZ3JlZXRpbmc6ICcnLFxuICAgICAgbG9jYWxlOiBsb2NhbGVQYXJhbXMsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBjdXJyZW50VXJsID0gcmVzb2x2ZVBhdGgoY3R4LnJlcS51cmwpO1xuICBjb25zdCBndWVzdElkID0gY3R4LnF1ZXJ5LnU7XG4gIGlmICghZ3Vlc3RJZCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgLi4uZW1wdHlHdWVzdFBhcmFtcyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgZ3Vlc3REYXRhID0gZ3Vlc3RMaXN0LmRhdGE7XG4gIGNvbnN0IGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQgPSBndWVzdExpc3QubWV0YS5sYXN0VXBkYXRlZEF0O1xuICBjb25zdCB7IG5hbWUsIGdyZWV0aW5nLCBsb2NhbGUgfSA9XG4gICAgZ3Vlc3REYXRhLmZpbHRlcigoZ3Vlc3QpID0+IGd1ZXN0Lmd1ZXN0SWQgPT09IGd1ZXN0SWQpWzBdIHx8IHt9O1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3VycmVudFVybCxcbiAgICBndWVzdExpc3RMYXN0VXBkYXRlZEF0LFxuICAgIGd1ZXN0OiB7XG4gICAgICBuYW1lLFxuICAgICAgZ3JlZXRpbmcsXG4gICAgICBndWVzdElkLFxuICAgICAgbG9jYWxlOiBsb2NhbGUgfHwgbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93SW52aXRlO1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\USER\\\\Documents\\\\adewale-wedding-invite\\\\pages\\\\index.jsx */"), __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ogTags, {
    title: eventTitle,
    description: eventDescription,
    guestName: guest.name,
    url: currentUrl,
    date: weddingDateBrief,
    modifiedTime: guestListLastUpdatedAt,
    venue: venueBrief,
    logo: Object(_src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_8__["default"])(ogTags.logo),
    author: Object(_src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_8__["default"])('/'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }
  })), __jsx("section", {
    className: "jsx-1703421768" + " " + 'header_area',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: "jsx-1703421768" + " " + 'header-container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }
  }, __jsx(HeaderLogo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "jsx-1703421768" + " " + 'header-logo-text',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 11
    }
  }, "The Akinlagun's Party")), __jsx("div", {
    id: "home",
    className: "jsx-1703421768" + " " + 'header_slider',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'slick-list draggable',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      opacity: 1
    },
    className: "jsx-1703421768" + " " + 'slick-track',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'bg_cover d-flex align-items-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "assets/images/pic (8).jpg",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    alt: "background image",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1703421768" + " " + ' content-overlay',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-24',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      paddingTop: 0
    },
    className: "jsx-1703421768" + " " + 'slider_content text-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      maxHeight: 60,
      margin: 25,
      marginTop: 0
    },
    src: logo.headerLogo,
    alt: "logo",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 25
    }
  }), __jsx("h5", {
    "data-animation": "fadeInUp",
    "data-delay": "0.2s",
    style: {
      animationDelay: '0.2s'
    },
    className: "jsx-1703421768" + " " + 'slider_sub_title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 25
    }
  }, t('siteIntro')), __jsx("h2", {
    "data-animation": "fadeInUp",
    "data-delay": "0.7s",
    style: {
      animationDelay: '0.7s'
    },
    className: "jsx-1703421768" + " " + 'slider_title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 25
    }
  }, coupleName), __jsx("h5", {
    "data-animation": "fadeInUp",
    "data-delay": "1s",
    style: {
      animationDelay: '1s'
    },
    className: "jsx-1703421768" + " " + 'location',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 25
    }
  }, hashtag), __jsx("span", {
    "data-animation": "fadeInUp",
    "data-delay": "1s",
    style: {
      animationDelay: '1s'
    },
    className: "jsx-1703421768" + " " + 'location',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 25
    }
  }, venue.name, ", ", venue.city, ", ", venue.country, ".")))))))))), __jsx("section", {
    id: "coming_soon",
    className: "jsx-1703421768" + " " + 'coming_soon_area pt-20 pb-70',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      zIndex: 1
    },
    className: "jsx-1703421768" + " " + 'coming_soon_shape_1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row align-items-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-4',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }
  }, __jsx("div", {
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.2s",
    style: {
      visibility: 'visible',
      animationDuration: '1.3s',
      animationDelay: '0.2s',
      animationName: 'fadeIn'
    },
    className: "jsx-1703421768" + " " + 'section_title pt-50 wow fadeIn',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 17
    }
  }, t('eventDate'), ":"), __jsx("p", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 17
    }
  }, weddingDateBrief), __jsx("div", {
    style: {
      paddingTop: '0.2rem',
      paddingBottom: '0.2rem'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 17
    }
  }, __jsx(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    event: calendarEvent,
    buttonLabel: t('btnAddToMyCalendar'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 19
    }
  })), __jsx("img", {
    src: "assets/images/section_shape.png",
    alt: "Shape",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-8',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 13
    }
  }, __jsx("div", {
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.6s",
    style: {
      visibility: 'visible',
      animationDuration: '1.3s',
      animationDelay: '0.6s',
      animationName: 'fadeIn'
    },
    className: "jsx-1703421768" + " " + 'wow fadeIn',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_count d-flex justify-content-end pt-20',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      marginRight: 20,
      width: 360,
      height: 138,
      backgroundColor: 'transparent'
    },
    className: "jsx-1703421768" + " " + 'single_count d-flex align-items-center justify-content-center mt-30',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 19
    }
  }, __jsx("div", {
    style: {
      zIndex: 1,
      paddingTop: 20
    },
    className: "jsx-1703421768" + " " + 'count_content',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: venue.mapUrl,
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      borderRadius: 5
    },
    src: "assets/images/bevent.png",
    alt: "bevent center",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 25
    }
  })), __jsx("a", {
    href: venue.mapUrl,
    style: {
      maxWidth: '75vw',
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
      marginTop: 10,
      color: 'grey'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 23
    }
  }, venue.addressLine1)))))))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_shape_2',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-2.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 11
    }
  }))), __jsx("section", {
    id: "contact",
    className: "jsx-1703421768" + " " + 'contact_area',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 9
    }
  }, __jsx("div", {
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.4s",
    style: {
      paddingBottom: 30,
      boxShadow: 'none',
      visibility: 'visible',
      animationDuration: '1.3s',
      animationDelay: '0.4s',
      animationName: 'fadeInUp'
    },
    className: "jsx-1703421768" + " " + 'contact_wrapper wow fadeInUpBig',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 11
    }
  }, __jsx("div", {
    ref: elementRef,
    className: "jsx-1703421768" + " " + 'container-eventLineup',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 13
    }
  }, eventSchedule.map(function (ev, index) {
    var time = ev.time,
      date = ev.date,
      event = ev.event,
      icon = ev.icon;
    return __jsx("div", {
      key: event,
      className: "jsx-1703421768" + " " + 'eventLineup',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 19
      }
    }, icon, __jsx("span", {
      style: {
        fontSize: '24px',
        color: 'black',
        fontWeight: 700
      },
      className: "jsx-1703421768",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 21
      }
    }, event), __jsx("span", {
      style: {
        fontWeight: 600,
        fontSize: '18px',
        color: 'black'
      },
      className: "jsx-1703421768",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 21
      }
    }, date), __jsx("span", {
      style: {
        fontWeight: 600,
        fontSize: '18px',
        color: 'black'
      },
      className: "jsx-1703421768",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 21
      }
    }, time));
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-9',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'section_title text-center pb-30',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 17
    }
  }, guest.name && __jsx("div", {
    style: {
      textAlign: 'center',
      maxWidth: 400,
      margin: 'auto',
      paddingBottom: 20
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 21
    }
  }, t('invitationGreeting'), __jsx("p", {
    style: {
      fontSize: '1.5rem'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 23
    }
  }, guest.name, ",")))))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'fadeIn',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 11
    }
  }, __jsx("h4", {
    style: {
      textAlign: 'center',
      marginBottom: '5px'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 13
    }
  }, "Colors of the day"), __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '50px'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      color: 'black',
      textAlign: 'center'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 17
    }
  }, "Teal Green"), __jsx("div", {
    style: {
      height: '30px',
      width: '80px',
      borderRadius: '10px',
      color: 'black',
      backgroundColor: '#008080'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      color: 'black',
      textAlign: 'center'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 17
    }
  }, "Gold"), __jsx("div", {
    style: {
      height: '30px',
      width: '80px',
      borderRadius: '10px',
      color: 'black',
      backgroundColor: '#d59a57'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 17
    }
  })))))), __jsx("section", {
    ref: elementRef,
    "data-animation": "fadeInUp",
    "data-delay": "0.7s",
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.4s",
    className: "jsx-1703421768" + " " + 'love-title-container fadeInUpBig fadeIn',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 9
    }
  }, __jsx(LoveTitleIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'love-title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 9
    }
  }, "My heart is yours to hold and cherish for the rest of our days.")), __jsx("article", {
    ref: elementRef,
    "data-animation": "fadeInUp",
    "data-delay": "0.7s",
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.4s",
    className: "jsx-1703421768" + " " + 'stories-container fadeInUpBig',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 7
    }
  }, __jsx(_stories__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 9
    }
  })), __jsx("article", {
    className: "jsx-1703421768" + " " + 'picture-grid-container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 7
    }
  }, __jsx(_pictureGrid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 9
    }
  })), __jsx("footer", {
    id: "footer",
    className: "jsx-1703421768" + " " + 'footer_area',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_shape_1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_widget pt-50 pb-10 text-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_logo',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: {
      maxHeight: 90,
      margin: 25,
      marginTop: 0
    },
    src: logo.headerLogo,
    alt: "logo",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_title ',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 13
    }
  }, __jsx("h3", {
    style: {
      color: 'white'
    },
    className: "jsx-1703421768" + " " + 'title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 15
    }
  }, coupleName)))), __jsx("h5", {
    style: {
      color: '#D3D3D3',
      textAlign: 'center',
      marginBottom: '40px'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 9
    }
  }, "#DWedding")), __jsx(_collect_guest_attendance__WEBPACK_IMPORTED_MODULE_15__["default"], {
    showModal: showModal,
    setShowModal: setShowModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 7
    }
  }), __jsx(_cashGift__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 7
    }
  }));
};
_s(ShowInvite, "IgBZo7Z24RPtXCyTqz8i2fJTWVk=", false, function () {
  return [_src_i18n__WEBPACK_IMPORTED_MODULE_10__["useTranslation"]];
});
_c4 = ShowInvite;
ShowInvite.getInitialProps = function (ctx) {
  var localeParams = ctx.query.lang || _src_i18n__WEBPACK_IMPORTED_MODULE_10__["defaultLocale"];
  var emptyGuestParams = {
    guest: {
      guestId: '',
      name: '',
      greeting: '',
      locale: localeParams
    }
  };
  var currentUrl = Object(_src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_8__["default"])(ctx.req.url);
  var guestId = ctx.query.u;
  if (!guestId) {
    return _objectSpread({
      currentUrl: currentUrl
    }, emptyGuestParams);
  }
  var guestData = _guest_list_json__WEBPACK_IMPORTED_MODULE_11__.data;
  var guestListLastUpdatedAt = _guest_list_json__WEBPACK_IMPORTED_MODULE_11__.meta.lastUpdatedAt;
  var _ref2 = guestData.filter(function (guest) {
      return guest.guestId === guestId;
    })[0] || {},
    name = _ref2.name,
    greeting = _ref2.greeting,
    locale = _ref2.locale;
  if (!name) {
    return _objectSpread({
      currentUrl: currentUrl
    }, emptyGuestParams);
  }
  return {
    currentUrl: currentUrl,
    guestListLastUpdatedAt: guestListLastUpdatedAt,
    guest: {
      name: name,
      greeting: greeting,
      guestId: guestId,
      locale: locale || localeParams
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (ShowInvite);
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "LoveTitleIcon");
$RefreshReg$(_c2, "EventDateIcon");
$RefreshReg$(_c3, "HeaderLogo");
$RefreshReg$(_c4, "ShowInvite");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzaEdpZnQuanN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsiQ2FzaEdpZnQiLCJfX2pzeCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYyIsIiRSZWZyZXNoUmVnJCIsIkxvdmVUaXRsZUljb24iLCJzcmMiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiRXZlbnREYXRlSWNvbiIsImZpbGwiLCJ4bWxucyIsImQiLCJfYzIiLCJIZWFkZXJMb2dvIiwiZGlzcGxheSIsImJhY2tmYWNlVmlzaWJpbGl0eSIsInRyYW5zZm9ybSIsIl9jMyIsInRyYW5zbGF0ZUNvbmZpZyIsImFwcENvbmZpZyIsImxvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjb25maWdMYW5nIiwibGFuZyIsInVuZGVmaW5lZCIsIkVycm9yIiwiX29iamVjdFNwcmVhZCIsIlNob3dJbnZpdGUiLCJfcmVmIiwiX3MiLCJjdXJyZW50VXJsIiwiZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCIsImd1ZXN0IiwidCIsInVzZVRyYW5zbGF0aW9uIiwiX3RyYW5zbGF0ZUNvbmZpZyIsImxvZ28iLCJvZ1RhZ3MiLCJjb3VwbGVJbmZvIiwidmVudWUiLCJ3ZWRkaW5nRGF5Iiwid2VkZGluZ0RhdGUiLCJ3ZWRkaW5nVGltZSIsImNhbGVuZGFySW5mbyIsImJyaWRlTmFtZSIsImdyb29tTmFtZSIsImhhc2h0YWciLCJjb3VwbGVOYW1lRm9ybWF0IiwiY291cGxlTmFtZVN0ciIsImNvbmNhdCIsImNvdXBsZU5hbWUiLCJSZWFjdCIsIkZyYWdtZW50IiwidmVudWVCcmllZiIsIm5hbWUiLCJjaXR5IiwiY291bnRyeSIsIndlZGRpbmdEYXRlQnJpZWYiLCJldmVudFRpdGxlIiwiZXZlbnREZXNjcmlwdGlvbiIsImNhbGVuZGFyRXZlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJzdGFydFRpbWUiLCJ0aW1lU3RhcnRJU08iLCJlbmRUaW1lIiwidGltZUVuZElTTyIsImV2ZW50U2NoZWR1bGUiLCJpY29uIiwiZXZlbnQiLCJkYXRlIiwidGltZSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXNlRWZmZWN0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZWxlbWVudFJlZiIsInVzZVJlZiIsImhhbmRsZVNjcm9sbCIsImVsZW1lbnQiLCJjdXJyZW50IiwiZWxlbWVudFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZSIsIl9KU1hTdHlsZSIsImlkIiwiSGVhZCIsIl9leHRlbmRzIiwiZ3Vlc3ROYW1lIiwidXJsIiwibW9kaWZpZWRUaW1lIiwicmVzb2x2ZVBhdGgiLCJhdXRob3IiLCJvcGFjaXR5Iiwib2JqZWN0Rml0IiwicGFkZGluZ1RvcCIsIm1heEhlaWdodCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImhlYWRlckxvZ28iLCJhbmltYXRpb25EZWxheSIsInpJbmRleCIsInZpc2liaWxpdHkiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJwYWRkaW5nQm90dG9tIiwiQWRkVG9DYWxlbmRhciIsImJ1dHRvbkxhYmVsIiwibWFyZ2luUmlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJocmVmIiwibWFwVXJsIiwiYm9yZGVyUmFkaXVzIiwibWF4V2lkdGgiLCJvdmVyZmxvd1giLCJ0ZXh0T3ZlcmZsb3ciLCJjb2xvciIsImFkZHJlc3NMaW5lMSIsImJveFNoYWRvdyIsInJlZiIsIm1hcCIsImV2IiwiaW5kZXgiLCJrZXkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJnYXAiLCJTdG9yaWVzIiwiUGljdHVyZXNHcmlkIiwiQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSIsIl9jNCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImxvY2FsZVBhcmFtcyIsInF1ZXJ5IiwiZW1wdHlHdWVzdFBhcmFtcyIsImd1ZXN0SWQiLCJncmVldGluZyIsInJlcSIsInUiLCJndWVzdERhdGEiLCJndWVzdExpc3QiLCJkYXRhIiwibWV0YSIsImxhc3RVcGRhdGVkQXQiLCJfcmVmMiIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBQ3JCLE9BQU9DLEtBQUE7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBSyxVQUFhLENBQUM7QUFDNUIsQ0FBQztBQUFDQyxFQUFBLEdBRklULFFBQVE7QUFJQ0EsdUVBQVEsRUFBQztBQUFBLElBQUFTLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDaEI7QUFDVDtBQUVkO0FBQ087QUFDRjtBQUNzQjtBQUN0QjtBQUNvQztBQUNyQjtBQUNqQjtBQUNLO0FBQ1U7QUFDbUM7QUFDakQ7QUFFZixJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUEsRUFBUztFQUMxQixPQUNFVixLQUFBO0lBQ0VXLEdBQUcsRUFBQyx3QkFBd0I7SUFDNUJDLEtB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cUcsUUFBUSxHQUFBUSxLQUFBLENBQVJSLFFBQVE7SUFBRXZJLE1BQU0sR0FBQStJLEtBQUEsQ0FBTi9JLE1BQU07RUFFOUIsSUFBSSxDQUFDa0MsSUFBSSxFQUFFO0lBQ1QsT0FBQTVCLGFBQUE7TUFDRUksVUFBVSxFQUFWQTtJQUFVLEdBQ1AySCxnQkFBZ0I7RUFFdkI7RUFFQSxPQUFPO0lBQ0wzSCxVQUFVLEVBQVZBLFVBQVU7SUFDVkMsc0JBQXNCLEVBQXRCQSxzQkFBc0I7SUFDdEJDLEtBQUssRUFBRTtNQUNMc0IsSUFBSSxFQUFKQSxJQUFJO01BQ0pxRyxRQUFRLEVBQVJBLFFBQVE7TUFDUkQsT0FBTyxFQUFQQSxPQUFPO01BQ1B0SSxNQUFNLEVBQUVBLE1BQU0sSUFBSW1JO0lBQ3BCO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFFYzVILHlFQUFVLEVBQUM7QUFBQSxJQUFBM0IsRUFBQSxFQUFBWSxHQUFBLEVBQUFLLEdBQUEsRUFBQW1JLEdBQUE7QUFBQW5KLFlBQUEsQ0FBQUQsRUFBQTtBQUFBQyxZQUFBLENBQUFXLEdBQUE7QUFBQVgsWUFBQSxDQUFBZ0IsR0FBQTtBQUFBaEIsWUFBQSxDQUFBbUosR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZGEwNTE1OWU0Mjg2YjA0MWMwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENhc2hHaWZ0ID0gKCkgPT4ge1xyXG4gIHJldHVybiA8ZGl2PkNhc2hHaWZ0PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FzaEdpZnQ7XHJcbiIsImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IFN0b3JpZXMgZnJvbSAnLi9zdG9yaWVzJztcbmltcG9ydCBQaWN0dXJlc0dyaWQgZnJvbSAnLi9waWN0dXJlR3JpZCc7XG5pbXBvcnQgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSBmcm9tICcuL2NvbGxlY3QtZ3Vlc3QtYXR0ZW5kYW5jZSc7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XG5pbXBvcnQgQ2FzaEdpZnQgZnJvbSAnLi9jYXNoR2lmdCc7XG5cbmNvbnN0IExvdmVUaXRsZUljb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgc3JjPSdhc3NldHMvaW1hZ2VzL3dpbmUucG5nJ1xuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnODBweCcsXG4gICAgICB9fVxuICAgICAgYWx0PSd3aW5lIGlsbHVzdHJhdG9yJ1xuICAgIC8+XG4gICk7XG59O1xuY29uc3QgRXZlbnREYXRlSWNvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPSczNScgaGVpZ2h0PSc3OCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00yMC4zNTUgMTIuMDgzYy0xLjY0My0xLjYyLTIuMTU2LTQuNzcuNDEtNS44MyAxLjE4Ny0uNDkgMi42OC0uMzY1IDMuOTI4LS4yMjcgMS4yODYuMTQzIDIuNTUyLjQxNyAzLjc3Ljg1NiAyLjE3My43ODUgNS4xODQgMi4xNjQgNi4wMjcgNC41MS45OTMgMi43NjItMS45NjggNC4xMDctNC4xNTUgNC40NzQtMi43NzUuNDY1LTUuNzA2LjQxNy04LjUxMy4zMzgtMi42OTQtLjA3Ni01LjQ1NC0uMzc1LTcuOTgtMS4zNjYtMi4yNy0uODkyLTQuNTktMi4zMzMtNS43MjMtNC41OC0xLjA0My0yLjA2Ni0uODM2LTQuNTQxLjQ3NS02LjQ0NEMxMC40IDEuMTkzIDEzLjQyMi42OSAxNi4zODEuMzM3QTQ5LjQ2MiA0OS40NjIgMCAwIDEgMjcuMzA3LjI3YzEuMi4xMjMgMS4yMTIgMi4wMTcgMCAxLjg5M2E0OS44NzcgNDkuODc3IDAgMCAwLTcuNDEyLS4yMjNjLTIuMjY1LjEwNS00LjY3MS4yNC02Ljg1LjkwMi0xLjgwNy41NDktMy4yMzIgMS44ODItMy42MjcgMy43Ny0uNDE0IDEuOTc4LjcwOCAzLjczMiAyLjIzIDQuOTAzIDMuMjUgMi41IDcuNjcyIDIuODExIDExLjYxNSAyLjgxNyAyLjIyNS4wMDQgNC41NS4wNzQgNi43NDUtLjMyLjgwNC0uMTQ0IDEuODk1LS4zMiAyLjQ4NC0uOTU3LjgxNC0uODgtLjMyLTEuOTM4LTEuMDEtMi40NjctMS44My0xLjQwNi00LjE0NC0yLjI4My02LjQxNi0yLjYxOS0uOTc5LS4xNDUtMi41NzktLjQxMy0zLjUyIDAtMS4yOTQuNTctLjU3NiAyLjA2My4xNDcgMi43NzcuODcuODU2LS40NyAyLjE5NC0xLjMzOCAxLjMzOFonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTM0LjAyMyAxMy43MjdjLTEuNDk0IDUuNDUtMy4xNTggMTAuOTMzLTcuMDk5IDE1LjE1N2EyMi4zOSAyMi4zOSAwIDAgMS02LjAzIDQuNTgxYy0yLjMyMyAxLjIwNS01LjEzIDIuMzg1LTcuNzgxIDEuODI4LTEuMTktLjI1LS42ODctMi4wNzUuNTAzLTEuODI1IDIuMjkyLjQ4IDUuMDItLjg4OCA2Ljk3LTEuOTg2YTIwLjgwOCAyMC44MDggMCAwIDAgNS4zOTYtNC4zNzNjMy40NDYtMy45MDQgNC44NjktOC45NyA2LjIxNi0xMy44ODQuMzItMS4xNzQgMi4xNDctLjY3NiAxLjgyNS41MDJaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J005LjAyOCA3LjkyM2MtMS4yNjYgOC4zNDQtMi41OSAxOC4zNyAzLjcyMiAyNS4xMzMuODMuODktLjUwNSAyLjIzMS0xLjMzOCAxLjMzOS02Ljg0LTcuMzMxLTUuNTg3LTE3Ljg5My00LjIxLTI2Ljk3NC4xODMtMS4yIDIuMDA2LS42OSAxLjgyNi41MDJaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00xNC44NzcgMzQuMzQzYy0xLjkxOCAxNC4wNzQtMS4zNDkgMjguNDYgMS42MzYgNDIuMzQ0LjI1NSAxLjE4Ny0xLjU2OSAxLjY5NS0xLjgyNS41MDNhMTI1LjY1NCAxMjUuNjU0IDAgMCAxLTEuNjM2LTQzLjM1Yy4xNjQtMS4yMDIgMS45ODgtLjY5IDEuODI1LjUwM1onXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTEwLjM0IDYwLjg5MWMtLjQxNi00LjY1Ni0zLjg0NS04Ljg2LTguMjktMTAuMjYtMS4xNTgtLjM2NS0uNjY0LTIuMTkzLjUwMi0xLjgyNSA1LjMwMSAxLjY3IDkuMTg2IDYuNTYyIDkuNjggMTIuMDg1LjEwOCAxLjIxMi0xLjc4NSAxLjIwNS0xLjg5MyAwWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMy4xOTcgNDkuOTJjLS43MyAxLjM4Ni0uOTIgMi45MzctLjk2IDQuNDg0LS4wMzcgMS40NzYtLjI1OSAzLjI0Ni43MzkgNC40Ni45MiAxLjEyIDIuMjcxIDEuOTU2IDMuNTMgMi42NDNhMTcuNTk1IDE3LjU5NSAwIDAgMCA0LjQwMiAxLjY2MmMxLjE4NC4yOC42ODMgMi4xMDUtLjUwMyAxLjgyNWExOS4zNyAxOS4zNyAwIDAgMS01LjA3LTEuOTc0Yy0xLjUxNS0uODU1LTMuMTA2LTEuOTIyLTQuMTItMy4zNjJDLjE1MyA1OC4xNS4zIDU2LjE2My4zNDUgNTQuNDA0Yy4wNDktMS44OS4zMjctMy43NSAxLjIxNy01LjQ0LjU2OS0xLjA3NyAyLjIwMi0uMTIyIDEuNjM1Ljk1NlonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTcuOTE5IDU4LjAyNmMxLjM2IDEuNzIgMi43MjMgMy40NCA0LjA4NCA1LjE2LjMwNi4zODguNDA2Ljk2NSAwIDEuMzM5LS4zNDIuMzEzLTEuMDEuNDE0LTEuMzM4IDBMNi41OCA1OS4zNjNjLS4zMDYtLjM4Ny0uNDA2LS45NjUgMC0xLjMzNy4zNDItLjMxNCAxLjAxLS40MTUgMS4zMzkgMFpNMTIuNjI5IDUxLjg4NGEyOC4wOCAyOC4wOCAwIDAgMSAxNy40MTgtNi42MjhjMS4yMTktLjAzIDEuMjE4IDEuODYzIDAgMS44OTItNS44NjMuMTQtMTEuNTk0IDIuMjg4LTE2LjA4IDYuMDc0LS45MjYuNzgyLTIuMjctLjU1LTEuMzM4LTEuMzM4WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMzIuMjY3IDQ2LjY3M2MtMS4yMSA0LjIzNC00LjA3MiA4LjE0Mi04LjA1NCAxMC4xNS0zLjc4MyAxLjkwNi04LjYyMyAxLjc1My0xMS42NDktMS40OC0uODMxLS44ODkuNTA0LTIuMjMgMS4zMzgtMS4zMzggMi42IDIuNzc2IDYuNzM1IDIuNjc2IDkuODcyLjkwNyAzLjI5Ny0xLjg1NyA1LjYzOC01LjEzOCA2LjY2OS04Ljc0Mi4zMzQtMS4xNjkgMi4xNi0uNjcyIDEuODI0LjUwM1onXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTE0LjM1IDUzLjEzOGE0MC43MDcgNDAuNzA3IDAgMCAxIDUuOTEyLTEuNTMzYy40ODUtLjA4NyAxLjA0My4xMzIgMS4xNjMuNjYxLjEwNS40NjMtLjE0IDEuMDctLjY2IDEuMTY1YTQwLjYxNiA0MC42MTYgMCAwIDAtNS45MTMgMS41MzNjLS40NjguMTYtMS4wNTQtLjE4NC0xLjE2My0uNjYxLS4xMi0uNTI2LjE1OC0uOTkzLjY2LTEuMTY1WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5jb25zdCBIZWFkZXJMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lQmxvY2snLFxuICAgICAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAwcHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxKScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxzdmcgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyBmaWxsPSdub25lJz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdtMzQuNjEzIDI3LjczNyAxLjQzNy4wODhhNi4xMTEgNi4xMTEgMCAwIDEgMS45MjUuMmMuMzUuMi41MzguNDc1LjEuNzYyLS40MzcuMjg4LTEuMSAwLTEuNSAwLS40IDAtLjkyNS0uMS0xLjQtLjEyNWEzLjI5NiAzLjI5NiAwIDAgMC0xLjA1IDBjLS4zNS4xMTMtLjI4Ny4yMTMtLjQ4Ny42MTNhNy41NzcgNy41NzcgMCAwIDEtMS43NjMgMi4xNWMtMS40NjIgMS4yNS0zLjQ1IDEuMzM3LTUuMTYyIDIuMDg3LjQ1LTIuOTYyIDIuNzI1LTQuNDM3IDUuNDc1LTUtLjk3NSAwLTIuNjc1LS44NzUtMy41MTMtLjQ2Mi0xLjQ4Ny42MzctMy43NSAxLjUtNC4yMTIgMy4yNS0uMjM4IDEuMDYyLS4xODggMi42MzctMS41MzggMi45NjItMS4zNS4zMjUtMS43MjUtLjk2Mi0xLjQtMS45NzUtLjg3NS40NS0yLjA1LjA4OC0xLjg2Mi0xLjA1LjE4Ny0xLjEzNyAxLjUyNS0xLjI1IDIuMzg3LTEuMzYyIDIuMjEzLS4zNSAzLjktMS42MjUgNS45ODgtMi4yODhhMjUuODQ1IDI1Ljg0NSAwIDAgMC0yLjUtMS4wMjUgNi44MzcgNi44MzcgMCAwIDAtMi42LjQ4OGMtLjkyLjExNC0xLjgyOC4zMS0yLjcxMy41ODctLjY0LjM0LTEuMTkuODI4LTEuNiAxLjQyNS0uOTg3IDEuMTYzLTIuMiAyLjUtMy45IDIuMzc1LTIuMTUtLjItMS45MTItMi42NS0uMzI1LTMuNDg3LTEuMDI1IDAtMi41LS42MzgtMi40LTEuODc1LjA4OC0xLjU1IDEuOTYzLTEuNzM4IDMuMTI1LTEuNDI1IDEuMDk3LjQxOSAyLjE2Ni45MDcgMy4yIDEuNDYyIDEuOTM4Ljc4OCAzLjc1IDAgNS43NjMtLjJhMzcuOTk0IDM3Ljk5NCAwIDAgMS00LjY1LTIuNjc1IDIuMTg3IDIuMTg3IDAgMCAwLTEuMzc1LS41NWgtMS4yNWEyNy42NzEgMjcuNjcxIDAgMCAwLTMuMzc1LjFjLS43NzUgMC0xLjMyNS43MzgtMS44MzggMS4yNWE2LjEzOCA2LjEzOCAwIDAgMS0yLjUgMS43MTMgMS45ODcgMS45ODcgMCAwIDEtMi41LS42MjVBMi4wNzUgMi4wNzUgMCAwIDEgNy43MTMgMjIuNGMtLjk3NS0uMzI1LTIuMjg4LTEuMTEzLTEuNDI1LTIuMyAxLjAxMi0xLjM4OCAyLjg3NS0uNjUgMy45MzcuMTVhNS44NzUgNS44NzUgMCAwIDAgMi45MzggMS42YzEuNDgyLjA4NyAyLjk2OC4wODcgNC40NSAwYTIzLjc0IDIzLjc0IDAgMCAxLTIuMDM4LTIuMDEzIDUuNzg3IDUuNzg3IDAgMCAwLS44NjItLjk2MmMtLjg1Mi0uMzgtMS43NTItLjY0MS0yLjY3NS0uNzc1YTE0LjUyMiAxNC41MjIgMCAwIDAtMi43NS0uNzc1IDUuNjExIDUuNjExIDAgMCAwLTIuNjg4LjYyNSA2LjI1MSA2LjI1MSAwIDAgMS0zLjEzNy41MjUgMS45NSAxLjk1IDAgMCAxLTEuNjc1LTIuMDYzYy4xMjUtMS4wMzcuOTg3LTEuMzg3IDEuODc1LTEuNTUtMi4wMjUtMS44ODcuNzc1LTMuNjg3IDIuNS0yLjAxMiAxLjAyNSAxLjAxMiAxLjYzNyAyLjkxMiAyLjkxMiAzLjQyNSAxLjYxMy42NSAzLjM3NS44ODcgNSAxLjYzNy0uOTM3LTEuMjUtMS44NS0yLjUtMi43MjUtMy43NWE2Ljg3NSA2Ljg3NSAwIDAgMC0yLjc3NS0yLjk3NWMtMS40ODctLjY3NS0zLjQ1LTEuNDg3LTMuNzUtMy4zNS0uMzUtMi4yODcgMi4yMzgtMS45IDMuNDUtLjk1YTIuMTYzIDIuMTYzIDAgMCAxIDEuNC0yLjVjMS4yNS0uNDg3IDIuMDEzLjQ2MyAyLjE3NSAxLjY3NS4wMjUgMS40MzgtLjYgMi44MjUtLjgyNSA0LjMyNS0uMjYyIDIuMjEzIDIuMTUgNC44NzUgMy4zNjMgNi42IDAtMS44NS43LTQuMDYyLS4yNjMtNS43ODctLjYyNS0xLjQyNS0yLjYxMi0zLjgyNS0xLjI1LTUuNDI1IDEtMS4xMzggMi4yMzguMTI1IDIuNTc1IDEuMTVhMS40NjIgMS40NjIgMCAwIDEgMi41LS4yNjNjMS4yNSAxLjcyNS0uNzUgMy4yMzgtMS42NjIgNC41MTMtMS4xIDEuNTEyLS45IDIuOTUtMS4wMzggNC43MzdhNi41OTcgNi41OTcgMCAwIDAtLjE2MiAyLjAyNWMuMTM3LjQxMy44MTIuODg4IDEuMTEyIDEuMjVhMjYuOTMgMjYuOTMgMCAwIDAgMi41NjMgMi4zNjNjLS4xLTIuMS4yMTItNC4yNzUtLjUxMy02LjI1LS40MjUtMS4xNS0xLjQtMy4xNS0uNS00LjI4OC45LTEuMTM3IDEuOS0uMTM3IDIuMjUuODEzYTIuMDI1IDIuMDI1IDAgMCAxIDIuNS0uNjUgMS45NSAxLjk1IDAgMCAxIC40MjUgMi41Yy0uODUgMS44MTItMy4yODcgMi43NjItMy4yODcgNC44MjUtLjEyNS45NS0uMDYzIDEuOTg3LS4xIDIuOTVhMi4wMjMgMi4wMjMgMCAwIDAgMCAuNjc1Yy4xMzcuMjc1Ljg2Mi42MTIgMS4xMTIuNzc1YTM1LjM3NyAzNS4zNzcgMCAwIDAgNSAyLjYzN2MtLjI4Ny0xLjI1LS4zMTItMi40MTItLjUxMi0zLjc1YTUuMzM4IDUuMzM4IDAgMCAwLTEuMzg4LTIuODEyYy0uNzM3LS45ODgtMS41LTIuNjUtLjM4Ny0zLjY4OC44NzUtLjgyNSAyLjAyNS0uMDYyIDIuMzUuODg4IDEuMDUtMS42IDMuNjYyLTEuNDM4IDMuNzUuNzM3LjA4NyAxLjY1LTEuMzUgMi43MjUtMi41IDMuNjI1LS4yMzMuMTUtLjQxOS4zNjMtLjUzOC42MTNhMy4wMzMgMy4wMzMgMCAwIDAtLjE4Ny43MjVjLS4wNTcuODM2LS4wMTEgMS42NzUuMTM3IDIuNSAwIC41MTIgMCAxLjI1LjQxMyAxLjUxMi41MjIuMjggMS4wODIuNDgyIDEuNjYyLjZhMjAuMTMgMjAuMTMgMCAwIDAgNC4xODggMS4wMzggNi4wNzUgNi4wNzUgMCAwIDEtMi4xODgtNC4yIDkuMSA5LjEgMCAwIDEgLjgtNC41MTNjLjgyNSAxLjI1IDIuMDEzIDIuMzUgMi43NjMgMy42NzVhNS43NjMgNS43NjMgMCAwIDEgLjEgNS4yNWMuMTY2LjAxMy4zMzMuMDEzLjUgMFonXG4gICAgICAgICAgZmlsbD0nI0RGQUUwMCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdNMTkuNTUgMTUuNzg3czMuMjc1LTIuODUgMi41LTMuNjM3Yy0uNzc1LS43ODgtMi4xMTIuOTEyLTIuMTEyLjkxMnMtLjYzOC0xLjg1LTEuNDYzLTEuMjVjLS44MjUuNiAxLjA3NSAzLjk3NSAxLjA3NSAzLjk3NVpNMTUuMTg4IDEwLjc4OHMyLjk3NS0yLjkxMyAxLjk2Mi0zLjQ3NWMtMS4wMTItLjU2My0xLjc1IDEuMjUtMS43NSAxLjI1cy0uOTc1LTIuNS0xLjc4Ny0xLjc4OGMtLjgxMy43MTMgMS41NzUgNC4wMTMgMS41NzUgNC4wMTNaTTkuNjYyIDEwLjQzN3MxLjk2My00LjU4Ny40ODgtNC44MzctMS40IDIuNi0xLjQgMi42LTIuOTEzLTEuOTUtMy4xMTMtLjdjLS4yMzcgMS41MjUgNC4wMjUgMi45MzcgNC4wMjUgMi45MzdaTTcuMyAxNi41MTNzLTEuOC0zLjYyNS0yLjktMy4yYy0xLjEuNDI1LjQyNSAyLjEuNDI1IDIuMXMtMi4wODguMjc1LTEuOTYzIDEuNTEyYy4xMjUgMS4yMzggNC40MzgtLjQxMiA0LjQzOC0uNDEyWk0xMS42NjIgMjIuNTc1UzguMzUgMTkuNjYzIDcuNSAyMC40MjVjLS44NS43NjMgMi4wNjIgMi4wNzUgMi4wNjIgMi4wNzVzLTMuMSAxLjQ3NS0yLjA2MiAyLjJjMS4yNS44ODggNC4xNjItMi4xMjUgNC4xNjItMi4xMjVaTTE4LjU4OCAyNy4zNzVzLTQuNjM4LTIuNjM4LTUuMzYzLTEuNTg4Yy0uNzI1IDEuMDUgMi43NjMgMS44MjUgMi43NjMgMS44MjVzLTIuODI1IDEuOTM4LTEuNTEzIDIuNjM4YzEuMzEzLjcgNC4xMTMtMi44NzUgNC4xMTMtMi44NzVaTTI1Ljg1IDIwczMuNzUtMi41IDIuMjg3LTMuNTEyYy0xLjExMi0uNzYzLTIuNSAxLjA4Ny0yLjUgMS4wODdzLS44MTItMi4xLTEuNzEyLTEuNGMtLjkuNyAxLjkyNSAzLjgyNSAxLjkyNSAzLjgyNVpNMjMuOTYzIDMwLjE3NXMtLjQzOCAyLjg1LTEuMjUgMy4xNWMtLjgxMy4zLS4yMTMtMi4wNzUtLjIxMy0yLjA3NXMtMi4wMjUuOTI1LTEuOTI1IDBjLjEtLjkyNSAzLjM4OC0xLjA3NSAzLjM4OC0xLjA3NVonXG4gICAgICAgICAgZmlsbD0nI0Y3RDQ3RCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdNMzMuMjg3IDI2Ljk1YTQuODg3IDQuODg3IDAgMCAwIC4xMjUtMy4zNSA2LjM2MiA2LjM2MiAwIDAgMC0xLjg4Ny0zLjA1Yy0xLjA2MyA0LjUzNyAxLjc2MiA2LjQgMS43NjIgNi40Wk0zMi43NSAyOS4xNWMtLjYyMi44MDQtMS4zNiAxLjUxMS0yLjE4OCAyLjEtLjg3NC41NTUtMS44MjYuOTc2LTIuODI1IDEuMjVhNi43MTMgNi43MTMgMCAwIDEgMi4xMTMtMi4xMzcgMTEuNTg4IDExLjU4OCAwIDAgMSAyLjktMS4yMTNaJ1xuICAgICAgICAgIGZpbGw9JyNEQ0IzQjQnXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5jb25zdCB0cmFuc2xhdGVDb25maWcgPSAoYXBwQ29uZmlnLCBsb2NhbGUpID0+IHtcbiAgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSBkZWZhdWx0TG9jYWxlKSB7XG4gICAgcmV0dXJuIGFwcENvbmZpZztcbiAgfVxuICAvLyBSZXBsYWNlIGNvbmZpZyB3aXRoIGxhbmdcbiAgY29uc3QgY29uZmlnTGFuZyA9IGFwcENvbmZpZy5sYW5nW2xvY2FsZV07XG4gIGlmIChjb25maWdMYW5nID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbG9jYWxlOiAnLCBsb2NhbGUpO1xuICB9XG4gIHJldHVybiB7IC4uLmFwcENvbmZpZywgLi4uY29uZmlnTGFuZyB9O1xufTtcblxuY29uc3QgU2hvd0ludml0ZSA9ICh7IGN1cnJlbnRVcmwsIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsIGd1ZXN0IH0pID0+IHtcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9uKGd1ZXN0LmxvY2FsZSk7XG5cbiAgLy8gSW5pdGlhdGUgY29uZmlnIHZhcmlhYmxlc1xuICBjb25zdCB7XG4gICAgbG9nbyxcbiAgICBvZ1RhZ3MsXG4gICAgY291cGxlSW5mbyxcbiAgICB2ZW51ZSxcbiAgICB3ZWRkaW5nRGF5LFxuICAgIHdlZGRpbmdEYXRlLFxuICAgIHdlZGRpbmdUaW1lLFxuICAgIGNhbGVuZGFySW5mbyxcbiAgfSA9IHRyYW5zbGF0ZUNvbmZpZyhhcHBDb25maWcsIGd1ZXN0LmxvY2FsZSk7XG4gIGNvbnN0IHsgYnJpZGVOYW1lLCBncm9vbU5hbWUsIGhhc2h0YWcsIGNvdXBsZU5hbWVGb3JtYXQgfSA9IGNvdXBsZUluZm87XG5cbiAgY29uc3QgY291cGxlTmFtZVN0ciA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJ1xuICAgICAgPyBgJHtncm9vbU5hbWV9ICYgJHticmlkZU5hbWV9YFxuICAgICAgOiBgJHticmlkZU5hbWV9ICYgJHtncm9vbU5hbWV9YDtcbiAgY29uc3QgY291cGxlTmFtZSA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJyA/IChcbiAgICAgIDw+XG4gICAgICAgIHticmlkZU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7Z3Jvb21OYW1lfVxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIDw+XG4gICAgICAgIHtncm9vbU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7YnJpZGVOYW1lfVxuICAgICAgPC8+XG4gICAgKTtcblxuICAvLyBWZW51ZSBpbmZvXG4gIGNvbnN0IHZlbnVlQnJpZWYgPSBgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWA7XG4gIGNvbnN0IHdlZGRpbmdEYXRlQnJpZWYgPSBgJHt3ZWRkaW5nRGF5fSwgJHt3ZWRkaW5nRGF0ZX1gO1xuXG4gIC8vIEV2ZW50IGluZm9cbiAgY29uc3QgZXZlbnRUaXRsZSA9IGAke2NvdXBsZU5hbWVTdHJ9J3MgV2VkZGluZ2A7XG4gIGxldCBldmVudERlc2NyaXB0aW9uID0gYCR7d2VkZGluZ0RhdGVCcmllZn0gYXQgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fWA7XG4gIGlmIChndWVzdC5uYW1lKSB7XG4gICAgZXZlbnREZXNjcmlwdGlvbiA9IGBEZWFyICR7Z3Vlc3QubmFtZX0sIHlvdSBhcmUgY29yZGlhbGx5IGludml0ZWQgdG8gb3VyIHdlZGRpbmcgb24gJHt3ZWRkaW5nRGF0ZX0gYXQgJHt2ZW51ZS5uYW1lfS4gTG9va2luZyBmb3J3YXJkIHRvIHNlZWluZyB5b3UhYDtcbiAgfVxuXG4gIC8vIENhbGVuZGFyIHBheWxvYWRcbiAgY29uc3QgY2FsZW5kYXJFdmVudCA9IHtcbiAgICB0aXRsZTogZXZlbnRUaXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZXZlbnREZXNjcmlwdGlvbixcbiAgICBsb2NhdGlvbjogYCR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gLFxuICAgIHN0YXJ0VGltZTogY2FsZW5kYXJJbmZvLnRpbWVTdGFydElTTyxcbiAgICBlbmRUaW1lOiBjYWxlbmRhckluZm8udGltZUVuZElTTyxcbiAgfTtcblxuICBjb25zdCBldmVudFNjaGVkdWxlID0gW1xuICAgIHtcbiAgICAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgICAgZXZlbnQ6ICdDaHVyY2gnLFxuICAgICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgICB0aW1lOiAnMTJwbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAgIGV2ZW50OiAnUmVjZXB0aW9uJyxcbiAgICAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgICAgdGltZTogJzJwbScsXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAvLyAgIGV2ZW50OiAnRW5nYWdlbWVudCcsXG4gICAgLy8gICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAvLyAgIHRpbWU6ICcycG0nLFxuICAgIC8vIH0sXG4gIF07XG5cbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgfSwgMTAwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYuY3VycmVudDtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRQb3NpdGlvbiA8IHdpbmRvd0hlaWdodCAqIDAuOSkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtZWxlbWVudCcpOyAvLyBBZGQgdGhlIENTUyBjbGFzcyB3aGVuIHRoZSBlbGVtZW50IGlzIDc1JSB2aXNpYmxlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZC1lbGVtZW50Jyk7IC8vIFJlbW92ZSB0aGUgQ1NTIGNsYXNzIGlmIG5vdCB2aXNpYmxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBSdW4gdGhpcyBlZmZlY3Qgb25seSBvbmNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYS5yZWFjdC1hZGQtdG8tY2FsZW5kYXJfX2J1dHRvbiBzcGFuIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZFxuICAgICAgICB7Li4ub2dUYWdzfVxuICAgICAgICB0aXRsZT17ZXZlbnRUaXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2V2ZW50RGVzY3JpcHRpb259XG4gICAgICAgIGd1ZXN0TmFtZT17Z3Vlc3QubmFtZX1cbiAgICAgICAgdXJsPXtjdXJyZW50VXJsfVxuICAgICAgICBkYXRlPXt3ZWRkaW5nRGF0ZUJyaWVmfVxuICAgICAgICBtb2RpZmllZFRpbWU9e2d1ZXN0TGlzdExhc3RVcGRhdGVkQXR9XG4gICAgICAgIHZlbnVlPXt2ZW51ZUJyaWVmfVxuICAgICAgICBsb2dvPXtyZXNvbHZlUGF0aChvZ1RhZ3MubG9nbyl9XG4gICAgICAgIGF1dGhvcj17cmVzb2x2ZVBhdGgoJy8nKX1cbiAgICAgIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hlYWRlcl9hcmVhJz5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2hlYWRlci1jb250YWluZXInPlxuICAgICAgICAgIDxIZWFkZXJMb2dvIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoZWFkZXItbG9nby10ZXh0Jz5UaGUgQWtpbmxhZ3VuJ3MgUGFydHk8L3NwYW4+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPSdob21lJyBjbGFzc05hbWU9J2hlYWRlcl9zbGlkZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay1saXN0IGRyYWdnYWJsZSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stdHJhY2snIHN0eWxlPXt7IG9wYWNpdHk6IDEgfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZ19jb3ZlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvcGljICg4KS5qcGcnXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGFsdD0nYmFja2dyb3VuZCBpbWFnZSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgY29udGVudC1vdmVybGF5Jz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMjQnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX2NvbnRlbnQgdGV4dC1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDYwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfc3ViX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC4ycycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3NpdGVJbnRybycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuN3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC43cycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdXBsZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNodGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5uYW1lfSwge3ZlbnVlLmNpdHl9LCB7dmVudWUuY291bnRyeX0uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29taW5nX3Nvb24nIGNsYXNzTmFtZT0nY29taW5nX3Nvb25fYXJlYSBwdC0yMCBwYi03MCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8xJyBzdHlsZT17eyB6SW5kZXg6IDEgfX0+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy00Jz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSBwdC01MCB3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3QoJ2V2ZW50RGF0ZScpfTo8L2gzPlxuICAgICAgICAgICAgICAgIDxwPnt3ZWRkaW5nRGF0ZUJyaWVmfTwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEFkZFRvQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e2NhbGVuZGFyRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkxhYmVsPXt0KCdidG5BZGRUb015Q2FsZW5kYXInKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy9pbWFnZXMvc2VjdGlvbl9zaGFwZS5wbmcnIGFsdD0nU2hhcGUnIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTgnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjZzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjZzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fY291bnQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgcHQtMjAnPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzYwLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTM4LFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVfY291bnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMwJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb3VudF9jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMSwgcGFkZGluZ1RvcDogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZlbnVlLm1hcFVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvYmV2ZW50LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdiZXZlbnQgY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3ZlbnVlLm1hcFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNzV2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmV5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLmFkZHJlc3NMaW5lMX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMic+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTIucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9J2NvbnRhY3QnIGNsYXNzTmFtZT0nY29udGFjdF9hcmVhJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjb250YWN0X3dyYXBwZXIgd293IGZhZGVJblVwQmlnJ1xuICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDMwLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNHMnLFxuICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluVXAnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudFJlZn0gY2xhc3NOYW1lPSdjb250YWluZXItZXZlbnRMaW5ldXAnPlxuICAgICAgICAgICAgICB7ZXZlbnRTY2hlZHVsZS5tYXAoKGV2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGltZSwgZGF0ZSwgZXZlbnQsIGljb24gfSA9IGV2O1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnRMaW5ldXAnIGtleT17ZXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGZvcm0gKi99XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgdGV4dC1jZW50ZXIgcGItMzAnPlxuICAgICAgICAgICAgICAgICAge2d1ZXN0Lm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25HcmVldGluZycpfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJyB9fT57Z3Vlc3QubmFtZX0sPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhZGVJbic+XG4gICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbG9ycyBvZiB0aGUgZGF5XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgZ2FwOiAnNTBweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUZWFsIEdyZWVuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzgwcHgnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDgwODAnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEdvbGRcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Q1OWE1NycsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvblxuICAgICAgICByZWY9e2VsZW1lbnRSZWZ9XG4gICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgY2xhc3NOYW1lPSdsb3ZlLXRpdGxlLWNvbnRhaW5lciBmYWRlSW5VcEJpZyBmYWRlSW4nXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TG92ZVRpdGxlSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvdmUtdGl0bGUnPlxuICAgICAgICAgIE15IGhlYXJ0IGlzIHlvdXJzIHRvIGhvbGQgYW5kIGNoZXJpc2ggZm9yIHRoZSByZXN0IG9mIG91ciBkYXlzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxhcnRpY2xlXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J3N0b3JpZXMtY29udGFpbmVyIGZhZGVJblVwQmlnJ1xuICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICA+XG4gICAgICAgIDxTdG9yaWVzIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZC1jb250YWluZXInPlxuICAgICAgICA8UGljdHVyZXNHcmlkIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgJz5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDVcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6ICcjRDNEM0QzJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgI0RXZWRkaW5nXG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgIC8+XG4gICAgICA8Q2FzaEdpZnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNob3dJbnZpdGUuZ2V0SW5pdGlhbFByb3BzID0gKGN0eCkgPT4ge1xuICBjb25zdCBsb2NhbGVQYXJhbXMgPSBjdHgucXVlcnkubGFuZyB8fCBkZWZhdWx0TG9jYWxlO1xuICBjb25zdCBlbXB0eUd1ZXN0UGFyYW1zID0ge1xuICAgIGd1ZXN0OiB7XG4gICAgICBndWVzdElkOiAnJyxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZ3JlZXRpbmc6ICcnLFxuICAgICAgbG9jYWxlOiBsb2NhbGVQYXJhbXMsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBjdXJyZW50VXJsID0gcmVzb2x2ZVBhdGgoY3R4LnJlcS51cmwpO1xuICBjb25zdCBndWVzdElkID0gY3R4LnF1ZXJ5LnU7XG4gIGlmICghZ3Vlc3RJZCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgLi4uZW1wdHlHdWVzdFBhcmFtcyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgZ3Vlc3REYXRhID0gZ3Vlc3RMaXN0LmRhdGE7XG4gIGNvbnN0IGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQgPSBndWVzdExpc3QubWV0YS5sYXN0VXBkYXRlZEF0O1xuICBjb25zdCB7IG5hbWUsIGdyZWV0aW5nLCBsb2NhbGUgfSA9XG4gICAgZ3Vlc3REYXRhLmZpbHRlcigoZ3Vlc3QpID0+IGd1ZXN0Lmd1ZXN0SWQgPT09IGd1ZXN0SWQpWzBdIHx8IHt9O1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3VycmVudFVybCxcbiAgICBndWVzdExpc3RMYXN0VXBkYXRlZEF0LFxuICAgIGd1ZXN0OiB7XG4gICAgICBuYW1lLFxuICAgICAgZ3JlZXRpbmcsXG4gICAgICBndWVzdElkLFxuICAgICAgbG9jYWxlOiBsb2NhbGUgfHwgbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93SW52aXRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==