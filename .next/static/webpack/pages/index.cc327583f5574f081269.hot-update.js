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
  var pictures = ['assets/images/dwedding (11).jpg', 'assets/images/couple (1).jpg', 'assets/images/dwedding (1).jpg', 'assets/images/dwedding (2).jpg', 'assets/images/couple (4).jpg', 'assets/images/dwedding (5).jpg', 'assets/images/dwedding (6).jpg', 'assets/images/couple (7).jpg', 'assets/images/dwedding (7).jpg', 'assets/images/couple (8).jpg', 'assets/images/dwedding (8).jpg', 'assets/images/couple (9).jpg', 'assets/images/dwedding (9).jpg', 'assets/images/couple (13).jpg', 'assets/images/dwedding (10).jpg'];
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
      lineNumber: 54,
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
        lineNumber: 57,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: picture,
      className: "grid-img",
      alt: "Picture ".concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }
    })));
  })), selectedPicture && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "modal fade",
    id: "myModal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-dialog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGljdHVyZUdyaWQuanN4Il0sIm5hbWVzIjpbIlBpY3R1cmVzR3JpZCIsIl9zIiwicGljdHVyZXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUGljdHVyZSIsInNldFNlbGVjdGVkUGljdHVyZSIsIl91c2VTdGF0ZTIiLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwiX3VzZVN0YXRlMyIsImxvYWRlZEltYWdlc0NvdW50Iiwic2V0TG9hZGVkSW1hZ2VzQ291bnQiLCJoYW5kbGVTZWxlY3RQaWN0dXJlIiwicGljdHVyZSIsIl9fanN4IiwiUmVhY3QiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJtYXAiLCJpbmRleCIsInRpdGxlIiwib25DbGljayIsImtleSIsInNyYyIsImFsdCIsImNvbmNhdCIsImlkIiwic3R5bGUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDYTtBQUN0QjtBQUMxQyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0VBQUFDLEVBQUE7RUFDekIsSUFBTUMsUUFBUSxHQUFHLENBQ2YsaUNBQWlDLEVBQ2pDLDhCQUE4QixFQUM5QixnQ0FBZ0MsRUFDaEMsZ0NBQWdDLEVBRWhDLDhCQUE4QixFQUM5QixnQ0FBZ0MsRUFDaEMsZ0NBQWdDLEVBRWhDLDhCQUE4QixFQUM5QixnQ0FBZ0MsRUFDaEMsOEJBQThCLEVBQzlCLGdDQUFnQyxFQUNoQyw4QkFBOEIsRUFDOUIsZ0NBQWdDLEVBQ2hDLCtCQUErQixFQUMvQixpQ0FBaUMsQ0FDbEM7RUFDRCxJQUFBQyxTQUFBLEdBQThDQyxzREFBUSxDQUFDLElBQUks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Q0ZOLEdBQUcsRUFBRTFCLGVBQWdCO0lBQ3JCMkIsR0FBRyxFQUFDLGtCQUFrQjtJQUFBYixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUN2QixDQUNFLENBQ0YsQ0FDRixDQUNGLENBQ0wsQ0FFSixDQUFDO0FBRVAsQ0FBQztBQUFDeEIsRUFBQSxDQWpISUQsWUFBWTtBQUFBc0MsRUFBQSxHQUFadEMsWUFBWTtBQW1ISEEsMkVBQVksRUFBQztBQUFBLElBQUFzQyxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYzMyNzU4M2Y1NTc0ZjA4MTI2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmx1cmhhc2ggfSBmcm9tICdyZWFjdC1ibHVyaGFzaCc7XHJcbmNvbnN0IFBpY3R1cmVzR3JpZCA9ICgpID0+IHtcclxuICBjb25zdCBwaWN0dXJlcyA9IFtcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICgxMSkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2NvdXBsZSAoMSkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICgxKS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDIpLmpwZycsXHJcblxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg0KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDUpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9kd2VkZGluZyAoNikuanBnJyxcclxuXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDcpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9kd2VkZGluZyAoNykuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2NvdXBsZSAoOCkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICg4KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg5KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDkpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDEzKS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDEwKS5qcGcnLFxyXG4gIF07XHJcbiAgY29uc3QgW3NlbGVjdGVkUGljdHVyZSwgc2V0U2VsZWN0ZWRQaWN0dXJlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkZWRJbWFnZXNDb3VudCwgc2V0TG9hZGVkSW1hZ2VzQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0UGljdHVyZSA9IChwaWN0dXJlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFBpY3R1cmUocGljdHVyZSk7XHJcbiAgfTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgbG9hZEltYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgZm9yIChjb25zdCBwaWN0dXJlIG9mIHBpY3R1cmVzKSB7XHJcbiAgLy8gICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgLy8gICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAvLyAgICAgICAgIHNldExvYWRlZEltYWdlc0NvdW50KChwcmV2Q291bnQpID0+IHByZXZDb3VudCArIDEpO1xyXG4gIC8vICAgICAgIH07XHJcblxyXG4gIC8vICAgICAgIGltZy5zcmMgPSBwaWN0dXJlO1xyXG4gIC8vICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiAoaW1nLm9ubG9hZCA9IHJlc29sdmUpKTtcclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgICAgLy8gc2V0SW1hZ2VMb2FkZWQodHJ1ZSk7XHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIGxvYWRJbWFnZXMoKTtcclxuXHJcbiAgLy8gICBpZiAobG9hZGVkSW1hZ2VzQ291bnQgPT09IHBpY3R1cmVzLmxlbmd0aCkge1xyXG4gIC8vICAgICBzZXRJbWFnZUxvYWRlZCh0cnVlKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbcGljdHVyZXMsIGxvYWRlZEltYWdlc0NvdW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGljdHVyZS1ncmlkJz5cclxuICAgICAgICB7cGljdHVyZXMubWFwKChwaWN0dXJlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHRpdGxlPSd2aWV3IGltYWdlJ1xyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPSdtb2RhbCdcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD0nI215TW9kYWwnXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0UGljdHVyZShwaWN0dXJlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3BpY3R1cmUnXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IGltYWdlTG9hZGVkID8gJ25vbmUnIDogJ2lubGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8Qmx1cmhhc2hcclxuICAgICAgICAgICAgICAgICAgaGFzaD0nTGtPeWVWRTBSKldDP3dXQWpab2ZNe3M6UmpvTSdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdncmlkLWltZydcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMzAwcHgnfVxyXG4gICAgICAgICAgICAgICAgICByZXNvbHV0aW9uWD17MzJ9XHJcbiAgICAgICAgICAgICAgICAgIHJlc29sdXRpb25ZPXszMn1cclxuICAgICAgICAgICAgICAgICAgcHVuY2g9ezF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAhaW1hZ2VMb2FkZWQgPyAnbm9uZScgOiAnaW5saW5lJyB9fT4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dyaWQtaW1nJ1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0PSdibHVyJ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cclxuICAgICAgICAgICAgICAgIGFsdD17YFBpY3R1cmUgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dyaWQtaW1nJ1xyXG4gICAgICAgICAgICAgICAgYWx0PXtgUGljdHVyZSAke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2VsZWN0ZWRQaWN0dXJlICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsIGZhZGUnIGlkPSdteU1vZGFsJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWRpYWxvZyc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzcwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkUGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J3NlbGVjdGVkIHBpY3R1cmUnXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWN0dXJlc0dyaWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=