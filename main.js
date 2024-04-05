/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Slab.ttf */ \"./src/fonts/Roboto-Slab.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ \"./src/fonts/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: 'Roboto Slab';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --font1: 'Roboto Slab', serif;\n  --font2: 'Roboto', sans-serif;\n  --white: #f0f1f3;\n  --mainColor: #542b18;\n  --secondaryColor: #85746c;\n  --highlightColor: #ed6256;\n  font-size: 16px;\n}\n\n::selection {\n  background-color: var(--highlightColor);\n  color: var(--white);\n}\n\n* {\n  box-sizing: border-box;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nhtml, body {\n  background: var(--white);\n  color: var(--mainColor);\n  font-family: var(--font2);\n  height: 100vh;\n  line-height: 1.61;\n}\n\na {\n  color: var(--white);\n}\n\nbutton {\n  cursor: pointer;\n}\n\na, button {\n  font-family: var(--font2);\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 8% 1fr 5%;\n  height: 100vh;\n  text-align: center;\n\n  header {\n    align-items: center;\n    display: grid;\n    justify-content: center;\n\n    nav {\n      align-items: center;\n      display: inline-flex;\n\n      h1 {\n        color: var(--highlightColor);\n        cursor: pointer;\n        display: inline-block;\n        font-family: var(--font1);\n        font-size: clamp(1.3rem, 3.6vw, 1.8rem);\n        line-height: 1;\n        text-transform: lowercase;\n      }\n\n      button {\n        background: none;\n        border: 0;\n        color: var(--secondaryColor);\n        font-family: var(--font1);\n        font-size: clamp(.65rem, 1.8vw, .9rem);\n        font-weight: 600;\n        line-height: 1;\n        padding-top: 4px;\n        text-transform: lowercase;\n  \n        &:hover {\n          color: #52ad9d;\n        }\n      }\n\n      span {\n        color: var(--secondaryColor);\n        font-family: var(--font1);\n        font-weight: 600;\n        line-height: 1;\n        padding: 2px 1rem 0;\n      }\n    }\n  }\n\n  #content {\n    .home, .about, .featured, .menu-item {\n      img {\n        transition: opacity 1s ease;\n\n        &.hidden {\n          opacity: 0;\n        }\n      }\n\n      img:not(.hidden) {\n        opacity: 1;\n      }\n    }\n\n    .home {\n      display: grid;\n      gap: 1rem;\n      grid-template-rows: 80% 20%;\n      height: 100vh;\n\n      .img-wrap {\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        position: relative;\n\n        .tagline {\n          color: var(--white);\n          font-family: var(--font1);\n          font-size: clamp(2rem, 5vw, 3rem);\n          font-weight: 600;\n          letter-spacing: 1px;\n          margin: auto;\n          position: absolute;\n          transition: opacity 1s ease;\n          text-shadow: 1px 1px 10px rgba(0,0,0, 0.5);\n          z-index: 1;\n\n          &.hidden {\n            opacity: 0;\n          }\n        }\n\n        tagline:not(.hidden) {\n          opacity: 1;\n        }\n  \n        img {\n          height: 100%;\n          margin: 0 auto;\n          object-fit: cover;\n          width: 100%;\n        }\n      }\n\n      .content-wrap {\n        padding-top: .7rem;\n\n        button {\n          background: var(--highlightColor);\n          border: 0;\n          color: var(--white);\n          font-family: var(--font1);\n          font-size: 1rem;\n          letter-spacing: 1px;\n          padding: 0 1.2rem 0 1.5rem;\n          text-transform: lowercase;\n          width: 200px;\n          height: 40px;\n          position: relative;\n\n          &:before {\n            content: \"\";\n            position: absolute;\n            right: -20px;\n            bottom: 0;\n            width: 0;\n            height: 0;\n            border-left: 20px solid var(--highlightColor);\n            border-top: 20px solid transparent;\n            border-bottom: 20px solid transparent;\n          }\n\n          &:after {\n            content: \"\";\n            position: absolute;\n            left: 0;\n            bottom: 0;\n            width: 0;\n            height: 0;\n            border-left: 10px solid var(--white);\n            border-top: 20px solid transparent;\n            border-bottom: 20px solid transparent;\n          }\n        }\n      }\n    }\n\n    .menu {\n      .featured {\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        position: relative;\n\n        p {\n          background: #52ad9d;\n          color: var(--white);\n          font-family: var(--font1);\n          font-size: clamp(1.5rem, 3.5vw, 2.5rem);\n          font-weight: 600;\n          letter-spacing: 1px;\n          margin: auto;\n          padding: 0 1rem;\n          position: absolute;\n          transition: opacity 1s ease;\n          z-index: 1;\n\n          &.hidden {\n            opacity: 0;\n          }\n        }\n\n        p:not(.hidden) {\n          opacity: 1;\n        }\n\n        img {\n          border: 1px solid #dbdbdb;\n          margin-bottom: 1.5rem;\n          padding: 2px;\n          width: min(100%, 1000px);\n        }\n      }\n      h2 {\n        color: #52ad9d;\n        font-size: 1.1rem;\n        margin-bottom: 1rem;\n      }\n\n      .menu-items {\n        display: grid;\n        gap: 1rem;\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n        padding-bottom: 3rem;\n\n        .menu-item {\n          background: #fff;\n          border: 1px solid #dddad8;\n          border-radius: 3px;\n          padding: 5px;\n\n          img {\n            border-radius: 3px 3px 0 0;\n            cursor: pointer;\n            width: 100%;\n          }\n\n          h3 {\n            font-size: 1rem;\n          }\n        }\n      }\n    }\n\n    .about, .menu {\n      margin: 0 auto;\n      max-width: 1000px;\n      width: 95%;\n    }\n\n    .about {\n      .img-container {\n        margin-bottom: 1rem;\n      }\n\n      img {\n        border: 1px solid #dbdbdb;\n        padding: 2px;\n        width: min(100%, 1000px);\n      }\n\n      .bottom {\n        align-items: center;\n        display: grid;\n        grid-template-columns: 20% 1fr;\n        gap: 1rem;\n\n        .about-bc {\n          h3 {\n            font-family: var(--font1);\n            font-size: clamp(1.3rem, 3.6vw, 1.8rem);\n          }\n\n          p {\n            color: var(--secondaryColor);\n            font-size: clamp(.5rem, 2.8vw, 1rem);\n            margin-top: 1rem;\n            padding: 0 1.1rem;\n          }\n        }\n      }\n    }\n  }\n}\n\n#footer {\n  p {\n    color: #a3a3a3;\n    font-size: .7rem;\n    text-align: center;\n\n    a {\n      color: #a3a3a3;\n      border-bottom: 1px dashed;\n      text-decoration: none;\n\n      &:hover {\n        color: var(--highlightColor);\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 900px) {\n\n  .about {\n    .bottom {\n      grid-template-columns: 1fr !important;\n  \n      .shop {\n        display: none;\n      }\n    }\n  }\n\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/content-about.js":
/*!******************************!*\
  !*** ./src/content-about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAboutPageContent: () => (/* binding */ createAboutPageContent)\n/* harmony export */ });\n/* harmony import */ var _img_about_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/about.jpg */ \"./src/img/about.jpg\");\n/* harmony import */ var _img_about2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/about2.jpg */ \"./src/img/about2.jpg\");\n\n\n\nfunction createAboutPageContent() {\n  const element = document.createElement('div');\n  element.classList.add('about');\n  const imgContainer = document.createElement('div');\n  imgContainer.classList.add('img-container');\n  element.appendChild(imgContainer);\n\n  // About image\n  const heroImg = new Image();\n  heroImg.src = _img_about_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  heroImg.alt = 'Hero Image';\n  heroImg.width = 'auto';\n  heroImg.classList.add('hidden');\n  imgContainer.appendChild(heroImg);\n\n  // Shop image\n  const shopImg = new Image();\n  shopImg.src = _img_about2_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  shopImg.alt = 'Shop Image';\n  shopImg.width = 'auto';\n  shopImg.classList.add('hidden');\n\n  // Fade in when loaded\n  if (heroImg.complete) {\n    heroImg.classList.remove('hidden');\n    shopImg.classList.remove('hidden');\n  } else {\n    heroImg.addEventListener('load', function() {\n      heroImg.classList.remove('hidden');\n      shopImg.classList.remove('hidden');\n    });\n  }\n\n  const h3 = document.createElement('h3');\n  h3.textContent = `We love what we do.`;\n  \n  const p = document.createElement('p');\n  p.textContent = `At Breadcrumbs, we're dedicated to crafting irresistible treats using only the freshest, finest ingredients sourced from trusted suppliers. Our commitment to quality ensures that every bite is not only delicious but also nourishing for the body and soul. From organic flours and grains to locally sourced fruits and nuts, our carefully curated selection reflects our passion for providing a healthier option for indulging in baked goods. Join us in savoring the goodness of wholesome ingredients and experience the difference that quality makes in every bite.`;\n\n  const imgContainer2 = document.createElement('div');\n  imgContainer2.classList.add('shop');\n  imgContainer2.appendChild(shopImg);\n\n  const txtContainer = document.createElement('div');\n  txtContainer.classList.add('about-bc');\n  txtContainer.appendChild(h3);\n  txtContainer.appendChild(p);\n\n  const bottom = document.createElement('div');\n  bottom.classList.add('bottom');\n  bottom.appendChild(imgContainer2);\n  bottom.appendChild(txtContainer);\n  \n  element.appendChild(bottom);\n\n  return element;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/content-about.js?");

/***/ }),

/***/ "./src/content-home.js":
/*!*****************************!*\
  !*** ./src/content-home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePageContent: () => (/* binding */ createHomePageContent)\n/* harmony export */ });\n/* harmony import */ var _img_hero_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/hero.jpg */ \"./src/img/hero.jpg\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\nfunction createHomePageContent() {\n  const element = document.createElement('div');\n  element.classList.add('home');\n\n  const imgWrap = document.createElement('div');\n  imgWrap.classList.add('img-wrap');\n\n  // Tagline\n  const tagline = document.createElement('p');\n  tagline.classList.add('tagline', 'hidden');\n  tagline.textContent = 'Sweet, not sugary.';\n  imgWrap.appendChild(tagline);\n\n  // Hero image\n  const heroImg = new Image();\n  heroImg.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  heroImg.alt = 'Hero Image';\n  heroImg.width = 'auto';\n  heroImg.classList.add('hidden');\n  imgWrap.appendChild(heroImg);\n\n  // Fade in when loaded\n  if (heroImg.complete) {\n    heroImg.classList.remove('hidden');\n    tagline.classList.remove('hidden');\n  } else {\n    heroImg.addEventListener('load', function() {\n      heroImg.classList.remove('hidden');\n      tagline.classList.remove('hidden');\n    });\n  }\n\n  // View menu button\n  const contentWrap = document.createElement('div');\n  contentWrap.classList.add('content-wrap');\n\n  const viewMenu = document.createElement('button');\n  viewMenu.classList.add('view-menu')\n  viewMenu.textContent = 'See our creations!';\n  viewMenu.addEventListener('click', () => { \n    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.displayMenuPage)();\n  });\n  contentWrap.appendChild(viewMenu);\n\n  element.appendChild(imgWrap);\n  element.appendChild(contentWrap);\n\n  return element;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/content-home.js?");

/***/ }),

/***/ "./src/content-menu.js":
/*!*****************************!*\
  !*** ./src/content-menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuPageContent: () => (/* binding */ createMenuPageContent)\n/* harmony export */ });\n/* harmony import */ var _img_party_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/party.jpg */ \"./src/img/party.jpg\");\n/* harmony import */ var _img_menu_item_0_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/menu-item-0.jpg */ \"./src/img/menu-item-0.jpg\");\n/* harmony import */ var _img_menu_item_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/menu-item-1.jpg */ \"./src/img/menu-item-1.jpg\");\n/* harmony import */ var _img_menu_item_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/menu-item-2.jpg */ \"./src/img/menu-item-2.jpg\");\n/* harmony import */ var _img_menu_item_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/menu-item-3.jpg */ \"./src/img/menu-item-3.jpg\");\n/* harmony import */ var _img_menu_item_4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/menu-item-4.jpg */ \"./src/img/menu-item-4.jpg\");\n/* harmony import */ var _img_menu_item_5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/menu-item-5.jpg */ \"./src/img/menu-item-5.jpg\");\n/* harmony import */ var _img_menu_item_6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/menu-item-6.jpg */ \"./src/img/menu-item-6.jpg\");\n/* harmony import */ var _img_menu_item_7_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/menu-item-7.jpg */ \"./src/img/menu-item-7.jpg\");\n\n\n\n\n\n\n\n\n\n\nconst menuItems = {\n  menuItem0: {\n    title: 'Chocoberry Bonanza',\n    price: '$2.50',\n    image: _img_menu_item_0_jpg__WEBPACK_IMPORTED_MODULE_1__,\n  },\n  menuItem1: {\n    title: 'Berry Bliss Bites',\n    price: '$2.50',\n    image: _img_menu_item_1_jpg__WEBPACK_IMPORTED_MODULE_2__,\n  },\n  menuItem2: {\n    title: 'Strawberry Surprise',\n    price: '$3.50',\n    image: _img_menu_item_2_jpg__WEBPACK_IMPORTED_MODULE_3__,\n  },\n  menuItem3: {\n    title: 'Chocolate Dreams',\n    price: '$3.50',\n    image: _img_menu_item_3_jpg__WEBPACK_IMPORTED_MODULE_4__,\n  },\n  menuItem4: {\n    title: 'Cocoa Berry Blast',\n    price: '$2.50',\n    image: _img_menu_item_4_jpg__WEBPACK_IMPORTED_MODULE_5__,\n  },\n  menuItem5: {\n    title: 'Plain Jane',\n    price: '$1.50',\n    image: _img_menu_item_5_jpg__WEBPACK_IMPORTED_MODULE_6__,\n  },\n  menuItem6: {\n    title: 'Coconut Cocoa',\n    price: '$3.50',\n    image: _img_menu_item_6_jpg__WEBPACK_IMPORTED_MODULE_7__,\n  },\n  menuItem7: {\n    title: 'Frosted Blueberry',\n    price: '$4.25',\n    image: _img_menu_item_7_jpg__WEBPACK_IMPORTED_MODULE_8__,\n  },\n}\n\nfunction createMenuPageContent() {\n  // Featured\n  const featured = document.createElement('div');\n  featured.classList.add('featured');\n\n  // Featured image text\n  const featText = document.createElement('p');\n  featText.classList.add('hidden');\n  featText.textContent = 'We do parties, too.';\n  featured.appendChild(featText);\n\n  // Featured image\n  const featuredImg = new Image();\n  featuredImg.src = _img_party_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  featuredImg.alt = 'Party Image';\n  featuredImg.width = 'auto';\n  featuredImg.classList.add('hidden');\n  featured.appendChild(featuredImg);\n\n  // Intro\n  const h2 = document.createElement('h2');\n  h2.classList.add('favorites');\n  h2.textContent = `Try some of our customer favorites!`;\n\n  // Menu\n  const element = document.createElement('div');\n  element.classList.add('menu-items');\n\n  Object.keys(menuItems).forEach(key => {\n    const divElement = document.createElement('div');\n    divElement.classList.add(`menu-item`);\n\n    const menuItem = menuItems[key];\n    const itemImg = document.createElement('img');\n    itemImg.src = menuItem.image;\n    itemImg.alt = menuItem.title;\n    itemImg.classList.add('hidden');\n    divElement.appendChild(itemImg);\n\n    const title = document.createElement('h3');\n    title.textContent = menuItem.title;\n    const price = document.createElement('p');\n    price.textContent = menuItem.price;\n    divElement.appendChild(title);\n    divElement.appendChild(price);\n    element.appendChild(divElement);\n\n    // Fade in when loaded\n    if (itemImg.complete) {\n      itemImg.classList.remove('hidden');\n      featuredImg.classList.remove('hidden');\n      featText.classList.remove('hidden');\n    } else {\n      itemImg.addEventListener('load', function() {\n        itemImg.classList.remove('hidden');\n        featuredImg.classList.remove('hidden');\n        featText.classList.remove('hidden');\n      });\n    }\n\n  });\n\n  const menu = document.createElement('div');\n  menu.classList.add('menu');\n  menu.appendChild(featured);\n  menu.appendChild(h2);\n  menu.appendChild(element);\n\n  return menu;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/content-menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenuPage: () => (/* binding */ displayMenuPage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _content_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-home.js */ \"./src/content-home.js\");\n/* harmony import */ var _content_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-menu.js */ \"./src/content-menu.js\");\n/* harmony import */ var _content_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-about.js */ \"./src/content-about.js\");\n\n\n\n\n\nconst content = document.getElementById('content');\n\n// Button click event listeners\nconst homeButton = document.querySelector('h1');\nhomeButton.addEventListener('click', () => { \n  displayHomePage();\n});\n\nconst menuButton = document.querySelector('button#menu');\nmenuButton.addEventListener('click', () => { \n  displayMenuPage();\n});\n\nconst aboutButton = document.querySelector('button#about');\naboutButton.addEventListener('click', () => { \n  displayAboutPage();\n});\n\n// Content\nfunction displayHomePage() {\n  const homeContent = (0,_content_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomePageContent)();\n  content.innerHTML = '';\n  content.appendChild(homeContent);\n}\n\nfunction displayMenuPage() {\n  const menuContent = (0,_content_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuPageContent)();\n  content.innerHTML = '';\n  content.appendChild(menuContent);\n}\n\nfunction displayAboutPage() {\n  const aboutContent = (0,_content_about_js__WEBPACK_IMPORTED_MODULE_3__.createAboutPageContent)();\n  content.innerHTML = '';\n  content.appendChild(aboutContent);\n}\n\ndocument.addEventListener('DOMContentLoaded', function() {\n  const containerDiv = document.querySelector('.container');\n  containerDiv.style.display = 'grid';\n\n  displayHomePage();\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fonts/Roboto-Regular.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/Roboto-Slab.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Roboto-Slab.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fonts/Roboto-Slab.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Roboto-Slab.ttf?");

/***/ }),

/***/ "./src/img/about.jpg":
/*!***************************!*\
  !*** ./src/img/about.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/about.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/about.jpg?");

/***/ }),

/***/ "./src/img/about2.jpg":
/*!****************************!*\
  !*** ./src/img/about2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/about2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/about2.jpg?");

/***/ }),

/***/ "./src/img/hero.jpg":
/*!**************************!*\
  !*** ./src/img/hero.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/hero.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/hero.jpg?");

/***/ }),

/***/ "./src/img/menu-item-0.jpg":
/*!*********************************!*\
  !*** ./src/img/menu-item-0.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/menu-item-0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-0.jpg?");

/***/ }),

/***/ "./src/img/menu-item-1.jpg":
/*!*********************************!*\
  !*** ./src/img/menu-item-1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/menu-item-1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-1.jpg?");

/***/ }),

/***/ "./src/img/menu-item-2.jpg":
/*!*********************************!*\
  !*** ./src/img/menu-item-2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/menu-item-2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-2.jpg?");

/***/ }),

/***/ "./src/img/menu-item-3.jpg":
/*!*********************************!*\
  !*** ./src/img/menu-item-3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/menu-item-3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-3.jpg?");

/***/ }),

/***/ "./src/img/menu-item-4.jpg":
/*!*********************************!*\
  !*** ./src/img/menu-item-4.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/menu-item-4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-4.jpg?");

/***/ }),

/***/ "./src/img/menu-item-5.jpg":
/*!*********************************!*\
  !*** ./src/img/menu-item-5.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/menu-item-5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-5.jpg?");

/***/ }),

/***/ "./src/img/menu-item-6.jpg":
/*!*********************************!*\
  !*** ./src/img/menu-item-6.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/menu-item-6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-6.jpg?");

/***/ }),

/***/ "./src/img/menu-item-7.jpg":
/*!*********************************!*\
  !*** ./src/img/menu-item-7.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/menu-item-7.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu-item-7.jpg?");

/***/ }),

/***/ "./src/img/party.jpg":
/*!***************************!*\
  !*** ./src/img/party.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/party.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/party.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;