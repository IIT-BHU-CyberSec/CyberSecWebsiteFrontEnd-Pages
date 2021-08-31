"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(266);
;// CONCATENATED MODULE: ./components/Jumbotron.js





const Jumbotron = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "ht-tm-jumbotron",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jumbotron bg-transparent mb-0 radius-0",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ht-tm-header",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "row",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-xl-6",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
                  className: "display-2",
                  children: ["IIT(BHU)CyberSe", /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "vim-caret",
                    children: "c"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "lead mb-3 text-mono text-success",
                  children: "A Bootstrap theme for 1337 hackers."
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "mt-5 text-grey text-spacey",
                  children: "Neon Glow is a free and open source Bootstrap theme. It was built on top of the Bootstrap 4. Only the leetest of hackers will be able to wield its power. Scroll down to explore the components and dive into the source."
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "text-mono",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "/bootstrap-themes/demo/files/hackerthemes-neon-glow.zip",
                    className: "btn btn-primary btn-shadow px-3 my-2 ml-0 text-left js-ht-download-link",
                    "data-type": "theme",
                    "data-id": "95",
                    children: "Download"
                  })
                })]
              })
            })
          })
        })
      })
    })
  });
};

/* harmony default export */ const components_Jumbotron = (Jumbotron);
// EXTERNAL MODULE: ./components/Postcards.js + 1 modules
var Postcards = __webpack_require__(42);
// EXTERNAL MODULE: ./api/getFiveNewestPosts.js
var getFiveNewestPosts = __webpack_require__(623);
;// CONCATENATED MODULE: ./pages/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ const pages = (class extends external_react_.Component {
  static async getInitialProps() {
    const apiResult = await (0,getFiveNewestPosts/* default */.Z)();
    return {
      posts: apiResult && apiResult.posts
    };
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "layout-wrapper",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ht-main",
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_Jumbotron, {}), /*#__PURE__*/jsx_runtime_.jsx(Postcards/* default */.Z, _objectSpread({}, this.props))]
      })]
    });
  }

});

/***/ }),

/***/ 376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [266,42], () => (__webpack_exec__(177)));
module.exports = __webpack_exports__;

})();