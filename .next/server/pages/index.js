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
    coupleNameFormat
  } = coupleInfo;
  const coupleNameStr = coupleNameFormat === 'GROOM_FIRST' ? `${groomName} & ${brideName}` : `${brideName} & ${groomName}`;
  const coupleName = coupleNameFormat === 'GROOM_FIRST' ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, groomName, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "&"), " ", brideName) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, brideName, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
  return __jsx("div", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1703421768",
    __self: undefined
  }, "a.react-add-to-calendar__button span{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxhZGV3YWxlLXdlZGRpbmctaW52aXRlXFxwYWdlc1xcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFUyxBQUc0QixlQUNXLDREQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcYWRld2FsZS13ZWRkaW5nLWludml0ZVxccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuXG5jb25zdCB0cmFuc2xhdGVDb25maWcgPSAoYXBwQ29uZmlnLCBsb2NhbGUpID0+IHtcbiAgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSBkZWZhdWx0TG9jYWxlKSB7XG4gICAgcmV0dXJuIGFwcENvbmZpZztcbiAgfVxuICAvLyBSZXBsYWNlIGNvbmZpZyB3aXRoIGxhbmdcbiAgY29uc3QgY29uZmlnTGFuZyA9IGFwcENvbmZpZy5sYW5nW2xvY2FsZV07XG4gIGlmIChjb25maWdMYW5nID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbG9jYWxlOiAnLCBsb2NhbGUpO1xuICB9XG4gIHJldHVybiB7IC4uLmFwcENvbmZpZywgLi4uY29uZmlnTGFuZyB9O1xufTtcblxuY29uc3QgU2hvd0ludml0ZSA9ICh7IGN1cnJlbnRVcmwsIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsIGd1ZXN0IH0pID0+IHtcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9uKGd1ZXN0LmxvY2FsZSk7XG5cbiAgLy8gSW5pdGlhdGUgY29uZmlnIHZhcmlhYmxlc1xuICBjb25zdCB7XG4gICAgbG9nbyxcbiAgICBvZ1RhZ3MsXG4gICAgY291cGxlSW5mbyxcbiAgICB2ZW51ZSxcbiAgICB3ZWRkaW5nRGF5LFxuICAgIHdlZGRpbmdEYXRlLFxuICAgIHdlZGRpbmdUaW1lLFxuICAgIGNhbGVuZGFySW5mbyxcbiAgfSA9IHRyYW5zbGF0ZUNvbmZpZyhhcHBDb25maWcsIGd1ZXN0LmxvY2FsZSk7XG4gIGNvbnN0IHsgYnJpZGVOYW1lLCBncm9vbU5hbWUsIGNvdXBsZU5hbWVGb3JtYXQgfSA9IGNvdXBsZUluZm87XG5cbiAgY29uc3QgY291cGxlTmFtZVN0ciA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJ1xuICAgICAgPyBgJHtncm9vbU5hbWV9ICYgJHticmlkZU5hbWV9YFxuICAgICAgOiBgJHticmlkZU5hbWV9ICYgJHtncm9vbU5hbWV9YDtcbiAgY29uc3QgY291cGxlTmFtZSA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJyA/IChcbiAgICAgIDw+XG4gICAgICAgIHtncm9vbU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7YnJpZGVOYW1lfVxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIDw+XG4gICAgICAgIHticmlkZU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7Z3Jvb21OYW1lfVxuICAgICAgPC8+XG4gICAgKTtcblxuICAvLyBWZW51ZSBpbmZvXG4gIGNvbnN0IHZlbnVlQnJpZWYgPSBgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWA7XG4gIGNvbnN0IHdlZGRpbmdEYXRlQnJpZWYgPSBgJHt3ZWRkaW5nRGF5fSwgJHt3ZWRkaW5nRGF0ZX1gO1xuXG4gIC8vIEV2ZW50IGluZm9cbiAgY29uc3QgZXZlbnRUaXRsZSA9IGAke2NvdXBsZU5hbWVTdHJ9J3MgV2VkZGluZ2A7XG4gIGxldCBldmVudERlc2NyaXB0aW9uID0gYCR7d2VkZGluZ0RhdGVCcmllZn0gYXQgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fWA7XG4gIGlmIChndWVzdC5uYW1lKSB7XG4gICAgZXZlbnREZXNjcmlwdGlvbiA9IGBEZWFyICR7Z3Vlc3QubmFtZX0sIHlvdSBhcmUgY29yZGlhbGx5IGludml0ZWQgdG8gb3VyIHdlZGRpbmcgb24gJHt3ZWRkaW5nRGF0ZX0gYXQgJHt2ZW51ZS5uYW1lfS4gTG9va2luZyBmb3J3YXJkIHRvIHNlZWluZyB5b3UhYDtcbiAgfVxuXG4gIC8vIENhbGVuZGFyIHBheWxvYWRcbiAgY29uc3QgY2FsZW5kYXJFdmVudCA9IHtcbiAgICB0aXRsZTogZXZlbnRUaXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZXZlbnREZXNjcmlwdGlvbixcbiAgICBsb2NhdGlvbjogYCR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gLFxuICAgIHN0YXJ0VGltZTogY2FsZW5kYXJJbmZvLnRpbWVTdGFydElTTyxcbiAgICBlbmRUaW1lOiBjYWxlbmRhckluZm8udGltZUVuZElTTyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBhLnJlYWN0LWFkZC10by1jYWxlbmRhcl9fYnV0dG9uIHNwYW4ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkXG4gICAgICAgIHsuLi5vZ1RhZ3N9XG4gICAgICAgIHRpdGxlPXtldmVudFRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZXZlbnREZXNjcmlwdGlvbn1cbiAgICAgICAgZ3Vlc3ROYW1lPXtndWVzdC5uYW1lfVxuICAgICAgICB1cmw9e2N1cnJlbnRVcmx9XG4gICAgICAgIGRhdGU9e3dlZGRpbmdEYXRlQnJpZWZ9XG4gICAgICAgIG1vZGlmaWVkVGltZT17Z3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdH1cbiAgICAgICAgdmVudWU9e3ZlbnVlQnJpZWZ9XG4gICAgICAgIGxvZ289e3Jlc29sdmVQYXRoKG9nVGFncy5sb2dvKX1cbiAgICAgICAgYXV0aG9yPXtyZXNvbHZlUGF0aCgnLycpfVxuICAgICAgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naGVhZGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGlkPSdob21lJyBjbGFzc05hbWU9J2hlYWRlcl9zbGlkZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay1saXN0IGRyYWdnYWJsZSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stdHJhY2snIHN0eWxlPXt7IG9wYWNpdHk6IDEgfX0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZV9zbGlkZXIgYmdfY292ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcidcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMTAnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX2NvbnRlbnQgdGV4dC1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDYwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfc3ViX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC4ycycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3NpdGVJbnRybycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuN3MnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5uYW1lfSwge3ZlbnVlLmNpdHl9LCB7dmVudWUuY291bnRyeX0uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29taW5nX3Nvb24nIGNsYXNzTmFtZT0nY29taW5nX3Nvb25fYXJlYSBwdC0yMCBwYi03MCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8xJyBzdHlsZT17eyB6SW5kZXg6IDEgfX0+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy00Jz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSBwdC01MCB3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3QoJ2V2ZW50RGF0ZScpfTo8L2gzPlxuICAgICAgICAgICAgICAgIDxwPnt3ZWRkaW5nRGF0ZUJyaWVmfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxBZGRUb0NhbGVuZGFyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50PXtjYWxlbmRhckV2ZW50fVxuICAgICAgICAgICAgICAgICAgICBidXR0b25MYWJlbD17dCgnYnRuQWRkVG9NeUNhbGVuZGFyJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zZWN0aW9uX3NoYXBlLnBuZycgYWx0PSdTaGFwZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9jb3VudCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC0yMCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNjAsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZV9jb3VudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMzAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvdW50X2NvbnRlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxLCBwYWRkaW5nVG9wOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmVudWUubWFwVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWFnZXMvb3ZhbC1ob3RlbC1tYXAtaG9yaXpvbnRhbC5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nb3ZhbCBob3RlbCBtYXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc3NXZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8yJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMi5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29udGFjdCcgY2xhc3NOYW1lPSdjb250YWN0X2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhY3Rfd3JhcHBlciB3b3cgZmFkZUluVXBCaWcnXG4gICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjRzJ1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMzAsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC40cycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW5VcCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgdGV4dC1jZW50ZXIgcGItMzAnPlxuICAgICAgICAgICAgICAgICAge2d1ZXN0Lm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25HcmVldGluZycpfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJyB9fT57Z3Vlc3QubmFtZX0sPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3QoJ2ludml0YXRpb25JbnRybycpfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZGltZ3JleScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IHQoJ2ludml0YXRpb25Db250ZW50VGV4dEFsaWduJyksXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpPlxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25Db250ZW50Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnaW52aXRhdGlvbk91dHJvJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXQoJ2ludml0YXRpb25PdXRybycpLnN0YXJ0c1dpdGgoJ1ttaXNzaW5nJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25PdXRybycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHthcHBDb25maWcuc2hvd1FyQ29kZSAmJiBndWVzdC5uYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwLCBtYXJnaW5Cb3R0b206IDM1IH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e2d1ZXN0Lmd1ZXN0SWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXt2ZW51ZS5tYXBVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzAuMnJlbSBzb2xpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Yj57dmVudWUubmFtZX08L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5hZGRyZXNzTGluZTF9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7Lyoge3ZlbnVlLmFkZHJlc3NMaW5lMn1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICB7dmVudWUuY291bnRyeX0uXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQnIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgIHt3ZWRkaW5nRGF0ZX0gwrcge3dlZGRpbmdUaW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgIHt0KCdpbnZpdGF0aW9uQ2xvc2luZycpICYmXG4gICAgICAgICAgICAgICAgICAgICF0KCdpbnZpdGF0aW9uQ2xvc2luZycpLnN0YXJ0c1dpdGgoJ1ttaXNzaW5nJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHQoJ2ludml0YXRpb25DbG9zaW5nJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgbWItMTAnPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e2NvdXBsZU5hbWV9PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2hvd0ludml0ZS5nZXRJbml0aWFsUHJvcHMgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IGxvY2FsZVBhcmFtcyA9IGN0eC5xdWVyeS5sYW5nIHx8IGRlZmF1bHRMb2NhbGU7XG4gIGNvbnN0IGVtcHR5R3Vlc3RQYXJhbXMgPSB7XG4gICAgZ3Vlc3Q6IHtcbiAgICAgIGd1ZXN0SWQ6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBncmVldGluZzogJycsXG4gICAgICBsb2NhbGU6IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRVcmwgPSByZXNvbHZlUGF0aChjdHgucmVxLnVybCk7XG4gIGNvbnN0IGd1ZXN0SWQgPSBjdHgucXVlcnkudTtcbiAgaWYgKCFndWVzdElkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBndWVzdERhdGEgPSBndWVzdExpc3QuZGF0YTtcbiAgY29uc3QgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCA9IGd1ZXN0TGlzdC5tZXRhLmxhc3RVcGRhdGVkQXQ7XG4gIGNvbnN0IHsgbmFtZSwgZ3JlZXRpbmcsIGxvY2FsZSB9ID1cbiAgICBndWVzdERhdGEuZmlsdGVyKChndWVzdCkgPT4gZ3Vlc3QuZ3Vlc3RJZCA9PT0gZ3Vlc3RJZClbMF0gfHwge307XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgLi4uZW1wdHlHdWVzdFBhcmFtcyxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXJsLFxuICAgIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsXG4gICAgZ3Vlc3Q6IHtcbiAgICAgIG5hbWUsXG4gICAgICBncmVldGluZyxcbiAgICAgIGd1ZXN0SWQsXG4gICAgICBsb2NhbGU6IGxvY2FsZSB8fCBsb2NhbGVQYXJhbXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dJbnZpdGU7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\USER\\\\Documents\\\\adewale-wedding-invite\\\\pages\\\\index.jsx */"), __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, ogTags, {
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
      lineNumber: 84,
      columnNumber: 7
    }
  })), __jsx("section", {
    className: "jsx-1703421768" + " " + 'header_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "home",
    className: "jsx-1703421768" + " " + 'header_slider',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'slick-list draggable',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
      lineNumber: 99,
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
      lineNumber: 100,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-10',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
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
      lineNumber: 113,
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
      lineNumber: 118,
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
      lineNumber: 126,
      columnNumber: 25
    }
  }, coupleName), __jsx("span", {
    "data-animation": "fadeInUp",
    "data-delay": "1s",
    style: {
      animationDelay: '1s'
    },
    className: "jsx-1703421768" + " " + 'location',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, venue.name, ", ", venue.city, ", ", venue.country, ".")))))))))), __jsx("section", {
    id: "coming_soon",
    className: "jsx-1703421768" + " " + 'coming_soon_area pt-20 pb-70',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
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
      lineNumber: 159,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, t('eventDate'), ":"), __jsx("p", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
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
      lineNumber: 172,
      columnNumber: 17
    }
  }, __jsx(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    event: calendarEvent,
    buttonLabel: t('btnAddToMyCalendar'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 19
    }
  })), __jsx("img", {
    src: "/assets/images/section_shape.png",
    alt: "Shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-8',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
      lineNumber: 187,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_count d-flex justify-content-end pt-20',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
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
      lineNumber: 199,
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
      lineNumber: 208,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: venue.mapUrl,
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      borderRadius: 5
    },
    src: "/assets/images/oval-hotel-map-horizontal.png",
    alt: "oval hotel map",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
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
      lineNumber: 219,
      columnNumber: 23
    }
  }, venue.mapUrl)))))))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_shape_2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-2.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 11
    }
  }))), __jsx("section", {
    id: "contact",
    className: "jsx-1703421768" + " " + 'contact_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
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
      lineNumber: 244,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-9',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'section_title text-center pb-30',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
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
      lineNumber: 261,
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
      lineNumber: 270,
      columnNumber: 23
    }
  }, guest.name, ",")), __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
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
      lineNumber: 274,
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
      lineNumber: 283,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 23
    }
  }, t('invitationContent'), t('invitationOutro') && !t('invitationOutro').startsWith('[missing') && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("br", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 31
    }
  }), __jsx("br", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
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
      lineNumber: 306,
      columnNumber: 21
    }
  }, __jsx(qrcode_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: guest.guestId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "jsx-1703421768" + " " + 'text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
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
      lineNumber: 312,
      columnNumber: 21
    }
  }, __jsx("b", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 23
    }
  }, venue.name)), __jsx("br", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 21
    }
  }), venue.addressLine1, __jsx("br", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
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
      lineNumber: 328,
      columnNumber: 19
    }
  }, __jsx("b", {
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 21
    }
  }, weddingDate, " \xB7 ", weddingTime)), t('invitationClosing') && !t('invitationClosing').startsWith('[missing') && __jsx("p", {
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
      lineNumber: 336,
      columnNumber: 23
    }
  }))))))), __jsx("footer", {
    id: "footer",
    className: "jsx-1703421768" + " " + 'footer_area',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_shape_1',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_widget pt-50 pb-10 text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_logo',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
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
      lineNumber: 370,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_title mb-10',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 15
    }
  }, coupleName))))));
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
  weddingTime: '12.00 - 15.00',
  weddingDate: 'Dec 10, 2023',
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: '2023-09-07T19:00:00+08:00',
    timeEndISO: '2023-09-07T21:00:00+08:00'
  },
  coupleInfo: {
    brideName: 'Oladunni ',
    groomName: 'Adewale',
    coupleNameFormat: 'GROOM_FIRST'
  },
  venue: {
    name: 'Eko Hotel',
    addressLine1: 'Eko hotel V.I Lagos State,',
    // addressLine2: 'Eko hotel V.I Lagos State',
    city: 'Lagos',
    country: 'Nigeria',
    mapUrl: 'https://goo.gl/maps/mwseWsNoHxvXLpMSA'
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

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9pMThuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXNvbHZlUGF0aC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpMThuLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXJjb2RlLnJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hZGQtdG8tY2FsZW5kYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsidHJhbnNsYXRlQ29uZmlnIiwiYXBwQ29uZmlnIiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNvbmZpZ0xhbmciLCJsYW5nIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJfb2JqZWN0U3ByZWFkIiwiU2hvd0ludml0ZSIsImN1cnJlbnRVcmwiLCJndWVzdExpc3RMYXN0VXBkYXRlZEF0IiwiZ3Vlc3QiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJsb2dvIiwib2dUYWdzIiwiY291cGxlSW5mbyIsInZlbnVlIiwid2VkZGluZ0RheSIsIndlZGRpbmdEYXRlIiwid2VkZGluZ1RpbWUiLCJjYWxlbmRhckluZm8iLCJicmlkZU5hbWUiLCJncm9vbU5hbWUiLCJjb3VwbGVOYW1lRm9ybWF0IiwiY291cGxlTmFtZVN0ciIsImNvdXBsZU5hbWUiLCJfX2pzeCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInZlbnVlQnJpZWYiLCJuYW1lIiwiY2l0eSIsImNvdW50cnkiLCJ3ZWRkaW5nRGF0ZUJyaWVmIiwiZXZlbnRUaXRsZSIsImV2ZW50RGVzY3JpcHRpb24iLCJjYWxlbmRhckV2ZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwic3RhcnRUaW1lIiwidGltZVN0YXJ0SVNPIiwiZW5kVGltZSIsInRpbWVFbmRJU08iLCJjbGFzc05hbWUiLCJfSlNYU3R5bGUiLCJpZCIsIkhlYWQiLCJfZXh0ZW5kcyIsImd1ZXN0TmFtZSIsInVybCIsImRhdGUiLCJtb2RpZmllZFRpbWUiLCJyZXNvbHZlUGF0aCIsImF1dGhvciIsInN0eWxlIiwib3BhY2l0eSIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJtYXhIZWlnaHQiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJzcmMiLCJoZWFkZXJMb2dvIiwiYWx0IiwiYW5pbWF0aW9uRGVsYXkiLCJ6SW5kZXgiLCJ2aXNpYmlsaXR5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25OYW1lIiwicGFkZGluZ0JvdHRvbSIsIkFkZFRvQ2FsZW5kYXIiLCJldmVudCIsImJ1dHRvbkxhYmVsIiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImhyZWYiLCJtYXBVcmwiLCJib3JkZXJSYWRpdXMiLCJtYXhXaWR0aCIsIm92ZXJmbG93WCIsInRleHRPdmVyZmxvdyIsImJveFNoYWRvdyIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImNvbG9yIiwic3RhcnRzV2l0aCIsInNob3dRckNvZGUiLCJtYXJnaW5Cb3R0b20iLCJRUkNvZGUiLCJ2YWx1ZSIsImd1ZXN0SWQiLCJib3JkZXJCb3R0b20iLCJhZGRyZXNzTGluZTEiLCJmb250U3R5bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImxvY2FsZVBhcmFtcyIsInF1ZXJ5IiwiZW1wdHlHdWVzdFBhcmFtcyIsImdyZWV0aW5nIiwicmVxIiwidSIsImd1ZXN0RGF0YSIsImd1ZXN0TGlzdCIsImRhdGEiLCJtZXRhIiwibGFzdFVwZGF0ZWRBdCIsImZpbHRlciIsInNpdGVOYW1lIiwicHVibGlzaGVkVGltZSIsInByb3BlcnR5IiwiY29udGVudCIsInJlbCIsInR5cGUiLCJiYXNlQ29uZmlnIiwic2hvd0J1aWx0V2l0aEluZm8iLCJmb290ZXJMb2dvIiwiZm9vdGVyTG9nb1R5cGUiLCJhZGRyZXNzTGluZTIiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJjb2RlIiwibGFiZWwiLCJ0cmFuc2xhdGlvbnMiLCJlbiIsIkkxOG4iLCJmb3JFYWNoIiwibGFuZ3VhZ2VPcHRpb25zIiwibWFwIiwic2V0TG9jYWxlIiwicGFyYW1zIiwiVHJhbnMiLCJwcm9wcyIsImkxOG5LZXkiLCJmYWxsYmFja0hvc3QiLCJwYXRoIiwiaGVhZGVycyIsInByb3RvY29sIiwiaG9zdCIsIndpbmRvdyIsInNjaGVtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7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QkFBc0IsQ0FBQyxJQUMvQkEsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQzNCQSxPQUFPLENBQUNFLElBQUksR0FDWixJQUFJO0VBQ1IsTUFBTUUsTUFBTSxHQUNWSixPQUFPLElBQUlBLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxHQUNuQ0EsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEdBQzVCLE1BQU07RUFDWixPQUFPRSxJQUFJLEdBQUksR0FBRUUsTUFBTyxNQUFLRixJQUFLLEdBQUVILElBQUssRUFBQyxHQUFJLEdBQUVELFlBQWEsR0FBRUMsSUFBSyxFQUFDO0FBQ3ZFLENBQUMsRTs7Ozs7Ozs7Ozs7QUMzQkQsb0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzeFwiKTtcbiIsImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuXG5jb25zdCB0cmFuc2xhdGVDb25maWcgPSAoYXBwQ29uZmlnLCBsb2NhbGUpID0+IHtcbiAgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSBkZWZhdWx0TG9jYWxlKSB7XG4gICAgcmV0dXJuIGFwcENvbmZpZztcbiAgfVxuICAvLyBSZXBsYWNlIGNvbmZpZyB3aXRoIGxhbmdcbiAgY29uc3QgY29uZmlnTGFuZyA9IGFwcENvbmZpZy5sYW5nW2xvY2FsZV07XG4gIGlmIChjb25maWdMYW5nID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbG9jYWxlOiAnLCBsb2NhbGUpO1xuICB9XG4gIHJldHVybiB7IC4uLmFwcENvbmZpZywgLi4uY29uZmlnTGFuZyB9O1xufTtcblxuY29uc3QgU2hvd0ludml0ZSA9ICh7IGN1cnJlbnRVcmwsIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsIGd1ZXN0IH0pID0+IHtcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9uKGd1ZXN0LmxvY2FsZSk7XG5cbiAgLy8gSW5pdGlhdGUgY29uZmlnIHZhcmlhYmxlc1xuICBjb25zdCB7XG4gICAgbG9nbyxcbiAgICBvZ1RhZ3MsXG4gICAgY291cGxlSW5mbyxcbiAgICB2ZW51ZSxcbiAgICB3ZWRkaW5nRGF5LFxuICAgIHdlZGRpbmdEYXRlLFxuICAgIHdlZGRpbmdUaW1lLFxuICAgIGNhbGVuZGFySW5mbyxcbiAgfSA9IHRyYW5zbGF0ZUNvbmZpZyhhcHBDb25maWcsIGd1ZXN0LmxvY2FsZSk7XG4gIGNvbnN0IHsgYnJpZGVOYW1lLCBncm9vbU5hbWUsIGNvdXBsZU5hbWVGb3JtYXQgfSA9IGNvdXBsZUluZm87XG5cbiAgY29uc3QgY291cGxlTmFtZVN0ciA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJ1xuICAgICAgPyBgJHtncm9vbU5hbWV9ICYgJHticmlkZU5hbWV9YFxuICAgICAgOiBgJHticmlkZU5hbWV9ICYgJHtncm9vbU5hbWV9YDtcbiAgY29uc3QgY291cGxlTmFtZSA9XG4gICAgY291cGxlTmFtZUZvcm1hdCA9PT0gJ0dST09NX0ZJUlNUJyA/IChcbiAgICAgIDw+XG4gICAgICAgIHtncm9vbU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7YnJpZGVOYW1lfVxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIDw+XG4gICAgICAgIHticmlkZU5hbWV9IDxzcGFuPiZhbXA7PC9zcGFuPiB7Z3Jvb21OYW1lfVxuICAgICAgPC8+XG4gICAgKTtcblxuICAvLyBWZW51ZSBpbmZvXG4gIGNvbnN0IHZlbnVlQnJpZWYgPSBgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWA7XG4gIGNvbnN0IHdlZGRpbmdEYXRlQnJpZWYgPSBgJHt3ZWRkaW5nRGF5fSwgJHt3ZWRkaW5nRGF0ZX1gO1xuXG4gIC8vIEV2ZW50IGluZm9cbiAgY29uc3QgZXZlbnRUaXRsZSA9IGAke2NvdXBsZU5hbWVTdHJ9J3MgV2VkZGluZ2A7XG4gIGxldCBldmVudERlc2NyaXB0aW9uID0gYCR7d2VkZGluZ0RhdGVCcmllZn0gYXQgJHt2ZW51ZS5uYW1lfSwgJHt2ZW51ZS5jaXR5fWA7XG4gIGlmIChndWVzdC5uYW1lKSB7XG4gICAgZXZlbnREZXNjcmlwdGlvbiA9IGBEZWFyICR7Z3Vlc3QubmFtZX0sIHlvdSBhcmUgY29yZGlhbGx5IGludml0ZWQgdG8gb3VyIHdlZGRpbmcgb24gJHt3ZWRkaW5nRGF0ZX0gYXQgJHt2ZW51ZS5uYW1lfS4gTG9va2luZyBmb3J3YXJkIHRvIHNlZWluZyB5b3UhYDtcbiAgfVxuXG4gIC8vIENhbGVuZGFyIHBheWxvYWRcbiAgY29uc3QgY2FsZW5kYXJFdmVudCA9IHtcbiAgICB0aXRsZTogZXZlbnRUaXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZXZlbnREZXNjcmlwdGlvbixcbiAgICBsb2NhdGlvbjogYCR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gLFxuICAgIHN0YXJ0VGltZTogY2FsZW5kYXJJbmZvLnRpbWVTdGFydElTTyxcbiAgICBlbmRUaW1lOiBjYWxlbmRhckluZm8udGltZUVuZElTTyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBhLnJlYWN0LWFkZC10by1jYWxlbmRhcl9fYnV0dG9uIHNwYW4ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkXG4gICAgICAgIHsuLi5vZ1RhZ3N9XG4gICAgICAgIHRpdGxlPXtldmVudFRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZXZlbnREZXNjcmlwdGlvbn1cbiAgICAgICAgZ3Vlc3ROYW1lPXtndWVzdC5uYW1lfVxuICAgICAgICB1cmw9e2N1cnJlbnRVcmx9XG4gICAgICAgIGRhdGU9e3dlZGRpbmdEYXRlQnJpZWZ9XG4gICAgICAgIG1vZGlmaWVkVGltZT17Z3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdH1cbiAgICAgICAgdmVudWU9e3ZlbnVlQnJpZWZ9XG4gICAgICAgIGxvZ289e3Jlc29sdmVQYXRoKG9nVGFncy5sb2dvKX1cbiAgICAgICAgYXV0aG9yPXtyZXNvbHZlUGF0aCgnLycpfVxuICAgICAgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naGVhZGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGlkPSdob21lJyBjbGFzc05hbWU9J2hlYWRlcl9zbGlkZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay1saXN0IGRyYWdnYWJsZSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stdHJhY2snIHN0eWxlPXt7IG9wYWNpdHk6IDEgfX0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZV9zbGlkZXIgYmdfY292ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcidcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMTAnPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX2NvbnRlbnQgdGV4dC1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDYwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfc3ViX3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC4ycycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3NpdGVJbnRybycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuN3MnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMXMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5uYW1lfSwge3ZlbnVlLmNpdHl9LCB7dmVudWUuY291bnRyeX0uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29taW5nX3Nvb24nIGNsYXNzTmFtZT0nY29taW5nX3Nvb25fYXJlYSBwdC0yMCBwYi03MCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8xJyBzdHlsZT17eyB6SW5kZXg6IDEgfX0+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy00Jz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSBwdC01MCB3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3QoJ2V2ZW50RGF0ZScpfTo8L2gzPlxuICAgICAgICAgICAgICAgIDxwPnt3ZWRkaW5nRGF0ZUJyaWVmfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxBZGRUb0NhbGVuZGFyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50PXtjYWxlbmRhckV2ZW50fVxuICAgICAgICAgICAgICAgICAgICBidXR0b25MYWJlbD17dCgnYnRuQWRkVG9NeUNhbGVuZGFyJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zZWN0aW9uX3NoYXBlLnBuZycgYWx0PSdTaGFwZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9jb3VudCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC0yMCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNjAsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZV9jb3VudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMzAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvdW50X2NvbnRlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxLCBwYWRkaW5nVG9wOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmVudWUubWFwVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWFnZXMvb3ZhbC1ob3RlbC1tYXAtaG9yaXpvbnRhbC5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nb3ZhbCBob3RlbCBtYXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc3NXZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8yJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMi5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29udGFjdCcgY2xhc3NOYW1lPSdjb250YWN0X2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhY3Rfd3JhcHBlciB3b3cgZmFkZUluVXBCaWcnXG4gICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjRzJ1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMzAsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC40cycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW5VcCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgdGV4dC1jZW50ZXIgcGItMzAnPlxuICAgICAgICAgICAgICAgICAge2d1ZXN0Lm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25HcmVldGluZycpfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJyB9fT57Z3Vlc3QubmFtZX0sPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3QoJ2ludml0YXRpb25JbnRybycpfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZGltZ3JleScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IHQoJ2ludml0YXRpb25Db250ZW50VGV4dEFsaWduJyksXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpPlxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25Db250ZW50Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnaW52aXRhdGlvbk91dHJvJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXQoJ2ludml0YXRpb25PdXRybycpLnN0YXJ0c1dpdGgoJ1ttaXNzaW5nJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25PdXRybycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHthcHBDb25maWcuc2hvd1FyQ29kZSAmJiBndWVzdC5uYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwLCBtYXJnaW5Cb3R0b206IDM1IH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e2d1ZXN0Lmd1ZXN0SWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXt2ZW51ZS5tYXBVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzAuMnJlbSBzb2xpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Yj57dmVudWUubmFtZX08L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5hZGRyZXNzTGluZTF9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7Lyoge3ZlbnVlLmFkZHJlc3NMaW5lMn1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICB7dmVudWUuY291bnRyeX0uXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQnIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgIHt3ZWRkaW5nRGF0ZX0gwrcge3dlZGRpbmdUaW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgIHt0KCdpbnZpdGF0aW9uQ2xvc2luZycpICYmXG4gICAgICAgICAgICAgICAgICAgICF0KCdpbnZpdGF0aW9uQ2xvc2luZycpLnN0YXJ0c1dpdGgoJ1ttaXNzaW5nJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHQoJ2ludml0YXRpb25DbG9zaW5nJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgbWItMTAnPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e2NvdXBsZU5hbWV9PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2hvd0ludml0ZS5nZXRJbml0aWFsUHJvcHMgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IGxvY2FsZVBhcmFtcyA9IGN0eC5xdWVyeS5sYW5nIHx8IGRlZmF1bHRMb2NhbGU7XG4gIGNvbnN0IGVtcHR5R3Vlc3RQYXJhbXMgPSB7XG4gICAgZ3Vlc3Q6IHtcbiAgICAgIGd1ZXN0SWQ6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBncmVldGluZzogJycsXG4gICAgICBsb2NhbGU6IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRVcmwgPSByZXNvbHZlUGF0aChjdHgucmVxLnVybCk7XG4gIGNvbnN0IGd1ZXN0SWQgPSBjdHgucXVlcnkudTtcbiAgaWYgKCFndWVzdElkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBndWVzdERhdGEgPSBndWVzdExpc3QuZGF0YTtcbiAgY29uc3QgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCA9IGd1ZXN0TGlzdC5tZXRhLmxhc3RVcGRhdGVkQXQ7XG4gIGNvbnN0IHsgbmFtZSwgZ3JlZXRpbmcsIGxvY2FsZSB9ID1cbiAgICBndWVzdERhdGEuZmlsdGVyKChndWVzdCkgPT4gZ3Vlc3QuZ3Vlc3RJZCA9PT0gZ3Vlc3RJZClbMF0gfHwge307XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgLi4uZW1wdHlHdWVzdFBhcmFtcyxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXJsLFxuICAgIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsXG4gICAgZ3Vlc3Q6IHtcbiAgICAgIG5hbWUsXG4gICAgICBncmVldGluZyxcbiAgICAgIGd1ZXN0SWQsXG4gICAgICBsb2NhbGU6IGxvY2FsZSB8fCBsb2NhbGVQYXJhbXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dJbnZpdGU7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHJlc29sdmVQYXRoIGZyb20gJ0BzcmMvdXRpbHMvcmVzb2x2ZVBhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHVybCxcbiAgbG9nbyxcbiAgYXV0aG9yLFxuICBzaXRlTmFtZSxcbiAgcHVibGlzaGVkVGltZSxcbiAgbW9kaWZpZWRUaW1lLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J2FydGljbGUnIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dGl0bGUnIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e3NpdGVOYW1lfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnVybCcgY29udGVudD17dXJsfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOmltYWdlJyBjb250ZW50PXtsb2dvfSAvPlxuICAgICAge3B1Ymxpc2hlZFRpbWUgJiYgKFxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT0nYXJ0aWNsZTpwdWJsaXNoZWRfdGltZScgY29udGVudD17cHVibGlzaGVkVGltZX0gLz5cbiAgICAgICl9XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nYXJ0aWNsZTptb2RpZmllZF90aW1lJyBjb250ZW50PXttb2RpZmllZFRpbWV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nYXJ0aWNsZTphdXRob3InIGNvbnRlbnQ9e2F1dGhvcn0gLz5cblxuICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPSdzaG9ydGN1dCBpY29uJ1xuICAgICAgICBocmVmPSdhc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nPzEyMydcbiAgICAgICAgdHlwZT0naW1hZ2UvcG5nJ1xuICAgICAgLz5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nYXNzZXRzL2Nzcy9hbmltYXRlLmNzcycgLz5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nYXNzZXRzL2Nzcy9ib290c3RyYXAubWluLmNzcycgLz5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nYXNzZXRzL2Nzcy9kZWZhdWx0LmNzcycgLz5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nYXNzZXRzL2Nzcy9zdHlsZS5jc3MnIC8+XG5cbiAgICAgIHsvKiBGT1IgSUU5IGJlbG93ICovfVxuICAgICAgey8qIFtpZiBsdCBJRSA5XT4gKi99XG4gICAgICA8c2NyaXB0IHNyYz0nYXNzZXRzL2pzL3ZlbmRvci9qcXVlcnktMS4xMi40Lm1pbi5qcyc+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz0nYXNzZXRzL2pzL3ZlbmRvci9tb2Rlcm5penItMy43LjEubWluLmpzJz48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPSdhc3NldHMvanMvYm9vdHN0cmFwLm1pbi5qcyc+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz0nYXNzZXRzL2pzL2pxdWVyeS5lYXNpbmcubWluLmpzJz48L3NjcmlwdD5cbiAgICA8L0hlYWQ+XG4gICk7XG59O1xuIiwiY29uc3QgYmFzZUNvbmZpZyA9IHtcbiAgd2VkZGluZ0RheTogJ1NhdHVyZGF5JyxcbiAgd2VkZGluZ1RpbWU6ICcxMi4wMCAtIDE1LjAwJyxcbiAgd2VkZGluZ0RhdGU6ICdEZWMgMTAsIDIwMjMnLFxuICBzaG93QnVpbHRXaXRoSW5mbzogdHJ1ZSxcbiAgc2hvd1FyQ29kZTogZmFsc2UsXG4gIGNhbGVuZGFySW5mbzoge1xuICAgIHRpbWVTdGFydElTTzogJzIwMjMtMDktMDdUMTk6MDA6MDArMDg6MDAnLFxuICAgIHRpbWVFbmRJU086ICcyMDIzLTA5LTA3VDIxOjAwOjAwKzA4OjAwJyxcbiAgfSxcbiAgY291cGxlSW5mbzoge1xuICAgIGJyaWRlTmFtZTogJ09sYWR1bm5pICcsXG4gICAgZ3Jvb21OYW1lOiAnQWRld2FsZScsXG4gICAgY291cGxlTmFtZUZvcm1hdDogJ0dST09NX0ZJUlNUJyxcbiAgfSxcbiAgdmVudWU6IHtcbiAgICBuYW1lOiAnRWtvIEhvdGVsJyxcbiAgICBhZGRyZXNzTGluZTE6ICdFa28gaG90ZWwgVi5JIExhZ29zIFN0YXRlLCcsXG4gICAgLy8gYWRkcmVzc0xpbmUyOiAnRWtvIGhvdGVsIFYuSSBMYWdvcyBTdGF0ZScsXG4gICAgY2l0eTogJ0xhZ29zJyxcbiAgICBjb3VudHJ5OiAnTmlnZXJpYScsXG4gICAgbWFwVXJsOiAnaHR0cHM6Ly9nb28uZ2wvbWFwcy9td3NlV3NOb0h4dlhMcE1TQScsXG4gIH0sXG4gIGxvZ286IHtcbiAgICBoZWFkZXJMb2dvOiAnYXNzZXRzL2ltYWdlcy9yaW5nLXN2Zy5wbmcnLFxuICAgIGZvb3RlckxvZ286ICdhc3NldHMvdmlkZW8vYXctcmluZy1sb2dvLXRpY2tlci5tcDQnLFxuICAgIGZvb3RlckxvZ29UeXBlOiAnbXA0JyxcbiAgfSxcbiAgb2dUYWdzOiB7XG4gICAgbG9nbzogJ2Fzc2V0cy9pbWFnZXMvYXctcmluZy1sb2dvLnBuZycsXG4gICAgc2l0ZU5hbWU6ICdodHRwczovL2Z1Z2x5ZGFtaS5naXRodWIuaW8vYWRld2FsZS13ZWRkaW5nLycsXG4gICAgcHVibGlzaGVkVGltZTogJzIwMjMtMDktMDcnLFxuICB9LFxufTtcblxuY29uc3QgbGFuZyA9IHtcbiAgaWQ6IHtcbiAgICB3ZWRkaW5nRGF5OiAnU2FidHUnLFxuICAgIHdlZGRpbmdEYXRlOiAnMjIgRmVicnVhcmkgMjAyMCcsXG4gICAgdmVudWU6IHtcbiAgICAgIC4uLmJhc2VDb25maWcudmVudWUsXG4gICAgICBuYW1lOiAnSG90ZWwgT3ZhbCcsXG4gICAgICBhZGRyZXNzTGluZTI6ICdTdXJhYmF5YSwgSmF3YSBUaW11ciwgNjAyNDEsJyxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi5iYXNlQ29uZmlnLFxuICBsYW5nLFxufTtcbiIsImltcG9ydCBJMThuIGZyb20gXCJpMThuLWpzXCI7XG5pbXBvcnQgZW4gZnJvbSBcIi4vbGFuZy9lblwiO1xuaW1wb3J0IGlkIGZyb20gXCIuL2xhbmcvaWRcIjtcblxuY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gW1xuICB7XG4gICAgY29kZTogXCJlblwiLFxuICAgIGxhYmVsOiBcIkVuZ2xpc2hcIixcbiAgICB0cmFuc2xhdGlvbnM6IGVuXG4gIH0sXG4gIHtcbiAgICBjb2RlOiBcImlkXCIsXG4gICAgbGFiZWw6IFwiSW5kb25lc2lhXCIsXG4gICAgdHJhbnNsYXRpb25zOiBpZFxuICB9XG5dO1xuXG5JMThuLmRlZmF1bHRMb2NhbGUgPSBcImVuXCI7XG5zdXBwb3J0ZWRMYW5ndWFnZXMuZm9yRWFjaChsYW5nID0+IHtcbiAgSTE4bi50cmFuc2xhdGlvbnNbbGFuZy5jb2RlXSA9IGxhbmcudHJhbnNsYXRpb25zO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsYW5ndWFnZU9wdGlvbnMgPSBzdXBwb3J0ZWRMYW5ndWFnZXMubWFwKGxhbmcgPT4gKHtcbiAgdmFsdWU6IGxhbmcuY29kZSxcbiAgbGFiZWw6IGxhbmcubGFiZWxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IHNldExvY2FsZSA9IGxvY2FsZSA9PiB7XG4gIEkxOG4ubG9jYWxlID0gbG9jYWxlO1xufTtcblxuZXhwb3J0IGNvbnN0IHQgPSAobmFtZSwgcGFyYW1zID0ge30pID0+IHtcbiAgcmV0dXJuIEkxOG4udChuYW1lLCBwYXJhbXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IFRyYW5zID0gcHJvcHMgPT4gKFxuICA8c3BhblxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdChwcm9wcy5pMThuS2V5LCB7IC4uLnByb3BzIH0pIH19XG4gID48L3NwYW4+XG4pO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZSA9IEkxOG4uZGVmYXVsdExvY2FsZTtcblxuZXhwb3J0IGNvbnN0IHVzZVRyYW5zbGF0aW9uID0gbG9jYWxlID0+IHtcbiAgSTE4bi5sb2NhbGUgPSBsb2NhbGU7XG4gIHJldHVybiBJMThuLnQ7XG59O1xuIiwiY29uc3QgZmFsbGJhY2tIb3N0ID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHBhdGgsIGhlYWRlcnMpID0+IHtcbiAgaWYgKHBhdGguc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIC8vIFVzZSBicm93c2VyJ3MgYHdpbmRvd2AgaWYgaGVhZGVycyBpcyBub3QgcHJvdmlkZWRcbiAgaWYgKCFoZWFkZXJzICYmIHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiY291bGQgbm90IHJlc29sdmUgcGF0aCB3aXRob3V0IHJlcXVlc3QgaGVhZGVyczogd2luZG93IGlzIHVuZGVmaW5lZFwiXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0fSR7cGF0aH1gO1xuICB9XG4gIGNvbnN0IGhvc3QgPSBoZWFkZXJzXG4gICAgPyBoZWFkZXJzW1wieC1ub3ctZGVwbG95bWVudC11cmxcIl0gfHxcbiAgICAgIGhlYWRlcnNbXCJ4LWZvcndhcmRlZC1ob3N0XCJdIHx8XG4gICAgICBoZWFkZXJzLmhvc3RcbiAgICA6IG51bGw7XG4gIGNvbnN0IHNjaGVtZSA9XG4gICAgaGVhZGVycyAmJiBoZWFkZXJzW1wieC1mb3J3YXJkZWQtcHJvdG9cIl1cbiAgICAgID8gaGVhZGVyc1tcIngtZm9yd2FyZGVkLXByb3RvXCJdXG4gICAgICA6IFwiaHR0cFwiO1xuICByZXR1cm4gaG9zdCA/IGAke3NjaGVtZX06Ly8ke2hvc3R9JHtwYXRofWAgOiBgJHtmYWxsYmFja0hvc3R9JHtwYXRofWA7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaTE4bi1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXJjb2RlLnJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFkZC10by1jYWxlbmRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9