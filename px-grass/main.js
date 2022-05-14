/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you  are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
import * as __WEBPACK_EXTERNAL_MODULE_https_unpkg_com_three_0_140_0_build_three_module_js_b7aa890c__ from "https://unpkg.com/three@0.140.0/build/three.module.js";
import * as __WEBPACK_EXTERNAL_MODULE_https_unpkg_com_three_0_140_0_examples_jsm_loaders_GLTFLoader_js_35ca2246__ from "https://unpkg.com/three@0.140.0/examples/jsm/loaders/GLTFLoader.js";
/******/ var __webpack_modules__ = ({

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var https_unpkg_com_three_0_140_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://unpkg.com/three@0.140.0/build/three.module.js */ \"https://unpkg.com/three@0.140.0/build/three.module.js\");\n/* harmony import */ var _modules_renderer_renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderer/renderer.js */ \"./client/src/modules/renderer/renderer.js\");\n/* harmony import */ var _modules_atlas_assets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/atlas/assets.js */ \"./client/src/modules/atlas/assets.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./client/src/style.scss\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  THREE:https_unpkg_com_three_0_140_0_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__,\n  ASSETS:_modules_atlas_assets_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n});\n_modules_atlas_assets_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].load().then(assets => {\n  _modules_renderer_renderer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init(true);\n});\n\n\n\n//# sourceURL=webpack://webpack-basic/./client/src/index.js?");

/***/ }),

/***/ "./client/src/modules/atlas/assets.js":
/*!********************************************!*\
  !*** ./client/src/modules/atlas/assets.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./client/src/modules/atlas/models.js\");\n/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textures */ \"./client/src/modules/atlas/textures.js\");\n/* harmony import */ var https_unpkg_com_three_0_140_0_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! https://unpkg.com/three@0.140.0/examples/jsm/loaders/GLTFLoader.js */ \"https://unpkg.com/three@0.140.0/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../index.js */ \"./client/src/index.js\");\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  textures:{},\n  geometries:{},\n\n  load:async function(){\n    const that = this;\n\n\n    async function loadModels(){\n      const loader = new https_unpkg_com_three_0_140_0_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n      let modelIndex = -1;\n      return new Promise(res => {\n        function load(){ \n          modelIndex++;\n          if(modelIndex < _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length){\n            const modelData = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"][modelIndex];\n            const path = './assets/models/' + modelData.folder + modelData.file;\n            loader.load(path,(model)=>{\n              that.geometries[modelData.name] = model.scene.children[0].geometry;\n              load();\n            });\n          }else{\n            res(true);\n          };\n        }\n        load();\n      });\n    };\n\n    async function loadTextures(){\n      const loader = new _index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].THREE.TextureLoader();\n      let textureIndex = -1;\n      return new Promise(res => {\n        function load(){ \n          textureIndex++;\n          if(textureIndex < _textures__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length){\n            const textureData = _textures__WEBPACK_IMPORTED_MODULE_1__[\"default\"][textureIndex];\n            const path = './assets/textures/' + textureData.folder + textureData.file;\n            loader.load(path,(texture)=>{\n              that.textures[textureData.name] = texture;\n              that.textures[textureData.name].flipY = false;\n              load();\n            });\n          }else{\n            res(true);\n          };\n        }\n        load();\n      });\n    };\n\n    return new Promise(assetsLoaded => {\n      loadModels().then((modelsLoaded)=>{\n        loadTextures().then((textureLoader)=>{\n          assetsLoaded(_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n        });\n      });\n\n    });\n\n  }\n\n});\n\n\n//# sourceURL=webpack://webpack-basic/./client/src/modules/atlas/assets.js?");

/***/ }),

/***/ "./client/src/modules/atlas/models.js":
/*!********************************************!*\
  !*** ./client/src/modules/atlas/models.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n    {\n        name:'test_model',\n        folder:'',\n        file:'test.glb',\n    },\n    {\n        name:'grass_1',\n        folder:'',\n        file:'grass_1.glb',\n    },\n    {\n        name:'grass_2',\n        folder:'',\n        file:'grass_2.glb',\n    },\n    {\n        name:'grass_3',\n        folder:'',\n        file:'grass_3.glb',\n    }\n]);\n\n//# sourceURL=webpack://webpack-basic/./client/src/modules/atlas/models.js?");

/***/ }),

/***/ "./client/src/modules/atlas/textures.js":
/*!**********************************************!*\
  !*** ./client/src/modules/atlas/textures.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n    {\n        name:'test_texture',\n        folder:'',\n        file:'test.png',\n    },\n    {\n        name:'pxTexture',\n        folder:'',\n        file:'pxTexture.png',\n    }\n]);\n\n//# sourceURL=webpack://webpack-basic/./client/src/modules/atlas/textures.js?");

/***/ }),

/***/ "./client/src/modules/renderer/renderer.js":
/*!*************************************************!*\
  !*** ./client/src/modules/renderer/renderer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ \"./client/src/index.js\");\n\nlet THREE;\nlet mesh,box;\nlet playerPos;\n\nlet time = {value:0};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    init(startRender){\n        THREE = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THREE;\n        const canvasRenderer = document.createElement('canvas');\n        canvasRenderer.showContextMenu = function(e) {\n            e.preventDefault();\n        };\n        document.body.append(canvasRenderer);\n        const renderer = new THREE.WebGLRenderer({\n            canvas: canvasRenderer,\n        });\n        this.renderer = renderer;\n        renderer.shadowMap.enabled = true;\n        // renderer.shadowMap.type = THREE.PCFSoftShadowMap;\n        // renderer.toneMapping = THREE.ACESFilmicToneMapping;\n\n\n        const camera = new THREE.PerspectiveCamera(10, 2, 0.2, 500);\n        this.camera = camera;\n        camera.position.set(10, 10, 10);\n        camera.lookAt(0, 0, 0);\n        this.clock = new THREE.Clock;\n        \n        const scene = new THREE.Scene();\n        this.scene = scene;\n\n        window.addEventListener(\"resize\", ()=>{this.setSize()});\n        this.setSize();\n        \n\n        if(startRender){\n            this.clock.start();\n\n\n            const light = new THREE.DirectionalLight();\n            light.shadow.bias = 0;\n            light.castShadow = true;\n            mesh = new THREE.Mesh(new THREE.TorusKnotGeometry(0.5,0.2),new THREE.MeshToonMaterial());\n            light.position.set(10,10,-10);\n            light.color = new THREE.Color(0xfffcf2);\n            scene.add(light);\n            const ambientLight = new THREE.AmbientLight();\n            ambientLight.color = new THREE.Color(0xf2fcff);\n            ambientLight.intensity = 0.4;\n            scene.add( ambientLight );\n\n            const plane =  new THREE.Mesh(new THREE.PlaneGeometry(),new THREE.MeshPhongMaterial({color:0x232e1b}));\n            plane.rotation.x = -90*Math.PI/180;\n            // plane.position.y -= 0.5;\n            plane.scale.x = plane.scale.y = 10;\n            plane.receiveShadow = true;\n            scene.add(plane);\n            \n            const grassMaterial = new THREE.MeshPhongMaterial();\n            _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ASSETS.textures.pxTexture.magFilter = THREE.NearestFilter;\n            _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ASSETS.textures.pxTexture.minFilter = THREE.NearestFilter;\n            _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ASSETS.textures.pxTexture.flipY = false;\n            grassMaterial.map = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ASSETS.textures.pxTexture;\n            grassMaterial.transparent = true;\n\n            grassMaterial.side = THREE.DoubleSide;\n            grassMaterial.alphaTest = 0.6;\n\n\n            playerPos = new THREE.Uniform(new THREE.Vector2(0,0));\n            grassMaterial.onBeforeCompile = (shader) => {\n                shader.uniforms.time = time;\n                \n                shader.uniforms.playerPos = playerPos;\n                const token_vs = `#define PHONG`;\n                const vs = `\n                    #define PHONG\n                    uniform float time;\n                    uniform vec2 playerPos;\n                    varying vec3 vPosition;\n                    varying vec4 xPosition;\n                `;\n\n                shader.vertexShader = shader.vertexShader.replace(token_vs,vs);\n                \n                const token_vs_2 = `#include <fog_vertex>`;\n                const vs_2 = `\n                    #include <fog_vertex>\n                    vPosition = position;\n                    vPosition.x += vPosition.y*cos(time)*0.05;\n                    vPosition.z += vPosition.y*sin(time)*0.05;\n                    xPosition = modelMatrix*vec4( vPosition, 1.0 );\n                    if(vPosition.y > 0.2 && distance(xPosition.x,playerPos.x) < .5 && distance(xPosition.z,playerPos.y) < .5){\n                        vPosition.y *= 0.3;\n                        vPosition.x +=  xPosition.x - playerPos.x;\n                        vPosition.z += xPosition.z - playerPos.y;\n                    }\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0 );\n                `\n                shader.vertexShader = shader.vertexShader.replace(token_vs_2,vs_2);\n            };\n\n\n\n            const depthMaterial = new THREE.MeshDepthMaterial( {\n                depthPacking: THREE.RGBADepthPacking,\n                map:  _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ASSETS.textures.pxTexture,\n                alphaTest: 0.2,\n            } );\n            \n            depthMaterial.onBeforeCompile = (shader) => {\n                shader.uniforms.time = time;\n                shader.uniforms.playerPos = playerPos;\n                const token_vs = `#include <common>`;\n                const vs = `\n                #include <common>\n                uniform float time;\n                uniform float random;\n                uniform vec2 playerPos;\n                varying vec3 vPosition;\n                varying vec4 xPosition;\n                \n                `;\n\n                shader.vertexShader = shader.vertexShader.replace(token_vs,vs);\n\n                const token_vs_2 = `vHighPrecisionZW = gl_Position.zw;`;\n                const vs_2 = `\n                    vHighPrecisionZW = gl_Position.zw;\n                    vPosition = position;\n                    vPosition.x += vPosition.y*cos(time)*0.05;\n                    vPosition.z += vPosition.y*sin(time)*0.05;\n                    xPosition = modelMatrix*vec4( vPosition, 1.0 );\n                    if(vPosition.y > 0.2 && distance(xPosition.x,playerPos.x) < .5 && distance(xPosition.z,playerPos.y) < .5){\n                        vPosition.y *= 0.3;\n                        vPosition.x +=  xPosition.x - playerPos.x;\n                        vPosition.z += xPosition.z - playerPos.y;\n                    }\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0 );\n                `\n                shader.vertexShader = shader.vertexShader.replace(token_vs_2,vs_2);\n            };\n\n            const count = 3;\n\n            for(let x = -count; x<count;x++){\n                for(let y=-count;y<count;y++){\n                    const grassPlane = new THREE.Mesh(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ASSETS.geometries.grass_1.clone(),grassMaterial);\n\n                    grassPlane.castShadow = true;\n                    grassPlane.receiveShadow = true;\n                    \n                    grassPlane.position.x = x;\n                    grassPlane.position.y = -0.0;\n                    grassPlane.position.z = y;\n\n                    grassPlane.rotation.y = Math.PI/180 * Math.random()*180;\n\n                    grassPlane.customDepthMaterial = depthMaterial;\n                    scene.add(grassPlane);\n                }\n            }\n            \n            for(let x = -count; x<count;x++){\n                for(let y=-count;y<count;y++){\n                    const grassPlane = new THREE.Mesh(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ASSETS.geometries.grass_2.clone(),grassMaterial);    \n        \n                    grassPlane.castShadow = true;\n                    grassPlane.receiveShadow = true;\n                    \n                    grassPlane.position.x = x;\n                    grassPlane.position.z = y;\n\n                    grassPlane.rotation.y = Math.PI/180 * Math.random()*180;\n\n\n                    grassPlane.customDepthMaterial = depthMaterial;\n                    scene.add(grassPlane);\n                }\n            }\n\n            for(let x = -count; x<count;x++){\n                for(let y=-count;y<count;y++){\n                    const grassPlane = new THREE.Mesh(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ASSETS.geometries.grass_3.clone(),grassMaterial);\n        \n                    grassPlane.castShadow = true;\n                    grassPlane.receiveShadow = true;\n                    \n                    grassPlane.position.x = x;\n                    grassPlane.position.z = y;\n\n                    grassPlane.rotation.y = Math.PI/180 * Math.random()*180;\n\n\n                    grassPlane.customDepthMaterial = depthMaterial;\n                    scene.add(grassPlane);\n                }\n            }\n\n\n\n            box = new THREE.Mesh(new THREE.BoxBufferGeometry(0.2,1,0.2),new THREE.MeshPhongMaterial());\n            box.material.gradientMap = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ASSETS.textures.gradient_map;\n            box.castShadow = true;\n            box.receiveShadow = true;\n            box.position.y = 0.5;\n\n            scene.add(box)\n            \n            this.render();\n        }\n    },\n\n    setSize(){\n        const windowWidth = window.outerWidth;\n        const windowHeight = window.outerHeight;\n        const windowPixelRatio = Math.min(window.devicePixelRatio, 2);\n\n        this.renderer.setSize(windowWidth/8, windowHeight/8);\n        // this.renderer.setSize(windowWidth, windowHeight);\n\n        this.renderer.setPixelRatio(1);\n        this.renderer.domElement.style.width = window.innerWidth + 'px';\n        this.renderer.domElement.style.height = window.innerHeight  + 'px';\n\n        this.camera.aspect = windowWidth / windowHeight;\n        this.camera.updateProjectionMatrix();\n        console.log( this.renderer.info.render.triangles );\n    },\n\n    render:function(){\n\n        time.value += 0.01;\n\n        // box.rotation.y = time.value;\n        this.renderer.render(this.scene, this.camera);\n\n\n        if(playerPos){\n            box.position.x = playerPos.value.x;\n            box.position.z = playerPos.value.y;\n            this.camera.position.x = playerPos.value.x + 10;\n            this.camera.position.z = playerPos.value.y + 10;\n            this.camera.lookAt(playerPos.value.x,0,playerPos.value.y);\n\n        }\n\n        requestAnimationFrame(()=>{this.render()});\n    },\n});\n\n\n\ndocument.addEventListener('keydown',(e)=>{\n    let speed = 0.1;\n    if(e.code === 'ArrowUp'){\n        playerPos.value.x -= speed;\n    }\n    if(e.code === 'ArrowDown'){\n        playerPos.value.x += speed;\n    }\n    if(e.code === 'ArrowLeft'){\n        playerPos.value.y += speed;\n    }\n    if(e.code === 'ArrowRight'){\n        playerPos.value.y -= speed;\n    }\n})\n\n//# sourceURL=webpack://webpack-basic/./client/src/modules/renderer/renderer.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/src/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/src/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  overflow: hidden;\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: red;\\n}\\n\\ncanvas {\\n  background-color: rgb(131, 131, 131);\\n  image-rendering: pixelated;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-basic/./client/src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-basic/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-basic/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./client/src/style.scss":
/*!*******************************!*\
  !*** ./client/src/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-basic/./client/src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-basic/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-basic/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-basic/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-basic/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-basic/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-basic/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 		id: moduleId,
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
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
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
