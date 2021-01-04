module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_modules_core_components_common_global_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/modules/core/components/common/global.styled */ \"./src/modules/core/components/common/global.styled.ts\");\n/* harmony import */ var src_modules_core_hooks_use_fonts_use_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/modules/core/hooks/use-fonts/use-fonts */ \"./src/modules/core/hooks/use-fonts/use-fonts.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction AppConfig({\n  Component,\n  pageProps\n}) {\n  Object(src_modules_core_hooks_use_fonts_use_fonts__WEBPACK_IMPORTED_MODULE_2__[\"useFonts\"])();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(\"title\", null, \"localhost\")), __jsx(src_modules_core_components_common_global_styled__WEBPACK_IMPORTED_MODULE_1__[\"GlobalStyle\"], null), __jsx(Component, pageProps));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkFwcENvbmZpZyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUZvbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUI7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQW5CLEVBQTZDO0FBQzNDQyw2RkFBUTtBQUVSLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRCxRQUNFLGlDQURGLENBREYsRUFJRSxNQUFDLDRGQUFELE9BSkYsRUFLRSxNQUFDLFNBQUQsRUFBZUQsU0FBZixDQUxGLENBREY7QUFTRDs7QUFFY0Ysd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gJ3NyYy9tb2R1bGVzL2NvcmUvY29tcG9uZW50cy9jb21tb24vZ2xvYmFsLnN0eWxlZCc7XG5pbXBvcnQgeyB1c2VGb250cyB9IGZyb20gJ3NyYy9tb2R1bGVzL2NvcmUvaG9va3MvdXNlLWZvbnRzL3VzZS1mb250cyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5mdW5jdGlvbiBBcHBDb25maWcoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHVzZUZvbnRzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5sb2NhbGhvc3Q8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbmZpZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/modules/core/components/common/global.styled.ts":
/*!*************************************************************!*\
  !*** ./src/modules/core/components/common/global.styled.ts ***!
  \*************************************************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  html,\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  }\n\n  html {\n    font-size: 10px;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  h1 {\n    margin: 0;\n  }\n\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb3JlL2NvbXBvbmVudHMvY29tbW9uL2dsb2JhbC5zdHlsZWQudHM/NzhiZCJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsV0FBVyxHQUFHQyxtRUFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0EvQk8iLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jb3JlL2NvbXBvbmVudHMvY29tbW9uL2dsb2JhbC5zdHlsZWQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcbiAgICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/core/components/common/global.styled.ts\n");

/***/ }),

/***/ "./src/modules/core/hooks/use-fonts/use-fonts.ts":
/*!*******************************************************!*\
  !*** ./src/modules/core/hooks/use-fonts/use-fonts.ts ***!
  \*******************************************************/
/*! exports provided: useFonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFonts\", function() { return useFonts; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // import robotoFontFace from 'public/roboto-font-face.json';\n\n/**\n * Load Roboto fonts\n * https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700&display=block\n */\n\nconst useFonts = () => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {// Promise.all(\n    //   robotoFontFace.map((item) => {\n    //     // @ts-ignore\n    //     const font = new FontFace(item['font-family'], item.src, {\n    //       style: item['font-style'],\n    //       weight: item['font-weight'],\n    //       unicodeRange: item['unicode-range'],\n    //     });\n    //\n    //     return font.load().then(() => font);\n    //   })\n    // ).then((fonts) => {\n    //   fonts.map((font) => {\n    //     // @ts-ignore\n    //     document.fonts.add(font);\n    //   });\n    // });\n  }, []);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb3JlL2hvb2tzL3VzZS1mb250cy91c2UtZm9udHMudHM/ZjViYSJdLCJuYW1lcyI6WyJ1c2VGb250cyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7Q0FDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUM1QkMseURBQVMsQ0FBQyxNQUFNLENBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBbEJRLEVBa0JOLEVBbEJNLENBQVQ7QUFtQkQsQ0FwQk0iLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jb3JlL2hvb2tzL3VzZS1mb250cy91c2UtZm9udHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgcm9ib3RvRm9udEZhY2UgZnJvbSAncHVibGljL3JvYm90by1mb250LWZhY2UuanNvbic7XG5cbi8qKlxuICogTG9hZCBSb2JvdG8gZm9udHNcbiAqIGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDQwMGksNTAwLDcwMCZkaXNwbGF5PWJsb2NrXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VGb250cyA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBQcm9taXNlLmFsbChcbiAgICAvLyAgIHJvYm90b0ZvbnRGYWNlLm1hcCgoaXRlbSkgPT4ge1xuICAgIC8vICAgICAvLyBAdHMtaWdub3JlXG4gICAgLy8gICAgIGNvbnN0IGZvbnQgPSBuZXcgRm9udEZhY2UoaXRlbVsnZm9udC1mYW1pbHknXSwgaXRlbS5zcmMsIHtcbiAgICAvLyAgICAgICBzdHlsZTogaXRlbVsnZm9udC1zdHlsZSddLFxuICAgIC8vICAgICAgIHdlaWdodDogaXRlbVsnZm9udC13ZWlnaHQnXSxcbiAgICAvLyAgICAgICB1bmljb2RlUmFuZ2U6IGl0ZW1bJ3VuaWNvZGUtcmFuZ2UnXSxcbiAgICAvLyAgICAgfSk7XG4gICAgLy9cbiAgICAvLyAgICAgcmV0dXJuIGZvbnQubG9hZCgpLnRoZW4oKCkgPT4gZm9udCk7XG4gICAgLy8gICB9KVxuICAgIC8vICkudGhlbigoZm9udHMpID0+IHtcbiAgICAvLyAgIGZvbnRzLm1hcCgoZm9udCkgPT4ge1xuICAgIC8vICAgICAvLyBAdHMtaWdub3JlXG4gICAgLy8gICAgIGRvY3VtZW50LmZvbnRzLmFkZChmb250KTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pO1xuICB9LCBbXSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/core/hooks/use-fonts/use-fonts.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });