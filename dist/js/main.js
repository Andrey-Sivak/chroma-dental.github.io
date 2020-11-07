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

/***/ "./app/js/calculator.js":
/*!******************************!*\
  !*** ./app/js/calculator.js ***!
  \******************************/
/*! exports provided: Calculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Calculator\", function() { return Calculator; });\nfunction Calculator(calculatorID) {\n  const calculator = document.getElementById(calculatorID);\n\n  if (!calculator) {\n    return;\n  }\n\n  let data = {\n    age: null,\n    problem: null\n  };\n  const calculatorItems = [...document.querySelectorAll('.calculator__main_item')];\n  const calculatorItemsLists = [...document.querySelectorAll('.calculator__list')];\n  const btn = document.querySelector('.calculator__btn');\n  addWideClass(calculatorItems);\n  addActiveClass(calculatorItemsLists);\n  sendData(btn, calculatorItemsLists);\n\n  function addActiveClass(arr) {\n    arr.forEach(function (item) {\n      const elems = [...item.children];\n      elems.forEach(function (el) {\n        el.addEventListener('click', function (e) {\n          e.preventDefault();\n          let target = this;\n          this.classList.toggle('active');\n          elems.forEach(function (elem) {\n            if (elem !== target && elem.classList.contains('active')) {\n              elem.classList.remove('active');\n            }\n          });\n        });\n      });\n    });\n  }\n\n  function addWideClass(items) {\n    const normalCalculatorItems = countItems(items).normal;\n    const wideCalculatorItems = countItems(items).wide;\n    items.forEach(function (item, i) {\n      if (!wideCalculatorItems) {\n        return;\n      }\n\n      if (i >= normalCalculatorItems) {\n        item.classList.add('wide');\n      }\n    });\n  }\n\n  function countItems(arr) {\n    const divider = 3;\n    const itemsLength = arr.length;\n    const divide = itemsLength % divider;\n    let wideItems = null;\n    let normalItems = null;\n\n    if (!divide) {\n      wideItems = 0;\n      normalItems = itemsLength;\n    } else {\n      if (divide === 1) {\n        wideItems = 4;\n        normalItems = itemsLength - 4;\n      } else if (divide === 2) {\n        wideItems = 2;\n        normalItems = itemsLength - 2;\n      }\n    }\n\n    return {\n      wide: wideItems,\n      normal: normalItems\n    };\n  }\n\n  function collectData(arr) {\n    arr.forEach(function (item) {\n      const elems = [...item.children];\n      elems.forEach(function (el) {\n        if (el.classList.contains('active')) {\n          if (el.dataset.age) {\n            data.age = el.dataset.age;\n          } else if (el.dataset.problem) {\n            data.problem = el.dataset.problem;\n          }\n        }\n      });\n    });\n  }\n\n  function checkErrors(data) {\n    if (!data.age && !data.problem) {\n      createErrorMessage('*Please select your age and problem', calculator);\n      return false;\n    } else if (!data.age && data.problem) {\n      createErrorMessage('*Please select your age', calculator);\n      return false;\n    } else if (!data.problem && data.age) {\n      createErrorMessage('*Please select your problem', calculator);\n      return false;\n    } else {\n      return true;\n    }\n  }\n\n  function createErrorMessage(message, wrap) {\n    const wrapper = wrap.getElementsByClassName('calculator__wrap')[0];\n\n    if (wrap.getElementsByClassName('calculator__warning')[0]) {\n      const warning = wrap.getElementsByClassName('calculator__warning')[0];\n      warning.innerHTML = message;\n    } else {\n      const warnMessage = document.createElement('p');\n      warnMessage.classList.add('calculator__warning');\n      warnMessage.innerHTML = message;\n      wrapper.appendChild(warnMessage);\n    }\n  }\n\n  function sendData(btn, arr) {\n    btn.addEventListener('click', e => {\n      e.preventDefault();\n      data.age = null;\n      data.problem = null;\n      collectData(arr);\n\n      if (checkErrors(data)) {\n        const link = btn.getAttribute('href');\n        localStorage.setItem('age', data.age);\n        localStorage.setItem('problem', data.problem);\n        window.location.href = link;\n      }\n    });\n  }\n}\n\n\n\n//# sourceURL=webpack:///./app/js/calculator.js?");

/***/ }),

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ \"./app/js/Menu.js\");\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator */ \"./app/js/calculator.js\");\n/* harmony import */ var _validationClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validationClass */ \"./app/js/validationClass.js\");\n\n\n\n\n\nwindow.addEventListener('load', function () {\n  (function homePageSlider() {\n    const slider = document.querySelector('.slider__wrap');\n\n    if (!slider) {\n      return;\n    }\n\n    $(slider).owlCarousel({\n      loop: true,\n      items: 1,\n      mouseDrag: false,\n      touchDrag: false,\n      lazyLoad: true,\n      autoplay: true,\n      autoplayTimeout: 5000,\n      autoplaySpeed: 400,\n      dots: true,\n      autoplayHoverPause: true,\n      dotsContainer: $('.slider__dots')\n    });\n  })();\n\n  (function menu() {\n    const menu = new _Menu__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"]({\n      button: document.querySelector('.header-menu__btn'),\n      hamburger: document.querySelector('.header-menu__burger'),\n      menu: document.querySelector('.header__menu'),\n      activeClass: 'active'\n    });\n    menu.init();\n  })();\n\n  (function calculator() {\n    Object(_calculator__WEBPACK_IMPORTED_MODULE_1__[\"Calculator\"])('calculator');\n  })();\n\n  (function validation() {\n    const form = document.querySelector('#form-page__form');\n\n    if (!form) {\n      return;\n    }\n\n    const valid = new _validationClass__WEBPACK_IMPORTED_MODULE_2__[\"Validation\"]({\n      submitBtn: 'form-page__form_btn',\n      firstName: 'first-name',\n      lastName: 'last-name',\n      phone: 'phone'\n    });\n    valid.init();\n    addCalculatorData();\n\n    function addCalculatorData() {\n      const ageInput = form.querySelector('#age');\n      const problemInput = form.querySelector('#problem');\n      const ageValue = localStorage.getItem('age');\n      const problemValue = localStorage.getItem('problem');\n      ageInput.value = ageValue;\n      problemInput.value = problemValue;\n    }\n  })();\n});\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ }),

/***/ "./app/js/validationClass.js":
/*!***********************************!*\
  !*** ./app/js/validationClass.js ***!
  \***********************************/
/*! exports provided: Validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Validation\", function() { return Validation; });\n\n\nclass CheckEmpty extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'CheckEmpty';\n  }\n\n}\n\nclass NameValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'NameValidationError';\n  }\n\n}\n\nclass CheckLength extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'CheckLength';\n  }\n\n}\n\nclass CheckEmail extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'CheckEmail';\n  }\n\n}\n\nclass CheckPhone extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'CheckPhone';\n  }\n\n}\n\nclass Validation {\n  constructor(options) {\n    this.submitBtn = document.getElementById(options.submitBtn);\n    this.inputs = {\n      lastName: document.getElementById(options.lastName),\n      firstName: document.getElementById(options.firstName),\n      phone: document.getElementById(options.phone),\n      email: document.getElementById(options.email)\n    };\n    this.promocode = false;\n    this.subscription = '';\n    this.success = false;\n  }\n\n  checkEmpty(inputValue) {\n    if (inputValue === '') {\n      throw new CheckEmpty('Это поле обязательно для заполнения');\n    }\n\n    return inputValue;\n  }\n\n  checkLength(inputValue, minLength, maxLength) {\n    const inputLength = inputValue.length;\n\n    if (inputLength < minLength) {\n      throw new CheckLength(`Поле должно содержать не менее ${minLength} символов`);\n    }\n\n    if (inputLength > maxLength) {\n      throw new CheckLength(`Количество символов превышает ${maxLength}. Введите корректные данные`);\n    }\n  }\n\n  checkName(input) {\n    const inputValue = input.value;\n    this.checkEmpty(inputValue);\n    this.checkLength(inputValue, 2, 50);\n    const regExp = /^[a-zA-Z]+$/;\n\n    if (!regExp.test(inputValue)) {\n      throw new NameValidationError('Допустимы только буквы русского алфавита');\n    }\n\n    return inputValue;\n  }\n\n  checkPhone(input) {\n    const inputValue = input.value;\n    this.checkEmpty(inputValue);\n    const numberLength = 16;\n    const regExp = /\\+1\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}/;\n\n    if (!regExp.test(inputValue) || inputValue.length !== numberLength) {\n      throw new CheckPhone('Некорректный номер телефона');\n    }\n\n    return inputValue;\n  }\n\n  maskPhone(input) {\n    new IMask(input, {\n      mask: '+{1}(000)000-00-00'\n    });\n  }\n\n  checkEmail(input) {\n    const inputValue = input.value;\n    this.checkEmpty(inputValue);\n    this.checkLength(inputValue, 3, 50);\n    const regExp = /^[\\w]{1}[\\w-\\.]*@[\\w-]+\\.[a-z]{2,4}$/i;\n\n    if (!regExp.test(inputValue)) {\n      throw new CheckEmail('Некорректный формат Email');\n    }\n\n    return inputValue;\n  }\n\n  createWarningMessage(message) {\n    const paragraph = document.createElement('p');\n    paragraph.className = 'warning';\n    paragraph.innerHTML = message;\n    return paragraph;\n  }\n\n  catchErrors(input, e, ...args) {\n    for (const argsItem of args) {\n      if (e instanceof argsItem) {\n        const messageElement = this.createWarningMessage(e.message);\n        input.parentElement.appendChild(messageElement);\n        input.classList.add('warn');\n      }\n    }\n  }\n\n  check() {\n    const errors = [];\n\n    for (const input in this.inputs) {\n      const elem = this.inputs[input];\n\n      if (!elem) {\n        continue;\n      }\n\n      switch (input) {\n        case 'firstName':\n          try {\n            this.checkName(elem);\n          } catch (e) {\n            this.catchErrors(elem, e, CheckEmpty, CheckLength, NameValidationError);\n            errors.push(e);\n          }\n\n          break;\n\n        case 'lastName':\n          try {\n            this.checkName(elem);\n          } catch (e) {\n            this.catchErrors(elem, e, CheckEmpty, CheckLength, NameValidationError);\n            errors.push(e);\n          }\n\n          break;\n\n        case 'phone':\n          try {\n            this.checkPhone(elem);\n          } catch (e) {\n            this.catchErrors(elem, e, CheckEmpty, CheckPhone);\n            errors.push(e);\n          }\n\n          break;\n\n        case 'email':\n          try {\n            this.checkEmail(elem);\n          } catch (e) {\n            this.catchErrors(elem, e, CheckEmpty, CheckLength, CheckEmail);\n            errors.push(e);\n          }\n\n          break;\n      }\n    }\n\n    if (errors.length === 0) {\n      this.success = true;\n    }\n  }\n\n  init() {\n    this.maskPhone(this.inputs.phone);\n    this.submitBtn.addEventListener('click', e => {\n      e.preventDefault();\n      const warningMessages = document.getElementsByClassName('warning');\n      let invalidInputs = document.getElementsByClassName('warn');\n\n      if (warningMessages[0]) {\n        while (warningMessages.length) {\n          warningMessages[0].parentNode.removeChild(warningMessages[0]);\n        }\n      }\n\n      if (invalidInputs) {\n        invalidInputs = Array.prototype.slice.call(invalidInputs);\n\n        for (let i = 0, length = invalidInputs.length; i < length; i++) {\n          if (invalidInputs[i].classList.contains('warn')) {\n            invalidInputs[i].classList.remove('warn');\n          }\n        }\n      }\n\n      this.check();\n    });\n    return this.success;\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/js/validationClass.js?");

/***/ })

/******/ });