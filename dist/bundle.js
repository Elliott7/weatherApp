/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.ttf */ "./src/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Roboto-Regular';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('tff');\n    font-weight: 400;\n    font-style: normal;\n}\n\n*{\n    margin:0;\n    padding:0;\n    font-family: \"Roboto-Regular\", \"Roboto Light\",sans-serif;\n}\n/********** Header ***********/\nheader{\n    padding: 10px;\n    height: 80px;\n    background-color: #343a40;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n#logo{\n    /*width: 100px;*/\n    height: 80px;\n}\n\n/********** Hero ***********/\n.hero {\n    min-height: 400px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    color: #212529;\n}\n.keyTemp{\n    min-height: 200px;\n    width: 25%;\n    min-width: 200px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    margin: 20px;\n}\n.rangeOfTemps{\n    display: flex;\n    width: 60%;\n    overflow-x: scroll;\n    border-top: rgba(205, 205, 205, 0.5) 1px solid;\n}\n.cont span{\n    display: inline-block;\n    padding: 10px;\n}\n.temp{\n    font-size: 5em;\n    padding: 30px 20px;\n}\n.location{\n    font-size: 1.5em;\n    padding: 10px;\n}\n.weather{\n    font-size: 1.2em;\n}\n\n\n\n\n\n#forecastContainer{\n    display: flex;\n}\n.forecast-card{\n    margin: 20px;\n    padding: 20px;\n    text-align: center;\n    height: 200px;\n    width: 150px;\n    border-radius: 20px;\n    /*background-color: rgba(236, 236, 229, 0.1);*/\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n    transition: 0.2s;\n}\n.forecast-card:first-of-type{\n    background-color: #d3d3d3;\n    font-weight: 800;\n}\n.forecast-card:hover{\n    transform: scale(0.95);\n    background-color: rgba(236, 236, 229, 0.5);\n}\n.day-card{\n    padding: 10px;\n    font-size: 0.8em;\n}\n.description{\n    font-size: 0.70em;\n    font-style: italic;\n    text-transform: capitalize;\n}\n\n\n/********** Stats - Mid Section ***********/\n.stats{\n    background-color: #343a40;\n    min-height: 250px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.stats-content{\n    display: flex;\n    min-height: 100px;\n    width: 90%;\n    height: 90%;\n    padding: 10px;\n    justify-content: space-evenly;\n    align-items: center;\n}\n.block-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 150px;\n    height:100px;\n}\n.block-heading,\n.block-content{\n    padding: 5px;\n    text-align: center;\n    color: white;\n}\n.block-heading{\n    color: #6c757d;\n    font-size: 0.9em;\n}\n/********** Bottom Section ***********/\n\n\n/********** Footer ***********/\nbutton{\n    width: 200px;\n    height: 30px;\n    background-color: #ec6e4c;\n}\n\n/********** Media ***********/\n@media (max-width: 600px) {\n    header,\n    .stats-content,\n    .hero{\n        flex-direction: column;\n    }\n    .stats{\n        flex-direction: row;\n    }\n    .rangeOfTemps{\n        width: 90%;\n    }\n    .temp{\n        padding: 10px;\n    }\n\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,0DAA8C;IAC9C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,wDAAwD;AAC5D;AACA,8BAA8B;AAC9B;IACI,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA,4BAA4B;AAC5B;IACI,iBAAiB;IACjB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,iBAAiB;IACjB,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,aAAa;IACb,UAAU;IACV,kBAAkB;IAClB,8CAA8C;AAClD;AACA;IACI,qBAAqB;IACrB,aAAa;AACjB;AACA;IACI,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,gBAAgB;AACpB;;;;;;AAMA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,8CAA8C;IAC9C,yCAAyC;IACzC,gBAAgB;AACpB;AACA;IACI,yBAAyB;IACzB,gBAAgB;AACpB;AACA;IACI,sBAAsB;IACtB,0CAA0C;AAC9C;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,0BAA0B;AAC9B;;;AAGA,2CAA2C;AAC3C;IACI,yBAAyB;IACzB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,UAAU;IACV,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;AACA;;IAEI,YAAY;IACZ,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,cAAc;IACd,gBAAgB;AACpB;AACA,sCAAsC;;;AAGtC,8BAA8B;AAC9B;IACI,YAAY;IACZ,YAAY;IACZ,yBAAyB;AAC7B;;AAEA,6BAA6B;AAC7B;IACI;;;QAGI,sBAAsB;IAC1B;IACA;QACI,mBAAmB;IACvB;IACA;QACI,UAAU;IACd;IACA;QACI,aAAa;IACjB;;;AAGJ","sourcesContent":["@font-face {\n    font-family: 'Roboto-Regular';\n    src: url(\"./Roboto-Regular.ttf\") format('tff');\n    font-weight: 400;\n    font-style: normal;\n}\n\n*{\n    margin:0;\n    padding:0;\n    font-family: \"Roboto-Regular\", \"Roboto Light\",sans-serif;\n}\n/********** Header ***********/\nheader{\n    padding: 10px;\n    height: 80px;\n    background-color: #343a40;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n#logo{\n    /*width: 100px;*/\n    height: 80px;\n}\n\n/********** Hero ***********/\n.hero {\n    min-height: 400px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    color: #212529;\n}\n.keyTemp{\n    min-height: 200px;\n    width: 25%;\n    min-width: 200px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    margin: 20px;\n}\n.rangeOfTemps{\n    display: flex;\n    width: 60%;\n    overflow-x: scroll;\n    border-top: rgba(205, 205, 205, 0.5) 1px solid;\n}\n.cont span{\n    display: inline-block;\n    padding: 10px;\n}\n.temp{\n    font-size: 5em;\n    padding: 30px 20px;\n}\n.location{\n    font-size: 1.5em;\n    padding: 10px;\n}\n.weather{\n    font-size: 1.2em;\n}\n\n\n\n\n\n#forecastContainer{\n    display: flex;\n}\n.forecast-card{\n    margin: 20px;\n    padding: 20px;\n    text-align: center;\n    height: 200px;\n    width: 150px;\n    border-radius: 20px;\n    /*background-color: rgba(236, 236, 229, 0.1);*/\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n    transition: 0.2s;\n}\n.forecast-card:first-of-type{\n    background-color: #d3d3d3;\n    font-weight: 800;\n}\n.forecast-card:hover{\n    transform: scale(0.95);\n    background-color: rgba(236, 236, 229, 0.5);\n}\n.day-card{\n    padding: 10px;\n    font-size: 0.8em;\n}\n.description{\n    font-size: 0.70em;\n    font-style: italic;\n    text-transform: capitalize;\n}\n\n\n/********** Stats - Mid Section ***********/\n.stats{\n    background-color: #343a40;\n    min-height: 250px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.stats-content{\n    display: flex;\n    min-height: 100px;\n    width: 90%;\n    height: 90%;\n    padding: 10px;\n    justify-content: space-evenly;\n    align-items: center;\n}\n.block-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 150px;\n    height:100px;\n}\n.block-heading,\n.block-content{\n    padding: 5px;\n    text-align: center;\n    color: white;\n}\n.block-heading{\n    color: #6c757d;\n    font-size: 0.9em;\n}\n/********** Bottom Section ***********/\n\n\n/********** Footer ***********/\nbutton{\n    width: 200px;\n    height: 30px;\n    background-color: #ec6e4c;\n}\n\n/********** Media ***********/\n@media (max-width: 600px) {\n    header,\n    .stats-content,\n    .hero{\n        flex-direction: column;\n    }\n    .stats{\n        flex-direction: row;\n    }\n    .rangeOfTemps{\n        width: 90%;\n    }\n    .temp{\n        padding: 10px;\n    }\n\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/HeroCard.js":
/*!*************************!*\
  !*** ./src/HeroCard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCard)
/* harmony export */ });
function createCard(location, currentWeather, temp, high, low){
    const mainDiv = document.createElement('div')
    mainDiv.classList.add('cont')
    mainDiv.setAttribute('id', 'heroCard')

    const heading = document.createElement('p')
    heading.innerText = location
    heading.classList.add('location')
    mainDiv.appendChild(heading)

    const weather = document.createElement('p')
    weather.innerText = currentWeather
    weather.classList.add('weather')
    mainDiv.appendChild(weather)

    const temperature = document.createElement('p')
    temperature.innerText = temp
    temperature.classList.add('temp')
    mainDiv.appendChild(temperature)

    const highTemp = document.createElement('span')
    highTemp.innerText = high
    highTemp.classList.add('high')
    mainDiv.appendChild(highTemp)

    const lowTemp = document.createElement('span')
    lowTemp.innerText = low
    lowTemp.classList.add('low')
    mainDiv.appendChild(lowTemp)

    return mainDiv
}

/***/ }),

/***/ "./src/forecastCard.js":
/*!*****************************!*\
  !*** ./src/forecastCard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ forecastCard)
/* harmony export */ });
function forecastCard(arr){
    const containerCard = document.createElement('div')
    containerCard.classList.add('forecast-card')

    const date = document.createElement('p')
    date.classList.add('date-card')
    date.innerText = arr[0]
    containerCard.appendChild(date)

    const day = document.createElement('p')
    day.classList.add('day-card')
    day.innerText = arr[1]
    containerCard.appendChild(day)

    const desc = document.createElement('p')
    desc.classList.add('description')
    desc.innerText = arr[2]
    containerCard.appendChild(desc)

    const picture = document.createElement('img')
    picture.classList.add('picture')
    picture.src = arr[3]
    containerCard.appendChild(picture)

    const temp = document.createElement('p')
    temp.classList.add('high')
    temp.innerText = `${arr[4].toFixed(0)}°`
    containerCard.appendChild(temp)

    return containerCard
}

/***/ }),

/***/ "./src/statsBlock.js":
/*!***************************!*\
  !*** ./src/statsBlock.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBlock)
/* harmony export */ });
function createBlock(heading, value){
    const container = document.createElement('div')
    container.classList.add('block-container')

    const head = document.createElement('p')
    head.innerText = heading.toUpperCase()
    head.classList.add('block-heading')
    container.appendChild(head)

    const content = document.createElement('p')
    content.innerText = value
    content.classList.add('block-content')
    container.appendChild(content)

    return container
}

// export default createBlock

/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d6ac03c7b96b7acb62.ttf";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _statsBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statsBlock */ "./src/statsBlock.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _HeroCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroCard */ "./src/HeroCard.js");
/* harmony import */ var _forecastCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecastCard */ "./src/forecastCard.js");




// import icon from "./logo1.png"
// import icon2 from './logo2.png'
/*
What's needed?
1. Overall look and layout - HTML and CSS
2. Functions that request and index data from the api
    - Takes in search term but has a default value
3. Functions that listen for user input with search locations

*/


let testdata = ["London", "rainy", '', '15'];



    // Initializes the search box
(() => {
    const userInput = document.getElementById('searchBox')
    const searchButton = document.getElementById('searchButton')
    searchButton.addEventListener('click', ()=> {
        let searchTerm = userInput.value
        main(searchTerm)
        console.log(searchTerm)
        userInput.value = ''
    })
})();


function getAPILink(searchfor='London', units = 'metric', latitude=undefined, longitude=undefined){
    const weatherAPIKey = "cfd1ee8bdfb2fc9de48554d62e4fc0c1"
    let latLonApiEndpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${searchfor}&units=${units}&appid=${weatherAPIKey}`
    let fullDataApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely&appid=${weatherAPIKey}`
    if (latitude === undefined){
        return latLonApiEndpoint
    } else {
        return fullDataApi
    }
}

async function main(searchTerm){
    try {
        const initialLink = await getAPIData(getAPILink(searchTerm))
        const {lat, lon} = initialLink.city.coord
        const {name} = initialLink.city
        const updatedLink = getAPILink('','', lat, lon)
        const tableOfData = await getAPIData(updatedLink)

        // Update hero
        updateHeroCard(tableOfData.daily, name).run()
        updateForecastSection(tableOfData.daily)

        // Update stats section with current data
        const tableOfDataCurrent = tableOfData.current
        const extractCurrentData = extractCurrentStats(tableOfDataCurrent)
        updateBlocks(extractCurrentData)


    //    What to do next
    //    Take the updated link and pass it through to the new API call, then from there you will have the data
    //    that you can use for the existing stats session, and also the data to update the other areas.

    } catch (error){
        console.log(error.message)
    //    Please try another city TODO: Add functionality that shows this
    }

}
main("Brisbane")


function getAPIData(url){
    return fetch(url, {mode:"cors"})
        .then(response => response.json())
        .catch(error => {throw Error (error)})
}

function extractAPIInfo(data){
    const {dt_txt} = data
    const {temp, feels_like, humidity} = data.main
    const {main, description, id} = data.weather[0]
    return {
        DateTime: dt_txt,
        temp,
        feels_like,
        humidity, // in %
        weather:main,
        weatherDesc:description,
        weatherID: id // use this later for a hover over effect that expalins the likelihood of outcome
    }
}


function addLogo(){
    const logoDiv = document.getElementById('logo')
    const myLogo = new Image()
    myLogo.src = icon
    logoDiv.appendChild(myLogo)
}
addLogo()


/**************** ******************/
/*********** Hero section **********/
/**************** ******************/

// Hero Main Card
function updateHeroCard(data, city){
    const keyTemp = document.getElementById("keyTemp")

    const extractHeroData = () => {
        const today = data[0]
        const weather = today.weather[0].main
        let {day, max, min} = today.temp
        day = `${day.toFixed(0)}°`
        max = `H:${max.toFixed(0)}°`
        min = `L:${min.toFixed(0)}°`
        return [city, weather, day, max, min]
    }

    const deleteChild = () => {
        const childToRemove = document.getElementById('heroCard')
        keyTemp.removeChild(childToRemove)
    }

    const createNewCard = () => {
        const create = extractHeroData()
        const newCard = (0,_HeroCard__WEBPACK_IMPORTED_MODULE_2__["default"])(create[0], create[1], create[2], create[3], create[4])
        keyTemp.appendChild(newCard)
    }

    const run =()  => {
        deleteChild()
        createNewCard()
    }
    return {run}
}

// Daily updates of weather

function updateForecastSection(data){
    const parent = document.getElementById('rangeOfTemps')
    const refreshContainer = () => {
        const child = document.getElementById('forecastContainer')
        parent.removeChild(child)
        const container = document.createElement('div')
        container.setAttribute('id', 'forecastContainer')
        return container
    }
    const addSuffix = (num) => {
        const options = ["th", 'rd', 'st', 'nd']
        const st = [1, 21, 31]
        const nd = [2, 22]
        const rd = [3, 23]
        if (st.includes(num)){
            return `${num}st`
        } else if (nd.includes(num)){
            return `${num}nd`
        } else if (rd.includes(num)){
            return `${num}rd`
        } else {
            return `${num}th`
        }
    }

    const cleanData = () => {
        let cleanedData = []
        for (let i = 0; i < 8; i++) {
            let roundOfData = []
            const days = ["Sun","Mon", "Tue", "Wed", "Thu","Fri", "Sat"]
            const {dt} = data[i]
            const date = new Date(dt * 1000)
            const dayNum = date.getDay()
            const dayOfMonth = addSuffix(date.getDate())
            const {icon, description} = data[i].weather[0]
            const {day} = data[i].temp
            const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
            roundOfData.push(dayOfMonth, days[dayNum], description, imgUrl, day)
            cleanedData.push(roundOfData)
        }
        return cleanedData
    }

    const createCards = () => {
        const cont = refreshContainer()
        const cleanedData = cleanData()
        for (let pack of cleanedData){
            console.log(pack)
            cont.appendChild((0,_forecastCard__WEBPACK_IMPORTED_MODULE_3__["default"])(pack))
        }
        parent.appendChild(cont)
    }
    createCards()
}



/**************** ******************/
/********** Stats section **********/
/**************** ******************/

// Creates the html blocks within the stats section
(() => {
    const statsTop = document.getElementById('stats-top')
    const statsBot = document.getElementById('stats-bot')
    for (let i=0; i<10; i++){
        let newBlock = (0,_statsBlock__WEBPACK_IMPORTED_MODULE_0__["default"])('heading', 'value')
        if (i<5){
            statsTop.appendChild(newBlock)
        } else {
            statsBot.appendChild(newBlock)
        }
    }
})();


function convertTime(unixTime){
    const date = new Date(unixTime* 1000)
    const hours = date.getHours()
    const minutes = "0" + date.getMinutes()
    const seconds = "0" + date.getSeconds()
    return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
}

function extractCurrentStats(data){
    const {sunrise, sunset, temp, feels_like, pressure, humidity, uvi, clouds, visibility, wind_speed} = data
    return({
        "sunrise": convertTime(sunrise),
        "sunset": convertTime(sunset),
        "Temperature": `${temp.toFixed(0)}°`,
        "Feels Like": `${feels_like.toFixed(0)}°`,
        "Humidity": `${humidity} %`,
        "Pressure": `${pressure} hPa`,
        "UV Index": uvi,
        "Cloudiness": `${clouds} %`,
        "Visibility":`${visibility/1000} Kms`,
        "Wind Speed": `${(wind_speed*1.943844).toFixed(2)} Knots`
    })
}

// Iterates through the data and updates the headings and values elements
function updateBlocks(data){
    const headings = document.getElementsByClassName("block-heading")
    const values = document.getElementsByClassName("block-content")
    const keys = Object.keys(data)
    const vals = Object.values(data)
    for (let i = 0; i < headings.length; i++){
        headings[i].innerText = keys[i].toUpperCase()
        values[i].innerText = vals[i]
    }
}


//Testing functions - delete later
function changeTextTest() {
    const element = document.createElement('div')
    element.innerText = 'BALLS'
    document.body.appendChild(element)
}
function createButton(){
    const but = document.createElement('button')
    but.innerText = "press"
    but.addEventListener("click", () => changeTextTest())

    return but
}
document.body.appendChild(createButton())
// document.body.appendChild(createBlock("test", "324"))


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBc0IsSUFBSTtBQUMxQixVQUFVO0FBQ1Ysc0JBQXNCLElBQUk7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBLG1CQUFtQixJQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEMsbUJBQW1CLEtBQUs7QUFDeEIsZ0VBQWdFLEtBQUs7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlEQUFZO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4Qix1QkFBdUIsdURBQVc7QUFDbEM7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxNQUFNLEdBQUcsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQ2hFOztBQUVBO0FBQ0EsV0FBVyw0RkFBNEY7QUFDdkc7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQjtBQUMxQyx5QkFBeUIsc0JBQXNCO0FBQy9DLHVCQUF1QixVQUFVO0FBQ2pDLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0EseUJBQXlCLFFBQVE7QUFDakMsd0JBQXdCLGlCQUFpQjtBQUN6Qyx5QkFBeUIsa0NBQWtDO0FBQzNELEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJBcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC8uL3NyYy9IZXJvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL2ZvcmVjYXN0Q2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL3N0YXRzQmxvY2suanMiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlckFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyQXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1SZWd1bGFyJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndGZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8tUmVndWxhclxcXCIsIFxcXCJSb2JvdG8gTGlnaHRcXFwiLHNhbnMtc2VyaWY7XFxufVxcbi8qKioqKioqKioqIEhlYWRlciAqKioqKioqKioqKi9cXG5oZWFkZXJ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb2dve1xcbiAgICAvKndpZHRoOiAxMDBweDsqL1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi8qKioqKioqKioqIEhlcm8gKioqKioqKioqKiovXFxuLmhlcm8ge1xcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMjEyNTI5O1xcbn1cXG4ua2V5VGVtcHtcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuLnJhbmdlT2ZUZW1wc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICBib3JkZXItdG9wOiByZ2JhKDIwNSwgMjA1LCAyMDUsIDAuNSkgMXB4IHNvbGlkO1xcbn1cXG4uY29udCBzcGFue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi50ZW1we1xcbiAgICBmb250LXNpemU6IDVlbTtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcbn1cXG4ubG9jYXRpb257XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi53ZWF0aGVye1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4jZm9yZWNhc3RDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5mb3JlY2FzdC1jYXJke1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyMzYsIDIyOSwgMC4xKTsqL1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuLmZvcmVjYXN0LWNhcmQ6Zmlyc3Qtb2YtdHlwZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLmZvcmVjYXN0LWNhcmQ6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyMzYsIDIyOSwgMC41KTtcXG59XFxuLmRheS1jYXJke1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG4uZGVzY3JpcHRpb257XFxuICAgIGZvbnQtc2l6ZTogMC43MGVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKiBTdGF0cyAtIE1pZCBTZWN0aW9uICoqKioqKioqKioqL1xcbi5zdGF0c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc3RhdHMtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJsb2NrLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OjEwMHB4O1xcbn1cXG4uYmxvY2staGVhZGluZyxcXG4uYmxvY2stY29udGVudHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmJsb2NrLWhlYWRpbmd7XFxuICAgIGNvbG9yOiAjNmM3NTdkO1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG4vKioqKioqKioqKiBCb3R0b20gU2VjdGlvbiAqKioqKioqKioqKi9cXG5cXG5cXG4vKioqKioqKioqKiBGb290ZXIgKioqKioqKioqKiovXFxuYnV0dG9ue1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjNmU0YztcXG59XFxuXFxuLyoqKioqKioqKiogTWVkaWEgKioqKioqKioqKiovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGhlYWRlcixcXG4gICAgLnN0YXRzLWNvbnRlbnQsXFxuICAgIC5oZXJve1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICAuc3RhdHN7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuICAgIC5yYW5nZU9mVGVtcHN7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuICAgIC50ZW1we1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcblxcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLDBEQUE4QztJQUM5QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCx3REFBd0Q7QUFDNUQ7QUFDQSw4QkFBOEI7QUFDOUI7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7Ozs7O0FBTUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMseUNBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7OztBQUdBLDJDQUEyQztBQUMzQztJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0Esc0NBQXNDOzs7QUFHdEMsOEJBQThCO0FBQzlCO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUEsNkJBQTZCO0FBQzdCO0lBQ0k7OztRQUdJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7SUFDakI7OztBQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1SZWd1bGFyJztcXG4gICAgc3JjOiB1cmwoXFxcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KCd0ZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qe1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90by1SZWd1bGFyXFxcIiwgXFxcIlJvYm90byBMaWdodFxcXCIsc2Fucy1zZXJpZjtcXG59XFxuLyoqKioqKioqKiogSGVhZGVyICoqKioqKioqKioqL1xcbmhlYWRlcntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ297XFxuICAgIC8qd2lkdGg6IDEwMHB4OyovXFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLyoqKioqKioqKiogSGVybyAqKioqKioqKioqKi9cXG4uaGVybyB7XFxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICMyMTI1Mjk7XFxufVxcbi5rZXlUZW1we1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG4ucmFuZ2VPZlRlbXBze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgIGJvcmRlci10b3A6IHJnYmEoMjA1LCAyMDUsIDIwNSwgMC41KSAxcHggc29saWQ7XFxufVxcbi5jb250IHNwYW57XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLnRlbXB7XFxuICAgIGZvbnQtc2l6ZTogNWVtO1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxufVxcbi5sb2NhdGlvbntcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLndlYXRoZXJ7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcblxcblxcblxcblxcbiNmb3JlY2FzdENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmZvcmVjYXN0LWNhcmR7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDIzNiwgMjI5LCAwLjEpOyovXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG4uZm9yZWNhc3QtY2FyZDpmaXJzdC1vZi10eXBle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG4uZm9yZWNhc3QtY2FyZDpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDIzNiwgMjI5LCAwLjUpO1xcbn1cXG4uZGF5LWNhcmR7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcbi5kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zaXplOiAwLjcwZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcblxcbi8qKioqKioqKioqIFN0YXRzIC0gTWlkIFNlY3Rpb24gKioqKioqKioqKiovXFxuLnN0YXRze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdGF0cy1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYmxvY2stY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6MTAwcHg7XFxufVxcbi5ibG9jay1oZWFkaW5nLFxcbi5ibG9jay1jb250ZW50e1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYmxvY2staGVhZGluZ3tcXG4gICAgY29sb3I6ICM2Yzc1N2Q7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcbi8qKioqKioqKioqIEJvdHRvbSBTZWN0aW9uICoqKioqKioqKioqL1xcblxcblxcbi8qKioqKioqKioqIEZvb3RlciAqKioqKioqKioqKi9cXG5idXR0b257XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM2ZTRjO1xcbn1cXG5cXG4vKioqKioqKioqKiBNZWRpYSAqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgaGVhZGVyLFxcbiAgICAuc3RhdHMtY29udGVudCxcXG4gICAgLmhlcm97XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5zdGF0c3tcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG4gICAgLnJhbmdlT2ZUZW1wc3tcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG4gICAgLnRlbXB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhcmQobG9jYXRpb24sIGN1cnJlbnRXZWF0aGVyLCB0ZW1wLCBoaWdoLCBsb3cpe1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgnY29udCcpXG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlcm9DYXJkJylcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBoZWFkaW5nLmlubmVyVGV4dCA9IGxvY2F0aW9uXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKVxuXG4gICAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHdlYXRoZXIuaW5uZXJUZXh0ID0gY3VycmVudFdlYXRoZXJcbiAgICB3ZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXInKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQod2VhdGhlcilcblxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gdGVtcFxuICAgIHRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmUpXG5cbiAgICBjb25zdCBoaWdoVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGhpZ2hUZW1wLmlubmVyVGV4dCA9IGhpZ2hcbiAgICBoaWdoVGVtcC5jbGFzc0xpc3QuYWRkKCdoaWdoJylcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGhpZ2hUZW1wKVxuXG4gICAgY29uc3QgbG93VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxvd1RlbXAuaW5uZXJUZXh0ID0gbG93XG4gICAgbG93VGVtcC5jbGFzc0xpc3QuYWRkKCdsb3cnKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobG93VGVtcClcblxuICAgIHJldHVybiBtYWluRGl2XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9yZWNhc3RDYXJkKGFycil7XG4gICAgY29uc3QgY29udGFpbmVyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyQ2FyZC5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1jYXJkJylcblxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUtY2FyZCcpXG4gICAgZGF0ZS5pbm5lclRleHQgPSBhcnJbMF1cbiAgICBjb250YWluZXJDYXJkLmFwcGVuZENoaWxkKGRhdGUpXG5cbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkYXkuY2xhc3NMaXN0LmFkZCgnZGF5LWNhcmQnKVxuICAgIGRheS5pbm5lclRleHQgPSBhcnJbMV1cbiAgICBjb250YWluZXJDYXJkLmFwcGVuZENoaWxkKGRheSlcblxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJylcbiAgICBkZXNjLmlubmVyVGV4dCA9IGFyclsyXVxuICAgIGNvbnRhaW5lckNhcmQuYXBwZW5kQ2hpbGQoZGVzYylcblxuICAgIGNvbnN0IHBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHBpY3R1cmUuY2xhc3NMaXN0LmFkZCgncGljdHVyZScpXG4gICAgcGljdHVyZS5zcmMgPSBhcnJbM11cbiAgICBjb250YWluZXJDYXJkLmFwcGVuZENoaWxkKHBpY3R1cmUpXG5cbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGVtcC5jbGFzc0xpc3QuYWRkKCdoaWdoJylcbiAgICB0ZW1wLmlubmVyVGV4dCA9IGAke2Fycls0XS50b0ZpeGVkKDApfcKwYFxuICAgIGNvbnRhaW5lckNhcmQuYXBwZW5kQ2hpbGQodGVtcClcblxuICAgIHJldHVybiBjb250YWluZXJDYXJkXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQmxvY2soaGVhZGluZywgdmFsdWUpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrLWNvbnRhaW5lcicpXG5cbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaGVhZC5pbm5lclRleHQgPSBoZWFkaW5nLnRvVXBwZXJDYXNlKClcbiAgICBoZWFkLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrLWhlYWRpbmcnKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkKVxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnRlbnQuaW5uZXJUZXh0ID0gdmFsdWVcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrLWNvbnRlbnQnKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBjcmVhdGVCbG9jayIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IGNyZWF0ZUJsb2NrIGZyb20gXCIuL3N0YXRzQmxvY2tcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgY3JlYXRlQ2FyZCBmcm9tIFwiLi9IZXJvQ2FyZFwiXG5pbXBvcnQgZm9yZWNhc3RDYXJkIGZyb20gJy4vZm9yZWNhc3RDYXJkJ1xuLy8gaW1wb3J0IGljb24gZnJvbSBcIi4vbG9nbzEucG5nXCJcbi8vIGltcG9ydCBpY29uMiBmcm9tICcuL2xvZ28yLnBuZydcbi8qXG5XaGF0J3MgbmVlZGVkP1xuMS4gT3ZlcmFsbCBsb29rIGFuZCBsYXlvdXQgLSBIVE1MIGFuZCBDU1NcbjIuIEZ1bmN0aW9ucyB0aGF0IHJlcXVlc3QgYW5kIGluZGV4IGRhdGEgZnJvbSB0aGUgYXBpXG4gICAgLSBUYWtlcyBpbiBzZWFyY2ggdGVybSBidXQgaGFzIGEgZGVmYXVsdCB2YWx1ZVxuMy4gRnVuY3Rpb25zIHRoYXQgbGlzdGVuIGZvciB1c2VyIGlucHV0IHdpdGggc2VhcmNoIGxvY2F0aW9uc1xuXG4qL1xuXG5cbmxldCB0ZXN0ZGF0YSA9IFtcIkxvbmRvblwiLCBcInJhaW55XCIsICcnLCAnMTUnXTtcblxuXG5cbiAgICAvLyBJbml0aWFsaXplcyB0aGUgc2VhcmNoIGJveFxuKCgpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQm94JylcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQnV0dG9uJylcbiAgICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgbGV0IHNlYXJjaFRlcm0gPSB1c2VySW5wdXQudmFsdWVcbiAgICAgICAgbWFpbihzZWFyY2hUZXJtKVxuICAgICAgICBjb25zb2xlLmxvZyhzZWFyY2hUZXJtKVxuICAgICAgICB1c2VySW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG59KSgpO1xuXG5cbmZ1bmN0aW9uIGdldEFQSUxpbmsoc2VhcmNoZm9yPSdMb25kb24nLCB1bml0cyA9ICdtZXRyaWMnLCBsYXRpdHVkZT11bmRlZmluZWQsIGxvbmdpdHVkZT11bmRlZmluZWQpe1xuICAgIGNvbnN0IHdlYXRoZXJBUElLZXkgPSBcImNmZDFlZThiZGZiMmZjOWRlNDg1NTRkNjJlNGZjMGMxXCJcbiAgICBsZXQgbGF0TG9uQXBpRW5kcG9pbnQgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtzZWFyY2hmb3J9JnVuaXRzPSR7dW5pdHN9JmFwcGlkPSR7d2VhdGhlckFQSUtleX1gXG4gICAgbGV0IGZ1bGxEYXRhQXBpID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JnVuaXRzPW1ldHJpYyZleGNsdWRlPW1pbnV0ZWx5JmFwcGlkPSR7d2VhdGhlckFQSUtleX1gXG4gICAgaWYgKGxhdGl0dWRlID09PSB1bmRlZmluZWQpe1xuICAgICAgICByZXR1cm4gbGF0TG9uQXBpRW5kcG9pbnRcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVsbERhdGFBcGlcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oc2VhcmNoVGVybSl7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaW5pdGlhbExpbmsgPSBhd2FpdCBnZXRBUElEYXRhKGdldEFQSUxpbmsoc2VhcmNoVGVybSkpXG4gICAgICAgIGNvbnN0IHtsYXQsIGxvbn0gPSBpbml0aWFsTGluay5jaXR5LmNvb3JkXG4gICAgICAgIGNvbnN0IHtuYW1lfSA9IGluaXRpYWxMaW5rLmNpdHlcbiAgICAgICAgY29uc3QgdXBkYXRlZExpbmsgPSBnZXRBUElMaW5rKCcnLCcnLCBsYXQsIGxvbilcbiAgICAgICAgY29uc3QgdGFibGVPZkRhdGEgPSBhd2FpdCBnZXRBUElEYXRhKHVwZGF0ZWRMaW5rKVxuXG4gICAgICAgIC8vIFVwZGF0ZSBoZXJvXG4gICAgICAgIHVwZGF0ZUhlcm9DYXJkKHRhYmxlT2ZEYXRhLmRhaWx5LCBuYW1lKS5ydW4oKVxuICAgICAgICB1cGRhdGVGb3JlY2FzdFNlY3Rpb24odGFibGVPZkRhdGEuZGFpbHkpXG5cbiAgICAgICAgLy8gVXBkYXRlIHN0YXRzIHNlY3Rpb24gd2l0aCBjdXJyZW50IGRhdGFcbiAgICAgICAgY29uc3QgdGFibGVPZkRhdGFDdXJyZW50ID0gdGFibGVPZkRhdGEuY3VycmVudFxuICAgICAgICBjb25zdCBleHRyYWN0Q3VycmVudERhdGEgPSBleHRyYWN0Q3VycmVudFN0YXRzKHRhYmxlT2ZEYXRhQ3VycmVudClcbiAgICAgICAgdXBkYXRlQmxvY2tzKGV4dHJhY3RDdXJyZW50RGF0YSlcblxuXG4gICAgLy8gICAgV2hhdCB0byBkbyBuZXh0XG4gICAgLy8gICAgVGFrZSB0aGUgdXBkYXRlZCBsaW5rIGFuZCBwYXNzIGl0IHRocm91Z2ggdG8gdGhlIG5ldyBBUEkgY2FsbCwgdGhlbiBmcm9tIHRoZXJlIHlvdSB3aWxsIGhhdmUgdGhlIGRhdGFcbiAgICAvLyAgICB0aGF0IHlvdSBjYW4gdXNlIGZvciB0aGUgZXhpc3Rpbmcgc3RhdHMgc2Vzc2lvbiwgYW5kIGFsc28gdGhlIGRhdGEgdG8gdXBkYXRlIHRoZSBvdGhlciBhcmVhcy5cblxuICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbiAgICAvLyAgICBQbGVhc2UgdHJ5IGFub3RoZXIgY2l0eSBUT0RPOiBBZGQgZnVuY3Rpb25hbGl0eSB0aGF0IHNob3dzIHRoaXNcbiAgICB9XG5cbn1cbm1haW4oXCJCcmlzYmFuZVwiKVxuXG5cbmZ1bmN0aW9uIGdldEFQSURhdGEodXJsKXtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7bW9kZTpcImNvcnNcIn0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHt0aHJvdyBFcnJvciAoZXJyb3IpfSlcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEFQSUluZm8oZGF0YSl7XG4gICAgY29uc3Qge2R0X3R4dH0gPSBkYXRhXG4gICAgY29uc3Qge3RlbXAsIGZlZWxzX2xpa2UsIGh1bWlkaXR5fSA9IGRhdGEubWFpblxuICAgIGNvbnN0IHttYWluLCBkZXNjcmlwdGlvbiwgaWR9ID0gZGF0YS53ZWF0aGVyWzBdXG4gICAgcmV0dXJuIHtcbiAgICAgICAgRGF0ZVRpbWU6IGR0X3R4dCxcbiAgICAgICAgdGVtcCxcbiAgICAgICAgZmVlbHNfbGlrZSxcbiAgICAgICAgaHVtaWRpdHksIC8vIGluICVcbiAgICAgICAgd2VhdGhlcjptYWluLFxuICAgICAgICB3ZWF0aGVyRGVzYzpkZXNjcmlwdGlvbixcbiAgICAgICAgd2VhdGhlcklEOiBpZCAvLyB1c2UgdGhpcyBsYXRlciBmb3IgYSBob3ZlciBvdmVyIGVmZmVjdCB0aGF0IGV4cGFsaW5zIHRoZSBsaWtlbGlob29kIG9mIG91dGNvbWVcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gYWRkTG9nbygpe1xuICAgIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpXG4gICAgY29uc3QgbXlMb2dvID0gbmV3IEltYWdlKClcbiAgICBteUxvZ28uc3JjID0gaWNvblxuICAgIGxvZ29EaXYuYXBwZW5kQ2hpbGQobXlMb2dvKVxufVxuYWRkTG9nbygpXG5cblxuLyoqKioqKioqKioqKioqKiogKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqIEhlcm8gc2VjdGlvbiAqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKiogKioqKioqKioqKioqKioqKioqL1xuXG4vLyBIZXJvIE1haW4gQ2FyZFxuZnVuY3Rpb24gdXBkYXRlSGVyb0NhcmQoZGF0YSwgY2l0eSl7XG4gICAgY29uc3Qga2V5VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia2V5VGVtcFwiKVxuXG4gICAgY29uc3QgZXh0cmFjdEhlcm9EYXRhID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RheSA9IGRhdGFbMF1cbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IHRvZGF5LndlYXRoZXJbMF0ubWFpblxuICAgICAgICBsZXQge2RheSwgbWF4LCBtaW59ID0gdG9kYXkudGVtcFxuICAgICAgICBkYXkgPSBgJHtkYXkudG9GaXhlZCgwKX3CsGBcbiAgICAgICAgbWF4ID0gYEg6JHttYXgudG9GaXhlZCgwKX3CsGBcbiAgICAgICAgbWluID0gYEw6JHttaW4udG9GaXhlZCgwKX3CsGBcbiAgICAgICAgcmV0dXJuIFtjaXR5LCB3ZWF0aGVyLCBkYXksIG1heCwgbWluXVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUNoaWxkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZFRvUmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlcm9DYXJkJylcbiAgICAgICAga2V5VGVtcC5yZW1vdmVDaGlsZChjaGlsZFRvUmVtb3ZlKVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU5ld0NhcmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9IGV4dHJhY3RIZXJvRGF0YSgpXG4gICAgICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKGNyZWF0ZVswXSwgY3JlYXRlWzFdLCBjcmVhdGVbMl0sIGNyZWF0ZVszXSwgY3JlYXRlWzRdKVxuICAgICAgICBrZXlUZW1wLmFwcGVuZENoaWxkKG5ld0NhcmQpXG4gICAgfVxuXG4gICAgY29uc3QgcnVuID0oKSAgPT4ge1xuICAgICAgICBkZWxldGVDaGlsZCgpXG4gICAgICAgIGNyZWF0ZU5ld0NhcmQoKVxuICAgIH1cbiAgICByZXR1cm4ge3J1bn1cbn1cblxuLy8gRGFpbHkgdXBkYXRlcyBvZiB3ZWF0aGVyXG5cbmZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0U2VjdGlvbihkYXRhKXtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZ2VPZlRlbXBzJylcbiAgICBjb25zdCByZWZyZXNoQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JlY2FzdENvbnRhaW5lcicpXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZClcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9yZWNhc3RDb250YWluZXInKVxuICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgfVxuICAgIGNvbnN0IGFkZFN1ZmZpeCA9IChudW0pID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtcInRoXCIsICdyZCcsICdzdCcsICduZCddXG4gICAgICAgIGNvbnN0IHN0ID0gWzEsIDIxLCAzMV1cbiAgICAgICAgY29uc3QgbmQgPSBbMiwgMjJdXG4gICAgICAgIGNvbnN0IHJkID0gWzMsIDIzXVxuICAgICAgICBpZiAoc3QuaW5jbHVkZXMobnVtKSl7XG4gICAgICAgICAgICByZXR1cm4gYCR7bnVtfXN0YFxuICAgICAgICB9IGVsc2UgaWYgKG5kLmluY2x1ZGVzKG51bSkpe1xuICAgICAgICAgICAgcmV0dXJuIGAke251bX1uZGBcbiAgICAgICAgfSBlbHNlIGlmIChyZC5pbmNsdWRlcyhudW0pKXtcbiAgICAgICAgICAgIHJldHVybiBgJHtudW19cmRgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7bnVtfXRoYFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5EYXRhID0gKCkgPT4ge1xuICAgICAgICBsZXQgY2xlYW5lZERhdGEgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdW5kT2ZEYXRhID0gW11cbiAgICAgICAgICAgIGNvbnN0IGRheXMgPSBbXCJTdW5cIixcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLFwiRnJpXCIsIFwiU2F0XCJdXG4gICAgICAgICAgICBjb25zdCB7ZHR9ID0gZGF0YVtpXVxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGR0ICogMTAwMClcbiAgICAgICAgICAgIGNvbnN0IGRheU51bSA9IGRhdGUuZ2V0RGF5KClcbiAgICAgICAgICAgIGNvbnN0IGRheU9mTW9udGggPSBhZGRTdWZmaXgoZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICBjb25zdCB7aWNvbiwgZGVzY3JpcHRpb259ID0gZGF0YVtpXS53ZWF0aGVyWzBdXG4gICAgICAgICAgICBjb25zdCB7ZGF5fSA9IGRhdGFbaV0udGVtcFxuICAgICAgICAgICAgY29uc3QgaW1nVXJsID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2BcbiAgICAgICAgICAgIHJvdW5kT2ZEYXRhLnB1c2goZGF5T2ZNb250aCwgZGF5c1tkYXlOdW1dLCBkZXNjcmlwdGlvbiwgaW1nVXJsLCBkYXkpXG4gICAgICAgICAgICBjbGVhbmVkRGF0YS5wdXNoKHJvdW5kT2ZEYXRhKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGVhbmVkRGF0YVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNhcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ID0gcmVmcmVzaENvbnRhaW5lcigpXG4gICAgICAgIGNvbnN0IGNsZWFuZWREYXRhID0gY2xlYW5EYXRhKClcbiAgICAgICAgZm9yIChsZXQgcGFjayBvZiBjbGVhbmVkRGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYWNrKVxuICAgICAgICAgICAgY29udC5hcHBlbmRDaGlsZChmb3JlY2FzdENhcmQocGFjaykpXG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbnQpXG4gICAgfVxuICAgIGNyZWF0ZUNhcmRzKClcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqICoqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIFN0YXRzIHNlY3Rpb24gKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqICoqKioqKioqKioqKioqKioqKi9cblxuLy8gQ3JlYXRlcyB0aGUgaHRtbCBibG9ja3Mgd2l0aGluIHRoZSBzdGF0cyBzZWN0aW9uXG4oKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRzVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRzLXRvcCcpXG4gICAgY29uc3Qgc3RhdHNCb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHMtYm90JylcbiAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgIGxldCBuZXdCbG9jayA9IGNyZWF0ZUJsb2NrKCdoZWFkaW5nJywgJ3ZhbHVlJylcbiAgICAgICAgaWYgKGk8NSl7XG4gICAgICAgICAgICBzdGF0c1RvcC5hcHBlbmRDaGlsZChuZXdCbG9jaylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRzQm90LmFwcGVuZENoaWxkKG5ld0Jsb2NrKVxuICAgICAgICB9XG4gICAgfVxufSkoKTtcblxuXG5mdW5jdGlvbiBjb252ZXJ0VGltZSh1bml4VGltZSl7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHVuaXhUaW1lKiAxMDAwKVxuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpXG4gICAgY29uc3QgbWludXRlcyA9IFwiMFwiICsgZGF0ZS5nZXRNaW51dGVzKClcbiAgICBjb25zdCBzZWNvbmRzID0gXCIwXCIgKyBkYXRlLmdldFNlY29uZHMoKVxuICAgIHJldHVybiBgJHtob3Vyc306JHttaW51dGVzLnN1YnN0cigtMil9OiR7c2Vjb25kcy5zdWJzdHIoLTIpfWBcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEN1cnJlbnRTdGF0cyhkYXRhKXtcbiAgICBjb25zdCB7c3VucmlzZSwgc3Vuc2V0LCB0ZW1wLCBmZWVsc19saWtlLCBwcmVzc3VyZSwgaHVtaWRpdHksIHV2aSwgY2xvdWRzLCB2aXNpYmlsaXR5LCB3aW5kX3NwZWVkfSA9IGRhdGFcbiAgICByZXR1cm4oe1xuICAgICAgICBcInN1bnJpc2VcIjogY29udmVydFRpbWUoc3VucmlzZSksXG4gICAgICAgIFwic3Vuc2V0XCI6IGNvbnZlcnRUaW1lKHN1bnNldCksXG4gICAgICAgIFwiVGVtcGVyYXR1cmVcIjogYCR7dGVtcC50b0ZpeGVkKDApfcKwYCxcbiAgICAgICAgXCJGZWVscyBMaWtlXCI6IGAke2ZlZWxzX2xpa2UudG9GaXhlZCgwKX3CsGAsXG4gICAgICAgIFwiSHVtaWRpdHlcIjogYCR7aHVtaWRpdHl9ICVgLFxuICAgICAgICBcIlByZXNzdXJlXCI6IGAke3ByZXNzdXJlfSBoUGFgLFxuICAgICAgICBcIlVWIEluZGV4XCI6IHV2aSxcbiAgICAgICAgXCJDbG91ZGluZXNzXCI6IGAke2Nsb3Vkc30gJWAsXG4gICAgICAgIFwiVmlzaWJpbGl0eVwiOmAke3Zpc2liaWxpdHkvMTAwMH0gS21zYCxcbiAgICAgICAgXCJXaW5kIFNwZWVkXCI6IGAkeyh3aW5kX3NwZWVkKjEuOTQzODQ0KS50b0ZpeGVkKDIpfSBLbm90c2BcbiAgICB9KVxufVxuXG4vLyBJdGVyYXRlcyB0aHJvdWdoIHRoZSBkYXRhIGFuZCB1cGRhdGVzIHRoZSBoZWFkaW5ncyBhbmQgdmFsdWVzIGVsZW1lbnRzXG5mdW5jdGlvbiB1cGRhdGVCbG9ja3MoZGF0YSl7XG4gICAgY29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvY2staGVhZGluZ1wiKVxuICAgIGNvbnN0IHZhbHVlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9jay1jb250ZW50XCIpXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgY29uc3QgdmFscyA9IE9iamVjdC52YWx1ZXMoZGF0YSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWRpbmdzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaGVhZGluZ3NbaV0uaW5uZXJUZXh0ID0ga2V5c1tpXS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIHZhbHVlc1tpXS5pbm5lclRleHQgPSB2YWxzW2ldXG4gICAgfVxufVxuXG5cbi8vVGVzdGluZyBmdW5jdGlvbnMgLSBkZWxldGUgbGF0ZXJcbmZ1bmN0aW9uIGNoYW5nZVRleHRUZXN0KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gJ0JBTExTJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudClcbn1cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbigpe1xuICAgIGNvbnN0IGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0LmlubmVyVGV4dCA9IFwicHJlc3NcIlxuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2hhbmdlVGV4dFRlc3QoKSlcblxuICAgIHJldHVybiBidXRcbn1cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKCkpXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUJsb2NrKFwidGVzdFwiLCBcIjMyNFwiKSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9