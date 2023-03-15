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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandling */ \"./src/errorHandling.js\");\n/* harmony import */ var _reposHandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reposHandling */ \"./src/reposHandling.js\");\n\r\n\r\n\r\nfunction main() {\r\n    const searchForm = document.forms.search;\r\n    searchForm.addEventListener('submit', _reposHandling__WEBPACK_IMPORTED_MODULE_1__.searchRepos);\r\n\r\n    const allInputs = document.querySelectorAll('input');\r\n    allInputs.forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            (0,_errorHandling__WEBPACK_IMPORTED_MODULE_0__.hideError)(input);\r\n        });\r\n    });\r\n}\r\n\r\nmain();\n\n//# sourceURL=webpack://hotels_frontend_repos-search/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearReposList\": () => (/* binding */ clearReposList),\n/* harmony export */   \"getRepos\": () => (/* binding */ getRepos),\n/* harmony export */   \"searchRepos\": () => (/* binding */ searchRepos),\n/* harmony export */   \"showReposList\": () => (/* binding */ showReposList)\n/* harmony export */ });\n/* harmony import */ var _getValidationResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getValidationResult */ \"./src/getValidationResult.js\");\n/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorHandling */ \"./src/errorHandling.js\");\n/* harmony import */ var _loadingBlockHandling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadingBlockHandling */ \"./src/loadingBlockHandling.js\");\n/* harmony import */ var _utilities_constructQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/constructQuery */ \"./src/utilities/constructQuery.js\");\n/* harmony import */ var _utilities_insertRepoToList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/insertRepoToList */ \"./src/utilities/insertRepoToList.js\");\n/* harmony import */ var _utilities_showNoReposFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/showNoReposFound */ \"./src/utilities/showNoReposFound.js\");\n/* harmony import */ var _utilities_removeNoReposMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/removeNoReposMessage */ \"./src/utilities/removeNoReposMessage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function getRepos(queryInput, filterSelect) {\r\n    const query = queryInput.value;\r\n    const qualifier = filterSelect.value;\r\n    const queryURL = (0,_utilities_constructQuery__WEBPACK_IMPORTED_MODULE_3__.constructQuery)(query, qualifier);\r\n\r\n    return fetch(queryURL);\r\n}\r\n\r\nfunction showReposList(reposResponse, queryInput, filterSelect) {\r\n    if (reposResponse.items.length === 0) {\r\n        (0,_utilities_showNoReposFound__WEBPACK_IMPORTED_MODULE_5__.showNoReposFound)(queryInput.value, filterSelect.value);\r\n        return;\r\n    }\r\n\r\n    const repos = reposResponse.items.slice(0, 10);\r\n    const reposReduced = repos.map(repo => {\r\n        return {\r\n            name: repo.name,\r\n            url: repo.html_url,\r\n            owner: {\r\n                login: repo.owner.login,\r\n                url: repo.owner.html_url,\r\n                avatar_url: repo.owner.avatar_url\r\n            },\r\n            forks_count: repo.forks_count,\r\n            language: repo.language,\r\n            description: repo.description\r\n        }\r\n    });\r\n\r\n    reposReduced.forEach(repo => {\r\n        (0,_utilities_insertRepoToList__WEBPACK_IMPORTED_MODULE_4__.insertRepoToList)(repo);\r\n    });\r\n}\r\n\r\nfunction searchRepos(e) {\r\n    e.preventDefault();\r\n    const searchForm = document.forms.search;\r\n    const queryInput = searchForm.searchString;\r\n    const filterSelect = searchForm.searchQualifier;\r\n\r\n    let isAnyError = false;\r\n    const queryValidationOptions = {min: 3, max: 32};\r\n    const queryValidationResult = (0,_getValidationResult__WEBPACK_IMPORTED_MODULE_0__.getValidationResult)(queryInput, queryValidationOptions);\r\n    if (!queryValidationResult.check) {\r\n        isAnyError = true;\r\n        (0,_errorHandling__WEBPACK_IMPORTED_MODULE_1__.showError)(queryInput, queryValidationResult.error, queryValidationResult.errorValue, queryValidationOptions);\r\n    }\r\n\r\n    if (isAnyError) {\r\n        e.preventDefault();\r\n        return;\r\n    }\r\n\r\n    (0,_utilities_removeNoReposMessage__WEBPACK_IMPORTED_MODULE_6__.removeNoReposMessage)(); // убираем сообщение об отсутствии репозиториев, если оно есть\r\n    clearReposList(); // очищаем список показываемых репозиториев\r\n    (0,_loadingBlockHandling__WEBPACK_IMPORTED_MODULE_2__.showLoadingBlock)(); // показываем надпись загрузки\r\n    \r\n    // получаем репозитории\r\n    getRepos(queryInput, filterSelect)\r\n    .then(response => response.json())\r\n    .then(repos => showReposList(repos, queryInput, filterSelect))\r\n    .catch(error => {\r\n        console.log('error: ', error);\r\n    })\r\n    .finally(() => {\r\n        (0,_loadingBlockHandling__WEBPACK_IMPORTED_MODULE_2__.hideLoadingBlock)();\r\n    })\r\n}\r\n\r\nfunction clearReposList() {\r\n    const reposList = document.querySelector('.repos__list');\r\n    reposList.innerHTML = '';\r\n}\n\n//# sourceURL=webpack://hotels_frontend_repos-search/./src/reposHandling.js?");

/***/ }),

/***/ "./src/utilities/constructQuery.js":
/*!*****************************************!*\
  !*** ./src/utilities/constructQuery.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"constructQuery\": () => (/* binding */ constructQuery)\n/* harmony export */ });\nfunction constructQuery(query, qualifier) {\r\n    let queryURL = 'https://api.github.com/search/repositories?q=';\r\n    queryURL += query;\r\n    if (qualifier !== 'all') {\r\n        queryURL += ' in:' + qualifier;\r\n    }\r\n\r\n    return queryURL;\r\n}\n\n//# sourceURL=webpack://hotels_frontend_repos-search/./src/utilities/constructQuery.js?");

/***/ }),

/***/ "./src/utilities/insertRepoToList.js":
/*!*******************************************!*\
  !*** ./src/utilities/insertRepoToList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insertRepoToList\": () => (/* binding */ insertRepoToList)\n/* harmony export */ });\nfunction insertRepoToList(repo) {\r\n    const list = document.querySelector('.repos__list');\r\n    \r\n    const listItem = document.createElement('li');\r\n    listItem.classList.add('repos__item');\r\n    listItem.classList.add('repo');\r\n    \r\n    const topBlock = document.createElement('div');\r\n    topBlock.classList.add('repo__top-block');\r\n    const middleBlock = document.createElement('div');\r\n    middleBlock.classList.add('repo__middle-block');\r\n    const bottomBlock = document.createElement('div');\r\n    bottomBlock.classList.add('repo__bottom-block');\r\n\r\n    const avatar = document.createElement('img');\r\n    avatar.classList.add('repo__avatar');\r\n    avatar.src = repo.owner.avatar_url;\r\n    topBlock.append(avatar);\r\n    \r\n    const owner = document.createElement('div');\r\n    const ownerLink = document.createElement('a');\r\n    ownerLink.target = '_blank';\r\n    owner.classList.add('repo__owner');\r\n    ownerLink.href = repo.owner.url;\r\n    ownerLink.textContent = repo.owner.login\r\n    owner.textContent = \"Владелец: \";\r\n    owner.append(ownerLink);\r\n    topBlock.append(owner);\r\n\r\n    const name = document.createElement('div');\r\n    const nameLink = document.createElement('a');\r\n    nameLink.target = '_blank';\r\n    name.classList.add('repo__name');\r\n    nameLink.href = repo.url;\r\n    nameLink.textContent = repo.name;\r\n    name.textContent = \"Репозиторий: \";\r\n    name.append(nameLink);\r\n    topBlock.append(name);\r\n\r\n\r\n    const description = document.createElement('div');\r\n    description.classList.add('repo__description');\r\n    if (repo.description === null) {\r\n        const noDescriptionSpan = document.createElement('span');\r\n        noDescriptionSpan.classList.add('repo__description-span');\r\n        noDescriptionSpan.textContent = 'У данного репозитория нет описания :(';\r\n        description.append(noDescriptionSpan);\r\n    } else {\r\n        description.textContent = repo.description;\r\n    }\r\n    middleBlock.append(description);\r\n\r\n\r\n    const language = document.createElement('div');\r\n    const languageSpan = document.createElement('span');\r\n    languageSpan.classList.add('repo__span');\r\n    languageSpan.textContent = repo.language || '-';\r\n    language.classList.add('repo__language');\r\n    language.textContent = \"Основной язык: \";\r\n    language.append(languageSpan);\r\n    bottomBlock.append(language);\r\n\r\n    const forks = document.createElement('div');\r\n    const forksSpan = document.createElement('span');\r\n    forksSpan.classList.add('repo__span');\r\n    forksSpan.textContent = repo.forks_count;\r\n    forks.classList.add('repo__forks');\r\n    forks.textContent = \"Число форков: \";\r\n    forks.append(forksSpan);\r\n    bottomBlock.append(forks);\r\n\r\n\r\n    listItem.append(topBlock);\r\n    listItem.append(middleBlock);\r\n    listItem.append(bottomBlock);\r\n    list.append(listItem);\r\n}\n\n//# sourceURL=webpack://hotels_frontend_repos-search/./src/utilities/insertRepoToList.js?");

/***/ }),

/***/ "./src/utilities/removeNoReposMessage.js":
/*!***********************************************!*\
  !*** ./src/utilities/removeNoReposMessage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeNoReposMessage\": () => (/* binding */ removeNoReposMessage)\n/* harmony export */ });\nfunction removeNoReposMessage() {\r\n    const noReposBlock = document.querySelector('.no-repos-message');\r\n    if (noReposBlock) {\r\n        noReposBlock.remove();\r\n    }\r\n}\n\n//# sourceURL=webpack://hotels_frontend_repos-search/./src/utilities/removeNoReposMessage.js?");

/***/ }),

/***/ "./src/utilities/showNoReposFound.js":
/*!*******************************************!*\
  !*** ./src/utilities/showNoReposFound.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showNoReposFound\": () => (/* binding */ showNoReposFound)\n/* harmony export */ });\nfunction showNoReposFound(query, filter) {\r\n    const filtersObj = {\r\n        'all': 'все',\r\n        'name': 'название',\r\n        'description': 'описание',\r\n        'topics': 'топики',\r\n        'readme': 'readme',\r\n    }\r\n\r\n    const noReposBlock = document.createElement('div');\r\n    noReposBlock.classList.add('no-repos-message');\r\n    noReposBlock.textContent = `По запросу \"${query}\" с фильтром \"${filtersObj[filter]}\" репозиториев не найдено`;\r\n\r\n    const reposListBox = document.querySelector('.repos');\r\n    reposListBox.append(noReposBlock);\r\n}\n\n//# sourceURL=webpack://hotels_frontend_repos-search/./src/utilities/showNoReposFound.js?");

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