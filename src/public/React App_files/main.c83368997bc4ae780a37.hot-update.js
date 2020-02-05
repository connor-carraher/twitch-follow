webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/Components/Streamer.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/Components/Streamer.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../public/profile_pic.jpg */ "./src/public/profile_pic.jpg"));
// Module
exports.push([module.i, ".card {\n  color: #6441a5;\n  align-content: center;\n  align-items: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  height: 28vh;\n  width: 18.75vw;\n  transition: 0.3s;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-position: center;\n  position: relative;\n  border-radius: 5px;\n  border: solid #c1afdb;\n  border-width: 0.125vw; }\n  .card:hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\n  .card .folded-content {\n    background-color: #ffffff;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    display: flex;\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n    font-size: 1.25rem;\n    font-weight: 800; }\n    .card .folded-content .icon {\n      flex-basis: 20%;\n      text-align: right; }\n    .card .folded-content .text {\n      flex-basis: 80%;\n      text-align: left;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    .card .folded-content .text .below {\n      font-weight: 400;\n      height: 0; }\n    .card .folded-content .transform {\n      transition: all 2s ease; }\n", ""]);


/***/ }),

/***/ "./src/Components/Streamer.js":
/*!************************************!*\
  !*** ./src/Components/Streamer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Streamer; });
/* harmony import */ var _Users_Connor_Mac_Desktop_source_Twitch_Follow_twitch_follow_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Streamer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Streamer.scss */ "./src/Components/Streamer.scss");
/* harmony import */ var _Streamer_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Streamer_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");

var _jsxFileName = "/Users/Connor-Mac/Desktop/source/Twitch_Follow/twitch-follow/src/Components/Streamer.js";





function Streamer({
  streamer
}) {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
        _useState2 = Object(_Users_Connor_Mac_Desktop_source_Twitch_Follow_twitch_follow_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isFolded = _useState2[0],
        setIsFolded = _useState2[1];

  const variants = {
    folded: {
      scaleY: 1,
      height: "0"
    },
    unfolded: {
      scaleY: -1,
      height: "auto"
    }
  };

  function toggleContent() {
    setIsFolded(!isFolded);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "folded-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, streamer.to_name, isFolded ? "" : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    className: "below text",
    animate: {
      height: "auto"
    },
    transition: {
      duration: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "year-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Years: ", moment__WEBPACK_IMPORTED_MODULE_3___default()().diff(streamer.followed_at, "years")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "month-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Months: ", moment__WEBPACK_IMPORTED_MODULE_3___default()().diff(streamer.followed_at, "months") % 12), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "day-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Days: ", moment__WEBPACK_IMPORTED_MODULE_3___default()().diff(streamer.followed_at, "days") % 31))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    className: "icon",
    onClick: toggleContent,
    animate: isFolded ? "folded" : "unfolded",
    transition: {
      duration: 1
    },
    variants: variants,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["ArrowUp"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./src/Components/Streamer.scss":
/*!**************************************!*\
  !*** ./src/Components/Streamer.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Streamer.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/Components/Streamer.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Streamer.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/Components/Streamer.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Streamer.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/Components/Streamer.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/public/profile_pic.jpg":
/*!************************************!*\
  !*** ./src/public/profile_pic.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/profile_pic.f2e12418.jpg";

/***/ })

})
//# sourceMappingURL=main.c83368997bc4ae780a37.hot-update.js.map