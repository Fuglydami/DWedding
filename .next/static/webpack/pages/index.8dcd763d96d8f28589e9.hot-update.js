webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/pictureGrid.jsx":
/*!*******************************!*\
  !*** ./pages/pictureGrid.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_blurhash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-blurhash */ "./node_modules/react-blurhash/dist/esm/index.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\pictureGrid.jsx",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PicturesGrid = function PicturesGrid() {
  _s();
  var pictures = ['assets/images/dwedding (11).jpg', 'assets/images/dwedding (13).jpg', 'assets/images/couple (1).jpg', 'assets/images/dwedding (1).jpg', 'assets/images/dwedding (2).jpg', 'assets/images/couple (4).jpg', 'assets/images/dwedding (5).jpg', 'assets/images/dwedding (6).jpg', 'assets/images/dwedding (14).jpg', 'assets/images/couple (7).jpg', 'assets/images/dwedding (7).jpg', 'assets/images/couple (8).jpg', 'assets/images/dwedding (8).jpg', 'assets/images/couple (9).jpg', 'assets/images/dwedding (9).jpg', 'assets/images/couple (13).jpg', 'assets/images/dwedding (10).jpg'];
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    selectedPicture = _useState[0],
    setSelectedPicture = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    imageLoaded = _useState2[0],
    setImageLoaded = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
    loadedImagesCount = _useState3[0],
    setLoadedImagesCount = _useState3[1];
  var handleSelectPicture = function handleSelectPicture(picture) {
    setSelectedPicture(picture);
  };
  var handleCloseModal = function handleCloseModal() {
    setSelectedPicture(null);
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "picture-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, pictures.map(function (picture, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      title: "view image",
      "data-toggle": "modal",
      "data-target": "#myModal",
      onClick: function onClick() {
        return handleSelectPicture(picture);
      },
      className: "picture",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: picture,
      className: "grid-img",
      alt: "Picture ".concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    })));
  })), selectedPicture && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "modal fade",
    id: "myModal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-dialog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      position: 'absolute',
      right: 20,
      backgroundColor: 'grey',
      zIndex: 20,
      height: '20px',
      width: '20px'
      // paddingTop: 20,
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: handleCloseModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("img", {
    style: {
      height: '70%',
      objectFit: 'cover'
    },
    src: selectedPicture,
    alt: "selected picture",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  })))))));
};
_s(PicturesGrid, "3WG2PFVZ6KS7L6eNibcOpo8uWg4=");
_c = PicturesGrid;
/* harmony default export */ __webpack_exports__["default"] = (PicturesGrid);
var _c;
$RefreshReg$(_c, "PicturesGrid");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGljdHVyZUdyaWQuanN4Il0sIm5hbWVzIjpbIlBpY3R1cmVzR3JpZCIsIl9zIiwicGljdHVyZXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUGljdHVyZSIsInNldFNlbGVjdGVkUGljdHVyZSIsIl91c2VTdGF0ZTIiLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwiX3VzZVN0YXRlMyIsImxvYWRlZEltYWdlc0NvdW50Iiwic2V0TG9hZGVkSW1hZ2VzQ291bnQiLCJoYW5kbGVTZWxlY3RQaWN0dXJlIiwicGljdHVyZSIsImhhbmRsZUNsb3NlTW9kYWwiLCJfX2pzeCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsIm9uQ2xpY2siLCJrZXkiLCJzcmMiLCJhbHQiLCJjb25jYXQiLCJpZCIsInN0eWxlIiwicG9zaXRpb24iLCJyaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImhlaWdodCIsIndpZHRoIiwidHlwZSIsIm9iamVjdEZpdCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNhO0FBQ3RCO0FBQzFDLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7RUFBQUMsRUFBQTtFQUN6QixJQUFNQyxRQUFRLEdBQUcsQ0FDZixpQ0FBaUMsRUFDakMsaUNBQWlDLEVBQ2pDLDhCQUE4QixFQUM5QixnQ0FBZ0MsRUFDaEMsZ0NBQWdDLEVBRWhDLDhCQUE4QixFQUM5QixnQ0FBZ0MsRUFDaEMsZ0NBQWdDLEVBQ2hDLGlDQUFpQyxFQUNqQyw4QkFBOEIsRUFDOUIsZ0NBQWdDLEVBQ2hDLDhCQUE4QixFQUM5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LFlBQVk7QUFBQTZDLEVBQUEsR0FBWjdDLFlBQVk7QUFtR0hBLDJFQUFZLEVBQUM7QUFBQSxJQUFBNkMsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGRjZDc2M2Q5NmQ4ZjI4NTg5ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJsdXJoYXNoIH0gZnJvbSAncmVhY3QtYmx1cmhhc2gnO1xyXG5jb25zdCBQaWN0dXJlc0dyaWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGljdHVyZXMgPSBbXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9kd2VkZGluZyAoMTEpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9kd2VkZGluZyAoMTMpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDEpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9kd2VkZGluZyAoMSkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICgyKS5qcGcnLFxyXG5cclxuICAgICdhc3NldHMvaW1hZ2VzL2NvdXBsZSAoNCkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICg1KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDYpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9kd2VkZGluZyAoMTQpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDcpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9kd2VkZGluZyAoNykuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2NvdXBsZSAoOCkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICg4KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg5KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDkpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDEzKS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDEwKS5qcGcnLFxyXG4gIF07XHJcbiAgY29uc3QgW3NlbGVjdGVkUGljdHVyZSwgc2V0U2VsZWN0ZWRQaWN0dXJlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkZWRJbWFnZXNDb3VudCwgc2V0TG9hZGVkSW1hZ2VzQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0UGljdHVyZSA9IChwaWN0dXJlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFBpY3R1cmUocGljdHVyZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRQaWN0dXJlKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGljdHVyZS1ncmlkJz5cclxuICAgICAgICB7cGljdHVyZXMubWFwKChwaWN0dXJlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHRpdGxlPSd2aWV3IGltYWdlJ1xyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPSdtb2RhbCdcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD0nI215TW9kYWwnXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0UGljdHVyZShwaWN0dXJlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3BpY3R1cmUnXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17cGljdHVyZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZ3JpZC1pbWcnXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2BQaWN0dXJlICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2VsZWN0ZWRQaWN0dXJlICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsIGZhZGUnIGlkPSdteU1vZGFsJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWRpYWxvZyc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMCxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmV5JyxcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZ1RvcDogMjAsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjbG9zZSdcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9J21vZGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J0Nsb3NlJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj0ndHJ1ZSc+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZFBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PSdzZWxlY3RlZCBwaWN0dXJlJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljdHVyZXNHcmlkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9