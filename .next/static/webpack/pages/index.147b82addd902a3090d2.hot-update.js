webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/blurhash/dist/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/blurhash/dist/esm/index.js ***!
  \*************************************************/
/*! exports provided: ValidationError, decode, encode, isBlurhashValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationError", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlurhashValid", function() { return N; });
var q=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],x=t=>{let e=0;for(let r=0;r<t.length;r++){let n=t[r],l=q.indexOf(n);e=e*83+l}return e},p=(t,e)=>{var r="";for(let n=1;n<=e;n++){let l=Math.floor(t)/Math.pow(83,e-n)%83;r+=q[Math.floor(l)]}return r};var f=t=>{let e=t/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},h=t=>{let e=Math.max(0,Math.min(1,t));return e<=.0031308?Math.trunc(e*12.92*255+.5):Math.trunc((1.055*Math.pow(e,.4166666666666667)-.055)*255+.5)},F=t=>t<0?-1:1,M=(t,e)=>F(t)*Math.pow(Math.abs(t),e);var d=class extends Error{constructor(e){super(e),this.name="ValidationError",this.message=e}};var C=t=>{if(!t||t.length<6)throw new d("The blurhash string must be at least 6 characters");let e=x(t[0]),r=Math.floor(e/9)+1,n=e%9+1;if(t.length!==4+2*n*r)throw new d(`blurhash length mismatch: length is ${t.length} but it should be ${4+2*n*r}`)},N=t=>{try{C(t)}catch(e){return{result:!1,errorReason:e.message}}return{result:!0}},z=t=>{let e=t>>16,r=t>>8&255,n=t&255;return[f(e),f(r),f(n)]},L=(t,e)=>{let r=Math.floor(t/361),n=Math.floor(t/19)%19,l=t%19;return[M((r-9)/9,2)*e,M((n-9)/9,2)*e,M((l-9)/9,2)*e]},U=(t,e,r,n)=>{C(t),n=n|1;let l=x(t[0]),m=Math.floor(l/9)+1,b=l%9+1,i=(x(t[1])+1)/166,u=new Array(b*m);for(let o=0;o<u.length;o++)if(o===0){let a=x(t.substring(2,6));u[o]=z(a)}else{let a=x(t.substring(4+o*2,6+o*2));u[o]=L(a,i*n)}let c=e*4,s=new Uint8ClampedArray(c*r);for(let o=0;o<r;o++)for(let a=0;a<e;a++){let y=0,B=0,R=0;for(let w=0;w<m;w++)for(let P=0;P<b;P++){let G=Math.cos(Math.PI*a*P/e)*Math.cos(Math.PI*o*w/r),T=u[P+w*b];y+=T[0]*G,B+=T[1]*G,R+=T[2]*G}let V=h(y),I=h(B),E=h(R);s[4*a+0+o*c]=V,s[4*a+1+o*c]=I,s[4*a+2+o*c]=E,s[4*a+3+o*c]=255}return s},j=U;var A=4,D=(t,e,r,n)=>{let l=0,m=0,b=0,g=e*A;for(let u=0;u<e;u++){let c=A*u;for(let s=0;s<r;s++){let o=c+s*g,a=n(u,s);l+=a*f(t[o]),m+=a*f(t[o+1]),b+=a*f(t[o+2])}}let i=1/(e*r);return[l*i,m*i,b*i]},$=t=>{let e=h(t[0]),r=h(t[1]),n=h(t[2]);return(e<<16)+(r<<8)+n},H=(t,e)=>{let r=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[0]/e,.5)*9+9.5)))),n=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[1]/e,.5)*9+9.5)))),l=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[2]/e,.5)*9+9.5))));return r*19*19+n*19+l},O=(t,e,r,n,l)=>{if(n<1||n>9||l<1||l>9)throw new d("BlurHash must have between 1 and 9 components");if(e*r*4!==t.length)throw new d("Width and height must match the pixels array");let m=[];for(let s=0;s<l;s++)for(let o=0;o<n;o++){let a=o==0&&s==0?1:2,y=D(t,e,r,(B,R)=>a*Math.cos(Math.PI*o*B/e)*Math.cos(Math.PI*s*R/r));m.push(y)}let b=m[0],g=m.slice(1),i="",u=n-1+(l-1)*9;i+=p(u,1);let c;if(g.length>0){let s=Math.max(...g.map(a=>Math.max(...a))),o=Math.floor(Math.max(0,Math.min(82,Math.floor(s*166-.5))));c=(o+1)/166,i+=p(o,1)}else c=1,i+=p(0,1);return i+=p($(b),4),g.forEach(s=>{i+=p(H(s,c),2)}),i},S=O;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-blurhash/dist/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-blurhash/dist/esm/index.js ***!
  \*******************************************************/
/*! exports provided: Blurhash, BlurhashCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blurhash", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlurhashCanvas", function() { return o; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blurhash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blurhash */ "./node_modules/blurhash/dist/esm/index.js");
var P=Object.defineProperty,R=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var b=(e,s,t)=>s in e?P(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,h=(e,s)=>{for(var t in s||(s={}))v.call(s,t)&&b(e,t,s[t]);if(m)for(var t of m(s))x.call(s,t)&&b(e,t,s[t]);return e},p=(e,s)=>R(e,C(s));var g=(e,s)=>{var t={};for(var r in e)v.call(e,r)&&s.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&m)for(var r of m(e))s.indexOf(r)<0&&x.call(e,r)&&(t[r]=e[r]);return t};var o=class extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]{constructor(){super(...arguments);this.canvas=null;this.handleRef=t=>{this.canvas=t,this.draw()};this.draw=()=>{let{hash:t,height:r,punch:n,width:a}=this.props;if(this.canvas){let i=Object(blurhash__WEBPACK_IMPORTED_MODULE_1__["decode"])(t,a,r,n),c=this.canvas.getContext("2d"),d=c.createImageData(a,r);d.data.set(i),c.putImageData(d,0,0)}}}componentDidUpdate(){this.draw()}render(){let i=this.props,{hash:t,height:r,width:n}=i,a=g(i,["hash","height","width"]);return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("canvas",p(h({},a),{height:r,width:n,ref:this.handleRef}))}};o.defaultProps={height:128,width:128};var D={position:"absolute",top:0,bottom:0,left:0,right:0,width:"100%",height:"100%"},u=class extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]{componentDidUpdate(){if(this.props.resolutionX<=0)throw new Error("resolutionX must be larger than zero");if(this.props.resolutionY<=0)throw new Error("resolutionY must be larger than zero")}render(){let w=this.props,{hash:s,height:t,width:r,punch:n,resolutionX:a,resolutionY:i,style:c}=w,d=g(w,["hash","height","width","punch","resolutionX","resolutionY","style"]);return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",p(h({},d),{style:p(h({display:"inline-block",height:t,width:r},c),{position:"relative"})}),react__WEBPACK_IMPORTED_MODULE_0__["createElement"](o,{hash:s,height:i,width:a,punch:n,style:D}))}};u.defaultProps={height:128,width:128,resolutionX:32,resolutionY:32};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./pages/pictureGrid.jsx":
/*!*******************************!*\
  !*** ./pages/pictureGrid.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_blurhash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-blurhash */ "./node_modules/react-blurhash/dist/esm/index.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\pictureGrid.jsx",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PicturesGrid = function PicturesGrid() {
  _s();
  var pictures = ['/assets/images/pic (1).jpg', '/assets/images/pic (2).jpg', '/assets/images/pic (3).jpg', '/assets/images/pic (4).jpg', '/assets/images/pic (5).jpg', '/assets/images/pic (6).jpg', '/assets/images/pic (7).jpg', '/assets/images/pic (8).jpg', '/assets/images/pic (9).jpg', '/assets/images/pic (10).jpg', '/assets/images/pic (11).jpg', '/assets/images/pic (12).jpg', '/assets/images/pic (13).jpg'];
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    selectedPicture = _useState[0],
    setSelectedPicture = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    imageLoaded = _useState2[0],
    setImageLoaded = _useState2[1];
  var handleSelectPicture = function handleSelectPicture(picture) {
    setSelectedPicture(picture);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var img = new Image();
    img.onload = function () {
      setImageLoaded(true);
    };
    img.src = pictures;
  }, [pictures]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "picture-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, pictures.map(function (picture, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      title: "view image",
      "data-toggle": "modal",
      "data-target": "#myModal",
      onClick: function onClick() {
        return handleSelectPicture(picture);
      },
      className: "picture",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        display: imageLoaded ? 'none' : 'inline'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, __jsx(react_blurhash__WEBPACK_IMPORTED_MODULE_2__["Blurhash"], {
      hash: "LkOyeVE0R*WC?wWAjZofM{s:RjoM",
      className: "grid-img",
      resolutionX: 32,
      resolutionY: 32,
      punch: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    })), __jsx("div", {
      style: {
        display: !imageLoaded ? 'none' : 'inline'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__["LazyLoadImage"], {
      src: picture,
      className: "grid-img",
      effect: "blur",
      width: '100%',
      alt: "Picture ".concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }))));
  })), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "modal fade",
    id: "myModal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-dialog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx("img", {
    style: {
      height: '70%',
      objectFit: 'cover'
    },
    src: selectedPicture,
    alt: "selected picture",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  })))))));
};
_s(PicturesGrid, "QfH/TJKuuU5dqxHyDTtXHsnWtAo=");
_c = PicturesGrid;
/* harmony default export */ __webpack_exports__["default"] = (PicturesGrid);
var _c;
$RefreshReg$(_c, "PicturesGrid");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JsdXJoYXNoL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYmx1cmhhc2gvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BpY3R1cmVHcmlkLmpzeCJdLCJuYW1lcyI6WyJQaWN0dXJlc0dyaWQiLCJfcyIsInBpY3R1cmVzIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZFBpY3R1cmUiLCJzZXRTZWxlY3RlZFBpY3R1cmUiLCJfdXNlU3RhdGUyIiwiaW1hZ2VMb2FkZWQiLCJzZXRJbWFnZUxvYWRlZCIsImhhbmRsZVNlbGVjdFBpY3R1cmUiLCJwaWN0dXJlIiwidXNlRWZmZWN0IiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJzcmMiLCJfX2pzeCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsIm9uQ2xpY2siLCJrZXkiLCJzdHlsZSIsImRpc3BsYXkiLCJCbHVyaGFzaCIsImhhc2giLCJyZXNvbHV0aW9uWCIsInJlc29sdXRpb25ZIiwicHVuY2giLCJMYXp5TG9hZEltYWdlIiwiZWZmZWN0Iiwid2lkdGgiLCJhbHQiLCJjb25jYXQiLCJpZCIsImhlaWdodCIsIm9iamVjdEZpdCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFTQUFxUyxnQ0FBZ0MsUUFBUSxhQUFhLFFBQVEsWUFBWSxXQUFXLEtBQUssMEJBQTBCLFNBQVMsU0FBUyxXQUFXLFNBQVMsWUFBWSxLQUFLLEtBQUssd0NBQXdDLG9CQUFvQixVQUFVLFVBQVUsWUFB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QUtHLFNBQVMsRUFBQyxlQUFlO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzVCVixLQUFBO0lBQUtHLFNBQVMsRUFBQyxZQUFZO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3pCVixLQUFBO0lBQ0VnQixLQUFLLEVBQUU7TUFDTGEsTUFBTSxFQUFFLEtBQUs7TUFDYkMsU0FBUyxFQUFFO0lBQ2IsQ0FBRTtJQUNGL0IsR0FBRyxFQUFFWCxlQUFnQjtJQUNyQnNDLEdBQUcsRUFBQyxrQkFBa0I7SUFBQXRCLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ3ZCLENBQ0UsQ0FDRixDQUNGLENBQ0YsQ0FDTCxDQUVGLENBQUM7QUFFUCxDQUFDO0FBQUMxQixFQUFBLENBekZJRCxZQUFZO0FBQUFnRCxFQUFBLEdBQVpoRCxZQUFZO0FBMkZIQSwyRUFBWSxFQUFDO0FBQUEsSUFBQWdELEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE0N2I4MmFkZGQ5MDJhMzA5MGQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcT1bXCIwXCIsXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCIsXCJLXCIsXCJMXCIsXCJNXCIsXCJOXCIsXCJPXCIsXCJQXCIsXCJRXCIsXCJSXCIsXCJTXCIsXCJUXCIsXCJVXCIsXCJWXCIsXCJXXCIsXCJYXCIsXCJZXCIsXCJaXCIsXCJhXCIsXCJiXCIsXCJjXCIsXCJkXCIsXCJlXCIsXCJmXCIsXCJnXCIsXCJoXCIsXCJpXCIsXCJqXCIsXCJrXCIsXCJsXCIsXCJtXCIsXCJuXCIsXCJvXCIsXCJwXCIsXCJxXCIsXCJyXCIsXCJzXCIsXCJ0XCIsXCJ1XCIsXCJ2XCIsXCJ3XCIsXCJ4XCIsXCJ5XCIsXCJ6XCIsXCIjXCIsXCIkXCIsXCIlXCIsXCIqXCIsXCIrXCIsXCIsXCIsXCItXCIsXCIuXCIsXCI6XCIsXCI7XCIsXCI9XCIsXCI/XCIsXCJAXCIsXCJbXCIsXCJdXCIsXCJeXCIsXCJfXCIsXCJ7XCIsXCJ8XCIsXCJ9XCIsXCJ+XCJdLHg9dD0+e2xldCBlPTA7Zm9yKGxldCByPTA7cjx0Lmxlbmd0aDtyKyspe2xldCBuPXRbcl0sbD1xLmluZGV4T2Yobik7ZT1lKjgzK2x9cmV0dXJuIGV9LHA9KHQsZSk9Pnt2YXIgcj1cIlwiO2ZvcihsZXQgbj0xO248PWU7bisrKXtsZXQgbD1NYXRoLmZsb29yKHQpL01hdGgucG93KDgzLGUtbiklODM7cis9cVtNYXRoLmZsb29yKGwpXX1yZXR1cm4gcn07dmFyIGY9dD0+e2xldCBlPXQvMjU1O3JldHVybiBlPD0uMDQwNDU/ZS8xMi45MjpNYXRoLnBvdygoZSsuMDU1KS8xLjA1NSwyLjQpfSxoPXQ9PntsZXQgZT1NYXRoLm1heCgwLE1hdGgubWluKDEsdCkpO3JldHVybiBlPD0uMDAzMTMwOD9NYXRoLnRydW5jKGUqMTIuOTIqMjU1Ky41KTpNYXRoLnRydW5jKCgxLjA1NSpNYXRoLnBvdyhlLC40MTY2NjY2NjY2NjY2NjY3KS0uMDU1KSoyNTUrLjUpfSxGPXQ9PnQ8MD8tMToxLE09KHQsZSk9PkYodCkqTWF0aC5wb3coTWF0aC5hYnModCksZSk7dmFyIGQ9Y2xhc3MgZXh0ZW5kcyBFcnJvcntjb25zdHJ1Y3RvcihlKXtzdXBlcihlKSx0aGlzLm5hbWU9XCJWYWxpZGF0aW9uRXJyb3JcIix0aGlzLm1lc3NhZ2U9ZX19O3ZhciBDPXQ9PntpZighdHx8dC5sZW5ndGg8Nil0aHJvdyBuZXcgZChcIlRoZSBibHVyaGFzaCBzdHJpbmcgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIik7bGV0IGU9eCh0WzBdKSxyPU1hdGguZmxvb3IoZS85KSsxLG49ZSU5KzE7aWYodC5sZW5ndGghPT00KzIqbipyKXRocm93IG5ldyBkKGBibHVyaGFzaCBsZW5ndGggbWlzbWF0Y2g6IGxlbmd0aCBpcyAke3QubGVuZ3RofSBidXQgaXQgc2hvdWxkIGJlICR7NCsyKm4qcn1gKX0sTj10PT57dHJ5e0ModCl9Y2F0Y2goZSl7cmV0dXJue3Jlc3VsdDohMSxlcnJvclJlYXNvbjplLm1lc3NhZ2V9fXJldHVybntyZXN1bHQ6ITB9fSx6PXQ9PntsZXQgZT10Pj4xNixyPXQ+PjgmMjU1LG49dCYyNTU7cmV0dXJuW2YoZSksZihyKSxmKG4pXX0sTD0odCxlKT0+e2xldCByPU1hdGguZmxvb3IodC8zNjEpLG49TWF0aC5mbG9vcih0LzE5KSUxOSxsPXQlMTk7cmV0dXJuW00oKHItOSkvOSwyKSplLE0oKG4tOSkvOSwyKSplLE0oKGwtOSkvOSwyKSplXX0sVT0odCxlLHIsbik9PntDKHQpLG49bnwxO2xldCBsPXgodFswXSksbT1NYXRoLmZsb29yKGwvOSkrMSxiPWwlOSsxLGk9KHgodFsxXSkrMSkvMTY2LHU9bmV3IEFycmF5KGIqbSk7Zm9yKGxldCBvPTA7bzx1Lmxlbmd0aDtvKyspaWYobz09PTApe2xldCBhPXgodC5zdWJzdHJpbmcoMiw2KSk7dVtvXT16KGEpfWVsc2V7bGV0IGE9eCh0LnN1YnN0cmluZyg0K28qMiw2K28qMikpO3Vbb109TChhLGkqbil9bGV0IGM9ZSo0LHM9bmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGMqcik7Zm9yKGxldCBvPTA7bzxyO28rKylmb3IobGV0IGE9MDthPGU7YSsrKXtsZXQgeT0wLEI9MCxSPTA7Zm9yKGxldCB3PTA7dzxtO3crKylmb3IobGV0IFA9MDtQPGI7UCsrKXtsZXQgRz1NYXRoLmNvcyhNYXRoLlBJKmEqUC9lKSpNYXRoLmNvcyhNYXRoLlBJKm8qdy9yKSxUPXVbUCt3KmJdO3krPVRbMF0qRyxCKz1UWzFdKkcsUis9VFsyXSpHfWxldCBWPWgoeSksST1oKEIpLEU9aChSKTtzWzQqYSswK28qY109VixzWzQqYSsxK28qY109SSxzWzQqYSsyK28qY109RSxzWzQqYSszK28qY109MjU1fXJldHVybiBzfSxqPVU7dmFyIEE9NCxEPSh0LGUscixuKT0+e2xldCBsPTAsbT0wLGI9MCxnPWUqQTtmb3IobGV0IHU9MDt1PGU7dSsrKXtsZXQgYz1BKnU7Zm9yKGxldCBzPTA7czxyO3MrKyl7bGV0IG89YytzKmcsYT1uKHUscyk7bCs9YSpmKHRbb10pLG0rPWEqZih0W28rMV0pLGIrPWEqZih0W28rMl0pfX1sZXQgaT0xLyhlKnIpO3JldHVybltsKmksbSppLGIqaV19LCQ9dD0+e2xldCBlPWgodFswXSkscj1oKHRbMV0pLG49aCh0WzJdKTtyZXR1cm4oZTw8MTYpKyhyPDw4KStufSxIPSh0LGUpPT57bGV0IHI9TWF0aC5mbG9vcihNYXRoLm1heCgwLE1hdGgubWluKDE4LE1hdGguZmxvb3IoTSh0WzBdL2UsLjUpKjkrOS41KSkpKSxuPU1hdGguZmxvb3IoTWF0aC5tYXgoMCxNYXRoLm1pbigxOCxNYXRoLmZsb29yKE0odFsxXS9lLC41KSo5KzkuNSkpKSksbD1NYXRoLmZsb29yKE1hdGgubWF4KDAsTWF0aC5taW4oMTgsTWF0aC5mbG9vcihNKHRbMl0vZSwuNSkqOSs5LjUpKSkpO3JldHVybiByKjE5KjE5K24qMTkrbH0sTz0odCxlLHIsbixsKT0+e2lmKG48MXx8bj45fHxsPDF8fGw+OSl0aHJvdyBuZXcgZChcIkJsdXJIYXNoIG11c3QgaGF2ZSBiZXR3ZWVuIDEgYW5kIDkgY29tcG9uZW50c1wiKTtpZihlKnIqNCE9PXQubGVuZ3RoKXRocm93IG5ldyBkKFwiV2lkdGggYW5kIGhlaWdodCBtdXN0IG1hdGNoIHRoZSBwaXhlbHMgYXJyYXlcIik7bGV0IG09W107Zm9yKGxldCBzPTA7czxsO3MrKylmb3IobGV0IG89MDtvPG47bysrKXtsZXQgYT1vPT0wJiZzPT0wPzE6Mix5PUQodCxlLHIsKEIsUik9PmEqTWF0aC5jb3MoTWF0aC5QSSpvKkIvZSkqTWF0aC5jb3MoTWF0aC5QSSpzKlIvcikpO20ucHVzaCh5KX1sZXQgYj1tWzBdLGc9bS5zbGljZSgxKSxpPVwiXCIsdT1uLTErKGwtMSkqOTtpKz1wKHUsMSk7bGV0IGM7aWYoZy5sZW5ndGg+MCl7bGV0IHM9TWF0aC5tYXgoLi4uZy5tYXAoYT0+TWF0aC5tYXgoLi4uYSkpKSxvPU1hdGguZmxvb3IoTWF0aC5tYXgoMCxNYXRoLm1pbig4MixNYXRoLmZsb29yKHMqMTY2LS41KSkpKTtjPShvKzEpLzE2NixpKz1wKG8sMSl9ZWxzZSBjPTEsaSs9cCgwLDEpO3JldHVybiBpKz1wKCQoYiksNCksZy5mb3JFYWNoKHM9PntpKz1wKEgocyxjKSwyKX0pLGl9LFM9TztleHBvcnR7ZCBhcyBWYWxpZGF0aW9uRXJyb3IsaiBhcyBkZWNvZGUsUyBhcyBlbmNvZGUsTiBhcyBpc0JsdXJoYXNoVmFsaWR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5LFI9T2JqZWN0LmRlZmluZVByb3BlcnRpZXM7dmFyIEM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM7dmFyIG09T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczt2YXIgdj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LHg9T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTt2YXIgYj0oZSxzLHQpPT5zIGluIGU/UChlLHMse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KTplW3NdPXQsaD0oZSxzKT0+e2Zvcih2YXIgdCBpbiBzfHwocz17fSkpdi5jYWxsKHMsdCkmJmIoZSx0LHNbdF0pO2lmKG0pZm9yKHZhciB0IG9mIG0ocykpeC5jYWxsKHMsdCkmJmIoZSx0LHNbdF0pO3JldHVybiBlfSxwPShlLHMpPT5SKGUsQyhzKSk7dmFyIGc9KGUscyk9Pnt2YXIgdD17fTtmb3IodmFyIHIgaW4gZSl2LmNhbGwoZSxyKSYmcy5pbmRleE9mKHIpPDAmJih0W3JdPWVbcl0pO2lmKGUhPW51bGwmJm0pZm9yKHZhciByIG9mIG0oZSkpcy5pbmRleE9mKHIpPDAmJnguY2FsbChlLHIpJiYodFtyXT1lW3JdKTtyZXR1cm4gdH07aW1wb3J0KmFzIGwgZnJvbVwicmVhY3RcIjtpbXBvcnQqYXMgZiBmcm9tXCJyZWFjdFwiO2ltcG9ydHtkZWNvZGUgYXMgeX1mcm9tXCJibHVyaGFzaFwiO3ZhciBvPWNsYXNzIGV4dGVuZHMgZi5QdXJlQ29tcG9uZW50e2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKTt0aGlzLmNhbnZhcz1udWxsO3RoaXMuaGFuZGxlUmVmPXQ9Pnt0aGlzLmNhbnZhcz10LHRoaXMuZHJhdygpfTt0aGlzLmRyYXc9KCk9PntsZXR7aGFzaDp0LGhlaWdodDpyLHB1bmNoOm4sd2lkdGg6YX09dGhpcy5wcm9wcztpZih0aGlzLmNhbnZhcyl7bGV0IGk9eSh0LGEscixuKSxjPXRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxkPWMuY3JlYXRlSW1hZ2VEYXRhKGEscik7ZC5kYXRhLnNldChpKSxjLnB1dEltYWdlRGF0YShkLDAsMCl9fX1jb21wb25lbnREaWRVcGRhdGUoKXt0aGlzLmRyYXcoKX1yZW5kZXIoKXtsZXQgaT10aGlzLnByb3BzLHtoYXNoOnQsaGVpZ2h0OnIsd2lkdGg6bn09aSxhPWcoaSxbXCJoYXNoXCIsXCJoZWlnaHRcIixcIndpZHRoXCJdKTtyZXR1cm4gZi5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIscChoKHt9LGEpLHtoZWlnaHQ6cix3aWR0aDpuLHJlZjp0aGlzLmhhbmRsZVJlZn0pKX19O28uZGVmYXVsdFByb3BzPXtoZWlnaHQ6MTI4LHdpZHRoOjEyOH07dmFyIEQ9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6MCxib3R0b206MCxsZWZ0OjAscmlnaHQ6MCx3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9LHU9Y2xhc3MgZXh0ZW5kcyBsLlB1cmVDb21wb25lbnR7Y29tcG9uZW50RGlkVXBkYXRlKCl7aWYodGhpcy5wcm9wcy5yZXNvbHV0aW9uWDw9MCl0aHJvdyBuZXcgRXJyb3IoXCJyZXNvbHV0aW9uWCBtdXN0IGJlIGxhcmdlciB0aGFuIHplcm9cIik7aWYodGhpcy5wcm9wcy5yZXNvbHV0aW9uWTw9MCl0aHJvdyBuZXcgRXJyb3IoXCJyZXNvbHV0aW9uWSBtdXN0IGJlIGxhcmdlciB0aGFuIHplcm9cIil9cmVuZGVyKCl7bGV0IHc9dGhpcy5wcm9wcyx7aGFzaDpzLGhlaWdodDp0LHdpZHRoOnIscHVuY2g6bixyZXNvbHV0aW9uWDphLHJlc29sdXRpb25ZOmksc3R5bGU6Y309dyxkPWcodyxbXCJoYXNoXCIsXCJoZWlnaHRcIixcIndpZHRoXCIsXCJwdW5jaFwiLFwicmVzb2x1dGlvblhcIixcInJlc29sdXRpb25ZXCIsXCJzdHlsZVwiXSk7cmV0dXJuIGwuY3JlYXRlRWxlbWVudChcImRpdlwiLHAoaCh7fSxkKSx7c3R5bGU6cChoKHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCIsaGVpZ2h0OnQsd2lkdGg6cn0sYykse3Bvc2l0aW9uOlwicmVsYXRpdmVcIn0pfSksbC5jcmVhdGVFbGVtZW50KG8se2hhc2g6cyxoZWlnaHQ6aSx3aWR0aDphLHB1bmNoOm4sc3R5bGU6RH0pKX19O3UuZGVmYXVsdFByb3BzPXtoZWlnaHQ6MTI4LHdpZHRoOjEyOCxyZXNvbHV0aW9uWDozMixyZXNvbHV0aW9uWTozMn07ZXhwb3J0e3UgYXMgQmx1cmhhc2gsbyBhcyBCbHVyaGFzaENhbnZhc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbHVyaGFzaCB9IGZyb20gJ3JlYWN0LWJsdXJoYXNoJztcclxuY29uc3QgUGljdHVyZXNHcmlkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBpY3R1cmVzID0gW1xyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoMSkuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDIpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICgzKS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoNCkuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDUpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICg2KS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoNykuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDgpLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICg5KS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoMTApLmpwZycsXHJcbiAgICAnL2Fzc2V0cy9pbWFnZXMvcGljICgxMSkuanBnJyxcclxuICAgICcvYXNzZXRzL2ltYWdlcy9waWMgKDEyKS5qcGcnLFxyXG4gICAgJy9hc3NldHMvaW1hZ2VzL3BpYyAoMTMpLmpwZycsXHJcbiAgXTtcclxuICBjb25zdCBbc2VsZWN0ZWRQaWN0dXJlLCBzZXRTZWxlY3RlZFBpY3R1cmVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ltYWdlTG9hZGVkLCBzZXRJbWFnZUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0UGljdHVyZSA9IChwaWN0dXJlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFBpY3R1cmUocGljdHVyZSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBzZXRJbWFnZUxvYWRlZCh0cnVlKTtcclxuICAgIH07XHJcbiAgICBpbWcuc3JjID0gcGljdHVyZXM7XHJcbiAgfSwgW3BpY3R1cmVzXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwaWN0dXJlLWdyaWQnPlxyXG4gICAgICAgIHtwaWN0dXJlcy5tYXAoKHBpY3R1cmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgdGl0bGU9J3ZpZXcgaW1hZ2UnXHJcbiAgICAgICAgICAgICAgZGF0YS10b2dnbGU9J21vZGFsJ1xyXG4gICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PScjbXlNb2RhbCdcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3RQaWN0dXJlKHBpY3R1cmUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGljdHVyZSdcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBpbWFnZUxvYWRlZCA/ICdub25lJyA6ICdpbmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPEJsdXJoYXNoXHJcbiAgICAgICAgICAgICAgICAgIGhhc2g9J0xrT3llVkUwUipXQz93V0FqWm9mTXtzOlJqb00nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZ3JpZC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgIHJlc29sdXRpb25YPXszMn1cclxuICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvblk9ezMyfVxyXG4gICAgICAgICAgICAgICAgICBwdW5jaD17MX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAhaW1hZ2VMb2FkZWQgPyAnbm9uZScgOiAnaW5saW5lJyB9fT5cclxuICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17cGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdncmlkLWltZydcclxuICAgICAgICAgICAgICAgICAgZWZmZWN0PSdibHVyJ1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17JzEwMCUnfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2BQaWN0dXJlICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiB7c2VsZWN0ZWRQaWN0dXJlICYmIHNob3dNb2RhbCAmJiAoICovfVxyXG4gICAgICA8PlxyXG4gICAgICAgIHsvKiA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWRQaWN0dXJlfSBhbHQ9J3NlbGVjdGVkIHBpY3R1cmUnIC8+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsIGZhZGUnIGlkPSdteU1vZGFsJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1kaWFsb2cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtY29udGVudCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzcwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkUGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgYWx0PSdzZWxlY3RlZCBwaWN0dXJlJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICAgIHsvKiApfSAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWN0dXJlc0dyaWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=