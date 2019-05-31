/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apiService.js":
/*!***********************!*\
  !*** ./apiService.js ***!
  \***********************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchData\", function() { return fetchData; });\nconst fetchData = () => fetch('https://cityscapes-masters.herokuapp.com/cityElements')\n        .then(resp => resp.json())\n        .then(response => response);\n\n\n\n//# sourceURL=webpack:///./apiService.js?");

/***/ }),

/***/ "./dataParse.js":
/*!**********************!*\
  !*** ./dataParse.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_Park__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Park */ \"./model/Park.js\");\n/* harmony import */ var _model_Ulica__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/Ulica */ \"./model/Ulica.js\");\n\n\n\nconst parseParks = (data = []) => {\n    const parks = [];\n    data.forEach(element => {\n        parks.push(new _model_Park__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element.name, element.year, element.area, element.treesCount));\n    });\n    return parks;\n};\n\nconst parseStreets = (data = []) => {\n    const streets = [];\n    data.forEach(element => {\n        streets.push(new _model_Ulica__WEBPACK_IMPORTED_MODULE_1__[\"default\"](element.name, element.year, element.streetLength, element.size))\n    });\n    return streets;\n};\n\nconst parseData = (data = {}) => {\n    const parsedData = {};\n\n    if (data.parkovi) {\n        parsedData.parkovi = parseParks(data.parkovi);\n    }\n    if (data.ulice) {\n        parsedData.ulice = parseStreets(data.ulice);\n    }\n\n    return parsedData;\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseData);\n\n//# sourceURL=webpack:///./dataParse.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiService */ \"./apiService.js\");\n/* harmony import */ var _dataParse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataParse */ \"./dataParse.js\");\n\n\n\nObject(_apiService__WEBPACK_IMPORTED_MODULE_0__[\"fetchData\"])()\n  .then(data => {\n    const podaci = Object(_dataParse__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n    console.log(podaci);\n\n    // prebaciti metode za ispis izvještaja u dataInfo modul i iz ove metode proslijeđivati podatke\n  });\n\n\n/*\nconsole.log(\"====PARKOVI====\");\nfor (let i = 0; i < parkovi.length; i++) {\n  parkovi[i].info();\n  parkovi[i].getDrveca();\n  parkovi[i].getPovrsina();\n}\nconsole.log(\"====ULICE====\");\nlet ukDuz = 0,\n  prosjecnaDuz;\nfor (let i = 0; i < ulice.length; i++) {\n  ulice[i].info();\n  ulice[i].osamdesete();\n  ukDuz += ulice[i].duzina;\n}\nlet avg = 0,\n  len = parkovi.length;\nfor (let i = 0; i < len; i++) {\n  avg += parkovi[i].godina;\n}\nconsole.log(\"Prosjecna starost svih parkova -> \" + (2019 - Math.floor(avg / len)) + \"godina\");\nconsole.log(\"Ukupna duzina ulica: \" + ukDuz.toFixed(2) + \"m. A prosjecna: \" + (ukDuz / ulice.length) + \"m\"); */\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./model/GradskiElement.js":
/*!*********************************!*\
  !*** ./model/GradskiElement.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GradskiElement {\n  constructor(naziv, godina) {\n    this.naziv = naziv;\n    this.godina = godina;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GradskiElement);\n\n//# sourceURL=webpack:///./model/GradskiElement.js?");

/***/ }),

/***/ "./model/Park.js":
/*!***********************!*\
  !*** ./model/Park.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GradskiElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradskiElement */ \"./model/GradskiElement.js\");\n\n\nclass Park extends _GradskiElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor(naziv, godina, povrsina, drvece) {\n    super(naziv, godina);\n    this.povrsina = povrsina;\n    this.drvece = drvece;\n    this.gustoca = this.drvece / this.povrsina;\n\n  }\n  info() {\n    console.log(this.naziv, this.godina, this.povrsina, this.drvece, this.gustoca);\n  }\n  getDrveca() {\n    console.log(this.naziv + \": \" + this.drvece + \"drveca\");\n  }\n  getPovrsina() {\n    console.log(this.naziv + \": \" + this.povrsina + \"km2\");\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Park);\n\n//# sourceURL=webpack:///./model/Park.js?");

/***/ }),

/***/ "./model/Ulica.js":
/*!************************!*\
  !*** ./model/Ulica.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GradskiElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradskiElement */ \"./model/GradskiElement.js\");\n\n\nclass Ulica extends _GradskiElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor(naziv, godina, duzina, klasifikacija = 3) {\n    super(naziv, godina);\n    this.duzina = duzina;\n    this.klasifikacija = klasifikacija;\n  }\n  info() {\n    console.log(this.naziv, this.godina, this.duzina, this.klasifikacija);\n  }\n  osamdesete() {\n\n    if (this.godina > 1979 && this.godina < 1990) {\n      console.log(\"OSAMDESETE:\");\n      this.info();\n      console.log(\"***\");\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ulica);\n\n//# sourceURL=webpack:///./model/Ulica.js?");

/***/ })

/******/ });