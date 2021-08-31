"use strict";
(() => {
var exports = {};
exports.id = "pages/blog/[title]";
exports.ids = ["pages/blog/[title]"];
exports.modules = {

/***/ "./api/getBlogPostByUrlTitle.js":
/*!**************************************!*\
  !*** ./api/getBlogPostByUrlTitle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_apiBaseUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/apiBaseUrl.js */ "./utils/apiBaseUrl.js");


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(urlTitle) {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`http://localhost:5000/posts/get-blog-post-by-url-title?urlTitle=${urlTitle}`);
    return response.data;
  } catch (error) {
    return {
      getDataError: true
    };
  }
}

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/esharkythegreat/WebDev/IIT-BHU-CyberSec-Website/frontend/website/components/Header.js";


const Navbar = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "navbar navbar-expand-lg navbar-dark bg-primary",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "navbar-toggler navbar-toggler-right",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarTogglerDemo03",
        "aria-controls": "navbarTogglerDemo03",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "navbar-toggler-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "navbar-brand",
        href: "#!",
        children: "IIT(BHU)CyberSec"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "collapse navbar-collapse",
        id: "navbarTogglerDemo03",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "navbar-nav mr-auto mt-2 mt-md-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "nav-item active",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              href: "/",
              children: ["Home", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "sr-only",
                children: "(current)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              href: "/about",
              children: "About Us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              href: "/blogs",
              children: "Blogs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          className: "form-inline my-2 my-lg-0",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "form-control mr-sm-2",
            type: "text",
            placeholder: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./pages/blog/[title].js":
/*!*******************************!*\
  !*** ./pages/blog/[title].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "prismjs");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers.js */ "prismjs/plugins/line-numbers/prism-line-numbers.js");
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_numbers_prism_line_numbers_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_plugins_normalize_whitespace_prism_normalize_whitespace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js */ "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js");
/* harmony import */ var prismjs_plugins_normalize_whitespace_prism_normalize_whitespace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_normalize_whitespace_prism_normalize_whitespace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_getBlogPostByUrlTitle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/getBlogPostByUrlTitle.js */ "./api/getBlogPostByUrlTitle.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header.js */ "./components/Header.js");

var _jsxFileName = "/home/esharkythegreat/WebDev/IIT-BHU-CyberSec-Website/frontend/website/pages/blog/[title].js";







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps({
    query
  }) {
    const apiResult = await (0,_api_getBlogPostByUrlTitle_js__WEBPACK_IMPORTED_MODULE_6__.default)(query.title);
    return {
      post: apiResult && apiResult.post
    };
  }

  componentDidMount() {
    prismjs__WEBPACK_IMPORTED_MODULE_2___default().highlightAll();
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "layout-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_js__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "blog-post-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "blog-post-top-section",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: "Your Blog Post Title"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "blog-post-top-meta",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "5/1/2020"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "blog-post-top-tag-btn",
              href: "/blog/tags/javascript",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "javascript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "blog-post-top-tag-btn",
              href: "/blog/tags/css",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "css"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "blog-post-body-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Blog post content will go here!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "h2 Section Heading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "h3 Section Heading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "h4 Section Heading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            children: "h5 Section Heading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["A short paragraph with a link to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://www.google.com",
              children: "Google"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 61
            }, this), "."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. And add as much additional content here as you want. An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. Also an example of a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://www.google.com",
              children: "link could go here"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 326
            }, this), "."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. And add as much additional content here as you want. An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. Also an example of a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://www.google.com",
              children: "link could go here"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 326
            }, this), "."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Ordered List:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "A sentence goes here."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["A short code snippet: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
                children: "code snippet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 55
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["A link inside a unordered list bullet ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://www.google.com",
                children: "Google"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 71
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Unordered List:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "A sentence goes here."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["A short code snippet: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
                children: "code snippet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 55
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["A link inside a unordered list bullet ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://www.google.com",
                children: "Google"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 71
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "blog-post-body-code-snippet",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
              className: "blog-post-body-code-snippet-header",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "example.html"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
              className: "line-numbers language-html",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
                className: "html language-html",
                children: `
                                <div>
                                    <p>Html code example</p>
                                </div>
                                `
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "blog-post-body-code-snippet",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
              className: "blog-post-body-code-snippet-header",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "example.js"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
              className: "line-numbers language-js",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
                className: "js language-js",
                children: `
                                    // Set your secret key: remember to switch to your live secret key in production
                                    // See your keys here: https://dashboard.stripe.com/account/apikeys

                                    const stripe = require('stripe')('sk_test_hZIksNuZZMXLLFn8q5LtPDAm00Y6r5kUg7')

                                    (async () => {
                                        const paymentIntent = await stripe.paymentIntents.create({
                                        amount: 1099,
                                        currency: 'usd',
                                        })
                                    })()
                                    `
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://assets.coderrocketfuel.com/css-article-image.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("blockquote", {
            children: "Warning or special message that you want to stand out should be placed in this blockquote element."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this), this.props.post.tags.map((tag, index) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "blog-post-top-tag-btn",
              href: `/blog/tags/${tag}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: tag
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 41
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 37
            }, this);
          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: moment__WEBPACK_IMPORTED_MODULE_3___default().unix(this.props.post.dateTimestamp).format("MMMM Do, YYYY")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            dangerouslySetInnerHTML: {
              __html: this.props.post.markdownContent
            },
            className: "blog-post-body-content"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this);
  }

});

/***/ }),

/***/ "./utils/apiBaseUrl.js":
/*!*****************************!*\
  !*** ./utils/apiBaseUrl.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let apiBaseUrl;

if (true) {
  apiBaseUrl = "http://localhost:5000";
} else {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiBaseUrl);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "prismjs":
/*!**************************!*\
  !*** external "prismjs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("prismjs");

/***/ }),

/***/ "prismjs/plugins/line-numbers/prism-line-numbers.js":
/*!*********************************************************************!*\
  !*** external "prismjs/plugins/line-numbers/prism-line-numbers.js" ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = require("prismjs/plugins/line-numbers/prism-line-numbers.js");

/***/ }),

/***/ "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js":
/*!*************************************************************************************!*\
  !*** external "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js" ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = require("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[title].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixJQUFYLENBQWdCSyxJQUFoQixDQUFxQkMsR0FBckIsQ0FBeUIsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEtBQWdCO0FBQ3JDLGdDQUNJO0FBQ0ksdUJBQVMsRUFBQyx1QkFEZDtBQUdJLGtCQUFJLEVBQUcsY0FBYUQsR0FBSSxFQUg1QjtBQUFBLHFDQUtJO0FBQUEsMEJBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKLGVBRVNDLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESjtBQVNILFdBVkQsQ0FoRVIsZUE0RUk7QUFBQSxzQkFBT2Ysa0RBQUEsQ0FBWSxLQUFLVyxLQUFMLENBQVdKLElBQVgsQ0FBZ0JVLGFBQTVCLEVBQTJDQyxNQUEzQyxDQUFrRCxlQUFsRDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBNUVKLGVBNkVJO0FBQUssbUNBQXVCLEVBQUU7QUFBRUMsY0FBQUEsTUFBTSxFQUFFLEtBQUtSLEtBQUwsQ0FBV0osSUFBWCxDQUFnQmE7QUFBMUIsYUFBOUI7QUFBMkUscUJBQVMsRUFBQztBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTdFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFrR0g7O0FBL0drQzs7Ozs7Ozs7Ozs7Ozs7QUNSdkMsSUFBSTlCLFVBQUo7O0FBRUEsSUFBSSxNQUF3QztBQUN4Q0EsRUFBQUEsVUFBVSxHQUFHK0IsdUJBQWI7QUFDSCxDQUZELE1BRU8sRUFFTjs7QUFFRCxpRUFBZS9CLFVBQWY7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUvLi9hcGkvZ2V0QmxvZ1Bvc3RCeVVybFRpdGxlLmpzIiwid2VicGFjazovL3dlYnNpdGUvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLy4vcGFnZXMvYmxvZy9bdGl0bGVdLmpzIiwid2VicGFjazovL3dlYnNpdGUvLi91dGlscy9hcGlCYXNlVXJsLmpzIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwicHJpc21qc1wiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJwcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5qc1wiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJwcmlzbWpzL3BsdWdpbnMvbm9ybWFsaXplLXdoaXRlc3BhY2UvcHJpc20tbm9ybWFsaXplLXdoaXRlc3BhY2UuanNcIiIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cbmltcG9ydCBhcGlCYXNlVXJsIGZyb20gXCIuLi91dGlscy9hcGlCYXNlVXJsLmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHVybFRpdGxlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Bvc3RzL2dldC1ibG9nLXBvc3QtYnktdXJsLXRpdGxlP3VybFRpdGxlPSR7dXJsVGl0bGV9YClcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBnZXREYXRhRXJyb3I6IHRydWUgfVxuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclRvZ2dsZXJEZW1vMDNcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyVG9nZ2xlckRlbW8wM1wiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjIVwiPklJVChCSFUpQ3liZXJTZWM8L2E+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyVG9nZ2xlckRlbW8wM1wiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvIG10LTIgbXQtbWQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9cIj5Ib21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj0nL2Fib3V0Jz5BYm91dCBVczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvYmxvZ3NcIj5CbG9nczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtci1zbS0yXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIlxuaW1wb3J0IFwicHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuanNcIlxuaW1wb3J0IFwicHJpc21qcy9wbHVnaW5zL25vcm1hbGl6ZS13aGl0ZXNwYWNlL3ByaXNtLW5vcm1hbGl6ZS13aGl0ZXNwYWNlLmpzXCJcbmltcG9ydCBnZXRCbG9nUG9zdEJ5VXJsVGl0bGUgZnJvbSBcIi4uLy4uL2FwaS9nZXRCbG9nUG9zdEJ5VXJsVGl0bGUuanNcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXIuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICAgICAgY29uc3QgYXBpUmVzdWx0ID0gYXdhaXQgZ2V0QmxvZ1Bvc3RCeVVybFRpdGxlKHF1ZXJ5LnRpdGxlKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3N0OiBhcGlSZXN1bHQgJiYgYXBpUmVzdWx0LnBvc3RcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgUHJpc20uaGlnaGxpZ2h0QWxsKClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdC10b3Atc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPllvdXIgQmxvZyBQb3N0IFRpdGxlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0LXRvcC1tZXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+NS8xLzIwMjA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmxvZy1wb3N0LXRvcC10YWctYnRuXCIgaHJlZj1cIi9ibG9nL3RhZ3MvamF2YXNjcmlwdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5qYXZhc2NyaXB0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJibG9nLXBvc3QtdG9wLXRhZy1idG5cIiBocmVmPVwiL2Jsb2cvdGFncy9jc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Y3NzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3QtYm9keS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5CbG9nIHBvc3QgY29udGVudCB3aWxsIGdvIGhlcmUhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPmgyIFNlY3Rpb24gSGVhZGluZzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+aDMgU2VjdGlvbiBIZWFkaW5nPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5oNCBTZWN0aW9uIEhlYWRpbmc8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pmg1IFNlY3Rpb24gSGVhZGluZzwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BIHNob3J0IHBhcmFncmFwaCB3aXRoIGEgbGluayB0byA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbVwiPkdvb2dsZTwvYT4uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QW4gZXhhbXBsZSBvZiBhIGxvbmdlciBwYXJhZ3JhcGggdGhhdCB3aWxsIGJlIHVzZWQgaW4geW91ciBibG9nIHBvc3RzIHdoZW4geW91IGNyZWF0ZSB5b3VyIG93biB3ZWJzaXRlIG9yIGJsb2cuIEFuZCBhZGQgYXMgbXVjaCBhZGRpdGlvbmFsIGNvbnRlbnQgaGVyZSBhcyB5b3Ugd2FudC4gQW4gZXhhbXBsZSBvZiBhIGxvbmdlciBwYXJhZ3JhcGggdGhhdCB3aWxsIGJlIHVzZWQgaW4geW91ciBibG9nIHBvc3RzIHdoZW4geW91IGNyZWF0ZSB5b3VyIG93biB3ZWJzaXRlIG9yIGJsb2cuIEFsc28gYW4gZXhhbXBsZSBvZiBhIDxhIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tXCI+bGluayBjb3VsZCBnbyBoZXJlPC9hPi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BbiBleGFtcGxlIG9mIGEgbG9uZ2VyIHBhcmFncmFwaCB0aGF0IHdpbGwgYmUgdXNlZCBpbiB5b3VyIGJsb2cgcG9zdHMgd2hlbiB5b3UgY3JlYXRlIHlvdXIgb3duIHdlYnNpdGUgb3IgYmxvZy4gQW5kIGFkZCBhcyBtdWNoIGFkZGl0aW9uYWwgY29udGVudCBoZXJlIGFzIHlvdSB3YW50LiBBbiBleGFtcGxlIG9mIGEgbG9uZ2VyIHBhcmFncmFwaCB0aGF0IHdpbGwgYmUgdXNlZCBpbiB5b3VyIGJsb2cgcG9zdHMgd2hlbiB5b3UgY3JlYXRlIHlvdXIgb3duIHdlYnNpdGUgb3IgYmxvZy4gQWxzbyBhbiBleGFtcGxlIG9mIGEgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb21cIj5saW5rIGNvdWxkIGdvIGhlcmU8L2E+LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9yZGVyZWQgTGlzdDo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkEgc2VudGVuY2UgZ29lcyBoZXJlLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkEgc2hvcnQgY29kZSBzbmlwcGV0OiA8Y29kZT5jb2RlIHNuaXBwZXQ8L2NvZGU+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QSBsaW5rIGluc2lkZSBhIHVub3JkZXJlZCBsaXN0IGJ1bGxldCA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbVwiPkdvb2dsZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVub3JkZXJlZCBMaXN0OjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QSBzZW50ZW5jZSBnb2VzIGhlcmUuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QSBzaG9ydCBjb2RlIHNuaXBwZXQ6IDxjb2RlPmNvZGUgc25pcHBldDwvY29kZT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BIGxpbmsgaW5zaWRlIGEgdW5vcmRlcmVkIGxpc3QgYnVsbGV0IDxhIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tXCI+R29vZ2xlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3QtYm9keS1jb2RlLXNuaXBwZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJsb2ctcG9zdC1ib2R5LWNvZGUtc25pcHBldC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ZXhhbXBsZS5odG1sPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwibGluZS1udW1iZXJzIGxhbmd1YWdlLWh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiaHRtbCBsYW5ndWFnZS1odG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SHRtbCBjb2RlIGV4YW1wbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3QtYm9keS1jb2RlLXNuaXBwZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJsb2ctcG9zdC1ib2R5LWNvZGUtc25pcHBldC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ZXhhbXBsZS5qczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJqcyBsYW5ndWFnZS1qc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCB5b3VyIHNlY3JldCBrZXk6IHJlbWVtYmVyIHRvIHN3aXRjaCB0byB5b3VyIGxpdmUgc2VjcmV0IGtleSBpbiBwcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWUgeW91ciBrZXlzIGhlcmU6IGh0dHBzOi8vZGFzaGJvYXJkLnN0cmlwZS5jb20vYWNjb3VudC9hcGlrZXlzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKCdza190ZXN0X2haSWtzTnVaWk1YTExGbjhxNUx0UERBbTAwWTZyNWtVZzcnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRJbnRlbnQgPSBhd2FpdCBzdHJpcGUucGF5bWVudEludGVudHMuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDEwOTksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6ICd1c2QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Fzc2V0cy5jb2RlcnJvY2tldGZ1ZWwuY29tL2Nzcy1hcnRpY2xlLWltYWdlLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZT5XYXJuaW5nIG9yIHNwZWNpYWwgbWVzc2FnZSB0aGF0IHlvdSB3YW50IHRvIHN0YW5kIG91dCBzaG91bGQgYmUgcGxhY2VkIGluIHRoaXMgYmxvY2txdW90ZSBlbGVtZW50LjwvYmxvY2txdW90ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3QudGFncy5tYXAoKHRhZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvZy1wb3N0LXRvcC10YWctYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYmxvZy90YWdzLyR7dGFnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RhZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21vbWVudC51bml4KHRoaXMucHJvcHMucG9zdC5kYXRlVGltZXN0YW1wKS5mb3JtYXQoXCJNTU1NIERvLCBZWVlZXCIpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLnBvc3QubWFya2Rvd25Db250ZW50IH19IGNsYXNzTmFtZT1cImJsb2ctcG9zdC1ib2R5LWNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iLCJsZXQgYXBpQmFzZVVybFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGFwaUJhc2VVcmwgPSBwcm9jZXNzLmVudi5ERVZfQVBJX1VSTFxufSBlbHNlIHtcbiAgICBhcGlCYXNlVXJsID0gcHJvY2Vzcy5lbnYuUFJPRFVDVElPTl9BUElfVVJMXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaUJhc2VVcmwiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWpzL3BsdWdpbnMvbm9ybWFsaXplLXdoaXRlc3BhY2UvcHJpc20tbm9ybWFsaXplLXdoaXRlc3BhY2UuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJheGlvcyIsImFwaUJhc2VVcmwiLCJ1cmxUaXRsZSIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiZ2V0RGF0YUVycm9yIiwiUmVhY3QiLCJOYXZiYXIiLCJDb21wb25lbnQiLCJQcmlzbSIsIm1vbWVudCIsImdldEJsb2dQb3N0QnlVcmxUaXRsZSIsIkhlYWRlciIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiYXBpUmVzdWx0IiwidGl0bGUiLCJwb3N0IiwiY29tcG9uZW50RGlkTW91bnQiLCJoaWdobGlnaHRBbGwiLCJyZW5kZXIiLCJwcm9wcyIsInRhZ3MiLCJtYXAiLCJ0YWciLCJpbmRleCIsInVuaXgiLCJkYXRlVGltZXN0YW1wIiwiZm9ybWF0IiwiX19odG1sIiwibWFya2Rvd25Db250ZW50IiwicHJvY2VzcyIsImVudiIsIkRFVl9BUElfVVJMIiwiUFJPRFVDVElPTl9BUElfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==