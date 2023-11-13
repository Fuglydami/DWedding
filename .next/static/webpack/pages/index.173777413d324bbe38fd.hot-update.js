webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./pages/cashGift.jsx":
/*!****************************!*\
  !*** ./pages/cashGift.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _this = undefined,
  _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\cashGift.jsx",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Icon = function Icon() {
  _s();
  var _useState = useState(false),
    _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    isHovered = _useState2[0],
    setIsHovered = _useState2[1];
  return __jsx("div", {
    onMouseEnter: function onMouseEnter() {
      return setIsHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovered(false);
    },
    style: {
      display: 'inline-block',
      cursor: 'pointer',
      transition: 'transform 0.3s ease-in-out',
      transform: isHovered ? 'scale(1.2)' : 'scale(1)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("svg", {
    width: "61",
    height: "34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "M30.165 10.126c-3.36.643-5.576 4.432-4.79 8.506.358 1.93 1.287 3.646 2.717 4.86 1.144 1.001 2.502 1.502 3.86 1.502.285 0 .643 0 .93-.071 1.643-.286 3.073-1.359 4.002-3.002.858-1.573 1.144-3.575.786-5.505-.786-4.074-4.146-6.861-7.505-6.29Zm5.503 11.151c-.715 1.287-1.787 2.145-3.073 2.36-1.286.213-2.573-.144-3.717-1.145-1.144-1-1.93-2.43-2.288-4.074-.643-3.36 1.072-6.505 3.789-7.005.214-.072.5-.072.715-.072 2.43 0 4.718 2.216 5.29 5.29.285 1.643.07 3.288-.716 4.646Z",
    fill: "#F6B100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M54.11 8.696c-.215-.143-.43-.143-.572-.071 0 0-1.644.5-2.645-.214-.572-.358-.858-1.144-.93-2.145 0-.214-.143-.429-.285-.5a1.35 1.35 0 0 0-.572-.144c-.143 0-12.009 2.216-21.587.787-10.436-1.573-18.728.357-19.085.428-.215.072-.358.215-.5.358-.072.214-.144.429-.072.572 0 .071.786 2.216-2.931 3.645-.286.143-.5.429-.429.715l1.43 12.652c0 .215.143.43.285.5.144.072.43.144.572.072 0 0 1.644-.5 2.645.215.572.357.857 1.143.93 2.144 0 .214.142.429.285.572.143.071.286.143.429.143h.214c.072 0 8.149-2.216 20.015-.572 10.221 1.43 20.443-.572 20.586-.643.214-.071.357-.143.5-.358.144-.214.144-.428.072-.571 0-.072-.787-2.216 2.93-3.646.286-.143.501-.429.43-.715l-1.43-12.652c0-.286-.143-.429-.286-.572ZM51.25 24.28c-.285.643-.285 1.215-.285 1.644-2.43.429-10.937 1.644-19.371.5-3.36-.5-6.433-.643-9.078-.643-5.361 0-9.15.715-10.722 1.072-.215-1.072-.715-1.858-1.43-2.43-1-.715-2.216-.715-3.073-.572L6.004 12.485C7.577 11.77 8.65 10.84 9.15 9.697c.285-.643.285-1.215.285-1.715 2.145-.43 9.364-1.502 17.87-.286 8.578 1.286 18.514-.215 21.301-.643.215 1.072.644 1.93 1.43 2.502 1 .715 2.216.715 3.073.572l1.287 11.365c-1.572.714-2.645 1.643-3.145 2.787Z",
    fill: "#F6B100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M57.04.62a.538.538 0 0 0-.357-.502c-.214-.143-.428-.143-.643-.07-.071.07-9.364 3.573-24.16 2.43C6.504.475.5 5.193.286 5.407.07 5.551 0 5.837 0 6.051l3.36 27.306c0 .214.143.429.357.572.143.071.214.071.358.071.07 0 .214 0 .285-.071.072-.072 8.72-3.932 28.52-1.859 20.373 2.145 26.949-3.288 27.235-3.574.214-.143.285-.357.214-.643L57.041.62ZM33.025 30.711c-16.87-1.787-25.662.643-28.378 1.573L1.501 6.338c1.501-.858 8.72-4.146 30.307-2.43 12.724 1 21.301-1.359 23.946-2.216l3.217 26.018c-1.502.93-8.578 4.79-25.948 3.002Z",
    fill: "#F6B100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })));
};
_s(Icon, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = Icon;
var CashGift = function CashGift() {
  return __jsx("section", {
    style: {
      display: 'flex',
      left: '50%',
      transform: 'translateX(-50%)',
      flexDirection: 'column',
      gap: 10,
      position: 'fixed',
      bottom: '2%',
      zIndex: 10000000,
      width: 'auto',
      padding: '24px 80px',
      borderRadius: '10px',
      maxWidth: '670px',
      margin: '24px 0',
      backgroundColor: '#fff',
      boxShadow: '0.2px 0.4px 0.5px rgba(161,161,161,.36), 0.5px 1.3px 1.6px -0.8px rgba(161,161,161,.36), 1.3px 3.4px 4.1px -1.7px rgba(161,161,161,.36), 3.1px 8.2px 9.9px -2.5px rgba(161,161,161,.36)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(Icon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx("span", {
    style: {
      textAlign: 'center',
      color: 'black',
      fontWeight: 600
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "Cash Gift"));
};
_c2 = CashGift;
/* harmony default export */ __webpack_exports__["default"] = (CashGift);
var _c, _c2;
$RefreshReg$(_c, "Icon");
$RefreshReg$(_c2, "CashGift");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXNoR2lmdC5qc3giXSwibmFtZXMiOlsiSWNvbiIsIl9zIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJfX2pzeCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInN0eWxlIiwiZGlzcGxheSIsImN1cnNvciIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsIiwieG1sbnMiLCJkIiwiX2MiLCJDYXNoR2lmdCIsImxlZnQiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwicG9zaXRpb24iLCJib3R0b20iLCJ6SW5kZXgiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImZvbnRXZWlnaHQiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7QUFDWTtBQUNZO0FBQ3RCO0FBQ2pDO0FBQ2YsU0FBUywrREFBYyxTQUFTLHFFQUFvQixZQUFZLDJFQUEwQixZQUFZLGdFQUFlO0FBQ3JILEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFrRDtBQUNuQztBQUNmO0FBQ0Esb0NBQW9DLGlFQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsaUVBQWdCO0FBQ3RHLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1IwQjtBQUUxQixJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBQUFDLEVBQUE7RUFDakIsSUFBQUMsU0FBQSxHQUFrQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUFBQyxVQUFBLEdBQUFDLHdGQUFBLENBQUFILFNBQUE7SUFBMUNJLFNBQVMsR0FBQUYs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QUssRUFBRSxPQUFPO01BQ2RDLFVBQVUsRUFBRTtJQUNkLENBQUU7SUFBQTVCLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0gsV0FFSyxDQUNDLENBQUM7QUFFZCxDQUFDO0FBQUN1QixHQUFBLEdBbkNJaEIsUUFBUTtBQXFDQ0EsdUVBQVEsRUFBQztBQUFBLElBQUFELEVBQUEsRUFBQWlCLEdBQUE7QUFBQUMsWUFBQSxDQUFBbEIsRUFBQTtBQUFBa0IsWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE3Mzc3NzQxM2QzMjRiYmUzOGZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEljb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX1cclxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dCcsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBpc0hvdmVyZWQgPyAnc2NhbGUoMS4yKScgOiAnc2NhbGUoMSknLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9JzYxJ1xyXG4gICAgICAgIGhlaWdodD0nMzQnXHJcbiAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD0nTTMwLjE2NSAxMC4xMjZjLTMuMzYuNjQzLTUuNTc2IDQuNDMyLTQuNzkgOC41MDYuMzU4IDEuOTMgMS4yODcgMy42NDYgMi43MTcgNC44NiAxLjE0NCAxLjAwMSAyLjUwMiAxLjUwMiAzLjg2IDEuNTAyLjI4NSAwIC42NDMgMCAuOTMtLjA3MSAxLjY0My0uMjg2IDMuMDczLTEuMzU5IDQuMDAyLTMuMDAyLjg1OC0xLjU3MyAxLjE0NC0zLjU3NS43ODYtNS41MDUtLjc4Ni00LjA3NC00LjE0Ni02Ljg2MS03LjUwNS02LjI5Wm01LjUwMyAxMS4xNTFjLS43MTUgMS4yODctMS43ODcgMi4xNDUtMy4wNzMgMi4zNi0xLjI4Ni4yMTMtMi41NzMtLjE0NC0zLjcxNy0xLjE0NS0xLjE0NC0xLTEuOTMtMi40My0yLjI4OC00LjA3NC0uNjQzLTMuMzYgMS4wNzItNi41MDUgMy43ODktNy4wMDUuMjE0LS4wNzIuNS0uMDcyLjcxNS0uMDcyIDIuNDMgMCA0LjcxOCAyLjIxNiA1LjI5IDUuMjkuMjg1IDEuNjQzLjA3IDMuMjg4LS43MTYgNC42NDZaJ1xyXG4gICAgICAgICAgZmlsbD0nI0Y2QjEwMCdcclxuICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPSdNNTQuMTEgOC42OTZjLS4yMTUtLjE0My0uNDMtLjE0My0uNTcyLS4wNzEgMCAwLTEuNjQ0LjUtMi42NDUtLjIxNC0uNTcyLS4zNTgtLjg1OC0xLjE0NC0uOTMtMi4xNDUgMC0uMjE0LS4xNDMtLjQyOS0uMjg1LS41YTEuMzUgMS4zNSAwIDAgMC0uNTcyLS4xNDRjLS4xNDMgMC0xMi4wMDkgMi4yMTYtMjEuNTg3Ljc4Ny0xMC40MzYtMS41NzMtMTguNzI4LjM1Ny0xOS4wODUuNDI4LS4yMTUuMDcyLS4zNTguMjE1LS41LjM1OC0uMDcyLjIxNC0uMTQ0LjQyOS0uMDcyLjU3MiAwIC4wNzEuNzg2IDIuMjE2LTIuOTMxIDMuNjQ1LS4yODYuMTQzLS41LjQyOS0uNDI5LjcxNWwxLjQzIDEyLjY1MmMwIC4yMTUuMTQzLjQzLjI4NS41LjE0NC4wNzIuNDMuMTQ0LjU3Mi4wNzIgMCAwIDEuNjQ0LS41IDIuNjQ1LjIxNS41NzIuMzU3Ljg1NyAxLjE0My45MyAyLjE0NCAwIC4yMTQuMTQyLjQyOS4yODUuNTcyLjE0My4wNzEuMjg2LjE0My40MjkuMTQzaC4yMTRjLjA3MiAwIDguMTQ5LTIuMjE2IDIwLjAxNS0uNTcyIDEwLjIyMSAxLjQzIDIwLjQ0My0uNTcyIDIwLjU4Ni0uNjQzLjIxNC0uMDcxLjM1Ny0uMTQzLjUtLjM1OC4xNDQtLjIxNC4xNDQtLjQyOC4wNzItLjU3MSAwLS4wNzItLjc4Ny0yLjIxNiAyLjkzLTMuNjQ2LjI4Ni0uMTQzLjUwMS0uNDI5LjQzLS43MTVsLTEuNDMtMTIuNjUyYzAtLjI4Ni0uMTQzLS40MjktLjI4Ni0uNTcyWk01MS4yNSAyNC4yOGMtLjI4NS42NDMtLjI4NSAxLjIxNS0uMjg1IDEuNjQ0LTIuNDMuNDI5LTEwLjkzNyAxLjY0NC0xOS4zNzEuNS0zLjM2LS41LTYuNDMzLS42NDMtOS4wNzgtLjY0My01LjM2MSAwLTkuMTUuNzE1LTEwLjcyMiAxLjA3Mi0uMjE1LTEuMDcyLS43MTUtMS44NTgtMS40My0yLjQzLTEtLjcxNS0yLjIxNi0uNzE1LTMuMDczLS41NzJMNi4wMDQgMTIuNDg1QzcuNTc3IDExLjc3IDguNjUgMTAuODQgOS4xNSA5LjY5N2MuMjg1LS42NDMuMjg1LTEuMjE1LjI4NS0xLjcxNSAyLjE0NS0uNDMgOS4zNjQtMS41MDIgMTcuODctLjI4NiA4LjU3OCAxLjI4NiAxOC41MTQtLjIxNSAyMS4zMDEtLjY0My4yMTUgMS4wNzIuNjQ0IDEuOTMgMS40MyAyLjUwMiAxIC43MTUgMi4yMTYuNzE1IDMuMDczLjU3MmwxLjI4NyAxMS4zNjVjLTEuNTcyLjcxNC0yLjY0NSAxLjY0My0zLjE0NSAyLjc4N1onXHJcbiAgICAgICAgICBmaWxsPScjRjZCMTAwJ1xyXG4gICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9J001Ny4wNC42MmEuNTM4LjUzOCAwIDAgMC0uMzU3LS41MDJjLS4yMTQtLjE0My0uNDI4LS4xNDMtLjY0My0uMDctLjA3MS4wNy05LjM2NCAzLjU3My0yNC4xNiAyLjQzQzYuNTA0LjQ3NS41IDUuMTkzLjI4NiA1LjQwNy4wNyA1LjU1MSAwIDUuODM3IDAgNi4wNTFsMy4zNiAyNy4zMDZjMCAuMjE0LjE0My40MjkuMzU3LjU3Mi4xNDMuMDcxLjIxNC4wNzEuMzU4LjA3MS4wNyAwIC4yMTQgMCAuMjg1LS4wNzEuMDcyLS4wNzIgOC43Mi0zLjkzMiAyOC41Mi0xLjg1OSAyMC4zNzMgMi4xNDUgMjYuOTQ5LTMuMjg4IDI3LjIzNS0zLjU3NC4yMTQtLjE0My4yODUtLjM1Ny4yMTQtLjY0M0w1Ny4wNDEuNjJaTTMzLjAyNSAzMC43MTFjLTE2Ljg3LTEuNzg3LTI1LjY2Mi42NDMtMjguMzc4IDEuNTczTDEuNTAxIDYuMzM4YzEuNTAxLS44NTggOC43Mi00LjE0NiAzMC4zMDctMi40MyAxMi43MjQgMSAyMS4zMDEtMS4zNTkgMjMuOTQ2LTIuMjE2bDMuMjE3IDI2LjAxOGMtMS41MDIuOTMtOC41NzggNC43OS0yNS45NDggMy4wMDJaJ1xyXG4gICAgICAgICAgZmlsbD0nI0Y2QjEwMCdcclxuICAgICAgICA+PC9wYXRoPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDYXNoR2lmdCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgZ2FwOiAxMCxcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICBib3R0b206ICcyJScsXHJcbiAgICAgICAgekluZGV4OiAxMDAwMDAwMCxcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG5cclxuICAgICAgICBwYWRkaW5nOiAnMjRweCA4MHB4JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzY3MHB4JyxcclxuICAgICAgICBtYXJnaW46ICcyNHB4IDAnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICAgICcwLjJweCAwLjRweCAwLjVweCByZ2JhKDE2MSwxNjEsMTYxLC4zNiksIDAuNXB4IDEuM3B4IDEuNnB4IC0wLjhweCByZ2JhKDE2MSwxNjEsMTYxLC4zNiksIDEuM3B4IDMuNHB4IDQuMXB4IC0xLjdweCByZ2JhKDE2MSwxNjEsMTYxLC4zNiksIDMuMXB4IDguMnB4IDkuOXB4IC0yLjVweCByZ2JhKDE2MSwxNjEsMTYxLC4zNiknLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8SWNvbiAvPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIENhc2ggR2lmdFxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhc2hHaWZ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9