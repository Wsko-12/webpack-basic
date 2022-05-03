/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
import * as __WEBPACK_EXTERNAL_MODULE_https_unpkg_com_three_0_140_0_build_three_module_js_b7aa890c__ from "https://unpkg.com/three@0.140.0/build/three.module.js";
import * as __WEBPACK_EXTERNAL_MODULE_https_unpkg_com_three_0_140_0_examples_jsm_loaders_GLTFLoader_js_35ca2246__ from "https://unpkg.com/three@0.140.0/examples/jsm/loaders/GLTFLoader.js";
/******/ var __webpack_modules__ = ({

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var https_unpkg_com_three_0_140_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://unpkg.com/three@0.140.0/build/three.module.js */ \"https://unpkg.com/three@0.140.0/build/three.module.js\");\n/* harmony import */ var _modules_renderer_renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderer/renderer.js */ \"./client/src/modules/renderer/renderer.js\");\n/* harmony import */ var _modules_atlas_assets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/atlas/assets.js */ \"./client/src/modules/atlas/assets.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  THREE:https_unpkg_com_three_0_140_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__,\r\n  ASSETS:_modules_atlas_assets_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n});\r\n\r\n_modules_atlas_assets_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].load();\r\n\r\n_modules_renderer_renderer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n\n//# sourceURL=webpack://webpack-basic/./client/src/index.js?");

/***/ }),

/***/ "./client/src/modules/atlas/assets.js":
/*!********************************************!*\
  !*** ./client/src/modules/atlas/assets.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./client/src/modules/atlas/models.js\");\n/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textures */ \"./client/src/modules/atlas/textures.js\");\n/* harmony import */ var https_unpkg_com_three_0_140_0_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! https://unpkg.com/three@0.140.0/examples/jsm/loaders/GLTFLoader.js */ \"https://unpkg.com/three@0.140.0/examples/jsm/loaders/GLTFLoader.js\");\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  textures:{},\r\n  geometries:{},\r\n\r\n  load:async function(){\r\n    const that = this;\r\n    async function loadModels(){\r\n      const loader = new https_unpkg_com_three_0_140_0_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\r\n      let modelIndex = -1;\r\n      \r\n      return new Promise(res => {\r\n        function load(){ \r\n          modelIndex++;\r\n          if(modelIndex < _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length){\r\n            const modelData = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"][modelIndex];\r\n            const path = './assets/models/' + modelData.folder + modelData.file;\r\n              loader.load(path,(model)=>{\r\n                that.geometries[modelData.name] = model.scene.children[0].geometry;\r\n                load();\r\n              });\r\n          }else{\r\n            res(true);\r\n          };\r\n        }\r\n        load();\r\n      });\r\n    };\r\n\r\n\r\n    loadModels().then((res)=>{\r\n      console.log(res)\r\n    });\r\n  }\r\n\r\n});\r\n\n\n//# sourceURL=webpack://webpack-basic/./client/src/modules/atlas/assets.js?");

/***/ }),

/***/ "./client/src/modules/atlas/models.js":
/*!********************************************!*\
  !*** ./client/src/modules/atlas/models.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n    {\r\n        name:'test_model',\r\n        folder:'',\r\n        file:'test.glb',\r\n    }\r\n]);\n\n//# sourceURL=webpack://webpack-basic/./client/src/modules/atlas/models.js?");

/***/ }),

/***/ "./client/src/modules/atlas/textures.js":
/*!**********************************************!*\
  !*** ./client/src/modules/atlas/textures.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n    {\r\n        name:'test_texture',\r\n        file:'test.png',\r\n    }\r\n]);\n\n//# sourceURL=webpack://webpack-basic/./client/src/modules/atlas/textures.js?");

/***/ }),

/***/ "./client/src/modules/renderer/renderer.js":
/*!*************************************************!*\
  !*** ./client/src/modules/renderer/renderer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ \"./client/src/index.js\");\n\r\nlet THREE;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    init(startRender){\r\n        THREE = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THREE;\r\n        const canvasRenderer = document.createElement('canvas');\r\n        canvasRenderer.showContextMenu = function(e) {\r\n            e.preventDefault();\r\n        };\r\n        document.body.append(canvasRenderer);\r\n        const renderer = new THREE.WebGLRenderer({\r\n            canvas: canvasRenderer,\r\n        });\r\n        this.renderer = renderer;\r\n        const camera = new THREE.PerspectiveCamera(10, 2, 0.2, 500);\r\n        this.camera = camera;\r\n        camera.position.set(10, 10, 10);\r\n        camera.lookAt(0, 0, 0);\r\n        \r\n        const scene = new THREE.Scene();\r\n        this.scene = scene;\r\n\r\n        window.addEventListener(\"resize\", this.setSize);\r\n        this.setSize();\r\n        \r\n\r\n        if(startRender) this.render();\r\n    },\r\n\r\n    setSize(){\r\n        const windowWidth = window.innerWidth;\r\n        const windowHeight = window.innerHeight;\r\n        const windowPixelRatio = Math.min(window.devicePixelRatio, 2);\r\n\r\n        this.renderer.setSize(windowWidth, windowHeight);\r\n        this.renderer.setPixelRatio(windowPixelRatio);\r\n\r\n        this.camera.aspect = windowWidth / windowHeight;\r\n        this.camera.updateProjectionMatrix();\r\n    },\r\n\r\n    render:function(){\r\n        this.renderer.render(this.scene, this.camera);\r\n        requestAnimationFrame(()=>{this.render()});\r\n    },\r\n});\n\n//# sourceURL=webpack://webpack-basic/./client/src/modules/renderer/renderer.js?");

/***/ }),

/***/ "https://unpkg.com/three@0.140.0/build/three.module.js":
/*!************************************************************************!*\
  !*** external "https://unpkg.com/three@0.140.0/build/three.module.js" ***!
  \************************************************************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_https_unpkg_com_three_0_140_0_build_three_module_js_b7aa890c__;

/***/ }),

/***/ "https://unpkg.com/three@0.140.0/examples/jsm/loaders/GLTFLoader.js":
/*!*************************************************************************************!*\
  !*** external "https://unpkg.com/three@0.140.0/examples/jsm/loaders/GLTFLoader.js" ***!
  \*************************************************************************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_https_unpkg_com_three_0_140_0_examples_jsm_loaders_GLTFLoader_js_35ca2246__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("./client/src/index.js");
/******/ 
