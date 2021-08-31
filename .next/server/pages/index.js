"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/getFiveNewestPosts.js":
/*!***********************************!*\
  !*** ./api/getFiveNewestPosts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_apiBaseUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/apiBaseUrl.js */ "./utils/apiBaseUrl.js");


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__() {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()("http://localhost:5000/posts/get-five-newest-posts");
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

var _jsxFileName = "/home/esharkythegreat/WebDev/CyberSecWeb-Components/frontend/CyberSecWebsiteFrontEnd-Pages/components/Header.js";


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
        href: "/",
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
              href: "/blog",
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
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              href: "/contact",
              children: "Contact Us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
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
            lineNumber: 31,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
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

/***/ "./components/Jumbotron.js":
/*!*********************************!*\
  !*** ./components/Jumbotron.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/home/esharkythegreat/WebDev/CyberSecWeb-Components/frontend/CyberSecWebsiteFrontEnd-Pages/components/Jumbotron.js";


const Jumbotron = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "ht-tm-jumbotron",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jumbotron bg-transparent mb-0 radius-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ht-tm-header",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "row",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-xl-6",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                  className: "display-2",
                  children: ["IIT(BHU)CyberSe", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "vim-caret",
                    children: "c"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                    columnNumber: 78
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "lead mb-3 text-mono text-success",
                  children: "A Bootstrap theme for 1337 hackers."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "mt-5 text-grey text-spacey",
                  children: "Neon Glow is a free and open source Bootstrap theme. It was built on top of the Bootstrap 4. Only the leetest of hackers will be able to wield its power. Scroll down to explore the components and dive into the source."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "text-mono",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "/bootstrap-themes/demo/files/hackerthemes-neon-glow.zip",
                    className: "btn btn-primary btn-shadow px-3 my-2 ml-0 text-left js-ht-download-link",
                    "data-type": "theme",
                    "data-id": "95",
                    children: "Download"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 41
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Jumbotron);

/***/ }),

/***/ "./components/Postcard.js":
/*!********************************!*\
  !*** ./components/Postcard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/home/esharkythegreat/WebDev/CyberSecWeb-Components/frontend/CyberSecWebsiteFrontEnd-Pages/components/Postcard.js";


const PostCard = ({
  title,
  imgLink,
  content
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container ht-tm-container mb-5 mt-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "col-xl-12",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              class: "card-img-top",
              src: `${imgLink}`,
              alt: "Ca"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                class: "card-title display-4",
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                class: "card-text lead mb-3 text-success text-mono",
                children: content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#!",
                class: "btn btn-primary btn-shadow text-mono",
                children: "Go somewhere"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCard);

/***/ }),

/***/ "./components/Postcards.js":
/*!*********************************!*\
  !*** ./components/Postcards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_getFiveNewestPosts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/getFiveNewestPosts.js */ "./api/getFiveNewestPosts.js");
/* harmony import */ var _Postcard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Postcard */ "./components/Postcard.js");


var _jsxFileName = "/home/esharkythegreat/WebDev/CyberSecWeb-Components/frontend/CyberSecWebsiteFrontEnd-Pages/components/Postcards.js";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    const apiResult = await (0,_api_getFiveNewestPosts_js__WEBPACK_IMPORTED_MODULE_2__.default)();
    console.log(apiResult);
    return {
      posts: apiResult && apiResult.posts
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: this.props.posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Postcard__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: post.title,
        imgLink: post.thumbnailImageUrl,
        content: post.urlTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }, this))
    }, void 0, false);
  }

});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Jumbotron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Jumbotron */ "./components/Jumbotron.js");
/* harmony import */ var _components_Postcards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Postcards */ "./components/Postcards.js");
/* harmony import */ var _api_getFiveNewestPosts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/getFiveNewestPosts.js */ "./api/getFiveNewestPosts.js");

var _jsxFileName = "/home/esharkythegreat/WebDev/CyberSecWeb-Components/frontend/CyberSecWebsiteFrontEnd-Pages/pages/index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    const apiResult = await (0,_api_getFiveNewestPosts_js__WEBPACK_IMPORTED_MODULE_5__.default)();
    return {
      posts: apiResult && apiResult.posts
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "layout-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ht-main",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Jumbotron__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Postcards__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, this.props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQUEsVUFBVSxHQUFHNEIsdUJBQWI7QUFDSCxDQUZELE1BRU8sRUFFTjs7QUFFRCxpRUFBZTVCLFVBQWY7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vYXBpL2dldEZpdmVOZXdlc3RQb3N0cy5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL2NvbXBvbmVudHMvSnVtYm90cm9uLmpzIiwid2VicGFjazovL3dlYnNpdGUvLi9jb21wb25lbnRzL1Bvc3RjYXJkLmpzIiwid2VicGFjazovL3dlYnNpdGUvLi9jb21wb25lbnRzL1Bvc3RjYXJkcy5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL3V0aWxzL2FwaUJhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5pbXBvcnQgYXBpQmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYXBpQmFzZVVybC5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Bvc3RzL2dldC1maXZlLW5ld2VzdC1wb3N0c1wiKVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IGdldERhdGFFcnJvcjogdHJ1ZSB9XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyVG9nZ2xlckRlbW8wM1wiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJUb2dnbGVyRGVtbzAzXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5JSVQoQkhVKUN5YmVyU2VjPC9hPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclRvZ2dsZXJEZW1vMDNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0byBtdC0yIG10LW1kLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvXCI+SG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9Jy9hYm91dCc+QWJvdXQgVXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2Jsb2dcIj5CbG9nczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3QgVXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZSBteS0yIG15LWxnLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXItc20tMlwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgSnVtYm90cm9uID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiaHQtdG0tanVtYm90cm9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24gYmctdHJhbnNwYXJlbnQgbWItMCByYWRpdXMtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJodC10bS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0yXCI+SUlUKEJIVSlDeWJlclNlPHNwYW4gY2xhc3NOYW1lPVwidmltLWNhcmV0XCI+Yzwvc3Bhbj48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkIG1iLTMgdGV4dC1tb25vIHRleHQtc3VjY2Vzc1wiPkEgQm9vdHN0cmFwIHRoZW1lIGZvciAxMzM3IGhhY2tlcnMuPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgdGV4dC1ncmV5IHRleHQtc3BhY2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvbiBHbG93IGlzIGEgZnJlZSBhbmQgb3BlbiBzb3VyY2UgQm9vdHN0cmFwIHRoZW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IHdhcyBidWlsdCBvbiB0b3Agb2YgdGhlIEJvb3RzdHJhcCA0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9ubHkgdGhlIGxlZXRlc3Qgb2YgaGFja2VycyB3aWxsIGJlIGFibGUgdG8gd2llbGQgaXRzIHBvd2VyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjcm9sbCBkb3duIHRvIGV4cGxvcmUgdGhlIGNvbXBvbmVudHMgYW5kIGRpdmUgaW50byB0aGUgc291cmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYm9vdHN0cmFwLXRoZW1lcy9kZW1vL2ZpbGVzL2hhY2tlcnRoZW1lcy1uZW9uLWdsb3cuemlwXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zaGFkb3cgcHgtMyBteS0yIG1sLTAgdGV4dC1sZWZ0IGpzLWh0LWRvd25sb2FkLWxpbmtcIiBkYXRhLXR5cGU9XCJ0aGVtZVwiIGRhdGEtaWQ9XCI5NVwiPkRvd25sb2FkPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEp1bWJvdHJvbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgUG9zdENhcmQgPSAoeyB0aXRsZSwgaW1nTGluaywgY29udGVudCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgaHQtdG0tY29udGFpbmVyIG1iLTUgbXQtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIHNyYz17YCR7aW1nTGlua31gfSBhbHQ9XCJDYVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlIGRpc3BsYXktNFwiPnt0aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCBsZWFkIG1iLTMgdGV4dC1zdWNjZXNzIHRleHQtbW9ub1wiPntjb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNoYWRvdyB0ZXh0LW1vbm9cIj5HbyBzb21ld2hlcmU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZFxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IGdldEZpdmVOZXdlc3RQb3N0cyBmcm9tIFwiLi4vYXBpL2dldEZpdmVOZXdlc3RQb3N0cy5qc1wiXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4vUG9zdGNhcmRcIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgIGNvbnN0IGFwaVJlc3VsdCA9IGF3YWl0IGdldEZpdmVOZXdlc3RQb3N0cygpXG4gICAgICAgIGNvbnNvbGUubG9nKGFwaVJlc3VsdClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc3RzOiBhcGlSZXN1bHQgJiYgYXBpUmVzdWx0LnBvc3RzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0Q2FyZCB0aXRsZT17cG9zdC50aXRsZX0gaW1nTGluaz17cG9zdC50aHVtYm5haWxJbWFnZVVybH0gY29udGVudD17cG9zdC51cmxUaXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qcydcbmltcG9ydCBKdW1ib3Ryb24gZnJvbSAnLi4vY29tcG9uZW50cy9KdW1ib3Ryb24nXG5pbXBvcnQgUG9zdENhcmRzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdGNhcmRzJ1xuaW1wb3J0IGdldEZpdmVOZXdlc3RQb3N0cyBmcm9tIFwiLi4vYXBpL2dldEZpdmVOZXdlc3RQb3N0cy5qc1wiXG5pbXBvcnQgUG9zdGNhcmRzIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RjYXJkc1wiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgY29uc3QgYXBpUmVzdWx0ID0gYXdhaXQgZ2V0Rml2ZU5ld2VzdFBvc3RzKClcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zdHM6IGFwaVJlc3VsdCAmJiBhcGlSZXN1bHQucG9zdHNcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHQtbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICA8SnVtYm90cm9uIC8+XG4gICAgICAgICAgICAgICAgICAgIDxQb3N0Y2FyZHMgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iLCJsZXQgYXBpQmFzZVVybFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGFwaUJhc2VVcmwgPSBwcm9jZXNzLmVudi5ERVZfQVBJX1VSTFxufSBlbHNlIHtcbiAgICBhcGlCYXNlVXJsID0gcHJvY2Vzcy5lbnYuUFJPRFVDVElPTl9BUElfVVJMXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaUJhc2VVcmwiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImF4aW9zIiwiYXBpQmFzZVVybCIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiZ2V0RGF0YUVycm9yIiwiUmVhY3QiLCJOYXZiYXIiLCJKdW1ib3Ryb24iLCJQb3N0Q2FyZCIsInRpdGxlIiwiaW1nTGluayIsImNvbnRlbnQiLCJDb21wb25lbnQiLCJnZXRGaXZlTmV3ZXN0UG9zdHMiLCJnZXRJbml0aWFsUHJvcHMiLCJhcGlSZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicG9zdHMiLCJyZW5kZXIiLCJwcm9wcyIsIm1hcCIsInBvc3QiLCJ0aHVtYm5haWxJbWFnZVVybCIsInVybFRpdGxlIiwiSGVhZGVyIiwiUG9zdENhcmRzIiwiUG9zdGNhcmRzIiwicHJvY2VzcyIsImVudiIsIkRFVl9BUElfVVJMIiwiUFJPRFVDVElPTl9BUElfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==