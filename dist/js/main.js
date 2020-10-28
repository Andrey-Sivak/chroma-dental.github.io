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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/Menu.js":
/*!************************!*\
  !*** ./app/js/Menu.js ***!
  \************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n\n\nclass Menu {\n  constructor(options) {\n    this.btn = options.button;\n    this.hamburger = options.hamburger;\n    this.activeClass = options.activeClass;\n    this.menu = options.menu;\n    this.menuWrap = this.menu.parentElement;\n    this.menuItems = this.menu.querySelector('.menu').children;\n    this.menuItems = Array.prototype.slice.call(this.menuItems);\n    this.toggleMenu = this.toggleMenu.bind(this);\n  }\n\n  toggleMenu() {\n    this.hamburger.classList.toggle(this.activeClass);\n    this.menuWrap.classList.toggle(this.activeClass);\n    this.menu.classList.toggle(this.activeClass);\n    this.menuItems.forEach(item => item.classList.toggle(this.activeClass));\n  }\n\n  listener() {\n    this.btn.addEventListener('click', this.toggleMenu);\n  }\n\n  init() {\n    if (!this.btn || !this.hamburger || !this.activeClass) {\n      return;\n    }\n\n    this.listener();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/js/Menu.js?");

/***/ }),

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ \"./app/js/Menu.js\");\n\n\n\nwindow.addEventListener('load', function () {\n  (function homePageSlider() {\n    const slider = document.querySelector('.slider__wrap');\n\n    if (!slider) {\n      return;\n    }\n\n    $(slider).owlCarousel({\n      loop: true,\n      items: 1,\n      mouseDrag: false,\n      touchDrag: false,\n      lazyLoad: true,\n      autoplay: true,\n      autoplayTimeout: 5000,\n      autoplaySpeed: 400,\n      dots: true,\n      autoplayHoverPause: true,\n      dotsContainer: $('.slider__dots')\n    });\n  })();\n\n  (function menu() {\n    const menu = new _Menu__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"]({\n      button: document.querySelector('.header-menu__btn'),\n      hamburger: document.querySelector('.header-menu__burger'),\n      menu: document.querySelector('.header__menu'),\n      activeClass: 'active'\n    });\n    menu.init();\n  })();\n});\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ })

/******/ });