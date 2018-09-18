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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/parts/MenuControl.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/parts/MenuControl.js":
/*!**********************************!*\
  !*** ./src/parts/MenuControl.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var menuControl = function () {\n  var mainNav = document.querySelector('.navigation'),\n      mainNavElem = mainNav.querySelectorAll('a');\n\n  function menuHighLighter() {\n    for (var i = 0; i < mainNavElem.length; i++) {\n      if (window.location.href == mainNavElem[i].href) {\n        mainNavElem[i].style.borderLeft = '4px solid #fa7a95';\n        mainNavElem[i].style.backgroundColor = '#e2e2e2';\n      }\n    }\n  }\n\n  menuHighLighter();\n  var hamburger = document.querySelector('.header-main__link'),\n      toolsList = document.querySelector('.navigation__link'),\n      menuContainer = document.querySelector('.header-main-menu');\n  hamburger.addEventListener('click', function () {\n    if (mainNav.classList.contains('navigation_active')) {\n      mainNav.classList.remove('navigation_active');\n    }\n\n    ;\n    menuContainer.classList.toggle('header-main-menu_active');\n    hamburger.classList.toggle('header-main__link_active');\n  });\n  toolsList.addEventListener('click', function () {\n    if (menuContainer.classList.contains('header-main-menu_active')) {\n      menuContainer.classList.remove('header-main-menu_active');\n      hamburger.classList.remove('header-main__link_active');\n    }\n\n    ;\n    mainNav.classList.toggle('navigation_active');\n    toolsList.classList.toggle('navigation__link_active');\n  });\n  document.addEventListener('resize', function () {\n    if (window.innerWidth > 768) {\n      menuContainer.classList.remove('header-main-menu_active');\n      hamburger.classList.remove('header-main__link_active');\n      mainNav.classList.remove('navigation_active');\n    }\n  });\n  document.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target === mainNav || mainNav.contains(target) || target === toolsList || toolsList.contains(target) || target === menuContainer || menuContainer.contains(target) || target === hamburger || hamburger.contains(target)) {\n      return;\n    } else if (!target === mainNav || !mainNav.contains(target) || !target === toolsList || !toolsList.contains(target) || !target === menuContainer || !menuContainer.contains(target) || !target === hamburger || !hamburger.contains(target)) {\n      mainNav.classList.remove('navigation_active');\n      toolsList.classList.remove('navigation__link_active');\n      hamburger.classList.remove('header-main__link_active');\n      menuContainer.classList.remove('header-main-menu_active');\n    }\n  });\n}();\n\n//# sourceURL=webpack:///./src/parts/MenuControl.js?");

/***/ })

/******/ });