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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


/***/ }),

/***/ "EstQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export languageOptions */
/* unused harmony export setLocale */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return t; });
/* unused harmony export Trans */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useTranslation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hBYl");
/* harmony import */ var i18n_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(i18n_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WEjg");
var _lang_en__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t("WEjg", 1);
/* harmony import */ var _lang_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("lxf9");
var _lang_id__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("lxf9", 1);

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
  }
});
const defaultLocale = i18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.defaultLocale;
const useTranslation = locale => {
  i18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.locale = locale;
  return i18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.t;
};

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "P7wJ":
/***/ (function(module, exports) {

module.exports = require("qrcode.react");

/***/ }),

/***/ "WEjg":
/***/ (function(module) {

module.exports = JSON.parse("{\"siteIntro\":\"WE ARE GETTING MARRIED\",\"eventDate\":\"Event Date\",\"invitationGreeting\":\"Dear\",\"invitationIntro\":\"You Are Cordially Invited\",\"invitationContent\":\"Our joy will be more complete with your presence in our special day.\",\"invitationContentTextAlign\":\"left\",\"invitationOutro\":\"We are looking forward to seeing you.\",\"btnAddToMyCalendar\":\"Add to my calendar\",\"guestCheckin\":{\"pleaseScanInvitation\":\"Please scan your invitation..\"}}");

/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-add-to-calendar"
var external_react_add_to_calendar_ = __webpack_require__("vY2J");
var external_react_add_to_calendar_default = /*#__PURE__*/__webpack_require__.n(external_react_add_to_calendar_);

// EXTERNAL MODULE: external "qrcode.react"
var external_qrcode_react_ = __webpack_require__("P7wJ");
var external_qrcode_react_default = /*#__PURE__*/__webpack_require__.n(external_qrcode_react_);

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__("aYjl");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./src/utils/resolvePath.js
const fallbackHost = "http://localhost:3000";
/* harmony default export */ var resolvePath = ((path, headers) => {
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
// CONCATENATED MODULE: ./src/components/Head.jsx

var __jsx = external_react_default.a.createElement;


/* harmony default export */ var Head = (({
  title,
  description,
  url,
  logo,
  author,
  siteName,
  publishedTime,
  modifiedTime
}) => {
  return __jsx(head_default.a, null, __jsx("title", null, title), __jsx("meta", {
    property: "og:type",
    content: "article"
  }), __jsx("meta", {
    property: "og:title",
    content: title
  }), __jsx("meta", {
    property: "og:description",
    content: description
  }), __jsx("meta", {
    property: "og:site_name",
    content: siteName
  }), __jsx("meta", {
    property: "og:url",
    content: url
  }), __jsx("meta", {
    property: "og:image",
    content: logo
  }), publishedTime && __jsx("meta", {
    property: "article:published_time",
    content: publishedTime
  }), __jsx("meta", {
    property: "article:modified_time",
    content: modifiedTime
  }), __jsx("meta", {
    property: "article:author",
    content: author
  }), __jsx("meta", {
    name: "description",
    content: description
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "assets/images/favicon.png?123",
    type: "image/png"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "assets/css/animate.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "assets/css/bootstrap.min.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "assets/css/default.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "assets/css/style.css"
  }), __jsx("script", {
    src: "assets/js/vendor/jquery-1.12.4.min.js"
  }), __jsx("script", {
    src: "assets/js/vendor/modernizr-3.7.1.min.js"
  }), __jsx("script", {
    src: "assets/js/bootstrap.min.js"
  }), __jsx("script", {
    src: "assets/js/jquery.easing.min.js"
  }));
});
// CONCATENATED MODULE: ./src/config/app.js
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
/* harmony default export */ var app = (_objectSpread(_objectSpread({}, baseConfig), {}, {
  lang
}));
// EXTERNAL MODULE: ./src/i18n/index.js
var i18n = __webpack_require__("EstQ");

// EXTERNAL MODULE: ./pages/guest_list.json
var guest_list = __webpack_require__("iSJ9");

// CONCATENATED MODULE: ./pages/index.jsx


var pages_jsx = external_react_default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function pages_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function pages_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? pages_ownKeys(Object(t), !0).forEach(function (r) { pages_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : pages_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function pages_defineProperty(obj, key, value) { key = pages_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function pages_toPropertyKey(arg) { var key = pages_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function pages_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








const translateConfig = (appConfig, locale) => {
  if (!locale || locale === i18n["a" /* defaultLocale */]) {
    return appConfig;
  }
  // Replace config with lang
  const configLang = appConfig.lang[locale];
  if (configLang === undefined) {
    throw new Error('invalid locale: ', locale);
  }
  return pages_objectSpread(pages_objectSpread({}, appConfig), configLang);
};
const ShowInvite = ({
  currentUrl,
  guestListLastUpdatedAt,
  guest
}) => {
  const t = Object(i18n["c" /* useTranslation */])(guest.locale);

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
  } = translateConfig(app, guest.locale);
  const {
    brideName,
    groomName,
    coupleNameFormat
  } = coupleInfo;
  const coupleNameStr = coupleNameFormat === 'GROOM_FIRST' ? `${groomName} & ${brideName}` : `${brideName} & ${groomName}`;
  const coupleName = coupleNameFormat === 'GROOM_FIRST' ? pages_jsx(external_react_default.a.Fragment, null, groomName, " ", pages_jsx("span", null, "&"), " ", brideName) : pages_jsx(external_react_default.a.Fragment, null, brideName, " ", pages_jsx("span", null, "&"), " ", groomName);

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
  return pages_jsx("div", {
    className: "jsx-1703421768"
  }, pages_jsx(style_default.a, {
    id: "1703421768"
  }, ["a.react-add-to-calendar__button span{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}"]), pages_jsx(Head, _extends({}, ogTags, {
    title: eventTitle,
    description: eventDescription,
    guestName: guest.name,
    url: currentUrl,
    date: weddingDateBrief,
    modifiedTime: guestListLastUpdatedAt,
    venue: venueBrief,
    logo: resolvePath(ogTags.logo),
    author: resolvePath('/')
  })), pages_jsx("section", {
    className: "jsx-1703421768" + " " + 'header_area'
  }, pages_jsx("div", {
    id: "home",
    className: "jsx-1703421768" + " " + 'header_slider'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'slick-list draggable'
  }, pages_jsx("div", {
    style: {
      opacity: 1
    },
    className: "jsx-1703421768" + " " + 'slick-track'
  }, pages_jsx("div", {
    style: {
      height: '100vh'
    },
    className: "jsx-1703421768" + " " + 'single_slider bg_cover d-flex align-items-center'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'container'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-10'
  }, pages_jsx("div", {
    style: {
      paddingTop: 0
    },
    className: "jsx-1703421768" + " " + 'slider_content text-center'
  }, pages_jsx("img", {
    style: {
      maxHeight: 60,
      margin: 25,
      marginTop: 0
    },
    src: logo.headerLogo,
    alt: "logo",
    className: "jsx-1703421768"
  }), pages_jsx("h5", {
    "data-animation": "fadeInUp",
    "data-delay": "0.2s",
    style: {
      animationDelay: '0.2s'
    },
    className: "jsx-1703421768" + " " + 'slider_sub_title'
  }, t('siteIntro')), pages_jsx("h2", {
    "data-animation": "fadeInUp",
    "data-delay": "0.7s",
    style: {
      animationDelay: '0.7s'
    },
    className: "jsx-1703421768" + " " + 'slider_title'
  }, coupleName), pages_jsx("span", {
    "data-animation": "fadeInUp",
    "data-delay": "1s",
    style: {
      animationDelay: '1s'
    },
    className: "jsx-1703421768" + " " + 'location'
  }, venue.name, ", ", venue.city, ", ", venue.country, ".")))))))))), pages_jsx("section", {
    id: "coming_soon",
    className: "jsx-1703421768" + " " + 'coming_soon_area pt-20 pb-70'
  }, pages_jsx("div", {
    style: {
      zIndex: 1
    },
    className: "jsx-1703421768" + " " + 'coming_soon_shape_1'
  }, pages_jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768"
  })), pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'container'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'row align-items-center'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-4'
  }, pages_jsx("div", {
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.2s",
    style: {
      visibility: 'visible',
      animationDuration: '1.3s',
      animationDelay: '0.2s',
      animationName: 'fadeIn'
    },
    className: "jsx-1703421768" + " " + 'section_title pt-50 wow fadeIn'
  }, pages_jsx("h3", {
    className: "jsx-1703421768" + " " + 'title'
  }, t('eventDate'), ":"), pages_jsx("p", {
    className: "jsx-1703421768"
  }, weddingDateBrief), pages_jsx("div", {
    style: {
      paddingTop: '0.2rem',
      paddingBottom: '0.2rem'
    },
    className: "jsx-1703421768"
  }, pages_jsx(external_react_add_to_calendar_default.a, {
    event: calendarEvent,
    buttonLabel: t('btnAddToMyCalendar')
  })), pages_jsx("img", {
    src: "assets/images/section_shape.png",
    alt: "Shape",
    className: "jsx-1703421768"
  }))), pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-8'
  }, pages_jsx("div", {
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.6s",
    style: {
      visibility: 'visible',
      animationDuration: '1.3s',
      animationDelay: '0.6s',
      animationName: 'fadeIn'
    },
    className: "jsx-1703421768" + " " + 'wow fadeIn'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_count d-flex justify-content-end pt-20'
  }, pages_jsx("div", {
    style: {
      marginRight: 20,
      width: 360,
      height: 138,
      backgroundColor: 'transparent'
    },
    className: "jsx-1703421768" + " " + 'single_count d-flex align-items-center justify-content-center mt-30'
  }, pages_jsx("div", {
    style: {
      zIndex: 1,
      paddingTop: 20
    },
    className: "jsx-1703421768" + " " + 'count_content'
  }, pages_jsx("a", {
    href: venue.mapUrl,
    className: "jsx-1703421768"
  }, pages_jsx("img", {
    style: {
      borderRadius: 5
    },
    src: "assets/images/oval-hotel-map-horizontal.png",
    alt: "oval hotel map",
    className: "jsx-1703421768"
  })), pages_jsx("a", {
    href: venue.mapUrl,
    style: {
      maxWidth: '75vw',
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
      marginTop: 10
    },
    className: "jsx-1703421768"
  }, venue.mapUrl)))))))), pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_shape_2'
  }, pages_jsx("img", {
    src: "/assets/images/shape-2.png",
    alt: "shape",
    className: "jsx-1703421768"
  }))), pages_jsx("section", {
    id: "contact",
    className: "jsx-1703421768" + " " + 'contact_area'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'container'
  }, pages_jsx("div", {
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
    className: "jsx-1703421768" + " " + 'contact_wrapper wow fadeInUpBig'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-9'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'section_title text-center pb-30'
  }, guest.name && pages_jsx("div", {
    style: {
      textAlign: 'center',
      maxWidth: 400,
      margin: 'auto',
      paddingBottom: 20
    },
    className: "jsx-1703421768"
  }, t('invitationGreeting'), pages_jsx("p", {
    style: {
      fontSize: '1.5rem'
    },
    className: "jsx-1703421768"
  }, guest.name, ",")), pages_jsx("h3", {
    className: "jsx-1703421768" + " " + 'title'
  }, t('invitationIntro')), pages_jsx("div", {
    style: {
      textAlign: 'left',
      paddingTop: 20,
      paddingBottom: 20,
      maxWidth: 400,
      margin: 'auto'
    },
    className: "jsx-1703421768"
  }, pages_jsx("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 'inherit',
      color: 'dimgrey',
      textAlign: t('invitationContentTextAlign')
    },
    className: "jsx-1703421768"
  }, pages_jsx("i", {
    className: "jsx-1703421768"
  }, t('invitationContent'), t('invitationOutro') && !t('invitationOutro').startsWith('[missing') && pages_jsx(external_react_default.a.Fragment, null, pages_jsx("br", {
    className: "jsx-1703421768"
  }), pages_jsx("br", {
    className: "jsx-1703421768"
  }), t('invitationOutro'))))), app.showQrCode && guest.name && pages_jsx("div", {
    style: {
      marginTop: 20,
      marginBottom: 35
    },
    className: "jsx-1703421768"
  }, pages_jsx(external_qrcode_react_default.a, {
    value: guest.guestId
  })), pages_jsx("p", {
    className: "jsx-1703421768" + " " + 'text'
  }, pages_jsx("a", {
    href: venue.mapUrl,
    style: {
      borderBottom: '0.2rem solid',
      marginBottom: 10
    },
    className: "jsx-1703421768"
  }, pages_jsx("b", {
    className: "jsx-1703421768"
  }, venue.name)), pages_jsx("br", {
    className: "jsx-1703421768"
  }), venue.addressLine1, pages_jsx("br", {
    className: "jsx-1703421768"
  }), venue.country, "."), pages_jsx("p", {
    style: {
      marginTop: 10
    },
    className: "jsx-1703421768" + " " + 'text'
  }, pages_jsx("b", {
    className: "jsx-1703421768"
  }, weddingDate, " \xB7 ", weddingTime)), t('invitationClosing') && !t('invitationClosing').startsWith('[missing') && pages_jsx("p", {
    style: {
      fontStyle: 'italic',
      maxWidth: 420,
      margin: 'auto',
      marginTop: 60
    },
    dangerouslySetInnerHTML: {
      __html: t('invitationClosing')
    },
    className: "jsx-1703421768" + " " + 'text'
  }))))))), pages_jsx("footer", {
    id: "footer",
    className: "jsx-1703421768" + " " + 'footer_area'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_shape_1'
  }, pages_jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768"
  })), pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'container'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_widget pt-50 pb-10 text-center'
  }, pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_logo'
  }, pages_jsx("img", {
    style: {
      maxHeight: 90,
      margin: 25,
      marginTop: 0
    },
    src: logo.headerLogo,
    alt: "logo",
    className: "jsx-1703421768"
  })), pages_jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_title mb-10'
  }, pages_jsx("h3", {
    className: "jsx-1703421768" + " " + 'title'
  }, coupleName))))));
};
ShowInvite.getInitialProps = ctx => {
  const localeParams = ctx.query.lang || i18n["a" /* defaultLocale */];
  const emptyGuestParams = {
    guest: {
      guestId: '',
      name: '',
      greeting: '',
      locale: localeParams
    }
  };
  const currentUrl = resolvePath(ctx.req.url);
  const guestId = ctx.query.u;
  if (!guestId) {
    return pages_objectSpread({
      currentUrl
    }, emptyGuestParams);
  }
  const guestData = guest_list.data;
  const guestListLastUpdatedAt = guest_list.meta.lastUpdatedAt;
  const {
    name,
    greeting,
    locale
  } = guestData.filter(guest => guest.guestId === guestId)[0] || {};
  if (!name) {
    return pages_objectSpread({
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
/* harmony default export */ var pages = __webpack_exports__["default"] = (ShowInvite);

/***/ }),

/***/ "hBYl":
/***/ (function(module, exports) {

module.exports = require("i18n-js");

/***/ }),

/***/ "iSJ9":
/***/ (function(module) {

module.exports = JSON.parse("{\"meta\":{\"lastUpdatedAt\":\"2023-09-06T02:39:45.220Z\"},\"data\":[{\"guestId\":\"\",\"guestUrl\":\"https://adewale-weds-tiwa.vercel.app/\",\"name\":\"John Doe\",\"greeting\":\"\",\"locale\":\"\"}]}");

/***/ }),

/***/ "lxf9":
/***/ (function(module) {

module.exports = JSON.parse("{\"siteIntro\":\"UNDANGAN PERNIKAHAN\",\"eventDate\":\"Hari & Tanggal\",\"invitationGreeting\":\"Kepada Yang Terhormat\",\"invitationIntro\":\"﷽\",\"invitationContent\":\"Dengan memohon rahmat Allah SWT, kami mengundang Bapak, Ibu, Saudara/Saudari untuk menghadiri resepsi pernikahan putra-putri kami yang in-syaa-Allah akan diadakan di:\",\"invitationContentTextAlign\":\"center\",\"invitationOutro\":\"\",\"invitationClosing\":\"Kehadiran serta doa restu Bapak/Ibu/Saudara/i merupakan suatu kehormatan dan kebahagian bagi kami.<br/><br/>Wassalamu'alaikum Warahmatullahi Wabarakatuh.\",\"btnAddToMyCalendar\":\"Tambahkan ke kalender saya\",\"guestCheckin\":{\"pleaseScanInvitation\":\"Please scan your invitation..\"}}");

/***/ }),

/***/ "vY2J":
/***/ (function(module, exports) {

module.exports = require("react-add-to-calendar");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });