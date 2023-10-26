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
    0: attending,
    1: setAttending
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxapNtm8Jv2QCNYt4CqGJ_mVpEEKERO9fXU8HrTexuDWthmxiQF9NFck6rIjPZ-LgdRHg/exec';
  function httpStatus(statusCode) {
    if (statusCode >= 200 && statusCode <= 299) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success!', 'We appreciate your response!', 'success');
      setShowModal(false);
      setAttending('');
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
  function buildCorsFreeUrl(target) {
    return `https://proxy.cors.sh/${target}`;
  }
  const corsFreeUrl = buildCorsFreeUrl(scriptUrl);
  const handleSubmit = async e => {
    e.preventDefault();
    if (!name || !email || !attending) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('', 'All fields are required', 'error');
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(corsFreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          attending
        })
      });

      /* eslint-disable */
      console.log(...oo_oo(`2086938569_0`, response, 'reponse'));
      const data = await response.text();
      httpStatus(response.status);

      // Response from Google Script
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'Something went wrong, please try again!', 'error');
      console.error('Error:', error);
    }
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
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-content  glassmorphism",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("div", {
    type: "button",
    className: "close guest-modal",
    onClick: () => setShowModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "\xD7")), __jsx("div", {
    className: "modal-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "Inform Us of your availability"), __jsx("form", {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: undefined,
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
    __self: undefined,
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
    onChange: e => setName(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: undefined,
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
    __self: undefined,
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
    onChange: e => setEmail(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "mb-3",
    __self: undefined,
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
    __self: undefined,
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
    onChange: e => setAttending(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  })), __jsx("button", {
    type: "submit",
    className: "guest-form-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }, isLoading ? 'Submitting...' : 'Submit')))))));
};
/* harmony default export */ __webpack_exports__["default"] = (CollectGuestAttendance);
/* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x391d(){var _0x2d8a98=['message','test','autoExpandPreviousObjects','6hoBHJx','function','_allowedToSend','15ZmLVLl','_isUndefined','','env','elapsed','POSITIVE_INFINITY','1.0.0','date','_console_ninja','_attemptToReconnectShortly','nodeModules','_addProperty','_blacklistedProperty','console','isArray','array','1312766fFLLAD','root_exp','call','root_exp_id','count','String','warn','','allStrLength','20AuMXwX','name','level','_addObjectProperty','_treeNodePropertiesAfterFullValue','19784RZWKGd','stackTraceLimit','[object\\x20Set]','Map','3915zDcWzX','hits','disabledTrace','location','substr','unknown','[object\\x20Array]','_isPrimitiveType','method','_setNodePermissions','_inNextEdge','unshift','stringify','_connectAttemptCount','_addFunctionsNode','versions','_reconnectTimeout','_dateToString','remix','1232297smIwMm','hostname','disabledLog','perf_hooks','capped','[object\\x20Date]','14253hDpInm','then','depth','hasOwnProperty','noFunctions','_getOwnPropertyNames','NEXT_RUNTIME','_p_','match','replace','getWebSocketClass','join','edge','push','number','_type','_allowedToConnectOnSend','process','error','_p_length','dockerizedApp','string','split','_setNodeId','expressionsToEvaluate','_treeNodePropertiesBeforeFullValue','[object\\x20BigInt]','timeEnd','_isMap','reduceLimits','_maxConnectAttemptCount','funcName','catch','_hasSymbolPropertyOnItsPath','now','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','432MhHNFO','_connected','toString','_getOwnPropertySymbols','data','hrtime','enumerable','astro','isExpressionToEvaluate','_inBrowser','totalStrLength','trace','NEGATIVE_INFINITY','getOwnPropertyNames','null','nuxt','_hasMapOnItsPath','\\x20server','port','length','_WebSocketClass','parent','negativeZero','elements','_isPrimitiveWrapperType','_setNodeExpressionPath','global','cappedElements','autoExpandMaxDepth','HTMLAllCollection','Symbol','path','boolean','Set','timeStamp','getOwnPropertyDescriptor','_p_name','_Symbol','_keyStrRegExp','_disposeWebsocket','getter','_webSocketErrorDocsLink','autoExpandPropertyCount','symbol','_objectToString','_sortProps','rootExpression','webpack','sort','Number',':logPointId:','8376360nTFfCo','value','prototype','_property','autoExpand','object','_isSet','strLength','_socket','coverage','_setNodeQueryPath','ws://','_hasSetOnItsPath','bigint','_consoleNinjaAllowedToStart','resolveGetters','getOwnPropertySymbols','toLowerCase','unref','type','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_sendErrorMessage','53886RBBEfW','_setNodeExpandableState','_propertyName','close','undefined','positiveInfinity','nan','_addLoadNode','Boolean','props','next.js','onopen','log','_connectToHostNow','reload','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','time','get','constructor','_setNodeLabel','index','[object\\x20Map]',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Damilare\",\"169.254.80.80\",\"172.31.112.1\"],'onmessage','forEach','node','getPrototypeOf','Buffer','4431040CQHEso','\\x20browser','_regExpToString','includes','_processTreeNodeResult','default','serialize','60992','__es'+'Module','performance','bind','readyState','_connecting','_numberRegExp','_console_ninja_session','_isArray','onerror','host','_HTMLAllCollection','_ws','1698349701715','send','concat','gateway.docker.internal','current','onclose','_additionalMetadata','127.0.0.1','autoExpandLimit','Error','_capIfString','sortProps','_undefined'];_0x391d=function(){return _0x2d8a98;};return _0x391d();}var _0x30d46c=_0x394b;function _0x394b(_0x122f32,_0x569f28){var _0x391df3=_0x391d();return _0x394b=function(_0x394b35,_0x2fbe16){_0x394b35=_0x394b35-0xcc;var _0x111890=_0x391df3[_0x394b35];return _0x111890;},_0x394b(_0x122f32,_0x569f28);}(function(_0x1d3e53,_0x1f24e5){var _0x430c6c=_0x394b,_0x4595ec=_0x1d3e53();while(!![]){try{var _0x5506bf=parseInt(_0x430c6c(0xec))/0x1*(-parseInt(_0x430c6c(0x194))/0x2)+-parseInt(_0x430c6c(0x127))/0x3*(parseInt(_0x430c6c(0x105))/0x4)+-parseInt(_0x430c6c(0x1b0))/0x5+-parseInt(_0x430c6c(0xe9))/0x6*(parseInt(_0x430c6c(0xfc))/0x7)+-parseInt(_0x430c6c(0x10a))/0x8*(parseInt(_0x430c6c(0x10e))/0x9)+-parseInt(_0x430c6c(0x17e))/0xa+-parseInt(_0x430c6c(0x121))/0xb*(-parseInt(_0x430c6c(0x14b))/0xc);if(_0x5506bf===_0x1f24e5)break;else _0x4595ec['push'](_0x4595ec['shift']());}catch(_0x103b4a){_0x4595ec['push'](_0x4595ec['shift']());}}}(_0x391d,0x96dcf));var j=Object['create'],H=Object['defineProperty'],G=Object[_0x30d46c(0x16e)],ee=Object['getOwnPropertyNames'],te=Object[_0x30d46c(0x1ae)],ne=Object['prototype'][_0x30d46c(0x12a)],re=(_0x1d5fc6,_0x74781d,_0x8f03cd,_0x49ff4f)=>{var _0x180dcd=_0x30d46c;if(_0x74781d&&typeof _0x74781d==_0x180dcd(0x183)||typeof _0x74781d==_0x180dcd(0xea)){for(let _0x16cd95 of ee(_0x74781d))!ne['call'](_0x1d5fc6,_0x16cd95)&&_0x16cd95!==_0x8f03cd&&H(_0x1d5fc6,_0x16cd95,{'get':()=>_0x74781d[_0x16cd95],'enumerable':!(_0x49ff4f=G(_0x74781d,_0x16cd95))||_0x49ff4f[_0x180dcd(0x151)]});}return _0x1d5fc6;},x=(_0x568bc8,_0x2de1d4,_0x5b4c4f)=>(_0x5b4c4f=_0x568bc8!=null?j(te(_0x568bc8)):{},re(_0x2de1d4||!_0x568bc8||!_0x568bc8[_0x30d46c(0xcd)]?H(_0x5b4c4f,_0x30d46c(0x1b5),{'value':_0x568bc8,'enumerable':!0x0}):_0x5b4c4f,_0x568bc8)),X=class{constructor(_0x47f38c,_0x5c1b06,_0x3f2856,_0x457d3d,_0x18ff64){var _0x4bb61d=_0x30d46c;this[_0x4bb61d(0x165)]=_0x47f38c,this[_0x4bb61d(0xd6)]=_0x5c1b06,this[_0x4bb61d(0x15d)]=_0x3f2856,this[_0x4bb61d(0xf6)]=_0x457d3d,this['dockerizedApp']=_0x18ff64,this[_0x4bb61d(0xeb)]=!0x0,this[_0x4bb61d(0x137)]=!0x0,this[_0x4bb61d(0x14c)]=!0x1,this[_0x4bb61d(0xd1)]=!0x1,this['_inNextEdge']=_0x47f38c[_0x4bb61d(0x138)]?.[_0x4bb61d(0xef)]?.[_0x4bb61d(0x12d)]==='edge',this[_0x4bb61d(0x154)]=!this[_0x4bb61d(0x165)][_0x4bb61d(0x138)]?.[_0x4bb61d(0x11d)]?.[_0x4bb61d(0x1ad)]&&!this[_0x4bb61d(0x118)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4bb61d(0x145)]=0x14,this[_0x4bb61d(0x174)]='https://tinyurl.com/37x8b79t',this[_0x4bb61d(0x193)]=(this[_0x4bb61d(0x154)]?_0x4bb61d(0x14a):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x4bb61d(0x174)];}async[_0x30d46c(0x131)](){var _0x1e90f1=_0x30d46c;if(this[_0x1e90f1(0x15f)])return this[_0x1e90f1(0x15f)];let _0x4ae77c;if(this[_0x1e90f1(0x154)]||this['_inNextEdge'])_0x4ae77c=this[_0x1e90f1(0x165)]['WebSocket'];else{if(this['global'][_0x1e90f1(0x138)]?.['_WebSocket'])_0x4ae77c=this['global'][_0x1e90f1(0x138)]?.['_WebSocket'];else try{let _0x4ceb95=await import('path');_0x4ae77c=(await import((await import('url'))['pathToFileURL'](_0x4ceb95[_0x1e90f1(0x132)](this[_0x1e90f1(0xf6)],'ws/index.js'))['toString']()))[_0x1e90f1(0x1b5)];}catch{try{_0x4ae77c=require(require(_0x1e90f1(0x16a))[_0x1e90f1(0x132)](this['nodeModules'],'ws'));}catch{throw new Error(_0x1e90f1(0x1a3));}}}return this['_WebSocketClass']=_0x4ae77c,_0x4ae77c;}[_0x30d46c(0x1a1)](){var _0x49089a=_0x30d46c;this[_0x49089a(0xd1)]||this['_connected']||this['_connectAttemptCount']>=this[_0x49089a(0x145)]||(this[_0x49089a(0x137)]=!0x1,this[_0x49089a(0xd1)]=!0x0,this[_0x49089a(0x11b)]++,this[_0x49089a(0xd8)]=new Promise((_0x34eafc,_0x144324)=>{var _0x874fa4=_0x49089a;this[_0x874fa4(0x131)]()[_0x874fa4(0x128)](_0x4baf58=>{var _0x41ddac=_0x874fa4;let _0x25743b=new _0x4baf58(_0x41ddac(0x189)+(!this['_inBrowser']&&this[_0x41ddac(0x13b)]?_0x41ddac(0xdc):this[_0x41ddac(0xd6)])+':'+this[_0x41ddac(0x15d)]);_0x25743b[_0x41ddac(0xd5)]=()=>{var _0x2b4f65=_0x41ddac;this[_0x2b4f65(0xeb)]=!0x1,this[_0x2b4f65(0x172)](_0x25743b),this[_0x2b4f65(0xf5)](),_0x144324(new Error('logger\\x20websocket\\x20error'));},_0x25743b[_0x41ddac(0x19f)]=()=>{var _0x42082a=_0x41ddac;this[_0x42082a(0x154)]||_0x25743b[_0x42082a(0x186)]&&_0x25743b[_0x42082a(0x186)]['unref']&&_0x25743b[_0x42082a(0x186)][_0x42082a(0x190)](),_0x34eafc(_0x25743b);},_0x25743b[_0x41ddac(0xde)]=()=>{var _0x132972=_0x41ddac;this[_0x132972(0x137)]=!0x0,this[_0x132972(0x172)](_0x25743b),this['_attemptToReconnectShortly']();},_0x25743b[_0x41ddac(0x1ab)]=_0x1afd11=>{var _0x18d6b5=_0x41ddac;try{_0x1afd11&&_0x1afd11[_0x18d6b5(0x14f)]&&this[_0x18d6b5(0x154)]&&JSON['parse'](_0x1afd11['data'])[_0x18d6b5(0x116)]===_0x18d6b5(0x1a2)&&this['global'][_0x18d6b5(0x111)][_0x18d6b5(0x1a2)]();}catch{}};})[_0x874fa4(0x128)](_0x1b24d2=>(this[_0x874fa4(0x14c)]=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x874fa4(0xeb)]=!0x0,this[_0x874fa4(0x11b)]=0x0,_0x1b24d2))[_0x874fa4(0x147)](_0x37f5a0=>(this[_0x874fa4(0x14c)]=!0x1,this[_0x874fa4(0xd1)]=!0x1,console[_0x874fa4(0x102)](_0x874fa4(0x192)+this[_0x874fa4(0x174)]),_0x144324(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x37f5a0&&_0x37f5a0[_0x874fa4(0xe6)])))));}));}['_disposeWebsocket'](_0x49a461){var _0x4f8869=_0x30d46c;this[_0x4f8869(0x14c)]=!0x1,this['_connecting']=!0x1;try{_0x49a461[_0x4f8869(0xde)]=null,_0x49a461['onerror']=null,_0x49a461[_0x4f8869(0x19f)]=null;}catch{}try{_0x49a461[_0x4f8869(0xd0)]<0x2&&_0x49a461[_0x4f8869(0x197)]();}catch{}}['_attemptToReconnectShortly'](){var _0x15979b=_0x30d46c;clearTimeout(this['_reconnectTimeout']),!(this[_0x15979b(0x11b)]>=this[_0x15979b(0x145)])&&(this[_0x15979b(0x11e)]=setTimeout(()=>{var _0x557b68=_0x15979b;this['_connected']||this['_connecting']||(this['_connectToHostNow'](),this[_0x557b68(0xd8)]?.[_0x557b68(0x147)](()=>this[_0x557b68(0xf5)]()));},0x1f4),this[_0x15979b(0x11e)][_0x15979b(0x190)]&&this['_reconnectTimeout'][_0x15979b(0x190)]());}async[_0x30d46c(0xda)](_0x39e782){var _0x4860f9=_0x30d46c;try{if(!this['_allowedToSend'])return;this[_0x4860f9(0x137)]&&this[_0x4860f9(0x1a1)](),(await this['_ws'])[_0x4860f9(0xda)](JSON['stringify'](_0x39e782));}catch(_0x1e17e0){console[_0x4860f9(0x102)](this[_0x4860f9(0x193)]+':\\x20'+(_0x1e17e0&&_0x1e17e0[_0x4860f9(0xe6)])),this[_0x4860f9(0xeb)]=!0x1,this[_0x4860f9(0xf5)]();}}};function b(_0x46d0b1,_0x4c18eb,_0x321ff7,_0x676911,_0x4c8299,_0x54255a){var _0x3937e7=_0x30d46c;let _0x50e0f9=_0x321ff7[_0x3937e7(0x13d)](',')['map'](_0x41d87=>{var _0x5179a2=_0x3937e7;try{_0x46d0b1['_console_ninja_session']||((_0x4c8299===_0x5179a2(0x19e)||_0x4c8299===_0x5179a2(0x120)||_0x4c8299===_0x5179a2(0x152))&&(_0x4c8299+=!_0x46d0b1[_0x5179a2(0x138)]?.[_0x5179a2(0x11d)]?.[_0x5179a2(0x1ad)]&&_0x46d0b1[_0x5179a2(0x138)]?.['env']?.[_0x5179a2(0x12d)]!=='edge'?_0x5179a2(0x1b1):_0x5179a2(0x15c)),_0x46d0b1['_console_ninja_session']={'id':+new Date(),'tool':_0x4c8299});let _0x7aabbf=new X(_0x46d0b1,_0x4c18eb,_0x41d87,_0x676911,_0x54255a);return _0x7aabbf['send'][_0x5179a2(0xcf)](_0x7aabbf);}catch(_0x1cb06f){return console[_0x5179a2(0x102)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x1cb06f&&_0x1cb06f['message']),()=>{};}});return _0x277e04=>_0x50e0f9[_0x3937e7(0x1ac)](_0xa42fb=>_0xa42fb(_0x277e04));}function W(_0x1ec5c2){var _0x3f0495=_0x30d46c;let _0x11427f=function(_0x3d5583,_0xf50a7){return _0xf50a7-_0x3d5583;},_0x25515e;if(_0x1ec5c2[_0x3f0495(0xce)])_0x25515e=function(){var _0x384058=_0x3f0495;return _0x1ec5c2[_0x384058(0xce)]['now']();};else{if(_0x1ec5c2[_0x3f0495(0x138)]&&_0x1ec5c2[_0x3f0495(0x138)][_0x3f0495(0x150)]&&_0x1ec5c2[_0x3f0495(0x138)]?.[_0x3f0495(0xef)]?.[_0x3f0495(0x12d)]!==_0x3f0495(0x133))_0x25515e=function(){var _0x4b9a8c=_0x3f0495;return _0x1ec5c2[_0x4b9a8c(0x138)]['hrtime']();},_0x11427f=function(_0x1340f2,_0x45e900){return 0x3e8*(_0x45e900[0x0]-_0x1340f2[0x0])+(_0x45e900[0x1]-_0x1340f2[0x1])/0xf4240;};else try{let {performance:_0x4a19c8}=require(_0x3f0495(0x124));_0x25515e=function(){var _0x495572=_0x3f0495;return _0x4a19c8[_0x495572(0x149)]();};}catch{_0x25515e=function(){return+new Date();};}}return{'elapsed':_0x11427f,'timeStamp':_0x25515e,'now':()=>Date[_0x3f0495(0x149)]()};}function J(_0x2c99fd,_0x1298f9,_0x7a4450){var _0x2b6560=_0x30d46c;if(_0x2c99fd[_0x2b6560(0x18c)]!==void 0x0)return _0x2c99fd[_0x2b6560(0x18c)];let _0x17de28=_0x2c99fd[_0x2b6560(0x138)]?.['versions']?.[_0x2b6560(0x1ad)]||_0x2c99fd[_0x2b6560(0x138)]?.[_0x2b6560(0xef)]?.[_0x2b6560(0x12d)]==='edge';return _0x17de28&&_0x7a4450===_0x2b6560(0x15a)?_0x2c99fd[_0x2b6560(0x18c)]=!0x1:_0x2c99fd[_0x2b6560(0x18c)]=_0x17de28||!_0x1298f9||_0x2c99fd['location']?.['hostname']&&_0x1298f9[_0x2b6560(0x1b3)](_0x2c99fd[_0x2b6560(0x111)][_0x2b6560(0x122)]),_0x2c99fd[_0x2b6560(0x18c)];}function Y(_0x319751,_0x5d267a,_0x2408ba,_0x563504){var _0x4248d6=_0x30d46c;_0x319751=_0x319751,_0x5d267a=_0x5d267a,_0x2408ba=_0x2408ba,_0x563504=_0x563504;let _0x5c6ba4=W(_0x319751),_0x5dead5=_0x5c6ba4[_0x4248d6(0xf0)],_0x299da3=_0x5c6ba4['timeStamp'];class _0x3187a7{constructor(){var _0x54c54b=_0x4248d6;this[_0x54c54b(0x171)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c54b(0xd2)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c54b(0xe5)]=_0x319751[_0x54c54b(0x198)],this[_0x54c54b(0xd7)]=_0x319751[_0x54c54b(0x168)],this['_getOwnPropertyDescriptor']=Object[_0x54c54b(0x16e)],this[_0x54c54b(0x12c)]=Object[_0x54c54b(0x158)],this[_0x54c54b(0x170)]=_0x319751[_0x54c54b(0x169)],this[_0x54c54b(0x1b2)]=RegExp['prototype'][_0x54c54b(0x14d)],this[_0x54c54b(0x11f)]=Date['prototype'][_0x54c54b(0x14d)];}[_0x4248d6(0x1b6)](_0x43bfc7,_0x25d451,_0x1e71c5,_0x508a0f){var _0x136692=_0x4248d6,_0x22f7b8=this,_0x27a473=_0x1e71c5['autoExpand'];function _0x412bfe(_0x1561f7,_0x2a0987,_0x58f130){var _0x21c91d=_0x394b;_0x2a0987[_0x21c91d(0x191)]=_0x21c91d(0x113),_0x2a0987[_0x21c91d(0x139)]=_0x1561f7[_0x21c91d(0xe6)],_0x1c36b0=_0x58f130['node'][_0x21c91d(0xdd)],_0x58f130[_0x21c91d(0x1ad)][_0x21c91d(0xdd)]=_0x2a0987,_0x22f7b8[_0x21c91d(0x140)](_0x2a0987,_0x58f130);}try{_0x1e71c5[_0x136692(0x107)]++,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)][_0x136692(0x134)](_0x25d451);var _0x315743,_0x541aa8,_0x3cced9,_0x2a34a1,_0x20b4f2=[],_0x4da63b=[],_0x556979,_0x2d2d6d=this[_0x136692(0x136)](_0x25d451),_0xd832c5=_0x2d2d6d==='array',_0x268c40=!0x1,_0x130f3e=_0x2d2d6d===_0x136692(0xea),_0x369b0e=this[_0x136692(0x115)](_0x2d2d6d),_0x498418=this['_isPrimitiveWrapperType'](_0x2d2d6d),_0x340f83=_0x369b0e||_0x498418,_0x2493be={},_0x36f3cc=0x0,_0x3a2fda=!0x1,_0x1c36b0,_0x348bf1=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1e71c5[_0x136692(0x129)]){if(_0xd832c5){if(_0x541aa8=_0x25d451[_0x136692(0x15e)],_0x541aa8>_0x1e71c5[_0x136692(0x162)]){for(_0x3cced9=0x0,_0x2a34a1=_0x1e71c5['elements'],_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));_0x43bfc7[_0x136692(0x166)]=!0x0;}else{for(_0x3cced9=0x0,_0x2a34a1=_0x541aa8,_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));}_0x1e71c5[_0x136692(0x175)]+=_0x4da63b['length'];}if(!(_0x2d2d6d==='null'||_0x2d2d6d===_0x136692(0x198))&&!_0x369b0e&&_0x2d2d6d!==_0x136692(0x101)&&_0x2d2d6d!==_0x136692(0x1af)&&_0x2d2d6d!=='bigint'){var _0x2cc7c3=_0x508a0f[_0x136692(0x19d)]||_0x1e71c5['props'];if(this[_0x136692(0x184)](_0x25d451)?(_0x315743=0x0,_0x25d451[_0x136692(0x1ac)](function(_0x5b5110){var _0x58c3cb=_0x136692;if(_0x36f3cc++,_0x1e71c5[_0x58c3cb(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5[_0x58c3cb(0x153)]&&_0x1e71c5[_0x58c3cb(0x182)]&&_0x1e71c5[_0x58c3cb(0x175)]>_0x1e71c5[_0x58c3cb(0xe1)]){_0x3a2fda=!0x0;return;}_0x4da63b[_0x58c3cb(0x134)](_0x22f7b8[_0x58c3cb(0xf7)](_0x20b4f2,_0x25d451,_0x58c3cb(0x16c),_0x315743++,_0x1e71c5,function(_0xfcb5c5){return function(){return _0xfcb5c5;};}(_0x5b5110)));})):this[_0x136692(0x143)](_0x25d451)&&_0x25d451['forEach'](function(_0x2056f5,_0x313010){var _0x55a7fd=_0x136692;if(_0x36f3cc++,_0x1e71c5['autoExpandPropertyCount']++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5['isExpressionToEvaluate']&&_0x1e71c5['autoExpand']&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x55a7fd(0xe1)]){_0x3a2fda=!0x0;return;}var _0x27b755=_0x313010['toString']();_0x27b755['length']>0x64&&(_0x27b755=_0x27b755['slice'](0x0,0x64)+'...'),_0x4da63b[_0x55a7fd(0x134)](_0x22f7b8[_0x55a7fd(0xf7)](_0x20b4f2,_0x25d451,_0x55a7fd(0x10d),_0x27b755,_0x1e71c5,function(_0x58dde9){return function(){return _0x58dde9;};}(_0x2056f5)));}),!_0x268c40){try{for(_0x556979 in _0x25d451)if(!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}catch{}if(_0x2493be[_0x136692(0x13a)]=!0x0,_0x130f3e&&(_0x2493be[_0x136692(0x16f)]=!0x0),!_0x3a2fda){var _0x379ad8=[][_0x136692(0xdb)](this[_0x136692(0x12c)](_0x25d451))[_0x136692(0xdb)](this[_0x136692(0x14e)](_0x25d451));for(_0x315743=0x0,_0x541aa8=_0x379ad8[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)if(_0x556979=_0x379ad8[_0x315743],!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979[_0x136692(0x14d)]()))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)&&!_0x2493be[_0x136692(0x12e)+_0x556979[_0x136692(0x14d)]()]){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b['push'](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}}}}if(_0x43bfc7[_0x136692(0x191)]=_0x2d2d6d,_0x340f83?(_0x43bfc7['value']=_0x25d451['valueOf'](),this[_0x136692(0xe3)](_0x2d2d6d,_0x43bfc7,_0x1e71c5,_0x508a0f)):_0x2d2d6d===_0x136692(0xf3)?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x11f)][_0x136692(0xfe)](_0x25d451):_0x2d2d6d===_0x136692(0x18b)?_0x43bfc7[_0x136692(0x17f)]=_0x25d451['toString']():_0x2d2d6d==='RegExp'?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x1b2)]['call'](_0x25d451):_0x2d2d6d===_0x136692(0x176)&&this[_0x136692(0x170)]?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x170)][_0x136692(0x180)][_0x136692(0x14d)][_0x136692(0xfe)](_0x25d451):!_0x1e71c5[_0x136692(0x129)]&&!(_0x2d2d6d===_0x136692(0x159)||_0x2d2d6d===_0x136692(0x198))&&(delete _0x43bfc7['value'],_0x43bfc7[_0x136692(0x125)]=!0x0),_0x3a2fda&&(_0x43bfc7['cappedProps']=!0x0),_0x1c36b0=_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)],_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x43bfc7,this[_0x136692(0x140)](_0x43bfc7,_0x1e71c5),_0x4da63b[_0x136692(0x15e)]){for(_0x315743=0x0,_0x541aa8=_0x4da63b[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)_0x4da63b[_0x315743](_0x315743);}_0x20b4f2[_0x136692(0x15e)]&&(_0x43bfc7['props']=_0x20b4f2);}catch(_0xcb2f1f){_0x412bfe(_0xcb2f1f,_0x43bfc7,_0x1e71c5);}return this[_0x136692(0xdf)](_0x25d451,_0x43bfc7),this[_0x136692(0x109)](_0x43bfc7,_0x1e71c5),_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x1c36b0,_0x1e71c5[_0x136692(0x107)]--,_0x1e71c5['autoExpand']=_0x27a473,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)]['pop'](),_0x43bfc7;}[_0x4248d6(0x14e)](_0x36fd65){var _0x3a70b0=_0x4248d6;return Object[_0x3a70b0(0x18e)]?Object['getOwnPropertySymbols'](_0x36fd65):[];}[_0x4248d6(0x184)](_0x2e653d){var _0x3fc9c1=_0x4248d6;return!!(_0x2e653d&&_0x319751['Set']&&this[_0x3fc9c1(0x177)](_0x2e653d)===_0x3fc9c1(0x10c)&&_0x2e653d[_0x3fc9c1(0x1ac)]);}[_0x4248d6(0xf8)](_0x52d6ba,_0x57f26e,_0xff5ab3){var _0xd01f4b=_0x4248d6;return _0xff5ab3[_0xd01f4b(0x12b)]?typeof _0x52d6ba[_0x57f26e]==_0xd01f4b(0xea):!0x1;}[_0x4248d6(0x136)](_0x89a353){var _0x3c333c=_0x4248d6,_0x45a790='';return _0x45a790=typeof _0x89a353,_0x45a790===_0x3c333c(0x183)?this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x114)?_0x45a790=_0x3c333c(0xfb):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x126)?_0x45a790=_0x3c333c(0xf3):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x141)?_0x45a790=_0x3c333c(0x18b):_0x89a353===null?_0x45a790=_0x3c333c(0x159):_0x89a353[_0x3c333c(0x1a6)]&&(_0x45a790=_0x89a353[_0x3c333c(0x1a6)][_0x3c333c(0x106)]||_0x45a790):_0x45a790==='undefined'&&this[_0x3c333c(0xd7)]&&_0x89a353 instanceof this[_0x3c333c(0xd7)]&&(_0x45a790=_0x3c333c(0x168)),_0x45a790;}[_0x4248d6(0x177)](_0xb28b5){var _0x2d6e81=_0x4248d6;return Object[_0x2d6e81(0x180)][_0x2d6e81(0x14d)]['call'](_0xb28b5);}['_isPrimitiveType'](_0x578eee){var _0x153dac=_0x4248d6;return _0x578eee===_0x153dac(0x16b)||_0x578eee===_0x153dac(0x13c)||_0x578eee===_0x153dac(0x135);}[_0x4248d6(0x163)](_0x13250b){var _0x289843=_0x4248d6;return _0x13250b===_0x289843(0x19c)||_0x13250b==='String'||_0x13250b===_0x289843(0x17c);}[_0x4248d6(0xf7)](_0x45b196,_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3){var _0x5b97f2=this;return function(_0x4a4e4b){var _0x21f6c7=_0x394b,_0x104c97=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0xdd)],_0x4c3709=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x1a8)],_0x702bea=_0x413025[_0x21f6c7(0x1ad)]['parent'];_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x104c97,_0x413025['node']['index']=typeof _0x35730f==_0x21f6c7(0x135)?_0x35730f:_0x4a4e4b,_0x45b196[_0x21f6c7(0x134)](_0x5b97f2[_0x21f6c7(0x181)](_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3)),_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x702bea,_0x413025[_0x21f6c7(0x1ad)]['index']=_0x4c3709;};}[_0x4248d6(0x108)](_0x4609e5,_0x15cfe4,_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359){var _0x4cf52b=_0x4248d6,_0x40276a=this;return _0x15cfe4['_p_'+_0x356575[_0x4cf52b(0x14d)]()]=!0x0,function(_0x3325f7){var _0x2b8d06=_0x4cf52b,_0x2eeeea=_0x357193['node'][_0x2b8d06(0xdd)],_0x23c718=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)],_0x14d3c3=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)];_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)]=_0x2eeeea,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x3325f7,_0x4609e5[_0x2b8d06(0x134)](_0x40276a[_0x2b8d06(0x181)](_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359)),_0x357193['node'][_0x2b8d06(0x160)]=_0x14d3c3,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x23c718;};}['_property'](_0x9ab64f,_0x4d90b9,_0x183599,_0xd58b2b,_0x43af40){var _0x14708=_0x4248d6,_0x446500=this;_0x43af40||(_0x43af40=function(_0x4bdfb1,_0x4bdc4d){return _0x4bdfb1[_0x4bdc4d];});var _0x182c0f=_0x183599[_0x14708(0x14d)](),_0x5b3e54=_0xd58b2b[_0x14708(0x13f)]||{},_0x527792=_0xd58b2b['depth'],_0x508312=_0xd58b2b['isExpressionToEvaluate'];try{var _0x521058=this[_0x14708(0x143)](_0x9ab64f),_0x4123ea=_0x182c0f;_0x521058&&_0x4123ea[0x0]==='\\x27'&&(_0x4123ea=_0x4123ea[_0x14708(0x112)](0x1,_0x4123ea['length']-0x2));var _0x26de9a=_0xd58b2b['expressionsToEvaluate']=_0x5b3e54[_0x14708(0x12e)+_0x4123ea];_0x26de9a&&(_0xd58b2b[_0x14708(0x129)]=_0xd58b2b['depth']+0x1),_0xd58b2b['isExpressionToEvaluate']=!!_0x26de9a;var _0x53a6b3=typeof _0x183599==_0x14708(0x176),_0x31790b={'name':_0x53a6b3||_0x521058?_0x182c0f:this[_0x14708(0x196)](_0x182c0f)};if(_0x53a6b3&&(_0x31790b[_0x14708(0x176)]=!0x0),!(_0x4d90b9===_0x14708(0xfb)||_0x4d90b9===_0x14708(0xe2))){var _0x428e2f=this['_getOwnPropertyDescriptor'](_0x9ab64f,_0x183599);if(_0x428e2f&&(_0x428e2f['set']&&(_0x31790b['setter']=!0x0),_0x428e2f[_0x14708(0x1a5)]&&!_0x26de9a&&!_0xd58b2b[_0x14708(0x18d)]))return _0x31790b[_0x14708(0x173)]=!0x0,this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x5786e9;try{_0x5786e9=_0x43af40(_0x9ab64f,_0x183599);}catch(_0x396ba8){return _0x31790b={'name':_0x182c0f,'type':'unknown','error':_0x396ba8[_0x14708(0xe6)]},this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x52ddfc=this['_type'](_0x5786e9),_0x1f051f=this[_0x14708(0x115)](_0x52ddfc);if(_0x31790b['type']=_0x52ddfc,_0x1f051f)this['_processTreeNodeResult'](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x1b14f0=_0x14708;_0x31790b[_0x1b14f0(0x17f)]=_0x5786e9['valueOf'](),!_0x26de9a&&_0x446500[_0x1b14f0(0xe3)](_0x52ddfc,_0x31790b,_0xd58b2b,{});});else{var _0x348206=_0xd58b2b[_0x14708(0x182)]&&_0xd58b2b['level']<_0xd58b2b[_0x14708(0x167)]&&_0xd58b2b[_0x14708(0xe8)]['indexOf'](_0x5786e9)<0x0&&_0x52ddfc!==_0x14708(0xea)&&_0xd58b2b[_0x14708(0x175)]<_0xd58b2b[_0x14708(0xe1)];_0x348206||_0xd58b2b[_0x14708(0x107)]<_0x527792||_0x26de9a?(this[_0x14708(0x1b6)](_0x31790b,_0x5786e9,_0xd58b2b,_0x26de9a||{}),this['_additionalMetadata'](_0x5786e9,_0x31790b)):this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x2385ba=_0x14708;_0x52ddfc===_0x2385ba(0x159)||_0x52ddfc==='undefined'||(delete _0x31790b[_0x2385ba(0x17f)],_0x31790b[_0x2385ba(0x125)]=!0x0);});}return _0x31790b;}finally{_0xd58b2b['expressionsToEvaluate']=_0x5b3e54,_0xd58b2b[_0x14708(0x129)]=_0x527792,_0xd58b2b[_0x14708(0x153)]=_0x508312;}}[_0x4248d6(0xe3)](_0x305781,_0x1212b3,_0x3beb27,_0x522683){var _0x4d2057=_0x4248d6,_0x2b2a31=_0x522683['strLength']||_0x3beb27[_0x4d2057(0x185)];if((_0x305781===_0x4d2057(0x13c)||_0x305781===_0x4d2057(0x101))&&_0x1212b3[_0x4d2057(0x17f)]){let _0x15d632=_0x1212b3['value'][_0x4d2057(0x15e)];_0x3beb27[_0x4d2057(0x104)]+=_0x15d632,_0x3beb27[_0x4d2057(0x104)]>_0x3beb27['totalStrLength']?(_0x1212b3['capped']='',delete _0x1212b3['value']):_0x15d632>_0x2b2a31&&(_0x1212b3[_0x4d2057(0x125)]=_0x1212b3[_0x4d2057(0x17f)][_0x4d2057(0x112)](0x0,_0x2b2a31),delete _0x1212b3['value']);}}['_isMap'](_0x2ac54f){var _0x1921a0=_0x4248d6;return!!(_0x2ac54f&&_0x319751['Map']&&this[_0x1921a0(0x177)](_0x2ac54f)===_0x1921a0(0x1a9)&&_0x2ac54f[_0x1921a0(0x1ac)]);}['_propertyName'](_0x53ffeb){var _0x2f97d5=_0x4248d6;if(_0x53ffeb[_0x2f97d5(0x12f)](/^\\d+$/))return _0x53ffeb;var _0x2b8f72;try{_0x2b8f72=JSON[_0x2f97d5(0x11a)](''+_0x53ffeb);}catch{_0x2b8f72='\\x22'+this[_0x2f97d5(0x177)](_0x53ffeb)+'\\x22';}return _0x2b8f72[_0x2f97d5(0x12f)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2b8f72=_0x2b8f72['substr'](0x1,_0x2b8f72[_0x2f97d5(0x15e)]-0x2):_0x2b8f72=_0x2b8f72[_0x2f97d5(0x130)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x2f97d5(0x130)](/(^\"|\"$)/g,'\\x27'),_0x2b8f72;}[_0x4248d6(0x1b4)](_0x5beb6d,_0x4cc6c2,_0x55db92,_0x5a76f6){var _0x813bc8=_0x4248d6;this[_0x813bc8(0x140)](_0x5beb6d,_0x4cc6c2),_0x5a76f6&&_0x5a76f6(),this[_0x813bc8(0xdf)](_0x55db92,_0x5beb6d),this[_0x813bc8(0x109)](_0x5beb6d,_0x4cc6c2);}['_treeNodePropertiesBeforeFullValue'](_0x3c6961,_0x172ffa){var _0x174417=_0x4248d6;this[_0x174417(0x13e)](_0x3c6961,_0x172ffa),this[_0x174417(0x188)](_0x3c6961,_0x172ffa),this['_setNodeExpressionPath'](_0x3c6961,_0x172ffa),this[_0x174417(0x117)](_0x3c6961,_0x172ffa);}[_0x4248d6(0x13e)](_0x232fb1,_0x1546dc){}[_0x4248d6(0x188)](_0x1b55ca,_0x1dc1b0){}[_0x4248d6(0x1a7)](_0x290ddd,_0x5ea425){}[_0x4248d6(0xed)](_0x3c1026){return _0x3c1026===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x5816de,_0x51ad0f){var _0x4e3207=_0x4248d6;this[_0x4e3207(0x1a7)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x195)](_0x5816de),_0x51ad0f[_0x4e3207(0xe4)]&&this['_sortProps'](_0x5816de),this[_0x4e3207(0x11c)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x19b)](_0x5816de,_0x51ad0f),this['_cleanNode'](_0x5816de);}[_0x4248d6(0xdf)](_0x3cc52c,_0x4d38a7){var _0x41e4dd=_0x4248d6;let _0x53c9b7;try{_0x319751[_0x41e4dd(0xf9)]&&(_0x53c9b7=_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)],_0x319751[_0x41e4dd(0xf9)]['error']=function(){}),_0x3cc52c&&typeof _0x3cc52c[_0x41e4dd(0x15e)]==_0x41e4dd(0x135)&&(_0x4d38a7[_0x41e4dd(0x15e)]=_0x3cc52c[_0x41e4dd(0x15e)]);}catch{}finally{_0x53c9b7&&(_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)]=_0x53c9b7);}if(_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x135)||_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x17c)){if(isNaN(_0x4d38a7['value']))_0x4d38a7[_0x41e4dd(0x19a)]=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];else switch(_0x4d38a7[_0x41e4dd(0x17f)]){case Number[_0x41e4dd(0xf1)]:_0x4d38a7[_0x41e4dd(0x199)]=!0x0,delete _0x4d38a7['value'];break;case Number['NEGATIVE_INFINITY']:_0x4d38a7['negativeInfinity']=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];break;case 0x0:this['_isNegativeZero'](_0x4d38a7[_0x41e4dd(0x17f)])&&(_0x4d38a7[_0x41e4dd(0x161)]=!0x0);break;}}else _0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0xea)&&typeof _0x3cc52c[_0x41e4dd(0x106)]==_0x41e4dd(0x13c)&&_0x3cc52c[_0x41e4dd(0x106)]&&_0x4d38a7['name']&&_0x3cc52c[_0x41e4dd(0x106)]!==_0x4d38a7['name']&&(_0x4d38a7[_0x41e4dd(0x146)]=_0x3cc52c['name']);}['_isNegativeZero'](_0x545d70){var _0x3f5f78=_0x4248d6;return 0x1/_0x545d70===Number[_0x3f5f78(0x157)];}[_0x4248d6(0x178)](_0x48342d){var _0x1133ce=_0x4248d6;!_0x48342d[_0x1133ce(0x19d)]||!_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x15e)]||_0x48342d['type']===_0x1133ce(0xfb)||_0x48342d[_0x1133ce(0x191)]==='Map'||_0x48342d[_0x1133ce(0x191)]===_0x1133ce(0x16c)||_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x17b)](function(_0x358f74,_0x251519){var _0x197d94=_0x1133ce,_0xba1944=_0x358f74[_0x197d94(0x106)][_0x197d94(0x18f)](),_0x138aff=_0x251519[_0x197d94(0x106)]['toLowerCase']();return _0xba1944<_0x138aff?-0x1:_0xba1944>_0x138aff?0x1:0x0;});}[_0x4248d6(0x11c)](_0x180095,_0x94a7be){var _0xb3b43a=_0x4248d6;if(!(_0x94a7be[_0xb3b43a(0x12b)]||!_0x180095[_0xb3b43a(0x19d)]||!_0x180095[_0xb3b43a(0x19d)]['length'])){for(var _0x46653e=[],_0x80c338=[],_0x142411=0x0,_0x2d6021=_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x15e)];_0x142411<_0x2d6021;_0x142411++){var _0x413289=_0x180095[_0xb3b43a(0x19d)][_0x142411];_0x413289[_0xb3b43a(0x191)]===_0xb3b43a(0xea)?_0x46653e[_0xb3b43a(0x134)](_0x413289):_0x80c338[_0xb3b43a(0x134)](_0x413289);}if(!(!_0x80c338[_0xb3b43a(0x15e)]||_0x46653e['length']<=0x1)){_0x180095[_0xb3b43a(0x19d)]=_0x80c338;var _0x2274df={'functionsNode':!0x0,'props':_0x46653e};this[_0xb3b43a(0x13e)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x1a7)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x195)](_0x2274df),this[_0xb3b43a(0x117)](_0x2274df,_0x94a7be),_0x2274df['id']+='\\x20f',_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x119)](_0x2274df);}}}[_0x4248d6(0x19b)](_0x488e07,_0x30da5f){}[_0x4248d6(0x195)](_0x2fb9ca){}[_0x4248d6(0xd4)](_0x46e88e){var _0x1167c4=_0x4248d6;return Array[_0x1167c4(0xfa)](_0x46e88e)||typeof _0x46e88e=='object'&&this[_0x1167c4(0x177)](_0x46e88e)===_0x1167c4(0x114);}['_setNodePermissions'](_0x3144a8,_0xd8d5c7){}['_cleanNode'](_0x349cb4){var _0x2a5872=_0x4248d6;delete _0x349cb4[_0x2a5872(0x148)],delete _0x349cb4[_0x2a5872(0x18a)],delete _0x349cb4[_0x2a5872(0x15b)];}[_0x4248d6(0x164)](_0x1387b6,_0x59de70){}}let _0x59cd6d=new _0x3187a7(),_0x11e492={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0xb7e3db={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x2e8232(_0xcfd290,_0x3e941f,_0x3283c2,_0x23065e,_0x2a7f01,_0x38778e){var _0x42ca29=_0x4248d6;let _0x401ff6,_0x4885de;try{_0x4885de=_0x299da3(),_0x401ff6=_0x2408ba[_0x3e941f],!_0x401ff6||_0x4885de-_0x401ff6['ts']>0x1f4&&_0x401ff6[_0x42ca29(0x100)]&&_0x401ff6[_0x42ca29(0x1a4)]/_0x401ff6[_0x42ca29(0x100)]<0x64?(_0x2408ba[_0x3e941f]=_0x401ff6={'count':0x0,'time':0x0,'ts':_0x4885de},_0x2408ba[_0x42ca29(0x10f)]={}):_0x4885de-_0x2408ba[_0x42ca29(0x10f)]['ts']>0x32&&_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]&&_0x2408ba[_0x42ca29(0x10f)]['time']/_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]<0x64&&(_0x2408ba[_0x42ca29(0x10f)]={});let _0x3905d7=[],_0x5c3a59=_0x401ff6['reduceLimits']||_0x2408ba[_0x42ca29(0x10f)]['reduceLimits']?_0xb7e3db:_0x11e492,_0x4072d6=_0x9c85d2=>{var _0x5754ea=_0x42ca29;let _0xec7735={};return _0xec7735[_0x5754ea(0x19d)]=_0x9c85d2[_0x5754ea(0x19d)],_0xec7735[_0x5754ea(0x162)]=_0x9c85d2[_0x5754ea(0x162)],_0xec7735[_0x5754ea(0x185)]=_0x9c85d2[_0x5754ea(0x185)],_0xec7735['totalStrLength']=_0x9c85d2[_0x5754ea(0x155)],_0xec7735[_0x5754ea(0xe1)]=_0x9c85d2[_0x5754ea(0xe1)],_0xec7735[_0x5754ea(0x167)]=_0x9c85d2[_0x5754ea(0x167)],_0xec7735[_0x5754ea(0xe4)]=!0x1,_0xec7735[_0x5754ea(0x12b)]=!_0x5d267a,_0xec7735[_0x5754ea(0x129)]=0x1,_0xec7735[_0x5754ea(0x107)]=0x0,_0xec7735['expId']=_0x5754ea(0xff),_0xec7735[_0x5754ea(0x179)]=_0x5754ea(0xfd),_0xec7735[_0x5754ea(0x182)]=!0x0,_0xec7735[_0x5754ea(0xe8)]=[],_0xec7735[_0x5754ea(0x175)]=0x0,_0xec7735[_0x5754ea(0x18d)]=!0x0,_0xec7735[_0x5754ea(0x104)]=0x0,_0xec7735[_0x5754ea(0x1ad)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0xec7735;};for(var _0x4edb78=0x0;_0x4edb78<_0x2a7f01[_0x42ca29(0x15e)];_0x4edb78++)_0x3905d7[_0x42ca29(0x134)](_0x59cd6d['serialize']({'timeNode':_0xcfd290===_0x42ca29(0x1a4)||void 0x0},_0x2a7f01[_0x4edb78],_0x4072d6(_0x5c3a59),{}));if(_0xcfd290==='trace'){let _0x34cb91=Error[_0x42ca29(0x10b)];try{Error[_0x42ca29(0x10b)]=0x1/0x0,_0x3905d7[_0x42ca29(0x134)](_0x59cd6d[_0x42ca29(0x1b6)]({'stackNode':!0x0},new Error()['stack'],_0x4072d6(_0x5c3a59),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x34cb91;}}return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':_0x3905d7,'id':_0x3e941f,'context':_0x38778e}]};}catch(_0x48f0ce){return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':[{'type':_0x42ca29(0x113),'error':_0x48f0ce&&_0x48f0ce['message']}],'id':_0x3e941f,'context':_0x38778e}]};}finally{try{if(_0x401ff6&&_0x4885de){let _0x2ff189=_0x299da3();_0x401ff6['count']++,_0x401ff6[_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x401ff6['ts']=_0x2ff189,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]++,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x2408ba[_0x42ca29(0x10f)]['ts']=_0x2ff189,(_0x401ff6['count']>0x32||_0x401ff6[_0x42ca29(0x1a4)]>0x64)&&(_0x401ff6[_0x42ca29(0x144)]=!0x0),(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]>0x3e8||_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]>0x12c)&&(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x144)]=!0x0);}}catch{}}}return _0x2e8232;}((_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x4e0e77,_0x37052b,_0x203bb4,_0x2f9931,_0x366303)=>{var _0x521a84=_0x30d46c;if(_0x3080e0['_console_ninja'])return _0x3080e0[_0x521a84(0xf4)];if(!J(_0x3080e0,_0x203bb4,_0x4b7e45))return _0x3080e0['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x3080e0[_0x521a84(0xf4)];let _0x3493fc=W(_0x3080e0),_0x4cad30=_0x3493fc[_0x521a84(0xf0)],_0x819273=_0x3493fc[_0x521a84(0x16d)],_0x544cc2=_0x3493fc[_0x521a84(0x149)],_0x3eb3e6={'hits':{},'ts':{}},_0x25ff14=Y(_0x3080e0,_0x2f9931,_0x3eb3e6,_0x4e0e77),_0x192300=_0x25873f=>{_0x3eb3e6['ts'][_0x25873f]=_0x819273();},_0x44f510=(_0x5562fd,_0x2f6706)=>{var _0x2ecd66=_0x521a84;let _0x2cc916=_0x3eb3e6['ts'][_0x2f6706];if(delete _0x3eb3e6['ts'][_0x2f6706],_0x2cc916){let _0x1f5842=_0x4cad30(_0x2cc916,_0x819273());_0x53751c(_0x25ff14(_0x2ecd66(0x1a4),_0x5562fd,_0x544cc2(),_0xf489e2,[_0x1f5842],_0x2f6706));}},_0x18f78b=_0x27e533=>_0x74adcc=>{var _0x53f31a=_0x521a84;try{_0x192300(_0x74adcc),_0x27e533(_0x74adcc);}finally{_0x3080e0[_0x53f31a(0xf9)][_0x53f31a(0x1a4)]=_0x27e533;}},_0x1553d8=_0x4b624b=>_0x5ca441=>{var _0x2ffff7=_0x521a84;try{let [_0x5e2d86,_0x46db52]=_0x5ca441[_0x2ffff7(0x13d)](_0x2ffff7(0x17d));_0x44f510(_0x46db52,_0x5e2d86),_0x4b624b(_0x5e2d86);}finally{_0x3080e0[_0x2ffff7(0xf9)][_0x2ffff7(0x142)]=_0x4b624b;}};_0x3080e0[_0x521a84(0xf4)]={'consoleLog':(_0x18e280,_0x1f4d15)=>{var _0x1b98f5=_0x521a84;_0x3080e0['console'][_0x1b98f5(0x1a0)][_0x1b98f5(0x106)]!==_0x1b98f5(0x123)&&_0x53751c(_0x25ff14(_0x1b98f5(0x1a0),_0x18e280,_0x544cc2(),_0xf489e2,_0x1f4d15));},'consoleTrace':(_0x4c956b,_0xcddb11)=>{var _0x5dd028=_0x521a84;_0x3080e0[_0x5dd028(0xf9)][_0x5dd028(0x1a0)][_0x5dd028(0x106)]!==_0x5dd028(0x110)&&_0x53751c(_0x25ff14(_0x5dd028(0x156),_0x4c956b,_0x544cc2(),_0xf489e2,_0xcddb11));},'consoleTime':()=>{var _0x10a308=_0x521a84;_0x3080e0['console'][_0x10a308(0x1a4)]=_0x18f78b(_0x3080e0['console'][_0x10a308(0x1a4)]);},'consoleTimeEnd':()=>{var _0x44a884=_0x521a84;_0x3080e0[_0x44a884(0xf9)]['timeEnd']=_0x1553d8(_0x3080e0[_0x44a884(0xf9)][_0x44a884(0x142)]);},'autoLog':(_0x479660,_0xd1686c)=>{var _0x40646e=_0x521a84;_0x53751c(_0x25ff14(_0x40646e(0x1a0),_0xd1686c,_0x544cc2(),_0xf489e2,[_0x479660]));},'autoLogMany':(_0x91fed5,_0x40a84f)=>{var _0x7344e1=_0x521a84;_0x53751c(_0x25ff14(_0x7344e1(0x1a0),_0x91fed5,_0x544cc2(),_0xf489e2,_0x40a84f));},'autoTrace':(_0x3546f7,_0x3d8eb5)=>{var _0x25512f=_0x521a84;_0x53751c(_0x25ff14(_0x25512f(0x156),_0x3d8eb5,_0x544cc2(),_0xf489e2,[_0x3546f7]));},'autoTraceMany':(_0x2b722f,_0x2df03b)=>{var _0x20acf1=_0x521a84;_0x53751c(_0x25ff14(_0x20acf1(0x156),_0x2b722f,_0x544cc2(),_0xf489e2,_0x2df03b));},'autoTime':(_0x297194,_0x1a6b68,_0x59d60b)=>{_0x192300(_0x59d60b);},'autoTimeEnd':(_0x4b1174,_0x19e4f9,_0x3e9773)=>{_0x44f510(_0x19e4f9,_0x3e9773);},'coverage':_0x169035=>{var _0x94fdd=_0x521a84;_0x53751c({'method':_0x94fdd(0x187),'version':_0x4e0e77,'args':[{'id':_0x169035}]});}};let _0x53751c=b(_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x366303),_0xf489e2=_0x3080e0[_0x521a84(0xd3)];return _0x3080e0[_0x521a84(0xf4)];})(globalThis,_0x30d46c(0xe0),_0x30d46c(0xcc),\"c:\\\\Users\\\\USER\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.240\\\\node_modules\",_0x30d46c(0x17a),_0x30d46c(0xf2),_0x30d46c(0xd9),_0x30d46c(0x1aa),_0x30d46c(0x103),_0x30d46c(0xee));");
  } catch (e) {}
}
;
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
;
function oo_tr(i, ...v) {
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

/***/ }),

/***/ "./pages/extra.jsx":
/*!*************************!*\
  !*** ./pages/extra.jsx ***!
  \*************************/
/*! exports provided: LoveTitleIcon, EventDateIcon, HeaderLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoveTitleIcon", function() { return LoveTitleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDateIcon", function() { return EventDateIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLogo", function() { return HeaderLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\extra.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LoveTitleIcon = () => {
  return __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__["LazyLoadImage"], {
    src: "/assets/images/wine.png",
    style: {
      width: '80px',
      height: '80px'
    },
    effect: "blur",
    width: '100%',
    alt: "wine illustrator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
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
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M20.355 12.083c-1.643-1.62-2.156-4.77.41-5.83 1.187-.49 2.68-.365 3.928-.227 1.286.143 2.552.417 3.77.856 2.173.785 5.184 2.164 6.027 4.51.993 2.762-1.968 4.107-4.155 4.474-2.775.465-5.706.417-8.513.338-2.694-.076-5.454-.375-7.98-1.366-2.27-.892-4.59-2.333-5.723-4.58-1.043-2.066-.836-4.541.475-6.444C10.4 1.193 13.422.69 16.381.337A49.462 49.462 0 0 1 27.307.27c1.2.123 1.212 2.017 0 1.893a49.877 49.877 0 0 0-7.412-.223c-2.265.105-4.671.24-6.85.902-1.807.549-3.232 1.882-3.627 3.77-.414 1.978.708 3.732 2.23 4.903 3.25 2.5 7.672 2.811 11.615 2.817 2.225.004 4.55.074 6.745-.32.804-.144 1.895-.32 2.484-.957.814-.88-.32-1.938-1.01-2.467-1.83-1.406-4.144-2.283-6.416-2.619-.979-.145-2.579-.413-3.52 0-1.294.57-.576 2.063.147 2.777.87.856-.47 2.194-1.338 1.338Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M34.023 13.727c-1.494 5.45-3.158 10.933-7.099 15.157a22.39 22.39 0 0 1-6.03 4.581c-2.323 1.205-5.13 2.385-7.781 1.828-1.19-.25-.687-2.075.503-1.825 2.292.48 5.02-.888 6.97-1.986a20.808 20.808 0 0 0 5.396-4.373c3.446-3.904 4.869-8.97 6.216-13.884.32-1.174 2.147-.676 1.825.502Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M9.028 7.923c-1.266 8.344-2.59 18.37 3.722 25.133.83.89-.505 2.231-1.338 1.339-6.84-7.331-5.587-17.893-4.21-26.974.183-1.2 2.006-.69 1.826.502Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M14.877 34.343c-1.918 14.074-1.349 28.46 1.636 42.344.255 1.187-1.569 1.695-1.825.503a125.654 125.654 0 0 1-1.636-43.35c.164-1.202 1.988-.69 1.825.503Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M10.34 60.891c-.416-4.656-3.845-8.86-8.29-10.26-1.158-.365-.664-2.193.502-1.825 5.301 1.67 9.186 6.562 9.68 12.085.108 1.212-1.785 1.205-1.893 0Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M3.197 49.92c-.73 1.386-.92 2.937-.96 4.484-.037 1.476-.259 3.246.739 4.46.92 1.12 2.271 1.956 3.53 2.643a17.595 17.595 0 0 0 4.402 1.662c1.184.28.683 2.105-.503 1.825a19.37 19.37 0 0 1-5.07-1.974c-1.515-.855-3.106-1.922-4.12-3.362C.153 58.15.3 56.163.345 54.404c.049-1.89.327-3.75 1.217-5.44.569-1.077 2.202-.122 1.635.956Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M7.919 58.026c1.36 1.72 2.723 3.44 4.084 5.16.306.388.406.965 0 1.339-.342.313-1.01.414-1.338 0L6.58 59.363c-.306-.387-.406-.965 0-1.337.342-.314 1.01-.415 1.339 0ZM12.629 51.884a28.08 28.08 0 0 1 17.418-6.628c1.219-.03 1.218 1.863 0 1.892-5.863.14-11.594 2.288-16.08 6.074-.926.782-2.27-.55-1.338-1.338Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M32.267 46.673c-1.21 4.234-4.072 8.142-8.054 10.15-3.783 1.906-8.623 1.753-11.649-1.48-.831-.889.504-2.23 1.338-1.338 2.6 2.776 6.735 2.676 9.872.907 3.297-1.857 5.638-5.138 6.669-8.742.334-1.169 2.16-.672 1.824.503Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M14.35 53.138a40.707 40.707 0 0 1 5.912-1.533c.485-.087 1.043.132 1.163.661.105.463-.14 1.07-.66 1.165a40.616 40.616 0 0 0-5.913 1.533c-.468.16-1.054-.184-1.163-.661-.12-.526.158-.993.66-1.165Z",
    fill: "#211D1D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx("svg", {
    width: "40",
    height: "40",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "m34.613 27.737 1.437.088a6.111 6.111 0 0 1 1.925.2c.35.2.538.475.1.762-.437.288-1.1 0-1.5 0-.4 0-.925-.1-1.4-.125a3.296 3.296 0 0 0-1.05 0c-.35.113-.287.213-.487.613a7.577 7.577 0 0 1-1.763 2.15c-1.462 1.25-3.45 1.337-5.162 2.087.45-2.962 2.725-4.437 5.475-5-.975 0-2.675-.875-3.513-.462-1.487.637-3.75 1.5-4.212 3.25-.238 1.062-.188 2.637-1.538 2.962-1.35.325-1.725-.962-1.4-1.975-.875.45-2.05.088-1.862-1.05.187-1.137 1.525-1.25 2.387-1.362 2.213-.35 3.9-1.625 5.988-2.288a25.845 25.845 0 0 0-2.5-1.025 6.837 6.837 0 0 0-2.6.488c-.92.114-1.828.31-2.713.587-.64.34-1.19.828-1.6 1.425-.987 1.163-2.2 2.5-3.9 2.375-2.15-.2-1.912-2.65-.325-3.487-1.025 0-2.5-.638-2.4-1.875.088-1.55 1.963-1.738 3.125-1.425 1.097.419 2.166.907 3.2 1.462 1.938.788 3.75 0 5.763-.2a37.994 37.994 0 0 1-4.65-2.675 2.187 2.187 0 0 0-1.375-.55h-1.25a27.671 27.671 0 0 0-3.375.1c-.775 0-1.325.738-1.838 1.25a6.138 6.138 0 0 1-2.5 1.713 1.987 1.987 0 0 1-2.5-.625A2.075 2.075 0 0 1 7.713 22.4c-.975-.325-2.288-1.113-1.425-2.3 1.012-1.388 2.875-.65 3.937.15a5.875 5.875 0 0 0 2.938 1.6c1.482.087 2.968.087 4.45 0a23.74 23.74 0 0 1-2.038-2.013 5.787 5.787 0 0 0-.862-.962c-.852-.38-1.752-.641-2.675-.775a14.522 14.522 0 0 0-2.75-.775 5.611 5.611 0 0 0-2.688.625 6.251 6.251 0 0 1-3.137.525 1.95 1.95 0 0 1-1.675-2.063c.125-1.037.987-1.387 1.875-1.55-2.025-1.887.775-3.687 2.5-2.012 1.025 1.012 1.637 2.912 2.912 3.425 1.613.65 3.375.887 5 1.637-.937-1.25-1.85-2.5-2.725-3.75a6.875 6.875 0 0 0-2.775-2.975c-1.487-.675-3.45-1.487-3.75-3.35-.35-2.287 2.238-1.9 3.45-.95a2.163 2.163 0 0 1 1.4-2.5c1.25-.487 2.013.463 2.175 1.675.025 1.438-.6 2.825-.825 4.325-.262 2.213 2.15 4.875 3.363 6.6 0-1.85.7-4.062-.263-5.787-.625-1.425-2.612-3.825-1.25-5.425 1-1.138 2.238.125 2.575 1.15a1.462 1.462 0 0 1 2.5-.263c1.25 1.725-.75 3.238-1.662 4.513-1.1 1.512-.9 2.95-1.038 4.737a6.597 6.597 0 0 0-.162 2.025c.137.413.812.888 1.112 1.25a26.93 26.93 0 0 0 2.563 2.363c-.1-2.1.212-4.275-.513-6.25-.425-1.15-1.4-3.15-.5-4.288.9-1.137 1.9-.137 2.25.813a2.025 2.025 0 0 1 2.5-.65 1.95 1.95 0 0 1 .425 2.5c-.85 1.812-3.287 2.762-3.287 4.825-.125.95-.063 1.987-.1 2.95a2.023 2.023 0 0 0 0 .675c.137.275.862.612 1.112.775a35.377 35.377 0 0 0 5 2.637c-.287-1.25-.312-2.412-.512-3.75a5.338 5.338 0 0 0-1.388-2.812c-.737-.988-1.5-2.65-.387-3.688.875-.825 2.025-.062 2.35.888 1.05-1.6 3.662-1.438 3.75.737.087 1.65-1.35 2.725-2.5 3.625-.233.15-.419.363-.538.613a3.033 3.033 0 0 0-.187.725c-.057.836-.011 1.675.137 2.5 0 .512 0 1.25.413 1.512.522.28 1.082.482 1.662.6a20.13 20.13 0 0 0 4.188 1.038 6.075 6.075 0 0 1-2.188-4.2 9.1 9.1 0 0 1 .8-4.513c.825 1.25 2.013 2.35 2.763 3.675a5.763 5.763 0 0 1 .1 5.25c.166.013.333.013.5 0Z",
    fill: "#DFAE00",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M19.55 15.787s3.275-2.85 2.5-3.637c-.775-.788-2.112.912-2.112.912s-.638-1.85-1.463-1.25c-.825.6 1.075 3.975 1.075 3.975ZM15.188 10.788s2.975-2.913 1.962-3.475c-1.012-.563-1.75 1.25-1.75 1.25s-.975-2.5-1.787-1.788c-.813.713 1.575 4.013 1.575 4.013ZM9.662 10.437s1.963-4.587.488-4.837-1.4 2.6-1.4 2.6-2.913-1.95-3.113-.7c-.237 1.525 4.025 2.937 4.025 2.937ZM7.3 16.513s-1.8-3.625-2.9-3.2c-1.1.425.425 2.1.425 2.1s-2.088.275-1.963 1.512c.125 1.238 4.438-.412 4.438-.412ZM11.662 22.575S8.35 19.663 7.5 20.425c-.85.763 2.062 2.075 2.062 2.075s-3.1 1.475-2.062 2.2c1.25.888 4.162-2.125 4.162-2.125ZM18.588 27.375s-4.638-2.638-5.363-1.588c-.725 1.05 2.763 1.825 2.763 1.825s-2.825 1.938-1.513 2.638c1.313.7 4.113-2.875 4.113-2.875ZM25.85 20s3.75-2.5 2.287-3.512c-1.112-.763-2.5 1.087-2.5 1.087s-.812-2.1-1.712-1.4c-.9.7 1.925 3.825 1.925 3.825ZM23.963 30.175s-.438 2.85-1.25 3.15c-.813.3-.213-2.075-.213-2.075s-2.025.925-1.925 0c.1-.925 3.388-1.075 3.388-1.075Z",
    fill: "#F7D47D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M33.287 26.95a4.887 4.887 0 0 0 .125-3.35 6.362 6.362 0 0 0-1.887-3.05c-1.063 4.537 1.762 6.4 1.762 6.4ZM32.75 29.15c-.622.804-1.36 1.511-2.188 2.1-.874.555-1.826.976-2.825 1.25a6.713 6.713 0 0 1 2.113-2.137 11.588 11.588 0 0 1 2.9-1.213Z",
    fill: "#DCB3B4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  })));
};

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
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./extra */ "./pages/extra.jsx");
/* harmony import */ var _stories__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stories */ "./pages/stories.jsx");
/* harmony import */ var _pictureGrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pictureGrid */ "./pages/pictureGrid.jsx");
/* harmony import */ var _collect_guest_attendance__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./collect-guest-attendance */ "./pages/collect-guest-attendance.jsx");
var _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }














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
  const coupleName = coupleNameFormat === 'GROOM_FIRST' ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, groomName, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "&"), " ", brideName) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, brideName, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "&"), " ", groomName);

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
    icon: __jsx(_extra__WEBPACK_IMPORTED_MODULE_11__["EventDateIcon"], {
      __self: undefined,
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
    icon: __jsx(_extra__WEBPACK_IMPORTED_MODULE_11__["EventDateIcon"], {
      __self: undefined,
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
      lineNumber: 136,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1703421768",
    __self: undefined
  }, "a.react-add-to-calendar__button span{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxhZGV3YWxlLXdlZGRpbmctaW52aXRlXFxwYWdlc1xcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlJUyxBQUc0QixlQUNXLDREQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcYWRld2FsZS13ZWRkaW5nLWludml0ZVxccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IHsgRXZlbnREYXRlSWNvbiwgSGVhZGVyTG9nbywgTG92ZVRpdGxlSWNvbiB9IGZyb20gJy4vZXh0cmEnO1xuaW1wb3J0IFN0b3JpZXMgZnJvbSAnLi9zdG9yaWVzJztcbmltcG9ydCBQaWN0dXJlc0dyaWQgZnJvbSAnLi9waWN0dXJlR3JpZCc7XG5pbXBvcnQgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSBmcm9tICcuL2NvbGxlY3QtZ3Vlc3QtYXR0ZW5kYW5jZSc7XG5cbmNvbnN0IHRyYW5zbGF0ZUNvbmZpZyA9IChhcHBDb25maWcsIGxvY2FsZSkgPT4ge1xuICBpZiAoIWxvY2FsZSB8fCBsb2NhbGUgPT09IGRlZmF1bHRMb2NhbGUpIHtcbiAgICByZXR1cm4gYXBwQ29uZmlnO1xuICB9XG4gIC8vIFJlcGxhY2UgY29uZmlnIHdpdGggbGFuZ1xuICBjb25zdCBjb25maWdMYW5nID0gYXBwQ29uZmlnLmxhbmdbbG9jYWxlXTtcbiAgaWYgKGNvbmZpZ0xhbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBsb2NhbGU6ICcsIGxvY2FsZSk7XG4gIH1cbiAgcmV0dXJuIHsgLi4uYXBwQ29uZmlnLCAuLi5jb25maWdMYW5nIH07XG59O1xuXG5jb25zdCBTaG93SW52aXRlID0gKHsgY3VycmVudFVybCwgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCwgZ3Vlc3QgfSkgPT4ge1xuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb24oZ3Vlc3QubG9jYWxlKTtcblxuICAvLyBJbml0aWF0ZSBjb25maWcgdmFyaWFibGVzXG4gIGNvbnN0IHtcbiAgICBsb2dvLFxuICAgIG9nVGFncyxcbiAgICBjb3VwbGVJbmZvLFxuICAgIHZlbnVlLFxuICAgIHdlZGRpbmdEYXksXG4gICAgd2VkZGluZ0RhdGUsXG4gICAgd2VkZGluZ1RpbWUsXG4gICAgY2FsZW5kYXJJbmZvLFxuICB9ID0gdHJhbnNsYXRlQ29uZmlnKGFwcENvbmZpZywgZ3Vlc3QubG9jYWxlKTtcbiAgY29uc3QgeyBicmlkZU5hbWUsIGdyb29tTmFtZSwgaGFzaHRhZywgY291cGxlTmFtZUZvcm1hdCB9ID0gY291cGxlSW5mbztcblxuICBjb25zdCBjb3VwbGVOYW1lU3RyID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnXG4gICAgICA/IGAke2dyb29tTmFtZX0gJiAke2JyaWRlTmFtZX1gXG4gICAgICA6IGAke2JyaWRlTmFtZX0gJiAke2dyb29tTmFtZX1gO1xuICBjb25zdCBjb3VwbGVOYW1lID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnID8gKFxuICAgICAgPD5cbiAgICAgICAge2dyb29tTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHticmlkZU5hbWV9XG4gICAgICA8Lz5cbiAgICApIDogKFxuICAgICAgPD5cbiAgICAgICAge2JyaWRlTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHtncm9vbU5hbWV9XG4gICAgICA8Lz5cbiAgICApO1xuXG4gIC8vIFZlbnVlIGluZm9cbiAgY29uc3QgdmVudWVCcmllZiA9IGAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9LCAke3ZlbnVlLmNvdW50cnl9YDtcbiAgY29uc3Qgd2VkZGluZ0RhdGVCcmllZiA9IGAke3dlZGRpbmdEYXl9LCAke3dlZGRpbmdEYXRlfWA7XG5cbiAgLy8gRXZlbnQgaW5mb1xuICBjb25zdCBldmVudFRpdGxlID0gYCR7Y291cGxlTmFtZVN0cn0ncyBXZWRkaW5nYDtcbiAgbGV0IGV2ZW50RGVzY3JpcHRpb24gPSBgJHt3ZWRkaW5nRGF0ZUJyaWVmfSBhdCAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9YDtcbiAgaWYgKGd1ZXN0Lm5hbWUpIHtcbiAgICBldmVudERlc2NyaXB0aW9uID0gYERlYXIgJHtndWVzdC5uYW1lfSwgeW91IGFyZSBjb3JkaWFsbHkgaW52aXRlZCB0byBvdXIgd2VkZGluZyBvbiAke3dlZGRpbmdEYXRlfSBhdCAke3ZlbnVlLm5hbWV9LiBMb29raW5nIGZvcndhcmQgdG8gc2VlaW5nIHlvdSFgO1xuICB9XG5cbiAgLy8gQ2FsZW5kYXIgcGF5bG9hZFxuICBjb25zdCBjYWxlbmRhckV2ZW50ID0ge1xuICAgIHRpdGxlOiBldmVudFRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBldmVudERlc2NyaXB0aW9uLFxuICAgIGxvY2F0aW9uOiBgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWAsXG4gICAgc3RhcnRUaW1lOiBjYWxlbmRhckluZm8udGltZVN0YXJ0SVNPLFxuICAgIGVuZFRpbWU6IGNhbGVuZGFySW5mby50aW1lRW5kSVNPLFxuICB9O1xuXG4gIGNvbnN0IGV2ZW50U2NoZWR1bGUgPSBbXG4gICAge1xuICAgICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgICBldmVudDogJ0NodXJjaCcsXG4gICAgICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAgIHRpbWU6ICcxMnBtJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgICAgZXZlbnQ6ICdSZWNlcHRpb24nLFxuICAgICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgICB0aW1lOiAnMnBtJyxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgIC8vICAgZXZlbnQ6ICdFbmdhZ2VtZW50JyxcbiAgICAvLyAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgIC8vICAgdGltZTogJzJwbScsXG4gICAgLy8gfSxcbiAgXTtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dNb2RhbCh0cnVlKTtcbiAgICB9LCAxMDAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudFJlZi5jdXJyZW50O1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICBpZiAoZWxlbWVudFBvc2l0aW9uIDwgd2luZG93SGVpZ2h0ICogMC45KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC1lbGVtZW50Jyk7IC8vIEFkZCB0aGUgQ1NTIGNsYXNzIHdoZW4gdGhlIGVsZW1lbnQgaXMgNzUlIHZpc2libGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkLWVsZW1lbnQnKTsgLy8gUmVtb3ZlIHRoZSBDU1MgY2xhc3MgaWYgbm90IHZpc2libGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIFJ1biB0aGlzIGVmZmVjdCBvbmx5IG9uY2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBhLnJlYWN0LWFkZC10by1jYWxlbmRhcl9fYnV0dG9uIHNwYW4ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkXG4gICAgICAgIHsuLi5vZ1RhZ3N9XG4gICAgICAgIHRpdGxlPXtldmVudFRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZXZlbnREZXNjcmlwdGlvbn1cbiAgICAgICAgZ3Vlc3ROYW1lPXtndWVzdC5uYW1lfVxuICAgICAgICB1cmw9e2N1cnJlbnRVcmx9XG4gICAgICAgIGRhdGU9e3dlZGRpbmdEYXRlQnJpZWZ9XG4gICAgICAgIG1vZGlmaWVkVGltZT17Z3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdH1cbiAgICAgICAgdmVudWU9e3ZlbnVlQnJpZWZ9XG4gICAgICAgIGxvZ289e3Jlc29sdmVQYXRoKG9nVGFncy5sb2dvKX1cbiAgICAgICAgYXV0aG9yPXtyZXNvbHZlUGF0aCgnLycpfVxuICAgICAgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naGVhZGVyX2FyZWEnPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgPEhlYWRlckxvZ28gLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlYWRlci1sb2dvLXRleHQnPlRoZSBBa2lubGFndW4ncyBQYXJ0eTwvc3Bhbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgaWQ9J2hvbWUnIGNsYXNzTmFtZT0naGVhZGVyX3NsaWRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLWxpc3QgZHJhZ2dhYmxlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay10cmFjaycgc3R5bGU9e3sgb3BhY2l0eTogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnX2NvdmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy0xMCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfY29udGVudCB0ZXh0LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogNjAsIG1hcmdpbjogMjUsIG1hcmdpblRvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9zdWJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC4ycydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnc2l0ZUludHJvJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjdzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291cGxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc2h0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLm5hbWV9LCB7dmVudWUuY2l0eX0sIHt2ZW51ZS5jb3VudHJ5fS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGlkPSdjb21pbmdfc29vbicgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9hcmVhIHB0LTIwIHBiLTcwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX3NoYXBlXzEnIHN0eWxlPXt7IHpJbmRleDogMSB9fT5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMS5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTQnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHB0LTUwIHdvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuMnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dCgnZXZlbnREYXRlJyl9OjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3dlZGRpbmdEYXRlQnJpZWZ9PC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QWRkVG9DYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICBldmVudD17Y2FsZW5kYXJFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9e3QoJ2J0bkFkZFRvTXlDYWxlbmRhcicpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy9zZWN0aW9uX3NoYXBlLnBuZycgYWx0PSdTaGFwZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9jb3VudCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC0yMCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNjAsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZV9jb3VudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMzAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvdW50X2NvbnRlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxLCBwYWRkaW5nVG9wOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmVudWUubWFwVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy9iZXZlbnQucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2JldmVudCBjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc3NXZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUuYWRkcmVzc0xpbmUxfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8yJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMi5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiByZWY9e2VsZW1lbnRSZWZ9IGlkPSdjb250YWN0JyBjbGFzc05hbWU9J2NvbnRhY3RfYXJlYSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY29udGFjdF93cmFwcGVyIHdvdyBmYWRlSW5VcEJpZydcbiAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjRzJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJblVwJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1ldmVudExpbmV1cCc+XG4gICAgICAgICAgICAgIHtldmVudFNjaGVkdWxlLm1hcCgoZXYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0aW1lLCBkYXRlLCBldmVudCwgaWNvbiB9ID0gZXY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudExpbmV1cCcga2V5PXtldmVudH0+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtldmVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3RpbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogZm9ybSAqL31cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy05Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSB0ZXh0LWNlbnRlciBwYi0zMCc+XG4gICAgICAgICAgICAgICAgICB7Z3Vlc3QubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dCgnaW52aXRhdGlvbkdyZWV0aW5nJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjVyZW0nIH19PntndWVzdC5uYW1lfSw8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgY2xhc3NOYW1lPSdsb3ZlLXRpdGxlLWNvbnRhaW5lciBmYWRlSW5VcEJpZyBmYWRlSW4nXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPGRpdiByZWY9e2VsZW1lbnRSZWZ9PlxuICAgICAgICAgIDxMb3ZlVGl0bGVJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudFJlZn0gY2xhc3NOYW1lPSdsb3ZlLXRpdGxlJz5cbiAgICAgICAgICBNeSBoZWFydCBpcyB5b3VyIHRvIGhvbGQgYW5kIGNoZXJpc2ggZm9yIHRoZSByZXN0IG9mIG91ciBkYXlzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxhcnRpY2xlXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J3N0b3JpZXMtY29udGFpbmVyIGZhZGVJblVwQmlnJ1xuICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICA+XG4gICAgICAgIDxTdG9yaWVzIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZC1jb250YWluZXInPlxuICAgICAgICA8UGljdHVyZXNHcmlkIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgJz5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDVcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6ICcjRDNEM0QzJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgI0RXZWRkaW5nXG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaG93SW52aXRlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcbiAgY29uc3QgbG9jYWxlUGFyYW1zID0gY3R4LnF1ZXJ5LmxhbmcgfHwgZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgZW1wdHlHdWVzdFBhcmFtcyA9IHtcbiAgICBndWVzdDoge1xuICAgICAgZ3Vlc3RJZDogJycsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGdyZWV0aW5nOiAnJyxcbiAgICAgIGxvY2FsZTogbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgY3VycmVudFVybCA9IHJlc29sdmVQYXRoKGN0eC5yZXEudXJsKTtcbiAgY29uc3QgZ3Vlc3RJZCA9IGN0eC5xdWVyeS51O1xuICBpZiAoIWd1ZXN0SWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGd1ZXN0RGF0YSA9IGd1ZXN0TGlzdC5kYXRhO1xuICBjb25zdCBndWVzdExpc3RMYXN0VXBkYXRlZEF0ID0gZ3Vlc3RMaXN0Lm1ldGEubGFzdFVwZGF0ZWRBdDtcbiAgY29uc3QgeyBuYW1lLCBncmVldGluZywgbG9jYWxlIH0gPVxuICAgIGd1ZXN0RGF0YS5maWx0ZXIoKGd1ZXN0KSA9PiBndWVzdC5ndWVzdElkID09PSBndWVzdElkKVswXSB8fCB7fTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVcmwsXG4gICAgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCxcbiAgICBndWVzdDoge1xuICAgICAgbmFtZSxcbiAgICAgIGdyZWV0aW5nLFxuICAgICAgZ3Vlc3RJZCxcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0ludml0ZTtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\USER\\\\Documents\\\\adewale-wedding-invite\\\\pages\\\\index.jsx */"), __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, ogTags, {
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
      lineNumber: 145,
      columnNumber: 7
    }
  })), __jsx("section", {
    className: "jsx-1703421768" + " " + 'header_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: "jsx-1703421768" + " " + 'header-container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, __jsx(_extra__WEBPACK_IMPORTED_MODULE_11__["HeaderLogo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "jsx-1703421768" + " " + 'header-logo-text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, "The Akinlagun's Party")), __jsx("div", {
    id: "home",
    className: "jsx-1703421768" + " " + 'header_slider',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'slick-list draggable',
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'bg_cover d-flex align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-10',
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 25
    }
  }, venue.name, ", ", venue.city, ", ", venue.country, ".")))))))))), __jsx("section", {
    id: "coming_soon",
    className: "jsx-1703421768" + " " + 'coming_soon_area pt-20 pb-70',
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-4',
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, t('eventDate'), ":"), __jsx("p", {
    className: "jsx-1703421768",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }, __jsx(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    event: calendarEvent,
    buttonLabel: t('btnAddToMyCalendar'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 19
    }
  })), __jsx("img", {
    src: "assets/images/section_shape.png",
    alt: "Shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-8',
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_count d-flex justify-content-end pt-20',
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: venue.mapUrl,
    className: "jsx-1703421768",
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 23
    }
  }, venue.addressLine1)))))))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_shape_2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-2.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 11
    }
  }))), __jsx("section", {
    ref: elementRef,
    id: "contact",
    className: "jsx-1703421768" + " " + 'contact_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container-eventLineup',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
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
      __self: undefined,
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
      __self: undefined,
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 21
      }
    }, time));
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-9',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'section_title text-center pb-30',
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: elementRef,
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 9
    }
  }, __jsx(_extra__WEBPACK_IMPORTED_MODULE_11__["LoveTitleIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 11
    }
  })), __jsx("div", {
    ref: elementRef,
    className: "jsx-1703421768" + " " + 'love-title',
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 7
    }
  }, __jsx(_stories__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 9
    }
  })), __jsx("article", {
    className: "jsx-1703421768" + " " + 'picture-grid-container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 7
    }
  }, __jsx(_pictureGrid__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 9
    }
  })), __jsx("footer", {
    id: "footer",
    className: "jsx-1703421768" + " " + 'footer_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_shape_1',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_widget pt-50 pb-10 text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_logo',
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_title ',
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 9
    }
  }, "#DWedding")), __jsx(_collect_guest_attendance__WEBPACK_IMPORTED_MODULE_14__["default"], {
    showModal: showModal,
    setShowModal: setShowModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
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
  const pictures = ['/assets/images/pic (1).jpg', '/assets/images/pic (2).jpg', '/assets/images/pic (3).jpg', '/assets/images/pic (4).jpg', '/assets/images/pic (5).jpg', '/assets/images/pic (6).jpg', '/assets/images/pic (7).jpg', '/assets/images/pic (8).jpg', '/assets/images/pic (9).jpg', '/assets/images/pic (10).jpg', '/assets/images/pic (11).jpg', '/assets/images/pic (12).jpg', '/assets/images/pic (13).jpg'];
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const loadImages = async () => {
      for (const picture of pictures) {
        const img = new Image();
        img.onload = () => {
          setLoadedImagesCount(prevCount => prevCount + 1);
        };
        /* eslint-disable */
        console.log(...oo_oo(`1498417794_0`, img, 'imagee'));
        img.src = picture;
        await new Promise(resolve => img.onload = resolve);
      }

      // setImageLoaded(true);
    };

    loadImages();
    if (loadedImagesCount === pictures.length) {
      setImageLoaded(true);
    }
  }, [pictures, loadedImagesCount]);
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
  }, __jsx("div", {
    style: {
      display: imageLoaded ? 'none' : 'inline'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx(react_blurhash__WEBPACK_IMPORTED_MODULE_2__["Blurhash"], {
    hash: "LkOyeVE0R*WC?wWAjZofM{s:RjoM",
    className: "grid-img",
    width: '100%',
    height: '300px',
    resolutionX: 32,
    resolutionY: 32,
    punch: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      display: !imageLoaded ? 'none' : 'inline'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__["LazyLoadImage"], {
    src: picture,
    className: "grid-img",
    effect: "blur",
    width: '100%',
    alt: `Picture ${index + 1}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  })))))), selectedPicture && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "modal fade",
    id: "myModal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-dialog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "modal-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
      columnNumber: 19
    }
  })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (PicturesGrid);
/* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x391d(){var _0x2d8a98=['message','test','autoExpandPreviousObjects','6hoBHJx','function','_allowedToSend','15ZmLVLl','_isUndefined','','env','elapsed','POSITIVE_INFINITY','1.0.0','date','_console_ninja','_attemptToReconnectShortly','nodeModules','_addProperty','_blacklistedProperty','console','isArray','array','1312766fFLLAD','root_exp','call','root_exp_id','count','String','warn','','allStrLength','20AuMXwX','name','level','_addObjectProperty','_treeNodePropertiesAfterFullValue','19784RZWKGd','stackTraceLimit','[object\\x20Set]','Map','3915zDcWzX','hits','disabledTrace','location','substr','unknown','[object\\x20Array]','_isPrimitiveType','method','_setNodePermissions','_inNextEdge','unshift','stringify','_connectAttemptCount','_addFunctionsNode','versions','_reconnectTimeout','_dateToString','remix','1232297smIwMm','hostname','disabledLog','perf_hooks','capped','[object\\x20Date]','14253hDpInm','then','depth','hasOwnProperty','noFunctions','_getOwnPropertyNames','NEXT_RUNTIME','_p_','match','replace','getWebSocketClass','join','edge','push','number','_type','_allowedToConnectOnSend','process','error','_p_length','dockerizedApp','string','split','_setNodeId','expressionsToEvaluate','_treeNodePropertiesBeforeFullValue','[object\\x20BigInt]','timeEnd','_isMap','reduceLimits','_maxConnectAttemptCount','funcName','catch','_hasSymbolPropertyOnItsPath','now','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','432MhHNFO','_connected','toString','_getOwnPropertySymbols','data','hrtime','enumerable','astro','isExpressionToEvaluate','_inBrowser','totalStrLength','trace','NEGATIVE_INFINITY','getOwnPropertyNames','null','nuxt','_hasMapOnItsPath','\\x20server','port','length','_WebSocketClass','parent','negativeZero','elements','_isPrimitiveWrapperType','_setNodeExpressionPath','global','cappedElements','autoExpandMaxDepth','HTMLAllCollection','Symbol','path','boolean','Set','timeStamp','getOwnPropertyDescriptor','_p_name','_Symbol','_keyStrRegExp','_disposeWebsocket','getter','_webSocketErrorDocsLink','autoExpandPropertyCount','symbol','_objectToString','_sortProps','rootExpression','webpack','sort','Number',':logPointId:','8376360nTFfCo','value','prototype','_property','autoExpand','object','_isSet','strLength','_socket','coverage','_setNodeQueryPath','ws://','_hasSetOnItsPath','bigint','_consoleNinjaAllowedToStart','resolveGetters','getOwnPropertySymbols','toLowerCase','unref','type','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_sendErrorMessage','53886RBBEfW','_setNodeExpandableState','_propertyName','close','undefined','positiveInfinity','nan','_addLoadNode','Boolean','props','next.js','onopen','log','_connectToHostNow','reload','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','time','get','constructor','_setNodeLabel','index','[object\\x20Map]',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Damilare\",\"169.254.80.80\",\"172.31.112.1\"],'onmessage','forEach','node','getPrototypeOf','Buffer','4431040CQHEso','\\x20browser','_regExpToString','includes','_processTreeNodeResult','default','serialize','60992','__es'+'Module','performance','bind','readyState','_connecting','_numberRegExp','_console_ninja_session','_isArray','onerror','host','_HTMLAllCollection','_ws','1698349703936','send','concat','gateway.docker.internal','current','onclose','_additionalMetadata','127.0.0.1','autoExpandLimit','Error','_capIfString','sortProps','_undefined'];_0x391d=function(){return _0x2d8a98;};return _0x391d();}var _0x30d46c=_0x394b;function _0x394b(_0x122f32,_0x569f28){var _0x391df3=_0x391d();return _0x394b=function(_0x394b35,_0x2fbe16){_0x394b35=_0x394b35-0xcc;var _0x111890=_0x391df3[_0x394b35];return _0x111890;},_0x394b(_0x122f32,_0x569f28);}(function(_0x1d3e53,_0x1f24e5){var _0x430c6c=_0x394b,_0x4595ec=_0x1d3e53();while(!![]){try{var _0x5506bf=parseInt(_0x430c6c(0xec))/0x1*(-parseInt(_0x430c6c(0x194))/0x2)+-parseInt(_0x430c6c(0x127))/0x3*(parseInt(_0x430c6c(0x105))/0x4)+-parseInt(_0x430c6c(0x1b0))/0x5+-parseInt(_0x430c6c(0xe9))/0x6*(parseInt(_0x430c6c(0xfc))/0x7)+-parseInt(_0x430c6c(0x10a))/0x8*(parseInt(_0x430c6c(0x10e))/0x9)+-parseInt(_0x430c6c(0x17e))/0xa+-parseInt(_0x430c6c(0x121))/0xb*(-parseInt(_0x430c6c(0x14b))/0xc);if(_0x5506bf===_0x1f24e5)break;else _0x4595ec['push'](_0x4595ec['shift']());}catch(_0x103b4a){_0x4595ec['push'](_0x4595ec['shift']());}}}(_0x391d,0x96dcf));var j=Object['create'],H=Object['defineProperty'],G=Object[_0x30d46c(0x16e)],ee=Object['getOwnPropertyNames'],te=Object[_0x30d46c(0x1ae)],ne=Object['prototype'][_0x30d46c(0x12a)],re=(_0x1d5fc6,_0x74781d,_0x8f03cd,_0x49ff4f)=>{var _0x180dcd=_0x30d46c;if(_0x74781d&&typeof _0x74781d==_0x180dcd(0x183)||typeof _0x74781d==_0x180dcd(0xea)){for(let _0x16cd95 of ee(_0x74781d))!ne['call'](_0x1d5fc6,_0x16cd95)&&_0x16cd95!==_0x8f03cd&&H(_0x1d5fc6,_0x16cd95,{'get':()=>_0x74781d[_0x16cd95],'enumerable':!(_0x49ff4f=G(_0x74781d,_0x16cd95))||_0x49ff4f[_0x180dcd(0x151)]});}return _0x1d5fc6;},x=(_0x568bc8,_0x2de1d4,_0x5b4c4f)=>(_0x5b4c4f=_0x568bc8!=null?j(te(_0x568bc8)):{},re(_0x2de1d4||!_0x568bc8||!_0x568bc8[_0x30d46c(0xcd)]?H(_0x5b4c4f,_0x30d46c(0x1b5),{'value':_0x568bc8,'enumerable':!0x0}):_0x5b4c4f,_0x568bc8)),X=class{constructor(_0x47f38c,_0x5c1b06,_0x3f2856,_0x457d3d,_0x18ff64){var _0x4bb61d=_0x30d46c;this[_0x4bb61d(0x165)]=_0x47f38c,this[_0x4bb61d(0xd6)]=_0x5c1b06,this[_0x4bb61d(0x15d)]=_0x3f2856,this[_0x4bb61d(0xf6)]=_0x457d3d,this['dockerizedApp']=_0x18ff64,this[_0x4bb61d(0xeb)]=!0x0,this[_0x4bb61d(0x137)]=!0x0,this[_0x4bb61d(0x14c)]=!0x1,this[_0x4bb61d(0xd1)]=!0x1,this['_inNextEdge']=_0x47f38c[_0x4bb61d(0x138)]?.[_0x4bb61d(0xef)]?.[_0x4bb61d(0x12d)]==='edge',this[_0x4bb61d(0x154)]=!this[_0x4bb61d(0x165)][_0x4bb61d(0x138)]?.[_0x4bb61d(0x11d)]?.[_0x4bb61d(0x1ad)]&&!this[_0x4bb61d(0x118)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4bb61d(0x145)]=0x14,this[_0x4bb61d(0x174)]='https://tinyurl.com/37x8b79t',this[_0x4bb61d(0x193)]=(this[_0x4bb61d(0x154)]?_0x4bb61d(0x14a):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x4bb61d(0x174)];}async[_0x30d46c(0x131)](){var _0x1e90f1=_0x30d46c;if(this[_0x1e90f1(0x15f)])return this[_0x1e90f1(0x15f)];let _0x4ae77c;if(this[_0x1e90f1(0x154)]||this['_inNextEdge'])_0x4ae77c=this[_0x1e90f1(0x165)]['WebSocket'];else{if(this['global'][_0x1e90f1(0x138)]?.['_WebSocket'])_0x4ae77c=this['global'][_0x1e90f1(0x138)]?.['_WebSocket'];else try{let _0x4ceb95=await import('path');_0x4ae77c=(await import((await import('url'))['pathToFileURL'](_0x4ceb95[_0x1e90f1(0x132)](this[_0x1e90f1(0xf6)],'ws/index.js'))['toString']()))[_0x1e90f1(0x1b5)];}catch{try{_0x4ae77c=require(require(_0x1e90f1(0x16a))[_0x1e90f1(0x132)](this['nodeModules'],'ws'));}catch{throw new Error(_0x1e90f1(0x1a3));}}}return this['_WebSocketClass']=_0x4ae77c,_0x4ae77c;}[_0x30d46c(0x1a1)](){var _0x49089a=_0x30d46c;this[_0x49089a(0xd1)]||this['_connected']||this['_connectAttemptCount']>=this[_0x49089a(0x145)]||(this[_0x49089a(0x137)]=!0x1,this[_0x49089a(0xd1)]=!0x0,this[_0x49089a(0x11b)]++,this[_0x49089a(0xd8)]=new Promise((_0x34eafc,_0x144324)=>{var _0x874fa4=_0x49089a;this[_0x874fa4(0x131)]()[_0x874fa4(0x128)](_0x4baf58=>{var _0x41ddac=_0x874fa4;let _0x25743b=new _0x4baf58(_0x41ddac(0x189)+(!this['_inBrowser']&&this[_0x41ddac(0x13b)]?_0x41ddac(0xdc):this[_0x41ddac(0xd6)])+':'+this[_0x41ddac(0x15d)]);_0x25743b[_0x41ddac(0xd5)]=()=>{var _0x2b4f65=_0x41ddac;this[_0x2b4f65(0xeb)]=!0x1,this[_0x2b4f65(0x172)](_0x25743b),this[_0x2b4f65(0xf5)](),_0x144324(new Error('logger\\x20websocket\\x20error'));},_0x25743b[_0x41ddac(0x19f)]=()=>{var _0x42082a=_0x41ddac;this[_0x42082a(0x154)]||_0x25743b[_0x42082a(0x186)]&&_0x25743b[_0x42082a(0x186)]['unref']&&_0x25743b[_0x42082a(0x186)][_0x42082a(0x190)](),_0x34eafc(_0x25743b);},_0x25743b[_0x41ddac(0xde)]=()=>{var _0x132972=_0x41ddac;this[_0x132972(0x137)]=!0x0,this[_0x132972(0x172)](_0x25743b),this['_attemptToReconnectShortly']();},_0x25743b[_0x41ddac(0x1ab)]=_0x1afd11=>{var _0x18d6b5=_0x41ddac;try{_0x1afd11&&_0x1afd11[_0x18d6b5(0x14f)]&&this[_0x18d6b5(0x154)]&&JSON['parse'](_0x1afd11['data'])[_0x18d6b5(0x116)]===_0x18d6b5(0x1a2)&&this['global'][_0x18d6b5(0x111)][_0x18d6b5(0x1a2)]();}catch{}};})[_0x874fa4(0x128)](_0x1b24d2=>(this[_0x874fa4(0x14c)]=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x874fa4(0xeb)]=!0x0,this[_0x874fa4(0x11b)]=0x0,_0x1b24d2))[_0x874fa4(0x147)](_0x37f5a0=>(this[_0x874fa4(0x14c)]=!0x1,this[_0x874fa4(0xd1)]=!0x1,console[_0x874fa4(0x102)](_0x874fa4(0x192)+this[_0x874fa4(0x174)]),_0x144324(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x37f5a0&&_0x37f5a0[_0x874fa4(0xe6)])))));}));}['_disposeWebsocket'](_0x49a461){var _0x4f8869=_0x30d46c;this[_0x4f8869(0x14c)]=!0x1,this['_connecting']=!0x1;try{_0x49a461[_0x4f8869(0xde)]=null,_0x49a461['onerror']=null,_0x49a461[_0x4f8869(0x19f)]=null;}catch{}try{_0x49a461[_0x4f8869(0xd0)]<0x2&&_0x49a461[_0x4f8869(0x197)]();}catch{}}['_attemptToReconnectShortly'](){var _0x15979b=_0x30d46c;clearTimeout(this['_reconnectTimeout']),!(this[_0x15979b(0x11b)]>=this[_0x15979b(0x145)])&&(this[_0x15979b(0x11e)]=setTimeout(()=>{var _0x557b68=_0x15979b;this['_connected']||this['_connecting']||(this['_connectToHostNow'](),this[_0x557b68(0xd8)]?.[_0x557b68(0x147)](()=>this[_0x557b68(0xf5)]()));},0x1f4),this[_0x15979b(0x11e)][_0x15979b(0x190)]&&this['_reconnectTimeout'][_0x15979b(0x190)]());}async[_0x30d46c(0xda)](_0x39e782){var _0x4860f9=_0x30d46c;try{if(!this['_allowedToSend'])return;this[_0x4860f9(0x137)]&&this[_0x4860f9(0x1a1)](),(await this['_ws'])[_0x4860f9(0xda)](JSON['stringify'](_0x39e782));}catch(_0x1e17e0){console[_0x4860f9(0x102)](this[_0x4860f9(0x193)]+':\\x20'+(_0x1e17e0&&_0x1e17e0[_0x4860f9(0xe6)])),this[_0x4860f9(0xeb)]=!0x1,this[_0x4860f9(0xf5)]();}}};function b(_0x46d0b1,_0x4c18eb,_0x321ff7,_0x676911,_0x4c8299,_0x54255a){var _0x3937e7=_0x30d46c;let _0x50e0f9=_0x321ff7[_0x3937e7(0x13d)](',')['map'](_0x41d87=>{var _0x5179a2=_0x3937e7;try{_0x46d0b1['_console_ninja_session']||((_0x4c8299===_0x5179a2(0x19e)||_0x4c8299===_0x5179a2(0x120)||_0x4c8299===_0x5179a2(0x152))&&(_0x4c8299+=!_0x46d0b1[_0x5179a2(0x138)]?.[_0x5179a2(0x11d)]?.[_0x5179a2(0x1ad)]&&_0x46d0b1[_0x5179a2(0x138)]?.['env']?.[_0x5179a2(0x12d)]!=='edge'?_0x5179a2(0x1b1):_0x5179a2(0x15c)),_0x46d0b1['_console_ninja_session']={'id':+new Date(),'tool':_0x4c8299});let _0x7aabbf=new X(_0x46d0b1,_0x4c18eb,_0x41d87,_0x676911,_0x54255a);return _0x7aabbf['send'][_0x5179a2(0xcf)](_0x7aabbf);}catch(_0x1cb06f){return console[_0x5179a2(0x102)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x1cb06f&&_0x1cb06f['message']),()=>{};}});return _0x277e04=>_0x50e0f9[_0x3937e7(0x1ac)](_0xa42fb=>_0xa42fb(_0x277e04));}function W(_0x1ec5c2){var _0x3f0495=_0x30d46c;let _0x11427f=function(_0x3d5583,_0xf50a7){return _0xf50a7-_0x3d5583;},_0x25515e;if(_0x1ec5c2[_0x3f0495(0xce)])_0x25515e=function(){var _0x384058=_0x3f0495;return _0x1ec5c2[_0x384058(0xce)]['now']();};else{if(_0x1ec5c2[_0x3f0495(0x138)]&&_0x1ec5c2[_0x3f0495(0x138)][_0x3f0495(0x150)]&&_0x1ec5c2[_0x3f0495(0x138)]?.[_0x3f0495(0xef)]?.[_0x3f0495(0x12d)]!==_0x3f0495(0x133))_0x25515e=function(){var _0x4b9a8c=_0x3f0495;return _0x1ec5c2[_0x4b9a8c(0x138)]['hrtime']();},_0x11427f=function(_0x1340f2,_0x45e900){return 0x3e8*(_0x45e900[0x0]-_0x1340f2[0x0])+(_0x45e900[0x1]-_0x1340f2[0x1])/0xf4240;};else try{let {performance:_0x4a19c8}=require(_0x3f0495(0x124));_0x25515e=function(){var _0x495572=_0x3f0495;return _0x4a19c8[_0x495572(0x149)]();};}catch{_0x25515e=function(){return+new Date();};}}return{'elapsed':_0x11427f,'timeStamp':_0x25515e,'now':()=>Date[_0x3f0495(0x149)]()};}function J(_0x2c99fd,_0x1298f9,_0x7a4450){var _0x2b6560=_0x30d46c;if(_0x2c99fd[_0x2b6560(0x18c)]!==void 0x0)return _0x2c99fd[_0x2b6560(0x18c)];let _0x17de28=_0x2c99fd[_0x2b6560(0x138)]?.['versions']?.[_0x2b6560(0x1ad)]||_0x2c99fd[_0x2b6560(0x138)]?.[_0x2b6560(0xef)]?.[_0x2b6560(0x12d)]==='edge';return _0x17de28&&_0x7a4450===_0x2b6560(0x15a)?_0x2c99fd[_0x2b6560(0x18c)]=!0x1:_0x2c99fd[_0x2b6560(0x18c)]=_0x17de28||!_0x1298f9||_0x2c99fd['location']?.['hostname']&&_0x1298f9[_0x2b6560(0x1b3)](_0x2c99fd[_0x2b6560(0x111)][_0x2b6560(0x122)]),_0x2c99fd[_0x2b6560(0x18c)];}function Y(_0x319751,_0x5d267a,_0x2408ba,_0x563504){var _0x4248d6=_0x30d46c;_0x319751=_0x319751,_0x5d267a=_0x5d267a,_0x2408ba=_0x2408ba,_0x563504=_0x563504;let _0x5c6ba4=W(_0x319751),_0x5dead5=_0x5c6ba4[_0x4248d6(0xf0)],_0x299da3=_0x5c6ba4['timeStamp'];class _0x3187a7{constructor(){var _0x54c54b=_0x4248d6;this[_0x54c54b(0x171)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c54b(0xd2)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c54b(0xe5)]=_0x319751[_0x54c54b(0x198)],this[_0x54c54b(0xd7)]=_0x319751[_0x54c54b(0x168)],this['_getOwnPropertyDescriptor']=Object[_0x54c54b(0x16e)],this[_0x54c54b(0x12c)]=Object[_0x54c54b(0x158)],this[_0x54c54b(0x170)]=_0x319751[_0x54c54b(0x169)],this[_0x54c54b(0x1b2)]=RegExp['prototype'][_0x54c54b(0x14d)],this[_0x54c54b(0x11f)]=Date['prototype'][_0x54c54b(0x14d)];}[_0x4248d6(0x1b6)](_0x43bfc7,_0x25d451,_0x1e71c5,_0x508a0f){var _0x136692=_0x4248d6,_0x22f7b8=this,_0x27a473=_0x1e71c5['autoExpand'];function _0x412bfe(_0x1561f7,_0x2a0987,_0x58f130){var _0x21c91d=_0x394b;_0x2a0987[_0x21c91d(0x191)]=_0x21c91d(0x113),_0x2a0987[_0x21c91d(0x139)]=_0x1561f7[_0x21c91d(0xe6)],_0x1c36b0=_0x58f130['node'][_0x21c91d(0xdd)],_0x58f130[_0x21c91d(0x1ad)][_0x21c91d(0xdd)]=_0x2a0987,_0x22f7b8[_0x21c91d(0x140)](_0x2a0987,_0x58f130);}try{_0x1e71c5[_0x136692(0x107)]++,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)][_0x136692(0x134)](_0x25d451);var _0x315743,_0x541aa8,_0x3cced9,_0x2a34a1,_0x20b4f2=[],_0x4da63b=[],_0x556979,_0x2d2d6d=this[_0x136692(0x136)](_0x25d451),_0xd832c5=_0x2d2d6d==='array',_0x268c40=!0x1,_0x130f3e=_0x2d2d6d===_0x136692(0xea),_0x369b0e=this[_0x136692(0x115)](_0x2d2d6d),_0x498418=this['_isPrimitiveWrapperType'](_0x2d2d6d),_0x340f83=_0x369b0e||_0x498418,_0x2493be={},_0x36f3cc=0x0,_0x3a2fda=!0x1,_0x1c36b0,_0x348bf1=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1e71c5[_0x136692(0x129)]){if(_0xd832c5){if(_0x541aa8=_0x25d451[_0x136692(0x15e)],_0x541aa8>_0x1e71c5[_0x136692(0x162)]){for(_0x3cced9=0x0,_0x2a34a1=_0x1e71c5['elements'],_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));_0x43bfc7[_0x136692(0x166)]=!0x0;}else{for(_0x3cced9=0x0,_0x2a34a1=_0x541aa8,_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));}_0x1e71c5[_0x136692(0x175)]+=_0x4da63b['length'];}if(!(_0x2d2d6d==='null'||_0x2d2d6d===_0x136692(0x198))&&!_0x369b0e&&_0x2d2d6d!==_0x136692(0x101)&&_0x2d2d6d!==_0x136692(0x1af)&&_0x2d2d6d!=='bigint'){var _0x2cc7c3=_0x508a0f[_0x136692(0x19d)]||_0x1e71c5['props'];if(this[_0x136692(0x184)](_0x25d451)?(_0x315743=0x0,_0x25d451[_0x136692(0x1ac)](function(_0x5b5110){var _0x58c3cb=_0x136692;if(_0x36f3cc++,_0x1e71c5[_0x58c3cb(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5[_0x58c3cb(0x153)]&&_0x1e71c5[_0x58c3cb(0x182)]&&_0x1e71c5[_0x58c3cb(0x175)]>_0x1e71c5[_0x58c3cb(0xe1)]){_0x3a2fda=!0x0;return;}_0x4da63b[_0x58c3cb(0x134)](_0x22f7b8[_0x58c3cb(0xf7)](_0x20b4f2,_0x25d451,_0x58c3cb(0x16c),_0x315743++,_0x1e71c5,function(_0xfcb5c5){return function(){return _0xfcb5c5;};}(_0x5b5110)));})):this[_0x136692(0x143)](_0x25d451)&&_0x25d451['forEach'](function(_0x2056f5,_0x313010){var _0x55a7fd=_0x136692;if(_0x36f3cc++,_0x1e71c5['autoExpandPropertyCount']++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5['isExpressionToEvaluate']&&_0x1e71c5['autoExpand']&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x55a7fd(0xe1)]){_0x3a2fda=!0x0;return;}var _0x27b755=_0x313010['toString']();_0x27b755['length']>0x64&&(_0x27b755=_0x27b755['slice'](0x0,0x64)+'...'),_0x4da63b[_0x55a7fd(0x134)](_0x22f7b8[_0x55a7fd(0xf7)](_0x20b4f2,_0x25d451,_0x55a7fd(0x10d),_0x27b755,_0x1e71c5,function(_0x58dde9){return function(){return _0x58dde9;};}(_0x2056f5)));}),!_0x268c40){try{for(_0x556979 in _0x25d451)if(!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}catch{}if(_0x2493be[_0x136692(0x13a)]=!0x0,_0x130f3e&&(_0x2493be[_0x136692(0x16f)]=!0x0),!_0x3a2fda){var _0x379ad8=[][_0x136692(0xdb)](this[_0x136692(0x12c)](_0x25d451))[_0x136692(0xdb)](this[_0x136692(0x14e)](_0x25d451));for(_0x315743=0x0,_0x541aa8=_0x379ad8[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)if(_0x556979=_0x379ad8[_0x315743],!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979[_0x136692(0x14d)]()))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)&&!_0x2493be[_0x136692(0x12e)+_0x556979[_0x136692(0x14d)]()]){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b['push'](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}}}}if(_0x43bfc7[_0x136692(0x191)]=_0x2d2d6d,_0x340f83?(_0x43bfc7['value']=_0x25d451['valueOf'](),this[_0x136692(0xe3)](_0x2d2d6d,_0x43bfc7,_0x1e71c5,_0x508a0f)):_0x2d2d6d===_0x136692(0xf3)?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x11f)][_0x136692(0xfe)](_0x25d451):_0x2d2d6d===_0x136692(0x18b)?_0x43bfc7[_0x136692(0x17f)]=_0x25d451['toString']():_0x2d2d6d==='RegExp'?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x1b2)]['call'](_0x25d451):_0x2d2d6d===_0x136692(0x176)&&this[_0x136692(0x170)]?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x170)][_0x136692(0x180)][_0x136692(0x14d)][_0x136692(0xfe)](_0x25d451):!_0x1e71c5[_0x136692(0x129)]&&!(_0x2d2d6d===_0x136692(0x159)||_0x2d2d6d===_0x136692(0x198))&&(delete _0x43bfc7['value'],_0x43bfc7[_0x136692(0x125)]=!0x0),_0x3a2fda&&(_0x43bfc7['cappedProps']=!0x0),_0x1c36b0=_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)],_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x43bfc7,this[_0x136692(0x140)](_0x43bfc7,_0x1e71c5),_0x4da63b[_0x136692(0x15e)]){for(_0x315743=0x0,_0x541aa8=_0x4da63b[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)_0x4da63b[_0x315743](_0x315743);}_0x20b4f2[_0x136692(0x15e)]&&(_0x43bfc7['props']=_0x20b4f2);}catch(_0xcb2f1f){_0x412bfe(_0xcb2f1f,_0x43bfc7,_0x1e71c5);}return this[_0x136692(0xdf)](_0x25d451,_0x43bfc7),this[_0x136692(0x109)](_0x43bfc7,_0x1e71c5),_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x1c36b0,_0x1e71c5[_0x136692(0x107)]--,_0x1e71c5['autoExpand']=_0x27a473,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)]['pop'](),_0x43bfc7;}[_0x4248d6(0x14e)](_0x36fd65){var _0x3a70b0=_0x4248d6;return Object[_0x3a70b0(0x18e)]?Object['getOwnPropertySymbols'](_0x36fd65):[];}[_0x4248d6(0x184)](_0x2e653d){var _0x3fc9c1=_0x4248d6;return!!(_0x2e653d&&_0x319751['Set']&&this[_0x3fc9c1(0x177)](_0x2e653d)===_0x3fc9c1(0x10c)&&_0x2e653d[_0x3fc9c1(0x1ac)]);}[_0x4248d6(0xf8)](_0x52d6ba,_0x57f26e,_0xff5ab3){var _0xd01f4b=_0x4248d6;return _0xff5ab3[_0xd01f4b(0x12b)]?typeof _0x52d6ba[_0x57f26e]==_0xd01f4b(0xea):!0x1;}[_0x4248d6(0x136)](_0x89a353){var _0x3c333c=_0x4248d6,_0x45a790='';return _0x45a790=typeof _0x89a353,_0x45a790===_0x3c333c(0x183)?this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x114)?_0x45a790=_0x3c333c(0xfb):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x126)?_0x45a790=_0x3c333c(0xf3):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x141)?_0x45a790=_0x3c333c(0x18b):_0x89a353===null?_0x45a790=_0x3c333c(0x159):_0x89a353[_0x3c333c(0x1a6)]&&(_0x45a790=_0x89a353[_0x3c333c(0x1a6)][_0x3c333c(0x106)]||_0x45a790):_0x45a790==='undefined'&&this[_0x3c333c(0xd7)]&&_0x89a353 instanceof this[_0x3c333c(0xd7)]&&(_0x45a790=_0x3c333c(0x168)),_0x45a790;}[_0x4248d6(0x177)](_0xb28b5){var _0x2d6e81=_0x4248d6;return Object[_0x2d6e81(0x180)][_0x2d6e81(0x14d)]['call'](_0xb28b5);}['_isPrimitiveType'](_0x578eee){var _0x153dac=_0x4248d6;return _0x578eee===_0x153dac(0x16b)||_0x578eee===_0x153dac(0x13c)||_0x578eee===_0x153dac(0x135);}[_0x4248d6(0x163)](_0x13250b){var _0x289843=_0x4248d6;return _0x13250b===_0x289843(0x19c)||_0x13250b==='String'||_0x13250b===_0x289843(0x17c);}[_0x4248d6(0xf7)](_0x45b196,_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3){var _0x5b97f2=this;return function(_0x4a4e4b){var _0x21f6c7=_0x394b,_0x104c97=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0xdd)],_0x4c3709=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x1a8)],_0x702bea=_0x413025[_0x21f6c7(0x1ad)]['parent'];_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x104c97,_0x413025['node']['index']=typeof _0x35730f==_0x21f6c7(0x135)?_0x35730f:_0x4a4e4b,_0x45b196[_0x21f6c7(0x134)](_0x5b97f2[_0x21f6c7(0x181)](_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3)),_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x702bea,_0x413025[_0x21f6c7(0x1ad)]['index']=_0x4c3709;};}[_0x4248d6(0x108)](_0x4609e5,_0x15cfe4,_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359){var _0x4cf52b=_0x4248d6,_0x40276a=this;return _0x15cfe4['_p_'+_0x356575[_0x4cf52b(0x14d)]()]=!0x0,function(_0x3325f7){var _0x2b8d06=_0x4cf52b,_0x2eeeea=_0x357193['node'][_0x2b8d06(0xdd)],_0x23c718=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)],_0x14d3c3=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)];_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)]=_0x2eeeea,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x3325f7,_0x4609e5[_0x2b8d06(0x134)](_0x40276a[_0x2b8d06(0x181)](_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359)),_0x357193['node'][_0x2b8d06(0x160)]=_0x14d3c3,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x23c718;};}['_property'](_0x9ab64f,_0x4d90b9,_0x183599,_0xd58b2b,_0x43af40){var _0x14708=_0x4248d6,_0x446500=this;_0x43af40||(_0x43af40=function(_0x4bdfb1,_0x4bdc4d){return _0x4bdfb1[_0x4bdc4d];});var _0x182c0f=_0x183599[_0x14708(0x14d)](),_0x5b3e54=_0xd58b2b[_0x14708(0x13f)]||{},_0x527792=_0xd58b2b['depth'],_0x508312=_0xd58b2b['isExpressionToEvaluate'];try{var _0x521058=this[_0x14708(0x143)](_0x9ab64f),_0x4123ea=_0x182c0f;_0x521058&&_0x4123ea[0x0]==='\\x27'&&(_0x4123ea=_0x4123ea[_0x14708(0x112)](0x1,_0x4123ea['length']-0x2));var _0x26de9a=_0xd58b2b['expressionsToEvaluate']=_0x5b3e54[_0x14708(0x12e)+_0x4123ea];_0x26de9a&&(_0xd58b2b[_0x14708(0x129)]=_0xd58b2b['depth']+0x1),_0xd58b2b['isExpressionToEvaluate']=!!_0x26de9a;var _0x53a6b3=typeof _0x183599==_0x14708(0x176),_0x31790b={'name':_0x53a6b3||_0x521058?_0x182c0f:this[_0x14708(0x196)](_0x182c0f)};if(_0x53a6b3&&(_0x31790b[_0x14708(0x176)]=!0x0),!(_0x4d90b9===_0x14708(0xfb)||_0x4d90b9===_0x14708(0xe2))){var _0x428e2f=this['_getOwnPropertyDescriptor'](_0x9ab64f,_0x183599);if(_0x428e2f&&(_0x428e2f['set']&&(_0x31790b['setter']=!0x0),_0x428e2f[_0x14708(0x1a5)]&&!_0x26de9a&&!_0xd58b2b[_0x14708(0x18d)]))return _0x31790b[_0x14708(0x173)]=!0x0,this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x5786e9;try{_0x5786e9=_0x43af40(_0x9ab64f,_0x183599);}catch(_0x396ba8){return _0x31790b={'name':_0x182c0f,'type':'unknown','error':_0x396ba8[_0x14708(0xe6)]},this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x52ddfc=this['_type'](_0x5786e9),_0x1f051f=this[_0x14708(0x115)](_0x52ddfc);if(_0x31790b['type']=_0x52ddfc,_0x1f051f)this['_processTreeNodeResult'](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x1b14f0=_0x14708;_0x31790b[_0x1b14f0(0x17f)]=_0x5786e9['valueOf'](),!_0x26de9a&&_0x446500[_0x1b14f0(0xe3)](_0x52ddfc,_0x31790b,_0xd58b2b,{});});else{var _0x348206=_0xd58b2b[_0x14708(0x182)]&&_0xd58b2b['level']<_0xd58b2b[_0x14708(0x167)]&&_0xd58b2b[_0x14708(0xe8)]['indexOf'](_0x5786e9)<0x0&&_0x52ddfc!==_0x14708(0xea)&&_0xd58b2b[_0x14708(0x175)]<_0xd58b2b[_0x14708(0xe1)];_0x348206||_0xd58b2b[_0x14708(0x107)]<_0x527792||_0x26de9a?(this[_0x14708(0x1b6)](_0x31790b,_0x5786e9,_0xd58b2b,_0x26de9a||{}),this['_additionalMetadata'](_0x5786e9,_0x31790b)):this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x2385ba=_0x14708;_0x52ddfc===_0x2385ba(0x159)||_0x52ddfc==='undefined'||(delete _0x31790b[_0x2385ba(0x17f)],_0x31790b[_0x2385ba(0x125)]=!0x0);});}return _0x31790b;}finally{_0xd58b2b['expressionsToEvaluate']=_0x5b3e54,_0xd58b2b[_0x14708(0x129)]=_0x527792,_0xd58b2b[_0x14708(0x153)]=_0x508312;}}[_0x4248d6(0xe3)](_0x305781,_0x1212b3,_0x3beb27,_0x522683){var _0x4d2057=_0x4248d6,_0x2b2a31=_0x522683['strLength']||_0x3beb27[_0x4d2057(0x185)];if((_0x305781===_0x4d2057(0x13c)||_0x305781===_0x4d2057(0x101))&&_0x1212b3[_0x4d2057(0x17f)]){let _0x15d632=_0x1212b3['value'][_0x4d2057(0x15e)];_0x3beb27[_0x4d2057(0x104)]+=_0x15d632,_0x3beb27[_0x4d2057(0x104)]>_0x3beb27['totalStrLength']?(_0x1212b3['capped']='',delete _0x1212b3['value']):_0x15d632>_0x2b2a31&&(_0x1212b3[_0x4d2057(0x125)]=_0x1212b3[_0x4d2057(0x17f)][_0x4d2057(0x112)](0x0,_0x2b2a31),delete _0x1212b3['value']);}}['_isMap'](_0x2ac54f){var _0x1921a0=_0x4248d6;return!!(_0x2ac54f&&_0x319751['Map']&&this[_0x1921a0(0x177)](_0x2ac54f)===_0x1921a0(0x1a9)&&_0x2ac54f[_0x1921a0(0x1ac)]);}['_propertyName'](_0x53ffeb){var _0x2f97d5=_0x4248d6;if(_0x53ffeb[_0x2f97d5(0x12f)](/^\\d+$/))return _0x53ffeb;var _0x2b8f72;try{_0x2b8f72=JSON[_0x2f97d5(0x11a)](''+_0x53ffeb);}catch{_0x2b8f72='\\x22'+this[_0x2f97d5(0x177)](_0x53ffeb)+'\\x22';}return _0x2b8f72[_0x2f97d5(0x12f)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2b8f72=_0x2b8f72['substr'](0x1,_0x2b8f72[_0x2f97d5(0x15e)]-0x2):_0x2b8f72=_0x2b8f72[_0x2f97d5(0x130)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x2f97d5(0x130)](/(^\"|\"$)/g,'\\x27'),_0x2b8f72;}[_0x4248d6(0x1b4)](_0x5beb6d,_0x4cc6c2,_0x55db92,_0x5a76f6){var _0x813bc8=_0x4248d6;this[_0x813bc8(0x140)](_0x5beb6d,_0x4cc6c2),_0x5a76f6&&_0x5a76f6(),this[_0x813bc8(0xdf)](_0x55db92,_0x5beb6d),this[_0x813bc8(0x109)](_0x5beb6d,_0x4cc6c2);}['_treeNodePropertiesBeforeFullValue'](_0x3c6961,_0x172ffa){var _0x174417=_0x4248d6;this[_0x174417(0x13e)](_0x3c6961,_0x172ffa),this[_0x174417(0x188)](_0x3c6961,_0x172ffa),this['_setNodeExpressionPath'](_0x3c6961,_0x172ffa),this[_0x174417(0x117)](_0x3c6961,_0x172ffa);}[_0x4248d6(0x13e)](_0x232fb1,_0x1546dc){}[_0x4248d6(0x188)](_0x1b55ca,_0x1dc1b0){}[_0x4248d6(0x1a7)](_0x290ddd,_0x5ea425){}[_0x4248d6(0xed)](_0x3c1026){return _0x3c1026===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x5816de,_0x51ad0f){var _0x4e3207=_0x4248d6;this[_0x4e3207(0x1a7)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x195)](_0x5816de),_0x51ad0f[_0x4e3207(0xe4)]&&this['_sortProps'](_0x5816de),this[_0x4e3207(0x11c)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x19b)](_0x5816de,_0x51ad0f),this['_cleanNode'](_0x5816de);}[_0x4248d6(0xdf)](_0x3cc52c,_0x4d38a7){var _0x41e4dd=_0x4248d6;let _0x53c9b7;try{_0x319751[_0x41e4dd(0xf9)]&&(_0x53c9b7=_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)],_0x319751[_0x41e4dd(0xf9)]['error']=function(){}),_0x3cc52c&&typeof _0x3cc52c[_0x41e4dd(0x15e)]==_0x41e4dd(0x135)&&(_0x4d38a7[_0x41e4dd(0x15e)]=_0x3cc52c[_0x41e4dd(0x15e)]);}catch{}finally{_0x53c9b7&&(_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)]=_0x53c9b7);}if(_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x135)||_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x17c)){if(isNaN(_0x4d38a7['value']))_0x4d38a7[_0x41e4dd(0x19a)]=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];else switch(_0x4d38a7[_0x41e4dd(0x17f)]){case Number[_0x41e4dd(0xf1)]:_0x4d38a7[_0x41e4dd(0x199)]=!0x0,delete _0x4d38a7['value'];break;case Number['NEGATIVE_INFINITY']:_0x4d38a7['negativeInfinity']=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];break;case 0x0:this['_isNegativeZero'](_0x4d38a7[_0x41e4dd(0x17f)])&&(_0x4d38a7[_0x41e4dd(0x161)]=!0x0);break;}}else _0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0xea)&&typeof _0x3cc52c[_0x41e4dd(0x106)]==_0x41e4dd(0x13c)&&_0x3cc52c[_0x41e4dd(0x106)]&&_0x4d38a7['name']&&_0x3cc52c[_0x41e4dd(0x106)]!==_0x4d38a7['name']&&(_0x4d38a7[_0x41e4dd(0x146)]=_0x3cc52c['name']);}['_isNegativeZero'](_0x545d70){var _0x3f5f78=_0x4248d6;return 0x1/_0x545d70===Number[_0x3f5f78(0x157)];}[_0x4248d6(0x178)](_0x48342d){var _0x1133ce=_0x4248d6;!_0x48342d[_0x1133ce(0x19d)]||!_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x15e)]||_0x48342d['type']===_0x1133ce(0xfb)||_0x48342d[_0x1133ce(0x191)]==='Map'||_0x48342d[_0x1133ce(0x191)]===_0x1133ce(0x16c)||_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x17b)](function(_0x358f74,_0x251519){var _0x197d94=_0x1133ce,_0xba1944=_0x358f74[_0x197d94(0x106)][_0x197d94(0x18f)](),_0x138aff=_0x251519[_0x197d94(0x106)]['toLowerCase']();return _0xba1944<_0x138aff?-0x1:_0xba1944>_0x138aff?0x1:0x0;});}[_0x4248d6(0x11c)](_0x180095,_0x94a7be){var _0xb3b43a=_0x4248d6;if(!(_0x94a7be[_0xb3b43a(0x12b)]||!_0x180095[_0xb3b43a(0x19d)]||!_0x180095[_0xb3b43a(0x19d)]['length'])){for(var _0x46653e=[],_0x80c338=[],_0x142411=0x0,_0x2d6021=_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x15e)];_0x142411<_0x2d6021;_0x142411++){var _0x413289=_0x180095[_0xb3b43a(0x19d)][_0x142411];_0x413289[_0xb3b43a(0x191)]===_0xb3b43a(0xea)?_0x46653e[_0xb3b43a(0x134)](_0x413289):_0x80c338[_0xb3b43a(0x134)](_0x413289);}if(!(!_0x80c338[_0xb3b43a(0x15e)]||_0x46653e['length']<=0x1)){_0x180095[_0xb3b43a(0x19d)]=_0x80c338;var _0x2274df={'functionsNode':!0x0,'props':_0x46653e};this[_0xb3b43a(0x13e)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x1a7)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x195)](_0x2274df),this[_0xb3b43a(0x117)](_0x2274df,_0x94a7be),_0x2274df['id']+='\\x20f',_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x119)](_0x2274df);}}}[_0x4248d6(0x19b)](_0x488e07,_0x30da5f){}[_0x4248d6(0x195)](_0x2fb9ca){}[_0x4248d6(0xd4)](_0x46e88e){var _0x1167c4=_0x4248d6;return Array[_0x1167c4(0xfa)](_0x46e88e)||typeof _0x46e88e=='object'&&this[_0x1167c4(0x177)](_0x46e88e)===_0x1167c4(0x114);}['_setNodePermissions'](_0x3144a8,_0xd8d5c7){}['_cleanNode'](_0x349cb4){var _0x2a5872=_0x4248d6;delete _0x349cb4[_0x2a5872(0x148)],delete _0x349cb4[_0x2a5872(0x18a)],delete _0x349cb4[_0x2a5872(0x15b)];}[_0x4248d6(0x164)](_0x1387b6,_0x59de70){}}let _0x59cd6d=new _0x3187a7(),_0x11e492={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0xb7e3db={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x2e8232(_0xcfd290,_0x3e941f,_0x3283c2,_0x23065e,_0x2a7f01,_0x38778e){var _0x42ca29=_0x4248d6;let _0x401ff6,_0x4885de;try{_0x4885de=_0x299da3(),_0x401ff6=_0x2408ba[_0x3e941f],!_0x401ff6||_0x4885de-_0x401ff6['ts']>0x1f4&&_0x401ff6[_0x42ca29(0x100)]&&_0x401ff6[_0x42ca29(0x1a4)]/_0x401ff6[_0x42ca29(0x100)]<0x64?(_0x2408ba[_0x3e941f]=_0x401ff6={'count':0x0,'time':0x0,'ts':_0x4885de},_0x2408ba[_0x42ca29(0x10f)]={}):_0x4885de-_0x2408ba[_0x42ca29(0x10f)]['ts']>0x32&&_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]&&_0x2408ba[_0x42ca29(0x10f)]['time']/_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]<0x64&&(_0x2408ba[_0x42ca29(0x10f)]={});let _0x3905d7=[],_0x5c3a59=_0x401ff6['reduceLimits']||_0x2408ba[_0x42ca29(0x10f)]['reduceLimits']?_0xb7e3db:_0x11e492,_0x4072d6=_0x9c85d2=>{var _0x5754ea=_0x42ca29;let _0xec7735={};return _0xec7735[_0x5754ea(0x19d)]=_0x9c85d2[_0x5754ea(0x19d)],_0xec7735[_0x5754ea(0x162)]=_0x9c85d2[_0x5754ea(0x162)],_0xec7735[_0x5754ea(0x185)]=_0x9c85d2[_0x5754ea(0x185)],_0xec7735['totalStrLength']=_0x9c85d2[_0x5754ea(0x155)],_0xec7735[_0x5754ea(0xe1)]=_0x9c85d2[_0x5754ea(0xe1)],_0xec7735[_0x5754ea(0x167)]=_0x9c85d2[_0x5754ea(0x167)],_0xec7735[_0x5754ea(0xe4)]=!0x1,_0xec7735[_0x5754ea(0x12b)]=!_0x5d267a,_0xec7735[_0x5754ea(0x129)]=0x1,_0xec7735[_0x5754ea(0x107)]=0x0,_0xec7735['expId']=_0x5754ea(0xff),_0xec7735[_0x5754ea(0x179)]=_0x5754ea(0xfd),_0xec7735[_0x5754ea(0x182)]=!0x0,_0xec7735[_0x5754ea(0xe8)]=[],_0xec7735[_0x5754ea(0x175)]=0x0,_0xec7735[_0x5754ea(0x18d)]=!0x0,_0xec7735[_0x5754ea(0x104)]=0x0,_0xec7735[_0x5754ea(0x1ad)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0xec7735;};for(var _0x4edb78=0x0;_0x4edb78<_0x2a7f01[_0x42ca29(0x15e)];_0x4edb78++)_0x3905d7[_0x42ca29(0x134)](_0x59cd6d['serialize']({'timeNode':_0xcfd290===_0x42ca29(0x1a4)||void 0x0},_0x2a7f01[_0x4edb78],_0x4072d6(_0x5c3a59),{}));if(_0xcfd290==='trace'){let _0x34cb91=Error[_0x42ca29(0x10b)];try{Error[_0x42ca29(0x10b)]=0x1/0x0,_0x3905d7[_0x42ca29(0x134)](_0x59cd6d[_0x42ca29(0x1b6)]({'stackNode':!0x0},new Error()['stack'],_0x4072d6(_0x5c3a59),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x34cb91;}}return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':_0x3905d7,'id':_0x3e941f,'context':_0x38778e}]};}catch(_0x48f0ce){return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':[{'type':_0x42ca29(0x113),'error':_0x48f0ce&&_0x48f0ce['message']}],'id':_0x3e941f,'context':_0x38778e}]};}finally{try{if(_0x401ff6&&_0x4885de){let _0x2ff189=_0x299da3();_0x401ff6['count']++,_0x401ff6[_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x401ff6['ts']=_0x2ff189,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]++,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x2408ba[_0x42ca29(0x10f)]['ts']=_0x2ff189,(_0x401ff6['count']>0x32||_0x401ff6[_0x42ca29(0x1a4)]>0x64)&&(_0x401ff6[_0x42ca29(0x144)]=!0x0),(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]>0x3e8||_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]>0x12c)&&(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x144)]=!0x0);}}catch{}}}return _0x2e8232;}((_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x4e0e77,_0x37052b,_0x203bb4,_0x2f9931,_0x366303)=>{var _0x521a84=_0x30d46c;if(_0x3080e0['_console_ninja'])return _0x3080e0[_0x521a84(0xf4)];if(!J(_0x3080e0,_0x203bb4,_0x4b7e45))return _0x3080e0['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x3080e0[_0x521a84(0xf4)];let _0x3493fc=W(_0x3080e0),_0x4cad30=_0x3493fc[_0x521a84(0xf0)],_0x819273=_0x3493fc[_0x521a84(0x16d)],_0x544cc2=_0x3493fc[_0x521a84(0x149)],_0x3eb3e6={'hits':{},'ts':{}},_0x25ff14=Y(_0x3080e0,_0x2f9931,_0x3eb3e6,_0x4e0e77),_0x192300=_0x25873f=>{_0x3eb3e6['ts'][_0x25873f]=_0x819273();},_0x44f510=(_0x5562fd,_0x2f6706)=>{var _0x2ecd66=_0x521a84;let _0x2cc916=_0x3eb3e6['ts'][_0x2f6706];if(delete _0x3eb3e6['ts'][_0x2f6706],_0x2cc916){let _0x1f5842=_0x4cad30(_0x2cc916,_0x819273());_0x53751c(_0x25ff14(_0x2ecd66(0x1a4),_0x5562fd,_0x544cc2(),_0xf489e2,[_0x1f5842],_0x2f6706));}},_0x18f78b=_0x27e533=>_0x74adcc=>{var _0x53f31a=_0x521a84;try{_0x192300(_0x74adcc),_0x27e533(_0x74adcc);}finally{_0x3080e0[_0x53f31a(0xf9)][_0x53f31a(0x1a4)]=_0x27e533;}},_0x1553d8=_0x4b624b=>_0x5ca441=>{var _0x2ffff7=_0x521a84;try{let [_0x5e2d86,_0x46db52]=_0x5ca441[_0x2ffff7(0x13d)](_0x2ffff7(0x17d));_0x44f510(_0x46db52,_0x5e2d86),_0x4b624b(_0x5e2d86);}finally{_0x3080e0[_0x2ffff7(0xf9)][_0x2ffff7(0x142)]=_0x4b624b;}};_0x3080e0[_0x521a84(0xf4)]={'consoleLog':(_0x18e280,_0x1f4d15)=>{var _0x1b98f5=_0x521a84;_0x3080e0['console'][_0x1b98f5(0x1a0)][_0x1b98f5(0x106)]!==_0x1b98f5(0x123)&&_0x53751c(_0x25ff14(_0x1b98f5(0x1a0),_0x18e280,_0x544cc2(),_0xf489e2,_0x1f4d15));},'consoleTrace':(_0x4c956b,_0xcddb11)=>{var _0x5dd028=_0x521a84;_0x3080e0[_0x5dd028(0xf9)][_0x5dd028(0x1a0)][_0x5dd028(0x106)]!==_0x5dd028(0x110)&&_0x53751c(_0x25ff14(_0x5dd028(0x156),_0x4c956b,_0x544cc2(),_0xf489e2,_0xcddb11));},'consoleTime':()=>{var _0x10a308=_0x521a84;_0x3080e0['console'][_0x10a308(0x1a4)]=_0x18f78b(_0x3080e0['console'][_0x10a308(0x1a4)]);},'consoleTimeEnd':()=>{var _0x44a884=_0x521a84;_0x3080e0[_0x44a884(0xf9)]['timeEnd']=_0x1553d8(_0x3080e0[_0x44a884(0xf9)][_0x44a884(0x142)]);},'autoLog':(_0x479660,_0xd1686c)=>{var _0x40646e=_0x521a84;_0x53751c(_0x25ff14(_0x40646e(0x1a0),_0xd1686c,_0x544cc2(),_0xf489e2,[_0x479660]));},'autoLogMany':(_0x91fed5,_0x40a84f)=>{var _0x7344e1=_0x521a84;_0x53751c(_0x25ff14(_0x7344e1(0x1a0),_0x91fed5,_0x544cc2(),_0xf489e2,_0x40a84f));},'autoTrace':(_0x3546f7,_0x3d8eb5)=>{var _0x25512f=_0x521a84;_0x53751c(_0x25ff14(_0x25512f(0x156),_0x3d8eb5,_0x544cc2(),_0xf489e2,[_0x3546f7]));},'autoTraceMany':(_0x2b722f,_0x2df03b)=>{var _0x20acf1=_0x521a84;_0x53751c(_0x25ff14(_0x20acf1(0x156),_0x2b722f,_0x544cc2(),_0xf489e2,_0x2df03b));},'autoTime':(_0x297194,_0x1a6b68,_0x59d60b)=>{_0x192300(_0x59d60b);},'autoTimeEnd':(_0x4b1174,_0x19e4f9,_0x3e9773)=>{_0x44f510(_0x19e4f9,_0x3e9773);},'coverage':_0x169035=>{var _0x94fdd=_0x521a84;_0x53751c({'method':_0x94fdd(0x187),'version':_0x4e0e77,'args':[{'id':_0x169035}]});}};let _0x53751c=b(_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x366303),_0xf489e2=_0x3080e0[_0x521a84(0xd3)];return _0x3080e0[_0x521a84(0xf4)];})(globalThis,_0x30d46c(0xe0),_0x30d46c(0xcc),\"c:\\\\Users\\\\USER\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.240\\\\node_modules\",_0x30d46c(0x17a),_0x30d46c(0xf2),_0x30d46c(0xd9),_0x30d46c(0x1aa),_0x30d46c(0x103),_0x30d46c(0xee));");
  } catch (e) {}
}
;
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
;
function oo_tr(i, ...v) {
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

const Bride = () => {
  return __jsx("div", {
    className: "bride-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "stories-img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("img", {
    style: {
      objectFit: 'cover',
      width: '100rem',
      height: '25rem'
    },
    src: "/assets/images/background.jpg",
    alt: "bride stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "groom-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Bride"), __jsx("article", {
    className: "groom-paragraph",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Out of the blues I saw a request, I checked it and it was this beautiful lady. I accepted it immediately and started checking her TL. On the 4th of April 2016, I sent her a DM and we started talking. We became really really close. Later in November I asked her to be my girlfriend and here we are today\uD83E\uDD70 getting married.")));
};
const Groom = () => {
  return __jsx("div", {
    className: "bride-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "stories-img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("img", {
    style: {
      objectFit: 'cover',
      width: '100rem',
      height: '25rem'
    },
    src: "/assets/images/background.jpg",
    alt: "bride stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "groom-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Groom"), __jsx("article", {
    className: "groom-paragraph",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Out of the blues I saw a request, I checked it and it was this beautiful lady. I accepted it immediately and started checking her TL. On the 4th of April 2016, I sent her a DM and we started talking. We became really really close. Later in November I asked her to be my girlfriend and here we are today\uD83E\uDD70 getting married.")));
};
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
    }
    //   autoplay
    //   modules={[Autoplay, Pagination, Navigation]}
    ,
    onSwiper: swiper => /* eslint-disable */console.log(...oo_oo(`2676057175_0`, swiper)),
    onSlideChange: () => /* eslint-disable */console.log(...oo_oo(`2676057175_1`, 'slide change')),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__["SwiperSlide"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(Bride, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), ' '), __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__["SwiperSlide"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(Groom, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), ' '));
};
/* harmony default export */ __webpack_exports__["default"] = (Stories);
/* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x391d(){var _0x2d8a98=['message','test','autoExpandPreviousObjects','6hoBHJx','function','_allowedToSend','15ZmLVLl','_isUndefined','','env','elapsed','POSITIVE_INFINITY','1.0.0','date','_console_ninja','_attemptToReconnectShortly','nodeModules','_addProperty','_blacklistedProperty','console','isArray','array','1312766fFLLAD','root_exp','call','root_exp_id','count','String','warn','','allStrLength','20AuMXwX','name','level','_addObjectProperty','_treeNodePropertiesAfterFullValue','19784RZWKGd','stackTraceLimit','[object\\x20Set]','Map','3915zDcWzX','hits','disabledTrace','location','substr','unknown','[object\\x20Array]','_isPrimitiveType','method','_setNodePermissions','_inNextEdge','unshift','stringify','_connectAttemptCount','_addFunctionsNode','versions','_reconnectTimeout','_dateToString','remix','1232297smIwMm','hostname','disabledLog','perf_hooks','capped','[object\\x20Date]','14253hDpInm','then','depth','hasOwnProperty','noFunctions','_getOwnPropertyNames','NEXT_RUNTIME','_p_','match','replace','getWebSocketClass','join','edge','push','number','_type','_allowedToConnectOnSend','process','error','_p_length','dockerizedApp','string','split','_setNodeId','expressionsToEvaluate','_treeNodePropertiesBeforeFullValue','[object\\x20BigInt]','timeEnd','_isMap','reduceLimits','_maxConnectAttemptCount','funcName','catch','_hasSymbolPropertyOnItsPath','now','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','432MhHNFO','_connected','toString','_getOwnPropertySymbols','data','hrtime','enumerable','astro','isExpressionToEvaluate','_inBrowser','totalStrLength','trace','NEGATIVE_INFINITY','getOwnPropertyNames','null','nuxt','_hasMapOnItsPath','\\x20server','port','length','_WebSocketClass','parent','negativeZero','elements','_isPrimitiveWrapperType','_setNodeExpressionPath','global','cappedElements','autoExpandMaxDepth','HTMLAllCollection','Symbol','path','boolean','Set','timeStamp','getOwnPropertyDescriptor','_p_name','_Symbol','_keyStrRegExp','_disposeWebsocket','getter','_webSocketErrorDocsLink','autoExpandPropertyCount','symbol','_objectToString','_sortProps','rootExpression','webpack','sort','Number',':logPointId:','8376360nTFfCo','value','prototype','_property','autoExpand','object','_isSet','strLength','_socket','coverage','_setNodeQueryPath','ws://','_hasSetOnItsPath','bigint','_consoleNinjaAllowedToStart','resolveGetters','getOwnPropertySymbols','toLowerCase','unref','type','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_sendErrorMessage','53886RBBEfW','_setNodeExpandableState','_propertyName','close','undefined','positiveInfinity','nan','_addLoadNode','Boolean','props','next.js','onopen','log','_connectToHostNow','reload','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','time','get','constructor','_setNodeLabel','index','[object\\x20Map]',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Damilare\",\"169.254.80.80\",\"172.31.112.1\"],'onmessage','forEach','node','getPrototypeOf','Buffer','4431040CQHEso','\\x20browser','_regExpToString','includes','_processTreeNodeResult','default','serialize','60992','__es'+'Module','performance','bind','readyState','_connecting','_numberRegExp','_console_ninja_session','_isArray','onerror','host','_HTMLAllCollection','_ws','1698349703936','send','concat','gateway.docker.internal','current','onclose','_additionalMetadata','127.0.0.1','autoExpandLimit','Error','_capIfString','sortProps','_undefined'];_0x391d=function(){return _0x2d8a98;};return _0x391d();}var _0x30d46c=_0x394b;function _0x394b(_0x122f32,_0x569f28){var _0x391df3=_0x391d();return _0x394b=function(_0x394b35,_0x2fbe16){_0x394b35=_0x394b35-0xcc;var _0x111890=_0x391df3[_0x394b35];return _0x111890;},_0x394b(_0x122f32,_0x569f28);}(function(_0x1d3e53,_0x1f24e5){var _0x430c6c=_0x394b,_0x4595ec=_0x1d3e53();while(!![]){try{var _0x5506bf=parseInt(_0x430c6c(0xec))/0x1*(-parseInt(_0x430c6c(0x194))/0x2)+-parseInt(_0x430c6c(0x127))/0x3*(parseInt(_0x430c6c(0x105))/0x4)+-parseInt(_0x430c6c(0x1b0))/0x5+-parseInt(_0x430c6c(0xe9))/0x6*(parseInt(_0x430c6c(0xfc))/0x7)+-parseInt(_0x430c6c(0x10a))/0x8*(parseInt(_0x430c6c(0x10e))/0x9)+-parseInt(_0x430c6c(0x17e))/0xa+-parseInt(_0x430c6c(0x121))/0xb*(-parseInt(_0x430c6c(0x14b))/0xc);if(_0x5506bf===_0x1f24e5)break;else _0x4595ec['push'](_0x4595ec['shift']());}catch(_0x103b4a){_0x4595ec['push'](_0x4595ec['shift']());}}}(_0x391d,0x96dcf));var j=Object['create'],H=Object['defineProperty'],G=Object[_0x30d46c(0x16e)],ee=Object['getOwnPropertyNames'],te=Object[_0x30d46c(0x1ae)],ne=Object['prototype'][_0x30d46c(0x12a)],re=(_0x1d5fc6,_0x74781d,_0x8f03cd,_0x49ff4f)=>{var _0x180dcd=_0x30d46c;if(_0x74781d&&typeof _0x74781d==_0x180dcd(0x183)||typeof _0x74781d==_0x180dcd(0xea)){for(let _0x16cd95 of ee(_0x74781d))!ne['call'](_0x1d5fc6,_0x16cd95)&&_0x16cd95!==_0x8f03cd&&H(_0x1d5fc6,_0x16cd95,{'get':()=>_0x74781d[_0x16cd95],'enumerable':!(_0x49ff4f=G(_0x74781d,_0x16cd95))||_0x49ff4f[_0x180dcd(0x151)]});}return _0x1d5fc6;},x=(_0x568bc8,_0x2de1d4,_0x5b4c4f)=>(_0x5b4c4f=_0x568bc8!=null?j(te(_0x568bc8)):{},re(_0x2de1d4||!_0x568bc8||!_0x568bc8[_0x30d46c(0xcd)]?H(_0x5b4c4f,_0x30d46c(0x1b5),{'value':_0x568bc8,'enumerable':!0x0}):_0x5b4c4f,_0x568bc8)),X=class{constructor(_0x47f38c,_0x5c1b06,_0x3f2856,_0x457d3d,_0x18ff64){var _0x4bb61d=_0x30d46c;this[_0x4bb61d(0x165)]=_0x47f38c,this[_0x4bb61d(0xd6)]=_0x5c1b06,this[_0x4bb61d(0x15d)]=_0x3f2856,this[_0x4bb61d(0xf6)]=_0x457d3d,this['dockerizedApp']=_0x18ff64,this[_0x4bb61d(0xeb)]=!0x0,this[_0x4bb61d(0x137)]=!0x0,this[_0x4bb61d(0x14c)]=!0x1,this[_0x4bb61d(0xd1)]=!0x1,this['_inNextEdge']=_0x47f38c[_0x4bb61d(0x138)]?.[_0x4bb61d(0xef)]?.[_0x4bb61d(0x12d)]==='edge',this[_0x4bb61d(0x154)]=!this[_0x4bb61d(0x165)][_0x4bb61d(0x138)]?.[_0x4bb61d(0x11d)]?.[_0x4bb61d(0x1ad)]&&!this[_0x4bb61d(0x118)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4bb61d(0x145)]=0x14,this[_0x4bb61d(0x174)]='https://tinyurl.com/37x8b79t',this[_0x4bb61d(0x193)]=(this[_0x4bb61d(0x154)]?_0x4bb61d(0x14a):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x4bb61d(0x174)];}async[_0x30d46c(0x131)](){var _0x1e90f1=_0x30d46c;if(this[_0x1e90f1(0x15f)])return this[_0x1e90f1(0x15f)];let _0x4ae77c;if(this[_0x1e90f1(0x154)]||this['_inNextEdge'])_0x4ae77c=this[_0x1e90f1(0x165)]['WebSocket'];else{if(this['global'][_0x1e90f1(0x138)]?.['_WebSocket'])_0x4ae77c=this['global'][_0x1e90f1(0x138)]?.['_WebSocket'];else try{let _0x4ceb95=await import('path');_0x4ae77c=(await import((await import('url'))['pathToFileURL'](_0x4ceb95[_0x1e90f1(0x132)](this[_0x1e90f1(0xf6)],'ws/index.js'))['toString']()))[_0x1e90f1(0x1b5)];}catch{try{_0x4ae77c=require(require(_0x1e90f1(0x16a))[_0x1e90f1(0x132)](this['nodeModules'],'ws'));}catch{throw new Error(_0x1e90f1(0x1a3));}}}return this['_WebSocketClass']=_0x4ae77c,_0x4ae77c;}[_0x30d46c(0x1a1)](){var _0x49089a=_0x30d46c;this[_0x49089a(0xd1)]||this['_connected']||this['_connectAttemptCount']>=this[_0x49089a(0x145)]||(this[_0x49089a(0x137)]=!0x1,this[_0x49089a(0xd1)]=!0x0,this[_0x49089a(0x11b)]++,this[_0x49089a(0xd8)]=new Promise((_0x34eafc,_0x144324)=>{var _0x874fa4=_0x49089a;this[_0x874fa4(0x131)]()[_0x874fa4(0x128)](_0x4baf58=>{var _0x41ddac=_0x874fa4;let _0x25743b=new _0x4baf58(_0x41ddac(0x189)+(!this['_inBrowser']&&this[_0x41ddac(0x13b)]?_0x41ddac(0xdc):this[_0x41ddac(0xd6)])+':'+this[_0x41ddac(0x15d)]);_0x25743b[_0x41ddac(0xd5)]=()=>{var _0x2b4f65=_0x41ddac;this[_0x2b4f65(0xeb)]=!0x1,this[_0x2b4f65(0x172)](_0x25743b),this[_0x2b4f65(0xf5)](),_0x144324(new Error('logger\\x20websocket\\x20error'));},_0x25743b[_0x41ddac(0x19f)]=()=>{var _0x42082a=_0x41ddac;this[_0x42082a(0x154)]||_0x25743b[_0x42082a(0x186)]&&_0x25743b[_0x42082a(0x186)]['unref']&&_0x25743b[_0x42082a(0x186)][_0x42082a(0x190)](),_0x34eafc(_0x25743b);},_0x25743b[_0x41ddac(0xde)]=()=>{var _0x132972=_0x41ddac;this[_0x132972(0x137)]=!0x0,this[_0x132972(0x172)](_0x25743b),this['_attemptToReconnectShortly']();},_0x25743b[_0x41ddac(0x1ab)]=_0x1afd11=>{var _0x18d6b5=_0x41ddac;try{_0x1afd11&&_0x1afd11[_0x18d6b5(0x14f)]&&this[_0x18d6b5(0x154)]&&JSON['parse'](_0x1afd11['data'])[_0x18d6b5(0x116)]===_0x18d6b5(0x1a2)&&this['global'][_0x18d6b5(0x111)][_0x18d6b5(0x1a2)]();}catch{}};})[_0x874fa4(0x128)](_0x1b24d2=>(this[_0x874fa4(0x14c)]=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x874fa4(0xeb)]=!0x0,this[_0x874fa4(0x11b)]=0x0,_0x1b24d2))[_0x874fa4(0x147)](_0x37f5a0=>(this[_0x874fa4(0x14c)]=!0x1,this[_0x874fa4(0xd1)]=!0x1,console[_0x874fa4(0x102)](_0x874fa4(0x192)+this[_0x874fa4(0x174)]),_0x144324(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x37f5a0&&_0x37f5a0[_0x874fa4(0xe6)])))));}));}['_disposeWebsocket'](_0x49a461){var _0x4f8869=_0x30d46c;this[_0x4f8869(0x14c)]=!0x1,this['_connecting']=!0x1;try{_0x49a461[_0x4f8869(0xde)]=null,_0x49a461['onerror']=null,_0x49a461[_0x4f8869(0x19f)]=null;}catch{}try{_0x49a461[_0x4f8869(0xd0)]<0x2&&_0x49a461[_0x4f8869(0x197)]();}catch{}}['_attemptToReconnectShortly'](){var _0x15979b=_0x30d46c;clearTimeout(this['_reconnectTimeout']),!(this[_0x15979b(0x11b)]>=this[_0x15979b(0x145)])&&(this[_0x15979b(0x11e)]=setTimeout(()=>{var _0x557b68=_0x15979b;this['_connected']||this['_connecting']||(this['_connectToHostNow'](),this[_0x557b68(0xd8)]?.[_0x557b68(0x147)](()=>this[_0x557b68(0xf5)]()));},0x1f4),this[_0x15979b(0x11e)][_0x15979b(0x190)]&&this['_reconnectTimeout'][_0x15979b(0x190)]());}async[_0x30d46c(0xda)](_0x39e782){var _0x4860f9=_0x30d46c;try{if(!this['_allowedToSend'])return;this[_0x4860f9(0x137)]&&this[_0x4860f9(0x1a1)](),(await this['_ws'])[_0x4860f9(0xda)](JSON['stringify'](_0x39e782));}catch(_0x1e17e0){console[_0x4860f9(0x102)](this[_0x4860f9(0x193)]+':\\x20'+(_0x1e17e0&&_0x1e17e0[_0x4860f9(0xe6)])),this[_0x4860f9(0xeb)]=!0x1,this[_0x4860f9(0xf5)]();}}};function b(_0x46d0b1,_0x4c18eb,_0x321ff7,_0x676911,_0x4c8299,_0x54255a){var _0x3937e7=_0x30d46c;let _0x50e0f9=_0x321ff7[_0x3937e7(0x13d)](',')['map'](_0x41d87=>{var _0x5179a2=_0x3937e7;try{_0x46d0b1['_console_ninja_session']||((_0x4c8299===_0x5179a2(0x19e)||_0x4c8299===_0x5179a2(0x120)||_0x4c8299===_0x5179a2(0x152))&&(_0x4c8299+=!_0x46d0b1[_0x5179a2(0x138)]?.[_0x5179a2(0x11d)]?.[_0x5179a2(0x1ad)]&&_0x46d0b1[_0x5179a2(0x138)]?.['env']?.[_0x5179a2(0x12d)]!=='edge'?_0x5179a2(0x1b1):_0x5179a2(0x15c)),_0x46d0b1['_console_ninja_session']={'id':+new Date(),'tool':_0x4c8299});let _0x7aabbf=new X(_0x46d0b1,_0x4c18eb,_0x41d87,_0x676911,_0x54255a);return _0x7aabbf['send'][_0x5179a2(0xcf)](_0x7aabbf);}catch(_0x1cb06f){return console[_0x5179a2(0x102)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x1cb06f&&_0x1cb06f['message']),()=>{};}});return _0x277e04=>_0x50e0f9[_0x3937e7(0x1ac)](_0xa42fb=>_0xa42fb(_0x277e04));}function W(_0x1ec5c2){var _0x3f0495=_0x30d46c;let _0x11427f=function(_0x3d5583,_0xf50a7){return _0xf50a7-_0x3d5583;},_0x25515e;if(_0x1ec5c2[_0x3f0495(0xce)])_0x25515e=function(){var _0x384058=_0x3f0495;return _0x1ec5c2[_0x384058(0xce)]['now']();};else{if(_0x1ec5c2[_0x3f0495(0x138)]&&_0x1ec5c2[_0x3f0495(0x138)][_0x3f0495(0x150)]&&_0x1ec5c2[_0x3f0495(0x138)]?.[_0x3f0495(0xef)]?.[_0x3f0495(0x12d)]!==_0x3f0495(0x133))_0x25515e=function(){var _0x4b9a8c=_0x3f0495;return _0x1ec5c2[_0x4b9a8c(0x138)]['hrtime']();},_0x11427f=function(_0x1340f2,_0x45e900){return 0x3e8*(_0x45e900[0x0]-_0x1340f2[0x0])+(_0x45e900[0x1]-_0x1340f2[0x1])/0xf4240;};else try{let {performance:_0x4a19c8}=require(_0x3f0495(0x124));_0x25515e=function(){var _0x495572=_0x3f0495;return _0x4a19c8[_0x495572(0x149)]();};}catch{_0x25515e=function(){return+new Date();};}}return{'elapsed':_0x11427f,'timeStamp':_0x25515e,'now':()=>Date[_0x3f0495(0x149)]()};}function J(_0x2c99fd,_0x1298f9,_0x7a4450){var _0x2b6560=_0x30d46c;if(_0x2c99fd[_0x2b6560(0x18c)]!==void 0x0)return _0x2c99fd[_0x2b6560(0x18c)];let _0x17de28=_0x2c99fd[_0x2b6560(0x138)]?.['versions']?.[_0x2b6560(0x1ad)]||_0x2c99fd[_0x2b6560(0x138)]?.[_0x2b6560(0xef)]?.[_0x2b6560(0x12d)]==='edge';return _0x17de28&&_0x7a4450===_0x2b6560(0x15a)?_0x2c99fd[_0x2b6560(0x18c)]=!0x1:_0x2c99fd[_0x2b6560(0x18c)]=_0x17de28||!_0x1298f9||_0x2c99fd['location']?.['hostname']&&_0x1298f9[_0x2b6560(0x1b3)](_0x2c99fd[_0x2b6560(0x111)][_0x2b6560(0x122)]),_0x2c99fd[_0x2b6560(0x18c)];}function Y(_0x319751,_0x5d267a,_0x2408ba,_0x563504){var _0x4248d6=_0x30d46c;_0x319751=_0x319751,_0x5d267a=_0x5d267a,_0x2408ba=_0x2408ba,_0x563504=_0x563504;let _0x5c6ba4=W(_0x319751),_0x5dead5=_0x5c6ba4[_0x4248d6(0xf0)],_0x299da3=_0x5c6ba4['timeStamp'];class _0x3187a7{constructor(){var _0x54c54b=_0x4248d6;this[_0x54c54b(0x171)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c54b(0xd2)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c54b(0xe5)]=_0x319751[_0x54c54b(0x198)],this[_0x54c54b(0xd7)]=_0x319751[_0x54c54b(0x168)],this['_getOwnPropertyDescriptor']=Object[_0x54c54b(0x16e)],this[_0x54c54b(0x12c)]=Object[_0x54c54b(0x158)],this[_0x54c54b(0x170)]=_0x319751[_0x54c54b(0x169)],this[_0x54c54b(0x1b2)]=RegExp['prototype'][_0x54c54b(0x14d)],this[_0x54c54b(0x11f)]=Date['prototype'][_0x54c54b(0x14d)];}[_0x4248d6(0x1b6)](_0x43bfc7,_0x25d451,_0x1e71c5,_0x508a0f){var _0x136692=_0x4248d6,_0x22f7b8=this,_0x27a473=_0x1e71c5['autoExpand'];function _0x412bfe(_0x1561f7,_0x2a0987,_0x58f130){var _0x21c91d=_0x394b;_0x2a0987[_0x21c91d(0x191)]=_0x21c91d(0x113),_0x2a0987[_0x21c91d(0x139)]=_0x1561f7[_0x21c91d(0xe6)],_0x1c36b0=_0x58f130['node'][_0x21c91d(0xdd)],_0x58f130[_0x21c91d(0x1ad)][_0x21c91d(0xdd)]=_0x2a0987,_0x22f7b8[_0x21c91d(0x140)](_0x2a0987,_0x58f130);}try{_0x1e71c5[_0x136692(0x107)]++,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)][_0x136692(0x134)](_0x25d451);var _0x315743,_0x541aa8,_0x3cced9,_0x2a34a1,_0x20b4f2=[],_0x4da63b=[],_0x556979,_0x2d2d6d=this[_0x136692(0x136)](_0x25d451),_0xd832c5=_0x2d2d6d==='array',_0x268c40=!0x1,_0x130f3e=_0x2d2d6d===_0x136692(0xea),_0x369b0e=this[_0x136692(0x115)](_0x2d2d6d),_0x498418=this['_isPrimitiveWrapperType'](_0x2d2d6d),_0x340f83=_0x369b0e||_0x498418,_0x2493be={},_0x36f3cc=0x0,_0x3a2fda=!0x1,_0x1c36b0,_0x348bf1=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1e71c5[_0x136692(0x129)]){if(_0xd832c5){if(_0x541aa8=_0x25d451[_0x136692(0x15e)],_0x541aa8>_0x1e71c5[_0x136692(0x162)]){for(_0x3cced9=0x0,_0x2a34a1=_0x1e71c5['elements'],_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));_0x43bfc7[_0x136692(0x166)]=!0x0;}else{for(_0x3cced9=0x0,_0x2a34a1=_0x541aa8,_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));}_0x1e71c5[_0x136692(0x175)]+=_0x4da63b['length'];}if(!(_0x2d2d6d==='null'||_0x2d2d6d===_0x136692(0x198))&&!_0x369b0e&&_0x2d2d6d!==_0x136692(0x101)&&_0x2d2d6d!==_0x136692(0x1af)&&_0x2d2d6d!=='bigint'){var _0x2cc7c3=_0x508a0f[_0x136692(0x19d)]||_0x1e71c5['props'];if(this[_0x136692(0x184)](_0x25d451)?(_0x315743=0x0,_0x25d451[_0x136692(0x1ac)](function(_0x5b5110){var _0x58c3cb=_0x136692;if(_0x36f3cc++,_0x1e71c5[_0x58c3cb(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5[_0x58c3cb(0x153)]&&_0x1e71c5[_0x58c3cb(0x182)]&&_0x1e71c5[_0x58c3cb(0x175)]>_0x1e71c5[_0x58c3cb(0xe1)]){_0x3a2fda=!0x0;return;}_0x4da63b[_0x58c3cb(0x134)](_0x22f7b8[_0x58c3cb(0xf7)](_0x20b4f2,_0x25d451,_0x58c3cb(0x16c),_0x315743++,_0x1e71c5,function(_0xfcb5c5){return function(){return _0xfcb5c5;};}(_0x5b5110)));})):this[_0x136692(0x143)](_0x25d451)&&_0x25d451['forEach'](function(_0x2056f5,_0x313010){var _0x55a7fd=_0x136692;if(_0x36f3cc++,_0x1e71c5['autoExpandPropertyCount']++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5['isExpressionToEvaluate']&&_0x1e71c5['autoExpand']&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x55a7fd(0xe1)]){_0x3a2fda=!0x0;return;}var _0x27b755=_0x313010['toString']();_0x27b755['length']>0x64&&(_0x27b755=_0x27b755['slice'](0x0,0x64)+'...'),_0x4da63b[_0x55a7fd(0x134)](_0x22f7b8[_0x55a7fd(0xf7)](_0x20b4f2,_0x25d451,_0x55a7fd(0x10d),_0x27b755,_0x1e71c5,function(_0x58dde9){return function(){return _0x58dde9;};}(_0x2056f5)));}),!_0x268c40){try{for(_0x556979 in _0x25d451)if(!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}catch{}if(_0x2493be[_0x136692(0x13a)]=!0x0,_0x130f3e&&(_0x2493be[_0x136692(0x16f)]=!0x0),!_0x3a2fda){var _0x379ad8=[][_0x136692(0xdb)](this[_0x136692(0x12c)](_0x25d451))[_0x136692(0xdb)](this[_0x136692(0x14e)](_0x25d451));for(_0x315743=0x0,_0x541aa8=_0x379ad8[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)if(_0x556979=_0x379ad8[_0x315743],!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979[_0x136692(0x14d)]()))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)&&!_0x2493be[_0x136692(0x12e)+_0x556979[_0x136692(0x14d)]()]){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b['push'](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}}}}if(_0x43bfc7[_0x136692(0x191)]=_0x2d2d6d,_0x340f83?(_0x43bfc7['value']=_0x25d451['valueOf'](),this[_0x136692(0xe3)](_0x2d2d6d,_0x43bfc7,_0x1e71c5,_0x508a0f)):_0x2d2d6d===_0x136692(0xf3)?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x11f)][_0x136692(0xfe)](_0x25d451):_0x2d2d6d===_0x136692(0x18b)?_0x43bfc7[_0x136692(0x17f)]=_0x25d451['toString']():_0x2d2d6d==='RegExp'?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x1b2)]['call'](_0x25d451):_0x2d2d6d===_0x136692(0x176)&&this[_0x136692(0x170)]?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x170)][_0x136692(0x180)][_0x136692(0x14d)][_0x136692(0xfe)](_0x25d451):!_0x1e71c5[_0x136692(0x129)]&&!(_0x2d2d6d===_0x136692(0x159)||_0x2d2d6d===_0x136692(0x198))&&(delete _0x43bfc7['value'],_0x43bfc7[_0x136692(0x125)]=!0x0),_0x3a2fda&&(_0x43bfc7['cappedProps']=!0x0),_0x1c36b0=_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)],_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x43bfc7,this[_0x136692(0x140)](_0x43bfc7,_0x1e71c5),_0x4da63b[_0x136692(0x15e)]){for(_0x315743=0x0,_0x541aa8=_0x4da63b[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)_0x4da63b[_0x315743](_0x315743);}_0x20b4f2[_0x136692(0x15e)]&&(_0x43bfc7['props']=_0x20b4f2);}catch(_0xcb2f1f){_0x412bfe(_0xcb2f1f,_0x43bfc7,_0x1e71c5);}return this[_0x136692(0xdf)](_0x25d451,_0x43bfc7),this[_0x136692(0x109)](_0x43bfc7,_0x1e71c5),_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x1c36b0,_0x1e71c5[_0x136692(0x107)]--,_0x1e71c5['autoExpand']=_0x27a473,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)]['pop'](),_0x43bfc7;}[_0x4248d6(0x14e)](_0x36fd65){var _0x3a70b0=_0x4248d6;return Object[_0x3a70b0(0x18e)]?Object['getOwnPropertySymbols'](_0x36fd65):[];}[_0x4248d6(0x184)](_0x2e653d){var _0x3fc9c1=_0x4248d6;return!!(_0x2e653d&&_0x319751['Set']&&this[_0x3fc9c1(0x177)](_0x2e653d)===_0x3fc9c1(0x10c)&&_0x2e653d[_0x3fc9c1(0x1ac)]);}[_0x4248d6(0xf8)](_0x52d6ba,_0x57f26e,_0xff5ab3){var _0xd01f4b=_0x4248d6;return _0xff5ab3[_0xd01f4b(0x12b)]?typeof _0x52d6ba[_0x57f26e]==_0xd01f4b(0xea):!0x1;}[_0x4248d6(0x136)](_0x89a353){var _0x3c333c=_0x4248d6,_0x45a790='';return _0x45a790=typeof _0x89a353,_0x45a790===_0x3c333c(0x183)?this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x114)?_0x45a790=_0x3c333c(0xfb):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x126)?_0x45a790=_0x3c333c(0xf3):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x141)?_0x45a790=_0x3c333c(0x18b):_0x89a353===null?_0x45a790=_0x3c333c(0x159):_0x89a353[_0x3c333c(0x1a6)]&&(_0x45a790=_0x89a353[_0x3c333c(0x1a6)][_0x3c333c(0x106)]||_0x45a790):_0x45a790==='undefined'&&this[_0x3c333c(0xd7)]&&_0x89a353 instanceof this[_0x3c333c(0xd7)]&&(_0x45a790=_0x3c333c(0x168)),_0x45a790;}[_0x4248d6(0x177)](_0xb28b5){var _0x2d6e81=_0x4248d6;return Object[_0x2d6e81(0x180)][_0x2d6e81(0x14d)]['call'](_0xb28b5);}['_isPrimitiveType'](_0x578eee){var _0x153dac=_0x4248d6;return _0x578eee===_0x153dac(0x16b)||_0x578eee===_0x153dac(0x13c)||_0x578eee===_0x153dac(0x135);}[_0x4248d6(0x163)](_0x13250b){var _0x289843=_0x4248d6;return _0x13250b===_0x289843(0x19c)||_0x13250b==='String'||_0x13250b===_0x289843(0x17c);}[_0x4248d6(0xf7)](_0x45b196,_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3){var _0x5b97f2=this;return function(_0x4a4e4b){var _0x21f6c7=_0x394b,_0x104c97=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0xdd)],_0x4c3709=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x1a8)],_0x702bea=_0x413025[_0x21f6c7(0x1ad)]['parent'];_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x104c97,_0x413025['node']['index']=typeof _0x35730f==_0x21f6c7(0x135)?_0x35730f:_0x4a4e4b,_0x45b196[_0x21f6c7(0x134)](_0x5b97f2[_0x21f6c7(0x181)](_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3)),_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x702bea,_0x413025[_0x21f6c7(0x1ad)]['index']=_0x4c3709;};}[_0x4248d6(0x108)](_0x4609e5,_0x15cfe4,_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359){var _0x4cf52b=_0x4248d6,_0x40276a=this;return _0x15cfe4['_p_'+_0x356575[_0x4cf52b(0x14d)]()]=!0x0,function(_0x3325f7){var _0x2b8d06=_0x4cf52b,_0x2eeeea=_0x357193['node'][_0x2b8d06(0xdd)],_0x23c718=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)],_0x14d3c3=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)];_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)]=_0x2eeeea,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x3325f7,_0x4609e5[_0x2b8d06(0x134)](_0x40276a[_0x2b8d06(0x181)](_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359)),_0x357193['node'][_0x2b8d06(0x160)]=_0x14d3c3,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x23c718;};}['_property'](_0x9ab64f,_0x4d90b9,_0x183599,_0xd58b2b,_0x43af40){var _0x14708=_0x4248d6,_0x446500=this;_0x43af40||(_0x43af40=function(_0x4bdfb1,_0x4bdc4d){return _0x4bdfb1[_0x4bdc4d];});var _0x182c0f=_0x183599[_0x14708(0x14d)](),_0x5b3e54=_0xd58b2b[_0x14708(0x13f)]||{},_0x527792=_0xd58b2b['depth'],_0x508312=_0xd58b2b['isExpressionToEvaluate'];try{var _0x521058=this[_0x14708(0x143)](_0x9ab64f),_0x4123ea=_0x182c0f;_0x521058&&_0x4123ea[0x0]==='\\x27'&&(_0x4123ea=_0x4123ea[_0x14708(0x112)](0x1,_0x4123ea['length']-0x2));var _0x26de9a=_0xd58b2b['expressionsToEvaluate']=_0x5b3e54[_0x14708(0x12e)+_0x4123ea];_0x26de9a&&(_0xd58b2b[_0x14708(0x129)]=_0xd58b2b['depth']+0x1),_0xd58b2b['isExpressionToEvaluate']=!!_0x26de9a;var _0x53a6b3=typeof _0x183599==_0x14708(0x176),_0x31790b={'name':_0x53a6b3||_0x521058?_0x182c0f:this[_0x14708(0x196)](_0x182c0f)};if(_0x53a6b3&&(_0x31790b[_0x14708(0x176)]=!0x0),!(_0x4d90b9===_0x14708(0xfb)||_0x4d90b9===_0x14708(0xe2))){var _0x428e2f=this['_getOwnPropertyDescriptor'](_0x9ab64f,_0x183599);if(_0x428e2f&&(_0x428e2f['set']&&(_0x31790b['setter']=!0x0),_0x428e2f[_0x14708(0x1a5)]&&!_0x26de9a&&!_0xd58b2b[_0x14708(0x18d)]))return _0x31790b[_0x14708(0x173)]=!0x0,this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x5786e9;try{_0x5786e9=_0x43af40(_0x9ab64f,_0x183599);}catch(_0x396ba8){return _0x31790b={'name':_0x182c0f,'type':'unknown','error':_0x396ba8[_0x14708(0xe6)]},this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x52ddfc=this['_type'](_0x5786e9),_0x1f051f=this[_0x14708(0x115)](_0x52ddfc);if(_0x31790b['type']=_0x52ddfc,_0x1f051f)this['_processTreeNodeResult'](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x1b14f0=_0x14708;_0x31790b[_0x1b14f0(0x17f)]=_0x5786e9['valueOf'](),!_0x26de9a&&_0x446500[_0x1b14f0(0xe3)](_0x52ddfc,_0x31790b,_0xd58b2b,{});});else{var _0x348206=_0xd58b2b[_0x14708(0x182)]&&_0xd58b2b['level']<_0xd58b2b[_0x14708(0x167)]&&_0xd58b2b[_0x14708(0xe8)]['indexOf'](_0x5786e9)<0x0&&_0x52ddfc!==_0x14708(0xea)&&_0xd58b2b[_0x14708(0x175)]<_0xd58b2b[_0x14708(0xe1)];_0x348206||_0xd58b2b[_0x14708(0x107)]<_0x527792||_0x26de9a?(this[_0x14708(0x1b6)](_0x31790b,_0x5786e9,_0xd58b2b,_0x26de9a||{}),this['_additionalMetadata'](_0x5786e9,_0x31790b)):this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x2385ba=_0x14708;_0x52ddfc===_0x2385ba(0x159)||_0x52ddfc==='undefined'||(delete _0x31790b[_0x2385ba(0x17f)],_0x31790b[_0x2385ba(0x125)]=!0x0);});}return _0x31790b;}finally{_0xd58b2b['expressionsToEvaluate']=_0x5b3e54,_0xd58b2b[_0x14708(0x129)]=_0x527792,_0xd58b2b[_0x14708(0x153)]=_0x508312;}}[_0x4248d6(0xe3)](_0x305781,_0x1212b3,_0x3beb27,_0x522683){var _0x4d2057=_0x4248d6,_0x2b2a31=_0x522683['strLength']||_0x3beb27[_0x4d2057(0x185)];if((_0x305781===_0x4d2057(0x13c)||_0x305781===_0x4d2057(0x101))&&_0x1212b3[_0x4d2057(0x17f)]){let _0x15d632=_0x1212b3['value'][_0x4d2057(0x15e)];_0x3beb27[_0x4d2057(0x104)]+=_0x15d632,_0x3beb27[_0x4d2057(0x104)]>_0x3beb27['totalStrLength']?(_0x1212b3['capped']='',delete _0x1212b3['value']):_0x15d632>_0x2b2a31&&(_0x1212b3[_0x4d2057(0x125)]=_0x1212b3[_0x4d2057(0x17f)][_0x4d2057(0x112)](0x0,_0x2b2a31),delete _0x1212b3['value']);}}['_isMap'](_0x2ac54f){var _0x1921a0=_0x4248d6;return!!(_0x2ac54f&&_0x319751['Map']&&this[_0x1921a0(0x177)](_0x2ac54f)===_0x1921a0(0x1a9)&&_0x2ac54f[_0x1921a0(0x1ac)]);}['_propertyName'](_0x53ffeb){var _0x2f97d5=_0x4248d6;if(_0x53ffeb[_0x2f97d5(0x12f)](/^\\d+$/))return _0x53ffeb;var _0x2b8f72;try{_0x2b8f72=JSON[_0x2f97d5(0x11a)](''+_0x53ffeb);}catch{_0x2b8f72='\\x22'+this[_0x2f97d5(0x177)](_0x53ffeb)+'\\x22';}return _0x2b8f72[_0x2f97d5(0x12f)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2b8f72=_0x2b8f72['substr'](0x1,_0x2b8f72[_0x2f97d5(0x15e)]-0x2):_0x2b8f72=_0x2b8f72[_0x2f97d5(0x130)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x2f97d5(0x130)](/(^\"|\"$)/g,'\\x27'),_0x2b8f72;}[_0x4248d6(0x1b4)](_0x5beb6d,_0x4cc6c2,_0x55db92,_0x5a76f6){var _0x813bc8=_0x4248d6;this[_0x813bc8(0x140)](_0x5beb6d,_0x4cc6c2),_0x5a76f6&&_0x5a76f6(),this[_0x813bc8(0xdf)](_0x55db92,_0x5beb6d),this[_0x813bc8(0x109)](_0x5beb6d,_0x4cc6c2);}['_treeNodePropertiesBeforeFullValue'](_0x3c6961,_0x172ffa){var _0x174417=_0x4248d6;this[_0x174417(0x13e)](_0x3c6961,_0x172ffa),this[_0x174417(0x188)](_0x3c6961,_0x172ffa),this['_setNodeExpressionPath'](_0x3c6961,_0x172ffa),this[_0x174417(0x117)](_0x3c6961,_0x172ffa);}[_0x4248d6(0x13e)](_0x232fb1,_0x1546dc){}[_0x4248d6(0x188)](_0x1b55ca,_0x1dc1b0){}[_0x4248d6(0x1a7)](_0x290ddd,_0x5ea425){}[_0x4248d6(0xed)](_0x3c1026){return _0x3c1026===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x5816de,_0x51ad0f){var _0x4e3207=_0x4248d6;this[_0x4e3207(0x1a7)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x195)](_0x5816de),_0x51ad0f[_0x4e3207(0xe4)]&&this['_sortProps'](_0x5816de),this[_0x4e3207(0x11c)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x19b)](_0x5816de,_0x51ad0f),this['_cleanNode'](_0x5816de);}[_0x4248d6(0xdf)](_0x3cc52c,_0x4d38a7){var _0x41e4dd=_0x4248d6;let _0x53c9b7;try{_0x319751[_0x41e4dd(0xf9)]&&(_0x53c9b7=_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)],_0x319751[_0x41e4dd(0xf9)]['error']=function(){}),_0x3cc52c&&typeof _0x3cc52c[_0x41e4dd(0x15e)]==_0x41e4dd(0x135)&&(_0x4d38a7[_0x41e4dd(0x15e)]=_0x3cc52c[_0x41e4dd(0x15e)]);}catch{}finally{_0x53c9b7&&(_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)]=_0x53c9b7);}if(_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x135)||_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x17c)){if(isNaN(_0x4d38a7['value']))_0x4d38a7[_0x41e4dd(0x19a)]=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];else switch(_0x4d38a7[_0x41e4dd(0x17f)]){case Number[_0x41e4dd(0xf1)]:_0x4d38a7[_0x41e4dd(0x199)]=!0x0,delete _0x4d38a7['value'];break;case Number['NEGATIVE_INFINITY']:_0x4d38a7['negativeInfinity']=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];break;case 0x0:this['_isNegativeZero'](_0x4d38a7[_0x41e4dd(0x17f)])&&(_0x4d38a7[_0x41e4dd(0x161)]=!0x0);break;}}else _0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0xea)&&typeof _0x3cc52c[_0x41e4dd(0x106)]==_0x41e4dd(0x13c)&&_0x3cc52c[_0x41e4dd(0x106)]&&_0x4d38a7['name']&&_0x3cc52c[_0x41e4dd(0x106)]!==_0x4d38a7['name']&&(_0x4d38a7[_0x41e4dd(0x146)]=_0x3cc52c['name']);}['_isNegativeZero'](_0x545d70){var _0x3f5f78=_0x4248d6;return 0x1/_0x545d70===Number[_0x3f5f78(0x157)];}[_0x4248d6(0x178)](_0x48342d){var _0x1133ce=_0x4248d6;!_0x48342d[_0x1133ce(0x19d)]||!_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x15e)]||_0x48342d['type']===_0x1133ce(0xfb)||_0x48342d[_0x1133ce(0x191)]==='Map'||_0x48342d[_0x1133ce(0x191)]===_0x1133ce(0x16c)||_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x17b)](function(_0x358f74,_0x251519){var _0x197d94=_0x1133ce,_0xba1944=_0x358f74[_0x197d94(0x106)][_0x197d94(0x18f)](),_0x138aff=_0x251519[_0x197d94(0x106)]['toLowerCase']();return _0xba1944<_0x138aff?-0x1:_0xba1944>_0x138aff?0x1:0x0;});}[_0x4248d6(0x11c)](_0x180095,_0x94a7be){var _0xb3b43a=_0x4248d6;if(!(_0x94a7be[_0xb3b43a(0x12b)]||!_0x180095[_0xb3b43a(0x19d)]||!_0x180095[_0xb3b43a(0x19d)]['length'])){for(var _0x46653e=[],_0x80c338=[],_0x142411=0x0,_0x2d6021=_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x15e)];_0x142411<_0x2d6021;_0x142411++){var _0x413289=_0x180095[_0xb3b43a(0x19d)][_0x142411];_0x413289[_0xb3b43a(0x191)]===_0xb3b43a(0xea)?_0x46653e[_0xb3b43a(0x134)](_0x413289):_0x80c338[_0xb3b43a(0x134)](_0x413289);}if(!(!_0x80c338[_0xb3b43a(0x15e)]||_0x46653e['length']<=0x1)){_0x180095[_0xb3b43a(0x19d)]=_0x80c338;var _0x2274df={'functionsNode':!0x0,'props':_0x46653e};this[_0xb3b43a(0x13e)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x1a7)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x195)](_0x2274df),this[_0xb3b43a(0x117)](_0x2274df,_0x94a7be),_0x2274df['id']+='\\x20f',_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x119)](_0x2274df);}}}[_0x4248d6(0x19b)](_0x488e07,_0x30da5f){}[_0x4248d6(0x195)](_0x2fb9ca){}[_0x4248d6(0xd4)](_0x46e88e){var _0x1167c4=_0x4248d6;return Array[_0x1167c4(0xfa)](_0x46e88e)||typeof _0x46e88e=='object'&&this[_0x1167c4(0x177)](_0x46e88e)===_0x1167c4(0x114);}['_setNodePermissions'](_0x3144a8,_0xd8d5c7){}['_cleanNode'](_0x349cb4){var _0x2a5872=_0x4248d6;delete _0x349cb4[_0x2a5872(0x148)],delete _0x349cb4[_0x2a5872(0x18a)],delete _0x349cb4[_0x2a5872(0x15b)];}[_0x4248d6(0x164)](_0x1387b6,_0x59de70){}}let _0x59cd6d=new _0x3187a7(),_0x11e492={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0xb7e3db={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x2e8232(_0xcfd290,_0x3e941f,_0x3283c2,_0x23065e,_0x2a7f01,_0x38778e){var _0x42ca29=_0x4248d6;let _0x401ff6,_0x4885de;try{_0x4885de=_0x299da3(),_0x401ff6=_0x2408ba[_0x3e941f],!_0x401ff6||_0x4885de-_0x401ff6['ts']>0x1f4&&_0x401ff6[_0x42ca29(0x100)]&&_0x401ff6[_0x42ca29(0x1a4)]/_0x401ff6[_0x42ca29(0x100)]<0x64?(_0x2408ba[_0x3e941f]=_0x401ff6={'count':0x0,'time':0x0,'ts':_0x4885de},_0x2408ba[_0x42ca29(0x10f)]={}):_0x4885de-_0x2408ba[_0x42ca29(0x10f)]['ts']>0x32&&_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]&&_0x2408ba[_0x42ca29(0x10f)]['time']/_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]<0x64&&(_0x2408ba[_0x42ca29(0x10f)]={});let _0x3905d7=[],_0x5c3a59=_0x401ff6['reduceLimits']||_0x2408ba[_0x42ca29(0x10f)]['reduceLimits']?_0xb7e3db:_0x11e492,_0x4072d6=_0x9c85d2=>{var _0x5754ea=_0x42ca29;let _0xec7735={};return _0xec7735[_0x5754ea(0x19d)]=_0x9c85d2[_0x5754ea(0x19d)],_0xec7735[_0x5754ea(0x162)]=_0x9c85d2[_0x5754ea(0x162)],_0xec7735[_0x5754ea(0x185)]=_0x9c85d2[_0x5754ea(0x185)],_0xec7735['totalStrLength']=_0x9c85d2[_0x5754ea(0x155)],_0xec7735[_0x5754ea(0xe1)]=_0x9c85d2[_0x5754ea(0xe1)],_0xec7735[_0x5754ea(0x167)]=_0x9c85d2[_0x5754ea(0x167)],_0xec7735[_0x5754ea(0xe4)]=!0x1,_0xec7735[_0x5754ea(0x12b)]=!_0x5d267a,_0xec7735[_0x5754ea(0x129)]=0x1,_0xec7735[_0x5754ea(0x107)]=0x0,_0xec7735['expId']=_0x5754ea(0xff),_0xec7735[_0x5754ea(0x179)]=_0x5754ea(0xfd),_0xec7735[_0x5754ea(0x182)]=!0x0,_0xec7735[_0x5754ea(0xe8)]=[],_0xec7735[_0x5754ea(0x175)]=0x0,_0xec7735[_0x5754ea(0x18d)]=!0x0,_0xec7735[_0x5754ea(0x104)]=0x0,_0xec7735[_0x5754ea(0x1ad)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0xec7735;};for(var _0x4edb78=0x0;_0x4edb78<_0x2a7f01[_0x42ca29(0x15e)];_0x4edb78++)_0x3905d7[_0x42ca29(0x134)](_0x59cd6d['serialize']({'timeNode':_0xcfd290===_0x42ca29(0x1a4)||void 0x0},_0x2a7f01[_0x4edb78],_0x4072d6(_0x5c3a59),{}));if(_0xcfd290==='trace'){let _0x34cb91=Error[_0x42ca29(0x10b)];try{Error[_0x42ca29(0x10b)]=0x1/0x0,_0x3905d7[_0x42ca29(0x134)](_0x59cd6d[_0x42ca29(0x1b6)]({'stackNode':!0x0},new Error()['stack'],_0x4072d6(_0x5c3a59),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x34cb91;}}return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':_0x3905d7,'id':_0x3e941f,'context':_0x38778e}]};}catch(_0x48f0ce){return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':[{'type':_0x42ca29(0x113),'error':_0x48f0ce&&_0x48f0ce['message']}],'id':_0x3e941f,'context':_0x38778e}]};}finally{try{if(_0x401ff6&&_0x4885de){let _0x2ff189=_0x299da3();_0x401ff6['count']++,_0x401ff6[_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x401ff6['ts']=_0x2ff189,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]++,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x2408ba[_0x42ca29(0x10f)]['ts']=_0x2ff189,(_0x401ff6['count']>0x32||_0x401ff6[_0x42ca29(0x1a4)]>0x64)&&(_0x401ff6[_0x42ca29(0x144)]=!0x0),(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]>0x3e8||_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]>0x12c)&&(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x144)]=!0x0);}}catch{}}}return _0x2e8232;}((_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x4e0e77,_0x37052b,_0x203bb4,_0x2f9931,_0x366303)=>{var _0x521a84=_0x30d46c;if(_0x3080e0['_console_ninja'])return _0x3080e0[_0x521a84(0xf4)];if(!J(_0x3080e0,_0x203bb4,_0x4b7e45))return _0x3080e0['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x3080e0[_0x521a84(0xf4)];let _0x3493fc=W(_0x3080e0),_0x4cad30=_0x3493fc[_0x521a84(0xf0)],_0x819273=_0x3493fc[_0x521a84(0x16d)],_0x544cc2=_0x3493fc[_0x521a84(0x149)],_0x3eb3e6={'hits':{},'ts':{}},_0x25ff14=Y(_0x3080e0,_0x2f9931,_0x3eb3e6,_0x4e0e77),_0x192300=_0x25873f=>{_0x3eb3e6['ts'][_0x25873f]=_0x819273();},_0x44f510=(_0x5562fd,_0x2f6706)=>{var _0x2ecd66=_0x521a84;let _0x2cc916=_0x3eb3e6['ts'][_0x2f6706];if(delete _0x3eb3e6['ts'][_0x2f6706],_0x2cc916){let _0x1f5842=_0x4cad30(_0x2cc916,_0x819273());_0x53751c(_0x25ff14(_0x2ecd66(0x1a4),_0x5562fd,_0x544cc2(),_0xf489e2,[_0x1f5842],_0x2f6706));}},_0x18f78b=_0x27e533=>_0x74adcc=>{var _0x53f31a=_0x521a84;try{_0x192300(_0x74adcc),_0x27e533(_0x74adcc);}finally{_0x3080e0[_0x53f31a(0xf9)][_0x53f31a(0x1a4)]=_0x27e533;}},_0x1553d8=_0x4b624b=>_0x5ca441=>{var _0x2ffff7=_0x521a84;try{let [_0x5e2d86,_0x46db52]=_0x5ca441[_0x2ffff7(0x13d)](_0x2ffff7(0x17d));_0x44f510(_0x46db52,_0x5e2d86),_0x4b624b(_0x5e2d86);}finally{_0x3080e0[_0x2ffff7(0xf9)][_0x2ffff7(0x142)]=_0x4b624b;}};_0x3080e0[_0x521a84(0xf4)]={'consoleLog':(_0x18e280,_0x1f4d15)=>{var _0x1b98f5=_0x521a84;_0x3080e0['console'][_0x1b98f5(0x1a0)][_0x1b98f5(0x106)]!==_0x1b98f5(0x123)&&_0x53751c(_0x25ff14(_0x1b98f5(0x1a0),_0x18e280,_0x544cc2(),_0xf489e2,_0x1f4d15));},'consoleTrace':(_0x4c956b,_0xcddb11)=>{var _0x5dd028=_0x521a84;_0x3080e0[_0x5dd028(0xf9)][_0x5dd028(0x1a0)][_0x5dd028(0x106)]!==_0x5dd028(0x110)&&_0x53751c(_0x25ff14(_0x5dd028(0x156),_0x4c956b,_0x544cc2(),_0xf489e2,_0xcddb11));},'consoleTime':()=>{var _0x10a308=_0x521a84;_0x3080e0['console'][_0x10a308(0x1a4)]=_0x18f78b(_0x3080e0['console'][_0x10a308(0x1a4)]);},'consoleTimeEnd':()=>{var _0x44a884=_0x521a84;_0x3080e0[_0x44a884(0xf9)]['timeEnd']=_0x1553d8(_0x3080e0[_0x44a884(0xf9)][_0x44a884(0x142)]);},'autoLog':(_0x479660,_0xd1686c)=>{var _0x40646e=_0x521a84;_0x53751c(_0x25ff14(_0x40646e(0x1a0),_0xd1686c,_0x544cc2(),_0xf489e2,[_0x479660]));},'autoLogMany':(_0x91fed5,_0x40a84f)=>{var _0x7344e1=_0x521a84;_0x53751c(_0x25ff14(_0x7344e1(0x1a0),_0x91fed5,_0x544cc2(),_0xf489e2,_0x40a84f));},'autoTrace':(_0x3546f7,_0x3d8eb5)=>{var _0x25512f=_0x521a84;_0x53751c(_0x25ff14(_0x25512f(0x156),_0x3d8eb5,_0x544cc2(),_0xf489e2,[_0x3546f7]));},'autoTraceMany':(_0x2b722f,_0x2df03b)=>{var _0x20acf1=_0x521a84;_0x53751c(_0x25ff14(_0x20acf1(0x156),_0x2b722f,_0x544cc2(),_0xf489e2,_0x2df03b));},'autoTime':(_0x297194,_0x1a6b68,_0x59d60b)=>{_0x192300(_0x59d60b);},'autoTimeEnd':(_0x4b1174,_0x19e4f9,_0x3e9773)=>{_0x44f510(_0x19e4f9,_0x3e9773);},'coverage':_0x169035=>{var _0x94fdd=_0x521a84;_0x53751c({'method':_0x94fdd(0x187),'version':_0x4e0e77,'args':[{'id':_0x169035}]});}};let _0x53751c=b(_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x366303),_0xf489e2=_0x3080e0[_0x521a84(0xd3)];return _0x3080e0[_0x521a84(0xf4)];})(globalThis,_0x30d46c(0xe0),_0x30d46c(0xcc),\"c:\\\\Users\\\\USER\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.240\\\\node_modules\",_0x30d46c(0x17a),_0x30d46c(0xf2),_0x30d46c(0xd9),_0x30d46c(0x1aa),_0x30d46c(0x103),_0x30d46c(0xee));");
  } catch (e) {}
}
;
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
;
function oo_tr(i, ...v) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29sbGVjdC1ndWVzdC1hdHRlbmRhbmNlLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9leHRyYS5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3BpY3R1cmVHcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9yaWVzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaTE4bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVzb2x2ZVBhdGguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaTE4bi1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInFyY29kZS5yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYWRkLXRvLWNhbGVuZGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYmx1cmhhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3ZWV0YWxlcnQyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dpcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dpcGVyL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSIsInNldFNob3dNb2RhbCIsInNob3dNb2RhbCIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJhdHRlbmRpbmciLCJzZXRBdHRlbmRpbmciLCJlbWFpbCIsInNldEVtYWlsIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2NyaXB0VXJsIiwiaHR0cFN0YXR1cyIsInN0YXR1c0NvZGUiLCJTd2FsIiwiZmlyZSIsImJ1aWxkQ29yc0ZyZWVVcmwiLCJ0YXJnZXQiLCJjb3JzRnJlZVVybCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwib29fb28iLCJkYXRhIiwidGV4dCIsInN0YXR1cyIsImVycm9yIiwiX19qc3giLCJjbGFzc05hbWUiLCJ0YWJJbmRleCIsInJvbGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjb2xvciIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidHlwZSIsIm9uQ2xpY2siLCJmb250U2l6ZSIsIm9uU3VibWl0IiwiaHRtbEZvciIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInJvd3MiLCJvb19jbSIsImV2YWwiLCJpIiwidiIsImNvbnNvbGVMb2ciLCJvb190ciIsImNvbnNvbGVUcmFjZSIsIm9vX3RzIiwiY29uc29sZVRpbWUiLCJvb190ZSIsImNvbnNvbGVUaW1lRW5kIiwiTG92ZVRpdGxlSWNvbiIsIkxhenlMb2FkSW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImVmZmVjdCIsImFsdCIsIkV2ZW50RGF0ZUljb24iLCJmaWxsIiwieG1sbnMiLCJkIiwiSGVhZGVyTG9nbyIsImJhY2tmYWNlVmlzaWJpbGl0eSIsInRyYW5zZm9ybSIsInRyYW5zbGF0ZUNvbmZpZyIsImFwcENvbmZpZyIsImxvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjb25maWdMYW5nIiwibGFuZyIsInVuZGVmaW5lZCIsIkVycm9yIiwiX29iamVjdFNwcmVhZCIsIlNob3dJbnZpdGUiLCJjdXJyZW50VXJsIiwiZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCIsImd1ZXN0IiwidCIsInVzZVRyYW5zbGF0aW9uIiwibG9nbyIsIm9nVGFncyIsImNvdXBsZUluZm8iLCJ2ZW51ZSIsIndlZGRpbmdEYXkiLCJ3ZWRkaW5nRGF0ZSIsIndlZGRpbmdUaW1lIiwiY2FsZW5kYXJJbmZvIiwiYnJpZGVOYW1lIiwiZ3Jvb21OYW1lIiwiaGFzaHRhZyIsImNvdXBsZU5hbWVGb3JtYXQiLCJjb3VwbGVOYW1lU3RyIiwiY291cGxlTmFtZSIsIlJlYWN0IiwiRnJhZ21lbnQiLCJ2ZW51ZUJyaWVmIiwiY2l0eSIsImNvdW50cnkiLCJ3ZWRkaW5nRGF0ZUJyaWVmIiwiZXZlbnRUaXRsZSIsImV2ZW50RGVzY3JpcHRpb24iLCJjYWxlbmRhckV2ZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwic3RhcnRUaW1lIiwidGltZVN0YXJ0SVNPIiwiZW5kVGltZSIsInRpbWVFbmRJU08iLCJldmVudFNjaGVkdWxlIiwiaWNvbiIsImV2ZW50IiwiZGF0ZSIsInRpbWUiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJlbGVtZW50UmVmIiwidXNlUmVmIiwiaGFuZGxlU2Nyb2xsIiwiZWxlbWVudCIsImN1cnJlbnQiLCJlbGVtZW50UG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX0pTWFN0eWxlIiwiSGVhZCIsIl9leHRlbmRzIiwiZ3Vlc3ROYW1lIiwidXJsIiwibW9kaWZpZWRUaW1lIiwicmVzb2x2ZVBhdGgiLCJhdXRob3IiLCJvcGFjaXR5IiwicGFkZGluZ1RvcCIsIm1heEhlaWdodCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImhlYWRlckxvZ28iLCJhbmltYXRpb25EZWxheSIsInpJbmRleCIsInZpc2liaWxpdHkiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJwYWRkaW5nQm90dG9tIiwiQWRkVG9DYWxlbmRhciIsImJ1dHRvbkxhYmVsIiwibWFyZ2luUmlnaHQiLCJocmVmIiwibWFwVXJsIiwibWF4V2lkdGgiLCJvdmVyZmxvd1giLCJ0ZXh0T3ZlcmZsb3ciLCJhZGRyZXNzTGluZTEiLCJyZWYiLCJib3hTaGFkb3ciLCJtYXAiLCJldiIsImluZGV4Iiwia2V5IiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsIlN0b3JpZXMiLCJQaWN0dXJlc0dyaWQiLCJtYXJnaW5Cb3R0b20iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJsb2NhbGVQYXJhbXMiLCJxdWVyeSIsImVtcHR5R3Vlc3RQYXJhbXMiLCJndWVzdElkIiwiZ3JlZXRpbmciLCJyZXEiLCJ1IiwiZ3Vlc3REYXRhIiwiZ3Vlc3RMaXN0IiwibWV0YSIsImxhc3RVcGRhdGVkQXQiLCJmaWx0ZXIiLCJwaWN0dXJlcyIsInNlbGVjdGVkUGljdHVyZSIsInNldFNlbGVjdGVkUGljdHVyZSIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJsb2FkZWRJbWFnZXNDb3VudCIsInNldExvYWRlZEltYWdlc0NvdW50IiwiaGFuZGxlU2VsZWN0UGljdHVyZSIsInBpY3R1cmUiLCJsb2FkSW1hZ2VzIiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJwcmV2Q291bnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImxlbmd0aCIsIkJsdXJoYXNoIiwiaGFzaCIsInJlc29sdXRpb25YIiwicmVzb2x1dGlvblkiLCJwdW5jaCIsIm9iamVjdEZpdCIsIkJyaWRlIiwiR3Jvb20iLCJTd2lwZXJDb3JlIiwidXNlIiwiQXV0b3BsYXkiLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwibW9kdWxlcyIsIlBhZ2luYXRpb24iLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwib25Td2lwZXIiLCJzd2lwZXIiLCJvblNsaWRlQ2hhbmdlIiwiU3dpcGVyU2xpZGUiLCJzaXRlTmFtZSIsInB1Ymxpc2hlZFRpbWUiLCJwcm9wZXJ0eSIsImNvbnRlbnQiLCJyZWwiLCJiYXNlQ29uZmlnIiwic2hvd0J1aWx0V2l0aEluZm8iLCJzaG93UXJDb2RlIiwiZm9vdGVyTG9nbyIsImZvb3RlckxvZ29UeXBlIiwiYWRkcmVzc0xpbmUyIiwic3VwcG9ydGVkTGFuZ3VhZ2VzIiwiY29kZSIsImxhYmVsIiwidHJhbnNsYXRpb25zIiwiZW4iLCJJMThuIiwiZm9yRWFjaCIsImxhbmd1YWdlT3B0aW9ucyIsInNldExvY2FsZSIsInBhcmFtcyIsIlRyYW5zIiwicHJvcHMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImkxOG5LZXkiLCJmYWxsYmFja0hvc3QiLCJwYXRoIiwic3RhcnRzV2l0aCIsInByb3RvY29sIiwiaG9zdCIsInNjaGVtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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LENBQ1QsQ0FBQyxFQUNSWixLQUFBO0lBQ0U2QyxDQUFDLEVBQUMsc1JBQXNSO0lBQ3hSRixJQUFJLEVBQUMsU0FBUztJQUFBcEMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1QsQ0FBQyxFQUNSWixLQUFBO0lBQ0U2QyxDQUFDLEVBQUMsaUpBQWlKO0lBQ25KRixJQUFJLEVBQUMsU0FBUztJQUFBcEMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1QsQ0FBQyxFQUNSWixLQUFBO0lBQ0U2QyxDQUFDLEVBQUMseUpBQXlKO0lBQzNKRixJQUFJLEVBQUMsU0FBUztJQUFBcEMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1QsQ0FBQyxFQUNSWixLQUFBO0lBQ0U2QyxDQUFDLEVBQUMsbUpBQW1KO0lBQ3JKRixJQUFJLEVBQUMsU0FBUztJQUFBcEMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1QsQ0FBQyxFQUNSWixLQUFBO0lBQ0U2QyxDQUFDLEVBQUMsc1VBQXNVO0lBQ3hVRixJQUFJLEVBQUMsU0FBUztJQUFBcEMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1QsQ0FBQyxFQUNSWixLQUFBO0lBQ0U2QyxDQUFDLEVBQUMsa1RBQWtUO0lBQ3BURixJQUFJLEVBQUMsU0FBUztJQUFBcEMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1QsQ0FBQyxFQUNSWixLQUFBO0lBQ0U2QyxDQUFDLEVB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Iiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbmNvbnN0IENvbGxlY3RHdWVzdEF0dGVuZGFuY2UgPSAoeyBzZXRTaG93TW9kYWwsIHNob3dNb2RhbCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthdHRlbmRpbmcsIHNldEF0dGVuZGluZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNjcmlwdFVybCA9XHJcbiAgICAnaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J4YXBOdG04SnYyUUNOWXQ0Q3FHSl9tVnBFRUtFUk85ZlhVOEhyVGV4dURXdGhteGlRRjlORmNrNnJJalBaLUxnZFJIZy9leGVjJztcclxuXHJcbiAgZnVuY3Rpb24gaHR0cFN0YXR1cyhzdGF0dXNDb2RlKSB7XHJcbiAgICBpZiAoc3RhdHVzQ29kZSA+PSAyMDAgJiYgc3RhdHVzQ29kZSA8PSAyOTkpIHtcclxuICAgICAgU3dhbC5maXJlKCdTdWNjZXNzIScsICdXZSBhcHByZWNpYXRlIHlvdXIgcmVzcG9uc2UhJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuICAgICAgc2V0QXR0ZW5kaW5nKCcnKTtcclxuICAgICAgc2V0RW1haWwoJycpO1xyXG4gICAgICBzZXROYW1lKCcnKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA+PSA0MDAgJiYgc3RhdHVzQ29kZSA8PSA0OTkpIHtcclxuICAgICAgU3dhbC5maXJlKCdFcnJvciEnLCAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4hJywgJ2Vycm9yJyk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPj0gNTAwKSB7XHJcbiAgICAgIFN3YWwuZmlyZSgnRXJyb3IhJywgJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluIScsICdlcnJvcicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICd1bmtub3duIHN0YXR1cyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBidWlsZENvcnNGcmVlVXJsKHRhcmdldCkge1xyXG4gICAgcmV0dXJuIGBodHRwczovL3Byb3h5LmNvcnMuc2gvJHt0YXJnZXR9YDtcclxuICB9XHJcbiAgY29uc3QgY29yc0ZyZWVVcmwgPSBidWlsZENvcnNGcmVlVXJsKHNjcmlwdFVybCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhYXR0ZW5kaW5nKSB7XHJcbiAgICAgIFN3YWwuZmlyZSgnJywgJ0FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkJywgJ2Vycm9yJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29yc0ZyZWVVcmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgYXR0ZW5kaW5nIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDIwODY5Mzg1NjlfMGAscmVzcG9uc2UsICdyZXBvbnNlJykpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICBodHRwU3RhdHVzKHJlc3BvbnNlLnN0YXR1cyk7XHJcblxyXG4gICAgICAvLyBSZXNwb25zZSBmcm9tIEdvb2dsZSBTY3JpcHRcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIFN3YWwuZmlyZSgnRXJyb3IhJywgJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluIScsICdlcnJvcicpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9J21vZGFsJ1xyXG4gICAgICB0YWJJbmRleD0nLTEnXHJcbiAgICAgIHJvbGU9J2RpYWxvZydcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBzaG93TW9kYWwgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtZGlhbG9nJyByb2xlPSdkb2N1bWVudCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQgIGdsYXNzbW9ycGhpc20nPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2xvc2UgZ3Vlc3QtbW9kYWwnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPSd0cnVlJz4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHknPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtX3RpdGxlIG1iLTQnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSW5mb3JtIFVzIG9mIHlvdXIgYXZhaWxhYmlsaXR5XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgbWItMyc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0zJz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nYXR0ZW5kaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJ1xyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgV2lsbCB5b3UgYmUgYXR0ZW5kaW5nP1xyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICByb3dzPSc0J1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgICAgICBpZD0nYXR0ZW5kaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdHRlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdHRlbmRpbmcoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nZ3Vlc3QtZm9ybS1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gJ1N1Ym1pdHRpbmcuLi4nIDogJ1N1Ym1pdCd9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbGxlY3RHdWVzdEF0dGVuZGFuY2U7XHJcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0JztmdW5jdGlvbiBfMHgzOTFkKCl7dmFyIF8weDJkOGE5OD1bJ21lc3NhZ2UnLCd0ZXN0JywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJzZob0JISngnLCdmdW5jdGlvbicsJ19hbGxvd2VkVG9TZW5kJywnMTVabUxWTGwnLCdfaXNVbmRlZmluZWQnLCcnLCdlbnYnLCdlbGFwc2VkJywnUE9TSVRJVkVfSU5GSU5JVFknLCcxLjAuMCcsJ2RhdGUnLCdfY29uc29sZV9uaW5qYScsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5Jywnbm9kZU1vZHVsZXMnLCdfYWRkUHJvcGVydHknLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ2NvbnNvbGUnLCdpc0FycmF5JywnYXJyYXknLCcxMzEyNzY2ZkZMTEFEJywncm9vdF9leHAnLCdjYWxsJywncm9vdF9leHBfaWQnLCdjb3VudCcsJ1N0cmluZycsJ3dhcm4nLCcnLCdhbGxTdHJMZW5ndGgnLCcyMEF1TVh3WCcsJ25hbWUnLCdsZXZlbCcsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJzE5Nzg0UlpXS0dkJywnc3RhY2tUcmFjZUxpbWl0JywnW29iamVjdFxcXFx4MjBTZXRdJywnTWFwJywnMzkxNXpEY1d6WCcsJ2hpdHMnLCdkaXNhYmxlZFRyYWNlJywnbG9jYXRpb24nLCdzdWJzdHInLCd1bmtub3duJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdfaXNQcmltaXRpdmVUeXBlJywnbWV0aG9kJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ19pbk5leHRFZGdlJywndW5zaGlmdCcsJ3N0cmluZ2lmeScsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnX2FkZEZ1bmN0aW9uc05vZGUnLCd2ZXJzaW9ucycsJ19yZWNvbm5lY3RUaW1lb3V0JywnX2RhdGVUb1N0cmluZycsJ3JlbWl4JywnMTIzMjI5N3NtSXdNbScsJ2hvc3RuYW1lJywnZGlzYWJsZWRMb2cnLCdwZXJmX2hvb2tzJywnY2FwcGVkJywnW29iamVjdFxcXFx4MjBEYXRlXScsJzE0MjUzaERwSW5tJywndGhlbicsJ2RlcHRoJywnaGFzT3duUHJvcGVydHknLCdub0Z1bmN0aW9ucycsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnTkVYVF9SVU5USU1FJywnX3BfJywnbWF0Y2gnLCdyZXBsYWNlJywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdqb2luJywnZWRnZScsJ3B1c2gnLCdudW1iZXInLCdfdHlwZScsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywncHJvY2VzcycsJ2Vycm9yJywnX3BfbGVuZ3RoJywnZG9ja2VyaXplZEFwcCcsJ3N0cmluZycsJ3NwbGl0JywnX3NldE5vZGVJZCcsJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZScsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCd0aW1lRW5kJywnX2lzTWFwJywncmVkdWNlTGltaXRzJywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdmdW5jTmFtZScsJ2NhdGNoJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnbm93JywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCc0MzJNaEhORk8nLCdfY29ubmVjdGVkJywndG9TdHJpbmcnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnZGF0YScsJ2hydGltZScsJ2VudW1lcmFibGUnLCdhc3RybycsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCdfaW5Ccm93c2VyJywndG90YWxTdHJMZW5ndGgnLCd0cmFjZScsJ05FR0FUSVZFX0lORklOSVRZJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ251bGwnLCdudXh0JywnX2hhc01hcE9uSXRzUGF0aCcsJ1xcXFx4MjBzZXJ2ZXInLCdwb3J0JywnbGVuZ3RoJywnX1dlYlNvY2tldENsYXNzJywncGFyZW50JywnbmVnYXRpdmVaZXJvJywnZWxlbWVudHMnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdnbG9iYWwnLCdjYXBwZWRFbGVtZW50cycsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ0hUTUxBbGxDb2xsZWN0aW9uJywnU3ltYm9sJywncGF0aCcsJ2Jvb2xlYW4nLCdTZXQnLCd0aW1lU3RhbXAnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdfcF9uYW1lJywnX1N5bWJvbCcsJ19rZXlTdHJSZWdFeHAnLCdfZGlzcG9zZVdlYnNvY2tldCcsJ2dldHRlcicsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdzeW1ib2wnLCdfb2JqZWN0VG9TdHJpbmcnLCdfc29ydFByb3BzJywncm9vdEV4cHJlc3Npb24nLCd3ZWJwYWNrJywnc29ydCcsJ051bWJlcicsJzpsb2dQb2ludElkOicsJzgzNzYzNjBuVEZmQ28nLCd2YWx1ZScsJ3Byb3RvdHlwZScsJ19wcm9wZXJ0eScsJ2F1dG9FeHBhbmQnLCdvYmplY3QnLCdfaXNTZXQnLCdzdHJMZW5ndGgnLCdfc29ja2V0JywnY292ZXJhZ2UnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ3dzOi8vJywnX2hhc1NldE9uSXRzUGF0aCcsJ2JpZ2ludCcsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ3Jlc29sdmVHZXR0ZXJzJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywndG9Mb3dlckNhc2UnLCd1bnJlZicsJ3R5cGUnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcsJ19zZW5kRXJyb3JNZXNzYWdlJywnNTM4ODZSQkJFZlcnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ19wcm9wZXJ0eU5hbWUnLCdjbG9zZScsJ3VuZGVmaW5lZCcsJ3Bvc2l0aXZlSW5maW5pdHknLCduYW4nLCdfYWRkTG9hZE5vZGUnLCdCb29sZWFuJywncHJvcHMnLCduZXh0LmpzJywnb25vcGVuJywnbG9nJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdyZWxvYWQnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCd0aW1lJywnZ2V0JywnY29uc3RydWN0b3InLCdfc2V0Tm9kZUxhYmVsJywnaW5kZXgnLCdbb2JqZWN0XFxcXHgyME1hcF0nLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiRGFtaWxhcmVcXFwiLFxcXCIxNjkuMjU0LjgwLjgwXFxcIixcXFwiMTcyLjMxLjExMi4xXFxcIl0sJ29ubWVzc2FnZScsJ2ZvckVhY2gnLCdub2RlJywnZ2V0UHJvdG90eXBlT2YnLCdCdWZmZXInLCc0NDMxMDQwQ1FIRXNvJywnXFxcXHgyMGJyb3dzZXInLCdfcmVnRXhwVG9TdHJpbmcnLCdpbmNsdWRlcycsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdkZWZhdWx0Jywnc2VyaWFsaXplJywnNjA5OTInLCdfX2VzJysnTW9kdWxlJywncGVyZm9ybWFuY2UnLCdiaW5kJywncmVhZHlTdGF0ZScsJ19jb25uZWN0aW5nJywnX251bWJlclJlZ0V4cCcsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdfaXNBcnJheScsJ29uZXJyb3InLCdob3N0JywnX0hUTUxBbGxDb2xsZWN0aW9uJywnX3dzJywnMTY5ODM0OTcwMTcxNScsJ3NlbmQnLCdjb25jYXQnLCdnYXRld2F5LmRvY2tlci5pbnRlcm5hbCcsJ2N1cnJlbnQnLCdvbmNsb3NlJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJzEyNy4wLjAuMScsJ2F1dG9FeHBhbmRMaW1pdCcsJ0Vycm9yJywnX2NhcElmU3RyaW5nJywnc29ydFByb3BzJywnX3VuZGVmaW5lZCddO18weDM5MWQ9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4MmQ4YTk4O307cmV0dXJuIF8weDM5MWQoKTt9dmFyIF8weDMwZDQ2Yz1fMHgzOTRiO2Z1bmN0aW9uIF8weDM5NGIoXzB4MTIyZjMyLF8weDU2OWYyOCl7dmFyIF8weDM5MWRmMz1fMHgzOTFkKCk7cmV0dXJuIF8weDM5NGI9ZnVuY3Rpb24oXzB4Mzk0YjM1LF8weDJmYmUxNil7XzB4Mzk0YjM1PV8weDM5NGIzNS0weGNjO3ZhciBfMHgxMTE4OTA9XzB4MzkxZGYzW18weDM5NGIzNV07cmV0dXJuIF8weDExMTg5MDt9LF8weDM5NGIoXzB4MTIyZjMyLF8weDU2OWYyOCk7fShmdW5jdGlvbihfMHgxZDNlNTMsXzB4MWYyNGU1KXt2YXIgXzB4NDMwYzZjPV8weDM5NGIsXzB4NDU5NWVjPV8weDFkM2U1MygpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NTUwNmJmPXBhcnNlSW50KF8weDQzMGM2YygweGVjKSkvMHgxKigtcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTk0KSkvMHgyKSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTI3KSkvMHgzKihwYXJzZUludChfMHg0MzBjNmMoMHgxMDUpKS8weDQpKy1wYXJzZUludChfMHg0MzBjNmMoMHgxYjApKS8weDUrLXBhcnNlSW50KF8weDQzMGM2YygweGU5KSkvMHg2KihwYXJzZUludChfMHg0MzBjNmMoMHhmYykpLzB4NykrLXBhcnNlSW50KF8weDQzMGM2YygweDEwYSkpLzB4OCoocGFyc2VJbnQoXzB4NDMwYzZjKDB4MTBlKSkvMHg5KSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTdlKSkvMHhhKy1wYXJzZUludChfMHg0MzBjNmMoMHgxMjEpKS8weGIqKC1wYXJzZUludChfMHg0MzBjNmMoMHgxNGIpKS8weGMpO2lmKF8weDU1MDZiZj09PV8weDFmMjRlNSlicmVhaztlbHNlIF8weDQ1OTVlY1sncHVzaCddKF8weDQ1OTVlY1snc2hpZnQnXSgpKTt9Y2F0Y2goXzB4MTAzYjRhKXtfMHg0NTk1ZWNbJ3B1c2gnXShfMHg0NTk1ZWNbJ3NoaWZ0J10oKSk7fX19KF8weDM5MWQsMHg5NmRjZikpO3ZhciBqPU9iamVjdFsnY3JlYXRlJ10sSD1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10sRz1PYmplY3RbXzB4MzBkNDZjKDB4MTZlKV0sZWU9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eU5hbWVzJ10sdGU9T2JqZWN0W18weDMwZDQ2YygweDFhZSldLG5lPU9iamVjdFsncHJvdG90eXBlJ11bXzB4MzBkNDZjKDB4MTJhKV0scmU9KF8weDFkNWZjNixfMHg3NDc4MWQsXzB4OGYwM2NkLF8weDQ5ZmY0Zik9Pnt2YXIgXzB4MTgwZGNkPV8weDMwZDQ2YztpZihfMHg3NDc4MWQmJnR5cGVvZiBfMHg3NDc4MWQ9PV8weDE4MGRjZCgweDE4Myl8fHR5cGVvZiBfMHg3NDc4MWQ9PV8weDE4MGRjZCgweGVhKSl7Zm9yKGxldCBfMHgxNmNkOTUgb2YgZWUoXzB4NzQ3ODFkKSkhbmVbJ2NhbGwnXShfMHgxZDVmYzYsXzB4MTZjZDk1KSYmXzB4MTZjZDk1IT09XzB4OGYwM2NkJiZIKF8weDFkNWZjNixfMHgxNmNkOTUseydnZXQnOigpPT5fMHg3NDc4MWRbXzB4MTZjZDk1XSwnZW51bWVyYWJsZSc6IShfMHg0OWZmNGY9RyhfMHg3NDc4MWQsXzB4MTZjZDk1KSl8fF8weDQ5ZmY0ZltfMHgxODBkY2QoMHgxNTEpXX0pO31yZXR1cm4gXzB4MWQ1ZmM2O30seD0oXzB4NTY4YmM4LF8weDJkZTFkNCxfMHg1YjRjNGYpPT4oXzB4NWI0YzRmPV8weDU2OGJjOCE9bnVsbD9qKHRlKF8weDU2OGJjOCkpOnt9LHJlKF8weDJkZTFkNHx8IV8weDU2OGJjOHx8IV8weDU2OGJjOFtfMHgzMGQ0NmMoMHhjZCldP0goXzB4NWI0YzRmLF8weDMwZDQ2YygweDFiNSkseyd2YWx1ZSc6XzB4NTY4YmM4LCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4NWI0YzRmLF8weDU2OGJjOCkpLFg9Y2xhc3N7Y29uc3RydWN0b3IoXzB4NDdmMzhjLF8weDVjMWIwNixfMHgzZjI4NTYsXzB4NDU3ZDNkLF8weDE4ZmY2NCl7dmFyIF8weDRiYjYxZD1fMHgzMGQ0NmM7dGhpc1tfMHg0YmI2MWQoMHgxNjUpXT1fMHg0N2YzOGMsdGhpc1tfMHg0YmI2MWQoMHhkNildPV8weDVjMWIwNix0aGlzW18weDRiYjYxZCgweDE1ZCldPV8weDNmMjg1Nix0aGlzW18weDRiYjYxZCgweGY2KV09XzB4NDU3ZDNkLHRoaXNbJ2RvY2tlcml6ZWRBcHAnXT1fMHgxOGZmNjQsdGhpc1tfMHg0YmI2MWQoMHhlYildPSEweDAsdGhpc1tfMHg0YmI2MWQoMHgxMzcpXT0hMHgwLHRoaXNbXzB4NGJiNjFkKDB4MTRjKV09ITB4MSx0aGlzW18weDRiYjYxZCgweGQxKV09ITB4MSx0aGlzWydfaW5OZXh0RWRnZSddPV8weDQ3ZjM4Y1tfMHg0YmI2MWQoMHgxMzgpXT8uW18weDRiYjYxZCgweGVmKV0/LltfMHg0YmI2MWQoMHgxMmQpXT09PSdlZGdlJyx0aGlzW18weDRiYjYxZCgweDE1NCldPSF0aGlzW18weDRiYjYxZCgweDE2NSldW18weDRiYjYxZCgweDEzOCldPy5bXzB4NGJiNjFkKDB4MTFkKV0/LltfMHg0YmI2MWQoMHgxYWQpXSYmIXRoaXNbXzB4NGJiNjFkKDB4MTE4KV0sdGhpc1snX1dlYlNvY2tldENsYXNzJ109bnVsbCx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPTB4MCx0aGlzW18weDRiYjYxZCgweDE0NSldPTB4MTQsdGhpc1tfMHg0YmI2MWQoMHgxNzQpXT0naHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsdGhpc1tfMHg0YmI2MWQoMHgxOTMpXT0odGhpc1tfMHg0YmI2MWQoMHgxNTQpXT9fMHg0YmI2MWQoMHgxNGEpOidDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcpK3RoaXNbXzB4NGJiNjFkKDB4MTc0KV07fWFzeW5jW18weDMwZDQ2YygweDEzMSldKCl7dmFyIF8weDFlOTBmMT1fMHgzMGQ0NmM7aWYodGhpc1tfMHgxZTkwZjEoMHgxNWYpXSlyZXR1cm4gdGhpc1tfMHgxZTkwZjEoMHgxNWYpXTtsZXQgXzB4NGFlNzdjO2lmKHRoaXNbXzB4MWU5MGYxKDB4MTU0KV18fHRoaXNbJ19pbk5leHRFZGdlJ10pXzB4NGFlNzdjPXRoaXNbXzB4MWU5MGYxKDB4MTY1KV1bJ1dlYlNvY2tldCddO2Vsc2V7aWYodGhpc1snZ2xvYmFsJ11bXzB4MWU5MGYxKDB4MTM4KV0/LlsnX1dlYlNvY2tldCddKV8weDRhZTc3Yz10aGlzWydnbG9iYWwnXVtfMHgxZTkwZjEoMHgxMzgpXT8uWydfV2ViU29ja2V0J107ZWxzZSB0cnl7bGV0IF8weDRjZWI5NT1hd2FpdCBpbXBvcnQoJ3BhdGgnKTtfMHg0YWU3N2M9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KCd1cmwnKSlbJ3BhdGhUb0ZpbGVVUkwnXShfMHg0Y2ViOTVbXzB4MWU5MGYxKDB4MTMyKV0odGhpc1tfMHgxZTkwZjEoMHhmNildLCd3cy9pbmRleC5qcycpKVsndG9TdHJpbmcnXSgpKSlbXzB4MWU5MGYxKDB4MWI1KV07fWNhdGNoe3RyeXtfMHg0YWU3N2M9cmVxdWlyZShyZXF1aXJlKF8weDFlOTBmMSgweDE2YSkpW18weDFlOTBmMSgweDEzMildKHRoaXNbJ25vZGVNb2R1bGVzJ10sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MWU5MGYxKDB4MWEzKSk7fX19cmV0dXJuIHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddPV8weDRhZTc3YyxfMHg0YWU3N2M7fVtfMHgzMGQ0NmMoMHgxYTEpXSgpe3ZhciBfMHg0OTA4OWE9XzB4MzBkNDZjO3RoaXNbXzB4NDkwODlhKDB4ZDEpXXx8dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPj10aGlzW18weDQ5MDg5YSgweDE0NSldfHwodGhpc1tfMHg0OTA4OWEoMHgxMzcpXT0hMHgxLHRoaXNbXzB4NDkwODlhKDB4ZDEpXT0hMHgwLHRoaXNbXzB4NDkwODlhKDB4MTFiKV0rKyx0aGlzW18weDQ5MDg5YSgweGQ4KV09bmV3IFByb21pc2UoKF8weDM0ZWFmYyxfMHgxNDQzMjQpPT57dmFyIF8weDg3NGZhND1fMHg0OTA4OWE7dGhpc1tfMHg4NzRmYTQoMHgxMzEpXSgpW18weDg3NGZhNCgweDEyOCldKF8weDRiYWY1OD0+e3ZhciBfMHg0MWRkYWM9XzB4ODc0ZmE0O2xldCBfMHgyNTc0M2I9bmV3IF8weDRiYWY1OChfMHg0MWRkYWMoMHgxODkpKyghdGhpc1snX2luQnJvd3NlciddJiZ0aGlzW18weDQxZGRhYygweDEzYildP18weDQxZGRhYygweGRjKTp0aGlzW18weDQxZGRhYygweGQ2KV0pKyc6Jyt0aGlzW18weDQxZGRhYygweDE1ZCldKTtfMHgyNTc0M2JbXzB4NDFkZGFjKDB4ZDUpXT0oKT0+e3ZhciBfMHgyYjRmNjU9XzB4NDFkZGFjO3RoaXNbXzB4MmI0ZjY1KDB4ZWIpXT0hMHgxLHRoaXNbXzB4MmI0ZjY1KDB4MTcyKV0oXzB4MjU3NDNiKSx0aGlzW18weDJiNGY2NSgweGY1KV0oKSxfMHgxNDQzMjQobmV3IEVycm9yKCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJykpO30sXzB4MjU3NDNiW18weDQxZGRhYygweDE5ZildPSgpPT57dmFyIF8weDQyMDgyYT1fMHg0MWRkYWM7dGhpc1tfMHg0MjA4MmEoMHgxNTQpXXx8XzB4MjU3NDNiW18weDQyMDgyYSgweDE4NildJiZfMHgyNTc0M2JbXzB4NDIwODJhKDB4MTg2KV1bJ3VucmVmJ10mJl8weDI1NzQzYltfMHg0MjA4MmEoMHgxODYpXVtfMHg0MjA4MmEoMHgxOTApXSgpLF8weDM0ZWFmYyhfMHgyNTc0M2IpO30sXzB4MjU3NDNiW18weDQxZGRhYygweGRlKV09KCk9Pnt2YXIgXzB4MTMyOTcyPV8weDQxZGRhYzt0aGlzW18weDEzMjk3MigweDEzNyldPSEweDAsdGhpc1tfMHgxMzI5NzIoMHgxNzIpXShfMHgyNTc0M2IpLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9LF8weDI1NzQzYltfMHg0MWRkYWMoMHgxYWIpXT1fMHgxYWZkMTE9Pnt2YXIgXzB4MThkNmI1PV8weDQxZGRhYzt0cnl7XzB4MWFmZDExJiZfMHgxYWZkMTFbXzB4MThkNmI1KDB4MTRmKV0mJnRoaXNbXzB4MThkNmI1KDB4MTU0KV0mJkpTT05bJ3BhcnNlJ10oXzB4MWFmZDExWydkYXRhJ10pW18weDE4ZDZiNSgweDExNildPT09XzB4MThkNmI1KDB4MWEyKSYmdGhpc1snZ2xvYmFsJ11bXzB4MThkNmI1KDB4MTExKV1bXzB4MThkNmI1KDB4MWEyKV0oKTt9Y2F0Y2h7fX07fSlbXzB4ODc0ZmE0KDB4MTI4KV0oXzB4MWIyNGQyPT4odGhpc1tfMHg4NzRmYTQoMHgxNGMpXT0hMHgwLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDEsdGhpc1tfMHg4NzRmYTQoMHhlYildPSEweDAsdGhpc1tfMHg4NzRmYTQoMHgxMWIpXT0weDAsXzB4MWIyNGQyKSlbXzB4ODc0ZmE0KDB4MTQ3KV0oXzB4MzdmNWEwPT4odGhpc1tfMHg4NzRmYTQoMHgxNGMpXT0hMHgxLHRoaXNbXzB4ODc0ZmE0KDB4ZDEpXT0hMHgxLGNvbnNvbGVbXzB4ODc0ZmE0KDB4MTAyKV0oXzB4ODc0ZmE0KDB4MTkyKSt0aGlzW18weDg3NGZhNCgweDE3NCldKSxfMHgxNDQzMjQobmV3IEVycm9yKCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnKyhfMHgzN2Y1YTAmJl8weDM3ZjVhMFtfMHg4NzRmYTQoMHhlNildKSkpKSk7fSkpO31bJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4NDlhNDYxKXt2YXIgXzB4NGY4ODY5PV8weDMwZDQ2Yzt0aGlzW18weDRmODg2OSgweDE0YyldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxO3RyeXtfMHg0OWE0NjFbXzB4NGY4ODY5KDB4ZGUpXT1udWxsLF8weDQ5YTQ2MVsnb25lcnJvciddPW51bGwsXzB4NDlhNDYxW18weDRmODg2OSgweDE5ZildPW51bGw7fWNhdGNoe310cnl7XzB4NDlhNDYxW18weDRmODg2OSgweGQwKV08MHgyJiZfMHg0OWE0NjFbXzB4NGY4ODY5KDB4MTk3KV0oKTt9Y2F0Y2h7fX1bJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKXt2YXIgXzB4MTU5NzliPV8weDMwZDQ2YztjbGVhclRpbWVvdXQodGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXSksISh0aGlzW18weDE1OTc5YigweDExYildPj10aGlzW18weDE1OTc5YigweDE0NSldKSYmKHRoaXNbXzB4MTU5NzliKDB4MTFlKV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHg1NTdiNjg9XzB4MTU5NzliO3RoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1snX2Nvbm5lY3RpbmcnXXx8KHRoaXNbJ19jb25uZWN0VG9Ib3N0Tm93J10oKSx0aGlzW18weDU1N2I2OCgweGQ4KV0/LltfMHg1NTdiNjgoMHgxNDcpXSgoKT0+dGhpc1tfMHg1NTdiNjgoMHhmNSldKCkpKTt9LDB4MWY0KSx0aGlzW18weDE1OTc5YigweDExZSldW18weDE1OTc5YigweDE5MCldJiZ0aGlzWydfcmVjb25uZWN0VGltZW91dCddW18weDE1OTc5YigweDE5MCldKCkpO31hc3luY1tfMHgzMGQ0NmMoMHhkYSldKF8weDM5ZTc4Mil7dmFyIF8weDQ4NjBmOT1fMHgzMGQ0NmM7dHJ5e2lmKCF0aGlzWydfYWxsb3dlZFRvU2VuZCddKXJldHVybjt0aGlzW18weDQ4NjBmOSgweDEzNyldJiZ0aGlzW18weDQ4NjBmOSgweDFhMSldKCksKGF3YWl0IHRoaXNbJ193cyddKVtfMHg0ODYwZjkoMHhkYSldKEpTT05bJ3N0cmluZ2lmeSddKF8weDM5ZTc4MikpO31jYXRjaChfMHgxZTE3ZTApe2NvbnNvbGVbXzB4NDg2MGY5KDB4MTAyKV0odGhpc1tfMHg0ODYwZjkoMHgxOTMpXSsnOlxcXFx4MjAnKyhfMHgxZTE3ZTAmJl8weDFlMTdlMFtfMHg0ODYwZjkoMHhlNildKSksdGhpc1tfMHg0ODYwZjkoMHhlYildPSEweDEsdGhpc1tfMHg0ODYwZjkoMHhmNSldKCk7fX19O2Z1bmN0aW9uIGIoXzB4NDZkMGIxLF8weDRjMThlYixfMHgzMjFmZjcsXzB4Njc2OTExLF8weDRjODI5OSxfMHg1NDI1NWEpe3ZhciBfMHgzOTM3ZTc9XzB4MzBkNDZjO2xldCBfMHg1MGUwZjk9XzB4MzIxZmY3W18weDM5MzdlNygweDEzZCldKCcsJylbJ21hcCddKF8weDQxZDg3PT57dmFyIF8weDUxNzlhMj1fMHgzOTM3ZTc7dHJ5e18weDQ2ZDBiMVsnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddfHwoKF8weDRjODI5OT09PV8weDUxNzlhMigweDE5ZSl8fF8weDRjODI5OT09PV8weDUxNzlhMigweDEyMCl8fF8weDRjODI5OT09PV8weDUxNzlhMigweDE1MikpJiYoXzB4NGM4Mjk5Kz0hXzB4NDZkMGIxW18weDUxNzlhMigweDEzOCldPy5bXzB4NTE3OWEyKDB4MTFkKV0/LltfMHg1MTc5YTIoMHgxYWQpXSYmXzB4NDZkMGIxW18weDUxNzlhMigweDEzOCldPy5bJ2VudiddPy5bXzB4NTE3OWEyKDB4MTJkKV0hPT0nZWRnZSc/XzB4NTE3OWEyKDB4MWIxKTpfMHg1MTc5YTIoMHgxNWMpKSxfMHg0NmQwYjFbJ19jb25zb2xlX25pbmphX3Nlc3Npb24nXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4NGM4Mjk5fSk7bGV0IF8weDdhYWJiZj1uZXcgWChfMHg0NmQwYjEsXzB4NGMxOGViLF8weDQxZDg3LF8weDY3NjkxMSxfMHg1NDI1NWEpO3JldHVybiBfMHg3YWFiYmZbJ3NlbmQnXVtfMHg1MTc5YTIoMHhjZildKF8weDdhYWJiZik7fWNhdGNoKF8weDFjYjA2Zil7cmV0dXJuIGNvbnNvbGVbXzB4NTE3OWEyKDB4MTAyKV0oJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JyxfMHgxY2IwNmYmJl8weDFjYjA2ZlsnbWVzc2FnZSddKSwoKT0+e307fX0pO3JldHVybiBfMHgyNzdlMDQ9Pl8weDUwZTBmOVtfMHgzOTM3ZTcoMHgxYWMpXShfMHhhNDJmYj0+XzB4YTQyZmIoXzB4Mjc3ZTA0KSk7fWZ1bmN0aW9uIFcoXzB4MWVjNWMyKXt2YXIgXzB4M2YwNDk1PV8weDMwZDQ2YztsZXQgXzB4MTE0MjdmPWZ1bmN0aW9uKF8weDNkNTU4MyxfMHhmNTBhNyl7cmV0dXJuIF8weGY1MGE3LV8weDNkNTU4Mzt9LF8weDI1NTE1ZTtpZihfMHgxZWM1YzJbXzB4M2YwNDk1KDB4Y2UpXSlfMHgyNTUxNWU9ZnVuY3Rpb24oKXt2YXIgXzB4Mzg0MDU4PV8weDNmMDQ5NTtyZXR1cm4gXzB4MWVjNWMyW18weDM4NDA1OCgweGNlKV1bJ25vdyddKCk7fTtlbHNle2lmKF8weDFlYzVjMltfMHgzZjA0OTUoMHgxMzgpXSYmXzB4MWVjNWMyW18weDNmMDQ5NSgweDEzOCldW18weDNmMDQ5NSgweDE1MCldJiZfMHgxZWM1YzJbXzB4M2YwNDk1KDB4MTM4KV0/LltfMHgzZjA0OTUoMHhlZildPy5bXzB4M2YwNDk1KDB4MTJkKV0hPT1fMHgzZjA0OTUoMHgxMzMpKV8weDI1NTE1ZT1mdW5jdGlvbigpe3ZhciBfMHg0YjlhOGM9XzB4M2YwNDk1O3JldHVybiBfMHgxZWM1YzJbXzB4NGI5YThjKDB4MTM4KV1bJ2hydGltZSddKCk7fSxfMHgxMTQyN2Y9ZnVuY3Rpb24oXzB4MTM0MGYyLF8weDQ1ZTkwMCl7cmV0dXJuIDB4M2U4KihfMHg0NWU5MDBbMHgwXS1fMHgxMzQwZjJbMHgwXSkrKF8weDQ1ZTkwMFsweDFdLV8weDEzNDBmMlsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHg0YTE5Yzh9PXJlcXVpcmUoXzB4M2YwNDk1KDB4MTI0KSk7XzB4MjU1MTVlPWZ1bmN0aW9uKCl7dmFyIF8weDQ5NTU3Mj1fMHgzZjA0OTU7cmV0dXJuIF8weDRhMTljOFtfMHg0OTU1NzIoMHgxNDkpXSgpO307fWNhdGNoe18weDI1NTE1ZT1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDExNDI3ZiwndGltZVN0YW1wJzpfMHgyNTUxNWUsJ25vdyc6KCk9PkRhdGVbXzB4M2YwNDk1KDB4MTQ5KV0oKX07fWZ1bmN0aW9uIEooXzB4MmM5OWZkLF8weDEyOThmOSxfMHg3YTQ0NTApe3ZhciBfMHgyYjY1NjA9XzB4MzBkNDZjO2lmKF8weDJjOTlmZFtfMHgyYjY1NjAoMHgxOGMpXSE9PXZvaWQgMHgwKXJldHVybiBfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MThjKV07bGV0IF8weDE3ZGUyOD1fMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MTM4KV0/LlsndmVyc2lvbnMnXT8uW18weDJiNjU2MCgweDFhZCldfHxfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MTM4KV0/LltfMHgyYjY1NjAoMHhlZildPy5bXzB4MmI2NTYwKDB4MTJkKV09PT0nZWRnZSc7cmV0dXJuIF8weDE3ZGUyOCYmXzB4N2E0NDUwPT09XzB4MmI2NTYwKDB4MTVhKT9fMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MThjKV09ITB4MTpfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MThjKV09XzB4MTdkZTI4fHwhXzB4MTI5OGY5fHxfMHgyYzk5ZmRbJ2xvY2F0aW9uJ10/LlsnaG9zdG5hbWUnXSYmXzB4MTI5OGY5W18weDJiNjU2MCgweDFiMyldKF8weDJjOTlmZFtfMHgyYjY1NjAoMHgxMTEpXVtfMHgyYjY1NjAoMHgxMjIpXSksXzB4MmM5OWZkW18weDJiNjU2MCgweDE4YyldO31mdW5jdGlvbiBZKF8weDMxOTc1MSxfMHg1ZDI2N2EsXzB4MjQwOGJhLF8weDU2MzUwNCl7dmFyIF8weDQyNDhkNj1fMHgzMGQ0NmM7XzB4MzE5NzUxPV8weDMxOTc1MSxfMHg1ZDI2N2E9XzB4NWQyNjdhLF8weDI0MDhiYT1fMHgyNDA4YmEsXzB4NTYzNTA0PV8weDU2MzUwNDtsZXQgXzB4NWM2YmE0PVcoXzB4MzE5NzUxKSxfMHg1ZGVhZDU9XzB4NWM2YmE0W18weDQyNDhkNigweGYwKV0sXzB4Mjk5ZGEzPV8weDVjNmJhNFsndGltZVN0YW1wJ107Y2xhc3MgXzB4MzE4N2E3e2NvbnN0cnVjdG9yKCl7dmFyIF8weDU0YzU0Yj1fMHg0MjQ4ZDY7dGhpc1tfMHg1NGM1NGIoMHgxNzEpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbXzB4NTRjNTRiKDB4ZDIpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbJ19xdW90ZWRSZWdFeHAnXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDU0YzU0YigweGU1KV09XzB4MzE5NzUxW18weDU0YzU0YigweDE5OCldLHRoaXNbXzB4NTRjNTRiKDB4ZDcpXT1fMHgzMTk3NTFbXzB4NTRjNTRiKDB4MTY4KV0sdGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddPU9iamVjdFtfMHg1NGM1NGIoMHgxNmUpXSx0aGlzW18weDU0YzU0YigweDEyYyldPU9iamVjdFtfMHg1NGM1NGIoMHgxNTgpXSx0aGlzW18weDU0YzU0YigweDE3MCldPV8weDMxOTc1MVtfMHg1NGM1NGIoMHgxNjkpXSx0aGlzW18weDU0YzU0YigweDFiMildPVJlZ0V4cFsncHJvdG90eXBlJ11bXzB4NTRjNTRiKDB4MTRkKV0sdGhpc1tfMHg1NGM1NGIoMHgxMWYpXT1EYXRlWydwcm90b3R5cGUnXVtfMHg1NGM1NGIoMHgxNGQpXTt9W18weDQyNDhkNigweDFiNildKF8weDQzYmZjNyxfMHgyNWQ0NTEsXzB4MWU3MWM1LF8weDUwOGEwZil7dmFyIF8weDEzNjY5Mj1fMHg0MjQ4ZDYsXzB4MjJmN2I4PXRoaXMsXzB4MjdhNDczPV8weDFlNzFjNVsnYXV0b0V4cGFuZCddO2Z1bmN0aW9uIF8weDQxMmJmZShfMHgxNTYxZjcsXzB4MmEwOTg3LF8weDU4ZjEzMCl7dmFyIF8weDIxYzkxZD1fMHgzOTRiO18weDJhMDk4N1tfMHgyMWM5MWQoMHgxOTEpXT1fMHgyMWM5MWQoMHgxMTMpLF8weDJhMDk4N1tfMHgyMWM5MWQoMHgxMzkpXT1fMHgxNTYxZjdbXzB4MjFjOTFkKDB4ZTYpXSxfMHgxYzM2YjA9XzB4NThmMTMwWydub2RlJ11bXzB4MjFjOTFkKDB4ZGQpXSxfMHg1OGYxMzBbXzB4MjFjOTFkKDB4MWFkKV1bXzB4MjFjOTFkKDB4ZGQpXT1fMHgyYTA5ODcsXzB4MjJmN2I4W18weDIxYzkxZCgweDE0MCldKF8weDJhMDk4NyxfMHg1OGYxMzApO310cnl7XzB4MWU3MWM1W18weDEzNjY5MigweDEwNyldKyssXzB4MWU3MWM1WydhdXRvRXhwYW5kJ10mJl8weDFlNzFjNVtfMHgxMzY2OTIoMHhlOCldW18weDEzNjY5MigweDEzNCldKF8weDI1ZDQ1MSk7dmFyIF8weDMxNTc0MyxfMHg1NDFhYTgsXzB4M2NjZWQ5LF8weDJhMzRhMSxfMHgyMGI0ZjI9W10sXzB4NGRhNjNiPVtdLF8weDU1Njk3OSxfMHgyZDJkNmQ9dGhpc1tfMHgxMzY2OTIoMHgxMzYpXShfMHgyNWQ0NTEpLF8weGQ4MzJjNT1fMHgyZDJkNmQ9PT0nYXJyYXknLF8weDI2OGM0MD0hMHgxLF8weDEzMGYzZT1fMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHhlYSksXzB4MzY5YjBlPXRoaXNbXzB4MTM2NjkyKDB4MTE1KV0oXzB4MmQyZDZkKSxfMHg0OTg0MTg9dGhpc1snX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnXShfMHgyZDJkNmQpLF8weDM0MGY4Mz1fMHgzNjliMGV8fF8weDQ5ODQxOCxfMHgyNDkzYmU9e30sXzB4MzZmM2NjPTB4MCxfMHgzYTJmZGE9ITB4MSxfMHgxYzM2YjAsXzB4MzQ4YmYxPS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTI5KV0pe2lmKF8weGQ4MzJjNSl7aWYoXzB4NTQxYWE4PV8weDI1ZDQ1MVtfMHgxMzY2OTIoMHgxNWUpXSxfMHg1NDFhYTg+XzB4MWU3MWM1W18weDEzNjY5MigweDE2MildKXtmb3IoXzB4M2NjZWQ5PTB4MCxfMHgyYTM0YTE9XzB4MWU3MWM1WydlbGVtZW50cyddLF8weDMxNTc0Mz1fMHgzY2NlZDk7XzB4MzE1NzQzPF8weDJhMzRhMTtfMHgzMTU3NDMrKylfMHg0ZGE2M2JbXzB4MTM2NjkyKDB4MTM0KV0oXzB4MjJmN2I4W18weDEzNjY5MigweGY3KV0oXzB4MjBiNGYyLF8weDI1ZDQ1MSxfMHgyZDJkNmQsXzB4MzE1NzQzLF8weDFlNzFjNSkpO18weDQzYmZjN1tfMHgxMzY2OTIoMHgxNjYpXT0hMHgwO31lbHNle2ZvcihfMHgzY2NlZDk9MHgwLF8weDJhMzRhMT1fMHg1NDFhYTgsXzB4MzE1NzQzPV8weDNjY2VkOTtfMHgzMTU3NDM8XzB4MmEzNGExO18weDMxNTc0MysrKV8weDRkYTYzYltfMHgxMzY2OTIoMHgxMzQpXShfMHgyMmY3YjhbXzB4MTM2NjkyKDB4ZjcpXShfMHgyMGI0ZjIsXzB4MjVkNDUxLF8weDJkMmQ2ZCxfMHgzMTU3NDMsXzB4MWU3MWM1KSk7fV8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNzUpXSs9XzB4NGRhNjNiWydsZW5ndGgnXTt9aWYoIShfMHgyZDJkNmQ9PT0nbnVsbCd8fF8weDJkMmQ2ZD09PV8weDEzNjY5MigweDE5OCkpJiYhXzB4MzY5YjBlJiZfMHgyZDJkNmQhPT1fMHgxMzY2OTIoMHgxMDEpJiZfMHgyZDJkNmQhPT1fMHgxMzY2OTIoMHgxYWYpJiZfMHgyZDJkNmQhPT0nYmlnaW50Jyl7dmFyIF8weDJjYzdjMz1fMHg1MDhhMGZbXzB4MTM2NjkyKDB4MTlkKV18fF8weDFlNzFjNVsncHJvcHMnXTtpZih0aGlzW18weDEzNjY5MigweDE4NCldKF8weDI1ZDQ1MSk/KF8weDMxNTc0Mz0weDAsXzB4MjVkNDUxW18weDEzNjY5MigweDFhYyldKGZ1bmN0aW9uKF8weDViNTExMCl7dmFyIF8weDU4YzNjYj1fMHgxMzY2OTI7aWYoXzB4MzZmM2NjKyssXzB4MWU3MWM1W18weDU4YzNjYigweDE3NSldKyssXzB4MzZmM2NjPl8weDJjYzdjMyl7XzB4M2EyZmRhPSEweDA7cmV0dXJuO31pZighXzB4MWU3MWM1W18weDU4YzNjYigweDE1MyldJiZfMHgxZTcxYzVbXzB4NThjM2NiKDB4MTgyKV0mJl8weDFlNzFjNVtfMHg1OGMzY2IoMHgxNzUpXT5fMHgxZTcxYzVbXzB4NThjM2NiKDB4ZTEpXSl7XzB4M2EyZmRhPSEweDA7cmV0dXJuO31fMHg0ZGE2M2JbXzB4NThjM2NiKDB4MTM0KV0oXzB4MjJmN2I4W18weDU4YzNjYigweGY3KV0oXzB4MjBiNGYyLF8weDI1ZDQ1MSxfMHg1OGMzY2IoMHgxNmMpLF8weDMxNTc0MysrLF8weDFlNzFjNSxmdW5jdGlvbihfMHhmY2I1YzUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHhmY2I1YzU7fTt9KF8weDViNTExMCkpKTt9KSk6dGhpc1tfMHgxMzY2OTIoMHgxNDMpXShfMHgyNWQ0NTEpJiZfMHgyNWQ0NTFbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHgyMDU2ZjUsXzB4MzEzMDEwKXt2YXIgXzB4NTVhN2ZkPV8weDEzNjY5MjtpZihfMHgzNmYzY2MrKyxfMHgxZTcxYzVbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgzNmYzY2M+XzB4MmNjN2MzKXtfMHgzYTJmZGE9ITB4MDtyZXR1cm47fWlmKCFfMHgxZTcxYzVbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXSYmXzB4MWU3MWM1WydhdXRvRXhwYW5kJ10mJl8weDFlNzFjNVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgxZTcxYzVbXzB4NTVhN2ZkKDB4ZTEpXSl7XzB4M2EyZmRhPSEweDA7cmV0dXJuO312YXIgXzB4MjdiNzU1PV8weDMxMzAxMFsndG9TdHJpbmcnXSgpO18weDI3Yjc1NVsnbGVuZ3RoJ10+MHg2NCYmKF8weDI3Yjc1NT1fMHgyN2I3NTVbJ3NsaWNlJ10oMHgwLDB4NjQpKycuLi4nKSxfMHg0ZGE2M2JbXzB4NTVhN2ZkKDB4MTM0KV0oXzB4MjJmN2I4W18weDU1YTdmZCgweGY3KV0oXzB4MjBiNGYyLF8weDI1ZDQ1MSxfMHg1NWE3ZmQoMHgxMGQpLF8weDI3Yjc1NSxfMHgxZTcxYzUsZnVuY3Rpb24oXzB4NThkZGU5KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4NThkZGU5O307fShfMHgyMDU2ZjUpKSk7fSksIV8weDI2OGM0MCl7dHJ5e2ZvcihfMHg1NTY5NzkgaW4gXzB4MjVkNDUxKWlmKCEoXzB4ZDgzMmM1JiZfMHgzNDhiZjFbXzB4MTM2NjkyKDB4ZTcpXShfMHg1NTY5NzkpKSYmIXRoaXNbXzB4MTM2NjkyKDB4ZjgpXShfMHgyNWQ0NTEsXzB4NTU2OTc5LF8weDFlNzFjNSkpe2lmKF8weDM2ZjNjYysrLF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNzUpXSsrLF8weDM2ZjNjYz5fMHgyY2M3YzMpe18weDNhMmZkYT0hMHgwO2JyZWFrO31pZighXzB4MWU3MWM1W18weDEzNjY5MigweDE1MyldJiZfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTgyKV0mJl8weDFlNzFjNVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgxZTcxYzVbXzB4MTM2NjkyKDB4ZTEpXSl7XzB4M2EyZmRhPSEweDA7YnJlYWs7fV8weDRkYTYzYltfMHgxMzY2OTIoMHgxMzQpXShfMHgyMmY3YjhbXzB4MTM2NjkyKDB4MTA4KV0oXzB4MjBiNGYyLF8weDI0OTNiZSxfMHgyNWQ0NTEsXzB4MmQyZDZkLF8weDU1Njk3OSxfMHgxZTcxYzUpKTt9fWNhdGNoe31pZihfMHgyNDkzYmVbXzB4MTM2NjkyKDB4MTNhKV09ITB4MCxfMHgxMzBmM2UmJihfMHgyNDkzYmVbXzB4MTM2NjkyKDB4MTZmKV09ITB4MCksIV8weDNhMmZkYSl7dmFyIF8weDM3OWFkOD1bXVtfMHgxMzY2OTIoMHhkYildKHRoaXNbXzB4MTM2NjkyKDB4MTJjKV0oXzB4MjVkNDUxKSlbXzB4MTM2NjkyKDB4ZGIpXSh0aGlzW18weDEzNjY5MigweDE0ZSldKF8weDI1ZDQ1MSkpO2ZvcihfMHgzMTU3NDM9MHgwLF8weDU0MWFhOD1fMHgzNzlhZDhbXzB4MTM2NjkyKDB4MTVlKV07XzB4MzE1NzQzPF8weDU0MWFhODtfMHgzMTU3NDMrKylpZihfMHg1NTY5Nzk9XzB4Mzc5YWQ4W18weDMxNTc0M10sIShfMHhkODMyYzUmJl8weDM0OGJmMVtfMHgxMzY2OTIoMHhlNyldKF8weDU1Njk3OVtfMHgxMzY2OTIoMHgxNGQpXSgpKSkmJiF0aGlzW18weDEzNjY5MigweGY4KV0oXzB4MjVkNDUxLF8weDU1Njk3OSxfMHgxZTcxYzUpJiYhXzB4MjQ5M2JlW18weDEzNjY5MigweDEyZSkrXzB4NTU2OTc5W18weDEzNjY5MigweDE0ZCldKCldKXtpZihfMHgzNmYzY2MrKyxfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTc1KV0rKyxfMHgzNmYzY2M+XzB4MmNjN2MzKXtfMHgzYTJmZGE9ITB4MDticmVhazt9aWYoIV8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNTMpXSYmXzB4MWU3MWM1W18weDEzNjY5MigweDE4MildJiZfMHgxZTcxYzVbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4MWU3MWM1W18weDEzNjY5MigweGUxKV0pe18weDNhMmZkYT0hMHgwO2JyZWFrO31fMHg0ZGE2M2JbJ3B1c2gnXShfMHgyMmY3YjhbXzB4MTM2NjkyKDB4MTA4KV0oXzB4MjBiNGYyLF8weDI0OTNiZSxfMHgyNWQ0NTEsXzB4MmQyZDZkLF8weDU1Njk3OSxfMHgxZTcxYzUpKTt9fX19fWlmKF8weDQzYmZjN1tfMHgxMzY2OTIoMHgxOTEpXT1fMHgyZDJkNmQsXzB4MzQwZjgzPyhfMHg0M2JmYzdbJ3ZhbHVlJ109XzB4MjVkNDUxWyd2YWx1ZU9mJ10oKSx0aGlzW18weDEzNjY5MigweGUzKV0oXzB4MmQyZDZkLF8weDQzYmZjNyxfMHgxZTcxYzUsXzB4NTA4YTBmKSk6XzB4MmQyZDZkPT09XzB4MTM2NjkyKDB4ZjMpP18weDQzYmZjN1tfMHgxMzY2OTIoMHgxN2YpXT10aGlzW18weDEzNjY5MigweDExZildW18weDEzNjY5MigweGZlKV0oXzB4MjVkNDUxKTpfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHgxOGIpP18weDQzYmZjN1tfMHgxMzY2OTIoMHgxN2YpXT1fMHgyNWQ0NTFbJ3RvU3RyaW5nJ10oKTpfMHgyZDJkNmQ9PT0nUmVnRXhwJz9fMHg0M2JmYzdbXzB4MTM2NjkyKDB4MTdmKV09dGhpc1tfMHgxMzY2OTIoMHgxYjIpXVsnY2FsbCddKF8weDI1ZDQ1MSk6XzB4MmQyZDZkPT09XzB4MTM2NjkyKDB4MTc2KSYmdGhpc1tfMHgxMzY2OTIoMHgxNzApXT9fMHg0M2JmYzdbXzB4MTM2NjkyKDB4MTdmKV09dGhpc1tfMHgxMzY2OTIoMHgxNzApXVtfMHgxMzY2OTIoMHgxODApXVtfMHgxMzY2OTIoMHgxNGQpXVtfMHgxMzY2OTIoMHhmZSldKF8weDI1ZDQ1MSk6IV8weDFlNzFjNVtfMHgxMzY2OTIoMHgxMjkpXSYmIShfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHgxNTkpfHxfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHgxOTgpKSYmKGRlbGV0ZSBfMHg0M2JmYzdbJ3ZhbHVlJ10sXzB4NDNiZmM3W18weDEzNjY5MigweDEyNSldPSEweDApLF8weDNhMmZkYSYmKF8weDQzYmZjN1snY2FwcGVkUHJvcHMnXT0hMHgwKSxfMHgxYzM2YjA9XzB4MWU3MWM1W18weDEzNjY5MigweDFhZCldW18weDEzNjY5MigweGRkKV0sXzB4MWU3MWM1W18weDEzNjY5MigweDFhZCldW18weDEzNjY5MigweGRkKV09XzB4NDNiZmM3LHRoaXNbXzB4MTM2NjkyKDB4MTQwKV0oXzB4NDNiZmM3LF8weDFlNzFjNSksXzB4NGRhNjNiW18weDEzNjY5MigweDE1ZSldKXtmb3IoXzB4MzE1NzQzPTB4MCxfMHg1NDFhYTg9XzB4NGRhNjNiW18weDEzNjY5MigweDE1ZSldO18weDMxNTc0MzxfMHg1NDFhYTg7XzB4MzE1NzQzKyspXzB4NGRhNjNiW18weDMxNTc0M10oXzB4MzE1NzQzKTt9XzB4MjBiNGYyW18weDEzNjY5MigweDE1ZSldJiYoXzB4NDNiZmM3Wydwcm9wcyddPV8weDIwYjRmMik7fWNhdGNoKF8weGNiMmYxZil7XzB4NDEyYmZlKF8weGNiMmYxZixfMHg0M2JmYzcsXzB4MWU3MWM1KTt9cmV0dXJuIHRoaXNbXzB4MTM2NjkyKDB4ZGYpXShfMHgyNWQ0NTEsXzB4NDNiZmM3KSx0aGlzW18weDEzNjY5MigweDEwOSldKF8weDQzYmZjNyxfMHgxZTcxYzUpLF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxYWQpXVtfMHgxMzY2OTIoMHhkZCldPV8weDFjMzZiMCxfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTA3KV0tLSxfMHgxZTcxYzVbJ2F1dG9FeHBhbmQnXT1fMHgyN2E0NzMsXzB4MWU3MWM1WydhdXRvRXhwYW5kJ10mJl8weDFlNzFjNVtfMHgxMzY2OTIoMHhlOCldWydwb3AnXSgpLF8weDQzYmZjNzt9W18weDQyNDhkNigweDE0ZSldKF8weDM2ZmQ2NSl7dmFyIF8weDNhNzBiMD1fMHg0MjQ4ZDY7cmV0dXJuIE9iamVjdFtfMHgzYTcwYjAoMHgxOGUpXT9PYmplY3RbJ2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDM2ZmQ2NSk6W107fVtfMHg0MjQ4ZDYoMHgxODQpXShfMHgyZTY1M2Qpe3ZhciBfMHgzZmM5YzE9XzB4NDI0OGQ2O3JldHVybiEhKF8weDJlNjUzZCYmXzB4MzE5NzUxWydTZXQnXSYmdGhpc1tfMHgzZmM5YzEoMHgxNzcpXShfMHgyZTY1M2QpPT09XzB4M2ZjOWMxKDB4MTBjKSYmXzB4MmU2NTNkW18weDNmYzljMSgweDFhYyldKTt9W18weDQyNDhkNigweGY4KV0oXzB4NTJkNmJhLF8weDU3ZjI2ZSxfMHhmZjVhYjMpe3ZhciBfMHhkMDFmNGI9XzB4NDI0OGQ2O3JldHVybiBfMHhmZjVhYjNbXzB4ZDAxZjRiKDB4MTJiKV0/dHlwZW9mIF8weDUyZDZiYVtfMHg1N2YyNmVdPT1fMHhkMDFmNGIoMHhlYSk6ITB4MTt9W18weDQyNDhkNigweDEzNildKF8weDg5YTM1Myl7dmFyIF8weDNjMzMzYz1fMHg0MjQ4ZDYsXzB4NDVhNzkwPScnO3JldHVybiBfMHg0NWE3OTA9dHlwZW9mIF8weDg5YTM1MyxfMHg0NWE3OTA9PT1fMHgzYzMzM2MoMHgxODMpP3RoaXNbXzB4M2MzMzNjKDB4MTc3KV0oXzB4ODlhMzUzKT09PV8weDNjMzMzYygweDExNCk/XzB4NDVhNzkwPV8weDNjMzMzYygweGZiKTp0aGlzW18weDNjMzMzYygweDE3NyldKF8weDg5YTM1Myk9PT1fMHgzYzMzM2MoMHgxMjYpP18weDQ1YTc5MD1fMHgzYzMzM2MoMHhmMyk6dGhpc1tfMHgzYzMzM2MoMHgxNzcpXShfMHg4OWEzNTMpPT09XzB4M2MzMzNjKDB4MTQxKT9fMHg0NWE3OTA9XzB4M2MzMzNjKDB4MThiKTpfMHg4OWEzNTM9PT1udWxsP18weDQ1YTc5MD1fMHgzYzMzM2MoMHgxNTkpOl8weDg5YTM1M1tfMHgzYzMzM2MoMHgxYTYpXSYmKF8weDQ1YTc5MD1fMHg4OWEzNTNbXzB4M2MzMzNjKDB4MWE2KV1bXzB4M2MzMzNjKDB4MTA2KV18fF8weDQ1YTc5MCk6XzB4NDVhNzkwPT09J3VuZGVmaW5lZCcmJnRoaXNbXzB4M2MzMzNjKDB4ZDcpXSYmXzB4ODlhMzUzIGluc3RhbmNlb2YgdGhpc1tfMHgzYzMzM2MoMHhkNyldJiYoXzB4NDVhNzkwPV8weDNjMzMzYygweDE2OCkpLF8weDQ1YTc5MDt9W18weDQyNDhkNigweDE3NyldKF8weGIyOGI1KXt2YXIgXzB4MmQ2ZTgxPV8weDQyNDhkNjtyZXR1cm4gT2JqZWN0W18weDJkNmU4MSgweDE4MCldW18weDJkNmU4MSgweDE0ZCldWydjYWxsJ10oXzB4YjI4YjUpO31bJ19pc1ByaW1pdGl2ZVR5cGUnXShfMHg1NzhlZWUpe3ZhciBfMHgxNTNkYWM9XzB4NDI0OGQ2O3JldHVybiBfMHg1NzhlZWU9PT1fMHgxNTNkYWMoMHgxNmIpfHxfMHg1NzhlZWU9PT1fMHgxNTNkYWMoMHgxM2MpfHxfMHg1NzhlZWU9PT1fMHgxNTNkYWMoMHgxMzUpO31bXzB4NDI0OGQ2KDB4MTYzKV0oXzB4MTMyNTBiKXt2YXIgXzB4Mjg5ODQzPV8weDQyNDhkNjtyZXR1cm4gXzB4MTMyNTBiPT09XzB4Mjg5ODQzKDB4MTljKXx8XzB4MTMyNTBiPT09J1N0cmluZyd8fF8weDEzMjUwYj09PV8weDI4OTg0MygweDE3Yyk7fVtfMHg0MjQ4ZDYoMHhmNyldKF8weDQ1YjE5NixfMHg0MTQ1NDgsXzB4MzlkYzNlLF8weDM1NzMwZixfMHg0MTMwMjUsXzB4M2MwYWIzKXt2YXIgXzB4NWI5N2YyPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDRhNGU0Yil7dmFyIF8weDIxZjZjNz1fMHgzOTRiLF8weDEwNGM5Nz1fMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bXzB4MjFmNmM3KDB4ZGQpXSxfMHg0YzM3MDk9XzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldW18weDIxZjZjNygweDFhOCldLF8weDcwMmJlYT1fMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bJ3BhcmVudCddO18weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVtfMHgyMWY2YzcoMHgxNjApXT1fMHgxMDRjOTcsXzB4NDEzMDI1Wydub2RlJ11bJ2luZGV4J109dHlwZW9mIF8weDM1NzMwZj09XzB4MjFmNmM3KDB4MTM1KT9fMHgzNTczMGY6XzB4NGE0ZTRiLF8weDQ1YjE5NltfMHgyMWY2YzcoMHgxMzQpXShfMHg1Yjk3ZjJbXzB4MjFmNmM3KDB4MTgxKV0oXzB4NDE0NTQ4LF8weDM5ZGMzZSxfMHgzNTczMGYsXzB4NDEzMDI1LF8weDNjMGFiMykpLF8weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVtfMHgyMWY2YzcoMHgxNjApXT1fMHg3MDJiZWEsXzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldWydpbmRleCddPV8weDRjMzcwOTt9O31bXzB4NDI0OGQ2KDB4MTA4KV0oXzB4NDYwOWU1LF8weDE1Y2ZlNCxfMHgyNjQxNGYsXzB4M2Q4ZjA5LF8weDM1NjU3NSxfMHgzNTcxOTMsXzB4ODNmMzU5KXt2YXIgXzB4NGNmNTJiPV8weDQyNDhkNixfMHg0MDI3NmE9dGhpcztyZXR1cm4gXzB4MTVjZmU0WydfcF8nK18weDM1NjU3NVtfMHg0Y2Y1MmIoMHgxNGQpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDMzMjVmNyl7dmFyIF8weDJiOGQwNj1fMHg0Y2Y1MmIsXzB4MmVlZWVhPV8weDM1NzE5M1snbm9kZSddW18weDJiOGQwNigweGRkKV0sXzB4MjNjNzE4PV8weDM1NzE5M1tfMHgyYjhkMDYoMHgxYWQpXVtfMHgyYjhkMDYoMHgxYTgpXSxfMHgxNGQzYzM9XzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDE2MCldO18weDM1NzE5M1tfMHgyYjhkMDYoMHgxYWQpXVtfMHgyYjhkMDYoMHgxNjApXT1fMHgyZWVlZWEsXzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDFhOCldPV8weDMzMjVmNyxfMHg0NjA5ZTVbXzB4MmI4ZDA2KDB4MTM0KV0oXzB4NDAyNzZhW18weDJiOGQwNigweDE4MSldKF8weDI2NDE0ZixfMHgzZDhmMDksXzB4MzU2NTc1LF8weDM1NzE5MyxfMHg4M2YzNTkpKSxfMHgzNTcxOTNbJ25vZGUnXVtfMHgyYjhkMDYoMHgxNjApXT1fMHgxNGQzYzMsXzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDFhOCldPV8weDIzYzcxODt9O31bJ19wcm9wZXJ0eSddKF8weDlhYjY0ZixfMHg0ZDkwYjksXzB4MTgzNTk5LF8weGQ1OGIyYixfMHg0M2FmNDApe3ZhciBfMHgxNDcwOD1fMHg0MjQ4ZDYsXzB4NDQ2NTAwPXRoaXM7XzB4NDNhZjQwfHwoXzB4NDNhZjQwPWZ1bmN0aW9uKF8weDRiZGZiMSxfMHg0YmRjNGQpe3JldHVybiBfMHg0YmRmYjFbXzB4NGJkYzRkXTt9KTt2YXIgXzB4MTgyYzBmPV8weDE4MzU5OVtfMHgxNDcwOCgweDE0ZCldKCksXzB4NWIzZTU0PV8weGQ1OGIyYltfMHgxNDcwOCgweDEzZildfHx7fSxfMHg1Mjc3OTI9XzB4ZDU4YjJiWydkZXB0aCddLF8weDUwODMxMj1fMHhkNThiMmJbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXTt0cnl7dmFyIF8weDUyMTA1OD10aGlzW18weDE0NzA4KDB4MTQzKV0oXzB4OWFiNjRmKSxfMHg0MTIzZWE9XzB4MTgyYzBmO18weDUyMTA1OCYmXzB4NDEyM2VhWzB4MF09PT0nXFxcXHgyNycmJihfMHg0MTIzZWE9XzB4NDEyM2VhW18weDE0NzA4KDB4MTEyKV0oMHgxLF8weDQxMjNlYVsnbGVuZ3RoJ10tMHgyKSk7dmFyIF8weDI2ZGU5YT1fMHhkNThiMmJbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDViM2U1NFtfMHgxNDcwOCgweDEyZSkrXzB4NDEyM2VhXTtfMHgyNmRlOWEmJihfMHhkNThiMmJbXzB4MTQ3MDgoMHgxMjkpXT1fMHhkNThiMmJbJ2RlcHRoJ10rMHgxKSxfMHhkNThiMmJbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT0hIV8weDI2ZGU5YTt2YXIgXzB4NTNhNmIzPXR5cGVvZiBfMHgxODM1OTk9PV8weDE0NzA4KDB4MTc2KSxfMHgzMTc5MGI9eyduYW1lJzpfMHg1M2E2YjN8fF8weDUyMTA1OD9fMHgxODJjMGY6dGhpc1tfMHgxNDcwOCgweDE5NildKF8weDE4MmMwZil9O2lmKF8weDUzYTZiMyYmKF8weDMxNzkwYltfMHgxNDcwOCgweDE3NildPSEweDApLCEoXzB4NGQ5MGI5PT09XzB4MTQ3MDgoMHhmYil8fF8weDRkOTBiOT09PV8weDE0NzA4KDB4ZTIpKSl7dmFyIF8weDQyOGUyZj10aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10oXzB4OWFiNjRmLF8weDE4MzU5OSk7aWYoXzB4NDI4ZTJmJiYoXzB4NDI4ZTJmWydzZXQnXSYmKF8weDMxNzkwYlsnc2V0dGVyJ109ITB4MCksXzB4NDI4ZTJmW18weDE0NzA4KDB4MWE1KV0mJiFfMHgyNmRlOWEmJiFfMHhkNThiMmJbXzB4MTQ3MDgoMHgxOGQpXSkpcmV0dXJuIF8weDMxNzkwYltfMHgxNDcwOCgweDE3MyldPSEweDAsdGhpc1tfMHgxNDcwOCgweDFiNCldKF8weDMxNzkwYixfMHhkNThiMmIpLF8weDMxNzkwYjt9dmFyIF8weDU3ODZlOTt0cnl7XzB4NTc4NmU5PV8weDQzYWY0MChfMHg5YWI2NGYsXzB4MTgzNTk5KTt9Y2F0Y2goXzB4Mzk2YmE4KXtyZXR1cm4gXzB4MzE3OTBiPXsnbmFtZSc6XzB4MTgyYzBmLCd0eXBlJzondW5rbm93bicsJ2Vycm9yJzpfMHgzOTZiYThbXzB4MTQ3MDgoMHhlNildfSx0aGlzW18weDE0NzA4KDB4MWI0KV0oXzB4MzE3OTBiLF8weGQ1OGIyYiksXzB4MzE3OTBiO312YXIgXzB4NTJkZGZjPXRoaXNbJ190eXBlJ10oXzB4NTc4NmU5KSxfMHgxZjA1MWY9dGhpc1tfMHgxNDcwOCgweDExNSldKF8weDUyZGRmYyk7aWYoXzB4MzE3OTBiWyd0eXBlJ109XzB4NTJkZGZjLF8weDFmMDUxZil0aGlzWydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4MzE3OTBiLF8weGQ1OGIyYixfMHg1Nzg2ZTksZnVuY3Rpb24oKXt2YXIgXzB4MWIxNGYwPV8weDE0NzA4O18weDMxNzkwYltfMHgxYjE0ZjAoMHgxN2YpXT1fMHg1Nzg2ZTlbJ3ZhbHVlT2YnXSgpLCFfMHgyNmRlOWEmJl8weDQ0NjUwMFtfMHgxYjE0ZjAoMHhlMyldKF8weDUyZGRmYyxfMHgzMTc5MGIsXzB4ZDU4YjJiLHt9KTt9KTtlbHNle3ZhciBfMHgzNDgyMDY9XzB4ZDU4YjJiW18weDE0NzA4KDB4MTgyKV0mJl8weGQ1OGIyYlsnbGV2ZWwnXTxfMHhkNThiMmJbXzB4MTQ3MDgoMHgxNjcpXSYmXzB4ZDU4YjJiW18weDE0NzA4KDB4ZTgpXVsnaW5kZXhPZiddKF8weDU3ODZlOSk8MHgwJiZfMHg1MmRkZmMhPT1fMHgxNDcwOCgweGVhKSYmXzB4ZDU4YjJiW18weDE0NzA4KDB4MTc1KV08XzB4ZDU4YjJiW18weDE0NzA4KDB4ZTEpXTtfMHgzNDgyMDZ8fF8weGQ1OGIyYltfMHgxNDcwOCgweDEwNyldPF8weDUyNzc5Mnx8XzB4MjZkZTlhPyh0aGlzW18weDE0NzA4KDB4MWI2KV0oXzB4MzE3OTBiLF8weDU3ODZlOSxfMHhkNThiMmIsXzB4MjZkZTlhfHx7fSksdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDU3ODZlOSxfMHgzMTc5MGIpKTp0aGlzW18weDE0NzA4KDB4MWI0KV0oXzB4MzE3OTBiLF8weGQ1OGIyYixfMHg1Nzg2ZTksZnVuY3Rpb24oKXt2YXIgXzB4MjM4NWJhPV8weDE0NzA4O18weDUyZGRmYz09PV8weDIzODViYSgweDE1OSl8fF8weDUyZGRmYz09PSd1bmRlZmluZWQnfHwoZGVsZXRlIF8weDMxNzkwYltfMHgyMzg1YmEoMHgxN2YpXSxfMHgzMTc5MGJbXzB4MjM4NWJhKDB4MTI1KV09ITB4MCk7fSk7fXJldHVybiBfMHgzMTc5MGI7fWZpbmFsbHl7XzB4ZDU4YjJiWydleHByZXNzaW9uc1RvRXZhbHVhdGUnXT1fMHg1YjNlNTQsXzB4ZDU4YjJiW18weDE0NzA4KDB4MTI5KV09XzB4NTI3NzkyLF8weGQ1OGIyYltfMHgxNDcwOCgweDE1MyldPV8weDUwODMxMjt9fVtfMHg0MjQ4ZDYoMHhlMyldKF8weDMwNTc4MSxfMHgxMjEyYjMsXzB4M2JlYjI3LF8weDUyMjY4Myl7dmFyIF8weDRkMjA1Nz1fMHg0MjQ4ZDYsXzB4MmIyYTMxPV8weDUyMjY4M1snc3RyTGVuZ3RoJ118fF8weDNiZWIyN1tfMHg0ZDIwNTcoMHgxODUpXTtpZigoXzB4MzA1NzgxPT09XzB4NGQyMDU3KDB4MTNjKXx8XzB4MzA1NzgxPT09XzB4NGQyMDU3KDB4MTAxKSkmJl8weDEyMTJiM1tfMHg0ZDIwNTcoMHgxN2YpXSl7bGV0IF8weDE1ZDYzMj1fMHgxMjEyYjNbJ3ZhbHVlJ11bXzB4NGQyMDU3KDB4MTVlKV07XzB4M2JlYjI3W18weDRkMjA1NygweDEwNCldKz1fMHgxNWQ2MzIsXzB4M2JlYjI3W18weDRkMjA1NygweDEwNCldPl8weDNiZWIyN1sndG90YWxTdHJMZW5ndGgnXT8oXzB4MTIxMmIzWydjYXBwZWQnXT0nJyxkZWxldGUgXzB4MTIxMmIzWyd2YWx1ZSddKTpfMHgxNWQ2MzI+XzB4MmIyYTMxJiYoXzB4MTIxMmIzW18weDRkMjA1NygweDEyNSldPV8weDEyMTJiM1tfMHg0ZDIwNTcoMHgxN2YpXVtfMHg0ZDIwNTcoMHgxMTIpXSgweDAsXzB4MmIyYTMxKSxkZWxldGUgXzB4MTIxMmIzWyd2YWx1ZSddKTt9fVsnX2lzTWFwJ10oXzB4MmFjNTRmKXt2YXIgXzB4MTkyMWEwPV8weDQyNDhkNjtyZXR1cm4hIShfMHgyYWM1NGYmJl8weDMxOTc1MVsnTWFwJ10mJnRoaXNbXzB4MTkyMWEwKDB4MTc3KV0oXzB4MmFjNTRmKT09PV8weDE5MjFhMCgweDFhOSkmJl8weDJhYzU0ZltfMHgxOTIxYTAoMHgxYWMpXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weDUzZmZlYil7dmFyIF8weDJmOTdkNT1fMHg0MjQ4ZDY7aWYoXzB4NTNmZmViW18weDJmOTdkNSgweDEyZildKC9eXFxcXGQrJC8pKXJldHVybiBfMHg1M2ZmZWI7dmFyIF8weDJiOGY3Mjt0cnl7XzB4MmI4ZjcyPUpTT05bXzB4MmY5N2Q1KDB4MTFhKV0oJycrXzB4NTNmZmViKTt9Y2F0Y2h7XzB4MmI4ZjcyPSdcXFxceDIyJyt0aGlzW18weDJmOTdkNSgweDE3NyldKF8weDUzZmZlYikrJ1xcXFx4MjInO31yZXR1cm4gXzB4MmI4ZjcyW18weDJmOTdkNSgweDEyZildKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4MmI4ZjcyPV8weDJiOGY3Mlsnc3Vic3RyJ10oMHgxLF8weDJiOGY3MltfMHgyZjk3ZDUoMHgxNWUpXS0weDIpOl8weDJiOGY3Mj1fMHgyYjhmNzJbXzB4MmY5N2Q1KDB4MTMwKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVsncmVwbGFjZSddKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpW18weDJmOTdkNSgweDEzMCldKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHgyYjhmNzI7fVtfMHg0MjQ4ZDYoMHgxYjQpXShfMHg1YmViNmQsXzB4NGNjNmMyLF8weDU1ZGI5MixfMHg1YTc2ZjYpe3ZhciBfMHg4MTNiYzg9XzB4NDI0OGQ2O3RoaXNbXzB4ODEzYmM4KDB4MTQwKV0oXzB4NWJlYjZkLF8weDRjYzZjMiksXzB4NWE3NmY2JiZfMHg1YTc2ZjYoKSx0aGlzW18weDgxM2JjOCgweGRmKV0oXzB4NTVkYjkyLF8weDViZWI2ZCksdGhpc1tfMHg4MTNiYzgoMHgxMDkpXShfMHg1YmViNmQsXzB4NGNjNmMyKTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4M2M2OTYxLF8weDE3MmZmYSl7dmFyIF8weDE3NDQxNz1fMHg0MjQ4ZDY7dGhpc1tfMHgxNzQ0MTcoMHgxM2UpXShfMHgzYzY5NjEsXzB4MTcyZmZhKSx0aGlzW18weDE3NDQxNygweDE4OCldKF8weDNjNjk2MSxfMHgxNzJmZmEpLHRoaXNbJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnXShfMHgzYzY5NjEsXzB4MTcyZmZhKSx0aGlzW18weDE3NDQxNygweDExNyldKF8weDNjNjk2MSxfMHgxNzJmZmEpO31bXzB4NDI0OGQ2KDB4MTNlKV0oXzB4MjMyZmIxLF8weDE1NDZkYyl7fVtfMHg0MjQ4ZDYoMHgxODgpXShfMHgxYjU1Y2EsXzB4MWRjMWIwKXt9W18weDQyNDhkNigweDFhNyldKF8weDI5MGRkZCxfMHg1ZWE0MjUpe31bXzB4NDI0OGQ2KDB4ZWQpXShfMHgzYzEwMjYpe3JldHVybiBfMHgzYzEwMjY9PT10aGlzWydfdW5kZWZpbmVkJ107fVsnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4NTgxNmRlLF8weDUxYWQwZil7dmFyIF8weDRlMzIwNz1fMHg0MjQ4ZDY7dGhpc1tfMHg0ZTMyMDcoMHgxYTcpXShfMHg1ODE2ZGUsXzB4NTFhZDBmKSx0aGlzW18weDRlMzIwNygweDE5NSldKF8weDU4MTZkZSksXzB4NTFhZDBmW18weDRlMzIwNygweGU0KV0mJnRoaXNbJ19zb3J0UHJvcHMnXShfMHg1ODE2ZGUpLHRoaXNbXzB4NGUzMjA3KDB4MTFjKV0oXzB4NTgxNmRlLF8weDUxYWQwZiksdGhpc1tfMHg0ZTMyMDcoMHgxOWIpXShfMHg1ODE2ZGUsXzB4NTFhZDBmKSx0aGlzWydfY2xlYW5Ob2RlJ10oXzB4NTgxNmRlKTt9W18weDQyNDhkNigweGRmKV0oXzB4M2NjNTJjLF8weDRkMzhhNyl7dmFyIF8weDQxZTRkZD1fMHg0MjQ4ZDY7bGV0IF8weDUzYzliNzt0cnl7XzB4MzE5NzUxW18weDQxZTRkZCgweGY5KV0mJihfMHg1M2M5Yjc9XzB4MzE5NzUxW18weDQxZTRkZCgweGY5KV1bXzB4NDFlNGRkKDB4MTM5KV0sXzB4MzE5NzUxW18weDQxZTRkZCgweGY5KV1bJ2Vycm9yJ109ZnVuY3Rpb24oKXt9KSxfMHgzY2M1MmMmJnR5cGVvZiBfMHgzY2M1MmNbXzB4NDFlNGRkKDB4MTVlKV09PV8weDQxZTRkZCgweDEzNSkmJihfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTVlKV09XzB4M2NjNTJjW18weDQxZTRkZCgweDE1ZSldKTt9Y2F0Y2h7fWZpbmFsbHl7XzB4NTNjOWI3JiYoXzB4MzE5NzUxW18weDQxZTRkZCgweGY5KV1bXzB4NDFlNGRkKDB4MTM5KV09XzB4NTNjOWI3KTt9aWYoXzB4NGQzOGE3W18weDQxZTRkZCgweDE5MSldPT09XzB4NDFlNGRkKDB4MTM1KXx8XzB4NGQzOGE3W18weDQxZTRkZCgweDE5MSldPT09XzB4NDFlNGRkKDB4MTdjKSl7aWYoaXNOYU4oXzB4NGQzOGE3Wyd2YWx1ZSddKSlfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTlhKV09ITB4MCxkZWxldGUgXzB4NGQzOGE3W18weDQxZTRkZCgweDE3ZildO2Vsc2Ugc3dpdGNoKF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxN2YpXSl7Y2FzZSBOdW1iZXJbXzB4NDFlNGRkKDB4ZjEpXTpfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTk5KV09ITB4MCxkZWxldGUgXzB4NGQzOGE3Wyd2YWx1ZSddO2JyZWFrO2Nhc2UgTnVtYmVyWydORUdBVElWRV9JTkZJTklUWSddOl8weDRkMzhhN1snbmVnYXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxN2YpXTticmVhaztjYXNlIDB4MDp0aGlzWydfaXNOZWdhdGl2ZVplcm8nXShfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTdmKV0pJiYoXzB4NGQzOGE3W18weDQxZTRkZCgweDE2MSldPSEweDApO2JyZWFrO319ZWxzZSBfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTkxKV09PT1fMHg0MWU0ZGQoMHhlYSkmJnR5cGVvZiBfMHgzY2M1MmNbXzB4NDFlNGRkKDB4MTA2KV09PV8weDQxZTRkZCgweDEzYykmJl8weDNjYzUyY1tfMHg0MWU0ZGQoMHgxMDYpXSYmXzB4NGQzOGE3WyduYW1lJ10mJl8weDNjYzUyY1tfMHg0MWU0ZGQoMHgxMDYpXSE9PV8weDRkMzhhN1snbmFtZSddJiYoXzB4NGQzOGE3W18weDQxZTRkZCgweDE0NildPV8weDNjYzUyY1snbmFtZSddKTt9WydfaXNOZWdhdGl2ZVplcm8nXShfMHg1NDVkNzApe3ZhciBfMHgzZjVmNzg9XzB4NDI0OGQ2O3JldHVybiAweDEvXzB4NTQ1ZDcwPT09TnVtYmVyW18weDNmNWY3OCgweDE1NyldO31bXzB4NDI0OGQ2KDB4MTc4KV0oXzB4NDgzNDJkKXt2YXIgXzB4MTEzM2NlPV8weDQyNDhkNjshXzB4NDgzNDJkW18weDExMzNjZSgweDE5ZCldfHwhXzB4NDgzNDJkW18weDExMzNjZSgweDE5ZCldW18weDExMzNjZSgweDE1ZSldfHxfMHg0ODM0MmRbJ3R5cGUnXT09PV8weDExMzNjZSgweGZiKXx8XzB4NDgzNDJkW18weDExMzNjZSgweDE5MSldPT09J01hcCd8fF8weDQ4MzQyZFtfMHgxMTMzY2UoMHgxOTEpXT09PV8weDExMzNjZSgweDE2Yyl8fF8weDQ4MzQyZFtfMHgxMTMzY2UoMHgxOWQpXVtfMHgxMTMzY2UoMHgxN2IpXShmdW5jdGlvbihfMHgzNThmNzQsXzB4MjUxNTE5KXt2YXIgXzB4MTk3ZDk0PV8weDExMzNjZSxfMHhiYTE5NDQ9XzB4MzU4Zjc0W18weDE5N2Q5NCgweDEwNildW18weDE5N2Q5NCgweDE4ZildKCksXzB4MTM4YWZmPV8weDI1MTUxOVtfMHgxOTdkOTQoMHgxMDYpXVsndG9Mb3dlckNhc2UnXSgpO3JldHVybiBfMHhiYTE5NDQ8XzB4MTM4YWZmPy0weDE6XzB4YmExOTQ0Pl8weDEzOGFmZj8weDE6MHgwO30pO31bXzB4NDI0OGQ2KDB4MTFjKV0oXzB4MTgwMDk1LF8weDk0YTdiZSl7dmFyIF8weGIzYjQzYT1fMHg0MjQ4ZDY7aWYoIShfMHg5NGE3YmVbXzB4YjNiNDNhKDB4MTJiKV18fCFfMHgxODAwOTVbXzB4YjNiNDNhKDB4MTlkKV18fCFfMHgxODAwOTVbXzB4YjNiNDNhKDB4MTlkKV1bJ2xlbmd0aCddKSl7Zm9yKHZhciBfMHg0NjY1M2U9W10sXzB4ODBjMzM4PVtdLF8weDE0MjQxMT0weDAsXzB4MmQ2MDIxPV8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXVtfMHhiM2I0M2EoMHgxNWUpXTtfMHgxNDI0MTE8XzB4MmQ2MDIxO18weDE0MjQxMSsrKXt2YXIgXzB4NDEzMjg5PV8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXVtfMHgxNDI0MTFdO18weDQxMzI4OVtfMHhiM2I0M2EoMHgxOTEpXT09PV8weGIzYjQzYSgweGVhKT9fMHg0NjY1M2VbXzB4YjNiNDNhKDB4MTM0KV0oXzB4NDEzMjg5KTpfMHg4MGMzMzhbXzB4YjNiNDNhKDB4MTM0KV0oXzB4NDEzMjg5KTt9aWYoISghXzB4ODBjMzM4W18weGIzYjQzYSgweDE1ZSldfHxfMHg0NjY1M2VbJ2xlbmd0aCddPD0weDEpKXtfMHgxODAwOTVbXzB4YjNiNDNhKDB4MTlkKV09XzB4ODBjMzM4O3ZhciBfMHgyMjc0ZGY9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4NDY2NTNlfTt0aGlzW18weGIzYjQzYSgweDEzZSldKF8weDIyNzRkZixfMHg5NGE3YmUpLHRoaXNbXzB4YjNiNDNhKDB4MWE3KV0oXzB4MjI3NGRmLF8weDk0YTdiZSksdGhpc1tfMHhiM2I0M2EoMHgxOTUpXShfMHgyMjc0ZGYpLHRoaXNbXzB4YjNiNDNhKDB4MTE3KV0oXzB4MjI3NGRmLF8weDk0YTdiZSksXzB4MjI3NGRmWydpZCddKz0nXFxcXHgyMGYnLF8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXVtfMHhiM2I0M2EoMHgxMTkpXShfMHgyMjc0ZGYpO319fVtfMHg0MjQ4ZDYoMHgxOWIpXShfMHg0ODhlMDcsXzB4MzBkYTVmKXt9W18weDQyNDhkNigweDE5NSldKF8weDJmYjljYSl7fVtfMHg0MjQ4ZDYoMHhkNCldKF8weDQ2ZTg4ZSl7dmFyIF8weDExNjdjND1fMHg0MjQ4ZDY7cmV0dXJuIEFycmF5W18weDExNjdjNCgweGZhKV0oXzB4NDZlODhlKXx8dHlwZW9mIF8weDQ2ZTg4ZT09J29iamVjdCcmJnRoaXNbXzB4MTE2N2M0KDB4MTc3KV0oXzB4NDZlODhlKT09PV8weDExNjdjNCgweDExNCk7fVsnX3NldE5vZGVQZXJtaXNzaW9ucyddKF8weDMxNDRhOCxfMHhkOGQ1Yzcpe31bJ19jbGVhbk5vZGUnXShfMHgzNDljYjQpe3ZhciBfMHgyYTU4NzI9XzB4NDI0OGQ2O2RlbGV0ZSBfMHgzNDljYjRbXzB4MmE1ODcyKDB4MTQ4KV0sZGVsZXRlIF8weDM0OWNiNFtfMHgyYTU4NzIoMHgxOGEpXSxkZWxldGUgXzB4MzQ5Y2I0W18weDJhNTg3MigweDE1YildO31bXzB4NDI0OGQ2KDB4MTY0KV0oXzB4MTM4N2I2LF8weDU5ZGU3MCl7fX1sZXQgXzB4NTljZDZkPW5ldyBfMHgzMTg3YTcoKSxfMHgxMWU0OTI9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4YjdlM2RiPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4MmU4MjMyKF8weGNmZDI5MCxfMHgzZTk0MWYsXzB4MzI4M2MyLF8weDIzMDY1ZSxfMHgyYTdmMDEsXzB4Mzg3NzhlKXt2YXIgXzB4NDJjYTI5PV8weDQyNDhkNjtsZXQgXzB4NDAxZmY2LF8weDQ4ODVkZTt0cnl7XzB4NDg4NWRlPV8weDI5OWRhMygpLF8weDQwMWZmNj1fMHgyNDA4YmFbXzB4M2U5NDFmXSwhXzB4NDAxZmY2fHxfMHg0ODg1ZGUtXzB4NDAxZmY2Wyd0cyddPjB4MWY0JiZfMHg0MDFmZjZbXzB4NDJjYTI5KDB4MTAwKV0mJl8weDQwMWZmNltfMHg0MmNhMjkoMHgxYTQpXS9fMHg0MDFmZjZbXzB4NDJjYTI5KDB4MTAwKV08MHg2ND8oXzB4MjQwOGJhW18weDNlOTQxZl09XzB4NDAxZmY2PXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4NDg4NWRlfSxfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV09e30pOl8weDQ4ODVkZS1fMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bJ3RzJ10+MHgzMiYmXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDEwMCldJiZfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bJ3RpbWUnXS9fMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bXzB4NDJjYTI5KDB4MTAwKV08MHg2NCYmKF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXT17fSk7bGV0IF8weDM5MDVkNz1bXSxfMHg1YzNhNTk9XzB4NDAxZmY2WydyZWR1Y2VMaW1pdHMnXXx8XzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildWydyZWR1Y2VMaW1pdHMnXT9fMHhiN2UzZGI6XzB4MTFlNDkyLF8weDQwNzJkNj1fMHg5Yzg1ZDI9Pnt2YXIgXzB4NTc1NGVhPV8weDQyY2EyOTtsZXQgXzB4ZWM3NzM1PXt9O3JldHVybiBfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTlkKV09XzB4OWM4NWQyW18weDU3NTRlYSgweDE5ZCldLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxNjIpXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4MTYyKV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweDE4NSldPV8weDljODVkMltfMHg1NzU0ZWEoMHgxODUpXSxfMHhlYzc3MzVbJ3RvdGFsU3RyTGVuZ3RoJ109XzB4OWM4NWQyW18weDU3NTRlYSgweDE1NSldLF8weGVjNzczNVtfMHg1NzU0ZWEoMHhlMSldPV8weDljODVkMltfMHg1NzU0ZWEoMHhlMSldLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxNjcpXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4MTY3KV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweGU0KV09ITB4MSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTJiKV09IV8weDVkMjY3YSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTI5KV09MHgxLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxMDcpXT0weDAsXzB4ZWM3NzM1WydleHBJZCddPV8weDU3NTRlYSgweGZmKSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTc5KV09XzB4NTc1NGVhKDB4ZmQpLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxODIpXT0hMHgwLF8weGVjNzczNVtfMHg1NzU0ZWEoMHhlOCldPVtdLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxNzUpXT0weDAsXzB4ZWM3NzM1W18weDU3NTRlYSgweDE4ZCldPSEweDAsXzB4ZWM3NzM1W18weDU3NTRlYSgweDEwNCldPTB4MCxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MWFkKV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4ZWM3NzM1O307Zm9yKHZhciBfMHg0ZWRiNzg9MHgwO18weDRlZGI3ODxfMHgyYTdmMDFbXzB4NDJjYTI5KDB4MTVlKV07XzB4NGVkYjc4KyspXzB4MzkwNWQ3W18weDQyY2EyOSgweDEzNCldKF8weDU5Y2Q2ZFsnc2VyaWFsaXplJ10oeyd0aW1lTm9kZSc6XzB4Y2ZkMjkwPT09XzB4NDJjYTI5KDB4MWE0KXx8dm9pZCAweDB9LF8weDJhN2YwMVtfMHg0ZWRiNzhdLF8weDQwNzJkNihfMHg1YzNhNTkpLHt9KSk7aWYoXzB4Y2ZkMjkwPT09J3RyYWNlJyl7bGV0IF8weDM0Y2I5MT1FcnJvcltfMHg0MmNhMjkoMHgxMGIpXTt0cnl7RXJyb3JbXzB4NDJjYTI5KDB4MTBiKV09MHgxLzB4MCxfMHgzOTA1ZDdbXzB4NDJjYTI5KDB4MTM0KV0oXzB4NTljZDZkW18weDQyY2EyOSgweDFiNildKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVsnc3RhY2snXSxfMHg0MDcyZDYoXzB4NWMzYTU5KSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109XzB4MzRjYjkxO319cmV0dXJueydtZXRob2QnOidsb2cnLCd2ZXJzaW9uJzpfMHg1NjM1MDQsJ2FyZ3MnOlt7J3RzJzpfMHgzMjgzYzIsJ3Nlc3Npb24nOl8weDIzMDY1ZSwnYXJncyc6XzB4MzkwNWQ3LCdpZCc6XzB4M2U5NDFmLCdjb250ZXh0JzpfMHgzODc3OGV9XX07fWNhdGNoKF8weDQ4ZjBjZSl7cmV0dXJueydtZXRob2QnOidsb2cnLCd2ZXJzaW9uJzpfMHg1NjM1MDQsJ2FyZ3MnOlt7J3RzJzpfMHgzMjgzYzIsJ3Nlc3Npb24nOl8weDIzMDY1ZSwnYXJncyc6W3sndHlwZSc6XzB4NDJjYTI5KDB4MTEzKSwnZXJyb3InOl8weDQ4ZjBjZSYmXzB4NDhmMGNlWydtZXNzYWdlJ119XSwnaWQnOl8weDNlOTQxZiwnY29udGV4dCc6XzB4Mzg3NzhlfV19O31maW5hbGx5e3RyeXtpZihfMHg0MDFmZjYmJl8weDQ4ODVkZSl7bGV0IF8weDJmZjE4OT1fMHgyOTlkYTMoKTtfMHg0MDFmZjZbJ2NvdW50J10rKyxfMHg0MDFmZjZbXzB4NDJjYTI5KDB4MWE0KV0rPV8weDVkZWFkNShfMHg0ODg1ZGUsXzB4MmZmMTg5KSxfMHg0MDFmZjZbJ3RzJ109XzB4MmZmMTg5LF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxMDApXSsrLF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxYTQpXSs9XzB4NWRlYWQ1KF8weDQ4ODVkZSxfMHgyZmYxODkpLF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVsndHMnXT1fMHgyZmYxODksKF8weDQwMWZmNlsnY291bnQnXT4weDMyfHxfMHg0MDFmZjZbXzB4NDJjYTI5KDB4MWE0KV0+MHg2NCkmJihfMHg0MDFmZjZbXzB4NDJjYTI5KDB4MTQ0KV09ITB4MCksKF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxMDApXT4weDNlOHx8XzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDFhNCldPjB4MTJjKSYmKF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxNDQpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgyZTgyMzI7fSgoXzB4MzA4MGUwLF8weDEzYWQ4NSxfMHg0YjAxOTksXzB4MmQ0MGY2LF8weDRiN2U0NSxfMHg0ZTBlNzcsXzB4MzcwNTJiLF8weDIwM2JiNCxfMHgyZjk5MzEsXzB4MzY2MzAzKT0+e3ZhciBfMHg1MjFhODQ9XzB4MzBkNDZjO2lmKF8weDMwODBlMFsnX2NvbnNvbGVfbmluamEnXSlyZXR1cm4gXzB4MzA4MGUwW18weDUyMWE4NCgweGY0KV07aWYoIUooXzB4MzA4MGUwLF8weDIwM2JiNCxfMHg0YjdlNDUpKXJldHVybiBfMHgzMDgwZTBbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnY292ZXJhZ2UnOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weDMwODBlMFtfMHg1MjFhODQoMHhmNCldO2xldCBfMHgzNDkzZmM9VyhfMHgzMDgwZTApLF8weDRjYWQzMD1fMHgzNDkzZmNbXzB4NTIxYTg0KDB4ZjApXSxfMHg4MTkyNzM9XzB4MzQ5M2ZjW18weDUyMWE4NCgweDE2ZCldLF8weDU0NGNjMj1fMHgzNDkzZmNbXzB4NTIxYTg0KDB4MTQ5KV0sXzB4M2ViM2U2PXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4MjVmZjE0PVkoXzB4MzA4MGUwLF8weDJmOTkzMSxfMHgzZWIzZTYsXzB4NGUwZTc3KSxfMHgxOTIzMDA9XzB4MjU4NzNmPT57XzB4M2ViM2U2Wyd0cyddW18weDI1ODczZl09XzB4ODE5MjczKCk7fSxfMHg0NGY1MTA9KF8weDU1NjJmZCxfMHgyZjY3MDYpPT57dmFyIF8weDJlY2Q2Nj1fMHg1MjFhODQ7bGV0IF8weDJjYzkxNj1fMHgzZWIzZTZbJ3RzJ11bXzB4MmY2NzA2XTtpZihkZWxldGUgXzB4M2ViM2U2Wyd0cyddW18weDJmNjcwNl0sXzB4MmNjOTE2KXtsZXQgXzB4MWY1ODQyPV8weDRjYWQzMChfMHgyY2M5MTYsXzB4ODE5MjczKCkpO18weDUzNzUxYyhfMHgyNWZmMTQoXzB4MmVjZDY2KDB4MWE0KSxfMHg1NTYyZmQsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLFtfMHgxZjU4NDJdLF8weDJmNjcwNikpO319LF8weDE4Zjc4Yj1fMHgyN2U1MzM9Pl8weDc0YWRjYz0+e3ZhciBfMHg1M2YzMWE9XzB4NTIxYTg0O3RyeXtfMHgxOTIzMDAoXzB4NzRhZGNjKSxfMHgyN2U1MzMoXzB4NzRhZGNjKTt9ZmluYWxseXtfMHgzMDgwZTBbXzB4NTNmMzFhKDB4ZjkpXVtfMHg1M2YzMWEoMHgxYTQpXT1fMHgyN2U1MzM7fX0sXzB4MTU1M2Q4PV8weDRiNjI0Yj0+XzB4NWNhNDQxPT57dmFyIF8weDJmZmZmNz1fMHg1MjFhODQ7dHJ5e2xldCBbXzB4NWUyZDg2LF8weDQ2ZGI1Ml09XzB4NWNhNDQxW18weDJmZmZmNygweDEzZCldKF8weDJmZmZmNygweDE3ZCkpO18weDQ0ZjUxMChfMHg0NmRiNTIsXzB4NWUyZDg2KSxfMHg0YjYyNGIoXzB4NWUyZDg2KTt9ZmluYWxseXtfMHgzMDgwZTBbXzB4MmZmZmY3KDB4ZjkpXVtfMHgyZmZmZjcoMHgxNDIpXT1fMHg0YjYyNGI7fX07XzB4MzA4MGUwW18weDUyMWE4NCgweGY0KV09eydjb25zb2xlTG9nJzooXzB4MThlMjgwLF8weDFmNGQxNSk9Pnt2YXIgXzB4MWI5OGY1PV8weDUyMWE4NDtfMHgzMDgwZTBbJ2NvbnNvbGUnXVtfMHgxYjk4ZjUoMHgxYTApXVtfMHgxYjk4ZjUoMHgxMDYpXSE9PV8weDFiOThmNSgweDEyMykmJl8weDUzNzUxYyhfMHgyNWZmMTQoXzB4MWI5OGY1KDB4MWEwKSxfMHgxOGUyODAsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLF8weDFmNGQxNSkpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDRjOTU2YixfMHhjZGRiMTEpPT57dmFyIF8weDVkZDAyOD1fMHg1MjFhODQ7XzB4MzA4MGUwW18weDVkZDAyOCgweGY5KV1bXzB4NWRkMDI4KDB4MWEwKV1bXzB4NWRkMDI4KDB4MTA2KV0hPT1fMHg1ZGQwMjgoMHgxMTApJiZfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDVkZDAyOCgweDE1NiksXzB4NGM5NTZiLF8weDU0NGNjMigpLF8weGY0ODllMixfMHhjZGRiMTEpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4MTBhMzA4PV8weDUyMWE4NDtfMHgzMDgwZTBbJ2NvbnNvbGUnXVtfMHgxMGEzMDgoMHgxYTQpXT1fMHgxOGY3OGIoXzB4MzA4MGUwWydjb25zb2xlJ11bXzB4MTBhMzA4KDB4MWE0KV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHg0NGE4ODQ9XzB4NTIxYTg0O18weDMwODBlMFtfMHg0NGE4ODQoMHhmOSldWyd0aW1lRW5kJ109XzB4MTU1M2Q4KF8weDMwODBlMFtfMHg0NGE4ODQoMHhmOSldW18weDQ0YTg4NCgweDE0MildKTt9LCdhdXRvTG9nJzooXzB4NDc5NjYwLF8weGQxNjg2Yyk9Pnt2YXIgXzB4NDA2NDZlPV8weDUyMWE4NDtfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDQwNjQ2ZSgweDFhMCksXzB4ZDE2ODZjLF8weDU0NGNjMigpLF8weGY0ODllMixbXzB4NDc5NjYwXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4OTFmZWQ1LF8weDQwYTg0Zik9Pnt2YXIgXzB4NzM0NGUxPV8weDUyMWE4NDtfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDczNDRlMSgweDFhMCksXzB4OTFmZWQ1LF8weDU0NGNjMigpLF8weGY0ODllMixfMHg0MGE4NGYpKTt9LCdhdXRvVHJhY2UnOihfMHgzNTQ2ZjcsXzB4M2Q4ZWI1KT0+e3ZhciBfMHgyNTUxMmY9XzB4NTIxYTg0O18weDUzNzUxYyhfMHgyNWZmMTQoXzB4MjU1MTJmKDB4MTU2KSxfMHgzZDhlYjUsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLFtfMHgzNTQ2ZjddKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDJiNzIyZixfMHgyZGYwM2IpPT57dmFyIF8weDIwYWNmMT1fMHg1MjFhODQ7XzB4NTM3NTFjKF8weDI1ZmYxNChfMHgyMGFjZjEoMHgxNTYpLF8weDJiNzIyZixfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsXzB4MmRmMDNiKSk7fSwnYXV0b1RpbWUnOihfMHgyOTcxOTQsXzB4MWE2YjY4LF8weDU5ZDYwYik9PntfMHgxOTIzMDAoXzB4NTlkNjBiKTt9LCdhdXRvVGltZUVuZCc6KF8weDRiMTE3NCxfMHgxOWU0ZjksXzB4M2U5NzczKT0+e18weDQ0ZjUxMChfMHgxOWU0ZjksXzB4M2U5NzczKTt9LCdjb3ZlcmFnZSc6XzB4MTY5MDM1PT57dmFyIF8weDk0ZmRkPV8weDUyMWE4NDtfMHg1Mzc1MWMoeydtZXRob2QnOl8weDk0ZmRkKDB4MTg3KSwndmVyc2lvbic6XzB4NGUwZTc3LCdhcmdzJzpbeydpZCc6XzB4MTY5MDM1fV19KTt9fTtsZXQgXzB4NTM3NTFjPWIoXzB4MzA4MGUwLF8weDEzYWQ4NSxfMHg0YjAxOTksXzB4MmQ0MGY2LF8weDRiN2U0NSxfMHgzNjYzMDMpLF8weGY0ODllMj1fMHgzMDgwZTBbXzB4NTIxYTg0KDB4ZDMpXTtyZXR1cm4gXzB4MzA4MGUwW18weDUyMWE4NCgweGY0KV07fSkoZ2xvYmFsVGhpcyxfMHgzMGQ0NmMoMHhlMCksXzB4MzBkNDZjKDB4Y2MpLFxcXCJjOlxcXFxcXFxcVXNlcnNcXFxcXFxcXFVTRVJcXFxcXFxcXC52c2NvZGVcXFxcXFxcXGV4dGVuc2lvbnNcXFxcXFxcXHdhbGxhYnlqcy5jb25zb2xlLW5pbmphLTEuMC4yNDBcXFxcXFxcXG5vZGVfbW9kdWxlc1xcXCIsXzB4MzBkNDZjKDB4MTdhKSxfMHgzMGQ0NmMoMHhmMiksXzB4MzBkNDZjKDB4ZDkpLF8weDMwZDQ2YygweDFhYSksXzB4MzBkNDZjKDB4MTAzKSxfMHgzMGQ0NmMoMHhlZSkpO1wiKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IHVuaWNvcm4vbm8tYWJ1c2l2ZS1lc2xpbnQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuZXhwb3J0IGNvbnN0IExvdmVUaXRsZUljb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgIHNyYz0nL2Fzc2V0cy9pbWFnZXMvd2luZS5wbmcnXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6ICc4MHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc4MHB4JyxcclxuICAgICAgfX1cclxuICAgICAgZWZmZWN0PSdibHVyJ1xyXG4gICAgICB3aWR0aD17JzEwMCUnfVxyXG4gICAgICBhbHQ9J3dpbmUgaWxsdXN0cmF0b3InXHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBFdmVudERhdGVJY29uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPSczNScgaGVpZ2h0PSc3OCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPSdNMjAuMzU1IDEyLjA4M2MtMS42NDMtMS42Mi0yLjE1Ni00Ljc3LjQxLTUuODMgMS4xODctLjQ5IDIuNjgtLjM2NSAzLjkyOC0uMjI3IDEuMjg2LjE0MyAyLjU1Mi40MTcgMy43Ny44NTYgMi4xNzMuNzg1IDUuMTg0IDIuMTY0IDYuMDI3IDQuNTEuOTkzIDIuNzYyLTEuOTY4IDQuMTA3LTQuMTU1IDQuNDc0LTIuNzc1LjQ2NS01LjcwNi40MTctOC41MTMuMzM4LTIuNjk0LS4wNzYtNS40NTQtLjM3NS03Ljk4LTEuMzY2LTIuMjctLjg5Mi00LjU5LTIuMzMzLTUuNzIzLTQuNTgtMS4wNDMtMi4wNjYtLjgzNi00LjU0MS40NzUtNi40NDRDMTAuNCAxLjE5MyAxMy40MjIuNjkgMTYuMzgxLjMzN0E0OS40NjIgNDkuNDYyIDAgMCAxIDI3LjMwNy4yN2MxLjIuMTIzIDEuMjEyIDIuMDE3IDAgMS44OTNhNDkuODc3IDQ5Ljg3NyAwIDAgMC03LjQxMi0uMjIzYy0yLjI2NS4xMDUtNC42NzEuMjQtNi44NS45MDItMS44MDcuNTQ5LTMuMjMyIDEuODgyLTMuNjI3IDMuNzctLjQxNCAxLjk3OC43MDggMy43MzIgMi4yMyA0LjkwMyAzLjI1IDIuNSA3LjY3MiAyLjgxMSAxMS42MTUgMi44MTcgMi4yMjUuMDA0IDQuNTUuMDc0IDYuNzQ1LS4zMi44MDQtLjE0NCAxLjg5NS0uMzIgMi40ODQtLjk1Ny44MTQtLjg4LS4zMi0xLjkzOC0xLjAxLTIuNDY3LTEuODMtMS40MDYtNC4xNDQtMi4yODMtNi40MTYtMi42MTktLjk3OS0uMTQ1LTIuNTc5LS40MTMtMy41MiAwLTEuMjk0LjU3LS41NzYgMi4wNjMuMTQ3IDIuNzc3Ljg3Ljg1Ni0uNDcgMi4xOTQtMS4zMzggMS4zMzhaJ1xyXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD0nTTM0LjAyMyAxMy43MjdjLTEuNDk0IDUuNDUtMy4xNTggMTAuOTMzLTcuMDk5IDE1LjE1N2EyMi4zOSAyMi4zOSAwIDAgMS02LjAzIDQuNTgxYy0yLjMyMyAxLjIwNS01LjEzIDIuMzg1LTcuNzgxIDEuODI4LTEuMTktLjI1LS42ODctMi4wNzUuNTAzLTEuODI1IDIuMjkyLjQ4IDUuMDItLjg4OCA2Ljk3LTEuOTg2YTIwLjgwOCAyMC44MDggMCAwIDAgNS4zOTYtNC4zNzNjMy40NDYtMy45MDQgNC44NjktOC45NyA2LjIxNi0xMy44ODQuMzItMS4xNzQgMi4xNDctLjY3NiAxLjgyNS41MDJaJ1xyXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD0nTTkuMDI4IDcuOTIzYy0xLjI2NiA4LjM0NC0yLjU5IDE4LjM3IDMuNzIyIDI1LjEzMy44My44OS0uNTA1IDIuMjMxLTEuMzM4IDEuMzM5LTYuODQtNy4zMzEtNS41ODctMTcuODkzLTQuMjEtMjYuOTc0LjE4My0xLjIgMi4wMDYtLjY5IDEuODI2LjUwMlonXHJcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPSdNMTQuODc3IDM0LjM0M2MtMS45MTggMTQuMDc0LTEuMzQ5IDI4LjQ2IDEuNjM2IDQyLjM0NC4yNTUgMS4xODctMS41NjkgMS42OTUtMS44MjUuNTAzYTEyNS42NTQgMTI1LjY1NCAwIDAgMS0xLjYzNi00My4zNWMuMTY0LTEuMjAyIDEuOTg4LS42OSAxLjgyNS41MDNaJ1xyXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD0nTTEwLjM0IDYwLjg5MWMtLjQxNi00LjY1Ni0zLjg0NS04Ljg2LTguMjktMTAuMjYtMS4xNTgtLjM2NS0uNjY0LTIuMTkzLjUwMi0xLjgyNSA1LjMwMSAxLjY3IDkuMTg2IDYuNTYyIDkuNjggMTIuMDg1LjEwOCAxLjIxMi0xLjc4NSAxLjIwNS0xLjg5MyAwWidcclxuICAgICAgICBmaWxsPScjMjExRDFEJ1xyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9J00zLjE5NyA0OS45MmMtLjczIDEuMzg2LS45MiAyLjkzNy0uOTYgNC40ODQtLjAzNyAxLjQ3Ni0uMjU5IDMuMjQ2LjczOSA0LjQ2LjkyIDEuMTIgMi4yNzEgMS45NTYgMy41MyAyLjY0M2ExNy41OTUgMTcuNTk1IDAgMCAwIDQuNDAyIDEuNjYyYzEuMTg0LjI4LjY4MyAyLjEwNS0uNTAzIDEuODI1YTE5LjM3IDE5LjM3IDAgMCAxLTUuMDctMS45NzRjLTEuNTE1LS44NTUtMy4xMDYtMS45MjItNC4xMi0zLjM2MkMuMTUzIDU4LjE1LjMgNTYuMTYzLjM0NSA1NC40MDRjLjA0OS0xLjg5LjMyNy0zLjc1IDEuMjE3LTUuNDQuNTY5LTEuMDc3IDIuMjAyLS4xMjIgMS42MzUuOTU2WidcclxuICAgICAgICBmaWxsPScjMjExRDFEJ1xyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9J003LjkxOSA1OC4wMjZjMS4zNiAxLjcyIDIuNzIzIDMuNDQgNC4wODQgNS4xNi4zMDYuMzg4LjQwNi45NjUgMCAxLjMzOS0uMzQyLjMxMy0xLjAxLjQxNC0xLjMzOCAwTDYuNTggNTkuMzYzYy0uMzA2LS4zODctLjQwNi0uOTY1IDAtMS4zMzcuMzQyLS4zMTQgMS4wMS0uNDE1IDEuMzM5IDBaTTEyLjYyOSA1MS44ODRhMjguMDggMjguMDggMCAwIDEgMTcuNDE4LTYuNjI4YzEuMjE5LS4wMyAxLjIxOCAxLjg2MyAwIDEuODkyLTUuODYzLjE0LTExLjU5NCAyLjI4OC0xNi4wOCA2LjA3NC0uOTI2Ljc4Mi0yLjI3LS41NS0xLjMzOC0xLjMzOFonXHJcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPSdNMzIuMjY3IDQ2LjY3M2MtMS4yMSA0LjIzNC00LjA3MiA4LjE0Mi04LjA1NCAxMC4xNS0zLjc4MyAxLjkwNi04LjYyMyAxLjc1My0xMS42NDktMS40OC0uODMxLS44ODkuNTA0LTIuMjMgMS4zMzgtMS4zMzggMi42IDIuNzc2IDYuNzM1IDIuNjc2IDkuODcyLjkwNyAzLjI5Ny0xLjg1NyA1LjYzOC01LjEzOCA2LjY2OS04Ljc0Mi4zMzQtMS4xNjkgMi4xNi0uNjcyIDEuODI0LjUwM1onXHJcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPSdNMTQuMzUgNTMuMTM4YTQwLjcwNyA0MC43MDcgMCAwIDEgNS45MTItMS41MzNjLjQ4NS0uMDg3IDEuMDQzLjEzMiAxLjE2My42NjEuMTA1LjQ2My0uMTQgMS4wNy0uNjYgMS4xNjVhNDAuNjE2IDQwLjYxNiAwIDAgMC01LjkxMyAxLjUzM2MtLjQ2OC4xNi0xLjA1NC0uMTg0LTEuMTYzLS42NjEtLjEyLS41MjYuMTU4LS45OTMuNjYtMS4xNjVaJ1xyXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckxvZ28gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZUJsb2NrJyxcclxuICAgICAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwcHgsIDBweCkgcm90YXRlKDBkZWcpIHNjYWxlKDEpJyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPHN2ZyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIGZpbGw9J25vbmUnPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPSdtMzQuNjEzIDI3LjczNyAxLjQzNy4wODhhNi4xMTEgNi4xMTEgMCAwIDEgMS45MjUuMmMuMzUuMi41MzguNDc1LjEuNzYyLS40MzcuMjg4LTEuMSAwLTEuNSAwLS40IDAtLjkyNS0uMS0xLjQtLjEyNWEzLjI5NiAzLjI5NiAwIDAgMC0xLjA1IDBjLS4zNS4xMTMtLjI4Ny4yMTMtLjQ4Ny42MTNhNy41NzcgNy41NzcgMCAwIDEtMS43NjMgMi4xNWMtMS40NjIgMS4yNS0zLjQ1IDEuMzM3LTUuMTYyIDIuMDg3LjQ1LTIuOTYyIDIuNzI1LTQuNDM3IDUuNDc1LTUtLjk3NSAwLTIuNjc1LS44NzUtMy41MTMtLjQ2Mi0xLjQ4Ny42MzctMy43NSAxLjUtNC4yMTIgMy4yNS0uMjM4IDEuMDYyLS4xODggMi42MzctMS41MzggMi45NjItMS4zNS4zMjUtMS43MjUtLjk2Mi0xLjQtMS45NzUtLjg3NS40NS0yLjA1LjA4OC0xLjg2Mi0xLjA1LjE4Ny0xLjEzNyAxLjUyNS0xLjI1IDIuMzg3LTEuMzYyIDIuMjEzLS4zNSAzLjktMS42MjUgNS45ODgtMi4yODhhMjUuODQ1IDI1Ljg0NSAwIDAgMC0yLjUtMS4wMjUgNi44MzcgNi44MzcgMCAwIDAtMi42LjQ4OGMtLjkyLjExNC0xLjgyOC4zMS0yLjcxMy41ODctLjY0LjM0LTEuMTkuODI4LTEuNiAxLjQyNS0uOTg3IDEuMTYzLTIuMiAyLjUtMy45IDIuMzc1LTIuMTUtLjItMS45MTItMi42NS0uMzI1LTMuNDg3LTEuMDI1IDAtMi41LS42MzgtMi40LTEuODc1LjA4OC0xLjU1IDEuOTYzLTEuNzM4IDMuMTI1LTEuNDI1IDEuMDk3LjQxOSAyLjE2Ni45MDcgMy4yIDEuNDYyIDEuOTM4Ljc4OCAzLjc1IDAgNS43NjMtLjJhMzcuOTk0IDM3Ljk5NCAwIDAgMS00LjY1LTIuNjc1IDIuMTg3IDIuMTg3IDAgMCAwLTEuMzc1LS41NWgtMS4yNWEyNy42NzEgMjcuNjcxIDAgMCAwLTMuMzc1LjFjLS43NzUgMC0xLjMyNS43MzgtMS44MzggMS4yNWE2LjEzOCA2LjEzOCAwIDAgMS0yLjUgMS43MTMgMS45ODcgMS45ODcgMCAwIDEtMi41LS42MjVBMi4wNzUgMi4wNzUgMCAwIDEgNy43MTMgMjIuNGMtLjk3NS0uMzI1LTIuMjg4LTEuMTEzLTEuNDI1LTIuMyAxLjAxMi0xLjM4OCAyLjg3NS0uNjUgMy45MzcuMTVhNS44NzUgNS44NzUgMCAwIDAgMi45MzggMS42YzEuNDgyLjA4NyAyLjk2OC4wODcgNC40NSAwYTIzLjc0IDIzLjc0IDAgMCAxLTIuMDM4LTIuMDEzIDUuNzg3IDUuNzg3IDAgMCAwLS44NjItLjk2MmMtLjg1Mi0uMzgtMS43NTItLjY0MS0yLjY3NS0uNzc1YTE0LjUyMiAxNC41MjIgMCAwIDAtMi43NS0uNzc1IDUuNjExIDUuNjExIDAgMCAwLTIuNjg4LjYyNSA2LjI1MSA2LjI1MSAwIDAgMS0zLjEzNy41MjUgMS45NSAxLjk1IDAgMCAxLTEuNjc1LTIuMDYzYy4xMjUtMS4wMzcuOTg3LTEuMzg3IDEuODc1LTEuNTUtMi4wMjUtMS44ODcuNzc1LTMuNjg3IDIuNS0yLjAxMiAxLjAyNSAxLjAxMiAxLjYzNyAyLjkxMiAyLjkxMiAzLjQyNSAxLjYxMy42NSAzLjM3NS44ODcgNSAxLjYzNy0uOTM3LTEuMjUtMS44NS0yLjUtMi43MjUtMy43NWE2Ljg3NSA2Ljg3NSAwIDAgMC0yLjc3NS0yLjk3NWMtMS40ODctLjY3NS0zLjQ1LTEuNDg3LTMuNzUtMy4zNS0uMzUtMi4yODcgMi4yMzgtMS45IDMuNDUtLjk1YTIuMTYzIDIuMTYzIDAgMCAxIDEuNC0yLjVjMS4yNS0uNDg3IDIuMDEzLjQ2MyAyLjE3NSAxLjY3NS4wMjUgMS40MzgtLjYgMi44MjUtLjgyNSA0LjMyNS0uMjYyIDIuMjEzIDIuMTUgNC44NzUgMy4zNjMgNi42IDAtMS44NS43LTQuMDYyLS4yNjMtNS43ODctLjYyNS0xLjQyNS0yLjYxMi0zLjgyNS0xLjI1LTUuNDI1IDEtMS4xMzggMi4yMzguMTI1IDIuNTc1IDEuMTVhMS40NjIgMS40NjIgMCAwIDEgMi41LS4yNjNjMS4yNSAxLjcyNS0uNzUgMy4yMzgtMS42NjIgNC41MTMtMS4xIDEuNTEyLS45IDIuOTUtMS4wMzggNC43MzdhNi41OTcgNi41OTcgMCAwIDAtLjE2MiAyLjAyNWMuMTM3LjQxMy44MTIuODg4IDEuMTEyIDEuMjVhMjYuOTMgMjYuOTMgMCAwIDAgMi41NjMgMi4zNjNjLS4xLTIuMS4yMTItNC4yNzUtLjUxMy02LjI1LS40MjUtMS4xNS0xLjQtMy4xNS0uNS00LjI4OC45LTEuMTM3IDEuOS0uMTM3IDIuMjUuODEzYTIuMDI1IDIuMDI1IDAgMCAxIDIuNS0uNjUgMS45NSAxLjk1IDAgMCAxIC40MjUgMi41Yy0uODUgMS44MTItMy4yODcgMi43NjItMy4yODcgNC44MjUtLjEyNS45NS0uMDYzIDEuOTg3LS4xIDIuOTVhMi4wMjMgMi4wMjMgMCAwIDAgMCAuNjc1Yy4xMzcuMjc1Ljg2Mi42MTIgMS4xMTIuNzc1YTM1LjM3NyAzNS4zNzcgMCAwIDAgNSAyLjYzN2MtLjI4Ny0xLjI1LS4zMTItMi40MTItLjUxMi0zLjc1YTUuMzM4IDUuMzM4IDAgMCAwLTEuMzg4LTIuODEyYy0uNzM3LS45ODgtMS41LTIuNjUtLjM4Ny0zLjY4OC44NzUtLjgyNSAyLjAyNS0uMDYyIDIuMzUuODg4IDEuMDUtMS42IDMuNjYyLTEuNDM4IDMuNzUuNzM3LjA4NyAxLjY1LTEuMzUgMi43MjUtMi41IDMuNjI1LS4yMzMuMTUtLjQxOS4zNjMtLjUzOC42MTNhMy4wMzMgMy4wMzMgMCAwIDAtLjE4Ny43MjVjLS4wNTcuODM2LS4wMTEgMS42NzUuMTM3IDIuNSAwIC41MTIgMCAxLjI1LjQxMyAxLjUxMi41MjIuMjggMS4wODIuNDgyIDEuNjYyLjZhMjAuMTMgMjAuMTMgMCAwIDAgNC4xODggMS4wMzggNi4wNzUgNi4wNzUgMCAwIDEtMi4xODgtNC4yIDkuMSA5LjEgMCAwIDEgLjgtNC41MTNjLjgyNSAxLjI1IDIuMDEzIDIuMzUgMi43NjMgMy42NzVhNS43NjMgNS43NjMgMCAwIDEgLjEgNS4yNWMuMTY2LjAxMy4zMzMuMDEzLjUgMFonXHJcbiAgICAgICAgICBmaWxsPScjREZBRTAwJ1xyXG4gICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9J00xOS41NSAxNS43ODdzMy4yNzUtMi44NSAyLjUtMy42MzdjLS43NzUtLjc4OC0yLjExMi45MTItMi4xMTIuOTEycy0uNjM4LTEuODUtMS40NjMtMS4yNWMtLjgyNS42IDEuMDc1IDMuOTc1IDEuMDc1IDMuOTc1Wk0xNS4xODggMTAuNzg4czIuOTc1LTIuOTEzIDEuOTYyLTMuNDc1Yy0xLjAxMi0uNTYzLTEuNzUgMS4yNS0xLjc1IDEuMjVzLS45NzUtMi41LTEuNzg3LTEuNzg4Yy0uODEzLjcxMyAxLjU3NSA0LjAxMyAxLjU3NSA0LjAxM1pNOS42NjIgMTAuNDM3czEuOTYzLTQuNTg3LjQ4OC00LjgzNy0xLjQgMi42LTEuNCAyLjYtMi45MTMtMS45NS0zLjExMy0uN2MtLjIzNyAxLjUyNSA0LjAyNSAyLjkzNyA0LjAyNSAyLjkzN1pNNy4zIDE2LjUxM3MtMS44LTMuNjI1LTIuOS0zLjJjLTEuMS40MjUuNDI1IDIuMS40MjUgMi4xcy0yLjA4OC4yNzUtMS45NjMgMS41MTJjLjEyNSAxLjIzOCA0LjQzOC0uNDEyIDQuNDM4LS40MTJaTTExLjY2MiAyMi41NzVTOC4zNSAxOS42NjMgNy41IDIwLjQyNWMtLjg1Ljc2MyAyLjA2MiAyLjA3NSAyLjA2MiAyLjA3NXMtMy4xIDEuNDc1LTIuMDYyIDIuMmMxLjI1Ljg4OCA0LjE2Mi0yLjEyNSA0LjE2Mi0yLjEyNVpNMTguNTg4IDI3LjM3NXMtNC42MzgtMi42MzgtNS4zNjMtMS41ODhjLS43MjUgMS4wNSAyLjc2MyAxLjgyNSAyLjc2MyAxLjgyNXMtMi44MjUgMS45MzgtMS41MTMgMi42MzhjMS4zMTMuNyA0LjExMy0yLjg3NSA0LjExMy0yLjg3NVpNMjUuODUgMjBzMy43NS0yLjUgMi4yODctMy41MTJjLTEuMTEyLS43NjMtMi41IDEuMDg3LTIuNSAxLjA4N3MtLjgxMi0yLjEtMS43MTItMS40Yy0uOS43IDEuOTI1IDMuODI1IDEuOTI1IDMuODI1Wk0yMy45NjMgMzAuMTc1cy0uNDM4IDIuODUtMS4yNSAzLjE1Yy0uODEzLjMtLjIxMy0yLjA3NS0uMjEzLTIuMDc1cy0yLjAyNS45MjUtMS45MjUgMGMuMS0uOTI1IDMuMzg4LTEuMDc1IDMuMzg4LTEuMDc1WidcclxuICAgICAgICAgIGZpbGw9JyNGN0Q0N0QnXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD0nTTMzLjI4NyAyNi45NWE0Ljg4NyA0Ljg4NyAwIDAgMCAuMTI1LTMuMzUgNi4zNjIgNi4zNjIgMCAwIDAtMS44ODctMy4wNWMtMS4wNjMgNC41MzcgMS43NjIgNi40IDEuNzYyIDYuNFpNMzIuNzUgMjkuMTVjLS42MjIuODA0LTEuMzYgMS41MTEtMi4xODggMi4xLS44NzQuNTU1LTEuODI2Ljk3Ni0yLjgyNSAxLjI1YTYuNzEzIDYuNzEzIDAgMCAxIDIuMTEzLTIuMTM3IDExLjU4OCAxMS41ODggMCAwIDEgMi45LTEuMjEzWidcclxuICAgICAgICAgIGZpbGw9JyNEQ0IzQjQnXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IEFkZFRvQ2FsZW5kYXIgZnJvbSAncmVhY3QtYWRkLXRvLWNhbGVuZGFyJztcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuaW1wb3J0IEhlYWQgZnJvbSAnQHNyYy9jb21wb25lbnRzL0hlYWQnO1xuaW1wb3J0IHJlc29sdmVQYXRoIGZyb20gJ0BzcmMvdXRpbHMvcmVzb2x2ZVBhdGgnO1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICdAc3JjL2NvbmZpZy9hcHAnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24sIGRlZmF1bHRMb2NhbGUgfSBmcm9tICdAc3JjL2kxOG4nO1xuaW1wb3J0IGd1ZXN0TGlzdCBmcm9tICcuL2d1ZXN0X2xpc3QuanNvbic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgeyBFdmVudERhdGVJY29uLCBIZWFkZXJMb2dvLCBMb3ZlVGl0bGVJY29uIH0gZnJvbSAnLi9leHRyYSc7XG5pbXBvcnQgU3RvcmllcyBmcm9tICcuL3N0b3JpZXMnO1xuaW1wb3J0IFBpY3R1cmVzR3JpZCBmcm9tICcuL3BpY3R1cmVHcmlkJztcbmltcG9ydCBDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlIGZyb20gJy4vY29sbGVjdC1ndWVzdC1hdHRlbmRhbmNlJztcblxuY29uc3QgdHJhbnNsYXRlQ29uZmlnID0gKGFwcENvbmZpZywgbG9jYWxlKSA9PiB7XG4gIGlmICghbG9jYWxlIHx8IGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZSkge1xuICAgIHJldHVybiBhcHBDb25maWc7XG4gIH1cbiAgLy8gUmVwbGFjZSBjb25maWcgd2l0aCBsYW5nXG4gIGNvbnN0IGNvbmZpZ0xhbmcgPSBhcHBDb25maWcubGFuZ1tsb2NhbGVdO1xuICBpZiAoY29uZmlnTGFuZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGxvY2FsZTogJywgbG9jYWxlKTtcbiAgfVxuICByZXR1cm4geyAuLi5hcHBDb25maWcsIC4uLmNvbmZpZ0xhbmcgfTtcbn07XG5cbmNvbnN0IFNob3dJbnZpdGUgPSAoeyBjdXJyZW50VXJsLCBndWVzdExpc3RMYXN0VXBkYXRlZEF0LCBndWVzdCB9KSA9PiB7XG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbihndWVzdC5sb2NhbGUpO1xuXG4gIC8vIEluaXRpYXRlIGNvbmZpZyB2YXJpYWJsZXNcbiAgY29uc3Qge1xuICAgIGxvZ28sXG4gICAgb2dUYWdzLFxuICAgIGNvdXBsZUluZm8sXG4gICAgdmVudWUsXG4gICAgd2VkZGluZ0RheSxcbiAgICB3ZWRkaW5nRGF0ZSxcbiAgICB3ZWRkaW5nVGltZSxcbiAgICBjYWxlbmRhckluZm8sXG4gIH0gPSB0cmFuc2xhdGVDb25maWcoYXBwQ29uZmlnLCBndWVzdC5sb2NhbGUpO1xuICBjb25zdCB7IGJyaWRlTmFtZSwgZ3Jvb21OYW1lLCBoYXNodGFnLCBjb3VwbGVOYW1lRm9ybWF0IH0gPSBjb3VwbGVJbmZvO1xuXG4gIGNvbnN0IGNvdXBsZU5hbWVTdHIgPVxuICAgIGNvdXBsZU5hbWVGb3JtYXQgPT09ICdHUk9PTV9GSVJTVCdcbiAgICAgID8gYCR7Z3Jvb21OYW1lfSAmICR7YnJpZGVOYW1lfWBcbiAgICAgIDogYCR7YnJpZGVOYW1lfSAmICR7Z3Jvb21OYW1lfWA7XG4gIGNvbnN0IGNvdXBsZU5hbWUgPVxuICAgIGNvdXBsZU5hbWVGb3JtYXQgPT09ICdHUk9PTV9GSVJTVCcgPyAoXG4gICAgICA8PlxuICAgICAgICB7Z3Jvb21OYW1lfSA8c3Bhbj4mYW1wOzwvc3Bhbj4ge2JyaWRlTmFtZX1cbiAgICAgIDwvPlxuICAgICkgOiAoXG4gICAgICA8PlxuICAgICAgICB7YnJpZGVOYW1lfSA8c3Bhbj4mYW1wOzwvc3Bhbj4ge2dyb29tTmFtZX1cbiAgICAgIDwvPlxuICAgICk7XG5cbiAgLy8gVmVudWUgaW5mb1xuICBjb25zdCB2ZW51ZUJyaWVmID0gYCR7dmVudWUubmFtZX0sICR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gO1xuICBjb25zdCB3ZWRkaW5nRGF0ZUJyaWVmID0gYCR7d2VkZGluZ0RheX0sICR7d2VkZGluZ0RhdGV9YDtcblxuICAvLyBFdmVudCBpbmZvXG4gIGNvbnN0IGV2ZW50VGl0bGUgPSBgJHtjb3VwbGVOYW1lU3RyfSdzIFdlZGRpbmdgO1xuICBsZXQgZXZlbnREZXNjcmlwdGlvbiA9IGAke3dlZGRpbmdEYXRlQnJpZWZ9IGF0ICR7dmVudWUubmFtZX0sICR7dmVudWUuY2l0eX1gO1xuICBpZiAoZ3Vlc3QubmFtZSkge1xuICAgIGV2ZW50RGVzY3JpcHRpb24gPSBgRGVhciAke2d1ZXN0Lm5hbWV9LCB5b3UgYXJlIGNvcmRpYWxseSBpbnZpdGVkIHRvIG91ciB3ZWRkaW5nIG9uICR7d2VkZGluZ0RhdGV9IGF0ICR7dmVudWUubmFtZX0uIExvb2tpbmcgZm9yd2FyZCB0byBzZWVpbmcgeW91IWA7XG4gIH1cblxuICAvLyBDYWxlbmRhciBwYXlsb2FkXG4gIGNvbnN0IGNhbGVuZGFyRXZlbnQgPSB7XG4gICAgdGl0bGU6IGV2ZW50VGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGV2ZW50RGVzY3JpcHRpb24sXG4gICAgbG9jYXRpb246IGAke3ZlbnVlLmNpdHl9LCAke3ZlbnVlLmNvdW50cnl9YCxcbiAgICBzdGFydFRpbWU6IGNhbGVuZGFySW5mby50aW1lU3RhcnRJU08sXG4gICAgZW5kVGltZTogY2FsZW5kYXJJbmZvLnRpbWVFbmRJU08sXG4gIH07XG5cbiAgY29uc3QgZXZlbnRTY2hlZHVsZSA9IFtcbiAgICB7XG4gICAgICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAgIGV2ZW50OiAnQ2h1cmNoJyxcbiAgICAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgICAgdGltZTogJzEycG0nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgICBldmVudDogJ1JlY2VwdGlvbicsXG4gICAgICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAgIHRpbWU6ICcycG0nLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgLy8gICBldmVudDogJ0VuZ2FnZW1lbnQnLFxuICAgIC8vICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgLy8gICB0aW1lOiAnMnBtJyxcbiAgICAvLyB9LFxuICBdO1xuXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xuICAgIH0sIDEwMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50UmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgIGlmIChlbGVtZW50UG9zaXRpb24gPCB3aW5kb3dIZWlnaHQgKiAwLjkpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkLWVsZW1lbnQnKTsgLy8gQWRkIHRoZSBDU1MgY2xhc3Mgd2hlbiB0aGUgZWxlbWVudCBpcyA3NSUgdmlzaWJsZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQtZWxlbWVudCcpOyAvLyBSZW1vdmUgdGhlIENTUyBjbGFzcyBpZiBub3QgdmlzaWJsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTsgLy8gUnVuIHRoaXMgZWZmZWN0IG9ubHkgb25jZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGEucmVhY3QtYWRkLXRvLWNhbGVuZGFyX19idXR0b24gc3BhbiB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPEhlYWRcbiAgICAgICAgey4uLm9nVGFnc31cbiAgICAgICAgdGl0bGU9e2V2ZW50VGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtldmVudERlc2NyaXB0aW9ufVxuICAgICAgICBndWVzdE5hbWU9e2d1ZXN0Lm5hbWV9XG4gICAgICAgIHVybD17Y3VycmVudFVybH1cbiAgICAgICAgZGF0ZT17d2VkZGluZ0RhdGVCcmllZn1cbiAgICAgICAgbW9kaWZpZWRUaW1lPXtndWVzdExpc3RMYXN0VXBkYXRlZEF0fVxuICAgICAgICB2ZW51ZT17dmVudWVCcmllZn1cbiAgICAgICAgbG9nbz17cmVzb2x2ZVBhdGgob2dUYWdzLmxvZ28pfVxuICAgICAgICBhdXRob3I9e3Jlc29sdmVQYXRoKCcvJyl9XG4gICAgICAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdoZWFkZXJfYXJlYSc+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdoZWFkZXItY29udGFpbmVyJz5cbiAgICAgICAgICA8SGVhZGVyTG9nbyAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGVhZGVyLWxvZ28tdGV4dCc+VGhlIEFraW5sYWd1bidzIFBhcnR5PC9zcGFuPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBpZD0naG9tZScgY2xhc3NOYW1lPSdoZWFkZXJfc2xpZGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stbGlzdCBkcmFnZ2FibGUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLXRyYWNrJyBzdHlsZT17eyBvcGFjaXR5OiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmdfY292ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTEwJz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9jb250ZW50IHRleHQtY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA2MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nby5oZWFkZXJMb2dvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX3N1Yl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuMnMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdzaXRlSW50cm8nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuN3MnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvY2F0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzFzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzFzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzaHRhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvY2F0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzFzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzFzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUubmFtZX0sIHt2ZW51ZS5jaXR5fSwge3ZlbnVlLmNvdW50cnl9LlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9J2NvbWluZ19zb29uJyBjbGFzc05hbWU9J2NvbWluZ19zb29uX2FyZWEgcHQtMjAgcGItNzAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMScgc3R5bGU9e3sgekluZGV4OiAxIH19PlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgcHQtNTAgd293IGZhZGVJbidcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC4ycydcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC4ycycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPnt0KCdldmVudERhdGUnKX06PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57d2VkZGluZ0RhdGVCcmllZn08L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxBZGRUb0NhbGVuZGFyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50PXtjYWxlbmRhckV2ZW50fVxuICAgICAgICAgICAgICAgICAgICBidXR0b25MYWJlbD17dCgnYnRuQWRkVG9NeUNhbGVuZGFyJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdhc3NldHMvaW1hZ2VzL3NlY3Rpb25fc2hhcGUucG5nJyBhbHQ9J1NoYXBlJyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy04Jz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nd293IGZhZGVJbidcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC42cydcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC42cycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX2NvdW50IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIHB0LTIwJz5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2MCxcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzOCxcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlX2NvdW50IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zMCdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY291bnRfY29udGVudCdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDEsIHBhZGRpbmdUb3A6IDIwIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt2ZW51ZS5tYXBVcmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IDUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdhc3NldHMvaW1hZ2VzL2JldmVudC5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nYmV2ZW50IGNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt2ZW51ZS5tYXBVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzc1dncnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JleScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5hZGRyZXNzTGluZTF9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX3NoYXBlXzInPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0yLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIHJlZj17ZWxlbWVudFJlZn0gaWQ9J2NvbnRhY3QnIGNsYXNzTmFtZT0nY29udGFjdF9hcmVhJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjb250YWN0X3dyYXBwZXIgd293IGZhZGVJblVwQmlnJ1xuICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDMwLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNHMnLFxuICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluVXAnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWV2ZW50TGluZXVwJz5cbiAgICAgICAgICAgICAge2V2ZW50U2NoZWR1bGUubWFwKChldiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRpbWUsIGRhdGUsIGV2ZW50LCBpY29uIH0gPSBldjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2V2ZW50TGluZXVwJyBrZXk9e2V2ZW50fT5cbiAgICAgICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2V2ZW50fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dGltZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBmb3JtICovfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTknPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHRleHQtY2VudGVyIHBiLTMwJz5cbiAgICAgICAgICAgICAgICAgIHtndWVzdC5uYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdpbnZpdGF0aW9uR3JlZXRpbmcnKX1cbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuNXJlbScgfX0+e2d1ZXN0Lm5hbWV9LDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J2xvdmUtdGl0bGUtY29udGFpbmVyIGZhZGVJblVwQmlnIGZhZGVJbidcbiAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgIGRhdGEtd293LWRlbGF5PScwLjRzJ1xuICAgICAgPlxuICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudFJlZn0+XG4gICAgICAgICAgPExvdmVUaXRsZUljb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgcmVmPXtlbGVtZW50UmVmfSBjbGFzc05hbWU9J2xvdmUtdGl0bGUnPlxuICAgICAgICAgIE15IGhlYXJ0IGlzIHlvdXIgdG8gaG9sZCBhbmQgY2hlcmlzaCBmb3IgdGhlIHJlc3Qgb2Ygb3VyIGRheXMuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGFydGljbGVcbiAgICAgICAgcmVmPXtlbGVtZW50UmVmfVxuICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgIGRhdGEtZGVsYXk9JzAuN3MnXG4gICAgICAgIGNsYXNzTmFtZT0nc3Rvcmllcy1jb250YWluZXIgZmFkZUluVXBCaWcnXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPFN0b3JpZXMgLz5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0ncGljdHVyZS1ncmlkLWNvbnRhaW5lcic+XG4gICAgICAgIDxQaWN0dXJlc0dyaWQgLz5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIHsvKiBGb290ZXIgc2VjdGlvbiAqL31cbiAgICAgIDxmb290ZXIgaWQ9J2Zvb3RlcicgY2xhc3NOYW1lPSdmb290ZXJfYXJlYSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfc2hhcGVfMSc+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl93aWRnZXQgcHQtNTAgcGItMTAgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9sb2dvJz5cbiAgICAgICAgICAgICAgey8qIHtsb2dvLmZvb3RlckxvZ28gJiZcbiAgICAgICAgICAgICAgICAobG9nby5mb290ZXJMb2dvVHlwZSA9PT0gJ21wNCcgPyAoXG4gICAgICAgICAgICAgICAgICA8dmlkZW8gaGVpZ2h0PScxNDAnIGF1dG9QbGF5IG11dGVkIGxvb3A+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtsb2dvLmZvb3RlckxvZ299IHR5cGU9J3ZpZGVvL21wNCcgLz5cbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgKSA6ICggKi99XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDkwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17bG9nby5mb290ZXJMb2dvfSAvPiAqL31cbiAgICAgICAgICAgICAgey8qICkpfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl90aXRsZSAnPlxuICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RpdGxlJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvdXBsZU5hbWV9XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoNVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogJyNEM0QzRDMnLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzQwcHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAjRFdlZGRpbmdcbiAgICAgICAgPC9oNT5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPENvbGxlY3RHdWVzdEF0dGVuZGFuY2VcbiAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XG4gICAgICAgIHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNob3dJbnZpdGUuZ2V0SW5pdGlhbFByb3BzID0gKGN0eCkgPT4ge1xuICBjb25zdCBsb2NhbGVQYXJhbXMgPSBjdHgucXVlcnkubGFuZyB8fCBkZWZhdWx0TG9jYWxlO1xuICBjb25zdCBlbXB0eUd1ZXN0UGFyYW1zID0ge1xuICAgIGd1ZXN0OiB7XG4gICAgICBndWVzdElkOiAnJyxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZ3JlZXRpbmc6ICcnLFxuICAgICAgbG9jYWxlOiBsb2NhbGVQYXJhbXMsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBjdXJyZW50VXJsID0gcmVzb2x2ZVBhdGgoY3R4LnJlcS51cmwpO1xuICBjb25zdCBndWVzdElkID0gY3R4LnF1ZXJ5LnU7XG4gIGlmICghZ3Vlc3RJZCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgLi4uZW1wdHlHdWVzdFBhcmFtcyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgZ3Vlc3REYXRhID0gZ3Vlc3RMaXN0LmRhdGE7XG4gIGNvbnN0IGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQgPSBndWVzdExpc3QubWV0YS5sYXN0VXBkYXRlZEF0O1xuICBjb25zdCB7IG5hbWUsIGdyZWV0aW5nLCBsb2NhbGUgfSA9XG4gICAgZ3Vlc3REYXRhLmZpbHRlcigoZ3Vlc3QpID0+IGd1ZXN0Lmd1ZXN0SWQgPT09IGd1ZXN0SWQpWzBdIHx8IHt9O1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3VycmVudFVybCxcbiAgICBndWVzdExpc3RMYXN0VXBkYXRlZEF0LFxuICAgIGd1ZXN0OiB7XG4gICAgICBuYW1lLFxuICAgICAgZ3JlZXRpbmcsXG4gICAgICBndWVzdElkLFxuICAgICAgbG9jYWxlOiBsb2NhbGUgfHwgbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93SW52aXRlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmx1cmhhc2ggfSBmcm9tICdyZWFjdC1ibHVyaGFzaCc7XHJcbmNvbnN0IFBpY3R1cmVzR3JpZCA9ICgpID0+IHtcclxuICBjb25zdCBwaWN0dXJlcyA9IFtcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDEpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICgyKS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoMykuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDQpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICg1KS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoNikuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDcpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICg4KS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoOSkuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDEwKS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoMTEpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICgxMikuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDEzKS5qcGcnLFxyXG4gIF07XHJcbiAgY29uc3QgW3NlbGVjdGVkUGljdHVyZSwgc2V0U2VsZWN0ZWRQaWN0dXJlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkZWRJbWFnZXNDb3VudCwgc2V0TG9hZGVkSW1hZ2VzQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0UGljdHVyZSA9IChwaWN0dXJlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFBpY3R1cmUocGljdHVyZSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZEltYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBwaWN0dXJlIG9mIHBpY3R1cmVzKSB7XHJcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgIHNldExvYWRlZEltYWdlc0NvdW50KChwcmV2Q291bnQpID0+IHByZXZDb3VudCArIDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMTQ5ODQxNzc5NF8wYCxpbWcsICdpbWFnZWUnKSk7XHJcbiAgICAgICAgaW1nLnNyYyA9IHBpY3R1cmU7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IChpbWcub25sb2FkID0gcmVzb2x2ZSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzZXRJbWFnZUxvYWRlZCh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZEltYWdlcygpO1xyXG5cclxuICAgIGlmIChsb2FkZWRJbWFnZXNDb3VudCA9PT0gcGljdHVyZXMubGVuZ3RoKSB7XHJcbiAgICAgIHNldEltYWdlTG9hZGVkKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtwaWN0dXJlcywgbG9hZGVkSW1hZ2VzQ291bnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwaWN0dXJlLWdyaWQnPlxyXG4gICAgICAgIHtwaWN0dXJlcy5tYXAoKHBpY3R1cmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgdGl0bGU9J3ZpZXcgaW1hZ2UnXHJcbiAgICAgICAgICAgICAgZGF0YS10b2dnbGU9J21vZGFsJ1xyXG4gICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PScjbXlNb2RhbCdcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3RQaWN0dXJlKHBpY3R1cmUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGljdHVyZSdcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBpbWFnZUxvYWRlZCA/ICdub25lJyA6ICdpbmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPEJsdXJoYXNoXHJcbiAgICAgICAgICAgICAgICAgIGhhc2g9J0xrT3llVkUwUipXQz93V0FqWm9mTXtzOlJqb00nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZ3JpZC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17JzMwMHB4J31cclxuICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvblg9ezMyfVxyXG4gICAgICAgICAgICAgICAgICByZXNvbHV0aW9uWT17MzJ9XHJcbiAgICAgICAgICAgICAgICAgIHB1bmNoPXsxfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICFpbWFnZUxvYWRlZCA/ICdub25lJyA6ICdpbmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dyaWQtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICBlZmZlY3Q9J2JsdXInXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YFBpY3R1cmUgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3NlbGVjdGVkUGljdHVyZSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbCBmYWRlJyBpZD0nbXlNb2RhbCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1kaWFsb2cnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZFBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PSdzZWxlY3RlZCBwaWN0dXJlJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljdHVyZXNHcmlkO1xyXG4vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7ZnVuY3Rpb24gXzB4MzkxZCgpe3ZhciBfMHgyZDhhOTg9WydtZXNzYWdlJywndGVzdCcsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCc2aG9CSEp4JywnZnVuY3Rpb24nLCdfYWxsb3dlZFRvU2VuZCcsJzE1Wm1MVkxsJywnX2lzVW5kZWZpbmVkJywnJywnZW52JywnZWxhcHNlZCcsJ1BPU0lUSVZFX0lORklOSVRZJywnMS4wLjAnLCdkYXRlJywnX2NvbnNvbGVfbmluamEnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ25vZGVNb2R1bGVzJywnX2FkZFByb3BlcnR5JywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdjb25zb2xlJywnaXNBcnJheScsJ2FycmF5JywnMTMxMjc2NmZGTExBRCcsJ3Jvb3RfZXhwJywnY2FsbCcsJ3Jvb3RfZXhwX2lkJywnY291bnQnLCdTdHJpbmcnLCd3YXJuJywnJywnYWxsU3RyTGVuZ3RoJywnMjBBdU1Yd1gnLCduYW1lJywnbGV2ZWwnLCdfYWRkT2JqZWN0UHJvcGVydHknLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCcxOTc4NFJaV0tHZCcsJ3N0YWNrVHJhY2VMaW1pdCcsJ1tvYmplY3RcXFxceDIwU2V0XScsJ01hcCcsJzM5MTV6RGNXelgnLCdoaXRzJywnZGlzYWJsZWRUcmFjZScsJ2xvY2F0aW9uJywnc3Vic3RyJywndW5rbm93bicsJ1tvYmplY3RcXFxceDIwQXJyYXldJywnX2lzUHJpbWl0aXZlVHlwZScsJ21ldGhvZCcsJ19zZXROb2RlUGVybWlzc2lvbnMnLCdfaW5OZXh0RWRnZScsJ3Vuc2hpZnQnLCdzdHJpbmdpZnknLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ19hZGRGdW5jdGlvbnNOb2RlJywndmVyc2lvbnMnLCdfcmVjb25uZWN0VGltZW91dCcsJ19kYXRlVG9TdHJpbmcnLCdyZW1peCcsJzEyMzIyOTdzbUl3TW0nLCdob3N0bmFtZScsJ2Rpc2FibGVkTG9nJywncGVyZl9ob29rcycsJ2NhcHBlZCcsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCcxNDI1M2hEcElubScsJ3RoZW4nLCdkZXB0aCcsJ2hhc093blByb3BlcnR5Jywnbm9GdW5jdGlvbnMnLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ05FWFRfUlVOVElNRScsJ19wXycsJ21hdGNoJywncmVwbGFjZScsJ2dldFdlYlNvY2tldENsYXNzJywnam9pbicsJ2VkZ2UnLCdwdXNoJywnbnVtYmVyJywnX3R5cGUnLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ3Byb2Nlc3MnLCdlcnJvcicsJ19wX2xlbmd0aCcsJ2RvY2tlcml6ZWRBcHAnLCdzdHJpbmcnLCdzcGxpdCcsJ19zZXROb2RlSWQnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnW29iamVjdFxcXFx4MjBCaWdJbnRdJywndGltZUVuZCcsJ19pc01hcCcsJ3JlZHVjZUxpbWl0cycsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnZnVuY05hbWUnLCdjYXRjaCcsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ25vdycsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnNDMyTWhITkZPJywnX2Nvbm5lY3RlZCcsJ3RvU3RyaW5nJywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ2RhdGEnLCdocnRpbWUnLCdlbnVtZXJhYmxlJywnYXN0cm8nLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywnX2luQnJvd3NlcicsJ3RvdGFsU3RyTGVuZ3RoJywndHJhY2UnLCdORUdBVElWRV9JTkZJTklUWScsJ2dldE93blByb3BlcnR5TmFtZXMnLCdudWxsJywnbnV4dCcsJ19oYXNNYXBPbkl0c1BhdGgnLCdcXFxceDIwc2VydmVyJywncG9ydCcsJ2xlbmd0aCcsJ19XZWJTb2NrZXRDbGFzcycsJ3BhcmVudCcsJ25lZ2F0aXZlWmVybycsJ2VsZW1lbnRzJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnZ2xvYmFsJywnY2FwcGVkRWxlbWVudHMnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ1N5bWJvbCcsJ3BhdGgnLCdib29sZWFuJywnU2V0JywndGltZVN0YW1wJywnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnX3BfbmFtZScsJ19TeW1ib2wnLCdfa2V5U3RyUmVnRXhwJywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdnZXR0ZXInLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50Jywnc3ltYm9sJywnX29iamVjdFRvU3RyaW5nJywnX3NvcnRQcm9wcycsJ3Jvb3RFeHByZXNzaW9uJywnd2VicGFjaycsJ3NvcnQnLCdOdW1iZXInLCc6bG9nUG9pbnRJZDonLCc4Mzc2MzYwblRGZkNvJywndmFsdWUnLCdwcm90b3R5cGUnLCdfcHJvcGVydHknLCdhdXRvRXhwYW5kJywnb2JqZWN0JywnX2lzU2V0Jywnc3RyTGVuZ3RoJywnX3NvY2tldCcsJ2NvdmVyYWdlJywnX3NldE5vZGVRdWVyeVBhdGgnLCd3czovLycsJ19oYXNTZXRPbkl0c1BhdGgnLCdiaWdpbnQnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdyZXNvbHZlR2V0dGVycycsJ2dldE93blByb3BlcnR5U3ltYm9scycsJ3RvTG93ZXJDYXNlJywndW5yZWYnLCd0eXBlJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCdfc2VuZEVycm9yTWVzc2FnZScsJzUzODg2UkJCRWZXJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdfcHJvcGVydHlOYW1lJywnY2xvc2UnLCd1bmRlZmluZWQnLCdwb3NpdGl2ZUluZmluaXR5JywnbmFuJywnX2FkZExvYWROb2RlJywnQm9vbGVhbicsJ3Byb3BzJywnbmV4dC5qcycsJ29ub3BlbicsJ2xvZycsJ19jb25uZWN0VG9Ib3N0Tm93JywncmVsb2FkJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0JywndGltZScsJ2dldCcsJ2NvbnN0cnVjdG9yJywnX3NldE5vZGVMYWJlbCcsJ2luZGV4JywnW29iamVjdFxcXFx4MjBNYXBdJyxbXFxcImxvY2FsaG9zdFxcXCIsXFxcIjEyNy4wLjAuMVxcXCIsXFxcImV4YW1wbGUuY3lwcmVzcy5pb1xcXCIsXFxcIkRhbWlsYXJlXFxcIixcXFwiMTY5LjI1NC44MC44MFxcXCIsXFxcIjE3Mi4zMS4xMTIuMVxcXCJdLCdvbm1lc3NhZ2UnLCdmb3JFYWNoJywnbm9kZScsJ2dldFByb3RvdHlwZU9mJywnQnVmZmVyJywnNDQzMTA0MENRSEVzbycsJ1xcXFx4MjBicm93c2VyJywnX3JlZ0V4cFRvU3RyaW5nJywnaW5jbHVkZXMnLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywnZGVmYXVsdCcsJ3NlcmlhbGl6ZScsJzYwOTkyJywnX19lcycrJ01vZHVsZScsJ3BlcmZvcm1hbmNlJywnYmluZCcsJ3JlYWR5U3RhdGUnLCdfY29ubmVjdGluZycsJ19udW1iZXJSZWdFeHAnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywnX2lzQXJyYXknLCdvbmVycm9yJywnaG9zdCcsJ19IVE1MQWxsQ29sbGVjdGlvbicsJ193cycsJzE2OTgzNDk3MDM5MzYnLCdzZW5kJywnY29uY2F0JywnZ2F0ZXdheS5kb2NrZXIuaW50ZXJuYWwnLCdjdXJyZW50Jywnb25jbG9zZScsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCcxMjcuMC4wLjEnLCdhdXRvRXhwYW5kTGltaXQnLCdFcnJvcicsJ19jYXBJZlN0cmluZycsJ3NvcnRQcm9wcycsJ191bmRlZmluZWQnXTtfMHgzOTFkPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDJkOGE5ODt9O3JldHVybiBfMHgzOTFkKCk7fXZhciBfMHgzMGQ0NmM9XzB4Mzk0YjtmdW5jdGlvbiBfMHgzOTRiKF8weDEyMmYzMixfMHg1NjlmMjgpe3ZhciBfMHgzOTFkZjM9XzB4MzkxZCgpO3JldHVybiBfMHgzOTRiPWZ1bmN0aW9uKF8weDM5NGIzNSxfMHgyZmJlMTYpe18weDM5NGIzNT1fMHgzOTRiMzUtMHhjYzt2YXIgXzB4MTExODkwPV8weDM5MWRmM1tfMHgzOTRiMzVdO3JldHVybiBfMHgxMTE4OTA7fSxfMHgzOTRiKF8weDEyMmYzMixfMHg1NjlmMjgpO30oZnVuY3Rpb24oXzB4MWQzZTUzLF8weDFmMjRlNSl7dmFyIF8weDQzMGM2Yz1fMHgzOTRiLF8weDQ1OTVlYz1fMHgxZDNlNTMoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDU1MDZiZj1wYXJzZUludChfMHg0MzBjNmMoMHhlYykpLzB4MSooLXBhcnNlSW50KF8weDQzMGM2YygweDE5NCkpLzB4MikrLXBhcnNlSW50KF8weDQzMGM2YygweDEyNykpLzB4MyoocGFyc2VJbnQoXzB4NDMwYzZjKDB4MTA1KSkvMHg0KSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4MWIwKSkvMHg1Ky1wYXJzZUludChfMHg0MzBjNmMoMHhlOSkpLzB4NioocGFyc2VJbnQoXzB4NDMwYzZjKDB4ZmMpKS8weDcpKy1wYXJzZUludChfMHg0MzBjNmMoMHgxMGEpKS8weDgqKHBhcnNlSW50KF8weDQzMGM2YygweDEwZSkpLzB4OSkrLXBhcnNlSW50KF8weDQzMGM2YygweDE3ZSkpLzB4YSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTIxKSkvMHhiKigtcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTRiKSkvMHhjKTtpZihfMHg1NTA2YmY9PT1fMHgxZjI0ZTUpYnJlYWs7ZWxzZSBfMHg0NTk1ZWNbJ3B1c2gnXShfMHg0NTk1ZWNbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDEwM2I0YSl7XzB4NDU5NWVjWydwdXNoJ10oXzB4NDU5NWVjWydzaGlmdCddKCkpO319fShfMHgzOTFkLDB4OTZkY2YpKTt2YXIgaj1PYmplY3RbJ2NyZWF0ZSddLEg9T2JqZWN0WydkZWZpbmVQcm9wZXJ0eSddLEc9T2JqZWN0W18weDMwZDQ2YygweDE2ZSldLGVlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlOYW1lcyddLHRlPU9iamVjdFtfMHgzMGQ0NmMoMHgxYWUpXSxuZT1PYmplY3RbJ3Byb3RvdHlwZSddW18weDMwZDQ2YygweDEyYSldLHJlPShfMHgxZDVmYzYsXzB4NzQ3ODFkLF8weDhmMDNjZCxfMHg0OWZmNGYpPT57dmFyIF8weDE4MGRjZD1fMHgzMGQ0NmM7aWYoXzB4NzQ3ODFkJiZ0eXBlb2YgXzB4NzQ3ODFkPT1fMHgxODBkY2QoMHgxODMpfHx0eXBlb2YgXzB4NzQ3ODFkPT1fMHgxODBkY2QoMHhlYSkpe2ZvcihsZXQgXzB4MTZjZDk1IG9mIGVlKF8weDc0NzgxZCkpIW5lWydjYWxsJ10oXzB4MWQ1ZmM2LF8weDE2Y2Q5NSkmJl8weDE2Y2Q5NSE9PV8weDhmMDNjZCYmSChfMHgxZDVmYzYsXzB4MTZjZDk1LHsnZ2V0JzooKT0+XzB4NzQ3ODFkW18weDE2Y2Q5NV0sJ2VudW1lcmFibGUnOiEoXzB4NDlmZjRmPUcoXzB4NzQ3ODFkLF8weDE2Y2Q5NSkpfHxfMHg0OWZmNGZbXzB4MTgwZGNkKDB4MTUxKV19KTt9cmV0dXJuIF8weDFkNWZjNjt9LHg9KF8weDU2OGJjOCxfMHgyZGUxZDQsXzB4NWI0YzRmKT0+KF8weDViNGM0Zj1fMHg1NjhiYzghPW51bGw/aih0ZShfMHg1NjhiYzgpKTp7fSxyZShfMHgyZGUxZDR8fCFfMHg1NjhiYzh8fCFfMHg1NjhiYzhbXzB4MzBkNDZjKDB4Y2QpXT9IKF8weDViNGM0ZixfMHgzMGQ0NmMoMHgxYjUpLHsndmFsdWUnOl8weDU2OGJjOCwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDViNGM0ZixfMHg1NjhiYzgpKSxYPWNsYXNze2NvbnN0cnVjdG9yKF8weDQ3ZjM4YyxfMHg1YzFiMDYsXzB4M2YyODU2LF8weDQ1N2QzZCxfMHgxOGZmNjQpe3ZhciBfMHg0YmI2MWQ9XzB4MzBkNDZjO3RoaXNbXzB4NGJiNjFkKDB4MTY1KV09XzB4NDdmMzhjLHRoaXNbXzB4NGJiNjFkKDB4ZDYpXT1fMHg1YzFiMDYsdGhpc1tfMHg0YmI2MWQoMHgxNWQpXT1fMHgzZjI4NTYsdGhpc1tfMHg0YmI2MWQoMHhmNildPV8weDQ1N2QzZCx0aGlzWydkb2NrZXJpemVkQXBwJ109XzB4MThmZjY0LHRoaXNbXzB4NGJiNjFkKDB4ZWIpXT0hMHgwLHRoaXNbXzB4NGJiNjFkKDB4MTM3KV09ITB4MCx0aGlzW18weDRiYjYxZCgweDE0YyldPSEweDEsdGhpc1tfMHg0YmI2MWQoMHhkMSldPSEweDEsdGhpc1snX2luTmV4dEVkZ2UnXT1fMHg0N2YzOGNbXzB4NGJiNjFkKDB4MTM4KV0/LltfMHg0YmI2MWQoMHhlZildPy5bXzB4NGJiNjFkKDB4MTJkKV09PT0nZWRnZScsdGhpc1tfMHg0YmI2MWQoMHgxNTQpXT0hdGhpc1tfMHg0YmI2MWQoMHgxNjUpXVtfMHg0YmI2MWQoMHgxMzgpXT8uW18weDRiYjYxZCgweDExZCldPy5bXzB4NGJiNjFkKDB4MWFkKV0mJiF0aGlzW18weDRiYjYxZCgweDExOCldLHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddPW51bGwsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT0weDAsdGhpc1tfMHg0YmI2MWQoMHgxNDUpXT0weDE0LHRoaXNbXzB4NGJiNjFkKDB4MTc0KV09J2h0dHBzOi8vdGlueXVybC5jb20vMzd4OGI3OXQnLHRoaXNbXzB4NGJiNjFkKDB4MTkzKV09KHRoaXNbXzB4NGJiNjFkKDB4MTU0KV0/XzB4NGJiNjFkKDB4MTRhKTonQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnKSt0aGlzW18weDRiYjYxZCgweDE3NCldO31hc3luY1tfMHgzMGQ0NmMoMHgxMzEpXSgpe3ZhciBfMHgxZTkwZjE9XzB4MzBkNDZjO2lmKHRoaXNbXzB4MWU5MGYxKDB4MTVmKV0pcmV0dXJuIHRoaXNbXzB4MWU5MGYxKDB4MTVmKV07bGV0IF8weDRhZTc3YztpZih0aGlzW18weDFlOTBmMSgweDE1NCldfHx0aGlzWydfaW5OZXh0RWRnZSddKV8weDRhZTc3Yz10aGlzW18weDFlOTBmMSgweDE2NSldWydXZWJTb2NrZXQnXTtlbHNle2lmKHRoaXNbJ2dsb2JhbCddW18weDFlOTBmMSgweDEzOCldPy5bJ19XZWJTb2NrZXQnXSlfMHg0YWU3N2M9dGhpc1snZ2xvYmFsJ11bXzB4MWU5MGYxKDB4MTM4KV0/LlsnX1dlYlNvY2tldCddO2Vsc2UgdHJ5e2xldCBfMHg0Y2ViOTU9YXdhaXQgaW1wb3J0KCdwYXRoJyk7XzB4NGFlNzdjPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydCgndXJsJykpWydwYXRoVG9GaWxlVVJMJ10oXzB4NGNlYjk1W18weDFlOTBmMSgweDEzMildKHRoaXNbXzB4MWU5MGYxKDB4ZjYpXSwnd3MvaW5kZXguanMnKSlbJ3RvU3RyaW5nJ10oKSkpW18weDFlOTBmMSgweDFiNSldO31jYXRjaHt0cnl7XzB4NGFlNzdjPXJlcXVpcmUocmVxdWlyZShfMHgxZTkwZjEoMHgxNmEpKVtfMHgxZTkwZjEoMHgxMzIpXSh0aGlzWydub2RlTW9kdWxlcyddLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKF8weDFlOTBmMSgweDFhMykpO319fXJldHVybiB0aGlzWydfV2ViU29ja2V0Q2xhc3MnXT1fMHg0YWU3N2MsXzB4NGFlNzdjO31bXzB4MzBkNDZjKDB4MWExKV0oKXt2YXIgXzB4NDkwODlhPV8weDMwZDQ2Yzt0aGlzW18weDQ5MDg5YSgweGQxKV18fHRoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT49dGhpc1tfMHg0OTA4OWEoMHgxNDUpXXx8KHRoaXNbXzB4NDkwODlhKDB4MTM3KV09ITB4MSx0aGlzW18weDQ5MDg5YSgweGQxKV09ITB4MCx0aGlzW18weDQ5MDg5YSgweDExYildKyssdGhpc1tfMHg0OTA4OWEoMHhkOCldPW5ldyBQcm9taXNlKChfMHgzNGVhZmMsXzB4MTQ0MzI0KT0+e3ZhciBfMHg4NzRmYTQ9XzB4NDkwODlhO3RoaXNbXzB4ODc0ZmE0KDB4MTMxKV0oKVtfMHg4NzRmYTQoMHgxMjgpXShfMHg0YmFmNTg9Pnt2YXIgXzB4NDFkZGFjPV8weDg3NGZhNDtsZXQgXzB4MjU3NDNiPW5ldyBfMHg0YmFmNTgoXzB4NDFkZGFjKDB4MTg5KSsoIXRoaXNbJ19pbkJyb3dzZXInXSYmdGhpc1tfMHg0MWRkYWMoMHgxM2IpXT9fMHg0MWRkYWMoMHhkYyk6dGhpc1tfMHg0MWRkYWMoMHhkNildKSsnOicrdGhpc1tfMHg0MWRkYWMoMHgxNWQpXSk7XzB4MjU3NDNiW18weDQxZGRhYygweGQ1KV09KCk9Pnt2YXIgXzB4MmI0ZjY1PV8weDQxZGRhYzt0aGlzW18weDJiNGY2NSgweGViKV09ITB4MSx0aGlzW18weDJiNGY2NSgweDE3MildKF8weDI1NzQzYiksdGhpc1tfMHgyYjRmNjUoMHhmNSldKCksXzB4MTQ0MzI0KG5ldyBFcnJvcignbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicpKTt9LF8weDI1NzQzYltfMHg0MWRkYWMoMHgxOWYpXT0oKT0+e3ZhciBfMHg0MjA4MmE9XzB4NDFkZGFjO3RoaXNbXzB4NDIwODJhKDB4MTU0KV18fF8weDI1NzQzYltfMHg0MjA4MmEoMHgxODYpXSYmXzB4MjU3NDNiW18weDQyMDgyYSgweDE4NildWyd1bnJlZiddJiZfMHgyNTc0M2JbXzB4NDIwODJhKDB4MTg2KV1bXzB4NDIwODJhKDB4MTkwKV0oKSxfMHgzNGVhZmMoXzB4MjU3NDNiKTt9LF8weDI1NzQzYltfMHg0MWRkYWMoMHhkZSldPSgpPT57dmFyIF8weDEzMjk3Mj1fMHg0MWRkYWM7dGhpc1tfMHgxMzI5NzIoMHgxMzcpXT0hMHgwLHRoaXNbXzB4MTMyOTcyKDB4MTcyKV0oXzB4MjU3NDNiKSx0aGlzWydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCk7fSxfMHgyNTc0M2JbXzB4NDFkZGFjKDB4MWFiKV09XzB4MWFmZDExPT57dmFyIF8weDE4ZDZiNT1fMHg0MWRkYWM7dHJ5e18weDFhZmQxMSYmXzB4MWFmZDExW18weDE4ZDZiNSgweDE0ZildJiZ0aGlzW18weDE4ZDZiNSgweDE1NCldJiZKU09OWydwYXJzZSddKF8weDFhZmQxMVsnZGF0YSddKVtfMHgxOGQ2YjUoMHgxMTYpXT09PV8weDE4ZDZiNSgweDFhMikmJnRoaXNbJ2dsb2JhbCddW18weDE4ZDZiNSgweDExMSldW18weDE4ZDZiNSgweDFhMildKCk7fWNhdGNoe319O30pW18weDg3NGZhNCgweDEyOCldKF8weDFiMjRkMj0+KHRoaXNbXzB4ODc0ZmE0KDB4MTRjKV09ITB4MCx0aGlzWydfY29ubmVjdGluZyddPSEweDEsdGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgxLHRoaXNbXzB4ODc0ZmE0KDB4ZWIpXT0hMHgwLHRoaXNbXzB4ODc0ZmE0KDB4MTFiKV09MHgwLF8weDFiMjRkMikpW18weDg3NGZhNCgweDE0NyldKF8weDM3ZjVhMD0+KHRoaXNbXzB4ODc0ZmE0KDB4MTRjKV09ITB4MSx0aGlzW18weDg3NGZhNCgweGQxKV09ITB4MSxjb25zb2xlW18weDg3NGZhNCgweDEwMildKF8weDg3NGZhNCgweDE5MikrdGhpc1tfMHg4NzRmYTQoMHgxNzQpXSksXzB4MTQ0MzI0KG5ldyBFcnJvcignZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJysoXzB4MzdmNWEwJiZfMHgzN2Y1YTBbXzB4ODc0ZmE0KDB4ZTYpXSkpKSkpO30pKTt9WydfZGlzcG9zZVdlYnNvY2tldCddKF8weDQ5YTQ2MSl7dmFyIF8weDRmODg2OT1fMHgzMGQ0NmM7dGhpc1tfMHg0Zjg4NjkoMHgxNGMpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MTt0cnl7XzB4NDlhNDYxW18weDRmODg2OSgweGRlKV09bnVsbCxfMHg0OWE0NjFbJ29uZXJyb3InXT1udWxsLF8weDQ5YTQ2MVtfMHg0Zjg4NjkoMHgxOWYpXT1udWxsO31jYXRjaHt9dHJ5e18weDQ5YTQ2MVtfMHg0Zjg4NjkoMHhkMCldPDB4MiYmXzB4NDlhNDYxW18weDRmODg2OSgweDE5NyldKCk7fWNhdGNoe319WydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCl7dmFyIF8weDE1OTc5Yj1fMHgzMGQ0NmM7Y2xlYXJUaW1lb3V0KHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J10pLCEodGhpc1tfMHgxNTk3OWIoMHgxMWIpXT49dGhpc1tfMHgxNTk3OWIoMHgxNDUpXSkmJih0aGlzW18weDE1OTc5YigweDExZSldPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4NTU3YjY4PV8weDE1OTc5Yjt0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbJ19jb25uZWN0aW5nJ118fCh0aGlzWydfY29ubmVjdFRvSG9zdE5vdyddKCksdGhpc1tfMHg1NTdiNjgoMHhkOCldPy5bXzB4NTU3YjY4KDB4MTQ3KV0oKCk9PnRoaXNbXzB4NTU3YjY4KDB4ZjUpXSgpKSk7fSwweDFmNCksdGhpc1tfMHgxNTk3OWIoMHgxMWUpXVtfMHgxNTk3OWIoMHgxOTApXSYmdGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXVtfMHgxNTk3OWIoMHgxOTApXSgpKTt9YXN5bmNbXzB4MzBkNDZjKDB4ZGEpXShfMHgzOWU3ODIpe3ZhciBfMHg0ODYwZjk9XzB4MzBkNDZjO3RyeXtpZighdGhpc1snX2FsbG93ZWRUb1NlbmQnXSlyZXR1cm47dGhpc1tfMHg0ODYwZjkoMHgxMzcpXSYmdGhpc1tfMHg0ODYwZjkoMHgxYTEpXSgpLChhd2FpdCB0aGlzWydfd3MnXSlbXzB4NDg2MGY5KDB4ZGEpXShKU09OWydzdHJpbmdpZnknXShfMHgzOWU3ODIpKTt9Y2F0Y2goXzB4MWUxN2UwKXtjb25zb2xlW18weDQ4NjBmOSgweDEwMildKHRoaXNbXzB4NDg2MGY5KDB4MTkzKV0rJzpcXFxceDIwJysoXzB4MWUxN2UwJiZfMHgxZTE3ZTBbXzB4NDg2MGY5KDB4ZTYpXSkpLHRoaXNbXzB4NDg2MGY5KDB4ZWIpXT0hMHgxLHRoaXNbXzB4NDg2MGY5KDB4ZjUpXSgpO319fTtmdW5jdGlvbiBiKF8weDQ2ZDBiMSxfMHg0YzE4ZWIsXzB4MzIxZmY3LF8weDY3NjkxMSxfMHg0YzgyOTksXzB4NTQyNTVhKXt2YXIgXzB4MzkzN2U3PV8weDMwZDQ2YztsZXQgXzB4NTBlMGY5PV8weDMyMWZmN1tfMHgzOTM3ZTcoMHgxM2QpXSgnLCcpWydtYXAnXShfMHg0MWQ4Nz0+e3ZhciBfMHg1MTc5YTI9XzB4MzkzN2U3O3RyeXtfMHg0NmQwYjFbJ19jb25zb2xlX25pbmphX3Nlc3Npb24nXXx8KChfMHg0YzgyOTk9PT1fMHg1MTc5YTIoMHgxOWUpfHxfMHg0YzgyOTk9PT1fMHg1MTc5YTIoMHgxMjApfHxfMHg0YzgyOTk9PT1fMHg1MTc5YTIoMHgxNTIpKSYmKF8weDRjODI5OSs9IV8weDQ2ZDBiMVtfMHg1MTc5YTIoMHgxMzgpXT8uW18weDUxNzlhMigweDExZCldPy5bXzB4NTE3OWEyKDB4MWFkKV0mJl8weDQ2ZDBiMVtfMHg1MTc5YTIoMHgxMzgpXT8uWydlbnYnXT8uW18weDUxNzlhMigweDEyZCldIT09J2VkZ2UnP18weDUxNzlhMigweDFiMSk6XzB4NTE3OWEyKDB4MTVjKSksXzB4NDZkMGIxWydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ109eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDRjODI5OX0pO2xldCBfMHg3YWFiYmY9bmV3IFgoXzB4NDZkMGIxLF8weDRjMThlYixfMHg0MWQ4NyxfMHg2NzY5MTEsXzB4NTQyNTVhKTtyZXR1cm4gXzB4N2FhYmJmWydzZW5kJ11bXzB4NTE3OWEyKDB4Y2YpXShfMHg3YWFiYmYpO31jYXRjaChfMHgxY2IwNmYpe3JldHVybiBjb25zb2xlW18weDUxNzlhMigweDEwMildKCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsXzB4MWNiMDZmJiZfMHgxY2IwNmZbJ21lc3NhZ2UnXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4Mjc3ZTA0PT5fMHg1MGUwZjlbXzB4MzkzN2U3KDB4MWFjKV0oXzB4YTQyZmI9Pl8weGE0MmZiKF8weDI3N2UwNCkpO31mdW5jdGlvbiBXKF8weDFlYzVjMil7dmFyIF8weDNmMDQ5NT1fMHgzMGQ0NmM7bGV0IF8weDExNDI3Zj1mdW5jdGlvbihfMHgzZDU1ODMsXzB4ZjUwYTcpe3JldHVybiBfMHhmNTBhNy1fMHgzZDU1ODM7fSxfMHgyNTUxNWU7aWYoXzB4MWVjNWMyW18weDNmMDQ5NSgweGNlKV0pXzB4MjU1MTVlPWZ1bmN0aW9uKCl7dmFyIF8weDM4NDA1OD1fMHgzZjA0OTU7cmV0dXJuIF8weDFlYzVjMltfMHgzODQwNTgoMHhjZSldWydub3cnXSgpO307ZWxzZXtpZihfMHgxZWM1YzJbXzB4M2YwNDk1KDB4MTM4KV0mJl8weDFlYzVjMltfMHgzZjA0OTUoMHgxMzgpXVtfMHgzZjA0OTUoMHgxNTApXSYmXzB4MWVjNWMyW18weDNmMDQ5NSgweDEzOCldPy5bXzB4M2YwNDk1KDB4ZWYpXT8uW18weDNmMDQ5NSgweDEyZCldIT09XzB4M2YwNDk1KDB4MTMzKSlfMHgyNTUxNWU9ZnVuY3Rpb24oKXt2YXIgXzB4NGI5YThjPV8weDNmMDQ5NTtyZXR1cm4gXzB4MWVjNWMyW18weDRiOWE4YygweDEzOCldWydocnRpbWUnXSgpO30sXzB4MTE0MjdmPWZ1bmN0aW9uKF8weDEzNDBmMixfMHg0NWU5MDApe3JldHVybiAweDNlOCooXzB4NDVlOTAwWzB4MF0tXzB4MTM0MGYyWzB4MF0pKyhfMHg0NWU5MDBbMHgxXS1fMHgxMzQwZjJbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4NGExOWM4fT1yZXF1aXJlKF8weDNmMDQ5NSgweDEyNCkpO18weDI1NTE1ZT1mdW5jdGlvbigpe3ZhciBfMHg0OTU1NzI9XzB4M2YwNDk1O3JldHVybiBfMHg0YTE5YzhbXzB4NDk1NTcyKDB4MTQ5KV0oKTt9O31jYXRjaHtfMHgyNTUxNWU9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHgxMTQyN2YsJ3RpbWVTdGFtcCc6XzB4MjU1MTVlLCdub3cnOigpPT5EYXRlW18weDNmMDQ5NSgweDE0OSldKCl9O31mdW5jdGlvbiBKKF8weDJjOTlmZCxfMHgxMjk4ZjksXzB4N2E0NDUwKXt2YXIgXzB4MmI2NTYwPV8weDMwZDQ2YztpZihfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MThjKV0hPT12b2lkIDB4MClyZXR1cm4gXzB4MmM5OWZkW18weDJiNjU2MCgweDE4YyldO2xldCBfMHgxN2RlMjg9XzB4MmM5OWZkW18weDJiNjU2MCgweDEzOCldPy5bJ3ZlcnNpb25zJ10/LltfMHgyYjY1NjAoMHgxYWQpXXx8XzB4MmM5OWZkW18weDJiNjU2MCgweDEzOCldPy5bXzB4MmI2NTYwKDB4ZWYpXT8uW18weDJiNjU2MCgweDEyZCldPT09J2VkZ2UnO3JldHVybiBfMHgxN2RlMjgmJl8weDdhNDQ1MD09PV8weDJiNjU2MCgweDE1YSk/XzB4MmM5OWZkW18weDJiNjU2MCgweDE4YyldPSEweDE6XzB4MmM5OWZkW18weDJiNjU2MCgweDE4YyldPV8weDE3ZGUyOHx8IV8weDEyOThmOXx8XzB4MmM5OWZkWydsb2NhdGlvbiddPy5bJ2hvc3RuYW1lJ10mJl8weDEyOThmOVtfMHgyYjY1NjAoMHgxYjMpXShfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MTExKV1bXzB4MmI2NTYwKDB4MTIyKV0pLF8weDJjOTlmZFtfMHgyYjY1NjAoMHgxOGMpXTt9ZnVuY3Rpb24gWShfMHgzMTk3NTEsXzB4NWQyNjdhLF8weDI0MDhiYSxfMHg1NjM1MDQpe3ZhciBfMHg0MjQ4ZDY9XzB4MzBkNDZjO18weDMxOTc1MT1fMHgzMTk3NTEsXzB4NWQyNjdhPV8weDVkMjY3YSxfMHgyNDA4YmE9XzB4MjQwOGJhLF8weDU2MzUwND1fMHg1NjM1MDQ7bGV0IF8weDVjNmJhND1XKF8weDMxOTc1MSksXzB4NWRlYWQ1PV8weDVjNmJhNFtfMHg0MjQ4ZDYoMHhmMCldLF8weDI5OWRhMz1fMHg1YzZiYTRbJ3RpbWVTdGFtcCddO2NsYXNzIF8weDMxODdhN3tjb25zdHJ1Y3Rvcigpe3ZhciBfMHg1NGM1NGI9XzB4NDI0OGQ2O3RoaXNbXzB4NTRjNTRiKDB4MTcxKV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDU0YzU0YigweGQyKV09L14oMHxbMS05XVswLTldKikkLyx0aGlzWydfcXVvdGVkUmVnRXhwJ109LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHg1NGM1NGIoMHhlNSldPV8weDMxOTc1MVtfMHg1NGM1NGIoMHgxOTgpXSx0aGlzW18weDU0YzU0YigweGQ3KV09XzB4MzE5NzUxW18weDU0YzU0YigweDE2OCldLHRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXT1PYmplY3RbXzB4NTRjNTRiKDB4MTZlKV0sdGhpc1tfMHg1NGM1NGIoMHgxMmMpXT1PYmplY3RbXzB4NTRjNTRiKDB4MTU4KV0sdGhpc1tfMHg1NGM1NGIoMHgxNzApXT1fMHgzMTk3NTFbXzB4NTRjNTRiKDB4MTY5KV0sdGhpc1tfMHg1NGM1NGIoMHgxYjIpXT1SZWdFeHBbJ3Byb3RvdHlwZSddW18weDU0YzU0YigweDE0ZCldLHRoaXNbXzB4NTRjNTRiKDB4MTFmKV09RGF0ZVsncHJvdG90eXBlJ11bXzB4NTRjNTRiKDB4MTRkKV07fVtfMHg0MjQ4ZDYoMHgxYjYpXShfMHg0M2JmYzcsXzB4MjVkNDUxLF8weDFlNzFjNSxfMHg1MDhhMGYpe3ZhciBfMHgxMzY2OTI9XzB4NDI0OGQ2LF8weDIyZjdiOD10aGlzLF8weDI3YTQ3Mz1fMHgxZTcxYzVbJ2F1dG9FeHBhbmQnXTtmdW5jdGlvbiBfMHg0MTJiZmUoXzB4MTU2MWY3LF8weDJhMDk4NyxfMHg1OGYxMzApe3ZhciBfMHgyMWM5MWQ9XzB4Mzk0YjtfMHgyYTA5ODdbXzB4MjFjOTFkKDB4MTkxKV09XzB4MjFjOTFkKDB4MTEzKSxfMHgyYTA5ODdbXzB4MjFjOTFkKDB4MTM5KV09XzB4MTU2MWY3W18weDIxYzkxZCgweGU2KV0sXzB4MWMzNmIwPV8weDU4ZjEzMFsnbm9kZSddW18weDIxYzkxZCgweGRkKV0sXzB4NThmMTMwW18weDIxYzkxZCgweDFhZCldW18weDIxYzkxZCgweGRkKV09XzB4MmEwOTg3LF8weDIyZjdiOFtfMHgyMWM5MWQoMHgxNDApXShfMHgyYTA5ODcsXzB4NThmMTMwKTt9dHJ5e18weDFlNzFjNVtfMHgxMzY2OTIoMHgxMDcpXSsrLF8weDFlNzFjNVsnYXV0b0V4cGFuZCddJiZfMHgxZTcxYzVbXzB4MTM2NjkyKDB4ZTgpXVtfMHgxMzY2OTIoMHgxMzQpXShfMHgyNWQ0NTEpO3ZhciBfMHgzMTU3NDMsXzB4NTQxYWE4LF8weDNjY2VkOSxfMHgyYTM0YTEsXzB4MjBiNGYyPVtdLF8weDRkYTYzYj1bXSxfMHg1NTY5NzksXzB4MmQyZDZkPXRoaXNbXzB4MTM2NjkyKDB4MTM2KV0oXzB4MjVkNDUxKSxfMHhkODMyYzU9XzB4MmQyZDZkPT09J2FycmF5JyxfMHgyNjhjNDA9ITB4MSxfMHgxMzBmM2U9XzB4MmQyZDZkPT09XzB4MTM2NjkyKDB4ZWEpLF8weDM2OWIwZT10aGlzW18weDEzNjY5MigweDExNSldKF8weDJkMmQ2ZCksXzB4NDk4NDE4PXRoaXNbJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJ10oXzB4MmQyZDZkKSxfMHgzNDBmODM9XzB4MzY5YjBlfHxfMHg0OTg0MTgsXzB4MjQ5M2JlPXt9LF8weDM2ZjNjYz0weDAsXzB4M2EyZmRhPSEweDEsXzB4MWMzNmIwLF8weDM0OGJmMT0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4MWU3MWM1W18weDEzNjY5MigweDEyOSldKXtpZihfMHhkODMyYzUpe2lmKF8weDU0MWFhOD1fMHgyNWQ0NTFbXzB4MTM2NjkyKDB4MTVlKV0sXzB4NTQxYWE4Pl8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNjIpXSl7Zm9yKF8weDNjY2VkOT0weDAsXzB4MmEzNGExPV8weDFlNzFjNVsnZWxlbWVudHMnXSxfMHgzMTU3NDM9XzB4M2NjZWQ5O18weDMxNTc0MzxfMHgyYTM0YTE7XzB4MzE1NzQzKyspXzB4NGRhNjNiW18weDEzNjY5MigweDEzNCldKF8weDIyZjdiOFtfMHgxMzY2OTIoMHhmNyldKF8weDIwYjRmMixfMHgyNWQ0NTEsXzB4MmQyZDZkLF8weDMxNTc0MyxfMHgxZTcxYzUpKTtfMHg0M2JmYzdbXzB4MTM2NjkyKDB4MTY2KV09ITB4MDt9ZWxzZXtmb3IoXzB4M2NjZWQ5PTB4MCxfMHgyYTM0YTE9XzB4NTQxYWE4LF8weDMxNTc0Mz1fMHgzY2NlZDk7XzB4MzE1NzQzPF8weDJhMzRhMTtfMHgzMTU3NDMrKylfMHg0ZGE2M2JbXzB4MTM2NjkyKDB4MTM0KV0oXzB4MjJmN2I4W18weDEzNjY5MigweGY3KV0oXzB4MjBiNGYyLF8weDI1ZDQ1MSxfMHgyZDJkNmQsXzB4MzE1NzQzLF8weDFlNzFjNSkpO31fMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTc1KV0rPV8weDRkYTYzYlsnbGVuZ3RoJ107fWlmKCEoXzB4MmQyZDZkPT09J251bGwnfHxfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHgxOTgpKSYmIV8weDM2OWIwZSYmXzB4MmQyZDZkIT09XzB4MTM2NjkyKDB4MTAxKSYmXzB4MmQyZDZkIT09XzB4MTM2NjkyKDB4MWFmKSYmXzB4MmQyZDZkIT09J2JpZ2ludCcpe3ZhciBfMHgyY2M3YzM9XzB4NTA4YTBmW18weDEzNjY5MigweDE5ZCldfHxfMHgxZTcxYzVbJ3Byb3BzJ107aWYodGhpc1tfMHgxMzY2OTIoMHgxODQpXShfMHgyNWQ0NTEpPyhfMHgzMTU3NDM9MHgwLF8weDI1ZDQ1MVtfMHgxMzY2OTIoMHgxYWMpXShmdW5jdGlvbihfMHg1YjUxMTApe3ZhciBfMHg1OGMzY2I9XzB4MTM2NjkyO2lmKF8weDM2ZjNjYysrLF8weDFlNzFjNVtfMHg1OGMzY2IoMHgxNzUpXSsrLF8weDM2ZjNjYz5fMHgyY2M3YzMpe18weDNhMmZkYT0hMHgwO3JldHVybjt9aWYoIV8weDFlNzFjNVtfMHg1OGMzY2IoMHgxNTMpXSYmXzB4MWU3MWM1W18weDU4YzNjYigweDE4MildJiZfMHgxZTcxYzVbXzB4NThjM2NiKDB4MTc1KV0+XzB4MWU3MWM1W18weDU4YzNjYigweGUxKV0pe18weDNhMmZkYT0hMHgwO3JldHVybjt9XzB4NGRhNjNiW18weDU4YzNjYigweDEzNCldKF8weDIyZjdiOFtfMHg1OGMzY2IoMHhmNyldKF8weDIwYjRmMixfMHgyNWQ0NTEsXzB4NThjM2NiKDB4MTZjKSxfMHgzMTU3NDMrKyxfMHgxZTcxYzUsZnVuY3Rpb24oXzB4ZmNiNWM1KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4ZmNiNWM1O307fShfMHg1YjUxMTApKSk7fSkpOnRoaXNbXzB4MTM2NjkyKDB4MTQzKV0oXzB4MjVkNDUxKSYmXzB4MjVkNDUxWydmb3JFYWNoJ10oZnVuY3Rpb24oXzB4MjA1NmY1LF8weDMxMzAxMCl7dmFyIF8weDU1YTdmZD1fMHgxMzY2OTI7aWYoXzB4MzZmM2NjKyssXzB4MWU3MWM1WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4MzZmM2NjPl8weDJjYzdjMyl7XzB4M2EyZmRhPSEweDA7cmV0dXJuO31pZighXzB4MWU3MWM1Wydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDFlNzFjNVsnYXV0b0V4cGFuZCddJiZfMHgxZTcxYzVbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4MWU3MWM1W18weDU1YTdmZCgweGUxKV0pe18weDNhMmZkYT0hMHgwO3JldHVybjt9dmFyIF8weDI3Yjc1NT1fMHgzMTMwMTBbJ3RvU3RyaW5nJ10oKTtfMHgyN2I3NTVbJ2xlbmd0aCddPjB4NjQmJihfMHgyN2I3NTU9XzB4MjdiNzU1WydzbGljZSddKDB4MCwweDY0KSsnLi4uJyksXzB4NGRhNjNiW18weDU1YTdmZCgweDEzNCldKF8weDIyZjdiOFtfMHg1NWE3ZmQoMHhmNyldKF8weDIwYjRmMixfMHgyNWQ0NTEsXzB4NTVhN2ZkKDB4MTBkKSxfMHgyN2I3NTUsXzB4MWU3MWM1LGZ1bmN0aW9uKF8weDU4ZGRlOSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDU4ZGRlOTt9O30oXzB4MjA1NmY1KSkpO30pLCFfMHgyNjhjNDApe3RyeXtmb3IoXzB4NTU2OTc5IGluIF8weDI1ZDQ1MSlpZighKF8weGQ4MzJjNSYmXzB4MzQ4YmYxW18weDEzNjY5MigweGU3KV0oXzB4NTU2OTc5KSkmJiF0aGlzW18weDEzNjY5MigweGY4KV0oXzB4MjVkNDUxLF8weDU1Njk3OSxfMHgxZTcxYzUpKXtpZihfMHgzNmYzY2MrKyxfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTc1KV0rKyxfMHgzNmYzY2M+XzB4MmNjN2MzKXtfMHgzYTJmZGE9ITB4MDticmVhazt9aWYoIV8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNTMpXSYmXzB4MWU3MWM1W18weDEzNjY5MigweDE4MildJiZfMHgxZTcxYzVbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4MWU3MWM1W18weDEzNjY5MigweGUxKV0pe18weDNhMmZkYT0hMHgwO2JyZWFrO31fMHg0ZGE2M2JbXzB4MTM2NjkyKDB4MTM0KV0oXzB4MjJmN2I4W18weDEzNjY5MigweDEwOCldKF8weDIwYjRmMixfMHgyNDkzYmUsXzB4MjVkNDUxLF8weDJkMmQ2ZCxfMHg1NTY5NzksXzB4MWU3MWM1KSk7fX1jYXRjaHt9aWYoXzB4MjQ5M2JlW18weDEzNjY5MigweDEzYSldPSEweDAsXzB4MTMwZjNlJiYoXzB4MjQ5M2JlW18weDEzNjY5MigweDE2ZildPSEweDApLCFfMHgzYTJmZGEpe3ZhciBfMHgzNzlhZDg9W11bXzB4MTM2NjkyKDB4ZGIpXSh0aGlzW18weDEzNjY5MigweDEyYyldKF8weDI1ZDQ1MSkpW18weDEzNjY5MigweGRiKV0odGhpc1tfMHgxMzY2OTIoMHgxNGUpXShfMHgyNWQ0NTEpKTtmb3IoXzB4MzE1NzQzPTB4MCxfMHg1NDFhYTg9XzB4Mzc5YWQ4W18weDEzNjY5MigweDE1ZSldO18weDMxNTc0MzxfMHg1NDFhYTg7XzB4MzE1NzQzKyspaWYoXzB4NTU2OTc5PV8weDM3OWFkOFtfMHgzMTU3NDNdLCEoXzB4ZDgzMmM1JiZfMHgzNDhiZjFbXzB4MTM2NjkyKDB4ZTcpXShfMHg1NTY5NzlbXzB4MTM2NjkyKDB4MTRkKV0oKSkpJiYhdGhpc1tfMHgxMzY2OTIoMHhmOCldKF8weDI1ZDQ1MSxfMHg1NTY5NzksXzB4MWU3MWM1KSYmIV8weDI0OTNiZVtfMHgxMzY2OTIoMHgxMmUpK18weDU1Njk3OVtfMHgxMzY2OTIoMHgxNGQpXSgpXSl7aWYoXzB4MzZmM2NjKyssXzB4MWU3MWM1W18weDEzNjY5MigweDE3NSldKyssXzB4MzZmM2NjPl8weDJjYzdjMyl7XzB4M2EyZmRhPSEweDA7YnJlYWs7fWlmKCFfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTUzKV0mJl8weDFlNzFjNVtfMHgxMzY2OTIoMHgxODIpXSYmXzB4MWU3MWM1WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDFlNzFjNVtfMHgxMzY2OTIoMHhlMSldKXtfMHgzYTJmZGE9ITB4MDticmVhazt9XzB4NGRhNjNiWydwdXNoJ10oXzB4MjJmN2I4W18weDEzNjY5MigweDEwOCldKF8weDIwYjRmMixfMHgyNDkzYmUsXzB4MjVkNDUxLF8weDJkMmQ2ZCxfMHg1NTY5NzksXzB4MWU3MWM1KSk7fX19fX1pZihfMHg0M2JmYzdbXzB4MTM2NjkyKDB4MTkxKV09XzB4MmQyZDZkLF8weDM0MGY4Mz8oXzB4NDNiZmM3Wyd2YWx1ZSddPV8weDI1ZDQ1MVsndmFsdWVPZiddKCksdGhpc1tfMHgxMzY2OTIoMHhlMyldKF8weDJkMmQ2ZCxfMHg0M2JmYzcsXzB4MWU3MWM1LF8weDUwOGEwZikpOl8weDJkMmQ2ZD09PV8weDEzNjY5MigweGYzKT9fMHg0M2JmYzdbXzB4MTM2NjkyKDB4MTdmKV09dGhpc1tfMHgxMzY2OTIoMHgxMWYpXVtfMHgxMzY2OTIoMHhmZSldKF8weDI1ZDQ1MSk6XzB4MmQyZDZkPT09XzB4MTM2NjkyKDB4MThiKT9fMHg0M2JmYzdbXzB4MTM2NjkyKDB4MTdmKV09XzB4MjVkNDUxWyd0b1N0cmluZyddKCk6XzB4MmQyZDZkPT09J1JlZ0V4cCc/XzB4NDNiZmM3W18weDEzNjY5MigweDE3ZildPXRoaXNbXzB4MTM2NjkyKDB4MWIyKV1bJ2NhbGwnXShfMHgyNWQ0NTEpOl8weDJkMmQ2ZD09PV8weDEzNjY5MigweDE3NikmJnRoaXNbXzB4MTM2NjkyKDB4MTcwKV0/XzB4NDNiZmM3W18weDEzNjY5MigweDE3ZildPXRoaXNbXzB4MTM2NjkyKDB4MTcwKV1bXzB4MTM2NjkyKDB4MTgwKV1bXzB4MTM2NjkyKDB4MTRkKV1bXzB4MTM2NjkyKDB4ZmUpXShfMHgyNWQ0NTEpOiFfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTI5KV0mJiEoXzB4MmQyZDZkPT09XzB4MTM2NjkyKDB4MTU5KXx8XzB4MmQyZDZkPT09XzB4MTM2NjkyKDB4MTk4KSkmJihkZWxldGUgXzB4NDNiZmM3Wyd2YWx1ZSddLF8weDQzYmZjN1tfMHgxMzY2OTIoMHgxMjUpXT0hMHgwKSxfMHgzYTJmZGEmJihfMHg0M2JmYzdbJ2NhcHBlZFByb3BzJ109ITB4MCksXzB4MWMzNmIwPV8weDFlNzFjNVtfMHgxMzY2OTIoMHgxYWQpXVtfMHgxMzY2OTIoMHhkZCldLF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxYWQpXVtfMHgxMzY2OTIoMHhkZCldPV8weDQzYmZjNyx0aGlzW18weDEzNjY5MigweDE0MCldKF8weDQzYmZjNyxfMHgxZTcxYzUpLF8weDRkYTYzYltfMHgxMzY2OTIoMHgxNWUpXSl7Zm9yKF8weDMxNTc0Mz0weDAsXzB4NTQxYWE4PV8weDRkYTYzYltfMHgxMzY2OTIoMHgxNWUpXTtfMHgzMTU3NDM8XzB4NTQxYWE4O18weDMxNTc0MysrKV8weDRkYTYzYltfMHgzMTU3NDNdKF8weDMxNTc0Myk7fV8weDIwYjRmMltfMHgxMzY2OTIoMHgxNWUpXSYmKF8weDQzYmZjN1sncHJvcHMnXT1fMHgyMGI0ZjIpO31jYXRjaChfMHhjYjJmMWYpe18weDQxMmJmZShfMHhjYjJmMWYsXzB4NDNiZmM3LF8weDFlNzFjNSk7fXJldHVybiB0aGlzW18weDEzNjY5MigweGRmKV0oXzB4MjVkNDUxLF8weDQzYmZjNyksdGhpc1tfMHgxMzY2OTIoMHgxMDkpXShfMHg0M2JmYzcsXzB4MWU3MWM1KSxfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MWFkKV1bXzB4MTM2NjkyKDB4ZGQpXT1fMHgxYzM2YjAsXzB4MWU3MWM1W18weDEzNjY5MigweDEwNyldLS0sXzB4MWU3MWM1WydhdXRvRXhwYW5kJ109XzB4MjdhNDczLF8weDFlNzFjNVsnYXV0b0V4cGFuZCddJiZfMHgxZTcxYzVbXzB4MTM2NjkyKDB4ZTgpXVsncG9wJ10oKSxfMHg0M2JmYzc7fVtfMHg0MjQ4ZDYoMHgxNGUpXShfMHgzNmZkNjUpe3ZhciBfMHgzYTcwYjA9XzB4NDI0OGQ2O3JldHVybiBPYmplY3RbXzB4M2E3MGIwKDB4MThlKV0/T2JqZWN0WydnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnXShfMHgzNmZkNjUpOltdO31bXzB4NDI0OGQ2KDB4MTg0KV0oXzB4MmU2NTNkKXt2YXIgXzB4M2ZjOWMxPV8weDQyNDhkNjtyZXR1cm4hIShfMHgyZTY1M2QmJl8weDMxOTc1MVsnU2V0J10mJnRoaXNbXzB4M2ZjOWMxKDB4MTc3KV0oXzB4MmU2NTNkKT09PV8weDNmYzljMSgweDEwYykmJl8weDJlNjUzZFtfMHgzZmM5YzEoMHgxYWMpXSk7fVtfMHg0MjQ4ZDYoMHhmOCldKF8weDUyZDZiYSxfMHg1N2YyNmUsXzB4ZmY1YWIzKXt2YXIgXzB4ZDAxZjRiPV8weDQyNDhkNjtyZXR1cm4gXzB4ZmY1YWIzW18weGQwMWY0YigweDEyYildP3R5cGVvZiBfMHg1MmQ2YmFbXzB4NTdmMjZlXT09XzB4ZDAxZjRiKDB4ZWEpOiEweDE7fVtfMHg0MjQ4ZDYoMHgxMzYpXShfMHg4OWEzNTMpe3ZhciBfMHgzYzMzM2M9XzB4NDI0OGQ2LF8weDQ1YTc5MD0nJztyZXR1cm4gXzB4NDVhNzkwPXR5cGVvZiBfMHg4OWEzNTMsXzB4NDVhNzkwPT09XzB4M2MzMzNjKDB4MTgzKT90aGlzW18weDNjMzMzYygweDE3NyldKF8weDg5YTM1Myk9PT1fMHgzYzMzM2MoMHgxMTQpP18weDQ1YTc5MD1fMHgzYzMzM2MoMHhmYik6dGhpc1tfMHgzYzMzM2MoMHgxNzcpXShfMHg4OWEzNTMpPT09XzB4M2MzMzNjKDB4MTI2KT9fMHg0NWE3OTA9XzB4M2MzMzNjKDB4ZjMpOnRoaXNbXzB4M2MzMzNjKDB4MTc3KV0oXzB4ODlhMzUzKT09PV8weDNjMzMzYygweDE0MSk/XzB4NDVhNzkwPV8weDNjMzMzYygweDE4Yik6XzB4ODlhMzUzPT09bnVsbD9fMHg0NWE3OTA9XzB4M2MzMzNjKDB4MTU5KTpfMHg4OWEzNTNbXzB4M2MzMzNjKDB4MWE2KV0mJihfMHg0NWE3OTA9XzB4ODlhMzUzW18weDNjMzMzYygweDFhNildW18weDNjMzMzYygweDEwNildfHxfMHg0NWE3OTApOl8weDQ1YTc5MD09PSd1bmRlZmluZWQnJiZ0aGlzW18weDNjMzMzYygweGQ3KV0mJl8weDg5YTM1MyBpbnN0YW5jZW9mIHRoaXNbXzB4M2MzMzNjKDB4ZDcpXSYmKF8weDQ1YTc5MD1fMHgzYzMzM2MoMHgxNjgpKSxfMHg0NWE3OTA7fVtfMHg0MjQ4ZDYoMHgxNzcpXShfMHhiMjhiNSl7dmFyIF8weDJkNmU4MT1fMHg0MjQ4ZDY7cmV0dXJuIE9iamVjdFtfMHgyZDZlODEoMHgxODApXVtfMHgyZDZlODEoMHgxNGQpXVsnY2FsbCddKF8weGIyOGI1KTt9WydfaXNQcmltaXRpdmVUeXBlJ10oXzB4NTc4ZWVlKXt2YXIgXzB4MTUzZGFjPV8weDQyNDhkNjtyZXR1cm4gXzB4NTc4ZWVlPT09XzB4MTUzZGFjKDB4MTZiKXx8XzB4NTc4ZWVlPT09XzB4MTUzZGFjKDB4MTNjKXx8XzB4NTc4ZWVlPT09XzB4MTUzZGFjKDB4MTM1KTt9W18weDQyNDhkNigweDE2MyldKF8weDEzMjUwYil7dmFyIF8weDI4OTg0Mz1fMHg0MjQ4ZDY7cmV0dXJuIF8weDEzMjUwYj09PV8weDI4OTg0MygweDE5Yyl8fF8weDEzMjUwYj09PSdTdHJpbmcnfHxfMHgxMzI1MGI9PT1fMHgyODk4NDMoMHgxN2MpO31bXzB4NDI0OGQ2KDB4ZjcpXShfMHg0NWIxOTYsXzB4NDE0NTQ4LF8weDM5ZGMzZSxfMHgzNTczMGYsXzB4NDEzMDI1LF8weDNjMGFiMyl7dmFyIF8weDViOTdmMj10aGlzO3JldHVybiBmdW5jdGlvbihfMHg0YTRlNGIpe3ZhciBfMHgyMWY2Yzc9XzB4Mzk0YixfMHgxMDRjOTc9XzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldW18weDIxZjZjNygweGRkKV0sXzB4NGMzNzA5PV8weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVtfMHgyMWY2YzcoMHgxYTgpXSxfMHg3MDJiZWE9XzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldWydwYXJlbnQnXTtfMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bXzB4MjFmNmM3KDB4MTYwKV09XzB4MTA0Yzk3LF8weDQxMzAyNVsnbm9kZSddWydpbmRleCddPXR5cGVvZiBfMHgzNTczMGY9PV8weDIxZjZjNygweDEzNSk/XzB4MzU3MzBmOl8weDRhNGU0YixfMHg0NWIxOTZbXzB4MjFmNmM3KDB4MTM0KV0oXzB4NWI5N2YyW18weDIxZjZjNygweDE4MSldKF8weDQxNDU0OCxfMHgzOWRjM2UsXzB4MzU3MzBmLF8weDQxMzAyNSxfMHgzYzBhYjMpKSxfMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bXzB4MjFmNmM3KDB4MTYwKV09XzB4NzAyYmVhLF8weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVsnaW5kZXgnXT1fMHg0YzM3MDk7fTt9W18weDQyNDhkNigweDEwOCldKF8weDQ2MDllNSxfMHgxNWNmZTQsXzB4MjY0MTRmLF8weDNkOGYwOSxfMHgzNTY1NzUsXzB4MzU3MTkzLF8weDgzZjM1OSl7dmFyIF8weDRjZjUyYj1fMHg0MjQ4ZDYsXzB4NDAyNzZhPXRoaXM7cmV0dXJuIF8weDE1Y2ZlNFsnX3BfJytfMHgzNTY1NzVbXzB4NGNmNTJiKDB4MTRkKV0oKV09ITB4MCxmdW5jdGlvbihfMHgzMzI1Zjcpe3ZhciBfMHgyYjhkMDY9XzB4NGNmNTJiLF8weDJlZWVlYT1fMHgzNTcxOTNbJ25vZGUnXVtfMHgyYjhkMDYoMHhkZCldLF8weDIzYzcxOD1fMHgzNTcxOTNbXzB4MmI4ZDA2KDB4MWFkKV1bXzB4MmI4ZDA2KDB4MWE4KV0sXzB4MTRkM2MzPV8weDM1NzE5M1tfMHgyYjhkMDYoMHgxYWQpXVtfMHgyYjhkMDYoMHgxNjApXTtfMHgzNTcxOTNbXzB4MmI4ZDA2KDB4MWFkKV1bXzB4MmI4ZDA2KDB4MTYwKV09XzB4MmVlZWVhLF8weDM1NzE5M1tfMHgyYjhkMDYoMHgxYWQpXVtfMHgyYjhkMDYoMHgxYTgpXT1fMHgzMzI1ZjcsXzB4NDYwOWU1W18weDJiOGQwNigweDEzNCldKF8weDQwMjc2YVtfMHgyYjhkMDYoMHgxODEpXShfMHgyNjQxNGYsXzB4M2Q4ZjA5LF8weDM1NjU3NSxfMHgzNTcxOTMsXzB4ODNmMzU5KSksXzB4MzU3MTkzWydub2RlJ11bXzB4MmI4ZDA2KDB4MTYwKV09XzB4MTRkM2MzLF8weDM1NzE5M1tfMHgyYjhkMDYoMHgxYWQpXVtfMHgyYjhkMDYoMHgxYTgpXT1fMHgyM2M3MTg7fTt9WydfcHJvcGVydHknXShfMHg5YWI2NGYsXzB4NGQ5MGI5LF8weDE4MzU5OSxfMHhkNThiMmIsXzB4NDNhZjQwKXt2YXIgXzB4MTQ3MDg9XzB4NDI0OGQ2LF8weDQ0NjUwMD10aGlzO18weDQzYWY0MHx8KF8weDQzYWY0MD1mdW5jdGlvbihfMHg0YmRmYjEsXzB4NGJkYzRkKXtyZXR1cm4gXzB4NGJkZmIxW18weDRiZGM0ZF07fSk7dmFyIF8weDE4MmMwZj1fMHgxODM1OTlbXzB4MTQ3MDgoMHgxNGQpXSgpLF8weDViM2U1ND1fMHhkNThiMmJbXzB4MTQ3MDgoMHgxM2YpXXx8e30sXzB4NTI3NzkyPV8weGQ1OGIyYlsnZGVwdGgnXSxfMHg1MDgzMTI9XzB4ZDU4YjJiWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ107dHJ5e3ZhciBfMHg1MjEwNTg9dGhpc1tfMHgxNDcwOCgweDE0MyldKF8weDlhYjY0ZiksXzB4NDEyM2VhPV8weDE4MmMwZjtfMHg1MjEwNTgmJl8weDQxMjNlYVsweDBdPT09J1xcXFx4MjcnJiYoXzB4NDEyM2VhPV8weDQxMjNlYVtfMHgxNDcwOCgweDExMildKDB4MSxfMHg0MTIzZWFbJ2xlbmd0aCddLTB4MikpO3ZhciBfMHgyNmRlOWE9XzB4ZDU4YjJiWydleHByZXNzaW9uc1RvRXZhbHVhdGUnXT1fMHg1YjNlNTRbXzB4MTQ3MDgoMHgxMmUpK18weDQxMjNlYV07XzB4MjZkZTlhJiYoXzB4ZDU4YjJiW18weDE0NzA4KDB4MTI5KV09XzB4ZDU4YjJiWydkZXB0aCddKzB4MSksXzB4ZDU4YjJiWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ109ISFfMHgyNmRlOWE7dmFyIF8weDUzYTZiMz10eXBlb2YgXzB4MTgzNTk5PT1fMHgxNDcwOCgweDE3NiksXzB4MzE3OTBiPXsnbmFtZSc6XzB4NTNhNmIzfHxfMHg1MjEwNTg/XzB4MTgyYzBmOnRoaXNbXzB4MTQ3MDgoMHgxOTYpXShfMHgxODJjMGYpfTtpZihfMHg1M2E2YjMmJihfMHgzMTc5MGJbXzB4MTQ3MDgoMHgxNzYpXT0hMHgwKSwhKF8weDRkOTBiOT09PV8weDE0NzA4KDB4ZmIpfHxfMHg0ZDkwYjk9PT1fMHgxNDcwOCgweGUyKSkpe3ZhciBfMHg0MjhlMmY9dGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddKF8weDlhYjY0ZixfMHgxODM1OTkpO2lmKF8weDQyOGUyZiYmKF8weDQyOGUyZlsnc2V0J10mJihfMHgzMTc5MGJbJ3NldHRlciddPSEweDApLF8weDQyOGUyZltfMHgxNDcwOCgweDFhNSldJiYhXzB4MjZkZTlhJiYhXzB4ZDU4YjJiW18weDE0NzA4KDB4MThkKV0pKXJldHVybiBfMHgzMTc5MGJbXzB4MTQ3MDgoMHgxNzMpXT0hMHgwLHRoaXNbXzB4MTQ3MDgoMHgxYjQpXShfMHgzMTc5MGIsXzB4ZDU4YjJiKSxfMHgzMTc5MGI7fXZhciBfMHg1Nzg2ZTk7dHJ5e18weDU3ODZlOT1fMHg0M2FmNDAoXzB4OWFiNjRmLF8weDE4MzU5OSk7fWNhdGNoKF8weDM5NmJhOCl7cmV0dXJuIF8weDMxNzkwYj17J25hbWUnOl8weDE4MmMwZiwndHlwZSc6J3Vua25vd24nLCdlcnJvcic6XzB4Mzk2YmE4W18weDE0NzA4KDB4ZTYpXX0sdGhpc1tfMHgxNDcwOCgweDFiNCldKF8weDMxNzkwYixfMHhkNThiMmIpLF8weDMxNzkwYjt9dmFyIF8weDUyZGRmYz10aGlzWydfdHlwZSddKF8weDU3ODZlOSksXzB4MWYwNTFmPXRoaXNbXzB4MTQ3MDgoMHgxMTUpXShfMHg1MmRkZmMpO2lmKF8weDMxNzkwYlsndHlwZSddPV8weDUyZGRmYyxfMHgxZjA1MWYpdGhpc1snX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDMxNzkwYixfMHhkNThiMmIsXzB4NTc4NmU5LGZ1bmN0aW9uKCl7dmFyIF8weDFiMTRmMD1fMHgxNDcwODtfMHgzMTc5MGJbXzB4MWIxNGYwKDB4MTdmKV09XzB4NTc4NmU5Wyd2YWx1ZU9mJ10oKSwhXzB4MjZkZTlhJiZfMHg0NDY1MDBbXzB4MWIxNGYwKDB4ZTMpXShfMHg1MmRkZmMsXzB4MzE3OTBiLF8weGQ1OGIyYix7fSk7fSk7ZWxzZXt2YXIgXzB4MzQ4MjA2PV8weGQ1OGIyYltfMHgxNDcwOCgweDE4MildJiZfMHhkNThiMmJbJ2xldmVsJ108XzB4ZDU4YjJiW18weDE0NzA4KDB4MTY3KV0mJl8weGQ1OGIyYltfMHgxNDcwOCgweGU4KV1bJ2luZGV4T2YnXShfMHg1Nzg2ZTkpPDB4MCYmXzB4NTJkZGZjIT09XzB4MTQ3MDgoMHhlYSkmJl8weGQ1OGIyYltfMHgxNDcwOCgweDE3NSldPF8weGQ1OGIyYltfMHgxNDcwOCgweGUxKV07XzB4MzQ4MjA2fHxfMHhkNThiMmJbXzB4MTQ3MDgoMHgxMDcpXTxfMHg1Mjc3OTJ8fF8weDI2ZGU5YT8odGhpc1tfMHgxNDcwOCgweDFiNildKF8weDMxNzkwYixfMHg1Nzg2ZTksXzB4ZDU4YjJiLF8weDI2ZGU5YXx8e30pLHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHg1Nzg2ZTksXzB4MzE3OTBiKSk6dGhpc1tfMHgxNDcwOCgweDFiNCldKF8weDMxNzkwYixfMHhkNThiMmIsXzB4NTc4NmU5LGZ1bmN0aW9uKCl7dmFyIF8weDIzODViYT1fMHgxNDcwODtfMHg1MmRkZmM9PT1fMHgyMzg1YmEoMHgxNTkpfHxfMHg1MmRkZmM9PT0ndW5kZWZpbmVkJ3x8KGRlbGV0ZSBfMHgzMTc5MGJbXzB4MjM4NWJhKDB4MTdmKV0sXzB4MzE3OTBiW18weDIzODViYSgweDEyNSldPSEweDApO30pO31yZXR1cm4gXzB4MzE3OTBiO31maW5hbGx5e18weGQ1OGIyYlsnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJ109XzB4NWIzZTU0LF8weGQ1OGIyYltfMHgxNDcwOCgweDEyOSldPV8weDUyNzc5MixfMHhkNThiMmJbXzB4MTQ3MDgoMHgxNTMpXT1fMHg1MDgzMTI7fX1bXzB4NDI0OGQ2KDB4ZTMpXShfMHgzMDU3ODEsXzB4MTIxMmIzLF8weDNiZWIyNyxfMHg1MjI2ODMpe3ZhciBfMHg0ZDIwNTc9XzB4NDI0OGQ2LF8weDJiMmEzMT1fMHg1MjI2ODNbJ3N0ckxlbmd0aCddfHxfMHgzYmViMjdbXzB4NGQyMDU3KDB4MTg1KV07aWYoKF8weDMwNTc4MT09PV8weDRkMjA1NygweDEzYyl8fF8weDMwNTc4MT09PV8weDRkMjA1NygweDEwMSkpJiZfMHgxMjEyYjNbXzB4NGQyMDU3KDB4MTdmKV0pe2xldCBfMHgxNWQ2MzI9XzB4MTIxMmIzWyd2YWx1ZSddW18weDRkMjA1NygweDE1ZSldO18weDNiZWIyN1tfMHg0ZDIwNTcoMHgxMDQpXSs9XzB4MTVkNjMyLF8weDNiZWIyN1tfMHg0ZDIwNTcoMHgxMDQpXT5fMHgzYmViMjdbJ3RvdGFsU3RyTGVuZ3RoJ10/KF8weDEyMTJiM1snY2FwcGVkJ109JycsZGVsZXRlIF8weDEyMTJiM1sndmFsdWUnXSk6XzB4MTVkNjMyPl8weDJiMmEzMSYmKF8weDEyMTJiM1tfMHg0ZDIwNTcoMHgxMjUpXT1fMHgxMjEyYjNbXzB4NGQyMDU3KDB4MTdmKV1bXzB4NGQyMDU3KDB4MTEyKV0oMHgwLF8weDJiMmEzMSksZGVsZXRlIF8weDEyMTJiM1sndmFsdWUnXSk7fX1bJ19pc01hcCddKF8weDJhYzU0Zil7dmFyIF8weDE5MjFhMD1fMHg0MjQ4ZDY7cmV0dXJuISEoXzB4MmFjNTRmJiZfMHgzMTk3NTFbJ01hcCddJiZ0aGlzW18weDE5MjFhMCgweDE3NyldKF8weDJhYzU0Zik9PT1fMHgxOTIxYTAoMHgxYTkpJiZfMHgyYWM1NGZbXzB4MTkyMWEwKDB4MWFjKV0pO31bJ19wcm9wZXJ0eU5hbWUnXShfMHg1M2ZmZWIpe3ZhciBfMHgyZjk3ZDU9XzB4NDI0OGQ2O2lmKF8weDUzZmZlYltfMHgyZjk3ZDUoMHgxMmYpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4NTNmZmViO3ZhciBfMHgyYjhmNzI7dHJ5e18weDJiOGY3Mj1KU09OW18weDJmOTdkNSgweDExYSldKCcnK18weDUzZmZlYik7fWNhdGNoe18weDJiOGY3Mj0nXFxcXHgyMicrdGhpc1tfMHgyZjk3ZDUoMHgxNzcpXShfMHg1M2ZmZWIpKydcXFxceDIyJzt9cmV0dXJuIF8weDJiOGY3MltfMHgyZjk3ZDUoMHgxMmYpXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDJiOGY3Mj1fMHgyYjhmNzJbJ3N1YnN0ciddKDB4MSxfMHgyYjhmNzJbXzB4MmY5N2Q1KDB4MTVlKV0tMHgyKTpfMHgyYjhmNzI9XzB4MmI4ZjcyW18weDJmOTdkNSgweDEzMCldKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbJ3JlcGxhY2UnXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVtfMHgyZjk3ZDUoMHgxMzApXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4MmI4ZjcyO31bXzB4NDI0OGQ2KDB4MWI0KV0oXzB4NWJlYjZkLF8weDRjYzZjMixfMHg1NWRiOTIsXzB4NWE3NmY2KXt2YXIgXzB4ODEzYmM4PV8weDQyNDhkNjt0aGlzW18weDgxM2JjOCgweDE0MCldKF8weDViZWI2ZCxfMHg0Y2M2YzIpLF8weDVhNzZmNiYmXzB4NWE3NmY2KCksdGhpc1tfMHg4MTNiYzgoMHhkZildKF8weDU1ZGI5MixfMHg1YmViNmQpLHRoaXNbXzB4ODEzYmM4KDB4MTA5KV0oXzB4NWJlYjZkLF8weDRjYzZjMik7fVsnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDNjNjk2MSxfMHgxNzJmZmEpe3ZhciBfMHgxNzQ0MTc9XzB4NDI0OGQ2O3RoaXNbXzB4MTc0NDE3KDB4MTNlKV0oXzB4M2M2OTYxLF8weDE3MmZmYSksdGhpc1tfMHgxNzQ0MTcoMHgxODgpXShfMHgzYzY5NjEsXzB4MTcyZmZhKSx0aGlzWydfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJ10oXzB4M2M2OTYxLF8weDE3MmZmYSksdGhpc1tfMHgxNzQ0MTcoMHgxMTcpXShfMHgzYzY5NjEsXzB4MTcyZmZhKTt9W18weDQyNDhkNigweDEzZSldKF8weDIzMmZiMSxfMHgxNTQ2ZGMpe31bXzB4NDI0OGQ2KDB4MTg4KV0oXzB4MWI1NWNhLF8weDFkYzFiMCl7fVtfMHg0MjQ4ZDYoMHgxYTcpXShfMHgyOTBkZGQsXzB4NWVhNDI1KXt9W18weDQyNDhkNigweGVkKV0oXzB4M2MxMDI2KXtyZXR1cm4gXzB4M2MxMDI2PT09dGhpc1snX3VuZGVmaW5lZCddO31bJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDU4MTZkZSxfMHg1MWFkMGYpe3ZhciBfMHg0ZTMyMDc9XzB4NDI0OGQ2O3RoaXNbXzB4NGUzMjA3KDB4MWE3KV0oXzB4NTgxNmRlLF8weDUxYWQwZiksdGhpc1tfMHg0ZTMyMDcoMHgxOTUpXShfMHg1ODE2ZGUpLF8weDUxYWQwZltfMHg0ZTMyMDcoMHhlNCldJiZ0aGlzWydfc29ydFByb3BzJ10oXzB4NTgxNmRlKSx0aGlzW18weDRlMzIwNygweDExYyldKF8weDU4MTZkZSxfMHg1MWFkMGYpLHRoaXNbXzB4NGUzMjA3KDB4MTliKV0oXzB4NTgxNmRlLF8weDUxYWQwZiksdGhpc1snX2NsZWFuTm9kZSddKF8weDU4MTZkZSk7fVtfMHg0MjQ4ZDYoMHhkZildKF8weDNjYzUyYyxfMHg0ZDM4YTcpe3ZhciBfMHg0MWU0ZGQ9XzB4NDI0OGQ2O2xldCBfMHg1M2M5Yjc7dHJ5e18weDMxOTc1MVtfMHg0MWU0ZGQoMHhmOSldJiYoXzB4NTNjOWI3PV8weDMxOTc1MVtfMHg0MWU0ZGQoMHhmOSldW18weDQxZTRkZCgweDEzOSldLF8weDMxOTc1MVtfMHg0MWU0ZGQoMHhmOSldWydlcnJvciddPWZ1bmN0aW9uKCl7fSksXzB4M2NjNTJjJiZ0eXBlb2YgXzB4M2NjNTJjW18weDQxZTRkZCgweDE1ZSldPT1fMHg0MWU0ZGQoMHgxMzUpJiYoXzB4NGQzOGE3W18weDQxZTRkZCgweDE1ZSldPV8weDNjYzUyY1tfMHg0MWU0ZGQoMHgxNWUpXSk7fWNhdGNoe31maW5hbGx5e18weDUzYzliNyYmKF8weDMxOTc1MVtfMHg0MWU0ZGQoMHhmOSldW18weDQxZTRkZCgweDEzOSldPV8weDUzYzliNyk7fWlmKF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxOTEpXT09PV8weDQxZTRkZCgweDEzNSl8fF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxOTEpXT09PV8weDQxZTRkZCgweDE3Yykpe2lmKGlzTmFOKF8weDRkMzhhN1sndmFsdWUnXSkpXzB4NGQzOGE3W18weDQxZTRkZCgweDE5YSldPSEweDAsZGVsZXRlIF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxN2YpXTtlbHNlIHN3aXRjaChfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTdmKV0pe2Nhc2UgTnVtYmVyW18weDQxZTRkZCgweGYxKV06XzB4NGQzOGE3W18weDQxZTRkZCgweDE5OSldPSEweDAsZGVsZXRlIF8weDRkMzhhN1sndmFsdWUnXTticmVhaztjYXNlIE51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTpfMHg0ZDM4YTdbJ25lZ2F0aXZlSW5maW5pdHknXT0hMHgwLGRlbGV0ZSBfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTdmKV07YnJlYWs7Y2FzZSAweDA6dGhpc1snX2lzTmVnYXRpdmVaZXJvJ10oXzB4NGQzOGE3W18weDQxZTRkZCgweDE3ZildKSYmKF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxNjEpXT0hMHgwKTticmVhazt9fWVsc2UgXzB4NGQzOGE3W18weDQxZTRkZCgweDE5MSldPT09XzB4NDFlNGRkKDB4ZWEpJiZ0eXBlb2YgXzB4M2NjNTJjW18weDQxZTRkZCgweDEwNildPT1fMHg0MWU0ZGQoMHgxM2MpJiZfMHgzY2M1MmNbXzB4NDFlNGRkKDB4MTA2KV0mJl8weDRkMzhhN1snbmFtZSddJiZfMHgzY2M1MmNbXzB4NDFlNGRkKDB4MTA2KV0hPT1fMHg0ZDM4YTdbJ25hbWUnXSYmKF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxNDYpXT1fMHgzY2M1MmNbJ25hbWUnXSk7fVsnX2lzTmVnYXRpdmVaZXJvJ10oXzB4NTQ1ZDcwKXt2YXIgXzB4M2Y1Zjc4PV8weDQyNDhkNjtyZXR1cm4gMHgxL18weDU0NWQ3MD09PU51bWJlcltfMHgzZjVmNzgoMHgxNTcpXTt9W18weDQyNDhkNigweDE3OCldKF8weDQ4MzQyZCl7dmFyIF8weDExMzNjZT1fMHg0MjQ4ZDY7IV8weDQ4MzQyZFtfMHgxMTMzY2UoMHgxOWQpXXx8IV8weDQ4MzQyZFtfMHgxMTMzY2UoMHgxOWQpXVtfMHgxMTMzY2UoMHgxNWUpXXx8XzB4NDgzNDJkWyd0eXBlJ109PT1fMHgxMTMzY2UoMHhmYil8fF8weDQ4MzQyZFtfMHgxMTMzY2UoMHgxOTEpXT09PSdNYXAnfHxfMHg0ODM0MmRbXzB4MTEzM2NlKDB4MTkxKV09PT1fMHgxMTMzY2UoMHgxNmMpfHxfMHg0ODM0MmRbXzB4MTEzM2NlKDB4MTlkKV1bXzB4MTEzM2NlKDB4MTdiKV0oZnVuY3Rpb24oXzB4MzU4Zjc0LF8weDI1MTUxOSl7dmFyIF8weDE5N2Q5ND1fMHgxMTMzY2UsXzB4YmExOTQ0PV8weDM1OGY3NFtfMHgxOTdkOTQoMHgxMDYpXVtfMHgxOTdkOTQoMHgxOGYpXSgpLF8weDEzOGFmZj1fMHgyNTE1MTlbXzB4MTk3ZDk0KDB4MTA2KV1bJ3RvTG93ZXJDYXNlJ10oKTtyZXR1cm4gXzB4YmExOTQ0PF8weDEzOGFmZj8tMHgxOl8weGJhMTk0ND5fMHgxMzhhZmY/MHgxOjB4MDt9KTt9W18weDQyNDhkNigweDExYyldKF8weDE4MDA5NSxfMHg5NGE3YmUpe3ZhciBfMHhiM2I0M2E9XzB4NDI0OGQ2O2lmKCEoXzB4OTRhN2JlW18weGIzYjQzYSgweDEyYildfHwhXzB4MTgwMDk1W18weGIzYjQzYSgweDE5ZCldfHwhXzB4MTgwMDk1W18weGIzYjQzYSgweDE5ZCldWydsZW5ndGgnXSkpe2Zvcih2YXIgXzB4NDY2NTNlPVtdLF8weDgwYzMzOD1bXSxfMHgxNDI0MTE9MHgwLF8weDJkNjAyMT1fMHgxODAwOTVbXzB4YjNiNDNhKDB4MTlkKV1bXzB4YjNiNDNhKDB4MTVlKV07XzB4MTQyNDExPF8weDJkNjAyMTtfMHgxNDI0MTErKyl7dmFyIF8weDQxMzI4OT1fMHgxODAwOTVbXzB4YjNiNDNhKDB4MTlkKV1bXzB4MTQyNDExXTtfMHg0MTMyODlbXzB4YjNiNDNhKDB4MTkxKV09PT1fMHhiM2I0M2EoMHhlYSk/XzB4NDY2NTNlW18weGIzYjQzYSgweDEzNCldKF8weDQxMzI4OSk6XzB4ODBjMzM4W18weGIzYjQzYSgweDEzNCldKF8weDQxMzI4OSk7fWlmKCEoIV8weDgwYzMzOFtfMHhiM2I0M2EoMHgxNWUpXXx8XzB4NDY2NTNlWydsZW5ndGgnXTw9MHgxKSl7XzB4MTgwMDk1W18weGIzYjQzYSgweDE5ZCldPV8weDgwYzMzODt2YXIgXzB4MjI3NGRmPXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDQ2NjUzZX07dGhpc1tfMHhiM2I0M2EoMHgxM2UpXShfMHgyMjc0ZGYsXzB4OTRhN2JlKSx0aGlzW18weGIzYjQzYSgweDFhNyldKF8weDIyNzRkZixfMHg5NGE3YmUpLHRoaXNbXzB4YjNiNDNhKDB4MTk1KV0oXzB4MjI3NGRmKSx0aGlzW18weGIzYjQzYSgweDExNyldKF8weDIyNzRkZixfMHg5NGE3YmUpLF8weDIyNzRkZlsnaWQnXSs9J1xcXFx4MjBmJyxfMHgxODAwOTVbXzB4YjNiNDNhKDB4MTlkKV1bXzB4YjNiNDNhKDB4MTE5KV0oXzB4MjI3NGRmKTt9fX1bXzB4NDI0OGQ2KDB4MTliKV0oXzB4NDg4ZTA3LF8weDMwZGE1Zil7fVtfMHg0MjQ4ZDYoMHgxOTUpXShfMHgyZmI5Y2Epe31bXzB4NDI0OGQ2KDB4ZDQpXShfMHg0NmU4OGUpe3ZhciBfMHgxMTY3YzQ9XzB4NDI0OGQ2O3JldHVybiBBcnJheVtfMHgxMTY3YzQoMHhmYSldKF8weDQ2ZTg4ZSl8fHR5cGVvZiBfMHg0NmU4OGU9PSdvYmplY3QnJiZ0aGlzW18weDExNjdjNCgweDE3NyldKF8weDQ2ZTg4ZSk9PT1fMHgxMTY3YzQoMHgxMTQpO31bJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHgzMTQ0YTgsXzB4ZDhkNWM3KXt9WydfY2xlYW5Ob2RlJ10oXzB4MzQ5Y2I0KXt2YXIgXzB4MmE1ODcyPV8weDQyNDhkNjtkZWxldGUgXzB4MzQ5Y2I0W18weDJhNTg3MigweDE0OCldLGRlbGV0ZSBfMHgzNDljYjRbXzB4MmE1ODcyKDB4MThhKV0sZGVsZXRlIF8weDM0OWNiNFtfMHgyYTU4NzIoMHgxNWIpXTt9W18weDQyNDhkNigweDE2NCldKF8weDEzODdiNixfMHg1OWRlNzApe319bGV0IF8weDU5Y2Q2ZD1uZXcgXzB4MzE4N2E3KCksXzB4MTFlNDkyPXsncHJvcHMnOjB4NjQsJ2VsZW1lbnRzJzoweDY0LCdzdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzoweDQwMCoweDMyLCdhdXRvRXhwYW5kTGltaXQnOjB4MTM4OCwnYXV0b0V4cGFuZE1heERlcHRoJzoweGF9LF8weGI3ZTNkYj17J3Byb3BzJzoweDUsJ2VsZW1lbnRzJzoweDUsJ3N0ckxlbmd0aCc6MHgxMDAsJ3RvdGFsU3RyTGVuZ3RoJzoweDEwMCoweDMsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzoweDJ9O2Z1bmN0aW9uIF8weDJlODIzMihfMHhjZmQyOTAsXzB4M2U5NDFmLF8weDMyODNjMixfMHgyMzA2NWUsXzB4MmE3ZjAxLF8weDM4Nzc4ZSl7dmFyIF8weDQyY2EyOT1fMHg0MjQ4ZDY7bGV0IF8weDQwMWZmNixfMHg0ODg1ZGU7dHJ5e18weDQ4ODVkZT1fMHgyOTlkYTMoKSxfMHg0MDFmZjY9XzB4MjQwOGJhW18weDNlOTQxZl0sIV8weDQwMWZmNnx8XzB4NDg4NWRlLV8weDQwMWZmNlsndHMnXT4weDFmNCYmXzB4NDAxZmY2W18weDQyY2EyOSgweDEwMCldJiZfMHg0MDFmZjZbXzB4NDJjYTI5KDB4MWE0KV0vXzB4NDAxZmY2W18weDQyY2EyOSgweDEwMCldPDB4NjQ/KF8weDI0MDhiYVtfMHgzZTk0MWZdPV8weDQwMWZmNj17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDQ4ODVkZX0sXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildPXt9KTpfMHg0ODg1ZGUtXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildWyd0cyddPjB4MzImJl8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxMDApXSYmXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildWyd0aW1lJ10vXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDEwMCldPDB4NjQmJihfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV09e30pO2xldCBfMHgzOTA1ZDc9W10sXzB4NWMzYTU5PV8weDQwMWZmNlsncmVkdWNlTGltaXRzJ118fF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVsncmVkdWNlTGltaXRzJ10/XzB4YjdlM2RiOl8weDExZTQ5MixfMHg0MDcyZDY9XzB4OWM4NWQyPT57dmFyIF8weDU3NTRlYT1fMHg0MmNhMjk7bGV0IF8weGVjNzczNT17fTtyZXR1cm4gXzB4ZWM3NzM1W18weDU3NTRlYSgweDE5ZCldPV8weDljODVkMltfMHg1NzU0ZWEoMHgxOWQpXSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTYyKV09XzB4OWM4NWQyW18weDU3NTRlYSgweDE2MildLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxODUpXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4MTg1KV0sXzB4ZWM3NzM1Wyd0b3RhbFN0ckxlbmd0aCddPV8weDljODVkMltfMHg1NzU0ZWEoMHgxNTUpXSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4ZTEpXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4ZTEpXSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTY3KV09XzB4OWM4NWQyW18weDU3NTRlYSgweDE2NyldLF8weGVjNzczNVtfMHg1NzU0ZWEoMHhlNCldPSEweDEsXzB4ZWM3NzM1W18weDU3NTRlYSgweDEyYildPSFfMHg1ZDI2N2EsXzB4ZWM3NzM1W18weDU3NTRlYSgweDEyOSldPTB4MSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTA3KV09MHgwLF8weGVjNzczNVsnZXhwSWQnXT1fMHg1NzU0ZWEoMHhmZiksXzB4ZWM3NzM1W18weDU3NTRlYSgweDE3OSldPV8weDU3NTRlYSgweGZkKSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTgyKV09ITB4MCxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4ZTgpXT1bXSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTc1KV09MHgwLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxOGQpXT0hMHgwLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxMDQpXT0weDAsXzB4ZWM3NzM1W18weDU3NTRlYSgweDFhZCldPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weGVjNzczNTt9O2Zvcih2YXIgXzB4NGVkYjc4PTB4MDtfMHg0ZWRiNzg8XzB4MmE3ZjAxW18weDQyY2EyOSgweDE1ZSldO18weDRlZGI3OCsrKV8weDM5MDVkN1tfMHg0MmNhMjkoMHgxMzQpXShfMHg1OWNkNmRbJ3NlcmlhbGl6ZSddKHsndGltZU5vZGUnOl8weGNmZDI5MD09PV8weDQyY2EyOSgweDFhNCl8fHZvaWQgMHgwfSxfMHgyYTdmMDFbXzB4NGVkYjc4XSxfMHg0MDcyZDYoXzB4NWMzYTU5KSx7fSkpO2lmKF8weGNmZDI5MD09PSd0cmFjZScpe2xldCBfMHgzNGNiOTE9RXJyb3JbXzB4NDJjYTI5KDB4MTBiKV07dHJ5e0Vycm9yW18weDQyY2EyOSgweDEwYildPTB4MS8weDAsXzB4MzkwNWQ3W18weDQyY2EyOSgweDEzNCldKF8weDU5Y2Q2ZFtfMHg0MmNhMjkoMHgxYjYpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbJ3N0YWNrJ10sXzB4NDA3MmQ2KF8weDVjM2E1OSkseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbJ3N0YWNrVHJhY2VMaW1pdCddPV8weDM0Y2I5MTt9fXJldHVybnsnbWV0aG9kJzonbG9nJywndmVyc2lvbic6XzB4NTYzNTA0LCdhcmdzJzpbeyd0cyc6XzB4MzI4M2MyLCdzZXNzaW9uJzpfMHgyMzA2NWUsJ2FyZ3MnOl8weDM5MDVkNywnaWQnOl8weDNlOTQxZiwnY29udGV4dCc6XzB4Mzg3NzhlfV19O31jYXRjaChfMHg0OGYwY2Upe3JldHVybnsnbWV0aG9kJzonbG9nJywndmVyc2lvbic6XzB4NTYzNTA0LCdhcmdzJzpbeyd0cyc6XzB4MzI4M2MyLCdzZXNzaW9uJzpfMHgyMzA2NWUsJ2FyZ3MnOlt7J3R5cGUnOl8weDQyY2EyOSgweDExMyksJ2Vycm9yJzpfMHg0OGYwY2UmJl8weDQ4ZjBjZVsnbWVzc2FnZSddfV0sJ2lkJzpfMHgzZTk0MWYsJ2NvbnRleHQnOl8weDM4Nzc4ZX1dfTt9ZmluYWxseXt0cnl7aWYoXzB4NDAxZmY2JiZfMHg0ODg1ZGUpe2xldCBfMHgyZmYxODk9XzB4Mjk5ZGEzKCk7XzB4NDAxZmY2Wydjb3VudCddKyssXzB4NDAxZmY2W18weDQyY2EyOSgweDFhNCldKz1fMHg1ZGVhZDUoXzB4NDg4NWRlLF8weDJmZjE4OSksXzB4NDAxZmY2Wyd0cyddPV8weDJmZjE4OSxfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bXzB4NDJjYTI5KDB4MTAwKV0rKyxfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bXzB4NDJjYTI5KDB4MWE0KV0rPV8weDVkZWFkNShfMHg0ODg1ZGUsXzB4MmZmMTg5KSxfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bJ3RzJ109XzB4MmZmMTg5LChfMHg0MDFmZjZbJ2NvdW50J10+MHgzMnx8XzB4NDAxZmY2W18weDQyY2EyOSgweDFhNCldPjB4NjQpJiYoXzB4NDAxZmY2W18weDQyY2EyOSgweDE0NCldPSEweDApLChfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bXzB4NDJjYTI5KDB4MTAwKV0+MHgzZTh8fF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxYTQpXT4weDEyYykmJihfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bXzB4NDJjYTI5KDB4MTQ0KV09ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4MmU4MjMyO30oKF8weDMwODBlMCxfMHgxM2FkODUsXzB4NGIwMTk5LF8weDJkNDBmNixfMHg0YjdlNDUsXzB4NGUwZTc3LF8weDM3MDUyYixfMHgyMDNiYjQsXzB4MmY5OTMxLF8weDM2NjMwMyk9Pnt2YXIgXzB4NTIxYTg0PV8weDMwZDQ2YztpZihfMHgzMDgwZTBbJ19jb25zb2xlX25pbmphJ10pcmV0dXJuIF8weDMwODBlMFtfMHg1MjFhODQoMHhmNCldO2lmKCFKKF8weDMwODBlMCxfMHgyMDNiYjQsXzB4NGI3ZTQ1KSlyZXR1cm4gXzB4MzA4MGUwWydfY29uc29sZV9uaW5qYSddPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2NvdmVyYWdlJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHgzMDgwZTBbXzB4NTIxYTg0KDB4ZjQpXTtsZXQgXzB4MzQ5M2ZjPVcoXzB4MzA4MGUwKSxfMHg0Y2FkMzA9XzB4MzQ5M2ZjW18weDUyMWE4NCgweGYwKV0sXzB4ODE5MjczPV8weDM0OTNmY1tfMHg1MjFhODQoMHgxNmQpXSxfMHg1NDRjYzI9XzB4MzQ5M2ZjW18weDUyMWE4NCgweDE0OSldLF8weDNlYjNlNj17J2hpdHMnOnt9LCd0cyc6e319LF8weDI1ZmYxND1ZKF8weDMwODBlMCxfMHgyZjk5MzEsXzB4M2ViM2U2LF8weDRlMGU3NyksXzB4MTkyMzAwPV8weDI1ODczZj0+e18weDNlYjNlNlsndHMnXVtfMHgyNTg3M2ZdPV8weDgxOTI3MygpO30sXzB4NDRmNTEwPShfMHg1NTYyZmQsXzB4MmY2NzA2KT0+e3ZhciBfMHgyZWNkNjY9XzB4NTIxYTg0O2xldCBfMHgyY2M5MTY9XzB4M2ViM2U2Wyd0cyddW18weDJmNjcwNl07aWYoZGVsZXRlIF8weDNlYjNlNlsndHMnXVtfMHgyZjY3MDZdLF8weDJjYzkxNil7bGV0IF8weDFmNTg0Mj1fMHg0Y2FkMzAoXzB4MmNjOTE2LF8weDgxOTI3MygpKTtfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDJlY2Q2NigweDFhNCksXzB4NTU2MmZkLF8weDU0NGNjMigpLF8weGY0ODllMixbXzB4MWY1ODQyXSxfMHgyZjY3MDYpKTt9fSxfMHgxOGY3OGI9XzB4MjdlNTMzPT5fMHg3NGFkY2M9Pnt2YXIgXzB4NTNmMzFhPV8weDUyMWE4NDt0cnl7XzB4MTkyMzAwKF8weDc0YWRjYyksXzB4MjdlNTMzKF8weDc0YWRjYyk7fWZpbmFsbHl7XzB4MzA4MGUwW18weDUzZjMxYSgweGY5KV1bXzB4NTNmMzFhKDB4MWE0KV09XzB4MjdlNTMzO319LF8weDE1NTNkOD1fMHg0YjYyNGI9Pl8weDVjYTQ0MT0+e3ZhciBfMHgyZmZmZjc9XzB4NTIxYTg0O3RyeXtsZXQgW18weDVlMmQ4NixfMHg0NmRiNTJdPV8weDVjYTQ0MVtfMHgyZmZmZjcoMHgxM2QpXShfMHgyZmZmZjcoMHgxN2QpKTtfMHg0NGY1MTAoXzB4NDZkYjUyLF8weDVlMmQ4NiksXzB4NGI2MjRiKF8weDVlMmQ4Nik7fWZpbmFsbHl7XzB4MzA4MGUwW18weDJmZmZmNygweGY5KV1bXzB4MmZmZmY3KDB4MTQyKV09XzB4NGI2MjRiO319O18weDMwODBlMFtfMHg1MjFhODQoMHhmNCldPXsnY29uc29sZUxvZyc6KF8weDE4ZTI4MCxfMHgxZjRkMTUpPT57dmFyIF8weDFiOThmNT1fMHg1MjFhODQ7XzB4MzA4MGUwWydjb25zb2xlJ11bXzB4MWI5OGY1KDB4MWEwKV1bXzB4MWI5OGY1KDB4MTA2KV0hPT1fMHgxYjk4ZjUoMHgxMjMpJiZfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDFiOThmNSgweDFhMCksXzB4MThlMjgwLF8weDU0NGNjMigpLF8weGY0ODllMixfMHgxZjRkMTUpKTt9LCdjb25zb2xlVHJhY2UnOihfMHg0Yzk1NmIsXzB4Y2RkYjExKT0+e3ZhciBfMHg1ZGQwMjg9XzB4NTIxYTg0O18weDMwODBlMFtfMHg1ZGQwMjgoMHhmOSldW18weDVkZDAyOCgweDFhMCldW18weDVkZDAyOCgweDEwNildIT09XzB4NWRkMDI4KDB4MTEwKSYmXzB4NTM3NTFjKF8weDI1ZmYxNChfMHg1ZGQwMjgoMHgxNTYpLF8weDRjOTU2YixfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsXzB4Y2RkYjExKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDEwYTMwOD1fMHg1MjFhODQ7XzB4MzA4MGUwWydjb25zb2xlJ11bXzB4MTBhMzA4KDB4MWE0KV09XzB4MThmNzhiKF8weDMwODBlMFsnY29uc29sZSddW18weDEwYTMwOCgweDFhNCldKTt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt2YXIgXzB4NDRhODg0PV8weDUyMWE4NDtfMHgzMDgwZTBbXzB4NDRhODg0KDB4ZjkpXVsndGltZUVuZCddPV8weDE1NTNkOChfMHgzMDgwZTBbXzB4NDRhODg0KDB4ZjkpXVtfMHg0NGE4ODQoMHgxNDIpXSk7fSwnYXV0b0xvZyc6KF8weDQ3OTY2MCxfMHhkMTY4NmMpPT57dmFyIF8weDQwNjQ2ZT1fMHg1MjFhODQ7XzB4NTM3NTFjKF8weDI1ZmYxNChfMHg0MDY0NmUoMHgxYTApLF8weGQxNjg2YyxfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsW18weDQ3OTY2MF0pKTt9LCdhdXRvTG9nTWFueSc6KF8weDkxZmVkNSxfMHg0MGE4NGYpPT57dmFyIF8weDczNDRlMT1fMHg1MjFhODQ7XzB4NTM3NTFjKF8weDI1ZmYxNChfMHg3MzQ0ZTEoMHgxYTApLF8weDkxZmVkNSxfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsXzB4NDBhODRmKSk7fSwnYXV0b1RyYWNlJzooXzB4MzU0NmY3LF8weDNkOGViNSk9Pnt2YXIgXzB4MjU1MTJmPV8weDUyMWE4NDtfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDI1NTEyZigweDE1NiksXzB4M2Q4ZWI1LF8weDU0NGNjMigpLF8weGY0ODllMixbXzB4MzU0NmY3XSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHgyYjcyMmYsXzB4MmRmMDNiKT0+e3ZhciBfMHgyMGFjZjE9XzB4NTIxYTg0O18weDUzNzUxYyhfMHgyNWZmMTQoXzB4MjBhY2YxKDB4MTU2KSxfMHgyYjcyMmYsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLF8weDJkZjAzYikpO30sJ2F1dG9UaW1lJzooXzB4Mjk3MTk0LF8weDFhNmI2OCxfMHg1OWQ2MGIpPT57XzB4MTkyMzAwKF8weDU5ZDYwYik7fSwnYXV0b1RpbWVFbmQnOihfMHg0YjExNzQsXzB4MTllNGY5LF8weDNlOTc3Myk9PntfMHg0NGY1MTAoXzB4MTllNGY5LF8weDNlOTc3Myk7fSwnY292ZXJhZ2UnOl8weDE2OTAzNT0+e3ZhciBfMHg5NGZkZD1fMHg1MjFhODQ7XzB4NTM3NTFjKHsnbWV0aG9kJzpfMHg5NGZkZCgweDE4NyksJ3ZlcnNpb24nOl8weDRlMGU3NywnYXJncyc6W3snaWQnOl8weDE2OTAzNX1dfSk7fX07bGV0IF8weDUzNzUxYz1iKF8weDMwODBlMCxfMHgxM2FkODUsXzB4NGIwMTk5LF8weDJkNDBmNixfMHg0YjdlNDUsXzB4MzY2MzAzKSxfMHhmNDg5ZTI9XzB4MzA4MGUwW18weDUyMWE4NCgweGQzKV07cmV0dXJuIF8weDMwODBlMFtfMHg1MjFhODQoMHhmNCldO30pKGdsb2JhbFRoaXMsXzB4MzBkNDZjKDB4ZTApLF8weDMwZDQ2YygweGNjKSxcXFwiYzpcXFxcXFxcXFVzZXJzXFxcXFxcXFxVU0VSXFxcXFxcXFwudnNjb2RlXFxcXFxcXFxleHRlbnNpb25zXFxcXFxcXFx3YWxsYWJ5anMuY29uc29sZS1uaW5qYS0xLjAuMjQwXFxcXFxcXFxub2RlX21vZHVsZXNcXFwiLF8weDMwZDQ2YygweDE3YSksXzB4MzBkNDZjKDB4ZjIpLF8weDMwZDQ2YygweGQ5KSxfMHgzMGQ0NmMoMHgxYWEpLF8weDMwZDQ2YygweDEwMyksXzB4MzBkNDZjKDB4ZWUpKTtcIik7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fdGUoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZUVuZCgpO31jYXRjaChlKXt9fTsvKmVzbGludCB1bmljb3JuL25vLWFidXNpdmUtZXNsaW50LWRpc2FibGU6LGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iLCJpbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuaW1wb3J0ICdzd2lwZXIvc3dpcGVyLWJ1bmRsZS5taW4uY3NzJztcclxuaW1wb3J0ICdzd2lwZXIvc3dpcGVyLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IFN3aXBlckNvcmUsIHsgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLWJ1bmRsZS5jc3MnO1xyXG5cclxuLy8gaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuLy8gaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xyXG4vLyBpbXBvcnQgJ3N3aXBlci9jc3MvYXV0b3BsYXknO1xyXG5cclxuY29uc3QgQnJpZGUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdicmlkZS1jb250YWluZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3Rvcmllcy1pbWctY29udGFpbmVyJz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwcmVtJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMjVyZW0nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcnXHJcbiAgICAgICAgICBhbHQ9J2JyaWRlIHN0b3JpZXMnXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nZ3Jvb20tdGl0bGUnPkJyaWRlPC9oMj5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J2dyb29tLXBhcmFncmFwaCc+XHJcbiAgICAgICAgICBPdXQgb2YgdGhlIGJsdWVzIEkgc2F3IGEgcmVxdWVzdCwgSSBjaGVja2VkIGl0IGFuZCBpdCB3YXMgdGhpc1xyXG4gICAgICAgICAgYmVhdXRpZnVsIGxhZHkuIEkgYWNjZXB0ZWQgaXQgaW1tZWRpYXRlbHkgYW5kIHN0YXJ0ZWQgY2hlY2tpbmcgaGVyIFRMLlxyXG4gICAgICAgICAgT24gdGhlIDR0aCBvZiBBcHJpbCAyMDE2LCBJIHNlbnQgaGVyIGEgRE0gYW5kIHdlIHN0YXJ0ZWQgdGFsa2luZy4gV2VcclxuICAgICAgICAgIGJlY2FtZSByZWFsbHkgcmVhbGx5IGNsb3NlLiBMYXRlciBpbiBOb3ZlbWJlciBJIGFza2VkIGhlciB0byBiZSBteVxyXG4gICAgICAgICAgZ2lybGZyaWVuZCBhbmQgaGVyZSB3ZSBhcmUgdG9kYXnwn6WwIGdldHRpbmcgbWFycmllZC5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgR3Jvb20gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdicmlkZS1jb250YWluZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3Rvcmllcy1pbWctY29udGFpbmVyJz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwcmVtJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMjVyZW0nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcnXHJcbiAgICAgICAgICBhbHQ9J2JyaWRlIHN0b3JpZXMnXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nZ3Jvb20tdGl0bGUnPkdyb29tPC9oMj5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J2dyb29tLXBhcmFncmFwaCc+XHJcbiAgICAgICAgICBPdXQgb2YgdGhlIGJsdWVzIEkgc2F3IGEgcmVxdWVzdCwgSSBjaGVja2VkIGl0IGFuZCBpdCB3YXMgdGhpc1xyXG4gICAgICAgICAgYmVhdXRpZnVsIGxhZHkuIEkgYWNjZXB0ZWQgaXQgaW1tZWRpYXRlbHkgYW5kIHN0YXJ0ZWQgY2hlY2tpbmcgaGVyIFRMLlxyXG4gICAgICAgICAgT24gdGhlIDR0aCBvZiBBcHJpbCAyMDE2LCBJIHNlbnQgaGVyIGEgRE0gYW5kIHdlIHN0YXJ0ZWQgdGFsa2luZy4gV2VcclxuICAgICAgICAgIGJlY2FtZSByZWFsbHkgcmVhbGx5IGNsb3NlLiBMYXRlciBpbiBOb3ZlbWJlciBJIGFza2VkIGhlciB0byBiZSBteVxyXG4gICAgICAgICAgZ2lybGZyaWVuZCBhbmQgaGVyZSB3ZSBhcmUgdG9kYXnwn6WwIGdldHRpbmcgbWFycmllZC5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgU3RvcmllcyA9ICgpID0+IHtcclxuICBTd2lwZXJDb3JlLnVzZShbQXV0b3BsYXldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTd2lwZXJcclxuICAgICAgc3BhY2VCZXR3ZWVuPXs1MH1cclxuICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgYXV0b3BsYXk9e3tcclxuICAgICAgICBkZWxheTogMTAwMDAsXHJcbiAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICB9fVxyXG4gICAgICBtb2R1bGVzPXtbUGFnaW5hdGlvbiwgQXV0b3BsYXldfVxyXG4gICAgICBwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG4gICAgICAvLyAgIGF1dG9wbGF5XHJcbiAgICAgIC8vICAgbW9kdWxlcz17W0F1dG9wbGF5LCBQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uXX1cclxuICAgICAgb25Td2lwZXI9eyhzd2lwZXIpID0+IC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDI2NzYwNTcxNzVfMGAsc3dpcGVyKSl9XHJcbiAgICAgIG9uU2xpZGVDaGFuZ2U9eygpID0+IC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDI2NzYwNTcxNzVfMWAsJ3NsaWRlIGNoYW5nZScpKX1cclxuICAgID5cclxuICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgIDxCcmlkZSAvPnsnICd9XHJcbiAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICA8R3Jvb20gLz57JyAnfVxyXG4gICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgPC9Td2lwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JpZXM7XHJcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0JztmdW5jdGlvbiBfMHgzOTFkKCl7dmFyIF8weDJkOGE5OD1bJ21lc3NhZ2UnLCd0ZXN0JywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJzZob0JISngnLCdmdW5jdGlvbicsJ19hbGxvd2VkVG9TZW5kJywnMTVabUxWTGwnLCdfaXNVbmRlZmluZWQnLCcnLCdlbnYnLCdlbGFwc2VkJywnUE9TSVRJVkVfSU5GSU5JVFknLCcxLjAuMCcsJ2RhdGUnLCdfY29uc29sZV9uaW5qYScsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5Jywnbm9kZU1vZHVsZXMnLCdfYWRkUHJvcGVydHknLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ2NvbnNvbGUnLCdpc0FycmF5JywnYXJyYXknLCcxMzEyNzY2ZkZMTEFEJywncm9vdF9leHAnLCdjYWxsJywncm9vdF9leHBfaWQnLCdjb3VudCcsJ1N0cmluZycsJ3dhcm4nLCcnLCdhbGxTdHJMZW5ndGgnLCcyMEF1TVh3WCcsJ25hbWUnLCdsZXZlbCcsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJzE5Nzg0UlpXS0dkJywnc3RhY2tUcmFjZUxpbWl0JywnW29iamVjdFxcXFx4MjBTZXRdJywnTWFwJywnMzkxNXpEY1d6WCcsJ2hpdHMnLCdkaXNhYmxlZFRyYWNlJywnbG9jYXRpb24nLCdzdWJzdHInLCd1bmtub3duJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdfaXNQcmltaXRpdmVUeXBlJywnbWV0aG9kJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ19pbk5leHRFZGdlJywndW5zaGlmdCcsJ3N0cmluZ2lmeScsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnX2FkZEZ1bmN0aW9uc05vZGUnLCd2ZXJzaW9ucycsJ19yZWNvbm5lY3RUaW1lb3V0JywnX2RhdGVUb1N0cmluZycsJ3JlbWl4JywnMTIzMjI5N3NtSXdNbScsJ2hvc3RuYW1lJywnZGlzYWJsZWRMb2cnLCdwZXJmX2hvb2tzJywnY2FwcGVkJywnW29iamVjdFxcXFx4MjBEYXRlXScsJzE0MjUzaERwSW5tJywndGhlbicsJ2RlcHRoJywnaGFzT3duUHJvcGVydHknLCdub0Z1bmN0aW9ucycsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnTkVYVF9SVU5USU1FJywnX3BfJywnbWF0Y2gnLCdyZXBsYWNlJywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdqb2luJywnZWRnZScsJ3B1c2gnLCdudW1iZXInLCdfdHlwZScsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywncHJvY2VzcycsJ2Vycm9yJywnX3BfbGVuZ3RoJywnZG9ja2VyaXplZEFwcCcsJ3N0cmluZycsJ3NwbGl0JywnX3NldE5vZGVJZCcsJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZScsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCd0aW1lRW5kJywnX2lzTWFwJywncmVkdWNlTGltaXRzJywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdmdW5jTmFtZScsJ2NhdGNoJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnbm93JywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCc0MzJNaEhORk8nLCdfY29ubmVjdGVkJywndG9TdHJpbmcnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnZGF0YScsJ2hydGltZScsJ2VudW1lcmFibGUnLCdhc3RybycsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCdfaW5Ccm93c2VyJywndG90YWxTdHJMZW5ndGgnLCd0cmFjZScsJ05FR0FUSVZFX0lORklOSVRZJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ251bGwnLCdudXh0JywnX2hhc01hcE9uSXRzUGF0aCcsJ1xcXFx4MjBzZXJ2ZXInLCdwb3J0JywnbGVuZ3RoJywnX1dlYlNvY2tldENsYXNzJywncGFyZW50JywnbmVnYXRpdmVaZXJvJywnZWxlbWVudHMnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdnbG9iYWwnLCdjYXBwZWRFbGVtZW50cycsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ0hUTUxBbGxDb2xsZWN0aW9uJywnU3ltYm9sJywncGF0aCcsJ2Jvb2xlYW4nLCdTZXQnLCd0aW1lU3RhbXAnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdfcF9uYW1lJywnX1N5bWJvbCcsJ19rZXlTdHJSZWdFeHAnLCdfZGlzcG9zZVdlYnNvY2tldCcsJ2dldHRlcicsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdzeW1ib2wnLCdfb2JqZWN0VG9TdHJpbmcnLCdfc29ydFByb3BzJywncm9vdEV4cHJlc3Npb24nLCd3ZWJwYWNrJywnc29ydCcsJ051bWJlcicsJzpsb2dQb2ludElkOicsJzgzNzYzNjBuVEZmQ28nLCd2YWx1ZScsJ3Byb3RvdHlwZScsJ19wcm9wZXJ0eScsJ2F1dG9FeHBhbmQnLCdvYmplY3QnLCdfaXNTZXQnLCdzdHJMZW5ndGgnLCdfc29ja2V0JywnY292ZXJhZ2UnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ3dzOi8vJywnX2hhc1NldE9uSXRzUGF0aCcsJ2JpZ2ludCcsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ3Jlc29sdmVHZXR0ZXJzJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywndG9Mb3dlckNhc2UnLCd1bnJlZicsJ3R5cGUnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcsJ19zZW5kRXJyb3JNZXNzYWdlJywnNTM4ODZSQkJFZlcnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ19wcm9wZXJ0eU5hbWUnLCdjbG9zZScsJ3VuZGVmaW5lZCcsJ3Bvc2l0aXZlSW5maW5pdHknLCduYW4nLCdfYWRkTG9hZE5vZGUnLCdCb29sZWFuJywncHJvcHMnLCduZXh0LmpzJywnb25vcGVuJywnbG9nJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdyZWxvYWQnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCd0aW1lJywnZ2V0JywnY29uc3RydWN0b3InLCdfc2V0Tm9kZUxhYmVsJywnaW5kZXgnLCdbb2JqZWN0XFxcXHgyME1hcF0nLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiRGFtaWxhcmVcXFwiLFxcXCIxNjkuMjU0LjgwLjgwXFxcIixcXFwiMTcyLjMxLjExMi4xXFxcIl0sJ29ubWVzc2FnZScsJ2ZvckVhY2gnLCdub2RlJywnZ2V0UHJvdG90eXBlT2YnLCdCdWZmZXInLCc0NDMxMDQwQ1FIRXNvJywnXFxcXHgyMGJyb3dzZXInLCdfcmVnRXhwVG9TdHJpbmcnLCdpbmNsdWRlcycsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdkZWZhdWx0Jywnc2VyaWFsaXplJywnNjA5OTInLCdfX2VzJysnTW9kdWxlJywncGVyZm9ybWFuY2UnLCdiaW5kJywncmVhZHlTdGF0ZScsJ19jb25uZWN0aW5nJywnX251bWJlclJlZ0V4cCcsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdfaXNBcnJheScsJ29uZXJyb3InLCdob3N0JywnX0hUTUxBbGxDb2xsZWN0aW9uJywnX3dzJywnMTY5ODM0OTcwMzkzNicsJ3NlbmQnLCdjb25jYXQnLCdnYXRld2F5LmRvY2tlci5pbnRlcm5hbCcsJ2N1cnJlbnQnLCdvbmNsb3NlJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJzEyNy4wLjAuMScsJ2F1dG9FeHBhbmRMaW1pdCcsJ0Vycm9yJywnX2NhcElmU3RyaW5nJywnc29ydFByb3BzJywnX3VuZGVmaW5lZCddO18weDM5MWQ9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4MmQ4YTk4O307cmV0dXJuIF8weDM5MWQoKTt9dmFyIF8weDMwZDQ2Yz1fMHgzOTRiO2Z1bmN0aW9uIF8weDM5NGIoXzB4MTIyZjMyLF8weDU2OWYyOCl7dmFyIF8weDM5MWRmMz1fMHgzOTFkKCk7cmV0dXJuIF8weDM5NGI9ZnVuY3Rpb24oXzB4Mzk0YjM1LF8weDJmYmUxNil7XzB4Mzk0YjM1PV8weDM5NGIzNS0weGNjO3ZhciBfMHgxMTE4OTA9XzB4MzkxZGYzW18weDM5NGIzNV07cmV0dXJuIF8weDExMTg5MDt9LF8weDM5NGIoXzB4MTIyZjMyLF8weDU2OWYyOCk7fShmdW5jdGlvbihfMHgxZDNlNTMsXzB4MWYyNGU1KXt2YXIgXzB4NDMwYzZjPV8weDM5NGIsXzB4NDU5NWVjPV8weDFkM2U1MygpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NTUwNmJmPXBhcnNlSW50KF8weDQzMGM2YygweGVjKSkvMHgxKigtcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTk0KSkvMHgyKSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTI3KSkvMHgzKihwYXJzZUludChfMHg0MzBjNmMoMHgxMDUpKS8weDQpKy1wYXJzZUludChfMHg0MzBjNmMoMHgxYjApKS8weDUrLXBhcnNlSW50KF8weDQzMGM2YygweGU5KSkvMHg2KihwYXJzZUludChfMHg0MzBjNmMoMHhmYykpLzB4NykrLXBhcnNlSW50KF8weDQzMGM2YygweDEwYSkpLzB4OCoocGFyc2VJbnQoXzB4NDMwYzZjKDB4MTBlKSkvMHg5KSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTdlKSkvMHhhKy1wYXJzZUludChfMHg0MzBjNmMoMHgxMjEpKS8weGIqKC1wYXJzZUludChfMHg0MzBjNmMoMHgxNGIpKS8weGMpO2lmKF8weDU1MDZiZj09PV8weDFmMjRlNSlicmVhaztlbHNlIF8weDQ1OTVlY1sncHVzaCddKF8weDQ1OTVlY1snc2hpZnQnXSgpKTt9Y2F0Y2goXzB4MTAzYjRhKXtfMHg0NTk1ZWNbJ3B1c2gnXShfMHg0NTk1ZWNbJ3NoaWZ0J10oKSk7fX19KF8weDM5MWQsMHg5NmRjZikpO3ZhciBqPU9iamVjdFsnY3JlYXRlJ10sSD1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10sRz1PYmplY3RbXzB4MzBkNDZjKDB4MTZlKV0sZWU9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eU5hbWVzJ10sdGU9T2JqZWN0W18weDMwZDQ2YygweDFhZSldLG5lPU9iamVjdFsncHJvdG90eXBlJ11bXzB4MzBkNDZjKDB4MTJhKV0scmU9KF8weDFkNWZjNixfMHg3NDc4MWQsXzB4OGYwM2NkLF8weDQ5ZmY0Zik9Pnt2YXIgXzB4MTgwZGNkPV8weDMwZDQ2YztpZihfMHg3NDc4MWQmJnR5cGVvZiBfMHg3NDc4MWQ9PV8weDE4MGRjZCgweDE4Myl8fHR5cGVvZiBfMHg3NDc4MWQ9PV8weDE4MGRjZCgweGVhKSl7Zm9yKGxldCBfMHgxNmNkOTUgb2YgZWUoXzB4NzQ3ODFkKSkhbmVbJ2NhbGwnXShfMHgxZDVmYzYsXzB4MTZjZDk1KSYmXzB4MTZjZDk1IT09XzB4OGYwM2NkJiZIKF8weDFkNWZjNixfMHgxNmNkOTUseydnZXQnOigpPT5fMHg3NDc4MWRbXzB4MTZjZDk1XSwnZW51bWVyYWJsZSc6IShfMHg0OWZmNGY9RyhfMHg3NDc4MWQsXzB4MTZjZDk1KSl8fF8weDQ5ZmY0ZltfMHgxODBkY2QoMHgxNTEpXX0pO31yZXR1cm4gXzB4MWQ1ZmM2O30seD0oXzB4NTY4YmM4LF8weDJkZTFkNCxfMHg1YjRjNGYpPT4oXzB4NWI0YzRmPV8weDU2OGJjOCE9bnVsbD9qKHRlKF8weDU2OGJjOCkpOnt9LHJlKF8weDJkZTFkNHx8IV8weDU2OGJjOHx8IV8weDU2OGJjOFtfMHgzMGQ0NmMoMHhjZCldP0goXzB4NWI0YzRmLF8weDMwZDQ2YygweDFiNSkseyd2YWx1ZSc6XzB4NTY4YmM4LCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4NWI0YzRmLF8weDU2OGJjOCkpLFg9Y2xhc3N7Y29uc3RydWN0b3IoXzB4NDdmMzhjLF8weDVjMWIwNixfMHgzZjI4NTYsXzB4NDU3ZDNkLF8weDE4ZmY2NCl7dmFyIF8weDRiYjYxZD1fMHgzMGQ0NmM7dGhpc1tfMHg0YmI2MWQoMHgxNjUpXT1fMHg0N2YzOGMsdGhpc1tfMHg0YmI2MWQoMHhkNildPV8weDVjMWIwNix0aGlzW18weDRiYjYxZCgweDE1ZCldPV8weDNmMjg1Nix0aGlzW18weDRiYjYxZCgweGY2KV09XzB4NDU3ZDNkLHRoaXNbJ2RvY2tlcml6ZWRBcHAnXT1fMHgxOGZmNjQsdGhpc1tfMHg0YmI2MWQoMHhlYildPSEweDAsdGhpc1tfMHg0YmI2MWQoMHgxMzcpXT0hMHgwLHRoaXNbXzB4NGJiNjFkKDB4MTRjKV09ITB4MSx0aGlzW18weDRiYjYxZCgweGQxKV09ITB4MSx0aGlzWydfaW5OZXh0RWRnZSddPV8weDQ3ZjM4Y1tfMHg0YmI2MWQoMHgxMzgpXT8uW18weDRiYjYxZCgweGVmKV0/LltfMHg0YmI2MWQoMHgxMmQpXT09PSdlZGdlJyx0aGlzW18weDRiYjYxZCgweDE1NCldPSF0aGlzW18weDRiYjYxZCgweDE2NSldW18weDRiYjYxZCgweDEzOCldPy5bXzB4NGJiNjFkKDB4MTFkKV0/LltfMHg0YmI2MWQoMHgxYWQpXSYmIXRoaXNbXzB4NGJiNjFkKDB4MTE4KV0sdGhpc1snX1dlYlNvY2tldENsYXNzJ109bnVsbCx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPTB4MCx0aGlzW18weDRiYjYxZCgweDE0NSldPTB4MTQsdGhpc1tfMHg0YmI2MWQoMHgxNzQpXT0naHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsdGhpc1tfMHg0YmI2MWQoMHgxOTMpXT0odGhpc1tfMHg0YmI2MWQoMHgxNTQpXT9fMHg0YmI2MWQoMHgxNGEpOidDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcpK3RoaXNbXzB4NGJiNjFkKDB4MTc0KV07fWFzeW5jW18weDMwZDQ2YygweDEzMSldKCl7dmFyIF8weDFlOTBmMT1fMHgzMGQ0NmM7aWYodGhpc1tfMHgxZTkwZjEoMHgxNWYpXSlyZXR1cm4gdGhpc1tfMHgxZTkwZjEoMHgxNWYpXTtsZXQgXzB4NGFlNzdjO2lmKHRoaXNbXzB4MWU5MGYxKDB4MTU0KV18fHRoaXNbJ19pbk5leHRFZGdlJ10pXzB4NGFlNzdjPXRoaXNbXzB4MWU5MGYxKDB4MTY1KV1bJ1dlYlNvY2tldCddO2Vsc2V7aWYodGhpc1snZ2xvYmFsJ11bXzB4MWU5MGYxKDB4MTM4KV0/LlsnX1dlYlNvY2tldCddKV8weDRhZTc3Yz10aGlzWydnbG9iYWwnXVtfMHgxZTkwZjEoMHgxMzgpXT8uWydfV2ViU29ja2V0J107ZWxzZSB0cnl7bGV0IF8weDRjZWI5NT1hd2FpdCBpbXBvcnQoJ3BhdGgnKTtfMHg0YWU3N2M9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KCd1cmwnKSlbJ3BhdGhUb0ZpbGVVUkwnXShfMHg0Y2ViOTVbXzB4MWU5MGYxKDB4MTMyKV0odGhpc1tfMHgxZTkwZjEoMHhmNildLCd3cy9pbmRleC5qcycpKVsndG9TdHJpbmcnXSgpKSlbXzB4MWU5MGYxKDB4MWI1KV07fWNhdGNoe3RyeXtfMHg0YWU3N2M9cmVxdWlyZShyZXF1aXJlKF8weDFlOTBmMSgweDE2YSkpW18weDFlOTBmMSgweDEzMildKHRoaXNbJ25vZGVNb2R1bGVzJ10sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MWU5MGYxKDB4MWEzKSk7fX19cmV0dXJuIHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddPV8weDRhZTc3YyxfMHg0YWU3N2M7fVtfMHgzMGQ0NmMoMHgxYTEpXSgpe3ZhciBfMHg0OTA4OWE9XzB4MzBkNDZjO3RoaXNbXzB4NDkwODlhKDB4ZDEpXXx8dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPj10aGlzW18weDQ5MDg5YSgweDE0NSldfHwodGhpc1tfMHg0OTA4OWEoMHgxMzcpXT0hMHgxLHRoaXNbXzB4NDkwODlhKDB4ZDEpXT0hMHgwLHRoaXNbXzB4NDkwODlhKDB4MTFiKV0rKyx0aGlzW18weDQ5MDg5YSgweGQ4KV09bmV3IFByb21pc2UoKF8weDM0ZWFmYyxfMHgxNDQzMjQpPT57dmFyIF8weDg3NGZhND1fMHg0OTA4OWE7dGhpc1tfMHg4NzRmYTQoMHgxMzEpXSgpW18weDg3NGZhNCgweDEyOCldKF8weDRiYWY1OD0+e3ZhciBfMHg0MWRkYWM9XzB4ODc0ZmE0O2xldCBfMHgyNTc0M2I9bmV3IF8weDRiYWY1OChfMHg0MWRkYWMoMHgxODkpKyghdGhpc1snX2luQnJvd3NlciddJiZ0aGlzW18weDQxZGRhYygweDEzYildP18weDQxZGRhYygweGRjKTp0aGlzW18weDQxZGRhYygweGQ2KV0pKyc6Jyt0aGlzW18weDQxZGRhYygweDE1ZCldKTtfMHgyNTc0M2JbXzB4NDFkZGFjKDB4ZDUpXT0oKT0+e3ZhciBfMHgyYjRmNjU9XzB4NDFkZGFjO3RoaXNbXzB4MmI0ZjY1KDB4ZWIpXT0hMHgxLHRoaXNbXzB4MmI0ZjY1KDB4MTcyKV0oXzB4MjU3NDNiKSx0aGlzW18weDJiNGY2NSgweGY1KV0oKSxfMHgxNDQzMjQobmV3IEVycm9yKCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJykpO30sXzB4MjU3NDNiW18weDQxZGRhYygweDE5ZildPSgpPT57dmFyIF8weDQyMDgyYT1fMHg0MWRkYWM7dGhpc1tfMHg0MjA4MmEoMHgxNTQpXXx8XzB4MjU3NDNiW18weDQyMDgyYSgweDE4NildJiZfMHgyNTc0M2JbXzB4NDIwODJhKDB4MTg2KV1bJ3VucmVmJ10mJl8weDI1NzQzYltfMHg0MjA4MmEoMHgxODYpXVtfMHg0MjA4MmEoMHgxOTApXSgpLF8weDM0ZWFmYyhfMHgyNTc0M2IpO30sXzB4MjU3NDNiW18weDQxZGRhYygweGRlKV09KCk9Pnt2YXIgXzB4MTMyOTcyPV8weDQxZGRhYzt0aGlzW18weDEzMjk3MigweDEzNyldPSEweDAsdGhpc1tfMHgxMzI5NzIoMHgxNzIpXShfMHgyNTc0M2IpLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9LF8weDI1NzQzYltfMHg0MWRkYWMoMHgxYWIpXT1fMHgxYWZkMTE9Pnt2YXIgXzB4MThkNmI1PV8weDQxZGRhYzt0cnl7XzB4MWFmZDExJiZfMHgxYWZkMTFbXzB4MThkNmI1KDB4MTRmKV0mJnRoaXNbXzB4MThkNmI1KDB4MTU0KV0mJkpTT05bJ3BhcnNlJ10oXzB4MWFmZDExWydkYXRhJ10pW18weDE4ZDZiNSgweDExNildPT09XzB4MThkNmI1KDB4MWEyKSYmdGhpc1snZ2xvYmFsJ11bXzB4MThkNmI1KDB4MTExKV1bXzB4MThkNmI1KDB4MWEyKV0oKTt9Y2F0Y2h7fX07fSlbXzB4ODc0ZmE0KDB4MTI4KV0oXzB4MWIyNGQyPT4odGhpc1tfMHg4NzRmYTQoMHgxNGMpXT0hMHgwLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDEsdGhpc1tfMHg4NzRmYTQoMHhlYildPSEweDAsdGhpc1tfMHg4NzRmYTQoMHgxMWIpXT0weDAsXzB4MWIyNGQyKSlbXzB4ODc0ZmE0KDB4MTQ3KV0oXzB4MzdmNWEwPT4odGhpc1tfMHg4NzRmYTQoMHgxNGMpXT0hMHgxLHRoaXNbXzB4ODc0ZmE0KDB4ZDEpXT0hMHgxLGNvbnNvbGVbXzB4ODc0ZmE0KDB4MTAyKV0oXzB4ODc0ZmE0KDB4MTkyKSt0aGlzW18weDg3NGZhNCgweDE3NCldKSxfMHgxNDQzMjQobmV3IEVycm9yKCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnKyhfMHgzN2Y1YTAmJl8weDM3ZjVhMFtfMHg4NzRmYTQoMHhlNildKSkpKSk7fSkpO31bJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4NDlhNDYxKXt2YXIgXzB4NGY4ODY5PV8weDMwZDQ2Yzt0aGlzW18weDRmODg2OSgweDE0YyldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxO3RyeXtfMHg0OWE0NjFbXzB4NGY4ODY5KDB4ZGUpXT1udWxsLF8weDQ5YTQ2MVsnb25lcnJvciddPW51bGwsXzB4NDlhNDYxW18weDRmODg2OSgweDE5ZildPW51bGw7fWNhdGNoe310cnl7XzB4NDlhNDYxW18weDRmODg2OSgweGQwKV08MHgyJiZfMHg0OWE0NjFbXzB4NGY4ODY5KDB4MTk3KV0oKTt9Y2F0Y2h7fX1bJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKXt2YXIgXzB4MTU5NzliPV8weDMwZDQ2YztjbGVhclRpbWVvdXQodGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXSksISh0aGlzW18weDE1OTc5YigweDExYildPj10aGlzW18weDE1OTc5YigweDE0NSldKSYmKHRoaXNbXzB4MTU5NzliKDB4MTFlKV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHg1NTdiNjg9XzB4MTU5NzliO3RoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1snX2Nvbm5lY3RpbmcnXXx8KHRoaXNbJ19jb25uZWN0VG9Ib3N0Tm93J10oKSx0aGlzW18weDU1N2I2OCgweGQ4KV0/LltfMHg1NTdiNjgoMHgxNDcpXSgoKT0+dGhpc1tfMHg1NTdiNjgoMHhmNSldKCkpKTt9LDB4MWY0KSx0aGlzW18weDE1OTc5YigweDExZSldW18weDE1OTc5YigweDE5MCldJiZ0aGlzWydfcmVjb25uZWN0VGltZW91dCddW18weDE1OTc5YigweDE5MCldKCkpO31hc3luY1tfMHgzMGQ0NmMoMHhkYSldKF8weDM5ZTc4Mil7dmFyIF8weDQ4NjBmOT1fMHgzMGQ0NmM7dHJ5e2lmKCF0aGlzWydfYWxsb3dlZFRvU2VuZCddKXJldHVybjt0aGlzW18weDQ4NjBmOSgweDEzNyldJiZ0aGlzW18weDQ4NjBmOSgweDFhMSldKCksKGF3YWl0IHRoaXNbJ193cyddKVtfMHg0ODYwZjkoMHhkYSldKEpTT05bJ3N0cmluZ2lmeSddKF8weDM5ZTc4MikpO31jYXRjaChfMHgxZTE3ZTApe2NvbnNvbGVbXzB4NDg2MGY5KDB4MTAyKV0odGhpc1tfMHg0ODYwZjkoMHgxOTMpXSsnOlxcXFx4MjAnKyhfMHgxZTE3ZTAmJl8weDFlMTdlMFtfMHg0ODYwZjkoMHhlNildKSksdGhpc1tfMHg0ODYwZjkoMHhlYildPSEweDEsdGhpc1tfMHg0ODYwZjkoMHhmNSldKCk7fX19O2Z1bmN0aW9uIGIoXzB4NDZkMGIxLF8weDRjMThlYixfMHgzMjFmZjcsXzB4Njc2OTExLF8weDRjODI5OSxfMHg1NDI1NWEpe3ZhciBfMHgzOTM3ZTc9XzB4MzBkNDZjO2xldCBfMHg1MGUwZjk9XzB4MzIxZmY3W18weDM5MzdlNygweDEzZCldKCcsJylbJ21hcCddKF8weDQxZDg3PT57dmFyIF8weDUxNzlhMj1fMHgzOTM3ZTc7dHJ5e18weDQ2ZDBiMVsnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddfHwoKF8weDRjODI5OT09PV8weDUxNzlhMigweDE5ZSl8fF8weDRjODI5OT09PV8weDUxNzlhMigweDEyMCl8fF8weDRjODI5OT09PV8weDUxNzlhMigweDE1MikpJiYoXzB4NGM4Mjk5Kz0hXzB4NDZkMGIxW18weDUxNzlhMigweDEzOCldPy5bXzB4NTE3OWEyKDB4MTFkKV0/LltfMHg1MTc5YTIoMHgxYWQpXSYmXzB4NDZkMGIxW18weDUxNzlhMigweDEzOCldPy5bJ2VudiddPy5bXzB4NTE3OWEyKDB4MTJkKV0hPT0nZWRnZSc/XzB4NTE3OWEyKDB4MWIxKTpfMHg1MTc5YTIoMHgxNWMpKSxfMHg0NmQwYjFbJ19jb25zb2xlX25pbmphX3Nlc3Npb24nXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4NGM4Mjk5fSk7bGV0IF8weDdhYWJiZj1uZXcgWChfMHg0NmQwYjEsXzB4NGMxOGViLF8weDQxZDg3LF8weDY3NjkxMSxfMHg1NDI1NWEpO3JldHVybiBfMHg3YWFiYmZbJ3NlbmQnXVtfMHg1MTc5YTIoMHhjZildKF8weDdhYWJiZik7fWNhdGNoKF8weDFjYjA2Zil7cmV0dXJuIGNvbnNvbGVbXzB4NTE3OWEyKDB4MTAyKV0oJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JyxfMHgxY2IwNmYmJl8weDFjYjA2ZlsnbWVzc2FnZSddKSwoKT0+e307fX0pO3JldHVybiBfMHgyNzdlMDQ9Pl8weDUwZTBmOVtfMHgzOTM3ZTcoMHgxYWMpXShfMHhhNDJmYj0+XzB4YTQyZmIoXzB4Mjc3ZTA0KSk7fWZ1bmN0aW9uIFcoXzB4MWVjNWMyKXt2YXIgXzB4M2YwNDk1PV8weDMwZDQ2YztsZXQgXzB4MTE0MjdmPWZ1bmN0aW9uKF8weDNkNTU4MyxfMHhmNTBhNyl7cmV0dXJuIF8weGY1MGE3LV8weDNkNTU4Mzt9LF8weDI1NTE1ZTtpZihfMHgxZWM1YzJbXzB4M2YwNDk1KDB4Y2UpXSlfMHgyNTUxNWU9ZnVuY3Rpb24oKXt2YXIgXzB4Mzg0MDU4PV8weDNmMDQ5NTtyZXR1cm4gXzB4MWVjNWMyW18weDM4NDA1OCgweGNlKV1bJ25vdyddKCk7fTtlbHNle2lmKF8weDFlYzVjMltfMHgzZjA0OTUoMHgxMzgpXSYmXzB4MWVjNWMyW18weDNmMDQ5NSgweDEzOCldW18weDNmMDQ5NSgweDE1MCldJiZfMHgxZWM1YzJbXzB4M2YwNDk1KDB4MTM4KV0/LltfMHgzZjA0OTUoMHhlZildPy5bXzB4M2YwNDk1KDB4MTJkKV0hPT1fMHgzZjA0OTUoMHgxMzMpKV8weDI1NTE1ZT1mdW5jdGlvbigpe3ZhciBfMHg0YjlhOGM9XzB4M2YwNDk1O3JldHVybiBfMHgxZWM1YzJbXzB4NGI5YThjKDB4MTM4KV1bJ2hydGltZSddKCk7fSxfMHgxMTQyN2Y9ZnVuY3Rpb24oXzB4MTM0MGYyLF8weDQ1ZTkwMCl7cmV0dXJuIDB4M2U4KihfMHg0NWU5MDBbMHgwXS1fMHgxMzQwZjJbMHgwXSkrKF8weDQ1ZTkwMFsweDFdLV8weDEzNDBmMlsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHg0YTE5Yzh9PXJlcXVpcmUoXzB4M2YwNDk1KDB4MTI0KSk7XzB4MjU1MTVlPWZ1bmN0aW9uKCl7dmFyIF8weDQ5NTU3Mj1fMHgzZjA0OTU7cmV0dXJuIF8weDRhMTljOFtfMHg0OTU1NzIoMHgxNDkpXSgpO307fWNhdGNoe18weDI1NTE1ZT1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDExNDI3ZiwndGltZVN0YW1wJzpfMHgyNTUxNWUsJ25vdyc6KCk9PkRhdGVbXzB4M2YwNDk1KDB4MTQ5KV0oKX07fWZ1bmN0aW9uIEooXzB4MmM5OWZkLF8weDEyOThmOSxfMHg3YTQ0NTApe3ZhciBfMHgyYjY1NjA9XzB4MzBkNDZjO2lmKF8weDJjOTlmZFtfMHgyYjY1NjAoMHgxOGMpXSE9PXZvaWQgMHgwKXJldHVybiBfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MThjKV07bGV0IF8weDE3ZGUyOD1fMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MTM4KV0/LlsndmVyc2lvbnMnXT8uW18weDJiNjU2MCgweDFhZCldfHxfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MTM4KV0/LltfMHgyYjY1NjAoMHhlZildPy5bXzB4MmI2NTYwKDB4MTJkKV09PT0nZWRnZSc7cmV0dXJuIF8weDE3ZGUyOCYmXzB4N2E0NDUwPT09XzB4MmI2NTYwKDB4MTVhKT9fMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MThjKV09ITB4MTpfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MThjKV09XzB4MTdkZTI4fHwhXzB4MTI5OGY5fHxfMHgyYzk5ZmRbJ2xvY2F0aW9uJ10/LlsnaG9zdG5hbWUnXSYmXzB4MTI5OGY5W18weDJiNjU2MCgweDFiMyldKF8weDJjOTlmZFtfMHgyYjY1NjAoMHgxMTEpXVtfMHgyYjY1NjAoMHgxMjIpXSksXzB4MmM5OWZkW18weDJiNjU2MCgweDE4YyldO31mdW5jdGlvbiBZKF8weDMxOTc1MSxfMHg1ZDI2N2EsXzB4MjQwOGJhLF8weDU2MzUwNCl7dmFyIF8weDQyNDhkNj1fMHgzMGQ0NmM7XzB4MzE5NzUxPV8weDMxOTc1MSxfMHg1ZDI2N2E9XzB4NWQyNjdhLF8weDI0MDhiYT1fMHgyNDA4YmEsXzB4NTYzNTA0PV8weDU2MzUwNDtsZXQgXzB4NWM2YmE0PVcoXzB4MzE5NzUxKSxfMHg1ZGVhZDU9XzB4NWM2YmE0W18weDQyNDhkNigweGYwKV0sXzB4Mjk5ZGEzPV8weDVjNmJhNFsndGltZVN0YW1wJ107Y2xhc3MgXzB4MzE4N2E3e2NvbnN0cnVjdG9yKCl7dmFyIF8weDU0YzU0Yj1fMHg0MjQ4ZDY7dGhpc1tfMHg1NGM1NGIoMHgxNzEpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbXzB4NTRjNTRiKDB4ZDIpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbJ19xdW90ZWRSZWdFeHAnXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDU0YzU0YigweGU1KV09XzB4MzE5NzUxW18weDU0YzU0YigweDE5OCldLHRoaXNbXzB4NTRjNTRiKDB4ZDcpXT1fMHgzMTk3NTFbXzB4NTRjNTRiKDB4MTY4KV0sdGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddPU9iamVjdFtfMHg1NGM1NGIoMHgxNmUpXSx0aGlzW18weDU0YzU0YigweDEyYyldPU9iamVjdFtfMHg1NGM1NGIoMHgxNTgpXSx0aGlzW18weDU0YzU0YigweDE3MCldPV8weDMxOTc1MVtfMHg1NGM1NGIoMHgxNjkpXSx0aGlzW18weDU0YzU0YigweDFiMildPVJlZ0V4cFsncHJvdG90eXBlJ11bXzB4NTRjNTRiKDB4MTRkKV0sdGhpc1tfMHg1NGM1NGIoMHgxMWYpXT1EYXRlWydwcm90b3R5cGUnXVtfMHg1NGM1NGIoMHgxNGQpXTt9W18weDQyNDhkNigweDFiNildKF8weDQzYmZjNyxfMHgyNWQ0NTEsXzB4MWU3MWM1LF8weDUwOGEwZil7dmFyIF8weDEzNjY5Mj1fMHg0MjQ4ZDYsXzB4MjJmN2I4PXRoaXMsXzB4MjdhNDczPV8weDFlNzFjNVsnYXV0b0V4cGFuZCddO2Z1bmN0aW9uIF8weDQxMmJmZShfMHgxNTYxZjcsXzB4MmEwOTg3LF8weDU4ZjEzMCl7dmFyIF8weDIxYzkxZD1fMHgzOTRiO18weDJhMDk4N1tfMHgyMWM5MWQoMHgxOTEpXT1fMHgyMWM5MWQoMHgxMTMpLF8weDJhMDk4N1tfMHgyMWM5MWQoMHgxMzkpXT1fMHgxNTYxZjdbXzB4MjFjOTFkKDB4ZTYpXSxfMHgxYzM2YjA9XzB4NThmMTMwWydub2RlJ11bXzB4MjFjOTFkKDB4ZGQpXSxfMHg1OGYxMzBbXzB4MjFjOTFkKDB4MWFkKV1bXzB4MjFjOTFkKDB4ZGQpXT1fMHgyYTA5ODcsXzB4MjJmN2I4W18weDIxYzkxZCgweDE0MCldKF8weDJhMDk4NyxfMHg1OGYxMzApO310cnl7XzB4MWU3MWM1W18weDEzNjY5MigweDEwNyldKyssXzB4MWU3MWM1WydhdXRvRXhwYW5kJ10mJl8weDFlNzFjNVtfMHgxMzY2OTIoMHhlOCldW18weDEzNjY5MigweDEzNCldKF8weDI1ZDQ1MSk7dmFyIF8weDMxNTc0MyxfMHg1NDFhYTgsXzB4M2NjZWQ5LF8weDJhMzRhMSxfMHgyMGI0ZjI9W10sXzB4NGRhNjNiPVtdLF8weDU1Njk3OSxfMHgyZDJkNmQ9dGhpc1tfMHgxMzY2OTIoMHgxMzYpXShfMHgyNWQ0NTEpLF8weGQ4MzJjNT1fMHgyZDJkNmQ9PT0nYXJyYXknLF8weDI2OGM0MD0hMHgxLF8weDEzMGYzZT1fMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHhlYSksXzB4MzY5YjBlPXRoaXNbXzB4MTM2NjkyKDB4MTE1KV0oXzB4MmQyZDZkKSxfMHg0OTg0MTg9dGhpc1snX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnXShfMHgyZDJkNmQpLF8weDM0MGY4Mz1fMHgzNjliMGV8fF8weDQ5ODQxOCxfMHgyNDkzYmU9e30sXzB4MzZmM2NjPTB4MCxfMHgzYTJmZGE9ITB4MSxfMHgxYzM2YjAsXzB4MzQ4YmYxPS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTI5KV0pe2lmKF8weGQ4MzJjNSl7aWYoXzB4NTQxYWE4PV8weDI1ZDQ1MVtfMHgxMzY2OTIoMHgxNWUpXSxfMHg1NDFhYTg+XzB4MWU3MWM1W18weDEzNjY5MigweDE2MildKXtmb3IoXzB4M2NjZWQ5PTB4MCxfMHgyYTM0YTE9XzB4MWU3MWM1WydlbGVtZW50cyddLF8weDMxNTc0Mz1fMHgzY2NlZDk7XzB4MzE1NzQzPF8weDJhMzRhMTtfMHgzMTU3NDMrKylfMHg0ZGE2M2JbXzB4MTM2NjkyKDB4MTM0KV0oXzB4MjJmN2I4W18weDEzNjY5MigweGY3KV0oXzB4MjBiNGYyLF8weDI1ZDQ1MSxfMHgyZDJkNmQsXzB4MzE1NzQzLF8weDFlNzFjNSkpO18weDQzYmZjN1tfMHgxMzY2OTIoMHgxNjYpXT0hMHgwO31lbHNle2ZvcihfMHgzY2NlZDk9MHgwLF8weDJhMzRhMT1fMHg1NDFhYTgsXzB4MzE1NzQzPV8weDNjY2VkOTtfMHgzMTU3NDM8XzB4MmEzNGExO18weDMxNTc0MysrKV8weDRkYTYzYltfMHgxMzY2OTIoMHgxMzQpXShfMHgyMmY3YjhbXzB4MTM2NjkyKDB4ZjcpXShfMHgyMGI0ZjIsXzB4MjVkNDUxLF8weDJkMmQ2ZCxfMHgzMTU3NDMsXzB4MWU3MWM1KSk7fV8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNzUpXSs9XzB4NGRhNjNiWydsZW5ndGgnXTt9aWYoIShfMHgyZDJkNmQ9PT0nbnVsbCd8fF8weDJkMmQ2ZD09PV8weDEzNjY5MigweDE5OCkpJiYhXzB4MzY5YjBlJiZfMHgyZDJkNmQhPT1fMHgxMzY2OTIoMHgxMDEpJiZfMHgyZDJkNmQhPT1fMHgxMzY2OTIoMHgxYWYpJiZfMHgyZDJkNmQhPT0nYmlnaW50Jyl7dmFyIF8weDJjYzdjMz1fMHg1MDhhMGZbXzB4MTM2NjkyKDB4MTlkKV18fF8weDFlNzFjNVsncHJvcHMnXTtpZih0aGlzW18weDEzNjY5MigweDE4NCldKF8weDI1ZDQ1MSk/KF8weDMxNTc0Mz0weDAsXzB4MjVkNDUxW18weDEzNjY5MigweDFhYyldKGZ1bmN0aW9uKF8weDViNTExMCl7dmFyIF8weDU4YzNjYj1fMHgxMzY2OTI7aWYoXzB4MzZmM2NjKyssXzB4MWU3MWM1W18weDU4YzNjYigweDE3NSldKyssXzB4MzZmM2NjPl8weDJjYzdjMyl7XzB4M2EyZmRhPSEweDA7cmV0dXJuO31pZighXzB4MWU3MWM1W18weDU4YzNjYigweDE1MyldJiZfMHgxZTcxYzVbXzB4NThjM2NiKDB4MTgyKV0mJl8weDFlNzFjNVtfMHg1OGMzY2IoMHgxNzUpXT5fMHgxZTcxYzVbXzB4NThjM2NiKDB4ZTEpXSl7XzB4M2EyZmRhPSEweDA7cmV0dXJuO31fMHg0ZGE2M2JbXzB4NThjM2NiKDB4MTM0KV0oXzB4MjJmN2I4W18weDU4YzNjYigweGY3KV0oXzB4MjBiNGYyLF8weDI1ZDQ1MSxfMHg1OGMzY2IoMHgxNmMpLF8weDMxNTc0MysrLF8weDFlNzFjNSxmdW5jdGlvbihfMHhmY2I1YzUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHhmY2I1YzU7fTt9KF8weDViNTExMCkpKTt9KSk6dGhpc1tfMHgxMzY2OTIoMHgxNDMpXShfMHgyNWQ0NTEpJiZfMHgyNWQ0NTFbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHgyMDU2ZjUsXzB4MzEzMDEwKXt2YXIgXzB4NTVhN2ZkPV8weDEzNjY5MjtpZihfMHgzNmYzY2MrKyxfMHgxZTcxYzVbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgzNmYzY2M+XzB4MmNjN2MzKXtfMHgzYTJmZGE9ITB4MDtyZXR1cm47fWlmKCFfMHgxZTcxYzVbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXSYmXzB4MWU3MWM1WydhdXRvRXhwYW5kJ10mJl8weDFlNzFjNVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgxZTcxYzVbXzB4NTVhN2ZkKDB4ZTEpXSl7XzB4M2EyZmRhPSEweDA7cmV0dXJuO312YXIgXzB4MjdiNzU1PV8weDMxMzAxMFsndG9TdHJpbmcnXSgpO18weDI3Yjc1NVsnbGVuZ3RoJ10+MHg2NCYmKF8weDI3Yjc1NT1fMHgyN2I3NTVbJ3NsaWNlJ10oMHgwLDB4NjQpKycuLi4nKSxfMHg0ZGE2M2JbXzB4NTVhN2ZkKDB4MTM0KV0oXzB4MjJmN2I4W18weDU1YTdmZCgweGY3KV0oXzB4MjBiNGYyLF8weDI1ZDQ1MSxfMHg1NWE3ZmQoMHgxMGQpLF8weDI3Yjc1NSxfMHgxZTcxYzUsZnVuY3Rpb24oXzB4NThkZGU5KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4NThkZGU5O307fShfMHgyMDU2ZjUpKSk7fSksIV8weDI2OGM0MCl7dHJ5e2ZvcihfMHg1NTY5NzkgaW4gXzB4MjVkNDUxKWlmKCEoXzB4ZDgzMmM1JiZfMHgzNDhiZjFbXzB4MTM2NjkyKDB4ZTcpXShfMHg1NTY5NzkpKSYmIXRoaXNbXzB4MTM2NjkyKDB4ZjgpXShfMHgyNWQ0NTEsXzB4NTU2OTc5LF8weDFlNzFjNSkpe2lmKF8weDM2ZjNjYysrLF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNzUpXSsrLF8weDM2ZjNjYz5fMHgyY2M3YzMpe18weDNhMmZkYT0hMHgwO2JyZWFrO31pZighXzB4MWU3MWM1W18weDEzNjY5MigweDE1MyldJiZfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTgyKV0mJl8weDFlNzFjNVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgxZTcxYzVbXzB4MTM2NjkyKDB4ZTEpXSl7XzB4M2EyZmRhPSEweDA7YnJlYWs7fV8weDRkYTYzYltfMHgxMzY2OTIoMHgxMzQpXShfMHgyMmY3YjhbXzB4MTM2NjkyKDB4MTA4KV0oXzB4MjBiNGYyLF8weDI0OTNiZSxfMHgyNWQ0NTEsXzB4MmQyZDZkLF8weDU1Njk3OSxfMHgxZTcxYzUpKTt9fWNhdGNoe31pZihfMHgyNDkzYmVbXzB4MTM2NjkyKDB4MTNhKV09ITB4MCxfMHgxMzBmM2UmJihfMHgyNDkzYmVbXzB4MTM2NjkyKDB4MTZmKV09ITB4MCksIV8weDNhMmZkYSl7dmFyIF8weDM3OWFkOD1bXVtfMHgxMzY2OTIoMHhkYildKHRoaXNbXzB4MTM2NjkyKDB4MTJjKV0oXzB4MjVkNDUxKSlbXzB4MTM2NjkyKDB4ZGIpXSh0aGlzW18weDEzNjY5MigweDE0ZSldKF8weDI1ZDQ1MSkpO2ZvcihfMHgzMTU3NDM9MHgwLF8weDU0MWFhOD1fMHgzNzlhZDhbXzB4MTM2NjkyKDB4MTVlKV07XzB4MzE1NzQzPF8weDU0MWFhODtfMHgzMTU3NDMrKylpZihfMHg1NTY5Nzk9XzB4Mzc5YWQ4W18weDMxNTc0M10sIShfMHhkODMyYzUmJl8weDM0OGJmMVtfMHgxMzY2OTIoMHhlNyldKF8weDU1Njk3OVtfMHgxMzY2OTIoMHgxNGQpXSgpKSkmJiF0aGlzW18weDEzNjY5MigweGY4KV0oXzB4MjVkNDUxLF8weDU1Njk3OSxfMHgxZTcxYzUpJiYhXzB4MjQ5M2JlW18weDEzNjY5MigweDEyZSkrXzB4NTU2OTc5W18weDEzNjY5MigweDE0ZCldKCldKXtpZihfMHgzNmYzY2MrKyxfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTc1KV0rKyxfMHgzNmYzY2M+XzB4MmNjN2MzKXtfMHgzYTJmZGE9ITB4MDticmVhazt9aWYoIV8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNTMpXSYmXzB4MWU3MWM1W18weDEzNjY5MigweDE4MildJiZfMHgxZTcxYzVbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4MWU3MWM1W18weDEzNjY5MigweGUxKV0pe18weDNhMmZkYT0hMHgwO2JyZWFrO31fMHg0ZGE2M2JbJ3B1c2gnXShfMHgyMmY3YjhbXzB4MTM2NjkyKDB4MTA4KV0oXzB4MjBiNGYyLF8weDI0OTNiZSxfMHgyNWQ0NTEsXzB4MmQyZDZkLF8weDU1Njk3OSxfMHgxZTcxYzUpKTt9fX19fWlmKF8weDQzYmZjN1tfMHgxMzY2OTIoMHgxOTEpXT1fMHgyZDJkNmQsXzB4MzQwZjgzPyhfMHg0M2JmYzdbJ3ZhbHVlJ109XzB4MjVkNDUxWyd2YWx1ZU9mJ10oKSx0aGlzW18weDEzNjY5MigweGUzKV0oXzB4MmQyZDZkLF8weDQzYmZjNyxfMHgxZTcxYzUsXzB4NTA4YTBmKSk6XzB4MmQyZDZkPT09XzB4MTM2NjkyKDB4ZjMpP18weDQzYmZjN1tfMHgxMzY2OTIoMHgxN2YpXT10aGlzW18weDEzNjY5MigweDExZildW18weDEzNjY5MigweGZlKV0oXzB4MjVkNDUxKTpfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHgxOGIpP18weDQzYmZjN1tfMHgxMzY2OTIoMHgxN2YpXT1fMHgyNWQ0NTFbJ3RvU3RyaW5nJ10oKTpfMHgyZDJkNmQ9PT0nUmVnRXhwJz9fMHg0M2JmYzdbXzB4MTM2NjkyKDB4MTdmKV09dGhpc1tfMHgxMzY2OTIoMHgxYjIpXVsnY2FsbCddKF8weDI1ZDQ1MSk6XzB4MmQyZDZkPT09XzB4MTM2NjkyKDB4MTc2KSYmdGhpc1tfMHgxMzY2OTIoMHgxNzApXT9fMHg0M2JmYzdbXzB4MTM2NjkyKDB4MTdmKV09dGhpc1tfMHgxMzY2OTIoMHgxNzApXVtfMHgxMzY2OTIoMHgxODApXVtfMHgxMzY2OTIoMHgxNGQpXVtfMHgxMzY2OTIoMHhmZSldKF8weDI1ZDQ1MSk6IV8weDFlNzFjNVtfMHgxMzY2OTIoMHgxMjkpXSYmIShfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHgxNTkpfHxfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHgxOTgpKSYmKGRlbGV0ZSBfMHg0M2JmYzdbJ3ZhbHVlJ10sXzB4NDNiZmM3W18weDEzNjY5MigweDEyNSldPSEweDApLF8weDNhMmZkYSYmKF8weDQzYmZjN1snY2FwcGVkUHJvcHMnXT0hMHgwKSxfMHgxYzM2YjA9XzB4MWU3MWM1W18weDEzNjY5MigweDFhZCldW18weDEzNjY5MigweGRkKV0sXzB4MWU3MWM1W18weDEzNjY5MigweDFhZCldW18weDEzNjY5MigweGRkKV09XzB4NDNiZmM3LHRoaXNbXzB4MTM2NjkyKDB4MTQwKV0oXzB4NDNiZmM3LF8weDFlNzFjNSksXzB4NGRhNjNiW18weDEzNjY5MigweDE1ZSldKXtmb3IoXzB4MzE1NzQzPTB4MCxfMHg1NDFhYTg9XzB4NGRhNjNiW18weDEzNjY5MigweDE1ZSldO18weDMxNTc0MzxfMHg1NDFhYTg7XzB4MzE1NzQzKyspXzB4NGRhNjNiW18weDMxNTc0M10oXzB4MzE1NzQzKTt9XzB4MjBiNGYyW18weDEzNjY5MigweDE1ZSldJiYoXzB4NDNiZmM3Wydwcm9wcyddPV8weDIwYjRmMik7fWNhdGNoKF8weGNiMmYxZil7XzB4NDEyYmZlKF8weGNiMmYxZixfMHg0M2JmYzcsXzB4MWU3MWM1KTt9cmV0dXJuIHRoaXNbXzB4MTM2NjkyKDB4ZGYpXShfMHgyNWQ0NTEsXzB4NDNiZmM3KSx0aGlzW18weDEzNjY5MigweDEwOSldKF8weDQzYmZjNyxfMHgxZTcxYzUpLF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxYWQpXVtfMHgxMzY2OTIoMHhkZCldPV8weDFjMzZiMCxfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTA3KV0tLSxfMHgxZTcxYzVbJ2F1dG9FeHBhbmQnXT1fMHgyN2E0NzMsXzB4MWU3MWM1WydhdXRvRXhwYW5kJ10mJl8weDFlNzFjNVtfMHgxMzY2OTIoMHhlOCldWydwb3AnXSgpLF8weDQzYmZjNzt9W18weDQyNDhkNigweDE0ZSldKF8weDM2ZmQ2NSl7dmFyIF8weDNhNzBiMD1fMHg0MjQ4ZDY7cmV0dXJuIE9iamVjdFtfMHgzYTcwYjAoMHgxOGUpXT9PYmplY3RbJ2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDM2ZmQ2NSk6W107fVtfMHg0MjQ4ZDYoMHgxODQpXShfMHgyZTY1M2Qpe3ZhciBfMHgzZmM5YzE9XzB4NDI0OGQ2O3JldHVybiEhKF8weDJlNjUzZCYmXzB4MzE5NzUxWydTZXQnXSYmdGhpc1tfMHgzZmM5YzEoMHgxNzcpXShfMHgyZTY1M2QpPT09XzB4M2ZjOWMxKDB4MTBjKSYmXzB4MmU2NTNkW18weDNmYzljMSgweDFhYyldKTt9W18weDQyNDhkNigweGY4KV0oXzB4NTJkNmJhLF8weDU3ZjI2ZSxfMHhmZjVhYjMpe3ZhciBfMHhkMDFmNGI9XzB4NDI0OGQ2O3JldHVybiBfMHhmZjVhYjNbXzB4ZDAxZjRiKDB4MTJiKV0/dHlwZW9mIF8weDUyZDZiYVtfMHg1N2YyNmVdPT1fMHhkMDFmNGIoMHhlYSk6ITB4MTt9W18weDQyNDhkNigweDEzNildKF8weDg5YTM1Myl7dmFyIF8weDNjMzMzYz1fMHg0MjQ4ZDYsXzB4NDVhNzkwPScnO3JldHVybiBfMHg0NWE3OTA9dHlwZW9mIF8weDg5YTM1MyxfMHg0NWE3OTA9PT1fMHgzYzMzM2MoMHgxODMpP3RoaXNbXzB4M2MzMzNjKDB4MTc3KV0oXzB4ODlhMzUzKT09PV8weDNjMzMzYygweDExNCk/XzB4NDVhNzkwPV8weDNjMzMzYygweGZiKTp0aGlzW18weDNjMzMzYygweDE3NyldKF8weDg5YTM1Myk9PT1fMHgzYzMzM2MoMHgxMjYpP18weDQ1YTc5MD1fMHgzYzMzM2MoMHhmMyk6dGhpc1tfMHgzYzMzM2MoMHgxNzcpXShfMHg4OWEzNTMpPT09XzB4M2MzMzNjKDB4MTQxKT9fMHg0NWE3OTA9XzB4M2MzMzNjKDB4MThiKTpfMHg4OWEzNTM9PT1udWxsP18weDQ1YTc5MD1fMHgzYzMzM2MoMHgxNTkpOl8weDg5YTM1M1tfMHgzYzMzM2MoMHgxYTYpXSYmKF8weDQ1YTc5MD1fMHg4OWEzNTNbXzB4M2MzMzNjKDB4MWE2KV1bXzB4M2MzMzNjKDB4MTA2KV18fF8weDQ1YTc5MCk6XzB4NDVhNzkwPT09J3VuZGVmaW5lZCcmJnRoaXNbXzB4M2MzMzNjKDB4ZDcpXSYmXzB4ODlhMzUzIGluc3RhbmNlb2YgdGhpc1tfMHgzYzMzM2MoMHhkNyldJiYoXzB4NDVhNzkwPV8weDNjMzMzYygweDE2OCkpLF8weDQ1YTc5MDt9W18weDQyNDhkNigweDE3NyldKF8weGIyOGI1KXt2YXIgXzB4MmQ2ZTgxPV8weDQyNDhkNjtyZXR1cm4gT2JqZWN0W18weDJkNmU4MSgweDE4MCldW18weDJkNmU4MSgweDE0ZCldWydjYWxsJ10oXzB4YjI4YjUpO31bJ19pc1ByaW1pdGl2ZVR5cGUnXShfMHg1NzhlZWUpe3ZhciBfMHgxNTNkYWM9XzB4NDI0OGQ2O3JldHVybiBfMHg1NzhlZWU9PT1fMHgxNTNkYWMoMHgxNmIpfHxfMHg1NzhlZWU9PT1fMHgxNTNkYWMoMHgxM2MpfHxfMHg1NzhlZWU9PT1fMHgxNTNkYWMoMHgxMzUpO31bXzB4NDI0OGQ2KDB4MTYzKV0oXzB4MTMyNTBiKXt2YXIgXzB4Mjg5ODQzPV8weDQyNDhkNjtyZXR1cm4gXzB4MTMyNTBiPT09XzB4Mjg5ODQzKDB4MTljKXx8XzB4MTMyNTBiPT09J1N0cmluZyd8fF8weDEzMjUwYj09PV8weDI4OTg0MygweDE3Yyk7fVtfMHg0MjQ4ZDYoMHhmNyldKF8weDQ1YjE5NixfMHg0MTQ1NDgsXzB4MzlkYzNlLF8weDM1NzMwZixfMHg0MTMwMjUsXzB4M2MwYWIzKXt2YXIgXzB4NWI5N2YyPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDRhNGU0Yil7dmFyIF8weDIxZjZjNz1fMHgzOTRiLF8weDEwNGM5Nz1fMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bXzB4MjFmNmM3KDB4ZGQpXSxfMHg0YzM3MDk9XzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldW18weDIxZjZjNygweDFhOCldLF8weDcwMmJlYT1fMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bJ3BhcmVudCddO18weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVtfMHgyMWY2YzcoMHgxNjApXT1fMHgxMDRjOTcsXzB4NDEzMDI1Wydub2RlJ11bJ2luZGV4J109dHlwZW9mIF8weDM1NzMwZj09XzB4MjFmNmM3KDB4MTM1KT9fMHgzNTczMGY6XzB4NGE0ZTRiLF8weDQ1YjE5NltfMHgyMWY2YzcoMHgxMzQpXShfMHg1Yjk3ZjJbXzB4MjFmNmM3KDB4MTgxKV0oXzB4NDE0NTQ4LF8weDM5ZGMzZSxfMHgzNTczMGYsXzB4NDEzMDI1LF8weDNjMGFiMykpLF8weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVtfMHgyMWY2YzcoMHgxNjApXT1fMHg3MDJiZWEsXzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldWydpbmRleCddPV8weDRjMzcwOTt9O31bXzB4NDI0OGQ2KDB4MTA4KV0oXzB4NDYwOWU1LF8weDE1Y2ZlNCxfMHgyNjQxNGYsXzB4M2Q4ZjA5LF8weDM1NjU3NSxfMHgzNTcxOTMsXzB4ODNmMzU5KXt2YXIgXzB4NGNmNTJiPV8weDQyNDhkNixfMHg0MDI3NmE9dGhpcztyZXR1cm4gXzB4MTVjZmU0WydfcF8nK18weDM1NjU3NVtfMHg0Y2Y1MmIoMHgxNGQpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDMzMjVmNyl7dmFyIF8weDJiOGQwNj1fMHg0Y2Y1MmIsXzB4MmVlZWVhPV8weDM1NzE5M1snbm9kZSddW18weDJiOGQwNigweGRkKV0sXzB4MjNjNzE4PV8weDM1NzE5M1tfMHgyYjhkMDYoMHgxYWQpXVtfMHgyYjhkMDYoMHgxYTgpXSxfMHgxNGQzYzM9XzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDE2MCldO18weDM1NzE5M1tfMHgyYjhkMDYoMHgxYWQpXVtfMHgyYjhkMDYoMHgxNjApXT1fMHgyZWVlZWEsXzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDFhOCldPV8weDMzMjVmNyxfMHg0NjA5ZTVbXzB4MmI4ZDA2KDB4MTM0KV0oXzB4NDAyNzZhW18weDJiOGQwNigweDE4MSldKF8weDI2NDE0ZixfMHgzZDhmMDksXzB4MzU2NTc1LF8weDM1NzE5MyxfMHg4M2YzNTkpKSxfMHgzNTcxOTNbJ25vZGUnXVtfMHgyYjhkMDYoMHgxNjApXT1fMHgxNGQzYzMsXzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDFhOCldPV8weDIzYzcxODt9O31bJ19wcm9wZXJ0eSddKF8weDlhYjY0ZixfMHg0ZDkwYjksXzB4MTgzNTk5LF8weGQ1OGIyYixfMHg0M2FmNDApe3ZhciBfMHgxNDcwOD1fMHg0MjQ4ZDYsXzB4NDQ2NTAwPXRoaXM7XzB4NDNhZjQwfHwoXzB4NDNhZjQwPWZ1bmN0aW9uKF8weDRiZGZiMSxfMHg0YmRjNGQpe3JldHVybiBfMHg0YmRmYjFbXzB4NGJkYzRkXTt9KTt2YXIgXzB4MTgyYzBmPV8weDE4MzU5OVtfMHgxNDcwOCgweDE0ZCldKCksXzB4NWIzZTU0PV8weGQ1OGIyYltfMHgxNDcwOCgweDEzZildfHx7fSxfMHg1Mjc3OTI9XzB4ZDU4YjJiWydkZXB0aCddLF8weDUwODMxMj1fMHhkNThiMmJbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXTt0cnl7dmFyIF8weDUyMTA1OD10aGlzW18weDE0NzA4KDB4MTQzKV0oXzB4OWFiNjRmKSxfMHg0MTIzZWE9XzB4MTgyYzBmO18weDUyMTA1OCYmXzB4NDEyM2VhWzB4MF09PT0nXFxcXHgyNycmJihfMHg0MTIzZWE9XzB4NDEyM2VhW18weDE0NzA4KDB4MTEyKV0oMHgxLF8weDQxMjNlYVsnbGVuZ3RoJ10tMHgyKSk7dmFyIF8weDI2ZGU5YT1fMHhkNThiMmJbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDViM2U1NFtfMHgxNDcwOCgweDEyZSkrXzB4NDEyM2VhXTtfMHgyNmRlOWEmJihfMHhkNThiMmJbXzB4MTQ3MDgoMHgxMjkpXT1fMHhkNThiMmJbJ2RlcHRoJ10rMHgxKSxfMHhkNThiMmJbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT0hIV8weDI2ZGU5YTt2YXIgXzB4NTNhNmIzPXR5cGVvZiBfMHgxODM1OTk9PV8weDE0NzA4KDB4MTc2KSxfMHgzMTc5MGI9eyduYW1lJzpfMHg1M2E2YjN8fF8weDUyMTA1OD9fMHgxODJjMGY6dGhpc1tfMHgxNDcwOCgweDE5NildKF8weDE4MmMwZil9O2lmKF8weDUzYTZiMyYmKF8weDMxNzkwYltfMHgxNDcwOCgweDE3NildPSEweDApLCEoXzB4NGQ5MGI5PT09XzB4MTQ3MDgoMHhmYil8fF8weDRkOTBiOT09PV8weDE0NzA4KDB4ZTIpKSl7dmFyIF8weDQyOGUyZj10aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10oXzB4OWFiNjRmLF8weDE4MzU5OSk7aWYoXzB4NDI4ZTJmJiYoXzB4NDI4ZTJmWydzZXQnXSYmKF8weDMxNzkwYlsnc2V0dGVyJ109ITB4MCksXzB4NDI4ZTJmW18weDE0NzA4KDB4MWE1KV0mJiFfMHgyNmRlOWEmJiFfMHhkNThiMmJbXzB4MTQ3MDgoMHgxOGQpXSkpcmV0dXJuIF8weDMxNzkwYltfMHgxNDcwOCgweDE3MyldPSEweDAsdGhpc1tfMHgxNDcwOCgweDFiNCldKF8weDMxNzkwYixfMHhkNThiMmIpLF8weDMxNzkwYjt9dmFyIF8weDU3ODZlOTt0cnl7XzB4NTc4NmU5PV8weDQzYWY0MChfMHg5YWI2NGYsXzB4MTgzNTk5KTt9Y2F0Y2goXzB4Mzk2YmE4KXtyZXR1cm4gXzB4MzE3OTBiPXsnbmFtZSc6XzB4MTgyYzBmLCd0eXBlJzondW5rbm93bicsJ2Vycm9yJzpfMHgzOTZiYThbXzB4MTQ3MDgoMHhlNildfSx0aGlzW18weDE0NzA4KDB4MWI0KV0oXzB4MzE3OTBiLF8weGQ1OGIyYiksXzB4MzE3OTBiO312YXIgXzB4NTJkZGZjPXRoaXNbJ190eXBlJ10oXzB4NTc4NmU5KSxfMHgxZjA1MWY9dGhpc1tfMHgxNDcwOCgweDExNSldKF8weDUyZGRmYyk7aWYoXzB4MzE3OTBiWyd0eXBlJ109XzB4NTJkZGZjLF8weDFmMDUxZil0aGlzWydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4MzE3OTBiLF8weGQ1OGIyYixfMHg1Nzg2ZTksZnVuY3Rpb24oKXt2YXIgXzB4MWIxNGYwPV8weDE0NzA4O18weDMxNzkwYltfMHgxYjE0ZjAoMHgxN2YpXT1fMHg1Nzg2ZTlbJ3ZhbHVlT2YnXSgpLCFfMHgyNmRlOWEmJl8weDQ0NjUwMFtfMHgxYjE0ZjAoMHhlMyldKF8weDUyZGRmYyxfMHgzMTc5MGIsXzB4ZDU4YjJiLHt9KTt9KTtlbHNle3ZhciBfMHgzNDgyMDY9XzB4ZDU4YjJiW18weDE0NzA4KDB4MTgyKV0mJl8weGQ1OGIyYlsnbGV2ZWwnXTxfMHhkNThiMmJbXzB4MTQ3MDgoMHgxNjcpXSYmXzB4ZDU4YjJiW18weDE0NzA4KDB4ZTgpXVsnaW5kZXhPZiddKF8weDU3ODZlOSk8MHgwJiZfMHg1MmRkZmMhPT1fMHgxNDcwOCgweGVhKSYmXzB4ZDU4YjJiW18weDE0NzA4KDB4MTc1KV08XzB4ZDU4YjJiW18weDE0NzA4KDB4ZTEpXTtfMHgzNDgyMDZ8fF8weGQ1OGIyYltfMHgxNDcwOCgweDEwNyldPF8weDUyNzc5Mnx8XzB4MjZkZTlhPyh0aGlzW18weDE0NzA4KDB4MWI2KV0oXzB4MzE3OTBiLF8weDU3ODZlOSxfMHhkNThiMmIsXzB4MjZkZTlhfHx7fSksdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDU3ODZlOSxfMHgzMTc5MGIpKTp0aGlzW18weDE0NzA4KDB4MWI0KV0oXzB4MzE3OTBiLF8weGQ1OGIyYixfMHg1Nzg2ZTksZnVuY3Rpb24oKXt2YXIgXzB4MjM4NWJhPV8weDE0NzA4O18weDUyZGRmYz09PV8weDIzODViYSgweDE1OSl8fF8weDUyZGRmYz09PSd1bmRlZmluZWQnfHwoZGVsZXRlIF8weDMxNzkwYltfMHgyMzg1YmEoMHgxN2YpXSxfMHgzMTc5MGJbXzB4MjM4NWJhKDB4MTI1KV09ITB4MCk7fSk7fXJldHVybiBfMHgzMTc5MGI7fWZpbmFsbHl7XzB4ZDU4YjJiWydleHByZXNzaW9uc1RvRXZhbHVhdGUnXT1fMHg1YjNlNTQsXzB4ZDU4YjJiW18weDE0NzA4KDB4MTI5KV09XzB4NTI3NzkyLF8weGQ1OGIyYltfMHgxNDcwOCgweDE1MyldPV8weDUwODMxMjt9fVtfMHg0MjQ4ZDYoMHhlMyldKF8weDMwNTc4MSxfMHgxMjEyYjMsXzB4M2JlYjI3LF8weDUyMjY4Myl7dmFyIF8weDRkMjA1Nz1fMHg0MjQ4ZDYsXzB4MmIyYTMxPV8weDUyMjY4M1snc3RyTGVuZ3RoJ118fF8weDNiZWIyN1tfMHg0ZDIwNTcoMHgxODUpXTtpZigoXzB4MzA1NzgxPT09XzB4NGQyMDU3KDB4MTNjKXx8XzB4MzA1NzgxPT09XzB4NGQyMDU3KDB4MTAxKSkmJl8weDEyMTJiM1tfMHg0ZDIwNTcoMHgxN2YpXSl7bGV0IF8weDE1ZDYzMj1fMHgxMjEyYjNbJ3ZhbHVlJ11bXzB4NGQyMDU3KDB4MTVlKV07XzB4M2JlYjI3W18weDRkMjA1NygweDEwNCldKz1fMHgxNWQ2MzIsXzB4M2JlYjI3W18weDRkMjA1NygweDEwNCldPl8weDNiZWIyN1sndG90YWxTdHJMZW5ndGgnXT8oXzB4MTIxMmIzWydjYXBwZWQnXT0nJyxkZWxldGUgXzB4MTIxMmIzWyd2YWx1ZSddKTpfMHgxNWQ2MzI+XzB4MmIyYTMxJiYoXzB4MTIxMmIzW18weDRkMjA1NygweDEyNSldPV8weDEyMTJiM1tfMHg0ZDIwNTcoMHgxN2YpXVtfMHg0ZDIwNTcoMHgxMTIpXSgweDAsXzB4MmIyYTMxKSxkZWxldGUgXzB4MTIxMmIzWyd2YWx1ZSddKTt9fVsnX2lzTWFwJ10oXzB4MmFjNTRmKXt2YXIgXzB4MTkyMWEwPV8weDQyNDhkNjtyZXR1cm4hIShfMHgyYWM1NGYmJl8weDMxOTc1MVsnTWFwJ10mJnRoaXNbXzB4MTkyMWEwKDB4MTc3KV0oXzB4MmFjNTRmKT09PV8weDE5MjFhMCgweDFhOSkmJl8weDJhYzU0ZltfMHgxOTIxYTAoMHgxYWMpXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weDUzZmZlYil7dmFyIF8weDJmOTdkNT1fMHg0MjQ4ZDY7aWYoXzB4NTNmZmViW18weDJmOTdkNSgweDEyZildKC9eXFxcXGQrJC8pKXJldHVybiBfMHg1M2ZmZWI7dmFyIF8weDJiOGY3Mjt0cnl7XzB4MmI4ZjcyPUpTT05bXzB4MmY5N2Q1KDB4MTFhKV0oJycrXzB4NTNmZmViKTt9Y2F0Y2h7XzB4MmI4ZjcyPSdcXFxceDIyJyt0aGlzW18weDJmOTdkNSgweDE3NyldKF8weDUzZmZlYikrJ1xcXFx4MjInO31yZXR1cm4gXzB4MmI4ZjcyW18weDJmOTdkNSgweDEyZildKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4MmI4ZjcyPV8weDJiOGY3Mlsnc3Vic3RyJ10oMHgxLF8weDJiOGY3MltfMHgyZjk3ZDUoMHgxNWUpXS0weDIpOl8weDJiOGY3Mj1fMHgyYjhmNzJbXzB4MmY5N2Q1KDB4MTMwKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVsncmVwbGFjZSddKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpW18weDJmOTdkNSgweDEzMCldKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHgyYjhmNzI7fVtfMHg0MjQ4ZDYoMHgxYjQpXShfMHg1YmViNmQsXzB4NGNjNmMyLF8weDU1ZGI5MixfMHg1YTc2ZjYpe3ZhciBfMHg4MTNiYzg9XzB4NDI0OGQ2O3RoaXNbXzB4ODEzYmM4KDB4MTQwKV0oXzB4NWJlYjZkLF8weDRjYzZjMiksXzB4NWE3NmY2JiZfMHg1YTc2ZjYoKSx0aGlzW18weDgxM2JjOCgweGRmKV0oXzB4NTVkYjkyLF8weDViZWI2ZCksdGhpc1tfMHg4MTNiYzgoMHgxMDkpXShfMHg1YmViNmQsXzB4NGNjNmMyKTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4M2M2OTYxLF8weDE3MmZmYSl7dmFyIF8weDE3NDQxNz1fMHg0MjQ4ZDY7dGhpc1tfMHgxNzQ0MTcoMHgxM2UpXShfMHgzYzY5NjEsXzB4MTcyZmZhKSx0aGlzW18weDE3NDQxNygweDE4OCldKF8weDNjNjk2MSxfMHgxNzJmZmEpLHRoaXNbJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnXShfMHgzYzY5NjEsXzB4MTcyZmZhKSx0aGlzW18weDE3NDQxNygweDExNyldKF8weDNjNjk2MSxfMHgxNzJmZmEpO31bXzB4NDI0OGQ2KDB4MTNlKV0oXzB4MjMyZmIxLF8weDE1NDZkYyl7fVtfMHg0MjQ4ZDYoMHgxODgpXShfMHgxYjU1Y2EsXzB4MWRjMWIwKXt9W18weDQyNDhkNigweDFhNyldKF8weDI5MGRkZCxfMHg1ZWE0MjUpe31bXzB4NDI0OGQ2KDB4ZWQpXShfMHgzYzEwMjYpe3JldHVybiBfMHgzYzEwMjY9PT10aGlzWydfdW5kZWZpbmVkJ107fVsnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4NTgxNmRlLF8weDUxYWQwZil7dmFyIF8weDRlMzIwNz1fMHg0MjQ4ZDY7dGhpc1tfMHg0ZTMyMDcoMHgxYTcpXShfMHg1ODE2ZGUsXzB4NTFhZDBmKSx0aGlzW18weDRlMzIwNygweDE5NSldKF8weDU4MTZkZSksXzB4NTFhZDBmW18weDRlMzIwNygweGU0KV0mJnRoaXNbJ19zb3J0UHJvcHMnXShfMHg1ODE2ZGUpLHRoaXNbXzB4NGUzMjA3KDB4MTFjKV0oXzB4NTgxNmRlLF8weDUxYWQwZiksdGhpc1tfMHg0ZTMyMDcoMHgxOWIpXShfMHg1ODE2ZGUsXzB4NTFhZDBmKSx0aGlzWydfY2xlYW5Ob2RlJ10oXzB4NTgxNmRlKTt9W18weDQyNDhkNigweGRmKV0oXzB4M2NjNTJjLF8weDRkMzhhNyl7dmFyIF8weDQxZTRkZD1fMHg0MjQ4ZDY7bGV0IF8weDUzYzliNzt0cnl7XzB4MzE5NzUxW18weDQxZTRkZCgweGY5KV0mJihfMHg1M2M5Yjc9XzB4MzE5NzUxW18weDQxZTRkZCgweGY5KV1bXzB4NDFlNGRkKDB4MTM5KV0sXzB4MzE5NzUxW18weDQxZTRkZCgweGY5KV1bJ2Vycm9yJ109ZnVuY3Rpb24oKXt9KSxfMHgzY2M1MmMmJnR5cGVvZiBfMHgzY2M1MmNbXzB4NDFlNGRkKDB4MTVlKV09PV8weDQxZTRkZCgweDEzNSkmJihfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTVlKV09XzB4M2NjNTJjW18weDQxZTRkZCgweDE1ZSldKTt9Y2F0Y2h7fWZpbmFsbHl7XzB4NTNjOWI3JiYoXzB4MzE5NzUxW18weDQxZTRkZCgweGY5KV1bXzB4NDFlNGRkKDB4MTM5KV09XzB4NTNjOWI3KTt9aWYoXzB4NGQzOGE3W18weDQxZTRkZCgweDE5MSldPT09XzB4NDFlNGRkKDB4MTM1KXx8XzB4NGQzOGE3W18weDQxZTRkZCgweDE5MSldPT09XzB4NDFlNGRkKDB4MTdjKSl7aWYoaXNOYU4oXzB4NGQzOGE3Wyd2YWx1ZSddKSlfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTlhKV09ITB4MCxkZWxldGUgXzB4NGQzOGE3W18weDQxZTRkZCgweDE3ZildO2Vsc2Ugc3dpdGNoKF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxN2YpXSl7Y2FzZSBOdW1iZXJbXzB4NDFlNGRkKDB4ZjEpXTpfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTk5KV09ITB4MCxkZWxldGUgXzB4NGQzOGE3Wyd2YWx1ZSddO2JyZWFrO2Nhc2UgTnVtYmVyWydORUdBVElWRV9JTkZJTklUWSddOl8weDRkMzhhN1snbmVnYXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxN2YpXTticmVhaztjYXNlIDB4MDp0aGlzWydfaXNOZWdhdGl2ZVplcm8nXShfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTdmKV0pJiYoXzB4NGQzOGE3W18weDQxZTRkZCgweDE2MSldPSEweDApO2JyZWFrO319ZWxzZSBfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTkxKV09PT1fMHg0MWU0ZGQoMHhlYSkmJnR5cGVvZiBfMHgzY2M1MmNbXzB4NDFlNGRkKDB4MTA2KV09PV8weDQxZTRkZCgweDEzYykmJl8weDNjYzUyY1tfMHg0MWU0ZGQoMHgxMDYpXSYmXzB4NGQzOGE3WyduYW1lJ10mJl8weDNjYzUyY1tfMHg0MWU0ZGQoMHgxMDYpXSE9PV8weDRkMzhhN1snbmFtZSddJiYoXzB4NGQzOGE3W18weDQxZTRkZCgweDE0NildPV8weDNjYzUyY1snbmFtZSddKTt9WydfaXNOZWdhdGl2ZVplcm8nXShfMHg1NDVkNzApe3ZhciBfMHgzZjVmNzg9XzB4NDI0OGQ2O3JldHVybiAweDEvXzB4NTQ1ZDcwPT09TnVtYmVyW18weDNmNWY3OCgweDE1NyldO31bXzB4NDI0OGQ2KDB4MTc4KV0oXzB4NDgzNDJkKXt2YXIgXzB4MTEzM2NlPV8weDQyNDhkNjshXzB4NDgzNDJkW18weDExMzNjZSgweDE5ZCldfHwhXzB4NDgzNDJkW18weDExMzNjZSgweDE5ZCldW18weDExMzNjZSgweDE1ZSldfHxfMHg0ODM0MmRbJ3R5cGUnXT09PV8weDExMzNjZSgweGZiKXx8XzB4NDgzNDJkW18weDExMzNjZSgweDE5MSldPT09J01hcCd8fF8weDQ4MzQyZFtfMHgxMTMzY2UoMHgxOTEpXT09PV8weDExMzNjZSgweDE2Yyl8fF8weDQ4MzQyZFtfMHgxMTMzY2UoMHgxOWQpXVtfMHgxMTMzY2UoMHgxN2IpXShmdW5jdGlvbihfMHgzNThmNzQsXzB4MjUxNTE5KXt2YXIgXzB4MTk3ZDk0PV8weDExMzNjZSxfMHhiYTE5NDQ9XzB4MzU4Zjc0W18weDE5N2Q5NCgweDEwNildW18weDE5N2Q5NCgweDE4ZildKCksXzB4MTM4YWZmPV8weDI1MTUxOVtfMHgxOTdkOTQoMHgxMDYpXVsndG9Mb3dlckNhc2UnXSgpO3JldHVybiBfMHhiYTE5NDQ8XzB4MTM4YWZmPy0weDE6XzB4YmExOTQ0Pl8weDEzOGFmZj8weDE6MHgwO30pO31bXzB4NDI0OGQ2KDB4MTFjKV0oXzB4MTgwMDk1LF8weDk0YTdiZSl7dmFyIF8weGIzYjQzYT1fMHg0MjQ4ZDY7aWYoIShfMHg5NGE3YmVbXzB4YjNiNDNhKDB4MTJiKV18fCFfMHgxODAwOTVbXzB4YjNiNDNhKDB4MTlkKV18fCFfMHgxODAwOTVbXzB4YjNiNDNhKDB4MTlkKV1bJ2xlbmd0aCddKSl7Zm9yKHZhciBfMHg0NjY1M2U9W10sXzB4ODBjMzM4PVtdLF8weDE0MjQxMT0weDAsXzB4MmQ2MDIxPV8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXVtfMHhiM2I0M2EoMHgxNWUpXTtfMHgxNDI0MTE8XzB4MmQ2MDIxO18weDE0MjQxMSsrKXt2YXIgXzB4NDEzMjg5PV8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXVtfMHgxNDI0MTFdO18weDQxMzI4OVtfMHhiM2I0M2EoMHgxOTEpXT09PV8weGIzYjQzYSgweGVhKT9fMHg0NjY1M2VbXzB4YjNiNDNhKDB4MTM0KV0oXzB4NDEzMjg5KTpfMHg4MGMzMzhbXzB4YjNiNDNhKDB4MTM0KV0oXzB4NDEzMjg5KTt9aWYoISghXzB4ODBjMzM4W18weGIzYjQzYSgweDE1ZSldfHxfMHg0NjY1M2VbJ2xlbmd0aCddPD0weDEpKXtfMHgxODAwOTVbXzB4YjNiNDNhKDB4MTlkKV09XzB4ODBjMzM4O3ZhciBfMHgyMjc0ZGY9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4NDY2NTNlfTt0aGlzW18weGIzYjQzYSgweDEzZSldKF8weDIyNzRkZixfMHg5NGE3YmUpLHRoaXNbXzB4YjNiNDNhKDB4MWE3KV0oXzB4MjI3NGRmLF8weDk0YTdiZSksdGhpc1tfMHhiM2I0M2EoMHgxOTUpXShfMHgyMjc0ZGYpLHRoaXNbXzB4YjNiNDNhKDB4MTE3KV0oXzB4MjI3NGRmLF8weDk0YTdiZSksXzB4MjI3NGRmWydpZCddKz0nXFxcXHgyMGYnLF8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXVtfMHhiM2I0M2EoMHgxMTkpXShfMHgyMjc0ZGYpO319fVtfMHg0MjQ4ZDYoMHgxOWIpXShfMHg0ODhlMDcsXzB4MzBkYTVmKXt9W18weDQyNDhkNigweDE5NSldKF8weDJmYjljYSl7fVtfMHg0MjQ4ZDYoMHhkNCldKF8weDQ2ZTg4ZSl7dmFyIF8weDExNjdjND1fMHg0MjQ4ZDY7cmV0dXJuIEFycmF5W18weDExNjdjNCgweGZhKV0oXzB4NDZlODhlKXx8dHlwZW9mIF8weDQ2ZTg4ZT09J29iamVjdCcmJnRoaXNbXzB4MTE2N2M0KDB4MTc3KV0oXzB4NDZlODhlKT09PV8weDExNjdjNCgweDExNCk7fVsnX3NldE5vZGVQZXJtaXNzaW9ucyddKF8weDMxNDRhOCxfMHhkOGQ1Yzcpe31bJ19jbGVhbk5vZGUnXShfMHgzNDljYjQpe3ZhciBfMHgyYTU4NzI9XzB4NDI0OGQ2O2RlbGV0ZSBfMHgzNDljYjRbXzB4MmE1ODcyKDB4MTQ4KV0sZGVsZXRlIF8weDM0OWNiNFtfMHgyYTU4NzIoMHgxOGEpXSxkZWxldGUgXzB4MzQ5Y2I0W18weDJhNTg3MigweDE1YildO31bXzB4NDI0OGQ2KDB4MTY0KV0oXzB4MTM4N2I2LF8weDU5ZGU3MCl7fX1sZXQgXzB4NTljZDZkPW5ldyBfMHgzMTg3YTcoKSxfMHgxMWU0OTI9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4YjdlM2RiPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4MmU4MjMyKF8weGNmZDI5MCxfMHgzZTk0MWYsXzB4MzI4M2MyLF8weDIzMDY1ZSxfMHgyYTdmMDEsXzB4Mzg3NzhlKXt2YXIgXzB4NDJjYTI5PV8weDQyNDhkNjtsZXQgXzB4NDAxZmY2LF8weDQ4ODVkZTt0cnl7XzB4NDg4NWRlPV8weDI5OWRhMygpLF8weDQwMWZmNj1fMHgyNDA4YmFbXzB4M2U5NDFmXSwhXzB4NDAxZmY2fHxfMHg0ODg1ZGUtXzB4NDAxZmY2Wyd0cyddPjB4MWY0JiZfMHg0MDFmZjZbXzB4NDJjYTI5KDB4MTAwKV0mJl8weDQwMWZmNltfMHg0MmNhMjkoMHgxYTQpXS9fMHg0MDFmZjZbXzB4NDJjYTI5KDB4MTAwKV08MHg2ND8oXzB4MjQwOGJhW18weDNlOTQxZl09XzB4NDAxZmY2PXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4NDg4NWRlfSxfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV09e30pOl8weDQ4ODVkZS1fMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bJ3RzJ10+MHgzMiYmXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDEwMCldJiZfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bJ3RpbWUnXS9fMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bXzB4NDJjYTI5KDB4MTAwKV08MHg2NCYmKF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXT17fSk7bGV0IF8weDM5MDVkNz1bXSxfMHg1YzNhNTk9XzB4NDAxZmY2WydyZWR1Y2VMaW1pdHMnXXx8XzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildWydyZWR1Y2VMaW1pdHMnXT9fMHhiN2UzZGI6XzB4MTFlNDkyLF8weDQwNzJkNj1fMHg5Yzg1ZDI9Pnt2YXIgXzB4NTc1NGVhPV8weDQyY2EyOTtsZXQgXzB4ZWM3NzM1PXt9O3JldHVybiBfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTlkKV09XzB4OWM4NWQyW18weDU3NTRlYSgweDE5ZCldLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxNjIpXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4MTYyKV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweDE4NSldPV8weDljODVkMltfMHg1NzU0ZWEoMHgxODUpXSxfMHhlYzc3MzVbJ3RvdGFsU3RyTGVuZ3RoJ109XzB4OWM4NWQyW18weDU3NTRlYSgweDE1NSldLF8weGVjNzczNVtfMHg1NzU0ZWEoMHhlMSldPV8weDljODVkMltfMHg1NzU0ZWEoMHhlMSldLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxNjcpXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4MTY3KV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweGU0KV09ITB4MSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTJiKV09IV8weDVkMjY3YSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTI5KV09MHgxLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxMDcpXT0weDAsXzB4ZWM3NzM1WydleHBJZCddPV8weDU3NTRlYSgweGZmKSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTc5KV09XzB4NTc1NGVhKDB4ZmQpLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxODIpXT0hMHgwLF8weGVjNzczNVtfMHg1NzU0ZWEoMHhlOCldPVtdLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxNzUpXT0weDAsXzB4ZWM3NzM1W18weDU3NTRlYSgweDE4ZCldPSEweDAsXzB4ZWM3NzM1W18weDU3NTRlYSgweDEwNCldPTB4MCxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MWFkKV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4ZWM3NzM1O307Zm9yKHZhciBfMHg0ZWRiNzg9MHgwO18weDRlZGI3ODxfMHgyYTdmMDFbXzB4NDJjYTI5KDB4MTVlKV07XzB4NGVkYjc4KyspXzB4MzkwNWQ3W18weDQyY2EyOSgweDEzNCldKF8weDU5Y2Q2ZFsnc2VyaWFsaXplJ10oeyd0aW1lTm9kZSc6XzB4Y2ZkMjkwPT09XzB4NDJjYTI5KDB4MWE0KXx8dm9pZCAweDB9LF8weDJhN2YwMVtfMHg0ZWRiNzhdLF8weDQwNzJkNihfMHg1YzNhNTkpLHt9KSk7aWYoXzB4Y2ZkMjkwPT09J3RyYWNlJyl7bGV0IF8weDM0Y2I5MT1FcnJvcltfMHg0MmNhMjkoMHgxMGIpXTt0cnl7RXJyb3JbXzB4NDJjYTI5KDB4MTBiKV09MHgxLzB4MCxfMHgzOTA1ZDdbXzB4NDJjYTI5KDB4MTM0KV0oXzB4NTljZDZkW18weDQyY2EyOSgweDFiNildKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVsnc3RhY2snXSxfMHg0MDcyZDYoXzB4NWMzYTU5KSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109XzB4MzRjYjkxO319cmV0dXJueydtZXRob2QnOidsb2cnLCd2ZXJzaW9uJzpfMHg1NjM1MDQsJ2FyZ3MnOlt7J3RzJzpfMHgzMjgzYzIsJ3Nlc3Npb24nOl8weDIzMDY1ZSwnYXJncyc6XzB4MzkwNWQ3LCdpZCc6XzB4M2U5NDFmLCdjb250ZXh0JzpfMHgzODc3OGV9XX07fWNhdGNoKF8weDQ4ZjBjZSl7cmV0dXJueydtZXRob2QnOidsb2cnLCd2ZXJzaW9uJzpfMHg1NjM1MDQsJ2FyZ3MnOlt7J3RzJzpfMHgzMjgzYzIsJ3Nlc3Npb24nOl8weDIzMDY1ZSwnYXJncyc6W3sndHlwZSc6XzB4NDJjYTI5KDB4MTEzKSwnZXJyb3InOl8weDQ4ZjBjZSYmXzB4NDhmMGNlWydtZXNzYWdlJ119XSwnaWQnOl8weDNlOTQxZiwnY29udGV4dCc6XzB4Mzg3NzhlfV19O31maW5hbGx5e3RyeXtpZihfMHg0MDFmZjYmJl8weDQ4ODVkZSl7bGV0IF8weDJmZjE4OT1fMHgyOTlkYTMoKTtfMHg0MDFmZjZbJ2NvdW50J10rKyxfMHg0MDFmZjZbXzB4NDJjYTI5KDB4MWE0KV0rPV8weDVkZWFkNShfMHg0ODg1ZGUsXzB4MmZmMTg5KSxfMHg0MDFmZjZbJ3RzJ109XzB4MmZmMTg5LF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxMDApXSsrLF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxYTQpXSs9XzB4NWRlYWQ1KF8weDQ4ODVkZSxfMHgyZmYxODkpLF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVsndHMnXT1fMHgyZmYxODksKF8weDQwMWZmNlsnY291bnQnXT4weDMyfHxfMHg0MDFmZjZbXzB4NDJjYTI5KDB4MWE0KV0+MHg2NCkmJihfMHg0MDFmZjZbXzB4NDJjYTI5KDB4MTQ0KV09ITB4MCksKF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxMDApXT4weDNlOHx8XzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDFhNCldPjB4MTJjKSYmKF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxNDQpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgyZTgyMzI7fSgoXzB4MzA4MGUwLF8weDEzYWQ4NSxfMHg0YjAxOTksXzB4MmQ0MGY2LF8weDRiN2U0NSxfMHg0ZTBlNzcsXzB4MzcwNTJiLF8weDIwM2JiNCxfMHgyZjk5MzEsXzB4MzY2MzAzKT0+e3ZhciBfMHg1MjFhODQ9XzB4MzBkNDZjO2lmKF8weDMwODBlMFsnX2NvbnNvbGVfbmluamEnXSlyZXR1cm4gXzB4MzA4MGUwW18weDUyMWE4NCgweGY0KV07aWYoIUooXzB4MzA4MGUwLF8weDIwM2JiNCxfMHg0YjdlNDUpKXJldHVybiBfMHgzMDgwZTBbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnY292ZXJhZ2UnOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weDMwODBlMFtfMHg1MjFhODQoMHhmNCldO2xldCBfMHgzNDkzZmM9VyhfMHgzMDgwZTApLF8weDRjYWQzMD1fMHgzNDkzZmNbXzB4NTIxYTg0KDB4ZjApXSxfMHg4MTkyNzM9XzB4MzQ5M2ZjW18weDUyMWE4NCgweDE2ZCldLF8weDU0NGNjMj1fMHgzNDkzZmNbXzB4NTIxYTg0KDB4MTQ5KV0sXzB4M2ViM2U2PXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4MjVmZjE0PVkoXzB4MzA4MGUwLF8weDJmOTkzMSxfMHgzZWIzZTYsXzB4NGUwZTc3KSxfMHgxOTIzMDA9XzB4MjU4NzNmPT57XzB4M2ViM2U2Wyd0cyddW18weDI1ODczZl09XzB4ODE5MjczKCk7fSxfMHg0NGY1MTA9KF8weDU1NjJmZCxfMHgyZjY3MDYpPT57dmFyIF8weDJlY2Q2Nj1fMHg1MjFhODQ7bGV0IF8weDJjYzkxNj1fMHgzZWIzZTZbJ3RzJ11bXzB4MmY2NzA2XTtpZihkZWxldGUgXzB4M2ViM2U2Wyd0cyddW18weDJmNjcwNl0sXzB4MmNjOTE2KXtsZXQgXzB4MWY1ODQyPV8weDRjYWQzMChfMHgyY2M5MTYsXzB4ODE5MjczKCkpO18weDUzNzUxYyhfMHgyNWZmMTQoXzB4MmVjZDY2KDB4MWE0KSxfMHg1NTYyZmQsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLFtfMHgxZjU4NDJdLF8weDJmNjcwNikpO319LF8weDE4Zjc4Yj1fMHgyN2U1MzM9Pl8weDc0YWRjYz0+e3ZhciBfMHg1M2YzMWE9XzB4NTIxYTg0O3RyeXtfMHgxOTIzMDAoXzB4NzRhZGNjKSxfMHgyN2U1MzMoXzB4NzRhZGNjKTt9ZmluYWxseXtfMHgzMDgwZTBbXzB4NTNmMzFhKDB4ZjkpXVtfMHg1M2YzMWEoMHgxYTQpXT1fMHgyN2U1MzM7fX0sXzB4MTU1M2Q4PV8weDRiNjI0Yj0+XzB4NWNhNDQxPT57dmFyIF8weDJmZmZmNz1fMHg1MjFhODQ7dHJ5e2xldCBbXzB4NWUyZDg2LF8weDQ2ZGI1Ml09XzB4NWNhNDQxW18weDJmZmZmNygweDEzZCldKF8weDJmZmZmNygweDE3ZCkpO18weDQ0ZjUxMChfMHg0NmRiNTIsXzB4NWUyZDg2KSxfMHg0YjYyNGIoXzB4NWUyZDg2KTt9ZmluYWxseXtfMHgzMDgwZTBbXzB4MmZmZmY3KDB4ZjkpXVtfMHgyZmZmZjcoMHgxNDIpXT1fMHg0YjYyNGI7fX07XzB4MzA4MGUwW18weDUyMWE4NCgweGY0KV09eydjb25zb2xlTG9nJzooXzB4MThlMjgwLF8weDFmNGQxNSk9Pnt2YXIgXzB4MWI5OGY1PV8weDUyMWE4NDtfMHgzMDgwZTBbJ2NvbnNvbGUnXVtfMHgxYjk4ZjUoMHgxYTApXVtfMHgxYjk4ZjUoMHgxMDYpXSE9PV8weDFiOThmNSgweDEyMykmJl8weDUzNzUxYyhfMHgyNWZmMTQoXzB4MWI5OGY1KDB4MWEwKSxfMHgxOGUyODAsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLF8weDFmNGQxNSkpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDRjOTU2YixfMHhjZGRiMTEpPT57dmFyIF8weDVkZDAyOD1fMHg1MjFhODQ7XzB4MzA4MGUwW18weDVkZDAyOCgweGY5KV1bXzB4NWRkMDI4KDB4MWEwKV1bXzB4NWRkMDI4KDB4MTA2KV0hPT1fMHg1ZGQwMjgoMHgxMTApJiZfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDVkZDAyOCgweDE1NiksXzB4NGM5NTZiLF8weDU0NGNjMigpLF8weGY0ODllMixfMHhjZGRiMTEpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4MTBhMzA4PV8weDUyMWE4NDtfMHgzMDgwZTBbJ2NvbnNvbGUnXVtfMHgxMGEzMDgoMHgxYTQpXT1fMHgxOGY3OGIoXzB4MzA4MGUwWydjb25zb2xlJ11bXzB4MTBhMzA4KDB4MWE0KV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHg0NGE4ODQ9XzB4NTIxYTg0O18weDMwODBlMFtfMHg0NGE4ODQoMHhmOSldWyd0aW1lRW5kJ109XzB4MTU1M2Q4KF8weDMwODBlMFtfMHg0NGE4ODQoMHhmOSldW18weDQ0YTg4NCgweDE0MildKTt9LCdhdXRvTG9nJzooXzB4NDc5NjYwLF8weGQxNjg2Yyk9Pnt2YXIgXzB4NDA2NDZlPV8weDUyMWE4NDtfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDQwNjQ2ZSgweDFhMCksXzB4ZDE2ODZjLF8weDU0NGNjMigpLF8weGY0ODllMixbXzB4NDc5NjYwXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4OTFmZWQ1LF8weDQwYTg0Zik9Pnt2YXIgXzB4NzM0NGUxPV8weDUyMWE4NDtfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDczNDRlMSgweDFhMCksXzB4OTFmZWQ1LF8weDU0NGNjMigpLF8weGY0ODllMixfMHg0MGE4NGYpKTt9LCdhdXRvVHJhY2UnOihfMHgzNTQ2ZjcsXzB4M2Q4ZWI1KT0+e3ZhciBfMHgyNTUxMmY9XzB4NTIxYTg0O18weDUzNzUxYyhfMHgyNWZmMTQoXzB4MjU1MTJmKDB4MTU2KSxfMHgzZDhlYjUsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLFtfMHgzNTQ2ZjddKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDJiNzIyZixfMHgyZGYwM2IpPT57dmFyIF8weDIwYWNmMT1fMHg1MjFhODQ7XzB4NTM3NTFjKF8weDI1ZmYxNChfMHgyMGFjZjEoMHgxNTYpLF8weDJiNzIyZixfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsXzB4MmRmMDNiKSk7fSwnYXV0b1RpbWUnOihfMHgyOTcxOTQsXzB4MWE2YjY4LF8weDU5ZDYwYik9PntfMHgxOTIzMDAoXzB4NTlkNjBiKTt9LCdhdXRvVGltZUVuZCc6KF8weDRiMTE3NCxfMHgxOWU0ZjksXzB4M2U5NzczKT0+e18weDQ0ZjUxMChfMHgxOWU0ZjksXzB4M2U5NzczKTt9LCdjb3ZlcmFnZSc6XzB4MTY5MDM1PT57dmFyIF8weDk0ZmRkPV8weDUyMWE4NDtfMHg1Mzc1MWMoeydtZXRob2QnOl8weDk0ZmRkKDB4MTg3KSwndmVyc2lvbic6XzB4NGUwZTc3LCdhcmdzJzpbeydpZCc6XzB4MTY5MDM1fV19KTt9fTtsZXQgXzB4NTM3NTFjPWIoXzB4MzA4MGUwLF8weDEzYWQ4NSxfMHg0YjAxOTksXzB4MmQ0MGY2LF8weDRiN2U0NSxfMHgzNjYzMDMpLF8weGY0ODllMj1fMHgzMDgwZTBbXzB4NTIxYTg0KDB4ZDMpXTtyZXR1cm4gXzB4MzA4MGUwW18weDUyMWE4NCgweGY0KV07fSkoZ2xvYmFsVGhpcyxfMHgzMGQ0NmMoMHhlMCksXzB4MzBkNDZjKDB4Y2MpLFxcXCJjOlxcXFxcXFxcVXNlcnNcXFxcXFxcXFVTRVJcXFxcXFxcXC52c2NvZGVcXFxcXFxcXGV4dGVuc2lvbnNcXFxcXFxcXHdhbGxhYnlqcy5jb25zb2xlLW5pbmphLTEuMC4yNDBcXFxcXFxcXG5vZGVfbW9kdWxlc1xcXCIsXzB4MzBkNDZjKDB4MTdhKSxfMHgzMGQ0NmMoMHhmMiksXzB4MzBkNDZjKDB4ZDkpLF8weDMwZDQ2YygweDFhYSksXzB4MzBkNDZjKDB4MTAzKSxfMHgzMGQ0NmMoMHhlZSkpO1wiKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IHVuaWNvcm4vbm8tYWJ1c2l2ZS1lc2xpbnQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgcmVzb2x2ZVBhdGggZnJvbSAnQHNyYy91dGlscy9yZXNvbHZlUGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgdXJsLFxuICBsb2dvLFxuICBhdXRob3IsXG4gIHNpdGVOYW1lLFxuICBwdWJsaXNoZWRUaW1lLFxuICBtb2RpZmllZFRpbWUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dHlwZScgY29udGVudD0nYXJ0aWNsZScgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17dGl0bGV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17c2l0ZU5hbWV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PXt1cmx9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2UnIGNvbnRlbnQ9e2xvZ299IC8+XG4gICAgICB7cHVibGlzaGVkVGltZSAmJiAoXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PSdhcnRpY2xlOnB1Ymxpc2hlZF90aW1lJyBjb250ZW50PXtwdWJsaXNoZWRUaW1lfSAvPlxuICAgICAgKX1cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdhcnRpY2xlOm1vZGlmaWVkX3RpbWUnIGNvbnRlbnQ9e21vZGlmaWVkVGltZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdhcnRpY2xlOmF1dGhvcicgY29udGVudD17YXV0aG9yfSAvPlxuXG4gICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9J3Nob3J0Y3V0IGljb24nXG4gICAgICAgIGhyZWY9J2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmc/MTIzJ1xuICAgICAgICB0eXBlPSdpbWFnZS9wbmcnXG4gICAgICAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdhc3NldHMvY3NzL2FuaW1hdGUuY3NzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdhc3NldHMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdhc3NldHMvY3NzL2RlZmF1bHQuY3NzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdhc3NldHMvY3NzL3N0eWxlLmNzcycgLz5cblxuICAgICAgey8qIEZPUiBJRTkgYmVsb3cgKi99XG4gICAgICB7LyogW2lmIGx0IElFIDldPiAqL31cbiAgICAgIDxzY3JpcHQgc3JjPSdhc3NldHMvanMvdmVuZG9yL2pxdWVyeS0xLjEyLjQubWluLmpzJz48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPSdhc3NldHMvanMvdmVuZG9yL21vZGVybml6ci0zLjcuMS5taW4uanMnPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9J2Fzc2V0cy9qcy9ib290c3RyYXAubWluLmpzJz48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPSdhc3NldHMvanMvanF1ZXJ5LmVhc2luZy5taW4uanMnPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgKTtcbn07XG4iLCJjb25zdCBiYXNlQ29uZmlnID0ge1xuICB3ZWRkaW5nRGF5OiAnU2F0dXJkYXknLFxuICB3ZWRkaW5nVGltZTogJzhhbSAtIDhwbScsXG4gIHdlZGRpbmdEYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgc2hvd0J1aWx0V2l0aEluZm86IHRydWUsXG4gIHNob3dRckNvZGU6IGZhbHNlLFxuICBjYWxlbmRhckluZm86IHtcbiAgICB0aW1lU3RhcnRJU086ICcyMDIzLTEyLTE2VDE5OjAwOjAwKzA4OjAwJyxcbiAgICB0aW1lRW5kSVNPOiAnMjAyMy0xMi0xNlQyMTowMDowMCswODowMCcsXG4gIH0sXG4gIGNvdXBsZUluZm86IHtcbiAgICBicmlkZU5hbWU6ICdPbGFkdW5uaSAnLFxuICAgIGdyb29tTmFtZTogJ0FkZXdhbGUnLFxuICAgIGNvdXBsZU5hbWVGb3JtYXQ6ICdHUk9PTV9GSVJTVCcsXG4gICAgaGFzaHRhZzogJyNEV2VkZGluZycsXG4gIH0sXG4gIHZlbnVlOiB7XG4gICAgbmFtZTogJ0xhaGwgQmV2ZW50IENlbnRlcicsXG4gICAgYWRkcmVzc0xpbmUxOiAnMTExIG9iYWZlbWkgYXdvbG93byB3YXkgaWtlamEgTGFnb3MsIE5pZ2VyaWEnLFxuICAgIC8vIGFkZHJlc3NMaW5lMjogJ0VrbyBob3RlbCBWLkkgTGFnb3MgU3RhdGUnLFxuICAgIGNpdHk6ICdMYWdvcycsXG4gICAgY291bnRyeTogJ05pZ2VyaWEnLFxuICAgIG1hcFVybDogJ2h0dHBzOi8vbWFwcy5hcHAuZ29vLmdsL0tob0ZETVVudGJUVTZMM3k5JyxcbiAgfSxcbiAgbG9nbzoge1xuICAgIGhlYWRlckxvZ286ICdhc3NldHMvaW1hZ2VzL3Jpbmctc3ZnLnBuZycsXG4gICAgZm9vdGVyTG9nbzogJ2Fzc2V0cy92aWRlby9hdy1yaW5nLWxvZ28tdGlja2VyLm1wNCcsXG4gICAgZm9vdGVyTG9nb1R5cGU6ICdtcDQnLFxuICB9LFxuICBvZ1RhZ3M6IHtcbiAgICBsb2dvOiAnYXNzZXRzL2ltYWdlcy9hdy1yaW5nLWxvZ28ucG5nJyxcbiAgICBzaXRlTmFtZTogJ2h0dHBzOi8vZnVnbHlkYW1pLmdpdGh1Yi5pby9hZGV3YWxlLXdlZGRpbmcvJyxcbiAgICBwdWJsaXNoZWRUaW1lOiAnMjAyMy0wOS0wNycsXG4gIH0sXG59O1xuXG5jb25zdCBsYW5nID0ge1xuICBpZDoge1xuICAgIHdlZGRpbmdEYXk6ICdTYWJ0dScsXG4gICAgd2VkZGluZ0RhdGU6ICcyMiBGZWJydWFyaSAyMDIwJyxcbiAgICB2ZW51ZToge1xuICAgICAgLi4uYmFzZUNvbmZpZy52ZW51ZSxcbiAgICAgIG5hbWU6ICdIb3RlbCBPdmFsJyxcbiAgICAgIGFkZHJlc3NMaW5lMjogJ1N1cmFiYXlhLCBKYXdhIFRpbXVyLCA2MDI0MSwnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLmJhc2VDb25maWcsXG4gIGxhbmcsXG59O1xuIiwiaW1wb3J0IEkxOG4gZnJvbSBcImkxOG4tanNcIjtcbmltcG9ydCBlbiBmcm9tIFwiLi9sYW5nL2VuXCI7XG5pbXBvcnQgaWQgZnJvbSBcIi4vbGFuZy9pZFwiO1xuXG5jb25zdCBzdXBwb3J0ZWRMYW5ndWFnZXMgPSBbXG4gIHtcbiAgICBjb2RlOiBcImVuXCIsXG4gICAgbGFiZWw6IFwiRW5nbGlzaFwiLFxuICAgIHRyYW5zbGF0aW9uczogZW5cbiAgfSxcbiAge1xuICAgIGNvZGU6IFwiaWRcIixcbiAgICBsYWJlbDogXCJJbmRvbmVzaWFcIixcbiAgICB0cmFuc2xhdGlvbnM6IGlkXG4gIH1cbl07XG5cbkkxOG4uZGVmYXVsdExvY2FsZSA9IFwiZW5cIjtcbnN1cHBvcnRlZExhbmd1YWdlcy5mb3JFYWNoKGxhbmcgPT4ge1xuICBJMThuLnRyYW5zbGF0aW9uc1tsYW5nLmNvZGVdID0gbGFuZy50cmFuc2xhdGlvbnM7XG59KTtcblxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlT3B0aW9ucyA9IHN1cHBvcnRlZExhbmd1YWdlcy5tYXAobGFuZyA9PiAoe1xuICB2YWx1ZTogbGFuZy5jb2RlLFxuICBsYWJlbDogbGFuZy5sYWJlbFxufSkpO1xuXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxlID0gbG9jYWxlID0+IHtcbiAgSTE4bi5sb2NhbGUgPSBsb2NhbGU7XG59O1xuXG5leHBvcnQgY29uc3QgdCA9IChuYW1lLCBwYXJhbXMgPSB7fSkgPT4ge1xuICByZXR1cm4gSTE4bi50KG5hbWUsIHBhcmFtcyk7XG59O1xuXG5leHBvcnQgY29uc3QgVHJhbnMgPSBwcm9wcyA9PiAoXG4gIDxzcGFuXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0KHByb3BzLmkxOG5LZXksIHsgLi4ucHJvcHMgfSkgfX1cbiAgPjwvc3Bhbj5cbik7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlID0gSTE4bi5kZWZhdWx0TG9jYWxlO1xuXG5leHBvcnQgY29uc3QgdXNlVHJhbnNsYXRpb24gPSBsb2NhbGUgPT4ge1xuICBJMThuLmxvY2FsZSA9IGxvY2FsZTtcbiAgcmV0dXJuIEkxOG4udDtcbn07XG4iLCJjb25zdCBmYWxsYmFja0hvc3QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCAocGF0aCwgaGVhZGVycykgPT4ge1xuICBpZiAocGF0aC5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgLy8gVXNlIGJyb3dzZXIncyBgd2luZG93YCBpZiBoZWFkZXJzIGlzIG5vdCBwcm92aWRlZFxuICBpZiAoIWhlYWRlcnMgJiYgcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJjb3VsZCBub3QgcmVzb2x2ZSBwYXRoIHdpdGhvdXQgcmVxdWVzdCBoZWFkZXJzOiB3aW5kb3cgaXMgdW5kZWZpbmVkXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3QgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3R9JHtwYXRofWA7XG4gIH1cbiAgY29uc3QgaG9zdCA9IGhlYWRlcnNcbiAgICA/IGhlYWRlcnNbXCJ4LW5vdy1kZXBsb3ltZW50LXVybFwiXSB8fFxuICAgICAgaGVhZGVyc1tcIngtZm9yd2FyZGVkLWhvc3RcIl0gfHxcbiAgICAgIGhlYWRlcnMuaG9zdFxuICAgIDogbnVsbDtcbiAgY29uc3Qgc2NoZW1lID1cbiAgICBoZWFkZXJzICYmIGhlYWRlcnNbXCJ4LWZvcndhcmRlZC1wcm90b1wiXVxuICAgICAgPyBoZWFkZXJzW1wieC1mb3J3YXJkZWQtcHJvdG9cIl1cbiAgICAgIDogXCJodHRwXCI7XG4gIHJldHVybiBob3N0ID8gYCR7c2NoZW1lfTovLyR7aG9zdH0ke3BhdGh9YCA6IGAke2ZhbGxiYWNrSG9zdH0ke3BhdGh9YDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpMThuLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxcmNvZGUucmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWRkLXRvLWNhbGVuZGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJsdXJoYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2VldGFsZXJ0MlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2lwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9