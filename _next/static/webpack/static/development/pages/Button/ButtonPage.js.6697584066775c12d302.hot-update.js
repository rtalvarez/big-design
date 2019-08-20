webpackHotUpdate("static/development/pages/Button/ButtonPage.js",{

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "../../node_modules/core-js/library/fn/array/from.js":
false,

/***/ "../../node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "../../node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "../../node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "../../node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./components/CodePreview/CodePreview.tsx":
/*!************************************************!*\
  !*** ./components/CodePreview/CodePreview.tsx ***!
  \************************************************/
/*! exports provided: CodePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePreview", function() { return CodePreview; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/big-design */ "../big-design/dist/big-design.es.js");
/* harmony import */ var _bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/big-design-icons */ "../big-design-icons/dist/big-design-icons.es.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clipboard-copy */ "../../node_modules/clipboard-copy/index.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-live */ "../../node_modules/react-live/dist/react-live.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SnippetControls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SnippetControls */ "./components/SnippetControls/index.tsx");
/* harmony import */ var _StoryWrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../StoryWrapper/StoryWrapper */ "./components/StoryWrapper/StoryWrapper.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ "./components/CodePreview/styled.tsx");


var _jsxFileName = "/Users/daniel.almaguer/dev/bigcommerce/big-design/packages/docs/components/CodePreview/CodePreview.tsx";










var defaultScope = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_2__, _bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__, {
  React: react__WEBPACK_IMPORTED_MODULE_5___default.a,
  styled: styled_components__WEBPACK_IMPORTED_MODULE_7__["default"]
});

function getInitialCode(children) {
  if (typeof children !== 'string') {
    throw new Error('<CodePreview> children must be of type string');
  }

  return children;
}

var CodePreview = function CodePreview(props) {
  var children = props.children,
      language = props.language;
  var initialCode = getInitialCode(children);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialCode),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      code = _useState2[0],
      setCode = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_StoryWrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_9__["CodeEditorThemeContext"]),
      editorTheme = _useContext.editorTheme;

  var scope = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultScope, props.scope);

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    border: "box",
    marginBottom: "xxLarge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_live__WEBPACK_IMPORTED_MODULE_6__["LiveProvider"], {
    code: code,
    scope: scope,
    theme: editorTheme,
    language: language,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    padding: "medium",
    backgroundColor: "white",
    borderBottom: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_live__WEBPACK_IMPORTED_MODULE_6__["LivePreview"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SnippetControls__WEBPACK_IMPORTED_MODULE_8__["SnippetControls"], {
    copyToClipboard: function copyToClipboard() {
      return clipboard_copy__WEBPACK_IMPORTED_MODULE_4___default()(code);
    },
    resetCode: function resetCode() {
      return setCode(initialCode);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_live__WEBPACK_IMPORTED_MODULE_6__["LiveEditor"], {
    onChange: setCode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["StyledLiveError"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })));
};
CodePreview.defaultProps = {
  language: 'jsx',
  scope: defaultScope
};

/***/ })

})
//# sourceMappingURL=ButtonPage.js.6697584066775c12d302.hot-update.js.map