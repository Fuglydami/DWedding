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
  // useEffect(() => {
  //   const img = new Image();
  //   img.onload = () => {
  //     setImageLoaded(true);
  //   };
  //   img.src = pictures;
  // }, [pictures]);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var loadImage = function loadImage() {
      var img = new Image();
      img.onload = function () {
        setImageLoaded(true);
      };
      img.src = selectedPicture;
    };
    if (selectedPicture) {
      loadImage();
    }
  }, [selectedPicture]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "picture-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
        lineNumber: 52,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        display: imageLoaded ? 'none' : 'inline'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
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
        lineNumber: 61,
        columnNumber: 17
      }
    })), __jsx("div", {
      style: {
        display: !imageLoaded ? 'none' : 'inline'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
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
        lineNumber: 72,
        columnNumber: 17
      }
    }))));
  })), selectedPicture && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "modal fade",
    id: "myModal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-dialog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 91,
      columnNumber: 19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGljdHVyZUdyaWQuanN4Il0sIm5hbWVzIjpbIlBpY3R1cmVzR3JpZCIsIl9zIiwicGljdHVyZXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUGljdHVyZSIsInNldFNlbGVjdGVkUGljdHVyZSIsIl91c2VTdGF0ZTIiLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwiaGFuZGxlU2VsZWN0UGljdHVyZSIsInBpY3R1cmUiLCJ1c2VFZmZlY3QiLCJsb2FkSW1hZ2UiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsInNyYyIsIl9fanN4IiwiUmVhY3QiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJtYXAiLCJpbmRleCIsInRpdGxlIiwib25DbGljayIsImtleSIsInN0eWxlIiwiZGlzcGxheSIsIkJsdXJoYXNoIiwiaGFzaCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzb2x1dGlvblgiLCJyZXNvbHV0aW9uWSIsInB1bmNoIiwiTGF6eUxvYWRJbWFnZSIsImVmZmVjdCIsImFsdCIsImNvbmNhdCIsImlkIiwib2JqZWN0Rml0IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2E7QUFDdEI7QUFDMUMsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztFQUFBQyxFQUFBO0VBQ3pCLElBQU1DLFFBQVEsR0FBRyxDQUNmLDRCQUE0QixFQUM1Qiw0QkFBNEIsRUFDNUIsNEJBQTRCLEVBQzVCLDRCQUE0QixFQUM1Qiw0QkFBNEIsRUFDNUIsNEJBQTRCLEVBQzVCLDRCQUE0QixFQUM1Qiw0QkFBNEIsRUFDNUIsNEJBQTRCLEVBQzVCLDZCQUE2QixFQUM3Qiw2QkFBNkIsRUFDN0IsNkJB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QUNGL0IsR0FBRyxFQUFFWixlQUFnQjtJQUNyQndDLEdBQUcsRUFBQyxrQkFBa0I7SUFBQXZCLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ3ZCLENBQ0UsQ0FDRixDQUNGLENBQ0YsQ0FDTCxDQUVKLENBQUM7QUFFUCxDQUFDO0FBQUMzQixFQUFBLENBdkdJRCxZQUFZO0FBQUFpRCxFQUFBLEdBQVpqRCxZQUFZO0FBeUdIQSwyRUFBWSxFQUFDO0FBQUEsSUFBQWlELEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1M2NhYTVhNWY5YjNiZTc3Yjk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbHVyaGFzaCB9IGZyb20gJ3JlYWN0LWJsdXJoYXNoJztcclxuY29uc3QgUGljdHVyZXNHcmlkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBpY3R1cmVzID0gW1xyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoMSkuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDIpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICgzKS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoNCkuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDUpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICg2KS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoNykuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDgpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICg5KS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoMTApLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICgxMSkuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDEyKS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoMTMpLmpwZycsXHJcbiAgXTtcclxuICBjb25zdCBbc2VsZWN0ZWRQaWN0dXJlLCBzZXRTZWxlY3RlZFBpY3R1cmVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ltYWdlTG9hZGVkLCBzZXRJbWFnZUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0UGljdHVyZSA9IChwaWN0dXJlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFBpY3R1cmUocGljdHVyZSk7XHJcbiAgfTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgLy8gICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gIC8vICAgICBzZXRJbWFnZUxvYWRlZCh0cnVlKTtcclxuICAvLyAgIH07XHJcbiAgLy8gICBpbWcuc3JjID0gcGljdHVyZXM7XHJcbiAgLy8gfSwgW3BpY3R1cmVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlTG9hZGVkKHRydWUpO1xyXG4gICAgICB9O1xyXG4gICAgICBpbWcuc3JjID0gc2VsZWN0ZWRQaWN0dXJlO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRQaWN0dXJlKSB7XHJcbiAgICAgIGxvYWRJbWFnZSgpO1xyXG4gICAgfVxyXG4gIH0sIFtzZWxlY3RlZFBpY3R1cmVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwaWN0dXJlLWdyaWQnPlxyXG4gICAgICAgIHtwaWN0dXJlcy5tYXAoKHBpY3R1cmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgdGl0bGU9J3ZpZXcgaW1hZ2UnXHJcbiAgICAgICAgICAgICAgZGF0YS10b2dnbGU9J21vZGFsJ1xyXG4gICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PScjbXlNb2RhbCdcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3RQaWN0dXJlKHBpY3R1cmUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGljdHVyZSdcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBpbWFnZUxvYWRlZCA/ICdub25lJyA6ICdpbmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPEJsdXJoYXNoXHJcbiAgICAgICAgICAgICAgICAgIGhhc2g9J0xrT3llVkUwUipXQz93V0FqWm9mTXtzOlJqb00nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZ3JpZC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17JzMwMHB4J31cclxuICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvblg9ezMyfVxyXG4gICAgICAgICAgICAgICAgICByZXNvbHV0aW9uWT17MzJ9XHJcbiAgICAgICAgICAgICAgICAgIHB1bmNoPXsxfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICFpbWFnZUxvYWRlZCA/ICdub25lJyA6ICdpbmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dyaWQtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICBlZmZlY3Q9J2JsdXInXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YFBpY3R1cmUgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3NlbGVjdGVkUGljdHVyZSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbCBmYWRlJyBpZD0nbXlNb2RhbCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1kaWFsb2cnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZFBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PSdzZWxlY3RlZCBwaWN0dXJlJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljdHVyZXNHcmlkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9