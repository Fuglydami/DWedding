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
  var pictures = ['/assets/images/pic (1).jpg', '/assets/images/pic (2).jpg', '/assets/images/pic (3).jpg', '/assets/images/pic (4).jpg', '/assets/images/pic (5).jpg', '/assets/images/pic (6).jpg', '/assets/images/pic (7).jpg', '/assets/images/pic (8).jpg', '/assets/images/pic (9).jpg', '/assets/images/pic (10).jpg', '/assets/images/pic (11).jpg', '/assets/images/pic (12).jpg', '/assets/images/pic (13).jpg'];
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    selectedPicture = _useState[0],
    setSelectedPicture = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    imageLoaded = _useState2[0],
    setImageLoaded = _useState2[1];
  var handleSelectPicture = function handleSelectPicture(picture) {
    setSelectedPicture(picture);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var img = new Image();
    img.onload = function () {
      setImageLoaded(true);
    };
    img.src = pictures;
  }, [pictures]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "picture-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
        lineNumber: 37,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        display: imageLoaded ? 'none' : 'inline'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, __jsx(react_blurhash__WEBPACK_IMPORTED_MODULE_2__["Blurhash"], {
      hash: "LkOyeVE0R*WC?wWAjZofM{s:RjoM",
      className: "grid-img",
      width: '100%',
      height: '300px',
      resolutionX: 32,
      resolutionY: 32,
      punch: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    })), __jsx("div", {
      style: {
        display: !imageLoaded ? 'none' : 'inline'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
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
        lineNumber: 57,
        columnNumber: 17
      }
    }))));
  })), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "modal fade",
    id: "myModal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-dialog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 79,
      columnNumber: 17
    }
  })))))));
};
_s(PicturesGrid, "QfH/TJKuuU5dqxHyDTtXHsnWtAo=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGljdHVyZUdyaWQuanN4Il0sIm5hbWVzIjpbIlBpY3R1cmVzR3JpZCIsIl9zIiwicGljdHVyZXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUGljdHVyZSIsInNldFNlbGVjdGVkUGljdHVyZSIsIl91c2VTdGF0ZTIiLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwiaGFuZGxlU2VsZWN0UGljdHVyZSIsInBpY3R1cmUiLCJ1c2VFZmZlY3QiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsInNyYyIsIl9fanN4IiwiUmVhY3QiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJtYXAiLCJpbmRleCIsInRpdGxlIiwib25DbGljayIsImtleSIsInN0eWxlIiwiZGlzcGxheSIsIkJsdXJoYXNoIiwiaGFzaCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzb2x1dGlvblgiLCJyZXNvbHV0aW9uWSIsInB1bmNoIiwiTGF6eUxvYWRJbWFnZSIsImVmZmVjdCIsImFsdCIsImNvbmNhdCIsImlkIiwib2JqZWN0Rml0IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2E7QUFDdEI7QUFDMUMsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztFQUFBQyxFQUFBO0VBQ3pCLElBQU1DLFFBQVEsR0FBRyxDQUNmLDRCQUE0QixFQUM1Qiw0QkFBNEIsRUFDNUIsNEJBQTRCLEVBQzVCLDRCQUE0QixFQUM1Qiw0QkFBNEIsRUFDNUIsNEJBQTRCLEVBQzVCLDRCQUE0QixFQUM1Qiw0QkFBNEIsRUFDNUIsNEJBQTRCLEVBQzVCLDZCQUE2QixFQUM3Qiw2QkFBNkIsRUFDN0IsNkJBQTZCLEVBQzdCLDZC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QUNMLENBRUYsQ0FBQztBQUVQLENBQUM7QUFBQzFCLEVBQUEsQ0EzRklELFlBQVk7QUFBQWdELEVBQUEsR0FBWmhELFlBQVk7QUE2RkhBLDJFQUFZLEVBQUM7QUFBQSxJQUFBZ0QsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTFjZGY2NWU4NjY4MzU5ZTc4ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJsdXJoYXNoIH0gZnJvbSAncmVhY3QtYmx1cmhhc2gnO1xyXG5jb25zdCBQaWN0dXJlc0dyaWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGljdHVyZXMgPSBbXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICgxKS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoMikuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDMpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICg0KS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoNSkuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDYpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICg3KS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoOCkuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDkpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICgxMCkuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDExKS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoMTIpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICgxMykuanBnJyxcclxuICBdO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBpY3R1cmUsIHNldFNlbGVjdGVkUGljdHVyZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVTZWxlY3RQaWN0dXJlID0gKHBpY3R1cmUpID0+IHtcclxuICAgIHNldFNlbGVjdGVkUGljdHVyZShwaWN0dXJlKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHNldEltYWdlTG9hZGVkKHRydWUpO1xyXG4gICAgfTtcclxuICAgIGltZy5zcmMgPSBwaWN0dXJlcztcclxuICB9LCBbcGljdHVyZXNdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZCc+XHJcbiAgICAgICAge3BpY3R1cmVzLm1hcCgocGljdHVyZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICB0aXRsZT0ndmlldyBpbWFnZSdcclxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT0nbW9kYWwnXHJcbiAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9JyNteU1vZGFsJ1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdFBpY3R1cmUocGljdHVyZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwaWN0dXJlJ1xyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IGltYWdlTG9hZGVkID8gJ25vbmUnIDogJ2lubGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8Qmx1cmhhc2hcclxuICAgICAgICAgICAgICAgICAgaGFzaD0nTGtPeWVWRTBSKldDP3dXQWpab2ZNe3M6UmpvTSdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdncmlkLWltZydcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMzAwcHgnfVxyXG4gICAgICAgICAgICAgICAgICByZXNvbHV0aW9uWD17MzJ9XHJcbiAgICAgICAgICAgICAgICAgIHJlc29sdXRpb25ZPXszMn1cclxuICAgICAgICAgICAgICAgICAgcHVuY2g9ezF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogIWltYWdlTG9hZGVkID8gJ25vbmUnIDogJ2lubGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZ3JpZC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgIGVmZmVjdD0nYmx1cidcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cclxuICAgICAgICAgICAgICAgICAgYWx0PXtgUGljdHVyZSAke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7Lyoge3NlbGVjdGVkUGljdHVyZSAmJiBzaG93TW9kYWwgJiYgKCAqL31cclxuICAgICAgPD5cclxuICAgICAgICB7LyogPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3NlbGVjdGVkUGljdHVyZX0gYWx0PSdzZWxlY3RlZCBwaWN0dXJlJyAvPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbCBmYWRlJyBpZD0nbXlNb2RhbCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtZGlhbG9nJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZFBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD0nc2VsZWN0ZWQgcGljdHVyZSdcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgICB7LyogKX0gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljdHVyZXNHcmlkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9