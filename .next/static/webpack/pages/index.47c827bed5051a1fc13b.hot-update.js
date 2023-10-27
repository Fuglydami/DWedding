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
  var pictures = ['assets/images/couple (1).jpg',
  // 'assets/images/couple (2).jpg',
  // 'assets/images/couple (3).jpg',
  'assets/images/couple (4).jpg',
  // 'assets/images/couple (5).jpg',
  // 'assets/images/couple (6).jpg',
  'assets/images/couple (7).jpg', 'assets/images/couple (8).jpg', 'assets/images/couple (9).jpg',
  // 'assets/images/couple (10).jpg',
  // 'assets/images/couple (11).jpg',
  // 'assets/images/couple (12).jpg',
  'assets/images/couple (13).jpg'];
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
  // useEffect(() => {
  //   const loadImages = async () => {
  //     for (const picture of pictures) {
  //       const img = new Image();
  //       img.onload = () => {
  //         setLoadedImagesCount((prevCount) => prevCount + 1);
  //       };

  //       img.src = picture;
  //       await new Promise((resolve) => (img.onload = resolve));
  //     }

  //     // setImageLoaded(true);
  //   };

  //   loadImages();

  //   if (loadedImagesCount === pictures.length) {
  //     setImageLoaded(true);
  //   }
  // }, [pictures, loadedImagesCount]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "picture-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
        lineNumber: 53,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: picture,
      className: "grid-img",
      alt: "Picture ".concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    })));
  })), selectedPicture && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "modal fade",
    id: "myModal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-dialog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGljdHVyZUdyaWQuanN4Il0sIm5hbWVzIjpbIlBpY3R1cmVzR3JpZCIsIl9zIiwicGljdHVyZXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUGljdHVyZSIsInNldFNlbGVjdGVkUGljdHVyZSIsIl91c2VTdGF0ZTIiLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwiX3VzZVN0YXRlMyIsImxvYWRlZEltYWdlc0NvdW50Iiwic2V0TG9hZGVkSW1hZ2VzQ291bnQiLCJoYW5kbGVTZWxlY3RQaWN0dXJlIiwicGljdHVyZSIsIl9fanN4IiwiUmVhY3QiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJtYXAiLCJpbmRleCIsInRpdGxlIiwib25DbGljayIsImtleSIsInNyYyIsImFsdCIsImNvbmNhdCIsImlkIiwic3R5bGUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDYTtBQUN0QjtBQUMxQyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0VBQUFDLEVBQUE7RUFDekIsSUFBTUMsUUFBUSxHQUFHLENBQ2YsOEJBQThCO0VBQzlCO0VBQ0E7RUFDQSw4QkFBOEI7RUFDOUI7RUFDQTtFQUNBLDhCQUE4QixFQUM5Qiw4QkFBOEIsRUFDOUIsOEJBQThCO0VBQzlCO0VBQ0E7RUFDQTtFQUNBLCtCQUErQixDQUNoQztFQUNELElBQUFDLFNBQUEsR0FBOENDLHNEQUFRLENBQUMsSUFBSSxDQUFDO0lBQXJEQyxlQUFlLEdBQUFGLFNBQUE7SUFBRUcsa0JBQWtCLEdBQUFILFNBQUE7RUFDMUMsSUFBQUksVUFBQSxHQUFzQ0gsc0RBQVEs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QUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ3ZCLENBQ0UsQ0FDRixDQUNGLENBQ0YsQ0FDTCxDQUVKLENBQUM7QUFFUCxDQUFDO0FBQUN4QixFQUFBLENBN0dJRCxZQUFZO0FBQUFzQyxFQUFBLEdBQVp0QyxZQUFZO0FBK0dIQSwyRUFBWSxFQUFDO0FBQUEsSUFBQXNDLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ3YzgyN2JlZDUwNTFhMWZjMTNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbHVyaGFzaCB9IGZyb20gJ3JlYWN0LWJsdXJoYXNoJztcclxuY29uc3QgUGljdHVyZXNHcmlkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBpY3R1cmVzID0gW1xyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgxKS5qcGcnLFxyXG4gICAgLy8gJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgyKS5qcGcnLFxyXG4gICAgLy8gJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgzKS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg0KS5qcGcnLFxyXG4gICAgLy8gJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg1KS5qcGcnLFxyXG4gICAgLy8gJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg2KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg3KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg4KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg5KS5qcGcnLFxyXG4gICAgLy8gJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgxMCkuanBnJyxcclxuICAgIC8vICdhc3NldHMvaW1hZ2VzL2NvdXBsZSAoMTEpLmpwZycsXHJcbiAgICAvLyAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDEyKS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgxMykuanBnJyxcclxuICBdO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBpY3R1cmUsIHNldFNlbGVjdGVkUGljdHVyZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGVkSW1hZ2VzQ291bnQsIHNldExvYWRlZEltYWdlc0NvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdFBpY3R1cmUgPSAocGljdHVyZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRQaWN0dXJlKHBpY3R1cmUpO1xyXG4gIH07XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IGxvYWRJbWFnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIGZvciAoY29uc3QgcGljdHVyZSBvZiBwaWN0dXJlcykge1xyXG4gIC8vICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIC8vICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgLy8gICAgICAgICBzZXRMb2FkZWRJbWFnZXNDb3VudCgocHJldkNvdW50KSA9PiBwcmV2Q291bnQgKyAxKTtcclxuICAvLyAgICAgICB9O1xyXG5cclxuICAvLyAgICAgICBpbWcuc3JjID0gcGljdHVyZTtcclxuICAvLyAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gKGltZy5vbmxvYWQgPSByZXNvbHZlKSk7XHJcbiAgLy8gICAgIH1cclxuXHJcbiAgLy8gICAgIC8vIHNldEltYWdlTG9hZGVkKHRydWUpO1xyXG4gIC8vICAgfTtcclxuXHJcbiAgLy8gICBsb2FkSW1hZ2VzKCk7XHJcblxyXG4gIC8vICAgaWYgKGxvYWRlZEltYWdlc0NvdW50ID09PSBwaWN0dXJlcy5sZW5ndGgpIHtcclxuICAvLyAgICAgc2V0SW1hZ2VMb2FkZWQodHJ1ZSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW3BpY3R1cmVzLCBsb2FkZWRJbWFnZXNDb3VudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZCc+XHJcbiAgICAgICAge3BpY3R1cmVzLm1hcCgocGljdHVyZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICB0aXRsZT0ndmlldyBpbWFnZSdcclxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT0nbW9kYWwnXHJcbiAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9JyNteU1vZGFsJ1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdFBpY3R1cmUocGljdHVyZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwaWN0dXJlJ1xyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBpbWFnZUxvYWRlZCA/ICdub25lJyA6ICdpbmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPEJsdXJoYXNoXHJcbiAgICAgICAgICAgICAgICAgIGhhc2g9J0xrT3llVkUwUipXQz93V0FqWm9mTXtzOlJqb00nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZ3JpZC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17JzMwMHB4J31cclxuICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvblg9ezMyfVxyXG4gICAgICAgICAgICAgICAgICByZXNvbHV0aW9uWT17MzJ9XHJcbiAgICAgICAgICAgICAgICAgIHB1bmNoPXsxfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogIWltYWdlTG9hZGVkID8gJ25vbmUnIDogJ2lubGluZScgfX0+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdncmlkLWltZydcclxuICAgICAgICAgICAgICAgIGVmZmVjdD0nYmx1cidcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2BQaWN0dXJlICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdncmlkLWltZydcclxuICAgICAgICAgICAgICAgIGFsdD17YFBpY3R1cmUgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3NlbGVjdGVkUGljdHVyZSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbCBmYWRlJyBpZD0nbXlNb2RhbCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1kaWFsb2cnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZFBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PSdzZWxlY3RlZCBwaWN0dXJlJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljdHVyZXNHcmlkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9