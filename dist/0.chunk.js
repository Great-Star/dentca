webpackJsonp([0],{

/***/ "../../../../../src/app/user/reducers/selector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUserOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUser; });

// Base product state function
/**
 *
 *
 * @param {AppState} state
 * @returns {UserState}
 */
function getUserState(state) {
    return state.users;
}
// ******************** Individual selectors ***************************
/**
 *
 *
 * @param {UserState} state
 * @returns {Order[]}
 */
var fetchUserOrders = function (state) {
    console.log("state2", state.orders.toJS());
    return state.orders.toJS();
};
/**
 *
 *
 * @param {UserState} state
 * @returns {User}
 */
var fetchCurrentUser = function (state) {
    return state.user;
};
// *************************** PUBLIC API's ****************************
var getUserOrders = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, fetchUserOrders);
var getUser = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, fetchCurrentUser);
//# sourceMappingURL=selector.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map