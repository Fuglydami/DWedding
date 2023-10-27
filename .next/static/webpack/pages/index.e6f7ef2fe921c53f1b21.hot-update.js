webpackHotUpdate_N_E("pages/index",{

/***/ "./src/config/app.js":
/*!***************************!*\
  !*** ./src/config/app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var baseConfig = {
  weddingDay: 'Saturday',
  weddingTime: '8am - 8pm',
  weddingDate: 'Dec 16, 2023',
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: '2023-12-16T19:00:00+08:00',
    timeEndISO: '2023-12-16T21:00:00+08:00'
  },
  coupleInfo: {
    brideName: 'Oladunni ',
    groomName: 'Adewale',
    coupleNameFormat: 'GROOM_FIRST',
    hashtag: '#DWedding'
  },
  venue: {
    name: 'Lahl Bevent Center',
    addressLine1: '111 obafemi awolowo way ikeja Lagos, Nigeria',
    // addressLine2: 'Eko hotel V.I Lagos State',
    city: 'Lagos',
    country: 'Nigeria',
    mapUrl: 'https://maps.app.goo.gl/KhoFDMUntbTU6L3y9'
  },
  logo: {
    headerLogo: 'assets/images/ring-svg.png',
    footerLogo: 'assets/video/aw-ring-logo-ticker.mp4',
    footerLogoType: 'mp4'
  },
  ogTags: {
    logo: 'assets/images/aw-ring-logo.png',
    siteName: 'https://fuglydami.github.io/adewale-wedding/',
    publishedTime: '2023-09-07'
  },
  storyContent: [{
    title: 'Bride',
    desc: "Out of the blues I saw a request, I checked it and it was this\n      beautiful lady. I accepted it immediately and started checking her TL.\n      On the 4th of April 2016, I sent her a DM and we started talking. We\n      became really really close. Later in November I asked her to be my\n      girlfriend and here we are today\uD83E\uDD70 getting married.",
    image: 'assets/images/background.jpg'
  }, {
    title: 'Groom',
    desc: "Out of the blues I saw a request, I checked it and it was this\n      beautiful lady. I accepted it immediately and started checking her TL.\n      On the 4th of April 2016, I sent her a DM and we started talking. We\n      became really really close. Later in November I asked her to be my\n      girlfriend and here we are today\uD83E\uDD70 getting married.",
    image: 'assets/images/pic (8).jpg'
  }]
};
var lang = {
  id: {
    weddingDay: 'Sabtu',
    weddingDate: '22 Februari 2020',
    venue: _objectSpread(_objectSpread({}, baseConfig.venue), {}, {
      name: 'Hotel Oval',
      addressLine2: 'Surabaya, Jawa Timur, 60241,'
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({}, baseConfig), {}, {
  lang: lang
}));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbmZpZy9hcHAuanMiXSwibmFtZXMiOlsiYmFzZUNvbmZpZyIsIndlZGRpbmdEYXkiLCJ3ZWRkaW5nVGltZSIsIndlZGRpbmdEYXRlIiwic2hvd0J1aWx0V2l0aEluZm8iLCJzaG93UXJDb2RlIiwiY2FsZW5kYXJJbmZvIiwidGltZVN0YXJ0SVNPIiwidGltZUVuZElTTyIsImNvdXBsZUluZm8iLCJicmlkZU5hbWUiLCJncm9vbU5hbWUiLCJjb3VwbGVOYW1lRm9ybWF0IiwiaGFzaHRhZyIsInZlbnVlIiwibmFtZSIsImFkZHJlc3NMaW5lMSIsImNpdHkiLCJjb3VudHJ5IiwibWFwVXJsIiwibG9nbyIsImhlYWRlckxvZ28iLCJmb290ZXJMb2dvIiwiZm9vdGVyTG9nb1R5cGUiLCJvZ1RhZ3MiLCJzaXRlTmFtZSIsInB1Ymxpc2hlZFRpbWUiLCJzdG9yeUNvbnRlbnQiLCJ0aXRsZSIsImRlc2MiLCJpbWFnZSIsImxhbmciLCJpZCIsIl9vYmplY3RTcHJlYWQiLCJhZGRyZXNzTGluZTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVUsR0FBRztFQUNqQkMsVUFBVSxFQUFFLFVBQVU7RUFDdEJDLFdBQVcsRUFBRSxXQUFXO0VBQ3hCQyxXQUFXLEVBQUUsY0FBYztFQUMzQkMsaUJBQWlCLEVBQUUsSUFBSTtFQUN2QkMsVUFBVSxFQUFFLEtBQUs7RUFDakJDLFlBQVksRUFBRTtJQUNaQyxZQUFZLEVBQUUsMkJBQTJCO0lBQ3pDQyxVQUFVLEVBQUU7RUFDZCxDQUFDO0VBQ0RDLFVBQVUsRUFBRTtJQUNWQyxTQUFTLEVBQUUsV0FBVztJQUN0QkMsU0FBUyxFQUFFLFNBQVM7SUFDcEJDLGdCQUFnQixFQUFFLGFBQWE7SUFDL0JDLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDREMsS0FBSyxFQUFFO0lBQ0xDLElBQUksRUFBRSxvQkFBb0I7SUFDMUJDLFlBQVksRUFBRSw4Q0FBOEM7SUFDNUQ7SUFDQUMsSUFBSSxFQUFFLE9BQU87SUFDYkMsT0FBTyxFQUFFLFNBQVM7SUFDbEJDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREMsSUFBSSxFQUFFO0lBQ0pDLFVBQVUsRUFBRSw0QkFBNEI7SUFDeENDLFVBQVUsRUFBRSxzQ0FBc0M7SUFDbERDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RDLE1BQU0sRUFBRTtJQUNOSixJQUFJLEVBQUUsZ0NBQWdDO0lBQ3RDSyxRQUFRLEVBQUUsOENBQThDO0lBQ3hEQyxhQUFhLEVBQUU7RUFDakIsQ0FBQztFQUNEQyxZQUFZLEVBQUUsQ0FDWjtJQUNFQyxLQUFLLEVBQUUsT0FBTztJQUNkQyxJQUFJLDJXQUlnRDtJQUNwREMsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUNEO0lBQ0VGLEtBQUssRUFBRSxPQUFPO0lBQ2RDLElBQUksMldBSWdEO0lBQ3BEQyxLQUFLLEVBQUU7RUFDVCxDQUFDO0FBRUwsQ0FBQztBQUVELElBQU1DLElBQUksR0FBRztFQUNYQyxFQUFFLEVBQUU7SUFDRi9CLFVBQVUsRUFBRSxPQUFPO0lBQ25CRSxXQUFXLEVBQUUsa0JBQWtCO0lBQy9CVyxLQUFLLEVBQUFtQixhQUFBLENBQUFBLGFBQUEsS0FDQWpDLFVBQVUsQ0FBQ2MsS0FBSztNQUNuQkMsSUFBSSxFQUFFLFlBQVk7TUFDbEJtQixZQUFZLEVBQUU7SUFBOEI7RUFFaEQ7QUFDRixDQUFDO0FBRURELDRFQUFBLENBQUFBLGFBQUEsS0FDS2pDLFVBQVU7RUFDYitCLElBQUksRUFBSkE7QUFBSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNmY3ZWYyZmU5MjFjNTNmMWIyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFzZUNvbmZpZyA9IHtcbiAgd2VkZGluZ0RheTogJ1NhdHVyZGF5JyxcbiAgd2VkZGluZ1RpbWU6ICc4YW0gLSA4cG0nLFxuICB3ZWRkaW5nRGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gIHNob3dCdWlsdFdpdGhJbmZvOiB0cnVlLFxuICBzaG93UXJDb2RlOiBmYWxzZSxcbiAgY2FsZW5kYXJJbmZvOiB7XG4gICAgdGltZVN0YXJ0SVNPOiAnMjAyMy0xMi0xNlQxOTowMDowMCswODowMCcsXG4gICAgdGltZUVuZElTTzogJzIwMjMtMTItMTZUMjE6MDA6MDArMDg6MDAnLFxuICB9LFxuICBjb3VwbGVJbmZvOiB7XG4gICAgYnJpZGVOYW1lOiAnT2xhZHVubmkgJyxcbiAgICBncm9vbU5hbWU6ICdBZGV3YWxlJyxcbiAgICBjb3VwbGVOYW1lRm9ybWF0OiAnR1JPT01fRklSU1QnLFxuICAgIGhhc2h0YWc6ICcjRFdlZGRpbmcnLFxuICB9LFxuICB2ZW51ZToge1xuICAgIG5hbWU6ICdMYWhsIEJldmVudCBDZW50ZXInLFxuICAgIGFkZHJlc3NMaW5lMTogJzExMSBvYmFmZW1pIGF3b2xvd28gd2F5IGlrZWphIExhZ29zLCBOaWdlcmlhJyxcbiAgICAvLyBhZGRyZXNzTGluZTI6ICdFa28gaG90ZWwgVi5JIExhZ29zIFN0YXRlJyxcbiAgICBjaXR5OiAnTGFnb3MnLFxuICAgIGNvdW50cnk6ICdOaWdlcmlhJyxcbiAgICBtYXBVcmw6ICdodHRwczovL21hcHMuYXBwLmdvby5nbC9LaG9GRE1VbnRiVFU2TDN5OScsXG4gIH0sXG4gIGxvZ286IHtcbiAgICBoZWFkZXJMb2dvOiAnYXNzZXRzL2ltYWdlcy9yaW5nLXN2Zy5wbmcnLFxuICAgIGZvb3RlckxvZ286ICdhc3NldHMvdmlkZW8vYXctcmluZy1sb2dvLXRpY2tlci5tcDQnLFxuICAgIGZvb3RlckxvZ29UeXBlOiAnbXA0JyxcbiAgfSxcbiAgb2dUYWdzOiB7XG4gICAgbG9nbzogJ2Fzc2V0cy9pbWFnZXMvYXctcmluZy1sb2dvLnBuZycsXG4gICAgc2l0ZU5hbWU6ICdodHRwczovL2Z1Z2x5ZGFtaS5naXRodWIuaW8vYWRld2FsZS13ZWRkaW5nLycsXG4gICAgcHVibGlzaGVkVGltZTogJzIwMjMtMDktMDcnLFxuICB9LFxuICBzdG9yeUNvbnRlbnQ6IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ0JyaWRlJyxcbiAgICAgIGRlc2M6IGBPdXQgb2YgdGhlIGJsdWVzIEkgc2F3IGEgcmVxdWVzdCwgSSBjaGVja2VkIGl0IGFuZCBpdCB3YXMgdGhpc1xuICAgICAgYmVhdXRpZnVsIGxhZHkuIEkgYWNjZXB0ZWQgaXQgaW1tZWRpYXRlbHkgYW5kIHN0YXJ0ZWQgY2hlY2tpbmcgaGVyIFRMLlxuICAgICAgT24gdGhlIDR0aCBvZiBBcHJpbCAyMDE2LCBJIHNlbnQgaGVyIGEgRE0gYW5kIHdlIHN0YXJ0ZWQgdGFsa2luZy4gV2VcbiAgICAgIGJlY2FtZSByZWFsbHkgcmVhbGx5IGNsb3NlLiBMYXRlciBpbiBOb3ZlbWJlciBJIGFza2VkIGhlciB0byBiZSBteVxuICAgICAgZ2lybGZyaWVuZCBhbmQgaGVyZSB3ZSBhcmUgdG9kYXnwn6WwIGdldHRpbmcgbWFycmllZC5gLFxuICAgICAgaW1hZ2U6ICdhc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnR3Jvb20nLFxuICAgICAgZGVzYzogYE91dCBvZiB0aGUgYmx1ZXMgSSBzYXcgYSByZXF1ZXN0LCBJIGNoZWNrZWQgaXQgYW5kIGl0IHdhcyB0aGlzXG4gICAgICBiZWF1dGlmdWwgbGFkeS4gSSBhY2NlcHRlZCBpdCBpbW1lZGlhdGVseSBhbmQgc3RhcnRlZCBjaGVja2luZyBoZXIgVEwuXG4gICAgICBPbiB0aGUgNHRoIG9mIEFwcmlsIDIwMTYsIEkgc2VudCBoZXIgYSBETSBhbmQgd2Ugc3RhcnRlZCB0YWxraW5nLiBXZVxuICAgICAgYmVjYW1lIHJlYWxseSByZWFsbHkgY2xvc2UuIExhdGVyIGluIE5vdmVtYmVyIEkgYXNrZWQgaGVyIHRvIGJlIG15XG4gICAgICBnaXJsZnJpZW5kIGFuZCBoZXJlIHdlIGFyZSB0b2RhefCfpbAgZ2V0dGluZyBtYXJyaWVkLmAsXG4gICAgICBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvcGljICg4KS5qcGcnLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCBsYW5nID0ge1xuICBpZDoge1xuICAgIHdlZGRpbmdEYXk6ICdTYWJ0dScsXG4gICAgd2VkZGluZ0RhdGU6ICcyMiBGZWJydWFyaSAyMDIwJyxcbiAgICB2ZW51ZToge1xuICAgICAgLi4uYmFzZUNvbmZpZy52ZW51ZSxcbiAgICAgIG5hbWU6ICdIb3RlbCBPdmFsJyxcbiAgICAgIGFkZHJlc3NMaW5lMjogJ1N1cmFiYXlhLCBKYXdhIFRpbXVyLCA2MDI0MSwnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLmJhc2VDb25maWcsXG4gIGxhbmcsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==