"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _title_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "prismjs"
const external_prismjs_namespaceObject = require("prismjs");
var external_prismjs_default = /*#__PURE__*/__webpack_require__.n(external_prismjs_namespaceObject);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
;// CONCATENATED MODULE: external "prismjs/plugins/line-numbers/prism-line-numbers.js"
const prism_line_numbers_js_namespaceObject = require("prismjs/plugins/line-numbers/prism-line-numbers.js");
;// CONCATENATED MODULE: external "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js"
const prism_normalize_whitespace_js_namespaceObject = require("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js");
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/apiBaseUrl.js
var apiBaseUrl = __webpack_require__(794);
;// CONCATENATED MODULE: ./api/getBlogPostByUrlTitle.js


/* harmony default export */ async function getBlogPostByUrlTitle(urlTitle) {
  try {
    const response = await external_axios_default()(`http://localhost:5000/posts/get-blog-post-by-url-title?urlTitle=${urlTitle}`);
    return response.data;
  } catch (error) {
    return {
      getDataError: true
    };
  }
}
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(266);
;// CONCATENATED MODULE: ./pages/blog/[title].js









/* harmony default export */ const _title_ = (class extends external_react_.Component {
  static async getInitialProps({
    query
  }) {
    const apiResult = await getBlogPostByUrlTitle(query.title);
    return {
      post: apiResult && apiResult.post
    };
  }

  componentDidMount() {
    external_prismjs_default().highlightAll();
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "layout-wrapper",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "blog-post-container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "blog-post-top-section",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: "Your Blog Post Title"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "blog-post-top-meta",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "5/1/2020"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "blog-post-top-tag-btn",
              href: "/blog/tags/javascript",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "javascript"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "blog-post-top-tag-btn",
              href: "/blog/tags/css",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "css"
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "blog-post-body-content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Blog post content will go here!"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "h2 Section Heading"
          }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "h3 Section Heading"
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "h4 Section Heading"
          }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
            children: "h5 Section Heading"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["A short paragraph with a link to ", /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.google.com",
              children: "Google"
            }), "."]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. And add as much additional content here as you want. An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. Also an example of a ", /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.google.com",
              children: "link could go here"
            }), "."]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. And add as much additional content here as you want. An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. Also an example of a ", /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.google.com",
              children: "link could go here"
            }), "."]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Ordered List:"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ol", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: "A sentence goes here."
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: ["A short code snippet: ", /*#__PURE__*/jsx_runtime_.jsx("code", {
                children: "code snippet"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: ["A link inside a unordered list bullet ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.google.com",
                children: "Google"
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Unordered List:"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: "A sentence goes here."
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: ["A short code snippet: ", /*#__PURE__*/jsx_runtime_.jsx("code", {
                children: "code snippet"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: ["A link inside a unordered list bullet ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.google.com",
                children: "Google"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "blog-post-body-code-snippet",
            children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
              className: "blog-post-body-code-snippet-header",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "example.html"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("pre", {
              className: "line-numbers language-html",
              children: /*#__PURE__*/jsx_runtime_.jsx("code", {
                className: "html language-html",
                children: `
                                <div>
                                    <p>Html code example</p>
                                </div>
                                `
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "blog-post-body-code-snippet",
            children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
              className: "blog-post-body-code-snippet-header",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "example.js"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("pre", {
              className: "line-numbers language-js",
              children: /*#__PURE__*/jsx_runtime_.jsx("code", {
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
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "https://assets.coderrocketfuel.com/css-article-image.png"
          }), /*#__PURE__*/jsx_runtime_.jsx("blockquote", {
            children: "Warning or special message that you want to stand out should be placed in this blockquote element."
          }), this.props.post.tags.map((tag, index) => {
            return /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "blog-post-top-tag-btn",
              href: `/blog/tags/${tag}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: tag
              })
            }, index);
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: external_moment_default().unix(this.props.post.dateTimestamp).format("MMMM Do, YYYY")
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            dangerouslySetInnerHTML: {
              __html: this.props.post.markdownContent
            },
            className: "blog-post-body-content"
          })]
        })]
      })]
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [266], () => (__webpack_exec__(443)));
module.exports = __webpack_exports__;

})();