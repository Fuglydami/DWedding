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

/***/ "./pages/accountDetails.jsx":
/*!**********************************!*\
  !*** ./pages/accountDetails.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\accountDetails.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AccountDetails = ({
  showAccountDetails,
  setShowAccountDetails
}) => {
  return __jsx("div", {
    className: "modal modalBackground",
    tabIndex: "-1",
    role: "dialog",
    style: {
      display: showAccountDetails ? 'block' : 'none',
      color: 'black'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      background: 'black',
      borderRadius: '10px'
    },
    className: "modal-content  neonText",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    type: "button",
    className: "close guest-modal",
    onClick: () => setShowAccountDetails(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("span", {
    style: {
      color: 'white'
    },
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "\u2715")), __jsx("div", {
    className: "modal-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      padding: '0 20px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      textAlign: 'center',
      marginBottom: '10px',
      fontWeight: 700,
      fontSize: 24
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Cash Gift"), __jsx("span", {
    style: {
      fontSize: 20,
      color: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      color: '#f0f0f0',
      fontSize: '16px',
      marginRight: '10px',
      marginBottom: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Bank:"), ' ', "Wema Bank"), __jsx("span", {
    style: {
      fontSize: 20,
      color: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      color: '#f0f0f0',
      fontSize: '16px',
      marginRight: '10px',
      marginBottom: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "Name:"), ' ', "Adewale Akinlagun\xA0"), __jsx("span", {
    style: {
      fontSize: 20,
      color: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      color: '#f0f0f0',
      fontSize: '16px',
      marginRight: '10px',
      marginBottom: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, "Account Number:"), ' ', "0233584142"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (AccountDetails);

/***/ }),

/***/ "./pages/cashGift.jsx":
/*!****************************!*\
  !*** ./pages/cashGift.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\cashGift.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Icon = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("svg", {
    width: "61",
    height: "34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "M30.165 10.126c-3.36.643-5.576 4.432-4.79 8.506.358 1.93 1.287 3.646 2.717 4.86 1.144 1.001 2.502 1.502 3.86 1.502.285 0 .643 0 .93-.071 1.643-.286 3.073-1.359 4.002-3.002.858-1.573 1.144-3.575.786-5.505-.786-4.074-4.146-6.861-7.505-6.29Zm5.503 11.151c-.715 1.287-1.787 2.145-3.073 2.36-1.286.213-2.573-.144-3.717-1.145-1.144-1-1.93-2.43-2.288-4.074-.643-3.36 1.072-6.505 3.789-7.005.214-.072.5-.072.715-.072 2.43 0 4.718 2.216 5.29 5.29.285 1.643.07 3.288-.716 4.646Z",
    fill: "#F6B100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M54.11 8.696c-.215-.143-.43-.143-.572-.071 0 0-1.644.5-2.645-.214-.572-.358-.858-1.144-.93-2.145 0-.214-.143-.429-.285-.5a1.35 1.35 0 0 0-.572-.144c-.143 0-12.009 2.216-21.587.787-10.436-1.573-18.728.357-19.085.428-.215.072-.358.215-.5.358-.072.214-.144.429-.072.572 0 .071.786 2.216-2.931 3.645-.286.143-.5.429-.429.715l1.43 12.652c0 .215.143.43.285.5.144.072.43.144.572.072 0 0 1.644-.5 2.645.215.572.357.857 1.143.93 2.144 0 .214.142.429.285.572.143.071.286.143.429.143h.214c.072 0 8.149-2.216 20.015-.572 10.221 1.43 20.443-.572 20.586-.643.214-.071.357-.143.5-.358.144-.214.144-.428.072-.571 0-.072-.787-2.216 2.93-3.646.286-.143.501-.429.43-.715l-1.43-12.652c0-.286-.143-.429-.286-.572ZM51.25 24.28c-.285.643-.285 1.215-.285 1.644-2.43.429-10.937 1.644-19.371.5-3.36-.5-6.433-.643-9.078-.643-5.361 0-9.15.715-10.722 1.072-.215-1.072-.715-1.858-1.43-2.43-1-.715-2.216-.715-3.073-.572L6.004 12.485C7.577 11.77 8.65 10.84 9.15 9.697c.285-.643.285-1.215.285-1.715 2.145-.43 9.364-1.502 17.87-.286 8.578 1.286 18.514-.215 21.301-.643.215 1.072.644 1.93 1.43 2.502 1 .715 2.216.715 3.073.572l1.287 11.365c-1.572.714-2.645 1.643-3.145 2.787Z",
    fill: "#F6B100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M57.04.62a.538.538 0 0 0-.357-.502c-.214-.143-.428-.143-.643-.07-.071.07-9.364 3.573-24.16 2.43C6.504.475.5 5.193.286 5.407.07 5.551 0 5.837 0 6.051l3.36 27.306c0 .214.143.429.357.572.143.071.214.071.358.071.07 0 .214 0 .285-.071.072-.072 8.72-3.932 28.52-1.859 20.373 2.145 26.949-3.288 27.235-3.574.214-.143.285-.357.214-.643L57.041.62ZM33.025 30.711c-16.87-1.787-25.662.643-28.378 1.573L1.501 6.338c1.501-.858 8.72-4.146 30.307-2.43 12.724 1 21.301-1.359 23.946-2.216l3.217 26.018c-1.502.93-8.578 4.79-25.948 3.002Z",
    fill: "#F6B100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })));
};
const CashGift = ({
  setShowAccountDetails,
  showAccountDetails
}) => {
  const {
    0: isHovered,
    1: setIsHovered
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("section", {
    className: "cashGift",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    },
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onClick: () => setShowAccountDetails(!showAccountDetails),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      transition: 'transform 0.3s ease-in-out',
      transform: isHovered ? 'scale(1.2)' : 'scale(1)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(Icon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  })), __jsx("span", {
    style: {
      textAlign: 'center',
      color: 'black',
      fontWeight: 600
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Cash Gift")));
};
/* harmony default export */ __webpack_exports__["default"] = (CashGift);

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
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-content  glassmorphism",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("div", {
    type: "button",
    className: "close guest-modal",
    onClick: () => setShowModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("span", {
    style: {
      color: 'white'
    },
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "\u2715")), __jsx("div", {
    className: "modal-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 82,
      columnNumber: 15
    }
  }, "Inform us of your availability"), __jsx("form", {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 93,
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
      lineNumber: 102,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 117,
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
      lineNumber: 126,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
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
      lineNumber: 142,
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
      lineNumber: 151,
      columnNumber: 19
    }
  })), __jsx("button", {
    type: "submit",
    className: "guest-form-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
/* harmony import */ var _cashGift__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cashGift */ "./pages/cashGift.jsx");
/* harmony import */ var _accountDetails__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./accountDetails */ "./pages/accountDetails.jsx");
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
      lineNumber: 21,
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
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M20.355 12.083c-1.643-1.62-2.156-4.77.41-5.83 1.187-.49 2.68-.365 3.928-.227 1.286.143 2.552.417 3.77.856 2.173.785 5.184 2.164 6.027 4.51.993 2.762-1.968 4.107-4.155 4.474-2.775.465-5.706.417-8.513.338-2.694-.076-5.454-.375-7.98-1.366-2.27-.892-4.59-2.333-5.723-4.58-1.043-2.066-.836-4.541.475-6.444C10.4 1.193 13.422.69 16.381.337A49.462 49.462 0 0 1 27.307.27c1.2.123 1.212 2.017 0 1.893a49.877 49.877 0 0 0-7.412-.223c-2.265.105-4.671.24-6.85.902-1.807.549-3.232 1.882-3.627 3.77-.414 1.978.708 3.732 2.23 4.903 3.25 2.5 7.672 2.811 11.615 2.817 2.225.004 4.55.074 6.745-.32.804-.144 1.895-.32 2.484-.957.814-.88-.32-1.938-1.01-2.467-1.83-1.406-4.144-2.283-6.416-2.619-.979-.145-2.579-.413-3.52 0-1.294.57-.576 2.063.147 2.777.87.856-.47 2.194-1.338 1.338Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M34.023 13.727c-1.494 5.45-3.158 10.933-7.099 15.157a22.39 22.39 0 0 1-6.03 4.581c-2.323 1.205-5.13 2.385-7.781 1.828-1.19-.25-.687-2.075.503-1.825 2.292.48 5.02-.888 6.97-1.986a20.808 20.808 0 0 0 5.396-4.373c3.446-3.904 4.869-8.97 6.216-13.884.32-1.174 2.147-.676 1.825.502Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M9.028 7.923c-1.266 8.344-2.59 18.37 3.722 25.133.83.89-.505 2.231-1.338 1.339-6.84-7.331-5.587-17.893-4.21-26.974.183-1.2 2.006-.69 1.826.502Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M14.877 34.343c-1.918 14.074-1.349 28.46 1.636 42.344.255 1.187-1.569 1.695-1.825.503a125.654 125.654 0 0 1-1.636-43.35c.164-1.202 1.988-.69 1.825.503Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M10.34 60.891c-.416-4.656-3.845-8.86-8.29-10.26-1.158-.365-.664-2.193.502-1.825 5.301 1.67 9.186 6.562 9.68 12.085.108 1.212-1.785 1.205-1.893 0Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M3.197 49.92c-.73 1.386-.92 2.937-.96 4.484-.037 1.476-.259 3.246.739 4.46.92 1.12 2.271 1.956 3.53 2.643a17.595 17.595 0 0 0 4.402 1.662c1.184.28.683 2.105-.503 1.825a19.37 19.37 0 0 1-5.07-1.974c-1.515-.855-3.106-1.922-4.12-3.362C.153 58.15.3 56.163.345 54.404c.049-1.89.327-3.75 1.217-5.44.569-1.077 2.202-.122 1.635.956Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M7.919 58.026c1.36 1.72 2.723 3.44 4.084 5.16.306.388.406.965 0 1.339-.342.313-1.01.414-1.338 0L6.58 59.363c-.306-.387-.406-.965 0-1.337.342-.314 1.01-.415 1.339 0ZM12.629 51.884a28.08 28.08 0 0 1 17.418-6.628c1.219-.03 1.218 1.863 0 1.892-5.863.14-11.594 2.288-16.08 6.074-.926.782-2.27-.55-1.338-1.338Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M32.267 46.673c-1.21 4.234-4.072 8.142-8.054 10.15-3.783 1.906-8.623 1.753-11.649-1.48-.831-.889.504-2.23 1.338-1.338 2.6 2.776 6.735 2.676 9.872.907 3.297-1.857 5.638-5.138 6.669-8.742.334-1.169 2.16-.672 1.824.503Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M14.35 53.138a40.707 40.707 0 0 1 5.912-1.533c.485-.087 1.043.132 1.163.661.105.463-.14 1.07-.66 1.165a40.616 40.616 0 0 0-5.913 1.533c-.468.16-1.054-.184-1.163-.661-.12-.526.158-.993.66-1.165Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("svg", {
    width: "40",
    height: "40",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "m34.613 27.737 1.437.088a6.111 6.111 0 0 1 1.925.2c.35.2.538.475.1.762-.437.288-1.1 0-1.5 0-.4 0-.925-.1-1.4-.125a3.296 3.296 0 0 0-1.05 0c-.35.113-.287.213-.487.613a7.577 7.577 0 0 1-1.763 2.15c-1.462 1.25-3.45 1.337-5.162 2.087.45-2.962 2.725-4.437 5.475-5-.975 0-2.675-.875-3.513-.462-1.487.637-3.75 1.5-4.212 3.25-.238 1.062-.188 2.637-1.538 2.962-1.35.325-1.725-.962-1.4-1.975-.875.45-2.05.088-1.862-1.05.187-1.137 1.525-1.25 2.387-1.362 2.213-.35 3.9-1.625 5.988-2.288a25.845 25.845 0 0 0-2.5-1.025 6.837 6.837 0 0 0-2.6.488c-.92.114-1.828.31-2.713.587-.64.34-1.19.828-1.6 1.425-.987 1.163-2.2 2.5-3.9 2.375-2.15-.2-1.912-2.65-.325-3.487-1.025 0-2.5-.638-2.4-1.875.088-1.55 1.963-1.738 3.125-1.425 1.097.419 2.166.907 3.2 1.462 1.938.788 3.75 0 5.763-.2a37.994 37.994 0 0 1-4.65-2.675 2.187 2.187 0 0 0-1.375-.55h-1.25a27.671 27.671 0 0 0-3.375.1c-.775 0-1.325.738-1.838 1.25a6.138 6.138 0 0 1-2.5 1.713 1.987 1.987 0 0 1-2.5-.625A2.075 2.075 0 0 1 7.713 22.4c-.975-.325-2.288-1.113-1.425-2.3 1.012-1.388 2.875-.65 3.937.15a5.875 5.875 0 0 0 2.938 1.6c1.482.087 2.968.087 4.45 0a23.74 23.74 0 0 1-2.038-2.013 5.787 5.787 0 0 0-.862-.962c-.852-.38-1.752-.641-2.675-.775a14.522 14.522 0 0 0-2.75-.775 5.611 5.611 0 0 0-2.688.625 6.251 6.251 0 0 1-3.137.525 1.95 1.95 0 0 1-1.675-2.063c.125-1.037.987-1.387 1.875-1.55-2.025-1.887.775-3.687 2.5-2.012 1.025 1.012 1.637 2.912 2.912 3.425 1.613.65 3.375.887 5 1.637-.937-1.25-1.85-2.5-2.725-3.75a6.875 6.875 0 0 0-2.775-2.975c-1.487-.675-3.45-1.487-3.75-3.35-.35-2.287 2.238-1.9 3.45-.95a2.163 2.163 0 0 1 1.4-2.5c1.25-.487 2.013.463 2.175 1.675.025 1.438-.6 2.825-.825 4.325-.262 2.213 2.15 4.875 3.363 6.6 0-1.85.7-4.062-.263-5.787-.625-1.425-2.612-3.825-1.25-5.425 1-1.138 2.238.125 2.575 1.15a1.462 1.462 0 0 1 2.5-.263c1.25 1.725-.75 3.238-1.662 4.513-1.1 1.512-.9 2.95-1.038 4.737a6.597 6.597 0 0 0-.162 2.025c.137.413.812.888 1.112 1.25a26.93 26.93 0 0 0 2.563 2.363c-.1-2.1.212-4.275-.513-6.25-.425-1.15-1.4-3.15-.5-4.288.9-1.137 1.9-.137 2.25.813a2.025 2.025 0 0 1 2.5-.65 1.95 1.95 0 0 1 .425 2.5c-.85 1.812-3.287 2.762-3.287 4.825-.125.95-.063 1.987-.1 2.95a2.023 2.023 0 0 0 0 .675c.137.275.862.612 1.112.775a35.377 35.377 0 0 0 5 2.637c-.287-1.25-.312-2.412-.512-3.75a5.338 5.338 0 0 0-1.388-2.812c-.737-.988-1.5-2.65-.387-3.688.875-.825 2.025-.062 2.35.888 1.05-1.6 3.662-1.438 3.75.737.087 1.65-1.35 2.725-2.5 3.625-.233.15-.419.363-.538.613a3.033 3.033 0 0 0-.187.725c-.057.836-.011 1.675.137 2.5 0 .512 0 1.25.413 1.512.522.28 1.082.482 1.662.6a20.13 20.13 0 0 0 4.188 1.038 6.075 6.075 0 0 1-2.188-4.2 9.1 9.1 0 0 1 .8-4.513c.825 1.25 2.013 2.35 2.763 3.675a5.763 5.763 0 0 1 .1 5.25c.166.013.333.013.5 0Z",
    fill: "#DFAE00",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M19.55 15.787s3.275-2.85 2.5-3.637c-.775-.788-2.112.912-2.112.912s-.638-1.85-1.463-1.25c-.825.6 1.075 3.975 1.075 3.975ZM15.188 10.788s2.975-2.913 1.962-3.475c-1.012-.563-1.75 1.25-1.75 1.25s-.975-2.5-1.787-1.788c-.813.713 1.575 4.013 1.575 4.013ZM9.662 10.437s1.963-4.587.488-4.837-1.4 2.6-1.4 2.6-2.913-1.95-3.113-.7c-.237 1.525 4.025 2.937 4.025 2.937ZM7.3 16.513s-1.8-3.625-2.9-3.2c-1.1.425.425 2.1.425 2.1s-2.088.275-1.963 1.512c.125 1.238 4.438-.412 4.438-.412ZM11.662 22.575S8.35 19.663 7.5 20.425c-.85.763 2.062 2.075 2.062 2.075s-3.1 1.475-2.062 2.2c1.25.888 4.162-2.125 4.162-2.125ZM18.588 27.375s-4.638-2.638-5.363-1.588c-.725 1.05 2.763 1.825 2.763 1.825s-2.825 1.938-1.513 2.638c1.313.7 4.113-2.875 4.113-2.875ZM25.85 20s3.75-2.5 2.287-3.512c-1.112-.763-2.5 1.087-2.5 1.087s-.812-2.1-1.712-1.4c-.9.7 1.925 3.825 1.925 3.825ZM23.963 30.175s-.438 2.85-1.25 3.15c-.813.3-.213-2.075-.213-2.075s-2.025.925-1.925 0c.1-.925 3.388-1.075 3.388-1.075Z",
    fill: "#F7D47D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M33.287 26.95a4.887 4.887 0 0 0 .125-3.35 6.362 6.362 0 0 0-1.887-3.05c-1.063 4.537 1.762 6.4 1.762 6.4ZM32.75 29.15c-.622.804-1.36 1.511-2.188 2.1-.874.555-1.826.976-2.825 1.25a6.713 6.713 0 0 1 2.113-2.137 11.588 11.588 0 0 1 2.9-1.213Z",
    fill: "#DCB3B4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 136,
      columnNumber: 21
    }
  }, "&"), " ", groomName) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, groomName, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
        lineNumber: 166,
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
        lineNumber: 172,
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
  const {
    0: showAccountDetails,
    1: setShowAccountDetails
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
      lineNumber: 221,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1703421768",
    __self: undefined
  }, "a.react-add-to-calendar__button span{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxhZGV3YWxlLXdlZGRpbmctaW52aXRlXFxwYWdlc1xcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThOUyxBQUc0QixlQUNXLDREQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcYWRld2FsZS13ZWRkaW5nLWludml0ZVxccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IFN0b3JpZXMgZnJvbSAnLi9zdG9yaWVzJztcbmltcG9ydCBQaWN0dXJlc0dyaWQgZnJvbSAnLi9waWN0dXJlR3JpZCc7XG5pbXBvcnQgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSBmcm9tICcuL2NvbGxlY3QtZ3Vlc3QtYXR0ZW5kYW5jZSc7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XG5pbXBvcnQgQ2FzaEdpZnQgZnJvbSAnLi9jYXNoR2lmdCc7XG5pbXBvcnQgQWNjb3VudERldGFpbHMgZnJvbSAnLi9hY2NvdW50RGV0YWlscyc7XG5cbmNvbnN0IExvdmVUaXRsZUljb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgc3JjPSdhc3NldHMvaW1hZ2VzL3dpbmUucG5nJ1xuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnODBweCcsXG4gICAgICB9fVxuICAgICAgYWx0PSd3aW5lIGlsbHVzdHJhdG9yJ1xuICAgIC8+XG4gICk7XG59O1xuY29uc3QgRXZlbnREYXRlSWNvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPSczNScgaGVpZ2h0PSc3OCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00yMC4zNTUgMTIuMDgzYy0xLjY0My0xLjYyLTIuMTU2LTQuNzcuNDEtNS44MyAxLjE4Ny0uNDkgMi42OC0uMzY1IDMuOTI4LS4yMjcgMS4yODYuMTQzIDIuNTUyLjQxNyAzLjc3Ljg1NiAyLjE3My43ODUgNS4xODQgMi4xNjQgNi4wMjcgNC41MS45OTMgMi43NjItMS45NjggNC4xMDctNC4xNTUgNC40NzQtMi43NzUuNDY1LTUuNzA2LjQxNy04LjUxMy4zMzgtMi42OTQtLjA3Ni01LjQ1NC0uMzc1LTcuOTgtMS4zNjYtMi4yNy0uODkyLTQuNTktMi4zMzMtNS43MjMtNC41OC0xLjA0My0yLjA2Ni0uODM2LTQuNTQxLjQ3NS02LjQ0NEMxMC40IDEuMTkzIDEzLjQyMi42OSAxNi4zODEuMzM3QTQ5LjQ2MiA0OS40NjIgMCAwIDEgMjcuMzA3LjI3YzEuMi4xMjMgMS4yMTIgMi4wMTcgMCAxLjg5M2E0OS44NzcgNDkuODc3IDAgMCAwLTcuNDEyLS4yMjNjLTIuMjY1LjEwNS00LjY3MS4yNC02Ljg1LjkwMi0xLjgwNy41NDktMy4yMzIgMS44ODItMy42MjcgMy43Ny0uNDE0IDEuOTc4LjcwOCAzLjczMiAyLjIzIDQuOTAzIDMuMjUgMi41IDcuNjcyIDIuODExIDExLjYxNSAyLjgxNyAyLjIyNS4wMDQgNC41NS4wNzQgNi43NDUtLjMyLjgwNC0uMTQ0IDEuODk1LS4zMiAyLjQ4NC0uOTU3LjgxNC0uODgtLjMyLTEuOTM4LTEuMDEtMi40NjctMS44My0xLjQwNi00LjE0NC0yLjI4My02LjQxNi0yLjYxOS0uOTc5LS4xNDUtMi41NzktLjQxMy0zLjUyIDAtMS4yOTQuNTctLjU3NiAyLjA2My4xNDcgMi43NzcuODcuODU2LS40NyAyLjE5NC0xLjMzOCAxLjMzOFonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTM0LjAyMyAxMy43MjdjLTEuNDk0IDUuNDUtMy4xNTggMTAuOTMzLTcuMDk5IDE1LjE1N2EyMi4zOSAyMi4zOSAwIDAgMS02LjAzIDQuNTgxYy0yLjMyMyAxLjIwNS01LjEzIDIuMzg1LTcuNzgxIDEuODI4LTEuMTktLjI1LS42ODctMi4wNzUuNTAzLTEuODI1IDIuMjkyLjQ4IDUuMDItLjg4OCA2Ljk3LTEuOTg2YTIwLjgwOCAyMC44MDggMCAwIDAgNS4zOTYtNC4zNzNjMy40NDYtMy45MDQgNC44NjktOC45NyA2LjIxNi0xMy44ODQuMzItMS4xNzQgMi4xNDctLjY3NiAxLjgyNS41MDJaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J005LjAyOCA3LjkyM2MtMS4yNjYgOC4zNDQtMi41OSAxOC4zNyAzLjcyMiAyNS4xMzMuODMuODktLjUwNSAyLjIzMS0xLjMzOCAxLjMzOS02Ljg0LTcuMzMxLTUuNTg3LTE3Ljg5My00LjIxLTI2Ljk3NC4xODMtMS4yIDIuMDA2LS42OSAxLjgyNi41MDJaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00xNC44NzcgMzQuMzQzYy0xLjkxOCAxNC4wNzQtMS4zNDkgMjguNDYgMS42MzYgNDIuMzQ0LjI1NSAxLjE4Ny0xLjU2OSAxLjY5NS0xLjgyNS41MDNhMTI1LjY1NCAxMjUuNjU0IDAgMCAxLTEuNjM2LTQzLjM1Yy4xNjQtMS4yMDIgMS45ODgtLjY5IDEuODI1LjUwM1onXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTEwLjM0IDYwLjg5MWMtLjQxNi00LjY1Ni0zLjg0NS04Ljg2LTguMjktMTAuMjYtMS4xNTgtLjM2NS0uNjY0LTIuMTkzLjUwMi0xLjgyNSA1LjMwMSAxLjY3IDkuMTg2IDYuNTYyIDkuNjggMTIuMDg1LjEwOCAxLjIxMi0xLjc4NSAxLjIwNS0xLjg5MyAwWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMy4xOTcgNDkuOTJjLS43MyAxLjM4Ni0uOTIgMi45MzctLjk2IDQuNDg0LS4wMzcgMS40NzYtLjI1OSAzLjI0Ni43MzkgNC40Ni45MiAxLjEyIDIuMjcxIDEuOTU2IDMuNTMgMi42NDNhMTcuNTk1IDE3LjU5NSAwIDAgMCA0LjQwMiAxLjY2MmMxLjE4NC4yOC42ODMgMi4xMDUtLjUwMyAxLjgyNWExOS4zNyAxOS4zNyAwIDAgMS01LjA3LTEuOTc0Yy0xLjUxNS0uODU1LTMuMTA2LTEuOTIyLTQuMTItMy4zNjJDLjE1MyA1OC4xNS4zIDU2LjE2My4zNDUgNTQuNDA0Yy4wNDktMS44OS4zMjctMy43NSAxLjIxNy01LjQ0LjU2OS0xLjA3NyAyLjIwMi0uMTIyIDEuNjM1Ljk1NlonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTcuOTE5IDU4LjAyNmMxLjM2IDEuNzIgMi43MjMgMy40NCA0LjA4NCA1LjE2LjMwNi4zODguNDA2Ljk2NSAwIDEuMzM5LS4zNDIuMzEzLTEuMDEuNDE0LTEuMzM4IDBMNi41OCA1OS4zNjNjLS4zMDYtLjM4Ny0uNDA2LS45NjUgMC0xLjMzNy4zNDItLjMxNCAxLjAxLS40MTUgMS4zMzkgMFpNMTIuNjI5IDUxLjg4NGEyOC4wOCAyOC4wOCAwIDAgMSAxNy40MTgtNi42MjhjMS4yMTktLjAzIDEuMjE4IDEuODYzIDAgMS44OTItNS44NjMuMTQtMTEuNTk0IDIuMjg4LTE2LjA4IDYuMDc0LS45MjYuNzgyLTIuMjctLjU1LTEuMzM4LTEuMzM4WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMzIuMjY3IDQ2LjY3M2MtMS4yMSA0LjIzNC00LjA3MiA4LjE0Mi04LjA1NCAxMC4xNS0zLjc4MyAxLjkwNi04LjYyMyAxLjc1My0xMS42NDktMS40OC0uODMxLS44ODkuNTA0LTIuMjMgMS4zMzgtMS4zMzggMi42IDIuNzc2IDYuNzM1IDIuNjc2IDkuODcyLjkwNyAzLjI5Ny0xLjg1NyA1LjYzOC01LjEzOCA2LjY2OS04Ljc0Mi4zMzQtMS4xNjkgMi4xNi0uNjcyIDEuODI0LjUwM1onXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTE0LjM1IDUzLjEzOGE0MC43MDcgNDAuNzA3IDAgMCAxIDUuOTEyLTEuNTMzYy40ODUtLjA4NyAxLjA0My4xMzIgMS4xNjMuNjYxLjEwNS40NjMtLjE0IDEuMDctLjY2IDEuMTY1YTQwLjYxNiA0MC42MTYgMCAwIDAtNS45MTMgMS41MzNjLS40NjguMTYtMS4wNTQtLjE4NC0xLjE2My0uNjYxLS4xMi0uNTI2LjE1OC0uOTkzLjY2LTEuMTY1WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5jb25zdCBIZWFkZXJMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lQmxvY2snLFxuICAgICAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAwcHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxKScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxzdmcgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyBmaWxsPSdub25lJz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdtMzQuNjEzIDI3LjczNyAxLjQzNy4wODhhNi4xMTEgNi4xMTEgMCAwIDEgMS45MjUuMmMuMzUuMi41MzguNDc1LjEuNzYyLS40MzcuMjg4LTEuMSAwLTEuNSAwLS40IDAtLjkyNS0uMS0xLjQtLjEyNWEzLjI5NiAzLjI5NiAwIDAgMC0xLjA1IDBjLS4zNS4xMTMtLjI4Ny4yMTMtLjQ4Ny42MTNhNy41NzcgNy41NzcgMCAwIDEtMS43NjMgMi4xNWMtMS40NjIgMS4yNS0zLjQ1IDEuMzM3LTUuMTYyIDIuMDg3LjQ1LTIuOTYyIDIuNzI1LTQuNDM3IDUuNDc1LTUtLjk3NSAwLTIuNjc1LS44NzUtMy41MTMtLjQ2Mi0xLjQ4Ny42MzctMy43NSAxLjUtNC4yMTIgMy4yNS0uMjM4IDEuMDYyLS4xODggMi42MzctMS41MzggMi45NjItMS4zNS4zMjUtMS43MjUtLjk2Mi0xLjQtMS45NzUtLjg3NS40NS0yLjA1LjA4OC0xLjg2Mi0xLjA1LjE4Ny0xLjEzNyAxLjUyNS0xLjI1IDIuMzg3LTEuMzYyIDIuMjEzLS4zNSAzLjktMS42MjUgNS45ODgtMi4yODhhMjUuODQ1IDI1Ljg0NSAwIDAgMC0yLjUtMS4wMjUgNi44MzcgNi44MzcgMCAwIDAtMi42LjQ4OGMtLjkyLjExNC0xLjgyOC4zMS0yLjcxMy41ODctLjY0LjM0LTEuMTkuODI4LTEuNiAxLjQyNS0uOTg3IDEuMTYzLTIuMiAyLjUtMy45IDIuMzc1LTIuMTUtLjItMS45MTItMi42NS0uMzI1LTMuNDg3LTEuMDI1IDAtMi41LS42MzgtMi40LTEuODc1LjA4OC0xLjU1IDEuOTYzLTEuNzM4IDMuMTI1LTEuNDI1IDEuMDk3LjQxOSAyLjE2Ni45MDcgMy4yIDEuNDYyIDEuOTM4Ljc4OCAzLjc1IDAgNS43NjMtLjJhMzcuOTk0IDM3Ljk5NCAwIDAgMS00LjY1LTIuNjc1IDIuMTg3IDIuMTg3IDAgMCAwLTEuMzc1LS41NWgtMS4yNWEyNy42NzEgMjcuNjcxIDAgMCAwLTMuMzc1LjFjLS43NzUgMC0xLjMyNS43MzgtMS44MzggMS4yNWE2LjEzOCA2LjEzOCAwIDAgMS0yLjUgMS43MTMgMS45ODcgMS45ODcgMCAwIDEtMi41LS42MjVBMi4wNzUgMi4wNzUgMCAwIDEgNy43MTMgMjIuNGMtLjk3NS0uMzI1LTIuMjg4LTEuMTEzLTEuNDI1LTIuMyAxLjAxMi0xLjM4OCAyLjg3NS0uNjUgMy45MzcuMTVhNS44NzUgNS44NzUgMCAwIDAgMi45MzggMS42YzEuNDgyLjA4NyAyLjk2OC4wODcgNC40NSAwYTIzLjc0IDIzLjc0IDAgMCAxLTIuMDM4LTIuMDEzIDUuNzg3IDUuNzg3IDAgMCAwLS44NjItLjk2MmMtLjg1Mi0uMzgtMS43NTItLjY0MS0yLjY3NS0uNzc1YTE0LjUyMiAxNC41MjIgMCAwIDAtMi43NS0uNzc1IDUuNjExIDUuNjExIDAgMCAwLTIuNjg4LjYyNSA2LjI1MSA2LjI1MSAwIDAgMS0zLjEzNy41MjUgMS45NSAxLjk1IDAgMCAxLTEuNjc1LTIuMDYzYy4xMjUtMS4wMzcuOTg3LTEuMzg3IDEuODc1LTEuNTUtMi4wMjUtMS44ODcuNzc1LTMuNjg3IDIuNS0yLjAxMiAxLjAyNSAxLjAxMiAxLjYzNyAyLjkxMiAyLjkxMiAzLjQyNSAxLjYxMy42NSAzLjM3NS44ODcgNSAxLjYzNy0uOTM3LTEuMjUtMS44NS0yLjUtMi43MjUtMy43NWE2Ljg3NSA2Ljg3NSAwIDAgMC0yLjc3NS0yLjk3NWMtMS40ODctLjY3NS0zLjQ1LTEuNDg3LTMuNzUtMy4zNS0uMzUtMi4yODcgMi4yMzgtMS45IDMuNDUtLjk1YTIuMTYzIDIuMTYzIDAgMCAxIDEuNC0yLjVjMS4yNS0uNDg3IDIuMDEzLjQ2MyAyLjE3NSAxLjY3NS4wMjUgMS40MzgtLjYgMi44MjUtLjgyNSA0LjMyNS0uMjYyIDIuMjEzIDIuMTUgNC44NzUgMy4zNjMgNi42IDAtMS44NS43LTQuMDYyLS4yNjMtNS43ODctLjYyNS0xLjQyNS0yLjYxMi0zLjgyNS0xLjI1LTUuNDI1IDEtMS4xMzggMi4yMzguMTI1IDIuNTc1IDEuMTVhMS40NjIgMS40NjIgMCAwIDEgMi41LS4yNjNjMS4yNSAxLjcyNS0uNzUgMy4yMzgtMS42NjIgNC41MTMtMS4xIDEuNTEyLS45IDIuOTUtMS4wMzggNC43MzdhNi41OTcgNi41OTcgMCAwIDAtLjE2MiAyLjAyNWMuMTM3LjQxMy44MTIuODg4IDEuMTEyIDEuMjVhMjYuOTMgMjYuOTMgMCAwIDAgMi41NjMgMi4zNjNjLS4xLTIuMS4yMTItNC4yNzUtLjUxMy02LjI1LS40MjUtMS4xNS0xLjQtMy4xNS0uNS00LjI4OC45LTEuMTM3IDEuOS0uMTM3IDIuMjUuODEzYTIuMDI1IDIuMDI1IDAgMCAxIDIuNS0uNjUgMS45NSAxLjk1IDAgMCAxIC40MjUgMi41Yy0uODUgMS44MTItMy4yODcgMi43NjItMy4yODcgNC44MjUtLjEyNS45NS0uMDYzIDEuOTg3LS4xIDIuOTVhMi4wMjMgMi4wMjMgMCAwIDAgMCAuNjc1Yy4xMzcuMjc1Ljg2Mi42MTIgMS4xMTIuNzc1YTM1LjM3NyAzNS4zNzcgMCAwIDAgNSAyLjYzN2MtLjI4Ny0xLjI1LS4zMTItMi40MTItLjUxMi0zLjc1YTUuMzM4IDUuMzM4IDAgMCAwLTEuMzg4LTIuODEyYy0uNzM3LS45ODgtMS41LTIuNjUtLjM4Ny0zLjY4OC44NzUtLjgyNSAyLjAyNS0uMDYyIDIuMzUuODg4IDEuMDUtMS42IDMuNjYyLTEuNDM4IDMuNzUuNzM3LjA4NyAxLjY1LTEuMzUgMi43MjUtMi41IDMuNjI1LS4yMzMuMTUtLjQxOS4zNjMtLjUzOC42MTNhMy4wMzMgMy4wMzMgMCAwIDAtLjE4Ny43MjVjLS4wNTcuODM2LS4wMTEgMS42NzUuMTM3IDIuNSAwIC41MTIgMCAxLjI1LjQxMyAxLjUxMi41MjIuMjggMS4wODIuNDgyIDEuNjYyLjZhMjAuMTMgMjAuMTMgMCAwIDAgNC4xODggMS4wMzggNi4wNzUgNi4wNzUgMCAwIDEtMi4xODgtNC4yIDkuMSA5LjEgMCAwIDEgLjgtNC41MTNjLjgyNSAxLjI1IDIuMDEzIDIuMzUgMi43NjMgMy42NzVhNS43NjMgNS43NjMgMCAwIDEgLjEgNS4yNWMuMTY2LjAxMy4zMzMuMDEzLjUgMFonXG4gICAgICAgICAgZmlsbD0nI0RGQUUwMCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdNMTkuNTUgMTUuNzg3czMuMjc1LTIuODUgMi41LTMuNjM3Yy0uNzc1LS43ODgtMi4xMTIuOTEyLTIuMTEyLjkxMnMtLjYzOC0xLjg1LTEuNDYzLTEuMjVjLS44MjUuNiAxLjA3NSAzLjk3NSAxLjA3NSAzLjk3NVpNMTUuMTg4IDEwLjc4OHMyLjk3NS0yLjkxMyAxLjk2Mi0zLjQ3NWMtMS4wMTItLjU2My0xLjc1IDEuMjUtMS43NSAxLjI1cy0uOTc1LTIuNS0xLjc4Ny0xLjc4OGMtLjgxMy43MTMgMS41NzUgNC4wMTMgMS41NzUgNC4wMTNaTTkuNjYyIDEwLjQzN3MxLjk2My00LjU4Ny40ODgtNC44MzctMS40IDIuNi0xLjQgMi42LTIuOTEzLTEuOTUtMy4xMTMtLjdjLS4yMzcgMS41MjUgNC4wMjUgMi45MzcgNC4wMjUgMi45MzdaTTcuMyAxNi41MTNzLTEuOC0zLjYyNS0yLjktMy4yYy0xLjEuNDI1LjQyNSAyLjEuNDI1IDIuMXMtMi4wODguMjc1LTEuOTYzIDEuNTEyYy4xMjUgMS4yMzggNC40MzgtLjQxMiA0LjQzOC0uNDEyWk0xMS42NjIgMjIuNTc1UzguMzUgMTkuNjYzIDcuNSAyMC40MjVjLS44NS43NjMgMi4wNjIgMi4wNzUgMi4wNjIgMi4wNzVzLTMuMSAxLjQ3NS0yLjA2MiAyLjJjMS4yNS44ODggNC4xNjItMi4xMjUgNC4xNjItMi4xMjVaTTE4LjU4OCAyNy4zNzVzLTQuNjM4LTIuNjM4LTUuMzYzLTEuNTg4Yy0uNzI1IDEuMDUgMi43NjMgMS44MjUgMi43NjMgMS44MjVzLTIuODI1IDEuOTM4LTEuNTEzIDIuNjM4YzEuMzEzLjcgNC4xMTMtMi44NzUgNC4xMTMtMi44NzVaTTI1Ljg1IDIwczMuNzUtMi41IDIuMjg3LTMuNTEyYy0xLjExMi0uNzYzLTIuNSAxLjA4Ny0yLjUgMS4wODdzLS44MTItMi4xLTEuNzEyLTEuNGMtLjkuNyAxLjkyNSAzLjgyNSAxLjkyNSAzLjgyNVpNMjMuOTYzIDMwLjE3NXMtLjQzOCAyLjg1LTEuMjUgMy4xNWMtLjgxMy4zLS4yMTMtMi4wNzUtLjIxMy0yLjA3NXMtMi4wMjUuOTI1LTEuOTI1IDBjLjEtLjkyNSAzLjM4OC0xLjA3NSAzLjM4OC0xLjA3NVonXG4gICAgICAgICAgZmlsbD0nI0Y3RDQ3RCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdNMzMuMjg3IDI2Ljk1YTQuODg3IDQuODg3IDAgMCAwIC4xMjUtMy4zNSA2LjM2MiA2LjM2MiAwIDAgMC0xLjg4Ny0zLjA1Yy0xLjA2MyA0LjUzNyAxLjc2MiA2LjQgMS43NjIgNi40Wk0zMi43NSAyOS4xNWMtLjYyMi44MDQtMS4zNiAxLjUxMS0yLjE4OCAyLjEtLjg3NC41NTUtMS44MjYuOTc2LTIuODI1IDEuMjVhNi43MTMgNi43MTMgMCAwIDEgMi4xMTMtMi4xMzcgMTEuNTg4IDExLjU4OCAwIDAgMSAyLjktMS4yMTNaJ1xuICAgICAgICAgIGZpbGw9JyNEQ0IzQjQnXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5jb25zdCB0cmFuc2xhdGVDb25maWcgPSAoYXBwQ29uZmlnLCBsb2NhbGUpID0+IHtcbiAgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSBkZWZhdWx0TG9jYWxlKSB7XG4gICAgcmV0dXJuIGFwcENvbmZpZztcbiAgfVxuICAvLyBSZXBsYWNlIGNvbmZpZyB3aXRoIGxhbmdcbiAgY29uc3QgY29uZmlnTGFuZyA9IGFwcENvbmZpZy5sYW5nW2xvY2FsZV07XG4gIGlmIChjb25maWdMYW5nID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbG9jYWxlOiAnLCBsb2NhbGUpO1xuICB9XG4gIHJldHVybiB7IC4uLmFwcENvbmZpZywgLi4uY29uZmlnTGFuZyB9O1xufTtcblxuY29uc3QgU2hvd0ludml0ZSA9ICh7IGN1cnJlbnRVcmwsIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsIGd1ZXN0IH0pID0+IHtcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9uKGd1ZXN0LmxvY2FsZSk7XG5cbiAgLy8gSW5pdGlhdGUgY29uZmlnIHZhcmlhYmxlc1xuICBjb25zdCB7XG4gICAgbG9nbyxcbiAgICBvZ1RhZ3MsXG4gICAgY291cGxlSW5mbyxcbiAgICB2ZW51ZSxcbiAgICB3ZWRkaW5nRGF5LFxuICAgIHdlZGRpbmdEYXRlLFxuICAgIHdlZGRpbmdUaW1lLFxuICAgIGNhbGVuZGFySW5mbyxcbiAgfSA9IHRyYW5zbGF0ZUNvbmZpZyhhcHBDb25maWcsIGd1ZXN0LmxvY2FsZSk7XG4gIGNvbnN0IHsgYnJpZGVOYW1lLCBncm9vbU5hbWUsIGhhc2h0YWcsIGNvdXBsZU5hbWVGb3JtYXQgfSA9IGNvdXBsZUluZm87XG5cbiAgY29uc3QgY291cGxlTmFtZVN0ciA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJ1xuICAgICAgPyBgJHtncm9vbU5hbWV9ICYgJHticmlkZU5hbWV9YFxuICAgICAgOiBgJHticmlkZU5hbWV9ICYgJHtncm9vbU5hbWV9YDtcbiAgY29uc3QgY291cGxlTmFtZSA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJyA/IChcbiAgICAgIDw+XG4gICAgICAgIHticmlkZU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7Z3Jvb21OYW1lfVxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIDw+XG4gICAgICAgIHtncm9vbU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7YnJpZGVOYW1lfVxuICAgICAgPC8+XG4gICAgKTtcblxuICAvLyBWZW51ZSBpbmZvXG4gIGNvbnN0IHZlbnVlQnJpZWYgPSBgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWA7XG4gIGNvbnN0IHdlZGRpbmdEYXRlQnJpZWYgPSBgJHt3ZWRkaW5nRGF5fSwgJHt3ZWRkaW5nRGF0ZX1gO1xuXG4gIC8vIEV2ZW50IGluZm9cbiAgY29uc3QgZXZlbnRUaXRsZSA9IGAke2NvdXBsZU5hbWVTdHJ9J3MgV2VkZGluZ2A7XG4gIGxldCBldmVudERlc2NyaXB0aW9uID0gYCR7d2VkZGluZ0RhdGVCcmllZn0gYXQgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fWA7XG4gIGlmIChndWVzdC5uYW1lKSB7XG4gICAgZXZlbnREZXNjcmlwdGlvbiA9IGBEZWFyICR7Z3Vlc3QubmFtZX0sIHlvdSBhcmUgY29yZGlhbGx5IGludml0ZWQgdG8gb3VyIHdlZGRpbmcgb24gJHt3ZWRkaW5nRGF0ZX0gYXQgJHt2ZW51ZS5uYW1lfS4gTG9va2luZyBmb3J3YXJkIHRvIHNlZWluZyB5b3UhYDtcbiAgfVxuXG4gIC8vIENhbGVuZGFyIHBheWxvYWRcbiAgY29uc3QgY2FsZW5kYXJFdmVudCA9IHtcbiAgICB0aXRsZTogZXZlbnRUaXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZXZlbnREZXNjcmlwdGlvbixcbiAgICBsb2NhdGlvbjogYCR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gLFxuICAgIHN0YXJ0VGltZTogY2FsZW5kYXJJbmZvLnRpbWVTdGFydElTTyxcbiAgICBlbmRUaW1lOiBjYWxlbmRhckluZm8udGltZUVuZElTTyxcbiAgfTtcblxuICBjb25zdCBldmVudFNjaGVkdWxlID0gW1xuICAgIHtcbiAgICAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgICAgZXZlbnQ6ICdDaHVyY2gnLFxuICAgICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgICB0aW1lOiAnMTJwbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAgIGV2ZW50OiAnUmVjZXB0aW9uJyxcbiAgICAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgICAgdGltZTogJzJwbScsXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAvLyAgIGV2ZW50OiAnRW5nYWdlbWVudCcsXG4gICAgLy8gICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAvLyAgIHRpbWU6ICcycG0nLFxuICAgIC8vIH0sXG4gIF07XG5cbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dBY2NvdW50RGV0YWlscywgc2V0U2hvd0FjY291bnREZXRhaWxzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgfSwgMTAwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYuY3VycmVudDtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRQb3NpdGlvbiA8IHdpbmRvd0hlaWdodCAqIDAuOSkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtZWxlbWVudCcpOyAvLyBBZGQgdGhlIENTUyBjbGFzcyB3aGVuIHRoZSBlbGVtZW50IGlzIDc1JSB2aXNpYmxlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZC1lbGVtZW50Jyk7IC8vIFJlbW92ZSB0aGUgQ1NTIGNsYXNzIGlmIG5vdCB2aXNpYmxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBSdW4gdGhpcyBlZmZlY3Qgb25seSBvbmNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYS5yZWFjdC1hZGQtdG8tY2FsZW5kYXJfX2J1dHRvbiBzcGFuIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZFxuICAgICAgICB7Li4ub2dUYWdzfVxuICAgICAgICB0aXRsZT17ZXZlbnRUaXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2V2ZW50RGVzY3JpcHRpb259XG4gICAgICAgIGd1ZXN0TmFtZT17Z3Vlc3QubmFtZX1cbiAgICAgICAgdXJsPXtjdXJyZW50VXJsfVxuICAgICAgICBkYXRlPXt3ZWRkaW5nRGF0ZUJyaWVmfVxuICAgICAgICBtb2RpZmllZFRpbWU9e2d1ZXN0TGlzdExhc3RVcGRhdGVkQXR9XG4gICAgICAgIHZlbnVlPXt2ZW51ZUJyaWVmfVxuICAgICAgICBsb2dvPXtyZXNvbHZlUGF0aChvZ1RhZ3MubG9nbyl9XG4gICAgICAgIGF1dGhvcj17cmVzb2x2ZVBhdGgoJy8nKX1cbiAgICAgIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hlYWRlcl9hcmVhJz5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2hlYWRlci1jb250YWluZXInPlxuICAgICAgICAgIDxIZWFkZXJMb2dvIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoZWFkZXItbG9nby10ZXh0Jz5UaGUgQWtpbmxhZ3VuJ3MgUGFydHk8L3NwYW4+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPSdob21lJyBjbGFzc05hbWU9J2hlYWRlcl9zbGlkZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay1saXN0IGRyYWdnYWJsZSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stdHJhY2snIHN0eWxlPXt7IG9wYWNpdHk6IDEgfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZ19jb3ZlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDEyKS5qcGcnXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGFsdD0nYmFja2dyb3VuZCBpbWFnZSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgY29udGVudC1vdmVybGF5Jz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMjQnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX2NvbnRlbnQgdGV4dC1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDYwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfc3ViX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC4ycycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3NpdGVJbnRybycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuN3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC43cycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdXBsZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnLCBtYXJnaW46ICcwIGF1dG8nIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNodGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLm5hbWV9LCB7dmVudWUuY2l0eX0sIHt2ZW51ZS5jb3VudHJ5fS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGlkPSdjb21pbmdfc29vbicgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9hcmVhIHB0LTIwIHBiLTcwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX3NoYXBlXzEnIHN0eWxlPXt7IHpJbmRleDogMSB9fT5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMS5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTQnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHB0LTUwIHdvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuMnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dCgnZXZlbnREYXRlJyl9OjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3dlZGRpbmdEYXRlQnJpZWZ9PC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QWRkVG9DYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICBldmVudD17Y2FsZW5kYXJFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9e3QoJ2J0bkFkZFRvTXlDYWxlbmRhcicpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy9zZWN0aW9uX3NoYXBlLnBuZycgYWx0PSdTaGFwZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9jb3VudCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC0yMCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNjAsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZV9jb3VudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMzAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvdW50X2NvbnRlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxLCBwYWRkaW5nVG9wOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmVudWUubWFwVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy9iZXZlbnQucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2JldmVudCBjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc3NXZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUuYWRkcmVzc0xpbmUxfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8yJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMi5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29udGFjdCcgY2xhc3NOYW1lPSdjb250YWN0X2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhY3Rfd3JhcHBlciB3b3cgZmFkZUluVXBCaWcnXG4gICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjRzJ1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMzAsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC40cycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW5VcCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgcmVmPXtlbGVtZW50UmVmfSBjbGFzc05hbWU9J2NvbnRhaW5lci1ldmVudExpbmV1cCc+XG4gICAgICAgICAgICAgIHtldmVudFNjaGVkdWxlLm1hcCgoZXYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0aW1lLCBkYXRlLCBldmVudCwgaWNvbiB9ID0gZXY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudExpbmV1cCcga2V5PXtldmVudH0+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtldmVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3RpbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogZm9ybSAqL31cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy05Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSB0ZXh0LWNlbnRlciBwYi0zMCc+XG4gICAgICAgICAgICAgICAgICB7Z3Vlc3QubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dCgnaW52aXRhdGlvbkdyZWV0aW5nJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjVyZW0nIH19PntndWVzdC5uYW1lfSw8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmFkZUluJz5cbiAgICAgICAgICAgIDxoNFxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29sb3JzIG9mIHRoZSBkYXlcbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBnYXA6ICc1MHB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRlYWwgR3JlZW5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwODA4MCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgR29sZFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZDU5YTU3JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J2xvdmUtdGl0bGUtY29udGFpbmVyIGZhZGVJblVwQmlnIGZhZGVJbidcbiAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgIGRhdGEtd293LWRlbGF5PScwLjRzJ1xuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMb3ZlVGl0bGVJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG92ZS10aXRsZSc+XG4gICAgICAgICAgTXkgaGVhcnQgaXMgeW91cnMgdG8gaG9sZCBhbmQgY2hlcmlzaCBmb3IgdGhlIHJlc3Qgb2Ygb3VyIGRheXMuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGFydGljbGVcbiAgICAgICAgcmVmPXtlbGVtZW50UmVmfVxuICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgIGRhdGEtZGVsYXk9JzAuN3MnXG4gICAgICAgIGNsYXNzTmFtZT0nc3Rvcmllcy1jb250YWluZXIgZmFkZUluVXBCaWcnXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPFN0b3JpZXMgLz5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0ncGljdHVyZS1ncmlkLWNvbnRhaW5lcic+XG4gICAgICAgIDxQaWN0dXJlc0dyaWQgLz5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIHsvKiBGb290ZXIgc2VjdGlvbiAqL31cbiAgICAgIDxmb290ZXIgaWQ9J2Zvb3RlcicgY2xhc3NOYW1lPSdmb290ZXJfYXJlYSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfc2hhcGVfMSc+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl93aWRnZXQgcHQtNTAgcGItMTAgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9sb2dvJz5cbiAgICAgICAgICAgICAgey8qIHtsb2dvLmZvb3RlckxvZ28gJiZcbiAgICAgICAgICAgICAgICAobG9nby5mb290ZXJMb2dvVHlwZSA9PT0gJ21wNCcgPyAoXG4gICAgICAgICAgICAgICAgICA8dmlkZW8gaGVpZ2h0PScxNDAnIGF1dG9QbGF5IG11dGVkIGxvb3A+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtsb2dvLmZvb3RlckxvZ299IHR5cGU9J3ZpZGVvL21wNCcgLz5cbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgKSA6ICggKi99XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDkwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17bG9nby5mb290ZXJMb2dvfSAvPiAqL31cbiAgICAgICAgICAgICAgey8qICkpfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl90aXRsZSAnPlxuICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RpdGxlJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvdXBsZU5hbWV9XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoNVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogJyNEM0QzRDMnLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzQwcHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAjRFdlZGRpbmdcbiAgICAgICAgPC9oNT5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgey8qIDxDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgIC8+ICovfVxuICAgICAgey8qIHshc2hvd01vZGFsICYmICggKi99XG4gICAgICA8Q2FzaEdpZnRcbiAgICAgICAgc2hvd0FjY291bnREZXRhaWxzPXtzaG93QWNjb3VudERldGFpbHN9XG4gICAgICAgIHNldFNob3dBY2NvdW50RGV0YWlscz17c2V0U2hvd0FjY291bnREZXRhaWxzfVxuICAgICAgLz5cbiAgICAgIHsvKiApfSAqL31cbiAgICAgIHtzaG93QWNjb3VudERldGFpbHMgJiYgKFxuICAgICAgICA8QWNjb3VudERldGFpbHNcbiAgICAgICAgICBzaG93QWNjb3VudERldGFpbHM9e3Nob3dBY2NvdW50RGV0YWlsc31cbiAgICAgICAgICBzZXRTaG93QWNjb3VudERldGFpbHM9e3NldFNob3dBY2NvdW50RGV0YWlsc31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaG93SW52aXRlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcbiAgY29uc3QgbG9jYWxlUGFyYW1zID0gY3R4LnF1ZXJ5LmxhbmcgfHwgZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgZW1wdHlHdWVzdFBhcmFtcyA9IHtcbiAgICBndWVzdDoge1xuICAgICAgZ3Vlc3RJZDogJycsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGdyZWV0aW5nOiAnJyxcbiAgICAgIGxvY2FsZTogbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgY3VycmVudFVybCA9IHJlc29sdmVQYXRoKGN0eC5yZXEudXJsKTtcbiAgY29uc3QgZ3Vlc3RJZCA9IGN0eC5xdWVyeS51O1xuICBpZiAoIWd1ZXN0SWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGd1ZXN0RGF0YSA9IGd1ZXN0TGlzdC5kYXRhO1xuICBjb25zdCBndWVzdExpc3RMYXN0VXBkYXRlZEF0ID0gZ3Vlc3RMaXN0Lm1ldGEubGFzdFVwZGF0ZWRBdDtcbiAgY29uc3QgeyBuYW1lLCBncmVldGluZywgbG9jYWxlIH0gPVxuICAgIGd1ZXN0RGF0YS5maWx0ZXIoKGd1ZXN0KSA9PiBndWVzdC5ndWVzdElkID09PSBndWVzdElkKVswXSB8fCB7fTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVcmwsXG4gICAgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCxcbiAgICBndWVzdDoge1xuICAgICAgbmFtZSxcbiAgICAgIGdyZWV0aW5nLFxuICAgICAgZ3Vlc3RJZCxcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0ludml0ZTtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\USER\\\\Documents\\\\adewale-wedding-invite\\\\pages\\\\index.jsx */"), __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, ogTags, {
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
      lineNumber: 230,
      columnNumber: 7
    }
  })), __jsx("section", {
    className: "jsx-1703421768" + " " + 'header_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: "jsx-1703421768" + " " + 'header-container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 9
    }
  }, __jsx(HeaderLogo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "jsx-1703421768" + " " + 'header-logo-text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 11
    }
  }, "The Akinlagun's Party")), __jsx("div", {
    id: "home",
    className: "jsx-1703421768" + " " + 'header_slider',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'slick-list draggable',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
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
      lineNumber: 249,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'bg_cover d-flex align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "assets/images/dwedding (12).jpg",
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
      lineNumber: 251,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1703421768" + " " + ' content-overlay',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-24',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
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
      lineNumber: 263,
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
      lineNumber: 267,
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
      lineNumber: 272,
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
      lineNumber: 281,
      columnNumber: 25
    }
  }, coupleName), __jsx("h5", {
    "data-animation": "fadeInUp",
    "data-delay": "1s",
    style: {
      animationDelay: '1s',
      margin: '0 auto'
    },
    className: "jsx-1703421768" + " " + 'location',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
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
      lineNumber: 298,
      columnNumber: 25
    }
  }, venue.name, ", ", venue.city, ", ", venue.country, ".")))))))))), __jsx("section", {
    id: "coming_soon",
    className: "jsx-1703421768" + " " + 'coming_soon_area pt-20 pb-70',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
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
      lineNumber: 317,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
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
      lineNumber: 323,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 17
    }
  }, t('eventDate'), ":"), __jsx("p", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
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
      lineNumber: 337,
      columnNumber: 17
    }
  }, __jsx(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    event: calendarEvent,
    buttonLabel: t('btnAddToMyCalendar'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 19
    }
  })), __jsx("img", {
    src: "assets/images/section_shape.png",
    alt: "Shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-8',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
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
      lineNumber: 352,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_count d-flex justify-content-end pt-20',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
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
      lineNumber: 364,
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
      lineNumber: 373,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: venue.mapUrl,
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
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
      lineNumber: 378,
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
      lineNumber: 384,
      columnNumber: 23
    }
  }, venue.addressLine1)))))))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_shape_2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-2.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 11
    }
  }))), __jsx("section", {
    id: "contact",
    className: "jsx-1703421768" + " " + 'contact_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
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
      lineNumber: 410,
      columnNumber: 11
    }
  }, __jsx("div", {
    ref: elementRef,
    className: "jsx-1703421768" + " " + 'container-eventLineup',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
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
        lineNumber: 427,
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
        lineNumber: 429,
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
        lineNumber: 438,
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
        lineNumber: 447,
        columnNumber: 21
      }
    }, time));
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-9',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'section_title text-center pb-30',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
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
      lineNumber: 466,
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
      lineNumber: 475,
      columnNumber: 23
    }
  }, guest.name, ",")))))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'fadeIn',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
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
      lineNumber: 483,
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
      lineNumber: 491,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
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
      lineNumber: 500,
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
      lineNumber: 508,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
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
      lineNumber: 519,
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
      lineNumber: 527,
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
      lineNumber: 542,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 9
    }
  }, __jsx(LoveTitleIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'love-title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
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
      lineNumber: 557,
      columnNumber: 7
    }
  }, __jsx(_stories__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 9
    }
  })), __jsx("article", {
    className: "jsx-1703421768" + " " + 'picture-grid-container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 7
    }
  }, __jsx(_pictureGrid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 9
    }
  })), __jsx("footer", {
    id: "footer",
    className: "jsx-1703421768" + " " + 'footer_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_shape_1',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_widget pt-50 pb-10 text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_logo',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
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
      lineNumber: 584,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_title ',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
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
      lineNumber: 593,
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
      lineNumber: 604,
      columnNumber: 9
    }
  }, "#DWedding")), __jsx(_cashGift__WEBPACK_IMPORTED_MODULE_15__["default"], {
    showAccountDetails: showAccountDetails,
    setShowAccountDetails: setShowAccountDetails,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 7
    }
  }), showAccountDetails && __jsx(_accountDetails__WEBPACK_IMPORTED_MODULE_16__["default"], {
    showAccountDetails: showAccountDetails,
    setShowAccountDetails: setShowAccountDetails,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 9
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
  const pictures = ['assets/images/dwedding (11).jpg', 'assets/images/dwedding (13).jpg', 'assets/images/couple (1).jpg', 'assets/images/dwedding (1).jpg', 'assets/images/dwedding (2).jpg', 'assets/images/couple (4).jpg', 'assets/images/dwedding (5).jpg', 'assets/images/dwedding (6).jpg', 'assets/images/dwedding (14).jpg', 'assets/images/couple (7).jpg', 'assets/images/dwedding (7).jpg', 'assets/images/couple (8).jpg', 'assets/images/dwedding (8).jpg', 'assets/images/couple (9).jpg', 'assets/images/dwedding (9).jpg', 'assets/images/couple (13).jpg', 'assets/images/dwedding (10).jpg'];
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
  const handleCloseModal = () => {
    setSelectedPicture(null);
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "picture-grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: picture,
    className: "grid-img",
    alt: `Picture ${index + 1}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }))))), selectedPicture && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "modal fade",
    id: "myModal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-dialog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      position: 'absolute',
      right: 20,
      top: 20,
      display: 'flex',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: 'grey',
      zIndex: 20,
      borderRadius: 50,
      height: '30px',
      width: '30px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: handleCloseModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx("span", {
    style: {
      color: 'white'
    },
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 96,
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
    name: 'Lagos Airport Hotel, Bevent Center',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWNjb3VudERldGFpbHMuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2Nhc2hHaWZ0LmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xsZWN0LWd1ZXN0LWF0dGVuZGFuY2UuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9waWN0dXJlR3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3Rvcmllcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Jlc29sdmVQYXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtYWlsanMtY29tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaTE4bi1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInFyY29kZS5yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYWRkLXRvLWNhbGVuZGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYmx1cmhhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3ZWV0YWxlcnQyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dpcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dpcGVyL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiQWNjb3VudERldGFpbHMiLCJzaG93QWNjb3VudERldGFpbHMiLCJzZXRTaG93QWNjb3VudERldGFpbHMiLCJfX2pzeCIsImNsYXNzTmFtZSIsInRhYkluZGV4Iiwicm9sZSIsInN0eWxlIiwiZGlzcGxheSIsImNvbG9yIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwidHlwZSIsIm9uQ2xpY2siLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZyIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpblJpZ2h0IiwiSWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbCIsInhtbG5zIiwiZCIsIkNhc2hHaWZ0IiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwidXNlU3RhdGUiLCJnYXAiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwiQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSIsInNldFNob3dNb2RhbCIsInNob3dNb2RhbCIsIm5hbWUiLCJzZXROYW1lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaHR0cFN0YXR1cyIsInN0YXR1c0NvZGUiLCJTd2FsIiwiZmlyZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmQiLCJwcm9jZXNzIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiY2F0Y2giLCJlcnIiLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyb3dzIiwiTG92ZVRpdGxlSWNvbiIsInNyYyIsImFsdCIsIkV2ZW50RGF0ZUljb24iLCJIZWFkZXJMb2dvIiwiYmFja2ZhY2VWaXNpYmlsaXR5IiwidHJhbnNsYXRlQ29uZmlnIiwiYXBwQ29uZmlnIiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNvbmZpZ0xhbmciLCJsYW5nIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJfb2JqZWN0U3ByZWFkIiwiU2hvd0ludml0ZSIsImN1cnJlbnRVcmwiLCJndWVzdExpc3RMYXN0VXBkYXRlZEF0IiwiZ3Vlc3QiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJsb2dvIiwib2dUYWdzIiwiY291cGxlSW5mbyIsInZlbnVlIiwid2VkZGluZ0RheSIsIndlZGRpbmdEYXRlIiwid2VkZGluZ1RpbWUiLCJjYWxlbmRhckluZm8iLCJicmlkZU5hbWUiLCJncm9vbU5hbWUiLCJoYXNodGFnIiwiY291cGxlTmFtZUZvcm1hdCIsImNvdXBsZU5hbWVTdHIiLCJjb3VwbGVOYW1lIiwiUmVhY3QiLCJGcmFnbWVudCIsInZlbnVlQnJpZWYiLCJjaXR5IiwiY291bnRyeSIsIndlZGRpbmdEYXRlQnJpZWYiLCJldmVudFRpdGxlIiwiZXZlbnREZXNjcmlwdGlvbiIsImNhbGVuZGFyRXZlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJzdGFydFRpbWUiLCJ0aW1lU3RhcnRJU08iLCJlbmRUaW1lIiwidGltZUVuZElTTyIsImV2ZW50U2NoZWR1bGUiLCJpY29uIiwiZXZlbnQiLCJkYXRlIiwidGltZSIsInVzZUVmZmVjdCIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJoYW5kbGVTY3JvbGwiLCJlbGVtZW50IiwiY3VycmVudCIsImVsZW1lbnRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfSlNYU3R5bGUiLCJIZWFkIiwiX2V4dGVuZHMiLCJndWVzdE5hbWUiLCJ1cmwiLCJtb2RpZmllZFRpbWUiLCJyZXNvbHZlUGF0aCIsImF1dGhvciIsIm9wYWNpdHkiLCJvYmplY3RGaXQiLCJwYWRkaW5nVG9wIiwibWF4SGVpZ2h0IiwibWFyZ2luIiwibWFyZ2luVG9wIiwiaGVhZGVyTG9nbyIsImFuaW1hdGlvbkRlbGF5IiwiekluZGV4IiwidmlzaWJpbGl0eSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uTmFtZSIsInBhZGRpbmdCb3R0b20iLCJBZGRUb0NhbGVuZGFyIiwiYnV0dG9uTGFiZWwiLCJocmVmIiwibWFwVXJsIiwibWF4V2lkdGgiLCJvdmVyZmxvd1giLCJ0ZXh0T3ZlcmZsb3ciLCJhZGRyZXNzTGluZTEiLCJib3hTaGFkb3ciLCJyZWYiLCJtYXAiLCJldiIsImluZGV4Iiwia2V5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiU3RvcmllcyIsIlBpY3R1cmVzR3JpZCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImxvY2FsZVBhcmFtcyIsInF1ZXJ5IiwiZW1wdHlHdWVzdFBhcmFtcyIsImd1ZXN0SWQiLCJncmVldGluZyIsInJlcSIsInUiLCJndWVzdERhdGEiLCJndWVzdExpc3QiLCJkYXRhIiwibWV0YSIsImxhc3RVcGRhdGVkQXQiLCJmaWx0ZXIiLCJwaWN0dXJlcyIsInNlbGVjdGVkUGljdHVyZSIsInNldFNlbGVjdGVkUGljdHVyZSIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJsb2FkZWRJbWFnZXNDb3VudCIsInNldExvYWRlZEltYWdlc0NvdW50IiwiaGFuZGxlU2VsZWN0UGljdHVyZSIsInBpY3R1cmUiLCJoYW5kbGVDbG9zZU1vZGFsIiwicG9zaXRpb24iLCJyaWdodCIsImNvbnRlbnQiLCJkZXNjIiwiaW1hZ2UiLCJTd2lwZXJDb3JlIiwidXNlIiwiQXV0b3BsYXkiLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwibW9kdWxlcyIsIlBhZ2luYXRpb24iLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwiaXRlbSIsIlN3aXBlclNsaWRlIiwic2l0ZU5hbWUiLCJwdWJsaXNoZWRUaW1lIiwicHJvcGVydHkiLCJyZWwiLCJiYXNlQ29uZmlnIiwic2hvd0J1aWx0V2l0aEluZm8iLCJzaG93UXJDb2RlIiwiZm9vdGVyTG9nbyIsImZvb3RlckxvZ29UeXBlIiwiYWRkcmVzc0xpbmUyIiwic3VwcG9ydGVkTGFuZ3VhZ2VzIiwiY29kZSIsImxhYmVsIiwidHJhbnNsYXRpb25zIiwiZW4iLCJJMThuIiwiZm9yRWFjaCIsImxhbmd1YWdlT3B0aW9ucyIsInNldExvY2FsZSIsInBhcmFtcyIsIlRyYW5zIiwicHJvcHMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImkxOG5LZXkiLCJmYWxsYmFja0hvc3QiLCJwYXRoIiwiaGVhZGVycyIsInN0YXJ0c1dpdGgiLCJwcm90b2NvbCIsImhvc3QiLCJzY2hlbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUs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QUNaLElBQUk7RUFDUixNQUFNQyxNQUFNLEdBQ1ZKLE9BQU8sSUFBSUEsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEdBQ25DQSxPQUFPLENBQUMsbUJBQW1CLENBQUMsR0FDNUIsTUFBTTtFQUNaLE9BQU9HLElBQUksR0FBSSxHQUFFQyxNQUFPLE1BQUtELElBQUssR0FBRUosSUFBSyxFQUFDLEdBQUksR0FBRUQsWUFBYSxHQUFFQyxJQUFLLEVBQUM7QUFDdkUsQ0FBQyxFOzs7Ozs7Ozs7OztBQzNCRCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFjY291bnREZXRhaWxzID0gKHsgc2hvd0FjY291bnREZXRhaWxzLCBzZXRTaG93QWNjb3VudERldGFpbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT0nbW9kYWwgbW9kYWxCYWNrZ3JvdW5kJ1xyXG4gICAgICB0YWJJbmRleD0nLTEnXHJcbiAgICAgIHJvbGU9J2RpYWxvZydcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBzaG93QWNjb3VudERldGFpbHMgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtZGlhbG9nJyByb2xlPSdkb2N1bWVudCc+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50ICBuZW9uVGV4dCdcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjbG9zZSBndWVzdC1tb2RhbCdcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FjY291bnREZXRhaWxzKGZhbHNlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICYjMTAwMDU7XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzAgMjBweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FzaCBHaWZ0XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2YwZjBmMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBCYW5rOlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICBXZW1hIEJhbmtcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZjBmMGYwJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIE5hbWU6XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgIEFkZXdhbGUgQWtpbmxhZ3VuwqBcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZjBmMGYwJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFjY291bnQgTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAwMjMzNTg0MTQyXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50RGV0YWlscztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSWNvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPSc2MSdcclxuICAgICAgICBoZWlnaHQ9JzM0J1xyXG4gICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9J00zMC4xNjUgMTAuMTI2Yy0zLjM2LjY0My01LjU3NiA0LjQzMi00Ljc5IDguNTA2LjM1OCAxLjkzIDEuMjg3IDMuNjQ2IDIuNzE3IDQuODYgMS4xNDQgMS4wMDEgMi41MDIgMS41MDIgMy44NiAxLjUwMi4yODUgMCAuNjQzIDAgLjkzLS4wNzEgMS42NDMtLjI4NiAzLjA3My0xLjM1OSA0LjAwMi0zLjAwMi44NTgtMS41NzMgMS4xNDQtMy41NzUuNzg2LTUuNTA1LS43ODYtNC4wNzQtNC4xNDYtNi44NjEtNy41MDUtNi4yOVptNS41MDMgMTEuMTUxYy0uNzE1IDEuMjg3LTEuNzg3IDIuMTQ1LTMuMDczIDIuMzYtMS4yODYuMjEzLTIuNTczLS4xNDQtMy43MTctMS4xNDUtMS4xNDQtMS0xLjkzLTIuNDMtMi4yODgtNC4wNzQtLjY0My0zLjM2IDEuMDcyLTYuNTA1IDMuNzg5LTcuMDA1LjIxNC0uMDcyLjUtLjA3Mi43MTUtLjA3MiAyLjQzIDAgNC43MTggMi4yMTYgNS4yOSA1LjI5LjI4NSAxLjY0My4wNyAzLjI4OC0uNzE2IDQuNjQ2WidcclxuICAgICAgICAgIGZpbGw9JyNGNkIxMDAnXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD0nTTU0LjExIDguNjk2Yy0uMjE1LS4xNDMtLjQzLS4xNDMtLjU3Mi0uMDcxIDAgMC0xLjY0NC41LTIuNjQ1LS4yMTQtLjU3Mi0uMzU4LS44NTgtMS4xNDQtLjkzLTIuMTQ1IDAtLjIxNC0uMTQzLS40MjktLjI4NS0uNWExLjM1IDEuMzUgMCAwIDAtLjU3Mi0uMTQ0Yy0uMTQzIDAtMTIuMDA5IDIuMjE2LTIxLjU4Ny43ODctMTAuNDM2LTEuNTczLTE4LjcyOC4zNTctMTkuMDg1LjQyOC0uMjE1LjA3Mi0uMzU4LjIxNS0uNS4zNTgtLjA3Mi4yMTQtLjE0NC40MjktLjA3Mi41NzIgMCAuMDcxLjc4NiAyLjIxNi0yLjkzMSAzLjY0NS0uMjg2LjE0My0uNS40MjktLjQyOS43MTVsMS40MyAxMi42NTJjMCAuMjE1LjE0My40My4yODUuNS4xNDQuMDcyLjQzLjE0NC41NzIuMDcyIDAgMCAxLjY0NC0uNSAyLjY0NS4yMTUuNTcyLjM1Ny44NTcgMS4xNDMuOTMgMi4xNDQgMCAuMjE0LjE0Mi40MjkuMjg1LjU3Mi4xNDMuMDcxLjI4Ni4xNDMuNDI5LjE0M2guMjE0Yy4wNzIgMCA4LjE0OS0yLjIxNiAyMC4wMTUtLjU3MiAxMC4yMjEgMS40MyAyMC40NDMtLjU3MiAyMC41ODYtLjY0My4yMTQtLjA3MS4zNTctLjE0My41LS4zNTguMTQ0LS4yMTQuMTQ0LS40MjguMDcyLS41NzEgMC0uMDcyLS43ODctMi4yMTYgMi45My0zLjY0Ni4yODYtLjE0My41MDEtLjQyOS40My0uNzE1bC0xLjQzLTEyLjY1MmMwLS4yODYtLjE0My0uNDI5LS4yODYtLjU3MlpNNTEuMjUgMjQuMjhjLS4yODUuNjQzLS4yODUgMS4yMTUtLjI4NSAxLjY0NC0yLjQzLjQyOS0xMC45MzcgMS42NDQtMTkuMzcxLjUtMy4zNi0uNS02LjQzMy0uNjQzLTkuMDc4LS42NDMtNS4zNjEgMC05LjE1LjcxNS0xMC43MjIgMS4wNzItLjIxNS0xLjA3Mi0uNzE1LTEuODU4LTEuNDMtMi40My0xLS43MTUtMi4yMTYtLjcxNS0zLjA3My0uNTcyTDYuMDA0IDEyLjQ4NUM3LjU3NyAxMS43NyA4LjY1IDEwLjg0IDkuMTUgOS42OTdjLjI4NS0uNjQzLjI4NS0xLjIxNS4yODUtMS43MTUgMi4xNDUtLjQzIDkuMzY0LTEuNTAyIDE3Ljg3LS4yODYgOC41NzggMS4yODYgMTguNTE0LS4yMTUgMjEuMzAxLS42NDMuMjE1IDEuMDcyLjY0NCAxLjkzIDEuNDMgMi41MDIgMSAuNzE1IDIuMjE2LjcxNSAzLjA3My41NzJsMS4yODcgMTEuMzY1Yy0xLjU3Mi43MTQtMi42NDUgMS42NDMtMy4xNDUgMi43ODdaJ1xyXG4gICAgICAgICAgZmlsbD0nI0Y2QjEwMCdcclxuICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPSdNNTcuMDQuNjJhLjUzOC41MzggMCAwIDAtLjM1Ny0uNTAyYy0uMjE0LS4xNDMtLjQyOC0uMTQzLS42NDMtLjA3LS4wNzEuMDctOS4zNjQgMy41NzMtMjQuMTYgMi40M0M2LjUwNC40NzUuNSA1LjE5My4yODYgNS40MDcuMDcgNS41NTEgMCA1LjgzNyAwIDYuMDUxbDMuMzYgMjcuMzA2YzAgLjIxNC4xNDMuNDI5LjM1Ny41NzIuMTQzLjA3MS4yMTQuMDcxLjM1OC4wNzEuMDcgMCAuMjE0IDAgLjI4NS0uMDcxLjA3Mi0uMDcyIDguNzItMy45MzIgMjguNTItMS44NTkgMjAuMzczIDIuMTQ1IDI2Ljk0OS0zLjI4OCAyNy4yMzUtMy41NzQuMjE0LS4xNDMuMjg1LS4zNTcuMjE0LS42NDNMNTcuMDQxLjYyWk0zMy4wMjUgMzAuNzExYy0xNi44Ny0xLjc4Ny0yNS42NjIuNjQzLTI4LjM3OCAxLjU3M0wxLjUwMSA2LjMzOGMxLjUwMS0uODU4IDguNzItNC4xNDYgMzAuMzA3LTIuNDMgMTIuNzI0IDEgMjEuMzAxLTEuMzU5IDIzLjk0Ni0yLjIxNmwzLjIxNyAyNi4wMThjLTEuNTAyLjkzLTguNTc4IDQuNzktMjUuOTQ4IDMuMDAyWidcclxuICAgICAgICAgIGZpbGw9JyNGNkIxMDAnXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2FzaEdpZnQgPSAoeyBzZXRTaG93QWNjb3VudERldGFpbHMsIHNob3dBY2NvdW50RGV0YWlscyB9KSA9PiB7XHJcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjYXNoR2lmdCc+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICBnYXA6IDcsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FjY291bnREZXRhaWxzKCFzaG93QWNjb3VudERldGFpbHMpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0JyxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBpc0hvdmVyZWQgPyAnc2NhbGUoMS4yKScgOiAnc2NhbGUoMSknLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDYXNoIEdpZnRcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXNoR2lmdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcbmltcG9ydCB7IHNlbmQgfSBmcm9tICdlbWFpbGpzLWNvbSc7XHJcbmNvbnN0IENvbGxlY3RHdWVzdEF0dGVuZGFuY2UgPSAoeyBzZXRTaG93TW9kYWwsIHNob3dNb2RhbCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaHR0cFN0YXR1cyhzdGF0dXNDb2RlKSB7XHJcbiAgICBpZiAoc3RhdHVzQ29kZSA+PSAyMDAgJiYgc3RhdHVzQ29kZSA8PSAyOTkpIHtcclxuICAgICAgU3dhbC5maXJlKCdTdWNjZXNzIScsICdXZSBhcHByZWNpYXRlIHlvdXIgcmVzcG9uc2UhJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuICAgICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICAgIHNldEVtYWlsKCcnKTtcclxuICAgICAgc2V0TmFtZSgnJyk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPj0gNDAwICYmIHN0YXR1c0NvZGUgPD0gNDk5KSB7XHJcbiAgICAgIFN3YWwuZmlyZSgnRXJyb3IhJywgJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluIScsICdlcnJvcicpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID49IDUwMCkge1xyXG4gICAgICBTd2FsLmZpcmUoJ0Vycm9yIScsICdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiEnLCAnZXJyb3InKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAndW5rbm93biBzdGF0dXMnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsIHx8ICFtZXNzYWdlKSB7XHJcbiAgICAgIFN3YWwuZmlyZSgnJywgJ0FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkJywgJ2Vycm9yJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBhd2FpdCBzZW5kKFxyXG4gICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTUFJTEpTX1NFUlZJQ0VfSUQsXHJcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VNQUlMSlNfVEVNUExBVEVfSUQsXHJcbiAgICAgIHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSxcclxuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU1BSUxKU19VU0VSX0lEXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGh0dHBTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIFN3YWwuZmlyZSgnRXJyb3IhJywgJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluIScsICdlcnJvcicpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPSdtb2RhbCdcclxuICAgICAgdGFiSW5kZXg9Jy0xJ1xyXG4gICAgICByb2xlPSdkaWFsb2cnXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogc2hvd01vZGFsID8gJ2Jsb2NrJyA6ICdub25lJyxcclxuXHJcbiAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1kaWFsb2cnIHJvbGU9J2RvY3VtZW50Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtY29udGVudCAgZ2xhc3Ntb3JwaGlzbSc+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjbG9zZSBndWVzdC1tb2RhbCdcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICYjMTAwMDU7XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybV90aXRsZSBtYi00J1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEluZm9ybSB1cyBvZiB5b3VyIGF2YWlsYWJpbGl0eVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IG1iLTMnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIE5hbWU6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRW1haWw6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0zJz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nYXR0ZW5kaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJ1xyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgV2lsbCB5b3UgYmUgYXR0ZW5kaW5nP1xyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICByb3dzPSc0J1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPSdhdHRlbmRpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2d1ZXN0LWZvcm0tYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyA/ICdTdWJtaXR0aW5nLi4uJyA6ICdTdWJtaXQnfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlO1xyXG4iLCJpbXBvcnQgQWRkVG9DYWxlbmRhciBmcm9tICdyZWFjdC1hZGQtdG8tY2FsZW5kYXInO1xuaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUucmVhY3QnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5pbXBvcnQgSGVhZCBmcm9tICdAc3JjL2NvbXBvbmVudHMvSGVhZCc7XG5pbXBvcnQgcmVzb2x2ZVBhdGggZnJvbSAnQHNyYy91dGlscy9yZXNvbHZlUGF0aCc7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJ0BzcmMvY29uZmlnL2FwcCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiwgZGVmYXVsdExvY2FsZSB9IGZyb20gJ0BzcmMvaTE4bic7XG5pbXBvcnQgZ3Vlc3RMaXN0IGZyb20gJy4vZ3Vlc3RfbGlzdC5qc29uJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcbmltcG9ydCBTdG9yaWVzIGZyb20gJy4vc3Rvcmllcyc7XG5pbXBvcnQgUGljdHVyZXNHcmlkIGZyb20gJy4vcGljdHVyZUdyaWQnO1xuaW1wb3J0IENvbGxlY3RHdWVzdEF0dGVuZGFuY2UgZnJvbSAnLi9jb2xsZWN0LWd1ZXN0LWF0dGVuZGFuY2UnO1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xuaW1wb3J0IENhc2hHaWZ0IGZyb20gJy4vY2FzaEdpZnQnO1xuaW1wb3J0IEFjY291bnREZXRhaWxzIGZyb20gJy4vYWNjb3VudERldGFpbHMnO1xuXG5jb25zdCBMb3ZlVGl0bGVJY29uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxpbWdcbiAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy93aW5lLnBuZydcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgIGhlaWdodDogJzgwcHgnLFxuICAgICAgfX1cbiAgICAgIGFsdD0nd2luZSBpbGx1c3RyYXRvcidcbiAgICAvPlxuICApO1xufTtcbmNvbnN0IEV2ZW50RGF0ZUljb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD0nMzUnIGhlaWdodD0nNzgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMjAuMzU1IDEyLjA4M2MtMS42NDMtMS42Mi0yLjE1Ni00Ljc3LjQxLTUuODMgMS4xODctLjQ5IDIuNjgtLjM2NSAzLjkyOC0uMjI3IDEuMjg2LjE0MyAyLjU1Mi40MTcgMy43Ny44NTYgMi4xNzMuNzg1IDUuMTg0IDIuMTY0IDYuMDI3IDQuNTEuOTkzIDIuNzYyLTEuOTY4IDQuMTA3LTQuMTU1IDQuNDc0LTIuNzc1LjQ2NS01LjcwNi40MTctOC41MTMuMzM4LTIuNjk0LS4wNzYtNS40NTQtLjM3NS03Ljk4LTEuMzY2LTIuMjctLjg5Mi00LjU5LTIuMzMzLTUuNzIzLTQuNTgtMS4wNDMtMi4wNjYtLjgzNi00LjU0MS40NzUtNi40NDRDMTAuNCAxLjE5MyAxMy40MjIuNjkgMTYuMzgxLjMzN0E0OS40NjIgNDkuNDYyIDAgMCAxIDI3LjMwNy4yN2MxLjIuMTIzIDEuMjEyIDIuMDE3IDAgMS44OTNhNDkuODc3IDQ5Ljg3NyAwIDAgMC03LjQxMi0uMjIzYy0yLjI2NS4xMDUtNC42NzEuMjQtNi44NS45MDItMS44MDcuNTQ5LTMuMjMyIDEuODgyLTMuNjI3IDMuNzctLjQxNCAxLjk3OC43MDggMy43MzIgMi4yMyA0LjkwMyAzLjI1IDIuNSA3LjY3MiAyLjgxMSAxMS42MTUgMi44MTcgMi4yMjUuMDA0IDQuNTUuMDc0IDYuNzQ1LS4zMi44MDQtLjE0NCAxLjg5NS0uMzIgMi40ODQtLjk1Ny44MTQtLjg4LS4zMi0xLjkzOC0xLjAxLTIuNDY3LTEuODMtMS40MDYtNC4xNDQtMi4yODMtNi40MTYtMi42MTktLjk3OS0uMTQ1LTIuNTc5LS40MTMtMy41MiAwLTEuMjk0LjU3LS41NzYgMi4wNjMuMTQ3IDIuNzc3Ljg3Ljg1Ni0uNDcgMi4xOTQtMS4zMzggMS4zMzhaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00zNC4wMjMgMTMuNzI3Yy0xLjQ5NCA1LjQ1LTMuMTU4IDEwLjkzMy03LjA5OSAxNS4xNTdhMjIuMzkgMjIuMzkgMCAwIDEtNi4wMyA0LjU4MWMtMi4zMjMgMS4yMDUtNS4xMyAyLjM4NS03Ljc4MSAxLjgyOC0xLjE5LS4yNS0uNjg3LTIuMDc1LjUwMy0xLjgyNSAyLjI5Mi40OCA1LjAyLS44ODggNi45Ny0xLjk4NmEyMC44MDggMjAuODA4IDAgMCAwIDUuMzk2LTQuMzczYzMuNDQ2LTMuOTA0IDQuODY5LTguOTcgNi4yMTYtMTMuODg0LjMyLTEuMTc0IDIuMTQ3LS42NzYgMS44MjUuNTAyWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNOS4wMjggNy45MjNjLTEuMjY2IDguMzQ0LTIuNTkgMTguMzcgMy43MjIgMjUuMTMzLjgzLjg5LS41MDUgMi4yMzEtMS4zMzggMS4zMzktNi44NC03LjMzMS01LjU4Ny0xNy44OTMtNC4yMS0yNi45NzQuMTgzLTEuMiAyLjAwNi0uNjkgMS44MjYuNTAyWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMTQuODc3IDM0LjM0M2MtMS45MTggMTQuMDc0LTEuMzQ5IDI4LjQ2IDEuNjM2IDQyLjM0NC4yNTUgMS4xODctMS41NjkgMS42OTUtMS44MjUuNTAzYTEyNS42NTQgMTI1LjY1NCAwIDAgMS0xLjYzNi00My4zNWMuMTY0LTEuMjAyIDEuOTg4LS42OSAxLjgyNS41MDNaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00xMC4zNCA2MC44OTFjLS40MTYtNC42NTYtMy44NDUtOC44Ni04LjI5LTEwLjI2LTEuMTU4LS4zNjUtLjY2NC0yLjE5My41MDItMS44MjUgNS4zMDEgMS42NyA5LjE4NiA2LjU2MiA5LjY4IDEyLjA4NS4xMDggMS4yMTItMS43ODUgMS4yMDUtMS44OTMgMFonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTMuMTk3IDQ5LjkyYy0uNzMgMS4zODYtLjkyIDIuOTM3LS45NiA0LjQ4NC0uMDM3IDEuNDc2LS4yNTkgMy4yNDYuNzM5IDQuNDYuOTIgMS4xMiAyLjI3MSAxLjk1NiAzLjUzIDIuNjQzYTE3LjU5NSAxNy41OTUgMCAwIDAgNC40MDIgMS42NjJjMS4xODQuMjguNjgzIDIuMTA1LS41MDMgMS44MjVhMTkuMzcgMTkuMzcgMCAwIDEtNS4wNy0xLjk3NGMtMS41MTUtLjg1NS0zLjEwNi0xLjkyMi00LjEyLTMuMzYyQy4xNTMgNTguMTUuMyA1Ni4xNjMuMzQ1IDU0LjQwNGMuMDQ5LTEuODkuMzI3LTMuNzUgMS4yMTctNS40NC41NjktMS4wNzcgMi4yMDItLjEyMiAxLjYzNS45NTZaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J003LjkxOSA1OC4wMjZjMS4zNiAxLjcyIDIuNzIzIDMuNDQgNC4wODQgNS4xNi4zMDYuMzg4LjQwNi45NjUgMCAxLjMzOS0uMzQyLjMxMy0xLjAxLjQxNC0xLjMzOCAwTDYuNTggNTkuMzYzYy0uMzA2LS4zODctLjQwNi0uOTY1IDAtMS4zMzcuMzQyLS4zMTQgMS4wMS0uNDE1IDEuMzM5IDBaTTEyLjYyOSA1MS44ODRhMjguMDggMjguMDggMCAwIDEgMTcuNDE4LTYuNjI4YzEuMjE5LS4wMyAxLjIxOCAxLjg2MyAwIDEuODkyLTUuODYzLjE0LTExLjU5NCAyLjI4OC0xNi4wOCA2LjA3NC0uOTI2Ljc4Mi0yLjI3LS41NS0xLjMzOC0xLjMzOFonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTMyLjI2NyA0Ni42NzNjLTEuMjEgNC4yMzQtNC4wNzIgOC4xNDItOC4wNTQgMTAuMTUtMy43ODMgMS45MDYtOC42MjMgMS43NTMtMTEuNjQ5LTEuNDgtLjgzMS0uODg5LjUwNC0yLjIzIDEuMzM4LTEuMzM4IDIuNiAyLjc3NiA2LjczNSAyLjY3NiA5Ljg3Mi45MDcgMy4yOTctMS44NTcgNS42MzgtNS4xMzggNi42NjktOC43NDIuMzM0LTEuMTY5IDIuMTYtLjY3MiAxLjgyNC41MDNaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00xNC4zNSA1My4xMzhhNDAuNzA3IDQwLjcwNyAwIDAgMSA1LjkxMi0xLjUzM2MuNDg1LS4wODcgMS4wNDMuMTMyIDEuMTYzLjY2MS4xMDUuNDYzLS4xNCAxLjA3LS42NiAxLjE2NWE0MC42MTYgNDAuNjE2IDAgMCAwLTUuOTEzIDEuNTMzYy0uNDY4LjE2LTEuMDU0LS4xODQtMS4xNjMtLjY2MS0uMTItLjUyNi4xNTgtLjk5My42Ni0xLjE2NVonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuY29uc3QgSGVhZGVyTG9nbyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogJ2lubGluZUJsb2NrJyxcbiAgICAgICAgYmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoMGRlZykgc2NhbGUoMSknLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8c3ZnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgZmlsbD0nbm9uZSc+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD0nbTM0LjYxMyAyNy43MzcgMS40MzcuMDg4YTYuMTExIDYuMTExIDAgMCAxIDEuOTI1LjJjLjM1LjIuNTM4LjQ3NS4xLjc2Mi0uNDM3LjI4OC0xLjEgMC0xLjUgMC0uNCAwLS45MjUtLjEtMS40LS4xMjVhMy4yOTYgMy4yOTYgMCAwIDAtMS4wNSAwYy0uMzUuMTEzLS4yODcuMjEzLS40ODcuNjEzYTcuNTc3IDcuNTc3IDAgMCAxLTEuNzYzIDIuMTVjLTEuNDYyIDEuMjUtMy40NSAxLjMzNy01LjE2MiAyLjA4Ny40NS0yLjk2MiAyLjcyNS00LjQzNyA1LjQ3NS01LS45NzUgMC0yLjY3NS0uODc1LTMuNTEzLS40NjItMS40ODcuNjM3LTMuNzUgMS41LTQuMjEyIDMuMjUtLjIzOCAxLjA2Mi0uMTg4IDIuNjM3LTEuNTM4IDIuOTYyLTEuMzUuMzI1LTEuNzI1LS45NjItMS40LTEuOTc1LS44NzUuNDUtMi4wNS4wODgtMS44NjItMS4wNS4xODctMS4xMzcgMS41MjUtMS4yNSAyLjM4Ny0xLjM2MiAyLjIxMy0uMzUgMy45LTEuNjI1IDUuOTg4LTIuMjg4YTI1Ljg0NSAyNS44NDUgMCAwIDAtMi41LTEuMDI1IDYuODM3IDYuODM3IDAgMCAwLTIuNi40ODhjLS45Mi4xMTQtMS44MjguMzEtMi43MTMuNTg3LS42NC4zNC0xLjE5LjgyOC0xLjYgMS40MjUtLjk4NyAxLjE2My0yLjIgMi41LTMuOSAyLjM3NS0yLjE1LS4yLTEuOTEyLTIuNjUtLjMyNS0zLjQ4Ny0xLjAyNSAwLTIuNS0uNjM4LTIuNC0xLjg3NS4wODgtMS41NSAxLjk2My0xLjczOCAzLjEyNS0xLjQyNSAxLjA5Ny40MTkgMi4xNjYuOTA3IDMuMiAxLjQ2MiAxLjkzOC43ODggMy43NSAwIDUuNzYzLS4yYTM3Ljk5NCAzNy45OTQgMCAwIDEtNC42NS0yLjY3NSAyLjE4NyAyLjE4NyAwIDAgMC0xLjM3NS0uNTVoLTEuMjVhMjcuNjcxIDI3LjY3MSAwIDAgMC0zLjM3NS4xYy0uNzc1IDAtMS4zMjUuNzM4LTEuODM4IDEuMjVhNi4xMzggNi4xMzggMCAwIDEtMi41IDEuNzEzIDEuOTg3IDEuOTg3IDAgMCAxLTIuNS0uNjI1QTIuMDc1IDIuMDc1IDAgMCAxIDcuNzEzIDIyLjRjLS45NzUtLjMyNS0yLjI4OC0xLjExMy0xLjQyNS0yLjMgMS4wMTItMS4zODggMi44NzUtLjY1IDMuOTM3LjE1YTUuODc1IDUuODc1IDAgMCAwIDIuOTM4IDEuNmMxLjQ4Mi4wODcgMi45NjguMDg3IDQuNDUgMGEyMy43NCAyMy43NCAwIDAgMS0yLjAzOC0yLjAxMyA1Ljc4NyA1Ljc4NyAwIDAgMC0uODYyLS45NjJjLS44NTItLjM4LTEuNzUyLS42NDEtMi42NzUtLjc3NWExNC41MjIgMTQuNTIyIDAgMCAwLTIuNzUtLjc3NSA1LjYxMSA1LjYxMSAwIDAgMC0yLjY4OC42MjUgNi4yNTEgNi4yNTEgMCAwIDEtMy4xMzcuNTI1IDEuOTUgMS45NSAwIDAgMS0xLjY3NS0yLjA2M2MuMTI1LTEuMDM3Ljk4Ny0xLjM4NyAxLjg3NS0xLjU1LTIuMDI1LTEuODg3Ljc3NS0zLjY4NyAyLjUtMi4wMTIgMS4wMjUgMS4wMTIgMS42MzcgMi45MTIgMi45MTIgMy40MjUgMS42MTMuNjUgMy4zNzUuODg3IDUgMS42MzctLjkzNy0xLjI1LTEuODUtMi41LTIuNzI1LTMuNzVhNi44NzUgNi44NzUgMCAwIDAtMi43NzUtMi45NzVjLTEuNDg3LS42NzUtMy40NS0xLjQ4Ny0zLjc1LTMuMzUtLjM1LTIuMjg3IDIuMjM4LTEuOSAzLjQ1LS45NWEyLjE2MyAyLjE2MyAwIDAgMSAxLjQtMi41YzEuMjUtLjQ4NyAyLjAxMy40NjMgMi4xNzUgMS42NzUuMDI1IDEuNDM4LS42IDIuODI1LS44MjUgNC4zMjUtLjI2MiAyLjIxMyAyLjE1IDQuODc1IDMuMzYzIDYuNiAwLTEuODUuNy00LjA2Mi0uMjYzLTUuNzg3LS42MjUtMS40MjUtMi42MTItMy44MjUtMS4yNS01LjQyNSAxLTEuMTM4IDIuMjM4LjEyNSAyLjU3NSAxLjE1YTEuNDYyIDEuNDYyIDAgMCAxIDIuNS0uMjYzYzEuMjUgMS43MjUtLjc1IDMuMjM4LTEuNjYyIDQuNTEzLTEuMSAxLjUxMi0uOSAyLjk1LTEuMDM4IDQuNzM3YTYuNTk3IDYuNTk3IDAgMCAwLS4xNjIgMi4wMjVjLjEzNy40MTMuODEyLjg4OCAxLjExMiAxLjI1YTI2LjkzIDI2LjkzIDAgMCAwIDIuNTYzIDIuMzYzYy0uMS0yLjEuMjEyLTQuMjc1LS41MTMtNi4yNS0uNDI1LTEuMTUtMS40LTMuMTUtLjUtNC4yODguOS0xLjEzNyAxLjktLjEzNyAyLjI1LjgxM2EyLjAyNSAyLjAyNSAwIDAgMSAyLjUtLjY1IDEuOTUgMS45NSAwIDAgMSAuNDI1IDIuNWMtLjg1IDEuODEyLTMuMjg3IDIuNzYyLTMuMjg3IDQuODI1LS4xMjUuOTUtLjA2MyAxLjk4Ny0uMSAyLjk1YTIuMDIzIDIuMDIzIDAgMCAwIDAgLjY3NWMuMTM3LjI3NS44NjIuNjEyIDEuMTEyLjc3NWEzNS4zNzcgMzUuMzc3IDAgMCAwIDUgMi42MzdjLS4yODctMS4yNS0uMzEyLTIuNDEyLS41MTItMy43NWE1LjMzOCA1LjMzOCAwIDAgMC0xLjM4OC0yLjgxMmMtLjczNy0uOTg4LTEuNS0yLjY1LS4zODctMy42ODguODc1LS44MjUgMi4wMjUtLjA2MiAyLjM1Ljg4OCAxLjA1LTEuNiAzLjY2Mi0xLjQzOCAzLjc1LjczNy4wODcgMS42NS0xLjM1IDIuNzI1LTIuNSAzLjYyNS0uMjMzLjE1LS40MTkuMzYzLS41MzguNjEzYTMuMDMzIDMuMDMzIDAgMCAwLS4xODcuNzI1Yy0uMDU3LjgzNi0uMDExIDEuNjc1LjEzNyAyLjUgMCAuNTEyIDAgMS4yNS40MTMgMS41MTIuNTIyLjI4IDEuMDgyLjQ4MiAxLjY2Mi42YTIwLjEzIDIwLjEzIDAgMCAwIDQuMTg4IDEuMDM4IDYuMDc1IDYuMDc1IDAgMCAxLTIuMTg4LTQuMiA5LjEgOS4xIDAgMCAxIC44LTQuNTEzYy44MjUgMS4yNSAyLjAxMyAyLjM1IDIuNzYzIDMuNjc1YTUuNzYzIDUuNzYzIDAgMCAxIC4xIDUuMjVjLjE2Ni4wMTMuMzMzLjAxMy41IDBaJ1xuICAgICAgICAgIGZpbGw9JyNERkFFMDAnXG4gICAgICAgID48L3BhdGg+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD0nTTE5LjU1IDE1Ljc4N3MzLjI3NS0yLjg1IDIuNS0zLjYzN2MtLjc3NS0uNzg4LTIuMTEyLjkxMi0yLjExMi45MTJzLS42MzgtMS44NS0xLjQ2My0xLjI1Yy0uODI1LjYgMS4wNzUgMy45NzUgMS4wNzUgMy45NzVaTTE1LjE4OCAxMC43ODhzMi45NzUtMi45MTMgMS45NjItMy40NzVjLTEuMDEyLS41NjMtMS43NSAxLjI1LTEuNzUgMS4yNXMtLjk3NS0yLjUtMS43ODctMS43ODhjLS44MTMuNzEzIDEuNTc1IDQuMDEzIDEuNTc1IDQuMDEzWk05LjY2MiAxMC40MzdzMS45NjMtNC41ODcuNDg4LTQuODM3LTEuNCAyLjYtMS40IDIuNi0yLjkxMy0xLjk1LTMuMTEzLS43Yy0uMjM3IDEuNTI1IDQuMDI1IDIuOTM3IDQuMDI1IDIuOTM3Wk03LjMgMTYuNTEzcy0xLjgtMy42MjUtMi45LTMuMmMtMS4xLjQyNS40MjUgMi4xLjQyNSAyLjFzLTIuMDg4LjI3NS0xLjk2MyAxLjUxMmMuMTI1IDEuMjM4IDQuNDM4LS40MTIgNC40MzgtLjQxMlpNMTEuNjYyIDIyLjU3NVM4LjM1IDE5LjY2MyA3LjUgMjAuNDI1Yy0uODUuNzYzIDIuMDYyIDIuMDc1IDIuMDYyIDIuMDc1cy0zLjEgMS40NzUtMi4wNjIgMi4yYzEuMjUuODg4IDQuMTYyLTIuMTI1IDQuMTYyLTIuMTI1Wk0xOC41ODggMjcuMzc1cy00LjYzOC0yLjYzOC01LjM2My0xLjU4OGMtLjcyNSAxLjA1IDIuNzYzIDEuODI1IDIuNzYzIDEuODI1cy0yLjgyNSAxLjkzOC0xLjUxMyAyLjYzOGMxLjMxMy43IDQuMTEzLTIuODc1IDQuMTEzLTIuODc1Wk0yNS44NSAyMHMzLjc1LTIuNSAyLjI4Ny0zLjUxMmMtMS4xMTItLjc2My0yLjUgMS4wODctMi41IDEuMDg3cy0uODEyLTIuMS0xLjcxMi0xLjRjLS45LjcgMS45MjUgMy44MjUgMS45MjUgMy44MjVaTTIzLjk2MyAzMC4xNzVzLS40MzggMi44NS0xLjI1IDMuMTVjLS44MTMuMy0uMjEzLTIuMDc1LS4yMTMtMi4wNzVzLTIuMDI1LjkyNS0xLjkyNSAwYy4xLS45MjUgMy4zODgtMS4wNzUgMy4zODgtMS4wNzVaJ1xuICAgICAgICAgIGZpbGw9JyNGN0Q0N0QnXG4gICAgICAgID48L3BhdGg+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD0nTTMzLjI4NyAyNi45NWE0Ljg4NyA0Ljg4NyAwIDAgMCAuMTI1LTMuMzUgNi4zNjIgNi4zNjIgMCAwIDAtMS44ODctMy4wNWMtMS4wNjMgNC41MzcgMS43NjIgNi40IDEuNzYyIDYuNFpNMzIuNzUgMjkuMTVjLS42MjIuODA0LTEuMzYgMS41MTEtMi4xODggMi4xLS44NzQuNTU1LTEuODI2Ljk3Ni0yLjgyNSAxLjI1YTYuNzEzIDYuNzEzIDAgMCAxIDIuMTEzLTIuMTM3IDExLjU4OCAxMS41ODggMCAwIDEgMi45LTEuMjEzWidcbiAgICAgICAgICBmaWxsPScjRENCM0I0J1xuICAgICAgICA+PC9wYXRoPlxuICAgICAgPC9zdmc+XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuY29uc3QgdHJhbnNsYXRlQ29uZmlnID0gKGFwcENvbmZpZywgbG9jYWxlKSA9PiB7XG4gIGlmICghbG9jYWxlIHx8IGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZSkge1xuICAgIHJldHVybiBhcHBDb25maWc7XG4gIH1cbiAgLy8gUmVwbGFjZSBjb25maWcgd2l0aCBsYW5nXG4gIGNvbnN0IGNvbmZpZ0xhbmcgPSBhcHBDb25maWcubGFuZ1tsb2NhbGVdO1xuICBpZiAoY29uZmlnTGFuZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGxvY2FsZTogJywgbG9jYWxlKTtcbiAgfVxuICByZXR1cm4geyAuLi5hcHBDb25maWcsIC4uLmNvbmZpZ0xhbmcgfTtcbn07XG5cbmNvbnN0IFNob3dJbnZpdGUgPSAoeyBjdXJyZW50VXJsLCBndWVzdExpc3RMYXN0VXBkYXRlZEF0LCBndWVzdCB9KSA9PiB7XG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbihndWVzdC5sb2NhbGUpO1xuXG4gIC8vIEluaXRpYXRlIGNvbmZpZyB2YXJpYWJsZXNcbiAgY29uc3Qge1xuICAgIGxvZ28sXG4gICAgb2dUYWdzLFxuICAgIGNvdXBsZUluZm8sXG4gICAgdmVudWUsXG4gICAgd2VkZGluZ0RheSxcbiAgICB3ZWRkaW5nRGF0ZSxcbiAgICB3ZWRkaW5nVGltZSxcbiAgICBjYWxlbmRhckluZm8sXG4gIH0gPSB0cmFuc2xhdGVDb25maWcoYXBwQ29uZmlnLCBndWVzdC5sb2NhbGUpO1xuICBjb25zdCB7IGJyaWRlTmFtZSwgZ3Jvb21OYW1lLCBoYXNodGFnLCBjb3VwbGVOYW1lRm9ybWF0IH0gPSBjb3VwbGVJbmZvO1xuXG4gIGNvbnN0IGNvdXBsZU5hbWVTdHIgPVxuICAgIGNvdXBsZU5hbWVGb3JtYXQgPT09ICdHUk9PTV9GSVJTVCdcbiAgICAgID8gYCR7Z3Jvb21OYW1lfSAmICR7YnJpZGVOYW1lfWBcbiAgICAgIDogYCR7YnJpZGVOYW1lfSAmICR7Z3Jvb21OYW1lfWA7XG4gIGNvbnN0IGNvdXBsZU5hbWUgPVxuICAgIGNvdXBsZU5hbWVGb3JtYXQgPT09ICdHUk9PTV9GSVJTVCcgPyAoXG4gICAgICA8PlxuICAgICAgICB7YnJpZGVOYW1lfSA8c3Bhbj4mYW1wOzwvc3Bhbj4ge2dyb29tTmFtZX1cbiAgICAgIDwvPlxuICAgICkgOiAoXG4gICAgICA8PlxuICAgICAgICB7Z3Jvb21OYW1lfSA8c3Bhbj4mYW1wOzwvc3Bhbj4ge2JyaWRlTmFtZX1cbiAgICAgIDwvPlxuICAgICk7XG5cbiAgLy8gVmVudWUgaW5mb1xuICBjb25zdCB2ZW51ZUJyaWVmID0gYCR7dmVudWUubmFtZX0sICR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gO1xuICBjb25zdCB3ZWRkaW5nRGF0ZUJyaWVmID0gYCR7d2VkZGluZ0RheX0sICR7d2VkZGluZ0RhdGV9YDtcblxuICAvLyBFdmVudCBpbmZvXG4gIGNvbnN0IGV2ZW50VGl0bGUgPSBgJHtjb3VwbGVOYW1lU3RyfSdzIFdlZGRpbmdgO1xuICBsZXQgZXZlbnREZXNjcmlwdGlvbiA9IGAke3dlZGRpbmdEYXRlQnJpZWZ9IGF0ICR7dmVudWUubmFtZX0sICR7dmVudWUuY2l0eX1gO1xuICBpZiAoZ3Vlc3QubmFtZSkge1xuICAgIGV2ZW50RGVzY3JpcHRpb24gPSBgRGVhciAke2d1ZXN0Lm5hbWV9LCB5b3UgYXJlIGNvcmRpYWxseSBpbnZpdGVkIHRvIG91ciB3ZWRkaW5nIG9uICR7d2VkZGluZ0RhdGV9IGF0ICR7dmVudWUubmFtZX0uIExvb2tpbmcgZm9yd2FyZCB0byBzZWVpbmcgeW91IWA7XG4gIH1cblxuICAvLyBDYWxlbmRhciBwYXlsb2FkXG4gIGNvbnN0IGNhbGVuZGFyRXZlbnQgPSB7XG4gICAgdGl0bGU6IGV2ZW50VGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGV2ZW50RGVzY3JpcHRpb24sXG4gICAgbG9jYXRpb246IGAke3ZlbnVlLmNpdHl9LCAke3ZlbnVlLmNvdW50cnl9YCxcbiAgICBzdGFydFRpbWU6IGNhbGVuZGFySW5mby50aW1lU3RhcnRJU08sXG4gICAgZW5kVGltZTogY2FsZW5kYXJJbmZvLnRpbWVFbmRJU08sXG4gIH07XG5cbiAgY29uc3QgZXZlbnRTY2hlZHVsZSA9IFtcbiAgICB7XG4gICAgICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAgIGV2ZW50OiAnQ2h1cmNoJyxcbiAgICAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgICAgdGltZTogJzEycG0nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgICBldmVudDogJ1JlY2VwdGlvbicsXG4gICAgICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAgIHRpbWU6ICcycG0nLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgLy8gICBldmVudDogJ0VuZ2FnZW1lbnQnLFxuICAgIC8vICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgLy8gICB0aW1lOiAnMnBtJyxcbiAgICAvLyB9LFxuICBdO1xuXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93QWNjb3VudERldGFpbHMsIHNldFNob3dBY2NvdW50RGV0YWlsc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xuICAgIH0sIDEwMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50UmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgIGlmIChlbGVtZW50UG9zaXRpb24gPCB3aW5kb3dIZWlnaHQgKiAwLjkpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkLWVsZW1lbnQnKTsgLy8gQWRkIHRoZSBDU1MgY2xhc3Mgd2hlbiB0aGUgZWxlbWVudCBpcyA3NSUgdmlzaWJsZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQtZWxlbWVudCcpOyAvLyBSZW1vdmUgdGhlIENTUyBjbGFzcyBpZiBub3QgdmlzaWJsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTsgLy8gUnVuIHRoaXMgZWZmZWN0IG9ubHkgb25jZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGEucmVhY3QtYWRkLXRvLWNhbGVuZGFyX19idXR0b24gc3BhbiB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPEhlYWRcbiAgICAgICAgey4uLm9nVGFnc31cbiAgICAgICAgdGl0bGU9e2V2ZW50VGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtldmVudERlc2NyaXB0aW9ufVxuICAgICAgICBndWVzdE5hbWU9e2d1ZXN0Lm5hbWV9XG4gICAgICAgIHVybD17Y3VycmVudFVybH1cbiAgICAgICAgZGF0ZT17d2VkZGluZ0RhdGVCcmllZn1cbiAgICAgICAgbW9kaWZpZWRUaW1lPXtndWVzdExpc3RMYXN0VXBkYXRlZEF0fVxuICAgICAgICB2ZW51ZT17dmVudWVCcmllZn1cbiAgICAgICAgbG9nbz17cmVzb2x2ZVBhdGgob2dUYWdzLmxvZ28pfVxuICAgICAgICBhdXRob3I9e3Jlc29sdmVQYXRoKCcvJyl9XG4gICAgICAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdoZWFkZXJfYXJlYSc+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdoZWFkZXItY29udGFpbmVyJz5cbiAgICAgICAgICA8SGVhZGVyTG9nbyAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGVhZGVyLWxvZ28tdGV4dCc+VGhlIEFraW5sYWd1bidzIFBhcnR5PC9zcGFuPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBpZD0naG9tZScgY2xhc3NOYW1lPSdoZWFkZXJfc2xpZGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stbGlzdCBkcmFnZ2FibGUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLXRyYWNrJyBzdHlsZT17eyBvcGFjaXR5OiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmdfY292ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPSdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICgxMikuanBnJ1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBhbHQ9J2JhY2tncm91bmQgaW1hZ2UnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGNvbnRlbnQtb3ZlcmxheSc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTI0Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9jb250ZW50IHRleHQtY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA2MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nby5oZWFkZXJMb2dvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX3N1Yl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuMnMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdzaXRlSW50cm8nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuN3MnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvY2F0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzFzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzFzJywgbWFyZ2luOiAnMCBhdXRvJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzaHRhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5uYW1lfSwge3ZlbnVlLmNpdHl9LCB7dmVudWUuY291bnRyeX0uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29taW5nX3Nvb24nIGNsYXNzTmFtZT0nY29taW5nX3Nvb25fYXJlYSBwdC0yMCBwYi03MCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8xJyBzdHlsZT17eyB6SW5kZXg6IDEgfX0+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy00Jz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSBwdC01MCB3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3QoJ2V2ZW50RGF0ZScpfTo8L2gzPlxuICAgICAgICAgICAgICAgIDxwPnt3ZWRkaW5nRGF0ZUJyaWVmfTwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEFkZFRvQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e2NhbGVuZGFyRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkxhYmVsPXt0KCdidG5BZGRUb015Q2FsZW5kYXInKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy9pbWFnZXMvc2VjdGlvbl9zaGFwZS5wbmcnIGFsdD0nU2hhcGUnIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTgnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjZzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjZzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fY291bnQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgcHQtMjAnPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzYwLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTM4LFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVfY291bnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMwJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb3VudF9jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMSwgcGFkZGluZ1RvcDogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZlbnVlLm1hcFVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvYmV2ZW50LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdiZXZlbnQgY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3ZlbnVlLm1hcFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNzV2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmV5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLmFkZHJlc3NMaW5lMX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMic+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTIucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9J2NvbnRhY3QnIGNsYXNzTmFtZT0nY29udGFjdF9hcmVhJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjb250YWN0X3dyYXBwZXIgd293IGZhZGVJblVwQmlnJ1xuICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDMwLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNHMnLFxuICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluVXAnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudFJlZn0gY2xhc3NOYW1lPSdjb250YWluZXItZXZlbnRMaW5ldXAnPlxuICAgICAgICAgICAgICB7ZXZlbnRTY2hlZHVsZS5tYXAoKGV2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGltZSwgZGF0ZSwgZXZlbnQsIGljb24gfSA9IGV2O1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnRMaW5ldXAnIGtleT17ZXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGZvcm0gKi99XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgdGV4dC1jZW50ZXIgcGItMzAnPlxuICAgICAgICAgICAgICAgICAge2d1ZXN0Lm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25HcmVldGluZycpfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJyB9fT57Z3Vlc3QubmFtZX0sPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhZGVJbic+XG4gICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbG9ycyBvZiB0aGUgZGF5XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgZ2FwOiAnNTBweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUZWFsIEdyZWVuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzgwcHgnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDgwODAnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEdvbGRcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Q1OWE1NycsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvblxuICAgICAgICByZWY9e2VsZW1lbnRSZWZ9XG4gICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgY2xhc3NOYW1lPSdsb3ZlLXRpdGxlLWNvbnRhaW5lciBmYWRlSW5VcEJpZyBmYWRlSW4nXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TG92ZVRpdGxlSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvdmUtdGl0bGUnPlxuICAgICAgICAgIE15IGhlYXJ0IGlzIHlvdXJzIHRvIGhvbGQgYW5kIGNoZXJpc2ggZm9yIHRoZSByZXN0IG9mIG91ciBkYXlzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxhcnRpY2xlXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J3N0b3JpZXMtY29udGFpbmVyIGZhZGVJblVwQmlnJ1xuICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICA+XG4gICAgICAgIDxTdG9yaWVzIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZC1jb250YWluZXInPlxuICAgICAgICA8UGljdHVyZXNHcmlkIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgJz5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDVcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6ICcjRDNEM0QzJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgI0RXZWRkaW5nXG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIHsvKiA8Q29sbGVjdEd1ZXN0QXR0ZW5kYW5jZVxuICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cbiAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XG4gICAgICAvPiAqL31cbiAgICAgIHsvKiB7IXNob3dNb2RhbCAmJiAoICovfVxuICAgICAgPENhc2hHaWZ0XG4gICAgICAgIHNob3dBY2NvdW50RGV0YWlscz17c2hvd0FjY291bnREZXRhaWxzfVxuICAgICAgICBzZXRTaG93QWNjb3VudERldGFpbHM9e3NldFNob3dBY2NvdW50RGV0YWlsc31cbiAgICAgIC8+XG4gICAgICB7LyogKX0gKi99XG4gICAgICB7c2hvd0FjY291bnREZXRhaWxzICYmIChcbiAgICAgICAgPEFjY291bnREZXRhaWxzXG4gICAgICAgICAgc2hvd0FjY291bnREZXRhaWxzPXtzaG93QWNjb3VudERldGFpbHN9XG4gICAgICAgICAgc2V0U2hvd0FjY291bnREZXRhaWxzPXtzZXRTaG93QWNjb3VudERldGFpbHN9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2hvd0ludml0ZS5nZXRJbml0aWFsUHJvcHMgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IGxvY2FsZVBhcmFtcyA9IGN0eC5xdWVyeS5sYW5nIHx8IGRlZmF1bHRMb2NhbGU7XG4gIGNvbnN0IGVtcHR5R3Vlc3RQYXJhbXMgPSB7XG4gICAgZ3Vlc3Q6IHtcbiAgICAgIGd1ZXN0SWQ6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBncmVldGluZzogJycsXG4gICAgICBsb2NhbGU6IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRVcmwgPSByZXNvbHZlUGF0aChjdHgucmVxLnVybCk7XG4gIGNvbnN0IGd1ZXN0SWQgPSBjdHgucXVlcnkudTtcbiAgaWYgKCFndWVzdElkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBndWVzdERhdGEgPSBndWVzdExpc3QuZGF0YTtcbiAgY29uc3QgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCA9IGd1ZXN0TGlzdC5tZXRhLmxhc3RVcGRhdGVkQXQ7XG4gIGNvbnN0IHsgbmFtZSwgZ3JlZXRpbmcsIGxvY2FsZSB9ID1cbiAgICBndWVzdERhdGEuZmlsdGVyKChndWVzdCkgPT4gZ3Vlc3QuZ3Vlc3RJZCA9PT0gZ3Vlc3RJZClbMF0gfHwge307XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgLi4uZW1wdHlHdWVzdFBhcmFtcyxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXJsLFxuICAgIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsXG4gICAgZ3Vlc3Q6IHtcbiAgICAgIG5hbWUsXG4gICAgICBncmVldGluZyxcbiAgICAgIGd1ZXN0SWQsXG4gICAgICBsb2NhbGU6IGxvY2FsZSB8fCBsb2NhbGVQYXJhbXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dJbnZpdGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbHVyaGFzaCB9IGZyb20gJ3JlYWN0LWJsdXJoYXNoJztcclxuY29uc3QgUGljdHVyZXNHcmlkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBpY3R1cmVzID0gW1xyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDExKS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDEzKS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgxKS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDEpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9kd2VkZGluZyAoMikuanBnJyxcclxuXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDQpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9kd2VkZGluZyAoNSkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICg2KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDE0KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg3KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvZHdlZGRpbmcgKDcpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDgpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9kd2VkZGluZyAoOCkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2NvdXBsZSAoOSkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICg5KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgxMykuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL2R3ZWRkaW5nICgxMCkuanBnJyxcclxuICBdO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBpY3R1cmUsIHNldFNlbGVjdGVkUGljdHVyZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGVkSW1hZ2VzQ291bnQsIHNldExvYWRlZEltYWdlc0NvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdFBpY3R1cmUgPSAocGljdHVyZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRQaWN0dXJlKHBpY3R1cmUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFNlbGVjdGVkUGljdHVyZShudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZCc+XHJcbiAgICAgICAge3BpY3R1cmVzLm1hcCgocGljdHVyZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICB0aXRsZT0ndmlldyBpbWFnZSdcclxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT0nbW9kYWwnXHJcbiAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9JyNteU1vZGFsJ1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdFBpY3R1cmUocGljdHVyZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwaWN0dXJlJ1xyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dyaWQtaW1nJ1xyXG4gICAgICAgICAgICAgICAgYWx0PXtgUGljdHVyZSAke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3NlbGVjdGVkUGljdHVyZSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbCBmYWRlJyBpZD0nbXlNb2RhbCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1kaWFsb2cnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZXknLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1MCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzMwcHgnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2xvc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPSdtb2RhbCdcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdDbG9zZSdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRQaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD0nc2VsZWN0ZWQgcGljdHVyZSdcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpY3R1cmVzR3JpZDtcclxuIiwiaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcbmltcG9ydCAnc3dpcGVyL3N3aXBlci1idW5kbGUubWluLmNzcyc7XHJcbmltcG9ydCAnc3dpcGVyL3N3aXBlci5taW4uY3NzJztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3N3aXBlci1idW5kbGUuY3NzJztcclxuXHJcbi8vIGltcG9ydCAnc3dpcGVyL2Nzcyc7XHJcbi8vIGltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcclxuLy8gaW1wb3J0ICdzd2lwZXIvY3NzL2F1dG9wbGF5JztcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdCcmlkZScsXHJcbiAgICBkZXNjOiBgSSB3YXMgYXQgIGEgYnVyaWFsIG9mIG9uZSBvZiB0aGUgZWxkZXJzIGluIG15IGNodXJjaCBPY3RvYmVyIDIwMjIgYW5kIGNvbm5lY3RlZCB3aXRoIGEgbG90IG9mIGZvcm1lciBjaHVyY2ggbWVtYmVycyBhbmQgZnJpZW5kcy4gQSBnZW50bGUgbWFuIHdhbGtlZCB1cCB0byBtZSB0byBzYXkgSSBsb29rZWQgZmFtaWxpYXIgYW5kIGFjdHVhbGx5IGhlIGxvb2tlZCBmYW1pbGlhciB0b28uIFdlIGV4Y2hhbmdlZCBjb250YWN0cyBhZnRlciB0aGUgZmFtaWxpYXJpemF0aW9uLiBJIERpZCBteSBmaW5kaW5ncyBmcm9tIG15IG11bSBhbmQgZGlzY292ZXJlZCBvdXIgYm90aCBmYW1pbGllcyB3ZXJlIGNsb3NlLiBXZSBnb3QgdGFsa2luZyBsaXRlcmFsbHkgZXZlcnkgZGF5IGFuZCB0aGUgcmVzdMKgwqBpc8KgaGlzdG9yefCfpbAuYCxcclxuICAgIGltYWdlOiAnYXNzZXRzL2ltYWdlcy9icmlkZS5qcGcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdHcm9vbScsXHJcbiAgICBkZXNjOiBgT3VyIGZhdGhlcnMgZW5qb3llZCBhIGNsb3NlIGZyaWVuZHNoaXAgdW50aWwgbXkgZmF0aGVyJ3MgcGFzc2luZy4gVGhlIHR3byBvZiB1cyBoYWQgbmV2ZXIgaGFkIGFueSByZWFsIGNvbm5lY3Rpb24gdW50aWwgT2N0b2JlciAyMDIyIHdoZW4gd2UgY29pbmNpZGVudGFsbHkgbWV0IGF0IHRoZSBidXJpYWwgb2YgbXkgbWVudG9yJ3MgZmF0aGVyLiBJIG5vdGljZWQgaGVyIGZyb20gYSBkaXN0YW5jZSwgaGVyIHJhZGlhbnQgc21pbGUgY2F1Z2h0IG15IGF0dGVudGlvbi4gSSBhcHByb2FjaGVkIGhlciBhbmQgaGVyIG11bSByZS1pbnRyb2R1Y2luZyBteXNlbGYgdG8gYm90aCBvZiB0aGVtIGFuZCB3ZSBleGNoYW5nZWQgY29udGFjdCBpbmZvcm1hdGlvbi4gVGhpcyBtYXJrZWQgdGhlIGJlZ2lubmluZyBvZiBhIGhlYXJ0d2FybWluZyByZXVuaW9uLiBPdXIgY29udmVyc2F0aW9ucyBzaW5jZSB0aGVuIGhhdmUgYmVlbiBub3RoaW5nIHNob3J0IG9mIGV4aGlsYXJhdGluZyBhbmQgZXhjaXRpbmcsICB3aGljaCBpcyB0aGUgc3RhcnQgb2YgYSBqb3VybmV5wqB0b8KgZm9yZXZlcvCfpbAuYCxcclxuICAgIGltYWdlOiAnYXNzZXRzL2ltYWdlcy9ncm9vbS5qcGcnLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IFN0b3JpZXMgPSAoKSA9PiB7XHJcbiAgU3dpcGVyQ29yZS51c2UoW0F1dG9wbGF5XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3dpcGVyXHJcbiAgICAgIHNwYWNlQmV0d2Vlbj17NTB9XHJcbiAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgIGF1dG9wbGF5PXt7XHJcbiAgICAgICAgZGVsYXk6IDEwMDAwLFxyXG4gICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgfX1cclxuICAgICAgbW9kdWxlcz17W1BhZ2luYXRpb24sIEF1dG9wbGF5XX1cclxuICAgICAgcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuICAgID5cclxuICAgICAge2NvbnRlbnQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgaW1hZ2UsIGRlc2MgfSA9IGl0ZW07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJpZGUtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDByZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzI1cmVtJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtgJHt0aXRsZX0gc3Rvcmllc2B9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2dyb29tLXRpdGxlJz57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPSdncm9vbS1wYXJhZ3JhcGgnPntkZXNjfTwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L1N3aXBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmllcztcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICB1cmwsXG4gIGxvZ28sXG4gIGF1dGhvcixcbiAgc2l0ZU5hbWUsXG4gIHB1Ymxpc2hlZFRpbWUsXG4gIG1vZGlmaWVkVGltZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0eXBlJyBjb250ZW50PSdhcnRpY2xlJyAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtzaXRlTmFtZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9e3VybH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZScgY29udGVudD17bG9nb30gLz5cbiAgICAgIHtwdWJsaXNoZWRUaW1lICYmIChcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9J2FydGljbGU6cHVibGlzaGVkX3RpbWUnIGNvbnRlbnQ9e3B1Ymxpc2hlZFRpbWV9IC8+XG4gICAgICApfVxuICAgICAgPG1ldGEgcHJvcGVydHk9J2FydGljbGU6bW9kaWZpZWRfdGltZScgY29udGVudD17bW9kaWZpZWRUaW1lfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J2FydGljbGU6YXV0aG9yJyBjb250ZW50PXthdXRob3J9IC8+XG5cbiAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD0nc2hvcnRjdXQgaWNvbidcbiAgICAgICAgaHJlZj0nYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZz8xMjMnXG4gICAgICAgIHR5cGU9J2ltYWdlL3BuZydcbiAgICAgIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2Fzc2V0cy9jc3MvYW5pbWF0ZS5jc3MnIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2Fzc2V0cy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2Fzc2V0cy9jc3MvZGVmYXVsdC5jc3MnIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJyAvPlxuXG4gICAgICB7LyogRk9SIElFOSBiZWxvdyAqL31cbiAgICAgIHsvKiBbaWYgbHQgSUUgOV0+ICovfVxuICAgICAgPHNjcmlwdCBzcmM9J2Fzc2V0cy9qcy92ZW5kb3IvanF1ZXJ5LTEuMTIuNC5taW4uanMnPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9J2Fzc2V0cy9qcy92ZW5kb3IvbW9kZXJuaXpyLTMuNy4xLm1pbi5qcyc+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz0nYXNzZXRzL2pzL2Jvb3RzdHJhcC5taW4uanMnPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9J2Fzc2V0cy9qcy9qcXVlcnkuZWFzaW5nLm1pbi5qcyc+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICApO1xufTtcbiIsImNvbnN0IGJhc2VDb25maWcgPSB7XG4gIHdlZGRpbmdEYXk6ICdTYXR1cmRheScsXG4gIHdlZGRpbmdUaW1lOiAnOGFtIC0gOHBtJyxcbiAgd2VkZGluZ0RhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICBzaG93QnVpbHRXaXRoSW5mbzogdHJ1ZSxcbiAgc2hvd1FyQ29kZTogZmFsc2UsXG4gIGNhbGVuZGFySW5mbzoge1xuICAgIHRpbWVTdGFydElTTzogJzIwMjMtMTItMTZUMTk6MDA6MDArMDg6MDAnLFxuICAgIHRpbWVFbmRJU086ICcyMDIzLTEyLTE2VDIxOjAwOjAwKzA4OjAwJyxcbiAgfSxcbiAgY291cGxlSW5mbzoge1xuICAgIGJyaWRlTmFtZTogJ09sYWR1bm5pICcsXG4gICAgZ3Jvb21OYW1lOiAnQWRld2FsZScsXG4gICAgY291cGxlTmFtZUZvcm1hdDogJ0dST09NX0ZJUlNUJyxcbiAgICBoYXNodGFnOiAnI0RXZWRkaW5nJyxcbiAgfSxcbiAgdmVudWU6IHtcbiAgICBuYW1lOiAnTGFnb3MgQWlycG9ydCBIb3RlbCwgQmV2ZW50IENlbnRlcicsXG4gICAgYWRkcmVzc0xpbmUxOiAnMTExIG9iYWZlbWkgYXdvbG93byB3YXkgaWtlamEgTGFnb3MsIE5pZ2VyaWEnLFxuICAgIC8vIGFkZHJlc3NMaW5lMjogJ0VrbyBob3RlbCBWLkkgTGFnb3MgU3RhdGUnLFxuICAgIGNpdHk6ICdMYWdvcycsXG4gICAgY291bnRyeTogJ05pZ2VyaWEnLFxuICAgIG1hcFVybDogJ2h0dHBzOi8vbWFwcy5hcHAuZ29vLmdsL0tob0ZETVVudGJUVTZMM3k5JyxcbiAgfSxcbiAgbG9nbzoge1xuICAgIGhlYWRlckxvZ286ICdhc3NldHMvaW1hZ2VzL3Jpbmctc3ZnLnBuZycsXG4gICAgZm9vdGVyTG9nbzogJ2Fzc2V0cy92aWRlby9hdy1yaW5nLWxvZ28tdGlja2VyLm1wNCcsXG4gICAgZm9vdGVyTG9nb1R5cGU6ICdtcDQnLFxuICB9LFxuICBvZ1RhZ3M6IHtcbiAgICBsb2dvOiAnYXNzZXRzL2ltYWdlcy9hdy1yaW5nLWxvZ28ucG5nJyxcbiAgICBzaXRlTmFtZTogJ2h0dHBzOi8vZnVnbHlkYW1pLmdpdGh1Yi5pby9hZGV3YWxlLXdlZGRpbmcvJyxcbiAgICBwdWJsaXNoZWRUaW1lOiAnMjAyMy0wOS0wNycsXG4gIH0sXG59O1xuXG5jb25zdCBsYW5nID0ge1xuICBpZDoge1xuICAgIHdlZGRpbmdEYXk6ICdTYWJ0dScsXG4gICAgd2VkZGluZ0RhdGU6ICcyMiBGZWJydWFyaSAyMDIwJyxcbiAgICB2ZW51ZToge1xuICAgICAgLi4uYmFzZUNvbmZpZy52ZW51ZSxcbiAgICAgIG5hbWU6ICdIb3RlbCBPdmFsJyxcbiAgICAgIGFkZHJlc3NMaW5lMjogJ1N1cmFiYXlhLCBKYXdhIFRpbXVyLCA2MDI0MSwnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLmJhc2VDb25maWcsXG4gIGxhbmcsXG59O1xuIiwiaW1wb3J0IEkxOG4gZnJvbSBcImkxOG4tanNcIjtcbmltcG9ydCBlbiBmcm9tIFwiLi9sYW5nL2VuXCI7XG5pbXBvcnQgaWQgZnJvbSBcIi4vbGFuZy9pZFwiO1xuXG5jb25zdCBzdXBwb3J0ZWRMYW5ndWFnZXMgPSBbXG4gIHtcbiAgICBjb2RlOiBcImVuXCIsXG4gICAgbGFiZWw6IFwiRW5nbGlzaFwiLFxuICAgIHRyYW5zbGF0aW9uczogZW5cbiAgfSxcbiAge1xuICAgIGNvZGU6IFwiaWRcIixcbiAgICBsYWJlbDogXCJJbmRvbmVzaWFcIixcbiAgICB0cmFuc2xhdGlvbnM6IGlkXG4gIH1cbl07XG5cbkkxOG4uZGVmYXVsdExvY2FsZSA9IFwiZW5cIjtcbnN1cHBvcnRlZExhbmd1YWdlcy5mb3JFYWNoKGxhbmcgPT4ge1xuICBJMThuLnRyYW5zbGF0aW9uc1tsYW5nLmNvZGVdID0gbGFuZy50cmFuc2xhdGlvbnM7XG59KTtcblxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlT3B0aW9ucyA9IHN1cHBvcnRlZExhbmd1YWdlcy5tYXAobGFuZyA9PiAoe1xuICB2YWx1ZTogbGFuZy5jb2RlLFxuICBsYWJlbDogbGFuZy5sYWJlbFxufSkpO1xuXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxlID0gbG9jYWxlID0+IHtcbiAgSTE4bi5sb2NhbGUgPSBsb2NhbGU7XG59O1xuXG5leHBvcnQgY29uc3QgdCA9IChuYW1lLCBwYXJhbXMgPSB7fSkgPT4ge1xuICByZXR1cm4gSTE4bi50KG5hbWUsIHBhcmFtcyk7XG59O1xuXG5leHBvcnQgY29uc3QgVHJhbnMgPSBwcm9wcyA9PiAoXG4gIDxzcGFuXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0KHByb3BzLmkxOG5LZXksIHsgLi4ucHJvcHMgfSkgfX1cbiAgPjwvc3Bhbj5cbik7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlID0gSTE4bi5kZWZhdWx0TG9jYWxlO1xuXG5leHBvcnQgY29uc3QgdXNlVHJhbnNsYXRpb24gPSBsb2NhbGUgPT4ge1xuICBJMThuLmxvY2FsZSA9IGxvY2FsZTtcbiAgcmV0dXJuIEkxOG4udDtcbn07XG4iLCJjb25zdCBmYWxsYmFja0hvc3QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCAocGF0aCwgaGVhZGVycykgPT4ge1xuICBpZiAocGF0aC5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgLy8gVXNlIGJyb3dzZXIncyBgd2luZG93YCBpZiBoZWFkZXJzIGlzIG5vdCBwcm92aWRlZFxuICBpZiAoIWhlYWRlcnMgJiYgcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJjb3VsZCBub3QgcmVzb2x2ZSBwYXRoIHdpdGhvdXQgcmVxdWVzdCBoZWFkZXJzOiB3aW5kb3cgaXMgdW5kZWZpbmVkXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3QgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3R9JHtwYXRofWA7XG4gIH1cbiAgY29uc3QgaG9zdCA9IGhlYWRlcnNcbiAgICA/IGhlYWRlcnNbXCJ4LW5vdy1kZXBsb3ltZW50LXVybFwiXSB8fFxuICAgICAgaGVhZGVyc1tcIngtZm9yd2FyZGVkLWhvc3RcIl0gfHxcbiAgICAgIGhlYWRlcnMuaG9zdFxuICAgIDogbnVsbDtcbiAgY29uc3Qgc2NoZW1lID1cbiAgICBoZWFkZXJzICYmIGhlYWRlcnNbXCJ4LWZvcndhcmRlZC1wcm90b1wiXVxuICAgICAgPyBoZWFkZXJzW1wieC1mb3J3YXJkZWQtcHJvdG9cIl1cbiAgICAgIDogXCJodHRwXCI7XG4gIHJldHVybiBob3N0ID8gYCR7c2NoZW1lfTovLyR7aG9zdH0ke3BhdGh9YCA6IGAke2ZhbGxiYWNrSG9zdH0ke3BhdGh9YDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpMThuLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxcmNvZGUucmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWRkLXRvLWNhbGVuZGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJsdXJoYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2VldGFsZXJ0MlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2lwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9