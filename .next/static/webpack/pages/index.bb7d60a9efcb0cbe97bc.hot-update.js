webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/accountDetails.jsx":
/*!**********************************!*\
  !*** ./pages/accountDetails.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\accountDetails.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var AccountDetails = function AccountDetails(_ref) {
  var showAccountDetails = _ref.showAccountDetails,
    setShowAccountDetails = _ref.setShowAccountDetails;
  return __jsx("div", {
    className: "modal ",
    tabIndex: "-1",
    role: "dialog",
    style: {
      display: showAccountDetails ? 'block' : 'none',
      color: 'black'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      background: 'white',
      borderRadius: '10px'
    },
    className: "modal-content  neonText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    type: "button",
    className: "close guest-modal",
    onClick: function onClick() {
      return setShowAccountDetails(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "\xD7")), __jsx("div", {
    className: "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      color: 'white',
      display: 'flex',
      flexDirection: 'column'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      textAlign: 'center',
      marginBottom: '10px',
      fontWeight: 700,
      fontSize: 24
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Cash Gift"), __jsx("span", {
    style: {
      fontSize: 20,
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      color: '#f0f0f0',
      fontSize: '16px',
      marginRight: '10px',
      marginBottom: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "Bank:"), ' ', "Wema Bank"), __jsx("span", {
    style: {
      fontSize: 20,
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      color: '#f0f0f0',
      fontSize: '16px',
      marginRight: '10px',
      marginBottom: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "Name:"), ' ', "Adewale Akinlagun\xA0"), __jsx("span", {
    style: {
      fontSize: 20,
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      color: '#f0f0f0',
      fontSize: '16px',
      marginRight: '10px',
      marginBottom: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "Account Number:"), ' ', "0233584142"))))));
};
_c = AccountDetails;
/* harmony default export */ __webpack_exports__["default"] = (AccountDetails);
var _c;
$RefreshReg$(_c, "AccountDetails");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudERldGFpbHMuanN4Il0sIm5hbWVzIjpbIkFjY291bnREZXRhaWxzIiwiX3JlZiIsInNob3dBY2NvdW50RGV0YWlscyIsInNldFNob3dBY2NvdW50RGV0YWlscyIsIl9fanN4IiwiY2xhc3NOYW1lIiwidGFiSW5kZXgiLCJyb2xlIiwic3R5bGUiLCJkaXNwbGF5IiwiY29sb3IiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsInR5cGUiLCJvbkNsaWNrIiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpblJpZ2h0IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFMUIsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBQyxJQUFBLEVBQXNEO0VBQUEsSUFBaERDLGtCQUFrQixHQUFBRCxJQUFBLENBQWxCQyxrQkFBa0I7SUFBRUMscUJBQXFCLEdBQUFGLElBQUEsQ0FBckJFLHFCQUFxQjtFQUNqRSxPQUNFQyxLQUFBO0lBQ0VDLFNBQVMsRUFBQyxRQUFRO0lBQ2xCQyxRQUFRLEVBQUMsSUFBSTtJQUNiQyxJQUFJLEVBQUMsUUFBUTtJQUNiQyxLQUFLLEVBQUU7TUFDTEMsT0FBTyxFQUFFUCxrQkFBa0IsR0FBRyxPQUFPLEdBQUcsTUFBTTtNQUM5Q1EsS0FBSyxFQUFFO0lBQ1QsQ0FBRTtJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUVGYixLQUFBO0lBQUtDLFNBQVMsRUFBQyxjQUFjO0lBQUNF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RUFBRSxNQUFNO01BQ2hCQyxXQUFXLEVBQUUsTUFBTTtNQUNuQkgsWUFBWSxFQUFFO0lBQ2hCLENBQUU7SUFBQWIsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDSCxPQUVLLENBQUMsRUFBQyxHQUFHLEVBQUMsdUJBRVIsQ0FBQyxFQUNQYixLQUFBO0lBQ0VJLEtBQUssRUFBRTtNQUNMa0IsUUFBUSxFQUFFLEVBQUU7TUFDWmhCLEtBQUssRUFBRTtJQUNULENBQUU7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FFRmIsS0FBQTtJQUNFSSxLQUFLLEVBQUU7TUFDTEUsS0FBSyxFQUFFLFNBQVM7TUFDaEJnQixRQUFRLEVBQUUsTUFBTTtNQUNoQkMsV0FBVyxFQUFFLE1BQU07TUFDbkJILFlBQVksRUFBRTtJQUNoQixDQUFFO0lBQUFiLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0gsaUJBRUssQ0FBQyxFQUFDLEdBQUcsRUFBQyxZQUVSLENBQ0gsQ0FDRixDQUNGLENBQ0YsQ0FDRixDQUFDO0FBRVYsQ0FBQztBQUFDVyxFQUFBLEdBMUdJNUIsY0FBYztBQTRHTEEsNkVBQWMsRUFBQztBQUFBLElBQUE0QixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYjdkNjBhOWVmY2IwY2JlOTdiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFjY291bnREZXRhaWxzID0gKHsgc2hvd0FjY291bnREZXRhaWxzLCBzZXRTaG93QWNjb3VudERldGFpbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT0nbW9kYWwgJ1xyXG4gICAgICB0YWJJbmRleD0nLTEnXHJcbiAgICAgIHJvbGU9J2RpYWxvZydcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBzaG93QWNjb3VudERldGFpbHMgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtZGlhbG9nJyByb2xlPSdkb2N1bWVudCc+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50ICBuZW9uVGV4dCdcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjbG9zZSBndWVzdC1tb2RhbCdcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FjY291bnREZXRhaWxzKGZhbHNlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49J3RydWUnPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keSc+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYXNoIEdpZnRcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZjBmMGYwJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEJhbms6XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgIFdlbWEgQmFua1xyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmMGYwZjAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgQWRld2FsZSBBa2lubGFndW7CoFxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmMGYwZjAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQWNjb3VudCBOdW1iZXI6XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgIDAyMzM1ODQxNDJcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnREZXRhaWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9