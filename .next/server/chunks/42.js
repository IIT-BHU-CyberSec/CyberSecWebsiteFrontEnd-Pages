"use strict";
exports.id = 42;
exports.ids = [42];
exports.modules = {

/***/ 623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_apiBaseUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(794);


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

/***/ 42:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Postcards)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./api/getFiveNewestPosts.js
var getFiveNewestPosts = __webpack_require__(623);
;// CONCATENATED MODULE: ./components/Postcard.js





const PostCard = ({
  title,
  imgLink,
  content
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "container ht-tm-container mb-5 mt-3",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "col-xl-12",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "card",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              class: "card-img-top",
              src: `${imgLink}`,
              alt: "Ca"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "card-body",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                class: "card-title display-4",
                children: title
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                class: "card-text lead mb-3 text-success text-mono",
                children: content
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#!",
                class: "btn btn-primary btn-shadow text-mono",
                children: "Go somewhere"
              })]
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const Postcard = (PostCard);
;// CONCATENATED MODULE: ./components/Postcards.js





/* harmony default export */ const Postcards = (class extends external_react_.Component {
  static async getInitialProps() {
    const apiResult = await (0,getFiveNewestPosts/* default */.Z)();
    console.log(apiResult);
    return {
      posts: apiResult && apiResult.posts
    };
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: this.props.posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(Postcard, {
        title: post.title,
        imgLink: post.thumbnailImageUrl,
        content: post.urlTitle
      }))
    });
  }

});

/***/ }),

/***/ 794:
/***/ (() => {

let apiBaseUrl;

if (false) {} else {
  apiBaseUrl = "https://www.api.example.com";
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (apiBaseUrl)));

/***/ })

};
;