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
  setShowAccountDetails
}) => {
  const {
    0: isHovered,
    1: setIsHovered
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("section", {
    className: "cashGift"
    //   style={{
    //     left: '50%',
    //     transform: 'translateX(-50%)',

    //     position: 'fixed',
    //     bottom: '2%',
    //     zIndex: 10000000,
    //     width: 'auto',

    //     padding: '24px 80px',
    //     borderRadius: '10px',
    //     maxWidth: '670px',
    //     margin: '24px 0',
    //     backgroundColor: '#fff',
    //     boxShadow:
    //       '0.2px 0.4px 0.5px rgba(161,161,161,.36), 0.5px 1.3px 1.6px -0.8px rgba(161,161,161,.36), 1.3px 3.4px 4.1px -1.7px rgba(161,161,161,.36), 3.1px 8.2px 9.9px -2.5px rgba(161,161,161,.36)',
    //   }}
    ,
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
      gap: 10
    },
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onClick: () => setShowAccountDetails(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(Icon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
      lineNumber: 70,
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
  }, "a.react-add-to-calendar__button span{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxhZGV3YWxlLXdlZGRpbmctaW52aXRlXFxwYWdlc1xcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThOUyxBQUc0QixlQUNXLDREQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcYWRld2FsZS13ZWRkaW5nLWludml0ZVxccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IFN0b3JpZXMgZnJvbSAnLi9zdG9yaWVzJztcbmltcG9ydCBQaWN0dXJlc0dyaWQgZnJvbSAnLi9waWN0dXJlR3JpZCc7XG5pbXBvcnQgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSBmcm9tICcuL2NvbGxlY3QtZ3Vlc3QtYXR0ZW5kYW5jZSc7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XG5pbXBvcnQgQ2FzaEdpZnQgZnJvbSAnLi9jYXNoR2lmdCc7XG5pbXBvcnQgQWNjb3VudERldGFpbHMgZnJvbSAnLi9hY2NvdW50RGV0YWlscyc7XG5cbmNvbnN0IExvdmVUaXRsZUljb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgc3JjPSdhc3NldHMvaW1hZ2VzL3dpbmUucG5nJ1xuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnODBweCcsXG4gICAgICB9fVxuICAgICAgYWx0PSd3aW5lIGlsbHVzdHJhdG9yJ1xuICAgIC8+XG4gICk7XG59O1xuY29uc3QgRXZlbnREYXRlSWNvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPSczNScgaGVpZ2h0PSc3OCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00yMC4zNTUgMTIuMDgzYy0xLjY0My0xLjYyLTIuMTU2LTQuNzcuNDEtNS44MyAxLjE4Ny0uNDkgMi42OC0uMzY1IDMuOTI4LS4yMjcgMS4yODYuMTQzIDIuNTUyLjQxNyAzLjc3Ljg1NiAyLjE3My43ODUgNS4xODQgMi4xNjQgNi4wMjcgNC41MS45OTMgMi43NjItMS45NjggNC4xMDctNC4xNTUgNC40NzQtMi43NzUuNDY1LTUuNzA2LjQxNy04LjUxMy4zMzgtMi42OTQtLjA3Ni01LjQ1NC0uMzc1LTcuOTgtMS4zNjYtMi4yNy0uODkyLTQuNTktMi4zMzMtNS43MjMtNC41OC0xLjA0My0yLjA2Ni0uODM2LTQuNTQxLjQ3NS02LjQ0NEMxMC40IDEuMTkzIDEzLjQyMi42OSAxNi4zODEuMzM3QTQ5LjQ2MiA0OS40NjIgMCAwIDEgMjcuMzA3LjI3YzEuMi4xMjMgMS4yMTIgMi4wMTcgMCAxLjg5M2E0OS44NzcgNDkuODc3IDAgMCAwLTcuNDEyLS4yMjNjLTIuMjY1LjEwNS00LjY3MS4yNC02Ljg1LjkwMi0xLjgwNy41NDktMy4yMzIgMS44ODItMy42MjcgMy43Ny0uNDE0IDEuOTc4LjcwOCAzLjczMiAyLjIzIDQuOTAzIDMuMjUgMi41IDcuNjcyIDIuODExIDExLjYxNSAyLjgxNyAyLjIyNS4wMDQgNC41NS4wNzQgNi43NDUtLjMyLjgwNC0uMTQ0IDEuODk1LS4zMiAyLjQ4NC0uOTU3LjgxNC0uODgtLjMyLTEuOTM4LTEuMDEtMi40NjctMS44My0xLjQwNi00LjE0NC0yLjI4My02LjQxNi0yLjYxOS0uOTc5LS4xNDUtMi41NzktLjQxMy0zLjUyIDAtMS4yOTQuNTctLjU3NiAyLjA2My4xNDcgMi43NzcuODcuODU2LS40NyAyLjE5NC0xLjMzOCAxLjMzOFonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTM0LjAyMyAxMy43MjdjLTEuNDk0IDUuNDUtMy4xNTggMTAuOTMzLTcuMDk5IDE1LjE1N2EyMi4zOSAyMi4zOSAwIDAgMS02LjAzIDQuNTgxYy0yLjMyMyAxLjIwNS01LjEzIDIuMzg1LTcuNzgxIDEuODI4LTEuMTktLjI1LS42ODctMi4wNzUuNTAzLTEuODI1IDIuMjkyLjQ4IDUuMDItLjg4OCA2Ljk3LTEuOTg2YTIwLjgwOCAyMC44MDggMCAwIDAgNS4zOTYtNC4zNzNjMy40NDYtMy45MDQgNC44NjktOC45NyA2LjIxNi0xMy44ODQuMzItMS4xNzQgMi4xNDctLjY3NiAxLjgyNS41MDJaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J005LjAyOCA3LjkyM2MtMS4yNjYgOC4zNDQtMi41OSAxOC4zNyAzLjcyMiAyNS4xMzMuODMuODktLjUwNSAyLjIzMS0xLjMzOCAxLjMzOS02Ljg0LTcuMzMxLTUuNTg3LTE3Ljg5My00LjIxLTI2Ljk3NC4xODMtMS4yIDIuMDA2LS42OSAxLjgyNi41MDJaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00xNC44NzcgMzQuMzQzYy0xLjkxOCAxNC4wNzQtMS4zNDkgMjguNDYgMS42MzYgNDIuMzQ0LjI1NSAxLjE4Ny0xLjU2OSAxLjY5NS0xLjgyNS41MDNhMTI1LjY1NCAxMjUuNjU0IDAgMCAxLTEuNjM2LTQzLjM1Yy4xNjQtMS4yMDIgMS45ODgtLjY5IDEuODI1LjUwM1onXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTEwLjM0IDYwLjg5MWMtLjQxNi00LjY1Ni0zLjg0NS04Ljg2LTguMjktMTAuMjYtMS4xNTgtLjM2NS0uNjY0LTIuMTkzLjUwMi0xLjgyNSA1LjMwMSAxLjY3IDkuMTg2IDYuNTYyIDkuNjggMTIuMDg1LjEwOCAxLjIxMi0xLjc4NSAxLjIwNS0xLjg5MyAwWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMy4xOTcgNDkuOTJjLS43MyAxLjM4Ni0uOTIgMi45MzctLjk2IDQuNDg0LS4wMzcgMS40NzYtLjI1OSAzLjI0Ni43MzkgNC40Ni45MiAxLjEyIDIuMjcxIDEuOTU2IDMuNTMgMi42NDNhMTcuNTk1IDE3LjU5NSAwIDAgMCA0LjQwMiAxLjY2MmMxLjE4NC4yOC42ODMgMi4xMDUtLjUwMyAxLjgyNWExOS4zNyAxOS4zNyAwIDAgMS01LjA3LTEuOTc0Yy0xLjUxNS0uODU1LTMuMTA2LTEuOTIyLTQuMTItMy4zNjJDLjE1MyA1OC4xNS4zIDU2LjE2My4zNDUgNTQuNDA0Yy4wNDktMS44OS4zMjctMy43NSAxLjIxNy01LjQ0LjU2OS0xLjA3NyAyLjIwMi0uMTIyIDEuNjM1Ljk1NlonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTcuOTE5IDU4LjAyNmMxLjM2IDEuNzIgMi43MjMgMy40NCA0LjA4NCA1LjE2LjMwNi4zODguNDA2Ljk2NSAwIDEuMzM5LS4zNDIuMzEzLTEuMDEuNDE0LTEuMzM4IDBMNi41OCA1OS4zNjNjLS4zMDYtLjM4Ny0uNDA2LS45NjUgMC0xLjMzNy4zNDItLjMxNCAxLjAxLS40MTUgMS4zMzkgMFpNMTIuNjI5IDUxLjg4NGEyOC4wOCAyOC4wOCAwIDAgMSAxNy40MTgtNi42MjhjMS4yMTktLjAzIDEuMjE4IDEuODYzIDAgMS44OTItNS44NjMuMTQtMTEuNTk0IDIuMjg4LTE2LjA4IDYuMDc0LS45MjYuNzgyLTIuMjctLjU1LTEuMzM4LTEuMzM4WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMzIuMjY3IDQ2LjY3M2MtMS4yMSA0LjIzNC00LjA3MiA4LjE0Mi04LjA1NCAxMC4xNS0zLjc4MyAxLjkwNi04LjYyMyAxLjc1My0xMS42NDktMS40OC0uODMxLS44ODkuNTA0LTIuMjMgMS4zMzgtMS4zMzggMi42IDIuNzc2IDYuNzM1IDIuNjc2IDkuODcyLjkwNyAzLjI5Ny0xLjg1NyA1LjYzOC01LjEzOCA2LjY2OS04Ljc0Mi4zMzQtMS4xNjkgMi4xNi0uNjcyIDEuODI0LjUwM1onXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTE0LjM1IDUzLjEzOGE0MC43MDcgNDAuNzA3IDAgMCAxIDUuOTEyLTEuNTMzYy40ODUtLjA4NyAxLjA0My4xMzIgMS4xNjMuNjYxLjEwNS40NjMtLjE0IDEuMDctLjY2IDEuMTY1YTQwLjYxNiA0MC42MTYgMCAwIDAtNS45MTMgMS41MzNjLS40NjguMTYtMS4wNTQtLjE4NC0xLjE2My0uNjYxLS4xMi0uNTI2LjE1OC0uOTkzLjY2LTEuMTY1WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5jb25zdCBIZWFkZXJMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lQmxvY2snLFxuICAgICAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAwcHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxKScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxzdmcgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyBmaWxsPSdub25lJz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdtMzQuNjEzIDI3LjczNyAxLjQzNy4wODhhNi4xMTEgNi4xMTEgMCAwIDEgMS45MjUuMmMuMzUuMi41MzguNDc1LjEuNzYyLS40MzcuMjg4LTEuMSAwLTEuNSAwLS40IDAtLjkyNS0uMS0xLjQtLjEyNWEzLjI5NiAzLjI5NiAwIDAgMC0xLjA1IDBjLS4zNS4xMTMtLjI4Ny4yMTMtLjQ4Ny42MTNhNy41NzcgNy41NzcgMCAwIDEtMS43NjMgMi4xNWMtMS40NjIgMS4yNS0zLjQ1IDEuMzM3LTUuMTYyIDIuMDg3LjQ1LTIuOTYyIDIuNzI1LTQuNDM3IDUuNDc1LTUtLjk3NSAwLTIuNjc1LS44NzUtMy41MTMtLjQ2Mi0xLjQ4Ny42MzctMy43NSAxLjUtNC4yMTIgMy4yNS0uMjM4IDEuMDYyLS4xODggMi42MzctMS41MzggMi45NjItMS4zNS4zMjUtMS43MjUtLjk2Mi0xLjQtMS45NzUtLjg3NS40NS0yLjA1LjA4OC0xLjg2Mi0xLjA1LjE4Ny0xLjEzNyAxLjUyNS0xLjI1IDIuMzg3LTEuMzYyIDIuMjEzLS4zNSAzLjktMS42MjUgNS45ODgtMi4yODhhMjUuODQ1IDI1Ljg0NSAwIDAgMC0yLjUtMS4wMjUgNi44MzcgNi44MzcgMCAwIDAtMi42LjQ4OGMtLjkyLjExNC0xLjgyOC4zMS0yLjcxMy41ODctLjY0LjM0LTEuMTkuODI4LTEuNiAxLjQyNS0uOTg3IDEuMTYzLTIuMiAyLjUtMy45IDIuMzc1LTIuMTUtLjItMS45MTItMi42NS0uMzI1LTMuNDg3LTEuMDI1IDAtMi41LS42MzgtMi40LTEuODc1LjA4OC0xLjU1IDEuOTYzLTEuNzM4IDMuMTI1LTEuNDI1IDEuMDk3LjQxOSAyLjE2Ni45MDcgMy4yIDEuNDYyIDEuOTM4Ljc4OCAzLjc1IDAgNS43NjMtLjJhMzcuOTk0IDM3Ljk5NCAwIDAgMS00LjY1LTIuNjc1IDIuMTg3IDIuMTg3IDAgMCAwLTEuMzc1LS41NWgtMS4yNWEyNy42NzEgMjcuNjcxIDAgMCAwLTMuMzc1LjFjLS43NzUgMC0xLjMyNS43MzgtMS44MzggMS4yNWE2LjEzOCA2LjEzOCAwIDAgMS0yLjUgMS43MTMgMS45ODcgMS45ODcgMCAwIDEtMi41LS42MjVBMi4wNzUgMi4wNzUgMCAwIDEgNy43MTMgMjIuNGMtLjk3NS0uMzI1LTIuMjg4LTEuMTEzLTEuNDI1LTIuMyAxLjAxMi0xLjM4OCAyLjg3NS0uNjUgMy45MzcuMTVhNS44NzUgNS44NzUgMCAwIDAgMi45MzggMS42YzEuNDgyLjA4NyAyLjk2OC4wODcgNC40NSAwYTIzLjc0IDIzLjc0IDAgMCAxLTIuMDM4LTIuMDEzIDUuNzg3IDUuNzg3IDAgMCAwLS44NjItLjk2MmMtLjg1Mi0uMzgtMS43NTItLjY0MS0yLjY3NS0uNzc1YTE0LjUyMiAxNC41MjIgMCAwIDAtMi43NS0uNzc1IDUuNjExIDUuNjExIDAgMCAwLTIuNjg4LjYyNSA2LjI1MSA2LjI1MSAwIDAgMS0zLjEzNy41MjUgMS45NSAxLjk1IDAgMCAxLTEuNjc1LTIuMDYzYy4xMjUtMS4wMzcuOTg3LTEuMzg3IDEuODc1LTEuNTUtMi4wMjUtMS44ODcuNzc1LTMuNjg3IDIuNS0yLjAxMiAxLjAyNSAxLjAxMiAxLjYzNyAyLjkxMiAyLjkxMiAzLjQyNSAxLjYxMy42NSAzLjM3NS44ODcgNSAxLjYzNy0uOTM3LTEuMjUtMS44NS0yLjUtMi43MjUtMy43NWE2Ljg3NSA2Ljg3NSAwIDAgMC0yLjc3NS0yLjk3NWMtMS40ODctLjY3NS0zLjQ1LTEuNDg3LTMuNzUtMy4zNS0uMzUtMi4yODcgMi4yMzgtMS45IDMuNDUtLjk1YTIuMTYzIDIuMTYzIDAgMCAxIDEuNC0yLjVjMS4yNS0uNDg3IDIuMDEzLjQ2MyAyLjE3NSAxLjY3NS4wMjUgMS40MzgtLjYgMi44MjUtLjgyNSA0LjMyNS0uMjYyIDIuMjEzIDIuMTUgNC44NzUgMy4zNjMgNi42IDAtMS44NS43LTQuMDYyLS4yNjMtNS43ODctLjYyNS0xLjQyNS0yLjYxMi0zLjgyNS0xLjI1LTUuNDI1IDEtMS4xMzggMi4yMzguMTI1IDIuNTc1IDEuMTVhMS40NjIgMS40NjIgMCAwIDEgMi41LS4yNjNjMS4yNSAxLjcyNS0uNzUgMy4yMzgtMS42NjIgNC41MTMtMS4xIDEuNTEyLS45IDIuOTUtMS4wMzggNC43MzdhNi41OTcgNi41OTcgMCAwIDAtLjE2MiAyLjAyNWMuMTM3LjQxMy44MTIuODg4IDEuMTEyIDEuMjVhMjYuOTMgMjYuOTMgMCAwIDAgMi41NjMgMi4zNjNjLS4xLTIuMS4yMTItNC4yNzUtLjUxMy02LjI1LS40MjUtMS4xNS0xLjQtMy4xNS0uNS00LjI4OC45LTEuMTM3IDEuOS0uMTM3IDIuMjUuODEzYTIuMDI1IDIuMDI1IDAgMCAxIDIuNS0uNjUgMS45NSAxLjk1IDAgMCAxIC40MjUgMi41Yy0uODUgMS44MTItMy4yODcgMi43NjItMy4yODcgNC44MjUtLjEyNS45NS0uMDYzIDEuOTg3LS4xIDIuOTVhMi4wMjMgMi4wMjMgMCAwIDAgMCAuNjc1Yy4xMzcuMjc1Ljg2Mi42MTIgMS4xMTIuNzc1YTM1LjM3NyAzNS4zNzcgMCAwIDAgNSAyLjYzN2MtLjI4Ny0xLjI1LS4zMTItMi40MTItLjUxMi0zLjc1YTUuMzM4IDUuMzM4IDAgMCAwLTEuMzg4LTIuODEyYy0uNzM3LS45ODgtMS41LTIuNjUtLjM4Ny0zLjY4OC44NzUtLjgyNSAyLjAyNS0uMDYyIDIuMzUuODg4IDEuMDUtMS42IDMuNjYyLTEuNDM4IDMuNzUuNzM3LjA4NyAxLjY1LTEuMzUgMi43MjUtMi41IDMuNjI1LS4yMzMuMTUtLjQxOS4zNjMtLjUzOC42MTNhMy4wMzMgMy4wMzMgMCAwIDAtLjE4Ny43MjVjLS4wNTcuODM2LS4wMTEgMS42NzUuMTM3IDIuNSAwIC41MTIgMCAxLjI1LjQxMyAxLjUxMi41MjIuMjggMS4wODIuNDgyIDEuNjYyLjZhMjAuMTMgMjAuMTMgMCAwIDAgNC4xODggMS4wMzggNi4wNzUgNi4wNzUgMCAwIDEtMi4xODgtNC4yIDkuMSA5LjEgMCAwIDEgLjgtNC41MTNjLjgyNSAxLjI1IDIuMDEzIDIuMzUgMi43NjMgMy42NzVhNS43NjMgNS43NjMgMCAwIDEgLjEgNS4yNWMuMTY2LjAxMy4zMzMuMDEzLjUgMFonXG4gICAgICAgICAgZmlsbD0nI0RGQUUwMCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdNMTkuNTUgMTUuNzg3czMuMjc1LTIuODUgMi41LTMuNjM3Yy0uNzc1LS43ODgtMi4xMTIuOTEyLTIuMTEyLjkxMnMtLjYzOC0xLjg1LTEuNDYzLTEuMjVjLS44MjUuNiAxLjA3NSAzLjk3NSAxLjA3NSAzLjk3NVpNMTUuMTg4IDEwLjc4OHMyLjk3NS0yLjkxMyAxLjk2Mi0zLjQ3NWMtMS4wMTItLjU2My0xLjc1IDEuMjUtMS43NSAxLjI1cy0uOTc1LTIuNS0xLjc4Ny0xLjc4OGMtLjgxMy43MTMgMS41NzUgNC4wMTMgMS41NzUgNC4wMTNaTTkuNjYyIDEwLjQzN3MxLjk2My00LjU4Ny40ODgtNC44MzctMS40IDIuNi0xLjQgMi42LTIuOTEzLTEuOTUtMy4xMTMtLjdjLS4yMzcgMS41MjUgNC4wMjUgMi45MzcgNC4wMjUgMi45MzdaTTcuMyAxNi41MTNzLTEuOC0zLjYyNS0yLjktMy4yYy0xLjEuNDI1LjQyNSAyLjEuNDI1IDIuMXMtMi4wODguMjc1LTEuOTYzIDEuNTEyYy4xMjUgMS4yMzggNC40MzgtLjQxMiA0LjQzOC0uNDEyWk0xMS42NjIgMjIuNTc1UzguMzUgMTkuNjYzIDcuNSAyMC40MjVjLS44NS43NjMgMi4wNjIgMi4wNzUgMi4wNjIgMi4wNzVzLTMuMSAxLjQ3NS0yLjA2MiAyLjJjMS4yNS44ODggNC4xNjItMi4xMjUgNC4xNjItMi4xMjVaTTE4LjU4OCAyNy4zNzVzLTQuNjM4LTIuNjM4LTUuMzYzLTEuNTg4Yy0uNzI1IDEuMDUgMi43NjMgMS44MjUgMi43NjMgMS44MjVzLTIuODI1IDEuOTM4LTEuNTEzIDIuNjM4YzEuMzEzLjcgNC4xMTMtMi44NzUgNC4xMTMtMi44NzVaTTI1Ljg1IDIwczMuNzUtMi41IDIuMjg3LTMuNTEyYy0xLjExMi0uNzYzLTIuNSAxLjA4Ny0yLjUgMS4wODdzLS44MTItMi4xLTEuNzEyLTEuNGMtLjkuNyAxLjkyNSAzLjgyNSAxLjkyNSAzLjgyNVpNMjMuOTYzIDMwLjE3NXMtLjQzOCAyLjg1LTEuMjUgMy4xNWMtLjgxMy4zLS4yMTMtMi4wNzUtLjIxMy0yLjA3NXMtMi4wMjUuOTI1LTEuOTI1IDBjLjEtLjkyNSAzLjM4OC0xLjA3NSAzLjM4OC0xLjA3NVonXG4gICAgICAgICAgZmlsbD0nI0Y3RDQ3RCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPSdNMzMuMjg3IDI2Ljk1YTQuODg3IDQuODg3IDAgMCAwIC4xMjUtMy4zNSA2LjM2MiA2LjM2MiAwIDAgMC0xLjg4Ny0zLjA1Yy0xLjA2MyA0LjUzNyAxLjc2MiA2LjQgMS43NjIgNi40Wk0zMi43NSAyOS4xNWMtLjYyMi44MDQtMS4zNiAxLjUxMS0yLjE4OCAyLjEtLjg3NC41NTUtMS44MjYuOTc2LTIuODI1IDEuMjVhNi43MTMgNi43MTMgMCAwIDEgMi4xMTMtMi4xMzcgMTEuNTg4IDExLjU4OCAwIDAgMSAyLjktMS4yMTNaJ1xuICAgICAgICAgIGZpbGw9JyNEQ0IzQjQnXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5jb25zdCB0cmFuc2xhdGVDb25maWcgPSAoYXBwQ29uZmlnLCBsb2NhbGUpID0+IHtcbiAgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSBkZWZhdWx0TG9jYWxlKSB7XG4gICAgcmV0dXJuIGFwcENvbmZpZztcbiAgfVxuICAvLyBSZXBsYWNlIGNvbmZpZyB3aXRoIGxhbmdcbiAgY29uc3QgY29uZmlnTGFuZyA9IGFwcENvbmZpZy5sYW5nW2xvY2FsZV07XG4gIGlmIChjb25maWdMYW5nID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbG9jYWxlOiAnLCBsb2NhbGUpO1xuICB9XG4gIHJldHVybiB7IC4uLmFwcENvbmZpZywgLi4uY29uZmlnTGFuZyB9O1xufTtcblxuY29uc3QgU2hvd0ludml0ZSA9ICh7IGN1cnJlbnRVcmwsIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsIGd1ZXN0IH0pID0+IHtcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9uKGd1ZXN0LmxvY2FsZSk7XG5cbiAgLy8gSW5pdGlhdGUgY29uZmlnIHZhcmlhYmxlc1xuICBjb25zdCB7XG4gICAgbG9nbyxcbiAgICBvZ1RhZ3MsXG4gICAgY291cGxlSW5mbyxcbiAgICB2ZW51ZSxcbiAgICB3ZWRkaW5nRGF5LFxuICAgIHdlZGRpbmdEYXRlLFxuICAgIHdlZGRpbmdUaW1lLFxuICAgIGNhbGVuZGFySW5mbyxcbiAgfSA9IHRyYW5zbGF0ZUNvbmZpZyhhcHBDb25maWcsIGd1ZXN0LmxvY2FsZSk7XG4gIGNvbnN0IHsgYnJpZGVOYW1lLCBncm9vbU5hbWUsIGhhc2h0YWcsIGNvdXBsZU5hbWVGb3JtYXQgfSA9IGNvdXBsZUluZm87XG5cbiAgY29uc3QgY291cGxlTmFtZVN0ciA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJ1xuICAgICAgPyBgJHtncm9vbU5hbWV9ICYgJHticmlkZU5hbWV9YFxuICAgICAgOiBgJHticmlkZU5hbWV9ICYgJHtncm9vbU5hbWV9YDtcbiAgY29uc3QgY291cGxlTmFtZSA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJyA/IChcbiAgICAgIDw+XG4gICAgICAgIHticmlkZU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7Z3Jvb21OYW1lfVxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIDw+XG4gICAgICAgIHtncm9vbU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7YnJpZGVOYW1lfVxuICAgICAgPC8+XG4gICAgKTtcblxuICAvLyBWZW51ZSBpbmZvXG4gIGNvbnN0IHZlbnVlQnJpZWYgPSBgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWA7XG4gIGNvbnN0IHdlZGRpbmdEYXRlQnJpZWYgPSBgJHt3ZWRkaW5nRGF5fSwgJHt3ZWRkaW5nRGF0ZX1gO1xuXG4gIC8vIEV2ZW50IGluZm9cbiAgY29uc3QgZXZlbnRUaXRsZSA9IGAke2NvdXBsZU5hbWVTdHJ9J3MgV2VkZGluZ2A7XG4gIGxldCBldmVudERlc2NyaXB0aW9uID0gYCR7d2VkZGluZ0RhdGVCcmllZn0gYXQgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fWA7XG4gIGlmIChndWVzdC5uYW1lKSB7XG4gICAgZXZlbnREZXNjcmlwdGlvbiA9IGBEZWFyICR7Z3Vlc3QubmFtZX0sIHlvdSBhcmUgY29yZGlhbGx5IGludml0ZWQgdG8gb3VyIHdlZGRpbmcgb24gJHt3ZWRkaW5nRGF0ZX0gYXQgJHt2ZW51ZS5uYW1lfS4gTG9va2luZyBmb3J3YXJkIHRvIHNlZWluZyB5b3UhYDtcbiAgfVxuXG4gIC8vIENhbGVuZGFyIHBheWxvYWRcbiAgY29uc3QgY2FsZW5kYXJFdmVudCA9IHtcbiAgICB0aXRsZTogZXZlbnRUaXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZXZlbnREZXNjcmlwdGlvbixcbiAgICBsb2NhdGlvbjogYCR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gLFxuICAgIHN0YXJ0VGltZTogY2FsZW5kYXJJbmZvLnRpbWVTdGFydElTTyxcbiAgICBlbmRUaW1lOiBjYWxlbmRhckluZm8udGltZUVuZElTTyxcbiAgfTtcblxuICBjb25zdCBldmVudFNjaGVkdWxlID0gW1xuICAgIHtcbiAgICAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgICAgZXZlbnQ6ICdDaHVyY2gnLFxuICAgICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgICB0aW1lOiAnMTJwbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAgIGV2ZW50OiAnUmVjZXB0aW9uJyxcbiAgICAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgICAgdGltZTogJzJwbScsXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAvLyAgIGV2ZW50OiAnRW5nYWdlbWVudCcsXG4gICAgLy8gICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAvLyAgIHRpbWU6ICcycG0nLFxuICAgIC8vIH0sXG4gIF07XG5cbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dBY2NvdW50RGV0YWlscywgc2V0U2hvd0FjY291bnREZXRhaWxzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgfSwgMTAwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYuY3VycmVudDtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRQb3NpdGlvbiA8IHdpbmRvd0hlaWdodCAqIDAuOSkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQtZWxlbWVudCcpOyAvLyBBZGQgdGhlIENTUyBjbGFzcyB3aGVuIHRoZSBlbGVtZW50IGlzIDc1JSB2aXNpYmxlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZC1lbGVtZW50Jyk7IC8vIFJlbW92ZSB0aGUgQ1NTIGNsYXNzIGlmIG5vdCB2aXNpYmxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBSdW4gdGhpcyBlZmZlY3Qgb25seSBvbmNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYS5yZWFjdC1hZGQtdG8tY2FsZW5kYXJfX2J1dHRvbiBzcGFuIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZFxuICAgICAgICB7Li4ub2dUYWdzfVxuICAgICAgICB0aXRsZT17ZXZlbnRUaXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2V2ZW50RGVzY3JpcHRpb259XG4gICAgICAgIGd1ZXN0TmFtZT17Z3Vlc3QubmFtZX1cbiAgICAgICAgdXJsPXtjdXJyZW50VXJsfVxuICAgICAgICBkYXRlPXt3ZWRkaW5nRGF0ZUJyaWVmfVxuICAgICAgICBtb2RpZmllZFRpbWU9e2d1ZXN0TGlzdExhc3RVcGRhdGVkQXR9XG4gICAgICAgIHZlbnVlPXt2ZW51ZUJyaWVmfVxuICAgICAgICBsb2dvPXtyZXNvbHZlUGF0aChvZ1RhZ3MubG9nbyl9XG4gICAgICAgIGF1dGhvcj17cmVzb2x2ZVBhdGgoJy8nKX1cbiAgICAgIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hlYWRlcl9hcmVhJz5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2hlYWRlci1jb250YWluZXInPlxuICAgICAgICAgIDxIZWFkZXJMb2dvIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoZWFkZXItbG9nby10ZXh0Jz5UaGUgQWtpbmxhZ3VuJ3MgUGFydHk8L3NwYW4+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPSdob21lJyBjbGFzc05hbWU9J2hlYWRlcl9zbGlkZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay1saXN0IGRyYWdnYWJsZSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stdHJhY2snIHN0eWxlPXt7IG9wYWNpdHk6IDEgfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZ19jb3ZlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvcGljICg4KS5qcGcnXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGFsdD0nYmFja2dyb3VuZCBpbWFnZSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgY29udGVudC1vdmVybGF5Jz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMjQnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX2NvbnRlbnQgdGV4dC1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDYwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfc3ViX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC4ycycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3NpdGVJbnRybycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuN3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC43cycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdXBsZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNodGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5uYW1lfSwge3ZlbnVlLmNpdHl9LCB7dmVudWUuY291bnRyeX0uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29taW5nX3Nvb24nIGNsYXNzTmFtZT0nY29taW5nX3Nvb25fYXJlYSBwdC0yMCBwYi03MCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8xJyBzdHlsZT17eyB6SW5kZXg6IDEgfX0+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy00Jz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSBwdC01MCB3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3QoJ2V2ZW50RGF0ZScpfTo8L2gzPlxuICAgICAgICAgICAgICAgIDxwPnt3ZWRkaW5nRGF0ZUJyaWVmfTwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEFkZFRvQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e2NhbGVuZGFyRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkxhYmVsPXt0KCdidG5BZGRUb015Q2FsZW5kYXInKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy9pbWFnZXMvc2VjdGlvbl9zaGFwZS5wbmcnIGFsdD0nU2hhcGUnIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTgnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjZzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjZzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fY291bnQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgcHQtMjAnPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzYwLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTM4LFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVfY291bnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMwJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb3VudF9jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMSwgcGFkZGluZ1RvcDogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZlbnVlLm1hcFVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvYmV2ZW50LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdiZXZlbnQgY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3ZlbnVlLm1hcFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNzV2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmV5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLmFkZHJlc3NMaW5lMX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMic+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTIucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9J2NvbnRhY3QnIGNsYXNzTmFtZT0nY29udGFjdF9hcmVhJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjb250YWN0X3dyYXBwZXIgd293IGZhZGVJblVwQmlnJ1xuICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDMwLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNHMnLFxuICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluVXAnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudFJlZn0gY2xhc3NOYW1lPSdjb250YWluZXItZXZlbnRMaW5ldXAnPlxuICAgICAgICAgICAgICB7ZXZlbnRTY2hlZHVsZS5tYXAoKGV2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGltZSwgZGF0ZSwgZXZlbnQsIGljb24gfSA9IGV2O1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnRMaW5ldXAnIGtleT17ZXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGZvcm0gKi99XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgdGV4dC1jZW50ZXIgcGItMzAnPlxuICAgICAgICAgICAgICAgICAge2d1ZXN0Lm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25HcmVldGluZycpfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJyB9fT57Z3Vlc3QubmFtZX0sPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhZGVJbic+XG4gICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbG9ycyBvZiB0aGUgZGF5XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgZ2FwOiAnNTBweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUZWFsIEdyZWVuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzgwcHgnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDgwODAnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEdvbGRcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Q1OWE1NycsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvblxuICAgICAgICByZWY9e2VsZW1lbnRSZWZ9XG4gICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgY2xhc3NOYW1lPSdsb3ZlLXRpdGxlLWNvbnRhaW5lciBmYWRlSW5VcEJpZyBmYWRlSW4nXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TG92ZVRpdGxlSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvdmUtdGl0bGUnPlxuICAgICAgICAgIE15IGhlYXJ0IGlzIHlvdXJzIHRvIGhvbGQgYW5kIGNoZXJpc2ggZm9yIHRoZSByZXN0IG9mIG91ciBkYXlzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxhcnRpY2xlXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J3N0b3JpZXMtY29udGFpbmVyIGZhZGVJblVwQmlnJ1xuICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICA+XG4gICAgICAgIDxTdG9yaWVzIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZC1jb250YWluZXInPlxuICAgICAgICA8UGljdHVyZXNHcmlkIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgJz5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDVcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6ICcjRDNEM0QzJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgI0RXZWRkaW5nXG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgIC8+XG4gICAgICB7IXNob3dNb2RhbCAmJiA8Q2FzaEdpZnQgc2V0U2hvd0FjY291bnREZXRhaWxzPXtzZXRTaG93QWNjb3VudERldGFpbHN9IC8+fVxuICAgICAge3Nob3dBY2NvdW50RGV0YWlscyAmJiAoXG4gICAgICAgIDxBY2NvdW50RGV0YWlsc1xuICAgICAgICAgIHNob3dBY2NvdW50RGV0YWlscz17c2hvd0FjY291bnREZXRhaWxzfVxuICAgICAgICAgIHNldFNob3dBY2NvdW50RGV0YWlscz17c2V0U2hvd0FjY291bnREZXRhaWxzfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNob3dJbnZpdGUuZ2V0SW5pdGlhbFByb3BzID0gKGN0eCkgPT4ge1xuICBjb25zdCBsb2NhbGVQYXJhbXMgPSBjdHgucXVlcnkubGFuZyB8fCBkZWZhdWx0TG9jYWxlO1xuICBjb25zdCBlbXB0eUd1ZXN0UGFyYW1zID0ge1xuICAgIGd1ZXN0OiB7XG4gICAgICBndWVzdElkOiAnJyxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZ3JlZXRpbmc6ICcnLFxuICAgICAgbG9jYWxlOiBsb2NhbGVQYXJhbXMsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBjdXJyZW50VXJsID0gcmVzb2x2ZVBhdGgoY3R4LnJlcS51cmwpO1xuICBjb25zdCBndWVzdElkID0gY3R4LnF1ZXJ5LnU7XG4gIGlmICghZ3Vlc3RJZCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgLi4uZW1wdHlHdWVzdFBhcmFtcyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgZ3Vlc3REYXRhID0gZ3Vlc3RMaXN0LmRhdGE7XG4gIGNvbnN0IGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQgPSBndWVzdExpc3QubWV0YS5sYXN0VXBkYXRlZEF0O1xuICBjb25zdCB7IG5hbWUsIGdyZWV0aW5nLCBsb2NhbGUgfSA9XG4gICAgZ3Vlc3REYXRhLmZpbHRlcigoZ3Vlc3QpID0+IGd1ZXN0Lmd1ZXN0SWQgPT09IGd1ZXN0SWQpWzBdIHx8IHt9O1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3VycmVudFVybCxcbiAgICBndWVzdExpc3RMYXN0VXBkYXRlZEF0LFxuICAgIGd1ZXN0OiB7XG4gICAgICBuYW1lLFxuICAgICAgZ3JlZXRpbmcsXG4gICAgICBndWVzdElkLFxuICAgICAgbG9jYWxlOiBsb2NhbGUgfHwgbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93SW52aXRlO1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\USER\\\\Documents\\\\adewale-wedding-invite\\\\pages\\\\index.jsx */"), __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, ogTags, {
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
      animationDelay: '1s'
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
      lineNumber: 297,
      columnNumber: 25
    }
  }, venue.name, ", ", venue.city, ", ", venue.country, ".")))))))))), __jsx("section", {
    id: "coming_soon",
    className: "jsx-1703421768" + " " + 'coming_soon_area pt-20 pb-70',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
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
      lineNumber: 316,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
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
      lineNumber: 322,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 17
    }
  }, t('eventDate'), ":"), __jsx("p", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
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
      lineNumber: 336,
      columnNumber: 17
    }
  }, __jsx(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    event: calendarEvent,
    buttonLabel: t('btnAddToMyCalendar'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 19
    }
  })), __jsx("img", {
    src: "assets/images/section_shape.png",
    alt: "Shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-8',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
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
      lineNumber: 351,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_count d-flex justify-content-end pt-20',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
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
      lineNumber: 363,
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
      lineNumber: 372,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: venue.mapUrl,
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
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
      lineNumber: 377,
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
      lineNumber: 383,
      columnNumber: 23
    }
  }, venue.addressLine1)))))))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_shape_2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-2.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 11
    }
  }))), __jsx("section", {
    id: "contact",
    className: "jsx-1703421768" + " " + 'contact_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
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
      lineNumber: 409,
      columnNumber: 11
    }
  }, __jsx("div", {
    ref: elementRef,
    className: "jsx-1703421768" + " " + 'container-eventLineup',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
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
        lineNumber: 426,
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
        lineNumber: 428,
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
        lineNumber: 437,
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
        lineNumber: 446,
        columnNumber: 21
      }
    }, time));
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-9',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'section_title text-center pb-30',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
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
      lineNumber: 465,
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
      lineNumber: 474,
      columnNumber: 23
    }
  }, guest.name, ",")))))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'fadeIn',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
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
      lineNumber: 482,
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
      lineNumber: 490,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
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
      lineNumber: 499,
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
      lineNumber: 507,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
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
      lineNumber: 518,
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
      lineNumber: 526,
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
      lineNumber: 541,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 9
    }
  }, __jsx(LoveTitleIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'love-title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
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
      lineNumber: 556,
      columnNumber: 7
    }
  }, __jsx(_stories__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 9
    }
  })), __jsx("article", {
    className: "jsx-1703421768" + " " + 'picture-grid-container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 7
    }
  }, __jsx(_pictureGrid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 9
    }
  })), __jsx("footer", {
    id: "footer",
    className: "jsx-1703421768" + " " + 'footer_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_shape_1',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_widget pt-50 pb-10 text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_logo',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
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
      lineNumber: 583,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_title ',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
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
      lineNumber: 592,
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
      lineNumber: 603,
      columnNumber: 9
    }
  }, "#DWedding")), __jsx(_collect_guest_attendance__WEBPACK_IMPORTED_MODULE_13__["default"], {
    showModal: showModal,
    setShowModal: setShowModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 7
    }
  }), !showModal && __jsx(_cashGift__WEBPACK_IMPORTED_MODULE_15__["default"], {
    setShowAccountDetails: setShowAccountDetails,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 22
    }
  }), showAccountDetails && __jsx(_accountDetails__WEBPACK_IMPORTED_MODULE_16__["default"], {
    showAccountDetails: showAccountDetails,
    setShowAccountDetails: setShowAccountDetails,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
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
  const pictures = ['assets/images/couple (1).jpg',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWNjb3VudERldGFpbHMuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2Nhc2hHaWZ0LmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xsZWN0LWd1ZXN0LWF0dGVuZGFuY2UuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9waWN0dXJlR3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3Rvcmllcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Jlc29sdmVQYXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtYWlsanMtY29tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaTE4bi1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInFyY29kZS5yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYWRkLXRvLWNhbGVuZGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYmx1cmhhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3ZWV0YWxlcnQyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dpcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dpcGVyL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiQWNjb3VudERldGFpbHMiLCJzaG93QWNjb3VudERldGFpbHMiLCJzZXRTaG93QWNjb3VudERldGFpbHMiLCJfX2pzeCIsImNsYXNzTmFtZSIsInRhYkluZGV4Iiwicm9sZSIsInN0eWxlIiwiZGlzcGxheSIsImNvbG9yIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwidHlwZSIsIm9uQ2xpY2siLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZyIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpblJpZ2h0IiwiSWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbCIsInhtbG5zIiwiZCIsIkNhc2hHaWZ0IiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwidXNlU3RhdGUiLCJnYXAiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwiQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSIsInNldFNob3dNb2RhbCIsInNob3dNb2RhbCIsIm5hbWUiLCJzZXROYW1lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaHR0cFN0YXR1cyIsInN0YXR1c0NvZGUiLCJTd2FsIiwiZmlyZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmQiLCJwcm9jZXNzIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiY2F0Y2giLCJlcnIiLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyb3dzIiwiTG92ZVRpdGxlSWNvbiIsInNyYyIsImFsdCIsIkV2ZW50RGF0ZUljb24iLCJIZWFkZXJMb2dvIiwiYmFja2ZhY2VWaXNpYmlsaXR5IiwidHJhbnNsYXRlQ29uZmlnIiwiYXBwQ29uZmlnIiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNvbmZpZ0xhbmciLCJsYW5nIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJfb2JqZWN0U3ByZWFkIiwiU2hvd0ludml0ZSIsImN1cnJlbnRVcmwiLCJndWVzdExpc3RMYXN0VXBkYXRlZEF0IiwiZ3Vlc3QiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJsb2dvIiwib2dUYWdzIiwiY291cGxlSW5mbyIsInZlbnVlIiwid2VkZGluZ0RheSIsIndlZGRpbmdEYXRlIiwid2VkZGluZ1RpbWUiLCJjYWxlbmRhckluZm8iLCJicmlkZU5hbWUiLCJncm9vbU5hbWUiLCJoYXNodGFnIiwiY291cGxlTmFtZUZvcm1hdCIsImNvdXBsZU5hbWVTdHIiLCJjb3VwbGVOYW1lIiwiUmVhY3QiLCJGcmFnbWVudCIsInZlbnVlQnJpZWYiLCJjaXR5IiwiY291bnRyeSIsIndlZGRpbmdEYXRlQnJpZWYiLCJldmVudFRpdGxlIiwiZXZlbnREZXNjcmlwdGlvbiIsImNhbGVuZGFyRXZlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJzdGFydFRpbWUiLCJ0aW1lU3RhcnRJU08iLCJlbmRUaW1lIiwidGltZUVuZElTTyIsImV2ZW50U2NoZWR1bGUiLCJpY29uIiwiZXZlbnQiLCJkYXRlIiwidGltZSIsInVzZUVmZmVjdCIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJoYW5kbGVTY3JvbGwiLCJlbGVtZW50IiwiY3VycmVudCIsImVsZW1lbnRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfSlNYU3R5bGUiLCJIZWFkIiwiX2V4dGVuZHMiLCJndWVzdE5hbWUiLCJ1cmwiLCJtb2RpZmllZFRpbWUiLCJyZXNvbHZlUGF0aCIsImF1dGhvciIsIm9wYWNpdHkiLCJvYmplY3RGaXQiLCJwYWRkaW5nVG9wIiwibWF4SGVpZ2h0IiwibWFyZ2luIiwibWFyZ2luVG9wIiwiaGVhZGVyTG9nbyIsImFuaW1hdGlvbkRlbGF5IiwiekluZGV4IiwidmlzaWJpbGl0eSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uTmFtZSIsInBhZGRpbmdCb3R0b20iLCJBZGRUb0NhbGVuZGFyIiwiYnV0dG9uTGFiZWwiLCJocmVmIiwibWFwVXJsIiwibWF4V2lkdGgiLCJvdmVyZmxvd1giLCJ0ZXh0T3ZlcmZsb3ciLCJhZGRyZXNzTGluZTEiLCJib3hTaGFkb3ciLCJyZWYiLCJtYXAiLCJldiIsImluZGV4Iiwia2V5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiU3RvcmllcyIsIlBpY3R1cmVzR3JpZCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImxvY2FsZVBhcmFtcyIsInF1ZXJ5IiwiZW1wdHlHdWVzdFBhcmFtcyIsImd1ZXN0SWQiLCJncmVldGluZyIsInJlcSIsInUiLCJndWVzdERhdGEiLCJndWVzdExpc3QiLCJkYXRhIiwibWV0YSIsImxhc3RVcGRhdGVkQXQiLCJmaWx0ZXIiLCJwaWN0dXJlcyIsInNlbGVjdGVkUGljdHVyZSIsInNldFNlbGVjdGVkUGljdHVyZSIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJsb2FkZWRJbWFnZXNDb3VudCIsInNldExvYWRlZEltYWdlc0NvdW50IiwiaGFuZGxlU2VsZWN0UGljdHVyZSIsInBpY3R1cmUiLCJjb250ZW50IiwiZGVzYyIsImltYWdlIiwiU3dpcGVyQ29yZSIsInVzZSIsIkF1dG9wbGF5IiwiU3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsIm1vZHVsZXMiLCJQYWdpbmF0aW9uIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsIml0ZW0iLCJTd2lwZXJTbGlkZSIsInNpdGVOYW1lIiwicHVibGlzaGVkVGltZSIsInByb3BlcnR5IiwicmVsIiwiYmFzZUNvbmZpZyIsInNob3dCdWlsdFdpdGhJbmZvIiwic2hvd1FyQ29kZSIsImZvb3RlckxvZ28iLCJmb290ZXJMb2dvVHlwZSIsImFkZHJlc3NMaW5lMiIsInN1cHBvcnRlZExhbmd1YWdlcyIsImNvZGUiLCJsYWJlbCIsInRyYW5zbGF0aW9ucyIsImVuIiwiSTE4biIsImZvckVhY2giLCJsYW5ndWFnZU9wdGlvbnMiLCJzZXRMb2NhbGUiLCJwYXJhbXMiLCJUcmFucyIsInByb3BzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJpMThuS2V5IiwiZmFsbGJhY2tIb3N0IiwicGF0aCIsImhlYWRlcnMiLCJzdGFydHNXaXRoIiwicHJvdG9jb2wiLCJob3N0Iiwic2NoZW1lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FB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RixJQUFJLEVBQUMsU0FBUztJQUFBcEIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1QsQ0FBQyxFQUNSWixLQUFBO0lBQ0U2QixDQUFDLEVBQUMsaUpBQWlKO0lBQ25KRixJQUFJLEVBQUMsU0FBUztJQUFBcEIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1QsQ0FBQyxFQUNSWixLQUFBO0lBQ0U2QixDQUFDLEVBQUMseUpBQXlKO0lBQzNKRixJQUFJLEVBQUMsU0FBUztJQUFBcEIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1QsQ0FBQyxFQUNSWixLQUFBO0lBQ0U2QixDQUFDLEVBQUMsbUpBQW1KO0lBQ3JKRixJQUFJLEVBQUMsU0FBUztJQUFBcEIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1QsQ0FBQyxFQUNSWixLQUFBO0lBQ0U2QixDQUFDLEVBQUMsc1VBQXNVO0lBQ3hVRixJQUFJLEVBQUMsU0FBUztJQUFBcEIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1QsQ0FBQyxFQUNSWixLQUFBO0lBQ0U2QixDQUFDLEVBQUMsa1RBQWtUO0lBQ3BURixJQUFJLEVBQUMsU0FBUztJQUFBcEIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1QsQ0FBQyxFQUNSWixLQUFBO0lBQ0U2QixDQUFDLEVBQUMsME5BQTBOO0lBQzVORixJQUFJLEVBQUMsU0FBUztJQUFBcEIsTUFBQTtJQUFBQyxR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cUVBQ0YsQ0FBQztJQUNIO0lBQ0EsTUFBTTtNQUFFNkssUUFBUTtNQUFFQztJQUFLLENBQUMsR0FBR3RILE1BQU0sQ0FBQ3ZCLFFBQVE7SUFDMUMsT0FBUSxHQUFFNEksUUFBUyxLQUFJQyxJQUFLLEdBQUVKLElBQUssRUFBQztFQUN0QztFQUNBLE1BQU1JLElBQUksR0FBR0gsT0FBTyxHQUNoQkEsT0FBTyxDQUFDLHNCQUFzQixDQUFDLElBQy9CQSxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFDM0JBLE9BQU8sQ0FBQ0csSUFBSSxHQUNaLElBQUk7RUFDUixNQUFNQyxNQUFNLEdBQ1ZKLE9BQU8sSUFBSUEsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEdBQ25DQSxPQUFPLENBQUMsbUJBQW1CLENBQUMsR0FDNUIsTUFBTTtFQUNaLE9BQU9HLElBQUksR0FBSSxHQUFFQyxNQUFPLE1BQUtELElBQUssR0FBRUosSUFBSyxFQUFDLEdBQUksR0FBRUQsWUFBYSxHQUFFQyxJQUFLLEVBQUM7QUFDdkUsQ0FBQyxFOzs7Ozs7Ozs7OztBQzNCRCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFjY291bnREZXRhaWxzID0gKHsgc2hvd0FjY291bnREZXRhaWxzLCBzZXRTaG93QWNjb3VudERldGFpbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT0nbW9kYWwgbW9kYWxCYWNrZ3JvdW5kJ1xyXG4gICAgICB0YWJJbmRleD0nLTEnXHJcbiAgICAgIHJvbGU9J2RpYWxvZydcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBzaG93QWNjb3VudERldGFpbHMgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtZGlhbG9nJyByb2xlPSdkb2N1bWVudCc+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50ICBuZW9uVGV4dCdcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjbG9zZSBndWVzdC1tb2RhbCdcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FjY291bnREZXRhaWxzKGZhbHNlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICYjMTAwMDU7XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzAgMjBweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FzaCBHaWZ0XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2YwZjBmMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBCYW5rOlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICBXZW1hIEJhbmtcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZjBmMGYwJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIE5hbWU6XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgIEFkZXdhbGUgQWtpbmxhZ3VuwqBcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZjBmMGYwJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFjY291bnQgTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAwMjMzNTg0MTQyXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50RGV0YWlscztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSWNvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPSc2MSdcclxuICAgICAgICBoZWlnaHQ9JzM0J1xyXG4gICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9J00zMC4xNjUgMTAuMTI2Yy0zLjM2LjY0My01LjU3NiA0LjQzMi00Ljc5IDguNTA2LjM1OCAxLjkzIDEuMjg3IDMuNjQ2IDIuNzE3IDQuODYgMS4xNDQgMS4wMDEgMi41MDIgMS41MDIgMy44NiAxLjUwMi4yODUgMCAuNjQzIDAgLjkzLS4wNzEgMS42NDMtLjI4NiAzLjA3My0xLjM1OSA0LjAwMi0zLjAwMi44NTgtMS41NzMgMS4xNDQtMy41NzUuNzg2LTUuNTA1LS43ODYtNC4wNzQtNC4xNDYtNi44NjEtNy41MDUtNi4yOVptNS41MDMgMTEuMTUxYy0uNzE1IDEuMjg3LTEuNzg3IDIuMTQ1LTMuMDczIDIuMzYtMS4yODYuMjEzLTIuNTczLS4xNDQtMy43MTctMS4xNDUtMS4xNDQtMS0xLjkzLTIuNDMtMi4yODgtNC4wNzQtLjY0My0zLjM2IDEuMDcyLTYuNTA1IDMuNzg5LTcuMDA1LjIxNC0uMDcyLjUtLjA3Mi43MTUtLjA3MiAyLjQzIDAgNC43MTggMi4yMTYgNS4yOSA1LjI5LjI4NSAxLjY0My4wNyAzLjI4OC0uNzE2IDQuNjQ2WidcclxuICAgICAgICAgIGZpbGw9JyNGNkIxMDAnXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD0nTTU0LjExIDguNjk2Yy0uMjE1LS4xNDMtLjQzLS4xNDMtLjU3Mi0uMDcxIDAgMC0xLjY0NC41LTIuNjQ1LS4yMTQtLjU3Mi0uMzU4LS44NTgtMS4xNDQtLjkzLTIuMTQ1IDAtLjIxNC0uMTQzLS40MjktLjI4NS0uNWExLjM1IDEuMzUgMCAwIDAtLjU3Mi0uMTQ0Yy0uMTQzIDAtMTIuMDA5IDIuMjE2LTIxLjU4Ny43ODctMTAuNDM2LTEuNTczLTE4LjcyOC4zNTctMTkuMDg1LjQyOC0uMjE1LjA3Mi0uMzU4LjIxNS0uNS4zNTgtLjA3Mi4yMTQtLjE0NC40MjktLjA3Mi41NzIgMCAuMDcxLjc4NiAyLjIxNi0yLjkzMSAzLjY0NS0uMjg2LjE0My0uNS40MjktLjQyOS43MTVsMS40MyAxMi42NTJjMCAuMjE1LjE0My40My4yODUuNS4xNDQuMDcyLjQzLjE0NC41NzIuMDcyIDAgMCAxLjY0NC0uNSAyLjY0NS4yMTUuNTcyLjM1Ny44NTcgMS4xNDMuOTMgMi4xNDQgMCAuMjE0LjE0Mi40MjkuMjg1LjU3Mi4xNDMuMDcxLjI4Ni4xNDMuNDI5LjE0M2guMjE0Yy4wNzIgMCA4LjE0OS0yLjIxNiAyMC4wMTUtLjU3MiAxMC4yMjEgMS40MyAyMC40NDMtLjU3MiAyMC41ODYtLjY0My4yMTQtLjA3MS4zNTctLjE0My41LS4zNTguMTQ0LS4yMTQuMTQ0LS40MjguMDcyLS41NzEgMC0uMDcyLS43ODctMi4yMTYgMi45My0zLjY0Ni4yODYtLjE0My41MDEtLjQyOS40My0uNzE1bC0xLjQzLTEyLjY1MmMwLS4yODYtLjE0My0uNDI5LS4yODYtLjU3MlpNNTEuMjUgMjQuMjhjLS4yODUuNjQzLS4yODUgMS4yMTUtLjI4NSAxLjY0NC0yLjQzLjQyOS0xMC45MzcgMS42NDQtMTkuMzcxLjUtMy4zNi0uNS02LjQzMy0uNjQzLTkuMDc4LS42NDMtNS4zNjEgMC05LjE1LjcxNS0xMC43MjIgMS4wNzItLjIxNS0xLjA3Mi0uNzE1LTEuODU4LTEuNDMtMi40My0xLS43MTUtMi4yMTYtLjcxNS0zLjA3My0uNTcyTDYuMDA0IDEyLjQ4NUM3LjU3NyAxMS43NyA4LjY1IDEwLjg0IDkuMTUgOS42OTdjLjI4NS0uNjQzLjI4NS0xLjIxNS4yODUtMS43MTUgMi4xNDUtLjQzIDkuMzY0LTEuNTAyIDE3Ljg3LS4yODYgOC41NzggMS4yODYgMTguNTE0LS4yMTUgMjEuMzAxLS42NDMuMjE1IDEuMDcyLjY0NCAxLjkzIDEuNDMgMi41MDIgMSAuNzE1IDIuMjE2LjcxNSAzLjA3My41NzJsMS4yODcgMTEuMzY1Yy0xLjU3Mi43MTQtMi42NDUgMS42NDMtMy4xNDUgMi43ODdaJ1xyXG4gICAgICAgICAgZmlsbD0nI0Y2QjEwMCdcclxuICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPSdNNTcuMDQuNjJhLjUzOC41MzggMCAwIDAtLjM1Ny0uNTAyYy0uMjE0LS4xNDMtLjQyOC0uMTQzLS42NDMtLjA3LS4wNzEuMDctOS4zNjQgMy41NzMtMjQuMTYgMi40M0M2LjUwNC40NzUuNSA1LjE5My4yODYgNS40MDcuMDcgNS41NTEgMCA1LjgzNyAwIDYuMDUxbDMuMzYgMjcuMzA2YzAgLjIxNC4xNDMuNDI5LjM1Ny41NzIuMTQzLjA3MS4yMTQuMDcxLjM1OC4wNzEuMDcgMCAuMjE0IDAgLjI4NS0uMDcxLjA3Mi0uMDcyIDguNzItMy45MzIgMjguNTItMS44NTkgMjAuMzczIDIuMTQ1IDI2Ljk0OS0zLjI4OCAyNy4yMzUtMy41NzQuMjE0LS4xNDMuMjg1LS4zNTcuMjE0LS42NDNMNTcuMDQxLjYyWk0zMy4wMjUgMzAuNzExYy0xNi44Ny0xLjc4Ny0yNS42NjIuNjQzLTI4LjM3OCAxLjU3M0wxLjUwMSA2LjMzOGMxLjUwMS0uODU4IDguNzItNC4xNDYgMzAuMzA3LTIuNDMgMTIuNzI0IDEgMjEuMzAxLTEuMzU5IDIzLjk0Ni0yLjIxNmwzLjIxNyAyNi4wMThjLTEuNTAyLjkzLTguNTc4IDQuNzktMjUuOTQ4IDMuMDAyWidcclxuICAgICAgICAgIGZpbGw9JyNGNkIxMDAnXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2FzaEdpZnQgPSAoeyBzZXRTaG93QWNjb3VudERldGFpbHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT0nY2FzaEdpZnQnXHJcbiAgICAgIC8vICAgc3R5bGU9e3tcclxuICAgICAgLy8gICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICAvLyAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXHJcblxyXG4gICAgICAvLyAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgIC8vICAgICBib3R0b206ICcyJScsXHJcbiAgICAgIC8vICAgICB6SW5kZXg6IDEwMDAwMDAwLFxyXG4gICAgICAvLyAgICAgd2lkdGg6ICdhdXRvJyxcclxuXHJcbiAgICAgIC8vICAgICBwYWRkaW5nOiAnMjRweCA4MHB4JyxcclxuICAgICAgLy8gICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAvLyAgICAgbWF4V2lkdGg6ICc2NzBweCcsXHJcbiAgICAgIC8vICAgICBtYXJnaW46ICcyNHB4IDAnLFxyXG4gICAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgIC8vICAgICBib3hTaGFkb3c6XHJcbiAgICAgIC8vICAgICAgICcwLjJweCAwLjRweCAwLjVweCByZ2JhKDE2MSwxNjEsMTYxLC4zNiksIDAuNXB4IDEuM3B4IDEuNnB4IC0wLjhweCByZ2JhKDE2MSwxNjEsMTYxLC4zNiksIDEuM3B4IDMuNHB4IDQuMXB4IC0xLjdweCByZ2JhKDE2MSwxNjEsMTYxLC4zNiksIDMuMXB4IDguMnB4IDkuOXB4IC0yLjVweCByZ2JhKDE2MSwxNjEsMTYxLC4zNiknLFxyXG4gICAgICAvLyAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICBnYXA6IDEwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSl9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dBY2NvdW50RGV0YWlscyh0cnVlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dCcsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogaXNIb3ZlcmVkID8gJ3NjYWxlKDEuMiknIDogJ3NjYWxlKDEpJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2FzaCBHaWZ0XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FzaEdpZnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5pbXBvcnQgeyBzZW5kIH0gZnJvbSAnZW1haWxqcy1jb20nO1xyXG5jb25zdCBDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlID0gKHsgc2V0U2hvd01vZGFsLCBzaG93TW9kYWwgfSkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGh0dHBTdGF0dXMoc3RhdHVzQ29kZSkge1xyXG4gICAgaWYgKHN0YXR1c0NvZGUgPj0gMjAwICYmIHN0YXR1c0NvZGUgPD0gMjk5KSB7XHJcbiAgICAgIFN3YWwuZmlyZSgnU3VjY2VzcyEnLCAnV2UgYXBwcmVjaWF0ZSB5b3VyIHJlc3BvbnNlIScsICdzdWNjZXNzJyk7XHJcbiAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XHJcbiAgICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgICBzZXRFbWFpbCgnJyk7XHJcbiAgICAgIHNldE5hbWUoJycpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID49IDQwMCAmJiBzdGF0dXNDb2RlIDw9IDQ5OSkge1xyXG4gICAgICBTd2FsLmZpcmUoJ0Vycm9yIScsICdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiEnLCAnZXJyb3InKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA+PSA1MDApIHtcclxuICAgICAgU3dhbC5maXJlKCdFcnJvciEnLCAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4hJywgJ2Vycm9yJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ3Vua25vd24gc3RhdHVzJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhbWVzc2FnZSkge1xyXG4gICAgICBTd2FsLmZpcmUoJycsICdBbGwgZmllbGRzIGFyZSByZXF1aXJlZCcsICdlcnJvcicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgYXdhaXQgc2VuZChcclxuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU1BSUxKU19TRVJWSUNFX0lELFxyXG4gICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTUFJTEpTX1RFTVBMQVRFX0lELFxyXG4gICAgICB7IG5hbWUsIGVtYWlsLCBtZXNzYWdlIH0sXHJcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VNQUlMSlNfVVNFUl9JRFxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBodHRwU3RhdHVzKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBTd2FsLmZpcmUoJ0Vycm9yIScsICdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiEnLCAnZXJyb3InKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT0nbW9kYWwnXHJcbiAgICAgIHRhYkluZGV4PSctMSdcclxuICAgICAgcm9sZT0nZGlhbG9nJ1xyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IHNob3dNb2RhbCA/ICdibG9jaycgOiAnbm9uZScsXHJcblxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtZGlhbG9nJyByb2xlPSdkb2N1bWVudCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQgIGdsYXNzbW9ycGhpc20nPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2xvc2UgZ3Vlc3QtbW9kYWwnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAmIzEwMDA1O1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgIDxoMlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm1fdGl0bGUgbWItNCdcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBJbmZvcm0gdXMgb2YgeW91ciBhdmFpbGFiaWxpdHlcclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBtYi0zJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1sYWJlbCdcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBOYW1lOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMyc+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J2F0dGVuZGluZydcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1sYWJlbCdcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFdpbGwgeW91IGJlIGF0dGVuZGluZz9cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz0nNCdcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgICAgICBpZD0nYXR0ZW5kaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdndWVzdC1mb3JtLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAnU3VibWl0dGluZy4uLicgOiAnU3VibWl0J31cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZTtcclxuIiwiaW1wb3J0IEFkZFRvQ2FsZW5kYXIgZnJvbSAncmVhY3QtYWRkLXRvLWNhbGVuZGFyJztcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuaW1wb3J0IEhlYWQgZnJvbSAnQHNyYy9jb21wb25lbnRzL0hlYWQnO1xuaW1wb3J0IHJlc29sdmVQYXRoIGZyb20gJ0BzcmMvdXRpbHMvcmVzb2x2ZVBhdGgnO1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICdAc3JjL2NvbmZpZy9hcHAnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24sIGRlZmF1bHRMb2NhbGUgfSBmcm9tICdAc3JjL2kxOG4nO1xuaW1wb3J0IGd1ZXN0TGlzdCBmcm9tICcuL2d1ZXN0X2xpc3QuanNvbic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgU3RvcmllcyBmcm9tICcuL3N0b3JpZXMnO1xuaW1wb3J0IFBpY3R1cmVzR3JpZCBmcm9tICcuL3BpY3R1cmVHcmlkJztcbmltcG9ydCBDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlIGZyb20gJy4vY29sbGVjdC1ndWVzdC1hdHRlbmRhbmNlJztcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcbmltcG9ydCBDYXNoR2lmdCBmcm9tICcuL2Nhc2hHaWZ0JztcbmltcG9ydCBBY2NvdW50RGV0YWlscyBmcm9tICcuL2FjY291bnREZXRhaWxzJztcblxuY29uc3QgTG92ZVRpdGxlSWNvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aW1nXG4gICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvd2luZS5wbmcnXG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogJzgwcHgnLFxuICAgICAgICBoZWlnaHQ6ICc4MHB4JyxcbiAgICAgIH19XG4gICAgICBhbHQ9J3dpbmUgaWxsdXN0cmF0b3InXG4gICAgLz5cbiAgKTtcbn07XG5jb25zdCBFdmVudERhdGVJY29uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9JzM1JyBoZWlnaHQ9Jzc4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTIwLjM1NSAxMi4wODNjLTEuNjQzLTEuNjItMi4xNTYtNC43Ny40MS01LjgzIDEuMTg3LS40OSAyLjY4LS4zNjUgMy45MjgtLjIyNyAxLjI4Ni4xNDMgMi41NTIuNDE3IDMuNzcuODU2IDIuMTczLjc4NSA1LjE4NCAyLjE2NCA2LjAyNyA0LjUxLjk5MyAyLjc2Mi0xLjk2OCA0LjEwNy00LjE1NSA0LjQ3NC0yLjc3NS40NjUtNS43MDYuNDE3LTguNTEzLjMzOC0yLjY5NC0uMDc2LTUuNDU0LS4zNzUtNy45OC0xLjM2Ni0yLjI3LS44OTItNC41OS0yLjMzMy01LjcyMy00LjU4LTEuMDQzLTIuMDY2LS44MzYtNC41NDEuNDc1LTYuNDQ0QzEwLjQgMS4xOTMgMTMuNDIyLjY5IDE2LjM4MS4zMzdBNDkuNDYyIDQ5LjQ2MiAwIDAgMSAyNy4zMDcuMjdjMS4yLjEyMyAxLjIxMiAyLjAxNyAwIDEuODkzYTQ5Ljg3NyA0OS44NzcgMCAwIDAtNy40MTItLjIyM2MtMi4yNjUuMTA1LTQuNjcxLjI0LTYuODUuOTAyLTEuODA3LjU0OS0zLjIzMiAxLjg4Mi0zLjYyNyAzLjc3LS40MTQgMS45NzguNzA4IDMuNzMyIDIuMjMgNC45MDMgMy4yNSAyLjUgNy42NzIgMi44MTEgMTEuNjE1IDIuODE3IDIuMjI1LjAwNCA0LjU1LjA3NCA2Ljc0NS0uMzIuODA0LS4xNDQgMS44OTUtLjMyIDIuNDg0LS45NTcuODE0LS44OC0uMzItMS45MzgtMS4wMS0yLjQ2Ny0xLjgzLTEuNDA2LTQuMTQ0LTIuMjgzLTYuNDE2LTIuNjE5LS45NzktLjE0NS0yLjU3OS0uNDEzLTMuNTIgMC0xLjI5NC41Ny0uNTc2IDIuMDYzLjE0NyAyLjc3Ny44Ny44NTYtLjQ3IDIuMTk0LTEuMzM4IDEuMzM4WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMzQuMDIzIDEzLjcyN2MtMS40OTQgNS40NS0zLjE1OCAxMC45MzMtNy4wOTkgMTUuMTU3YTIyLjM5IDIyLjM5IDAgMCAxLTYuMDMgNC41ODFjLTIuMzIzIDEuMjA1LTUuMTMgMi4zODUtNy43ODEgMS44MjgtMS4xOS0uMjUtLjY4Ny0yLjA3NS41MDMtMS44MjUgMi4yOTIuNDggNS4wMi0uODg4IDYuOTctMS45ODZhMjAuODA4IDIwLjgwOCAwIDAgMCA1LjM5Ni00LjM3M2MzLjQ0Ni0zLjkwNCA0Ljg2OS04Ljk3IDYuMjE2LTEzLjg4NC4zMi0xLjE3NCAyLjE0Ny0uNjc2IDEuODI1LjUwMlonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTkuMDI4IDcuOTIzYy0xLjI2NiA4LjM0NC0yLjU5IDE4LjM3IDMuNzIyIDI1LjEzMy44My44OS0uNTA1IDIuMjMxLTEuMzM4IDEuMzM5LTYuODQtNy4zMzEtNS41ODctMTcuODkzLTQuMjEtMjYuOTc0LjE4My0xLjIgMi4wMDYtLjY5IDEuODI2LjUwMlonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTE0Ljg3NyAzNC4zNDNjLTEuOTE4IDE0LjA3NC0xLjM0OSAyOC40NiAxLjYzNiA0Mi4zNDQuMjU1IDEuMTg3LTEuNTY5IDEuNjk1LTEuODI1LjUwM2ExMjUuNjU0IDEyNS42NTQgMCAwIDEtMS42MzYtNDMuMzVjLjE2NC0xLjIwMiAxLjk4OC0uNjkgMS44MjUuNTAzWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMTAuMzQgNjAuODkxYy0uNDE2LTQuNjU2LTMuODQ1LTguODYtOC4yOS0xMC4yNi0xLjE1OC0uMzY1LS42NjQtMi4xOTMuNTAyLTEuODI1IDUuMzAxIDEuNjcgOS4xODYgNi41NjIgOS42OCAxMi4wODUuMTA4IDEuMjEyLTEuNzg1IDEuMjA1LTEuODkzIDBaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00zLjE5NyA0OS45MmMtLjczIDEuMzg2LS45MiAyLjkzNy0uOTYgNC40ODQtLjAzNyAxLjQ3Ni0uMjU5IDMuMjQ2LjczOSA0LjQ2LjkyIDEuMTIgMi4yNzEgMS45NTYgMy41MyAyLjY0M2ExNy41OTUgMTcuNTk1IDAgMCAwIDQuNDAyIDEuNjYyYzEuMTg0LjI4LjY4MyAyLjEwNS0uNTAzIDEuODI1YTE5LjM3IDE5LjM3IDAgMCAxLTUuMDctMS45NzRjLTEuNTE1LS44NTUtMy4xMDYtMS45MjItNC4xMi0zLjM2MkMuMTUzIDU4LjE1LjMgNTYuMTYzLjM0NSA1NC40MDRjLjA0OS0xLjg5LjMyNy0zLjc1IDEuMjE3LTUuNDQuNTY5LTEuMDc3IDIuMjAyLS4xMjIgMS42MzUuOTU2WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNNy45MTkgNTguMDI2YzEuMzYgMS43MiAyLjcyMyAzLjQ0IDQuMDg0IDUuMTYuMzA2LjM4OC40MDYuOTY1IDAgMS4zMzktLjM0Mi4zMTMtMS4wMS40MTQtMS4zMzggMEw2LjU4IDU5LjM2M2MtLjMwNi0uMzg3LS40MDYtLjk2NSAwLTEuMzM3LjM0Mi0uMzE0IDEuMDEtLjQxNSAxLjMzOSAwWk0xMi42MjkgNTEuODg0YTI4LjA4IDI4LjA4IDAgMCAxIDE3LjQxOC02LjYyOGMxLjIxOS0uMDMgMS4yMTggMS44NjMgMCAxLjg5Mi01Ljg2My4xNC0xMS41OTQgMi4yODgtMTYuMDggNi4wNzQtLjkyNi43ODItMi4yNy0uNTUtMS4zMzgtMS4zMzhaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00zMi4yNjcgNDYuNjczYy0xLjIxIDQuMjM0LTQuMDcyIDguMTQyLTguMDU0IDEwLjE1LTMuNzgzIDEuOTA2LTguNjIzIDEuNzUzLTExLjY0OS0xLjQ4LS44MzEtLjg4OS41MDQtMi4yMyAxLjMzOC0xLjMzOCAyLjYgMi43NzYgNi43MzUgMi42NzYgOS44NzIuOTA3IDMuMjk3LTEuODU3IDUuNjM4LTUuMTM4IDYuNjY5LTguNzQyLjMzNC0xLjE2OSAyLjE2LS42NzIgMS44MjQuNTAzWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMTQuMzUgNTMuMTM4YTQwLjcwNyA0MC43MDcgMCAwIDEgNS45MTItMS41MzNjLjQ4NS0uMDg3IDEuMDQzLjEzMiAxLjE2My42NjEuMTA1LjQ2My0uMTQgMS4wNy0uNjYgMS4xNjVhNDAuNjE2IDQwLjYxNiAwIDAgMC01LjkxMyAxLjUzM2MtLjQ2OC4xNi0xLjA1NC0uMTg0LTEuMTYzLS42NjEtLjEyLS41MjYuMTU4LS45OTMuNjYtMS4xNjVaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmNvbnN0IEhlYWRlckxvZ28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmVCbG9jaycsXG4gICAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwcHgsIDBweCkgcm90YXRlKDBkZWcpIHNjYWxlKDEpJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHN2ZyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIGZpbGw9J25vbmUnPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9J20zNC42MTMgMjcuNzM3IDEuNDM3LjA4OGE2LjExMSA2LjExMSAwIDAgMSAxLjkyNS4yYy4zNS4yLjUzOC40NzUuMS43NjItLjQzNy4yODgtMS4xIDAtMS41IDAtLjQgMC0uOTI1LS4xLTEuNC0uMTI1YTMuMjk2IDMuMjk2IDAgMCAwLTEuMDUgMGMtLjM1LjExMy0uMjg3LjIxMy0uNDg3LjYxM2E3LjU3NyA3LjU3NyAwIDAgMS0xLjc2MyAyLjE1Yy0xLjQ2MiAxLjI1LTMuNDUgMS4zMzctNS4xNjIgMi4wODcuNDUtMi45NjIgMi43MjUtNC40MzcgNS40NzUtNS0uOTc1IDAtMi42NzUtLjg3NS0zLjUxMy0uNDYyLTEuNDg3LjYzNy0zLjc1IDEuNS00LjIxMiAzLjI1LS4yMzggMS4wNjItLjE4OCAyLjYzNy0xLjUzOCAyLjk2Mi0xLjM1LjMyNS0xLjcyNS0uOTYyLTEuNC0xLjk3NS0uODc1LjQ1LTIuMDUuMDg4LTEuODYyLTEuMDUuMTg3LTEuMTM3IDEuNTI1LTEuMjUgMi4zODctMS4zNjIgMi4yMTMtLjM1IDMuOS0xLjYyNSA1Ljk4OC0yLjI4OGEyNS44NDUgMjUuODQ1IDAgMCAwLTIuNS0xLjAyNSA2LjgzNyA2LjgzNyAwIDAgMC0yLjYuNDg4Yy0uOTIuMTE0LTEuODI4LjMxLTIuNzEzLjU4Ny0uNjQuMzQtMS4xOS44MjgtMS42IDEuNDI1LS45ODcgMS4xNjMtMi4yIDIuNS0zLjkgMi4zNzUtMi4xNS0uMi0xLjkxMi0yLjY1LS4zMjUtMy40ODctMS4wMjUgMC0yLjUtLjYzOC0yLjQtMS44NzUuMDg4LTEuNTUgMS45NjMtMS43MzggMy4xMjUtMS40MjUgMS4wOTcuNDE5IDIuMTY2LjkwNyAzLjIgMS40NjIgMS45MzguNzg4IDMuNzUgMCA1Ljc2My0uMmEzNy45OTQgMzcuOTk0IDAgMCAxLTQuNjUtMi42NzUgMi4xODcgMi4xODcgMCAwIDAtMS4zNzUtLjU1aC0xLjI1YTI3LjY3MSAyNy42NzEgMCAwIDAtMy4zNzUuMWMtLjc3NSAwLTEuMzI1LjczOC0xLjgzOCAxLjI1YTYuMTM4IDYuMTM4IDAgMCAxLTIuNSAxLjcxMyAxLjk4NyAxLjk4NyAwIDAgMS0yLjUtLjYyNUEyLjA3NSAyLjA3NSAwIDAgMSA3LjcxMyAyMi40Yy0uOTc1LS4zMjUtMi4yODgtMS4xMTMtMS40MjUtMi4zIDEuMDEyLTEuMzg4IDIuODc1LS42NSAzLjkzNy4xNWE1Ljg3NSA1Ljg3NSAwIDAgMCAyLjkzOCAxLjZjMS40ODIuMDg3IDIuOTY4LjA4NyA0LjQ1IDBhMjMuNzQgMjMuNzQgMCAwIDEtMi4wMzgtMi4wMTMgNS43ODcgNS43ODcgMCAwIDAtLjg2Mi0uOTYyYy0uODUyLS4zOC0xLjc1Mi0uNjQxLTIuNjc1LS43NzVhMTQuNTIyIDE0LjUyMiAwIDAgMC0yLjc1LS43NzUgNS42MTEgNS42MTEgMCAwIDAtMi42ODguNjI1IDYuMjUxIDYuMjUxIDAgMCAxLTMuMTM3LjUyNSAxLjk1IDEuOTUgMCAwIDEtMS42NzUtMi4wNjNjLjEyNS0xLjAzNy45ODctMS4zODcgMS44NzUtMS41NS0yLjAyNS0xLjg4Ny43NzUtMy42ODcgMi41LTIuMDEyIDEuMDI1IDEuMDEyIDEuNjM3IDIuOTEyIDIuOTEyIDMuNDI1IDEuNjEzLjY1IDMuMzc1Ljg4NyA1IDEuNjM3LS45MzctMS4yNS0xLjg1LTIuNS0yLjcyNS0zLjc1YTYuODc1IDYuODc1IDAgMCAwLTIuNzc1LTIuOTc1Yy0xLjQ4Ny0uNjc1LTMuNDUtMS40ODctMy43NS0zLjM1LS4zNS0yLjI4NyAyLjIzOC0xLjkgMy40NS0uOTVhMi4xNjMgMi4xNjMgMCAwIDEgMS40LTIuNWMxLjI1LS40ODcgMi4wMTMuNDYzIDIuMTc1IDEuNjc1LjAyNSAxLjQzOC0uNiAyLjgyNS0uODI1IDQuMzI1LS4yNjIgMi4yMTMgMi4xNSA0Ljg3NSAzLjM2MyA2LjYgMC0xLjg1LjctNC4wNjItLjI2My01Ljc4Ny0uNjI1LTEuNDI1LTIuNjEyLTMuODI1LTEuMjUtNS40MjUgMS0xLjEzOCAyLjIzOC4xMjUgMi41NzUgMS4xNWExLjQ2MiAxLjQ2MiAwIDAgMSAyLjUtLjI2M2MxLjI1IDEuNzI1LS43NSAzLjIzOC0xLjY2MiA0LjUxMy0xLjEgMS41MTItLjkgMi45NS0xLjAzOCA0LjczN2E2LjU5NyA2LjU5NyAwIDAgMC0uMTYyIDIuMDI1Yy4xMzcuNDEzLjgxMi44ODggMS4xMTIgMS4yNWEyNi45MyAyNi45MyAwIDAgMCAyLjU2MyAyLjM2M2MtLjEtMi4xLjIxMi00LjI3NS0uNTEzLTYuMjUtLjQyNS0xLjE1LTEuNC0zLjE1LS41LTQuMjg4LjktMS4xMzcgMS45LS4xMzcgMi4yNS44MTNhMi4wMjUgMi4wMjUgMCAwIDEgMi41LS42NSAxLjk1IDEuOTUgMCAwIDEgLjQyNSAyLjVjLS44NSAxLjgxMi0zLjI4NyAyLjc2Mi0zLjI4NyA0LjgyNS0uMTI1Ljk1LS4wNjMgMS45ODctLjEgMi45NWEyLjAyMyAyLjAyMyAwIDAgMCAwIC42NzVjLjEzNy4yNzUuODYyLjYxMiAxLjExMi43NzVhMzUuMzc3IDM1LjM3NyAwIDAgMCA1IDIuNjM3Yy0uMjg3LTEuMjUtLjMxMi0yLjQxMi0uNTEyLTMuNzVhNS4zMzggNS4zMzggMCAwIDAtMS4zODgtMi44MTJjLS43MzctLjk4OC0xLjUtMi42NS0uMzg3LTMuNjg4Ljg3NS0uODI1IDIuMDI1LS4wNjIgMi4zNS44ODggMS4wNS0xLjYgMy42NjItMS40MzggMy43NS43MzcuMDg3IDEuNjUtMS4zNSAyLjcyNS0yLjUgMy42MjUtLjIzMy4xNS0uNDE5LjM2My0uNTM4LjYxM2EzLjAzMyAzLjAzMyAwIDAgMC0uMTg3LjcyNWMtLjA1Ny44MzYtLjAxMSAxLjY3NS4xMzcgMi41IDAgLjUxMiAwIDEuMjUuNDEzIDEuNTEyLjUyMi4yOCAxLjA4Mi40ODIgMS42NjIuNmEyMC4xMyAyMC4xMyAwIDAgMCA0LjE4OCAxLjAzOCA2LjA3NSA2LjA3NSAwIDAgMS0yLjE4OC00LjIgOS4xIDkuMSAwIDAgMSAuOC00LjUxM2MuODI1IDEuMjUgMi4wMTMgMi4zNSAyLjc2MyAzLjY3NWE1Ljc2MyA1Ljc2MyAwIDAgMSAuMSA1LjI1Yy4xNjYuMDEzLjMzMy4wMTMuNSAwWidcbiAgICAgICAgICBmaWxsPScjREZBRTAwJ1xuICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9J00xOS41NSAxNS43ODdzMy4yNzUtMi44NSAyLjUtMy42MzdjLS43NzUtLjc4OC0yLjExMi45MTItMi4xMTIuOTEycy0uNjM4LTEuODUtMS40NjMtMS4yNWMtLjgyNS42IDEuMDc1IDMuOTc1IDEuMDc1IDMuOTc1Wk0xNS4xODggMTAuNzg4czIuOTc1LTIuOTEzIDEuOTYyLTMuNDc1Yy0xLjAxMi0uNTYzLTEuNzUgMS4yNS0xLjc1IDEuMjVzLS45NzUtMi41LTEuNzg3LTEuNzg4Yy0uODEzLjcxMyAxLjU3NSA0LjAxMyAxLjU3NSA0LjAxM1pNOS42NjIgMTAuNDM3czEuOTYzLTQuNTg3LjQ4OC00LjgzNy0xLjQgMi42LTEuNCAyLjYtMi45MTMtMS45NS0zLjExMy0uN2MtLjIzNyAxLjUyNSA0LjAyNSAyLjkzNyA0LjAyNSAyLjkzN1pNNy4zIDE2LjUxM3MtMS44LTMuNjI1LTIuOS0zLjJjLTEuMS40MjUuNDI1IDIuMS40MjUgMi4xcy0yLjA4OC4yNzUtMS45NjMgMS41MTJjLjEyNSAxLjIzOCA0LjQzOC0uNDEyIDQuNDM4LS40MTJaTTExLjY2MiAyMi41NzVTOC4zNSAxOS42NjMgNy41IDIwLjQyNWMtLjg1Ljc2MyAyLjA2MiAyLjA3NSAyLjA2MiAyLjA3NXMtMy4xIDEuNDc1LTIuMDYyIDIuMmMxLjI1Ljg4OCA0LjE2Mi0yLjEyNSA0LjE2Mi0yLjEyNVpNMTguNTg4IDI3LjM3NXMtNC42MzgtMi42MzgtNS4zNjMtMS41ODhjLS43MjUgMS4wNSAyLjc2MyAxLjgyNSAyLjc2MyAxLjgyNXMtMi44MjUgMS45MzgtMS41MTMgMi42MzhjMS4zMTMuNyA0LjExMy0yLjg3NSA0LjExMy0yLjg3NVpNMjUuODUgMjBzMy43NS0yLjUgMi4yODctMy41MTJjLTEuMTEyLS43NjMtMi41IDEuMDg3LTIuNSAxLjA4N3MtLjgxMi0yLjEtMS43MTItMS40Yy0uOS43IDEuOTI1IDMuODI1IDEuOTI1IDMuODI1Wk0yMy45NjMgMzAuMTc1cy0uNDM4IDIuODUtMS4yNSAzLjE1Yy0uODEzLjMtLjIxMy0yLjA3NS0uMjEzLTIuMDc1cy0yLjAyNS45MjUtMS45MjUgMGMuMS0uOTI1IDMuMzg4LTEuMDc1IDMuMzg4LTEuMDc1WidcbiAgICAgICAgICBmaWxsPScjRjdENDdEJ1xuICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9J00zMy4yODcgMjYuOTVhNC44ODcgNC44ODcgMCAwIDAgLjEyNS0zLjM1IDYuMzYyIDYuMzYyIDAgMCAwLTEuODg3LTMuMDVjLTEuMDYzIDQuNTM3IDEuNzYyIDYuNCAxLjc2MiA2LjRaTTMyLjc1IDI5LjE1Yy0uNjIyLjgwNC0xLjM2IDEuNTExLTIuMTg4IDIuMS0uODc0LjU1NS0xLjgyNi45NzYtMi44MjUgMS4yNWE2LjcxMyA2LjcxMyAwIDAgMSAyLjExMy0yLjEzNyAxMS41ODggMTEuNTg4IDAgMCAxIDIuOS0xLjIxM1onXG4gICAgICAgICAgZmlsbD0nI0RDQjNCNCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZUNvbmZpZyA9IChhcHBDb25maWcsIGxvY2FsZSkgPT4ge1xuICBpZiAoIWxvY2FsZSB8fCBsb2NhbGUgPT09IGRlZmF1bHRMb2NhbGUpIHtcbiAgICByZXR1cm4gYXBwQ29uZmlnO1xuICB9XG4gIC8vIFJlcGxhY2UgY29uZmlnIHdpdGggbGFuZ1xuICBjb25zdCBjb25maWdMYW5nID0gYXBwQ29uZmlnLmxhbmdbbG9jYWxlXTtcbiAgaWYgKGNvbmZpZ0xhbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBsb2NhbGU6ICcsIGxvY2FsZSk7XG4gIH1cbiAgcmV0dXJuIHsgLi4uYXBwQ29uZmlnLCAuLi5jb25maWdMYW5nIH07XG59O1xuXG5jb25zdCBTaG93SW52aXRlID0gKHsgY3VycmVudFVybCwgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCwgZ3Vlc3QgfSkgPT4ge1xuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb24oZ3Vlc3QubG9jYWxlKTtcblxuICAvLyBJbml0aWF0ZSBjb25maWcgdmFyaWFibGVzXG4gIGNvbnN0IHtcbiAgICBsb2dvLFxuICAgIG9nVGFncyxcbiAgICBjb3VwbGVJbmZvLFxuICAgIHZlbnVlLFxuICAgIHdlZGRpbmdEYXksXG4gICAgd2VkZGluZ0RhdGUsXG4gICAgd2VkZGluZ1RpbWUsXG4gICAgY2FsZW5kYXJJbmZvLFxuICB9ID0gdHJhbnNsYXRlQ29uZmlnKGFwcENvbmZpZywgZ3Vlc3QubG9jYWxlKTtcbiAgY29uc3QgeyBicmlkZU5hbWUsIGdyb29tTmFtZSwgaGFzaHRhZywgY291cGxlTmFtZUZvcm1hdCB9ID0gY291cGxlSW5mbztcblxuICBjb25zdCBjb3VwbGVOYW1lU3RyID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnXG4gICAgICA/IGAke2dyb29tTmFtZX0gJiAke2JyaWRlTmFtZX1gXG4gICAgICA6IGAke2JyaWRlTmFtZX0gJiAke2dyb29tTmFtZX1gO1xuICBjb25zdCBjb3VwbGVOYW1lID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnID8gKFxuICAgICAgPD5cbiAgICAgICAge2JyaWRlTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHtncm9vbU5hbWV9XG4gICAgICA8Lz5cbiAgICApIDogKFxuICAgICAgPD5cbiAgICAgICAge2dyb29tTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHticmlkZU5hbWV9XG4gICAgICA8Lz5cbiAgICApO1xuXG4gIC8vIFZlbnVlIGluZm9cbiAgY29uc3QgdmVudWVCcmllZiA9IGAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9LCAke3ZlbnVlLmNvdW50cnl9YDtcbiAgY29uc3Qgd2VkZGluZ0RhdGVCcmllZiA9IGAke3dlZGRpbmdEYXl9LCAke3dlZGRpbmdEYXRlfWA7XG5cbiAgLy8gRXZlbnQgaW5mb1xuICBjb25zdCBldmVudFRpdGxlID0gYCR7Y291cGxlTmFtZVN0cn0ncyBXZWRkaW5nYDtcbiAgbGV0IGV2ZW50RGVzY3JpcHRpb24gPSBgJHt3ZWRkaW5nRGF0ZUJyaWVmfSBhdCAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9YDtcbiAgaWYgKGd1ZXN0Lm5hbWUpIHtcbiAgICBldmVudERlc2NyaXB0aW9uID0gYERlYXIgJHtndWVzdC5uYW1lfSwgeW91IGFyZSBjb3JkaWFsbHkgaW52aXRlZCB0byBvdXIgd2VkZGluZyBvbiAke3dlZGRpbmdEYXRlfSBhdCAke3ZlbnVlLm5hbWV9LiBMb29raW5nIGZvcndhcmQgdG8gc2VlaW5nIHlvdSFgO1xuICB9XG5cbiAgLy8gQ2FsZW5kYXIgcGF5bG9hZFxuICBjb25zdCBjYWxlbmRhckV2ZW50ID0ge1xuICAgIHRpdGxlOiBldmVudFRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBldmVudERlc2NyaXB0aW9uLFxuICAgIGxvY2F0aW9uOiBgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWAsXG4gICAgc3RhcnRUaW1lOiBjYWxlbmRhckluZm8udGltZVN0YXJ0SVNPLFxuICAgIGVuZFRpbWU6IGNhbGVuZGFySW5mby50aW1lRW5kSVNPLFxuICB9O1xuXG4gIGNvbnN0IGV2ZW50U2NoZWR1bGUgPSBbXG4gICAge1xuICAgICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgICBldmVudDogJ0NodXJjaCcsXG4gICAgICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAgIHRpbWU6ICcxMnBtJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgICAgZXZlbnQ6ICdSZWNlcHRpb24nLFxuICAgICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgICB0aW1lOiAnMnBtJyxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgIC8vICAgZXZlbnQ6ICdFbmdhZ2VtZW50JyxcbiAgICAvLyAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgIC8vICAgdGltZTogJzJwbScsXG4gICAgLy8gfSxcbiAgXTtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0FjY291bnREZXRhaWxzLCBzZXRTaG93QWNjb3VudERldGFpbHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dNb2RhbCh0cnVlKTtcbiAgICB9LCAxMDAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudFJlZi5jdXJyZW50O1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICBpZiAoZWxlbWVudFBvc2l0aW9uIDwgd2luZG93SGVpZ2h0ICogMC45KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC1lbGVtZW50Jyk7IC8vIEFkZCB0aGUgQ1NTIGNsYXNzIHdoZW4gdGhlIGVsZW1lbnQgaXMgNzUlIHZpc2libGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkLWVsZW1lbnQnKTsgLy8gUmVtb3ZlIHRoZSBDU1MgY2xhc3MgaWYgbm90IHZpc2libGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIFJ1biB0aGlzIGVmZmVjdCBvbmx5IG9uY2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBhLnJlYWN0LWFkZC10by1jYWxlbmRhcl9fYnV0dG9uIHNwYW4ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkXG4gICAgICAgIHsuLi5vZ1RhZ3N9XG4gICAgICAgIHRpdGxlPXtldmVudFRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZXZlbnREZXNjcmlwdGlvbn1cbiAgICAgICAgZ3Vlc3ROYW1lPXtndWVzdC5uYW1lfVxuICAgICAgICB1cmw9e2N1cnJlbnRVcmx9XG4gICAgICAgIGRhdGU9e3dlZGRpbmdEYXRlQnJpZWZ9XG4gICAgICAgIG1vZGlmaWVkVGltZT17Z3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdH1cbiAgICAgICAgdmVudWU9e3ZlbnVlQnJpZWZ9XG4gICAgICAgIGxvZ289e3Jlc29sdmVQYXRoKG9nVGFncy5sb2dvKX1cbiAgICAgICAgYXV0aG9yPXtyZXNvbHZlUGF0aCgnLycpfVxuICAgICAgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naGVhZGVyX2FyZWEnPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgPEhlYWRlckxvZ28gLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlYWRlci1sb2dvLXRleHQnPlRoZSBBa2lubGFndW4ncyBQYXJ0eTwvc3Bhbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgaWQ9J2hvbWUnIGNsYXNzTmFtZT0naGVhZGVyX3NsaWRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLWxpc3QgZHJhZ2dhYmxlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay10cmFjaycgc3R5bGU9e3sgb3BhY2l0eTogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnX2NvdmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy9waWMgKDgpLmpwZydcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgYWx0PSdiYWNrZ3JvdW5kIGltYWdlJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBjb250ZW50LW92ZXJsYXknPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy0yNCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfY29udGVudCB0ZXh0LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogNjAsIG1hcmdpbjogMjUsIG1hcmdpblRvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9zdWJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC4ycydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnc2l0ZUludHJvJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjdzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291cGxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc2h0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLm5hbWV9LCB7dmVudWUuY2l0eX0sIHt2ZW51ZS5jb3VudHJ5fS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGlkPSdjb21pbmdfc29vbicgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9hcmVhIHB0LTIwIHBiLTcwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX3NoYXBlXzEnIHN0eWxlPXt7IHpJbmRleDogMSB9fT5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMS5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTQnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHB0LTUwIHdvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuMnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dCgnZXZlbnREYXRlJyl9OjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3dlZGRpbmdEYXRlQnJpZWZ9PC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QWRkVG9DYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICBldmVudD17Y2FsZW5kYXJFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9e3QoJ2J0bkFkZFRvTXlDYWxlbmRhcicpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy9zZWN0aW9uX3NoYXBlLnBuZycgYWx0PSdTaGFwZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9jb3VudCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC0yMCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNjAsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZV9jb3VudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMzAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvdW50X2NvbnRlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxLCBwYWRkaW5nVG9wOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmVudWUubWFwVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy9iZXZlbnQucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2JldmVudCBjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc3NXZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUuYWRkcmVzc0xpbmUxfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8yJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMi5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29udGFjdCcgY2xhc3NOYW1lPSdjb250YWN0X2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhY3Rfd3JhcHBlciB3b3cgZmFkZUluVXBCaWcnXG4gICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjRzJ1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMzAsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC40cycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW5VcCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgcmVmPXtlbGVtZW50UmVmfSBjbGFzc05hbWU9J2NvbnRhaW5lci1ldmVudExpbmV1cCc+XG4gICAgICAgICAgICAgIHtldmVudFNjaGVkdWxlLm1hcCgoZXYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0aW1lLCBkYXRlLCBldmVudCwgaWNvbiB9ID0gZXY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudExpbmV1cCcga2V5PXtldmVudH0+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtldmVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3RpbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogZm9ybSAqL31cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy05Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSB0ZXh0LWNlbnRlciBwYi0zMCc+XG4gICAgICAgICAgICAgICAgICB7Z3Vlc3QubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dCgnaW52aXRhdGlvbkdyZWV0aW5nJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjVyZW0nIH19PntndWVzdC5uYW1lfSw8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmFkZUluJz5cbiAgICAgICAgICAgIDxoNFxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29sb3JzIG9mIHRoZSBkYXlcbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBnYXA6ICc1MHB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRlYWwgR3JlZW5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwODA4MCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgR29sZFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZDU5YTU3JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J2xvdmUtdGl0bGUtY29udGFpbmVyIGZhZGVJblVwQmlnIGZhZGVJbidcbiAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgIGRhdGEtd293LWRlbGF5PScwLjRzJ1xuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMb3ZlVGl0bGVJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG92ZS10aXRsZSc+XG4gICAgICAgICAgTXkgaGVhcnQgaXMgeW91cnMgdG8gaG9sZCBhbmQgY2hlcmlzaCBmb3IgdGhlIHJlc3Qgb2Ygb3VyIGRheXMuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGFydGljbGVcbiAgICAgICAgcmVmPXtlbGVtZW50UmVmfVxuICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgIGRhdGEtZGVsYXk9JzAuN3MnXG4gICAgICAgIGNsYXNzTmFtZT0nc3Rvcmllcy1jb250YWluZXIgZmFkZUluVXBCaWcnXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPFN0b3JpZXMgLz5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0ncGljdHVyZS1ncmlkLWNvbnRhaW5lcic+XG4gICAgICAgIDxQaWN0dXJlc0dyaWQgLz5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIHsvKiBGb290ZXIgc2VjdGlvbiAqL31cbiAgICAgIDxmb290ZXIgaWQ9J2Zvb3RlcicgY2xhc3NOYW1lPSdmb290ZXJfYXJlYSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfc2hhcGVfMSc+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl93aWRnZXQgcHQtNTAgcGItMTAgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9sb2dvJz5cbiAgICAgICAgICAgICAgey8qIHtsb2dvLmZvb3RlckxvZ28gJiZcbiAgICAgICAgICAgICAgICAobG9nby5mb290ZXJMb2dvVHlwZSA9PT0gJ21wNCcgPyAoXG4gICAgICAgICAgICAgICAgICA8dmlkZW8gaGVpZ2h0PScxNDAnIGF1dG9QbGF5IG11dGVkIGxvb3A+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtsb2dvLmZvb3RlckxvZ299IHR5cGU9J3ZpZGVvL21wNCcgLz5cbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgKSA6ICggKi99XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDkwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17bG9nby5mb290ZXJMb2dvfSAvPiAqL31cbiAgICAgICAgICAgICAgey8qICkpfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl90aXRsZSAnPlxuICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RpdGxlJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvdXBsZU5hbWV9XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoNVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogJyNEM0QzRDMnLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzQwcHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAjRFdlZGRpbmdcbiAgICAgICAgPC9oNT5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPENvbGxlY3RHdWVzdEF0dGVuZGFuY2VcbiAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XG4gICAgICAgIHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfVxuICAgICAgLz5cbiAgICAgIHshc2hvd01vZGFsICYmIDxDYXNoR2lmdCBzZXRTaG93QWNjb3VudERldGFpbHM9e3NldFNob3dBY2NvdW50RGV0YWlsc30gLz59XG4gICAgICB7c2hvd0FjY291bnREZXRhaWxzICYmIChcbiAgICAgICAgPEFjY291bnREZXRhaWxzXG4gICAgICAgICAgc2hvd0FjY291bnREZXRhaWxzPXtzaG93QWNjb3VudERldGFpbHN9XG4gICAgICAgICAgc2V0U2hvd0FjY291bnREZXRhaWxzPXtzZXRTaG93QWNjb3VudERldGFpbHN9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2hvd0ludml0ZS5nZXRJbml0aWFsUHJvcHMgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IGxvY2FsZVBhcmFtcyA9IGN0eC5xdWVyeS5sYW5nIHx8IGRlZmF1bHRMb2NhbGU7XG4gIGNvbnN0IGVtcHR5R3Vlc3RQYXJhbXMgPSB7XG4gICAgZ3Vlc3Q6IHtcbiAgICAgIGd1ZXN0SWQ6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBncmVldGluZzogJycsXG4gICAgICBsb2NhbGU6IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRVcmwgPSByZXNvbHZlUGF0aChjdHgucmVxLnVybCk7XG4gIGNvbnN0IGd1ZXN0SWQgPSBjdHgucXVlcnkudTtcbiAgaWYgKCFndWVzdElkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBndWVzdERhdGEgPSBndWVzdExpc3QuZGF0YTtcbiAgY29uc3QgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCA9IGd1ZXN0TGlzdC5tZXRhLmxhc3RVcGRhdGVkQXQ7XG4gIGNvbnN0IHsgbmFtZSwgZ3JlZXRpbmcsIGxvY2FsZSB9ID1cbiAgICBndWVzdERhdGEuZmlsdGVyKChndWVzdCkgPT4gZ3Vlc3QuZ3Vlc3RJZCA9PT0gZ3Vlc3RJZClbMF0gfHwge307XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgLi4uZW1wdHlHdWVzdFBhcmFtcyxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXJsLFxuICAgIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsXG4gICAgZ3Vlc3Q6IHtcbiAgICAgIG5hbWUsXG4gICAgICBncmVldGluZyxcbiAgICAgIGd1ZXN0SWQsXG4gICAgICBsb2NhbGU6IGxvY2FsZSB8fCBsb2NhbGVQYXJhbXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dJbnZpdGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbHVyaGFzaCB9IGZyb20gJ3JlYWN0LWJsdXJoYXNoJztcclxuY29uc3QgUGljdHVyZXNHcmlkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBpY3R1cmVzID0gW1xyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgxKS5qcGcnLFxyXG4gICAgLy8gJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgyKS5qcGcnLFxyXG4gICAgLy8gJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgzKS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg0KS5qcGcnLFxyXG4gICAgLy8gJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg1KS5qcGcnLFxyXG4gICAgLy8gJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg2KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg3KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg4KS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICg5KS5qcGcnLFxyXG4gICAgLy8gJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgxMCkuanBnJyxcclxuICAgIC8vICdhc3NldHMvaW1hZ2VzL2NvdXBsZSAoMTEpLmpwZycsXHJcbiAgICAvLyAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDEyKS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgxMykuanBnJyxcclxuICBdO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBpY3R1cmUsIHNldFNlbGVjdGVkUGljdHVyZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGVkSW1hZ2VzQ291bnQsIHNldExvYWRlZEltYWdlc0NvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdFBpY3R1cmUgPSAocGljdHVyZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRQaWN0dXJlKHBpY3R1cmUpO1xyXG4gIH07XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IGxvYWRJbWFnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIGZvciAoY29uc3QgcGljdHVyZSBvZiBwaWN0dXJlcykge1xyXG4gIC8vICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIC8vICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgLy8gICAgICAgICBzZXRMb2FkZWRJbWFnZXNDb3VudCgocHJldkNvdW50KSA9PiBwcmV2Q291bnQgKyAxKTtcclxuICAvLyAgICAgICB9O1xyXG5cclxuICAvLyAgICAgICBpbWcuc3JjID0gcGljdHVyZTtcclxuICAvLyAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gKGltZy5vbmxvYWQgPSByZXNvbHZlKSk7XHJcbiAgLy8gICAgIH1cclxuXHJcbiAgLy8gICAgIC8vIHNldEltYWdlTG9hZGVkKHRydWUpO1xyXG4gIC8vICAgfTtcclxuXHJcbiAgLy8gICBsb2FkSW1hZ2VzKCk7XHJcblxyXG4gIC8vICAgaWYgKGxvYWRlZEltYWdlc0NvdW50ID09PSBwaWN0dXJlcy5sZW5ndGgpIHtcclxuICAvLyAgICAgc2V0SW1hZ2VMb2FkZWQodHJ1ZSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW3BpY3R1cmVzLCBsb2FkZWRJbWFnZXNDb3VudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZCc+XHJcbiAgICAgICAge3BpY3R1cmVzLm1hcCgocGljdHVyZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICB0aXRsZT0ndmlldyBpbWFnZSdcclxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT0nbW9kYWwnXHJcbiAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9JyNteU1vZGFsJ1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdFBpY3R1cmUocGljdHVyZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwaWN0dXJlJ1xyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBpbWFnZUxvYWRlZCA/ICdub25lJyA6ICdpbmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPEJsdXJoYXNoXHJcbiAgICAgICAgICAgICAgICAgIGhhc2g9J0xrT3llVkUwUipXQz93V0FqWm9mTXtzOlJqb00nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZ3JpZC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17JzMwMHB4J31cclxuICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvblg9ezMyfVxyXG4gICAgICAgICAgICAgICAgICByZXNvbHV0aW9uWT17MzJ9XHJcbiAgICAgICAgICAgICAgICAgIHB1bmNoPXsxfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogIWltYWdlTG9hZGVkID8gJ25vbmUnIDogJ2lubGluZScgfX0+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdncmlkLWltZydcclxuICAgICAgICAgICAgICAgIGVmZmVjdD0nYmx1cidcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2BQaWN0dXJlICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdncmlkLWltZydcclxuICAgICAgICAgICAgICAgIGFsdD17YFBpY3R1cmUgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3NlbGVjdGVkUGljdHVyZSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbCBmYWRlJyBpZD0nbXlNb2RhbCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1kaWFsb2cnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZFBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PSdzZWxlY3RlZCBwaWN0dXJlJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljdHVyZXNHcmlkO1xyXG4iLCJpbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuaW1wb3J0ICdzd2lwZXIvc3dpcGVyLWJ1bmRsZS5taW4uY3NzJztcclxuaW1wb3J0ICdzd2lwZXIvc3dpcGVyLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IFN3aXBlckNvcmUsIHsgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLWJ1bmRsZS5jc3MnO1xyXG5cclxuLy8gaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuLy8gaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xyXG4vLyBpbXBvcnQgJ3N3aXBlci9jc3MvYXV0b3BsYXknO1xyXG5cclxuY29uc3QgY29udGVudCA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0JyaWRlJyxcclxuICAgIGRlc2M6IGBJIHdhcyBhdCAgYSBidXJpYWwgb2Ygb25lIG9mIHRoZSBlbGRlcnMgaW4gbXkgY2h1cmNoIE9jdG9iZXIgMjAyMiBhbmQgY29ubmVjdGVkIHdpdGggYSBsb3Qgb2YgZm9ybWVyIGNodXJjaCBtZW1iZXJzIGFuZCBmcmllbmRzLiBBIGdlbnRsZSBtYW4gd2Fsa2VkIHVwIHRvIG1lIHRvIHNheSBJIGxvb2tlZCBmYW1pbGlhciBhbmQgYWN0dWFsbHkgaGUgbG9va2VkIGZhbWlsaWFyIHRvby4gV2UgZXhjaGFuZ2VkIGNvbnRhY3RzIGFmdGVyIHRoZSBmYW1pbGlhcml6YXRpb24uIEkgRGlkIG15IGZpbmRpbmdzIGZyb20gbXkgbXVtIGFuZCBkaXNjb3ZlcmVkIG91ciBib3RoIGZhbWlsaWVzIHdlcmUgY2xvc2UuIFdlIGdvdCB0YWxraW5nIGxpdGVyYWxseSBldmVyeSBkYXkgYW5kIHRoZSByZXN0wqDCoGlzwqBoaXN0b3J58J+lsC5gLFxyXG4gICAgaW1hZ2U6ICdhc3NldHMvaW1hZ2VzL2JyaWRlLmpwZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0dyb29tJyxcclxuICAgIGRlc2M6IGBPdXIgZmF0aGVycyBlbmpveWVkIGEgY2xvc2UgZnJpZW5kc2hpcCB1bnRpbCBteSBmYXRoZXIncyBwYXNzaW5nLiBUaGUgdHdvIG9mIHVzIGhhZCBuZXZlciBoYWQgYW55IHJlYWwgY29ubmVjdGlvbiB1bnRpbCBPY3RvYmVyIDIwMjIgd2hlbiB3ZSBjb2luY2lkZW50YWxseSBtZXQgYXQgdGhlIGJ1cmlhbCBvZiBteSBtZW50b3IncyBmYXRoZXIuIEkgbm90aWNlZCBoZXIgZnJvbSBhIGRpc3RhbmNlLCBoZXIgcmFkaWFudCBzbWlsZSBjYXVnaHQgbXkgYXR0ZW50aW9uLiBJIGFwcHJvYWNoZWQgaGVyIGFuZCBoZXIgbXVtIHJlLWludHJvZHVjaW5nIG15c2VsZiB0byBib3RoIG9mIHRoZW0gYW5kIHdlIGV4Y2hhbmdlZCBjb250YWN0IGluZm9ybWF0aW9uLiBUaGlzIG1hcmtlZCB0aGUgYmVnaW5uaW5nIG9mIGEgaGVhcnR3YXJtaW5nIHJldW5pb24uIE91ciBjb252ZXJzYXRpb25zIHNpbmNlIHRoZW4gaGF2ZSBiZWVuIG5vdGhpbmcgc2hvcnQgb2YgZXhoaWxhcmF0aW5nIGFuZCBleGNpdGluZywgIHdoaWNoIGlzIHRoZSBzdGFydCBvZiBhIGpvdXJuZXnCoHRvwqBmb3JldmVy8J+lsC5gLFxyXG4gICAgaW1hZ2U6ICdhc3NldHMvaW1hZ2VzL2dyb29tLmpwZycsXHJcbiAgfSxcclxuXTtcclxuY29uc3QgU3RvcmllcyA9ICgpID0+IHtcclxuICBTd2lwZXJDb3JlLnVzZShbQXV0b3BsYXldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTd2lwZXJcclxuICAgICAgc3BhY2VCZXR3ZWVuPXs1MH1cclxuICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgYXV0b3BsYXk9e3tcclxuICAgICAgICBkZWxheTogMTAwMDAsXHJcbiAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICB9fVxyXG4gICAgICBtb2R1bGVzPXtbUGFnaW5hdGlvbiwgQXV0b3BsYXldfVxyXG4gICAgICBwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG4gICAgPlxyXG4gICAgICB7Y29udGVudC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCB7IHRpdGxlLCBpbWFnZSwgZGVzYyB9ID0gaXRlbTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmlkZS1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMHJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjVyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2Ake3RpdGxlfSBzdG9yaWVzYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZ3Jvb20tdGl0bGUnPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J2dyb29tLXBhcmFncmFwaCc+e2Rlc2N9PC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvU3dpcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yaWVzO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHJlc29sdmVQYXRoIGZyb20gJ0BzcmMvdXRpbHMvcmVzb2x2ZVBhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHVybCxcbiAgbG9nbyxcbiAgYXV0aG9yLFxuICBzaXRlTmFtZSxcbiAgcHVibGlzaGVkVGltZSxcbiAgbW9kaWZpZWRUaW1lLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J2FydGljbGUnIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dGl0bGUnIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e3NpdGVOYW1lfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnVybCcgY29udGVudD17dXJsfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOmltYWdlJyBjb250ZW50PXtsb2dvfSAvPlxuICAgICAge3B1Ymxpc2hlZFRpbWUgJiYgKFxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT0nYXJ0aWNsZTpwdWJsaXNoZWRfdGltZScgY29udGVudD17cHVibGlzaGVkVGltZX0gLz5cbiAgICAgICl9XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nYXJ0aWNsZTptb2RpZmllZF90aW1lJyBjb250ZW50PXttb2RpZmllZFRpbWV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nYXJ0aWNsZTphdXRob3InIGNvbnRlbnQ9e2F1dGhvcn0gLz5cblxuICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPSdzaG9ydGN1dCBpY29uJ1xuICAgICAgICBocmVmPSdhc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nPzEyMydcbiAgICAgICAgdHlwZT0naW1hZ2UvcG5nJ1xuICAgICAgLz5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nYXNzZXRzL2Nzcy9hbmltYXRlLmNzcycgLz5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nYXNzZXRzL2Nzcy9ib290c3RyYXAubWluLmNzcycgLz5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nYXNzZXRzL2Nzcy9kZWZhdWx0LmNzcycgLz5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nYXNzZXRzL2Nzcy9zdHlsZS5jc3MnIC8+XG5cbiAgICAgIHsvKiBGT1IgSUU5IGJlbG93ICovfVxuICAgICAgey8qIFtpZiBsdCBJRSA5XT4gKi99XG4gICAgICA8c2NyaXB0IHNyYz0nYXNzZXRzL2pzL3ZlbmRvci9qcXVlcnktMS4xMi40Lm1pbi5qcyc+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz0nYXNzZXRzL2pzL3ZlbmRvci9tb2Rlcm5penItMy43LjEubWluLmpzJz48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPSdhc3NldHMvanMvYm9vdHN0cmFwLm1pbi5qcyc+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz0nYXNzZXRzL2pzL2pxdWVyeS5lYXNpbmcubWluLmpzJz48L3NjcmlwdD5cbiAgICA8L0hlYWQ+XG4gICk7XG59O1xuIiwiY29uc3QgYmFzZUNvbmZpZyA9IHtcbiAgd2VkZGluZ0RheTogJ1NhdHVyZGF5JyxcbiAgd2VkZGluZ1RpbWU6ICc4YW0gLSA4cG0nLFxuICB3ZWRkaW5nRGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gIHNob3dCdWlsdFdpdGhJbmZvOiB0cnVlLFxuICBzaG93UXJDb2RlOiBmYWxzZSxcbiAgY2FsZW5kYXJJbmZvOiB7XG4gICAgdGltZVN0YXJ0SVNPOiAnMjAyMy0xMi0xNlQxOTowMDowMCswODowMCcsXG4gICAgdGltZUVuZElTTzogJzIwMjMtMTItMTZUMjE6MDA6MDArMDg6MDAnLFxuICB9LFxuICBjb3VwbGVJbmZvOiB7XG4gICAgYnJpZGVOYW1lOiAnT2xhZHVubmkgJyxcbiAgICBncm9vbU5hbWU6ICdBZGV3YWxlJyxcbiAgICBjb3VwbGVOYW1lRm9ybWF0OiAnR1JPT01fRklSU1QnLFxuICAgIGhhc2h0YWc6ICcjRFdlZGRpbmcnLFxuICB9LFxuICB2ZW51ZToge1xuICAgIG5hbWU6ICdMYWhsIEJldmVudCBDZW50ZXInLFxuICAgIGFkZHJlc3NMaW5lMTogJzExMSBvYmFmZW1pIGF3b2xvd28gd2F5IGlrZWphIExhZ29zLCBOaWdlcmlhJyxcbiAgICAvLyBhZGRyZXNzTGluZTI6ICdFa28gaG90ZWwgVi5JIExhZ29zIFN0YXRlJyxcbiAgICBjaXR5OiAnTGFnb3MnLFxuICAgIGNvdW50cnk6ICdOaWdlcmlhJyxcbiAgICBtYXBVcmw6ICdodHRwczovL21hcHMuYXBwLmdvby5nbC9LaG9GRE1VbnRiVFU2TDN5OScsXG4gIH0sXG4gIGxvZ286IHtcbiAgICBoZWFkZXJMb2dvOiAnYXNzZXRzL2ltYWdlcy9yaW5nLXN2Zy5wbmcnLFxuICAgIGZvb3RlckxvZ286ICdhc3NldHMvdmlkZW8vYXctcmluZy1sb2dvLXRpY2tlci5tcDQnLFxuICAgIGZvb3RlckxvZ29UeXBlOiAnbXA0JyxcbiAgfSxcbiAgb2dUYWdzOiB7XG4gICAgbG9nbzogJ2Fzc2V0cy9pbWFnZXMvYXctcmluZy1sb2dvLnBuZycsXG4gICAgc2l0ZU5hbWU6ICdodHRwczovL2Z1Z2x5ZGFtaS5naXRodWIuaW8vYWRld2FsZS13ZWRkaW5nLycsXG4gICAgcHVibGlzaGVkVGltZTogJzIwMjMtMDktMDcnLFxuICB9LFxufTtcblxuY29uc3QgbGFuZyA9IHtcbiAgaWQ6IHtcbiAgICB3ZWRkaW5nRGF5OiAnU2FidHUnLFxuICAgIHdlZGRpbmdEYXRlOiAnMjIgRmVicnVhcmkgMjAyMCcsXG4gICAgdmVudWU6IHtcbiAgICAgIC4uLmJhc2VDb25maWcudmVudWUsXG4gICAgICBuYW1lOiAnSG90ZWwgT3ZhbCcsXG4gICAgICBhZGRyZXNzTGluZTI6ICdTdXJhYmF5YSwgSmF3YSBUaW11ciwgNjAyNDEsJyxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi5iYXNlQ29uZmlnLFxuICBsYW5nLFxufTtcbiIsImltcG9ydCBJMThuIGZyb20gXCJpMThuLWpzXCI7XG5pbXBvcnQgZW4gZnJvbSBcIi4vbGFuZy9lblwiO1xuaW1wb3J0IGlkIGZyb20gXCIuL2xhbmcvaWRcIjtcblxuY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gW1xuICB7XG4gICAgY29kZTogXCJlblwiLFxuICAgIGxhYmVsOiBcIkVuZ2xpc2hcIixcbiAgICB0cmFuc2xhdGlvbnM6IGVuXG4gIH0sXG4gIHtcbiAgICBjb2RlOiBcImlkXCIsXG4gICAgbGFiZWw6IFwiSW5kb25lc2lhXCIsXG4gICAgdHJhbnNsYXRpb25zOiBpZFxuICB9XG5dO1xuXG5JMThuLmRlZmF1bHRMb2NhbGUgPSBcImVuXCI7XG5zdXBwb3J0ZWRMYW5ndWFnZXMuZm9yRWFjaChsYW5nID0+IHtcbiAgSTE4bi50cmFuc2xhdGlvbnNbbGFuZy5jb2RlXSA9IGxhbmcudHJhbnNsYXRpb25zO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsYW5ndWFnZU9wdGlvbnMgPSBzdXBwb3J0ZWRMYW5ndWFnZXMubWFwKGxhbmcgPT4gKHtcbiAgdmFsdWU6IGxhbmcuY29kZSxcbiAgbGFiZWw6IGxhbmcubGFiZWxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IHNldExvY2FsZSA9IGxvY2FsZSA9PiB7XG4gIEkxOG4ubG9jYWxlID0gbG9jYWxlO1xufTtcblxuZXhwb3J0IGNvbnN0IHQgPSAobmFtZSwgcGFyYW1zID0ge30pID0+IHtcbiAgcmV0dXJuIEkxOG4udChuYW1lLCBwYXJhbXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IFRyYW5zID0gcHJvcHMgPT4gKFxuICA8c3BhblxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdChwcm9wcy5pMThuS2V5LCB7IC4uLnByb3BzIH0pIH19XG4gID48L3NwYW4+XG4pO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZSA9IEkxOG4uZGVmYXVsdExvY2FsZTtcblxuZXhwb3J0IGNvbnN0IHVzZVRyYW5zbGF0aW9uID0gbG9jYWxlID0+IHtcbiAgSTE4bi5sb2NhbGUgPSBsb2NhbGU7XG4gIHJldHVybiBJMThuLnQ7XG59O1xuIiwiY29uc3QgZmFsbGJhY2tIb3N0ID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHBhdGgsIGhlYWRlcnMpID0+IHtcbiAgaWYgKHBhdGguc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIC8vIFVzZSBicm93c2VyJ3MgYHdpbmRvd2AgaWYgaGVhZGVycyBpcyBub3QgcHJvdmlkZWRcbiAgaWYgKCFoZWFkZXJzICYmIHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiY291bGQgbm90IHJlc29sdmUgcGF0aCB3aXRob3V0IHJlcXVlc3QgaGVhZGVyczogd2luZG93IGlzIHVuZGVmaW5lZFwiXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0fSR7cGF0aH1gO1xuICB9XG4gIGNvbnN0IGhvc3QgPSBoZWFkZXJzXG4gICAgPyBoZWFkZXJzW1wieC1ub3ctZGVwbG95bWVudC11cmxcIl0gfHxcbiAgICAgIGhlYWRlcnNbXCJ4LWZvcndhcmRlZC1ob3N0XCJdIHx8XG4gICAgICBoZWFkZXJzLmhvc3RcbiAgICA6IG51bGw7XG4gIGNvbnN0IHNjaGVtZSA9XG4gICAgaGVhZGVycyAmJiBoZWFkZXJzW1wieC1mb3J3YXJkZWQtcHJvdG9cIl1cbiAgICAgID8gaGVhZGVyc1tcIngtZm9yd2FyZGVkLXByb3RvXCJdXG4gICAgICA6IFwiaHR0cFwiO1xuICByZXR1cm4gaG9zdCA/IGAke3NjaGVtZX06Ly8ke2hvc3R9JHtwYXRofWAgOiBgJHtmYWxsYmFja0hvc3R9JHtwYXRofWA7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1haWxqcy1jb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaTE4bi1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXJjb2RlLnJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFkZC10by1jYWxlbmRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ibHVyaGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3aXBlci9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==