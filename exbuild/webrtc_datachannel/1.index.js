(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: start, __wbindgen_string_new, __wbindgen_object_clone_ref, __wbg_log_e851f2d904d456d5, __wbg_warn_43719b0a5c70fd1e, __wbg_candidate_90ea8f43c3776e4c, __wbg_signalingState_4cfece90d9db85d9, __wbg_setonicecandidate_53d922373597b50c, __wbg_setondatachannel_9ab2eb5f958ba781, __wbg_new_20043cd3ba281e31, __wbg_addIceCandidate_274eeb6ca08d7acd, __wbg_createAnswer_d99fb157d77812eb, __wbg_createDataChannel_54e16af3c5732328, __wbg_createOffer_c556d186ceda4d2a, __wbg_setLocalDescription_203589a1cea8e3f4, __wbg_setRemoteDescription_ae82ae8a0ca7c583, __wbg_candidate_9578119a37210b17, __wbg_data_b7536deeccc3c114, __wbg_label_939d61dfd3c7e3e2, __wbg_setonmessage_55ad8e774f9f0a8a, __wbg_send_f774cfc7ed074960, __wbg_channel_42e4bc8e42d005bc, __wbindgen_cb_drop, __wbindgen_object_drop_ref, __wbg_new_d14bf16e62c6b3d5, __wbg_resolve_778af3f90b8e2b59, __wbg_then_367b3e718069cfb9, __wbg_then_ac66ca61394bfd21, __wbg_get_0c6963cbab34fbb6, __wbg_set_61642586f7156f4a, __wbindgen_string_get, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_closure_wrapper211, __wbindgen_closure_wrapper213, __wbindgen_closure_wrapper215, __wbindgen_closure_wrapper596 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"start\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_e851f2d904d456d5\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_log_e851f2d904d456d5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_warn_43719b0a5c70fd1e\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_warn_43719b0a5c70fd1e\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_candidate_90ea8f43c3776e4c\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_candidate_90ea8f43c3776e4c\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_signalingState_4cfece90d9db85d9\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_signalingState_4cfece90d9db85d9\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setonicecandidate_53d922373597b50c\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setonicecandidate_53d922373597b50c\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setondatachannel_9ab2eb5f958ba781\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setondatachannel_9ab2eb5f958ba781\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_20043cd3ba281e31\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_20043cd3ba281e31\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_addIceCandidate_274eeb6ca08d7acd\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_addIceCandidate_274eeb6ca08d7acd\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createAnswer_d99fb157d77812eb\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createAnswer_d99fb157d77812eb\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createDataChannel_54e16af3c5732328\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createDataChannel_54e16af3c5732328\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createOffer_c556d186ceda4d2a\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createOffer_c556d186ceda4d2a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setLocalDescription_203589a1cea8e3f4\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setLocalDescription_203589a1cea8e3f4\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setRemoteDescription_ae82ae8a0ca7c583\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setRemoteDescription_ae82ae8a0ca7c583\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_candidate_9578119a37210b17\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_candidate_9578119a37210b17\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_data_b7536deeccc3c114\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_data_b7536deeccc3c114\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_label_939d61dfd3c7e3e2\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_label_939d61dfd3c7e3e2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setonmessage_55ad8e774f9f0a8a\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setonmessage_55ad8e774f9f0a8a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_send_f774cfc7ed074960\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_send_f774cfc7ed074960\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_channel_42e4bc8e42d005bc\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_channel_42e4bc8e42d005bc\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_cb_drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_d14bf16e62c6b3d5\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_d14bf16e62c6b3d5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_resolve_778af3f90b8e2b59\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_resolve_778af3f90b8e2b59\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_367b3e718069cfb9\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_then_367b3e718069cfb9\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_ac66ca61394bfd21\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_then_ac66ca61394bfd21\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_get_0c6963cbab34fbb6\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_get_0c6963cbab34fbb6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_61642586f7156f4a\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_61642586f7156f4a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_get\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_debug_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_rethrow\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper211\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper211\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper213\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper213\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper215\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper215\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper596\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper596\"]; });\n\n\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/*! exports provided: start, __wbindgen_string_new, __wbindgen_object_clone_ref, __wbg_log_e851f2d904d456d5, __wbg_warn_43719b0a5c70fd1e, __wbg_candidate_90ea8f43c3776e4c, __wbg_signalingState_4cfece90d9db85d9, __wbg_setonicecandidate_53d922373597b50c, __wbg_setondatachannel_9ab2eb5f958ba781, __wbg_new_20043cd3ba281e31, __wbg_addIceCandidate_274eeb6ca08d7acd, __wbg_createAnswer_d99fb157d77812eb, __wbg_createDataChannel_54e16af3c5732328, __wbg_createOffer_c556d186ceda4d2a, __wbg_setLocalDescription_203589a1cea8e3f4, __wbg_setRemoteDescription_ae82ae8a0ca7c583, __wbg_candidate_9578119a37210b17, __wbg_data_b7536deeccc3c114, __wbg_label_939d61dfd3c7e3e2, __wbg_setonmessage_55ad8e774f9f0a8a, __wbg_send_f774cfc7ed074960, __wbg_channel_42e4bc8e42d005bc, __wbindgen_cb_drop, __wbindgen_object_drop_ref, __wbg_new_d14bf16e62c6b3d5, __wbg_resolve_778af3f90b8e2b59, __wbg_then_367b3e718069cfb9, __wbg_then_ac66ca61394bfd21, __wbg_get_0c6963cbab34fbb6, __wbg_set_61642586f7156f4a, __wbindgen_string_get, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_closure_wrapper211, __wbindgen_closure_wrapper213, __wbindgen_closure_wrapper215, __wbindgen_closure_wrapper596 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, module, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_e851f2d904d456d5\", function() { return __wbg_log_e851f2d904d456d5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_warn_43719b0a5c70fd1e\", function() { return __wbg_warn_43719b0a5c70fd1e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_candidate_90ea8f43c3776e4c\", function() { return __wbg_candidate_90ea8f43c3776e4c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_signalingState_4cfece90d9db85d9\", function() { return __wbg_signalingState_4cfece90d9db85d9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setonicecandidate_53d922373597b50c\", function() { return __wbg_setonicecandidate_53d922373597b50c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setondatachannel_9ab2eb5f958ba781\", function() { return __wbg_setondatachannel_9ab2eb5f958ba781; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_20043cd3ba281e31\", function() { return __wbg_new_20043cd3ba281e31; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_addIceCandidate_274eeb6ca08d7acd\", function() { return __wbg_addIceCandidate_274eeb6ca08d7acd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createAnswer_d99fb157d77812eb\", function() { return __wbg_createAnswer_d99fb157d77812eb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createDataChannel_54e16af3c5732328\", function() { return __wbg_createDataChannel_54e16af3c5732328; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createOffer_c556d186ceda4d2a\", function() { return __wbg_createOffer_c556d186ceda4d2a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setLocalDescription_203589a1cea8e3f4\", function() { return __wbg_setLocalDescription_203589a1cea8e3f4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setRemoteDescription_ae82ae8a0ca7c583\", function() { return __wbg_setRemoteDescription_ae82ae8a0ca7c583; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_candidate_9578119a37210b17\", function() { return __wbg_candidate_9578119a37210b17; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_data_b7536deeccc3c114\", function() { return __wbg_data_b7536deeccc3c114; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_label_939d61dfd3c7e3e2\", function() { return __wbg_label_939d61dfd3c7e3e2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setonmessage_55ad8e774f9f0a8a\", function() { return __wbg_setonmessage_55ad8e774f9f0a8a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_send_f774cfc7ed074960\", function() { return __wbg_send_f774cfc7ed074960; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_channel_42e4bc8e42d005bc\", function() { return __wbg_channel_42e4bc8e42d005bc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_d14bf16e62c6b3d5\", function() { return __wbg_new_d14bf16e62c6b3d5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_resolve_778af3f90b8e2b59\", function() { return __wbg_resolve_778af3f90b8e2b59; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_367b3e718069cfb9\", function() { return __wbg_then_367b3e718069cfb9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_ac66ca61394bfd21\", function() { return __wbg_then_ac66ca61394bfd21; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_get_0c6963cbab34fbb6\", function() { return __wbg_get_0c6963cbab34fbb6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_61642586f7156f4a\", function() { return __wbg_set_61642586f7156f4a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper211\", function() { return __wbindgen_closure_wrapper211; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper213\", function() { return __wbindgen_closure_wrapper213; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper215\", function() { return __wbindgen_closure_wrapper215; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper596\", function() { return __wbindgen_closure_wrapper596; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nfunction makeMutClosure(arg0, arg1, dtor, f) {\n    const state = { a: arg0, b: arg1, cnt: 1, dtor };\n    const real = (...args) => {\n        // First up with a closure we increment the internal reference\n        // count. This ensures that the Rust closure environment won't\n        // be deallocated while we're invoking it.\n        state.cnt++;\n        const a = state.a;\n        state.a = 0;\n        try {\n            return f(a, state.b, ...args);\n        } finally {\n            if (--state.cnt === 0) {\n                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_export_2\"].get(state.dtor)(a, state.b);\n\n            } else {\n                state.a = a;\n            }\n        }\n    };\n    real.original = state;\n\n    return real;\n}\n\nfunction logError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n            } catch(_) {\n                return \"<failed to stringify thrown value>\";\n            }\n        }());\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n        throw e;\n    }\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\nfunction __wbg_adapter_18(arg0, arg1, arg2) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hab752ac44bd6d54b\"](arg0, arg1, addHeapObject(arg2));\n}\n\nfunction __wbg_adapter_21(arg0, arg1, arg2) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3ec9655de4ae3831\"](arg0, arg1, addHeapObject(arg2));\n}\n\nfunction __wbg_adapter_24(arg0, arg1, arg2) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9cea32b1724d287f\"](arg0, arg1, addHeapObject(arg2));\n}\n\nfunction __wbg_adapter_27(arg0, arg1, arg2) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h05bd8531872ab57c\"](arg0, arg1, addHeapObject(arg2));\n}\n\n/**\n*/\nfunction start() {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"start\"]();\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n    }\n}\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_object_clone_ref(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_log_e851f2d904d456d5() { return logError(function (arg0, arg1) {\n    console.log(getStringFromWasm0(arg0, arg1));\n}, arguments) };\n\nfunction __wbg_warn_43719b0a5c70fd1e() { return logError(function (arg0, arg1) {\n    console.warn(getStringFromWasm0(arg0, arg1));\n}, arguments) };\n\nfunction __wbg_candidate_90ea8f43c3776e4c() { return logError(function (arg0) {\n    var ret = getObject(arg0).candidate;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_signalingState_4cfece90d9db85d9() { return logError(function (arg0) {\n    var ret = getObject(arg0).signalingState;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_setonicecandidate_53d922373597b50c() { return logError(function (arg0, arg1) {\n    getObject(arg0).onicecandidate = getObject(arg1);\n}, arguments) };\n\nfunction __wbg_setondatachannel_9ab2eb5f958ba781() { return logError(function (arg0, arg1) {\n    getObject(arg0).ondatachannel = getObject(arg1);\n}, arguments) };\n\nfunction __wbg_new_20043cd3ba281e31() { return handleError(function () {\n    var ret = new RTCPeerConnection();\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_addIceCandidate_274eeb6ca08d7acd() { return logError(function (arg0, arg1) {\n    var ret = getObject(arg0).addIceCandidate(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_createAnswer_d99fb157d77812eb() { return logError(function (arg0) {\n    var ret = getObject(arg0).createAnswer();\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_createDataChannel_54e16af3c5732328() { return logError(function (arg0, arg1, arg2) {\n    var ret = getObject(arg0).createDataChannel(getStringFromWasm0(arg1, arg2));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_createOffer_c556d186ceda4d2a() { return logError(function (arg0) {\n    var ret = getObject(arg0).createOffer();\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_setLocalDescription_203589a1cea8e3f4() { return logError(function (arg0, arg1) {\n    var ret = getObject(arg0).setLocalDescription(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_setRemoteDescription_ae82ae8a0ca7c583() { return logError(function (arg0, arg1) {\n    var ret = getObject(arg0).setRemoteDescription(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_candidate_9578119a37210b17() { return logError(function (arg0, arg1) {\n    var ret = getObject(arg1).candidate;\n    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n}, arguments) };\n\nfunction __wbg_data_b7536deeccc3c114() { return logError(function (arg0) {\n    var ret = getObject(arg0).data;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_label_939d61dfd3c7e3e2() { return logError(function (arg0, arg1) {\n    var ret = getObject(arg1).label;\n    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n}, arguments) };\n\nfunction __wbg_setonmessage_55ad8e774f9f0a8a() { return logError(function (arg0, arg1) {\n    getObject(arg0).onmessage = getObject(arg1);\n}, arguments) };\n\nfunction __wbg_send_f774cfc7ed074960() { return handleError(function (arg0, arg1, arg2) {\n    getObject(arg0).send(getStringFromWasm0(arg1, arg2));\n}, arguments) };\n\nfunction __wbg_channel_42e4bc8e42d005bc() { return logError(function (arg0) {\n    var ret = getObject(arg0).channel;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_cb_drop(arg0) {\n    const obj = takeObject(arg0).original;\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return true;\n    }\n    var ret = false;\n    _assertBoolean(ret);\n    return ret;\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_new_d14bf16e62c6b3d5() { return logError(function () {\n    var ret = new Object();\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_resolve_778af3f90b8e2b59() { return logError(function (arg0) {\n    var ret = Promise.resolve(getObject(arg0));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_then_367b3e718069cfb9() { return logError(function (arg0, arg1) {\n    var ret = getObject(arg0).then(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_then_ac66ca61394bfd21() { return logError(function (arg0, arg1, arg2) {\n    var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_get_0c6963cbab34fbb6() { return handleError(function (arg0, arg1) {\n    var ret = Reflect.get(getObject(arg0), getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_set_61642586f7156f4a() { return handleError(function (arg0, arg1, arg2) {\n    var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));\n    _assertBoolean(ret);\n    return ret;\n}, arguments) };\n\nfunction __wbindgen_string_get(arg0, arg1) {\n    const obj = getObject(arg1);\n    var ret = typeof(obj) === 'string' ? obj : undefined;\n    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbindgen_debug_string(arg0, arg1) {\n    var ret = debugString(getObject(arg1));\n    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_rethrow(arg0) {\n    throw takeObject(arg0);\n};\n\nfunction __wbindgen_closure_wrapper211() { return logError(function (arg0, arg1, arg2) {\n    var ret = makeMutClosure(arg0, arg1, 30, __wbg_adapter_18);\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_closure_wrapper213() { return logError(function (arg0, arg1, arg2) {\n    var ret = makeMutClosure(arg0, arg1, 34, __wbg_adapter_21);\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_closure_wrapper215() { return logError(function (arg0, arg1, arg2) {\n    var ret = makeMutClosure(arg0, arg1, 32, __wbg_adapter_24);\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_closure_wrapper596() { return logError(function (arg0, arg1, arg2) {\n    var ret = makeMutClosure(arg0, arg1, 57, __wbg_adapter_27);\n    return addHeapObject(ret);\n}, arguments) };\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./pkg/index_bg.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, start, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hab752ac44bd6d54b, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3ec9655de4ae3831, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9cea32b1724d287f, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h05bd8531872ab57c, __wbindgen_exn_store, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);