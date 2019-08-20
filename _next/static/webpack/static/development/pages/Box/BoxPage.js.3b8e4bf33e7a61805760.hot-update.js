webpackHotUpdate("static/development/pages/Box/BoxPage.js",{

/***/ "./pages/Box/BoxPage.tsx":
/*!*******************************!*\
  !*** ./pages/Box/BoxPage.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/big-design */ "../big-design/dist/big-design.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./components/index.tsx");
/* harmony import */ var _PropTables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PropTables */ "./PropTables/index.ts");
var _jsxFileName = "/Users/daniel.almaguer/dev/bigcommerce/big-design/packages/docs/pages/Box/BoxPage.tsx";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["H0"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Box"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Mostly used as a simple container or as a base to build other components."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CodePreview"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "<Box backgroundColor=\"secondary20\" border=\"box\" borderRadius=\"normal\" padding=\"medium\">\n  Boxed content\n</Box>"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["H1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "API"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Box"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PropTables__WEBPACK_IMPORTED_MODULE_3__["BoxPropTable"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Inherited Props"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Collapsible"], {
    title: "Margin Props",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PropTables__WEBPACK_IMPORTED_MODULE_3__["MarginPropTable"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Collapsible"], {
    title: "Padding Props",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PropTables__WEBPACK_IMPORTED_MODULE_3__["PaddingPropTable"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["H1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Examples"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Box also supports multiple shadows, here is an example of how they look like:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CodePreview"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "<Flex justifyContent=\"space-around\">\n  <Box backgroundColor=\"secondary10\" padding=\"xxLarge\" shadow=\"floating\">\n    Floating\n  </Box>\n  <Box backgroundColor=\"secondary10\" padding=\"xxLarge\" shadow=\"raised\">\n    Raised\n  </Box>\n</Flex>")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    marginTop: "xxLarge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Box is extendable, here is an example on how to create an Avatar component extending from Box with a couple of extra styles:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CodePreview"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "function Avatar() {\n  const StyledBox = styled(Box)`\n    box-sizing: content-box;\n    height: ${({ theme }) => theme.spacing.large};\n    width: ${({ theme }) => theme.spacing.large};\n  `;\n\n  return (\n    <StyledBox backgroundColor=\"secondary20\" border=\"box\" borderRadius=\"circle\" padding=\"medium\">\n      BC\n    </StyledBox>\n  );\n}")));
});

/***/ })

})
//# sourceMappingURL=BoxPage.js.3b8e4bf33e7a61805760.hot-update.js.map