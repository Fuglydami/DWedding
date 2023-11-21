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
      paddingTop: 20
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
      lineNumber: 70,
      columnNumber: 19
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
      lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGljdHVyZUdyaWQuanN4Il0sIm5hbWVzIjpbIlBpY3R1cmVzR3JpZCIsIl9zIiwicGljdHVyZXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUGljdHVyZSIsInNldFNlbGVjdGVkUGljdHVyZSIsIl91c2VTdGF0ZTIiLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwiX3VzZVN0YXRlMyIsImxvYWRlZEltYWdlc0NvdW50Iiwic2V0TG9hZGVkSW1hZ2VzQ291bnQiLCJoYW5kbGVTZWxlY3RQaWN0dXJlIiwicGljdHVyZSIsImhhbmRsZUNsb3NlTW9kYWwiLCJfX2pzeCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsIm9uQ2xpY2siLCJrZXkiLCJzcmMiLCJhbHQiLCJjb25jYXQiLCJpZCIsInN0eWxlIiwicG9zaXRpb24iLCJyaWdodCIsInBhZGRpbmdUb3AiLCJ0eXBlIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2E7QUFDdEI7QUFDMUMsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztFQUFBQyxFQUFBO0VBQ3pCLElBQU1DLFFBQVEsR0FBRyxDQUNmLGlDQUFpQyxFQUNqQyxpQ0FBaUMsRUFDakMsOEJBQThCLEVBQzlCLGdDQUFnQyxFQUNoQyxnQ0FBZ0MsRUFFaEMsOEJBQThCLEVBQzlCLGdDQUFnQyxFQUNoQyxnQ0FBZ0MsRUFDaEMsaUNBQWlDLEVBQ2pDLDhCQUE4QixFQUM5QixnQ0FBZ0MsRUFDaEMsOEJBQThCLEVBQzlCLGdDQUFnQyxFQUNoQyw4QkFBOEIs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bGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wY2U1NzY3Nzk0Nzc4ZDYwMTIxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmx1cmhhc2ggfSBmcm9tICdyZWFjdC1ibHVyaGFzaCc7XHJcbmNvbnN0IFBpY3R1cmVzR3JpZCA9ICgpID0+IHtcclxuICBjb25zdCBwaWN0dXJlcyA9IFtcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICgxMSkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICgxMykuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2NvdXBsZSAoMSkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICgxKS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDIpLmpwZycsXHJcblxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg0KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDUpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9kd2VkZGluZyAoNikuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICgxNCkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2NvdXBsZSAoNykuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICg3KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg4KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDgpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDkpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9kd2VkZGluZyAoOSkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2NvdXBsZSAoMTMpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9kd2VkZGluZyAoMTApLmpwZycsXHJcbiAgXTtcclxuICBjb25zdCBbc2VsZWN0ZWRQaWN0dXJlLCBzZXRTZWxlY3RlZFBpY3R1cmVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ltYWdlTG9hZGVkLCBzZXRJbWFnZUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRlZEltYWdlc0NvdW50LCBzZXRMb2FkZWRJbWFnZXNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBoYW5kbGVTZWxlY3RQaWN0dXJlID0gKHBpY3R1cmUpID0+IHtcclxuICAgIHNldFNlbGVjdGVkUGljdHVyZShwaWN0dXJlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFBpY3R1cmUobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwaWN0dXJlLWdyaWQnPlxyXG4gICAgICAgIHtwaWN0dXJlcy5tYXAoKHBpY3R1cmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgdGl0bGU9J3ZpZXcgaW1hZ2UnXHJcbiAgICAgICAgICAgICAgZGF0YS10b2dnbGU9J21vZGFsJ1xyXG4gICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PScjbXlNb2RhbCdcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3RQaWN0dXJlKHBpY3R1cmUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGljdHVyZSdcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdncmlkLWltZydcclxuICAgICAgICAgICAgICAgIGFsdD17YFBpY3R1cmUgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtzZWxlY3RlZFBpY3R1cmUgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwgZmFkZScgaWQ9J215TW9kYWwnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtZGlhbG9nJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDIwLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2xvc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPSdtb2RhbCdcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdDbG9zZSdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49J3RydWUnPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRQaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD0nc2VsZWN0ZWQgcGljdHVyZSdcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpY3R1cmVzR3JpZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==