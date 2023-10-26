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
var _this = undefined,
  _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\pictureGrid.jsx",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PicturesGrid = function PicturesGrid() {
  _s();
  var pictures = ['/assets/images/pic (1).jpg', '/assets/images/pic (2).jpg', '/assets/images/pic (3).jpg', '/assets/images/pic (4).jpg', '/assets/images/pic (5).jpg', '/assets/images/pic (6).jpg', '/assets/images/pic (7).jpg', '/assets/images/pic (8).jpg', '/assets/images/pic (9).jpg', '/assets/images/pic (10).jpg', '/assets/images/pic (11).jpg', '/assets/images/pic (12).jpg', '/assets/images/pic (13).jpg'];
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    selectedPicture = _useState[0],
    setSelectedPicture = _useState[1];
  var handleSelectPicture = function handleSelectPicture(picture) {
    setSelectedPicture(picture);
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "picture-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__["LazyLoadImage"], {
      src: picture,
      className: "grid-img",
      effect: "blur",
      width: '100%',
      alt: "Picture ".concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    })));
  })), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "modal fade",
    id: "myModal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-dialog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
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
      lineNumber: 60,
      columnNumber: 17
    }
  })))))));
};
_s(PicturesGrid, "5hgFYKUMwdRQsA5nD5yBrl4pAIc=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGljdHVyZUdyaWQuanN4Il0sIm5hbWVzIjpbIlBpY3R1cmVzR3JpZCIsIl9zIiwicGljdHVyZXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUGljdHVyZSIsInNldFNlbGVjdGVkUGljdHVyZSIsImhhbmRsZVNlbGVjdFBpY3R1cmUiLCJwaWN0dXJlIiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJvbkNsaWNrIiwia2V5IiwiTGF6eUxvYWRJbWFnZSIsInNyYyIsImVmZmVjdCIsIndpZHRoIiwiYWx0IiwiY29uY2F0IiwiaWQiLCJzdHlsZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2E7QUFFaEUsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztFQUFBQyxFQUFBO0VBQ3pCLElBQU1DLFFBQVEsR0FBRyxDQUNmLDRCQUE0QixFQUM1Qiw0QkFBNEIsRUFDNUIsNEJBQTRCLEVBQzVCLDRCQUE0QixFQUM1Qiw0QkFBNEIsRUFDNUIsNEJBQTRCLEVBQzVCLDRCQUE0QixFQUM1Qiw0QkFBNEIsRUFDNUIsNEJBQTRCLEVBQzVCLDZCQUE2QixFQUM3Qiw2QkFBNkIsRUFDN0IsNkJBQTZCLEVBQzdCLDZCQUE2QixDQUM5QjtFQUNELElBQUFDLFNBQUEsR0FBOENDLHNEQUFRLENBQUMsSUFBSSxDQUFDO0lBQXJEQyxlQUFlLEdBQUFGLFNBQUE7SUFBRUcsa0JBQWtCLEdBQUFILFNBQUE7RUFFMUMsSUFBTUksbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBSUMsT0FB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OGY2ODYyNmE2ODBhMTNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5cclxuY29uc3QgUGljdHVyZXNHcmlkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBpY3R1cmVzID0gW1xyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoMSkuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDIpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICgzKS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoNCkuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDUpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICg2KS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoNykuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDgpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICg5KS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoMTApLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICgxMSkuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDEyKS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoMTMpLmpwZycsXHJcbiAgXTtcclxuICBjb25zdCBbc2VsZWN0ZWRQaWN0dXJlLCBzZXRTZWxlY3RlZFBpY3R1cmVdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdFBpY3R1cmUgPSAocGljdHVyZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRQaWN0dXJlKHBpY3R1cmUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGljdHVyZS1ncmlkJz5cclxuICAgICAgICB7cGljdHVyZXMubWFwKChwaWN0dXJlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHRpdGxlPSd2aWV3IGltYWdlJ1xyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPSdtb2RhbCdcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD0nI215TW9kYWwnXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0UGljdHVyZShwaWN0dXJlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3BpY3R1cmUnXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dyaWQtaW1nJ1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0PSdibHVyJ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cclxuICAgICAgICAgICAgICAgIGFsdD17YFBpY3R1cmUgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiB7c2VsZWN0ZWRQaWN0dXJlICYmIHNob3dNb2RhbCAmJiAoICovfVxyXG4gICAgICA8PlxyXG4gICAgICAgIHsvKiA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWRQaWN0dXJlfSBhbHQ9J3NlbGVjdGVkIHBpY3R1cmUnIC8+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsIGZhZGUnIGlkPSdteU1vZGFsJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1kaWFsb2cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtY29udGVudCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzcwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkUGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgYWx0PSdzZWxlY3RlZCBwaWN0dXJlJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICAgIHsvKiApfSAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWN0dXJlc0dyaWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=