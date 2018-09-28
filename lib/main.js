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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/jquery_lite.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(HTMLElements) {\n    this.HTMLElements = HTMLElements;\n  }\n  \n  each(callback) {\n    this.HTMLElements.forEach((el) => {\n      callback(el);\n    });\n  }\n  \n  map(callback) {\n    result = [];\n    this.each((el) => {\n      result.push(callback(el));\n    });\n    return result;\n  }\n  \n  html(string) {\n    if (string === undefined) {\n      return this.HTMLElements[0].innerHTML;\n      } else {\n      this.each(el => el.innerHTML = string);\n    }\n  }\n  \n  empty() {\n    this.html('');\n  }\n  \n  append(argument) {\n    if (argument instanceof DOMNodeCollection) {\n      let outerHTMLStr = \"\";\n      \n      argument.each((el) => {\n        outerHTMLStr += el.outerHTML;\n      });\n      \n      for(let i = 0; i < this.HTMLElements.length; i++) {\n        this.HTMLElements.reverse()[i].innerHTML += outerHTMLStr;\n      }\n      this.HTMLElements.reverse();\n    } else if (argument instanceof HTMLElement) {\n      this.append(new DOMNodeCollection([argument]));\n    } else {\n      for(let i = 0; i < this.HTMLElements.length; i++) {\n        this.HTMLElements.reverse()[i].innerHTML += argument;\n      }\n      this.HTMLElements.reverse();\n    }\n  }\n  \n  attr(attribute, value) {\n    if (value === undefined) {\n      return this.HTMLElements[0].getAttribute(attribute);\n    } else {\n      this.each((el) => {\n        el.setAttribute(attribute, value);\n      });\n    }\n  }\n  \n  addClass(value) {\n    this.each(node => {\n      let classString = node.getAttribute('class'); \n      classString += ` ${value}`;\n      node.setAttribute('class', classString);\n    });\n  }\n  \n  removeClass(value) {\n    this.each((node) => {\n      let classesArray = node.getAttribute('class').split(\" \");\n      classesArray.splice(classesArray.indexOf(value), 1);\n      node.setAttribute('class', classesArray.join(\" \"));\n    });\n  }\n  \n  \n  \n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/jquery_lite.js":
/*!****************************!*\
  !*** ./lib/jquery_lite.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\n\nwindow.$l = function(selector) {\n  if (selector instanceof HTMLElement ) {\n    return new DOMNodeCollection([selector]);\n  }\n  const nodelist = document.querySelectorAll(selector);\n  return new DOMNodeCollection(Array.from(nodelist));\n};\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  alldivs = $l('div');\n  austin = $l('.austin');\n  p = $l('p');\n  p.addClass('nathasha');\n  p.addClass('cool-things');\n  alldivs.addClass('cool-things');\n  setTimeout(() => alldivs.removeClass('cool-things'), 2000);\n});\n\n\n//# sourceURL=webpack:///./lib/jquery_lite.js?");

/***/ })

/******/ });