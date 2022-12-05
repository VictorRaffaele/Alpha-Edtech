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

/***/ "./src/public/script/index.ts":
/*!************************************!*\
  !*** ./src/public/script/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\r\n//Activity 1\r\nclass Validator {\r\n    constructor(_data) {\r\n        this.data = _data;\r\n    }\r\n}\r\n//Activity 2\r\nclass StringValidator extends Validator {\r\n    constructor(_data) {\r\n        if (typeof _data === 'string') {\r\n            super(_data);\r\n        }\r\n        else {\r\n            throw new Error(\"O tipo está errado\");\r\n        }\r\n    }\r\n}\r\nclass NumberValidator extends Validator {\r\n    constructor(_data) {\r\n        if (typeof _data === 'number') {\r\n            super(_data);\r\n        }\r\n        else {\r\n            throw new Error(\"O tipo está errado\");\r\n        }\r\n    }\r\n}\r\nclass BooleanValidator extends Validator {\r\n    constructor(_data) {\r\n        if (typeof _data === 'boolean') {\r\n            super(_data);\r\n        }\r\n        else {\r\n            throw new Error(\"O tipo está errado\");\r\n        }\r\n    }\r\n}\r\n/*try {\r\n    const num = new NumberValidator(18021999);\r\n    const string = new StringValidator(\"18/02/1999\");\r\n    const bool = new BooleanValidator(false);\r\n    const numE = new NumberValidator(18021999);\r\n    console.log(num);\r\n    console.log(string);\r\n    console.log(bool);\r\n    console.log(numE);\r\n} catch (error) {\r\n    console.log(error);\r\n}*/\r\n//Activity 3\r\nclass RegexValidator extends StringValidator {\r\n    constructor(_data, _regex) {\r\n        if (_regex.test(_data)) {\r\n            super(_data);\r\n            this.expresion = _regex;\r\n        }\r\n        else {\r\n            throw new Error(\"O formato está errado\");\r\n        }\r\n    }\r\n    regex() {\r\n        return new RegExp('');\r\n    }\r\n}\r\nclass EmailInput extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        const shadow = this.attachShadow({ mode: \"open\" });\r\n        const label = document.createElement('label');\r\n        const emailInput = document.createElement('input');\r\n        const resultP = document.createElement('p');\r\n        label.innerText = 'Email:';\r\n        label.setAttribute('for', 'emailInput');\r\n        emailInput.setAttribute('id', 'emailInput');\r\n        shadow.appendChild(label);\r\n        shadow.appendChild(emailInput);\r\n        shadow.appendChild(resultP);\r\n        emailInput.addEventListener('change', (e) => {\r\n            try {\r\n                resultP.innerText = '';\r\n                new EmailValidator(e.target.value);\r\n            }\r\n            catch (error) {\r\n                emailInput.value = '';\r\n                resultP.innerText = error.message;\r\n            }\r\n        });\r\n    }\r\n}\r\ncustomElements.define(\"email-input\", EmailInput);\r\n//Activity 4\r\n//Q1\r\nclass EmailValidator extends RegexValidator {\r\n    constructor(_data) {\r\n        const reg = new RegExp(/^(\\w{1,}@\\w{1,}\\.(\\w{3})(\\.\\w{2}){0,1})$/gim);\r\n        super(_data, reg);\r\n    }\r\n    regex() {\r\n        return this.expresion;\r\n    }\r\n}\r\nclass PasswordValidator extends RegexValidator {\r\n    constructor(_data) {\r\n        super(_data, /^\\w{1,}$/gim);\r\n    }\r\n    regex() {\r\n        return this.expresion;\r\n    }\r\n}\r\nclass NameValidator extends RegexValidator {\r\n    constructor(_data) {\r\n        super(_data, /^([a-z]{1,})([ ]{1}[a-z]{1,}){0,}$/gim);\r\n    }\r\n    regex() {\r\n        return this.expresion;\r\n    }\r\n}\r\nclass NameInput extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        const shadow = this.attachShadow({ mode: \"open\" });\r\n        const label = document.createElement('label');\r\n        const nameInput = document.createElement('input');\r\n        const resultP = document.createElement('p');\r\n        label.innerText = 'Nome:';\r\n        label.setAttribute('for', 'nameInput');\r\n        nameInput.setAttribute('id', 'nameInput');\r\n        shadow.appendChild(label);\r\n        shadow.appendChild(nameInput);\r\n        shadow.appendChild(resultP);\r\n        nameInput.addEventListener('change', (e) => {\r\n            try {\r\n                resultP.innerText = '';\r\n                new NameValidator(e.target.value);\r\n            }\r\n            catch (error) {\r\n                nameInput.value = '';\r\n                resultP.innerText = error.message;\r\n            }\r\n        });\r\n    }\r\n}\r\nclass PasswordInput extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        const shadow = this.attachShadow({ mode: \"open\" });\r\n        const label = document.createElement('label');\r\n        const passInput = document.createElement('input');\r\n        const resultP = document.createElement('p');\r\n        label.innerText = 'Senha:';\r\n        label.setAttribute('for', 'passInput');\r\n        passInput.setAttribute('id', 'passInput');\r\n        passInput.setAttribute('type', 'password');\r\n        shadow.appendChild(label);\r\n        shadow.appendChild(passInput);\r\n        shadow.appendChild(resultP);\r\n        passInput.addEventListener('change', (e) => {\r\n            try {\r\n                resultP.innerText = '';\r\n                new PasswordValidator(e.target.value);\r\n            }\r\n            catch (error) {\r\n                passInput.value = '';\r\n                resultP.innerText = error.message;\r\n            }\r\n        });\r\n    }\r\n}\r\ncustomElements.define(\"name-input\", NameInput);\r\ncustomElements.define(\"password-input\", PasswordInput);\r\nclass ApiIndex {\r\n    async register(data) {\r\n        try {\r\n            const options = { method: \"POST\", headers: { \"Content-Type\": \"application/json\" }, body: JSON.stringify(data) };\r\n            const response = await fetch(\"/accounts/\", options);\r\n            if (!response.ok) {\r\n                const message = await response.json();\r\n                throw new Error(message.error);\r\n            }\r\n            return await response.json();\r\n        }\r\n        catch (error) {\r\n            return error;\r\n        }\r\n    }\r\n    async login(data) {\r\n        try {\r\n            const options = { method: \"POST\", headers: { \"Content-Type\": \"application/json\" }, body: JSON.stringify(data) };\r\n            const response = await fetch(\"/accounts/login\", options);\r\n            if (!response.ok) {\r\n                const message = await response.json();\r\n                throw new Error(message.error);\r\n            }\r\n            return await response.json();\r\n        }\r\n        catch (error) {\r\n            return error;\r\n        }\r\n    }\r\n    async update(data) {\r\n        try {\r\n            const options = { method: \"PATCH\", headers: { \"Content-Type\": \"application/json\" }, body: JSON.stringify(data) };\r\n            const response = await fetch(\"/accounts\", options);\r\n            if (!response.ok) {\r\n                const message = await response.json();\r\n                throw new Error(message.error);\r\n            }\r\n            return await response.json();\r\n        }\r\n        catch (error) {\r\n            return error;\r\n        }\r\n    }\r\n}\r\nconst btReg = document.querySelector(\"#btReg\");\r\nconst btLogin = document.querySelector(\"#btLogin\");\r\nconst btUpdate = document.querySelector(\"#btUpdate\");\r\nconst resultP = document.querySelector(\"#result\");\r\nbtReg.addEventListener(\"click\", async () => {\r\n    var _a, _b, _c, _d, _e, _f;\r\n    try {\r\n        const name = (_b = (_a = document.querySelector('name-input')) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#nameInput');\r\n        const email = (_d = (_c = document.querySelector('email-input')) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('#emailInput');\r\n        const pass = (_f = (_e = document.querySelector('password-input')) === null || _e === void 0 ? void 0 : _e.shadowRoot) === null || _f === void 0 ? void 0 : _f.querySelector('#passInput');\r\n        const data = { name: name.value, email: email.value, password: pass.value };\r\n        const apiIndex = new ApiIndex();\r\n        const result = await apiIndex.register(data);\r\n        resultP.innerText = result;\r\n    }\r\n    catch (error) {\r\n        resultP.innerText = error.message;\r\n    }\r\n});\r\nbtLogin.addEventListener(\"click\", async () => {\r\n    var _a, _b, _c, _d;\r\n    try {\r\n        const email = (_b = (_a = document.querySelector('email-input')) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#emailInput');\r\n        const pass = (_d = (_c = document.querySelector('password-input')) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('#passInput');\r\n        const data = { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])() };\r\n        const apiIndex = new ApiIndex();\r\n        const result = await apiIndex.login(data);\r\n        resultP.innerText = result;\r\n    }\r\n    catch (error) {\r\n        resultP.innerText = error.message;\r\n    }\r\n});\r\nbtUpdate.addEventListener(\"click\", async () => {\r\n    var _a, _b, _c, _d, _e, _f;\r\n    try {\r\n        const name = (_b = (_a = document.querySelector('name-input')) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#nameInput');\r\n        const email = (_d = (_c = document.querySelector('email-input')) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('#emailInput');\r\n        const pass = (_f = (_e = document.querySelector('password-input')) === null || _e === void 0 ? void 0 : _e.shadowRoot) === null || _f === void 0 ? void 0 : _f.querySelector('#passInput');\r\n        const data = { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), name: name.value, email: email.value, password: pass.value };\r\n        const apiIndex = new ApiIndex();\r\n        const result = await apiIndex.update(data);\r\n        resultP.innerText = result;\r\n    }\r\n    catch (error) {\r\n        resultP.innerText = error.message;\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/public/script/index.ts?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"unsafeStringify\": () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/validate.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/public/script/index.ts");
/******/ 	
/******/ })()
;