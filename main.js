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

/***/ "./src/errorHandling.js":
/*!******************************!*\
  !*** ./src/errorHandling.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideError\": () => (/* binding */ hideError),\n/* harmony export */   \"showError\": () => (/* binding */ showError)\n/* harmony export */ });\nfunction showError(elem, error, errorValue, correctValues) {\r\n    // проверим, не отображается ли уже ошибка\r\n    const elemBox = elem.closest('.form-search__group');\r\n    const errorBox = elemBox.querySelector('.error');\r\n    if (errorBox) { // если ошибка уже отображается, то дальше не идём\r\n        return;\r\n    }\r\n\r\n    const errorDiv = document.createElement('div');\r\n    errorDiv.classList.add('error');\r\n\r\n    let valueParagraph = document.createElement('p');\r\n    let clientValue = document.createElement('p');\r\n    clientValue.textContent = `Кол-во введённых символов: ${errorValue}.`;\r\n    \r\n    if (error === 'min') {\r\n        valueParagraph.textContent = `Минимальное кол-во символов: ${correctValues.min};`; \r\n    } else if (error === 'max') {\r\n        valueParagraph.textContent = `Максимальное кол-во символов: ${correctValues.max};`; \r\n    }\r\n    errorDiv.append(valueParagraph);\r\n    errorDiv.append(clientValue);\r\n\r\n    elemBox.append(errorDiv);\r\n    elem.classList.add('error-input');\r\n}\r\n\r\nfunction hideError(input) {\r\n    input.classList.remove('error-input');\r\n    const formGroup = input.closest('.form-search__group');\r\n    const error = formGroup.querySelector('.error');\r\n    if (error) {\r\n        error.remove();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://hotels_frontend_repos-search/./src/errorHandling.js?");

/***/ }),

/***/ "./src/getValidationResult.js":
/*!************************************!*\
  !*** ./src/getValidationResult.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getValidationResult\": () => (/* binding */ getValidationResult)\n/* harmony export */ });\nfunction getValidationResult(input, options) {\r\n    const {min, max} = options;\r\n    const value = input.value.trim();\r\n\r\n    if (min && value.length < min) {\r\n        return {check: false, error: 'min', errorValue: value.length};\r\n    }\r\n\r\n    if (max && value.length > max) {\r\n        return {check: false, error: 'max', errorValue: value.length};\r\n    }\r\n\r\n    return {check: true};\r\n}\n\n//# sourceURL=webpack://hotels_frontend_repos-search/./src/getValidationResult.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandling */ \"./src/errorHandling.js\");\n/* harmony import */ var _getValidationResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValidationResult */ \"./src/getValidationResult.js\");\n/* harmony import */ var _reposHandling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reposHandling */ \"./src/reposHandling.js\");\n/* harmony import */ var _loadingBlockHandling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadingBlockHandling */ \"./src/loadingBlockHandling.js\");\n\r\n\r\n\r\n\r\n\r\nfunction main() {\r\n    const searchForm = document.forms.search;\r\n    searchForm.addEventListener('submit', searchRepos);\r\n\r\n    const allInputs = document.querySelectorAll('input');\r\n    allInputs.forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            (0,_errorHandling__WEBPACK_IMPORTED_MODULE_0__.hideError)(input);\r\n        });\r\n    });\r\n}\r\n\r\nmain();\r\n\r\n\r\nasync function searchRepos(e) {\r\n    e.preventDefault();\r\n    const searchForm = document.forms.search;\r\n    const queryInput = searchForm.searchString;\r\n    const filterSelect = searchForm.searchQualifier;\r\n\r\n    let isAnyError = false;\r\n    const queryValidationOptions = {min: 3, max: 32};\r\n    const queryValidationResult = (0,_getValidationResult__WEBPACK_IMPORTED_MODULE_1__.getValidationResult)(queryInput, queryValidationOptions);\r\n    if (!queryValidationResult.check) {\r\n        isAnyError = true;\r\n        (0,_errorHandling__WEBPACK_IMPORTED_MODULE_0__.showError)(queryInput, queryValidationResult.error, queryValidationResult.errorValue, queryValidationOptions);\r\n    }\r\n\r\n    if (isAnyError) {\r\n        e.preventDefault();\r\n        return;\r\n    }\r\n\r\n    (0,_loadingBlockHandling__WEBPACK_IMPORTED_MODULE_3__.showLoadingBlock)();\r\n    (0,_reposHandling__WEBPACK_IMPORTED_MODULE_2__.getRepos)(queryInput, filterSelect)\r\n    .then(response => response.json())\r\n    .then(repos => (0,_reposHandling__WEBPACK_IMPORTED_MODULE_2__.showReposList)(repos))\r\n    .catch(error => {\r\n        console.log('error: ', error);\r\n    })\r\n    .finally(() => {\r\n        (0,_loadingBlockHandling__WEBPACK_IMPORTED_MODULE_3__.hideLoadingBlock)();\r\n        console.log('finally');\r\n    })\r\n}\n\n//# sourceURL=webpack://hotels_frontend_repos-search/./src/index.js?");

/***/ }),

/***/ "./src/loadingBlockHandling.js":
/*!*************************************!*\
  !*** ./src/loadingBlockHandling.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideLoadingBlock\": () => (/* binding */ hideLoadingBlock),\n/* harmony export */   \"showLoadingBlock\": () => (/* binding */ showLoadingBlock)\n/* harmony export */ });\nfunction showLoadingBlock() {\r\n    const reposBlock = document.querySelector('.repos');\r\n    \r\n    const loadingBlock = document.createElement('div');\r\n    loadingBlock.classList.add('loading-block');\r\n    loadingBlock.textContent = 'Идёт запрос. Пожалуйста, подождите';\r\n    \r\n    reposBlock.append(loadingBlock);\r\n}\r\n\r\nfunction hideLoadingBlock() {\r\n    const loadingBlock = document.querySelector('.loading-block');\r\n    loadingBlock.remove();\r\n}\n\n//# sourceURL=webpack://hotels_frontend_repos-search/./src/loadingBlockHandling.js?");

/***/ }),

/***/ "./src/reposHandling.js":
/*!******************************!*\
  !*** ./src/reposHandling.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRepos\": () => (/* binding */ getRepos),\n/* harmony export */   \"showReposList\": () => (/* binding */ showReposList)\n/* harmony export */ });\nasync function getRepos(queryInput, filterSelect) {\r\n    const query = queryInput.value;\r\n    const qualifier = filterSelect.value;\r\n    const queryURL = constructQuery(query, qualifier);\r\n\r\n    return fetch(queryURL);\r\n}\r\n\r\nfunction constructQuery(query, qualifier) {\r\n    let queryURL = 'https://api.github.com/search/repositories?q=';\r\n    queryURL += query;\r\n    if (qualifier !== 'all') {\r\n        queryURL += ' in:' + qualifier;\r\n    }\r\n\r\n    return queryURL;\r\n}\r\n\r\nfunction showReposList(repos) {\r\n    console.log('repos: ', repos);\r\n}\n\n//# sourceURL=webpack://hotels_frontend_repos-search/./src/reposHandling.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;