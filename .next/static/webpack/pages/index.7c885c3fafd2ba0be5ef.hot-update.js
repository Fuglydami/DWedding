webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./extra */ "./pages/extra.jsx");
/* harmony import */ var _stories__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stories */ "./pages/stories.jsx");
/* harmony import */ var _pictureGrid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pictureGrid */ "./pages/pictureGrid.jsx");
/* harmony import */ var _collect_guest_attendance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./collect-guest-attendance */ "./pages/collect-guest-attendance.jsx");


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
    icon: __jsx(_extra__WEBPACK_IMPORTED_MODULE_13__["EventDateIcon"], {
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
    icon: __jsx(_extra__WEBPACK_IMPORTED_MODULE_13__["EventDateIcon"], {
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
  }, "a.react-add-to-calendar__button span{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxhZGV3YWxlLXdlZGRpbmctaW52aXRlXFxwYWdlc1xcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlJUyxBQUc0QixlQUNXLDREQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcYWRld2FsZS13ZWRkaW5nLWludml0ZVxccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IHsgRXZlbnREYXRlSWNvbiwgSGVhZGVyTG9nbywgTG92ZVRpdGxlSWNvbiB9IGZyb20gJy4vZXh0cmEnO1xuaW1wb3J0IFN0b3JpZXMgZnJvbSAnLi9zdG9yaWVzJztcbmltcG9ydCBQaWN0dXJlc0dyaWQgZnJvbSAnLi9waWN0dXJlR3JpZCc7XG5pbXBvcnQgQ29sbGVjdEd1ZXN0QXR0ZW5kYW5jZSBmcm9tICcuL2NvbGxlY3QtZ3Vlc3QtYXR0ZW5kYW5jZSc7XG5cbmNvbnN0IHRyYW5zbGF0ZUNvbmZpZyA9IChhcHBDb25maWcsIGxvY2FsZSkgPT4ge1xuICBpZiAoIWxvY2FsZSB8fCBsb2NhbGUgPT09IGRlZmF1bHRMb2NhbGUpIHtcbiAgICByZXR1cm4gYXBwQ29uZmlnO1xuICB9XG4gIC8vIFJlcGxhY2UgY29uZmlnIHdpdGggbGFuZ1xuICBjb25zdCBjb25maWdMYW5nID0gYXBwQ29uZmlnLmxhbmdbbG9jYWxlXTtcbiAgaWYgKGNvbmZpZ0xhbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBsb2NhbGU6ICcsIGxvY2FsZSk7XG4gIH1cbiAgcmV0dXJuIHsgLi4uYXBwQ29uZmlnLCAuLi5jb25maWdMYW5nIH07XG59O1xuXG5jb25zdCBTaG93SW52aXRlID0gKHsgY3VycmVudFVybCwgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCwgZ3Vlc3QgfSkgPT4ge1xuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb24oZ3Vlc3QubG9jYWxlKTtcblxuICAvLyBJbml0aWF0ZSBjb25maWcgdmFyaWFibGVzXG4gIGNvbnN0IHtcbiAgICBsb2dvLFxuICAgIG9nVGFncyxcbiAgICBjb3VwbGVJbmZvLFxuICAgIHZlbnVlLFxuICAgIHdlZGRpbmdEYXksXG4gICAgd2VkZGluZ0RhdGUsXG4gICAgd2VkZGluZ1RpbWUsXG4gICAgY2FsZW5kYXJJbmZvLFxuICB9ID0gdHJhbnNsYXRlQ29uZmlnKGFwcENvbmZpZywgZ3Vlc3QubG9jYWxlKTtcbiAgY29uc3QgeyBicmlkZU5hbWUsIGdyb29tTmFtZSwgaGFzaHRhZywgY291cGxlTmFtZUZvcm1hdCB9ID0gY291cGxlSW5mbztcblxuICBjb25zdCBjb3VwbGVOYW1lU3RyID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnXG4gICAgICA/IGAke2dyb29tTmFtZX0gJiAke2JyaWRlTmFtZX1gXG4gICAgICA6IGAke2JyaWRlTmFtZX0gJiAke2dyb29tTmFtZX1gO1xuICBjb25zdCBjb3VwbGVOYW1lID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnID8gKFxuICAgICAgPD5cbiAgICAgICAge2dyb29tTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHticmlkZU5hbWV9XG4gICAgICA8Lz5cbiAgICApIDogKFxuICAgICAgPD5cbiAgICAgICAge2JyaWRlTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHtncm9vbU5hbWV9XG4gICAgICA8Lz5cbiAgICApO1xuXG4gIC8vIFZlbnVlIGluZm9cbiAgY29uc3QgdmVudWVCcmllZiA9IGAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9LCAke3ZlbnVlLmNvdW50cnl9YDtcbiAgY29uc3Qgd2VkZGluZ0RhdGVCcmllZiA9IGAke3dlZGRpbmdEYXl9LCAke3dlZGRpbmdEYXRlfWA7XG5cbiAgLy8gRXZlbnQgaW5mb1xuICBjb25zdCBldmVudFRpdGxlID0gYCR7Y291cGxlTmFtZVN0cn0ncyBXZWRkaW5nYDtcbiAgbGV0IGV2ZW50RGVzY3JpcHRpb24gPSBgJHt3ZWRkaW5nRGF0ZUJyaWVmfSBhdCAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9YDtcbiAgaWYgKGd1ZXN0Lm5hbWUpIHtcbiAgICBldmVudERlc2NyaXB0aW9uID0gYERlYXIgJHtndWVzdC5uYW1lfSwgeW91IGFyZSBjb3JkaWFsbHkgaW52aXRlZCB0byBvdXIgd2VkZGluZyBvbiAke3dlZGRpbmdEYXRlfSBhdCAke3ZlbnVlLm5hbWV9LiBMb29raW5nIGZvcndhcmQgdG8gc2VlaW5nIHlvdSFgO1xuICB9XG5cbiAgLy8gQ2FsZW5kYXIgcGF5bG9hZFxuICBjb25zdCBjYWxlbmRhckV2ZW50ID0ge1xuICAgIHRpdGxlOiBldmVudFRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBldmVudERlc2NyaXB0aW9uLFxuICAgIGxvY2F0aW9uOiBgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWAsXG4gICAgc3RhcnRUaW1lOiBjYWxlbmRhckluZm8udGltZVN0YXJ0SVNPLFxuICAgIGVuZFRpbWU6IGNhbGVuZGFySW5mby50aW1lRW5kSVNPLFxuICB9O1xuXG4gIGNvbnN0IGV2ZW50U2NoZWR1bGUgPSBbXG4gICAge1xuICAgICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgICBldmVudDogJ0NodXJjaCcsXG4gICAgICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAgIHRpbWU6ICcxMnBtJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgICAgZXZlbnQ6ICdSZWNlcHRpb24nLFxuICAgICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgICB0aW1lOiAnMnBtJyxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIGljb246IDxFdmVudERhdGVJY29uIC8+LFxuICAgIC8vICAgZXZlbnQ6ICdFbmdhZ2VtZW50JyxcbiAgICAvLyAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgIC8vICAgdGltZTogJzJwbScsXG4gICAgLy8gfSxcbiAgXTtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dNb2RhbCh0cnVlKTtcbiAgICB9LCAxMDAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudFJlZi5jdXJyZW50O1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICBpZiAoZWxlbWVudFBvc2l0aW9uIDwgd2luZG93SGVpZ2h0ICogMC45KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZC1lbGVtZW50Jyk7IC8vIEFkZCB0aGUgQ1NTIGNsYXNzIHdoZW4gdGhlIGVsZW1lbnQgaXMgNzUlIHZpc2libGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkLWVsZW1lbnQnKTsgLy8gUmVtb3ZlIHRoZSBDU1MgY2xhc3MgaWYgbm90IHZpc2libGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIFJ1biB0aGlzIGVmZmVjdCBvbmx5IG9uY2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBhLnJlYWN0LWFkZC10by1jYWxlbmRhcl9fYnV0dG9uIHNwYW4ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkXG4gICAgICAgIHsuLi5vZ1RhZ3N9XG4gICAgICAgIHRpdGxlPXtldmVudFRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZXZlbnREZXNjcmlwdGlvbn1cbiAgICAgICAgZ3Vlc3ROYW1lPXtndWVzdC5uYW1lfVxuICAgICAgICB1cmw9e2N1cnJlbnRVcmx9XG4gICAgICAgIGRhdGU9e3dlZGRpbmdEYXRlQnJpZWZ9XG4gICAgICAgIG1vZGlmaWVkVGltZT17Z3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdH1cbiAgICAgICAgdmVudWU9e3ZlbnVlQnJpZWZ9XG4gICAgICAgIGxvZ289e3Jlc29sdmVQYXRoKG9nVGFncy5sb2dvKX1cbiAgICAgICAgYXV0aG9yPXtyZXNvbHZlUGF0aCgnLycpfVxuICAgICAgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naGVhZGVyX2FyZWEnPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgPEhlYWRlckxvZ28gLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlYWRlci1sb2dvLXRleHQnPlRoZSBBa2lubGFndW4ncyBQYXJ0eTwvc3Bhbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgaWQ9J2hvbWUnIGNsYXNzTmFtZT0naGVhZGVyX3NsaWRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLWxpc3QgZHJhZ2dhYmxlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay10cmFjaycgc3R5bGU9e3sgb3BhY2l0eTogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnX2NvdmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy0xMCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfY29udGVudCB0ZXh0LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogNjAsIG1hcmdpbjogMjUsIG1hcmdpblRvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9zdWJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC4ycydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnc2l0ZUludHJvJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjdzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291cGxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc2h0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLm5hbWV9LCB7dmVudWUuY2l0eX0sIHt2ZW51ZS5jb3VudHJ5fS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGlkPSdjb21pbmdfc29vbicgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9hcmVhIHB0LTIwIHBiLTcwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX3NoYXBlXzEnIHN0eWxlPXt7IHpJbmRleDogMSB9fT5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMS5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTQnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHB0LTUwIHdvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuMnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dCgnZXZlbnREYXRlJyl9OjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3dlZGRpbmdEYXRlQnJpZWZ9PC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QWRkVG9DYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICBldmVudD17Y2FsZW5kYXJFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9e3QoJ2J0bkFkZFRvTXlDYWxlbmRhcicpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy9zZWN0aW9uX3NoYXBlLnBuZycgYWx0PSdTaGFwZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9jb3VudCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC0yMCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNjAsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZV9jb3VudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMzAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvdW50X2NvbnRlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxLCBwYWRkaW5nVG9wOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmVudWUubWFwVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy9iZXZlbnQucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2JldmVudCBjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc3NXZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUuYWRkcmVzc0xpbmUxfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8yJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMi5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiByZWY9e2VsZW1lbnRSZWZ9IGlkPSdjb250YWN0JyBjbGFzc05hbWU9J2NvbnRhY3RfYXJlYSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY29udGFjdF93cmFwcGVyIHdvdyBmYWRlSW5VcEJpZydcbiAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjRzJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJblVwJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1ldmVudExpbmV1cCc+XG4gICAgICAgICAgICAgIHtldmVudFNjaGVkdWxlLm1hcCgoZXYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0aW1lLCBkYXRlLCBldmVudCwgaWNvbiB9ID0gZXY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudExpbmV1cCcga2V5PXtldmVudH0+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtldmVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3RpbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogZm9ybSAqL31cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy05Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbl90aXRsZSB0ZXh0LWNlbnRlciBwYi0zMCc+XG4gICAgICAgICAgICAgICAgICB7Z3Vlc3QubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dCgnaW52aXRhdGlvbkdyZWV0aW5nJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjVyZW0nIH19PntndWVzdC5uYW1lfSw8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgY2xhc3NOYW1lPSdsb3ZlLXRpdGxlLWNvbnRhaW5lciBmYWRlSW5VcEJpZyBmYWRlSW4nXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPGRpdiByZWY9e2VsZW1lbnRSZWZ9PlxuICAgICAgICAgIDxMb3ZlVGl0bGVJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudFJlZn0gY2xhc3NOYW1lPSdsb3ZlLXRpdGxlJz5cbiAgICAgICAgICBNeSBoZWFydCBpcyB5b3VyIHRvIGhvbGQgYW5kIGNoZXJpc2ggZm9yIHRoZSByZXN0IG9mIG91ciBkYXlzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxhcnRpY2xlXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J3N0b3JpZXMtY29udGFpbmVyIGZhZGVJblVwQmlnJ1xuICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNHMnXG4gICAgICA+XG4gICAgICAgIDxTdG9yaWVzIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J3BpY3R1cmUtZ3JpZC1jb250YWluZXInPlxuICAgICAgICA8UGljdHVyZXNHcmlkIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgJz5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDVcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6ICcjRDNEM0QzJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgI0RXZWRkaW5nXG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaG93SW52aXRlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcbiAgY29uc3QgbG9jYWxlUGFyYW1zID0gY3R4LnF1ZXJ5LmxhbmcgfHwgZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgZW1wdHlHdWVzdFBhcmFtcyA9IHtcbiAgICBndWVzdDoge1xuICAgICAgZ3Vlc3RJZDogJycsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGdyZWV0aW5nOiAnJyxcbiAgICAgIGxvY2FsZTogbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgY3VycmVudFVybCA9IHJlc29sdmVQYXRoKGN0eC5yZXEudXJsKTtcbiAgY29uc3QgZ3Vlc3RJZCA9IGN0eC5xdWVyeS51O1xuICBpZiAoIWd1ZXN0SWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGd1ZXN0RGF0YSA9IGd1ZXN0TGlzdC5kYXRhO1xuICBjb25zdCBndWVzdExpc3RMYXN0VXBkYXRlZEF0ID0gZ3Vlc3RMaXN0Lm1ldGEubGFzdFVwZGF0ZWRBdDtcbiAgY29uc3QgeyBuYW1lLCBncmVldGluZywgbG9jYWxlIH0gPVxuICAgIGd1ZXN0RGF0YS5maWx0ZXIoKGd1ZXN0KSA9PiBndWVzdC5ndWVzdElkID09PSBndWVzdElkKVswXSB8fCB7fTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVcmwsXG4gICAgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCxcbiAgICBndWVzdDoge1xuICAgICAgbmFtZSxcbiAgICAgIGdyZWV0aW5nLFxuICAgICAgZ3Vlc3RJZCxcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0ludml0ZTtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\USER\\\\Documents\\\\adewale-wedding-invite\\\\pages\\\\index.jsx */"), __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ogTags, {
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
  }, __jsx(_extra__WEBPACK_IMPORTED_MODULE_13__["HeaderLogo"], {
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
  }, __jsx(_extra__WEBPACK_IMPORTED_MODULE_13__["LoveTitleIcon"], {
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
  }, "#DWedding")), __jsx(_collect_guest_attendance__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInRyYW5zbGF0ZUNvbmZpZyIsImFwcENvbmZpZyIsImxvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjb25maWdMYW5nIiwibGFuZyIsInVuZGVmaW5lZCIsIkVycm9yIiwiX29iamVjdFNwcmVhZCIsIlNob3dJbnZpdGUiLCJfcmVmIiwiX3MiLCJjdXJyZW50VXJsIiwiZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCIsImd1ZXN0IiwidCIsInVzZVRyYW5zbGF0aW9uIiwiX3RyYW5zbGF0ZUNvbmZpZyIsImxvZ28iLCJvZ1RhZ3MiLCJjb3VwbGVJbmZvIiwidmVudWUiLCJ3ZWRkaW5nRGF5Iiwid2VkZGluZ0RhdGUiLCJ3ZWRkaW5nVGltZSIsImNhbGVuZGFySW5mbyIsImJyaWRlTmFtZSIsImdyb29tTmFtZSIsImhhc2h0YWciLCJjb3VwbGVOYW1lRm9ybWF0IiwiY291cGxlTmFtZVN0ciIsImNvbmNhdCIsImNvdXBsZU5hbWUiLCJfX2pzeCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidmVudWVCcmllZiIsIm5hbWUiLCJjaXR5IiwiY291bnRyeSIsIndlZGRpbmdEYXRlQnJpZWYiLCJldmVudFRpdGxlIiwiZXZlbnREZXNjcmlwdGlvbiIsImNhbGVuZGFyRXZlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJzdGFydFRpbWUiLCJ0aW1lU3RhcnRJU08iLCJlbmRUaW1lIiwidGltZUVuZElTTyIsImV2ZW50U2NoZWR1bGUiLCJpY29uIiwiRXZlbnREYXRlSWNvbiIsImV2ZW50IiwiZGF0ZSIsInRpbWUiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVzZUVmZmVjdCIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJoYW5kbGVTY3JvbGwiLCJlbGVtZW50IiwiY3VycmVudCIsImVsZW1lbnRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc05hbWUiLCJfSlNYU3R5bGUiLCJpZCIsIkhlYWQiLCJfZXh0ZW5kcyIsImd1ZXN0TmFtZSIsInVybCIsIm1vZGlmaWVkVGltZSIsInJlc29sdmVQYXRoIiwiYXV0aG9yIiwiSGVhZGVyTG9nbyIsInN0eWxlIiwib3BhY2l0eSIsInBhZGRpbmdUb3AiLCJtYXhIZWlnaHQiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJzcmMiLCJoZWFkZXJMb2dvIiwiYWx0IiwiYW5pbWF0aW9uRGVsYXkiLCJ6SW5kZXgiLCJ2aXNpYmlsaXR5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25OYW1lIiwicGFkZGluZ0JvdHRvbSIsIkFkZFRvQ2FsZW5kYXIiLCJidXR0b25MYWJlbCIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJocmVmIiwibWFwVXJsIiwiYm9yZGVyUmFkaXVzIiwibWF4V2lkdGgiLCJvdmVyZmxvd1giLCJ0ZXh0T3ZlcmZsb3ciLCJjb2xvciIsImFkZHJlc3NMaW5lMSIsInJlZiIsImJveFNoYWRvdyIsIm1hcCIsImV2IiwiaW5kZXgiLCJrZXkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJMb3ZlVGl0bGVJY29uIiwiU3RvcmllcyIsIlBpY3R1cmVzR3JpZCIsIm1hcmdpbkJvdHRvbSIsIkNvbGxlY3RHdWVzdEF0dGVuZGFuY2UiLCJfYyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImxvY2FsZVBhcmFtcyIsInF1ZXJ5IiwiZW1wdHlHdWVzdFBhcmFtcyIsImd1ZXN0SWQiLCJncmVldGluZyIsInJlcSIsInUiLCJndWVzdERhdGEiLCJndWVzdExpc3QiLCJkYXRhIiwibWV0YSIsImxhc3RVcGRhdGVkQXQiLCJfcmVmMiIsImZpbHRlciIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDaEI7QUFDVDtBQUVkO0FBQ087QUFDRjtBQUNzQjtBQUN0QjtBQUNvQztBQUNyQjtBQUNrQjtBQUNuQztBQUNLO0FBQ1U7QUFFN0IsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxTQUFTLEVBQUVDLE1BQU0sRUFBSztFQUM3QyxJQUFJLENBQUNBLE1BQU0sSUFBSUEsTUFBTSxLQUFLQyx3REFBYSxFQUFFO0lBQ3ZDLE9BQU9GLFNBQVM7RUFDbEI7RUFDQTtFQUNBLElBQU1HLFVBQVUsR0FBR0gsU0FBUyxDQUFDSSxJQUFJLENBQUNILE1BQU0sQ0FBQztFQUN6QyxJQUFJRSxVQUFVLEtBQUtFLFNBQVMsRUFBRTtJQUM1QixNQUFNLElBQUlDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRUwsTUFBTSxDQUFDO0VBQzdDO0VBQ0EsT0FBQU0sYUFBQSxDQUFBQSxhQUFBLEtBQVlQLFNBQVMsR0FBS0csVUFBVTtBQUN0QyxDQUFDO0FBRUQsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUFDLElBQUEsRUFBc0Q7RUFBQUMsRUFBQTtFQUFBLElBQWhEQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtJQUFFQyxzQkFBc0IsR0FBQUgsSUFBQSxDQUF0Qkcsc0JBQXNCO0lBQUVDLEtBQUssR0FBQUosSUFBQSxDQUFMSSxLQUFLO0VBQzdELElBQU1DLENBQUMsR0FBR0MsaUVBQWMsQ0FBQ0YsS0FBSyxDQUFDWixNQUFNLENBQUM7O0VBRXRDO0VBQ0EsSUFBQWUsZ0JBQUEsR0FTSWpCLGVBQWUsQ0FB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USxHQUFBUSxLQUFBLENBQVJSLFFBQVE7SUFBRW5KLE1BQU0sR0FBQTJKLEtBQUEsQ0FBTjNKLE1BQU07RUFFOUIsSUFBSSxDQUFDMEMsSUFBSSxFQUFFO0lBQ1QsT0FBQXBDLGFBQUE7TUFDRUksVUFBVSxFQUFWQTtJQUFVLEdBQ1B1SSxnQkFBZ0I7RUFFdkI7RUFFQSxPQUFPO0lBQ0x2SSxVQUFVLEVBQVZBLFVBQVU7SUFDVkMsc0JBQXNCLEVBQXRCQSxzQkFBc0I7SUFDdEJDLEtBQUssRUFBRTtNQUNMOEIsSUFBSSxFQUFKQSxJQUFJO01BQ0p5RyxRQUFRLEVBQVJBLFFBQVE7TUFDUkQsT0FBTyxFQUFQQSxPQUFPO01BQ1BsSixNQUFNLEVBQUVBLE1BQU0sSUFBSStJO0lBQ3BCO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFFY3hJLHlFQUFVLEVBQUM7QUFBQSxJQUFBcUksRUFBQTtBQUFBaUIsWUFBQSxDQUFBakIsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43Yzg4NWMzZmFmZDJiYTBiZTVlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkZFRvQ2FsZW5kYXIgZnJvbSAncmVhY3QtYWRkLXRvLWNhbGVuZGFyJztcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuaW1wb3J0IEhlYWQgZnJvbSAnQHNyYy9jb21wb25lbnRzL0hlYWQnO1xuaW1wb3J0IHJlc29sdmVQYXRoIGZyb20gJ0BzcmMvdXRpbHMvcmVzb2x2ZVBhdGgnO1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICdAc3JjL2NvbmZpZy9hcHAnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24sIGRlZmF1bHRMb2NhbGUgfSBmcm9tICdAc3JjL2kxOG4nO1xuaW1wb3J0IGd1ZXN0TGlzdCBmcm9tICcuL2d1ZXN0X2xpc3QuanNvbic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgeyBFdmVudERhdGVJY29uLCBIZWFkZXJMb2dvLCBMb3ZlVGl0bGVJY29uIH0gZnJvbSAnLi9leHRyYSc7XG5pbXBvcnQgU3RvcmllcyBmcm9tICcuL3N0b3JpZXMnO1xuaW1wb3J0IFBpY3R1cmVzR3JpZCBmcm9tICcuL3BpY3R1cmVHcmlkJztcbmltcG9ydCBDb2xsZWN0R3Vlc3RBdHRlbmRhbmNlIGZyb20gJy4vY29sbGVjdC1ndWVzdC1hdHRlbmRhbmNlJztcblxuY29uc3QgdHJhbnNsYXRlQ29uZmlnID0gKGFwcENvbmZpZywgbG9jYWxlKSA9PiB7XG4gIGlmICghbG9jYWxlIHx8IGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZSkge1xuICAgIHJldHVybiBhcHBDb25maWc7XG4gIH1cbiAgLy8gUmVwbGFjZSBjb25maWcgd2l0aCBsYW5nXG4gIGNvbnN0IGNvbmZpZ0xhbmcgPSBhcHBDb25maWcubGFuZ1tsb2NhbGVdO1xuICBpZiAoY29uZmlnTGFuZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGxvY2FsZTogJywgbG9jYWxlKTtcbiAgfVxuICByZXR1cm4geyAuLi5hcHBDb25maWcsIC4uLmNvbmZpZ0xhbmcgfTtcbn07XG5cbmNvbnN0IFNob3dJbnZpdGUgPSAoeyBjdXJyZW50VXJsLCBndWVzdExpc3RMYXN0VXBkYXRlZEF0LCBndWVzdCB9KSA9PiB7XG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbihndWVzdC5sb2NhbGUpO1xuXG4gIC8vIEluaXRpYXRlIGNvbmZpZyB2YXJpYWJsZXNcbiAgY29uc3Qge1xuICAgIGxvZ28sXG4gICAgb2dUYWdzLFxuICAgIGNvdXBsZUluZm8sXG4gICAgdmVudWUsXG4gICAgd2VkZGluZ0RheSxcbiAgICB3ZWRkaW5nRGF0ZSxcbiAgICB3ZWRkaW5nVGltZSxcbiAgICBjYWxlbmRhckluZm8sXG4gIH0gPSB0cmFuc2xhdGVDb25maWcoYXBwQ29uZmlnLCBndWVzdC5sb2NhbGUpO1xuICBjb25zdCB7IGJyaWRlTmFtZSwgZ3Jvb21OYW1lLCBoYXNodGFnLCBjb3VwbGVOYW1lRm9ybWF0IH0gPSBjb3VwbGVJbmZvO1xuXG4gIGNvbnN0IGNvdXBsZU5hbWVTdHIgPVxuICAgIGNvdXBsZU5hbWVGb3JtYXQgPT09ICdHUk9PTV9GSVJTVCdcbiAgICAgID8gYCR7Z3Jvb21OYW1lfSAmICR7YnJpZGVOYW1lfWBcbiAgICAgIDogYCR7YnJpZGVOYW1lfSAmICR7Z3Jvb21OYW1lfWA7XG4gIGNvbnN0IGNvdXBsZU5hbWUgPVxuICAgIGNvdXBsZU5hbWVGb3JtYXQgPT09ICdHUk9PTV9GSVJTVCcgPyAoXG4gICAgICA8PlxuICAgICAgICB7Z3Jvb21OYW1lfSA8c3Bhbj4mYW1wOzwvc3Bhbj4ge2JyaWRlTmFtZX1cbiAgICAgIDwvPlxuICAgICkgOiAoXG4gICAgICA8PlxuICAgICAgICB7YnJpZGVOYW1lfSA8c3Bhbj4mYW1wOzwvc3Bhbj4ge2dyb29tTmFtZX1cbiAgICAgIDwvPlxuICAgICk7XG5cbiAgLy8gVmVudWUgaW5mb1xuICBjb25zdCB2ZW51ZUJyaWVmID0gYCR7dmVudWUubmFtZX0sICR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gO1xuICBjb25zdCB3ZWRkaW5nRGF0ZUJyaWVmID0gYCR7d2VkZGluZ0RheX0sICR7d2VkZGluZ0RhdGV9YDtcblxuICAvLyBFdmVudCBpbmZvXG4gIGNvbnN0IGV2ZW50VGl0bGUgPSBgJHtjb3VwbGVOYW1lU3RyfSdzIFdlZGRpbmdgO1xuICBsZXQgZXZlbnREZXNjcmlwdGlvbiA9IGAke3dlZGRpbmdEYXRlQnJpZWZ9IGF0ICR7dmVudWUubmFtZX0sICR7dmVudWUuY2l0eX1gO1xuICBpZiAoZ3Vlc3QubmFtZSkge1xuICAgIGV2ZW50RGVzY3JpcHRpb24gPSBgRGVhciAke2d1ZXN0Lm5hbWV9LCB5b3UgYXJlIGNvcmRpYWxseSBpbnZpdGVkIHRvIG91ciB3ZWRkaW5nIG9uICR7d2VkZGluZ0RhdGV9IGF0ICR7dmVudWUubmFtZX0uIExvb2tpbmcgZm9yd2FyZCB0byBzZWVpbmcgeW91IWA7XG4gIH1cblxuICAvLyBDYWxlbmRhciBwYXlsb2FkXG4gIGNvbnN0IGNhbGVuZGFyRXZlbnQgPSB7XG4gICAgdGl0bGU6IGV2ZW50VGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGV2ZW50RGVzY3JpcHRpb24sXG4gICAgbG9jYXRpb246IGAke3ZlbnVlLmNpdHl9LCAke3ZlbnVlLmNvdW50cnl9YCxcbiAgICBzdGFydFRpbWU6IGNhbGVuZGFySW5mby50aW1lU3RhcnRJU08sXG4gICAgZW5kVGltZTogY2FsZW5kYXJJbmZvLnRpbWVFbmRJU08sXG4gIH07XG5cbiAgY29uc3QgZXZlbnRTY2hlZHVsZSA9IFtcbiAgICB7XG4gICAgICBpY29uOiA8RXZlbnREYXRlSWNvbiAvPixcbiAgICAgIGV2ZW50OiAnQ2h1cmNoJyxcbiAgICAgIGRhdGU6ICdEZWMgMTYsIDIwMjMnLFxuICAgICAgdGltZTogJzEycG0nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgICBldmVudDogJ1JlY2VwdGlvbicsXG4gICAgICBkYXRlOiAnRGVjIDE2LCAyMDIzJyxcbiAgICAgIHRpbWU6ICcycG0nLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgaWNvbjogPEV2ZW50RGF0ZUljb24gLz4sXG4gICAgLy8gICBldmVudDogJ0VuZ2FnZW1lbnQnLFxuICAgIC8vICAgZGF0ZTogJ0RlYyAxNiwgMjAyMycsXG4gICAgLy8gICB0aW1lOiAnMnBtJyxcbiAgICAvLyB9LFxuICBdO1xuXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xuICAgIH0sIDEwMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50UmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgIGlmIChlbGVtZW50UG9zaXRpb24gPCB3aW5kb3dIZWlnaHQgKiAwLjkpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkLWVsZW1lbnQnKTsgLy8gQWRkIHRoZSBDU1MgY2xhc3Mgd2hlbiB0aGUgZWxlbWVudCBpcyA3NSUgdmlzaWJsZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQtZWxlbWVudCcpOyAvLyBSZW1vdmUgdGhlIENTUyBjbGFzcyBpZiBub3QgdmlzaWJsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTsgLy8gUnVuIHRoaXMgZWZmZWN0IG9ubHkgb25jZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGEucmVhY3QtYWRkLXRvLWNhbGVuZGFyX19idXR0b24gc3BhbiB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPEhlYWRcbiAgICAgICAgey4uLm9nVGFnc31cbiAgICAgICAgdGl0bGU9e2V2ZW50VGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtldmVudERlc2NyaXB0aW9ufVxuICAgICAgICBndWVzdE5hbWU9e2d1ZXN0Lm5hbWV9XG4gICAgICAgIHVybD17Y3VycmVudFVybH1cbiAgICAgICAgZGF0ZT17d2VkZGluZ0RhdGVCcmllZn1cbiAgICAgICAgbW9kaWZpZWRUaW1lPXtndWVzdExpc3RMYXN0VXBkYXRlZEF0fVxuICAgICAgICB2ZW51ZT17dmVudWVCcmllZn1cbiAgICAgICAgbG9nbz17cmVzb2x2ZVBhdGgob2dUYWdzLmxvZ28pfVxuICAgICAgICBhdXRob3I9e3Jlc29sdmVQYXRoKCcvJyl9XG4gICAgICAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdoZWFkZXJfYXJlYSc+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdoZWFkZXItY29udGFpbmVyJz5cbiAgICAgICAgICA8SGVhZGVyTG9nbyAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGVhZGVyLWxvZ28tdGV4dCc+VGhlIEFraW5sYWd1bidzIFBhcnR5PC9zcGFuPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBpZD0naG9tZScgY2xhc3NOYW1lPSdoZWFkZXJfc2xpZGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stbGlzdCBkcmFnZ2FibGUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLXRyYWNrJyBzdHlsZT17eyBvcGFjaXR5OiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmdfY292ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTEwJz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9jb250ZW50IHRleHQtY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA2MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nby5oZWFkZXJMb2dvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX3N1Yl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuMnMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdzaXRlSW50cm8nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuN3MnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvY2F0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzFzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzFzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzaHRhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvY2F0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzFzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzFzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUubmFtZX0sIHt2ZW51ZS5jaXR5fSwge3ZlbnVlLmNvdW50cnl9LlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9J2NvbWluZ19zb29uJyBjbGFzc05hbWU9J2NvbWluZ19zb29uX2FyZWEgcHQtMjAgcGItNzAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMScgc3R5bGU9e3sgekluZGV4OiAxIH19PlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgcHQtNTAgd293IGZhZGVJbidcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC4ycydcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC4ycycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPnt0KCdldmVudERhdGUnKX06PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57d2VkZGluZ0RhdGVCcmllZn08L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxBZGRUb0NhbGVuZGFyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50PXtjYWxlbmRhckV2ZW50fVxuICAgICAgICAgICAgICAgICAgICBidXR0b25MYWJlbD17dCgnYnRuQWRkVG9NeUNhbGVuZGFyJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdhc3NldHMvaW1hZ2VzL3NlY3Rpb25fc2hhcGUucG5nJyBhbHQ9J1NoYXBlJyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy04Jz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nd293IGZhZGVJbidcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC42cydcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC42cycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX2NvdW50IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIHB0LTIwJz5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2MCxcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzOCxcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlX2NvdW50IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zMCdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY291bnRfY29udGVudCdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDEsIHBhZGRpbmdUb3A6IDIwIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt2ZW51ZS5tYXBVcmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IDUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdhc3NldHMvaW1hZ2VzL2JldmVudC5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nYmV2ZW50IGNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt2ZW51ZS5tYXBVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzc1dncnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JleScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5hZGRyZXNzTGluZTF9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX3NoYXBlXzInPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0yLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIHJlZj17ZWxlbWVudFJlZn0gaWQ9J2NvbnRhY3QnIGNsYXNzTmFtZT0nY29udGFjdF9hcmVhJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjb250YWN0X3dyYXBwZXIgd293IGZhZGVJblVwQmlnJ1xuICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDMwLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNHMnLFxuICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluVXAnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWV2ZW50TGluZXVwJz5cbiAgICAgICAgICAgICAge2V2ZW50U2NoZWR1bGUubWFwKChldiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRpbWUsIGRhdGUsIGV2ZW50LCBpY29uIH0gPSBldjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2V2ZW50TGluZXVwJyBrZXk9e2V2ZW50fT5cbiAgICAgICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2V2ZW50fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dGltZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBmb3JtICovfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTknPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHRleHQtY2VudGVyIHBiLTMwJz5cbiAgICAgICAgICAgICAgICAgIHtndWVzdC5uYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdpbnZpdGF0aW9uR3JlZXRpbmcnKX1cbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuNXJlbScgfX0+e2d1ZXN0Lm5hbWV9LDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICBjbGFzc05hbWU9J2xvdmUtdGl0bGUtY29udGFpbmVyIGZhZGVJblVwQmlnIGZhZGVJbidcbiAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgIGRhdGEtd293LWRlbGF5PScwLjRzJ1xuICAgICAgPlxuICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudFJlZn0+XG4gICAgICAgICAgPExvdmVUaXRsZUljb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgcmVmPXtlbGVtZW50UmVmfSBjbGFzc05hbWU9J2xvdmUtdGl0bGUnPlxuICAgICAgICAgIE15IGhlYXJ0IGlzIHlvdXIgdG8gaG9sZCBhbmQgY2hlcmlzaCBmb3IgdGhlIHJlc3Qgb2Ygb3VyIGRheXMuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGFydGljbGVcbiAgICAgICAgcmVmPXtlbGVtZW50UmVmfVxuICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgIGRhdGEtZGVsYXk9JzAuN3MnXG4gICAgICAgIGNsYXNzTmFtZT0nc3Rvcmllcy1jb250YWluZXIgZmFkZUluVXBCaWcnXG4gICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgID5cbiAgICAgICAgPFN0b3JpZXMgLz5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0ncGljdHVyZS1ncmlkLWNvbnRhaW5lcic+XG4gICAgICAgIDxQaWN0dXJlc0dyaWQgLz5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIHsvKiBGb290ZXIgc2VjdGlvbiAqL31cbiAgICAgIDxmb290ZXIgaWQ9J2Zvb3RlcicgY2xhc3NOYW1lPSdmb290ZXJfYXJlYSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfc2hhcGVfMSc+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl93aWRnZXQgcHQtNTAgcGItMTAgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9sb2dvJz5cbiAgICAgICAgICAgICAgey8qIHtsb2dvLmZvb3RlckxvZ28gJiZcbiAgICAgICAgICAgICAgICAobG9nby5mb290ZXJMb2dvVHlwZSA9PT0gJ21wNCcgPyAoXG4gICAgICAgICAgICAgICAgICA8dmlkZW8gaGVpZ2h0PScxNDAnIGF1dG9QbGF5IG11dGVkIGxvb3A+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtsb2dvLmZvb3RlckxvZ299IHR5cGU9J3ZpZGVvL21wNCcgLz5cbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgKSA6ICggKi99XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDkwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17bG9nby5mb290ZXJMb2dvfSAvPiAqL31cbiAgICAgICAgICAgICAgey8qICkpfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl90aXRsZSAnPlxuICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RpdGxlJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvdXBsZU5hbWV9XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoNVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogJyNEM0QzRDMnLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzQwcHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAjRFdlZGRpbmdcbiAgICAgICAgPC9oNT5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPENvbGxlY3RHdWVzdEF0dGVuZGFuY2VcbiAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XG4gICAgICAgIHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNob3dJbnZpdGUuZ2V0SW5pdGlhbFByb3BzID0gKGN0eCkgPT4ge1xuICBjb25zdCBsb2NhbGVQYXJhbXMgPSBjdHgucXVlcnkubGFuZyB8fCBkZWZhdWx0TG9jYWxlO1xuICBjb25zdCBlbXB0eUd1ZXN0UGFyYW1zID0ge1xuICAgIGd1ZXN0OiB7XG4gICAgICBndWVzdElkOiAnJyxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZ3JlZXRpbmc6ICcnLFxuICAgICAgbG9jYWxlOiBsb2NhbGVQYXJhbXMsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBjdXJyZW50VXJsID0gcmVzb2x2ZVBhdGgoY3R4LnJlcS51cmwpO1xuICBjb25zdCBndWVzdElkID0gY3R4LnF1ZXJ5LnU7XG4gIGlmICghZ3Vlc3RJZCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgLi4uZW1wdHlHdWVzdFBhcmFtcyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgZ3Vlc3REYXRhID0gZ3Vlc3RMaXN0LmRhdGE7XG4gIGNvbnN0IGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQgPSBndWVzdExpc3QubWV0YS5sYXN0VXBkYXRlZEF0O1xuICBjb25zdCB7IG5hbWUsIGdyZWV0aW5nLCBsb2NhbGUgfSA9XG4gICAgZ3Vlc3REYXRhLmZpbHRlcigoZ3Vlc3QpID0+IGd1ZXN0Lmd1ZXN0SWQgPT09IGd1ZXN0SWQpWzBdIHx8IHt9O1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3VycmVudFVybCxcbiAgICBndWVzdExpc3RMYXN0VXBkYXRlZEF0LFxuICAgIGd1ZXN0OiB7XG4gICAgICBuYW1lLFxuICAgICAgZ3JlZXRpbmcsXG4gICAgICBndWVzdElkLFxuICAgICAgbG9jYWxlOiBsb2NhbGUgfHwgbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93SW52aXRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==