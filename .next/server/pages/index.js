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
    style: {
      left: '50%',
      transform: 'translateX(-50%)',
      position: 'fixed',
      bottom: '2%',
      zIndex: 10000000,
      width: 'auto',
      padding: '24px 80px',
      borderRadius: '10px',
      maxWidth: '670px',
      margin: '24px 0',
      backgroundColor: '#fff',
      boxShadow: '0.2px 0.4px 0.5px rgba(161,161,161,.36), 0.5px 1.3px 1.6px -0.8px rgba(161,161,161,.36), 1.3px 3.4px 4.1px -1.7px rgba(161,161,161,.36), 3.1px 8.2px 9.9px -2.5px rgba(161,161,161,.36)'
    },
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
      lineNumber: 51,
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
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(Icon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWNjb3VudERldGFpbHMuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2Nhc2hHaWZ0LmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xsZWN0LWd1ZXN0LWF0dGVuZGFuY2UuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9waWN0dXJlR3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3Rvcmllcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Jlc29sdmVQYXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtYWlsanMtY29tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaTE4bi1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInFyY29kZS5yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYWRkLXRvLWNhbGVuZGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYmx1cmhhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3ZWV0YWxlcnQyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dpcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dpcGVyL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiQWNjb3VudERldGFpbHMiLCJzaG93QWNjb3VudERldGFpbHMiLCJzZXRTaG93QWNjb3VudERldGFpbHMiLCJfX2pzeCIsImNsYXNzTmFtZSIsInRhYkluZGV4Iiwicm9sZSIsInN0eWxlIiwiZGlzcGxheSIsImNvbG9yIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwidHlwZSIsIm9uQ2xpY2siLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZyIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpblJpZ2h0IiwiSWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbCIsInhtbG5zIiwiZCIsIkNhc2hHaWZ0IiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwidXNlU3RhdGUiLCJsZWZ0IiwidHJhbnNmb3JtIiwicG9zaXRpb24iLCJib3R0b20iLCJ6SW5kZXgiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsImdhcCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInRyYW5zaXRpb24iLCJDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlIiwic2V0U2hvd01vZGFsIiwic2hvd01vZGFsIiwibmFtZSIsInNldE5hbWUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImVtYWlsIiwic2V0RW1haWwiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJodHRwU3RhdHVzIiwic3RhdHVzQ29kZSIsIlN3YWwiLCJmaXJlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VuZCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjYXRjaCIsImVyciIsIm9uU3VibWl0IiwiaHRtbEZvciIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJvd3MiLCJMb3ZlVGl0bGVJY29uIiwic3JjIiwiYWx0IiwiRXZlbnREYXRlSWNvbiIsIkhlYWRlckxvZ28iLCJiYWNrZmFjZVZpc2liaWxpdHkiLCJ0cmFuc2xhdGVDb25maWciLCJhcHBDb25maWciLCJsb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY29uZmlnTGFuZyIsImxhbmciLCJ1bmRlZmluZWQiLCJFcnJvciIsIl9vYmplY3RTcHJlYWQiLCJTaG93SW52aXRlIiwiY3VycmVudFVybCIsImd1ZXN0TGlzdExhc3RVcGRhdGVkQXQiLCJndWVzdCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImxvZ28iLCJvZ1RhZ3MiLCJjb3VwbGVJbmZvIiwidmVudWUiLCJ3ZWRkaW5nRGF5Iiwid2VkZGluZ0RhdGUiLCJ3ZWRkaW5nVGltZSIsImNhbGVuZGFySW5mbyIsImJyaWRlTmFtZSIsImdyb29tTmFtZSIsImhhc2h0YWciLCJjb3VwbGVOYW1lRm9ybWF0IiwiY291cGxlTmFtZVN0ciIsImNvdXBsZU5hbWUiLCJSZWFjdCIsIkZyYWdtZW50IiwidmVudWVCcmllZiIsImNpdHkiLCJjb3VudHJ5Iiwid2VkZGluZ0RhdGVCcmllZiIsImV2ZW50VGl0bGUiLCJldmVudERlc2NyaXB0aW9uIiwiY2FsZW5kYXJFdmVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsInN0YXJ0VGltZSIsInRpbWVTdGFydElTTyIsImVuZFRpbWUiLCJ0aW1lRW5kSVNPIiwiZXZlbnRTY2hlZHVsZSIsImljb24iLCJldmVudCIsImRhdGUiLCJ0aW1lIiwidXNlRWZmZWN0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZWxlbWVudFJlZiIsInVzZVJlZiIsImhhbmRsZVNjcm9sbCIsImVsZW1lbnQiLCJjdXJyZW50IiwiZWxlbWVudFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9KU1hTdHlsZSIsIkhlYWQiLCJfZXh0ZW5kcyIsImd1ZXN0TmFtZSIsInVybCIsIm1vZGlmaWVkVGltZSIsInJlc29sdmVQYXRoIiwiYXV0aG9yIiwib3BhY2l0eSIsIm9iamVjdEZpdCIsInBhZGRpbmdUb3AiLCJtYXhIZWlnaHQiLCJtYXJnaW5Ub3AiLCJoZWFkZXJMb2dvIiwiYW5pbWF0aW9uRGVsYXkiLCJ2aXNpYmlsaXR5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25OYW1lIiwicGFkZGluZ0JvdHRvbSIsIkFkZFRvQ2FsZW5kYXIiLCJidXR0b25MYWJlbCIsImhyZWYiLCJtYXBVcmwiLCJvdmVyZmxvd1giLCJ0ZXh0T3ZlcmZsb3ciLCJhZGRyZXNzTGluZTEiLCJyZWYiLCJtYXAiLCJldiIsImluZGV4Iiwia2V5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiU3RvcmllcyIsIlBpY3R1cmVzR3JpZCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImxvY2FsZVBhcmFtcyIsInF1ZXJ5IiwiZW1wdHlHdWVzdFBhcmFtcyIsImd1ZXN0SWQiLCJncmVldGluZyIsInJlcSIsInUiLCJndWVzdERhdGEiLCJndWVzdExpc3QiLCJkYXRhIiwibWV0YSIsImxhc3RVcGRhdGVkQXQiLCJmaWx0ZXIiLCJwaWN0dXJlcyIsInNlbGVjdGVkUGljdHVyZSIsInNldFNlbGVjdGVkUGljdHVyZSIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJsb2FkZWRJbWFnZXNDb3VudCIsInNldExvYWRlZEltYWdlc0NvdW50IiwiaGFuZGxlU2VsZWN0UGljdHVyZSIsInBpY3R1cmUiLCJjb250ZW50IiwiZGVzYyIsImltYWdlIiwiU3dpcGVyQ29yZSIsInVzZSIsIkF1dG9wbGF5IiwiU3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsIm1vZHVsZXMiLCJQYWdpbmF0aW9uIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsIml0ZW0iLCJTd2lwZXJTbGlkZSIsInNpdGVOYW1lIiwicHVibGlzaGVkVGltZSIsInByb3BlcnR5IiwicmVsIiwiYmFzZUNvbmZpZyIsInNob3dCdWlsdFdpdGhJbmZvIiwic2hvd1FyQ29kZSIsImZvb3RlckxvZ28iLCJmb290ZXJMb2dvVHlwZSIsImFkZHJlc3NMaW5lMiIsInN1cHBvcnRlZExhbmd1YWdlcyIsImNvZGUiLCJsYWJlbCIsInRyYW5zbGF0aW9ucyIsImVuIiwiSTE4biIsImZvckVhY2giLCJsYW5ndWFnZU9wdGlvbnMiLCJzZXRMb2NhbGUiLCJwYXJhbXMiLCJUcmFucyIsInByb3BzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJpMThuS2V5IiwiZmFsbGJhY2tIb3N0IiwicGF0aCIsImhlYWRlcnMiLCJzdGFydHNXaXRoIiwicHJvdG9jb2wiLCJob3N0Iiwic2NoZW1lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFB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Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQWNjb3VudERldGFpbHMgPSAoeyBzaG93QWNjb3VudERldGFpbHMsIHNldFNob3dBY2NvdW50RGV0YWlscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPSdtb2RhbCBtb2RhbEJhY2tncm91bmQnXHJcbiAgICAgIHRhYkluZGV4PSctMSdcclxuICAgICAgcm9sZT0nZGlhbG9nJ1xyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IHNob3dBY2NvdW50RGV0YWlscyA/ICdibG9jaycgOiAnbm9uZScsXHJcbiAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1kaWFsb2cnIHJvbGU9J2RvY3VtZW50Jz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQgIG5lb25UZXh0J1xyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Nsb3NlIGd1ZXN0LW1vZGFsJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWNjb3VudERldGFpbHMoZmFsc2UpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgJiMxMDAwNTtcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHknPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCAyMHB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYXNoIEdpZnRcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZjBmMGYwJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEJhbms6XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgIFdlbWEgQmFua1xyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmMGYwZjAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgQWRld2FsZSBBa2lubGFndW7CoFxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmMGYwZjAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQWNjb3VudCBOdW1iZXI6XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgIDAyMzM1ODQxNDJcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnREZXRhaWxzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJY29uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9JzYxJ1xyXG4gICAgICAgIGhlaWdodD0nMzQnXHJcbiAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD0nTTMwLjE2NSAxMC4xMjZjLTMuMzYuNjQzLTUuNTc2IDQuNDMyLTQuNzkgOC41MDYuMzU4IDEuOTMgMS4yODcgMy42NDYgMi43MTcgNC44NiAxLjE0NCAxLjAwMSAyLjUwMiAxLjUwMiAzLjg2IDEuNTAyLjI4NSAwIC42NDMgMCAuOTMtLjA3MSAxLjY0My0uMjg2IDMuMDczLTEuMzU5IDQuMDAyLTMuMDAyLjg1OC0xLjU3MyAxLjE0NC0zLjU3NS43ODYtNS41MDUtLjc4Ni00LjA3NC00LjE0Ni02Ljg2MS03LjUwNS02LjI5Wm01LjUwMyAxMS4xNTFjLS43MTUgMS4yODctMS43ODcgMi4xNDUtMy4wNzMgMi4zNi0xLjI4Ni4yMTMtMi41NzMtLjE0NC0zLjcxNy0xLjE0NS0xLjE0NC0xLTEuOTMtMi40My0yLjI4OC00LjA3NC0uNjQzLTMuMzYgMS4wNzItNi41MDUgMy43ODktNy4wMDUuMjE0LS4wNzIuNS0uMDcyLjcxNS0uMDcyIDIuNDMgMCA0LjcxOCAyLjIxNiA1LjI5IDUuMjkuMjg1IDEuNjQzLjA3IDMuMjg4LS43MTYgNC42NDZaJ1xyXG4gICAgICAgICAgZmlsbD0nI0Y2QjEwMCdcclxuICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPSdNNTQuMTEgOC42OTZjLS4yMTUtLjE0My0uNDMtLjE0My0uNTcyLS4wNzEgMCAwLTEuNjQ0LjUtMi42NDUtLjIxNC0uNTcyLS4zNTgtLjg1OC0xLjE0NC0uOTMtMi4xNDUgMC0uMjE0LS4xNDMtLjQyOS0uMjg1LS41YTEuMzUgMS4zNSAwIDAgMC0uNTcyLS4xNDRjLS4xNDMgMC0xMi4wMDkgMi4yMTYtMjEuNTg3Ljc4Ny0xMC40MzYtMS41NzMtMTguNzI4LjM1Ny0xOS4wODUuNDI4LS4yMTUuMDcyLS4zNTguMjE1LS41LjM1OC0uMDcyLjIxNC0uMTQ0LjQyOS0uMDcyLjU3MiAwIC4wNzEuNzg2IDIuMjE2LTIuOTMxIDMuNjQ1LS4yODYuMTQzLS41LjQyOS0uNDI5LjcxNWwxLjQzIDEyLjY1MmMwIC4yMTUuMTQzLjQzLjI4NS41LjE0NC4wNzIuNDMuMTQ0LjU3Mi4wNzIgMCAwIDEuNjQ0LS41IDIuNjQ1LjIxNS41NzIuMzU3Ljg1NyAxLjE0My45MyAyLjE0NCAwIC4yMTQuMTQyLjQyOS4yODUuNTcyLjE0My4wNzEuMjg2LjE0My40MjkuMTQzaC4yMTRjLjA3MiAwIDguMTQ5LTIuMjE2IDIwLjAxNS0uNTcyIDEwLjIyMSAxLjQzIDIwLjQ0My0uNTcyIDIwLjU4Ni0uNjQzLjIxNC0uMDcxLjM1Ny0uMTQzLjUtLjM1OC4xNDQtLjIxNC4xNDQtLjQyOC4wNzItLjU3MSAwLS4wNzItLjc4Ny0yLjIxNiAyLjkzLTMuNjQ2LjI4Ni0uMTQzLjUwMS0uNDI5LjQzLS43MTVsLTEuNDMtMTIuNjUyYzAtLjI4Ni0uMTQzLS40MjktLjI4Ni0uNTcyWk01MS4yNSAyNC4yOGMtLjI4NS42NDMtLjI4NSAxLjIxNS0uMjg1IDEuNjQ0LTIuNDMuNDI5LTEwLjkzNyAxLjY0NC0xOS4zNzEuNS0zLjM2LS41LTYuNDMzLS42NDMtOS4wNzgtLjY0My01LjM2MSAwLTkuMTUuNzE1LTEwLjcyMiAxLjA3Mi0uMjE1LTEuMDcyLS43MTUtMS44NTgtMS40My0yLjQzLTEtLjcxNS0yLjIxNi0uNzE1LTMuMDczLS41NzJMNi4wMDQgMTIuNDg1QzcuNTc3IDExLjc3IDguNjUgMTAuODQgOS4xNSA5LjY5N2MuMjg1LS42NDMuMjg1LTEuMjE1LjI4NS0xLjcxNSAyLjE0NS0uNDMgOS4zNjQtMS41MDIgMTcuODctLjI4NiA4LjU3OCAxLjI4NiAxOC41MTQtLjIxNSAyMS4zMDEtLjY0My4yMTUgMS4wNzIuNjQ0IDEuOTMgMS40MyAyLjUwMiAxIC43MTUgMi4yMTYuNzE1IDMuMDczLjU3MmwxLjI4NyAxMS4zNjVjLTEuNTcyLjcxNC0yLjY0NSAxLjY0My0zLjE0NSAyLjc4N1onXHJcbiAgICAgICAgICBmaWxsPScjRjZCMTAwJ1xyXG4gICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9J001Ny4wNC42MmEuNTM4LjUzOCAwIDAgMC0uMzU3LS41MDJjLS4yMTQtLjE0My0uNDI4LS4xNDMtLjY0My0uMDctLjA3MS4wNy05LjM2NCAzLjU3My0yNC4xNiAyLjQzQzYuNTA0LjQ3NS41IDUuMTkzLjI4NiA1LjQwNy4wNyA1LjU1MSAwIDUuODM3IDAgNi4wNTFsMy4zNiAyNy4zMDZjMCAuMjE0LjE0My40MjkuMzU3LjU3Mi4xNDMuMDcxLjIxNC4wNzEuMzU4LjA3MS4wNyAwIC4yMTQgMCAuMjg1LS4wNzEuMDcyLS4wNzIgOC43Mi0zLjkzMiAyOC41Mi0xLjg1OSAyMC4zNzMgMi4xNDUgMjYuOTQ5LTMuMjg4IDI3LjIzNS0zLjU3NC4yMTQtLjE0My4yODUtLjM1Ny4yMTQtLjY0M0w1Ny4wNDEuNjJaTTMzLjAyNSAzMC43MTFjLTE2Ljg3LTEuNzg3LTI1LjY2Mi42NDMtMjguMzc4IDEuNTczTDEuNTAxIDYuMzM4YzEuNTAxLS44NTggOC43Mi00LjE0NiAzMC4zMDctMi40MyAxMi43MjQgMSAyMS4zMDEtMS4zNTkgMjMuOTQ2LTIuMjE2bDMuMjE3IDI2LjAxOGMtMS41MDIuOTMtOC41NzggNC43OS0yNS45NDggMy4wMDJaJ1xyXG4gICAgICAgICAgZmlsbD0nI0Y2QjEwMCdcclxuICAgICAgICA+PC9wYXRoPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDYXNoR2lmdCA9ICh7IHNldFNob3dBY2NvdW50RGV0YWlscyB9KSA9PiB7XHJcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcclxuXHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgYm90dG9tOiAnMiUnLFxyXG4gICAgICAgIHpJbmRleDogMTAwMDAwMDAsXHJcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuXHJcbiAgICAgICAgcGFkZGluZzogJzI0cHggODBweCcsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc2NzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMjRweCAwJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgICAnMC4ycHggMC40cHggMC41cHggcmdiYSgxNjEsMTYxLDE2MSwuMzYpLCAwLjVweCAxLjNweCAxLjZweCAtMC44cHggcmdiYSgxNjEsMTYxLDE2MSwuMzYpLCAxLjNweCAzLjRweCA0LjFweCAtMS43cHggcmdiYSgxNjEsMTYxLDE2MSwuMzYpLCAzLjFweCA4LjJweCA5LjlweCAtMi41cHggcmdiYSgxNjEsMTYxLDE2MSwuMzYpJyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgIGdhcDogMTAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FjY291bnREZXRhaWxzKHRydWUpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0JyxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBpc0hvdmVyZWQgPyAnc2NhbGUoMS4yKScgOiAnc2NhbGUoMSknLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDYXNoIEdpZnRcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXNoR2lmdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcbmltcG9ydCB7IHNlbmQgfSBmcm9tICdlbWFpbGpzLWNvbSc7XHJcbmNvbnN0IENvbGxlY3RHdWVzdEF0dGVuZGFuY2UgPSAoeyBzZXRTaG93TW9kYWwsIHNob3dNb2RhbCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaHR0cFN0YXR1cyhzdGF0dXNDb2RlKSB7XHJcbiAgICBpZiAoc3RhdHVzQ29kZSA+PSAyMDAgJiYgc3RhdHVzQ29kZSA8PSAyOTkpIHtcclxuICAgICAgU3dhbC5maXJlKCdTdWNjZXNzIScsICdXZSBhcHByZWNpYXRlIHlvdXIgcmVzcG9uc2UhJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuICAgICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICAgIHNldEVtYWlsKCcnKTtcclxuICAgICAgc2V0TmFtZSgnJyk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPj0gNDAwICYmIHN0YXR1c0NvZGUgPD0gNDk5KSB7XHJcbiAgICAgIFN3YWwuZmlyZSgnRXJyb3IhJywgJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluIScsICdlcnJvcicpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID49IDUwMCkge1xyXG4gICAgICBTd2FsLmZpcmUoJ0Vycm9yIScsICdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiEnLCAnZXJyb3InKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAndW5rbm93biBzdGF0dXMnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsIHx8ICFtZXNzYWdlKSB7XHJcbiAgICAgIFN3YWwuZmlyZSgnJywgJ0FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkJywgJ2Vycm9yJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBhd2FpdCBzZW5kKFxyXG4gICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTUFJTEpTX1NFUlZJQ0VfSUQsXHJcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VNQUlMSlNfVEVNUExBVEVfSUQsXHJcbiAgICAgIHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSxcclxuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU1BSUxKU19VU0VSX0lEXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGh0dHBTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIFN3YWwuZmlyZSgnRXJyb3IhJywgJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluIScsICdlcnJvcicpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPSdtb2RhbCdcclxuICAgICAgdGFiSW5kZXg9Jy0xJ1xyXG4gICAgICByb2xlPSdkaWFsb2cnXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogc2hvd01vZGFsID8gJ2Jsb2NrJyA6ICdub25lJyxcclxuXHJcbiAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1kaWFsb2cnIHJvbGU9J2RvY3VtZW50Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtY29udGVudCAgZ2xhc3Ntb3JwaGlzbSc+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjbG9zZSBndWVzdC1tb2RhbCdcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICYjMTAwMDU7XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybV90aXRsZSBtYi00J1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEluZm9ybSB1cyBvZiB5b3VyIGF2YWlsYWJpbGl0eVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IG1iLTMnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIE5hbWU6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRW1haWw6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0zJz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nYXR0ZW5kaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJ1xyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgV2lsbCB5b3UgYmUgYXR0ZW5kaW5nP1xyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICByb3dzPSc0J1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPSdhdHRlbmRpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2d1ZXN0LWZvcm0tYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyA/ICdTdWJtaXR0aW5nLi4uJyA6ICdTdWJtaXQnfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlO1xyXG4iLCJpbXBvcnQgQWRkVG9DYWxlbmRhciBmcm9tICdyZWFjdC1hZGQtdG8tY2FsZW5kYXInO1xuaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUucmVhY3QnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5pbXBvcnQgSGVhZCBmcm9tICdAc3JjL2NvbXBvbmVudHMvSGVhZCc7XG5pbXBvcnQgcmVzb2x2ZVBhdGggZnJvbSAnQHNyYy91dGlscy9yZXNvbHZlUGF0aCc7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJ0BzcmMvY29uZmlnL2FwcCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiwgZGVmYXVsdExvY2FsZSB9IGZyb20gJ0BzcmMvaTE4bic7XG5pbXBvcnQgZ3Vlc3RMaXN0IGZyb20gJy4vZ3Vlc3RfbGlzdC5qc29uJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcbmltcG9ydCBTdG9yaWVzIGZyb20gJy4vc3Rvcmllcyc7XG5pbXBvcnQgUGljdHVyZXNHcmlkIGZyb20gJy4vcGljdHVyZUdyaWQnO1xuaW1wb3J0IENvbGxlY3RHdWVzdEF0dGVuZGFuY2UgZnJvbSAnLi9jb2xsZWN0LWd1ZXN0LWF0dGVuZGFuY2UnO1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xuaW1wb3J0IENhc2hHaWZ0IGZyb20gJy4vY2FzaEdpZnQnO1xuaW1wb3J0IEFjY291bnREZXRhaWxzIGZyb20gJy4vYWNjb3VudERldGFpbHMnO1xuXG5jb25zdCBMb3ZlVGl0bGVJY29uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxpbWdcbiAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy93aW5lLnBuZydcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgIGhlaWdodDogJzgwcHgnLFxuICAgICAgfX1cbiAgICAgIGFsdD0nd2luZSBpbGx1c3RyYXRvcidcbiAgICAvPlxuICApO1xufTtcbmNvbnN0IEV2ZW50RGF0ZUljb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD0nMzUnIGhlaWdodD0nNzgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMjAuMzU1IDEyLjA4M2MtMS42NDMtMS42Mi0yLjE1Ni00Ljc3LjQxLTUuODMgMS4xODctLjQ5IDIuNjgtLjM2NSAzLjkyOC0uMjI3IDEuMjg2LjE0MyAyLjU1Mi40MTcgMy43Ny44NTYgMi4xNzMuNzg1IDUuMTg0IDIuMTY0IDYuMDI3IDQuNTEuOTkzIDIuNzYyLTEuOTY4IDQuMTA3LTQuMTU1IDQuNDc0LTIuNzc1LjQ2NS01LjcwNi40MTctOC41MTMuMzM4LTIuNjk0LS4wNzYtNS40NTQtLjM3NS03Ljk4LTEuMzY2LTIuMjctLjg5Mi00LjU5LTIuMzMzLTUuNzIzLTQuNTgtMS4wNDMtMi4wNjYtLjgzNi00LjU0MS40NzUtNi40NDRDMTAuNCAxLjE5MyAxMy40MjIuNjkgMTYuMzgxLjMzN0E0OS40NjIgNDkuNDYyIDAgMCAxIDI3LjMwNy4yN2MxLjIuMTIzIDEuMjEyIDIuMDE3IDAgMS44OTNhNDkuODc3IDQ5Ljg3NyAwIDAgMC03LjQxMi0uMjIzYy0yLjI2NS4xMDUtNC42NzEuMjQtNi44NS45MDItMS44MDcuNTQ5LTMuMjMyIDEuODgyLTMuNjI3IDMuNzctLjQxNCAxLjk3OC43MDggMy43MzIgMi4yMyA0LjkwMyAzLjI1IDIuNSA3LjY3MiAyLjgxMSAxMS42MTUgMi44MTcgMi4yMjUuMDA0IDQuNTUuMDc0IDYuNzQ1LS4zMi44MDQtLjE0NCAxLjg5NS0uMzIgMi40ODQtLjk1Ny44MTQtLjg4LS4zMi0xLjkzOC0xLjAxLTIuNDY3LTEuODMtMS40MDYtNC4xNDQtMi4yODMtNi40MTYtMi42MTktLjk3OS0uMTQ1LTIuNTc5LS40MTMtMy41MiAwLTEuMjk0LjU3LS41NzYgMi4wNjMuMTQ3IDIuNzc3Ljg3Ljg1Ni0uNDcgMi4xOTQtMS4zMzggMS4zMzhaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00zNC4wMjMgMTMuNzI3Yy0xLjQ5NCA1LjQ1LTMuMTU4IDEwLjkzMy03LjA5OSAxNS4xNTdhMjIuMzkgMjIuMzkgMCAwIDEtNi4wMyA0LjU4MWMtMi4zMjMgMS4yMDUtNS4xMyAyLjM4NS03Ljc4MSAxLjgyOC0xLjE5LS4yNS0uNjg3LTIuMDc1LjUwMy0xLjgyNSAyLjI5Mi40OCA1LjAyLS44ODggNi45Ny0xLjk4NmEyMC44MDggMjAuODA4IDAgMCAwIDUuMzk2LTQuMzczYzMuNDQ2LTMuOTA0IDQuODY5LTguOTcgNi4yMTYtMTMuODg0LjMyLTEuMTc0IDIuMTQ3LS42NzYgMS44MjUuNTAyWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNOS4wMjggNy45MjNjLTEuMjY2IDguMzQ0LTIuNTkgMTguMzcgMy43MjIgMjUuMTMzLjgzLjg5LS41MDUgMi4yMzEtMS4zMzggMS4zMzktNi44NC03LjMzMS01LjU4Ny0xNy44OTMtNC4yMS0yNi45NzQuMTgzLTEuMiAyLjAwNi0uNjkgMS44MjYuNTAyWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMTQuODc3IDM0LjM0M2MtMS45MTggMTQuMDc0LTEuMzQ5IDI4LjQ2IDEuNjM2IDQyLjM0NC4yNTUgMS4xODctMS41NjkgMS42OTUtMS44MjUuNTAzYTEyNS42NTQgMTI1LjY1NCAwIDAgMS0xLjYzNi00My4zNWMuMTY0LTEuMjAyIDEuOTg4LS42OSAxLjgyNS41MDNaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00xMC4zNCA2MC44OTFjLS40MTYtNC42NTYtMy44NDUtOC44Ni04LjI5LTEwLjI2LTEuMTU4LS4zNjUtLjY2NC0yLjE5My41MDItMS44MjUgNS4zMDEgMS42NyA5LjE4NiA2LjU2MiA5LjY4IDEyLjA4NS4xMDggMS4yMTItMS43ODUgMS4yMDUtMS44OTMgMFonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTMuMTk3IDQ5LjkyYy0uNzMgMS4zODYtLjkyIDIuOTM3LS45NiA0LjQ4NC0uMDM3IDEuNDc2LS4yNTkgMy4yNDYuNzM5IDQuNDYuOTIgMS4xMiAyLjI3MSAxLjk1NiAzLjUzIDIuNjQzYTE3LjU5NSAxNy41OTUgMCAwIDAgNC40MDIgMS42NjJjMS4xODQuMjguNjgzIDIuMTA1LS41MDMgMS44MjVhMTkuMzcgMTkuMzcgMCAwIDEtNS4wNy0xLjk3NGMtMS41MTUtLjg1NS0zLjEwNi0xLjkyMi00LjEyLTMuMzYyQy4xNTMgNTguMTUuMyA1Ni4xNjMuMzQ1IDU0LjQwNGMuMDQ5LTEuODkuMzI3LTMuNzUgMS4yMTctNS40NC41NjktMS4wNzcgMi4yMDItLjEyMiAxLjYzNS45NTZaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J003LjkxOSA1OC4wMjZjMS4zNiAxLjcyIDIuNzIzIDMuNDQgNC4wODQgNS4xNi4zMDYuMzg4LjQwNi45NjUgMCAxLjMzOS0uMzQyLjMxMy0xLjAxLjQxNC0xLjMzOCAwTDYuNTggNTkuMzYzYy0uMzA2LS4zODctLjQwNi0uOTY1IDAtMS4zMzcuMzQyLS4zMTQgMS4wMS0uNDE1IDEuMzM5IDBaTTEyLjYyOSA1MS44ODRhMjguMDggMjguMDggMCAwIDEgMTcuNDE4LTYuNjI4YzEuMjE5LS4wMyAxLjIxOCAxLjg2MyAwIDEuODkyLTUuODYzLjE0LTExLjU5NCAyLjI4OC0xNi4wOCA2LjA3NC0uOTI2Ljc4Mi0yLjI3LS41NS0xLjMzOC0xLjMzOFonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTMyLjI2NyA0Ni42NzNjLTEuMjEgNC4yMzQtNC4wNzIgOC4xNDItOC4wNTQgMTAuMTUtMy43ODMgMS45MDYtOC42MjMgMS43NTMtMTEuNjQ5LTEuNDgtLjgzMS0uODg5LjUwNC0yLjIzIDEuMzM4LTEuMzM4IDIuNiAyLjc3NiA2LjczNSAyLjY3NiA5Ljg3Mi45MDcgMy4yOTctMS44NTcgNS42MzgtNS4xMzggNi42NjktOC43NDIuMzM0LTEuMTY5IDIuMTYtLjY3MiAxLjgyNC41MDNaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00xNC4zNSA1My4xMzhhNDAuNzA3IDQwLjcwNyAwIDAgMSA1LjkxMi0xLjUzM2MuNDg1LS4wODcgMS4wNDMuMTMyIDEuMTYzLjY2MS4xMDUuNDYzLS4xNCAxLjA3LS42NiAxLjE2NWE0MC42MTYgNDAuNjE2IDAgMCAwLTUuOTEzIDEuNTMzYy0uNDY4LjE2LTEuMDU0LS4xODQtMS4xNjMtLjY2MS0uMTItLjUyNi4xNTgtLjk5My42Ni0xLjE2NVonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuY29uc3QgSGVhZGVyTG9nbyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogJ2lubGluZUJsb2NrJyxcbiAgICAgICAgYmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoMGRlZykgc2NhbGUoMSknLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8c3ZnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgZmlsbD0nbm9uZSc+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD0nbTM0LjYxMyAyNy43MzcgMS40MzcuMDg4YTYuMTExIDYuMTExIDAgMCAxIDEuOTI1LjJjLjM1LjIuNTM4LjQ3NS4xLjc2Mi0uNDM3LjI4OC0xLjEgMC0xLjUgMC0uNCAwLS45MjUtLjEtMS40LS4xMjVhMy4yOTYgMy4yOTYgMCAwIDAtMS4wNSAwYy0uMzUuMTEzLS4yODcuMjEzLS40ODcuNjEzYTcuNTc3IDcuNTc3IDAgMCAxLTEuNzYzIDIuMTVjLTEuNDYyIDEuMjUtMy40NSAxLjMzNy01LjE2MiAyLjA4Ny40NS0yLjk2MiAyLjcyNS00LjQzNyA1LjQ3NS01LS45NzUgMC0yLjY3NS0uODc1LTMuNTEzLS40NjItMS40ODcuNjM3LTMuNzUgMS41LTQuMjEyIDMuMjUtLjIzOCAxLjA2Mi0uMTg4IDIuNjM3LTEuNTM4IDIuOTYyLTEuMzUuMzI1LTEuNzI1LS45NjItMS40LTEuOTc1LS44NzUuNDUtMi4wNS4wODgtMS44NjItMS4wNS4xODctMS4xMzcgMS41MjUtMS4yNSAyLjM4Ny0xLjM2MiAyLjIxMy0uMzUgMy45LTEuNjI1IDUuOTg4LTIuMjg4YTI1Ljg0NSAyNS44NDUgMCAwIDAtMi41LTEuMDI1IDYuODM3IDYuODM3IDAgMCAwLTIuNi40ODhjLS45Mi4xMTQtMS44MjguMzEtMi43MTMuNTg3LS42NC4zNC0xLjE5LjgyOC0xLjYgMS40MjUtLjk4NyAxLjE2My0yLjIgMi41LTMuOSAyLjM3NS0yLjE1LS4yLTEuOTEyLTIuNjUtLjMyNS0zLjQ4Ny0xLjAyNSAwLTIuNS0uNjM4LTIuNC0xLjg3NS4wODgtMS41NSAxLjk2My0xLjczOCAzLjEyNS0xLjQyNSAxLjA5Ny40MTkgMi4xNjYuOTA3IDMuMiAxLjQ2MiAxLjkzOC43ODggMy43NSAwIDUuNzYzLS4yYTM3Ljk5NCAzNy45OTQgMCAwIDEtNC42NS0yLjY3NSAyLjE4NyAyLjE4NyAwIDAgMC0xLjM3NS0uNTVoLTEuMjVhMjcuNjcxIDI3LjY3MSAwIDAgMC0zLjM3NS4xYy0uNzc1IDAtMS4zMjUuNzM4LTEuODM4IDEuMjVhNi4xMzggNi4xMzggMCAwIDEtMi41IDEuNzEzIDEuOTg3IDEuOTg3IDAgMCAxLTIuNS0uNjI1QTIuMDc1IDIuMDc1IDAgMCAxIDcuNzEzIDIyLjRjLS45NzUtLjMyNS0yLjI4OC0xLjExMy0xLjQyNS0yLjMgMS4wMTItMS4zODggMi44NzUtLjY1IDMuOTM3LjE1YTUuODc1IDUuODc1IDAgMCAwIDIuOTM4IDEuNmMxLjQ4Mi4wODcgMi45NjguMDg3IDQuNDUgMGEyMy43NCAyMy43NCAwIDAgMS0yLjAzOC0yLjAxMyA1Ljc4NyA1Ljc4NyAwIDAgMC0uODYyLS45NjJjLS44NTItLjM4LTEuNzUyLS42NDEtMi42NzUtLjc3NWExNC41MjIgMTQuNTIyIDAgMCAwLTIuNzUtLjc3NSA1LjYxMSA1LjYxMSAwIDAgMC0yLjY4OC42MjUgNi4yNTEgNi4yNTEgMCAwIDEtMy4xMzcuNTI1IDEuOTUgMS45NSAwIDAgMS0xLjY3NS0yLjA2M2MuMTI1LTEuMDM3Ljk4Ny0xLjM4NyAxLjg3NS0xLjU1LTIuMDI1LTEuODg3Ljc3NS0zLjY4NyAyLjUtMi4wMTIgMS4wMjUgMS4wMTIgMS42MzcgMi45MTIgMi45MTIgMy40MjUgMS42MTMuNjUgMy4zNzUuODg3IDUgMS42MzctLjkzNy0xLjI1LTEuODUtMi41LTIuNzI1LTMuNzVhNi44NzUgNi44NzUgMCAwIDAtMi43NzUtMi45NzVjLTEuNDg3LS42NzUtMy40NS0xLjQ4Ny0zLjc1LTMuMzUtLjM1LTIuMjg3IDIuMjM4LTEuOSAzLjQ1LS45NWEyLjE2MyAyLjE2MyAwIDAgMSAxLjQtMi41YzEuMjUtLjQ4NyAyLjAxMy40NjMgMi4xNzUgMS42NzUuMDI1IDEuNDM4LS42IDIuODI1LS44MjUgNC4zMjUtLjI2MiAyLjIxMyAyLjE1IDQuODc1IDMuMzYzIDYuNiAwLTEuODUuNy00LjA2Mi0uMjYzLTUuNzg3LS42MjUtMS40MjUtMi42MTItMy44MjUtMS4yNS01LjQyNSAxLTEuMTM4IDIuMjM4LjEyNSAyLjU3NSAxLjE1YTEuNDYyIDEuNDYyIDAgMCAxIDIuNS0uMjYzYzEuMjUgMS43MjUtLjc1IDMuMjM4LTEuNjYyIDQuNTEzLTEuMSAxLjUxMi0uOSAyLjk1LTEuMDM4IDQuNzM3YTYuNTk3IDYuNTk3IDAgMCAwLS4xNjIgMi4wMjVjLjEzNy40MTMuODEyLjg4OCAxLjExMiAxLjI1YTI2LjkzIDI2LjkzIDAgMCAwIDIuNTYzIDIuMzYzYy0uMS0yLjEuMjEyLTQuMjc1LS41MTMtNi4yNS0uNDI1LTEuMTUtMS40LTMuMTUtLjUtNC4yODguOS0xLjEzNyAxLjktLjEzNyAyLjI1LjgxM2EyLjAyNSAyLjAyNSAwIDAgMSAyLjUtLjY1IDEuOTUgMS45NSAwIDAgMSAuNDI1IDIuNWMtLjg1IDEuODEyLTMuMjg3IDIuNzYyLTMuMjg3IDQuODI1LS4xMjUuOTUtLjA2MyAxLjk4Ny0uMSAyLjk1YTIuMDIzIDIuMDIzIDAgMCAwIDAgLjY3NWMuMTM3LjI3NS44NjIuNjEyIDEuMTEyLjc3NWEzNS4zNzcgMzUuMzc3IDAgMCAwIDUgMi42MzdjLS4yODctMS4yNS0uMzEyLTIuNDEyLS41MTItMy43NWE1LjMzOCA1LjMzOCAwIDAgMC0xLjM4OC0yLjgxMmMtLjczNy0uOTg4LTEuNS0yLjY1LS4zODctMy42ODguODc1LS44MjUgMi4wMjUtLjA2MiAyLjM1Ljg4OCAxLjA1LTEuNiAzLjY2Mi0xLjQzOCAzLjc1LjczNy4wODcgMS42NS0xLjM1IDIuNzI1LTIuNSAzLjYyNS0uMjMzLjE1LS40MTkuMzYzLS41MzguNjEzYTMuMDMzIDMuMDMzIDAgMCAwLS4xODcuNzI1Yy0uMDU3LjgzNi0uMDExIDEuNjc1LjEzNyAyLjUgMCAuNTEyIDAgMS4yNS40MTMgMS41MTIuNTIyLjI4IDEuMDgyLjQ4MiAxLjY2Mi42YTIwLjEzIDIwLjEzIDAgMCAwIDQuMTg4IDEuMDM4IDYuMDc1IDYuMDc1IDAgMCAxLTIuMTg4LTQuMiA5LjEgOS4xIDAgMCAxIC44LTQuNTEzYy44MjUgMS4yNSAyLjAxMyAyLjM1IDIuNzYzIDMuNjc1YTUuNzYzIDUuNzYzIDAgMCAxIC4xIDUuMjVjLjE2Ni4wMTMuMzMzLjAxMy41IDBaJ1xuICAgICAgICAgIGZpbGw9JyNERkFFMDAnXG4gICAgICAgID48L3BhdGg+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD0nTTE5LjU1IDE1Ljc4N3MzLjI3NS0yLjg1IDIuNS0zLjYzN2MtLjc3NS0uNzg4LTIuMTEyLjkxMi0yLjExMi45MTJzLS42MzgtMS44NS0xLjQ2My0xLjI1Yy0uODI1LjYgMS4wNzUgMy45NzUgMS4wNzUgMy45NzVaTTE1LjE4OCAxMC43ODhzMi45NzUtMi45MTMgMS45NjItMy40NzVjLTEuMDEyLS41NjMtMS43NSAxLjI1LTEuNzUgMS4yNXMtLjk3NS0yLjUtMS43ODctMS43ODhjLS44MTMuNzEzIDEuNTc1IDQuMDEzIDEuNTc1IDQuMDEzWk05LjY2MiAxMC40MzdzMS45NjMtNC41ODcuNDg4LTQuODM3LTEuNCAyLjYtMS40IDIuNi0yLjkxMy0xLjk1LTMuMTEzLS43Yy0uMjM3IDEuNTI1IDQuMDI1IDIuOTM3IDQuMDI1IDIuOTM3Wk03LjMgMTYuNTEzcy0xLjgtMy42MjUtMi45LTMuMmMtMS4xLjQyNS40MjUgMi4xLjQyNSAyLjFzLTIuMDg4LjI3NS0xLjk2MyAxLjUxMmMuMTI1IDEuMjM4IDQuNDM4LS40MTIgNC40MzgtLjQxMlpNMTEuNjYyIDIyLjU3NVM4LjM1IDE5LjY2MyA3LjUgMjAuNDI1Yy0uODUuNzYzIDIuMDYyIDIuMDc1IDIuMDYyIDIuMDc1cy0zLjEgMS40NzUtMi4wNjIgMi4yYzEuMjUuODg4IDQuMTYyLTIuMTI1IDQuMTYyLTIuMTI1Wk0xOC41ODggMjcuMzc1cy00LjYzOC0yLjYzOC01LjM2My0xLjU4OGMtLjcyNSAxLjA1IDIuNzYzIDEuODI1IDIuNzYzIDEuODI1cy0yLjgyNSAxLjkzOC0xLjUxMyAyLjYzOGMxLjMxMy43IDQuMTEzLTIuODc1IDQuMTEzLTIuODc1Wk0yNS44NSAyMHMzLjc1LTIuNSAyLjI4Ny0zLjUxMmMtMS4xMTItLjc2My0yLjUgMS4wODctMi41IDEuMDg3cy0uODEyLTIuMS0xLjcxMi0xLjRjLS45LjcgMS45MjUgMy44MjUgMS45MjUgMy44MjVaTTIzLjk2MyAzMC4xNzVzLS40MzggMi44NS0xLjI1IDMuMTVjLS44MTMuMy0uMjEzLTIuMDc1LS4yMTMtMi4wNzVzLTIuMDI1LjkyNS0xLjkyNSAwYy4xLS45MjUgMy4zODgtMS4wNzUgMy4zODgtMS4wNzVaJ1xuICAgICAgICAgIGZpbGw9JyNGN0Q0N0QnXG4gICAgICAgID48L3BhdGg+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD0nTTMzLjI4NyAyNi45NWE0Ljg4NyA0Ljg4NyAwIDAgMCAuMTI1LTMuMzUgNi4zNjIgNi4zNjIgMCAwIDAtMS44ODctMy4wNWMtMS4wNjMgNC41MzcgMS43NjIgNi40IDEuNzYyIDYuNFpNMzIuNzUgMjkuMTVjLS42MjIuODA0LTEuMzYgMS41MTEtMi4xODggMi4xLS44NzQuNTU1LTEuODI2Ljk3Ni0yLjgyNSAxLjI1YTYuNzEzIDYuNzEzIDAgMCAxIDIuMTEzLTIuMTM3IDExLjU4OCAxMS41ODggMCAwIDEgMi45LTEuMjEzWidcbiAgICAgICAgICBmaWxsPScjRENCM0I0J1xuICAgICAgICA+PC9wYXRoPlxuICAgICAgPC9zdmc+XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuY29uc3QgdHJhbnNsYXRlQ29uZmlnID0gKGFwcENvbmZpZywgbG9jYWxlKSA9PiB7XG4gIGlmICghbG9jYWxlIHx8IGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZSkge1xuICAgIHJldHVybiBhcHBDb25maWc7XG4gIH1cbiAgLy8gUmVwbGFjZSBjb25maWcgd2l0aCBsYW5nXG4gIGNvbnN0IGNvbmZpZ0xhbmcgPSBhcHBDb25maWcubGFuZ1tsb2NhbGVdO1xuICBpZiAoY29uZmlnTGFuZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGxvY2FsZTogJywgbG9jYWxlKTtcbiAgfVxuICByZXR1cm4geyAuLi5hcHBDb25maWcsIC4uLmNvbmZpZ0xhbmcgfTtcbn07XG5cbmNvbnN0IFNob3dJbnZpdGUgPSAoeyBjdXJyZW50VXJsLCBndWVzdExpc3RMYXN0VXBkYXRlZEF0LCBndWVzdCB9KSA9PiB7XG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbihndWVzdC5sb2NhbGUpO1xuXG4gIC8vIEluaXRpYXRlIGNvbmZpZyB2YXJpYWJsZXNcbiAgY29uc3Qge1xuICAgIGxvZ28sXG4gICAgb2dUYWdzLFxuICAgIGNvdXBsZUluZm8sXG4gICAgdmVudWUsXG4gICAgd2VkZGluZ0RheSxcbiAgICB3ZWRkaW5nRGF0ZSxcbiAgICB3ZWRkaW5nVGltZSxcbiAgICBjYWxlbmRhckluZm8sXG4gIH0gPSB0cmFuc2xhdGVDb25maWcoYXBwQ29uZmlnLCBndWVzdC5sb2NhbGUpO1xuICBjb25zdCB7IGJyaWRlTmFtZSwgZ3Jvb21OYW1lLCBoYXNodGFnLCBjb3VwbGVOYW1lRm9ybWF0IH0gPSBjb3VwbGVJbmZvO1xuXG4gIGNvbnN0IGNvdXBsZU5hbWVTdHIgPVxuICAgIGNvdXBsZU5hbWVGb3JtYXQgPT09ICdHUk9PTV9GSVJTVCdcbiAgICAgID8gYCR7Z3Jvb21OYW1lfSAmICR7YnJpZGVOYW1lfWBcbiAgICAgIDogYCR7YnJpZGVOYW1lfSAmICR7Z3Jvb21OYW1lfWA7XG4gIGNvbnN0IGNvdXBsZU5hbWUgPVxuICAgIGNvdXBsZU5hbWVGb3JtYXQgPT09ICdHUk9PTV9GSVJTVCcgPyAoXG4gICAgICA8PlxuICAgICAgICB7YnJpZGVOYW1lfSA8c3Bhbj4mYW1wOzwvc3Bhbj4ge2dyb29tTmFtZX1cbiAgICAgIDwvPlxuICAgICkgOiAoXG4gICAgICA8PlxuICAgICAgICB7Z3Jvb21OYW1lfSA8c3Bhbj4mYW1wOzwvc3Bhbj4ge2JyaWRlTmFtZX1cbiAgICAgIDwvPlxuICAgICk7XG5cbiAgLy8gVmVudWUgaW5mb1xuICBjb25zdCB2ZW51ZUJyaWVmID0gYCR7dmVudWUubmFtZX0sICR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gO1xuICBjb25zdCB3ZWRkaW5nRGF0ZUJyaWVmID0gYCR7d2VkZGluZ0RheX0sICR7d2VkZGluZ0RhdGV9YDtcblxuICAvLyBFdmVudCBpbmZvXG4gIGNvbnN0IGV2ZW50VGl0bGUgPSBgJHtjb3VwbGVOYW1lU3RyfSdzIFdlZGRpbmdgO1xuICBsZXQgZXZlbnREZXNjcmlwdGlvbiA9IGAke3dlZGRpbmdEYXRlQnJpZWZ9IGF0ICR7dmVudWUubmFtZX0sICR7dmVudWUuY2l0eX1gO1xuICBpZiAoZ3Vlc3QubmFtZSkge1xuICAgIGV2ZW50RGVzY3JpcHRpb24gPSBgRGVhciAke2d1ZXN0Lm5hbWV9LCB5b3UgYXJlIGNvcmRpYWxseSBpbnZpdGVkIHRvIG91ciB3ZWRkaW5nIG9uICR7d2VkZGluZ0RhdGV9IGF0ICR7dmVudWUubmFtZX0uIExvb2tpbmcgZm9yd2FyZCB0byBzZWVpbmcgeW91IWA7XG4gIH1cblxuICAvLyBDYWxlbmRhciBwYXlsb2FkXG4gIGNvbnN0IGNhbGVuZGFyRXZlbnQgPSB7XG4gICAgdGl0bGU6IGV2ZW50VGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGV2ZW50RGVzY3JpcHRpb24sXG4gICAgbG9jYXRpb246IGAke3ZlbnVlLmNpdHl9LCAke3ZlbnVlLmNvdW50cnl9YCxcbiAgICBzdGFydFRpbWU6IGNhbGVuZGFySW5mby50aW1lU3RhcnRJU08sXG4gICAgZW5kVGltZTogY2FsZW5kYXJJbmZvLnRpbWVFbmRJU08sXG4gIH07XG5cbiAgY29uc3QgZXZlbnRTY2hlZHVsZSA9IFtcbiAgICB7XG4gICAgICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAgIGV2ZW50OiAnQ2h1cmNoJyxcbiAgICAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgICAgdGltZTogJzEycG0nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgICBldmVudDogJ1JlY2VwdGlvbicsXG4gICAgICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAgIHRpbWU6ICcycG0nLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgLy8gICBldmVudDogJ0VuZ2FnZW1lbnQnLFxuICAgIC8vICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgLy8gICB0aW1lOiAnMnBtJyxcbiAgICAvLyB9LFxuICBdO1xuXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93QWNjb3VudERldGFpbHMsIHNldFNob3dBY2NvdW50RGV0YWlsc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xuICAgIH0sIDEwMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50UmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgIGlmIChlbGVtZW50UG9zaXRpb24gPCB3aW5kb3dIZWlnaHQgKiAwLjkpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkLWVsZW1lbnQnKTsgLy8gQWRkIHRoZSBDU1MgY2xhc3Mgd2hlbiB0aGUgZWxlbWVudCBpcyA3NSUgdmlzaWJsZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQtZWxlbWVudCcpOyAvLyBSZW1vdmUgdGhlIENTUyBjbGFzcyBpZiBub3QgdmlzaWJsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTsgLy8gUnVuIHRoaXMgZWZmZWN0IG9ubHkgb25jZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGEucmVhY3QtYWRkLXRvLWNhbGVuZGFyX19idXR0b24gc3BhbiB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPEhlYWRcbiAgICAgICAgey4uLm9nVGFnc31cbiAgICAgICAgdGl0bGU9e2V2ZW50VGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtldmVudERlc2NyaXB0aW9ufVxuICAgICAgICBndWVzdE5hbWU9e2d1ZXN0Lm5hbWV9XG4gICAgICAgIHVybD17Y3VycmVudFVybH1cbiAgICAgICAgZGF0ZT17d2VkZGluZ0RhdGVCcmllZn1cbiAgICAgICAgbW9kaWZpZWRUaW1lPXtndWVzdExpc3RMYXN0VXBkYXRlZEF0fVxuICAgICAgICB2ZW51ZT17dmVudWVCcmllZn1cbiAgICAgICAgbG9nbz17cmVzb2x2ZVBhdGgob2dUYWdzLmxvZ28pfVxuICAgICAgICBhdXRob3I9e3Jlc29sdmVQYXRoKCcvJyl9XG4gICAgICAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdoZWFkZXJfYXJlYSc+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdoZWFkZXItY29udGFpbmVyJz5cbiAgICAgICAgICA8SGVhZGVyTG9nbyAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGVhZGVyLWxvZ28tdGV4dCc+VGhlIEFraW5sYWd1bidzIFBhcnR5PC9zcGFuPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBpZD0naG9tZScgY2xhc3NOYW1lPSdoZWFkZXJfc2xpZGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stbGlzdCBkcmFnZ2FibGUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLXRyYWNrJyBzdHlsZT17eyBvcGFjaXR5OiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmdfY292ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPSdhc3NldHMvaW1hZ2VzL3BpYyAoOCkuanBnJ1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBhbHQ9J2JhY2tncm91bmQgaW1hZ2UnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGNvbnRlbnQtb3ZlcmxheSc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTI0Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9jb250ZW50IHRleHQtY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA2MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nby5oZWFkZXJMb2dvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX3N1Yl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuMnMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdzaXRlSW50cm8nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuN3MnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvY2F0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzFzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzFzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzaHRhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvY2F0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzFzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzFzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUubmFtZX0sIHt2ZW51ZS5jaXR5fSwge3ZlbnVlLmNvdW50cnl9LlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9J2NvbWluZ19zb29uJyBjbGFzc05hbWU9J2NvbWluZ19zb29uX2FyZWEgcHQtMjAgcGItNzAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMScgc3R5bGU9e3sgekluZGV4OiAxIH19PlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgcHQtNTAgd293IGZhZGVJbidcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC4ycydcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC4ycycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPnt0KCdldmVudERhdGUnKX06PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57d2VkZGluZ0RhdGVCcmllZn08L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxBZGRUb0NhbGVuZGFyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50PXtjYWxlbmRhckV2ZW50fVxuICAgICAgICAgICAgICAgICAgICBidXR0b25MYWJlbD17dCgnYnRuQWRkVG9NeUNhbGVuZGFyJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdhc3NldHMvaW1hZ2VzL3NlY3Rpb25fc2hhcGUucG5nJyBhbHQ9J1NoYXBlJyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy04Jz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nd293IGZhZGVJbidcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC42cydcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC42cycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX2NvdW50IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIHB0LTIwJz5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2MCxcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzOCxcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlX2NvdW50IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zMCdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY291bnRfY29udGVudCdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDEsIHBhZGRpbmdUb3A6IDIwIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt2ZW51ZS5tYXBVcmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IDUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdhc3NldHMvaW1hZ2VzL2JldmVudC5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nYmV2ZW50IGNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt2ZW51ZS5tYXBVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzc1dncnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JleScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5hZGRyZXNzTGluZTF9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX3NoYXBlXzInPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0yLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGlkPSdjb250YWN0JyBjbGFzc05hbWU9J2NvbnRhY3RfYXJlYSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY29udGFjdF93cmFwcGVyIHdvdyBmYWRlSW5VcEJpZydcbiAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjRzJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJblVwJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiByZWY9e2VsZW1lbnRSZWZ9IGNsYXNzTmFtZT0nY29udGFpbmVyLWV2ZW50TGluZXVwJz5cbiAgICAgICAgICAgICAge2V2ZW50U2NoZWR1bGUubWFwKChldiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRpbWUsIGRhdGUsIGV2ZW50LCBpY29uIH0gPSBldjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2V2ZW50TGluZXVwJyBrZXk9e2V2ZW50fT5cbiAgICAgICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2V2ZW50fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dGltZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBmb3JtICovfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTknPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHRleHQtY2VudGVyIHBiLTMwJz5cbiAgICAgICAgICAgICAgICAgIHtndWVzdC5uYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdpbnZpdGF0aW9uR3JlZXRpbmcnKX1cbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuNXJlbScgfX0+e2d1ZXN0Lm5hbWV9LDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmYWRlSW4nPlxuICAgICAgICAgICAgPGg0XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc1cHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb2xvcnMgb2YgdGhlIGRheVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGdhcDogJzUwcHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVGVhbCBHcmVlblxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA4MDgwJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBHb2xkXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzgwcHgnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNkNTlhNTcnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgcmVmPXtlbGVtZW50UmVmfVxuICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgIGRhdGEtZGVsYXk9JzAuN3MnXG4gICAgICAgIGNsYXNzTmFtZT0nbG92ZS10aXRsZS1jb250YWluZXIgZmFkZUluVXBCaWcgZmFkZUluJ1xuICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExvdmVUaXRsZUljb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb3ZlLXRpdGxlJz5cbiAgICAgICAgICBNeSBoZWFydCBpcyB5b3VycyB0byBob2xkIGFuZCBjaGVyaXNoIGZvciB0aGUgcmVzdCBvZiBvdXIgZGF5cy5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8YXJ0aWNsZVxuICAgICAgICByZWY9e2VsZW1lbnRSZWZ9XG4gICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgY2xhc3NOYW1lPSdzdG9yaWVzLWNvbnRhaW5lciBmYWRlSW5VcEJpZydcbiAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgIGRhdGEtd293LWRlbGF5PScwLjRzJ1xuICAgICAgPlxuICAgICAgICA8U3RvcmllcyAvPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPSdwaWN0dXJlLWdyaWQtY29udGFpbmVyJz5cbiAgICAgICAgPFBpY3R1cmVzR3JpZCAvPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgey8qIEZvb3RlciBzZWN0aW9uICovfVxuICAgICAgPGZvb3RlciBpZD0nZm9vdGVyJyBjbGFzc05hbWU9J2Zvb3Rlcl9hcmVhJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9zaGFwZV8xJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMS5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3dpZGdldCBwdC01MCBwYi0xMCB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX2xvZ28nPlxuICAgICAgICAgICAgICB7Lyoge2xvZ28uZm9vdGVyTG9nbyAmJlxuICAgICAgICAgICAgICAgIChsb2dvLmZvb3RlckxvZ29UeXBlID09PSAnbXA0JyA/IChcbiAgICAgICAgICAgICAgICAgIDx2aWRlbyBoZWlnaHQ9JzE0MCcgYXV0b1BsYXkgbXV0ZWQgbG9vcD5cbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2xvZ28uZm9vdGVyTG9nb30gdHlwZT0ndmlkZW8vbXA0JyAvPlxuICAgICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICApIDogKCAqL31cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogOTAsIG1hcmdpbjogMjUsIG1hcmdpblRvcDogMCB9fVxuICAgICAgICAgICAgICAgIHNyYz17bG9nby5oZWFkZXJMb2dvfVxuICAgICAgICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtsb2dvLmZvb3RlckxvZ299IC8+ICovfVxuICAgICAgICAgICAgICB7LyogKSl9ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3RpdGxlICc+XG4gICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGl0bGUnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y291cGxlTmFtZX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGg1XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiAnI0QzRDNEMycsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnNDBweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICNEV2VkZGluZ1xuICAgICAgICA8L2g1PlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8Q29sbGVjdEd1ZXN0QXR0ZW5kYW5jZVxuICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cbiAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XG4gICAgICAvPlxuICAgICAgeyFzaG93TW9kYWwgJiYgPENhc2hHaWZ0IHNldFNob3dBY2NvdW50RGV0YWlscz17c2V0U2hvd0FjY291bnREZXRhaWxzfSAvPn1cbiAgICAgIHtzaG93QWNjb3VudERldGFpbHMgJiYgKFxuICAgICAgICA8QWNjb3VudERldGFpbHNcbiAgICAgICAgICBzaG93QWNjb3VudERldGFpbHM9e3Nob3dBY2NvdW50RGV0YWlsc31cbiAgICAgICAgICBzZXRTaG93QWNjb3VudERldGFpbHM9e3NldFNob3dBY2NvdW50RGV0YWlsc31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaG93SW52aXRlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcbiAgY29uc3QgbG9jYWxlUGFyYW1zID0gY3R4LnF1ZXJ5LmxhbmcgfHwgZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgZW1wdHlHdWVzdFBhcmFtcyA9IHtcbiAgICBndWVzdDoge1xuICAgICAgZ3Vlc3RJZDogJycsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGdyZWV0aW5nOiAnJyxcbiAgICAgIGxvY2FsZTogbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgY3VycmVudFVybCA9IHJlc29sdmVQYXRoKGN0eC5yZXEudXJsKTtcbiAgY29uc3QgZ3Vlc3RJZCA9IGN0eC5xdWVyeS51O1xuICBpZiAoIWd1ZXN0SWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGd1ZXN0RGF0YSA9IGd1ZXN0TGlzdC5kYXRhO1xuICBjb25zdCBndWVzdExpc3RMYXN0VXBkYXRlZEF0ID0gZ3Vlc3RMaXN0Lm1ldGEubGFzdFVwZGF0ZWRBdDtcbiAgY29uc3QgeyBuYW1lLCBncmVldGluZywgbG9jYWxlIH0gPVxuICAgIGd1ZXN0RGF0YS5maWx0ZXIoKGd1ZXN0KSA9PiBndWVzdC5ndWVzdElkID09PSBndWVzdElkKVswXSB8fCB7fTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVcmwsXG4gICAgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCxcbiAgICBndWVzdDoge1xuICAgICAgbmFtZSxcbiAgICAgIGdyZWV0aW5nLFxuICAgICAgZ3Vlc3RJZCxcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0ludml0ZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJsdXJoYXNoIH0gZnJvbSAncmVhY3QtYmx1cmhhc2gnO1xyXG5jb25zdCBQaWN0dXJlc0dyaWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGljdHVyZXMgPSBbXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDEpLmpwZycsXHJcbiAgICAvLyAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDIpLmpwZycsXHJcbiAgICAvLyAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDMpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDQpLmpwZycsXHJcbiAgICAvLyAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDUpLmpwZycsXHJcbiAgICAvLyAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDYpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDcpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDgpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDkpLmpwZycsXHJcbiAgICAvLyAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDEwKS5qcGcnLFxyXG4gICAgLy8gJ2Fzc2V0cy9pbWFnZXMvY291cGxlICgxMSkuanBnJyxcclxuICAgIC8vICdhc3NldHMvaW1hZ2VzL2NvdXBsZSAoMTIpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9jb3VwbGUgKDEzKS5qcGcnLFxyXG4gIF07XHJcbiAgY29uc3QgW3NlbGVjdGVkUGljdHVyZSwgc2V0U2VsZWN0ZWRQaWN0dXJlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkZWRJbWFnZXNDb3VudCwgc2V0TG9hZGVkSW1hZ2VzQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0UGljdHVyZSA9IChwaWN0dXJlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFBpY3R1cmUocGljdHVyZSk7XHJcbiAgfTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgbG9hZEltYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgZm9yIChjb25zdCBwaWN0dXJlIG9mIHBpY3R1cmVzKSB7XHJcbiAgLy8gICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgLy8gICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAvLyAgICAgICAgIHNldExvYWRlZEltYWdlc0NvdW50KChwcmV2Q291bnQpID0+IHByZXZDb3VudCArIDEpO1xyXG4gIC8vICAgICAgIH07XHJcblxyXG4gIC8vICAgICAgIGltZy5zcmMgPSBwaWN0dXJlO1xyXG4gIC8vICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiAoaW1nLm9ubG9hZCA9IHJlc29sdmUpKTtcclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgICAgLy8gc2V0SW1hZ2VMb2FkZWQodHJ1ZSk7XHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIGxvYWRJbWFnZXMoKTtcclxuXHJcbiAgLy8gICBpZiAobG9hZGVkSW1hZ2VzQ291bnQgPT09IHBpY3R1cmVzLmxlbmd0aCkge1xyXG4gIC8vICAgICBzZXRJbWFnZUxvYWRlZCh0cnVlKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbcGljdHVyZXMsIGxvYWRlZEltYWdlc0NvdW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGljdHVyZS1ncmlkJz5cclxuICAgICAgICB7cGljdHVyZXMubWFwKChwaWN0dXJlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHRpdGxlPSd2aWV3IGltYWdlJ1xyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPSdtb2RhbCdcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD0nI215TW9kYWwnXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0UGljdHVyZShwaWN0dXJlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3BpY3R1cmUnXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IGltYWdlTG9hZGVkID8gJ25vbmUnIDogJ2lubGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8Qmx1cmhhc2hcclxuICAgICAgICAgICAgICAgICAgaGFzaD0nTGtPeWVWRTBSKldDP3dXQWpab2ZNe3M6UmpvTSdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdncmlkLWltZydcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMzAwcHgnfVxyXG4gICAgICAgICAgICAgICAgICByZXNvbHV0aW9uWD17MzJ9XHJcbiAgICAgICAgICAgICAgICAgIHJlc29sdXRpb25ZPXszMn1cclxuICAgICAgICAgICAgICAgICAgcHVuY2g9ezF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAhaW1hZ2VMb2FkZWQgPyAnbm9uZScgOiAnaW5saW5lJyB9fT4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dyaWQtaW1nJ1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0PSdibHVyJ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cclxuICAgICAgICAgICAgICAgIGFsdD17YFBpY3R1cmUgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dyaWQtaW1nJ1xyXG4gICAgICAgICAgICAgICAgYWx0PXtgUGljdHVyZSAke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2VsZWN0ZWRQaWN0dXJlICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsIGZhZGUnIGlkPSdteU1vZGFsJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWRpYWxvZyc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzcwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkUGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J3NlbGVjdGVkIHBpY3R1cmUnXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWN0dXJlc0dyaWQ7XHJcbiIsImltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5pbXBvcnQgJ3N3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ3N3aXBlci9zd2lwZXIubWluLmNzcyc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBBdXRvcGxheSB9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zd2lwZXItYnVuZGxlLmNzcyc7XHJcblxyXG4vLyBpbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG4vLyBpbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XHJcbi8vIGltcG9ydCAnc3dpcGVyL2Nzcy9hdXRvcGxheSc7XHJcblxyXG5jb25zdCBjb250ZW50ID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnQnJpZGUnLFxyXG4gICAgZGVzYzogYEkgd2FzIGF0ICBhIGJ1cmlhbCBvZiBvbmUgb2YgdGhlIGVsZGVycyBpbiBteSBjaHVyY2ggT2N0b2JlciAyMDIyIGFuZCBjb25uZWN0ZWQgd2l0aCBhIGxvdCBvZiBmb3JtZXIgY2h1cmNoIG1lbWJlcnMgYW5kIGZyaWVuZHMuIEEgZ2VudGxlIG1hbiB3YWxrZWQgdXAgdG8gbWUgdG8gc2F5IEkgbG9va2VkIGZhbWlsaWFyIGFuZCBhY3R1YWxseSBoZSBsb29rZWQgZmFtaWxpYXIgdG9vLiBXZSBleGNoYW5nZWQgY29udGFjdHMgYWZ0ZXIgdGhlIGZhbWlsaWFyaXphdGlvbi4gSSBEaWQgbXkgZmluZGluZ3MgZnJvbSBteSBtdW0gYW5kIGRpc2NvdmVyZWQgb3VyIGJvdGggZmFtaWxpZXMgd2VyZSBjbG9zZS4gV2UgZ290IHRhbGtpbmcgbGl0ZXJhbGx5IGV2ZXJ5IGRheSBhbmQgdGhlIHJlc3TCoMKgaXPCoGhpc3Rvcnnwn6WwLmAsXHJcbiAgICBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvYnJpZGUuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnR3Jvb20nLFxyXG4gICAgZGVzYzogYE91ciBmYXRoZXJzIGVuam95ZWQgYSBjbG9zZSBmcmllbmRzaGlwIHVudGlsIG15IGZhdGhlcidzIHBhc3NpbmcuIFRoZSB0d28gb2YgdXMgaGFkIG5ldmVyIGhhZCBhbnkgcmVhbCBjb25uZWN0aW9uIHVudGlsIE9jdG9iZXIgMjAyMiB3aGVuIHdlIGNvaW5jaWRlbnRhbGx5IG1ldCBhdCB0aGUgYnVyaWFsIG9mIG15IG1lbnRvcidzIGZhdGhlci4gSSBub3RpY2VkIGhlciBmcm9tIGEgZGlzdGFuY2UsIGhlciByYWRpYW50IHNtaWxlIGNhdWdodCBteSBhdHRlbnRpb24uIEkgYXBwcm9hY2hlZCBoZXIgYW5kIGhlciBtdW0gcmUtaW50cm9kdWNpbmcgbXlzZWxmIHRvIGJvdGggb2YgdGhlbSBhbmQgd2UgZXhjaGFuZ2VkIGNvbnRhY3QgaW5mb3JtYXRpb24uIFRoaXMgbWFya2VkIHRoZSBiZWdpbm5pbmcgb2YgYSBoZWFydHdhcm1pbmcgcmV1bmlvbi4gT3VyIGNvbnZlcnNhdGlvbnMgc2luY2UgdGhlbiBoYXZlIGJlZW4gbm90aGluZyBzaG9ydCBvZiBleGhpbGFyYXRpbmcgYW5kIGV4Y2l0aW5nLCAgd2hpY2ggaXMgdGhlIHN0YXJ0IG9mIGEgam91cm5lecKgdG/CoGZvcmV2ZXLwn6WwLmAsXHJcbiAgICBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvZ3Jvb20uanBnJyxcclxuICB9LFxyXG5dO1xyXG5jb25zdCBTdG9yaWVzID0gKCkgPT4ge1xyXG4gIFN3aXBlckNvcmUudXNlKFtBdXRvcGxheV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN3aXBlclxyXG4gICAgICBzcGFjZUJldHdlZW49ezUwfVxyXG4gICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICBhdXRvcGxheT17e1xyXG4gICAgICAgIGRlbGF5OiAxMDAwMCxcclxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgIH19XHJcbiAgICAgIG1vZHVsZXM9e1tQYWdpbmF0aW9uLCBBdXRvcGxheV19XHJcbiAgICAgIHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcbiAgICA+XHJcbiAgICAgIHtjb250ZW50Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBkZXNjIH0gPSBpdGVtO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JyaWRlLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwcmVtJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyNXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YCR7dGl0bGV9IHN0b3JpZXNgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdncm9vbS10aXRsZSc+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0nZ3Jvb20tcGFyYWdyYXBoJz57ZGVzY308L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9Td2lwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JpZXM7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgcmVzb2x2ZVBhdGggZnJvbSAnQHNyYy91dGlscy9yZXNvbHZlUGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgdXJsLFxuICBsb2dvLFxuICBhdXRob3IsXG4gIHNpdGVOYW1lLFxuICBwdWJsaXNoZWRUaW1lLFxuICBtb2RpZmllZFRpbWUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dHlwZScgY29udGVudD0nYXJ0aWNsZScgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17dGl0bGV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17c2l0ZU5hbWV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PXt1cmx9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2UnIGNvbnRlbnQ9e2xvZ299IC8+XG4gICAgICB7cHVibGlzaGVkVGltZSAmJiAoXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PSdhcnRpY2xlOnB1Ymxpc2hlZF90aW1lJyBjb250ZW50PXtwdWJsaXNoZWRUaW1lfSAvPlxuICAgICAgKX1cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdhcnRpY2xlOm1vZGlmaWVkX3RpbWUnIGNvbnRlbnQ9e21vZGlmaWVkVGltZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdhcnRpY2xlOmF1dGhvcicgY29udGVudD17YXV0aG9yfSAvPlxuXG4gICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9J3Nob3J0Y3V0IGljb24nXG4gICAgICAgIGhyZWY9J2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmc/MTIzJ1xuICAgICAgICB0eXBlPSdpbWFnZS9wbmcnXG4gICAgICAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdhc3NldHMvY3NzL2FuaW1hdGUuY3NzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdhc3NldHMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdhc3NldHMvY3NzL2RlZmF1bHQuY3NzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdhc3NldHMvY3NzL3N0eWxlLmNzcycgLz5cblxuICAgICAgey8qIEZPUiBJRTkgYmVsb3cgKi99XG4gICAgICB7LyogW2lmIGx0IElFIDldPiAqL31cbiAgICAgIDxzY3JpcHQgc3JjPSdhc3NldHMvanMvdmVuZG9yL2pxdWVyeS0xLjEyLjQubWluLmpzJz48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPSdhc3NldHMvanMvdmVuZG9yL21vZGVybml6ci0zLjcuMS5taW4uanMnPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9J2Fzc2V0cy9qcy9ib290c3RyYXAubWluLmpzJz48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPSdhc3NldHMvanMvanF1ZXJ5LmVhc2luZy5taW4uanMnPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgKTtcbn07XG4iLCJjb25zdCBiYXNlQ29uZmlnID0ge1xuICB3ZWRkaW5nRGF5OiAnU2F0dXJkYXknLFxuICB3ZWRkaW5nVGltZTogJzhhbSAtIDhwbScsXG4gIHdlZGRpbmdEYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgc2hvd0J1aWx0V2l0aEluZm86IHRydWUsXG4gIHNob3dRckNvZGU6IGZhbHNlLFxuICBjYWxlbmRhckluZm86IHtcbiAgICB0aW1lU3RhcnRJU086ICcyMDIzLTEyLTE2VDE5OjAwOjAwKzA4OjAwJyxcbiAgICB0aW1lRW5kSVNPOiAnMjAyMy0xMi0xNlQyMTowMDowMCswODowMCcsXG4gIH0sXG4gIGNvdXBsZUluZm86IHtcbiAgICBicmlkZU5hbWU6ICdPbGFkdW5uaSAnLFxuICAgIGdyb29tTmFtZTogJ0FkZXdhbGUnLFxuICAgIGNvdXBsZU5hbWVGb3JtYXQ6ICdHUk9PTV9GSVJTVCcsXG4gICAgaGFzaHRhZzogJyNEV2VkZGluZycsXG4gIH0sXG4gIHZlbnVlOiB7XG4gICAgbmFtZTogJ0xhaGwgQmV2ZW50IENlbnRlcicsXG4gICAgYWRkcmVzc0xpbmUxOiAnMTExIG9iYWZlbWkgYXdvbG93byB3YXkgaWtlamEgTGFnb3MsIE5pZ2VyaWEnLFxuICAgIC8vIGFkZHJlc3NMaW5lMjogJ0VrbyBob3RlbCBWLkkgTGFnb3MgU3RhdGUnLFxuICAgIGNpdHk6ICdMYWdvcycsXG4gICAgY291bnRyeTogJ05pZ2VyaWEnLFxuICAgIG1hcFVybDogJ2h0dHBzOi8vbWFwcy5hcHAuZ29vLmdsL0tob0ZETVVudGJUVTZMM3k5JyxcbiAgfSxcbiAgbG9nbzoge1xuICAgIGhlYWRlckxvZ286ICdhc3NldHMvaW1hZ2VzL3Jpbmctc3ZnLnBuZycsXG4gICAgZm9vdGVyTG9nbzogJ2Fzc2V0cy92aWRlby9hdy1yaW5nLWxvZ28tdGlja2VyLm1wNCcsXG4gICAgZm9vdGVyTG9nb1R5cGU6ICdtcDQnLFxuICB9LFxuICBvZ1RhZ3M6IHtcbiAgICBsb2dvOiAnYXNzZXRzL2ltYWdlcy9hdy1yaW5nLWxvZ28ucG5nJyxcbiAgICBzaXRlTmFtZTogJ2h0dHBzOi8vZnVnbHlkYW1pLmdpdGh1Yi5pby9hZGV3YWxlLXdlZGRpbmcvJyxcbiAgICBwdWJsaXNoZWRUaW1lOiAnMjAyMy0wOS0wNycsXG4gIH0sXG59O1xuXG5jb25zdCBsYW5nID0ge1xuICBpZDoge1xuICAgIHdlZGRpbmdEYXk6ICdTYWJ0dScsXG4gICAgd2VkZGluZ0RhdGU6ICcyMiBGZWJydWFyaSAyMDIwJyxcbiAgICB2ZW51ZToge1xuICAgICAgLi4uYmFzZUNvbmZpZy52ZW51ZSxcbiAgICAgIG5hbWU6ICdIb3RlbCBPdmFsJyxcbiAgICAgIGFkZHJlc3NMaW5lMjogJ1N1cmFiYXlhLCBKYXdhIFRpbXVyLCA2MDI0MSwnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLmJhc2VDb25maWcsXG4gIGxhbmcsXG59O1xuIiwiaW1wb3J0IEkxOG4gZnJvbSBcImkxOG4tanNcIjtcbmltcG9ydCBlbiBmcm9tIFwiLi9sYW5nL2VuXCI7XG5pbXBvcnQgaWQgZnJvbSBcIi4vbGFuZy9pZFwiO1xuXG5jb25zdCBzdXBwb3J0ZWRMYW5ndWFnZXMgPSBbXG4gIHtcbiAgICBjb2RlOiBcImVuXCIsXG4gICAgbGFiZWw6IFwiRW5nbGlzaFwiLFxuICAgIHRyYW5zbGF0aW9uczogZW5cbiAgfSxcbiAge1xuICAgIGNvZGU6IFwiaWRcIixcbiAgICBsYWJlbDogXCJJbmRvbmVzaWFcIixcbiAgICB0cmFuc2xhdGlvbnM6IGlkXG4gIH1cbl07XG5cbkkxOG4uZGVmYXVsdExvY2FsZSA9IFwiZW5cIjtcbnN1cHBvcnRlZExhbmd1YWdlcy5mb3JFYWNoKGxhbmcgPT4ge1xuICBJMThuLnRyYW5zbGF0aW9uc1tsYW5nLmNvZGVdID0gbGFuZy50cmFuc2xhdGlvbnM7XG59KTtcblxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlT3B0aW9ucyA9IHN1cHBvcnRlZExhbmd1YWdlcy5tYXAobGFuZyA9PiAoe1xuICB2YWx1ZTogbGFuZy5jb2RlLFxuICBsYWJlbDogbGFuZy5sYWJlbFxufSkpO1xuXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxlID0gbG9jYWxlID0+IHtcbiAgSTE4bi5sb2NhbGUgPSBsb2NhbGU7XG59O1xuXG5leHBvcnQgY29uc3QgdCA9IChuYW1lLCBwYXJhbXMgPSB7fSkgPT4ge1xuICByZXR1cm4gSTE4bi50KG5hbWUsIHBhcmFtcyk7XG59O1xuXG5leHBvcnQgY29uc3QgVHJhbnMgPSBwcm9wcyA9PiAoXG4gIDxzcGFuXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0KHByb3BzLmkxOG5LZXksIHsgLi4ucHJvcHMgfSkgfX1cbiAgPjwvc3Bhbj5cbik7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlID0gSTE4bi5kZWZhdWx0TG9jYWxlO1xuXG5leHBvcnQgY29uc3QgdXNlVHJhbnNsYXRpb24gPSBsb2NhbGUgPT4ge1xuICBJMThuLmxvY2FsZSA9IGxvY2FsZTtcbiAgcmV0dXJuIEkxOG4udDtcbn07XG4iLCJjb25zdCBmYWxsYmFja0hvc3QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCAocGF0aCwgaGVhZGVycykgPT4ge1xuICBpZiAocGF0aC5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgLy8gVXNlIGJyb3dzZXIncyBgd2luZG93YCBpZiBoZWFkZXJzIGlzIG5vdCBwcm92aWRlZFxuICBpZiAoIWhlYWRlcnMgJiYgcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJjb3VsZCBub3QgcmVzb2x2ZSBwYXRoIHdpdGhvdXQgcmVxdWVzdCBoZWFkZXJzOiB3aW5kb3cgaXMgdW5kZWZpbmVkXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3QgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3R9JHtwYXRofWA7XG4gIH1cbiAgY29uc3QgaG9zdCA9IGhlYWRlcnNcbiAgICA/IGhlYWRlcnNbXCJ4LW5vdy1kZXBsb3ltZW50LXVybFwiXSB8fFxuICAgICAgaGVhZGVyc1tcIngtZm9yd2FyZGVkLWhvc3RcIl0gfHxcbiAgICAgIGhlYWRlcnMuaG9zdFxuICAgIDogbnVsbDtcbiAgY29uc3Qgc2NoZW1lID1cbiAgICBoZWFkZXJzICYmIGhlYWRlcnNbXCJ4LWZvcndhcmRlZC1wcm90b1wiXVxuICAgICAgPyBoZWFkZXJzW1wieC1mb3J3YXJkZWQtcHJvdG9cIl1cbiAgICAgIDogXCJodHRwXCI7XG4gIHJldHVybiBob3N0ID8gYCR7c2NoZW1lfTovLyR7aG9zdH0ke3BhdGh9YCA6IGAke2ZhbGxiYWNrSG9zdH0ke3BhdGh9YDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpMThuLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxcmNvZGUucmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWRkLXRvLWNhbGVuZGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJsdXJoYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2VldGFsZXJ0MlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2lwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9