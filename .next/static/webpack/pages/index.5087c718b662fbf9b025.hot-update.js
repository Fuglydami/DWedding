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
    className: "modal",
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
    className: "modal-content glassmorphism ",
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
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "\xD7")), __jsx("div", {
    className: "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      textAlign: 'center',
      marginBottom: '10px',
      fontWeight: 700,
      fontSize: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "Cash Gift"), __jsx("span", {
    style: {
      fontSize: '18px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      color: 'grey',
      fontSize: '16px',
      marginRight: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Bank:"), ' ', "Wema Bank"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      color: 'grey',
      fontSize: '16px',
      marginRight: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Name:"), ' ', "Adewale Akinlagun\xA0"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      color: 'grey',
      fontSize: '16px',
      marginRight: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudERldGFpbHMuanN4Il0sIm5hbWVzIjpbIkFjY291bnREZXRhaWxzIiwiX3JlZiIsInNob3dBY2NvdW50RGV0YWlscyIsInNldFNob3dBY2NvdW50RGV0YWlscyIsIl9fanN4IiwiY2xhc3NOYW1lIiwidGFiSW5kZXgiLCJyb2xlIiwic3R5bGUiLCJkaXNwbGF5IiwiY29sb3IiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidHlwZSIsIm9uQ2xpY2siLCJmbGV4RGlyZWN0aW9uIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUFDLElBQUEsRUFBc0Q7RUFBQSxJQUFoREMsa0JBQWtCLEdBQUFELElBQUEsQ0FBbEJDLGtCQUFrQjtJQUFFQyxxQkFBcUIsR0FBQUYsSUFBQSxDQUFyQkUscUJBQXFCO0VBQ2pFLE9BQ0VDLEtBQUE7SUFDRUMsU0FBUyxFQUFDLE9BQU87SUFDakJDLFFBQVEsRUFBQyxJQUFJO0lBQ2JDLElBQUksRUFBQyxRQUFRO0lBQ2JDLEtBQUssRUFBRTtNQUNMQyxPQUFPLEVBQUVQLGtCQUFrQixHQUFHLE9BQU8sR0FBRyxNQUFNO01BQzlDUSxLQUFLLEVBQUU7SUFDVCxDQUFFO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBRUZiLEtBQUE7SUFBS0MsU0FBUyxFQUFDLGNBQWM7SUFBQ0UsSUFBSSxFQUFDLFVBQVU7SUFBQUksTUFBQSxF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TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDRWIsS0FBQTtJQUNFSSxLQUFLLEVBQUU7TUFDTEUsS0FBSyxFQUFFLE1BQU07TUFDYmMsUUFBUSxFQUFFLE1BQU07TUFDaEJDLFdBQVcsRUFBRTtJQUNmLENBQUU7SUFBQWQsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDSCxpQkFFSyxDQUFDLEVBQUMsR0FBRyxFQUFDLFlBRVIsQ0FDSCxDQUNGLENBQ0YsQ0FDRixDQUNGLENBQUM7QUFFVixDQUFDO0FBQUNTLEVBQUEsR0F0RkkxQixjQUFjO0FBd0ZMQSw2RUFBYyxFQUFDO0FBQUEsSUFBQTBCLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUwODdjNzE4YjY2MmZiZjliMDI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQWNjb3VudERldGFpbHMgPSAoeyBzaG93QWNjb3VudERldGFpbHMsIHNldFNob3dBY2NvdW50RGV0YWlscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPSdtb2RhbCdcclxuICAgICAgdGFiSW5kZXg9Jy0xJ1xyXG4gICAgICByb2xlPSdkaWFsb2cnXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogc2hvd0FjY291bnREZXRhaWxzID8gJ2Jsb2NrJyA6ICdub25lJyxcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWRpYWxvZycgcm9sZT0nZG9jdW1lbnQnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50IGdsYXNzbW9ycGhpc20gJz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Nsb3NlIGd1ZXN0LW1vZGFsJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWNjb3VudERldGFpbHMoZmFsc2UpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj0ndHJ1ZSc+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhc2ggR2lmdFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQmFuazpcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgV2VtYSBCYW5rXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgQWRld2FsZSBBa2lubGFndW7CoFxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmV5JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFjY291bnQgTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAwMjMzNTg0MTQyXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50RGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==