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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/parts/GuestBook.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/parts/GuestBook.js":
/*!********************************!*\
  !*** ./src/parts/GuestBook.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var invitations = function () {\n  var leftArrow = document.querySelector('.slider-albumguest-arrow-left'),\n      rightArrow = document.querySelector('.slider-albumguest-arrow-right'),\n      imageBox = document.querySelector('.image-box-guest'),\n      imageBoxPhotos = imageBox.querySelectorAll('span'),\n      slideIndex = 0,\n      stepRight = 0,\n      stepLeft = 0;\n\n  function changeSlides(e) {\n    var target = e.target;\n\n    if (target.classList.contains('slider-albumguest-arrow-left')) {\n      slideIndex--;\n\n      if (slideIndex < 0) {\n        slideIndex = 0;\n        return;\n      }\n\n      stepLeft -= imageBoxPhotos[1].clientWidth;\n\n      for (var i = 0; i < imageBoxPhotos.length; i++) {\n        imageBoxPhotos[i].style.left = stepLeft + 'px';\n      }\n    } else if (target.classList.contains('slider-albumguest-arrow-right')) {\n      slideIndex++;\n\n      if (slideIndex > imageBoxPhotos.length - 3) {\n        slideIndex = imageBoxPhotos.length - 3;\n        return;\n      }\n\n      stepRight += imageBoxPhotos[1].clientWidth;\n\n      for (var _i = 0; _i < imageBoxPhotos.length; _i++) {\n        imageBoxPhotos[_i].style.left = -stepRight + 'px';\n      }\n    } // imageBox.style.left = -imageBoxPhotos[slideIndex] + \"px\" :\n    // imageBox.style.left = imageBoxPhotos[slideIndex] + \"px\";\n\n  }\n\n  leftArrow.addEventListener('click', changeSlides);\n  rightArrow.addEventListener('click', changeSlides);\n}();\n\n//# sourceURL=webpack:///./src/parts/GuestBook.js?");

/***/ })

/******/ });