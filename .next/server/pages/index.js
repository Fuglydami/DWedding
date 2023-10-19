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
      lineNumber: 48,
      columnNumber: 21
    }
  }, "&"), " ", brideName) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, brideName, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: attending,
    1: setAttending
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbz2UFuOX4jhUzM17LMakLecQLO1kMd2YS4mxxoJiD6BTrMmzCsVedvhFPoxptjJ7jC5lg/exec';
  function httpStatus(statusCode) {
    if (statusCode >= 200 && statusCode <= 299) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Success!', 'We appreciate your response!', 'success');
      setAttending('');
      setEmail('');
      setName('');
    } else if (statusCode >= 400 && statusCode <= 499) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Error!', 'Something went wrong, please try again!', 'error');
    } else if (statusCode >= 500) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Error!', 'Something went wrong, please try again!', 'error');
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
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('', 'All fields are required', 'error');
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
      console.log(...oo_oo(`2141254841_0`, response, 'reponse'));
      const data = await response.text();
      httpStatus(response.status);

      // Response from Google Script
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Error!', 'Something went wrong, please try again!', 'error');
      console.error('Error:', error);
    }
  };
  return __jsx("div", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1703421768",
    __self: undefined
  }, "a.react-add-to-calendar__button span{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxhZGV3YWxlLXdlZGRpbmctaW52aXRlXFxwYWdlc1xcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBJUyxBQUc0QixlQUNXLDREQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcYWRld2FsZS13ZWRkaW5nLWludml0ZVxccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbmNvbnN0IHRyYW5zbGF0ZUNvbmZpZyA9IChhcHBDb25maWcsIGxvY2FsZSkgPT4ge1xuICBpZiAoIWxvY2FsZSB8fCBsb2NhbGUgPT09IGRlZmF1bHRMb2NhbGUpIHtcbiAgICByZXR1cm4gYXBwQ29uZmlnO1xuICB9XG4gIC8vIFJlcGxhY2UgY29uZmlnIHdpdGggbGFuZ1xuICBjb25zdCBjb25maWdMYW5nID0gYXBwQ29uZmlnLmxhbmdbbG9jYWxlXTtcbiAgaWYgKGNvbmZpZ0xhbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBsb2NhbGU6ICcsIGxvY2FsZSk7XG4gIH1cbiAgcmV0dXJuIHsgLi4uYXBwQ29uZmlnLCAuLi5jb25maWdMYW5nIH07XG59O1xuXG5jb25zdCBTaG93SW52aXRlID0gKHsgY3VycmVudFVybCwgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCwgZ3Vlc3QgfSkgPT4ge1xuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb24oZ3Vlc3QubG9jYWxlKTtcblxuICAvLyBJbml0aWF0ZSBjb25maWcgdmFyaWFibGVzXG4gIGNvbnN0IHtcbiAgICBsb2dvLFxuICAgIG9nVGFncyxcbiAgICBjb3VwbGVJbmZvLFxuICAgIHZlbnVlLFxuICAgIHdlZGRpbmdEYXksXG4gICAgd2VkZGluZ0RhdGUsXG4gICAgd2VkZGluZ1RpbWUsXG4gICAgY2FsZW5kYXJJbmZvLFxuICB9ID0gdHJhbnNsYXRlQ29uZmlnKGFwcENvbmZpZywgZ3Vlc3QubG9jYWxlKTtcbiAgY29uc3QgeyBicmlkZU5hbWUsIGdyb29tTmFtZSwgaGFzaHRhZywgY291cGxlTmFtZUZvcm1hdCB9ID0gY291cGxlSW5mbztcblxuICBjb25zdCBjb3VwbGVOYW1lU3RyID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnXG4gICAgICA/IGAke2dyb29tTmFtZX0gJiAke2JyaWRlTmFtZX1gXG4gICAgICA6IGAke2JyaWRlTmFtZX0gJiAke2dyb29tTmFtZX1gO1xuICBjb25zdCBjb3VwbGVOYW1lID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnID8gKFxuICAgICAgPD5cbiAgICAgICAge2dyb29tTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHticmlkZU5hbWV9XG4gICAgICA8Lz5cbiAgICApIDogKFxuICAgICAgPD5cbiAgICAgICAge2JyaWRlTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHtncm9vbU5hbWV9XG4gICAgICA8Lz5cbiAgICApO1xuXG4gIC8vIFZlbnVlIGluZm9cbiAgY29uc3QgdmVudWVCcmllZiA9IGAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9LCAke3ZlbnVlLmNvdW50cnl9YDtcbiAgY29uc3Qgd2VkZGluZ0RhdGVCcmllZiA9IGAke3dlZGRpbmdEYXl9LCAke3dlZGRpbmdEYXRlfWA7XG5cbiAgLy8gRXZlbnQgaW5mb1xuICBjb25zdCBldmVudFRpdGxlID0gYCR7Y291cGxlTmFtZVN0cn0ncyBXZWRkaW5nYDtcbiAgbGV0IGV2ZW50RGVzY3JpcHRpb24gPSBgJHt3ZWRkaW5nRGF0ZUJyaWVmfSBhdCAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9YDtcbiAgaWYgKGd1ZXN0Lm5hbWUpIHtcbiAgICBldmVudERlc2NyaXB0aW9uID0gYERlYXIgJHtndWVzdC5uYW1lfSwgeW91IGFyZSBjb3JkaWFsbHkgaW52aXRlZCB0byBvdXIgd2VkZGluZyBvbiAke3dlZGRpbmdEYXRlfSBhdCAke3ZlbnVlLm5hbWV9LiBMb29raW5nIGZvcndhcmQgdG8gc2VlaW5nIHlvdSFgO1xuICB9XG5cbiAgLy8gQ2FsZW5kYXIgcGF5bG9hZFxuICBjb25zdCBjYWxlbmRhckV2ZW50ID0ge1xuICAgIHRpdGxlOiBldmVudFRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBldmVudERlc2NyaXB0aW9uLFxuICAgIGxvY2F0aW9uOiBgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWAsXG4gICAgc3RhcnRUaW1lOiBjYWxlbmRhckluZm8udGltZVN0YXJ0SVNPLFxuICAgIGVuZFRpbWU6IGNhbGVuZGFySW5mby50aW1lRW5kSVNPLFxuICB9O1xuXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2F0dGVuZGluZywgc2V0QXR0ZW5kaW5nXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBwcm94eVVybCA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xuICBjb25zdCBzY3JpcHRVcmwgPVxuICAgICdodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnoyVUZ1T1g0amhVek0xN0xNYWtMZWNRTE8xa01kMllTNG14eG9KaUQ2QlRyTW16Q3NWZWR2aEZQb3hwdGpKN2pDNWxnL2V4ZWMnO1xuXG4gIGZ1bmN0aW9uIGh0dHBTdGF0dXMoc3RhdHVzQ29kZSkge1xuICAgIGlmIChzdGF0dXNDb2RlID49IDIwMCAmJiBzdGF0dXNDb2RlIDw9IDI5OSkge1xuICAgICAgU3dhbC5maXJlKCdTdWNjZXNzIScsICdXZSBhcHByZWNpYXRlIHlvdXIgcmVzcG9uc2UhJywgJ3N1Y2Nlc3MnKTtcbiAgICAgIHNldEF0dGVuZGluZygnJyk7XG4gICAgICBzZXRFbWFpbCgnJyk7XG4gICAgICBzZXROYW1lKCcnKTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPj0gNDAwICYmIHN0YXR1c0NvZGUgPD0gNDk5KSB7XG4gICAgICBTd2FsLmZpcmUoJ0Vycm9yIScsICdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiEnLCAnZXJyb3InKTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPj0gNTAwKSB7XG4gICAgICBTd2FsLmZpcmUoJ0Vycm9yIScsICdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiEnLCAnZXJyb3InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd1bmtub3duIHN0YXR1cyc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRDb3JzRnJlZVVybCh0YXJnZXQpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vcHJveHkuY29ycy5zaC8ke3RhcmdldH1gO1xuICB9XG4gIGNvbnN0IGNvcnNGcmVlVXJsID0gYnVpbGRDb3JzRnJlZVVybChzY3JpcHRVcmwpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhYXR0ZW5kaW5nKSB7XG4gICAgICBTd2FsLmZpcmUoJycsICdBbGwgZmllbGRzIGFyZSByZXF1aXJlZCcsICdlcnJvcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29yc0ZyZWVVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIGVtYWlsLCBhdHRlbmRpbmcgfSksXG4gICAgICB9KTtcblxuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMjE0MTI1NDg0MV8wYCxyZXNwb25zZSwgJ3JlcG9uc2UnKSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgaHR0cFN0YXR1cyhyZXNwb25zZS5zdGF0dXMpO1xuXG4gICAgICAvLyBSZXNwb25zZSBmcm9tIEdvb2dsZSBTY3JpcHRcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBTd2FsLmZpcmUoJ0Vycm9yIScsICdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiEnLCAnZXJyb3InKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYS5yZWFjdC1hZGQtdG8tY2FsZW5kYXJfX2J1dHRvbiBzcGFuIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZFxuICAgICAgICB7Li4ub2dUYWdzfVxuICAgICAgICB0aXRsZT17ZXZlbnRUaXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2V2ZW50RGVzY3JpcHRpb259XG4gICAgICAgIGd1ZXN0TmFtZT17Z3Vlc3QubmFtZX1cbiAgICAgICAgdXJsPXtjdXJyZW50VXJsfVxuICAgICAgICBkYXRlPXt3ZWRkaW5nRGF0ZUJyaWVmfVxuICAgICAgICBtb2RpZmllZFRpbWU9e2d1ZXN0TGlzdExhc3RVcGRhdGVkQXR9XG4gICAgICAgIHZlbnVlPXt2ZW51ZUJyaWVmfVxuICAgICAgICBsb2dvPXtyZXNvbHZlUGF0aChvZ1RhZ3MubG9nbyl9XG4gICAgICAgIGF1dGhvcj17cmVzb2x2ZVBhdGgoJy8nKX1cbiAgICAgIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hlYWRlcl9hcmVhJz5cbiAgICAgICAgPGRpdiBpZD0naG9tZScgY2xhc3NOYW1lPSdoZWFkZXJfc2xpZGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stbGlzdCBkcmFnZ2FibGUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLXRyYWNrJyBzdHlsZT17eyBvcGFjaXR5OiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVfc2xpZGVyIGJnX2NvdmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTEwJz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9jb250ZW50IHRleHQtY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA2MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nby5oZWFkZXJMb2dvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX3N1Yl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuMnMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdzaXRlSW50cm8nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuN3MnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvY2F0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzFzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzFzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzaHRhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvY2F0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzFzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzFzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUubmFtZX0sIHt2ZW51ZS5jaXR5fSwge3ZlbnVlLmNvdW50cnl9LlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9J2NvbWluZ19zb29uJyBjbGFzc05hbWU9J2NvbWluZ19zb29uX2FyZWEgcHQtMjAgcGItNzAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMScgc3R5bGU9e3sgekluZGV4OiAxIH19PlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgcHQtNTAgd293IGZhZGVJbidcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC4ycydcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC4ycycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPnt0KCdldmVudERhdGUnKX06PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57d2VkZGluZ0RhdGVCcmllZn08L3A+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QWRkVG9DYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICBldmVudD17Y2FsZW5kYXJFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9e3QoJ2J0bkFkZFRvTXlDYWxlbmRhcicpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy9zZWN0aW9uX3NoYXBlLnBuZycgYWx0PSdTaGFwZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9jb3VudCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC0yMCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNjAsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZV9jb3VudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMzAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvdW50X2NvbnRlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxLCBwYWRkaW5nVG9wOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmVudWUubWFwVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy9iZXZlbnQucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2JldmVudCBjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc3NXZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8yJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMi5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29udGFjdCcgY2xhc3NOYW1lPSdjb250YWN0X2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhY3Rfd3JhcHBlciB3b3cgZmFkZUluVXBCaWcnXG4gICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjRzJ1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMzAsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC40cycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW5VcCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgdGV4dC1jZW50ZXIgcGItMzAnPlxuICAgICAgICAgICAgICAgICAge2d1ZXN0Lm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25HcmVldGluZycpfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJyB9fT57Z3Vlc3QubmFtZX0sPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3QoJ2ludml0YXRpb25JbnRybycpfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZGltZ3JleScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IHQoJ2ludml0YXRpb25Db250ZW50VGV4dEFsaWduJyksXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpPlxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25Db250ZW50Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnaW52aXRhdGlvbk91dHJvJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXQoJ2ludml0YXRpb25PdXRybycpLnN0YXJ0c1dpdGgoJ1ttaXNzaW5nJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25PdXRybycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHthcHBDb25maWcuc2hvd1FyQ29kZSAmJiBndWVzdC5uYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwLCBtYXJnaW5Cb3R0b206IDM1IH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e2d1ZXN0Lmd1ZXN0SWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXt2ZW51ZS5tYXBVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzAuMnJlbSBzb2xpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Yj57dmVudWUubmFtZX08L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5hZGRyZXNzTGluZTF9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7Lyoge3ZlbnVlLmFkZHJlc3NMaW5lMn1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICB7dmVudWUuY291bnRyeX0uXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQnIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgIHt3ZWRkaW5nRGF0ZX0gwrcge3dlZGRpbmdUaW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICB7LyogYXR0ZW5kaW5nIGZvcm0gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG10LTUnPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmb3JtX3RpdGxlIG1iLTInPlxuICAgICAgICAgICAgICAgICAgICAgIEluZm9ybSBVcyBvZiB5b3VyIGF2YWlsYWJpbGl0eVxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IG1iLTMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnIGNsYXNzTmFtZT0nZm9ybS1sYWJlbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnIGNsYXNzTmFtZT0nZm9ybS1sYWJlbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nYXR0ZW5kaW5nJyBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBXaWxsIHlvdSBiZSBhdHRlbmRpbmc/XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdhdHRlbmRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdHRlbmRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXR0ZW5kaW5nKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyA/ICdTdWJtaXR0aW5nLi4uJyA6ICdTdWJtaXQnfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiByZXNwb25zZSBtb2RhbCAqL31cblxuICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25DbG9zaW5nJykgJiZcbiAgICAgICAgICAgICAgICAgICAgIXQoJ2ludml0YXRpb25DbG9zaW5nJykuc3RhcnRzV2l0aCgnW21pc3NpbmcnKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA0MjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogdCgnaW52aXRhdGlvbkNsb3NpbmcnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBGb290ZXIgc2VjdGlvbiAqL31cbiAgICAgIDxmb290ZXIgaWQ9J2Zvb3RlcicgY2xhc3NOYW1lPSdmb290ZXJfYXJlYSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfc2hhcGVfMSc+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl93aWRnZXQgcHQtNTAgcGItMTAgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9sb2dvJz5cbiAgICAgICAgICAgICAgey8qIHtsb2dvLmZvb3RlckxvZ28gJiZcbiAgICAgICAgICAgICAgICAobG9nby5mb290ZXJMb2dvVHlwZSA9PT0gJ21wNCcgPyAoXG4gICAgICAgICAgICAgICAgICA8dmlkZW8gaGVpZ2h0PScxNDAnIGF1dG9QbGF5IG11dGVkIGxvb3A+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtsb2dvLmZvb3RlckxvZ299IHR5cGU9J3ZpZGVvL21wNCcgLz5cbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgKSA6ICggKi99XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDkwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17bG9nby5mb290ZXJMb2dvfSAvPiAqL31cbiAgICAgICAgICAgICAgey8qICkpfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl90aXRsZSAnPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e2NvdXBsZU5hbWV9PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGg1XG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdncmV5JywgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnNDBweCcgfX1cbiAgICAgICAgPlxuICAgICAgICAgICNEV2VkZGluZ1xuICAgICAgICA8L2g1PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaG93SW52aXRlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcbiAgY29uc3QgbG9jYWxlUGFyYW1zID0gY3R4LnF1ZXJ5LmxhbmcgfHwgZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgZW1wdHlHdWVzdFBhcmFtcyA9IHtcbiAgICBndWVzdDoge1xuICAgICAgZ3Vlc3RJZDogJycsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGdyZWV0aW5nOiAnJyxcbiAgICAgIGxvY2FsZTogbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgY3VycmVudFVybCA9IHJlc29sdmVQYXRoKGN0eC5yZXEudXJsKTtcbiAgY29uc3QgZ3Vlc3RJZCA9IGN0eC5xdWVyeS51O1xuICBpZiAoIWd1ZXN0SWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGd1ZXN0RGF0YSA9IGd1ZXN0TGlzdC5kYXRhO1xuICBjb25zdCBndWVzdExpc3RMYXN0VXBkYXRlZEF0ID0gZ3Vlc3RMaXN0Lm1ldGEubGFzdFVwZGF0ZWRBdDtcbiAgY29uc3QgeyBuYW1lLCBncmVldGluZywgbG9jYWxlIH0gPVxuICAgIGd1ZXN0RGF0YS5maWx0ZXIoKGd1ZXN0KSA9PiBndWVzdC5ndWVzdElkID09PSBndWVzdElkKVswXSB8fCB7fTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVcmwsXG4gICAgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCxcbiAgICBndWVzdDoge1xuICAgICAgbmFtZSxcbiAgICAgIGdyZWV0aW5nLFxuICAgICAgZ3Vlc3RJZCxcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0ludml0ZTtcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4MjlkNTk2PV8weDQxYzk7KGZ1bmN0aW9uKF8weDI1MjY4MyxfMHgzNzJiY2Epe3ZhciBfMHgyM2FiZmY9XzB4NDFjOSxfMHgyZjFiNDE9XzB4MjUyNjgzKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg0ZWZkYTI9cGFyc2VJbnQoXzB4MjNhYmZmKDB4MWY1KSkvMHgxKy1wYXJzZUludChfMHgyM2FiZmYoMHgxNzgpKS8weDIqKC1wYXJzZUludChfMHgyM2FiZmYoMHgxZmMpKS8weDMpKy1wYXJzZUludChfMHgyM2FiZmYoMHgxNjIpKS8weDQrLXBhcnNlSW50KF8weDIzYWJmZigweDIzMikpLzB4NSooLXBhcnNlSW50KF8weDIzYWJmZigweDE2NykpLzB4NikrLXBhcnNlSW50KF8weDIzYWJmZigweDFjOCkpLzB4NystcGFyc2VJbnQoXzB4MjNhYmZmKDB4MjBkKSkvMHg4K3BhcnNlSW50KF8weDIzYWJmZigweDE4MikpLzB4OSoocGFyc2VJbnQoXzB4MjNhYmZmKDB4MWMxKSkvMHhhKTtpZihfMHg0ZWZkYTI9PT1fMHgzNzJiY2EpYnJlYWs7ZWxzZSBfMHgyZjFiNDFbJ3B1c2gnXShfMHgyZjFiNDFbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDQ1ZGVjMil7XzB4MmYxYjQxWydwdXNoJ10oXzB4MmYxYjQxWydzaGlmdCddKCkpO319fShfMHg1NTU2LDB4MTk0ZTkpKTt2YXIgaj1PYmplY3RbXzB4MjlkNTk2KDB4MjE1KV0sSD1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10sRz1PYmplY3RbXzB4MjlkNTk2KDB4MjA1KV0sZWU9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eU5hbWVzJ10sdGU9T2JqZWN0W18weDI5ZDU5NigweDFiMSldLG5lPU9iamVjdFtfMHgyOWQ1OTYoMHgxODApXVsnaGFzT3duUHJvcGVydHknXSxyZT0oXzB4MjhlM2QyLF8weDQ5OTYxMCxfMHhmNDg5MjAsXzB4ZjFkYTgxKT0+e3ZhciBfMHgxZWI0MGM9XzB4MjlkNTk2O2lmKF8weDQ5OTYxMCYmdHlwZW9mIF8weDQ5OTYxMD09XzB4MWViNDBjKDB4MTk0KXx8dHlwZW9mIF8weDQ5OTYxMD09XzB4MWViNDBjKDB4MjFkKSl7Zm9yKGxldCBfMHgxZTQ2YzYgb2YgZWUoXzB4NDk5NjEwKSkhbmVbXzB4MWViNDBjKDB4MThjKV0oXzB4MjhlM2QyLF8weDFlNDZjNikmJl8weDFlNDZjNiE9PV8weGY0ODkyMCYmSChfMHgyOGUzZDIsXzB4MWU0NmM2LHsnZ2V0JzooKT0+XzB4NDk5NjEwW18weDFlNDZjNl0sJ2VudW1lcmFibGUnOiEoXzB4ZjFkYTgxPUcoXzB4NDk5NjEwLF8weDFlNDZjNikpfHxfMHhmMWRhODFbJ2VudW1lcmFibGUnXX0pO31yZXR1cm4gXzB4MjhlM2QyO30seD0oXzB4MjY0YjkzLF8weDNiYzc5YyxfMHg1NTc0YjYpPT4oXzB4NTU3NGI2PV8weDI2NGI5MyE9bnVsbD9qKHRlKF8weDI2NGI5MykpOnt9LHJlKF8weDNiYzc5Y3x8IV8weDI2NGI5M3x8IV8weDI2NGI5M1snX19lcycrJ01vZHVsZSddP0goXzB4NTU3NGI2LF8weDI5ZDU5NigweDFkYikseyd2YWx1ZSc6XzB4MjY0YjkzLCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4NTU3NGI2LF8weDI2NGI5MykpLFg9Y2xhc3N7Y29uc3RydWN0b3IoXzB4NWRhNmQ1LF8weDE3MGU2NyxfMHgzY2M3MmUsXzB4NDRmY2IzLF8weDU4ZDY4Yil7dmFyIF8weDU0NzUyOD1fMHgyOWQ1OTY7dGhpc1snZ2xvYmFsJ109XzB4NWRhNmQ1LHRoaXNbXzB4NTQ3NTI4KDB4MTczKV09XzB4MTcwZTY3LHRoaXNbXzB4NTQ3NTI4KDB4MWU5KV09XzB4M2NjNzJlLHRoaXNbXzB4NTQ3NTI4KDB4MjI1KV09XzB4NDRmY2IzLHRoaXNbXzB4NTQ3NTI4KDB4MTY0KV09XzB4NThkNjhiLHRoaXNbXzB4NTQ3NTI4KDB4MWJkKV09ITB4MCx0aGlzW18weDU0NzUyOCgweDFkYyldPSEweDAsdGhpc1tfMHg1NDc1MjgoMHgyMGUpXT0hMHgxLHRoaXNbXzB4NTQ3NTI4KDB4MTgzKV09ITB4MSx0aGlzW18weDU0NzUyOCgweDE3YSldPV8weDVkYTZkNVsncHJvY2VzcyddPy5bXzB4NTQ3NTI4KDB4MWViKV0/LlsnTkVYVF9SVU5USU1FJ109PT1fMHg1NDc1MjgoMHgyMjMpLHRoaXNbJ19pbkJyb3dzZXInXT0hdGhpc1snZ2xvYmFsJ11bXzB4NTQ3NTI4KDB4MWU3KV0/LlsndmVyc2lvbnMnXT8uW18weDU0NzUyOCgweDFlZSldJiYhdGhpc1snX2luTmV4dEVkZ2UnXSx0aGlzW18weDU0NzUyOCgweDIwZildPW51bGwsdGhpc1tfMHg1NDc1MjgoMHgxODQpXT0weDAsdGhpc1tfMHg1NDc1MjgoMHgyMzEpXT0weDE0LHRoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ109XzB4NTQ3NTI4KDB4MjAzKSx0aGlzWydfc2VuZEVycm9yTWVzc2FnZSddPSh0aGlzW18weDU0NzUyOCgweDFlNCldP18weDU0NzUyOCgweDI0MCk6XzB4NTQ3NTI4KDB4MWFmKSkrdGhpc1tfMHg1NDc1MjgoMHgyMmEpXTt9YXN5bmNbXzB4MjlkNTk2KDB4MTViKV0oKXt2YXIgXzB4NTQ3ZjMyPV8weDI5ZDU5NjtpZih0aGlzW18weDU0N2YzMigweDIwZildKXJldHVybiB0aGlzW18weDU0N2YzMigweDIwZildO2xldCBfMHgyMDZjNzE7aWYodGhpc1tfMHg1NDdmMzIoMHgxZTQpXXx8dGhpc1tfMHg1NDdmMzIoMHgxN2EpXSlfMHgyMDZjNzE9dGhpc1tfMHg1NDdmMzIoMHgxYTUpXVtfMHg1NDdmMzIoMHgxNmQpXTtlbHNle2lmKHRoaXNbXzB4NTQ3ZjMyKDB4MWE1KV1bXzB4NTQ3ZjMyKDB4MWU3KV0/LlsnX1dlYlNvY2tldCddKV8weDIwNmM3MT10aGlzW18weDU0N2YzMigweDFhNSldWydwcm9jZXNzJ10/LltfMHg1NDdmMzIoMHgyMWIpXTtlbHNlIHRyeXtsZXQgXzB4NGRhMzZhPWF3YWl0IGltcG9ydChfMHg1NDdmMzIoMHgxYzApKTtfMHgyMDZjNzE9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weDU0N2YzMigweDFmMikpKVtfMHg1NDdmMzIoMHgyMzUpXShfMHg0ZGEzNmFbXzB4NTQ3ZjMyKDB4MWI4KV0odGhpc1tfMHg1NDdmMzIoMHgyMjUpXSxfMHg1NDdmMzIoMHgxNTcpKSlbXzB4NTQ3ZjMyKDB4MWJlKV0oKSkpW18weDU0N2YzMigweDFkYildO31jYXRjaHt0cnl7XzB4MjA2YzcxPXJlcXVpcmUocmVxdWlyZShfMHg1NDdmMzIoMHgxYzApKVtfMHg1NDdmMzIoMHgxYjgpXSh0aGlzW18weDU0N2YzMigweDIyNSldLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKF8weDU0N2YzMigweDFhZSkpO319fXJldHVybiB0aGlzW18weDU0N2YzMigweDIwZildPV8weDIwNmM3MSxfMHgyMDZjNzE7fVsnX2Nvbm5lY3RUb0hvc3ROb3cnXSgpe3ZhciBfMHg1YzY3OTI9XzB4MjlkNTk2O3RoaXNbXzB4NWM2NzkyKDB4MTgzKV18fHRoaXNbXzB4NWM2NzkyKDB4MjBlKV18fHRoaXNbXzB4NWM2NzkyKDB4MTg0KV0+PXRoaXNbXzB4NWM2NzkyKDB4MjMxKV18fCh0aGlzW18weDVjNjc5MigweDFkYyldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgwLHRoaXNbXzB4NWM2NzkyKDB4MTg0KV0rKyx0aGlzW18weDVjNjc5MigweDE2YSldPW5ldyBQcm9taXNlKChfMHgzZmJiNDcsXzB4NWQ5OTM2KT0+e3ZhciBfMHgyZDBkNWE9XzB4NWM2NzkyO3RoaXNbXzB4MmQwZDVhKDB4MTViKV0oKVtfMHgyZDBkNWEoMHgxOWUpXShfMHg1NzIzZTU9Pnt2YXIgXzB4Nzc2OTk9XzB4MmQwZDVhO2xldCBfMHg1YjMwZTA9bmV3IF8weDU3MjNlNSgnd3M6Ly8nKyghdGhpc1tfMHg3NzY5OSgweDFlNCldJiZ0aGlzW18weDc3Njk5KDB4MTY0KV0/J2dhdGV3YXkuZG9ja2VyLmludGVybmFsJzp0aGlzW18weDc3Njk5KDB4MTczKV0pKyc6Jyt0aGlzW18weDc3Njk5KDB4MWU5KV0pO18weDViMzBlMFtfMHg3NzY5OSgweDE5YSldPSgpPT57dmFyIF8weDEzZDBjNj1fMHg3NzY5OTt0aGlzW18weDEzZDBjNigweDFiZCldPSEweDEsdGhpc1tfMHgxM2QwYzYoMHgxYzUpXShfMHg1YjMwZTApLHRoaXNbXzB4MTNkMGM2KDB4MTcwKV0oKSxfMHg1ZDk5MzYobmV3IEVycm9yKCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJykpO30sXzB4NWIzMGUwW18weDc3Njk5KDB4MjJlKV09KCk9Pnt2YXIgXzB4MWRjMDI4PV8weDc3Njk5O3RoaXNbXzB4MWRjMDI4KDB4MWU0KV18fF8weDViMzBlMFtfMHgxZGMwMjgoMHgyMjYpXSYmXzB4NWIzMGUwW18weDFkYzAyOCgweDIyNildW18weDFkYzAyOCgweDFmNildJiZfMHg1YjMwZTBbJ19zb2NrZXQnXVtfMHgxZGMwMjgoMHgxZjYpXSgpLF8weDNmYmI0NyhfMHg1YjMwZTApO30sXzB4NWIzMGUwW18weDc3Njk5KDB4MWI2KV09KCk9Pnt2YXIgXzB4NDMyM2JiPV8weDc3Njk5O3RoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MCx0aGlzWydfZGlzcG9zZVdlYnNvY2tldCddKF8weDViMzBlMCksdGhpc1tfMHg0MzIzYmIoMHgxNzApXSgpO30sXzB4NWIzMGUwW18weDc3Njk5KDB4MTU2KV09XzB4Mzg2ODk1PT57dmFyIF8weDQ0NzczNz1fMHg3NzY5OTt0cnl7XzB4Mzg2ODk1JiZfMHgzODY4OTVbXzB4NDQ3NzM3KDB4MjMzKV0mJnRoaXNbXzB4NDQ3NzM3KDB4MWU0KV0mJkpTT05bXzB4NDQ3NzM3KDB4MTYzKV0oXzB4Mzg2ODk1W18weDQ0NzczNygweDIzMyldKVtfMHg0NDc3MzcoMHgxY2QpXT09PV8weDQ0NzczNygweDIyYikmJnRoaXNbXzB4NDQ3NzM3KDB4MWE1KV1bJ2xvY2F0aW9uJ11bXzB4NDQ3NzM3KDB4MjJiKV0oKTt9Y2F0Y2h7fX07fSlbXzB4MmQwZDVhKDB4MTllKV0oXzB4NDdiZDg5PT4odGhpc1tfMHgyZDBkNWEoMHgyMGUpXT0hMHgwLHRoaXNbXzB4MmQwZDVhKDB4MTgzKV09ITB4MSx0aGlzW18weDJkMGQ1YSgweDFkYyldPSEweDEsdGhpc1tfMHgyZDBkNWEoMHgxYmQpXT0hMHgwLHRoaXNbXzB4MmQwZDVhKDB4MTg0KV09MHgwLF8weDQ3YmQ4OSkpW18weDJkMGQ1YSgweDE3ZSldKF8weDIxOTg5Yz0+KHRoaXNbXzB4MmQwZDVhKDB4MjBlKV09ITB4MSx0aGlzW18weDJkMGQ1YSgweDE4MyldPSEweDEsY29uc29sZVtfMHgyZDBkNWEoMHgyMmQpXSgnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnK3RoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ10pLF8weDVkOTkzNihuZXcgRXJyb3IoXzB4MmQwZDVhKDB4MWQ1KSsoXzB4MjE5ODljJiZfMHgyMTk4OWNbXzB4MmQwZDVhKDB4MjAwKV0pKSkpKTt9KSk7fVsnX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHgxMjY2ZTkpe3ZhciBfMHg0YzYyOTU9XzB4MjlkNTk2O3RoaXNbXzB4NGM2Mjk1KDB4MjBlKV09ITB4MSx0aGlzW18weDRjNjI5NSgweDE4MyldPSEweDE7dHJ5e18weDEyNjZlOVtfMHg0YzYyOTUoMHgxYjYpXT1udWxsLF8weDEyNjZlOVtfMHg0YzYyOTUoMHgxOWEpXT1udWxsLF8weDEyNjZlOVsnb25vcGVuJ109bnVsbDt9Y2F0Y2h7fXRyeXtfMHgxMjY2ZTlbXzB4NGM2Mjk1KDB4MTc3KV08MHgyJiZfMHgxMjY2ZTlbXzB4NGM2Mjk1KDB4MWE2KV0oKTt9Y2F0Y2h7fX1bXzB4MjlkNTk2KDB4MTcwKV0oKXt2YXIgXzB4YjU2YTZlPV8weDI5ZDU5NjtjbGVhclRpbWVvdXQodGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXSksISh0aGlzW18weGI1NmE2ZSgweDE4NCldPj10aGlzWydfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCddKSYmKHRoaXNbXzB4YjU2YTZlKDB4MWUyKV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHg0MGU4YmM9XzB4YjU2YTZlO3RoaXNbXzB4NDBlOGJjKDB4MjBlKV18fHRoaXNbXzB4NDBlOGJjKDB4MTgzKV18fCh0aGlzW18weDQwZThiYygweDE4NyldKCksdGhpc1snX3dzJ10/LltfMHg0MGU4YmMoMHgxN2UpXSgoKT0+dGhpc1tfMHg0MGU4YmMoMHgxNzApXSgpKSk7fSwweDFmNCksdGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXVsndW5yZWYnXSYmdGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXVtfMHhiNTZhNmUoMHgxZjYpXSgpKTt9YXN5bmNbXzB4MjlkNTk2KDB4MjEyKV0oXzB4MzNiMDE0KXt2YXIgXzB4MTQwNTlhPV8weDI5ZDU5Njt0cnl7aWYoIXRoaXNbXzB4MTQwNTlhKDB4MWJkKV0pcmV0dXJuO3RoaXNbXzB4MTQwNTlhKDB4MWRjKV0mJnRoaXNbJ19jb25uZWN0VG9Ib3N0Tm93J10oKSwoYXdhaXQgdGhpc1tfMHgxNDA1OWEoMHgxNmEpXSlbXzB4MTQwNTlhKDB4MjEyKV0oSlNPTlsnc3RyaW5naWZ5J10oXzB4MzNiMDE0KSk7fWNhdGNoKF8weDUxNWNmMSl7Y29uc29sZVtfMHgxNDA1OWEoMHgyMmQpXSh0aGlzW18weDE0MDU5YSgweDE5MCldKyc6XFxcXHgyMCcrKF8weDUxNWNmMSYmXzB4NTE1Y2YxW18weDE0MDU5YSgweDIwMCldKSksdGhpc1tfMHgxNDA1OWEoMHgxYmQpXT0hMHgxLHRoaXNbXzB4MTQwNTlhKDB4MTcwKV0oKTt9fX07ZnVuY3Rpb24gXzB4NTU1Nigpe3ZhciBfMHg1NWJkMGY9WydzcGxpdCcsJ19jb25uZWN0VG9Ib3N0Tm93JywndGltZVN0YW1wJywnMS4wLjAnLCdleHBJZCcsJ3Vuc2hpZnQnLCdjYWxsJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnaXNBcnJheScsJzE2OTczNzQ2NzI0OTcnLCdfc2VuZEVycm9yTWVzc2FnZScsJ0hUTUxBbGxDb2xsZWN0aW9uJywnX3BfbGVuZ3RoJywnaGl0cycsJ29iamVjdCcsJ25hbWUnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnY29uc29sZScsJ19pc1ByaW1pdGl2ZVR5cGUnLCdjYXBwZWRFbGVtZW50cycsJ29uZXJyb3InLCdfYWRkaXRpb25hbE1ldGFkYXRhJywncmVwbGFjZScsJ2F1dG9FeHBhbmRMaW1pdCcsJ3RoZW4nLCd1bmtub3duJywnc3ltYm9sJywncG9wJywnX2RhdGVUb1N0cmluZycsJ3B1c2gnLCdub3cnLCdnbG9iYWwnLCdjbG9zZScsJ2dldHRlcicsJ190eXBlJywnZGF0ZScsJ19wXycsJ2hydGltZScsJ2NhcHBlZFByb3BzJywnZm9yRWFjaCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnY29uc3RydWN0b3InLCdnZXRQcm90b3R5cGVPZicsJ3RpbWVFbmQnLCdfc29ydFByb3BzJywnX2FkZFByb3BlcnR5JywnbmVnYXRpdmVaZXJvJywnb25jbG9zZScsJ19jYXBJZlN0cmluZycsJ2pvaW4nLCdyZXNvbHZlR2V0dGVycycsJ2xlbmd0aCcsJ3ZlcnNpb25zJywnMTI3LjAuMC4xJywnX2FsbG93ZWRUb1NlbmQnLCd0b1N0cmluZycsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywncGF0aCcsJzEwYmROanhTJywnW29iamVjdFxcXFx4MjBEYXRlXScsJ2NvdmVyYWdlJywncm9vdF9leHBfaWQnLCdfZGlzcG9zZVdlYnNvY2tldCcsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdpbmNsdWRlcycsJzExNjQyMjZOR21sbFonLCdcXFxceDIwYnJvd3NlcicsJ3RvdGFsU3RyTGVuZ3RoJywnX2hhc1NldE9uSXRzUGF0aCcsJ2FzdHJvJywnbWV0aG9kJywnJywncG9zaXRpdmVJbmZpbml0eScsJ21hdGNoJywnX2FkZE9iamVjdFByb3BlcnR5JywnbG9jYXRpb24nLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdhdXRvRXhwYW5kJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJywnc29ydFByb3BzJywndGltZScsJ3NldCcsJ2dldE93blByb3BlcnR5TmFtZXMnLCdfYWRkRnVuY3Rpb25zTm9kZScsJ2RlZmF1bHQnLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ3Byb3BzJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ25leHQuanMnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCd2YWx1ZScsJ19yZWNvbm5lY3RUaW1lb3V0JywncGVyZl9ob29rcycsJ19pbkJyb3dzZXInLCdfaXNOZWdhdGl2ZVplcm8nLCdzdWJzdHInLCdwcm9jZXNzJywnX3F1b3RlZFJlZ0V4cCcsJ3BvcnQnLCdfcHJvcGVydHlOYW1lJywnZW52JywnYWxsU3RyTGVuZ3RoJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdub2RlJywnX1N5bWJvbCcsJ3RvTG93ZXJDYXNlJywnbG9nJywndXJsJywnbm9GdW5jdGlvbnMnLCdzdHJMZW5ndGgnLCcxMzQ3NDV0WHB3WXAnLCd1bnJlZicsJ3N0cmluZycsJ3NldHRlcicsJ3R5cGUnLCdjdXJyZW50JywnZ2V0JywnMTM1TEdwUkFvJywnX0hUTUxBbGxDb2xsZWN0aW9uJywnc29ydCcsJ19zZXROb2RlTGFiZWwnLCdtZXNzYWdlJywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0JywnX3NldE5vZGVJZCcsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ3VuZGVmaW5lZCcsJ19jbGVhbk5vZGUnLCdzbGljZScsJ05FR0FUSVZFX0lORklOSVRZJywncm9vdF9leHAnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ0Jvb2xlYW4nLCczMzg4OTZmdG1JdEwnLCdfY29ubmVjdGVkJywnX1dlYlNvY2tldENsYXNzJywnQnVmZmVyJywnY29uY2F0Jywnc2VuZCcsJ051bWJlcicsJzpsb2dQb2ludElkOicsJ2NyZWF0ZScsJ3N0YWNrVHJhY2VMaW1pdCcsXFxcImM6XFxcXFxcXFxVc2Vyc1xcXFxcXFxcVVNFUlxcXFxcXFxcLnZzY29kZVxcXFxcXFxcZXh0ZW5zaW9uc1xcXFxcXFxcd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMS4wLjIzMlxcXFxcXFxcbm9kZV9tb2R1bGVzXFxcIiwnZWxlbWVudHMnLCdudXh0Jywnd2VicGFjaycsJ19XZWJTb2NrZXQnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdmdW5jdGlvbicsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywncGVyZm9ybWFuY2UnLCdcXFxceDIwc2VydmVyJywnZWRnZScsJ3ZhbHVlT2YnLCdub2RlTW9kdWxlcycsJ19zb2NrZXQnLCdTZXQnLCdlcnJvcicsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywncmVsb2FkJywnX3JlZ0V4cFRvU3RyaW5nJywnd2FybicsJ29ub3BlbicsJ05FWFRfUlVOVElNRScsJ2FycmF5JywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCcyNTYwT2xGcnFlJywnZGF0YScsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ3BhdGhUb0ZpbGVVUkwnLCdfaXNBcnJheScsJycsJ2xldmVsJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdyZWR1Y2VMaW1pdHMnLCdfcHJvcGVydHknLCdjYXBwZWQnLCdpbmRleCcsJ2Jvb2xlYW4nLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnX2lzVW5kZWZpbmVkJywnUE9TSVRJVkVfSU5GSU5JVFknLCd0ZXN0Jywnb25tZXNzYWdlJywnd3MvaW5kZXguanMnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ2dldFdlYlNvY2tldENsYXNzJywnbmFuJywndHJhY2UnLCdFcnJvcicsJ3N0YWNrJywnY291bnQnLCdwYXJlbnQnLCc4MDM2MDB1ckpOV0knLCdwYXJzZScsJ2RvY2tlcml6ZWRBcHAnLCdNYXAnLCdudWxsJywnNDhVdFJXVnYnLCdfbnVtYmVyUmVnRXhwJywnNjA5OTInLCdfd3MnLCdfaGFzTWFwT25JdHNQYXRoJywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywnV2ViU29ja2V0JywnX2lzTWFwJywnaG9zdG5hbWUnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ2JpZ2ludCcsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdob3N0JywnbnVtYmVyJywnX29iamVjdFRvU3RyaW5nJywnX2FkZExvYWROb2RlJywncmVhZHlTdGF0ZScsJzE1NzhyZ2NtWHYnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ19pbk5leHRFZGdlJywnZGVwdGgnLCdfdW5kZWZpbmVkJywnU3RyaW5nJywnY2F0Y2gnLCdkaXNhYmxlZExvZycsJ3Byb3RvdHlwZScsJ3NlcmlhbGl6ZScsJzMwNTAwMTlKQ2tib2MnLCdfY29ubmVjdGluZycsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnX2NvbnNvbGVfbmluamEnXTtfMHg1NTU2PWZ1bmN0aW9uKCl7cmV0dXJuIF8weDU1YmQwZjt9O3JldHVybiBfMHg1NTU2KCk7fWZ1bmN0aW9uIGIoXzB4M2Y2Y2ZiLF8weDRjMGMxYixfMHhlMTQ0Y2YsXzB4Mzc3OGI1LF8weDIzMjEwNyxfMHg2ZWNjNjUpe3ZhciBfMHgyYTE0NTk9XzB4MjlkNTk2O2xldCBfMHgxN2Y5MGY9XzB4ZTE0NGNmW18weDJhMTQ1OSgweDE4NildKCcsJylbJ21hcCddKF8weGU1MTZlNT0+e3ZhciBfMHgyN2Y4ZTg9XzB4MmExNDU5O3RyeXtfMHgzZjZjZmJbXzB4MjdmOGU4KDB4MjFlKV18fCgoXzB4MjMyMTA3PT09XzB4MjdmOGU4KDB4MWRmKXx8XzB4MjMyMTA3PT09J3JlbWl4J3x8XzB4MjMyMTA3PT09XzB4MjdmOGU4KDB4MWNjKSkmJihfMHgyMzIxMDcrPSFfMHgzZjZjZmJbJ3Byb2Nlc3MnXT8uW18weDI3ZjhlOCgweDFiYildPy5bXzB4MjdmOGU4KDB4MWVlKV0mJl8weDNmNmNmYltfMHgyN2Y4ZTgoMHgxZTcpXT8uW18weDI3ZjhlOCgweDFlYildPy5bXzB4MjdmOGU4KDB4MjJmKV0hPT0nZWRnZSc/XzB4MjdmOGU4KDB4MWM5KTpfMHgyN2Y4ZTgoMHgyMjIpKSxfMHgzZjZjZmJbXzB4MjdmOGU4KDB4MjFlKV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDIzMjEwN30pO2xldCBfMHgzNDM5ZjU9bmV3IFgoXzB4M2Y2Y2ZiLF8weDRjMGMxYixfMHhlNTE2ZTUsXzB4Mzc3OGI1LF8weDZlY2M2NSk7cmV0dXJuIF8weDM0MzlmNVsnc2VuZCddWydiaW5kJ10oXzB4MzQzOWY1KTt9Y2F0Y2goXzB4NDFkYTlmKXtyZXR1cm4gY29uc29sZVtfMHgyN2Y4ZTgoMHgyMmQpXShfMHgyN2Y4ZTgoMHgyM2YpLF8weDQxZGE5ZiYmXzB4NDFkYTlmW18weDI3ZjhlOCgweDIwMCldKSwoKT0+e307fX0pO3JldHVybiBfMHg1ZTNiOGI9Pl8weDE3ZjkwZlsnZm9yRWFjaCddKF8weDQzMTQ4Yj0+XzB4NDMxNDhiKF8weDVlM2I4YikpO31mdW5jdGlvbiBfMHg0MWM5KF8weDE2ZThiNyxfMHg0ODI5MzApe3ZhciBfMHg1NTU2N2E9XzB4NTU1NigpO3JldHVybiBfMHg0MWM5PWZ1bmN0aW9uKF8weDQxYzkzZCxfMHgyOWMyM2Qpe18weDQxYzkzZD1fMHg0MWM5M2QtMHgxNTM7dmFyIF8weDMxM2MwZD1fMHg1NTU2N2FbXzB4NDFjOTNkXTtyZXR1cm4gXzB4MzEzYzBkO30sXzB4NDFjOShfMHgxNmU4YjcsXzB4NDgyOTMwKTt9ZnVuY3Rpb24gVyhfMHgxNDMyMGIpe3ZhciBfMHgzZTMwYTE9XzB4MjlkNTk2O2xldCBfMHgxZjQ0ZDc9ZnVuY3Rpb24oXzB4MmJlYzIwLF8weDEyNzA5ZCl7cmV0dXJuIF8weDEyNzA5ZC1fMHgyYmVjMjA7fSxfMHg0YWQ1OTk7aWYoXzB4MTQzMjBiW18weDNlMzBhMSgweDIyMSldKV8weDRhZDU5OT1mdW5jdGlvbigpe3ZhciBfMHhlODFhNGQ9XzB4M2UzMGExO3JldHVybiBfMHgxNDMyMGJbXzB4ZTgxYTRkKDB4MjIxKV1bXzB4ZTgxYTRkKDB4MWE0KV0oKTt9O2Vsc2V7aWYoXzB4MTQzMjBiW18weDNlMzBhMSgweDFlNyldJiZfMHgxNDMyMGJbXzB4M2UzMGExKDB4MWU3KV1bJ2hydGltZSddJiZfMHgxNDMyMGJbXzB4M2UzMGExKDB4MWU3KV0/LltfMHgzZTMwYTEoMHgxZWIpXT8uW18weDNlMzBhMSgweDIyZildIT09XzB4M2UzMGExKDB4MjIzKSlfMHg0YWQ1OTk9ZnVuY3Rpb24oKXt2YXIgXzB4MTVhMmViPV8weDNlMzBhMTtyZXR1cm4gXzB4MTQzMjBiW18weDE1YTJlYigweDFlNyldW18weDE1YTJlYigweDFhYildKCk7fSxfMHgxZjQ0ZDc9ZnVuY3Rpb24oXzB4MTU2Zjk1LF8weDNiYzA5Myl7cmV0dXJuIDB4M2U4KihfMHgzYmMwOTNbMHgwXS1fMHgxNTZmOTVbMHgwXSkrKF8weDNiYzA5M1sweDFdLV8weDE1NmY5NVsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgxMTI3OGZ9PXJlcXVpcmUoXzB4M2UzMGExKDB4MWUzKSk7XzB4NGFkNTk5PWZ1bmN0aW9uKCl7dmFyIF8weDUyYjVkNj1fMHgzZTMwYTE7cmV0dXJuIF8weDExMjc4ZltfMHg1MmI1ZDYoMHgxYTQpXSgpO307fWNhdGNoe18weDRhZDU5OT1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDFmNDRkNywndGltZVN0YW1wJzpfMHg0YWQ1OTksJ25vdyc6KCk9PkRhdGVbJ25vdyddKCl9O31mdW5jdGlvbiBKKF8weDU1NDdmZSxfMHg1NzIyZTYsXzB4M2FmNzkxKXt2YXIgXzB4MjNmYmY0PV8weDI5ZDU5NjtpZihfMHg1NTQ3ZmVbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddIT09dm9pZCAweDApcmV0dXJuIF8weDU1NDdmZVtfMHgyM2ZiZjQoMHgxNmMpXTtsZXQgXzB4NDAzMmM0PV8weDU1NDdmZVsncHJvY2VzcyddPy5bXzB4MjNmYmY0KDB4MWJiKV0/LltfMHgyM2ZiZjQoMHgxZWUpXXx8XzB4NTU0N2ZlW18weDIzZmJmNCgweDFlNyldPy5bJ2VudiddPy5bXzB4MjNmYmY0KDB4MjJmKV09PT1fMHgyM2ZiZjQoMHgyMjMpO3JldHVybiBfMHg0MDMyYzQmJl8weDNhZjc5MT09PV8weDIzZmJmNCgweDIxOSk/XzB4NTU0N2ZlW18weDIzZmJmNCgweDE2YyldPSEweDE6XzB4NTU0N2ZlW18weDIzZmJmNCgweDE2YyldPV8weDQwMzJjNHx8IV8weDU3MjJlNnx8XzB4NTU0N2ZlW18weDIzZmJmNCgweDFkMildPy5bJ2hvc3RuYW1lJ10mJl8weDU3MjJlNltfMHgyM2ZiZjQoMHgxYzcpXShfMHg1NTQ3ZmVbJ2xvY2F0aW9uJ11bXzB4MjNmYmY0KDB4MTZmKV0pLF8weDU1NDdmZVtfMHgyM2ZiZjQoMHgxNmMpXTt9ZnVuY3Rpb24gWShfMHg0ODVkM2EsXzB4NDE0NTdkLF8weGQ0OTRhMyxfMHgyNGNjOWYpe3ZhciBfMHg0OGZmNGY9XzB4MjlkNTk2O18weDQ4NWQzYT1fMHg0ODVkM2EsXzB4NDE0NTdkPV8weDQxNDU3ZCxfMHhkNDk0YTM9XzB4ZDQ5NGEzLF8weDI0Y2M5Zj1fMHgyNGNjOWY7bGV0IF8weDE1NjJiOT1XKF8weDQ4NWQzYSksXzB4MjRmNGM0PV8weDE1NjJiOVsnZWxhcHNlZCddLF8weDJjNmZkOD1fMHgxNTYyYjlbJ3RpbWVTdGFtcCddO2NsYXNzIF8weDFjNGQyOHtjb25zdHJ1Y3Rvcigpe3ZhciBfMHg0ZDBmYjg9XzB4NDFjOTt0aGlzWydfa2V5U3RyUmVnRXhwJ109L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDRkMGZiOCgweDE2OCldPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHg0ZDBmYjgoMHgxZTgpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDRkMGZiOCgweDE3YyldPV8weDQ4NWQzYVtfMHg0ZDBmYjgoMHgyMDYpXSx0aGlzW18weDRkMGZiOCgweDFmZCldPV8weDQ4NWQzYVtfMHg0ZDBmYjgoMHgxOTEpXSx0aGlzW18weDRkMGZiOCgweDE1OSldPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sdGhpc1tfMHg0ZDBmYjgoMHgxYmYpXT1PYmplY3RbXzB4NGQwZmI4KDB4MWQ5KV0sdGhpc1tfMHg0ZDBmYjgoMHgxZWYpXT1fMHg0ODVkM2FbJ1N5bWJvbCddLHRoaXNbXzB4NGQwZmI4KDB4MjJjKV09UmVnRXhwW18weDRkMGZiOCgweDE4MCldW18weDRkMGZiOCgweDFiZSldLHRoaXNbJ19kYXRlVG9TdHJpbmcnXT1EYXRlW18weDRkMGZiOCgweDE4MCldWyd0b1N0cmluZyddO31bJ3NlcmlhbGl6ZSddKF8weDEzYjYyYSxfMHg0ZDU2ODMsXzB4M2RmYzhiLF8weDE2ODY1NSl7dmFyIF8weDFiZjk1ZT1fMHg0MWM5LF8weDIzZDRkMz10aGlzLF8weDVkMTYwZT1fMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWQ0KV07ZnVuY3Rpb24gXzB4MjMzMmIzKF8weDE2ODFjOCxfMHg1NzEyZTcsXzB4M2VmYzI3KXt2YXIgXzB4MWY0ZDI3PV8weDFiZjk1ZTtfMHg1NzEyZTdbXzB4MWY0ZDI3KDB4MWY5KV09XzB4MWY0ZDI3KDB4MTlmKSxfMHg1NzEyZTdbXzB4MWY0ZDI3KDB4MjI4KV09XzB4MTY4MWM4W18weDFmNGQyNygweDIwMCldLF8weDMwOThlNj1fMHgzZWZjMjdbXzB4MWY0ZDI3KDB4MWVlKV1bXzB4MWY0ZDI3KDB4MWZhKV0sXzB4M2VmYzI3W18weDFmNGQyNygweDFlZSldW18weDFmNGQyNygweDFmYSldPV8weDU3MTJlNyxfMHgyM2Q0ZDNbXzB4MWY0ZDI3KDB4MjAyKV0oXzB4NTcxMmU3LF8weDNlZmMyNyk7fXRyeXtfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjM4KV0rKyxfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWQ0KV0mJl8weDNkZmM4YltfMHgxYmY5NWUoMHgyMjApXVsncHVzaCddKF8weDRkNTY4Myk7dmFyIF8weDI0ZWRkZCxfMHg1MzA4YTMsXzB4NDRhYWM4LF8weDg1ZGQ0OSxfMHgxNjYwNzE9W10sXzB4NDE0NTIxPVtdLF8weDFlOWY4MyxfMHgzMTUyZTM9dGhpc1tfMHgxYmY5NWUoMHgxYTgpXShfMHg0ZDU2ODMpLF8weDRjN2QyYj1fMHgzMTUyZTM9PT1fMHgxYmY5NWUoMHgyMzApLF8weDMwY2I2Zj0hMHgxLF8weDI4NjIyMD1fMHgzMTUyZTM9PT1fMHgxYmY5NWUoMHgyMWQpLF8weDRjNjg2ZT10aGlzW18weDFiZjk1ZSgweDE5OCldKF8weDMxNTJlMyksXzB4NDU1NTcwPXRoaXNbXzB4MWJmOTVlKDB4MTVhKV0oXzB4MzE1MmUzKSxfMHg0ZWQxOWI9XzB4NGM2ODZlfHxfMHg0NTU1NzAsXzB4MzIwYzM0PXt9LF8weDJmMTZlYz0weDAsXzB4NTA5YmQ5PSEweDEsXzB4MzA5OGU2LF8weDFiNTQ4OT0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4M2RmYzhiWydkZXB0aCddKXtpZihfMHg0YzdkMmIpe2lmKF8weDUzMDhhMz1fMHg0ZDU2ODNbXzB4MWJmOTVlKDB4MWJhKV0sXzB4NTMwOGEzPl8weDNkZmM4YltfMHgxYmY5NWUoMHgyMTgpXSl7Zm9yKF8weDQ0YWFjOD0weDAsXzB4ODVkZDQ5PV8weDNkZmM4YltfMHgxYmY5NWUoMHgyMTgpXSxfMHgyNGVkZGQ9XzB4NDRhYWM4O18weDI0ZWRkZDxfMHg4NWRkNDk7XzB4MjRlZGRkKyspXzB4NDE0NTIxW18weDFiZjk1ZSgweDFhMyldKF8weDIzZDRkM1tfMHgxYmY5NWUoMHgxYjQpXShfMHgxNjYwNzEsXzB4NGQ1NjgzLF8weDMxNTJlMyxfMHgyNGVkZGQsXzB4M2RmYzhiKSk7XzB4MTNiNjJhW18weDFiZjk1ZSgweDE5OSldPSEweDA7fWVsc2V7Zm9yKF8weDQ0YWFjOD0weDAsXzB4ODVkZDQ5PV8weDUzMDhhMyxfMHgyNGVkZGQ9XzB4NDRhYWM4O18weDI0ZWRkZDxfMHg4NWRkNDk7XzB4MjRlZGRkKyspXzB4NDE0NTIxW18weDFiZjk1ZSgweDFhMyldKF8weDIzZDRkM1tfMHgxYmY5NWUoMHgxYjQpXShfMHgxNjYwNzEsXzB4NGQ1NjgzLF8weDMxNTJlMyxfMHgyNGVkZGQsXzB4M2RmYzhiKSk7fV8weDNkZmM4YlsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSs9XzB4NDE0NTIxW18weDFiZjk1ZSgweDFiYSldO31pZighKF8weDMxNTJlMz09PSdudWxsJ3x8XzB4MzE1MmUzPT09J3VuZGVmaW5lZCcpJiYhXzB4NGM2ODZlJiZfMHgzMTUyZTMhPT1fMHgxYmY5NWUoMHgxN2QpJiZfMHgzMTUyZTMhPT1fMHgxYmY5NWUoMHgyMTApJiZfMHgzMTUyZTMhPT1fMHgxYmY5NWUoMHgxNzEpKXt2YXIgXzB4MzRmOTdjPV8weDE2ODY1NVtfMHgxYmY5NWUoMHgxZGQpXXx8XzB4M2RmYzhiW18weDFiZjk1ZSgweDFkZCldO2lmKHRoaXNbJ19pc1NldCddKF8weDRkNTY4Myk/KF8weDI0ZWRkZD0weDAsXzB4NGQ1NjgzW18weDFiZjk1ZSgweDFhZCldKGZ1bmN0aW9uKF8weDEzMzA3YSl7dmFyIF8weDgxNTkzYT1fMHgxYmY5NWU7aWYoXzB4MmYxNmVjKyssXzB4M2RmYzhiW18weDgxNTkzYSgweDIzOSldKyssXzB4MmYxNmVjPl8weDM0Zjk3Yyl7XzB4NTA5YmQ5PSEweDA7cmV0dXJuO31pZighXzB4M2RmYzhiWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDNkZmM4YltfMHg4MTU5M2EoMHgxZDQpXSYmXzB4M2RmYzhiW18weDgxNTkzYSgweDIzOSldPl8weDNkZmM4YltfMHg4MTU5M2EoMHgxOWQpXSl7XzB4NTA5YmQ5PSEweDA7cmV0dXJuO31fMHg0MTQ1MjFbXzB4ODE1OTNhKDB4MWEzKV0oXzB4MjNkNGQzW18weDgxNTkzYSgweDFiNCldKF8weDE2NjA3MSxfMHg0ZDU2ODMsXzB4ODE1OTNhKDB4MjI3KSxfMHgyNGVkZGQrKyxfMHgzZGZjOGIsZnVuY3Rpb24oXzB4NWQ2NWEwKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4NWQ2NWEwO307fShfMHgxMzMwN2EpKSk7fSkpOnRoaXNbXzB4MWJmOTVlKDB4MTZlKV0oXzB4NGQ1NjgzKSYmXzB4NGQ1NjgzW18weDFiZjk1ZSgweDFhZCldKGZ1bmN0aW9uKF8weDI5YjkxOSxfMHgzNTM0ODMpe3ZhciBfMHgxNTZiMWQ9XzB4MWJmOTVlO2lmKF8weDJmMTZlYysrLF8weDNkZmM4YltfMHgxNTZiMWQoMHgyMzkpXSsrLF8weDJmMTZlYz5fMHgzNGY5N2Mpe18weDUwOWJkOT0hMHgwO3JldHVybjt9aWYoIV8weDNkZmM4YltfMHgxNTZiMWQoMHgxZGUpXSYmXzB4M2RmYzhiW18weDE1NmIxZCgweDFkNCldJiZfMHgzZGZjOGJbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4M2RmYzhiW18weDE1NmIxZCgweDE5ZCldKXtfMHg1MDliZDk9ITB4MDtyZXR1cm47fXZhciBfMHg1OTNjOWI9XzB4MzUzNDgzWyd0b1N0cmluZyddKCk7XzB4NTkzYzliW18weDE1NmIxZCgweDFiYSldPjB4NjQmJihfMHg1OTNjOWI9XzB4NTkzYzliW18weDE1NmIxZCgweDIwOCldKDB4MCwweDY0KSsnLi4uJyksXzB4NDE0NTIxW18weDE1NmIxZCgweDFhMyldKF8weDIzZDRkM1snX2FkZFByb3BlcnR5J10oXzB4MTY2MDcxLF8weDRkNTY4MywnTWFwJyxfMHg1OTNjOWIsXzB4M2RmYzhiLGZ1bmN0aW9uKF8weDMyNGY1Nil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDMyNGY1Njt9O30oXzB4MjliOTE5KSkpO30pLCFfMHgzMGNiNmYpe3RyeXtmb3IoXzB4MWU5ZjgzIGluIF8weDRkNTY4MylpZighKF8weDRjN2QyYiYmXzB4MWI1NDg5W18weDFiZjk1ZSgweDE1NSldKF8weDFlOWY4MykpJiYhdGhpc1tfMHgxYmY5NWUoMHgxNzkpXShfMHg0ZDU2ODMsXzB4MWU5ZjgzLF8weDNkZmM4Yikpe2lmKF8weDJmMTZlYysrLF8weDNkZmM4YlsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDJmMTZlYz5fMHgzNGY5N2Mpe18weDUwOWJkOT0hMHgwO2JyZWFrO31pZighXzB4M2RmYzhiWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDNkZmM4YltfMHgxYmY5NWUoMHgxZDQpXSYmXzB4M2RmYzhiWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDNkZmM4YltfMHgxYmY5NWUoMHgxOWQpXSl7XzB4NTA5YmQ5PSEweDA7YnJlYWs7fV8weDQxNDUyMVtfMHgxYmY5NWUoMHgxYTMpXShfMHgyM2Q0ZDNbXzB4MWJmOTVlKDB4MWQxKV0oXzB4MTY2MDcxLF8weDMyMGMzNCxfMHg0ZDU2ODMsXzB4MzE1MmUzLF8weDFlOWY4MyxfMHgzZGZjOGIpKTt9fWNhdGNoe31pZihfMHgzMjBjMzRbXzB4MWJmOTVlKDB4MTkyKV09ITB4MCxfMHgyODYyMjAmJihfMHgzMjBjMzRbJ19wX25hbWUnXT0hMHgwKSwhXzB4NTA5YmQ5KXt2YXIgXzB4MTA5NTViPVtdW18weDFiZjk1ZSgweDIxMSldKHRoaXNbJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJ10oXzB4NGQ1NjgzKSlbXzB4MWJmOTVlKDB4MjExKV0odGhpc1tfMHgxYmY5NWUoMHgxYzYpXShfMHg0ZDU2ODMpKTtmb3IoXzB4MjRlZGRkPTB4MCxfMHg1MzA4YTM9XzB4MTA5NTViW18weDFiZjk1ZSgweDFiYSldO18weDI0ZWRkZDxfMHg1MzA4YTM7XzB4MjRlZGRkKyspaWYoXzB4MWU5ZjgzPV8weDEwOTU1YltfMHgyNGVkZGRdLCEoXzB4NGM3ZDJiJiZfMHgxYjU0ODlbXzB4MWJmOTVlKDB4MTU1KV0oXzB4MWU5ZjgzW18weDFiZjk1ZSgweDFiZSldKCkpKSYmIXRoaXNbXzB4MWJmOTVlKDB4MTc5KV0oXzB4NGQ1NjgzLF8weDFlOWY4MyxfMHgzZGZjOGIpJiYhXzB4MzIwYzM0W18weDFiZjk1ZSgweDFhYSkrXzB4MWU5ZjgzWyd0b1N0cmluZyddKCldKXtpZihfMHgyZjE2ZWMrKyxfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjM5KV0rKyxfMHgyZjE2ZWM+XzB4MzRmOTdjKXtfMHg1MDliZDk9ITB4MDticmVhazt9aWYoIV8weDNkZmM4YltfMHgxYmY5NWUoMHgxZGUpXSYmXzB4M2RmYzhiW18weDFiZjk1ZSgweDFkNCldJiZfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjM5KV0+XzB4M2RmYzhiW18weDFiZjk1ZSgweDE5ZCldKXtfMHg1MDliZDk9ITB4MDticmVhazt9XzB4NDE0NTIxWydwdXNoJ10oXzB4MjNkNGQzW18weDFiZjk1ZSgweDFkMSldKF8weDE2NjA3MSxfMHgzMjBjMzQsXzB4NGQ1NjgzLF8weDMxNTJlMyxfMHgxZTlmODMsXzB4M2RmYzhiKSk7fX19fX1pZihfMHgxM2I2MmFbXzB4MWJmOTVlKDB4MWY5KV09XzB4MzE1MmUzLF8weDRlZDE5Yj8oXzB4MTNiNjJhW18weDFiZjk1ZSgweDFlMSldPV8weDRkNTY4M1sndmFsdWVPZiddKCksdGhpc1tfMHgxYmY5NWUoMHgxYjcpXShfMHgzMTUyZTMsXzB4MTNiNjJhLF8weDNkZmM4YixfMHgxNjg2NTUpKTpfMHgzMTUyZTM9PT1fMHgxYmY5NWUoMHgxYTkpP18weDEzYjYyYVtfMHgxYmY5NWUoMHgxZTEpXT10aGlzW18weDFiZjk1ZSgweDFhMildW18weDFiZjk1ZSgweDE4YyldKF8weDRkNTY4Myk6XzB4MzE1MmUzPT09J2JpZ2ludCc/XzB4MTNiNjJhW18weDFiZjk1ZSgweDFlMSldPV8weDRkNTY4M1sndG9TdHJpbmcnXSgpOl8weDMxNTJlMz09PSdSZWdFeHAnP18weDEzYjYyYVsndmFsdWUnXT10aGlzW18weDFiZjk1ZSgweDIyYyldW18weDFiZjk1ZSgweDE4YyldKF8weDRkNTY4Myk6XzB4MzE1MmUzPT09XzB4MWJmOTVlKDB4MWEwKSYmdGhpc1tfMHgxYmY5NWUoMHgxZWYpXT9fMHgxM2I2MmFbJ3ZhbHVlJ109dGhpc1tfMHgxYmY5NWUoMHgxZWYpXVtfMHgxYmY5NWUoMHgxODApXVtfMHgxYmY5NWUoMHgxYmUpXVtfMHgxYmY5NWUoMHgxOGMpXShfMHg0ZDU2ODMpOiFfMHgzZGZjOGJbJ2RlcHRoJ10mJiEoXzB4MzE1MmUzPT09XzB4MWJmOTVlKDB4MTY2KXx8XzB4MzE1MmUzPT09XzB4MWJmOTVlKDB4MjA2KSkmJihkZWxldGUgXzB4MTNiNjJhWyd2YWx1ZSddLF8weDEzYjYyYVtfMHgxYmY5NWUoMHgyM2MpXT0hMHgwKSxfMHg1MDliZDkmJihfMHgxM2I2MmFbXzB4MWJmOTVlKDB4MWFjKV09ITB4MCksXzB4MzA5OGU2PV8weDNkZmM4YltfMHgxYmY5NWUoMHgxZWUpXVtfMHgxYmY5NWUoMHgxZmEpXSxfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWVlKV1bXzB4MWJmOTVlKDB4MWZhKV09XzB4MTNiNjJhLHRoaXNbXzB4MWJmOTVlKDB4MjAyKV0oXzB4MTNiNjJhLF8weDNkZmM4YiksXzB4NDE0NTIxWydsZW5ndGgnXSl7Zm9yKF8weDI0ZWRkZD0weDAsXzB4NTMwOGEzPV8weDQxNDUyMVtfMHgxYmY5NWUoMHgxYmEpXTtfMHgyNGVkZGQ8XzB4NTMwOGEzO18weDI0ZWRkZCsrKV8weDQxNDUyMVtfMHgyNGVkZGRdKF8weDI0ZWRkZCk7fV8weDE2NjA3MVtfMHgxYmY5NWUoMHgxYmEpXSYmKF8weDEzYjYyYVtfMHgxYmY5NWUoMHgxZGQpXT1fMHgxNjYwNzEpO31jYXRjaChfMHgyN2I0ZTIpe18weDIzMzJiMyhfMHgyN2I0ZTIsXzB4MTNiNjJhLF8weDNkZmM4Yik7fXJldHVybiB0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NGQ1NjgzLF8weDEzYjYyYSksdGhpc1tfMHgxYmY5NWUoMHgxZDMpXShfMHgxM2I2MmEsXzB4M2RmYzhiKSxfMHgzZGZjOGJbJ25vZGUnXVsnY3VycmVudCddPV8weDMwOThlNixfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjM4KV0tLSxfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWQ0KV09XzB4NWQxNjBlLF8weDNkZmM4YltfMHgxYmY5NWUoMHgxZDQpXSYmXzB4M2RmYzhiW18weDFiZjk1ZSgweDIyMCldW18weDFiZjk1ZSgweDFhMSldKCksXzB4MTNiNjJhO31bXzB4NDhmZjRmKDB4MWM2KV0oXzB4MTBlZWEwKXt2YXIgXzB4NGVhYjlkPV8weDQ4ZmY0ZjtyZXR1cm4gT2JqZWN0W18weDRlYWI5ZCgweDE4ZCldP09iamVjdFsnZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10oXzB4MTBlZWEwKTpbXTt9WydfaXNTZXQnXShfMHgyNjBhMTUpe3ZhciBfMHg0ZjY5MWE9XzB4NDhmZjRmO3JldHVybiEhKF8weDI2MGExNSYmXzB4NDg1ZDNhW18weDRmNjkxYSgweDIyNyldJiZ0aGlzW18weDRmNjkxYSgweDE3NSldKF8weDI2MGExNSk9PT1fMHg0ZjY5MWEoMHgyMWYpJiZfMHgyNjBhMTVbXzB4NGY2OTFhKDB4MWFkKV0pO31bJ19ibGFja2xpc3RlZFByb3BlcnR5J10oXzB4NDY1ZDA4LF8weDJkOTdjYyxfMHg1M2I5NzApe3ZhciBfMHgxZDNmZGI9XzB4NDhmZjRmO3JldHVybiBfMHg1M2I5NzBbXzB4MWQzZmRiKDB4MWYzKV0/dHlwZW9mIF8weDQ2NWQwOFtfMHgyZDk3Y2NdPT1fMHgxZDNmZGIoMHgyMWQpOiEweDE7fVtfMHg0OGZmNGYoMHgxYTgpXShfMHg1MzYyNDcpe3ZhciBfMHgyZGIxN2M9XzB4NDhmZjRmLF8weDViNmQyOT0nJztyZXR1cm4gXzB4NWI2ZDI5PXR5cGVvZiBfMHg1MzYyNDcsXzB4NWI2ZDI5PT09XzB4MmRiMTdjKDB4MTk0KT90aGlzW18weDJkYjE3YygweDE3NSldKF8weDUzNjI0Nyk9PT1fMHgyZGIxN2MoMHgxZWQpP18weDViNmQyOT1fMHgyZGIxN2MoMHgyMzApOnRoaXNbXzB4MmRiMTdjKDB4MTc1KV0oXzB4NTM2MjQ3KT09PV8weDJkYjE3YygweDFjMik/XzB4NWI2ZDI5PV8weDJkYjE3YygweDFhOSk6dGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4NTM2MjQ3KT09PV8weDJkYjE3YygweDIzNCk/XzB4NWI2ZDI5PSdiaWdpbnQnOl8weDUzNjI0Nz09PW51bGw/XzB4NWI2ZDI5PV8weDJkYjE3YygweDE2Nik6XzB4NTM2MjQ3W18weDJkYjE3YygweDFiMCldJiYoXzB4NWI2ZDI5PV8weDUzNjI0N1snY29uc3RydWN0b3InXVtfMHgyZGIxN2MoMHgxOTUpXXx8XzB4NWI2ZDI5KTpfMHg1YjZkMjk9PT0ndW5kZWZpbmVkJyYmdGhpc1tfMHgyZGIxN2MoMHgxZmQpXSYmXzB4NTM2MjQ3IGluc3RhbmNlb2YgdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJihfMHg1YjZkMjk9XzB4MmRiMTdjKDB4MTkxKSksXzB4NWI2ZDI5O31bXzB4NDhmZjRmKDB4MTc1KV0oXzB4NGQ0YWM2KXt2YXIgXzB4MjJmZjgyPV8weDQ4ZmY0ZjtyZXR1cm4gT2JqZWN0W18weDIyZmY4MigweDE4MCldW18weDIyZmY4MigweDFiZSldW18weDIyZmY4MigweDE4YyldKF8weDRkNGFjNik7fVtfMHg0OGZmNGYoMHgxOTgpXShfMHgyYmUwNmQpe3ZhciBfMHgxZTI3NzA9XzB4NDhmZjRmO3JldHVybiBfMHgyYmUwNmQ9PT1fMHgxZTI3NzAoMHgyM2UpfHxfMHgyYmUwNmQ9PT1fMHgxZTI3NzAoMHgxZjcpfHxfMHgyYmUwNmQ9PT1fMHgxZTI3NzAoMHgxNzQpO31bJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJ10oXzB4MWY0YzE0KXt2YXIgXzB4MzY0ZTdiPV8weDQ4ZmY0ZjtyZXR1cm4gXzB4MWY0YzE0PT09XzB4MzY0ZTdiKDB4MjBjKXx8XzB4MWY0YzE0PT09J1N0cmluZyd8fF8weDFmNGMxND09PV8weDM2NGU3YigweDIxMyk7fVtfMHg0OGZmNGYoMHgxYjQpXShfMHhhZGIyYjcsXzB4M2E3YTVmLF8weDJhNmNlNixfMHgzZGQyN2UsXzB4MWMwNjIwLF8weDFiOGQ4MCl7dmFyIF8weDQwZDVkYj10aGlzO3JldHVybiBmdW5jdGlvbihfMHg1Nzc0MTEpe3ZhciBfMHg1ODNkZjM9XzB4NDFjOSxfMHgxYjVhZGU9XzB4MWMwNjIwW18weDU4M2RmMygweDFlZSldW18weDU4M2RmMygweDFmYSldLF8weDM5MjNkMz1fMHgxYzA2MjBbXzB4NTgzZGYzKDB4MWVlKV1bXzB4NTgzZGYzKDB4MjNkKV0sXzB4NzhhODgxPV8weDFjMDYyMFtfMHg1ODNkZjMoMHgxZWUpXVtfMHg1ODNkZjMoMHgxNjEpXTtfMHgxYzA2MjBbXzB4NTgzZGYzKDB4MWVlKV1bXzB4NTgzZGYzKDB4MTYxKV09XzB4MWI1YWRlLF8weDFjMDYyMFsnbm9kZSddW18weDU4M2RmMygweDIzZCldPXR5cGVvZiBfMHgzZGQyN2U9PV8weDU4M2RmMygweDE3NCk/XzB4M2RkMjdlOl8weDU3NzQxMSxfMHhhZGIyYjdbXzB4NTgzZGYzKDB4MWEzKV0oXzB4NDBkNWRiWydfcHJvcGVydHknXShfMHgzYTdhNWYsXzB4MmE2Y2U2LF8weDNkZDI3ZSxfMHgxYzA2MjAsXzB4MWI4ZDgwKSksXzB4MWMwNjIwW18weDU4M2RmMygweDFlZSldW18weDU4M2RmMygweDE2MSldPV8weDc4YTg4MSxfMHgxYzA2MjBbXzB4NTgzZGYzKDB4MWVlKV1bXzB4NTgzZGYzKDB4MjNkKV09XzB4MzkyM2QzO307fVsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4MmVhNDE3LF8weDRjNGVlNyxfMHgxYjY5MDgsXzB4NTIxMWFjLF8weDU1M2JhNixfMHg1YWExYWQsXzB4MTVjNzI5KXt2YXIgXzB4MTdiN2Y5PV8weDQ4ZmY0ZixfMHgxZDhiM2U9dGhpcztyZXR1cm4gXzB4NGM0ZWU3W18weDE3YjdmOSgweDFhYSkrXzB4NTUzYmE2W18weDE3YjdmOSgweDFiZSldKCldPSEweDAsZnVuY3Rpb24oXzB4MmUzODk1KXt2YXIgXzB4MTRhYjM1PV8weDE3YjdmOSxfMHg1OGM0ZDc9XzB4NWFhMWFkWydub2RlJ11bXzB4MTRhYjM1KDB4MWZhKV0sXzB4MjJmMThhPV8weDVhYTFhZFtfMHgxNGFiMzUoMHgxZWUpXVtfMHgxNGFiMzUoMHgyM2QpXSxfMHgyZjgyOGY9XzB4NWFhMWFkWydub2RlJ11bXzB4MTRhYjM1KDB4MTYxKV07XzB4NWFhMWFkW18weDE0YWIzNSgweDFlZSldW18weDE0YWIzNSgweDE2MSldPV8weDU4YzRkNyxfMHg1YWExYWRbXzB4MTRhYjM1KDB4MWVlKV1bXzB4MTRhYjM1KDB4MjNkKV09XzB4MmUzODk1LF8weDJlYTQxN1tfMHgxNGFiMzUoMHgxYTMpXShfMHgxZDhiM2VbJ19wcm9wZXJ0eSddKF8weDFiNjkwOCxfMHg1MjExYWMsXzB4NTUzYmE2LF8weDVhYTFhZCxfMHgxNWM3MjkpKSxfMHg1YWExYWRbJ25vZGUnXVsncGFyZW50J109XzB4MmY4MjhmLF8weDVhYTFhZFtfMHgxNGFiMzUoMHgxZWUpXVtfMHgxNGFiMzUoMHgyM2QpXT1fMHgyMmYxOGE7fTt9W18weDQ4ZmY0ZigweDIzYildKF8weDM2ZGU3YSxfMHgyNDQyMGUsXzB4MmFmOGU1LF8weDQ4ZmMwZixfMHg0YmJjZDUpe3ZhciBfMHg1NjlmNjI9XzB4NDhmZjRmLF8weDRhZTdmZD10aGlzO18weDRiYmNkNXx8KF8weDRiYmNkNT1mdW5jdGlvbihfMHgxNTEzY2UsXzB4NWNkMGVkKXtyZXR1cm4gXzB4MTUxM2NlW18weDVjZDBlZF07fSk7dmFyIF8weDNhNjZmZT1fMHgyYWY4ZTVbXzB4NTY5ZjYyKDB4MWJlKV0oKSxfMHgyMmM1ZDI9XzB4NDhmYzBmW18weDU2OWY2MigweDFlMCldfHx7fSxfMHg1MTEwZjU9XzB4NDhmYzBmWydkZXB0aCddLF8weDJiZjhhOD1fMHg0OGZjMGZbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXTt0cnl7dmFyIF8weDViMzNjNz10aGlzWydfaXNNYXAnXShfMHgzNmRlN2EpLF8weDM5MDQxZT1fMHgzYTY2ZmU7XzB4NWIzM2M3JiZfMHgzOTA0MWVbMHgwXT09PSdcXFxceDI3JyYmKF8weDM5MDQxZT1fMHgzOTA0MWVbXzB4NTY5ZjYyKDB4MWU2KV0oMHgxLF8weDM5MDQxZVtfMHg1NjlmNjIoMHgxYmEpXS0weDIpKTt2YXIgXzB4NDVhZmExPV8weDQ4ZmMwZlsnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJ109XzB4MjJjNWQyW18weDU2OWY2MigweDFhYSkrXzB4MzkwNDFlXTtfMHg0NWFmYTEmJihfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MTdiKV09XzB4NDhmYzBmWydkZXB0aCddKzB4MSksXzB4NDhmYzBmW18weDU2OWY2MigweDFkZSldPSEhXzB4NDVhZmExO3ZhciBfMHg1YzdjNTU9dHlwZW9mIF8weDJhZjhlNT09XzB4NTY5ZjYyKDB4MWEwKSxfMHgzNDlmOTA9eyduYW1lJzpfMHg1YzdjNTV8fF8weDViMzNjNz9fMHgzYTY2ZmU6dGhpc1tfMHg1NjlmNjIoMHgxZWEpXShfMHgzYTY2ZmUpfTtpZihfMHg1YzdjNTUmJihfMHgzNDlmOTBbXzB4NTY5ZjYyKDB4MWEwKV09ITB4MCksIShfMHgyNDQyMGU9PT1fMHg1NjlmNjIoMHgyMzApfHxfMHgyNDQyMGU9PT1fMHg1NjlmNjIoMHgxNWUpKSl7dmFyIF8weDQyNWY2ZD10aGlzW18weDU2OWY2MigweDE1OSldKF8weDM2ZGU3YSxfMHgyYWY4ZTUpO2lmKF8weDQyNWY2ZCYmKF8weDQyNWY2ZFtfMHg1NjlmNjIoMHgxZDgpXSYmKF8weDM0OWY5MFtfMHg1NjlmNjIoMHgxZjgpXT0hMHgwKSxfMHg0MjVmNmRbXzB4NTY5ZjYyKDB4MWZiKV0mJiFfMHg0NWFmYTEmJiFfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MWI5KV0pKXJldHVybiBfMHgzNDlmOTBbXzB4NTY5ZjYyKDB4MWE3KV09ITB4MCx0aGlzW18weDU2OWY2MigweDE3MildKF8weDM0OWY5MCxfMHg0OGZjMGYpLF8weDM0OWY5MDt9dmFyIF8weDUzYWUwNzt0cnl7XzB4NTNhZTA3PV8weDRiYmNkNShfMHgzNmRlN2EsXzB4MmFmOGU1KTt9Y2F0Y2goXzB4MTgyMzljKXtyZXR1cm4gXzB4MzQ5ZjkwPXsnbmFtZSc6XzB4M2E2NmZlLCd0eXBlJzondW5rbm93bicsJ2Vycm9yJzpfMHgxODIzOWNbJ21lc3NhZ2UnXX0sdGhpc1tfMHg1NjlmNjIoMHgxNzIpXShfMHgzNDlmOTAsXzB4NDhmYzBmKSxfMHgzNDlmOTA7fXZhciBfMHg0MmQ2ZGY9dGhpc1tfMHg1NjlmNjIoMHgxYTgpXShfMHg1M2FlMDcpLF8weDM3MGE2MT10aGlzW18weDU2OWY2MigweDE5OCldKF8weDQyZDZkZik7aWYoXzB4MzQ5ZjkwWyd0eXBlJ109XzB4NDJkNmRmLF8weDM3MGE2MSl0aGlzW18weDU2OWY2MigweDE3MildKF8weDM0OWY5MCxfMHg0OGZjMGYsXzB4NTNhZTA3LGZ1bmN0aW9uKCl7dmFyIF8weDUyNWU4Nz1fMHg1NjlmNjI7XzB4MzQ5ZjkwW18weDUyNWU4NygweDFlMSldPV8weDUzYWUwN1tfMHg1MjVlODcoMHgyMjQpXSgpLCFfMHg0NWFmYTEmJl8weDRhZTdmZFtfMHg1MjVlODcoMHgxYjcpXShfMHg0MmQ2ZGYsXzB4MzQ5ZjkwLF8weDQ4ZmMwZix7fSk7fSk7ZWxzZXt2YXIgXzB4MzRkZDA1PV8weDQ4ZmMwZlsnYXV0b0V4cGFuZCddJiZfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MjM4KV08XzB4NDhmYzBmWydhdXRvRXhwYW5kTWF4RGVwdGgnXSYmXzB4NDhmYzBmW18weDU2OWY2MigweDIyMCldWydpbmRleE9mJ10oXzB4NTNhZTA3KTwweDAmJl8weDQyZDZkZiE9PV8weDU2OWY2MigweDIxZCkmJl8weDQ4ZmMwZltfMHg1NjlmNjIoMHgyMzkpXTxfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MTlkKV07XzB4MzRkZDA1fHxfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MjM4KV08XzB4NTExMGY1fHxfMHg0NWFmYTE/KHRoaXNbXzB4NTY5ZjYyKDB4MTgxKV0oXzB4MzQ5ZjkwLF8weDUzYWUwNyxfMHg0OGZjMGYsXzB4NDVhZmExfHx7fSksdGhpc1tfMHg1NjlmNjIoMHgxOWIpXShfMHg1M2FlMDcsXzB4MzQ5ZjkwKSk6dGhpc1tfMHg1NjlmNjIoMHgxNzIpXShfMHgzNDlmOTAsXzB4NDhmYzBmLF8weDUzYWUwNyxmdW5jdGlvbigpe3ZhciBfMHg1ZTQzZWY9XzB4NTY5ZjYyO18weDQyZDZkZj09PV8weDVlNDNlZigweDE2Nil8fF8weDQyZDZkZj09PV8weDVlNDNlZigweDIwNil8fChkZWxldGUgXzB4MzQ5ZjkwWyd2YWx1ZSddLF8weDM0OWY5MFsnY2FwcGVkJ109ITB4MCk7fSk7fXJldHVybiBfMHgzNDlmOTA7fWZpbmFsbHl7XzB4NDhmYzBmW18weDU2OWY2MigweDFlMCldPV8weDIyYzVkMixfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MTdiKV09XzB4NTExMGY1LF8weDQ4ZmMwZltfMHg1NjlmNjIoMHgxZGUpXT1fMHgyYmY4YTg7fX1bXzB4NDhmZjRmKDB4MWI3KV0oXzB4MWI2MmYxLF8weDE4ZWI3MSxfMHgzNzk0OGYsXzB4MWFiNWVlKXt2YXIgXzB4MWQ4YzA2PV8weDQ4ZmY0ZixfMHg0ODc3NmQ9XzB4MWFiNWVlWydzdHJMZW5ndGgnXXx8XzB4Mzc5NDhmW18weDFkOGMwNigweDFmNCldO2lmKChfMHgxYjYyZjE9PT1fMHgxZDhjMDYoMHgxZjcpfHxfMHgxYjYyZjE9PT1fMHgxZDhjMDYoMHgxN2QpKSYmXzB4MThlYjcxW18weDFkOGMwNigweDFlMSldKXtsZXQgXzB4NWQ4ZjZhPV8weDE4ZWI3MVsndmFsdWUnXVtfMHgxZDhjMDYoMHgxYmEpXTtfMHgzNzk0OGZbXzB4MWQ4YzA2KDB4MWVjKV0rPV8weDVkOGY2YSxfMHgzNzk0OGZbXzB4MWQ4YzA2KDB4MWVjKV0+XzB4Mzc5NDhmW18weDFkOGMwNigweDFjYSldPyhfMHgxOGViNzFbXzB4MWQ4YzA2KDB4MjNjKV09JycsZGVsZXRlIF8weDE4ZWI3MVsndmFsdWUnXSk6XzB4NWQ4ZjZhPl8weDQ4Nzc2ZCYmKF8weDE4ZWI3MVtfMHgxZDhjMDYoMHgyM2MpXT1fMHgxOGViNzFbJ3ZhbHVlJ11bJ3N1YnN0ciddKDB4MCxfMHg0ODc3NmQpLGRlbGV0ZSBfMHgxOGViNzFbXzB4MWQ4YzA2KDB4MWUxKV0pO319W18weDQ4ZmY0ZigweDE2ZSldKF8weDVlNGFjMyl7dmFyIF8weDk4YjEwOT1fMHg0OGZmNGY7cmV0dXJuISEoXzB4NWU0YWMzJiZfMHg0ODVkM2FbXzB4OThiMTA5KDB4MTY1KV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDVlNGFjMyk9PT0nW29iamVjdFxcXFx4MjBNYXBdJyYmXzB4NWU0YWMzW18weDk4YjEwOSgweDFhZCldKTt9WydfcHJvcGVydHlOYW1lJ10oXzB4NWUwYjgyKXt2YXIgXzB4MjdmY2Y1PV8weDQ4ZmY0ZjtpZihfMHg1ZTBiODJbXzB4MjdmY2Y1KDB4MWQwKV0oL15cXFxcZCskLykpcmV0dXJuIF8weDVlMGI4Mjt2YXIgXzB4MTJmNWI0O3RyeXtfMHgxMmY1YjQ9SlNPTlsnc3RyaW5naWZ5J10oJycrXzB4NWUwYjgyKTt9Y2F0Y2h7XzB4MTJmNWI0PSdcXFxceDIyJyt0aGlzW18weDI3ZmNmNSgweDE3NSldKF8weDVlMGI4MikrJ1xcXFx4MjInO31yZXR1cm4gXzB4MTJmNWI0W18weDI3ZmNmNSgweDFkMCldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4MTJmNWI0PV8weDEyZjViNFtfMHgyN2ZjZjUoMHgxZTYpXSgweDEsXzB4MTJmNWI0W18weDI3ZmNmNSgweDFiYSldLTB4Mik6XzB4MTJmNWI0PV8weDEyZjViNFtfMHgyN2ZjZjUoMHgxOWMpXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpW18weDI3ZmNmNSgweDE5YyldKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpW18weDI3ZmNmNSgweDE5YyldKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHgxMmY1YjQ7fVtfMHg0OGZmNGYoMHgxNzIpXShfMHgyNGQ2MTcsXzB4NDIxMzg4LF8weDEwZGFjMyxfMHgzNjEwNDApe3ZhciBfMHg0MThhN2M9XzB4NDhmZjRmO3RoaXNbXzB4NDE4YTdjKDB4MjAyKV0oXzB4MjRkNjE3LF8weDQyMTM4OCksXzB4MzYxMDQwJiZfMHgzNjEwNDAoKSx0aGlzW18weDQxOGE3YygweDE5YildKF8weDEwZGFjMyxfMHgyNGQ2MTcpLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDI0ZDYxNyxfMHg0MjEzODgpO31bJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgyZTIwMGYsXzB4NGNjYjVjKXt2YXIgXzB4NTZmOGU5PV8weDQ4ZmY0Zjt0aGlzW18weDU2ZjhlOSgweDIwNCldKF8weDJlMjAwZixfMHg0Y2NiNWMpLHRoaXNbXzB4NTZmOGU5KDB4MjBiKV0oXzB4MmUyMDBmLF8weDRjY2I1YyksdGhpc1tfMHg1NmY4ZTkoMHgyMDEpXShfMHgyZTIwMGYsXzB4NGNjYjVjKSx0aGlzW18weDU2ZjhlOSgweDE5NildKF8weDJlMjAwZixfMHg0Y2NiNWMpO31bJ19zZXROb2RlSWQnXShfMHg1MDkwNTIsXzB4MTQ2MmEyKXt9Wydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDNlNTA2YixfMHgxMTg2MmIpe31bXzB4NDhmZjRmKDB4MWZmKV0oXzB4NTk3YzI4LF8weDE5ZmFhNCl7fVtfMHg0OGZmNGYoMHgxNTMpXShfMHg0ZDFlZTEpe3ZhciBfMHg0NTVkYWM9XzB4NDhmZjRmO3JldHVybiBfMHg0ZDFlZTE9PT10aGlzW18weDQ1NWRhYygweDE3YyldO31bJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDJlNWY0ZSxfMHg1ZjBiYzYpe3ZhciBfMHgzODViYjA9XzB4NDhmZjRmO3RoaXNbXzB4Mzg1YmIwKDB4MWZmKV0oXzB4MmU1ZjRlLF8weDVmMGJjNiksdGhpc1tfMHgzODViYjAoMHgxNTgpXShfMHgyZTVmNGUpLF8weDVmMGJjNltfMHgzODViYjAoMHgxZDYpXSYmdGhpc1tfMHgzODViYjAoMHgxYjMpXShfMHgyZTVmNGUpLHRoaXNbXzB4Mzg1YmIwKDB4MWRhKV0oXzB4MmU1ZjRlLF8weDVmMGJjNiksdGhpc1tfMHgzODViYjAoMHgxNzYpXShfMHgyZTVmNGUsXzB4NWYwYmM2KSx0aGlzW18weDM4NWJiMCgweDIwNyldKF8weDJlNWY0ZSk7fVtfMHg0OGZmNGYoMHgxOWIpXShfMHgyZjc2ZDcsXzB4MjMyOWI2KXt2YXIgXzB4NDY3NWFjPV8weDQ4ZmY0ZjtsZXQgXzB4NWY0ZjJkO3RyeXtfMHg0ODVkM2FbJ2NvbnNvbGUnXSYmKF8weDVmNGYyZD1fMHg0ODVkM2FbJ2NvbnNvbGUnXVtfMHg0Njc1YWMoMHgyMjgpXSxfMHg0ODVkM2FbXzB4NDY3NWFjKDB4MTk3KV1bXzB4NDY3NWFjKDB4MjI4KV09ZnVuY3Rpb24oKXt9KSxfMHgyZjc2ZDcmJnR5cGVvZiBfMHgyZjc2ZDdbXzB4NDY3NWFjKDB4MWJhKV09PSdudW1iZXInJiYoXzB4MjMyOWI2W18weDQ2NzVhYygweDFiYSldPV8weDJmNzZkN1tfMHg0Njc1YWMoMHgxYmEpXSk7fWNhdGNoe31maW5hbGx5e18weDVmNGYyZCYmKF8weDQ4NWQzYVtfMHg0Njc1YWMoMHgxOTcpXVtfMHg0Njc1YWMoMHgyMjgpXT1fMHg1ZjRmMmQpO31pZihfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWY5KV09PT1fMHg0Njc1YWMoMHgxNzQpfHxfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWY5KV09PT1fMHg0Njc1YWMoMHgyMTMpKXtpZihpc05hTihfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWUxKV0pKV8weDIzMjliNltfMHg0Njc1YWMoMHgxNWMpXT0hMHgwLGRlbGV0ZSBfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWUxKV07ZWxzZSBzd2l0Y2goXzB4MjMyOWI2W18weDQ2NzVhYygweDFlMSldKXtjYXNlIE51bWJlcltfMHg0Njc1YWMoMHgxNTQpXTpfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWNmKV09ITB4MCxkZWxldGUgXzB4MjMyOWI2W18weDQ2NzVhYygweDFlMSldO2JyZWFrO2Nhc2UgTnVtYmVyW18weDQ2NzVhYygweDIwOSldOl8weDIzMjliNlsnbmVnYXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDIzMjliNltfMHg0Njc1YWMoMHgxZTEpXTticmVhaztjYXNlIDB4MDp0aGlzW18weDQ2NzVhYygweDFlNSldKF8weDIzMjliNltfMHg0Njc1YWMoMHgxZTEpXSkmJihfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWI1KV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDIzMjliNltfMHg0Njc1YWMoMHgxZjkpXT09PV8weDQ2NzVhYygweDIxZCkmJnR5cGVvZiBfMHgyZjc2ZDdbXzB4NDY3NWFjKDB4MTk1KV09PV8weDQ2NzVhYygweDFmNykmJl8weDJmNzZkN1tfMHg0Njc1YWMoMHgxOTUpXSYmXzB4MjMyOWI2W18weDQ2NzVhYygweDE5NSldJiZfMHgyZjc2ZDdbXzB4NDY3NWFjKDB4MTk1KV0hPT1fMHgyMzI5YjZbXzB4NDY3NWFjKDB4MTk1KV0mJihfMHgyMzI5YjZbJ2Z1bmNOYW1lJ109XzB4MmY3NmQ3W18weDQ2NzVhYygweDE5NSldKTt9WydfaXNOZWdhdGl2ZVplcm8nXShfMHgzNDgyMjMpe3ZhciBfMHg0YTIzODY9XzB4NDhmZjRmO3JldHVybiAweDEvXzB4MzQ4MjIzPT09TnVtYmVyW18weDRhMjM4NigweDIwOSldO31bJ19zb3J0UHJvcHMnXShfMHgxMDdlYWEpe3ZhciBfMHg0YjM3Y2M9XzB4NDhmZjRmOyFfMHgxMDdlYWFbXzB4NGIzN2NjKDB4MWRkKV18fCFfMHgxMDdlYWFbXzB4NGIzN2NjKDB4MWRkKV1bXzB4NGIzN2NjKDB4MWJhKV18fF8weDEwN2VhYVtfMHg0YjM3Y2MoMHgxZjkpXT09PV8weDRiMzdjYygweDIzMCl8fF8weDEwN2VhYVtfMHg0YjM3Y2MoMHgxZjkpXT09PV8weDRiMzdjYygweDE2NSl8fF8weDEwN2VhYVtfMHg0YjM3Y2MoMHgxZjkpXT09PV8weDRiMzdjYygweDIyNyl8fF8weDEwN2VhYVsncHJvcHMnXVtfMHg0YjM3Y2MoMHgxZmUpXShmdW5jdGlvbihfMHgxZDg2NjMsXzB4NDVlZDIzKXt2YXIgXzB4NTFhNGY2PV8weDRiMzdjYyxfMHgzOGYyNTk9XzB4MWQ4NjYzW18weDUxYTRmNigweDE5NSldW18weDUxYTRmNigweDFmMCldKCksXzB4NTNhYjRmPV8weDQ1ZWQyM1tfMHg1MWE0ZjYoMHgxOTUpXVsndG9Mb3dlckNhc2UnXSgpO3JldHVybiBfMHgzOGYyNTk8XzB4NTNhYjRmPy0weDE6XzB4MzhmMjU5Pl8weDUzYWI0Zj8weDE6MHgwO30pO31bJ19hZGRGdW5jdGlvbnNOb2RlJ10oXzB4MTVlMWVkLF8weDVjMDMyOCl7dmFyIF8weDViMDBlOT1fMHg0OGZmNGY7aWYoIShfMHg1YzAzMjhbXzB4NWIwMGU5KDB4MWYzKV18fCFfMHgxNWUxZWRbXzB4NWIwMGU5KDB4MWRkKV18fCFfMHgxNWUxZWRbXzB4NWIwMGU5KDB4MWRkKV1bXzB4NWIwMGU5KDB4MWJhKV0pKXtmb3IodmFyIF8weDQwMDZhNT1bXSxfMHgxOTA1MTc9W10sXzB4NWRhYTEzPTB4MCxfMHg1YzcyOGI9XzB4MTVlMWVkW18weDViMDBlOSgweDFkZCldWydsZW5ndGgnXTtfMHg1ZGFhMTM8XzB4NWM3MjhiO18weDVkYWExMysrKXt2YXIgXzB4MTc2YWEwPV8weDE1ZTFlZFtfMHg1YjAwZTkoMHgxZGQpXVtfMHg1ZGFhMTNdO18weDE3NmFhMFtfMHg1YjAwZTkoMHgxZjkpXT09PV8weDViMDBlOSgweDIxZCk/XzB4NDAwNmE1W18weDViMDBlOSgweDFhMyldKF8weDE3NmFhMCk6XzB4MTkwNTE3W18weDViMDBlOSgweDFhMyldKF8weDE3NmFhMCk7fWlmKCEoIV8weDE5MDUxN1tfMHg1YjAwZTkoMHgxYmEpXXx8XzB4NDAwNmE1W18weDViMDBlOSgweDFiYSldPD0weDEpKXtfMHgxNWUxZWRbXzB4NWIwMGU5KDB4MWRkKV09XzB4MTkwNTE3O3ZhciBfMHg0YTA5ZGE9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4NDAwNmE1fTt0aGlzW18weDViMDBlOSgweDIwNCldKF8weDRhMDlkYSxfMHg1YzAzMjgpLHRoaXNbXzB4NWIwMGU5KDB4MWZmKV0oXzB4NGEwOWRhLF8weDVjMDMyOCksdGhpc1tfMHg1YjAwZTkoMHgxNTgpXShfMHg0YTA5ZGEpLHRoaXNbXzB4NWIwMGU5KDB4MTk2KV0oXzB4NGEwOWRhLF8weDVjMDMyOCksXzB4NGEwOWRhWydpZCddKz0nXFxcXHgyMGYnLF8weDE1ZTFlZFtfMHg1YjAwZTkoMHgxZGQpXVtfMHg1YjAwZTkoMHgxOGIpXShfMHg0YTA5ZGEpO319fVtfMHg0OGZmNGYoMHgxNzYpXShfMHgyN2QzMTIsXzB4MTQ1MzcxKXt9W18weDQ4ZmY0ZigweDE1OCldKF8weDQ4NDc2Yyl7fVtfMHg0OGZmNGYoMHgyMzYpXShfMHgxNWFlNmUpe3ZhciBfMHg1NTkyMGQ9XzB4NDhmZjRmO3JldHVybiBBcnJheVtfMHg1NTkyMGQoMHgxOGUpXShfMHgxNWFlNmUpfHx0eXBlb2YgXzB4MTVhZTZlPT1fMHg1NTkyMGQoMHgxOTQpJiZ0aGlzW18weDU1OTIwZCgweDE3NSldKF8weDE1YWU2ZSk9PT0nW29iamVjdFxcXFx4MjBBcnJheV0nO31bXzB4NDhmZjRmKDB4MTk2KV0oXzB4OWU4ZGQ4LF8weDIxYmYzMSl7fVtfMHg0OGZmNGYoMHgyMDcpXShfMHg0ZDg2ZGMpe3ZhciBfMHgxZDM1MjM9XzB4NDhmZjRmO2RlbGV0ZSBfMHg0ZDg2ZGNbXzB4MWQzNTIzKDB4MjI5KV0sZGVsZXRlIF8weDRkODZkY1tfMHgxZDM1MjMoMHgxY2IpXSxkZWxldGUgXzB4NGQ4NmRjW18weDFkMzUyMygweDE2YildO31bXzB4NDhmZjRmKDB4MjAxKV0oXzB4NTAxMWVkLF8weDM3YjU0Myl7fX1sZXQgXzB4MTVjY2ZlPW5ldyBfMHgxYzRkMjgoKSxfMHg1MDhkY2M9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4MTJhZDBlPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4NzYwNjA3KF8weDIxODU3ZCxfMHgxYWFlODMsXzB4MjZhNTQwLF8weDM3NzU4NSxfMHg1NjQzYjgsXzB4MzExNmU1KXt2YXIgXzB4NzBmNjIwPV8weDQ4ZmY0ZjtsZXQgXzB4MWI2NjE3LF8weDQwMmI4ODt0cnl7XzB4NDAyYjg4PV8weDJjNmZkOCgpLF8weDFiNjYxNz1fMHhkNDk0YTNbXzB4MWFhZTgzXSwhXzB4MWI2NjE3fHxfMHg0MDJiODgtXzB4MWI2NjE3Wyd0cyddPjB4MWY0JiZfMHgxYjY2MTdbXzB4NzBmNjIwKDB4MTYwKV0mJl8weDFiNjYxN1tfMHg3MGY2MjAoMHgxZDcpXS9fMHgxYjY2MTdbJ2NvdW50J108MHg2ND8oXzB4ZDQ5NGEzW18weDFhYWU4M109XzB4MWI2NjE3PXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4NDAyYjg4fSxfMHhkNDk0YTNbXzB4NzBmNjIwKDB4MTkzKV09e30pOl8weDQwMmI4OC1fMHhkNDk0YTNbXzB4NzBmNjIwKDB4MTkzKV1bJ3RzJ10+MHgzMiYmXzB4ZDQ5NGEzWydoaXRzJ11bXzB4NzBmNjIwKDB4MTYwKV0mJl8weGQ0OTRhM1tfMHg3MGY2MjAoMHgxOTMpXVsndGltZSddL18weGQ0OTRhM1snaGl0cyddW18weDcwZjYyMCgweDE2MCldPDB4NjQmJihfMHhkNDk0YTNbXzB4NzBmNjIwKDB4MTkzKV09e30pO2xldCBfMHgyYWRjZjQ9W10sXzB4M2IwYWEzPV8weDFiNjYxN1tfMHg3MGY2MjAoMHgyM2EpXXx8XzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldW18weDcwZjYyMCgweDIzYSldP18weDEyYWQwZTpfMHg1MDhkY2MsXzB4NDk3NDk4PV8weDFiMzBjNz0+e3ZhciBfMHgyYjdiYjU9XzB4NzBmNjIwO2xldCBfMHgzNjBjZGM9e307cmV0dXJuIF8weDM2MGNkY1tfMHgyYjdiYjUoMHgxZGQpXT1fMHgxYjMwYzdbXzB4MmI3YmI1KDB4MWRkKV0sXzB4MzYwY2RjW18weDJiN2JiNSgweDIxOCldPV8weDFiMzBjN1tfMHgyYjdiYjUoMHgyMTgpXSxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWY0KV09XzB4MWIzMGM3W18weDJiN2JiNSgweDFmNCldLF8weDM2MGNkY1sndG90YWxTdHJMZW5ndGgnXT1fMHgxYjMwYzdbJ3RvdGFsU3RyTGVuZ3RoJ10sXzB4MzYwY2RjW18weDJiN2JiNSgweDE5ZCldPV8weDFiMzBjN1tfMHgyYjdiYjUoMHgxOWQpXSxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MjFjKV09XzB4MWIzMGM3WydhdXRvRXhwYW5kTWF4RGVwdGgnXSxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWQ2KV09ITB4MSxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWYzKV09IV8weDQxNDU3ZCxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MTdiKV09MHgxLF8weDM2MGNkY1snbGV2ZWwnXT0weDAsXzB4MzYwY2RjW18weDJiN2JiNSgweDE4YSldPV8weDJiN2JiNSgweDFjNCksXzB4MzYwY2RjWydyb290RXhwcmVzc2lvbiddPV8weDJiN2JiNSgweDIwYSksXzB4MzYwY2RjW18weDJiN2JiNSgweDFkNCldPSEweDAsXzB4MzYwY2RjWydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ109W10sXzB4MzYwY2RjW18weDJiN2JiNSgweDIzOSldPTB4MCxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWI5KV09ITB4MCxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWVjKV09MHgwLF8weDM2MGNkY1tfMHgyYjdiYjUoMHgxZWUpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHgzNjBjZGM7fTtmb3IodmFyIF8weDEwYjUyMT0weDA7XzB4MTBiNTIxPF8weDU2NDNiOFtfMHg3MGY2MjAoMHgxYmEpXTtfMHgxMGI1MjErKylfMHgyYWRjZjRbXzB4NzBmNjIwKDB4MWEzKV0oXzB4MTVjY2ZlW18weDcwZjYyMCgweDE4MSldKHsndGltZU5vZGUnOl8weDIxODU3ZD09PV8weDcwZjYyMCgweDFkNyl8fHZvaWQgMHgwfSxfMHg1NjQzYjhbXzB4MTBiNTIxXSxfMHg0OTc0OTgoXzB4M2IwYWEzKSx7fSkpO2lmKF8weDIxODU3ZD09PV8weDcwZjYyMCgweDE1ZCkpe2xldCBfMHgzNWJmZDk9RXJyb3JbXzB4NzBmNjIwKDB4MjE2KV07dHJ5e0Vycm9yW18weDcwZjYyMCgweDIxNildPTB4MS8weDAsXzB4MmFkY2Y0W18weDcwZjYyMCgweDFhMyldKF8weDE1Y2NmZVtfMHg3MGY2MjAoMHgxODEpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbXzB4NzBmNjIwKDB4MTVmKV0sXzB4NDk3NDk4KF8weDNiMGFhMykseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbXzB4NzBmNjIwKDB4MjE2KV09XzB4MzViZmQ5O319cmV0dXJueydtZXRob2QnOl8weDcwZjYyMCgweDFmMSksJ3ZlcnNpb24nOl8weDI0Y2M5ZiwnYXJncyc6W3sndHMnOl8weDI2YTU0MCwnc2Vzc2lvbic6XzB4Mzc3NTg1LCdhcmdzJzpfMHgyYWRjZjQsJ2lkJzpfMHgxYWFlODMsJ2NvbnRleHQnOl8weDMxMTZlNX1dfTt9Y2F0Y2goXzB4NGNlNDEyKXtyZXR1cm57J21ldGhvZCc6XzB4NzBmNjIwKDB4MWYxKSwndmVyc2lvbic6XzB4MjRjYzlmLCdhcmdzJzpbeyd0cyc6XzB4MjZhNTQwLCdzZXNzaW9uJzpfMHgzNzc1ODUsJ2FyZ3MnOlt7J3R5cGUnOid1bmtub3duJywnZXJyb3InOl8weDRjZTQxMiYmXzB4NGNlNDEyW18weDcwZjYyMCgweDIwMCldfV0sJ2lkJzpfMHgxYWFlODMsJ2NvbnRleHQnOl8weDMxMTZlNX1dfTt9ZmluYWxseXt0cnl7aWYoXzB4MWI2NjE3JiZfMHg0MDJiODgpe2xldCBfMHgyNmY2MjE9XzB4MmM2ZmQ4KCk7XzB4MWI2NjE3W18weDcwZjYyMCgweDE2MCldKyssXzB4MWI2NjE3W18weDcwZjYyMCgweDFkNyldKz1fMHgyNGY0YzQoXzB4NDAyYjg4LF8weDI2ZjYyMSksXzB4MWI2NjE3Wyd0cyddPV8weDI2ZjYyMSxfMHhkNDk0YTNbJ2hpdHMnXVtfMHg3MGY2MjAoMHgxNjApXSsrLF8weGQ0OTRhM1snaGl0cyddW18weDcwZjYyMCgweDFkNyldKz1fMHgyNGY0YzQoXzB4NDAyYjg4LF8weDI2ZjYyMSksXzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldWyd0cyddPV8weDI2ZjYyMSwoXzB4MWI2NjE3Wydjb3VudCddPjB4MzJ8fF8weDFiNjYxN1sndGltZSddPjB4NjQpJiYoXzB4MWI2NjE3WydyZWR1Y2VMaW1pdHMnXT0hMHgwKSwoXzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldWydjb3VudCddPjB4M2U4fHxfMHhkNDk0YTNbXzB4NzBmNjIwKDB4MTkzKV1bXzB4NzBmNjIwKDB4MWQ3KV0+MHgxMmMpJiYoXzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldW18weDcwZjYyMCgweDIzYSldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDc2MDYwNzt9KChfMHgzMWQxZjksXzB4M2VhYWI1LF8weDQ0NDcxMixfMHgyNzJiYzksXzB4NzA5MjBhLF8weDNjNTQxNSxfMHgyODNlMTcsXzB4MmQ1NGFhLF8weDJkODRmNSxfMHgxZGJhYmIpPT57dmFyIF8weDJjNDM4OT1fMHgyOWQ1OTY7aWYoXzB4MzFkMWY5WydfY29uc29sZV9uaW5qYSddKXJldHVybiBfMHgzMWQxZjlbXzB4MmM0Mzg5KDB4MTg1KV07aWYoIUooXzB4MzFkMWY5LF8weDJkNTRhYSxfMHg3MDkyMGEpKXJldHVybiBfMHgzMWQxZjlbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnY292ZXJhZ2UnOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weDMxZDFmOVtfMHgyYzQzODkoMHgxODUpXTtsZXQgXzB4NTFjNjIyPVcoXzB4MzFkMWY5KSxfMHgxNjc3NTQ9XzB4NTFjNjIyWydlbGFwc2VkJ10sXzB4MmNmMzU3PV8weDUxYzYyMltfMHgyYzQzODkoMHgxODgpXSxfMHhjYjNhOGQ9XzB4NTFjNjIyW18weDJjNDM4OSgweDFhNCldLF8weDE1MzliMj17J2hpdHMnOnt9LCd0cyc6e319LF8weDM5ZjJmOT1ZKF8weDMxZDFmOSxfMHgyZDg0ZjUsXzB4MTUzOWIyLF8weDNjNTQxNSksXzB4MTIwMTI0PV8weDU1YWVhZj0+e18weDE1MzliMlsndHMnXVtfMHg1NWFlYWZdPV8weDJjZjM1NygpO30sXzB4MTZlMjNjPShfMHgzNjdmN2QsXzB4MjY5ZTIwKT0+e3ZhciBfMHgyMzMyYmY9XzB4MmM0Mzg5O2xldCBfMHgxNjhiZGY9XzB4MTUzOWIyWyd0cyddW18weDI2OWUyMF07aWYoZGVsZXRlIF8weDE1MzliMlsndHMnXVtfMHgyNjllMjBdLF8weDE2OGJkZil7bGV0IF8weDFjOTA5Yz1fMHgxNjc3NTQoXzB4MTY4YmRmLF8weDJjZjM1NygpKTtfMHg1OTYwOWYoXzB4MzlmMmY5KF8weDIzMzJiZigweDFkNyksXzB4MzY3ZjdkLF8weGNiM2E4ZCgpLF8weDFkZTgyNCxbXzB4MWM5MDljXSxfMHgyNjllMjApKTt9fSxfMHg0MDIxNTE9XzB4MzVhZGY4PT5fMHgyYzUzODg9Pnt0cnl7XzB4MTIwMTI0KF8weDJjNTM4OCksXzB4MzVhZGY4KF8weDJjNTM4OCk7fWZpbmFsbHl7XzB4MzFkMWY5Wydjb25zb2xlJ11bJ3RpbWUnXT1fMHgzNWFkZjg7fX0sXzB4ZGYzNzM1PV8weDM1NzNiMz0+XzB4MzE0YWYyPT57dmFyIF8weDIzNzEyMj1fMHgyYzQzODk7dHJ5e2xldCBbXzB4MzFhNzA2LF8weDNjYmQ4Yl09XzB4MzE0YWYyWydzcGxpdCddKF8weDIzNzEyMigweDIxNCkpO18weDE2ZTIzYyhfMHgzY2JkOGIsXzB4MzFhNzA2KSxfMHgzNTczYjMoXzB4MzFhNzA2KTt9ZmluYWxseXtfMHgzMWQxZjlbXzB4MjM3MTIyKDB4MTk3KV1bXzB4MjM3MTIyKDB4MWIyKV09XzB4MzU3M2IzO319O18weDMxZDFmOVsnX2NvbnNvbGVfbmluamEnXT17J2NvbnNvbGVMb2cnOihfMHg0MjM3YjgsXzB4MjVmNzQ3KT0+e3ZhciBfMHgyYzA4YTk9XzB4MmM0Mzg5O18weDMxZDFmOVtfMHgyYzA4YTkoMHgxOTcpXVtfMHgyYzA4YTkoMHgxZjEpXVtfMHgyYzA4YTkoMHgxOTUpXSE9PV8weDJjMDhhOSgweDE3ZikmJl8weDU5NjA5ZihfMHgzOWYyZjkoXzB4MmMwOGE5KDB4MWYxKSxfMHg0MjM3YjgsXzB4Y2IzYThkKCksXzB4MWRlODI0LF8weDI1Zjc0NykpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDI3NGZjYixfMHg0OTczMjMpPT57dmFyIF8weDk4Y2M2ZT1fMHgyYzQzODk7XzB4MzFkMWY5W18weDk4Y2M2ZSgweDE5NyldWydsb2cnXVtfMHg5OGNjNmUoMHgxOTUpXSE9PSdkaXNhYmxlZFRyYWNlJyYmXzB4NTk2MDlmKF8weDM5ZjJmOShfMHg5OGNjNmUoMHgxNWQpLF8weDI3NGZjYixfMHhjYjNhOGQoKSxfMHgxZGU4MjQsXzB4NDk3MzIzKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weGNkODE5Zj1fMHgyYzQzODk7XzB4MzFkMWY5W18weGNkODE5ZigweDE5NyldW18weGNkODE5ZigweDFkNyldPV8weDQwMjE1MShfMHgzMWQxZjlbXzB4Y2Q4MTlmKDB4MTk3KV1bXzB4Y2Q4MTlmKDB4MWQ3KV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHgzYWE1ZDc9XzB4MmM0Mzg5O18weDMxZDFmOVtfMHgzYWE1ZDcoMHgxOTcpXVsndGltZUVuZCddPV8weGRmMzczNShfMHgzMWQxZjlbXzB4M2FhNWQ3KDB4MTk3KV1bXzB4M2FhNWQ3KDB4MWIyKV0pO30sJ2F1dG9Mb2cnOihfMHgzMmNmNTQsXzB4Mzc1NTk0KT0+e3ZhciBfMHgyMDBiYzc9XzB4MmM0Mzg5O18weDU5NjA5ZihfMHgzOWYyZjkoXzB4MjAwYmM3KDB4MWYxKSxfMHgzNzU1OTQsXzB4Y2IzYThkKCksXzB4MWRlODI0LFtfMHgzMmNmNTRdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg0MTE1MzIsXzB4M2FiMDhmKT0+e18weDU5NjA5ZihfMHgzOWYyZjkoJ2xvZycsXzB4NDExNTMyLF8weGNiM2E4ZCgpLF8weDFkZTgyNCxfMHgzYWIwOGYpKTt9LCdhdXRvVHJhY2UnOihfMHg1NjYwYjQsXzB4MmZiNzJkKT0+e3ZhciBfMHg0ODBmNWI9XzB4MmM0Mzg5O18weDU5NjA5ZihfMHgzOWYyZjkoXzB4NDgwZjViKDB4MTVkKSxfMHgyZmI3MmQsXzB4Y2IzYThkKCksXzB4MWRlODI0LFtfMHg1NjYwYjRdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weGRhZTIzZCxfMHgxODZhYzkpPT57dmFyIF8weDU1OGQ0Mj1fMHgyYzQzODk7XzB4NTk2MDlmKF8weDM5ZjJmOShfMHg1NThkNDIoMHgxNWQpLF8weGRhZTIzZCxfMHhjYjNhOGQoKSxfMHgxZGU4MjQsXzB4MTg2YWM5KSk7fSwnYXV0b1RpbWUnOihfMHgzZTdlOGUsXzB4MTJlOTlhLF8weDVhMzU2Yik9PntfMHgxMjAxMjQoXzB4NWEzNTZiKTt9LCdhdXRvVGltZUVuZCc6KF8weGQ1ZTI3MCxfMHhiYmM0NjUsXzB4YWJkYWQzKT0+e18weDE2ZTIzYyhfMHhiYmM0NjUsXzB4YWJkYWQzKTt9LCdjb3ZlcmFnZSc6XzB4MzVlNDVjPT57dmFyIF8weDM2M2VkMT1fMHgyYzQzODk7XzB4NTk2MDlmKHsnbWV0aG9kJzpfMHgzNjNlZDEoMHgxYzMpLCd2ZXJzaW9uJzpfMHgzYzU0MTUsJ2FyZ3MnOlt7J2lkJzpfMHgzNWU0NWN9XX0pO319O2xldCBfMHg1OTYwOWY9YihfMHgzMWQxZjksXzB4M2VhYWI1LF8weDQ0NDcxMixfMHgyNzJiYzksXzB4NzA5MjBhLF8weDFkYmFiYiksXzB4MWRlODI0PV8weDMxZDFmOVtfMHgyYzQzODkoMHgyMWUpXTtyZXR1cm4gXzB4MzFkMWY5W18weDJjNDM4OSgweDE4NSldO30pKGdsb2JhbFRoaXMsXzB4MjlkNTk2KDB4MWJjKSxfMHgyOWQ1OTYoMHgxNjkpLF8weDI5ZDU5NigweDIxNyksXzB4MjlkNTk2KDB4MjFhKSxfMHgyOWQ1OTYoMHgxODkpLF8weDI5ZDU5NigweDE4ZiksW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJEYW1pbGFyZVxcXCIsXFxcIjE2OS4yNTQuODAuODBcXFwiLFxcXCIxOTIuMTY4LjAuMTAxXFxcIixcXFwiMTcyLjIzLjE5Mi4xXFxcIl0sXzB4MjlkNTk2KDB4MjM3KSxfMHgyOWQ1OTYoMHgxY2UpKTtcIik7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fdGUoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZUVuZCgpO31jYXRjaChlKXt9fTsvKmVzbGludCB1bmljb3JuL25vLWFidXNpdmUtZXNsaW50LWRpc2FibGU6LGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\USER\\\\Documents\\\\adewale-wedding-invite\\\\pages\\\\index.jsx */"), __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, ogTags, {
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
      lineNumber: 146,
      columnNumber: 7
    }
  })), __jsx("section", {
    className: "jsx-1703421768" + " " + 'header_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "home",
    className: "jsx-1703421768" + " " + 'header_slider',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'slick-list draggable',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
      lineNumber: 161,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      height: '100vh'
    },
    className: "jsx-1703421768" + " " + 'single_slider bg_cover d-flex align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-10',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
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
      lineNumber: 171,
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
      lineNumber: 175,
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
      lineNumber: 180,
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
      lineNumber: 189,
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
      lineNumber: 197,
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
      lineNumber: 205,
      columnNumber: 25
    }
  }, venue.name, ", ", venue.city, ", ", venue.country, ".")))))))))), __jsx("section", {
    id: "coming_soon",
    className: "jsx-1703421768" + " " + 'coming_soon_area pt-20 pb-70',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
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
      lineNumber: 224,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
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
      lineNumber: 230,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 17
    }
  }, t('eventDate'), ":"), __jsx("p", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
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
      lineNumber: 243,
      columnNumber: 17
    }
  }, __jsx(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    event: calendarEvent,
    buttonLabel: t('btnAddToMyCalendar'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 19
    }
  })), __jsx("img", {
    src: "assets/images/section_shape.png",
    alt: "Shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-8',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
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
      lineNumber: 258,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_count d-flex justify-content-end pt-20',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
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
      lineNumber: 270,
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
      lineNumber: 279,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: venue.mapUrl,
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
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
      lineNumber: 284,
      columnNumber: 25
    }
  })), __jsx("a", {
    href: venue.mapUrl,
    style: {
      maxWidth: '75vw',
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
      marginTop: 10
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 23
    }
  }, venue.mapUrl)))))))), __jsx("div", {
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
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-9',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'section_title text-center pb-30',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
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
      lineNumber: 332,
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
      lineNumber: 341,
      columnNumber: 23
    }
  }, guest.name, ",")), __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 19
    }
  }, t('invitationIntro')), __jsx("div", {
    style: {
      textAlign: 'left',
      paddingTop: 20,
      paddingBottom: 20,
      maxWidth: 400,
      margin: 'auto'
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 19
    }
  }, __jsx("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 'inherit',
      color: 'dimgrey',
      textAlign: t('invitationContentTextAlign')
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 23
    }
  }, t('invitationContent'), t('invitationOutro') && !t('invitationOutro').startsWith('[missing') && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("br", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 31
    }
  }), __jsx("br", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 31
    }
  }), t('invitationOutro'))))), _src_config_app__WEBPACK_IMPORTED_MODULE_7__["default"].showQrCode && guest.name && __jsx("div", {
    style: {
      marginTop: 20,
      marginBottom: 35
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 21
    }
  }, __jsx(qrcode_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: guest.guestId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "jsx-1703421768" + " " + 'text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: venue.mapUrl,
    style: {
      borderBottom: '0.2rem solid',
      marginBottom: 10
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 21
    }
  }, __jsx("b", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 23
    }
  }, venue.name)), __jsx("br", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 21
    }
  }), venue.addressLine1, __jsx("br", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 21
    }
  }), venue.country, "."), __jsx("p", {
    style: {
      marginTop: 10
    },
    className: "jsx-1703421768" + " " + 'text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 19
    }
  }, __jsx("b", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 21
    }
  }, weddingDate, " \xB7 ", weddingTime)), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container mt-5',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 19
    }
  }, __jsx("h2", {
    className: "jsx-1703421768" + " " + 'form_title mb-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 21
    }
  }, "Inform Us of your availability"), __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row mb-3',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-md-6',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "name",
    className: "jsx-1703421768" + " " + 'form-label',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 27
    }
  }, "Name:"), __jsx("input", {
    type: "text",
    id: "name",
    value: name,
    onChange: e => setName(e.target.value),
    className: "jsx-1703421768" + " " + 'form-control',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-md-6',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "email",
    className: "jsx-1703421768" + " " + 'form-label',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 27
    }
  }, "Email:"), __jsx("input", {
    type: "email",
    id: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    className: "jsx-1703421768" + " " + 'form-control',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'mb-3',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "attending",
    className: "jsx-1703421768" + " " + 'form-label',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 25
    }
  }, "Will you be attending?"), __jsx("textarea", {
    type: "number",
    id: "attending",
    value: attending,
    onChange: e => setAttending(e.target.value),
    className: "jsx-1703421768" + " " + 'form-control',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 25
    }
  })), __jsx("button", {
    type: "submit",
    className: "jsx-1703421768" + " " + 'btn btn-primary',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 23
    }
  }, isLoading ? 'Submitting...' : 'Submit'))), t('invitationClosing') && !t('invitationClosing').startsWith('[missing') && __jsx("p", {
    style: {
      fontStyle: 'italic',
      maxWidth: 420,
      margin: 'auto',
      marginTop: 60
    },
    dangerouslySetInnerHTML: {
      __html: t('invitationClosing')
    },
    className: "jsx-1703421768" + " " + 'text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 23
    }
  }))))))), __jsx("footer", {
    id: "footer",
    className: "jsx-1703421768" + " " + 'footer_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_shape_1',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_widget pt-50 pb-10 text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_logo',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
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
      lineNumber: 492,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_title ',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 15
    }
  }, coupleName)))), __jsx("h5", {
    style: {
      color: 'grey',
      textAlign: 'center',
      marginBottom: '40px'
    },
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 9
    }
  }, "#DWedding")));
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
/* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x29d596=_0x41c9;(function(_0x252683,_0x372bca){var _0x23abff=_0x41c9,_0x2f1b41=_0x252683();while(!![]){try{var _0x4efda2=parseInt(_0x23abff(0x1f5))/0x1+-parseInt(_0x23abff(0x178))/0x2*(-parseInt(_0x23abff(0x1fc))/0x3)+-parseInt(_0x23abff(0x162))/0x4+-parseInt(_0x23abff(0x232))/0x5*(-parseInt(_0x23abff(0x167))/0x6)+-parseInt(_0x23abff(0x1c8))/0x7+-parseInt(_0x23abff(0x20d))/0x8+parseInt(_0x23abff(0x182))/0x9*(parseInt(_0x23abff(0x1c1))/0xa);if(_0x4efda2===_0x372bca)break;else _0x2f1b41['push'](_0x2f1b41['shift']());}catch(_0x45dec2){_0x2f1b41['push'](_0x2f1b41['shift']());}}}(_0x5556,0x194e9));var j=Object[_0x29d596(0x215)],H=Object['defineProperty'],G=Object[_0x29d596(0x205)],ee=Object['getOwnPropertyNames'],te=Object[_0x29d596(0x1b1)],ne=Object[_0x29d596(0x180)]['hasOwnProperty'],re=(_0x28e3d2,_0x499610,_0xf48920,_0xf1da81)=>{var _0x1eb40c=_0x29d596;if(_0x499610&&typeof _0x499610==_0x1eb40c(0x194)||typeof _0x499610==_0x1eb40c(0x21d)){for(let _0x1e46c6 of ee(_0x499610))!ne[_0x1eb40c(0x18c)](_0x28e3d2,_0x1e46c6)&&_0x1e46c6!==_0xf48920&&H(_0x28e3d2,_0x1e46c6,{'get':()=>_0x499610[_0x1e46c6],'enumerable':!(_0xf1da81=G(_0x499610,_0x1e46c6))||_0xf1da81['enumerable']});}return _0x28e3d2;},x=(_0x264b93,_0x3bc79c,_0x5574b6)=>(_0x5574b6=_0x264b93!=null?j(te(_0x264b93)):{},re(_0x3bc79c||!_0x264b93||!_0x264b93['__es'+'Module']?H(_0x5574b6,_0x29d596(0x1db),{'value':_0x264b93,'enumerable':!0x0}):_0x5574b6,_0x264b93)),X=class{constructor(_0x5da6d5,_0x170e67,_0x3cc72e,_0x44fcb3,_0x58d68b){var _0x547528=_0x29d596;this['global']=_0x5da6d5,this[_0x547528(0x173)]=_0x170e67,this[_0x547528(0x1e9)]=_0x3cc72e,this[_0x547528(0x225)]=_0x44fcb3,this[_0x547528(0x164)]=_0x58d68b,this[_0x547528(0x1bd)]=!0x0,this[_0x547528(0x1dc)]=!0x0,this[_0x547528(0x20e)]=!0x1,this[_0x547528(0x183)]=!0x1,this[_0x547528(0x17a)]=_0x5da6d5['process']?.[_0x547528(0x1eb)]?.['NEXT_RUNTIME']===_0x547528(0x223),this['_inBrowser']=!this['global'][_0x547528(0x1e7)]?.['versions']?.[_0x547528(0x1ee)]&&!this['_inNextEdge'],this[_0x547528(0x20f)]=null,this[_0x547528(0x184)]=0x0,this[_0x547528(0x231)]=0x14,this['_webSocketErrorDocsLink']=_0x547528(0x203),this['_sendErrorMessage']=(this[_0x547528(0x1e4)]?_0x547528(0x240):_0x547528(0x1af))+this[_0x547528(0x22a)];}async[_0x29d596(0x15b)](){var _0x547f32=_0x29d596;if(this[_0x547f32(0x20f)])return this[_0x547f32(0x20f)];let _0x206c71;if(this[_0x547f32(0x1e4)]||this[_0x547f32(0x17a)])_0x206c71=this[_0x547f32(0x1a5)][_0x547f32(0x16d)];else{if(this[_0x547f32(0x1a5)][_0x547f32(0x1e7)]?.['_WebSocket'])_0x206c71=this[_0x547f32(0x1a5)]['process']?.[_0x547f32(0x21b)];else try{let _0x4da36a=await import(_0x547f32(0x1c0));_0x206c71=(await import((await import(_0x547f32(0x1f2)))[_0x547f32(0x235)](_0x4da36a[_0x547f32(0x1b8)](this[_0x547f32(0x225)],_0x547f32(0x157)))[_0x547f32(0x1be)]()))[_0x547f32(0x1db)];}catch{try{_0x206c71=require(require(_0x547f32(0x1c0))[_0x547f32(0x1b8)](this[_0x547f32(0x225)],'ws'));}catch{throw new Error(_0x547f32(0x1ae));}}}return this[_0x547f32(0x20f)]=_0x206c71,_0x206c71;}['_connectToHostNow'](){var _0x5c6792=_0x29d596;this[_0x5c6792(0x183)]||this[_0x5c6792(0x20e)]||this[_0x5c6792(0x184)]>=this[_0x5c6792(0x231)]||(this[_0x5c6792(0x1dc)]=!0x1,this['_connecting']=!0x0,this[_0x5c6792(0x184)]++,this[_0x5c6792(0x16a)]=new Promise((_0x3fbb47,_0x5d9936)=>{var _0x2d0d5a=_0x5c6792;this[_0x2d0d5a(0x15b)]()[_0x2d0d5a(0x19e)](_0x5723e5=>{var _0x77699=_0x2d0d5a;let _0x5b30e0=new _0x5723e5('ws://'+(!this[_0x77699(0x1e4)]&&this[_0x77699(0x164)]?'gateway.docker.internal':this[_0x77699(0x173)])+':'+this[_0x77699(0x1e9)]);_0x5b30e0[_0x77699(0x19a)]=()=>{var _0x13d0c6=_0x77699;this[_0x13d0c6(0x1bd)]=!0x1,this[_0x13d0c6(0x1c5)](_0x5b30e0),this[_0x13d0c6(0x170)](),_0x5d9936(new Error('logger\\x20websocket\\x20error'));},_0x5b30e0[_0x77699(0x22e)]=()=>{var _0x1dc028=_0x77699;this[_0x1dc028(0x1e4)]||_0x5b30e0[_0x1dc028(0x226)]&&_0x5b30e0[_0x1dc028(0x226)][_0x1dc028(0x1f6)]&&_0x5b30e0['_socket'][_0x1dc028(0x1f6)](),_0x3fbb47(_0x5b30e0);},_0x5b30e0[_0x77699(0x1b6)]=()=>{var _0x4323bb=_0x77699;this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0x5b30e0),this[_0x4323bb(0x170)]();},_0x5b30e0[_0x77699(0x156)]=_0x386895=>{var _0x447737=_0x77699;try{_0x386895&&_0x386895[_0x447737(0x233)]&&this[_0x447737(0x1e4)]&&JSON[_0x447737(0x163)](_0x386895[_0x447737(0x233)])[_0x447737(0x1cd)]===_0x447737(0x22b)&&this[_0x447737(0x1a5)]['location'][_0x447737(0x22b)]();}catch{}};})[_0x2d0d5a(0x19e)](_0x47bd89=>(this[_0x2d0d5a(0x20e)]=!0x0,this[_0x2d0d5a(0x183)]=!0x1,this[_0x2d0d5a(0x1dc)]=!0x1,this[_0x2d0d5a(0x1bd)]=!0x0,this[_0x2d0d5a(0x184)]=0x0,_0x47bd89))[_0x2d0d5a(0x17e)](_0x21989c=>(this[_0x2d0d5a(0x20e)]=!0x1,this[_0x2d0d5a(0x183)]=!0x1,console[_0x2d0d5a(0x22d)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x5d9936(new Error(_0x2d0d5a(0x1d5)+(_0x21989c&&_0x21989c[_0x2d0d5a(0x200)])))));}));}['_disposeWebsocket'](_0x1266e9){var _0x4c6295=_0x29d596;this[_0x4c6295(0x20e)]=!0x1,this[_0x4c6295(0x183)]=!0x1;try{_0x1266e9[_0x4c6295(0x1b6)]=null,_0x1266e9[_0x4c6295(0x19a)]=null,_0x1266e9['onopen']=null;}catch{}try{_0x1266e9[_0x4c6295(0x177)]<0x2&&_0x1266e9[_0x4c6295(0x1a6)]();}catch{}}[_0x29d596(0x170)](){var _0xb56a6e=_0x29d596;clearTimeout(this['_reconnectTimeout']),!(this[_0xb56a6e(0x184)]>=this['_maxConnectAttemptCount'])&&(this[_0xb56a6e(0x1e2)]=setTimeout(()=>{var _0x40e8bc=_0xb56a6e;this[_0x40e8bc(0x20e)]||this[_0x40e8bc(0x183)]||(this[_0x40e8bc(0x187)](),this['_ws']?.[_0x40e8bc(0x17e)](()=>this[_0x40e8bc(0x170)]()));},0x1f4),this['_reconnectTimeout']['unref']&&this['_reconnectTimeout'][_0xb56a6e(0x1f6)]());}async[_0x29d596(0x212)](_0x33b014){var _0x14059a=_0x29d596;try{if(!this[_0x14059a(0x1bd)])return;this[_0x14059a(0x1dc)]&&this['_connectToHostNow'](),(await this[_0x14059a(0x16a)])[_0x14059a(0x212)](JSON['stringify'](_0x33b014));}catch(_0x515cf1){console[_0x14059a(0x22d)](this[_0x14059a(0x190)]+':\\x20'+(_0x515cf1&&_0x515cf1[_0x14059a(0x200)])),this[_0x14059a(0x1bd)]=!0x1,this[_0x14059a(0x170)]();}}};function _0x5556(){var _0x55bd0f=['split','_connectToHostNow','timeStamp','1.0.0','expId','unshift','call','getOwnPropertySymbols','isArray','1697374672497','_sendErrorMessage','HTMLAllCollection','_p_length','hits','object','name','_setNodePermissions','console','_isPrimitiveType','cappedElements','onerror','_additionalMetadata','replace','autoExpandLimit','then','unknown','symbol','pop','_dateToString','push','now','global','close','getter','_type','date','_p_','hrtime','cappedProps','forEach','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','constructor','getPrototypeOf','timeEnd','_sortProps','_addProperty','negativeZero','onclose','_capIfString','join','resolveGetters','length','versions','127.0.0.1','_allowedToSend','toString','_getOwnPropertyNames','path','10bdNjxS','[object\\x20Date]','coverage','root_exp_id','_disposeWebsocket','_getOwnPropertySymbols','includes','1164226NGmllZ','\\x20browser','totalStrLength','_hasSetOnItsPath','astro','method','','positiveInfinity','match','_addObjectProperty','location','_treeNodePropertiesAfterFullValue','autoExpand','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','sortProps','time','set','getOwnPropertyNames','_addFunctionsNode','default','_allowedToConnectOnSend','props','isExpressionToEvaluate','next.js','expressionsToEvaluate','value','_reconnectTimeout','perf_hooks','_inBrowser','_isNegativeZero','substr','process','_quotedRegExp','port','_propertyName','env','allStrLength','[object\\x20Array]','node','_Symbol','toLowerCase','log','url','noFunctions','strLength','134745tXpwYp','unref','string','setter','type','current','get','135LGpRAo','_HTMLAllCollection','sort','_setNodeLabel','message','_setNodeExpressionPath','_treeNodePropertiesBeforeFullValue','https://tinyurl.com/37x8b79t','_setNodeId','getOwnPropertyDescriptor','undefined','_cleanNode','slice','NEGATIVE_INFINITY','root_exp','_setNodeQueryPath','Boolean','338896ftmItL','_connected','_WebSocketClass','Buffer','concat','send','Number',':logPointId:','create','stackTraceLimit',\"c:\\\\Users\\\\USER\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.232\\\\node_modules\",'elements','nuxt','webpack','_WebSocket','autoExpandMaxDepth','function','_console_ninja_session','[object\\x20Set]','autoExpandPreviousObjects','performance','\\x20server','edge','valueOf','nodeModules','_socket','Set','error','_hasSymbolPropertyOnItsPath','_webSocketErrorDocsLink','reload','_regExpToString','warn','onopen','NEXT_RUNTIME','array','_maxConnectAttemptCount','2560OlFrqe','data','[object\\x20BigInt]','pathToFileURL','_isArray','','level','autoExpandPropertyCount','reduceLimits','_property','capped','index','boolean','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_isUndefined','POSITIVE_INFINITY','test','onmessage','ws/index.js','_setNodeExpandableState','_getOwnPropertyDescriptor','_isPrimitiveWrapperType','getWebSocketClass','nan','trace','Error','stack','count','parent','803600urJNWI','parse','dockerizedApp','Map','null','48UtRWVv','_numberRegExp','60992','_ws','_hasMapOnItsPath','_consoleNinjaAllowedToStart','WebSocket','_isMap','hostname','_attemptToReconnectShortly','bigint','_processTreeNodeResult','host','number','_objectToString','_addLoadNode','readyState','1578rgcmXv','_blacklistedProperty','_inNextEdge','depth','_undefined','String','catch','disabledLog','prototype','serialize','3050019JCkboc','_connecting','_connectAttemptCount','_console_ninja'];_0x5556=function(){return _0x55bd0f;};return _0x5556();}function b(_0x3f6cfb,_0x4c0c1b,_0xe144cf,_0x3778b5,_0x232107,_0x6ecc65){var _0x2a1459=_0x29d596;let _0x17f90f=_0xe144cf[_0x2a1459(0x186)](',')['map'](_0xe516e5=>{var _0x27f8e8=_0x2a1459;try{_0x3f6cfb[_0x27f8e8(0x21e)]||((_0x232107===_0x27f8e8(0x1df)||_0x232107==='remix'||_0x232107===_0x27f8e8(0x1cc))&&(_0x232107+=!_0x3f6cfb['process']?.[_0x27f8e8(0x1bb)]?.[_0x27f8e8(0x1ee)]&&_0x3f6cfb[_0x27f8e8(0x1e7)]?.[_0x27f8e8(0x1eb)]?.[_0x27f8e8(0x22f)]!=='edge'?_0x27f8e8(0x1c9):_0x27f8e8(0x222)),_0x3f6cfb[_0x27f8e8(0x21e)]={'id':+new Date(),'tool':_0x232107});let _0x3439f5=new X(_0x3f6cfb,_0x4c0c1b,_0xe516e5,_0x3778b5,_0x6ecc65);return _0x3439f5['send']['bind'](_0x3439f5);}catch(_0x41da9f){return console[_0x27f8e8(0x22d)](_0x27f8e8(0x23f),_0x41da9f&&_0x41da9f[_0x27f8e8(0x200)]),()=>{};}});return _0x5e3b8b=>_0x17f90f['forEach'](_0x43148b=>_0x43148b(_0x5e3b8b));}function _0x41c9(_0x16e8b7,_0x482930){var _0x55567a=_0x5556();return _0x41c9=function(_0x41c93d,_0x29c23d){_0x41c93d=_0x41c93d-0x153;var _0x313c0d=_0x55567a[_0x41c93d];return _0x313c0d;},_0x41c9(_0x16e8b7,_0x482930);}function W(_0x14320b){var _0x3e30a1=_0x29d596;let _0x1f44d7=function(_0x2bec20,_0x12709d){return _0x12709d-_0x2bec20;},_0x4ad599;if(_0x14320b[_0x3e30a1(0x221)])_0x4ad599=function(){var _0xe81a4d=_0x3e30a1;return _0x14320b[_0xe81a4d(0x221)][_0xe81a4d(0x1a4)]();};else{if(_0x14320b[_0x3e30a1(0x1e7)]&&_0x14320b[_0x3e30a1(0x1e7)]['hrtime']&&_0x14320b[_0x3e30a1(0x1e7)]?.[_0x3e30a1(0x1eb)]?.[_0x3e30a1(0x22f)]!==_0x3e30a1(0x223))_0x4ad599=function(){var _0x15a2eb=_0x3e30a1;return _0x14320b[_0x15a2eb(0x1e7)][_0x15a2eb(0x1ab)]();},_0x1f44d7=function(_0x156f95,_0x3bc093){return 0x3e8*(_0x3bc093[0x0]-_0x156f95[0x0])+(_0x3bc093[0x1]-_0x156f95[0x1])/0xf4240;};else try{let {performance:_0x11278f}=require(_0x3e30a1(0x1e3));_0x4ad599=function(){var _0x52b5d6=_0x3e30a1;return _0x11278f[_0x52b5d6(0x1a4)]();};}catch{_0x4ad599=function(){return+new Date();};}}return{'elapsed':_0x1f44d7,'timeStamp':_0x4ad599,'now':()=>Date['now']()};}function J(_0x5547fe,_0x5722e6,_0x3af791){var _0x23fbf4=_0x29d596;if(_0x5547fe['_consoleNinjaAllowedToStart']!==void 0x0)return _0x5547fe[_0x23fbf4(0x16c)];let _0x4032c4=_0x5547fe['process']?.[_0x23fbf4(0x1bb)]?.[_0x23fbf4(0x1ee)]||_0x5547fe[_0x23fbf4(0x1e7)]?.['env']?.[_0x23fbf4(0x22f)]===_0x23fbf4(0x223);return _0x4032c4&&_0x3af791===_0x23fbf4(0x219)?_0x5547fe[_0x23fbf4(0x16c)]=!0x1:_0x5547fe[_0x23fbf4(0x16c)]=_0x4032c4||!_0x5722e6||_0x5547fe[_0x23fbf4(0x1d2)]?.['hostname']&&_0x5722e6[_0x23fbf4(0x1c7)](_0x5547fe['location'][_0x23fbf4(0x16f)]),_0x5547fe[_0x23fbf4(0x16c)];}function Y(_0x485d3a,_0x41457d,_0xd494a3,_0x24cc9f){var _0x48ff4f=_0x29d596;_0x485d3a=_0x485d3a,_0x41457d=_0x41457d,_0xd494a3=_0xd494a3,_0x24cc9f=_0x24cc9f;let _0x1562b9=W(_0x485d3a),_0x24f4c4=_0x1562b9['elapsed'],_0x2c6fd8=_0x1562b9['timeStamp'];class _0x1c4d28{constructor(){var _0x4d0fb8=_0x41c9;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4d0fb8(0x168)]=/^(0|[1-9][0-9]*)$/,this[_0x4d0fb8(0x1e8)]=/'([^\\\\']|\\\\')*'/,this[_0x4d0fb8(0x17c)]=_0x485d3a[_0x4d0fb8(0x206)],this[_0x4d0fb8(0x1fd)]=_0x485d3a[_0x4d0fb8(0x191)],this[_0x4d0fb8(0x159)]=Object['getOwnPropertyDescriptor'],this[_0x4d0fb8(0x1bf)]=Object[_0x4d0fb8(0x1d9)],this[_0x4d0fb8(0x1ef)]=_0x485d3a['Symbol'],this[_0x4d0fb8(0x22c)]=RegExp[_0x4d0fb8(0x180)][_0x4d0fb8(0x1be)],this['_dateToString']=Date[_0x4d0fb8(0x180)]['toString'];}['serialize'](_0x13b62a,_0x4d5683,_0x3dfc8b,_0x168655){var _0x1bf95e=_0x41c9,_0x23d4d3=this,_0x5d160e=_0x3dfc8b[_0x1bf95e(0x1d4)];function _0x2332b3(_0x1681c8,_0x5712e7,_0x3efc27){var _0x1f4d27=_0x1bf95e;_0x5712e7[_0x1f4d27(0x1f9)]=_0x1f4d27(0x19f),_0x5712e7[_0x1f4d27(0x228)]=_0x1681c8[_0x1f4d27(0x200)],_0x3098e6=_0x3efc27[_0x1f4d27(0x1ee)][_0x1f4d27(0x1fa)],_0x3efc27[_0x1f4d27(0x1ee)][_0x1f4d27(0x1fa)]=_0x5712e7,_0x23d4d3[_0x1f4d27(0x202)](_0x5712e7,_0x3efc27);}try{_0x3dfc8b[_0x1bf95e(0x238)]++,_0x3dfc8b[_0x1bf95e(0x1d4)]&&_0x3dfc8b[_0x1bf95e(0x220)]['push'](_0x4d5683);var _0x24eddd,_0x5308a3,_0x44aac8,_0x85dd49,_0x166071=[],_0x414521=[],_0x1e9f83,_0x3152e3=this[_0x1bf95e(0x1a8)](_0x4d5683),_0x4c7d2b=_0x3152e3===_0x1bf95e(0x230),_0x30cb6f=!0x1,_0x286220=_0x3152e3===_0x1bf95e(0x21d),_0x4c686e=this[_0x1bf95e(0x198)](_0x3152e3),_0x455570=this[_0x1bf95e(0x15a)](_0x3152e3),_0x4ed19b=_0x4c686e||_0x455570,_0x320c34={},_0x2f16ec=0x0,_0x509bd9=!0x1,_0x3098e6,_0x1b5489=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x3dfc8b['depth']){if(_0x4c7d2b){if(_0x5308a3=_0x4d5683[_0x1bf95e(0x1ba)],_0x5308a3>_0x3dfc8b[_0x1bf95e(0x218)]){for(_0x44aac8=0x0,_0x85dd49=_0x3dfc8b[_0x1bf95e(0x218)],_0x24eddd=_0x44aac8;_0x24eddd<_0x85dd49;_0x24eddd++)_0x414521[_0x1bf95e(0x1a3)](_0x23d4d3[_0x1bf95e(0x1b4)](_0x166071,_0x4d5683,_0x3152e3,_0x24eddd,_0x3dfc8b));_0x13b62a[_0x1bf95e(0x199)]=!0x0;}else{for(_0x44aac8=0x0,_0x85dd49=_0x5308a3,_0x24eddd=_0x44aac8;_0x24eddd<_0x85dd49;_0x24eddd++)_0x414521[_0x1bf95e(0x1a3)](_0x23d4d3[_0x1bf95e(0x1b4)](_0x166071,_0x4d5683,_0x3152e3,_0x24eddd,_0x3dfc8b));}_0x3dfc8b['autoExpandPropertyCount']+=_0x414521[_0x1bf95e(0x1ba)];}if(!(_0x3152e3==='null'||_0x3152e3==='undefined')&&!_0x4c686e&&_0x3152e3!==_0x1bf95e(0x17d)&&_0x3152e3!==_0x1bf95e(0x210)&&_0x3152e3!==_0x1bf95e(0x171)){var _0x34f97c=_0x168655[_0x1bf95e(0x1dd)]||_0x3dfc8b[_0x1bf95e(0x1dd)];if(this['_isSet'](_0x4d5683)?(_0x24eddd=0x0,_0x4d5683[_0x1bf95e(0x1ad)](function(_0x13307a){var _0x81593a=_0x1bf95e;if(_0x2f16ec++,_0x3dfc8b[_0x81593a(0x239)]++,_0x2f16ec>_0x34f97c){_0x509bd9=!0x0;return;}if(!_0x3dfc8b['isExpressionToEvaluate']&&_0x3dfc8b[_0x81593a(0x1d4)]&&_0x3dfc8b[_0x81593a(0x239)]>_0x3dfc8b[_0x81593a(0x19d)]){_0x509bd9=!0x0;return;}_0x414521[_0x81593a(0x1a3)](_0x23d4d3[_0x81593a(0x1b4)](_0x166071,_0x4d5683,_0x81593a(0x227),_0x24eddd++,_0x3dfc8b,function(_0x5d65a0){return function(){return _0x5d65a0;};}(_0x13307a)));})):this[_0x1bf95e(0x16e)](_0x4d5683)&&_0x4d5683[_0x1bf95e(0x1ad)](function(_0x29b919,_0x353483){var _0x156b1d=_0x1bf95e;if(_0x2f16ec++,_0x3dfc8b[_0x156b1d(0x239)]++,_0x2f16ec>_0x34f97c){_0x509bd9=!0x0;return;}if(!_0x3dfc8b[_0x156b1d(0x1de)]&&_0x3dfc8b[_0x156b1d(0x1d4)]&&_0x3dfc8b['autoExpandPropertyCount']>_0x3dfc8b[_0x156b1d(0x19d)]){_0x509bd9=!0x0;return;}var _0x593c9b=_0x353483['toString']();_0x593c9b[_0x156b1d(0x1ba)]>0x64&&(_0x593c9b=_0x593c9b[_0x156b1d(0x208)](0x0,0x64)+'...'),_0x414521[_0x156b1d(0x1a3)](_0x23d4d3['_addProperty'](_0x166071,_0x4d5683,'Map',_0x593c9b,_0x3dfc8b,function(_0x324f56){return function(){return _0x324f56;};}(_0x29b919)));}),!_0x30cb6f){try{for(_0x1e9f83 in _0x4d5683)if(!(_0x4c7d2b&&_0x1b5489[_0x1bf95e(0x155)](_0x1e9f83))&&!this[_0x1bf95e(0x179)](_0x4d5683,_0x1e9f83,_0x3dfc8b)){if(_0x2f16ec++,_0x3dfc8b['autoExpandPropertyCount']++,_0x2f16ec>_0x34f97c){_0x509bd9=!0x0;break;}if(!_0x3dfc8b['isExpressionToEvaluate']&&_0x3dfc8b[_0x1bf95e(0x1d4)]&&_0x3dfc8b['autoExpandPropertyCount']>_0x3dfc8b[_0x1bf95e(0x19d)]){_0x509bd9=!0x0;break;}_0x414521[_0x1bf95e(0x1a3)](_0x23d4d3[_0x1bf95e(0x1d1)](_0x166071,_0x320c34,_0x4d5683,_0x3152e3,_0x1e9f83,_0x3dfc8b));}}catch{}if(_0x320c34[_0x1bf95e(0x192)]=!0x0,_0x286220&&(_0x320c34['_p_name']=!0x0),!_0x509bd9){var _0x10955b=[][_0x1bf95e(0x211)](this['_getOwnPropertyNames'](_0x4d5683))[_0x1bf95e(0x211)](this[_0x1bf95e(0x1c6)](_0x4d5683));for(_0x24eddd=0x0,_0x5308a3=_0x10955b[_0x1bf95e(0x1ba)];_0x24eddd<_0x5308a3;_0x24eddd++)if(_0x1e9f83=_0x10955b[_0x24eddd],!(_0x4c7d2b&&_0x1b5489[_0x1bf95e(0x155)](_0x1e9f83[_0x1bf95e(0x1be)]()))&&!this[_0x1bf95e(0x179)](_0x4d5683,_0x1e9f83,_0x3dfc8b)&&!_0x320c34[_0x1bf95e(0x1aa)+_0x1e9f83['toString']()]){if(_0x2f16ec++,_0x3dfc8b[_0x1bf95e(0x239)]++,_0x2f16ec>_0x34f97c){_0x509bd9=!0x0;break;}if(!_0x3dfc8b[_0x1bf95e(0x1de)]&&_0x3dfc8b[_0x1bf95e(0x1d4)]&&_0x3dfc8b[_0x1bf95e(0x239)]>_0x3dfc8b[_0x1bf95e(0x19d)]){_0x509bd9=!0x0;break;}_0x414521['push'](_0x23d4d3[_0x1bf95e(0x1d1)](_0x166071,_0x320c34,_0x4d5683,_0x3152e3,_0x1e9f83,_0x3dfc8b));}}}}}if(_0x13b62a[_0x1bf95e(0x1f9)]=_0x3152e3,_0x4ed19b?(_0x13b62a[_0x1bf95e(0x1e1)]=_0x4d5683['valueOf'](),this[_0x1bf95e(0x1b7)](_0x3152e3,_0x13b62a,_0x3dfc8b,_0x168655)):_0x3152e3===_0x1bf95e(0x1a9)?_0x13b62a[_0x1bf95e(0x1e1)]=this[_0x1bf95e(0x1a2)][_0x1bf95e(0x18c)](_0x4d5683):_0x3152e3==='bigint'?_0x13b62a[_0x1bf95e(0x1e1)]=_0x4d5683['toString']():_0x3152e3==='RegExp'?_0x13b62a['value']=this[_0x1bf95e(0x22c)][_0x1bf95e(0x18c)](_0x4d5683):_0x3152e3===_0x1bf95e(0x1a0)&&this[_0x1bf95e(0x1ef)]?_0x13b62a['value']=this[_0x1bf95e(0x1ef)][_0x1bf95e(0x180)][_0x1bf95e(0x1be)][_0x1bf95e(0x18c)](_0x4d5683):!_0x3dfc8b['depth']&&!(_0x3152e3===_0x1bf95e(0x166)||_0x3152e3===_0x1bf95e(0x206))&&(delete _0x13b62a['value'],_0x13b62a[_0x1bf95e(0x23c)]=!0x0),_0x509bd9&&(_0x13b62a[_0x1bf95e(0x1ac)]=!0x0),_0x3098e6=_0x3dfc8b[_0x1bf95e(0x1ee)][_0x1bf95e(0x1fa)],_0x3dfc8b[_0x1bf95e(0x1ee)][_0x1bf95e(0x1fa)]=_0x13b62a,this[_0x1bf95e(0x202)](_0x13b62a,_0x3dfc8b),_0x414521['length']){for(_0x24eddd=0x0,_0x5308a3=_0x414521[_0x1bf95e(0x1ba)];_0x24eddd<_0x5308a3;_0x24eddd++)_0x414521[_0x24eddd](_0x24eddd);}_0x166071[_0x1bf95e(0x1ba)]&&(_0x13b62a[_0x1bf95e(0x1dd)]=_0x166071);}catch(_0x27b4e2){_0x2332b3(_0x27b4e2,_0x13b62a,_0x3dfc8b);}return this['_additionalMetadata'](_0x4d5683,_0x13b62a),this[_0x1bf95e(0x1d3)](_0x13b62a,_0x3dfc8b),_0x3dfc8b['node']['current']=_0x3098e6,_0x3dfc8b[_0x1bf95e(0x238)]--,_0x3dfc8b[_0x1bf95e(0x1d4)]=_0x5d160e,_0x3dfc8b[_0x1bf95e(0x1d4)]&&_0x3dfc8b[_0x1bf95e(0x220)][_0x1bf95e(0x1a1)](),_0x13b62a;}[_0x48ff4f(0x1c6)](_0x10eea0){var _0x4eab9d=_0x48ff4f;return Object[_0x4eab9d(0x18d)]?Object['getOwnPropertySymbols'](_0x10eea0):[];}['_isSet'](_0x260a15){var _0x4f691a=_0x48ff4f;return!!(_0x260a15&&_0x485d3a[_0x4f691a(0x227)]&&this[_0x4f691a(0x175)](_0x260a15)===_0x4f691a(0x21f)&&_0x260a15[_0x4f691a(0x1ad)]);}['_blacklistedProperty'](_0x465d08,_0x2d97cc,_0x53b970){var _0x1d3fdb=_0x48ff4f;return _0x53b970[_0x1d3fdb(0x1f3)]?typeof _0x465d08[_0x2d97cc]==_0x1d3fdb(0x21d):!0x1;}[_0x48ff4f(0x1a8)](_0x536247){var _0x2db17c=_0x48ff4f,_0x5b6d29='';return _0x5b6d29=typeof _0x536247,_0x5b6d29===_0x2db17c(0x194)?this[_0x2db17c(0x175)](_0x536247)===_0x2db17c(0x1ed)?_0x5b6d29=_0x2db17c(0x230):this[_0x2db17c(0x175)](_0x536247)===_0x2db17c(0x1c2)?_0x5b6d29=_0x2db17c(0x1a9):this['_objectToString'](_0x536247)===_0x2db17c(0x234)?_0x5b6d29='bigint':_0x536247===null?_0x5b6d29=_0x2db17c(0x166):_0x536247[_0x2db17c(0x1b0)]&&(_0x5b6d29=_0x536247['constructor'][_0x2db17c(0x195)]||_0x5b6d29):_0x5b6d29==='undefined'&&this[_0x2db17c(0x1fd)]&&_0x536247 instanceof this['_HTMLAllCollection']&&(_0x5b6d29=_0x2db17c(0x191)),_0x5b6d29;}[_0x48ff4f(0x175)](_0x4d4ac6){var _0x22ff82=_0x48ff4f;return Object[_0x22ff82(0x180)][_0x22ff82(0x1be)][_0x22ff82(0x18c)](_0x4d4ac6);}[_0x48ff4f(0x198)](_0x2be06d){var _0x1e2770=_0x48ff4f;return _0x2be06d===_0x1e2770(0x23e)||_0x2be06d===_0x1e2770(0x1f7)||_0x2be06d===_0x1e2770(0x174);}['_isPrimitiveWrapperType'](_0x1f4c14){var _0x364e7b=_0x48ff4f;return _0x1f4c14===_0x364e7b(0x20c)||_0x1f4c14==='String'||_0x1f4c14===_0x364e7b(0x213);}[_0x48ff4f(0x1b4)](_0xadb2b7,_0x3a7a5f,_0x2a6ce6,_0x3dd27e,_0x1c0620,_0x1b8d80){var _0x40d5db=this;return function(_0x577411){var _0x583df3=_0x41c9,_0x1b5ade=_0x1c0620[_0x583df3(0x1ee)][_0x583df3(0x1fa)],_0x3923d3=_0x1c0620[_0x583df3(0x1ee)][_0x583df3(0x23d)],_0x78a881=_0x1c0620[_0x583df3(0x1ee)][_0x583df3(0x161)];_0x1c0620[_0x583df3(0x1ee)][_0x583df3(0x161)]=_0x1b5ade,_0x1c0620['node'][_0x583df3(0x23d)]=typeof _0x3dd27e==_0x583df3(0x174)?_0x3dd27e:_0x577411,_0xadb2b7[_0x583df3(0x1a3)](_0x40d5db['_property'](_0x3a7a5f,_0x2a6ce6,_0x3dd27e,_0x1c0620,_0x1b8d80)),_0x1c0620[_0x583df3(0x1ee)][_0x583df3(0x161)]=_0x78a881,_0x1c0620[_0x583df3(0x1ee)][_0x583df3(0x23d)]=_0x3923d3;};}['_addObjectProperty'](_0x2ea417,_0x4c4ee7,_0x1b6908,_0x5211ac,_0x553ba6,_0x5aa1ad,_0x15c729){var _0x17b7f9=_0x48ff4f,_0x1d8b3e=this;return _0x4c4ee7[_0x17b7f9(0x1aa)+_0x553ba6[_0x17b7f9(0x1be)]()]=!0x0,function(_0x2e3895){var _0x14ab35=_0x17b7f9,_0x58c4d7=_0x5aa1ad['node'][_0x14ab35(0x1fa)],_0x22f18a=_0x5aa1ad[_0x14ab35(0x1ee)][_0x14ab35(0x23d)],_0x2f828f=_0x5aa1ad['node'][_0x14ab35(0x161)];_0x5aa1ad[_0x14ab35(0x1ee)][_0x14ab35(0x161)]=_0x58c4d7,_0x5aa1ad[_0x14ab35(0x1ee)][_0x14ab35(0x23d)]=_0x2e3895,_0x2ea417[_0x14ab35(0x1a3)](_0x1d8b3e['_property'](_0x1b6908,_0x5211ac,_0x553ba6,_0x5aa1ad,_0x15c729)),_0x5aa1ad['node']['parent']=_0x2f828f,_0x5aa1ad[_0x14ab35(0x1ee)][_0x14ab35(0x23d)]=_0x22f18a;};}[_0x48ff4f(0x23b)](_0x36de7a,_0x24420e,_0x2af8e5,_0x48fc0f,_0x4bbcd5){var _0x569f62=_0x48ff4f,_0x4ae7fd=this;_0x4bbcd5||(_0x4bbcd5=function(_0x1513ce,_0x5cd0ed){return _0x1513ce[_0x5cd0ed];});var _0x3a66fe=_0x2af8e5[_0x569f62(0x1be)](),_0x22c5d2=_0x48fc0f[_0x569f62(0x1e0)]||{},_0x5110f5=_0x48fc0f['depth'],_0x2bf8a8=_0x48fc0f['isExpressionToEvaluate'];try{var _0x5b33c7=this['_isMap'](_0x36de7a),_0x39041e=_0x3a66fe;_0x5b33c7&&_0x39041e[0x0]==='\\x27'&&(_0x39041e=_0x39041e[_0x569f62(0x1e6)](0x1,_0x39041e[_0x569f62(0x1ba)]-0x2));var _0x45afa1=_0x48fc0f['expressionsToEvaluate']=_0x22c5d2[_0x569f62(0x1aa)+_0x39041e];_0x45afa1&&(_0x48fc0f[_0x569f62(0x17b)]=_0x48fc0f['depth']+0x1),_0x48fc0f[_0x569f62(0x1de)]=!!_0x45afa1;var _0x5c7c55=typeof _0x2af8e5==_0x569f62(0x1a0),_0x349f90={'name':_0x5c7c55||_0x5b33c7?_0x3a66fe:this[_0x569f62(0x1ea)](_0x3a66fe)};if(_0x5c7c55&&(_0x349f90[_0x569f62(0x1a0)]=!0x0),!(_0x24420e===_0x569f62(0x230)||_0x24420e===_0x569f62(0x15e))){var _0x425f6d=this[_0x569f62(0x159)](_0x36de7a,_0x2af8e5);if(_0x425f6d&&(_0x425f6d[_0x569f62(0x1d8)]&&(_0x349f90[_0x569f62(0x1f8)]=!0x0),_0x425f6d[_0x569f62(0x1fb)]&&!_0x45afa1&&!_0x48fc0f[_0x569f62(0x1b9)]))return _0x349f90[_0x569f62(0x1a7)]=!0x0,this[_0x569f62(0x172)](_0x349f90,_0x48fc0f),_0x349f90;}var _0x53ae07;try{_0x53ae07=_0x4bbcd5(_0x36de7a,_0x2af8e5);}catch(_0x18239c){return _0x349f90={'name':_0x3a66fe,'type':'unknown','error':_0x18239c['message']},this[_0x569f62(0x172)](_0x349f90,_0x48fc0f),_0x349f90;}var _0x42d6df=this[_0x569f62(0x1a8)](_0x53ae07),_0x370a61=this[_0x569f62(0x198)](_0x42d6df);if(_0x349f90['type']=_0x42d6df,_0x370a61)this[_0x569f62(0x172)](_0x349f90,_0x48fc0f,_0x53ae07,function(){var _0x525e87=_0x569f62;_0x349f90[_0x525e87(0x1e1)]=_0x53ae07[_0x525e87(0x224)](),!_0x45afa1&&_0x4ae7fd[_0x525e87(0x1b7)](_0x42d6df,_0x349f90,_0x48fc0f,{});});else{var _0x34dd05=_0x48fc0f['autoExpand']&&_0x48fc0f[_0x569f62(0x238)]<_0x48fc0f['autoExpandMaxDepth']&&_0x48fc0f[_0x569f62(0x220)]['indexOf'](_0x53ae07)<0x0&&_0x42d6df!==_0x569f62(0x21d)&&_0x48fc0f[_0x569f62(0x239)]<_0x48fc0f[_0x569f62(0x19d)];_0x34dd05||_0x48fc0f[_0x569f62(0x238)]<_0x5110f5||_0x45afa1?(this[_0x569f62(0x181)](_0x349f90,_0x53ae07,_0x48fc0f,_0x45afa1||{}),this[_0x569f62(0x19b)](_0x53ae07,_0x349f90)):this[_0x569f62(0x172)](_0x349f90,_0x48fc0f,_0x53ae07,function(){var _0x5e43ef=_0x569f62;_0x42d6df===_0x5e43ef(0x166)||_0x42d6df===_0x5e43ef(0x206)||(delete _0x349f90['value'],_0x349f90['capped']=!0x0);});}return _0x349f90;}finally{_0x48fc0f[_0x569f62(0x1e0)]=_0x22c5d2,_0x48fc0f[_0x569f62(0x17b)]=_0x5110f5,_0x48fc0f[_0x569f62(0x1de)]=_0x2bf8a8;}}[_0x48ff4f(0x1b7)](_0x1b62f1,_0x18eb71,_0x37948f,_0x1ab5ee){var _0x1d8c06=_0x48ff4f,_0x48776d=_0x1ab5ee['strLength']||_0x37948f[_0x1d8c06(0x1f4)];if((_0x1b62f1===_0x1d8c06(0x1f7)||_0x1b62f1===_0x1d8c06(0x17d))&&_0x18eb71[_0x1d8c06(0x1e1)]){let _0x5d8f6a=_0x18eb71['value'][_0x1d8c06(0x1ba)];_0x37948f[_0x1d8c06(0x1ec)]+=_0x5d8f6a,_0x37948f[_0x1d8c06(0x1ec)]>_0x37948f[_0x1d8c06(0x1ca)]?(_0x18eb71[_0x1d8c06(0x23c)]='',delete _0x18eb71['value']):_0x5d8f6a>_0x48776d&&(_0x18eb71[_0x1d8c06(0x23c)]=_0x18eb71['value']['substr'](0x0,_0x48776d),delete _0x18eb71[_0x1d8c06(0x1e1)]);}}[_0x48ff4f(0x16e)](_0x5e4ac3){var _0x98b109=_0x48ff4f;return!!(_0x5e4ac3&&_0x485d3a[_0x98b109(0x165)]&&this['_objectToString'](_0x5e4ac3)==='[object\\x20Map]'&&_0x5e4ac3[_0x98b109(0x1ad)]);}['_propertyName'](_0x5e0b82){var _0x27fcf5=_0x48ff4f;if(_0x5e0b82[_0x27fcf5(0x1d0)](/^\\d+$/))return _0x5e0b82;var _0x12f5b4;try{_0x12f5b4=JSON['stringify'](''+_0x5e0b82);}catch{_0x12f5b4='\\x22'+this[_0x27fcf5(0x175)](_0x5e0b82)+'\\x22';}return _0x12f5b4[_0x27fcf5(0x1d0)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x12f5b4=_0x12f5b4[_0x27fcf5(0x1e6)](0x1,_0x12f5b4[_0x27fcf5(0x1ba)]-0x2):_0x12f5b4=_0x12f5b4[_0x27fcf5(0x19c)](/'/g,'\\x5c\\x27')[_0x27fcf5(0x19c)](/\\\\\"/g,'\\x22')[_0x27fcf5(0x19c)](/(^\"|\"$)/g,'\\x27'),_0x12f5b4;}[_0x48ff4f(0x172)](_0x24d617,_0x421388,_0x10dac3,_0x361040){var _0x418a7c=_0x48ff4f;this[_0x418a7c(0x202)](_0x24d617,_0x421388),_0x361040&&_0x361040(),this[_0x418a7c(0x19b)](_0x10dac3,_0x24d617),this['_treeNodePropertiesAfterFullValue'](_0x24d617,_0x421388);}['_treeNodePropertiesBeforeFullValue'](_0x2e200f,_0x4ccb5c){var _0x56f8e9=_0x48ff4f;this[_0x56f8e9(0x204)](_0x2e200f,_0x4ccb5c),this[_0x56f8e9(0x20b)](_0x2e200f,_0x4ccb5c),this[_0x56f8e9(0x201)](_0x2e200f,_0x4ccb5c),this[_0x56f8e9(0x196)](_0x2e200f,_0x4ccb5c);}['_setNodeId'](_0x509052,_0x1462a2){}['_setNodeQueryPath'](_0x3e506b,_0x11862b){}[_0x48ff4f(0x1ff)](_0x597c28,_0x19faa4){}[_0x48ff4f(0x153)](_0x4d1ee1){var _0x455dac=_0x48ff4f;return _0x4d1ee1===this[_0x455dac(0x17c)];}['_treeNodePropertiesAfterFullValue'](_0x2e5f4e,_0x5f0bc6){var _0x385bb0=_0x48ff4f;this[_0x385bb0(0x1ff)](_0x2e5f4e,_0x5f0bc6),this[_0x385bb0(0x158)](_0x2e5f4e),_0x5f0bc6[_0x385bb0(0x1d6)]&&this[_0x385bb0(0x1b3)](_0x2e5f4e),this[_0x385bb0(0x1da)](_0x2e5f4e,_0x5f0bc6),this[_0x385bb0(0x176)](_0x2e5f4e,_0x5f0bc6),this[_0x385bb0(0x207)](_0x2e5f4e);}[_0x48ff4f(0x19b)](_0x2f76d7,_0x2329b6){var _0x4675ac=_0x48ff4f;let _0x5f4f2d;try{_0x485d3a['console']&&(_0x5f4f2d=_0x485d3a['console'][_0x4675ac(0x228)],_0x485d3a[_0x4675ac(0x197)][_0x4675ac(0x228)]=function(){}),_0x2f76d7&&typeof _0x2f76d7[_0x4675ac(0x1ba)]=='number'&&(_0x2329b6[_0x4675ac(0x1ba)]=_0x2f76d7[_0x4675ac(0x1ba)]);}catch{}finally{_0x5f4f2d&&(_0x485d3a[_0x4675ac(0x197)][_0x4675ac(0x228)]=_0x5f4f2d);}if(_0x2329b6[_0x4675ac(0x1f9)]===_0x4675ac(0x174)||_0x2329b6[_0x4675ac(0x1f9)]===_0x4675ac(0x213)){if(isNaN(_0x2329b6[_0x4675ac(0x1e1)]))_0x2329b6[_0x4675ac(0x15c)]=!0x0,delete _0x2329b6[_0x4675ac(0x1e1)];else switch(_0x2329b6[_0x4675ac(0x1e1)]){case Number[_0x4675ac(0x154)]:_0x2329b6[_0x4675ac(0x1cf)]=!0x0,delete _0x2329b6[_0x4675ac(0x1e1)];break;case Number[_0x4675ac(0x209)]:_0x2329b6['negativeInfinity']=!0x0,delete _0x2329b6[_0x4675ac(0x1e1)];break;case 0x0:this[_0x4675ac(0x1e5)](_0x2329b6[_0x4675ac(0x1e1)])&&(_0x2329b6[_0x4675ac(0x1b5)]=!0x0);break;}}else _0x2329b6[_0x4675ac(0x1f9)]===_0x4675ac(0x21d)&&typeof _0x2f76d7[_0x4675ac(0x195)]==_0x4675ac(0x1f7)&&_0x2f76d7[_0x4675ac(0x195)]&&_0x2329b6[_0x4675ac(0x195)]&&_0x2f76d7[_0x4675ac(0x195)]!==_0x2329b6[_0x4675ac(0x195)]&&(_0x2329b6['funcName']=_0x2f76d7[_0x4675ac(0x195)]);}['_isNegativeZero'](_0x348223){var _0x4a2386=_0x48ff4f;return 0x1/_0x348223===Number[_0x4a2386(0x209)];}['_sortProps'](_0x107eaa){var _0x4b37cc=_0x48ff4f;!_0x107eaa[_0x4b37cc(0x1dd)]||!_0x107eaa[_0x4b37cc(0x1dd)][_0x4b37cc(0x1ba)]||_0x107eaa[_0x4b37cc(0x1f9)]===_0x4b37cc(0x230)||_0x107eaa[_0x4b37cc(0x1f9)]===_0x4b37cc(0x165)||_0x107eaa[_0x4b37cc(0x1f9)]===_0x4b37cc(0x227)||_0x107eaa['props'][_0x4b37cc(0x1fe)](function(_0x1d8663,_0x45ed23){var _0x51a4f6=_0x4b37cc,_0x38f259=_0x1d8663[_0x51a4f6(0x195)][_0x51a4f6(0x1f0)](),_0x53ab4f=_0x45ed23[_0x51a4f6(0x195)]['toLowerCase']();return _0x38f259<_0x53ab4f?-0x1:_0x38f259>_0x53ab4f?0x1:0x0;});}['_addFunctionsNode'](_0x15e1ed,_0x5c0328){var _0x5b00e9=_0x48ff4f;if(!(_0x5c0328[_0x5b00e9(0x1f3)]||!_0x15e1ed[_0x5b00e9(0x1dd)]||!_0x15e1ed[_0x5b00e9(0x1dd)][_0x5b00e9(0x1ba)])){for(var _0x4006a5=[],_0x190517=[],_0x5daa13=0x0,_0x5c728b=_0x15e1ed[_0x5b00e9(0x1dd)]['length'];_0x5daa13<_0x5c728b;_0x5daa13++){var _0x176aa0=_0x15e1ed[_0x5b00e9(0x1dd)][_0x5daa13];_0x176aa0[_0x5b00e9(0x1f9)]===_0x5b00e9(0x21d)?_0x4006a5[_0x5b00e9(0x1a3)](_0x176aa0):_0x190517[_0x5b00e9(0x1a3)](_0x176aa0);}if(!(!_0x190517[_0x5b00e9(0x1ba)]||_0x4006a5[_0x5b00e9(0x1ba)]<=0x1)){_0x15e1ed[_0x5b00e9(0x1dd)]=_0x190517;var _0x4a09da={'functionsNode':!0x0,'props':_0x4006a5};this[_0x5b00e9(0x204)](_0x4a09da,_0x5c0328),this[_0x5b00e9(0x1ff)](_0x4a09da,_0x5c0328),this[_0x5b00e9(0x158)](_0x4a09da),this[_0x5b00e9(0x196)](_0x4a09da,_0x5c0328),_0x4a09da['id']+='\\x20f',_0x15e1ed[_0x5b00e9(0x1dd)][_0x5b00e9(0x18b)](_0x4a09da);}}}[_0x48ff4f(0x176)](_0x27d312,_0x145371){}[_0x48ff4f(0x158)](_0x48476c){}[_0x48ff4f(0x236)](_0x15ae6e){var _0x55920d=_0x48ff4f;return Array[_0x55920d(0x18e)](_0x15ae6e)||typeof _0x15ae6e==_0x55920d(0x194)&&this[_0x55920d(0x175)](_0x15ae6e)==='[object\\x20Array]';}[_0x48ff4f(0x196)](_0x9e8dd8,_0x21bf31){}[_0x48ff4f(0x207)](_0x4d86dc){var _0x1d3523=_0x48ff4f;delete _0x4d86dc[_0x1d3523(0x229)],delete _0x4d86dc[_0x1d3523(0x1cb)],delete _0x4d86dc[_0x1d3523(0x16b)];}[_0x48ff4f(0x201)](_0x5011ed,_0x37b543){}}let _0x15ccfe=new _0x1c4d28(),_0x508dcc={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x12ad0e={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x760607(_0x21857d,_0x1aae83,_0x26a540,_0x377585,_0x5643b8,_0x3116e5){var _0x70f620=_0x48ff4f;let _0x1b6617,_0x402b88;try{_0x402b88=_0x2c6fd8(),_0x1b6617=_0xd494a3[_0x1aae83],!_0x1b6617||_0x402b88-_0x1b6617['ts']>0x1f4&&_0x1b6617[_0x70f620(0x160)]&&_0x1b6617[_0x70f620(0x1d7)]/_0x1b6617['count']<0x64?(_0xd494a3[_0x1aae83]=_0x1b6617={'count':0x0,'time':0x0,'ts':_0x402b88},_0xd494a3[_0x70f620(0x193)]={}):_0x402b88-_0xd494a3[_0x70f620(0x193)]['ts']>0x32&&_0xd494a3['hits'][_0x70f620(0x160)]&&_0xd494a3[_0x70f620(0x193)]['time']/_0xd494a3['hits'][_0x70f620(0x160)]<0x64&&(_0xd494a3[_0x70f620(0x193)]={});let _0x2adcf4=[],_0x3b0aa3=_0x1b6617[_0x70f620(0x23a)]||_0xd494a3[_0x70f620(0x193)][_0x70f620(0x23a)]?_0x12ad0e:_0x508dcc,_0x497498=_0x1b30c7=>{var _0x2b7bb5=_0x70f620;let _0x360cdc={};return _0x360cdc[_0x2b7bb5(0x1dd)]=_0x1b30c7[_0x2b7bb5(0x1dd)],_0x360cdc[_0x2b7bb5(0x218)]=_0x1b30c7[_0x2b7bb5(0x218)],_0x360cdc[_0x2b7bb5(0x1f4)]=_0x1b30c7[_0x2b7bb5(0x1f4)],_0x360cdc['totalStrLength']=_0x1b30c7['totalStrLength'],_0x360cdc[_0x2b7bb5(0x19d)]=_0x1b30c7[_0x2b7bb5(0x19d)],_0x360cdc[_0x2b7bb5(0x21c)]=_0x1b30c7['autoExpandMaxDepth'],_0x360cdc[_0x2b7bb5(0x1d6)]=!0x1,_0x360cdc[_0x2b7bb5(0x1f3)]=!_0x41457d,_0x360cdc[_0x2b7bb5(0x17b)]=0x1,_0x360cdc['level']=0x0,_0x360cdc[_0x2b7bb5(0x18a)]=_0x2b7bb5(0x1c4),_0x360cdc['rootExpression']=_0x2b7bb5(0x20a),_0x360cdc[_0x2b7bb5(0x1d4)]=!0x0,_0x360cdc['autoExpandPreviousObjects']=[],_0x360cdc[_0x2b7bb5(0x239)]=0x0,_0x360cdc[_0x2b7bb5(0x1b9)]=!0x0,_0x360cdc[_0x2b7bb5(0x1ec)]=0x0,_0x360cdc[_0x2b7bb5(0x1ee)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x360cdc;};for(var _0x10b521=0x0;_0x10b521<_0x5643b8[_0x70f620(0x1ba)];_0x10b521++)_0x2adcf4[_0x70f620(0x1a3)](_0x15ccfe[_0x70f620(0x181)]({'timeNode':_0x21857d===_0x70f620(0x1d7)||void 0x0},_0x5643b8[_0x10b521],_0x497498(_0x3b0aa3),{}));if(_0x21857d===_0x70f620(0x15d)){let _0x35bfd9=Error[_0x70f620(0x216)];try{Error[_0x70f620(0x216)]=0x1/0x0,_0x2adcf4[_0x70f620(0x1a3)](_0x15ccfe[_0x70f620(0x181)]({'stackNode':!0x0},new Error()[_0x70f620(0x15f)],_0x497498(_0x3b0aa3),{'strLength':0x1/0x0}));}finally{Error[_0x70f620(0x216)]=_0x35bfd9;}}return{'method':_0x70f620(0x1f1),'version':_0x24cc9f,'args':[{'ts':_0x26a540,'session':_0x377585,'args':_0x2adcf4,'id':_0x1aae83,'context':_0x3116e5}]};}catch(_0x4ce412){return{'method':_0x70f620(0x1f1),'version':_0x24cc9f,'args':[{'ts':_0x26a540,'session':_0x377585,'args':[{'type':'unknown','error':_0x4ce412&&_0x4ce412[_0x70f620(0x200)]}],'id':_0x1aae83,'context':_0x3116e5}]};}finally{try{if(_0x1b6617&&_0x402b88){let _0x26f621=_0x2c6fd8();_0x1b6617[_0x70f620(0x160)]++,_0x1b6617[_0x70f620(0x1d7)]+=_0x24f4c4(_0x402b88,_0x26f621),_0x1b6617['ts']=_0x26f621,_0xd494a3['hits'][_0x70f620(0x160)]++,_0xd494a3['hits'][_0x70f620(0x1d7)]+=_0x24f4c4(_0x402b88,_0x26f621),_0xd494a3[_0x70f620(0x193)]['ts']=_0x26f621,(_0x1b6617['count']>0x32||_0x1b6617['time']>0x64)&&(_0x1b6617['reduceLimits']=!0x0),(_0xd494a3[_0x70f620(0x193)]['count']>0x3e8||_0xd494a3[_0x70f620(0x193)][_0x70f620(0x1d7)]>0x12c)&&(_0xd494a3[_0x70f620(0x193)][_0x70f620(0x23a)]=!0x0);}}catch{}}}return _0x760607;}((_0x31d1f9,_0x3eaab5,_0x444712,_0x272bc9,_0x70920a,_0x3c5415,_0x283e17,_0x2d54aa,_0x2d84f5,_0x1dbabb)=>{var _0x2c4389=_0x29d596;if(_0x31d1f9['_console_ninja'])return _0x31d1f9[_0x2c4389(0x185)];if(!J(_0x31d1f9,_0x2d54aa,_0x70920a))return _0x31d1f9['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x31d1f9[_0x2c4389(0x185)];let _0x51c622=W(_0x31d1f9),_0x167754=_0x51c622['elapsed'],_0x2cf357=_0x51c622[_0x2c4389(0x188)],_0xcb3a8d=_0x51c622[_0x2c4389(0x1a4)],_0x1539b2={'hits':{},'ts':{}},_0x39f2f9=Y(_0x31d1f9,_0x2d84f5,_0x1539b2,_0x3c5415),_0x120124=_0x55aeaf=>{_0x1539b2['ts'][_0x55aeaf]=_0x2cf357();},_0x16e23c=(_0x367f7d,_0x269e20)=>{var _0x2332bf=_0x2c4389;let _0x168bdf=_0x1539b2['ts'][_0x269e20];if(delete _0x1539b2['ts'][_0x269e20],_0x168bdf){let _0x1c909c=_0x167754(_0x168bdf,_0x2cf357());_0x59609f(_0x39f2f9(_0x2332bf(0x1d7),_0x367f7d,_0xcb3a8d(),_0x1de824,[_0x1c909c],_0x269e20));}},_0x402151=_0x35adf8=>_0x2c5388=>{try{_0x120124(_0x2c5388),_0x35adf8(_0x2c5388);}finally{_0x31d1f9['console']['time']=_0x35adf8;}},_0xdf3735=_0x3573b3=>_0x314af2=>{var _0x237122=_0x2c4389;try{let [_0x31a706,_0x3cbd8b]=_0x314af2['split'](_0x237122(0x214));_0x16e23c(_0x3cbd8b,_0x31a706),_0x3573b3(_0x31a706);}finally{_0x31d1f9[_0x237122(0x197)][_0x237122(0x1b2)]=_0x3573b3;}};_0x31d1f9['_console_ninja']={'consoleLog':(_0x4237b8,_0x25f747)=>{var _0x2c08a9=_0x2c4389;_0x31d1f9[_0x2c08a9(0x197)][_0x2c08a9(0x1f1)][_0x2c08a9(0x195)]!==_0x2c08a9(0x17f)&&_0x59609f(_0x39f2f9(_0x2c08a9(0x1f1),_0x4237b8,_0xcb3a8d(),_0x1de824,_0x25f747));},'consoleTrace':(_0x274fcb,_0x497323)=>{var _0x98cc6e=_0x2c4389;_0x31d1f9[_0x98cc6e(0x197)]['log'][_0x98cc6e(0x195)]!=='disabledTrace'&&_0x59609f(_0x39f2f9(_0x98cc6e(0x15d),_0x274fcb,_0xcb3a8d(),_0x1de824,_0x497323));},'consoleTime':()=>{var _0xcd819f=_0x2c4389;_0x31d1f9[_0xcd819f(0x197)][_0xcd819f(0x1d7)]=_0x402151(_0x31d1f9[_0xcd819f(0x197)][_0xcd819f(0x1d7)]);},'consoleTimeEnd':()=>{var _0x3aa5d7=_0x2c4389;_0x31d1f9[_0x3aa5d7(0x197)]['timeEnd']=_0xdf3735(_0x31d1f9[_0x3aa5d7(0x197)][_0x3aa5d7(0x1b2)]);},'autoLog':(_0x32cf54,_0x375594)=>{var _0x200bc7=_0x2c4389;_0x59609f(_0x39f2f9(_0x200bc7(0x1f1),_0x375594,_0xcb3a8d(),_0x1de824,[_0x32cf54]));},'autoLogMany':(_0x411532,_0x3ab08f)=>{_0x59609f(_0x39f2f9('log',_0x411532,_0xcb3a8d(),_0x1de824,_0x3ab08f));},'autoTrace':(_0x5660b4,_0x2fb72d)=>{var _0x480f5b=_0x2c4389;_0x59609f(_0x39f2f9(_0x480f5b(0x15d),_0x2fb72d,_0xcb3a8d(),_0x1de824,[_0x5660b4]));},'autoTraceMany':(_0xdae23d,_0x186ac9)=>{var _0x558d42=_0x2c4389;_0x59609f(_0x39f2f9(_0x558d42(0x15d),_0xdae23d,_0xcb3a8d(),_0x1de824,_0x186ac9));},'autoTime':(_0x3e7e8e,_0x12e99a,_0x5a356b)=>{_0x120124(_0x5a356b);},'autoTimeEnd':(_0xd5e270,_0xbbc465,_0xabdad3)=>{_0x16e23c(_0xbbc465,_0xabdad3);},'coverage':_0x35e45c=>{var _0x363ed1=_0x2c4389;_0x59609f({'method':_0x363ed1(0x1c3),'version':_0x3c5415,'args':[{'id':_0x35e45c}]});}};let _0x59609f=b(_0x31d1f9,_0x3eaab5,_0x444712,_0x272bc9,_0x70920a,_0x1dbabb),_0x1de824=_0x31d1f9[_0x2c4389(0x21e)];return _0x31d1f9[_0x2c4389(0x185)];})(globalThis,_0x29d596(0x1bc),_0x29d596(0x169),_0x29d596(0x217),_0x29d596(0x21a),_0x29d596(0x189),_0x29d596(0x18f),[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Damilare\",\"169.254.80.80\",\"192.168.0.101\",\"172.23.192.1\"],_0x29d596(0x237),_0x29d596(0x1ce));");
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
  weddingDay: 'Sunday',
  weddingTime: '12.00 - 15.00',
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
    name: 'BEVENT CENTER',
    addressLine1: 'No 111 obafemi awolowo way ikeja Lagos, Nigeria',
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

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9pMThuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXNvbHZlUGF0aC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpMThuLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXJjb2RlLnJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hZGQtdG8tY2FsZW5kYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dlZXRhbGVydDJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiJdLCJuYW1lcyI6WyJ0cmFuc2xhdGVDb25maWciLCJhcHBDb25maWciLCJsb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY29uZmlnTGFuZyIsImxhbmciLCJ1bmRlZmluZWQiLCJFcnJvciIsIl9vYmplY3RTcHJlYWQiLCJTaG93SW52aXRlIiwiY3VycmVudFVybCIsImd1ZXN0TGlzdExhc3RVcGRhdGVkQXQiLCJndWVzdCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImxvZ28iLCJvZ1RhZ3MiLCJjb3VwbGVJbmZvIiwidmVudWUiLCJ3ZWRkaW5nRGF5Iiwid2VkZGluZ0RhdGUiLCJ3ZWRkaW5nVGltZSIsImNhbGVuZGFySW5mbyIsImJyaWRlTmFtZSIsImdyb29tTmFtZSIsImhhc2h0YWciLCJjb3VwbGVOYW1lRm9ybWF0IiwiY291cGxlTmFtZVN0ciIsImNvdXBsZU5hbWUiLCJfX2pzeCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInZlbnVlQnJpZWYiLCJuYW1lIiwiY2l0eSIsImNvdW50cnkiLCJ3ZWRkaW5nRGF0ZUJyaWVmIiwiZXZlbnRUaXRsZSIsImV2ZW50RGVzY3JpcHRpb24iLCJjYWxlbmRhckV2ZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwic3RhcnRUaW1lIiwidGltZVN0YXJ0SVNPIiwiZW5kVGltZSIsInRpbWVFbmRJU08iLCJzZXROYW1lIiwidXNlU3RhdGUiLCJhdHRlbmRpbmciLCJzZXRBdHRlbmRpbmciLCJlbWFpbCIsInNldEVtYWlsIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicHJveHlVcmwiLCJzY3JpcHRVcmwiLCJodHRwU3RhdHVzIiwic3RhdHVzQ29kZSIsIlN3YWwiLCJmaXJlIiwiYnVpbGRDb3JzRnJlZVVybCIsInRhcmdldCIsImNvcnNGcmVlVXJsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJvb19vbyIsImRhdGEiLCJ0ZXh0Iiwic3RhdHVzIiwiZXJyb3IiLCJjbGFzc05hbWUiLCJfSlNYU3R5bGUiLCJpZCIsIkhlYWQiLCJfZXh0ZW5kcyIsImd1ZXN0TmFtZSIsInVybCIsImRhdGUiLCJtb2RpZmllZFRpbWUiLCJyZXNvbHZlUGF0aCIsImF1dGhvciIsInN0eWxlIiwib3BhY2l0eSIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJtYXhIZWlnaHQiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJzcmMiLCJoZWFkZXJMb2dvIiwiYWx0IiwiYW5pbWF0aW9uRGVsYXkiLCJ6SW5kZXgiLCJ2aXNpYmlsaXR5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25OYW1lIiwicGFkZGluZ0JvdHRvbSIsIkFkZFRvQ2FsZW5kYXIiLCJldmVudCIsImJ1dHRvbkxhYmVsIiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImhyZWYiLCJtYXBVcmwiLCJib3JkZXJSYWRpdXMiLCJtYXhXaWR0aCIsIm92ZXJmbG93WCIsInRleHRPdmVyZmxvdyIsImJveFNoYWRvdyIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImNvbG9yIiwic3RhcnRzV2l0aCIsInNob3dRckNvZGUiLCJtYXJnaW5Cb3R0b20iLCJRUkNvZGUiLCJ2YWx1ZSIsImd1ZXN0SWQiLCJib3JkZXJCb3R0b20iLCJhZGRyZXNzTGluZTEiLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJ0eXBlIiwib25DaGFuZ2UiLCJmb250U3R5bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImxvY2FsZVBhcmFtcyIsInF1ZXJ5IiwiZW1wdHlHdWVzdFBhcmFtcyIsImdyZWV0aW5nIiwicmVxIiwidSIsImd1ZXN0RGF0YSIsImd1ZXN0TGlzdCIsIm1ldGEiLCJsYXN0VXBkYXRlZEF0IiwiZmlsdGVyIiwib29fY20iLCJldmFsIiwiaSIsInYiLCJjb25zb2xlTG9nIiwib29fdHIiLCJjb25zb2xlVHJhY2UiLCJvb190cyIsImNvbnNvbGVUaW1lIiwib29fdGUiLCJjb25zb2xlVGltZUVuZCIsInNpdGVOYW1lIiwicHVibGlzaGVkVGltZSIsInByb3BlcnR5IiwiY29udGVudCIsInJlbCIsImJhc2VDb25maWciLCJzaG93QnVpbHRXaXRoSW5mbyIsImZvb3RlckxvZ28iLCJmb290ZXJMb2dvVHlwZSIsImFkZHJlc3NMaW5lMiIsInN1cHBvcnRlZExhbmd1YWdlcyIsImNvZGUiLCJsYWJlbCIsInRyYW5zbGF0aW9ucyIsImVuIiwiSTE4biIsImZvckVhY2giLCJsYW5ndWFnZU9wdGlvbnMiLCJtYXAiLCJzZXRMb2NhbGUiLCJwYXJhbXMiLCJUcmFucyIsInByb3BzIiwiaTE4bktleSIsImZhbGxiYWNrSG9zdCIsInBhdGgiLCJwcm90b2NvbCIsImhvc3QiLCJ3aW5kb3ciLCJzY2hlbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZrRDtBQUNoQjtBQUNUO0FBRWQ7QUFDTztBQUNGO0FBQ3NCO0FBQ3RCO0FBQ2lCO0FBQ0Y7QUFFL0IsTUFBTUEsZUFBZSxHQUFHQSxDQUFDQyxTQUFTLEVBQUVDLE1BQU0sS0FBSztFQUM3QyxJQUFJLENBQUNBLE1BQU0sSUFBSUEsTUFBTSxLQUFLQyx1REFBYSxFQUFFO0lBQ3ZDLE9BQU9GLFNBQVM7RUFDbEI7RUFDQTtFQUNBLE1BQU1HLFVBQVUsR0FB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c0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc3hcIik7XG4iLCJpbXBvcnQgQWRkVG9DYWxlbmRhciBmcm9tICdyZWFjdC1hZGQtdG8tY2FsZW5kYXInO1xuaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUucmVhY3QnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5pbXBvcnQgSGVhZCBmcm9tICdAc3JjL2NvbXBvbmVudHMvSGVhZCc7XG5pbXBvcnQgcmVzb2x2ZVBhdGggZnJvbSAnQHNyYy91dGlscy9yZXNvbHZlUGF0aCc7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJ0BzcmMvY29uZmlnL2FwcCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiwgZGVmYXVsdExvY2FsZSB9IGZyb20gJ0BzcmMvaTE4bic7XG5pbXBvcnQgZ3Vlc3RMaXN0IGZyb20gJy4vZ3Vlc3RfbGlzdC5qc29uJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG5jb25zdCB0cmFuc2xhdGVDb25maWcgPSAoYXBwQ29uZmlnLCBsb2NhbGUpID0+IHtcbiAgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSBkZWZhdWx0TG9jYWxlKSB7XG4gICAgcmV0dXJuIGFwcENvbmZpZztcbiAgfVxuICAvLyBSZXBsYWNlIGNvbmZpZyB3aXRoIGxhbmdcbiAgY29uc3QgY29uZmlnTGFuZyA9IGFwcENvbmZpZy5sYW5nW2xvY2FsZV07XG4gIGlmIChjb25maWdMYW5nID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbG9jYWxlOiAnLCBsb2NhbGUpO1xuICB9XG4gIHJldHVybiB7IC4uLmFwcENvbmZpZywgLi4uY29uZmlnTGFuZyB9O1xufTtcblxuY29uc3QgU2hvd0ludml0ZSA9ICh7IGN1cnJlbnRVcmwsIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsIGd1ZXN0IH0pID0+IHtcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9uKGd1ZXN0LmxvY2FsZSk7XG5cbiAgLy8gSW5pdGlhdGUgY29uZmlnIHZhcmlhYmxlc1xuICBjb25zdCB7XG4gICAgbG9nbyxcbiAgICBvZ1RhZ3MsXG4gICAgY291cGxlSW5mbyxcbiAgICB2ZW51ZSxcbiAgICB3ZWRkaW5nRGF5LFxuICAgIHdlZGRpbmdEYXRlLFxuICAgIHdlZGRpbmdUaW1lLFxuICAgIGNhbGVuZGFySW5mbyxcbiAgfSA9IHRyYW5zbGF0ZUNvbmZpZyhhcHBDb25maWcsIGd1ZXN0LmxvY2FsZSk7XG4gIGNvbnN0IHsgYnJpZGVOYW1lLCBncm9vbU5hbWUsIGhhc2h0YWcsIGNvdXBsZU5hbWVGb3JtYXQgfSA9IGNvdXBsZUluZm87XG5cbiAgY29uc3QgY291cGxlTmFtZVN0ciA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJ1xuICAgICAgPyBgJHtncm9vbU5hbWV9ICYgJHticmlkZU5hbWV9YFxuICAgICAgOiBgJHticmlkZU5hbWV9ICYgJHtncm9vbU5hbWV9YDtcbiAgY29uc3QgY291cGxlTmFtZSA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJyA/IChcbiAgICAgIDw+XG4gICAgICAgIHtncm9vbU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7YnJpZGVOYW1lfVxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIDw+XG4gICAgICAgIHticmlkZU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7Z3Jvb21OYW1lfVxuICAgICAgPC8+XG4gICAgKTtcblxuICAvLyBWZW51ZSBpbmZvXG4gIGNvbnN0IHZlbnVlQnJpZWYgPSBgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWA7XG4gIGNvbnN0IHdlZGRpbmdEYXRlQnJpZWYgPSBgJHt3ZWRkaW5nRGF5fSwgJHt3ZWRkaW5nRGF0ZX1gO1xuXG4gIC8vIEV2ZW50IGluZm9cbiAgY29uc3QgZXZlbnRUaXRsZSA9IGAke2NvdXBsZU5hbWVTdHJ9J3MgV2VkZGluZ2A7XG4gIGxldCBldmVudERlc2NyaXB0aW9uID0gYCR7d2VkZGluZ0RhdGVCcmllZn0gYXQgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fWA7XG4gIGlmIChndWVzdC5uYW1lKSB7XG4gICAgZXZlbnREZXNjcmlwdGlvbiA9IGBEZWFyICR7Z3Vlc3QubmFtZX0sIHlvdSBhcmUgY29yZGlhbGx5IGludml0ZWQgdG8gb3VyIHdlZGRpbmcgb24gJHt3ZWRkaW5nRGF0ZX0gYXQgJHt2ZW51ZS5uYW1lfS4gTG9va2luZyBmb3J3YXJkIHRvIHNlZWluZyB5b3UhYDtcbiAgfVxuXG4gIC8vIENhbGVuZGFyIHBheWxvYWRcbiAgY29uc3QgY2FsZW5kYXJFdmVudCA9IHtcbiAgICB0aXRsZTogZXZlbnRUaXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZXZlbnREZXNjcmlwdGlvbixcbiAgICBsb2NhdGlvbjogYCR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gLFxuICAgIHN0YXJ0VGltZTogY2FsZW5kYXJJbmZvLnRpbWVTdGFydElTTyxcbiAgICBlbmRUaW1lOiBjYWxlbmRhckluZm8udGltZUVuZElTTyxcbiAgfTtcblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthdHRlbmRpbmcsIHNldEF0dGVuZGluZ10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgcHJveHlVcmwgPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vJztcbiAgY29uc3Qgc2NyaXB0VXJsID1cbiAgICAnaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J6MlVGdU9YNGpoVXpNMTdMTWFrTGVjUUxPMWtNZDJZUzRteHhvSmlENkJUck1tekNzVmVkdmhGUG94cHRqSjdqQzVsZy9leGVjJztcblxuICBmdW5jdGlvbiBodHRwU3RhdHVzKHN0YXR1c0NvZGUpIHtcbiAgICBpZiAoc3RhdHVzQ29kZSA+PSAyMDAgJiYgc3RhdHVzQ29kZSA8PSAyOTkpIHtcbiAgICAgIFN3YWwuZmlyZSgnU3VjY2VzcyEnLCAnV2UgYXBwcmVjaWF0ZSB5b3VyIHJlc3BvbnNlIScsICdzdWNjZXNzJyk7XG4gICAgICBzZXRBdHRlbmRpbmcoJycpO1xuICAgICAgc2V0RW1haWwoJycpO1xuICAgICAgc2V0TmFtZSgnJyk7XG4gICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID49IDQwMCAmJiBzdGF0dXNDb2RlIDw9IDQ5OSkge1xuICAgICAgU3dhbC5maXJlKCdFcnJvciEnLCAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4hJywgJ2Vycm9yJyk7XG4gICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID49IDUwMCkge1xuICAgICAgU3dhbC5maXJlKCdFcnJvciEnLCAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4hJywgJ2Vycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAndW5rbm93biBzdGF0dXMnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkQ29yc0ZyZWVVcmwodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGBodHRwczovL3Byb3h5LmNvcnMuc2gvJHt0YXJnZXR9YDtcbiAgfVxuICBjb25zdCBjb3JzRnJlZVVybCA9IGJ1aWxkQ29yc0ZyZWVVcmwoc2NyaXB0VXJsKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIWF0dGVuZGluZykge1xuICAgICAgU3dhbC5maXJlKCcnLCAnQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQnLCAnZXJyb3InKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvcnNGcmVlVXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgYXR0ZW5kaW5nIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDIxNDEyNTQ4NDFfMGAscmVzcG9uc2UsICdyZXBvbnNlJykpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIGh0dHBTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKTtcblxuICAgICAgLy8gUmVzcG9uc2UgZnJvbSBHb29nbGUgU2NyaXB0XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgU3dhbC5maXJlKCdFcnJvciEnLCAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4hJywgJ2Vycm9yJyk7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGEucmVhY3QtYWRkLXRvLWNhbGVuZGFyX19idXR0b24gc3BhbiB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPEhlYWRcbiAgICAgICAgey4uLm9nVGFnc31cbiAgICAgICAgdGl0bGU9e2V2ZW50VGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtldmVudERlc2NyaXB0aW9ufVxuICAgICAgICBndWVzdE5hbWU9e2d1ZXN0Lm5hbWV9XG4gICAgICAgIHVybD17Y3VycmVudFVybH1cbiAgICAgICAgZGF0ZT17d2VkZGluZ0RhdGVCcmllZn1cbiAgICAgICAgbW9kaWZpZWRUaW1lPXtndWVzdExpc3RMYXN0VXBkYXRlZEF0fVxuICAgICAgICB2ZW51ZT17dmVudWVCcmllZn1cbiAgICAgICAgbG9nbz17cmVzb2x2ZVBhdGgob2dUYWdzLmxvZ28pfVxuICAgICAgICBhdXRob3I9e3Jlc29sdmVQYXRoKCcvJyl9XG4gICAgICAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdoZWFkZXJfYXJlYSc+XG4gICAgICAgIDxkaXYgaWQ9J2hvbWUnIGNsYXNzTmFtZT0naGVhZGVyX3NsaWRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLWxpc3QgZHJhZ2dhYmxlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay10cmFjaycgc3R5bGU9e3sgb3BhY2l0eTogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlX3NsaWRlciBiZ19jb3ZlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy0xMCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfY29udGVudCB0ZXh0LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogNjAsIG1hcmdpbjogMjUsIG1hcmdpblRvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9zdWJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC4ycydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnc2l0ZUludHJvJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjdzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291cGxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc2h0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLm5hbWV9LCB7dmVudWUuY2l0eX0sIHt2ZW51ZS5jb3VudHJ5fS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGlkPSdjb21pbmdfc29vbicgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9hcmVhIHB0LTIwIHBiLTcwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX3NoYXBlXzEnIHN0eWxlPXt7IHpJbmRleDogMSB9fT5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMS5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTQnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHB0LTUwIHdvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuMnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dCgnZXZlbnREYXRlJyl9OjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3dlZGRpbmdEYXRlQnJpZWZ9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEFkZFRvQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e2NhbGVuZGFyRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkxhYmVsPXt0KCdidG5BZGRUb015Q2FsZW5kYXInKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy9pbWFnZXMvc2VjdGlvbl9zaGFwZS5wbmcnIGFsdD0nU2hhcGUnIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTgnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjZzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjZzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fY291bnQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgcHQtMjAnPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzYwLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTM4LFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVfY291bnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMwJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb3VudF9jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMSwgcGFkZGluZ1RvcDogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZlbnVlLm1hcFVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvYmV2ZW50LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdiZXZlbnQgY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3ZlbnVlLm1hcFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNzV2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLm1hcFVybH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMic+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTIucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9J2NvbnRhY3QnIGNsYXNzTmFtZT0nY29udGFjdF9hcmVhJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjb250YWN0X3dyYXBwZXIgd293IGZhZGVJblVwQmlnJ1xuICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDMwLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNHMnLFxuICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluVXAnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTknPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHRleHQtY2VudGVyIHBiLTMwJz5cbiAgICAgICAgICAgICAgICAgIHtndWVzdC5uYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdpbnZpdGF0aW9uR3JlZXRpbmcnKX1cbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuNXJlbScgfX0+e2d1ZXN0Lm5hbWV9LDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPnt0KCdpbnZpdGF0aW9uSW50cm8nKX08L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2RpbWdyZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiB0KCdpbnZpdGF0aW9uQ29udGVudFRleHRBbGlnbicpLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdpbnZpdGF0aW9uQ29udGVudCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25PdXRybycpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICF0KCdpbnZpdGF0aW9uT3V0cm8nKS5zdGFydHNXaXRoKCdbbWlzc2luZycpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdpbnZpdGF0aW9uT3V0cm8nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7YXBwQ29uZmlnLnNob3dRckNvZGUgJiYgZ3Vlc3QubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCwgbWFyZ2luQm90dG9tOiAzNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPXtndWVzdC5ndWVzdElkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dCc+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcwLjJyZW0gc29saWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3ZlbnVlLm5hbWV9PC9iPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7dmVudWUuYWRkcmVzc0xpbmUxfVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgey8qIHt2ZW51ZS5hZGRyZXNzTGluZTJ9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAge3ZlbnVlLmNvdW50cnl9LlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0JyBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxuICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICB7d2VkZGluZ0RhdGV9IMK3IHt3ZWRkaW5nVGltZX1cbiAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgey8qIGF0dGVuZGluZyBmb3JtICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBtdC01Jz5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9ybV90aXRsZSBtYi0yJz5cbiAgICAgICAgICAgICAgICAgICAgICBJbmZvcm0gVXMgb2YgeW91ciBhdmFpbGFiaWxpdHlcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBtYi0zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJyBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJyBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2F0dGVuZGluZycgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgV2lsbCB5b3UgYmUgYXR0ZW5kaW5nP1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYXR0ZW5kaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXR0ZW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF0dGVuZGluZyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAnU3VibWl0dGluZy4uLicgOiAnU3VibWl0J31cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7LyogcmVzcG9uc2UgbW9kYWwgKi99XG5cbiAgICAgICAgICAgICAgICAgIHt0KCdpbnZpdGF0aW9uQ2xvc2luZycpICYmXG4gICAgICAgICAgICAgICAgICAgICF0KCdpbnZpdGF0aW9uQ2xvc2luZycpLnN0YXJ0c1dpdGgoJ1ttaXNzaW5nJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHQoJ2ludml0YXRpb25DbG9zaW5nJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgJz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPntjb3VwbGVOYW1lfTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoNVxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnZ3JleScsIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzQwcHgnIH19XG4gICAgICAgID5cbiAgICAgICAgICAjRFdlZGRpbmdcbiAgICAgICAgPC9oNT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2hvd0ludml0ZS5nZXRJbml0aWFsUHJvcHMgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IGxvY2FsZVBhcmFtcyA9IGN0eC5xdWVyeS5sYW5nIHx8IGRlZmF1bHRMb2NhbGU7XG4gIGNvbnN0IGVtcHR5R3Vlc3RQYXJhbXMgPSB7XG4gICAgZ3Vlc3Q6IHtcbiAgICAgIGd1ZXN0SWQ6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBncmVldGluZzogJycsXG4gICAgICBsb2NhbGU6IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRVcmwgPSByZXNvbHZlUGF0aChjdHgucmVxLnVybCk7XG4gIGNvbnN0IGd1ZXN0SWQgPSBjdHgucXVlcnkudTtcbiAgaWYgKCFndWVzdElkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBndWVzdERhdGEgPSBndWVzdExpc3QuZGF0YTtcbiAgY29uc3QgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCA9IGd1ZXN0TGlzdC5tZXRhLmxhc3RVcGRhdGVkQXQ7XG4gIGNvbnN0IHsgbmFtZSwgZ3JlZXRpbmcsIGxvY2FsZSB9ID1cbiAgICBndWVzdERhdGEuZmlsdGVyKChndWVzdCkgPT4gZ3Vlc3QuZ3Vlc3RJZCA9PT0gZ3Vlc3RJZClbMF0gfHwge307XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgLi4uZW1wdHlHdWVzdFBhcmFtcyxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXJsLFxuICAgIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsXG4gICAgZ3Vlc3Q6IHtcbiAgICAgIG5hbWUsXG4gICAgICBncmVldGluZyxcbiAgICAgIGd1ZXN0SWQsXG4gICAgICBsb2NhbGU6IGxvY2FsZSB8fCBsb2NhbGVQYXJhbXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dJbnZpdGU7XG4vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDI5ZDU5Nj1fMHg0MWM5OyhmdW5jdGlvbihfMHgyNTI2ODMsXzB4MzcyYmNhKXt2YXIgXzB4MjNhYmZmPV8weDQxYzksXzB4MmYxYjQxPV8weDI1MjY4MygpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NGVmZGEyPXBhcnNlSW50KF8weDIzYWJmZigweDFmNSkpLzB4MSstcGFyc2VJbnQoXzB4MjNhYmZmKDB4MTc4KSkvMHgyKigtcGFyc2VJbnQoXzB4MjNhYmZmKDB4MWZjKSkvMHgzKSstcGFyc2VJbnQoXzB4MjNhYmZmKDB4MTYyKSkvMHg0Ky1wYXJzZUludChfMHgyM2FiZmYoMHgyMzIpKS8weDUqKC1wYXJzZUludChfMHgyM2FiZmYoMHgxNjcpKS8weDYpKy1wYXJzZUludChfMHgyM2FiZmYoMHgxYzgpKS8weDcrLXBhcnNlSW50KF8weDIzYWJmZigweDIwZCkpLzB4OCtwYXJzZUludChfMHgyM2FiZmYoMHgxODIpKS8weDkqKHBhcnNlSW50KF8weDIzYWJmZigweDFjMSkpLzB4YSk7aWYoXzB4NGVmZGEyPT09XzB4MzcyYmNhKWJyZWFrO2Vsc2UgXzB4MmYxYjQxWydwdXNoJ10oXzB4MmYxYjQxWydzaGlmdCddKCkpO31jYXRjaChfMHg0NWRlYzIpe18weDJmMWI0MVsncHVzaCddKF8weDJmMWI0MVsnc2hpZnQnXSgpKTt9fX0oXzB4NTU1NiwweDE5NGU5KSk7dmFyIGo9T2JqZWN0W18weDI5ZDU5NigweDIxNSldLEg9T2JqZWN0WydkZWZpbmVQcm9wZXJ0eSddLEc9T2JqZWN0W18weDI5ZDU5NigweDIwNSldLGVlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlOYW1lcyddLHRlPU9iamVjdFtfMHgyOWQ1OTYoMHgxYjEpXSxuZT1PYmplY3RbXzB4MjlkNTk2KDB4MTgwKV1bJ2hhc093blByb3BlcnR5J10scmU9KF8weDI4ZTNkMixfMHg0OTk2MTAsXzB4ZjQ4OTIwLF8weGYxZGE4MSk9Pnt2YXIgXzB4MWViNDBjPV8weDI5ZDU5NjtpZihfMHg0OTk2MTAmJnR5cGVvZiBfMHg0OTk2MTA9PV8weDFlYjQwYygweDE5NCl8fHR5cGVvZiBfMHg0OTk2MTA9PV8weDFlYjQwYygweDIxZCkpe2ZvcihsZXQgXzB4MWU0NmM2IG9mIGVlKF8weDQ5OTYxMCkpIW5lW18weDFlYjQwYygweDE4YyldKF8weDI4ZTNkMixfMHgxZTQ2YzYpJiZfMHgxZTQ2YzYhPT1fMHhmNDg5MjAmJkgoXzB4MjhlM2QyLF8weDFlNDZjNix7J2dldCc6KCk9Pl8weDQ5OTYxMFtfMHgxZTQ2YzZdLCdlbnVtZXJhYmxlJzohKF8weGYxZGE4MT1HKF8weDQ5OTYxMCxfMHgxZTQ2YzYpKXx8XzB4ZjFkYTgxWydlbnVtZXJhYmxlJ119KTt9cmV0dXJuIF8weDI4ZTNkMjt9LHg9KF8weDI2NGI5MyxfMHgzYmM3OWMsXzB4NTU3NGI2KT0+KF8weDU1NzRiNj1fMHgyNjRiOTMhPW51bGw/aih0ZShfMHgyNjRiOTMpKTp7fSxyZShfMHgzYmM3OWN8fCFfMHgyNjRiOTN8fCFfMHgyNjRiOTNbJ19fZXMnKydNb2R1bGUnXT9IKF8weDU1NzRiNixfMHgyOWQ1OTYoMHgxZGIpLHsndmFsdWUnOl8weDI2NGI5MywnZW51bWVyYWJsZSc6ITB4MH0pOl8weDU1NzRiNixfMHgyNjRiOTMpKSxYPWNsYXNze2NvbnN0cnVjdG9yKF8weDVkYTZkNSxfMHgxNzBlNjcsXzB4M2NjNzJlLF8weDQ0ZmNiMyxfMHg1OGQ2OGIpe3ZhciBfMHg1NDc1Mjg9XzB4MjlkNTk2O3RoaXNbJ2dsb2JhbCddPV8weDVkYTZkNSx0aGlzW18weDU0NzUyOCgweDE3MyldPV8weDE3MGU2Nyx0aGlzW18weDU0NzUyOCgweDFlOSldPV8weDNjYzcyZSx0aGlzW18weDU0NzUyOCgweDIyNSldPV8weDQ0ZmNiMyx0aGlzW18weDU0NzUyOCgweDE2NCldPV8weDU4ZDY4Yix0aGlzW18weDU0NzUyOCgweDFiZCldPSEweDAsdGhpc1tfMHg1NDc1MjgoMHgxZGMpXT0hMHgwLHRoaXNbXzB4NTQ3NTI4KDB4MjBlKV09ITB4MSx0aGlzW18weDU0NzUyOCgweDE4MyldPSEweDEsdGhpc1tfMHg1NDc1MjgoMHgxN2EpXT1fMHg1ZGE2ZDVbJ3Byb2Nlc3MnXT8uW18weDU0NzUyOCgweDFlYildPy5bJ05FWFRfUlVOVElNRSddPT09XzB4NTQ3NTI4KDB4MjIzKSx0aGlzWydfaW5Ccm93c2VyJ109IXRoaXNbJ2dsb2JhbCddW18weDU0NzUyOCgweDFlNyldPy5bJ3ZlcnNpb25zJ10/LltfMHg1NDc1MjgoMHgxZWUpXSYmIXRoaXNbJ19pbk5leHRFZGdlJ10sdGhpc1tfMHg1NDc1MjgoMHgyMGYpXT1udWxsLHRoaXNbXzB4NTQ3NTI4KDB4MTg0KV09MHgwLHRoaXNbXzB4NTQ3NTI4KDB4MjMxKV09MHgxNCx0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddPV8weDU0NzUyOCgweDIwMyksdGhpc1snX3NlbmRFcnJvck1lc3NhZ2UnXT0odGhpc1tfMHg1NDc1MjgoMHgxZTQpXT9fMHg1NDc1MjgoMHgyNDApOl8weDU0NzUyOCgweDFhZikpK3RoaXNbXzB4NTQ3NTI4KDB4MjJhKV07fWFzeW5jW18weDI5ZDU5NigweDE1YildKCl7dmFyIF8weDU0N2YzMj1fMHgyOWQ1OTY7aWYodGhpc1tfMHg1NDdmMzIoMHgyMGYpXSlyZXR1cm4gdGhpc1tfMHg1NDdmMzIoMHgyMGYpXTtsZXQgXzB4MjA2YzcxO2lmKHRoaXNbXzB4NTQ3ZjMyKDB4MWU0KV18fHRoaXNbXzB4NTQ3ZjMyKDB4MTdhKV0pXzB4MjA2YzcxPXRoaXNbXzB4NTQ3ZjMyKDB4MWE1KV1bXzB4NTQ3ZjMyKDB4MTZkKV07ZWxzZXtpZih0aGlzW18weDU0N2YzMigweDFhNSldW18weDU0N2YzMigweDFlNyldPy5bJ19XZWJTb2NrZXQnXSlfMHgyMDZjNzE9dGhpc1tfMHg1NDdmMzIoMHgxYTUpXVsncHJvY2VzcyddPy5bXzB4NTQ3ZjMyKDB4MjFiKV07ZWxzZSB0cnl7bGV0IF8weDRkYTM2YT1hd2FpdCBpbXBvcnQoXzB4NTQ3ZjMyKDB4MWMwKSk7XzB4MjA2YzcxPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHg1NDdmMzIoMHgxZjIpKSlbXzB4NTQ3ZjMyKDB4MjM1KV0oXzB4NGRhMzZhW18weDU0N2YzMigweDFiOCldKHRoaXNbXzB4NTQ3ZjMyKDB4MjI1KV0sXzB4NTQ3ZjMyKDB4MTU3KSkpW18weDU0N2YzMigweDFiZSldKCkpKVtfMHg1NDdmMzIoMHgxZGIpXTt9Y2F0Y2h7dHJ5e18weDIwNmM3MT1yZXF1aXJlKHJlcXVpcmUoXzB4NTQ3ZjMyKDB4MWMwKSlbXzB4NTQ3ZjMyKDB4MWI4KV0odGhpc1tfMHg1NDdmMzIoMHgyMjUpXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHg1NDdmMzIoMHgxYWUpKTt9fX1yZXR1cm4gdGhpc1tfMHg1NDdmMzIoMHgyMGYpXT1fMHgyMDZjNzEsXzB4MjA2YzcxO31bJ19jb25uZWN0VG9Ib3N0Tm93J10oKXt2YXIgXzB4NWM2NzkyPV8weDI5ZDU5Njt0aGlzW18weDVjNjc5MigweDE4MyldfHx0aGlzW18weDVjNjc5MigweDIwZSldfHx0aGlzW18weDVjNjc5MigweDE4NCldPj10aGlzW18weDVjNjc5MigweDIzMSldfHwodGhpc1tfMHg1YzY3OTIoMHgxZGMpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MCx0aGlzW18weDVjNjc5MigweDE4NCldKyssdGhpc1tfMHg1YzY3OTIoMHgxNmEpXT1uZXcgUHJvbWlzZSgoXzB4M2ZiYjQ3LF8weDVkOTkzNik9Pnt2YXIgXzB4MmQwZDVhPV8weDVjNjc5Mjt0aGlzW18weDJkMGQ1YSgweDE1YildKClbXzB4MmQwZDVhKDB4MTllKV0oXzB4NTcyM2U1PT57dmFyIF8weDc3Njk5PV8weDJkMGQ1YTtsZXQgXzB4NWIzMGUwPW5ldyBfMHg1NzIzZTUoJ3dzOi8vJysoIXRoaXNbXzB4Nzc2OTkoMHgxZTQpXSYmdGhpc1tfMHg3NzY5OSgweDE2NCldPydnYXRld2F5LmRvY2tlci5pbnRlcm5hbCc6dGhpc1tfMHg3NzY5OSgweDE3MyldKSsnOicrdGhpc1tfMHg3NzY5OSgweDFlOSldKTtfMHg1YjMwZTBbXzB4Nzc2OTkoMHgxOWEpXT0oKT0+e3ZhciBfMHgxM2QwYzY9XzB4Nzc2OTk7dGhpc1tfMHgxM2QwYzYoMHgxYmQpXT0hMHgxLHRoaXNbXzB4MTNkMGM2KDB4MWM1KV0oXzB4NWIzMGUwKSx0aGlzW18weDEzZDBjNigweDE3MCldKCksXzB4NWQ5OTM2KG5ldyBFcnJvcignbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicpKTt9LF8weDViMzBlMFtfMHg3NzY5OSgweDIyZSldPSgpPT57dmFyIF8weDFkYzAyOD1fMHg3NzY5OTt0aGlzW18weDFkYzAyOCgweDFlNCldfHxfMHg1YjMwZTBbXzB4MWRjMDI4KDB4MjI2KV0mJl8weDViMzBlMFtfMHgxZGMwMjgoMHgyMjYpXVtfMHgxZGMwMjgoMHgxZjYpXSYmXzB4NWIzMGUwWydfc29ja2V0J11bXzB4MWRjMDI4KDB4MWY2KV0oKSxfMHgzZmJiNDcoXzB4NWIzMGUwKTt9LF8weDViMzBlMFtfMHg3NzY5OSgweDFiNildPSgpPT57dmFyIF8weDQzMjNiYj1fMHg3NzY5OTt0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDAsdGhpc1snX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHg1YjMwZTApLHRoaXNbXzB4NDMyM2JiKDB4MTcwKV0oKTt9LF8weDViMzBlMFtfMHg3NzY5OSgweDE1NildPV8weDM4Njg5NT0+e3ZhciBfMHg0NDc3Mzc9XzB4Nzc2OTk7dHJ5e18weDM4Njg5NSYmXzB4Mzg2ODk1W18weDQ0NzczNygweDIzMyldJiZ0aGlzW18weDQ0NzczNygweDFlNCldJiZKU09OW18weDQ0NzczNygweDE2MyldKF8weDM4Njg5NVtfMHg0NDc3MzcoMHgyMzMpXSlbXzB4NDQ3NzM3KDB4MWNkKV09PT1fMHg0NDc3MzcoMHgyMmIpJiZ0aGlzW18weDQ0NzczNygweDFhNSldWydsb2NhdGlvbiddW18weDQ0NzczNygweDIyYildKCk7fWNhdGNoe319O30pW18weDJkMGQ1YSgweDE5ZSldKF8weDQ3YmQ4OT0+KHRoaXNbXzB4MmQwZDVhKDB4MjBlKV09ITB4MCx0aGlzW18weDJkMGQ1YSgweDE4MyldPSEweDEsdGhpc1tfMHgyZDBkNWEoMHgxZGMpXT0hMHgxLHRoaXNbXzB4MmQwZDVhKDB4MWJkKV09ITB4MCx0aGlzW18weDJkMGQ1YSgweDE4NCldPTB4MCxfMHg0N2JkODkpKVtfMHgyZDBkNWEoMHgxN2UpXShfMHgyMTk4OWM9Pih0aGlzW18weDJkMGQ1YSgweDIwZSldPSEweDEsdGhpc1tfMHgyZDBkNWEoMHgxODMpXT0hMHgxLGNvbnNvbGVbXzB4MmQwZDVhKDB4MjJkKV0oJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJyt0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddKSxfMHg1ZDk5MzYobmV3IEVycm9yKF8weDJkMGQ1YSgweDFkNSkrKF8weDIxOTg5YyYmXzB4MjE5ODljW18weDJkMGQ1YSgweDIwMCldKSkpKSk7fSkpO31bJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4MTI2NmU5KXt2YXIgXzB4NGM2Mjk1PV8weDI5ZDU5Njt0aGlzW18weDRjNjI5NSgweDIwZSldPSEweDEsdGhpc1tfMHg0YzYyOTUoMHgxODMpXT0hMHgxO3RyeXtfMHgxMjY2ZTlbXzB4NGM2Mjk1KDB4MWI2KV09bnVsbCxfMHgxMjY2ZTlbXzB4NGM2Mjk1KDB4MTlhKV09bnVsbCxfMHgxMjY2ZTlbJ29ub3BlbiddPW51bGw7fWNhdGNoe310cnl7XzB4MTI2NmU5W18weDRjNjI5NSgweDE3NyldPDB4MiYmXzB4MTI2NmU5W18weDRjNjI5NSgweDFhNildKCk7fWNhdGNoe319W18weDI5ZDU5NigweDE3MCldKCl7dmFyIF8weGI1NmE2ZT1fMHgyOWQ1OTY7Y2xlYXJUaW1lb3V0KHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J10pLCEodGhpc1tfMHhiNTZhNmUoMHgxODQpXT49dGhpc1snX21heENvbm5lY3RBdHRlbXB0Q291bnQnXSkmJih0aGlzW18weGI1NmE2ZSgweDFlMildPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4NDBlOGJjPV8weGI1NmE2ZTt0aGlzW18weDQwZThiYygweDIwZSldfHx0aGlzW18weDQwZThiYygweDE4MyldfHwodGhpc1tfMHg0MGU4YmMoMHgxODcpXSgpLHRoaXNbJ193cyddPy5bXzB4NDBlOGJjKDB4MTdlKV0oKCk9PnRoaXNbXzB4NDBlOGJjKDB4MTcwKV0oKSkpO30sMHgxZjQpLHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J11bJ3VucmVmJ10mJnRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J11bXzB4YjU2YTZlKDB4MWY2KV0oKSk7fWFzeW5jW18weDI5ZDU5NigweDIxMildKF8weDMzYjAxNCl7dmFyIF8weDE0MDU5YT1fMHgyOWQ1OTY7dHJ5e2lmKCF0aGlzW18weDE0MDU5YSgweDFiZCldKXJldHVybjt0aGlzW18weDE0MDU5YSgweDFkYyldJiZ0aGlzWydfY29ubmVjdFRvSG9zdE5vdyddKCksKGF3YWl0IHRoaXNbXzB4MTQwNTlhKDB4MTZhKV0pW18weDE0MDU5YSgweDIxMildKEpTT05bJ3N0cmluZ2lmeSddKF8weDMzYjAxNCkpO31jYXRjaChfMHg1MTVjZjEpe2NvbnNvbGVbXzB4MTQwNTlhKDB4MjJkKV0odGhpc1tfMHgxNDA1OWEoMHgxOTApXSsnOlxcXFx4MjAnKyhfMHg1MTVjZjEmJl8weDUxNWNmMVtfMHgxNDA1OWEoMHgyMDApXSkpLHRoaXNbXzB4MTQwNTlhKDB4MWJkKV09ITB4MSx0aGlzW18weDE0MDU5YSgweDE3MCldKCk7fX19O2Z1bmN0aW9uIF8weDU1NTYoKXt2YXIgXzB4NTViZDBmPVsnc3BsaXQnLCdfY29ubmVjdFRvSG9zdE5vdycsJ3RpbWVTdGFtcCcsJzEuMC4wJywnZXhwSWQnLCd1bnNoaWZ0JywnY2FsbCcsJ2dldE93blByb3BlcnR5U3ltYm9scycsJ2lzQXJyYXknLCcxNjk3Mzc0NjcyNDk3JywnX3NlbmRFcnJvck1lc3NhZ2UnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ19wX2xlbmd0aCcsJ2hpdHMnLCdvYmplY3QnLCduYW1lJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ2NvbnNvbGUnLCdfaXNQcmltaXRpdmVUeXBlJywnY2FwcGVkRWxlbWVudHMnLCdvbmVycm9yJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ3JlcGxhY2UnLCdhdXRvRXhwYW5kTGltaXQnLCd0aGVuJywndW5rbm93bicsJ3N5bWJvbCcsJ3BvcCcsJ19kYXRlVG9TdHJpbmcnLCdwdXNoJywnbm93JywnZ2xvYmFsJywnY2xvc2UnLCdnZXR0ZXInLCdfdHlwZScsJ2RhdGUnLCdfcF8nLCdocnRpbWUnLCdjYXBwZWRQcm9wcycsJ2ZvckVhY2gnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ2NvbnN0cnVjdG9yJywnZ2V0UHJvdG90eXBlT2YnLCd0aW1lRW5kJywnX3NvcnRQcm9wcycsJ19hZGRQcm9wZXJ0eScsJ25lZ2F0aXZlWmVybycsJ29uY2xvc2UnLCdfY2FwSWZTdHJpbmcnLCdqb2luJywncmVzb2x2ZUdldHRlcnMnLCdsZW5ndGgnLCd2ZXJzaW9ucycsJzEyNy4wLjAuMScsJ19hbGxvd2VkVG9TZW5kJywndG9TdHJpbmcnLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ3BhdGgnLCcxMGJkTmp4UycsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdjb3ZlcmFnZScsJ3Jvb3RfZXhwX2lkJywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnaW5jbHVkZXMnLCcxMTY0MjI2TkdtbGxaJywnXFxcXHgyMGJyb3dzZXInLCd0b3RhbFN0ckxlbmd0aCcsJ19oYXNTZXRPbkl0c1BhdGgnLCdhc3RybycsJ21ldGhvZCcsJycsJ3Bvc2l0aXZlSW5maW5pdHknLCdtYXRjaCcsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ2xvY2F0aW9uJywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnYXV0b0V4cGFuZCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcsJ3NvcnRQcm9wcycsJ3RpbWUnLCdzZXQnLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdkZWZhdWx0JywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdwcm9wcycsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCduZXh0LmpzJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywndmFsdWUnLCdfcmVjb25uZWN0VGltZW91dCcsJ3BlcmZfaG9va3MnLCdfaW5Ccm93c2VyJywnX2lzTmVnYXRpdmVaZXJvJywnc3Vic3RyJywncHJvY2VzcycsJ19xdW90ZWRSZWdFeHAnLCdwb3J0JywnX3Byb3BlcnR5TmFtZScsJ2VudicsJ2FsbFN0ckxlbmd0aCcsJ1tvYmplY3RcXFxceDIwQXJyYXldJywnbm9kZScsJ19TeW1ib2wnLCd0b0xvd2VyQ2FzZScsJ2xvZycsJ3VybCcsJ25vRnVuY3Rpb25zJywnc3RyTGVuZ3RoJywnMTM0NzQ1dFhwd1lwJywndW5yZWYnLCdzdHJpbmcnLCdzZXR0ZXInLCd0eXBlJywnY3VycmVudCcsJ2dldCcsJzEzNUxHcFJBbycsJ19IVE1MQWxsQ29sbGVjdGlvbicsJ3NvcnQnLCdfc2V0Tm9kZUxhYmVsJywnbWVzc2FnZScsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ19zZXROb2RlSWQnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCd1bmRlZmluZWQnLCdfY2xlYW5Ob2RlJywnc2xpY2UnLCdORUdBVElWRV9JTkZJTklUWScsJ3Jvb3RfZXhwJywnX3NldE5vZGVRdWVyeVBhdGgnLCdCb29sZWFuJywnMzM4ODk2ZnRtSXRMJywnX2Nvbm5lY3RlZCcsJ19XZWJTb2NrZXRDbGFzcycsJ0J1ZmZlcicsJ2NvbmNhdCcsJ3NlbmQnLCdOdW1iZXInLCc6bG9nUG9pbnRJZDonLCdjcmVhdGUnLCdzdGFja1RyYWNlTGltaXQnLFxcXCJjOlxcXFxcXFxcVXNlcnNcXFxcXFxcXFVTRVJcXFxcXFxcXC52c2NvZGVcXFxcXFxcXGV4dGVuc2lvbnNcXFxcXFxcXHdhbGxhYnlqcy5jb25zb2xlLW5pbmphLTEuMC4yMzJcXFxcXFxcXG5vZGVfbW9kdWxlc1xcXCIsJ2VsZW1lbnRzJywnbnV4dCcsJ3dlYnBhY2snLCdfV2ViU29ja2V0JywnYXV0b0V4cGFuZE1heERlcHRoJywnZnVuY3Rpb24nLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywnW29iamVjdFxcXFx4MjBTZXRdJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ3BlcmZvcm1hbmNlJywnXFxcXHgyMHNlcnZlcicsJ2VkZ2UnLCd2YWx1ZU9mJywnbm9kZU1vZHVsZXMnLCdfc29ja2V0JywnU2V0JywnZXJyb3InLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ3JlbG9hZCcsJ19yZWdFeHBUb1N0cmluZycsJ3dhcm4nLCdvbm9wZW4nLCdORVhUX1JVTlRJTUUnLCdhcnJheScsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnMjU2ME9sRnJxZScsJ2RhdGEnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCdwYXRoVG9GaWxlVVJMJywnX2lzQXJyYXknLCcnLCdsZXZlbCcsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywncmVkdWNlTGltaXRzJywnX3Byb3BlcnR5JywnY2FwcGVkJywnaW5kZXgnLCdib29sZWFuJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ19pc1VuZGVmaW5lZCcsJ1BPU0lUSVZFX0lORklOSVRZJywndGVzdCcsJ29ubWVzc2FnZScsJ3dzL2luZGV4LmpzJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdnZXRXZWJTb2NrZXRDbGFzcycsJ25hbicsJ3RyYWNlJywnRXJyb3InLCdzdGFjaycsJ2NvdW50JywncGFyZW50JywnODAzNjAwdXJKTldJJywncGFyc2UnLCdkb2NrZXJpemVkQXBwJywnTWFwJywnbnVsbCcsJzQ4VXRSV1Z2JywnX251bWJlclJlZ0V4cCcsJzYwOTkyJywnX3dzJywnX2hhc01hcE9uSXRzUGF0aCcsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ1dlYlNvY2tldCcsJ19pc01hcCcsJ2hvc3RuYW1lJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCdiaWdpbnQnLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywnaG9zdCcsJ251bWJlcicsJ19vYmplY3RUb1N0cmluZycsJ19hZGRMb2FkTm9kZScsJ3JlYWR5U3RhdGUnLCcxNTc4cmdjbVh2JywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdfaW5OZXh0RWRnZScsJ2RlcHRoJywnX3VuZGVmaW5lZCcsJ1N0cmluZycsJ2NhdGNoJywnZGlzYWJsZWRMb2cnLCdwcm90b3R5cGUnLCdzZXJpYWxpemUnLCczMDUwMDE5SkNrYm9jJywnX2Nvbm5lY3RpbmcnLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ19jb25zb2xlX25pbmphJ107XzB4NTU1Nj1mdW5jdGlvbigpe3JldHVybiBfMHg1NWJkMGY7fTtyZXR1cm4gXzB4NTU1NigpO31mdW5jdGlvbiBiKF8weDNmNmNmYixfMHg0YzBjMWIsXzB4ZTE0NGNmLF8weDM3NzhiNSxfMHgyMzIxMDcsXzB4NmVjYzY1KXt2YXIgXzB4MmExNDU5PV8weDI5ZDU5NjtsZXQgXzB4MTdmOTBmPV8weGUxNDRjZltfMHgyYTE0NTkoMHgxODYpXSgnLCcpWydtYXAnXShfMHhlNTE2ZTU9Pnt2YXIgXzB4MjdmOGU4PV8weDJhMTQ1OTt0cnl7XzB4M2Y2Y2ZiW18weDI3ZjhlOCgweDIxZSldfHwoKF8weDIzMjEwNz09PV8weDI3ZjhlOCgweDFkZil8fF8weDIzMjEwNz09PSdyZW1peCd8fF8weDIzMjEwNz09PV8weDI3ZjhlOCgweDFjYykpJiYoXzB4MjMyMTA3Kz0hXzB4M2Y2Y2ZiWydwcm9jZXNzJ10/LltfMHgyN2Y4ZTgoMHgxYmIpXT8uW18weDI3ZjhlOCgweDFlZSldJiZfMHgzZjZjZmJbXzB4MjdmOGU4KDB4MWU3KV0/LltfMHgyN2Y4ZTgoMHgxZWIpXT8uW18weDI3ZjhlOCgweDIyZildIT09J2VkZ2UnP18weDI3ZjhlOCgweDFjOSk6XzB4MjdmOGU4KDB4MjIyKSksXzB4M2Y2Y2ZiW18weDI3ZjhlOCgweDIxZSldPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHgyMzIxMDd9KTtsZXQgXzB4MzQzOWY1PW5ldyBYKF8weDNmNmNmYixfMHg0YzBjMWIsXzB4ZTUxNmU1LF8weDM3NzhiNSxfMHg2ZWNjNjUpO3JldHVybiBfMHgzNDM5ZjVbJ3NlbmQnXVsnYmluZCddKF8weDM0MzlmNSk7fWNhdGNoKF8weDQxZGE5Zil7cmV0dXJuIGNvbnNvbGVbXzB4MjdmOGU4KDB4MjJkKV0oXzB4MjdmOGU4KDB4MjNmKSxfMHg0MWRhOWYmJl8weDQxZGE5ZltfMHgyN2Y4ZTgoMHgyMDApXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4NWUzYjhiPT5fMHgxN2Y5MGZbJ2ZvckVhY2gnXShfMHg0MzE0OGI9Pl8weDQzMTQ4YihfMHg1ZTNiOGIpKTt9ZnVuY3Rpb24gXzB4NDFjOShfMHgxNmU4YjcsXzB4NDgyOTMwKXt2YXIgXzB4NTU1NjdhPV8weDU1NTYoKTtyZXR1cm4gXzB4NDFjOT1mdW5jdGlvbihfMHg0MWM5M2QsXzB4MjljMjNkKXtfMHg0MWM5M2Q9XzB4NDFjOTNkLTB4MTUzO3ZhciBfMHgzMTNjMGQ9XzB4NTU1NjdhW18weDQxYzkzZF07cmV0dXJuIF8weDMxM2MwZDt9LF8weDQxYzkoXzB4MTZlOGI3LF8weDQ4MjkzMCk7fWZ1bmN0aW9uIFcoXzB4MTQzMjBiKXt2YXIgXzB4M2UzMGExPV8weDI5ZDU5NjtsZXQgXzB4MWY0NGQ3PWZ1bmN0aW9uKF8weDJiZWMyMCxfMHgxMjcwOWQpe3JldHVybiBfMHgxMjcwOWQtXzB4MmJlYzIwO30sXzB4NGFkNTk5O2lmKF8weDE0MzIwYltfMHgzZTMwYTEoMHgyMjEpXSlfMHg0YWQ1OTk9ZnVuY3Rpb24oKXt2YXIgXzB4ZTgxYTRkPV8weDNlMzBhMTtyZXR1cm4gXzB4MTQzMjBiW18weGU4MWE0ZCgweDIyMSldW18weGU4MWE0ZCgweDFhNCldKCk7fTtlbHNle2lmKF8weDE0MzIwYltfMHgzZTMwYTEoMHgxZTcpXSYmXzB4MTQzMjBiW18weDNlMzBhMSgweDFlNyldWydocnRpbWUnXSYmXzB4MTQzMjBiW18weDNlMzBhMSgweDFlNyldPy5bXzB4M2UzMGExKDB4MWViKV0/LltfMHgzZTMwYTEoMHgyMmYpXSE9PV8weDNlMzBhMSgweDIyMykpXzB4NGFkNTk5PWZ1bmN0aW9uKCl7dmFyIF8weDE1YTJlYj1fMHgzZTMwYTE7cmV0dXJuIF8weDE0MzIwYltfMHgxNWEyZWIoMHgxZTcpXVtfMHgxNWEyZWIoMHgxYWIpXSgpO30sXzB4MWY0NGQ3PWZ1bmN0aW9uKF8weDE1NmY5NSxfMHgzYmMwOTMpe3JldHVybiAweDNlOCooXzB4M2JjMDkzWzB4MF0tXzB4MTU2Zjk1WzB4MF0pKyhfMHgzYmMwOTNbMHgxXS1fMHgxNTZmOTVbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4MTEyNzhmfT1yZXF1aXJlKF8weDNlMzBhMSgweDFlMykpO18weDRhZDU5OT1mdW5jdGlvbigpe3ZhciBfMHg1MmI1ZDY9XzB4M2UzMGExO3JldHVybiBfMHgxMTI3OGZbXzB4NTJiNWQ2KDB4MWE0KV0oKTt9O31jYXRjaHtfMHg0YWQ1OTk9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHgxZjQ0ZDcsJ3RpbWVTdGFtcCc6XzB4NGFkNTk5LCdub3cnOigpPT5EYXRlWydub3cnXSgpfTt9ZnVuY3Rpb24gSihfMHg1NTQ3ZmUsXzB4NTcyMmU2LF8weDNhZjc5MSl7dmFyIF8weDIzZmJmND1fMHgyOWQ1OTY7aWYoXzB4NTU0N2ZlWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXSE9PXZvaWQgMHgwKXJldHVybiBfMHg1NTQ3ZmVbXzB4MjNmYmY0KDB4MTZjKV07bGV0IF8weDQwMzJjND1fMHg1NTQ3ZmVbJ3Byb2Nlc3MnXT8uW18weDIzZmJmNCgweDFiYildPy5bXzB4MjNmYmY0KDB4MWVlKV18fF8weDU1NDdmZVtfMHgyM2ZiZjQoMHgxZTcpXT8uWydlbnYnXT8uW18weDIzZmJmNCgweDIyZildPT09XzB4MjNmYmY0KDB4MjIzKTtyZXR1cm4gXzB4NDAzMmM0JiZfMHgzYWY3OTE9PT1fMHgyM2ZiZjQoMHgyMTkpP18weDU1NDdmZVtfMHgyM2ZiZjQoMHgxNmMpXT0hMHgxOl8weDU1NDdmZVtfMHgyM2ZiZjQoMHgxNmMpXT1fMHg0MDMyYzR8fCFfMHg1NzIyZTZ8fF8weDU1NDdmZVtfMHgyM2ZiZjQoMHgxZDIpXT8uWydob3N0bmFtZSddJiZfMHg1NzIyZTZbXzB4MjNmYmY0KDB4MWM3KV0oXzB4NTU0N2ZlWydsb2NhdGlvbiddW18weDIzZmJmNCgweDE2ZildKSxfMHg1NTQ3ZmVbXzB4MjNmYmY0KDB4MTZjKV07fWZ1bmN0aW9uIFkoXzB4NDg1ZDNhLF8weDQxNDU3ZCxfMHhkNDk0YTMsXzB4MjRjYzlmKXt2YXIgXzB4NDhmZjRmPV8weDI5ZDU5NjtfMHg0ODVkM2E9XzB4NDg1ZDNhLF8weDQxNDU3ZD1fMHg0MTQ1N2QsXzB4ZDQ5NGEzPV8weGQ0OTRhMyxfMHgyNGNjOWY9XzB4MjRjYzlmO2xldCBfMHgxNTYyYjk9VyhfMHg0ODVkM2EpLF8weDI0ZjRjND1fMHgxNTYyYjlbJ2VsYXBzZWQnXSxfMHgyYzZmZDg9XzB4MTU2MmI5Wyd0aW1lU3RhbXAnXTtjbGFzcyBfMHgxYzRkMjh7Y29uc3RydWN0b3IoKXt2YXIgXzB4NGQwZmI4PV8weDQxYzk7dGhpc1snX2tleVN0clJlZ0V4cCddPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg0ZDBmYjgoMHgxNjgpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4NGQwZmI4KDB4MWU4KV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHg0ZDBmYjgoMHgxN2MpXT1fMHg0ODVkM2FbXzB4NGQwZmI4KDB4MjA2KV0sdGhpc1tfMHg0ZDBmYjgoMHgxZmQpXT1fMHg0ODVkM2FbXzB4NGQwZmI4KDB4MTkxKV0sdGhpc1tfMHg0ZDBmYjgoMHgxNTkpXT1PYmplY3RbJ2dldE93blByb3BlcnR5RGVzY3JpcHRvciddLHRoaXNbXzB4NGQwZmI4KDB4MWJmKV09T2JqZWN0W18weDRkMGZiOCgweDFkOSldLHRoaXNbXzB4NGQwZmI4KDB4MWVmKV09XzB4NDg1ZDNhWydTeW1ib2wnXSx0aGlzW18weDRkMGZiOCgweDIyYyldPVJlZ0V4cFtfMHg0ZDBmYjgoMHgxODApXVtfMHg0ZDBmYjgoMHgxYmUpXSx0aGlzWydfZGF0ZVRvU3RyaW5nJ109RGF0ZVtfMHg0ZDBmYjgoMHgxODApXVsndG9TdHJpbmcnXTt9WydzZXJpYWxpemUnXShfMHgxM2I2MmEsXzB4NGQ1NjgzLF8weDNkZmM4YixfMHgxNjg2NTUpe3ZhciBfMHgxYmY5NWU9XzB4NDFjOSxfMHgyM2Q0ZDM9dGhpcyxfMHg1ZDE2MGU9XzB4M2RmYzhiW18weDFiZjk1ZSgweDFkNCldO2Z1bmN0aW9uIF8weDIzMzJiMyhfMHgxNjgxYzgsXzB4NTcxMmU3LF8weDNlZmMyNyl7dmFyIF8weDFmNGQyNz1fMHgxYmY5NWU7XzB4NTcxMmU3W18weDFmNGQyNygweDFmOSldPV8weDFmNGQyNygweDE5ZiksXzB4NTcxMmU3W18weDFmNGQyNygweDIyOCldPV8weDE2ODFjOFtfMHgxZjRkMjcoMHgyMDApXSxfMHgzMDk4ZTY9XzB4M2VmYzI3W18weDFmNGQyNygweDFlZSldW18weDFmNGQyNygweDFmYSldLF8weDNlZmMyN1tfMHgxZjRkMjcoMHgxZWUpXVtfMHgxZjRkMjcoMHgxZmEpXT1fMHg1NzEyZTcsXzB4MjNkNGQzW18weDFmNGQyNygweDIwMildKF8weDU3MTJlNyxfMHgzZWZjMjcpO310cnl7XzB4M2RmYzhiW18weDFiZjk1ZSgweDIzOCldKyssXzB4M2RmYzhiW18weDFiZjk1ZSgweDFkNCldJiZfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjIwKV1bJ3B1c2gnXShfMHg0ZDU2ODMpO3ZhciBfMHgyNGVkZGQsXzB4NTMwOGEzLF8weDQ0YWFjOCxfMHg4NWRkNDksXzB4MTY2MDcxPVtdLF8weDQxNDUyMT1bXSxfMHgxZTlmODMsXzB4MzE1MmUzPXRoaXNbXzB4MWJmOTVlKDB4MWE4KV0oXzB4NGQ1NjgzKSxfMHg0YzdkMmI9XzB4MzE1MmUzPT09XzB4MWJmOTVlKDB4MjMwKSxfMHgzMGNiNmY9ITB4MSxfMHgyODYyMjA9XzB4MzE1MmUzPT09XzB4MWJmOTVlKDB4MjFkKSxfMHg0YzY4NmU9dGhpc1tfMHgxYmY5NWUoMHgxOTgpXShfMHgzMTUyZTMpLF8weDQ1NTU3MD10aGlzW18weDFiZjk1ZSgweDE1YSldKF8weDMxNTJlMyksXzB4NGVkMTliPV8weDRjNjg2ZXx8XzB4NDU1NTcwLF8weDMyMGMzND17fSxfMHgyZjE2ZWM9MHgwLF8weDUwOWJkOT0hMHgxLF8weDMwOThlNixfMHgxYjU0ODk9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDNkZmM4YlsnZGVwdGgnXSl7aWYoXzB4NGM3ZDJiKXtpZihfMHg1MzA4YTM9XzB4NGQ1NjgzW18weDFiZjk1ZSgweDFiYSldLF8weDUzMDhhMz5fMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjE4KV0pe2ZvcihfMHg0NGFhYzg9MHgwLF8weDg1ZGQ0OT1fMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjE4KV0sXzB4MjRlZGRkPV8weDQ0YWFjODtfMHgyNGVkZGQ8XzB4ODVkZDQ5O18weDI0ZWRkZCsrKV8weDQxNDUyMVtfMHgxYmY5NWUoMHgxYTMpXShfMHgyM2Q0ZDNbXzB4MWJmOTVlKDB4MWI0KV0oXzB4MTY2MDcxLF8weDRkNTY4MyxfMHgzMTUyZTMsXzB4MjRlZGRkLF8weDNkZmM4YikpO18weDEzYjYyYVtfMHgxYmY5NWUoMHgxOTkpXT0hMHgwO31lbHNle2ZvcihfMHg0NGFhYzg9MHgwLF8weDg1ZGQ0OT1fMHg1MzA4YTMsXzB4MjRlZGRkPV8weDQ0YWFjODtfMHgyNGVkZGQ8XzB4ODVkZDQ5O18weDI0ZWRkZCsrKV8weDQxNDUyMVtfMHgxYmY5NWUoMHgxYTMpXShfMHgyM2Q0ZDNbXzB4MWJmOTVlKDB4MWI0KV0oXzB4MTY2MDcxLF8weDRkNTY4MyxfMHgzMTUyZTMsXzB4MjRlZGRkLF8weDNkZmM4YikpO31fMHgzZGZjOGJbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rPV8weDQxNDUyMVtfMHgxYmY5NWUoMHgxYmEpXTt9aWYoIShfMHgzMTUyZTM9PT0nbnVsbCd8fF8weDMxNTJlMz09PSd1bmRlZmluZWQnKSYmIV8weDRjNjg2ZSYmXzB4MzE1MmUzIT09XzB4MWJmOTVlKDB4MTdkKSYmXzB4MzE1MmUzIT09XzB4MWJmOTVlKDB4MjEwKSYmXzB4MzE1MmUzIT09XzB4MWJmOTVlKDB4MTcxKSl7dmFyIF8weDM0Zjk3Yz1fMHgxNjg2NTVbXzB4MWJmOTVlKDB4MWRkKV18fF8weDNkZmM4YltfMHgxYmY5NWUoMHgxZGQpXTtpZih0aGlzWydfaXNTZXQnXShfMHg0ZDU2ODMpPyhfMHgyNGVkZGQ9MHgwLF8weDRkNTY4M1tfMHgxYmY5NWUoMHgxYWQpXShmdW5jdGlvbihfMHgxMzMwN2Epe3ZhciBfMHg4MTU5M2E9XzB4MWJmOTVlO2lmKF8weDJmMTZlYysrLF8weDNkZmM4YltfMHg4MTU5M2EoMHgyMzkpXSsrLF8weDJmMTZlYz5fMHgzNGY5N2Mpe18weDUwOWJkOT0hMHgwO3JldHVybjt9aWYoIV8weDNkZmM4YlsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHgzZGZjOGJbXzB4ODE1OTNhKDB4MWQ0KV0mJl8weDNkZmM4YltfMHg4MTU5M2EoMHgyMzkpXT5fMHgzZGZjOGJbXzB4ODE1OTNhKDB4MTlkKV0pe18weDUwOWJkOT0hMHgwO3JldHVybjt9XzB4NDE0NTIxW18weDgxNTkzYSgweDFhMyldKF8weDIzZDRkM1tfMHg4MTU5M2EoMHgxYjQpXShfMHgxNjYwNzEsXzB4NGQ1NjgzLF8weDgxNTkzYSgweDIyNyksXzB4MjRlZGRkKyssXzB4M2RmYzhiLGZ1bmN0aW9uKF8weDVkNjVhMCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDVkNjVhMDt9O30oXzB4MTMzMDdhKSkpO30pKTp0aGlzW18weDFiZjk1ZSgweDE2ZSldKF8weDRkNTY4MykmJl8weDRkNTY4M1tfMHgxYmY5NWUoMHgxYWQpXShmdW5jdGlvbihfMHgyOWI5MTksXzB4MzUzNDgzKXt2YXIgXzB4MTU2YjFkPV8weDFiZjk1ZTtpZihfMHgyZjE2ZWMrKyxfMHgzZGZjOGJbXzB4MTU2YjFkKDB4MjM5KV0rKyxfMHgyZjE2ZWM+XzB4MzRmOTdjKXtfMHg1MDliZDk9ITB4MDtyZXR1cm47fWlmKCFfMHgzZGZjOGJbXzB4MTU2YjFkKDB4MWRlKV0mJl8weDNkZmM4YltfMHgxNTZiMWQoMHgxZDQpXSYmXzB4M2RmYzhiWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDNkZmM4YltfMHgxNTZiMWQoMHgxOWQpXSl7XzB4NTA5YmQ5PSEweDA7cmV0dXJuO312YXIgXzB4NTkzYzliPV8weDM1MzQ4M1sndG9TdHJpbmcnXSgpO18weDU5M2M5YltfMHgxNTZiMWQoMHgxYmEpXT4weDY0JiYoXzB4NTkzYzliPV8weDU5M2M5YltfMHgxNTZiMWQoMHgyMDgpXSgweDAsMHg2NCkrJy4uLicpLF8weDQxNDUyMVtfMHgxNTZiMWQoMHgxYTMpXShfMHgyM2Q0ZDNbJ19hZGRQcm9wZXJ0eSddKF8weDE2NjA3MSxfMHg0ZDU2ODMsJ01hcCcsXzB4NTkzYzliLF8weDNkZmM4YixmdW5jdGlvbihfMHgzMjRmNTYpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzMjRmNTY7fTt9KF8weDI5YjkxOSkpKTt9KSwhXzB4MzBjYjZmKXt0cnl7Zm9yKF8weDFlOWY4MyBpbiBfMHg0ZDU2ODMpaWYoIShfMHg0YzdkMmImJl8weDFiNTQ4OVtfMHgxYmY5NWUoMHgxNTUpXShfMHgxZTlmODMpKSYmIXRoaXNbXzB4MWJmOTVlKDB4MTc5KV0oXzB4NGQ1NjgzLF8weDFlOWY4MyxfMHgzZGZjOGIpKXtpZihfMHgyZjE2ZWMrKyxfMHgzZGZjOGJbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgyZjE2ZWM+XzB4MzRmOTdjKXtfMHg1MDliZDk9ITB4MDticmVhazt9aWYoIV8weDNkZmM4YlsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWQ0KV0mJl8weDNkZmM4YlsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgzZGZjOGJbXzB4MWJmOTVlKDB4MTlkKV0pe18weDUwOWJkOT0hMHgwO2JyZWFrO31fMHg0MTQ1MjFbXzB4MWJmOTVlKDB4MWEzKV0oXzB4MjNkNGQzW18weDFiZjk1ZSgweDFkMSldKF8weDE2NjA3MSxfMHgzMjBjMzQsXzB4NGQ1NjgzLF8weDMxNTJlMyxfMHgxZTlmODMsXzB4M2RmYzhiKSk7fX1jYXRjaHt9aWYoXzB4MzIwYzM0W18weDFiZjk1ZSgweDE5MildPSEweDAsXzB4Mjg2MjIwJiYoXzB4MzIwYzM0WydfcF9uYW1lJ109ITB4MCksIV8weDUwOWJkOSl7dmFyIF8weDEwOTU1Yj1bXVtfMHgxYmY5NWUoMHgyMTEpXSh0aGlzWydfZ2V0T3duUHJvcGVydHlOYW1lcyddKF8weDRkNTY4MykpW18weDFiZjk1ZSgweDIxMSldKHRoaXNbXzB4MWJmOTVlKDB4MWM2KV0oXzB4NGQ1NjgzKSk7Zm9yKF8weDI0ZWRkZD0weDAsXzB4NTMwOGEzPV8weDEwOTU1YltfMHgxYmY5NWUoMHgxYmEpXTtfMHgyNGVkZGQ8XzB4NTMwOGEzO18weDI0ZWRkZCsrKWlmKF8weDFlOWY4Mz1fMHgxMDk1NWJbXzB4MjRlZGRkXSwhKF8weDRjN2QyYiYmXzB4MWI1NDg5W18weDFiZjk1ZSgweDE1NSldKF8weDFlOWY4M1tfMHgxYmY5NWUoMHgxYmUpXSgpKSkmJiF0aGlzW18weDFiZjk1ZSgweDE3OSldKF8weDRkNTY4MyxfMHgxZTlmODMsXzB4M2RmYzhiKSYmIV8weDMyMGMzNFtfMHgxYmY5NWUoMHgxYWEpK18weDFlOWY4M1sndG9TdHJpbmcnXSgpXSl7aWYoXzB4MmYxNmVjKyssXzB4M2RmYzhiW18weDFiZjk1ZSgweDIzOSldKyssXzB4MmYxNmVjPl8weDM0Zjk3Yyl7XzB4NTA5YmQ5PSEweDA7YnJlYWs7fWlmKCFfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWRlKV0mJl8weDNkZmM4YltfMHgxYmY5NWUoMHgxZDQpXSYmXzB4M2RmYzhiW18weDFiZjk1ZSgweDIzOSldPl8weDNkZmM4YltfMHgxYmY5NWUoMHgxOWQpXSl7XzB4NTA5YmQ5PSEweDA7YnJlYWs7fV8weDQxNDUyMVsncHVzaCddKF8weDIzZDRkM1tfMHgxYmY5NWUoMHgxZDEpXShfMHgxNjYwNzEsXzB4MzIwYzM0LF8weDRkNTY4MyxfMHgzMTUyZTMsXzB4MWU5ZjgzLF8weDNkZmM4YikpO319fX19aWYoXzB4MTNiNjJhW18weDFiZjk1ZSgweDFmOSldPV8weDMxNTJlMyxfMHg0ZWQxOWI/KF8weDEzYjYyYVtfMHgxYmY5NWUoMHgxZTEpXT1fMHg0ZDU2ODNbJ3ZhbHVlT2YnXSgpLHRoaXNbXzB4MWJmOTVlKDB4MWI3KV0oXzB4MzE1MmUzLF8weDEzYjYyYSxfMHgzZGZjOGIsXzB4MTY4NjU1KSk6XzB4MzE1MmUzPT09XzB4MWJmOTVlKDB4MWE5KT9fMHgxM2I2MmFbXzB4MWJmOTVlKDB4MWUxKV09dGhpc1tfMHgxYmY5NWUoMHgxYTIpXVtfMHgxYmY5NWUoMHgxOGMpXShfMHg0ZDU2ODMpOl8weDMxNTJlMz09PSdiaWdpbnQnP18weDEzYjYyYVtfMHgxYmY5NWUoMHgxZTEpXT1fMHg0ZDU2ODNbJ3RvU3RyaW5nJ10oKTpfMHgzMTUyZTM9PT0nUmVnRXhwJz9fMHgxM2I2MmFbJ3ZhbHVlJ109dGhpc1tfMHgxYmY5NWUoMHgyMmMpXVtfMHgxYmY5NWUoMHgxOGMpXShfMHg0ZDU2ODMpOl8weDMxNTJlMz09PV8weDFiZjk1ZSgweDFhMCkmJnRoaXNbXzB4MWJmOTVlKDB4MWVmKV0/XzB4MTNiNjJhWyd2YWx1ZSddPXRoaXNbXzB4MWJmOTVlKDB4MWVmKV1bXzB4MWJmOTVlKDB4MTgwKV1bXzB4MWJmOTVlKDB4MWJlKV1bXzB4MWJmOTVlKDB4MThjKV0oXzB4NGQ1NjgzKTohXzB4M2RmYzhiWydkZXB0aCddJiYhKF8weDMxNTJlMz09PV8weDFiZjk1ZSgweDE2Nil8fF8weDMxNTJlMz09PV8weDFiZjk1ZSgweDIwNikpJiYoZGVsZXRlIF8weDEzYjYyYVsndmFsdWUnXSxfMHgxM2I2MmFbXzB4MWJmOTVlKDB4MjNjKV09ITB4MCksXzB4NTA5YmQ5JiYoXzB4MTNiNjJhW18weDFiZjk1ZSgweDFhYyldPSEweDApLF8weDMwOThlNj1fMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWVlKV1bXzB4MWJmOTVlKDB4MWZhKV0sXzB4M2RmYzhiW18weDFiZjk1ZSgweDFlZSldW18weDFiZjk1ZSgweDFmYSldPV8weDEzYjYyYSx0aGlzW18weDFiZjk1ZSgweDIwMildKF8weDEzYjYyYSxfMHgzZGZjOGIpLF8weDQxNDUyMVsnbGVuZ3RoJ10pe2ZvcihfMHgyNGVkZGQ9MHgwLF8weDUzMDhhMz1fMHg0MTQ1MjFbXzB4MWJmOTVlKDB4MWJhKV07XzB4MjRlZGRkPF8weDUzMDhhMztfMHgyNGVkZGQrKylfMHg0MTQ1MjFbXzB4MjRlZGRkXShfMHgyNGVkZGQpO31fMHgxNjYwNzFbXzB4MWJmOTVlKDB4MWJhKV0mJihfMHgxM2I2MmFbXzB4MWJmOTVlKDB4MWRkKV09XzB4MTY2MDcxKTt9Y2F0Y2goXzB4MjdiNGUyKXtfMHgyMzMyYjMoXzB4MjdiNGUyLF8weDEzYjYyYSxfMHgzZGZjOGIpO31yZXR1cm4gdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDRkNTY4MyxfMHgxM2I2MmEpLHRoaXNbXzB4MWJmOTVlKDB4MWQzKV0oXzB4MTNiNjJhLF8weDNkZmM4YiksXzB4M2RmYzhiWydub2RlJ11bJ2N1cnJlbnQnXT1fMHgzMDk4ZTYsXzB4M2RmYzhiW18weDFiZjk1ZSgweDIzOCldLS0sXzB4M2RmYzhiW18weDFiZjk1ZSgweDFkNCldPV8weDVkMTYwZSxfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWQ0KV0mJl8weDNkZmM4YltfMHgxYmY5NWUoMHgyMjApXVtfMHgxYmY5NWUoMHgxYTEpXSgpLF8weDEzYjYyYTt9W18weDQ4ZmY0ZigweDFjNildKF8weDEwZWVhMCl7dmFyIF8weDRlYWI5ZD1fMHg0OGZmNGY7cmV0dXJuIE9iamVjdFtfMHg0ZWFiOWQoMHgxOGQpXT9PYmplY3RbJ2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDEwZWVhMCk6W107fVsnX2lzU2V0J10oXzB4MjYwYTE1KXt2YXIgXzB4NGY2OTFhPV8weDQ4ZmY0ZjtyZXR1cm4hIShfMHgyNjBhMTUmJl8weDQ4NWQzYVtfMHg0ZjY5MWEoMHgyMjcpXSYmdGhpc1tfMHg0ZjY5MWEoMHgxNzUpXShfMHgyNjBhMTUpPT09XzB4NGY2OTFhKDB4MjFmKSYmXzB4MjYwYTE1W18weDRmNjkxYSgweDFhZCldKTt9WydfYmxhY2tsaXN0ZWRQcm9wZXJ0eSddKF8weDQ2NWQwOCxfMHgyZDk3Y2MsXzB4NTNiOTcwKXt2YXIgXzB4MWQzZmRiPV8weDQ4ZmY0ZjtyZXR1cm4gXzB4NTNiOTcwW18weDFkM2ZkYigweDFmMyldP3R5cGVvZiBfMHg0NjVkMDhbXzB4MmQ5N2NjXT09XzB4MWQzZmRiKDB4MjFkKTohMHgxO31bXzB4NDhmZjRmKDB4MWE4KV0oXzB4NTM2MjQ3KXt2YXIgXzB4MmRiMTdjPV8weDQ4ZmY0ZixfMHg1YjZkMjk9Jyc7cmV0dXJuIF8weDViNmQyOT10eXBlb2YgXzB4NTM2MjQ3LF8weDViNmQyOT09PV8weDJkYjE3YygweDE5NCk/dGhpc1tfMHgyZGIxN2MoMHgxNzUpXShfMHg1MzYyNDcpPT09XzB4MmRiMTdjKDB4MWVkKT9fMHg1YjZkMjk9XzB4MmRiMTdjKDB4MjMwKTp0aGlzW18weDJkYjE3YygweDE3NSldKF8weDUzNjI0Nyk9PT1fMHgyZGIxN2MoMHgxYzIpP18weDViNmQyOT1fMHgyZGIxN2MoMHgxYTkpOnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDUzNjI0Nyk9PT1fMHgyZGIxN2MoMHgyMzQpP18weDViNmQyOT0nYmlnaW50JzpfMHg1MzYyNDc9PT1udWxsP18weDViNmQyOT1fMHgyZGIxN2MoMHgxNjYpOl8weDUzNjI0N1tfMHgyZGIxN2MoMHgxYjApXSYmKF8weDViNmQyOT1fMHg1MzYyNDdbJ2NvbnN0cnVjdG9yJ11bXzB4MmRiMTdjKDB4MTk1KV18fF8weDViNmQyOSk6XzB4NWI2ZDI5PT09J3VuZGVmaW5lZCcmJnRoaXNbXzB4MmRiMTdjKDB4MWZkKV0mJl8weDUzNjI0NyBpbnN0YW5jZW9mIHRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddJiYoXzB4NWI2ZDI5PV8weDJkYjE3YygweDE5MSkpLF8weDViNmQyOTt9W18weDQ4ZmY0ZigweDE3NSldKF8weDRkNGFjNil7dmFyIF8weDIyZmY4Mj1fMHg0OGZmNGY7cmV0dXJuIE9iamVjdFtfMHgyMmZmODIoMHgxODApXVtfMHgyMmZmODIoMHgxYmUpXVtfMHgyMmZmODIoMHgxOGMpXShfMHg0ZDRhYzYpO31bXzB4NDhmZjRmKDB4MTk4KV0oXzB4MmJlMDZkKXt2YXIgXzB4MWUyNzcwPV8weDQ4ZmY0ZjtyZXR1cm4gXzB4MmJlMDZkPT09XzB4MWUyNzcwKDB4MjNlKXx8XzB4MmJlMDZkPT09XzB4MWUyNzcwKDB4MWY3KXx8XzB4MmJlMDZkPT09XzB4MWUyNzcwKDB4MTc0KTt9WydfaXNQcmltaXRpdmVXcmFwcGVyVHlwZSddKF8weDFmNGMxNCl7dmFyIF8weDM2NGU3Yj1fMHg0OGZmNGY7cmV0dXJuIF8weDFmNGMxND09PV8weDM2NGU3YigweDIwYyl8fF8weDFmNGMxND09PSdTdHJpbmcnfHxfMHgxZjRjMTQ9PT1fMHgzNjRlN2IoMHgyMTMpO31bXzB4NDhmZjRmKDB4MWI0KV0oXzB4YWRiMmI3LF8weDNhN2E1ZixfMHgyYTZjZTYsXzB4M2RkMjdlLF8weDFjMDYyMCxfMHgxYjhkODApe3ZhciBfMHg0MGQ1ZGI9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4NTc3NDExKXt2YXIgXzB4NTgzZGYzPV8weDQxYzksXzB4MWI1YWRlPV8weDFjMDYyMFtfMHg1ODNkZjMoMHgxZWUpXVtfMHg1ODNkZjMoMHgxZmEpXSxfMHgzOTIzZDM9XzB4MWMwNjIwW18weDU4M2RmMygweDFlZSldW18weDU4M2RmMygweDIzZCldLF8weDc4YTg4MT1fMHgxYzA2MjBbXzB4NTgzZGYzKDB4MWVlKV1bXzB4NTgzZGYzKDB4MTYxKV07XzB4MWMwNjIwW18weDU4M2RmMygweDFlZSldW18weDU4M2RmMygweDE2MSldPV8weDFiNWFkZSxfMHgxYzA2MjBbJ25vZGUnXVtfMHg1ODNkZjMoMHgyM2QpXT10eXBlb2YgXzB4M2RkMjdlPT1fMHg1ODNkZjMoMHgxNzQpP18weDNkZDI3ZTpfMHg1Nzc0MTEsXzB4YWRiMmI3W18weDU4M2RmMygweDFhMyldKF8weDQwZDVkYlsnX3Byb3BlcnR5J10oXzB4M2E3YTVmLF8weDJhNmNlNixfMHgzZGQyN2UsXzB4MWMwNjIwLF8weDFiOGQ4MCkpLF8weDFjMDYyMFtfMHg1ODNkZjMoMHgxZWUpXVtfMHg1ODNkZjMoMHgxNjEpXT1fMHg3OGE4ODEsXzB4MWMwNjIwW18weDU4M2RmMygweDFlZSldW18weDU4M2RmMygweDIzZCldPV8weDM5MjNkMzt9O31bJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDJlYTQxNyxfMHg0YzRlZTcsXzB4MWI2OTA4LF8weDUyMTFhYyxfMHg1NTNiYTYsXzB4NWFhMWFkLF8weDE1YzcyOSl7dmFyIF8weDE3YjdmOT1fMHg0OGZmNGYsXzB4MWQ4YjNlPXRoaXM7cmV0dXJuIF8weDRjNGVlN1tfMHgxN2I3ZjkoMHgxYWEpK18weDU1M2JhNltfMHgxN2I3ZjkoMHgxYmUpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDJlMzg5NSl7dmFyIF8weDE0YWIzNT1fMHgxN2I3ZjksXzB4NThjNGQ3PV8weDVhYTFhZFsnbm9kZSddW18weDE0YWIzNSgweDFmYSldLF8weDIyZjE4YT1fMHg1YWExYWRbXzB4MTRhYjM1KDB4MWVlKV1bXzB4MTRhYjM1KDB4MjNkKV0sXzB4MmY4MjhmPV8weDVhYTFhZFsnbm9kZSddW18weDE0YWIzNSgweDE2MSldO18weDVhYTFhZFtfMHgxNGFiMzUoMHgxZWUpXVtfMHgxNGFiMzUoMHgxNjEpXT1fMHg1OGM0ZDcsXzB4NWFhMWFkW18weDE0YWIzNSgweDFlZSldW18weDE0YWIzNSgweDIzZCldPV8weDJlMzg5NSxfMHgyZWE0MTdbXzB4MTRhYjM1KDB4MWEzKV0oXzB4MWQ4YjNlWydfcHJvcGVydHknXShfMHgxYjY5MDgsXzB4NTIxMWFjLF8weDU1M2JhNixfMHg1YWExYWQsXzB4MTVjNzI5KSksXzB4NWFhMWFkWydub2RlJ11bJ3BhcmVudCddPV8weDJmODI4ZixfMHg1YWExYWRbXzB4MTRhYjM1KDB4MWVlKV1bXzB4MTRhYjM1KDB4MjNkKV09XzB4MjJmMThhO307fVtfMHg0OGZmNGYoMHgyM2IpXShfMHgzNmRlN2EsXzB4MjQ0MjBlLF8weDJhZjhlNSxfMHg0OGZjMGYsXzB4NGJiY2Q1KXt2YXIgXzB4NTY5ZjYyPV8weDQ4ZmY0ZixfMHg0YWU3ZmQ9dGhpcztfMHg0YmJjZDV8fChfMHg0YmJjZDU9ZnVuY3Rpb24oXzB4MTUxM2NlLF8weDVjZDBlZCl7cmV0dXJuIF8weDE1MTNjZVtfMHg1Y2QwZWRdO30pO3ZhciBfMHgzYTY2ZmU9XzB4MmFmOGU1W18weDU2OWY2MigweDFiZSldKCksXzB4MjJjNWQyPV8weDQ4ZmMwZltfMHg1NjlmNjIoMHgxZTApXXx8e30sXzB4NTExMGY1PV8weDQ4ZmMwZlsnZGVwdGgnXSxfMHgyYmY4YTg9XzB4NDhmYzBmWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ107dHJ5e3ZhciBfMHg1YjMzYzc9dGhpc1snX2lzTWFwJ10oXzB4MzZkZTdhKSxfMHgzOTA0MWU9XzB4M2E2NmZlO18weDViMzNjNyYmXzB4MzkwNDFlWzB4MF09PT0nXFxcXHgyNycmJihfMHgzOTA0MWU9XzB4MzkwNDFlW18weDU2OWY2MigweDFlNildKDB4MSxfMHgzOTA0MWVbXzB4NTY5ZjYyKDB4MWJhKV0tMHgyKSk7dmFyIF8weDQ1YWZhMT1fMHg0OGZjMGZbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDIyYzVkMltfMHg1NjlmNjIoMHgxYWEpK18weDM5MDQxZV07XzB4NDVhZmExJiYoXzB4NDhmYzBmW18weDU2OWY2MigweDE3YildPV8weDQ4ZmMwZlsnZGVwdGgnXSsweDEpLF8weDQ4ZmMwZltfMHg1NjlmNjIoMHgxZGUpXT0hIV8weDQ1YWZhMTt2YXIgXzB4NWM3YzU1PXR5cGVvZiBfMHgyYWY4ZTU9PV8weDU2OWY2MigweDFhMCksXzB4MzQ5ZjkwPXsnbmFtZSc6XzB4NWM3YzU1fHxfMHg1YjMzYzc/XzB4M2E2NmZlOnRoaXNbXzB4NTY5ZjYyKDB4MWVhKV0oXzB4M2E2NmZlKX07aWYoXzB4NWM3YzU1JiYoXzB4MzQ5ZjkwW18weDU2OWY2MigweDFhMCldPSEweDApLCEoXzB4MjQ0MjBlPT09XzB4NTY5ZjYyKDB4MjMwKXx8XzB4MjQ0MjBlPT09XzB4NTY5ZjYyKDB4MTVlKSkpe3ZhciBfMHg0MjVmNmQ9dGhpc1tfMHg1NjlmNjIoMHgxNTkpXShfMHgzNmRlN2EsXzB4MmFmOGU1KTtpZihfMHg0MjVmNmQmJihfMHg0MjVmNmRbXzB4NTY5ZjYyKDB4MWQ4KV0mJihfMHgzNDlmOTBbXzB4NTY5ZjYyKDB4MWY4KV09ITB4MCksXzB4NDI1ZjZkW18weDU2OWY2MigweDFmYildJiYhXzB4NDVhZmExJiYhXzB4NDhmYzBmW18weDU2OWY2MigweDFiOSldKSlyZXR1cm4gXzB4MzQ5ZjkwW18weDU2OWY2MigweDFhNyldPSEweDAsdGhpc1tfMHg1NjlmNjIoMHgxNzIpXShfMHgzNDlmOTAsXzB4NDhmYzBmKSxfMHgzNDlmOTA7fXZhciBfMHg1M2FlMDc7dHJ5e18weDUzYWUwNz1fMHg0YmJjZDUoXzB4MzZkZTdhLF8weDJhZjhlNSk7fWNhdGNoKF8weDE4MjM5Yyl7cmV0dXJuIF8weDM0OWY5MD17J25hbWUnOl8weDNhNjZmZSwndHlwZSc6J3Vua25vd24nLCdlcnJvcic6XzB4MTgyMzljWydtZXNzYWdlJ119LHRoaXNbXzB4NTY5ZjYyKDB4MTcyKV0oXzB4MzQ5ZjkwLF8weDQ4ZmMwZiksXzB4MzQ5ZjkwO312YXIgXzB4NDJkNmRmPXRoaXNbXzB4NTY5ZjYyKDB4MWE4KV0oXzB4NTNhZTA3KSxfMHgzNzBhNjE9dGhpc1tfMHg1NjlmNjIoMHgxOTgpXShfMHg0MmQ2ZGYpO2lmKF8weDM0OWY5MFsndHlwZSddPV8weDQyZDZkZixfMHgzNzBhNjEpdGhpc1tfMHg1NjlmNjIoMHgxNzIpXShfMHgzNDlmOTAsXzB4NDhmYzBmLF8weDUzYWUwNyxmdW5jdGlvbigpe3ZhciBfMHg1MjVlODc9XzB4NTY5ZjYyO18weDM0OWY5MFtfMHg1MjVlODcoMHgxZTEpXT1fMHg1M2FlMDdbXzB4NTI1ZTg3KDB4MjI0KV0oKSwhXzB4NDVhZmExJiZfMHg0YWU3ZmRbXzB4NTI1ZTg3KDB4MWI3KV0oXzB4NDJkNmRmLF8weDM0OWY5MCxfMHg0OGZjMGYse30pO30pO2Vsc2V7dmFyIF8weDM0ZGQwNT1fMHg0OGZjMGZbJ2F1dG9FeHBhbmQnXSYmXzB4NDhmYzBmW18weDU2OWY2MigweDIzOCldPF8weDQ4ZmMwZlsnYXV0b0V4cGFuZE1heERlcHRoJ10mJl8weDQ4ZmMwZltfMHg1NjlmNjIoMHgyMjApXVsnaW5kZXhPZiddKF8weDUzYWUwNyk8MHgwJiZfMHg0MmQ2ZGYhPT1fMHg1NjlmNjIoMHgyMWQpJiZfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MjM5KV08XzB4NDhmYzBmW18weDU2OWY2MigweDE5ZCldO18weDM0ZGQwNXx8XzB4NDhmYzBmW18weDU2OWY2MigweDIzOCldPF8weDUxMTBmNXx8XzB4NDVhZmExPyh0aGlzW18weDU2OWY2MigweDE4MSldKF8weDM0OWY5MCxfMHg1M2FlMDcsXzB4NDhmYzBmLF8weDQ1YWZhMXx8e30pLHRoaXNbXzB4NTY5ZjYyKDB4MTliKV0oXzB4NTNhZTA3LF8weDM0OWY5MCkpOnRoaXNbXzB4NTY5ZjYyKDB4MTcyKV0oXzB4MzQ5ZjkwLF8weDQ4ZmMwZixfMHg1M2FlMDcsZnVuY3Rpb24oKXt2YXIgXzB4NWU0M2VmPV8weDU2OWY2MjtfMHg0MmQ2ZGY9PT1fMHg1ZTQzZWYoMHgxNjYpfHxfMHg0MmQ2ZGY9PT1fMHg1ZTQzZWYoMHgyMDYpfHwoZGVsZXRlIF8weDM0OWY5MFsndmFsdWUnXSxfMHgzNDlmOTBbJ2NhcHBlZCddPSEweDApO30pO31yZXR1cm4gXzB4MzQ5ZjkwO31maW5hbGx5e18weDQ4ZmMwZltfMHg1NjlmNjIoMHgxZTApXT1fMHgyMmM1ZDIsXzB4NDhmYzBmW18weDU2OWY2MigweDE3YildPV8weDUxMTBmNSxfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MWRlKV09XzB4MmJmOGE4O319W18weDQ4ZmY0ZigweDFiNyldKF8weDFiNjJmMSxfMHgxOGViNzEsXzB4Mzc5NDhmLF8weDFhYjVlZSl7dmFyIF8weDFkOGMwNj1fMHg0OGZmNGYsXzB4NDg3NzZkPV8weDFhYjVlZVsnc3RyTGVuZ3RoJ118fF8weDM3OTQ4ZltfMHgxZDhjMDYoMHgxZjQpXTtpZigoXzB4MWI2MmYxPT09XzB4MWQ4YzA2KDB4MWY3KXx8XzB4MWI2MmYxPT09XzB4MWQ4YzA2KDB4MTdkKSkmJl8weDE4ZWI3MVtfMHgxZDhjMDYoMHgxZTEpXSl7bGV0IF8weDVkOGY2YT1fMHgxOGViNzFbJ3ZhbHVlJ11bXzB4MWQ4YzA2KDB4MWJhKV07XzB4Mzc5NDhmW18weDFkOGMwNigweDFlYyldKz1fMHg1ZDhmNmEsXzB4Mzc5NDhmW18weDFkOGMwNigweDFlYyldPl8weDM3OTQ4ZltfMHgxZDhjMDYoMHgxY2EpXT8oXzB4MThlYjcxW18weDFkOGMwNigweDIzYyldPScnLGRlbGV0ZSBfMHgxOGViNzFbJ3ZhbHVlJ10pOl8weDVkOGY2YT5fMHg0ODc3NmQmJihfMHgxOGViNzFbXzB4MWQ4YzA2KDB4MjNjKV09XzB4MThlYjcxWyd2YWx1ZSddWydzdWJzdHInXSgweDAsXzB4NDg3NzZkKSxkZWxldGUgXzB4MThlYjcxW18weDFkOGMwNigweDFlMSldKTt9fVtfMHg0OGZmNGYoMHgxNmUpXShfMHg1ZTRhYzMpe3ZhciBfMHg5OGIxMDk9XzB4NDhmZjRmO3JldHVybiEhKF8weDVlNGFjMyYmXzB4NDg1ZDNhW18weDk4YjEwOSgweDE2NSldJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg1ZTRhYzMpPT09J1tvYmplY3RcXFxceDIwTWFwXScmJl8weDVlNGFjM1tfMHg5OGIxMDkoMHgxYWQpXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weDVlMGI4Mil7dmFyIF8weDI3ZmNmNT1fMHg0OGZmNGY7aWYoXzB4NWUwYjgyW18weDI3ZmNmNSgweDFkMCldKC9eXFxcXGQrJC8pKXJldHVybiBfMHg1ZTBiODI7dmFyIF8weDEyZjViNDt0cnl7XzB4MTJmNWI0PUpTT05bJ3N0cmluZ2lmeSddKCcnK18weDVlMGI4Mik7fWNhdGNoe18weDEyZjViND0nXFxcXHgyMicrdGhpc1tfMHgyN2ZjZjUoMHgxNzUpXShfMHg1ZTBiODIpKydcXFxceDIyJzt9cmV0dXJuIF8weDEyZjViNFtfMHgyN2ZjZjUoMHgxZDApXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDEyZjViND1fMHgxMmY1YjRbXzB4MjdmY2Y1KDB4MWU2KV0oMHgxLF8weDEyZjViNFtfMHgyN2ZjZjUoMHgxYmEpXS0weDIpOl8weDEyZjViND1fMHgxMmY1YjRbXzB4MjdmY2Y1KDB4MTljKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHgyN2ZjZjUoMHgxOWMpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVtfMHgyN2ZjZjUoMHgxOWMpXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4MTJmNWI0O31bXzB4NDhmZjRmKDB4MTcyKV0oXzB4MjRkNjE3LF8weDQyMTM4OCxfMHgxMGRhYzMsXzB4MzYxMDQwKXt2YXIgXzB4NDE4YTdjPV8weDQ4ZmY0Zjt0aGlzW18weDQxOGE3YygweDIwMildKF8weDI0ZDYxNyxfMHg0MjEzODgpLF8weDM2MTA0MCYmXzB4MzYxMDQwKCksdGhpc1tfMHg0MThhN2MoMHgxOWIpXShfMHgxMGRhYzMsXzB4MjRkNjE3KSx0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgyNGQ2MTcsXzB4NDIxMzg4KTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4MmUyMDBmLF8weDRjY2I1Yyl7dmFyIF8weDU2ZjhlOT1fMHg0OGZmNGY7dGhpc1tfMHg1NmY4ZTkoMHgyMDQpXShfMHgyZTIwMGYsXzB4NGNjYjVjKSx0aGlzW18weDU2ZjhlOSgweDIwYildKF8weDJlMjAwZixfMHg0Y2NiNWMpLHRoaXNbXzB4NTZmOGU5KDB4MjAxKV0oXzB4MmUyMDBmLF8weDRjY2I1YyksdGhpc1tfMHg1NmY4ZTkoMHgxOTYpXShfMHgyZTIwMGYsXzB4NGNjYjVjKTt9Wydfc2V0Tm9kZUlkJ10oXzB4NTA5MDUyLF8weDE0NjJhMil7fVsnX3NldE5vZGVRdWVyeVBhdGgnXShfMHgzZTUwNmIsXzB4MTE4NjJiKXt9W18weDQ4ZmY0ZigweDFmZildKF8weDU5N2MyOCxfMHgxOWZhYTQpe31bXzB4NDhmZjRmKDB4MTUzKV0oXzB4NGQxZWUxKXt2YXIgXzB4NDU1ZGFjPV8weDQ4ZmY0ZjtyZXR1cm4gXzB4NGQxZWUxPT09dGhpc1tfMHg0NTVkYWMoMHgxN2MpXTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgyZTVmNGUsXzB4NWYwYmM2KXt2YXIgXzB4Mzg1YmIwPV8weDQ4ZmY0Zjt0aGlzW18weDM4NWJiMCgweDFmZildKF8weDJlNWY0ZSxfMHg1ZjBiYzYpLHRoaXNbXzB4Mzg1YmIwKDB4MTU4KV0oXzB4MmU1ZjRlKSxfMHg1ZjBiYzZbXzB4Mzg1YmIwKDB4MWQ2KV0mJnRoaXNbXzB4Mzg1YmIwKDB4MWIzKV0oXzB4MmU1ZjRlKSx0aGlzW18weDM4NWJiMCgweDFkYSldKF8weDJlNWY0ZSxfMHg1ZjBiYzYpLHRoaXNbXzB4Mzg1YmIwKDB4MTc2KV0oXzB4MmU1ZjRlLF8weDVmMGJjNiksdGhpc1tfMHgzODViYjAoMHgyMDcpXShfMHgyZTVmNGUpO31bXzB4NDhmZjRmKDB4MTliKV0oXzB4MmY3NmQ3LF8weDIzMjliNil7dmFyIF8weDQ2NzVhYz1fMHg0OGZmNGY7bGV0IF8weDVmNGYyZDt0cnl7XzB4NDg1ZDNhWydjb25zb2xlJ10mJihfMHg1ZjRmMmQ9XzB4NDg1ZDNhWydjb25zb2xlJ11bXzB4NDY3NWFjKDB4MjI4KV0sXzB4NDg1ZDNhW18weDQ2NzVhYygweDE5NyldW18weDQ2NzVhYygweDIyOCldPWZ1bmN0aW9uKCl7fSksXzB4MmY3NmQ3JiZ0eXBlb2YgXzB4MmY3NmQ3W18weDQ2NzVhYygweDFiYSldPT0nbnVtYmVyJyYmKF8weDIzMjliNltfMHg0Njc1YWMoMHgxYmEpXT1fMHgyZjc2ZDdbXzB4NDY3NWFjKDB4MWJhKV0pO31jYXRjaHt9ZmluYWxseXtfMHg1ZjRmMmQmJihfMHg0ODVkM2FbXzB4NDY3NWFjKDB4MTk3KV1bXzB4NDY3NWFjKDB4MjI4KV09XzB4NWY0ZjJkKTt9aWYoXzB4MjMyOWI2W18weDQ2NzVhYygweDFmOSldPT09XzB4NDY3NWFjKDB4MTc0KXx8XzB4MjMyOWI2W18weDQ2NzVhYygweDFmOSldPT09XzB4NDY3NWFjKDB4MjEzKSl7aWYoaXNOYU4oXzB4MjMyOWI2W18weDQ2NzVhYygweDFlMSldKSlfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MTVjKV09ITB4MCxkZWxldGUgXzB4MjMyOWI2W18weDQ2NzVhYygweDFlMSldO2Vsc2Ugc3dpdGNoKF8weDIzMjliNltfMHg0Njc1YWMoMHgxZTEpXSl7Y2FzZSBOdW1iZXJbXzB4NDY3NWFjKDB4MTU0KV06XzB4MjMyOWI2W18weDQ2NzVhYygweDFjZildPSEweDAsZGVsZXRlIF8weDIzMjliNltfMHg0Njc1YWMoMHgxZTEpXTticmVhaztjYXNlIE51bWJlcltfMHg0Njc1YWMoMHgyMDkpXTpfMHgyMzI5YjZbJ25lZ2F0aXZlSW5maW5pdHknXT0hMHgwLGRlbGV0ZSBfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWUxKV07YnJlYWs7Y2FzZSAweDA6dGhpc1tfMHg0Njc1YWMoMHgxZTUpXShfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWUxKV0pJiYoXzB4MjMyOWI2W18weDQ2NzVhYygweDFiNSldPSEweDApO2JyZWFrO319ZWxzZSBfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWY5KV09PT1fMHg0Njc1YWMoMHgyMWQpJiZ0eXBlb2YgXzB4MmY3NmQ3W18weDQ2NzVhYygweDE5NSldPT1fMHg0Njc1YWMoMHgxZjcpJiZfMHgyZjc2ZDdbXzB4NDY3NWFjKDB4MTk1KV0mJl8weDIzMjliNltfMHg0Njc1YWMoMHgxOTUpXSYmXzB4MmY3NmQ3W18weDQ2NzVhYygweDE5NSldIT09XzB4MjMyOWI2W18weDQ2NzVhYygweDE5NSldJiYoXzB4MjMyOWI2WydmdW5jTmFtZSddPV8weDJmNzZkN1tfMHg0Njc1YWMoMHgxOTUpXSk7fVsnX2lzTmVnYXRpdmVaZXJvJ10oXzB4MzQ4MjIzKXt2YXIgXzB4NGEyMzg2PV8weDQ4ZmY0ZjtyZXR1cm4gMHgxL18weDM0ODIyMz09PU51bWJlcltfMHg0YTIzODYoMHgyMDkpXTt9Wydfc29ydFByb3BzJ10oXzB4MTA3ZWFhKXt2YXIgXzB4NGIzN2NjPV8weDQ4ZmY0ZjshXzB4MTA3ZWFhW18weDRiMzdjYygweDFkZCldfHwhXzB4MTA3ZWFhW18weDRiMzdjYygweDFkZCldW18weDRiMzdjYygweDFiYSldfHxfMHgxMDdlYWFbXzB4NGIzN2NjKDB4MWY5KV09PT1fMHg0YjM3Y2MoMHgyMzApfHxfMHgxMDdlYWFbXzB4NGIzN2NjKDB4MWY5KV09PT1fMHg0YjM3Y2MoMHgxNjUpfHxfMHgxMDdlYWFbXzB4NGIzN2NjKDB4MWY5KV09PT1fMHg0YjM3Y2MoMHgyMjcpfHxfMHgxMDdlYWFbJ3Byb3BzJ11bXzB4NGIzN2NjKDB4MWZlKV0oZnVuY3Rpb24oXzB4MWQ4NjYzLF8weDQ1ZWQyMyl7dmFyIF8weDUxYTRmNj1fMHg0YjM3Y2MsXzB4MzhmMjU5PV8weDFkODY2M1tfMHg1MWE0ZjYoMHgxOTUpXVtfMHg1MWE0ZjYoMHgxZjApXSgpLF8weDUzYWI0Zj1fMHg0NWVkMjNbXzB4NTFhNGY2KDB4MTk1KV1bJ3RvTG93ZXJDYXNlJ10oKTtyZXR1cm4gXzB4MzhmMjU5PF8weDUzYWI0Zj8tMHgxOl8weDM4ZjI1OT5fMHg1M2FiNGY/MHgxOjB4MDt9KTt9WydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDE1ZTFlZCxfMHg1YzAzMjgpe3ZhciBfMHg1YjAwZTk9XzB4NDhmZjRmO2lmKCEoXzB4NWMwMzI4W18weDViMDBlOSgweDFmMyldfHwhXzB4MTVlMWVkW18weDViMDBlOSgweDFkZCldfHwhXzB4MTVlMWVkW18weDViMDBlOSgweDFkZCldW18weDViMDBlOSgweDFiYSldKSl7Zm9yKHZhciBfMHg0MDA2YTU9W10sXzB4MTkwNTE3PVtdLF8weDVkYWExMz0weDAsXzB4NWM3MjhiPV8weDE1ZTFlZFtfMHg1YjAwZTkoMHgxZGQpXVsnbGVuZ3RoJ107XzB4NWRhYTEzPF8weDVjNzI4YjtfMHg1ZGFhMTMrKyl7dmFyIF8weDE3NmFhMD1fMHgxNWUxZWRbXzB4NWIwMGU5KDB4MWRkKV1bXzB4NWRhYTEzXTtfMHgxNzZhYTBbXzB4NWIwMGU5KDB4MWY5KV09PT1fMHg1YjAwZTkoMHgyMWQpP18weDQwMDZhNVtfMHg1YjAwZTkoMHgxYTMpXShfMHgxNzZhYTApOl8weDE5MDUxN1tfMHg1YjAwZTkoMHgxYTMpXShfMHgxNzZhYTApO31pZighKCFfMHgxOTA1MTdbXzB4NWIwMGU5KDB4MWJhKV18fF8weDQwMDZhNVtfMHg1YjAwZTkoMHgxYmEpXTw9MHgxKSl7XzB4MTVlMWVkW18weDViMDBlOSgweDFkZCldPV8weDE5MDUxNzt2YXIgXzB4NGEwOWRhPXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDQwMDZhNX07dGhpc1tfMHg1YjAwZTkoMHgyMDQpXShfMHg0YTA5ZGEsXzB4NWMwMzI4KSx0aGlzW18weDViMDBlOSgweDFmZildKF8weDRhMDlkYSxfMHg1YzAzMjgpLHRoaXNbXzB4NWIwMGU5KDB4MTU4KV0oXzB4NGEwOWRhKSx0aGlzW18weDViMDBlOSgweDE5NildKF8weDRhMDlkYSxfMHg1YzAzMjgpLF8weDRhMDlkYVsnaWQnXSs9J1xcXFx4MjBmJyxfMHgxNWUxZWRbXzB4NWIwMGU5KDB4MWRkKV1bXzB4NWIwMGU5KDB4MThiKV0oXzB4NGEwOWRhKTt9fX1bXzB4NDhmZjRmKDB4MTc2KV0oXzB4MjdkMzEyLF8weDE0NTM3MSl7fVtfMHg0OGZmNGYoMHgxNTgpXShfMHg0ODQ3NmMpe31bXzB4NDhmZjRmKDB4MjM2KV0oXzB4MTVhZTZlKXt2YXIgXzB4NTU5MjBkPV8weDQ4ZmY0ZjtyZXR1cm4gQXJyYXlbXzB4NTU5MjBkKDB4MThlKV0oXzB4MTVhZTZlKXx8dHlwZW9mIF8weDE1YWU2ZT09XzB4NTU5MjBkKDB4MTk0KSYmdGhpc1tfMHg1NTkyMGQoMHgxNzUpXShfMHgxNWFlNmUpPT09J1tvYmplY3RcXFxceDIwQXJyYXldJzt9W18weDQ4ZmY0ZigweDE5NildKF8weDllOGRkOCxfMHgyMWJmMzEpe31bXzB4NDhmZjRmKDB4MjA3KV0oXzB4NGQ4NmRjKXt2YXIgXzB4MWQzNTIzPV8weDQ4ZmY0ZjtkZWxldGUgXzB4NGQ4NmRjW18weDFkMzUyMygweDIyOSldLGRlbGV0ZSBfMHg0ZDg2ZGNbXzB4MWQzNTIzKDB4MWNiKV0sZGVsZXRlIF8weDRkODZkY1tfMHgxZDM1MjMoMHgxNmIpXTt9W18weDQ4ZmY0ZigweDIwMSldKF8weDUwMTFlZCxfMHgzN2I1NDMpe319bGV0IF8weDE1Y2NmZT1uZXcgXzB4MWM0ZDI4KCksXzB4NTA4ZGNjPXsncHJvcHMnOjB4NjQsJ2VsZW1lbnRzJzoweDY0LCdzdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzoweDQwMCoweDMyLCdhdXRvRXhwYW5kTGltaXQnOjB4MTM4OCwnYXV0b0V4cGFuZE1heERlcHRoJzoweGF9LF8weDEyYWQwZT17J3Byb3BzJzoweDUsJ2VsZW1lbnRzJzoweDUsJ3N0ckxlbmd0aCc6MHgxMDAsJ3RvdGFsU3RyTGVuZ3RoJzoweDEwMCoweDMsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzoweDJ9O2Z1bmN0aW9uIF8weDc2MDYwNyhfMHgyMTg1N2QsXzB4MWFhZTgzLF8weDI2YTU0MCxfMHgzNzc1ODUsXzB4NTY0M2I4LF8weDMxMTZlNSl7dmFyIF8weDcwZjYyMD1fMHg0OGZmNGY7bGV0IF8weDFiNjYxNyxfMHg0MDJiODg7dHJ5e18weDQwMmI4OD1fMHgyYzZmZDgoKSxfMHgxYjY2MTc9XzB4ZDQ5NGEzW18weDFhYWU4M10sIV8weDFiNjYxN3x8XzB4NDAyYjg4LV8weDFiNjYxN1sndHMnXT4weDFmNCYmXzB4MWI2NjE3W18weDcwZjYyMCgweDE2MCldJiZfMHgxYjY2MTdbXzB4NzBmNjIwKDB4MWQ3KV0vXzB4MWI2NjE3Wydjb3VudCddPDB4NjQ/KF8weGQ0OTRhM1tfMHgxYWFlODNdPV8weDFiNjYxNz17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDQwMmI4OH0sXzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldPXt9KTpfMHg0MDJiODgtXzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldWyd0cyddPjB4MzImJl8weGQ0OTRhM1snaGl0cyddW18weDcwZjYyMCgweDE2MCldJiZfMHhkNDk0YTNbXzB4NzBmNjIwKDB4MTkzKV1bJ3RpbWUnXS9fMHhkNDk0YTNbJ2hpdHMnXVtfMHg3MGY2MjAoMHgxNjApXTwweDY0JiYoXzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldPXt9KTtsZXQgXzB4MmFkY2Y0PVtdLF8weDNiMGFhMz1fMHgxYjY2MTdbXzB4NzBmNjIwKDB4MjNhKV18fF8weGQ0OTRhM1tfMHg3MGY2MjAoMHgxOTMpXVtfMHg3MGY2MjAoMHgyM2EpXT9fMHgxMmFkMGU6XzB4NTA4ZGNjLF8weDQ5NzQ5OD1fMHgxYjMwYzc9Pnt2YXIgXzB4MmI3YmI1PV8weDcwZjYyMDtsZXQgXzB4MzYwY2RjPXt9O3JldHVybiBfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWRkKV09XzB4MWIzMGM3W18weDJiN2JiNSgweDFkZCldLF8weDM2MGNkY1tfMHgyYjdiYjUoMHgyMTgpXT1fMHgxYjMwYzdbXzB4MmI3YmI1KDB4MjE4KV0sXzB4MzYwY2RjW18weDJiN2JiNSgweDFmNCldPV8weDFiMzBjN1tfMHgyYjdiYjUoMHgxZjQpXSxfMHgzNjBjZGNbJ3RvdGFsU3RyTGVuZ3RoJ109XzB4MWIzMGM3Wyd0b3RhbFN0ckxlbmd0aCddLF8weDM2MGNkY1tfMHgyYjdiYjUoMHgxOWQpXT1fMHgxYjMwYzdbXzB4MmI3YmI1KDB4MTlkKV0sXzB4MzYwY2RjW18weDJiN2JiNSgweDIxYyldPV8weDFiMzBjN1snYXV0b0V4cGFuZE1heERlcHRoJ10sXzB4MzYwY2RjW18weDJiN2JiNSgweDFkNildPSEweDEsXzB4MzYwY2RjW18weDJiN2JiNSgweDFmMyldPSFfMHg0MTQ1N2QsXzB4MzYwY2RjW18weDJiN2JiNSgweDE3YildPTB4MSxfMHgzNjBjZGNbJ2xldmVsJ109MHgwLF8weDM2MGNkY1tfMHgyYjdiYjUoMHgxOGEpXT1fMHgyYjdiYjUoMHgxYzQpLF8weDM2MGNkY1sncm9vdEV4cHJlc3Npb24nXT1fMHgyYjdiYjUoMHgyMGEpLF8weDM2MGNkY1tfMHgyYjdiYjUoMHgxZDQpXT0hMHgwLF8weDM2MGNkY1snYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddPVtdLF8weDM2MGNkY1tfMHgyYjdiYjUoMHgyMzkpXT0weDAsXzB4MzYwY2RjW18weDJiN2JiNSgweDFiOSldPSEweDAsXzB4MzYwY2RjW18weDJiN2JiNSgweDFlYyldPTB4MCxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWVlKV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4MzYwY2RjO307Zm9yKHZhciBfMHgxMGI1MjE9MHgwO18weDEwYjUyMTxfMHg1NjQzYjhbXzB4NzBmNjIwKDB4MWJhKV07XzB4MTBiNTIxKyspXzB4MmFkY2Y0W18weDcwZjYyMCgweDFhMyldKF8weDE1Y2NmZVtfMHg3MGY2MjAoMHgxODEpXSh7J3RpbWVOb2RlJzpfMHgyMTg1N2Q9PT1fMHg3MGY2MjAoMHgxZDcpfHx2b2lkIDB4MH0sXzB4NTY0M2I4W18weDEwYjUyMV0sXzB4NDk3NDk4KF8weDNiMGFhMykse30pKTtpZihfMHgyMTg1N2Q9PT1fMHg3MGY2MjAoMHgxNWQpKXtsZXQgXzB4MzViZmQ5PUVycm9yW18weDcwZjYyMCgweDIxNildO3RyeXtFcnJvcltfMHg3MGY2MjAoMHgyMTYpXT0weDEvMHgwLF8weDJhZGNmNFtfMHg3MGY2MjAoMHgxYTMpXShfMHgxNWNjZmVbXzB4NzBmNjIwKDB4MTgxKV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpW18weDcwZjYyMCgweDE1ZildLF8weDQ5NzQ5OChfMHgzYjBhYTMpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yW18weDcwZjYyMCgweDIxNildPV8weDM1YmZkOTt9fXJldHVybnsnbWV0aG9kJzpfMHg3MGY2MjAoMHgxZjEpLCd2ZXJzaW9uJzpfMHgyNGNjOWYsJ2FyZ3MnOlt7J3RzJzpfMHgyNmE1NDAsJ3Nlc3Npb24nOl8weDM3NzU4NSwnYXJncyc6XzB4MmFkY2Y0LCdpZCc6XzB4MWFhZTgzLCdjb250ZXh0JzpfMHgzMTE2ZTV9XX07fWNhdGNoKF8weDRjZTQxMil7cmV0dXJueydtZXRob2QnOl8weDcwZjYyMCgweDFmMSksJ3ZlcnNpb24nOl8weDI0Y2M5ZiwnYXJncyc6W3sndHMnOl8weDI2YTU0MCwnc2Vzc2lvbic6XzB4Mzc3NTg1LCdhcmdzJzpbeyd0eXBlJzondW5rbm93bicsJ2Vycm9yJzpfMHg0Y2U0MTImJl8weDRjZTQxMltfMHg3MGY2MjAoMHgyMDApXX1dLCdpZCc6XzB4MWFhZTgzLCdjb250ZXh0JzpfMHgzMTE2ZTV9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDFiNjYxNyYmXzB4NDAyYjg4KXtsZXQgXzB4MjZmNjIxPV8weDJjNmZkOCgpO18weDFiNjYxN1tfMHg3MGY2MjAoMHgxNjApXSsrLF8weDFiNjYxN1tfMHg3MGY2MjAoMHgxZDcpXSs9XzB4MjRmNGM0KF8weDQwMmI4OCxfMHgyNmY2MjEpLF8weDFiNjYxN1sndHMnXT1fMHgyNmY2MjEsXzB4ZDQ5NGEzWydoaXRzJ11bXzB4NzBmNjIwKDB4MTYwKV0rKyxfMHhkNDk0YTNbJ2hpdHMnXVtfMHg3MGY2MjAoMHgxZDcpXSs9XzB4MjRmNGM0KF8weDQwMmI4OCxfMHgyNmY2MjEpLF8weGQ0OTRhM1tfMHg3MGY2MjAoMHgxOTMpXVsndHMnXT1fMHgyNmY2MjEsKF8weDFiNjYxN1snY291bnQnXT4weDMyfHxfMHgxYjY2MTdbJ3RpbWUnXT4weDY0KSYmKF8weDFiNjYxN1sncmVkdWNlTGltaXRzJ109ITB4MCksKF8weGQ0OTRhM1tfMHg3MGY2MjAoMHgxOTMpXVsnY291bnQnXT4weDNlOHx8XzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldW18weDcwZjYyMCgweDFkNyldPjB4MTJjKSYmKF8weGQ0OTRhM1tfMHg3MGY2MjAoMHgxOTMpXVtfMHg3MGY2MjAoMHgyM2EpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHg3NjA2MDc7fSgoXzB4MzFkMWY5LF8weDNlYWFiNSxfMHg0NDQ3MTIsXzB4MjcyYmM5LF8weDcwOTIwYSxfMHgzYzU0MTUsXzB4MjgzZTE3LF8weDJkNTRhYSxfMHgyZDg0ZjUsXzB4MWRiYWJiKT0+e3ZhciBfMHgyYzQzODk9XzB4MjlkNTk2O2lmKF8weDMxZDFmOVsnX2NvbnNvbGVfbmluamEnXSlyZXR1cm4gXzB4MzFkMWY5W18weDJjNDM4OSgweDE4NSldO2lmKCFKKF8weDMxZDFmOSxfMHgyZDU0YWEsXzB4NzA5MjBhKSlyZXR1cm4gXzB4MzFkMWY5WydfY29uc29sZV9uaW5qYSddPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2NvdmVyYWdlJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHgzMWQxZjlbXzB4MmM0Mzg5KDB4MTg1KV07bGV0IF8weDUxYzYyMj1XKF8weDMxZDFmOSksXzB4MTY3NzU0PV8weDUxYzYyMlsnZWxhcHNlZCddLF8weDJjZjM1Nz1fMHg1MWM2MjJbXzB4MmM0Mzg5KDB4MTg4KV0sXzB4Y2IzYThkPV8weDUxYzYyMltfMHgyYzQzODkoMHgxYTQpXSxfMHgxNTM5YjI9eydoaXRzJzp7fSwndHMnOnt9fSxfMHgzOWYyZjk9WShfMHgzMWQxZjksXzB4MmQ4NGY1LF8weDE1MzliMixfMHgzYzU0MTUpLF8weDEyMDEyND1fMHg1NWFlYWY9PntfMHgxNTM5YjJbJ3RzJ11bXzB4NTVhZWFmXT1fMHgyY2YzNTcoKTt9LF8weDE2ZTIzYz0oXzB4MzY3ZjdkLF8weDI2OWUyMCk9Pnt2YXIgXzB4MjMzMmJmPV8weDJjNDM4OTtsZXQgXzB4MTY4YmRmPV8weDE1MzliMlsndHMnXVtfMHgyNjllMjBdO2lmKGRlbGV0ZSBfMHgxNTM5YjJbJ3RzJ11bXzB4MjY5ZTIwXSxfMHgxNjhiZGYpe2xldCBfMHgxYzkwOWM9XzB4MTY3NzU0KF8weDE2OGJkZixfMHgyY2YzNTcoKSk7XzB4NTk2MDlmKF8weDM5ZjJmOShfMHgyMzMyYmYoMHgxZDcpLF8weDM2N2Y3ZCxfMHhjYjNhOGQoKSxfMHgxZGU4MjQsW18weDFjOTA5Y10sXzB4MjY5ZTIwKSk7fX0sXzB4NDAyMTUxPV8weDM1YWRmOD0+XzB4MmM1Mzg4PT57dHJ5e18weDEyMDEyNChfMHgyYzUzODgpLF8weDM1YWRmOChfMHgyYzUzODgpO31maW5hbGx5e18weDMxZDFmOVsnY29uc29sZSddWyd0aW1lJ109XzB4MzVhZGY4O319LF8weGRmMzczNT1fMHgzNTczYjM9Pl8weDMxNGFmMj0+e3ZhciBfMHgyMzcxMjI9XzB4MmM0Mzg5O3RyeXtsZXQgW18weDMxYTcwNixfMHgzY2JkOGJdPV8weDMxNGFmMlsnc3BsaXQnXShfMHgyMzcxMjIoMHgyMTQpKTtfMHgxNmUyM2MoXzB4M2NiZDhiLF8weDMxYTcwNiksXzB4MzU3M2IzKF8weDMxYTcwNik7fWZpbmFsbHl7XzB4MzFkMWY5W18weDIzNzEyMigweDE5NyldW18weDIzNzEyMigweDFiMildPV8weDM1NzNiMzt9fTtfMHgzMWQxZjlbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooXzB4NDIzN2I4LF8weDI1Zjc0Nyk9Pnt2YXIgXzB4MmMwOGE5PV8weDJjNDM4OTtfMHgzMWQxZjlbXzB4MmMwOGE5KDB4MTk3KV1bXzB4MmMwOGE5KDB4MWYxKV1bXzB4MmMwOGE5KDB4MTk1KV0hPT1fMHgyYzA4YTkoMHgxN2YpJiZfMHg1OTYwOWYoXzB4MzlmMmY5KF8weDJjMDhhOSgweDFmMSksXzB4NDIzN2I4LF8weGNiM2E4ZCgpLF8weDFkZTgyNCxfMHgyNWY3NDcpKTt9LCdjb25zb2xlVHJhY2UnOihfMHgyNzRmY2IsXzB4NDk3MzIzKT0+e3ZhciBfMHg5OGNjNmU9XzB4MmM0Mzg5O18weDMxZDFmOVtfMHg5OGNjNmUoMHgxOTcpXVsnbG9nJ11bXzB4OThjYzZlKDB4MTk1KV0hPT0nZGlzYWJsZWRUcmFjZScmJl8weDU5NjA5ZihfMHgzOWYyZjkoXzB4OThjYzZlKDB4MTVkKSxfMHgyNzRmY2IsXzB4Y2IzYThkKCksXzB4MWRlODI0LF8weDQ5NzMyMykpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHhjZDgxOWY9XzB4MmM0Mzg5O18weDMxZDFmOVtfMHhjZDgxOWYoMHgxOTcpXVtfMHhjZDgxOWYoMHgxZDcpXT1fMHg0MDIxNTEoXzB4MzFkMWY5W18weGNkODE5ZigweDE5NyldW18weGNkODE5ZigweDFkNyldKTt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt2YXIgXzB4M2FhNWQ3PV8weDJjNDM4OTtfMHgzMWQxZjlbXzB4M2FhNWQ3KDB4MTk3KV1bJ3RpbWVFbmQnXT1fMHhkZjM3MzUoXzB4MzFkMWY5W18weDNhYTVkNygweDE5NyldW18weDNhYTVkNygweDFiMildKTt9LCdhdXRvTG9nJzooXzB4MzJjZjU0LF8weDM3NTU5NCk9Pnt2YXIgXzB4MjAwYmM3PV8weDJjNDM4OTtfMHg1OTYwOWYoXzB4MzlmMmY5KF8weDIwMGJjNygweDFmMSksXzB4Mzc1NTk0LF8weGNiM2E4ZCgpLF8weDFkZTgyNCxbXzB4MzJjZjU0XSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4NDExNTMyLF8weDNhYjA4Zik9PntfMHg1OTYwOWYoXzB4MzlmMmY5KCdsb2cnLF8weDQxMTUzMixfMHhjYjNhOGQoKSxfMHgxZGU4MjQsXzB4M2FiMDhmKSk7fSwnYXV0b1RyYWNlJzooXzB4NTY2MGI0LF8weDJmYjcyZCk9Pnt2YXIgXzB4NDgwZjViPV8weDJjNDM4OTtfMHg1OTYwOWYoXzB4MzlmMmY5KF8weDQ4MGY1YigweDE1ZCksXzB4MmZiNzJkLF8weGNiM2E4ZCgpLF8weDFkZTgyNCxbXzB4NTY2MGI0XSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHhkYWUyM2QsXzB4MTg2YWM5KT0+e3ZhciBfMHg1NThkNDI9XzB4MmM0Mzg5O18weDU5NjA5ZihfMHgzOWYyZjkoXzB4NTU4ZDQyKDB4MTVkKSxfMHhkYWUyM2QsXzB4Y2IzYThkKCksXzB4MWRlODI0LF8weDE4NmFjOSkpO30sJ2F1dG9UaW1lJzooXzB4M2U3ZThlLF8weDEyZTk5YSxfMHg1YTM1NmIpPT57XzB4MTIwMTI0KF8weDVhMzU2Yik7fSwnYXV0b1RpbWVFbmQnOihfMHhkNWUyNzAsXzB4YmJjNDY1LF8weGFiZGFkMyk9PntfMHgxNmUyM2MoXzB4YmJjNDY1LF8weGFiZGFkMyk7fSwnY292ZXJhZ2UnOl8weDM1ZTQ1Yz0+e3ZhciBfMHgzNjNlZDE9XzB4MmM0Mzg5O18weDU5NjA5Zih7J21ldGhvZCc6XzB4MzYzZWQxKDB4MWMzKSwndmVyc2lvbic6XzB4M2M1NDE1LCdhcmdzJzpbeydpZCc6XzB4MzVlNDVjfV19KTt9fTtsZXQgXzB4NTk2MDlmPWIoXzB4MzFkMWY5LF8weDNlYWFiNSxfMHg0NDQ3MTIsXzB4MjcyYmM5LF8weDcwOTIwYSxfMHgxZGJhYmIpLF8weDFkZTgyND1fMHgzMWQxZjlbXzB4MmM0Mzg5KDB4MjFlKV07cmV0dXJuIF8weDMxZDFmOVtfMHgyYzQzODkoMHgxODUpXTt9KShnbG9iYWxUaGlzLF8weDI5ZDU5NigweDFiYyksXzB4MjlkNTk2KDB4MTY5KSxfMHgyOWQ1OTYoMHgyMTcpLF8weDI5ZDU5NigweDIxYSksXzB4MjlkNTk2KDB4MTg5KSxfMHgyOWQ1OTYoMHgxOGYpLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiRGFtaWxhcmVcXFwiLFxcXCIxNjkuMjU0LjgwLjgwXFxcIixcXFwiMTkyLjE2OC4wLjEwMVxcXCIsXFxcIjE3Mi4yMy4xOTIuMVxcXCJdLF8weDI5ZDU5NigweDIzNyksXzB4MjlkNTk2KDB4MWNlKSk7XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICB1cmwsXG4gIGxvZ28sXG4gIGF1dGhvcixcbiAgc2l0ZU5hbWUsXG4gIHB1Ymxpc2hlZFRpbWUsXG4gIG1vZGlmaWVkVGltZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0eXBlJyBjb250ZW50PSdhcnRpY2xlJyAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtzaXRlTmFtZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9e3VybH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZScgY29udGVudD17bG9nb30gLz5cbiAgICAgIHtwdWJsaXNoZWRUaW1lICYmIChcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9J2FydGljbGU6cHVibGlzaGVkX3RpbWUnIGNvbnRlbnQ9e3B1Ymxpc2hlZFRpbWV9IC8+XG4gICAgICApfVxuICAgICAgPG1ldGEgcHJvcGVydHk9J2FydGljbGU6bW9kaWZpZWRfdGltZScgY29udGVudD17bW9kaWZpZWRUaW1lfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J2FydGljbGU6YXV0aG9yJyBjb250ZW50PXthdXRob3J9IC8+XG5cbiAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD0nc2hvcnRjdXQgaWNvbidcbiAgICAgICAgaHJlZj0nYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZz8xMjMnXG4gICAgICAgIHR5cGU9J2ltYWdlL3BuZydcbiAgICAgIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2Fzc2V0cy9jc3MvYW5pbWF0ZS5jc3MnIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2Fzc2V0cy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2Fzc2V0cy9jc3MvZGVmYXVsdC5jc3MnIC8+XG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJyAvPlxuXG4gICAgICB7LyogRk9SIElFOSBiZWxvdyAqL31cbiAgICAgIHsvKiBbaWYgbHQgSUUgOV0+ICovfVxuICAgICAgPHNjcmlwdCBzcmM9J2Fzc2V0cy9qcy92ZW5kb3IvanF1ZXJ5LTEuMTIuNC5taW4uanMnPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9J2Fzc2V0cy9qcy92ZW5kb3IvbW9kZXJuaXpyLTMuNy4xLm1pbi5qcyc+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz0nYXNzZXRzL2pzL2Jvb3RzdHJhcC5taW4uanMnPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9J2Fzc2V0cy9qcy9qcXVlcnkuZWFzaW5nLm1pbi5qcyc+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICApO1xufTtcbiIsImNvbnN0IGJhc2VDb25maWcgPSB7XG4gIHdlZGRpbmdEYXk6ICdTdW5kYXknLFxuICB3ZWRkaW5nVGltZTogJzEyLjAwIC0gMTUuMDAnLFxuICB3ZWRkaW5nRGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gIHNob3dCdWlsdFdpdGhJbmZvOiB0cnVlLFxuICBzaG93UXJDb2RlOiBmYWxzZSxcbiAgY2FsZW5kYXJJbmZvOiB7XG4gICAgdGltZVN0YXJ0SVNPOiAnMjAyMy0xMi0xNlQxOTowMDowMCswODowMCcsXG4gICAgdGltZUVuZElTTzogJzIwMjMtMTItMTZUMjE6MDA6MDArMDg6MDAnLFxuICB9LFxuICBjb3VwbGVJbmZvOiB7XG4gICAgYnJpZGVOYW1lOiAnT2xhZHVubmkgJyxcbiAgICBncm9vbU5hbWU6ICdBZGV3YWxlJyxcbiAgICBjb3VwbGVOYW1lRm9ybWF0OiAnR1JPT01fRklSU1QnLFxuICAgIGhhc2h0YWc6ICcjRFdlZGRpbmcnLFxuICB9LFxuICB2ZW51ZToge1xuICAgIG5hbWU6ICdCRVZFTlQgQ0VOVEVSJyxcbiAgICBhZGRyZXNzTGluZTE6ICdObyAxMTEgb2JhZmVtaSBhd29sb3dvIHdheSBpa2VqYSBMYWdvcywgTmlnZXJpYScsXG4gICAgLy8gYWRkcmVzc0xpbmUyOiAnRWtvIGhvdGVsIFYuSSBMYWdvcyBTdGF0ZScsXG4gICAgY2l0eTogJ0xhZ29zJyxcbiAgICBjb3VudHJ5OiAnTmlnZXJpYScsXG4gICAgbWFwVXJsOiAnaHR0cHM6Ly9tYXBzLmFwcC5nb28uZ2wvS2hvRkRNVW50YlRVNkwzeTknLFxuICB9LFxuICBsb2dvOiB7XG4gICAgaGVhZGVyTG9nbzogJ2Fzc2V0cy9pbWFnZXMvcmluZy1zdmcucG5nJyxcbiAgICBmb290ZXJMb2dvOiAnYXNzZXRzL3ZpZGVvL2F3LXJpbmctbG9nby10aWNrZXIubXA0JyxcbiAgICBmb290ZXJMb2dvVHlwZTogJ21wNCcsXG4gIH0sXG4gIG9nVGFnczoge1xuICAgIGxvZ286ICdhc3NldHMvaW1hZ2VzL2F3LXJpbmctbG9nby5wbmcnLFxuICAgIHNpdGVOYW1lOiAnaHR0cHM6Ly9mdWdseWRhbWkuZ2l0aHViLmlvL2FkZXdhbGUtd2VkZGluZy8nLFxuICAgIHB1Ymxpc2hlZFRpbWU6ICcyMDIzLTA5LTA3JyxcbiAgfSxcbn07XG5cbmNvbnN0IGxhbmcgPSB7XG4gIGlkOiB7XG4gICAgd2VkZGluZ0RheTogJ1NhYnR1JyxcbiAgICB3ZWRkaW5nRGF0ZTogJzIyIEZlYnJ1YXJpIDIwMjAnLFxuICAgIHZlbnVlOiB7XG4gICAgICAuLi5iYXNlQ29uZmlnLnZlbnVlLFxuICAgICAgbmFtZTogJ0hvdGVsIE92YWwnLFxuICAgICAgYWRkcmVzc0xpbmUyOiAnU3VyYWJheWEsIEphd2EgVGltdXIsIDYwMjQxLCcsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4uYmFzZUNvbmZpZyxcbiAgbGFuZyxcbn07XG4iLCJpbXBvcnQgSTE4biBmcm9tIFwiaTE4bi1qc1wiO1xuaW1wb3J0IGVuIGZyb20gXCIuL2xhbmcvZW5cIjtcbmltcG9ydCBpZCBmcm9tIFwiLi9sYW5nL2lkXCI7XG5cbmNvbnN0IHN1cHBvcnRlZExhbmd1YWdlcyA9IFtcbiAge1xuICAgIGNvZGU6IFwiZW5cIixcbiAgICBsYWJlbDogXCJFbmdsaXNoXCIsXG4gICAgdHJhbnNsYXRpb25zOiBlblxuICB9LFxuICB7XG4gICAgY29kZTogXCJpZFwiLFxuICAgIGxhYmVsOiBcIkluZG9uZXNpYVwiLFxuICAgIHRyYW5zbGF0aW9uczogaWRcbiAgfVxuXTtcblxuSTE4bi5kZWZhdWx0TG9jYWxlID0gXCJlblwiO1xuc3VwcG9ydGVkTGFuZ3VhZ2VzLmZvckVhY2gobGFuZyA9PiB7XG4gIEkxOG4udHJhbnNsYXRpb25zW2xhbmcuY29kZV0gPSBsYW5nLnRyYW5zbGF0aW9ucztcbn0pO1xuXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VPcHRpb25zID0gc3VwcG9ydGVkTGFuZ3VhZ2VzLm1hcChsYW5nID0+ICh7XG4gIHZhbHVlOiBsYW5nLmNvZGUsXG4gIGxhYmVsOiBsYW5nLmxhYmVsXG59KSk7XG5cbmV4cG9ydCBjb25zdCBzZXRMb2NhbGUgPSBsb2NhbGUgPT4ge1xuICBJMThuLmxvY2FsZSA9IGxvY2FsZTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ID0gKG5hbWUsIHBhcmFtcyA9IHt9KSA9PiB7XG4gIHJldHVybiBJMThuLnQobmFtZSwgcGFyYW1zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBUcmFucyA9IHByb3BzID0+IChcbiAgPHNwYW5cbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHQocHJvcHMuaTE4bktleSwgeyAuLi5wcm9wcyB9KSB9fVxuICA+PC9zcGFuPlxuKTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGUgPSBJMThuLmRlZmF1bHRMb2NhbGU7XG5cbmV4cG9ydCBjb25zdCB1c2VUcmFuc2xhdGlvbiA9IGxvY2FsZSA9PiB7XG4gIEkxOG4ubG9jYWxlID0gbG9jYWxlO1xuICByZXR1cm4gSTE4bi50O1xufTtcbiIsImNvbnN0IGZhbGxiYWNrSG9zdCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChwYXRoLCBoZWFkZXJzKSA9PiB7XG4gIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICAvLyBVc2UgYnJvd3NlcidzIGB3aW5kb3dgIGlmIGhlYWRlcnMgaXMgbm90IHByb3ZpZGVkXG4gIGlmICghaGVhZGVycyAmJiBwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcImNvdWxkIG5vdCByZXNvbHZlIHBhdGggd2l0aG91dCByZXF1ZXN0IGhlYWRlcnM6IHdpbmRvdyBpcyB1bmRlZmluZWRcIlxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdH0ke3BhdGh9YDtcbiAgfVxuICBjb25zdCBob3N0ID0gaGVhZGVyc1xuICAgID8gaGVhZGVyc1tcIngtbm93LWRlcGxveW1lbnQtdXJsXCJdIHx8XG4gICAgICBoZWFkZXJzW1wieC1mb3J3YXJkZWQtaG9zdFwiXSB8fFxuICAgICAgaGVhZGVycy5ob3N0XG4gICAgOiBudWxsO1xuICBjb25zdCBzY2hlbWUgPVxuICAgIGhlYWRlcnMgJiYgaGVhZGVyc1tcIngtZm9yd2FyZGVkLXByb3RvXCJdXG4gICAgICA/IGhlYWRlcnNbXCJ4LWZvcndhcmRlZC1wcm90b1wiXVxuICAgICAgOiBcImh0dHBcIjtcbiAgcmV0dXJuIGhvc3QgPyBgJHtzY2hlbWV9Oi8vJHtob3N0fSR7cGF0aH1gIDogYCR7ZmFsbGJhY2tIb3N0fSR7cGF0aH1gO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImkxOG4tanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFyY29kZS5yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hZGQtdG8tY2FsZW5kYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2VldGFsZXJ0MlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==