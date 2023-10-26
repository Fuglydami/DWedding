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
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x391d(){var _0x2d8a98=['message','test','autoExpandPreviousObjects','6hoBHJx','function','_allowedToSend','15ZmLVLl','_isUndefined','','env','elapsed','POSITIVE_INFINITY','1.0.0','date','_console_ninja','_attemptToReconnectShortly','nodeModules','_addProperty','_blacklistedProperty','console','isArray','array','1312766fFLLAD','root_exp','call','root_exp_id','count','String','warn','','allStrLength','20AuMXwX','name','level','_addObjectProperty','_treeNodePropertiesAfterFullValue','19784RZWKGd','stackTraceLimit','[object\\x20Set]','Map','3915zDcWzX','hits','disabledTrace','location','substr','unknown','[object\\x20Array]','_isPrimitiveType','method','_setNodePermissions','_inNextEdge','unshift','stringify','_connectAttemptCount','_addFunctionsNode','versions','_reconnectTimeout','_dateToString','remix','1232297smIwMm','hostname','disabledLog','perf_hooks','capped','[object\\x20Date]','14253hDpInm','then','depth','hasOwnProperty','noFunctions','_getOwnPropertyNames','NEXT_RUNTIME','_p_','match','replace','getWebSocketClass','join','edge','push','number','_type','_allowedToConnectOnSend','process','error','_p_length','dockerizedApp','string','split','_setNodeId','expressionsToEvaluate','_treeNodePropertiesBeforeFullValue','[object\\x20BigInt]','timeEnd','_isMap','reduceLimits','_maxConnectAttemptCount','funcName','catch','_hasSymbolPropertyOnItsPath','now','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','432MhHNFO','_connected','toString','_getOwnPropertySymbols','data','hrtime','enumerable','astro','isExpressionToEvaluate','_inBrowser','totalStrLength','trace','NEGATIVE_INFINITY','getOwnPropertyNames','null','nuxt','_hasMapOnItsPath','\\x20server','port','length','_WebSocketClass','parent','negativeZero','elements','_isPrimitiveWrapperType','_setNodeExpressionPath','global','cappedElements','autoExpandMaxDepth','HTMLAllCollection','Symbol','path','boolean','Set','timeStamp','getOwnPropertyDescriptor','_p_name','_Symbol','_keyStrRegExp','_disposeWebsocket','getter','_webSocketErrorDocsLink','autoExpandPropertyCount','symbol','_objectToString','_sortProps','rootExpression','webpack','sort','Number',':logPointId:','8376360nTFfCo','value','prototype','_property','autoExpand','object','_isSet','strLength','_socket','coverage','_setNodeQueryPath','ws://','_hasSetOnItsPath','bigint','_consoleNinjaAllowedToStart','resolveGetters','getOwnPropertySymbols','toLowerCase','unref','type','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_sendErrorMessage','53886RBBEfW','_setNodeExpandableState','_propertyName','close','undefined','positiveInfinity','nan','_addLoadNode','Boolean','props','next.js','onopen','log','_connectToHostNow','reload','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','time','get','constructor','_setNodeLabel','index','[object\\x20Map]',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Damilare\",\"169.254.80.80\",\"172.31.112.1\"],'onmessage','forEach','node','getPrototypeOf','Buffer','4431040CQHEso','\\x20browser','_regExpToString','includes','_processTreeNodeResult','default','serialize','60992','__es'+'Module','performance','bind','readyState','_connecting','_numberRegExp','_console_ninja_session','_isArray','onerror','host','_HTMLAllCollection','_ws','1698361852543','send','concat','gateway.docker.internal','current','onclose','_additionalMetadata','127.0.0.1','autoExpandLimit','Error','_capIfString','sortProps','_undefined'];_0x391d=function(){return _0x2d8a98;};return _0x391d();}var _0x30d46c=_0x394b;function _0x394b(_0x122f32,_0x569f28){var _0x391df3=_0x391d();return _0x394b=function(_0x394b35,_0x2fbe16){_0x394b35=_0x394b35-0xcc;var _0x111890=_0x391df3[_0x394b35];return _0x111890;},_0x394b(_0x122f32,_0x569f28);}(function(_0x1d3e53,_0x1f24e5){var _0x430c6c=_0x394b,_0x4595ec=_0x1d3e53();while(!![]){try{var _0x5506bf=parseInt(_0x430c6c(0xec))/0x1*(-parseInt(_0x430c6c(0x194))/0x2)+-parseInt(_0x430c6c(0x127))/0x3*(parseInt(_0x430c6c(0x105))/0x4)+-parseInt(_0x430c6c(0x1b0))/0x5+-parseInt(_0x430c6c(0xe9))/0x6*(parseInt(_0x430c6c(0xfc))/0x7)+-parseInt(_0x430c6c(0x10a))/0x8*(parseInt(_0x430c6c(0x10e))/0x9)+-parseInt(_0x430c6c(0x17e))/0xa+-parseInt(_0x430c6c(0x121))/0xb*(-parseInt(_0x430c6c(0x14b))/0xc);if(_0x5506bf===_0x1f24e5)break;else _0x4595ec['push'](_0x4595ec['shift']());}catch(_0x103b4a){_0x4595ec['push'](_0x4595ec['shift']());}}}(_0x391d,0x96dcf));var j=Object['create'],H=Object['defineProperty'],G=Object[_0x30d46c(0x16e)],ee=Object['getOwnPropertyNames'],te=Object[_0x30d46c(0x1ae)],ne=Object['prototype'][_0x30d46c(0x12a)],re=(_0x1d5fc6,_0x74781d,_0x8f03cd,_0x49ff4f)=>{var _0x180dcd=_0x30d46c;if(_0x74781d&&typeof _0x74781d==_0x180dcd(0x183)||typeof _0x74781d==_0x180dcd(0xea)){for(let _0x16cd95 of ee(_0x74781d))!ne['call'](_0x1d5fc6,_0x16cd95)&&_0x16cd95!==_0x8f03cd&&H(_0x1d5fc6,_0x16cd95,{'get':()=>_0x74781d[_0x16cd95],'enumerable':!(_0x49ff4f=G(_0x74781d,_0x16cd95))||_0x49ff4f[_0x180dcd(0x151)]});}return _0x1d5fc6;},x=(_0x568bc8,_0x2de1d4,_0x5b4c4f)=>(_0x5b4c4f=_0x568bc8!=null?j(te(_0x568bc8)):{},re(_0x2de1d4||!_0x568bc8||!_0x568bc8[_0x30d46c(0xcd)]?H(_0x5b4c4f,_0x30d46c(0x1b5),{'value':_0x568bc8,'enumerable':!0x0}):_0x5b4c4f,_0x568bc8)),X=class{constructor(_0x47f38c,_0x5c1b06,_0x3f2856,_0x457d3d,_0x18ff64){var _0x4bb61d=_0x30d46c;this[_0x4bb61d(0x165)]=_0x47f38c,this[_0x4bb61d(0xd6)]=_0x5c1b06,this[_0x4bb61d(0x15d)]=_0x3f2856,this[_0x4bb61d(0xf6)]=_0x457d3d,this['dockerizedApp']=_0x18ff64,this[_0x4bb61d(0xeb)]=!0x0,this[_0x4bb61d(0x137)]=!0x0,this[_0x4bb61d(0x14c)]=!0x1,this[_0x4bb61d(0xd1)]=!0x1,this['_inNextEdge']=_0x47f38c[_0x4bb61d(0x138)]?.[_0x4bb61d(0xef)]?.[_0x4bb61d(0x12d)]==='edge',this[_0x4bb61d(0x154)]=!this[_0x4bb61d(0x165)][_0x4bb61d(0x138)]?.[_0x4bb61d(0x11d)]?.[_0x4bb61d(0x1ad)]&&!this[_0x4bb61d(0x118)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4bb61d(0x145)]=0x14,this[_0x4bb61d(0x174)]='https://tinyurl.com/37x8b79t',this[_0x4bb61d(0x193)]=(this[_0x4bb61d(0x154)]?_0x4bb61d(0x14a):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x4bb61d(0x174)];}async[_0x30d46c(0x131)](){var _0x1e90f1=_0x30d46c;if(this[_0x1e90f1(0x15f)])return this[_0x1e90f1(0x15f)];let _0x4ae77c;if(this[_0x1e90f1(0x154)]||this['_inNextEdge'])_0x4ae77c=this[_0x1e90f1(0x165)]['WebSocket'];else{if(this['global'][_0x1e90f1(0x138)]?.['_WebSocket'])_0x4ae77c=this['global'][_0x1e90f1(0x138)]?.['_WebSocket'];else try{let _0x4ceb95=await import('path');_0x4ae77c=(await import((await import('url'))['pathToFileURL'](_0x4ceb95[_0x1e90f1(0x132)](this[_0x1e90f1(0xf6)],'ws/index.js'))['toString']()))[_0x1e90f1(0x1b5)];}catch{try{_0x4ae77c=require(require(_0x1e90f1(0x16a))[_0x1e90f1(0x132)](this['nodeModules'],'ws'));}catch{throw new Error(_0x1e90f1(0x1a3));}}}return this['_WebSocketClass']=_0x4ae77c,_0x4ae77c;}[_0x30d46c(0x1a1)](){var _0x49089a=_0x30d46c;this[_0x49089a(0xd1)]||this['_connected']||this['_connectAttemptCount']>=this[_0x49089a(0x145)]||(this[_0x49089a(0x137)]=!0x1,this[_0x49089a(0xd1)]=!0x0,this[_0x49089a(0x11b)]++,this[_0x49089a(0xd8)]=new Promise((_0x34eafc,_0x144324)=>{var _0x874fa4=_0x49089a;this[_0x874fa4(0x131)]()[_0x874fa4(0x128)](_0x4baf58=>{var _0x41ddac=_0x874fa4;let _0x25743b=new _0x4baf58(_0x41ddac(0x189)+(!this['_inBrowser']&&this[_0x41ddac(0x13b)]?_0x41ddac(0xdc):this[_0x41ddac(0xd6)])+':'+this[_0x41ddac(0x15d)]);_0x25743b[_0x41ddac(0xd5)]=()=>{var _0x2b4f65=_0x41ddac;this[_0x2b4f65(0xeb)]=!0x1,this[_0x2b4f65(0x172)](_0x25743b),this[_0x2b4f65(0xf5)](),_0x144324(new Error('logger\\x20websocket\\x20error'));},_0x25743b[_0x41ddac(0x19f)]=()=>{var _0x42082a=_0x41ddac;this[_0x42082a(0x154)]||_0x25743b[_0x42082a(0x186)]&&_0x25743b[_0x42082a(0x186)]['unref']&&_0x25743b[_0x42082a(0x186)][_0x42082a(0x190)](),_0x34eafc(_0x25743b);},_0x25743b[_0x41ddac(0xde)]=()=>{var _0x132972=_0x41ddac;this[_0x132972(0x137)]=!0x0,this[_0x132972(0x172)](_0x25743b),this['_attemptToReconnectShortly']();},_0x25743b[_0x41ddac(0x1ab)]=_0x1afd11=>{var _0x18d6b5=_0x41ddac;try{_0x1afd11&&_0x1afd11[_0x18d6b5(0x14f)]&&this[_0x18d6b5(0x154)]&&JSON['parse'](_0x1afd11['data'])[_0x18d6b5(0x116)]===_0x18d6b5(0x1a2)&&this['global'][_0x18d6b5(0x111)][_0x18d6b5(0x1a2)]();}catch{}};})[_0x874fa4(0x128)](_0x1b24d2=>(this[_0x874fa4(0x14c)]=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x874fa4(0xeb)]=!0x0,this[_0x874fa4(0x11b)]=0x0,_0x1b24d2))[_0x874fa4(0x147)](_0x37f5a0=>(this[_0x874fa4(0x14c)]=!0x1,this[_0x874fa4(0xd1)]=!0x1,console[_0x874fa4(0x102)](_0x874fa4(0x192)+this[_0x874fa4(0x174)]),_0x144324(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x37f5a0&&_0x37f5a0[_0x874fa4(0xe6)])))));}));}['_disposeWebsocket'](_0x49a461){var _0x4f8869=_0x30d46c;this[_0x4f8869(0x14c)]=!0x1,this['_connecting']=!0x1;try{_0x49a461[_0x4f8869(0xde)]=null,_0x49a461['onerror']=null,_0x49a461[_0x4f8869(0x19f)]=null;}catch{}try{_0x49a461[_0x4f8869(0xd0)]<0x2&&_0x49a461[_0x4f8869(0x197)]();}catch{}}['_attemptToReconnectShortly'](){var _0x15979b=_0x30d46c;clearTimeout(this['_reconnectTimeout']),!(this[_0x15979b(0x11b)]>=this[_0x15979b(0x145)])&&(this[_0x15979b(0x11e)]=setTimeout(()=>{var _0x557b68=_0x15979b;this['_connected']||this['_connecting']||(this['_connectToHostNow'](),this[_0x557b68(0xd8)]?.[_0x557b68(0x147)](()=>this[_0x557b68(0xf5)]()));},0x1f4),this[_0x15979b(0x11e)][_0x15979b(0x190)]&&this['_reconnectTimeout'][_0x15979b(0x190)]());}async[_0x30d46c(0xda)](_0x39e782){var _0x4860f9=_0x30d46c;try{if(!this['_allowedToSend'])return;this[_0x4860f9(0x137)]&&this[_0x4860f9(0x1a1)](),(await this['_ws'])[_0x4860f9(0xda)](JSON['stringify'](_0x39e782));}catch(_0x1e17e0){console[_0x4860f9(0x102)](this[_0x4860f9(0x193)]+':\\x20'+(_0x1e17e0&&_0x1e17e0[_0x4860f9(0xe6)])),this[_0x4860f9(0xeb)]=!0x1,this[_0x4860f9(0xf5)]();}}};function b(_0x46d0b1,_0x4c18eb,_0x321ff7,_0x676911,_0x4c8299,_0x54255a){var _0x3937e7=_0x30d46c;let _0x50e0f9=_0x321ff7[_0x3937e7(0x13d)](',')['map'](_0x41d87=>{var _0x5179a2=_0x3937e7;try{_0x46d0b1['_console_ninja_session']||((_0x4c8299===_0x5179a2(0x19e)||_0x4c8299===_0x5179a2(0x120)||_0x4c8299===_0x5179a2(0x152))&&(_0x4c8299+=!_0x46d0b1[_0x5179a2(0x138)]?.[_0x5179a2(0x11d)]?.[_0x5179a2(0x1ad)]&&_0x46d0b1[_0x5179a2(0x138)]?.['env']?.[_0x5179a2(0x12d)]!=='edge'?_0x5179a2(0x1b1):_0x5179a2(0x15c)),_0x46d0b1['_console_ninja_session']={'id':+new Date(),'tool':_0x4c8299});let _0x7aabbf=new X(_0x46d0b1,_0x4c18eb,_0x41d87,_0x676911,_0x54255a);return _0x7aabbf['send'][_0x5179a2(0xcf)](_0x7aabbf);}catch(_0x1cb06f){return console[_0x5179a2(0x102)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x1cb06f&&_0x1cb06f['message']),()=>{};}});return _0x277e04=>_0x50e0f9[_0x3937e7(0x1ac)](_0xa42fb=>_0xa42fb(_0x277e04));}function W(_0x1ec5c2){var _0x3f0495=_0x30d46c;let _0x11427f=function(_0x3d5583,_0xf50a7){return _0xf50a7-_0x3d5583;},_0x25515e;if(_0x1ec5c2[_0x3f0495(0xce)])_0x25515e=function(){var _0x384058=_0x3f0495;return _0x1ec5c2[_0x384058(0xce)]['now']();};else{if(_0x1ec5c2[_0x3f0495(0x138)]&&_0x1ec5c2[_0x3f0495(0x138)][_0x3f0495(0x150)]&&_0x1ec5c2[_0x3f0495(0x138)]?.[_0x3f0495(0xef)]?.[_0x3f0495(0x12d)]!==_0x3f0495(0x133))_0x25515e=function(){var _0x4b9a8c=_0x3f0495;return _0x1ec5c2[_0x4b9a8c(0x138)]['hrtime']();},_0x11427f=function(_0x1340f2,_0x45e900){return 0x3e8*(_0x45e900[0x0]-_0x1340f2[0x0])+(_0x45e900[0x1]-_0x1340f2[0x1])/0xf4240;};else try{let {performance:_0x4a19c8}=require(_0x3f0495(0x124));_0x25515e=function(){var _0x495572=_0x3f0495;return _0x4a19c8[_0x495572(0x149)]();};}catch{_0x25515e=function(){return+new Date();};}}return{'elapsed':_0x11427f,'timeStamp':_0x25515e,'now':()=>Date[_0x3f0495(0x149)]()};}function J(_0x2c99fd,_0x1298f9,_0x7a4450){var _0x2b6560=_0x30d46c;if(_0x2c99fd[_0x2b6560(0x18c)]!==void 0x0)return _0x2c99fd[_0x2b6560(0x18c)];let _0x17de28=_0x2c99fd[_0x2b6560(0x138)]?.['versions']?.[_0x2b6560(0x1ad)]||_0x2c99fd[_0x2b6560(0x138)]?.[_0x2b6560(0xef)]?.[_0x2b6560(0x12d)]==='edge';return _0x17de28&&_0x7a4450===_0x2b6560(0x15a)?_0x2c99fd[_0x2b6560(0x18c)]=!0x1:_0x2c99fd[_0x2b6560(0x18c)]=_0x17de28||!_0x1298f9||_0x2c99fd['location']?.['hostname']&&_0x1298f9[_0x2b6560(0x1b3)](_0x2c99fd[_0x2b6560(0x111)][_0x2b6560(0x122)]),_0x2c99fd[_0x2b6560(0x18c)];}function Y(_0x319751,_0x5d267a,_0x2408ba,_0x563504){var _0x4248d6=_0x30d46c;_0x319751=_0x319751,_0x5d267a=_0x5d267a,_0x2408ba=_0x2408ba,_0x563504=_0x563504;let _0x5c6ba4=W(_0x319751),_0x5dead5=_0x5c6ba4[_0x4248d6(0xf0)],_0x299da3=_0x5c6ba4['timeStamp'];class _0x3187a7{constructor(){var _0x54c54b=_0x4248d6;this[_0x54c54b(0x171)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c54b(0xd2)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c54b(0xe5)]=_0x319751[_0x54c54b(0x198)],this[_0x54c54b(0xd7)]=_0x319751[_0x54c54b(0x168)],this['_getOwnPropertyDescriptor']=Object[_0x54c54b(0x16e)],this[_0x54c54b(0x12c)]=Object[_0x54c54b(0x158)],this[_0x54c54b(0x170)]=_0x319751[_0x54c54b(0x169)],this[_0x54c54b(0x1b2)]=RegExp['prototype'][_0x54c54b(0x14d)],this[_0x54c54b(0x11f)]=Date['prototype'][_0x54c54b(0x14d)];}[_0x4248d6(0x1b6)](_0x43bfc7,_0x25d451,_0x1e71c5,_0x508a0f){var _0x136692=_0x4248d6,_0x22f7b8=this,_0x27a473=_0x1e71c5['autoExpand'];function _0x412bfe(_0x1561f7,_0x2a0987,_0x58f130){var _0x21c91d=_0x394b;_0x2a0987[_0x21c91d(0x191)]=_0x21c91d(0x113),_0x2a0987[_0x21c91d(0x139)]=_0x1561f7[_0x21c91d(0xe6)],_0x1c36b0=_0x58f130['node'][_0x21c91d(0xdd)],_0x58f130[_0x21c91d(0x1ad)][_0x21c91d(0xdd)]=_0x2a0987,_0x22f7b8[_0x21c91d(0x140)](_0x2a0987,_0x58f130);}try{_0x1e71c5[_0x136692(0x107)]++,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)][_0x136692(0x134)](_0x25d451);var _0x315743,_0x541aa8,_0x3cced9,_0x2a34a1,_0x20b4f2=[],_0x4da63b=[],_0x556979,_0x2d2d6d=this[_0x136692(0x136)](_0x25d451),_0xd832c5=_0x2d2d6d==='array',_0x268c40=!0x1,_0x130f3e=_0x2d2d6d===_0x136692(0xea),_0x369b0e=this[_0x136692(0x115)](_0x2d2d6d),_0x498418=this['_isPrimitiveWrapperType'](_0x2d2d6d),_0x340f83=_0x369b0e||_0x498418,_0x2493be={},_0x36f3cc=0x0,_0x3a2fda=!0x1,_0x1c36b0,_0x348bf1=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1e71c5[_0x136692(0x129)]){if(_0xd832c5){if(_0x541aa8=_0x25d451[_0x136692(0x15e)],_0x541aa8>_0x1e71c5[_0x136692(0x162)]){for(_0x3cced9=0x0,_0x2a34a1=_0x1e71c5['elements'],_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));_0x43bfc7[_0x136692(0x166)]=!0x0;}else{for(_0x3cced9=0x0,_0x2a34a1=_0x541aa8,_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));}_0x1e71c5[_0x136692(0x175)]+=_0x4da63b['length'];}if(!(_0x2d2d6d==='null'||_0x2d2d6d===_0x136692(0x198))&&!_0x369b0e&&_0x2d2d6d!==_0x136692(0x101)&&_0x2d2d6d!==_0x136692(0x1af)&&_0x2d2d6d!=='bigint'){var _0x2cc7c3=_0x508a0f[_0x136692(0x19d)]||_0x1e71c5['props'];if(this[_0x136692(0x184)](_0x25d451)?(_0x315743=0x0,_0x25d451[_0x136692(0x1ac)](function(_0x5b5110){var _0x58c3cb=_0x136692;if(_0x36f3cc++,_0x1e71c5[_0x58c3cb(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5[_0x58c3cb(0x153)]&&_0x1e71c5[_0x58c3cb(0x182)]&&_0x1e71c5[_0x58c3cb(0x175)]>_0x1e71c5[_0x58c3cb(0xe1)]){_0x3a2fda=!0x0;return;}_0x4da63b[_0x58c3cb(0x134)](_0x22f7b8[_0x58c3cb(0xf7)](_0x20b4f2,_0x25d451,_0x58c3cb(0x16c),_0x315743++,_0x1e71c5,function(_0xfcb5c5){return function(){return _0xfcb5c5;};}(_0x5b5110)));})):this[_0x136692(0x143)](_0x25d451)&&_0x25d451['forEach'](function(_0x2056f5,_0x313010){var _0x55a7fd=_0x136692;if(_0x36f3cc++,_0x1e71c5['autoExpandPropertyCount']++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5['isExpressionToEvaluate']&&_0x1e71c5['autoExpand']&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x55a7fd(0xe1)]){_0x3a2fda=!0x0;return;}var _0x27b755=_0x313010['toString']();_0x27b755['length']>0x64&&(_0x27b755=_0x27b755['slice'](0x0,0x64)+'...'),_0x4da63b[_0x55a7fd(0x134)](_0x22f7b8[_0x55a7fd(0xf7)](_0x20b4f2,_0x25d451,_0x55a7fd(0x10d),_0x27b755,_0x1e71c5,function(_0x58dde9){return function(){return _0x58dde9;};}(_0x2056f5)));}),!_0x268c40){try{for(_0x556979 in _0x25d451)if(!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}catch{}if(_0x2493be[_0x136692(0x13a)]=!0x0,_0x130f3e&&(_0x2493be[_0x136692(0x16f)]=!0x0),!_0x3a2fda){var _0x379ad8=[][_0x136692(0xdb)](this[_0x136692(0x12c)](_0x25d451))[_0x136692(0xdb)](this[_0x136692(0x14e)](_0x25d451));for(_0x315743=0x0,_0x541aa8=_0x379ad8[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)if(_0x556979=_0x379ad8[_0x315743],!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979[_0x136692(0x14d)]()))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)&&!_0x2493be[_0x136692(0x12e)+_0x556979[_0x136692(0x14d)]()]){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b['push'](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}}}}if(_0x43bfc7[_0x136692(0x191)]=_0x2d2d6d,_0x340f83?(_0x43bfc7['value']=_0x25d451['valueOf'](),this[_0x136692(0xe3)](_0x2d2d6d,_0x43bfc7,_0x1e71c5,_0x508a0f)):_0x2d2d6d===_0x136692(0xf3)?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x11f)][_0x136692(0xfe)](_0x25d451):_0x2d2d6d===_0x136692(0x18b)?_0x43bfc7[_0x136692(0x17f)]=_0x25d451['toString']():_0x2d2d6d==='RegExp'?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x1b2)]['call'](_0x25d451):_0x2d2d6d===_0x136692(0x176)&&this[_0x136692(0x170)]?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x170)][_0x136692(0x180)][_0x136692(0x14d)][_0x136692(0xfe)](_0x25d451):!_0x1e71c5[_0x136692(0x129)]&&!(_0x2d2d6d===_0x136692(0x159)||_0x2d2d6d===_0x136692(0x198))&&(delete _0x43bfc7['value'],_0x43bfc7[_0x136692(0x125)]=!0x0),_0x3a2fda&&(_0x43bfc7['cappedProps']=!0x0),_0x1c36b0=_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)],_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x43bfc7,this[_0x136692(0x140)](_0x43bfc7,_0x1e71c5),_0x4da63b[_0x136692(0x15e)]){for(_0x315743=0x0,_0x541aa8=_0x4da63b[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)_0x4da63b[_0x315743](_0x315743);}_0x20b4f2[_0x136692(0x15e)]&&(_0x43bfc7['props']=_0x20b4f2);}catch(_0xcb2f1f){_0x412bfe(_0xcb2f1f,_0x43bfc7,_0x1e71c5);}return this[_0x136692(0xdf)](_0x25d451,_0x43bfc7),this[_0x136692(0x109)](_0x43bfc7,_0x1e71c5),_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x1c36b0,_0x1e71c5[_0x136692(0x107)]--,_0x1e71c5['autoExpand']=_0x27a473,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)]['pop'](),_0x43bfc7;}[_0x4248d6(0x14e)](_0x36fd65){var _0x3a70b0=_0x4248d6;return Object[_0x3a70b0(0x18e)]?Object['getOwnPropertySymbols'](_0x36fd65):[];}[_0x4248d6(0x184)](_0x2e653d){var _0x3fc9c1=_0x4248d6;return!!(_0x2e653d&&_0x319751['Set']&&this[_0x3fc9c1(0x177)](_0x2e653d)===_0x3fc9c1(0x10c)&&_0x2e653d[_0x3fc9c1(0x1ac)]);}[_0x4248d6(0xf8)](_0x52d6ba,_0x57f26e,_0xff5ab3){var _0xd01f4b=_0x4248d6;return _0xff5ab3[_0xd01f4b(0x12b)]?typeof _0x52d6ba[_0x57f26e]==_0xd01f4b(0xea):!0x1;}[_0x4248d6(0x136)](_0x89a353){var _0x3c333c=_0x4248d6,_0x45a790='';return _0x45a790=typeof _0x89a353,_0x45a790===_0x3c333c(0x183)?this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x114)?_0x45a790=_0x3c333c(0xfb):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x126)?_0x45a790=_0x3c333c(0xf3):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x141)?_0x45a790=_0x3c333c(0x18b):_0x89a353===null?_0x45a790=_0x3c333c(0x159):_0x89a353[_0x3c333c(0x1a6)]&&(_0x45a790=_0x89a353[_0x3c333c(0x1a6)][_0x3c333c(0x106)]||_0x45a790):_0x45a790==='undefined'&&this[_0x3c333c(0xd7)]&&_0x89a353 instanceof this[_0x3c333c(0xd7)]&&(_0x45a790=_0x3c333c(0x168)),_0x45a790;}[_0x4248d6(0x177)](_0xb28b5){var _0x2d6e81=_0x4248d6;return Object[_0x2d6e81(0x180)][_0x2d6e81(0x14d)]['call'](_0xb28b5);}['_isPrimitiveType'](_0x578eee){var _0x153dac=_0x4248d6;return _0x578eee===_0x153dac(0x16b)||_0x578eee===_0x153dac(0x13c)||_0x578eee===_0x153dac(0x135);}[_0x4248d6(0x163)](_0x13250b){var _0x289843=_0x4248d6;return _0x13250b===_0x289843(0x19c)||_0x13250b==='String'||_0x13250b===_0x289843(0x17c);}[_0x4248d6(0xf7)](_0x45b196,_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3){var _0x5b97f2=this;return function(_0x4a4e4b){var _0x21f6c7=_0x394b,_0x104c97=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0xdd)],_0x4c3709=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x1a8)],_0x702bea=_0x413025[_0x21f6c7(0x1ad)]['parent'];_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x104c97,_0x413025['node']['index']=typeof _0x35730f==_0x21f6c7(0x135)?_0x35730f:_0x4a4e4b,_0x45b196[_0x21f6c7(0x134)](_0x5b97f2[_0x21f6c7(0x181)](_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3)),_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x702bea,_0x413025[_0x21f6c7(0x1ad)]['index']=_0x4c3709;};}[_0x4248d6(0x108)](_0x4609e5,_0x15cfe4,_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359){var _0x4cf52b=_0x4248d6,_0x40276a=this;return _0x15cfe4['_p_'+_0x356575[_0x4cf52b(0x14d)]()]=!0x0,function(_0x3325f7){var _0x2b8d06=_0x4cf52b,_0x2eeeea=_0x357193['node'][_0x2b8d06(0xdd)],_0x23c718=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)],_0x14d3c3=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)];_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)]=_0x2eeeea,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x3325f7,_0x4609e5[_0x2b8d06(0x134)](_0x40276a[_0x2b8d06(0x181)](_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359)),_0x357193['node'][_0x2b8d06(0x160)]=_0x14d3c3,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x23c718;};}['_property'](_0x9ab64f,_0x4d90b9,_0x183599,_0xd58b2b,_0x43af40){var _0x14708=_0x4248d6,_0x446500=this;_0x43af40||(_0x43af40=function(_0x4bdfb1,_0x4bdc4d){return _0x4bdfb1[_0x4bdc4d];});var _0x182c0f=_0x183599[_0x14708(0x14d)](),_0x5b3e54=_0xd58b2b[_0x14708(0x13f)]||{},_0x527792=_0xd58b2b['depth'],_0x508312=_0xd58b2b['isExpressionToEvaluate'];try{var _0x521058=this[_0x14708(0x143)](_0x9ab64f),_0x4123ea=_0x182c0f;_0x521058&&_0x4123ea[0x0]==='\\x27'&&(_0x4123ea=_0x4123ea[_0x14708(0x112)](0x1,_0x4123ea['length']-0x2));var _0x26de9a=_0xd58b2b['expressionsToEvaluate']=_0x5b3e54[_0x14708(0x12e)+_0x4123ea];_0x26de9a&&(_0xd58b2b[_0x14708(0x129)]=_0xd58b2b['depth']+0x1),_0xd58b2b['isExpressionToEvaluate']=!!_0x26de9a;var _0x53a6b3=typeof _0x183599==_0x14708(0x176),_0x31790b={'name':_0x53a6b3||_0x521058?_0x182c0f:this[_0x14708(0x196)](_0x182c0f)};if(_0x53a6b3&&(_0x31790b[_0x14708(0x176)]=!0x0),!(_0x4d90b9===_0x14708(0xfb)||_0x4d90b9===_0x14708(0xe2))){var _0x428e2f=this['_getOwnPropertyDescriptor'](_0x9ab64f,_0x183599);if(_0x428e2f&&(_0x428e2f['set']&&(_0x31790b['setter']=!0x0),_0x428e2f[_0x14708(0x1a5)]&&!_0x26de9a&&!_0xd58b2b[_0x14708(0x18d)]))return _0x31790b[_0x14708(0x173)]=!0x0,this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x5786e9;try{_0x5786e9=_0x43af40(_0x9ab64f,_0x183599);}catch(_0x396ba8){return _0x31790b={'name':_0x182c0f,'type':'unknown','error':_0x396ba8[_0x14708(0xe6)]},this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x52ddfc=this['_type'](_0x5786e9),_0x1f051f=this[_0x14708(0x115)](_0x52ddfc);if(_0x31790b['type']=_0x52ddfc,_0x1f051f)this['_processTreeNodeResult'](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x1b14f0=_0x14708;_0x31790b[_0x1b14f0(0x17f)]=_0x5786e9['valueOf'](),!_0x26de9a&&_0x446500[_0x1b14f0(0xe3)](_0x52ddfc,_0x31790b,_0xd58b2b,{});});else{var _0x348206=_0xd58b2b[_0x14708(0x182)]&&_0xd58b2b['level']<_0xd58b2b[_0x14708(0x167)]&&_0xd58b2b[_0x14708(0xe8)]['indexOf'](_0x5786e9)<0x0&&_0x52ddfc!==_0x14708(0xea)&&_0xd58b2b[_0x14708(0x175)]<_0xd58b2b[_0x14708(0xe1)];_0x348206||_0xd58b2b[_0x14708(0x107)]<_0x527792||_0x26de9a?(this[_0x14708(0x1b6)](_0x31790b,_0x5786e9,_0xd58b2b,_0x26de9a||{}),this['_additionalMetadata'](_0x5786e9,_0x31790b)):this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x2385ba=_0x14708;_0x52ddfc===_0x2385ba(0x159)||_0x52ddfc==='undefined'||(delete _0x31790b[_0x2385ba(0x17f)],_0x31790b[_0x2385ba(0x125)]=!0x0);});}return _0x31790b;}finally{_0xd58b2b['expressionsToEvaluate']=_0x5b3e54,_0xd58b2b[_0x14708(0x129)]=_0x527792,_0xd58b2b[_0x14708(0x153)]=_0x508312;}}[_0x4248d6(0xe3)](_0x305781,_0x1212b3,_0x3beb27,_0x522683){var _0x4d2057=_0x4248d6,_0x2b2a31=_0x522683['strLength']||_0x3beb27[_0x4d2057(0x185)];if((_0x305781===_0x4d2057(0x13c)||_0x305781===_0x4d2057(0x101))&&_0x1212b3[_0x4d2057(0x17f)]){let _0x15d632=_0x1212b3['value'][_0x4d2057(0x15e)];_0x3beb27[_0x4d2057(0x104)]+=_0x15d632,_0x3beb27[_0x4d2057(0x104)]>_0x3beb27['totalStrLength']?(_0x1212b3['capped']='',delete _0x1212b3['value']):_0x15d632>_0x2b2a31&&(_0x1212b3[_0x4d2057(0x125)]=_0x1212b3[_0x4d2057(0x17f)][_0x4d2057(0x112)](0x0,_0x2b2a31),delete _0x1212b3['value']);}}['_isMap'](_0x2ac54f){var _0x1921a0=_0x4248d6;return!!(_0x2ac54f&&_0x319751['Map']&&this[_0x1921a0(0x177)](_0x2ac54f)===_0x1921a0(0x1a9)&&_0x2ac54f[_0x1921a0(0x1ac)]);}['_propertyName'](_0x53ffeb){var _0x2f97d5=_0x4248d6;if(_0x53ffeb[_0x2f97d5(0x12f)](/^\\d+$/))return _0x53ffeb;var _0x2b8f72;try{_0x2b8f72=JSON[_0x2f97d5(0x11a)](''+_0x53ffeb);}catch{_0x2b8f72='\\x22'+this[_0x2f97d5(0x177)](_0x53ffeb)+'\\x22';}return _0x2b8f72[_0x2f97d5(0x12f)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2b8f72=_0x2b8f72['substr'](0x1,_0x2b8f72[_0x2f97d5(0x15e)]-0x2):_0x2b8f72=_0x2b8f72[_0x2f97d5(0x130)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x2f97d5(0x130)](/(^\"|\"$)/g,'\\x27'),_0x2b8f72;}[_0x4248d6(0x1b4)](_0x5beb6d,_0x4cc6c2,_0x55db92,_0x5a76f6){var _0x813bc8=_0x4248d6;this[_0x813bc8(0x140)](_0x5beb6d,_0x4cc6c2),_0x5a76f6&&_0x5a76f6(),this[_0x813bc8(0xdf)](_0x55db92,_0x5beb6d),this[_0x813bc8(0x109)](_0x5beb6d,_0x4cc6c2);}['_treeNodePropertiesBeforeFullValue'](_0x3c6961,_0x172ffa){var _0x174417=_0x4248d6;this[_0x174417(0x13e)](_0x3c6961,_0x172ffa),this[_0x174417(0x188)](_0x3c6961,_0x172ffa),this['_setNodeExpressionPath'](_0x3c6961,_0x172ffa),this[_0x174417(0x117)](_0x3c6961,_0x172ffa);}[_0x4248d6(0x13e)](_0x232fb1,_0x1546dc){}[_0x4248d6(0x188)](_0x1b55ca,_0x1dc1b0){}[_0x4248d6(0x1a7)](_0x290ddd,_0x5ea425){}[_0x4248d6(0xed)](_0x3c1026){return _0x3c1026===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x5816de,_0x51ad0f){var _0x4e3207=_0x4248d6;this[_0x4e3207(0x1a7)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x195)](_0x5816de),_0x51ad0f[_0x4e3207(0xe4)]&&this['_sortProps'](_0x5816de),this[_0x4e3207(0x11c)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x19b)](_0x5816de,_0x51ad0f),this['_cleanNode'](_0x5816de);}[_0x4248d6(0xdf)](_0x3cc52c,_0x4d38a7){var _0x41e4dd=_0x4248d6;let _0x53c9b7;try{_0x319751[_0x41e4dd(0xf9)]&&(_0x53c9b7=_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)],_0x319751[_0x41e4dd(0xf9)]['error']=function(){}),_0x3cc52c&&typeof _0x3cc52c[_0x41e4dd(0x15e)]==_0x41e4dd(0x135)&&(_0x4d38a7[_0x41e4dd(0x15e)]=_0x3cc52c[_0x41e4dd(0x15e)]);}catch{}finally{_0x53c9b7&&(_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)]=_0x53c9b7);}if(_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x135)||_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x17c)){if(isNaN(_0x4d38a7['value']))_0x4d38a7[_0x41e4dd(0x19a)]=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];else switch(_0x4d38a7[_0x41e4dd(0x17f)]){case Number[_0x41e4dd(0xf1)]:_0x4d38a7[_0x41e4dd(0x199)]=!0x0,delete _0x4d38a7['value'];break;case Number['NEGATIVE_INFINITY']:_0x4d38a7['negativeInfinity']=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];break;case 0x0:this['_isNegativeZero'](_0x4d38a7[_0x41e4dd(0x17f)])&&(_0x4d38a7[_0x41e4dd(0x161)]=!0x0);break;}}else _0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0xea)&&typeof _0x3cc52c[_0x41e4dd(0x106)]==_0x41e4dd(0x13c)&&_0x3cc52c[_0x41e4dd(0x106)]&&_0x4d38a7['name']&&_0x3cc52c[_0x41e4dd(0x106)]!==_0x4d38a7['name']&&(_0x4d38a7[_0x41e4dd(0x146)]=_0x3cc52c['name']);}['_isNegativeZero'](_0x545d70){var _0x3f5f78=_0x4248d6;return 0x1/_0x545d70===Number[_0x3f5f78(0x157)];}[_0x4248d6(0x178)](_0x48342d){var _0x1133ce=_0x4248d6;!_0x48342d[_0x1133ce(0x19d)]||!_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x15e)]||_0x48342d['type']===_0x1133ce(0xfb)||_0x48342d[_0x1133ce(0x191)]==='Map'||_0x48342d[_0x1133ce(0x191)]===_0x1133ce(0x16c)||_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x17b)](function(_0x358f74,_0x251519){var _0x197d94=_0x1133ce,_0xba1944=_0x358f74[_0x197d94(0x106)][_0x197d94(0x18f)](),_0x138aff=_0x251519[_0x197d94(0x106)]['toLowerCase']();return _0xba1944<_0x138aff?-0x1:_0xba1944>_0x138aff?0x1:0x0;});}[_0x4248d6(0x11c)](_0x180095,_0x94a7be){var _0xb3b43a=_0x4248d6;if(!(_0x94a7be[_0xb3b43a(0x12b)]||!_0x180095[_0xb3b43a(0x19d)]||!_0x180095[_0xb3b43a(0x19d)]['length'])){for(var _0x46653e=[],_0x80c338=[],_0x142411=0x0,_0x2d6021=_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x15e)];_0x142411<_0x2d6021;_0x142411++){var _0x413289=_0x180095[_0xb3b43a(0x19d)][_0x142411];_0x413289[_0xb3b43a(0x191)]===_0xb3b43a(0xea)?_0x46653e[_0xb3b43a(0x134)](_0x413289):_0x80c338[_0xb3b43a(0x134)](_0x413289);}if(!(!_0x80c338[_0xb3b43a(0x15e)]||_0x46653e['length']<=0x1)){_0x180095[_0xb3b43a(0x19d)]=_0x80c338;var _0x2274df={'functionsNode':!0x0,'props':_0x46653e};this[_0xb3b43a(0x13e)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x1a7)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x195)](_0x2274df),this[_0xb3b43a(0x117)](_0x2274df,_0x94a7be),_0x2274df['id']+='\\x20f',_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x119)](_0x2274df);}}}[_0x4248d6(0x19b)](_0x488e07,_0x30da5f){}[_0x4248d6(0x195)](_0x2fb9ca){}[_0x4248d6(0xd4)](_0x46e88e){var _0x1167c4=_0x4248d6;return Array[_0x1167c4(0xfa)](_0x46e88e)||typeof _0x46e88e=='object'&&this[_0x1167c4(0x177)](_0x46e88e)===_0x1167c4(0x114);}['_setNodePermissions'](_0x3144a8,_0xd8d5c7){}['_cleanNode'](_0x349cb4){var _0x2a5872=_0x4248d6;delete _0x349cb4[_0x2a5872(0x148)],delete _0x349cb4[_0x2a5872(0x18a)],delete _0x349cb4[_0x2a5872(0x15b)];}[_0x4248d6(0x164)](_0x1387b6,_0x59de70){}}let _0x59cd6d=new _0x3187a7(),_0x11e492={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0xb7e3db={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x2e8232(_0xcfd290,_0x3e941f,_0x3283c2,_0x23065e,_0x2a7f01,_0x38778e){var _0x42ca29=_0x4248d6;let _0x401ff6,_0x4885de;try{_0x4885de=_0x299da3(),_0x401ff6=_0x2408ba[_0x3e941f],!_0x401ff6||_0x4885de-_0x401ff6['ts']>0x1f4&&_0x401ff6[_0x42ca29(0x100)]&&_0x401ff6[_0x42ca29(0x1a4)]/_0x401ff6[_0x42ca29(0x100)]<0x64?(_0x2408ba[_0x3e941f]=_0x401ff6={'count':0x0,'time':0x0,'ts':_0x4885de},_0x2408ba[_0x42ca29(0x10f)]={}):_0x4885de-_0x2408ba[_0x42ca29(0x10f)]['ts']>0x32&&_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]&&_0x2408ba[_0x42ca29(0x10f)]['time']/_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]<0x64&&(_0x2408ba[_0x42ca29(0x10f)]={});let _0x3905d7=[],_0x5c3a59=_0x401ff6['reduceLimits']||_0x2408ba[_0x42ca29(0x10f)]['reduceLimits']?_0xb7e3db:_0x11e492,_0x4072d6=_0x9c85d2=>{var _0x5754ea=_0x42ca29;let _0xec7735={};return _0xec7735[_0x5754ea(0x19d)]=_0x9c85d2[_0x5754ea(0x19d)],_0xec7735[_0x5754ea(0x162)]=_0x9c85d2[_0x5754ea(0x162)],_0xec7735[_0x5754ea(0x185)]=_0x9c85d2[_0x5754ea(0x185)],_0xec7735['totalStrLength']=_0x9c85d2[_0x5754ea(0x155)],_0xec7735[_0x5754ea(0xe1)]=_0x9c85d2[_0x5754ea(0xe1)],_0xec7735[_0x5754ea(0x167)]=_0x9c85d2[_0x5754ea(0x167)],_0xec7735[_0x5754ea(0xe4)]=!0x1,_0xec7735[_0x5754ea(0x12b)]=!_0x5d267a,_0xec7735[_0x5754ea(0x129)]=0x1,_0xec7735[_0x5754ea(0x107)]=0x0,_0xec7735['expId']=_0x5754ea(0xff),_0xec7735[_0x5754ea(0x179)]=_0x5754ea(0xfd),_0xec7735[_0x5754ea(0x182)]=!0x0,_0xec7735[_0x5754ea(0xe8)]=[],_0xec7735[_0x5754ea(0x175)]=0x0,_0xec7735[_0x5754ea(0x18d)]=!0x0,_0xec7735[_0x5754ea(0x104)]=0x0,_0xec7735[_0x5754ea(0x1ad)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0xec7735;};for(var _0x4edb78=0x0;_0x4edb78<_0x2a7f01[_0x42ca29(0x15e)];_0x4edb78++)_0x3905d7[_0x42ca29(0x134)](_0x59cd6d['serialize']({'timeNode':_0xcfd290===_0x42ca29(0x1a4)||void 0x0},_0x2a7f01[_0x4edb78],_0x4072d6(_0x5c3a59),{}));if(_0xcfd290==='trace'){let _0x34cb91=Error[_0x42ca29(0x10b)];try{Error[_0x42ca29(0x10b)]=0x1/0x0,_0x3905d7[_0x42ca29(0x134)](_0x59cd6d[_0x42ca29(0x1b6)]({'stackNode':!0x0},new Error()['stack'],_0x4072d6(_0x5c3a59),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x34cb91;}}return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':_0x3905d7,'id':_0x3e941f,'context':_0x38778e}]};}catch(_0x48f0ce){return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':[{'type':_0x42ca29(0x113),'error':_0x48f0ce&&_0x48f0ce['message']}],'id':_0x3e941f,'context':_0x38778e}]};}finally{try{if(_0x401ff6&&_0x4885de){let _0x2ff189=_0x299da3();_0x401ff6['count']++,_0x401ff6[_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x401ff6['ts']=_0x2ff189,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]++,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x2408ba[_0x42ca29(0x10f)]['ts']=_0x2ff189,(_0x401ff6['count']>0x32||_0x401ff6[_0x42ca29(0x1a4)]>0x64)&&(_0x401ff6[_0x42ca29(0x144)]=!0x0),(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]>0x3e8||_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]>0x12c)&&(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x144)]=!0x0);}}catch{}}}return _0x2e8232;}((_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x4e0e77,_0x37052b,_0x203bb4,_0x2f9931,_0x366303)=>{var _0x521a84=_0x30d46c;if(_0x3080e0['_console_ninja'])return _0x3080e0[_0x521a84(0xf4)];if(!J(_0x3080e0,_0x203bb4,_0x4b7e45))return _0x3080e0['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x3080e0[_0x521a84(0xf4)];let _0x3493fc=W(_0x3080e0),_0x4cad30=_0x3493fc[_0x521a84(0xf0)],_0x819273=_0x3493fc[_0x521a84(0x16d)],_0x544cc2=_0x3493fc[_0x521a84(0x149)],_0x3eb3e6={'hits':{},'ts':{}},_0x25ff14=Y(_0x3080e0,_0x2f9931,_0x3eb3e6,_0x4e0e77),_0x192300=_0x25873f=>{_0x3eb3e6['ts'][_0x25873f]=_0x819273();},_0x44f510=(_0x5562fd,_0x2f6706)=>{var _0x2ecd66=_0x521a84;let _0x2cc916=_0x3eb3e6['ts'][_0x2f6706];if(delete _0x3eb3e6['ts'][_0x2f6706],_0x2cc916){let _0x1f5842=_0x4cad30(_0x2cc916,_0x819273());_0x53751c(_0x25ff14(_0x2ecd66(0x1a4),_0x5562fd,_0x544cc2(),_0xf489e2,[_0x1f5842],_0x2f6706));}},_0x18f78b=_0x27e533=>_0x74adcc=>{var _0x53f31a=_0x521a84;try{_0x192300(_0x74adcc),_0x27e533(_0x74adcc);}finally{_0x3080e0[_0x53f31a(0xf9)][_0x53f31a(0x1a4)]=_0x27e533;}},_0x1553d8=_0x4b624b=>_0x5ca441=>{var _0x2ffff7=_0x521a84;try{let [_0x5e2d86,_0x46db52]=_0x5ca441[_0x2ffff7(0x13d)](_0x2ffff7(0x17d));_0x44f510(_0x46db52,_0x5e2d86),_0x4b624b(_0x5e2d86);}finally{_0x3080e0[_0x2ffff7(0xf9)][_0x2ffff7(0x142)]=_0x4b624b;}};_0x3080e0[_0x521a84(0xf4)]={'consoleLog':(_0x18e280,_0x1f4d15)=>{var _0x1b98f5=_0x521a84;_0x3080e0['console'][_0x1b98f5(0x1a0)][_0x1b98f5(0x106)]!==_0x1b98f5(0x123)&&_0x53751c(_0x25ff14(_0x1b98f5(0x1a0),_0x18e280,_0x544cc2(),_0xf489e2,_0x1f4d15));},'consoleTrace':(_0x4c956b,_0xcddb11)=>{var _0x5dd028=_0x521a84;_0x3080e0[_0x5dd028(0xf9)][_0x5dd028(0x1a0)][_0x5dd028(0x106)]!==_0x5dd028(0x110)&&_0x53751c(_0x25ff14(_0x5dd028(0x156),_0x4c956b,_0x544cc2(),_0xf489e2,_0xcddb11));},'consoleTime':()=>{var _0x10a308=_0x521a84;_0x3080e0['console'][_0x10a308(0x1a4)]=_0x18f78b(_0x3080e0['console'][_0x10a308(0x1a4)]);},'consoleTimeEnd':()=>{var _0x44a884=_0x521a84;_0x3080e0[_0x44a884(0xf9)]['timeEnd']=_0x1553d8(_0x3080e0[_0x44a884(0xf9)][_0x44a884(0x142)]);},'autoLog':(_0x479660,_0xd1686c)=>{var _0x40646e=_0x521a84;_0x53751c(_0x25ff14(_0x40646e(0x1a0),_0xd1686c,_0x544cc2(),_0xf489e2,[_0x479660]));},'autoLogMany':(_0x91fed5,_0x40a84f)=>{var _0x7344e1=_0x521a84;_0x53751c(_0x25ff14(_0x7344e1(0x1a0),_0x91fed5,_0x544cc2(),_0xf489e2,_0x40a84f));},'autoTrace':(_0x3546f7,_0x3d8eb5)=>{var _0x25512f=_0x521a84;_0x53751c(_0x25ff14(_0x25512f(0x156),_0x3d8eb5,_0x544cc2(),_0xf489e2,[_0x3546f7]));},'autoTraceMany':(_0x2b722f,_0x2df03b)=>{var _0x20acf1=_0x521a84;_0x53751c(_0x25ff14(_0x20acf1(0x156),_0x2b722f,_0x544cc2(),_0xf489e2,_0x2df03b));},'autoTime':(_0x297194,_0x1a6b68,_0x59d60b)=>{_0x192300(_0x59d60b);},'autoTimeEnd':(_0x4b1174,_0x19e4f9,_0x3e9773)=>{_0x44f510(_0x19e4f9,_0x3e9773);},'coverage':_0x169035=>{var _0x94fdd=_0x521a84;_0x53751c({'method':_0x94fdd(0x187),'version':_0x4e0e77,'args':[{'id':_0x169035}]});}};let _0x53751c=b(_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x366303),_0xf489e2=_0x3080e0[_0x521a84(0xd3)];return _0x3080e0[_0x521a84(0xf4)];})(globalThis,_0x30d46c(0xe0),_0x30d46c(0xcc),\"c:\\\\Users\\\\USER\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.240\\\\node_modules\",_0x30d46c(0x17a),_0x30d46c(0xf2),_0x30d46c(0xd9),_0x30d46c(0x1aa),_0x30d46c(0x103),_0x30d46c(0xee));");
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
  return __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_14__["LazyLoadImage"], {
    src: "assets/images/wine.png",
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
  const coupleName = coupleNameFormat === 'GROOM_FIRST' ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, groomName, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, "&"), " ", brideName) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, brideName, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 220,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1703421768",
    __self: undefined
  }, "a.react-add-to-calendar__button span{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxhZGV3YWxlLXdlZGRpbmctaW52aXRlXFxwYWdlc1xcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZOUyxBQUc0QixlQUNXLDREQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcYWRld2FsZS13ZWRkaW5nLWludml0ZVxccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IFN0b3JpZXMgZnJvbSAnLi9zdG9yaWVzJztcbmltcG9ydCBQaWN0dXJlc0dyaWQgZnJvbSAnLi9waWN0dXJlR3JpZCc7XG5pbXBvcnQgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSBmcm9tICcuL2NvbGxlY3QtZ3Vlc3QtYXR0ZW5kYW5jZSc7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XG5cbmNvbnN0IExvdmVUaXRsZUljb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExhenlMb2FkSW1hZ2VcbiAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy93aW5lLnBuZydcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgIGhlaWdodDogJzgwcHgnLFxuICAgICAgfX1cbiAgICAgIGVmZmVjdD0nYmx1cidcbiAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICBhbHQ9J3dpbmUgaWxsdXN0cmF0b3InXG4gICAgLz5cbiAgKTtcbn07XG5jb25zdCBFdmVudERhdGVJY29uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9JzM1JyBoZWlnaHQ9Jzc4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTIwLjM1NSAxMi4wODNjLTEuNjQzLTEuNjItMi4xNTYtNC43Ny40MS01LjgzIDEuMTg3LS40OSAyLjY4LS4zNjUgMy45MjgtLjIyNyAxLjI4Ni4xNDMgMi41NTIuNDE3IDMuNzcuODU2IDIuMTczLjc4NSA1LjE4NCAyLjE2NCA2LjAyNyA0LjUxLjk5MyAyLjc2Mi0xLjk2OCA0LjEwNy00LjE1NSA0LjQ3NC0yLjc3NS40NjUtNS43MDYuNDE3LTguNTEzLjMzOC0yLjY5NC0uMDc2LTUuNDU0LS4zNzUtNy45OC0xLjM2Ni0yLjI3LS44OTItNC41OS0yLjMzMy01LjcyMy00LjU4LTEuMDQzLTIuMDY2LS44MzYtNC41NDEuNDc1LTYuNDQ0QzEwLjQgMS4xOTMgMTMuNDIyLjY5IDE2LjM4MS4zMzdBNDkuNDYyIDQ5LjQ2MiAwIDAgMSAyNy4zMDcuMjdjMS4yLjEyMyAxLjIxMiAyLjAxNyAwIDEuODkzYTQ5Ljg3NyA0OS44NzcgMCAwIDAtNy40MTItLjIyM2MtMi4yNjUuMTA1LTQuNjcxLjI0LTYuODUuOTAyLTEuODA3LjU0OS0zLjIzMiAxLjg4Mi0zLjYyNyAzLjc3LS40MTQgMS45NzguNzA4IDMuNzMyIDIuMjMgNC45MDMgMy4yNSAyLjUgNy42NzIgMi44MTEgMTEuNjE1IDIuODE3IDIuMjI1LjAwNCA0LjU1LjA3NCA2Ljc0NS0uMzIuODA0LS4xNDQgMS44OTUtLjMyIDIuNDg0LS45NTcuODE0LS44OC0uMzItMS45MzgtMS4wMS0yLjQ2Ny0xLjgzLTEuNDA2LTQuMTQ0LTIuMjgzLTYuNDE2LTIuNjE5LS45NzktLjE0NS0yLjU3OS0uNDEzLTMuNTIgMC0xLjI5NC41Ny0uNTc2IDIuMDYzLjE0NyAyLjc3Ny44Ny44NTYtLjQ3IDIuMTk0LTEuMzM4IDEuMzM4WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMzQuMDIzIDEzLjcyN2MtMS40OTQgNS40NS0zLjE1OCAxMC45MzMtNy4wOTkgMTUuMTU3YTIyLjM5IDIyLjM5IDAgMCAxLTYuMDMgNC41ODFjLTIuMzIzIDEuMjA1LTUuMTMgMi4zODUtNy43ODEgMS44MjgtMS4xOS0uMjUtLjY4Ny0yLjA3NS41MDMtMS44MjUgMi4yOTIuNDggNS4wMi0uODg4IDYuOTctMS45ODZhMjAuODA4IDIwLjgwOCAwIDAgMCA1LjM5Ni00LjM3M2MzLjQ0Ni0zLjkwNCA0Ljg2OS04Ljk3IDYuMjE2LTEzLjg4NC4zMi0xLjE3NCAyLjE0Ny0uNjc2IDEuODI1LjUwMlonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTkuMDI4IDcuOTIzYy0xLjI2NiA4LjM0NC0yLjU5IDE4LjM3IDMuNzIyIDI1LjEzMy44My44OS0uNTA1IDIuMjMxLTEuMzM4IDEuMzM5LTYuODQtNy4zMzEtNS41ODctMTcuODkzLTQuMjEtMjYuOTc0LjE4My0xLjIgMi4wMDYtLjY5IDEuODI2LjUwMlonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTE0Ljg3NyAzNC4zNDNjLTEuOTE4IDE0LjA3NC0xLjM0OSAyOC40NiAxLjYzNiA0Mi4zNDQuMjU1IDEuMTg3LTEuNTY5IDEuNjk1LTEuODI1LjUwM2ExMjUuNjU0IDEyNS42NTQgMCAwIDEtMS42MzYtNDMuMzVjLjE2NC0xLjIwMiAxLjk4OC0uNjkgMS44MjUuNTAzWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMTAuMzQgNjAuODkxYy0uNDE2LTQuNjU2LTMuODQ1LTguODYtOC4yOS0xMC4yNi0xLjE1OC0uMzY1LS42NjQtMi4xOTMuNTAyLTEuODI1IDUuMzAxIDEuNjcgOS4xODYgNi41NjIgOS42OCAxMi4wODUuMTA4IDEuMjEyLTEuNzg1IDEuMjA1LTEuODkzIDBaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00zLjE5NyA0OS45MmMtLjczIDEuMzg2LS45MiAyLjkzNy0uOTYgNC40ODQtLjAzNyAxLjQ3Ni0uMjU5IDMuMjQ2LjczOSA0LjQ2LjkyIDEuMTIgMi4yNzEgMS45NTYgMy41MyAyLjY0M2ExNy41OTUgMTcuNTk1IDAgMCAwIDQuNDAyIDEuNjYyYzEuMTg0LjI4LjY4MyAyLjEwNS0uNTAzIDEuODI1YTE5LjM3IDE5LjM3IDAgMCAxLTUuMDctMS45NzRjLTEuNTE1LS44NTUtMy4xMDYtMS45MjItNC4xMi0zLjM2MkMuMTUzIDU4LjE1LjMgNTYuMTYzLjM0NSA1NC40MDRjLjA0OS0xLjg5LjMyNy0zLjc1IDEuMjE3LTUuNDQuNTY5LTEuMDc3IDIuMjAyLS4xMjIgMS42MzUuOTU2WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNNy45MTkgNTguMDI2YzEuMzYgMS43MiAyLjcyMyAzLjQ0IDQuMDg0IDUuMTYuMzA2LjM4OC40MDYuOTY1IDAgMS4zMzktLjM0Mi4zMTMtMS4wMS40MTQtMS4zMzggMEw2LjU4IDU5LjM2M2MtLjMwNi0uMzg3LS40MDYtLjk2NSAwLTEuMzM3LjM0Mi0uMzE0IDEuMDEtLjQxNSAxLjMzOSAwWk0xMi42MjkgNTEuODg0YTI4LjA4IDI4LjA4IDAgMCAxIDE3LjQxOC02LjYyOGMxLjIxOS0uMDMgMS4yMTggMS44NjMgMCAxLjg5Mi01Ljg2My4xNC0xMS41OTQgMi4yODgtMTYuMDggNi4wNzQtLjkyNi43ODItMi4yNy0uNTUtMS4zMzgtMS4zMzhaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00zMi4yNjcgNDYuNjczYy0xLjIxIDQuMjM0LTQuMDcyIDguMTQyLTguMDU0IDEwLjE1LTMuNzgzIDEuOTA2LTguNjIzIDEuNzUzLTExLjY0OS0xLjQ4LS44MzEtLjg4OS41MDQtMi4yMyAxLjMzOC0xLjMzOCAyLjYgMi43NzYgNi43MzUgMi42NzYgOS44NzIuOTA3IDMuMjk3LTEuODU3IDUuNjM4LTUuMTM4IDYuNjY5LTguNzQyLjMzNC0xLjE2OSAyLjE2LS42NzIgMS44MjQuNTAzWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMTQuMzUgNTMuMTM4YTQwLjcwNyA0MC43MDcgMCAwIDEgNS45MTItMS41MzNjLjQ4NS0uMDg3IDEuMDQzLjEzMiAxLjE2My42NjEuMTA1LjQ2My0uMTQgMS4wNy0uNjYgMS4xNjVhNDAuNjE2IDQwLjYxNiAwIDAgMC01LjkxMyAxLjUzM2MtLjQ2OC4xNi0xLjA1NC0uMTg0LTEuMTYzLS42NjEtLjEyLS41MjYuMTU4LS45OTMuNjYtMS4xNjVaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmNvbnN0IEhlYWRlckxvZ28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmVCbG9jaycsXG4gICAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwcHgsIDBweCkgcm90YXRlKDBkZWcpIHNjYWxlKDEpJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHN2ZyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIGZpbGw9J25vbmUnPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9J20zNC42MTMgMjcuNzM3IDEuNDM3LjA4OGE2LjExMSA2LjExMSAwIDAgMSAxLjkyNS4yYy4zNS4yLjUzOC40NzUuMS43NjItLjQzNy4yODgtMS4xIDAtMS41IDAtLjQgMC0uOTI1LS4xLTEuNC0uMTI1YTMuMjk2IDMuMjk2IDAgMCAwLTEuMDUgMGMtLjM1LjExMy0uMjg3LjIxMy0uNDg3LjYxM2E3LjU3NyA3LjU3NyAwIDAgMS0xLjc2MyAyLjE1Yy0xLjQ2MiAxLjI1LTMuNDUgMS4zMzctNS4xNjIgMi4wODcuNDUtMi45NjIgMi43MjUtNC40MzcgNS40NzUtNS0uOTc1IDAtMi42NzUtLjg3NS0zLjUxMy0uNDYyLTEuNDg3LjYzNy0zLjc1IDEuNS00LjIxMiAzLjI1LS4yMzggMS4wNjItLjE4OCAyLjYzNy0xLjUzOCAyLjk2Mi0xLjM1LjMyNS0xLjcyNS0uOTYyLTEuNC0xLjk3NS0uODc1LjQ1LTIuMDUuMDg4LTEuODYyLTEuMDUuMTg3LTEuMTM3IDEuNTI1LTEuMjUgMi4zODctMS4zNjIgMi4yMTMtLjM1IDMuOS0xLjYyNSA1Ljk4OC0yLjI4OGEyNS44NDUgMjUuODQ1IDAgMCAwLTIuNS0xLjAyNSA2LjgzNyA2LjgzNyAwIDAgMC0yLjYuNDg4Yy0uOTIuMTE0LTEuODI4LjMxLTIuNzEzLjU4Ny0uNjQuMzQtMS4xOS44MjgtMS42IDEuNDI1LS45ODcgMS4xNjMtMi4yIDIuNS0zLjkgMi4zNzUtMi4xNS0uMi0xLjkxMi0yLjY1LS4zMjUtMy40ODctMS4wMjUgMC0yLjUtLjYzOC0yLjQtMS44NzUuMDg4LTEuNTUgMS45NjMtMS43MzggMy4xMjUtMS40MjUgMS4wOTcuNDE5IDIuMTY2LjkwNyAzLjIgMS40NjIgMS45MzguNzg4IDMuNzUgMCA1Ljc2My0uMmEzNy45OTQgMzcuOTk0IDAgMCAxLTQuNjUtMi42NzUgMi4xODcgMi4xODcgMCAwIDAtMS4zNzUtLjU1aC0xLjI1YTI3LjY3MSAyNy42NzEgMCAwIDAtMy4zNzUuMWMtLjc3NSAwLTEuMzI1LjczOC0xLjgzOCAxLjI1YTYuMTM4IDYuMTM4IDAgMCAxLTIuNSAxLjcxMyAxLjk4NyAxLjk4NyAwIDAgMS0yLjUtLjYyNUEyLjA3NSAyLjA3NSAwIDAgMSA3LjcxMyAyMi40Yy0uOTc1LS4zMjUtMi4yODgtMS4xMTMtMS40MjUtMi4zIDEuMDEyLTEuMzg4IDIuODc1LS42NSAzLjkzNy4xNWE1Ljg3NSA1Ljg3NSAwIDAgMCAyLjkzOCAxLjZjMS40ODIuMDg3IDIuOTY4LjA4NyA0LjQ1IDBhMjMuNzQgMjMuNzQgMCAwIDEtMi4wMzgtMi4wMTMgNS43ODcgNS43ODcgMCAwIDAtLjg2Mi0uOTYyYy0uODUyLS4zOC0xLjc1Mi0uNjQxLTIuNjc1LS43NzVhMTQuNTIyIDE0LjUyMiAwIDAgMC0yLjc1LS43NzUgNS42MTEgNS42MTEgMCAwIDAtMi42ODguNjI1IDYuMjUxIDYuMjUxIDAgMCAxLTMuMTM3LjUyNSAxLjk1IDEuOTUgMCAwIDEtMS42NzUtMi4wNjNjLjEyNS0xLjAzNy45ODctMS4zODcgMS44NzUtMS41NS0yLjAyNS0xLjg4Ny43NzUtMy42ODcgMi41LTIuMDEyIDEuMDI1IDEuMDEyIDEuNjM3IDIuOTEyIDIuOTEyIDMuNDI1IDEuNjEzLjY1IDMuMzc1Ljg4NyA1IDEuNjM3LS45MzctMS4yNS0xLjg1LTIuNS0yLjcyNS0zLjc1YTYuODc1IDYuODc1IDAgMCAwLTIuNzc1LTIuOTc1Yy0xLjQ4Ny0uNjc1LTMuNDUtMS40ODctMy43NS0zLjM1LS4zNS0yLjI4NyAyLjIzOC0xLjkgMy40NS0uOTVhMi4xNjMgMi4xNjMgMCAwIDEgMS40LTIuNWMxLjI1LS40ODcgMi4wMTMuNDYzIDIuMTc1IDEuNjc1LjAyNSAxLjQzOC0uNiAyLjgyNS0uODI1IDQuMzI1LS4yNjIgMi4yMTMgMi4xNSA0Ljg3NSAzLjM2MyA2LjYgMC0xLjg1LjctNC4wNjItLjI2My01Ljc4Ny0uNjI1LTEuNDI1LTIuNjEyLTMuODI1LTEuMjUtNS40MjUgMS0xLjEzOCAyLjIzOC4xMjUgMi41NzUgMS4xNWExLjQ2MiAxLjQ2MiAwIDAgMSAyLjUtLjI2M2MxLjI1IDEuNzI1LS43NSAzLjIzOC0xLjY2MiA0LjUxMy0xLjEgMS41MTItLjkgMi45NS0xLjAzOCA0LjczN2E2LjU5NyA2LjU5NyAwIDAgMC0uMTYyIDIuMDI1Yy4xMzcuNDEzLjgxMi44ODggMS4xMTIgMS4yNWEyNi45MyAyNi45MyAwIDAgMCAyLjU2MyAyLjM2M2MtLjEtMi4xLjIxMi00LjI3NS0uNTEzLTYuMjUtLjQyNS0xLjE1LTEuNC0zLjE1LS41LTQuMjg4LjktMS4xMzcgMS45LS4xMzcgMi4yNS44MTNhMi4wMjUgMi4wMjUgMCAwIDEgMi41LS42NSAxLjk1IDEuOTUgMCAwIDEgLjQyNSAyLjVjLS44NSAxLjgxMi0zLjI4NyAyLjc2Mi0zLjI4NyA0LjgyNS0uMTI1Ljk1LS4wNjMgMS45ODctLjEgMi45NWEyLjAyMyAyLjAyMyAwIDAgMCAwIC42NzVjLjEzNy4yNzUuODYyLjYxMiAxLjExMi43NzVhMzUuMzc3IDM1LjM3NyAwIDAgMCA1IDIuNjM3Yy0uMjg3LTEuMjUtLjMxMi0yLjQxMi0uNTEyLTMuNzVhNS4zMzggNS4zMzggMCAwIDAtMS4zODgtMi44MTJjLS43MzctLjk4OC0xLjUtMi42NS0uMzg3LTMuNjg4Ljg3NS0uODI1IDIuMDI1LS4wNjIgMi4zNS44ODggMS4wNS0xLjYgMy42NjItMS40MzggMy43NS43MzcuMDg3IDEuNjUtMS4zNSAyLjcyNS0yLjUgMy42MjUtLjIzMy4xNS0uNDE5LjM2My0uNTM4LjYxM2EzLjAzMyAzLjAzMyAwIDAgMC0uMTg3LjcyNWMtLjA1Ny44MzYtLjAxMSAxLjY3NS4xMzcgMi41IDAgLjUxMiAwIDEuMjUuNDEzIDEuNTEyLjUyMi4yOCAxLjA4Mi40ODIgMS42NjIuNmEyMC4xMyAyMC4xMyAwIDAgMCA0LjE4OCAxLjAzOCA2LjA3NSA2LjA3NSAwIDAgMS0yLjE4OC00LjIgOS4xIDkuMSAwIDAgMSAuOC00LjUxM2MuODI1IDEuMjUgMi4wMTMgMi4zNSAyLjc2MyAzLjY3NWE1Ljc2MyA1Ljc2MyAwIDAgMSAuMSA1LjI1Yy4xNjYuMDEzLjMzMy4wMTMuNSAwWidcbiAgICAgICAgICBmaWxsPScjREZBRTAwJ1xuICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9J00xOS41NSAxNS43ODdzMy4yNzUtMi44NSAyLjUtMy42MzdjLS43NzUtLjc4OC0yLjExMi45MTItMi4xMTIuOTEycy0uNjM4LTEuODUtMS40NjMtMS4yNWMtLjgyNS42IDEuMDc1IDMuOTc1IDEuMDc1IDMuOTc1Wk0xNS4xODggMTAuNzg4czIuOTc1LTIuOTEzIDEuOTYyLTMuNDc1Yy0xLjAxMi0uNTYzLTEuNzUgMS4yNS0xLjc1IDEuMjVzLS45NzUtMi41LTEuNzg3LTEuNzg4Yy0uODEzLjcxMyAxLjU3NSA0LjAxMyAxLjU3NSA0LjAxM1pNOS42NjIgMTAuNDM3czEuOTYzLTQuNTg3LjQ4OC00LjgzNy0xLjQgMi42LTEuNCAyLjYtMi45MTMtMS45NS0zLjExMy0uN2MtLjIzNyAxLjUyNSA0LjAyNSAyLjkzNyA0LjAyNSAyLjkzN1pNNy4zIDE2LjUxM3MtMS44LTMuNjI1LTIuOS0zLjJjLTEuMS40MjUuNDI1IDIuMS40MjUgMi4xcy0yLjA4OC4yNzUtMS45NjMgMS41MTJjLjEyNSAxLjIzOCA0LjQzOC0uNDEyIDQuNDM4LS40MTJaTTExLjY2MiAyMi41NzVTOC4zNSAxOS42NjMgNy41IDIwLjQyNWMtLjg1Ljc2MyAyLjA2MiAyLjA3NSAyLjA2MiAyLjA3NXMtMy4xIDEuNDc1LTIuMDYyIDIuMmMxLjI1Ljg4OCA0LjE2Mi0yLjEyNSA0LjE2Mi0yLjEyNVpNMTguNTg4IDI3LjM3NXMtNC42MzgtMi42MzgtNS4zNjMtMS41ODhjLS43MjUgMS4wNSAyLjc2MyAxLjgyNSAyLjc2MyAxLjgyNXMtMi44MjUgMS45MzgtMS41MTMgMi42MzhjMS4zMTMuNyA0LjExMy0yLjg3NSA0LjExMy0yLjg3NVpNMjUuODUgMjBzMy43NS0yLjUgMi4yODctMy41MTJjLTEuMTEyLS43NjMtMi41IDEuMDg3LTIuNSAxLjA4N3MtLjgxMi0yLjEtMS43MTItMS40Yy0uOS43IDEuOTI1IDMuODI1IDEuOTI1IDMuODI1Wk0yMy45NjMgMzAuMTc1cy0uNDM4IDIuODUtMS4yNSAzLjE1Yy0uODEzLjMtLjIxMy0yLjA3NS0uMjEzLTIuMDc1cy0yLjAyNS45MjUtMS45MjUgMGMuMS0uOTI1IDMuMzg4LTEuMDc1IDMuMzg4LTEuMDc1WidcbiAgICAgICAgICBmaWxsPScjRjdENDdEJ1xuICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9J00zMy4yODcgMjYuOTVhNC44ODcgNC44ODcgMCAwIDAgLjEyNS0zLjM1IDYuMzYyIDYuMzYyIDAgMCAwLTEuODg3LTMuMDVjLTEuMDYzIDQuNTM3IDEuNzYyIDYuNCAxLjc2MiA2LjRaTTMyLjc1IDI5LjE1Yy0uNjIyLjgwNC0xLjM2IDEuNTExLTIuMTg4IDIuMS0uODc0LjU1NS0xLjgyNi45NzYtMi44MjUgMS4yNWE2LjcxMyA2LjcxMyAwIDAgMSAyLjExMy0yLjEzNyAxMS41ODggMTEuNTg4IDAgMCAxIDIuOS0xLjIxM1onXG4gICAgICAgICAgZmlsbD0nI0RDQjNCNCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZUNvbmZpZyA9IChhcHBDb25maWcsIGxvY2FsZSkgPT4ge1xuICBpZiAoIWxvY2FsZSB8fCBsb2NhbGUgPT09IGRlZmF1bHRMb2NhbGUpIHtcbiAgICByZXR1cm4gYXBwQ29uZmlnO1xuICB9XG4gIC8vIFJlcGxhY2UgY29uZmlnIHdpdGggbGFuZ1xuICBjb25zdCBjb25maWdMYW5nID0gYXBwQ29uZmlnLmxhbmdbbG9jYWxlXTtcbiAgaWYgKGNvbmZpZ0xhbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBsb2NhbGU6ICcsIGxvY2FsZSk7XG4gIH1cbiAgcmV0dXJuIHsgLi4uYXBwQ29uZmlnLCAuLi5jb25maWdMYW5nIH07XG59O1xuXG5jb25zdCBTaG93SW52aXRlID0gKHsgY3VycmVudFVybCwgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCwgZ3Vlc3QgfSkgPT4ge1xuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb24oZ3Vlc3QubG9jYWxlKTtcblxuICAvLyBJbml0aWF0ZSBjb25maWcgdmFyaWFibGVzXG4gIGNvbnN0IHtcbiAgICBsb2dvLFxuICAgIG9nVGFncyxcbiAgICBjb3VwbGVJbmZvLFxuICAgIHZlbnVlLFxuICAgIHdlZGRpbmdEYXksXG4gICAgd2VkZGluZ0RhdGUsXG4gICAgd2VkZGluZ1RpbWUsXG4gICAgY2FsZW5kYXJJbmZvLFxuICB9ID0gdHJhbnNsYXRlQ29uZmlnKGFwcENvbmZpZywgZ3Vlc3QubG9jYWxlKTtcbiAgY29uc3QgeyBicmlkZU5hbWUsIGdyb29tTmFtZSwgaGFzaHRhZywgY291cGxlTmFtZUZvcm1hdCB9ID0gY291cGxlSW5mbztcblxuICBjb25zdCBjb3VwbGVOYW1lU3RyID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnXG4gICAgICA/IGAke2dyb29tTmFtZX0gJiAke2JyaWRlTmFtZX1gXG4gICAgICA6IGAke2JyaWRlTmFtZX0gJiAke2dyb29tTmFtZX1gO1xuICBjb25zdCBjb3VwbGVOYW1lID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnID8gKFxuICAgICAgPD5cbiAgICAgICAge2dyb29tTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHticmlkZU5hbWV9XG4gICAgICA8Lz5cbiAgICApIDogKFxuICAgICAgPD5cbiAgICAgICAge2JyaWRlTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHtncm9vbU5hbWV9XG4gICAgICA8Lz5cbiAgICApO1xuXG4gIC8vIFZlbnVlIGluZm9cbiAgY29uc3QgdmVudWVCcmllZiA9IGAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9LCAke3ZlbnVlLmNvdW50cnl9YDtcbiAgY29uc3Qgd2VkZGluZ0RhdGVCcmllZiA9IGAke3dlZGRpbmdEYXl9LCAke3dlZGRpbmdEYXRlfWA7XG5cbiAgLy8gRXZlbnQgaW5mb1xuICBjb25zdCBldmVudFRpdGxlID0gYCR7Y291cGxlTmFtZVN0cn0ncyBXZWRkaW5nYDtcbiAgbGV0IGV2ZW50RGVzY3JpcHRpb24gPSBgJHt3ZWRkaW5nRGF0ZUJyaWVmfSBhdCAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9YDtcbiAgaWYgKGd1ZXN0Lm5hbWUpIHtcbiAgICBldmVudERlc2NyaXB0aW9uID0gYERlYXIgJHtndWVzdC5uYW1lfSwgeW91IGFyZSBjb3JkaWFsbHkgaW52aXRlZCB0byBvdXIgd2VkZGluZyBvbiAke3dlZGRpbmdEYXRlfSBhdCAke3ZlbnVlLm5hbWV9LiBMb29raW5nIGZvcndhcmQgdG8gc2VlaW5nIHlvdSFgO1xuICB9XG5cbiAgLy8gQ2FsZW5kYXIgcGF5bG9hZFxuICBjb25zdCBjYWxlbmRhckV2ZW50ID0ge1xuICAgIHRpdGxlOiBldmVudFRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBldmVudERlc2NyaXB0aW9uLFxuICAgIGxvY2F0aW9uOiBgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWAsXG4gICAgc3RhcnRUaW1lOiBjYWxlbmRhckluZm8udGltZVN0YXJ0SVNPLFxuICAgIGVuZFRpbWU6IGNhbGVuZGFySW5mby50aW1lRW5kSVNPLFxuICB9O1xuXG4gIGNvbnN0IGV2ZW50U2NoZWR1bGUgPSBbXG4gICAge1xuICAgICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgICBldmVudDogJ0NodXJjaCcsXG4gICAgICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAgIHRpbWU6ICcxMnBtJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgICAgZXZlbnQ6ICdSZWNlcHRpb24nLFxuICAgICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgICB0aW1lOiAnMnBtJyxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgIC8vICAgZXZlbnQ6ICdFbmdhZ2VtZW50JyxcbiAgICAvLyAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgIC8vICAgdGltZTogJzJwbScsXG4gICAgLy8gfSxcbiAgXTtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dNb2RhbCh0cnVlKTtcbiAgICB9LCAxMDAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudFJlZi5jdXJyZW50O1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICBpZiAoZWxlbWVudFBvc2l0aW9uIDwgd2luZG93SGVpZ2h0ICogMC45KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC1lbGVtZW50Jyk7IC8vIEFkZCB0aGUgQ1NTIGNsYXNzIHdoZW4gdGhlIGVsZW1lbnQgaXMgNzUlIHZpc2libGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkLWVsZW1lbnQnKTsgLy8gUmVtb3ZlIHRoZSBDU1MgY2xhc3MgaWYgbm90IHZpc2libGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIFJ1biB0aGlzIGVmZmVjdCBvbmx5IG9uY2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBhLnJlYWN0LWFkZC10by1jYWxlbmRhcl9fYnV0dG9uIHNwYW4ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkXG4gICAgICAgIHsuLi5vZ1RhZ3N9XG4gICAgICAgIHRpdGxlPXtldmVudFRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZXZlbnREZXNjcmlwdGlvbn1cbiAgICAgICAgZ3Vlc3ROYW1lPXtndWVzdC5uYW1lfVxuICAgICAgICB1cmw9e2N1cnJlbnRVcmx9XG4gICAgICAgIGRhdGU9e3dlZGRpbmdEYXRlQnJpZWZ9XG4gICAgICAgIG1vZGlmaWVkVGltZT17Z3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdH1cbiAgICAgICAgdmVudWU9e3ZlbnVlQnJpZWZ9XG4gICAgICAgIGxvZ289e3Jlc29sdmVQYXRoKG9nVGFncy5sb2dvKX1cbiAgICAgICAgYXV0aG9yPXtyZXNvbHZlUGF0aCgnLycpfVxuICAgICAgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naGVhZGVyX2FyZWEnPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgPEhlYWRlckxvZ28gLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlYWRlci1sb2dvLXRleHQnPlRoZSBBa2lubGFndW4ncyBQYXJ0eTwvc3Bhbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgaWQ9J2hvbWUnIGNsYXNzTmFtZT0naGVhZGVyX3NsaWRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLWxpc3QgZHJhZ2dhYmxlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay10cmFjaycgc3R5bGU9e3sgb3BhY2l0eTogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnX2NvdmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy0xMCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfY29udGVudCB0ZXh0LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogNjAsIG1hcmdpbjogMjUsIG1hcmdpblRvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9zdWJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC4ycydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnc2l0ZUludHJvJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjdzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291cGxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc2h0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLm5hbWV9LCB7dmVudWUuY2l0eX0sIHt2ZW51ZS5jb3VudHJ5fS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGlkPSdjb21pbmdfc29vbicgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9hcmVhIHB0LTIwIHBiLTcwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX3NoYXBlXzEnIHN0eWxlPXt7IHpJbmRleDogMSB9fT5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMS5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTQnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHB0LTUwIHdvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuMnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dCgnZXZlbnREYXRlJyl9OjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3dlZGRpbmdEYXRlQnJpZWZ9PC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QWRkVG9DYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICBldmVudD17Y2FsZW5kYXJFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9e3QoJ2J0bkFkZFRvTXlDYWxlbmRhcicpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy9zZWN0aW9uX3NoYXBlLnBuZycgYWx0PSdTaGFwZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9jb3VudCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC0yMCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNjAsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZV9jb3VudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMzAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvdW50X2NvbnRlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxLCBwYWRkaW5nVG9wOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmVudWUubWFwVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy9iZXZlbnQucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2JldmVudCBjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc3NXZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUuYWRkcmVzc0xpbmUxfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8yJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMi5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiByZWY9e2VsZW1lbnRSZWZ9IGlkPSdjb250YWN0JyBjbGFzc05hbWU9J2NvbnRhY3RfYXJlYSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY29udGFjdF93cmFwcGVyIHdvdyBmYWRlSW5VcEJpZydcbiAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjRzJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJblVwJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1ldmVudExpbmV1cCc+XG4gICAgICAgICAgICAgIHtldmVudFNjaGVkdWxlLm1hcCgoZXYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0aW1lLCBkYXRlLCBldmVudCwgaWNvbiB9ID0gZXY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudExpbmV1cCcga2V5PXtldmVudH0+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtldmVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3RpbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogZm9ybSAqL31cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy05Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSB0ZXh0LWNlbnRlciBwYi0zMCc+XG4gICAgICAgICAgICAgICAgICB7Z3Vlc3QubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dCgnaW52aXRhdGlvbkdyZWV0aW5nJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjVyZW0nIH19PntndWVzdC5uYW1lfSw8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgY2xhc3NOYW1lPSdsb3ZlLXRpdGxlLWNvbnRhaW5lciBmYWRlSW5VcEJpZyBmYWRlSW4nXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPGRpdiByZWY9e2VsZW1lbnRSZWZ9PlxuICAgICAgICAgIDxMb3ZlVGl0bGVJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudFJlZn0gY2xhc3NOYW1lPSdsb3ZlLXRpdGxlJz5cbiAgICAgICAgICBNeSBoZWFydCBpcyB5b3VyIHRvIGhvbGQgYW5kIGNoZXJpc2ggZm9yIHRoZSByZXN0IG9mIG91ciBkYXlzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxhcnRpY2xlXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J3N0b3JpZXMtY29udGFpbmVyIGZhZGVJblVwQmlnJ1xuICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICA+XG4gICAgICAgIDxTdG9yaWVzIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZC1jb250YWluZXInPlxuICAgICAgICA8UGljdHVyZXNHcmlkIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgJz5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDVcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6ICcjRDNEM0QzJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgI0RXZWRkaW5nXG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaG93SW52aXRlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcbiAgY29uc3QgbG9jYWxlUGFyYW1zID0gY3R4LnF1ZXJ5LmxhbmcgfHwgZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgZW1wdHlHdWVzdFBhcmFtcyA9IHtcbiAgICBndWVzdDoge1xuICAgICAgZ3Vlc3RJZDogJycsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGdyZWV0aW5nOiAnJyxcbiAgICAgIGxvY2FsZTogbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgY3VycmVudFVybCA9IHJlc29sdmVQYXRoKGN0eC5yZXEudXJsKTtcbiAgY29uc3QgZ3Vlc3RJZCA9IGN0eC5xdWVyeS51O1xuICBpZiAoIWd1ZXN0SWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGd1ZXN0RGF0YSA9IGd1ZXN0TGlzdC5kYXRhO1xuICBjb25zdCBndWVzdExpc3RMYXN0VXBkYXRlZEF0ID0gZ3Vlc3RMaXN0Lm1ldGEubGFzdFVwZGF0ZWRBdDtcbiAgY29uc3QgeyBuYW1lLCBncmVldGluZywgbG9jYWxlIH0gPVxuICAgIGd1ZXN0RGF0YS5maWx0ZXIoKGd1ZXN0KSA9PiBndWVzdC5ndWVzdElkID09PSBndWVzdElkKVswXSB8fCB7fTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVcmwsXG4gICAgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCxcbiAgICBndWVzdDoge1xuICAgICAgbmFtZSxcbiAgICAgIGdyZWV0aW5nLFxuICAgICAgZ3Vlc3RJZCxcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0ludml0ZTtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\USER\\\\Documents\\\\adewale-wedding-invite\\\\pages\\\\index.jsx */"), __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, ogTags, {
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
      lineNumber: 229,
      columnNumber: 7
    }
  })), __jsx("section", {
    className: "jsx-1703421768" + " " + 'header_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: "jsx-1703421768" + " " + 'header-container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  }, __jsx(HeaderLogo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "jsx-1703421768" + " " + 'header-logo-text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 11
    }
  }, "The Akinlagun's Party")), __jsx("div", {
    id: "home",
    className: "jsx-1703421768" + " " + 'header_slider',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'slick-list draggable',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
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
      lineNumber: 248,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'bg_cover d-flex align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-10',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
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
      lineNumber: 253,
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
      lineNumber: 257,
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
      lineNumber: 262,
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
      lineNumber: 271,
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
      lineNumber: 279,
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
      lineNumber: 287,
      columnNumber: 25
    }
  }, venue.name, ", ", venue.city, ", ", venue.country, ".")))))))))), __jsx("section", {
    id: "coming_soon",
    className: "jsx-1703421768" + " " + 'coming_soon_area pt-20 pb-70',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
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
      lineNumber: 306,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
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
      lineNumber: 312,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 17
    }
  }, t('eventDate'), ":"), __jsx("p", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
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
      lineNumber: 326,
      columnNumber: 17
    }
  }, __jsx(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    event: calendarEvent,
    buttonLabel: t('btnAddToMyCalendar'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 19
    }
  })), __jsx("img", {
    src: "assets/images/section_shape.png",
    alt: "Shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-8',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
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
      lineNumber: 341,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_count d-flex justify-content-end pt-20',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
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
      lineNumber: 353,
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
      lineNumber: 362,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: venue.mapUrl,
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
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
      lineNumber: 367,
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
      lineNumber: 373,
      columnNumber: 23
    }
  }, venue.addressLine1)))))))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_shape_2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-2.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 11
    }
  }))), __jsx("section", {
    ref: elementRef,
    id: "contact",
    className: "jsx-1703421768" + " " + 'contact_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
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
      lineNumber: 399,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container-eventLineup',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
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
        lineNumber: 416,
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
        lineNumber: 418,
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
        lineNumber: 427,
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
        lineNumber: 436,
        columnNumber: 21
      }
    }, time));
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-9',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'section_title text-center pb-30',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
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
      lineNumber: 455,
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
      lineNumber: 464,
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
      lineNumber: 474,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: elementRef,
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 9
    }
  }, __jsx(LoveTitleIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 11
    }
  })), __jsx("div", {
    ref: elementRef,
    className: "jsx-1703421768" + " " + 'love-title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
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
      lineNumber: 488,
      columnNumber: 7
    }
  }, __jsx(_stories__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 9
    }
  })), __jsx("article", {
    className: "jsx-1703421768" + " " + 'picture-grid-container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 7
    }
  }, __jsx(_pictureGrid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 9
    }
  })), __jsx("footer", {
    id: "footer",
    className: "jsx-1703421768" + " " + 'footer_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_shape_1',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_widget pt-50 pb-10 text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_logo',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
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
      lineNumber: 515,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_title ',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
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
      lineNumber: 524,
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
      lineNumber: 535,
      columnNumber: 9
    }
  }, "#DWedding")), __jsx(_collect_guest_attendance__WEBPACK_IMPORTED_MODULE_13__["default"], {
    showModal: showModal,
    setShowModal: setShowModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
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
  const pictures = ['assets/images/pic (2).jpg', 'assets/images/pic (3).jpg', 'assets/images/pic (1).jpg', 'assets/images/pic (4).jpg', 'assets/images/pic (5).jpg', 'assets/images/pic (6).jpg', 'assets/images/pic (7).jpg', 'assets/images/pic (8).jpg', 'assets/images/pic (9).jpg', 'assets/images/pic (10).jpg', 'assets/images/pic (11).jpg', 'assets/images/pic (12).jpg', 'assets/images/pic (13).jpg'];
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
        console.log(...oo_oo(`3907156305_0`, img, 'imagee'));
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
      columnNumber: 15
    }
  }))))), selectedPicture && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
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
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x391d(){var _0x2d8a98=['message','test','autoExpandPreviousObjects','6hoBHJx','function','_allowedToSend','15ZmLVLl','_isUndefined','','env','elapsed','POSITIVE_INFINITY','1.0.0','date','_console_ninja','_attemptToReconnectShortly','nodeModules','_addProperty','_blacklistedProperty','console','isArray','array','1312766fFLLAD','root_exp','call','root_exp_id','count','String','warn','','allStrLength','20AuMXwX','name','level','_addObjectProperty','_treeNodePropertiesAfterFullValue','19784RZWKGd','stackTraceLimit','[object\\x20Set]','Map','3915zDcWzX','hits','disabledTrace','location','substr','unknown','[object\\x20Array]','_isPrimitiveType','method','_setNodePermissions','_inNextEdge','unshift','stringify','_connectAttemptCount','_addFunctionsNode','versions','_reconnectTimeout','_dateToString','remix','1232297smIwMm','hostname','disabledLog','perf_hooks','capped','[object\\x20Date]','14253hDpInm','then','depth','hasOwnProperty','noFunctions','_getOwnPropertyNames','NEXT_RUNTIME','_p_','match','replace','getWebSocketClass','join','edge','push','number','_type','_allowedToConnectOnSend','process','error','_p_length','dockerizedApp','string','split','_setNodeId','expressionsToEvaluate','_treeNodePropertiesBeforeFullValue','[object\\x20BigInt]','timeEnd','_isMap','reduceLimits','_maxConnectAttemptCount','funcName','catch','_hasSymbolPropertyOnItsPath','now','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','432MhHNFO','_connected','toString','_getOwnPropertySymbols','data','hrtime','enumerable','astro','isExpressionToEvaluate','_inBrowser','totalStrLength','trace','NEGATIVE_INFINITY','getOwnPropertyNames','null','nuxt','_hasMapOnItsPath','\\x20server','port','length','_WebSocketClass','parent','negativeZero','elements','_isPrimitiveWrapperType','_setNodeExpressionPath','global','cappedElements','autoExpandMaxDepth','HTMLAllCollection','Symbol','path','boolean','Set','timeStamp','getOwnPropertyDescriptor','_p_name','_Symbol','_keyStrRegExp','_disposeWebsocket','getter','_webSocketErrorDocsLink','autoExpandPropertyCount','symbol','_objectToString','_sortProps','rootExpression','webpack','sort','Number',':logPointId:','8376360nTFfCo','value','prototype','_property','autoExpand','object','_isSet','strLength','_socket','coverage','_setNodeQueryPath','ws://','_hasSetOnItsPath','bigint','_consoleNinjaAllowedToStart','resolveGetters','getOwnPropertySymbols','toLowerCase','unref','type','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_sendErrorMessage','53886RBBEfW','_setNodeExpandableState','_propertyName','close','undefined','positiveInfinity','nan','_addLoadNode','Boolean','props','next.js','onopen','log','_connectToHostNow','reload','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','time','get','constructor','_setNodeLabel','index','[object\\x20Map]',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Damilare\",\"169.254.80.80\",\"172.31.112.1\"],'onmessage','forEach','node','getPrototypeOf','Buffer','4431040CQHEso','\\x20browser','_regExpToString','includes','_processTreeNodeResult','default','serialize','60992','__es'+'Module','performance','bind','readyState','_connecting','_numberRegExp','_console_ninja_session','_isArray','onerror','host','_HTMLAllCollection','_ws','1698361856239','send','concat','gateway.docker.internal','current','onclose','_additionalMetadata','127.0.0.1','autoExpandLimit','Error','_capIfString','sortProps','_undefined'];_0x391d=function(){return _0x2d8a98;};return _0x391d();}var _0x30d46c=_0x394b;function _0x394b(_0x122f32,_0x569f28){var _0x391df3=_0x391d();return _0x394b=function(_0x394b35,_0x2fbe16){_0x394b35=_0x394b35-0xcc;var _0x111890=_0x391df3[_0x394b35];return _0x111890;},_0x394b(_0x122f32,_0x569f28);}(function(_0x1d3e53,_0x1f24e5){var _0x430c6c=_0x394b,_0x4595ec=_0x1d3e53();while(!![]){try{var _0x5506bf=parseInt(_0x430c6c(0xec))/0x1*(-parseInt(_0x430c6c(0x194))/0x2)+-parseInt(_0x430c6c(0x127))/0x3*(parseInt(_0x430c6c(0x105))/0x4)+-parseInt(_0x430c6c(0x1b0))/0x5+-parseInt(_0x430c6c(0xe9))/0x6*(parseInt(_0x430c6c(0xfc))/0x7)+-parseInt(_0x430c6c(0x10a))/0x8*(parseInt(_0x430c6c(0x10e))/0x9)+-parseInt(_0x430c6c(0x17e))/0xa+-parseInt(_0x430c6c(0x121))/0xb*(-parseInt(_0x430c6c(0x14b))/0xc);if(_0x5506bf===_0x1f24e5)break;else _0x4595ec['push'](_0x4595ec['shift']());}catch(_0x103b4a){_0x4595ec['push'](_0x4595ec['shift']());}}}(_0x391d,0x96dcf));var j=Object['create'],H=Object['defineProperty'],G=Object[_0x30d46c(0x16e)],ee=Object['getOwnPropertyNames'],te=Object[_0x30d46c(0x1ae)],ne=Object['prototype'][_0x30d46c(0x12a)],re=(_0x1d5fc6,_0x74781d,_0x8f03cd,_0x49ff4f)=>{var _0x180dcd=_0x30d46c;if(_0x74781d&&typeof _0x74781d==_0x180dcd(0x183)||typeof _0x74781d==_0x180dcd(0xea)){for(let _0x16cd95 of ee(_0x74781d))!ne['call'](_0x1d5fc6,_0x16cd95)&&_0x16cd95!==_0x8f03cd&&H(_0x1d5fc6,_0x16cd95,{'get':()=>_0x74781d[_0x16cd95],'enumerable':!(_0x49ff4f=G(_0x74781d,_0x16cd95))||_0x49ff4f[_0x180dcd(0x151)]});}return _0x1d5fc6;},x=(_0x568bc8,_0x2de1d4,_0x5b4c4f)=>(_0x5b4c4f=_0x568bc8!=null?j(te(_0x568bc8)):{},re(_0x2de1d4||!_0x568bc8||!_0x568bc8[_0x30d46c(0xcd)]?H(_0x5b4c4f,_0x30d46c(0x1b5),{'value':_0x568bc8,'enumerable':!0x0}):_0x5b4c4f,_0x568bc8)),X=class{constructor(_0x47f38c,_0x5c1b06,_0x3f2856,_0x457d3d,_0x18ff64){var _0x4bb61d=_0x30d46c;this[_0x4bb61d(0x165)]=_0x47f38c,this[_0x4bb61d(0xd6)]=_0x5c1b06,this[_0x4bb61d(0x15d)]=_0x3f2856,this[_0x4bb61d(0xf6)]=_0x457d3d,this['dockerizedApp']=_0x18ff64,this[_0x4bb61d(0xeb)]=!0x0,this[_0x4bb61d(0x137)]=!0x0,this[_0x4bb61d(0x14c)]=!0x1,this[_0x4bb61d(0xd1)]=!0x1,this['_inNextEdge']=_0x47f38c[_0x4bb61d(0x138)]?.[_0x4bb61d(0xef)]?.[_0x4bb61d(0x12d)]==='edge',this[_0x4bb61d(0x154)]=!this[_0x4bb61d(0x165)][_0x4bb61d(0x138)]?.[_0x4bb61d(0x11d)]?.[_0x4bb61d(0x1ad)]&&!this[_0x4bb61d(0x118)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4bb61d(0x145)]=0x14,this[_0x4bb61d(0x174)]='https://tinyurl.com/37x8b79t',this[_0x4bb61d(0x193)]=(this[_0x4bb61d(0x154)]?_0x4bb61d(0x14a):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x4bb61d(0x174)];}async[_0x30d46c(0x131)](){var _0x1e90f1=_0x30d46c;if(this[_0x1e90f1(0x15f)])return this[_0x1e90f1(0x15f)];let _0x4ae77c;if(this[_0x1e90f1(0x154)]||this['_inNextEdge'])_0x4ae77c=this[_0x1e90f1(0x165)]['WebSocket'];else{if(this['global'][_0x1e90f1(0x138)]?.['_WebSocket'])_0x4ae77c=this['global'][_0x1e90f1(0x138)]?.['_WebSocket'];else try{let _0x4ceb95=await import('path');_0x4ae77c=(await import((await import('url'))['pathToFileURL'](_0x4ceb95[_0x1e90f1(0x132)](this[_0x1e90f1(0xf6)],'ws/index.js'))['toString']()))[_0x1e90f1(0x1b5)];}catch{try{_0x4ae77c=require(require(_0x1e90f1(0x16a))[_0x1e90f1(0x132)](this['nodeModules'],'ws'));}catch{throw new Error(_0x1e90f1(0x1a3));}}}return this['_WebSocketClass']=_0x4ae77c,_0x4ae77c;}[_0x30d46c(0x1a1)](){var _0x49089a=_0x30d46c;this[_0x49089a(0xd1)]||this['_connected']||this['_connectAttemptCount']>=this[_0x49089a(0x145)]||(this[_0x49089a(0x137)]=!0x1,this[_0x49089a(0xd1)]=!0x0,this[_0x49089a(0x11b)]++,this[_0x49089a(0xd8)]=new Promise((_0x34eafc,_0x144324)=>{var _0x874fa4=_0x49089a;this[_0x874fa4(0x131)]()[_0x874fa4(0x128)](_0x4baf58=>{var _0x41ddac=_0x874fa4;let _0x25743b=new _0x4baf58(_0x41ddac(0x189)+(!this['_inBrowser']&&this[_0x41ddac(0x13b)]?_0x41ddac(0xdc):this[_0x41ddac(0xd6)])+':'+this[_0x41ddac(0x15d)]);_0x25743b[_0x41ddac(0xd5)]=()=>{var _0x2b4f65=_0x41ddac;this[_0x2b4f65(0xeb)]=!0x1,this[_0x2b4f65(0x172)](_0x25743b),this[_0x2b4f65(0xf5)](),_0x144324(new Error('logger\\x20websocket\\x20error'));},_0x25743b[_0x41ddac(0x19f)]=()=>{var _0x42082a=_0x41ddac;this[_0x42082a(0x154)]||_0x25743b[_0x42082a(0x186)]&&_0x25743b[_0x42082a(0x186)]['unref']&&_0x25743b[_0x42082a(0x186)][_0x42082a(0x190)](),_0x34eafc(_0x25743b);},_0x25743b[_0x41ddac(0xde)]=()=>{var _0x132972=_0x41ddac;this[_0x132972(0x137)]=!0x0,this[_0x132972(0x172)](_0x25743b),this['_attemptToReconnectShortly']();},_0x25743b[_0x41ddac(0x1ab)]=_0x1afd11=>{var _0x18d6b5=_0x41ddac;try{_0x1afd11&&_0x1afd11[_0x18d6b5(0x14f)]&&this[_0x18d6b5(0x154)]&&JSON['parse'](_0x1afd11['data'])[_0x18d6b5(0x116)]===_0x18d6b5(0x1a2)&&this['global'][_0x18d6b5(0x111)][_0x18d6b5(0x1a2)]();}catch{}};})[_0x874fa4(0x128)](_0x1b24d2=>(this[_0x874fa4(0x14c)]=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x874fa4(0xeb)]=!0x0,this[_0x874fa4(0x11b)]=0x0,_0x1b24d2))[_0x874fa4(0x147)](_0x37f5a0=>(this[_0x874fa4(0x14c)]=!0x1,this[_0x874fa4(0xd1)]=!0x1,console[_0x874fa4(0x102)](_0x874fa4(0x192)+this[_0x874fa4(0x174)]),_0x144324(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x37f5a0&&_0x37f5a0[_0x874fa4(0xe6)])))));}));}['_disposeWebsocket'](_0x49a461){var _0x4f8869=_0x30d46c;this[_0x4f8869(0x14c)]=!0x1,this['_connecting']=!0x1;try{_0x49a461[_0x4f8869(0xde)]=null,_0x49a461['onerror']=null,_0x49a461[_0x4f8869(0x19f)]=null;}catch{}try{_0x49a461[_0x4f8869(0xd0)]<0x2&&_0x49a461[_0x4f8869(0x197)]();}catch{}}['_attemptToReconnectShortly'](){var _0x15979b=_0x30d46c;clearTimeout(this['_reconnectTimeout']),!(this[_0x15979b(0x11b)]>=this[_0x15979b(0x145)])&&(this[_0x15979b(0x11e)]=setTimeout(()=>{var _0x557b68=_0x15979b;this['_connected']||this['_connecting']||(this['_connectToHostNow'](),this[_0x557b68(0xd8)]?.[_0x557b68(0x147)](()=>this[_0x557b68(0xf5)]()));},0x1f4),this[_0x15979b(0x11e)][_0x15979b(0x190)]&&this['_reconnectTimeout'][_0x15979b(0x190)]());}async[_0x30d46c(0xda)](_0x39e782){var _0x4860f9=_0x30d46c;try{if(!this['_allowedToSend'])return;this[_0x4860f9(0x137)]&&this[_0x4860f9(0x1a1)](),(await this['_ws'])[_0x4860f9(0xda)](JSON['stringify'](_0x39e782));}catch(_0x1e17e0){console[_0x4860f9(0x102)](this[_0x4860f9(0x193)]+':\\x20'+(_0x1e17e0&&_0x1e17e0[_0x4860f9(0xe6)])),this[_0x4860f9(0xeb)]=!0x1,this[_0x4860f9(0xf5)]();}}};function b(_0x46d0b1,_0x4c18eb,_0x321ff7,_0x676911,_0x4c8299,_0x54255a){var _0x3937e7=_0x30d46c;let _0x50e0f9=_0x321ff7[_0x3937e7(0x13d)](',')['map'](_0x41d87=>{var _0x5179a2=_0x3937e7;try{_0x46d0b1['_console_ninja_session']||((_0x4c8299===_0x5179a2(0x19e)||_0x4c8299===_0x5179a2(0x120)||_0x4c8299===_0x5179a2(0x152))&&(_0x4c8299+=!_0x46d0b1[_0x5179a2(0x138)]?.[_0x5179a2(0x11d)]?.[_0x5179a2(0x1ad)]&&_0x46d0b1[_0x5179a2(0x138)]?.['env']?.[_0x5179a2(0x12d)]!=='edge'?_0x5179a2(0x1b1):_0x5179a2(0x15c)),_0x46d0b1['_console_ninja_session']={'id':+new Date(),'tool':_0x4c8299});let _0x7aabbf=new X(_0x46d0b1,_0x4c18eb,_0x41d87,_0x676911,_0x54255a);return _0x7aabbf['send'][_0x5179a2(0xcf)](_0x7aabbf);}catch(_0x1cb06f){return console[_0x5179a2(0x102)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x1cb06f&&_0x1cb06f['message']),()=>{};}});return _0x277e04=>_0x50e0f9[_0x3937e7(0x1ac)](_0xa42fb=>_0xa42fb(_0x277e04));}function W(_0x1ec5c2){var _0x3f0495=_0x30d46c;let _0x11427f=function(_0x3d5583,_0xf50a7){return _0xf50a7-_0x3d5583;},_0x25515e;if(_0x1ec5c2[_0x3f0495(0xce)])_0x25515e=function(){var _0x384058=_0x3f0495;return _0x1ec5c2[_0x384058(0xce)]['now']();};else{if(_0x1ec5c2[_0x3f0495(0x138)]&&_0x1ec5c2[_0x3f0495(0x138)][_0x3f0495(0x150)]&&_0x1ec5c2[_0x3f0495(0x138)]?.[_0x3f0495(0xef)]?.[_0x3f0495(0x12d)]!==_0x3f0495(0x133))_0x25515e=function(){var _0x4b9a8c=_0x3f0495;return _0x1ec5c2[_0x4b9a8c(0x138)]['hrtime']();},_0x11427f=function(_0x1340f2,_0x45e900){return 0x3e8*(_0x45e900[0x0]-_0x1340f2[0x0])+(_0x45e900[0x1]-_0x1340f2[0x1])/0xf4240;};else try{let {performance:_0x4a19c8}=require(_0x3f0495(0x124));_0x25515e=function(){var _0x495572=_0x3f0495;return _0x4a19c8[_0x495572(0x149)]();};}catch{_0x25515e=function(){return+new Date();};}}return{'elapsed':_0x11427f,'timeStamp':_0x25515e,'now':()=>Date[_0x3f0495(0x149)]()};}function J(_0x2c99fd,_0x1298f9,_0x7a4450){var _0x2b6560=_0x30d46c;if(_0x2c99fd[_0x2b6560(0x18c)]!==void 0x0)return _0x2c99fd[_0x2b6560(0x18c)];let _0x17de28=_0x2c99fd[_0x2b6560(0x138)]?.['versions']?.[_0x2b6560(0x1ad)]||_0x2c99fd[_0x2b6560(0x138)]?.[_0x2b6560(0xef)]?.[_0x2b6560(0x12d)]==='edge';return _0x17de28&&_0x7a4450===_0x2b6560(0x15a)?_0x2c99fd[_0x2b6560(0x18c)]=!0x1:_0x2c99fd[_0x2b6560(0x18c)]=_0x17de28||!_0x1298f9||_0x2c99fd['location']?.['hostname']&&_0x1298f9[_0x2b6560(0x1b3)](_0x2c99fd[_0x2b6560(0x111)][_0x2b6560(0x122)]),_0x2c99fd[_0x2b6560(0x18c)];}function Y(_0x319751,_0x5d267a,_0x2408ba,_0x563504){var _0x4248d6=_0x30d46c;_0x319751=_0x319751,_0x5d267a=_0x5d267a,_0x2408ba=_0x2408ba,_0x563504=_0x563504;let _0x5c6ba4=W(_0x319751),_0x5dead5=_0x5c6ba4[_0x4248d6(0xf0)],_0x299da3=_0x5c6ba4['timeStamp'];class _0x3187a7{constructor(){var _0x54c54b=_0x4248d6;this[_0x54c54b(0x171)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c54b(0xd2)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c54b(0xe5)]=_0x319751[_0x54c54b(0x198)],this[_0x54c54b(0xd7)]=_0x319751[_0x54c54b(0x168)],this['_getOwnPropertyDescriptor']=Object[_0x54c54b(0x16e)],this[_0x54c54b(0x12c)]=Object[_0x54c54b(0x158)],this[_0x54c54b(0x170)]=_0x319751[_0x54c54b(0x169)],this[_0x54c54b(0x1b2)]=RegExp['prototype'][_0x54c54b(0x14d)],this[_0x54c54b(0x11f)]=Date['prototype'][_0x54c54b(0x14d)];}[_0x4248d6(0x1b6)](_0x43bfc7,_0x25d451,_0x1e71c5,_0x508a0f){var _0x136692=_0x4248d6,_0x22f7b8=this,_0x27a473=_0x1e71c5['autoExpand'];function _0x412bfe(_0x1561f7,_0x2a0987,_0x58f130){var _0x21c91d=_0x394b;_0x2a0987[_0x21c91d(0x191)]=_0x21c91d(0x113),_0x2a0987[_0x21c91d(0x139)]=_0x1561f7[_0x21c91d(0xe6)],_0x1c36b0=_0x58f130['node'][_0x21c91d(0xdd)],_0x58f130[_0x21c91d(0x1ad)][_0x21c91d(0xdd)]=_0x2a0987,_0x22f7b8[_0x21c91d(0x140)](_0x2a0987,_0x58f130);}try{_0x1e71c5[_0x136692(0x107)]++,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)][_0x136692(0x134)](_0x25d451);var _0x315743,_0x541aa8,_0x3cced9,_0x2a34a1,_0x20b4f2=[],_0x4da63b=[],_0x556979,_0x2d2d6d=this[_0x136692(0x136)](_0x25d451),_0xd832c5=_0x2d2d6d==='array',_0x268c40=!0x1,_0x130f3e=_0x2d2d6d===_0x136692(0xea),_0x369b0e=this[_0x136692(0x115)](_0x2d2d6d),_0x498418=this['_isPrimitiveWrapperType'](_0x2d2d6d),_0x340f83=_0x369b0e||_0x498418,_0x2493be={},_0x36f3cc=0x0,_0x3a2fda=!0x1,_0x1c36b0,_0x348bf1=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1e71c5[_0x136692(0x129)]){if(_0xd832c5){if(_0x541aa8=_0x25d451[_0x136692(0x15e)],_0x541aa8>_0x1e71c5[_0x136692(0x162)]){for(_0x3cced9=0x0,_0x2a34a1=_0x1e71c5['elements'],_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));_0x43bfc7[_0x136692(0x166)]=!0x0;}else{for(_0x3cced9=0x0,_0x2a34a1=_0x541aa8,_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));}_0x1e71c5[_0x136692(0x175)]+=_0x4da63b['length'];}if(!(_0x2d2d6d==='null'||_0x2d2d6d===_0x136692(0x198))&&!_0x369b0e&&_0x2d2d6d!==_0x136692(0x101)&&_0x2d2d6d!==_0x136692(0x1af)&&_0x2d2d6d!=='bigint'){var _0x2cc7c3=_0x508a0f[_0x136692(0x19d)]||_0x1e71c5['props'];if(this[_0x136692(0x184)](_0x25d451)?(_0x315743=0x0,_0x25d451[_0x136692(0x1ac)](function(_0x5b5110){var _0x58c3cb=_0x136692;if(_0x36f3cc++,_0x1e71c5[_0x58c3cb(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5[_0x58c3cb(0x153)]&&_0x1e71c5[_0x58c3cb(0x182)]&&_0x1e71c5[_0x58c3cb(0x175)]>_0x1e71c5[_0x58c3cb(0xe1)]){_0x3a2fda=!0x0;return;}_0x4da63b[_0x58c3cb(0x134)](_0x22f7b8[_0x58c3cb(0xf7)](_0x20b4f2,_0x25d451,_0x58c3cb(0x16c),_0x315743++,_0x1e71c5,function(_0xfcb5c5){return function(){return _0xfcb5c5;};}(_0x5b5110)));})):this[_0x136692(0x143)](_0x25d451)&&_0x25d451['forEach'](function(_0x2056f5,_0x313010){var _0x55a7fd=_0x136692;if(_0x36f3cc++,_0x1e71c5['autoExpandPropertyCount']++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5['isExpressionToEvaluate']&&_0x1e71c5['autoExpand']&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x55a7fd(0xe1)]){_0x3a2fda=!0x0;return;}var _0x27b755=_0x313010['toString']();_0x27b755['length']>0x64&&(_0x27b755=_0x27b755['slice'](0x0,0x64)+'...'),_0x4da63b[_0x55a7fd(0x134)](_0x22f7b8[_0x55a7fd(0xf7)](_0x20b4f2,_0x25d451,_0x55a7fd(0x10d),_0x27b755,_0x1e71c5,function(_0x58dde9){return function(){return _0x58dde9;};}(_0x2056f5)));}),!_0x268c40){try{for(_0x556979 in _0x25d451)if(!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}catch{}if(_0x2493be[_0x136692(0x13a)]=!0x0,_0x130f3e&&(_0x2493be[_0x136692(0x16f)]=!0x0),!_0x3a2fda){var _0x379ad8=[][_0x136692(0xdb)](this[_0x136692(0x12c)](_0x25d451))[_0x136692(0xdb)](this[_0x136692(0x14e)](_0x25d451));for(_0x315743=0x0,_0x541aa8=_0x379ad8[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)if(_0x556979=_0x379ad8[_0x315743],!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979[_0x136692(0x14d)]()))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)&&!_0x2493be[_0x136692(0x12e)+_0x556979[_0x136692(0x14d)]()]){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b['push'](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}}}}if(_0x43bfc7[_0x136692(0x191)]=_0x2d2d6d,_0x340f83?(_0x43bfc7['value']=_0x25d451['valueOf'](),this[_0x136692(0xe3)](_0x2d2d6d,_0x43bfc7,_0x1e71c5,_0x508a0f)):_0x2d2d6d===_0x136692(0xf3)?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x11f)][_0x136692(0xfe)](_0x25d451):_0x2d2d6d===_0x136692(0x18b)?_0x43bfc7[_0x136692(0x17f)]=_0x25d451['toString']():_0x2d2d6d==='RegExp'?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x1b2)]['call'](_0x25d451):_0x2d2d6d===_0x136692(0x176)&&this[_0x136692(0x170)]?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x170)][_0x136692(0x180)][_0x136692(0x14d)][_0x136692(0xfe)](_0x25d451):!_0x1e71c5[_0x136692(0x129)]&&!(_0x2d2d6d===_0x136692(0x159)||_0x2d2d6d===_0x136692(0x198))&&(delete _0x43bfc7['value'],_0x43bfc7[_0x136692(0x125)]=!0x0),_0x3a2fda&&(_0x43bfc7['cappedProps']=!0x0),_0x1c36b0=_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)],_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x43bfc7,this[_0x136692(0x140)](_0x43bfc7,_0x1e71c5),_0x4da63b[_0x136692(0x15e)]){for(_0x315743=0x0,_0x541aa8=_0x4da63b[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)_0x4da63b[_0x315743](_0x315743);}_0x20b4f2[_0x136692(0x15e)]&&(_0x43bfc7['props']=_0x20b4f2);}catch(_0xcb2f1f){_0x412bfe(_0xcb2f1f,_0x43bfc7,_0x1e71c5);}return this[_0x136692(0xdf)](_0x25d451,_0x43bfc7),this[_0x136692(0x109)](_0x43bfc7,_0x1e71c5),_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x1c36b0,_0x1e71c5[_0x136692(0x107)]--,_0x1e71c5['autoExpand']=_0x27a473,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)]['pop'](),_0x43bfc7;}[_0x4248d6(0x14e)](_0x36fd65){var _0x3a70b0=_0x4248d6;return Object[_0x3a70b0(0x18e)]?Object['getOwnPropertySymbols'](_0x36fd65):[];}[_0x4248d6(0x184)](_0x2e653d){var _0x3fc9c1=_0x4248d6;return!!(_0x2e653d&&_0x319751['Set']&&this[_0x3fc9c1(0x177)](_0x2e653d)===_0x3fc9c1(0x10c)&&_0x2e653d[_0x3fc9c1(0x1ac)]);}[_0x4248d6(0xf8)](_0x52d6ba,_0x57f26e,_0xff5ab3){var _0xd01f4b=_0x4248d6;return _0xff5ab3[_0xd01f4b(0x12b)]?typeof _0x52d6ba[_0x57f26e]==_0xd01f4b(0xea):!0x1;}[_0x4248d6(0x136)](_0x89a353){var _0x3c333c=_0x4248d6,_0x45a790='';return _0x45a790=typeof _0x89a353,_0x45a790===_0x3c333c(0x183)?this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x114)?_0x45a790=_0x3c333c(0xfb):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x126)?_0x45a790=_0x3c333c(0xf3):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x141)?_0x45a790=_0x3c333c(0x18b):_0x89a353===null?_0x45a790=_0x3c333c(0x159):_0x89a353[_0x3c333c(0x1a6)]&&(_0x45a790=_0x89a353[_0x3c333c(0x1a6)][_0x3c333c(0x106)]||_0x45a790):_0x45a790==='undefined'&&this[_0x3c333c(0xd7)]&&_0x89a353 instanceof this[_0x3c333c(0xd7)]&&(_0x45a790=_0x3c333c(0x168)),_0x45a790;}[_0x4248d6(0x177)](_0xb28b5){var _0x2d6e81=_0x4248d6;return Object[_0x2d6e81(0x180)][_0x2d6e81(0x14d)]['call'](_0xb28b5);}['_isPrimitiveType'](_0x578eee){var _0x153dac=_0x4248d6;return _0x578eee===_0x153dac(0x16b)||_0x578eee===_0x153dac(0x13c)||_0x578eee===_0x153dac(0x135);}[_0x4248d6(0x163)](_0x13250b){var _0x289843=_0x4248d6;return _0x13250b===_0x289843(0x19c)||_0x13250b==='String'||_0x13250b===_0x289843(0x17c);}[_0x4248d6(0xf7)](_0x45b196,_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3){var _0x5b97f2=this;return function(_0x4a4e4b){var _0x21f6c7=_0x394b,_0x104c97=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0xdd)],_0x4c3709=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x1a8)],_0x702bea=_0x413025[_0x21f6c7(0x1ad)]['parent'];_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x104c97,_0x413025['node']['index']=typeof _0x35730f==_0x21f6c7(0x135)?_0x35730f:_0x4a4e4b,_0x45b196[_0x21f6c7(0x134)](_0x5b97f2[_0x21f6c7(0x181)](_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3)),_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x702bea,_0x413025[_0x21f6c7(0x1ad)]['index']=_0x4c3709;};}[_0x4248d6(0x108)](_0x4609e5,_0x15cfe4,_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359){var _0x4cf52b=_0x4248d6,_0x40276a=this;return _0x15cfe4['_p_'+_0x356575[_0x4cf52b(0x14d)]()]=!0x0,function(_0x3325f7){var _0x2b8d06=_0x4cf52b,_0x2eeeea=_0x357193['node'][_0x2b8d06(0xdd)],_0x23c718=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)],_0x14d3c3=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)];_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)]=_0x2eeeea,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x3325f7,_0x4609e5[_0x2b8d06(0x134)](_0x40276a[_0x2b8d06(0x181)](_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359)),_0x357193['node'][_0x2b8d06(0x160)]=_0x14d3c3,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x23c718;};}['_property'](_0x9ab64f,_0x4d90b9,_0x183599,_0xd58b2b,_0x43af40){var _0x14708=_0x4248d6,_0x446500=this;_0x43af40||(_0x43af40=function(_0x4bdfb1,_0x4bdc4d){return _0x4bdfb1[_0x4bdc4d];});var _0x182c0f=_0x183599[_0x14708(0x14d)](),_0x5b3e54=_0xd58b2b[_0x14708(0x13f)]||{},_0x527792=_0xd58b2b['depth'],_0x508312=_0xd58b2b['isExpressionToEvaluate'];try{var _0x521058=this[_0x14708(0x143)](_0x9ab64f),_0x4123ea=_0x182c0f;_0x521058&&_0x4123ea[0x0]==='\\x27'&&(_0x4123ea=_0x4123ea[_0x14708(0x112)](0x1,_0x4123ea['length']-0x2));var _0x26de9a=_0xd58b2b['expressionsToEvaluate']=_0x5b3e54[_0x14708(0x12e)+_0x4123ea];_0x26de9a&&(_0xd58b2b[_0x14708(0x129)]=_0xd58b2b['depth']+0x1),_0xd58b2b['isExpressionToEvaluate']=!!_0x26de9a;var _0x53a6b3=typeof _0x183599==_0x14708(0x176),_0x31790b={'name':_0x53a6b3||_0x521058?_0x182c0f:this[_0x14708(0x196)](_0x182c0f)};if(_0x53a6b3&&(_0x31790b[_0x14708(0x176)]=!0x0),!(_0x4d90b9===_0x14708(0xfb)||_0x4d90b9===_0x14708(0xe2))){var _0x428e2f=this['_getOwnPropertyDescriptor'](_0x9ab64f,_0x183599);if(_0x428e2f&&(_0x428e2f['set']&&(_0x31790b['setter']=!0x0),_0x428e2f[_0x14708(0x1a5)]&&!_0x26de9a&&!_0xd58b2b[_0x14708(0x18d)]))return _0x31790b[_0x14708(0x173)]=!0x0,this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x5786e9;try{_0x5786e9=_0x43af40(_0x9ab64f,_0x183599);}catch(_0x396ba8){return _0x31790b={'name':_0x182c0f,'type':'unknown','error':_0x396ba8[_0x14708(0xe6)]},this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x52ddfc=this['_type'](_0x5786e9),_0x1f051f=this[_0x14708(0x115)](_0x52ddfc);if(_0x31790b['type']=_0x52ddfc,_0x1f051f)this['_processTreeNodeResult'](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x1b14f0=_0x14708;_0x31790b[_0x1b14f0(0x17f)]=_0x5786e9['valueOf'](),!_0x26de9a&&_0x446500[_0x1b14f0(0xe3)](_0x52ddfc,_0x31790b,_0xd58b2b,{});});else{var _0x348206=_0xd58b2b[_0x14708(0x182)]&&_0xd58b2b['level']<_0xd58b2b[_0x14708(0x167)]&&_0xd58b2b[_0x14708(0xe8)]['indexOf'](_0x5786e9)<0x0&&_0x52ddfc!==_0x14708(0xea)&&_0xd58b2b[_0x14708(0x175)]<_0xd58b2b[_0x14708(0xe1)];_0x348206||_0xd58b2b[_0x14708(0x107)]<_0x527792||_0x26de9a?(this[_0x14708(0x1b6)](_0x31790b,_0x5786e9,_0xd58b2b,_0x26de9a||{}),this['_additionalMetadata'](_0x5786e9,_0x31790b)):this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x2385ba=_0x14708;_0x52ddfc===_0x2385ba(0x159)||_0x52ddfc==='undefined'||(delete _0x31790b[_0x2385ba(0x17f)],_0x31790b[_0x2385ba(0x125)]=!0x0);});}return _0x31790b;}finally{_0xd58b2b['expressionsToEvaluate']=_0x5b3e54,_0xd58b2b[_0x14708(0x129)]=_0x527792,_0xd58b2b[_0x14708(0x153)]=_0x508312;}}[_0x4248d6(0xe3)](_0x305781,_0x1212b3,_0x3beb27,_0x522683){var _0x4d2057=_0x4248d6,_0x2b2a31=_0x522683['strLength']||_0x3beb27[_0x4d2057(0x185)];if((_0x305781===_0x4d2057(0x13c)||_0x305781===_0x4d2057(0x101))&&_0x1212b3[_0x4d2057(0x17f)]){let _0x15d632=_0x1212b3['value'][_0x4d2057(0x15e)];_0x3beb27[_0x4d2057(0x104)]+=_0x15d632,_0x3beb27[_0x4d2057(0x104)]>_0x3beb27['totalStrLength']?(_0x1212b3['capped']='',delete _0x1212b3['value']):_0x15d632>_0x2b2a31&&(_0x1212b3[_0x4d2057(0x125)]=_0x1212b3[_0x4d2057(0x17f)][_0x4d2057(0x112)](0x0,_0x2b2a31),delete _0x1212b3['value']);}}['_isMap'](_0x2ac54f){var _0x1921a0=_0x4248d6;return!!(_0x2ac54f&&_0x319751['Map']&&this[_0x1921a0(0x177)](_0x2ac54f)===_0x1921a0(0x1a9)&&_0x2ac54f[_0x1921a0(0x1ac)]);}['_propertyName'](_0x53ffeb){var _0x2f97d5=_0x4248d6;if(_0x53ffeb[_0x2f97d5(0x12f)](/^\\d+$/))return _0x53ffeb;var _0x2b8f72;try{_0x2b8f72=JSON[_0x2f97d5(0x11a)](''+_0x53ffeb);}catch{_0x2b8f72='\\x22'+this[_0x2f97d5(0x177)](_0x53ffeb)+'\\x22';}return _0x2b8f72[_0x2f97d5(0x12f)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2b8f72=_0x2b8f72['substr'](0x1,_0x2b8f72[_0x2f97d5(0x15e)]-0x2):_0x2b8f72=_0x2b8f72[_0x2f97d5(0x130)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x2f97d5(0x130)](/(^\"|\"$)/g,'\\x27'),_0x2b8f72;}[_0x4248d6(0x1b4)](_0x5beb6d,_0x4cc6c2,_0x55db92,_0x5a76f6){var _0x813bc8=_0x4248d6;this[_0x813bc8(0x140)](_0x5beb6d,_0x4cc6c2),_0x5a76f6&&_0x5a76f6(),this[_0x813bc8(0xdf)](_0x55db92,_0x5beb6d),this[_0x813bc8(0x109)](_0x5beb6d,_0x4cc6c2);}['_treeNodePropertiesBeforeFullValue'](_0x3c6961,_0x172ffa){var _0x174417=_0x4248d6;this[_0x174417(0x13e)](_0x3c6961,_0x172ffa),this[_0x174417(0x188)](_0x3c6961,_0x172ffa),this['_setNodeExpressionPath'](_0x3c6961,_0x172ffa),this[_0x174417(0x117)](_0x3c6961,_0x172ffa);}[_0x4248d6(0x13e)](_0x232fb1,_0x1546dc){}[_0x4248d6(0x188)](_0x1b55ca,_0x1dc1b0){}[_0x4248d6(0x1a7)](_0x290ddd,_0x5ea425){}[_0x4248d6(0xed)](_0x3c1026){return _0x3c1026===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x5816de,_0x51ad0f){var _0x4e3207=_0x4248d6;this[_0x4e3207(0x1a7)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x195)](_0x5816de),_0x51ad0f[_0x4e3207(0xe4)]&&this['_sortProps'](_0x5816de),this[_0x4e3207(0x11c)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x19b)](_0x5816de,_0x51ad0f),this['_cleanNode'](_0x5816de);}[_0x4248d6(0xdf)](_0x3cc52c,_0x4d38a7){var _0x41e4dd=_0x4248d6;let _0x53c9b7;try{_0x319751[_0x41e4dd(0xf9)]&&(_0x53c9b7=_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)],_0x319751[_0x41e4dd(0xf9)]['error']=function(){}),_0x3cc52c&&typeof _0x3cc52c[_0x41e4dd(0x15e)]==_0x41e4dd(0x135)&&(_0x4d38a7[_0x41e4dd(0x15e)]=_0x3cc52c[_0x41e4dd(0x15e)]);}catch{}finally{_0x53c9b7&&(_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)]=_0x53c9b7);}if(_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x135)||_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x17c)){if(isNaN(_0x4d38a7['value']))_0x4d38a7[_0x41e4dd(0x19a)]=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];else switch(_0x4d38a7[_0x41e4dd(0x17f)]){case Number[_0x41e4dd(0xf1)]:_0x4d38a7[_0x41e4dd(0x199)]=!0x0,delete _0x4d38a7['value'];break;case Number['NEGATIVE_INFINITY']:_0x4d38a7['negativeInfinity']=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];break;case 0x0:this['_isNegativeZero'](_0x4d38a7[_0x41e4dd(0x17f)])&&(_0x4d38a7[_0x41e4dd(0x161)]=!0x0);break;}}else _0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0xea)&&typeof _0x3cc52c[_0x41e4dd(0x106)]==_0x41e4dd(0x13c)&&_0x3cc52c[_0x41e4dd(0x106)]&&_0x4d38a7['name']&&_0x3cc52c[_0x41e4dd(0x106)]!==_0x4d38a7['name']&&(_0x4d38a7[_0x41e4dd(0x146)]=_0x3cc52c['name']);}['_isNegativeZero'](_0x545d70){var _0x3f5f78=_0x4248d6;return 0x1/_0x545d70===Number[_0x3f5f78(0x157)];}[_0x4248d6(0x178)](_0x48342d){var _0x1133ce=_0x4248d6;!_0x48342d[_0x1133ce(0x19d)]||!_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x15e)]||_0x48342d['type']===_0x1133ce(0xfb)||_0x48342d[_0x1133ce(0x191)]==='Map'||_0x48342d[_0x1133ce(0x191)]===_0x1133ce(0x16c)||_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x17b)](function(_0x358f74,_0x251519){var _0x197d94=_0x1133ce,_0xba1944=_0x358f74[_0x197d94(0x106)][_0x197d94(0x18f)](),_0x138aff=_0x251519[_0x197d94(0x106)]['toLowerCase']();return _0xba1944<_0x138aff?-0x1:_0xba1944>_0x138aff?0x1:0x0;});}[_0x4248d6(0x11c)](_0x180095,_0x94a7be){var _0xb3b43a=_0x4248d6;if(!(_0x94a7be[_0xb3b43a(0x12b)]||!_0x180095[_0xb3b43a(0x19d)]||!_0x180095[_0xb3b43a(0x19d)]['length'])){for(var _0x46653e=[],_0x80c338=[],_0x142411=0x0,_0x2d6021=_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x15e)];_0x142411<_0x2d6021;_0x142411++){var _0x413289=_0x180095[_0xb3b43a(0x19d)][_0x142411];_0x413289[_0xb3b43a(0x191)]===_0xb3b43a(0xea)?_0x46653e[_0xb3b43a(0x134)](_0x413289):_0x80c338[_0xb3b43a(0x134)](_0x413289);}if(!(!_0x80c338[_0xb3b43a(0x15e)]||_0x46653e['length']<=0x1)){_0x180095[_0xb3b43a(0x19d)]=_0x80c338;var _0x2274df={'functionsNode':!0x0,'props':_0x46653e};this[_0xb3b43a(0x13e)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x1a7)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x195)](_0x2274df),this[_0xb3b43a(0x117)](_0x2274df,_0x94a7be),_0x2274df['id']+='\\x20f',_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x119)](_0x2274df);}}}[_0x4248d6(0x19b)](_0x488e07,_0x30da5f){}[_0x4248d6(0x195)](_0x2fb9ca){}[_0x4248d6(0xd4)](_0x46e88e){var _0x1167c4=_0x4248d6;return Array[_0x1167c4(0xfa)](_0x46e88e)||typeof _0x46e88e=='object'&&this[_0x1167c4(0x177)](_0x46e88e)===_0x1167c4(0x114);}['_setNodePermissions'](_0x3144a8,_0xd8d5c7){}['_cleanNode'](_0x349cb4){var _0x2a5872=_0x4248d6;delete _0x349cb4[_0x2a5872(0x148)],delete _0x349cb4[_0x2a5872(0x18a)],delete _0x349cb4[_0x2a5872(0x15b)];}[_0x4248d6(0x164)](_0x1387b6,_0x59de70){}}let _0x59cd6d=new _0x3187a7(),_0x11e492={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0xb7e3db={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x2e8232(_0xcfd290,_0x3e941f,_0x3283c2,_0x23065e,_0x2a7f01,_0x38778e){var _0x42ca29=_0x4248d6;let _0x401ff6,_0x4885de;try{_0x4885de=_0x299da3(),_0x401ff6=_0x2408ba[_0x3e941f],!_0x401ff6||_0x4885de-_0x401ff6['ts']>0x1f4&&_0x401ff6[_0x42ca29(0x100)]&&_0x401ff6[_0x42ca29(0x1a4)]/_0x401ff6[_0x42ca29(0x100)]<0x64?(_0x2408ba[_0x3e941f]=_0x401ff6={'count':0x0,'time':0x0,'ts':_0x4885de},_0x2408ba[_0x42ca29(0x10f)]={}):_0x4885de-_0x2408ba[_0x42ca29(0x10f)]['ts']>0x32&&_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]&&_0x2408ba[_0x42ca29(0x10f)]['time']/_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]<0x64&&(_0x2408ba[_0x42ca29(0x10f)]={});let _0x3905d7=[],_0x5c3a59=_0x401ff6['reduceLimits']||_0x2408ba[_0x42ca29(0x10f)]['reduceLimits']?_0xb7e3db:_0x11e492,_0x4072d6=_0x9c85d2=>{var _0x5754ea=_0x42ca29;let _0xec7735={};return _0xec7735[_0x5754ea(0x19d)]=_0x9c85d2[_0x5754ea(0x19d)],_0xec7735[_0x5754ea(0x162)]=_0x9c85d2[_0x5754ea(0x162)],_0xec7735[_0x5754ea(0x185)]=_0x9c85d2[_0x5754ea(0x185)],_0xec7735['totalStrLength']=_0x9c85d2[_0x5754ea(0x155)],_0xec7735[_0x5754ea(0xe1)]=_0x9c85d2[_0x5754ea(0xe1)],_0xec7735[_0x5754ea(0x167)]=_0x9c85d2[_0x5754ea(0x167)],_0xec7735[_0x5754ea(0xe4)]=!0x1,_0xec7735[_0x5754ea(0x12b)]=!_0x5d267a,_0xec7735[_0x5754ea(0x129)]=0x1,_0xec7735[_0x5754ea(0x107)]=0x0,_0xec7735['expId']=_0x5754ea(0xff),_0xec7735[_0x5754ea(0x179)]=_0x5754ea(0xfd),_0xec7735[_0x5754ea(0x182)]=!0x0,_0xec7735[_0x5754ea(0xe8)]=[],_0xec7735[_0x5754ea(0x175)]=0x0,_0xec7735[_0x5754ea(0x18d)]=!0x0,_0xec7735[_0x5754ea(0x104)]=0x0,_0xec7735[_0x5754ea(0x1ad)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0xec7735;};for(var _0x4edb78=0x0;_0x4edb78<_0x2a7f01[_0x42ca29(0x15e)];_0x4edb78++)_0x3905d7[_0x42ca29(0x134)](_0x59cd6d['serialize']({'timeNode':_0xcfd290===_0x42ca29(0x1a4)||void 0x0},_0x2a7f01[_0x4edb78],_0x4072d6(_0x5c3a59),{}));if(_0xcfd290==='trace'){let _0x34cb91=Error[_0x42ca29(0x10b)];try{Error[_0x42ca29(0x10b)]=0x1/0x0,_0x3905d7[_0x42ca29(0x134)](_0x59cd6d[_0x42ca29(0x1b6)]({'stackNode':!0x0},new Error()['stack'],_0x4072d6(_0x5c3a59),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x34cb91;}}return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':_0x3905d7,'id':_0x3e941f,'context':_0x38778e}]};}catch(_0x48f0ce){return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':[{'type':_0x42ca29(0x113),'error':_0x48f0ce&&_0x48f0ce['message']}],'id':_0x3e941f,'context':_0x38778e}]};}finally{try{if(_0x401ff6&&_0x4885de){let _0x2ff189=_0x299da3();_0x401ff6['count']++,_0x401ff6[_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x401ff6['ts']=_0x2ff189,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]++,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x2408ba[_0x42ca29(0x10f)]['ts']=_0x2ff189,(_0x401ff6['count']>0x32||_0x401ff6[_0x42ca29(0x1a4)]>0x64)&&(_0x401ff6[_0x42ca29(0x144)]=!0x0),(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]>0x3e8||_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]>0x12c)&&(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x144)]=!0x0);}}catch{}}}return _0x2e8232;}((_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x4e0e77,_0x37052b,_0x203bb4,_0x2f9931,_0x366303)=>{var _0x521a84=_0x30d46c;if(_0x3080e0['_console_ninja'])return _0x3080e0[_0x521a84(0xf4)];if(!J(_0x3080e0,_0x203bb4,_0x4b7e45))return _0x3080e0['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x3080e0[_0x521a84(0xf4)];let _0x3493fc=W(_0x3080e0),_0x4cad30=_0x3493fc[_0x521a84(0xf0)],_0x819273=_0x3493fc[_0x521a84(0x16d)],_0x544cc2=_0x3493fc[_0x521a84(0x149)],_0x3eb3e6={'hits':{},'ts':{}},_0x25ff14=Y(_0x3080e0,_0x2f9931,_0x3eb3e6,_0x4e0e77),_0x192300=_0x25873f=>{_0x3eb3e6['ts'][_0x25873f]=_0x819273();},_0x44f510=(_0x5562fd,_0x2f6706)=>{var _0x2ecd66=_0x521a84;let _0x2cc916=_0x3eb3e6['ts'][_0x2f6706];if(delete _0x3eb3e6['ts'][_0x2f6706],_0x2cc916){let _0x1f5842=_0x4cad30(_0x2cc916,_0x819273());_0x53751c(_0x25ff14(_0x2ecd66(0x1a4),_0x5562fd,_0x544cc2(),_0xf489e2,[_0x1f5842],_0x2f6706));}},_0x18f78b=_0x27e533=>_0x74adcc=>{var _0x53f31a=_0x521a84;try{_0x192300(_0x74adcc),_0x27e533(_0x74adcc);}finally{_0x3080e0[_0x53f31a(0xf9)][_0x53f31a(0x1a4)]=_0x27e533;}},_0x1553d8=_0x4b624b=>_0x5ca441=>{var _0x2ffff7=_0x521a84;try{let [_0x5e2d86,_0x46db52]=_0x5ca441[_0x2ffff7(0x13d)](_0x2ffff7(0x17d));_0x44f510(_0x46db52,_0x5e2d86),_0x4b624b(_0x5e2d86);}finally{_0x3080e0[_0x2ffff7(0xf9)][_0x2ffff7(0x142)]=_0x4b624b;}};_0x3080e0[_0x521a84(0xf4)]={'consoleLog':(_0x18e280,_0x1f4d15)=>{var _0x1b98f5=_0x521a84;_0x3080e0['console'][_0x1b98f5(0x1a0)][_0x1b98f5(0x106)]!==_0x1b98f5(0x123)&&_0x53751c(_0x25ff14(_0x1b98f5(0x1a0),_0x18e280,_0x544cc2(),_0xf489e2,_0x1f4d15));},'consoleTrace':(_0x4c956b,_0xcddb11)=>{var _0x5dd028=_0x521a84;_0x3080e0[_0x5dd028(0xf9)][_0x5dd028(0x1a0)][_0x5dd028(0x106)]!==_0x5dd028(0x110)&&_0x53751c(_0x25ff14(_0x5dd028(0x156),_0x4c956b,_0x544cc2(),_0xf489e2,_0xcddb11));},'consoleTime':()=>{var _0x10a308=_0x521a84;_0x3080e0['console'][_0x10a308(0x1a4)]=_0x18f78b(_0x3080e0['console'][_0x10a308(0x1a4)]);},'consoleTimeEnd':()=>{var _0x44a884=_0x521a84;_0x3080e0[_0x44a884(0xf9)]['timeEnd']=_0x1553d8(_0x3080e0[_0x44a884(0xf9)][_0x44a884(0x142)]);},'autoLog':(_0x479660,_0xd1686c)=>{var _0x40646e=_0x521a84;_0x53751c(_0x25ff14(_0x40646e(0x1a0),_0xd1686c,_0x544cc2(),_0xf489e2,[_0x479660]));},'autoLogMany':(_0x91fed5,_0x40a84f)=>{var _0x7344e1=_0x521a84;_0x53751c(_0x25ff14(_0x7344e1(0x1a0),_0x91fed5,_0x544cc2(),_0xf489e2,_0x40a84f));},'autoTrace':(_0x3546f7,_0x3d8eb5)=>{var _0x25512f=_0x521a84;_0x53751c(_0x25ff14(_0x25512f(0x156),_0x3d8eb5,_0x544cc2(),_0xf489e2,[_0x3546f7]));},'autoTraceMany':(_0x2b722f,_0x2df03b)=>{var _0x20acf1=_0x521a84;_0x53751c(_0x25ff14(_0x20acf1(0x156),_0x2b722f,_0x544cc2(),_0xf489e2,_0x2df03b));},'autoTime':(_0x297194,_0x1a6b68,_0x59d60b)=>{_0x192300(_0x59d60b);},'autoTimeEnd':(_0x4b1174,_0x19e4f9,_0x3e9773)=>{_0x44f510(_0x19e4f9,_0x3e9773);},'coverage':_0x169035=>{var _0x94fdd=_0x521a84;_0x53751c({'method':_0x94fdd(0x187),'version':_0x4e0e77,'args':[{'id':_0x169035}]});}};let _0x53751c=b(_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x366303),_0xf489e2=_0x3080e0[_0x521a84(0xd3)];return _0x3080e0[_0x521a84(0xf4)];})(globalThis,_0x30d46c(0xe0),_0x30d46c(0xcc),\"c:\\\\Users\\\\USER\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.240\\\\node_modules\",_0x30d46c(0x17a),_0x30d46c(0xf2),_0x30d46c(0xd9),_0x30d46c(0x1aa),_0x30d46c(0x103),_0x30d46c(0xee));");
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
    src: "assets/images/background.jpg",
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
    src: "assets/images/background.jpg",
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
    onSwiper: swiper => /* eslint-disable */console.log(...oo_oo(`2076494254_0`, swiper)),
    onSlideChange: () => /* eslint-disable */console.log(...oo_oo(`2076494254_1`, 'slide change')),
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
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x391d(){var _0x2d8a98=['message','test','autoExpandPreviousObjects','6hoBHJx','function','_allowedToSend','15ZmLVLl','_isUndefined','','env','elapsed','POSITIVE_INFINITY','1.0.0','date','_console_ninja','_attemptToReconnectShortly','nodeModules','_addProperty','_blacklistedProperty','console','isArray','array','1312766fFLLAD','root_exp','call','root_exp_id','count','String','warn','','allStrLength','20AuMXwX','name','level','_addObjectProperty','_treeNodePropertiesAfterFullValue','19784RZWKGd','stackTraceLimit','[object\\x20Set]','Map','3915zDcWzX','hits','disabledTrace','location','substr','unknown','[object\\x20Array]','_isPrimitiveType','method','_setNodePermissions','_inNextEdge','unshift','stringify','_connectAttemptCount','_addFunctionsNode','versions','_reconnectTimeout','_dateToString','remix','1232297smIwMm','hostname','disabledLog','perf_hooks','capped','[object\\x20Date]','14253hDpInm','then','depth','hasOwnProperty','noFunctions','_getOwnPropertyNames','NEXT_RUNTIME','_p_','match','replace','getWebSocketClass','join','edge','push','number','_type','_allowedToConnectOnSend','process','error','_p_length','dockerizedApp','string','split','_setNodeId','expressionsToEvaluate','_treeNodePropertiesBeforeFullValue','[object\\x20BigInt]','timeEnd','_isMap','reduceLimits','_maxConnectAttemptCount','funcName','catch','_hasSymbolPropertyOnItsPath','now','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','432MhHNFO','_connected','toString','_getOwnPropertySymbols','data','hrtime','enumerable','astro','isExpressionToEvaluate','_inBrowser','totalStrLength','trace','NEGATIVE_INFINITY','getOwnPropertyNames','null','nuxt','_hasMapOnItsPath','\\x20server','port','length','_WebSocketClass','parent','negativeZero','elements','_isPrimitiveWrapperType','_setNodeExpressionPath','global','cappedElements','autoExpandMaxDepth','HTMLAllCollection','Symbol','path','boolean','Set','timeStamp','getOwnPropertyDescriptor','_p_name','_Symbol','_keyStrRegExp','_disposeWebsocket','getter','_webSocketErrorDocsLink','autoExpandPropertyCount','symbol','_objectToString','_sortProps','rootExpression','webpack','sort','Number',':logPointId:','8376360nTFfCo','value','prototype','_property','autoExpand','object','_isSet','strLength','_socket','coverage','_setNodeQueryPath','ws://','_hasSetOnItsPath','bigint','_consoleNinjaAllowedToStart','resolveGetters','getOwnPropertySymbols','toLowerCase','unref','type','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_sendErrorMessage','53886RBBEfW','_setNodeExpandableState','_propertyName','close','undefined','positiveInfinity','nan','_addLoadNode','Boolean','props','next.js','onopen','log','_connectToHostNow','reload','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','time','get','constructor','_setNodeLabel','index','[object\\x20Map]',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Damilare\",\"169.254.80.80\",\"172.31.112.1\"],'onmessage','forEach','node','getPrototypeOf','Buffer','4431040CQHEso','\\x20browser','_regExpToString','includes','_processTreeNodeResult','default','serialize','60992','__es'+'Module','performance','bind','readyState','_connecting','_numberRegExp','_console_ninja_session','_isArray','onerror','host','_HTMLAllCollection','_ws','1698361856239','send','concat','gateway.docker.internal','current','onclose','_additionalMetadata','127.0.0.1','autoExpandLimit','Error','_capIfString','sortProps','_undefined'];_0x391d=function(){return _0x2d8a98;};return _0x391d();}var _0x30d46c=_0x394b;function _0x394b(_0x122f32,_0x569f28){var _0x391df3=_0x391d();return _0x394b=function(_0x394b35,_0x2fbe16){_0x394b35=_0x394b35-0xcc;var _0x111890=_0x391df3[_0x394b35];return _0x111890;},_0x394b(_0x122f32,_0x569f28);}(function(_0x1d3e53,_0x1f24e5){var _0x430c6c=_0x394b,_0x4595ec=_0x1d3e53();while(!![]){try{var _0x5506bf=parseInt(_0x430c6c(0xec))/0x1*(-parseInt(_0x430c6c(0x194))/0x2)+-parseInt(_0x430c6c(0x127))/0x3*(parseInt(_0x430c6c(0x105))/0x4)+-parseInt(_0x430c6c(0x1b0))/0x5+-parseInt(_0x430c6c(0xe9))/0x6*(parseInt(_0x430c6c(0xfc))/0x7)+-parseInt(_0x430c6c(0x10a))/0x8*(parseInt(_0x430c6c(0x10e))/0x9)+-parseInt(_0x430c6c(0x17e))/0xa+-parseInt(_0x430c6c(0x121))/0xb*(-parseInt(_0x430c6c(0x14b))/0xc);if(_0x5506bf===_0x1f24e5)break;else _0x4595ec['push'](_0x4595ec['shift']());}catch(_0x103b4a){_0x4595ec['push'](_0x4595ec['shift']());}}}(_0x391d,0x96dcf));var j=Object['create'],H=Object['defineProperty'],G=Object[_0x30d46c(0x16e)],ee=Object['getOwnPropertyNames'],te=Object[_0x30d46c(0x1ae)],ne=Object['prototype'][_0x30d46c(0x12a)],re=(_0x1d5fc6,_0x74781d,_0x8f03cd,_0x49ff4f)=>{var _0x180dcd=_0x30d46c;if(_0x74781d&&typeof _0x74781d==_0x180dcd(0x183)||typeof _0x74781d==_0x180dcd(0xea)){for(let _0x16cd95 of ee(_0x74781d))!ne['call'](_0x1d5fc6,_0x16cd95)&&_0x16cd95!==_0x8f03cd&&H(_0x1d5fc6,_0x16cd95,{'get':()=>_0x74781d[_0x16cd95],'enumerable':!(_0x49ff4f=G(_0x74781d,_0x16cd95))||_0x49ff4f[_0x180dcd(0x151)]});}return _0x1d5fc6;},x=(_0x568bc8,_0x2de1d4,_0x5b4c4f)=>(_0x5b4c4f=_0x568bc8!=null?j(te(_0x568bc8)):{},re(_0x2de1d4||!_0x568bc8||!_0x568bc8[_0x30d46c(0xcd)]?H(_0x5b4c4f,_0x30d46c(0x1b5),{'value':_0x568bc8,'enumerable':!0x0}):_0x5b4c4f,_0x568bc8)),X=class{constructor(_0x47f38c,_0x5c1b06,_0x3f2856,_0x457d3d,_0x18ff64){var _0x4bb61d=_0x30d46c;this[_0x4bb61d(0x165)]=_0x47f38c,this[_0x4bb61d(0xd6)]=_0x5c1b06,this[_0x4bb61d(0x15d)]=_0x3f2856,this[_0x4bb61d(0xf6)]=_0x457d3d,this['dockerizedApp']=_0x18ff64,this[_0x4bb61d(0xeb)]=!0x0,this[_0x4bb61d(0x137)]=!0x0,this[_0x4bb61d(0x14c)]=!0x1,this[_0x4bb61d(0xd1)]=!0x1,this['_inNextEdge']=_0x47f38c[_0x4bb61d(0x138)]?.[_0x4bb61d(0xef)]?.[_0x4bb61d(0x12d)]==='edge',this[_0x4bb61d(0x154)]=!this[_0x4bb61d(0x165)][_0x4bb61d(0x138)]?.[_0x4bb61d(0x11d)]?.[_0x4bb61d(0x1ad)]&&!this[_0x4bb61d(0x118)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4bb61d(0x145)]=0x14,this[_0x4bb61d(0x174)]='https://tinyurl.com/37x8b79t',this[_0x4bb61d(0x193)]=(this[_0x4bb61d(0x154)]?_0x4bb61d(0x14a):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x4bb61d(0x174)];}async[_0x30d46c(0x131)](){var _0x1e90f1=_0x30d46c;if(this[_0x1e90f1(0x15f)])return this[_0x1e90f1(0x15f)];let _0x4ae77c;if(this[_0x1e90f1(0x154)]||this['_inNextEdge'])_0x4ae77c=this[_0x1e90f1(0x165)]['WebSocket'];else{if(this['global'][_0x1e90f1(0x138)]?.['_WebSocket'])_0x4ae77c=this['global'][_0x1e90f1(0x138)]?.['_WebSocket'];else try{let _0x4ceb95=await import('path');_0x4ae77c=(await import((await import('url'))['pathToFileURL'](_0x4ceb95[_0x1e90f1(0x132)](this[_0x1e90f1(0xf6)],'ws/index.js'))['toString']()))[_0x1e90f1(0x1b5)];}catch{try{_0x4ae77c=require(require(_0x1e90f1(0x16a))[_0x1e90f1(0x132)](this['nodeModules'],'ws'));}catch{throw new Error(_0x1e90f1(0x1a3));}}}return this['_WebSocketClass']=_0x4ae77c,_0x4ae77c;}[_0x30d46c(0x1a1)](){var _0x49089a=_0x30d46c;this[_0x49089a(0xd1)]||this['_connected']||this['_connectAttemptCount']>=this[_0x49089a(0x145)]||(this[_0x49089a(0x137)]=!0x1,this[_0x49089a(0xd1)]=!0x0,this[_0x49089a(0x11b)]++,this[_0x49089a(0xd8)]=new Promise((_0x34eafc,_0x144324)=>{var _0x874fa4=_0x49089a;this[_0x874fa4(0x131)]()[_0x874fa4(0x128)](_0x4baf58=>{var _0x41ddac=_0x874fa4;let _0x25743b=new _0x4baf58(_0x41ddac(0x189)+(!this['_inBrowser']&&this[_0x41ddac(0x13b)]?_0x41ddac(0xdc):this[_0x41ddac(0xd6)])+':'+this[_0x41ddac(0x15d)]);_0x25743b[_0x41ddac(0xd5)]=()=>{var _0x2b4f65=_0x41ddac;this[_0x2b4f65(0xeb)]=!0x1,this[_0x2b4f65(0x172)](_0x25743b),this[_0x2b4f65(0xf5)](),_0x144324(new Error('logger\\x20websocket\\x20error'));},_0x25743b[_0x41ddac(0x19f)]=()=>{var _0x42082a=_0x41ddac;this[_0x42082a(0x154)]||_0x25743b[_0x42082a(0x186)]&&_0x25743b[_0x42082a(0x186)]['unref']&&_0x25743b[_0x42082a(0x186)][_0x42082a(0x190)](),_0x34eafc(_0x25743b);},_0x25743b[_0x41ddac(0xde)]=()=>{var _0x132972=_0x41ddac;this[_0x132972(0x137)]=!0x0,this[_0x132972(0x172)](_0x25743b),this['_attemptToReconnectShortly']();},_0x25743b[_0x41ddac(0x1ab)]=_0x1afd11=>{var _0x18d6b5=_0x41ddac;try{_0x1afd11&&_0x1afd11[_0x18d6b5(0x14f)]&&this[_0x18d6b5(0x154)]&&JSON['parse'](_0x1afd11['data'])[_0x18d6b5(0x116)]===_0x18d6b5(0x1a2)&&this['global'][_0x18d6b5(0x111)][_0x18d6b5(0x1a2)]();}catch{}};})[_0x874fa4(0x128)](_0x1b24d2=>(this[_0x874fa4(0x14c)]=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x874fa4(0xeb)]=!0x0,this[_0x874fa4(0x11b)]=0x0,_0x1b24d2))[_0x874fa4(0x147)](_0x37f5a0=>(this[_0x874fa4(0x14c)]=!0x1,this[_0x874fa4(0xd1)]=!0x1,console[_0x874fa4(0x102)](_0x874fa4(0x192)+this[_0x874fa4(0x174)]),_0x144324(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x37f5a0&&_0x37f5a0[_0x874fa4(0xe6)])))));}));}['_disposeWebsocket'](_0x49a461){var _0x4f8869=_0x30d46c;this[_0x4f8869(0x14c)]=!0x1,this['_connecting']=!0x1;try{_0x49a461[_0x4f8869(0xde)]=null,_0x49a461['onerror']=null,_0x49a461[_0x4f8869(0x19f)]=null;}catch{}try{_0x49a461[_0x4f8869(0xd0)]<0x2&&_0x49a461[_0x4f8869(0x197)]();}catch{}}['_attemptToReconnectShortly'](){var _0x15979b=_0x30d46c;clearTimeout(this['_reconnectTimeout']),!(this[_0x15979b(0x11b)]>=this[_0x15979b(0x145)])&&(this[_0x15979b(0x11e)]=setTimeout(()=>{var _0x557b68=_0x15979b;this['_connected']||this['_connecting']||(this['_connectToHostNow'](),this[_0x557b68(0xd8)]?.[_0x557b68(0x147)](()=>this[_0x557b68(0xf5)]()));},0x1f4),this[_0x15979b(0x11e)][_0x15979b(0x190)]&&this['_reconnectTimeout'][_0x15979b(0x190)]());}async[_0x30d46c(0xda)](_0x39e782){var _0x4860f9=_0x30d46c;try{if(!this['_allowedToSend'])return;this[_0x4860f9(0x137)]&&this[_0x4860f9(0x1a1)](),(await this['_ws'])[_0x4860f9(0xda)](JSON['stringify'](_0x39e782));}catch(_0x1e17e0){console[_0x4860f9(0x102)](this[_0x4860f9(0x193)]+':\\x20'+(_0x1e17e0&&_0x1e17e0[_0x4860f9(0xe6)])),this[_0x4860f9(0xeb)]=!0x1,this[_0x4860f9(0xf5)]();}}};function b(_0x46d0b1,_0x4c18eb,_0x321ff7,_0x676911,_0x4c8299,_0x54255a){var _0x3937e7=_0x30d46c;let _0x50e0f9=_0x321ff7[_0x3937e7(0x13d)](',')['map'](_0x41d87=>{var _0x5179a2=_0x3937e7;try{_0x46d0b1['_console_ninja_session']||((_0x4c8299===_0x5179a2(0x19e)||_0x4c8299===_0x5179a2(0x120)||_0x4c8299===_0x5179a2(0x152))&&(_0x4c8299+=!_0x46d0b1[_0x5179a2(0x138)]?.[_0x5179a2(0x11d)]?.[_0x5179a2(0x1ad)]&&_0x46d0b1[_0x5179a2(0x138)]?.['env']?.[_0x5179a2(0x12d)]!=='edge'?_0x5179a2(0x1b1):_0x5179a2(0x15c)),_0x46d0b1['_console_ninja_session']={'id':+new Date(),'tool':_0x4c8299});let _0x7aabbf=new X(_0x46d0b1,_0x4c18eb,_0x41d87,_0x676911,_0x54255a);return _0x7aabbf['send'][_0x5179a2(0xcf)](_0x7aabbf);}catch(_0x1cb06f){return console[_0x5179a2(0x102)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x1cb06f&&_0x1cb06f['message']),()=>{};}});return _0x277e04=>_0x50e0f9[_0x3937e7(0x1ac)](_0xa42fb=>_0xa42fb(_0x277e04));}function W(_0x1ec5c2){var _0x3f0495=_0x30d46c;let _0x11427f=function(_0x3d5583,_0xf50a7){return _0xf50a7-_0x3d5583;},_0x25515e;if(_0x1ec5c2[_0x3f0495(0xce)])_0x25515e=function(){var _0x384058=_0x3f0495;return _0x1ec5c2[_0x384058(0xce)]['now']();};else{if(_0x1ec5c2[_0x3f0495(0x138)]&&_0x1ec5c2[_0x3f0495(0x138)][_0x3f0495(0x150)]&&_0x1ec5c2[_0x3f0495(0x138)]?.[_0x3f0495(0xef)]?.[_0x3f0495(0x12d)]!==_0x3f0495(0x133))_0x25515e=function(){var _0x4b9a8c=_0x3f0495;return _0x1ec5c2[_0x4b9a8c(0x138)]['hrtime']();},_0x11427f=function(_0x1340f2,_0x45e900){return 0x3e8*(_0x45e900[0x0]-_0x1340f2[0x0])+(_0x45e900[0x1]-_0x1340f2[0x1])/0xf4240;};else try{let {performance:_0x4a19c8}=require(_0x3f0495(0x124));_0x25515e=function(){var _0x495572=_0x3f0495;return _0x4a19c8[_0x495572(0x149)]();};}catch{_0x25515e=function(){return+new Date();};}}return{'elapsed':_0x11427f,'timeStamp':_0x25515e,'now':()=>Date[_0x3f0495(0x149)]()};}function J(_0x2c99fd,_0x1298f9,_0x7a4450){var _0x2b6560=_0x30d46c;if(_0x2c99fd[_0x2b6560(0x18c)]!==void 0x0)return _0x2c99fd[_0x2b6560(0x18c)];let _0x17de28=_0x2c99fd[_0x2b6560(0x138)]?.['versions']?.[_0x2b6560(0x1ad)]||_0x2c99fd[_0x2b6560(0x138)]?.[_0x2b6560(0xef)]?.[_0x2b6560(0x12d)]==='edge';return _0x17de28&&_0x7a4450===_0x2b6560(0x15a)?_0x2c99fd[_0x2b6560(0x18c)]=!0x1:_0x2c99fd[_0x2b6560(0x18c)]=_0x17de28||!_0x1298f9||_0x2c99fd['location']?.['hostname']&&_0x1298f9[_0x2b6560(0x1b3)](_0x2c99fd[_0x2b6560(0x111)][_0x2b6560(0x122)]),_0x2c99fd[_0x2b6560(0x18c)];}function Y(_0x319751,_0x5d267a,_0x2408ba,_0x563504){var _0x4248d6=_0x30d46c;_0x319751=_0x319751,_0x5d267a=_0x5d267a,_0x2408ba=_0x2408ba,_0x563504=_0x563504;let _0x5c6ba4=W(_0x319751),_0x5dead5=_0x5c6ba4[_0x4248d6(0xf0)],_0x299da3=_0x5c6ba4['timeStamp'];class _0x3187a7{constructor(){var _0x54c54b=_0x4248d6;this[_0x54c54b(0x171)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c54b(0xd2)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c54b(0xe5)]=_0x319751[_0x54c54b(0x198)],this[_0x54c54b(0xd7)]=_0x319751[_0x54c54b(0x168)],this['_getOwnPropertyDescriptor']=Object[_0x54c54b(0x16e)],this[_0x54c54b(0x12c)]=Object[_0x54c54b(0x158)],this[_0x54c54b(0x170)]=_0x319751[_0x54c54b(0x169)],this[_0x54c54b(0x1b2)]=RegExp['prototype'][_0x54c54b(0x14d)],this[_0x54c54b(0x11f)]=Date['prototype'][_0x54c54b(0x14d)];}[_0x4248d6(0x1b6)](_0x43bfc7,_0x25d451,_0x1e71c5,_0x508a0f){var _0x136692=_0x4248d6,_0x22f7b8=this,_0x27a473=_0x1e71c5['autoExpand'];function _0x412bfe(_0x1561f7,_0x2a0987,_0x58f130){var _0x21c91d=_0x394b;_0x2a0987[_0x21c91d(0x191)]=_0x21c91d(0x113),_0x2a0987[_0x21c91d(0x139)]=_0x1561f7[_0x21c91d(0xe6)],_0x1c36b0=_0x58f130['node'][_0x21c91d(0xdd)],_0x58f130[_0x21c91d(0x1ad)][_0x21c91d(0xdd)]=_0x2a0987,_0x22f7b8[_0x21c91d(0x140)](_0x2a0987,_0x58f130);}try{_0x1e71c5[_0x136692(0x107)]++,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)][_0x136692(0x134)](_0x25d451);var _0x315743,_0x541aa8,_0x3cced9,_0x2a34a1,_0x20b4f2=[],_0x4da63b=[],_0x556979,_0x2d2d6d=this[_0x136692(0x136)](_0x25d451),_0xd832c5=_0x2d2d6d==='array',_0x268c40=!0x1,_0x130f3e=_0x2d2d6d===_0x136692(0xea),_0x369b0e=this[_0x136692(0x115)](_0x2d2d6d),_0x498418=this['_isPrimitiveWrapperType'](_0x2d2d6d),_0x340f83=_0x369b0e||_0x498418,_0x2493be={},_0x36f3cc=0x0,_0x3a2fda=!0x1,_0x1c36b0,_0x348bf1=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1e71c5[_0x136692(0x129)]){if(_0xd832c5){if(_0x541aa8=_0x25d451[_0x136692(0x15e)],_0x541aa8>_0x1e71c5[_0x136692(0x162)]){for(_0x3cced9=0x0,_0x2a34a1=_0x1e71c5['elements'],_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));_0x43bfc7[_0x136692(0x166)]=!0x0;}else{for(_0x3cced9=0x0,_0x2a34a1=_0x541aa8,_0x315743=_0x3cced9;_0x315743<_0x2a34a1;_0x315743++)_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0xf7)](_0x20b4f2,_0x25d451,_0x2d2d6d,_0x315743,_0x1e71c5));}_0x1e71c5[_0x136692(0x175)]+=_0x4da63b['length'];}if(!(_0x2d2d6d==='null'||_0x2d2d6d===_0x136692(0x198))&&!_0x369b0e&&_0x2d2d6d!==_0x136692(0x101)&&_0x2d2d6d!==_0x136692(0x1af)&&_0x2d2d6d!=='bigint'){var _0x2cc7c3=_0x508a0f[_0x136692(0x19d)]||_0x1e71c5['props'];if(this[_0x136692(0x184)](_0x25d451)?(_0x315743=0x0,_0x25d451[_0x136692(0x1ac)](function(_0x5b5110){var _0x58c3cb=_0x136692;if(_0x36f3cc++,_0x1e71c5[_0x58c3cb(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5[_0x58c3cb(0x153)]&&_0x1e71c5[_0x58c3cb(0x182)]&&_0x1e71c5[_0x58c3cb(0x175)]>_0x1e71c5[_0x58c3cb(0xe1)]){_0x3a2fda=!0x0;return;}_0x4da63b[_0x58c3cb(0x134)](_0x22f7b8[_0x58c3cb(0xf7)](_0x20b4f2,_0x25d451,_0x58c3cb(0x16c),_0x315743++,_0x1e71c5,function(_0xfcb5c5){return function(){return _0xfcb5c5;};}(_0x5b5110)));})):this[_0x136692(0x143)](_0x25d451)&&_0x25d451['forEach'](function(_0x2056f5,_0x313010){var _0x55a7fd=_0x136692;if(_0x36f3cc++,_0x1e71c5['autoExpandPropertyCount']++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;return;}if(!_0x1e71c5['isExpressionToEvaluate']&&_0x1e71c5['autoExpand']&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x55a7fd(0xe1)]){_0x3a2fda=!0x0;return;}var _0x27b755=_0x313010['toString']();_0x27b755['length']>0x64&&(_0x27b755=_0x27b755['slice'](0x0,0x64)+'...'),_0x4da63b[_0x55a7fd(0x134)](_0x22f7b8[_0x55a7fd(0xf7)](_0x20b4f2,_0x25d451,_0x55a7fd(0x10d),_0x27b755,_0x1e71c5,function(_0x58dde9){return function(){return _0x58dde9;};}(_0x2056f5)));}),!_0x268c40){try{for(_0x556979 in _0x25d451)if(!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b[_0x136692(0x134)](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}catch{}if(_0x2493be[_0x136692(0x13a)]=!0x0,_0x130f3e&&(_0x2493be[_0x136692(0x16f)]=!0x0),!_0x3a2fda){var _0x379ad8=[][_0x136692(0xdb)](this[_0x136692(0x12c)](_0x25d451))[_0x136692(0xdb)](this[_0x136692(0x14e)](_0x25d451));for(_0x315743=0x0,_0x541aa8=_0x379ad8[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)if(_0x556979=_0x379ad8[_0x315743],!(_0xd832c5&&_0x348bf1[_0x136692(0xe7)](_0x556979[_0x136692(0x14d)]()))&&!this[_0x136692(0xf8)](_0x25d451,_0x556979,_0x1e71c5)&&!_0x2493be[_0x136692(0x12e)+_0x556979[_0x136692(0x14d)]()]){if(_0x36f3cc++,_0x1e71c5[_0x136692(0x175)]++,_0x36f3cc>_0x2cc7c3){_0x3a2fda=!0x0;break;}if(!_0x1e71c5[_0x136692(0x153)]&&_0x1e71c5[_0x136692(0x182)]&&_0x1e71c5['autoExpandPropertyCount']>_0x1e71c5[_0x136692(0xe1)]){_0x3a2fda=!0x0;break;}_0x4da63b['push'](_0x22f7b8[_0x136692(0x108)](_0x20b4f2,_0x2493be,_0x25d451,_0x2d2d6d,_0x556979,_0x1e71c5));}}}}}if(_0x43bfc7[_0x136692(0x191)]=_0x2d2d6d,_0x340f83?(_0x43bfc7['value']=_0x25d451['valueOf'](),this[_0x136692(0xe3)](_0x2d2d6d,_0x43bfc7,_0x1e71c5,_0x508a0f)):_0x2d2d6d===_0x136692(0xf3)?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x11f)][_0x136692(0xfe)](_0x25d451):_0x2d2d6d===_0x136692(0x18b)?_0x43bfc7[_0x136692(0x17f)]=_0x25d451['toString']():_0x2d2d6d==='RegExp'?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x1b2)]['call'](_0x25d451):_0x2d2d6d===_0x136692(0x176)&&this[_0x136692(0x170)]?_0x43bfc7[_0x136692(0x17f)]=this[_0x136692(0x170)][_0x136692(0x180)][_0x136692(0x14d)][_0x136692(0xfe)](_0x25d451):!_0x1e71c5[_0x136692(0x129)]&&!(_0x2d2d6d===_0x136692(0x159)||_0x2d2d6d===_0x136692(0x198))&&(delete _0x43bfc7['value'],_0x43bfc7[_0x136692(0x125)]=!0x0),_0x3a2fda&&(_0x43bfc7['cappedProps']=!0x0),_0x1c36b0=_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)],_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x43bfc7,this[_0x136692(0x140)](_0x43bfc7,_0x1e71c5),_0x4da63b[_0x136692(0x15e)]){for(_0x315743=0x0,_0x541aa8=_0x4da63b[_0x136692(0x15e)];_0x315743<_0x541aa8;_0x315743++)_0x4da63b[_0x315743](_0x315743);}_0x20b4f2[_0x136692(0x15e)]&&(_0x43bfc7['props']=_0x20b4f2);}catch(_0xcb2f1f){_0x412bfe(_0xcb2f1f,_0x43bfc7,_0x1e71c5);}return this[_0x136692(0xdf)](_0x25d451,_0x43bfc7),this[_0x136692(0x109)](_0x43bfc7,_0x1e71c5),_0x1e71c5[_0x136692(0x1ad)][_0x136692(0xdd)]=_0x1c36b0,_0x1e71c5[_0x136692(0x107)]--,_0x1e71c5['autoExpand']=_0x27a473,_0x1e71c5['autoExpand']&&_0x1e71c5[_0x136692(0xe8)]['pop'](),_0x43bfc7;}[_0x4248d6(0x14e)](_0x36fd65){var _0x3a70b0=_0x4248d6;return Object[_0x3a70b0(0x18e)]?Object['getOwnPropertySymbols'](_0x36fd65):[];}[_0x4248d6(0x184)](_0x2e653d){var _0x3fc9c1=_0x4248d6;return!!(_0x2e653d&&_0x319751['Set']&&this[_0x3fc9c1(0x177)](_0x2e653d)===_0x3fc9c1(0x10c)&&_0x2e653d[_0x3fc9c1(0x1ac)]);}[_0x4248d6(0xf8)](_0x52d6ba,_0x57f26e,_0xff5ab3){var _0xd01f4b=_0x4248d6;return _0xff5ab3[_0xd01f4b(0x12b)]?typeof _0x52d6ba[_0x57f26e]==_0xd01f4b(0xea):!0x1;}[_0x4248d6(0x136)](_0x89a353){var _0x3c333c=_0x4248d6,_0x45a790='';return _0x45a790=typeof _0x89a353,_0x45a790===_0x3c333c(0x183)?this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x114)?_0x45a790=_0x3c333c(0xfb):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x126)?_0x45a790=_0x3c333c(0xf3):this[_0x3c333c(0x177)](_0x89a353)===_0x3c333c(0x141)?_0x45a790=_0x3c333c(0x18b):_0x89a353===null?_0x45a790=_0x3c333c(0x159):_0x89a353[_0x3c333c(0x1a6)]&&(_0x45a790=_0x89a353[_0x3c333c(0x1a6)][_0x3c333c(0x106)]||_0x45a790):_0x45a790==='undefined'&&this[_0x3c333c(0xd7)]&&_0x89a353 instanceof this[_0x3c333c(0xd7)]&&(_0x45a790=_0x3c333c(0x168)),_0x45a790;}[_0x4248d6(0x177)](_0xb28b5){var _0x2d6e81=_0x4248d6;return Object[_0x2d6e81(0x180)][_0x2d6e81(0x14d)]['call'](_0xb28b5);}['_isPrimitiveType'](_0x578eee){var _0x153dac=_0x4248d6;return _0x578eee===_0x153dac(0x16b)||_0x578eee===_0x153dac(0x13c)||_0x578eee===_0x153dac(0x135);}[_0x4248d6(0x163)](_0x13250b){var _0x289843=_0x4248d6;return _0x13250b===_0x289843(0x19c)||_0x13250b==='String'||_0x13250b===_0x289843(0x17c);}[_0x4248d6(0xf7)](_0x45b196,_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3){var _0x5b97f2=this;return function(_0x4a4e4b){var _0x21f6c7=_0x394b,_0x104c97=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0xdd)],_0x4c3709=_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x1a8)],_0x702bea=_0x413025[_0x21f6c7(0x1ad)]['parent'];_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x104c97,_0x413025['node']['index']=typeof _0x35730f==_0x21f6c7(0x135)?_0x35730f:_0x4a4e4b,_0x45b196[_0x21f6c7(0x134)](_0x5b97f2[_0x21f6c7(0x181)](_0x414548,_0x39dc3e,_0x35730f,_0x413025,_0x3c0ab3)),_0x413025[_0x21f6c7(0x1ad)][_0x21f6c7(0x160)]=_0x702bea,_0x413025[_0x21f6c7(0x1ad)]['index']=_0x4c3709;};}[_0x4248d6(0x108)](_0x4609e5,_0x15cfe4,_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359){var _0x4cf52b=_0x4248d6,_0x40276a=this;return _0x15cfe4['_p_'+_0x356575[_0x4cf52b(0x14d)]()]=!0x0,function(_0x3325f7){var _0x2b8d06=_0x4cf52b,_0x2eeeea=_0x357193['node'][_0x2b8d06(0xdd)],_0x23c718=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)],_0x14d3c3=_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)];_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x160)]=_0x2eeeea,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x3325f7,_0x4609e5[_0x2b8d06(0x134)](_0x40276a[_0x2b8d06(0x181)](_0x26414f,_0x3d8f09,_0x356575,_0x357193,_0x83f359)),_0x357193['node'][_0x2b8d06(0x160)]=_0x14d3c3,_0x357193[_0x2b8d06(0x1ad)][_0x2b8d06(0x1a8)]=_0x23c718;};}['_property'](_0x9ab64f,_0x4d90b9,_0x183599,_0xd58b2b,_0x43af40){var _0x14708=_0x4248d6,_0x446500=this;_0x43af40||(_0x43af40=function(_0x4bdfb1,_0x4bdc4d){return _0x4bdfb1[_0x4bdc4d];});var _0x182c0f=_0x183599[_0x14708(0x14d)](),_0x5b3e54=_0xd58b2b[_0x14708(0x13f)]||{},_0x527792=_0xd58b2b['depth'],_0x508312=_0xd58b2b['isExpressionToEvaluate'];try{var _0x521058=this[_0x14708(0x143)](_0x9ab64f),_0x4123ea=_0x182c0f;_0x521058&&_0x4123ea[0x0]==='\\x27'&&(_0x4123ea=_0x4123ea[_0x14708(0x112)](0x1,_0x4123ea['length']-0x2));var _0x26de9a=_0xd58b2b['expressionsToEvaluate']=_0x5b3e54[_0x14708(0x12e)+_0x4123ea];_0x26de9a&&(_0xd58b2b[_0x14708(0x129)]=_0xd58b2b['depth']+0x1),_0xd58b2b['isExpressionToEvaluate']=!!_0x26de9a;var _0x53a6b3=typeof _0x183599==_0x14708(0x176),_0x31790b={'name':_0x53a6b3||_0x521058?_0x182c0f:this[_0x14708(0x196)](_0x182c0f)};if(_0x53a6b3&&(_0x31790b[_0x14708(0x176)]=!0x0),!(_0x4d90b9===_0x14708(0xfb)||_0x4d90b9===_0x14708(0xe2))){var _0x428e2f=this['_getOwnPropertyDescriptor'](_0x9ab64f,_0x183599);if(_0x428e2f&&(_0x428e2f['set']&&(_0x31790b['setter']=!0x0),_0x428e2f[_0x14708(0x1a5)]&&!_0x26de9a&&!_0xd58b2b[_0x14708(0x18d)]))return _0x31790b[_0x14708(0x173)]=!0x0,this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x5786e9;try{_0x5786e9=_0x43af40(_0x9ab64f,_0x183599);}catch(_0x396ba8){return _0x31790b={'name':_0x182c0f,'type':'unknown','error':_0x396ba8[_0x14708(0xe6)]},this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b),_0x31790b;}var _0x52ddfc=this['_type'](_0x5786e9),_0x1f051f=this[_0x14708(0x115)](_0x52ddfc);if(_0x31790b['type']=_0x52ddfc,_0x1f051f)this['_processTreeNodeResult'](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x1b14f0=_0x14708;_0x31790b[_0x1b14f0(0x17f)]=_0x5786e9['valueOf'](),!_0x26de9a&&_0x446500[_0x1b14f0(0xe3)](_0x52ddfc,_0x31790b,_0xd58b2b,{});});else{var _0x348206=_0xd58b2b[_0x14708(0x182)]&&_0xd58b2b['level']<_0xd58b2b[_0x14708(0x167)]&&_0xd58b2b[_0x14708(0xe8)]['indexOf'](_0x5786e9)<0x0&&_0x52ddfc!==_0x14708(0xea)&&_0xd58b2b[_0x14708(0x175)]<_0xd58b2b[_0x14708(0xe1)];_0x348206||_0xd58b2b[_0x14708(0x107)]<_0x527792||_0x26de9a?(this[_0x14708(0x1b6)](_0x31790b,_0x5786e9,_0xd58b2b,_0x26de9a||{}),this['_additionalMetadata'](_0x5786e9,_0x31790b)):this[_0x14708(0x1b4)](_0x31790b,_0xd58b2b,_0x5786e9,function(){var _0x2385ba=_0x14708;_0x52ddfc===_0x2385ba(0x159)||_0x52ddfc==='undefined'||(delete _0x31790b[_0x2385ba(0x17f)],_0x31790b[_0x2385ba(0x125)]=!0x0);});}return _0x31790b;}finally{_0xd58b2b['expressionsToEvaluate']=_0x5b3e54,_0xd58b2b[_0x14708(0x129)]=_0x527792,_0xd58b2b[_0x14708(0x153)]=_0x508312;}}[_0x4248d6(0xe3)](_0x305781,_0x1212b3,_0x3beb27,_0x522683){var _0x4d2057=_0x4248d6,_0x2b2a31=_0x522683['strLength']||_0x3beb27[_0x4d2057(0x185)];if((_0x305781===_0x4d2057(0x13c)||_0x305781===_0x4d2057(0x101))&&_0x1212b3[_0x4d2057(0x17f)]){let _0x15d632=_0x1212b3['value'][_0x4d2057(0x15e)];_0x3beb27[_0x4d2057(0x104)]+=_0x15d632,_0x3beb27[_0x4d2057(0x104)]>_0x3beb27['totalStrLength']?(_0x1212b3['capped']='',delete _0x1212b3['value']):_0x15d632>_0x2b2a31&&(_0x1212b3[_0x4d2057(0x125)]=_0x1212b3[_0x4d2057(0x17f)][_0x4d2057(0x112)](0x0,_0x2b2a31),delete _0x1212b3['value']);}}['_isMap'](_0x2ac54f){var _0x1921a0=_0x4248d6;return!!(_0x2ac54f&&_0x319751['Map']&&this[_0x1921a0(0x177)](_0x2ac54f)===_0x1921a0(0x1a9)&&_0x2ac54f[_0x1921a0(0x1ac)]);}['_propertyName'](_0x53ffeb){var _0x2f97d5=_0x4248d6;if(_0x53ffeb[_0x2f97d5(0x12f)](/^\\d+$/))return _0x53ffeb;var _0x2b8f72;try{_0x2b8f72=JSON[_0x2f97d5(0x11a)](''+_0x53ffeb);}catch{_0x2b8f72='\\x22'+this[_0x2f97d5(0x177)](_0x53ffeb)+'\\x22';}return _0x2b8f72[_0x2f97d5(0x12f)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2b8f72=_0x2b8f72['substr'](0x1,_0x2b8f72[_0x2f97d5(0x15e)]-0x2):_0x2b8f72=_0x2b8f72[_0x2f97d5(0x130)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x2f97d5(0x130)](/(^\"|\"$)/g,'\\x27'),_0x2b8f72;}[_0x4248d6(0x1b4)](_0x5beb6d,_0x4cc6c2,_0x55db92,_0x5a76f6){var _0x813bc8=_0x4248d6;this[_0x813bc8(0x140)](_0x5beb6d,_0x4cc6c2),_0x5a76f6&&_0x5a76f6(),this[_0x813bc8(0xdf)](_0x55db92,_0x5beb6d),this[_0x813bc8(0x109)](_0x5beb6d,_0x4cc6c2);}['_treeNodePropertiesBeforeFullValue'](_0x3c6961,_0x172ffa){var _0x174417=_0x4248d6;this[_0x174417(0x13e)](_0x3c6961,_0x172ffa),this[_0x174417(0x188)](_0x3c6961,_0x172ffa),this['_setNodeExpressionPath'](_0x3c6961,_0x172ffa),this[_0x174417(0x117)](_0x3c6961,_0x172ffa);}[_0x4248d6(0x13e)](_0x232fb1,_0x1546dc){}[_0x4248d6(0x188)](_0x1b55ca,_0x1dc1b0){}[_0x4248d6(0x1a7)](_0x290ddd,_0x5ea425){}[_0x4248d6(0xed)](_0x3c1026){return _0x3c1026===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x5816de,_0x51ad0f){var _0x4e3207=_0x4248d6;this[_0x4e3207(0x1a7)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x195)](_0x5816de),_0x51ad0f[_0x4e3207(0xe4)]&&this['_sortProps'](_0x5816de),this[_0x4e3207(0x11c)](_0x5816de,_0x51ad0f),this[_0x4e3207(0x19b)](_0x5816de,_0x51ad0f),this['_cleanNode'](_0x5816de);}[_0x4248d6(0xdf)](_0x3cc52c,_0x4d38a7){var _0x41e4dd=_0x4248d6;let _0x53c9b7;try{_0x319751[_0x41e4dd(0xf9)]&&(_0x53c9b7=_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)],_0x319751[_0x41e4dd(0xf9)]['error']=function(){}),_0x3cc52c&&typeof _0x3cc52c[_0x41e4dd(0x15e)]==_0x41e4dd(0x135)&&(_0x4d38a7[_0x41e4dd(0x15e)]=_0x3cc52c[_0x41e4dd(0x15e)]);}catch{}finally{_0x53c9b7&&(_0x319751[_0x41e4dd(0xf9)][_0x41e4dd(0x139)]=_0x53c9b7);}if(_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x135)||_0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0x17c)){if(isNaN(_0x4d38a7['value']))_0x4d38a7[_0x41e4dd(0x19a)]=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];else switch(_0x4d38a7[_0x41e4dd(0x17f)]){case Number[_0x41e4dd(0xf1)]:_0x4d38a7[_0x41e4dd(0x199)]=!0x0,delete _0x4d38a7['value'];break;case Number['NEGATIVE_INFINITY']:_0x4d38a7['negativeInfinity']=!0x0,delete _0x4d38a7[_0x41e4dd(0x17f)];break;case 0x0:this['_isNegativeZero'](_0x4d38a7[_0x41e4dd(0x17f)])&&(_0x4d38a7[_0x41e4dd(0x161)]=!0x0);break;}}else _0x4d38a7[_0x41e4dd(0x191)]===_0x41e4dd(0xea)&&typeof _0x3cc52c[_0x41e4dd(0x106)]==_0x41e4dd(0x13c)&&_0x3cc52c[_0x41e4dd(0x106)]&&_0x4d38a7['name']&&_0x3cc52c[_0x41e4dd(0x106)]!==_0x4d38a7['name']&&(_0x4d38a7[_0x41e4dd(0x146)]=_0x3cc52c['name']);}['_isNegativeZero'](_0x545d70){var _0x3f5f78=_0x4248d6;return 0x1/_0x545d70===Number[_0x3f5f78(0x157)];}[_0x4248d6(0x178)](_0x48342d){var _0x1133ce=_0x4248d6;!_0x48342d[_0x1133ce(0x19d)]||!_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x15e)]||_0x48342d['type']===_0x1133ce(0xfb)||_0x48342d[_0x1133ce(0x191)]==='Map'||_0x48342d[_0x1133ce(0x191)]===_0x1133ce(0x16c)||_0x48342d[_0x1133ce(0x19d)][_0x1133ce(0x17b)](function(_0x358f74,_0x251519){var _0x197d94=_0x1133ce,_0xba1944=_0x358f74[_0x197d94(0x106)][_0x197d94(0x18f)](),_0x138aff=_0x251519[_0x197d94(0x106)]['toLowerCase']();return _0xba1944<_0x138aff?-0x1:_0xba1944>_0x138aff?0x1:0x0;});}[_0x4248d6(0x11c)](_0x180095,_0x94a7be){var _0xb3b43a=_0x4248d6;if(!(_0x94a7be[_0xb3b43a(0x12b)]||!_0x180095[_0xb3b43a(0x19d)]||!_0x180095[_0xb3b43a(0x19d)]['length'])){for(var _0x46653e=[],_0x80c338=[],_0x142411=0x0,_0x2d6021=_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x15e)];_0x142411<_0x2d6021;_0x142411++){var _0x413289=_0x180095[_0xb3b43a(0x19d)][_0x142411];_0x413289[_0xb3b43a(0x191)]===_0xb3b43a(0xea)?_0x46653e[_0xb3b43a(0x134)](_0x413289):_0x80c338[_0xb3b43a(0x134)](_0x413289);}if(!(!_0x80c338[_0xb3b43a(0x15e)]||_0x46653e['length']<=0x1)){_0x180095[_0xb3b43a(0x19d)]=_0x80c338;var _0x2274df={'functionsNode':!0x0,'props':_0x46653e};this[_0xb3b43a(0x13e)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x1a7)](_0x2274df,_0x94a7be),this[_0xb3b43a(0x195)](_0x2274df),this[_0xb3b43a(0x117)](_0x2274df,_0x94a7be),_0x2274df['id']+='\\x20f',_0x180095[_0xb3b43a(0x19d)][_0xb3b43a(0x119)](_0x2274df);}}}[_0x4248d6(0x19b)](_0x488e07,_0x30da5f){}[_0x4248d6(0x195)](_0x2fb9ca){}[_0x4248d6(0xd4)](_0x46e88e){var _0x1167c4=_0x4248d6;return Array[_0x1167c4(0xfa)](_0x46e88e)||typeof _0x46e88e=='object'&&this[_0x1167c4(0x177)](_0x46e88e)===_0x1167c4(0x114);}['_setNodePermissions'](_0x3144a8,_0xd8d5c7){}['_cleanNode'](_0x349cb4){var _0x2a5872=_0x4248d6;delete _0x349cb4[_0x2a5872(0x148)],delete _0x349cb4[_0x2a5872(0x18a)],delete _0x349cb4[_0x2a5872(0x15b)];}[_0x4248d6(0x164)](_0x1387b6,_0x59de70){}}let _0x59cd6d=new _0x3187a7(),_0x11e492={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0xb7e3db={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x2e8232(_0xcfd290,_0x3e941f,_0x3283c2,_0x23065e,_0x2a7f01,_0x38778e){var _0x42ca29=_0x4248d6;let _0x401ff6,_0x4885de;try{_0x4885de=_0x299da3(),_0x401ff6=_0x2408ba[_0x3e941f],!_0x401ff6||_0x4885de-_0x401ff6['ts']>0x1f4&&_0x401ff6[_0x42ca29(0x100)]&&_0x401ff6[_0x42ca29(0x1a4)]/_0x401ff6[_0x42ca29(0x100)]<0x64?(_0x2408ba[_0x3e941f]=_0x401ff6={'count':0x0,'time':0x0,'ts':_0x4885de},_0x2408ba[_0x42ca29(0x10f)]={}):_0x4885de-_0x2408ba[_0x42ca29(0x10f)]['ts']>0x32&&_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]&&_0x2408ba[_0x42ca29(0x10f)]['time']/_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]<0x64&&(_0x2408ba[_0x42ca29(0x10f)]={});let _0x3905d7=[],_0x5c3a59=_0x401ff6['reduceLimits']||_0x2408ba[_0x42ca29(0x10f)]['reduceLimits']?_0xb7e3db:_0x11e492,_0x4072d6=_0x9c85d2=>{var _0x5754ea=_0x42ca29;let _0xec7735={};return _0xec7735[_0x5754ea(0x19d)]=_0x9c85d2[_0x5754ea(0x19d)],_0xec7735[_0x5754ea(0x162)]=_0x9c85d2[_0x5754ea(0x162)],_0xec7735[_0x5754ea(0x185)]=_0x9c85d2[_0x5754ea(0x185)],_0xec7735['totalStrLength']=_0x9c85d2[_0x5754ea(0x155)],_0xec7735[_0x5754ea(0xe1)]=_0x9c85d2[_0x5754ea(0xe1)],_0xec7735[_0x5754ea(0x167)]=_0x9c85d2[_0x5754ea(0x167)],_0xec7735[_0x5754ea(0xe4)]=!0x1,_0xec7735[_0x5754ea(0x12b)]=!_0x5d267a,_0xec7735[_0x5754ea(0x129)]=0x1,_0xec7735[_0x5754ea(0x107)]=0x0,_0xec7735['expId']=_0x5754ea(0xff),_0xec7735[_0x5754ea(0x179)]=_0x5754ea(0xfd),_0xec7735[_0x5754ea(0x182)]=!0x0,_0xec7735[_0x5754ea(0xe8)]=[],_0xec7735[_0x5754ea(0x175)]=0x0,_0xec7735[_0x5754ea(0x18d)]=!0x0,_0xec7735[_0x5754ea(0x104)]=0x0,_0xec7735[_0x5754ea(0x1ad)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0xec7735;};for(var _0x4edb78=0x0;_0x4edb78<_0x2a7f01[_0x42ca29(0x15e)];_0x4edb78++)_0x3905d7[_0x42ca29(0x134)](_0x59cd6d['serialize']({'timeNode':_0xcfd290===_0x42ca29(0x1a4)||void 0x0},_0x2a7f01[_0x4edb78],_0x4072d6(_0x5c3a59),{}));if(_0xcfd290==='trace'){let _0x34cb91=Error[_0x42ca29(0x10b)];try{Error[_0x42ca29(0x10b)]=0x1/0x0,_0x3905d7[_0x42ca29(0x134)](_0x59cd6d[_0x42ca29(0x1b6)]({'stackNode':!0x0},new Error()['stack'],_0x4072d6(_0x5c3a59),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x34cb91;}}return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':_0x3905d7,'id':_0x3e941f,'context':_0x38778e}]};}catch(_0x48f0ce){return{'method':'log','version':_0x563504,'args':[{'ts':_0x3283c2,'session':_0x23065e,'args':[{'type':_0x42ca29(0x113),'error':_0x48f0ce&&_0x48f0ce['message']}],'id':_0x3e941f,'context':_0x38778e}]};}finally{try{if(_0x401ff6&&_0x4885de){let _0x2ff189=_0x299da3();_0x401ff6['count']++,_0x401ff6[_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x401ff6['ts']=_0x2ff189,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]++,_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]+=_0x5dead5(_0x4885de,_0x2ff189),_0x2408ba[_0x42ca29(0x10f)]['ts']=_0x2ff189,(_0x401ff6['count']>0x32||_0x401ff6[_0x42ca29(0x1a4)]>0x64)&&(_0x401ff6[_0x42ca29(0x144)]=!0x0),(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x100)]>0x3e8||_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x1a4)]>0x12c)&&(_0x2408ba[_0x42ca29(0x10f)][_0x42ca29(0x144)]=!0x0);}}catch{}}}return _0x2e8232;}((_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x4e0e77,_0x37052b,_0x203bb4,_0x2f9931,_0x366303)=>{var _0x521a84=_0x30d46c;if(_0x3080e0['_console_ninja'])return _0x3080e0[_0x521a84(0xf4)];if(!J(_0x3080e0,_0x203bb4,_0x4b7e45))return _0x3080e0['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x3080e0[_0x521a84(0xf4)];let _0x3493fc=W(_0x3080e0),_0x4cad30=_0x3493fc[_0x521a84(0xf0)],_0x819273=_0x3493fc[_0x521a84(0x16d)],_0x544cc2=_0x3493fc[_0x521a84(0x149)],_0x3eb3e6={'hits':{},'ts':{}},_0x25ff14=Y(_0x3080e0,_0x2f9931,_0x3eb3e6,_0x4e0e77),_0x192300=_0x25873f=>{_0x3eb3e6['ts'][_0x25873f]=_0x819273();},_0x44f510=(_0x5562fd,_0x2f6706)=>{var _0x2ecd66=_0x521a84;let _0x2cc916=_0x3eb3e6['ts'][_0x2f6706];if(delete _0x3eb3e6['ts'][_0x2f6706],_0x2cc916){let _0x1f5842=_0x4cad30(_0x2cc916,_0x819273());_0x53751c(_0x25ff14(_0x2ecd66(0x1a4),_0x5562fd,_0x544cc2(),_0xf489e2,[_0x1f5842],_0x2f6706));}},_0x18f78b=_0x27e533=>_0x74adcc=>{var _0x53f31a=_0x521a84;try{_0x192300(_0x74adcc),_0x27e533(_0x74adcc);}finally{_0x3080e0[_0x53f31a(0xf9)][_0x53f31a(0x1a4)]=_0x27e533;}},_0x1553d8=_0x4b624b=>_0x5ca441=>{var _0x2ffff7=_0x521a84;try{let [_0x5e2d86,_0x46db52]=_0x5ca441[_0x2ffff7(0x13d)](_0x2ffff7(0x17d));_0x44f510(_0x46db52,_0x5e2d86),_0x4b624b(_0x5e2d86);}finally{_0x3080e0[_0x2ffff7(0xf9)][_0x2ffff7(0x142)]=_0x4b624b;}};_0x3080e0[_0x521a84(0xf4)]={'consoleLog':(_0x18e280,_0x1f4d15)=>{var _0x1b98f5=_0x521a84;_0x3080e0['console'][_0x1b98f5(0x1a0)][_0x1b98f5(0x106)]!==_0x1b98f5(0x123)&&_0x53751c(_0x25ff14(_0x1b98f5(0x1a0),_0x18e280,_0x544cc2(),_0xf489e2,_0x1f4d15));},'consoleTrace':(_0x4c956b,_0xcddb11)=>{var _0x5dd028=_0x521a84;_0x3080e0[_0x5dd028(0xf9)][_0x5dd028(0x1a0)][_0x5dd028(0x106)]!==_0x5dd028(0x110)&&_0x53751c(_0x25ff14(_0x5dd028(0x156),_0x4c956b,_0x544cc2(),_0xf489e2,_0xcddb11));},'consoleTime':()=>{var _0x10a308=_0x521a84;_0x3080e0['console'][_0x10a308(0x1a4)]=_0x18f78b(_0x3080e0['console'][_0x10a308(0x1a4)]);},'consoleTimeEnd':()=>{var _0x44a884=_0x521a84;_0x3080e0[_0x44a884(0xf9)]['timeEnd']=_0x1553d8(_0x3080e0[_0x44a884(0xf9)][_0x44a884(0x142)]);},'autoLog':(_0x479660,_0xd1686c)=>{var _0x40646e=_0x521a84;_0x53751c(_0x25ff14(_0x40646e(0x1a0),_0xd1686c,_0x544cc2(),_0xf489e2,[_0x479660]));},'autoLogMany':(_0x91fed5,_0x40a84f)=>{var _0x7344e1=_0x521a84;_0x53751c(_0x25ff14(_0x7344e1(0x1a0),_0x91fed5,_0x544cc2(),_0xf489e2,_0x40a84f));},'autoTrace':(_0x3546f7,_0x3d8eb5)=>{var _0x25512f=_0x521a84;_0x53751c(_0x25ff14(_0x25512f(0x156),_0x3d8eb5,_0x544cc2(),_0xf489e2,[_0x3546f7]));},'autoTraceMany':(_0x2b722f,_0x2df03b)=>{var _0x20acf1=_0x521a84;_0x53751c(_0x25ff14(_0x20acf1(0x156),_0x2b722f,_0x544cc2(),_0xf489e2,_0x2df03b));},'autoTime':(_0x297194,_0x1a6b68,_0x59d60b)=>{_0x192300(_0x59d60b);},'autoTimeEnd':(_0x4b1174,_0x19e4f9,_0x3e9773)=>{_0x44f510(_0x19e4f9,_0x3e9773);},'coverage':_0x169035=>{var _0x94fdd=_0x521a84;_0x53751c({'method':_0x94fdd(0x187),'version':_0x4e0e77,'args':[{'id':_0x169035}]});}};let _0x53751c=b(_0x3080e0,_0x13ad85,_0x4b0199,_0x2d40f6,_0x4b7e45,_0x366303),_0xf489e2=_0x3080e0[_0x521a84(0xd3)];return _0x3080e0[_0x521a84(0xf4)];})(globalThis,_0x30d46c(0xe0),_0x30d46c(0xcc),\"c:\\\\Users\\\\USER\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.240\\\\node_modules\",_0x30d46c(0x17a),_0x30d46c(0xf2),_0x30d46c(0xd9),_0x30d46c(0x1aa),_0x30d46c(0x103),_0x30d46c(0xee));");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29sbGVjdC1ndWVzdC1hdHRlbmRhbmNlLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGljdHVyZUdyaWQuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3N0b3JpZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9pMThuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXNvbHZlUGF0aC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpMThuLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXJjb2RlLnJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hZGQtdG8tY2FsZW5kYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ibHVyaGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dlZXRhbGVydDJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2lwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2lwZXIvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiJdLCJuYW1lcyI6WyJDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlIiwic2V0U2hvd01vZGFsIiwic2hvd01vZGFsIiwibmFtZSIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsImF0dGVuZGluZyIsInNldEF0dGVuZGluZyIsImVtYWlsIiwic2V0RW1haWwiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzY3JpcHRVcmwiLCJodHRwU3RhdHVzIiwic3RhdHVzQ29kZSIsIlN3YWwiLCJmaXJlIiwiYnVpbGRDb3JzRnJlZVVybCIsInRhcmdldCIsImNvcnNGcmVlVXJsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJvb19vbyIsImRhdGEiLCJ0ZXh0Iiwic3RhdHVzIiwiZXJyb3IiLCJfX2pzeCIsImNsYXNzTmFtZSIsInRhYkluZGV4Iiwicm9sZSIsInN0eWxlIiwiZGlzcGxheSIsImNvbG9yIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ0eXBlIiwib25DbGljayIsImZvbnRTaXplIiwib25TdWJtaXQiLCJodG1sRm9yIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicm93cyIsIm9vX2NtIiwiZXZhbCIsImkiLCJ2IiwiY29uc29sZUxvZyIsIm9vX3RyIiwiY29uc29sZVRyYWNlIiwib29fdHMiLCJjb25zb2xlVGltZSIsIm9vX3RlIiwiY29uc29sZVRpbWVFbmQiLCJMb3ZlVGl0bGVJY29uIiwiTGF6eUxvYWRJbWFnZSIsInNyYyIsIndpZHRoIiwiZWZmZWN0IiwiYWx0IiwiRXZlbnREYXRlSWNvbiIsImZpbGwiLCJ4bWxucyIsImQiLCJIZWFkZXJMb2dvIiwiYmFja2ZhY2VWaXNpYmlsaXR5IiwidHJhbnNmb3JtIiwidHJhbnNsYXRlQ29uZmlnIiwiYXBwQ29uZmlnIiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNvbmZpZ0xhbmciLCJsYW5nIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJfb2JqZWN0U3ByZWFkIiwiU2hvd0ludml0ZSIsImN1cnJlbnRVcmwiLCJndWVzdExpc3RMYXN0VXBkYXRlZEF0IiwiZ3Vlc3QiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJsb2dvIiwib2dUYWdzIiwiY291cGxlSW5mbyIsInZlbnVlIiwid2VkZGluZ0RheSIsIndlZGRpbmdEYXRlIiwid2VkZGluZ1RpbWUiLCJjYWxlbmRhckluZm8iLCJicmlkZU5hbWUiLCJncm9vbU5hbWUiLCJoYXNodGFnIiwiY291cGxlTmFtZUZvcm1hdCIsImNvdXBsZU5hbWVTdHIiLCJjb3VwbGVOYW1lIiwiUmVhY3QiLCJGcmFnbWVudCIsInZlbnVlQnJpZWYiLCJjaXR5IiwiY291bnRyeSIsIndlZGRpbmdEYXRlQnJpZWYiLCJldmVudFRpdGxlIiwiZXZlbnREZXNjcmlwdGlvbiIsImNhbGVuZGFyRXZlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJzdGFydFRpbWUiLCJ0aW1lU3RhcnRJU08iLCJlbmRUaW1lIiwidGltZUVuZElTTyIsImV2ZW50U2NoZWR1bGUiLCJpY29uIiwiZXZlbnQiLCJkYXRlIiwidGltZSIsInVzZUVmZmVjdCIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJoYW5kbGVTY3JvbGwiLCJlbGVtZW50IiwiY3VycmVudCIsImVsZW1lbnRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfSlNYU3R5bGUiLCJIZWFkIiwiX2V4dGVuZHMiLCJndWVzdE5hbWUiLCJ1cmwiLCJtb2RpZmllZFRpbWUiLCJyZXNvbHZlUGF0aCIsImF1dGhvciIsIm9wYWNpdHkiLCJwYWRkaW5nVG9wIiwibWF4SGVpZ2h0IiwibWFyZ2luIiwibWFyZ2luVG9wIiwiaGVhZGVyTG9nbyIsImFuaW1hdGlvbkRlbGF5IiwiekluZGV4IiwidmlzaWJpbGl0eSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uTmFtZSIsInBhZGRpbmdCb3R0b20iLCJBZGRUb0NhbGVuZGFyIiwiYnV0dG9uTGFiZWwiLCJtYXJnaW5SaWdodCIsImhyZWYiLCJtYXBVcmwiLCJtYXhXaWR0aCIsIm92ZXJmbG93WCIsInRleHRPdmVyZmxvdyIsImFkZHJlc3NMaW5lMSIsInJlZiIsImJveFNoYWRvdyIsIm1hcCIsImV2IiwiaW5kZXgiLCJrZXkiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwiU3RvcmllcyIsIlBpY3R1cmVzR3JpZCIsIm1hcmdpbkJvdHRvbSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImxvY2FsZVBhcmFtcyIsInF1ZXJ5IiwiZW1wdHlHdWVzdFBhcmFtcyIsImd1ZXN0SWQiLCJncmVldGluZyIsInJlcSIsInUiLCJndWVzdERhdGEiLCJndWVzdExpc3QiLCJtZXRhIiwibGFzdFVwZGF0ZWRBdCIsImZpbHRlciIsInBpY3R1cmVzIiwic2VsZWN0ZWRQaWN0dXJlIiwic2V0U2VsZWN0ZWRQaWN0dXJlIiwiaW1hZ2VMb2FkZWQiLCJzZXRJbWFnZUxvYWRlZCIsImxvYWRlZEltYWdlc0NvdW50Iiwic2V0TG9hZGVkSW1hZ2VzQ291bnQiLCJoYW5kbGVTZWxlY3RQaWN0dXJlIiwicGljdHVyZSIsImxvYWRJbWFnZXMiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsInByZXZDb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwibGVuZ3RoIiwib2JqZWN0Rml0IiwiQnJpZGUiLCJHcm9vbSIsIlN3aXBlckNvcmUiLCJ1c2UiLCJBdXRvcGxheSIsIlN3aXBlciIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJtb2R1bGVzIiwiUGFnaW5hdGlvbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJvblN3aXBlciIsInN3aXBlciIsIm9uU2xpZGVDaGFuZ2UiLCJTd2lwZXJTbGlkZSIsInNpdGVOYW1lIiwicHVibGlzaGVkVGltZSIsInByb3BlcnR5IiwiY29udGVudCIsInJlbCIsImJhc2VDb25maWciLCJzaG93QnVpbHRXaXRoSW5mbyIsInNob3dRckNvZGUiLCJmb290ZXJMb2dvIiwiZm9vdGVyTG9nb1R5cGUiLCJhZGRyZXNzTGluZTIiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJjb2RlIiwibGFiZWwiLCJ0cmFuc2xhdGlvbnMiLCJlbiIsIkkxOG4iLCJmb3JFYWNoIiwibGFuZ3VhZ2VPcHRpb25zIiwic2V0TG9jYWxlIiwicGFyYW1zIiwiVHJhbnMiLCJwcm9wcyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaTE4bktleSIsImZhbGxiYWNrSG9zdCIsInBhdGgiLCJzdGFydHNXaXRoIiwicHJvdG9jb2wiLCJob3N0Iiwic2NoZW1lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFD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QyxZQUFBO0lBQUE7RUFBQSxDQUNULENBQUMsRUFDUlosS0FBQTtJQUNFNkMsQ0FBQyxFQUFDLHNSQUFzUjtJQUN4UkYsSUFBSSxFQUFDLFNBQVM7SUFBQXBDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNULENBQUMsRUFDUlosS0FBQTtJQUNFNkMsQ0FBQyxFQUFDLGlKQUFpSjtJQUNuSkYsSUFBSSxFQUFDLFNBQVM7SUFBQXBDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNULENBQUMsRUFDUlosS0FBQTtJQUNFNkMsQ0FBQyxFQUFDLHlKQUF5SjtJQUMzSkYsSUFBSSxFQUFDLFNBQVM7SUFBQXBDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNULENBQUMsRUFDUlosS0FBQTtJQUNFNkMsQ0FBQyxFQUFDLG1KQUFtSjtJQUNySkYsSUFBSSxFQUFDLFNBQVM7SUFBQXBDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNULENBQUMsRUFDUlosS0FBQTtJQUNFNkMsQ0FBQyxFQUFDLHNVQUFzVTtJQUN4VUYsSUFBSSxFQUFDLFNBQVM7SUFBQXBDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNULENBQUMsRUFDUlosS0FBQTtJQUNFNkMsQ0FBQyxFQUFDLGtUQUFrVDtJQUNwVEYsSUFBSSxFQUFDLFNBQVM7SUFBQXBDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNULENBQUMsRUFDUlosS0FB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Ozs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbmNvbnN0IENvbGxlY3RHdWVzdEF0dGVuZGFuY2UgPSAoeyBzZXRTaG93TW9kYWwsIHNob3dNb2RhbCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthdHRlbmRpbmcsIHNldEF0dGVuZGluZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNjcmlwdFVybCA9XHJcbiAgICAnaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J4YXBOdG04SnYyUUNOWXQ0Q3FHSl9tVnBFRUtFUk85ZlhVOEhyVGV4dURXdGhteGlRRjlORmNrNnJJalBaLUxnZFJIZy9leGVjJztcclxuXHJcbiAgZnVuY3Rpb24gaHR0cFN0YXR1cyhzdGF0dXNDb2RlKSB7XHJcbiAgICBpZiAoc3RhdHVzQ29kZSA+PSAyMDAgJiYgc3RhdHVzQ29kZSA8PSAyOTkpIHtcclxuICAgICAgU3dhbC5maXJlKCdTdWNjZXNzIScsICdXZSBhcHByZWNpYXRlIHlvdXIgcmVzcG9uc2UhJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuICAgICAgc2V0QXR0ZW5kaW5nKCcnKTtcclxuICAgICAgc2V0RW1haWwoJycpO1xyXG4gICAgICBzZXROYW1lKCcnKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA+PSA0MDAgJiYgc3RhdHVzQ29kZSA8PSA0OTkpIHtcclxuICAgICAgU3dhbC5maXJlKCdFcnJvciEnLCAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4hJywgJ2Vycm9yJyk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPj0gNTAwKSB7XHJcbiAgICAgIFN3YWwuZmlyZSgnRXJyb3IhJywgJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluIScsICdlcnJvcicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICd1bmtub3duIHN0YXR1cyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBidWlsZENvcnNGcmVlVXJsKHRhcmdldCkge1xyXG4gICAgcmV0dXJuIGBodHRwczovL3Byb3h5LmNvcnMuc2gvJHt0YXJnZXR9YDtcclxuICB9XHJcbiAgY29uc3QgY29yc0ZyZWVVcmwgPSBidWlsZENvcnNGcmVlVXJsKHNjcmlwdFVybCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhYXR0ZW5kaW5nKSB7XHJcbiAgICAgIFN3YWwuZmlyZSgnJywgJ0FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkJywgJ2Vycm9yJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29yc0ZyZWVVcmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgYXR0ZW5kaW5nIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDIwODY5Mzg1NjlfMGAscmVzcG9uc2UsICdyZXBvbnNlJykpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICBodHRwU3RhdHVzKHJlc3BvbnNlLnN0YXR1cyk7XHJcblxyXG4gICAgICAvLyBSZXNwb25zZSBmcm9tIEdvb2dsZSBTY3JpcHRcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIFN3YWwuZmlyZSgnRXJyb3IhJywgJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluIScsICdlcnJvcicpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9J21vZGFsJ1xyXG4gICAgICB0YWJJbmRleD0nLTEnXHJcbiAgICAgIHJvbGU9J2RpYWxvZydcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBzaG93TW9kYWwgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtZGlhbG9nJyByb2xlPSdkb2N1bWVudCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQgIGdsYXNzbW9ycGhpc20nPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2xvc2UgZ3Vlc3QtbW9kYWwnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPSd0cnVlJz4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHknPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtX3RpdGxlIG1iLTQnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSW5mb3JtIFVzIG9mIHlvdXIgYXZhaWxhYmlsaXR5XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgbWItMyc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0zJz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nYXR0ZW5kaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJ1xyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgV2lsbCB5b3UgYmUgYXR0ZW5kaW5nP1xyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICByb3dzPSc0J1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgICAgICBpZD0nYXR0ZW5kaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdHRlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdHRlbmRpbmcoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nZ3Vlc3QtZm9ybS1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gJ1N1Ym1pdHRpbmcuLi4nIDogJ1N1Ym1pdCd9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbGxlY3RHdWVzdEF0dGVuZGFuY2U7XHJcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0JztmdW5jdGlvbiBfMHgzOTFkKCl7dmFyIF8weDJkOGE5OD1bJ21lc3NhZ2UnLCd0ZXN0JywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJzZob0JISngnLCdmdW5jdGlvbicsJ19hbGxvd2VkVG9TZW5kJywnMTVabUxWTGwnLCdfaXNVbmRlZmluZWQnLCcnLCdlbnYnLCdlbGFwc2VkJywnUE9TSVRJVkVfSU5GSU5JVFknLCcxLjAuMCcsJ2RhdGUnLCdfY29uc29sZV9uaW5qYScsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5Jywnbm9kZU1vZHVsZXMnLCdfYWRkUHJvcGVydHknLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ2NvbnNvbGUnLCdpc0FycmF5JywnYXJyYXknLCcxMzEyNzY2ZkZMTEFEJywncm9vdF9leHAnLCdjYWxsJywncm9vdF9leHBfaWQnLCdjb3VudCcsJ1N0cmluZycsJ3dhcm4nLCcnLCdhbGxTdHJMZW5ndGgnLCcyMEF1TVh3WCcsJ25hbWUnLCdsZXZlbCcsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJzE5Nzg0UlpXS0dkJywnc3RhY2tUcmFjZUxpbWl0JywnW29iamVjdFxcXFx4MjBTZXRdJywnTWFwJywnMzkxNXpEY1d6WCcsJ2hpdHMnLCdkaXNhYmxlZFRyYWNlJywnbG9jYXRpb24nLCdzdWJzdHInLCd1bmtub3duJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdfaXNQcmltaXRpdmVUeXBlJywnbWV0aG9kJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ19pbk5leHRFZGdlJywndW5zaGlmdCcsJ3N0cmluZ2lmeScsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnX2FkZEZ1bmN0aW9uc05vZGUnLCd2ZXJzaW9ucycsJ19yZWNvbm5lY3RUaW1lb3V0JywnX2RhdGVUb1N0cmluZycsJ3JlbWl4JywnMTIzMjI5N3NtSXdNbScsJ2hvc3RuYW1lJywnZGlzYWJsZWRMb2cnLCdwZXJmX2hvb2tzJywnY2FwcGVkJywnW29iamVjdFxcXFx4MjBEYXRlXScsJzE0MjUzaERwSW5tJywndGhlbicsJ2RlcHRoJywnaGFzT3duUHJvcGVydHknLCdub0Z1bmN0aW9ucycsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnTkVYVF9SVU5USU1FJywnX3BfJywnbWF0Y2gnLCdyZXBsYWNlJywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdqb2luJywnZWRnZScsJ3B1c2gnLCdudW1iZXInLCdfdHlwZScsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywncHJvY2VzcycsJ2Vycm9yJywnX3BfbGVuZ3RoJywnZG9ja2VyaXplZEFwcCcsJ3N0cmluZycsJ3NwbGl0JywnX3NldE5vZGVJZCcsJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZScsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCd0aW1lRW5kJywnX2lzTWFwJywncmVkdWNlTGltaXRzJywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdmdW5jTmFtZScsJ2NhdGNoJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnbm93JywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCc0MzJNaEhORk8nLCdfY29ubmVjdGVkJywndG9TdHJpbmcnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnZGF0YScsJ2hydGltZScsJ2VudW1lcmFibGUnLCdhc3RybycsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCdfaW5Ccm93c2VyJywndG90YWxTdHJMZW5ndGgnLCd0cmFjZScsJ05FR0FUSVZFX0lORklOSVRZJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ251bGwnLCdudXh0JywnX2hhc01hcE9uSXRzUGF0aCcsJ1xcXFx4MjBzZXJ2ZXInLCdwb3J0JywnbGVuZ3RoJywnX1dlYlNvY2tldENsYXNzJywncGFyZW50JywnbmVnYXRpdmVaZXJvJywnZWxlbWVudHMnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdnbG9iYWwnLCdjYXBwZWRFbGVtZW50cycsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ0hUTUxBbGxDb2xsZWN0aW9uJywnU3ltYm9sJywncGF0aCcsJ2Jvb2xlYW4nLCdTZXQnLCd0aW1lU3RhbXAnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdfcF9uYW1lJywnX1N5bWJvbCcsJ19rZXlTdHJSZWdFeHAnLCdfZGlzcG9zZVdlYnNvY2tldCcsJ2dldHRlcicsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdzeW1ib2wnLCdfb2JqZWN0VG9TdHJpbmcnLCdfc29ydFByb3BzJywncm9vdEV4cHJlc3Npb24nLCd3ZWJwYWNrJywnc29ydCcsJ051bWJlcicsJzpsb2dQb2ludElkOicsJzgzNzYzNjBuVEZmQ28nLCd2YWx1ZScsJ3Byb3RvdHlwZScsJ19wcm9wZXJ0eScsJ2F1dG9FeHBhbmQnLCdvYmplY3QnLCdfaXNTZXQnLCdzdHJMZW5ndGgnLCdfc29ja2V0JywnY292ZXJhZ2UnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ3dzOi8vJywnX2hhc1NldE9uSXRzUGF0aCcsJ2JpZ2ludCcsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ3Jlc29sdmVHZXR0ZXJzJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywndG9Mb3dlckNhc2UnLCd1bnJlZicsJ3R5cGUnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcsJ19zZW5kRXJyb3JNZXNzYWdlJywnNTM4ODZSQkJFZlcnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ19wcm9wZXJ0eU5hbWUnLCdjbG9zZScsJ3VuZGVmaW5lZCcsJ3Bvc2l0aXZlSW5maW5pdHknLCduYW4nLCdfYWRkTG9hZE5vZGUnLCdCb29sZWFuJywncHJvcHMnLCduZXh0LmpzJywnb25vcGVuJywnbG9nJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdyZWxvYWQnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCd0aW1lJywnZ2V0JywnY29uc3RydWN0b3InLCdfc2V0Tm9kZUxhYmVsJywnaW5kZXgnLCdbb2JqZWN0XFxcXHgyME1hcF0nLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiRGFtaWxhcmVcXFwiLFxcXCIxNjkuMjU0LjgwLjgwXFxcIixcXFwiMTcyLjMxLjExMi4xXFxcIl0sJ29ubWVzc2FnZScsJ2ZvckVhY2gnLCdub2RlJywnZ2V0UHJvdG90eXBlT2YnLCdCdWZmZXInLCc0NDMxMDQwQ1FIRXNvJywnXFxcXHgyMGJyb3dzZXInLCdfcmVnRXhwVG9TdHJpbmcnLCdpbmNsdWRlcycsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdkZWZhdWx0Jywnc2VyaWFsaXplJywnNjA5OTInLCdfX2VzJysnTW9kdWxlJywncGVyZm9ybWFuY2UnLCdiaW5kJywncmVhZHlTdGF0ZScsJ19jb25uZWN0aW5nJywnX251bWJlclJlZ0V4cCcsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdfaXNBcnJheScsJ29uZXJyb3InLCdob3N0JywnX0hUTUxBbGxDb2xsZWN0aW9uJywnX3dzJywnMTY5ODM2MTg1MjU0MycsJ3NlbmQnLCdjb25jYXQnLCdnYXRld2F5LmRvY2tlci5pbnRlcm5hbCcsJ2N1cnJlbnQnLCdvbmNsb3NlJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJzEyNy4wLjAuMScsJ2F1dG9FeHBhbmRMaW1pdCcsJ0Vycm9yJywnX2NhcElmU3RyaW5nJywnc29ydFByb3BzJywnX3VuZGVmaW5lZCddO18weDM5MWQ9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4MmQ4YTk4O307cmV0dXJuIF8weDM5MWQoKTt9dmFyIF8weDMwZDQ2Yz1fMHgzOTRiO2Z1bmN0aW9uIF8weDM5NGIoXzB4MTIyZjMyLF8weDU2OWYyOCl7dmFyIF8weDM5MWRmMz1fMHgzOTFkKCk7cmV0dXJuIF8weDM5NGI9ZnVuY3Rpb24oXzB4Mzk0YjM1LF8weDJmYmUxNil7XzB4Mzk0YjM1PV8weDM5NGIzNS0weGNjO3ZhciBfMHgxMTE4OTA9XzB4MzkxZGYzW18weDM5NGIzNV07cmV0dXJuIF8weDExMTg5MDt9LF8weDM5NGIoXzB4MTIyZjMyLF8weDU2OWYyOCk7fShmdW5jdGlvbihfMHgxZDNlNTMsXzB4MWYyNGU1KXt2YXIgXzB4NDMwYzZjPV8weDM5NGIsXzB4NDU5NWVjPV8weDFkM2U1MygpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NTUwNmJmPXBhcnNlSW50KF8weDQzMGM2YygweGVjKSkvMHgxKigtcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTk0KSkvMHgyKSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTI3KSkvMHgzKihwYXJzZUludChfMHg0MzBjNmMoMHgxMDUpKS8weDQpKy1wYXJzZUludChfMHg0MzBjNmMoMHgxYjApKS8weDUrLXBhcnNlSW50KF8weDQzMGM2YygweGU5KSkvMHg2KihwYXJzZUludChfMHg0MzBjNmMoMHhmYykpLzB4NykrLXBhcnNlSW50KF8weDQzMGM2YygweDEwYSkpLzB4OCoocGFyc2VJbnQoXzB4NDMwYzZjKDB4MTBlKSkvMHg5KSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTdlKSkvMHhhKy1wYXJzZUludChfMHg0MzBjNmMoMHgxMjEpKS8weGIqKC1wYXJzZUludChfMHg0MzBjNmMoMHgxNGIpKS8weGMpO2lmKF8weDU1MDZiZj09PV8weDFmMjRlNSlicmVhaztlbHNlIF8weDQ1OTVlY1sncHVzaCddKF8weDQ1OTVlY1snc2hpZnQnXSgpKTt9Y2F0Y2goXzB4MTAzYjRhKXtfMHg0NTk1ZWNbJ3B1c2gnXShfMHg0NTk1ZWNbJ3NoaWZ0J10oKSk7fX19KF8weDM5MWQsMHg5NmRjZikpO3ZhciBqPU9iamVjdFsnY3JlYXRlJ10sSD1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10sRz1PYmplY3RbXzB4MzBkNDZjKDB4MTZlKV0sZWU9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eU5hbWVzJ10sdGU9T2JqZWN0W18weDMwZDQ2YygweDFhZSldLG5lPU9iamVjdFsncHJvdG90eXBlJ11bXzB4MzBkNDZjKDB4MTJhKV0scmU9KF8weDFkNWZjNixfMHg3NDc4MWQsXzB4OGYwM2NkLF8weDQ5ZmY0Zik9Pnt2YXIgXzB4MTgwZGNkPV8weDMwZDQ2YztpZihfMHg3NDc4MWQmJnR5cGVvZiBfMHg3NDc4MWQ9PV8weDE4MGRjZCgweDE4Myl8fHR5cGVvZiBfMHg3NDc4MWQ9PV8weDE4MGRjZCgweGVhKSl7Zm9yKGxldCBfMHgxNmNkOTUgb2YgZWUoXzB4NzQ3ODFkKSkhbmVbJ2NhbGwnXShfMHgxZDVmYzYsXzB4MTZjZDk1KSYmXzB4MTZjZDk1IT09XzB4OGYwM2NkJiZIKF8weDFkNWZjNixfMHgxNmNkOTUseydnZXQnOigpPT5fMHg3NDc4MWRbXzB4MTZjZDk1XSwnZW51bWVyYWJsZSc6IShfMHg0OWZmNGY9RyhfMHg3NDc4MWQsXzB4MTZjZDk1KSl8fF8weDQ5ZmY0ZltfMHgxODBkY2QoMHgxNTEpXX0pO31yZXR1cm4gXzB4MWQ1ZmM2O30seD0oXzB4NTY4YmM4LF8weDJkZTFkNCxfMHg1YjRjNGYpPT4oXzB4NWI0YzRmPV8weDU2OGJjOCE9bnVsbD9qKHRlKF8weDU2OGJjOCkpOnt9LHJlKF8weDJkZTFkNHx8IV8weDU2OGJjOHx8IV8weDU2OGJjOFtfMHgzMGQ0NmMoMHhjZCldP0goXzB4NWI0YzRmLF8weDMwZDQ2YygweDFiNSkseyd2YWx1ZSc6XzB4NTY4YmM4LCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4NWI0YzRmLF8weDU2OGJjOCkpLFg9Y2xhc3N7Y29uc3RydWN0b3IoXzB4NDdmMzhjLF8weDVjMWIwNixfMHgzZjI4NTYsXzB4NDU3ZDNkLF8weDE4ZmY2NCl7dmFyIF8weDRiYjYxZD1fMHgzMGQ0NmM7dGhpc1tfMHg0YmI2MWQoMHgxNjUpXT1fMHg0N2YzOGMsdGhpc1tfMHg0YmI2MWQoMHhkNildPV8weDVjMWIwNix0aGlzW18weDRiYjYxZCgweDE1ZCldPV8weDNmMjg1Nix0aGlzW18weDRiYjYxZCgweGY2KV09XzB4NDU3ZDNkLHRoaXNbJ2RvY2tlcml6ZWRBcHAnXT1fMHgxOGZmNjQsdGhpc1tfMHg0YmI2MWQoMHhlYildPSEweDAsdGhpc1tfMHg0YmI2MWQoMHgxMzcpXT0hMHgwLHRoaXNbXzB4NGJiNjFkKDB4MTRjKV09ITB4MSx0aGlzW18weDRiYjYxZCgweGQxKV09ITB4MSx0aGlzWydfaW5OZXh0RWRnZSddPV8weDQ3ZjM4Y1tfMHg0YmI2MWQoMHgxMzgpXT8uW18weDRiYjYxZCgweGVmKV0/LltfMHg0YmI2MWQoMHgxMmQpXT09PSdlZGdlJyx0aGlzW18weDRiYjYxZCgweDE1NCldPSF0aGlzW18weDRiYjYxZCgweDE2NSldW18weDRiYjYxZCgweDEzOCldPy5bXzB4NGJiNjFkKDB4MTFkKV0/LltfMHg0YmI2MWQoMHgxYWQpXSYmIXRoaXNbXzB4NGJiNjFkKDB4MTE4KV0sdGhpc1snX1dlYlNvY2tldENsYXNzJ109bnVsbCx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPTB4MCx0aGlzW18weDRiYjYxZCgweDE0NSldPTB4MTQsdGhpc1tfMHg0YmI2MWQoMHgxNzQpXT0naHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsdGhpc1tfMHg0YmI2MWQoMHgxOTMpXT0odGhpc1tfMHg0YmI2MWQoMHgxNTQpXT9fMHg0YmI2MWQoMHgxNGEpOidDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcpK3RoaXNbXzB4NGJiNjFkKDB4MTc0KV07fWFzeW5jW18weDMwZDQ2YygweDEzMSldKCl7dmFyIF8weDFlOTBmMT1fMHgzMGQ0NmM7aWYodGhpc1tfMHgxZTkwZjEoMHgxNWYpXSlyZXR1cm4gdGhpc1tfMHgxZTkwZjEoMHgxNWYpXTtsZXQgXzB4NGFlNzdjO2lmKHRoaXNbXzB4MWU5MGYxKDB4MTU0KV18fHRoaXNbJ19pbk5leHRFZGdlJ10pXzB4NGFlNzdjPXRoaXNbXzB4MWU5MGYxKDB4MTY1KV1bJ1dlYlNvY2tldCddO2Vsc2V7aWYodGhpc1snZ2xvYmFsJ11bXzB4MWU5MGYxKDB4MTM4KV0/LlsnX1dlYlNvY2tldCddKV8weDRhZTc3Yz10aGlzWydnbG9iYWwnXVtfMHgxZTkwZjEoMHgxMzgpXT8uWydfV2ViU29ja2V0J107ZWxzZSB0cnl7bGV0IF8weDRjZWI5NT1hd2FpdCBpbXBvcnQoJ3BhdGgnKTtfMHg0YWU3N2M9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KCd1cmwnKSlbJ3BhdGhUb0ZpbGVVUkwnXShfMHg0Y2ViOTVbXzB4MWU5MGYxKDB4MTMyKV0odGhpc1tfMHgxZTkwZjEoMHhmNildLCd3cy9pbmRleC5qcycpKVsndG9TdHJpbmcnXSgpKSlbXzB4MWU5MGYxKDB4MWI1KV07fWNhdGNoe3RyeXtfMHg0YWU3N2M9cmVxdWlyZShyZXF1aXJlKF8weDFlOTBmMSgweDE2YSkpW18weDFlOTBmMSgweDEzMildKHRoaXNbJ25vZGVNb2R1bGVzJ10sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MWU5MGYxKDB4MWEzKSk7fX19cmV0dXJuIHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddPV8weDRhZTc3YyxfMHg0YWU3N2M7fVtfMHgzMGQ0NmMoMHgxYTEpXSgpe3ZhciBfMHg0OTA4OWE9XzB4MzBkNDZjO3RoaXNbXzB4NDkwODlhKDB4ZDEpXXx8dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPj10aGlzW18weDQ5MDg5YSgweDE0NSldfHwodGhpc1tfMHg0OTA4OWEoMHgxMzcpXT0hMHgxLHRoaXNbXzB4NDkwODlhKDB4ZDEpXT0hMHgwLHRoaXNbXzB4NDkwODlhKDB4MTFiKV0rKyx0aGlzW18weDQ5MDg5YSgweGQ4KV09bmV3IFByb21pc2UoKF8weDM0ZWFmYyxfMHgxNDQzMjQpPT57dmFyIF8weDg3NGZhND1fMHg0OTA4OWE7dGhpc1tfMHg4NzRmYTQoMHgxMzEpXSgpW18weDg3NGZhNCgweDEyOCldKF8weDRiYWY1OD0+e3ZhciBfMHg0MWRkYWM9XzB4ODc0ZmE0O2xldCBfMHgyNTc0M2I9bmV3IF8weDRiYWY1OChfMHg0MWRkYWMoMHgxODkpKyghdGhpc1snX2luQnJvd3NlciddJiZ0aGlzW18weDQxZGRhYygweDEzYildP18weDQxZGRhYygweGRjKTp0aGlzW18weDQxZGRhYygweGQ2KV0pKyc6Jyt0aGlzW18weDQxZGRhYygweDE1ZCldKTtfMHgyNTc0M2JbXzB4NDFkZGFjKDB4ZDUpXT0oKT0+e3ZhciBfMHgyYjRmNjU9XzB4NDFkZGFjO3RoaXNbXzB4MmI0ZjY1KDB4ZWIpXT0hMHgxLHRoaXNbXzB4MmI0ZjY1KDB4MTcyKV0oXzB4MjU3NDNiKSx0aGlzW18weDJiNGY2NSgweGY1KV0oKSxfMHgxNDQzMjQobmV3IEVycm9yKCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJykpO30sXzB4MjU3NDNiW18weDQxZGRhYygweDE5ZildPSgpPT57dmFyIF8weDQyMDgyYT1fMHg0MWRkYWM7dGhpc1tfMHg0MjA4MmEoMHgxNTQpXXx8XzB4MjU3NDNiW18weDQyMDgyYSgweDE4NildJiZfMHgyNTc0M2JbXzB4NDIwODJhKDB4MTg2KV1bJ3VucmVmJ10mJl8weDI1NzQzYltfMHg0MjA4MmEoMHgxODYpXVtfMHg0MjA4MmEoMHgxOTApXSgpLF8weDM0ZWFmYyhfMHgyNTc0M2IpO30sXzB4MjU3NDNiW18weDQxZGRhYygweGRlKV09KCk9Pnt2YXIgXzB4MTMyOTcyPV8weDQxZGRhYzt0aGlzW18weDEzMjk3MigweDEzNyldPSEweDAsdGhpc1tfMHgxMzI5NzIoMHgxNzIpXShfMHgyNTc0M2IpLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9LF8weDI1NzQzYltfMHg0MWRkYWMoMHgxYWIpXT1fMHgxYWZkMTE9Pnt2YXIgXzB4MThkNmI1PV8weDQxZGRhYzt0cnl7XzB4MWFmZDExJiZfMHgxYWZkMTFbXzB4MThkNmI1KDB4MTRmKV0mJnRoaXNbXzB4MThkNmI1KDB4MTU0KV0mJkpTT05bJ3BhcnNlJ10oXzB4MWFmZDExWydkYXRhJ10pW18weDE4ZDZiNSgweDExNildPT09XzB4MThkNmI1KDB4MWEyKSYmdGhpc1snZ2xvYmFsJ11bXzB4MThkNmI1KDB4MTExKV1bXzB4MThkNmI1KDB4MWEyKV0oKTt9Y2F0Y2h7fX07fSlbXzB4ODc0ZmE0KDB4MTI4KV0oXzB4MWIyNGQyPT4odGhpc1tfMHg4NzRmYTQoMHgxNGMpXT0hMHgwLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDEsdGhpc1tfMHg4NzRmYTQoMHhlYildPSEweDAsdGhpc1tfMHg4NzRmYTQoMHgxMWIpXT0weDAsXzB4MWIyNGQyKSlbXzB4ODc0ZmE0KDB4MTQ3KV0oXzB4MzdmNWEwPT4odGhpc1tfMHg4NzRmYTQoMHgxNGMpXT0hMHgxLHRoaXNbXzB4ODc0ZmE0KDB4ZDEpXT0hMHgxLGNvbnNvbGVbXzB4ODc0ZmE0KDB4MTAyKV0oXzB4ODc0ZmE0KDB4MTkyKSt0aGlzW18weDg3NGZhNCgweDE3NCldKSxfMHgxNDQzMjQobmV3IEVycm9yKCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnKyhfMHgzN2Y1YTAmJl8weDM3ZjVhMFtfMHg4NzRmYTQoMHhlNildKSkpKSk7fSkpO31bJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4NDlhNDYxKXt2YXIgXzB4NGY4ODY5PV8weDMwZDQ2Yzt0aGlzW18weDRmODg2OSgweDE0YyldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxO3RyeXtfMHg0OWE0NjFbXzB4NGY4ODY5KDB4ZGUpXT1udWxsLF8weDQ5YTQ2MVsnb25lcnJvciddPW51bGwsXzB4NDlhNDYxW18weDRmODg2OSgweDE5ZildPW51bGw7fWNhdGNoe310cnl7XzB4NDlhNDYxW18weDRmODg2OSgweGQwKV08MHgyJiZfMHg0OWE0NjFbXzB4NGY4ODY5KDB4MTk3KV0oKTt9Y2F0Y2h7fX1bJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKXt2YXIgXzB4MTU5NzliPV8weDMwZDQ2YztjbGVhclRpbWVvdXQodGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXSksISh0aGlzW18weDE1OTc5YigweDExYildPj10aGlzW18weDE1OTc5YigweDE0NSldKSYmKHRoaXNbXzB4MTU5NzliKDB4MTFlKV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHg1NTdiNjg9XzB4MTU5NzliO3RoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1snX2Nvbm5lY3RpbmcnXXx8KHRoaXNbJ19jb25uZWN0VG9Ib3N0Tm93J10oKSx0aGlzW18weDU1N2I2OCgweGQ4KV0/LltfMHg1NTdiNjgoMHgxNDcpXSgoKT0+dGhpc1tfMHg1NTdiNjgoMHhmNSldKCkpKTt9LDB4MWY0KSx0aGlzW18weDE1OTc5YigweDExZSldW18weDE1OTc5YigweDE5MCldJiZ0aGlzWydfcmVjb25uZWN0VGltZW91dCddW18weDE1OTc5YigweDE5MCldKCkpO31hc3luY1tfMHgzMGQ0NmMoMHhkYSldKF8weDM5ZTc4Mil7dmFyIF8weDQ4NjBmOT1fMHgzMGQ0NmM7dHJ5e2lmKCF0aGlzWydfYWxsb3dlZFRvU2VuZCddKXJldHVybjt0aGlzW18weDQ4NjBmOSgweDEzNyldJiZ0aGlzW18weDQ4NjBmOSgweDFhMSldKCksKGF3YWl0IHRoaXNbJ193cyddKVtfMHg0ODYwZjkoMHhkYSldKEpTT05bJ3N0cmluZ2lmeSddKF8weDM5ZTc4MikpO31jYXRjaChfMHgxZTE3ZTApe2NvbnNvbGVbXzB4NDg2MGY5KDB4MTAyKV0odGhpc1tfMHg0ODYwZjkoMHgxOTMpXSsnOlxcXFx4MjAnKyhfMHgxZTE3ZTAmJl8weDFlMTdlMFtfMHg0ODYwZjkoMHhlNildKSksdGhpc1tfMHg0ODYwZjkoMHhlYildPSEweDEsdGhpc1tfMHg0ODYwZjkoMHhmNSldKCk7fX19O2Z1bmN0aW9uIGIoXzB4NDZkMGIxLF8weDRjMThlYixfMHgzMjFmZjcsXzB4Njc2OTExLF8weDRjODI5OSxfMHg1NDI1NWEpe3ZhciBfMHgzOTM3ZTc9XzB4MzBkNDZjO2xldCBfMHg1MGUwZjk9XzB4MzIxZmY3W18weDM5MzdlNygweDEzZCldKCcsJylbJ21hcCddKF8weDQxZDg3PT57dmFyIF8weDUxNzlhMj1fMHgzOTM3ZTc7dHJ5e18weDQ2ZDBiMVsnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddfHwoKF8weDRjODI5OT09PV8weDUxNzlhMigweDE5ZSl8fF8weDRjODI5OT09PV8weDUxNzlhMigweDEyMCl8fF8weDRjODI5OT09PV8weDUxNzlhMigweDE1MikpJiYoXzB4NGM4Mjk5Kz0hXzB4NDZkMGIxW18weDUxNzlhMigweDEzOCldPy5bXzB4NTE3OWEyKDB4MTFkKV0/LltfMHg1MTc5YTIoMHgxYWQpXSYmXzB4NDZkMGIxW18weDUxNzlhMigweDEzOCldPy5bJ2VudiddPy5bXzB4NTE3OWEyKDB4MTJkKV0hPT0nZWRnZSc/XzB4NTE3OWEyKDB4MWIxKTpfMHg1MTc5YTIoMHgxNWMpKSxfMHg0NmQwYjFbJ19jb25zb2xlX25pbmphX3Nlc3Npb24nXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4NGM4Mjk5fSk7bGV0IF8weDdhYWJiZj1uZXcgWChfMHg0NmQwYjEsXzB4NGMxOGViLF8weDQxZDg3LF8weDY3NjkxMSxfMHg1NDI1NWEpO3JldHVybiBfMHg3YWFiYmZbJ3NlbmQnXVtfMHg1MTc5YTIoMHhjZildKF8weDdhYWJiZik7fWNhdGNoKF8weDFjYjA2Zil7cmV0dXJuIGNvbnNvbGVbXzB4NTE3OWEyKDB4MTAyKV0oJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JyxfMHgxY2IwNmYmJl8weDFjYjA2ZlsnbWVzc2FnZSddKSwoKT0+e307fX0pO3JldHVybiBfMHgyNzdlMDQ9Pl8weDUwZTBmOVtfMHgzOTM3ZTcoMHgxYWMpXShfMHhhNDJmYj0+XzB4YTQyZmIoXzB4Mjc3ZTA0KSk7fWZ1bmN0aW9uIFcoXzB4MWVjNWMyKXt2YXIgXzB4M2YwNDk1PV8weDMwZDQ2YztsZXQgXzB4MTE0MjdmPWZ1bmN0aW9uKF8weDNkNTU4MyxfMHhmNTBhNyl7cmV0dXJuIF8weGY1MGE3LV8weDNkNTU4Mzt9LF8weDI1NTE1ZTtpZihfMHgxZWM1YzJbXzB4M2YwNDk1KDB4Y2UpXSlfMHgyNTUxNWU9ZnVuY3Rpb24oKXt2YXIgXzB4Mzg0MDU4PV8weDNmMDQ5NTtyZXR1cm4gXzB4MWVjNWMyW18weDM4NDA1OCgweGNlKV1bJ25vdyddKCk7fTtlbHNle2lmKF8weDFlYzVjMltfMHgzZjA0OTUoMHgxMzgpXSYmXzB4MWVjNWMyW18weDNmMDQ5NSgweDEzOCldW18weDNmMDQ5NSgweDE1MCldJiZfMHgxZWM1YzJbXzB4M2YwNDk1KDB4MTM4KV0/LltfMHgzZjA0OTUoMHhlZildPy5bXzB4M2YwNDk1KDB4MTJkKV0hPT1fMHgzZjA0OTUoMHgxMzMpKV8weDI1NTE1ZT1mdW5jdGlvbigpe3ZhciBfMHg0YjlhOGM9XzB4M2YwNDk1O3JldHVybiBfMHgxZWM1YzJbXzB4NGI5YThjKDB4MTM4KV1bJ2hydGltZSddKCk7fSxfMHgxMTQyN2Y9ZnVuY3Rpb24oXzB4MTM0MGYyLF8weDQ1ZTkwMCl7cmV0dXJuIDB4M2U4KihfMHg0NWU5MDBbMHgwXS1fMHgxMzQwZjJbMHgwXSkrKF8weDQ1ZTkwMFsweDFdLV8weDEzNDBmMlsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHg0YTE5Yzh9PXJlcXVpcmUoXzB4M2YwNDk1KDB4MTI0KSk7XzB4MjU1MTVlPWZ1bmN0aW9uKCl7dmFyIF8weDQ5NTU3Mj1fMHgzZjA0OTU7cmV0dXJuIF8weDRhMTljOFtfMHg0OTU1NzIoMHgxNDkpXSgpO307fWNhdGNoe18weDI1NTE1ZT1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDExNDI3ZiwndGltZVN0YW1wJzpfMHgyNTUxNWUsJ25vdyc6KCk9PkRhdGVbXzB4M2YwNDk1KDB4MTQ5KV0oKX07fWZ1bmN0aW9uIEooXzB4MmM5OWZkLF8weDEyOThmOSxfMHg3YTQ0NTApe3ZhciBfMHgyYjY1NjA9XzB4MzBkNDZjO2lmKF8weDJjOTlmZFtfMHgyYjY1NjAoMHgxOGMpXSE9PXZvaWQgMHgwKXJldHVybiBfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MThjKV07bGV0IF8weDE3ZGUyOD1fMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MTM4KV0/LlsndmVyc2lvbnMnXT8uW18weDJiNjU2MCgweDFhZCldfHxfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MTM4KV0/LltfMHgyYjY1NjAoMHhlZildPy5bXzB4MmI2NTYwKDB4MTJkKV09PT0nZWRnZSc7cmV0dXJuIF8weDE3ZGUyOCYmXzB4N2E0NDUwPT09XzB4MmI2NTYwKDB4MTVhKT9fMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MThjKV09ITB4MTpfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MThjKV09XzB4MTdkZTI4fHwhXzB4MTI5OGY5fHxfMHgyYzk5ZmRbJ2xvY2F0aW9uJ10/LlsnaG9zdG5hbWUnXSYmXzB4MTI5OGY5W18weDJiNjU2MCgweDFiMyldKF8weDJjOTlmZFtfMHgyYjY1NjAoMHgxMTEpXVtfMHgyYjY1NjAoMHgxMjIpXSksXzB4MmM5OWZkW18weDJiNjU2MCgweDE4YyldO31mdW5jdGlvbiBZKF8weDMxOTc1MSxfMHg1ZDI2N2EsXzB4MjQwOGJhLF8weDU2MzUwNCl7dmFyIF8weDQyNDhkNj1fMHgzMGQ0NmM7XzB4MzE5NzUxPV8weDMxOTc1MSxfMHg1ZDI2N2E9XzB4NWQyNjdhLF8weDI0MDhiYT1fMHgyNDA4YmEsXzB4NTYzNTA0PV8weDU2MzUwNDtsZXQgXzB4NWM2YmE0PVcoXzB4MzE5NzUxKSxfMHg1ZGVhZDU9XzB4NWM2YmE0W18weDQyNDhkNigweGYwKV0sXzB4Mjk5ZGEzPV8weDVjNmJhNFsndGltZVN0YW1wJ107Y2xhc3MgXzB4MzE4N2E3e2NvbnN0cnVjdG9yKCl7dmFyIF8weDU0YzU0Yj1fMHg0MjQ4ZDY7dGhpc1tfMHg1NGM1NGIoMHgxNzEpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbXzB4NTRjNTRiKDB4ZDIpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbJ19xdW90ZWRSZWdFeHAnXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDU0YzU0YigweGU1KV09XzB4MzE5NzUxW18weDU0YzU0YigweDE5OCldLHRoaXNbXzB4NTRjNTRiKDB4ZDcpXT1fMHgzMTk3NTFbXzB4NTRjNTRiKDB4MTY4KV0sdGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddPU9iamVjdFtfMHg1NGM1NGIoMHgxNmUpXSx0aGlzW18weDU0YzU0YigweDEyYyldPU9iamVjdFtfMHg1NGM1NGIoMHgxNTgpXSx0aGlzW18weDU0YzU0YigweDE3MCldPV8weDMxOTc1MVtfMHg1NGM1NGIoMHgxNjkpXSx0aGlzW18weDU0YzU0YigweDFiMildPVJlZ0V4cFsncHJvdG90eXBlJ11bXzB4NTRjNTRiKDB4MTRkKV0sdGhpc1tfMHg1NGM1NGIoMHgxMWYpXT1EYXRlWydwcm90b3R5cGUnXVtfMHg1NGM1NGIoMHgxNGQpXTt9W18weDQyNDhkNigweDFiNildKF8weDQzYmZjNyxfMHgyNWQ0NTEsXzB4MWU3MWM1LF8weDUwOGEwZil7dmFyIF8weDEzNjY5Mj1fMHg0MjQ4ZDYsXzB4MjJmN2I4PXRoaXMsXzB4MjdhNDczPV8weDFlNzFjNVsnYXV0b0V4cGFuZCddO2Z1bmN0aW9uIF8weDQxMmJmZShfMHgxNTYxZjcsXzB4MmEwOTg3LF8weDU4ZjEzMCl7dmFyIF8weDIxYzkxZD1fMHgzOTRiO18weDJhMDk4N1tfMHgyMWM5MWQoMHgxOTEpXT1fMHgyMWM5MWQoMHgxMTMpLF8weDJhMDk4N1tfMHgyMWM5MWQoMHgxMzkpXT1fMHgxNTYxZjdbXzB4MjFjOTFkKDB4ZTYpXSxfMHgxYzM2YjA9XzB4NThmMTMwWydub2RlJ11bXzB4MjFjOTFkKDB4ZGQpXSxfMHg1OGYxMzBbXzB4MjFjOTFkKDB4MWFkKV1bXzB4MjFjOTFkKDB4ZGQpXT1fMHgyYTA5ODcsXzB4MjJmN2I4W18weDIxYzkxZCgweDE0MCldKF8weDJhMDk4NyxfMHg1OGYxMzApO310cnl7XzB4MWU3MWM1W18weDEzNjY5MigweDEwNyldKyssXzB4MWU3MWM1WydhdXRvRXhwYW5kJ10mJl8weDFlNzFjNVtfMHgxMzY2OTIoMHhlOCldW18weDEzNjY5MigweDEzNCldKF8weDI1ZDQ1MSk7dmFyIF8weDMxNTc0MyxfMHg1NDFhYTgsXzB4M2NjZWQ5LF8weDJhMzRhMSxfMHgyMGI0ZjI9W10sXzB4NGRhNjNiPVtdLF8weDU1Njk3OSxfMHgyZDJkNmQ9dGhpc1tfMHgxMzY2OTIoMHgxMzYpXShfMHgyNWQ0NTEpLF8weGQ4MzJjNT1fMHgyZDJkNmQ9PT0nYXJyYXknLF8weDI2OGM0MD0hMHgxLF8weDEzMGYzZT1fMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHhlYSksXzB4MzY5YjBlPXRoaXNbXzB4MTM2NjkyKDB4MTE1KV0oXzB4MmQyZDZkKSxfMHg0OTg0MTg9dGhpc1snX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnXShfMHgyZDJkNmQpLF8weDM0MGY4Mz1fMHgzNjliMGV8fF8weDQ5ODQxOCxfMHgyNDkzYmU9e30sXzB4MzZmM2NjPTB4MCxfMHgzYTJmZGE9ITB4MSxfMHgxYzM2YjAsXzB4MzQ4YmYxPS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTI5KV0pe2lmKF8weGQ4MzJjNSl7aWYoXzB4NTQxYWE4PV8weDI1ZDQ1MVtfMHgxMzY2OTIoMHgxNWUpXSxfMHg1NDFhYTg+XzB4MWU3MWM1W18weDEzNjY5MigweDE2MildKXtmb3IoXzB4M2NjZWQ5PTB4MCxfMHgyYTM0YTE9XzB4MWU3MWM1WydlbGVtZW50cyddLF8weDMxNTc0Mz1fMHgzY2NlZDk7XzB4MzE1NzQzPF8weDJhMzRhMTtfMHgzMTU3NDMrKylfMHg0ZGE2M2JbXzB4MTM2NjkyKDB4MTM0KV0oXzB4MjJmN2I4W18weDEzNjY5MigweGY3KV0oXzB4MjBiNGYyLF8weDI1ZDQ1MSxfMHgyZDJkNmQsXzB4MzE1NzQzLF8weDFlNzFjNSkpO18weDQzYmZjN1tfMHgxMzY2OTIoMHgxNjYpXT0hMHgwO31lbHNle2ZvcihfMHgzY2NlZDk9MHgwLF8weDJhMzRhMT1fMHg1NDFhYTgsXzB4MzE1NzQzPV8weDNjY2VkOTtfMHgzMTU3NDM8XzB4MmEzNGExO18weDMxNTc0MysrKV8weDRkYTYzYltfMHgxMzY2OTIoMHgxMzQpXShfMHgyMmY3YjhbXzB4MTM2NjkyKDB4ZjcpXShfMHgyMGI0ZjIsXzB4MjVkNDUxLF8weDJkMmQ2ZCxfMHgzMTU3NDMsXzB4MWU3MWM1KSk7fV8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNzUpXSs9XzB4NGRhNjNiWydsZW5ndGgnXTt9aWYoIShfMHgyZDJkNmQ9PT0nbnVsbCd8fF8weDJkMmQ2ZD09PV8weDEzNjY5MigweDE5OCkpJiYhXzB4MzY5YjBlJiZfMHgyZDJkNmQhPT1fMHgxMzY2OTIoMHgxMDEpJiZfMHgyZDJkNmQhPT1fMHgxMzY2OTIoMHgxYWYpJiZfMHgyZDJkNmQhPT0nYmlnaW50Jyl7dmFyIF8weDJjYzdjMz1fMHg1MDhhMGZbXzB4MTM2NjkyKDB4MTlkKV18fF8weDFlNzFjNVsncHJvcHMnXTtpZih0aGlzW18weDEzNjY5MigweDE4NCldKF8weDI1ZDQ1MSk/KF8weDMxNTc0Mz0weDAsXzB4MjVkNDUxW18weDEzNjY5MigweDFhYyldKGZ1bmN0aW9uKF8weDViNTExMCl7dmFyIF8weDU4YzNjYj1fMHgxMzY2OTI7aWYoXzB4MzZmM2NjKyssXzB4MWU3MWM1W18weDU4YzNjYigweDE3NSldKyssXzB4MzZmM2NjPl8weDJjYzdjMyl7XzB4M2EyZmRhPSEweDA7cmV0dXJuO31pZighXzB4MWU3MWM1W18weDU4YzNjYigweDE1MyldJiZfMHgxZTcxYzVbXzB4NThjM2NiKDB4MTgyKV0mJl8weDFlNzFjNVtfMHg1OGMzY2IoMHgxNzUpXT5fMHgxZTcxYzVbXzB4NThjM2NiKDB4ZTEpXSl7XzB4M2EyZmRhPSEweDA7cmV0dXJuO31fMHg0ZGE2M2JbXzB4NThjM2NiKDB4MTM0KV0oXzB4MjJmN2I4W18weDU4YzNjYigweGY3KV0oXzB4MjBiNGYyLF8weDI1ZDQ1MSxfMHg1OGMzY2IoMHgxNmMpLF8weDMxNTc0MysrLF8weDFlNzFjNSxmdW5jdGlvbihfMHhmY2I1YzUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHhmY2I1YzU7fTt9KF8weDViNTExMCkpKTt9KSk6dGhpc1tfMHgxMzY2OTIoMHgxNDMpXShfMHgyNWQ0NTEpJiZfMHgyNWQ0NTFbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHgyMDU2ZjUsXzB4MzEzMDEwKXt2YXIgXzB4NTVhN2ZkPV8weDEzNjY5MjtpZihfMHgzNmYzY2MrKyxfMHgxZTcxYzVbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgzNmYzY2M+XzB4MmNjN2MzKXtfMHgzYTJmZGE9ITB4MDtyZXR1cm47fWlmKCFfMHgxZTcxYzVbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXSYmXzB4MWU3MWM1WydhdXRvRXhwYW5kJ10mJl8weDFlNzFjNVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgxZTcxYzVbXzB4NTVhN2ZkKDB4ZTEpXSl7XzB4M2EyZmRhPSEweDA7cmV0dXJuO312YXIgXzB4MjdiNzU1PV8weDMxMzAxMFsndG9TdHJpbmcnXSgpO18weDI3Yjc1NVsnbGVuZ3RoJ10+MHg2NCYmKF8weDI3Yjc1NT1fMHgyN2I3NTVbJ3NsaWNlJ10oMHgwLDB4NjQpKycuLi4nKSxfMHg0ZGE2M2JbXzB4NTVhN2ZkKDB4MTM0KV0oXzB4MjJmN2I4W18weDU1YTdmZCgweGY3KV0oXzB4MjBiNGYyLF8weDI1ZDQ1MSxfMHg1NWE3ZmQoMHgxMGQpLF8weDI3Yjc1NSxfMHgxZTcxYzUsZnVuY3Rpb24oXzB4NThkZGU5KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4NThkZGU5O307fShfMHgyMDU2ZjUpKSk7fSksIV8weDI2OGM0MCl7dHJ5e2ZvcihfMHg1NTY5NzkgaW4gXzB4MjVkNDUxKWlmKCEoXzB4ZDgzMmM1JiZfMHgzNDhiZjFbXzB4MTM2NjkyKDB4ZTcpXShfMHg1NTY5NzkpKSYmIXRoaXNbXzB4MTM2NjkyKDB4ZjgpXShfMHgyNWQ0NTEsXzB4NTU2OTc5LF8weDFlNzFjNSkpe2lmKF8weDM2ZjNjYysrLF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNzUpXSsrLF8weDM2ZjNjYz5fMHgyY2M3YzMpe18weDNhMmZkYT0hMHgwO2JyZWFrO31pZighXzB4MWU3MWM1W18weDEzNjY5MigweDE1MyldJiZfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTgyKV0mJl8weDFlNzFjNVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgxZTcxYzVbXzB4MTM2NjkyKDB4ZTEpXSl7XzB4M2EyZmRhPSEweDA7YnJlYWs7fV8weDRkYTYzYltfMHgxMzY2OTIoMHgxMzQpXShfMHgyMmY3YjhbXzB4MTM2NjkyKDB4MTA4KV0oXzB4MjBiNGYyLF8weDI0OTNiZSxfMHgyNWQ0NTEsXzB4MmQyZDZkLF8weDU1Njk3OSxfMHgxZTcxYzUpKTt9fWNhdGNoe31pZihfMHgyNDkzYmVbXzB4MTM2NjkyKDB4MTNhKV09ITB4MCxfMHgxMzBmM2UmJihfMHgyNDkzYmVbXzB4MTM2NjkyKDB4MTZmKV09ITB4MCksIV8weDNhMmZkYSl7dmFyIF8weDM3OWFkOD1bXVtfMHgxMzY2OTIoMHhkYildKHRoaXNbXzB4MTM2NjkyKDB4MTJjKV0oXzB4MjVkNDUxKSlbXzB4MTM2NjkyKDB4ZGIpXSh0aGlzW18weDEzNjY5MigweDE0ZSldKF8weDI1ZDQ1MSkpO2ZvcihfMHgzMTU3NDM9MHgwLF8weDU0MWFhOD1fMHgzNzlhZDhbXzB4MTM2NjkyKDB4MTVlKV07XzB4MzE1NzQzPF8weDU0MWFhODtfMHgzMTU3NDMrKylpZihfMHg1NTY5Nzk9XzB4Mzc5YWQ4W18weDMxNTc0M10sIShfMHhkODMyYzUmJl8weDM0OGJmMVtfMHgxMzY2OTIoMHhlNyldKF8weDU1Njk3OVtfMHgxMzY2OTIoMHgxNGQpXSgpKSkmJiF0aGlzW18weDEzNjY5MigweGY4KV0oXzB4MjVkNDUxLF8weDU1Njk3OSxfMHgxZTcxYzUpJiYhXzB4MjQ5M2JlW18weDEzNjY5MigweDEyZSkrXzB4NTU2OTc5W18weDEzNjY5MigweDE0ZCldKCldKXtpZihfMHgzNmYzY2MrKyxfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTc1KV0rKyxfMHgzNmYzY2M+XzB4MmNjN2MzKXtfMHgzYTJmZGE9ITB4MDticmVhazt9aWYoIV8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNTMpXSYmXzB4MWU3MWM1W18weDEzNjY5MigweDE4MildJiZfMHgxZTcxYzVbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4MWU3MWM1W18weDEzNjY5MigweGUxKV0pe18weDNhMmZkYT0hMHgwO2JyZWFrO31fMHg0ZGE2M2JbJ3B1c2gnXShfMHgyMmY3YjhbXzB4MTM2NjkyKDB4MTA4KV0oXzB4MjBiNGYyLF8weDI0OTNiZSxfMHgyNWQ0NTEsXzB4MmQyZDZkLF8weDU1Njk3OSxfMHgxZTcxYzUpKTt9fX19fWlmKF8weDQzYmZjN1tfMHgxMzY2OTIoMHgxOTEpXT1fMHgyZDJkNmQsXzB4MzQwZjgzPyhfMHg0M2JmYzdbJ3ZhbHVlJ109XzB4MjVkNDUxWyd2YWx1ZU9mJ10oKSx0aGlzW18weDEzNjY5MigweGUzKV0oXzB4MmQyZDZkLF8weDQzYmZjNyxfMHgxZTcxYzUsXzB4NTA4YTBmKSk6XzB4MmQyZDZkPT09XzB4MTM2NjkyKDB4ZjMpP18weDQzYmZjN1tfMHgxMzY2OTIoMHgxN2YpXT10aGlzW18weDEzNjY5MigweDExZildW18weDEzNjY5MigweGZlKV0oXzB4MjVkNDUxKTpfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHgxOGIpP18weDQzYmZjN1tfMHgxMzY2OTIoMHgxN2YpXT1fMHgyNWQ0NTFbJ3RvU3RyaW5nJ10oKTpfMHgyZDJkNmQ9PT0nUmVnRXhwJz9fMHg0M2JmYzdbXzB4MTM2NjkyKDB4MTdmKV09dGhpc1tfMHgxMzY2OTIoMHgxYjIpXVsnY2FsbCddKF8weDI1ZDQ1MSk6XzB4MmQyZDZkPT09XzB4MTM2NjkyKDB4MTc2KSYmdGhpc1tfMHgxMzY2OTIoMHgxNzApXT9fMHg0M2JmYzdbXzB4MTM2NjkyKDB4MTdmKV09dGhpc1tfMHgxMzY2OTIoMHgxNzApXVtfMHgxMzY2OTIoMHgxODApXVtfMHgxMzY2OTIoMHgxNGQpXVtfMHgxMzY2OTIoMHhmZSldKF8weDI1ZDQ1MSk6IV8weDFlNzFjNVtfMHgxMzY2OTIoMHgxMjkpXSYmIShfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHgxNTkpfHxfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHgxOTgpKSYmKGRlbGV0ZSBfMHg0M2JmYzdbJ3ZhbHVlJ10sXzB4NDNiZmM3W18weDEzNjY5MigweDEyNSldPSEweDApLF8weDNhMmZkYSYmKF8weDQzYmZjN1snY2FwcGVkUHJvcHMnXT0hMHgwKSxfMHgxYzM2YjA9XzB4MWU3MWM1W18weDEzNjY5MigweDFhZCldW18weDEzNjY5MigweGRkKV0sXzB4MWU3MWM1W18weDEzNjY5MigweDFhZCldW18weDEzNjY5MigweGRkKV09XzB4NDNiZmM3LHRoaXNbXzB4MTM2NjkyKDB4MTQwKV0oXzB4NDNiZmM3LF8weDFlNzFjNSksXzB4NGRhNjNiW18weDEzNjY5MigweDE1ZSldKXtmb3IoXzB4MzE1NzQzPTB4MCxfMHg1NDFhYTg9XzB4NGRhNjNiW18weDEzNjY5MigweDE1ZSldO18weDMxNTc0MzxfMHg1NDFhYTg7XzB4MzE1NzQzKyspXzB4NGRhNjNiW18weDMxNTc0M10oXzB4MzE1NzQzKTt9XzB4MjBiNGYyW18weDEzNjY5MigweDE1ZSldJiYoXzB4NDNiZmM3Wydwcm9wcyddPV8weDIwYjRmMik7fWNhdGNoKF8weGNiMmYxZil7XzB4NDEyYmZlKF8weGNiMmYxZixfMHg0M2JmYzcsXzB4MWU3MWM1KTt9cmV0dXJuIHRoaXNbXzB4MTM2NjkyKDB4ZGYpXShfMHgyNWQ0NTEsXzB4NDNiZmM3KSx0aGlzW18weDEzNjY5MigweDEwOSldKF8weDQzYmZjNyxfMHgxZTcxYzUpLF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxYWQpXVtfMHgxMzY2OTIoMHhkZCldPV8weDFjMzZiMCxfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTA3KV0tLSxfMHgxZTcxYzVbJ2F1dG9FeHBhbmQnXT1fMHgyN2E0NzMsXzB4MWU3MWM1WydhdXRvRXhwYW5kJ10mJl8weDFlNzFjNVtfMHgxMzY2OTIoMHhlOCldWydwb3AnXSgpLF8weDQzYmZjNzt9W18weDQyNDhkNigweDE0ZSldKF8weDM2ZmQ2NSl7dmFyIF8weDNhNzBiMD1fMHg0MjQ4ZDY7cmV0dXJuIE9iamVjdFtfMHgzYTcwYjAoMHgxOGUpXT9PYmplY3RbJ2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDM2ZmQ2NSk6W107fVtfMHg0MjQ4ZDYoMHgxODQpXShfMHgyZTY1M2Qpe3ZhciBfMHgzZmM5YzE9XzB4NDI0OGQ2O3JldHVybiEhKF8weDJlNjUzZCYmXzB4MzE5NzUxWydTZXQnXSYmdGhpc1tfMHgzZmM5YzEoMHgxNzcpXShfMHgyZTY1M2QpPT09XzB4M2ZjOWMxKDB4MTBjKSYmXzB4MmU2NTNkW18weDNmYzljMSgweDFhYyldKTt9W18weDQyNDhkNigweGY4KV0oXzB4NTJkNmJhLF8weDU3ZjI2ZSxfMHhmZjVhYjMpe3ZhciBfMHhkMDFmNGI9XzB4NDI0OGQ2O3JldHVybiBfMHhmZjVhYjNbXzB4ZDAxZjRiKDB4MTJiKV0/dHlwZW9mIF8weDUyZDZiYVtfMHg1N2YyNmVdPT1fMHhkMDFmNGIoMHhlYSk6ITB4MTt9W18weDQyNDhkNigweDEzNildKF8weDg5YTM1Myl7dmFyIF8weDNjMzMzYz1fMHg0MjQ4ZDYsXzB4NDVhNzkwPScnO3JldHVybiBfMHg0NWE3OTA9dHlwZW9mIF8weDg5YTM1MyxfMHg0NWE3OTA9PT1fMHgzYzMzM2MoMHgxODMpP3RoaXNbXzB4M2MzMzNjKDB4MTc3KV0oXzB4ODlhMzUzKT09PV8weDNjMzMzYygweDExNCk/XzB4NDVhNzkwPV8weDNjMzMzYygweGZiKTp0aGlzW18weDNjMzMzYygweDE3NyldKF8weDg5YTM1Myk9PT1fMHgzYzMzM2MoMHgxMjYpP18weDQ1YTc5MD1fMHgzYzMzM2MoMHhmMyk6dGhpc1tfMHgzYzMzM2MoMHgxNzcpXShfMHg4OWEzNTMpPT09XzB4M2MzMzNjKDB4MTQxKT9fMHg0NWE3OTA9XzB4M2MzMzNjKDB4MThiKTpfMHg4OWEzNTM9PT1udWxsP18weDQ1YTc5MD1fMHgzYzMzM2MoMHgxNTkpOl8weDg5YTM1M1tfMHgzYzMzM2MoMHgxYTYpXSYmKF8weDQ1YTc5MD1fMHg4OWEzNTNbXzB4M2MzMzNjKDB4MWE2KV1bXzB4M2MzMzNjKDB4MTA2KV18fF8weDQ1YTc5MCk6XzB4NDVhNzkwPT09J3VuZGVmaW5lZCcmJnRoaXNbXzB4M2MzMzNjKDB4ZDcpXSYmXzB4ODlhMzUzIGluc3RhbmNlb2YgdGhpc1tfMHgzYzMzM2MoMHhkNyldJiYoXzB4NDVhNzkwPV8weDNjMzMzYygweDE2OCkpLF8weDQ1YTc5MDt9W18weDQyNDhkNigweDE3NyldKF8weGIyOGI1KXt2YXIgXzB4MmQ2ZTgxPV8weDQyNDhkNjtyZXR1cm4gT2JqZWN0W18weDJkNmU4MSgweDE4MCldW18weDJkNmU4MSgweDE0ZCldWydjYWxsJ10oXzB4YjI4YjUpO31bJ19pc1ByaW1pdGl2ZVR5cGUnXShfMHg1NzhlZWUpe3ZhciBfMHgxNTNkYWM9XzB4NDI0OGQ2O3JldHVybiBfMHg1NzhlZWU9PT1fMHgxNTNkYWMoMHgxNmIpfHxfMHg1NzhlZWU9PT1fMHgxNTNkYWMoMHgxM2MpfHxfMHg1NzhlZWU9PT1fMHgxNTNkYWMoMHgxMzUpO31bXzB4NDI0OGQ2KDB4MTYzKV0oXzB4MTMyNTBiKXt2YXIgXzB4Mjg5ODQzPV8weDQyNDhkNjtyZXR1cm4gXzB4MTMyNTBiPT09XzB4Mjg5ODQzKDB4MTljKXx8XzB4MTMyNTBiPT09J1N0cmluZyd8fF8weDEzMjUwYj09PV8weDI4OTg0MygweDE3Yyk7fVtfMHg0MjQ4ZDYoMHhmNyldKF8weDQ1YjE5NixfMHg0MTQ1NDgsXzB4MzlkYzNlLF8weDM1NzMwZixfMHg0MTMwMjUsXzB4M2MwYWIzKXt2YXIgXzB4NWI5N2YyPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDRhNGU0Yil7dmFyIF8weDIxZjZjNz1fMHgzOTRiLF8weDEwNGM5Nz1fMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bXzB4MjFmNmM3KDB4ZGQpXSxfMHg0YzM3MDk9XzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldW18weDIxZjZjNygweDFhOCldLF8weDcwMmJlYT1fMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bJ3BhcmVudCddO18weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVtfMHgyMWY2YzcoMHgxNjApXT1fMHgxMDRjOTcsXzB4NDEzMDI1Wydub2RlJ11bJ2luZGV4J109dHlwZW9mIF8weDM1NzMwZj09XzB4MjFmNmM3KDB4MTM1KT9fMHgzNTczMGY6XzB4NGE0ZTRiLF8weDQ1YjE5NltfMHgyMWY2YzcoMHgxMzQpXShfMHg1Yjk3ZjJbXzB4MjFmNmM3KDB4MTgxKV0oXzB4NDE0NTQ4LF8weDM5ZGMzZSxfMHgzNTczMGYsXzB4NDEzMDI1LF8weDNjMGFiMykpLF8weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVtfMHgyMWY2YzcoMHgxNjApXT1fMHg3MDJiZWEsXzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldWydpbmRleCddPV8weDRjMzcwOTt9O31bXzB4NDI0OGQ2KDB4MTA4KV0oXzB4NDYwOWU1LF8weDE1Y2ZlNCxfMHgyNjQxNGYsXzB4M2Q4ZjA5LF8weDM1NjU3NSxfMHgzNTcxOTMsXzB4ODNmMzU5KXt2YXIgXzB4NGNmNTJiPV8weDQyNDhkNixfMHg0MDI3NmE9dGhpcztyZXR1cm4gXzB4MTVjZmU0WydfcF8nK18weDM1NjU3NVtfMHg0Y2Y1MmIoMHgxNGQpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDMzMjVmNyl7dmFyIF8weDJiOGQwNj1fMHg0Y2Y1MmIsXzB4MmVlZWVhPV8weDM1NzE5M1snbm9kZSddW18weDJiOGQwNigweGRkKV0sXzB4MjNjNzE4PV8weDM1NzE5M1tfMHgyYjhkMDYoMHgxYWQpXVtfMHgyYjhkMDYoMHgxYTgpXSxfMHgxNGQzYzM9XzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDE2MCldO18weDM1NzE5M1tfMHgyYjhkMDYoMHgxYWQpXVtfMHgyYjhkMDYoMHgxNjApXT1fMHgyZWVlZWEsXzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDFhOCldPV8weDMzMjVmNyxfMHg0NjA5ZTVbXzB4MmI4ZDA2KDB4MTM0KV0oXzB4NDAyNzZhW18weDJiOGQwNigweDE4MSldKF8weDI2NDE0ZixfMHgzZDhmMDksXzB4MzU2NTc1LF8weDM1NzE5MyxfMHg4M2YzNTkpKSxfMHgzNTcxOTNbJ25vZGUnXVtfMHgyYjhkMDYoMHgxNjApXT1fMHgxNGQzYzMsXzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDFhOCldPV8weDIzYzcxODt9O31bJ19wcm9wZXJ0eSddKF8weDlhYjY0ZixfMHg0ZDkwYjksXzB4MTgzNTk5LF8weGQ1OGIyYixfMHg0M2FmNDApe3ZhciBfMHgxNDcwOD1fMHg0MjQ4ZDYsXzB4NDQ2NTAwPXRoaXM7XzB4NDNhZjQwfHwoXzB4NDNhZjQwPWZ1bmN0aW9uKF8weDRiZGZiMSxfMHg0YmRjNGQpe3JldHVybiBfMHg0YmRmYjFbXzB4NGJkYzRkXTt9KTt2YXIgXzB4MTgyYzBmPV8weDE4MzU5OVtfMHgxNDcwOCgweDE0ZCldKCksXzB4NWIzZTU0PV8weGQ1OGIyYltfMHgxNDcwOCgweDEzZildfHx7fSxfMHg1Mjc3OTI9XzB4ZDU4YjJiWydkZXB0aCddLF8weDUwODMxMj1fMHhkNThiMmJbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXTt0cnl7dmFyIF8weDUyMTA1OD10aGlzW18weDE0NzA4KDB4MTQzKV0oXzB4OWFiNjRmKSxfMHg0MTIzZWE9XzB4MTgyYzBmO18weDUyMTA1OCYmXzB4NDEyM2VhWzB4MF09PT0nXFxcXHgyNycmJihfMHg0MTIzZWE9XzB4NDEyM2VhW18weDE0NzA4KDB4MTEyKV0oMHgxLF8weDQxMjNlYVsnbGVuZ3RoJ10tMHgyKSk7dmFyIF8weDI2ZGU5YT1fMHhkNThiMmJbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDViM2U1NFtfMHgxNDcwOCgweDEyZSkrXzB4NDEyM2VhXTtfMHgyNmRlOWEmJihfMHhkNThiMmJbXzB4MTQ3MDgoMHgxMjkpXT1fMHhkNThiMmJbJ2RlcHRoJ10rMHgxKSxfMHhkNThiMmJbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT0hIV8weDI2ZGU5YTt2YXIgXzB4NTNhNmIzPXR5cGVvZiBfMHgxODM1OTk9PV8weDE0NzA4KDB4MTc2KSxfMHgzMTc5MGI9eyduYW1lJzpfMHg1M2E2YjN8fF8weDUyMTA1OD9fMHgxODJjMGY6dGhpc1tfMHgxNDcwOCgweDE5NildKF8weDE4MmMwZil9O2lmKF8weDUzYTZiMyYmKF8weDMxNzkwYltfMHgxNDcwOCgweDE3NildPSEweDApLCEoXzB4NGQ5MGI5PT09XzB4MTQ3MDgoMHhmYil8fF8weDRkOTBiOT09PV8weDE0NzA4KDB4ZTIpKSl7dmFyIF8weDQyOGUyZj10aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10oXzB4OWFiNjRmLF8weDE4MzU5OSk7aWYoXzB4NDI4ZTJmJiYoXzB4NDI4ZTJmWydzZXQnXSYmKF8weDMxNzkwYlsnc2V0dGVyJ109ITB4MCksXzB4NDI4ZTJmW18weDE0NzA4KDB4MWE1KV0mJiFfMHgyNmRlOWEmJiFfMHhkNThiMmJbXzB4MTQ3MDgoMHgxOGQpXSkpcmV0dXJuIF8weDMxNzkwYltfMHgxNDcwOCgweDE3MyldPSEweDAsdGhpc1tfMHgxNDcwOCgweDFiNCldKF8weDMxNzkwYixfMHhkNThiMmIpLF8weDMxNzkwYjt9dmFyIF8weDU3ODZlOTt0cnl7XzB4NTc4NmU5PV8weDQzYWY0MChfMHg5YWI2NGYsXzB4MTgzNTk5KTt9Y2F0Y2goXzB4Mzk2YmE4KXtyZXR1cm4gXzB4MzE3OTBiPXsnbmFtZSc6XzB4MTgyYzBmLCd0eXBlJzondW5rbm93bicsJ2Vycm9yJzpfMHgzOTZiYThbXzB4MTQ3MDgoMHhlNildfSx0aGlzW18weDE0NzA4KDB4MWI0KV0oXzB4MzE3OTBiLF8weGQ1OGIyYiksXzB4MzE3OTBiO312YXIgXzB4NTJkZGZjPXRoaXNbJ190eXBlJ10oXzB4NTc4NmU5KSxfMHgxZjA1MWY9dGhpc1tfMHgxNDcwOCgweDExNSldKF8weDUyZGRmYyk7aWYoXzB4MzE3OTBiWyd0eXBlJ109XzB4NTJkZGZjLF8weDFmMDUxZil0aGlzWydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4MzE3OTBiLF8weGQ1OGIyYixfMHg1Nzg2ZTksZnVuY3Rpb24oKXt2YXIgXzB4MWIxNGYwPV8weDE0NzA4O18weDMxNzkwYltfMHgxYjE0ZjAoMHgxN2YpXT1fMHg1Nzg2ZTlbJ3ZhbHVlT2YnXSgpLCFfMHgyNmRlOWEmJl8weDQ0NjUwMFtfMHgxYjE0ZjAoMHhlMyldKF8weDUyZGRmYyxfMHgzMTc5MGIsXzB4ZDU4YjJiLHt9KTt9KTtlbHNle3ZhciBfMHgzNDgyMDY9XzB4ZDU4YjJiW18weDE0NzA4KDB4MTgyKV0mJl8weGQ1OGIyYlsnbGV2ZWwnXTxfMHhkNThiMmJbXzB4MTQ3MDgoMHgxNjcpXSYmXzB4ZDU4YjJiW18weDE0NzA4KDB4ZTgpXVsnaW5kZXhPZiddKF8weDU3ODZlOSk8MHgwJiZfMHg1MmRkZmMhPT1fMHgxNDcwOCgweGVhKSYmXzB4ZDU4YjJiW18weDE0NzA4KDB4MTc1KV08XzB4ZDU4YjJiW18weDE0NzA4KDB4ZTEpXTtfMHgzNDgyMDZ8fF8weGQ1OGIyYltfMHgxNDcwOCgweDEwNyldPF8weDUyNzc5Mnx8XzB4MjZkZTlhPyh0aGlzW18weDE0NzA4KDB4MWI2KV0oXzB4MzE3OTBiLF8weDU3ODZlOSxfMHhkNThiMmIsXzB4MjZkZTlhfHx7fSksdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDU3ODZlOSxfMHgzMTc5MGIpKTp0aGlzW18weDE0NzA4KDB4MWI0KV0oXzB4MzE3OTBiLF8weGQ1OGIyYixfMHg1Nzg2ZTksZnVuY3Rpb24oKXt2YXIgXzB4MjM4NWJhPV8weDE0NzA4O18weDUyZGRmYz09PV8weDIzODViYSgweDE1OSl8fF8weDUyZGRmYz09PSd1bmRlZmluZWQnfHwoZGVsZXRlIF8weDMxNzkwYltfMHgyMzg1YmEoMHgxN2YpXSxfMHgzMTc5MGJbXzB4MjM4NWJhKDB4MTI1KV09ITB4MCk7fSk7fXJldHVybiBfMHgzMTc5MGI7fWZpbmFsbHl7XzB4ZDU4YjJiWydleHByZXNzaW9uc1RvRXZhbHVhdGUnXT1fMHg1YjNlNTQsXzB4ZDU4YjJiW18weDE0NzA4KDB4MTI5KV09XzB4NTI3NzkyLF8weGQ1OGIyYltfMHgxNDcwOCgweDE1MyldPV8weDUwODMxMjt9fVtfMHg0MjQ4ZDYoMHhlMyldKF8weDMwNTc4MSxfMHgxMjEyYjMsXzB4M2JlYjI3LF8weDUyMjY4Myl7dmFyIF8weDRkMjA1Nz1fMHg0MjQ4ZDYsXzB4MmIyYTMxPV8weDUyMjY4M1snc3RyTGVuZ3RoJ118fF8weDNiZWIyN1tfMHg0ZDIwNTcoMHgxODUpXTtpZigoXzB4MzA1NzgxPT09XzB4NGQyMDU3KDB4MTNjKXx8XzB4MzA1NzgxPT09XzB4NGQyMDU3KDB4MTAxKSkmJl8weDEyMTJiM1tfMHg0ZDIwNTcoMHgxN2YpXSl7bGV0IF8weDE1ZDYzMj1fMHgxMjEyYjNbJ3ZhbHVlJ11bXzB4NGQyMDU3KDB4MTVlKV07XzB4M2JlYjI3W18weDRkMjA1NygweDEwNCldKz1fMHgxNWQ2MzIsXzB4M2JlYjI3W18weDRkMjA1NygweDEwNCldPl8weDNiZWIyN1sndG90YWxTdHJMZW5ndGgnXT8oXzB4MTIxMmIzWydjYXBwZWQnXT0nJyxkZWxldGUgXzB4MTIxMmIzWyd2YWx1ZSddKTpfMHgxNWQ2MzI+XzB4MmIyYTMxJiYoXzB4MTIxMmIzW18weDRkMjA1NygweDEyNSldPV8weDEyMTJiM1tfMHg0ZDIwNTcoMHgxN2YpXVtfMHg0ZDIwNTcoMHgxMTIpXSgweDAsXzB4MmIyYTMxKSxkZWxldGUgXzB4MTIxMmIzWyd2YWx1ZSddKTt9fVsnX2lzTWFwJ10oXzB4MmFjNTRmKXt2YXIgXzB4MTkyMWEwPV8weDQyNDhkNjtyZXR1cm4hIShfMHgyYWM1NGYmJl8weDMxOTc1MVsnTWFwJ10mJnRoaXNbXzB4MTkyMWEwKDB4MTc3KV0oXzB4MmFjNTRmKT09PV8weDE5MjFhMCgweDFhOSkmJl8weDJhYzU0ZltfMHgxOTIxYTAoMHgxYWMpXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weDUzZmZlYil7dmFyIF8weDJmOTdkNT1fMHg0MjQ4ZDY7aWYoXzB4NTNmZmViW18weDJmOTdkNSgweDEyZildKC9eXFxcXGQrJC8pKXJldHVybiBfMHg1M2ZmZWI7dmFyIF8weDJiOGY3Mjt0cnl7XzB4MmI4ZjcyPUpTT05bXzB4MmY5N2Q1KDB4MTFhKV0oJycrXzB4NTNmZmViKTt9Y2F0Y2h7XzB4MmI4ZjcyPSdcXFxceDIyJyt0aGlzW18weDJmOTdkNSgweDE3NyldKF8weDUzZmZlYikrJ1xcXFx4MjInO31yZXR1cm4gXzB4MmI4ZjcyW18weDJmOTdkNSgweDEyZildKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4MmI4ZjcyPV8weDJiOGY3Mlsnc3Vic3RyJ10oMHgxLF8weDJiOGY3MltfMHgyZjk3ZDUoMHgxNWUpXS0weDIpOl8weDJiOGY3Mj1fMHgyYjhmNzJbXzB4MmY5N2Q1KDB4MTMwKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVsncmVwbGFjZSddKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpW18weDJmOTdkNSgweDEzMCldKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHgyYjhmNzI7fVtfMHg0MjQ4ZDYoMHgxYjQpXShfMHg1YmViNmQsXzB4NGNjNmMyLF8weDU1ZGI5MixfMHg1YTc2ZjYpe3ZhciBfMHg4MTNiYzg9XzB4NDI0OGQ2O3RoaXNbXzB4ODEzYmM4KDB4MTQwKV0oXzB4NWJlYjZkLF8weDRjYzZjMiksXzB4NWE3NmY2JiZfMHg1YTc2ZjYoKSx0aGlzW18weDgxM2JjOCgweGRmKV0oXzB4NTVkYjkyLF8weDViZWI2ZCksdGhpc1tfMHg4MTNiYzgoMHgxMDkpXShfMHg1YmViNmQsXzB4NGNjNmMyKTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4M2M2OTYxLF8weDE3MmZmYSl7dmFyIF8weDE3NDQxNz1fMHg0MjQ4ZDY7dGhpc1tfMHgxNzQ0MTcoMHgxM2UpXShfMHgzYzY5NjEsXzB4MTcyZmZhKSx0aGlzW18weDE3NDQxNygweDE4OCldKF8weDNjNjk2MSxfMHgxNzJmZmEpLHRoaXNbJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnXShfMHgzYzY5NjEsXzB4MTcyZmZhKSx0aGlzW18weDE3NDQxNygweDExNyldKF8weDNjNjk2MSxfMHgxNzJmZmEpO31bXzB4NDI0OGQ2KDB4MTNlKV0oXzB4MjMyZmIxLF8weDE1NDZkYyl7fVtfMHg0MjQ4ZDYoMHgxODgpXShfMHgxYjU1Y2EsXzB4MWRjMWIwKXt9W18weDQyNDhkNigweDFhNyldKF8weDI5MGRkZCxfMHg1ZWE0MjUpe31bXzB4NDI0OGQ2KDB4ZWQpXShfMHgzYzEwMjYpe3JldHVybiBfMHgzYzEwMjY9PT10aGlzWydfdW5kZWZpbmVkJ107fVsnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4NTgxNmRlLF8weDUxYWQwZil7dmFyIF8weDRlMzIwNz1fMHg0MjQ4ZDY7dGhpc1tfMHg0ZTMyMDcoMHgxYTcpXShfMHg1ODE2ZGUsXzB4NTFhZDBmKSx0aGlzW18weDRlMzIwNygweDE5NSldKF8weDU4MTZkZSksXzB4NTFhZDBmW18weDRlMzIwNygweGU0KV0mJnRoaXNbJ19zb3J0UHJvcHMnXShfMHg1ODE2ZGUpLHRoaXNbXzB4NGUzMjA3KDB4MTFjKV0oXzB4NTgxNmRlLF8weDUxYWQwZiksdGhpc1tfMHg0ZTMyMDcoMHgxOWIpXShfMHg1ODE2ZGUsXzB4NTFhZDBmKSx0aGlzWydfY2xlYW5Ob2RlJ10oXzB4NTgxNmRlKTt9W18weDQyNDhkNigweGRmKV0oXzB4M2NjNTJjLF8weDRkMzhhNyl7dmFyIF8weDQxZTRkZD1fMHg0MjQ4ZDY7bGV0IF8weDUzYzliNzt0cnl7XzB4MzE5NzUxW18weDQxZTRkZCgweGY5KV0mJihfMHg1M2M5Yjc9XzB4MzE5NzUxW18weDQxZTRkZCgweGY5KV1bXzB4NDFlNGRkKDB4MTM5KV0sXzB4MzE5NzUxW18weDQxZTRkZCgweGY5KV1bJ2Vycm9yJ109ZnVuY3Rpb24oKXt9KSxfMHgzY2M1MmMmJnR5cGVvZiBfMHgzY2M1MmNbXzB4NDFlNGRkKDB4MTVlKV09PV8weDQxZTRkZCgweDEzNSkmJihfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTVlKV09XzB4M2NjNTJjW18weDQxZTRkZCgweDE1ZSldKTt9Y2F0Y2h7fWZpbmFsbHl7XzB4NTNjOWI3JiYoXzB4MzE5NzUxW18weDQxZTRkZCgweGY5KV1bXzB4NDFlNGRkKDB4MTM5KV09XzB4NTNjOWI3KTt9aWYoXzB4NGQzOGE3W18weDQxZTRkZCgweDE5MSldPT09XzB4NDFlNGRkKDB4MTM1KXx8XzB4NGQzOGE3W18weDQxZTRkZCgweDE5MSldPT09XzB4NDFlNGRkKDB4MTdjKSl7aWYoaXNOYU4oXzB4NGQzOGE3Wyd2YWx1ZSddKSlfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTlhKV09ITB4MCxkZWxldGUgXzB4NGQzOGE3W18weDQxZTRkZCgweDE3ZildO2Vsc2Ugc3dpdGNoKF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxN2YpXSl7Y2FzZSBOdW1iZXJbXzB4NDFlNGRkKDB4ZjEpXTpfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTk5KV09ITB4MCxkZWxldGUgXzB4NGQzOGE3Wyd2YWx1ZSddO2JyZWFrO2Nhc2UgTnVtYmVyWydORUdBVElWRV9JTkZJTklUWSddOl8weDRkMzhhN1snbmVnYXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxN2YpXTticmVhaztjYXNlIDB4MDp0aGlzWydfaXNOZWdhdGl2ZVplcm8nXShfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTdmKV0pJiYoXzB4NGQzOGE3W18weDQxZTRkZCgweDE2MSldPSEweDApO2JyZWFrO319ZWxzZSBfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTkxKV09PT1fMHg0MWU0ZGQoMHhlYSkmJnR5cGVvZiBfMHgzY2M1MmNbXzB4NDFlNGRkKDB4MTA2KV09PV8weDQxZTRkZCgweDEzYykmJl8weDNjYzUyY1tfMHg0MWU0ZGQoMHgxMDYpXSYmXzB4NGQzOGE3WyduYW1lJ10mJl8weDNjYzUyY1tfMHg0MWU0ZGQoMHgxMDYpXSE9PV8weDRkMzhhN1snbmFtZSddJiYoXzB4NGQzOGE3W18weDQxZTRkZCgweDE0NildPV8weDNjYzUyY1snbmFtZSddKTt9WydfaXNOZWdhdGl2ZVplcm8nXShfMHg1NDVkNzApe3ZhciBfMHgzZjVmNzg9XzB4NDI0OGQ2O3JldHVybiAweDEvXzB4NTQ1ZDcwPT09TnVtYmVyW18weDNmNWY3OCgweDE1NyldO31bXzB4NDI0OGQ2KDB4MTc4KV0oXzB4NDgzNDJkKXt2YXIgXzB4MTEzM2NlPV8weDQyNDhkNjshXzB4NDgzNDJkW18weDExMzNjZSgweDE5ZCldfHwhXzB4NDgzNDJkW18weDExMzNjZSgweDE5ZCldW18weDExMzNjZSgweDE1ZSldfHxfMHg0ODM0MmRbJ3R5cGUnXT09PV8weDExMzNjZSgweGZiKXx8XzB4NDgzNDJkW18weDExMzNjZSgweDE5MSldPT09J01hcCd8fF8weDQ4MzQyZFtfMHgxMTMzY2UoMHgxOTEpXT09PV8weDExMzNjZSgweDE2Yyl8fF8weDQ4MzQyZFtfMHgxMTMzY2UoMHgxOWQpXVtfMHgxMTMzY2UoMHgxN2IpXShmdW5jdGlvbihfMHgzNThmNzQsXzB4MjUxNTE5KXt2YXIgXzB4MTk3ZDk0PV8weDExMzNjZSxfMHhiYTE5NDQ9XzB4MzU4Zjc0W18weDE5N2Q5NCgweDEwNildW18weDE5N2Q5NCgweDE4ZildKCksXzB4MTM4YWZmPV8weDI1MTUxOVtfMHgxOTdkOTQoMHgxMDYpXVsndG9Mb3dlckNhc2UnXSgpO3JldHVybiBfMHhiYTE5NDQ8XzB4MTM4YWZmPy0weDE6XzB4YmExOTQ0Pl8weDEzOGFmZj8weDE6MHgwO30pO31bXzB4NDI0OGQ2KDB4MTFjKV0oXzB4MTgwMDk1LF8weDk0YTdiZSl7dmFyIF8weGIzYjQzYT1fMHg0MjQ4ZDY7aWYoIShfMHg5NGE3YmVbXzB4YjNiNDNhKDB4MTJiKV18fCFfMHgxODAwOTVbXzB4YjNiNDNhKDB4MTlkKV18fCFfMHgxODAwOTVbXzB4YjNiNDNhKDB4MTlkKV1bJ2xlbmd0aCddKSl7Zm9yKHZhciBfMHg0NjY1M2U9W10sXzB4ODBjMzM4PVtdLF8weDE0MjQxMT0weDAsXzB4MmQ2MDIxPV8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXVtfMHhiM2I0M2EoMHgxNWUpXTtfMHgxNDI0MTE8XzB4MmQ2MDIxO18weDE0MjQxMSsrKXt2YXIgXzB4NDEzMjg5PV8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXVtfMHgxNDI0MTFdO18weDQxMzI4OVtfMHhiM2I0M2EoMHgxOTEpXT09PV8weGIzYjQzYSgweGVhKT9fMHg0NjY1M2VbXzB4YjNiNDNhKDB4MTM0KV0oXzB4NDEzMjg5KTpfMHg4MGMzMzhbXzB4YjNiNDNhKDB4MTM0KV0oXzB4NDEzMjg5KTt9aWYoISghXzB4ODBjMzM4W18weGIzYjQzYSgweDE1ZSldfHxfMHg0NjY1M2VbJ2xlbmd0aCddPD0weDEpKXtfMHgxODAwOTVbXzB4YjNiNDNhKDB4MTlkKV09XzB4ODBjMzM4O3ZhciBfMHgyMjc0ZGY9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4NDY2NTNlfTt0aGlzW18weGIzYjQzYSgweDEzZSldKF8weDIyNzRkZixfMHg5NGE3YmUpLHRoaXNbXzB4YjNiNDNhKDB4MWE3KV0oXzB4MjI3NGRmLF8weDk0YTdiZSksdGhpc1tfMHhiM2I0M2EoMHgxOTUpXShfMHgyMjc0ZGYpLHRoaXNbXzB4YjNiNDNhKDB4MTE3KV0oXzB4MjI3NGRmLF8weDk0YTdiZSksXzB4MjI3NGRmWydpZCddKz0nXFxcXHgyMGYnLF8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXVtfMHhiM2I0M2EoMHgxMTkpXShfMHgyMjc0ZGYpO319fVtfMHg0MjQ4ZDYoMHgxOWIpXShfMHg0ODhlMDcsXzB4MzBkYTVmKXt9W18weDQyNDhkNigweDE5NSldKF8weDJmYjljYSl7fVtfMHg0MjQ4ZDYoMHhkNCldKF8weDQ2ZTg4ZSl7dmFyIF8weDExNjdjND1fMHg0MjQ4ZDY7cmV0dXJuIEFycmF5W18weDExNjdjNCgweGZhKV0oXzB4NDZlODhlKXx8dHlwZW9mIF8weDQ2ZTg4ZT09J29iamVjdCcmJnRoaXNbXzB4MTE2N2M0KDB4MTc3KV0oXzB4NDZlODhlKT09PV8weDExNjdjNCgweDExNCk7fVsnX3NldE5vZGVQZXJtaXNzaW9ucyddKF8weDMxNDRhOCxfMHhkOGQ1Yzcpe31bJ19jbGVhbk5vZGUnXShfMHgzNDljYjQpe3ZhciBfMHgyYTU4NzI9XzB4NDI0OGQ2O2RlbGV0ZSBfMHgzNDljYjRbXzB4MmE1ODcyKDB4MTQ4KV0sZGVsZXRlIF8weDM0OWNiNFtfMHgyYTU4NzIoMHgxOGEpXSxkZWxldGUgXzB4MzQ5Y2I0W18weDJhNTg3MigweDE1YildO31bXzB4NDI0OGQ2KDB4MTY0KV0oXzB4MTM4N2I2LF8weDU5ZGU3MCl7fX1sZXQgXzB4NTljZDZkPW5ldyBfMHgzMTg3YTcoKSxfMHgxMWU0OTI9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4YjdlM2RiPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4MmU4MjMyKF8weGNmZDI5MCxfMHgzZTk0MWYsXzB4MzI4M2MyLF8weDIzMDY1ZSxfMHgyYTdmMDEsXzB4Mzg3NzhlKXt2YXIgXzB4NDJjYTI5PV8weDQyNDhkNjtsZXQgXzB4NDAxZmY2LF8weDQ4ODVkZTt0cnl7XzB4NDg4NWRlPV8weDI5OWRhMygpLF8weDQwMWZmNj1fMHgyNDA4YmFbXzB4M2U5NDFmXSwhXzB4NDAxZmY2fHxfMHg0ODg1ZGUtXzB4NDAxZmY2Wyd0cyddPjB4MWY0JiZfMHg0MDFmZjZbXzB4NDJjYTI5KDB4MTAwKV0mJl8weDQwMWZmNltfMHg0MmNhMjkoMHgxYTQpXS9fMHg0MDFmZjZbXzB4NDJjYTI5KDB4MTAwKV08MHg2ND8oXzB4MjQwOGJhW18weDNlOTQxZl09XzB4NDAxZmY2PXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4NDg4NWRlfSxfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV09e30pOl8weDQ4ODVkZS1fMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bJ3RzJ10+MHgzMiYmXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDEwMCldJiZfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bJ3RpbWUnXS9fMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bXzB4NDJjYTI5KDB4MTAwKV08MHg2NCYmKF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXT17fSk7bGV0IF8weDM5MDVkNz1bXSxfMHg1YzNhNTk9XzB4NDAxZmY2WydyZWR1Y2VMaW1pdHMnXXx8XzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildWydyZWR1Y2VMaW1pdHMnXT9fMHhiN2UzZGI6XzB4MTFlNDkyLF8weDQwNzJkNj1fMHg5Yzg1ZDI9Pnt2YXIgXzB4NTc1NGVhPV8weDQyY2EyOTtsZXQgXzB4ZWM3NzM1PXt9O3JldHVybiBfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTlkKV09XzB4OWM4NWQyW18weDU3NTRlYSgweDE5ZCldLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxNjIpXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4MTYyKV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweDE4NSldPV8weDljODVkMltfMHg1NzU0ZWEoMHgxODUpXSxfMHhlYzc3MzVbJ3RvdGFsU3RyTGVuZ3RoJ109XzB4OWM4NWQyW18weDU3NTRlYSgweDE1NSldLF8weGVjNzczNVtfMHg1NzU0ZWEoMHhlMSldPV8weDljODVkMltfMHg1NzU0ZWEoMHhlMSldLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxNjcpXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4MTY3KV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweGU0KV09ITB4MSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTJiKV09IV8weDVkMjY3YSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTI5KV09MHgxLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxMDcpXT0weDAsXzB4ZWM3NzM1WydleHBJZCddPV8weDU3NTRlYSgweGZmKSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTc5KV09XzB4NTc1NGVhKDB4ZmQpLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxODIpXT0hMHgwLF8weGVjNzczNVtfMHg1NzU0ZWEoMHhlOCldPVtdLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxNzUpXT0weDAsXzB4ZWM3NzM1W18weDU3NTRlYSgweDE4ZCldPSEweDAsXzB4ZWM3NzM1W18weDU3NTRlYSgweDEwNCldPTB4MCxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MWFkKV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4ZWM3NzM1O307Zm9yKHZhciBfMHg0ZWRiNzg9MHgwO18weDRlZGI3ODxfMHgyYTdmMDFbXzB4NDJjYTI5KDB4MTVlKV07XzB4NGVkYjc4KyspXzB4MzkwNWQ3W18weDQyY2EyOSgweDEzNCldKF8weDU5Y2Q2ZFsnc2VyaWFsaXplJ10oeyd0aW1lTm9kZSc6XzB4Y2ZkMjkwPT09XzB4NDJjYTI5KDB4MWE0KXx8dm9pZCAweDB9LF8weDJhN2YwMVtfMHg0ZWRiNzhdLF8weDQwNzJkNihfMHg1YzNhNTkpLHt9KSk7aWYoXzB4Y2ZkMjkwPT09J3RyYWNlJyl7bGV0IF8weDM0Y2I5MT1FcnJvcltfMHg0MmNhMjkoMHgxMGIpXTt0cnl7RXJyb3JbXzB4NDJjYTI5KDB4MTBiKV09MHgxLzB4MCxfMHgzOTA1ZDdbXzB4NDJjYTI5KDB4MTM0KV0oXzB4NTljZDZkW18weDQyY2EyOSgweDFiNildKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVsnc3RhY2snXSxfMHg0MDcyZDYoXzB4NWMzYTU5KSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109XzB4MzRjYjkxO319cmV0dXJueydtZXRob2QnOidsb2cnLCd2ZXJzaW9uJzpfMHg1NjM1MDQsJ2FyZ3MnOlt7J3RzJzpfMHgzMjgzYzIsJ3Nlc3Npb24nOl8weDIzMDY1ZSwnYXJncyc6XzB4MzkwNWQ3LCdpZCc6XzB4M2U5NDFmLCdjb250ZXh0JzpfMHgzODc3OGV9XX07fWNhdGNoKF8weDQ4ZjBjZSl7cmV0dXJueydtZXRob2QnOidsb2cnLCd2ZXJzaW9uJzpfMHg1NjM1MDQsJ2FyZ3MnOlt7J3RzJzpfMHgzMjgzYzIsJ3Nlc3Npb24nOl8weDIzMDY1ZSwnYXJncyc6W3sndHlwZSc6XzB4NDJjYTI5KDB4MTEzKSwnZXJyb3InOl8weDQ4ZjBjZSYmXzB4NDhmMGNlWydtZXNzYWdlJ119XSwnaWQnOl8weDNlOTQxZiwnY29udGV4dCc6XzB4Mzg3NzhlfV19O31maW5hbGx5e3RyeXtpZihfMHg0MDFmZjYmJl8weDQ4ODVkZSl7bGV0IF8weDJmZjE4OT1fMHgyOTlkYTMoKTtfMHg0MDFmZjZbJ2NvdW50J10rKyxfMHg0MDFmZjZbXzB4NDJjYTI5KDB4MWE0KV0rPV8weDVkZWFkNShfMHg0ODg1ZGUsXzB4MmZmMTg5KSxfMHg0MDFmZjZbJ3RzJ109XzB4MmZmMTg5LF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxMDApXSsrLF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxYTQpXSs9XzB4NWRlYWQ1KF8weDQ4ODVkZSxfMHgyZmYxODkpLF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVsndHMnXT1fMHgyZmYxODksKF8weDQwMWZmNlsnY291bnQnXT4weDMyfHxfMHg0MDFmZjZbXzB4NDJjYTI5KDB4MWE0KV0+MHg2NCkmJihfMHg0MDFmZjZbXzB4NDJjYTI5KDB4MTQ0KV09ITB4MCksKF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxMDApXT4weDNlOHx8XzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDFhNCldPjB4MTJjKSYmKF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxNDQpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgyZTgyMzI7fSgoXzB4MzA4MGUwLF8weDEzYWQ4NSxfMHg0YjAxOTksXzB4MmQ0MGY2LF8weDRiN2U0NSxfMHg0ZTBlNzcsXzB4MzcwNTJiLF8weDIwM2JiNCxfMHgyZjk5MzEsXzB4MzY2MzAzKT0+e3ZhciBfMHg1MjFhODQ9XzB4MzBkNDZjO2lmKF8weDMwODBlMFsnX2NvbnNvbGVfbmluamEnXSlyZXR1cm4gXzB4MzA4MGUwW18weDUyMWE4NCgweGY0KV07aWYoIUooXzB4MzA4MGUwLF8weDIwM2JiNCxfMHg0YjdlNDUpKXJldHVybiBfMHgzMDgwZTBbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnY292ZXJhZ2UnOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weDMwODBlMFtfMHg1MjFhODQoMHhmNCldO2xldCBfMHgzNDkzZmM9VyhfMHgzMDgwZTApLF8weDRjYWQzMD1fMHgzNDkzZmNbXzB4NTIxYTg0KDB4ZjApXSxfMHg4MTkyNzM9XzB4MzQ5M2ZjW18weDUyMWE4NCgweDE2ZCldLF8weDU0NGNjMj1fMHgzNDkzZmNbXzB4NTIxYTg0KDB4MTQ5KV0sXzB4M2ViM2U2PXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4MjVmZjE0PVkoXzB4MzA4MGUwLF8weDJmOTkzMSxfMHgzZWIzZTYsXzB4NGUwZTc3KSxfMHgxOTIzMDA9XzB4MjU4NzNmPT57XzB4M2ViM2U2Wyd0cyddW18weDI1ODczZl09XzB4ODE5MjczKCk7fSxfMHg0NGY1MTA9KF8weDU1NjJmZCxfMHgyZjY3MDYpPT57dmFyIF8weDJlY2Q2Nj1fMHg1MjFhODQ7bGV0IF8weDJjYzkxNj1fMHgzZWIzZTZbJ3RzJ11bXzB4MmY2NzA2XTtpZihkZWxldGUgXzB4M2ViM2U2Wyd0cyddW18weDJmNjcwNl0sXzB4MmNjOTE2KXtsZXQgXzB4MWY1ODQyPV8weDRjYWQzMChfMHgyY2M5MTYsXzB4ODE5MjczKCkpO18weDUzNzUxYyhfMHgyNWZmMTQoXzB4MmVjZDY2KDB4MWE0KSxfMHg1NTYyZmQsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLFtfMHgxZjU4NDJdLF8weDJmNjcwNikpO319LF8weDE4Zjc4Yj1fMHgyN2U1MzM9Pl8weDc0YWRjYz0+e3ZhciBfMHg1M2YzMWE9XzB4NTIxYTg0O3RyeXtfMHgxOTIzMDAoXzB4NzRhZGNjKSxfMHgyN2U1MzMoXzB4NzRhZGNjKTt9ZmluYWxseXtfMHgzMDgwZTBbXzB4NTNmMzFhKDB4ZjkpXVtfMHg1M2YzMWEoMHgxYTQpXT1fMHgyN2U1MzM7fX0sXzB4MTU1M2Q4PV8weDRiNjI0Yj0+XzB4NWNhNDQxPT57dmFyIF8weDJmZmZmNz1fMHg1MjFhODQ7dHJ5e2xldCBbXzB4NWUyZDg2LF8weDQ2ZGI1Ml09XzB4NWNhNDQxW18weDJmZmZmNygweDEzZCldKF8weDJmZmZmNygweDE3ZCkpO18weDQ0ZjUxMChfMHg0NmRiNTIsXzB4NWUyZDg2KSxfMHg0YjYyNGIoXzB4NWUyZDg2KTt9ZmluYWxseXtfMHgzMDgwZTBbXzB4MmZmZmY3KDB4ZjkpXVtfMHgyZmZmZjcoMHgxNDIpXT1fMHg0YjYyNGI7fX07XzB4MzA4MGUwW18weDUyMWE4NCgweGY0KV09eydjb25zb2xlTG9nJzooXzB4MThlMjgwLF8weDFmNGQxNSk9Pnt2YXIgXzB4MWI5OGY1PV8weDUyMWE4NDtfMHgzMDgwZTBbJ2NvbnNvbGUnXVtfMHgxYjk4ZjUoMHgxYTApXVtfMHgxYjk4ZjUoMHgxMDYpXSE9PV8weDFiOThmNSgweDEyMykmJl8weDUzNzUxYyhfMHgyNWZmMTQoXzB4MWI5OGY1KDB4MWEwKSxfMHgxOGUyODAsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLF8weDFmNGQxNSkpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDRjOTU2YixfMHhjZGRiMTEpPT57dmFyIF8weDVkZDAyOD1fMHg1MjFhODQ7XzB4MzA4MGUwW18weDVkZDAyOCgweGY5KV1bXzB4NWRkMDI4KDB4MWEwKV1bXzB4NWRkMDI4KDB4MTA2KV0hPT1fMHg1ZGQwMjgoMHgxMTApJiZfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDVkZDAyOCgweDE1NiksXzB4NGM5NTZiLF8weDU0NGNjMigpLF8weGY0ODllMixfMHhjZGRiMTEpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4MTBhMzA4PV8weDUyMWE4NDtfMHgzMDgwZTBbJ2NvbnNvbGUnXVtfMHgxMGEzMDgoMHgxYTQpXT1fMHgxOGY3OGIoXzB4MzA4MGUwWydjb25zb2xlJ11bXzB4MTBhMzA4KDB4MWE0KV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHg0NGE4ODQ9XzB4NTIxYTg0O18weDMwODBlMFtfMHg0NGE4ODQoMHhmOSldWyd0aW1lRW5kJ109XzB4MTU1M2Q4KF8weDMwODBlMFtfMHg0NGE4ODQoMHhmOSldW18weDQ0YTg4NCgweDE0MildKTt9LCdhdXRvTG9nJzooXzB4NDc5NjYwLF8weGQxNjg2Yyk9Pnt2YXIgXzB4NDA2NDZlPV8weDUyMWE4NDtfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDQwNjQ2ZSgweDFhMCksXzB4ZDE2ODZjLF8weDU0NGNjMigpLF8weGY0ODllMixbXzB4NDc5NjYwXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4OTFmZWQ1LF8weDQwYTg0Zik9Pnt2YXIgXzB4NzM0NGUxPV8weDUyMWE4NDtfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDczNDRlMSgweDFhMCksXzB4OTFmZWQ1LF8weDU0NGNjMigpLF8weGY0ODllMixfMHg0MGE4NGYpKTt9LCdhdXRvVHJhY2UnOihfMHgzNTQ2ZjcsXzB4M2Q4ZWI1KT0+e3ZhciBfMHgyNTUxMmY9XzB4NTIxYTg0O18weDUzNzUxYyhfMHgyNWZmMTQoXzB4MjU1MTJmKDB4MTU2KSxfMHgzZDhlYjUsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLFtfMHgzNTQ2ZjddKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDJiNzIyZixfMHgyZGYwM2IpPT57dmFyIF8weDIwYWNmMT1fMHg1MjFhODQ7XzB4NTM3NTFjKF8weDI1ZmYxNChfMHgyMGFjZjEoMHgxNTYpLF8weDJiNzIyZixfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsXzB4MmRmMDNiKSk7fSwnYXV0b1RpbWUnOihfMHgyOTcxOTQsXzB4MWE2YjY4LF8weDU5ZDYwYik9PntfMHgxOTIzMDAoXzB4NTlkNjBiKTt9LCdhdXRvVGltZUVuZCc6KF8weDRiMTE3NCxfMHgxOWU0ZjksXzB4M2U5NzczKT0+e18weDQ0ZjUxMChfMHgxOWU0ZjksXzB4M2U5NzczKTt9LCdjb3ZlcmFnZSc6XzB4MTY5MDM1PT57dmFyIF8weDk0ZmRkPV8weDUyMWE4NDtfMHg1Mzc1MWMoeydtZXRob2QnOl8weDk0ZmRkKDB4MTg3KSwndmVyc2lvbic6XzB4NGUwZTc3LCdhcmdzJzpbeydpZCc6XzB4MTY5MDM1fV19KTt9fTtsZXQgXzB4NTM3NTFjPWIoXzB4MzA4MGUwLF8weDEzYWQ4NSxfMHg0YjAxOTksXzB4MmQ0MGY2LF8weDRiN2U0NSxfMHgzNjYzMDMpLF8weGY0ODllMj1fMHgzMDgwZTBbXzB4NTIxYTg0KDB4ZDMpXTtyZXR1cm4gXzB4MzA4MGUwW18weDUyMWE4NCgweGY0KV07fSkoZ2xvYmFsVGhpcyxfMHgzMGQ0NmMoMHhlMCksXzB4MzBkNDZjKDB4Y2MpLFxcXCJjOlxcXFxcXFxcVXNlcnNcXFxcXFxcXFVTRVJcXFxcXFxcXC52c2NvZGVcXFxcXFxcXGV4dGVuc2lvbnNcXFxcXFxcXHdhbGxhYnlqcy5jb25zb2xlLW5pbmphLTEuMC4yNDBcXFxcXFxcXG5vZGVfbW9kdWxlc1xcXCIsXzB4MzBkNDZjKDB4MTdhKSxfMHgzMGQ0NmMoMHhmMiksXzB4MzBkNDZjKDB4ZDkpLF8weDMwZDQ2YygweDFhYSksXzB4MzBkNDZjKDB4MTAzKSxfMHgzMGQ0NmMoMHhlZSkpO1wiKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IHVuaWNvcm4vbm8tYWJ1c2l2ZS1lc2xpbnQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyIsImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IFN0b3JpZXMgZnJvbSAnLi9zdG9yaWVzJztcbmltcG9ydCBQaWN0dXJlc0dyaWQgZnJvbSAnLi9waWN0dXJlR3JpZCc7XG5pbXBvcnQgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSBmcm9tICcuL2NvbGxlY3QtZ3Vlc3QtYXR0ZW5kYW5jZSc7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XG5cbmNvbnN0IExvdmVUaXRsZUljb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExhenlMb2FkSW1hZ2VcbiAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy93aW5lLnBuZydcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgIGhlaWdodDogJzgwcHgnLFxuICAgICAgfX1cbiAgICAgIGVmZmVjdD0nYmx1cidcbiAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICBhbHQ9J3dpbmUgaWxsdXN0cmF0b3InXG4gICAgLz5cbiAgKTtcbn07XG5jb25zdCBFdmVudERhdGVJY29uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9JzM1JyBoZWlnaHQ9Jzc4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTIwLjM1NSAxMi4wODNjLTEuNjQzLTEuNjItMi4xNTYtNC43Ny40MS01LjgzIDEuMTg3LS40OSAyLjY4LS4zNjUgMy45MjgtLjIyNyAxLjI4Ni4xNDMgMi41NTIuNDE3IDMuNzcuODU2IDIuMTczLjc4NSA1LjE4NCAyLjE2NCA2LjAyNyA0LjUxLjk5MyAyLjc2Mi0xLjk2OCA0LjEwNy00LjE1NSA0LjQ3NC0yLjc3NS40NjUtNS43MDYuNDE3LTguNTEzLjMzOC0yLjY5NC0uMDc2LTUuNDU0LS4zNzUtNy45OC0xLjM2Ni0yLjI3LS44OTItNC41OS0yLjMzMy01LjcyMy00LjU4LTEuMDQzLTIuMDY2LS44MzYtNC41NDEuNDc1LTYuNDQ0QzEwLjQgMS4xOTMgMTMuNDIyLjY5IDE2LjM4MS4zMzdBNDkuNDYyIDQ5LjQ2MiAwIDAgMSAyNy4zMDcuMjdjMS4yLjEyMyAxLjIxMiAyLjAxNyAwIDEuODkzYTQ5Ljg3NyA0OS44NzcgMCAwIDAtNy40MTItLjIyM2MtMi4yNjUuMTA1LTQuNjcxLjI0LTYuODUuOTAyLTEuODA3LjU0OS0zLjIzMiAxLjg4Mi0zLjYyNyAzLjc3LS40MTQgMS45NzguNzA4IDMuNzMyIDIuMjMgNC45MDMgMy4yNSAyLjUgNy42NzIgMi44MTEgMTEuNjE1IDIuODE3IDIuMjI1LjAwNCA0LjU1LjA3NCA2Ljc0NS0uMzIuODA0LS4xNDQgMS44OTUtLjMyIDIuNDg0LS45NTcuODE0LS44OC0uMzItMS45MzgtMS4wMS0yLjQ2Ny0xLjgzLTEuNDA2LTQuMTQ0LTIuMjgzLTYuNDE2LTIuNjE5LS45NzktLjE0NS0yLjU3OS0uNDEzLTMuNTIgMC0xLjI5NC41Ny0uNTc2IDIuMDYzLjE0NyAyLjc3Ny44Ny44NTYtLjQ3IDIuMTk0LTEuMzM4IDEuMzM4WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMzQuMDIzIDEzLjcyN2MtMS40OTQgNS40NS0zLjE1OCAxMC45MzMtNy4wOTkgMTUuMTU3YTIyLjM5IDIyLjM5IDAgMCAxLTYuMDMgNC41ODFjLTIuMzIzIDEuMjA1LTUuMTMgMi4zODUtNy43ODEgMS44MjgtMS4xOS0uMjUtLjY4Ny0yLjA3NS41MDMtMS44MjUgMi4yOTIuNDggNS4wMi0uODg4IDYuOTctMS45ODZhMjAuODA4IDIwLjgwOCAwIDAgMCA1LjM5Ni00LjM3M2MzLjQ0Ni0zLjkwNCA0Ljg2OS04Ljk3IDYuMjE2LTEzLjg4NC4zMi0xLjE3NCAyLjE0Ny0uNjc2IDEuODI1LjUwMlonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTkuMDI4IDcuOTIzYy0xLjI2NiA4LjM0NC0yLjU5IDE4LjM3IDMuNzIyIDI1LjEzMy44My44OS0uNTA1IDIuMjMxLTEuMzM4IDEuMzM5LTYuODQtNy4zMzEtNS41ODctMTcuODkzLTQuMjEtMjYuOTc0LjE4My0xLjIgMi4wMDYtLjY5IDEuODI2LjUwMlonXG4gICAgICAgIGZpbGw9JyMyMTFEMUQnXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTE0Ljg3NyAzNC4zNDNjLTEuOTE4IDE0LjA3NC0xLjM0OSAyOC40NiAxLjYzNiA0Mi4zNDQuMjU1IDEuMTg3LTEuNTY5IDEuNjk1LTEuODI1LjUwM2ExMjUuNjU0IDEyNS42NTQgMCAwIDEtMS42MzYtNDMuMzVjLjE2NC0xLjIwMiAxLjk4OC0uNjkgMS44MjUuNTAzWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMTAuMzQgNjAuODkxYy0uNDE2LTQuNjU2LTMuODQ1LTguODYtOC4yOS0xMC4yNi0xLjE1OC0uMzY1LS42NjQtMi4xOTMuNTAyLTEuODI1IDUuMzAxIDEuNjcgOS4xODYgNi41NjIgOS42OCAxMi4wODUuMTA4IDEuMjEyLTEuNzg1IDEuMjA1LTEuODkzIDBaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00zLjE5NyA0OS45MmMtLjczIDEuMzg2LS45MiAyLjkzNy0uOTYgNC40ODQtLjAzNyAxLjQ3Ni0uMjU5IDMuMjQ2LjczOSA0LjQ2LjkyIDEuMTIgMi4yNzEgMS45NTYgMy41MyAyLjY0M2ExNy41OTUgMTcuNTk1IDAgMCAwIDQuNDAyIDEuNjYyYzEuMTg0LjI4LjY4MyAyLjEwNS0uNTAzIDEuODI1YTE5LjM3IDE5LjM3IDAgMCAxLTUuMDctMS45NzRjLTEuNTE1LS44NTUtMy4xMDYtMS45MjItNC4xMi0zLjM2MkMuMTUzIDU4LjE1LjMgNTYuMTYzLjM0NSA1NC40MDRjLjA0OS0xLjg5LjMyNy0zLjc1IDEuMjE3LTUuNDQuNTY5LTEuMDc3IDIuMjAyLS4xMjIgMS42MzUuOTU2WidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNNy45MTkgNTguMDI2YzEuMzYgMS43MiAyLjcyMyAzLjQ0IDQuMDg0IDUuMTYuMzA2LjM4OC40MDYuOTY1IDAgMS4zMzktLjM0Mi4zMTMtMS4wMS40MTQtMS4zMzggMEw2LjU4IDU5LjM2M2MtLjMwNi0uMzg3LS40MDYtLjk2NSAwLTEuMzM3LjM0Mi0uMzE0IDEuMDEtLjQxNSAxLjMzOSAwWk0xMi42MjkgNTEuODg0YTI4LjA4IDI4LjA4IDAgMCAxIDE3LjQxOC02LjYyOGMxLjIxOS0uMDMgMS4yMTggMS44NjMgMCAxLjg5Mi01Ljg2My4xNC0xMS41OTQgMi4yODgtMTYuMDggNi4wNzQtLjkyNi43ODItMi4yNy0uNTUtMS4zMzgtMS4zMzhaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00zMi4yNjcgNDYuNjczYy0xLjIxIDQuMjM0LTQuMDcyIDguMTQyLTguMDU0IDEwLjE1LTMuNzgzIDEuOTA2LTguNjIzIDEuNzUzLTExLjY0OS0xLjQ4LS44MzEtLjg4OS41MDQtMi4yMyAxLjMzOC0xLjMzOCAyLjYgMi43NzYgNi43MzUgMi42NzYgOS44NzIuOTA3IDMuMjk3LTEuODU3IDUuNjM4LTUuMTM4IDYuNjY5LTguNzQyLjMzNC0xLjE2OSAyLjE2LS42NzIgMS44MjQuNTAzWidcbiAgICAgICAgZmlsbD0nIzIxMUQxRCdcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMTQuMzUgNTMuMTM4YTQwLjcwNyA0MC43MDcgMCAwIDEgNS45MTItMS41MzNjLjQ4NS0uMDg3IDEuMDQzLjEzMiAxLjE2My42NjEuMTA1LjQ2My0uMTQgMS4wNy0uNjYgMS4xNjVhNDAuNjE2IDQwLjYxNiAwIDAgMC01LjkxMyAxLjUzM2MtLjQ2OC4xNi0xLjA1NC0uMTg0LTEuMTYzLS42NjEtLjEyLS41MjYuMTU4LS45OTMuNjYtMS4xNjVaJ1xuICAgICAgICBmaWxsPScjMjExRDFEJ1xuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmNvbnN0IEhlYWRlckxvZ28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmVCbG9jaycsXG4gICAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwcHgsIDBweCkgcm90YXRlKDBkZWcpIHNjYWxlKDEpJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHN2ZyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIGZpbGw9J25vbmUnPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9J20zNC42MTMgMjcuNzM3IDEuNDM3LjA4OGE2LjExMSA2LjExMSAwIDAgMSAxLjkyNS4yYy4zNS4yLjUzOC40NzUuMS43NjItLjQzNy4yODgtMS4xIDAtMS41IDAtLjQgMC0uOTI1LS4xLTEuNC0uMTI1YTMuMjk2IDMuMjk2IDAgMCAwLTEuMDUgMGMtLjM1LjExMy0uMjg3LjIxMy0uNDg3LjYxM2E3LjU3NyA3LjU3NyAwIDAgMS0xLjc2MyAyLjE1Yy0xLjQ2MiAxLjI1LTMuNDUgMS4zMzctNS4xNjIgMi4wODcuNDUtMi45NjIgMi43MjUtNC40MzcgNS40NzUtNS0uOTc1IDAtMi42NzUtLjg3NS0zLjUxMy0uNDYyLTEuNDg3LjYzNy0zLjc1IDEuNS00LjIxMiAzLjI1LS4yMzggMS4wNjItLjE4OCAyLjYzNy0xLjUzOCAyLjk2Mi0xLjM1LjMyNS0xLjcyNS0uOTYyLTEuNC0xLjk3NS0uODc1LjQ1LTIuMDUuMDg4LTEuODYyLTEuMDUuMTg3LTEuMTM3IDEuNTI1LTEuMjUgMi4zODctMS4zNjIgMi4yMTMtLjM1IDMuOS0xLjYyNSA1Ljk4OC0yLjI4OGEyNS44NDUgMjUuODQ1IDAgMCAwLTIuNS0xLjAyNSA2LjgzNyA2LjgzNyAwIDAgMC0yLjYuNDg4Yy0uOTIuMTE0LTEuODI4LjMxLTIuNzEzLjU4Ny0uNjQuMzQtMS4xOS44MjgtMS42IDEuNDI1LS45ODcgMS4xNjMtMi4yIDIuNS0zLjkgMi4zNzUtMi4xNS0uMi0xLjkxMi0yLjY1LS4zMjUtMy40ODctMS4wMjUgMC0yLjUtLjYzOC0yLjQtMS44NzUuMDg4LTEuNTUgMS45NjMtMS43MzggMy4xMjUtMS40MjUgMS4wOTcuNDE5IDIuMTY2LjkwNyAzLjIgMS40NjIgMS45MzguNzg4IDMuNzUgMCA1Ljc2My0uMmEzNy45OTQgMzcuOTk0IDAgMCAxLTQuNjUtMi42NzUgMi4xODcgMi4xODcgMCAwIDAtMS4zNzUtLjU1aC0xLjI1YTI3LjY3MSAyNy42NzEgMCAwIDAtMy4zNzUuMWMtLjc3NSAwLTEuMzI1LjczOC0xLjgzOCAxLjI1YTYuMTM4IDYuMTM4IDAgMCAxLTIuNSAxLjcxMyAxLjk4NyAxLjk4NyAwIDAgMS0yLjUtLjYyNUEyLjA3NSAyLjA3NSAwIDAgMSA3LjcxMyAyMi40Yy0uOTc1LS4zMjUtMi4yODgtMS4xMTMtMS40MjUtMi4zIDEuMDEyLTEuMzg4IDIuODc1LS42NSAzLjkzNy4xNWE1Ljg3NSA1Ljg3NSAwIDAgMCAyLjkzOCAxLjZjMS40ODIuMDg3IDIuOTY4LjA4NyA0LjQ1IDBhMjMuNzQgMjMuNzQgMCAwIDEtMi4wMzgtMi4wMTMgNS43ODcgNS43ODcgMCAwIDAtLjg2Mi0uOTYyYy0uODUyLS4zOC0xLjc1Mi0uNjQxLTIuNjc1LS43NzVhMTQuNTIyIDE0LjUyMiAwIDAgMC0yLjc1LS43NzUgNS42MTEgNS42MTEgMCAwIDAtMi42ODguNjI1IDYuMjUxIDYuMjUxIDAgMCAxLTMuMTM3LjUyNSAxLjk1IDEuOTUgMCAwIDEtMS42NzUtMi4wNjNjLjEyNS0xLjAzNy45ODctMS4zODcgMS44NzUtMS41NS0yLjAyNS0xLjg4Ny43NzUtMy42ODcgMi41LTIuMDEyIDEuMDI1IDEuMDEyIDEuNjM3IDIuOTEyIDIuOTEyIDMuNDI1IDEuNjEzLjY1IDMuMzc1Ljg4NyA1IDEuNjM3LS45MzctMS4yNS0xLjg1LTIuNS0yLjcyNS0zLjc1YTYuODc1IDYuODc1IDAgMCAwLTIuNzc1LTIuOTc1Yy0xLjQ4Ny0uNjc1LTMuNDUtMS40ODctMy43NS0zLjM1LS4zNS0yLjI4NyAyLjIzOC0xLjkgMy40NS0uOTVhMi4xNjMgMi4xNjMgMCAwIDEgMS40LTIuNWMxLjI1LS40ODcgMi4wMTMuNDYzIDIuMTc1IDEuNjc1LjAyNSAxLjQzOC0uNiAyLjgyNS0uODI1IDQuMzI1LS4yNjIgMi4yMTMgMi4xNSA0Ljg3NSAzLjM2MyA2LjYgMC0xLjg1LjctNC4wNjItLjI2My01Ljc4Ny0uNjI1LTEuNDI1LTIuNjEyLTMuODI1LTEuMjUtNS40MjUgMS0xLjEzOCAyLjIzOC4xMjUgMi41NzUgMS4xNWExLjQ2MiAxLjQ2MiAwIDAgMSAyLjUtLjI2M2MxLjI1IDEuNzI1LS43NSAzLjIzOC0xLjY2MiA0LjUxMy0xLjEgMS41MTItLjkgMi45NS0xLjAzOCA0LjczN2E2LjU5NyA2LjU5NyAwIDAgMC0uMTYyIDIuMDI1Yy4xMzcuNDEzLjgxMi44ODggMS4xMTIgMS4yNWEyNi45MyAyNi45MyAwIDAgMCAyLjU2MyAyLjM2M2MtLjEtMi4xLjIxMi00LjI3NS0uNTEzLTYuMjUtLjQyNS0xLjE1LTEuNC0zLjE1LS41LTQuMjg4LjktMS4xMzcgMS45LS4xMzcgMi4yNS44MTNhMi4wMjUgMi4wMjUgMCAwIDEgMi41LS42NSAxLjk1IDEuOTUgMCAwIDEgLjQyNSAyLjVjLS44NSAxLjgxMi0zLjI4NyAyLjc2Mi0zLjI4NyA0LjgyNS0uMTI1Ljk1LS4wNjMgMS45ODctLjEgMi45NWEyLjAyMyAyLjAyMyAwIDAgMCAwIC42NzVjLjEzNy4yNzUuODYyLjYxMiAxLjExMi43NzVhMzUuMzc3IDM1LjM3NyAwIDAgMCA1IDIuNjM3Yy0uMjg3LTEuMjUtLjMxMi0yLjQxMi0uNTEyLTMuNzVhNS4zMzggNS4zMzggMCAwIDAtMS4zODgtMi44MTJjLS43MzctLjk4OC0xLjUtMi42NS0uMzg3LTMuNjg4Ljg3NS0uODI1IDIuMDI1LS4wNjIgMi4zNS44ODggMS4wNS0xLjYgMy42NjItMS40MzggMy43NS43MzcuMDg3IDEuNjUtMS4zNSAyLjcyNS0yLjUgMy42MjUtLjIzMy4xNS0uNDE5LjM2My0uNTM4LjYxM2EzLjAzMyAzLjAzMyAwIDAgMC0uMTg3LjcyNWMtLjA1Ny44MzYtLjAxMSAxLjY3NS4xMzcgMi41IDAgLjUxMiAwIDEuMjUuNDEzIDEuNTEyLjUyMi4yOCAxLjA4Mi40ODIgMS42NjIuNmEyMC4xMyAyMC4xMyAwIDAgMCA0LjE4OCAxLjAzOCA2LjA3NSA2LjA3NSAwIDAgMS0yLjE4OC00LjIgOS4xIDkuMSAwIDAgMSAuOC00LjUxM2MuODI1IDEuMjUgMi4wMTMgMi4zNSAyLjc2MyAzLjY3NWE1Ljc2MyA1Ljc2MyAwIDAgMSAuMSA1LjI1Yy4xNjYuMDEzLjMzMy4wMTMuNSAwWidcbiAgICAgICAgICBmaWxsPScjREZBRTAwJ1xuICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9J00xOS41NSAxNS43ODdzMy4yNzUtMi44NSAyLjUtMy42MzdjLS43NzUtLjc4OC0yLjExMi45MTItMi4xMTIuOTEycy0uNjM4LTEuODUtMS40NjMtMS4yNWMtLjgyNS42IDEuMDc1IDMuOTc1IDEuMDc1IDMuOTc1Wk0xNS4xODggMTAuNzg4czIuOTc1LTIuOTEzIDEuOTYyLTMuNDc1Yy0xLjAxMi0uNTYzLTEuNzUgMS4yNS0xLjc1IDEuMjVzLS45NzUtMi41LTEuNzg3LTEuNzg4Yy0uODEzLjcxMyAxLjU3NSA0LjAxMyAxLjU3NSA0LjAxM1pNOS42NjIgMTAuNDM3czEuOTYzLTQuNTg3LjQ4OC00LjgzNy0xLjQgMi42LTEuNCAyLjYtMi45MTMtMS45NS0zLjExMy0uN2MtLjIzNyAxLjUyNSA0LjAyNSAyLjkzNyA0LjAyNSAyLjkzN1pNNy4zIDE2LjUxM3MtMS44LTMuNjI1LTIuOS0zLjJjLTEuMS40MjUuNDI1IDIuMS40MjUgMi4xcy0yLjA4OC4yNzUtMS45NjMgMS41MTJjLjEyNSAxLjIzOCA0LjQzOC0uNDEyIDQuNDM4LS40MTJaTTExLjY2MiAyMi41NzVTOC4zNSAxOS42NjMgNy41IDIwLjQyNWMtLjg1Ljc2MyAyLjA2MiAyLjA3NSAyLjA2MiAyLjA3NXMtMy4xIDEuNDc1LTIuMDYyIDIuMmMxLjI1Ljg4OCA0LjE2Mi0yLjEyNSA0LjE2Mi0yLjEyNVpNMTguNTg4IDI3LjM3NXMtNC42MzgtMi42MzgtNS4zNjMtMS41ODhjLS43MjUgMS4wNSAyLjc2MyAxLjgyNSAyLjc2MyAxLjgyNXMtMi44MjUgMS45MzgtMS41MTMgMi42MzhjMS4zMTMuNyA0LjExMy0yLjg3NSA0LjExMy0yLjg3NVpNMjUuODUgMjBzMy43NS0yLjUgMi4yODctMy41MTJjLTEuMTEyLS43NjMtMi41IDEuMDg3LTIuNSAxLjA4N3MtLjgxMi0yLjEtMS43MTItMS40Yy0uOS43IDEuOTI1IDMuODI1IDEuOTI1IDMuODI1Wk0yMy45NjMgMzAuMTc1cy0uNDM4IDIuODUtMS4yNSAzLjE1Yy0uODEzLjMtLjIxMy0yLjA3NS0uMjEzLTIuMDc1cy0yLjAyNS45MjUtMS45MjUgMGMuMS0uOTI1IDMuMzg4LTEuMDc1IDMuMzg4LTEuMDc1WidcbiAgICAgICAgICBmaWxsPScjRjdENDdEJ1xuICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9J00zMy4yODcgMjYuOTVhNC44ODcgNC44ODcgMCAwIDAgLjEyNS0zLjM1IDYuMzYyIDYuMzYyIDAgMCAwLTEuODg3LTMuMDVjLTEuMDYzIDQuNTM3IDEuNzYyIDYuNCAxLjc2MiA2LjRaTTMyLjc1IDI5LjE1Yy0uNjIyLjgwNC0xLjM2IDEuNTExLTIuMTg4IDIuMS0uODc0LjU1NS0xLjgyNi45NzYtMi44MjUgMS4yNWE2LjcxMyA2LjcxMyAwIDAgMSAyLjExMy0yLjEzNyAxMS41ODggMTEuNTg4IDAgMCAxIDIuOS0xLjIxM1onXG4gICAgICAgICAgZmlsbD0nI0RDQjNCNCdcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZUNvbmZpZyA9IChhcHBDb25maWcsIGxvY2FsZSkgPT4ge1xuICBpZiAoIWxvY2FsZSB8fCBsb2NhbGUgPT09IGRlZmF1bHRMb2NhbGUpIHtcbiAgICByZXR1cm4gYXBwQ29uZmlnO1xuICB9XG4gIC8vIFJlcGxhY2UgY29uZmlnIHdpdGggbGFuZ1xuICBjb25zdCBjb25maWdMYW5nID0gYXBwQ29uZmlnLmxhbmdbbG9jYWxlXTtcbiAgaWYgKGNvbmZpZ0xhbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBsb2NhbGU6ICcsIGxvY2FsZSk7XG4gIH1cbiAgcmV0dXJuIHsgLi4uYXBwQ29uZmlnLCAuLi5jb25maWdMYW5nIH07XG59O1xuXG5jb25zdCBTaG93SW52aXRlID0gKHsgY3VycmVudFVybCwgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCwgZ3Vlc3QgfSkgPT4ge1xuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb24oZ3Vlc3QubG9jYWxlKTtcblxuICAvLyBJbml0aWF0ZSBjb25maWcgdmFyaWFibGVzXG4gIGNvbnN0IHtcbiAgICBsb2dvLFxuICAgIG9nVGFncyxcbiAgICBjb3VwbGVJbmZvLFxuICAgIHZlbnVlLFxuICAgIHdlZGRpbmdEYXksXG4gICAgd2VkZGluZ0RhdGUsXG4gICAgd2VkZGluZ1RpbWUsXG4gICAgY2FsZW5kYXJJbmZvLFxuICB9ID0gdHJhbnNsYXRlQ29uZmlnKGFwcENvbmZpZywgZ3Vlc3QubG9jYWxlKTtcbiAgY29uc3QgeyBicmlkZU5hbWUsIGdyb29tTmFtZSwgaGFzaHRhZywgY291cGxlTmFtZUZvcm1hdCB9ID0gY291cGxlSW5mbztcblxuICBjb25zdCBjb3VwbGVOYW1lU3RyID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnXG4gICAgICA/IGAke2dyb29tTmFtZX0gJiAke2JyaWRlTmFtZX1gXG4gICAgICA6IGAke2JyaWRlTmFtZX0gJiAke2dyb29tTmFtZX1gO1xuICBjb25zdCBjb3VwbGVOYW1lID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnID8gKFxuICAgICAgPD5cbiAgICAgICAge2dyb29tTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHticmlkZU5hbWV9XG4gICAgICA8Lz5cbiAgICApIDogKFxuICAgICAgPD5cbiAgICAgICAge2JyaWRlTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHtncm9vbU5hbWV9XG4gICAgICA8Lz5cbiAgICApO1xuXG4gIC8vIFZlbnVlIGluZm9cbiAgY29uc3QgdmVudWVCcmllZiA9IGAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9LCAke3ZlbnVlLmNvdW50cnl9YDtcbiAgY29uc3Qgd2VkZGluZ0RhdGVCcmllZiA9IGAke3dlZGRpbmdEYXl9LCAke3dlZGRpbmdEYXRlfWA7XG5cbiAgLy8gRXZlbnQgaW5mb1xuICBjb25zdCBldmVudFRpdGxlID0gYCR7Y291cGxlTmFtZVN0cn0ncyBXZWRkaW5nYDtcbiAgbGV0IGV2ZW50RGVzY3JpcHRpb24gPSBgJHt3ZWRkaW5nRGF0ZUJyaWVmfSBhdCAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9YDtcbiAgaWYgKGd1ZXN0Lm5hbWUpIHtcbiAgICBldmVudERlc2NyaXB0aW9uID0gYERlYXIgJHtndWVzdC5uYW1lfSwgeW91IGFyZSBjb3JkaWFsbHkgaW52aXRlZCB0byBvdXIgd2VkZGluZyBvbiAke3dlZGRpbmdEYXRlfSBhdCAke3ZlbnVlLm5hbWV9LiBMb29raW5nIGZvcndhcmQgdG8gc2VlaW5nIHlvdSFgO1xuICB9XG5cbiAgLy8gQ2FsZW5kYXIgcGF5bG9hZFxuICBjb25zdCBjYWxlbmRhckV2ZW50ID0ge1xuICAgIHRpdGxlOiBldmVudFRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBldmVudERlc2NyaXB0aW9uLFxuICAgIGxvY2F0aW9uOiBgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWAsXG4gICAgc3RhcnRUaW1lOiBjYWxlbmRhckluZm8udGltZVN0YXJ0SVNPLFxuICAgIGVuZFRpbWU6IGNhbGVuZGFySW5mby50aW1lRW5kSVNPLFxuICB9O1xuXG4gIGNvbnN0IGV2ZW50U2NoZWR1bGUgPSBbXG4gICAge1xuICAgICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgICBldmVudDogJ0NodXJjaCcsXG4gICAgICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAgIHRpbWU6ICcxMnBtJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgICAgZXZlbnQ6ICdSZWNlcHRpb24nLFxuICAgICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgICB0aW1lOiAnMnBtJyxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgIC8vICAgZXZlbnQ6ICdFbmdhZ2VtZW50JyxcbiAgICAvLyAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgIC8vICAgdGltZTogJzJwbScsXG4gICAgLy8gfSxcbiAgXTtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dNb2RhbCh0cnVlKTtcbiAgICB9LCAxMDAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudFJlZi5jdXJyZW50O1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICBpZiAoZWxlbWVudFBvc2l0aW9uIDwgd2luZG93SGVpZ2h0ICogMC45KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC1lbGVtZW50Jyk7IC8vIEFkZCB0aGUgQ1NTIGNsYXNzIHdoZW4gdGhlIGVsZW1lbnQgaXMgNzUlIHZpc2libGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkLWVsZW1lbnQnKTsgLy8gUmVtb3ZlIHRoZSBDU1MgY2xhc3MgaWYgbm90IHZpc2libGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIFJ1biB0aGlzIGVmZmVjdCBvbmx5IG9uY2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBhLnJlYWN0LWFkZC10by1jYWxlbmRhcl9fYnV0dG9uIHNwYW4ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkXG4gICAgICAgIHsuLi5vZ1RhZ3N9XG4gICAgICAgIHRpdGxlPXtldmVudFRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZXZlbnREZXNjcmlwdGlvbn1cbiAgICAgICAgZ3Vlc3ROYW1lPXtndWVzdC5uYW1lfVxuICAgICAgICB1cmw9e2N1cnJlbnRVcmx9XG4gICAgICAgIGRhdGU9e3dlZGRpbmdEYXRlQnJpZWZ9XG4gICAgICAgIG1vZGlmaWVkVGltZT17Z3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdH1cbiAgICAgICAgdmVudWU9e3ZlbnVlQnJpZWZ9XG4gICAgICAgIGxvZ289e3Jlc29sdmVQYXRoKG9nVGFncy5sb2dvKX1cbiAgICAgICAgYXV0aG9yPXtyZXNvbHZlUGF0aCgnLycpfVxuICAgICAgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naGVhZGVyX2FyZWEnPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgPEhlYWRlckxvZ28gLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlYWRlci1sb2dvLXRleHQnPlRoZSBBa2lubGFndW4ncyBQYXJ0eTwvc3Bhbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgaWQ9J2hvbWUnIGNsYXNzTmFtZT0naGVhZGVyX3NsaWRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLWxpc3QgZHJhZ2dhYmxlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay10cmFjaycgc3R5bGU9e3sgb3BhY2l0eTogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnX2NvdmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy0xMCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfY29udGVudCB0ZXh0LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogNjAsIG1hcmdpbjogMjUsIG1hcmdpblRvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9zdWJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC4ycydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnc2l0ZUludHJvJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjdzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291cGxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc2h0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLm5hbWV9LCB7dmVudWUuY2l0eX0sIHt2ZW51ZS5jb3VudHJ5fS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGlkPSdjb21pbmdfc29vbicgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9hcmVhIHB0LTIwIHBiLTcwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX3NoYXBlXzEnIHN0eWxlPXt7IHpJbmRleDogMSB9fT5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMS5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTQnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHB0LTUwIHdvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuMnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dCgnZXZlbnREYXRlJyl9OjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3dlZGRpbmdEYXRlQnJpZWZ9PC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QWRkVG9DYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICBldmVudD17Y2FsZW5kYXJFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9e3QoJ2J0bkFkZFRvTXlDYWxlbmRhcicpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy9zZWN0aW9uX3NoYXBlLnBuZycgYWx0PSdTaGFwZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9jb3VudCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC0yMCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNjAsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZV9jb3VudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMzAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvdW50X2NvbnRlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxLCBwYWRkaW5nVG9wOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmVudWUubWFwVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy9iZXZlbnQucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2JldmVudCBjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc3NXZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUuYWRkcmVzc0xpbmUxfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8yJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMi5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiByZWY9e2VsZW1lbnRSZWZ9IGlkPSdjb250YWN0JyBjbGFzc05hbWU9J2NvbnRhY3RfYXJlYSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY29udGFjdF93cmFwcGVyIHdvdyBmYWRlSW5VcEJpZydcbiAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjRzJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJblVwJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1ldmVudExpbmV1cCc+XG4gICAgICAgICAgICAgIHtldmVudFNjaGVkdWxlLm1hcCgoZXYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0aW1lLCBkYXRlLCBldmVudCwgaWNvbiB9ID0gZXY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudExpbmV1cCcga2V5PXtldmVudH0+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtldmVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3RpbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogZm9ybSAqL31cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy05Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSB0ZXh0LWNlbnRlciBwYi0zMCc+XG4gICAgICAgICAgICAgICAgICB7Z3Vlc3QubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dCgnaW52aXRhdGlvbkdyZWV0aW5nJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjVyZW0nIH19PntndWVzdC5uYW1lfSw8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgY2xhc3NOYW1lPSdsb3ZlLXRpdGxlLWNvbnRhaW5lciBmYWRlSW5VcEJpZyBmYWRlSW4nXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPGRpdiByZWY9e2VsZW1lbnRSZWZ9PlxuICAgICAgICAgIDxMb3ZlVGl0bGVJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudFJlZn0gY2xhc3NOYW1lPSdsb3ZlLXRpdGxlJz5cbiAgICAgICAgICBNeSBoZWFydCBpcyB5b3VyIHRvIGhvbGQgYW5kIGNoZXJpc2ggZm9yIHRoZSByZXN0IG9mIG91ciBkYXlzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxhcnRpY2xlXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J3N0b3JpZXMtY29udGFpbmVyIGZhZGVJblVwQmlnJ1xuICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICA+XG4gICAgICAgIDxTdG9yaWVzIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZC1jb250YWluZXInPlxuICAgICAgICA8UGljdHVyZXNHcmlkIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgJz5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDVcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6ICcjRDNEM0QzJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgI0RXZWRkaW5nXG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaG93SW52aXRlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcbiAgY29uc3QgbG9jYWxlUGFyYW1zID0gY3R4LnF1ZXJ5LmxhbmcgfHwgZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgZW1wdHlHdWVzdFBhcmFtcyA9IHtcbiAgICBndWVzdDoge1xuICAgICAgZ3Vlc3RJZDogJycsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGdyZWV0aW5nOiAnJyxcbiAgICAgIGxvY2FsZTogbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgY3VycmVudFVybCA9IHJlc29sdmVQYXRoKGN0eC5yZXEudXJsKTtcbiAgY29uc3QgZ3Vlc3RJZCA9IGN0eC5xdWVyeS51O1xuICBpZiAoIWd1ZXN0SWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGd1ZXN0RGF0YSA9IGd1ZXN0TGlzdC5kYXRhO1xuICBjb25zdCBndWVzdExpc3RMYXN0VXBkYXRlZEF0ID0gZ3Vlc3RMaXN0Lm1ldGEubGFzdFVwZGF0ZWRBdDtcbiAgY29uc3QgeyBuYW1lLCBncmVldGluZywgbG9jYWxlIH0gPVxuICAgIGd1ZXN0RGF0YS5maWx0ZXIoKGd1ZXN0KSA9PiBndWVzdC5ndWVzdElkID09PSBndWVzdElkKVswXSB8fCB7fTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVcmwsXG4gICAgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCxcbiAgICBndWVzdDoge1xuICAgICAgbmFtZSxcbiAgICAgIGdyZWV0aW5nLFxuICAgICAgZ3Vlc3RJZCxcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0ludml0ZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJsdXJoYXNoIH0gZnJvbSAncmVhY3QtYmx1cmhhc2gnO1xyXG5jb25zdCBQaWN0dXJlc0dyaWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGljdHVyZXMgPSBbXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9waWMgKDIpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9waWMgKDMpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9waWMgKDEpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9waWMgKDQpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9waWMgKDUpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9waWMgKDYpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9waWMgKDcpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9waWMgKDgpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9waWMgKDkpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9waWMgKDEwKS5qcGcnLFxyXG4gICAgJ2Fzc2V0cy9pbWFnZXMvcGljICgxMSkuanBnJyxcclxuICAgICdhc3NldHMvaW1hZ2VzL3BpYyAoMTIpLmpwZycsXHJcbiAgICAnYXNzZXRzL2ltYWdlcy9waWMgKDEzKS5qcGcnLFxyXG4gIF07XHJcbiAgY29uc3QgW3NlbGVjdGVkUGljdHVyZSwgc2V0U2VsZWN0ZWRQaWN0dXJlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkZWRJbWFnZXNDb3VudCwgc2V0TG9hZGVkSW1hZ2VzQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0UGljdHVyZSA9IChwaWN0dXJlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFBpY3R1cmUocGljdHVyZSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZEltYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBwaWN0dXJlIG9mIHBpY3R1cmVzKSB7XHJcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgIHNldExvYWRlZEltYWdlc0NvdW50KChwcmV2Q291bnQpID0+IHByZXZDb3VudCArIDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMzkwNzE1NjMwNV8wYCxpbWcsICdpbWFnZWUnKSk7XHJcbiAgICAgICAgaW1nLnNyYyA9IHBpY3R1cmU7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IChpbWcub25sb2FkID0gcmVzb2x2ZSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzZXRJbWFnZUxvYWRlZCh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZEltYWdlcygpO1xyXG5cclxuICAgIGlmIChsb2FkZWRJbWFnZXNDb3VudCA9PT0gcGljdHVyZXMubGVuZ3RoKSB7XHJcbiAgICAgIHNldEltYWdlTG9hZGVkKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtwaWN0dXJlcywgbG9hZGVkSW1hZ2VzQ291bnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwaWN0dXJlLWdyaWQnPlxyXG4gICAgICAgIHtwaWN0dXJlcy5tYXAoKHBpY3R1cmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgdGl0bGU9J3ZpZXcgaW1hZ2UnXHJcbiAgICAgICAgICAgICAgZGF0YS10b2dnbGU9J21vZGFsJ1xyXG4gICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PScjbXlNb2RhbCdcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3RQaWN0dXJlKHBpY3R1cmUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGljdHVyZSdcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogaW1hZ2VMb2FkZWQgPyAnbm9uZScgOiAnaW5saW5lJyB9fT5cclxuICAgICAgICAgICAgICAgIDxCbHVyaGFzaFxyXG4gICAgICAgICAgICAgICAgICBoYXNoPSdMa095ZVZFMFIqV0M/d1dBalpvZk17czpSam9NJ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dyaWQtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17JzEwMCUnfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9eyczMDBweCd9XHJcbiAgICAgICAgICAgICAgICAgIHJlc29sdXRpb25YPXszMn1cclxuICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvblk9ezMyfVxyXG4gICAgICAgICAgICAgICAgICBwdW5jaD17MX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICFpbWFnZUxvYWRlZCA/ICdub25lJyA6ICdpbmxpbmUnIH19PiAqL31cclxuICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdncmlkLWltZydcclxuICAgICAgICAgICAgICAgIGVmZmVjdD0nYmx1cidcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2BQaWN0dXJlICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtzZWxlY3RlZFBpY3R1cmUgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwgZmFkZScgaWQ9J215TW9kYWwnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtZGlhbG9nJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRQaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD0nc2VsZWN0ZWQgcGljdHVyZSdcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpY3R1cmVzR3JpZDtcclxuLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO2Z1bmN0aW9uIF8weDM5MWQoKXt2YXIgXzB4MmQ4YTk4PVsnbWVzc2FnZScsJ3Rlc3QnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywnNmhvQkhKeCcsJ2Z1bmN0aW9uJywnX2FsbG93ZWRUb1NlbmQnLCcxNVptTFZMbCcsJ19pc1VuZGVmaW5lZCcsJycsJ2VudicsJ2VsYXBzZWQnLCdQT1NJVElWRV9JTkZJTklUWScsJzEuMC4wJywnZGF0ZScsJ19jb25zb2xlX25pbmphJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCdub2RlTW9kdWxlcycsJ19hZGRQcm9wZXJ0eScsJ19ibGFja2xpc3RlZFByb3BlcnR5JywnY29uc29sZScsJ2lzQXJyYXknLCdhcnJheScsJzEzMTI3NjZmRkxMQUQnLCdyb290X2V4cCcsJ2NhbGwnLCdyb290X2V4cF9pZCcsJ2NvdW50JywnU3RyaW5nJywnd2FybicsJycsJ2FsbFN0ckxlbmd0aCcsJzIwQXVNWHdYJywnbmFtZScsJ2xldmVsJywnX2FkZE9iamVjdFByb3BlcnR5JywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnMTk3ODRSWldLR2QnLCdzdGFja1RyYWNlTGltaXQnLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdNYXAnLCczOTE1ekRjV3pYJywnaGl0cycsJ2Rpc2FibGVkVHJhY2UnLCdsb2NhdGlvbicsJ3N1YnN0cicsJ3Vua25vd24nLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ19pc1ByaW1pdGl2ZVR5cGUnLCdtZXRob2QnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnX2luTmV4dEVkZ2UnLCd1bnNoaWZ0Jywnc3RyaW5naWZ5JywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCdfYWRkRnVuY3Rpb25zTm9kZScsJ3ZlcnNpb25zJywnX3JlY29ubmVjdFRpbWVvdXQnLCdfZGF0ZVRvU3RyaW5nJywncmVtaXgnLCcxMjMyMjk3c21Jd01tJywnaG9zdG5hbWUnLCdkaXNhYmxlZExvZycsJ3BlcmZfaG9va3MnLCdjYXBwZWQnLCdbb2JqZWN0XFxcXHgyMERhdGVdJywnMTQyNTNoRHBJbm0nLCd0aGVuJywnZGVwdGgnLCdoYXNPd25Qcm9wZXJ0eScsJ25vRnVuY3Rpb25zJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdORVhUX1JVTlRJTUUnLCdfcF8nLCdtYXRjaCcsJ3JlcGxhY2UnLCdnZXRXZWJTb2NrZXRDbGFzcycsJ2pvaW4nLCdlZGdlJywncHVzaCcsJ251bWJlcicsJ190eXBlJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdwcm9jZXNzJywnZXJyb3InLCdfcF9sZW5ndGgnLCdkb2NrZXJpemVkQXBwJywnc3RyaW5nJywnc3BsaXQnLCdfc2V0Tm9kZUlkJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ3RpbWVFbmQnLCdfaXNNYXAnLCdyZWR1Y2VMaW1pdHMnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ2Z1bmNOYW1lJywnY2F0Y2gnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdub3cnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJzQzMk1oSE5GTycsJ19jb25uZWN0ZWQnLCd0b1N0cmluZycsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdkYXRhJywnaHJ0aW1lJywnZW51bWVyYWJsZScsJ2FzdHJvJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ19pbkJyb3dzZXInLCd0b3RhbFN0ckxlbmd0aCcsJ3RyYWNlJywnTkVHQVRJVkVfSU5GSU5JVFknLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywnbnVsbCcsJ251eHQnLCdfaGFzTWFwT25JdHNQYXRoJywnXFxcXHgyMHNlcnZlcicsJ3BvcnQnLCdsZW5ndGgnLCdfV2ViU29ja2V0Q2xhc3MnLCdwYXJlbnQnLCduZWdhdGl2ZVplcm8nLCdlbGVtZW50cycsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ2dsb2JhbCcsJ2NhcHBlZEVsZW1lbnRzJywnYXV0b0V4cGFuZE1heERlcHRoJywnSFRNTEFsbENvbGxlY3Rpb24nLCdTeW1ib2wnLCdwYXRoJywnYm9vbGVhbicsJ1NldCcsJ3RpbWVTdGFtcCcsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ19wX25hbWUnLCdfU3ltYm9sJywnX2tleVN0clJlZ0V4cCcsJ19kaXNwb3NlV2Vic29ja2V0JywnZ2V0dGVyJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ3N5bWJvbCcsJ19vYmplY3RUb1N0cmluZycsJ19zb3J0UHJvcHMnLCdyb290RXhwcmVzc2lvbicsJ3dlYnBhY2snLCdzb3J0JywnTnVtYmVyJywnOmxvZ1BvaW50SWQ6JywnODM3NjM2MG5URmZDbycsJ3ZhbHVlJywncHJvdG90eXBlJywnX3Byb3BlcnR5JywnYXV0b0V4cGFuZCcsJ29iamVjdCcsJ19pc1NldCcsJ3N0ckxlbmd0aCcsJ19zb2NrZXQnLCdjb3ZlcmFnZScsJ19zZXROb2RlUXVlcnlQYXRoJywnd3M6Ly8nLCdfaGFzU2V0T25JdHNQYXRoJywnYmlnaW50JywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywncmVzb2x2ZUdldHRlcnMnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCd0b0xvd2VyQ2FzZScsJ3VucmVmJywndHlwZScsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnX3NlbmRFcnJvck1lc3NhZ2UnLCc1Mzg4NlJCQkVmVycsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnX3Byb3BlcnR5TmFtZScsJ2Nsb3NlJywndW5kZWZpbmVkJywncG9zaXRpdmVJbmZpbml0eScsJ25hbicsJ19hZGRMb2FkTm9kZScsJ0Jvb2xlYW4nLCdwcm9wcycsJ25leHQuanMnLCdvbm9wZW4nLCdsb2cnLCdfY29ubmVjdFRvSG9zdE5vdycsJ3JlbG9hZCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ3RpbWUnLCdnZXQnLCdjb25zdHJ1Y3RvcicsJ19zZXROb2RlTGFiZWwnLCdpbmRleCcsJ1tvYmplY3RcXFxceDIwTWFwXScsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJEYW1pbGFyZVxcXCIsXFxcIjE2OS4yNTQuODAuODBcXFwiLFxcXCIxNzIuMzEuMTEyLjFcXFwiXSwnb25tZXNzYWdlJywnZm9yRWFjaCcsJ25vZGUnLCdnZXRQcm90b3R5cGVPZicsJ0J1ZmZlcicsJzQ0MzEwNDBDUUhFc28nLCdcXFxceDIwYnJvd3NlcicsJ19yZWdFeHBUb1N0cmluZycsJ2luY2x1ZGVzJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ2RlZmF1bHQnLCdzZXJpYWxpemUnLCc2MDk5MicsJ19fZXMnKydNb2R1bGUnLCdwZXJmb3JtYW5jZScsJ2JpbmQnLCdyZWFkeVN0YXRlJywnX2Nvbm5lY3RpbmcnLCdfbnVtYmVyUmVnRXhwJywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ19pc0FycmF5Jywnb25lcnJvcicsJ2hvc3QnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCdfd3MnLCcxNjk4MzYxODU2MjM5Jywnc2VuZCcsJ2NvbmNhdCcsJ2dhdGV3YXkuZG9ja2VyLmludGVybmFsJywnY3VycmVudCcsJ29uY2xvc2UnLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnMTI3LjAuMC4xJywnYXV0b0V4cGFuZExpbWl0JywnRXJyb3InLCdfY2FwSWZTdHJpbmcnLCdzb3J0UHJvcHMnLCdfdW5kZWZpbmVkJ107XzB4MzkxZD1mdW5jdGlvbigpe3JldHVybiBfMHgyZDhhOTg7fTtyZXR1cm4gXzB4MzkxZCgpO312YXIgXzB4MzBkNDZjPV8weDM5NGI7ZnVuY3Rpb24gXzB4Mzk0YihfMHgxMjJmMzIsXzB4NTY5ZjI4KXt2YXIgXzB4MzkxZGYzPV8weDM5MWQoKTtyZXR1cm4gXzB4Mzk0Yj1mdW5jdGlvbihfMHgzOTRiMzUsXzB4MmZiZTE2KXtfMHgzOTRiMzU9XzB4Mzk0YjM1LTB4Y2M7dmFyIF8weDExMTg5MD1fMHgzOTFkZjNbXzB4Mzk0YjM1XTtyZXR1cm4gXzB4MTExODkwO30sXzB4Mzk0YihfMHgxMjJmMzIsXzB4NTY5ZjI4KTt9KGZ1bmN0aW9uKF8weDFkM2U1MyxfMHgxZjI0ZTUpe3ZhciBfMHg0MzBjNmM9XzB4Mzk0YixfMHg0NTk1ZWM9XzB4MWQzZTUzKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg1NTA2YmY9cGFyc2VJbnQoXzB4NDMwYzZjKDB4ZWMpKS8weDEqKC1wYXJzZUludChfMHg0MzBjNmMoMHgxOTQpKS8weDIpKy1wYXJzZUludChfMHg0MzBjNmMoMHgxMjcpKS8weDMqKHBhcnNlSW50KF8weDQzMGM2YygweDEwNSkpLzB4NCkrLXBhcnNlSW50KF8weDQzMGM2YygweDFiMCkpLzB4NSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4ZTkpKS8weDYqKHBhcnNlSW50KF8weDQzMGM2YygweGZjKSkvMHg3KSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTBhKSkvMHg4KihwYXJzZUludChfMHg0MzBjNmMoMHgxMGUpKS8weDkpKy1wYXJzZUludChfMHg0MzBjNmMoMHgxN2UpKS8weGErLXBhcnNlSW50KF8weDQzMGM2YygweDEyMSkpLzB4YiooLXBhcnNlSW50KF8weDQzMGM2YygweDE0YikpLzB4Yyk7aWYoXzB4NTUwNmJmPT09XzB4MWYyNGU1KWJyZWFrO2Vsc2UgXzB4NDU5NWVjWydwdXNoJ10oXzB4NDU5NWVjWydzaGlmdCddKCkpO31jYXRjaChfMHgxMDNiNGEpe18weDQ1OTVlY1sncHVzaCddKF8weDQ1OTVlY1snc2hpZnQnXSgpKTt9fX0oXzB4MzkxZCwweDk2ZGNmKSk7dmFyIGo9T2JqZWN0WydjcmVhdGUnXSxIPU9iamVjdFsnZGVmaW5lUHJvcGVydHknXSxHPU9iamVjdFtfMHgzMGQ0NmMoMHgxNmUpXSxlZT1PYmplY3RbJ2dldE93blByb3BlcnR5TmFtZXMnXSx0ZT1PYmplY3RbXzB4MzBkNDZjKDB4MWFlKV0sbmU9T2JqZWN0Wydwcm90b3R5cGUnXVtfMHgzMGQ0NmMoMHgxMmEpXSxyZT0oXzB4MWQ1ZmM2LF8weDc0NzgxZCxfMHg4ZjAzY2QsXzB4NDlmZjRmKT0+e3ZhciBfMHgxODBkY2Q9XzB4MzBkNDZjO2lmKF8weDc0NzgxZCYmdHlwZW9mIF8weDc0NzgxZD09XzB4MTgwZGNkKDB4MTgzKXx8dHlwZW9mIF8weDc0NzgxZD09XzB4MTgwZGNkKDB4ZWEpKXtmb3IobGV0IF8weDE2Y2Q5NSBvZiBlZShfMHg3NDc4MWQpKSFuZVsnY2FsbCddKF8weDFkNWZjNixfMHgxNmNkOTUpJiZfMHgxNmNkOTUhPT1fMHg4ZjAzY2QmJkgoXzB4MWQ1ZmM2LF8weDE2Y2Q5NSx7J2dldCc6KCk9Pl8weDc0NzgxZFtfMHgxNmNkOTVdLCdlbnVtZXJhYmxlJzohKF8weDQ5ZmY0Zj1HKF8weDc0NzgxZCxfMHgxNmNkOTUpKXx8XzB4NDlmZjRmW18weDE4MGRjZCgweDE1MSldfSk7fXJldHVybiBfMHgxZDVmYzY7fSx4PShfMHg1NjhiYzgsXzB4MmRlMWQ0LF8weDViNGM0Zik9PihfMHg1YjRjNGY9XzB4NTY4YmM4IT1udWxsP2oodGUoXzB4NTY4YmM4KSk6e30scmUoXzB4MmRlMWQ0fHwhXzB4NTY4YmM4fHwhXzB4NTY4YmM4W18weDMwZDQ2YygweGNkKV0/SChfMHg1YjRjNGYsXzB4MzBkNDZjKDB4MWI1KSx7J3ZhbHVlJzpfMHg1NjhiYzgsJ2VudW1lcmFibGUnOiEweDB9KTpfMHg1YjRjNGYsXzB4NTY4YmM4KSksWD1jbGFzc3tjb25zdHJ1Y3RvcihfMHg0N2YzOGMsXzB4NWMxYjA2LF8weDNmMjg1NixfMHg0NTdkM2QsXzB4MThmZjY0KXt2YXIgXzB4NGJiNjFkPV8weDMwZDQ2Yzt0aGlzW18weDRiYjYxZCgweDE2NSldPV8weDQ3ZjM4Yyx0aGlzW18weDRiYjYxZCgweGQ2KV09XzB4NWMxYjA2LHRoaXNbXzB4NGJiNjFkKDB4MTVkKV09XzB4M2YyODU2LHRoaXNbXzB4NGJiNjFkKDB4ZjYpXT1fMHg0NTdkM2QsdGhpc1snZG9ja2VyaXplZEFwcCddPV8weDE4ZmY2NCx0aGlzW18weDRiYjYxZCgweGViKV09ITB4MCx0aGlzW18weDRiYjYxZCgweDEzNyldPSEweDAsdGhpc1tfMHg0YmI2MWQoMHgxNGMpXT0hMHgxLHRoaXNbXzB4NGJiNjFkKDB4ZDEpXT0hMHgxLHRoaXNbJ19pbk5leHRFZGdlJ109XzB4NDdmMzhjW18weDRiYjYxZCgweDEzOCldPy5bXzB4NGJiNjFkKDB4ZWYpXT8uW18weDRiYjYxZCgweDEyZCldPT09J2VkZ2UnLHRoaXNbXzB4NGJiNjFkKDB4MTU0KV09IXRoaXNbXzB4NGJiNjFkKDB4MTY1KV1bXzB4NGJiNjFkKDB4MTM4KV0/LltfMHg0YmI2MWQoMHgxMWQpXT8uW18weDRiYjYxZCgweDFhZCldJiYhdGhpc1tfMHg0YmI2MWQoMHgxMTgpXSx0aGlzWydfV2ViU29ja2V0Q2xhc3MnXT1udWxsLHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J109MHgwLHRoaXNbXzB4NGJiNjFkKDB4MTQ1KV09MHgxNCx0aGlzW18weDRiYjYxZCgweDE3NCldPSdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0Jyx0aGlzW18weDRiYjYxZCgweDE5MyldPSh0aGlzW18weDRiYjYxZCgweDE1NCldP18weDRiYjYxZCgweDE0YSk6J0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJykrdGhpc1tfMHg0YmI2MWQoMHgxNzQpXTt9YXN5bmNbXzB4MzBkNDZjKDB4MTMxKV0oKXt2YXIgXzB4MWU5MGYxPV8weDMwZDQ2YztpZih0aGlzW18weDFlOTBmMSgweDE1ZildKXJldHVybiB0aGlzW18weDFlOTBmMSgweDE1ZildO2xldCBfMHg0YWU3N2M7aWYodGhpc1tfMHgxZTkwZjEoMHgxNTQpXXx8dGhpc1snX2luTmV4dEVkZ2UnXSlfMHg0YWU3N2M9dGhpc1tfMHgxZTkwZjEoMHgxNjUpXVsnV2ViU29ja2V0J107ZWxzZXtpZih0aGlzWydnbG9iYWwnXVtfMHgxZTkwZjEoMHgxMzgpXT8uWydfV2ViU29ja2V0J10pXzB4NGFlNzdjPXRoaXNbJ2dsb2JhbCddW18weDFlOTBmMSgweDEzOCldPy5bJ19XZWJTb2NrZXQnXTtlbHNlIHRyeXtsZXQgXzB4NGNlYjk1PWF3YWl0IGltcG9ydCgncGF0aCcpO18weDRhZTc3Yz0oYXdhaXQgaW1wb3J0KChhd2FpdCBpbXBvcnQoJ3VybCcpKVsncGF0aFRvRmlsZVVSTCddKF8weDRjZWI5NVtfMHgxZTkwZjEoMHgxMzIpXSh0aGlzW18weDFlOTBmMSgweGY2KV0sJ3dzL2luZGV4LmpzJykpWyd0b1N0cmluZyddKCkpKVtfMHgxZTkwZjEoMHgxYjUpXTt9Y2F0Y2h7dHJ5e18weDRhZTc3Yz1yZXF1aXJlKHJlcXVpcmUoXzB4MWU5MGYxKDB4MTZhKSlbXzB4MWU5MGYxKDB4MTMyKV0odGhpc1snbm9kZU1vZHVsZXMnXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHgxZTkwZjEoMHgxYTMpKTt9fX1yZXR1cm4gdGhpc1snX1dlYlNvY2tldENsYXNzJ109XzB4NGFlNzdjLF8weDRhZTc3Yzt9W18weDMwZDQ2YygweDFhMSldKCl7dmFyIF8weDQ5MDg5YT1fMHgzMGQ0NmM7dGhpc1tfMHg0OTA4OWEoMHhkMSldfHx0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J10+PXRoaXNbXzB4NDkwODlhKDB4MTQ1KV18fCh0aGlzW18weDQ5MDg5YSgweDEzNyldPSEweDEsdGhpc1tfMHg0OTA4OWEoMHhkMSldPSEweDAsdGhpc1tfMHg0OTA4OWEoMHgxMWIpXSsrLHRoaXNbXzB4NDkwODlhKDB4ZDgpXT1uZXcgUHJvbWlzZSgoXzB4MzRlYWZjLF8weDE0NDMyNCk9Pnt2YXIgXzB4ODc0ZmE0PV8weDQ5MDg5YTt0aGlzW18weDg3NGZhNCgweDEzMSldKClbXzB4ODc0ZmE0KDB4MTI4KV0oXzB4NGJhZjU4PT57dmFyIF8weDQxZGRhYz1fMHg4NzRmYTQ7bGV0IF8weDI1NzQzYj1uZXcgXzB4NGJhZjU4KF8weDQxZGRhYygweDE4OSkrKCF0aGlzWydfaW5Ccm93c2VyJ10mJnRoaXNbXzB4NDFkZGFjKDB4MTNiKV0/XzB4NDFkZGFjKDB4ZGMpOnRoaXNbXzB4NDFkZGFjKDB4ZDYpXSkrJzonK3RoaXNbXzB4NDFkZGFjKDB4MTVkKV0pO18weDI1NzQzYltfMHg0MWRkYWMoMHhkNSldPSgpPT57dmFyIF8weDJiNGY2NT1fMHg0MWRkYWM7dGhpc1tfMHgyYjRmNjUoMHhlYildPSEweDEsdGhpc1tfMHgyYjRmNjUoMHgxNzIpXShfMHgyNTc0M2IpLHRoaXNbXzB4MmI0ZjY1KDB4ZjUpXSgpLF8weDE0NDMyNChuZXcgRXJyb3IoJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InKSk7fSxfMHgyNTc0M2JbXzB4NDFkZGFjKDB4MTlmKV09KCk9Pnt2YXIgXzB4NDIwODJhPV8weDQxZGRhYzt0aGlzW18weDQyMDgyYSgweDE1NCldfHxfMHgyNTc0M2JbXzB4NDIwODJhKDB4MTg2KV0mJl8weDI1NzQzYltfMHg0MjA4MmEoMHgxODYpXVsndW5yZWYnXSYmXzB4MjU3NDNiW18weDQyMDgyYSgweDE4NildW18weDQyMDgyYSgweDE5MCldKCksXzB4MzRlYWZjKF8weDI1NzQzYik7fSxfMHgyNTc0M2JbXzB4NDFkZGFjKDB4ZGUpXT0oKT0+e3ZhciBfMHgxMzI5NzI9XzB4NDFkZGFjO3RoaXNbXzB4MTMyOTcyKDB4MTM3KV09ITB4MCx0aGlzW18weDEzMjk3MigweDE3MildKF8weDI1NzQzYiksdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpO30sXzB4MjU3NDNiW18weDQxZGRhYygweDFhYildPV8weDFhZmQxMT0+e3ZhciBfMHgxOGQ2YjU9XzB4NDFkZGFjO3RyeXtfMHgxYWZkMTEmJl8weDFhZmQxMVtfMHgxOGQ2YjUoMHgxNGYpXSYmdGhpc1tfMHgxOGQ2YjUoMHgxNTQpXSYmSlNPTlsncGFyc2UnXShfMHgxYWZkMTFbJ2RhdGEnXSlbXzB4MThkNmI1KDB4MTE2KV09PT1fMHgxOGQ2YjUoMHgxYTIpJiZ0aGlzWydnbG9iYWwnXVtfMHgxOGQ2YjUoMHgxMTEpXVtfMHgxOGQ2YjUoMHgxYTIpXSgpO31jYXRjaHt9fTt9KVtfMHg4NzRmYTQoMHgxMjgpXShfMHgxYjI0ZDI9Pih0aGlzW18weDg3NGZhNCgweDE0YyldPSEweDAsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLHRoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MSx0aGlzW18weDg3NGZhNCgweGViKV09ITB4MCx0aGlzW18weDg3NGZhNCgweDExYildPTB4MCxfMHgxYjI0ZDIpKVtfMHg4NzRmYTQoMHgxNDcpXShfMHgzN2Y1YTA9Pih0aGlzW18weDg3NGZhNCgweDE0YyldPSEweDEsdGhpc1tfMHg4NzRmYTQoMHhkMSldPSEweDEsY29uc29sZVtfMHg4NzRmYTQoMHgxMDIpXShfMHg4NzRmYTQoMHgxOTIpK3RoaXNbXzB4ODc0ZmE0KDB4MTc0KV0pLF8weDE0NDMyNChuZXcgRXJyb3IoJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcrKF8weDM3ZjVhMCYmXzB4MzdmNWEwW18weDg3NGZhNCgweGU2KV0pKSkpKTt9KSk7fVsnX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHg0OWE0NjEpe3ZhciBfMHg0Zjg4Njk9XzB4MzBkNDZjO3RoaXNbXzB4NGY4ODY5KDB4MTRjKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDE7dHJ5e18weDQ5YTQ2MVtfMHg0Zjg4NjkoMHhkZSldPW51bGwsXzB4NDlhNDYxWydvbmVycm9yJ109bnVsbCxfMHg0OWE0NjFbXzB4NGY4ODY5KDB4MTlmKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHg0OWE0NjFbXzB4NGY4ODY5KDB4ZDApXTwweDImJl8weDQ5YTQ2MVtfMHg0Zjg4NjkoMHgxOTcpXSgpO31jYXRjaHt9fVsnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpe3ZhciBfMHgxNTk3OWI9XzB4MzBkNDZjO2NsZWFyVGltZW91dCh0aGlzWydfcmVjb25uZWN0VGltZW91dCddKSwhKHRoaXNbXzB4MTU5NzliKDB4MTFiKV0+PXRoaXNbXzB4MTU5NzliKDB4MTQ1KV0pJiYodGhpc1tfMHgxNTk3OWIoMHgxMWUpXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDU1N2I2OD1fMHgxNTk3OWI7dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzWydfY29ubmVjdGluZyddfHwodGhpc1snX2Nvbm5lY3RUb0hvc3ROb3cnXSgpLHRoaXNbXzB4NTU3YjY4KDB4ZDgpXT8uW18weDU1N2I2OCgweDE0NyldKCgpPT50aGlzW18weDU1N2I2OCgweGY1KV0oKSkpO30sMHgxZjQpLHRoaXNbXzB4MTU5NzliKDB4MTFlKV1bXzB4MTU5NzliKDB4MTkwKV0mJnRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J11bXzB4MTU5NzliKDB4MTkwKV0oKSk7fWFzeW5jW18weDMwZDQ2YygweGRhKV0oXzB4MzllNzgyKXt2YXIgXzB4NDg2MGY5PV8weDMwZDQ2Yzt0cnl7aWYoIXRoaXNbJ19hbGxvd2VkVG9TZW5kJ10pcmV0dXJuO3RoaXNbXzB4NDg2MGY5KDB4MTM3KV0mJnRoaXNbXzB4NDg2MGY5KDB4MWExKV0oKSwoYXdhaXQgdGhpc1snX3dzJ10pW18weDQ4NjBmOSgweGRhKV0oSlNPTlsnc3RyaW5naWZ5J10oXzB4MzllNzgyKSk7fWNhdGNoKF8weDFlMTdlMCl7Y29uc29sZVtfMHg0ODYwZjkoMHgxMDIpXSh0aGlzW18weDQ4NjBmOSgweDE5MyldKyc6XFxcXHgyMCcrKF8weDFlMTdlMCYmXzB4MWUxN2UwW18weDQ4NjBmOSgweGU2KV0pKSx0aGlzW18weDQ4NjBmOSgweGViKV09ITB4MSx0aGlzW18weDQ4NjBmOSgweGY1KV0oKTt9fX07ZnVuY3Rpb24gYihfMHg0NmQwYjEsXzB4NGMxOGViLF8weDMyMWZmNyxfMHg2NzY5MTEsXzB4NGM4Mjk5LF8weDU0MjU1YSl7dmFyIF8weDM5MzdlNz1fMHgzMGQ0NmM7bGV0IF8weDUwZTBmOT1fMHgzMjFmZjdbXzB4MzkzN2U3KDB4MTNkKV0oJywnKVsnbWFwJ10oXzB4NDFkODc9Pnt2YXIgXzB4NTE3OWEyPV8weDM5MzdlNzt0cnl7XzB4NDZkMGIxWydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ118fCgoXzB4NGM4Mjk5PT09XzB4NTE3OWEyKDB4MTllKXx8XzB4NGM4Mjk5PT09XzB4NTE3OWEyKDB4MTIwKXx8XzB4NGM4Mjk5PT09XzB4NTE3OWEyKDB4MTUyKSkmJihfMHg0YzgyOTkrPSFfMHg0NmQwYjFbXzB4NTE3OWEyKDB4MTM4KV0/LltfMHg1MTc5YTIoMHgxMWQpXT8uW18weDUxNzlhMigweDFhZCldJiZfMHg0NmQwYjFbXzB4NTE3OWEyKDB4MTM4KV0/LlsnZW52J10/LltfMHg1MTc5YTIoMHgxMmQpXSE9PSdlZGdlJz9fMHg1MTc5YTIoMHgxYjEpOl8weDUxNzlhMigweDE1YykpLF8weDQ2ZDBiMVsnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHg0YzgyOTl9KTtsZXQgXzB4N2FhYmJmPW5ldyBYKF8weDQ2ZDBiMSxfMHg0YzE4ZWIsXzB4NDFkODcsXzB4Njc2OTExLF8weDU0MjU1YSk7cmV0dXJuIF8weDdhYWJiZlsnc2VuZCddW18weDUxNzlhMigweGNmKV0oXzB4N2FhYmJmKTt9Y2F0Y2goXzB4MWNiMDZmKXtyZXR1cm4gY29uc29sZVtfMHg1MTc5YTIoMHgxMDIpXSgnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLF8weDFjYjA2ZiYmXzB4MWNiMDZmWydtZXNzYWdlJ10pLCgpPT57fTt9fSk7cmV0dXJuIF8weDI3N2UwND0+XzB4NTBlMGY5W18weDM5MzdlNygweDFhYyldKF8weGE0MmZiPT5fMHhhNDJmYihfMHgyNzdlMDQpKTt9ZnVuY3Rpb24gVyhfMHgxZWM1YzIpe3ZhciBfMHgzZjA0OTU9XzB4MzBkNDZjO2xldCBfMHgxMTQyN2Y9ZnVuY3Rpb24oXzB4M2Q1NTgzLF8weGY1MGE3KXtyZXR1cm4gXzB4ZjUwYTctXzB4M2Q1NTgzO30sXzB4MjU1MTVlO2lmKF8weDFlYzVjMltfMHgzZjA0OTUoMHhjZSldKV8weDI1NTE1ZT1mdW5jdGlvbigpe3ZhciBfMHgzODQwNTg9XzB4M2YwNDk1O3JldHVybiBfMHgxZWM1YzJbXzB4Mzg0MDU4KDB4Y2UpXVsnbm93J10oKTt9O2Vsc2V7aWYoXzB4MWVjNWMyW18weDNmMDQ5NSgweDEzOCldJiZfMHgxZWM1YzJbXzB4M2YwNDk1KDB4MTM4KV1bXzB4M2YwNDk1KDB4MTUwKV0mJl8weDFlYzVjMltfMHgzZjA0OTUoMHgxMzgpXT8uW18weDNmMDQ5NSgweGVmKV0/LltfMHgzZjA0OTUoMHgxMmQpXSE9PV8weDNmMDQ5NSgweDEzMykpXzB4MjU1MTVlPWZ1bmN0aW9uKCl7dmFyIF8weDRiOWE4Yz1fMHgzZjA0OTU7cmV0dXJuIF8weDFlYzVjMltfMHg0YjlhOGMoMHgxMzgpXVsnaHJ0aW1lJ10oKTt9LF8weDExNDI3Zj1mdW5jdGlvbihfMHgxMzQwZjIsXzB4NDVlOTAwKXtyZXR1cm4gMHgzZTgqKF8weDQ1ZTkwMFsweDBdLV8weDEzNDBmMlsweDBdKSsoXzB4NDVlOTAwWzB4MV0tXzB4MTM0MGYyWzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDRhMTljOH09cmVxdWlyZShfMHgzZjA0OTUoMHgxMjQpKTtfMHgyNTUxNWU9ZnVuY3Rpb24oKXt2YXIgXzB4NDk1NTcyPV8weDNmMDQ5NTtyZXR1cm4gXzB4NGExOWM4W18weDQ5NTU3MigweDE0OSldKCk7fTt9Y2F0Y2h7XzB4MjU1MTVlPWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4MTE0MjdmLCd0aW1lU3RhbXAnOl8weDI1NTE1ZSwnbm93JzooKT0+RGF0ZVtfMHgzZjA0OTUoMHgxNDkpXSgpfTt9ZnVuY3Rpb24gSihfMHgyYzk5ZmQsXzB4MTI5OGY5LF8weDdhNDQ1MCl7dmFyIF8weDJiNjU2MD1fMHgzMGQ0NmM7aWYoXzB4MmM5OWZkW18weDJiNjU2MCgweDE4YyldIT09dm9pZCAweDApcmV0dXJuIF8weDJjOTlmZFtfMHgyYjY1NjAoMHgxOGMpXTtsZXQgXzB4MTdkZTI4PV8weDJjOTlmZFtfMHgyYjY1NjAoMHgxMzgpXT8uWyd2ZXJzaW9ucyddPy5bXzB4MmI2NTYwKDB4MWFkKV18fF8weDJjOTlmZFtfMHgyYjY1NjAoMHgxMzgpXT8uW18weDJiNjU2MCgweGVmKV0/LltfMHgyYjY1NjAoMHgxMmQpXT09PSdlZGdlJztyZXR1cm4gXzB4MTdkZTI4JiZfMHg3YTQ0NTA9PT1fMHgyYjY1NjAoMHgxNWEpP18weDJjOTlmZFtfMHgyYjY1NjAoMHgxOGMpXT0hMHgxOl8weDJjOTlmZFtfMHgyYjY1NjAoMHgxOGMpXT1fMHgxN2RlMjh8fCFfMHgxMjk4Zjl8fF8weDJjOTlmZFsnbG9jYXRpb24nXT8uWydob3N0bmFtZSddJiZfMHgxMjk4ZjlbXzB4MmI2NTYwKDB4MWIzKV0oXzB4MmM5OWZkW18weDJiNjU2MCgweDExMSldW18weDJiNjU2MCgweDEyMildKSxfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MThjKV07fWZ1bmN0aW9uIFkoXzB4MzE5NzUxLF8weDVkMjY3YSxfMHgyNDA4YmEsXzB4NTYzNTA0KXt2YXIgXzB4NDI0OGQ2PV8weDMwZDQ2YztfMHgzMTk3NTE9XzB4MzE5NzUxLF8weDVkMjY3YT1fMHg1ZDI2N2EsXzB4MjQwOGJhPV8weDI0MDhiYSxfMHg1NjM1MDQ9XzB4NTYzNTA0O2xldCBfMHg1YzZiYTQ9VyhfMHgzMTk3NTEpLF8weDVkZWFkNT1fMHg1YzZiYTRbXzB4NDI0OGQ2KDB4ZjApXSxfMHgyOTlkYTM9XzB4NWM2YmE0Wyd0aW1lU3RhbXAnXTtjbGFzcyBfMHgzMTg3YTd7Y29uc3RydWN0b3IoKXt2YXIgXzB4NTRjNTRiPV8weDQyNDhkNjt0aGlzW18weDU0YzU0YigweDE3MSldPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg1NGM1NGIoMHhkMildPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1snX3F1b3RlZFJlZ0V4cCddPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbXzB4NTRjNTRiKDB4ZTUpXT1fMHgzMTk3NTFbXzB4NTRjNTRiKDB4MTk4KV0sdGhpc1tfMHg1NGM1NGIoMHhkNyldPV8weDMxOTc1MVtfMHg1NGM1NGIoMHgxNjgpXSx0aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ109T2JqZWN0W18weDU0YzU0YigweDE2ZSldLHRoaXNbXzB4NTRjNTRiKDB4MTJjKV09T2JqZWN0W18weDU0YzU0YigweDE1OCldLHRoaXNbXzB4NTRjNTRiKDB4MTcwKV09XzB4MzE5NzUxW18weDU0YzU0YigweDE2OSldLHRoaXNbXzB4NTRjNTRiKDB4MWIyKV09UmVnRXhwWydwcm90b3R5cGUnXVtfMHg1NGM1NGIoMHgxNGQpXSx0aGlzW18weDU0YzU0YigweDExZildPURhdGVbJ3Byb3RvdHlwZSddW18weDU0YzU0YigweDE0ZCldO31bXzB4NDI0OGQ2KDB4MWI2KV0oXzB4NDNiZmM3LF8weDI1ZDQ1MSxfMHgxZTcxYzUsXzB4NTA4YTBmKXt2YXIgXzB4MTM2NjkyPV8weDQyNDhkNixfMHgyMmY3Yjg9dGhpcyxfMHgyN2E0NzM9XzB4MWU3MWM1WydhdXRvRXhwYW5kJ107ZnVuY3Rpb24gXzB4NDEyYmZlKF8weDE1NjFmNyxfMHgyYTA5ODcsXzB4NThmMTMwKXt2YXIgXzB4MjFjOTFkPV8weDM5NGI7XzB4MmEwOTg3W18weDIxYzkxZCgweDE5MSldPV8weDIxYzkxZCgweDExMyksXzB4MmEwOTg3W18weDIxYzkxZCgweDEzOSldPV8weDE1NjFmN1tfMHgyMWM5MWQoMHhlNildLF8weDFjMzZiMD1fMHg1OGYxMzBbJ25vZGUnXVtfMHgyMWM5MWQoMHhkZCldLF8weDU4ZjEzMFtfMHgyMWM5MWQoMHgxYWQpXVtfMHgyMWM5MWQoMHhkZCldPV8weDJhMDk4NyxfMHgyMmY3YjhbXzB4MjFjOTFkKDB4MTQwKV0oXzB4MmEwOTg3LF8weDU4ZjEzMCk7fXRyeXtfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTA3KV0rKyxfMHgxZTcxYzVbJ2F1dG9FeHBhbmQnXSYmXzB4MWU3MWM1W18weDEzNjY5MigweGU4KV1bXzB4MTM2NjkyKDB4MTM0KV0oXzB4MjVkNDUxKTt2YXIgXzB4MzE1NzQzLF8weDU0MWFhOCxfMHgzY2NlZDksXzB4MmEzNGExLF8weDIwYjRmMj1bXSxfMHg0ZGE2M2I9W10sXzB4NTU2OTc5LF8weDJkMmQ2ZD10aGlzW18weDEzNjY5MigweDEzNildKF8weDI1ZDQ1MSksXzB4ZDgzMmM1PV8weDJkMmQ2ZD09PSdhcnJheScsXzB4MjY4YzQwPSEweDEsXzB4MTMwZjNlPV8weDJkMmQ2ZD09PV8weDEzNjY5MigweGVhKSxfMHgzNjliMGU9dGhpc1tfMHgxMzY2OTIoMHgxMTUpXShfMHgyZDJkNmQpLF8weDQ5ODQxOD10aGlzWydfaXNQcmltaXRpdmVXcmFwcGVyVHlwZSddKF8weDJkMmQ2ZCksXzB4MzQwZjgzPV8weDM2OWIwZXx8XzB4NDk4NDE4LF8weDI0OTNiZT17fSxfMHgzNmYzY2M9MHgwLF8weDNhMmZkYT0hMHgxLF8weDFjMzZiMCxfMHgzNDhiZjE9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxMjkpXSl7aWYoXzB4ZDgzMmM1KXtpZihfMHg1NDFhYTg9XzB4MjVkNDUxW18weDEzNjY5MigweDE1ZSldLF8weDU0MWFhOD5fMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTYyKV0pe2ZvcihfMHgzY2NlZDk9MHgwLF8weDJhMzRhMT1fMHgxZTcxYzVbJ2VsZW1lbnRzJ10sXzB4MzE1NzQzPV8weDNjY2VkOTtfMHgzMTU3NDM8XzB4MmEzNGExO18weDMxNTc0MysrKV8weDRkYTYzYltfMHgxMzY2OTIoMHgxMzQpXShfMHgyMmY3YjhbXzB4MTM2NjkyKDB4ZjcpXShfMHgyMGI0ZjIsXzB4MjVkNDUxLF8weDJkMmQ2ZCxfMHgzMTU3NDMsXzB4MWU3MWM1KSk7XzB4NDNiZmM3W18weDEzNjY5MigweDE2NildPSEweDA7fWVsc2V7Zm9yKF8weDNjY2VkOT0weDAsXzB4MmEzNGExPV8weDU0MWFhOCxfMHgzMTU3NDM9XzB4M2NjZWQ5O18weDMxNTc0MzxfMHgyYTM0YTE7XzB4MzE1NzQzKyspXzB4NGRhNjNiW18weDEzNjY5MigweDEzNCldKF8weDIyZjdiOFtfMHgxMzY2OTIoMHhmNyldKF8weDIwYjRmMixfMHgyNWQ0NTEsXzB4MmQyZDZkLF8weDMxNTc0MyxfMHgxZTcxYzUpKTt9XzB4MWU3MWM1W18weDEzNjY5MigweDE3NSldKz1fMHg0ZGE2M2JbJ2xlbmd0aCddO31pZighKF8weDJkMmQ2ZD09PSdudWxsJ3x8XzB4MmQyZDZkPT09XzB4MTM2NjkyKDB4MTk4KSkmJiFfMHgzNjliMGUmJl8weDJkMmQ2ZCE9PV8weDEzNjY5MigweDEwMSkmJl8weDJkMmQ2ZCE9PV8weDEzNjY5MigweDFhZikmJl8weDJkMmQ2ZCE9PSdiaWdpbnQnKXt2YXIgXzB4MmNjN2MzPV8weDUwOGEwZltfMHgxMzY2OTIoMHgxOWQpXXx8XzB4MWU3MWM1Wydwcm9wcyddO2lmKHRoaXNbXzB4MTM2NjkyKDB4MTg0KV0oXzB4MjVkNDUxKT8oXzB4MzE1NzQzPTB4MCxfMHgyNWQ0NTFbXzB4MTM2NjkyKDB4MWFjKV0oZnVuY3Rpb24oXzB4NWI1MTEwKXt2YXIgXzB4NThjM2NiPV8weDEzNjY5MjtpZihfMHgzNmYzY2MrKyxfMHgxZTcxYzVbXzB4NThjM2NiKDB4MTc1KV0rKyxfMHgzNmYzY2M+XzB4MmNjN2MzKXtfMHgzYTJmZGE9ITB4MDtyZXR1cm47fWlmKCFfMHgxZTcxYzVbXzB4NThjM2NiKDB4MTUzKV0mJl8weDFlNzFjNVtfMHg1OGMzY2IoMHgxODIpXSYmXzB4MWU3MWM1W18weDU4YzNjYigweDE3NSldPl8weDFlNzFjNVtfMHg1OGMzY2IoMHhlMSldKXtfMHgzYTJmZGE9ITB4MDtyZXR1cm47fV8weDRkYTYzYltfMHg1OGMzY2IoMHgxMzQpXShfMHgyMmY3YjhbXzB4NThjM2NiKDB4ZjcpXShfMHgyMGI0ZjIsXzB4MjVkNDUxLF8weDU4YzNjYigweDE2YyksXzB4MzE1NzQzKyssXzB4MWU3MWM1LGZ1bmN0aW9uKF8weGZjYjVjNSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weGZjYjVjNTt9O30oXzB4NWI1MTEwKSkpO30pKTp0aGlzW18weDEzNjY5MigweDE0MyldKF8weDI1ZDQ1MSkmJl8weDI1ZDQ1MVsnZm9yRWFjaCddKGZ1bmN0aW9uKF8weDIwNTZmNSxfMHgzMTMwMTApe3ZhciBfMHg1NWE3ZmQ9XzB4MTM2NjkyO2lmKF8weDM2ZjNjYysrLF8weDFlNzFjNVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDM2ZjNjYz5fMHgyY2M3YzMpe18weDNhMmZkYT0hMHgwO3JldHVybjt9aWYoIV8weDFlNzFjNVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHgxZTcxYzVbJ2F1dG9FeHBhbmQnXSYmXzB4MWU3MWM1WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDFlNzFjNVtfMHg1NWE3ZmQoMHhlMSldKXtfMHgzYTJmZGE9ITB4MDtyZXR1cm47fXZhciBfMHgyN2I3NTU9XzB4MzEzMDEwWyd0b1N0cmluZyddKCk7XzB4MjdiNzU1WydsZW5ndGgnXT4weDY0JiYoXzB4MjdiNzU1PV8weDI3Yjc1NVsnc2xpY2UnXSgweDAsMHg2NCkrJy4uLicpLF8weDRkYTYzYltfMHg1NWE3ZmQoMHgxMzQpXShfMHgyMmY3YjhbXzB4NTVhN2ZkKDB4ZjcpXShfMHgyMGI0ZjIsXzB4MjVkNDUxLF8weDU1YTdmZCgweDEwZCksXzB4MjdiNzU1LF8weDFlNzFjNSxmdW5jdGlvbihfMHg1OGRkZTkpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHg1OGRkZTk7fTt9KF8weDIwNTZmNSkpKTt9KSwhXzB4MjY4YzQwKXt0cnl7Zm9yKF8weDU1Njk3OSBpbiBfMHgyNWQ0NTEpaWYoIShfMHhkODMyYzUmJl8weDM0OGJmMVtfMHgxMzY2OTIoMHhlNyldKF8weDU1Njk3OSkpJiYhdGhpc1tfMHgxMzY2OTIoMHhmOCldKF8weDI1ZDQ1MSxfMHg1NTY5NzksXzB4MWU3MWM1KSl7aWYoXzB4MzZmM2NjKyssXzB4MWU3MWM1W18weDEzNjY5MigweDE3NSldKyssXzB4MzZmM2NjPl8weDJjYzdjMyl7XzB4M2EyZmRhPSEweDA7YnJlYWs7fWlmKCFfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTUzKV0mJl8weDFlNzFjNVtfMHgxMzY2OTIoMHgxODIpXSYmXzB4MWU3MWM1WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDFlNzFjNVtfMHgxMzY2OTIoMHhlMSldKXtfMHgzYTJmZGE9ITB4MDticmVhazt9XzB4NGRhNjNiW18weDEzNjY5MigweDEzNCldKF8weDIyZjdiOFtfMHgxMzY2OTIoMHgxMDgpXShfMHgyMGI0ZjIsXzB4MjQ5M2JlLF8weDI1ZDQ1MSxfMHgyZDJkNmQsXzB4NTU2OTc5LF8weDFlNzFjNSkpO319Y2F0Y2h7fWlmKF8weDI0OTNiZVtfMHgxMzY2OTIoMHgxM2EpXT0hMHgwLF8weDEzMGYzZSYmKF8weDI0OTNiZVtfMHgxMzY2OTIoMHgxNmYpXT0hMHgwKSwhXzB4M2EyZmRhKXt2YXIgXzB4Mzc5YWQ4PVtdW18weDEzNjY5MigweGRiKV0odGhpc1tfMHgxMzY2OTIoMHgxMmMpXShfMHgyNWQ0NTEpKVtfMHgxMzY2OTIoMHhkYildKHRoaXNbXzB4MTM2NjkyKDB4MTRlKV0oXzB4MjVkNDUxKSk7Zm9yKF8weDMxNTc0Mz0weDAsXzB4NTQxYWE4PV8weDM3OWFkOFtfMHgxMzY2OTIoMHgxNWUpXTtfMHgzMTU3NDM8XzB4NTQxYWE4O18weDMxNTc0MysrKWlmKF8weDU1Njk3OT1fMHgzNzlhZDhbXzB4MzE1NzQzXSwhKF8weGQ4MzJjNSYmXzB4MzQ4YmYxW18weDEzNjY5MigweGU3KV0oXzB4NTU2OTc5W18weDEzNjY5MigweDE0ZCldKCkpKSYmIXRoaXNbXzB4MTM2NjkyKDB4ZjgpXShfMHgyNWQ0NTEsXzB4NTU2OTc5LF8weDFlNzFjNSkmJiFfMHgyNDkzYmVbXzB4MTM2NjkyKDB4MTJlKStfMHg1NTY5NzlbXzB4MTM2NjkyKDB4MTRkKV0oKV0pe2lmKF8weDM2ZjNjYysrLF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNzUpXSsrLF8weDM2ZjNjYz5fMHgyY2M3YzMpe18weDNhMmZkYT0hMHgwO2JyZWFrO31pZighXzB4MWU3MWM1W18weDEzNjY5MigweDE1MyldJiZfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTgyKV0mJl8weDFlNzFjNVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgxZTcxYzVbXzB4MTM2NjkyKDB4ZTEpXSl7XzB4M2EyZmRhPSEweDA7YnJlYWs7fV8weDRkYTYzYlsncHVzaCddKF8weDIyZjdiOFtfMHgxMzY2OTIoMHgxMDgpXShfMHgyMGI0ZjIsXzB4MjQ5M2JlLF8weDI1ZDQ1MSxfMHgyZDJkNmQsXzB4NTU2OTc5LF8weDFlNzFjNSkpO319fX19aWYoXzB4NDNiZmM3W18weDEzNjY5MigweDE5MSldPV8weDJkMmQ2ZCxfMHgzNDBmODM/KF8weDQzYmZjN1sndmFsdWUnXT1fMHgyNWQ0NTFbJ3ZhbHVlT2YnXSgpLHRoaXNbXzB4MTM2NjkyKDB4ZTMpXShfMHgyZDJkNmQsXzB4NDNiZmM3LF8weDFlNzFjNSxfMHg1MDhhMGYpKTpfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHhmMyk/XzB4NDNiZmM3W18weDEzNjY5MigweDE3ZildPXRoaXNbXzB4MTM2NjkyKDB4MTFmKV1bXzB4MTM2NjkyKDB4ZmUpXShfMHgyNWQ0NTEpOl8weDJkMmQ2ZD09PV8weDEzNjY5MigweDE4Yik/XzB4NDNiZmM3W18weDEzNjY5MigweDE3ZildPV8weDI1ZDQ1MVsndG9TdHJpbmcnXSgpOl8weDJkMmQ2ZD09PSdSZWdFeHAnP18weDQzYmZjN1tfMHgxMzY2OTIoMHgxN2YpXT10aGlzW18weDEzNjY5MigweDFiMildWydjYWxsJ10oXzB4MjVkNDUxKTpfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHgxNzYpJiZ0aGlzW18weDEzNjY5MigweDE3MCldP18weDQzYmZjN1tfMHgxMzY2OTIoMHgxN2YpXT10aGlzW18weDEzNjY5MigweDE3MCldW18weDEzNjY5MigweDE4MCldW18weDEzNjY5MigweDE0ZCldW18weDEzNjY5MigweGZlKV0oXzB4MjVkNDUxKTohXzB4MWU3MWM1W18weDEzNjY5MigweDEyOSldJiYhKF8weDJkMmQ2ZD09PV8weDEzNjY5MigweDE1OSl8fF8weDJkMmQ2ZD09PV8weDEzNjY5MigweDE5OCkpJiYoZGVsZXRlIF8weDQzYmZjN1sndmFsdWUnXSxfMHg0M2JmYzdbXzB4MTM2NjkyKDB4MTI1KV09ITB4MCksXzB4M2EyZmRhJiYoXzB4NDNiZmM3WydjYXBwZWRQcm9wcyddPSEweDApLF8weDFjMzZiMD1fMHgxZTcxYzVbXzB4MTM2NjkyKDB4MWFkKV1bXzB4MTM2NjkyKDB4ZGQpXSxfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MWFkKV1bXzB4MTM2NjkyKDB4ZGQpXT1fMHg0M2JmYzcsdGhpc1tfMHgxMzY2OTIoMHgxNDApXShfMHg0M2JmYzcsXzB4MWU3MWM1KSxfMHg0ZGE2M2JbXzB4MTM2NjkyKDB4MTVlKV0pe2ZvcihfMHgzMTU3NDM9MHgwLF8weDU0MWFhOD1fMHg0ZGE2M2JbXzB4MTM2NjkyKDB4MTVlKV07XzB4MzE1NzQzPF8weDU0MWFhODtfMHgzMTU3NDMrKylfMHg0ZGE2M2JbXzB4MzE1NzQzXShfMHgzMTU3NDMpO31fMHgyMGI0ZjJbXzB4MTM2NjkyKDB4MTVlKV0mJihfMHg0M2JmYzdbJ3Byb3BzJ109XzB4MjBiNGYyKTt9Y2F0Y2goXzB4Y2IyZjFmKXtfMHg0MTJiZmUoXzB4Y2IyZjFmLF8weDQzYmZjNyxfMHgxZTcxYzUpO31yZXR1cm4gdGhpc1tfMHgxMzY2OTIoMHhkZildKF8weDI1ZDQ1MSxfMHg0M2JmYzcpLHRoaXNbXzB4MTM2NjkyKDB4MTA5KV0oXzB4NDNiZmM3LF8weDFlNzFjNSksXzB4MWU3MWM1W18weDEzNjY5MigweDFhZCldW18weDEzNjY5MigweGRkKV09XzB4MWMzNmIwLF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxMDcpXS0tLF8weDFlNzFjNVsnYXV0b0V4cGFuZCddPV8weDI3YTQ3MyxfMHgxZTcxYzVbJ2F1dG9FeHBhbmQnXSYmXzB4MWU3MWM1W18weDEzNjY5MigweGU4KV1bJ3BvcCddKCksXzB4NDNiZmM3O31bXzB4NDI0OGQ2KDB4MTRlKV0oXzB4MzZmZDY1KXt2YXIgXzB4M2E3MGIwPV8weDQyNDhkNjtyZXR1cm4gT2JqZWN0W18weDNhNzBiMCgweDE4ZSldP09iamVjdFsnZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10oXzB4MzZmZDY1KTpbXTt9W18weDQyNDhkNigweDE4NCldKF8weDJlNjUzZCl7dmFyIF8weDNmYzljMT1fMHg0MjQ4ZDY7cmV0dXJuISEoXzB4MmU2NTNkJiZfMHgzMTk3NTFbJ1NldCddJiZ0aGlzW18weDNmYzljMSgweDE3NyldKF8weDJlNjUzZCk9PT1fMHgzZmM5YzEoMHgxMGMpJiZfMHgyZTY1M2RbXzB4M2ZjOWMxKDB4MWFjKV0pO31bXzB4NDI0OGQ2KDB4ZjgpXShfMHg1MmQ2YmEsXzB4NTdmMjZlLF8weGZmNWFiMyl7dmFyIF8weGQwMWY0Yj1fMHg0MjQ4ZDY7cmV0dXJuIF8weGZmNWFiM1tfMHhkMDFmNGIoMHgxMmIpXT90eXBlb2YgXzB4NTJkNmJhW18weDU3ZjI2ZV09PV8weGQwMWY0YigweGVhKTohMHgxO31bXzB4NDI0OGQ2KDB4MTM2KV0oXzB4ODlhMzUzKXt2YXIgXzB4M2MzMzNjPV8weDQyNDhkNixfMHg0NWE3OTA9Jyc7cmV0dXJuIF8weDQ1YTc5MD10eXBlb2YgXzB4ODlhMzUzLF8weDQ1YTc5MD09PV8weDNjMzMzYygweDE4Myk/dGhpc1tfMHgzYzMzM2MoMHgxNzcpXShfMHg4OWEzNTMpPT09XzB4M2MzMzNjKDB4MTE0KT9fMHg0NWE3OTA9XzB4M2MzMzNjKDB4ZmIpOnRoaXNbXzB4M2MzMzNjKDB4MTc3KV0oXzB4ODlhMzUzKT09PV8weDNjMzMzYygweDEyNik/XzB4NDVhNzkwPV8weDNjMzMzYygweGYzKTp0aGlzW18weDNjMzMzYygweDE3NyldKF8weDg5YTM1Myk9PT1fMHgzYzMzM2MoMHgxNDEpP18weDQ1YTc5MD1fMHgzYzMzM2MoMHgxOGIpOl8weDg5YTM1Mz09PW51bGw/XzB4NDVhNzkwPV8weDNjMzMzYygweDE1OSk6XzB4ODlhMzUzW18weDNjMzMzYygweDFhNildJiYoXzB4NDVhNzkwPV8weDg5YTM1M1tfMHgzYzMzM2MoMHgxYTYpXVtfMHgzYzMzM2MoMHgxMDYpXXx8XzB4NDVhNzkwKTpfMHg0NWE3OTA9PT0ndW5kZWZpbmVkJyYmdGhpc1tfMHgzYzMzM2MoMHhkNyldJiZfMHg4OWEzNTMgaW5zdGFuY2VvZiB0aGlzW18weDNjMzMzYygweGQ3KV0mJihfMHg0NWE3OTA9XzB4M2MzMzNjKDB4MTY4KSksXzB4NDVhNzkwO31bXzB4NDI0OGQ2KDB4MTc3KV0oXzB4YjI4YjUpe3ZhciBfMHgyZDZlODE9XzB4NDI0OGQ2O3JldHVybiBPYmplY3RbXzB4MmQ2ZTgxKDB4MTgwKV1bXzB4MmQ2ZTgxKDB4MTRkKV1bJ2NhbGwnXShfMHhiMjhiNSk7fVsnX2lzUHJpbWl0aXZlVHlwZSddKF8weDU3OGVlZSl7dmFyIF8weDE1M2RhYz1fMHg0MjQ4ZDY7cmV0dXJuIF8weDU3OGVlZT09PV8weDE1M2RhYygweDE2Yil8fF8weDU3OGVlZT09PV8weDE1M2RhYygweDEzYyl8fF8weDU3OGVlZT09PV8weDE1M2RhYygweDEzNSk7fVtfMHg0MjQ4ZDYoMHgxNjMpXShfMHgxMzI1MGIpe3ZhciBfMHgyODk4NDM9XzB4NDI0OGQ2O3JldHVybiBfMHgxMzI1MGI9PT1fMHgyODk4NDMoMHgxOWMpfHxfMHgxMzI1MGI9PT0nU3RyaW5nJ3x8XzB4MTMyNTBiPT09XzB4Mjg5ODQzKDB4MTdjKTt9W18weDQyNDhkNigweGY3KV0oXzB4NDViMTk2LF8weDQxNDU0OCxfMHgzOWRjM2UsXzB4MzU3MzBmLF8weDQxMzAyNSxfMHgzYzBhYjMpe3ZhciBfMHg1Yjk3ZjI9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4NGE0ZTRiKXt2YXIgXzB4MjFmNmM3PV8weDM5NGIsXzB4MTA0Yzk3PV8weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVtfMHgyMWY2YzcoMHhkZCldLF8weDRjMzcwOT1fMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bXzB4MjFmNmM3KDB4MWE4KV0sXzB4NzAyYmVhPV8weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVsncGFyZW50J107XzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldW18weDIxZjZjNygweDE2MCldPV8weDEwNGM5NyxfMHg0MTMwMjVbJ25vZGUnXVsnaW5kZXgnXT10eXBlb2YgXzB4MzU3MzBmPT1fMHgyMWY2YzcoMHgxMzUpP18weDM1NzMwZjpfMHg0YTRlNGIsXzB4NDViMTk2W18weDIxZjZjNygweDEzNCldKF8weDViOTdmMltfMHgyMWY2YzcoMHgxODEpXShfMHg0MTQ1NDgsXzB4MzlkYzNlLF8weDM1NzMwZixfMHg0MTMwMjUsXzB4M2MwYWIzKSksXzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldW18weDIxZjZjNygweDE2MCldPV8weDcwMmJlYSxfMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bJ2luZGV4J109XzB4NGMzNzA5O307fVtfMHg0MjQ4ZDYoMHgxMDgpXShfMHg0NjA5ZTUsXzB4MTVjZmU0LF8weDI2NDE0ZixfMHgzZDhmMDksXzB4MzU2NTc1LF8weDM1NzE5MyxfMHg4M2YzNTkpe3ZhciBfMHg0Y2Y1MmI9XzB4NDI0OGQ2LF8weDQwMjc2YT10aGlzO3JldHVybiBfMHgxNWNmZTRbJ19wXycrXzB4MzU2NTc1W18weDRjZjUyYigweDE0ZCldKCldPSEweDAsZnVuY3Rpb24oXzB4MzMyNWY3KXt2YXIgXzB4MmI4ZDA2PV8weDRjZjUyYixfMHgyZWVlZWE9XzB4MzU3MTkzWydub2RlJ11bXzB4MmI4ZDA2KDB4ZGQpXSxfMHgyM2M3MTg9XzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDFhOCldLF8weDE0ZDNjMz1fMHgzNTcxOTNbXzB4MmI4ZDA2KDB4MWFkKV1bXzB4MmI4ZDA2KDB4MTYwKV07XzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDE2MCldPV8weDJlZWVlYSxfMHgzNTcxOTNbXzB4MmI4ZDA2KDB4MWFkKV1bXzB4MmI4ZDA2KDB4MWE4KV09XzB4MzMyNWY3LF8weDQ2MDllNVtfMHgyYjhkMDYoMHgxMzQpXShfMHg0MDI3NmFbXzB4MmI4ZDA2KDB4MTgxKV0oXzB4MjY0MTRmLF8weDNkOGYwOSxfMHgzNTY1NzUsXzB4MzU3MTkzLF8weDgzZjM1OSkpLF8weDM1NzE5M1snbm9kZSddW18weDJiOGQwNigweDE2MCldPV8weDE0ZDNjMyxfMHgzNTcxOTNbXzB4MmI4ZDA2KDB4MWFkKV1bXzB4MmI4ZDA2KDB4MWE4KV09XzB4MjNjNzE4O307fVsnX3Byb3BlcnR5J10oXzB4OWFiNjRmLF8weDRkOTBiOSxfMHgxODM1OTksXzB4ZDU4YjJiLF8weDQzYWY0MCl7dmFyIF8weDE0NzA4PV8weDQyNDhkNixfMHg0NDY1MDA9dGhpcztfMHg0M2FmNDB8fChfMHg0M2FmNDA9ZnVuY3Rpb24oXzB4NGJkZmIxLF8weDRiZGM0ZCl7cmV0dXJuIF8weDRiZGZiMVtfMHg0YmRjNGRdO30pO3ZhciBfMHgxODJjMGY9XzB4MTgzNTk5W18weDE0NzA4KDB4MTRkKV0oKSxfMHg1YjNlNTQ9XzB4ZDU4YjJiW18weDE0NzA4KDB4MTNmKV18fHt9LF8weDUyNzc5Mj1fMHhkNThiMmJbJ2RlcHRoJ10sXzB4NTA4MzEyPV8weGQ1OGIyYlsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddO3RyeXt2YXIgXzB4NTIxMDU4PXRoaXNbXzB4MTQ3MDgoMHgxNDMpXShfMHg5YWI2NGYpLF8weDQxMjNlYT1fMHgxODJjMGY7XzB4NTIxMDU4JiZfMHg0MTIzZWFbMHgwXT09PSdcXFxceDI3JyYmKF8weDQxMjNlYT1fMHg0MTIzZWFbXzB4MTQ3MDgoMHgxMTIpXSgweDEsXzB4NDEyM2VhWydsZW5ndGgnXS0weDIpKTt2YXIgXzB4MjZkZTlhPV8weGQ1OGIyYlsnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJ109XzB4NWIzZTU0W18weDE0NzA4KDB4MTJlKStfMHg0MTIzZWFdO18weDI2ZGU5YSYmKF8weGQ1OGIyYltfMHgxNDcwOCgweDEyOSldPV8weGQ1OGIyYlsnZGVwdGgnXSsweDEpLF8weGQ1OGIyYlsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddPSEhXzB4MjZkZTlhO3ZhciBfMHg1M2E2YjM9dHlwZW9mIF8weDE4MzU5OT09XzB4MTQ3MDgoMHgxNzYpLF8weDMxNzkwYj17J25hbWUnOl8weDUzYTZiM3x8XzB4NTIxMDU4P18weDE4MmMwZjp0aGlzW18weDE0NzA4KDB4MTk2KV0oXzB4MTgyYzBmKX07aWYoXzB4NTNhNmIzJiYoXzB4MzE3OTBiW18weDE0NzA4KDB4MTc2KV09ITB4MCksIShfMHg0ZDkwYjk9PT1fMHgxNDcwOCgweGZiKXx8XzB4NGQ5MGI5PT09XzB4MTQ3MDgoMHhlMikpKXt2YXIgXzB4NDI4ZTJmPXRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXShfMHg5YWI2NGYsXzB4MTgzNTk5KTtpZihfMHg0MjhlMmYmJihfMHg0MjhlMmZbJ3NldCddJiYoXzB4MzE3OTBiWydzZXR0ZXInXT0hMHgwKSxfMHg0MjhlMmZbXzB4MTQ3MDgoMHgxYTUpXSYmIV8weDI2ZGU5YSYmIV8weGQ1OGIyYltfMHgxNDcwOCgweDE4ZCldKSlyZXR1cm4gXzB4MzE3OTBiW18weDE0NzA4KDB4MTczKV09ITB4MCx0aGlzW18weDE0NzA4KDB4MWI0KV0oXzB4MzE3OTBiLF8weGQ1OGIyYiksXzB4MzE3OTBiO312YXIgXzB4NTc4NmU5O3RyeXtfMHg1Nzg2ZTk9XzB4NDNhZjQwKF8weDlhYjY0ZixfMHgxODM1OTkpO31jYXRjaChfMHgzOTZiYTgpe3JldHVybiBfMHgzMTc5MGI9eyduYW1lJzpfMHgxODJjMGYsJ3R5cGUnOid1bmtub3duJywnZXJyb3InOl8weDM5NmJhOFtfMHgxNDcwOCgweGU2KV19LHRoaXNbXzB4MTQ3MDgoMHgxYjQpXShfMHgzMTc5MGIsXzB4ZDU4YjJiKSxfMHgzMTc5MGI7fXZhciBfMHg1MmRkZmM9dGhpc1snX3R5cGUnXShfMHg1Nzg2ZTkpLF8weDFmMDUxZj10aGlzW18weDE0NzA4KDB4MTE1KV0oXzB4NTJkZGZjKTtpZihfMHgzMTc5MGJbJ3R5cGUnXT1fMHg1MmRkZmMsXzB4MWYwNTFmKXRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHgzMTc5MGIsXzB4ZDU4YjJiLF8weDU3ODZlOSxmdW5jdGlvbigpe3ZhciBfMHgxYjE0ZjA9XzB4MTQ3MDg7XzB4MzE3OTBiW18weDFiMTRmMCgweDE3ZildPV8weDU3ODZlOVsndmFsdWVPZiddKCksIV8weDI2ZGU5YSYmXzB4NDQ2NTAwW18weDFiMTRmMCgweGUzKV0oXzB4NTJkZGZjLF8weDMxNzkwYixfMHhkNThiMmIse30pO30pO2Vsc2V7dmFyIF8weDM0ODIwNj1fMHhkNThiMmJbXzB4MTQ3MDgoMHgxODIpXSYmXzB4ZDU4YjJiWydsZXZlbCddPF8weGQ1OGIyYltfMHgxNDcwOCgweDE2NyldJiZfMHhkNThiMmJbXzB4MTQ3MDgoMHhlOCldWydpbmRleE9mJ10oXzB4NTc4NmU5KTwweDAmJl8weDUyZGRmYyE9PV8weDE0NzA4KDB4ZWEpJiZfMHhkNThiMmJbXzB4MTQ3MDgoMHgxNzUpXTxfMHhkNThiMmJbXzB4MTQ3MDgoMHhlMSldO18weDM0ODIwNnx8XzB4ZDU4YjJiW18weDE0NzA4KDB4MTA3KV08XzB4NTI3NzkyfHxfMHgyNmRlOWE/KHRoaXNbXzB4MTQ3MDgoMHgxYjYpXShfMHgzMTc5MGIsXzB4NTc4NmU5LF8weGQ1OGIyYixfMHgyNmRlOWF8fHt9KSx0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NTc4NmU5LF8weDMxNzkwYikpOnRoaXNbXzB4MTQ3MDgoMHgxYjQpXShfMHgzMTc5MGIsXzB4ZDU4YjJiLF8weDU3ODZlOSxmdW5jdGlvbigpe3ZhciBfMHgyMzg1YmE9XzB4MTQ3MDg7XzB4NTJkZGZjPT09XzB4MjM4NWJhKDB4MTU5KXx8XzB4NTJkZGZjPT09J3VuZGVmaW5lZCd8fChkZWxldGUgXzB4MzE3OTBiW18weDIzODViYSgweDE3ZildLF8weDMxNzkwYltfMHgyMzg1YmEoMHgxMjUpXT0hMHgwKTt9KTt9cmV0dXJuIF8weDMxNzkwYjt9ZmluYWxseXtfMHhkNThiMmJbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDViM2U1NCxfMHhkNThiMmJbXzB4MTQ3MDgoMHgxMjkpXT1fMHg1Mjc3OTIsXzB4ZDU4YjJiW18weDE0NzA4KDB4MTUzKV09XzB4NTA4MzEyO319W18weDQyNDhkNigweGUzKV0oXzB4MzA1NzgxLF8weDEyMTJiMyxfMHgzYmViMjcsXzB4NTIyNjgzKXt2YXIgXzB4NGQyMDU3PV8weDQyNDhkNixfMHgyYjJhMzE9XzB4NTIyNjgzWydzdHJMZW5ndGgnXXx8XzB4M2JlYjI3W18weDRkMjA1NygweDE4NSldO2lmKChfMHgzMDU3ODE9PT1fMHg0ZDIwNTcoMHgxM2MpfHxfMHgzMDU3ODE9PT1fMHg0ZDIwNTcoMHgxMDEpKSYmXzB4MTIxMmIzW18weDRkMjA1NygweDE3ZildKXtsZXQgXzB4MTVkNjMyPV8weDEyMTJiM1sndmFsdWUnXVtfMHg0ZDIwNTcoMHgxNWUpXTtfMHgzYmViMjdbXzB4NGQyMDU3KDB4MTA0KV0rPV8weDE1ZDYzMixfMHgzYmViMjdbXzB4NGQyMDU3KDB4MTA0KV0+XzB4M2JlYjI3Wyd0b3RhbFN0ckxlbmd0aCddPyhfMHgxMjEyYjNbJ2NhcHBlZCddPScnLGRlbGV0ZSBfMHgxMjEyYjNbJ3ZhbHVlJ10pOl8weDE1ZDYzMj5fMHgyYjJhMzEmJihfMHgxMjEyYjNbXzB4NGQyMDU3KDB4MTI1KV09XzB4MTIxMmIzW18weDRkMjA1NygweDE3ZildW18weDRkMjA1NygweDExMildKDB4MCxfMHgyYjJhMzEpLGRlbGV0ZSBfMHgxMjEyYjNbJ3ZhbHVlJ10pO319WydfaXNNYXAnXShfMHgyYWM1NGYpe3ZhciBfMHgxOTIxYTA9XzB4NDI0OGQ2O3JldHVybiEhKF8weDJhYzU0ZiYmXzB4MzE5NzUxWydNYXAnXSYmdGhpc1tfMHgxOTIxYTAoMHgxNzcpXShfMHgyYWM1NGYpPT09XzB4MTkyMWEwKDB4MWE5KSYmXzB4MmFjNTRmW18weDE5MjFhMCgweDFhYyldKTt9WydfcHJvcGVydHlOYW1lJ10oXzB4NTNmZmViKXt2YXIgXzB4MmY5N2Q1PV8weDQyNDhkNjtpZihfMHg1M2ZmZWJbXzB4MmY5N2Q1KDB4MTJmKV0oL15cXFxcZCskLykpcmV0dXJuIF8weDUzZmZlYjt2YXIgXzB4MmI4ZjcyO3RyeXtfMHgyYjhmNzI9SlNPTltfMHgyZjk3ZDUoMHgxMWEpXSgnJytfMHg1M2ZmZWIpO31jYXRjaHtfMHgyYjhmNzI9J1xcXFx4MjInK3RoaXNbXzB4MmY5N2Q1KDB4MTc3KV0oXzB4NTNmZmViKSsnXFxcXHgyMic7fXJldHVybiBfMHgyYjhmNzJbXzB4MmY5N2Q1KDB4MTJmKV0oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHgyYjhmNzI9XzB4MmI4ZjcyWydzdWJzdHInXSgweDEsXzB4MmI4ZjcyW18weDJmOTdkNSgweDE1ZSldLTB4Mik6XzB4MmI4ZjcyPV8weDJiOGY3MltfMHgyZjk3ZDUoMHgxMzApXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpWydyZXBsYWNlJ10oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbXzB4MmY5N2Q1KDB4MTMwKV0oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDJiOGY3Mjt9W18weDQyNDhkNigweDFiNCldKF8weDViZWI2ZCxfMHg0Y2M2YzIsXzB4NTVkYjkyLF8weDVhNzZmNil7dmFyIF8weDgxM2JjOD1fMHg0MjQ4ZDY7dGhpc1tfMHg4MTNiYzgoMHgxNDApXShfMHg1YmViNmQsXzB4NGNjNmMyKSxfMHg1YTc2ZjYmJl8weDVhNzZmNigpLHRoaXNbXzB4ODEzYmM4KDB4ZGYpXShfMHg1NWRiOTIsXzB4NWJlYjZkKSx0aGlzW18weDgxM2JjOCgweDEwOSldKF8weDViZWI2ZCxfMHg0Y2M2YzIpO31bJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgzYzY5NjEsXzB4MTcyZmZhKXt2YXIgXzB4MTc0NDE3PV8weDQyNDhkNjt0aGlzW18weDE3NDQxNygweDEzZSldKF8weDNjNjk2MSxfMHgxNzJmZmEpLHRoaXNbXzB4MTc0NDE3KDB4MTg4KV0oXzB4M2M2OTYxLF8weDE3MmZmYSksdGhpc1snX3NldE5vZGVFeHByZXNzaW9uUGF0aCddKF8weDNjNjk2MSxfMHgxNzJmZmEpLHRoaXNbXzB4MTc0NDE3KDB4MTE3KV0oXzB4M2M2OTYxLF8weDE3MmZmYSk7fVtfMHg0MjQ4ZDYoMHgxM2UpXShfMHgyMzJmYjEsXzB4MTU0NmRjKXt9W18weDQyNDhkNigweDE4OCldKF8weDFiNTVjYSxfMHgxZGMxYjApe31bXzB4NDI0OGQ2KDB4MWE3KV0oXzB4MjkwZGRkLF8weDVlYTQyNSl7fVtfMHg0MjQ4ZDYoMHhlZCldKF8weDNjMTAyNil7cmV0dXJuIF8weDNjMTAyNj09PXRoaXNbJ191bmRlZmluZWQnXTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHg1ODE2ZGUsXzB4NTFhZDBmKXt2YXIgXzB4NGUzMjA3PV8weDQyNDhkNjt0aGlzW18weDRlMzIwNygweDFhNyldKF8weDU4MTZkZSxfMHg1MWFkMGYpLHRoaXNbXzB4NGUzMjA3KDB4MTk1KV0oXzB4NTgxNmRlKSxfMHg1MWFkMGZbXzB4NGUzMjA3KDB4ZTQpXSYmdGhpc1snX3NvcnRQcm9wcyddKF8weDU4MTZkZSksdGhpc1tfMHg0ZTMyMDcoMHgxMWMpXShfMHg1ODE2ZGUsXzB4NTFhZDBmKSx0aGlzW18weDRlMzIwNygweDE5YildKF8weDU4MTZkZSxfMHg1MWFkMGYpLHRoaXNbJ19jbGVhbk5vZGUnXShfMHg1ODE2ZGUpO31bXzB4NDI0OGQ2KDB4ZGYpXShfMHgzY2M1MmMsXzB4NGQzOGE3KXt2YXIgXzB4NDFlNGRkPV8weDQyNDhkNjtsZXQgXzB4NTNjOWI3O3RyeXtfMHgzMTk3NTFbXzB4NDFlNGRkKDB4ZjkpXSYmKF8weDUzYzliNz1fMHgzMTk3NTFbXzB4NDFlNGRkKDB4ZjkpXVtfMHg0MWU0ZGQoMHgxMzkpXSxfMHgzMTk3NTFbXzB4NDFlNGRkKDB4ZjkpXVsnZXJyb3InXT1mdW5jdGlvbigpe30pLF8weDNjYzUyYyYmdHlwZW9mIF8weDNjYzUyY1tfMHg0MWU0ZGQoMHgxNWUpXT09XzB4NDFlNGRkKDB4MTM1KSYmKF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxNWUpXT1fMHgzY2M1MmNbXzB4NDFlNGRkKDB4MTVlKV0pO31jYXRjaHt9ZmluYWxseXtfMHg1M2M5YjcmJihfMHgzMTk3NTFbXzB4NDFlNGRkKDB4ZjkpXVtfMHg0MWU0ZGQoMHgxMzkpXT1fMHg1M2M5YjcpO31pZihfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTkxKV09PT1fMHg0MWU0ZGQoMHgxMzUpfHxfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTkxKV09PT1fMHg0MWU0ZGQoMHgxN2MpKXtpZihpc05hTihfMHg0ZDM4YTdbJ3ZhbHVlJ10pKV8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxOWEpXT0hMHgwLGRlbGV0ZSBfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTdmKV07ZWxzZSBzd2l0Y2goXzB4NGQzOGE3W18weDQxZTRkZCgweDE3ZildKXtjYXNlIE51bWJlcltfMHg0MWU0ZGQoMHhmMSldOl8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxOTkpXT0hMHgwLGRlbGV0ZSBfMHg0ZDM4YTdbJ3ZhbHVlJ107YnJlYWs7Y2FzZSBOdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ106XzB4NGQzOGE3WyduZWdhdGl2ZUluZmluaXR5J109ITB4MCxkZWxldGUgXzB4NGQzOGE3W18weDQxZTRkZCgweDE3ZildO2JyZWFrO2Nhc2UgMHgwOnRoaXNbJ19pc05lZ2F0aXZlWmVybyddKF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxN2YpXSkmJihfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTYxKV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxOTEpXT09PV8weDQxZTRkZCgweGVhKSYmdHlwZW9mIF8weDNjYzUyY1tfMHg0MWU0ZGQoMHgxMDYpXT09XzB4NDFlNGRkKDB4MTNjKSYmXzB4M2NjNTJjW18weDQxZTRkZCgweDEwNildJiZfMHg0ZDM4YTdbJ25hbWUnXSYmXzB4M2NjNTJjW18weDQxZTRkZCgweDEwNildIT09XzB4NGQzOGE3WyduYW1lJ10mJihfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTQ2KV09XzB4M2NjNTJjWyduYW1lJ10pO31bJ19pc05lZ2F0aXZlWmVybyddKF8weDU0NWQ3MCl7dmFyIF8weDNmNWY3OD1fMHg0MjQ4ZDY7cmV0dXJuIDB4MS9fMHg1NDVkNzA9PT1OdW1iZXJbXzB4M2Y1Zjc4KDB4MTU3KV07fVtfMHg0MjQ4ZDYoMHgxNzgpXShfMHg0ODM0MmQpe3ZhciBfMHgxMTMzY2U9XzB4NDI0OGQ2OyFfMHg0ODM0MmRbXzB4MTEzM2NlKDB4MTlkKV18fCFfMHg0ODM0MmRbXzB4MTEzM2NlKDB4MTlkKV1bXzB4MTEzM2NlKDB4MTVlKV18fF8weDQ4MzQyZFsndHlwZSddPT09XzB4MTEzM2NlKDB4ZmIpfHxfMHg0ODM0MmRbXzB4MTEzM2NlKDB4MTkxKV09PT0nTWFwJ3x8XzB4NDgzNDJkW18weDExMzNjZSgweDE5MSldPT09XzB4MTEzM2NlKDB4MTZjKXx8XzB4NDgzNDJkW18weDExMzNjZSgweDE5ZCldW18weDExMzNjZSgweDE3YildKGZ1bmN0aW9uKF8weDM1OGY3NCxfMHgyNTE1MTkpe3ZhciBfMHgxOTdkOTQ9XzB4MTEzM2NlLF8weGJhMTk0ND1fMHgzNThmNzRbXzB4MTk3ZDk0KDB4MTA2KV1bXzB4MTk3ZDk0KDB4MThmKV0oKSxfMHgxMzhhZmY9XzB4MjUxNTE5W18weDE5N2Q5NCgweDEwNildWyd0b0xvd2VyQ2FzZSddKCk7cmV0dXJuIF8weGJhMTk0NDxfMHgxMzhhZmY/LTB4MTpfMHhiYTE5NDQ+XzB4MTM4YWZmPzB4MToweDA7fSk7fVtfMHg0MjQ4ZDYoMHgxMWMpXShfMHgxODAwOTUsXzB4OTRhN2JlKXt2YXIgXzB4YjNiNDNhPV8weDQyNDhkNjtpZighKF8weDk0YTdiZVtfMHhiM2I0M2EoMHgxMmIpXXx8IV8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXXx8IV8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXVsnbGVuZ3RoJ10pKXtmb3IodmFyIF8weDQ2NjUzZT1bXSxfMHg4MGMzMzg9W10sXzB4MTQyNDExPTB4MCxfMHgyZDYwMjE9XzB4MTgwMDk1W18weGIzYjQzYSgweDE5ZCldW18weGIzYjQzYSgweDE1ZSldO18weDE0MjQxMTxfMHgyZDYwMjE7XzB4MTQyNDExKyspe3ZhciBfMHg0MTMyODk9XzB4MTgwMDk1W18weGIzYjQzYSgweDE5ZCldW18weDE0MjQxMV07XzB4NDEzMjg5W18weGIzYjQzYSgweDE5MSldPT09XzB4YjNiNDNhKDB4ZWEpP18weDQ2NjUzZVtfMHhiM2I0M2EoMHgxMzQpXShfMHg0MTMyODkpOl8weDgwYzMzOFtfMHhiM2I0M2EoMHgxMzQpXShfMHg0MTMyODkpO31pZighKCFfMHg4MGMzMzhbXzB4YjNiNDNhKDB4MTVlKV18fF8weDQ2NjUzZVsnbGVuZ3RoJ108PTB4MSkpe18weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXT1fMHg4MGMzMzg7dmFyIF8weDIyNzRkZj17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHg0NjY1M2V9O3RoaXNbXzB4YjNiNDNhKDB4MTNlKV0oXzB4MjI3NGRmLF8weDk0YTdiZSksdGhpc1tfMHhiM2I0M2EoMHgxYTcpXShfMHgyMjc0ZGYsXzB4OTRhN2JlKSx0aGlzW18weGIzYjQzYSgweDE5NSldKF8weDIyNzRkZiksdGhpc1tfMHhiM2I0M2EoMHgxMTcpXShfMHgyMjc0ZGYsXzB4OTRhN2JlKSxfMHgyMjc0ZGZbJ2lkJ10rPSdcXFxceDIwZicsXzB4MTgwMDk1W18weGIzYjQzYSgweDE5ZCldW18weGIzYjQzYSgweDExOSldKF8weDIyNzRkZik7fX19W18weDQyNDhkNigweDE5YildKF8weDQ4OGUwNyxfMHgzMGRhNWYpe31bXzB4NDI0OGQ2KDB4MTk1KV0oXzB4MmZiOWNhKXt9W18weDQyNDhkNigweGQ0KV0oXzB4NDZlODhlKXt2YXIgXzB4MTE2N2M0PV8weDQyNDhkNjtyZXR1cm4gQXJyYXlbXzB4MTE2N2M0KDB4ZmEpXShfMHg0NmU4OGUpfHx0eXBlb2YgXzB4NDZlODhlPT0nb2JqZWN0JyYmdGhpc1tfMHgxMTY3YzQoMHgxNzcpXShfMHg0NmU4OGUpPT09XzB4MTE2N2M0KDB4MTE0KTt9Wydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4MzE0NGE4LF8weGQ4ZDVjNyl7fVsnX2NsZWFuTm9kZSddKF8weDM0OWNiNCl7dmFyIF8weDJhNTg3Mj1fMHg0MjQ4ZDY7ZGVsZXRlIF8weDM0OWNiNFtfMHgyYTU4NzIoMHgxNDgpXSxkZWxldGUgXzB4MzQ5Y2I0W18weDJhNTg3MigweDE4YSldLGRlbGV0ZSBfMHgzNDljYjRbXzB4MmE1ODcyKDB4MTViKV07fVtfMHg0MjQ4ZDYoMHgxNjQpXShfMHgxMzg3YjYsXzB4NTlkZTcwKXt9fWxldCBfMHg1OWNkNmQ9bmV3IF8weDMxODdhNygpLF8weDExZTQ5Mj17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHhiN2UzZGI9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfTtmdW5jdGlvbiBfMHgyZTgyMzIoXzB4Y2ZkMjkwLF8weDNlOTQxZixfMHgzMjgzYzIsXzB4MjMwNjVlLF8weDJhN2YwMSxfMHgzODc3OGUpe3ZhciBfMHg0MmNhMjk9XzB4NDI0OGQ2O2xldCBfMHg0MDFmZjYsXzB4NDg4NWRlO3RyeXtfMHg0ODg1ZGU9XzB4Mjk5ZGEzKCksXzB4NDAxZmY2PV8weDI0MDhiYVtfMHgzZTk0MWZdLCFfMHg0MDFmZjZ8fF8weDQ4ODVkZS1fMHg0MDFmZjZbJ3RzJ10+MHgxZjQmJl8weDQwMWZmNltfMHg0MmNhMjkoMHgxMDApXSYmXzB4NDAxZmY2W18weDQyY2EyOSgweDFhNCldL18weDQwMWZmNltfMHg0MmNhMjkoMHgxMDApXTwweDY0PyhfMHgyNDA4YmFbXzB4M2U5NDFmXT1fMHg0MDFmZjY9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHg0ODg1ZGV9LF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXT17fSk6XzB4NDg4NWRlLV8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVsndHMnXT4weDMyJiZfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bXzB4NDJjYTI5KDB4MTAwKV0mJl8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVsndGltZSddL18weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxMDApXTwweDY0JiYoXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildPXt9KTtsZXQgXzB4MzkwNWQ3PVtdLF8weDVjM2E1OT1fMHg0MDFmZjZbJ3JlZHVjZUxpbWl0cyddfHxfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bJ3JlZHVjZUxpbWl0cyddP18weGI3ZTNkYjpfMHgxMWU0OTIsXzB4NDA3MmQ2PV8weDljODVkMj0+e3ZhciBfMHg1NzU0ZWE9XzB4NDJjYTI5O2xldCBfMHhlYzc3MzU9e307cmV0dXJuIF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxOWQpXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4MTlkKV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweDE2MildPV8weDljODVkMltfMHg1NzU0ZWEoMHgxNjIpXSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTg1KV09XzB4OWM4NWQyW18weDU3NTRlYSgweDE4NSldLF8weGVjNzczNVsndG90YWxTdHJMZW5ndGgnXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4MTU1KV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweGUxKV09XzB4OWM4NWQyW18weDU3NTRlYSgweGUxKV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweDE2NyldPV8weDljODVkMltfMHg1NzU0ZWEoMHgxNjcpXSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4ZTQpXT0hMHgxLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxMmIpXT0hXzB4NWQyNjdhLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxMjkpXT0weDEsXzB4ZWM3NzM1W18weDU3NTRlYSgweDEwNyldPTB4MCxfMHhlYzc3MzVbJ2V4cElkJ109XzB4NTc1NGVhKDB4ZmYpLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxNzkpXT1fMHg1NzU0ZWEoMHhmZCksXzB4ZWM3NzM1W18weDU3NTRlYSgweDE4MildPSEweDAsXzB4ZWM3NzM1W18weDU3NTRlYSgweGU4KV09W10sXzB4ZWM3NzM1W18weDU3NTRlYSgweDE3NSldPTB4MCxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MThkKV09ITB4MCxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTA0KV09MHgwLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxYWQpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHhlYzc3MzU7fTtmb3IodmFyIF8weDRlZGI3OD0weDA7XzB4NGVkYjc4PF8weDJhN2YwMVtfMHg0MmNhMjkoMHgxNWUpXTtfMHg0ZWRiNzgrKylfMHgzOTA1ZDdbXzB4NDJjYTI5KDB4MTM0KV0oXzB4NTljZDZkWydzZXJpYWxpemUnXSh7J3RpbWVOb2RlJzpfMHhjZmQyOTA9PT1fMHg0MmNhMjkoMHgxYTQpfHx2b2lkIDB4MH0sXzB4MmE3ZjAxW18weDRlZGI3OF0sXzB4NDA3MmQ2KF8weDVjM2E1OSkse30pKTtpZihfMHhjZmQyOTA9PT0ndHJhY2UnKXtsZXQgXzB4MzRjYjkxPUVycm9yW18weDQyY2EyOSgweDEwYildO3RyeXtFcnJvcltfMHg0MmNhMjkoMHgxMGIpXT0weDEvMHgwLF8weDM5MDVkN1tfMHg0MmNhMjkoMHgxMzQpXShfMHg1OWNkNmRbXzB4NDJjYTI5KDB4MWI2KV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpWydzdGFjayddLF8weDQwNzJkNihfMHg1YzNhNTkpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yWydzdGFja1RyYWNlTGltaXQnXT1fMHgzNGNiOTE7fX1yZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDU2MzUwNCwnYXJncyc6W3sndHMnOl8weDMyODNjMiwnc2Vzc2lvbic6XzB4MjMwNjVlLCdhcmdzJzpfMHgzOTA1ZDcsJ2lkJzpfMHgzZTk0MWYsJ2NvbnRleHQnOl8weDM4Nzc4ZX1dfTt9Y2F0Y2goXzB4NDhmMGNlKXtyZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDU2MzUwNCwnYXJncyc6W3sndHMnOl8weDMyODNjMiwnc2Vzc2lvbic6XzB4MjMwNjVlLCdhcmdzJzpbeyd0eXBlJzpfMHg0MmNhMjkoMHgxMTMpLCdlcnJvcic6XzB4NDhmMGNlJiZfMHg0OGYwY2VbJ21lc3NhZ2UnXX1dLCdpZCc6XzB4M2U5NDFmLCdjb250ZXh0JzpfMHgzODc3OGV9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDQwMWZmNiYmXzB4NDg4NWRlKXtsZXQgXzB4MmZmMTg5PV8weDI5OWRhMygpO18weDQwMWZmNlsnY291bnQnXSsrLF8weDQwMWZmNltfMHg0MmNhMjkoMHgxYTQpXSs9XzB4NWRlYWQ1KF8weDQ4ODVkZSxfMHgyZmYxODkpLF8weDQwMWZmNlsndHMnXT1fMHgyZmYxODksXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDEwMCldKyssXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDFhNCldKz1fMHg1ZGVhZDUoXzB4NDg4NWRlLF8weDJmZjE4OSksXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildWyd0cyddPV8weDJmZjE4OSwoXzB4NDAxZmY2Wydjb3VudCddPjB4MzJ8fF8weDQwMWZmNltfMHg0MmNhMjkoMHgxYTQpXT4weDY0KSYmKF8weDQwMWZmNltfMHg0MmNhMjkoMHgxNDQpXT0hMHgwKSwoXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDEwMCldPjB4M2U4fHxfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bXzB4NDJjYTI5KDB4MWE0KV0+MHgxMmMpJiYoXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDE0NCldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDJlODIzMjt9KChfMHgzMDgwZTAsXzB4MTNhZDg1LF8weDRiMDE5OSxfMHgyZDQwZjYsXzB4NGI3ZTQ1LF8weDRlMGU3NyxfMHgzNzA1MmIsXzB4MjAzYmI0LF8weDJmOTkzMSxfMHgzNjYzMDMpPT57dmFyIF8weDUyMWE4ND1fMHgzMGQ0NmM7aWYoXzB4MzA4MGUwWydfY29uc29sZV9uaW5qYSddKXJldHVybiBfMHgzMDgwZTBbXzB4NTIxYTg0KDB4ZjQpXTtpZighSihfMHgzMDgwZTAsXzB4MjAzYmI0LF8weDRiN2U0NSkpcmV0dXJuIF8weDMwODBlMFsnX2NvbnNvbGVfbmluamEnXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4MzA4MGUwW18weDUyMWE4NCgweGY0KV07bGV0IF8weDM0OTNmYz1XKF8weDMwODBlMCksXzB4NGNhZDMwPV8weDM0OTNmY1tfMHg1MjFhODQoMHhmMCldLF8weDgxOTI3Mz1fMHgzNDkzZmNbXzB4NTIxYTg0KDB4MTZkKV0sXzB4NTQ0Y2MyPV8weDM0OTNmY1tfMHg1MjFhODQoMHgxNDkpXSxfMHgzZWIzZTY9eydoaXRzJzp7fSwndHMnOnt9fSxfMHgyNWZmMTQ9WShfMHgzMDgwZTAsXzB4MmY5OTMxLF8weDNlYjNlNixfMHg0ZTBlNzcpLF8weDE5MjMwMD1fMHgyNTg3M2Y9PntfMHgzZWIzZTZbJ3RzJ11bXzB4MjU4NzNmXT1fMHg4MTkyNzMoKTt9LF8weDQ0ZjUxMD0oXzB4NTU2MmZkLF8weDJmNjcwNik9Pnt2YXIgXzB4MmVjZDY2PV8weDUyMWE4NDtsZXQgXzB4MmNjOTE2PV8weDNlYjNlNlsndHMnXVtfMHgyZjY3MDZdO2lmKGRlbGV0ZSBfMHgzZWIzZTZbJ3RzJ11bXzB4MmY2NzA2XSxfMHgyY2M5MTYpe2xldCBfMHgxZjU4NDI9XzB4NGNhZDMwKF8weDJjYzkxNixfMHg4MTkyNzMoKSk7XzB4NTM3NTFjKF8weDI1ZmYxNChfMHgyZWNkNjYoMHgxYTQpLF8weDU1NjJmZCxfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsW18weDFmNTg0Ml0sXzB4MmY2NzA2KSk7fX0sXzB4MThmNzhiPV8weDI3ZTUzMz0+XzB4NzRhZGNjPT57dmFyIF8weDUzZjMxYT1fMHg1MjFhODQ7dHJ5e18weDE5MjMwMChfMHg3NGFkY2MpLF8weDI3ZTUzMyhfMHg3NGFkY2MpO31maW5hbGx5e18weDMwODBlMFtfMHg1M2YzMWEoMHhmOSldW18weDUzZjMxYSgweDFhNCldPV8weDI3ZTUzMzt9fSxfMHgxNTUzZDg9XzB4NGI2MjRiPT5fMHg1Y2E0NDE9Pnt2YXIgXzB4MmZmZmY3PV8weDUyMWE4NDt0cnl7bGV0IFtfMHg1ZTJkODYsXzB4NDZkYjUyXT1fMHg1Y2E0NDFbXzB4MmZmZmY3KDB4MTNkKV0oXzB4MmZmZmY3KDB4MTdkKSk7XzB4NDRmNTEwKF8weDQ2ZGI1MixfMHg1ZTJkODYpLF8weDRiNjI0YihfMHg1ZTJkODYpO31maW5hbGx5e18weDMwODBlMFtfMHgyZmZmZjcoMHhmOSldW18weDJmZmZmNygweDE0MildPV8weDRiNjI0Yjt9fTtfMHgzMDgwZTBbXzB4NTIxYTg0KDB4ZjQpXT17J2NvbnNvbGVMb2cnOihfMHgxOGUyODAsXzB4MWY0ZDE1KT0+e3ZhciBfMHgxYjk4ZjU9XzB4NTIxYTg0O18weDMwODBlMFsnY29uc29sZSddW18weDFiOThmNSgweDFhMCldW18weDFiOThmNSgweDEwNildIT09XzB4MWI5OGY1KDB4MTIzKSYmXzB4NTM3NTFjKF8weDI1ZmYxNChfMHgxYjk4ZjUoMHgxYTApLF8weDE4ZTI4MCxfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsXzB4MWY0ZDE1KSk7fSwnY29uc29sZVRyYWNlJzooXzB4NGM5NTZiLF8weGNkZGIxMSk9Pnt2YXIgXzB4NWRkMDI4PV8weDUyMWE4NDtfMHgzMDgwZTBbXzB4NWRkMDI4KDB4ZjkpXVtfMHg1ZGQwMjgoMHgxYTApXVtfMHg1ZGQwMjgoMHgxMDYpXSE9PV8weDVkZDAyOCgweDExMCkmJl8weDUzNzUxYyhfMHgyNWZmMTQoXzB4NWRkMDI4KDB4MTU2KSxfMHg0Yzk1NmIsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLF8weGNkZGIxMSkpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHgxMGEzMDg9XzB4NTIxYTg0O18weDMwODBlMFsnY29uc29sZSddW18weDEwYTMwOCgweDFhNCldPV8weDE4Zjc4YihfMHgzMDgwZTBbJ2NvbnNvbGUnXVtfMHgxMGEzMDgoMHgxYTQpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDQ0YTg4ND1fMHg1MjFhODQ7XzB4MzA4MGUwW18weDQ0YTg4NCgweGY5KV1bJ3RpbWVFbmQnXT1fMHgxNTUzZDgoXzB4MzA4MGUwW18weDQ0YTg4NCgweGY5KV1bXzB4NDRhODg0KDB4MTQyKV0pO30sJ2F1dG9Mb2cnOihfMHg0Nzk2NjAsXzB4ZDE2ODZjKT0+e3ZhciBfMHg0MDY0NmU9XzB4NTIxYTg0O18weDUzNzUxYyhfMHgyNWZmMTQoXzB4NDA2NDZlKDB4MWEwKSxfMHhkMTY4NmMsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLFtfMHg0Nzk2NjBdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg5MWZlZDUsXzB4NDBhODRmKT0+e3ZhciBfMHg3MzQ0ZTE9XzB4NTIxYTg0O18weDUzNzUxYyhfMHgyNWZmMTQoXzB4NzM0NGUxKDB4MWEwKSxfMHg5MWZlZDUsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLF8weDQwYTg0ZikpO30sJ2F1dG9UcmFjZSc6KF8weDM1NDZmNyxfMHgzZDhlYjUpPT57dmFyIF8weDI1NTEyZj1fMHg1MjFhODQ7XzB4NTM3NTFjKF8weDI1ZmYxNChfMHgyNTUxMmYoMHgxNTYpLF8weDNkOGViNSxfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsW18weDM1NDZmN10pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4MmI3MjJmLF8weDJkZjAzYik9Pnt2YXIgXzB4MjBhY2YxPV8weDUyMWE4NDtfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDIwYWNmMSgweDE1NiksXzB4MmI3MjJmLF8weDU0NGNjMigpLF8weGY0ODllMixfMHgyZGYwM2IpKTt9LCdhdXRvVGltZSc6KF8weDI5NzE5NCxfMHgxYTZiNjgsXzB4NTlkNjBiKT0+e18weDE5MjMwMChfMHg1OWQ2MGIpO30sJ2F1dG9UaW1lRW5kJzooXzB4NGIxMTc0LF8weDE5ZTRmOSxfMHgzZTk3NzMpPT57XzB4NDRmNTEwKF8weDE5ZTRmOSxfMHgzZTk3NzMpO30sJ2NvdmVyYWdlJzpfMHgxNjkwMzU9Pnt2YXIgXzB4OTRmZGQ9XzB4NTIxYTg0O18weDUzNzUxYyh7J21ldGhvZCc6XzB4OTRmZGQoMHgxODcpLCd2ZXJzaW9uJzpfMHg0ZTBlNzcsJ2FyZ3MnOlt7J2lkJzpfMHgxNjkwMzV9XX0pO319O2xldCBfMHg1Mzc1MWM9YihfMHgzMDgwZTAsXzB4MTNhZDg1LF8weDRiMDE5OSxfMHgyZDQwZjYsXzB4NGI3ZTQ1LF8weDM2NjMwMyksXzB4ZjQ4OWUyPV8weDMwODBlMFtfMHg1MjFhODQoMHhkMyldO3JldHVybiBfMHgzMDgwZTBbXzB4NTIxYTg0KDB4ZjQpXTt9KShnbG9iYWxUaGlzLF8weDMwZDQ2YygweGUwKSxfMHgzMGQ0NmMoMHhjYyksXFxcImM6XFxcXFxcXFxVc2Vyc1xcXFxcXFxcVVNFUlxcXFxcXFxcLnZzY29kZVxcXFxcXFxcZXh0ZW5zaW9uc1xcXFxcXFxcd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMS4wLjI0MFxcXFxcXFxcbm9kZV9tb2R1bGVzXFxcIixfMHgzMGQ0NmMoMHgxN2EpLF8weDMwZDQ2YygweGYyKSxfMHgzMGQ0NmMoMHhkOSksXzB4MzBkNDZjKDB4MWFhKSxfMHgzMGQ0NmMoMHgxMDMpLF8weDMwZDQ2YygweGVlKSk7XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcbmltcG9ydCAnc3dpcGVyL3N3aXBlci1idW5kbGUubWluLmNzcyc7XHJcbmltcG9ydCAnc3dpcGVyL3N3aXBlci5taW4uY3NzJztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3N3aXBlci1idW5kbGUuY3NzJztcclxuXHJcbi8vIGltcG9ydCAnc3dpcGVyL2Nzcyc7XHJcbi8vIGltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcclxuLy8gaW1wb3J0ICdzd2lwZXIvY3NzL2F1dG9wbGF5JztcclxuXHJcbmNvbnN0IEJyaWRlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYnJpZGUtY29udGFpbmVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3N0b3JpZXMtaW1nLWNvbnRhaW5lcic+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMHJlbScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzI1cmVtJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcnXHJcbiAgICAgICAgICBhbHQ9J2JyaWRlIHN0b3JpZXMnXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nZ3Jvb20tdGl0bGUnPkJyaWRlPC9oMj5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J2dyb29tLXBhcmFncmFwaCc+XHJcbiAgICAgICAgICBPdXQgb2YgdGhlIGJsdWVzIEkgc2F3IGEgcmVxdWVzdCwgSSBjaGVja2VkIGl0IGFuZCBpdCB3YXMgdGhpc1xyXG4gICAgICAgICAgYmVhdXRpZnVsIGxhZHkuIEkgYWNjZXB0ZWQgaXQgaW1tZWRpYXRlbHkgYW5kIHN0YXJ0ZWQgY2hlY2tpbmcgaGVyIFRMLlxyXG4gICAgICAgICAgT24gdGhlIDR0aCBvZiBBcHJpbCAyMDE2LCBJIHNlbnQgaGVyIGEgRE0gYW5kIHdlIHN0YXJ0ZWQgdGFsa2luZy4gV2VcclxuICAgICAgICAgIGJlY2FtZSByZWFsbHkgcmVhbGx5IGNsb3NlLiBMYXRlciBpbiBOb3ZlbWJlciBJIGFza2VkIGhlciB0byBiZSBteVxyXG4gICAgICAgICAgZ2lybGZyaWVuZCBhbmQgaGVyZSB3ZSBhcmUgdG9kYXnwn6WwIGdldHRpbmcgbWFycmllZC5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgR3Jvb20gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdicmlkZS1jb250YWluZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3Rvcmllcy1pbWctY29udGFpbmVyJz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwcmVtJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMjVyZW0nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZydcclxuICAgICAgICAgIGFsdD0nYnJpZGUgc3RvcmllcydcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdncm9vbS10aXRsZSc+R3Jvb208L2gyPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0nZ3Jvb20tcGFyYWdyYXBoJz5cclxuICAgICAgICAgIE91dCBvZiB0aGUgYmx1ZXMgSSBzYXcgYSByZXF1ZXN0LCBJIGNoZWNrZWQgaXQgYW5kIGl0IHdhcyB0aGlzXHJcbiAgICAgICAgICBiZWF1dGlmdWwgbGFkeS4gSSBhY2NlcHRlZCBpdCBpbW1lZGlhdGVseSBhbmQgc3RhcnRlZCBjaGVja2luZyBoZXIgVEwuXHJcbiAgICAgICAgICBPbiB0aGUgNHRoIG9mIEFwcmlsIDIwMTYsIEkgc2VudCBoZXIgYSBETSBhbmQgd2Ugc3RhcnRlZCB0YWxraW5nLiBXZVxyXG4gICAgICAgICAgYmVjYW1lIHJlYWxseSByZWFsbHkgY2xvc2UuIExhdGVyIGluIE5vdmVtYmVyIEkgYXNrZWQgaGVyIHRvIGJlIG15XHJcbiAgICAgICAgICBnaXJsZnJpZW5kIGFuZCBoZXJlIHdlIGFyZSB0b2RhefCfpbAgZ2V0dGluZyBtYXJyaWVkLlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5jb25zdCBTdG9yaWVzID0gKCkgPT4ge1xyXG4gIFN3aXBlckNvcmUudXNlKFtBdXRvcGxheV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN3aXBlclxyXG4gICAgICBzcGFjZUJldHdlZW49ezUwfVxyXG4gICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICBhdXRvcGxheT17e1xyXG4gICAgICAgIGRlbGF5OiAxMDAwMCxcclxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgIH19XHJcbiAgICAgIG1vZHVsZXM9e1tQYWdpbmF0aW9uLCBBdXRvcGxheV19XHJcbiAgICAgIHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcbiAgICAgIC8vICAgYXV0b3BsYXlcclxuICAgICAgLy8gICBtb2R1bGVzPXtbQXV0b3BsYXksIFBhZ2luYXRpb24sIE5hdmlnYXRpb25dfVxyXG4gICAgICBvblN3aXBlcj17KHN3aXBlcikgPT4gLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMjA3NjQ5NDI1NF8wYCxzd2lwZXIpKX1cclxuICAgICAgb25TbGlkZUNoYW5nZT17KCkgPT4gLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMjA3NjQ5NDI1NF8xYCwnc2xpZGUgY2hhbmdlJykpfVxyXG4gICAgPlxyXG4gICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPEJyaWRlIC8+eycgJ31cclxuICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgIDxHcm9vbSAvPnsnICd9XHJcbiAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICA8L1N3aXBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmllcztcclxuLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO2Z1bmN0aW9uIF8weDM5MWQoKXt2YXIgXzB4MmQ4YTk4PVsnbWVzc2FnZScsJ3Rlc3QnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywnNmhvQkhKeCcsJ2Z1bmN0aW9uJywnX2FsbG93ZWRUb1NlbmQnLCcxNVptTFZMbCcsJ19pc1VuZGVmaW5lZCcsJycsJ2VudicsJ2VsYXBzZWQnLCdQT1NJVElWRV9JTkZJTklUWScsJzEuMC4wJywnZGF0ZScsJ19jb25zb2xlX25pbmphJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCdub2RlTW9kdWxlcycsJ19hZGRQcm9wZXJ0eScsJ19ibGFja2xpc3RlZFByb3BlcnR5JywnY29uc29sZScsJ2lzQXJyYXknLCdhcnJheScsJzEzMTI3NjZmRkxMQUQnLCdyb290X2V4cCcsJ2NhbGwnLCdyb290X2V4cF9pZCcsJ2NvdW50JywnU3RyaW5nJywnd2FybicsJycsJ2FsbFN0ckxlbmd0aCcsJzIwQXVNWHdYJywnbmFtZScsJ2xldmVsJywnX2FkZE9iamVjdFByb3BlcnR5JywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnMTk3ODRSWldLR2QnLCdzdGFja1RyYWNlTGltaXQnLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdNYXAnLCczOTE1ekRjV3pYJywnaGl0cycsJ2Rpc2FibGVkVHJhY2UnLCdsb2NhdGlvbicsJ3N1YnN0cicsJ3Vua25vd24nLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ19pc1ByaW1pdGl2ZVR5cGUnLCdtZXRob2QnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnX2luTmV4dEVkZ2UnLCd1bnNoaWZ0Jywnc3RyaW5naWZ5JywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCdfYWRkRnVuY3Rpb25zTm9kZScsJ3ZlcnNpb25zJywnX3JlY29ubmVjdFRpbWVvdXQnLCdfZGF0ZVRvU3RyaW5nJywncmVtaXgnLCcxMjMyMjk3c21Jd01tJywnaG9zdG5hbWUnLCdkaXNhYmxlZExvZycsJ3BlcmZfaG9va3MnLCdjYXBwZWQnLCdbb2JqZWN0XFxcXHgyMERhdGVdJywnMTQyNTNoRHBJbm0nLCd0aGVuJywnZGVwdGgnLCdoYXNPd25Qcm9wZXJ0eScsJ25vRnVuY3Rpb25zJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdORVhUX1JVTlRJTUUnLCdfcF8nLCdtYXRjaCcsJ3JlcGxhY2UnLCdnZXRXZWJTb2NrZXRDbGFzcycsJ2pvaW4nLCdlZGdlJywncHVzaCcsJ251bWJlcicsJ190eXBlJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdwcm9jZXNzJywnZXJyb3InLCdfcF9sZW5ndGgnLCdkb2NrZXJpemVkQXBwJywnc3RyaW5nJywnc3BsaXQnLCdfc2V0Tm9kZUlkJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ3RpbWVFbmQnLCdfaXNNYXAnLCdyZWR1Y2VMaW1pdHMnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ2Z1bmNOYW1lJywnY2F0Y2gnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdub3cnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJzQzMk1oSE5GTycsJ19jb25uZWN0ZWQnLCd0b1N0cmluZycsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdkYXRhJywnaHJ0aW1lJywnZW51bWVyYWJsZScsJ2FzdHJvJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ19pbkJyb3dzZXInLCd0b3RhbFN0ckxlbmd0aCcsJ3RyYWNlJywnTkVHQVRJVkVfSU5GSU5JVFknLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywnbnVsbCcsJ251eHQnLCdfaGFzTWFwT25JdHNQYXRoJywnXFxcXHgyMHNlcnZlcicsJ3BvcnQnLCdsZW5ndGgnLCdfV2ViU29ja2V0Q2xhc3MnLCdwYXJlbnQnLCduZWdhdGl2ZVplcm8nLCdlbGVtZW50cycsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ2dsb2JhbCcsJ2NhcHBlZEVsZW1lbnRzJywnYXV0b0V4cGFuZE1heERlcHRoJywnSFRNTEFsbENvbGxlY3Rpb24nLCdTeW1ib2wnLCdwYXRoJywnYm9vbGVhbicsJ1NldCcsJ3RpbWVTdGFtcCcsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ19wX25hbWUnLCdfU3ltYm9sJywnX2tleVN0clJlZ0V4cCcsJ19kaXNwb3NlV2Vic29ja2V0JywnZ2V0dGVyJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ3N5bWJvbCcsJ19vYmplY3RUb1N0cmluZycsJ19zb3J0UHJvcHMnLCdyb290RXhwcmVzc2lvbicsJ3dlYnBhY2snLCdzb3J0JywnTnVtYmVyJywnOmxvZ1BvaW50SWQ6JywnODM3NjM2MG5URmZDbycsJ3ZhbHVlJywncHJvdG90eXBlJywnX3Byb3BlcnR5JywnYXV0b0V4cGFuZCcsJ29iamVjdCcsJ19pc1NldCcsJ3N0ckxlbmd0aCcsJ19zb2NrZXQnLCdjb3ZlcmFnZScsJ19zZXROb2RlUXVlcnlQYXRoJywnd3M6Ly8nLCdfaGFzU2V0T25JdHNQYXRoJywnYmlnaW50JywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywncmVzb2x2ZUdldHRlcnMnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCd0b0xvd2VyQ2FzZScsJ3VucmVmJywndHlwZScsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnX3NlbmRFcnJvck1lc3NhZ2UnLCc1Mzg4NlJCQkVmVycsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnX3Byb3BlcnR5TmFtZScsJ2Nsb3NlJywndW5kZWZpbmVkJywncG9zaXRpdmVJbmZpbml0eScsJ25hbicsJ19hZGRMb2FkTm9kZScsJ0Jvb2xlYW4nLCdwcm9wcycsJ25leHQuanMnLCdvbm9wZW4nLCdsb2cnLCdfY29ubmVjdFRvSG9zdE5vdycsJ3JlbG9hZCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ3RpbWUnLCdnZXQnLCdjb25zdHJ1Y3RvcicsJ19zZXROb2RlTGFiZWwnLCdpbmRleCcsJ1tvYmplY3RcXFxceDIwTWFwXScsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJEYW1pbGFyZVxcXCIsXFxcIjE2OS4yNTQuODAuODBcXFwiLFxcXCIxNzIuMzEuMTEyLjFcXFwiXSwnb25tZXNzYWdlJywnZm9yRWFjaCcsJ25vZGUnLCdnZXRQcm90b3R5cGVPZicsJ0J1ZmZlcicsJzQ0MzEwNDBDUUhFc28nLCdcXFxceDIwYnJvd3NlcicsJ19yZWdFeHBUb1N0cmluZycsJ2luY2x1ZGVzJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ2RlZmF1bHQnLCdzZXJpYWxpemUnLCc2MDk5MicsJ19fZXMnKydNb2R1bGUnLCdwZXJmb3JtYW5jZScsJ2JpbmQnLCdyZWFkeVN0YXRlJywnX2Nvbm5lY3RpbmcnLCdfbnVtYmVyUmVnRXhwJywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ19pc0FycmF5Jywnb25lcnJvcicsJ2hvc3QnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCdfd3MnLCcxNjk4MzYxODU2MjM5Jywnc2VuZCcsJ2NvbmNhdCcsJ2dhdGV3YXkuZG9ja2VyLmludGVybmFsJywnY3VycmVudCcsJ29uY2xvc2UnLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnMTI3LjAuMC4xJywnYXV0b0V4cGFuZExpbWl0JywnRXJyb3InLCdfY2FwSWZTdHJpbmcnLCdzb3J0UHJvcHMnLCdfdW5kZWZpbmVkJ107XzB4MzkxZD1mdW5jdGlvbigpe3JldHVybiBfMHgyZDhhOTg7fTtyZXR1cm4gXzB4MzkxZCgpO312YXIgXzB4MzBkNDZjPV8weDM5NGI7ZnVuY3Rpb24gXzB4Mzk0YihfMHgxMjJmMzIsXzB4NTY5ZjI4KXt2YXIgXzB4MzkxZGYzPV8weDM5MWQoKTtyZXR1cm4gXzB4Mzk0Yj1mdW5jdGlvbihfMHgzOTRiMzUsXzB4MmZiZTE2KXtfMHgzOTRiMzU9XzB4Mzk0YjM1LTB4Y2M7dmFyIF8weDExMTg5MD1fMHgzOTFkZjNbXzB4Mzk0YjM1XTtyZXR1cm4gXzB4MTExODkwO30sXzB4Mzk0YihfMHgxMjJmMzIsXzB4NTY5ZjI4KTt9KGZ1bmN0aW9uKF8weDFkM2U1MyxfMHgxZjI0ZTUpe3ZhciBfMHg0MzBjNmM9XzB4Mzk0YixfMHg0NTk1ZWM9XzB4MWQzZTUzKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg1NTA2YmY9cGFyc2VJbnQoXzB4NDMwYzZjKDB4ZWMpKS8weDEqKC1wYXJzZUludChfMHg0MzBjNmMoMHgxOTQpKS8weDIpKy1wYXJzZUludChfMHg0MzBjNmMoMHgxMjcpKS8weDMqKHBhcnNlSW50KF8weDQzMGM2YygweDEwNSkpLzB4NCkrLXBhcnNlSW50KF8weDQzMGM2YygweDFiMCkpLzB4NSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4ZTkpKS8weDYqKHBhcnNlSW50KF8weDQzMGM2YygweGZjKSkvMHg3KSstcGFyc2VJbnQoXzB4NDMwYzZjKDB4MTBhKSkvMHg4KihwYXJzZUludChfMHg0MzBjNmMoMHgxMGUpKS8weDkpKy1wYXJzZUludChfMHg0MzBjNmMoMHgxN2UpKS8weGErLXBhcnNlSW50KF8weDQzMGM2YygweDEyMSkpLzB4YiooLXBhcnNlSW50KF8weDQzMGM2YygweDE0YikpLzB4Yyk7aWYoXzB4NTUwNmJmPT09XzB4MWYyNGU1KWJyZWFrO2Vsc2UgXzB4NDU5NWVjWydwdXNoJ10oXzB4NDU5NWVjWydzaGlmdCddKCkpO31jYXRjaChfMHgxMDNiNGEpe18weDQ1OTVlY1sncHVzaCddKF8weDQ1OTVlY1snc2hpZnQnXSgpKTt9fX0oXzB4MzkxZCwweDk2ZGNmKSk7dmFyIGo9T2JqZWN0WydjcmVhdGUnXSxIPU9iamVjdFsnZGVmaW5lUHJvcGVydHknXSxHPU9iamVjdFtfMHgzMGQ0NmMoMHgxNmUpXSxlZT1PYmplY3RbJ2dldE93blByb3BlcnR5TmFtZXMnXSx0ZT1PYmplY3RbXzB4MzBkNDZjKDB4MWFlKV0sbmU9T2JqZWN0Wydwcm90b3R5cGUnXVtfMHgzMGQ0NmMoMHgxMmEpXSxyZT0oXzB4MWQ1ZmM2LF8weDc0NzgxZCxfMHg4ZjAzY2QsXzB4NDlmZjRmKT0+e3ZhciBfMHgxODBkY2Q9XzB4MzBkNDZjO2lmKF8weDc0NzgxZCYmdHlwZW9mIF8weDc0NzgxZD09XzB4MTgwZGNkKDB4MTgzKXx8dHlwZW9mIF8weDc0NzgxZD09XzB4MTgwZGNkKDB4ZWEpKXtmb3IobGV0IF8weDE2Y2Q5NSBvZiBlZShfMHg3NDc4MWQpKSFuZVsnY2FsbCddKF8weDFkNWZjNixfMHgxNmNkOTUpJiZfMHgxNmNkOTUhPT1fMHg4ZjAzY2QmJkgoXzB4MWQ1ZmM2LF8weDE2Y2Q5NSx7J2dldCc6KCk9Pl8weDc0NzgxZFtfMHgxNmNkOTVdLCdlbnVtZXJhYmxlJzohKF8weDQ5ZmY0Zj1HKF8weDc0NzgxZCxfMHgxNmNkOTUpKXx8XzB4NDlmZjRmW18weDE4MGRjZCgweDE1MSldfSk7fXJldHVybiBfMHgxZDVmYzY7fSx4PShfMHg1NjhiYzgsXzB4MmRlMWQ0LF8weDViNGM0Zik9PihfMHg1YjRjNGY9XzB4NTY4YmM4IT1udWxsP2oodGUoXzB4NTY4YmM4KSk6e30scmUoXzB4MmRlMWQ0fHwhXzB4NTY4YmM4fHwhXzB4NTY4YmM4W18weDMwZDQ2YygweGNkKV0/SChfMHg1YjRjNGYsXzB4MzBkNDZjKDB4MWI1KSx7J3ZhbHVlJzpfMHg1NjhiYzgsJ2VudW1lcmFibGUnOiEweDB9KTpfMHg1YjRjNGYsXzB4NTY4YmM4KSksWD1jbGFzc3tjb25zdHJ1Y3RvcihfMHg0N2YzOGMsXzB4NWMxYjA2LF8weDNmMjg1NixfMHg0NTdkM2QsXzB4MThmZjY0KXt2YXIgXzB4NGJiNjFkPV8weDMwZDQ2Yzt0aGlzW18weDRiYjYxZCgweDE2NSldPV8weDQ3ZjM4Yyx0aGlzW18weDRiYjYxZCgweGQ2KV09XzB4NWMxYjA2LHRoaXNbXzB4NGJiNjFkKDB4MTVkKV09XzB4M2YyODU2LHRoaXNbXzB4NGJiNjFkKDB4ZjYpXT1fMHg0NTdkM2QsdGhpc1snZG9ja2VyaXplZEFwcCddPV8weDE4ZmY2NCx0aGlzW18weDRiYjYxZCgweGViKV09ITB4MCx0aGlzW18weDRiYjYxZCgweDEzNyldPSEweDAsdGhpc1tfMHg0YmI2MWQoMHgxNGMpXT0hMHgxLHRoaXNbXzB4NGJiNjFkKDB4ZDEpXT0hMHgxLHRoaXNbJ19pbk5leHRFZGdlJ109XzB4NDdmMzhjW18weDRiYjYxZCgweDEzOCldPy5bXzB4NGJiNjFkKDB4ZWYpXT8uW18weDRiYjYxZCgweDEyZCldPT09J2VkZ2UnLHRoaXNbXzB4NGJiNjFkKDB4MTU0KV09IXRoaXNbXzB4NGJiNjFkKDB4MTY1KV1bXzB4NGJiNjFkKDB4MTM4KV0/LltfMHg0YmI2MWQoMHgxMWQpXT8uW18weDRiYjYxZCgweDFhZCldJiYhdGhpc1tfMHg0YmI2MWQoMHgxMTgpXSx0aGlzWydfV2ViU29ja2V0Q2xhc3MnXT1udWxsLHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J109MHgwLHRoaXNbXzB4NGJiNjFkKDB4MTQ1KV09MHgxNCx0aGlzW18weDRiYjYxZCgweDE3NCldPSdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0Jyx0aGlzW18weDRiYjYxZCgweDE5MyldPSh0aGlzW18weDRiYjYxZCgweDE1NCldP18weDRiYjYxZCgweDE0YSk6J0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJykrdGhpc1tfMHg0YmI2MWQoMHgxNzQpXTt9YXN5bmNbXzB4MzBkNDZjKDB4MTMxKV0oKXt2YXIgXzB4MWU5MGYxPV8weDMwZDQ2YztpZih0aGlzW18weDFlOTBmMSgweDE1ZildKXJldHVybiB0aGlzW18weDFlOTBmMSgweDE1ZildO2xldCBfMHg0YWU3N2M7aWYodGhpc1tfMHgxZTkwZjEoMHgxNTQpXXx8dGhpc1snX2luTmV4dEVkZ2UnXSlfMHg0YWU3N2M9dGhpc1tfMHgxZTkwZjEoMHgxNjUpXVsnV2ViU29ja2V0J107ZWxzZXtpZih0aGlzWydnbG9iYWwnXVtfMHgxZTkwZjEoMHgxMzgpXT8uWydfV2ViU29ja2V0J10pXzB4NGFlNzdjPXRoaXNbJ2dsb2JhbCddW18weDFlOTBmMSgweDEzOCldPy5bJ19XZWJTb2NrZXQnXTtlbHNlIHRyeXtsZXQgXzB4NGNlYjk1PWF3YWl0IGltcG9ydCgncGF0aCcpO18weDRhZTc3Yz0oYXdhaXQgaW1wb3J0KChhd2FpdCBpbXBvcnQoJ3VybCcpKVsncGF0aFRvRmlsZVVSTCddKF8weDRjZWI5NVtfMHgxZTkwZjEoMHgxMzIpXSh0aGlzW18weDFlOTBmMSgweGY2KV0sJ3dzL2luZGV4LmpzJykpWyd0b1N0cmluZyddKCkpKVtfMHgxZTkwZjEoMHgxYjUpXTt9Y2F0Y2h7dHJ5e18weDRhZTc3Yz1yZXF1aXJlKHJlcXVpcmUoXzB4MWU5MGYxKDB4MTZhKSlbXzB4MWU5MGYxKDB4MTMyKV0odGhpc1snbm9kZU1vZHVsZXMnXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHgxZTkwZjEoMHgxYTMpKTt9fX1yZXR1cm4gdGhpc1snX1dlYlNvY2tldENsYXNzJ109XzB4NGFlNzdjLF8weDRhZTc3Yzt9W18weDMwZDQ2YygweDFhMSldKCl7dmFyIF8weDQ5MDg5YT1fMHgzMGQ0NmM7dGhpc1tfMHg0OTA4OWEoMHhkMSldfHx0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J10+PXRoaXNbXzB4NDkwODlhKDB4MTQ1KV18fCh0aGlzW18weDQ5MDg5YSgweDEzNyldPSEweDEsdGhpc1tfMHg0OTA4OWEoMHhkMSldPSEweDAsdGhpc1tfMHg0OTA4OWEoMHgxMWIpXSsrLHRoaXNbXzB4NDkwODlhKDB4ZDgpXT1uZXcgUHJvbWlzZSgoXzB4MzRlYWZjLF8weDE0NDMyNCk9Pnt2YXIgXzB4ODc0ZmE0PV8weDQ5MDg5YTt0aGlzW18weDg3NGZhNCgweDEzMSldKClbXzB4ODc0ZmE0KDB4MTI4KV0oXzB4NGJhZjU4PT57dmFyIF8weDQxZGRhYz1fMHg4NzRmYTQ7bGV0IF8weDI1NzQzYj1uZXcgXzB4NGJhZjU4KF8weDQxZGRhYygweDE4OSkrKCF0aGlzWydfaW5Ccm93c2VyJ10mJnRoaXNbXzB4NDFkZGFjKDB4MTNiKV0/XzB4NDFkZGFjKDB4ZGMpOnRoaXNbXzB4NDFkZGFjKDB4ZDYpXSkrJzonK3RoaXNbXzB4NDFkZGFjKDB4MTVkKV0pO18weDI1NzQzYltfMHg0MWRkYWMoMHhkNSldPSgpPT57dmFyIF8weDJiNGY2NT1fMHg0MWRkYWM7dGhpc1tfMHgyYjRmNjUoMHhlYildPSEweDEsdGhpc1tfMHgyYjRmNjUoMHgxNzIpXShfMHgyNTc0M2IpLHRoaXNbXzB4MmI0ZjY1KDB4ZjUpXSgpLF8weDE0NDMyNChuZXcgRXJyb3IoJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InKSk7fSxfMHgyNTc0M2JbXzB4NDFkZGFjKDB4MTlmKV09KCk9Pnt2YXIgXzB4NDIwODJhPV8weDQxZGRhYzt0aGlzW18weDQyMDgyYSgweDE1NCldfHxfMHgyNTc0M2JbXzB4NDIwODJhKDB4MTg2KV0mJl8weDI1NzQzYltfMHg0MjA4MmEoMHgxODYpXVsndW5yZWYnXSYmXzB4MjU3NDNiW18weDQyMDgyYSgweDE4NildW18weDQyMDgyYSgweDE5MCldKCksXzB4MzRlYWZjKF8weDI1NzQzYik7fSxfMHgyNTc0M2JbXzB4NDFkZGFjKDB4ZGUpXT0oKT0+e3ZhciBfMHgxMzI5NzI9XzB4NDFkZGFjO3RoaXNbXzB4MTMyOTcyKDB4MTM3KV09ITB4MCx0aGlzW18weDEzMjk3MigweDE3MildKF8weDI1NzQzYiksdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpO30sXzB4MjU3NDNiW18weDQxZGRhYygweDFhYildPV8weDFhZmQxMT0+e3ZhciBfMHgxOGQ2YjU9XzB4NDFkZGFjO3RyeXtfMHgxYWZkMTEmJl8weDFhZmQxMVtfMHgxOGQ2YjUoMHgxNGYpXSYmdGhpc1tfMHgxOGQ2YjUoMHgxNTQpXSYmSlNPTlsncGFyc2UnXShfMHgxYWZkMTFbJ2RhdGEnXSlbXzB4MThkNmI1KDB4MTE2KV09PT1fMHgxOGQ2YjUoMHgxYTIpJiZ0aGlzWydnbG9iYWwnXVtfMHgxOGQ2YjUoMHgxMTEpXVtfMHgxOGQ2YjUoMHgxYTIpXSgpO31jYXRjaHt9fTt9KVtfMHg4NzRmYTQoMHgxMjgpXShfMHgxYjI0ZDI9Pih0aGlzW18weDg3NGZhNCgweDE0YyldPSEweDAsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLHRoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MSx0aGlzW18weDg3NGZhNCgweGViKV09ITB4MCx0aGlzW18weDg3NGZhNCgweDExYildPTB4MCxfMHgxYjI0ZDIpKVtfMHg4NzRmYTQoMHgxNDcpXShfMHgzN2Y1YTA9Pih0aGlzW18weDg3NGZhNCgweDE0YyldPSEweDEsdGhpc1tfMHg4NzRmYTQoMHhkMSldPSEweDEsY29uc29sZVtfMHg4NzRmYTQoMHgxMDIpXShfMHg4NzRmYTQoMHgxOTIpK3RoaXNbXzB4ODc0ZmE0KDB4MTc0KV0pLF8weDE0NDMyNChuZXcgRXJyb3IoJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcrKF8weDM3ZjVhMCYmXzB4MzdmNWEwW18weDg3NGZhNCgweGU2KV0pKSkpKTt9KSk7fVsnX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHg0OWE0NjEpe3ZhciBfMHg0Zjg4Njk9XzB4MzBkNDZjO3RoaXNbXzB4NGY4ODY5KDB4MTRjKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDE7dHJ5e18weDQ5YTQ2MVtfMHg0Zjg4NjkoMHhkZSldPW51bGwsXzB4NDlhNDYxWydvbmVycm9yJ109bnVsbCxfMHg0OWE0NjFbXzB4NGY4ODY5KDB4MTlmKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHg0OWE0NjFbXzB4NGY4ODY5KDB4ZDApXTwweDImJl8weDQ5YTQ2MVtfMHg0Zjg4NjkoMHgxOTcpXSgpO31jYXRjaHt9fVsnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpe3ZhciBfMHgxNTk3OWI9XzB4MzBkNDZjO2NsZWFyVGltZW91dCh0aGlzWydfcmVjb25uZWN0VGltZW91dCddKSwhKHRoaXNbXzB4MTU5NzliKDB4MTFiKV0+PXRoaXNbXzB4MTU5NzliKDB4MTQ1KV0pJiYodGhpc1tfMHgxNTk3OWIoMHgxMWUpXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDU1N2I2OD1fMHgxNTk3OWI7dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzWydfY29ubmVjdGluZyddfHwodGhpc1snX2Nvbm5lY3RUb0hvc3ROb3cnXSgpLHRoaXNbXzB4NTU3YjY4KDB4ZDgpXT8uW18weDU1N2I2OCgweDE0NyldKCgpPT50aGlzW18weDU1N2I2OCgweGY1KV0oKSkpO30sMHgxZjQpLHRoaXNbXzB4MTU5NzliKDB4MTFlKV1bXzB4MTU5NzliKDB4MTkwKV0mJnRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J11bXzB4MTU5NzliKDB4MTkwKV0oKSk7fWFzeW5jW18weDMwZDQ2YygweGRhKV0oXzB4MzllNzgyKXt2YXIgXzB4NDg2MGY5PV8weDMwZDQ2Yzt0cnl7aWYoIXRoaXNbJ19hbGxvd2VkVG9TZW5kJ10pcmV0dXJuO3RoaXNbXzB4NDg2MGY5KDB4MTM3KV0mJnRoaXNbXzB4NDg2MGY5KDB4MWExKV0oKSwoYXdhaXQgdGhpc1snX3dzJ10pW18weDQ4NjBmOSgweGRhKV0oSlNPTlsnc3RyaW5naWZ5J10oXzB4MzllNzgyKSk7fWNhdGNoKF8weDFlMTdlMCl7Y29uc29sZVtfMHg0ODYwZjkoMHgxMDIpXSh0aGlzW18weDQ4NjBmOSgweDE5MyldKyc6XFxcXHgyMCcrKF8weDFlMTdlMCYmXzB4MWUxN2UwW18weDQ4NjBmOSgweGU2KV0pKSx0aGlzW18weDQ4NjBmOSgweGViKV09ITB4MSx0aGlzW18weDQ4NjBmOSgweGY1KV0oKTt9fX07ZnVuY3Rpb24gYihfMHg0NmQwYjEsXzB4NGMxOGViLF8weDMyMWZmNyxfMHg2NzY5MTEsXzB4NGM4Mjk5LF8weDU0MjU1YSl7dmFyIF8weDM5MzdlNz1fMHgzMGQ0NmM7bGV0IF8weDUwZTBmOT1fMHgzMjFmZjdbXzB4MzkzN2U3KDB4MTNkKV0oJywnKVsnbWFwJ10oXzB4NDFkODc9Pnt2YXIgXzB4NTE3OWEyPV8weDM5MzdlNzt0cnl7XzB4NDZkMGIxWydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ118fCgoXzB4NGM4Mjk5PT09XzB4NTE3OWEyKDB4MTllKXx8XzB4NGM4Mjk5PT09XzB4NTE3OWEyKDB4MTIwKXx8XzB4NGM4Mjk5PT09XzB4NTE3OWEyKDB4MTUyKSkmJihfMHg0YzgyOTkrPSFfMHg0NmQwYjFbXzB4NTE3OWEyKDB4MTM4KV0/LltfMHg1MTc5YTIoMHgxMWQpXT8uW18weDUxNzlhMigweDFhZCldJiZfMHg0NmQwYjFbXzB4NTE3OWEyKDB4MTM4KV0/LlsnZW52J10/LltfMHg1MTc5YTIoMHgxMmQpXSE9PSdlZGdlJz9fMHg1MTc5YTIoMHgxYjEpOl8weDUxNzlhMigweDE1YykpLF8weDQ2ZDBiMVsnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHg0YzgyOTl9KTtsZXQgXzB4N2FhYmJmPW5ldyBYKF8weDQ2ZDBiMSxfMHg0YzE4ZWIsXzB4NDFkODcsXzB4Njc2OTExLF8weDU0MjU1YSk7cmV0dXJuIF8weDdhYWJiZlsnc2VuZCddW18weDUxNzlhMigweGNmKV0oXzB4N2FhYmJmKTt9Y2F0Y2goXzB4MWNiMDZmKXtyZXR1cm4gY29uc29sZVtfMHg1MTc5YTIoMHgxMDIpXSgnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLF8weDFjYjA2ZiYmXzB4MWNiMDZmWydtZXNzYWdlJ10pLCgpPT57fTt9fSk7cmV0dXJuIF8weDI3N2UwND0+XzB4NTBlMGY5W18weDM5MzdlNygweDFhYyldKF8weGE0MmZiPT5fMHhhNDJmYihfMHgyNzdlMDQpKTt9ZnVuY3Rpb24gVyhfMHgxZWM1YzIpe3ZhciBfMHgzZjA0OTU9XzB4MzBkNDZjO2xldCBfMHgxMTQyN2Y9ZnVuY3Rpb24oXzB4M2Q1NTgzLF8weGY1MGE3KXtyZXR1cm4gXzB4ZjUwYTctXzB4M2Q1NTgzO30sXzB4MjU1MTVlO2lmKF8weDFlYzVjMltfMHgzZjA0OTUoMHhjZSldKV8weDI1NTE1ZT1mdW5jdGlvbigpe3ZhciBfMHgzODQwNTg9XzB4M2YwNDk1O3JldHVybiBfMHgxZWM1YzJbXzB4Mzg0MDU4KDB4Y2UpXVsnbm93J10oKTt9O2Vsc2V7aWYoXzB4MWVjNWMyW18weDNmMDQ5NSgweDEzOCldJiZfMHgxZWM1YzJbXzB4M2YwNDk1KDB4MTM4KV1bXzB4M2YwNDk1KDB4MTUwKV0mJl8weDFlYzVjMltfMHgzZjA0OTUoMHgxMzgpXT8uW18weDNmMDQ5NSgweGVmKV0/LltfMHgzZjA0OTUoMHgxMmQpXSE9PV8weDNmMDQ5NSgweDEzMykpXzB4MjU1MTVlPWZ1bmN0aW9uKCl7dmFyIF8weDRiOWE4Yz1fMHgzZjA0OTU7cmV0dXJuIF8weDFlYzVjMltfMHg0YjlhOGMoMHgxMzgpXVsnaHJ0aW1lJ10oKTt9LF8weDExNDI3Zj1mdW5jdGlvbihfMHgxMzQwZjIsXzB4NDVlOTAwKXtyZXR1cm4gMHgzZTgqKF8weDQ1ZTkwMFsweDBdLV8weDEzNDBmMlsweDBdKSsoXzB4NDVlOTAwWzB4MV0tXzB4MTM0MGYyWzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDRhMTljOH09cmVxdWlyZShfMHgzZjA0OTUoMHgxMjQpKTtfMHgyNTUxNWU9ZnVuY3Rpb24oKXt2YXIgXzB4NDk1NTcyPV8weDNmMDQ5NTtyZXR1cm4gXzB4NGExOWM4W18weDQ5NTU3MigweDE0OSldKCk7fTt9Y2F0Y2h7XzB4MjU1MTVlPWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4MTE0MjdmLCd0aW1lU3RhbXAnOl8weDI1NTE1ZSwnbm93JzooKT0+RGF0ZVtfMHgzZjA0OTUoMHgxNDkpXSgpfTt9ZnVuY3Rpb24gSihfMHgyYzk5ZmQsXzB4MTI5OGY5LF8weDdhNDQ1MCl7dmFyIF8weDJiNjU2MD1fMHgzMGQ0NmM7aWYoXzB4MmM5OWZkW18weDJiNjU2MCgweDE4YyldIT09dm9pZCAweDApcmV0dXJuIF8weDJjOTlmZFtfMHgyYjY1NjAoMHgxOGMpXTtsZXQgXzB4MTdkZTI4PV8weDJjOTlmZFtfMHgyYjY1NjAoMHgxMzgpXT8uWyd2ZXJzaW9ucyddPy5bXzB4MmI2NTYwKDB4MWFkKV18fF8weDJjOTlmZFtfMHgyYjY1NjAoMHgxMzgpXT8uW18weDJiNjU2MCgweGVmKV0/LltfMHgyYjY1NjAoMHgxMmQpXT09PSdlZGdlJztyZXR1cm4gXzB4MTdkZTI4JiZfMHg3YTQ0NTA9PT1fMHgyYjY1NjAoMHgxNWEpP18weDJjOTlmZFtfMHgyYjY1NjAoMHgxOGMpXT0hMHgxOl8weDJjOTlmZFtfMHgyYjY1NjAoMHgxOGMpXT1fMHgxN2RlMjh8fCFfMHgxMjk4Zjl8fF8weDJjOTlmZFsnbG9jYXRpb24nXT8uWydob3N0bmFtZSddJiZfMHgxMjk4ZjlbXzB4MmI2NTYwKDB4MWIzKV0oXzB4MmM5OWZkW18weDJiNjU2MCgweDExMSldW18weDJiNjU2MCgweDEyMildKSxfMHgyYzk5ZmRbXzB4MmI2NTYwKDB4MThjKV07fWZ1bmN0aW9uIFkoXzB4MzE5NzUxLF8weDVkMjY3YSxfMHgyNDA4YmEsXzB4NTYzNTA0KXt2YXIgXzB4NDI0OGQ2PV8weDMwZDQ2YztfMHgzMTk3NTE9XzB4MzE5NzUxLF8weDVkMjY3YT1fMHg1ZDI2N2EsXzB4MjQwOGJhPV8weDI0MDhiYSxfMHg1NjM1MDQ9XzB4NTYzNTA0O2xldCBfMHg1YzZiYTQ9VyhfMHgzMTk3NTEpLF8weDVkZWFkNT1fMHg1YzZiYTRbXzB4NDI0OGQ2KDB4ZjApXSxfMHgyOTlkYTM9XzB4NWM2YmE0Wyd0aW1lU3RhbXAnXTtjbGFzcyBfMHgzMTg3YTd7Y29uc3RydWN0b3IoKXt2YXIgXzB4NTRjNTRiPV8weDQyNDhkNjt0aGlzW18weDU0YzU0YigweDE3MSldPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg1NGM1NGIoMHhkMildPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1snX3F1b3RlZFJlZ0V4cCddPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbXzB4NTRjNTRiKDB4ZTUpXT1fMHgzMTk3NTFbXzB4NTRjNTRiKDB4MTk4KV0sdGhpc1tfMHg1NGM1NGIoMHhkNyldPV8weDMxOTc1MVtfMHg1NGM1NGIoMHgxNjgpXSx0aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ109T2JqZWN0W18weDU0YzU0YigweDE2ZSldLHRoaXNbXzB4NTRjNTRiKDB4MTJjKV09T2JqZWN0W18weDU0YzU0YigweDE1OCldLHRoaXNbXzB4NTRjNTRiKDB4MTcwKV09XzB4MzE5NzUxW18weDU0YzU0YigweDE2OSldLHRoaXNbXzB4NTRjNTRiKDB4MWIyKV09UmVnRXhwWydwcm90b3R5cGUnXVtfMHg1NGM1NGIoMHgxNGQpXSx0aGlzW18weDU0YzU0YigweDExZildPURhdGVbJ3Byb3RvdHlwZSddW18weDU0YzU0YigweDE0ZCldO31bXzB4NDI0OGQ2KDB4MWI2KV0oXzB4NDNiZmM3LF8weDI1ZDQ1MSxfMHgxZTcxYzUsXzB4NTA4YTBmKXt2YXIgXzB4MTM2NjkyPV8weDQyNDhkNixfMHgyMmY3Yjg9dGhpcyxfMHgyN2E0NzM9XzB4MWU3MWM1WydhdXRvRXhwYW5kJ107ZnVuY3Rpb24gXzB4NDEyYmZlKF8weDE1NjFmNyxfMHgyYTA5ODcsXzB4NThmMTMwKXt2YXIgXzB4MjFjOTFkPV8weDM5NGI7XzB4MmEwOTg3W18weDIxYzkxZCgweDE5MSldPV8weDIxYzkxZCgweDExMyksXzB4MmEwOTg3W18weDIxYzkxZCgweDEzOSldPV8weDE1NjFmN1tfMHgyMWM5MWQoMHhlNildLF8weDFjMzZiMD1fMHg1OGYxMzBbJ25vZGUnXVtfMHgyMWM5MWQoMHhkZCldLF8weDU4ZjEzMFtfMHgyMWM5MWQoMHgxYWQpXVtfMHgyMWM5MWQoMHhkZCldPV8weDJhMDk4NyxfMHgyMmY3YjhbXzB4MjFjOTFkKDB4MTQwKV0oXzB4MmEwOTg3LF8weDU4ZjEzMCk7fXRyeXtfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTA3KV0rKyxfMHgxZTcxYzVbJ2F1dG9FeHBhbmQnXSYmXzB4MWU3MWM1W18weDEzNjY5MigweGU4KV1bXzB4MTM2NjkyKDB4MTM0KV0oXzB4MjVkNDUxKTt2YXIgXzB4MzE1NzQzLF8weDU0MWFhOCxfMHgzY2NlZDksXzB4MmEzNGExLF8weDIwYjRmMj1bXSxfMHg0ZGE2M2I9W10sXzB4NTU2OTc5LF8weDJkMmQ2ZD10aGlzW18weDEzNjY5MigweDEzNildKF8weDI1ZDQ1MSksXzB4ZDgzMmM1PV8weDJkMmQ2ZD09PSdhcnJheScsXzB4MjY4YzQwPSEweDEsXzB4MTMwZjNlPV8weDJkMmQ2ZD09PV8weDEzNjY5MigweGVhKSxfMHgzNjliMGU9dGhpc1tfMHgxMzY2OTIoMHgxMTUpXShfMHgyZDJkNmQpLF8weDQ5ODQxOD10aGlzWydfaXNQcmltaXRpdmVXcmFwcGVyVHlwZSddKF8weDJkMmQ2ZCksXzB4MzQwZjgzPV8weDM2OWIwZXx8XzB4NDk4NDE4LF8weDI0OTNiZT17fSxfMHgzNmYzY2M9MHgwLF8weDNhMmZkYT0hMHgxLF8weDFjMzZiMCxfMHgzNDhiZjE9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxMjkpXSl7aWYoXzB4ZDgzMmM1KXtpZihfMHg1NDFhYTg9XzB4MjVkNDUxW18weDEzNjY5MigweDE1ZSldLF8weDU0MWFhOD5fMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTYyKV0pe2ZvcihfMHgzY2NlZDk9MHgwLF8weDJhMzRhMT1fMHgxZTcxYzVbJ2VsZW1lbnRzJ10sXzB4MzE1NzQzPV8weDNjY2VkOTtfMHgzMTU3NDM8XzB4MmEzNGExO18weDMxNTc0MysrKV8weDRkYTYzYltfMHgxMzY2OTIoMHgxMzQpXShfMHgyMmY3YjhbXzB4MTM2NjkyKDB4ZjcpXShfMHgyMGI0ZjIsXzB4MjVkNDUxLF8weDJkMmQ2ZCxfMHgzMTU3NDMsXzB4MWU3MWM1KSk7XzB4NDNiZmM3W18weDEzNjY5MigweDE2NildPSEweDA7fWVsc2V7Zm9yKF8weDNjY2VkOT0weDAsXzB4MmEzNGExPV8weDU0MWFhOCxfMHgzMTU3NDM9XzB4M2NjZWQ5O18weDMxNTc0MzxfMHgyYTM0YTE7XzB4MzE1NzQzKyspXzB4NGRhNjNiW18weDEzNjY5MigweDEzNCldKF8weDIyZjdiOFtfMHgxMzY2OTIoMHhmNyldKF8weDIwYjRmMixfMHgyNWQ0NTEsXzB4MmQyZDZkLF8weDMxNTc0MyxfMHgxZTcxYzUpKTt9XzB4MWU3MWM1W18weDEzNjY5MigweDE3NSldKz1fMHg0ZGE2M2JbJ2xlbmd0aCddO31pZighKF8weDJkMmQ2ZD09PSdudWxsJ3x8XzB4MmQyZDZkPT09XzB4MTM2NjkyKDB4MTk4KSkmJiFfMHgzNjliMGUmJl8weDJkMmQ2ZCE9PV8weDEzNjY5MigweDEwMSkmJl8weDJkMmQ2ZCE9PV8weDEzNjY5MigweDFhZikmJl8weDJkMmQ2ZCE9PSdiaWdpbnQnKXt2YXIgXzB4MmNjN2MzPV8weDUwOGEwZltfMHgxMzY2OTIoMHgxOWQpXXx8XzB4MWU3MWM1Wydwcm9wcyddO2lmKHRoaXNbXzB4MTM2NjkyKDB4MTg0KV0oXzB4MjVkNDUxKT8oXzB4MzE1NzQzPTB4MCxfMHgyNWQ0NTFbXzB4MTM2NjkyKDB4MWFjKV0oZnVuY3Rpb24oXzB4NWI1MTEwKXt2YXIgXzB4NThjM2NiPV8weDEzNjY5MjtpZihfMHgzNmYzY2MrKyxfMHgxZTcxYzVbXzB4NThjM2NiKDB4MTc1KV0rKyxfMHgzNmYzY2M+XzB4MmNjN2MzKXtfMHgzYTJmZGE9ITB4MDtyZXR1cm47fWlmKCFfMHgxZTcxYzVbXzB4NThjM2NiKDB4MTUzKV0mJl8weDFlNzFjNVtfMHg1OGMzY2IoMHgxODIpXSYmXzB4MWU3MWM1W18weDU4YzNjYigweDE3NSldPl8weDFlNzFjNVtfMHg1OGMzY2IoMHhlMSldKXtfMHgzYTJmZGE9ITB4MDtyZXR1cm47fV8weDRkYTYzYltfMHg1OGMzY2IoMHgxMzQpXShfMHgyMmY3YjhbXzB4NThjM2NiKDB4ZjcpXShfMHgyMGI0ZjIsXzB4MjVkNDUxLF8weDU4YzNjYigweDE2YyksXzB4MzE1NzQzKyssXzB4MWU3MWM1LGZ1bmN0aW9uKF8weGZjYjVjNSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weGZjYjVjNTt9O30oXzB4NWI1MTEwKSkpO30pKTp0aGlzW18weDEzNjY5MigweDE0MyldKF8weDI1ZDQ1MSkmJl8weDI1ZDQ1MVsnZm9yRWFjaCddKGZ1bmN0aW9uKF8weDIwNTZmNSxfMHgzMTMwMTApe3ZhciBfMHg1NWE3ZmQ9XzB4MTM2NjkyO2lmKF8weDM2ZjNjYysrLF8weDFlNzFjNVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDM2ZjNjYz5fMHgyY2M3YzMpe18weDNhMmZkYT0hMHgwO3JldHVybjt9aWYoIV8weDFlNzFjNVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHgxZTcxYzVbJ2F1dG9FeHBhbmQnXSYmXzB4MWU3MWM1WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDFlNzFjNVtfMHg1NWE3ZmQoMHhlMSldKXtfMHgzYTJmZGE9ITB4MDtyZXR1cm47fXZhciBfMHgyN2I3NTU9XzB4MzEzMDEwWyd0b1N0cmluZyddKCk7XzB4MjdiNzU1WydsZW5ndGgnXT4weDY0JiYoXzB4MjdiNzU1PV8weDI3Yjc1NVsnc2xpY2UnXSgweDAsMHg2NCkrJy4uLicpLF8weDRkYTYzYltfMHg1NWE3ZmQoMHgxMzQpXShfMHgyMmY3YjhbXzB4NTVhN2ZkKDB4ZjcpXShfMHgyMGI0ZjIsXzB4MjVkNDUxLF8weDU1YTdmZCgweDEwZCksXzB4MjdiNzU1LF8weDFlNzFjNSxmdW5jdGlvbihfMHg1OGRkZTkpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHg1OGRkZTk7fTt9KF8weDIwNTZmNSkpKTt9KSwhXzB4MjY4YzQwKXt0cnl7Zm9yKF8weDU1Njk3OSBpbiBfMHgyNWQ0NTEpaWYoIShfMHhkODMyYzUmJl8weDM0OGJmMVtfMHgxMzY2OTIoMHhlNyldKF8weDU1Njk3OSkpJiYhdGhpc1tfMHgxMzY2OTIoMHhmOCldKF8weDI1ZDQ1MSxfMHg1NTY5NzksXzB4MWU3MWM1KSl7aWYoXzB4MzZmM2NjKyssXzB4MWU3MWM1W18weDEzNjY5MigweDE3NSldKyssXzB4MzZmM2NjPl8weDJjYzdjMyl7XzB4M2EyZmRhPSEweDA7YnJlYWs7fWlmKCFfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTUzKV0mJl8weDFlNzFjNVtfMHgxMzY2OTIoMHgxODIpXSYmXzB4MWU3MWM1WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDFlNzFjNVtfMHgxMzY2OTIoMHhlMSldKXtfMHgzYTJmZGE9ITB4MDticmVhazt9XzB4NGRhNjNiW18weDEzNjY5MigweDEzNCldKF8weDIyZjdiOFtfMHgxMzY2OTIoMHgxMDgpXShfMHgyMGI0ZjIsXzB4MjQ5M2JlLF8weDI1ZDQ1MSxfMHgyZDJkNmQsXzB4NTU2OTc5LF8weDFlNzFjNSkpO319Y2F0Y2h7fWlmKF8weDI0OTNiZVtfMHgxMzY2OTIoMHgxM2EpXT0hMHgwLF8weDEzMGYzZSYmKF8weDI0OTNiZVtfMHgxMzY2OTIoMHgxNmYpXT0hMHgwKSwhXzB4M2EyZmRhKXt2YXIgXzB4Mzc5YWQ4PVtdW18weDEzNjY5MigweGRiKV0odGhpc1tfMHgxMzY2OTIoMHgxMmMpXShfMHgyNWQ0NTEpKVtfMHgxMzY2OTIoMHhkYildKHRoaXNbXzB4MTM2NjkyKDB4MTRlKV0oXzB4MjVkNDUxKSk7Zm9yKF8weDMxNTc0Mz0weDAsXzB4NTQxYWE4PV8weDM3OWFkOFtfMHgxMzY2OTIoMHgxNWUpXTtfMHgzMTU3NDM8XzB4NTQxYWE4O18weDMxNTc0MysrKWlmKF8weDU1Njk3OT1fMHgzNzlhZDhbXzB4MzE1NzQzXSwhKF8weGQ4MzJjNSYmXzB4MzQ4YmYxW18weDEzNjY5MigweGU3KV0oXzB4NTU2OTc5W18weDEzNjY5MigweDE0ZCldKCkpKSYmIXRoaXNbXzB4MTM2NjkyKDB4ZjgpXShfMHgyNWQ0NTEsXzB4NTU2OTc5LF8weDFlNzFjNSkmJiFfMHgyNDkzYmVbXzB4MTM2NjkyKDB4MTJlKStfMHg1NTY5NzlbXzB4MTM2NjkyKDB4MTRkKV0oKV0pe2lmKF8weDM2ZjNjYysrLF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxNzUpXSsrLF8weDM2ZjNjYz5fMHgyY2M3YzMpe18weDNhMmZkYT0hMHgwO2JyZWFrO31pZighXzB4MWU3MWM1W18weDEzNjY5MigweDE1MyldJiZfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MTgyKV0mJl8weDFlNzFjNVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgxZTcxYzVbXzB4MTM2NjkyKDB4ZTEpXSl7XzB4M2EyZmRhPSEweDA7YnJlYWs7fV8weDRkYTYzYlsncHVzaCddKF8weDIyZjdiOFtfMHgxMzY2OTIoMHgxMDgpXShfMHgyMGI0ZjIsXzB4MjQ5M2JlLF8weDI1ZDQ1MSxfMHgyZDJkNmQsXzB4NTU2OTc5LF8weDFlNzFjNSkpO319fX19aWYoXzB4NDNiZmM3W18weDEzNjY5MigweDE5MSldPV8weDJkMmQ2ZCxfMHgzNDBmODM/KF8weDQzYmZjN1sndmFsdWUnXT1fMHgyNWQ0NTFbJ3ZhbHVlT2YnXSgpLHRoaXNbXzB4MTM2NjkyKDB4ZTMpXShfMHgyZDJkNmQsXzB4NDNiZmM3LF8weDFlNzFjNSxfMHg1MDhhMGYpKTpfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHhmMyk/XzB4NDNiZmM3W18weDEzNjY5MigweDE3ZildPXRoaXNbXzB4MTM2NjkyKDB4MTFmKV1bXzB4MTM2NjkyKDB4ZmUpXShfMHgyNWQ0NTEpOl8weDJkMmQ2ZD09PV8weDEzNjY5MigweDE4Yik/XzB4NDNiZmM3W18weDEzNjY5MigweDE3ZildPV8weDI1ZDQ1MVsndG9TdHJpbmcnXSgpOl8weDJkMmQ2ZD09PSdSZWdFeHAnP18weDQzYmZjN1tfMHgxMzY2OTIoMHgxN2YpXT10aGlzW18weDEzNjY5MigweDFiMildWydjYWxsJ10oXzB4MjVkNDUxKTpfMHgyZDJkNmQ9PT1fMHgxMzY2OTIoMHgxNzYpJiZ0aGlzW18weDEzNjY5MigweDE3MCldP18weDQzYmZjN1tfMHgxMzY2OTIoMHgxN2YpXT10aGlzW18weDEzNjY5MigweDE3MCldW18weDEzNjY5MigweDE4MCldW18weDEzNjY5MigweDE0ZCldW18weDEzNjY5MigweGZlKV0oXzB4MjVkNDUxKTohXzB4MWU3MWM1W18weDEzNjY5MigweDEyOSldJiYhKF8weDJkMmQ2ZD09PV8weDEzNjY5MigweDE1OSl8fF8weDJkMmQ2ZD09PV8weDEzNjY5MigweDE5OCkpJiYoZGVsZXRlIF8weDQzYmZjN1sndmFsdWUnXSxfMHg0M2JmYzdbXzB4MTM2NjkyKDB4MTI1KV09ITB4MCksXzB4M2EyZmRhJiYoXzB4NDNiZmM3WydjYXBwZWRQcm9wcyddPSEweDApLF8weDFjMzZiMD1fMHgxZTcxYzVbXzB4MTM2NjkyKDB4MWFkKV1bXzB4MTM2NjkyKDB4ZGQpXSxfMHgxZTcxYzVbXzB4MTM2NjkyKDB4MWFkKV1bXzB4MTM2NjkyKDB4ZGQpXT1fMHg0M2JmYzcsdGhpc1tfMHgxMzY2OTIoMHgxNDApXShfMHg0M2JmYzcsXzB4MWU3MWM1KSxfMHg0ZGE2M2JbXzB4MTM2NjkyKDB4MTVlKV0pe2ZvcihfMHgzMTU3NDM9MHgwLF8weDU0MWFhOD1fMHg0ZGE2M2JbXzB4MTM2NjkyKDB4MTVlKV07XzB4MzE1NzQzPF8weDU0MWFhODtfMHgzMTU3NDMrKylfMHg0ZGE2M2JbXzB4MzE1NzQzXShfMHgzMTU3NDMpO31fMHgyMGI0ZjJbXzB4MTM2NjkyKDB4MTVlKV0mJihfMHg0M2JmYzdbJ3Byb3BzJ109XzB4MjBiNGYyKTt9Y2F0Y2goXzB4Y2IyZjFmKXtfMHg0MTJiZmUoXzB4Y2IyZjFmLF8weDQzYmZjNyxfMHgxZTcxYzUpO31yZXR1cm4gdGhpc1tfMHgxMzY2OTIoMHhkZildKF8weDI1ZDQ1MSxfMHg0M2JmYzcpLHRoaXNbXzB4MTM2NjkyKDB4MTA5KV0oXzB4NDNiZmM3LF8weDFlNzFjNSksXzB4MWU3MWM1W18weDEzNjY5MigweDFhZCldW18weDEzNjY5MigweGRkKV09XzB4MWMzNmIwLF8weDFlNzFjNVtfMHgxMzY2OTIoMHgxMDcpXS0tLF8weDFlNzFjNVsnYXV0b0V4cGFuZCddPV8weDI3YTQ3MyxfMHgxZTcxYzVbJ2F1dG9FeHBhbmQnXSYmXzB4MWU3MWM1W18weDEzNjY5MigweGU4KV1bJ3BvcCddKCksXzB4NDNiZmM3O31bXzB4NDI0OGQ2KDB4MTRlKV0oXzB4MzZmZDY1KXt2YXIgXzB4M2E3MGIwPV8weDQyNDhkNjtyZXR1cm4gT2JqZWN0W18weDNhNzBiMCgweDE4ZSldP09iamVjdFsnZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10oXzB4MzZmZDY1KTpbXTt9W18weDQyNDhkNigweDE4NCldKF8weDJlNjUzZCl7dmFyIF8weDNmYzljMT1fMHg0MjQ4ZDY7cmV0dXJuISEoXzB4MmU2NTNkJiZfMHgzMTk3NTFbJ1NldCddJiZ0aGlzW18weDNmYzljMSgweDE3NyldKF8weDJlNjUzZCk9PT1fMHgzZmM5YzEoMHgxMGMpJiZfMHgyZTY1M2RbXzB4M2ZjOWMxKDB4MWFjKV0pO31bXzB4NDI0OGQ2KDB4ZjgpXShfMHg1MmQ2YmEsXzB4NTdmMjZlLF8weGZmNWFiMyl7dmFyIF8weGQwMWY0Yj1fMHg0MjQ4ZDY7cmV0dXJuIF8weGZmNWFiM1tfMHhkMDFmNGIoMHgxMmIpXT90eXBlb2YgXzB4NTJkNmJhW18weDU3ZjI2ZV09PV8weGQwMWY0YigweGVhKTohMHgxO31bXzB4NDI0OGQ2KDB4MTM2KV0oXzB4ODlhMzUzKXt2YXIgXzB4M2MzMzNjPV8weDQyNDhkNixfMHg0NWE3OTA9Jyc7cmV0dXJuIF8weDQ1YTc5MD10eXBlb2YgXzB4ODlhMzUzLF8weDQ1YTc5MD09PV8weDNjMzMzYygweDE4Myk/dGhpc1tfMHgzYzMzM2MoMHgxNzcpXShfMHg4OWEzNTMpPT09XzB4M2MzMzNjKDB4MTE0KT9fMHg0NWE3OTA9XzB4M2MzMzNjKDB4ZmIpOnRoaXNbXzB4M2MzMzNjKDB4MTc3KV0oXzB4ODlhMzUzKT09PV8weDNjMzMzYygweDEyNik/XzB4NDVhNzkwPV8weDNjMzMzYygweGYzKTp0aGlzW18weDNjMzMzYygweDE3NyldKF8weDg5YTM1Myk9PT1fMHgzYzMzM2MoMHgxNDEpP18weDQ1YTc5MD1fMHgzYzMzM2MoMHgxOGIpOl8weDg5YTM1Mz09PW51bGw/XzB4NDVhNzkwPV8weDNjMzMzYygweDE1OSk6XzB4ODlhMzUzW18weDNjMzMzYygweDFhNildJiYoXzB4NDVhNzkwPV8weDg5YTM1M1tfMHgzYzMzM2MoMHgxYTYpXVtfMHgzYzMzM2MoMHgxMDYpXXx8XzB4NDVhNzkwKTpfMHg0NWE3OTA9PT0ndW5kZWZpbmVkJyYmdGhpc1tfMHgzYzMzM2MoMHhkNyldJiZfMHg4OWEzNTMgaW5zdGFuY2VvZiB0aGlzW18weDNjMzMzYygweGQ3KV0mJihfMHg0NWE3OTA9XzB4M2MzMzNjKDB4MTY4KSksXzB4NDVhNzkwO31bXzB4NDI0OGQ2KDB4MTc3KV0oXzB4YjI4YjUpe3ZhciBfMHgyZDZlODE9XzB4NDI0OGQ2O3JldHVybiBPYmplY3RbXzB4MmQ2ZTgxKDB4MTgwKV1bXzB4MmQ2ZTgxKDB4MTRkKV1bJ2NhbGwnXShfMHhiMjhiNSk7fVsnX2lzUHJpbWl0aXZlVHlwZSddKF8weDU3OGVlZSl7dmFyIF8weDE1M2RhYz1fMHg0MjQ4ZDY7cmV0dXJuIF8weDU3OGVlZT09PV8weDE1M2RhYygweDE2Yil8fF8weDU3OGVlZT09PV8weDE1M2RhYygweDEzYyl8fF8weDU3OGVlZT09PV8weDE1M2RhYygweDEzNSk7fVtfMHg0MjQ4ZDYoMHgxNjMpXShfMHgxMzI1MGIpe3ZhciBfMHgyODk4NDM9XzB4NDI0OGQ2O3JldHVybiBfMHgxMzI1MGI9PT1fMHgyODk4NDMoMHgxOWMpfHxfMHgxMzI1MGI9PT0nU3RyaW5nJ3x8XzB4MTMyNTBiPT09XzB4Mjg5ODQzKDB4MTdjKTt9W18weDQyNDhkNigweGY3KV0oXzB4NDViMTk2LF8weDQxNDU0OCxfMHgzOWRjM2UsXzB4MzU3MzBmLF8weDQxMzAyNSxfMHgzYzBhYjMpe3ZhciBfMHg1Yjk3ZjI9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4NGE0ZTRiKXt2YXIgXzB4MjFmNmM3PV8weDM5NGIsXzB4MTA0Yzk3PV8weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVtfMHgyMWY2YzcoMHhkZCldLF8weDRjMzcwOT1fMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bXzB4MjFmNmM3KDB4MWE4KV0sXzB4NzAyYmVhPV8weDQxMzAyNVtfMHgyMWY2YzcoMHgxYWQpXVsncGFyZW50J107XzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldW18weDIxZjZjNygweDE2MCldPV8weDEwNGM5NyxfMHg0MTMwMjVbJ25vZGUnXVsnaW5kZXgnXT10eXBlb2YgXzB4MzU3MzBmPT1fMHgyMWY2YzcoMHgxMzUpP18weDM1NzMwZjpfMHg0YTRlNGIsXzB4NDViMTk2W18weDIxZjZjNygweDEzNCldKF8weDViOTdmMltfMHgyMWY2YzcoMHgxODEpXShfMHg0MTQ1NDgsXzB4MzlkYzNlLF8weDM1NzMwZixfMHg0MTMwMjUsXzB4M2MwYWIzKSksXzB4NDEzMDI1W18weDIxZjZjNygweDFhZCldW18weDIxZjZjNygweDE2MCldPV8weDcwMmJlYSxfMHg0MTMwMjVbXzB4MjFmNmM3KDB4MWFkKV1bJ2luZGV4J109XzB4NGMzNzA5O307fVtfMHg0MjQ4ZDYoMHgxMDgpXShfMHg0NjA5ZTUsXzB4MTVjZmU0LF8weDI2NDE0ZixfMHgzZDhmMDksXzB4MzU2NTc1LF8weDM1NzE5MyxfMHg4M2YzNTkpe3ZhciBfMHg0Y2Y1MmI9XzB4NDI0OGQ2LF8weDQwMjc2YT10aGlzO3JldHVybiBfMHgxNWNmZTRbJ19wXycrXzB4MzU2NTc1W18weDRjZjUyYigweDE0ZCldKCldPSEweDAsZnVuY3Rpb24oXzB4MzMyNWY3KXt2YXIgXzB4MmI4ZDA2PV8weDRjZjUyYixfMHgyZWVlZWE9XzB4MzU3MTkzWydub2RlJ11bXzB4MmI4ZDA2KDB4ZGQpXSxfMHgyM2M3MTg9XzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDFhOCldLF8weDE0ZDNjMz1fMHgzNTcxOTNbXzB4MmI4ZDA2KDB4MWFkKV1bXzB4MmI4ZDA2KDB4MTYwKV07XzB4MzU3MTkzW18weDJiOGQwNigweDFhZCldW18weDJiOGQwNigweDE2MCldPV8weDJlZWVlYSxfMHgzNTcxOTNbXzB4MmI4ZDA2KDB4MWFkKV1bXzB4MmI4ZDA2KDB4MWE4KV09XzB4MzMyNWY3LF8weDQ2MDllNVtfMHgyYjhkMDYoMHgxMzQpXShfMHg0MDI3NmFbXzB4MmI4ZDA2KDB4MTgxKV0oXzB4MjY0MTRmLF8weDNkOGYwOSxfMHgzNTY1NzUsXzB4MzU3MTkzLF8weDgzZjM1OSkpLF8weDM1NzE5M1snbm9kZSddW18weDJiOGQwNigweDE2MCldPV8weDE0ZDNjMyxfMHgzNTcxOTNbXzB4MmI4ZDA2KDB4MWFkKV1bXzB4MmI4ZDA2KDB4MWE4KV09XzB4MjNjNzE4O307fVsnX3Byb3BlcnR5J10oXzB4OWFiNjRmLF8weDRkOTBiOSxfMHgxODM1OTksXzB4ZDU4YjJiLF8weDQzYWY0MCl7dmFyIF8weDE0NzA4PV8weDQyNDhkNixfMHg0NDY1MDA9dGhpcztfMHg0M2FmNDB8fChfMHg0M2FmNDA9ZnVuY3Rpb24oXzB4NGJkZmIxLF8weDRiZGM0ZCl7cmV0dXJuIF8weDRiZGZiMVtfMHg0YmRjNGRdO30pO3ZhciBfMHgxODJjMGY9XzB4MTgzNTk5W18weDE0NzA4KDB4MTRkKV0oKSxfMHg1YjNlNTQ9XzB4ZDU4YjJiW18weDE0NzA4KDB4MTNmKV18fHt9LF8weDUyNzc5Mj1fMHhkNThiMmJbJ2RlcHRoJ10sXzB4NTA4MzEyPV8weGQ1OGIyYlsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddO3RyeXt2YXIgXzB4NTIxMDU4PXRoaXNbXzB4MTQ3MDgoMHgxNDMpXShfMHg5YWI2NGYpLF8weDQxMjNlYT1fMHgxODJjMGY7XzB4NTIxMDU4JiZfMHg0MTIzZWFbMHgwXT09PSdcXFxceDI3JyYmKF8weDQxMjNlYT1fMHg0MTIzZWFbXzB4MTQ3MDgoMHgxMTIpXSgweDEsXzB4NDEyM2VhWydsZW5ndGgnXS0weDIpKTt2YXIgXzB4MjZkZTlhPV8weGQ1OGIyYlsnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJ109XzB4NWIzZTU0W18weDE0NzA4KDB4MTJlKStfMHg0MTIzZWFdO18weDI2ZGU5YSYmKF8weGQ1OGIyYltfMHgxNDcwOCgweDEyOSldPV8weGQ1OGIyYlsnZGVwdGgnXSsweDEpLF8weGQ1OGIyYlsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddPSEhXzB4MjZkZTlhO3ZhciBfMHg1M2E2YjM9dHlwZW9mIF8weDE4MzU5OT09XzB4MTQ3MDgoMHgxNzYpLF8weDMxNzkwYj17J25hbWUnOl8weDUzYTZiM3x8XzB4NTIxMDU4P18weDE4MmMwZjp0aGlzW18weDE0NzA4KDB4MTk2KV0oXzB4MTgyYzBmKX07aWYoXzB4NTNhNmIzJiYoXzB4MzE3OTBiW18weDE0NzA4KDB4MTc2KV09ITB4MCksIShfMHg0ZDkwYjk9PT1fMHgxNDcwOCgweGZiKXx8XzB4NGQ5MGI5PT09XzB4MTQ3MDgoMHhlMikpKXt2YXIgXzB4NDI4ZTJmPXRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXShfMHg5YWI2NGYsXzB4MTgzNTk5KTtpZihfMHg0MjhlMmYmJihfMHg0MjhlMmZbJ3NldCddJiYoXzB4MzE3OTBiWydzZXR0ZXInXT0hMHgwKSxfMHg0MjhlMmZbXzB4MTQ3MDgoMHgxYTUpXSYmIV8weDI2ZGU5YSYmIV8weGQ1OGIyYltfMHgxNDcwOCgweDE4ZCldKSlyZXR1cm4gXzB4MzE3OTBiW18weDE0NzA4KDB4MTczKV09ITB4MCx0aGlzW18weDE0NzA4KDB4MWI0KV0oXzB4MzE3OTBiLF8weGQ1OGIyYiksXzB4MzE3OTBiO312YXIgXzB4NTc4NmU5O3RyeXtfMHg1Nzg2ZTk9XzB4NDNhZjQwKF8weDlhYjY0ZixfMHgxODM1OTkpO31jYXRjaChfMHgzOTZiYTgpe3JldHVybiBfMHgzMTc5MGI9eyduYW1lJzpfMHgxODJjMGYsJ3R5cGUnOid1bmtub3duJywnZXJyb3InOl8weDM5NmJhOFtfMHgxNDcwOCgweGU2KV19LHRoaXNbXzB4MTQ3MDgoMHgxYjQpXShfMHgzMTc5MGIsXzB4ZDU4YjJiKSxfMHgzMTc5MGI7fXZhciBfMHg1MmRkZmM9dGhpc1snX3R5cGUnXShfMHg1Nzg2ZTkpLF8weDFmMDUxZj10aGlzW18weDE0NzA4KDB4MTE1KV0oXzB4NTJkZGZjKTtpZihfMHgzMTc5MGJbJ3R5cGUnXT1fMHg1MmRkZmMsXzB4MWYwNTFmKXRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHgzMTc5MGIsXzB4ZDU4YjJiLF8weDU3ODZlOSxmdW5jdGlvbigpe3ZhciBfMHgxYjE0ZjA9XzB4MTQ3MDg7XzB4MzE3OTBiW18weDFiMTRmMCgweDE3ZildPV8weDU3ODZlOVsndmFsdWVPZiddKCksIV8weDI2ZGU5YSYmXzB4NDQ2NTAwW18weDFiMTRmMCgweGUzKV0oXzB4NTJkZGZjLF8weDMxNzkwYixfMHhkNThiMmIse30pO30pO2Vsc2V7dmFyIF8weDM0ODIwNj1fMHhkNThiMmJbXzB4MTQ3MDgoMHgxODIpXSYmXzB4ZDU4YjJiWydsZXZlbCddPF8weGQ1OGIyYltfMHgxNDcwOCgweDE2NyldJiZfMHhkNThiMmJbXzB4MTQ3MDgoMHhlOCldWydpbmRleE9mJ10oXzB4NTc4NmU5KTwweDAmJl8weDUyZGRmYyE9PV8weDE0NzA4KDB4ZWEpJiZfMHhkNThiMmJbXzB4MTQ3MDgoMHgxNzUpXTxfMHhkNThiMmJbXzB4MTQ3MDgoMHhlMSldO18weDM0ODIwNnx8XzB4ZDU4YjJiW18weDE0NzA4KDB4MTA3KV08XzB4NTI3NzkyfHxfMHgyNmRlOWE/KHRoaXNbXzB4MTQ3MDgoMHgxYjYpXShfMHgzMTc5MGIsXzB4NTc4NmU5LF8weGQ1OGIyYixfMHgyNmRlOWF8fHt9KSx0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NTc4NmU5LF8weDMxNzkwYikpOnRoaXNbXzB4MTQ3MDgoMHgxYjQpXShfMHgzMTc5MGIsXzB4ZDU4YjJiLF8weDU3ODZlOSxmdW5jdGlvbigpe3ZhciBfMHgyMzg1YmE9XzB4MTQ3MDg7XzB4NTJkZGZjPT09XzB4MjM4NWJhKDB4MTU5KXx8XzB4NTJkZGZjPT09J3VuZGVmaW5lZCd8fChkZWxldGUgXzB4MzE3OTBiW18weDIzODViYSgweDE3ZildLF8weDMxNzkwYltfMHgyMzg1YmEoMHgxMjUpXT0hMHgwKTt9KTt9cmV0dXJuIF8weDMxNzkwYjt9ZmluYWxseXtfMHhkNThiMmJbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDViM2U1NCxfMHhkNThiMmJbXzB4MTQ3MDgoMHgxMjkpXT1fMHg1Mjc3OTIsXzB4ZDU4YjJiW18weDE0NzA4KDB4MTUzKV09XzB4NTA4MzEyO319W18weDQyNDhkNigweGUzKV0oXzB4MzA1NzgxLF8weDEyMTJiMyxfMHgzYmViMjcsXzB4NTIyNjgzKXt2YXIgXzB4NGQyMDU3PV8weDQyNDhkNixfMHgyYjJhMzE9XzB4NTIyNjgzWydzdHJMZW5ndGgnXXx8XzB4M2JlYjI3W18weDRkMjA1NygweDE4NSldO2lmKChfMHgzMDU3ODE9PT1fMHg0ZDIwNTcoMHgxM2MpfHxfMHgzMDU3ODE9PT1fMHg0ZDIwNTcoMHgxMDEpKSYmXzB4MTIxMmIzW18weDRkMjA1NygweDE3ZildKXtsZXQgXzB4MTVkNjMyPV8weDEyMTJiM1sndmFsdWUnXVtfMHg0ZDIwNTcoMHgxNWUpXTtfMHgzYmViMjdbXzB4NGQyMDU3KDB4MTA0KV0rPV8weDE1ZDYzMixfMHgzYmViMjdbXzB4NGQyMDU3KDB4MTA0KV0+XzB4M2JlYjI3Wyd0b3RhbFN0ckxlbmd0aCddPyhfMHgxMjEyYjNbJ2NhcHBlZCddPScnLGRlbGV0ZSBfMHgxMjEyYjNbJ3ZhbHVlJ10pOl8weDE1ZDYzMj5fMHgyYjJhMzEmJihfMHgxMjEyYjNbXzB4NGQyMDU3KDB4MTI1KV09XzB4MTIxMmIzW18weDRkMjA1NygweDE3ZildW18weDRkMjA1NygweDExMildKDB4MCxfMHgyYjJhMzEpLGRlbGV0ZSBfMHgxMjEyYjNbJ3ZhbHVlJ10pO319WydfaXNNYXAnXShfMHgyYWM1NGYpe3ZhciBfMHgxOTIxYTA9XzB4NDI0OGQ2O3JldHVybiEhKF8weDJhYzU0ZiYmXzB4MzE5NzUxWydNYXAnXSYmdGhpc1tfMHgxOTIxYTAoMHgxNzcpXShfMHgyYWM1NGYpPT09XzB4MTkyMWEwKDB4MWE5KSYmXzB4MmFjNTRmW18weDE5MjFhMCgweDFhYyldKTt9WydfcHJvcGVydHlOYW1lJ10oXzB4NTNmZmViKXt2YXIgXzB4MmY5N2Q1PV8weDQyNDhkNjtpZihfMHg1M2ZmZWJbXzB4MmY5N2Q1KDB4MTJmKV0oL15cXFxcZCskLykpcmV0dXJuIF8weDUzZmZlYjt2YXIgXzB4MmI4ZjcyO3RyeXtfMHgyYjhmNzI9SlNPTltfMHgyZjk3ZDUoMHgxMWEpXSgnJytfMHg1M2ZmZWIpO31jYXRjaHtfMHgyYjhmNzI9J1xcXFx4MjInK3RoaXNbXzB4MmY5N2Q1KDB4MTc3KV0oXzB4NTNmZmViKSsnXFxcXHgyMic7fXJldHVybiBfMHgyYjhmNzJbXzB4MmY5N2Q1KDB4MTJmKV0oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHgyYjhmNzI9XzB4MmI4ZjcyWydzdWJzdHInXSgweDEsXzB4MmI4ZjcyW18weDJmOTdkNSgweDE1ZSldLTB4Mik6XzB4MmI4ZjcyPV8weDJiOGY3MltfMHgyZjk3ZDUoMHgxMzApXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpWydyZXBsYWNlJ10oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbXzB4MmY5N2Q1KDB4MTMwKV0oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDJiOGY3Mjt9W18weDQyNDhkNigweDFiNCldKF8weDViZWI2ZCxfMHg0Y2M2YzIsXzB4NTVkYjkyLF8weDVhNzZmNil7dmFyIF8weDgxM2JjOD1fMHg0MjQ4ZDY7dGhpc1tfMHg4MTNiYzgoMHgxNDApXShfMHg1YmViNmQsXzB4NGNjNmMyKSxfMHg1YTc2ZjYmJl8weDVhNzZmNigpLHRoaXNbXzB4ODEzYmM4KDB4ZGYpXShfMHg1NWRiOTIsXzB4NWJlYjZkKSx0aGlzW18weDgxM2JjOCgweDEwOSldKF8weDViZWI2ZCxfMHg0Y2M2YzIpO31bJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgzYzY5NjEsXzB4MTcyZmZhKXt2YXIgXzB4MTc0NDE3PV8weDQyNDhkNjt0aGlzW18weDE3NDQxNygweDEzZSldKF8weDNjNjk2MSxfMHgxNzJmZmEpLHRoaXNbXzB4MTc0NDE3KDB4MTg4KV0oXzB4M2M2OTYxLF8weDE3MmZmYSksdGhpc1snX3NldE5vZGVFeHByZXNzaW9uUGF0aCddKF8weDNjNjk2MSxfMHgxNzJmZmEpLHRoaXNbXzB4MTc0NDE3KDB4MTE3KV0oXzB4M2M2OTYxLF8weDE3MmZmYSk7fVtfMHg0MjQ4ZDYoMHgxM2UpXShfMHgyMzJmYjEsXzB4MTU0NmRjKXt9W18weDQyNDhkNigweDE4OCldKF8weDFiNTVjYSxfMHgxZGMxYjApe31bXzB4NDI0OGQ2KDB4MWE3KV0oXzB4MjkwZGRkLF8weDVlYTQyNSl7fVtfMHg0MjQ4ZDYoMHhlZCldKF8weDNjMTAyNil7cmV0dXJuIF8weDNjMTAyNj09PXRoaXNbJ191bmRlZmluZWQnXTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHg1ODE2ZGUsXzB4NTFhZDBmKXt2YXIgXzB4NGUzMjA3PV8weDQyNDhkNjt0aGlzW18weDRlMzIwNygweDFhNyldKF8weDU4MTZkZSxfMHg1MWFkMGYpLHRoaXNbXzB4NGUzMjA3KDB4MTk1KV0oXzB4NTgxNmRlKSxfMHg1MWFkMGZbXzB4NGUzMjA3KDB4ZTQpXSYmdGhpc1snX3NvcnRQcm9wcyddKF8weDU4MTZkZSksdGhpc1tfMHg0ZTMyMDcoMHgxMWMpXShfMHg1ODE2ZGUsXzB4NTFhZDBmKSx0aGlzW18weDRlMzIwNygweDE5YildKF8weDU4MTZkZSxfMHg1MWFkMGYpLHRoaXNbJ19jbGVhbk5vZGUnXShfMHg1ODE2ZGUpO31bXzB4NDI0OGQ2KDB4ZGYpXShfMHgzY2M1MmMsXzB4NGQzOGE3KXt2YXIgXzB4NDFlNGRkPV8weDQyNDhkNjtsZXQgXzB4NTNjOWI3O3RyeXtfMHgzMTk3NTFbXzB4NDFlNGRkKDB4ZjkpXSYmKF8weDUzYzliNz1fMHgzMTk3NTFbXzB4NDFlNGRkKDB4ZjkpXVtfMHg0MWU0ZGQoMHgxMzkpXSxfMHgzMTk3NTFbXzB4NDFlNGRkKDB4ZjkpXVsnZXJyb3InXT1mdW5jdGlvbigpe30pLF8weDNjYzUyYyYmdHlwZW9mIF8weDNjYzUyY1tfMHg0MWU0ZGQoMHgxNWUpXT09XzB4NDFlNGRkKDB4MTM1KSYmKF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxNWUpXT1fMHgzY2M1MmNbXzB4NDFlNGRkKDB4MTVlKV0pO31jYXRjaHt9ZmluYWxseXtfMHg1M2M5YjcmJihfMHgzMTk3NTFbXzB4NDFlNGRkKDB4ZjkpXVtfMHg0MWU0ZGQoMHgxMzkpXT1fMHg1M2M5YjcpO31pZihfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTkxKV09PT1fMHg0MWU0ZGQoMHgxMzUpfHxfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTkxKV09PT1fMHg0MWU0ZGQoMHgxN2MpKXtpZihpc05hTihfMHg0ZDM4YTdbJ3ZhbHVlJ10pKV8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxOWEpXT0hMHgwLGRlbGV0ZSBfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTdmKV07ZWxzZSBzd2l0Y2goXzB4NGQzOGE3W18weDQxZTRkZCgweDE3ZildKXtjYXNlIE51bWJlcltfMHg0MWU0ZGQoMHhmMSldOl8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxOTkpXT0hMHgwLGRlbGV0ZSBfMHg0ZDM4YTdbJ3ZhbHVlJ107YnJlYWs7Y2FzZSBOdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ106XzB4NGQzOGE3WyduZWdhdGl2ZUluZmluaXR5J109ITB4MCxkZWxldGUgXzB4NGQzOGE3W18weDQxZTRkZCgweDE3ZildO2JyZWFrO2Nhc2UgMHgwOnRoaXNbJ19pc05lZ2F0aXZlWmVybyddKF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxN2YpXSkmJihfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTYxKV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDRkMzhhN1tfMHg0MWU0ZGQoMHgxOTEpXT09PV8weDQxZTRkZCgweGVhKSYmdHlwZW9mIF8weDNjYzUyY1tfMHg0MWU0ZGQoMHgxMDYpXT09XzB4NDFlNGRkKDB4MTNjKSYmXzB4M2NjNTJjW18weDQxZTRkZCgweDEwNildJiZfMHg0ZDM4YTdbJ25hbWUnXSYmXzB4M2NjNTJjW18weDQxZTRkZCgweDEwNildIT09XzB4NGQzOGE3WyduYW1lJ10mJihfMHg0ZDM4YTdbXzB4NDFlNGRkKDB4MTQ2KV09XzB4M2NjNTJjWyduYW1lJ10pO31bJ19pc05lZ2F0aXZlWmVybyddKF8weDU0NWQ3MCl7dmFyIF8weDNmNWY3OD1fMHg0MjQ4ZDY7cmV0dXJuIDB4MS9fMHg1NDVkNzA9PT1OdW1iZXJbXzB4M2Y1Zjc4KDB4MTU3KV07fVtfMHg0MjQ4ZDYoMHgxNzgpXShfMHg0ODM0MmQpe3ZhciBfMHgxMTMzY2U9XzB4NDI0OGQ2OyFfMHg0ODM0MmRbXzB4MTEzM2NlKDB4MTlkKV18fCFfMHg0ODM0MmRbXzB4MTEzM2NlKDB4MTlkKV1bXzB4MTEzM2NlKDB4MTVlKV18fF8weDQ4MzQyZFsndHlwZSddPT09XzB4MTEzM2NlKDB4ZmIpfHxfMHg0ODM0MmRbXzB4MTEzM2NlKDB4MTkxKV09PT0nTWFwJ3x8XzB4NDgzNDJkW18weDExMzNjZSgweDE5MSldPT09XzB4MTEzM2NlKDB4MTZjKXx8XzB4NDgzNDJkW18weDExMzNjZSgweDE5ZCldW18weDExMzNjZSgweDE3YildKGZ1bmN0aW9uKF8weDM1OGY3NCxfMHgyNTE1MTkpe3ZhciBfMHgxOTdkOTQ9XzB4MTEzM2NlLF8weGJhMTk0ND1fMHgzNThmNzRbXzB4MTk3ZDk0KDB4MTA2KV1bXzB4MTk3ZDk0KDB4MThmKV0oKSxfMHgxMzhhZmY9XzB4MjUxNTE5W18weDE5N2Q5NCgweDEwNildWyd0b0xvd2VyQ2FzZSddKCk7cmV0dXJuIF8weGJhMTk0NDxfMHgxMzhhZmY/LTB4MTpfMHhiYTE5NDQ+XzB4MTM4YWZmPzB4MToweDA7fSk7fVtfMHg0MjQ4ZDYoMHgxMWMpXShfMHgxODAwOTUsXzB4OTRhN2JlKXt2YXIgXzB4YjNiNDNhPV8weDQyNDhkNjtpZighKF8weDk0YTdiZVtfMHhiM2I0M2EoMHgxMmIpXXx8IV8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXXx8IV8weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXVsnbGVuZ3RoJ10pKXtmb3IodmFyIF8weDQ2NjUzZT1bXSxfMHg4MGMzMzg9W10sXzB4MTQyNDExPTB4MCxfMHgyZDYwMjE9XzB4MTgwMDk1W18weGIzYjQzYSgweDE5ZCldW18weGIzYjQzYSgweDE1ZSldO18weDE0MjQxMTxfMHgyZDYwMjE7XzB4MTQyNDExKyspe3ZhciBfMHg0MTMyODk9XzB4MTgwMDk1W18weGIzYjQzYSgweDE5ZCldW18weDE0MjQxMV07XzB4NDEzMjg5W18weGIzYjQzYSgweDE5MSldPT09XzB4YjNiNDNhKDB4ZWEpP18weDQ2NjUzZVtfMHhiM2I0M2EoMHgxMzQpXShfMHg0MTMyODkpOl8weDgwYzMzOFtfMHhiM2I0M2EoMHgxMzQpXShfMHg0MTMyODkpO31pZighKCFfMHg4MGMzMzhbXzB4YjNiNDNhKDB4MTVlKV18fF8weDQ2NjUzZVsnbGVuZ3RoJ108PTB4MSkpe18weDE4MDA5NVtfMHhiM2I0M2EoMHgxOWQpXT1fMHg4MGMzMzg7dmFyIF8weDIyNzRkZj17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHg0NjY1M2V9O3RoaXNbXzB4YjNiNDNhKDB4MTNlKV0oXzB4MjI3NGRmLF8weDk0YTdiZSksdGhpc1tfMHhiM2I0M2EoMHgxYTcpXShfMHgyMjc0ZGYsXzB4OTRhN2JlKSx0aGlzW18weGIzYjQzYSgweDE5NSldKF8weDIyNzRkZiksdGhpc1tfMHhiM2I0M2EoMHgxMTcpXShfMHgyMjc0ZGYsXzB4OTRhN2JlKSxfMHgyMjc0ZGZbJ2lkJ10rPSdcXFxceDIwZicsXzB4MTgwMDk1W18weGIzYjQzYSgweDE5ZCldW18weGIzYjQzYSgweDExOSldKF8weDIyNzRkZik7fX19W18weDQyNDhkNigweDE5YildKF8weDQ4OGUwNyxfMHgzMGRhNWYpe31bXzB4NDI0OGQ2KDB4MTk1KV0oXzB4MmZiOWNhKXt9W18weDQyNDhkNigweGQ0KV0oXzB4NDZlODhlKXt2YXIgXzB4MTE2N2M0PV8weDQyNDhkNjtyZXR1cm4gQXJyYXlbXzB4MTE2N2M0KDB4ZmEpXShfMHg0NmU4OGUpfHx0eXBlb2YgXzB4NDZlODhlPT0nb2JqZWN0JyYmdGhpc1tfMHgxMTY3YzQoMHgxNzcpXShfMHg0NmU4OGUpPT09XzB4MTE2N2M0KDB4MTE0KTt9Wydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4MzE0NGE4LF8weGQ4ZDVjNyl7fVsnX2NsZWFuTm9kZSddKF8weDM0OWNiNCl7dmFyIF8weDJhNTg3Mj1fMHg0MjQ4ZDY7ZGVsZXRlIF8weDM0OWNiNFtfMHgyYTU4NzIoMHgxNDgpXSxkZWxldGUgXzB4MzQ5Y2I0W18weDJhNTg3MigweDE4YSldLGRlbGV0ZSBfMHgzNDljYjRbXzB4MmE1ODcyKDB4MTViKV07fVtfMHg0MjQ4ZDYoMHgxNjQpXShfMHgxMzg3YjYsXzB4NTlkZTcwKXt9fWxldCBfMHg1OWNkNmQ9bmV3IF8weDMxODdhNygpLF8weDExZTQ5Mj17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHhiN2UzZGI9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfTtmdW5jdGlvbiBfMHgyZTgyMzIoXzB4Y2ZkMjkwLF8weDNlOTQxZixfMHgzMjgzYzIsXzB4MjMwNjVlLF8weDJhN2YwMSxfMHgzODc3OGUpe3ZhciBfMHg0MmNhMjk9XzB4NDI0OGQ2O2xldCBfMHg0MDFmZjYsXzB4NDg4NWRlO3RyeXtfMHg0ODg1ZGU9XzB4Mjk5ZGEzKCksXzB4NDAxZmY2PV8weDI0MDhiYVtfMHgzZTk0MWZdLCFfMHg0MDFmZjZ8fF8weDQ4ODVkZS1fMHg0MDFmZjZbJ3RzJ10+MHgxZjQmJl8weDQwMWZmNltfMHg0MmNhMjkoMHgxMDApXSYmXzB4NDAxZmY2W18weDQyY2EyOSgweDFhNCldL18weDQwMWZmNltfMHg0MmNhMjkoMHgxMDApXTwweDY0PyhfMHgyNDA4YmFbXzB4M2U5NDFmXT1fMHg0MDFmZjY9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHg0ODg1ZGV9LF8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXT17fSk6XzB4NDg4NWRlLV8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVsndHMnXT4weDMyJiZfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bXzB4NDJjYTI5KDB4MTAwKV0mJl8weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVsndGltZSddL18weDI0MDhiYVtfMHg0MmNhMjkoMHgxMGYpXVtfMHg0MmNhMjkoMHgxMDApXTwweDY0JiYoXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildPXt9KTtsZXQgXzB4MzkwNWQ3PVtdLF8weDVjM2E1OT1fMHg0MDFmZjZbJ3JlZHVjZUxpbWl0cyddfHxfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bJ3JlZHVjZUxpbWl0cyddP18weGI3ZTNkYjpfMHgxMWU0OTIsXzB4NDA3MmQ2PV8weDljODVkMj0+e3ZhciBfMHg1NzU0ZWE9XzB4NDJjYTI5O2xldCBfMHhlYzc3MzU9e307cmV0dXJuIF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxOWQpXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4MTlkKV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweDE2MildPV8weDljODVkMltfMHg1NzU0ZWEoMHgxNjIpXSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTg1KV09XzB4OWM4NWQyW18weDU3NTRlYSgweDE4NSldLF8weGVjNzczNVsndG90YWxTdHJMZW5ndGgnXT1fMHg5Yzg1ZDJbXzB4NTc1NGVhKDB4MTU1KV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweGUxKV09XzB4OWM4NWQyW18weDU3NTRlYSgweGUxKV0sXzB4ZWM3NzM1W18weDU3NTRlYSgweDE2NyldPV8weDljODVkMltfMHg1NzU0ZWEoMHgxNjcpXSxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4ZTQpXT0hMHgxLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxMmIpXT0hXzB4NWQyNjdhLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxMjkpXT0weDEsXzB4ZWM3NzM1W18weDU3NTRlYSgweDEwNyldPTB4MCxfMHhlYzc3MzVbJ2V4cElkJ109XzB4NTc1NGVhKDB4ZmYpLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxNzkpXT1fMHg1NzU0ZWEoMHhmZCksXzB4ZWM3NzM1W18weDU3NTRlYSgweDE4MildPSEweDAsXzB4ZWM3NzM1W18weDU3NTRlYSgweGU4KV09W10sXzB4ZWM3NzM1W18weDU3NTRlYSgweDE3NSldPTB4MCxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MThkKV09ITB4MCxfMHhlYzc3MzVbXzB4NTc1NGVhKDB4MTA0KV09MHgwLF8weGVjNzczNVtfMHg1NzU0ZWEoMHgxYWQpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHhlYzc3MzU7fTtmb3IodmFyIF8weDRlZGI3OD0weDA7XzB4NGVkYjc4PF8weDJhN2YwMVtfMHg0MmNhMjkoMHgxNWUpXTtfMHg0ZWRiNzgrKylfMHgzOTA1ZDdbXzB4NDJjYTI5KDB4MTM0KV0oXzB4NTljZDZkWydzZXJpYWxpemUnXSh7J3RpbWVOb2RlJzpfMHhjZmQyOTA9PT1fMHg0MmNhMjkoMHgxYTQpfHx2b2lkIDB4MH0sXzB4MmE3ZjAxW18weDRlZGI3OF0sXzB4NDA3MmQ2KF8weDVjM2E1OSkse30pKTtpZihfMHhjZmQyOTA9PT0ndHJhY2UnKXtsZXQgXzB4MzRjYjkxPUVycm9yW18weDQyY2EyOSgweDEwYildO3RyeXtFcnJvcltfMHg0MmNhMjkoMHgxMGIpXT0weDEvMHgwLF8weDM5MDVkN1tfMHg0MmNhMjkoMHgxMzQpXShfMHg1OWNkNmRbXzB4NDJjYTI5KDB4MWI2KV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpWydzdGFjayddLF8weDQwNzJkNihfMHg1YzNhNTkpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yWydzdGFja1RyYWNlTGltaXQnXT1fMHgzNGNiOTE7fX1yZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDU2MzUwNCwnYXJncyc6W3sndHMnOl8weDMyODNjMiwnc2Vzc2lvbic6XzB4MjMwNjVlLCdhcmdzJzpfMHgzOTA1ZDcsJ2lkJzpfMHgzZTk0MWYsJ2NvbnRleHQnOl8weDM4Nzc4ZX1dfTt9Y2F0Y2goXzB4NDhmMGNlKXtyZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDU2MzUwNCwnYXJncyc6W3sndHMnOl8weDMyODNjMiwnc2Vzc2lvbic6XzB4MjMwNjVlLCdhcmdzJzpbeyd0eXBlJzpfMHg0MmNhMjkoMHgxMTMpLCdlcnJvcic6XzB4NDhmMGNlJiZfMHg0OGYwY2VbJ21lc3NhZ2UnXX1dLCdpZCc6XzB4M2U5NDFmLCdjb250ZXh0JzpfMHgzODc3OGV9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDQwMWZmNiYmXzB4NDg4NWRlKXtsZXQgXzB4MmZmMTg5PV8weDI5OWRhMygpO18weDQwMWZmNlsnY291bnQnXSsrLF8weDQwMWZmNltfMHg0MmNhMjkoMHgxYTQpXSs9XzB4NWRlYWQ1KF8weDQ4ODVkZSxfMHgyZmYxODkpLF8weDQwMWZmNlsndHMnXT1fMHgyZmYxODksXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDEwMCldKyssXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDFhNCldKz1fMHg1ZGVhZDUoXzB4NDg4NWRlLF8weDJmZjE4OSksXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildWyd0cyddPV8weDJmZjE4OSwoXzB4NDAxZmY2Wydjb3VudCddPjB4MzJ8fF8weDQwMWZmNltfMHg0MmNhMjkoMHgxYTQpXT4weDY0KSYmKF8weDQwMWZmNltfMHg0MmNhMjkoMHgxNDQpXT0hMHgwKSwoXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDEwMCldPjB4M2U4fHxfMHgyNDA4YmFbXzB4NDJjYTI5KDB4MTBmKV1bXzB4NDJjYTI5KDB4MWE0KV0+MHgxMmMpJiYoXzB4MjQwOGJhW18weDQyY2EyOSgweDEwZildW18weDQyY2EyOSgweDE0NCldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDJlODIzMjt9KChfMHgzMDgwZTAsXzB4MTNhZDg1LF8weDRiMDE5OSxfMHgyZDQwZjYsXzB4NGI3ZTQ1LF8weDRlMGU3NyxfMHgzNzA1MmIsXzB4MjAzYmI0LF8weDJmOTkzMSxfMHgzNjYzMDMpPT57dmFyIF8weDUyMWE4ND1fMHgzMGQ0NmM7aWYoXzB4MzA4MGUwWydfY29uc29sZV9uaW5qYSddKXJldHVybiBfMHgzMDgwZTBbXzB4NTIxYTg0KDB4ZjQpXTtpZighSihfMHgzMDgwZTAsXzB4MjAzYmI0LF8weDRiN2U0NSkpcmV0dXJuIF8weDMwODBlMFsnX2NvbnNvbGVfbmluamEnXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4MzA4MGUwW18weDUyMWE4NCgweGY0KV07bGV0IF8weDM0OTNmYz1XKF8weDMwODBlMCksXzB4NGNhZDMwPV8weDM0OTNmY1tfMHg1MjFhODQoMHhmMCldLF8weDgxOTI3Mz1fMHgzNDkzZmNbXzB4NTIxYTg0KDB4MTZkKV0sXzB4NTQ0Y2MyPV8weDM0OTNmY1tfMHg1MjFhODQoMHgxNDkpXSxfMHgzZWIzZTY9eydoaXRzJzp7fSwndHMnOnt9fSxfMHgyNWZmMTQ9WShfMHgzMDgwZTAsXzB4MmY5OTMxLF8weDNlYjNlNixfMHg0ZTBlNzcpLF8weDE5MjMwMD1fMHgyNTg3M2Y9PntfMHgzZWIzZTZbJ3RzJ11bXzB4MjU4NzNmXT1fMHg4MTkyNzMoKTt9LF8weDQ0ZjUxMD0oXzB4NTU2MmZkLF8weDJmNjcwNik9Pnt2YXIgXzB4MmVjZDY2PV8weDUyMWE4NDtsZXQgXzB4MmNjOTE2PV8weDNlYjNlNlsndHMnXVtfMHgyZjY3MDZdO2lmKGRlbGV0ZSBfMHgzZWIzZTZbJ3RzJ11bXzB4MmY2NzA2XSxfMHgyY2M5MTYpe2xldCBfMHgxZjU4NDI9XzB4NGNhZDMwKF8weDJjYzkxNixfMHg4MTkyNzMoKSk7XzB4NTM3NTFjKF8weDI1ZmYxNChfMHgyZWNkNjYoMHgxYTQpLF8weDU1NjJmZCxfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsW18weDFmNTg0Ml0sXzB4MmY2NzA2KSk7fX0sXzB4MThmNzhiPV8weDI3ZTUzMz0+XzB4NzRhZGNjPT57dmFyIF8weDUzZjMxYT1fMHg1MjFhODQ7dHJ5e18weDE5MjMwMChfMHg3NGFkY2MpLF8weDI3ZTUzMyhfMHg3NGFkY2MpO31maW5hbGx5e18weDMwODBlMFtfMHg1M2YzMWEoMHhmOSldW18weDUzZjMxYSgweDFhNCldPV8weDI3ZTUzMzt9fSxfMHgxNTUzZDg9XzB4NGI2MjRiPT5fMHg1Y2E0NDE9Pnt2YXIgXzB4MmZmZmY3PV8weDUyMWE4NDt0cnl7bGV0IFtfMHg1ZTJkODYsXzB4NDZkYjUyXT1fMHg1Y2E0NDFbXzB4MmZmZmY3KDB4MTNkKV0oXzB4MmZmZmY3KDB4MTdkKSk7XzB4NDRmNTEwKF8weDQ2ZGI1MixfMHg1ZTJkODYpLF8weDRiNjI0YihfMHg1ZTJkODYpO31maW5hbGx5e18weDMwODBlMFtfMHgyZmZmZjcoMHhmOSldW18weDJmZmZmNygweDE0MildPV8weDRiNjI0Yjt9fTtfMHgzMDgwZTBbXzB4NTIxYTg0KDB4ZjQpXT17J2NvbnNvbGVMb2cnOihfMHgxOGUyODAsXzB4MWY0ZDE1KT0+e3ZhciBfMHgxYjk4ZjU9XzB4NTIxYTg0O18weDMwODBlMFsnY29uc29sZSddW18weDFiOThmNSgweDFhMCldW18weDFiOThmNSgweDEwNildIT09XzB4MWI5OGY1KDB4MTIzKSYmXzB4NTM3NTFjKF8weDI1ZmYxNChfMHgxYjk4ZjUoMHgxYTApLF8weDE4ZTI4MCxfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsXzB4MWY0ZDE1KSk7fSwnY29uc29sZVRyYWNlJzooXzB4NGM5NTZiLF8weGNkZGIxMSk9Pnt2YXIgXzB4NWRkMDI4PV8weDUyMWE4NDtfMHgzMDgwZTBbXzB4NWRkMDI4KDB4ZjkpXVtfMHg1ZGQwMjgoMHgxYTApXVtfMHg1ZGQwMjgoMHgxMDYpXSE9PV8weDVkZDAyOCgweDExMCkmJl8weDUzNzUxYyhfMHgyNWZmMTQoXzB4NWRkMDI4KDB4MTU2KSxfMHg0Yzk1NmIsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLF8weGNkZGIxMSkpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHgxMGEzMDg9XzB4NTIxYTg0O18weDMwODBlMFsnY29uc29sZSddW18weDEwYTMwOCgweDFhNCldPV8weDE4Zjc4YihfMHgzMDgwZTBbJ2NvbnNvbGUnXVtfMHgxMGEzMDgoMHgxYTQpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDQ0YTg4ND1fMHg1MjFhODQ7XzB4MzA4MGUwW18weDQ0YTg4NCgweGY5KV1bJ3RpbWVFbmQnXT1fMHgxNTUzZDgoXzB4MzA4MGUwW18weDQ0YTg4NCgweGY5KV1bXzB4NDRhODg0KDB4MTQyKV0pO30sJ2F1dG9Mb2cnOihfMHg0Nzk2NjAsXzB4ZDE2ODZjKT0+e3ZhciBfMHg0MDY0NmU9XzB4NTIxYTg0O18weDUzNzUxYyhfMHgyNWZmMTQoXzB4NDA2NDZlKDB4MWEwKSxfMHhkMTY4NmMsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLFtfMHg0Nzk2NjBdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg5MWZlZDUsXzB4NDBhODRmKT0+e3ZhciBfMHg3MzQ0ZTE9XzB4NTIxYTg0O18weDUzNzUxYyhfMHgyNWZmMTQoXzB4NzM0NGUxKDB4MWEwKSxfMHg5MWZlZDUsXzB4NTQ0Y2MyKCksXzB4ZjQ4OWUyLF8weDQwYTg0ZikpO30sJ2F1dG9UcmFjZSc6KF8weDM1NDZmNyxfMHgzZDhlYjUpPT57dmFyIF8weDI1NTEyZj1fMHg1MjFhODQ7XzB4NTM3NTFjKF8weDI1ZmYxNChfMHgyNTUxMmYoMHgxNTYpLF8weDNkOGViNSxfMHg1NDRjYzIoKSxfMHhmNDg5ZTIsW18weDM1NDZmN10pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4MmI3MjJmLF8weDJkZjAzYik9Pnt2YXIgXzB4MjBhY2YxPV8weDUyMWE4NDtfMHg1Mzc1MWMoXzB4MjVmZjE0KF8weDIwYWNmMSgweDE1NiksXzB4MmI3MjJmLF8weDU0NGNjMigpLF8weGY0ODllMixfMHgyZGYwM2IpKTt9LCdhdXRvVGltZSc6KF8weDI5NzE5NCxfMHgxYTZiNjgsXzB4NTlkNjBiKT0+e18weDE5MjMwMChfMHg1OWQ2MGIpO30sJ2F1dG9UaW1lRW5kJzooXzB4NGIxMTc0LF8weDE5ZTRmOSxfMHgzZTk3NzMpPT57XzB4NDRmNTEwKF8weDE5ZTRmOSxfMHgzZTk3NzMpO30sJ2NvdmVyYWdlJzpfMHgxNjkwMzU9Pnt2YXIgXzB4OTRmZGQ9XzB4NTIxYTg0O18weDUzNzUxYyh7J21ldGhvZCc6XzB4OTRmZGQoMHgxODcpLCd2ZXJzaW9uJzpfMHg0ZTBlNzcsJ2FyZ3MnOlt7J2lkJzpfMHgxNjkwMzV9XX0pO319O2xldCBfMHg1Mzc1MWM9YihfMHgzMDgwZTAsXzB4MTNhZDg1LF8weDRiMDE5OSxfMHgyZDQwZjYsXzB4NGI3ZTQ1LF8weDM2NjMwMyksXzB4ZjQ4OWUyPV8weDMwODBlMFtfMHg1MjFhODQoMHhkMyldO3JldHVybiBfMHgzMDgwZTBbXzB4NTIxYTg0KDB4ZjQpXTt9KShnbG9iYWxUaGlzLF8weDMwZDQ2YygweGUwKSxfMHgzMGQ0NmMoMHhjYyksXFxcImM6XFxcXFxcXFxVc2Vyc1xcXFxcXFxcVVNFUlxcXFxcXFxcLnZzY29kZVxcXFxcXFxcZXh0ZW5zaW9uc1xcXFxcXFxcd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMS4wLjI0MFxcXFxcXFxcbm9kZV9tb2R1bGVzXFxcIixfMHgzMGQ0NmMoMHgxN2EpLF8weDMwZDQ2YygweGYyKSxfMHgzMGQ0NmMoMHhkOSksXzB4MzBkNDZjKDB4MWFhKSxfMHgzMGQ0NmMoMHgxMDMpLF8weDMwZDQ2YygweGVlKSk7XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICB1cmwsXG4gIGxvZ28sXG4gIGF1dGhvcixcbiAgc2l0ZU5hbWUsXG4gIHB1Ymxpc2hlZFRpbWUsXG4gIG1vZGlmaWVkVGltZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0eXBlJyBjb250ZW50PSdhcnRpY2xlJyAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtzaXRlTmFtZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9e3VybH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZScgY29udGVudD17bG9nb30gLz5cbiAgICAgIHtwdWJsaXNoZWRUaW1lICYmIChcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9J2FydGljbGU6cHVibGlzaGVkX3RpbWUnIGNvbnRlbnQ9e3B1Ymxpc2hlZFRpbWV9IC8+XG4gICAgICApfVxuICAgICAgPG1ldGEgcHJvcGVydHk9J2FydGljbGU6bW9kaWZpZWRfdGltZScgY29udGVudD17bW9kaWZpZWRUaW1lfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J2FydGljbGU6YXV0aG9yJyBjb250ZW50PXthdXRob3J9IC8+XG5cbiAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD0nc2hvcnRjdXQgaWNvbidcbiAgICAgICAgaHJlZj0nYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZz8xMjMnXG4gICAgICAgIHR5cGU9J2ltYWdlL3BuZydcbiAgICAgIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2Fzc2V0cy9jc3MvYW5pbWF0ZS5jc3MnIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2Fzc2V0cy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2Fzc2V0cy9jc3MvZGVmYXVsdC5jc3MnIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJyAvPlxuXG4gICAgICB7LyogRk9SIElFOSBiZWxvdyAqL31cbiAgICAgIHsvKiBbaWYgbHQgSUUgOV0+ICovfVxuICAgICAgPHNjcmlwdCBzcmM9J2Fzc2V0cy9qcy92ZW5kb3IvanF1ZXJ5LTEuMTIuNC5taW4uanMnPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9J2Fzc2V0cy9qcy92ZW5kb3IvbW9kZXJuaXpyLTMuNy4xLm1pbi5qcyc+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz0nYXNzZXRzL2pzL2Jvb3RzdHJhcC5taW4uanMnPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9J2Fzc2V0cy9qcy9qcXVlcnkuZWFzaW5nLm1pbi5qcyc+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICApO1xufTtcbiIsImNvbnN0IGJhc2VDb25maWcgPSB7XG4gIHdlZGRpbmdEYXk6ICdTYXR1cmRheScsXG4gIHdlZGRpbmdUaW1lOiAnOGFtIC0gOHBtJyxcbiAgd2VkZGluZ0RhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICBzaG93QnVpbHRXaXRoSW5mbzogdHJ1ZSxcbiAgc2hvd1FyQ29kZTogZmFsc2UsXG4gIGNhbGVuZGFySW5mbzoge1xuICAgIHRpbWVTdGFydElTTzogJzIwMjMtMTItMTZUMTk6MDA6MDArMDg6MDAnLFxuICAgIHRpbWVFbmRJU086ICcyMDIzLTEyLTE2VDIxOjAwOjAwKzA4OjAwJyxcbiAgfSxcbiAgY291cGxlSW5mbzoge1xuICAgIGJyaWRlTmFtZTogJ09sYWR1bm5pICcsXG4gICAgZ3Jvb21OYW1lOiAnQWRld2FsZScsXG4gICAgY291cGxlTmFtZUZvcm1hdDogJ0dST09NX0ZJUlNUJyxcbiAgICBoYXNodGFnOiAnI0RXZWRkaW5nJyxcbiAgfSxcbiAgdmVudWU6IHtcbiAgICBuYW1lOiAnTGFobCBCZXZlbnQgQ2VudGVyJyxcbiAgICBhZGRyZXNzTGluZTE6ICcxMTEgb2JhZmVtaSBhd29sb3dvIHdheSBpa2VqYSBMYWdvcywgTmlnZXJpYScsXG4gICAgLy8gYWRkcmVzc0xpbmUyOiAnRWtvIGhvdGVsIFYuSSBMYWdvcyBTdGF0ZScsXG4gICAgY2l0eTogJ0xhZ29zJyxcbiAgICBjb3VudHJ5OiAnTmlnZXJpYScsXG4gICAgbWFwVXJsOiAnaHR0cHM6Ly9tYXBzLmFwcC5nb28uZ2wvS2hvRkRNVW50YlRVNkwzeTknLFxuICB9LFxuICBsb2dvOiB7XG4gICAgaGVhZGVyTG9nbzogJ2Fzc2V0cy9pbWFnZXMvcmluZy1zdmcucG5nJyxcbiAgICBmb290ZXJMb2dvOiAnYXNzZXRzL3ZpZGVvL2F3LXJpbmctbG9nby10aWNrZXIubXA0JyxcbiAgICBmb290ZXJMb2dvVHlwZTogJ21wNCcsXG4gIH0sXG4gIG9nVGFnczoge1xuICAgIGxvZ286ICdhc3NldHMvaW1hZ2VzL2F3LXJpbmctbG9nby5wbmcnLFxuICAgIHNpdGVOYW1lOiAnaHR0cHM6Ly9mdWdseWRhbWkuZ2l0aHViLmlvL2FkZXdhbGUtd2VkZGluZy8nLFxuICAgIHB1Ymxpc2hlZFRpbWU6ICcyMDIzLTA5LTA3JyxcbiAgfSxcbn07XG5cbmNvbnN0IGxhbmcgPSB7XG4gIGlkOiB7XG4gICAgd2VkZGluZ0RheTogJ1NhYnR1JyxcbiAgICB3ZWRkaW5nRGF0ZTogJzIyIEZlYnJ1YXJpIDIwMjAnLFxuICAgIHZlbnVlOiB7XG4gICAgICAuLi5iYXNlQ29uZmlnLnZlbnVlLFxuICAgICAgbmFtZTogJ0hvdGVsIE92YWwnLFxuICAgICAgYWRkcmVzc0xpbmUyOiAnU3VyYWJheWEsIEphd2EgVGltdXIsIDYwMjQxLCcsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4uYmFzZUNvbmZpZyxcbiAgbGFuZyxcbn07XG4iLCJpbXBvcnQgSTE4biBmcm9tIFwiaTE4bi1qc1wiO1xuaW1wb3J0IGVuIGZyb20gXCIuL2xhbmcvZW5cIjtcbmltcG9ydCBpZCBmcm9tIFwiLi9sYW5nL2lkXCI7XG5cbmNvbnN0IHN1cHBvcnRlZExhbmd1YWdlcyA9IFtcbiAge1xuICAgIGNvZGU6IFwiZW5cIixcbiAgICBsYWJlbDogXCJFbmdsaXNoXCIsXG4gICAgdHJhbnNsYXRpb25zOiBlblxuICB9LFxuICB7XG4gICAgY29kZTogXCJpZFwiLFxuICAgIGxhYmVsOiBcIkluZG9uZXNpYVwiLFxuICAgIHRyYW5zbGF0aW9uczogaWRcbiAgfVxuXTtcblxuSTE4bi5kZWZhdWx0TG9jYWxlID0gXCJlblwiO1xuc3VwcG9ydGVkTGFuZ3VhZ2VzLmZvckVhY2gobGFuZyA9PiB7XG4gIEkxOG4udHJhbnNsYXRpb25zW2xhbmcuY29kZV0gPSBsYW5nLnRyYW5zbGF0aW9ucztcbn0pO1xuXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VPcHRpb25zID0gc3VwcG9ydGVkTGFuZ3VhZ2VzLm1hcChsYW5nID0+ICh7XG4gIHZhbHVlOiBsYW5nLmNvZGUsXG4gIGxhYmVsOiBsYW5nLmxhYmVsXG59KSk7XG5cbmV4cG9ydCBjb25zdCBzZXRMb2NhbGUgPSBsb2NhbGUgPT4ge1xuICBJMThuLmxvY2FsZSA9IGxvY2FsZTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ID0gKG5hbWUsIHBhcmFtcyA9IHt9KSA9PiB7XG4gIHJldHVybiBJMThuLnQobmFtZSwgcGFyYW1zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBUcmFucyA9IHByb3BzID0+IChcbiAgPHNwYW5cbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHQocHJvcHMuaTE4bktleSwgeyAuLi5wcm9wcyB9KSB9fVxuICA+PC9zcGFuPlxuKTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGUgPSBJMThuLmRlZmF1bHRMb2NhbGU7XG5cbmV4cG9ydCBjb25zdCB1c2VUcmFuc2xhdGlvbiA9IGxvY2FsZSA9PiB7XG4gIEkxOG4ubG9jYWxlID0gbG9jYWxlO1xuICByZXR1cm4gSTE4bi50O1xufTtcbiIsImNvbnN0IGZhbGxiYWNrSG9zdCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChwYXRoLCBoZWFkZXJzKSA9PiB7XG4gIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICAvLyBVc2UgYnJvd3NlcidzIGB3aW5kb3dgIGlmIGhlYWRlcnMgaXMgbm90IHByb3ZpZGVkXG4gIGlmICghaGVhZGVycyAmJiBwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcImNvdWxkIG5vdCByZXNvbHZlIHBhdGggd2l0aG91dCByZXF1ZXN0IGhlYWRlcnM6IHdpbmRvdyBpcyB1bmRlZmluZWRcIlxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdH0ke3BhdGh9YDtcbiAgfVxuICBjb25zdCBob3N0ID0gaGVhZGVyc1xuICAgID8gaGVhZGVyc1tcIngtbm93LWRlcGxveW1lbnQtdXJsXCJdIHx8XG4gICAgICBoZWFkZXJzW1wieC1mb3J3YXJkZWQtaG9zdFwiXSB8fFxuICAgICAgaGVhZGVycy5ob3N0XG4gICAgOiBudWxsO1xuICBjb25zdCBzY2hlbWUgPVxuICAgIGhlYWRlcnMgJiYgaGVhZGVyc1tcIngtZm9yd2FyZGVkLXByb3RvXCJdXG4gICAgICA/IGhlYWRlcnNbXCJ4LWZvcndhcmRlZC1wcm90b1wiXVxuICAgICAgOiBcImh0dHBcIjtcbiAgcmV0dXJuIGhvc3QgPyBgJHtzY2hlbWV9Oi8vJHtob3N0fSR7cGF0aH1gIDogYCR7ZmFsbGJhY2tIb3N0fSR7cGF0aH1gO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImkxOG4tanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFyY29kZS5yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hZGQtdG8tY2FsZW5kYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYmx1cmhhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3aXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2lwZXIvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=