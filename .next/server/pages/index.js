module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/swiper/swiper-bundle.css":
/*!***********************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/collect-guest-attendance.jsx":
/*!********************************************!*\
  !*** ./pages/collect-guest-attendance.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\collect-guest-attendance.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CollectGuestAttendance = ({
  setShowModal,
  showModal
}) => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  function httpStatus(statusCode) {
    if (statusCode >= 200 && statusCode <= 299) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success!', 'We appreciate your response!', 'success');
      setShowModal(false);
      setMessage('');
      setEmail('');
      setName('');
    } else if (statusCode >= 400 && statusCode <= 499) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'Something went wrong, please try again!', 'error');
    } else if (statusCode >= 500) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'Something went wrong, please try again!', 'error');
    } else {
      return 'unknown status';
    }
  }
  const handleSubmit = async e => {
    e.preventDefault();
    if (!name || !email || !message) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('', 'All fields are required', 'error');
      return;
    }
    setIsLoading(true);
    await Object(emailjs_com__WEBPACK_IMPORTED_MODULE_2__["send"])("service_c13iifh", "portfolio-form", {
      name,
      email,
      message
    }, "5ys6BgjZar-iFvmMs").then(response => {
      httpStatus(response.status);
    }).catch(err => {
      setIsLoading(false);
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'Something went wrong, please try again!', 'error');
    });
    setIsLoading(false);
  };
  return __jsx("div", {
    className: "modal",
    tabIndex: "-1",
    role: "dialog",
    style: {
      display: showModal ? 'block' : 'none',
      color: 'black'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-content  glassmorphism",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("div", {
    type: "button",
    className: "close guest-modal",
    onClick: () => setShowModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "\xD7")), __jsx("div", {
    className: "modal-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("h2", {
    style: {
      fontSize: '20px'
    },
    className: "form_title mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "Inform us of your availability"), __jsx("form", {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '14px'
    },
    htmlFor: "name",
    className: "form-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, "Name:"), __jsx("input", {
    style: {
      borderRadius: '10px',
      height: '45px',
      color: 'black',
      backgroundColor: 'transparent'
    },
    type: "text",
    className: "form-control",
    id: "name",
    value: name,
    onChange: e => setName(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '14px'
    },
    htmlFor: "email",
    className: "form-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, "Email:"), __jsx("input", {
    style: {
      borderRadius: '10px',
      height: '45px',
      color: 'black',
      backgroundColor: 'transparent'
    },
    type: "email",
    className: "form-control",
    id: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "attending",
    style: {
      fontSize: '14px'
    },
    className: "form-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, "Will you be attending?"), __jsx("textarea", {
    rows: "4",
    type: "number",
    style: {
      borderRadius: '10px',
      color: 'black',
      backgroundColor: 'transparent'
    },
    className: "form-control",
    id: "attending",
    value: message,
    onChange: e => setMessage(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 19
    }
  })), __jsx("button", {
    type: "submit",
    className: "guest-form-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, isLoading ? 'Submitting...' : 'Submit')))))));
};
/* harmony default export */ __webpack_exports__["default"] = (CollectGuestAttendance);

/***/ }),

/***/ "./pages/guest_list.json":
/*!*******************************!*\
  !*** ./pages/guest_list.json ***!
  \*******************************/
/*! exports provided: meta, data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"meta\":{\"lastUpdatedAt\":\"2023-09-06T02:39:45.220Z\"},\"data\":[{\"guestId\":\"\",\"guestUrl\":\"https://adewale-weds-tiwa.vercel.app/\",\"name\":\"John Doe\",\"greeting\":\"\",\"locale\":\"\"}]}");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_add_to_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-add-to-calendar */ "react-add-to-calendar");
/* harmony import */ var react_add_to_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qrcode.react */ "qrcode.react");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Head */ "./src/components/Head.jsx");
/* harmony import */ var _src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/utils/resolvePath */ "./src/utils/resolvePath.js");
/* harmony import */ var _src_config_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/config/app */ "./src/config/app.js");
/* harmony import */ var _src_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/i18n */ "./src/i18n/index.js");
/* harmony import */ var _guest_list_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guest_list.json */ "./pages/guest_list.json");
var _guest_list_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./guest_list.json */ "./pages/guest_list.json", 1);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _stories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stories */ "./pages/stories.jsx");
/* harmony import */ var _pictureGrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pictureGrid */ "./pages/pictureGrid.jsx");
/* harmony import */ var _collect_guest_attendance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collect-guest-attendance */ "./pages/collect-guest-attendance.jsx");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }














const LoveTitleIcon = () => {
  return __jsx("img", {
    src: "assets/images/wine.png",
    style: {
      width: '80px',
      height: '80px'
    },
    alt: "wine illustrator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  });
};
const EventDateIcon = () => {
  return __jsx("svg", {
    width: "35",
    height: "78",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M20.355 12.083c-1.643-1.62-2.156-4.77.41-5.83 1.187-.49 2.68-.365 3.928-.227 1.286.143 2.552.417 3.77.856 2.173.785 5.184 2.164 6.027 4.51.993 2.762-1.968 4.107-4.155 4.474-2.775.465-5.706.417-8.513.338-2.694-.076-5.454-.375-7.98-1.366-2.27-.892-4.59-2.333-5.723-4.58-1.043-2.066-.836-4.541.475-6.444C10.4 1.193 13.422.69 16.381.337A49.462 49.462 0 0 1 27.307.27c1.2.123 1.212 2.017 0 1.893a49.877 49.877 0 0 0-7.412-.223c-2.265.105-4.671.24-6.85.902-1.807.549-3.232 1.882-3.627 3.77-.414 1.978.708 3.732 2.23 4.903 3.25 2.5 7.672 2.811 11.615 2.817 2.225.004 4.55.074 6.745-.32.804-.144 1.895-.32 2.484-.957.814-.88-.32-1.938-1.01-2.467-1.83-1.406-4.144-2.283-6.416-2.619-.979-.145-2.579-.413-3.52 0-1.294.57-.576 2.063.147 2.777.87.856-.47 2.194-1.338 1.338Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M34.023 13.727c-1.494 5.45-3.158 10.933-7.099 15.157a22.39 22.39 0 0 1-6.03 4.581c-2.323 1.205-5.13 2.385-7.781 1.828-1.19-.25-.687-2.075.503-1.825 2.292.48 5.02-.888 6.97-1.986a20.808 20.808 0 0 0 5.396-4.373c3.446-3.904 4.869-8.97 6.216-13.884.32-1.174 2.147-.676 1.825.502Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M9.028 7.923c-1.266 8.344-2.59 18.37 3.722 25.133.83.89-.505 2.231-1.338 1.339-6.84-7.331-5.587-17.893-4.21-26.974.183-1.2 2.006-.69 1.826.502Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M14.877 34.343c-1.918 14.074-1.349 28.46 1.636 42.344.255 1.187-1.569 1.695-1.825.503a125.654 125.654 0 0 1-1.636-43.35c.164-1.202 1.988-.69 1.825.503Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M10.34 60.891c-.416-4.656-3.845-8.86-8.29-10.26-1.158-.365-.664-2.193.502-1.825 5.301 1.67 9.186 6.562 9.68 12.085.108 1.212-1.785 1.205-1.893 0Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M3.197 49.92c-.73 1.386-.92 2.937-.96 4.484-.037 1.476-.259 3.246.739 4.46.92 1.12 2.271 1.956 3.53 2.643a17.595 17.595 0 0 0 4.402 1.662c1.184.28.683 2.105-.503 1.825a19.37 19.37 0 0 1-5.07-1.974c-1.515-.855-3.106-1.922-4.12-3.362C.153 58.15.3 56.163.345 54.404c.049-1.89.327-3.75 1.217-5.44.569-1.077 2.202-.122 1.635.956Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M7.919 58.026c1.36 1.72 2.723 3.44 4.084 5.16.306.388.406.965 0 1.339-.342.313-1.01.414-1.338 0L6.58 59.363c-.306-.387-.406-.965 0-1.337.342-.314 1.01-.415 1.339 0ZM12.629 51.884a28.08 28.08 0 0 1 17.418-6.628c1.219-.03 1.218 1.863 0 1.892-5.863.14-11.594 2.288-16.08 6.074-.926.782-2.27-.55-1.338-1.338Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M32.267 46.673c-1.21 4.234-4.072 8.142-8.054 10.15-3.783 1.906-8.623 1.753-11.649-1.48-.831-.889.504-2.23 1.338-1.338 2.6 2.776 6.735 2.676 9.872.907 3.297-1.857 5.638-5.138 6.669-8.742.334-1.169 2.16-.672 1.824.503Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M14.35 53.138a40.707 40.707 0 0 1 5.912-1.533c.485-.087 1.043.132 1.163.661.105.463-.14 1.07-.66 1.165a40.616 40.616 0 0 0-5.913 1.533c-.468.16-1.054-.184-1.163-.661-.12-.526.158-.993.66-1.165Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }));
};
const HeaderLogo = () => {
  return __jsx("span", {
    style: {
      display: 'inlineBlock',
      backfaceVisibility: 'hidden',
      transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("svg", {
    width: "40",
    height: "40",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "m34.613 27.737 1.437.088a6.111 6.111 0 0 1 1.925.2c.35.2.538.475.1.762-.437.288-1.1 0-1.5 0-.4 0-.925-.1-1.4-.125a3.296 3.296 0 0 0-1.05 0c-.35.113-.287.213-.487.613a7.577 7.577 0 0 1-1.763 2.15c-1.462 1.25-3.45 1.337-5.162 2.087.45-2.962 2.725-4.437 5.475-5-.975 0-2.675-.875-3.513-.462-1.487.637-3.75 1.5-4.212 3.25-.238 1.062-.188 2.637-1.538 2.962-1.35.325-1.725-.962-1.4-1.975-.875.45-2.05.088-1.862-1.05.187-1.137 1.525-1.25 2.387-1.362 2.213-.35 3.9-1.625 5.988-2.288a25.845 25.845 0 0 0-2.5-1.025 6.837 6.837 0 0 0-2.6.488c-.92.114-1.828.31-2.713.587-.64.34-1.19.828-1.6 1.425-.987 1.163-2.2 2.5-3.9 2.375-2.15-.2-1.912-2.65-.325-3.487-1.025 0-2.5-.638-2.4-1.875.088-1.55 1.963-1.738 3.125-1.425 1.097.419 2.166.907 3.2 1.462 1.938.788 3.75 0 5.763-.2a37.994 37.994 0 0 1-4.65-2.675 2.187 2.187 0 0 0-1.375-.55h-1.25a27.671 27.671 0 0 0-3.375.1c-.775 0-1.325.738-1.838 1.25a6.138 6.138 0 0 1-2.5 1.713 1.987 1.987 0 0 1-2.5-.625A2.075 2.075 0 0 1 7.713 22.4c-.975-.325-2.288-1.113-1.425-2.3 1.012-1.388 2.875-.65 3.937.15a5.875 5.875 0 0 0 2.938 1.6c1.482.087 2.968.087 4.45 0a23.74 23.74 0 0 1-2.038-2.013 5.787 5.787 0 0 0-.862-.962c-.852-.38-1.752-.641-2.675-.775a14.522 14.522 0 0 0-2.75-.775 5.611 5.611 0 0 0-2.688.625 6.251 6.251 0 0 1-3.137.525 1.95 1.95 0 0 1-1.675-2.063c.125-1.037.987-1.387 1.875-1.55-2.025-1.887.775-3.687 2.5-2.012 1.025 1.012 1.637 2.912 2.912 3.425 1.613.65 3.375.887 5 1.637-.937-1.25-1.85-2.5-2.725-3.75a6.875 6.875 0 0 0-2.775-2.975c-1.487-.675-3.45-1.487-3.75-3.35-.35-2.287 2.238-1.9 3.45-.95a2.163 2.163 0 0 1 1.4-2.5c1.25-.487 2.013.463 2.175 1.675.025 1.438-.6 2.825-.825 4.325-.262 2.213 2.15 4.875 3.363 6.6 0-1.85.7-4.062-.263-5.787-.625-1.425-2.612-3.825-1.25-5.425 1-1.138 2.238.125 2.575 1.15a1.462 1.462 0 0 1 2.5-.263c1.25 1.725-.75 3.238-1.662 4.513-1.1 1.512-.9 2.95-1.038 4.737a6.597 6.597 0 0 0-.162 2.025c.137.413.812.888 1.112 1.25a26.93 26.93 0 0 0 2.563 2.363c-.1-2.1.212-4.275-.513-6.25-.425-1.15-1.4-3.15-.5-4.288.9-1.137 1.9-.137 2.25.813a2.025 2.025 0 0 1 2.5-.65 1.95 1.95 0 0 1 .425 2.5c-.85 1.812-3.287 2.762-3.287 4.825-.125.95-.063 1.987-.1 2.95a2.023 2.023 0 0 0 0 .675c.137.275.862.612 1.112.775a35.377 35.377 0 0 0 5 2.637c-.287-1.25-.312-2.412-.512-3.75a5.338 5.338 0 0 0-1.388-2.812c-.737-.988-1.5-2.65-.387-3.688.875-.825 2.025-.062 2.35.888 1.05-1.6 3.662-1.438 3.75.737.087 1.65-1.35 2.725-2.5 3.625-.233.15-.419.363-.538.613a3.033 3.033 0 0 0-.187.725c-.057.836-.011 1.675.137 2.5 0 .512 0 1.25.413 1.512.522.28 1.082.482 1.662.6a20.13 20.13 0 0 0 4.188 1.038 6.075 6.075 0 0 1-2.188-4.2 9.1 9.1 0 0 1 .8-4.513c.825 1.25 2.013 2.35 2.763 3.675a5.763 5.763 0 0 1 .1 5.25c.166.013.333.013.5 0Z",
    fill: "#DFAE00",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M19.55 15.787s3.275-2.85 2.5-3.637c-.775-.788-2.112.912-2.112.912s-.638-1.85-1.463-1.25c-.825.6 1.075 3.975 1.075 3.975ZM15.188 10.788s2.975-2.913 1.962-3.475c-1.012-.563-1.75 1.25-1.75 1.25s-.975-2.5-1.787-1.788c-.813.713 1.575 4.013 1.575 4.013ZM9.662 10.437s1.963-4.587.488-4.837-1.4 2.6-1.4 2.6-2.913-1.95-3.113-.7c-.237 1.525 4.025 2.937 4.025 2.937ZM7.3 16.513s-1.8-3.625-2.9-3.2c-1.1.425.425 2.1.425 2.1s-2.088.275-1.963 1.512c.125 1.238 4.438-.412 4.438-.412ZM11.662 22.575S8.35 19.663 7.5 20.425c-.85.763 2.062 2.075 2.062 2.075s-3.1 1.475-2.062 2.2c1.25.888 4.162-2.125 4.162-2.125ZM18.588 27.375s-4.638-2.638-5.363-1.588c-.725 1.05 2.763 1.825 2.763 1.825s-2.825 1.938-1.513 2.638c1.313.7 4.113-2.875 4.113-2.875ZM25.85 20s3.75-2.5 2.287-3.512c-1.112-.763-2.5 1.087-2.5 1.087s-.812-2.1-1.712-1.4c-.9.7 1.925 3.825 1.925 3.825ZM23.963 30.175s-.438 2.85-1.25 3.15c-.813.3-.213-2.075-.213-2.075s-2.025.925-1.925 0c.1-.925 3.388-1.075 3.388-1.075Z",
    fill: "#F7D47D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M33.287 26.95a4.887 4.887 0 0 0 .125-3.35 6.362 6.362 0 0 0-1.887-3.05c-1.063 4.537 1.762 6.4 1.762 6.4ZM32.75 29.15c-.622.804-1.36 1.511-2.188 2.1-.874.555-1.826.976-2.825 1.25a6.713 6.713 0 0 1 2.113-2.137 11.588 11.588 0 0 1 2.9-1.213Z",
    fill: "#DCB3B4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  })));
};
const translateConfig = (appConfig, locale) => {
  if (!locale || locale === _src_i18n__WEBPACK_IMPORTED_MODULE_8__["defaultLocale"]) {
    return appConfig;
  }
  // Replace config with lang
  const configLang = appConfig.lang[locale];
  if (configLang === undefined) {
    throw new Error('invalid locale: ', locale);
  }
  return _objectSpread(_objectSpread({}, appConfig), configLang);
};
const ShowInvite = ({
  currentUrl,
  guestListLastUpdatedAt,
  guest
}) => {
  const t = Object(_src_i18n__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(guest.locale);

  // Initiate config variables
  const {
    logo,
    ogTags,
    coupleInfo,
    venue,
    weddingDay,
    weddingDate,
    weddingTime,
    calendarInfo
  } = translateConfig(_src_config_app__WEBPACK_IMPORTED_MODULE_7__["default"], guest.locale);
  const {
    brideName,
    groomName,
    hashtag,
    coupleNameFormat
  } = coupleInfo;
  const coupleNameStr = coupleNameFormat === 'GROOM_FIRST' ? `${groomName} & ${brideName}` : `${brideName} & ${groomName}`;
  const coupleName = coupleNameFormat === 'GROOM_FIRST' ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, brideName, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, "&"), " ", groomName) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, groomName, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }, "&"), " ", brideName);

  // Venue info
  const venueBrief = `${venue.name}, ${venue.city}, ${venue.country}`;
  const weddingDateBrief = `${weddingDay}, ${weddingDate}`;

  // Event info
  const eventTitle = `${coupleNameStr}'s Wedding`;
  let eventDescription = `${weddingDateBrief} at ${venue.name}, ${venue.city}`;
  if (guest.name) {
    eventDescription = `Dear ${guest.name}, you are cordially invited to our wedding on ${weddingDate} at ${venue.name}. Looking forward to seeing you!`;
  }

  // Calendar payload
  const calendarEvent = {
    title: eventTitle,
    description: eventDescription,
    location: `${venue.city}, ${venue.country}`,
    startTime: calendarInfo.timeStartISO,
    endTime: calendarInfo.timeEndISO
  };
  const eventSchedule = [{
    icon: __jsx(EventDateIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }
    }),
    event: 'Church',
    date: 'Dec 16, 2023',
    time: '12pm'
  }, {
    icon: __jsx(EventDateIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
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

  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  const elementRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.9) {
          element.classList.add('animated-element'); // Add the CSS class when the element is 75% visible
        } else {
          element.classList.remove('animated-element'); // Remove the CSS class if not visible
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run this effect only once when the component is mounted

  return __jsx("div", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1703421768",
    __self: undefined
  }, "a.react-add-to-calendar__button span{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxhZGV3YWxlLXdlZGRpbmctaW52aXRlXFxwYWdlc1xcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJOUyxBQUc0QixlQUNXLDREQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcYWRld2FsZS13ZWRkaW5nLWludml0ZVxccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IFN0b3JpZXMgZnJvbSAnLi9zdG9yaWVzJztcbmltcG9ydCBQaWN0dXJlc0dyaWQgZnJvbSAnLi9waWN0dXJlR3JpZCc7XG5pbXBvcnQgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSBmcm9tICcuL2NvbGxlY3QtZ3Vlc3QtYXR0ZW5kYW5jZSc7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XG5cbmNvbnN0IExvdmVUaXRsZUljb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgc3JjPSdhc3NldHMvaW1hZ2VzL3dpbmUucG5nJ1xuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnODBweCcsXG4gICAgICB9fVxuICAgICAgYWx0PSd3aW5lIGlsbHVzdHJhdG9yJ1xuICAgIC8+XG4gICk7XG59O1xuY29uc3QgRXZlbnREYXRlSWNvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPSczNScgaGVpZ2h0PSc3OCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00yMC4zNTUgMTIuMDgzYy0xLjY0My0xLjYyLTIuMTU2LTQuNzcuNDEtNS44MyAxLjE4Ny0uNDkgMi42OC0uMzY1IDMuOTI4LS4yMjcgMS4yODYuMTQzIDIuNTUyLjQxNyAzLjc3Ljg1NiAyLjE3My43ODUgNS4xODQgMi4xNjQgNi4wMjcgNC41MS45OTMgMi43NjItMS45NjggNC4xMDctNC4xNTUgNC40NzQtMi43NzUuNDY1LTUuNzA2LjQxNy04LjUxMy4zMzgtMi42OTQtLjA3Ni01LjQ1NC0uMzc1LTcuOTgtMS4zNjYtMi4yNy0uODkyLTQuNTktMi4zMzMtNS43MjMtNC41OC0xLjA0My0yLjA2Ni0uODM2LTQuNTQxLjQ3NS02LjQ0NEMxMC40IDEuMTkzIDEzLjQyMi42OSAxNi4zODEuMzM3QTQ5LjQ2MiA0OS40NjIgMCAwIDEgMjcuMzA3LjI3YzEuMi4xMjMgMS4yMTIgMi4wMTcgMCAxLjg5M2E0OS44NzcgNDkuODc3IDAgMCAwLTcuNDEyLS4yMjNjLTIuMjY1LjEwNS00LjY3MS4yNC02Ljg1LjkwMi0xLjgwNy41NDktMy4yMzIgMS44ODItMy42MjcgMy43Ny0uNDE0IDEuOTc4LjcwOCAzLjczMiAyLjIzIDQuOTAzIDMuMjUgMi41IDcuNjcyIDIuODExIDExLjYxNSAyLjgxNyAyLjIyNS4wMDQgNC41NS4wNzQgNi43NDUtLjMyLjgwNC0uMTQ0IDEuODk1LS4zMiAyLjQ4NC0uOTU3LjgxNC0uODgtLjMyLTEuOTM4LTEuMDEtMi40NjctMS44My0xLjQwNi00LjE0NC0yLjI4My02LjQxNi0yLjYxOS0uOTc5LS4xNDUtMi41NzktLjQxMy0zLjUyIDAtMS4yOTQuNTctLjU3NiAyLjA2My4xNDcgMi43NzcuODcuODU2LS40NyAyLjE5NC0xLjMzOCAxLjMzOFonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTM0LjAyMyAxMy43MjdjLTEuNDk0IDUuNDUtMy4xNTggMTAuOTMzLTcuMDk5IDE1LjE1N2EyMi4zOSAyMi4zOSAwIDAgMS02LjAzIDQuNTgxYy0yLjMyMyAxLjIwNS01LjEzIDIuMzg1LTcuNzgxIDEuODI4LTEuMTktLjI1LS42ODctMi4wNzUuNTAzLTEuODI1IDIuMjkyLjQ4IDUuMDItLjg4OCA2Ljk3LTEuOTg2YTIwLjgwOCAyMC44MDggMCAwIDAgNS4zOTYtNC4zNzNjMy40NDYtMy45MDQgNC44NjktOC45NyA2LjIxNi0xMy44ODQuMzItMS4xNzQgMi4xNDctLjY3NiAxLjgyNS41MDJaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J005LjAyOCA3LjkyM2MtMS4yNjYgOC4zNDQtMi41OSAxOC4zNyAzLjcyMiAyNS4xMzMuODMuODktLjUwNSAyLjIzMS0xLjMzOCAxLjMzOS02Ljg0LTcuMzMxLTUuNTg3LTE3Ljg5My00LjIxLTI2Ljk3NC4xODMtMS4yIDIuMDA2LS42OSAxLjgyNi41MDJaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00xNC44NzcgMzQuMzQzYy0xLjkxOCAxNC4wNzQtMS4zNDkgMjguNDYgMS42MzYgNDIuMzQ0LjI1NSAxLjE4Ny0xLjU2OSAxLjY5NS0xLjgyNS41MDNhMTI1LjY1NCAxMjUuNjU0IDAgMCAxLTEuNjM2LTQzLjM1Yy4xNjQtMS4yMDIgMS45ODgtLjY5IDEuODI1LjUwM1onXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTEwLjM0IDYwLjg5MWMtLjQxNi00LjY1Ni0zLjg0NS04Ljg2LTguMjktMTAuMjYtMS4xNTgtLjM2NS0uNjY0LTIuMTkzLjUwMi0xLjgyNSA1LjMwMSAxLjY3IDkuMTg2IDYuNTYyIDkuNjggMTIuMDg1LjEwOCAxLjIxMi0xLjc4NSAxLjIwNS0xLjg5MyAwWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMy4xOTcgNDkuOTJjLS43MyAxLjM4Ni0uOTIgMi45MzctLjk2IDQuNDg0LS4wMzcgMS40NzYtLjI1OSAzLjI0Ni43MzkgNC40Ni45MiAxLjEyIDIuMjcxIDEuOTU2IDMuNTMgMi42NDNhMTcuNTk1IDE3LjU5NSAwIDAgMCA0LjQwMiAxLjY2MmMxLjE4NC4yOC42ODMgMi4xMDUtLjUwMyAxLjgyNWExOS4zNyAxOS4zNyAwIDAgMS01LjA3LTEuOTc0Yy0xLjUxNS0uODU1LTMuMTA2LTEuOTIyLTQuMTItMy4zNjJDLjE1MyA1OC4xNS4zIDU2LjE2My4zNDUgNTQuNDA0Yy4wNDktMS44OS4zMjctMy43NSAxLjIxNy01LjQ0LjU2OS0xLjA3NyAyLjIwMi0uMTIyIDEuNjM1Ljk1NlonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTcuOTE5IDU4LjAyNmMxLjM2IDEuNzIgMi43MjMgMy40NCA0LjA4NCA1LjE2LjMwNi4zODguNDA2Ljk2NSAwIDEuMzM5LS4zNDIuMzEzLTEuMDEuNDE0LTEuMzM4IDBMNi41OCA1OS4zNjNjLS4zMDYtLjM4Ny0uNDA2LS45NjUgMC0xLjMzNy4zNDItLjMxNCAxLjAxLS40MTUgMS4zMzkgMFpNMTIuNjI5IDUxLjg4NGEyOC4wOCAyOC4wOCAwIDAgMSAxNy40MTgtNi42MjhjMS4yMTktLjAzIDEuMjE4IDEuODYzIDAgMS44OTItNS44NjMuMTQtMTEuNTk0IDIuMjg4LTE2LjA4IDYuMDc0LS45MjYuNzgyLTIuMjctLjU1LTEuMzM4LTEuMzM4WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMzIuMjY3IDQ2LjY3M2MtMS4yMSA0LjIzNC00LjA3MiA4LjE0Mi04LjA1NCAxMC4xNS0zLjc4MyAxLjkwNi04LjYyMyAxLjc1My0xMS42NDktMS40OC0uODMxLS44ODkuNTA0LTIuMjMgMS4zMzgtMS4zMzggMi42IDIuNzc2IDYuNzM1IDIuNjc2IDkuODcyLjkwNyAzLjI5Ny0xLjg1NyA1LjYzOC01LjEzOCA2LjY2OS04Ljc0Mi4zMzQtMS4xNjkgMi4xNi0uNjcyIDEuODI0LjUwM1onXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTE0LjM1IDUzLjEzOGE0MC43MDcgNDAuNzA3IDAgMCAxIDUuOTEyLTEuNTMzYy40ODUtLjA4NyAxLjA0My4xMzIgMS4xNjMuNjYxLjEwNS40NjMtLjE0IDEuMDctLjY2IDEuMTY1YTQwLjYxNiA0MC42MTYgMCAwIDAtNS45MTMgMS41MzNjLS40NjguMTYtMS4wNTQtLjE4NC0xLjE2My0uNjYxLS4xMi0uNTI2LjE1OC0uOTkzLjY2LTEuMTY1WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5jb25zdCBIZWFkZXJMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lQmxvY2snLFxuICAgICAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAwcHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxKScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxzdmcgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyBmaWxsPSdub25lJz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdtMzQuNjEzIDI3LjczNyAxLjQzNy4wODhhNi4xMTEgNi4xMTEgMCAwIDEgMS45MjUuMmMuMzUuMi41MzguNDc1LjEuNzYyLS40MzcuMjg4LTEuMSAwLTEuNSAwLS40IDAtLjkyNS0uMS0xLjQtLjEyNWEzLjI5NiAzLjI5NiAwIDAgMC0xLjA1IDBjLS4zNS4xMTMtLjI4Ny4yMTMtLjQ4Ny42MTNhNy41NzcgNy41NzcgMCAwIDEtMS43NjMgMi4xNWMtMS40NjIgMS4yNS0zLjQ1IDEuMzM3LTUuMTYyIDIuMDg3LjQ1LTIuOTYyIDIuNzI1LTQuNDM3IDUuNDc1LTUtLjk3NSAwLTIuNjc1LS44NzUtMy41MTMtLjQ2Mi0xLjQ4Ny42MzctMy43NSAxLjUtNC4yMTIgMy4yNS0uMjM4IDEuMDYyLS4xODggMi42MzctMS41MzggMi45NjItMS4zNS4zMjUtMS43MjUtLjk2Mi0xLjQtMS45NzUtLjg3NS40NS0yLjA1LjA4OC0xLjg2Mi0xLjA1LjE4Ny0xLjEzNyAxLjUyNS0xLjI1IDIuMzg3LTEuMzYyIDIuMjEzLS4zNSAzLjktMS42MjUgNS45ODgtMi4yODhhMjUuODQ1IDI1Ljg0NSAwIDAgMC0yLjUtMS4wMjUgNi44MzcgNi44MzcgMCAwIDAtMi42LjQ4OGMtLjkyLjExNC0xLjgyOC4zMS0yLjcxMy41ODctLjY0LjM0LTEuMTkuODI4LTEuNiAxLjQyNS0uOTg3IDEuMTYzLTIuMiAyLjUtMy45IDIuMzc1LTIuMTUtLjItMS45MTItMi42NS0uMzI1LTMuNDg3LTEuMDI1IDAtMi41LS42MzgtMi40LTEuODc1LjA4OC0xLjU1IDEuOTYzLTEuNzM4IDMuMTI1LTEuNDI1IDEuMDk3LjQxOSAyLjE2Ni45MDcgMy4yIDEuNDYyIDEuOTM4Ljc4OCAzLjc1IDAgNS43NjMtLjJhMzcuOTk0IDM3Ljk5NCAwIDAgMS00LjY1LTIuNjc1IDIuMTg3IDIuMTg3IDAgMCAwLTEuMzc1LS41NWgtMS4yNWEyNy42NzEgMjcuNjcxIDAgMCAwLTMuMzc1LjFjLS43NzUgMC0xLjMyNS43MzgtMS44MzggMS4yNWE2LjEzOCA2LjEzOCAwIDAgMS0yLjUgMS43MTMgMS45ODcgMS45ODcgMCAwIDEtMi41LS42MjVBMi4wNzUgMi4wNzUgMCAwIDEgNy43MTMgMjIuNGMtLjk3NS0uMzI1LTIuMjg4LTEuMTEzLTEuNDI1LTIuMyAxLjAxMi0xLjM4OCAyLjg3NS0uNjUgMy45MzcuMTVhNS44NzUgNS44NzUgMCAwIDAgMi45MzggMS42YzEuNDgyLjA4NyAyLjk2OC4wODcgNC40NSAwYTIzLjc0IDIzLjc0IDAgMCAxLTIuMDM4LTIuMDEzIDUuNzg3IDUuNzg3IDAgMCAwLS44NjItLjk2MmMtLjg1Mi0uMzgtMS43NTItLjY0MS0yLjY3NS0uNzc1YTE0LjUyMiAxNC41MjIgMCAwIDAtMi43NS0uNzc1IDUuNjExIDUuNjExIDAgMCAwLTIuNjg4LjYyNSA2LjI1MSA2LjI1MSAwIDAgMS0zLjEzNy41MjUgMS45NSAxLjk1IDAgMCAxLTEuNjc1LTIuMDYzYy4xMjUtMS4wMzcuOTg3LTEuMzg3IDEuODc1LTEuNTUtMi4wMjUtMS44ODcuNzc1LTMuNjg3IDIuNS0yLjAxMiAxLjAyNSAxLjAxMiAxLjYzNyAyLjkxMiAyLjkxMiAzLjQyNSAxLjYxMy42NSAzLjM3NS44ODcgNSAxLjYzNy0uOTM3LTEuMjUtMS44NS0yLjUtMi43MjUtMy43NWE2Ljg3NSA2Ljg3NSAwIDAgMC0yLjc3NS0yLjk3NWMtMS40ODctLjY3NS0zLjQ1LTEuNDg3LTMuNzUtMy4zNS0uMzUtMi4yODcgMi4yMzgtMS45IDMuNDUtLjk1YTIuMTYzIDIuMTYzIDAgMCAxIDEuNC0yLjVjMS4yNS0uNDg3IDIuMDEzLjQ2MyAyLjE3NSAxLjY3NS4wMjUgMS40MzgtLjYgMi44MjUtLjgyNSA0LjMyNS0uMjYyIDIuMjEzIDIuMTUgNC44NzUgMy4zNjMgNi42IDAtMS44NS43LTQuMDYyLS4yNjMtNS43ODctLjYyNS0xLjQyNS0yLjYxMi0zLjgyNS0xLjI1LTUuNDI1IDEtMS4xMzggMi4yMzguMTI1IDIuNTc1IDEuMTVhMS40NjIgMS40NjIgMCAwIDEgMi41LS4yNjNjMS4yNSAxLjcyNS0uNzUgMy4yMzgtMS42NjIgNC41MTMtMS4xIDEuNTEyLS45IDIuOTUtMS4wMzggNC43MzdhNi41OTcgNi41OTcgMCAwIDAtLjE2MiAyLjAyNWMuMTM3LjQxMy44MTIuODg4IDEuMTEyIDEuMjVhMjYuOTMgMjYuOTMgMCAwIDAgMi41NjMgMi4zNjNjLS4xLTIuMS4yMTItNC4yNzUtLjUxMy02LjI1LS40MjUtMS4xNS0xLjQtMy4xNS0uNS00LjI4OC45LTEuMTM3IDEuOS0uMTM3IDIuMjUuODEzYTIuMDI1IDIuMDI1IDAgMCAxIDIuNS0uNjUgMS45NSAxLjk1IDAgMCAxIC40MjUgMi41Yy0uODUgMS44MTItMy4yODcgMi43NjItMy4yODcgNC44MjUtLjEyNS45NS0uMDYzIDEuOTg3LS4xIDIuOTVhMi4wMjMgMi4wMjMgMCAwIDAgMCAuNjc1Yy4xMzcuMjc1Ljg2Mi42MTIgMS4xMTIuNzc1YTM1LjM3NyAzNS4zNzcgMCAwIDAgNSAyLjYzN2MtLjI4Ny0xLjI1LS4zMTItMi40MTItLjUxMi0zLjc1YTUuMzM4IDUuMzM4IDAgMCAwLTEuMzg4LTIuODEyYy0uNzM3LS45ODgtMS41LTIuNjUtLjM4Ny0zLjY4OC44NzUtLjgyNSAyLjAyNS0uMDYyIDIuMzUuODg4IDEuMDUtMS42IDMuNjYyLTEuNDM4IDMuNzUuNzM3LjA4NyAxLjY1LTEuMzUgMi43MjUtMi41IDMuNjI1LS4yMzMuMTUtLjQxOS4zNjMtLjUzOC42MTNhMy4wMzMgMy4wMzMgMCAwIDAtLjE4Ny43MjVjLS4wNTcuODM2LS4wMTEgMS42NzUuMTM3IDIuNSAwIC41MTIgMCAxLjI1LjQxMyAxLjUxMi41MjIuMjggMS4wODIuNDgyIDEuNjYyLjZhMjAuMTMgMjAuMTMgMCAwIDAgNC4xODggMS4wMzggNi4wNzUgNi4wNzUgMCAwIDEtMi4xODgtNC4yIDkuMSA5LjEgMCAwIDEgLjgtNC41MTNjLjgyNSAxLjI1IDIuMDEzIDIuMzUgMi43NjMgMy42NzVhNS43NjMgNS43NjMgMCAwIDEgLjEgNS4yNWMuMTY2LjAxMy4zMzMuMDEzLjUgMFonXG4gICAgICAgICAgZmlsbD0nI0RGQUUwMCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdNMTkuNTUgMTUuNzg3czMuMjc1LTIuODUgMi41LTMuNjM3Yy0uNzc1LS43ODgtMi4xMTIuOTEyLTIuMTEyLjkxMnMtLjYzOC0xLjg1LTEuNDYzLTEuMjVjLS44MjUuNiAxLjA3NSAzLjk3NSAxLjA3NSAzLjk3NVpNMTUuMTg4IDEwLjc4OHMyLjk3NS0yLjkxMyAxLjk2Mi0zLjQ3NWMtMS4wMTItLjU2My0xLjc1IDEuMjUtMS43NSAxLjI1cy0uOTc1LTIuNS0xLjc4Ny0xLjc4OGMtLjgxMy43MTMgMS41NzUgNC4wMTMgMS41NzUgNC4wMTNaTTkuNjYyIDEwLjQzN3MxLjk2My00LjU4Ny40ODgtNC44MzctMS40IDIuNi0xLjQgMi42LTIuOTEzLTEuOTUtMy4xMTMtLjdjLS4yMzcgMS41MjUgNC4wMjUgMi45MzcgNC4wMjUgMi45MzdaTTcuMyAxNi41MTNzLTEuOC0zLjYyNS0yLjktMy4yYy0xLjEuNDI1LjQyNSAyLjEuNDI1IDIuMXMtMi4wODguMjc1LTEuOTYzIDEuNTEyYy4xMjUgMS4yMzggNC40MzgtLjQxMiA0LjQzOC0uNDEyWk0xMS42NjIgMjIuNTc1UzguMzUgMTkuNjYzIDcuNSAyMC40MjVjLS44NS43NjMgMi4wNjIgMi4wNzUgMi4wNjIgMi4wNzVzLTMuMSAxLjQ3NS0yLjA2MiAyLjJjMS4yNS44ODggNC4xNjItMi4xMjUgNC4xNjItMi4xMjVaTTE4LjU4OCAyNy4zNzVzLTQuNjM4LTIuNjM4LTUuMzYzLTEuNTg4Yy0uNzI1IDEuMDUgMi43NjMgMS44MjUgMi43NjMgMS44MjVzLTIuODI1IDEuOTM4LTEuNTEzIDIuNjM4YzEuMzEzLjcgNC4xMTMtMi44NzUgNC4xMTMtMi44NzVaTTI1Ljg1IDIwczMuNzUtMi41IDIuMjg3LTMuNTEyYy0xLjExMi0uNzYzLTIuNSAxLjA4Ny0yLjUgMS4wODdzLS44MTItMi4xLTEuNzEyLTEuNGMtLjkuNyAxLjkyNSAzLjgyNSAxLjkyNSAzLjgyNVpNMjMuOTYzIDMwLjE3NXMtLjQzOCAyLjg1LTEuMjUgMy4xNWMtLjgxMy4zLS4yMTMtMi4wNzUtLjIxMy0yLjA3NXMtMi4wMjUuOTI1LTEuOTI1IDBjLjEtLjkyNSAzLjM4OC0xLjA3NSAzLjM4OC0xLjA3NVonXG4gICAgICAgICAgZmlsbD0nI0Y3RDQ3RCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdNMzMuMjg3IDI2Ljk1YTQuODg3IDQuODg3IDAgMCAwIC4xMjUtMy4zNSA2LjM2MiA2LjM2MiAwIDAgMC0xLjg4Ny0zLjA1Yy0xLjA2MyA0LjUzNyAxLjc2MiA2LjQgMS43NjIgNi40Wk0zMi43NSAyOS4xNWMtLjYyMi44MDQtMS4zNiAxLjUxMS0yLjE4OCAyLjEtLjg3NC41NTUtMS44MjYuOTc2LTIuODI1IDEuMjVhNi43MTMgNi43MTMgMCAwIDEgMi4xMTMtMi4xMzcgMTEuNTg4IDExLjU4OCAwIDAgMSAyLjktMS4yMTNaJ1xuICAgICAgICAgIGZpbGw9JyNEQ0IzQjQnXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5jb25zdCB0cmFuc2xhdGVDb25maWcgPSAoYXBwQ29uZmlnLCBsb2NhbGUpID0+IHtcbiAgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSBkZWZhdWx0TG9jYWxlKSB7XG4gICAgcmV0dXJuIGFwcENvbmZpZztcbiAgfVxuICAvLyBSZXBsYWNlIGNvbmZpZyB3aXRoIGxhbmdcbiAgY29uc3QgY29uZmlnTGFuZyA9IGFwcENvbmZpZy5sYW5nW2xvY2FsZV07XG4gIGlmIChjb25maWdMYW5nID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbG9jYWxlOiAnLCBsb2NhbGUpO1xuICB9XG4gIHJldHVybiB7IC4uLmFwcENvbmZpZywgLi4uY29uZmlnTGFuZyB9O1xufTtcblxuY29uc3QgU2hvd0ludml0ZSA9ICh7IGN1cnJlbnRVcmwsIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsIGd1ZXN0IH0pID0+IHtcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9uKGd1ZXN0LmxvY2FsZSk7XG5cbiAgLy8gSW5pdGlhdGUgY29uZmlnIHZhcmlhYmxlc1xuICBjb25zdCB7XG4gICAgbG9nbyxcbiAgICBvZ1RhZ3MsXG4gICAgY291cGxlSW5mbyxcbiAgICB2ZW51ZSxcbiAgICB3ZWRkaW5nRGF5LFxuICAgIHdlZGRpbmdEYXRlLFxuICAgIHdlZGRpbmdUaW1lLFxuICAgIGNhbGVuZGFySW5mbyxcbiAgfSA9IHRyYW5zbGF0ZUNvbmZpZyhhcHBDb25maWcsIGd1ZXN0LmxvY2FsZSk7XG4gIGNvbnN0IHsgYnJpZGVOYW1lLCBncm9vbU5hbWUsIGhhc2h0YWcsIGNvdXBsZU5hbWVGb3JtYXQgfSA9IGNvdXBsZUluZm87XG5cbiAgY29uc3QgY291cGxlTmFtZVN0ciA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJ1xuICAgICAgPyBgJHtncm9vbU5hbWV9ICYgJHticmlkZU5hbWV9YFxuICAgICAgOiBgJHticmlkZU5hbWV9ICYgJHtncm9vbU5hbWV9YDtcbiAgY29uc3QgY291cGxlTmFtZSA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJyA/IChcbiAgICAgIDw+XG4gICAgICAgIHticmlkZU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7Z3Jvb21OYW1lfVxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIDw+XG4gICAgICAgIHtncm9vbU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7YnJpZGVOYW1lfVxuICAgICAgPC8+XG4gICAgKTtcblxuICAvLyBWZW51ZSBpbmZvXG4gIGNvbnN0IHZlbnVlQnJpZWYgPSBgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWA7XG4gIGNvbnN0IHdlZGRpbmdEYXRlQnJpZWYgPSBgJHt3ZWRkaW5nRGF5fSwgJHt3ZWRkaW5nRGF0ZX1gO1xuXG4gIC8vIEV2ZW50IGluZm9cbiAgY29uc3QgZXZlbnRUaXRsZSA9IGAke2NvdXBsZU5hbWVTdHJ9J3MgV2VkZGluZ2A7XG4gIGxldCBldmVudERlc2NyaXB0aW9uID0gYCR7d2VkZGluZ0RhdGVCcmllZn0gYXQgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fWA7XG4gIGlmIChndWVzdC5uYW1lKSB7XG4gICAgZXZlbnREZXNjcmlwdGlvbiA9IGBEZWFyICR7Z3Vlc3QubmFtZX0sIHlvdSBhcmUgY29yZGlhbGx5IGludml0ZWQgdG8gb3VyIHdlZGRpbmcgb24gJHt3ZWRkaW5nRGF0ZX0gYXQgJHt2ZW51ZS5uYW1lfS4gTG9va2luZyBmb3J3YXJkIHRvIHNlZWluZyB5b3UhYDtcbiAgfVxuXG4gIC8vIENhbGVuZGFyIHBheWxvYWRcbiAgY29uc3QgY2FsZW5kYXJFdmVudCA9IHtcbiAgICB0aXRsZTogZXZlbnRUaXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZXZlbnREZXNjcmlwdGlvbixcbiAgICBsb2NhdGlvbjogYCR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gLFxuICAgIHN0YXJ0VGltZTogY2FsZW5kYXJJbmZvLnRpbWVTdGFydElTTyxcbiAgICBlbmRUaW1lOiBjYWxlbmRhckluZm8udGltZUVuZElTTyxcbiAgfTtcblxuICBjb25zdCBldmVudFNjaGVkdWxlID0gW1xuICAgIHtcbiAgICAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgICAgZXZlbnQ6ICdDaHVyY2gnLFxuICAgICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgICB0aW1lOiAnMTJwbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAgIGV2ZW50OiAnUmVjZXB0aW9uJyxcbiAgICAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgICAgdGltZTogJzJwbScsXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAvLyAgIGV2ZW50OiAnRW5nYWdlbWVudCcsXG4gICAgLy8gICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAvLyAgIHRpbWU6ICcycG0nLFxuICAgIC8vIH0sXG4gIF07XG5cbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgfSwgMTAwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYuY3VycmVudDtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRQb3NpdGlvbiA8IHdpbmRvd0hlaWdodCAqIDAuOSkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtZWxlbWVudCcpOyAvLyBBZGQgdGhlIENTUyBjbGFzcyB3aGVuIHRoZSBlbGVtZW50IGlzIDc1JSB2aXNpYmxlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZC1lbGVtZW50Jyk7IC8vIFJlbW92ZSB0aGUgQ1NTIGNsYXNzIGlmIG5vdCB2aXNpYmxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBSdW4gdGhpcyBlZmZlY3Qgb25seSBvbmNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYS5yZWFjdC1hZGQtdG8tY2FsZW5kYXJfX2J1dHRvbiBzcGFuIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZFxuICAgICAgICB7Li4ub2dUYWdzfVxuICAgICAgICB0aXRsZT17ZXZlbnRUaXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2V2ZW50RGVzY3JpcHRpb259XG4gICAgICAgIGd1ZXN0TmFtZT17Z3Vlc3QubmFtZX1cbiAgICAgICAgdXJsPXtjdXJyZW50VXJsfVxuICAgICAgICBkYXRlPXt3ZWRkaW5nRGF0ZUJyaWVmfVxuICAgICAgICBtb2RpZmllZFRpbWU9e2d1ZXN0TGlzdExhc3RVcGRhdGVkQXR9XG4gICAgICAgIHZlbnVlPXt2ZW51ZUJyaWVmfVxuICAgICAgICBsb2dvPXtyZXNvbHZlUGF0aChvZ1RhZ3MubG9nbyl9XG4gICAgICAgIGF1dGhvcj17cmVzb2x2ZVBhdGgoJy8nKX1cbiAgICAgIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hlYWRlcl9hcmVhJz5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2hlYWRlci1jb250YWluZXInPlxuICAgICAgICAgIDxIZWFkZXJMb2dvIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoZWFkZXItbG9nby10ZXh0Jz5UaGUgQWtpbmxhZ3VuJ3MgUGFydHk8L3NwYW4+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPSdob21lJyBjbGFzc05hbWU9J2hlYWRlcl9zbGlkZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay1saXN0IGRyYWdnYWJsZSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stdHJhY2snIHN0eWxlPXt7IG9wYWNpdHk6IDEgfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZ19jb3ZlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvcGljICg4KS5qcGcnXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGFsdD0nYmFja2dyb3VuZCBpbWFnZSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgY29udGVudC1vdmVybGF5Jz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMjQnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX2NvbnRlbnQgdGV4dC1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDYwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfc3ViX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC4ycycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3NpdGVJbnRybycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuN3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC43cycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdXBsZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNodGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5uYW1lfSwge3ZlbnVlLmNpdHl9LCB7dmVudWUuY291bnRyeX0uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29taW5nX3Nvb24nIGNsYXNzTmFtZT0nY29taW5nX3Nvb25fYXJlYSBwdC0yMCBwYi03MCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8xJyBzdHlsZT17eyB6SW5kZXg6IDEgfX0+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy00Jz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSBwdC01MCB3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3QoJ2V2ZW50RGF0ZScpfTo8L2gzPlxuICAgICAgICAgICAgICAgIDxwPnt3ZWRkaW5nRGF0ZUJyaWVmfTwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEFkZFRvQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e2NhbGVuZGFyRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkxhYmVsPXt0KCdidG5BZGRUb015Q2FsZW5kYXInKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy9pbWFnZXMvc2VjdGlvbl9zaGFwZS5wbmcnIGFsdD0nU2hhcGUnIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTgnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjZzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjZzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fY291bnQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgcHQtMjAnPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzYwLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTM4LFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVfY291bnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMwJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb3VudF9jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMSwgcGFkZGluZ1RvcDogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZlbnVlLm1hcFVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvYmV2ZW50LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdiZXZlbnQgY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3ZlbnVlLm1hcFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNzV2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmV5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLmFkZHJlc3NMaW5lMX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMic+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTIucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9J2NvbnRhY3QnIGNsYXNzTmFtZT0nY29udGFjdF9hcmVhJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjb250YWN0X3dyYXBwZXIgd293IGZhZGVJblVwQmlnJ1xuICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDMwLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNHMnLFxuICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluVXAnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudFJlZn0gY2xhc3NOYW1lPSdjb250YWluZXItZXZlbnRMaW5ldXAnPlxuICAgICAgICAgICAgICB7ZXZlbnRTY2hlZHVsZS5tYXAoKGV2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGltZSwgZGF0ZSwgZXZlbnQsIGljb24gfSA9IGV2O1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnRMaW5ldXAnIGtleT17ZXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGZvcm0gKi99XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgdGV4dC1jZW50ZXIgcGItMzAnPlxuICAgICAgICAgICAgICAgICAge2d1ZXN0Lm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25HcmVldGluZycpfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJyB9fT57Z3Vlc3QubmFtZX0sPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhZGVJbic+XG4gICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbG9ycyBvZiB0aGUgZGF5XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgZ2FwOiAnNTBweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUZWFsIEdyZWVuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzgwcHgnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDgwODAnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEdvbGRcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Q1OWE1NycsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvblxuICAgICAgICByZWY9e2VsZW1lbnRSZWZ9XG4gICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgY2xhc3NOYW1lPSdsb3ZlLXRpdGxlLWNvbnRhaW5lciBmYWRlSW5VcEJpZyBmYWRlSW4nXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TG92ZVRpdGxlSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvdmUtdGl0bGUnPlxuICAgICAgICAgIE15IGhlYXJ0IGlzIHlvdXJzIHRvIGhvbGQgYW5kIGNoZXJpc2ggZm9yIHRoZSByZXN0IG9mIG91ciBkYXlzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxhcnRpY2xlXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J3N0b3JpZXMtY29udGFpbmVyIGZhZGVJblVwQmlnJ1xuICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICA+XG4gICAgICAgIDxTdG9yaWVzIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZC1jb250YWluZXInPlxuICAgICAgICA8UGljdHVyZXNHcmlkIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgJz5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDVcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6ICcjRDNEM0QzJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgI0RXZWRkaW5nXG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaG93SW52aXRlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcbiAgY29uc3QgbG9jYWxlUGFyYW1zID0gY3R4LnF1ZXJ5LmxhbmcgfHwgZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgZW1wdHlHdWVzdFBhcmFtcyA9IHtcbiAgICBndWVzdDoge1xuICAgICAgZ3Vlc3RJZDogJycsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGdyZWV0aW5nOiAnJyxcbiAgICAgIGxvY2FsZTogbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgY3VycmVudFVybCA9IHJlc29sdmVQYXRoKGN0eC5yZXEudXJsKTtcbiAgY29uc3QgZ3Vlc3RJZCA9IGN0eC5xdWVyeS51O1xuICBpZiAoIWd1ZXN0SWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGd1ZXN0RGF0YSA9IGd1ZXN0TGlzdC5kYXRhO1xuICBjb25zdCBndWVzdExpc3RMYXN0VXBkYXRlZEF0ID0gZ3Vlc3RMaXN0Lm1ldGEubGFzdFVwZGF0ZWRBdDtcbiAgY29uc3QgeyBuYW1lLCBncmVldGluZywgbG9jYWxlIH0gPVxuICAgIGd1ZXN0RGF0YS5maWx0ZXIoKGd1ZXN0KSA9PiBndWVzdC5ndWVzdElkID09PSBndWVzdElkKVswXSB8fCB7fTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVcmwsXG4gICAgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCxcbiAgICBndWVzdDoge1xuICAgICAgbmFtZSxcbiAgICAgIGdyZWV0aW5nLFxuICAgICAgZ3Vlc3RJZCxcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0ludml0ZTtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\USER\\\\Documents\\\\adewale-wedding-invite\\\\pages\\\\index.jsx */"), __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, ogTags, {
    title: eventTitle,
    description: eventDescription,
    guestName: guest.name,
    url: currentUrl,
    date: weddingDateBrief,
    modifiedTime: guestListLastUpdatedAt,
    venue: venueBrief,
    logo: Object(_src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_6__["default"])(ogTags.logo),
    author: Object(_src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_6__["default"])('/'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }
  })), __jsx("section", {
    className: "jsx-1703421768" + " " + 'header_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: "jsx-1703421768" + " " + 'header-container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }
  }, __jsx(HeaderLogo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "jsx-1703421768" + " " + 'header-logo-text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  }, "The Akinlagun's Party")), __jsx("div", {
    id: "home",
    className: "jsx-1703421768" + " " + 'header_slider',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'slick-list draggable',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      opacity: 1
    },
    className: "jsx-1703421768" + " " + 'slick-track',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'bg_cover d-flex align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "assets/images/pic (8).jpg",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    alt: "background image",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1703421768" + " " + ' content-overlay',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-24',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      paddingTop: 0
    },
    className: "jsx-1703421768" + " " + 'slider_content text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 25
    }
  }), __jsx("h5", {
    "data-animation": "fadeInUp",
    "data-delay": "0.2s",
    style: {
      animationDelay: '0.2s'
    },
    className: "jsx-1703421768" + " " + 'slider_sub_title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 25
    }
  }, t('siteIntro')), __jsx("h2", {
    "data-animation": "fadeInUp",
    "data-delay": "0.7s",
    style: {
      animationDelay: '0.7s'
    },
    className: "jsx-1703421768" + " " + 'slider_title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 25
    }
  }, coupleName), __jsx("h5", {
    "data-animation": "fadeInUp",
    "data-delay": "1s",
    style: {
      animationDelay: '1s'
    },
    className: "jsx-1703421768" + " " + 'location',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 25
    }
  }, hashtag), __jsx("span", {
    "data-animation": "fadeInUp",
    "data-delay": "1s",
    style: {
      animationDelay: '1s'
    },
    className: "jsx-1703421768" + " " + 'location',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 25
    }
  }, venue.name, ", ", venue.city, ", ", venue.country, ".")))))))))), __jsx("section", {
    id: "coming_soon",
    className: "jsx-1703421768" + " " + 'coming_soon_area pt-20 pb-70',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      zIndex: 1
    },
    className: "jsx-1703421768" + " " + 'coming_soon_shape_1',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 17
    }
  }, t('eventDate'), ":"), __jsx("p", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 17
    }
  }, weddingDateBrief), __jsx("div", {
    style: {
      paddingTop: '0.2rem',
      paddingBottom: '0.2rem'
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 17
    }
  }, __jsx(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    event: calendarEvent,
    buttonLabel: t('btnAddToMyCalendar'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 19
    }
  })), __jsx("img", {
    src: "assets/images/section_shape.png",
    alt: "Shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-8',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_count d-flex justify-content-end pt-20',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 19
    }
  }, __jsx("div", {
    style: {
      zIndex: 1,
      paddingTop: 20
    },
    className: "jsx-1703421768" + " " + 'count_content',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: venue.mapUrl,
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      borderRadius: 5
    },
    src: "assets/images/bevent.png",
    alt: "bevent center",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 23
    }
  }, venue.addressLine1)))))))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_shape_2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-2.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 11
    }
  }))), __jsx("section", {
    id: "contact",
    className: "jsx-1703421768" + " " + 'contact_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 11
    }
  }, __jsx("div", {
    ref: elementRef,
    className: "jsx-1703421768" + " " + 'container-eventLineup',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 13
    }
  }, eventSchedule.map((ev, index) => {
    const {
      time,
      date,
      event,
      icon
    } = ev;
    return __jsx("div", {
      key: event,
      className: "jsx-1703421768" + " " + 'eventLineup',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 19
      }
    }, icon, __jsx("span", {
      style: {
        fontSize: '24px',
        color: 'black',
        fontWeight: 700
      },
      className: "jsx-1703421768",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 21
      }
    }, event), __jsx("span", {
      style: {
        fontWeight: 600,
        fontSize: '18px',
        color: 'black'
      },
      className: "jsx-1703421768",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 21
      }
    }, date), __jsx("span", {
      style: {
        fontWeight: 600,
        fontSize: '18px',
        color: 'black'
      },
      className: "jsx-1703421768",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443,
        columnNumber: 21
      }
    }, time));
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-9',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'section_title text-center pb-30',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 21
    }
  }, t('invitationGreeting'), __jsx("p", {
    style: {
      fontSize: '1.5rem'
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 23
    }
  }, guest.name, ",")))))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'fadeIn',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 11
    }
  }, __jsx("h4", {
    style: {
      textAlign: 'center',
      marginBottom: '5px'
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 13
    }
  }, "Colors of the day"), __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '50px'
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      color: 'black',
      textAlign: 'center'
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 17
    }
  }, "Teal Green"), __jsx("div", {
    style: {
      height: '30px',
      width: '80px',
      borderRadius: '10px',
      color: 'black',
      backgroundColor: '#008080'
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      color: 'black',
      textAlign: 'center'
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 17
    }
  }, "Gold"), __jsx("div", {
    style: {
      height: '30px',
      width: '80px',
      borderRadius: '10px',
      color: 'black',
      backgroundColor: '#d59a57'
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 17
    }
  })))))), __jsx("section", {
    ref: elementRef,
    "data-animation": "fadeInUp",
    "data-delay": "0.7s",
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.4s",
    className: "jsx-1703421768" + " " + 'love-title-container fadeInUpBig fadeIn',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 9
    }
  }, __jsx(LoveTitleIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'love-title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 9
    }
  }, "My heart is yours to hold and cherish for the rest of our days.")), __jsx("article", {
    ref: elementRef,
    "data-animation": "fadeInUp",
    "data-delay": "0.7s",
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.4s",
    className: "jsx-1703421768" + " " + 'stories-container fadeInUpBig',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 7
    }
  }, __jsx(_stories__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 9
    }
  })), __jsx("article", {
    className: "jsx-1703421768" + " " + 'picture-grid-container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 7
    }
  }, __jsx(_pictureGrid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 9
    }
  })), __jsx("footer", {
    id: "footer",
    className: "jsx-1703421768" + " " + 'footer_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_shape_1',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_widget pt-50 pb-10 text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_logo',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_title ',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 13
    }
  }, __jsx("h3", {
    style: {
      color: 'white'
    },
    className: "jsx-1703421768" + " " + 'title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 15
    }
  }, coupleName)))), __jsx("h5", {
    style: {
      color: '#D3D3D3',
      textAlign: 'center',
      marginBottom: '40px'
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 9
    }
  }, "#DWedding")), __jsx(_collect_guest_attendance__WEBPACK_IMPORTED_MODULE_13__["default"], {
    showModal: showModal,
    setShowModal: setShowModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 7
    }
  }));
};
ShowInvite.getInitialProps = ctx => {
  const localeParams = ctx.query.lang || _src_i18n__WEBPACK_IMPORTED_MODULE_8__["defaultLocale"];
  const emptyGuestParams = {
    guest: {
      guestId: '',
      name: '',
      greeting: '',
      locale: localeParams
    }
  };
  const currentUrl = Object(_src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_6__["default"])(ctx.req.url);
  const guestId = ctx.query.u;
  if (!guestId) {
    return _objectSpread({
      currentUrl
    }, emptyGuestParams);
  }
  const guestData = _guest_list_json__WEBPACK_IMPORTED_MODULE_9__.data;
  const guestListLastUpdatedAt = _guest_list_json__WEBPACK_IMPORTED_MODULE_9__.meta.lastUpdatedAt;
  const {
    name,
    greeting,
    locale
  } = guestData.filter(guest => guest.guestId === guestId)[0] || {};
  if (!name) {
    return _objectSpread({
      currentUrl
    }, emptyGuestParams);
  }
  return {
    currentUrl,
    guestListLastUpdatedAt,
    guest: {
      name,
      greeting,
      guestId,
      locale: locale || localeParams
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (ShowInvite);

/***/ }),

/***/ "./pages/pictureGrid.jsx":
/*!*******************************!*\
  !*** ./pages/pictureGrid.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_blurhash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-blurhash */ "react-blurhash");
/* harmony import */ var react_blurhash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_blurhash__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\pictureGrid.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PicturesGrid = () => {
  const pictures = ['assets/images/couple (1).jpg',
  // 'assets/images/couple (2).jpg',
  // 'assets/images/couple (3).jpg',
  'assets/images/couple (4).jpg',
  // 'assets/images/couple (5).jpg',
  'assets/images/couple (6).jpg', 'assets/images/couple (7).jpg', 'assets/images/couple (8).jpg', 'assets/images/couple (9).jpg',
  // 'assets/images/couple (10).jpg',
  // 'assets/images/couple (11).jpg',
  // 'assets/images/couple (12).jpg',
  'assets/images/couple (13).jpg'];
  const {
    0: selectedPicture,
    1: setSelectedPicture
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: imageLoaded,
    1: setImageLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: loadedImagesCount,
    1: setLoadedImagesCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const handleSelectPicture = picture => {
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, pictures.map((picture, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    title: "view image",
    "data-toggle": "modal",
    "data-target": "#myModal",
    onClick: () => handleSelectPicture(picture),
    className: "picture",
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: picture,
    className: "grid-img",
    alt: `Picture ${index + 1}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }))))), selectedPicture && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "modal fade",
    id: "myModal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-dialog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "modal-body",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (PicturesGrid);

/***/ }),

/***/ "./pages/stories.jsx":
/*!***************************!*\
  !*** ./pages/stories.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/swiper-bundle.min.css */ "./node_modules/swiper/swiper-bundle.min.css");
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/swiper/swiper-bundle.css */ "./node_modules/swiper/swiper-bundle.css");
/* harmony import */ var _node_modules_swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\stories.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

const content = [{
  title: 'Bride',
  desc: `I was at  a burial of one of the elders in my church October 2022 and connected with a lot of former church members and friends. A gentle man walked up to me to say I looked familiar and actually he looked familiar too. We exchanged contacts after the familiarization. I Did my findings from my mum and discovered our both families were close. We got talking literally every day and the rest  is history🥰.`,
  image: 'assets/images/bride.jpg'
}, {
  title: 'Groom',
  desc: `Our fathers enjoyed a close friendship until my father's passing. The two of us had never had any real connection until October 2022 when we coincidentally met at the burial of my mentor's father. I noticed her from a distance, her radiant smile caught my attention. I approached her and her mum re-introducing myself to both of them and we exchanged contact information. This marked the beginning of a heartwarming reunion. Our conversations since then have been nothing short of exhilarating and exciting,  which is the start of a journey to forever🥰.`,
  image: 'assets/images/groom.jpg'
}];
const Stories = () => {
  swiper__WEBPACK_IMPORTED_MODULE_4___default.a.use([swiper__WEBPACK_IMPORTED_MODULE_4__["Autoplay"]]);
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, content.map(item => {
    const {
      title,
      image,
      desc
    } = item;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__["SwiperSlide"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "bride-container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    }, __jsx("img", {
      style: {
        objectFit: 'cover',
        width: '100rem',
        height: '25rem',
        borderRadius: '10px'
      },
      src: image,
      alt: `${title} stories`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, __jsx("h2", {
      className: "groom-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 19
      }
    }, title), __jsx("article", {
      className: "groom-paragraph",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, desc)))));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Stories);

/***/ }),

/***/ "./src/components/Head.jsx":
/*!*********************************!*\
  !*** ./src/components/Head.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_resolvePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/resolvePath */ "./src/utils/resolvePath.js");
var _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\src\\components\\Head.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  description,
  url,
  logo,
  author,
  siteName,
  publishedTime,
  modifiedTime
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, title), __jsx("meta", {
    property: "og:type",
    content: "article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:title",
    content: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:description",
    content: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:site_name",
    content: siteName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:url",
    content: url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image",
    content: logo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), publishedTime && __jsx("meta", {
    property: "article:published_time",
    content: publishedTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "article:modified_time",
    content: modifiedTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "article:author",
    content: author,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "description",
    content: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "assets/images/favicon.png?123",
    type: "image/png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "assets/css/animate.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "assets/css/bootstrap.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "assets/css/default.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "assets/css/style.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "assets/js/vendor/jquery-1.12.4.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "assets/js/vendor/modernizr-3.7.1.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "assets/js/bootstrap.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "assets/js/jquery.easing.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./src/config/app.js":
/*!***************************!*\
  !*** ./src/config/app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const baseConfig = {
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
  }
};
const lang = {
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
  lang
}));

/***/ }),

/***/ "./src/i18n/index.js":
/*!***************************!*\
  !*** ./src/i18n/index.js ***!
  \***************************/
/*! exports provided: languageOptions, setLocale, t, Trans, defaultLocale, useTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageOptions", function() { return languageOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocale", function() { return setLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trans", function() { return Trans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocale", function() { return defaultLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTranslation", function() { return useTranslation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n-js */ "i18n-js");
/* harmony import */ var i18n_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(i18n_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang/en */ "./src/i18n/lang/en.json");
var _lang_en__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/en */ "./src/i18n/lang/en.json", 1);
/* harmony import */ var _lang_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang/id */ "./src/i18n/lang/id.json");
var _lang_id__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/id */ "./src/i18n/lang/id.json", 1);
var _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\src\\i18n\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



const supportedLanguages = [{
  code: "en",
  label: "English",
  translations: _lang_en__WEBPACK_IMPORTED_MODULE_2__
}, {
  code: "id",
  label: "Indonesia",
  translations: _lang_id__WEBPACK_IMPORTED_MODULE_3__
}];
i18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.defaultLocale = "en";
supportedLanguages.forEach(lang => {
  i18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.translations[lang.code] = lang.translations;
});
const languageOptions = supportedLanguages.map(lang => ({
  value: lang.code,
  label: lang.label
}));
const setLocale = locale => {
  i18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.locale = locale;
};
const t = (name, params = {}) => {
  return i18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.t(name, params);
};
const Trans = props => __jsx("span", {
  dangerouslySetInnerHTML: {
    __html: t(props.i18nKey, _objectSpread({}, props))
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 3
  }
});
const defaultLocale = i18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.defaultLocale;
const useTranslation = locale => {
  i18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.locale = locale;
  return i18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.t;
};

/***/ }),

/***/ "./src/i18n/lang/en.json":
/*!*******************************!*\
  !*** ./src/i18n/lang/en.json ***!
  \*******************************/
/*! exports provided: siteIntro, eventDate, invitationGreeting, invitationIntro, invitationContent, invitationContentTextAlign, invitationOutro, btnAddToMyCalendar, guestCheckin, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"siteIntro\":\"WE ARE GETTING MARRIED\",\"eventDate\":\"Event Date\",\"invitationGreeting\":\"Dear\",\"invitationIntro\":\"You Are Cordially Invited\",\"invitationContent\":\"Our joy will be more complete with your presence in our special day.\",\"invitationContentTextAlign\":\"left\",\"invitationOutro\":\"We are looking forward to seeing you.\",\"btnAddToMyCalendar\":\"Add to my calendar\",\"guestCheckin\":{\"pleaseScanInvitation\":\"Please scan your invitation..\"}}");

/***/ }),

/***/ "./src/i18n/lang/id.json":
/*!*******************************!*\
  !*** ./src/i18n/lang/id.json ***!
  \*******************************/
/*! exports provided: siteIntro, eventDate, invitationGreeting, invitationIntro, invitationContent, invitationContentTextAlign, invitationOutro, invitationClosing, btnAddToMyCalendar, guestCheckin, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"siteIntro\":\"UNDANGAN PERNIKAHAN\",\"eventDate\":\"Hari & Tanggal\",\"invitationGreeting\":\"Kepada Yang Terhormat\",\"invitationIntro\":\"﷽\",\"invitationContent\":\"Dengan memohon rahmat Allah SWT, kami mengundang Bapak, Ibu, Saudara/Saudari untuk menghadiri resepsi pernikahan putra-putri kami yang in-syaa-Allah akan diadakan di:\",\"invitationContentTextAlign\":\"center\",\"invitationOutro\":\"\",\"invitationClosing\":\"Kehadiran serta doa restu Bapak/Ibu/Saudara/i merupakan suatu kehormatan dan kebahagian bagi kami.<br/><br/>Wassalamu'alaikum Warahmatullahi Wabarakatuh.\",\"btnAddToMyCalendar\":\"Tambahkan ke kalender saya\",\"guestCheckin\":{\"pleaseScanInvitation\":\"Please scan your invitation..\"}}");

/***/ }),

/***/ "./src/utils/resolvePath.js":
/*!**********************************!*\
  !*** ./src/utils/resolvePath.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fallbackHost = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = ((path, headers) => {
  if (path.startsWith("http")) {
    return path;
  }

  // Use browser's `window` if headers is not provided
  if (!headers && false) {
    if (true) {
      throw new Error("could not resolve path without request headers: window is undefined");
    }
    const {
      protocol,
      host
    } = window.location;
    return `${protocol}//${host}${path}`;
  }
  const host = headers ? headers["x-now-deployment-url"] || headers["x-forwarded-host"] || headers.host : null;
  const scheme = headers && headers["x-forwarded-proto"] ? headers["x-forwarded-proto"] : "http";
  return host ? `${scheme}://${host}${path}` : `${fallbackHost}${path}`;
});

/***/ }),

/***/ "emailjs-com":
/*!******************************!*\
  !*** external "emailjs-com" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emailjs-com");

/***/ }),

/***/ "i18n-js":
/*!**************************!*\
  !*** external "i18n-js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18n-js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "qrcode.react":
/*!*******************************!*\
  !*** external "qrcode.react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qrcode.react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-add-to-calendar":
/*!****************************************!*\
  !*** external "react-add-to-calendar" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-add-to-calendar");

/***/ }),

/***/ "react-blurhash":
/*!*********************************!*\
  !*** external "react-blurhash" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-blurhash");

/***/ }),

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper/react");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29sbGVjdC1ndWVzdC1hdHRlbmRhbmNlLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGljdHVyZUdyaWQuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3N0b3JpZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9pMThuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXNvbHZlUGF0aC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbWFpbGpzLWNvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImkxOG4tanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxcmNvZGUucmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFkZC10by1jYWxlbmRhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJsdXJoYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2VldGFsZXJ0MlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlci9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbIkNvbGxlY3RHdWVzdEF0dGVuZGFuY2UiLCJzZXRTaG93TW9kYWwiLCJzaG93TW9kYWwiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaHR0cFN0YXR1cyIsInN0YXR1c0NvZGUiLCJTd2FsIiwiZmlyZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmQiLCJwcm9jZXNzIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiY2F0Y2giLCJlcnIiLCJfX2pzeCIsImNsYXNzTmFtZSIsInRhYkluZGV4Iiwicm9sZSIsInN0eWxlIiwiZGlzcGxheSIsImNvbG9yIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ0eXBlIiwib25DbGljayIsImZvbnRTaXplIiwib25TdWJtaXQiLCJodG1sRm9yIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwicm93cyIsIkxvdmVUaXRsZUljb24iLCJzcmMiLCJ3aWR0aCIsImFsdCIsIkV2ZW50RGF0ZUljb24iLCJmaWxsIiwieG1sbnMiLCJkIiwiSGVhZGVyTG9nbyIsImJhY2tmYWNlVmlzaWJpbGl0eSIsInRyYW5zZm9ybSIsInRyYW5zbGF0ZUNvbmZpZyIsImFwcENvbmZpZyIsImxvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjb25maWdMYW5nIiwibGFuZyIsInVuZGVmaW5lZCIsIkVycm9yIiwiX29iamVjdFNwcmVhZCIsIlNob3dJbnZpdGUiLCJjdXJyZW50VXJsIiwiZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCIsImd1ZXN0IiwidCIsInVzZVRyYW5zbGF0aW9uIiwibG9nbyIsIm9nVGFncyIsImNvdXBsZUluZm8iLCJ2ZW51ZSIsIndlZGRpbmdEYXkiLCJ3ZWRkaW5nRGF0ZSIsIndlZGRpbmdUaW1lIiwiY2FsZW5kYXJJbmZvIiwiYnJpZGVOYW1lIiwiZ3Jvb21OYW1lIiwiaGFzaHRhZyIsImNvdXBsZU5hbWVGb3JtYXQiLCJjb3VwbGVOYW1lU3RyIiwiY291cGxlTmFtZSIsIlJlYWN0IiwiRnJhZ21lbnQiLCJ2ZW51ZUJyaWVmIiwiY2l0eSIsImNvdW50cnkiLCJ3ZWRkaW5nRGF0ZUJyaWVmIiwiZXZlbnRUaXRsZSIsImV2ZW50RGVzY3JpcHRpb24iLCJjYWxlbmRhckV2ZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwic3RhcnRUaW1lIiwidGltZVN0YXJ0SVNPIiwiZW5kVGltZSIsInRpbWVFbmRJU08iLCJldmVudFNjaGVkdWxlIiwiaWNvbiIsImV2ZW50IiwiZGF0ZSIsInRpbWUiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJlbGVtZW50UmVmIiwidXNlUmVmIiwiaGFuZGxlU2Nyb2xsIiwiZWxlbWVudCIsImN1cnJlbnQiLCJlbGVtZW50UG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX0pTWFN0eWxlIiwiSGVhZCIsIl9leHRlbmRzIiwiZ3Vlc3ROYW1lIiwidXJsIiwibW9kaWZpZWRUaW1lIiwicmVzb2x2ZVBhdGgiLCJhdXRob3IiLCJvcGFjaXR5Iiwib2JqZWN0Rml0IiwicGFkZGluZ1RvcCIsIm1heEhlaWdodCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImhlYWRlckxvZ28iLCJhbmltYXRpb25EZWxheSIsInpJbmRleCIsInZpc2liaWxpdHkiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJwYWRkaW5nQm90dG9tIiwiQWRkVG9DYWxlbmRhciIsImJ1dHRvbkxhYmVsIiwibWFyZ2luUmlnaHQiLCJocmVmIiwibWFwVXJsIiwibWF4V2lkdGgiLCJvdmVyZmxvd1giLCJ0ZXh0T3ZlcmZsb3ciLCJhZGRyZXNzTGluZTEiLCJib3hTaGFkb3ciLCJyZWYiLCJtYXAiLCJldiIsImluZGV4Iiwia2V5IiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImdhcCIsIlN0b3JpZXMiLCJQaWN0dXJlc0dyaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJsb2NhbGVQYXJhbXMiLCJxdWVyeSIsImVtcHR5R3Vlc3RQYXJhbXMiLCJndWVzdElkIiwiZ3JlZXRpbmciLCJyZXEiLCJ1IiwiZ3Vlc3REYXRhIiwiZ3Vlc3RMaXN0IiwiZGF0YSIsIm1ldGEiLCJsYXN0VXBkYXRlZEF0IiwiZmlsdGVyIiwicGljdHVyZXMiLCJzZWxlY3RlZFBpY3R1cmUiLCJzZXRTZWxlY3RlZFBpY3R1cmUiLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwibG9hZGVkSW1hZ2VzQ291bnQiLCJzZXRMb2FkZWRJbWFnZXNDb3VudCIsImhhbmRsZVNlbGVjdFBpY3R1cmUiLCJwaWN0dXJlIiwiY29udGVudCIsImRlc2MiLCJpbWFnZSIsIlN3aXBlckNvcmUiLCJ1c2UiLCJBdXRvcGxheSIsIlN3aXBlciIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJtb2R1bGVzIiwiUGFnaW5hdGlvbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJpdGVtIiwiU3dpcGVyU2xpZGUiLCJzaXRlTmFtZSIsInB1Ymxpc2hlZFRpbWUiLCJwcm9wZXJ0eSIsInJlbCIsImJhc2VDb25maWciLCJzaG93QnVpbHRXaXRoSW5mbyIsInNob3dRckNvZGUiLCJmb290ZXJMb2dvIiwiZm9vdGVyTG9nb1R5cGUiLCJhZGRyZXNzTGluZTIiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJjb2RlIiwibGFiZWwiLCJ0cmFuc2xhdGlvbnMiLCJlbiIsIkkxOG4iLCJmb3JFYWNoIiwibGFuZ3VhZ2VPcHRpb25zIiwic2V0TG9jYWxlIiwicGFyYW1zIiwiVHJhbnMiLCJwcm9wcyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaTE4bktleSIsImZhbGxiYWNrSG9zdCIsInBhdGgiLCJoZWFkZXJzIiwic3RhcnRzV2l0aCIsInByb3RvY29sIiwiaG9zdCIsInNjaGVtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGd0M7QUFDVDtBQUNJO0FBQ25DLE1BQU1BLHNCQUFzQixHQUFHQSxDQUFDO0VBQUVDLFlBQVk7RUFBRUM7QUFBVSxDQUFDLEtBQUs7RUFDOUQsTUFBTTtJQUFB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Q0FDYixxRUFDRixDQUFDO0lBQ0g7SUFDQSxNQUFNO01BQUVrTCxRQUFRO01BQUVDO0lBQUssQ0FBQyxHQUFHM0gsTUFBTSxDQUFDdkIsUUFBUTtJQUMxQyxPQUFRLEdBQUVpSixRQUFTLEtBQUlDLElBQUssR0FBRUosSUFBSyxFQUFDO0VBQ3RDO0VBQ0EsTUFBTUksSUFBSSxHQUFHSCxPQUFPLEdBQ2hCQSxPQUFPLENBQUMsc0JBQXNCLENBQUMsSUFDL0JBLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUMzQkEsT0FBTyxDQUFDRyxJQUFJLEdBQ1osSUFBSTtFQUNSLE1BQU1DLE1BQU0sR0FDVkosT0FBTyxJQUFJQSxPQUFPLENBQUMsbUJBQW1CLENBQUMsR0FDbkNBLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxHQUM1QixNQUFNO0VBQ1osT0FBT0csSUFBSSxHQUFJLEdBQUVDLE1BQU8sTUFBS0QsSUFBSyxHQUFFSixJQUFLLEVBQUMsR0FBSSxHQUFFRCxZQUFhLEdBQUVDLElBQUssRUFBQztBQUN2RSxDQUFDLEU7Ozs7Ozs7Ozs7O0FDM0JELHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IHsgc2VuZCB9IGZyb20gJ2VtYWlsanMtY29tJztcclxuY29uc3QgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSA9ICh7IHNldFNob3dNb2RhbCwgc2hvd01vZGFsIH0pID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBodHRwU3RhdHVzKHN0YXR1c0NvZGUpIHtcclxuICAgIGlmIChzdGF0dXNDb2RlID49IDIwMCAmJiBzdGF0dXNDb2RlIDw9IDI5OSkge1xyXG4gICAgICBTd2FsLmZpcmUoJ1N1Y2Nlc3MhJywgJ1dlIGFwcHJlY2lhdGUgeW91ciByZXNwb25zZSEnLCAnc3VjY2VzcycpO1xyXG4gICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xyXG4gICAgICBzZXRNZXNzYWdlKCcnKTtcclxuICAgICAgc2V0RW1haWwoJycpO1xyXG4gICAgICBzZXROYW1lKCcnKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA+PSA0MDAgJiYgc3RhdHVzQ29kZSA8PSA0OTkpIHtcclxuICAgICAgU3dhbC5maXJlKCdFcnJvciEnLCAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4hJywgJ2Vycm9yJyk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPj0gNTAwKSB7XHJcbiAgICAgIFN3YWwuZmlyZSgnRXJyb3IhJywgJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluIScsICdlcnJvcicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICd1bmtub3duIHN0YXR1cyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIW1lc3NhZ2UpIHtcclxuICAgICAgU3dhbC5maXJlKCcnLCAnQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQnLCAnZXJyb3InKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGF3YWl0IHNlbmQoXHJcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VNQUlMSlNfU0VSVklDRV9JRCxcclxuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU1BSUxKU19URU1QTEFURV9JRCxcclxuICAgICAgeyBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9LFxyXG4gICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTUFJTEpTX1VTRVJfSURcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaHR0cFN0YXR1cyhyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgU3dhbC5maXJlKCdFcnJvciEnLCAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4hJywgJ2Vycm9yJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9J21vZGFsJ1xyXG4gICAgICB0YWJJbmRleD0nLTEnXHJcbiAgICAgIHJvbGU9J2RpYWxvZydcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBzaG93TW9kYWwgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtZGlhbG9nJyByb2xlPSdkb2N1bWVudCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQgIGdsYXNzbW9ycGhpc20nPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2xvc2UgZ3Vlc3QtbW9kYWwnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPSd0cnVlJz4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHknPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtX3RpdGxlIG1iLTQnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSW5mb3JtIHVzIG9mIHlvdXIgYXZhaWxhYmlsaXR5XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgbWItMyc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1sYWJlbCdcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFbWFpbDpcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPSdhdHRlbmRpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBXaWxsIHlvdSBiZSBhdHRlbmRpbmc/XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9JzQnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9J2F0dGVuZGluZydcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nZ3Vlc3QtZm9ybS1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gJ1N1Ym1pdHRpbmcuLi4nIDogJ1N1Ym1pdCd9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbGxlY3RHdWVzdEF0dGVuZGFuY2U7XHJcbiIsImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IFN0b3JpZXMgZnJvbSAnLi9zdG9yaWVzJztcbmltcG9ydCBQaWN0dXJlc0dyaWQgZnJvbSAnLi9waWN0dXJlR3JpZCc7XG5pbXBvcnQgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSBmcm9tICcuL2NvbGxlY3QtZ3Vlc3QtYXR0ZW5kYW5jZSc7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XG5cbmNvbnN0IExvdmVUaXRsZUljb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgc3JjPSdhc3NldHMvaW1hZ2VzL3dpbmUucG5nJ1xuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnODBweCcsXG4gICAgICB9fVxuICAgICAgYWx0PSd3aW5lIGlsbHVzdHJhdG9yJ1xuICAgIC8+XG4gICk7XG59O1xuY29uc3QgRXZlbnREYXRlSWNvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPSczNScgaGVpZ2h0PSc3OCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00yMC4zNTUgMTIuMDgzYy0xLjY0My0xLjYyLTIuMTU2LTQuNzcuNDEtNS44MyAxLjE4Ny0uNDkgMi42OC0uMzY1IDMuOTI4LS4yMjcgMS4yODYuMTQzIDIuNTUyLjQxNyAzLjc3Ljg1NiAyLjE3My43ODUgNS4xODQgMi4xNjQgNi4wMjcgNC41MS45OTMgMi43NjItMS45NjggNC4xMDctNC4xNTUgNC40NzQtMi43NzUuNDY1LTUuNzA2LjQxNy04LjUxMy4zMzgtMi42OTQtLjA3Ni01LjQ1NC0uMzc1LTcuOTgtMS4zNjYtMi4yNy0uODkyLTQuNTktMi4zMzMtNS43MjMtNC41OC0xLjA0My0yLjA2Ni0uODM2LTQuNTQxLjQ3NS02LjQ0NEMxMC40IDEuMTkzIDEzLjQyMi42OSAxNi4zODEuMzM3QTQ5LjQ2MiA0OS40NjIgMCAwIDEgMjcuMzA3LjI3YzEuMi4xMjMgMS4yMTIgMi4wMTcgMCAxLjg5M2E0OS44NzcgNDkuODc3IDAgMCAwLTcuNDEyLS4yMjNjLTIuMjY1LjEwNS00LjY3MS4yNC02Ljg1LjkwMi0xLjgwNy41NDktMy4yMzIgMS44ODItMy42MjcgMy43Ny0uNDE0IDEuOTc4LjcwOCAzLjczMiAyLjIzIDQuOTAzIDMuMjUgMi41IDcuNjcyIDIuODExIDExLjYxNSAyLjgxNyAyLjIyNS4wMDQgNC41NS4wNzQgNi43NDUtLjMyLjgwNC0uMTQ0IDEuODk1LS4zMiAyLjQ4NC0uOTU3LjgxNC0uODgtLjMyLTEuOTM4LTEuMDEtMi40NjctMS44My0xLjQwNi00LjE0NC0yLjI4My02LjQxNi0yLjYxOS0uOTc5LS4xNDUtMi41NzktLjQxMy0zLjUyIDAtMS4yOTQuNTctLjU3NiAyLjA2My4xNDcgMi43NzcuODcuODU2LS40NyAyLjE5NC0xLjMzOCAxLjMzOFonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTM0LjAyMyAxMy43MjdjLTEuNDk0IDUuNDUtMy4xNTggMTAuOTMzLTcuMDk5IDE1LjE1N2EyMi4zOSAyMi4zOSAwIDAgMS02LjAzIDQuNTgxYy0yLjMyMyAxLjIwNS01LjEzIDIuMzg1LTcuNzgxIDEuODI4LTEuMTktLjI1LS42ODctMi4wNzUuNTAzLTEuODI1IDIuMjkyLjQ4IDUuMDItLjg4OCA2Ljk3LTEuOTg2YTIwLjgwOCAyMC44MDggMCAwIDAgNS4zOTYtNC4zNzNjMy40NDYtMy45MDQgNC44NjktOC45NyA2LjIxNi0xMy44ODQuMzItMS4xNzQgMi4xNDctLjY3NiAxLjgyNS41MDJaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J005LjAyOCA3LjkyM2MtMS4yNjYgOC4zNDQtMi41OSAxOC4zNyAzLjcyMiAyNS4xMzMuODMuODktLjUwNSAyLjIzMS0xLjMzOCAxLjMzOS02Ljg0LTcuMzMxLTUuNTg3LTE3Ljg5My00LjIxLTI2Ljk3NC4xODMtMS4yIDIuMDA2LS42OSAxLjgyNi41MDJaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00xNC44NzcgMzQuMzQzYy0xLjkxOCAxNC4wNzQtMS4zNDkgMjguNDYgMS42MzYgNDIuMzQ0LjI1NSAxLjE4Ny0xLjU2OSAxLjY5NS0xLjgyNS41MDNhMTI1LjY1NCAxMjUuNjU0IDAgMCAxLTEuNjM2LTQzLjM1Yy4xNjQtMS4yMDIgMS45ODgtLjY5IDEuODI1LjUwM1onXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTEwLjM0IDYwLjg5MWMtLjQxNi00LjY1Ni0zLjg0NS04Ljg2LTguMjktMTAuMjYtMS4xNTgtLjM2NS0uNjY0LTIuMTkzLjUwMi0xLjgyNSA1LjMwMSAxLjY3IDkuMTg2IDYuNTYyIDkuNjggMTIuMDg1LjEwOCAxLjIxMi0xLjc4NSAxLjIwNS0xLjg5MyAwWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMy4xOTcgNDkuOTJjLS43MyAxLjM4Ni0uOTIgMi45MzctLjk2IDQuNDg0LS4wMzcgMS40NzYtLjI1OSAzLjI0Ni43MzkgNC40Ni45MiAxLjEyIDIuMjcxIDEuOTU2IDMuNTMgMi42NDNhMTcuNTk1IDE3LjU5NSAwIDAgMCA0LjQwMiAxLjY2MmMxLjE4NC4yOC42ODMgMi4xMDUtLjUwMyAxLjgyNWExOS4zNyAxOS4zNyAwIDAgMS01LjA3LTEuOTc0Yy0xLjUxNS0uODU1LTMuMTA2LTEuOTIyLTQuMTItMy4zNjJDLjE1MyA1OC4xNS4zIDU2LjE2My4zNDUgNTQuNDA0Yy4wNDktMS44OS4zMjctMy43NSAxLjIxNy01LjQ0LjU2OS0xLjA3NyAyLjIwMi0uMTIyIDEuNjM1Ljk1NlonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTcuOTE5IDU4LjAyNmMxLjM2IDEuNzIgMi43MjMgMy40NCA0LjA4NCA1LjE2LjMwNi4zODguNDA2Ljk2NSAwIDEuMzM5LS4zNDIuMzEzLTEuMDEuNDE0LTEuMzM4IDBMNi41OCA1OS4zNjNjLS4zMDYtLjM4Ny0uNDA2LS45NjUgMC0xLjMzNy4zNDItLjMxNCAxLjAxLS40MTUgMS4zMzkgMFpNMTIuNjI5IDUxLjg4NGEyOC4wOCAyOC4wOCAwIDAgMSAxNy40MTgtNi42MjhjMS4yMTktLjAzIDEuMjE4IDEuODYzIDAgMS44OTItNS44NjMuMTQtMTEuNTk0IDIuMjg4LTE2LjA4IDYuMDc0LS45MjYuNzgyLTIuMjctLjU1LTEuMzM4LTEuMzM4WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMzIuMjY3IDQ2LjY3M2MtMS4yMSA0LjIzNC00LjA3MiA4LjE0Mi04LjA1NCAxMC4xNS0zLjc4MyAxLjkwNi04LjYyMyAxLjc1My0xMS42NDktMS40OC0uODMxLS44ODkuNTA0LTIuMjMgMS4zMzgtMS4zMzggMi42IDIuNzc2IDYuNzM1IDIuNjc2IDkuODcyLjkwNyAzLjI5Ny0xLjg1NyA1LjYzOC01LjEzOCA2LjY2OS04Ljc0Mi4zMzQtMS4xNjkgMi4xNi0uNjcyIDEuODI0LjUwM1onXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTE0LjM1IDUzLjEzOGE0MC43MDcgNDAuNzA3IDAgMCAxIDUuOTEyLTEuNTMzYy40ODUtLjA4NyAxLjA0My4xMzIgMS4xNjMuNjYxLjEwNS40NjMtLjE0IDEuMDctLjY2IDEuMTY1YTQwLjYxNiA0MC42MTYgMCAwIDAtNS45MTMgMS41MzNjLS40NjguMTYtMS4wNTQtLjE4NC0xLjE2My0uNjYxLS4xMi0uNTI2LjE1OC0uOTkzLjY2LTEuMTY1WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5jb25zdCBIZWFkZXJMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lQmxvY2snLFxuICAgICAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAwcHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxKScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxzdmcgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyBmaWxsPSdub25lJz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdtMzQuNjEzIDI3LjczNyAxLjQzNy4wODhhNi4xMTEgNi4xMTEgMCAwIDEgMS45MjUuMmMuMzUuMi41MzguNDc1LjEuNzYyLS40MzcuMjg4LTEuMSAwLTEuNSAwLS40IDAtLjkyNS0uMS0xLjQtLjEyNWEzLjI5NiAzLjI5NiAwIDAgMC0xLjA1IDBjLS4zNS4xMTMtLjI4Ny4yMTMtLjQ4Ny42MTNhNy41NzcgNy41NzcgMCAwIDEtMS43NjMgMi4xNWMtMS40NjIgMS4yNS0zLjQ1IDEuMzM3LTUuMTYyIDIuMDg3LjQ1LTIuOTYyIDIuNzI1LTQuNDM3IDUuNDc1LTUtLjk3NSAwLTIuNjc1LS44NzUtMy41MTMtLjQ2Mi0xLjQ4Ny42MzctMy43NSAxLjUtNC4yMTIgMy4yNS0uMjM4IDEuMDYyLS4xODggMi42MzctMS41MzggMi45NjItMS4zNS4zMjUtMS43MjUtLjk2Mi0xLjQtMS45NzUtLjg3NS40NS0yLjA1LjA4OC0xLjg2Mi0xLjA1LjE4Ny0xLjEzNyAxLjUyNS0xLjI1IDIuMzg3LTEuMzYyIDIuMjEzLS4zNSAzLjktMS42MjUgNS45ODgtMi4yODhhMjUuODQ1IDI1Ljg0NSAwIDAgMC0yLjUtMS4wMjUgNi44MzcgNi44MzcgMCAwIDAtMi42LjQ4OGMtLjkyLjExNC0xLjgyOC4zMS0yLjcxMy41ODctLjY0LjM0LTEuMTkuODI4LTEuNiAxLjQyNS0uOTg3IDEuMTYzLTIuMiAyLjUtMy45IDIuMzc1LTIuMTUtLjItMS45MTItMi42NS0uMzI1LTMuNDg3LTEuMDI1IDAtMi41LS42MzgtMi40LTEuODc1LjA4OC0xLjU1IDEuOTYzLTEuNzM4IDMuMTI1LTEuNDI1IDEuMDk3LjQxOSAyLjE2Ni45MDcgMy4yIDEuNDYyIDEuOTM4Ljc4OCAzLjc1IDAgNS43NjMtLjJhMzcuOTk0IDM3Ljk5NCAwIDAgMS00LjY1LTIuNjc1IDIuMTg3IDIuMTg3IDAgMCAwLTEuMzc1LS41NWgtMS4yNWEyNy42NzEgMjcuNjcxIDAgMCAwLTMuMzc1LjFjLS43NzUgMC0xLjMyNS43MzgtMS44MzggMS4yNWE2LjEzOCA2LjEzOCAwIDAgMS0yLjUgMS43MTMgMS45ODcgMS45ODcgMCAwIDEtMi41LS42MjVBMi4wNzUgMi4wNzUgMCAwIDEgNy43MTMgMjIuNGMtLjk3NS0uMzI1LTIuMjg4LTEuMTEzLTEuNDI1LTIuMyAxLjAxMi0xLjM4OCAyLjg3NS0uNjUgMy45MzcuMTVhNS44NzUgNS44NzUgMCAwIDAgMi45MzggMS42YzEuNDgyLjA4NyAyLjk2OC4wODcgNC40NSAwYTIzLjc0IDIzLjc0IDAgMCAxLTIuMDM4LTIuMDEzIDUuNzg3IDUuNzg3IDAgMCAwLS44NjItLjk2MmMtLjg1Mi0uMzgtMS43NTItLjY0MS0yLjY3NS0uNzc1YTE0LjUyMiAxNC41MjIgMCAwIDAtMi43NS0uNzc1IDUuNjExIDUuNjExIDAgMCAwLTIuNjg4LjYyNSA2LjI1MSA2LjI1MSAwIDAgMS0zLjEzNy41MjUgMS45NSAxLjk1IDAgMCAxLTEuNjc1LTIuMDYzYy4xMjUtMS4wMzcuOTg3LTEuMzg3IDEuODc1LTEuNTUtMi4wMjUtMS44ODcuNzc1LTMuNjg3IDIuNS0yLjAxMiAxLjAyNSAxLjAxMiAxLjYzNyAyLjkxMiAyLjkxMiAzLjQyNSAxLjYxMy42NSAzLjM3NS44ODcgNSAxLjYzNy0uOTM3LTEuMjUtMS44NS0yLjUtMi43MjUtMy43NWE2Ljg3NSA2Ljg3NSAwIDAgMC0yLjc3NS0yLjk3NWMtMS40ODctLjY3NS0zLjQ1LTEuNDg3LTMuNzUtMy4zNS0uMzUtMi4yODcgMi4yMzgtMS45IDMuNDUtLjk1YTIuMTYzIDIuMTYzIDAgMCAxIDEuNC0yLjVjMS4yNS0uNDg3IDIuMDEzLjQ2MyAyLjE3NSAxLjY3NS4wMjUgMS40MzgtLjYgMi44MjUtLjgyNSA0LjMyNS0uMjYyIDIuMjEzIDIuMTUgNC44NzUgMy4zNjMgNi42IDAtMS44NS43LTQuMDYyLS4yNjMtNS43ODctLjYyNS0xLjQyNS0yLjYxMi0zLjgyNS0xLjI1LTUuNDI1IDEtMS4xMzggMi4yMzguMTI1IDIuNTc1IDEuMTVhMS40NjIgMS40NjIgMCAwIDEgMi41LS4yNjNjMS4yNSAxLjcyNS0uNzUgMy4yMzgtMS42NjIgNC41MTMtMS4xIDEuNTEyLS45IDIuOTUtMS4wMzggNC43MzdhNi41OTcgNi41OTcgMCAwIDAtLjE2MiAyLjAyNWMuMTM3LjQxMy44MTIuODg4IDEuMTEyIDEuMjVhMjYuOTMgMjYuOTMgMCAwIDAgMi41NjMgMi4zNjNjLS4xLTIuMS4yMTItNC4yNzUtLjUxMy02LjI1LS40MjUtMS4xNS0xLjQtMy4xNS0uNS00LjI4OC45LTEuMTM3IDEuOS0uMTM3IDIuMjUuODEzYTIuMDI1IDIuMDI1IDAgMCAxIDIuNS0uNjUgMS45NSAxLjk1IDAgMCAxIC40MjUgMi41Yy0uODUgMS44MTItMy4yODcgMi43NjItMy4yODcgNC44MjUtLjEyNS45NS0uMDYzIDEuOTg3LS4xIDIuOTVhMi4wMjMgMi4wMjMgMCAwIDAgMCAuNjc1Yy4xMzcuMjc1Ljg2Mi42MTIgMS4xMTIuNzc1YTM1LjM3NyAzNS4zNzcgMCAwIDAgNSAyLjYzN2MtLjI4Ny0xLjI1LS4zMTItMi40MTItLjUxMi0zLjc1YTUuMzM4IDUuMzM4IDAgMCAwLTEuMzg4LTIuODEyYy0uNzM3LS45ODgtMS41LTIuNjUtLjM4Ny0zLjY4OC44NzUtLjgyNSAyLjAyNS0uMDYyIDIuMzUuODg4IDEuMDUtMS42IDMuNjYyLTEuNDM4IDMuNzUuNzM3LjA4NyAxLjY1LTEuMzUgMi43MjUtMi41IDMuNjI1LS4yMzMuMTUtLjQxOS4zNjMtLjUzOC42MTNhMy4wMzMgMy4wMzMgMCAwIDAtLjE4Ny43MjVjLS4wNTcuODM2LS4wMTEgMS42NzUuMTM3IDIuNSAwIC41MTIgMCAxLjI1LjQxMyAxLjUxMi41MjIuMjggMS4wODIuNDgyIDEuNjYyLjZhMjAuMTMgMjAuMTMgMCAwIDAgNC4xODggMS4wMzggNi4wNzUgNi4wNzUgMCAwIDEtMi4xODgtNC4yIDkuMSA5LjEgMCAwIDEgLjgtNC41MTNjLjgyNSAxLjI1IDIuMDEzIDIuMzUgMi43NjMgMy42NzVhNS43NjMgNS43NjMgMCAwIDEgLjEgNS4yNWMuMTY2LjAxMy4zMzMuMDEzLjUgMFonXG4gICAgICAgICAgZmlsbD0nI0RGQUUwMCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdNMTkuNTUgMTUuNzg3czMuMjc1LTIuODUgMi41LTMuNjM3Yy0uNzc1LS43ODgtMi4xMTIuOTEyLTIuMTEyLjkxMnMtLjYzOC0xLjg1LTEuNDYzLTEuMjVjLS44MjUuNiAxLjA3NSAzLjk3NSAxLjA3NSAzLjk3NVpNMTUuMTg4IDEwLjc4OHMyLjk3NS0yLjkxMyAxLjk2Mi0zLjQ3NWMtMS4wMTItLjU2My0xLjc1IDEuMjUtMS43NSAxLjI1cy0uOTc1LTIuNS0xLjc4Ny0xLjc4OGMtLjgxMy43MTMgMS41NzUgNC4wMTMgMS41NzUgNC4wMTNaTTkuNjYyIDEwLjQzN3MxLjk2My00LjU4Ny40ODgtNC44MzctMS40IDIuNi0xLjQgMi42LTIuOTEzLTEuOTUtMy4xMTMtLjdjLS4yMzcgMS41MjUgNC4wMjUgMi45MzcgNC4wMjUgMi45MzdaTTcuMyAxNi41MTNzLTEuOC0zLjYyNS0yLjktMy4yYy0xLjEuNDI1LjQyNSAyLjEuNDI1IDIuMXMtMi4wODguMjc1LTEuOTYzIDEuNTEyYy4xMjUgMS4yMzggNC40MzgtLjQxMiA0LjQzOC0uNDEyWk0xMS42NjIgMjIuNTc1UzguMzUgMTkuNjYzIDcuNSAyMC40MjVjLS44NS43NjMgMi4wNjIgMi4wNzUgMi4wNjIgMi4wNzVzLTMuMSAxLjQ3NS0yLjA2MiAyLjJjMS4yNS44ODggNC4xNjItMi4xMjUgNC4xNjItMi4xMjVaTTE4LjU4OCAyNy4zNzVzLTQuNjM4LTIuNjM4LTUuMzYzLTEuNTg4Yy0uNzI1IDEuMDUgMi43NjMgMS44MjUgMi43NjMgMS44MjVzLTIuODI1IDEuOTM4LTEuNTEzIDIuNjM4YzEuMzEzLjcgNC4xMTMtMi44NzUgNC4xMTMtMi44NzVaTTI1Ljg1IDIwczMuNzUtMi41IDIuMjg3LTMuNTEyYy0xLjExMi0uNzYzLTIuNSAxLjA4Ny0yLjUgMS4wODdzLS44MTItMi4xLTEuNzEyLTEuNGMtLjkuNyAxLjkyNSAzLjgyNSAxLjkyNSAzLjgyNVpNMjMuOTYzIDMwLjE3NXMtLjQzOCAyLjg1LTEuMjUgMy4xNWMtLjgxMy4zLS4yMTMtMi4wNzUtLjIxMy0yLjA3NXMtMi4wMjUuOTI1LTEuOTI1IDBjLjEtLjkyNSAzLjM4OC0xLjA3NSAzLjM4OC0xLjA3NVonXG4gICAgICAgICAgZmlsbD0nI0Y3RDQ3RCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdNMzMuMjg3IDI2Ljk1YTQuODg3IDQuODg3IDAgMCAwIC4xMjUtMy4zNSA2LjM2MiA2LjM2MiAwIDAgMC0xLjg4Ny0zLjA1Yy0xLjA2MyA0LjUzNyAxLjc2MiA2LjQgMS43NjIgNi40Wk0zMi43NSAyOS4xNWMtLjYyMi44MDQtMS4zNiAxLjUxMS0yLjE4OCAyLjEtLjg3NC41NTUtMS44MjYuOTc2LTIuODI1IDEuMjVhNi43MTMgNi43MTMgMCAwIDEgMi4xMTMtMi4xMzcgMTEuNTg4IDExLjU4OCAwIDAgMSAyLjktMS4yMTNaJ1xuICAgICAgICAgIGZpbGw9JyNEQ0IzQjQnXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5jb25zdCB0cmFuc2xhdGVDb25maWcgPSAoYXBwQ29uZmlnLCBsb2NhbGUpID0+IHtcbiAgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSBkZWZhdWx0TG9jYWxlKSB7XG4gICAgcmV0dXJuIGFwcENvbmZpZztcbiAgfVxuICAvLyBSZXBsYWNlIGNvbmZpZyB3aXRoIGxhbmdcbiAgY29uc3QgY29uZmlnTGFuZyA9IGFwcENvbmZpZy5sYW5nW2xvY2FsZV07XG4gIGlmIChjb25maWdMYW5nID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbG9jYWxlOiAnLCBsb2NhbGUpO1xuICB9XG4gIHJldHVybiB7IC4uLmFwcENvbmZpZywgLi4uY29uZmlnTGFuZyB9O1xufTtcblxuY29uc3QgU2hvd0ludml0ZSA9ICh7IGN1cnJlbnRVcmwsIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsIGd1ZXN0IH0pID0+IHtcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9uKGd1ZXN0LmxvY2FsZSk7XG5cbiAgLy8gSW5pdGlhdGUgY29uZmlnIHZhcmlhYmxlc1xuICBjb25zdCB7XG4gICAgbG9nbyxcbiAgICBvZ1RhZ3MsXG4gICAgY291cGxlSW5mbyxcbiAgICB2ZW51ZSxcbiAgICB3ZWRkaW5nRGF5LFxuICAgIHdlZGRpbmdEYXRlLFxuICAgIHdlZGRpbmdUaW1lLFxuICAgIGNhbGVuZGFySW5mbyxcbiAgfSA9IHRyYW5zbGF0ZUNvbmZpZyhhcHBDb25maWcsIGd1ZXN0LmxvY2FsZSk7XG4gIGNvbnN0IHsgYnJpZGVOYW1lLCBncm9vbU5hbWUsIGhhc2h0YWcsIGNvdXBsZU5hbWVGb3JtYXQgfSA9IGNvdXBsZUluZm87XG5cbiAgY29uc3QgY291cGxlTmFtZVN0ciA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJ1xuICAgICAgPyBgJHtncm9vbU5hbWV9ICYgJHticmlkZU5hbWV9YFxuICAgICAgOiBgJHticmlkZU5hbWV9ICYgJHtncm9vbU5hbWV9YDtcbiAgY29uc3QgY291cGxlTmFtZSA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJyA/IChcbiAgICAgIDw+XG4gICAgICAgIHticmlkZU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7Z3Jvb21OYW1lfVxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIDw+XG4gICAgICAgIHtncm9vbU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7YnJpZGVOYW1lfVxuICAgICAgPC8+XG4gICAgKTtcblxuICAvLyBWZW51ZSBpbmZvXG4gIGNvbnN0IHZlbnVlQnJpZWYgPSBgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWA7XG4gIGNvbnN0IHdlZGRpbmdEYXRlQnJpZWYgPSBgJHt3ZWRkaW5nRGF5fSwgJHt3ZWRkaW5nRGF0ZX1gO1xuXG4gIC8vIEV2ZW50IGluZm9cbiAgY29uc3QgZXZlbnRUaXRsZSA9IGAke2NvdXBsZU5hbWVTdHJ9J3MgV2VkZGluZ2A7XG4gIGxldCBldmVudERlc2NyaXB0aW9uID0gYCR7d2VkZGluZ0RhdGVCcmllZn0gYXQgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fWA7XG4gIGlmIChndWVzdC5uYW1lKSB7XG4gICAgZXZlbnREZXNjcmlwdGlvbiA9IGBEZWFyICR7Z3Vlc3QubmFtZX0sIHlvdSBhcmUgY29yZGlhbGx5IGludml0ZWQgdG8gb3VyIHdlZGRpbmcgb24gJHt3ZWRkaW5nRGF0ZX0gYXQgJHt2ZW51ZS5uYW1lfS4gTG9va2luZyBmb3J3YXJkIHRvIHNlZWluZyB5b3UhYDtcbiAgfVxuXG4gIC8vIENhbGVuZGFyIHBheWxvYWRcbiAgY29uc3QgY2FsZW5kYXJFdmVudCA9IHtcbiAgICB0aXRsZTogZXZlbnRUaXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZXZlbnREZXNjcmlwdGlvbixcbiAgICBsb2NhdGlvbjogYCR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gLFxuICAgIHN0YXJ0VGltZTogY2FsZW5kYXJJbmZvLnRpbWVTdGFydElTTyxcbiAgICBlbmRUaW1lOiBjYWxlbmRhckluZm8udGltZUVuZElTTyxcbiAgfTtcblxuICBjb25zdCBldmVudFNjaGVkdWxlID0gW1xuICAgIHtcbiAgICAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgICAgZXZlbnQ6ICdDaHVyY2gnLFxuICAgICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgICB0aW1lOiAnMTJwbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAgIGV2ZW50OiAnUmVjZXB0aW9uJyxcbiAgICAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgICAgdGltZTogJzJwbScsXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAvLyAgIGV2ZW50OiAnRW5nYWdlbWVudCcsXG4gICAgLy8gICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAvLyAgIHRpbWU6ICcycG0nLFxuICAgIC8vIH0sXG4gIF07XG5cbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgfSwgMTAwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYuY3VycmVudDtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRQb3NpdGlvbiA8IHdpbmRvd0hlaWdodCAqIDAuOSkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtZWxlbWVudCcpOyAvLyBBZGQgdGhlIENTUyBjbGFzcyB3aGVuIHRoZSBlbGVtZW50IGlzIDc1JSB2aXNpYmxlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZC1lbGVtZW50Jyk7IC8vIFJlbW92ZSB0aGUgQ1NTIGNsYXNzIGlmIG5vdCB2aXNpYmxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBSdW4gdGhpcyBlZmZlY3Qgb25seSBvbmNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYS5yZWFjdC1hZGQtdG8tY2FsZW5kYXJfX2J1dHRvbiBzcGFuIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZFxuICAgICAgICB7Li4ub2dUYWdzfVxuICAgICAgICB0aXRsZT17ZXZlbnRUaXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2V2ZW50RGVzY3JpcHRpb259XG4gICAgICAgIGd1ZXN0TmFtZT17Z3Vlc3QubmFtZX1cbiAgICAgICAgdXJsPXtjdXJyZW50VXJsfVxuICAgICAgICBkYXRlPXt3ZWRkaW5nRGF0ZUJyaWVmfVxuICAgICAgICBtb2RpZmllZFRpbWU9e2d1ZXN0TGlzdExhc3RVcGRhdGVkQXR9XG4gICAgICAgIHZlbnVlPXt2ZW51ZUJyaWVmfVxuICAgICAgICBsb2dvPXtyZXNvbHZlUGF0aChvZ1RhZ3MubG9nbyl9XG4gICAgICAgIGF1dGhvcj17cmVzb2x2ZVBhdGgoJy8nKX1cbiAgICAgIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hlYWRlcl9hcmVhJz5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2hlYWRlci1jb250YWluZXInPlxuICAgICAgICAgIDxIZWFkZXJMb2dvIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoZWFkZXItbG9nby10ZXh0Jz5UaGUgQWtpbmxhZ3VuJ3MgUGFydHk8L3NwYW4+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPSdob21lJyBjbGFzc05hbWU9J2hlYWRlcl9zbGlkZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay1saXN0IGRyYWdnYWJsZSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stdHJhY2snIHN0eWxlPXt7IG9wYWNpdHk6IDEgfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZ19jb3ZlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvcGljICg4KS5qcGcnXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGFsdD0nYmFja2dyb3VuZCBpbWFnZSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgY29udGVudC1vdmVybGF5Jz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMjQnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX2NvbnRlbnQgdGV4dC1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDYwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfc3ViX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC4ycycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3NpdGVJbnRybycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuN3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC43cycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdXBsZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNodGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5uYW1lfSwge3ZlbnVlLmNpdHl9LCB7dmVudWUuY291bnRyeX0uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29taW5nX3Nvb24nIGNsYXNzTmFtZT0nY29taW5nX3Nvb25fYXJlYSBwdC0yMCBwYi03MCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8xJyBzdHlsZT17eyB6SW5kZXg6IDEgfX0+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy00Jz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSBwdC01MCB3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3QoJ2V2ZW50RGF0ZScpfTo8L2gzPlxuICAgICAgICAgICAgICAgIDxwPnt3ZWRkaW5nRGF0ZUJyaWVmfTwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEFkZFRvQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e2NhbGVuZGFyRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkxhYmVsPXt0KCdidG5BZGRUb015Q2FsZW5kYXInKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy9pbWFnZXMvc2VjdGlvbl9zaGFwZS5wbmcnIGFsdD0nU2hhcGUnIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTgnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjZzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjZzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fY291bnQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgcHQtMjAnPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzYwLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTM4LFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVfY291bnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMwJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb3VudF9jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMSwgcGFkZGluZ1RvcDogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZlbnVlLm1hcFVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvYmV2ZW50LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdiZXZlbnQgY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3ZlbnVlLm1hcFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNzV2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmV5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLmFkZHJlc3NMaW5lMX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMic+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTIucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9J2NvbnRhY3QnIGNsYXNzTmFtZT0nY29udGFjdF9hcmVhJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjb250YWN0X3dyYXBwZXIgd293IGZhZGVJblVwQmlnJ1xuICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDMwLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNHMnLFxuICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluVXAnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudFJlZn0gY2xhc3NOYW1lPSdjb250YWluZXItZXZlbnRMaW5ldXAnPlxuICAgICAgICAgICAgICB7ZXZlbnRTY2hlZHVsZS5tYXAoKGV2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGltZSwgZGF0ZSwgZXZlbnQsIGljb24gfSA9IGV2O1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnRMaW5ldXAnIGtleT17ZXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGZvcm0gKi99XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgdGV4dC1jZW50ZXIgcGItMzAnPlxuICAgICAgICAgICAgICAgICAge2d1ZXN0Lm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25HcmVldGluZycpfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJyB9fT57Z3Vlc3QubmFtZX0sPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhZGVJbic+XG4gICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbG9ycyBvZiB0aGUgZGF5XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgZ2FwOiAnNTBweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUZWFsIEdyZWVuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzgwcHgnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDgwODAnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEdvbGRcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Q1OWE1NycsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvblxuICAgICAgICByZWY9e2VsZW1lbnRSZWZ9XG4gICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgY2xhc3NOYW1lPSdsb3ZlLXRpdGxlLWNvbnRhaW5lciBmYWRlSW5VcEJpZyBmYWRlSW4nXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TG92ZVRpdGxlSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvdmUtdGl0bGUnPlxuICAgICAgICAgIE15IGhlYXJ0IGlzIHlvdXJzIHRvIGhvbGQgYW5kIGNoZXJpc2ggZm9yIHRoZSByZXN0IG9mIG91ciBkYXlzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxhcnRpY2xlXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J3N0b3JpZXMtY29udGFpbmVyIGZhZGVJblVwQmlnJ1xuICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICA+XG4gICAgICAgIDxTdG9yaWVzIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZC1jb250YWluZXInPlxuICAgICAgICA8UGljdHVyZXNHcmlkIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgJz5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDVcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6ICcjRDNEM0QzJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgI0RXZWRkaW5nXG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaG93SW52aXRlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcbiAgY29uc3QgbG9jYWxlUGFyYW1zID0gY3R4LnF1ZXJ5LmxhbmcgfHwgZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgZW1wdHlHdWVzdFBhcmFtcyA9IHtcbiAgICBndWVzdDoge1xuICAgICAgZ3Vlc3RJZDogJycsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGdyZWV0aW5nOiAnJyxcbiAgICAgIGxvY2FsZTogbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgY3VycmVudFVybCA9IHJlc29sdmVQYXRoKGN0eC5yZXEudXJsKTtcbiAgY29uc3QgZ3Vlc3RJZCA9IGN0eC5xdWVyeS51O1xuICBpZiAoIWd1ZXN0SWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGd1ZXN0RGF0YSA9IGd1ZXN0TGlzdC5kYXRhO1xuICBjb25zdCBndWVzdExpc3RMYXN0VXBkYXRlZEF0ID0gZ3Vlc3RMaXN0Lm1ldGEubGFzdFVwZGF0ZWRBdDtcbiAgY29uc3QgeyBuYW1lLCBncmVldGluZywgbG9jYWxlIH0gPVxuICAgIGd1ZXN0RGF0YS5maWx0ZXIoKGd1ZXN0KSA9PiBndWVzdC5ndWVzdElkID09PSBndWVzdElkKVswXSB8fCB7fTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVcmwsXG4gICAgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCxcbiAgICBndWVzdDoge1xuICAgICAgbmFtZSxcbiAgICAgIGdyZWV0aW5nLFxuICAgICAgZ3Vlc3RJZCxcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0ludml0ZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJsdXJoYXNoIH0gZnJvbSAncmVhY3QtYmx1cmhhc2gnO1xyXG5jb25zdCBQaWN0dXJlc0dyaWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGljdHVyZXMgPSBbXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDEpLmpwZycsXHJcbiAgICAvLyAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDIpLmpwZycsXHJcbiAgICAvLyAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDMpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDQpLmpwZycsXHJcbiAgICAvLyAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDUpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDYpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDcpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDgpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDkpLmpwZycsXHJcbiAgICAvLyAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDEwKS5qcGcnLFxyXG4gICAgLy8gJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgxMSkuanBnJyxcclxuICAgIC8vICdhc3NldHMvaW1hZ2VzL2NvdXBsZSAoMTIpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDEzKS5qcGcnLFxyXG4gIF07XHJcbiAgY29uc3QgW3NlbGVjdGVkUGljdHVyZSwgc2V0U2VsZWN0ZWRQaWN0dXJlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkZWRJbWFnZXNDb3VudCwgc2V0TG9hZGVkSW1hZ2VzQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0UGljdHVyZSA9IChwaWN0dXJlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFBpY3R1cmUocGljdHVyZSk7XHJcbiAgfTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgbG9hZEltYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgZm9yIChjb25zdCBwaWN0dXJlIG9mIHBpY3R1cmVzKSB7XHJcbiAgLy8gICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgLy8gICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAvLyAgICAgICAgIHNldExvYWRlZEltYWdlc0NvdW50KChwcmV2Q291bnQpID0+IHByZXZDb3VudCArIDEpO1xyXG4gIC8vICAgICAgIH07XHJcblxyXG4gIC8vICAgICAgIGltZy5zcmMgPSBwaWN0dXJlO1xyXG4gIC8vICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiAoaW1nLm9ubG9hZCA9IHJlc29sdmUpKTtcclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgICAgLy8gc2V0SW1hZ2VMb2FkZWQodHJ1ZSk7XHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIGxvYWRJbWFnZXMoKTtcclxuXHJcbiAgLy8gICBpZiAobG9hZGVkSW1hZ2VzQ291bnQgPT09IHBpY3R1cmVzLmxlbmd0aCkge1xyXG4gIC8vICAgICBzZXRJbWFnZUxvYWRlZCh0cnVlKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbcGljdHVyZXMsIGxvYWRlZEltYWdlc0NvdW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGljdHVyZS1ncmlkJz5cclxuICAgICAgICB7cGljdHVyZXMubWFwKChwaWN0dXJlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHRpdGxlPSd2aWV3IGltYWdlJ1xyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPSdtb2RhbCdcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD0nI215TW9kYWwnXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0UGljdHVyZShwaWN0dXJlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3BpY3R1cmUnXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IGltYWdlTG9hZGVkID8gJ25vbmUnIDogJ2lubGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8Qmx1cmhhc2hcclxuICAgICAgICAgICAgICAgICAgaGFzaD0nTGtPeWVWRTBSKldDP3dXQWpab2ZNe3M6UmpvTSdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdncmlkLWltZydcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMzAwcHgnfVxyXG4gICAgICAgICAgICAgICAgICByZXNvbHV0aW9uWD17MzJ9XHJcbiAgICAgICAgICAgICAgICAgIHJlc29sdXRpb25ZPXszMn1cclxuICAgICAgICAgICAgICAgICAgcHVuY2g9ezF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAhaW1hZ2VMb2FkZWQgPyAnbm9uZScgOiAnaW5saW5lJyB9fT4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dyaWQtaW1nJ1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0PSdibHVyJ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cclxuICAgICAgICAgICAgICAgIGFsdD17YFBpY3R1cmUgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dyaWQtaW1nJ1xyXG4gICAgICAgICAgICAgICAgYWx0PXtgUGljdHVyZSAke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2VsZWN0ZWRQaWN0dXJlICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsIGZhZGUnIGlkPSdteU1vZGFsJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWRpYWxvZyc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzcwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkUGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J3NlbGVjdGVkIHBpY3R1cmUnXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWN0dXJlc0dyaWQ7XHJcbiIsImltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5pbXBvcnQgJ3N3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ3N3aXBlci9zd2lwZXIubWluLmNzcyc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBBdXRvcGxheSB9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zd2lwZXItYnVuZGxlLmNzcyc7XHJcblxyXG4vLyBpbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG4vLyBpbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XHJcbi8vIGltcG9ydCAnc3dpcGVyL2Nzcy9hdXRvcGxheSc7XHJcblxyXG5jb25zdCBjb250ZW50ID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnQnJpZGUnLFxyXG4gICAgZGVzYzogYEkgd2FzIGF0ICBhIGJ1cmlhbCBvZiBvbmUgb2YgdGhlIGVsZGVycyBpbiBteSBjaHVyY2ggT2N0b2JlciAyMDIyIGFuZCBjb25uZWN0ZWQgd2l0aCBhIGxvdCBvZiBmb3JtZXIgY2h1cmNoIG1lbWJlcnMgYW5kIGZyaWVuZHMuIEEgZ2VudGxlIG1hbiB3YWxrZWQgdXAgdG8gbWUgdG8gc2F5IEkgbG9va2VkIGZhbWlsaWFyIGFuZCBhY3R1YWxseSBoZSBsb29rZWQgZmFtaWxpYXIgdG9vLiBXZSBleGNoYW5nZWQgY29udGFjdHMgYWZ0ZXIgdGhlIGZhbWlsaWFyaXphdGlvbi4gSSBEaWQgbXkgZmluZGluZ3MgZnJvbSBteSBtdW0gYW5kIGRpc2NvdmVyZWQgb3VyIGJvdGggZmFtaWxpZXMgd2VyZSBjbG9zZS4gV2UgZ290IHRhbGtpbmcgbGl0ZXJhbGx5IGV2ZXJ5IGRheSBhbmQgdGhlIHJlc3TCoMKgaXPCoGhpc3Rvcnnwn6WwLmAsXHJcbiAgICBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvYnJpZGUuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnR3Jvb20nLFxyXG4gICAgZGVzYzogYE91ciBmYXRoZXJzIGVuam95ZWQgYSBjbG9zZSBmcmllbmRzaGlwIHVudGlsIG15IGZhdGhlcidzIHBhc3NpbmcuIFRoZSB0d28gb2YgdXMgaGFkIG5ldmVyIGhhZCBhbnkgcmVhbCBjb25uZWN0aW9uIHVudGlsIE9jdG9iZXIgMjAyMiB3aGVuIHdlIGNvaW5jaWRlbnRhbGx5IG1ldCBhdCB0aGUgYnVyaWFsIG9mIG15IG1lbnRvcidzIGZhdGhlci4gSSBub3RpY2VkIGhlciBmcm9tIGEgZGlzdGFuY2UsIGhlciByYWRpYW50IHNtaWxlIGNhdWdodCBteSBhdHRlbnRpb24uIEkgYXBwcm9hY2hlZCBoZXIgYW5kIGhlciBtdW0gcmUtaW50cm9kdWNpbmcgbXlzZWxmIHRvIGJvdGggb2YgdGhlbSBhbmQgd2UgZXhjaGFuZ2VkIGNvbnRhY3QgaW5mb3JtYXRpb24uIFRoaXMgbWFya2VkIHRoZSBiZWdpbm5pbmcgb2YgYSBoZWFydHdhcm1pbmcgcmV1bmlvbi4gT3VyIGNvbnZlcnNhdGlvbnMgc2luY2UgdGhlbiBoYXZlIGJlZW4gbm90aGluZyBzaG9ydCBvZiBleGhpbGFyYXRpbmcgYW5kIGV4Y2l0aW5nLCAgd2hpY2ggaXMgdGhlIHN0YXJ0IG9mIGEgam91cm5lecKgdG/CoGZvcmV2ZXLwn6WwLmAsXHJcbiAgICBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvZ3Jvb20uanBnJyxcclxuICB9LFxyXG5dO1xyXG5jb25zdCBTdG9yaWVzID0gKCkgPT4ge1xyXG4gIFN3aXBlckNvcmUudXNlKFtBdXRvcGxheV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN3aXBlclxyXG4gICAgICBzcGFjZUJldHdlZW49ezUwfVxyXG4gICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICBhdXRvcGxheT17e1xyXG4gICAgICAgIGRlbGF5OiAxMDAwMCxcclxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgIH19XHJcbiAgICAgIG1vZHVsZXM9e1tQYWdpbmF0aW9uLCBBdXRvcGxheV19XHJcbiAgICAgIHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcbiAgICA+XHJcbiAgICAgIHtjb250ZW50Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBkZXNjIH0gPSBpdGVtO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JyaWRlLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwcmVtJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyNXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YCR7dGl0bGV9IHN0b3JpZXNgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdncm9vbS10aXRsZSc+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0nZ3Jvb20tcGFyYWdyYXBoJz57ZGVzY308L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9Td2lwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JpZXM7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgcmVzb2x2ZVBhdGggZnJvbSAnQHNyYy91dGlscy9yZXNvbHZlUGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgdXJsLFxuICBsb2dvLFxuICBhdXRob3IsXG4gIHNpdGVOYW1lLFxuICBwdWJsaXNoZWRUaW1lLFxuICBtb2RpZmllZFRpbWUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dHlwZScgY29udGVudD0nYXJ0aWNsZScgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17dGl0bGV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17c2l0ZU5hbWV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PXt1cmx9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2UnIGNvbnRlbnQ9e2xvZ299IC8+XG4gICAgICB7cHVibGlzaGVkVGltZSAmJiAoXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PSdhcnRpY2xlOnB1Ymxpc2hlZF90aW1lJyBjb250ZW50PXtwdWJsaXNoZWRUaW1lfSAvPlxuICAgICAgKX1cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdhcnRpY2xlOm1vZGlmaWVkX3RpbWUnIGNvbnRlbnQ9e21vZGlmaWVkVGltZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdhcnRpY2xlOmF1dGhvcicgY29udGVudD17YXV0aG9yfSAvPlxuXG4gICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9J3Nob3J0Y3V0IGljb24nXG4gICAgICAgIGhyZWY9J2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmc/MTIzJ1xuICAgICAgICB0eXBlPSdpbWFnZS9wbmcnXG4gICAgICAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdhc3NldHMvY3NzL2FuaW1hdGUuY3NzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdhc3NldHMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdhc3NldHMvY3NzL2RlZmF1bHQuY3NzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdhc3NldHMvY3NzL3N0eWxlLmNzcycgLz5cblxuICAgICAgey8qIEZPUiBJRTkgYmVsb3cgKi99XG4gICAgICB7LyogW2lmIGx0IElFIDldPiAqL31cbiAgICAgIDxzY3JpcHQgc3JjPSdhc3NldHMvanMvdmVuZG9yL2pxdWVyeS0xLjEyLjQubWluLmpzJz48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPSdhc3NldHMvanMvdmVuZG9yL21vZGVybml6ci0zLjcuMS5taW4uanMnPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9J2Fzc2V0cy9qcy9ib290c3RyYXAubWluLmpzJz48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPSdhc3NldHMvanMvanF1ZXJ5LmVhc2luZy5taW4uanMnPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgKTtcbn07XG4iLCJjb25zdCBiYXNlQ29uZmlnID0ge1xuICB3ZWRkaW5nRGF5OiAnU2F0dXJkYXknLFxuICB3ZWRkaW5nVGltZTogJzhhbSAtIDhwbScsXG4gIHdlZGRpbmdEYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgc2hvd0J1aWx0V2l0aEluZm86IHRydWUsXG4gIHNob3dRckNvZGU6IGZhbHNlLFxuICBjYWxlbmRhckluZm86IHtcbiAgICB0aW1lU3RhcnRJU086ICcyMDIzLTEyLTE2VDE5OjAwOjAwKzA4OjAwJyxcbiAgICB0aW1lRW5kSVNPOiAnMjAyMy0xMi0xNlQyMTowMDowMCswODowMCcsXG4gIH0sXG4gIGNvdXBsZUluZm86IHtcbiAgICBicmlkZU5hbWU6ICdPbGFkdW5uaSAnLFxuICAgIGdyb29tTmFtZTogJ0FkZXdhbGUnLFxuICAgIGNvdXBsZU5hbWVGb3JtYXQ6ICdHUk9PTV9GSVJTVCcsXG4gICAgaGFzaHRhZzogJyNEV2VkZGluZycsXG4gIH0sXG4gIHZlbnVlOiB7XG4gICAgbmFtZTogJ0xhaGwgQmV2ZW50IENlbnRlcicsXG4gICAgYWRkcmVzc0xpbmUxOiAnMTExIG9iYWZlbWkgYXdvbG93byB3YXkgaWtlamEgTGFnb3MsIE5pZ2VyaWEnLFxuICAgIC8vIGFkZHJlc3NMaW5lMjogJ0VrbyBob3RlbCBWLkkgTGFnb3MgU3RhdGUnLFxuICAgIGNpdHk6ICdMYWdvcycsXG4gICAgY291bnRyeTogJ05pZ2VyaWEnLFxuICAgIG1hcFVybDogJ2h0dHBzOi8vbWFwcy5hcHAuZ29vLmdsL0tob0ZETVVudGJUVTZMM3k5JyxcbiAgfSxcbiAgbG9nbzoge1xuICAgIGhlYWRlckxvZ286ICdhc3NldHMvaW1hZ2VzL3Jpbmctc3ZnLnBuZycsXG4gICAgZm9vdGVyTG9nbzogJ2Fzc2V0cy92aWRlby9hdy1yaW5nLWxvZ28tdGlja2VyLm1wNCcsXG4gICAgZm9vdGVyTG9nb1R5cGU6ICdtcDQnLFxuICB9LFxuICBvZ1RhZ3M6IHtcbiAgICBsb2dvOiAnYXNzZXRzL2ltYWdlcy9hdy1yaW5nLWxvZ28ucG5nJyxcbiAgICBzaXRlTmFtZTogJ2h0dHBzOi8vZnVnbHlkYW1pLmdpdGh1Yi5pby9hZGV3YWxlLXdlZGRpbmcvJyxcbiAgICBwdWJsaXNoZWRUaW1lOiAnMjAyMy0wOS0wNycsXG4gIH0sXG59O1xuXG5jb25zdCBsYW5nID0ge1xuICBpZDoge1xuICAgIHdlZGRpbmdEYXk6ICdTYWJ0dScsXG4gICAgd2VkZGluZ0RhdGU6ICcyMiBGZWJydWFyaSAyMDIwJyxcbiAgICB2ZW51ZToge1xuICAgICAgLi4uYmFzZUNvbmZpZy52ZW51ZSxcbiAgICAgIG5hbWU6ICdIb3RlbCBPdmFsJyxcbiAgICAgIGFkZHJlc3NMaW5lMjogJ1N1cmFiYXlhLCBKYXdhIFRpbXVyLCA2MDI0MSwnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLmJhc2VDb25maWcsXG4gIGxhbmcsXG59O1xuIiwiaW1wb3J0IEkxOG4gZnJvbSBcImkxOG4tanNcIjtcbmltcG9ydCBlbiBmcm9tIFwiLi9sYW5nL2VuXCI7XG5pbXBvcnQgaWQgZnJvbSBcIi4vbGFuZy9pZFwiO1xuXG5jb25zdCBzdXBwb3J0ZWRMYW5ndWFnZXMgPSBbXG4gIHtcbiAgICBjb2RlOiBcImVuXCIsXG4gICAgbGFiZWw6IFwiRW5nbGlzaFwiLFxuICAgIHRyYW5zbGF0aW9uczogZW5cbiAgfSxcbiAge1xuICAgIGNvZGU6IFwiaWRcIixcbiAgICBsYWJlbDogXCJJbmRvbmVzaWFcIixcbiAgICB0cmFuc2xhdGlvbnM6IGlkXG4gIH1cbl07XG5cbkkxOG4uZGVmYXVsdExvY2FsZSA9IFwiZW5cIjtcbnN1cHBvcnRlZExhbmd1YWdlcy5mb3JFYWNoKGxhbmcgPT4ge1xuICBJMThuLnRyYW5zbGF0aW9uc1tsYW5nLmNvZGVdID0gbGFuZy50cmFuc2xhdGlvbnM7XG59KTtcblxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlT3B0aW9ucyA9IHN1cHBvcnRlZExhbmd1YWdlcy5tYXAobGFuZyA9PiAoe1xuICB2YWx1ZTogbGFuZy5jb2RlLFxuICBsYWJlbDogbGFuZy5sYWJlbFxufSkpO1xuXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxlID0gbG9jYWxlID0+IHtcbiAgSTE4bi5sb2NhbGUgPSBsb2NhbGU7XG59O1xuXG5leHBvcnQgY29uc3QgdCA9IChuYW1lLCBwYXJhbXMgPSB7fSkgPT4ge1xuICByZXR1cm4gSTE4bi50KG5hbWUsIHBhcmFtcyk7XG59O1xuXG5leHBvcnQgY29uc3QgVHJhbnMgPSBwcm9wcyA9PiAoXG4gIDxzcGFuXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0KHByb3BzLmkxOG5LZXksIHsgLi4ucHJvcHMgfSkgfX1cbiAgPjwvc3Bhbj5cbik7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlID0gSTE4bi5kZWZhdWx0TG9jYWxlO1xuXG5leHBvcnQgY29uc3QgdXNlVHJhbnNsYXRpb24gPSBsb2NhbGUgPT4ge1xuICBJMThuLmxvY2FsZSA9IGxvY2FsZTtcbiAgcmV0dXJuIEkxOG4udDtcbn07XG4iLCJjb25zdCBmYWxsYmFja0hvc3QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCAocGF0aCwgaGVhZGVycykgPT4ge1xuICBpZiAocGF0aC5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgLy8gVXNlIGJyb3dzZXIncyBgd2luZG93YCBpZiBoZWFkZXJzIGlzIG5vdCBwcm92aWRlZFxuICBpZiAoIWhlYWRlcnMgJiYgcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJjb3VsZCBub3QgcmVzb2x2ZSBwYXRoIHdpdGhvdXQgcmVxdWVzdCBoZWFkZXJzOiB3aW5kb3cgaXMgdW5kZWZpbmVkXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3QgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3R9JHtwYXRofWA7XG4gIH1cbiAgY29uc3QgaG9zdCA9IGhlYWRlcnNcbiAgICA/IGhlYWRlcnNbXCJ4LW5vdy1kZXBsb3ltZW50LXVybFwiXSB8fFxuICAgICAgaGVhZGVyc1tcIngtZm9yd2FyZGVkLWhvc3RcIl0gfHxcbiAgICAgIGhlYWRlcnMuaG9zdFxuICAgIDogbnVsbDtcbiAgY29uc3Qgc2NoZW1lID1cbiAgICBoZWFkZXJzICYmIGhlYWRlcnNbXCJ4LWZvcndhcmRlZC1wcm90b1wiXVxuICAgICAgPyBoZWFkZXJzW1wieC1mb3J3YXJkZWQtcHJvdG9cIl1cbiAgICAgIDogXCJodHRwXCI7XG4gIHJldHVybiBob3N0ID8gYCR7c2NoZW1lfTovLyR7aG9zdH0ke3BhdGh9YCA6IGAke2ZhbGxiYWNrSG9zdH0ke3BhdGh9YDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpMThuLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxcmNvZGUucmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWRkLXRvLWNhbGVuZGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJsdXJoYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2VldGFsZXJ0MlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2lwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9