webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/collect-guest-attendance.jsx":
false,

/***/ "./pages/collect-guest-attendance.page.jsx":
/*!*************************************************!*\
  !*** ./pages/collect-guest-attendance.page.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
  _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\collect-guest-attendance.page.jsx",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }


var CollectGuestAttendance = function CollectGuestAttendance(_ref) {
  _s();
  var setShowModal = _ref.setShowModal,
    showModal = _ref.showModal;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    name = _useState[0],
    setName = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    attending = _useState2[0],
    setAttending = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    email = _useState3[0],
    setEmail = _useState3[1];
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var scriptUrl = 'https://script.google.com/macros/s/AKfycbxapNtm8Jv2QCNYt4CqGJ_mVpEEKERO9fXU8HrTexuDWthmxiQF9NFck6rIjPZ-LgdRHg/exec';
  function httpStatus(statusCode) {
    if (statusCode >= 200 && statusCode <= 299) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Success!', 'We appreciate your response!', 'success');
      setShowModal(false);
      setAttending('');
      setEmail('');
      setName('');
    } else if (statusCode >= 400 && statusCode <= 499) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error!', 'Something went wrong, please try again!', 'error');
    } else if (statusCode >= 500) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error!', 'Something went wrong, please try again!', 'error');
    } else {
      return 'unknown status';
    }
  }
  function buildCorsFreeUrl(target) {
    return "https://proxy.cors.sh/".concat(target);
  }
  var corsFreeUrl = buildCorsFreeUrl(scriptUrl);
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var _console, response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            if (!(!name || !email || !attending)) {
              _context.next = 4;
              break;
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('', 'All fields are required', 'error');
            return _context.abrupt("return");
          case 4:
            setIsLoading(true);
            _context.prev = 5;
            _context.next = 8;
            return fetch(corsFreeUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: name,
                email: email,
                attending: attending
              })
            });
          case 8:
            response = _context.sent;
            /* eslint-disable */(_console = console).log.apply(_console, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(oo_oo("2086938569_0", response, 'reponse')));
            _context.next = 12;
            return response.text();
          case 12:
            data = _context.sent;
            httpStatus(response.status);

            // Response from Google Script
            setIsLoading(false);
            _context.next = 22;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](5);
            setIsLoading(false);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error!', 'Something went wrong, please try again!', 'error');
            console.error('Error:', _context.t0);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 17]]);
    }));
    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return __jsx("div", {
    className: "modal",
    tabIndex: "-1",
    role: "dialog",
    style: {
      display: showModal ? 'block' : 'none',
      color: 'black'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-content  glassmorphism",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("div", {
    type: "button",
    className: "close guest-modal",
    onClick: function onClick() {
      return setShowModal(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "\xD7")), __jsx("div", {
    className: "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("h2", {
    style: {
      fontSize: '20px'
    },
    className: "form_title mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "Inform Us of your availability"), __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '14px'
    },
    htmlFor: "name",
    className: "form-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, "Name:"), __jsx("input", {
    style: {
      borderRadius: '10px',
      height: '45px',
      backgroundColor: 'transparent'
    },
    type: "text",
    className: "form-control",
    id: "name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '14px'
    },
    htmlFor: "email",
    className: "form-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, "Email:"), __jsx("input", {
    style: {
      borderRadius: '10px',
      height: '45px',
      backgroundColor: 'transparent'
    },
    type: "email",
    className: "form-control",
    id: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "attending",
    style: {
      fontSize: '14px'
    },
    className: "form-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 19
    }
  }, "Will you be attending?"), __jsx("textarea", {
    rows: "4",
    type: "number",
    style: {
      borderRadius: '10px',
      backgroundColor: 'transparent'
    },
    className: "form-control",
    id: "attending",
    value: attending,
    onChange: function onChange(e) {
      return setAttending(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  })), __jsx("button", {
    type: "submit",
    className: "guest-form-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }, isLoading ? 'Submitting...' : 'Submit')))))));
};
_s(CollectGuestAttendance, "uOLtMwVT9ukyxWaoZeJIHDx8vE0=");
_c = CollectGuestAttendance;
/* harmony default export */ __webpack_exports__["default"] = (CollectGuestAttendance);
/* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x391d(){var _0x2d8a98=['message','test','autoExpandPreviousObjects','6hoBHJx','function','_allowedToSend','15ZmLVLl','_isUndefined','','env','elapsed','POSITIVE_INFINITY','1.0.0','date','_console_ninja','_attemptToReconnectShortly','nodeModules','_addProperty','_blacklistedProperty','console','isArray','array','1312766fFLLAD','root_exp','call','root_exp_id','count','String','warn','','allStrLength','20AuMXwX','name','level','_addObjectProperty','_treeNodePropertiesAfterFullValue','19784RZWKGd','stackTraceLimit','[object\\x20Set]','Map','3915zDcWzX','hits','disabledTrace','location','substr','unknown','[object\\x20Array]','_isPrimitiveType','method','_setNodePermissions','_inNextEdge','unshift','stringify','_connectAttemptCount','_addFunctionsNode','versions','_reconnectTimeout','_dateToString','remix','1232297smIwMm','hostname','disabledLog','perf_hooks','capped','[object\\x20Date]','14253hDpInm','then','depth','hasOwnProperty','noFunctions','_getOwnPropertyNames','NEXT_RUNTIME','_p_','match','replace','getWebSocketClass','join','edge','push','number','_type','_allowedToConnectOnSend','process','error','_p_length','dockerizedApp','string','split','_setNodeId','expressionsToEvaluate','_treeNodePropertiesBeforeFullValue','[object\\x20BigInt]','timeEnd','_isMap','reduceLimits','_maxConnectAttemptCount','funcName','catch','_hasSymbolPropertyOnItsPath','now','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','432MhHNFO','_connected','toString','_getOwnPropertySymbols','data','hrtime','enumerable','astro','isExpressionToEvaluate','_inBrowser','totalStrLength','trace','NEGATIVE_INFINITY','getOwnPropertyNames','null','nuxt','_hasMapOnItsPath','\\x20server','port','length','_WebSocketClass','parent','negativeZero','elements','_isPrimitiveWrapperType','_setNodeExpressionPath','global','cappedElements','autoExpandMaxDepth','HTMLAllCollection','Symbol','path','boolean','Set','timeStamp','getOwnPropertyDescriptor','_p_name','_Symbol','_keyStrRegExp','_disposeWebsocket','getter','_webSocketErrorDocsLink','autoExpandPropertyCount','symbol','_objectToString','_sortProps','rootExpression','webpack','sort','Number',':logPointId:','8376360nTFfCo','value','prototype','_property','autoExpand','object','_isSet','strLength','_socket','coverage','_setNodeQueryPath','ws://','_hasSetOnItsPath','bigint','_consoleNinjaAllowedToStart','resolveGetters','getOwnPropertySymbols','toLowerCase','unref','type','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_sendErrorMessage','53886RBBEfW','_setNodeExpandableState','_propertyName','close','undefined','positiveInfinity','nan','_addLoadNode','Boolean','props','next.js','onopen','log','_connectToHostNow','reload','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','time','get','constructor','_setNodeLabel','index','[object\\x20Map]',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Damilare\",\"169.254.80.80\",\"172.31.112.1\"],'onmessage','forEach','node','getPrototypeOf','Buffer','4431040CQHEso','\\x20browser','_regExpToString','includes','_processTreeNodeResult','default','serialize','60992','__es'+'Module','performance','bind','readyState','_connecting','_numberRegExp','_console_ninja_session','_isArray','onerror','host','_HTMLAllCollection','_ws','1698349703936','send','concat','gateway.docker.internal','current','onclose','_additionalMetadata','127.0.0.1','autoExpandLimit','Error','_capIfString','sortProps','_undefined'];_0x391d=function(){return _0x2d8a98;};return _0x391d();}var _0x30d46c=_0x394b;function _0x394b(_0x122f32,_0x569f28){var _0x391df3=_0x391d();return _0x394b=function(_0x394b35,_0x2fbe16){_0x394b35=_0x394b35-0xcc;var _0x111890=_0x391df3[_0x394b35];return _0x111890;},_0x394b(_0x122f32,_0x569f28);}(function(_0x1d3e53,_0x1f24e5){var _0x430c6c=_0x394b,_0x4595ec=_0x1d3e53();while(!![]){try{var _0x5506bf=parseInt(_0x430c6c(0xec))/0x1*(-parseInt(_0x430c6c(0x194))/0x2)+-parseInt(_0x430c6c(0x127))/0x3*(parseInt(_0x430c6c(0x105))/0x4)+-parseInt(_0x430c6c(0x1b0))/0x5+-parseInt(_0x430c6c(0xe9))/0x6*(parseInt(_0x430c6c(0xfc))/0x7)+-parseInt(_0x430c6c(0x10a))/0x8*(parseInt(_0x430c6c(0x10e))/0x9)+-parseInt(_0x430c6c(0x17e))/0xa+-parseInt(_0x430c6c(0x121))/0xb*(-parseInt(_0x430c6c(0x14b))/0xc);if(_0x5506bf===_0x1f24e5)break;else _0x4595ec['push'](_0x4595ec['shift']());}catch(_0x103b4a){_0x4595ec['push'](_0x4595ec['shift']());}}}(_0x391d,0x96dcf));var j=Object['create'],H=Object['defineProperty'],G=Object[_0x30d46c(0x16e)],ee=Object['getOwnPropertyNames'],te=Object[_0x30d46c(0x1ae)],ne=Object['prototype'][_0x30d46c(0x12a)],re=(_0x1d5fc6,_0x74781d,_0x8f03cd,_0x49ff4f)=>{var _0x180dcd=_0x30d46c;if(_0x74781d&&typeof _0x74781d==_0x180dcd(0x183)||typeof _0x74781d==_0x180dcd(0xea)){for(let _0x16cd95 of ee(_0x74781d))!ne['call'](_0x1d5fc6,_0x16cd95)&&_0x16cd95!==_0x8f03cd&&H(_0x1d5fc6,_0x16cd95,{'get':()=>_0x74781d[_0x16cd95],'enumerable':!(_0x49ff4f=G(_0x74781d,_0x16cd95))||_0x49ff4f[_0x180dcd(0x151)]});}return _0x1d5fc6;},x=(_0x568bc8,_0x2de1d4,_0x5b4c4f)=>(_0x5b4c4f=_0x568bc8!=null?j(te(_0x568bc8)):{},re(_0x2de1d4||!_0x568bc8||!_0x568bc8[_0x30d46c(0xcd)]?H(_0x5b4c4f,_0x30d46c(0x1b5),{'value':_0x568bc8,'enumerable':!0x0}):_0x5b4c4f,_0x568bc8)),X=class{constructor(_0x47f38c,_0x5c1b06,_0x3f2856,_0x457d3d,_0x18ff64){var _0x4bb61d=_0x30d46c;this[_0x4bb61d(0x165)]=_0x47f38c,this[_0x4bb61d(0xd6)]=_0x5c1b06,this[_0x4bb61d(0x15d)]=_0x3f2856,this[_0x4bb61d(0xf6)]=_0x457d3d,this['dockerizedApp']=_0x18ff64,this[_0x4bb61d(0xeb)]=!0x0,this[_0x4bb61d(0x137)]=!0x0,this[_0x4bb61d(0x14c)]=!0x1,this[_0x4bb61d(0xd1)]=!0x1,this['_inNextEdge']=_0x47f38c[_0x4bb61d(0x138)]?.[_0x4bb61d(0xef)]?.[_0x4bb61d(0x12d)]==='edge',this[_0x4bb61d(0x154)]=!this[_0x4bb61d(0x165)][_0x4bb61d(0x138)]?.[_0x4bb61d(0x11d)]?.[_0x4bb61d(0x1ad)]&&!this[_0x4bb61d(0x118)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4bb61d(0x145)]=0x14,this[_0x4bb61d(0x174)]='https://tinyurl.com/37x8b79t',this[_0x4bb61d(0x193)]=(this[_0x4bb61d(0x154)]?_0x4bb61d(0x14a):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x4bb61d(0x174)];}async[_0x30d46c(0x131)](){var _0x1e90f1=_0x30d46c;if(this[_0x1e90f1(0x15f)])return this[_0x1e90f1(0x15f)];let _0x4ae77c;if(this[_0x1e90f1(0x154)]||this['_inNextEdge'])_0x4ae77c=this[_0x1e90f1(0x165)]['WebSocket'];else{if(this['global'][_0x1e90f1(0x138)]?.['_WebSocket'])_0x4ae77c=this['global'][_0x1e90f1(0x138)]?.['_WebSocket'];else try{let _0x4ceb95=await import('path');_0x4ae77c=(await import((await import('url'))['pathToFileURL'](_0x4ceb95[_0x1e90f1(0x132)](this[_0x1e90f1(0xf6)],'ws/index.js'))['toString']()))[_0x1e90f1(0x1b5)];}catch{try{_0x4ae77c=require(require(_0x1e90f1(0x16a))[_0x1e90f1(0x132)](this['nodeModules'],'ws'));}catch{throw new Error(_0x1e90f1(0x1a3));}}}return this['_WebSocketClass']=_0x4ae77c,_0x4ae77c;}[_0x30d46c(0x1a1)](){var _0x49089a=_0x30d46c;this[_0x49089a(0xd1)]||this['_connected']||this['_connectAttemptCount']>=this[_0x49089a(0x145)]||(this[_0x49089a(0x137)]=!0x1,this[_0x49089a(0xd1)]=!0x0,this[_0x49089a(0x11b)]++,this[_0x49089a(0xd8)]=new Promise((_0x34eafc,_0x144324)=>{var _0x874fa4=_0x49089a;this[_0x874fa4(0x131)]()[_0x874fa4(0x128)](_0x4baf58=>{var _0x41ddac=_0x874fa4;let _0x25743b=new _0x4baf58(_0x41ddac(0x189)+(!this['_inBrowser']&&this[_0x41ddac(0x13b)]?_0x41ddac(0xdc):this[_0x41ddac(0xd6)])+':'+this[_0x41ddac(0x15d)]);_0x25743b[_0x41ddac(0xd5)]=()=>{var _0x2b4f65=_0x41ddac;this[_0x2b4f65(0xeb)]=!0x1,this[_0x2b4f65(0x172)](_0x25743b),this[_0x2b4f65(0xf5)](),_0x144324(new Error('logger\\x20websocket\\x20error'));},_0x25743b[_0x41ddac(0x19f)]=()=>{var _0x42082a=_0x41ddac;this[_0x42082a(0x154)]||_0x25743b[_0x42082a(0x186)]&&_0x25743b[_0x42082a(0x186)]['unref']&&_0x25743b[_0x42082a(0x186)][_0x42082a(0x190)](),_0x34eafc(_0x25743b);},_0x25743b[_0x41ddac(0xde)]=()=>{var _0x132972=_0x41ddac;this[_0x132972(0x137)]=!0x0,this[_0x132972(0x172)](_0x25743b),this['_attemptToReconnectShortly']();},_0x25743b[_0x41ddac(0x1ab)]=_0x1afd11=>{var _0x18d6b5=_0x41ddac;try{_0x1afd11&&_0x1afd11[_0x18d6b5(0x14f)]&&this[_0x18d6b5(0x154)]&&JSON['parse'](_0x1afd11['data'])[_0x18d6b5(0x116)]===_0x18d6b5(0x1a2)&&this['global'][_0x18d6b5(0x111)][_0x18d6b5(0x1a2)]();}catch{}};})[_0x874fa4(0x128)](_0x1b24d2=>(this[_0x874fa4(0x14c)]=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x874fa4(0xeb)]=!0x0,this[_0x874fa4(0x11b)]=0x0,_0x1b24d2))[_0x874fa4(0x147)](_0x37f5a0=>(this[_0x874fa4(0x14c)]=!0x1,this[_0x874fa4(0xd1)]=!0x1,console[_0x874fa4(0x102)](_0x874fa4(0x192)+this[_0x874fa4(0x174)]),_0x144324(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x37f5a0&&_0x37f5a0[_0x874fa4(0xe6)])))));}));}['_disposeWebsocket'](_0x49a461){var _0x4f8869=_0x30d46c;this[_0x4f8869(0x14c)]=!0x1,this['_connecting']=!0x1;try{_0x49a461[_0x4f8869(0xde)]=null,_0x49a461['onerror']=null,_0x49a461[_0x4f8869(0x19f)]=null;}catch{}try{_0x49a461[_0x4f8869(0xd0)]<0x2&&_0x49a461[_0x4f8869(0x197)]();}catch{}}['_attemptToReconnectShortly'](){var _0x15979b=_0x30d46c;clearTimeout(this['_reconnectTimeout']),!(this[_0x15979b(0x11b)]>=this[_0x15979b(0x145)])&&(this[_0x15979b(0x11e)]=setTimeout(()=>{var _0x557b68=_0x15979b;this['_connected']||this['_connecting']||(this['_connectToHostNow'](),this[_0x557b68(0xd8)]?.[_0x557b68(0x147)](()=>this[_0x557b68(0xf5)]()));},0x1f4),this[_0x15979b(0x11e)][_0x15979b(0x190)]&&this['_reconnectTimeout'][_0x15979b(0x190)]());}async[_0x30d46c(0xda)](_0x39e782){var _0x4860f9=_0x30d46c;try{if(!this['_allowedToSend'])return;this[_0x4860f9(0x137)]&&this[_0x4860f9(0x1a1)](),(await this['_ws'])[_0x4860f9(0xda)](JSON['stringify'](_0x39e782));}catch(_0x1e17e0){console[_0x4860f9(0x102)](this[_0x4860f9(0x193)]+':\\x20'+(_0x1e17e0&&_0x1e17e0[_0x4860f9(0xe6)])),this[_0x4860f9(0xeb)]=!0x1,this[_0x4860f9(0xf5)]();}}};function b(_0x46d0b1,_0x4c18eb,_0x321ff7,_0x676911,_0x4c8299,_0x54255a){var _0x3937e7=_0x30d46c;let _0x50e0f9=_0x321ff7[_0x3937e7(0x13d)](',')['map'](_0x41d87=>{var _0x5179a2=_0x3937e7;try{_0x46d0b1['_console_ninja_session']||((_0x4c8299===_0x5179a2(0x19e)||_0x4c8299===_0x5179a2(0x120)||_0x4c8299===_0x5179a2(0x152))&&(_0x4c8299+=!_0x46d0b1[_0x5179a2(0x138)]?.[_0x5179a2(0x11d)]?.[_0x5179a2(0x1ad)]&&_0x46d0b1[_0x5179a2(0x138)]?.['env']?.[_0x5179a2(0x12d)]!=='edge'?_0x5179a2(0x1b1):_0x5179a2(0x15c)),_0x46d0b1['_console_ninja_session']={'id':+new Date(),'tool':_0x4c8299});let _0x7aabbf=new X(_0x46d0b1,_0x4c18eb,_0x41d87,_0x676911,_0x54255a);return _0x7aabbf['send'][_0x5179a2(0xcf)](_0x7aabbf);}catch(_0x1cb06f){return console[_0x5179a2(0x102)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x1cb06f&&_0x1cb06f['message']),()=>{};}});return _0x277e04=>_0x50e0f9[_0x3937e7(0x1ac)](_0xa42fb=>_0xa42fb(_0x277e04));}function W(_0x1ec5c2){var _0x3f0495=_0x30d46c;let _0x11427f=function(_0x3d5583,_0xf50a7){return _0xf50a7-_0x3d5583;},_0x25515e;if(_0x1ec5c2[_0x3f0495(0xce)])_0x25515e=function(){var _0x384058=_0x3f0495;return _0x1ec5c2[_0x384058(0xce)]['now']();};else{if(_0x1ec5c2[_0x3f0495(0x138)]&&_0x1ec5c2[_0x3f0495(0x138)][_0x3f0495(0x150)]&&_0x1ec5c2[_0x3f0495(0x138)]?.[_0x3f0495(0xef)]?.[_0x3f0495(0x12d)]!==_0x3f0495(0x133))_0x25515e=function(){var _0x4b9a8c=_0x3f0495;return _0x1ec5c2[_0x4b9a8c(0x138)]['hrtime']();},_0x11427f=function(_0x1340f2,_0x45e900){return 0x3e8*(_0x45e900[0x0]-_0x1340f2[0x0])+(_0x45e900[0x1]-_0x1340f2[0x1])/0xf4240;};else try{let {performance:_0x4a19c8}=require(_0x3f0495(0x124));_0x25515e=function(){var _0x495572=_0x3f0495;return _0x4a19c8[_0x495572(0x149)]();};}catch{_0x25515e=function(){return+new Date();};}}return{'elapsed':_0x11427f,'timeStamp':_0x25515e,'now':()=>Date[_0x3f0495(0x149)]()};}function J(_0x2c99fd,_0x1298f9,_0x7a4450){var _0x2b6560=_0x30d46c;if(_0x2c99fd[_0x2b6560(0x18c)]!==void 0x0)return _0x2c99fd[_0x2b6560(0x18c)];let _0x17de28=_0x2c99fd[_0x2b6560(0x138)]?.['versions']?.[_0x2b6560(0x1ad)]||_0x2c99fd[_0x2b6560(0x138)]?.[_0x2b6560(0xef)]?.[_0x2b6560(0x12d)]==='edge';return _0x17de28&&_0x7a4450===_0x2b6560(0x15a)?_0x2c99fd[_0x2b6560(0x18c)]=!0x1:_0x2c99fd[_0x2b6560(0x18c)]=_0x17de28||!_0x1298f9||_0x2c99fd['location']?.['hostname']&&_0x1298f9[_0x2b6560(0x1b3)](_0x2c99fd[_0x2b6560(0x111)][_0x2b6560(0x122)]),_0x2c99fd[_0x2b6560(0x18c)];}function Y(_0x319751,_0x5d267a,_0x2408ba,_0x563504){var _0x4248d6=_0x30d46c;_0x319751=_0x319751,_0x5d267a=_0x5d267a,_0x2408ba=_0x2408ba,_0x563504=_0x563504;let _0x5c6ba4=W(_0x319751),_0x5dead5=_0x5c6ba4[_0x4248d6(0xf0)],_0x299da3=_0x5c6ba4['timeStamp'];class _0x3187a7{constructor(){var _0x54c54b=_0x4248d6;this[_0x54c54b(0x171)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c54b(0xd2)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c54b(0xe5)]=_0x319751[_0x54c54b(0x198)],this[_0x54c54b(0xd7)]=_0x319751[_0x54c54b(0x168)],this['_getOwnPropertyDescriptor']=Object[_0x54c54b(0x16e)],this[_0x54c54b(0x12c)]=Object[_0x54c54b(0x158)],this[_0x54c54b(0x170)]=_0x319751[_0x54c54b(0x169)],this[_0x54c54b(0x1b2)]=RegExp['prototype'][_0x54c54b(0x14d)],this[_0x54c54b(0x11f)]=Date['prototype'][_0x54c54b(0x14d)];}[_0x4248d6(0x1b6)](_0x43bfc7,_0x25d451,_0x1e71c5,_0x508a0f){var _0x136692=_0x4248d6,_0x22f7b8=this,_0x27a473=_0x1e71c5['autoExpand'];function _0x412bfe(_0x1561f7,_0x2a0987,_0x58f130){var _0x21c91d=_0x394b;_0x2a0987[_0x21c91d(0x191)]=_0x21c91d(0x113),_0x2a0987[_0x21c91d(0x139)]=_0x1561f7[_0x21c91d(0xe6)],_0x1c36b0=_0x58f130['node'][_0x21c91d(0xdd)],_0x58f130[_0x21c91d(0x1ad)][_0x21c91d(0xdd)]=_0x2a0987,_0x22f7b8[_0x21c91d(0x140)](_0x2a0987,_0x58f130);}try{_0x1e71c5[_0x136692(0x107)]++,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)][_0x136692(0x134)](_0x25d451);var _0x315743,_0x541aa8,_0x3cced9,_0x2a34a1,_0x20b4f2=[],_0x4da63b=[],_0x556979,_0x2d2d6d=this[_0x136692(0x136)](_0x25d451),_0xd832c5=_0x2d2d6d==='array',_0x268c40=!0x1,_0x130f3e=_0x2d2d6d===_0x136692(0xea),_0x369b0e=this[_0x136692(0x115)](_0x2d2d6d),_0x498418=this['_isPrimitiveWrapperType'](_0x2d2d6d),_0x340f83=_0x369b0e||_0x498418,_0x2493be={},_0x36f3cc=0x0,_0x3a2fda=!0x1,_0x1c36b0,_0x348bf1=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1e71c5[_0x136692(0x129)]){if(_0xd832c5){if(_0x541aa8=_0x25d451[_0x136692(0x15e)],_0x541aa8>_0x1e71c5[_0x136692(0x162)]){for(_0x3cced9=0x0,_0x2a34a1=_0x1e71c5['elements'],_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));_0x43bfc7[_0x136692(0x166)]=!0x0;}else{for(_0x3cced9=0x0,_0x2a34a1=_0x541aa8,_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));}_0x1e71c5[_0x136692(0x175)]+=_0x4da63b['length'];}if(!(_0x2d2d6d==='null'||_0x2d2d6d===_0x136692(0x198))&&!_0x369b0e&&_0x2d2d6d!==_0x136692(0x101)&&_0x2d2d6d!==_0x136692(0x1af)&&_0x2d2d6d!=='bigint'){var _0x2cc7c3=_0x508a0f[_0x136692(0x19d)]||_0x1e71c5['props'];if(this[_0x136692(0x184)](_0x25d451)?(_0x315743=0x0,_0x25d451[_0x136692(0x1ac)](function(_0x5b5110){var _0x58c3cb=_0x136692;if(_0x36f3cc++,_0x1e71c5[_0x58c3cb(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5[_0x58c3cb(0x153)]&&_0x1e71c5[_0x58c3cb(0x182)]&&_0x1e71c5[_0x58c3cb(0x175)]>_0x1e71c5[_0x58c3cb(0xe1)]){_0x3a2fda=!0x0;return;}_0x4da63b[_0x58c3cb(0x134)](_0x22f7b8[_0x58c3cb(0xf7)](_0x20b4f2,_0x25d451,_0x58c3cb(0x16c),_0x315743++,_0x1e71c5,function(_0xfcb5c5){return function(){return _0xfcb5c5;};}(_0x5b5110)));})):this[_0x136692(0x143)](_0x25d451)&&_0x25d451['forEach'](function(_0x2056f5,_0x313010){var _0x55a7fd=_0x136692;if(_0x36f3cc++,_0x1e71c5['autoExpandPropertyCount']++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5['isExpressionToEvaluate']&&_0x1e71c5['autoExpand']&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x55a7fd(0xe1)]){_0x3a2fda=!0x0;return;}var _0x27b755=_0x313010['toString']();_0x27b755['length']>0x64&&(_0x27b755=_0x27b755['slice'](0x0,0x64)+'...'),_0x4da63b[_0x55a7fd(0x134)](_0x22f7b8[_0x55a7fd(0xf7)](_0x20b4f2,_0x25d451,_0x55a7fd(0x10d),_0x27b755,_0x1e71c5,function(_0x58dde9){return function(){return _0x58dde9;};}(_0x2056f5)));}),!_0x268c40){try{for(_0x556979 in _0x25d451)if(!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}catch{}if(_0x2493be[_0x136692(0x13a)]=!0x0,_0x130f3e&&(_0x2493be[_0x136692(0x16f)]=!0x0),!_0x3a2fda){var _0x379ad8=[][_0x136692(0xdb)](this[_0x136692(0x12c)](_0x25d451))[_0x136692(0xdb)](this[_0x136692(0x14e)](_0x25d451));for(_0x315743=0x0,_0x541aa8=_0x379ad8[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)if(_0x556979=_0x379ad8[_0x315743],!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979[_0x136692(0x14d)]()))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)&&!_0x2493be[_0x136692(0x12e)+_0x556979[_0x136692(0x14d)]()]){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b['push'](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}}}}if(_0x43bfc7[_0x136692(0x191)]=_0x2d2d6d,_0x340f83?(_0x43bfc7['value']=_0x25d451['valueOf'](),this[_0x136692(0xe3)](_0x2d2d6d,_0x43bfc7,_0x1e71c5,_0x508a0f)):_0x2d2d6d===_0x136692(0xf3)?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x11f)][_0x136692(0xfe)](_0x25d451):_0x2d2d6d===_0x136692(0x18b)?_0x43bfc7[_0x136692(0x17f)]=_0x25d451['toString']():_0x2d2d6d==='RegExp'?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x1b2)]['call'](_0x25d451):_0x2d2d6d===_0x136692(0x176)&&this[_0x136692(0x170)]?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x170)][_0x136692(0x180)][_0x136692(0x14d)][_0x136692(0xfe)](_0x25d451):!_0x1e71c5[_0x136692(0x129)]&&!(_0x2d2d6d===_0x136692(0x159)||_0x2d2d6d===_0x136692(0x198))&&(delete _0x43bfc7['value'],_0x43bfc7[_0x136692(0x125)]=!0x0),_0x3a2fda&&(_0x43bfc7['cappedProps']=!0x0),_0x1c36b0=_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)],_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x43bfc7,this[_0x136692(0x140)](_0x43bfc7,_0x1e71c5),_0x4da63b[_0x136692(0x15e)]){for(_0x315743=0x0,_0x541aa8=_0x4da63b[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)_0x4da63b[_0x315743](_0x315743);}_0x20b4f2[_0x136692(0x15e)]&&(_0x43bfc7['props']=_0x20b4f2);}catch(_0xcb2f1f){_0x412bfe(_0xcb2f1f,_0x43bfc7,_0x1e71c5);}return this[_0x136692(0xdf)](_0x25d451,_0x43bfc7),this[_0x136692(0x109)](_0x43bfc7,_0x1e71c5),_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x1c36b0,_0x1e71c5[_0x136692(0x107)]--,_0x1e71c5['autoExpand']=_0x27a473,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)]['pop'](),_0x43bfc7;}[_0x4248d6(0x14e)](_0x36fd65){var _0x3a70b0=_0x4248d6;return Object[_0x3a70b0(0x18e)]?Object['getOwnPropertySymbols'](_0x36fd65):[];}[_0x4248d6(0x184)](_0x2e653d){var _0x3fc9c1=_0x4248d6;return!!(_0x2e653d&&_0x319751['Set']&&this[_0x3fc9c1(0x177)](_0x2e653d)===_0x3fc9c1(0x10c)&&_0x2e653d[_0x3fc9c1(0x1ac)]);}[_0x4248d6(0xf8)](_0x52d6ba,_0x57f26e,_0xff5ab3){var _0xd01f4b=_0x4248d6;return _0xff5ab3[_0xd01f4b(0x12b)]?typeof _0x52d6ba[_0x57f26e]==_0xd01f4b(0xea):!0x1;}[_0x4248d6(0x136)](_0x89a353){var _0x3c333c=_0x4248d6,_0x45a790='';return _0x45a790=typeof _0x89a353,_0x45a790===_0x3c333c(0x183)?this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x114)?_0x45a790=_0x3c333c(0xfb):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x126)?_0x45a790=_0x3c333c(0xf3):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x141)?_0x45a790=_0x3c333c(0x18b):_0x89a353===null?_0x45a790=_0x3c333c(0x159):_0x89a353[_0x3c333c(0x1a6)]&&(_0x45a790=_0x89a353[_0x3c333c(0x1a6)][_0x3c333c(0x106)]||_0x45a790):_0x45a790==='undefined'&&this[_0x3c333c(0xd7)]&&_0x89a353 instanceof this[_0x3c333c(0xd7)]&&(_0x45a790=_0x3c333c(0x168)),_0x45a790;}[_0x4248d6(0x177)](_0xb28b5){var _0x2d6e81=_0x4248d6;return Object[_0x2d6e81(0x180)][_0x2d6e81(0x14d)]['call'](_0xb28b5);}['_isPrimitiveType'](_0x578eee){var _0x153dac=_0x4248d6;return _0x578eee===_0x153dac(0x16b)||_0x578eee===_0x153dac(0x13c)||_0x578eee===_0x153dac(0x135);}[_0x4248d6(0x163)](_0x13250b){var _0x289843=_0x4248d6;return _0x13250b===_0x289843(0x19c)||_0x13250b==='String'||_0x13250b===_0x289843(0x17c);}[_0x4248d6(0xf7)](_0x45b196,_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3){var _0x5b97f2=this;return function(_0x4a4e4b){var _0x21f6c7=_0x394b,_0x104c97=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0xdd)],_0x4c3709=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x1a8)],_0x702bea=_0x413025[_0x21f6c7(0x1ad)]['parent'];_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x104c97,_0x413025['node']['index']=typeof _0x35730f==_0x21f6c7(0x135)?_0x35730f:_0x4a4e4b,_0x45b196[_0x21f6c7(0x134)](_0x5b97f2[_0x21f6c7(0x181)](_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3)),_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x702bea,_0x413025[_0x21f6c7(0x1ad)]['index']=_0x4c3709;};}[_0x4248d6(0x108)](_0x4609e5,_0x15cfe4,_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359){var _0x4cf52b=_0x4248d6,_0x40276a=this;return _0x15cfe4['_p_'+_0x356575[_0x4cf52b(0x14d)]()]=!0x0,function(_0x3325f7){var _0x2b8d06=_0x4cf52b,_0x2eeeea=_0x357193['node'][_0x2b8d06(0xdd)],_0x23c718=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)],_0x14d3c3=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)];_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)]=_0x2eeeea,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x3325f7,_0x4609e5[_0x2b8d06(0x134)](_0x40276a[_0x2b8d06(0x181)](_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359)),_0x357193['node'][_0x2b8d06(0x160)]=_0x14d3c3,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x23c718;};}['_property'](_0x9ab64f,_0x4d90b9,_0x183599,_0xd58b2b,_0x43af40){var _0x14708=_0x4248d6,_0x446500=this;_0x43af40||(_0x43af40=function(_0x4bdfb1,_0x4bdc4d){return _0x4bdfb1[_0x4bdc4d];});var _0x182c0f=_0x183599[_0x14708(0x14d)](),_0x5b3e54=_0xd58b2b[_0x14708(0x13f)]||{},_0x527792=_0xd58b2b['depth'],_0x508312=_0xd58b2b['isExpressionToEvaluate'];try{var _0x521058=this[_0x14708(0x143)](_0x9ab64f),_0x4123ea=_0x182c0f;_0x521058&&_0x4123ea[0x0]==='\\x27'&&(_0x4123ea=_0x4123ea[_0x14708(0x112)](0x1,_0x4123ea['length']-0x2));var _0x26de9a=_0xd58b2b['expressionsToEvaluate']=_0x5b3e54[_0x14708(0x12e)+_0x4123ea];_0x26de9a&&(_0xd58b2b[_0x14708(0x129)]=_0xd58b2b['depth']+0x1),_0xd58b2b['isExpressionToEvaluate']=!!_0x26de9a;var _0x53a6b3=typeof _0x183599==_0x14708(0x176),_0x31790b={'name':_0x53a6b3||_0x521058?_0x182c0f:this[_0x14708(0x196)](_0x182c0f)};if(_0x53a6b3&&(_0x31790b[_0x14708(0x176)]=!0x0),!(_0x4d90b9===_0x14708(0xfb)||_0x4d90b9===_0x14708(0xe2))){var _0x428e2f=this['_getOwnPropertyDescriptor'](_0x9ab64f,_0x183599);if(_0x428e2f&&(_0x428e2f['set']&&(_0x31790b['setter']=!0x0),_0x428e2f[_0x14708(0x1a5)]&&!_0x26de9a&&!_0xd58b2b[_0x14708(0x18d)]))return _0x31790b[_0x14708(0x173)]=!0x0,this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x5786e9;try{_0x5786e9=_0x43af40(_0x9ab64f,_0x183599);}catch(_0x396ba8){return _0x31790b={'name':_0x182c0f,'type':'unknown','error':_0x396ba8[_0x14708(0xe6)]},this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x52ddfc=this['_type'](_0x5786e9),_0x1f051f=this[_0x14708(0x115)](_0x52ddfc);if(_0x31790b['type']=_0x52ddfc,_0x1f051f)this['_processTreeNodeResult'](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x1b14f0=_0x14708;_0x31790b[_0x1b14f0(0x17f)]=_0x5786e9['valueOf'](),!_0x26de9a&&_0x446500[_0x1b14f0(0xe3)](_0x52ddfc,_0x31790b,_0xd58b2b,{});});else{var _0x348206=_0xd58b2b[_0x14708(0x182)]&&_0xd58b2b['level']<_0xd58b2b[_0x14708(0x167)]&&_0xd58b2b[_0x14708(0xe8)]['indexOf'](_0x5786e9)<0x0&&_0x52ddfc!==_0x14708(0xea)&&_0xd58b2b[_0x14708(0x175)]<_0xd58b2b[_0x14708(0xe1)];_0x348206||_0xd58b2b[_0x14708(0x107)]<_0x527792||_0x26de9a?(this[_0x14708(0x1b6)](_0x31790b,_0x5786e9,_0xd58b2b,_0x26de9a||{}),this['_additionalMetadata'](_0x5786e9,_0x31790b)):this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x2385ba=_0x14708;_0x52ddfc===_0x2385ba(0x159)||_0x52ddfc==='undefined'||(delete _0x31790b[_0x2385ba(0x17f)],_0x31790b[_0x2385ba(0x125)]=!0x0);});}return _0x31790b;}finally{_0xd58b2b['expressionsToEvaluate']=_0x5b3e54,_0xd58b2b[_0x14708(0x129)]=_0x527792,_0xd58b2b[_0x14708(0x153)]=_0x508312;}}[_0x4248d6(0xe3)](_0x305781,_0x1212b3,_0x3beb27,_0x522683){var _0x4d2057=_0x4248d6,_0x2b2a31=_0x522683['strLength']||_0x3beb27[_0x4d2057(0x185)];if((_0x305781===_0x4d2057(0x13c)||_0x305781===_0x4d2057(0x101))&&_0x1212b3[_0x4d2057(0x17f)]){let _0x15d632=_0x1212b3['value'][_0x4d2057(0x15e)];_0x3beb27[_0x4d2057(0x104)]+=_0x15d632,_0x3beb27[_0x4d2057(0x104)]>_0x3beb27['totalStrLength']?(_0x1212b3['capped']='',delete _0x1212b3['value']):_0x15d632>_0x2b2a31&&(_0x1212b3[_0x4d2057(0x125)]=_0x1212b3[_0x4d2057(0x17f)][_0x4d2057(0x112)](0x0,_0x2b2a31),delete _0x1212b3['value']);}}['_isMap'](_0x2ac54f){var _0x1921a0=_0x4248d6;return!!(_0x2ac54f&&_0x319751['Map']&&this[_0x1921a0(0x177)](_0x2ac54f)===_0x1921a0(0x1a9)&&_0x2ac54f[_0x1921a0(0x1ac)]);}['_propertyName'](_0x53ffeb){var _0x2f97d5=_0x4248d6;if(_0x53ffeb[_0x2f97d5(0x12f)](/^\\d+$/))return _0x53ffeb;var _0x2b8f72;try{_0x2b8f72=JSON[_0x2f97d5(0x11a)](''+_0x53ffeb);}catch{_0x2b8f72='\\x22'+this[_0x2f97d5(0x177)](_0x53ffeb)+'\\x22';}return _0x2b8f72[_0x2f97d5(0x12f)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2b8f72=_0x2b8f72['substr'](0x1,_0x2b8f72[_0x2f97d5(0x15e)]-0x2):_0x2b8f72=_0x2b8f72[_0x2f97d5(0x130)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x2f97d5(0x130)](/(^\"|\"$)/g,'\\x27'),_0x2b8f72;}[_0x4248d6(0x1b4)](_0x5beb6d,_0x4cc6c2,_0x55db92,_0x5a76f6){var _0x813bc8=_0x4248d6;this[_0x813bc8(0x140)](_0x5beb6d,_0x4cc6c2),_0x5a76f6&&_0x5a76f6(),this[_0x813bc8(0xdf)](_0x55db92,_0x5beb6d),this[_0x813bc8(0x109)](_0x5beb6d,_0x4cc6c2);}['_treeNodePropertiesBeforeFullValue'](_0x3c6961,_0x172ffa){var _0x174417=_0x4248d6;this[_0x174417(0x13e)](_0x3c6961,_0x172ffa),this[_0x174417(0x188)](_0x3c6961,_0x172ffa),this['_setNodeExpressionPath'](_0x3c6961,_0x172ffa),this[_0x174417(0x117)](_0x3c6961,_0x172ffa);}[_0x4248d6(0x13e)](_0x232fb1,_0x1546dc){}[_0x4248d6(0x188)](_0x1b55ca,_0x1dc1b0){}[_0x4248d6(0x1a7)](_0x290ddd,_0x5ea425){}[_0x4248d6(0xed)](_0x3c1026){return _0x3c1026===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x5816de,_0x51ad0f){var _0x4e3207=_0x4248d6;this[_0x4e3207(0x1a7)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x195)](_0x5816de),_0x51ad0f[_0x4e3207(0xe4)]&&this['_sortProps'](_0x5816de),this[_0x4e3207(0x11c)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x19b)](_0x5816de,_0x51ad0f),this['_cleanNode'](_0x5816de);}[_0x4248d6(0xdf)](_0x3cc52c,_0x4d38a7){var _0x41e4dd=_0x4248d6;let _0x53c9b7;try{_0x319751[_0x41e4dd(0xf9)]&&(_0x53c9b7=_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)],_0x319751[_0x41e4dd(0xf9)]['error']=function(){}),_0x3cc52c&&typeof _0x3cc52c[_0x41e4dd(0x15e)]==_0x41e4dd(0x135)&&(_0x4d38a7[_0x41e4dd(0x15e)]=_0x3cc52c[_0x41e4dd(0x15e)]);}catch{}finally{_0x53c9b7&&(_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)]=_0x53c9b7);}if(_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x135)||_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x17c)){if(isNaN(_0x4d38a7['value']))_0x4d38a7[_0x41e4dd(0x19a)]=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];else switch(_0x4d38a7[_0x41e4dd(0x17f)]){case Number[_0x41e4dd(0xf1)]:_0x4d38a7[_0x41e4dd(0x199)]=!0x0,delete _0x4d38a7['value'];break;case Number['NEGATIVE_INFINITY']:_0x4d38a7['negativeInfinity']=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];break;case 0x0:this['_isNegativeZero'](_0x4d38a7[_0x41e4dd(0x17f)])&&(_0x4d38a7[_0x41e4dd(0x161)]=!0x0);break;}}else _0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0xea)&&typeof _0x3cc52c[_0x41e4dd(0x106)]==_0x41e4dd(0x13c)&&_0x3cc52c[_0x41e4dd(0x106)]&&_0x4d38a7['name']&&_0x3cc52c[_0x41e4dd(0x106)]!==_0x4d38a7['name']&&(_0x4d38a7[_0x41e4dd(0x146)]=_0x3cc52c['name']);}['_isNegativeZero'](_0x545d70){var _0x3f5f78=_0x4248d6;return 0x1/_0x545d70===Number[_0x3f5f78(0x157)];}[_0x4248d6(0x178)](_0x48342d){var _0x1133ce=_0x4248d6;!_0x48342d[_0x1133ce(0x19d)]||!_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x15e)]||_0x48342d['type']===_0x1133ce(0xfb)||_0x48342d[_0x1133ce(0x191)]==='Map'||_0x48342d[_0x1133ce(0x191)]===_0x1133ce(0x16c)||_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x17b)](function(_0x358f74,_0x251519){var _0x197d94=_0x1133ce,_0xba1944=_0x358f74[_0x197d94(0x106)][_0x197d94(0x18f)](),_0x138aff=_0x251519[_0x197d94(0x106)]['toLowerCase']();return _0xba1944<_0x138aff?-0x1:_0xba1944>_0x138aff?0x1:0x0;});}[_0x4248d6(0x11c)](_0x180095,_0x94a7be){var _0xb3b43a=_0x4248d6;if(!(_0x94a7be[_0xb3b43a(0x12b)]||!_0x180095[_0xb3b43a(0x19d)]||!_0x180095[_0xb3b43a(0x19d)]['length'])){for(var _0x46653e=[],_0x80c338=[],_0x142411=0x0,_0x2d6021=_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x15e)];_0x142411<_0x2d6021;_0x142411++){var _0x413289=_0x180095[_0xb3b43a(0x19d)][_0x142411];_0x413289[_0xb3b43a(0x191)]===_0xb3b43a(0xea)?_0x46653e[_0xb3b43a(0x134)](_0x413289):_0x80c338[_0xb3b43a(0x134)](_0x413289);}if(!(!_0x80c338[_0xb3b43a(0x15e)]||_0x46653e['length']<=0x1)){_0x180095[_0xb3b43a(0x19d)]=_0x80c338;var _0x2274df={'functionsNode':!0x0,'props':_0x46653e};this[_0xb3b43a(0x13e)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x1a7)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x195)](_0x2274df),this[_0xb3b43a(0x117)](_0x2274df,_0x94a7be),_0x2274df['id']+='\\x20f',_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x119)](_0x2274df);}}}[_0x4248d6(0x19b)](_0x488e07,_0x30da5f){}[_0x4248d6(0x195)](_0x2fb9ca){}[_0x4248d6(0xd4)](_0x46e88e){var _0x1167c4=_0x4248d6;return Array[_0x1167c4(0xfa)](_0x46e88e)||typeof _0x46e88e=='object'&&this[_0x1167c4(0x177)](_0x46e88e)===_0x1167c4(0x114);}['_setNodePermissions'](_0x3144a8,_0xd8d5c7){}['_cleanNode'](_0x349cb4){var _0x2a5872=_0x4248d6;delete _0x349cb4[_0x2a5872(0x148)],delete _0x349cb4[_0x2a5872(0x18a)],delete _0x349cb4[_0x2a5872(0x15b)];}[_0x4248d6(0x164)](_0x1387b6,_0x59de70){}}let _0x59cd6d=new _0x3187a7(),_0x11e492={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0xb7e3db={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x2e8232(_0xcfd290,_0x3e941f,_0x3283c2,_0x23065e,_0x2a7f01,_0x38778e){var _0x42ca29=_0x4248d6;let _0x401ff6,_0x4885de;try{_0x4885de=_0x299da3(),_0x401ff6=_0x2408ba[_0x3e941f],!_0x401ff6||_0x4885de-_0x401ff6['ts']>0x1f4&&_0x401ff6[_0x42ca29(0x100)]&&_0x401ff6[_0x42ca29(0x1a4)]/_0x401ff6[_0x42ca29(0x100)]<0x64?(_0x2408ba[_0x3e941f]=_0x401ff6={'count':0x0,'time':0x0,'ts':_0x4885de},_0x2408ba[_0x42ca29(0x10f)]={}):_0x4885de-_0x2408ba[_0x42ca29(0x10f)]['ts']>0x32&&_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]&&_0x2408ba[_0x42ca29(0x10f)]['time']/_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]<0x64&&(_0x2408ba[_0x42ca29(0x10f)]={});let _0x3905d7=[],_0x5c3a59=_0x401ff6['reduceLimits']||_0x2408ba[_0x42ca29(0x10f)]['reduceLimits']?_0xb7e3db:_0x11e492,_0x4072d6=_0x9c85d2=>{var _0x5754ea=_0x42ca29;let _0xec7735={};return _0xec7735[_0x5754ea(0x19d)]=_0x9c85d2[_0x5754ea(0x19d)],_0xec7735[_0x5754ea(0x162)]=_0x9c85d2[_0x5754ea(0x162)],_0xec7735[_0x5754ea(0x185)]=_0x9c85d2[_0x5754ea(0x185)],_0xec7735['totalStrLength']=_0x9c85d2[_0x5754ea(0x155)],_0xec7735[_0x5754ea(0xe1)]=_0x9c85d2[_0x5754ea(0xe1)],_0xec7735[_0x5754ea(0x167)]=_0x9c85d2[_0x5754ea(0x167)],_0xec7735[_0x5754ea(0xe4)]=!0x1,_0xec7735[_0x5754ea(0x12b)]=!_0x5d267a,_0xec7735[_0x5754ea(0x129)]=0x1,_0xec7735[_0x5754ea(0x107)]=0x0,_0xec7735['expId']=_0x5754ea(0xff),_0xec7735[_0x5754ea(0x179)]=_0x5754ea(0xfd),_0xec7735[_0x5754ea(0x182)]=!0x0,_0xec7735[_0x5754ea(0xe8)]=[],_0xec7735[_0x5754ea(0x175)]=0x0,_0xec7735[_0x5754ea(0x18d)]=!0x0,_0xec7735[_0x5754ea(0x104)]=0x0,_0xec7735[_0x5754ea(0x1ad)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0xec7735;};for(var _0x4edb78=0x0;_0x4edb78<_0x2a7f01[_0x42ca29(0x15e)];_0x4edb78++)_0x3905d7[_0x42ca29(0x134)](_0x59cd6d['serialize']({'timeNode':_0xcfd290===_0x42ca29(0x1a4)||void 0x0},_0x2a7f01[_0x4edb78],_0x4072d6(_0x5c3a59),{}));if(_0xcfd290==='trace'){let _0x34cb91=Error[_0x42ca29(0x10b)];try{Error[_0x42ca29(0x10b)]=0x1/0x0,_0x3905d7[_0x42ca29(0x134)](_0x59cd6d[_0x42ca29(0x1b6)]({'stackNode':!0x0},new Error()['stack'],_0x4072d6(_0x5c3a59),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x34cb91;}}return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':_0x3905d7,'id':_0x3e941f,'context':_0x38778e}]};}catch(_0x48f0ce){return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':[{'type':_0x42ca29(0x113),'error':_0x48f0ce&&_0x48f0ce['message']}],'id':_0x3e941f,'context':_0x38778e}]};}finally{try{if(_0x401ff6&&_0x4885de){let _0x2ff189=_0x299da3();_0x401ff6['count']++,_0x401ff6[_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x401ff6['ts']=_0x2ff189,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]++,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x2408ba[_0x42ca29(0x10f)]['ts']=_0x2ff189,(_0x401ff6['count']>0x32||_0x401ff6[_0x42ca29(0x1a4)]>0x64)&&(_0x401ff6[_0x42ca29(0x144)]=!0x0),(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]>0x3e8||_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]>0x12c)&&(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x144)]=!0x0);}}catch{}}}return _0x2e8232;}((_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x4e0e77,_0x37052b,_0x203bb4,_0x2f9931,_0x366303)=>{var _0x521a84=_0x30d46c;if(_0x3080e0['_console_ninja'])return _0x3080e0[_0x521a84(0xf4)];if(!J(_0x3080e0,_0x203bb4,_0x4b7e45))return _0x3080e0['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x3080e0[_0x521a84(0xf4)];let _0x3493fc=W(_0x3080e0),_0x4cad30=_0x3493fc[_0x521a84(0xf0)],_0x819273=_0x3493fc[_0x521a84(0x16d)],_0x544cc2=_0x3493fc[_0x521a84(0x149)],_0x3eb3e6={'hits':{},'ts':{}},_0x25ff14=Y(_0x3080e0,_0x2f9931,_0x3eb3e6,_0x4e0e77),_0x192300=_0x25873f=>{_0x3eb3e6['ts'][_0x25873f]=_0x819273();},_0x44f510=(_0x5562fd,_0x2f6706)=>{var _0x2ecd66=_0x521a84;let _0x2cc916=_0x3eb3e6['ts'][_0x2f6706];if(delete _0x3eb3e6['ts'][_0x2f6706],_0x2cc916){let _0x1f5842=_0x4cad30(_0x2cc916,_0x819273());_0x53751c(_0x25ff14(_0x2ecd66(0x1a4),_0x5562fd,_0x544cc2(),_0xf489e2,[_0x1f5842],_0x2f6706));}},_0x18f78b=_0x27e533=>_0x74adcc=>{var _0x53f31a=_0x521a84;try{_0x192300(_0x74adcc),_0x27e533(_0x74adcc);}finally{_0x3080e0[_0x53f31a(0xf9)][_0x53f31a(0x1a4)]=_0x27e533;}},_0x1553d8=_0x4b624b=>_0x5ca441=>{var _0x2ffff7=_0x521a84;try{let [_0x5e2d86,_0x46db52]=_0x5ca441[_0x2ffff7(0x13d)](_0x2ffff7(0x17d));_0x44f510(_0x46db52,_0x5e2d86),_0x4b624b(_0x5e2d86);}finally{_0x3080e0[_0x2ffff7(0xf9)][_0x2ffff7(0x142)]=_0x4b624b;}};_0x3080e0[_0x521a84(0xf4)]={'consoleLog':(_0x18e280,_0x1f4d15)=>{var _0x1b98f5=_0x521a84;_0x3080e0['console'][_0x1b98f5(0x1a0)][_0x1b98f5(0x106)]!==_0x1b98f5(0x123)&&_0x53751c(_0x25ff14(_0x1b98f5(0x1a0),_0x18e280,_0x544cc2(),_0xf489e2,_0x1f4d15));},'consoleTrace':(_0x4c956b,_0xcddb11)=>{var _0x5dd028=_0x521a84;_0x3080e0[_0x5dd028(0xf9)][_0x5dd028(0x1a0)][_0x5dd028(0x106)]!==_0x5dd028(0x110)&&_0x53751c(_0x25ff14(_0x5dd028(0x156),_0x4c956b,_0x544cc2(),_0xf489e2,_0xcddb11));},'consoleTime':()=>{var _0x10a308=_0x521a84;_0x3080e0['console'][_0x10a308(0x1a4)]=_0x18f78b(_0x3080e0['console'][_0x10a308(0x1a4)]);},'consoleTimeEnd':()=>{var _0x44a884=_0x521a84;_0x3080e0[_0x44a884(0xf9)]['timeEnd']=_0x1553d8(_0x3080e0[_0x44a884(0xf9)][_0x44a884(0x142)]);},'autoLog':(_0x479660,_0xd1686c)=>{var _0x40646e=_0x521a84;_0x53751c(_0x25ff14(_0x40646e(0x1a0),_0xd1686c,_0x544cc2(),_0xf489e2,[_0x479660]));},'autoLogMany':(_0x91fed5,_0x40a84f)=>{var _0x7344e1=_0x521a84;_0x53751c(_0x25ff14(_0x7344e1(0x1a0),_0x91fed5,_0x544cc2(),_0xf489e2,_0x40a84f));},'autoTrace':(_0x3546f7,_0x3d8eb5)=>{var _0x25512f=_0x521a84;_0x53751c(_0x25ff14(_0x25512f(0x156),_0x3d8eb5,_0x544cc2(),_0xf489e2,[_0x3546f7]));},'autoTraceMany':(_0x2b722f,_0x2df03b)=>{var _0x20acf1=_0x521a84;_0x53751c(_0x25ff14(_0x20acf1(0x156),_0x2b722f,_0x544cc2(),_0xf489e2,_0x2df03b));},'autoTime':(_0x297194,_0x1a6b68,_0x59d60b)=>{_0x192300(_0x59d60b);},'autoTimeEnd':(_0x4b1174,_0x19e4f9,_0x3e9773)=>{_0x44f510(_0x19e4f9,_0x3e9773);},'coverage':_0x169035=>{var _0x94fdd=_0x521a84;_0x53751c({'method':_0x94fdd(0x187),'version':_0x4e0e77,'args':[{'id':_0x169035}]});}};let _0x53751c=b(_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x366303),_0xf489e2=_0x3080e0[_0x521a84(0xd3)];return _0x3080e0[_0x521a84(0xf4)];})(globalThis,_0x30d46c(0xe0),_0x30d46c(0xcc),\"c:\\\\Users\\\\USER\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.240\\\\node_modules\",_0x30d46c(0x17a),_0x30d46c(0xf2),_0x30d46c(0xd9),_0x30d46c(0x1aa),_0x30d46c(0x103),_0x30d46c(0xee));");
  } catch (e) {}
}
;
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
;
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
;
function oo_ts() {
  try {
    oo_cm().consoleTime();
  } catch (e) {}
}
;
function oo_te() {
  try {
    oo_cm().consoleTimeEnd();
  } catch (e) {}
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
var _c;
$RefreshReg$(_c, "CollectGuestAttendance");

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

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_add_to_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-add-to-calendar */ "./node_modules/react-add-to-calendar/dist/react-add-to-calendar.min.js");
/* harmony import */ var react_add_to_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Head */ "./src/components/Head.jsx");
/* harmony import */ var _src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/utils/resolvePath */ "./src/utils/resolvePath.js");
/* harmony import */ var _src_config_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/config/app */ "./src/config/app.js");
/* harmony import */ var _src_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/i18n */ "./src/i18n/index.js");
/* harmony import */ var _guest_list_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guest_list.json */ "./pages/guest_list.json");
var _guest_list_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./guest_list.json */ "./pages/guest_list.json", 1);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _extra_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./extra.page */ "./pages/extra.page.jsx");
/* harmony import */ var _stories__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stories */ "./pages/stories.jsx");
/* harmony import */ var _pictureGrid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pictureGrid */ "./pages/pictureGrid.jsx");
/* harmony import */ var _collect_guest_attendance_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./collect-guest-attendance.page */ "./pages/collect-guest-attendance.page.jsx");


var _this = undefined,
  _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\index.jsx",
  _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }














var translateConfig = function translateConfig(appConfig, locale) {
  if (!locale || locale === _src_i18n__WEBPACK_IMPORTED_MODULE_10__["defaultLocale"]) {
    return appConfig;
  }
  // Replace config with lang
  var configLang = appConfig.lang[locale];
  if (configLang === undefined) {
    throw new Error('invalid locale: ', locale);
  }
  return _objectSpread(_objectSpread({}, appConfig), configLang);
};
var ShowInvite = function ShowInvite(_ref) {
  _s();
  var currentUrl = _ref.currentUrl,
    guestListLastUpdatedAt = _ref.guestListLastUpdatedAt,
    guest = _ref.guest;
  var t = Object(_src_i18n__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])(guest.locale);

  // Initiate config variables
  var _translateConfig = translateConfig(_src_config_app__WEBPACK_IMPORTED_MODULE_9__["default"], guest.locale),
    logo = _translateConfig.logo,
    ogTags = _translateConfig.ogTags,
    coupleInfo = _translateConfig.coupleInfo,
    venue = _translateConfig.venue,
    weddingDay = _translateConfig.weddingDay,
    weddingDate = _translateConfig.weddingDate,
    weddingTime = _translateConfig.weddingTime,
    calendarInfo = _translateConfig.calendarInfo;
  var brideName = coupleInfo.brideName,
    groomName = coupleInfo.groomName,
    hashtag = coupleInfo.hashtag,
    coupleNameFormat = coupleInfo.coupleNameFormat;
  var coupleNameStr = coupleNameFormat === 'GROOM_FIRST' ? "".concat(groomName, " & ").concat(brideName) : "".concat(brideName, " & ").concat(groomName);
  var coupleName = coupleNameFormat === 'GROOM_FIRST' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, groomName, " ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "&"), " ", brideName) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, brideName, " ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "&"), " ", groomName);

  // Venue info
  var venueBrief = "".concat(venue.name, ", ").concat(venue.city, ", ").concat(venue.country);
  var weddingDateBrief = "".concat(weddingDay, ", ").concat(weddingDate);

  // Event info
  var eventTitle = "".concat(coupleNameStr, "'s Wedding");
  var eventDescription = "".concat(weddingDateBrief, " at ").concat(venue.name, ", ").concat(venue.city);
  if (guest.name) {
    eventDescription = "Dear ".concat(guest.name, ", you are cordially invited to our wedding on ").concat(weddingDate, " at ").concat(venue.name, ". Looking forward to seeing you!");
  }

  // Calendar payload
  var calendarEvent = {
    title: eventTitle,
    description: eventDescription,
    location: "".concat(venue.city, ", ").concat(venue.country),
    startTime: calendarInfo.timeStartISO,
    endTime: calendarInfo.timeEndISO
  };
  var eventSchedule = [{
    icon: __jsx(_extra_page__WEBPACK_IMPORTED_MODULE_13__["EventDateIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }),
    event: 'Church',
    date: 'Dec 16, 2023',
    time: '12pm'
  }, {
    icon: __jsx(_extra_page__WEBPACK_IMPORTED_MODULE_13__["EventDateIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }),
    event: 'Reception',
    date: 'Dec 16, 2023',
    time: '2pm'
  }
  // {
  //   icon: <EventDateIcon />,
  //   event: 'Engagement',
  //   date: 'Dec 16, 2023',
  //   time: '2pm',
  // },
  ];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
    showModal = _useState[0],
    setShowModal = _useState[1];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var timer = setTimeout(function () {
      setShowModal(true);
    }, 10000);
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var handleScroll = function handleScroll() {
      var element = elementRef.current;
      if (element) {
        var elementPosition = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.9) {
          element.classList.add('animated-element'); // Add the CSS class when the element is 75% visible
        } else {
          element.classList.remove('animated-element'); // Remove the CSS class if not visible
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run this effect only once when the component is mounted

  return __jsx("div", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1703421768",
    __self: _this
  }, "a.react-add-to-calendar__button span{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxhZGV3YWxlLXdlZGRpbmctaW52aXRlXFxwYWdlc1xcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlJUyxBQUc0QixlQUNXLDREQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcYWRld2FsZS13ZWRkaW5nLWludml0ZVxccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IHsgRXZlbnREYXRlSWNvbiwgSGVhZGVyTG9nbywgTG92ZVRpdGxlSWNvbiB9IGZyb20gJy4vZXh0cmEucGFnZSc7XG5pbXBvcnQgU3RvcmllcyBmcm9tICcuL3N0b3JpZXMnO1xuaW1wb3J0IFBpY3R1cmVzR3JpZCBmcm9tICcuL3BpY3R1cmVHcmlkJztcbmltcG9ydCBDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlIGZyb20gJy4vY29sbGVjdC1ndWVzdC1hdHRlbmRhbmNlLnBhZ2UnO1xuXG5jb25zdCB0cmFuc2xhdGVDb25maWcgPSAoYXBwQ29uZmlnLCBsb2NhbGUpID0+IHtcbiAgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSBkZWZhdWx0TG9jYWxlKSB7XG4gICAgcmV0dXJuIGFwcENvbmZpZztcbiAgfVxuICAvLyBSZXBsYWNlIGNvbmZpZyB3aXRoIGxhbmdcbiAgY29uc3QgY29uZmlnTGFuZyA9IGFwcENvbmZpZy5sYW5nW2xvY2FsZV07XG4gIGlmIChjb25maWdMYW5nID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbG9jYWxlOiAnLCBsb2NhbGUpO1xuICB9XG4gIHJldHVybiB7IC4uLmFwcENvbmZpZywgLi4uY29uZmlnTGFuZyB9O1xufTtcblxuY29uc3QgU2hvd0ludml0ZSA9ICh7IGN1cnJlbnRVcmwsIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsIGd1ZXN0IH0pID0+IHtcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9uKGd1ZXN0LmxvY2FsZSk7XG5cbiAgLy8gSW5pdGlhdGUgY29uZmlnIHZhcmlhYmxlc1xuICBjb25zdCB7XG4gICAgbG9nbyxcbiAgICBvZ1RhZ3MsXG4gICAgY291cGxlSW5mbyxcbiAgICB2ZW51ZSxcbiAgICB3ZWRkaW5nRGF5LFxuICAgIHdlZGRpbmdEYXRlLFxuICAgIHdlZGRpbmdUaW1lLFxuICAgIGNhbGVuZGFySW5mbyxcbiAgfSA9IHRyYW5zbGF0ZUNvbmZpZyhhcHBDb25maWcsIGd1ZXN0LmxvY2FsZSk7XG4gIGNvbnN0IHsgYnJpZGVOYW1lLCBncm9vbU5hbWUsIGhhc2h0YWcsIGNvdXBsZU5hbWVGb3JtYXQgfSA9IGNvdXBsZUluZm87XG5cbiAgY29uc3QgY291cGxlTmFtZVN0ciA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJ1xuICAgICAgPyBgJHtncm9vbU5hbWV9ICYgJHticmlkZU5hbWV9YFxuICAgICAgOiBgJHticmlkZU5hbWV9ICYgJHtncm9vbU5hbWV9YDtcbiAgY29uc3QgY291cGxlTmFtZSA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJyA/IChcbiAgICAgIDw+XG4gICAgICAgIHtncm9vbU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7YnJpZGVOYW1lfVxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIDw+XG4gICAgICAgIHticmlkZU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7Z3Jvb21OYW1lfVxuICAgICAgPC8+XG4gICAgKTtcblxuICAvLyBWZW51ZSBpbmZvXG4gIGNvbnN0IHZlbnVlQnJpZWYgPSBgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWA7XG4gIGNvbnN0IHdlZGRpbmdEYXRlQnJpZWYgPSBgJHt3ZWRkaW5nRGF5fSwgJHt3ZWRkaW5nRGF0ZX1gO1xuXG4gIC8vIEV2ZW50IGluZm9cbiAgY29uc3QgZXZlbnRUaXRsZSA9IGAke2NvdXBsZU5hbWVTdHJ9J3MgV2VkZGluZ2A7XG4gIGxldCBldmVudERlc2NyaXB0aW9uID0gYCR7d2VkZGluZ0RhdGVCcmllZn0gYXQgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fWA7XG4gIGlmIChndWVzdC5uYW1lKSB7XG4gICAgZXZlbnREZXNjcmlwdGlvbiA9IGBEZWFyICR7Z3Vlc3QubmFtZX0sIHlvdSBhcmUgY29yZGlhbGx5IGludml0ZWQgdG8gb3VyIHdlZGRpbmcgb24gJHt3ZWRkaW5nRGF0ZX0gYXQgJHt2ZW51ZS5uYW1lfS4gTG9va2luZyBmb3J3YXJkIHRvIHNlZWluZyB5b3UhYDtcbiAgfVxuXG4gIC8vIENhbGVuZGFyIHBheWxvYWRcbiAgY29uc3QgY2FsZW5kYXJFdmVudCA9IHtcbiAgICB0aXRsZTogZXZlbnRUaXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZXZlbnREZXNjcmlwdGlvbixcbiAgICBsb2NhdGlvbjogYCR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gLFxuICAgIHN0YXJ0VGltZTogY2FsZW5kYXJJbmZvLnRpbWVTdGFydElTTyxcbiAgICBlbmRUaW1lOiBjYWxlbmRhckluZm8udGltZUVuZElTTyxcbiAgfTtcblxuICBjb25zdCBldmVudFNjaGVkdWxlID0gW1xuICAgIHtcbiAgICAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgICAgZXZlbnQ6ICdDaHVyY2gnLFxuICAgICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgICB0aW1lOiAnMTJwbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAgIGV2ZW50OiAnUmVjZXB0aW9uJyxcbiAgICAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgICAgdGltZTogJzJwbScsXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAvLyAgIGV2ZW50OiAnRW5nYWdlbWVudCcsXG4gICAgLy8gICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAvLyAgIHRpbWU6ICcycG0nLFxuICAgIC8vIH0sXG4gIF07XG5cbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgfSwgMTAwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYuY3VycmVudDtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRQb3NpdGlvbiA8IHdpbmRvd0hlaWdodCAqIDAuOSkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtZWxlbWVudCcpOyAvLyBBZGQgdGhlIENTUyBjbGFzcyB3aGVuIHRoZSBlbGVtZW50IGlzIDc1JSB2aXNpYmxlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZC1lbGVtZW50Jyk7IC8vIFJlbW92ZSB0aGUgQ1NTIGNsYXNzIGlmIG5vdCB2aXNpYmxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBSdW4gdGhpcyBlZmZlY3Qgb25seSBvbmNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYS5yZWFjdC1hZGQtdG8tY2FsZW5kYXJfX2J1dHRvbiBzcGFuIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZFxuICAgICAgICB7Li4ub2dUYWdzfVxuICAgICAgICB0aXRsZT17ZXZlbnRUaXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2V2ZW50RGVzY3JpcHRpb259XG4gICAgICAgIGd1ZXN0TmFtZT17Z3Vlc3QubmFtZX1cbiAgICAgICAgdXJsPXtjdXJyZW50VXJsfVxuICAgICAgICBkYXRlPXt3ZWRkaW5nRGF0ZUJyaWVmfVxuICAgICAgICBtb2RpZmllZFRpbWU9e2d1ZXN0TGlzdExhc3RVcGRhdGVkQXR9XG4gICAgICAgIHZlbnVlPXt2ZW51ZUJyaWVmfVxuICAgICAgICBsb2dvPXtyZXNvbHZlUGF0aChvZ1RhZ3MubG9nbyl9XG4gICAgICAgIGF1dGhvcj17cmVzb2x2ZVBhdGgoJy8nKX1cbiAgICAgIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hlYWRlcl9hcmVhJz5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2hlYWRlci1jb250YWluZXInPlxuICAgICAgICAgIDxIZWFkZXJMb2dvIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoZWFkZXItbG9nby10ZXh0Jz5UaGUgQWtpbmxhZ3VuJ3MgUGFydHk8L3NwYW4+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPSdob21lJyBjbGFzc05hbWU9J2hlYWRlcl9zbGlkZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay1saXN0IGRyYWdnYWJsZSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stdHJhY2snIHN0eWxlPXt7IG9wYWNpdHk6IDEgfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZ19jb3ZlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMTAnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX2NvbnRlbnQgdGV4dC1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDYwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfc3ViX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC4ycycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3NpdGVJbnRybycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuN3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC43cycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdXBsZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNodGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5uYW1lfSwge3ZlbnVlLmNpdHl9LCB7dmVudWUuY291bnRyeX0uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29taW5nX3Nvb24nIGNsYXNzTmFtZT0nY29taW5nX3Nvb25fYXJlYSBwdC0yMCBwYi03MCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8xJyBzdHlsZT17eyB6SW5kZXg6IDEgfX0+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy00Jz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSBwdC01MCB3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3QoJ2V2ZW50RGF0ZScpfTo8L2gzPlxuICAgICAgICAgICAgICAgIDxwPnt3ZWRkaW5nRGF0ZUJyaWVmfTwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEFkZFRvQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e2NhbGVuZGFyRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkxhYmVsPXt0KCdidG5BZGRUb015Q2FsZW5kYXInKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy9pbWFnZXMvc2VjdGlvbl9zaGFwZS5wbmcnIGFsdD0nU2hhcGUnIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTgnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjZzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjZzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fY291bnQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgcHQtMjAnPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzYwLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTM4LFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVfY291bnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMwJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb3VudF9jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMSwgcGFkZGluZ1RvcDogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZlbnVlLm1hcFVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvYmV2ZW50LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdiZXZlbnQgY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3ZlbnVlLm1hcFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNzV2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmV5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLmFkZHJlc3NMaW5lMX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMic+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTIucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gcmVmPXtlbGVtZW50UmVmfSBpZD0nY29udGFjdCcgY2xhc3NOYW1lPSdjb250YWN0X2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhY3Rfd3JhcHBlciB3b3cgZmFkZUluVXBCaWcnXG4gICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjRzJ1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMzAsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC40cycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW5VcCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZXZlbnRMaW5ldXAnPlxuICAgICAgICAgICAgICB7ZXZlbnRTY2hlZHVsZS5tYXAoKGV2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGltZSwgZGF0ZSwgZXZlbnQsIGljb24gfSA9IGV2O1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnRMaW5ldXAnIGtleT17ZXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGZvcm0gKi99XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgdGV4dC1jZW50ZXIgcGItMzAnPlxuICAgICAgICAgICAgICAgICAge2d1ZXN0Lm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25HcmVldGluZycpfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJyB9fT57Z3Vlc3QubmFtZX0sPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvblxuICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgIGRhdGEtZGVsYXk9JzAuN3MnXG4gICAgICAgIGNsYXNzTmFtZT0nbG92ZS10aXRsZS1jb250YWluZXIgZmFkZUluVXBCaWcgZmFkZUluJ1xuICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICA+XG4gICAgICAgIDxkaXYgcmVmPXtlbGVtZW50UmVmfT5cbiAgICAgICAgICA8TG92ZVRpdGxlSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiByZWY9e2VsZW1lbnRSZWZ9IGNsYXNzTmFtZT0nbG92ZS10aXRsZSc+XG4gICAgICAgICAgTXkgaGVhcnQgaXMgeW91ciB0byBob2xkIGFuZCBjaGVyaXNoIGZvciB0aGUgcmVzdCBvZiBvdXIgZGF5cy5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8YXJ0aWNsZVxuICAgICAgICByZWY9e2VsZW1lbnRSZWZ9XG4gICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgY2xhc3NOYW1lPSdzdG9yaWVzLWNvbnRhaW5lciBmYWRlSW5VcEJpZydcbiAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgIGRhdGEtd293LWRlbGF5PScwLjRzJ1xuICAgICAgPlxuICAgICAgICA8U3RvcmllcyAvPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPSdwaWN0dXJlLWdyaWQtY29udGFpbmVyJz5cbiAgICAgICAgPFBpY3R1cmVzR3JpZCAvPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgey8qIEZvb3RlciBzZWN0aW9uICovfVxuICAgICAgPGZvb3RlciBpZD0nZm9vdGVyJyBjbGFzc05hbWU9J2Zvb3Rlcl9hcmVhJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9zaGFwZV8xJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMS5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3dpZGdldCBwdC01MCBwYi0xMCB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX2xvZ28nPlxuICAgICAgICAgICAgICB7Lyoge2xvZ28uZm9vdGVyTG9nbyAmJlxuICAgICAgICAgICAgICAgIChsb2dvLmZvb3RlckxvZ29UeXBlID09PSAnbXA0JyA/IChcbiAgICAgICAgICAgICAgICAgIDx2aWRlbyBoZWlnaHQ9JzE0MCcgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2xvZ28uZm9vdGVyTG9nb30gdHlwZT0ndmlkZW8vbXA0JyAvPlxuICAgICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICApIDogKCAqL31cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogOTAsIG1hcmdpbjogMjUsIG1hcmdpblRvcDogMCB9fVxuICAgICAgICAgICAgICAgIHNyYz17bG9nby5oZWFkZXJMb2dvfVxuICAgICAgICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtsb2dvLmZvb3RlckxvZ299IC8+ICovfVxuICAgICAgICAgICAgICB7LyogKSl9ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3RpdGxlICc+XG4gICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGl0bGUnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y291cGxlTmFtZX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGg1XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiAnI0QzRDNEMycsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnNDBweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICNEV2VkZGluZ1xuICAgICAgICA8L2g1PlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8Q29sbGVjdEd1ZXN0QXR0ZW5kYW5jZVxuICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cbiAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2hvd0ludml0ZS5nZXRJbml0aWFsUHJvcHMgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IGxvY2FsZVBhcmFtcyA9IGN0eC5xdWVyeS5sYW5nIHx8IGRlZmF1bHRMb2NhbGU7XG4gIGNvbnN0IGVtcHR5R3Vlc3RQYXJhbXMgPSB7XG4gICAgZ3Vlc3Q6IHtcbiAgICAgIGd1ZXN0SWQ6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBncmVldGluZzogJycsXG4gICAgICBsb2NhbGU6IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRVcmwgPSByZXNvbHZlUGF0aChjdHgucmVxLnVybCk7XG4gIGNvbnN0IGd1ZXN0SWQgPSBjdHgucXVlcnkudTtcbiAgaWYgKCFndWVzdElkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBndWVzdERhdGEgPSBndWVzdExpc3QuZGF0YTtcbiAgY29uc3QgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCA9IGd1ZXN0TGlzdC5tZXRhLmxhc3RVcGRhdGVkQXQ7XG4gIGNvbnN0IHsgbmFtZSwgZ3JlZXRpbmcsIGxvY2FsZSB9ID1cbiAgICBndWVzdERhdGEuZmlsdGVyKChndWVzdCkgPT4gZ3Vlc3QuZ3Vlc3RJZCA9PT0gZ3Vlc3RJZClbMF0gfHwge307XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgLi4uZW1wdHlHdWVzdFBhcmFtcyxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXJsLFxuICAgIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsXG4gICAgZ3Vlc3Q6IHtcbiAgICAgIG5hbWUsXG4gICAgICBncmVldGluZyxcbiAgICAgIGd1ZXN0SWQsXG4gICAgICBsb2NhbGU6IGxvY2FsZSB8fCBsb2NhbGVQYXJhbXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dJbnZpdGU7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\USER\\\\Documents\\\\adewale-wedding-invite\\\\pages\\\\index.jsx */"), __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ogTags, {
    title: eventTitle,
    description: eventDescription,
    guestName: guest.name,
    url: currentUrl,
    date: weddingDateBrief,
    modifiedTime: guestListLastUpdatedAt,
    venue: venueBrief,
    logo: Object(_src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_8__["default"])(ogTags.logo),
    author: Object(_src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_8__["default"])('/'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  })), __jsx("section", {
    className: "jsx-1703421768" + " " + 'header_area',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: "jsx-1703421768" + " " + 'header-container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, __jsx(_extra_page__WEBPACK_IMPORTED_MODULE_13__["HeaderLogo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "jsx-1703421768" + " " + 'header-logo-text',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, "The Akinlagun's Party")), __jsx("div", {
    id: "home",
    className: "jsx-1703421768" + " " + 'header_slider',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'slick-list draggable',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      opacity: 1
    },
    className: "jsx-1703421768" + " " + 'slick-track',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'bg_cover d-flex align-items-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-10',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      paddingTop: 0
    },
    className: "jsx-1703421768" + " " + 'slider_content text-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      maxHeight: 60,
      margin: 25,
      marginTop: 0
    },
    src: logo.headerLogo,
    alt: "logo",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 25
    }
  }), __jsx("h5", {
    "data-animation": "fadeInUp",
    "data-delay": "0.2s",
    style: {
      animationDelay: '0.2s'
    },
    className: "jsx-1703421768" + " " + 'slider_sub_title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  }, t('siteIntro')), __jsx("h2", {
    "data-animation": "fadeInUp",
    "data-delay": "0.7s",
    style: {
      animationDelay: '0.7s'
    },
    className: "jsx-1703421768" + " " + 'slider_title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 25
    }
  }, coupleName), __jsx("h5", {
    "data-animation": "fadeInUp",
    "data-delay": "1s",
    style: {
      animationDelay: '1s'
    },
    className: "jsx-1703421768" + " " + 'location',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 25
    }
  }, hashtag), __jsx("span", {
    "data-animation": "fadeInUp",
    "data-delay": "1s",
    style: {
      animationDelay: '1s'
    },
    className: "jsx-1703421768" + " " + 'location',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 25
    }
  }, venue.name, ", ", venue.city, ", ", venue.country, ".")))))))))), __jsx("section", {
    id: "coming_soon",
    className: "jsx-1703421768" + " " + 'coming_soon_area pt-20 pb-70',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      zIndex: 1
    },
    className: "jsx-1703421768" + " " + 'coming_soon_shape_1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row align-items-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-4',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }, __jsx("div", {
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.2s",
    style: {
      visibility: 'visible',
      animationDuration: '1.3s',
      animationDelay: '0.2s',
      animationName: 'fadeIn'
    },
    className: "jsx-1703421768" + " " + 'section_title pt-50 wow fadeIn',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, t('eventDate'), ":"), __jsx("p", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 17
    }
  }, weddingDateBrief), __jsx("div", {
    style: {
      paddingTop: '0.2rem',
      paddingBottom: '0.2rem'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }, __jsx(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    event: calendarEvent,
    buttonLabel: t('btnAddToMyCalendar'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 19
    }
  })), __jsx("img", {
    src: "assets/images/section_shape.png",
    alt: "Shape",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-8',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }, __jsx("div", {
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.6s",
    style: {
      visibility: 'visible',
      animationDuration: '1.3s',
      animationDelay: '0.6s',
      animationName: 'fadeIn'
    },
    className: "jsx-1703421768" + " " + 'wow fadeIn',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_count d-flex justify-content-end pt-20',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      marginRight: 20,
      width: 360,
      height: 138,
      backgroundColor: 'transparent'
    },
    className: "jsx-1703421768" + " " + 'single_count d-flex align-items-center justify-content-center mt-30',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 19
    }
  }, __jsx("div", {
    style: {
      zIndex: 1,
      paddingTop: 20
    },
    className: "jsx-1703421768" + " " + 'count_content',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: venue.mapUrl,
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      borderRadius: 5
    },
    src: "assets/images/bevent.png",
    alt: "bevent center",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 25
    }
  })), __jsx("a", {
    href: venue.mapUrl,
    style: {
      maxWidth: '75vw',
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
      marginTop: 10,
      color: 'grey'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 23
    }
  }, venue.addressLine1)))))))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_shape_2',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-2.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 11
    }
  }))), __jsx("section", {
    ref: elementRef,
    id: "contact",
    className: "jsx-1703421768" + " " + 'contact_area',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 9
    }
  }, __jsx("div", {
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.4s",
    style: {
      paddingBottom: 30,
      boxShadow: 'none',
      visibility: 'visible',
      animationDuration: '1.3s',
      animationDelay: '0.4s',
      animationName: 'fadeInUp'
    },
    className: "jsx-1703421768" + " " + 'contact_wrapper wow fadeInUpBig',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container-eventLineup',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 13
    }
  }, eventSchedule.map(function (ev, index) {
    var time = ev.time,
      date = ev.date,
      event = ev.event,
      icon = ev.icon;
    return __jsx("div", {
      key: event,
      className: "jsx-1703421768" + " " + 'eventLineup',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 19
      }
    }, icon, __jsx("span", {
      style: {
        fontSize: '24px',
        color: 'black',
        fontWeight: 700
      },
      className: "jsx-1703421768",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 21
      }
    }, event), __jsx("span", {
      style: {
        fontWeight: 600,
        fontSize: '18px',
        color: 'black'
      },
      className: "jsx-1703421768",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 21
      }
    }, date), __jsx("span", {
      style: {
        fontWeight: 600,
        fontSize: '18px',
        color: 'black'
      },
      className: "jsx-1703421768",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 21
      }
    }, time));
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-9',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'section_title text-center pb-30',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 17
    }
  }, guest.name && __jsx("div", {
    style: {
      textAlign: 'center',
      maxWidth: 400,
      margin: 'auto',
      paddingBottom: 20
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 21
    }
  }, t('invitationGreeting'), __jsx("p", {
    style: {
      fontSize: '1.5rem'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 23
    }
  }, guest.name, ",")))))))), __jsx("section", {
    "data-animation": "fadeInUp",
    "data-delay": "0.7s",
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.4s",
    className: "jsx-1703421768" + " " + 'love-title-container fadeInUpBig fadeIn',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: elementRef,
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 9
    }
  }, __jsx(_extra_page__WEBPACK_IMPORTED_MODULE_13__["LoveTitleIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 11
    }
  })), __jsx("div", {
    ref: elementRef,
    className: "jsx-1703421768" + " " + 'love-title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 9
    }
  }, "My heart is your to hold and cherish for the rest of our days.")), __jsx("article", {
    ref: elementRef,
    "data-animation": "fadeInUp",
    "data-delay": "0.7s",
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.4s",
    className: "jsx-1703421768" + " " + 'stories-container fadeInUpBig',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 7
    }
  }, __jsx(_stories__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 9
    }
  })), __jsx("article", {
    className: "jsx-1703421768" + " " + 'picture-grid-container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 7
    }
  }, __jsx(_pictureGrid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 9
    }
  })), __jsx("footer", {
    id: "footer",
    className: "jsx-1703421768" + " " + 'footer_area',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_shape_1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_widget pt-50 pb-10 text-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_logo',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: {
      maxHeight: 90,
      margin: 25,
      marginTop: 0
    },
    src: logo.headerLogo,
    alt: "logo",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_title ',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 13
    }
  }, __jsx("h3", {
    style: {
      color: 'white'
    },
    className: "jsx-1703421768" + " " + 'title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 15
    }
  }, coupleName)))), __jsx("h5", {
    style: {
      color: '#D3D3D3',
      textAlign: 'center',
      marginBottom: '40px'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 9
    }
  }, "#DWedding")), __jsx(_collect_guest_attendance_page__WEBPACK_IMPORTED_MODULE_16__["default"], {
    showModal: showModal,
    setShowModal: setShowModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 7
    }
  }));
};
_s(ShowInvite, "IgBZo7Z24RPtXCyTqz8i2fJTWVk=", false, function () {
  return [_src_i18n__WEBPACK_IMPORTED_MODULE_10__["useTranslation"]];
});
_c = ShowInvite;
ShowInvite.getInitialProps = function (ctx) {
  var localeParams = ctx.query.lang || _src_i18n__WEBPACK_IMPORTED_MODULE_10__["defaultLocale"];
  var emptyGuestParams = {
    guest: {
      guestId: '',
      name: '',
      greeting: '',
      locale: localeParams
    }
  };
  var currentUrl = Object(_src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_8__["default"])(ctx.req.url);
  var guestId = ctx.query.u;
  if (!guestId) {
    return _objectSpread({
      currentUrl: currentUrl
    }, emptyGuestParams);
  }
  var guestData = _guest_list_json__WEBPACK_IMPORTED_MODULE_11__.data;
  var guestListLastUpdatedAt = _guest_list_json__WEBPACK_IMPORTED_MODULE_11__.meta.lastUpdatedAt;
  var _ref2 = guestData.filter(function (guest) {
      return guest.guestId === guestId;
    })[0] || {},
    name = _ref2.name,
    greeting = _ref2.greeting,
    locale = _ref2.locale;
  if (!name) {
    return _objectSpread({
      currentUrl: currentUrl
    }, emptyGuestParams);
  }
  return {
    currentUrl: currentUrl,
    guestListLastUpdatedAt: guestListLastUpdatedAt,
    guest: {
      name: name,
      greeting: greeting,
      guestId: guestId,
      locale: locale || localeParams
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (ShowInvite);
var _c;
$RefreshReg$(_c, "ShowInvite");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sbGVjdC1ndWVzdC1hdHRlbmRhbmNlLnBhZ2UuanN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSIsIl9yZWYiLCJfcyIsInNldFNob3dNb2RhbCIsInNob3dNb2RhbCIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwic2V0TmFtZSIsIl91c2VTdGF0ZTIiLCJhdHRlbmRpbmciLCJzZXRBdHRlbmRpbmciLCJfdXNlU3RhdGUzIiwiZW1haWwiLCJzZXRFbWFpbCIsIl91c2VTdGF0ZTQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzY3JpcHRVcmwiLCJodHRwU3RhdHVzIiwic3RhdHVzQ29kZSIsIlN3YWwiLCJmaXJlIiwiYnVpbGRDb3JzRnJlZVVybCIsInRhcmdldCIsImNvbmNhdCIsImNvcnNGcmVlVXJsIiwiaGFuZGxlU3VibWl0IiwiX3JlZjIiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9jYWxsZWUiLCJfY29uc29sZSIsInJlc3BvbnNlIiwiZGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwib29fb28iLCJ0ZXh0Iiwic3RhdHVzIiwidDAiLCJlcnJvciIsIl94IiwiYXJndW1lbnRzIiwiX19qc3giLCJjbGFzc05hbWUiLCJ0YWJJbmRleCIsInJvbGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjb2xvciIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJvbkNsaWNrIiwiZm9udFNpemUiLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpZCIsIm9uQ2hhbmdlIiwicm93cyIsIl9jIiwib29fY20iLCJldmFsIiwiX2xlbiIsIkFycmF5IiwiX2tleSIsImNvbnNvbGVMb2ciLCJvb190ciIsIl9sZW4yIiwiX2tleTIiLCJjb25zb2xlVHJhY2UiLCJvb190cyIsImNvbnNvbGVUaW1lIiwib29fdGUiLCJjb25zb2xlVGltZUVuZCIsIiRSZWZyZXNoUmVnJCIsInRyYW5zbGF0ZUNvbmZpZyIsImFwcENvbmZpZyIsImxvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjb25maWdMYW5nIiwibGFuZyIsInVuZGVmaW5lZCIsIl9vYmplY3RTcHJlYWQiLCJTaG93SW52aXRlIiwiY3VycmVudFVybCIsImd1ZXN0TGlzdExhc3RVcGRhdGVkQXQiLCJndWVzdCIsInVzZVRyYW5zbGF0aW9uIiwiX3RyYW5zbGF0ZUNvbmZpZyIsImxvZ28iLCJvZ1RhZ3MiLCJjb3VwbGVJbmZvIiwidmVudWUiLCJ3ZWRkaW5nRGF5Iiwid2VkZGluZ0RhdGUiLCJ3ZWRkaW5nVGltZSIsImNhbGVuZGFySW5mbyIsImJyaWRlTmFtZSIsImdyb29tTmFtZSIsImhhc2h0YWciLCJjb3VwbGVOYW1lRm9ybWF0IiwiY291cGxlTmFtZVN0ciIsImNvdXBsZU5hbWUiLCJSZWFjdCIsIkZyYWdtZW50IiwidmVudWVCcmllZiIsImNpdHkiLCJjb3VudHJ5Iiwid2VkZGluZ0RhdGVCcmllZiIsImV2ZW50VGl0bGUiLCJldmVudERlc2NyaXB0aW9uIiwiY2FsZW5kYXJFdmVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsInN0YXJ0VGltZSIsInRpbWVTdGFydElTTyIsImVuZFRpbWUiLCJ0aW1lRW5kSVNPIiwiZXZlbnRTY2hlZHVsZSIsImljb24iLCJFdmVudERhdGVJY29uIiwiZXZlbnQiLCJkYXRlIiwidGltZSIsInVzZUVmZmVjdCIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJoYW5kbGVTY3JvbGwiLCJlbGVtZW50IiwiY3VycmVudCIsImVsZW1lbnRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfSlNYU3R5bGUiLCJIZWFkIiwiX2V4dGVuZHMiLCJndWVzdE5hbWUiLCJ1cmwiLCJtb2RpZmllZFRpbWUiLCJyZXNvbHZlUGF0aCIsImF1dGhvciIsIkhlYWRlckxvZ28iLCJvcGFjaXR5IiwicGFkZGluZ1RvcCIsIm1heEhlaWdodCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsInNyYyIsImhlYWRlckxvZ28iLCJhbHQiLCJhbmltYXRpb25EZWxheSIsInpJbmRleCIsInZpc2liaWxpdHkiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJwYWRkaW5nQm90dG9tIiwiQWRkVG9DYWxlbmRhciIsImJ1dHRvbkxhYmVsIiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImhyZWYiLCJtYXBVcmwiLCJtYXhXaWR0aCIsIm92ZXJmbG93WCIsInRleHRPdmVyZmxvdyIsImFkZHJlc3NMaW5lMSIsInJlZiIsImJveFNoYWRvdyIsIm1hcCIsImV2IiwiaW5kZXgiLCJrZXkiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwiTG92ZVRpdGxlSWNvbiIsIlN0b3JpZXMiLCJQaWN0dXJlc0dyaWQiLCJtYXJnaW5Cb3R0b20iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJsb2NhbGVQYXJhbXMiLCJxdWVyeSIsImVtcHR5R3Vlc3RQYXJhbXMiLCJndWVzdElkIiwiZ3JlZXRpbmciLCJyZXEiLCJndWVzdERhdGEiLCJndWVzdExpc3QiLCJtZXRhIiwibGFzdFVwZGF0ZWRBdCIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FB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R0FBRyxDQUFDRSxLQUFLLENBQUN2UyxDQUFDO0VBQzNCLElBQUksQ0FBQ3lTLE9BQU8sRUFBRTtJQUNaLE9BQUFqSCxhQUFBO01BQ0VFLFVBQVUsRUFBVkE7SUFBVSxHQUNQOEcsZ0JBQWdCO0VBRXZCO0VBRUEsSUFBTUksU0FBUyxHQUFHQyw4Q0FBUyxDQUFDeEwsSUFBSTtFQUNoQyxJQUFNc0Usc0JBQXNCLEdBQUdrSCw4Q0FBUyxDQUFDQyxJQUFJLENBQUNDLGFBQWE7RUFDM0QsSUFBQS9MLEtBQUEsR0FDRTRMLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLFVBQUNwSCxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDNkcsT0FBTyxLQUFLQSxPQUFPO0lBQUEsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUR6RHhPLElBQUksR0FBQStDLEtBQUEsQ0FBSi9DLElBQUk7SUFBRXlPLFFBQVEsR0FBQTFMLEtBQUEsQ0FBUjBMLFFBQVE7SUFBRXZILE1BQU0sR0FBQW5FLEtBQUEsQ0FBTm1FLE1BQU07RUFFOUIsSUFBSSxDQUFDbEgsSUFBSSxFQUFFO0lBQ1QsT0FBQXVILGFBQUE7TUFDRUUsVUFBVSxFQUFWQTtJQUFVLEdBQ1A4RyxnQkFBZ0I7RUFFdkI7RUFFQSxPQUFPO0lBQ0w5RyxVQUFVLEVBQVZBLFVBQVU7SUFDVkMsc0JBQXNCLEVBQXRCQSxzQkFBc0I7SUFDdEJDLEtBQUssRUFBRTtNQUNMM0gsSUFBSSxFQUFKQSxJQUFJO01BQ0p5TyxRQUFRLEVBQVJBLFFBQVE7TUFDUkQsT0FBTyxFQUFQQSxPQUFPO01BQ1B0SCxNQUFNLEVBQUVBLE1BQU0sSUFBSW1IO0lBQ3BCO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFFYzdHLHlFQUFVLEVBQUM7QUFBQSxJQUFBeEIsRUFBQTtBQUFBZSxZQUFBLENBQUFmLEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmU1NTkxZWUzZTE3MGQ2MzU3ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuY29uc3QgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSA9ICh7IHNldFNob3dNb2RhbCwgc2hvd01vZGFsIH0pID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2F0dGVuZGluZywgc2V0QXR0ZW5kaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2NyaXB0VXJsID1cclxuICAgICdodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnhhcE50bThKdjJRQ05ZdDRDcUdKX21WcEVFS0VSTzlmWFU4SHJUZXh1RFd0aG14aVFGOU5GY2s2cklqUFotTGdkUkhnL2V4ZWMnO1xyXG5cclxuICBmdW5jdGlvbiBodHRwU3RhdHVzKHN0YXR1c0NvZGUpIHtcclxuICAgIGlmIChzdGF0dXNDb2RlID49IDIwMCAmJiBzdGF0dXNDb2RlIDw9IDI5OSkge1xyXG4gICAgICBTd2FsLmZpcmUoJ1N1Y2Nlc3MhJywgJ1dlIGFwcHJlY2lhdGUgeW91ciByZXNwb25zZSEnLCAnc3VjY2VzcycpO1xyXG4gICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xyXG4gICAgICBzZXRBdHRlbmRpbmcoJycpO1xyXG4gICAgICBzZXRFbWFpbCgnJyk7XHJcbiAgICAgIHNldE5hbWUoJycpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID49IDQwMCAmJiBzdGF0dXNDb2RlIDw9IDQ5OSkge1xyXG4gICAgICBTd2FsLmZpcmUoJ0Vycm9yIScsICdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiEnLCAnZXJyb3InKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA+PSA1MDApIHtcclxuICAgICAgU3dhbC5maXJlKCdFcnJvciEnLCAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4hJywgJ2Vycm9yJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ3Vua25vd24gc3RhdHVzJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGJ1aWxkQ29yc0ZyZWVVcmwodGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gYGh0dHBzOi8vcHJveHkuY29ycy5zaC8ke3RhcmdldH1gO1xyXG4gIH1cclxuICBjb25zdCBjb3JzRnJlZVVybCA9IGJ1aWxkQ29yc0ZyZWVVcmwoc2NyaXB0VXJsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsIHx8ICFhdHRlbmRpbmcpIHtcclxuICAgICAgU3dhbC5maXJlKCcnLCAnQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQnLCAnZXJyb3InKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjb3JzRnJlZVVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIGVtYWlsLCBhdHRlbmRpbmcgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMjA4NjkzODU2OV8wYCxyZXNwb25zZSwgJ3JlcG9uc2UnKSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgIGh0dHBTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKTtcclxuXHJcbiAgICAgIC8vIFJlc3BvbnNlIGZyb20gR29vZ2xlIFNjcmlwdFxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgU3dhbC5maXJlKCdFcnJvciEnLCAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4hJywgJ2Vycm9yJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT0nbW9kYWwnXHJcbiAgICAgIHRhYkluZGV4PSctMSdcclxuICAgICAgcm9sZT0nZGlhbG9nJ1xyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IHNob3dNb2RhbCA/ICdibG9jaycgOiAnbm9uZScsXHJcbiAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1kaWFsb2cnIHJvbGU9J2RvY3VtZW50Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtY29udGVudCAgZ2xhc3Ntb3JwaGlzbSc+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjbG9zZSBndWVzdC1tb2RhbCdcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49J3RydWUnPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgIDxoMlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm1fdGl0bGUgbWItNCdcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBJbmZvcm0gVXMgb2YgeW91ciBhdmFpbGFiaWxpdHlcclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBtYi0zJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1sYWJlbCdcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBOYW1lOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRW1haWw6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPSdhdHRlbmRpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBXaWxsIHlvdSBiZSBhdHRlbmRpbmc/XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9JzQnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPSdhdHRlbmRpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F0dGVuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF0dGVuZGluZyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdndWVzdC1mb3JtLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAnU3VibWl0dGluZy4uLicgOiAnU3VibWl0J31cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZTtcclxuLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO2Z1bmN0aW9uIF8weDM5MWQoKXt2YXIgXzB4MmQ4YTk4PVsnbWVzc2FnZScsJ3Rlc3QnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywnNmhvQkhKeCcsJ2Z1bmN0aW9uJywnX2FsbG93ZWRUb1NlbmQnLCcxNVptTFZMbCcsJ19pc1VuZGVmaW5lZCcsJycsJ2VudicsJ2VsYXBzZWQnLCdQT1NJVElWRV9JTkZJTklUWScsJzEuMC4wJywnZGF0ZScsJ19jb25zb2xlX25pbmphJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCdub2RlTW9kdWxlcycsJ19hZGRQcm9wZXJ0eScsJ19ibGFja2xpc3RlZFByb3BlcnR5JywnY29uc29sZScsJ2lzQXJyYXknLCdhcnJheScsJzEzMTI3NjZmRkxMQUQnLCdyb290X2V4cCcsJ2NhbGwnLCdyb290X2V4cF9pZCcsJ2NvdW50JywnU3RyaW5nJywnd2FybicsJycsJ2FsbFN0ckxlbmd0aCcsJzIwQXVNWHdYJywnbmFtZScsJ2xldmVsJywnX2FkZE9iamVjdFByb3BlcnR5JywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnMTk3ODRSWldLR2QnLCdzdGFja1RyYWNlTGltaXQnLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdNYXAnLCczOTE1ekRjV3pYJywnaGl0cycsJ2Rpc2FibGVkVHJhY2UnLCdsb2NhdGlvbicsJ3N1YnN0cicsJ3Vua25vd24nLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ19pc1ByaW1pdGl2ZVR5cGUnLCdtZXRob2QnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnX2luTmV4dEVkZ2UnLCd1bnNoaWZ0Jywnc3RyaW5naWZ5JywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCdfYWRkRnVuY3Rpb25zTm9kZScsJ3ZlcnNpb25zJywnX3JlY29ubmVjdFRpbWVvdXQnLCdfZGF0ZVRvU3RyaW5nJywncmVtaXgnLCcxMjMyMjk3c21Jd01tJywnaG9zdG5hbWUnLCdkaXNhYmxlZExvZycsJ3BlcmZfaG9va3MnLCdjYXBwZWQnLCdbb2JqZWN0XFxcXHgyMERhdGVdJywnMTQyNTNoRHBJbm0nLCd0aGVuJywnZGVwdGgnLCdoYXNPd25Qcm9wZXJ0eScsJ25vRnVuY3Rpb25zJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdORVhUX1JVTlRJTUUnLCdfcF8nLCdtYXRjaCcsJ3JlcGxhY2UnLCdnZXRXZWJTb2NrZXRDbGFzcycsJ2pvaW4nLCdlZGdlJywncHVzaCcsJ251bWJlcicsJ190eXBlJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdwcm9jZXNzJywnZXJyb3InLCdfcF9sZW5ndGgnLCdkb2NrZXJpemVkQXBwJywnc3RyaW5nJywnc3BsaXQnLCdfc2V0Tm9kZUlkJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ3RpbWVFbmQnLCdfaXNNYXAnLCdyZWR1Y2VMaW1pdHMnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ2Z1bmNOYW1lJywnY2F0Y2gnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdub3cnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJzQzMk1oSE5GTycsJ19jb25uZWN0ZWQnLCd0b1N0cmluZycsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdkYXRhJywnaHJ0aW1lJywnZW51bWVyYWJsZScsJ2FzdHJvJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ19pbkJyb3dzZXInLCd0b3RhbFN0ckxlbmd0aCcsJ3RyYWNlJywnTkVHQVRJVkVfSU5GSU5JVFknLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywnbnVsbCcsJ251eHQnLCdfaGFzTWFwT25JdHNQYXRoJywnXFxcXHgyMHNlcnZlcicsJ3BvcnQnLCdsZW5ndGgnLCdfV2ViU29ja2V0Q2xhc3MnLCdwYXJlbnQnLCduZWdhdGl2ZVplcm8nLCdlbGVtZW50cycsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ2dsb2JhbCcsJ2NhcHBlZEVsZW1lbnRzJywnYXV0b0V4cGFuZE1heERlcHRoJywnSFRNTEFsbENvbGxlY3Rpb24nLCdTeW1ib2wnLCdwYXRoJywnYm9vbGVhbicsJ1NldCcsJ3RpbWVTdGFtcCcsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ19wX25hbWUnLCdfU3ltYm9sJywnX2tleVN0clJlZ0V4cCcsJ19kaXNwb3NlV2Vic29ja2V0JywnZ2V0dGVyJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ3N5bWJvbCcsJ19vYmplY3RUb1N0cmluZycsJ19zb3J0UHJvcHMnLCdyb290RXhwcmVzc2lvbicsJ3dlYnBhY2snLCdzb3J0JywnTnVtYmVyJywnOmxvZ1BvaW50SWQ6JywnODM3NjM2MG5URmZDbycsJ3ZhbHVlJywncHJvdG90eXBlJywnX3Byb3BlcnR5JywnYXV0b0V4cGFuZCcsJ29iamVjdCcsJ19pc1NldCcsJ3N0ckxlbmd0aCcsJ19zb2NrZXQnLCdjb3ZlcmFnZScsJ19zZXROb2RlUXVlcnlQYXRoJywnd3M6Ly8nLCdfaGFzU2V0T25JdHNQYXRoJywnYmlnaW50JywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywncmVzb2x2ZUdldHRlcnMnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCd0b0xvd2VyQ2FzZScsJ3VucmVmJywndHlwZScsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnX3NlbmRFcnJvck1lc3NhZ2UnLCc1Mzg4NlJCQkVmVycsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnX3Byb3BlcnR5TmFtZScsJ2Nsb3NlJywndW5kZWZpbmVkJywncG9zaXRpdmVJbmZpbml0eScsJ25hbicsJ19hZGRMb2FkTm9kZScsJ0Jvb2xlYW4nLCdwcm9wcycsJ25leHQuanMnLCdvbm9wZW4nLCdsb2cnLCdfY29ubmVjdFRvSG9zdE5vdycsJ3JlbG9hZCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ3RpbWUnLCdnZXQnLCdjb25zdHJ1Y3RvcicsJ19zZXROb2RlTGFiZWwnLCdpbmRleCcsJ1tvYmplY3RcXFxceDIwTWFwXScsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJEYW1pbGFyZVxcXCIsXFxcIjE2OS4yNTQuODAuODBcXFwiLFxcXCIxNzIuMzEuMTEyLjFcXFwiXSwnb25tZXNzYWdlJywnZm9yRWFjaCcsJ25vZGUnLCdnZXRQcm90b3R5cGVPZicsJ0J1ZmZlcicsJzQ0MzEwNDBDUUhFc28nLCdcXFxceDIwYnJvd3NlcicsJ19yZWdFeHBUb1N0cmluZycsJ2luY2x1ZGVzJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ2RlZmF1bHQnLCdzZXJpYWxpemUnLCc2MDk5MicsJ19fZXMnKydNb2R1bGUnLCdwZXJmb3JtYW5jZScsJ2JpbmQnLCdyZWFkeVN0YXRlJywnX2Nvbm5lY3RpbmcnLCdfbnVtYmVyUmVnRXhwJywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ19pc0FycmF5Jywnb25lcnJvcicsJ2hvc3QnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCdfd3MnLCcxNjk4MzQ5NzAzOTM2Jywnc2VuZCcsJ2NvbmNhdCcsJ2dhdGV3YXkuZG9ja2VyLmludGVybmFsJywnY3VycmVudCcsJ29uY2xvc2UnLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnMTI3LjAuMC4xJywnYXV0b0V4cGFuZExpbWl0JywnRXJyb3InLCdfY2FwSWZTdHJpbmcnLCdzb3J0UHJvcHMnLCdfdW5kZWZpbmVkJ107XzB4MzkxZD1mdW5jdGlvbigpe3JldHVybiBfMHgyZDhhOTg7fTtyZXR1cm4gXzB4MzkxZCgpO312YXIgXzB4MzBkNDZjPV8weDM5NGI7ZnVuY3Rpb24gXzB4Mzk0YihfMHgxMjJmMzIsXzB4NTY5ZjI4KXt2YXIgXzB4MzkxZGYzPV8weDM5MWQoKTtyZXR1cm4gXzB4Mzk0Yj1mdW5jdGlvbihfMHgzOTRiMzUsXzB4MmZiZTE2KXtfMHgzOTRiMzU9XzB4Mzk0YjM1LTB4Y2M7dmFyIF8weDExMTg5MD1fMHgzOTFkZjNbXzB4Mzk0YjM1XTtyZXR1cm4gXzB4MTExODkwO30sXzB4Mzk0YihfMHgxMjJmMzIsXzB4NTY5ZjI4KTt9KGZ1bmN0aW9uKF8weDFkM2U1MyxfMHgxZjI0ZTUpe3ZhciBfMHg0MzBjNmM9XzB4Mzk0YixfMHg0NTk1ZWM9XzB4MWQzZTUzKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg1NTA2YmY9cGFyc2VJbnQoXzB4NDMwYzZjKDB4ZWMpKS8weDEqKC1wYXJzZUludChfMHg0MzBjNmMoMHgxOTQpKS8weDIpKy1wYXJzZUludChfMHg0MzBjNmMoMHgxMjcpKS8weDMqKHBhcnNlSW50KF8weDQzMGM2YygweDEwNSkpLzB4NCkrLXBhcnNlSW50KF8weDQzMGM2YygweDFiMCkpLzB4NSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4ZTkpKS8weDYqKHBhcnNlSW50KF8weDQzMGM2YygweGZjKSkvMHg3KSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTBhKSkvMHg4KihwYXJzZUludChfMHg0MzBjNmMoMHgxMGUpKS8weDkpKy1wYXJzZUludChfMHg0MzBjNmMoMHgxN2UpKS8weGErLXBhcnNlSW50KF8weDQzMGM2YygweDEyMSkpLzB4YiooLXBhcnNlSW50KF8weDQzMGM2YygweDE0YikpLzB4Yyk7aWYoXzB4NTUwNmJmPT09XzB4MWYyNGU1KWJyZWFrO2Vsc2UgXzB4NDU5NWVjWydwdXNoJ10oXzB4NDU5NWVjWydzaGlmdCddKCkpO31jYXRjaChfMHgxMDNiNGEpe18weDQ1OTVlY1sncHVzaCddKF8weDQ1OTVlY1snc2hpZnQnXSgpKTt9fX0oXzB4MzkxZCwweDk2ZGNmKSk7dmFyIGo9T2JqZWN0WydjcmVhdGUnXSxIPU9iamVjdFsnZGVmaW5lUHJvcGVydHknXSxHPU9iamVjdFtfMHgzMGQ0NmMoMHgxNmUpXSxlZT1PYmplY3RbJ2dldE93blByb3BlcnR5TmFtZXMnXSx0ZT1PYmplY3RbXzB4MzBkNDZjKDB4MWFlKV0sbmU9T2JqZWN0Wydwcm90b3R5cGUnXVtfMHgzMGQ0NmMoMHgxMmEpXSxyZT0oXzB4MWQ1ZmM2LF8weDc0NzgxZCxfMHg4ZjAzY2QsXzB4NDlmZjRmKT0+e3ZhciBfMHgxODBkY2Q9XzB4MzBkNDZjO2lmKF8weDc0NzgxZCYmdHlwZW9mIF8weDc0NzgxZD09XzB4MTgwZGNkKDB4MTgzKXx8dHlwZW9mIF8weDc0NzgxZD09XzB4MTgwZGNkKDB4ZWEpKXtmb3IobGV0IF8weDE2Y2Q5NSBvZiBlZShfMHg3NDc4MWQpKSFuZVsnY2FsbCddKF8weDFkNWZjNixfMHgxNmNkOTUpJiZfMHgxNmNkOTUhPT1fMHg4ZjAzY2QmJkgoXzB4MWQ1ZmM2LF8weDE2Y2Q5NSx7J2dldCc6KCk9Pl8weDc0NzgxZFtfMHgxNmNkOTVdLCdlbnVtZXJhYmxlJzohKF8weDQ5ZmY0Zj1HKF8weDc0NzgxZCxfMHgxNmNkOTUpKXx8XzB4NDlmZjRmW18weDE4MGRjZCgweDE1MSldfSk7fXJldHVybiBfMHgxZDVmYzY7fSx4PShfMHg1NjhiYzgsXzB4MmRlMWQ0LF8weDViNGM0Zik9PihfMHg1YjRjNGY9XzB4NTY4YmM4IT1udWxsP2oodGUoXzB4NTY4YmM4KSk6e30scmUoXzB4MmRlMWQ0fHwhXzB4NTY4YmM4fHwhXzB4NTY4YmM4W18weDMwZDQ2YygweGNkKV0/SChfMHg1YjRjNGYsXzB4MzBkNDZjKDB4MWI1KSx7J3ZhbHVlJzpfMHg1NjhiYzgsJ2VudW1lcmFibGUnOiEweDB9KTpfMHg1YjRjNGYsXzB4NTY4YmM4KSksWD1jbGFzc3tjb25zdHJ1Y3RvcihfMHg0N2YzOGMsXzB4NWMxYjA2LF8weDNmMjg1NixfMHg0NTdkM2QsXzB4MThmZjY0KXt2YXIgXzB4NGJiNjFkPV8weDMwZDQ2Yzt0aGlzW18weDRiYjYxZCgweDE2NSldPV8weDQ3ZjM4Yyx0aGlzW18weDRiYjYxZCgweGQ2KV09XzB4NWMxYjA2LHRoaXNbXzB4NGJiNjFkKDB4MTVkKV09XzB4M2YyODU2LHRoaXNbXzB4NGJiNjFkKDB4ZjYpXT1fMHg0NTdkM2QsdGhpc1snZG9ja2VyaXplZEFwcCddPV8weDE4ZmY2NCx0aGlzW18weDRiYjYxZCgweGViKV09ITB4MCx0aGlzW18weDRiYjYxZCgweDEzNyldPSEweDAsdGhpc1tfMHg0YmI2MWQoMHgxNGMpXT0hMHgxLHRoaXNbXzB4NGJiNjFkKDB4ZDEpXT0hMHgxLHRoaXNbJ19pbk5leHRFZGdlJ109XzB4NDdmMzhjW18weDRiYjYxZCgweDEzOCldPy5bXzB4NGJiNjFkKDB4ZWYpXT8uW18weDRiYjYxZCgweDEyZCldPT09J2VkZ2UnLHRoaXNbXzB4NGJiNjFkKDB4MTU0KV09IXRoaXNbXzB4NGJiNjFkKDB4MTY1KV1bXzB4NGJiNjFkKDB4MTM4KV0/LltfMHg0YmI2MWQoMHgxMWQpXT8uW18weDRiYjYxZCgweDFhZCldJiYhdGhpc1tfMHg0YmI2MWQoMHgxMTgpXSx0aGlzWydfV2ViU29ja2V0Q2xhc3MnXT1udWxsLHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J109MHgwLHRoaXNbXzB4NGJiNjFkKDB4MTQ1KV09MHgxNCx0aGlzW18weDRiYjYxZCgweDE3NCldPSdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0Jyx0aGlzW18weDRiYjYxZCgweDE5MyldPSh0aGlzW18weDRiYjYxZCgweDE1NCldP18weDRiYjYxZCgweDE0YSk6J0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJykrdGhpc1tfMHg0YmI2MWQoMHgxNzQpXTt9YXN5bmNbXzB4MzBkNDZjKDB4MTMxKV0oKXt2YXIgXzB4MWU5MGYxPV8weDMwZDQ2YztpZih0aGlzW18weDFlOTBmMSgweDE1ZildKXJldHVybiB0aGlzW18weDFlOTBmMSgweDE1ZildO2xldCBfMHg0YWU3N2M7aWYodGhpc1tfMHgxZTkwZjEoMHgxNTQpXXx8dGhpc1snX2luTmV4dEVkZ2UnXSlfMHg0YWU3N2M9dGhpc1tfMHgxZTkwZjEoMHgxNjUpXVsnV2ViU29ja2V0J107ZWxzZXtpZih0aGlzWydnbG9iYWwnXVtfMHgxZTkwZjEoMHgxMzgpXT8uWydfV2ViU29ja2V0J10pXzB4NGFlNzdjPXRoaXNbJ2dsb2JhbCddW18weDFlOTBmMSgweDEzOCldPy5bJ19XZWJTb2NrZXQnXTtlbHNlIHRyeXtsZXQgXzB4NGNlYjk1PWF3YWl0IGltcG9ydCgncGF0aCcpO18weDRhZTc3Yz0oYXdhaXQgaW1wb3J0KChhd2FpdCBpbXBvcnQoJ3VybCcpKVsncGF0aFRvRmlsZVVSTCddKF8weDRjZWI5NVtfMHgxZTkwZjEoMHgxMzIpXSh0aGlzW18weDFlOTBmMSgweGY2KV0sJ3dzL2luZGV4LmpzJykpWyd0b1N0cmluZyddKCkpKVtfMHgxZTkwZjEoMHgxYjUpXTt9Y2F0Y2h7dHJ5e18weDRhZTc3Yz1yZXF1aXJlKHJlcXVpcmUoXzB4MWU5MGYxKDB4MTZhKSlbXzB4MWU5MGYxKDB4MTMyKV0odGhpc1snbm9kZU1vZHVsZXMnXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHgxZTkwZjEoMHgxYTMpKTt9fX1yZXR1cm4gdGhpc1snX1dlYlNvY2tldENsYXNzJ109XzB4NGFlNzdjLF8weDRhZTc3Yzt9W18weDMwZDQ2YygweDFhMSldKCl7dmFyIF8weDQ5MDg5YT1fMHgzMGQ0NmM7dGhpc1tfMHg0OTA4OWEoMHhkMSldfHx0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J10+PXRoaXNbXzB4NDkwODlhKDB4MTQ1KV18fCh0aGlzW18weDQ5MDg5YSgweDEzNyldPSEweDEsdGhpc1tfMHg0OTA4OWEoMHhkMSldPSEweDAsdGhpc1tfMHg0OTA4OWEoMHgxMWIpXSsrLHRoaXNbXzB4NDkwODlhKDB4ZDgpXT1uZXcgUHJvbWlzZSgoXzB4MzRlYWZjLF8weDE0NDMyNCk9Pnt2YXIgXzB4ODc0ZmE0PV8weDQ5MDg5YTt0aGlzW18weDg3NGZhNCgweDEzMSldKClbXzB4ODc0ZmE0KDB4MTI4KV0oXzB4NGJhZjU4PT57dmFyIF8weDQxZGRhYz1fMHg4NzRmYTQ7bGV0IF8weDI1NzQzYj1uZXcgXzB4NGJhZjU4KF8weDQxZGRhYygweDE4OSkrKCF0aGlzWydfaW5Ccm93c2VyJ10mJnRoaXNbXzB4NDFkZGFjKDB4MTNiKV0/XzB4NDFkZGFjKDB4ZGMpOnRoaXNbXzB4NDFkZGFjKDB4ZDYpXSkrJzonK3RoaXNbXzB4NDFkZGFjKDB4MTVkKV0pO18weDI1NzQzYltfMHg0MWRkYWMoMHhkNSldPSgpPT57dmFyIF8weDJiNGY2NT1fMHg0MWRkYWM7dGhpc1tfMHgyYjRmNjUoMHhlYildPSEweDEsdGhpc1tfMHgyYjRmNjUoMHgxNzIpXShfMHgyNTc0M2IpLHRoaXNbXzB4MmI0ZjY1KDB4ZjUpXSgpLF8weDE0NDMyNChuZXcgRXJyb3IoJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InKSk7fSxfMHgyNTc0M2JbXzB4NDFkZGFjKDB4MTlmKV09KCk9Pnt2YXIgXzB4NDIwODJhPV8weDQxZGRhYzt0aGlzW18weDQyMDgyYSgweDE1NCldfHxfMHgyNTc0M2JbXzB4NDIwODJhKDB4MTg2KV0mJl8weDI1NzQzYltfMHg0MjA4MmEoMHgxODYpXVsndW5yZWYnXSYmXzB4MjU3NDNiW18weDQyMDgyYSgweDE4NildW18weDQyMDgyYSgweDE5MCldKCksXzB4MzRlYWZjKF8weDI1NzQzYik7fSxfMHgyNTc0M2JbXzB4NDFkZGFjKDB4ZGUpXT0oKT0+e3ZhciBfMHgxMzI5NzI9XzB4NDFkZGFjO3RoaXNbXzB4MTMyOTcyKDB4MTM3KV09ITB4MCx0aGlzW18weDEzMjk3MigweDE3MildKF8weDI1NzQzYiksdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpO30sXzB4MjU3NDNiW18weDQxZGRhYygweDFhYildPV8weDFhZmQxMT0+e3ZhciBfMHgxOGQ2YjU9XzB4NDFkZGFjO3RyeXtfMHgxYWZkMTEmJl8weDFhZmQxMVtfMHgxOGQ2YjUoMHgxNGYpXSYmdGhpc1tfMHgxOGQ2YjUoMHgxNTQpXSYmSlNPTlsncGFyc2UnXShfMHgxYWZkMTFbJ2RhdGEnXSlbXzB4MThkNmI1KDB4MTE2KV09PT1fMHgxOGQ2YjUoMHgxYTIpJiZ0aGlzWydnbG9iYWwnXVtfMHgxOGQ2YjUoMHgxMTEpXVtfMHgxOGQ2YjUoMHgxYTIpXSgpO31jYXRjaHt9fTt9KVtfMHg4NzRmYTQoMHgxMjgpXShfMHgxYjI0ZDI9Pih0aGlzW18weDg3NGZhNCgweDE0YyldPSEweDAsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLHRoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MSx0aGlzW18weDg3NGZhNCgweGViKV09ITB4MCx0aGlzW18weDg3NGZhNCgweDExYildPTB4MCxfMHgxYjI0ZDIpKVtfMHg4NzRmYTQoMHgxNDcpXShfMHgzN2Y1YTA9Pih0aGlzW18weDg3NGZhNCgweDE0YyldPSEweDEsdGhpc1tfMHg4NzRmYTQoMHhkMSldPSEweDEsY29uc29sZVtfMHg4NzRmYTQoMHgxMDIpXShfMHg4NzRmYTQoMHgxOTIpK3RoaXNbXzB4ODc0ZmE0KDB4MTc0KV0pLF8weDE0NDMyNChuZXcgRXJyb3IoJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcrKF8weDM3ZjVhMCYmXzB4MzdmNWEwW18weDg3NGZhNCgweGU2KV0pKSkpKTt9KSk7fVsnX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHg0OWE0NjEpe3ZhciBfMHg0Zjg4Njk9XzB4MzBkNDZjO3RoaXNbXzB4NGY4ODY5KDB4MTRjKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDE7dHJ5e18weDQ5YTQ2MVtfMHg0Zjg4NjkoMHhkZSldPW51bGwsXzB4NDlhNDYxWydvbmVycm9yJ109bnVsbCxfMHg0OWE0NjFbXzB4NGY4ODY5KDB4MTlmKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHg0OWE0NjFbXzB4NGY4ODY5KDB4ZDApXTwweDImJl8weDQ5YTQ2MVtfMHg0Zjg4NjkoMHgxOTcpXSgpO31jYXRjaHt9fVsnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpe3ZhciBfMHgxNTk3OWI9XzB4MzBkNDZjO2NsZWFyVGltZW91dCh0aGlzWydfcmVjb25uZWN0VGltZW91dCddKSwhKHRoaXNbXzB4MTU5NzliKDB4MTFiKV0+PXRoaXNbXzB4MTU5NzliKDB4MTQ1KV0pJiYodGhpc1tfMHgxNTk3OWIoMHgxMWUpXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDU1N2I2OD1fMHgxNTk3OWI7dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzWydfY29ubmVjdGluZyddfHwodGhpc1snX2Nvbm5lY3RUb0hvc3ROb3cnXSgpLHRoaXNbXzB4NTU3YjY4KDB4ZDgpXT8uW18weDU1N2I2OCgweDE0NyldKCgpPT50aGlzW18weDU1N2I2OCgweGY1KV0oKSkpO30sMHgxZjQpLHRoaXNbXzB4MTU5NzliKDB4MTFlKV1bXzB4MTU5NzliKDB4MTkwKV0mJnRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J11bXzB4MTU5NzliKDB4MTkwKV0oKSk7fWFzeW5jW18weDMwZDQ2YygweGRhKV0oXzB4MzllNzgyKXt2YXIgXzB4NDg2MGY5PV8weDMwZDQ2Yzt0cnl7aWYoIXRoaXNbJ19hbGxvd2VkVG9TZW5kJ10pcmV0dXJuO3RoaXNbXzB4NDg2MGY5KDB4MTM3KV0mJnRoaXNbXzB4NDg2MGY5KDB4MWExKV0oKSwoYXdhaXQgdGhpc1snX3dzJ10pW18weDQ4NjBmOSgweGRhKV0oSlNPTlsnc3RyaW5naWZ5J10oXzB4MzllNzgyKSk7fWNhdGNoKF8weDFlMTdlMCl7Y29uc29sZVtfMHg0ODYwZjkoMHgxMDIpXSh0aGlzW18weDQ4NjBmOSgweDE5MyldKyc6XFxcXHgyMCcrKF8weDFlMTdlMCYmXzB4MWUxN2UwW18weDQ4NjBmOSgweGU2KV0pKSx0aGlzW18weDQ4NjBmOSgweGViKV09ITB4MSx0aGlzW18weDQ4NjBmOSgweGY1KV0oKTt9fX07ZnVuY3Rpb24gYihfMHg0NmQwYjEsXzB4NGMxOGViLF8weDMyMWZmNyxfMHg2NzY5MTEsXzB4NGM4Mjk5LF8weDU0MjU1YSl7dmFyIF8weDM5MzdlNz1fMHgzMGQ0NmM7bGV0IF8weDUwZTBmOT1fMHgzMjFmZjdbXzB4MzkzN2U3KDB4MTNkKV0oJywnKVsnbWFwJ10oXzB4NDFkODc9Pnt2YXIgXzB4NTE3OWEyPV8weDM5MzdlNzt0cnl7XzB4NDZkMGIxWydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ118fCgoXzB4NGM4Mjk5PT09XzB4NTE3OWEyKDB4MTllKXx8XzB4NGM4Mjk5PT09XzB4NTE3OWEyKDB4MTIwKXx8XzB4NGM4Mjk5PT09XzB4NTE3OWEyKDB4MTUyKSkmJihfMHg0YzgyOTkrPSFfMHg0NmQwYjFbXzB4NTE3OWEyKDB4MTM4KV0/LltfMHg1MTc5YTIoMHgxMWQpXT8uW18weDUxNzlhMigweDFhZCldJiZfMHg0NmQwYjFbXzB4NTE3OWEyKDB4MTM4KV0/LlsnZW52J10/LltfMHg1MTc5YTIoMHgxMmQpXSE9PSdlZGdlJz9fMHg1MTc5YTIoMHgxYjEpOl8weDUxNzlhMigweDE1YykpLF8weDQ2ZDBiMVsnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHg0YzgyOTl9KTtsZXQgXzB4N2FhYmJmPW5ldyBYKF8weDQ2ZDBiMSxfMHg0YzE4ZWIsXzB4NDFkODcsXzB4Njc2OTExLF8weDU0MjU1YSk7cmV0dXJuIF8weDdhYWJiZlsnc2VuZCddW18weDUxNzlhMigweGNmKV0oXzB4N2FhYmJmKTt9Y2F0Y2goXzB4MWNiMDZmKXtyZXR1cm4gY29uc29sZVtfMHg1MTc5YTIoMHgxMDIpXSgnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLF8weDFjYjA2ZiYmXzB4MWNiMDZmWydtZXNzYWdlJ10pLCgpPT57fTt9fSk7cmV0dXJuIF8weDI3N2UwND0+XzB4NTBlMGY5W18weDM5MzdlNygweDFhYyldKF8weGE0MmZiPT5fMHhhNDJmYihfMHgyNzdlMDQpKTt9ZnVuY3Rpb24gVyhfMHgxZWM1YzIpe3ZhciBfMHgzZjA0OTU9XzB4MzBkNDZjO2xldCBfMHgxMTQyN2Y9ZnVuY3Rpb24oXzB4M2Q1NTgzLF8weGY1MGE3KXtyZXR1cm4gXzB4ZjUwYTctXzB4M2Q1NTgzO30sXzB4MjU1MTVlO2lmKF8weDFlYzVjMltfMHgzZjA0OTUoMHhjZSldKV8weDI1NTE1ZT1mdW5jdGlvbigpe3ZhciBfMHgzODQwNTg9XzB4M2YwNDk1O3JldHVybiBfMHgxZWM1YzJbXzB4Mzg0MDU4KDB4Y2UpXVsnbm93J10oKTt9O2Vsc2V7aWYoXzB4MWVjNWMyW18weDNmMDQ5NSgweDEzOCldJiZfMHgxZWM1YzJbXzB4M2YwNDk1KDB4MTM4KV1bXzB4M2YwNDk1KDB4MTUwKV0mJl8weDFlYzVjMltfMHgzZjA0OTUoMHgxMzgpXT8uW18weDNmMDQ5NSgweGVmKV0/LltfMHgzZjA0OTUoMHgxMmQpXSE9PV8weDNmMDQ5NSgweDEzMykpXzB4MjU1MTVlPWZ1bmN0aW9uKCl7dmFyIF8weDRiOWE4Yz1fMHgzZjA0OTU7cmV0dXJuIF8weDFlYzVjMltfMHg0YjlhOGMoMHgxMzgpXVsnaHJ0aW1lJ10oKTt9LF8weDExNDI3Zj1mdW5jdGlvbihfMHgxMzQwZjIsXzB4NDVlOTAwKXtyZXR1cm4gMHgzZTgqKF8weDQ1ZTkwMFsweDBdLV8weDEzNDBmMlsweDBdKSsoXzB4NDVlOTAwWzB4MV0tXzB4MTM0MGYyWzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDRhMTljOH09cmVxdWlyZShfMHgzZjA0OTUoMHgxMjQpKTtfMHgyNTUxNWU9ZnVuY3Rpb24oKXt2YXIgXzB4NDk1NTcyPV8weDNmMDQ5NTtyZXR1cm4gXzB4NGExOWM4W18weDQ5NTU3MigweDE0OSldKCk7fTt9Y2F0Y2h7XzB4MjU1MTVlPWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4MTE0MjdmLCd0aW1lU3RhbXAnOl8weDI1NTE1ZSwnbm93JzooKT0+RGF0ZVtfMHgzZjA0OTUoMHgxNDkpXSgpfTt9ZnVuY3Rpb24gSihfMHgyYzk5ZmQsXzB4MTI5OGY5LF8weDdhNDQ1MCl7dmFyIF8weDJiNjU2MD1fMHgzMGQ0NmM7aWYoXzB4MmM5OWZkW18weDJiNjU2MCgweDE4YyldIT09dm9pZCAweDApcmV0dXJuIF8weDJjOTlmZFtfMHgyYjY1NjAoMHgxOGMpXTtsZXQgXzB4MTdkZTI4PV8weDJjOTlmZFtfMHgyYjY1NjAoMHgxMzgpXT8uWyd2ZXJzaW9ucyddPy5bXzB4MmI2NTYwKDB4MWFkKV18fF8weDJjOTlmZFtfMHgyYjY1NjAoMHgxMzgpXT8uW18weDJiNjU2MCgweGVmKV0/LltfMHgyYjY1NjAoMHgxMmQpXT09PSdlZGdlJztyZXR1cm4gXzB4MTdkZTI4JiZfMHg3YTQ0NTA9PT1fMHgyYjY1NjAoMHgxNWEpP18weDJjOTlmZFtfMHgyYjY1NjAoMHgxOGMpXT0hMHgxOl8weDJjOTlmZFtfMHgyYjY1NjAoMHgxOGMpXT1fMHgxN2RlMjh8fCFfMHgxMjk4Zjl8fF8weDJjOTlmZFsnbG9jYXRpb24nXT8uWydob3N0bmFtZSddJiZfMHgxMjk4ZjlbXzB4MmI2NTYwKDB4MWIzKV0oXzB4MmM5OWZkW18weDJiNjU2MCgweDExMSldW18weDJiNjU2MCgweDEyMildKSxfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MThjKV07fWZ1bmN0aW9uIFkoXzB4MzE5NzUxLF8weDVkMjY3YSxfMHgyNDA4YmEsXzB4NTYzNTA0KXt2YXIgXzB4NDI0OGQ2PV8weDMwZDQ2YztfMHgzMTk3NTE9XzB4MzE5NzUxLF8weDVkMjY3YT1fMHg1ZDI2N2EsXzB4MjQwOGJhPV8weDI0MDhiYSxfMHg1NjM1MDQ9XzB4NTYzNTA0O2xldCBfMHg1YzZiYTQ9VyhfMHgzMTk3NTEpLF8weDVkZWFkNT1fMHg1YzZiYTRbXzB4NDI0OGQ2KDB4ZjApXSxfMHgyOTlkYTM9XzB4NWM2YmE0Wyd0aW1lU3RhbXAnXTtjbGFzcyBfMHgzMTg3YTd7Y29uc3RydWN0b3IoKXt2YXIgXzB4NTRjNTRiPV8weDQyNDhkNjt0aGlzW18weDU0YzU0YigweDE3MSldPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg1NGM1NGIoMHhkMildPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1snX3F1b3RlZFJlZ0V4cCddPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbXzB4NTRjNTRiKDB4ZTUpXT1fMHgzMTk3NTFbXzB4NTRjNTRiKDB4MTk4KV0sdGhpc1tfMHg1NGM1NGIoMHhkNyldPV8weDMxOTc1MVtfMHg1NGM1NGIoMHgxNjgpXSx0aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ109T2JqZWN0W18weDU0YzU0YigweDE2ZSldLHRoaXNbXzB4NTRjNTRiKDB4MTJjKV09T2JqZWN0W18weDU0YzU0YigweDE1OCldLHRoaXNbXzB4NTRjNTRiKDB4MTcwKV09XzB4MzE5NzUxW18weDU0YzU0YigweDE2OSldLHRoaXNbXzB4NTRjNTRiKDB4MWIyKV09UmVnRXhwWydwcm90b3R5cGUnXVtfMHg1NGM1NGIoMHgxNGQpXSx0aGlzW18weDU0YzU0YigweDExZildPURhdGVbJ3Byb3RvdHlwZSddW18weDU0YzU0YigweDE0ZCldO31bXzB4NDI0OGQ2KDB4MWI2KV0oXzB4NDNiZmM3LF8weDI1ZDQ1MSxfMHgxZTcxYzUsXzB4NTA4YTBmKXt2YXIgXzB4MTM2NjkyPV8weDQyNDhkNixfMHgyMmY3Yjg9dGhpcyxfMHgyN2E0NzM9XzB4MWU3MWM1WydhdXRvRXhwYW5kJ107ZnVuY3Rpb24gXzB4NDEyYmZlKF8weDE1NjFmNyxfMHgyYTA5ODcsXzB4NThmMTMwKXt2YXIgXzB4MjFjOTFkPV8weDM5NGI7XzB4MmEwOTg3W18weDIxYzkxZCgweDE5MSldPV8weDIxYzkxZCgweDExMyksXzB4MmEwOTg3W18weDIxYzkxZCgweDEzOSldPV8weDE1NjFmN1tfMHgyMWM5MWQoMHhlNildLF8weDFjMzZiMD1fMHg1OGYxMzBbJ25vZGUnXVtfMHgyMWM5MWQoMHhkZCldLF8weDU4ZjEzMFtfMHgyMWM5MWQoMHgxYWQpXVtfMHgyMWM5MWQoMHhkZCldPV8weDJhMDk4NyxfMHgyMmY3YjhbXzB4MjFjOTFkKDB4MTQwKV0oXzB4MmEwOTg3LF8weDU4ZjEzMCk7fXRyeXtfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTA3KV0rKyxfMHgxZTcxYzVbJ2F1dG9FeHBhbmQnXSYmXzB4MWU3MWM1W18weDEzNjY5MigweGU4KV1bXzB4MTM2NjkyKDB4MTM0KV0oXzB4MjVkNDUxKTt2YXIgXzB4MzE1NzQzLF8weDU0MWFhOCxfMHgzY2NlZDksXzB4MmEzNGExLF8weDIwYjRmMj1bXSxfMHg0ZGE2M2I9W10sXzB4NTU2OTc5LF8weDJkMmQ2ZD10aGlzW18weDEzNjY5MigweDEzNildKF8weDI1ZDQ1MSksXzB4ZDgzMmM1PV8weDJkMmQ2ZD09PSdhcnJheScsXzB4MjY4YzQwPSEweDEsXzB4MTMwZjNlPV8weDJkMmQ2ZD09PV8weDEzNjY5MigweGVhKSxfMHgzNjliMGU9dGhpc1tfMHgxMzY2OTIoMHgxMTUpXShfMHgyZDJkNmQpLF8weDQ5ODQxOD10aGlzWydfaXNQcmltaXRpdmVXcmFwcGVyVHlwZSddKF8weDJkMmQ2ZCksXzB4MzQwZjgzPV8weDM2OWIwZXx8XzB4NDk4NDE4LF8weDI0OTNiZT17fSxfMHgzNmYzY2M9MHgwLF8weDNhMmZkYT0hMHgxLF8weDFjMzZiMCxfMHgzNDhiZjE9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxMjkpXSl7aWYoXzB4ZDgzMmM1KXtpZihfMHg1NDFhYTg9XzB4MjVkNDUxW18weDEzNjY5MigweDE1ZSldLF8weDU0MWFhOD5fMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTYyKV0pe2ZvcihfMHgzY2NlZDk9MHgwLF8weDJhMzRhMT1fMHgxZTcxYzVbJ2VsZW1lbnRzJ10sXzB4MzE1NzQzPV8weDNjY2VkOTtfMHgzMTU3NDM8XzB4MmEzNGExO18weDMxNTc0MysrKV8weDRkYTYzYltfMHgxMzY2OTIoMHgxMzQpXShfMHgyMmY3YjhbXzB4MTM2NjkyKDB4ZjcpXShfMHgyMGI0ZjIsXzB4MjVkNDUxLF8weDJkMmQ2ZCxfMHgzMTU3NDMsXzB4MWU3MWM1KSk7XzB4NDNiZmM3W18weDEzNjY5MigweDE2NildPSEweDA7fWVsc2V7Zm9yKF8weDNjY2VkOT0weDAsXzB4MmEzNGExPV8weDU0MWFhOCxfMHgzMTU3NDM9XzB4M2NjZWQ5O18weDMxNTc0MzxfMHgyYTM0YTE7XzB4MzE1NzQzKyspXzB4NGRhNjNiW18weDEzNjY5MigweDEzNCldKF8weDIyZjdiOFtfMHgxMzY2OTIoMHhmNyldKF8weDIwYjRmMixfMHgyNWQ0NTEsXzB4MmQyZDZkLF8weDMxNTc0MyxfMHgxZTcxYzUpKTt9XzB4MWU3MWM1W18weDEzNjY5MigweDE3NSldKz1fMHg0ZGE2M2JbJ2xlbmd0aCddO31pZighKF8weDJkMmQ2ZD09PSdudWxsJ3x8XzB4MmQyZDZkPT09XzB4MTM2NjkyKDB4MTk4KSkmJiFfMHgzNjliMGUmJl8weDJkMmQ2ZCE9PV8weDEzNjY5MigweDEwMSkmJl8weDJkMmQ2ZCE9PV8weDEzNjY5MigweDFhZikmJl8weDJkMmQ2ZCE9PSdiaWdpbnQnKXt2YXIgXzB4MmNjN2MzPV8weDUwOGEwZltfMHgxMzY2OTIoMHgxOWQpXXx8XzB4MWU3MWM1Wydwcm9wcyddO2lmKHRoaXNbXzB4MTM2NjkyKDB4MTg0KV0oXzB4MjVkNDUxKT8oXzB4MzE1NzQzPTB4MCxfMHgyNWQ0NTFbXzB4MTM2NjkyKDB4MWFjKV0oZnVuY3Rpb24oXzB4NWI1MTEwKXt2YXIgXzB4NThjM2NiPV8weDEzNjY5MjtpZihfMHgzNmYzY2MrKyxfMHgxZTcxYzVbXzB4NThjM2NiKDB4MTc1KV0rKyxfMHgzNmYzY2M+XzB4MmNjN2MzKXtfMHgzYTJmZGE9ITB4MDtyZXR1cm47fWlmKCFfMHgxZTcxYzVbXzB4NThjM2NiKDB4MTUzKV0mJl8weDFlNzFjNVtfMHg1OGMzY2IoMHgxODIpXSYmXzB4MWU3MWM1W18weDU4YzNjYigweDE3NSldPl8weDFlNzFjNVtfMHg1OGMzY2IoMHhlMSldKXtfMHgzYTJmZGE9ITB4MDtyZXR1cm47fV8weDRkYTYzYltfMHg1OGMzY2IoMHgxMzQpXShfMHgyMmY3YjhbXzB4NThjM2NiKDB4ZjcpXShfMHgyMGI0ZjIsXzB4MjVkNDUxLF8weDU4YzNjYigweDE2YyksXzB4MzE1NzQzKyssXzB4MWU3MWM1LGZ1bmN0aW9uKF8weGZjYjVjNSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weGZjYjVjNTt9O30oXzB4NWI1MTEwKSkpO30pKTp0aGlzW18weDEzNjY5MigweDE0MyldKF8weDI1ZDQ1MSkmJl8weDI1ZDQ1MVsnZm9yRWFjaCddKGZ1bmN0aW9uKF8weDIwNTZmNSxfMHgzMTMwMTApe3ZhciBfMHg1NWE3ZmQ9XzB4MTM2NjkyO2lmKF8weDM2ZjNjYysrLF8weDFlNzFjNVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDM2ZjNjYz5fMHgyY2M3YzMpe18weDNhMmZkYT0hMHgwO3JldHVybjt9aWYoIV8weDFlNzFjNVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHgxZTcxYzVbJ2F1dG9FeHBhbmQnXSYmXzB4MWU3MWM1WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDFlNzFjNVtfMHg1NWE3ZmQoMHhlMSldKXtfMHgzYTJmZGE9ITB4MDtyZXR1cm47fXZhciBfMHgyN2I3NTU9XzB4MzEzMDEwWyd0b1N0cmluZyddKCk7XzB4MjdiNzU1WydsZW5ndGgnXT4weDY0JiYoXzB4MjdiNzU1PV8weDI3Yjc1NVsnc2xpY2UnXSgweDAsMHg2NCkrJy4uLicpLF8weDRkYTYzYltfMHg1NWE3ZmQoMHgxMzQpXShfMHgyMmY3YjhbXzB4NTVhN2ZkKDB4ZjcpXShfMHgyMGI0ZjIsXzB4MjVkNDUxLF8weDU1YTdmZCgweDEwZCksXzB4MjdiNzU1LF8weDFlNzFjNSxmdW5jdGlvbihfMHg1OGRkZTkpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHg1OGRkZTk7fTt9KF8weDIwNTZmNSkpKTt9KSwhXzB4MjY4YzQwKXt0cnl7Zm9yKF8weDU1Njk3OSBpbiBfMHgyNWQ0NTEpaWYoIShfMHhkODMyYzUmJl8weDM0OGJmMVtfMHgxMzY2OTIoMHhlNyldKF8weDU1Njk3OSkpJiYhdGhpc1tfMHgxMzY2OTIoMHhmOCldKF8weDI1ZDQ1MSxfMHg1NTY5NzksXzB4MWU3MWM1KSl7aWYoXzB4MzZmM2NjKyssXzB4MWU3MWM1W18weDEzNjY5MigweDE3NSldKyssXzB4MzZmM2NjPl8weDJjYzdjMyl7XzB4M2EyZmRhPSEweDA7YnJlYWs7fWlmKCFfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTUzKV0mJl8weDFlNzFjNVtfMHgxMzY2OTIoMHgxODIpXSYmXzB4MWU3MWM1WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDFlNzFjNVtfMHgxMzY2OTIoMHhlMSldKXtfMHgzYTJmZGE9ITB4MDticmVhazt9XzB4NGRhNjNiW18weDEzNjY5MigweDEzNCldKF8weDIyZjdiOFtfMHgxMzY2OTIoMHgxMDgpXShfMHgyMGI0ZjIsXzB4MjQ5M2JlLF8weDI1ZDQ1MSxfMHgyZDJkNmQsXzB4NTU2OTc5LF8weDFlNzFjNSkpO319Y2F0Y2h7fWlmKF8weDI0OTNiZVtfMHgxMzY2OTIoMHgxM2EpXT0hMHgwLF8weDEzMGYzZSYmKF8weDI0OTNiZVtfMHgxMzY2OTIoMHgxNmYpXT0hMHgwKSwhXzB4M2EyZmRhKXt2YXIgXzB4Mzc5YWQ4PVtdW18weDEzNjY5MigweGRiKV0odGhpc1tfMHgxMzY2OTIoMHgxMmMpXShfMHgyNWQ0NTEpKVtfMHgxMzY2OTIoMHhkYildKHRoaXNbXzB4MTM2NjkyKDB4MTRlKV0oXzB4MjVkNDUxKSk7Zm9yKF8weDMxNTc0Mz0weDAsXzB4NTQxYWE4PV8weDM3OWFkOFtfMHgxMzY2OTIoMHgxNWUpXTtfMHgzMTU3NDM8XzB4NTQxYWE4O18weDMxNTc0MysrKWlmKF8weDU1Njk3OT1fMHgzNzlhZDhbXzB4MzE1NzQzXSwhKF8weGQ4MzJjNSYmXzB4MzQ4YmYxW18weDEzNjY5MigweGU3KV0oXzB4NTU2OTc5W18weDEzNjY5MigweDE0ZCldKCkpKSYmIXRoaXNbXzB4MTM2NjkyKDB4ZjgpXShfMHgyNWQ0NTEsXzB4NTU2OTc5LF8weDFlNzFjNSkmJiFfMHgyNDkzYmVbXzB4MTM2NjkyKDB4MTJlKStfMHg1NTY5NzlbXzB4MTM2NjkyKDB4MTRkKV0oKV0pe2lmKF8weDM2ZjNjYysrLF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNzUpXSsrLF8weDM2ZjNjYz5fMHgyY2M3YzMpe18weDNhMmZkYT0hMHgwO2JyZWFrO31pZighXzB4MWU3MWM1W18weDEzNjY5MigweDE1MyldJiZfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTgyKV0mJl8weDFlNzFjNVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgxZTcxYzVbXzB4MTM2NjkyKDB4ZTEpXSl7XzB4M2EyZmRhPSEweDA7YnJlYWs7fV8weDRkYTYzYlsncHVzaCddKF8weDIyZjdiOFtfMHgxMzY2OTIoMHgxMDgpXShfMHgyMGI0ZjIsXzB4MjQ5M2JlLF8weDI1ZDQ1MSxfMHgyZDJkNmQsXzB4NTU2OTc5LF8weDFlNzFjNSkpO319fX19aWYoXzB4NDNiZmM3W18weDEzNjY5MigweDE5MSldPV8weDJkMmQ2ZCxfMHgzNDBmODM/KF8weDQzYmZjN1sndmFsdWUnXT1fMHgyNWQ0NTFbJ3ZhbHVlT2YnXSgpLHRoaXNbXzB4MTM2NjkyKDB4ZTMpXShfMHgyZDJkNmQsXzB4NDNiZmM3LF8weDFlNzFjNSxfMHg1MDhhMGYpKTpfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHhmMyk/XzB4NDNiZmM3W18weDEzNjY5MigweDE3ZildPXRoaXNbXzB4MTM2NjkyKDB4MTFmKV1bXzB4MTM2NjkyKDB4ZmUpXShfMHgyNWQ0NTEpOl8weDJkMmQ2ZD09PV8weDEzNjY5MigweDE4Yik/XzB4NDNiZmM3W18weDEzNjY5MigweDE3ZildPV8weDI1ZDQ1MVsndG9TdHJpbmcnXSgpOl8weDJkMmQ2ZD09PSdSZWdFeHAnP18weDQzYmZjN1tfMHgxMzY2OTIoMHgxN2YpXT10aGlzW18weDEzNjY5MigweDFiMildWydjYWxsJ10oXzB4MjVkNDUxKTpfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHgxNzYpJiZ0aGlzW18weDEzNjY5MigweDE3MCldP18weDQzYmZjN1tfMHgxMzY2OTIoMHgxN2YpXT10aGlzW18weDEzNjY5MigweDE3MCldW18weDEzNjY5MigweDE4MCldW18weDEzNjY5MigweDE0ZCldW18weDEzNjY5MigweGZlKV0oXzB4MjVkNDUxKTohXzB4MWU3MWM1W18weDEzNjY5MigweDEyOSldJiYhKF8weDJkMmQ2ZD09PV8weDEzNjY5MigweDE1OSl8fF8weDJkMmQ2ZD09PV8weDEzNjY5MigweDE5OCkpJiYoZGVsZXRlIF8weDQzYmZjN1sndmFsdWUnXSxfMHg0M2JmYzdbXzB4MTM2NjkyKDB4MTI1KV09ITB4MCksXzB4M2EyZmRhJiYoXzB4NDNiZmM3WydjYXBwZWRQcm9wcyddPSEweDApLF8weDFjMzZiMD1fMHgxZTcxYzVbXzB4MTM2NjkyKDB4MWFkKV1bXzB4MTM2NjkyKDB4ZGQpXSxfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MWFkKV1bXzB4MTM2NjkyKDB4ZGQpXT1fMHg0M2JmYzcsdGhpc1tfMHgxMzY2OTIoMHgxNDApXShfMHg0M2JmYzcsXzB4MWU3MWM1KSxfMHg0ZGE2M2JbXzB4MTM2NjkyKDB4MTVlKV0pe2ZvcihfMHgzMTU3NDM9MHgwLF8weDU0MWFhOD1fMHg0ZGE2M2JbXzB4MTM2NjkyKDB4MTVlKV07XzB4MzE1NzQzPF8weDU0MWFhODtfMHgzMTU3NDMrKylfMHg0ZGE2M2JbXzB4MzE1NzQzXShfMHgzMTU3NDMpO31fMHgyMGI0ZjJbXzB4MTM2NjkyKDB4MTVlKV0mJihfMHg0M2JmYzdbJ3Byb3BzJ109XzB4MjBiNGYyKTt9Y2F0Y2goXzB4Y2IyZjFmKXtfMHg0MTJiZmUoXzB4Y2IyZjFmLF8weDQzYmZjNyxfMHgxZTcxYzUpO31yZXR1cm4gdGhpc1tfMHgxMzY2OTIoMHhkZildKF8weDI1ZDQ1MSxfMHg0M2JmYzcpLHRoaXNbXzB4MTM2NjkyKDB4MTA5KV0oXzB4NDNiZmM3LF8weDFlNzFjNSksXzB4MWU3MWM1W18weDEzNjY5MigweDFhZCldW18weDEzNjY5MigweGRkKV09XzB4MWMzNmIwLF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxMDcpXS0tLF8weDFlNzFjNVsnYXV0b0V4cGFuZCddPV8weDI3YTQ3MyxfMHgxZTcxYzVbJ2F1dG9FeHBhbmQnXSYmXzB4MWU3MWM1W18weDEzNjY5MigweGU4KV1bJ3BvcCddKCksXzB4NDNiZmM3O31bXzB4NDI0OGQ2KDB4MTRlKV0oXzB4MzZmZDY1KXt2YXIgXzB4M2E3MGIwPV8weDQyNDhkNjtyZXR1cm4gT2JqZWN0W18weDNhNzBiMCgweDE4ZSldP09iamVjdFsnZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10oXzB4MzZmZDY1KTpbXTt9W18weDQyNDhkNigweDE4NCldKF8weDJlNjUzZCl7dmFyIF8weDNmYzljMT1fMHg0MjQ4ZDY7cmV0dXJuISEoXzB4MmU2NTNkJiZfMHgzMTk3NTFbJ1NldCddJiZ0aGlzW18weDNmYzljMSgweDE3NyldKF8weDJlNjUzZCk9PT1fMHgzZmM5YzEoMHgxMGMpJiZfMHgyZTY1M2RbXzB4M2ZjOWMxKDB4MWFjKV0pO31bXzB4NDI0OGQ2KDB4ZjgpXShfMHg1MmQ2YmEsXzB4NTdmMjZlLF8weGZmNWFiMyl7dmFyIF8weGQwMWY0Yj1fMHg0MjQ4ZDY7cmV0dXJuIF8weGZmNWFiM1tfMHhkMDFmNGIoMHgxMmIpXT90eXBlb2YgXzB4NTJkNmJhW18weDU3ZjI2ZV09PV8weGQwMWY0YigweGVhKTohMHgxO31bXzB4NDI0OGQ2KDB4MTM2KV0oXzB4ODlhMzUzKXt2YXIgXzB4M2MzMzNjPV8weDQyNDhkNixfMHg0NWE3OTA9Jyc7cmV0dXJuIF8weDQ1YTc5MD10eXBlb2YgXzB4ODlhMzUzLF8weDQ1YTc5MD09PV8weDNjMzMzYygweDE4Myk/dGhpc1tfMHgzYzMzM2MoMHgxNzcpXShfMHg4OWEzNTMpPT09XzB4M2MzMzNjKDB4MTE0KT9fMHg0NWE3OTA9XzB4M2MzMzNjKDB4ZmIpOnRoaXNbXzB4M2MzMzNjKDB4MTc3KV0oXzB4ODlhMzUzKT09PV8weDNjMzMzYygweDEyNik/XzB4NDVhNzkwPV8weDNjMzMzYygweGYzKTp0aGlzW18weDNjMzMzYygweDE3NyldKF8weDg5YTM1Myk9PT1fMHgzYzMzM2MoMHgxNDEpP18weDQ1YTc5MD1fMHgzYzMzM2MoMHgxOGIpOl8weDg5YTM1Mz09PW51bGw/XzB4NDVhNzkwPV8weDNjMzMzYygweDE1OSk6XzB4ODlhMzUzW18weDNjMzMzYygweDFhNildJiYoXzB4NDVhNzkwPV8weDg5YTM1M1tfMHgzYzMzM2MoMHgxYTYpXVtfMHgzYzMzM2MoMHgxMDYpXXx8XzB4NDVhNzkwKTpfMHg0NWE3OTA9PT0ndW5kZWZpbmVkJyYmdGhpc1tfMHgzYzMzM2MoMHhkNyldJiZfMHg4OWEzNTMgaW5zdGFuY2VvZiB0aGlzW18weDNjMzMzYygweGQ3KV0mJihfMHg0NWE3OTA9XzB4M2MzMzNjKDB4MTY4KSksXzB4NDVhNzkwO31bXzB4NDI0OGQ2KDB4MTc3KV0oXzB4YjI4YjUpe3ZhciBfMHgyZDZlODE9XzB4NDI0OGQ2O3JldHVybiBPYmplY3RbXzB4MmQ2ZTgxKDB4MTgwKV1bXzB4MmQ2ZTgxKDB4MTRkKV1bJ2NhbGwnXShfMHhiMjhiNSk7fVsnX2lzUHJpbWl0aXZlVHlwZSddKF8weDU3OGVlZSl7dmFyIF8weDE1M2RhYz1fMHg0MjQ4ZDY7cmV0dXJuIF8weDU3OGVlZT09PV8weDE1M2RhYygweDE2Yil8fF8weDU3OGVlZT09PV8weDE1M2RhYygweDEzYyl8fF8weDU3OGVlZT09PV8weDE1M2RhYygweDEzNSk7fVtfMHg0MjQ4ZDYoMHgxNjMpXShfMHgxMzI1MGIpe3ZhciBfMHgyODk4NDM9XzB4NDI0OGQ2O3JldHVybiBfMHgxMzI1MGI9PT1fMHgyODk4NDMoMHgxOWMpfHxfMHgxMzI1MGI9PT0nU3RyaW5nJ3x8XzB4MTMyNTBiPT09XzB4Mjg5ODQzKDB4MTdjKTt9W18weDQyNDhkNigweGY3KV0oXzB4NDViMTk2LF8weDQxNDU0OCxfMHgzOWRjM2UsXzB4MzU3MzBmLF8weDQxMzAyNSxfMHgzYzBhYjMpe3ZhciBfMHg1Yjk3ZjI9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4NGE0ZTRiKXt2YXIgXzB4MjFmNmM3PV8weDM5NGIsXzB4MTA0Yzk3PV8weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVtfMHgyMWY2YzcoMHhkZCldLF8weDRjMzcwOT1fMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bXzB4MjFmNmM3KDB4MWE4KV0sXzB4NzAyYmVhPV8weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVsncGFyZW50J107XzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldW18weDIxZjZjNygweDE2MCldPV8weDEwNGM5NyxfMHg0MTMwMjVbJ25vZGUnXVsnaW5kZXgnXT10eXBlb2YgXzB4MzU3MzBmPT1fMHgyMWY2YzcoMHgxMzUpP18weDM1NzMwZjpfMHg0YTRlNGIsXzB4NDViMTk2W18weDIxZjZjNygweDEzNCldKF8weDViOTdmMltfMHgyMWY2YzcoMHgxODEpXShfMHg0MTQ1NDgsXzB4MzlkYzNlLF8weDM1NzMwZixfMHg0MTMwMjUsXzB4M2MwYWIzKSksXzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldW18weDIxZjZjNygweDE2MCldPV8weDcwMmJlYSxfMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bJ2luZGV4J109XzB4NGMzNzA5O307fVtfMHg0MjQ4ZDYoMHgxMDgpXShfMHg0NjA5ZTUsXzB4MTVjZmU0LF8weDI2NDE0ZixfMHgzZDhmMDksXzB4MzU2NTc1LF8weDM1NzE5MyxfMHg4M2YzNTkpe3ZhciBfMHg0Y2Y1MmI9XzB4NDI0OGQ2LF8weDQwMjc2YT10aGlzO3JldHVybiBfMHgxNWNmZTRbJ19wXycrXzB4MzU2NTc1W18weDRjZjUyYigweDE0ZCldKCldPSEweDAsZnVuY3Rpb24oXzB4MzMyNWY3KXt2YXIgXzB4MmI4ZDA2PV8weDRjZjUyYixfMHgyZWVlZWE9XzB4MzU3MTkzWydub2RlJ11bXzB4MmI4ZDA2KDB4ZGQpXSxfMHgyM2M3MTg9XzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDFhOCldLF8weDE0ZDNjMz1fMHgzNTcxOTNbXzB4MmI4ZDA2KDB4MWFkKV1bXzB4MmI4ZDA2KDB4MTYwKV07XzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDE2MCldPV8weDJlZWVlYSxfMHgzNTcxOTNbXzB4MmI4ZDA2KDB4MWFkKV1bXzB4MmI4ZDA2KDB4MWE4KV09XzB4MzMyNWY3LF8weDQ2MDllNVtfMHgyYjhkMDYoMHgxMzQpXShfMHg0MDI3NmFbXzB4MmI4ZDA2KDB4MTgxKV0oXzB4MjY0MTRmLF8weDNkOGYwOSxfMHgzNTY1NzUsXzB4MzU3MTkzLF8weDgzZjM1OSkpLF8weDM1NzE5M1snbm9kZSddW18weDJiOGQwNigweDE2MCldPV8weDE0ZDNjMyxfMHgzNTcxOTNbXzB4MmI4ZDA2KDB4MWFkKV1bXzB4MmI4ZDA2KDB4MWE4KV09XzB4MjNjNzE4O307fVsnX3Byb3BlcnR5J10oXzB4OWFiNjRmLF8weDRkOTBiOSxfMHgxODM1OTksXzB4ZDU4YjJiLF8weDQzYWY0MCl7dmFyIF8weDE0NzA4PV8weDQyNDhkNixfMHg0NDY1MDA9dGhpcztfMHg0M2FmNDB8fChfMHg0M2FmNDA9ZnVuY3Rpb24oXzB4NGJkZmIxLF8weDRiZGM0ZCl7cmV0dXJuIF8weDRiZGZiMVtfMHg0YmRjNGRdO30pO3ZhciBfMHgxODJjMGY9XzB4MTgzNTk5W18weDE0NzA4KDB4MTRkKV0oKSxfMHg1YjNlNTQ9XzB4ZDU4YjJiW18weDE0NzA4KDB4MTNmKV18fHt9LF8weDUyNzc5Mj1fMHhkNThiMmJbJ2RlcHRoJ10sXzB4NTA4MzEyPV8weGQ1OGIyYlsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddO3RyeXt2YXIgXzB4NTIxMDU4PXRoaXNbXzB4MTQ3MDgoMHgxNDMpXShfMHg5YWI2NGYpLF8weDQxMjNlYT1fMHgxODJjMGY7XzB4NTIxMDU4JiZfMHg0MTIzZWFbMHgwXT09PSdcXFxceDI3JyYmKF8weDQxMjNlYT1fMHg0MTIzZWFbXzB4MTQ3MDgoMHgxMTIpXSgweDEsXzB4NDEyM2VhWydsZW5ndGgnXS0weDIpKTt2YXIgXzB4MjZkZTlhPV8weGQ1OGIyYlsnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJ109XzB4NWIzZTU0W18weDE0NzA4KDB4MTJlKStfMHg0MTIzZWFdO18weDI2ZGU5YSYmKF8weGQ1OGIyYltfMHgxNDcwOCgweDEyOSldPV8weGQ1OGIyYlsnZGVwdGgnXSsweDEpLF8weGQ1OGIyYlsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddPSEhXzB4MjZkZTlhO3ZhciBfMHg1M2E2YjM9dHlwZW9mIF8weDE4MzU5OT09XzB4MTQ3MDgoMHgxNzYpLF8weDMxNzkwYj17J25hbWUnOl8weDUzYTZiM3x8XzB4NTIxMDU4P18weDE4MmMwZjp0aGlzW18weDE0NzA4KDB4MTk2KV0oXzB4MTgyYzBmKX07aWYoXzB4NTNhNmIzJiYoXzB4MzE3OTBiW18weDE0NzA4KDB4MTc2KV09ITB4MCksIShfMHg0ZDkwYjk9PT1fMHgxNDcwOCgweGZiKXx8XzB4NGQ5MGI5PT09XzB4MTQ3MDgoMHhlMikpKXt2YXIgXzB4NDI4ZTJmPXRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXShfMHg5YWI2NGYsXzB4MTgzNTk5KTtpZihfMHg0MjhlMmYmJihfMHg0MjhlMmZbJ3NldCddJiYoXzB4MzE3OTBiWydzZXR0ZXInXT0hMHgwKSxfMHg0MjhlMmZbXzB4MTQ3MDgoMHgxYTUpXSYmIV8weDI2ZGU5YSYmIV8weGQ1OGIyYltfMHgxNDcwOCgweDE4ZCldKSlyZXR1cm4gXzB4MzE3OTBiW18weDE0NzA4KDB4MTczKV09ITB4MCx0aGlzW18weDE0NzA4KDB4MWI0KV0oXzB4MzE3OTBiLF8weGQ1OGIyYiksXzB4MzE3OTBiO312YXIgXzB4NTc4NmU5O3RyeXtfMHg1Nzg2ZTk9XzB4NDNhZjQwKF8weDlhYjY0ZixfMHgxODM1OTkpO31jYXRjaChfMHgzOTZiYTgpe3JldHVybiBfMHgzMTc5MGI9eyduYW1lJzpfMHgxODJjMGYsJ3R5cGUnOid1bmtub3duJywnZXJyb3InOl8weDM5NmJhOFtfMHgxNDcwOCgweGU2KV19LHRoaXNbXzB4MTQ3MDgoMHgxYjQpXShfMHgzMTc5MGIsXzB4ZDU4YjJiKSxfMHgzMTc5MGI7fXZhciBfMHg1MmRkZmM9dGhpc1snX3R5cGUnXShfMHg1Nzg2ZTkpLF8weDFmMDUxZj10aGlzW18weDE0NzA4KDB4MTE1KV0oXzB4NTJkZGZjKTtpZihfMHgzMTc5MGJbJ3R5cGUnXT1fMHg1MmRkZmMsXzB4MWYwNTFmKXRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHgzMTc5MGIsXzB4ZDU4YjJiLF8weDU3ODZlOSxmdW5jdGlvbigpe3ZhciBfMHgxYjE0ZjA9XzB4MTQ3MDg7XzB4MzE3OTBiW18weDFiMTRmMCgweDE3ZildPV8weDU3ODZlOVsndmFsdWVPZiddKCksIV8weDI2ZGU5YSYmXzB4NDQ2NTAwW18weDFiMTRmMCgweGUzKV0oXzB4NTJkZGZjLF8weDMxNzkwYixfMHhkNThiMmIse30pO30pO2Vsc2V7dmFyIF8weDM0ODIwNj1fMHhkNThiMmJbXzB4MTQ3MDgoMHgxODIpXSYmXzB4ZDU4YjJiWydsZXZlbCddPF8weGQ1OGIyYltfMHgxNDcwOCgweDE2NyldJiZfMHhkNThiMmJbXzB4MTQ3MDgoMHhlOCldWydpbmRleE9mJ10oXzB4NTc4NmU5KTwweDAmJl8weDUyZGRmYyE9PV8weDE0NzA4KDB4ZWEpJiZfMHhkNThiMmJbXzB4MTQ3MDgoMHgxNzUpXTxfMHhkNThiMmJbXzB4MTQ3MDgoMHhlMSldO18weDM0ODIwNnx8XzB4ZDU4YjJiW18weDE0NzA4KDB4MTA3KV08XzB4NTI3NzkyfHxfMHgyNmRlOWE/KHRoaXNbXzB4MTQ3MDgoMHgxYjYpXShfMHgzMTc5MGIsXzB4NTc4NmU5LF8weGQ1OGIyYixfMHgyNmRlOWF8fHt9KSx0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NTc4NmU5LF8weDMxNzkwYikpOnRoaXNbXzB4MTQ3MDgoMHgxYjQpXShfMHgzMTc5MGIsXzB4ZDU4YjJiLF8weDU3ODZlOSxmdW5jdGlvbigpe3ZhciBfMHgyMzg1YmE9XzB4MTQ3MDg7XzB4NTJkZGZjPT09XzB4MjM4NWJhKDB4MTU5KXx8XzB4NTJkZGZjPT09J3VuZGVmaW5lZCd8fChkZWxldGUgXzB4MzE3OTBiW18weDIzODViYSgweDE3ZildLF8weDMxNzkwYltfMHgyMzg1YmEoMHgxMjUpXT0hMHgwKTt9KTt9cmV0dXJuIF8weDMxNzkwYjt9ZmluYWxseXtfMHhkNThiMmJbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDViM2U1NCxfMHhkNThiMmJbXzB4MTQ3MDgoMHgxMjkpXT1fMHg1Mjc3OTIsXzB4ZDU4YjJiW18weDE0NzA4KDB4MTUzKV09XzB4NTA4MzEyO319W18weDQyNDhkNigweGUzKV0oXzB4MzA1NzgxLF8weDEyMTJiMyxfMHgzYmViMjcsXzB4NTIyNjgzKXt2YXIgXzB4NGQyMDU3PV8weDQyNDhkNixfMHgyYjJhMzE9XzB4NTIyNjgzWydzdHJMZW5ndGgnXXx8XzB4M2JlYjI3W18weDRkMjA1NygweDE4NSldO2lmKChfMHgzMDU3ODE9PT1fMHg0ZDIwNTcoMHgxM2MpfHxfMHgzMDU3ODE9PT1fMHg0ZDIwNTcoMHgxMDEpKSYmXzB4MTIxMmIzW18weDRkMjA1NygweDE3ZildKXtsZXQgXzB4MTVkNjMyPV8weDEyMTJiM1sndmFsdWUnXVtfMHg0ZDIwNTcoMHgxNWUpXTtfMHgzYmViMjdbXzB4NGQyMDU3KDB4MTA0KV0rPV8weDE1ZDYzMixfMHgzYmViMjdbXzB4NGQyMDU3KDB4MTA0KV0+XzB4M2JlYjI3Wyd0b3RhbFN0ckxlbmd0aCddPyhfMHgxMjEyYjNbJ2NhcHBlZCddPScnLGRlbGV0ZSBfMHgxMjEyYjNbJ3ZhbHVlJ10pOl8weDE1ZDYzMj5fMHgyYjJhMzEmJihfMHgxMjEyYjNbXzB4NGQyMDU3KDB4MTI1KV09XzB4MTIxMmIzW18weDRkMjA1NygweDE3ZildW18weDRkMjA1NygweDExMildKDB4MCxfMHgyYjJhMzEpLGRlbGV0ZSBfMHgxMjEyYjNbJ3ZhbHVlJ10pO319WydfaXNNYXAnXShfMHgyYWM1NGYpe3ZhciBfMHgxOTIxYTA9XzB4NDI0OGQ2O3JldHVybiEhKF8weDJhYzU0ZiYmXzB4MzE5NzUxWydNYXAnXSYmdGhpc1tfMHgxOTIxYTAoMHgxNzcpXShfMHgyYWM1NGYpPT09XzB4MTkyMWEwKDB4MWE5KSYmXzB4MmFjNTRmW18weDE5MjFhMCgweDFhYyldKTt9WydfcHJvcGVydHlOYW1lJ10oXzB4NTNmZmViKXt2YXIgXzB4MmY5N2Q1PV8weDQyNDhkNjtpZihfMHg1M2ZmZWJbXzB4MmY5N2Q1KDB4MTJmKV0oL15cXFxcZCskLykpcmV0dXJuIF8weDUzZmZlYjt2YXIgXzB4MmI4ZjcyO3RyeXtfMHgyYjhmNzI9SlNPTltfMHgyZjk3ZDUoMHgxMWEpXSgnJytfMHg1M2ZmZWIpO31jYXRjaHtfMHgyYjhmNzI9J1xcXFx4MjInK3RoaXNbXzB4MmY5N2Q1KDB4MTc3KV0oXzB4NTNmZmViKSsnXFxcXHgyMic7fXJldHVybiBfMHgyYjhmNzJbXzB4MmY5N2Q1KDB4MTJmKV0oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHgyYjhmNzI9XzB4MmI4ZjcyWydzdWJzdHInXSgweDEsXzB4MmI4ZjcyW18weDJmOTdkNSgweDE1ZSldLTB4Mik6XzB4MmI4ZjcyPV8weDJiOGY3MltfMHgyZjk3ZDUoMHgxMzApXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpWydyZXBsYWNlJ10oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbXzB4MmY5N2Q1KDB4MTMwKV0oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDJiOGY3Mjt9W18weDQyNDhkNigweDFiNCldKF8weDViZWI2ZCxfMHg0Y2M2YzIsXzB4NTVkYjkyLF8weDVhNzZmNil7dmFyIF8weDgxM2JjOD1fMHg0MjQ4ZDY7dGhpc1tfMHg4MTNiYzgoMHgxNDApXShfMHg1YmViNmQsXzB4NGNjNmMyKSxfMHg1YTc2ZjYmJl8weDVhNzZmNigpLHRoaXNbXzB4ODEzYmM4KDB4ZGYpXShfMHg1NWRiOTIsXzB4NWJlYjZkKSx0aGlzW18weDgxM2JjOCgweDEwOSldKF8weDViZWI2ZCxfMHg0Y2M2YzIpO31bJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgzYzY5NjEsXzB4MTcyZmZhKXt2YXIgXzB4MTc0NDE3PV8weDQyNDhkNjt0aGlzW18weDE3NDQxNygweDEzZSldKF8weDNjNjk2MSxfMHgxNzJmZmEpLHRoaXNbXzB4MTc0NDE3KDB4MTg4KV0oXzB4M2M2OTYxLF8weDE3MmZmYSksdGhpc1snX3NldE5vZGVFeHByZXNzaW9uUGF0aCddKF8weDNjNjk2MSxfMHgxNzJmZmEpLHRoaXNbXzB4MTc0NDE3KDB4MTE3KV0oXzB4M2M2OTYxLF8weDE3MmZmYSk7fVtfMHg0MjQ4ZDYoMHgxM2UpXShfMHgyMzJmYjEsXzB4MTU0NmRjKXt9W18weDQyNDhkNigweDE4OCldKF8weDFiNTVjYSxfMHgxZGMxYjApe31bXzB4NDI0OGQ2KDB4MWE3KV0oXzB4MjkwZGRkLF8weDVlYTQyNSl7fVtfMHg0MjQ4ZDYoMHhlZCldKF8weDNjMTAyNil7cmV0dXJuIF8weDNjMTAyNj09PXRoaXNbJ191bmRlZmluZWQnXTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHg1ODE2ZGUsXzB4NTFhZDBmKXt2YXIgXzB4NGUzMjA3PV8weDQyNDhkNjt0aGlzW18weDRlMzIwNygweDFhNyldKF8weDU4MTZkZSxfMHg1MWFkMGYpLHRoaXNbXzB4NGUzMjA3KDB4MTk1KV0oXzB4NTgxNmRlKSxfMHg1MWFkMGZbXzB4NGUzMjA3KDB4ZTQpXSYmdGhpc1snX3NvcnRQcm9wcyddKF8weDU4MTZkZSksdGhpc1tfMHg0ZTMyMDcoMHgxMWMpXShfMHg1ODE2ZGUsXzB4NTFhZDBmKSx0aGlzW18weDRlMzIwNygweDE5YildKF8weDU4MTZkZSxfMHg1MWFkMGYpLHRoaXNbJ19jbGVhbk5vZGUnXShfMHg1ODE2ZGUpO31bXzB4NDI0OGQ2KDB4ZGYpXShfMHgzY2M1MmMsXzB4NGQzOGE3KXt2YXIgXzB4NDFlNGRkPV8weDQyNDhkNjtsZXQgXzB4NTNjOWI3O3RyeXtfMHgzMTk3NTFbXzB4NDFlNGRkKDB4ZjkpXSYmKF8weDUzYzliNz1fMHgzMTk3NTFbXzB4NDFlNGRkKDB4ZjkpXVtfMHg0MWU0ZGQoMHgxMzkpXSxfMHgzMTk3NTFbXzB4NDFlNGRkKDB4ZjkpXVsnZXJyb3InXT1mdW5jdGlvbigpe30pLF8weDNjYzUyYyYmdHlwZW9mIF8weDNjYzUyY1tfMHg0MWU0ZGQoMHgxNWUpXT09XzB4NDFlNGRkKDB4MTM1KSYmKF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxNWUpXT1fMHgzY2M1MmNbXzB4NDFlNGRkKDB4MTVlKV0pO31jYXRjaHt9ZmluYWxseXtfMHg1M2M5YjcmJihfMHgzMTk3NTFbXzB4NDFlNGRkKDB4ZjkpXVtfMHg0MWU0ZGQoMHgxMzkpXT1fMHg1M2M5YjcpO31pZihfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTkxKV09PT1fMHg0MWU0ZGQoMHgxMzUpfHxfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTkxKV09PT1fMHg0MWU0ZGQoMHgxN2MpKXtpZihpc05hTihfMHg0ZDM4YTdbJ3ZhbHVlJ10pKV8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxOWEpXT0hMHgwLGRlbGV0ZSBfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTdmKV07ZWxzZSBzd2l0Y2goXzB4NGQzOGE3W18weDQxZTRkZCgweDE3ZildKXtjYXNlIE51bWJlcltfMHg0MWU0ZGQoMHhmMSldOl8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxOTkpXT0hMHgwLGRlbGV0ZSBfMHg0ZDM4YTdbJ3ZhbHVlJ107YnJlYWs7Y2FzZSBOdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ106XzB4NGQzOGE3WyduZWdhdGl2ZUluZmluaXR5J109ITB4MCxkZWxldGUgXzB4NGQzOGE3W18weDQxZTRkZCgweDE3ZildO2JyZWFrO2Nhc2UgMHgwOnRoaXNbJ19pc05lZ2F0aXZlWmVybyddKF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxN2YpXSkmJihfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTYxKV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxOTEpXT09PV8weDQxZTRkZCgweGVhKSYmdHlwZW9mIF8weDNjYzUyY1tfMHg0MWU0ZGQoMHgxMDYpXT09XzB4NDFlNGRkKDB4MTNjKSYmXzB4M2NjNTJjW18weDQxZTRkZCgweDEwNildJiZfMHg0ZDM4YTdbJ25hbWUnXSYmXzB4M2NjNTJjW18weDQxZTRkZCgweDEwNildIT09XzB4NGQzOGE3WyduYW1lJ10mJihfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTQ2KV09XzB4M2NjNTJjWyduYW1lJ10pO31bJ19pc05lZ2F0aXZlWmVybyddKF8weDU0NWQ3MCl7dmFyIF8weDNmNWY3OD1fMHg0MjQ4ZDY7cmV0dXJuIDB4MS9fMHg1NDVkNzA9PT1OdW1iZXJbXzB4M2Y1Zjc4KDB4MTU3KV07fVtfMHg0MjQ4ZDYoMHgxNzgpXShfMHg0ODM0MmQpe3ZhciBfMHgxMTMzY2U9XzB4NDI0OGQ2OyFfMHg0ODM0MmRbXzB4MTEzM2NlKDB4MTlkKV18fCFfMHg0ODM0MmRbXzB4MTEzM2NlKDB4MTlkKV1bXzB4MTEzM2NlKDB4MTVlKV18fF8weDQ4MzQyZFsndHlwZSddPT09XzB4MTEzM2NlKDB4ZmIpfHxfMHg0ODM0MmRbXzB4MTEzM2NlKDB4MTkxKV09PT0nTWFwJ3x8XzB4NDgzNDJkW18weDExMzNjZSgweDE5MSldPT09XzB4MTEzM2NlKDB4MTZjKXx8XzB4NDgzNDJkW18weDExMzNjZSgweDE5ZCldW18weDExMzNjZSgweDE3YildKGZ1bmN0aW9uKF8weDM1OGY3NCxfMHgyNTE1MTkpe3ZhciBfMHgxOTdkOTQ9XzB4MTEzM2NlLF8weGJhMTk0ND1fMHgzNThmNzRbXzB4MTk3ZDk0KDB4MTA2KV1bXzB4MTk3ZDk0KDB4MThmKV0oKSxfMHgxMzhhZmY9XzB4MjUxNTE5W18weDE5N2Q5NCgweDEwNildWyd0b0xvd2VyQ2FzZSddKCk7cmV0dXJuIF8weGJhMTk0NDxfMHgxMzhhZmY/LTB4MTpfMHhiYTE5NDQ+XzB4MTM4YWZmPzB4MToweDA7fSk7fVtfMHg0MjQ4ZDYoMHgxMWMpXShfMHgxODAwOTUsXzB4OTRhN2JlKXt2YXIgXzB4YjNiNDNhPV8weDQyNDhkNjtpZighKF8weDk0YTdiZVtfMHhiM2I0M2EoMHgxMmIpXXx8IV8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXXx8IV8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXVsnbGVuZ3RoJ10pKXtmb3IodmFyIF8weDQ2NjUzZT1bXSxfMHg4MGMzMzg9W10sXzB4MTQyNDExPTB4MCxfMHgyZDYwMjE9XzB4MTgwMDk1W18weGIzYjQzYSgweDE5ZCldW18weGIzYjQzYSgweDE1ZSldO18weDE0MjQxMTxfMHgyZDYwMjE7XzB4MTQyNDExKyspe3ZhciBfMHg0MTMyODk9XzB4MTgwMDk1W18weGIzYjQzYSgweDE5ZCldW18weDE0MjQxMV07XzB4NDEzMjg5W18weGIzYjQzYSgweDE5MSldPT09XzB4YjNiNDNhKDB4ZWEpP18weDQ2NjUzZVtfMHhiM2I0M2EoMHgxMzQpXShfMHg0MTMyODkpOl8weDgwYzMzOFtfMHhiM2I0M2EoMHgxMzQpXShfMHg0MTMyODkpO31pZighKCFfMHg4MGMzMzhbXzB4YjNiNDNhKDB4MTVlKV18fF8weDQ2NjUzZVsnbGVuZ3RoJ108PTB4MSkpe18weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXT1fMHg4MGMzMzg7dmFyIF8weDIyNzRkZj17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHg0NjY1M2V9O3RoaXNbXzB4YjNiNDNhKDB4MTNlKV0oXzB4MjI3NGRmLF8weDk0YTdiZSksdGhpc1tfMHhiM2I0M2EoMHgxYTcpXShfMHgyMjc0ZGYsXzB4OTRhN2JlKSx0aGlzW18weGIzYjQzYSgweDE5NSldKF8weDIyNzRkZiksdGhpc1tfMHhiM2I0M2EoMHgxMTcpXShfMHgyMjc0ZGYsXzB4OTRhN2JlKSxfMHgyMjc0ZGZbJ2lkJ10rPSdcXFxceDIwZicsXzB4MTgwMDk1W18weGIzYjQzYSgweDE5ZCldW18weGIzYjQzYSgweDExOSldKF8weDIyNzRkZik7fX19W18weDQyNDhkNigweDE5YildKF8weDQ4OGUwNyxfMHgzMGRhNWYpe31bXzB4NDI0OGQ2KDB4MTk1KV0oXzB4MmZiOWNhKXt9W18weDQyNDhkNigweGQ0KV0oXzB4NDZlODhlKXt2YXIgXzB4MTE2N2M0PV8weDQyNDhkNjtyZXR1cm4gQXJyYXlbXzB4MTE2N2M0KDB4ZmEpXShfMHg0NmU4OGUpfHx0eXBlb2YgXzB4NDZlODhlPT0nb2JqZWN0JyYmdGhpc1tfMHgxMTY3YzQoMHgxNzcpXShfMHg0NmU4OGUpPT09XzB4MTE2N2M0KDB4MTE0KTt9Wydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4MzE0NGE4LF8weGQ4ZDVjNyl7fVsnX2NsZWFuTm9kZSddKF8weDM0OWNiNCl7dmFyIF8weDJhNTg3Mj1fMHg0MjQ4ZDY7ZGVsZXRlIF8weDM0OWNiNFtfMHgyYTU4NzIoMHgxNDgpXSxkZWxldGUgXzB4MzQ5Y2I0W18weDJhNTg3MigweDE4YSldLGRlbGV0ZSBfMHgzNDljYjRbXzB4MmE1ODcyKDB4MTViKV07fVtfMHg0MjQ4ZDYoMHgxNjQpXShfMHgxMzg3YjYsXzB4NTlkZTcwKXt9fWxldCBfMHg1OWNkNmQ9bmV3IF8weDMxODdhNygpLF8weDExZTQ5Mj17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHhiN2UzZGI9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfTtmdW5jdGlvbiBfMHgyZTgyMzIoXzB4Y2ZkMjkwLF8weDNlOTQxZixfMHgzMjgzYzIsXzB4MjMwNjVlLF8weDJhN2YwMSxfMHgzODc3OGUpe3ZhciBfMHg0MmNhMjk9XzB4NDI0OGQ2O2xldCBfMHg0MDFmZjYsXzB4NDg4NWRlO3RyeXtfMHg0ODg1ZGU9XzB4Mjk5ZGEzKCksXzB4NDAxZmY2PV8weDI0MDhiYVtfMHgzZTk0MWZdLCFfMHg0MDFmZjZ8fF8weDQ4ODVkZS1fMHg0MDFmZjZbJ3RzJ10+MHgxZjQmJl8weDQwMWZmNltfMHg0MmNhMjkoMHgxMDApXSYmXzB4NDAxZmY2W18weDQyY2EyOSgweDFhNCldL18weDQwMWZmNltfMHg0MmNhMjkoMHgxMDApXTwweDY0PyhfMHgyNDA4YmFbXzB4M2U5NDFmXT1fMHg0MDFmZjY9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHg0ODg1ZGV9LF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXT17fSk6XzB4NDg4NWRlLV8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVsndHMnXT4weDMyJiZfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bXzB4NDJjYTI5KDB4MTAwKV0mJl8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVsndGltZSddL18weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxMDApXTwweDY0JiYoXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildPXt9KTtsZXQgXzB4MzkwNWQ3PVtdLF8weDVjM2E1OT1fMHg0MDFmZjZbJ3JlZHVjZUxpbWl0cyddfHxfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bJ3JlZHVjZUxpbWl0cyddP18weGI3ZTNkYjpfMHgxMWU0OTIsXzB4NDA3MmQ2PV8weDljODVkMj0+e3ZhciBfMHg1NzU0ZWE9XzB4NDJjYTI5O2xldCBfMHhlYzc3MzU9e307cmV0dXJuIF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxOWQpXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4MTlkKV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweDE2MildPV8weDljODVkMltfMHg1NzU0ZWEoMHgxNjIpXSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTg1KV09XzB4OWM4NWQyW18weDU3NTRlYSgweDE4NSldLF8weGVjNzczNVsndG90YWxTdHJMZW5ndGgnXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4MTU1KV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweGUxKV09XzB4OWM4NWQyW18weDU3NTRlYSgweGUxKV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweDE2NyldPV8weDljODVkMltfMHg1NzU0ZWEoMHgxNjcpXSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4ZTQpXT0hMHgxLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxMmIpXT0hXzB4NWQyNjdhLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxMjkpXT0weDEsXzB4ZWM3NzM1W18weDU3NTRlYSgweDEwNyldPTB4MCxfMHhlYzc3MzVbJ2V4cElkJ109XzB4NTc1NGVhKDB4ZmYpLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxNzkpXT1fMHg1NzU0ZWEoMHhmZCksXzB4ZWM3NzM1W18weDU3NTRlYSgweDE4MildPSEweDAsXzB4ZWM3NzM1W18weDU3NTRlYSgweGU4KV09W10sXzB4ZWM3NzM1W18weDU3NTRlYSgweDE3NSldPTB4MCxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MThkKV09ITB4MCxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTA0KV09MHgwLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxYWQpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHhlYzc3MzU7fTtmb3IodmFyIF8weDRlZGI3OD0weDA7XzB4NGVkYjc4PF8weDJhN2YwMVtfMHg0MmNhMjkoMHgxNWUpXTtfMHg0ZWRiNzgrKylfMHgzOTA1ZDdbXzB4NDJjYTI5KDB4MTM0KV0oXzB4NTljZDZkWydzZXJpYWxpemUnXSh7J3RpbWVOb2RlJzpfMHhjZmQyOTA9PT1fMHg0MmNhMjkoMHgxYTQpfHx2b2lkIDB4MH0sXzB4MmE3ZjAxW18weDRlZGI3OF0sXzB4NDA3MmQ2KF8weDVjM2E1OSkse30pKTtpZihfMHhjZmQyOTA9PT0ndHJhY2UnKXtsZXQgXzB4MzRjYjkxPUVycm9yW18weDQyY2EyOSgweDEwYildO3RyeXtFcnJvcltfMHg0MmNhMjkoMHgxMGIpXT0weDEvMHgwLF8weDM5MDVkN1tfMHg0MmNhMjkoMHgxMzQpXShfMHg1OWNkNmRbXzB4NDJjYTI5KDB4MWI2KV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpWydzdGFjayddLF8weDQwNzJkNihfMHg1YzNhNTkpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yWydzdGFja1RyYWNlTGltaXQnXT1fMHgzNGNiOTE7fX1yZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDU2MzUwNCwnYXJncyc6W3sndHMnOl8weDMyODNjMiwnc2Vzc2lvbic6XzB4MjMwNjVlLCdhcmdzJzpfMHgzOTA1ZDcsJ2lkJzpfMHgzZTk0MWYsJ2NvbnRleHQnOl8weDM4Nzc4ZX1dfTt9Y2F0Y2goXzB4NDhmMGNlKXtyZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDU2MzUwNCwnYXJncyc6W3sndHMnOl8weDMyODNjMiwnc2Vzc2lvbic6XzB4MjMwNjVlLCdhcmdzJzpbeyd0eXBlJzpfMHg0MmNhMjkoMHgxMTMpLCdlcnJvcic6XzB4NDhmMGNlJiZfMHg0OGYwY2VbJ21lc3NhZ2UnXX1dLCdpZCc6XzB4M2U5NDFmLCdjb250ZXh0JzpfMHgzODc3OGV9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDQwMWZmNiYmXzB4NDg4NWRlKXtsZXQgXzB4MmZmMTg5PV8weDI5OWRhMygpO18weDQwMWZmNlsnY291bnQnXSsrLF8weDQwMWZmNltfMHg0MmNhMjkoMHgxYTQpXSs9XzB4NWRlYWQ1KF8weDQ4ODVkZSxfMHgyZmYxODkpLF8weDQwMWZmNlsndHMnXT1fMHgyZmYxODksXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDEwMCldKyssXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDFhNCldKz1fMHg1ZGVhZDUoXzB4NDg4NWRlLF8weDJmZjE4OSksXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildWyd0cyddPV8weDJmZjE4OSwoXzB4NDAxZmY2Wydjb3VudCddPjB4MzJ8fF8weDQwMWZmNltfMHg0MmNhMjkoMHgxYTQpXT4weDY0KSYmKF8weDQwMWZmNltfMHg0MmNhMjkoMHgxNDQpXT0hMHgwKSwoXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDEwMCldPjB4M2U4fHxfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bXzB4NDJjYTI5KDB4MWE0KV0+MHgxMmMpJiYoXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDE0NCldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDJlODIzMjt9KChfMHgzMDgwZTAsXzB4MTNhZDg1LF8weDRiMDE5OSxfMHgyZDQwZjYsXzB4NGI3ZTQ1LF8weDRlMGU3NyxfMHgzNzA1MmIsXzB4MjAzYmI0LF8weDJmOTkzMSxfMHgzNjYzMDMpPT57dmFyIF8weDUyMWE4ND1fMHgzMGQ0NmM7aWYoXzB4MzA4MGUwWydfY29uc29sZV9uaW5qYSddKXJldHVybiBfMHgzMDgwZTBbXzB4NTIxYTg0KDB4ZjQpXTtpZighSihfMHgzMDgwZTAsXzB4MjAzYmI0LF8weDRiN2U0NSkpcmV0dXJuIF8weDMwODBlMFsnX2NvbnNvbGVfbmluamEnXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4MzA4MGUwW18weDUyMWE4NCgweGY0KV07bGV0IF8weDM0OTNmYz1XKF8weDMwODBlMCksXzB4NGNhZDMwPV8weDM0OTNmY1tfMHg1MjFhODQoMHhmMCldLF8weDgxOTI3Mz1fMHgzNDkzZmNbXzB4NTIxYTg0KDB4MTZkKV0sXzB4NTQ0Y2MyPV8weDM0OTNmY1tfMHg1MjFhODQoMHgxNDkpXSxfMHgzZWIzZTY9eydoaXRzJzp7fSwndHMnOnt9fSxfMHgyNWZmMTQ9WShfMHgzMDgwZTAsXzB4MmY5OTMxLF8weDNlYjNlNixfMHg0ZTBlNzcpLF8weDE5MjMwMD1fMHgyNTg3M2Y9PntfMHgzZWIzZTZbJ3RzJ11bXzB4MjU4NzNmXT1fMHg4MTkyNzMoKTt9LF8weDQ0ZjUxMD0oXzB4NTU2MmZkLF8weDJmNjcwNik9Pnt2YXIgXzB4MmVjZDY2PV8weDUyMWE4NDtsZXQgXzB4MmNjOTE2PV8weDNlYjNlNlsndHMnXVtfMHgyZjY3MDZdO2lmKGRlbGV0ZSBfMHgzZWIzZTZbJ3RzJ11bXzB4MmY2NzA2XSxfMHgyY2M5MTYpe2xldCBfMHgxZjU4NDI9XzB4NGNhZDMwKF8weDJjYzkxNixfMHg4MTkyNzMoKSk7XzB4NTM3NTFjKF8weDI1ZmYxNChfMHgyZWNkNjYoMHgxYTQpLF8weDU1NjJmZCxfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsW18weDFmNTg0Ml0sXzB4MmY2NzA2KSk7fX0sXzB4MThmNzhiPV8weDI3ZTUzMz0+XzB4NzRhZGNjPT57dmFyIF8weDUzZjMxYT1fMHg1MjFhODQ7dHJ5e18weDE5MjMwMChfMHg3NGFkY2MpLF8weDI3ZTUzMyhfMHg3NGFkY2MpO31maW5hbGx5e18weDMwODBlMFtfMHg1M2YzMWEoMHhmOSldW18weDUzZjMxYSgweDFhNCldPV8weDI3ZTUzMzt9fSxfMHgxNTUzZDg9XzB4NGI2MjRiPT5fMHg1Y2E0NDE9Pnt2YXIgXzB4MmZmZmY3PV8weDUyMWE4NDt0cnl7bGV0IFtfMHg1ZTJkODYsXzB4NDZkYjUyXT1fMHg1Y2E0NDFbXzB4MmZmZmY3KDB4MTNkKV0oXzB4MmZmZmY3KDB4MTdkKSk7XzB4NDRmNTEwKF8weDQ2ZGI1MixfMHg1ZTJkODYpLF8weDRiNjI0YihfMHg1ZTJkODYpO31maW5hbGx5e18weDMwODBlMFtfMHgyZmZmZjcoMHhmOSldW18weDJmZmZmNygweDE0MildPV8weDRiNjI0Yjt9fTtfMHgzMDgwZTBbXzB4NTIxYTg0KDB4ZjQpXT17J2NvbnNvbGVMb2cnOihfMHgxOGUyODAsXzB4MWY0ZDE1KT0+e3ZhciBfMHgxYjk4ZjU9XzB4NTIxYTg0O18weDMwODBlMFsnY29uc29sZSddW18weDFiOThmNSgweDFhMCldW18weDFiOThmNSgweDEwNildIT09XzB4MWI5OGY1KDB4MTIzKSYmXzB4NTM3NTFjKF8weDI1ZmYxNChfMHgxYjk4ZjUoMHgxYTApLF8weDE4ZTI4MCxfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsXzB4MWY0ZDE1KSk7fSwnY29uc29sZVRyYWNlJzooXzB4NGM5NTZiLF8weGNkZGIxMSk9Pnt2YXIgXzB4NWRkMDI4PV8weDUyMWE4NDtfMHgzMDgwZTBbXzB4NWRkMDI4KDB4ZjkpXVtfMHg1ZGQwMjgoMHgxYTApXVtfMHg1ZGQwMjgoMHgxMDYpXSE9PV8weDVkZDAyOCgweDExMCkmJl8weDUzNzUxYyhfMHgyNWZmMTQoXzB4NWRkMDI4KDB4MTU2KSxfMHg0Yzk1NmIsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLF8weGNkZGIxMSkpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHgxMGEzMDg9XzB4NTIxYTg0O18weDMwODBlMFsnY29uc29sZSddW18weDEwYTMwOCgweDFhNCldPV8weDE4Zjc4YihfMHgzMDgwZTBbJ2NvbnNvbGUnXVtfMHgxMGEzMDgoMHgxYTQpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDQ0YTg4ND1fMHg1MjFhODQ7XzB4MzA4MGUwW18weDQ0YTg4NCgweGY5KV1bJ3RpbWVFbmQnXT1fMHgxNTUzZDgoXzB4MzA4MGUwW18weDQ0YTg4NCgweGY5KV1bXzB4NDRhODg0KDB4MTQyKV0pO30sJ2F1dG9Mb2cnOihfMHg0Nzk2NjAsXzB4ZDE2ODZjKT0+e3ZhciBfMHg0MDY0NmU9XzB4NTIxYTg0O18weDUzNzUxYyhfMHgyNWZmMTQoXzB4NDA2NDZlKDB4MWEwKSxfMHhkMTY4NmMsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLFtfMHg0Nzk2NjBdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg5MWZlZDUsXzB4NDBhODRmKT0+e3ZhciBfMHg3MzQ0ZTE9XzB4NTIxYTg0O18weDUzNzUxYyhfMHgyNWZmMTQoXzB4NzM0NGUxKDB4MWEwKSxfMHg5MWZlZDUsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLF8weDQwYTg0ZikpO30sJ2F1dG9UcmFjZSc6KF8weDM1NDZmNyxfMHgzZDhlYjUpPT57dmFyIF8weDI1NTEyZj1fMHg1MjFhODQ7XzB4NTM3NTFjKF8weDI1ZmYxNChfMHgyNTUxMmYoMHgxNTYpLF8weDNkOGViNSxfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsW18weDM1NDZmN10pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4MmI3MjJmLF8weDJkZjAzYik9Pnt2YXIgXzB4MjBhY2YxPV8weDUyMWE4NDtfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDIwYWNmMSgweDE1NiksXzB4MmI3MjJmLF8weDU0NGNjMigpLF8weGY0ODllMixfMHgyZGYwM2IpKTt9LCdhdXRvVGltZSc6KF8weDI5NzE5NCxfMHgxYTZiNjgsXzB4NTlkNjBiKT0+e18weDE5MjMwMChfMHg1OWQ2MGIpO30sJ2F1dG9UaW1lRW5kJzooXzB4NGIxMTc0LF8weDE5ZTRmOSxfMHgzZTk3NzMpPT57XzB4NDRmNTEwKF8weDE5ZTRmOSxfMHgzZTk3NzMpO30sJ2NvdmVyYWdlJzpfMHgxNjkwMzU9Pnt2YXIgXzB4OTRmZGQ9XzB4NTIxYTg0O18weDUzNzUxYyh7J21ldGhvZCc6XzB4OTRmZGQoMHgxODcpLCd2ZXJzaW9uJzpfMHg0ZTBlNzcsJ2FyZ3MnOlt7J2lkJzpfMHgxNjkwMzV9XX0pO319O2xldCBfMHg1Mzc1MWM9YihfMHgzMDgwZTAsXzB4MTNhZDg1LF8weDRiMDE5OSxfMHgyZDQwZjYsXzB4NGI3ZTQ1LF8weDM2NjMwMyksXzB4ZjQ4OWUyPV8weDMwODBlMFtfMHg1MjFhODQoMHhkMyldO3JldHVybiBfMHgzMDgwZTBbXzB4NTIxYTg0KDB4ZjQpXTt9KShnbG9iYWxUaGlzLF8weDMwZDQ2YygweGUwKSxfMHgzMGQ0NmMoMHhjYyksXFxcImM6XFxcXFxcXFxVc2Vyc1xcXFxcXFxcVVNFUlxcXFxcXFxcLnZzY29kZVxcXFxcXFxcZXh0ZW5zaW9uc1xcXFxcXFxcd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMS4wLjI0MFxcXFxcXFxcbm9kZV9tb2R1bGVzXFxcIixfMHgzMGQ0NmMoMHgxN2EpLF8weDMwZDQ2YygweGYyKSxfMHgzMGQ0NmMoMHhkOSksXzB4MzBkNDZjKDB4MWFhKSxfMHgzMGQ0NmMoMHgxMDMpLF8weDMwZDQ2YygweGVlKSk7XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiaW1wb3J0IEFkZFRvQ2FsZW5kYXIgZnJvbSAncmVhY3QtYWRkLXRvLWNhbGVuZGFyJztcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuaW1wb3J0IEhlYWQgZnJvbSAnQHNyYy9jb21wb25lbnRzL0hlYWQnO1xuaW1wb3J0IHJlc29sdmVQYXRoIGZyb20gJ0BzcmMvdXRpbHMvcmVzb2x2ZVBhdGgnO1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICdAc3JjL2NvbmZpZy9hcHAnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24sIGRlZmF1bHRMb2NhbGUgfSBmcm9tICdAc3JjL2kxOG4nO1xuaW1wb3J0IGd1ZXN0TGlzdCBmcm9tICcuL2d1ZXN0X2xpc3QuanNvbic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgeyBFdmVudERhdGVJY29uLCBIZWFkZXJMb2dvLCBMb3ZlVGl0bGVJY29uIH0gZnJvbSAnLi9leHRyYS5wYWdlJztcbmltcG9ydCBTdG9yaWVzIGZyb20gJy4vc3Rvcmllcyc7XG5pbXBvcnQgUGljdHVyZXNHcmlkIGZyb20gJy4vcGljdHVyZUdyaWQnO1xuaW1wb3J0IENvbGxlY3RHdWVzdEF0dGVuZGFuY2UgZnJvbSAnLi9jb2xsZWN0LWd1ZXN0LWF0dGVuZGFuY2UucGFnZSc7XG5cbmNvbnN0IHRyYW5zbGF0ZUNvbmZpZyA9IChhcHBDb25maWcsIGxvY2FsZSkgPT4ge1xuICBpZiAoIWxvY2FsZSB8fCBsb2NhbGUgPT09IGRlZmF1bHRMb2NhbGUpIHtcbiAgICByZXR1cm4gYXBwQ29uZmlnO1xuICB9XG4gIC8vIFJlcGxhY2UgY29uZmlnIHdpdGggbGFuZ1xuICBjb25zdCBjb25maWdMYW5nID0gYXBwQ29uZmlnLmxhbmdbbG9jYWxlXTtcbiAgaWYgKGNvbmZpZ0xhbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBsb2NhbGU6ICcsIGxvY2FsZSk7XG4gIH1cbiAgcmV0dXJuIHsgLi4uYXBwQ29uZmlnLCAuLi5jb25maWdMYW5nIH07XG59O1xuXG5jb25zdCBTaG93SW52aXRlID0gKHsgY3VycmVudFVybCwgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCwgZ3Vlc3QgfSkgPT4ge1xuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb24oZ3Vlc3QubG9jYWxlKTtcblxuICAvLyBJbml0aWF0ZSBjb25maWcgdmFyaWFibGVzXG4gIGNvbnN0IHtcbiAgICBsb2dvLFxuICAgIG9nVGFncyxcbiAgICBjb3VwbGVJbmZvLFxuICAgIHZlbnVlLFxuICAgIHdlZGRpbmdEYXksXG4gICAgd2VkZGluZ0RhdGUsXG4gICAgd2VkZGluZ1RpbWUsXG4gICAgY2FsZW5kYXJJbmZvLFxuICB9ID0gdHJhbnNsYXRlQ29uZmlnKGFwcENvbmZpZywgZ3Vlc3QubG9jYWxlKTtcbiAgY29uc3QgeyBicmlkZU5hbWUsIGdyb29tTmFtZSwgaGFzaHRhZywgY291cGxlTmFtZUZvcm1hdCB9ID0gY291cGxlSW5mbztcblxuICBjb25zdCBjb3VwbGVOYW1lU3RyID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnXG4gICAgICA/IGAke2dyb29tTmFtZX0gJiAke2JyaWRlTmFtZX1gXG4gICAgICA6IGAke2JyaWRlTmFtZX0gJiAke2dyb29tTmFtZX1gO1xuICBjb25zdCBjb3VwbGVOYW1lID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnID8gKFxuICAgICAgPD5cbiAgICAgICAge2dyb29tTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHticmlkZU5hbWV9XG4gICAgICA8Lz5cbiAgICApIDogKFxuICAgICAgPD5cbiAgICAgICAge2JyaWRlTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHtncm9vbU5hbWV9XG4gICAgICA8Lz5cbiAgICApO1xuXG4gIC8vIFZlbnVlIGluZm9cbiAgY29uc3QgdmVudWVCcmllZiA9IGAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9LCAke3ZlbnVlLmNvdW50cnl9YDtcbiAgY29uc3Qgd2VkZGluZ0RhdGVCcmllZiA9IGAke3dlZGRpbmdEYXl9LCAke3dlZGRpbmdEYXRlfWA7XG5cbiAgLy8gRXZlbnQgaW5mb1xuICBjb25zdCBldmVudFRpdGxlID0gYCR7Y291cGxlTmFtZVN0cn0ncyBXZWRkaW5nYDtcbiAgbGV0IGV2ZW50RGVzY3JpcHRpb24gPSBgJHt3ZWRkaW5nRGF0ZUJyaWVmfSBhdCAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9YDtcbiAgaWYgKGd1ZXN0Lm5hbWUpIHtcbiAgICBldmVudERlc2NyaXB0aW9uID0gYERlYXIgJHtndWVzdC5uYW1lfSwgeW91IGFyZSBjb3JkaWFsbHkgaW52aXRlZCB0byBvdXIgd2VkZGluZyBvbiAke3dlZGRpbmdEYXRlfSBhdCAke3ZlbnVlLm5hbWV9LiBMb29raW5nIGZvcndhcmQgdG8gc2VlaW5nIHlvdSFgO1xuICB9XG5cbiAgLy8gQ2FsZW5kYXIgcGF5bG9hZFxuICBjb25zdCBjYWxlbmRhckV2ZW50ID0ge1xuICAgIHRpdGxlOiBldmVudFRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBldmVudERlc2NyaXB0aW9uLFxuICAgIGxvY2F0aW9uOiBgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWAsXG4gICAgc3RhcnRUaW1lOiBjYWxlbmRhckluZm8udGltZVN0YXJ0SVNPLFxuICAgIGVuZFRpbWU6IGNhbGVuZGFySW5mby50aW1lRW5kSVNPLFxuICB9O1xuXG4gIGNvbnN0IGV2ZW50U2NoZWR1bGUgPSBbXG4gICAge1xuICAgICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgICBldmVudDogJ0NodXJjaCcsXG4gICAgICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAgIHRpbWU6ICcxMnBtJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgICAgZXZlbnQ6ICdSZWNlcHRpb24nLFxuICAgICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgICB0aW1lOiAnMnBtJyxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgIC8vICAgZXZlbnQ6ICdFbmdhZ2VtZW50JyxcbiAgICAvLyAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgIC8vICAgdGltZTogJzJwbScsXG4gICAgLy8gfSxcbiAgXTtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dNb2RhbCh0cnVlKTtcbiAgICB9LCAxMDAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudFJlZi5jdXJyZW50O1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICBpZiAoZWxlbWVudFBvc2l0aW9uIDwgd2luZG93SGVpZ2h0ICogMC45KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC1lbGVtZW50Jyk7IC8vIEFkZCB0aGUgQ1NTIGNsYXNzIHdoZW4gdGhlIGVsZW1lbnQgaXMgNzUlIHZpc2libGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkLWVsZW1lbnQnKTsgLy8gUmVtb3ZlIHRoZSBDU1MgY2xhc3MgaWYgbm90IHZpc2libGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIFJ1biB0aGlzIGVmZmVjdCBvbmx5IG9uY2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBhLnJlYWN0LWFkZC10by1jYWxlbmRhcl9fYnV0dG9uIHNwYW4ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkXG4gICAgICAgIHsuLi5vZ1RhZ3N9XG4gICAgICAgIHRpdGxlPXtldmVudFRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZXZlbnREZXNjcmlwdGlvbn1cbiAgICAgICAgZ3Vlc3ROYW1lPXtndWVzdC5uYW1lfVxuICAgICAgICB1cmw9e2N1cnJlbnRVcmx9XG4gICAgICAgIGRhdGU9e3dlZGRpbmdEYXRlQnJpZWZ9XG4gICAgICAgIG1vZGlmaWVkVGltZT17Z3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdH1cbiAgICAgICAgdmVudWU9e3ZlbnVlQnJpZWZ9XG4gICAgICAgIGxvZ289e3Jlc29sdmVQYXRoKG9nVGFncy5sb2dvKX1cbiAgICAgICAgYXV0aG9yPXtyZXNvbHZlUGF0aCgnLycpfVxuICAgICAgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naGVhZGVyX2FyZWEnPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgPEhlYWRlckxvZ28gLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlYWRlci1sb2dvLXRleHQnPlRoZSBBa2lubGFndW4ncyBQYXJ0eTwvc3Bhbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgaWQ9J2hvbWUnIGNsYXNzTmFtZT0naGVhZGVyX3NsaWRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLWxpc3QgZHJhZ2dhYmxlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay10cmFjaycgc3R5bGU9e3sgb3BhY2l0eTogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnX2NvdmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy0xMCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfY29udGVudCB0ZXh0LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogNjAsIG1hcmdpbjogMjUsIG1hcmdpblRvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9zdWJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC4ycydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnc2l0ZUludHJvJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjdzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291cGxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc2h0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLm5hbWV9LCB7dmVudWUuY2l0eX0sIHt2ZW51ZS5jb3VudHJ5fS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGlkPSdjb21pbmdfc29vbicgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9hcmVhIHB0LTIwIHBiLTcwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX3NoYXBlXzEnIHN0eWxlPXt7IHpJbmRleDogMSB9fT5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMS5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTQnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHB0LTUwIHdvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuMnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dCgnZXZlbnREYXRlJyl9OjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3dlZGRpbmdEYXRlQnJpZWZ9PC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QWRkVG9DYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICBldmVudD17Y2FsZW5kYXJFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9e3QoJ2J0bkFkZFRvTXlDYWxlbmRhcicpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy9zZWN0aW9uX3NoYXBlLnBuZycgYWx0PSdTaGFwZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9jb3VudCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC0yMCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNjAsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZV9jb3VudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMzAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvdW50X2NvbnRlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxLCBwYWRkaW5nVG9wOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmVudWUubWFwVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy9iZXZlbnQucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2JldmVudCBjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc3NXZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUuYWRkcmVzc0xpbmUxfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8yJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMi5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiByZWY9e2VsZW1lbnRSZWZ9IGlkPSdjb250YWN0JyBjbGFzc05hbWU9J2NvbnRhY3RfYXJlYSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY29udGFjdF93cmFwcGVyIHdvdyBmYWRlSW5VcEJpZydcbiAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjRzJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJblVwJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1ldmVudExpbmV1cCc+XG4gICAgICAgICAgICAgIHtldmVudFNjaGVkdWxlLm1hcCgoZXYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0aW1lLCBkYXRlLCBldmVudCwgaWNvbiB9ID0gZXY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudExpbmV1cCcga2V5PXtldmVudH0+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtldmVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3RpbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogZm9ybSAqL31cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy05Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSB0ZXh0LWNlbnRlciBwYi0zMCc+XG4gICAgICAgICAgICAgICAgICB7Z3Vlc3QubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dCgnaW52aXRhdGlvbkdyZWV0aW5nJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjVyZW0nIH19PntndWVzdC5uYW1lfSw8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgY2xhc3NOYW1lPSdsb3ZlLXRpdGxlLWNvbnRhaW5lciBmYWRlSW5VcEJpZyBmYWRlSW4nXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPGRpdiByZWY9e2VsZW1lbnRSZWZ9PlxuICAgICAgICAgIDxMb3ZlVGl0bGVJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudFJlZn0gY2xhc3NOYW1lPSdsb3ZlLXRpdGxlJz5cbiAgICAgICAgICBNeSBoZWFydCBpcyB5b3VyIHRvIGhvbGQgYW5kIGNoZXJpc2ggZm9yIHRoZSByZXN0IG9mIG91ciBkYXlzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxhcnRpY2xlXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J3N0b3JpZXMtY29udGFpbmVyIGZhZGVJblVwQmlnJ1xuICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICA+XG4gICAgICAgIDxTdG9yaWVzIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZC1jb250YWluZXInPlxuICAgICAgICA8UGljdHVyZXNHcmlkIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgJz5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDVcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6ICcjRDNEM0QzJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgI0RXZWRkaW5nXG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaG93SW52aXRlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcbiAgY29uc3QgbG9jYWxlUGFyYW1zID0gY3R4LnF1ZXJ5LmxhbmcgfHwgZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgZW1wdHlHdWVzdFBhcmFtcyA9IHtcbiAgICBndWVzdDoge1xuICAgICAgZ3Vlc3RJZDogJycsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGdyZWV0aW5nOiAnJyxcbiAgICAgIGxvY2FsZTogbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgY3VycmVudFVybCA9IHJlc29sdmVQYXRoKGN0eC5yZXEudXJsKTtcbiAgY29uc3QgZ3Vlc3RJZCA9IGN0eC5xdWVyeS51O1xuICBpZiAoIWd1ZXN0SWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGd1ZXN0RGF0YSA9IGd1ZXN0TGlzdC5kYXRhO1xuICBjb25zdCBndWVzdExpc3RMYXN0VXBkYXRlZEF0ID0gZ3Vlc3RMaXN0Lm1ldGEubGFzdFVwZGF0ZWRBdDtcbiAgY29uc3QgeyBuYW1lLCBncmVldGluZywgbG9jYWxlIH0gPVxuICAgIGd1ZXN0RGF0YS5maWx0ZXIoKGd1ZXN0KSA9PiBndWVzdC5ndWVzdElkID09PSBndWVzdElkKVswXSB8fCB7fTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVcmwsXG4gICAgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCxcbiAgICBndWVzdDoge1xuICAgICAgbmFtZSxcbiAgICAgIGdyZWV0aW5nLFxuICAgICAgZ3Vlc3RJZCxcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0ludml0ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=