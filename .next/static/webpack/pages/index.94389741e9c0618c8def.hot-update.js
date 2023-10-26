webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/stories.jsx":
/*!***************************!*\
  !*** ./pages/stories.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/swiper-bundle.min.css */ "./node_modules/swiper/swiper-bundle.min.css");
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _node_modules_swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/swiper/swiper-bundle.css */ "./node_modules/swiper/swiper-bundle.css");
/* harmony import */ var _node_modules_swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\stories.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

var content = [{
  title: 'Bride',
  desc: "Out of the blues I saw a request, I checked it and it was this\n    beautiful lady. I accepted it immediately and started checking her TL.\n    On the 4th of April 2016, I sent her a DM and we started talking. We\n    became really really close. Later in November I asked her to be my\n    girlfriend and here we are today\uD83E\uDD70 getting married.",
  image: 'assets/images/background.jpg'
}, {
  title: 'Groom',
  desc: "Out of the blues I saw a request, I checked it and it was this\n    beautiful lady. I accepted it immediately and started checking her TL.\n    On the 4th of April 2016, I sent her a DM and we started talking. We\n    became really really close. Later in November I asked her to be my\n    girlfriend and here we are today\uD83E\uDD70 getting married.",
  image: 'assets/images/pic (1).jpg'
}];
var Stories = function Stories() {
  swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_4__["Autoplay"]]);
  return __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__["Swiper"], {
    spaceBetween: 50,
    slidesPerView: 1,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    modules: [swiper__WEBPACK_IMPORTED_MODULE_4__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_4__["Autoplay"]],
    pagination: {
      clickable: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, content.map(function (item) {
    var title = item.title,
      image = item.image,
      desc = item.desc;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__["SwiperSlide"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "bride-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "stories-img-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx("img", {
      style: {
        objectFit: 'cover',
        width: '100rem',
        height: '25rem'
      },
      src: image,
      alt: "".concat(title, " stories"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, __jsx("h2", {
      className: "groom-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 19
      }
    }, title), __jsx("article", {
      className: "groom-paragraph",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }
    }, desc)))));
  }));
};
_c = Stories;
/* harmony default export */ __webpack_exports__["default"] = (Stories);
var _c;
$RefreshReg$(_c, "Stories");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3Rvcmllcy5qc3giXSwibmFtZXMiOlsiY29udGVudCIsInRpdGxlIiwiZGVzYyIsImltYWdlIiwiU3RvcmllcyIsIlN3aXBlckNvcmUiLCJ1c2UiLCJBdXRvcGxheSIsIl9fanN4IiwiU3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsIm1vZHVsZXMiLCJQYWdpbmF0aW9uIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJtYXAiLCJpdGVtIiwiUmVhY3QiLCJGcmFnbWVudCIsIlN3aXBlclNsaWRlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvYmplY3RGaXQiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImFsdCIsImNvbmNhdCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2I7QUFDUDtBQUNLO0FBQ1U7QUFDOUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUNkO0VBQ0VDLEtBQUssRUFBRSxPQUFPO0VBQ2RDLElBQUksbVdBSWdEO0VBQ3BEQyxLQUFLLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDRUYsS0FBSyxFQUFFLE9BQU87RUFDZEMsSUFBSSxtV0FJZ0Q7RUFDcERDLEtBQUssRUFBRTtBQUNULENBQUMsQ0FDRjtBQUNELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQVM7RUFDcEJDLDhDQUFVLENBQUNDLEdBQUcsQ0FBQyxDQUFDQywrQ0FBUSxDQUFDLENBQUM7RUFFMUIsT0FDRUMsS0FBQSxDQUFDQyxtREFBTTtJQUNMQyxZQUFZLEVBQUUsRUFBRztJQUNqQkMsYUFBYSxFQUFFLENBQUU7SUFDakJDLFFBQVEsRUFBRTtNQUNSQyxLQUFLLEVBQUUsS0FBSztNQUNaQyxvQkFBb0IsRUFBRTtJQUN4QixDQUFFO0lBQ0ZDLE9BQU8sRUFBRSxDQUFDQyxpREFBVSxFQUFFVCwrQ0FBUSxDQUFFO0lBQ2hDVSxVQUFVLEVBQUU7TUFBRUMsU0FBUyxFQUFFO0lBQUssQ0FBRTtJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUUvQnpCLE9BQU8sQ0FBQzBCLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUs7SUFDckIsSUFBUTFCLEtBQUssR0FBa0IwQixJQUFJLENBQTNCMUIsS0FBSztNQUFFRSxLQUFLLEdBQVd3QixJQUFJLENBQXBCeEIsS0FBSztNQUFFRCxJQUFJLEdBQUt5QixJQUFJLENBQWJ6QixJQUFJO0lBQzFCLE9BQ0VNLEtBQUEsQ0FBQW9CLDRDQUFBLENBQUFDLFFBQUEsUUFDRXJCLEtBQUEsQ0FBQ3NCLHdEQUFXO01BQUFYLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQ1ZqQixLQUFBO01BQUt1QixTQUFTLEVBQUMsaUJBQWlCO01BQUFaLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQzlCakIsS0FBQTtNQUFLdUIsU0FBUyxFQUFDLHVCQUF1QjtNQUFBWixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxHQUNwQ2pCLEtBQUE7TUFDRXdCLEtBQUssRUFBRTtRQUNMQyxTQUFTLEVBQUUsT0FBTztRQUNsQkMsS0FBSyxFQUFFLFFBQVE7UUFDZkMsTUFBTSxFQUFFO01BQ1YsQ0FBRTtNQUNGQyxHQUFHLEVBQUVqQyxLQUFNO01BQ1hrQyxHQUFHLEtBQUFDLE1BQUEsQ0FBS3JDLEtBQUssYUFBVztNQUFBa0IsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsQ0FDekIsQ0FDRSxDQUFDLEVBQ05qQixLQUFBO01BQUFXLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQ0VqQixLQUFBO01BQUl1QixTQUFTLEVBQUMsYUFBYTtNQUFBWixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxHQUFFeEIsS0FBVSxDQUFDLEVBQ3hDTyxLQUFBO01BQVN1QixTQUFTLEVBQUMsaUJBQWlCO01BQUFaLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQUV2QixJQUFjLENBQ2pELENBQ0YsQ0FDTSxDQUNiLENBQUM7RUFFUCxDQUFDLENBQ0ssQ0FBQztBQUViLENBQUM7QUFBQ3FDLEVBQUEsR0ExQ0luQyxPQUFPO0FBNENFQSxzRUFBTyxFQUFDO0FBQUEsSUFBQW1DLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk0Mzg5NzQxZTljMDYxOGM4ZGVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuaW1wb3J0ICdzd2lwZXIvc3dpcGVyLWJ1bmRsZS5taW4uY3NzJztcclxuaW1wb3J0ICdzd2lwZXIvc3dpcGVyLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IFN3aXBlckNvcmUsIHsgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLWJ1bmRsZS5jc3MnO1xyXG5cclxuLy8gaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuLy8gaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xyXG4vLyBpbXBvcnQgJ3N3aXBlci9jc3MvYXV0b3BsYXknO1xyXG5cclxuY29uc3QgY29udGVudCA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0JyaWRlJyxcclxuICAgIGRlc2M6IGBPdXQgb2YgdGhlIGJsdWVzIEkgc2F3IGEgcmVxdWVzdCwgSSBjaGVja2VkIGl0IGFuZCBpdCB3YXMgdGhpc1xyXG4gICAgYmVhdXRpZnVsIGxhZHkuIEkgYWNjZXB0ZWQgaXQgaW1tZWRpYXRlbHkgYW5kIHN0YXJ0ZWQgY2hlY2tpbmcgaGVyIFRMLlxyXG4gICAgT24gdGhlIDR0aCBvZiBBcHJpbCAyMDE2LCBJIHNlbnQgaGVyIGEgRE0gYW5kIHdlIHN0YXJ0ZWQgdGFsa2luZy4gV2VcclxuICAgIGJlY2FtZSByZWFsbHkgcmVhbGx5IGNsb3NlLiBMYXRlciBpbiBOb3ZlbWJlciBJIGFza2VkIGhlciB0byBiZSBteVxyXG4gICAgZ2lybGZyaWVuZCBhbmQgaGVyZSB3ZSBhcmUgdG9kYXnwn6WwIGdldHRpbmcgbWFycmllZC5gLFxyXG4gICAgaW1hZ2U6ICdhc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnR3Jvb20nLFxyXG4gICAgZGVzYzogYE91dCBvZiB0aGUgYmx1ZXMgSSBzYXcgYSByZXF1ZXN0LCBJIGNoZWNrZWQgaXQgYW5kIGl0IHdhcyB0aGlzXHJcbiAgICBiZWF1dGlmdWwgbGFkeS4gSSBhY2NlcHRlZCBpdCBpbW1lZGlhdGVseSBhbmQgc3RhcnRlZCBjaGVja2luZyBoZXIgVEwuXHJcbiAgICBPbiB0aGUgNHRoIG9mIEFwcmlsIDIwMTYsIEkgc2VudCBoZXIgYSBETSBhbmQgd2Ugc3RhcnRlZCB0YWxraW5nLiBXZVxyXG4gICAgYmVjYW1lIHJlYWxseSByZWFsbHkgY2xvc2UuIExhdGVyIGluIE5vdmVtYmVyIEkgYXNrZWQgaGVyIHRvIGJlIG15XHJcbiAgICBnaXJsZnJpZW5kIGFuZCBoZXJlIHdlIGFyZSB0b2RhefCfpbAgZ2V0dGluZyBtYXJyaWVkLmAsXHJcbiAgICBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvcGljICgxKS5qcGcnLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IFN0b3JpZXMgPSAoKSA9PiB7XHJcbiAgU3dpcGVyQ29yZS51c2UoW0F1dG9wbGF5XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3dpcGVyXHJcbiAgICAgIHNwYWNlQmV0d2Vlbj17NTB9XHJcbiAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgIGF1dG9wbGF5PXt7XHJcbiAgICAgICAgZGVsYXk6IDEwMDAwLFxyXG4gICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgfX1cclxuICAgICAgbW9kdWxlcz17W1BhZ2luYXRpb24sIEF1dG9wbGF5XX1cclxuICAgICAgcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuICAgID5cclxuICAgICAge2NvbnRlbnQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgaW1hZ2UsIGRlc2MgfSA9IGl0ZW07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJpZGUtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdG9yaWVzLWltZy1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwcmVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzI1cmVtJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHt0aXRsZX0gc3Rvcmllc2B9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2dyb29tLXRpdGxlJz57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPSdncm9vbS1wYXJhZ3JhcGgnPntkZXNjfTwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L1N3aXBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmllcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==